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
    "5DGK7txS3Zyqz7Tuhj756AX1KrBhKHm3LRZDTdnjH8jA8SpC7yun6L2eWebGJuw8D5Nvd9kPqMRkUe4qodjsvcoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PciMMnfB2zphSdhuV2QN8qNMxWqoeDq6sKKQbhFs5KUgRF1h2R35usQTCzk3UDXh2FJUBNtohYyQSZNc2qh3LV8",
  "key1": "2kcWD2VoAWB87bbCKtC2jf72FDGZz1w8uNknf49gWxLKn6GwRBy6QjKZEaAivKbEQ6SyzRQGRSCCWZ9zX6Kxh6G2",
  "key2": "aiZBuaZzhxpx8ijnjwnvAyzKsDkvsRXpLwT35vKDhNRibWjVjXFo6RAm3Vj4dxCRYShzqpia2s5ZeTsMBReeCzp",
  "key3": "5qCeVhQuVJ4uS1VzNjPz8isP4Ha64GPB4aV8d5PcPuWHW15asjhqTWnLhL4aveNZ7X5BQGWV6X8hNyE2gdQ83Wb8",
  "key4": "5G9HgLrXypJGQrL4tdfYi5vnTjMdpuJGYuY4G9AgLJLWZFe4wsQQ2vVC7Dk4ReeqW5mU39pkLhbi2tnsrKr2AWyQ",
  "key5": "5MP4o4ipBmTaxWmPRczSPG4NzFMvDvjyeeagfDzgbEaS6BhN9vkBG5taiQ2v75KqPZXDRksNjmRMPtAooTYKKNU7",
  "key6": "3KEeqqvUigicguVvyVoPKZJzGta21LXgQye3DpWin1npVhXyqV2PuVZA3jLJVtdnQnHLdyJKm84BkF5utKqXY462",
  "key7": "mD9AjvprMyqAF62pmiA26WALD9PCdg84GabfQ7mNJn3VDtcPcXs6GNbKGHVjXnGnGQQFpyJnjX89o8xobX1JmNY",
  "key8": "qfQNe3QhjV5jhFDj85XwMEfC7EwgxagBAxFJNSks8eSSaw6SwAoGLssotjuwPGUDD3NTyEbf8sGu8oKqHy8q1Ff",
  "key9": "4qZdvDR5nngXrLmnv2mttwVBDUBJTAhy4NW3mNFJ8sUCo55rMJME3sRKebtqJL2CM5Rik4ZWgdvgeVX5tH2eutU1",
  "key10": "251DrS3vxwYSwFi63e8Qj59xsF4oM3WncD4Vaa2LBxiojqNhKQMRLC6wXs3KCwMrPntKyzg4ZtGYaxJ2UudAeaBS",
  "key11": "42bWJc2LoinmhNvraEYEH7pmDqZaX1wpL67Rv4Xq488xDhUWCeb3Av3o6jf1tTxCvWKuwKSy3ZXcDMMc6SxVMw35",
  "key12": "3HCSFRj5aLmJwKprs3fty4EknJzWh2q7z48oSQsiG3NamWM9U5w7camkmamvsVRxHAZ9zysagsfBCDWSgyevGYC",
  "key13": "5KmX45Y7oF25xv7GVG6Drty3Bs85YTQJS4Jtm2utiNt7koYwgXon1YFQ3gd85Arvs6p3kdvPaDA5KrdkzVRjYtFH",
  "key14": "4ZHWeV9NmaSEpxJPgDFtvxjry8eKH2bs2n4FShhiGDeb9jsWD29nUtsZoXeQTgsNnRHw6cnG5sB52Y2cBgtC1MN5",
  "key15": "5h2oqr5xJPmoLnMruF45wfu3kHvMVtmiE1KRdEEaVTfdiuCWAZkkQMzRmoxDQLtJijBqXP2tMMY8vTZg9Adn8hBR",
  "key16": "2kPaFUGD1BtK3aMKeXNMQDr1i2852EemnHEkz2u8YLp1Dgmg5VrnwkTHvjNEPZTg3rEa3PJmnjPFGErUUGAHP5AP",
  "key17": "5ze3vczhFk8gy4whDCxBq4LcoNpfx7B7fr129bmc2eazAJs44vhTRc6GLsyEgN5sXryhRNaNkC7khZ3tUMo4sF9f",
  "key18": "21KHEdEH1XkzTo3cwKup566DxmH6pJEC2xi8Y7S11RQLEUBo2ExcNADUDPZniYJbevXZEkriWHXKBbXxGd153DGf",
  "key19": "4L8EmvBUkadbFB7vHGpHaT5HUdQwhAAVY6orHLaN9gaAuKDDUxtbrKQ4mwWcv3W1EUE24oKkiTkmozbdyg6U4q3p",
  "key20": "66WeLpC7N2vDGNxDSPxbzRJs4RZVa8Y2miTHkyYmocEDRLhFnQ8WvtLWP61XerwbrwfBU1EvfaNXkoehtD6bQfzj",
  "key21": "2wxN3E5aT5W67inR6fZnYYu9UKwHGP5uGkxSoa2BBXFMmTb3Unp4KUkSPZuxy9emoTo1mwx8yYBC3xZePpqTcSBf",
  "key22": "5tSEBekC1fwLJbPVH3WYuBLZ82npe1UhRbTh81p216pFyXvQV7QCLdQtjHe152CJmuo4wpcd1191fgPBfP1Zy4py",
  "key23": "3CAE6d6NUgktfNu6orah7cDUXuCxYk4zaja7CgTWC68ZFtwTpGfPA6FFAwkBRnDBHZ8sodULDCjmsfbLY8TQ3hq8",
  "key24": "YReiTYzqnMV246eYQFfqP7oFUvTCT2Z51uPepJE7XyMcM7TyYoaCnPxPoohucFwyPGSKmJft5B73srTJAcFWTNd",
  "key25": "2yRScctmP8kztxrchuf61JBWgBWxLqviHYD1quznZeVC6f9T4XBMSXPTS7s9xmmEigEBji2nLZcWsyD2V2BNqjby",
  "key26": "2iZG7pVGoBR5aN1eYQPmTyGM1Pu4Pwf71hs93g9KerwAU5LViwxp99Bjr5rCHUqJwLMC7KWRo98fYtVwWcTSt58",
  "key27": "66mMcr7zyuxh1YnWTM3g6sk97A37KwwwdDpsR2gqdZxCpvfMtfh9bHoja9WAkvgYhYBVD2Gdfv22tbKW3mbKdBcr",
  "key28": "i3X6JMjWpLzRYPvnBjKSGFsh97B7rofmZYY1A7bE4KgSb2BYP82QMhC1Y5q2Syn7oSnftREsv3Udp93isjvvzXU",
  "key29": "5PFt75jyuyqbwLV9K7NW5JaeCFJSrge2HEwSZR6PjLxg3TqioYnoMJwDkuDfBdMcw7CMFgvK5SmDyvkw2oeHHk4V",
  "key30": "5AUJqv9kyF4iLnjN8nCzhkp36vuZ6wZsJ2e8WgLRhnEg7PSuoWERfUpszUqTy9GqvP5Bh1sCEJLzsMH9tiSxr7pr",
  "key31": "XeYiLih2xurkdHPDHHSBvyfTKskTogCmAKKSAPhHaZCQVJxQnzQG7ptF96J7qrZKVfyJA53h4o1W6KPAHaY5NaK",
  "key32": "3iWPKcipTkDP6n91314BNix8QeLSJBFGytYyTUiaVUGvbE5Fn3CdGzvb72ufHaTPC84E4omwxvnxmNCh92xkJ3B3",
  "key33": "2GAunsy2EJbBsEpSchcwiB8d4ZFxofVAdDaDrH779nsXS8qW7fpANxnP7hq4j6b5JEmaRbsWQirMZkFiLrZBVCFs",
  "key34": "2SXoasLXfCS4BHwdWjWWs4oVKjuxXpXtngroLAWCwxyUESM9KgiVzndVqNMw314HjbAPxpf6KCfWe9W4sgmVH9Jh",
  "key35": "WvYywDySrnu9wkZ7E58CFYM7Q1HDmmE7y1HSPLdDcuZP3DcSnTdcoWQGJnRm96ADpJ2SZdHK5NV7UJbp3YERq94",
  "key36": "3T6BCUFVtn1nknijF3KAXJxLGZxXiroQft7Ew3XaQzJwkSVGGHgY8qs7zZEQDTTw3J7naEWUs2SPTwJna9onQz7d",
  "key37": "WjeD8KpzCtj6DqtZdZVfdbhUUVYjxb8WRHC2Xb1z7cXhJfgzXm5AGcU7SYYQV38ZKjEG5rbveuQBhgchxNy8e7Y",
  "key38": "Y41y987qyH2gsaXoUhwGmWUnxrehiDSGsJrg8H2gAeYQ2LZPNVASMk4JswGbJtFBHZzZotoB1Zw9vh7af8JarEC",
  "key39": "2xQ5oPesedaC25qphnzHRXmsMpped2YVxBgdFt96R6PcznW7qUy9uZwKHg9LWnzhK1LDawkmLVyobewjxngFmzav",
  "key40": "DzhryU8HzgeGDsU7WwruLEGt7ufi995JdUYyCgtL4hHS6mLLgV8iagX4zLBHtJTzNmj5wUL2YGw9QgKcYF1GC2S",
  "key41": "4SzvDMSotR1RpMvNodgQGRbZX8VsWhXaWuGzjfjCEJqk5TgiR81NoHznZYxCVWmBk1MMZMHiSqTrpZ5SFxiCfdVH",
  "key42": "39bMLH7VU73pTxzRQvLWZByhUGapjFkpwdP4ZQockm3WMjjzyGwLteZmQ6DV9dbQHUbXSNmkKnM1Tc8XCLkkfAds",
  "key43": "3BGv4Qm6pgES26RfR5ZMcexPBdm1bTwJqn7r7zW9pPLxpr5Ro3Jc9ZzY329UiRNLMw4W2TDWvRWEEMmeRJxNqTY1",
  "key44": "2LEk1QP4bcHU8PE3WGSaxtGXj8XauZ3roZJpPQU3jnQkf75vVfSy3EZ8iyggNjo3p29K4bZjZJhGXgW6u9VYNLB5",
  "key45": "2ZJH1kAEekyb4aPw1ShCeAKqK6YW6M4cqt4KtZmKqixmfMjNX4jE1LLGzkXNk5zk1h4RaYSmUpdghTEAGKibWrFA",
  "key46": "5Vc5XhifevTudsXHhsAXCUi4fuAheWomb2wa7A5jkgUZUDwg9eUm2bfMaiNmMjXhAaCTWWkE3sFmuzKd8kwxArEM",
  "key47": "f15uTHSTjzKLvjsYtnzUXeBwmQ1bsQ6snciHmeRRAt8uYzTb5B9WfBCYYfa2GBX3gCzy8jSKUFbXuCKPJmyWjkN"
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
