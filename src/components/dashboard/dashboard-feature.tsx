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
    "uQ8ru4grRm3V8riwLF642SRUke69Cu6K2FzQ6f8Jio58S5qViQ3Tu1HzASoVomv5nAjw6S9nVwttwe8RWxd9F1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WE8EcNniHt6MxXsnMRRsbLx5HHaurfXLc8KXXsGq9tfHRcxRLsSyGtCcYeGo5KcxSof3cDcTMW5ZGSJS8ggZ5bU",
  "key1": "4HkFYBmnBwqeRBHcm612mSLwUvUqrX7TRd8mvnKRtXMiTY9Er7uq5ZDFqMTEXJKpeoKaSci6zKr4cDUBShbCvok1",
  "key2": "2LGjqx6ap82uqNZHZGriVTMPz5GvnZ9Rj7f4iwyRWrgyvkAjCgLkg5TnbeetRHZnhs2Hh2e2hD2yPGHjMbwNRa2o",
  "key3": "2GuMsSgHh9ok5zWemvkTcivcAxfDEizoybs4GbecXD6BUpzbSFxsbJNNYbsqXiX7myBxNWuGvZZE49xEvU12wYKp",
  "key4": "539dct1vbqmAc5zqmuVAxtqnNbRHusNu76fdWKYc9uEaqFx6NQEVKANot46RQZ8VmiQbuyA5TvWjXWR1iUBc3nt1",
  "key5": "2iYhCiQyt9LQxwcTr1p4fCFHvFzHYJg2my7217qiHmH8io6nmu7b9jP3Ph3s2UgUirkMdpf9knxLfJLbWqdQ2bN4",
  "key6": "5GZxUCy79KqRpqg8B39j35xYpwPCjm2NznbBhaCE875p2xa3iFUGy96XZqoWdsGZp46omGqq7f2QiRaogz5mEkyf",
  "key7": "5vv6XSf3ZUMia4iicTwvoBJrA73bbB6Xq77tsL4nAfmAeoJeAQF8ypzyFNUy82tzZfVmfZrSxcZ4AEckVBz9pXvY",
  "key8": "3vnzhLa7z6jDYZ4RncXSj8qGKjfCGbeiz99NW6uV36FzApKcA752cHUH1JTKTne4mQCxsR2v1w8SsXvxVJMiNpMJ",
  "key9": "2wyEfZjhGzzn6FWMQty5DV4NiUhpaekTJSY4UsMScDLPY7HaLuyaMDSPixK2AAM7GJ2xaeWarAvcNey538JsDfE6",
  "key10": "3Kh6441EhQbajcsyceoprqSoQ3PsnvxYHqbVHRXjNMMR6pV8DRCpnCuxhM7KEYYpERE4tDvEQ7TgYwJw7fTFSwrJ",
  "key11": "2bDebDSKWkueJPwepxicgykmNPTqaSgATtuvRjisxQue6kn27tNsVLmdikSmQtsERSTsEsAQbszQbGkxKU23xijE",
  "key12": "MXaFV51Fbh3osBudVUm8eb4y4UCrPWS9uT4th9RbiGhZ2ZPbxnbHftRvbtpGsWLxQ57v2vhjfqSAzpp5SMaGfRN",
  "key13": "5Mo91oaryeR1armvdTTNGEzSFdMUJP4gf3sBA74UzAY1a1kpmw6i7mmEYWJazqAnn3zXeJZ8WfY884LpR5nG3ASJ",
  "key14": "3Gb54oU7kxNnXsDtq77XJ2SWWTGL9uw6NCXdSoazRZPRwY8oKLBWy9BhZE7BUa2T1u8PWz7EDLVaEfZbNUwymCnC",
  "key15": "2Ssf87HAKUgL9vhBW8wZdNpE1UrDP79eqTMnmvqctmAk8K4vZ1vjwasN5L7kJB6hNG3i12yoXPzBgcS4dL1Wcgpx",
  "key16": "3tNnVAoauSFYyzJ7byPU7vR282fy7uzLVfyK45CX7YNdHcnHDwLb71MM2RWgan1v7qe1wn5qYSBEYWxgbZt1y9Lv",
  "key17": "TeF6JeAQynf7u3KRC2xyRrxaKvmUcxR1dDmmHah81ugvYJNMBszuXQDv7qeSoeCvTbSTW9JSxZkNV5MEhoMtLYv",
  "key18": "5YjAw3ri7VW4oMQa1yAEEHvQRTbZVzPiNeeohqRxy7jHksvG3aR8SmQDt8vi3qxbQ2Me2epoht8R4MrDVHYMCACJ",
  "key19": "3qtbFjxb3z8GJdUHELV4ARvxXznW1h9FquffxUXuWKU6YXMy3FBQbYRntrZURtd3YVSP9TPc5orHASsDsxTnLVVA",
  "key20": "t5mHuwipmVLQou5AbUoWKSq1F16WJpxu9vcByPh3Z8E48oFoKRXaujzSyWBCrkESBKiipzRVaqtUmXqhHuBvTJ6",
  "key21": "15Y4X2kxyRXD3UdL4ajLVA6NJbor9N91kdDcJjiucr54WAFxkwezpp8FpqtEpiLJ8Rpec6eULDPDuek4uSNqyNr",
  "key22": "2iBtySh37yjCaBP28faaipWThmmeBXqgVVaTasbqCLaY6ZASsMcPHC5JgpSzukvZv4J2TVqKLTqJjfgU1kfW7TTa",
  "key23": "4pC1xWWBUiixuyopmLDrMBKVFXCWmdWGAXNfRy2seoSDr7aAFVGqNUMcqq2M1GKgZ13qJ35m7iwKPgNJVNwNhWwf",
  "key24": "4Hf2LYp9DbP3LbciDPyiP9Nb1eH1yrVLk6JQeYGMi7aq5AoPSWK7hPfmQxJtXBQk4ZuGNDGkVVjCLbNGPt6CunHU",
  "key25": "51eoQS99RoJa981dZbWeCvHJVTMxTUECb2Xiyy1Mf9GFfEycuWi3LfjaWj8G6b182YLxqNLQDWK9YA6x7gaXEFcj",
  "key26": "3kLV8fn9jrTQExuPb2LMKapga5Nt2g3Xs25xP8iTSmD9zziudGhKqU5WypCAJTwjrRhqbc1bVQ1SeuC5HTTembug",
  "key27": "3u553moEDWhmqJZgaMurjjLPgSnCkFPw3eBJFGQygXv21Nari7tE7qkC6SYrNRQ52v9NM46coUYBTYA51Wu5Ki2Q",
  "key28": "2kYwyzQ3MjawL5eifsAEeGRzRrRiW7etiap2UwkxyXYKUEyQz7fUNzeYd7mZXQN8iebkhBSXN6Wei7QoWVCrE9Nk",
  "key29": "2TdDBuoCsHRmJ2zUpmCMY24uBVQPqhWLrEXWnGwEH57BnDmzXuYta72cdyyeb8yqThcZ6b7YxaWAX29XamK2Wi62",
  "key30": "3GkmqgweWgNVFVNptSAJVZyPXbt9t8ApJsPfzFw23nUN7FEiUkwSsDzMCcskUSADCyCLbjAkPnND8h1prfpfG8y8",
  "key31": "3vmZj212WzgVrTQ2Nmo6bMjzuPMe85mPPN5kX9TQv7fna9YXbiHPbuBYDRdNkT2YPU9Y4Ss4d472xohsRk3mU6cd",
  "key32": "64nmiScfzFn8FXgaQR49HuP3iy68fVaKxSjpSQr2uJEenVdqvsSwUpQ6xJYtmVPdyMDKixD6zchgHuANBvmsNHA8",
  "key33": "4J2exN3mc2d51xSvQAmr8dkuqMbmuRmCfRWpCFseNMjGWJHxGqTTxuKMvugizeNJN13oHyZFpscGejieAH3WGHiB",
  "key34": "2DGr6stiV3UUkLf2ULfSLT6Rg4xizgd7RDsUKDAjbx5MfV22kd142u6ZSKZxqgjRX58dtDqYXhjryxUPdarfi3xE",
  "key35": "2Y7rb3F3959C3p6Ua87M4CvvmvjacCqY9DarSKZeZvcMnK29poyuiX9Ge8Ub5RTWQgy9DUTNUCjoDBRvKidxEmHt",
  "key36": "3iFWB7t76XGovLuFjGwMvABUQaGfBDELUhYR8Xuy8hkVCoaAeqBaN56r7AVjjRh5bW4xyGAmtbGZ2XoTfnE8i8r3",
  "key37": "5dJZjFCgPhQ18QQoHqJdZ3Zobhwcog9ZvodN85Hi4d2AehheF6nVmmnCYtBcMKHoMtCMQhofzNfrimwmoC599uWM",
  "key38": "2jWNNpbyA73Z4d2YHCs6D9ZYAaEoifuzxBKKxXKZL7JkJJBnhuyu3MKt8RjMvycJUpLFKw6hGcviMBEeHKs62i8n",
  "key39": "49GARzcCQxqSvmy1WrcaRbVFmHRZHvQgzCSJ5hnT1Jn4S2NM4yNEPbyvT7vRD3FVNYvmXKEESF5i7ZaUCeD2onfs",
  "key40": "4X9tahLW29SduBLBX51TRDSS8vKQi3ekaVb5dv3fTuAADTfYRsDbRAX2UP2berP9iStk7pH63myTEHY6UN3wkXjG",
  "key41": "5kXrKvaxsPvvNUZHuGDVBvENRt2787hUaY5t8VdpyDCBAai773aHXLxCxVNM3jNo8D8oTginGfihhc7LugL52wr",
  "key42": "2vgvtWndKoD1qbSgic2QoTkhgwEqH17aXn1HxiVAmiAXMjWNn7URjWbHWTYih82MYcVcmiDVPTRWPLKm9kSmdRoe",
  "key43": "5zBtF5nxLKYi27qykeoPdXwU37BgKrv2hvYyEZdwzgWSERDSvcBCGAqQZdM1RrAuxhLHpBhyieuw2mhs6RpCst1f",
  "key44": "H8XssEMnnkL5mZryUvVjZ4oYaM1YiTLf8dHCveZSh6xtpiMTsCDod8sK2W9ngA5qmpLLPdDAfuUFrVT6P89EV5a"
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
