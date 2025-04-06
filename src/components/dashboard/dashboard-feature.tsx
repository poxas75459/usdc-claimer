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
    "5fntPbKa5qbBzY4dXRvDjrGYhA4fKvX2kiDQwTqEM4UCyM4sSw8enUo3ocNDe2bfz4XpQD5qAsH6bTbLSMqmrobP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GcGGH9bXVvvCnJu8MUdgprbAjDFCjmdToAGZoVJq3PUs9mhVTFEHgCaDSr5vSRsGsxCXGcYDRNtsoroGx54mRc",
  "key1": "5XXwVyRMxk2KwwTdT1rFMyov2KXCzZfgGTNve7dh6NJXp3K2eGuvqZsbDomenRZ4VxBe5PdvRKyL187dmJrX6xjE",
  "key2": "4Tt61UDTMDgFnW56Wi6e9VaPVELNidMUrjTDevwh1FLEx6TNU9cfYK8P4HYbYhPHVof4L1Yv4J923VxQZsmWnZ54",
  "key3": "5GF3HG7DJymP4VPEv7koUg2P9bSP3M4U2Hk6DYAwNfodNhvDzy9PiafETSCH14tHPTuiqB8236GPqBQ66qRCSWR3",
  "key4": "4uzdG1i23AYNjFHwqTJohcxyKUcpJ8H17en49jNbcbbuLuMMGtYbtUVum3XayF1foQMob4mDK712iW9zDiTBmX5s",
  "key5": "4pKJUmsaZZwNzbwEf3XYcpyDUjbzevrjym4gW3hQfKE1wnFYYbhYXptxnUfBYCnMLwFhD6gVkH3FuEtV3szi88hC",
  "key6": "5txBTpxiCmwTmg6rKpLpnpHcDMsSsohyvwWzVYCW3xyahpCrfa7C1ztNRpFZb1rzfq4j7oXtSUpFuQwQ1NDP5rYX",
  "key7": "658wrvqL5GL2tjPWqLqYQuNmq7n4uTwpfKZGarH4HFKREgRAHud6QP1V6LoEQtGA325n2bVmkUsmC8PXkFpNj3yf",
  "key8": "4Eun2XenakqWmkEKDBDoaUgn1e4idMgBQysXX3grM7qiYXaLL2jkaKxFChPEWuzTjvDH3FUQf4ncH46tpNLw9cCW",
  "key9": "ndEnxduoDM5czfbdXNjCVnKSfb6TV8AkrCMict8T9saeWtM56jCxe8zsvhAy6r7JgP3hUDHMUhbjCuJ3FKfatxi",
  "key10": "23mSCmbtPuxSc3Rmeb42oo2xNZHZcZvt2kJEjfBczLCvt7SbwneqZyN4fBhdYFSAk7xBT7YigsuMvmhFhxadYJtR",
  "key11": "CaDxcXmB8fPArQhfMMK6UJmYQHwwsW9NURnNFmdHYe9wRVyhZ7Lu8eLBqdqAsoi5SULH38itKu1MchTmmXi7Xoc",
  "key12": "514TbZFLMeo9oQiFZhwpYfKZcnSDeL9mhVkXykhyoNUiR1VFDAiRJx5fxJFMjYmnhBpbHTCtiY1bBVucEY3A8P74",
  "key13": "5Vxd6DccX3N6QMXwiGWidyKuunpPFKXAYyxbRotJD3gDeeCA96yPzdmpeVFmc14xi9oPaasvexJ3GDNNCocMX8ge",
  "key14": "5FcxXbPPK1ErC45z2vgEZj8PGUVpQpa8xe1GqZEbKpnXPyJjpm4gx8vtJneMgdW9DBRFBbehZxNdURgECF89VGuw",
  "key15": "XPefqwtZQVaXgw6aQ5Gvgdo7ezwAiRewNfz7WqxfB1ZKRDKg7p2PR4EbWRDiyNp1Aq8kbJvDA69TLcTvtw3yf6X",
  "key16": "LH9EVfNpgj6ARDd21twe7zTXD5gzJjBh7mqAxmUpTPUhtqAXhtTLDFeX6JmkMSGU7DEbz1e9XByWFyKHdfTgGZ3",
  "key17": "4mRNtVC5DYgGCiqLxUMWBktF8pqUdgDQ5yZtbaTAyt1ppNVLcYhXHsRXLniXFtvTcnp6AYcb6tkbDYvEUYmyFy7Q",
  "key18": "3ZoZ5E2mVDqY8xALGNyuYZ6HTCrPdpQVjGAXxcWitN9eXUiWTX5kNn8ABcoPr977nSEFezVj4BtuUGxEgbe4qMUo",
  "key19": "5FEFJNhQt3bYJz67ne5fzvs6LFc3vim571GQG4x5682uBDRy54S9ZUhZJa1CgY3fRUi81iRtzWpXudKR2xoJLDBS",
  "key20": "V3rHxjLwWxgmhdb2c7aHtGj6a8nz55YRzmcyfD9FHegpCrYVt6v3RFV8gEeqaRrmiAeNiyALjoFa3aeeeNQSG6i",
  "key21": "2d68Mz7nVjc3hved5ZxSk5kZsuWpvbS6HkKyhcegvHX8YDEZB5p8VEijkVxVSSdq6iY53jy8YgeX34Y3dgbUaqQR",
  "key22": "4B3QhZq9XqusuHvtrcG24xSzPoPezemzs5gRjZtZ1z3fKTHnEaFj9YXFVMcT1kiAByusT9BgBbEnC5EWduVtEGQA",
  "key23": "5b25GUcfn5z1FtCdmLHqHw8XFcevNJosuyEEQRQLL7wwoUricW5vzffu6GL5Vethf3tWkv3pBMJgs3UJ3JrayzCX",
  "key24": "2pVCZDJ1K6nMGFmxpc1KmMDWiRbtbrX61yqQvuYDyREg15EmXXnMK7KQxPakrMBGsy4ibGPH8168MoE2QpLCbbv2",
  "key25": "4Jv5FmrdpxBrgwBDLDuacGcdmF9pNcNcrzgGJCJbb9t5Gssh3xvPFqAZQDozE43iRdp1vUMs9EH5H3BRrgr6HivN",
  "key26": "4Le5z6WCZiXG2KyKs65WZ38vRRdMHfjUzATKupmnsnJ4WwdRac3Gn7j5AVDkKJu93gZsBYLeLaanC3DGP1ExLHps",
  "key27": "2gw4cUGJzWvfN2Smvm79YFrUemE8zf571eGKf9iD4Q2Rmt7LGz2KHC92NiCH5ocMQB9iAQ5CWWAsDR5zMeQUB2Y3",
  "key28": "5wiDVoSUkKpPrfn2ypRBKmsSthJBx8BBEpBovPwcefqyKseXzGq1cdvYi7KzW8V6B9dcwDrcr4xrqYPjy4EQTqxR",
  "key29": "2f58FpQmMSEzHUn5ZMGqB3dDthW2ZNCQPCZpCgWMafKn22awV58x4UCwmLMBBWmHhgTfnWiATYs6XkGxpZAuYYzR",
  "key30": "3h9oUuPpFfZFVQuNybW6RUkN6R3bXeHes3pJgSeGNsqPnSfNobybBqkuVPQmDV1mc1YCSSgwrUFAXQcUFLZv2yKW",
  "key31": "5q3aoC5qk2K1bCu47M2v8v8EivULwWs35ih3JiB13PkAEfeqfi6BvXBL7CiouRr2GtBPLzp53WMu5zWr6CTnVN2T",
  "key32": "4pCBwoxFGWJ2R5FZtwPCRkcf2LNBqfm7Fndsho8YbKNvYMYXpn2gwJdtcNwuNadMxE9J3kn1BzaPFtSMfPxrZfzZ",
  "key33": "2Aocx4cStJsarLWmwjceQvEYH8xrt4sDQfa4HCosgFvHH4M9vwJHmbs6RWiJZvPmN3mSq6cCEUHVvj2iPvYxqXqb",
  "key34": "4zA9Yov4fYSgZnnvsrUNjGX5DJtyu2ethw19mxQaz1rxxyiLTir5jmmtbVq1HXPFXnYo47ZEc3XtaiFjXaay18k9",
  "key35": "uvVsboXz86bjBoKUVq3DmGGBcjEPnPa57FVvmPW7MeQJPYECG8odZj99KEuQ6G8wEokTv8eiTQami2b75sqqyES",
  "key36": "377XSEwSBX8uiBxKcXKPVakhFzBukQnJ4XMKFjkzzPrFCY6Gw8fJyNAf6eKpro496m4CLThEgdBxgDuKQ86ttQTL",
  "key37": "3UC4V5dz4PvhN7VjSSEbuEgyeTrgs7F8wJWkk75miJY1ELtPFC9BeWPLFrDuaDw45291R2q6RsP7UMsG4ESv1wsr",
  "key38": "4aMnDGWDLVbhCrjLnZvJ3CN1Z7HgNjZ1XUVortCTXrkimaJkNru7XoyGY4u1myAGDF3MQH3L7YAsT28rBJr9fXxK"
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
