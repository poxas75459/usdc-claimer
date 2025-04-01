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
    "4e745caENHBqDznkf5XwijDVMdUD3PdGJhhPf8ohkeufAUrn84u19c85zQnqGmqN3WWMyjuzS2EzWaGZt7wvd1zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X7DPJACz8JC3iZBc4bUCh9bq6ShevV7yMksBFqFohr97qAEZFF1eFZbbWc3KgDZUfmMf2zz9KrPENsFvF5cNY5e",
  "key1": "5zVmLWaPtWHCJ17FEvQTM1K3z1mFukEeGGrgYR955AyY8kR5bFwmZm5JCQCGBUQS8MUD3Feb6ArCjtgRHDsmahh",
  "key2": "2ouGiAKHT3WdfPCXXjXztFxAq5TfUqox1FcxVcYYCq2qpTq54Z5g4yvFaWLvskGqyNZZWLE45GFCctEdfDwgj5yq",
  "key3": "5yNwfbwfan9RwaiLtakbye9qKaET49hZe2hjzq8dVrXuuKvKh2jDGYhnjfdDJYshQrLypzJBBpWTxWMzECE1ZRKN",
  "key4": "4vbpDk5Q7aCVqyLqgGT4As3mTGkhF9MChA451VrrwxQzo3z1JBRBQCk1eBwscfm1AN2aHD7nMgMJv6wrsZUtvgGH",
  "key5": "5zM6SM22H6e6Vj2TNVVLRTXCCs4GC4UyFA8moapV5hQHmUfKXRGijtgvKygk3qPBAQdA55xq88gQSC9RacMEz7im",
  "key6": "3seZqep4cWXFihVfMxCnATT4fWb2fwW6biBFrzCLmRyH235FR5yeWG87tYVkEdqp4AoMe7chk3g1qkhKbTA4QiCU",
  "key7": "2N3ASfPHydVzkpTZifx2USXnJ4ScyrcdC8pFME334YDVcuzXZTnyi534KotpCHidM1ARMnHdd43ZDEQUoscLGav4",
  "key8": "5PcE135Db1ZrqncB3wcENzWXAtQ6PRe8isJBZ6FTitqauY7jhfQDWui2S3ejt8NvdVpRn3X9CYe23WTSsSsWMuMD",
  "key9": "2g5bnanwtDMcRPFSWUcLUEehEbaJ9teUAhmi5EZZiKi7fM511v1bNQsQXHZX26NdP39nDZS9vwrUGW88TcLdCdGq",
  "key10": "5qAEmzTrgRgKDmb4rsnU5LVRWjDrboMd9T2tc3aw51HoUhmut3ApNp6g2E4YKsnqwH8xgmgzygV9iFgAbLdbPfrX",
  "key11": "rCuzwYZcN1zFzs4Zvb9oqf9H5TX6rVAEjev4aYU1zjL7MqK2M4ujiPXC5Sn6mDptbaHrnrf8qazpjVYB623RyL9",
  "key12": "2kHKvezw8vTdbvr6BUkgNHkdfN6c9V9PBDmo2rBGkxb4reEQGRM6C6w9iPNHixZbpYBfy8PdP4JyJ4LSRJSvrDb5",
  "key13": "wuG8Ae941TLsLD7XEh5jWgHkd66M84fKNGThrpZWGfP6CX58c5dKYNMrCLe5UkAz2iYuF3w4r1y2cSB5E31nYBD",
  "key14": "3V8YZKH8xBvn7km9W76aNSReeaCr2TrJoUeGHrQz1nD9MZ9HwSbNKNLaUarXFb5iAXnQeNFzSt6qHqo5jf1hR1se",
  "key15": "25rR6PxBT5kddmL2dK4By2hfpXR3nrqkuwxp2fkFeBcgDX3fazwFBZkcrkwunjCpwTncN1io4cV5uRPMTLuHe1Nh",
  "key16": "3reEnnjoXBCRE8vtzzGctzyAFfQcfPUeBYQizjew1r8hvSrqhXgbcPJQZc5RHaoGav6gUJeamtfp7muvM7XxrRBX",
  "key17": "3gBFuhDESqbdrZ65e7G2ZWbBFj9JozWVLV1P9gTPTZwchAWkBEvETaDbMzTAfNh2HZ781k7gfv81aGCmLtnnfCHu",
  "key18": "pxMzx8sZN1StPorZixXe4KHp9DrFZFtQyZwsNX9RNob3D6detS6s17XMHGvjUJSS79Vanf7VkGLcUig7wvvQA2i",
  "key19": "4S6yJDEjR4tGmSP8vGnjRvu1i91icnRnJ8dC1Qb3k1CjzBxQ8UZXvGjtpqkkDiWWeyDdYgcaAUJeCyEpFRyYvaPs",
  "key20": "fysiHWvTWFnErCF1sVRgGehoVbTBXKP4cGGrYfk6C7EhA3a6YBw4SdDC7bJTEd6zfebSKL4ZFWmmTjSSnNRHof9",
  "key21": "2DTn8xXdwpzYxYdrsCJGdVSvFLKZ7MYBBPkknae8w9XvjzyMa52f2PFCyubgGgM3qr7EU87ufoGj6MDGKrSTygTK",
  "key22": "2XTV5mi4mEF1mPyysTjuBGSx7rEnkx5SLAZ5VSaF8rnFfpZCXXKSpxwHJdPAFdb1CKZp54LPaJrBmapzhXJe2mDg",
  "key23": "3raaCkwAE9uJD8v93KGKRF1jPfEq8kkSgs4geBwT3Lu1YsaiW3CPYL9wJF7WRXLqX2QWLDBCkRxcrJForFBaVwqE",
  "key24": "2iZiSQhn4essrEQnUmDDkgQHfS7c89EouebtzhZq2ngsayY7LUzgDbHXw8rmXHwtnE882Y5KqiT37JbEHpyLMhNM",
  "key25": "32CLAew5E3eyNn9e6LKY7dn575BKzCiY7oYUYzFN37GzdXgMfDajYmfftarh8zphETT2e1EmhyyF7THcx7szCY4e",
  "key26": "2jDG5GxvfQFJnBjVWCyN3FS8wqhpYLaJY4hoCELzWmXFP5vpHWKnPwj4hAUg9AK67Cda6t2pZNwB5bGeH6MLiuHf",
  "key27": "3uVekwgSXTY6Tg3K1jgG5qWrDh53sy8GoA7HZppNGGfdCSaDzN7W4YQZwPdAEYtzh3bGdeS9VW5VhRw6G9y8kuG1",
  "key28": "2VVg9BB7FJAytMS2wNinD9q9njaLFyRQMEud7FuenDNWyK8ewD4LKkDuvzNREaJwcNVB395Yi9uSZGrKQXk4UDGC",
  "key29": "47dce47atZ5nJMBSaXH4bXuS9Afi9GELhqv7eDc7HBi8iPgC1LpiM26pCEH5FYEDWsSf9ezrfHdeRiZYWisMssqB",
  "key30": "4uB2FfjdkLS2EPqUMCh736KygJHDtJwpJtFvPfENpyxkQZaM6x93k5tD3XMHtQxfJQwc52gYTT8KvexAvxbE6ZKK",
  "key31": "4z2rTZyMhFpfGGxmZK3agKxSuTNNjCnCUTeHiFeH4dNvfu5ZosMc5iRmz4FtEhQRwF6z3hREoFh8oHd92DN8gJjL",
  "key32": "5UHb8y8buxo8CnJN5ewXpXB7vBJjnE98wBWv5UMnvhu6rdV14sRZkGtTJXKw4CzUBe5APxob8YQ3U7DBjCVkzghe",
  "key33": "jhYn9jmnPZGvPnSxuqxvAeT2PPBPzvRJcCiBhyDUzR1W9kBni8Ho4tT5E2nWfdL6YsBRNnR3cEDujJLm7Q61H7Y",
  "key34": "3ce6Jt5JU1UAx8CU211fZA67qjXXH5fu366enbzaJ9Jq5xsdPtZS3t3myicfcZTMvZwKastjGQzvxr3VWA3VXzMK",
  "key35": "3VmuaAmMwhEJpW9szrxwnogirXj7SVdoDZ73aS1vip3XdZdc1ZtuAkkicMWEozncbgR3YqiQ37JaUoz5amgFzhrE",
  "key36": "5pRpRFKiVtzY1qkpMyQ6N5oTiYUJotbJ53AtCWdxuMyJn7RvcdYWJsEK76UjN7wafipTWGuhWCpTxpohdpTfUSmq",
  "key37": "2ZkcRF9Gvy9Cyn9XspxBAsoPY2Bvo4Uaj1pej2nJURAebYDdsMksEWhQu7C4LqDPXN9Pd3KH3BFj5HtJmKZS6KqV",
  "key38": "KZFkGAbrrGyFedi7o49FCSCcZvkVgdAW7crrikarfzc4YYayr3vd6Fpg6GC2Vyw4irx1fLTBb4BWzFi24QoXgMh",
  "key39": "gvPjfGy8chnE8nAzsrPUagnX78ezXAwnpaDwaP2KWBahjYQ5Xqh4Rg3E7VUrmGPieQ5LW2Wmj7vzwusAbRoy4K8",
  "key40": "GoJVe4YgrJJMXdncG3qaFAR8Pkwc5p77PBETbEA6aMxVUUheZAYV9sY7hdUn5sp7JnH8eYmdj49bN4kTAcJQFhm",
  "key41": "39ZyViDiMjEe72PCCnX6iwi3CcyhRi8vgaqA9FqF9BdzRfVsZMTbktZxWGt966YjwdK3VHGstHe19DkP3rUpzfKc",
  "key42": "5huxRZZU9ft8K76Uiiv2dP7FtPYbYw1mw2B3rPPErLFDyJcKVbA4zkYcsDaFRyJ77fXUZNnT5CJdjszZQt3R7LV2",
  "key43": "2SzCci2eqZqJhKmx6V1VeQDQJrL1w8tRWaUWfYdrhf17UBPiWVdqxH1NSuq3Uzv25gNiaLDiTccTdkd7FyCD4jnY"
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
