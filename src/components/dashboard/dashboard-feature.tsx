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
    "4GEXVcp24FvWvN224rLWMugeGb3hfngRU2qPtZ9NbJXpvXa4fyAVjc29CSKdjWb5GhJ4FU6xuwKDJXNSGCG7mFMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RicdbNJith44zxYhxpM28UJKd4htbrHvNdXfiZzF3wN6rqCGCxQ3pBU3U4XfLX6r2xA4kzdWdLSnkBpNCfNcT7z",
  "key1": "56PfqMg5UJzN33FLdpkH8rFEFpa8PwGyFhaHWsWEZNV9MK2DX1LR8koQzDRfkPa4NGshYUesbPTJ7R9vBHgqznHG",
  "key2": "3jXbsovVWxWQU8TcmPsmXiod7jwa2mWL1AqFcHZurUtpLwXyz4fqWygtJ9cFmQxMcpZcPNY6koixX7y16qUYwVME",
  "key3": "393Z6U4iRJzNg8hKeHEC2q62Li4ztB9y1rqkGNt4ZmYGStT8vKPc8zHd7cuDhdEzLMFkBfgG7hgsR81JpUqJ5CCS",
  "key4": "2k626g2yJ3GB6y778AgsHu5b4BHW8ufJWHBqTjF4Pj9Wrzq5iimKLCDRmG4bsPBZD2h98quSvf45sGQBLECttamC",
  "key5": "5WbtjycbdESptkM4bRuHGccTed4bWpQ9FukfzbuNqaHxRdXHvhmt19siwUpfB2yKXgUgngDxKsDadPYGwmZeL8qV",
  "key6": "4MXMhq2aEUa9Fr6NfUeTNgjYBzsEmCTN1Gsi7yCAMrhbPnq2AmpNkMFGZ1craf7PEzrvFxgfb9fe5QKQ1gtrY8Me",
  "key7": "3yEAZtEwV36VX4LKcu6F8cQrCduV8Nx3ihYyPfH3V4dUToUxGYjxgPb4GN7FR2Zf4ecAgmFHFe5NNKX4QCrZDxRx",
  "key8": "MdmHJwY5P1gbohvCrTNzCATpAC7aYrXyGjArBzabYTFmhHZpnxHM1ZH2KM2SsAZV9hLm87yoTidiUwfD4RbDyyB",
  "key9": "5HvuHpDY7rQwTvrciJXMYNkQQZ8UrPCbbt86of1Tq3GzodQAvS2Xqv51Cv3jLUhupc3ki6NSs9WVopiGBnSsVki6",
  "key10": "2PTRDotSGgDyQP2b8BJk2uD9va7eFgWnCtprbhbZwjbTJW8SJ6cbsaBDNEMAzhxqE148g72JFftim4CRfp7nFkK6",
  "key11": "2KASc22Bh47Uk2QbmK4rWQLZPkzk3cHvYcuLEq3eNDmpXKNi9zKcVRkxZ1HSokw6JnENAK6TcMZ8fJStLX8ZxThP",
  "key12": "vXdzbqBDZrzi6eEDHjcvumZMQsrn1dBPqDpLgetfEqccU9EUs4Sxqy3Xs9fJ8a7vZxauQmvKD5eLMuRnpcfSEJJ",
  "key13": "59ikqyvutTCFpwm6VwhBeai6H3N1YUG26eehsrcpDQegnCunaMDFxdzAMSyMZyfovn1yhgfZ7jcEFJfF19FJLVbD",
  "key14": "4z3khzMWFzx528fDkhscFSiGTyYsDyEANfh2e1oVqXxgXsdrRgo2YcrV7TgGFAaWryyp11W5xowJVWpoYf6gTUc6",
  "key15": "3JF87ELjU7gpySj5nn2ow96sDonPspWCze9UKJjSxF8GaBs7ZVqpoBhksWowPa8kU9UZFmrmTDP3zhg8Khf1Li5Z",
  "key16": "k4DHUQbUZMsimykUkG6ZtrDCXtAZpJ8JGNKYNNBFHxJMDMQg5ZQbupAD8KZskpERrpWbo9WiyKpn28PWaGDJ2Rb",
  "key17": "KyEq3g1Pduxh37R8cHavq2feLNxRLpGyUnmt7QizDfTzkN3JSMZehQeVJbwykbHdMPE6vXyTYPwKU5VUMhVyzhG",
  "key18": "yP3WqcpH55DrwzpGjssgzERXQSKi1yR2rf1zMuRkzemCVYfWGUhgQ5hupKd3ce9VYiohgGt5XtKz8TydAJ41f95",
  "key19": "4tBga5gFpfAZX5jifJGGkXMzc3FD7iZnG6dwxwvUoZerCuNArtZJQNpVCs2n4QBFxWEmjC1KfDLZFNXwNmuJnNTB",
  "key20": "4K1RjapG3Zta8To9pz7FpuykdzmHkjHxDoKVLHwT6P2gLUM9GLT3PFKAxcRB8MzC77x3BKq8aXnrfeKA8PSSU1k2",
  "key21": "2UuQv12GaGjSCNkkpAJRRa4dRyeL6YNkvzftBJDCBu7XQvSH74JY7QcvsaCAiuPJHNiHUM9ppa9kdHVtVDaUJstc",
  "key22": "i7mAnxvPazqsz6eM4qYqcBsqMAJ6sirUi2Um3Vjw78wDyTeK6UqHNcBUwtLgQgbxFtQeq1zMxtD7mV8e62cTrEF",
  "key23": "4ZEKjWUYnTBHiMeJJptqzYCvj6YQaHiESe3D77W1K1JHWYyDW3FMLsBS2P639TmYCY9kZPXCFQ1aZT7SRXy84PXP",
  "key24": "251KxAFFZtqkDNd2TRpvo5p4WdhSFNA3HhcCuAgVijpQZY3GXB5qARgjKBwDb8Zbyz3mJJSZCzzVs91XrEWeryyy",
  "key25": "4Xw2THfMvP8r284ebgMEbaBiQEixJgXZPLrNjEwuiJ3Bx3ELDpmeNsGrxpQyUv7wyhDuEqfUvZzAPR9Xn7Rg4x95",
  "key26": "5nJRzg693grpuuXmHnNJXTXVBk2jjGm49eUgA75YddVvL7FBKEkB6t9gWNqEWj345baHRxCVp94EKdREhKeSs1hm",
  "key27": "5gnVbW5ituSc6rsMK2MuTainwRG6ymGQZi7HMcXtLtV6qpNuQXyfMhrHLkVWCLwbWeZKkabqWDgXs4YsMBCYU5gf",
  "key28": "4wtSQgFgJG13BU4RXKnpxezNsKPgswcQPeVeDSDyVaSxK5J5gFK2unRYuPRCCBfthnN1iGdVXrzcfiC2rZZo1t32",
  "key29": "DAjyS5kzBwSRjPYwbem7snPDK8CC2XTAQ32uFJUqePjuRsR7jU9BkcLsLyQg8SbT3x9qhmTkhZCV9oivVqwj25v",
  "key30": "5rd4uw3YRrGqfPyDkVNXj4YLVFFKVGtzYSimLU9PwQxTuum5z7eZCNUPbp5TQngiHCJexipHWVUsKArXDp1CE3hT",
  "key31": "wy5tkNqwTJRZxLxzg8tAPwAGTDWu7sXpn8SgcYFZ3ZH9rxSWaHzAdcE5yGFfzjAx7zLcPWp1M8rRU5p2RybEUz4",
  "key32": "5trWdAqPMKd1a2ZMQrDkiVjz8oNio7sdoeLHadc3aHdMuizPPEwCwArcfFE6iERF8saCxqWqB3nSHE6YQPTE1UAS",
  "key33": "43wRwvNReJZco1S6gr1oiZYKmSF2DSFDat6BhYhavWnfSskxD6TNuDwzA4vaZ2wEKmP5GzhjPSUT4ihwRRQFE6d4",
  "key34": "5MFW9MRrbmXqKHQj1hCfSBNNx2vcCa8eYvc8hoZdU7PWPGTsayCwfg4CDupvDWEbpuHqXgpfHqCXcQgkfdE11F5M",
  "key35": "4w5QBaFfzzS44uBcyzUezjzZxKjcqbinrQ3LU239fZoiQN3syADgjFf4i11n3HyTEpxjPFawcunLDuMFf3xay4eU",
  "key36": "5mvPkUegjueS1GRULDdEfwa42aXkHHCn2wtA5PqmN2ZYRqE22oCnnfFUZBJMEVoQ4ngabJxarev6Q3n3FRFwb3ih",
  "key37": "4VExir2VGEbxr2QeEvn38cKwND3s4X6YwE7HUpoxy46NEsnKqcmuHvmuekgibEcomtPoQX1ZjLNHxZntJ2dcL9so",
  "key38": "5p2itzJ6BkZ8vVmu2Jyp9LYHhi9dSNtupj8E3k3fL7Kj6ueCTQerqx2Q1Uk4DyQAuycm1DQquwC7EKVPcRR1Jnzh",
  "key39": "2jmUH8hrtcAXo7G56vyvG8gFY3d9yTNUpApJgtGCXJX8odMJ3BgKwuHHs6D7ML4ZuoxirZYUyU8dLkZmfpJSBj2z",
  "key40": "4kNiM2hqgDmyG8LyADspPx8hKy1hANQTne8BRR9KDHSAKh8VBraoTPgMUuwMCgQ5gHC2J3KdW3UAXgwsCQEzW728",
  "key41": "3Nirbi1VA7aTLAv3ieZgUW1PJZRt7ASZty1Gv1o2y5RM5Yw4XHu7rgSNRh4KocZyZyrYmfCYBwQaoPszmsVTHRDU",
  "key42": "2CZzsPCwszgVP26s67iCzzHTWFGXcNBRADLkdDzb2HUPVVP1ZQicxFesKD3ccecmsT7TqwPFeUoZjieZxbR72ddL"
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
