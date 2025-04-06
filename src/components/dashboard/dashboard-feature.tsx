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
    "4XSaFx4PU3WxipwvDWcRrtUVqiamxGiRpo7pTn1mqqDVgD7kBc9367yjuLSKh6Ko8kyqLHcRVX2e8PNV2c8KzYiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhv3BRDpYpTYkQne62TcF88ePTLozgMirDqFvRv7RwxLPbbcEJn7kDeBKFmkAHbundouUUrgvGzuGLWoPYktu9T",
  "key1": "2zD6pK3gEmZt8bobEhkYeJDzv1W1ngewNDE6Hmhm5eAWnnCcrBQTdogHY3HZKyHbXLV4kAe1sTXjCLBeiKJT3gme",
  "key2": "2eXo8xsrE6HFwFjgA5Jh1U6GUrM8kQXNwjcy8oR1W9eed4NpjQ2agZLbW2yaCv3rpT9YEJC3X7WGqTE3hzzo937X",
  "key3": "4dnRMctdN6NrYXqKtYMD2ErsazkSYCPdVsdQQNiNuNDtZPx1ZwRZb2T9rWSgsZSGxiFty5rVGLBtRUDy8LXEnMuz",
  "key4": "pXLfzPt7GM893sPQwG3UCXXikJyg4a6gHk7vLP7qWnBeCnfyHGDJDVFN5Y8vQ8nKKGkCqHPSwYoAvrvuowUrAFM",
  "key5": "3kSuZEWeDtCgfznc4GDfo2jrWjQmjheF5vtxMEuvvnuxE5LCvkq4P562jhUwMWPQNUxqQPR2xbmcdRvZptHRZ57D",
  "key6": "4B9131ZFYRV5NddJzLyeJhv85F1zobqRMVYGbZs9So53wU5Y8uFCupiZ3Ra2XzmmtTp6Df65LDXVr7CwjRBnXwQq",
  "key7": "4KJpArXebP7ggfQmkNRcyLAQkC9H9tdT2aefLMcaNinQCGGPNvULtnP9y9fSXPbFkrYCm8SHhQDnyn8hm6zaVmvx",
  "key8": "44tVwEDh1fpLidUtB7VroMCQ9fnmN9o4p9VpnVZWhLmxgmu6kUi1XHCgsyQxKxNpP5qTBkqLjq7F4H51p4JGSQSY",
  "key9": "2ojxEA6XDbxErQo1tKx581zhGE4jeXoCqWsLwxzY61VTHQT82WMcR8dnd5ks4CLJyxdgbsaRpKjoK8MJWCdnJQBq",
  "key10": "36xxKvyLf5Y7iNqAGVQ4xVyDzvXXCEPwyAJGdy5yxRFE8drscyyBzm4ULyCJMXjGKndfB3oDtogJZVNMQWR2oBN8",
  "key11": "33ZW7bJaGdsJbBmBeqAKFbBEnjjwfLw9kadxs7KgcHW4Vd9NnBaU3c2o3GxvLqZDYfqytYzr8fLuWERN1tXu3nr4",
  "key12": "2DuF9zEqno3rnCoixeASrm71JnWo6ZTgoLjbWLqJ5G4KGJFLAmbJLsdqDBPK5PCT55FxCWNfUGMUgmDoA2bCFT9o",
  "key13": "2EkSNSAwbEhAhWznPu3N9iwbU8tYqCdizMFFovacPmNxNyHFgzvshdBi1ueo8xbRXCkTuG7UEHg944xdy4XYGyRP",
  "key14": "2JGUUvk1dJipeHQRJkuUoGSWiq1M576GVovu5ZsT9zsBh363qUBuvPcfWzkCSENXzaT6WFfiin9jEXSSVM8uhvbq",
  "key15": "52scrSAkJchBE55zmE7HTFP6ZnFqfH2dDa9YgQ5sDE5gGX8KbkyWKxEgqDDHnPAjzBDByrMsANAWqwJWGozXfe5Y",
  "key16": "3NK3nraLkecZZnRnTsS5GfEv4V9q21UPnRtQwEMzwnaq6ovRhSSAFFgj3SqktQ5t4rpDfLbcS9wUzvkhAk6NPXWf",
  "key17": "U9gVpKrbatD8XNv2dBx7ujnj2jG9fy4SnP9BfCYWcUTE3tbnu39xjjek9o6vLrC4Dp15vAsZyzJ1KchqafDmNo4",
  "key18": "4M585grdydERzZ9utT3tYLNCmNnxqmCni4AUHa6rYuGxQnNjA7mmBLkU3TCkMZbP1dThekVyKNgQY1YTfr6gBDXK",
  "key19": "w4mNCyVSVEfUUp8Qj2sHtMDvGPNvzQRWdEFJwphfNorgESAyuvEoxqNL7PDdts1GA2g6Mn4UBBXa8QHdhddB277",
  "key20": "3YWCUmCGn9gdPXweKBdpWKagiCkWuSjTZHUDryanfJyzEaJvLcBFdVpz4CFmk3uU4BJSyXpyvTDNZZV1oksunD8D",
  "key21": "31wAQpSQWM6DchBSPGZzQCNn49cwQ9uU1hXEE4vrz9j5KDfsBKDfv2gnHkJYoggUUrycqFGi8yojNx4fVehxckXt",
  "key22": "523N6akWmmELK5UEVh3LGW7XCYJq9fiQQyrSThr4itj3W3escvpbzUKEJdVrcuLb62KTJ1vgnw8oGEtFhRnP9H92",
  "key23": "4oeBbspMvmTBU7N5Qcr3sQZzNHxhw4fcYmveDNN1gtEos1WMtBtou34AbbsEaYbgfSpgqumu3XfskzMfida4BqD9",
  "key24": "5ag49cKTi1iFpRQcqAVBPMW7rXvvRzqTyQZ54NDd5cdrhm7JCrH4XN6xbki69N6ik2nRsJvUzMTqKdwvwxtVCMPv",
  "key25": "4Xy9pFUy2pS8wttPBqp8coG263zNG4Lajocf4wQE6JSgUZb55mXXk3QJNbesWF4qQEsHUbGHuQWeYiaXMfKztwhR",
  "key26": "3H5taieQKXX4tGgerHeHH2GecBNUQHwpj5MUhaNTQNJcMBePdePDs4RcHF3MAScSmboiq1YfD24cJzJUSyXZSwm6",
  "key27": "5QqVWbujmSqc7u4S2sPRscDF3AHt7ixV5qgr1EJ33UvKYKzU39AFMy6e17NF5Z4Cwv9JPquUw6RTBXXebQYjmWv1",
  "key28": "5EXcHqptJ23y5YJT1tDYst7etcJM8NRt6AypRL5aNusqBAgPgABd1dzAvZzaKgxbGWboUjQk9qsh2Yy3DMNmj7Ex",
  "key29": "3am2Lte9kvXDhE7VAVfuh135VJj1QEToy1vCvNJtUNMZnv3Fb3AcnBCUGEZriJMF17aq3XQ69TEKbHjcJMjbUd4Z",
  "key30": "5hoxWW8PV9UUAapvWc4CUpV2p2gSP3ZgqayePEGbfVZqFfxLMy6WGGHrhoEdTPCB6nUs2Q9Cz7fiMtqQxG6V6SGF",
  "key31": "2FZKz5PBaKPMkJEiDmWmCq24cXeFQEs5sQAMhS3nrWX4sVJxNqX5WAPhZjjFPvAfprgya2vumuVmPdraWfsSbyzC",
  "key32": "3eDirNpF5V5neMEvxzhRn5cjT2PHJnYAp3oYogDVDARQkQPzimS7R3dfEdPLhwPm3ZxkUsbHpXYnptR633jHxS8p",
  "key33": "21ft7gBj2NB3X4Rjd33GQaPMLapufDq2uKtj3fnVKEkDP2SpEuqfpUKTz9LQSsx7vP59J6CRD8iCvBYfLhUzUvcZ",
  "key34": "2QJcBNCngtFnjbsM55bRT3t3CpGNnkLSvu1gTKEE2KsXifYMUjYV7nitFaj7Ko2gPiwoXS4u93woWecMNa8hbQhL",
  "key35": "2T9BYw1LG1bmm5aDp9dmtkYgwpy2hZXpE398R3z8bDmMnoeZAcKe2tABFt4hYeG2UoM36vqAcoBvLdHZzucQoZHC",
  "key36": "bbrruo9tx9wCbQMymwYtsArL3jFytbrbczMRn63dLn3wSDbq4v5vWF48vqawnea6EVfV1h7pLaRFtJUUtFjHgs8",
  "key37": "48SQKdrqs3Fruu94KdHF61vgxc9a5nVVgyD3e5XF5ptJ3HrdbtM7ktpw8kw7ddXKkCaEe35WAVVBkYHYVeAkcynJ",
  "key38": "2BBB4JKtLHeYY3JFhPvefp9GKgPqSDvUuCn8hK5TZuYxfWPsUJkZF72KLJrosMzs7yZu6xR8pyK4ZWeFXA5BWLMg",
  "key39": "2RDG2DZhNE3JqdtE5CNrYpGfx9GKPeZXtbf32fYBcobbozJeYWfAyQwewDL5za8N4ZwpxwGcNyNz28gQD5rHP6ZB",
  "key40": "3vZtTUJb5WCvK4okb4kowAWwQNpYR1X6YYaKhGb8XHcGCxVgv6D4AMUvWYGX9TiidRFRszeYzjf868kWngML53fg",
  "key41": "4DnFbYEU1n8gbVnfVA2HepLAy9To65WKK4S3vXZBUb15yQXdjngUHTUkcHnecuHnzik3d9Fg92LP54x2afNuXGfD",
  "key42": "61btcpW8raTWyaebtttGBS7nx8zHcxLychWn6dEq6KJSFaZuKjxyyDK1C8ALpyY9EirZeqRyyZ9KKe4boqc7vVfK",
  "key43": "45QDbFFrPwrxFfdmz2YH2LT2ZxF2rxSU26FSbYgxPTxmBBMvLm4Cg8CaiMyTnBA1Uyk3u1mFyBHZQNx47dyWhDTV"
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
