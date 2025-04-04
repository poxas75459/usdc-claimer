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
    "2zYAUxeh8RzSq374YkUYHdJC3CcP9gMk8A4VnbPTu9UY2nFtDVbtTzg6jjeP8spsstQQak8tqTRBs1iMyPGX99yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mcPw8T3NcvFFJpsHEZJ5gyAv4X7X5CP33Gi1yL6YciUPNHbGqYBEEJbF1bZkCFiWfeN9vKRKpFYHNRHekxk25Uj",
  "key1": "26rkdF2J73eQ1NUgpeDyAseSGbH4VjqFZMnQHDCQcVqUZsz47tAxV165nXS2foYTE86tNQnSqskD6eyGRwDHGhox",
  "key2": "63eRRUcNN9BHhrqAo7Wc1raMYj6k78jCGXP2sebYsUC1ibD4yqPbuwyNEXusNDoc9C4KZuiSFoULLoBRPHdwm89H",
  "key3": "1wgMtKGb26zA2i2AhYHFM65vL5Wj3iktQbVvNF45TwTin1c2MNVfERcmrAJiZ3U9RASAkpJFaVwvbMRjAN9PNyj",
  "key4": "ueUtJE4P2i8HsvEjDHJzPzpQNdGHDcNAzt1QYYc5SDcFo3KQuvV7t4APfUfZXDnr535XsVp5uKWmahFWqFLEW7Z",
  "key5": "V4iF1kQsBnfBWsNDmu9FnU4Jr4t3VqV7hnzuWhu4vFgr3M4F6JQbBs3HCWd4HaqX2KZEK7MbzHLdiswBJPUzp71",
  "key6": "3jCZRwiRnF9Gpf8chM2kYeFMA1NgakuiqRyL8iCnNJ3vt44wfUcPPj1KzJCK6xa2YQLmD2AhC1ohaN4PPDSqtWQi",
  "key7": "NdzytCr3QU8FDdNTWg4MHJ6HTmdPgUUeisEDY1kQEUoQtoPen6rB4aYQVQVuJitNq2qvAYGjbzGEHCPzSkJd27v",
  "key8": "5eySBt1fjSgmnEadxAo4Yy2bTK3HwByB2NVkNQnEqeeyuv9X6F6Zv5RZmijnP9h9Ta7SNRmHVjZkF9cTmQnAJVr7",
  "key9": "3sxxWMHD7uPQ8hUP7nTcdiT5RFW3TRvA1iJf9LcPZ45bkXAjEdhydN9TTeor5a7VSDhFjfsdLm3DBma9RCxeYfqy",
  "key10": "2Td5vUJU37dQgizXQStWd2sq2Qnt59gQgnGCkBe6hHeziN17PbGVxNMg8oEAtdFCrSwY5S5T652DkynHXcwMJgGL",
  "key11": "3ikAM68Hxgtr73jsKo7QAwsrXJ5gmwkCsJDu1H673Uqr3kUAf5f7dqrv8gV56Csv13B7J1dFW9jXWrP35s2DHFWw",
  "key12": "3yNu5Y3UGUKzyyrNvePPLDrwypKVMycN56DDSsHCxds77vAmYdd7pGg3byYDb75dk6nCP6c7yZDuDVYegdvoqT57",
  "key13": "3mwbeE3Migg3nAkELZ71aALazoZvrB6ozfPHV8Bk9Mmnz2u2tKQDjBkeyo8UU6SDgKk3Z2NMHyHL84cboU5mUXFr",
  "key14": "2EWVPAgBqPC4z46W1e4HGEjcwhfMs9ubrxYuzVSZj2RhbsPXTqjH59Xt2PfJJd8pghfHPtS7WtXY4r9N6Samyccs",
  "key15": "2AcZjUC7SXmyjcuYA8DKNJrNNJtZfRpHN5wvhp9FVFVLPSVGF3ARMsnH9mZBCQVpjvXGDBe8efZ2pJQ5qeTEr3YZ",
  "key16": "57rwR4BCXbx8WwJ6iAYzSaFrTZFygGMY78uMXuPoWNDjj6QdRfqAxN3KpREpqF5H3XAbag5oQNUqYCuyEvpCLaVA",
  "key17": "4eGCTF4hx2h8v76k9cxCYBundKSB4vB5YujqMAtJeZNHUQyPgZQ2vkTPWFh7gsr2C1HkYdgoCWLYYbZqtgk83A6S",
  "key18": "Wph7WWHyoacfFrvNnsRkgRisRs9eEBVZnF8H1uaoj7zQqSPfEE47QdjABhVdkHwCNXgCfwv13Fm6nbQXXSdWBD7",
  "key19": "48f2UdK5WzxMxYw2U8tZXQ3wZQDveDxBZWQKzCZzZ9zYzmbU7TroyUAn49nyULLFkKtyJYUHARMsw6AG1mjzCL5r",
  "key20": "2LBbQ4YSvGTsvUcTbNhtjdBWoW6Eah2H51SoHjue1Ab8gSz2AAGcXky1jvgZWGevM7CE1kd825GW2fnrqdtJThiC",
  "key21": "2bUgmaaHsz2moAo2XxKurMuYWBBnwuu2fDsruNwF4nqch1tJ4RiVQGZzdPoQEFeteC71cQHtgsAdk2cgp3YtaV6k",
  "key22": "66HDLgA7QiQAYA7qzrCbgdofn79vJ1XPFVQA6YWtHvSrk3XJcywJhfyNfY3oBFCXpXUDsT9JbngFKU1RnFLVmo3N",
  "key23": "5ip2aUPcVUdfboJDoyEhjgAzggh3uuTcq38axHrdxFQvWoKcP99gyLzUZ6wTXyTjCr45QEVamYYGgoHafJRfdjTG",
  "key24": "5eeqxSEuBrCrPRxXwEoQPNcKExajFyTnDw4F5X28jmqu9BJPr4PX3yw7RjRXN2aqghiY7DMknhHBhYPiU51Voe3C",
  "key25": "43jFSMApRU2qDamaUNJVMVHdgg9wfecBrXDDzhxfXxuGci7tgLXCCRvmt6EfD65J5fe3o5Cj9qwgs2Fzwp94ca9W",
  "key26": "3ydNHiPLjQX3mMqWo45bEGoYNRkFQjvkyNaVf1Sr6PWPiTAp7JXoCeywX1BFobAx1HNLbTrzZr6vqxQLFiuagtvH",
  "key27": "3Z2e35GG7KDufkV2Xg28NrrcLseUCjkH2AXZLdgZ37FMxs6M2nnaCyU4D4dnP5cQEt9p2gsTGCnudovNkQRBPUvq",
  "key28": "2FDeL27hPNveB5ruC2Q7eHZaXZXzeqSG8Bi5UGQ8Z4skiaPjLJSsHxPV29a91g7mkJBFG9uA7q6Ed6c9gPqTpCGr",
  "key29": "4SzZKwUxJ6UnxwvT9vxbUhm7HHaPMQpPEHnUCCYbBkU46zWzPMstpu4aJgeUySYmwCPXvdbWj7aUEYbyju4sgRRq",
  "key30": "5VHYQMzCuSz3i3zAjHdgSAX6BY5WfLSaSw7CCnWhN3Z3ZpzjVDxSDnQF2RVrYqwPJWFexvmGWzqdQbxPS4DXWury",
  "key31": "4fDB4AvxYeZTzmCohajZP2apoQXUjFMsokDmHJq5h48tQGT8Ep48hV4aujUU4r5ci64TapAMozVnNYxTLLbXpzU5",
  "key32": "3h1hcKrsyT7JkYbpLWUMnnqtNYUmVmZnFtiJXaV3JQJYF3pq2HbiefLfZPHgKTvkjrjSCAa1mnxXwtmPufWGEWNh",
  "key33": "3XYMCwYxGxh8MzNXvoFYcXGqvqxaRajUcM1Wgy1dJQpMUiQFYsZ9x7kW5fyN41LKzDoJk8UPpjLrQFsTCYs1s3n5",
  "key34": "2VNh8ZyxpjDrD7MRjCrstRRe8bTZAMvM7EpdEk3yDsfLwNZeWAoXbAzkHoxmb7bfjhh68VabPSEfuHtPcNetX8HA",
  "key35": "4RVQEoaox3Rmk1GArdphMahQ4f7ZqvTbg7NN6JQZ4xknL9nYtuE3RUaue7rGNTobh2jeSu7niYgwSDNqHTGPKicb",
  "key36": "Ggk7rosSYGZqbxa1CyTyMhW5r6nJdThRZNtbU7cUEMCLpihU8jasZdPgDa6bfiLSp3kzPheBjtDSun2pezsnT39",
  "key37": "1yoEnZzkCgQ5vmtvQqERqpUxyEwfGFkHfUyszQJA5os6YCiW34c6sGmTkmLh9npitG5v8n4491KphVSnugTR4Sc",
  "key38": "4jWeiWv5kMaYz8A3pL7oNoS62uuDZyoubpRWPQn6mpSs8Aj3qM3eYCjAHLHqMcCtZm1BY8pULwNakKVsEa28zM3X",
  "key39": "2GsqDHwWjkMQtweH45dMciMSTbrjEyd9yaDr3nzkkmukWAJTXYxXG9iHU8CwU5ocLh6cpCehtKrPFourGtAzpoCn",
  "key40": "64UpXwBnNnzJGXRgTbxHGouc1UtZViJqLj93MXoViFFG2VhmgmUazD235VR8db88gjC2Fd7DEM1MDRibPt9Js4gj",
  "key41": "5zyyNcYEaUG4waKJfMedwkiCNzVLh9QKZgimCYbTUDLocrdupEoFg7Kz4Sty22Yp9fG6uZRc3f8SUx39XjfoNQf8",
  "key42": "4wjoPNQd1WcUy3616yCy35wyC7iqhQMvTeZ7YkX3QGgDWKDHfknSUVLALvGsyxusmB6TuhbAmuybEJqGGU7hS4Ub"
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
