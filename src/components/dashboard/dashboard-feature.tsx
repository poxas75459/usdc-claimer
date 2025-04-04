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
    "3D8JxFxsvMJT6fW2HNh5xQDMwzQSPXykH9MhFEjmRjxRtCdYn7C2aMfTwMymnXo1wLQjeD4kiJkft5jTsvsHeiEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVHG7LZrbAVWTVxqJZkR61yufgtLkC4XEW9FancCp9zrzas1znQDjsbAjLvRVy4hxaJXFyk3b4dVLQiwyGH6GDU",
  "key1": "5TFTUBYnvwZdGEPCzhRTFQRBjb6D4MZToLppBKGA1h41oDuhRNjEZZn9qeVzrtHJJzi6L3Mu8UNvAkbFKTrMiGbc",
  "key2": "U8CWW8NQRRGoZKrWcboc9qsJtU39hzfRqkW4CGLeENr9MsqqyGMoT5XyL3374pUg7MapC8tDLhHKeMnwjEGxh6g",
  "key3": "2jvaQmyeFAHinZXSj6Ta9dZD3XWNvs7EQYknzsxHbwiiufyGts5oPGnghcAjv5hkS2GdGiS7xFQ6Y1GroHW16u3Z",
  "key4": "2B1rD2J1aY2JMeG4iEWJ1rAoCn7E6q8YDCT2veWCmWqt3Gu37FigHW6escAGTy4oiEej9vBgCDvutdo1hsJGKh5K",
  "key5": "3hAa3GVkNPwvKrvMGypAMYW6ibvG35dE5G6ZqLQ1yx7dHFxi6zkRniFqudFboq6HFgtynisojyyXHjEicGHqP98V",
  "key6": "5XQowoXRbCvDaZLpurXn1AyzE19QU3SKmxQ9DS5yHtazS1Pwys7QbWJANALkAfmh2vJzUVWRPad3o1oU2XmRYd8y",
  "key7": "2rTs4kUmTvsWnZjA5AFdWi9Q7Yk8w6kjoRHUyPHJhJVNHxyCQkdPxEr5qsRNsrrVY7wZiZUXWFi7Gj3hoMh37yhn",
  "key8": "54sC3VTpBvMrY5Jc7LFkNDzLoVd77N2MgkLszAWfHTXX618Q9ckDbkdSFkkYL7kFiB8oqynz2nsBKbV2SH6aLk7q",
  "key9": "34QsvL6RCxMXBMuVTG1zQBVTKAfBtMouJ8DaS8QZU41Q2U4Fsgv7vGRivBej5PxZ5Nhew7XyTZA7Bo9cpETjnAR4",
  "key10": "2jsLisbQ9vrxpjuaNBtJUq1JCW3S6bzqo5gK9SLfVsp86c3VuEeJt6FStHBjkbtxz53LXvGrmV2DcnG7wWhHfdtn",
  "key11": "2VrirRrU5iLVD4ePhXLmJvKvUbxnPbU9cd3okWzqkbuzrbLvgKosy9qiLf3wCX3UDJH3mss8kHtuVQGWsdR8Wbq8",
  "key12": "2ZXw8JbYX94a83a2STDYm6naAJDumi8eGkfedxipuDZAisu6M3W7ZtT4d83kEE3AguoYDsrKgdfnPuZsvjD8CJfV",
  "key13": "5h517Hkg64Lz6owqWNsHw3x9nSaeFkoPZv9652JR9EgtBQKUL1hUzZxiUthpuSXo4Mir2bWetJVTnXKxVaAHBCFs",
  "key14": "5wLPg2G1znSWRq8wqJgtQy9Sv7fsHkSRKcnor4bYsmfDUHAfcLPcApGMykVKFMDTDvg7z4m9RbjNPP3tcRB8vLYS",
  "key15": "2UmaPjscTbxPNzAtaRVuBqrbLRKqFHGmVjes84tBSCo59H8wasnNaPgewiM6GcM2iPABB8UmYBjgaCo1tR3GGE8C",
  "key16": "3f2LTMuKddo6Y23TBKhiT2JN8RtqT2Egvzs2m9rCQN63PoCkiwXssR3PngXXaa9uqWsVrNPZnYLzya2Z12YXNHu4",
  "key17": "fN3yhhoFUzWSupk6hrmD9BsMnbxtLycv8H6rQiUb8N1EJzpfy2Bhafq4DE282SjsHrw5gExNje7ZnP2RaScvPLN",
  "key18": "P2ZX1ModXKoCW31WuSfVymeJvsGet36AeWGJcW6LjKrd7REP3YsmaLPnzzJ1MRkpEDSMybYeXQ8qbHnKsyuuneg",
  "key19": "3qDFYqAWySjJ7HXsKWpkKs6iDFGdW7uUDPsX5gu1HXwhBcK3r8vr8gjRnCiFBY2TDFQtm56wAc4rMb97MHapjwdf",
  "key20": "64f2oNUSzv9GAeXFKUtHif1Wp72URVtm87wq1zM1Mtf1zPYuzcod2WNMAV8KbxuN3UNSpjSNuoyBUyzuNTKGnDRa",
  "key21": "4kpr6FtsBvsKdxyQyfP3ynV1CkkaJyD5AHXbzY8sAEx7CBZkfe6waLWH51mqGcxtG1RMUi7NH1hjXJ9tELd5pfip",
  "key22": "3hWrb8CPm74q3SZfTgEZaLRMNTedMwQaozgyRAqoWBnM7NhcNTJwxAkycYodocxqZvr2PZLEpwoGzq9SxQD5QRdP",
  "key23": "2U146Dt694dKoW1wvheezTSc1RhYZYDg7p6HJxAgvZRBCDXLtLCLSUH91gAyLQwRLrJ4qGEyJ7Az2mv8KQXfNP46",
  "key24": "LZ2HAg8EZMWvmXNWvzhcPC8LYEUKRTuJ25mW4Uh3D3KGG8chh2dGtQdx5GqLJ6DcYpe9pNkw7FPums5NpsKkgfw",
  "key25": "4HduibpJ29jGFf5USDoudwSQ3Zd4GBJpNW6ozfShqMeRr9Tv8YL9GPb6Y7WUruCiawrjMWxDkWoeZuVecY6oQihP",
  "key26": "3DSV66tght4gZqh5BVYVC7PDwRGYcCNH2EN5wVb1XTyEmpmH2NVDKHNEQcNFmMSzwfE4f9AHWzdkGCiEqrPMhta4",
  "key27": "5fAqWaN9rnGM2WojutvP148k4Q7mJooQMvUk6UDPn4Gg8QnS7utKdbU67o1i1B6N84GvVHgZUUCmS6k53QGBQ1B7",
  "key28": "1ropKZ6CF4dP4uJadkgg9L8xFTHgVVGt24hG4rwtruKkKVAEkXNGmbwymP1XxUBBQyHkE9FKfYGJmgxfRHw7BcY",
  "key29": "PdGfyXT6WY74RA36ueoM7gP9V7mcm4BGeyGuhmhV8eivZR9FYcGx5BTZXxJwXzYpbjf6cw3gKeRsjyCdptDFxXk",
  "key30": "Z8oAafb5oVWHUBpyVPKMvcNm71S7pDyFvJLGiDLTMQJHvYnZ41G6CR7oj74Er7yXS2uLAKpmfHgLEv7B9j7wHvo",
  "key31": "3jrD3WAVTDrxS3WRNQ1fAkSm8kmi4eXyiYhfJUuU312h3pd4PpWD4SQq3n2WdCderA3QJ5YzEwKZ5utZEuSTKtmQ"
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
