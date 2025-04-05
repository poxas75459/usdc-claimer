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
    "WPyqYg1tS6er8mJnQJ37pC7xS5siLCawv2y6wjxv9LgsrNzDkgVLXDLkW7c1vT3xpo5weBZkfnpanpgSpYpiGs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Pjkh9e86g2WtechdagDXVtX5acGfiYdgCZf3XBTknB4QZ38PBo3H4tGF6DD2txciCzJ9UYXRZy6VwpkiobvcWg",
  "key1": "2JeqhDmkD2BuQhjMKvrQe4Qqb9vXtK358RMn7bBh4hUeqkpj5BbFvf77F5xUcb3py6eUqXTTiwCFLfn9yLrGXC8z",
  "key2": "5WRnhnL4JbhZbjTmsEvguZhEj1oAW3V6HELxi4t7G7fVdXaB5a4LEvNyvzWUd5bxHrogX9VwAHmDzPtWRgciN4jQ",
  "key3": "5iPF14kLM61HEE4uk1J8WfKNzpPTtzR7x2w2s8KwFEoXj1uS4cjEQfYf4ddfMic21whqKf2WjUSDZoF6fVLdJEp5",
  "key4": "5uHDFG7m7QBceKuFRpf99qMA5fhJpcHXJ5bfWdEhc4MdEVqWyTCZtR1PcyHsSBgANwjmZVA6ZvSwmYFJ8grcgnUA",
  "key5": "43dnDrfcwePPpvZ4DsbzqymRp5HDYA7JWPUmKYwg5Ax9Ex24gkPKQ2fr4pd1a9SFVxceKGJtKe34AffnnCpq849Z",
  "key6": "CUpMiuxeQFXtSFLPTskRBGcsz6vJXKfcVTuW6zvdih6FvsxXZdZhbZmgv6iL2hzbUvh8C3GKDu2xztTgkpKqUqr",
  "key7": "4PvKrisoWAKiVi2C52y7ur5tXHJCmsHPMR42SQADe7iLvFT2y6vqF56faWFZYSVubiW18uDgZZU6jSLLuAWz8atn",
  "key8": "4RzAhk8F1tu9Bqn4LXMtxrv4Sxo2f2dp2wzBGXEYK2VnYW3JhQYTkAJ4oRQbUnsCjNgbPSxp9dDfCSzzRn1r62c7",
  "key9": "5SHMsL1sgUbkx3DLuqUikpVFmc9TYY33obuuQWHz57reN85uW8sh5NR4EZw37RbLZ9AXERd5BhqjwVtSHckRNhhU",
  "key10": "3ZMyyiJSEuudrZuc86142ypLFVGNtfuFFEctP5vreK4XbWHtrcbB8DMq5zKNNJU2xLWQsaCiqUozPEeTwqYTw7Ts",
  "key11": "4ad8j9xnbd4Wn5Y2iehN7pSdkaF3nW3eVTBK8EZ1TBa82FsVgDYRqdrG5y2KRhDCQKUQc9o8MCUeEeWcPZzRsdHM",
  "key12": "3XpouG3wmYnmf9nmhz28ZoSV7T1zJUsX4FhAayXdiqeJAkQ1AFKxw5iAnrVRihvuM633kYfDa5WuaRZ4Qx94yBAK",
  "key13": "3TCw7Xkcb8FSWa2TpUyfMoHpW8DPreAbDhmySLz1YtKWA5EccUtYNXFdaPQ7QuZmHr7yZhjiW12RdL1XGAw44nPz",
  "key14": "efvZ7wTo7mTfND4GDqrHoihYF3NGR5YNwY6WkTMBGgLWHesAQ6PfeB5V6THPnbTtrvZHGwut6UFbZhNj5wZvqTX",
  "key15": "2CWaAZvwJ7UjBiqVeq3CFQqyfpiTVm9FUZJoRBAB8yziqF49DMXLtrh2XqsAfFemjpP61pi7e8PfvgkY5Z2tbkhG",
  "key16": "7t7wZiPWRZh7tyPVLGptCbnGKQYsKV1nmrHsM3Es9rdhNyY1fLw7ANByjEvcfTmwjFxRFGh6pfSyJ3PcEo1nSzv",
  "key17": "4WAxiCYbo1FU6WbSf2n7bgWvYKBi3MLg7Ee89Er6nAhWNyfJsYFqsPj2H1e4HpbD9vq3P4EgDYKypD5FYnHNFfmL",
  "key18": "4Mjn3y7fLcMpcBghJz4bYDJkJLy1K48h3J4gpGTUvBsh6fvnL8mYiTRXEZavjvwDSFPbUUdM4HyzyZBaUTty71Dn",
  "key19": "Pjc2pAF9qnaWoe4iApZ5kCNtFTivjvBTeTUG3N6VhqD1oUK8aKWQw6aCKnqaaF7tuMvkaS6cTqpFcWL4FZLvPtr",
  "key20": "4qguVfYrru5kVfvfi1mt67jZzm28wgm9xuB7Qn13xGJYPuxboik9wDChkkFHtb9yPK8EWnrSK4zqUd7bKz2y7NHJ",
  "key21": "EEgHoBQwhgV7Bw55wzPtBctShaSrxfmyHWao9xkgFkYkoKj1fxK829w5CaAfgv8HWFp2PcWEcjiKH7QBsGvdQSi",
  "key22": "uHNMyA6vY7D9HvcxACdNNTabLpQSneGTDVjaueHCYsrJKXKci4QjmukizLVv2opnXLfs34znXWAYTjRjzzRzChT",
  "key23": "3izQmdgaK19PfHtHMsSBw3qByGeyK2nCozM89DDsEC6shv5YsfwXDhWvhVBH97x4r3Ssc7gnR5iZDCgn3k5XqjXU",
  "key24": "4wxrn8GTomC19ppMZGuzbeqcu7SGRuc1hKQxoe1GLkteEi4Kj5eP1dNBUwJQb9pJ4rJZquu7puCMTAkYfbXxtW4u",
  "key25": "2jAC4LjfA38gNPQ8S6sgBM8aCGGbgkiFhawk3ZRcBD3A1XHV5ZzZJA7URUoZs2sFuga15Ycxiv2gJB6JKebtRk5F",
  "key26": "3p6cGsaWJvgcKoCBdiP6Jctizr3sZqDY7vNYLuLo6fNA2gcUvqWtkFHDcDeaQ9kXYWosoPJKhtDCBke63AN9w3DA",
  "key27": "3wu7Lszia9mH1G7t5ZRqTtgqFhA36sQ8hkVwEHmLKVTF4r6UGWHmLfnCmyb4SzcYok2y5GcGPtgJEoyjGyPPAYig",
  "key28": "2nqThrdzLJBrexJs6i1axLKJmZWF8dJ2z5H7fE6QdeavwamysrccpudXQycZRBmMwFgZNUhXdMDCfCkmB9Xx7R7D",
  "key29": "3Vvx58WA1iRH42754BGkfFygCREeBCM5gjLd3Y6XF9H769f9JofPSED4iwZ8LyBtjcdzc4QEVALKcsxyDQZqrGe",
  "key30": "33ihujt73E1pczThjwEa2qc9Mr7bYbjrhGmRPDKQr37kJLfchS4VoEE5CDYjUkM6AGGQB1eXcu7iecrNFnLvmGqr",
  "key31": "4zSRPpLbH9gnodvqkWNzFgwwmfuNDXiWWjUUjJSCXo1QkpTykPB5nQaWCNRBNMrKDaipXtVQz3umBcKJoiyE4b8Q",
  "key32": "4ssRE9c6SSGPLhx4E7tUNeCBkcS2bRZLdfQKDFaYT14Jpm8eYJ9jeLoATr5xajKmWpQeigohe5qGm9UDQnS6xYKP",
  "key33": "229WUTgQ79jBxBp4mSp5aD47kzuxRuxdB48fCYjyC1P3NGt6VuzxsxynBJuy1rJnkdzberQ8JPE98hrbshifqSNy",
  "key34": "5C75w7K2MjRvNqzh2g87xay8PVTZPRactmqxw1hPftj3hj9r1wr6d3fY2r8y8pGfKpcruK6f1GfBFDFs5BAtLceK",
  "key35": "5dYrVdfxK4zRSxFHPgisWdrLgLehto4uraxUpRx9tkFTwZacMsyQChV22GCJai2PWHRh3KsrPH9ZiYyTSZNGmtt5",
  "key36": "2u5aXPrnd7zhhC67fugeoXoD4KyE2gAMYn3W3F8RrhPVFDa3Veuwwe5mo9LFN2NxjcGQ5tRYA16ugw1YQTYffV3R",
  "key37": "52MSFwjH8xVtD5gJahaLW6rkfvLSGvmMEDw5cH2X286ssMw7LbNinqCGw9nRDjijGB5ajxGMuMFUWiiy5BEne7vk"
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
