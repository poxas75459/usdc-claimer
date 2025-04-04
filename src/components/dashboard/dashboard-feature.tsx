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
    "3JRPbEeRx9vaAEDPP4KdBz57YSxLBXBqTbAURa295rhvo1CguK6mmErZsohj9VLyQ7ioqwKR7uJSb6WcpjydZUbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Td7mtHQbx8V1z9mxH4nYAeVMpQLQk1YrQgQtJriiGF8MF8c7Sgbb7GLR4BsVnmvLwRpjzbiMyQe6MqbG7ohSpEY",
  "key1": "4pX1B78xrYYGtTr8g4na8WqHN7C63wa2zns8kCkKAFivAHVfM8R3RTxVnrvQEmQXrwyHDRFjWgRaphiTVur8YbAS",
  "key2": "j9uUbJX3gSr9jdUq56w82B5LLVULWAjymDQXvNuCpWuLfux7VLk5wF9Z87YW75ztHUJWo1YvK2iKnNs4XWBmLUj",
  "key3": "21HxZqSJBfQhymvfC1v49dCrzi85DScXsfJetaaRiWoDZbGavcNSDdE4TcaLKeCmeE6gRkbYct4uqsAyJPfCjwqq",
  "key4": "2PwmEhhPMp7ejA3yn8LhAx2hJNLkCd4sF2CtndV2hZ6rTJ4sHP6HafL35Q73DhqkkV3Ep8pdu5G3qi8cK5VTLtFd",
  "key5": "5M55TH7WwZn5e9UR2pXJ8paK7tdMh7xB4SAR48J22LhKhfxbDd5C3RaiapsHUiiMeofBim1y23Wcur11db26z7gJ",
  "key6": "4zucMjZFJwVKn7rbaTk8asmAHEkVAUEzoFhu7hJfPuVc5RGERbraPbkrSHLTAe8PEew3G1QqdZbKVtt6y2f3KoEo",
  "key7": "3EZNeYRx2Mz6Vwdp3Wki3AJURokgoBxhwcKfdVkxbo81YG5huQU5wi8gEqB2ZYNFy9HbneSF7TpqkonXjDe18g1n",
  "key8": "5tdbhEwZJjJ8e8SMdj3shokpphZnwGaQSSC8Lp2WngZ6dFRRsCncDkcLpAgBvtk1P8NkpqdVGD1zBHH1tNjGX14d",
  "key9": "FwcuijxhfEuieXrWqA2p9a9V9a7jmtSnYXByxHmanxE96EBDiN2UYEJXrT82jnKpmQMqYTTnfrz1Ug83jVCpNmt",
  "key10": "2viVfPhUaEWAqPGK1a1G7pKpCN8Nf8CSA4SDsjaRT6dzXUpRatZGXad6nW3hx3YVkoCR493HjWHAPXJcyqnQQxiN",
  "key11": "5Y8gTrGaySvP1NjcS9KxNMhADs48MXzheuoR1nMi5UAMHh8bFbw4pnFV6NwvN6Jeo426fTVoSfGKES7FkNVf2SdG",
  "key12": "5QpbGSPwawFQp3J1J8XUAYpohJL9bQh1g6sYqWUB3gBYGpfkEwV9CqtMvxkNoaZh4MH6J3CJWzk5HDzX2FPH4R1w",
  "key13": "eQ2E6eorx4q8yw2C3AKArDmk1e17xmVeeuGs9FphCnyZsLu2Caq1jmn3jSDpnxCR74xrgzKaotQZyKgfpYVnz6f",
  "key14": "4ZZEE9wcJWzUjE4sCzFZaedUh9Q59n8ctbGtkcMb8Wbd2UCp4XdbxXZ7Uu4tzsdWGjCxD9U1dpXJoQ2Qosq7SKR7",
  "key15": "1a5Ho8ATbGKTeRNM75tfBotWP5CqqGCyf8pVDajUtLScAy7YuYAtWR4FaxvpfnyYxhEENxU5bcTDL8j9kBa5EUG",
  "key16": "4S6rc3xaqS8bFV2HbaUz81zRDDMZeX5y6QeLEnhj6ZgHMmEBNmWrgxDabW9GkyDkGuV3BbVCeLeJUgqmE8qcg484",
  "key17": "4f1xE7U7QFBwq7JCiZiZTfhWfNFmZqeDXb8UMPfhGvFKSe83xZAs9CM7t5ZHk3WR3RzG9r74bytkyEQPiRm9EoJV",
  "key18": "2DsvQMN5nRh5LjWLqyPCsvcSVFaFE6ExbHNQN81Y43dNtuQRQzcfsPGYwsBBmQUJ9gpLY3vXBoqKSUPkhxtoPDrs",
  "key19": "gMnWuZFFvVNKJmsBmWKoaADQ8NgX4SaJubkb7JB47b7GrNdLKLbhno7L5YNXZnPmNq1C3pAHf61gX3QbTCUth8m",
  "key20": "TBf17nArKVS5XXwA9TpMLnGTLUpcKNQg3Q35NAXyJSndkFQqymMz2LYrNoKC9Bgorune5jrWuy1LGvgvHnu2QdG",
  "key21": "QostGuTBSrSFpGyQm8ZmdRbn6DuXqxgrji672fjiLn72AYoxxrV5zXrJUJ5Toj59QejECfBSn11cQ8XHHsiGT7W",
  "key22": "2u4cpuA4LAezdjJ95UN948YVXyFySibHrU8LYgvvrHxREHtMt9gXPUcsgMeTjwdTv44HWuEZYZcpRgqawYSY8rUL",
  "key23": "2uKQQhAd114tALRcjRg3WznfN9xrrH9Lg8C9cy6U7FvY5xc9fgoR2jMEbpoU2iVnVAMeNYGeq2Ucfmrx8phA3DZX",
  "key24": "55xZxVhf4pEc4W1wjCdESKr1aGzdXpQeyLSWtk5LzP6GebcgdAM6ZNMT6sF1zrpiXQTQDNRNfT7enCUzhGfUi2p8",
  "key25": "3myfu7juZSraf6GHeBiYjAHHtyH5JphtNrW4rkbAGBcxhDb4YoRo8GrvnrtmhJD3LrjukcrgRHybx2zpUafxC234",
  "key26": "CsctxcH2exLvzuBKCPZH13MvLr3LVohQhr31bkkCQ3V7194zUNekQ187T4qDE5cYNgJJGpVbWoL2R4uf9JzLHJy",
  "key27": "Q2Xx18bb3NNCkcBTJynHaCHpL2qjvshxt6prdsAtfM1SvT2g2xaKeKyYihUCT6v8AmfXUmzdBUz2R4epzHQaerQ",
  "key28": "4uyo6dd29rE27hpen5pgDv77iEn5RM9La6Vbj5NcDWEt3H9fWvJ2yBsd7QSwXDMHkiMeELjkeADL58Ju1WcbJ8HA",
  "key29": "FMQk2evmsgNZxGv6ZJACg56ZKbYC6AWFTq6YqoZ1RJi2WkJcrpqs2H2JedCJacqmkmu1sS4hta3oH6PpZyFU9AC",
  "key30": "65tjU74rkXAwa1GhPkWiskBUcmVzxbWVWk66T27EPtj7k1Aa4fzwFSQHkcLAmeVbe3buS84eroAnynGPqx6iR4KF",
  "key31": "4ftrNV57QunTF6WwgteSDeYS1ihmo8VGNBET4oWMTzwCNry9tA2EkFXnDfc8DVxDW2LU3zQi9M1sHK5A1oC26Ho7",
  "key32": "4qvovBtEx3Wt85UYCovJz3MaB5mJqHtMHzMH9oLbgM9L8y2PDM3nvYzZDyF1E5CV1Q2Z6i5VuXAu9KSaAg6iHXYq",
  "key33": "4BJJYVM8pgriTQU5kbV6U44ncacevqhmZwaT1rdJ1LQit8fGh3kbzsCJpjmEKBjyfN6KXkdKsPpkZaD2qQxPBGA7",
  "key34": "2reWw62XoW3hcYogUdTAH3Z8ZVXNdqoUn8SZafXrNUQUa6b1yk9kMYkTDRrpY9DpwXUJeAQU8meiPSGc9swc7L3e",
  "key35": "2i95pXfyU5fFHe3t9mCwEoXHXc9NnX6HGWSLFPQb9WqUSctCZm8wi13KdS4dagoDd71uK4S6Dxuh5ZqMZWpQUq3H",
  "key36": "3LQJW1T5simT2R7AEUgk5HXygBNbKwYkrVnvyUoXRMTbxpDfQVFayxqyHYSvxCt5d4V2e7yQ3oxcfFmeHvjzdKty",
  "key37": "2Xu9NUHcpJDKoGjNMEJnZyHCp369uK8u2VLzDtN65gYhhiGP5peya9LSoQLEiQWSMNA7iF1bot4BzEDxY7kEMRzn",
  "key38": "5puM6m1cN5bV6raq8sTjTBprtuxcXAj7B6bigGHPdPC9LCwmBKHA7qJdUV4BSjizf5whsLqtr4rfo4ZAtLcQegdq",
  "key39": "344S9bsbb4jqUgyAx8mq8JjRBzAtLYwP1qgMCLVJ3uYAvkeYSZUduLAq39JjsmCN8EyNaHQACgKfaaGPfkwcY2w3",
  "key40": "4NmZjPqu2h6DV3ccy8afshKQFboFxX5Q9Q7T1vX5UUp7StKUDF7guFM7Pi3SkUh9Wqx7WWVW1CiHWYPKJ2TpAJ9d",
  "key41": "4wmSes4DQMBmnBujg2i23iJ4kuhKXEDcZpeiy3kviVdLwSBTpEZ515mjou2ZSH6sLniVn1EoHrmetVuZm6UWfYWJ",
  "key42": "3ntjbFWuQT63pq2442hL7FR6N7kBHZsnm37hYxegws5m7yfsJRUVZ7eALx98AGrNjF8wUUxqKwjGLWx4KqbmLoYT"
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
