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
    "2xGxgjufQ6Fa4cwmAV6mn9XbeWj1EgXFzpG67YxMVwNVRYGCdVsU6GFDS2MXwXNZEnzztjFyrwuKyTh16L9E4jdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hMNoBVTpvTRcWRumsL6SPCgQjjW6dxhjZELKXwWPT7RPwDtgKM2dRQHpNgUGFc4iFZqmHymYj7sC4tfTe4k8kT",
  "key1": "4WjbpFb9G1npT57bXkD2a8zMvHjroDHDGPha7Pc9MEmckXJsmW1fLaspbU3A5LVh9tEL4pwc4eQT4KtyLovNZWVW",
  "key2": "3LSVfMcHj5uiKBpfdHuz4cFnsL3VpNGU7r3vKsS4YM98uyctiarERGyNVgTDnBgfKrP34k2D52LwJWYJFcJh6WZW",
  "key3": "3vEFFxdm4ug6kLQo8mL5YyUtRarf8uuLHoDaVJcrMaaWtA5JsGtgsevwEfhX35FZqNJF6BNE1ZYGmj6jXFcocXe5",
  "key4": "2SG744Gqkj4qCukw1GyrsGAuBJstTeWsjySrk7zkZunxnbSHJJBSyV4ezrvebhBVcQ4Cj4tR8pFYeTf63JpHhecu",
  "key5": "2pqndFasYt8nzEeTYTMeUCKeu5GbQGWGHmpBmZyoH4EHe95xcsYg4gNu459gZiszUmYTrfxtq6XJ6eBhtywb6ca1",
  "key6": "UUvqCCoZogE1TDhfz8y2GqeA5FzyPins9dBVEbT6BnGgdCb6Vy2zX6HME7aLimgJ9R6fRvkSPzXUzKAJx32YDNN",
  "key7": "3rWucWxwLYb8ao1cV5LJJJrwZC2GVZmWyNX8RcZR6Th4ocHcWEDEn3oT5JEDN5xjGCtrBxbeUxmRufBw6ZroJL4P",
  "key8": "5uJXRaXpGCcNFCZ6HiZKF8H1xgRDxAjHrDVUKXKJGcTcw4UkqGGuxqMW5QhkTqUJurFD9MpGwFTZgPjfqG7j4bKw",
  "key9": "5cNvDEk71zJqEJFmN95t5kYMyTasgpcVvRywJTXdcRtjEFAvFUTtVgcFvgygU6QjU16HYQQBEhG4n72fvXubmRs7",
  "key10": "52YQjBB9SVrPV4oaQRCxuEif2Uqxg5a4VVb36KXdePM5gV8t81jiwri9Ko8tPKczhByVmrQJQ8BG3wby6BLfpzjo",
  "key11": "2Ht9J4WdmaV8a4QPjmp7KU8puxMsMvsSh6F6g8pX9LM8esE1gJWgnfPgWrToerQveAUHuuZFxW2yxYhBEBth5SJW",
  "key12": "3wZY6vSmJePGS9uk4iAVLWdGUg3S3uS4r591HPiJPrX11EELNEsCbhJm1wRa4tnuRu95JGyT5ApFAYQA1eninRab",
  "key13": "5kTDMw9CLDnjANg6sTp9ijeEbDF95WZThKZvtxn4hntGGFudG29CxCJFH52F7FBNw7pr95Rm1TJtNC2UmQzWfo3X",
  "key14": "Nju1Y86PA7MR4777iNfGTkG7R1R1VncSgPpw36gq2YKpje2i723Cxt3xqwZjpc75p4X7HE1XKLWqZdT1AgnWP6w",
  "key15": "3Kh2Ttpg2V6TS8DoJJia1wqZTTZMMHcb7X1zVVMAouvSa4LGTdhSSv3LjMcTHaDsGD8hWXfVckCYEmJAb7cCY4zC",
  "key16": "3vmu41ENu5cHpMBwNcKxkwVo6fxfgjyVAfEDhDhBizubgMypTGmJEih4VMtz1KBiqEDeEq9TFa8W5S1nL3YBA8Tu",
  "key17": "2xSXavYTkYXs5bkdfT6yfMR4UBPuvTySeCBGzxMjY2bsstyXdoFYrajP5A48jYQcom8hosPryRkwKNjWL2TvKCx9",
  "key18": "5jyhH3T5cHyqveCzT52kv5731ciPQTCFK4nhMmtwRZo4nYafkBcvL2vWfra3XgNL2NZcjKQa8S49cmvXSMwwjTL2",
  "key19": "4CcHysa2XxAipX1zmuFkgoksCTKCtaLAb7JcCbMdvFAwsrev4BnDbd6fj6GhyMF4MHPnfJ2VzRso1hdncT5ZhAd1",
  "key20": "3gPycH8H4UrkduhdTDdbrnDxEMmqBikvZSyrPFX4MR1M3VVZUp3qz9xq2vWiZNyUBjtmrtEUNdgvyzguisHa8AKd",
  "key21": "3v5hvtLkz8M7s9YpjFHccGUoXe3rUfeMhJrMt1TfR1314TQUZ75M7DBhdRqFzA6k8daGJVYMHwGYv6t122CuoCZP",
  "key22": "QK2zevqYUm8m7z52vWjEzXBDvhA6DeYugw3f52ofqvftKZnJeX7KvHDqdyWqePScYPTJq3bxQovU9x8r7yR8KDd",
  "key23": "5JimLSuHyJe45nFisgQ3LH45oFQaApexTxFLREzHMbFYmvyj48KXnKcStLkRhpwQ5dxcMunvsn1zP4b8r7rM6MmG",
  "key24": "4mpXYpfTJHNALNiCqvjT5kCHimYhYEBHU5rYr8Rya8CFmDqU86ytwN1nV1Kt7gacUS79Tpj8zELjfdTKAHspkedw",
  "key25": "keu4FVkNANWjPZfozyekGAy6Dxa7yw7Zd6e11pvip9BopkeyF4qJ2cdm4ZUp3tJH4Qu7HT3MAm31enLk6VQuPNX",
  "key26": "4NiiUejLfWihnH14xWEn2pVn94xuRCVfdqgSjjovdna5P7VRrydXNLn683Yk5Gq14h4rYaDz1cH8ss9hLd28n2xL",
  "key27": "5sRHnp6MWVw6DEvdeFn6QFaWWFAdF7qobqdmyi2DC6ksGTRRxP3oziB8yK6LrkcQCLHaTMMkrB8K7wsThwV4cNXz"
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
