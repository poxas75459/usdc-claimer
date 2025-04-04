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
    "7FT3GUHFwjke8HxkBojd4b7Q3g3F1X1L3jWSSsWw3Pp1rforTyA1Z5bS3xtWLzshmRHbxV1P6DQysnYKuoLx9u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yi8FrXLDegQg2pguaDQFRGKdcQXMC2XaV6KrUbQR1xG4UouzLRJKqaGWHK5UbJcBtWRa2kr5Xp5AmnJPyMdRmyu",
  "key1": "2ArPmSRrcScvAyMAvzm9ZzreYHyquGPdLrRfPgBFc3dTmcppMqtG7zRUXPGFupVE3ZgdXEK982c1vdGZBzhcqqc2",
  "key2": "2gywrZMVT6GhibJJF5xFW7kod4e65XisfNesaTbYtWVrcNdPVmTUN7Sg2sPEMqzxhHpTmdrp4yN1hd9o9FMQvfjq",
  "key3": "2GK2BNP2Me8cuRdfs95cmv3ifgduxas96VSwtUBZv2qZuw74nCNMqAeRwovJVYo9TF9QTpfgx3NafkPiC5AK6TRy",
  "key4": "4f85npAJTFoqCmg3u3uLHrVRcnNUkaq1KFbaTdwZqr3a98TVAFi9AbBZJs7ah126Gv8WGgENrXHs6Xqk4gWXb5RT",
  "key5": "F2r44ZJ1J7b3wcRJ5kcVkCqxCZvLw9xvjhW7mjZHEPpdiUckTcrNXzpHLbDM11szY3KLb43cDi23JPfxDg5pETi",
  "key6": "2Km4zQxCNbtFR1RCvBqHtex35gTxN6bNMuEiBZnRF4zSvfninDfjcQ5y1KRwTEtdivsgPiYAqJApe9ud3FezaycL",
  "key7": "3w3nbUTL5bnhurcJmh55jTQVV7CShcksHCxM9DHTXwhJXuPm3QwiW2HUQWsJM3WYLDaspHyuWh6X8zJ4WrhmGUx8",
  "key8": "3aiansSXm7LXyDusMwVz1eTLtkjRd2F7XWUwVmaAR1shuKzz7XS3hLNr8bk1urtBk4uQn3aQz9qmro5w6W8cRoLX",
  "key9": "2Yy7c2LyEc4Q4FUMphC2m3NBSXthPaCcAxo16pUtGChJmwLoRWJBFi7ZRvv9U5XsSJLhDJiWcBF7g96JRiVBJ8Ae",
  "key10": "5t34j2XkdREhJWcTR6uA7ahh6MevBDo8AKMZM7eta8g6xc1jsnBJYa1kacXGoVZchLzuijyPfYRw1WZt3gugbo8",
  "key11": "2YLgyGjQ3GgJ3kaUdyFUNX9j7h9rC3aBpYuL5HwVeTJCjxDQJnwnvXRgkjUjmYkXsNXPZNLTEkc9pVXzfo7QdmMf",
  "key12": "5jXRXqCzf7kp1zj2VvcTJQVid4TmFsXNZjbA6S3u94uBZegg4FpuZDyTU4RAgxhoGZGATigPprLM1W5bwSUHH3PG",
  "key13": "4cNDKpLooz2dA8SkKGqkEx1QM2BArEYFAiDxwRwMg3gKdsiBfGRnEdJZHHR3btXbfbruE2H2JfEfoMaapWEDNRNU",
  "key14": "2oyaMVjPKvTPFR6ePkaTi7sEggLNDWiDcnzri7gEFdJ85gBbgGj3UVT97f3Ei3V3ndP3RwxbtZXfnfxKLmRdekmc",
  "key15": "5gvZ4ckWx4xpB1S59vo37C4KgvRQCf5mL1UndkYipEFqscjSLj6puF5JCNsUTKGVQsC2MmR324wm5t6DU2y1rrfY",
  "key16": "SJY96LpSPgvP5diar7WcK4TfCpLkDuaq6ZQPCCUqecks9YKmwLkMeQ9WE3xk45LFKDZTEqmxhH1z17NMXCqADQ6",
  "key17": "rWWVUQm5JpaGmkqm2UqwWuSrCpFqS5Qprt4cP5vZ72i62a1PDcbUiaL4twRmtwGtw7EShMn6t6TL79Q4hK9bi4L",
  "key18": "DV4yychsUQWmcQDVFcrvBF8wdy4ocW9wP47inGtvT2K2HjKvndoo31hmXxLbFT3udmAxpJsYgu72U2TWeNYG6L7",
  "key19": "5u4c1Y585aqvCihJ3HrtAbPE1DDwKrjyHJUqhRgdbbKJ2gwUJSPuWB6TYLwqdpki72XnPUFNQjQN7UcbqgPh8UZF",
  "key20": "5xHK6Xo5K2urut7NK5s7Y6DDjtV87bDKi4xueRbjh4EBs3D9ju4WSuPjN6mJgA2hqFBHPtCTtWrzyNnysdznFbfb",
  "key21": "3tHtLer3BygrPEvQTcC9i1cFzgzTpzEhCvziHFrf9tnX18SjwGfBykHMNzZTubJb47YmuUVA9jfehVxwF3Ruq7Hq",
  "key22": "5Mxpyi8MxtcS1dNFpmATVJtwybfEo33JvQdPFeV4ToQP9DvCoe2MoEJQ33gwD9YdpbidYNb9TFt1A9L6Gdy4YrPF",
  "key23": "4rEMd47rPrJZ2UyPQh6CY43bqMJGgdGhUvpTMo59m6LNFdCpp4HmnveGChJTw5n9a4H68MvRB4Bw8aHBKZtFWq3u",
  "key24": "mXCujyFmbtMsKoPt7keVPxUazWLZideuwHVtDQMFS1V2ULgA1LAdci8yG77qsLmobgeuUycCByqv6M1ionAPRCS",
  "key25": "2LDzjx1iVyXK8ditYLbJBkfBCa4pJ4nsNhTgMKxw7ngpKjxohDm9x55HACjJyN4PYTKFVAuKpQfD1WfkE1Khaa34",
  "key26": "5FWmcQZ9QA1DUTrXK5qfLsHBYKJwzbVrW4JgJedDNkN3WxzPWR8EPeHGpV7tYsqv1T7mi8RCwGWhg8Q4YNFBDNMt",
  "key27": "5D3QQkzifhvfxTjovQX3LWSm7SLktCmFvnPUx7PDp4haFSqhzYd4494VhnWygNEjpxohQjJgABSqhFQz1DyJDRn1",
  "key28": "4wMefKtrtjKZb9Cgu8HWVZb6oZGFWJDRWeRukC54QVum3dAAE5EwXLVjV3WDTmVN6jnxuaueGRdtfW1UXbeXwpHP",
  "key29": "25wfzsUWcKdMYwD9iYPpAjs12Z3Ffi2vJ6GCJLqxpMq59x7aoR7RiMPZL9mJDTSCu4qs43T8eBgJpY1vUHWpa2A3",
  "key30": "5JxaTe7TtnsKVVHTqW2erhHxicwjMboUPddzwaMKrMWpqKSqQBmbojWymbTfqAagtocaYDXmmzUNP9rWpYJBYoA9",
  "key31": "5BGMGQbAa3mbc6SBf1jcQuWGWm4chXZpja8KJEkGP9nGG3GDEbX7swgQWdSx3kjMayepe1Cmq6kvtFasQhCHUhJR",
  "key32": "558J1wWjvyPJLmTe9APfmAD68MkDYzZKLMpUcELcZ7yYCT5qimTQcfS5mjsZP4jViQ6Nc7EoNFUURmkEb3m67oYb",
  "key33": "5ScsoXUfAMENN4o2gnZgFX8n4gSMtChsCcYApue26ezfsh6nJ6MRU1kheT6eFrzu5Lk4tZZqM4S3cBEv3ycLsErN",
  "key34": "2MJEZDLu3vpp59EaUc5ynFtjL4xSAhnZtRCgoRa2xZYx8k4Vx9qKQ2dpqFYYpsK4eRPyzqrmySGKBAVWyQFJDqGc",
  "key35": "5vL79mgZscuRtqWEPF7fcvt7KruhNNrQP6wsCUQ3Ym7DrFVdTfpauWfy3KbwoYZY3zeSQetyrJXcGnaSyTbaJQ1b",
  "key36": "4oggETvpYEkhCe5T711wxnVQ9Gs49mMZ2fzSAgBqokvD4Ha9auH9zjqWPYMpM43UKr5FXTpWvQa3oVwardHZUU6W",
  "key37": "AAYcJ7S9FVTgeLzpPLEB8WLMYuwUPH3ZB5yQtDsZxCxaTT5E8vyKCaAowaSjrFDmNQGKPvpY5DcZjcMCwCJDwvF",
  "key38": "5zrzg57bVwhuPzeNZTg2Rk7ysFzregwedJLB2nx88vweCxSmf9QkKfifEVS4iKigfsBfkCP8MYwjAPRiDes8kaqu",
  "key39": "4dzjnZyrCWkfAHf4Luwjj98qduYNd3forATTM5rRV3evboF1gSZv5TCRkxJrjTdFYCD7g89EGFU2nKafSVtuRj5Y"
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
