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
    "3TVw5tUVB9wWLy8QyTbawxWGJCLpGgijMoQfJ5ydmws8CBgN4eAVn8Ar4iS87wkFSueutnQW6DXYmKsdjJLP3hCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vHbHQEu6QXY6ubjJrBP9izzgCENcKvNNV9VyZ5U5XLNCJs2KeSQLx6eFBKa8JQS2W44kyGicKxVWXoNPXWaKLSQ",
  "key1": "24i9Gam7T2kzixKKzh1YeB6kf1Gbh7E3gD4DEybFCNuBpHkuj7n5owR7Z95jBQLkhwzXpTZ7pxRnWcteNygVZpZx",
  "key2": "4hHeKEjfsWk4KT7B8BuVfEXFds2DqJV5gqoTAzQW6LS8JzxVZ4gfxQkCp5y8R6ktWWVW2b5Ei2UcoSG2XDC6jZnW",
  "key3": "3YiwXyd8BdJY83xyGtRgf3pfTVBgZh4vC2myocuHixz13HVkxkBnksWg737U9zzHk2piK47QsZ93z3ietwgUSbhi",
  "key4": "3FrfPNMi5FoDP3bdv3sPf6EMeuqrbxTD35FmQKsDnoiUxuJchp7txJgUnqoREfPHpKBPDsrZKWJSJro6T9Pfgqo6",
  "key5": "5BH62oBbAhSCf4cymaXqyJdu68XE1wajdZALzidptqEcKtmVDBtmpphar7RZaLpJHFPwr75Vrwmjb9LTDqvFrobQ",
  "key6": "2tX9swy1dJqb9pE3vhg8og8tThsWna3wc7F6fYQM2TxFEa4fq45FfvMoxzxutdQuyCSrZ7V6xzF2bRFR8pULGAx6",
  "key7": "oARyvJLhspGtsd9PuyM6bgXVcxqWaawWM2DH7rSQixjcnJ6pqa2qJddtzBf4LaVkGNY3SqsEwvUxyXRoymNqi4V",
  "key8": "3Zn5og1nMBukQaPo7DpGYmCoZZ8GVTXFdMZmMeCXFY1yWvm4oizxmN34QNgaPXuthMr2YKeBxCrgSy5b3YaTupUN",
  "key9": "3pMPZWGRDXbRiK34R6nCw75RdtGHjpxWiw8jDxHzywdEfHaHzgybwB6LBpZiQnLeqoNh3wYAa9Y4BEW3endqjeRQ",
  "key10": "HBPb8Jt3gWXF4tfW2GPaXHBSenE1jsYGo5HSeRfPDV6v2jmGWdvNgVFpcwbUn9p7n1jqA6NEuqYEkbpR8yBAGd1",
  "key11": "5gpEcKjHDVvSNankpPEXYLEa6aGc4UB3n9QLJhqHYzvBiUQQSUkAGyo6LtyNrQnTyXCPFHABwPeo9rcNneQNcMwL",
  "key12": "67G4omHUtCKG9XdAnYqpw65Awc7kKccpcsQhWJAD7hYhptXLoDqewP4LD6r2uMShyxmaCgScLn936MoobrTDVApG",
  "key13": "2q4ejJ1DrvH2v6N985C5t2SkKjXZksEbroxL7o48JtYkrvBRmDviUAs4486XjRwHpY2brhiqeQdxZN1t6fAk9p9G",
  "key14": "2VrGLDqQQEt8ruoDnE7Paktxq5VCcamDAe2XzNwfHr5Fwws5s26MGQgGzwShcoWigZ28uQLehh9qdh5xxZbeeCNy",
  "key15": "LnJGDrhhw9Z4kkTXaAVuN5Dnb7svjFgEKWKNJoPDQR65LC6Bpyw44JP67fxA4R58UuthGe2dzmZorkeNQmbGY8B",
  "key16": "25fjhfPhQmgR81fXi4b49HAwVS5TMwP9TQC4prvMmMX2yA96Yg75fj5gLphxx8A2sg7xen9BNMbAXAPrbWn22f1f",
  "key17": "2bGDaz9A3yf99rGeunB7rGQ5s8mc8S3Jr6CUgYihqmEuxjKhD55K2eJhcCpjJ6gG5iWeaK2Qkh5utKzRYyEJSioK",
  "key18": "4Dw9yQuZCHcuvX9GJfpMNCn7PYiyc92voNMVp4F3sVvgT9VzKHeTCTGrfzSNuifnFnSDfdd9p9e2qXSQR6aXSBmo",
  "key19": "4uVC31FVeog3SjJJ2uYGDd4NPkC4EiUJ2M9WW63PXtr22WnEHGSbqUkKusDTfwfKT3tY6cZ7KjMeQvfG5pTkDjn4",
  "key20": "4JY2TqYQy97o9HEbDSXfZGCJPN2skEZD7gp1ktMVdcQjZq9ak9qHuzY4RHW6d8qfKzYo1fgxqS67MgcowR3NjjrC",
  "key21": "3LgaPJbzHPB6anuzvQSTkXxZ4cuYzw5ydf5qz92gvp212abJA4aRFLPEiSZuDJxXKf4fErwaPy3yAszDaVhFDk8D",
  "key22": "5Ywg9R647UDcweT3atVHTfiMLHa8MV1GbAaj1j6Y3W2Ya3Mmy4XP9E7Tz8zTNL8fweYktMW3aftczCmxLHgyfz4e",
  "key23": "54jjEUgvcfMFeqFosMaGqv5cG2rb1K4U9uznnEvWZ5h4vPT1fevDrehBoFAbvbCfP5SRe29DH1fqFT1RcFfy3vob",
  "key24": "5JeCwPPQ1JZCBXtHjmsiLPsqKq7prBRn7MtAJ4p3HkqwbDLnQQT8wiohhBQpXX7iUtH3UQhnDPK44czxqYhkDhxB",
  "key25": "2Ky2r8akzDZgGUVwCpbMxk6VR2C8rq4bTrrvby9vswsqMz5JM8cMuBcdgNikd1tXkdpUh8tjeSghchs4tNbaJMVR",
  "key26": "5UbzP1oMGEEcsVxf1LvcR3jkD6ku9ZjBqDUcyEWA2kVivHqUaWqJJAKT5Xx1csPLMh3rbJqQHp4Mj2BG11wZh3Rs",
  "key27": "4JnEBZdV4gLT2PqYayPRGD7SzBpQrtRkH8yoiXxbnmiV4zkiztp9t49V97coknXVHHBgUPyqzFZRUNaDRYWiiGVj",
  "key28": "5CNz1j2xQzzwhx1fTaoH84KtUfGiwsRYeqJHrdeQ1k5YgNhWoz142PtS9mfDz1vSBbFzNEFk5LTxCeXcFqycYgiF",
  "key29": "3hhSakzzdiyTmbDNurHb5ud5agCDThyBbQUgnC6sGaMAWme2DxP91BQCLsddPgoe9vpRZ66hH9UjFxn5q5G4uBbf",
  "key30": "32fTHmKkouD2ECiJmic5KvqTfSfL9ZUzGAb3EwVhM5cax8kMJzbfCxV3ptTTNyWwxdqjYHguqQtcuTrUK5XeU8XN",
  "key31": "4Mdm87AzkdnTtfqhrH66n5VbejCKChaDMGhW8xmNeFnVa1Mpc3JmQDQ8zPRCZV1eKtPDeNQ4EwUQLcgRrprfpvrg",
  "key32": "32h181hnQvwce6EwF3FSusaVx2w4zU6LcvnxGXcp57iwcnJfmZNWKHqLNzStxVg5nqnd2Tko3yWzJDaYML3ZuhFu",
  "key33": "qirsEF9QCoKyHmSyZKVAVzjiJv1L9yq7ZUqqHDFgX9QY6woX5H5FB732pgyr6Lh5JmhYk7tm9sKurKekrw91w7S",
  "key34": "3WVAJ1A8NFk13kcLc86dThXDNk8VsxjKjQJsfU6BzxBXUFxgw6Q25tteRQYSUMZgRksNbx3Tt895zUVevxdUwth9",
  "key35": "5dfqHqGLpYtfkkiPhyMQ7MJchpjfVx6hiscb7C2Es3Lbe8AMkjMonWp65xmvokotpADTmBWcd112AUsgvkfPxJwC",
  "key36": "5aRL5zXDbXRrVAFsrMpfwER6JZM5AqJa8C13n8dX3ZUbLh5Tj2A1E7jd9ZqEo1xfGcaMmBm7dvqciKfVZQzc8Ahs",
  "key37": "5gsQWxzLPqicaHGG37SbJHAgqKLAEgPhmZDCTiW1XERq39Snphbkco7FNvzydFRoEsoZkqATvWTv9dxw8S67SRYk",
  "key38": "5bJVA9VUTKEDotJGyLGXXRnT2mFWarzbKsNESSJYsVE4HythhyzbaJMaVpC6RZUU5dYdrEikNJYhisF6n9JAGETb",
  "key39": "3ZUEeikX8FGjZRgfotkbchboMygBtMkNRzQCTEo5eqzVntCyc1xWhtFCW3Va888bX7sipjMLTREoxDzFiPY1JeDz",
  "key40": "2WbuYp4xpcGY6HcCofomdpag6YvbC8eALffXxSTYjessn2dkC76NhFZEgyQTh79VEARXyHFNuBKoVHi9AG4AsBEf",
  "key41": "5xLc1DvmRGFSv2CHw97UrBTEJC9tqqMs9sPzLB7oqd8iQRnzkHu61es69dWwCe2A2cxf7tKwo9DMBmcifu7WUAY6",
  "key42": "2Kbr4NoSh9uzXzb4mgTDwNBT8VJohSCXAjPVjzwVM82NazLjbaEmdpWEc2egBXy19rWRv3mQ51HVgTRGpuZt2UUX"
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
