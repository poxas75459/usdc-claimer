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
    "4F2W18NhVnsR3aQ6hVmtPEZ9pbcYNJHZHDQ3EWxP9j4U9aphCXMpWdFvRXsq1yGrMX9fJAHjaPz3rcxdqK1a1LVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GbeAFTw9B3a42ncNRzt9aXD59wfXfng5cgvPD3RMVZz5hZmYVB4KPe39cpMF4hiidiLSz551PS4j83VC6N5xi2P",
  "key1": "4djD2wEQ13DVmPeUR5rSQXY5gwrzyyufBqKMbiPvdiKuzT3QGFi6y6MBkY2dkHMkUo4nz79dv63gUxRQX9ejD8Um",
  "key2": "4AqoZcVmFJxmmiHJz8Yi4MfG9mZGGCFM8zBcyxNpekr8RTL1VcJ6Fzm2mXjGKSnjVivYRWdNWmUfb8jrXUS6YdBM",
  "key3": "3hMKcD49THqKenEGYz4V8LZueXJvqKNUhPLBs6XqwYHKcu8Tr59Aa47ugm1VrFHRbyG2CF7uvhgdCiKwKL8XQTyp",
  "key4": "5JqAS6JBAp3MeK4CCjScSZY1VwKAZtf86vv7vpT8D5Q5hPmrrA6JaUzP8KwCmesebt7M411hZqCiXy8uoowp6Hot",
  "key5": "2nbH2MBDEM5cUVJzMU9PniRnjjoS5pxj9r2ZjX7VGDG5ARRFdo77uPwJGj5WQw4wZgSdBEzxi5fm4718QaUb1vVX",
  "key6": "5ShDUX8fCrUKHns7HPu5a1WH9r9tbumgxis8KqhKQ2pnzA61RR8hWmLkjfDESRU1dvVtLZTTfB1TzsRrSNQE3tA9",
  "key7": "2gH6FxQ1m2JWHkfesAxdGKqK7CMEob63zftKDHQBpgSsEmNmHTRrSLH9EZgnuiXQFPzjRJKZFpcXwMWysqsDEAwd",
  "key8": "4cpVf43WbsJ2nfRHdVaQWnH7meyBRHhEi7kRcCARJ3H9bG5jFPpnqMhP8XREi3yr4Kqo3y6DDTdoTR5gcV3VuUmp",
  "key9": "2pdVr4BcpgXFsefk2SzYgGvLF34yNZXk6aYVnCEtSE1qtjZwDjpD4bpvX3N9eTYHgRYUMbpbP8K43MPTrR6DSDzL",
  "key10": "wd2hXqVbixXFE51JnSR8p32LB9YJvDsTKqaGziqeUd4WywPXLWwJXcA62qqbhdgRzW1JA3h1bceS3YzsG7LNmgk",
  "key11": "5vJuTqsyyUQFD2drCtmZeGXXdcVwijSnC4tCUWEzZ52NcUBSettThp2br8y3wSRATjr6jtsCgekRwEC8iD5EngE7",
  "key12": "4gETEaMfpGEzVNANtcTKQb3w2oMiHQMwhjbCUyu4iSjQ434sGiNpPSXStoJ3RscNbYJ9TMRPB7gL4VNqxqKFme8Z",
  "key13": "37FitScBsqMtWyMkfT9TZcTfS2H4rUm5kPEJNBvUsN8odaNK7CAUtPCRzvZ3Nn5kk5miYhYjX6W2xmTwh6A1GyAy",
  "key14": "2TBHNMAHgW2Agxoqi7hbDQpMCvWiSbeUfDDSN3NFagWDoGb47VGhaepWJaWXL2J2h5HjW7dyZbPYxNqy9n6U2Vwr",
  "key15": "PBzKHdA7dPjcZyoVFbLejxMdrm7oQbyygH7GWq7K4LU5McVjEMfUtRrGmsWuTNPUS7pcDZREqHoavT77ocH7GVx",
  "key16": "472Gvuz2qrUQWBgenDTKdNSJxhanPinQFTaLGQG9N6L6HT57SuAeStZAceZor7kMzoA5acFwDPkxb1MV95fEdz2k",
  "key17": "mCrHS8qLyCHk1eoCrekejA6bB5YQHDF58e39XC9hoY9W5njmRobpX11AmSLvyXxiBS6hW8t4HFp5uL1XSMaWWk2",
  "key18": "3yQ2jneze655RpGCbiLpzLg7P8Wt2deak3Cm7eSBpNRgASR1hgqgvzmsjLTmSriqwgyxTKVvLNS1od5drvixtYJ6",
  "key19": "5H7v36kRpcWdjkhZfKkczNEtS6ir2q1EXtUP2Z6Ea4qU7qTyCFqf9XSngT532ddzUwusLRvLav3y1qM4pwGQGtxN",
  "key20": "hTLWHd2zPT6L8FKCn6aSUmpMjpbUJ3WGxbZFL3jNi6NfkR4obh4DTs5Ygdx3DbNJcrmik6o4iRTwdHPtDjfVbGs",
  "key21": "5RZnfa1fqzhpG9Bbt1Wg2ya1YgWaJE5eWJno3t2hURnjp27tDkmBuQDit29ZGqemN8qvKHw9DZZ7XhcxFypfxHJ3",
  "key22": "2aaYjsW2anYPFE4mzCprKFpNzF3JQCwnoXAowx8pHUPC3pFcKFrFPcE5CKM6A2yJWXCcRRBSxNvhi5qsE1AjRSWk",
  "key23": "4sAWiBx7gStVFQgwJMf5w4bnKAUCAJWcdjKiRtM3S2jEoFnapSXGTHccCpnE2BqtKnLzKR6CRhawEoFUzzhvyyBa",
  "key24": "3B5fKUWkHKsZA4o2SEGPfMerpotd1ssRTrviTiCGPxSBsHSc1hWzZkzLK4PmK8YfxNJTqPZHGntb72Nyq3gqGWSW",
  "key25": "5CCrzCycWRRj1ZNukaH3vxmbLkUiJnERh2S9rSWYJLHPNKC23YTqFwCVyGMaa7DEnbtKMw51kf5QwNvvtDVNfFf3",
  "key26": "5qSAC9EuSEb4pC5kLjXDfpdWfmMTo5EHjEehyX6CU2wCeVRUxFqaqVCdq6D9J315spCYX6zVLz1Wyee4A1wfxeFF",
  "key27": "nciAznjFVNudR5uHqVipWtzBFrT3JGLcdnjDeJwqDcKdX15Ry3b59KEkdQj71V8wAnn8oiP4aQeGVfKK7ow1hCi",
  "key28": "3LdtYsoS6eNKGyewzFktdkFC2X2cz8jQ3s1F75AJc54v4Lrk4XcNBkYrUW2JZFP8yCewpzBdn1SMf96efQKHSocz",
  "key29": "47MA2m8gU4yU66hzVaLj2kDryLcVKhmwT7cxvTCRqjTZ2JoAj7CPTWdr3dGSXT6WbG7FKTSUWFazyXh5JsRsGSkS",
  "key30": "5cYYuscMGTTPXtmTGHS3wXJQTSyAe4FYn4MLEhiHtaEwvpaMS4qZoZaSJsoZV7H64iZHWbvTPPEqMUCGWitBhJrx",
  "key31": "3EwEG1utdpVQkocor3X5HMNrW6TcmYqxZTYrct7SzNVnFM8YC16QptFeLCEb6RTZRZcDiaQZPtY64hfXwHA6PbNB",
  "key32": "21qicE16manF8Wp8xuFHdjd5DSqEnUmEv6j4CAge3CgLgk87GLpMYX3TZZYD3wLsEWGaAhPLitYxbr6GXohzj5v7",
  "key33": "3mkq7AwvbfQ6c8Z8qXg6Tn4fqBHAUGNKfxG2r6vPgS7WWJo8RPht8rH4Zyb9Pon7B5mX5ydi6mRUxguu6nRHN8Hc",
  "key34": "3BXSR6eYLqo2oocW2esii6mtPLGJUEMQ5aX2jY5f83XFzPsaEDxjme9u5Td4VePtbtnWVxY4wU9rxJvo9Niekrrg",
  "key35": "2hgQFMtW7dvtEQYCRFWAFU5ZKMHUEMjUMEeAiU3V7iubAvgdQhrZAeqdCzjZU6Li1Cf6Wr2gQyukufQHD8enu9A1",
  "key36": "2kQoqg69zc4ZTec9aEQseWbV8GjnCXC27qAeo9eonGRA5RQEXfbgtjCe77xdiEKx6e5B2fJbgCVr4GFoeCCZUvR3",
  "key37": "yCJuxHF9xvF8TVqPRY6WHZWsod1dPhNJSY81wsn9YkzFYSmkpXx9SgYaWjQB5ph39ih9wuqhBXAJfKxm9aTQtWQ",
  "key38": "XGKoWTgSMVki1gkkGkYR5RZ8TDAumi7QEBE5Gd6NmAvZMKvQDTtnqqrbSGnuqs4ovFkUje4SBBW5WQSEaL2ex66",
  "key39": "563GBRZRFBLck9A1quhxnJqBe4iTCCDCAroeSVewcAdAVr1RcJuePveMRxZVJUGfeqThP76H1zCEUtvdLRaRk3HR",
  "key40": "32A1GFGrj7VhHm62yKbSY6o8G46JPDg2669WeZ5dMHia59aTcbVEpUUWNGPY5XqBoD5rnqQdEFqKMsCpKPFfp8jp",
  "key41": "2qtXCKGAYvoA2DngxtrXMXSco96YVmCv5DsYvWN1qaNCmNXXqVJvNzX3mTxSBujv3d2emTjeqAtFqCspLY37p4w6",
  "key42": "5n7A8yMVAWck8d95okprAZiiNRCgYvfHhjXynoNgLEdLmbpRyQmJYq4TLX4Roz75e31Docxk97kkWFXgXi4V9rHE",
  "key43": "ixme7MRJMKEMdaeNJutrJ9oYUR8RoXwDYt2p5GEBBnQvotdG7dD2oNzBeAYWq8ByNPdMjHFAfMPgNunimS5TVKr",
  "key44": "63c4Kjj4Dx5wajT4cJPUaZpfEv2WQkB4wVDjneUwHhomHv8hw7Fy1iKWxcGVu5Cus5dZ9WAMWwcuVTxdyMrcfwgR",
  "key45": "4yW2f7ijGiV34x4besL5swXX3S5DZKe39QCunmcd4eKkDUmtG7msQrtcmajMj4HP8NdMafmkW2LPxvQgd32AdQos",
  "key46": "5HAmdkRt1Z7oGsYRNc3piFSoX5zZYqQ6QAR1Ut4Sk5S9HqKVgSZDEgr2JuaGzxuXkXJFy4X3MMjPTw8cdA2otGRX",
  "key47": "8UMj13XbCbsqkzLaDMUwbvqxdYDhWrXB9W5HxQ2LY9kfaVHTuKBm1gWg7cqtkEpX8pQxAc4EfTBNa5oSCX8Xs2Z",
  "key48": "5ECKiCZWa2xyUdEUFYXAgxcqLv5QE8xE2xnY13qhCuAeVtkGChTdVPULQQqMxymEjTU8ennj8bHQTmRbuJW5pAiK",
  "key49": "2XP8aKTEY4i4KunHpgPewFBgMDwcKMjWbUGvxWBQ45uQhCM2CwSxFvBwSF95axw7RV77wUS4oLkfSfgLY3EYiGGv"
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
