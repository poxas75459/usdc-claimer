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
    "4UkAYXa2ype15m6sfsVDHnsYdhMhhoQMb6cPLitPMECnh6QhXaAmoXHbAza1Lp3shg7NJK8ogR6mH7pVU7C7vnHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzTLX4jq4cYxDFvBwF4L8RfRxPMoqrbCD9kXC5HfvrLpiJKJ6h4vBoECbJxuY4G9oEsWT2fZEeNCYJPkXEMZrKA",
  "key1": "2zwAqY9C5vvse26m1JeAbomeqDE8Eb4ejgh48WdqEBTXv1mLVdfLVtmr9NT6mdqMiarex3EVtp9xLPnewAcjnkuu",
  "key2": "5Ldn5ZXS7x4YVXEfXTh3CBXMwR2keutYHVSj17XgpnS45ctYtCR5EzfkyLbDG42PJBra7NtGDvaW7yZNwVeC1xbk",
  "key3": "7m1hQmXNpP67GLSdkU19aNd83AnprFPV5Nuc3ev49gcM6rAGbZiVDpJxVF2UQktqvuJMHXBA8HrQsQ5ESabgkYx",
  "key4": "4GkBWbZKduTxradvn6kaXcsitNUCB7CbBQBTvsEDY3iseCB6m91kS5KxrhgJSjRmb2QryhV3UMneoifHzXvGgqfm",
  "key5": "3K1ssULsteiiPJJ5DFbUjRqx5BDRAK8Yt1FNoHSxx318dZzMCGaMk79Y4bvSv3ritRw9pGsdxbXU5uUTsYHashyZ",
  "key6": "WqyR9MWi8UY1nfE7p3hDe8p98qfXzThD8BaFwF6wXSp6ChjXcJuWKrN6BBNiq8iiM1HayhtGMbvGV5xjD2PFCMe",
  "key7": "4kKU5CZkHERw8qAFc3kzDJxQquANMTXaiHEQWTEFAYxgnTH6hNoBGosrjHnC7mRtAQZocsWExsFe7CbXHgfBtjG1",
  "key8": "2wsUDNkhzScxNrhjACE72ou1UypPnEC6KyoguKqvKm1A4m5QJH5ZJBUgUfewkE5wCpnjmCChnf587fgwHg7zNh4K",
  "key9": "5qCJhbwu2ainr6BwDZe1uGiCwuFMr6m2Y4cLLTUWRrRSVfD9asNmx9uKPXma1555f9mLqxXhYfj4hpfqSHQvhUZn",
  "key10": "3yJZyVmwTAbg9f8sxVtUSnYiWTSTeSkHASR4wcnxJzP6JBGVtnx5Y9TvQHZZhK9tXikESVeUVKgbHrK48N2eBcV7",
  "key11": "asvyzQhiV61TQb6x2GAnty5ntGypVG9dWSCkreFFT4ADCCfuuGorMrJYRdQQq3jju1i1iHXLxkSuiALa17YY4B7",
  "key12": "5vqxLQcCukHUKiJgr3DXQLHzyrbZLTmYkZMMZfzpLtSVBtvwj4ZdZWiypT8wxECEux3uA7n1RM1kyhWkSVBP6teZ",
  "key13": "2kxDTxYQHjoJFw2c4QtczFc3SExiAuf13G29CNZRp6PZTYXCQ62PByP2K21STppmUKAJCZJVTGgn63xguZcgtKiR",
  "key14": "3gsuHcu61N5Lj23gREYYmxB83uGE1ScJ5EYr3ngmiYkgYZVg4CppBLrbhRqoXs2KF9oe1fS8pj6ZDs8tYPNFt52m",
  "key15": "5MHDKXjSBf9FcXq3i4QpD7nNjir53t7FCu9L3pfD2SWTLJbPQzAvqJbNVXbUUNeYNtCBJr9RXhsaXePwRFjLXKgB",
  "key16": "4vPtTBLC6Sk8U5LjLTnwMKmgcvPQn7kD3o6PLFdCApQyRBcPax2kNV4FemyJe9CkRMCkhpoRGvzc3126JLuKqL1T",
  "key17": "65gUpvi9uwKJ3o2NE1oA7zzR33WQj454YwJEnikinfCyVEL716u4s72AaJE2SRAgZyAiHAouHwHxraaQo6Esvx7x",
  "key18": "63JuG7x4aAkwjDHr86rrZvT8tHAwdmwqz4PQKss1wqQ2Y3DswLMvWePFxLgj2y26rrZxQ6fUia9RPxPaHVBe5A3g",
  "key19": "4c2KrxK7duqtGvF8MJGtiDQ67hgYjqdjF2oa13wZMzqQ2TvDNHUqwGQANR6RUdj8uSdqnRaCqdj8NYH7CzJa2o7J",
  "key20": "CM1qhKcTLQkmTi3chUq4umsgE3XNsaEd7Nwxd2Zv5WKDX7EedFmPqoPWQU2DxQ9z1RYsmKLA481YPUTmNsAY8Lp",
  "key21": "4ur7mtyFvEsbbgygUrja1RiuRESWpgZNzcvAYtjwoNaqjSDsaQ61woUXJEzojDPZdQqzqV3xa62ZTLUApAJe35qh",
  "key22": "5eWLsYJFpdKjo6fTZqrtb7i7X9aKhE3WceEkopxCZ7icqrAgCSjCeQDitzKfdcAeGrvy9Je6K6MbJwEwnzqPKatn",
  "key23": "2P37epefcwVMgmMy9BgQ3dVgJVHA9YDfYD546gA88RpcEf48GKwmPcfkZHW1Ssp8guZ9mWc6kU9gfwAD34UTGEiT",
  "key24": "4WvEiH5u51ioFG9zdU4eM2vfUUGkwew5UALCWyXx4gQ64P7kPEqFNfPP8xeHPs6S6p8BDRDiLfsdpGXWEG3rPMd7",
  "key25": "3HVHKvyJNYdhRShA9Uds6BGDHUfhbArE2Gh1eFAMtYc2q1CLZfRhTb6tEi3q54K3LvHvBZjV6dEts1rDSKKcam3Z",
  "key26": "E9mVXTrJDVtZS6DLXkDAz7bYPTUJSdYbgBQTZsmmdfdZi1gnbTYdw4sbjCAesPtoPPmvsRzoZ1TPMLn4pr8mK5M",
  "key27": "b1dY3CkBo2sCjQHqGxgitygRc81vSgphtXmZQA3gzaXufoEnS9Lh8JG6HABAcYTE5RCsD6TEUa5fB3gevk1sD1p",
  "key28": "5u3zVVKUHqe419EnKwNSr4bSdQa7tJfQa5jF19NTsFNRWFErrQAe5iQdgFPtxBZ7Lskx3MeqrvCmptLEFZG9Wbhe"
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
