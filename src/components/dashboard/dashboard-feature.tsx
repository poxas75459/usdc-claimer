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
    "5wwTZ8zZj5x1ZpXCyQ1BqWumQ5iM45oh5nsyL3LHfVSeHcbuk6sUhzdYpY8ffiGu2fZtbnEzrxTZzMLFizivnRjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HiVj99LBu7FqgbjQ8uSVdrXHNzFgf6m57hhGb279rfEFRBxn3nEQEQrV4EzGa7fwpPaaxNipBjuWUrcqtH72T2M",
  "key1": "4janF9t1VCjzfXegXNRmZ8iJmde3BoidXXtnHP3DZeCGaKDTybbPFUEriqhWU7eywSvKq3xhE28QjesyrhJKTkqE",
  "key2": "xmkL7MynywcV6gAtpeEUNFS8o4MycAPWLpJeRv2ztvjfw6HsahrcDVuX91fpMrTUjg2YNfDZgstcA4dJSGxeiXe",
  "key3": "5KiwfDihsbBksFwbj7Cwt4DQZgFjU3kzmRJF57mnDBhAHKFryeADQrwp9rms65zn7Jm23DeX5JiCYscJWRGetyRa",
  "key4": "61T61ko883hJ84kRq7BT9Gadv4FnTS5Df3xqghqbcYnhc7Ux3QikABU5M1J98RmcG1D9pFbMFzgjwkKo3cqWh99M",
  "key5": "2NPP7w2ce6yVbBgb53kBiwU9AJGf4kYBr93ferGNVGM3QxwpBb161PytLobQh8EDHqm8WKbgXju7xTVAvtYFbQVt",
  "key6": "4g5sztmcctpq7bVrRJDgg9gP5we8XNnjLdH69SG6YPC1GjcKzSrLmdi5fDvk7DcpYe4kjwiNxo4CmPR7QwLbzKfM",
  "key7": "QWsFrSkeApWZZk9t2hnfyg167pqaiSuqdLxVShPFAuR2Wa5prEnHvt8i5DT8B7Yo2D5iJeKMwpseHo3u9bg6WvU",
  "key8": "5d1HGNJH44UW4PtFQp2kXYhpBJWyJ77TjpGfXcg96at9ELnep2ah6sJa47pWNUXNcqQjWVrGypknHVUbrkR4xMTo",
  "key9": "55oEt1br23kKR4MhUezuKbwFXv2gYxDSZ1LWt4VU1kjz2Tir5G5PxJaQu9dP4ZjZPra9vYHgupMvJf9gcNjyxB54",
  "key10": "5jyeKXaa9mxgr14U9KdQ6axeaZDh8661T5T1uL8z53E7yB9CMxRFpdgJzrXUZv3nnRdSxFpR18mR3BeGXVWh2jxu",
  "key11": "4z8XHeTUJxX9XtUTmswmmnDHTp5h1QKCGVd39gNfV7yi4ChXM3SYoNPxmd8GYuahe8pyVPyNbqioSJx7t1c41zVH",
  "key12": "3GFmtvD2KAEUwAerLXb6PTtARVcmBHjQ685K2C3ZJ1hKMC8GMbrmc29P3uNLGfkVnGNKcPCsQMVtC4yC4XSZzaY7",
  "key13": "2YpdL1r7CdTtjnYUZPfwhUQocfy3g3ZfjirJgjrDp5Wk8TGhoobVgPqPSiuPfBoAyALsR2W8nfqEdU5aFho3Pt4k",
  "key14": "593ogxkqNAiSUgR1xcmbK414BPNyXcXjreceYhuKMwDFYbiWW4Jq1g4rNPxRC9qujhtgFVqts8N6CqMvf8xdPWn5",
  "key15": "61P79HDh361BBM3ZtrxYNDmghVvWGJsBtSRxeWgfTeMKmu3ZPzRbFcnBpg1qoUDwsUD21H5tbBMQwkBRGZkrkhEY",
  "key16": "3DLZ9vFa2SvXV6o8db9tK6j5ALwh2kKpWR2VVUAdNEVWkrEzrTgwKVqSPVMgYQVANA25GsLBRerQvBJpsnns7Rtj",
  "key17": "33WyXVMkHqJTsttZpygkf7n8yw3CCfvvLkQFvLVb3NSNxL1cieyDvzeAVvSdwDejXCcenYnUtsXgCSdVRuW1hxbh",
  "key18": "i96ZqJJqDMqYdXFBun2ubaQUcC2RWg7F6UtkhVTkwKy5HDfzibRbMJfQBdaViZP2FGcNBx75zYQtjxzBVqYUjim",
  "key19": "3Pr8taMCskszh5n89DWuwepRsakysjw8Ggk2UdJGT1y9GN9FzwPB4MWftGiYyNXy2P8kbWLXwvGdTfhe8TFwynBy",
  "key20": "3MgpbmSNLxHdKVAVbo39DS5oGYhJs4BUbEbYzUqNVT9vYF5ppF4yVSGBL4zj4YMyFxRENd14gMEdjKDhktXwNgwL",
  "key21": "4F3Gp47xb4LGE6ipAJCmE1CPumWNuMQvutKdwDLjqEDs5o2UQnaFmxGLwcv8MYhGT4Thx2WqnS1afSYDaGcetFNk",
  "key22": "cRFtKJtXCSoXXK2tpRUzeEJoGaJRvNxJFZ3dxZkSQbbCQRvjSYXF6Uu44NQ3asnm8a8gSm6oqJ1kbjtH3A9MguZ",
  "key23": "r2De4QJP3yqUk2En8SpeMgshQFo2VYiYEviGtFAVnKwQMzMLyot1rvrxTc7aUE69BfGjhR3MdzMBJKTmWAFwne4",
  "key24": "23G6RBDSEj9oQ48mKEub2TUwvmK5Xz8TaqDcrF1jpeqiTbVKrKpN7jFtpKzRxiGQrp7KQ4P3UqS54Yk6XQTHvRkQ",
  "key25": "3tTHQzdTxE9GJ1pj7kqjPwsgeA5b2Hc3KsdSTpRN8KKt1TvewShPrjcf7EemUL5MzfYC2qigJS59JD25vHr2c5HF",
  "key26": "2wGXmy2YgiLek9fLfn1EGAiHNiyCMwFNpxSPszLq5CBNxEo1zwgAgmWrG7SfH6XMVmVtqoR7BeBGTttu68URomZ",
  "key27": "64QTXY7KS6URZu3jPUgypPz45CwmBUGwZ3FnZ4cEu7sDuzfNT2UJL8syedHpSJ4Hom5XAMcbpUQaaVZx6de491fH",
  "key28": "4svBRQunafDjXzs898DfkHhha2iNejPZZxni3FKqjP8pnsThiRYR1nT6T2uax1V8Bkkk85dX3TNir4mXQUmHNuN6",
  "key29": "5VSuFV3CMZ5RHcnZZy636tedF2inWQyThB6nFZH5DfLYo2cECq6XoVoEmX5ejCXfLPX1Cbt9KzrZMTqJFvHpqwRT",
  "key30": "2dk8TaEaw6RmtpsvxDU2qjsp83ysLb8tc4nPffUS45kpZ3J2QXy6XMVLVTrC6NMqATsUZbKH1e64BzzJaSKDAddS",
  "key31": "2jpd9142ZJwcQKkNSVR5PteWZMg7S3UQ2KPxmozpZjiMLk5ZtAT3Tt6S2gX1tScU9r4jmpVw1KMXNmxv5mX2r1HN",
  "key32": "j6ovP3veYzyv6r2xdF7u3GqxJSB7zsKeGmLNGJRnLKT2LgvXUDdaCFxUYdrMovGtMkKhsQQbioStvTTtVcRDr9H",
  "key33": "3TTYUe39zJL9zuYyqCadXFs6SvHZ2gWiUn2QfVxhjnj8jQzDk8pirCW6AaSpdb35tQRagHF57SUmMhVEzXv7eeZL"
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
