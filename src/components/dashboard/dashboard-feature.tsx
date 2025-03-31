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
    "5wid9XHnqRgtYYsW4e5bnny5rB38RX2Hp23KFZPJ7MdvruV2umeTKcsW2wJJvDqJmSXmntp3VbV4Whfr31aREoro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNHhgEJrTNb1uzAqSzh9p3rEmDgU1k7reNpHL1hbCrvwLsUVVnFdqmtbiH2pdPXzjsyopeRcPrNy9K4pMRTQMbk",
  "key1": "3w7CzhN8qLC4zBkfARnd6vr2j6D5dgEt36YEJsdCXdfWJPJVyEyrAy3hjmM3egSq5cUYpeud64as7Nyh185kq2f2",
  "key2": "4bDZ6sJ9kNpHtcGq3yHwf5g78pDhjQMNvsUNru9HkLd6EzyHexbSTHGnMMNQQt4d2bR3HWbT9FkWho8JwJ7Zwvck",
  "key3": "gAVhUtM6TXcS6Bmn5ipqL2Dnq4jJP2ev4XqqCFHKCVWzqxLwmxZwZc6TkpRm3UpN4UV9aDyBRnzqhBumscvAeCY",
  "key4": "XgWj5nZkURuPZeNxRKVUymX7PuuWeVn3LaQ1vD3coTs6KVBywhsgqYhVscLi9KQWv6wXfq5F9zkepCCkdtTWLSg",
  "key5": "4y1hSLZJLfGNUXx5rjMhX7cR7hQrwbdWpn2VoZBNMsqNMbn6H5PHisFVyB1FAxr22DuaDHbq8fQsZyLMmbuXwaRX",
  "key6": "37NCdG1zoLgQcFqAywaZB5DWWrBCoq8VQm4Htds1KwQWQ8H7MPJPMeKLPAXPeNQDFR4JcQYqFirroBJ22bm9GF7g",
  "key7": "3nsog13ExKoychW8qP2JPL4da8b63hcPCS1MyEmSsiHX57tW2s6wtpnzSBV6AcCARGzda77r4JXVKsKkE7hLSjie",
  "key8": "2Y71ahWDSQ97VaXkNjNmP7qoXEofBkZHpg5mR5VsJ3mXqFySjcX3ywd2QA8tW3HbSvaf4gJeM3KXTt1SnE86oizg",
  "key9": "4FUMDEEEx933vraypZiSCXVKSidcCeLzeS1PBk9jzskjAvbcg1VTyBQYHFzv8AfTkb9J3NfvKSqpjg6xn6Mzc9Gy",
  "key10": "4ME4MbPzjA9zoPLPsUjciALu79qXxKrzjDFwdrcsE1fBnSgNodRwhfmetunXF6StW5hKrrjUZTW83AfGHGmjpTxY",
  "key11": "4cRU6TeQJg5wR1ddx5CPg1Uhv5uF6SPD58VWkADPepgepZqwcYVbFeJTGvckiZnz8SZJACm8gnqtATXZ6tK9Fj1G",
  "key12": "2e6UNyJyQkH3yGcEmUCV2zqbgpNwGERjbHd8MF3o8ysc1XMWSd61XJ5ywhHJmN2XPyTiViT7U1oLyMzbwKF7UaTD",
  "key13": "wxYGkcK56aTj3BtEbgHrrrurYmHsLwobnKqTYJYVezT67odMJwSZs28MPoX6QE2pXriiFrwyp5kiTuFeJP2LB4W",
  "key14": "2BXbzS7JpLChvoex8kUqGNXrYe4mmjQswz2RXBWC8R6yX8cqenXbc4ig9wYzggm7c9hydR6pztXa4TnXwrCUfPQv",
  "key15": "3sZnRxpQF7cLZyfcwqBW7G2rqSgMxrEyFNkMYtRDN2WXXv59VvGsJ5CE6ZteMJWAC8jwJzpLpksYYKJTvyaDAwh8",
  "key16": "4wE4QDwF2tTLbf29iuo6Y2hRupeUaB64mrpUwGff2G2qWh9LNQfvt65hda9Bmg8SWopvezAp2aoiZ1WAPUm5vpEf",
  "key17": "J1hmMDs5zBjnLpX234aXsNknFvvX2mGgH2pdDguJ7oXpVm6JWQa2YZLTMVUWTLQXA1Dg8zfnBKYUtXYVUNT6nTr",
  "key18": "3bv5VaxjottszGuF4Jmgzj6MmgbwN6pipHtPr5APEx5b84ZfkgQ8Up3bcQKxYHQdDoN8EA586Ch2XfrSv5ib5Vz1",
  "key19": "4nNxeCTZ1qJMUPQW7JgjTJBezL7ZtNYN18dy8VTc9CNtSEDk28mWWPVxLNXP4TXrjyv8a1K4sE6wqFxaCV1GAfMa",
  "key20": "5kDFC96H9WdFtGj9jDDc95NtM9i1PyTxuiF6uRWn4T9YpTNnsd2qbYBPoDhEH2cRfLKzGPkxz9GRxTZN15y2cejH",
  "key21": "UJwaYvooCEf56cXYfhuk2anNvXBDwfJJ3YMKjYVcKKAqASetSMgFZ9LLoSQBHs33XuicUgpepffYHzZwCDCTn6q",
  "key22": "2N4CPJGuCBxBuAeLwPZTrNWRhyWAskHX5gkNagnaMMD6oomzD31Xqvu6yM47oeGx342WP3SDSsJgFaPME93urfNR",
  "key23": "2X8Y3GvqrdRCAHVD3gmjhjPkikwekLGtYDCeA6YQ2Acgwv9LmPkkmHuPiz3rcPznoehMY9y2LxrCpP4S37WeWaFJ",
  "key24": "ph7Ty5ZytXZFQeqFSnbMbqcSLHbYmEmMtWtj6ekNbSJx1H7wDjxNxUBeuhcPDTpK3sye2r8zbdWuWTcseMeFZN6",
  "key25": "Uqqoxvs72kqv23Knn9Mxwi9eGUWSq19XrwX69ZNwjNAyRxya7eM4BffsxyP4rSVrKPypzooPDLXk2evbH4aVrqF",
  "key26": "4yEkMqJnvxcE5AXzPYHwkGYLFokfTTVNQkKNh78XsV1ShEmpv1EYGS7EPYPxuEKHNnQroijpqvMdetzCAXBvkfPH",
  "key27": "2CPst626nfBgorE1eJUiXU28XhJ9HP3cs2uLQGXXNvb5onHEjDEpKRgVjASqRRGwKWQzZTJYomP4hpFrV7TgPFoM",
  "key28": "n4xJd2UAfPz3NsPSzrk93k1hVFVgBXJUgwX6DoQLWuaBAogEB8SDMQKfwQW18YDCPykh2j38G3WBVmiHeXWEki3",
  "key29": "39Lh6Q1nQfYJZJSJLVH5J9RwK4DvA83mCyxhj27FT8j2GEHKQ4vACJkkk1NR9Ay2zCuzLKSyn3tt4VpJ2cEaDAjY",
  "key30": "3w8rkQz288UDk82XLrcjbRAbWa5J6WhM4kt9MJ4r6pT9iKffvHLXLqjL481B12nAyQTQTWjNk81iMCU5GgAkG8rc",
  "key31": "3QHJXZwEmHUspie97PxTetiGSuTgwGEtrQyxkdm88PiSMYNH2o4G9tc5aL2kmv4rzNxBm852A5QkQ2nfdD399DRK",
  "key32": "2jjaugzpMQbQ6aEykucLUf1tqxgsA5bcYfdw4vcFEMsS7oWszQyGPt548GWPymWZkfo6Vd3Z8kEa6MKZHsnntoAz",
  "key33": "54S5sbgF6n2jepLnY8PSGJMPZx52mw58TSY9kTKQYQnuWJSRbgXJZSBjK6ApkYj8yDi6NL3Rx94jRM8WWMkPs3JD",
  "key34": "2yeFptoHGPMMGF875kjz9VBU4pAtXNWjg8W7RsZ5MEKamykfBMcovqTfuNuAG3CGMLp4PNWzWmTvXsU7wtkMYyUJ",
  "key35": "aBzue9AnBxAnH4peeE1KW99z67HNniRHrofpB5GqvuoPhP5yhPk3AfJgG8s2kfgzL6gSdZeWgrz6rU9ujigkwpY",
  "key36": "2CEdDZUV7BYhRaSkMEm9xpzrE52zcarxumZdoXScZhccRvbmFBGUGTfkKHoyiVTjrwQtQzCyy1K18bNktBe21HAD",
  "key37": "3GFwKDUVkSnECoYdGrTgW47kxWKLshpEncy2EQGTSPtbuzTK1jhe3y25fgPHkjSxUrtv3TEE5CaNCQCH5DB7ezUy",
  "key38": "25g21xoEB4dyAU2HoJhfnW4djxi8MG4vxdwE5tmEQt9BQGRHRigBRdbsJ8GVdKUNnYAMXW7ZqfWHowSNFFkdDz61",
  "key39": "tzykFhZZFH8uzBDqYbivEjysnrvBcrxkyUHdiaex47gAwSuWoA6fuGn6RPSc5oHaLGmKgskPDAjsrYTtzTDj2Ni",
  "key40": "2cRzS9BP9yJjaNj6dkkSu5prkrHzrTUXqksjppAMut1wyxfpd1Qtimm9QhnJXuJGCdKPTd44dp9E4gdbq1d4Kn6p",
  "key41": "4goCsKSE5m7hNauJGEavLRpKZwjJE25a77uxiaRbj41dVkAs6EZpDSbViu9d3sbxRYXwrP6xroMfe5nVG5iBMhPe",
  "key42": "4dT8AQaR1cHkGjP1FxqMG735aFCSSiSYA6Qn2RuyvVfkdLH9391TVF1tamByLVmBVzWov2cpthTj1t8v52uRbpbG",
  "key43": "2nKeBNphG5qTh9J4ocjfw2aYiMdFwsLbQcs4EWJSrQpBPdqbkJxesWk4fujnGoZUPw6GUgsdCaL3BBrqkKVhrPuK",
  "key44": "2jnNR5DnH78sbkiMmyW81rGrnWajRRFyHukmRDiKoSF2ZgNVzwp8cNJnRFccLdduQ5GL9kUVdYpkJDv9QguD7c7X",
  "key45": "2G4b57ZgGoom7mJcai2VxoPci8rqQuqiAZJtXLcubYhuhps7R9njAVhhEsXqrLnugiAnfn5Gg1jP6y5Hx5Dh58Z9",
  "key46": "oGxFyVwCNExtCrsgYa1YR3fD2ZXhJ7AE31S2EGjwkX9YDHb9L71gFo6Rwz5mnQBSjy86jEEhR7WSUPhQxmhxXAs"
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
