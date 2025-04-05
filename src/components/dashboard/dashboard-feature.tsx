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
    "4g38yk4f4ikh3goGPq9sHUkNe1Q6p7D9AiaV7UW6XFfy38ggj4XnTxPonqaiRZ5w3SbRrncCuRbKQQXh6wkVXRrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jvou2uE6nj3hMsN4NMR9ReECj66Xj48qeeGtRrXEknoGHeRG2DqbmhmhQPd5FQsDtPw3P47SE2AJXwex7be2eKT",
  "key1": "2rRoG1vToFJffoVFDxxj2n3ohSUSSZ8UGbV8GwDMZYBbfrBSgM9B9ZLf7bzTyy4HBtDT2yDN54MYTFVPwnfviM3D",
  "key2": "UbJFi1bTWF1U8VrGtgoZn2scWnzhi2D23atTxu4n1B55hsvQxAXzD7dUxkFmDo5FYZaxUnZPpKk6BGt594wKgFb",
  "key3": "2TyQDJ17DAMPnJB9FyqL2vR2kYXFtGbeTi25eBtVdkWpwg2ohYtbgqpDuywgMGkUS2YR8P52bAvZbb5vpk7Pm4VV",
  "key4": "vfVSx8NxWYmxrDFSgpm3XdJLj9faTLWMg3eVqhXpSKBbpLWV4ifZREBhivNs1aecWbgt7CjbaF6rS7U2NjCrehL",
  "key5": "MLxJHD1dWwnEe3KbLJWHpUNyCqYiC3BAn21BpnjCAZ9j3ZBUoyQhnBry3Cijstyx9JqHP9i2S8Z8sSM9NjQf9NF",
  "key6": "4Dbry9FezEbggoNoPogSSfUgvDSbN4WjsNLtqZotVVdkFbfGuXPPz8gS7dSVwCu79oYZrQQHqfKp5rDzwGUFsstL",
  "key7": "3dx6PmvSjCqmGEuBRCYvgypRfHAFb723q8D7yAKFBjC5Qxyxr2GXv3qAcdwXaUPGS99gd5K83G7e4LiyTbkzTqgc",
  "key8": "aeoy5zckQWbeJpKa6RRa8ZSwzXDfj6iUr32kVynQEg3Eii4cbVNM8n35hUZmWY7GqgmM5yWhwMdihjdyQRPbKv9",
  "key9": "3WXyf4vzr4KLnpsukvMsGg7UgKrGffNE7rgra8Dp6XShxbLTi381i6Ua521JqNdR1joQ6wJtqk7fEvAxchhFHpex",
  "key10": "321Eazy8ho9RFahjStZEDeUzJTt4FSaLXNhYtNuWxD8gX3mpEPPPa6oGsjPD9RGTxqdicJ9727DjiK3BZQ4eWCqc",
  "key11": "3fxcgzXY6ovEtXJAAk52cEX2c2Hb2hw7RsdnLGXbM9GPEzpbugM9k57nDeJTqhrCCaE4RnZqq6fL2X5UWDdZ9gt9",
  "key12": "3dKJCySeWFXYFp3SSNGeBHWzShGh7nSEjLx82tuYacXAGC2A5Q99qRoyHyuQvcv7ffwvqnz9tQkkeX3QU3CNepeg",
  "key13": "5oaHVHsPCPpx4XP4x3Dv95qbL4Y6J6Lg3EzRJtVwc7XVsugmXJsJcFsMdrSgznj4gfVVVE56962hXinPAaBg2Yab",
  "key14": "2DxwB2GbSFA1dmWvU6dqoryiwggo4RhPpBaFQVcHopCWtwGx8p2Zz38oBbj5pi5sYiCxaxHjsBGCawnrhhifVcWD",
  "key15": "4DMfjdRgCtviSW69iVRJHk1PEQzRCEVWdz1bHPUoC9AVYeiUgRxA8f9KzrUhR4iTZsjaUwf9NgcVxcojVFCuophu",
  "key16": "NJX69RJYFCGajwthXjmG81dMkj8JxjqkBQmx6rD8NVMqnn2LniVtVxb2ET6AYJRnjyrJsr1ehrpr4nJ698KfowL",
  "key17": "4JUnvXBZ15WgxFmKnU3nY4oTFNpfCcVK1aPYL2hQfMdS2kBJZxpjGkzzjWUdrdhjtG3LDLdo7sW53Vz9yy1Cs5oa",
  "key18": "3U6QcZTpFCfyhu4Y2mwwGn2WXhRTybDnSc147bPEi9gPm4oEncwfMBB5meSpJsAFN3qAkVUkhSfGaMyH5AY3mSaw",
  "key19": "4xaxnUxuTH2tQTmoiStv8WnamkuaJnxqhK2SYgHjizYCDjU2oRBcDv5bzhJnrgp6dymT8w1ymQ8swKu5USwgqgdT",
  "key20": "5w4jZbDnkMm73rNrfsuFxw3ENvU6NztjfDCRiWUQ4D4WGKDoGqcJu2NCVtLUeLHwsSbiMsTooqqAnpYXG1i5GGDE",
  "key21": "4UGuiehtvTeC78Gv1YEq63jNauqAV51DdaWF4Bq855NNdGzAH2tsjHNq21DN83L8iaFsU3CGeYLZzZpKM7gdiRtU",
  "key22": "5xyy2hkx94pLfDYGQ1A8DundzQUADBW2YwBEy1a1dLJwbiWw5rZRgNdPsTTQD5Vf2VFccSggEubxiunWfPqpsPhf",
  "key23": "gDJL4pAUZf89DYtxw4yNu6o2r1kGmvT6owQ3Yj4X8CDwKSNH2BXF6G6VkyFmQo5pS7G3Rn714TwTqjtYdPQcufR",
  "key24": "61iEDtBJTczVQF14HiJ14M5Zsg4yHbyZwtB8yv3g71rkRFSRWwWWwJ2vKrV7zdJqUoyuiujB9gJD4THrbF7Vwi2n",
  "key25": "3uL1s39tYjTHGf4gi1r3e8ak3TjrYe14JqE5wEBG9afGmTtwVLUzyjPm2TMdT4nStkp9cVf38ntMi8YUNrJdsAbn",
  "key26": "5958UEunHUwgnvNp6f3Kv7x4w6WEEma6rdbc8AUaQxmH1dtV9rorKWVaTjXX2oKE54xzTwRhQBnx5xH4fVZmWPmY",
  "key27": "3vKMPZCsdeqo9zZArUvM6j2up8GJs4LCrr5BSuhJifQADT6Q8iisg2uh4qiaDzsTdrps7k2RoYBZ3cHSsjbb13DN",
  "key28": "3mRnreMSDn2aec6gwTywKz6d7zYJnKvghvKEoqbmreiUmE26TVRdopcj8ws5zHjkceLFWG8LnUDjH7WScR4z9UaY",
  "key29": "4EfEwatJB6Vgybn3f9vSF4XFDMt5bQRDtAACry6cLjd4hn2Z2yaw9xEuu76BNbPb6ra8XBTyCAHEnjhHhtYkYytg",
  "key30": "58muJ5V1ExDhtbib4CdnJKsWK7mvnEGNJnKkSRoNibD6zazhXevMNw2HnaBFUyvYpcsKb262H3LNvjyqWqyzFbQC",
  "key31": "5oZjV1bWFGVwBjr75fERmtDLbdFX7RqUbpE5Z2MncokPnbbSWHq7kiAS3aYLrXRXQM7kjqbCDTeic1X3Tphj1BD7",
  "key32": "3P5HixAaHJUgbPXnBfzcHFPxmzodmfGSuX2xNnthgKoU6tr22PbhVaQPXcyfchAWEvW1wG4gqzr6y6TJ1jb2uArV",
  "key33": "2o3PV6cEKAoNUVE8J99LL13rr9tTuU223vXaGYfHEAQykjuaTrK54Rmd11wHYVwYRGm7P96T1d7rqtqowYqUG9RF",
  "key34": "2AJU38zDhto3KrAcFieeemjtXyPcYfgHZbVKLsHSFsfjusUFeqA8xgp4L5HZ5f2oESMWC8kT9ybCEFCqFtnGCbDi"
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
