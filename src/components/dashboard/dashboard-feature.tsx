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
    "2bXX8hwvF11VwRT8hDaGnE9pPRW2Gqkvxiy8Ye3YSvdHYft9eA62xFa5EiQ6YDpVLoy3jmZJTjZwJkp66MEJRMnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DfeXDN3hMW1ZBeB7pdzAd2Cog2Ub5brL8Grwa9PJQGE8rjXXTZLjVYMqvPDgjT9g2zDWcB86kx5RsjXYf9Ex45U",
  "key1": "4qUGva97oyxqEFHzNpui5rq8yK8TWvLbRaZDPhHhyKTS5R6UTMWQ9gvCPHszp7zmX6Lrce4dnfJFgRwr8PgxDB5F",
  "key2": "5Foqm9fFTv4jLJCSPuKzq3S7XMVkD2QGuDNVPLAzapSpZTfQXFkDkAkmuYkdHqTvW1GYxkMJWidMaXSUNVx9q95J",
  "key3": "651fUfxYZupVqncAM5i1dsEPVrjsTXtdmRm9xsMVur8D2LAqRxBjuegCp9CbPHRoBixswJyMHqw57WHjNSyG8N7E",
  "key4": "2wq9NwwYcs1PpscnWoiWg9P3wLb2N5mi3Xq4abZqftXaphqWV6xxmppHRETVD7msSciJPDX7SoVh5VqWEr57ZT1q",
  "key5": "PWFmE5KimNV1x9jMJQCYnEqh2BCi2VsiVbKWYEgthdoGfWgBRrHV7zjFnEu8mvqbvgmbij61Y9BXgfTcR1LcLdJ",
  "key6": "2SBy1Pumzg3iSQwGpHMEftYo7NJukDQ4U847Lk5mD5utmU3HWQmosFqQc2BRHZLRfKiFquVW6PxAJ11AsaKteWk5",
  "key7": "5WCuUnJUb9WUxP77u5XNFUMQdgjqVjtrdf4sfVKoTkgpyrfagEtL9SYXFysRka4WvbtriZuYvABjwHipVAPe12Ys",
  "key8": "2J2B33xvC7Hf4RKSzY48gMj9XEkKeDZ8fo2XmAd22dKs33SimTA7QdzZ1ckoRnEG7CDph5NQKzn2gwLiG98WRTPo",
  "key9": "4WoaQoWhtZBYCmhJqS3YvH7sDAdE7eywUuJPBmJHDygzYAcKkELvbZNPfgLjfxikPkC4pWGK1XXwR3hCyFykipQc",
  "key10": "1RT1pnn7owaG1uyq2SgTrrgQMp6wzjPPTkdgxi8gQuS9PPwApR23uFXmQfyXwfbnjwc9qTRfVVq9UV7Garov29P",
  "key11": "55e3yaCMxkrZYeFqbYt99BLWYLhmGBindqkhCA3xUBCMVgM6QPssrdhrdnQPNh9WZyeBDNu17TX2ahGo72CVro1a",
  "key12": "2fszDizHKVrVcyy4VLnnw9LKi2zB2GWUVLgniWoXLrjEDjAUxmXKeazyrpweeoGKWxH7icLyAQG16HADQpbN6yXd",
  "key13": "2u3JE8bjxUKqYTuLjS9ySubfpyoaUHP4bEsHHn5ZmBpVyCAT1dmPmgiQZqucHX3RhtKPg4fWuoKkgdbtqVQEZbNj",
  "key14": "4bpQnYhajDFAPorWJ7tr4fS28ogoKdA3xr7MmpjuNU4EDy3D3WrF1Ef3WuqkAg6bUeXUACWxH3bncsewHz1daGzV",
  "key15": "125zZn8PiXiGPftdaTaWS92pnq8h3v9bSWbZ2t7b85JbuYhmDyrFHm2My3qzdLKhwV5tWaxaGgfYdCPU4SEuoTDm",
  "key16": "vwuW4yEuZsvkTzyzMQsn8Rkt4CLct6auwqSkRSCTdjZ6tX4YUd4yzHfLtowqJRPazeBfbTXKeLEXwoka6mqvZgZ",
  "key17": "f9srUTHVy5CdbKJPm4qJPc1YQearzAxHqAnMuJ4gPu2vppiPG2LE81MiEtDme8oKLmNFL4rRPdqFir3cy1aSeGq",
  "key18": "4m4rXeixTGrgJLd1rta5X6fNnq9Pcn1tC16puGdquRpRr2YgC5tYdXDAJwsaerqkiW76EE9qDVUa2hgDY8Qxj8n",
  "key19": "geriVCr1MqheSb43FhVdP35eU2KdR6s2pydvhL8soQsrro568QS38pKCkSKqL6GvVAxAMq6F9kRt932JgMPkhzy",
  "key20": "5xC1v2LQAMaJBo27frVALUCB5VDW5UUUJrHpyB7ahdf4sw21gKArHJK2CHJkpVwkfMAePWPSLf1PwVSctEqsuJMC",
  "key21": "2rH2JryuBkEiJvRq2T6WMbhDos7GTJBCXCk2XBvnQ3pHFXQHTGLuTUz2cHcsRe7B81u1zrGEZMBcgbKdtPc11CRF",
  "key22": "5KsScKExp4UhE1KGToiSujFeDuVGytHinjZYdzPjPdsEqUt8mgwumwsZKqbvaXMLXKsNgeR1AkDZoAPY42JEYec8",
  "key23": "2ujowpBNGSp644z3kxgLbyt6bshg8jyvVWvLmyu1ouszfrFX82JsvbArWpdWf1JWqQCSDv76bnGZHfX7iXteHkhg",
  "key24": "5FYdqoYJcraHiRzxQ3kGSPc7FUZ8FLtmckVEj2DvoYtbAPUFTCoNnpBerC3VDq4aZCG1PRr8gBxop3dTmGt6WAQn",
  "key25": "4UZDLi5c2RBSXEuQ2PZDV5AyNWajQQ6Fe29siSZQJrgv4PjewZPHmfXGQuLMiG9NsQfHk8VJk8HjbhkRb55tPDqa",
  "key26": "5nJgDeC6hMjrRSfh4NcapYGfnN9RH8PFumnJL3cfX6zzuER8df6RmoffM8VvP1g8DBQ8VPALs6iHNhqkn74Zrxxz",
  "key27": "HyXoVokFb2rywgdwkb5Mwq5YRgAy7TTKcc2hu7aEtYyShY46LJ8uNro61V2q9usjuVmWvPRqEUv35MHFsfqyAC7",
  "key28": "3anFnQ8ZoZ68T92uZoVRvqQbE8bKdsUZUq51Dcp858GvwHUhNpCztbvuS79EqnRNrRJgnm78Fnec48fx1DAfu2GS",
  "key29": "4LS1p3o7uEqgKHzMDiCqSX1Qw4KCsJaB5ei6tGEz6gq3N3fobKaVa7aSt2VgePGY4mpxnY4w74jhUw1igFTwkhZr",
  "key30": "5pAkQYBtDihzSQahHUbTfGUHKvwHVQHhquKXXsbf5GYf59iYtVsutfuKkQUpao6sK1GAyAf7jc9jaGCRprDQNSks",
  "key31": "49FdmNZaZPh914j46UG2UVCbJ4bH5N1vrSkA6ER3H8kJyHiLauzrfQLMuomC25buyTEr7DeEPWnA4RaArfNRJ14H",
  "key32": "5GoW6XBFPHuzi3gLfRXdfqwVGyVVmCjEHLi8wEbeFwPBq9Z98DhJG62BrzBZTiURfAuRSkVAVeKuEpMGAP7kN7i1",
  "key33": "4eX2ffkb8WGhqADE6u4ekuySPwNzJVX7e6npKXFdxfVWJSHafrMVE4MmJL3YR5ddDuEtxyHjJiADJXbPwKPzk882",
  "key34": "5rmpQg2uMoE8MYtFzrC5SL44fhixcty2TqTej4Gw9HPY9kUfF3JrUr2cCXRNgJ1WTRZreYM9D9US9CdBTLE9yvdN",
  "key35": "6FWL2GRcqpa4LmWEcKecozwFoSAhhjkcnx1xu4oZPXCQVsd7NW8mVjjvig8tqQF8PVmwdCAbqJGnDLGmPvGFDBZ",
  "key36": "3zFFsydXwNLrx2cEdatGQVFfNupBPNRUo8xsFbNkuRvcNWRSnVNKCy13Zc8tW6KBzavKPy7DGkRKPP1M5M9EFYpf",
  "key37": "2AUjLMMd2JuQBWVtk3D5gxUE5GbxMzE1E2GhKy2biLWxJS8PnBKiEqGrBSJBYdmSK2bQQEix5fZ6NwDuKEXfSvYc",
  "key38": "2nLhQzkrvqUG1mj6uLCzevsaDkHZx4gSg1xN6sfbyjDXfEr9RmhBmKd74xQYMAiTu2eBkjXEKAAFaBtz1yG8aTNz",
  "key39": "snek9bBtaTVGGbgkdT4LHtGG1QR7LjGBjw8hPweGVvUi2bq7SGwKtpVvc1zoMRddBJKAvoNwBFo1qvSSrpy8Vsu",
  "key40": "2R1fxBzCJ3rB6e6XPNihQxJYxA5zcuf1sCkH2PuhMic9FbbB55Ry8sQZ3eoxd8CotqL2nSxC6DdvMBTrapnjHy5",
  "key41": "Q7WAE2mygTCiaeqxuC1nVRb8ng7QNM1CEN4DbPzETSjaEYgsTqgfPH5emeypmwwiiuSMJZoB9Q5QXbc2vH3gQnh"
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
