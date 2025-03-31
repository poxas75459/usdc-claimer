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
    "2Bja9piXo7RYG6wjVEZpG1yuiLJrQa3ECavCtgHvZaHgyS7HQVqkPG1N7EnA6TpeMHiPtJLZ1RzpouM7znz6nUJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2YftStnBpeP37ZGXqE3T6TXxx7yCqmjhuUPJfXUbAw45toCXy7AXbJHcXDe7YDxBScvmPwAEgVdtTQLhWt5Byr",
  "key1": "9XDdcGVn2618dS56TpxXByDjGXDqkQj7o5KHQzCoHkg6LUc9fABRHjYKqSgkWose6q8vhjNagNU7WjhZ3KGGeqf",
  "key2": "3QDMGDZhCC5givsLFp5ZirL1SZeMgzT3FbQBrij1hh5syeNtxx57iuZWBLyvuKe9a6iCYsZmTittdf1MAe34gH45",
  "key3": "Z4PR1yGvgrsAxm4CbfrR82mB2mZz5ZxqKQnneLmCGihA6KRN73oHb1vBm2smpdDWDVcmxaMN9MqtoNF8Wj8xcr2",
  "key4": "gF7wDRDTKyNAbQaZesbhL6QqGcZcasDG2YyPQHVfutW6aMykWezgBmg2RefP2VKsSMzBPvHnWcgCj78KPi4YwaA",
  "key5": "iyJCjh4erVBgqFFan49njZaxFVsh3U1udLNt5kNGdXCU3VtrsYDfMgg3Er1GKbyC7bU8zoqtqNTB9hRKN1s3njw",
  "key6": "kYc7AvDqqTVnriEhQfYrmTjKMCJizjBxRfutRK6JHT8sHfg6zoiSDvehf4mLGHt1gBwzRAT7DZMYryFhXqTbtxc",
  "key7": "faiEs9NA5jrAM7uLcpztFjyouiTS7aFWR4kZ5Mdsk7mUaAXrSJ9SthKzFiP6Ag6Qm4hSZMqpdUioEwNivqLXeUi",
  "key8": "LGxJShRh7w5wp8u1H3nFD3WomHXsVvrzEWrQsWjLMBuSfVwpo1UuBGrV5mVsoa79RTKjNprSWZ56MzXYSz3CYVo",
  "key9": "3wbCVxqDgRU9BGyvL4YmdMbtoV5yH9fJ5DwyNLMjPRrnjeUnbnWbGuKNopgpgg14jWX9XKSa7dS3ZuBFrL9JujPd",
  "key10": "5MUPE8sDi4NP3PmctGeDs3WyfdfKJpRGgdEjRFiwffocXxxALSCTogwB9Pc4xznzmKsBPiiGkWxzJyz3mhapAGfG",
  "key11": "3pUfbhfNz7w9sSoEQ5UHEyTRnqoUxz8JDn7XNAd22aZ4kMYFGBZTX5oQo5uTjsY13Pak8cAvY6QQzR5PnZ477CRM",
  "key12": "54zTuXBz6L7m95mzJV9iu2yn1nyvk3vDaC5xE6jGXrcyAkbBNzv2ckjogYpDXcTBPbTQTNjt3QfUTSJU8RY8To3g",
  "key13": "3vRJc8Gckq7588BCLMoNFQc6Qcus5psZzWGTiebipe9AjG22K5D7tePYyyYFjJnwZVtMoiQo8635MhA5nuqEYZ4i",
  "key14": "5eteeNxt5EDjQa94sUB8DP5a8jfmJbJF6AqjASyKHpAUoGn795JdN8AHh52GJ8bjMSszySn7pK8ysNAksvLRRKL5",
  "key15": "4Ymq5PeL7JA6k1GpcVkybgsHdvTKMpLgZwfPCHo5hApA4rLt2YL1SPxMqcTfy8Gu7qqG4XfrCGJcgYFGXrvCgVUD",
  "key16": "3ZFgKJFKqa1zvwViXfRQv7Xmq3FKNSx46VMuZTxayD3K62kq2ZFq5Z1KJKPaCStn6kPJE57VurrCZVYSjGCqCAh8",
  "key17": "9XwvwwkiBh3jJddQznEHDfFPzYraf7foSd7wi9cTs8Gn7aVPHayQXojBc7gXkU7iPXKzbnq6bJdCDWJe6xDd5f2",
  "key18": "3nURhKF98GHwQAPXbStuieVn3MGZcP5zkcFvPifb2MBmwvdvYPgWeDUmEDzoJZmvrpLGg3Me3MVfk4DAi5Hdgehz",
  "key19": "3xZTDAgckVW5XGnetUdpiK4wcYcnCvwuZSZcn4wXyKcF4w4tmUfL4vXpZknHkmdXhjbtbrtVuhwJbprX8GdNvpRX",
  "key20": "4ibYAF5ZSJwVRsD4P8xoAqynN7uSi91k9yP1FgGAptFDH1wtGAGJ3XJ9dT2MhXod6Bn2T3y7DqsQ83VhCGZVdxoV",
  "key21": "F3NVPBT3yHTAALdh9ueMpHHFyzzdbvsUC3y4n98bSS6tVnnpwHVCsrwBHvQXredKxogQu7Bx5HwQHguoKvSxRA9",
  "key22": "hsF7aJwTNaYwAvJEk5q3CAskmvW8giVkpUUQy9L9wMRPpUoWqPXnfqafS3H2rd345D74R3LwmaNpJauWUMo1hdx",
  "key23": "sQkXQNrWjzPGib5WrRxny8tTrb936vEXkH8GxtuBz6BoeRRoH4AaCvenraGbthytkPisQd7m3yD21cdKhbP7oG3",
  "key24": "2mp9U8U2puruahQEk8jH9EHXASHsmBGYGehXwYxubyehuMkKbiJcazmX37eSz5ELWEPiZZDFkhAjnyXdSSLTvdLh",
  "key25": "2qRPYcqZkrJb5vmAvhmNsUtPitB2mtqaL2d64iL2w4HVYUZfVVLik5HRqpZeG8ZApZLXBbizfRnWJTtv9zRioU3n",
  "key26": "434qeMrH53xQVx9T5SdvNNXpviuiohpMjQQ5yKHwbi6ccRYpF4jhmkBmq4wMqxXyLNhde493H1WUUDSptHB1Ga4u",
  "key27": "4ZV9RC93DbaTR1Cx3McQMwSt42hzntnt1vTMmi76GXvEP6Ndbndaur8WiQfJt9JTJBpqaF5bhH85CyD1mB7vDZsG",
  "key28": "4FFFe84boBvxreoxVda4zXR6StyY9F4oG1h6BBxjXZGnS3nimQjg8UZ5MPFXeVRMvz9Wm1akyAzGb6LqH7rJmkA2",
  "key29": "tURUUE1Mo8BBGnZFP2JBQ3paiXArMJmdvfSHPNf3zoqBNXkWVdSwvymrdW2V97ZtBiQphxxZpPQo6eTcLyV266k",
  "key30": "4QyaK9f3xPzfm3jSXjr4FZ3tnBiABPSZcKrwMKg24AoL32Tw8xSjRjiZFjSPfgbePKGjW4CFkqLa6RaKRAWBv7Ki",
  "key31": "nd8CpW4nZAqDG7uWpoaQV2XCSHEsMJgBdgdxRmRH3D8czM53YqKiJFy4X1yybmRkZfcz1pKFYQ1zYcKnBk8meE5",
  "key32": "5jk3aXT2f4ausXR5yw2GG1r1RGuXPhZ3snir9miZsu47u25RdUDoAcWmsjdBaYxaipe8Lr1z5s4yC8DMZBWEfoVB",
  "key33": "4NaX63GTpr4rJDY11ZetzUMh831SXdY6CfhPTVenP2VgYjte1d9Zprek3vC64ifRR9W7ZSuxBUmwAgTSbzvCRKBs",
  "key34": "2BQX5vY28CbBEUV9Dg5NPMuiQ1gz3buNFkXft1kAVphWm5GtQsnfs8GXEBZXmyeQwaTKqAqmUEBKjhS8HPZ6Di6u",
  "key35": "5mdtJaRHUJ5ibG8CKA291cJdiKc3cSqKLvFLoLV8okZa819iagkZkUBgJE9n743JRijxuRSgLCP7DwrFPkCJffZj"
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
