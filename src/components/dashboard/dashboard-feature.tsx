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
    "5pu1mwQgSoH7AFNz5Nvjvpb6CpmwhqPzVee1XLKENDAt7axVuYfzqdHTnqFKRKCgnnWxQkBxjUGHGHdxMugh88fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2veJcgz4n2BGBR8Er5YypvXPm2AmgNC7Y4cM9otckMciLHvrSSgzeHc1d5g2PgnGhmaYjSMqgu7QhCvDpcAaBrmh",
  "key1": "38bKi7fD4qybfs94xT4oBCDhaURDefKkF51vao7HjyvGU5cCPxnV55fvwVSavxXWSJ7hnV2UzEKJACgbhbzgHXQL",
  "key2": "4PEhs9Cf5yXc8jcWGVbBmuS73nhrcRzec8J58N5U5XhnJxjzp2Rbiazr1iDcMnQ8ZDCz2v8o9QZXAaNHfPZcLbWg",
  "key3": "2FeVdQesjdpkfKyc9ZnWpYsZGhuFb3gSdMAJh8QtAaaQarXRH8eU7xvjF8x2Sf3126JjF5fJrPCiDtyqZWzCboGJ",
  "key4": "4zFk8WxqQwtgozqrZqxbM3Lj8NFmPXcpvmF4bUGW233FKSr9CS4pEvFxYgBQgdjspX3c5sWTbT82a6RnncpYHEd7",
  "key5": "33vKhWRhCdZouWW9JiefGQ71PGrb8BukMxRQMTHXHUQgP9VHxYoUzHMhxMTsm3vKbhdVLuKLZjaSGZLt2P8F8MhJ",
  "key6": "4athyjV2mSV344gYwhGrjeLo2wMMd4zfjmSmmvwWXDBkmUDnRh45H4msLjcgsKiMiVi1hJjKKeVfkRhnTxzu2ysx",
  "key7": "KLEGq1oZb3otxEtBsguQ6XqbpEr5JARGqzfmyjgky4ANNPYVZ64iYWsQuZivyFgtus3qVA1WQ4wnvZKzxn34tbA",
  "key8": "3MHCwSoyenjm9K5B2WLBU5N3M3o9j1EAgVTnTTtte5peoZPbDkBYZz9ce3iBDSJ8uzAgpwZ5nNWWYTKP96YQrtyX",
  "key9": "3KoebEhU1tweYueEtc2gqFLZR4GQ6vign18QFmtBH2SUuQELGQLKEvUN3jhV8kFryGmAcaiYNVzrBbZ2ci5hPBSi",
  "key10": "cuRCnFZkKvKSr2E3wp1giPrQsioSZpEDBuYg1ys9XnAi9aCZJKtc8iKVxcNB6nKFMtoqZGmPa12BrvPB7xz5hHS",
  "key11": "4bbjDpwQHfeHhrUBgT41Q69iT2j6upYf4RyeyNsmJXcNochNpAa963oF6DesKHcQAEaXKgZwwU2ZqfAqDQNxdVFe",
  "key12": "4LSxhYZBqwzyaCHsLsrWtzZxVWhW6hUTKi7XDBABEME1vP3mLhRTbZCuxU5DiBFmnZiVVZVJLNEJAN5c4ykY5thW",
  "key13": "61qksN9bkdfeH77BhFqomSvKaVa8weoR5VKwk2btkBnUU3MBVXxmo2x3Aq1vfSrCBtTX7sso2vDCedi257ARKJdn",
  "key14": "5V8g4v1W5qt3q3dz4yG3gj47Ko8jUFbiMmx1XYeKwa2S24jDWwcEKsqYRqMkApkPUiTRuu4W8dCjuQco3yDfUF8u",
  "key15": "5TE1kPV3aaKSK7Vb3FYx3hWVHQxTxRdUZXTSfT8NXjM8g6mGzYes8VGUicoWDTmWZ2aPSRhnSoABR4tyTxhcKGKC",
  "key16": "4d9irhBXBuEAjUEMrQ6wn9yvUYAvKB9Xphzyo641QAXAt2uXxWcpJpTiB711wFpbmP8E3gjQ4jQb8F915GoM8dLt",
  "key17": "398E4hYz6bUQ6qssWEdWCFW5vvQdSYxxUkv1bu6i6xK7NYyRfZaPrmNLJck5UGMWVV6UpqrRyCBrnQ8BZRsBJ5PY",
  "key18": "pE5DTyMuJRRmR6F1veTZt44yd5uxTZKwV896eVHpahrpKwYzrMLUnTDKUTmvfyihn3QXsKo9SbcFCqoD5JmGjqD",
  "key19": "QLr41FtNEAM3fzkZD2tmvJpzyqp57SvyHnsGBuGoyt2FWnsKPD9Ud2iiroS2oDMdLUPgh1rHfMAT3tHcp7d9pDw",
  "key20": "3ug7dKrzEFSkdh6fDbT29cgULdVETZos5baLeQRhQmLozSW1k83zbth3JeXa2vi1yv2J2VxrbDjBNTbXh7tFG6pH",
  "key21": "31JBhGMiJ7oiWfiT79Sp7jxnJr5N9KbCN8XHpvPEGzB6ZtYYxi6KBHAuLRemXgzibozNEC9nxiTv4g7mrqedCC9o",
  "key22": "DjKTtFXFYbkQh4zTSZRaoWwT368zhUHjLRtDhnPhfvQWSRgeibmB66kzNR1pWS2M5TPPFRhU9mJHM5JWaTkq9V6",
  "key23": "4DQyyCcxDT63NAURmVBHgUMbS8TUS7T2iqciZwYVWoELmbFkc1mKE9TqaWq3GDrnaDwErGKqdkJRZKUmUhtoKzc8",
  "key24": "3YU2BxPkVFp27F2qUH1vEWQ1v1f5gp7v6CWJa5HBLMB34W8Da5j8FAG77b2J6XBF9BQf5pjsNqbuf3WSaQ9yZM9P",
  "key25": "4zx3rMHXVUbvekhAQQyhNBDnAJ1h4mkmRFC9iRnxkTwBiW8cRK4Juj6pj2L21HbG6Yc3AzyQwnbVSo32VR97qehf",
  "key26": "5AN9UzUHYz3XYW4QAznYwdfWsDy3ZNCgswnKGNrotorRV6wdrnwroQNzevRgowAwrCBNtowJfca1adgMig6gLUAH",
  "key27": "4Dnt4x5nGYuynaQGxrfWV65KSQhpYsV9e2pS5DR1pqJoBCVZ8atWHLTQgqzvkEXrNUhSPyNikBGepJWeBi9rmqGD",
  "key28": "5x5X8fzED1KHrzRcQn8wiYy2GQ8GwK9kjJQUYa5zrds4NEfeQ35DxSZBX4mqXCnu1m1JzPEbx6BX1yQeoSovJUCY",
  "key29": "2N5aKbXQVxTLKnXd2Psy49yEcJqMEzqXTNM76UfT3a36Zye95ffLdtF28xh8Cd9eyG2o2YfhNRu3ykbnujF3EFqa",
  "key30": "57siMXF5xi8mjDgZ2K5FwXmVcLsAjbVqEpHVbchaRYxAUS15GATqAY8cJhWW89jneEuYby8eLZDAcuEqZFg1iXqh",
  "key31": "2oCTUC3oRNCoqV1b5DLkvZwfYEaC6Ntncm2ACacUYvHhbi8EbXjtQBhkH4FhHKsu7n8BCbhBAQoNRoYoGciz7YmW",
  "key32": "4qRSYohfzBXGnX39PEHHJZ9z78cNjNGFzd65drQTafbFsT5xcjBWyD61ckVzXjfRaPsBY2rUC7RTJzWxzjnqYw5z",
  "key33": "3MftK1ex1xSGgdWAUwgM8MG68dRcyKCTFxX5PsXr47NQpqT93pB3T5K3dYYn7mxP4a3znmbQiUvREHmivZPJcToQ",
  "key34": "4DDzXC1CnKd5KRJVhDNhLng289rsesWN58KUEqAnN2sHJcQmFxEHCDJ9ZKkTGG2rMbyJyC5X5uqut6LgFWZgAtrR",
  "key35": "4517BtP9QhgkWkTFBi5Q46f7cHfDj7fnVjGwoP1kL4PZqtTeAoZW1Z48jxWJSDqgPVaKNKBcN6Q4TYYSd89bsh6S",
  "key36": "Kq9Hx63Ee1M6LxatAKMFAoCAXPeCfzjtLcDboE7BFUmEjLfkhUSm3Vbp8H9NfA7PEy8cyb7aKhyLfVDLX8DaARZ",
  "key37": "3L8iDJGfXNqGhnYu8jt1e8883kEyuPJn5YAiEczMUnFj6tpB58Eh4tVEgAiwMBTrjcDbZcJfk3TW8CeV6NC5HRgR",
  "key38": "2zthqxmfD6xfEf7BHZuf1EVc9Gu9nJFV5Fts2JHcM2snxa7LNiQDXMKhuUXFhHCpzJj7dwrTwPkkiM6dP1s1Pk6S",
  "key39": "2gfq9n3VE26N8NjucBq5NMBLjqw1dr1nxdHMfWRD94HRuEfFjs8Gnu5YbYFHD3aaUajEBrbk7yiEZtsZcTjqzdAg",
  "key40": "3W5UGrxXkDfDv7ZTdEYXRcg2h4PNW7ofAmYaZFqsUEfMjXH7ddEjdH2RVrngLPDDVYFik9eNgZ4xA3Lk8DFYVwpi",
  "key41": "3pUaY9apxMsoQAV26xg83r9cxMY6yWapYkfi2nCbMP5jSxz3ovcVgDNAJj6WGzHbxih3WhYont4uTPrXAxm7C6Cu",
  "key42": "MnVrgS4Lkzbt7Z5g9M5tfMkNwo2bCdEvuLLP9zJDQK55TtsCgra5gPUoHiD2HiBfiPzzJRLdKh29e2wpGjd8N4P",
  "key43": "48HReTMvyX65NQJW2XF94GAGaj5VDAdC6YGKeSszHo3Nx5MEdghY4ZuuFkVEFymH2SvvHvsAAQCaw4JSTcXyw5sX",
  "key44": "5S3XutEyGHihvC7k38sGMbYmyC5QxJ8AndPv29zYpomQ4kAPWtnBDcV9vJMu5D5uxhKZPMx4D66yhZeJU4NdqCfW",
  "key45": "SjFtukNry5b2JwE4uDBUgZKfTonz289d9cLZ3tKLA1pDb34D1pXfHiJHcz1bnP8LuVGeeFD9fvbZGpHm5xf1vFL",
  "key46": "aDLY3QUaffWf2tiH5cHf5862gocckM47LMveif47c5Z9chMx9EUfWqeAE9wRFvsJBDBhDuXuUaz6qUmHp2rC9LY",
  "key47": "4nuXsrCAzFZy4nGNo9H7KJFcpk5RFvaziMch5VXBkBfAT2nL4ssmYeYL7nAqZLPcF9mWPBxGr7HVNtrd9goaXs4A",
  "key48": "3UMt9HDZphQVxp8fKiTLHvjsxJhwsFkRXHgTc7rD1syfZQGSJyPmnnWgaB3E2S2XCrLK6Qz1iNZg9VqsgEFnzJaG",
  "key49": "5m77vsshAux6thiJbh1PtiV2gyE2uU6DuLyf49bHmFtSYeMu4epX2geHe3BwQ2qebtPPvKBmcv5LHM2DCMPiBGjy"
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
