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
    "5zUCA2UkL3Q8zzAWAhV5AWEzmyuDemDpWSyC47n6S3wneWEndUvuHMM9ko2t1Nq7YSeGBX2h3uxuZnrk3wAzrkpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eG7rLMsLwaz3TRNY2HDrBWeY7fn2VwvJhf85d5MsXDanakttm3j5QPzJBdet952oB1LNHmKCV26ng5uVJ9CbDoW",
  "key1": "3NMogSBvhdca1K3A578L1WD7X2Ct2UwgB3CB4qvy9xyd7Q9XmhEc8EhS9LFutbVdSwNyarYSiXpM6ZDfVzmJByY1",
  "key2": "546p7X8pr38K45YoFGd4icXphydm7dvMGkNkZg65DywdHfMaE7VGGBcRkyz3iUHJ4tBnjbau9QUsp6QHmpr6o8xa",
  "key3": "3ozb3fT6D8LRiaeXxZQeuXuWX5kEiHn2E2Yy9rfeoZ66J2APVjqDuDiju13ceyGju9EwbiYKAf2KkRPWFRt8V6F9",
  "key4": "2o99d74QiMGTP1mSX7wXAN7TEqZ6hiUTpQpoGFQwicerkxummngq2HJt13MU71q5vdwazwdUxWimmqLJxgJBVuPN",
  "key5": "67hPx4VpYy8XJW1XqPKAGBQDMqPFoXpwUG29YmZ8GyVA5kjbmWrXF7kxjyEwTwbeQnLjPTrJf2DYLfynxGECTTr3",
  "key6": "3TQJhFEddNUArXE1RcLDmSg3ZawSVratZg49Cg9pzJvCL25MF9T8Ba28h5LV6e9HuDmFZqz7bWi9RrgW8XmFFJcc",
  "key7": "JpwKT7ioWkFYfdW3XxBjkHvE6f2dpDNjdAs2GzWpDLVbLzFZDYRgvZZ9AGFiGEcfxwj3PqSrFhVzLk5hsckdoLT",
  "key8": "4YVwhCThAT9zNXLDnojhSYXjjwEy9UDTazzyyf8dV3P3kWXdKmS5vbjsodCutRWFSy8pVkRoxxRvG41E3WEjVm9Q",
  "key9": "2mJFfAfcD9woXCbWcXmPo4PKYGd9mi1yifyzRFsj5UeehiDHNBLhdtT9MCZp79hzD5wzhkarM4uRKWoDDnvswNK",
  "key10": "2uJQfXnvqQDKknKKkcnBzqW5RiRKKNx4QraqPajHQWTm9vBKLnF5CaiUw4pJD8aV5d5aTYbVnmccoKBVjUHvEgKP",
  "key11": "4xUDkrSC6fBatsYytJsTWtNQQF9kDtSFvEqh4pg3dZycx23t74yk6GpuEfo2ysyJVFE6xfzhxfUNZ7TLVYsa8H4b",
  "key12": "67HJMUwRRQ58hHr7Ybs2b5Hk6CqFCUW1cEddDWzeea5xhkPQaq6KpisbBH6Q6KK7SzstJNvi3bcE7ZqB7r1hb5Zj",
  "key13": "2anXgkpNZct2Etcj8YanxEn3DB8C1A48jT61x9Yj2JYNSKciq2EaycniD5CdTwEhANonmwmD37HJYCoMacL2Psmh",
  "key14": "5VSfavwYvQ7cXtok6MiiykpZyL5Z3LeJr2Cr3R7onthmPN4LQXH271Kqj4MGVhFE22oAV61eMREw4MuZ94w98Ap9",
  "key15": "4oRmiLn1YjZkKzjAB7cwgQvWFbEpoc2XDZ8nEUrpWoXcnvaibF3XCmUgk7pzFoEkosrrjpnb41pa8z3econFdxpR",
  "key16": "4SYR4MypNFBZwkAUYgYwDAC7zpzqbkvVcXC4qfhuu3ZN1gMhdtYUZsoyUF2iZTp6txWL4R87nFfjfcbnQDUdLqfR",
  "key17": "2imixKLtjnrYNfdo6MJCDGGHPgPAm1ww3ca5MNdkQAGxdrUVQ3mQB5WjT9yUTDWASuj4Azhmm2Q2ifCVbkoTe5X5",
  "key18": "5oVuxA2BocVz9HkUm9gct9aRUuDRt5iv1sDQEnwHmJMZr2Nwvyqec8fcedAKdHyJ6SSQmgQkXbcY12Z9bKfFHg96",
  "key19": "5ZcXHyHHpuv29W4kZqQNSWXtWYgrEUwBkTcAUFknVjCjUoXuSGBdNDmXu8iRsMuriKjkMVdDeY2FfvkFvcw4jEhC",
  "key20": "4FaYEzpP8gHzJ9s2W1qmHkvfBUkN4q9Q3s4vyW9h1gdNnq5F42JSTWsy8HXUgbc1HZ6HiA8jdK1mSpPu11pGBwym",
  "key21": "Wp99gkHg7rumb48q3GxkeTBLqtv2qTAz1LrQvWURs1hP67YfdQRx1wjjzWRBqb3L3N1QxUnyDmzbdejvP53SkTX",
  "key22": "5NwGKJ55yrMW5VmR2nh89JdhXPJswnRckb8G7Criuhu5orsZfdHtu82XGZXsG1qAquQiGKGfCT8va8p3Zn6NYUGz",
  "key23": "MvzLahCGxkDrWmYgXqDo3t7yeXVwrEm2uvVcm1XjAJwi3oVJLcaU7giAomvBsYqhd7ZUUorcTTzvYi6fjYRBtE5",
  "key24": "3XEyzuxBx3fFPodxE29Ntwoc3JKwCNn42YJarpzYDFRHHFcLUPa5KH7TbTce59X7EnK45ALciLRWQ6wixMgacshi",
  "key25": "31aiCi6cTLUCW2hZSA1j4bMmu4pgga4GLGTUakupfbZ2fDYVtC8ubwupTLGQRNMdj8nZ5heC3FjRouZxvUVYi7zq",
  "key26": "4B1EBTvhHePPPVGDXJut4j9r5k6NWwqp59Jmogih9ShaNwpogTXWygSHa1E4KHKu83KZCrH9SqkryvWLcaoRA4rn",
  "key27": "yBZ4PThbyNn3MSP6GzEMoFewFvTq5jZ4FNvHkYF633gvwNGrMFtfezHxNoCJhGrVzRBwvdi86VVSyKMVY6m21VS",
  "key28": "p4RvxS6Z62hpN1sLQcXaJrYvW1kcRdjWmew2Xme28fiXWRmYUZvbjz7KetK8nsySwpPL82ZygGKvv8YPMwMoJRa",
  "key29": "5onn48zENcPudq4kayfsh1ihNgykyKiLyRJtvixn5RJGsYedorqGsvmSNPvyCK35sfj5HEyR3zaTjedMtRquRNBJ"
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
