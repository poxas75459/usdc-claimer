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
    "4uHJTA3X4KKsNijez9WNoF8ZeMRufcF29yC5vx1jnhCT2W2shAy6KGLFS4h1ATAAwZUKhFhWDmF8FdawSQU2YqMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2Tv7zHLwSa5yxTAPEKuNfT3iaNBDrs2ihEmohKStjZdNesCtKN2kd4qKjuzEo8YuHHyjdj16CzR3M4re24Q2Et",
  "key1": "41mTNiKGvwHh4v96GZM5TpY7jj6864H79A4vLqJ1bHLUFov4mcSzBRRggw4JNbU3L1Bi7iqv2MkqW9PE9zekjUY5",
  "key2": "55eZ1ikaNpiUQHYmD7FZsx1AxmjXoQFBHi7MKTpBjjdpeFAiCUVSC7os3V5nRT1pDvRfvAUqrq3cWHtHXei1PP7K",
  "key3": "ieZJtk3ddR96e9BVsMUi9Y2ESvCNAWCJDM4nWk7eKavYk1mPZueqSq5rA8o7hoev2pTAF9k6nnzBc6EejY8GSAc",
  "key4": "3bGitRqLiLWEtWoP4XrxFHJAEsLVmcq2842kmZqUKWDJwecBSmX2G2M2xse5pC9eyByUhh3rKNkDBKhggCVuDcsy",
  "key5": "4aND7pD47x75Xerz9tT6bVmMtbaPJo1DtP3UTHGpd2XGGAnU3ph1QpcQ986bXvjYHjv1v92mziLhmLoPvtSRRBvK",
  "key6": "3ZM163ADAUnRgr9xjpJ17pdxri7meH68hPUBDC1BRRyDJ2H5u149yThzPwuCSDTgytmmjFn2LDCadAYH32c1iH2r",
  "key7": "5orXi7jFtUiDmGDCHD6smjCtNhpZpTeWsVU7CrTf6bony4BcQwrJaQ56QcFfd6NhUB7MDSz3ozrPnVMGtHj16C8U",
  "key8": "662QJthf8psnLGkYV3CQCaFc3pPnaFwRTpia1o4JkFtobyFrkXQ1HAUZKfUDEmdzT6HEDhX5sbQbBfcy96DNuYBV",
  "key9": "2LmMympdup9B5wmWFi8jpwubwFaMPTmJGjvzrsszNNQrgoBvzjwNkFotkdqus43PKT3duCL1mmyzYaMnTJ4eFWMw",
  "key10": "4w9evqZ8hDY9PFNJJr7x46TaJuAf524WZgYiqYXHnopVdjiQXd5vGATDiy59eYg5FLrBPzTPutG9tiiUDpzzpLZm",
  "key11": "5yW4XknntFycqtPB3kdnKMEvyZ9PxGEApfSgtc45JX4nnJwAaLWAX2qe7HgKyUMT32Lr5ERtucJwL7FEGmTZoVbL",
  "key12": "5wDLzfKdr7mu3mCDTg7U8BSELizsF1Xz1gpAvAZaZoNzs1E8rCRucfZZiwBDz9ukS4TrdLcad3ryK8BbWzCKNg9i",
  "key13": "2XzuFe2SW8fSGXx8XHK1KmR3jM1QmFkz8VgG9mnYZNgtmmafQGWVobauN1KBcbNp1582nUpovBznoyw4GY3pFXvL",
  "key14": "5qp1qZXT4FCt11UUP2ezn2YBP1iKThBZmP26bwVPvrf7MmzsNvCSS2rizDe3urxrkvGF2C3omHpnvu3dYqfsnkyp",
  "key15": "MDWuq5xzy4c3ifDGMp7wyxRJWH2pCGNnhYcbH2W3MBwMSP9Dv32n3TYbG6EEtWtVVHzhB8z8M3veESCoKxs6tLk",
  "key16": "2e59QJMGRNqA6PFPHUK2a1uY3C5Q2aFpsn35SrUUjbArnmAB1UaVUbYkMz5ci1xhJMuLwSqicCbm2RcUtVmL3YYy",
  "key17": "4BKNAJBL1U8jYnwcbnTZyu15Br6nWV939x6ie7UdkjPt9S7WDnbyNGhhb4B28jcfoqtkazEBNV8KVUcSxUuivAhG",
  "key18": "2NPtvCcrFJUPMePjco5kKT4G1yi1F8NyjPaqqzJKuqSkgdz4Z5xg2g9oQfWwJ8P4rA5BBQ5utpmyoegPBQgWYPfQ",
  "key19": "3ZcqVaYBxZFx1VLTnHu4P3aSGPsytgAf2WWw6Ge7j44AvKFHqpAqsswvuiwuc5kFQsXBCWFv4xypjoKNueNSQrsU",
  "key20": "xDgbdusVJVFWgNCkAyLPC9kgEioGu1iVvEgkrKSqKb76oaCu7ScF6zfe3sHStm8YLq5vxAdVrPsPjJy2cU2DHRH",
  "key21": "4Cho9ukcjzAyRbwvrdKwLjwbgbWd2Y1mBCrhLCw374bAppswmByteh4Y7J4mj6FUQdStJDg2Lo2NDtuzZojWZLdw",
  "key22": "3amxC5pCKmDKMnjePd295wZAdexg5mt5LbpMtWHMWmjPXmYNdoQLCbuvLKYfdaXoBgCeJpY7goEGeZ1gUcxvPftL",
  "key23": "5LLH7hmNyqA1YWoYXytGAeHp5pQ16U2p5UHsWuADYpPoYAyC7AHLbM1U9DKGqYmecbt9yozsQ4nhw9buu9j8B6Uo",
  "key24": "h47AqC4kzXhyZ4m8C2R4GwBygtZyGKWH3FouGp85rkMYty5zbVdopBLfgoe677ad7vMg51dMvVYJmiRW3o5mBft",
  "key25": "qhzdybkXBPitzqaDra2wMWJ5HMnfBMTKiWwNozkWkdhSHoGeu8fyenRczXdYhMkJPGeaJ1zV57PqVoDjzDDSxTV"
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
