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
    "2VH9xgRgjrYrUx1RwyedwCHxBdQ6TSz9ec7yKH3btinMgE6ogQkXEvWtb9kbVjmoxXmS4RwziPb5rm2zwcgNZFWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWSWV5hcVL6xKpWv7tkxUGXqFQA6C62xJCjNnswnFqr7o6QzFQMo5SFD2LVGbrcNBokVFyF2zRCctsR3pTvK3th",
  "key1": "3RZXD5vhcsszTzzxFbR6hY5QqRmo4CqbtyuT1Gq1MgYvWn76dRBd2JPtMPcfJSEX7mEpZv7BaiFKw18haxicXB3x",
  "key2": "53oabJjRYP5vhjCi83qo586HhVKve83LXJSXdAe6YwNwRiEU7vVAbpMaUhhXt4t7A4gNPVrPGH86j5TJnZQhDBb3",
  "key3": "55ocXyJc2684S7XERjTXpF8BQiF7E8qRhsa2W25WYqKgufavP56HL52GUXzuy5UQG5bvkeZcgVJSYY7AETESuJQD",
  "key4": "3ZXA2GkxZ4Q9RBpLzrsNb4sNwi4e5UxFA6hXxerodCPznca9PwEDH6drFE7Gstvq4QsmsApcMs1xStPhwb4jmP2V",
  "key5": "2gKUp7ZuvrfyV84kyxwZxpYE3JTo89q178B5ULq5osyXvgsdDE2fk3Yw19gxeMMvvPRrHNbtHcrw9v96ef57tLHJ",
  "key6": "2Kw5yvz73ajM6h7UzwESYgHeaW5FvDfWS1p7Yxrh5Pctb1PTKCBYqbrdffdUGdwqbo2UbeqnfDeKrmp1JYYLEQDQ",
  "key7": "5g9Rw9ZYfCXZ6YHPhxpcEVHj15YnjAHCq4VgFjUJo5f6SxdHCccsSvnjhs1NrwmpgpV3HmMDqUCHju7AvUh6CXyo",
  "key8": "2qrF8efJqscizcb4oY1gJELvXQztgBHxCFWqBu5Ks1xT1QpGJmFiq9mS56riLGkKa2HjVQq96vRun6AQ9Z5fjjtN",
  "key9": "Wu17fWWhiF9yC6wh94PbaZaQGicEtwD8TXWnq7pUj1VrdE5v2Ax2adNdDnY44pVfbJADLcvT8uBJhzh9fySJgsu",
  "key10": "5pc8J3u1fbYam6jJZ3GXWMhXneCcWZETRBxh98sT3TtqfsNziDfBHUNsnZyVffEJVZn6NWjs7tMQ7eaFL5SLtbXe",
  "key11": "4Y8YVD35f5vL4jbXS1hGNPNaHAVvVqKNwMJXQsu53FXbsTmYC9W6EJxB7aH64ZmS6wcwHM8UjeL9tMQCeFj8Scty",
  "key12": "R8y5PcdswziBAQPxWWMPdKymX5JAmahKWvjwtQ9NZfRtCHkYFc6we1oUCgaYnERcEPRTPYShZuW8zZ82zQCCeos",
  "key13": "3t6W6cYrjLqWXyajU7G89WrHVk27CK8rkfSmhnc7j79MvfJKGFCUHYyptnbTsTCiNjUCTcZpAVwKE5J1EPb4x8fA",
  "key14": "3GEhSdiRjabsuBCsCDUvfXThtyGYLm2RzQPRC4acRzcsNZ7JntULVafUhK5hgKvBQ9bZ477LSVpiveQCiDPVPtt6",
  "key15": "5H2SZHB2KqYfuF5yvNsBgiZDBRyQu4V8eMs1dTqhRweTvZPFdu43KRDnhwQ12DTz4XwtbXZpL1cQTR2dVfErFA2x",
  "key16": "3irUz6p6oyc3wouxoCEG22MNX5GTZ36yUwJmSqbpAMy3j7Uy7cEBesiqRLZuw85taYcwtQgf4XQJ7giZJrAy3GeJ",
  "key17": "BfMSfYy8sVCiMhabRXpL1kmAqqDzmPcBfUEb7Qf1cPatqnzh5KQgUFQwT3WmAQFSHUPP3nHhZDeiE1Rj8ZNbY3f",
  "key18": "3PJ7shhYAw5gMygWCcdDC72suiAgXk1k7iQtTgWPnYB6LNAcJ3UCUUR9iMLVKFeuku4EdCotYdf9vTW9skE9as8g",
  "key19": "5mmGYz5Qke1g8mGm1Ycv6RgZkmqRfAySH76dmzuCvEN9Q5qQrXvSDQkMyTrbrZhze3qL56zubzCttRNLAk6o14jd",
  "key20": "Cjs9eNRWx2R55f1ZdESaURFnFDueaRMUwdFiTdLwgQntzgndXw7y9oVge7ohdwpnrb9BW72DmNmhLahGqRevTdX",
  "key21": "DuMKP9yQi9eAuLp9ZCh9PAnFm9Hwggu2rer1pRfJ1rFMHpQKaHw9ypZoL4bfmw8pRS9YEfjg1CcYrKCQWva88Tk",
  "key22": "2bAMD8yi7wptG6rycDNFWRXBa44axd2fBdEmztQfnyoevGh2w29T6VKL37iYWgbRtGwK6pag4uDk6Ly8fxWBDjPj",
  "key23": "AhbXDXyQFjLh2hJRmtmdrQhar6dMHjB917zX9yzx6rJD6FdyWArXxBo5mtVjk6Gwxi6bj9gvg7xgTPSs1JPnGLU",
  "key24": "5gddmoxRpg1r7stiSbPQdupx6SegtaEwU9f3arHTggLgWQDSmoBUY3S49kp5LUm9Vg4xpCSNZC7WEv7pC76TRmcv",
  "key25": "Urg5CngR3zh5sE3ENnMi8uesFMmuQ4nxsc9eTGQHKXNc2N3KaF313mXHYjNvfPJLnbc9xNhDorQvv7uSAXhLBgS",
  "key26": "4WamVXcu2xqww36b6MtbYY78JCiuaWJX69r7yCL4wmgEkd1fMtzuDbvHFf94KUvyvZjdcnWi13nS1jjzo9x9zVYj",
  "key27": "4rUXDJ3pf694PdCLuHS9p6E6EdGc6UdmgKJKVhCHMRw4Z1cHrzkVQAv4NmUVh9hLbttp8Coh9QzYTnXAZAR5eGrb",
  "key28": "4W4fsRKZXCk5U8FGW6JHqjZB7Y6fVxesGbtBD9jRJfksSpsVrpRgDcmhA7sWxKhbB53VG2r8Mxe31wnuNr4ErQz3",
  "key29": "2D9z8qVhHBWv5v6kiyxzEZcbk8FAYmhNa4Nuec51MeUPaJxYNH6jnECGJrUYaytxHsQFwiSrvm5LS6Z3t9ZqxUst",
  "key30": "2pNr4i5QhWWuiXbDkTiPAzQncQ9dokokMzReo7cgEt9nXntQ1ku2gbucg47Gzryx8W7Hj5pjJAwfofV3Nwy35K6F"
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
