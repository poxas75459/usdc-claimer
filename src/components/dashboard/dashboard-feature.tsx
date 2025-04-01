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
    "qNjpixBoSq625azP9f4H8JD9EdbTNvSPcsRu9Byh5rUXU1zXDKE7ErvEuMxRe2gZpSgYd5WSBQUZ9ns5vu85WTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XihUsy3jAWHCgnY3urfawwHgAR31PEb1jMs3tXTZdxY6DAJBXJ8zjJrKxduR3dwvFrHeXwNcxUMuhH2ffK6mf98",
  "key1": "538KNMrHbisnueRt9vvPHNe3aMCxWSrcDgbEJwMcPaBnb78fZ3rc4RhDJdApGqdPqCfHarGf9Si6TLH4gbef8y3Z",
  "key2": "KX4yYXpwEacyNAYQ56VPPdqcFxt3FoesJGUbeaxdS2mkc5jZn8yrNu8VymJ2kMQNshFQLFGwp4HT9tRBd6vYjAz",
  "key3": "37W1ary1xdrKuMU977kWDL8bbbdhWm5j4o1VRfauWWu8atqtk17oChFnVvWqj1HfqmwZCyNMNMYgLvFAngWgAnCR",
  "key4": "2cgy8kTS93Zx5uTasJj1WfZbT73ywM81SjEWwuNdAPnKzRb1fhYCgPmrz33kQpxtiLDSyRVEUM2ZfBvG6UZaAxY",
  "key5": "4r8jYnUJHhrosESmct7Bupc9zD5z5Xy9muHwCPi597SxJrvNWoQmnJBjhbN6MYRWCfuGS68JhWasfKYjrmrr6xvW",
  "key6": "CwVJ9Aa6Voz5ghaUos5PUgcqLfhkeGQwiZL1zPK9VnmNnrRPxXXMcnD6o1dcHdVkLNBHjndCLt26Tgo7jFK5K29",
  "key7": "XWvRM4NVWisgkPU9shidm6RP9fHQkSJTw4BbGBLyD4ar2sbKfnwXbx7w4Gsun344f7D3WPtJ52xzECAX7hTxJsM",
  "key8": "3MFvuoL9w1wBwC6G6sHKXpS8L4xRn6meg9QZRwXSqEjW9Rv9eUMXcRVn8LNQqzrr1WsZzPNXckZM1pbbwsQhHnYE",
  "key9": "25HSBVXUdpePHPkrqzWsTvqgZ7WXoYou58cx6oRTSzxJAxiWRb9oe5xQjrMAiR2ueuQJU6md2rXHctLBzXRW9SnW",
  "key10": "2cWKUkVN1JzDq1dgNz86JZoFnEpXBJPRbXyiAdhAqjBD5NowzfxCNHXLwqjPCQkw1x7MxVmxmM2NEpvQs76j9q4H",
  "key11": "4WJdCH1fzgBJT5dvbaR19UP2kirsxcHWjbhoUsZYwmEAY7Bq49Uz1Kj5bZAwSK4j5AkMQ5zBuExGbXbeAdHALyVw",
  "key12": "5wfZDrZUfqTerzz5TQgE59u6drRhmbzY3dXiaUgJtM9WdDRbwUFSPZtSEn4HwXgY38ypnbMAH5RsWAatuW9AJQJF",
  "key13": "2gUxw4i93FgmACV5ui1a9pMSa9n4TXEnSdiF9Q4Ni3zgvXV43sJKUN5vtgjiPt6Lj3xo4BGG5xodGUHuKAMch7WU",
  "key14": "2AmxZ2vNLxNynqEBCGaQbhUgeDJrnjnYoGVgREr3uRYyxhr2c4YkVSxyNG5UR8FEcEoCb5F3ibNATGJuBCt2Sren",
  "key15": "2E7Rhv53xijavq6isSpU55QcSXn8PcNr5pzytUUfwpMRv767ZJRiF6YVyHGYdwmteotyLW8qHPi4L8CHNqRDyHQK",
  "key16": "22TmqYzQLbuc8DHzeKByNtWFM1ZCQvq9ahD5B6izg6buUGgXgsnSNBXaPYCEpEJvTbSTyXX3A79vG5xKkBrCyPS2",
  "key17": "3MThP2BjMDDoW2CDEGBgWD4Lk4Wdyb3KHcLAXAdBx4ZH4c1GJZ2ZkqBnWx84BAVQ7tJEJB12jNiDpm7oGYqHdHfA",
  "key18": "4kXQfmZEoXfPvqFn41uDLvFSpC6SWwt2twCzRkmUgFsfUE1ZP5Xc58qGB7izTsX9eXS38HjL8RDNRbNtw3vRVqVC",
  "key19": "wsmtwPnLmALH5EBxJpJwxycEpNSReSm25TXqH6WVdGyeafcgwjqYwZ8EeSQhpgK21mGsxuZMKDdt3ZBo1JsythB",
  "key20": "4fWwAajQ1ZsGnKx6yqvqFdu9x9tWxgAcrehaijgFo14EWhh8KRUGE7Q9d4tHKWdDcu8HXibaTACpgjPf5CxPEaTg",
  "key21": "54f5PbrEgX5CD9uAFuBVyyQJT5BZj1WdZVAbeyEDxbEpEM4UiA9A8MbuYF1pKGBAc3F49o2uGERiDBMqQsYMqfnx",
  "key22": "fH1KtQ6FZ3Sdvoctqiw6X8KfR4K86ioRdWZGAK5BVwEGiWuyB6dvm2GgPKGQ6gm3uiiYb3B8S4ru2QUPhPQ9tUs",
  "key23": "2Y7i6oLatm4i7M7ghTx2Ty5jLcxCz3LGDCoNBnPPoW2z5jS6ZVpj21EoVMG14sRATbqg77H3CtpTtgW6wPsdTwVo",
  "key24": "g7iAg8SiZbmDd5tzLyqY4srEj2TE9Fyuk3RuGPHvKUfHkCArMYQM77uBx4xzyJXLzGhGKvk7Dvzth1CAq9ofU4v",
  "key25": "2TJ2ebbgC9yZfCUtnYxYK5VxHdphzzsqDrBazrrEBxKHJ15KicaHbgsGkT7Z6uiBybR9gysmLCyDwp7wfbDiW3ef",
  "key26": "5gsMvgTii9zHW9Mojqtv6opZ9pbwze7xRKzSGRq8VakkhXozNfG5jPSo3MtwT5t723hsQKfuYRT1rfviPXJNqPoW",
  "key27": "RB84P7SJnjg4a469WWpZcVnPsrTtikRL15fv3QZFpeyVMPXtYNuQD2L2M1rhx6VSPhsMHPJteUmZD3VpmgU8eFN",
  "key28": "2cEWa7gkKUpboBMZCLcj9hxVaLxJbkUccV1dCPfugZ2Cgi4yhYkESPV2ESELXbSQ7K4E2cS8PdkzTc46Zum3MJxr",
  "key29": "4VgZpKJUWvkxaNsr5C8rg7FoH9kjLzadx4M4udM3uHcaG2hECVrj8rDWPhDJwERjWVMxKUek6VwoWNn9tLaK3TVP",
  "key30": "AWbtVoASjQdw6E81iErVmRsRSdWv5EATmFBU6m27bmDitoxL7X24y1mtKAehmuejcy7tRGCt87Wz6q1iHTFJyxH",
  "key31": "2YLG5H3oiCeQnn2ywfQ7yZMAqDCd2N1q1KyLrCcVRqB4seiSrsuKo4yZPLuNURpFjq5FrY8SCRtPFFL5K3vLzcwb",
  "key32": "4FkjQZ6QEzRZbeKWsjs3QJ4XhiTfBFa6Rg3chRagdk4JyGWkC1gdCKFw2ASf4fq4eaMJgjGZT43vswisyBnomvGd",
  "key33": "54hMnXJfsuFAKnWVAWZDYtGJ8KvCfKGVGL6rb2cpgiGjtKAvDkzV61QNciWSzGF7puuygs2jmGW9c3jxwtTHw86x",
  "key34": "2VxLBLbVpsXLdJnQeQGig7mxxZaUKBmdNmLePzxe7hkvGdVphEYsLamLidF1tKjiFdvecnfxAoHhRcBj2z75x88L",
  "key35": "NkmRe6REKEnFiCWx8rBXfT5DMRbiuioe8f5VabzTU5VgLDVuexmL77X9Zd2o9EHKPvXURhqDUt3E6rCnYL73VZa",
  "key36": "4hnz54prs7Ehjr8xXLJ7p1FhXrzXhyjGoJLTQ2M8VTdBsDjtUBGHj1TkNUdPt6PHBcQH8KGD8dzSaEfzSm9XE3qp",
  "key37": "5jykvFWrUB59UXu5gXQHFULJy2FaD9kHG5QyUxyfr2RM7mX2zEK6hXYjGSgcqoYa1ir6xvmAJ7DenEHeusC8aDi9",
  "key38": "7TQ3utxyeRaH3CeZQRBkTi8q2fB66sdZVeo4M6N9NKshrc84s7Q33wS3tEFTH3rmQCwR5ELE4PeHf88U9hWzGDA",
  "key39": "3mrm5NPeGqpwg75DyCDJVs4fuMsXDWyoEmrnpcm1mb67ZLifXyq89GkXjuG4BgyaQHTApzP1g93BiEh9aLTsKM1e"
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
