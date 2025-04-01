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
    "2pokW9Kanb4QXTS81xGzLKjF9V3WeE4nsRBZ7VQC5BKHdQ1MH1x75sieAJtzJkCPpX2B5ZfwURXjiFm5DBzk4TFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fK5XgxwqSeiaJvnKSXsEWAcw6sow7ru4tRdLoFeMHce5P42TrVB1hCywgwsZkrxVoAPXy5RonPAMYmM4KUiTSZQ",
  "key1": "4BWusCRHgD3D3tckjveM4Pfp9xNusfJJBLXFmAP11f92tYEaXMQuLejKGnrmHMffy2L3UxqrDx3PokquqWdZB3uj",
  "key2": "316Pjkcb5EstfJEr6nbzZr74qFrXQUSeJCM3my56aMHxzihBAgcuSjxMYSwSHVgtVmg4UhGGiitxXaFpc9NBUWa7",
  "key3": "2bgWxwbTU41Syst985UEKg9PJkWjyGvGohQST1aqB4Fi5RMNY7so8PnicrujLjwSxT7TMTzsKKfsNPe1UapQRhb9",
  "key4": "8YYQbyKZy36ZNrakzweVSQ3LZDQa5knQyrxzV287zZSXqcUa7cYK1YjvkxPT2ou5Pq3ZGLoyQPCvocvcc6aVsfe",
  "key5": "2ytk3VWZeC4upiJoMcoQvYJbZcfxrYsku9GVoKiQEVSMNY6XAn3C8rLcVwQrMeYyG18GAwhzQnqzB3LAdRZbiNvo",
  "key6": "5xtbKVA28T1XpsyS2noyehsZ4pauQvFDPsfZ3tDEEGZALJArgwnU812sLwfrAragtgrCNznakkFrxT9dF8D7dEEq",
  "key7": "24LyW8gH6NSJfmma9M1n7XJYKc6MY4ovWH3ZRTiSykfgP8C2iZTPrvUSdHJHqEwP5kH98pszyyc87ScfFhCWnwEX",
  "key8": "3VdSnubJLC6eUjUxPB83N7wcQkoJ25omggUZjYeSZ9o6CN2ZmiZEuk15uidNyrZ9MEj8wg6QYknCHsbd4sVf2FZv",
  "key9": "2NRtQFRsGQgRYMsJTSuRiKYebaQ5HgCxdGjPSdc4TmyNhYwoQ7gZcrE26wk8pUE7KtUhxDonjYytxEFeX6RY4yHG",
  "key10": "61ULAYGU3x7QhmAyafXq2stq7d5o9VEb8N4Avv8mP8c2cdibptus1VMiFWPFrp73x1RQgCM3TXbuSe2BqEtGTPm5",
  "key11": "52Yir21HU24CdUeeRAxQuj8i5nDwvDbdEBaRqyCFcM5Fp6h1Xojg7h6BPsEFGz2p5VE7Qm5qxgemEYNHnjcweaMM",
  "key12": "4XhRRUUwamYJLpJPCCxVzCdoQoxHW8Q3ihBgEBvQ1Tv4UznJF3rSSzBqcNdgbE1cVQcDKJ7oZKPHFqdgiq3Z3Miu",
  "key13": "54pCQpXPPrg1stLy9XVZ2SUYA3G1yeeYThUu8TVUqxws9xph2gDPc64HXXbBDXYvNva2f2miuQqrohVdwJ3kT3Ch",
  "key14": "2qPnNqGLq4VT21jWGvLNGFw7UeiYW3CKeSm8Y3H3GaXewexBn93pPbwSqzi1xbMKimoSnAbASpRM5SgZ3mzCrM6d",
  "key15": "2UZUP1AN32DtJ3qfJxKpEwEqzDcwqPSfBw4zmJ7U6yQ9md9pBVxWj8gxQqfbeZowS1kuJ5YVgqExArwcK37fBdS2",
  "key16": "2Do7hmgfVYzUxxEmq7sKfmPh5BZtXtqGsrqhv8zZd9uorUh2iewEfjtucUJLdjDFnobRCRjKdvWYmDdCiuNoaJaJ",
  "key17": "5nQYAd4qeDdSfpHTNGzf14fAbs6WrYdHh4fiG2h2cuoUzrkwxTUgYzSvBt7g45AiC5CJwoYQSYzjM3pVMD9SpBkz",
  "key18": "yGkzUc2hJuD5DwzUKWeo4zePN7z5QoQYXLbEq2zB7K1fazK5oviQU39jJ3x62eoqaqERZA1CkWzuceV3j5wjFd2",
  "key19": "4UdioPdDuGneMdutBwt45wnGb9ciwAmJgeHdW8KLcVTsGDXUE6e7UTJU1YsGE61mxtEK3kkQZuPWGsXf5L1RvBT7",
  "key20": "4tTp7CLv7bCn4zoWHDiAQZYqLuL6dnuhYzhA1rGsfmLkn2iWzbpfoqUHHbC5LNuzYxxM5oHP9ikXi5fJBxJjr8rE",
  "key21": "4jUadYhga9B2yLMZWmcPRVWPUmQ8Wg1vCCjv2c8QZBNwXRFgHQSrTLk4gK1vURvkq6EvPJoaddyTwibJAQiGUKfT",
  "key22": "DR8bQxcoSbtrw4MVnkVoWXWeCFeVrvvLxNeXhMYp2QHq8qfk4TVRa1cLFMJj5ExqjDpFyJcWfogxhn7p39q17P6",
  "key23": "3Trqb24EU28HJz8Mp8v1GTj6HjunzELt5UXjp9uUeU5YScH4pkAXrqeNzJEs4PPD7WgaKrPqn3sY5z3pqatzqHL4",
  "key24": "48khTL4tgaKZzEwyEEUXq8iS1xQ1vT87qj5wekvnSUfaQEeDqHaHHw2zwY4G5cwnnuZpukrcNyok8janYYLawfya",
  "key25": "3EXZGUa6j82AN9x5yEyx3d4GEo6N4JSaMh4fsmJ4myGxNNuKoV9p2kCQUX4NKTTfenHQkz3bSKm6rAvi54xSEDGX",
  "key26": "5B51wrdkdB77h5Gk1SLRTRZPH4iKHwzraRuVHQft2FB8A3AQRj2mx9pq3ktic7efRnYhBNJfeqtiqWhsmTCDvvSF",
  "key27": "4UVYh76yoEk3KmbCMeBcfizhgWPnRfDuQnLJAN8xWzu2BjKc6gXhsyc7QA4ZPp8tUedrmnxyYrQem2aNBiqP5PSn",
  "key28": "25KRHFscnQWWDazx5uLcktJvYghwqHSCprzZdgJM1inMi8UcCfUZjSxctinfGzdayDy1YAFukNg91M8GzhRFHi3X"
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
