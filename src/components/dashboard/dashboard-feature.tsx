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
    "2XSxmKYMHBk4yAHKg5VW7CG8DbXoJ1kjxX2CYc6YXPp5jUFKDQsLHsuWGH3iLhAtQjwaTTc5cSBXgv9vZ8mqw8Pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CQachbYeH6NZRAdRhAywkKRn5txeY989uKS3anX9DncgTijBsNYTa4q8kQufW1TZY3YMacmFu5Sb55vWFUzgVhF",
  "key1": "4KTZoMRCFxqaZMgw41DWppCpGhicgD3krD9NPAaL215gJ13becLRhB17GCmfAA4daGA2SLFb3PehKfGq2JZDe2zG",
  "key2": "4CWUKZyfUGNKMYW8LrwFWbE8xz6MZqXK56qLB8sqTfquwNN5vhLqircBXSGNWSLzxPjsohvZU8b2nGHGMM53UczP",
  "key3": "8rm5Yw6c1kZD2S9WrcFLfu9z4D2mo7XXRFctkr5duqVVDgX4XfDdtdT6oC99g6dTJu93aS5REZDit5qt21Rbmmf",
  "key4": "2P8vxjeVKBYNVbtTM85LuEGAxPcA8rkaEC8TuN6zqSguGq2YeErj9zZnZTe9yA4kNcWeybkeS5tUr2izvg6q1Tw3",
  "key5": "pxbayfvGx347ydiWkUYGjpNQ4zgWUZdzNwMUi7jUMZ74oXPp8o1epKJUXq5sFM93samZGdCZeA8B1g8XVJnrv1D",
  "key6": "1kipw4UxznShQVxPwTcPiyFAM9SMS6Zr1aYoE88jzLAo498jsXssBV2sDeuNL3H4NAUVUiqQ5QpfstPwciNWbqm",
  "key7": "61NhWo9kM4qmMzkNSkSQx21UfFPhZCgqxe7qn9ZY7L8FAAtujoBh11YaWwCZSyYzwRxd3inohKGjdFgwRkPpfFT1",
  "key8": "66FEJNx8AyV37uzpzsS8p41yiLPXnisxCQHZLxRm8z5EG5yzHTo5mkjmFAfJq3kxkE7CZywsymvqrU9WJJo4jicN",
  "key9": "4d7WXizgpMAifM449tMnGx6PL4fxAPehJQ7EnGJzNYHEaevL6fgkRtMJieeuQLutoZDdJyWBuuarZU7dKRnHBwVo",
  "key10": "3fqPPPi4saVh4LZr3StqSyU2EkoSEFL1E2ykibVXuk9PaAWBYPBdZ3Eg67BRk2r8LLr8sumwFS3a2xT8UBsdqeye",
  "key11": "54Jstjd83Ju79avBBGJwYrMPSme6rYubrrKRoQdRPpYNsmp86GaNWSgeeMcV1UB5Soa319SoHJZ1ZXKVG6QFXNnE",
  "key12": "2xV2vRVGko9KrcRrsnTYrKMbySA3wmxCVicPoPW7CezxDdatvwpTqq4WDXzmM1mAJb8jeNwMb7rMojBsrEoejNCz",
  "key13": "4aTeWLpntKKu3mejycur64oeZ9RjPDwTZ2ab7C7UVVSk7HonaQSXfy7dhWry9umQrKPJvbrGpaMFnZLK4M22BHU8",
  "key14": "2shrtiBobcnzzrp6iTTiW9DeBSkoPENd7NnNAEG17iVN2WXT31aF33LfmYBqdxtAJ2EwzfDAd6j1SoN2fPBkjuPG",
  "key15": "3KcpZCUdbtLdEqTZSc6Q35Srw21PDhUv9ffCoAEAVaQAb2V5w2KSvM19oBBBE4Y51RvXExtxFpR8E8HXYMiVnYqU",
  "key16": "3inHHffYp1jxmwcfggirhseWrWh8Txmywo69FEwAXiacgSmyq27Sw9wGyLgQ89ZtCcqx5rk4f2vtSWqBHrcvq5Lq",
  "key17": "4wgmmgRRHTUoMgzzNoDvrkHw7SWrtnxgB5FPQLYzpsrgXExRvesFiXEaTxnX6uyNEAop9thR5xc7xHsDd7ModZuL",
  "key18": "GLJ1rWY3u3ZVugYzrxRGfv4k6us1hcfSC2twogMCPcWrLRwbCNJ8Cfj97f8X8KeZsECWHMuZ3BDo8cVHF2Uvoqg",
  "key19": "2ksb1UcEi1FLFczLMaEW4o3wiAvfi4outd12KoqSKqR4bPAuBXpyavAjz8ZY6R62jdCziieFQ8waunKtGjf6T5vE",
  "key20": "ozJ2DN2m97X5UEWUEF7qU8H5Gg8znCWkPeUp5CBDCXctmLHFXJbfxQduKS8vuV4i1b735Q7BZVahokPWEYXdmPU",
  "key21": "23VbGFV6YNUSGz1CPGfw1SB5xpw5VpjnHPFhc1iRXyVkFMYvh46zGey7x7kE75DdksJ29a4zCbBD4dAG6Qzh4PCP",
  "key22": "2JJoEXAT6NgwGRiR3FwaJoHA4uWN4ez6p2pre82kBahH19Pyikoziun36kpae4xLvoT4VqeTHyo8YGaH3tWATAFM",
  "key23": "3z6UUvpzdNfyjshyqd54tfqyF5nG79p2pN8o6Zs2FiuGvyCdgFYGrsKHAk1FqT59hZrPEhnLvUU1KHKNX4Pjwxf",
  "key24": "4do7QLpY7gT3wALkHM48FCZtxYEWcpHF4L8HVMM2UaGnrmKhBzGfooBKkcgdXjFmjgAzwCf47iJ6XQdCm3F8QQd",
  "key25": "2mZxhvLfN8LyPeYHbe3395fjWKFunarUhkUgZfM4WLBF88uxaPPtMLsUAJYFdnsUgxM7CpiN8us1yq2hwzkhYwTF",
  "key26": "xAJw3YBgrJnNM963b9HPYUsW2gyB9GGevPnRvWTHSx8vk4xBhLWFfJVwaqLnooNyWNV9VPiqgWU994yKQQjvxPu",
  "key27": "2aGGfLnRjU9X6HMvsovLnp422YCay95LKbpQcG2trioUiFWa8RRcd25bdD5d8QvHJaEzhnUjuibQmCc6MNCcaqfu",
  "key28": "2iSMJJU2a47nFKRUpK3Pn77TSoWZJDtrEyeQ3oymV2VsdBNEj8xg9xfFfsxfKWwxoGcb2mjQzkZCDiq9SkiSma2h",
  "key29": "4uaHyuAQA6uJqTQ7YnpNHp7SoZzTV4A9F7y89pm5yNmpduq1dkbTsGm8MjmV6yPRrWAe38hN4p5sxmD5jXzzQda6",
  "key30": "U7e5tPAPcmHLkBsTfyZii1DB2wqfoVdXypitqvK5QKtqW3ymvVgDCDaPu2QiP46Knp4ucd6zmcCezzUEkqitqmL",
  "key31": "2vR4yN8ZSGvKsgvqjReupBoMmBgmEAh9SWstcjbsXeMNhjFvMnsaJgiRnijEYjPnWpTwKbnLM2y2vNsFBht6BU6w",
  "key32": "5xuc6vdmnJergkC8p1wbG2wfaP4t4WsnTmFTeGZAmvwU6L1d9AUKV6QKxjDFQPoNgxDboHKgURw1LDGXnnQvgmMB",
  "key33": "2hofwmSGadC1speRt5LxtuaiRmwsiCCMtzpUJnTftCwRUvAYMy9FpP8TLCBS5JUVMKU5XN36QYUgPdSo6fjtRtXs",
  "key34": "5GtbKDAj6qiBpRcrzhYpmjMqCB31RJEh9guPps2jPyiwBAPncoZJfng5jz3vELWvtRPTQ6vAKho2tvgt2hmrJ3jc",
  "key35": "EdGBrehyZxq4PtkDLWR3r8Wdj4uM8p49xg4wqCSt3fLyZKSNxr29rr3rqNb6DUCgUASSLz7CrWWm9UGV1ZXzkHi",
  "key36": "3r5sUL1PHcZssBbh9LPcXyFRodNakCnvBoy24DFAMZnyEyhKoGkeUNTtZbNwvkAjzUfxg5mqZq6DXMKuDJHCQNh5",
  "key37": "5eEajJeDwjzzLZBtnsnQTQeBcy6JF4B5HmDdtewPF89RcDqxGddvTw8RUwhouZPrvBuWd2WVYKfH6saijfqDezCq",
  "key38": "4UsspSMBRg9DXTTfoSqPY8mDsnxzfkzbGiirmSBz1R7GUc5KQ4myWUmErQZ1RmS7x4sWeKnio7a7EYRrUTZuwwjc",
  "key39": "2xGPxzCznYRfGJumgp7sSEZrGkxBV6fM1KQ4fXmZhVK1QY7dQYyM4nYNosXN1BiCSK65NUv3gWYn5UNcZuq1eDUx",
  "key40": "4VTpctFDAWETGpxe7ViHiC8cXwPGsX3z8etBdpAQ6Wi1c9FLbM6LzPwphg1mJUQ95g7qJztbcfc8vKXZZBihk4Ly",
  "key41": "33JanzdbApTH8aCyrECpaJ1XbHuBQgCroUsXNEGV4bbUD9z6gA3hnxwP2aGyXF1dFcdKKmdNZK9ksXCKT6K1Pna6",
  "key42": "4KhV483uQ97o9ycKE62Q4zv3RPBGZtoKLuSMwzf19GMYkfBPY2PdMJZ8fQkrzXdSCJVxQWonEuYC1JRHDHg3dPW5",
  "key43": "5AfkoCow183u25LfWc5Rm4mmwXKPeyiy2x1yWSHERGWqWciNHaW7skgaLa4KadNyvQkyZAiwkBY3wnjupwmZaRe1",
  "key44": "4uAKmFwRtWPJkbk3dvQkHALVBPNKANbCiU13EYLKcP5F6S1cEob7yKy8ZrCdh3vXMdMUFR4y7KaTqyLwpiQe41CZ",
  "key45": "4jEpQKgFLSW3Kq45BPUwcfLN6vZJ7HhKhVCdJ5eZPRZuyiS27ZF77sg2Xu7sUxqX9pNdrSc7awNc9U3jcAAqXXws",
  "key46": "5XHdV8FoKaatc4PL3ZLytVFTmtgxDmk15zURpgK9nEjETNXXAbXctRThSqo4Dq4maWU9JrZ6TAR8DNiYKvvuYpE5",
  "key47": "J89VtXJhqfM6hxwx2BYsZcjfbpmW85VTNefHWLWDw9FnfwJ8Rzkrzia34oaEHuNWtAPA8W2QyZYNiXxWvAUG2ff",
  "key48": "n5ZhmVLWadz1buxX598HGXXWYzEEW9YvnVM3KCkxLoUhB5kVKDXUfH2JYWbQMuReVZGXLFw3E4p6LDYRqnHPsEP",
  "key49": "2MRUFfqg11RjwoHb99oskHzrabzV5D7U5rBaQJs6SE8f8FCfUKG4ipywWLFXsU2RDuZdDDrzDYd1mPFy2sCyVBVp"
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
