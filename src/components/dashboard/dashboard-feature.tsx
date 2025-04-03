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
    "4vpQShwJWmju7dgELC58NDUnPfz2We73pssDmhwhFgYrfdNeJFLhdeeB4DHKby97MQDqTznRpscWjFCTFgseAynu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzdtkd5dB8wBrwjX1SSJQ3iGxeUP58TBuCNPRawF4nFsrBTCGrFPSMwEXue6Jbn5uXqgWKCt1gFJ2KGoUWhjzy7",
  "key1": "4NNLB3JAc9XdxeAQL1PgfvK8hrPKfcnmNN26bb92LebzxCXxyzu8rtLbsQ7twrxthxkJ6CyyFh8zUwBiiJszcvx3",
  "key2": "4fzFqz3SZaYvdZmqdDfWNHLW8mqDCD3FGd3tbijpt8bfQLHCSFnFpbCyyxXXjT8SLcLx7HPZqbBNCKbTm8s4T1Bb",
  "key3": "xSzcWysDjcufB7aNphYLTG4SLAaK4hsAD6bzuK8Rp3B9g1qvsUQgvAgPrPmYMjrZDtMEx3QG5VzBSJeUnKYUwnn",
  "key4": "2vGAvMVhnyoRnLoXc3MBScvUSPWjVEphh8V9aFBVRRbfYPZSS9foPA8ZdirooY5zcTdhmPDuKJMTTL3bd88pLdW3",
  "key5": "2N4jh43gmpDLv5wprw7ziovLv2HqCc2ra2sNGK6d4GPpT1e4s7EKzZY2xYbgmbrMj9dhZyiWsH5rtADQip1ueYE7",
  "key6": "4b8iTBpxWakAuPJw3rePebjvYwS91DFjSsYbncTFSa7i6thfD5zATr6b2CMWpCBE1JyCCf2qHxpiFDv8Wrhet3z8",
  "key7": "5uDpeW8eEvQxujq7Sj5bxBo2i6p887P6jhMyj9fhv7zpSMDkvxzeMJtiLgEpk3JmKYTdKwpECpJDtV7reH1AjQSj",
  "key8": "3BWZqQELcsKCqyPLGgYLQoWcrfzXCcAprH6RfBGBu7UAYMwjsyaMRZj6ZirMnWVW2SQrYU4xo7LZ7HYY7W3oyXi2",
  "key9": "2emFfrWDCWT2rrDRjrVxkEQ2yAt9GKtaKc1eEDL4pmWu6jTz7SELpKx5Jch3r7ptGpegMyPwtC6VYfrUYCJ9A3Nh",
  "key10": "3h9ehyGVgNjGWGPECpMsN7pR5fyCxzgUvrVxZVDPZuuxsVGjhzmDcStKkKsVsS8J7Jtjf576ttEqmiFykUsRmeHJ",
  "key11": "5xTjBFxf29ZWEiHSzCDdtjw4ApavJQFh7bvkcf2BMgangu7qEEWpTFU9DPEqjGXuSrox5kd32QwAbdrjX3M4kUjc",
  "key12": "b8QYQRHvfN8uTKK7QdJc2swqEZy2YAN5fuZdy9yXY9kdvHxNCrZvLrmZPJGanbyaZDyGLnexhGEP5g1mkmLBNrF",
  "key13": "VEYgCB7PeKphXgzxRt8ckcnCfnVsSjfS2k3PCBF6Nnx98X7T2WrekRvCVP4pY6cLY8ZgNPKmx94zNp6Je9xUBGw",
  "key14": "3st2ix21jbYizSUtHsAWx9vVyHfXFgQLZQNdbW6nAUtk51mV7z5USiZUqp5aGuypTKZ13U753YbadTMQtnLQmY5E",
  "key15": "5pkN9AAWheSqNERsHCqiz2ZVTLF3i8WUjQ3LwUxUvUThM9XgNd1gM8X5xjP9pA1A8SMjJ6joi4mDV4Uqx7qEwxBU",
  "key16": "5wobAttttR4tvC4E9mA8YbnwDTDjwXf6qkKHsS6U8hhp4YgRYnHzptbVwh65DhEZX3sPTz4o6Ve1Geyajp543dzW",
  "key17": "2ipWVtGWia9nd58xiF4uv4GctSTdur9ZxHw6iGjazHaMPj6c5pfQ2GVzhCVmYf82r6WDU5rY6qPmYbwsBVeh2ug2",
  "key18": "2MS4vpzbf8W4VGF7xkWNwY9BezAbPYxTvAbLu5UQDmW9VhcnBbxQrudtgrNJLp2pXTxVLy1VuQxKJxXFQCTYzFxt",
  "key19": "4N2PbNooto9Uq32MkQn69NTFj7iLCmPvkUquscGTYfCn37satV4z3XuDCS1jCTLcVSvzv67a8griSjYzPzRVR7CN",
  "key20": "4YtPSx34YAGvPBJYp2yC9mzDXAE9FgiH13qsrBdRDqNxyiMddpg3F7AZxhDPEnMcVENZsizKyVqQUjsHfKsB2CV9",
  "key21": "67Ej7YuhrGCE21SLoPBdnkNhHHgwV8is7aBVMMnG4skrx2frXFXtM74YJzFmdbHcNRQf3AoW6nA9YkwapaZsS4Hs",
  "key22": "5qv21FKMz8b7QhpEgvyhz8XMSPH6UBj5CNZXrDU116hkcBtqABgmCuJuLGgorkbf3M36JbhDLkqxbBXDQtNHo54Q",
  "key23": "so3gpD8djqcprUoVSBhtbAvZi2M7eV3QENYtJMxQEM38z3rfZpWyA9bCEU9PdgCMhx2be6mC4UbG8cXjnwaq8sj",
  "key24": "2fv9fYprDUhPaeTFkcR4WpeTANHy44Kg1Jhvj4PQLZda3QZ6anRJbn1WKGhNwEfVJvhVVKAsk5t43eej9emMfznG",
  "key25": "3o9oi7C46pnBj6i1PbeSftcmf1rUU6Pe7pvTUZsUhmoyeFdiYkLbYDESX67dxtdZYLPEPzEbwdDo1w7ke8ez45eP",
  "key26": "4ZHgh4849m9aNwHCQaubB3uNpcQoHS6Sc9dsy17R2hFHBn1FHa1Ar7N2V3goJp6xeaJfr8FidzuJBVfQiSqutqHc",
  "key27": "5DSaZw4e65T6RpBvMTS2WuxV4saGWSpJhG9hDm6MsMECxX6xBUqomZzdFaXfF6ih3AAXgndhvc6GcqHnCbc6hQiM",
  "key28": "5NeHUBC5Ck5ANJ7tBFuje3Tk3xEpFxEGfBFdfiZmLtXduaxx8t99TkRPoTuWCJhwqwMkPXg1ChCeg4bpAe6RDF8d",
  "key29": "3Qb918N8fZRRaBdS7pQvTQDJ5KP9LArArSs6UXkurfZzsGjkydaLz8afNFPy71Kvv6t4cLnDT88Zw3UMRXGxLpj3",
  "key30": "2GBMZTZdLLbBj4QqjYdpG2QYUdSBNsdCnzjLQisYZkrxE8qBGfan74ukj2epchmS6WodctTHZdVfi23q2wv9C2jM"
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
