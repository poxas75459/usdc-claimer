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
    "4x8HaCkJeshvUFdvqR6pTU7h2XpNrV2FEGP5YgUNohreJLiZ4QXdet8kbKErpULvCdKYoxbFNVdVgMHN5oqno1Hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4FxmMtfA4zGE5sh1BgE9SKTwMS2Lh6AoTFDSqG1iXwXfy2ETxLV2Wng1M2nvvH22CFfVooEKeVziCtbMfNnWTT",
  "key1": "4CSjvsW65zRiThFkpYFZMvZWbYxQRZjzRALrSpsQCDybUA138mnXjuwKRjM1qqPkaQhEq2xkMZUKGLdPXKBR7y9H",
  "key2": "4VNX9dnWCdfzhWsj33oxE2qLBiXJBwTysHXrBn5Kpj4pRkQ3ZdYRcdLbeaNgxqU8t1NkGbFxrgNHJEfo7cCc3Xox",
  "key3": "4dX4MttHwvjBoYrpqfsrhaxZ57fXfdDjFNKxCLJ6Pd15X9hTqQLN4uDQGP6o98x1HUKoW1DHCTLQGtwbgiZbrbnN",
  "key4": "32avKJk9ZGCKAtUggLK4n4nUEvznj5J5VaueBpFEso8h1r8psAdC3u7DAWu1xzkW6VbFmnzRNFzgmeuSv4nNvQCj",
  "key5": "RpUA3RL2kLBrL9kqg3fEVmxLzHqpjkKtudQzKT7FP6HwCZYMaq3KvL4wbQ1n7NG2eYr1NLR4wd36iZst6gfSBzm",
  "key6": "nH53xDjhLNSev8x5X7PywLWqF2uY6RLHjkaAah5ahc8sY1b17rwWAAKZB5tEyocskKZrFa3Ldz61udnr1Dgz46r",
  "key7": "2q5MQG6DqJtRQAYX6vVK6ShdkRoxeiEFNxzYWQr6XH1zYDn1RnrhAAY7ihk1A3zvNwTehwiJZse6cU8325SPkt8H",
  "key8": "3XNjpvCz8e15oLTKcHEFgiYw2JmUGUBU17mius9qmzGVeWZQgPTuBsaRDnbMJmSdxueaaFzBWg64fYmeL7HLu5vD",
  "key9": "2k8kTqQGD3kDQwinEBFFAGesmicxaU7sxh7azqXSdtWbocrEFZZFZbVFwvgLUtUD5ELxavj9hUytG9zQwiHK7nBA",
  "key10": "VuVWt5VhaiVVpkwyqcewT6AZn9WUx3TPiZGgyyqQiLxfSrB7cK6gupWr8Fisipy1DyHCUXKYYcDEB5kADhZTsGg",
  "key11": "4CSYTGwGzP46rLVv9NUYNNS7gNvADqutEwWufTvFjDzpEcwJLHyASaqDVTxrMBu5ctFF81FJGENRbLYvHHy2189F",
  "key12": "54fcUeBaHukRQEDReANLaUzHSMAsDCjKj4VDtzGxqjSCrQqyBHrVkevjzHegBXW6dVCWkKw3RcrM7bYi1yn1GDbU",
  "key13": "8Pz4pqMEafAuyY6nFjyoPEHWL2m1RtnXoUDFS96ieykC752CTLXdsic7CqsMopMiDd4GAinwWrLa8UNyQY68hkM",
  "key14": "3DGpQRrupz2MRVA9zi4y66iQMSDsA2dHGYp1V1j8awRL3oG85dzMVwptPtpQCgRfVSURk9q3oLeqQUoikosFjzo9",
  "key15": "4AhFotiRhpmnvenDiVru8FvqhCdCLTf4MjBtDWmLBsdZEPsFDpRG37TzWFTntJBUDrHpmbsEgmWWUz1MhqndYiEA",
  "key16": "W94h67ZiXSnm8c1csbuKxMEAwgV9jjsh8e7x1c7pV4Nd2bCKQ93Lddk4noQnWGJDziUpGMEipdqumwC3Cw16wiH",
  "key17": "wEUXgMBWcsV6bbbmiMrByttMDardc2aic19RdU8gKWLR7gPxnnW9m3eVigHFLnXvbcTY3Ya8muqDkSPYe2vKNH9",
  "key18": "3u43CW8syaK6Wbn38V7uNPYxetgt5mkbttnmKJ54RFmF3n2hvjsf7XeZf45zzwkdzs3AfrLYt8MZTZ1rq1BdS1X2",
  "key19": "4tRBANR57ZmLSsXCFu6kGKZmG4T94YpChFVwHZw2szBZZv7JdMYViK3CWAA5CrsbRhgx4X7zj3eVGbdAJHaWkVw7",
  "key20": "2tvRe89KtihXd5wzbrwhMcQVRB5fGPEkxZTEPFjNv47AUNBaerRBztaTuDnjm35MpVocir7MF9WuYezoASvuP21B",
  "key21": "M6uuMTpz7pc3nBEQS9ECjjZ8TBT7FMNbttptBFx97M9Kh6ik8jHF6CUZFu7LD4iLFcTcgxT1QwpLZnGB14msSa5",
  "key22": "2RYomgut5D4xi3tkbzPNN2u4tQWJSCQ86YwYE2H4BaMXjNtg3dhA2ERrDUgUSkYMRPYtz8tGd15w1ZH9ghGsxDnP",
  "key23": "2RKEGsEkqMms3VdyoRD4YyqxMMzbtdPybGRcPjoEF9bgPCMfzd6WxJEsSgUTbcDq5ZTRaQVSukSb9oXaKhJEkEa8",
  "key24": "4V1fshto2mAvCUd77hrVFQ7c1XswQeAqQ3GU4RSHrLr4grWqDStDFsrkGuENf1R2wFW7UvWSXFSBB2vzZ9VbebJ4",
  "key25": "2t1TTyoqFjeeHDvmVpdTTQHnEtP5NaoishKdKwZEgiy4PofFt1AFBxb5YQMbjMT21sXdg7qBRP3jFxTnP6PTD9zW",
  "key26": "5UseDtcrXMC7KDqFDHPPkX8jicwX8zHHDJ8PowM2RqCnx2dU7U37g9tmj2PXjFS5mDErWtwqWou5giULA2wwK2LE",
  "key27": "3KTF8QGEsokT7KDLwKFtD2V57fvBSaTkdy1DoTw8GbhuNEYTLCS3qsa4dtxbq6JuRi6X35Msg6qrHfYjGUSCFF1u",
  "key28": "3D6vSwwWkGejaqxzNL9VjUxx6nxfoeQwzRfNaqnV5ngLhGZTq45NMDXXT76awmoz4rXKgdkm6pWiGGvcCwx3hCvX",
  "key29": "3KPRrgJq49vHnRioX4WnRnDwXo8mSvhSkpKi9oCdEg2xwvckxcuZ8yjRNDxwjAshmvh5r2qPryihFuRfwpC1zocy",
  "key30": "2qXpq2bPPcxY3FrbtMpqtbs4mMR8aAWkTnu6eXj5nAw8dmo83uj9WYEhVPsKRzoy9UFpRN7tDq6H3go8diFNuJxv",
  "key31": "3BoPB2UCyxnPAjTHXeBEbnWVCwZy9YWn3qdxzhpb97fvRX86ZP9qHcdyZGXRgzGobKdL8MXgSYnrHSjig4KrkNT2",
  "key32": "5TxVPvfES6PSs8TUf35kDRDTEhWdS2qugxDfbEaVsXQYLKhwmBLwMw6ZrP4i2GHC92RFsFWrYEuFHW833YYsV8HG",
  "key33": "5sZGd8ings4C2avsWZA1aR1Lr9mU4rAgqDJmZM5ob6Q66AngWW9v7nbcjM1nFJ625HzFi5Bmapjo9Ya2DNomcE85",
  "key34": "2471yXwQh4eVV7Nu37xbajQLRx3wH7FkNfferwsh99xjYLXMKaoDKNV1tz9We1L3Gotf8JtaWjDLgE7SkopwQLF1",
  "key35": "4HPpGGAMJgsVswEoKjDtHzZRZxXUcyWCU4PpskLTLW5K6iB1ekvvYLYevUdinZRVyCGH5oHqJnjkeAk5unqQXFe6",
  "key36": "3exes5jvW48Xwc7XDauXAEXukMepxNPXi1PPBzS3sJkWz4T9BeHupY2XLGDLBBvw5wWbJEWi3wh7a59M53S3kYYk",
  "key37": "4p3QevCgBA91zgXdY9mhyZ7wZTZk28N52wTHL7gUA54ZtK8ei3SX12oHvt8G7wr83T5S6Fzks6fGQD1S8zkCn6UG",
  "key38": "21VmZg6YeKGAqDE6kEBKiqwPFF3XP4iajFMAMh5Uk6jho5k5qXwjvTvV7VhK4NjGZWk5yjjhraF5UyJn7e6GmPpd",
  "key39": "i2CSgqx4tbNFQPoBp6k6mqmo19sFfDA6JGWFvffPVi1bTF8XK7CxV4koVNQnpM4hViBsSDCe6tkjy3fd7x9yo9s",
  "key40": "33yuMsaZmfXQBycmbTJPBDm4QwzCjhh4VdAvF6LnLRofG3yNCAtEbufPEzUR8jQSgV132XwzJtmc76r9HcJg77gV",
  "key41": "3SrMjW7xdKSeUgSAN156wgKNxCzeWU6k2tqbs1UkXyQtfE95TNVmSo8ShkdzRRxPy8svCVWfmGmSYULPmEjUNFKR",
  "key42": "43rcNjfmMkKshTYUqTytMm6HNEGKaouvydwdNLpbstjA2pAcnpexUMU2DyEPe9Euh1UqtR4tWs5m44jrnd43DZBq",
  "key43": "3fsc9Evt5tBgiZg4K4C7ooA9MMe3fL8UoLx7Pu3Q5ETRpiNZwjCZ7o3oqxXxqBmZzaWo6cdjrYSSs3A9PB69uHg2",
  "key44": "9hzCgYZvPTbshDx48thynwir2f47XMzDoEemzpwSqneSMCz4WrUcWpF7sFK29k84yxPQdAnCPNjvMpN3kmfgPir",
  "key45": "5XRxiauFkzB9Zt4NAXpAQjuQPNJ4w9KvFCBxodrZ6KLyDBfY4rCJn9Qd8nWPVqjjQnTjPTfUuXzPoNQx8XdoL4uV",
  "key46": "Ntv1GPeDG1wEMGBVyshBKRxMZf97PBXUSBsrhAPVRHtx7R7vHKUxssywuLsAJmDVkrJEBj6SqgMno1nny3KcZuV",
  "key47": "4LDaqmaLseCjueaFrQPEBYG48zq6JtGjkGSQd4tCXXr4Pew6EET1E2hR4CRHRB5jJQo7muDiYzdWJuk5k3DEmDWS",
  "key48": "4FBozckR8emQwj9YXW2JB3v7PVfGy7PguAGiTgiWg8aNGEhpCHnHXft5GkrwacoPtoto9Z81FGP95ZFdCcDWzBU9"
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
