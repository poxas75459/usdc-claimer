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
    "63w72VrZyGDatKgT3SKPb9EQawytzP2Cg5HbniRHrRVQM7QwzjiHnubxoBLXKn7M3RZtj4vToeRZCgz4uFRn7rG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmRkiu8NDa8ZtSXoyYj4t6ehimYgwMKksq6taePoHHMQ8Nc6LHV4UdQM3JZaL6spv39TL47aefD1U8F6ppZe5ZW",
  "key1": "hkvW28TUHFPxzBjSktpxp1DT9LDAgRLv4tqPYd4oo2xWQsajA2Uv5ZpH3nVjyzgPXcrGHBegNKgS6k97VGwK4jC",
  "key2": "5YrayiHH57HyZJq99oDNugPpFjr5y9rMBGYJo4nbAzVPaN4QqCYXNjmRFgqv5jAkAgTGU9JrEfKSqCF3XEseFDpE",
  "key3": "r4QC8CVFDp2USTHHAvja35MGkXz7jaoJnx8P674PhQYTKVDRgvhB9Xy8YeMWxNviGVb8y51HByukrnH7JDa5fjj",
  "key4": "2BAsiBusP1rZNBv1MfrwwqUAMYA5rNE1YDyr696Ppr4ScwTKBEjYzznog9CumCe8WA5EzyMwtWGX91PuagdtkEpB",
  "key5": "2P2c35sgcfzMv9ytuoBbMxbKeJQ6pWEuThpgZAWVU3kUtoFGKTTxkfKzwaq6GhhUbgFrnxGV5ySCsYiPnCwnAd5H",
  "key6": "eJSrWuzYsxqawkkc7VLuMhiS8fTGxNCDkBDvYEQPNzVHYMZH2SxhhJzrYBUvcLqKAWKztPdRqhLKWrxfLLbEb4A",
  "key7": "2MW4yJm8w5NZRLGCVgHVHV5Vypjy45ToLUCkJ5grSF5HfH4vrxWX8tS3A7nsqDY8ebMFaHWdFDcoeUr4MadryDL7",
  "key8": "4afeycrpAFFFAVHW4DD54zdt7eBXM5ZBWLD3MM4126qZ7GqYVKECnFJGDj3JtLacfuMejLYcp1JuKaLT9KPxQVxd",
  "key9": "Cmm1M1yToyWknjp5g1wZmQYNeAjuekL2xtbWtQk2hmAA4T3uBjiLWyRydhNnhQGKXwfd7pdKSd5dAKCe9KScK4F",
  "key10": "ApLnGjJ1tarhGnMEGWCYvr8E2VHUj4A9X8bZkqHCqh77W3o58mo3226VekMeC8aaT2YUspNJhXDpzJRNhJqGHUC",
  "key11": "4WJcZ4Qmhvf25f2xMRXqYmErfQzF4o3C8Btg8HDAAxNfKH1AMCGpRK4FhAvypXa9DLTSVHD4UuHfexQpDFq3Rdi4",
  "key12": "3UTRQfCoLW4VC7dgEFUoCEE662Ft1pYtcBWARey4QfsmXrgXgHNz2mfwd188bbUgsB52SLp6x5bUyNckME6V8Gye",
  "key13": "3wuWUXw7EKnPBaeH6oim6uLskrGE5otTUJWySJpivZ1TktxXyD4JTvtbVdYLUpXKeLJKfPBpUCwwsmwRUcdx7hE7",
  "key14": "3NWF8UPsQ8LAEbsNoSyiXU4fqfVmAMWJAHzUa9ydZ1ZqsjNAhHGit8xHE592XGKS3xvSrRvwg8AcRNrj5WrYhn7u",
  "key15": "uZavbcg5QxKZBTjrPiBgPPb867Wau8rKtt6FwQ24Yi7hTrmggR87NicNRYZ8Mg6KEP7PWnr6mg4PzJPmj4NzZkP",
  "key16": "5vAPt7U1gcQhNQcKuTmRj5ZMm8rdmBFr4Cvm6bQ2hccshLAhGccMZ3ZdBideGs5pdRgqzq3DYGZEPBLRZPmMnNuE",
  "key17": "5bcqXSDu3Y1GqSehQ12HDeQkWz8a6RBYLZMShZixSe9ryBC2kC7Mb56155TdjYoScPWbSRKfoovbXS9G6mckoMcB",
  "key18": "3YN1qEquePUYbkPxa2FyG9r91FYznSrjFfUVEGN3cc7kJbv9uTKFYDpaDJEw8RaY4X9UKCPP25jvao7b7AZRDKWK",
  "key19": "23obL6metj3mMAGN7jDyh7YDqmJTsbiBGsM4TAtTpwZEaVyBarxMWXMo3wPfwEz8tvsjLdaovqEaHRfDKHtpCfyh",
  "key20": "4sjHcfVbv1mfLT1CE9hep8dtfA4FtGdvThzJeAQEcSV3aURGUDm3HFdyoDXkonn9nHxMWrbmkJ4DBGyCTnpdndSg",
  "key21": "4PpSFhX3JKzkVHRveKYanV2yzG8J6pMVBDCzDm1e7ggSNQqXdNaWodwg5tgCXzyRdpaDPgxcrKMUWAzRzYpqcY9i",
  "key22": "5caoYtaybYUDiPWnwfeGtKf7g7goke3GTTGouS3sESHmFv9mgEZ4u7xowCWvQ8A1UQhxY5TQ4GaT8JWsBoW9abv7",
  "key23": "4rJb7unkXbedSpSKUTMgA6xbUixLtJidWj6kyhgiDid1es4caMbLXvvWdjC9CvGDAvrAP5JDxtAuVo2qqN2oBL8m",
  "key24": "2Dep1jiBZRyt3mUg44yCYXXaCtLWRp4i8Vn9vo6qmyN9n8fXQzhyz3Dqzv3KpesWLwkA2XDVFDDtQnDoY5sVu6BE",
  "key25": "w1KHunKoPgX2p2zEmNCKcqKPoKXDZsXnXKHmH4ST4CSDnvt8k39xcfq7dg4HYeiP3uzG2apoZrhg5DwAVtMkzuA",
  "key26": "4f95AuBtVWriByMxfA75poVvPtje75EK2jBySxkkpPpMxWGoqsmXK1zdXeB9zVHXQn45pBkShxJ91BY64JbssbuU",
  "key27": "49VNmUkr1cpdcxu3moN7GWpBniyZP3TBxhKb34oLVysqLsVT2P3G9op2nZgYPzX3uQYFmJiFyh7up2wFr2WtyvnJ",
  "key28": "3jgwS9hWhaU1jc8N35BJ9NkLeUZHREuVLGc7z1g8drrCuDUvRqN73BAAYF2gDz5cxg5QP22YAUi6XgkegkzBbTMN",
  "key29": "3JXA1BS3K9V8rhFnAnzy2qTyVf9JkWAnCVAZx1UMtfvzmT1S9mfUxowGY5tjKvHTuWbbspyZC2gtebu9M11Hh6FH",
  "key30": "37hV6NzEAU2oyDw3WDeKhoZVCvh3jSpzr1coZh4ZDdh7B5Y87DShfqeSN64EYRf3Wyj46DeX9r866ALbP6rfJGYK",
  "key31": "3FAeTPdVZyT83bpwxsRydLsbzqFqdCziXMqc5KfgduFPBnj6JV1dDkhRLpX2HGPdmt5LqFmQwxHXr4idpiK7M3nL",
  "key32": "4Q4Lk5TfPXGeKgf4EewHKsEFH2nh26fSFDmK79FhhHBzRiht3P5tE7DmJJJgNAWJBxQPxTY8hGyy5FP89sWyoE7u",
  "key33": "onPv4Mk8bUeGpnB7VxyjWAYsEijY1iT5PH4ppx3eQ6r2jKgPekdVwebP1P1EAiGdsD1sqqWtrLaS3KLWa8o5qVc",
  "key34": "pVEaPCC4LNoC3VES3X8rmuDvNZ36FmaxURDYFj3mq9cpoorGsdbBmW48WicuDCYpa3nadrfd6fUM6r2jcYgqWZK",
  "key35": "ttJ72jk2nMijyqf6iEt9E3HFWfJUGSzSgYXt21cXBWfd2vWEnnXhtqEEGzCem6BnJysJ5MqkkqK8KMjLrKwBzwo",
  "key36": "3J9t5Xbx3vg4bsRHz1kY36B2xarJegYH3HbSMuQXKYHKwQ3cjmCzy5UTkAaobvtPMrDKfYx2h8gTDckWTo2d7gE8",
  "key37": "oisEnsYNLyrZRXLcxFBmou8LckGVjkfGn9FXUewCRFFo1pFdFyygUzRtvbSBPmBeksSJBfBJS4zoyJZZSdnDdJJ",
  "key38": "5abrtk7bBnihUgKBn3eZ7Wuf5r4m6Mg8JhCgX4LwQi9vbbBBEY7LEnGtGQJsBXwaDCtcyEBSFzRR4ZN66TZzaK8P",
  "key39": "4EhfJsxmynF3yv1kuZhgj4KFTxmWFJkjD3JkG6THpetAyoTbTs8J5uXv8EYic3UcEvdTLvz8dErEXoWscMgrBbHA",
  "key40": "uAFsXTkviXi47fmJocLp15BzYWQsP6afR3VbZzq1f7Vo5zPRH9s9HJf37A7kWqa5HRBZhi9AMMUda7ML3B4rNzR",
  "key41": "4zCpyocGwNcm1EETnf9kzoGGT9cJuoh39wYeAbct4egB6GjBUty3iyEAJgAW6d5TPkWWH7pNRMbLDS4QPJdx95Rk",
  "key42": "3onGMKS3ZYabZCGvjSbrvJgVmrZSWrPawuuSryNpcWokLoPQiLgGw3RdaWB9MFcL2WaXaB6am1dUxPbtaj6ZpYvf"
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
