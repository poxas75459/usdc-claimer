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
    "2MrAUyEQK3LgXGMM9pfVe4gDByCKtkrpa8Jn9TH24rsLovv52rvRS7SR94LN1v1FMAyQJjy82x2bebym7YBoRSDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669RpwdsQSLkkdfsb5bmksPYkSZCHjS9DSsWpzhAFEYr9kFhRUtSwVXYsHSrgZ1wvyyzJbVHXNqFQKnYVdwjjV1M",
  "key1": "54LuRYYDSxVXtXiCYV6QzkaxHoaAYaeazn8PN7ARZpe2UysfU8w4Kuc4dt9DHdfJCtqzVqNK5QG7Qe4fngrSqUHd",
  "key2": "5P1JMKYtdSuKVYPEWZorGAc1JPck32cwVRT5ya6UsspnSnJCN57FouBFN7m9AJmCvzmUK3QDMDEqhWYy95qL5sJ",
  "key3": "3ZoK6i3MJAe7YhEnVZY5KmSGn4vro5skkSpuoZsiH685CePzgL7rMuXT7tpwrSbbmZfv3DM1YdY93aduT6HBGymw",
  "key4": "2EcobPgiyCA5241qkDp9Mu7rH7LZCSmd3zdPuo3SkjyEKr7zkzLP3akzDw8freTJmBnGDj5kJT9eGPUcnGpEwB8f",
  "key5": "4wgqnTR1TxHcoKCR1BZU8Mp8VaKgu8ADAiAfQvMsa11eC9dHChuJv6Dy9YCEq9d5CEvFurefx5azTuyYpHdwpcoN",
  "key6": "8WhRxU4PxrsmravMbTkef3cGbAbC7L7iuYE5JTvWDfG8CNpQt74N8oYaEu4gNFP1gpbUnFnYWcjJqcWGULgbCaa",
  "key7": "5LMMPtcjsMSHtL3rTMqczuiFM1StyknvTEPAJEJx7zUN4u7VEfqPpSWMycrEAHjQ1uN6XA3VshAQr6gAG7ScpPKJ",
  "key8": "3BtRwajo6KKw3KDVoY8fYFxZ8jTx5sg11NKd7YwLiTD3zxT1WtcjnBJcYc1CEkr7WDNz7bXuddxnqeXBHMK4ntX2",
  "key9": "5ekD9zKtJG6h7SrjEHawsZkwuHmzYc59gjufc3WTEx97xc3Mba4VURqNX5Ave4WJhJJXLTBXtkryEKXhK6bqnr6a",
  "key10": "4J2HPiaeZ13k7FKYEdt9fQJgxKrT56pRLh143YPZh8mC2J5P2htbjE33c1oTUu71CNwJtuMSvEf8BPPvWpKyYpwZ",
  "key11": "3qMUhtB4wxUyZ19rWqpQG7P7CUwuDj6S51pqruwhLXVBVFkuj2U2U1ReMy17hqEoaLyBPai54MmYDwkTZifE37Zh",
  "key12": "2QxBJtKyHfyaZMTqxWeCm3j3HcFd1zoiftemFLVshrKBrh8FPDfEMhZFdzmnjP3HTq5QUKnXdJFADjco3YfKtmoA",
  "key13": "VHiLfos3DQE9rnRqN2UH1cahLRYkDX1w9krs6bLuEDniiCJ75HUk8aZiYkyb7wqnfe7tc5RAFmeKKvvuGkbRDuC",
  "key14": "gLPsj2U2Rq5SPjoKNv1Mi5vK3SvRWWqvif7mwyoQKoiLwcScpgwHCMy1goZphHjmAARzqm6EXSR6LY8DbXHiuat",
  "key15": "5kvCviJLdvycqM1YA3AsyU9NbE7h7bD1Yyna6xnc5k4dQhr1KW88EDfjd8DvUyhuZd1Px9Edqn76UNCQNhRLhXhk",
  "key16": "hpNveFyjom3AyUvDVVcgZfw5shSuCLKPt2yanF9F6bbHfdp5gxKW6c9tJ3mor3MK6rrGoD19XgYp1ZXmccJRBoD",
  "key17": "51pPM5NXK8ULYyi1feBoiVK93rpzenGH8HDJ3sLdifXb1XvTdS1YBB8PRTdSVwdpLSrfHy8emrrFEswJ9GSoUa34",
  "key18": "34NXzGjz9qJ8ithNRFpDGmuhquWxCYw7tMu3nKy2YV3pJcULFv9Dq9rUk6Upj1wBJijXmwd6k6sfbL26ygZCXeMj",
  "key19": "4Pbq5S2eT72CnhEZWbk8Vru1yXPQGBA7J8QP9az79eFvDAFzNja2njaU6CK8ib1vLzfy1rJDVcE3PmrXibouNZVV",
  "key20": "2KSgUBiT34uvTae53Wa4fFxJvcYSfoEFien6NExdEteEpyysdDiZxa3KQjm256vYeJYdBz9TxbipJUBuVkxXZBup",
  "key21": "3LVaBYq2qCe8K3ryrZ4tyaSjuJUiXzqWJqsVkTitYUGbmZwJQpWPwZTm5A5vvdZx7NFEz44jmyUAJi6weCtfGssK",
  "key22": "5sw7tLZejswEsPu38ce736WB4qXrvtiTzhQjBCZbbfQp6BqEn7kWQKgK6tqU9C1eaLzLztLH4ApEjhiSND242WmV",
  "key23": "5Mj4H4WiSASvzGPBoZmr95V6u4p8pjYsmvJnf4oBZvffw7LdgVfWs1bCRwFfz1WAsGQWRRp9hSveSHX3UtZ9cngw",
  "key24": "5tPvUQUKEPTFcAS6TaEUFaH4rwrBpsWT81SP6nz4MefN3vwECJHU5o2iwgKrV7cAQrY1MVojxCwVGTzbn3ZF7JqA",
  "key25": "G9pEVp2jDMLS9GVYxnr3cehxXLqr1hBS7M6oAaZkz4PsUn3gMtjjgpNeMZbfwoEU2FFF1hedHehzMmVqchZZBci",
  "key26": "sudvkr9f8daaHa1XcnLkTTfwV34NkcK4EfVQeu34MimT2cmFH7AqSXugTeid4CocKpMgWXPz6TA1Rs41VkaV5UK",
  "key27": "5FQTn7Ca6Xsgp7XENWAxQxBneUPmQEc3jXya35YLPRmYsMkqELvtnP9d9WVfrcJNs2r8q5CzoHH6PCiXZnsL2opt",
  "key28": "2zyV44M2PXA1MhM9362AV3fYBX4UZdr2Eaetfgj7B78LBfRYfgtMQ4CStF4WYiNRhfk3gxVzJAD6hHCnFu6SN2HG",
  "key29": "3rmLNk2yK6cDCbHFw42y5ZA6Gi1fLPk3v2hwWv5GoYUpS5tzxfP45JcVdrZrpan7HR6dvRQaFQiaPXts611YJoWN",
  "key30": "5gwVPyKwWK16d7cxw5SVLBdYPi8F2FwpPwak3wtStiCZxyCTAyRhbspGFNRQd8usWSkh9jZqHaPrFWbYEpiWUULp",
  "key31": "5avWwUuFbRVYLWJfug7xAduCeQkQ2JmS7agEFyApzU1E4hg7kUrhb5cssFxyXSJHLdZqG7YVjvaybiggwe7QTsSv",
  "key32": "2ZWgic6yfRwvWoV2VCaoRSxhg8dYAbDxwNLgnnpEpr8otzVAgXKdvRrE6QJQHhHoGx6upy7A9hoc1iMAGExanQtG",
  "key33": "66bgeAGLoPPUUVJaZqXJAygH7PY1eRDhf6ggtGzMwmPZ9M1pZBTksrVrj3S4ANoNKBx8r6X6fpZLky9ezXi1a1xs",
  "key34": "4LfmzhREytBoRAajcuAvqjQ1RjdRa8ZEkDMtCAXAAuepbYMgCAVLwCDt5T3V1jaFavBULqJeZoZBnH3yKBxzkt8p",
  "key35": "39akiioHb5q853Gw9uNzh3jYzPfwfU1SWuiQCMRhM4gN2GMXMEk8Y37BQeaChfNtQYcDASsgBWTfaDWBwuNdFwPm",
  "key36": "3cWZPYpYCKPN4yitYmw4nRWyYREbntEG5iBwvoKUoHeT4F4y2AEVpFzFGuoBrPwe7Vni963LRrcuBVaTfYDeC6CQ",
  "key37": "tWZD3GM5vxX4qjQ1Xzu2CrgWRfKMv8R5YMNLzK98YupgyphBmiMmaba9YkyEaib5vT8FUfHJyqTFtRRBpRRn5Tg",
  "key38": "5xWYF1xDPzsQWd413z5rsbammk8KbSJwqtYm1fzRaVZXTjRE9MEz1NHSDudUepyL291C2Xn5mpnc6AvzEaRJYmtd",
  "key39": "61MtFVNpJDabFZmV7La4utU1wjeByAfQ13fXvY4PekVuFm7fWWxp2VVMHYFdazRKK6EbhBqfvYETzGCtFsvHqjkT",
  "key40": "5L7qzKN4mvY84sVCBcmDL3q242UG2ddeMarDWrfiKpzgLF3kNReZ5ryDwwFbuSNbzFSDmnyesuMnW82G7ZkqqzTd",
  "key41": "2oBUWAKU1PzqjWKLwFGBPUdeGQwh125bnmwcDpGTdQRwZZ83DAPWHQYp4Jbbv8ZF87UeB2EmV726rjjysbFSrBTQ",
  "key42": "sXTxqdqpfMSzUKLLwY3S88JCLiivD2wuuiQrPTMykr39DQJEJaxAwHQiKwBr4vVp3zVUPN5fKvfTVqmLfUfnwTM",
  "key43": "3fKvHgjjAQrXK8vt5fv9fTGDT2EPRrtaSszNBqcFo1d5z3JM97zxdFMz7y3yU6XgkMh1S8tBHSkdEGBQmEXx2Cns",
  "key44": "Vg37Awuoup7Rg7LDPCi7nxu3ZcKNZaQrshM427R48dUDpazyPHsb11wnu2DbGZmNXLJjxmvqv7k1fWyGXLromLf",
  "key45": "hZsRq3swvu8dPo6Zb2tc4fi5c3tBjWdk65f27nGuJy8mxPVg6bndnCGgD2YsZSQAKxUByGAYuC7HieeEqeq2PVB"
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
