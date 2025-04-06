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
    "3jwmJVHRTtygtjmXBiVu6stkiBKBZsCzNL5pgtpt3gzo3wT5mnwHBVzvV5g1hZQGSEABmPKwwofAobsw49J9iNPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2XtGbbRqinVCioiGvHjyBXFjxrGFNTHMoLezPWvKWHEiT96DCMm1wwKrveE2FwcTtjYS5AdXzqSpuW2GQfgEdr",
  "key1": "2tLgxM1zAT6TsbZAnJcaJWeZ7vs7TmkYMnyrMUNR888GqEcJXkzHhHwhGRjirYpPvBSvi67k9UU91sXwjpwG2L9B",
  "key2": "2Yg9m46d4LJ2GiuzUnQBmb98ycW4fbdLpvK9xzMEK1E2ThPXxkdftbaf2kGaeET4ZiV5wri8Uh3kL6ZarC8K3xXq",
  "key3": "485LbAfH23Vb3ds1NZYmB8Qki9HNSoUyAy7UbV59udxvFaVAvGDmedEozyuyVgstbgMxWVD76skBgSKLBZvJyXx9",
  "key4": "5eGepW2Ss3JsQnoyNpVTLxnDm2BxqEVsPUjMwAULom61pX75KaVFib8sfNoyYey6tQuhCRJtCgD257fukXgePEBm",
  "key5": "4CwfJZADzGzio84NMV7WXpGY6DQZWTFLmN2MoNb8oqPGWgWboXupv8tm5JUovDTwJdcR96NMr7RcQg3YSvTGhtVc",
  "key6": "61aq5skuEZdUUwnmGDQs71PxVXDT7MxiY5S674nMR4LjRudegG7dmBxm6PcJDXYuurJNqB4AcSugYxjuZo4vGFyV",
  "key7": "5MHRU232j5UzjBsjVBWrRbsEoUhDUHjbQcBLe7X3vM2zBJczeBvfL6GnBbP7oZe5uzCZAZmz9RPvLeZeneLa3bJN",
  "key8": "nVLTzbJHLSot4ESM4td6w6NsVDLRLkDKsYmyx9oWa1KLemJxnLmwMeQn1b9J57Bn5aF9LDyTYt2TpdqadesSw1y",
  "key9": "2cjsTm3HDGBNhCiqHsr4UdET13NCoqzfjCMC3DqXRYTss5HTv6egG3wJQtACdS1NQVoiJfRaPH3LNVMBPj22wjs",
  "key10": "HJrzdn2Hsw7HRSTgRQX3VQcdmvLRW4JUpcJr3TH9cbTbub7Qqe7r37vdMBoCEkaVc27TBKMcAeAEmGWgnFD7ZNX",
  "key11": "2ZdT67kntgR74XVc2q7TJVRhU3N5uhczDHaP2vYx7icUDePjSauSRKQSZRybqdjCqpdvCW61pbqAtKSp6D7CdnFq",
  "key12": "VKqEC5wmFj3up3Kc7ioanFemt7cQYMok9QEzTVZDWa6MegRzXTqUviwzrAAKsLVzLGDz5BA8rN94MirNCwmZKpM",
  "key13": "54VGramtCcjRtbnaRnyWtXF5XkKaRZBuYQia5rpAugipH2HSZevZFJAMoi8CeZuoDsuBWHKYxyCRcsZdZ4vf8qLk",
  "key14": "3L3jVzS4KANwCQaErMWL7uV7CuoY5cFzUJZunwEHXpuF5MAuY9w962wTmeHpHNuFu2RwXV67u1FVCFZujh5ykCCG",
  "key15": "4HuxEUjiSYDjTdD6izN9SMyMV151xzU8fDGVReDeRViPodPQo83tVjxQB6SuKGkQHfT5N8646iNHZ6cEgYpsV9K3",
  "key16": "3vkHYAUQe9vKo6RHW1G4tSUDgfVnZamLjVYaHkMwTMQVUpFoVx5cW38MsKkxgS81j5XiLRRLWFwpsiucRMcKGCW2",
  "key17": "4PNbc8yFLS1zH86wrYuh5u5ekwbdkCwErowtfKZwtmsYdjGYzmfRZ8sHPWduiyRUFL1uGUhGU6Wu398s41B5wCQd",
  "key18": "65bke1BauPb2EdFRFfn4uHZWqPsC4UyPPhhiGhaurTu9C5E5UPGeciGMaA1qtTu9tNEYKqfAN1QkSF9sUe8RzLo2",
  "key19": "tUmuR7U6xJrvufRRhmUVSr7F3ogBLb3utuZyv4ZKxwaomAyLhp8CTp2RUFNpovBg8aggBarjGEZ2oxJ2NRNqXcg",
  "key20": "vT5Mu8rswLCsGXNDKTmVzZTJ3AVHD4rV7TPx3xZvUwp3dyRsaqMvkpTCySjWP8NrsZb6SeHYCd3mivocCs66VuF",
  "key21": "4eVVzBBGpkdbWV8B36AmuJkAu28zT6qCWxMzwvWV3omsQ3gPtVsMw6gB9UTYpeWGvj8D2kaeFPJdPAeZRdirSuEx",
  "key22": "4NQRBrrf5AJdqSsKsPJYFatmErMNi6TseKeD4y2p3wq9jB4oGz616HKXNeaqCTsGbYr7MSoXcbNi459MSXZGuWx6",
  "key23": "33G19ars3UPfZ7yoZmUgDJhSJhCKKRr83zL3WMK6B35MDQnRxPNf9PR5qPDW6FCsY5L7vc6PZEPyeQ9asQpFgzmE",
  "key24": "3XkTLNgoGUve1obKGdkfUxKUrYnnjP4CcBmdfNgCwgWMfJVwbX5oaRchT7LyTJsKPVHYkw2zA66KabjTAijapFch",
  "key25": "kUuTChv2AHpgpX7vqSo8QxAba1wykZmhzKFocQPpV5FwYrVeWc2oKiK89qhL4x2NQ341tmnvcHZRwim1rTtAJ34",
  "key26": "2QXRrWZ4pZDYKpR1cpWvdSjbH7tSro1e2693LrpqUwQzecEVGs7M1a3nWWXJSY3VZdVXCBHgmmWaqw23pHMLXuj9",
  "key27": "3VGo1RWmmY462JRj379d1JrHvgmeZRqmZNERrvjKbaWMyik4vA6T2oAMRUN7qfoSgahJWAKAX98FBDmHhrfTkfne",
  "key28": "2JvLQzFS9Cfe2bbnXdhWPEAywabej1D7JZqXfzZr3UEiYAGZiq2qLyVF5KHxJX3kaSuejynCbecL3WbjpThUNbih",
  "key29": "5QYQRRJNck74bqpPASNXqdBmPQxrAX78nbPt1hD6NCqExvjbnkuKr1rCYKXWxoHz46CE6QiJCQRTD3fsLjaucp5m",
  "key30": "4t8Ugdy2PCBbnjfM4jtzXueVcyc2EqBTRjGAHyVFnyoeJonF7Yz2pDvMaw45w2k9EBJGd87qbTYDV4WbYqHXSNpw",
  "key31": "4ejwwXghW8tSftD2T4E5KVhrq8nbnggCHLF8bw7aLx6qSUJrEYVabfivMobGkjKrLmTziUoKDtGDuEYpFiRNbkFk",
  "key32": "59SbtNmQKtsLYTh7krPv7xoY8Z3pNfZmahNJWSvKEoJKzyyoYhAuDwkfPx1t9rHkWAAQYJ898PbJLwSWwoQbLiEK",
  "key33": "2CSwpZ6yoswTjKuaP9JgrsJ3KeZoBgrCfrykKDtwAnwtprLCNm6EK1B1od2n4U4xqQUtD6zesuxqpGMpVutU7wew",
  "key34": "61Ep8RQd62jhXZ6LZEV7qYQ6Fw6Kq6qW3qFjKC5yKzB1ahs7GgVaCUFxQctDXwT7PbdXw7M9PpijLqg4ovVkw1dr",
  "key35": "25jHbb2P6E4gN5MgXfbJnmZSY8MRGgntoSppqa2xtKSX9QGSwzpbsdYuiPyWtjZuX1K28medcryGZqZ72wPH8DqZ",
  "key36": "4suARAaZN3r5kujMjrK1QxGBiKvy7BvXeXMN2irbU3TUQRSvGSXQWUVduVFSN9g76eG5NXoGv2fwZaStjn7AKyhh",
  "key37": "3jXyP5uU4EhpbPjfRVtSXgmWttcCZ2sv1tCnQdZSYXDuPASGhz9RNxnrWJGeDn6hsKxkwTR1EzazbjiPpJrAo7ib",
  "key38": "21Zfxh99TvrkJW37xGVEGVWu1Z6NBgWZn9dBCvZ5NoSvbEtmvSZpnYbRc5yFVnXoJGqvgoMop9TqjHsGbmC1YB6X",
  "key39": "4SogRMoM7yM1Y9eLEXQbojf1FUe4eRRMx2nfaW1sCmNCkRw77FYZhGZ6AV24xm63hST1LtSHLPVhjDnV571rLyK2",
  "key40": "4HQJ1fRqJmpFUetLe8nw7eBKUXDnq1yRAW5sYb2752zGNwcX56Z2tj1FthmCpboPttNHxU45MVZK7V8mLX9wu26s",
  "key41": "4K291LA4i1tDAtZDXvT8Nhcan2pTxY3qLDqdLb4nUKnWZSnXprcAxXfizuHcj591iA3RbYAD6K7iS6zYAUrhphnT",
  "key42": "4FcMvmRuepXLWpYsFQ8WciQt5EfjcXAPHnpwwLD57FrW49Vmn3GX5jSiBkfEsynM1M7Y2Tm8y9g6XDaF9KaXMLz6",
  "key43": "WCaEVx9FExWznyVjo5dB7RwJfT7Jfr6ymwQ6qLXzn35yMGtpfMcquTy5UMGXeEkE5DpppuztyJEpP3dSZdadvxX"
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
