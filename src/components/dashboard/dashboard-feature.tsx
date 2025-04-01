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
    "XPYmkvdjBduCcf38is92dhRSY8TpYQtwFyysx5sg2ExieW36i16JjfnwjqSsgk9qec3hGwGQmt4RUDwkfJdobpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63p3TgZk9MsyN9aDMPCimm1tQ1dkVZ8BeVfbRSmS1NVvLnaZTjDuXi3CSBbzX1EvAVeewn1343Juo5sHu3TZBJkr",
  "key1": "3uf4D4aLdnxuA96Nh48Mdd2ES8XNe6rdA6irLW6dRA5wpPioJTcaerfHJqRTzcJxUTwuTi3zUQSZaGokLht1ybtP",
  "key2": "Q2Y7u46eReNTSqrSHMGxjEncmfCN5ur9dHdFikY5cgPrarknJE1pHo5dECoup3eYvjgtVwrJi2rm8Zc2VAaRXuS",
  "key3": "78QCoNhRMwgDQ21nDcPHUFZau9L6Ts39D6eCTxRJq1mMCT3tTVK29Pu7G7ECfnJHta9nwfoGJKuYHGzLyvgdG5u",
  "key4": "2f5TibeezFSN6QXN7WYZ8uEwDCNc3BCeDMgD9oFSfnDBcT8Xh8jNwHXdDSeaXnMbzJuVs29DWcRix45CkUe2DWWG",
  "key5": "2iqNusRZ6BUWtdtpfdPgKvXK9fPgrGVi2X5cxuw42p2DTVWi8gmEscABAHfEYcyoYnxKqY8evzTSQ5ddLfnjStpf",
  "key6": "nQgsMPWxxamBVqm3qb96dUMTFmSe4wcyYYmYrUNkegKGRu1BU14C3hz4AhM2jtzZmm8x4EMrss2atE8Dwjg85En",
  "key7": "655NzNYFbShMDAVKKZhHwLQpQzF9RG87vqqnc6GmHtnZKVFYaWAmTnTVYAZDGmzVb2H3qLMvrcYnmHqGpFcHaVGQ",
  "key8": "4qzduVR69vdCEuEDWLtKwnxJnA5TAmS14Ztp5TnjqAHk9Gk3YGCMDGDLwULjwv3nB1SQyHVXUdxspLFzSjJD26b3",
  "key9": "2Mrfit1GBB5T9FfDKNQeg4XKJNeofkadYZtU7DtGrFpQj249BgTmVXDpPxLTPYq7nGkYCiYgLPnhr2pKU1ggNPSS",
  "key10": "5z1PYKvtXPiE6ka7yon3fJ44oC13La1NX2ejhzvCdcPQ97TMHsdVx4XsSYS6PQhq5YJ1Uo7ByVypKt63bzYpyJuD",
  "key11": "4vVrHJqCT4ekPrp9jWjPcGxqNFNeJ25pdPKWqKQEzqkbtXXkwEbnAKBB9QXpxBdR99eHcUiMeS5NdydxAsHUZBRe",
  "key12": "2HyPebwLn4T4sGy1ohJVRB3WWvFzuAo4SGZSDb677ZTnKhoYd7c6mnKoqgvjai4L55D5LLh7hkNm7hTLFS37FULJ",
  "key13": "4qWbhGrAFoZNHoLPt2gooSkcFjK7TPz6Y1MTo3qukS2Gw7DkLQLj1fGejtwAEc3TEYuQW3XLCD4VkCi2oGDmyobg",
  "key14": "414jnHbkTCGD8aTmXhapihoymfkrHthC8xa791krikNKZKzrf2LYFGfAYZmJjDJEyxiuDNK4Tgk4KTrv7dV7iXVQ",
  "key15": "3ytboPrVawZhnnk7jyZojFQUFMTjhZBRsmPhD5hDMQhQNdQSRkURDYdNeJpdPX8ANgvV8TkhStNG1egzbqkzgLRS",
  "key16": "BrVrmfwVNreZxEKWHTvXy41g4E45RnnRpFEabXE2ipfSVrG6yfjwhDQnDBQBAmtXahY8UUHCxt665nndWKAcfeL",
  "key17": "5XTKCw72LxzH4oJUUeKXH1zQ5KGDTz2oRDArnD91zdfAQibdErbFjhcBxYvXBT1onEmSCSUXWbeKigg2k5QeELRh",
  "key18": "5XHkpeCEPFG8iCJFM27Hcfiho8RaM9wBCpxGajJBCWRojzQEq51mf692Kv2fXAPdphrCv5vojux2ZC74BocVwctL",
  "key19": "3V9HKTzVovodE8yaGX85kqk4Fk3vbksyTz2UGAKUtrj2kfKPqkr63yLTFog5G9KJC5kBFJ3EmM17AaTE3qh2zTNz",
  "key20": "k9yTZyvEJjE9f7ZhLDePPrTfQsRFhXpFHJcMSEWnYJyTR6B9h6gz9W9Axhf54EhEgRKt2CoNAJKja7e1fc59EA5",
  "key21": "4BifSNttGg9pwNNvmvjrecg5GBMzQ2jxHBtgSZVUbUJanFNcdw2FSdbgG9sEfgUH41Cd7Pb9ZpqUXAPmgkCfWWAe",
  "key22": "4X25K7jKvE2iQdK1WDFWHeQA2ARRoACSbEQiTCM2GJ2JDvVgbUR2GkWUu4FdeuTz4PERM4JTRTMK1nj978QyJrNm",
  "key23": "5usuv2GGTc622tMBAYN7UMtU56mEqHAmBVM9atGxccmPgnWRepQZABTvz7ko2FCS8jjfrza1bSj8qfvT4Yrkytiv",
  "key24": "36qpxLCqrS1jfsgb2pNJm6g6ZwRNthnD2W7Ewwggp5UdCfoUprtwiw4ifhug7p3oZGg6aaw5vJmfX1NPcaCpUdeR",
  "key25": "4E1huFh1fLjAzHoTc9imxkbBCEGQT4bpEwwPtt6jMhbDG8meRKfX142gixP4113u8HMHTZnELK67KNgtNA4vBHxJ",
  "key26": "2AMU31tLoEuN2zZpQ9JQCxGrcAwb4JqUjuqeko2svCnccbnaCT49ynSK2M3tWzqYAsWqz2kUkGrieZ1ddA8Gk7LR",
  "key27": "2xvk6P4wcJS2ZWoLFhpiMeDKxPq38RN2yMpfCU2mGvbsUuGcNiXvgRAMtvfVSbKM2EgjoXbrt3rC75zMZDb1mfPw",
  "key28": "5U5BAXSuzrsoqPYexv6BoekbG6tQYcdCxXtBvedf6JVM3mU9iyuEb3KJoqkTrKK7NK6EqQfuRMg6q88Cp4ausmnq",
  "key29": "2beGdrDShKKVUYCN86G97sbwtMBXA5BDawAvHLNhiiTWt96ZRtK27MjBmEoiNXhakKnvzms93bRQXdL3BM7DEBfK",
  "key30": "21x3tQG4bj62uMyvZ6EAJbhVPBxL1fGn8RQqECSMi32sKstD25awf2s2KNwoMx5aMRuFkssS1zRxG1kGEU1ZW9nU"
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
