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
    "4ztf1yKMRgo3n9ykhSEC1V6iLuThqvkXp1vDTXTNRmBhpRt1AfR1thZ99GtSzMPuUoXoq8DufFTLTPxtZ1p2QWXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bsuEpQiQwdaR8nhdAyTTsMUEwwx6wibQPBrKHx9LRSLMZ181yXwkfExfnpi5DeakhC9WKhwAiDTzbyLFFiFXAou",
  "key1": "5eE17zVrGzcrLzR47x9jmspQU6Fy5pptEHjZ2vPCzM57xrRouCbD41icT3cABk7fY64j7JTnKBypmwudJ9B9QHdL",
  "key2": "2oBpRNLjKrsg8dXEWGWt6bgWrijY71sNBufpAq6GmoiqG6Uhy4ZzUSXi9cYLSokkDLQkjnijpHUX2PQ2WrQhxvbN",
  "key3": "63Bg72qLMP7pHo9qLrCYdMpkD9GaYHzj4fdB2udxpLntNAz5QoC8rsehXNC2Y8j7QKwoeQLet5Z3wPTRsXhC82gb",
  "key4": "5KwLqNKB7G9ED4XyM5w5hN2nddUyrAcW5u69y3dxHfEKgbxspQSd3tZS9dkjCuJWx6q9vwfUdzBS6xtHjeGFXo9v",
  "key5": "4hmGhJ4Z8rfdpF1E74ueRb5L6cZks2CpqiG4eSSVLzkDo2drWNwiTBQCxYxoGG4dfuCAsbnaXh45rjffEWmH7Bw2",
  "key6": "46p83mQRmxUzz6vtr669cUVHEe8xpC9AzJy1MGUHM1Mo53yX8Au4iHQdfWq62VNGYgygjMHpxhwRjuZiRxf5RgC8",
  "key7": "4Pm6aZh9XfDrCx6nV9gajd3rTu8Mkp79fSv9WKQoKRnw3aFWXcY9ceThTGn7xGwi5Ky6V1jXx9eq7PfLcPf1yK6h",
  "key8": "3xsFAtcg4s7KbV2GxZAsB1NpiZ1qgST5nBMnMJ7wiBPeapYKdPJdDrJkjy3rM64rFNKZhoEDYsatFkKDMUXHKiar",
  "key9": "21f5PvgWR6mgVLJP2dMYMKL6TVoXqTACxe3jb7J84CjQgBXqYcgUVo1p5NjatThR2Eie8ubP64meE8Vq8avkoqDB",
  "key10": "eSjhc4hg1RBBUcuJgQUNfRzG5nenctzGNsjPesxU7ND7AzMy6Grqn7jwfarTKH29WN9huzid5Vqe1VmBBxrN6Mz",
  "key11": "54MFeop5Qn3dwwyEkrfDHWqKyTkU1mdU2oXYUM3mqXqWbGZGS3Zrbr5zCjEsSojvW43cwpjDvQMyP2R7ne12BdMR",
  "key12": "32HvwRt3fi44SpZFgE1gJQQqJLpTfccoXR7ytUErsaCAjWrLhC934hUE5MPyWNjAneB5hiuDUPCtNLBhNEVWjbBA",
  "key13": "hcBdjcETAgTm1B9JnqBFNziWDebVr5vb8z2nDdW7Kmqxc2VG8uuPWz1HMmQEAv3ebgQffEL8kp4aE4N6VNkQDKE",
  "key14": "gr7sLhJeZAvTuodzwb3JoYckzF26tAwCKXZwZGVJVdxmapGNDWJ21DQTEb82FcVVZfD3ECBwPcZ3CS3YixjoBNc",
  "key15": "Egv3iBs6s2tX7DZWBSnhFr6er23JQ9hDpwRb7hD7Tr9pfK33VH6sRZPqENazi7CDrXEq83iCEwG3t3YmBX6sHEj",
  "key16": "5ke7YZp5cn5SDt5XxNo3KguURrYEPxGrpUTiTnW61FqDJgXpRKeqPPDFRS2UtFCDSj6wj2Fyc19hbGqw52nM6tFM",
  "key17": "EGeMN9sX4e6d1n5aSpSizHgLrhr4dx4D3d1HxneRzMkK3bXGyU3Etr6kjZtjqBhWVhaH9Tws8qDweymGhUwtqu9",
  "key18": "XPzPgudiikW5HXnQmNyRzG4SXVzC9G7UfYXMfVEAhSMYyJzFQ41wJx9CWt9bednGM27FkHZD1UUBFnxiZ99TF8d",
  "key19": "4UN5Wn3wwfWeB59ehWGfqizbUYNSWyYSsxGUrM68zQfjuQ8GxNQnX5AdZCRKRwTxebrnPtezbyZ6bDZxzo7NWrnH",
  "key20": "2fTHSVK18FZGvAfSErLc7w7HyNHRNAx4vVZNsVKfnEFY1fRdwqmToX9s8LGBfCGL4mpUytupw3shZ77gQjEQYsAy",
  "key21": "5nfzd2fRTCub6kbejUoqmxSrm9XPdvTMSw2twvVVy2Ymbm5LkLd5snW85LfAqKaGJiBrTVMMM7dX9A2Q7uw4SZxK",
  "key22": "4xX6GpUBzxnCwWfLTvTreoG7MC1qEyBHQhXzg4craCUC55iCMZfpAfw7s3VkewWUWTakpM819ZGLBnambnExW8gV",
  "key23": "3xg34zLoFWiQTWFM6mTUckEzgjcGKKw1S7mHyPspZnL86rueiuFD2kg3mhtmYjGLaWq29Syx99s2fCX4oUKbiBUv",
  "key24": "5gxtoeeSj2cW2oMdw3L1XjA3pNkmUXcrap76pkVLpphMoShXTJXz1V6KyUNtrGmi1DgwdpDkm5yc56i16qH1iiia",
  "key25": "HjZqkjZy8UxZhaBKwRcjxe1WM3h68iC4YL2baeMGaqKHiVntWYtJj7jzfHkrYwuC9YhmJCHRfqA698KuygtS56o",
  "key26": "2hcinoekgykjNyJJw8arStcdcYNRxABuZwsfHh42UUfw51hQf7XE9b7qHJVRbjH5MQw5iQaBvNXzP59qJiDhydBm",
  "key27": "4cmpea6np8KgQBgRR6WXkBvWLeU1xJL7BKmZSibKCBJP1Usnf3YNufNcJmG6F6aEcV1JNpUi9arsBHHx1Rj7Tovd",
  "key28": "5s4UDFZi6zuz134uAiMwHniNvyqUYpszDeEYaP5CxyAU2wmzaoio6ueA9S21nFZW7p94Q1jfzRHt1vNCqhni6GGK",
  "key29": "5Y4pG4P8SLr8RK5PfmhqF4vay9aqmqN4ELS8iAqZsfZjokL9Q4Vd8Tt6GcQKLD37fjNbqULXx1UiMLNmbxoaniVt",
  "key30": "2CACVy74qRCNy9V5izUmsAe3DgsydDvXbeVxhxSeh7wFnQ39e3FSJkoJr64f9XdNhMgccn8hc2Jchak6qt2sKENM",
  "key31": "5QLxLdkAAfcfy8dweymKUWf6uJZJiWiiVt8ApmGqeSQaQ55fUWgPJKXKjRQwcBQFhSjhBQtJTaGQ3RftrWZ77QSf",
  "key32": "3dGvpeddHdt2BT8g1cTo4ca6mD4T1H5m2KCQSAzENzFnyD2Z7E8Gpcs8AxKLmAEvQ3VBudteQmzctvjqWc9XECJK",
  "key33": "i9uShEnKsPJ2FwHctyAScRDi95UCBPBBfn5NGnWoq5sTr5zsMccd39gTreEGw1JAb52B5go4yshXdH2mm6SGdpr",
  "key34": "5ZmNpx2Z8WNYojhG1iff78S2jCT8n5h3qGjwiZ1jzHkgTeiLDVSZcLy5QXgyr1wM62R3x9SU181nyXUEPuPBr5vL",
  "key35": "iXGC4ZYk2bhKYEXsKwEbVkFCPto87Y6mTkHMcyGskh51tk5U4PsMEdwsMncNzbh41L4h73FsjsB1WB7zsnQC83q",
  "key36": "im2sGURJGJDnvtFXZKF2x1pLFsYRcHEMV2si8YfCJjgdQpNnDuiQUMbMvcB1ewTgK8azfXWqcHbcvHPYSPXSazs",
  "key37": "2v7V13ow1S7Sv2SiJv8ykjf8hfB62Rk5KpNKfM5rA9Avdbp9ibYGWZfprZgiHA3Xg7LZsb5JUPR8odtiTayXeLdW",
  "key38": "5QoxXXvSBYpQeNzSPwBA4MCcETAqTLVhV75955wsmhJF5iUhxo4mCssuEWTrrQNvwoaDFXpTUyzd4x1jrQFyQsxu",
  "key39": "2uQm8syxfS4ocZaLCoTo2sHMebmgXB2h9Rma2i3DYikNUUyR97aq7EwBHCAAjFbtR3UyUaCqF4zQWJBCjrfNRsga",
  "key40": "5DeyTkpPz17iGb7yiHYxVUHyFeu5VxWkhCZfbA7bKV1QtSuVQqYCu2JVsLjQKQB7HPTT6s3vjFXcksa13HCF6BQa",
  "key41": "VgjRJUVoa6k9u9JfLGoP5XvyCfUhw3hpHEpPqdRBpFzSno8gamf8Dz7ZvrWgGawGf6VaiTQQyDLVcv9CKXM4dtz",
  "key42": "4iBpbdSvjTWax6WUEecbmgdRykCttK6z1W7GoukhuKQEC5HrgkfSsZt4S9wSLawtda5WCZ1AEXJ4pgTedcz1one5",
  "key43": "5xXtYK9JW6GhNuF2xhNFTVSMN2ErcGcHXefTJEkWLMRdDQVK5SFiavmDFksUDM2R3bDMe6ogFxy6KdyB6nvotdQx",
  "key44": "4kNmieb6DQHqdLWEThodFG8aFTunQJiddH1Ds4UCb64cQBL6fwSE8DaLCiwX1JQUDRQ3TnUnLhH9awknssTeKd2b",
  "key45": "3CqzLnTciTfqp52UG1HmmNrhsk2WFtjcfdTrwBHeKhmY6fqPCF5CQJx9XirLXZYAyTenrBRx2tS5QLgFDGATrLfH",
  "key46": "51WwiXcWtS7Wjma6TXMJAUs7HQPGEn3wCoHYavb5ELdtuDfucaXXi7RWrgaGNEuGECLf8FyEJ4C3bMx5vgS3JnRR",
  "key47": "cgwSCQ5ckF6H5igD4mfwrtbrNRUCj1SFzvTgXdD2m6AfnURv5cKbYjCfSWhD2mLTCAgkemH85jsQNqFZhFLcKf3"
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
