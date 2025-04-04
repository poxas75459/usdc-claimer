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
    "5kayTuDzdSccEyMhCQ1zqJY9hrREVn11aDs2VU7vPu2UitHwAKWWeoWhRszRQc5DfNYoxyfLLGEhTf3kdhrkLXjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTmL3oNNF5bVBp5jx3WwTze3PssvzuHatkSzDSiTeHmSfovjVe6HqQEUKhAASePFqSyCV9CkLjKpvsDcwCDSnzD",
  "key1": "4uGBeFiH786YoTiTQq7xbqbCVL1v58LmVVFPSx4mWNJzm7NuaEvUnSUNW1fxZXpnHgDb3snx8ipjNw9X5bBoj8V2",
  "key2": "2z1HCYWfX4nnVX6rzbvU58r72yXVcgpxTVHKaHXKQfPavZ6QF2S3AKfn1v4tezPP4eQ2G1AjcL1U8wBPYhJs6Xdg",
  "key3": "55c9gXNMD94h8xWriHUAsB54K8NkZAfdy9piScyfAPq8pqrcNRUuaVZVP623dvDLTzxJUhoakTiuZ7jFqd5qrWoM",
  "key4": "4NaJVYg9nm9wa5GM5wyvJnR4Sd8eBAjvRUZ5ybijnFwN2ExWJUoiZa9ZLFeQkUVeA5zxRf8LxHpeDdKNuSLCTwFN",
  "key5": "3Xeb8FPhvBuj9xAHdV4H2wKrdxGT1RowHAECnUsVU4jQtjd16YMhitEtAg6MdGDyuvaYRAKYpSHUJEr7Zzutsk7n",
  "key6": "2GooyDY5xrNAA19t2QcSsCwgbCggqfm76VzWhMThVc9ocbRMH8TnkwTeuv2582uNC8Ufgp9KE1VtpmZY4uWSerAT",
  "key7": "2N9nMadnDYYPayncugc9m2XVxYGtUfoDraYNoVNPVqDKpGqGDhRsMUWFfdU8QuafqS4sFLRLkXmfw72e5LksJjXm",
  "key8": "3sHpoMkZU3mKnvMiCxbHaMLnRpbJ9f73DCiJpmdyaDNjo6orzzapkua8qWRiBX1hKZBn2QnXWpVUHiV5v5W3Y49Q",
  "key9": "3bkyVgX4PwZxwGex7Pg1KwMTzX9DLRD6zvKuY5o6vyjk4Afxodw1Cox7NeJNyiyPSmPzdwXNzEPEG7ap7kL6wUQu",
  "key10": "yDCpQuA4JZFKWsPvv2iKa4SZwxBJ5sD2uUiTgzsuK15z9hHnHsKzjhiAYUXzzG8ggzqCW8WJ2fePtA6KmJQWuEJ",
  "key11": "44vXThtKePHzsbRBGdsnVCMsG6Y4E6PqNKg6MMWNKP9xxJzKmAXbsW3unfdUn67eTo1ZLVRCGJGwyWphhGmaupmR",
  "key12": "5vwgo3mWT8mBZLh7eLwf6urc1BbmfYQfVGAbW7HaLXReLy8F8hrm9QyExFEWCTmo4JkVpbJBXvScb8uPmvQ17UNC",
  "key13": "zmpyG98ADJqLhgxut1pBWvbg6XHid1ABNqAWXLktSgwwyfpn2LVrmyWb2hkfBudz9uPhChVEzS2N1JFQwPoXM6L",
  "key14": "3W5Wnqoxkfp1nHTsQm3WVPWHZxt3kdsRo9pi8TudUmHPSZeHpaGj982vkX3aLCjsG8HKnHojEHigcciZu4GPuDKg",
  "key15": "53oTcmk4Q7VWb8yNU63gt1YJtN2b42eJuPJaja3BWwJRR5sNDMkiWuFZqZVSPUNSx38HWPN5KHTgTax98pyJNBhU",
  "key16": "2nPf1813XBeNSrNEYfpupwQp7FvkbzS19cVsiQbBwvks3XCVMr59GChEVGmDUR1J7fpktEVDec78bFWwRRQxcJN6",
  "key17": "3ncd9RGVnfEjH21zLGcbRSojHNXU77hB2RP2fBWJ6yY51oELxVPwGbcJqFj42fa7nZMfQu3j32DytaqJp6o9LGCV",
  "key18": "wq8cLXEpJJ4nB21BuB92g9T35zGZrUHeMnGrpR74DHBbM5CzqdafoM3BgXTQwY1H6nwfP5MzAArwKYeMCi8toes",
  "key19": "5Q3XAh3QapTmipcPBvMFvPN2dtfjAZwAmfASJX9RRnguXovXuoHBPC8qHqbuZazGzwfq8bU7GYR4BrT4RRdCJS2v",
  "key20": "4mCtw21mHMoWEJ4u872ovuywKphgj2ckN29n4mThA2AdwMMxAeBCXSxjgNHecpnY8TAvaM5yK9oksKkuSaKBh1mY",
  "key21": "4nZG8Np6yBxx1Rzqc72G9eyaPVwRgHoF1VihzNjg6ZTpUxA1aLsXtgxK5FYxxCNFH8i25UaK7ieRrCntxkzg3w3x",
  "key22": "4zgAkvFft3wGStDNYwEvtQVgbncpW5kH5gdikiYVMUdjg6wBBCACmcenghXYqCBSMbJnDbCfwn9jjp3NXk6bE7wB",
  "key23": "23J1jrriHKaWioiuPrLgZRRSNoUmVNREWRKdXoWt3A7jLVzeoNGt3WvfYSArxW2XbWRK45tkGygYdPnEhhMASgjU",
  "key24": "5X8yzTxmeoaZmdpHyTLnzKw9BS7sMyRh5RMkHQHUzPi83Rz3eoUyZW6Fbz2pQqPZ2LAwVXSNK4j23AZJELwB5WeS",
  "key25": "5yrXpsMhYzgsHENbSwhmLFxfCAWdtPvSHkKUJLKZzaZnwEraDHedqDbWXMZdGQd86Ag9hoDVHHgoCu5aGLFFfLTQ",
  "key26": "5PUr2iXgKt46AfLHrX13vtj74gZzBC3EhZ87PdvrTHPBBc1TSXu25W6y6ih56TR3DteXJT4X1ZD7usnEFUTMRQiq",
  "key27": "22xVfaxUxmoKjrKa8j1pgQD35JVfv7UTddA2ksC5h1QrWCEG2QJSy48wwD7fLonSRoHCBJksj87sYDhHohP4ATk4",
  "key28": "H4LdpRNJLKgUhuErtLUwoAq9ib4euDn6CNhoXvoRe5MsozKhCyf234caz3rwCMn9KYUS6AjiJsUwUuWDArSW6bp",
  "key29": "27PyLpqfosEqf1wqVhgfLyb67B3kdcwaWzgdY7sAqajSvMzUQqvRwWHLDENXZAr6ma9ZTck4hTDCciS4HhVMrxg3",
  "key30": "54aojbQefC9cY9uBs7Us5B9v1NF7f6NCAMkHKYYZxkaVmoEwivmVcgRW2NvK3Tw9cnvd8uPPiNMTxMaaCdXAXcHQ",
  "key31": "fiH33CEgmgw8r4s6qKvSijW64wNi26xDuxm71KurkuBctC8TpwknFeYjrMBvgCjN6x9He67M6x4L2SdA3z8sGWF",
  "key32": "4zWQLb7uhgyiFC22txAVKsF8R4ZrZ2CncPGdkAiKqWVbTkpEcnP3gUfrcihdG56JJq6QptFGwmDnbskgRyekEuBA",
  "key33": "3946vKRuX4xb3DMqk5eQHqAcEi941SPvjVo8iqidghASVv3fjfKh6bnmmBzQC4fhn9bfBQ9hVC2uEmTcBfLsA5gN",
  "key34": "38h28UH5txXC7ZG3cNKh3fw3oTvmr9cNx4rPCtrzyKdZH3bfXSak8wezPg2HswYrxQRaDKU51cztKu7outGNLCzv",
  "key35": "4okXzgAB7Q8VVAqugqWjxmmiPJ3p25rLhmmcNf5MK4r4LtZb2t5X9eCx8UaXMZNFxGKYz95eQ5EYf8dumXcX19Q",
  "key36": "62xvnEPk7VahQAtfsytDcd7d2G2DNnyBtHpkcdRygNxoHXuVd9x22aMsrtCh8a7HyV7ZqxrHGxuJSFGwHMJjcCJK",
  "key37": "2i4bhkvoJcDFDWhBgGDahTnNf8s4wNYyHqhwLWKLp2PEVCZNgHkUaZM3L2M2nfKFzELySvEDqp45vTNguBUMK2JE",
  "key38": "N6Kx4V5WkVhrubeiPprQoZ4sWVaZzcajjoU6HkpRyJEySmi7jtxk65gmhc98D1VyX5XuhRwV8TR1FvKUmJwsarB",
  "key39": "4UA5B3dtxaSsfky3fjBatdvTWYcW1Vogfva5dKxS8p8k5FFFtokatgfzAjjt8Legqodd36ATLc81HA14o6sf9qBx",
  "key40": "4kaCUsXz4VxrerHCMJyguSRM11W3pm5FRCp5Dyfk4CVR38jvWeJ8vQsaFSB5uaUt6CK9AGypAqZ4wkVfpo1gnZ9Z",
  "key41": "3sZ7YzpbC7P22crEeG8axN9BQhjKQrDEZ4ZywV9hfrg1KVSYovbhtKPCU4eivUPyjZkgXEM2YFbbfA1y9zeuB6vN",
  "key42": "2cUFwuPr7u3JssLD2i4fqkCosUNqQ1WjWbxmkd3C1WF3ucLK47fMsA4JrzmA7y9rSLEPDKx2nKndtXkcv1CBZWK7",
  "key43": "2d363xA4wdUzjUAkJVvX8AbxZwfTmSBnFAigyzRLRBtR2QLMTmB6KF4H5WBm6pFFBp49KnFaiep5pUrRQH2GZBPa",
  "key44": "piC4ASyhGE5s7F85BgVExcQBGZSrZkzL7SHLX9ihCf7D9jZkCDyfaNaJ2fhtKuyUwSogi1xWqaKSmUov41Ua3Zt",
  "key45": "2ppxpCB3S24k77kq28ntXu8PnpmXJhWLwZLTXajCZ1QR79SydzqPYw4DWUU6V3Ya4xARzNBA6h1f7kyZbxRzDZaV",
  "key46": "uTUz4exm3Hqry44MPxgxCZWfqQxgRmJRSNyvA37vrZe881X5hd2AuwaTmPeVgdTBc5VGQf4fnSZwWnLMQrm81Lh"
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
