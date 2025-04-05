/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2RrEpuZDggFiELpn9Weqcga8gU2StNKus27tDrAZhUB1LnmXu5mBn8rY698pJnWZz6mv18unGwLpwzRmsDHjeHNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZx5Fpjc7w71BnQxvjko15qbPwxkZfwo5c3JTNFeRUSCJxJLoRyE8kbKSaivZqbMgXKBNEP4XxwBsejRounN62q",
  "key1": "reDEmyrsyuXHWdcxbsNjoCNbP246HbksiFj4m2DZK5AqUtbYRwkCn7KCeFoXWHkhGuzCRL88qT3vkLmnyxSC8kT",
  "key2": "2pGr61gZEKNHDPaLzdBiqbHpKjuJath9DZNreNJLcgQwy6q4c7vU6MUse1Qsi1gwE35V2JMUqrX72sz1Da7bPTQB",
  "key3": "3VFwCRFWrFVRfVgXuKwy8ShUwfzA8WQF5gxK7LveVpr6WqhHGe3aqFKEJaU9QS7fTuJjE9maCpJwuhoLeNPMd643",
  "key4": "3ksjJvQ5VwR7ivvGEuAJJACtz5phZVXUiJf9XJFg3njVB5LTxo1EpnNTdhCPRUFHxDNMmL8ywghkpYimFkh9UvCT",
  "key5": "3TmSketgVFgvr3xFdEfai2Xg5HTKDKFMduWJUdSD91WjreTzLXixgSCnaeZ8NbnJARW7qwVjT4CC97KYxAdYkjoi",
  "key6": "5HGAa2nurrr6V2SBSmSiy76EJjE15csFWNBfCCLBVzXx4qoS7KxgCHc1ErFVa8JRRTjEofvbibkdz6NAWVanCNcP",
  "key7": "WCwnwzZLXsffW5y2pyuCe4aomaTZ8fXr2gGoUtq8hTsMA5wiwXptxX3gsPyQ2NygYaBdwVHkXg3g7EqxYMQRDZY",
  "key8": "3uAgjcMYz2HG7LvDCakDj8Ga1ibXRqhmcZ1Hm7dsXbQYDPrtGiCP6daGhXoHQkxqjY5QkCTCjxmr6r1ZyVbbDdd7",
  "key9": "2WT1cM3VJpzCmny5gsNA9Ndyo9sbJFsXJmzFaq5RL2ou3iYCbn423homMZVVnyevPwAyRBqoeexUyBfASZPovAy7",
  "key10": "4tNYJd4qDNjzShDF5XTks87U4Dhef1y1tjtikSy6EFsvY6DeNtwcvm5qHmPxH6da3sKv7q94GoHmPoad2uYezVx9",
  "key11": "5pZ9btNG46EM1Q2MUyK11oogJU1FihaaJAmCRCZ67NcqHod7qoe866uKaT2mdLtoCfK681gEoCJM8b1DhdKcDnU4",
  "key12": "4fa3cdPpcJJcDuMzfevKvUWMeEN2TdCfePLT53bCRGKuFfbL5cwMagVuj1kNssbqzGd4GQWAadPzH57ZBY1fDT56",
  "key13": "3dk8oTmRmwZhqSUckTitwKxfcF6w3cTBVrWcmQGqU1yDFVVnAY3fNkPXk58ZArbKkQAiqq97sCQ1grjc3B31wHrw",
  "key14": "5r7AdPrqX5tNJXhgsQ6jNaFqJVf5dkh6kFd5FGgiM1JXBstwHj8iyDPvsjVbfektAuT3y8TGvNVqXNSBjgoWkqQS",
  "key15": "3H1Z58UPTrjM15MGgzhGQyPCAepEESRatvxPRHSFbKLtT6W4rXpaxkjA1ABhHFWuf3rBb1sPScdtas4rGCwBkcVz",
  "key16": "492ncUvyigATgBFCByLkewKaWydbSy5Wz9MVQwcuqGrgAMeh6NcbSbiKo6S6hymRjt7oWJejtQsgVKW5b64XYjfz",
  "key17": "5qyXKwMdMbNbuUyNzczdta3cSM4ni5onFc69PV4ieD7CzHaaJVyFbDFq8LYzFeUS4nRdKYAFjWiRATUSxmMskK6p",
  "key18": "MrtmS5mxtQH3n2ti6vC9Vsh7om1AuzxqKpMJbUxuzohLzrapPxDQRoBQt9NKBTjTmdgZzpiKCFgb6xa7QVbiTRG",
  "key19": "eTsinXy5o7d1pMNBuyib23gFH6brctcCkkQT8dHfMhKAW3hiWJmNDypbtd81f5tupWxu6PF5orxq1HFSe6wdmDS",
  "key20": "xu7Uag2QTTUMWNLprkiyzQA5khHVg3Mb56eCgt7FEJ3f8wnpUqGMTiCZmwDpLwoksgdJMzXCxywPj6FSCGEru9K",
  "key21": "3GPV51NCBRos1jrUi6zjfjmonXBepCSqhgv2da4AYGi4miPpUSnwVm7b4e9BzZsZiJd2qTtvKHbSd2Gc8J9H3G9B",
  "key22": "48QYJFcrnvdPW9SX4wWDkNH3Sq9jPJ2Kks8azcevohXfLVGKCpErK4uLT6WcnffBSgWFwNKTmBMSGCmCZKpGpL5o",
  "key23": "4o4yN9kxuvtyHyiUogKpPq4UbASdGfSNKPEHPWvq8DfWPwgbwt7AtVDQmVvVHmJEZKtiG4bjvnUixqfRgLaa9gTH",
  "key24": "5UCRn9JhrwbvAyeV8quCpYNaC3k4tyoGm48TUQZ6Smho9WXXjwcVD84HiobKJMWAKyNM2v29Rv684cXyxP6SR8CZ",
  "key25": "3xDAZr33bPSFujWnPv1vDfT3HR4QjQNWZizTs6WCb8pNsdnGD8Hh2LKrFh2gaLPtsa5RLZKb98dNspLu63SLjNP",
  "key26": "5jjQTXNva3EY2pPwU85B3j8wtwgSyVMb8baSrUzaQHVfsYmYBNAGXu3qGkZ58AuhyNCwXsgGygStGuo2YbAT8oWb",
  "key27": "596FGUBrjktGJyPJDYKRoo4gBKCHT2ohUGe61DsXfWvXthXfFou2JxzvY6nm5uf4KhtUKAKETSWRgmQNvhUsrq1s",
  "key28": "2H4zmjwbAYn5tWwvLkbL5DBbapYCMa649iBeQjJDpMAtEgZqzEj5yCJDXhnprRojBXnvGCqTgCBSv2X6jKVRB6B8",
  "key29": "2EUewv3ZdBfUrvPxEKPs9syyoAWVoMs2T7jhXNwqB7YZFtmShifAUSXFD6F5GnwYfMATp3CUQXyCSnkqGpZRzxte",
  "key30": "mj7Hgr4TEcfU83zzwSueqzDm5ZThmzc7o7J18YXgLaADGoTnNjuhib38i1a4msaCmgNnnxTwkU7nCNPk6mYoR9n",
  "key31": "dMg8JsGRX5rsY9QYVs6aSVLzyGkpCJqw55sV4BF7Nben86T6JPK5fYWaekw1G6xUV71qqLxHJdQwXr9Fh3oj75d",
  "key32": "3RLFtBQNhyDWDMk9gvtKL46dy6iuXnJB4JnU3zkRm3Uqz2UHcBoPvR99mAHYLG4cr18sYwXLRMFM2UxbTMNXGPwE",
  "key33": "2VH423mb6kecuoXFEbbdPQnWPypAcjY9KdjWyujK7rdcsc8tCt9ytvGv4z8pfUcyTefy41Fqmn8SDmPmqmfizAx8",
  "key34": "3i3t85WDz1Pg6qnpSRwXmKTREb4Loy9t4yUACjHiYL9DwmnrzdoG3JqBQiy5mQafaYy6duWyKea5mvnkbcabPchP",
  "key35": "5uSZrMozukGte8LzK124K43eukmB6RvhGEcwBVhB1jbLj5nXHBg3eJLfYY6bxEW5izW9sfGV55fL4pwhYbuT2L5n",
  "key36": "vUUJyDQLV7yUyB2yYdeao94TvSwxaWPTrmNTb3uQWLP8N78NEwEqyhpuM3VL6FHTETNwFg5YwCtjvmfBvGjBAyo",
  "key37": "TsrMgSSkifE3MJu89dEgkKHx6yziAKH673o8bwsp6etTpUY5wo5yDw7A9dkf2s5kW8xUgK4X2VykL3MAUGwY3Sy",
  "key38": "YvE2yqZwDutEDth2Tx5MTHC4sRKi7kAmVxTtg98HsbkXJogP2YEouFEB5FqyvM8YK6QJvLixDqGjk1JUHgW8Azs",
  "key39": "3PAwRJjcdBGjTDfpAXSaBwmTBvwCEwu3K71wREMXMgYSBv7sVfEhYwHJ7QcKHL2EymNPFXTzSySoz4nvmj72hogX",
  "key40": "3H6NCSYjwqKhA8Nxm6DgDd5NJRcNGtWgcKmbqF6vG1UsL2s2AttpH91CoRdZeP6BcJBv5F23Ndh9m9W3faXf8Yz2"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
