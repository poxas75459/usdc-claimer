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
    "5GLPUVncRTLHYKXAF4nJuEx6BMMBKg3e3QUcz6yw3P6xCfHNQh3vDon3Rjx3Zo5y943eZZA37xU7rsJvKCHAmPes"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "CUcDoXsbwcyYDmEDNqhiFLTA6DJGtaAHB7Ef6JyKANKiwZkcNZwAcoujX1HoFP5QrPx8j3o8s64THjtNwRxjKug",
  "decoyKey1": "ZE9uEyx4xGHapkU7XVTJxZP9wGVwjGxBxzrcXqAXjAFDTmrfMxtETdriHXTVftoU4BzUUTn1FCLdbaVdbbf5MpA",
  "decoyKey2": "L3yizfBRKgfcb2CvTox1UqkFyH1HaPDje83rEKNwVQop6StbbRmWSDCzzpi7YFTSjVfFFLWabzRMtJhjHigiXjF",
  "decoyKey3": "3eWKm3RxUKyEUxxZhxCL1Lv6AdqnYKZK6J2417RG11twYc1Hct3Lomk9oJXYsqZJCNQMeXFG7ataa59kNLZFzZQ5",
  "decoyKey4": "5HWucAorSF8gQN269Rwcn7BGKQA7ZHE2CQiVBivynnyeodxuUueN934PuR6J43nhYQwhX7MbXiqa8XaCpcg5jq51",
  "decoyKey5": "4NvRgyR631ph7cEEZhQo3z4RUBxDjWcSjETmujZPtAMb1bbaE5QRj3fs3paaYhSivAHzgrTjZUR2AwpCkugxVSHu",
  "decoyKey6": "5gATQXmWf5ekVrjerZ1oks8QbV1bFbeMP9Y7wBQ6kt2fmFsWKYQ46eG3xomQZmqEyTd3b2apKNFJprKb98wo5S9M",
  "decoyKey7": "62T66PkZDxK4fRPdXeQhorCSzQHmG9FnERrbYDra7BkMooLDWUVybmJDqgLiCHJKqTA8FjdxTxg54aX5rvZLXuTq",
  "decoyKey8": "3oHdU9YiHQbxFu4WFZKfUQJio7xJ5UkhGFC1bKyijUoGt4BzRzmUAeGqUBu5LefkrFFe956TbhMchGJsUbZKxggy",
  "decoyKey9": "2GwjoAsr3RBGPvczGahfYKQQJEYKAGUzRTX7CnRaMJd9kyyWQkxmsGtfv8vkHacLfVrrgC8k8tGoNuyQsqZUmUJV",
  "decoyKey10": "2YJwbcy5YmhLmawwmuT3qhXCYUpuc9FfmSQkaYFHQFz1rPTYe863Kr83a5oMZqAu92uaAg71ChcEvfkKjtC87Lr8",
  "decoyKey11": "26Gw1NrhSTdJi6MVW5EM39MGKQXAwLkjUyhXq2aC5pVm6GFCS9gi3tAv9ucdKAtmARE5hsFtGJA9dA4WqBN1je9W",
  "decoyKey12": "662VN7gJdgAmbQFxNPcMzECYDFwjm16zy3X3MftNbDtVcYscvJJPhcvWiHaNpSWbpPvJwdZhw8REmGCWAoQSBQJu",
  "decoyKey13": "2Zr9vLobriEF9cJENbYUuSuKFGKuom6YafXMQW4PuncvoHRyhbPA7UgVeZkyjVEvmzMZ5KTxXNGnfx35ULeLrYx6",
  "decoyKey14": "63ChqBa7JZT2jBUtVNSRPVGZphKFqbGz5WvrkouJuyJRo16uCM8XEWSA8RRNDnvqCqmP54c6daLPh4v5d7fBGPtf",
  "decoyKey15": "gi7xmhwa2a3piQfpXPWr9oECFJQYc21DUeHSwAwTT7x7mhGRpmJfJzP8EhY4ET4W4ddn1wTpQD7hScPxpBoqt7w",
  "decoyKey16": "5dytjB6uiyu4MEmdnLTPQSmHHAWq1SwwKMKZMfbUzzpwZ99NixiVp2rEn4e6tfDchYZraGgQx2ukcKf6D6QY48Q8",
  "decoyKey17": "SK2djW2L22ubPoodAXAesEtDKcmtxeqZjPLuVTDEDF6oupf2r38f2y5n9xDJcDAznv6rwTs752JqQ8V5TWgjymN",
  "decoyKey18": "4ENWbGrED85MpM3gzP8XqVX4xGFfK3zjgNzFDoHCVFLZy9g2cmYzmZBXj2fiBUR6j9bU9cpKERWAPwzLMZxQr8Tr",
  "decoyKey19": "3JHdqC8XaN6AA6MkpoVGmXYT1fuefryAZN38NUoiD8nn1G547ghor4D4MKxinA1kDhng646PdMY8WoGyRnFf9WEB",
  "decoyKey20": "hDe62BD9EwUAgSNDmnebPw6fVgeC571n5eBiWP2BDrNASPaySdXSQ5J43q4e4yWD2VYZD271VZjLqAki26HthAC",
  "decoyKey21": "3U5avzAwNqr2NTnaw9fXoS8k7CZ848mFbAALMDWgiyo2h2DASmB1HCV26mBM69AuPdtcCbJJpyYQySAiCdswdVQe",
  "decoyKey22": "3nDiNPienFBXLu3RpaGNmTEjjMRP2k9iztJbsTvSLwbnuvpaqQg9c2bbseFVxfrUYQ4PMH7cVMDiPkDanbGNe9qy",
  "decoyKey23": "2vhzzEjff3TLaPuW5o6E7NiR9RixoPFWA3tCfuqNznDfMBfhegdQMdzWddA41XTLgcJw8FhUNMZk4LdNd1GfiG7S",
  "decoyKey24": "64b9LawFnASgdu3MKzVkykSG7w2DBYUtjV4Fr3vr5ZVTjsegqR7vSEu46X42s3Wbj8XiELSsxZzW8wn1gX25m5J9",
  "decoyKey25": "3x9gt24N8QBLVwi7rUQZHqWq9bSVJQ4TZxJFRgsmsQhULBoHGb8fUqgBGxKeDotuMQAHNPrhNpA3vpLKfHJbxBkp",
  "decoyKey26": "qCASmMLgveqCuPBcXULmH7hDErCGihpfjbqjuutgJ9WCdbn9D76U2SZYSm6iVW57HBJWAQrV8GPnj5U7tnLFjym",
  "decoyKey27": "56rCmiM2pWW8Q2v5fjxCDLWYR7ET53aT8BGg8crPibbJx1hemab2YA2AiyxkUGCosAuTLg3USDvgR2KETwUgyRZq",
  "decoyKey28": "3JdcArBo7SNnXzf8uFGi7qzrCgei7iAfbdFmLAV8KYyM6KSYpRuqjKaHAFqUdwnGZTHMY7DyBabi2qz1dL4u85hN",
  "decoyKey29": "48HFcsQoyxDZsC69uZoZQLo2zipDzMZGqk8JdJU3yrjfVaVjkXkU7h4Q3AmoogFRA8L47pV1xN15FLBBHvQUMaJ9",
  "decoyKey30": "4bbTNjEssCzH6t94gSiLUd6wQdrHpaWWAbtx2HS3tGTyy1dCh1rC3KhuzZp2k2htRrtLpLKcFheXuhZwQ9GYDhPv",
  "decoyKey31": "oWhBBo6TsWsDWg3PFiy8C7UBcCbaY9iztgeoaGHGS2C9ZYBFPyTAEYmW87bTXFeeCendFxWpZb1MHrDE9uDAevs",
  "decoyKey32": "3nqa3TULNqB2s93b1a98vJn74GNgSU7WAXCxckAEPqhYNcn7r6dzTVNDtxMM6okJ44XJbGWHMv1mYfcHkajSRksK",
  "decoyKey33": "2qmpfVrZk1o7H5GCETmcqvbwGGywD7QmPYoHWm1QwHoRq4i3nGFgfLX5w54ZUjNRhhPFrYh16Yxr4anisnKMNPHa",
  "decoyKey34": "5fV3DfJUT4zSi1scaiWkiDXENC8A4kMHh4ye2PLjLqXKCdBet9PmNcGLfTMWuALH6isUgF7CT7fwXH544X3M823k",
  "decoyKey35": "3gzuzZKvKZhdgp4bR3WfrPmhD3Pq4mMAWz445w8mtSQFgCZG98YaGzhsqF3pbNDYBKLMPhmk1dsRYktjHLzCyCEg",
  "decoyKey36": "4pEsRYUiF56y3JLP4mHMJ9JJb1FPhExZRR3jbNtf7cVnsQ13UGWs8T34aArgF585iMpE5mZr3jM5BVWHH8NLqFmF",
  "decoyKey37": "3a7nMZSkdZC953uSEsSXD4sy8Hm1785TqaVaRWRfMSjS54wFeiC621BpePguKKf8TFwyV11pZA19BdKaomxNuh6y",
  "decoyKey38": "4KqKcxDBTrmR3WheuK5gYG93rsHn4gY5dqLjxoD9G9Gc4Tq5cmk3XYa5HpMna5QmhcxcW67ZHfFxJzNpFiJP2nsd",
  "decoyKey39": "41S8TYw8mjcB3htHDctuhG5t86NeGqWZ5rJ36JrqBvEH2wnS5UWKu7QfjowLHeSzZ8fhb1W9jJ1kLn2DLK42gESm",
  "decoyKey40": "4hMeHPZhE3X4kW5r7xxmnhGozsSEDXWUrfFPfs7NjHhoCgRLbCdXvngwanAuAY8ejmBPD5iNdA7UGVpa2pZwYPAV",
  "decoyKey41": "3mpnrgrSEwcD9Ymy1KhxLyjh5drSXRPqxk6a3nnvuECWU6yeuKw4a52rokQRPbveFGRCZotBFyX7UkE5xvwBBM7Q",
  "decoyKey42": "3xDguSJby8cAFdFcuSvKKNzJJpe9BUMe9g6moTKxUeHc7ZeNW7gKJSLj99SaDJBVRejFyL2352wYjjAeatXCwUVE",
  "decoyKey43": "3HtRK1peKWmYCA45E8bWs3VJPL4UWmkP1hTCnJEXd4Uqyah8m2i7Vn2Sg25bdDG75LU4KuHqYdaWPQRQo5Fjo45C",
  "decoyKey44": "2z7DondS5TNP1z4aHEUYp5F2bJHseeRQCx7yCK8u9kjetju7YCwXVwSWuYyrFdyLk4cmfPewjW6KKDJ71eEQTTTL"
};
// DECOY_KEYS_END
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