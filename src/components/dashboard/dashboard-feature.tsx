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
    "2JLy33G4tepRcp7E5KRXBS7D4yxnHVfE7mrdDRm5TUDamSL5K1JSwoDhKSEMJtCbNa5BF6iR94HC6XvTrciVmVe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPG1qrz1x2SfQ28FkTYEBqAEqGtdbVRxHhtVpSrmW1CaMpYCmvXUpEaZEHgFCLAjG3vtXt8Hs4N761V758fgD9Z",
  "key1": "5i9im9n1RxUZKJfwToJXfUFURRR6Xw2FSxLKRcJdTTMnAQodn5MrKWJRGdwFmsTKjUrKfTHnKvoSwqHjbrKjpHRh",
  "key2": "5xjqyZCfPkvB5mHmEJy9duP5jbx4Nomxh4iWiYtycMvLBGVrqnYfn4ARN8kf5UjEfvsHF16qMYvGmJd4ymTx2Zn6",
  "key3": "2xYGFgeWHgZRaZ4ND1GfGqCAaMa6ZrrT1tE6GXgkKXd3pfVLVo1b1pg2iNAWDW9ABWzDZZJyXjK95yYz9jD1pXWG",
  "key4": "4eKX9qZGfLLNQ6m2L1oSVUSW5cRDLuoXmAb5AxBtKwQ8VMpWRDMJd7DYQ27wmjhCbg9TRZmWwpd93B548BhSNfZ6",
  "key5": "5R4CqcfKKZXenq6ruqSz6LNjkyHbU8p51E4DmkfB9jyB72EaY5SPvE6c71UFdHm6RrF39zH4F22dnESs1LJPnF3J",
  "key6": "25egKcYirXXxqgfYpTfBMqDBBKDDT6wscKG8rCk8zm836FLrxb63LrGbihSsMhSsf6xNm99VFsHBruVDTc8zn4di",
  "key7": "2gs35qx98ca2zrXtiiAka9rSrVNdggsUTN44Cr2ks3U3VuyC3EHV2sj7121PEdckD4MEcqbcJ8H9jCHvgB6ekoPc",
  "key8": "57QBUeACe8yij7nZd7DhLfT9DNqsAJrhabLXzv62mPebyPSZPgnUYiawC7mGXi3DNA2HokYiyPsZDnkNCxdo2WNF",
  "key9": "G1Mf3qESQqpAjRP6h7f4RHxy6LfdB4rNpbFd6XvjMSDt1bPWEGAQPE1w5cHcySdqjcKsrrp7wvEcQ7zyTow5QVo",
  "key10": "4HFSSfSGcwYxAnKj1aZEMcDmrSDrbmoAoJ1zbhexhjMJ4vAjdboJXs99w8gJcduYGqQp4qt89sjAV6NZCzpY4dYu",
  "key11": "P74dKvx3f4yyC8sMweNfaQscCBACWnAvrTpVLczDz5pApYfpEimxwUMBZSwRGuVjXUoSZApSSvZufFsgLwTWQBK",
  "key12": "eKHguGGCnY6dMZSc4cvaQXaLuuBFSEVYH2UpXYvsbsXvqLFR8vcWVKVBjMkFuf3UJYKcy4JLtgzgy8n2WoUqbgo",
  "key13": "5Vdft7vmCeGpLLfdwMcTw6UYKgdnxNQhmQL8rqse4eFRSfVQwvPxH5orqjBELXLFD1dYCJWrXgSyQdKZy3RCm9MH",
  "key14": "PvuZg2wKjaNZUCgANasdtgZazY2HmosT4STJA9PSFPN4F8emzJ4TYrcARjUp22dZcLyumsbP3GtQBJcFzMLzyfP",
  "key15": "2K9DJ1ToEj3YFxGEFDjMe5D6bNRaK3gkRZEbgTK47Xj9YJBnviU7ujYd2jj2rPVR9q7FocidkQEeRxoZhgkujNG5",
  "key16": "2ncgDfiNVMAdH5SYQtrtz1iNBSB6cUryQHB3trwuix75DEjc74zoY7xq6jarrqb4Tzdy2gEMGT86SeVeiUx5qErx",
  "key17": "2teMF2K7frRrErMU6qdPsM3cYGajnPvYbcg1AHbijXaVN5Jd2y8fgFuxYEGq1PP5KTFWoS4vbpLQWJT52KwMHA1L",
  "key18": "2tdi6hLGZgP66y9iEgoikqzwwgkFyCWzPogBTvhZnqbTZrE12RC6TNtCSjp1NVtWNHTxmU318EqB1yDXusDAgb8s",
  "key19": "3jtyZezZBwXqRCmiiwpZ3ghMZ9ZwikbgiY4E7kUapyM3g1PL9hGNP8hjY7XMAKFzU7hRzbg3N5yHVtzdcQ47L9VN",
  "key20": "2rFkcFCwNAsi9XS6M7VoESHCch8P2gvvfoRgbPw1Zwi63UcxNcuYqGtM19AS8STbmbtwaXUE3rx2K1MAu9ZGX2tA",
  "key21": "3qRAxLYabeRZhx9yyVhRaaoS3LRujNPHR6Rvwih9qwxu7YB4EDWj4Aha2qd3xVaT1E5ym8vqcfAAdHh5zAj2GR17",
  "key22": "494f4vMkCE6S19QCRdc3RVeG7QYJ7e6dopqvM3vpYdgdmQbNTSqeuR1vsFCSYKx6noNDGZ33nTm4RrMUst2snpkj",
  "key23": "ddo2R8ntj5sx8kLoV7SiWPX6H8mtNLwDgNJtHsmarhsZPxatQpUApFAwqfdV6JLdGhDoxgBgeUrDJTFY1hBJYkS",
  "key24": "LfSQEh6mcLnkwq6KD35c2ktHqvGkQ8zNiQmTPQYNYajDmwongyfs48nGoTZFiHKfGt9NfLAjwZnJbBpsPi5n7or",
  "key25": "1x9NPo7YFYnL7qXKywd2FvUafRbou5pcaKK46bc7rFVpZw2tsiQfpQMxHv4UoqietVwyAw63U4YzLp9FMzWVvKF",
  "key26": "5YnUxYHaga6wTKmVC6otvQ9XWw2yxfZefV69cChJ8Zo3mNU4gkbvJ96qkHMs6hYS8W5U3dpg3TTdnr7WXrUWgmvs",
  "key27": "2W9LTvtpkJaUQdHjd5KyYhekdKCw634ndrtaJipQR7kxXecYQUsxAgRuMu7JwQLXvmbZR7sCGonPqkzkSWZUTjYx",
  "key28": "C1bvrKcn8hi5XGEcgFoRePNWWNKZXFu2h9oiFbmoGGGdGzsVRV8mMKMnWhrT1roBUYNmxYJi7jXah5sCFnpazhq",
  "key29": "2tBJ38ZguehqWRyiZ6eP3s9Yfv5ALALG4KJwGiRqPjHgf2Z2qPXTN3j9ZhEN6KmZSnLUaRLWWWSD97He7odXXAjz",
  "key30": "24vijkkYeHAAsxqs9ZGR2ur6rqTxvpWKvhTkK9HTNirPinBd2itUC5mm4Q1SXTXW75ah5w9M4a9RH7KgjRAa2MNk",
  "key31": "2qeB592SzSR9p9pqRDQvoCJ4hKdBYzKp2U4QcH6vQrETTcQhFcPd48y2Mm6NKdFYZv3iKEgEioHTmvDKFPN6nTiK",
  "key32": "2hiiycNfwLVm5KVdwpv4P8XEoETocQi63dAKL89bP76QCqZFKJ9bBhUQj4AA2r4kiwJtfHJmQhuqBe2QCYgpgPuU",
  "key33": "3k7A7TRBYiFLMQowe1iCGewBhpzKuZXYRdvNosdhajj45fLTPjoFwuYtCtXuUum1oCzJehkSEF91d8sk8g9sHKpj",
  "key34": "2ozcz6y9GLGXHVQnYj9Y8rh9cB2vCzZNtdoZJEF7fskYXCE9JHtd1pmpGa26xrLKHEZJHtRJHZe7uXKs4uq583AB",
  "key35": "63p1rLLPPVLferEewXGdKbJasoQBK2nwFsVSPmw46uxjfF5pzcCeQcynLug4NhzKm4miDQYVJgWAxLvXV9wv4QPy",
  "key36": "3KvZnLK4QFn5RX8aWNBgd1xZZTaG7vib5wfZFrARTLEC1zaE3LzWGYsYn6Pqz9HxxrpqF2PQJVTJJteqN8ktu4K8",
  "key37": "5rQC8HoCpVgHfUWzPpGdmUNVG46Sp1NgkcR3v1pJ61jV6HnztmV2gZA3WPmJ4mXQTscigXZWtuqTBj8kg4r3Wke5",
  "key38": "33j4Z4SQLE3MRLE7sZ53RnFt7Z229bBJNyKwAM9kCpgTnHZb47P5gxobtLjVShXevBsw83ShAWTBeDgQdgvUDakW",
  "key39": "J3zWFobriqBVSvcajLcVGzR4zabujzo5f1ABS4oaoQuBo9wH4GyJc9C9FqMXXRXx7EHkSSLSjst3nUBXWnthw9F",
  "key40": "5PePcu3MHwEUyn2otfgJ65bq1XzYM5U1VDE2aatL8oKDrsibp5FwFZwYzLMViRZcoZAgWZhGpHSobjfZGtiqwDvS",
  "key41": "525gbWtSMoyddjeQ1iycWS71iuGPCxuxhegohXaqX98urSSmaqzxpfzKu8K41Fboy7PhjcZjoqR57R64nK95thnu",
  "key42": "579yWkwS3dAd7jaSXu6D3fVeHjHtJpeCnNcZFnk692ZoeA9T3cK7uSCTunfy2dx7BJuJw2Y48WB49RBrdpT4a3jU",
  "key43": "3A3Vntst9HEqz7HAngesFgixaWbdAVLq77myDzyqqSF9HSNKCwsQ2GWwY8d1DTrk2DGhyXhBSWwiqurUR5GYCzXC",
  "key44": "3SpuuHgZXMoH8GrYTrnfPro49gHMos3L8diTrNAqeGdC3QuYW4uVtyPJBt5uhgBeV5ETkU7jVf2RVP6TNoTFmUmo",
  "key45": "fVNdpcwfsWCCpv1RNrm8yf3FSeLXx9mCgVhqoAXBvuCy4kHns6pxjRQhG77Ri1PYBTZHDsRDcouPr7PD6cBBczM",
  "key46": "2mLQgKmawdTgRxJeoC8QZg7sTuh7wY2sMxcTkTouBZsso7ENyJjyopUAhTd3EGgUp4jYAgCqJWZNmtxq8pCsfxSF",
  "key47": "4k6Y6pd8C4NkkN9Rjk2meyZZ8eTZQZgPpif9bpgm4ArqKHDCSZsJgML6wRyKw38TKnDTYGPw3k81wr6hmCsvXE6T",
  "key48": "3jbqbWibsWeMgvongdzAMPKPqnuJD8MMERSppqSenRJMT7hkM1bnZYvuK45ZZVV9QFNX27Gqp25xCm2CMNZ2yP2U"
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
