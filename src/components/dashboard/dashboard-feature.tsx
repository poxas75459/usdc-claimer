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
    "xTUi9Ju5rgYSvypNpN8bgJ4eLgBMePshNAuN2sW8i5x9PWbY3miSY79V3R1Hdroz8nNFbU5mT9nB1JnnjQYvyax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fvCJzdBqwxTXMyagbeArfKZx7k34ztQMxm3dDP5a8nwcMqCUQnpq1X5Hrnc92YT33i5DUqahpS9iD8s2kLh1skD",
  "key1": "2s7gYZ4AfyycfD68CsEkmhfwucGrMHMr3cruMUEn8ouLuyyetK2q6WAJX5b24KYk1huiSKELAbQZZn2YLHMpbGej",
  "key2": "3yS85jeS1ntRvXp67vrV1WofrkJBLHHtFwMTJDdw2ByavzuePahcxqpFB9yQMogP6DgJTjSMKzHfj7AiCggtAuih",
  "key3": "Q2WC8Euwzj52CiX2aBuk7C7Ya6o91VeK8ZR3s2b4apgZ6LmKX8wih2tUu9viwGL53mEUSwdtRUSGH2Psnw5au8s",
  "key4": "3naX5Q58YgwQBB14Y1nnr4fNyhhtom81eAGJdtX2zCQDy4Vd1cqeecdSmenYpazY9TRQ9YnTKWJPZNukZzBRFUAf",
  "key5": "2tZMUVURd26DXjah4qpMuzsYyACSqfBPS7jAHCvd383HtcVHvrDpsEt4NgZRYmyqR2n8paqZXA4FW7mwaYPFVXo6",
  "key6": "3t17R9cMkrbTcixE6LUHPGNqw7M479xXHA32FcbQ3cdbbUA5otkXowDPWMWFANUb8u1i6MRn9ez1bZYPGxVQk8J5",
  "key7": "xZgM6RYYrM3BycSbkQGvFfD31k2rwPMY52hqK35Jn8pUhyQYgMY3SKSNXz3XkUeRHF8tBgrYcrbHasRgjQDhmgN",
  "key8": "4ySBFJV7zTd94JXp2fcm3pjTjxnQXi2HwdJXE3Ss7HrNkNhC67C2WJDq6EXzRVqAH9fLLSumQDiKeYdWSUog76CH",
  "key9": "3XepLjsyifSuQraBDHWj5AvPuR1evsiE1R8mXgEC7iFDssd1durNkjtmiPzZr1jo8yCJ9ZoD2ShF7U9VUYK7eXhH",
  "key10": "4kaLZXEjpr7vbsuAhDNKbXqV63Ld19h5v3LNa2hRgPXEMNvgVsDcKcAGw2NA3rdcWQafDyN8JudxHxbfnTR4FnuM",
  "key11": "56T71NcoKtArvejmiPkLAZXxRZwNnjY2n7rhmPg6U1hYB27w1kHU4x7jXNXGEJH5ibfptX6JMZmFsodg9iknF6tY",
  "key12": "4w4YGzARrxU2mmDmZxemESFLuipJb5JTJeH2sZeVyFey1RBSBPZhmqYpsQdnq9cz1hk5CChBsjnpxivFdHcuRBfF",
  "key13": "3UEvjoizmFCb3Ajk436iNbLczt8skU6uF1V6N7n6KJFhHa4yf2yGsxy6ppSXuVjyhzKgWGfDMNCZZAsxSqC2PxzF",
  "key14": "55hqx3KpGLuWyXw4x2PBMUaNBozBpErNVsx58tRDNUHPv7xCrjJKgV4dfwjxWcHkhSjYBri8kU52FFVeR4CcAMtF",
  "key15": "3i9BJTsiSghayoUJ4soRAdosk8mrf7K1jsWwpuZQs3ZmcaLP6CDZxqueE1HXbAVTF3VDcDzPc3srwVs1c8ovYYeN",
  "key16": "3tNPxjHrD1q1hgWS9FwTqZ2tt9T74L2c7vwSYeE7dG3iFj5w92xPV3H7UaKK2PQRmzGSyC7bpodafvLyHiBZ7bF1",
  "key17": "3uoP2RQbMDGTaDpLoGG1aH7AdoSsqyHxigW6JHykGCvrwahxBDTK1wN9MXzVAUJEXTw5yVsikw6RCGHvzgUubB1T",
  "key18": "5gQt6JerTeiuvkF8TRt6zsaBDm65cFbHhU5MkWCBkfYWSssNbEtY5uyYV7bTXrLrNsHDBDL4aXPHAUJDCus9EEuy",
  "key19": "4TwVowbePe93VYWd7XPFHvSPBMsVtKteSzZPCnYRe1EsChGszSmjcVVjDNJCf9b5w6tTLsxqLujGEyXNvBknhRcS",
  "key20": "2JgYBuUyZod1Cm8Wd2oDDuXs4WYNNs9U4A4nqk1LVYmb8wF8163x5kFRRfVEAqTgZgSyxHMNBkhWutoeHMRhvW4W",
  "key21": "2j1dXzRZ2zDLQayxxctkdVyS3Us2SNXDCxL1MyU9BAnMeHrfEtTWbstSRLsawGVY13vTjdddm1wzcpVNwR6on27R",
  "key22": "57qrZLVagNXFqDodV3syLJPK6L4rizShS8Sj5Ri3gy6wyUaDBaPELv8AbgMtxFykT72WkGuiCHk2hc6fAd31dqAw",
  "key23": "4d3RPFqS8zXBXiWUxBRYeoCjZs5jPSZxXXeDySeMSWwaUSmTxcGnioacwhUJTdU3pYcKkpFFCztfSvBsAEppLm7N",
  "key24": "4VVbPXnCTqRpyjo9ZWHoYt3SG1hiFvphzyqJqCMYNUrPAFsGtwaz52eDoHKajHtd5BehzDEpdsnwNnsQVtAixFUn",
  "key25": "5JBaovCBFZoyerYB7ri3wprNSUEkhQpdXexXQVf6t3vDZGBzdPfomZUG6v8dAbBzC955dKC2RUNsrvaaRZTX7YJY",
  "key26": "3DxESGWei7wgK38qatbKijXaq7bw859HmLrW4FnbWQUvZ1jKhqDMdxx7sd3dtzYL1VJq5SvHTGkY3nekSvdACJib",
  "key27": "4jhUbC8QwocKyZEu98sUAfUT6UgcN5najsCrzr9Y9VmbaZHG1HjCKPBT8Nx1bcwur72UVWKoyxgp4hcPX2WmH3Nk",
  "key28": "4vj25AvNqnKaZT1oTtJtyArAmrvgZUGAZdQdYpb3jWWf65c2cNpTP3JHn3MDsWCmZEDqBMB8k9Q1KAQ93azV9qbr",
  "key29": "4aCjY5D41bopx4A56CXtnjsF7B3fE6rSMrHYj2jEd7w1gySc9x96xNdGd7DrT1HjARxpiUmy3c7ErJteQ1uTWaFn",
  "key30": "29FEuDYk2c52w9rp6VmsFLAvgTsej3qcW1Z3yHnsmzeT21GQnazVTxbgrAisgnUheKaMipU4ft51nEDFEbeubYSh",
  "key31": "2aXrsTgo62Tq9qWtaGVHui6agsHsw5GcNmah8EvMMKrT6UPL3fKCro9et3dCEBXU7EPyP94j323xTg2APPy6yaSB",
  "key32": "4LbKYg9eHDQUgtd7ChiJdaLAmKkSMaHQr8sMA3oL8fB2UUjAfvbWZXtEUT9BAFXYra8dZaN2HMAji1eqhA2E1kEt",
  "key33": "5n1eJvXt83Mrc1MscenmVAMeBoSKi9L6AXnM1nYVPkEGTwbsr9KBbFH5Wqa4br3ShzS4Ey7XbFjGNaJeNaDjhTF3",
  "key34": "2iHSnBTBExUqhfhdYpmtfdgacbApzxU4Qt16WBwQuYZQrFMRegGPPkSyRYcbE9R5HVJX2S8CPbGgmvkX1fqAGkFS",
  "key35": "3EsKvWi86FuiuLT8ccrUsRjHQLZFvEavgf2DEZEFqn1rXMXParbsj4PGXX87oKnA7UyUXPB8EonsDqCNZHXJuYcT",
  "key36": "2LBdeHbF5uarRTRURjcDhcgtG922Txy8mpZWR4cDvrsAbs3k3rHUKZphfJtAi29haDcHTTQxHeiCZazUh9i9ZGD4",
  "key37": "5EzFwPN2fMgu2uMnHi2k65N6nevUeJiQFoWTsbQ7jvkxMu9kVSbhYJaRDuGcDaXmbu9zhqynu32DLZMSEHg3UoRY",
  "key38": "5KnQ6d4HwdAfM6nunBPbhUBmMNzwmjqW9KhBQyFzkbDRnK539HrLBGLxPtbj6rXZF6vLzV4miXVYKCusY9tKMe4g",
  "key39": "9M87jVWHp35w2gZ9QwkBqcewgjav6KQ5KFPyevCBGy9aPC4rrgvC8JJUaRHugT8QnnFDVGvuXCMSBmRPpoU4Bs9",
  "key40": "2nUfLYrUZPW5nouUkvjPoXviXDWua63bPiUvVdWeopmY9nQfQog26XiiuWZQErvkyy1qZQvUVmg4Ub3PtRMiZLee",
  "key41": "i9BZmruzpnrsUTxwJsmFJ3EqdjiApcumbysPJ4FAX5zi953JkJJoRKnB1i8dEuJ3fZ1eLZEqXVpk1HhppNJWXEw",
  "key42": "2zPX67HDMydZJGmDbQJMU2WzZyj7y1TmAoegJ4KvZXnREhHdjk3AQhNDGCXSbYRCLTxSgp2pUUHACYsXNUzhC9hu",
  "key43": "3ugUMF8u6PZJC68XuWENzc3omEgf2SVPK8LsvgLHVLdozBRnucVDgf3uq67HW1ZCRLQbTkup49XfHrTmKdLvLuuM",
  "key44": "3DRWTZ5C9QmA5tgYsBrQmniLPmiB8XU8yoepZ5C5Hfm2xBdgqXuoj5b6Ne4sdVyqtzQcgXJsmCN1ZvyVYSXCbpAi",
  "key45": "3BkeYbHx4Rj4KxVTPSF7YrL41wKAHZWJa8ULcacMTkt3xHCnr8rDQojwgowtgX12Cdk7w347CbMNZDK45tP1XH6j"
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
