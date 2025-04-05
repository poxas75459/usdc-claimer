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
    "2LbaAmXRMr2TxrvetB3vDHZxvrFkSCTVCW4i1vYDFMi79agM2SvMaVSyqFkBi5xGY8hQc7t5EUa9Sgf1TLdz8cTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWN65i4oUyo2aAUy9EjceZRxEjGo8r1qwMa9tFNQAx1PJHGW6QVNqKm3wL22MvYyUAcjX78v2Rq3uVUZDtQUByQ",
  "key1": "5evo8WcUzCKD33qeiZ4j4zudnw7JZgq6L79vtgGZiBKGtvdDUQnTCZbxo7pbXB8uWEmEREhAU2jpED5eWfEKtpTY",
  "key2": "4Y8wCRRTTH3zkmjA88LdU2HFSAXLzrB5zxbvPE2p9KpxZ3SSsXZGHg9R1ADwqyq8RzQf4WsrqGjfT4tAbukBDHeT",
  "key3": "5PXtfo2dAkQSTEaBdZPRRWAHcLB2TU8dC1w6Nx63wTWk6zfQ6Vdfdp5YKBEbRQrEvN76B79mMLih7vSoLR9HEAmJ",
  "key4": "3gugaaJzPh6zShpr3Yc8CAR2hVRBuSZGDZFWfG3PnENc25JotgPaVtmZVUChVzt9KsuJgR9U2MtzM1r6BnmLfcQh",
  "key5": "4Mpd24fgpGt7DhesFobxDvj9DzSomw2god6UuqhVfJrJWkNhsSUprN7AnyhqH3ZLVMgeKuN21sttkwA2KGzcEi5d",
  "key6": "53xw6cNNPRqaDMfgPF7PMXcHNFGEDRTHrnk4rRrTCgSYAUVwU9cWL76js26HaLhpE5DZ3UBFutbmEXHFUijS8jsQ",
  "key7": "2iyHdbz4P5bxY1SdQtWev9QGadoxF6DpMWtUfXAUH5QDT7iM2zo4LfYTQm6ucXQewvxkuRANVf2ovnV2YjrYkRSX",
  "key8": "nCj4JtPokgBtiR7QNGoNzHxjKAxvcJT9rGkNNbiTYxLSyTfsaPpiNmD618S3PDErq2WQeohorPdXqQvZUPEcQxy",
  "key9": "49R7BWX3khXXMi8drZfpNnjTfZ6ZBwFKaCXNqiZ4FBamcW1XFmCZHWkXT4mYDmhmXidqcpC9aoiDKASHojfm6a9T",
  "key10": "3BQeJvrbefVjMd51ikDsEwDXkVTjUJ2ynpfhjipvUmexZprMaFKvxYpNYFdthNHfvyUkQuYpHHk8Y1wP3vkAKEmM",
  "key11": "46XdV9iwBMK6N5BYjWDe3PDt8NZ7BzK2w8ahrk8G7VTR1e5jbBiECswaN7U3dfknRRTDoHvAzSM8fQQLnahX9a1T",
  "key12": "DXTyAc4xbywGcC3fF6WibEPT7w6buvAGDFNcyHmkBgdDnneZvYQqAaMPmuWY5k3pCHxuREa78hzbNVvJbFetgSb",
  "key13": "kC8xdXhsmRzCW7A7wGB4Yqu1d4rnX71vDiC77WUNYytUVrzfsyqggjmLyeA2heYrMCZc1v3Ufqsfix1mJRsexCb",
  "key14": "3ZbwXj2e7NBpRnpj5ezNkmzXgM2DjMTWMrmSfJueVDgC1x2cfLgEXo7xvogVNwL25dbDSPf3aJfRFwzrun66MJ5U",
  "key15": "495A1hQfqU9EzPmFPLYi9v6KoMjRr7bu4FY7h7JhHu8e9nVJpEAFwUpBf12crm61Sx9L6B5yduZTUYvKZga4XGtv",
  "key16": "2nKMUu3GSTcKyxu3fTVnX4oFrptcegiKDbjaiYLgTkXXbQfHpmJ9PknRiUi7ELf19bTLSVyTA7yPzxM326XL11bb",
  "key17": "476n2HxviiQXFaZuWaNyFYKY9DGeeYmQWPVvii2HPvvXhtz3C23Qa7Btdghu6djevJNNfnfaY1Vq6CoL32YSAGAL",
  "key18": "59APZDRw25recrAVgyzPYCwNikQuoJw1gLnLg1zNcFeNDPAuUJPkDLcFyPynbuoGUHE7GtCBnnqVEnFKY51cwfNG",
  "key19": "2RnW2bhdKR9FvwCZWZ23TEFNdmoW3DaiUPPAX3AN76de3XeECFt4HFarP6ttVpjPTZQBKtRrUKEemXHQqZM64jNp",
  "key20": "49i7zUiZe6gAxmzFAKsGHoPJVjVrvAX7wj4w1Bi9YjiSrEZR9Km9CYufmT51b9M6hC2PxBRHkowehHdj8U76fesa",
  "key21": "5ews5Lxz4yLc42a2CpJ9fe5EM95icsuWaXrpxwYYqmZ711XYAHusTcQDDdQ32PwRB7zK8DS875uo4aayTGPTqFoM",
  "key22": "56Ksn3gR7vpR7fA22m31J8k1jLo9nyj3uz3Ksf4mRxzABuK8FU4yufkZTpt1BQXwoXMz5yBNRBnQybD5kVhE9k8h",
  "key23": "krYFk3TTZz2djkSrMkHh3Dw8x2EwMwYNA7gcvhHL6Vagr63NhiHsA9JQZBAjTtYvhm9aoHPV1HFQFhvBnQmJ6Y5",
  "key24": "5S96Wzosyr4f8SH4guzTmMYFveX6pWBhiEuWCdG9oY2HGvQEGuVM3q23CcyjQ72HfuauKRM1jpZqGzVNBsbq7SMP",
  "key25": "52YVoDtLf9BJaNo9bmXKPDGAGUUAWTLCGTqUuws9RQEpicm2T3RnHG4mR7pqcYBgWMJEBiH1658ciYzFaBy5cqhj",
  "key26": "2wigDW7aBbxeXpVdZrAVHwhAXwmGEkP1arHaF5j7NDP3VZtbbo6o86pDRZ4FDgi7ZDpf5r5fAcvr14HajZ48CJ9F",
  "key27": "ZNePQqpPsEoisGBNcxwgmWRmfzLahHDwB7rn8Tr7wvtnA8ocJqcpPLhy1uyvTJXeKPV9ydedSmHAHZ1ZfEx159N",
  "key28": "5fPp85jzsB19FG56r6BcXNotPgPXYTdNKHobikr9Wwsf2oePicJFXxC22PZiNempVFrUzeK4DJ5LQP1xzhD3yETX",
  "key29": "5vMohyJkCq1i7qQFMRaVe7myGhq1pP2TfLNHxThpLpagstKQKtv2EMr7PUu3u3sgzgZL8Fv16JxfJfQstAmbv7LS",
  "key30": "3baHjmoEm6vi2BWMK89WwkkwoZMzo3ZRuedeLEb8wvDFaB2xgppFuU3ir7CeUsxEn18s9bP3GcfETztJCCiU5U2G",
  "key31": "VHj3dq6SugAYNGF9fTwDzTPB7Tiz4ZbTw1qPQdyAk6X5jQ1bTmb5bYKjUbsYwfCyS4Wc21SbuWGa61DmxNgudVL",
  "key32": "3PZhoWgqZak61riS68DgysGtN4xi7aoRHCnicGHiKfp7wEHhkmcEC2Q7Vuh1YJ1VUWprohptST33AWy1arLyZgmi",
  "key33": "4yr8g87Cp1L7wrHf8tEtzLdwxMXKzqo1aAEyaiX5BW3M3NpJe7Jo8nmWjFmjKKid7PKCNbbY1iAFACNZ3srutpze",
  "key34": "5prKEa8mrH5eeCarcPUNKXXsVoQRx1QfSamffJCNjGEqdfvpPubosJsb37cGG5F66UvX9gwGGzptLXfyxSs72ebi",
  "key35": "4zfiho7PtGRTweq1gXY9H5qQZtnWn151uHQcHY89H7NvsBmz3naaffKUfdQmnDd3AMruGYANzRRbEaapaxkgzN8o",
  "key36": "2UciYCvedMqhkbih89MkA6nMZRDW6ck96ysgwaGV7JU9JXgcop8DaGdpdhzZfoRnQQoMw6Cb9mSewuFgWB8fer2q",
  "key37": "448fa6H4rv4ikXeXS5sdLTzCLGvix7bdBVYJF7uEQCvNkGa8BY4AwExUWdEuMfr6pbUh5Gw24dwi2DCQTrG4QQPX"
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
