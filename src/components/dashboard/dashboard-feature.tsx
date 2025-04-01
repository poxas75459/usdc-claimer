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
    "3KsvhGs7F14KjFB9pb6f8UCMVbC25R1CAtJk1uz9mbFTyCzcYFcCAHUPn5f4nKvGZp89u3k2ZwHDi8qwbRsDERZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYpThqs3r9X46Vt1MCu4L2oKvzezyHDcKKGHdMX1j74TdAUMoPryvgTiuPkMeTnX2b6d4AUNM2j3iw7Zuvhu4JK",
  "key1": "2uNHBSbNGr4MsUtacxaCapdrhbeKYg8w9YBtfHrMqFvPMPrZjxoksR4EQWpYH8audgrYJjpTxVeneVnfVQ1KqCPF",
  "key2": "3ayKdbQVSSDuMDdddhmNGf8xeY749YvzXrt6Q8m91DTywQSfpc1Kn52j5JepaVqb7UAVa1Qrdd7UTcsTFaV1vA37",
  "key3": "rdSA9ZQguCvzafbUaxDY6aaFNLqFabNGYDmKx95Hw6qk75hFEeKkiWZYjFREBQjZcKAvtQsekZ2u4kEed5xDsDD",
  "key4": "4M3yfjAA41r41Jae61w2DWP4frweHSM4MxaG1FV74uxBuP224Z2yLJprd5DuJ1ZoypkY6WHdiXsbcsa439iyg5qf",
  "key5": "3876Kt7F13mWWS8SkUbfoyRn5x4sGkrq96pScykDV4GLiybYC8JLXVe1znS8AAbRwnkhX8aJPtKAsAPNx7oCgTwG",
  "key6": "56iRNkxJxmaSh24tNad3BhEBfGAFfbqTSmGwhNCeALghhpGRoVGNqdsjgXLbK6Wo7t73D862ebQh21xJnXGCG4j1",
  "key7": "2b9TopkuqEjpo6xy8u3ybPV3R1ZmzLxRAfS5CQ45bJLqFongkToHLCJCh4K4QR7nX4zQtG6Y5YRNbjfcmoeNYKB6",
  "key8": "2on7MTg1p9nYNsmmtnP1gYFdWN3jNKiMoQ3giggfbP6anhoWXbnbaFd6uE5JXYKZ3JbryMbYzry6SJZv3M2dG6zs",
  "key9": "3PTGHRb8pgEc3Chs9nQDBPKu2o3A4svLewgUn52Q9p3ppcPt7pkiBeKoptx3CWHbJGMBTp8ZAv6D2QdJYwamb8hu",
  "key10": "5GmkzzSwkj1JYisgLKKsCgdpjTbkUgwW99PnKevCabTT8KUjGfcYydat514SxAxS9Cny6aNXJTmvRfQfTefg1QT4",
  "key11": "41xfmt6KwGh5y5ne8dGJgkhyeMVcRp5tAQP4yMRbHygd4fxM6ENLsqa1DhVs2tC5ar7AUrZScqVTotPfED2KLHtX",
  "key12": "NUyLQjWTbzM5Zz1Sk5kx8EyqWNHLLnKLhqoEgLRnJXVRLQqRy5JJiEiCRAG5C9cr5NLKw5SsNw6FhWx8tLnN39L",
  "key13": "PGoBGXXZ36rX3fjcxBMNRJNjGbFdmwMQmpbKNYJdQYwNiuVMuMirb34jtggN5g8hyZZJoCb7Bsnoi7M5i5kSmMk",
  "key14": "5EkowKryd7bKPJDNDF3rgES7Neer1EiQYdrriFCWoHzbdbPkTLNniZwThh6dXv5BxgTd8xYRJvRgiingg6ajkUE4",
  "key15": "qXSaUXU26DD8fCsBYX7yoEkvxpVj2Zz7Cr625ALDxAYRfmRzy5PW6imYybBLPVJfAhvtnTSPUoZekDkEbQgSot5",
  "key16": "5mABFXQey6biPipgrwaNSSY22JSP6uFdeDAmp51gAcoSNHJCnSt6zXuyEtpDXB9tnAxNoJHgbjeMpTjfVKm6NaVz",
  "key17": "2xpxeLVX2QThiownZXvoFcPXQz7qNXHvJiGd1dn3oFBxvZkPifWpqryWy72y1oDcF63b3xh5JVfvDvXKXRKbmMpZ",
  "key18": "5YsjA3Xw61j49gqk2E7uiS6wonnCv2ieNNvmCvvR9cZGERQDiSLhwZhup6XPRnTV3MJiPU8pmXSHLnk9MxxseHk3",
  "key19": "nM5JpFuQ4h73gydtsjebnw3ga3pP9si8D5rCTtxZFjJbnGX2k78ewmyXHM29wTcUPTRAULMgiRSxsgZ7tWppUpY",
  "key20": "2geXZaZNhRfvNRLFuPDdVqWKdmuYm4TSxwKqXdZDmBZX5gUuFVBGyb5PvwcDKPTj2wWrwWYgcNr56t3RsEVeLAQM",
  "key21": "3PhonEfztcPZACAamZEGdx2a9DNeqz6ajg3qSV7PQadpCqZ8Sar4Bv3ksEDo3PNbVoDhv3MxXnjc29Wy6tLjPrg7",
  "key22": "2bcTk5QE3u41UK1QmThcGLBY9MYaESKp3wQAy3XUWoCQdv16jtfCYfGxEuoLMR7u6bmkMDSTSwCmXfRc8eEhwRtA",
  "key23": "3HwnbegySxLG185Nv6Mxtwy4EDfFDwpptm7wErxwSPCMuNPnvS9JxvWGMFDWsX9HvPpqtgtjucqFwiijweGGmVtK",
  "key24": "z2wTVcM77xrDVbxcwrdswNjfLj2fvEWiLrdwuSxtokhB3YuoaJdi4kEczK4h1aDc2ECgkfVw6J78WnTKQpwdkmP"
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
