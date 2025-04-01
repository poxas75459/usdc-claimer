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
    "2hMS5NTakUEcotwE76foQZjbxnKeQKmnDxfM6aciSoN8tFcQ4asTD5N5uPJh3CKkABGdTPSP2ctANNQmqiXhAqKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XfFCVCfRa83pXjav5os23QqMGbXCFJzv6CJgabcJL4xxxhFznKRXTEFsu14pz2xzJVaSeRRp9uwYH9D89R2aPjj",
  "key1": "5DqKq6YmeApSTbHkUEnjYETGrsAfZ16bQvdqLrko3hbGuhyCGAViYmR24qk4CPTdxpHyfX3wVBwVzo1msgDhTWuh",
  "key2": "wPrXGT3pkscMGWR87yMhUkoUNpHqHWG8gbrzDkC3Eg4fT4aP5fZGEYQoLhWZLJhsrxbhNn28va458ZLEMyiTGyS",
  "key3": "sE8sCaVpqfC1dFZgxMhCGE93r7mwVA4fsxyNYEhiifbYkmc9bNs4FozXBj6jWm4XiLMuBwv3zLqpeep2R8V29qy",
  "key4": "3yUnjf7DoYefd58BtkDMq39pxDfxaBy75tBMnFNBnrdKkx3kA4x8LMMYqMjMqp3xTtTuPZTzWL7JgecbvBn2k8Cz",
  "key5": "5muNsNL8AE13aVS1oyEg3CEBhRtF3TYaCVA6Kh1c45E1apNbGZCSa5kG39SSGZ5auLZj4EeX7YB6JMFUk2EVLAMz",
  "key6": "3uFNzNYo3KDC4xjvihsxoZqMYhBBMax8LeV9SEa1ZPZDcoVdNVrz18SHxgJ6GhqDpQ55KeK1eNtTVFGNwKjPzmkS",
  "key7": "CDXRyDJfkmUMFJdu6VcqA7sq5fVmG2bwohEKACKgxENXhWstcb82vuJGrQ9BgJBrUC1hYrNhoSUjGgMgPByZxa8",
  "key8": "2CibNexEa2heeVJFTuscazQFdVXVHTHvk8rtBajMv149f7dE7Rne9egMT3camvhEjpKfxRYUfg5K4CtxLLjczWKt",
  "key9": "4n8jU3a221GafffeUeanqwcqs6pGVoarEnNdjHYYbkahdPqvxaaWneLLHa9tvUchmLh84zBrfn1FSoWRbj4qQmmi",
  "key10": "pZyKA9LKmbv5xJ3sfGN7Uv4QcrwpV2kfHkDAGixUSoTTbjh2nHVcJLybLdqiuksaq6dcbAwpYK6rWGhZ5kmxYvL",
  "key11": "67TpXTGvn7hKmK5j6r1FF5s7mX6X154cpn4p9BGRz8T55X3ov2HHk1XsP1k8MBDDo7B3Zr7Yo18otFTZiprCHTxB",
  "key12": "2mX7oe4Ts614LTrJqpqj4J3fnr3bU1N8LqfobarUmC9AA9uxWQqqQfc421iYNQHkCH2oqygFZTds6L1RfEBjhrBP",
  "key13": "46wN4fVcUPBuxMs7oAkq9uJRrxcAdkX3ssLYQrKrMtYPRbhguyck5nLQ1ZZy4XfCYgNSryeDN7bhJvrdgpyuVXkZ",
  "key14": "54Y94JUcD4FDNS4ndHbjaCPyVfk8E2FrRqPbZsa1vKzoQPLDveZhqbZBc47eSY8ZJrswhpt67GuKghEbVo7NZn2j",
  "key15": "44NzLX6oWQeV31y3Rfq6H4L34QAruiGD3uKdFbciTvkpwffWf89BMtZkhyGKhynfaejR8dYNjihVy4N6USDMeFyL",
  "key16": "4F66ueS3QCR2MWYawoSzvMuuiTfCKDBt1hibUUD6AA5x1yzX9nkaFjpTAD7BV2TbxrKo4rGELGymeoFtd7RHnLfd",
  "key17": "3aUbtVoVUYy5ckWZpn7Mz7TaFKeMfMctpSnqqQJzYXSi1CEhXeXLopzqAiGWQ1zZBRdKU4QFM5X5ApAyAVbcXyHy",
  "key18": "5Vpz5JJ23jCqRepPHdDc8mLrWEJ7wgbNrhPTUvjyF9mTvuWQdRKYX5yJAKkzPMegKHkFRvatukjyoBAJwwdQ6Um5",
  "key19": "28sAy1kdsdLvaTKLSRaJzSpocr8qy5NE9RhzumVZyuntkZPmEK4t7FoR7SRMCvVxTCkZKuV8zzg6nf56thrTHssA",
  "key20": "4RzuLSTT6L1Jrd91HfELGpnLCgPS19So8dVetFeMNBKuWz5NsGw99TBSfhn2ZSzptnoEraa2aFcuniRcPktzdBtr",
  "key21": "3TcChzxpWAxr1JC6DC9pWf41RW7RFRwsYCL5sWMNQvC6aQtPXXceSKsHdGzk4fQB5vc51kfHgTUJXsoMaJqJjoj1",
  "key22": "3rgEQrtF67o1ow2Az5QC1KmgkiAnhVb3zMRuqMpYjhjJNrFmcbCiKkh2hZL3DKy3s97TB2d72od2n5GKwPv4bWKj",
  "key23": "5GFoWbK3KcRwoFLkKmGMwMoRmn2h1frKnaWcVpf9cehQe2YGfJveh6kin6JvsQH7i5hVx5ncBcUKkXWnQSXuKWoq",
  "key24": "2NZBnZbmiwtYh2NY6yhx26DFD7K3RskE29Pg9tBMgMnUTyfJSeNntMqUfKSC8ZLqsZ4GDyZkrVNJoQvxRzoT2Gun",
  "key25": "3LG7KMYiF6YLnVSnMvvisTLuwXApWQnnWQUozofBP1bxPb3fryrtriPTeLyTcZ3VMZMgVSTpX9m3bticDY4zCHpH",
  "key26": "2ptpdEu8yy9y4mNjdrRDFAedXtJXUtBVgMe39b4mBJieq4P1ety414Gx2uUxFWqE869naWRy8gkuExFwigwbHsSw",
  "key27": "42ARGUdd9BmBgA9ooufCCMPkRzpmUtuidiZacuiuE8zAEHHk5ibF3ztDGyUCgLbWbd6CrUUctpoCmVh4kRoUegvR",
  "key28": "5DQdzZqnEcSn5UX6z91hU6WhRYzWnS4MP8kyo8ndEfCEdW4XGQxtJNJnT3xKEJvCh6AA87ug1KX2c2d4bBKZzv7X",
  "key29": "22CU4N5GF4JcYWGxm7UPk8EATnL5AwSi6C9MHJL8YiKUoZ3L6fUdzy9AnpPGckMtfbNHcSSGQXwzZsm3UYKunfFU",
  "key30": "cFL1aT3WvWCqNZJjXY3GvUVCyP2f5Yh6CCbCRMaHjdSqhXGuwd9UEDGd5LsM29jTf1RyHjxCXWkstvmedZQBtJJ",
  "key31": "4KAQ9PHeCQ71ZTvE52omgpBAgw444L9hFRaCfykXGF89R1tF8KUb2vSBdu89a5Cypyhjsv78TBtigsdShMywbMgC",
  "key32": "48vseTdJrtoguZ7UwwC2PEmjoXHveRx89rM9fqWLdmUQd4ZfFjLUcAjrHYL7d3byhvMrPJbHh7nuZjKTevTWfsV8",
  "key33": "42TeETd37wAqfHnea1JPBHjQ773vRqieESohuoJgs8JXqNgfx7BNUSNvfe1yYXXmYUEUfjAyro9YHRfyWTczyzoM",
  "key34": "4Vab9PnpAZr4uQStkjuhfCM3Q3g9ewcCpfJ5eWocUqtAZCaPnVrDiwoVa5o7x5pzFP4b8L4G2e2mdEbb8DCerMsw",
  "key35": "4aJLbLrr6P8UyF5JLXbZBDwhE8deEejbV7bVWjYP4MnBQJhYwFCgaeALhPH119M8xKyKa4YTruTdDVXoJXSBdUcY",
  "key36": "5XEX4oV1MXykvYLvDUGjMgxocsEJMkteZa9HCuK999hwSnTDnx1EXvN1kz3EeZgEGrRAzptiC8ghgx13Eaht3yTL"
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
