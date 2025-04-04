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
    "5dPVwKHWcXDoPMoXXsSnTjFNhywTUDmX7BdeEjN1qdZQBHDREQyohEZYgKoyVLhNc2QTfCjyDavzThDb8oVqRQRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YjaHzFbpucct4JrvQx6NwR9JhWw8pXUAP9NG3Cb9eDQWQwXAEQ9L44gdv4YWc6frLkhWTi3CNetz1MQ4GPrRyVk",
  "key1": "4UKd2y9FXWv7sviPERD6iY5pPd5NgeXNFLMy5xUc4fEzC325Enojs4NxP46LAPzPsPTfPxoCgBv5GgNQAJN1BxB1",
  "key2": "399RJdDtKeozQZ86cWi1qaDQaFx2hwy6vDUjHFVWcY5VjxfGTK3hWYdvjyz6e6rBsxyqTtwAZxWoS2xGfD4G1nf3",
  "key3": "3W1b9bPvNP5qRNTDmHpChSncFn4tzWj56sFhxHVH7YtRvwRKJ2DdJWxHSbgN8FXrNMQhLkQjvomCPExf7EvuhvKV",
  "key4": "jK6Yi1eLKfKYtPKopdAegecdzgS7u9dmXckwRUS4RqQimnsTm7aYUKfYC9J161EEG8WcJRYoHkaYhMwHusYrK1A",
  "key5": "5fmvT1wLcXkq3DaXd3vt46qjZa6tjMfp5hMEA4iU8dfoVoKUouSmsdqz1CA5vbddQXR88v3qJ6gcGNVS6vDJ7pBz",
  "key6": "4QR4WXJPEp5JAbQxCxf1rVNjcdFU5Qa4sftyxvbh2CDEgecZmwTqUAHswXR3WWzhhqNRbiNEm19hKVXSdXEKFFsv",
  "key7": "4mKaFoLkLHfbu27ByEmy4eT6YCHo2rXTXtStKichDZA1a4vU8oXFA8xgLUUdDHPSgJw6khUb9NTET4onjpv541Nn",
  "key8": "5h5o1YahFgHMtFK1b3BKNm5UxQkFyY6i9Q3RZE8U5xFkD4YuWix8ZenfsR62LduaWLPPNtx1Dx7qaERboQGr6kHd",
  "key9": "5udp4FnBDG9NkB5ZFhV7o2ajEJfXWAvt5pkELpmnt1bLMY3CTqzMWfHYhYMveKYZ3TPpcFDrQgovCisN85a8h6uQ",
  "key10": "4nyYSPfTfQgWh1a2ywZJJH1FpWtb2pCpGaUS4sF4rH7LptMzT8SpoRNE4YqcpjzSTVEY1CpbfWySfWXrfymWaC5v",
  "key11": "4buqeQVAm1MXAuXUYtwfdam1CUALCGhvbCmzmtigvRgUCWdbZyoT4c1fVLr8gHNekfi5BDYxgPav1Tv8K1xN77Kt",
  "key12": "5gjgrjSofvuvXWrQnwZJJCmruikDU77z3S3mCKrV9Zv3538y8cxCahSZGZB2754idCuk2sUic6p6PqS8shpyRwdn",
  "key13": "5Ly7bZUoVtMKArQ9pNspPLESyFkeJwfEET5Ygp7utDu9918zEL15Fm33NZmvL2UuuHeniMnPtgM8ZefgdP4fYAxV",
  "key14": "3TkCTuRici8fyZAB2omXfyw6CpvPit2PpVs4wmYAjVh5jZZ3mN73P4SjbyPwzrenw9jtDwrm7XFi7DgJ8DUN4BEq",
  "key15": "5ourtdgnVWnqjFffD5Syy9fF8fGHqyaxMTBi4ipDFoPimz3xoAi1C4NmimySqFo7QK38sGtgd4w3DbMKPYhXmdf2",
  "key16": "4z6tEAdyM7TfJTmH1cWMsgo3jhrPr7ZfEkGEK7k3EnMHwWVSDWkzLZG12zikLYXkYardseVcYpWWvAWXgfNPuwAt",
  "key17": "2jrkPt7xhuFsQBepUErqeiQjP9yksUaWXJwP2XrhE5XunZcdToc3QciEGZ5K7io8zFbmJEFZtujw4bXbfcyc6Ega",
  "key18": "3MiqX49LWhphq5FsqpsXAj1C9RqKe7nqiFHALZZY1J4VQ3rrTsxCoMhNcJ463bwSyUEHcYZYx4DsAUKaXpB5VN15",
  "key19": "3pgRUMUhe1oQHWeCtQoWpgmJJbf1d8Z9JSZJDcWNS2CGRGgjdBiW24ZKzo1J3sWBYn7FfqCbK8P85ayqY3KavBnE",
  "key20": "4kY3zAW5vYsymbT5uFqBbVezbua32CLHhpdjdZBHjv3w84woBthiRrJu9jyBNVucpszMTmv5L1GvZkvDSEy49jNc",
  "key21": "2KFqmfJJxNwcWQBB6Ct8cWse2LzfpUWmbcfH1cc7V8tk1DCtwX7pngYSMAzocMgw78xhfnd6GmMyV34a3f2T9xcG",
  "key22": "5frBqVnv4nEW48KHTGdsqLELFse1z2kVTyif7v4rdnoXB1hb8pPAHLvib9LBvTP5qq89a1BUNdiwxPg4DbiLjd7X",
  "key23": "3xBTP8Jy89yhNgxpRn6d4MPRcZUhZvskaTafqmKNKWSg5CiW8Z3QurkrXJzAvT6jyor8sB51xqJ2qQLE3qhp1DEa",
  "key24": "2TPBtrFRaDSWQAVWETv5K3xRLBFV83PtwvGD4EYztEpjBriPLTFUAHpeMQdp4gtk1dyxLbXqXbTeYLU5c66EcQr1",
  "key25": "2nmAsKwcjXioJjkMguuwySwbfqkrVjnZ83w1ugk45xihTr8PMHt3atNXHanuBBeW2P5x9vXoCJiNTt17Y8PK7ABc",
  "key26": "ABiNgaTzajPLjJtGUPgxa3SzBB81ytH9WPnHguzSzMeqbrx5A9NQVNYju8ptKK4Q79u3mm6YdWPc4XE4GmNc5Ff",
  "key27": "5YCzwUeYDMBUHJ9bu4o5tWs61FJLQmZZ3d1zXuHKG5bgcCTb3MK65pbYjdPUukPkuHFBLC6Lmb74i6y4WQoTdmzm",
  "key28": "4TRz5k1ZJYH7Yxwh2MDSJH1K6QrtHUhQ1QFPZcfuW59n7psqG93ftzXacLPUwLDScxarg2KLB69A6tWhmdvfx3tV",
  "key29": "N37gaYAVVLroE639en52gKzSnmDY4XDavR3tusJETEY8WJtM7MP5KMKFxfBRA7EH41mPkRdZVTJ5syEd629YGzw",
  "key30": "5zduCyDzmhVaMwUHrDm9ubmFX68ndXRz4R1AofmWrNVACerriEwxeBiV24i8h4VtSMncWeoNEbDeq7YRXmMWFK24",
  "key31": "4s8kH1qNviiPxvFCrCTXzSGTANiWsikzZFZmrv4w1BZKpggqGmZsZfroPPkwZU5ELZjmdVydpCRBojSZg8eGtuos",
  "key32": "5YeDUotpxWjmKcQVBkumDTgxUHge4AmMBJ46e7xLsttKFwWoefMabYDV23nkVBbjztHcEF1YX98zbjyvxDczRSPJ",
  "key33": "5QHXGu3sMz6zMCjg1aoM4HGzL2acMCoAxXMjG2qR43MDPXGyiJkREdLrRXxv5iswMtFZt5icjuSzPZuv11FiUKii",
  "key34": "2cprFfsCHWNeTJmbWrHj61udGDiBcsnkvVSWnN2ws8xyHvGyVQMoDA9WUrXXa1FzQzWhz4PDsBMjkFQE8K2Yaecq",
  "key35": "39VWwxWZKddFYNppaT3HFhRyfzZEka3DgNkbpfuAePMmoWG4DkjUGTszdKeKWW1ED2oieCifhE1CsS9CBHfmtxjA",
  "key36": "53Srj1LEUWUJLYFo8tEngMJmoi2xjpHWJyGnh7demM22E37Z5H1C7GmNyXEtZvKf2PvDFtXXEfUL7WkA88oH9j8a",
  "key37": "3Yxvgjp6MYEWnc4vDvP4wevt1xJZq4VHt4YNQtQD8G67t8apDDkNrPuubSwvGKEDoJFDNcwcXiHZd9vPccWsz9ya",
  "key38": "587ujRGL5wVf4wcVsoQ55RVmi5RQLxvox7pZ3heZnSAmXEfur7x1Bc2jYjhttaU8aEx1XpNRbygPDEeRKHJzjppT",
  "key39": "2xGMmWcswpoUjALAKoX1XeDwdaJB6fkr3PYEZG8atD57exQ93nWS43Jysed4r95utYs5sTxVgyM3TH4NyBhjtu7X",
  "key40": "X11NASVLbJhubBMoPw6urrjK5Lri3t168ACPTNQrhiCPFFcy7jSd941ifhPRgE8HaKQPiGHdBNJcWMs6H61ALcc",
  "key41": "4ecSqAeuTNZsXkT1E91qSuhpN4qj3mJtrYxhzPXjsiSmyiiZLEX5GhFRznrLF1UdtYDAHPK4Nep9s4SN5GsGSCHk",
  "key42": "5N2FqbQUZiVQHWktbjCkSVwSvs4ZoaimzgdPru8DMWYfpeHraFFFTsGAwEWBmLsTaz8d4bPc1Das3uBR2nHvNqs5",
  "key43": "2mzynxAnufaJDJ1X6kdYG8iU7hxEHpj7W2rKbMSNb7iSw5azTcbeeacCKZJ26GcBYyEmAVxKc1nCA9rjVkg413k2",
  "key44": "3pkCkNBkSSm8SYpc4pGERUczbdoaMEvsaVMEh8NK8vYamjk4LrDwKzfzgBthQcfLD5uZE58B1konk9n493raPCQq",
  "key45": "k4o8a4Zv3Fuc45SRYeCCN81sCB2LwdtUR6HWEm3RzK6i1nkK57eRtmQxqDfEvLfhpVSQiAsdVVwfUswvoqbKePB"
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
