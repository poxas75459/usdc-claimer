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
    "5aaRox1CPDTQRdHdaApGMgs3Q2QxgumfPMfsot7SfGi8ZWbU81s59VviMafjQvWQibqFwy86VXppirtokspWkykL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uyPB8KMkeJfmLpfF7765dVF3YdJ2AcNAdDyYdv4aXdY16kcQR8iTjp42Y461mx82EWHRGa1RUwTNiPJEKxzSR2Z",
  "key1": "nSJRotjitNiNa1mfwBxRhCsDC8jTDhgcbtKKPVBxpFBipiEo1Vne5Ez9ieXY5yGtxsS5CAq42U4KGhvi6RLzwmZ",
  "key2": "3LqV76q1bgs3dzy9Pv6bKXN9uVZ7imHHLVnGkV2dy9aEL4AqZX9bKAm649KSzW3vynRmjNB5ZagEPPUbdxwhCHw7",
  "key3": "62zAMxL4tyNPwK2tLwH77CwV2dCpmbuWWKiLzDmZhuBmh3tSLcPjWNkzLh2exGZp7kyHRh6XyHtjJA5TuH5waoXo",
  "key4": "E973ohVdf86j3Ce9dP52xTKJNYn19k7CueipFTrubnMqPYx85gf4oENcqwrWC5UroVRZbwgPR6BAvoYiq4amR7R",
  "key5": "2A9sMwWGJZNig6Q91XLyEEprStGfYHUDfLdQ55aCfxjNxJGFGVgPngYLhYRcSMMRPeiiSBuLmiLz6K4MBxMT7pVd",
  "key6": "3mMKuh4tihjnY5vqcsqDNGGpGChocobwooPD4FwUU8iBKmL1V6vSmmEDyb8w9Uv1ctqnf8SEMJxAownXg1PvbzZ2",
  "key7": "5fdqAnsNKEwb31aVx89AeaGvLZqtiFvoGy32UcpW9fdpCRmDHrf2TzuxwLQxR8h3pycoVVwKQya2QiDoCJ5McYH",
  "key8": "4EPDwUW4aYhKYhbJ9JNdP715EXGioZr5EeaGFf4G9HGYNjHqFwTSedfM1PU4GtKY1gYiU7LidyRrgag6K7Kma9Fe",
  "key9": "3DGceMVzTzsB8HYqhxmsYHXGpR3dYU1CALEDbytQwmQsms3vm2CicSK1ZKDD3EPizfThSjapwMXDGSXSeZ3bHGUK",
  "key10": "N58CkTrM58qPqxEkcTQgsiojufUtt8Rj7RfwsqPTxu33XGaS3PPtFatb8BGm8J2emJjZyi8fBdtq8ACWUChn58h",
  "key11": "4osc12AGg3qbHQoy7MoPn2qMgnRyAXLTEvmzwgxyjtqVLjekS4ihvKB2jzFAKL5WE5CVp8WmRmwCEQLontLFABwa",
  "key12": "2nLo932aF2DMbWqXDBn4ur7K7Q1eV1bNtRFd48Tuhy6uLkJkZU6VqUYJ59t5ZZS3iCwCj96VuUuiDHEM8hMy5vmk",
  "key13": "2UxXU8SciqRFioUmWyZMZ7wbpArWnE4PptE6cjvEcAXykPGsAfkeseBRm8rnZXYekiM6o4QPgePwb7pYw59nm9He",
  "key14": "44UsnS2VBdNVWTUNCwoxiNy7LHaXMraDmMue7gxM1NcZowohn58bm7MnNSQGDFRBqLp2Y8j4pqc17tYwjozgievN",
  "key15": "5xEiAhLaDm9W5t6KbreRpSjZAsTm4uW1C7Toiosu4rdXAi7n9gqJvyoV8KKTFS6wV2zSrpixFVjEymzoeHTownVb",
  "key16": "2qWjVj2MLX48ayPhvy57KkasZx1sD9YcGe2WuSfzW5gRyYqRL5eLoC86Z6oSRerLVV4kmsN71zdf3kvrNz91aUBv",
  "key17": "4QBWCGAxnEEVfhBTz9rjzoX4htEzkfE8vpXucbP136TNYFA8wFRQG1Zdu9LnXyB8chtHqCPu2frZ43qtPdT4wPic",
  "key18": "5uwTCNj95WYwfWnbM45kbs6kX6egdRqNrNAqQMPrP36BaNBCLWpTnWiRWrSiKzDMca4Dp3Nov8UvynDfQ9vyAcp8",
  "key19": "tGhmSbAeZSnBkh3XUej9kjB7hbuErFMQfkWSPX8MTvfLqqcpMX1wMqjmxSELqGCBzBA1MHX8DAkr6w3jCecLX5b",
  "key20": "5y8PT3u8f5doP7w1QXXtC7kDpMyoj4ccb8Kux6Bw8Ey1a5hZ2uVxG95XtUKYpzsFFhN28AufV9KtUKZ1qUqJDiHV",
  "key21": "26P7gLgbHEkQF6QeT2rLUqFtbRX6zpNQVdmwadRc8nxgJNcA3TN3y4pK5WZ3DEFzFr4qxd6Au1BAfrD7ctDe5Kng",
  "key22": "2LCY16DwUM6f94bSxLXf8NKUSjbVPpfoT132aGeaUjiUa3HFigsZiuwedYp7f1RYFBkCGWrRfFFKfA1PqVGDhd5B",
  "key23": "4Kx14whU8UQuXVBSCsMHUUXj5hAnQdmPJCAXduxbwic3L14HMmT3ChXpjUGWF3poY7kikuc14iCxwLGUSYrkDomV",
  "key24": "5rRRCG8fU4XEF4k4WfCzfhit39UT3ENzhKrcLnEqkPeJKbaMgS42LxnQfBnqX9aEZLkFTgw8p2wXK5AKy666BHL1",
  "key25": "3JwDzRdymDGfPJY3qEG5LqQs1vwEUUF9QXmgLSV2aSxdGzKCfgRAUKSCfEsVNvZcSQk1hr8jdDcwNvmuyroYZ2ay",
  "key26": "2rifTSFjdERHjkKEo484JSjCDHiZKLKrEwcWggJSCJd5V4PPFBPQsWyaiZEHNDSdp2uL4LqoTkqeRJyYFE3TgHpv",
  "key27": "XWnV5NMZpvAzz9YRVeZacmj41mdhZpVrSsowCGh6d1gZfkCpQsshPbVMhNAUCt7rdWDvWLrHw1hrR24cQJ6xfgt",
  "key28": "5rBdbpoxgNCtfpvUUPWCHaAe5ZZLJNps5JirNrudHCszhnmQmnuGoUNe6zWBFdRPz8saw3TVip5eLxgaaZufemnq",
  "key29": "2QAfKZbgDqp5QHNYqbYYSnoqdfJCuZY6Luu936y8NdemR25QsdziiT5dGkptMZcis5Cih6pSmogNLbPE8JPPaM3t",
  "key30": "hbqrMi9gTRGPN9Zcz2dsGughMPzmGWvh3iU844yqz4gVWnUrX7ZMLkWG7WQL9xpPMd3YiXJ1hSuUmKKc5ckozz4",
  "key31": "39KoHMDPADBrW8H37aLWTBCXy8YS5wmHzcwrkvTca4rxVxUUxf58t6FUVbBdor9xPSFWhgZq4MZCxpcEhNuuRFxn",
  "key32": "2Uq7izdqLLMMkpL4CK48RTwq9VejryUwwoueGiTUG9dVXLuxFpAhTnC9D5tU7ybF4H2e5tnn7TNCPY7XxBuXKSvx"
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
