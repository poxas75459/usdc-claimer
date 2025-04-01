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
    "4dLWmxfrHpp9EwEKLcRURpEpfkiVfq1UEcUH9SbwvW6GJL4T1KqmpSqjq33KZq214rHTGgvJahb5DgtD3eMeH2Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cPnAzW1HD374sDwkL28jybhRCpWA7pqFS4NgAESn3GkM8LtWb3r9tKQyJSvLekSWgQV9FAig5NRguGgUCDz22GX",
  "key1": "2p9dW2aWoM91BhPfGGC8ZdWoh5bZGq9rH7iM3LncYJS6N89oYBSxUePLZaMKZHC7FBXNJ33uTnnnCXAdBG73Nt7m",
  "key2": "7poVQ6jiwSxJzyP2AXT9tMQ1RNUUCHN4JK5Cx8M445z1F6UAM3YdjwtcydZNirgnhZBgSPGVucSHgoaySXPfqup",
  "key3": "4pNbyXg4jzKFzo746R5qcRLmzk6F9VUxEs5KWTLvH2tQN23y7D5WDsNxPXYULr3YW19ZLSUGhBofZCW8M49eYxhm",
  "key4": "5BgNkayW5bQ4u9554h46NRifwADCy2vNz2MmsxGfbTnNGFznKuhDNGW1K8GX6RQwBaoChRMtxiJFcihbd6aUFqd8",
  "key5": "3qo3WDYTLDwKrCzQmWoaXqUfzHAwvbnvwpGM4DwBGFabU4h64DczBxLQqVDSw5VDerNWUEAQa7bQ4Kox3vjRnCu",
  "key6": "3Pv76CdDkiPt54kuwsJjX57c7aReWFjRTH6vAMxEzsiAtxrBq69BW5FLRjbdvqKwzPyvo4MEMoHcbcYjHFG4coZf",
  "key7": "4n1nzPM7oe5MxMHxq2vV3aWQBk7xWrKtaMayu1mmB7Ayppftjb9FNpzVpMC7vkBWS2ucCpKXbvpKmNtufsA8uDsV",
  "key8": "5AhrYf94J9hny2vXeq9WfoESbFdhbESxHCNQXNxv9TErpJw2uZLKNyw2pVyufpaenDvvMfBB3GSnqTHMkq3ZDDsG",
  "key9": "FHBP56Mj5ZZYRKM68gKHnRDoWLkF1Ur4TMuV45DZz87ZASmZ3vXXP4VEFYgDjbcxMuyRiNzxYDEewX9GUpnsjPw",
  "key10": "4uzE7xPUhFdtgvQAcCx8f3xzLrZGWrqJpPLjzHQ5u2ZSVpEFgbAmxoRttGEF5B4tKsCXZEbuP7Xa6VaZmKiWAm1B",
  "key11": "5ATd6Yx898u4nNScmjUU1FiWrz4LiYw6WtSvQ352M7fR8zr8YM2Yv8QDkwCNhxg7wAJmjP62EjLvQ5aLqwbVwJhg",
  "key12": "5mJBg62w8JFTauJkdzgHWLkqKgbdn2gd5kro4wcvso579xs7VdeNwRv67UJ4UHzL25FpCLUHMgyKAKnqKLY7bRaV",
  "key13": "3H2ymU5mpyNA75eYygapg9Qs3kaWEXKFGpEJ2h8EX4hwKXgnHohVJBJryXd99PmJhHgVZ2pUi8d5xmjDJNBqYfKS",
  "key14": "2J5ENjcsyXwWQvXbKE56PqBmS4X5JsFX9LLThMrGvhqMG3LwKQU1ABZHjKb1TdX9g4Vheq2cbmgcmHBw2AVAQe4B",
  "key15": "2pKecgocyojpwdW33yns3adDLvemes8zGHbtRDNDHouiTai4bQtqsUGA62y8wj5qDmsfzx16XEdDWvYeE9AcSQkM",
  "key16": "4J3EZGfSkFhJfqvEjUw1uACbVXdvEVekfRF7XafBiVTnfP3TVKK7nL5tVJ7kLCC7a7vQ8Ud1qeH3jBGCVdgcLiCJ",
  "key17": "56KNK9zuHfQnmggzZ5E8zQtx9CFpqouFYNC9X9JkPUb5nmJiMn53MuWe53JDxx5T51TuMaqwGiNTXA5qreL42KPG",
  "key18": "5GjBdQwJB7Nz86gCgSh6Bq9R3EUi146hcSxTRsUbkQp8qZLHEf2a9oxF1HhzvRp7Nu8wV7eCacqP7xB5nXDAwnCD",
  "key19": "2RSRBzzJHNQDPzdr6DNW8p98HNxfrLbqJLD2K2hot2PuCw7tTVr5KqmCAGZexPAUtjCi8L2dzxUh89g9sK2KgHjW",
  "key20": "WJ1aZuispThWSpvv7evpdSQsReM8bBP5ttC2hMeRfKXDMBBZKhtB7V7TpBccRP9SrJTstNfedrv9SN9UovmdcGr",
  "key21": "2Ep8xeVdhAcCBHTteK3fJTBPUnf69t4JNTubLhRvp4rtszxY3uPMdJvPttNsRJkVkRxHu4B1DrndoDBWrbb8R8sX",
  "key22": "yYWUY7NDm84opdnWjjoEX5ePL5JCAbrMfbR5PBDWxtzqHqhYGTrT4rJHWxj2dnvzQRqyQNGNzjY385FrKiPmtJp",
  "key23": "5EQMJZTihN1bF6EukxqyTj5JbdwhSJ4rqeqCFqkgsFjjS4EkepKAWv1JGSd7b8WG8reSgn1489sKcCuvegpfR6TH",
  "key24": "4pEVvk3TNaBoQqQuFerJCJAKTCnAwuVTHRk19T9yYj9Fb8GJ2jKDYee6UEVYqWsADoDh8R1Un6rmSCGpfgBtsfjY",
  "key25": "5dxhmjdexYkSooKqiuLW4hp1XRnge1pwSBw39f3jZLuQaGsv6vPYkWtcPhCvXDGotoo45zAduCAtURdWjr7B4sAe"
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
