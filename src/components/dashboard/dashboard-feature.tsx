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
    "2ZuSka3mHK57H12dCcspJ6AqZRLA4aufQaf3ssev9by15upiVnR6WXeXTQKYgEEtTostiGBJN2WwZz1DHTQ6NSua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ey3qW9cU7gx5HeoaM5nBCHgNe3osDtQdA79oPAhtDwpb6arPbAmw2j8JJK3CyhyPckKPZgboRSPZVNSdnmXQhnz",
  "key1": "5exfWrUahC9Tg8KbRyXTaQRgGXMLvFTexN4DNzy2cXxWJMJsn7KEJcG3Lay3NRWKJtip9jeCez2R64azPa8Ne4uB",
  "key2": "5bYs6aZvsuyaDG9U3sdmUGGM2LBrREjxBF1R6YqxFR7cvB4ndaSx8BY9rsdJMCX3shMM1joKL2aUZNN6JKm45VJS",
  "key3": "2WME7J3wbbjsrNDUinKRRQN3u9qPU9bkCZiYAMqLBGekg9YmZMS4gvyXmWsDZMQ16hHs17KaqBDwBfsbChUcXmq6",
  "key4": "4et9Jg7UPdxKC7zX9ETsSPuus45S8Jc7EQXso7Gj1g8gQnnP98x91bRLGqpraQHxcfeqp6iEVAPS8iucJYjJrwcE",
  "key5": "2zfKVmLL3ERBAe1UjteFr4t9ppUgroLxTgHkRY7Y6ervYSWgz3pw7TCHWnTTSxcPJZPUNixkbA6bymvckAbR1Fdr",
  "key6": "65H7h1NGBger4j2Q2hSzHZCH9Viv44bKGTfoVVYJ4UHAheR1GT8JvPxFEs8JNSfQWr2g9Q1rzdHGxySdNjAxmYmB",
  "key7": "4yQwZacg8FTKPaBU8CXnstNo8pDiQ9YbLhFXvqFsYpKVgQL8Lz1WM7JpHW27cYvZ4BYPBsZX7sEjvNi1htSTMycX",
  "key8": "2nsXxk9BtpDZ4nASG1f8Sh2m1AJ3QyzL3h37ePdKYTQ286puQ3q99SEeCm2sP3utg4WjZCyqAZsWHbf4uH1K3Zfd",
  "key9": "4jnPSfmcJj1xGWVUbCD22oZAY5PUGhKUE49L4WzoBdBj8m53GvSCcfuSYhvuXS21V4L8ngmyFQr7WCcJzpz5wVbB",
  "key10": "yu46LJPkg69cLKbHeHiW9XDsu5YGSm4m7c87DRV5pVaJgavxowu2bKgnqfeuoPaAhPVQhiuYmQzK5iAKooVAFmA",
  "key11": "51dcrfehgShvtHuxBW1m6Fh6JQezDDEvUVtqca2Ti414PGxC7QR9fkriERTgvhXvooyYsHEktfx814No3q4PvwiS",
  "key12": "2XCA3yUT725o2ZNPHCHBpTnrxjNEXEMCCniPQnfcMTDMFzF8tb3zx8qfK2kyqPnNBf7hyKUKBdfiHnL5u6q9NNVf",
  "key13": "4qvYYYdC54W9qDqTksrxfpFT4kaqANkMLPvteu3Abst59QWd6Ny2sAM5GX7ZxZYpLAUNLYAKDLxXEzH9Cyaa1Ng3",
  "key14": "JxDMu1bHvj7MzghqykHb9ReqrS46VS9jb3LBj2LoPEVYY8FnQNhhp5yma6kN8ToNvoXSEJf8RW6tFzmRxTnJxCY",
  "key15": "4FKYHpwFN6qVrYXRvSj74o7Zej54rcUZYauxT58fRZ1XJf9X6DD5Z9jPidC5cg7L919T6XPAwW3hZdU9AmgGkmXX",
  "key16": "5QyrELobxk4eJ5Q3cDH572fxgvm4QjLfS72sJHUK5dChJAbX4Fo1N3x3Xvs7S2fEJYw7XgGGrP1YNLCXL58fcjcB",
  "key17": "3F3vMkFBtwErv8Au4ngKDufEnBgRsqsWmNUZohHuYB9XvKXsMC3BSmxtjWzzvDxHb1rBG4UJdbJ8coxd2jiPaqjW",
  "key18": "277ppj14Ke55e3N26XvL5snLLBekwPigfqdW4f76UUWwwxQkknb7AX5m9zJ1unZUQi2hgzuSzHepNWifg214ASpe",
  "key19": "5xafvxeC8xWr2v474kjQ2sFVLLnEu9mSpLnGMB1V9MzhoqtemfBWRuKAP3HJpKeR7pyQKXj568UAr61tbE4LiSks",
  "key20": "3NPcmSRUYM2ej3CtijL5SvDE8mWSRCn56eE7udFh5RGsZTf4mvFarcdapxGc7LyDc6q7CDirEyeYPjx1S8is3Sdd",
  "key21": "55jrseSjoyTTQ4KG6BBPsumbyWAmAyJLWbusujNQm27NSSSDK2zDcXyAJfqrqfDPymZZQNezAjGvvgtdnVDfojgq",
  "key22": "HHRqicEosSf8JJ5W5ZJDESTcYyRYigbWFp9ySwLZ96xYhTH8rHYdm4KFkCxLJFrRaKU2REpPZ2fNaupNUqRu7x7",
  "key23": "3y2MYRU7xuvPmmGW326e9m56LfAtL8v5K1tMF7idS6GAvXR61hVytfWhUKTAUSENXRyfkiFxC6i7gaZsgPiwnFpt",
  "key24": "4r6gVcPTK8uFRMFHP7X2LeCGZ8c8tKH1MwnzzRKwpqEMHCe3H5wF6nKeiK9a3fXHsStx7gpy59HNVTbo3UWp6uqR",
  "key25": "3SrFbzPti186snGDAg2Xz97dxQ2hbubTfyLhRxeXzTCtJuSNaSzNkAN24e8YPogHnX9Dwb214La87UokXYR4eJkv",
  "key26": "5NNowj2Y8veBNjGwAan1x7pugsJoLEnQmGdERMM8R2JBH4wZwTFAsW9TwPEGuocia3YCrQ5mZgZdVgqDHM92txDJ",
  "key27": "4HczSyzS6UYChbCv3TSziYtTsUW8GBGmdjXoFPtWXuko38Lt7FHtMboXGYXmxpDgeZ74VBuL4zhs8TQaV8PhiRVJ",
  "key28": "VZ5iU7TXgFVhU63nzsS7Mpq7bdxawr7JoBqEbQVJtcR22xMpBNxEvUTPTTa9afAPY1PrrUNbnNob48YpoTBggPM"
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
