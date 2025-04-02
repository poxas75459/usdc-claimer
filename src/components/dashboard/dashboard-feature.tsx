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
    "6PCKng9LGL7QzG2SZGj63dgMb9ZNHiWBr9o5JgsR5EF22LQ5JRiR5PZtfVZo8Bh4XerwrVBebVc2icFqFpUETcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1o8HwfpzqpN9hPW7W7mkpqvVoS5ahQzf2puaCYjnqvr1PBKxnBYUr3HxvSd7vnHk5R2AiTNqCjxoBBabKnJvor",
  "key1": "5QhqLMJiSR8oQqA8YX2D2H1CfTAnGK35tzCZj62WG2ECm51jiXe5rqnRSbUiBgc67t4ymNttDmQYFw6LExpJM6cs",
  "key2": "23zhxyXeqUpAXSXyQw1rfuDdzAvmogrwQbjA3GGo4UorhfLxgMPnscMf4L4EVtvM4Ka54yvLJMKHzitBktqacCko",
  "key3": "3PVQmvcr5JpgTb27tc78nv9daRdDNTBiezbqrMczCpZuVKu59Pm21EjsRNZFd5q8LzqSXGRwSF7Ryvr81uegy5oy",
  "key4": "5WHkjG95672Xh42LCka1sE8BCmoHsQuKUshJbW7rb9hFVjkkcEWTYdFDa1No8fDGKPTG1aaNPC9T4fP36g4CCFye",
  "key5": "5ttVVNR3CkeAQY8vyAfyn8K9caikhLsXgmTa7mMRfy6H9GhvDZb1xoGB3Zx1B3nN83j4LHnEY9TaiwBu8kWbJm7L",
  "key6": "2pB54TE72we6vnDAxj1er7VrvrbWsFq5fPghCoQWqfQKwksGYfeAZHiArgnVU3UGSZeHXXvZcirwJNXYAeWkjhig",
  "key7": "nHDRZj6oMcZgkaZEDWHmJA8JVuVPq652gPvqrSjbjCUw5e1NKKRnhYWpQYs84ZmyE9ANyzZVEzKieLezmpc7228",
  "key8": "5k2TLwLYmPwEQ63MRzqZBTVkPUoa1ofwnxY17PJStshdtCa661boBZC3pnvxiaA9ye74LF3XjFLHP7oxoJhQovas",
  "key9": "27GTFRDVUcJbEXXe1g7EXtEtjjSGWifTxVLtzMUba4GhgVYT246iKt4Q5QUNqadmrKccVBEpsTqHAqcGesmhSVWQ",
  "key10": "4y2jhEPGVQR1PYcPsKvFWoCGQfRaZT6fwLDijHZZ27YNonJyQ7sJTtDNnevSP7xiNnWaLpwwqxyD6Hh7yG63xoPX",
  "key11": "5uFhUDfky3arvYatUaq17ZbxCEihEvjubyhTW7uauJwy5a8nA9DfT7dUDVw4y7hhpGh5Ydezrs6ZR6sqcKCUWzQL",
  "key12": "53Mv4ryWUviArEW5EsHsvj8i3TjbUVWUCPfgu7E7DCHr2fao11j7RC2UWPLawCbUMVctasWTxhS7M8Dexj663JUM",
  "key13": "2K3cA8sPY48edfFQMkxBEh4YsjnLiXJP3zzP55YKHfbAcWHsWijtomE2si24Ck3eCeEzZriNPa6wmi15k9e7M1RK",
  "key14": "6TSnZeMKGmjmBAHjrVVzEWickkA6R56Fcf7sQq6kBReYDngZsWBDanYgkWBhLBVqT58tpL4BWf4xyhRUAV96Wef",
  "key15": "2yzLDVyTve1oZRGD1yHorMcYSn19Frd8uNaorWVPbSvLUrPxF3SbV4UtDN6GeUTHSo7EMHykDAn1MuBRTKSRmVEQ",
  "key16": "5iy7DabKghCt4aYw2j2hte1Zv4SRamtbyB2kdqSXWtK3GjyEo3u4d46Rf178sEKjMZDDcQdRdvgEnJaR1FFkZmPR",
  "key17": "3fBGLouSWcfb3vJFJhRz19PPvV8kmsR81KjVHiKLxVmJ9RbqeHCB76f1kvNAk4siDcfaputisBk93qP4g4mZq7xW",
  "key18": "3ZDWnP2rA5GQKV4d8ym5xB9dynrZVHThJhbEFgUaTttBoY1bSVotJuJtVwDzRrpKRWfKLaALLxMR58FdtNuFhhx2",
  "key19": "4UNLifoD1uQJ7QW2i3YsabXuAMHbeXLKZd9MtWhPC7wmwNZ2krep2DtAJj9LmhWKtFDfon6YMiWB5QhQ7248jStz",
  "key20": "4XGvnjPT2R5qWRVkoj7qq3Vh6nP5tqphhRW6m9YnFYM9qe7QgMeho3DyFCUDpLcfNV7k1CQyhbz8gAkADxNRBoEG",
  "key21": "4d9c3cVo7yaSNVuYtWXenpqdcrD6x1VgYZM2J4HKzofSCxWLzERxNNviQCiguPemDxzJjDmRAiGvJYNexYFaYtFx",
  "key22": "5FzFQzwgrQDYUJE3h4CwpZtgXF542QhVkdmQDH5vsGjfCzXt2QJZqSDXHJRQy8D1JHBNvAC5MZLc4bQ1U7JXjbtD",
  "key23": "3QXovDrt5GB2L619daX1KBqXk72mCqTAFvzVTpHqJdnf42bfBPsiXuRhSM8g6ViYJpgarMR75zrwM2UYfpc76tNt",
  "key24": "3SZ3Po1nvV7ibzvrbnv4CpaUmkeJ66CFhKaKDz54tGcQDfo8mddzeHH9v6uUx9t1KjFesPkVBeqjsjA6xEBGrhfW",
  "key25": "3vjuwjXQLDoKhaQKK7w9NfA5ggGBGzrb4BTGKkcp5zhur9G7NEbozGnMHQqccFHrhB52aZhUtfvnsSMa88udNERE",
  "key26": "4rV5jhM8sD4xntaBarqeLRYLvgwSTJp7pw7idHhyryEPPQoHsP2NKCxGJAmuiYfueWCe81yYEQVcnNz6sqX5m6Wu",
  "key27": "328DzABo1fdFHt44Ut8k1PEjoiNjVDgoAJKnQTGGuyK4Y3eEcyNH4LxRMzfdTcLcbrYPTNoTjcdiicvv3vcfP4SA",
  "key28": "5scjaHABwv9FMDYqwJaL2rLjHrV7174C2skNMXjeoBbMNPe4NCjewAhbJu3zxextb1Z6GP8GsjNPBrRXcQosXYL2",
  "key29": "4kt67VX7qMqgd5mchduUyG9bVN8Uo1phZtdohAiwM2sMg8uGX1QYSbi7oyEqkzGHvWZ3aSBM4pEXeVpRrUywASQW",
  "key30": "54EhYszP2Tv2yBZSfHg64dt7rSVCq4uDr3X28t26YARfVLJ36j22nFX3tb8B8mEx53HieD6mg3w1SMmSibFsx9sq",
  "key31": "3xBbH5dTnA3D8nyeoWKCHrhon8PExjRvLuZLUsijTtUSLsnxnMruFzftMrsRFVqfMJPhDawKjtck6CPFqCYotMUC",
  "key32": "QBWuwsjsdpqrJuniHjRmxQLejPmKxBTf9dRDsWMB9nu1jAWKZ825bVdhK1brEcQaoCnwmPzXJz9qTLbo4TcXoS5",
  "key33": "4f55VgBoroHtSAtrDt84iUXv7F5D7tw8VDMGabwmG2RTWZXnN9WiAz7H9BpkgNas4PGdt87iJABvT1GMiJ2ea3h1",
  "key34": "5yrhHAHEU9Tnxaos2vhbzpJvw1ypwUdPy5wxoU9PwTxjdpZnR28ffGQULBHEzy5CGsvmXMgeJSbQhssu9TnY2F4N",
  "key35": "4eu14zaoEi6zf64VJXvwfbVPQQddYbyMBeSP1DYcXi3WW6cHLyUTwH3DFxysrJqDoLHhMfVxUjAh8BNuLBeJcE5A",
  "key36": "5Fja2jQnuFw4yqEX481MkCb2Th6QpUMKB8Bnk58QoK8tVC1xJVcRNgUTtrktRFuCdidsLeGEH54g69UGFTmWdU3B"
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
