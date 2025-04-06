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
    "4MpzpAe2QUKpQrK5XRCuuufqH4SznAB733qT3Cw12P2uUNeTREgT6RdBEFQidDkyLDdq5Eb317ni3qHV73EEP4Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxmMgZAktSMW3AYfeFNcrbATa6dD83GiQsSB4pCTKqtWrbmEp8S24i3KEK1brUKzcWvnLFHUNfsp9F2TJvYonxd",
  "key1": "64gauF49HCKW5h8UaKwKZfDxvn7ibTFSEtezLrpP3HGC1SjtX1pHuVUfqeYzAEn2C7xJ1NfUmezQ7Dvtuz7dd8K4",
  "key2": "25XyvoqRr8hVBwkkjsnhSbv6fck8bjmbDB8PaJscJFaBfiWEeXeu4snicwpzs8XmgdquSSjHGnm9Af46C5mUwRRC",
  "key3": "56ahCnhMMWuGcgUEk8EHhs42cQZ91UGgrLSLbMtqWGvgmpqFn9pxKH36bqHbEJM85aZo6xuozKJ4fb8kVwLJ1ZGd",
  "key4": "4hYvV5EgiR2oZnT8Asxk4M2fQ6Wp8379LWm7o1RPdBMQuytFC8PaU764VibU6kiP2JU6ZmKaUxERBZQZoCUoRVCd",
  "key5": "2iFvjNXrJy9JnAdMWRqg73MBZ9EQiunkhAAnAeNQt3Q8BZN67crA8ooL9NQJJJr5wmGjCLJyHCHtD1igavrzbz2m",
  "key6": "5vXu21H4LY3XH1grbnmhndc8g6CLg5ik3nLRetv3nWHodNH1SmGf1JNF6UYjdkDWELxEEUckujDi93kfhVusCtrs",
  "key7": "5CfN1YqehPB2DRLW84LFZzuk3GAWDhL7BeSDaDS481FD94sUpt2eAxwATeUiU3r6mtDen9WDyJBrahrK7Tic49AQ",
  "key8": "sHkvR5NCPt6ErNstWmztDit3sDXt7ei27jJDiwSnq2VhjPCrongvE97VWDueKozZd9cYFZzFBTHDQJmXiFkK6sw",
  "key9": "4ufLhpWCURCCiyGjrtp6PVcQ4QFx2g5DsMcw5ZLDU9eFi5wFxz66BwuunC4NBTmBKvP9ThULbd2CGMonm2dMkbhz",
  "key10": "5C3tEM45XC4WzNDJfUPmUv6yYXF1peAkBLnxoY4PeV4PMNzywJs8fuLU4JXQYRQv5ZvxsDFK9wTMs1P8HaCxC7p5",
  "key11": "2V4bCxYacBwmaQr6sq2BZdZJU8pSxHQ3u97Tu74U2crUQvGBKhxQMbCNgi5qhHzmFZpo4MCuwfZN1KGCPCDoALHK",
  "key12": "2XhL3UyBSzfj5ipAfMo9pPiyKgdo5tngYNWC82M3vk3Nx6frPWcMTPJp5Hk4F6Ny9ZrgtrcUQaCieZxuaQekQH7H",
  "key13": "ybYXfii1QwFR8GhZ3ShtKSZYBK4w855vTwieP8GRV3zx28B8LRbmheyuXtett2YkzWFmgpDX4EdL5YULgixhCVr",
  "key14": "CmCQ4J51hSqnc4SBRtkdVaGbqYQdEnQ8j6dVi4F8CU8gJCYwu9XKSr3Tq3uwYaonsrfV4Z5tHVMokczyXRNsvPJ",
  "key15": "4dH62CE2ZkueYScR4hLhrVBVuXcK84qe81nvqXZzK7KVmmioQXyDu6WDj6wjdrsBWGu1xt2vjp8PSPFayxRAm1GS",
  "key16": "2JghVFjGeu1PDhK3aMD7ZTNFYm2Pb58PAaazQjToMUur7UTDryUxMPDsWto7FJ92g8eTEUsSj1EpoPrp93Xvbt7h",
  "key17": "4FuSmC4wKvVcbzHA9RJPrqLLrqVmUyBv5umekKJkjjfc9AQft2fr9orb9te8eSZu9GtTP4oUAHRUcm7WZszPh6Dq",
  "key18": "5o5hj4YP26uFtcC4Z1YxnyKhtmevk3jMxbriXEu4RJg9qHMcK6TPtmNfsG4WzfRsr8YadAMu2Xo3NrxGy3B3XUAc",
  "key19": "2Hfvpq5QRQYMe4TucHd5Hk3EvEPtBoniY7iBYyiqJoNR53mEJnSHRgA9FvaS1gHC7s85q5UNLs5Kn9YdTovSyzBG",
  "key20": "KziJYb51dubUdhsYZ7h5heuEez3VixNgQueU6ZKxdAnMKGxWrFZ3U42VenCWi7mC4sxvx1o9L9r88eXGCjeNaip",
  "key21": "2w974po9QMwo3RraPTVt6USnrB1f44Mn6pyP8tfiqV2MSrQTa1TU9r7DxiKUcd4Yu75TRFGPMpvfWnRNUNLaMdcp",
  "key22": "4rjdyz5M4rvwu62TciPMuPFnSFgN4hMzmqe4rpkFR9FspsjLJwUzPxTpMowQvj8n2fHrUFphkAAAfjVZJHW1c1dh",
  "key23": "2XjdFy63k71ZvbfZ6oMuDGPJrn7jpNQmCqgrij3jDP4q5Du9tNekskgufeZUAne8XrvLUAxrFRBkiSHz1Szb5VF5",
  "key24": "FTf6sW7T4gSaZa4H5J3VoUfvsjum7Qi1SWouz9eMvUQPhYM6BdaCNgMmhFkgbwqdPrJDUYokRNCyarobkBFULPc",
  "key25": "igR3AP5g43Znpk3QLCSHjsuwpC3ndTWYh7Pgp9PshuWdmJdymedPHp9Ckij6Ty62ykGUrzkiomjvXtb51WMQyGg",
  "key26": "34mcn22QnsJyYTfdSMNx1sUWet3gm7CcfXhctvNzr8hoszYygBjy6qyUgvv1bUntuwo93YfwaxeFfp6c6F7k3EVr",
  "key27": "2e1uCC5GXtzHqcerNEXNauDaNCmvFBLZrFTKR5BMP1v7wZkUo1hQihbAjKRpoxssaYmTNLsTKyfstxxagPXrBRCX",
  "key28": "4u2VaUcXydbGaw1XvPXCd37MQB92fGTX54Dnb51xp2yWswae7MuBj5Nfyt4QnX8WCLdHbmQMnSW54TqhqZkMgbor",
  "key29": "xYGRW55g15mEUP8pKbLesqHkQ1JivAAzMo2cBzftbWhL3mHyoYpjczFWyg7apVjWbea6UtzSg2LQkgV7ZcGsPcM",
  "key30": "3B12No5Doj5jmzrZLNMn7yvsppwJNPECMX1Ajykyz6Eyb5sag5yMF8LQZGNcJ7jU3jjpWucwTkJfXYbq5gH634Vo",
  "key31": "4vSfewMXvdEHDq5qjzmkr37BPy6N89yZvWSYKKpJkbDpwEDFmSpn9gLEh8gNvYhbhLQcgAVV41M5dyyrt1WowuYA",
  "key32": "4fvDTdYmzUKzi91P9xhwaBRVXrRPQ6p3ANFsn4qX2dLDUBEDCwDntRsuMZg5c66psj4od8vQF5JNWCQ8zimPUHeA",
  "key33": "e3T19bAjm68AKyEcskbo86iyG8rDRyk89oQgLfaqhhhDDhkP1fPQe827Upfkj7TdaqMFpP5ErtQAPF1pk7dy2Bi",
  "key34": "3zgqjUjnp7vbYPrTMGtFDCbUwVczLmJXjUY8oLADXRob3gN48ikNwAc3jAyGKQy7f4DmoBzxTJLec48z2jmnaixy",
  "key35": "56mj37XQWMKASAcjTVa6Y4zebxnFPMMJgHabGiPnHQZvzE8271gsESwvSPCNFrNFkMmMXebvum8eXuvYizYKRfeZ"
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
