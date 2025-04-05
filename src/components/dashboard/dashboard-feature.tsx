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
    "46a3SDjx47MGRbAbrJhaRp63CYKzorMLZzuKgpFh4esvdyTZUHqVnCJ9MpMqNcdNz3QT7Zx73x5fRD4ALjFjEwCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVdVAHYfSMkykvM9zFZUxVB3awKXhdXR5Srb4Tjfpibm2M5bqJ38Y6XmPqoRnvEXuUUuh2FP1uoWochEnwjTSr2",
  "key1": "5M6s6WosNLSSe94C2YfdwsHrGXVhLTg1FfHUub5yZcuH6PA7TJQncsGa5Vd6WXaerkUqFvUMnrDi9Bj5Wxdka2RJ",
  "key2": "3zBAQ8r74UysKv8vb9cpJBLQ5nhYhHZ3RmYfQGcnFjeSpkQbTRVeyrLpCXGofLAPNtyTCygTXHAfGMyPLrbA13ci",
  "key3": "442vS68h8gdmCdM52Shdfxq5SduvDsLzZ2GsiAwxNWih7fbaxzgQw8P2FQoLHNh5wBJuiDrD4dNjZB1YNrFLmqLG",
  "key4": "3255kVouoUytHVLZJ3sKBUv67eA8ZeqzttSEiDweSNDzya1UCqTnftjpqv9R6oirxgwNdYmLhDh6V4m5LGC3Uf8C",
  "key5": "EXcLcPTNnr8hN6Q2UwTAtyunubj4dujgiwPA4HHCCjVv5w7b8wRaRgUt95rCQHVe1VXJwLr4wo6gikBduQGqDn9",
  "key6": "36BY58DTXkJ9qq3DNu14MGko3f5FzDckdbf2ZXnkVMFYexbWgeDLXNBC2XGCAc6s7c9CMUdC8VzZMsdo6HCp6D5E",
  "key7": "ANyXj2aHJPq4nEYdbP9i5E5KJmrPrDvJWDopEBmteLRFbQwjmYhMFnY5bQBGhRMWdqTRbNUKTf46h2LgJUzMNU7",
  "key8": "4BuoR9TXeC6uDbhEUepgyJLbBpGf3FySdGuKArtJAEkxrx68BE6mJa5tUTVo2ryG9xzpsjn4unHCz6JngU1UPBQK",
  "key9": "4bjuN6dT8Kc1PeHj3xPTMoR7t2T7zFSBcLBGuYDfsimEMcjv6rjXVErkG9qi1dd6gfDfEUga1PkJ72PpuJeQivx",
  "key10": "jrfA3C4gwhehRrG5Gqmj8LnuDWubMQnCHsiNgiKdeMCTY8QSBxs2m2RbevjDMRoZ6gGzkNStFhKa4pqGsJxwnag",
  "key11": "3RETRg83kqRGFhf9sD9KR3pRKz9RJanxCKoiDmWKWBBpeLmht6dVmKY7qX5dRHTDGGBnVZEQN3oQQ5fwHghheFHm",
  "key12": "4EsQvTpZokeW3FCxFdeaSguL1vMfpzyX1fnK2M7ihjmc93uYCfLci9NKde3v6dCixung99opGEaTCfzQ9Cr224JU",
  "key13": "V9jk4j1bSZEUmvA6EwvGhUYJGjUqjkYtW4nMzFgWxdzZbdidB2Eh4rPMASBFgzmwBogAGjTFCt3aD3qoxaC3m7a",
  "key14": "mbREoh86UHpkJHBBBjKZptdkgfzYeWFA3EUvP4Gxq7YDLTPbBUCdBnRkanKmvXsDdp8doViD5rE52EzXH5neyzk",
  "key15": "4EEsVXjpYfSUv9Ub4QXjfaLDQ2uXmtUnYziZvixqAxSLsh1ZuNiGXwQnar6dvrrrXQTsMSqD5vKctfTxdSwG3xTp",
  "key16": "rj5gce8Eri7cxPRSNJcWQ8MmmchFvwFggQLj4z9er5pGDDQfLfCtbsQuSvXUcgdNzZ3wRJCZL928LTx2UKMsxHn",
  "key17": "4UKxyzZU3WDXXLLNoxrXusc3VwgN3NKky84gquQpytGGQGSxqTCdbpx5Sr9EWKnmPVBxuLm1EE6UN84wtcGpKp4L",
  "key18": "gbFpz5tFZ76WAetZy1pV1QM5MdE2VTo3cpMMTVyfXonRGPb72uvXR5VQ9sVjJekn7EagyrbdGxj5AxXHiP35GRH",
  "key19": "5mg1sz9KGQbhe6s5VwAZ76mbTFZXXZqFsyUt3LxaE5uT5BcYbLLjJi8FFxSMghhDDcdkrSZvCsqjREpJEtvwCqtd",
  "key20": "2qhKej1GmKXBEMsZBXPkoQ6RXsebaufdSuUaxjscNYQ22ezRM3NPPAaRJkWDiAfsxX54PL51EDCrZ3YNeTHHziVk",
  "key21": "4DoS9UvwEC6xWrWjA7CSk5TEH1rbLeH8qCEt8pqpgirp2HuoFiumX4vgfKN27mXjcFAgkRSPW6D4YpPUwhjfn5vJ",
  "key22": "2SMNo1VbhiQNKYw1QyRjj79tn2Bu2aKgZGpq2ePfVFQJP4d55sGMrcMSqeG9rbiDrodpYf4MMM5qajqPEh4kmvjX",
  "key23": "d3uCxJTtz1ZiazH1Pknc9Kvpxv8YL5f6C84NUQw6Yn2WiKQ2auCTubwXXfypwu7sthPEt32qqJYRdSuidgNZe5z",
  "key24": "5L567kmYjVCKcuqzDcBZF3iTrTt65EkJoXh2WCGjTP3v5xZvPM4ewMhFUPQnWyRfnhL1KNvsMftxmSqafq6JxL2n",
  "key25": "574UaRLLBYzBEsApb5wVYgKRa71Wj3iKpTPSaWxYHwLVyNNW5FAx9X9joG7f8hhbsdgevzarYFgCT63QDYdDepvA",
  "key26": "296Ba3oAE5F8jzEekNnLqaRJBrkFZw8c1cbMMkBqQMZrgGXQ6tfxamujHSino1nny9Rik4NHZwZ7RGcKoPqbFNDG",
  "key27": "5uJ9tZeZySYjNha6HZFSHy1PGfFqMLbkwUZN1LGn7UcbNjQ7XM6hKsTd32aBjps9PgpAJRRLMNvx43LSvGCxYXtc",
  "key28": "32TbXztBK2caV7JpJe7izh6fpriyeiqwYn1tdJaDDikte3Lbt9v6F7TNpRrs8YWufY3PYwXGiMDba1xszK6GT6Ri",
  "key29": "4SNJybMPXGQHvMutDUp61C6RtBYCDkCo3ghUQADyN1iqTCnTeYgE8KwEUP2nJGKi1KnATZLMRrcucEuPVhZsZBB3"
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
