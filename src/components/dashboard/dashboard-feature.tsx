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
    "2uRLayQWLE6E12tnfZyMnhMvE9obC2f3eJDUvdRc2yfZFJWhwqmL9MK1j7kUDMduFWPxV3seNmtFtoFVexdfsxnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRuQBSJ3dqyu1VcgatBFqNtuB3a5PbUxXbYy8U4veA45UjPz3RABfTSStcLZTeLNCMzFXkpyJLcUKEVwHdVo9Zx",
  "key1": "3cWvw8dUfdFWvbbzvCq8dv8uiGbizYXi417kwDuyyrBzBstkJtmfb9mK39LudDaxL2rgEH9iAEbQxNHW1UsdmVLz",
  "key2": "5uAiAaFa2gBaqBJyKr9teBB51jzqU5Zu1Jo2XSt7gw7oueM6XYCTWiyQe8AJJspQhDoyY9sM98q83KWyVeENSDU8",
  "key3": "ASx9iZzus5KTNvjmVpSZ5tosawCb6BURMQ9tBMhcECQ8gaypqjVDq5HB5Npj4SWvWqaZFABanfbk1GgwUTKGkw3",
  "key4": "4pJopTWu6piPGiUER5oRZR6s9KQZ1tAUf5573Fe6Yyo77uaeswWYLxtWGaKCpc2hmMWRhwbQutnyWpHTKDD8hT3Z",
  "key5": "45zT8cH8txmnjCL6FrJR6bg1uWKKo3raTvcQf6TJy58P9kpD756ngFb9HFZSrNe2RJ33c1iRuqXxhw7tcvQzJRQM",
  "key6": "4tM4a1QF1pSdmCQ7EYQj75kEdxuK3TDFV78iSaFoiLU4fk9GVGmDrThHgBAkuGCDXKKgb6t4fXJT8bCsYWAnvi9f",
  "key7": "4RYusqQ186cVYDPYAMGqVParJgiuDnTGvNAot4EdaZWHspNUo83dtP2prRZr7A9yQij96ADfjCCXHw8e7bir9TEb",
  "key8": "YjsMSg5ojxZLa3tPUeUCwHSt72rZQK4M4JBH6PL95vxqcTofbhTVUNt7Rsm8VNKZUAfx7Ju5mK9KRwBiuYVa8xk",
  "key9": "37wqiXd6c9DCUCTLksXeicRvL8cCiADUHBrYafWdu5bjePfDsYpQpted8W1eWfxD2Ltq6rKfYGYVDf5duVKTUUjw",
  "key10": "Kqsm1M4pYY5bdmz5pbDQGriTWE4Yw6uyPQSXnHpAhFnfS9P7wNF4Lf7UGKshmUaUUw684MvJExUvuz8njS4JuRT",
  "key11": "4qKSuYvyFZUHFq8QjVpZbG3mVHXm9E9HVLCTeu2bXPqukJvPt3JrHUtK9LyXgBt2sWb2dbBC1A5hj2gh8yG9jVZR",
  "key12": "45DrDFFE4zduKkTSsL8Xnqexz8YHWL24jNf3ckteT3FcXjcnXFVCWhv4xpVjXGqYUyyAXbijSKZr2X6Ga79F4E2L",
  "key13": "4mAYtuJCbHU1ppQDRrkMg1CgzmVaiZNLB16hfhSiyRfV2act9fqtKwfTnizxLwBTyk48h3EWqPDaw4WdAnRUYvsE",
  "key14": "GcnixsvnRUUE9CgiSTsM5Shc2oooMg9MjYxxyt39S9hJj4ZR9FMSzzp5hmaFeNvJg5qEzkbmZPuZZtSN87oVhjK",
  "key15": "dG1kR2qdRNfenceq8g4J6A1daEDvVEoQExeqjyXWG4a4iJKsak4gc68kK43WdC5BXLNe9nTuvzC9E3TKsE94fKR",
  "key16": "5MjB5LExT6r7BnTPYa9tZ5tyYdC77DdXAU3dwG523x8JhCbUhhz2ARbQ4bFyGoRpQvMwps18TNRf3cCGotU18RtG",
  "key17": "xo8gNSreHVYuWKiuNp78cL5CEEkvNWzofWgeF1Vgf61FtfviRab1AdwwqkUFRf9DMc2DQfMZFyQ44dwEohXbVmF",
  "key18": "4dPQB8xiFrUUmD8JoNJwRwpUvcnuQx4nYsV44ErmzajL3tAv1Z4QtsHSn9HH8GeHUNicqS7taXgdH8PFsqvnFHHz",
  "key19": "4vCnWgsPmk3yd6QF8NNWYnJTirMooJ5aWbRCKFoonxbMY9dxAqFSyW6iqNDpjfJyg8Gd32UCoBGU8FJgZdRwjt5c",
  "key20": "3T5QgyN7TrLchYpT2icVrdRWMXsUWBJnPYMaTrSe63wj8fMidrB1yVNLegr8myqqHFMuFYbvBswkKLCTkXUcPiom",
  "key21": "3qRrebxaWymSWBk963FzvaTs56jRoF5BWuZcMsXcsBvPkqS5jgKL3zw3BnFL5fDfuGoZEoiGCkM1HA9ADByUihQx",
  "key22": "3BbEshE1nZ73wTFxC2EUmPje9QwmqKmictDEH87WxmSX4i5PQcMxH1ZxxXSV7ueUNY7xRPJSVjEP6eStvcVoumo1",
  "key23": "4ikQ3aq9p693CWH9cYmQzBgpnJHnRigPFh72rE934tPwMiRQkJN9bdTc9ktDufJE1rAdRh95VUSkez2s6BD4L2pQ",
  "key24": "3LwhB62in5hTBRuV4WsGC5PM1DSB2Asj4fCGvz5R9h6P4uDjmiLXrWzBPujYdKfUmCUiCrJJyTMoZnRVebSYoT3k",
  "key25": "YLmzRphcPxEwmdjwiyHX7nUZcgtURvh63HYWckohErP2i9ArFdmgWEiuRWhJggiRuLobymWo43EWXGH8BMG94Sz",
  "key26": "5H3ckUqvMgqSZR3f4yDD1k8t49gms5dFwHNmWvkz4HijEMx2JYTchfgTMUjK14DNkLk1DXgXHoT4t1nCNkzGmK3U",
  "key27": "4Gh9Y8cBMru2tchwMWXuyTCjdpQm1mW1FEixywxL4z8NRQuiq9iPsHdS5RpR6gRyRZSLAjQVEKHWCxGrRV5Lp4jK",
  "key28": "24ph3EugGqtU23nUpinJwcx2RepFWFRDBXuwLS4srM4LvPM3oiJuELHWpHmEgvieiFpC29r5DbZPW3DkAz29fYkU",
  "key29": "52F4Wmu6nMGTZ4CFDPoXDsiKkpCvJBKWDGxf9foXqoy2FBVFZ4LZLRMgeZx2YuLcX7jueZD1C1G75FXLgeEvbTvf",
  "key30": "4CzasdnsoJLcss536nJmv9T8gNz3viS4ovdAAc8eJZZ9E4hCcxtuRQjuahGCcbpGWrbeVq3rgsgsoHtr5WokY571",
  "key31": "ohT9i8iJZWC9BL4T6dUvZf5mB1KPPsfVCC1FQgDew4tNs1C8Nfo4EwEfsTk2ajNqFWnXAf7kYsZ7JhAEjCD1BL8",
  "key32": "2ozSaYmf8jW4ybaJv2pWHap2gDJbMmQRi8Gkj9U4rjBdG4Wp21iw4ZM6URTFXQDoXAnKHa2f7MF6hEVDVcwm1BWV",
  "key33": "wujWrxkwYnUGN4mtcCsfSCAy35NuqPNV128ccb4d9rqBAVhT3AGDigG1DzXjzmh9BcxKMwuJngqVVMiVEXrwJbA",
  "key34": "3JvDF4b4rjDSzPQq87heCeLiMBWxLrTdv7vzR48AFMz4zASJadRdCkBB6gMBx5GUBUU6QgmXc9cVhbB8tvRqAnuF",
  "key35": "4Pd2kvVBAXUZuj9VCxkhTRe6xgGLcCEzfi7UraD7Apd4gkHjHmg594KaQnYGyPC1HqpRPqW1KFAaNQqZQFGQgd1v",
  "key36": "jXHav8keQzGoPaxPdpSqFHhUhMau6TCDDzxwknCU7CDd5aLBpZdmtxatyMwzcvgB7GW3mECtRktDCQV8Ux4ojNy",
  "key37": "66wHDNb1ime3QQTFpti45dkkdtr3aAbDLZg7X6FbviRVCEcm8RHWBcn4jDUakec16UTGbrL5k1uKWGC9jymMb4pp",
  "key38": "5JzM4Nq6zm3Zd14y3YAneSBWwQEFTGvA54Mi9hAa2qemveae7iJEWbbvFvx9ZpjkM4NgjDYbKCso6NWL7TmnDdhA",
  "key39": "pyrc8ZgrTQaVTqe2qJiqcnzSX1XFaEwzn8h8Lv36AFbd6UR85KShLxWoJMGeGmKyfPnx2XoepV8EaWbDtJdBMVQ",
  "key40": "2Y5cQgG3jcNp7KhfxpwuFAFTQnZftYwicTkgJuDuucSkNYVYHUTh3dZe28YPiMJXMYR1zHZcW4VxL9kaXZuxuEWj"
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
