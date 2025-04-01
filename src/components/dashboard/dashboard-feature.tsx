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
    "3wYE1aepd5obnN9iRn3bWMBmD4hcxaLGanMNxfYXMMSwPf5559BbygorzFSgh1mkjBY8u8fvMFp7PaZgXC7wVWbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rTbjAUimmv4z2EuFvrQerE9i6SF6ek8f66zAnm7uJNeDScxEA1n88FcCU6sJZ1cmmc1eggjZiZJEGMGV4GNsZ34",
  "key1": "3L8qp7L8g1a3SabWcDw1qwhPXqj8GixaV9jBS4mV1Bn8wfERLyfJhJKHMVpMgPG88LoonRrZAKRNN64DC2WYdSvp",
  "key2": "2Jb9nTmH9R7CmMSg123revD5zyVN1Z2XbwSjVBob7xMPAjxgSns7vjLyxAJdhDNwMH6WXa91bxVbqVrpGwCBn5L6",
  "key3": "4paquntWMjvtRV5VBECMVK7ikN15mp14UVchiBPf2smsntxJeH7F4QpBirmDckjPiVSr6FjDMBYkRtrHmq22ReUx",
  "key4": "nGtu9tU1ZdLZqofmbyWKKS3cxh2ihBvq8jbdeH6F4ZzaXqzHbNMu9jVpWPDfBCpWCFxzs1Ln7ugr8A8bSKSm7de",
  "key5": "2azUCBtVfRs4pHwBf6nfWtnPxx7V3mAqGWnSgGaaXwU8wpAJkdTm1zF5h3hf5pWKo2ysy1JdBJr7sN7sCU7cEV6w",
  "key6": "3owynU8jJ2fztvSPh2Zfhn6XCR5yLucBSgZy7tKTqeHFfHtijDYSyAHFqCbewdmCjWoHJQP5N56dnWphwuoNycfR",
  "key7": "2uSsfJdiRjGBTiz9hxVZVszBFLFqj1itRbW6qffm7VrQaURw8BiYUgvobKoouTfaGQnUMpRuyNsA4FZmg92Efftj",
  "key8": "4Gvc9MivN1P6aS8HSbQQ9u8JHCbGCPwy5YKdgSi24SfwT8idCoyPZALJmCGA1n8uhdfYDc8Wbcpta98vHbVDsT45",
  "key9": "aoB5au5nF8mtMkG4eF4Wm8jaKFNjTfEySsysy5V5mBBKy78kcJcdk7ZpeRj51yKSEkqpKGR4ceXYX62qh3APFQh",
  "key10": "63X1We74q23c5yz8JdK5jALMdscFzNp9t3B9kdPXuDBSEoHgveureexKZSHszbgy6kAXzLnTyXvBSEZbWrHZi4u6",
  "key11": "5ouXVtWtnJbq9Ld1gUpeRaQvhPq73c4iWSiVmPhmAdsUnD8JESfVdfuJxQRmfNYVn7CNMJtXhs41N792Tj917SjP",
  "key12": "3Kxktv6x26eEyoUbTYZcWNtAwxZPGqq6bvBLvpPcSyiSU8sBKMbhpxxJiR6pMDsEPeCaR2apvsfbH2sUikJXd2h8",
  "key13": "5tUx3jmqMjLoPyeUDW5PSQo9UHy6FMkNrLRo7Xrtd1RBw3i7CDo8GfLPo8CPUG1TkPbBErUAEsaTXL52UsDSb6aq",
  "key14": "GGYqUQ6vffjJUzrkqcvnCoS5XqdCEx82EMjoULdG5nGA5ibi3RjBNeNVY4BdksvV3yonXxn4VAcRRdXYS4qcPaZ",
  "key15": "57b948xT1YqG9K8TmFSJd7BXWDxcAoMxFD4uY723bYJ2MS3xaUGiwchZPEZuMErhxqhokBUsXRpYrWic688Yin6e",
  "key16": "21pS8EMW2gEMDEvZkqBo7kbbnq4ReFPJrtU1BgKjs48QnAPM2KWCMWSWQauhEXmgksBspd81sVWeoqxvCHd1PU6Q",
  "key17": "5x9iLkmzxsqsWnGQzSE7vHtHpmBVHEE3VyPU9YF3DjRRD5wVmfyNFgNVPbGP6dw8ZWbjyL9t4XhTSj3EkohTcvcL",
  "key18": "kquWpzVuuNDvuDVKXMDBcHJ7WQc5ACnHXRW9YMtxTb9SGcVhNZwdL4G7tgdBGiiXkFFroY4o82mqw9HjQDJNwAw",
  "key19": "2RxDsZ6z7SF8xKoGuq9TYCztFwyhZxMpVMP6KTcTMUquci9CSebezWx1dNpSxfUT2aLcQCqdunAC3j2FyzVSn6zC",
  "key20": "2tuGQJmtu7uWkUNX89v3PoKwhCERLmBU849BKDzNP2VRTd6keJdiiWysvWNcsksMjLJhK3hvZx4h9aCUw3mEZukP",
  "key21": "54mxW82wdjrfMLy7ZoYokGYNq8F5eELKk6nnQK5mQiJni93RqkyyUhrXS63QmhwkRxzh8qQx4mCEMitNYvznX8w9",
  "key22": "4urbbarkNnnRgzuUncbw356vJQVzcGrLQ4v75q2h3NHfJFsJTJbmheHmEmohU452TiS2jB5ozmSQ371T2YZ62DEw",
  "key23": "5edwTSoBQPyZ8xMgRLUnbiiZ4fhx5cMq3c8KVmpkqw4zGs4QLp6sULbWPLLN4JPURLVNpy1uoGZGSfbo4LYN3rFK",
  "key24": "3fXMbVWgrzdzhbpCSNek8Lkb2PKoPDYA7YFydVCL7Bhsn4sWJxtWvHR1iEVyE2WreXK5aEHxqsJ6kh6a6estTT96",
  "key25": "3Hd8nSYeaVSEteiv9QwzTniDXjxqaCdMgHuqbuZ7bUdMi2QfqvsMPJaCXr13rqpSTHpAyd6hd4LG5qCUELu7AEUX",
  "key26": "5i9y9VTMZwhZdHTByuaoj1H9JEbBNvwRR48mxubNM1qyu73VvCm29khkmL5Xrfa6V3pifxBVGPhbMz4f5ruLTxw3",
  "key27": "oRmmTRc8UL9Jd8D8fjLU8tzMcy5yoZHaA5dPFJx98oRLUy7Bo2d8mMYtaJDN9YGVHiS2zurTrNHnbnuqoCyuFQC",
  "key28": "4SRSx59CGd59HpwDCKBtT9VFDxgLDH3p8HYvcxK7ZZ4hmCt9yKnKnLRGNGL2JgVSdZsYBTtnxszZ64prbvZ3tKjs"
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
