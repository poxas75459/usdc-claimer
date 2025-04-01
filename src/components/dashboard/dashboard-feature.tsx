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
    "5T5s7PtS9K9wN5Axuqv24j8vgaMjw3j97b1LNH5Kctb7W27R3pFAbLfrfakby5Q5nKsE8WXtnpXVAymJNXzHBYcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DQT7TrW2jjeR6mGLDqr9Xm6oLhr9gD8Ex4uKuXJ4WquCPYsWgWAB2oDVnGsihhrxCT4Jk3Zjps6rF6B3HBreatc",
  "key1": "4h45WJAoo8xdHPyj1CQLZKN6r3AhY15CKo7GW4qarTrUqZCvKzReHzjEsGzvkm8DVjxzUMhrTJuA4cEhSz2G4WMQ",
  "key2": "5MxdrkxAL17tj6yV7nDKXZE4rSHPhRDjCbL9zdCid1f9cXZP6BkEdaVnJ5H6uKW9Dkp63keyyvhxL5wJ43wC6VN",
  "key3": "Tec8QZuZ5NeLFX2Aj3jKZjajFhMpPMpVmPCfcMuh9soDAtWDAozQvczMoqrmWUcNYsfz9SaLTTBqe8jsGu2XieJ",
  "key4": "3QR7U4wHYD3TsAjFmMhqCygjqX5392mTkvX74Nt54gAtT355dwTWJEjHSb6PuCAQHRRF3ZgC2Rhn6cYesnCWSr7P",
  "key5": "39BVyLya18YH6Lt71dod8mPPoDWJkcKRWBya6dkKJrezPBKFkywRHFMWrwYbyPTKXxZsJod2nq9N4hvagj45HaJm",
  "key6": "z6otHwRqqR6ABuZjpCxNmN8zxvnEyAVM8vHivTNY5eM9zDZGH6dq2Qng1P8JZgXwxrQsMgavVr3RsZRgRrwBq4A",
  "key7": "E7PcZ1DsvsUegqodpPizqgiMCwpji9Rq9oz7X3GyRnANgC8UKWp3Yc2utdscYXcC1qf5LA6Yoz4Nh4KYwLWSeEu",
  "key8": "uFjz9nkMdqzVTm7iQTg3fRMyYqQBfLvE3jhAhCpxiqJ7hoZJbzYHm4U92DN3X19ewXvweVQBjjh9wkdRBSHWedv",
  "key9": "f6eK4PKNA5cAbpXVTVPJYSBto5H1wfRE3gWK73uy6sVFsz6rV9di2cGSdoF2wHhufJAcqSGsxKo2HAKRB3wRda5",
  "key10": "5MfxRgauA1PpjLV7Qb96mA2doEWoCJGZEWGh9dc2RogYacePF7ShWyfpgCuoXxyDDsjDb4cH69RX4ifWtVBPGDjw",
  "key11": "5k5hWjc29tKvMhNyKhieZnvzSrrguXujQz8jEQ4YLRJeoSwzFCMibZV9hgYhvStHiw5rSm5pX6k8KcNAQ88ftDPA",
  "key12": "4Xy6SKyz6HUqvYT8zEn9FpnYKAMdn9YNne5YWpRnUTLXBVgujreMhYVUsZaLvZSYhhMrGXQJsgDofASRMT9FrDvY",
  "key13": "31ZrDTTkqjR5av2VGPEZhB7i1CbiiTva5umLCR9WmvMjSGga6owsuxdjexfsgKiENewJgmTe3gY5EB448Nm7eGgM",
  "key14": "8wZUReamqNxob5m8xqofkYnTwXegjSzGNcGBhvhN4bHsYUqdyiopejyffYfiSkv4HfLLGeUegm1wM8Yyz36ccJK",
  "key15": "65vsq4ESjAKCrhYZ3iKyGJzNHeM4ephQxVpwsS3k7dW5x6opc62PrsSXrBEMVHuMMYXs3FZd2dpVwdxVsot5NLK",
  "key16": "h6GcDgiPn2LzUMc8goTzSQXbhJCzSEGBSS4hBhT8CDXV6VfsiC74C7YTVX3DkYWVL3x4t6wnYeRVyCyC6yvKxtk",
  "key17": "2A8oVUsQbuceFfNG6uFTcTWcgBygqeshZWrGrBX7JT4FnhrurEtu3rGXRD4kvokQSkHbWUpCkjvX24LaEngDMMAL",
  "key18": "77wUWipndBbpGN4R7tyEeUb3tEtSL2XFvBRnWGaLJVmkUCiaVEy5eEZmULNGpe75y2kmasy4UJFbS3df8dGTBhS",
  "key19": "2nPQer69TcaVwPBmPGkut5onVmNqM9suobqmhvwhBg6nBg3UcnXJefERijeF1qx4WaXR8PonrUwMHjLt5pFYkSpS",
  "key20": "YyUZDe1tweULhpJmMfGSKPYs7zLPq6u4YzYYJLFv9m4sxqFyuuXZLP3d5TpJB91wPXBBuQR2vP6McgSMELwUAH7",
  "key21": "5adS83dThnfLZT1DLPVQKCtJjHciSqSU9uisLSy1jtgs2PExPs9jtkJUjcPuR1NBpBK1McvCuckqu9Dy1AFAqpJD",
  "key22": "2a1rbULPgEgKJqSCrmnAHGeWGknowFbofR5uWXHJVaS1jYGk99CCd55Ts1urXtae6mYF56y8fHuqfEmWW8L2SVMS",
  "key23": "51KifqbwndJL71bxVrRM24NMPKiPu7aULTj4VsPnVNev3ALPQEAqDc2rz5brNWwT991jyR44xGcXZkMV7Jrw8LpW",
  "key24": "28jbe8t65dMg4uu6ishnv7LjPcvXpab1R2QbVAi9EnRpeMcpTyTKfChaxvpQkNbktid9AuS5ANHayzfGpCu3zSHP",
  "key25": "4rFe7b9nkpndnKBEPHs5bmJRDBQJL5CZNbqUnGtw284Bb7ScD6i1GT3V3azmo7UGu1dLKtncd9uAHcLw5KUaX5tV",
  "key26": "4RSTc5V4LJJyyWDTq2FDi5iNcKg3e7xDDXgi9QjiM1DDUZ1PTsjeaheNqohTotsYNqDerK47tWfQKhzET3x52eMj",
  "key27": "3gSNesocHgHTTxEoaQBS2BbAxNtkBucLkzaktSmMazcJ6MmjGt7SKWphzTQztaMUtVTCS7uMmd8zvsjh6F9ryzRp",
  "key28": "3Lfe9FmdqJzKo2DkQW6UMDgwJznzthGPA2QMhU4xRnyPsUskTXszgZexZku13764yBYqN7ANw837LfXZursbpyMR",
  "key29": "3TjWtYjboSFo6TFUQj9DDYnDPG34aJiQZpKR6Uoqgee2wzZg4Zu6YBpcfVThELcHjtUjGHQqGixCsoiGYzdCTqG",
  "key30": "2ZUxfceLMHnTHcdg1WgVhFMXijQUBRFgkGb4rZpUXQjL7k7sDMAM4WEDztZmeBRHuocD32enmaJcZZx6M6qd9So9",
  "key31": "2sywoN7uvCvpM5HNwRakhbkhDYn3L8YQfkGqHsiFgRXToW2YECTvusxuZx6bL5akmB9WH5vz2XFLGKmvTJszn5M1",
  "key32": "51dG9p8yXUL3g5vEANtSoCizDYt3bzSf8yKELeFaiyrcVdU21Gz3sFxE4KdhWFjZZz9B1e2qBuu5AkqLsf3SE4ko",
  "key33": "BCFyc643jrMufgLwTTSGcMyvwR8xYSDVoZfc4GupEqkUTP7pBErYBWVL4xaahsATmBxYQA6vBPU32HLccJ8hvBf",
  "key34": "3aUw4Nues7J7sYEKUGjiKyiFs6Hhmy8q6eFQe8ko7LCapAREcZmw5wuMCamEACzxDTHj2TvpvNwPpY2iy6L5M1dD",
  "key35": "5WUHH7coPsdyPjBNRi6DYTCTs2t2FGhDmDDMAHaRza54w54wcgW2EeWqmLCaYswrgiFNfV5aRaAr8e5Vx2bF4Kvf",
  "key36": "43Ad6CQt84MTpJ2HtosmeohjKqg34Y6Kg8VohpBwjG2NvtKDzgD7hzsETRHeUoU93VJHjkeyMDHSUZ9HG4k7FgXH"
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
