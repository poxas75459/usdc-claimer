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
    "5CM1JkGdqgpNGAS5BJbMECyXUbQ2138RZhZ7QShFdNLgAi4aQoL1fDC5HhVDYHfsjVaxXtLubucmC6kHV61CTnfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cT8cWHTxfLvmpmM8rU8NPDT3ffrgTJzrVZcrnvDmjqMHHvL3jTPG7itTJ7xNQsBbaAjCR13dmo3ZoK3jTcseHoz",
  "key1": "57rvxqgyMWBTkpK5aUX7Vofcbng4qUBmSTn45m8v8NcNXrHbzqCkXrtrr1bivXntfR7kFicEDdn5C7mkhd7jRS3V",
  "key2": "2FW254nG2b54xv4X1CfnCeLNinp1Tphph8sTPvUEu3g4dHAqWKA2roGGys5NanWHTdABjoD8J2hTGLLBwAdL4K73",
  "key3": "38ExD5kr1UihQ9VYR2xEsCQFbUZfRCanoCgfoxAqJvMvRRRYQATUsSx1yJLA33QtYr6ry5J3xvSr5NUMg4N7uz4H",
  "key4": "4EtXxDG2DE1iBu1XpxM4rizLSjmWJrYS7dsqa7TqLA9ETHb732ptjWaEDWfEuYAoREJFGx34edTmfmLoMZVRNuJ",
  "key5": "3rZWZB6zScLZPNND7vaTTt6axtKVCdtsqet4zFj1mE3m7GMZTdB8dJCJUfU3tbXjjmDkYi7f56BtCvTAWBXsHxVm",
  "key6": "3YLKue92vDrbS4MPgEoxdveqj6gubSnEY5Ep9MromqGKFUtCuiFJ9wc9XXGCUo1kGtuz4rcRTtMb7nhd6CRsvZtc",
  "key7": "23Juo9FBmpgdJcNbcgFUqETM1DCPAck8rfEB6eL2mEdMotWXVYd3jzaBPhZSJKdWuSX73weLj1LQyPD9L4rbXTHa",
  "key8": "5gjex38eXahRa5adywjuSexgRxVR5nxuo7PrfJ9CkkQsTJEDVfrzyB1ieWGzChiXkFe7JXMFxPyN29N5cd5BdF8T",
  "key9": "24dw5prDi4emNyR2Z1BYWPwhWETxAWocg67tQ35maVY5Qs76d9v8NQvf5xvzqFaP8yWmgAkGgZEwYQEWkgKm1Jqm",
  "key10": "Mgu4Lr1mYxDLHfihMXTno6V65CNoevSdShjKVHBFAoTKLUXSQPeeiWnJnvDp1Dq6bqhLRH4T7WxSgKdKW62KSWc",
  "key11": "w8vFiNcz4LsMuc4Zjbo8WEwnzJkntJu2e9XqTLtxXoWGcPkt6qsVFVdrdXuwEXjJbDvDgAEde15YRUywsKzaMm6",
  "key12": "3gQ3TKj9KNgEvxu9yoEezX26gLsMtzvp7CgyJpD6PLj7Jer5vVvichVwyJusN23gRAbENpxBv6A3RcKS1MWkae4K",
  "key13": "5mASVnCzVzB7NDDbSmXn7iTs3sVMwZQ5KrgBrXNJQM9A1baZ6qhBrVE2uFmoYNXNz8Eq7bjuYQj3VGQ2ioqyxerT",
  "key14": "5jhp6sjTV5Aif48NX1WajhjTBNBRrLqiaSM5Lkhj6pMi3GzZ55gvnnQJv78FGmHAmFVMLSkpk2o45t8YEFFbfzJK",
  "key15": "5LpzS5P3g6hKS4tmSryhYyvpgSdhCByw3UpVpKJ6nHdqVXAeqNRYnugp6VuRNC634iJx57yxFgUQHqekPsxoJqBq",
  "key16": "2iAk8JLdNwrtJdUqWEnhEbptEQ5uLQahVuFbTJEsy3m5UJ6UPhAKzREiTymLcJdtgpFbAJfiDnah3om83ULNatby",
  "key17": "3A7kHMxDehMSCTzH3pD89t2St3VvKQwERkYsQSGFSVnBfvc5UVepGgBFsSKD7DeSbY6ee6m5rAinFTCwVfcVi8W4",
  "key18": "5gagaM6QhiqjWZdry2xsjSSE4sDcLxCbNSBLHXwW8YzcTiAtMSwFdKjve57PC5WQtAJArE2gdnuc5tF9HaxFHVEz",
  "key19": "2FK2wa5xnAkG8hNSLdAK9ikoqAU4Dd9d9BruX8T45BdMd9RhUsBRLMVxAv3WwtdHTRpEQwLNMb2dKrF2DWHQbnJB",
  "key20": "4Bc45gULe8fFxwqpo2TRSFT3jpgmxWmVAscrxV2MdS5fotPwU6xjJSWGwQGScMXEzCP4zWXQxytnji5TcYn69JPZ",
  "key21": "5xyV8P7x9TMRV2FfWt6ja1ug2RXJxA2BPDZrhZKPQ4vi3Js8vDgM8ptnEwLne6jZfAmiZ7XMHSzThuyWMkuEHLZx",
  "key22": "1xWgwzG6TbmTLjTZKdPrBsFztBqz7my51jBU8Zq8nJHPRtVph5ds13mhjonu1kDdqANbqXuzmpE7BoYMWk27LpC",
  "key23": "5KRkFSDmjejKeHxqbXKn77Rd1xYcEQcq7uRsea17EvfyQrjoWjWhNpik5txUxwKUCAFBHNBn7dwPTz1cnDYEG1d3",
  "key24": "2vcrrNvmA9xqKXUC1RCLoGtZREkgAGmyfg4xhqbpp8H4fKtDknbrxdU98duZLJLcfzmQVKyFCDrwPHy21wd9NKAD",
  "key25": "5kUyhH9ZAwmrBMy6cS4z2KD7DX3zD5FCCsR7NjzRisrrvoWn2hxw1v7jZSC9pGyLFMuGhv14J9UEmq2bBYpteFXp",
  "key26": "16nzDH5PLGw7zfEDrN6y6r1uHYdQQKGigeiT6qaihVobaJS4EzWnygibq1CuFN3r1HXJiUGVjrUjg9AYuCCpLsx",
  "key27": "u1TKBekn2QyujCUWHBk1x2ceXbJ5JBZrCQzgt8n7YqQ3VqnANHn8w8beJieEe3DPqaaszkW7DSjoufnnZ6W65HP",
  "key28": "2N7MFv5QeRSvpGDs2MmaWijojXpZXLKmKzGYp1cNBV4uWvWLzzpaigh7ekYuF2iyThw3LkMSoSA9PwTC1VHY6ig7",
  "key29": "44axHbd9x8qapX4CjCaVRZQ9Cu81ZLiAiU9Ea5Vh6fzuVTFpWoeC9W43eAjy1WHUse57ViffRjCrH6roSw5crrdM",
  "key30": "EUkYXYNPzwitd8TuuUCaNcp9iTmLAZT6ybxR9iHGBaMAHr2eGDzkBNXsSPjaA212mxpFvrHKHTwbdKrEgGy18vN",
  "key31": "244dNLjfjX71dQdTpU5k4o2LjiMbRzgnSGVtsupY3SvgrsqLDXcLKjQ66QV5CiWuXv5jK6bLAqzix8afGbmm1s6H",
  "key32": "5sK5MZGUHmoEp3hvnXxDaBqUPPb4DnubhM1J99mhJiLY7XNWSkVMPKjPxugqx61Bf91m7ZD6iN4LDH8CzVeUrSGk",
  "key33": "Pgyyz4Mzg65xShiH8LFC6SdJMJ13VqAP6Z4kCEcFGoBeLz2FB17yU933BL83C24bjgPRXzdb2JPbkWXMiLdsci8",
  "key34": "46524b3MhP8TCLsgo86WnTke1QrYf2voWcLZBcVj2LxQx2cRrFdoC27ykcgUGErGYLKwPfxuz2SQyzkniBc3wXXs",
  "key35": "ri7C64FWVZyxSjADiNiuTXfUKNEgMS1iVycWLTU5TTRtpDSUyiFbm2S2fkB1c2nrvnuzgJcA93Zggeow25iLWYb",
  "key36": "5kJniKSnd7YspThoXAXnQ5EmxgLyDCL959x1bj5NSX2gw1u8Yd9y5ZBPt3EbJgwZKS2CR597p7uiV77qzeMAajNp",
  "key37": "kEr5coyJY9cF4MF3RUmoKNPH1eCn9ZhYoKm82RBHNYJ1JbWsNcwFaVkT2aHj2XkqdnR1NFRhThjFQgnN1ENYE3W",
  "key38": "5qDWzMPkNXR6AECY1kSX9ms56XXbyfb6VSxwS1wgHQd5u3UoAHjRWdL8as9D4mSzEPYKexTJ2eDuv97Np4PVwxGi",
  "key39": "21d24ff8p8VyLwtLa3QFc9VpyajXyhMGe1KnUG28HpXzKQbg3FYerz4f5tk7TnQHntP6neLqAr72acHDqyngosKt",
  "key40": "rPqDVXyMM5UFYG9E9uvmqKaWLxM8rQuWGjQPwyWnYsQmoHcdpS3bFwf35ooa7GTsqCqgVCUfA3kbKJhK6vTn6tU",
  "key41": "4imGjBq4P9FmdrnzvARYm7VopP4zkzKMaNJYvj8DLTfiBXpuKw9J3xYdpFyN2qRLaPN6YpdyqgzVKPAscG15JMf",
  "key42": "4bLdUJULyYov4zVM5D9L5zhJNjfsWKuSwUkRNWZehULPmtaAUusXBQTcH2x8pzRybLoBbZR1wGf2N3kP6eFfGuV9",
  "key43": "47YoZdS3Fzc8whiADigy2UwwXXN6exH2mTBkEzU71Kz5HgUfsFYzxoAMaFykoShzWSsroekpFuL8qatBeNqf7Crx"
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
