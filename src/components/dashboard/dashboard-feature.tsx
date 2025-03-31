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
    "326U3nHA7onMmD9zeHC8sCbcubsLqrWbd7nQUDxK4AmKaSjJCM5swW5HgfWHXcpkotMg6uVAetBhLe1uGo9euctW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epX6Xgi1NGhGgaC8NbQiw5RPvyhUsGmLhbc9oifpiN35Ws2Vegjdwu1FFE3h5F4aneeZXXUasrA5covWnWEsDFd",
  "key1": "56VvwTfY1JVRVUYCcJHF3nnfddQDvdZgNZaaUimDz9F3wjP2df1qPcpZdvZdreQdyfZBNd3pwpuwkURo4DEirU2Q",
  "key2": "5fgcQwxdFWFAnzm2PZ7tdVxPCbCeXChuJYpKCzasqNyN3Dbpsinzs5B9894UXKzQrvqwkAPXKTfVH2DxkJzxGWHy",
  "key3": "32AHHcrX52dxajUY8PFE2Kr6BioqD6R6ejQV2qu6aTUJNqXVzBjn2x1YXKe4TUriF2Unjxuj9anHjS39pWnbUgaL",
  "key4": "5L4FQecT4RkKjJEUhCg2BFNhS9rKk1tHe3MkqsedBH2QyCEkRqyA9gpjWusaQp4J8P6Y5po9W3ayqU4P8bMy55qy",
  "key5": "jGyssvYodozf5pt8Tgx6x64Ci52i14HVJ7ZeAxGaugryGLGYRXYdS6V87UyriXsk7Wqb2iA3fYwMRZCWy2n2rEz",
  "key6": "2BNGLHafBXoVaHGmYAsSAt8FmsikobpfyEp5AaGSeD6nr3NHDxwLcgqt6Rhsjx5jkuNufKQZn17vX1LKiXK68EeN",
  "key7": "2ydHPP5fsMkPnBxrqPNtsYDSA5kTCPGVyruAtRYSWDoALxjYsEPbb9wumYYNJogCkuZN4WJqryC3ZZ3zkt2DbjVY",
  "key8": "B5VjygkcZiexP7QRyVmb6im65wfbR8rsviKujTqwtDKxq8z65kmMzhXgokwq7tXPS4fW2N2bVMnWfaBUM3yNbrK",
  "key9": "dUpCdHL8n2EZYcPiGyRoN6LrNQpwoJMNkRnnNdj3U8JP1YhmRKbpWdK9NyoDESCWzpts3M8auK33qybGnXgbCfd",
  "key10": "2bLK528FxUmL5omKgu8aLTpBmkajji2QtMZyKVMrcEHevxLbjzFaTmM3zrtP14hycFqsLHNaptZjKEGArb5uWbHG",
  "key11": "2dda9KFkCHY4wwQpbUbYxyFMYRhLQAg9uQ4azaqVceToNGugsq1yEHditySVjDotyhRzDXJgMdNA4xewofKUQrMe",
  "key12": "3KcTjj4K7LVtyZ7Cu1gY8nWUAiKBP27p4Y4x2DSYNmkwa53fBy7FEBGYECwocJVhNzYBoV5rKEsGdkdgcHw46HF8",
  "key13": "5HSHd54CvHDRzdp6xH42Yo8R3hoGFZoK6GbciaGTiUcY3fQXQpm47XYDxkEWbPMb2di2ZqbYpSZema6gUbPYxhms",
  "key14": "4AgmY8tgeTfxZmWWrDzykp3wXqDhVcb5LcX3g1xp9VKVfuj8qrjJUGPsLcYewvmnjLdnEP6QXLCeWbttA7zk9A9x",
  "key15": "4WMC45fbzq3Pm8iC29uExqYxpkrCQHwSF5bjcLPrcXhJywpckQFAQa5gtaMjDd8pfsyMgxZaNQra2nVcvwTgvYPi",
  "key16": "3j5Z6WFuqu21Vp9NR3LHAZ2XMJpynMZWNMjn9UFhPRuKvdjMxdLho1PmhaCFHh66paMHyj7F4m3axi7299ypjwCy",
  "key17": "3wkSkPgqUCBtPvarPRm4cSQ7DpKCpkRpuPfLFUNGdwQHngB6J3HaZds4C2RnvbaZKujYLH5x7keVKe5U3iiTpUFS",
  "key18": "4bbY8eDd3tRcmoBwj9wkpRTzpt78VSUjCEUqqNLdetaX5JuRHquw1VBWX78EkvE4WeVcMoB62nn8bjokcQfAkdxQ",
  "key19": "tPgZkyE9tKmC2PYeWG3bsFKPch8FjPuNoNAgZ8ZuM1QKH56fuHQrSL3K8D9ZMZ1cv7mN9GTMKMobAYkBJFhsdvh",
  "key20": "2iAr4raZZqvqa4DSNmNFsZstDvAnKgHABftAaLAUcTLcX4j2rxntRyFdhjmQC2ec8GhnDMtnL2J6Nu4kXq14uJ5C",
  "key21": "231JWquT6KsxaGKvkgkaCkpTUiC4wzg66yc91SEtu9UzjSd2crknYTjNAEtQ6opYGfYGKBMx5e9E88v4jRcHv6L6",
  "key22": "4ckwxNjoM6z6RvYbMUgGHFhLLiGj5SoMuyUFFpMzQFRMDRagCp81RyD7xtXXMdCQ75BsiBG2BVphCgYkhHxhnjJd",
  "key23": "35SFpHt8iGXZHjTV7BWszRMCZ6fsrMinyHtB7Uv3Eo5mcQUzX23cBA6v8DEw62UWqX7dN6RJzUUUGPsK1W5Ly8LT",
  "key24": "2LaUFpdoonz8PJqLuGCVWiGzKKaqe1tfFwtt2QkD6tRVGNfAEsJAzPKGHi7iM59QBP5wWCEbyzfP9BuwoXKiGuPF",
  "key25": "4iUZ8mpbYadaXXuJrPDSJBSea68aawkvKJPF4YfAgma6NQtfQ9MwVzpETJBavhpuqM778Gbn1iWYzwjFnq6t7GST",
  "key26": "5upSWDhhoxvdFGVU1diKaBZRS3Wi8V8SxdmEhSQYQYjpWnitWq333a2KGCa9dYpydNgKcAtVHcAtK9inwwg9FGaA",
  "key27": "7zSReVeNLg1J4CiyehgGtTW9rJ9kccr8g7nc5hEw9ugy887ozzvbEY1nN8Kw2nSLrtXWn27n63MaLY1EVNPhesA",
  "key28": "2Pmc8uKXbJiiu4aPWhP6bmo8KysP6UrdoNy6C1L3Mgrz4v1gb2tmPR1gkXktXwHTAQUoPGgpATFtgqvGut166nuy",
  "key29": "5Nmk3eW1w65Y7XTRTkCdHVdNLKEK4oxSBPdg8G1WjL5WrzuydNv6Q8x9WBqqErTMuJM4NLWnSA3N2YK9nKi9mqte",
  "key30": "7DVVPUE5HMbAq9CnXZYQMdpkjDA48fZjw1N35xmVGjE8hAszECQTLnnXWUwKq8nbmkXqHWuegTFzUsjZvYoTaJG",
  "key31": "N6NA9SWkgdQ9eWsgPq1kiX2THeKVFfPhbHXEAPHKAcgqMsivgp9j2GDkKJ7yWsoy6MKq1ujXvxyMNaGWt8oW9Zo",
  "key32": "61trumgPfthEzxiEyZQvk1S2KixdcYiRCo511XgyfQjJbjkE8mGicEJjbNk9zRKi1omT8ofSzL9sLrbbfzMvSRMP",
  "key33": "5w3V8iStYagPGpShekLgFWsfTZ1pcrg21PWjqT6A2yE4tP9kBM5bMSfPAcMdexyFRjYU9v4N23BfMHw44CYRLv7f",
  "key34": "55atQYXpXYFciWRF5ipU13eiNMQXTUT68oJSoJpGEVY3fZ1nPAxjLKNCrnBFE7nrq6bh6aUpp7zyB86woQUMAvMp",
  "key35": "4HGJNxaq4Lc82x63F1J2gxXqnrtX6smhFgmnNUDNE9CeLFwsgUNveMTxnVGMUE7xbCKRubhz5oYCY6bff8bUZ51v",
  "key36": "2q9kX9bNeWtYMsxfX4xuVeoweBu8v5p3bqRRiUaqxKbivMoKinkMAemE9B6PyTeoutxE1nXXqNKKbXPp3iYYRWnn",
  "key37": "2jTX1iWnGhb8SGyND7fgRc55wJkvbMEwKeUY694niPjYfNRgRZG4zPwk5NUpDQCLydrQv5aYDg2w53WJtLcpimjv",
  "key38": "2K6k7xLnQ1xqBdS8Ebgk7STDhTjBaivmS5pideUZdU7if38X5aFVnuunWGJeqMHn5cTDq1ieoQX8WmLiAsDDTgsr"
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
