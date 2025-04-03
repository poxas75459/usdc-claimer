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
    "4MaeZ1QLNWsMcm14PhYXfHNpL5GXMLHQZMVnGBsHpmdj6yM7agyC5sMdHH98jPmrHbk4jMLT3d29HyfB6VnSYRHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ErZdnWqhzNgb3aDsukNukgGZLXeNfU9jtKnwo1kGpYiF7TrTXrtAKXqS1e2ZcJ7va5mDjMb83GAJtBn5cdSbjKa",
  "key1": "4boNE3iotWVidTksbpHM782TJ5i4ixEEGxjPhKsAERTB7NsEee7CwqPZtYzQkwe7UTx5aDgXFvJkKxqK11NiyhAa",
  "key2": "4aWvpQffEoRSHpm1PSe1WhXQAkNFJVE8gVYPbiA25EC4nRcn5buGYeYFXg3dUwthjUDJrRBHBsNvDRWc7hMNxi9N",
  "key3": "2p8GbfB5LSfsNzMMv8m1cUz89w6ULKS7yyisPqYvjLZds45J13ZUNLo3ySTBxMKL8Rnw7Aj8Ubd4T4YEfUAABUnw",
  "key4": "3TanyWohz5ebaHpy3fxZb2RLNUArxQv7hEEJsGRi9VaHbtRFE5JkJ4qb3m6PBfwUTrq44irDkzmHy2pQrJGDmjuF",
  "key5": "5B1GhLrcUXDbgdkaXUDN9HpUhSBRZUTW5ymMDgg1HHdsCimLeZGZG9JKCUWytVpC1psunopxJGPGuGTK7iXu6nQw",
  "key6": "54g9T7H5QVsmqsgbik5LuoSddUfdhez3yJJKv4sgXB1Tmy4oEJPk6j3HqFaBeVUtsTxhLeVsjg8NvTQn4ULEF5Hh",
  "key7": "3v156ZFXW5gMhaWEgLjRVdeiPoUBYoZXTKBPpyJ1n18XoB4oGKTSfvs9c1wMhb2tfxP5SisEKpfVX4s6axb8MrGZ",
  "key8": "2gRhWSQLvvXP7fRh29bXZtxSF2MskeXLaxEJLQdJp6XxebeF4Q6vipPtNSpRBhhCuc58XPzTU6t4a29e1uvyD78L",
  "key9": "5Jh11MVA4mkF5utBxMqjDT8gZYdJPmKsKeE9MBqMRvncpUtfYW8euW5i1TgtGgZCieXeuED7Rrp4RkwyCmPUCzTT",
  "key10": "29UZvGwNRbF4GHorpkBYy3nq96oyba7rAr4TcDrBqnzL2GTHpJAjbUCDAkM3XQ4pDAmLLXszkBVPi5gejcr6Rqsm",
  "key11": "4ZW7mfPG6uYq3ve3mbKskRd6r5rhvwMQj2TganvUxyhtLGm8THJ9nMJxr2kuH8XhciEGPv5AaZofKreawicLigBA",
  "key12": "5QUrBacWD9wXZKReaUuJ6TLpsPrxHsD1RjvXLzWxYzgyGgnQnhvezq15nw7KuLSFdSCHmhEr8dwKYc6A29v3wQhP",
  "key13": "2ghobpnp4SbjueSeMxYAMtqymS4Ch23xMosivA4KdZRDSthzd5PNDXPDHKWD4vrte9QxoxqFkaQTh4L3WJQQ3jeg",
  "key14": "dRJhGDTY25C3b6tXNe3xCDx8CdiTq2BvxC9o5rRHPi8vsHdspaecC9wiuW87E71MRbLzRZQa4QTX8Lm8GBFiAR6",
  "key15": "5GfMgdfHiyXziGhUKBAL2ZN8MJf3n9xwLwxLi74nGurXxFRo3uLC29Wide11m8xkxcfq5dmBBdzZq7uGYoXjv5G1",
  "key16": "4Nr7cc9csdVWdwYHAJp1x67cKbJu5VTvgiVRKBpGmrdNqcsrPqWRmvFr1XyGw7ka69Uj8xj11mQdjqg4uoMgyjKP",
  "key17": "3etcz2SzKY2riwg9htz6gNGnsE6TJ1WrpkEVQmGu6RycDvssQowfnWJ5hFMR6zv2qpKfWwYjYbUdtM2r4x5xVjqy",
  "key18": "4sTAwEacULymSyuKox2MqRCSR8M4NWEGVsehmYQhdXYWciafGP1VeZAt9sBD8TWkw6WdamXau2B7NkWanHs9kJG1",
  "key19": "43s2Rv3g9VhG19WxASkmeAq9rBzUxFyx85MSyTRnJESeNZM4zsBss3jmWuCfCnrji3ji5CCTMN3vNuxGFbL3ZGya",
  "key20": "5SQGb28jJ8Fe1y56J3WSxuesnCg2BMrwjxCQUT7yh9L6gKZpJjDrmNPpU1mcPE96hu5ePbi6eURi1dYe8Mt2TnQA",
  "key21": "4xALp7JjT9ZkLyCC2ZXStC9atE9tXBYiLfJ4sKxxHAcXTGEdYfzUz5Hn333Ao2EVzebhf7B2tHK6v2cHGhX81EJv",
  "key22": "4X76Wzr4tR5g99iNKvaxXdGyG2MyN87mZzgQ5JNjjzu2LkVqiRvT67qRSQZXck8xYYQ8rRW8fsQ97ZqgCzqfHsVj",
  "key23": "MnrtqB1QBgz9nPu8Ua9ootNoHsXgbwz1bX6uUzMabasatcomnJ6iKf7Xa9ez6FKv18APrAnPd9dzvEwjhU2xeSo",
  "key24": "3t4MT5jRWDj5NNtc4kCsZkyrL8ReDFZzRoNidHvzUGaUGNDD83GtgfdG6AsC7Mwa1hkwoAhhKbgHmbVJufc9UFgR",
  "key25": "4GUci8fMb5mstjL1cgg1VVPXLpn6N4t245UYLF4Qv2QoDUPg8YRcySSfCaJ6hMM3g5twzBfj2iCLyzArnFKNzf5g",
  "key26": "5Ex68JUZeRxpqLBkxnULWzte6YGeqwGkFD6AaTUSQri7ge7ntHidpBCzhZsh6LZ3Wr4dv6MaoZ5QT6gEttmdSnZL",
  "key27": "sVkCfZgbap9brvFDpvF516MMbaUV9HJeLnkWAKC4Pntuwkv3WpZwuxeVfGErLTF3H4ZdaAsvkWdaCGnJrUsBL3o",
  "key28": "3mb2XmJDJjwkPZi3r7CaRsvXXxZtUm4WLQDNzbWMjeX2eLVRjPaDibJDvJcZspZ5pZkA6iLT5TTDb9UTvEgeRSNy",
  "key29": "29W9xVT1edr43DfKAKYVLYoSD6PasKAw3WxbA7tsDtwuaxoRcwXhS7f5z1oeHwzPFHsiKAA8mT7vyTawqhjXP7xY",
  "key30": "3JaM1LoS8Bqq4kvaku3xuZTdF9oZbc7mzLwAPChn1Uxkij7DSGEBQaVd8ifHugoKR4yQ3b6fMVD7grbnEXRiYxva",
  "key31": "34WhK1pJeqzJuyNJgXM6SS38qEzfDisUcyfhsXC9kut4gUjG5LoiCH34RnkWuyjV2W6Hue9cJjn2Q4eafGUHZ1F8",
  "key32": "31fHEecNRxdGWG5CvFSCBpUVL1HWMviTj5mhm7pNRcAyQHzHymTyir53rPkeECeSzxWtt5eMNUYVmvKDhYQfXjAM",
  "key33": "XTZaWdxmRt2sofRxB5LKdihjUpp7CCfx3ieT8tgd3YbhpkZgbNjgCfMyuEjyAck537Hu1zHpBa1NLb9WH1XRBfr",
  "key34": "4CfGNHtGCFT5shdQTmRT6iNugbv712hJdYP84hACNHSgy1rLJWawj7hKeZkYXVPaGTpU8UdCSZbASHADa51dSm7i",
  "key35": "4i5KKkypC55z3g6XGHGJ7sGf7PfQWuuohsxU3bZNfAghvTkewJK35q9Z4UHF6GDDBpogTtofKxv4FJZFBFjrv9EU",
  "key36": "2Dv7jwkeHpjRKq1mP1CptdGRpvCFZ643gdwf9aCE35jxwjFEtHBmAXq9AtZWwqQbMzKXLJegDnR5amKVPpXMa7y5",
  "key37": "4PXKiSMNTNikNJo926cqK55ZdtxwJsPBNeMtYjaxZ1G9Hy4iKs3fQi9Ftqmg6SCWTSZTfiwNHYiMhTMVK6ETSLHg",
  "key38": "MAJwzmvdt77yyfG3BQLiyF3ThtAJphvgmmckvb1N7FJ48Uk2BauXK4H1AJKjFRGAJEiFyzKLKTN8JDaTRqNWL6y",
  "key39": "4gPrdxP9AM155vAEoLVQY9uTRWHwiRa2d65MejK7Rd344CySUUkQQdPHke3AtvXSW4cH4Bv25NPReCQgmXJGGLoK",
  "key40": "128zZsQYtGxJ5ZRHLXVN8ZKSqGSXp2tf4Knz8cf4e6mGBKSHhL9p2hSZTMe2gzNQa3oaG76FZhHdFFqXXT3Ch8Gr",
  "key41": "4urW7S2oMkxdgtSeNrcZTkfDXUUZ5eCDGn8wjUWRqPCKxgbhJhtmMFHDi5WJcNVbQ2xbLFYAPPqEMZbkTjBeCA2G",
  "key42": "5c7pNrsnhPCBDCQ2oCH8FnrySL9oxYTouP1bsVngQcduqquEnrYNuopX7VYsfthckj8i65cK543cGd5mHZUaxE1G",
  "key43": "5AeRdmyasRDyK83dbvdAeQ4FWEMGDwosDQwhBJ4pVrd3vPZa24eG6uQVvBarHRRAcHswddpk2WKeNkpsUa45APrG",
  "key44": "4UVH7pfzBZsoRUaroZPUuTFVPuH2DCDNmWLyxHjTbamNU4e7Wx2cpfYqDN4QvH69Z4q9JrytdyVwabdsgAKLc9tc"
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
