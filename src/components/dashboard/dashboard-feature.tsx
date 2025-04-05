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
    "3UysyxHQzQ2hPU6w1FL84WD2CFBMbSWHJ95GVfT5VXcoaghdsfz8TNHyQ9b6n7J3YdaPLkm7aFkS31Htgt5vxdyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GyjpT5ivwjLKoSC2wg4JyFLzaTHfuJ42S8dFnK7T9id7sKJSY3sJHHZupENrJyRZwMXaqporAXGjV9asUPevU7z",
  "key1": "oEcf4dHnK1qcLuNEm5vRDcq2BPVACcgMc1QKtuubDP7oPjueMHgnigKwY2wAkRmhkb8pcx4VGxkCGu6C194CCus",
  "key2": "47t6NxKpeaXuiWkYDd5VxvvZF6TYN5cFLHMRKQreczJnvXviCh6eowd4BxLoghc32swNPKTxDnueKbKprpKhWgws",
  "key3": "4QurL1Au2DpTTp47q7jfiRD7ZnD9pBU57YJEKvQTNKoTTyJ2ddRS5qA5SvArx9zGJpHXKgjePpjdt7tGpsm4gzh8",
  "key4": "3MB76PLvp2aQkgZG6cHuqFWZcPMpXEzbduQHYycDH63APzKgFeCLCf8RxV7oFUhNW9RiHqYyUjPwGKaR26ZRAnN4",
  "key5": "38jXNVaJkjMyCx34CcujLtfn3cuMhfhgbgvhJVWZjpKRp6JRXj99L4sgrx4VReYQnLRzNAkPSFSfg6rGnA6EdKxh",
  "key6": "5psy6pdYuVuDgCNzyQD9666GrwM8Uq7q9rgYSJpceHDVUwgzmR85cZwCjQmYWWXFne3UxQVMT2kZGt89TCPJTBhx",
  "key7": "5mVmRxMDYtCiW2aLUuLQaHYRV5UgrN7o7UNgANBqN1iCgep7FbPpGUfQv955iMhAXpUTgBub521QuXe3bDYvSNP7",
  "key8": "3Hg7211bcjbNMX62FXFkwvjkSvmC42rcK6mgyTwy6RwsS9gWHGhEe5p1xdW8rpUKKcUd6p8YhyuTehbTkXowkv59",
  "key9": "2EWFu3d3pio9BHzGkh4eGLjcqcRiNasriTZ7yg8hW497kD9xvV5CWBHnDjU4BxAhtfyEvPtqs5c9boYiVZSuyTff",
  "key10": "4iHa1UYvF2dzBzQKqzKZvee43f9Ufh77p5axQeDWio1SioYFJ2vmv9KP1LgNP5w3ESus9bYLbk4pzBMXHidWiHpZ",
  "key11": "5UqUGajq5mLKZBApHbCa26rdMBYjbbZ9DpedDAMLAeHpGwf2zThcfvixBJpktujQz2KreqPNbqYGGDPJqR843xYP",
  "key12": "5DPAZHRyP2ooaYgTibEkZMPGs38CdDVysTUkMsMz3faFaudUKpSDCw5LbwvfWZjuCJHKCzMaYEGMa4icweMrKJgH",
  "key13": "5YqtndEThAXR7xH97jfwR9SVfTxF9xNpQ61vyf1ogFbjiec3hwuFGnAHizwN4seYSRFLyshHsi3SYe1dXznwbSCi",
  "key14": "5raCkJyHNVqd9aehSvjN9DFAzaa9ewpbQAumSpQRQAbFv5beni5tsV5f3LM59jAss781hP5Shvaesk9v8GJgLj6T",
  "key15": "5cKPyFxbr5EamV91c4ZBMng8YGHXPNXxZQbX6H6YdtzUU9N3cGLECcvq6tVWaaowtxPqVP6BXVfHQb7Ped3YnGz",
  "key16": "5XFWyQ6T61a5YprJ6ai7GfJYwh8i5NqsfRx3vuFk5zeD7jd38pgz3VAmPAdVUVYfCGea8vU1WDPqfnW58DA24qwq",
  "key17": "5u6YQm4G1c2kifTpKagqW6PZcyhTbioJCQV8pPiQuDAnQW4bKQNxtm1Zq3zZwqmtpqVii3tJ6x9pWtHaGGZAZj31",
  "key18": "64n7bsvKLAKRmPdi1NGjhwUW7sQTGF4NCoozRh5oYUV8SYbkPmcGgtVzWJbmEmVYsNhviuUKzHtu3MvYKv8m3byz",
  "key19": "4UyMEU8jEtcZfr4uDRYH9JbmZboyBePikN6kNCE5kdL7GHmPqWxeDMSwCMNdEzi2Rr1g6PiEnNBJj5CixJtsra2p",
  "key20": "63zndJ5GZYqkEAL9suB3N1my4KyVcTNXTTjtnkLRrtvJkSZgKzj4yn2N7Gzv5scKiqvV6MHNtaKQpkGyo2Y8QK16",
  "key21": "4qUSFocjKND583bFZJ7qfDFBRmTWL4WZYH8M5Mc4WwJzJUZ4m4DcErhDVh7vFzGgGJsM9Bg8UM62B9vLfrevBKrm",
  "key22": "4EV14FjeBbyCDCb45dmQ58qeFJGH5yHzXWhUtSFpmhzZHxGiFETPdiRK919UKSxQS7iSUW1ruE1wmsaFGTSXg4W4",
  "key23": "3dehoK8UYc4VzBCiMmnwrikNAAuRwFsgFPxMZ29HdcFLECDdvpSGA3nDdTGcaZpejVe5sK3rbYXBEMab8j5TobNo",
  "key24": "4YjmhTjSzQbo4mmCBpv9FK8QRsZFsoDUVDbtr36tz1bLP3bjZwh8R2MzuAik23eBfWZTMhTtAgCRNcyWF2DFs4an",
  "key25": "5QXKY9Gax88PWeqzBLJjuXNy26Ge2cRFri3tDZ9zJ4cMQB19o8C8C2gk6NnMnMvW4Leuh8KsAuprqJCB6Dj5Lt9i",
  "key26": "2qrTo1yHuwcXmoB5tkktzfR9Tzmyeke8XWfPzrKo39sv836kRLymjSzBzWnKuoAGxXpp41m7uLh8t3QoyeNmiD3f"
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
