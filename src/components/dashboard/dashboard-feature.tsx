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
    "65KZ9HQhUdpbtuSmDAZUGPBDVR4D88UxZUF328VcRETq8iwrNfxJ6cLCggtTqH49b4mDHhpuTNCjkuiNRJ4d1aXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2XFLzEXj8CAP9x9NN1Zx4sYCGKb2ea5AnDecRzsrpwhGbYdCGRBRQM8dQdPyNdrMgfdQHsDiHtsrYMneRVwMZw",
  "key1": "33nxrUENwiwL8dPdpwv4kqGUxNnwtbubviT2AaJqM2y5hJhF5Li9dDwY4Eym97R9ZoqT6uBA37rcLWbt5P4Hunh4",
  "key2": "5FRviAALMcNfTQxhdbc1Hb1heCbd6uUenjcHS4r3S8tMADe3FiTeVQfEXjopv8xbtBMLX5fShgZAbdeJw7453fvf",
  "key3": "5zeW5YBi7mNCf6G7UhGiaoJp8G8Sz8xT4zsbaNTUHjDw6cQDGyd92FB8NcavsF8Ljx7dHzeirZPH5bW2mfhTwQLG",
  "key4": "8DGQddNqPiE2T1kwxhjKy3EExgauyQzhk3SrkJkBbe8gCH2Bu9jUQpqWG8NVTf3N984dBvYAFZYwM61iq6ZSHgY",
  "key5": "463ZNRcgFq4w5sPXePZHRkEaWfJr83zwu2oadStFpqWybjXyVNHiwAQ2WG44gUhaifH3xPcd1oBamvZ963iWtHnV",
  "key6": "4tjvcYxkHogXt6wALE8QuGmAuDXVqPyPJf3YHzWLiCHyconS2eFDjwhKd6otTLHnx2HQtQGj7UqmiMmtgTd677m8",
  "key7": "dsZuFaccmNuuVPKHsAYryubwqpc9VT6VrUieuRVgqUzgAwFTMhikj9FBa8g7oU4h9WYvLqbhY9KTkY3uDsQbhYq",
  "key8": "3rfgf9fyNYnrVqrXmbuYT3h1zoPNpZCXu28GzGvEJMjT9o1Nkrr6tRcmZ53Hd2kPGA8fvCBb6z8aRzZkobfTVnuD",
  "key9": "2qNKyCZ8HyW88d7fbtCj2vhVF4he9Fn61pmgq3sRtHsKxc3xQBRiqQ5voz5Xa2SL22ELVz785iFCqVdXQAsusoU9",
  "key10": "4ixWtMKpLX9TveZeK3zgHSUJM7RLMmyYw3oSL3mfixy3JdTeL5zTeREtGNraMq2enMDiLYR9gdrig1wngjAKDuaT",
  "key11": "4JyvEbdraqSkYo4cpNR5CbiTrpCYCbdVnz99XBrYSXCaxBRDFCo2R6jXhd71p7Z6S3NRsCXjwgw1VsoMpr2mK2Kf",
  "key12": "62cy5aZAFmAQgDgv5DPFRGKNNVrGmqmkHfQasw9dABfqirX8ewz5h3m8PyFTLfmBhH4uziYxx4KnYNYN9uzEfhTM",
  "key13": "2aifDBm38gATAehmec7jA4wte7RSRm3TNcUvUnhPrc6MRoVUoLPVsYS1cpeJdBjve4ScywBMfDnw87JDWUUT2Vga",
  "key14": "5aB6RXZd1z311TFmWATDkXi842DTa9kCAUfTuLooncPKtNs458Pvaz2XYRM8LaLGyDNVpAG1CoBAU8AvzgvPd5zM",
  "key15": "74VUyqgroyLo2DprAPLnfgMEcgt4cCFuSRBto5RZ33J7QHVzYDcQWhAUrJ7Rq2AgyPQb7JfC1j3SpXuWkccg7Ms",
  "key16": "39WAoVBQZH4eMBotMAVyKDemD1U4txZe39Qkyayu6sDJimuFe1BKh1HqaoEpZqongQWTecZExnQPeRsnSHtkcVvd",
  "key17": "57CErhQ8DwLQHXNo6s6g6ZCub1fkxHJwF16WSdoYcCE1g74PVzS5su6o6WPaCBPuJNTfJ8GsdCg7RbBr35FJ1PUy",
  "key18": "3Jv39LSkXuSoBA6zDJ56STjZ6M5Nu5SJswGFoAn4mEvWZfT6uxjQsmRGSBy7kS5p3HPrvRigVqFeyk4nnZ1cJnKS",
  "key19": "No7X7NcswhVJftLAMX4NQ4ywPFjjaQd3Czr7K9HekQc25DaiwG7i9u46V9gyWz2iTskoY4rRTYJxe2Mjafv928W",
  "key20": "SYiiVpcmhsx5KSMPKhUGBiG5GnYysVp9ygqeNahGya9zZcaUCtUEaLxtdLh5W9R3gxxQyGHGbJ31u372YJA8UFn",
  "key21": "4nQZmnLhz44eGnsQD4EjhoWbkj1Thjs8kZfzxp5R421FJCxJTXw24NvhusRhexi3r3oGWQV1eTCitGAjJes77vSw",
  "key22": "3b9n2w2t3cHu72QSxjM9Pf7gGDd8bEahZLkUdVEtkSS4oJ8WtW1jcsQoLnGTVQhezkgrajywfac3KqV6RfJpxec3",
  "key23": "5Nj5gBs7mBtDE6FtAsjhDfxbvyifXR3gLFrpZu1tZNrESbBJv5e9drHn2iT7Qq2mKANNJuzXNSxCW74grgNFH79k",
  "key24": "4B6SCJhFGt4S8t4deQHmS9N8HNCo74DqDu9ETooEZHu9PZDh5jnz5RWsv8EmSk1KTnKm2qG2XNyxvAVFAJHzGtFt",
  "key25": "3Nu6A5jQWUrc7FoniCgKfNeJ56z8b1aP4D5ACAS8dSw3dRf5fFGxUTF4XJJF5SF7UiUceATXVJsBUhdF7xSg6s4B",
  "key26": "MXoQE7jU1xBUBxXo1qEG6WPfDUo7UdxWmcuc8zdt626E2mZstg4DdT39GoYpSxe9KRg4HGWaZ4beU3aWGB1Va2G",
  "key27": "g35dJnoEJ741wxi3TYGWNJJGrXmuGzBDBizHXaioyacMTR7N4V2iG6wxSg2V5UUxLDbUFvcYUu9BXmsqQAaUhfL",
  "key28": "5pHD6Ls5REY388bc2UBRzwUjKqccuVfEnprCLansfEzfAyu7t4ZsMwD7Qx8qK68Nq9zejCddjsBMdETNNZi9vqZj",
  "key29": "4PL61coFZFk2u9GqNmkd2DBXtxd5531mLDqSoWq73416B42cL1BLtrUt862XZ83Z8xrz66qToUgWrtF7h5Bzy7Q1",
  "key30": "2buvpaQn5Fh98htJLnK8vsi1QvX3UBmNmzfkmG6nNywUnC4epazLr8yinwbsepaosgEfMwYtDtRmuvGwjNLRUJxD",
  "key31": "HsjpnPA15ZaPYUJx3m2mFetiQmcMtvkkhfpJhQMomeUkHBjLGBLWhggs7HYhqAZWJw7buV7DjuJaK1WGTDFXGHq",
  "key32": "2ehw7psJkA8od61VSCw24Qf3d8BmvnRLBMqprbp1FeHbj6p6ae3cakStskXDqdZc2n2LxjxVTsDifDqYxH5cSNuz",
  "key33": "447h8JQoYa3nY6jdUANZoRM4PTC1QjNjMPViuJmpMXqGJdj7xJRm44NVviGoXicLidQ3E9HTChnTppKqgAJ2Y5Wi",
  "key34": "3VPjpPv8WUD1YKHy21M9Kwz2JUVbCLSxXWH8kBM7Z5qbesanY9fxEYqosWoPWc9dSgQhYw132oKawaDd8CCTcyHK",
  "key35": "Pjp32KXnRUZUM1mMZCv2XbHtvmMGF8urGsv6ra5vfZ1y5CAR1QoY49nSjPJ3eQkuCwieP9CiMxkatRf2PUrAwHk",
  "key36": "2zwoAJhmtkaPGadSX4BS45wt39Wh4yG7Bo8ZooJTNUxxHtShiv22tTtSyxWx1sQaA75AyXF6g898pXinTmqBo8mX",
  "key37": "qVo4W1wDEbmeT89EtD5BCpYBgCARsWNX5mhKXzn1SqWqg3wZbQeMwqVTMgVbgDG8oHHMfk3txGbrSVqaNqYmnrb"
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
