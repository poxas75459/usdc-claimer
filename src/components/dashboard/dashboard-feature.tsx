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
    "5njQP9Azg1Ax78Qix6vspqH9wdRV7ipeXSg8vUccJZ5RBqc4mGactfE1bqE8EdmmcCPXGtn2dcYW2qEQF4WB4oT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQ1ycBQXB5GW3orWNqNxBbDzarDBeKS1Lxmn3Z7puofwmc9qntFuY77SwxrBZ2m3MLbCSuGd43y1hVDGLTDgsUc",
  "key1": "kxZtnmurKPcC53G4gGGDquRjB7xnrdyRmPfRJeJE6vDTcyFLMHBfBP1cWaYfieDDrbRRgtTCh8yaabWw9oRL938",
  "key2": "34yUnyN3irhrANGd1F5nT5Yv4J9ihLUNSRBE8PQB8vHgvsapxH6vAEnki4DTi1rxKvT7dcDSv7iC9ksbWMFW3piT",
  "key3": "4BG8sSF8gMmFjFdvNRPmwExuyaKyDYAJxVsXdDF9W49U6VV4bLJHtquv97naP7dQ3N2v2qKdgADar7F6AoSB1fcL",
  "key4": "41TXrNWaMFLL8TWd8aaBFbdqimpscwcxyyQLkLPE2xqhoD5E5xhWoy9sNP1oK1tk1UF5LCjcmFpoKSBwfH4oSsah",
  "key5": "5kiKoGHWrocULaJgFVFKp1FcXAqtHFC435zWnxfVwCpKCFffFkwSUy61q54cm3nNKa1iQximAC6XDi9GX5kdNA7g",
  "key6": "3dAuGzFDuH6WeEu1NDmYvRWjD6mjvb8NWqu3vn7EvmEpraVZBShpw9QwXK6a7XrXUws5xoRipUYkEEHPixReUBiN",
  "key7": "3FfZpkEN8g66mciAAGZWYqD6yuzczaeaC22KpoKFbKSW1VR2jz5SG8bDmfC3B9wjx5EZffioDvyrDbZjqucmraht",
  "key8": "2NHc47bxLEzkxaheLopcswFLCq8iouYGPsTcGNGjcMAzgauKoQH96KqauDprvGYXow2S1htYPJJQmSV8WPEXip6Y",
  "key9": "g7CCZ5CnZnt712Dx8BgMUHKRw2FbrskpSFxFCAHbbEc91ndig8rYu2j3hDjadPBsmk9TWwbs94byx51d429nQH9",
  "key10": "4pYS41yAWRUuGp7mWurJnwU5DDN4wJyvNzVvwtBfyFE3zdE4hmhA3uyLjEEBti9aKQJ1zUfezcbXBJohrxoabUUX",
  "key11": "YjdcuyhcFiChsamdp2t2dMfb7UdHTD9adkTHzfaMAtN19Lpk2XzNS3PxmeysGUWMxa2VqmmKZgNVyNwnnQWfR21",
  "key12": "3QJ3ke5uNKgmAii8mAsVskGRXy3KLYUwxDrQQNuXtPXLQjRmGqvTdURgT6j93K3VL1eYvM7byNYMeRkAqS3Ars1E",
  "key13": "2o4V2tikjKncf1kao1hoUnbZjHXWWNpahxSdcDPgNhx9N8g4ZTYNwX5nA7f3fXkSUeLWqVBWWcoJyPoFgt9B8vcJ",
  "key14": "3GmomcpPfFDCA1cXRDiUB8DPs37evVdymMshPoDfMkomPeKrrYizEZJPUmHAVuGu7K7VNbC3shFZseuYTv5M8H9a",
  "key15": "2QU4aRs9PW2dCnNe9FUjmQKQhXaaE4U3PZSH37CT1CRWJgkfoasf9LJDM6P5LaauFbgMkpLwmrATFPkDJR4y5MhR",
  "key16": "58idunXCe3yGqKVAsnPwQRiQqt1YpMSRmw8FKiD9hyeF7zTSv6YBLzGUrW2ePjBSeNAq7mFRQ5ygjAjJs6cnKStz",
  "key17": "5aWqiH49X7Z6iYshh79S9yTtmhwoaTpoUL9xsfv9TBe36Q6cXisNyuKByEXYHL4WhDhH6FVhGAWNN6pkVhQgqJ3N",
  "key18": "3bqp7Lr2BSajFii6ixuT6sBRJmB4VopEoNqSfkyWDkwhXcPMyzkC34qJDtXKAt8U9TM6rfQD5LuodayvDo2kmJxo",
  "key19": "5dSr2g3ZiXgfBQ6QNsAotyes9byXamxrKsn9KtNcuqsWebzRMa5H6522rqG4nkzKyBMJXVZzUMD13KS3yeX1hAdk",
  "key20": "4PjyKNP3tmrvWSoBKqiRdNzubRrY1kKN4rLnQ4kW4rEDJGsqXndReGi2EZDT7bTXbVJYEc13ccX3sYiX7fJNswxf",
  "key21": "4ziH52vK6MwbG72gVMx7bX3ZdS8JU7i8b6uKM9idVQHcJKpyeNZLaaD4F4nbMbS6vzfJuwpCsVyspzjYYaLnjxWH",
  "key22": "2CHLw9kQLx6hdsix138X7T54HWZvakSdjhLAEATQe6hm2v6mxm4uYer2URYe7CZAF2AycJzHpDKfRmxcEvR9pHWe",
  "key23": "2Br32f15MPMWSWwBmhe2FnQne1Qu32YHceBQwy9aUaPgA62ACj4ka8TP6PEAU6FTiQxr8WeeTwoZXrErTv7aSER6",
  "key24": "4CK6stBVVGSDGEMfEWJckBDstSEuu9rwQkeuJJ3L8sQFGsEkMQ123dtfGRVWN9hr3px2VKXSkoXZWcMJwXdbv4Zo",
  "key25": "4nwuVZe326MdLxKUrk6vhSSL7924h2yx9SjyStRAToXcJkPihdQagHJosMamHUrYTUmsaTjzwcsY4C98rAEYq17g",
  "key26": "5bLqc9CeXLdsxzum62kkhjRspgUQm7AjoxfMvA2Mb84LwUwjvbTTNQrTgqB2aYdAVV3waX4YDn5THxUw9XYtNgxA",
  "key27": "61NRqZKs4nPsjX6wGHWkVSMquv3UzfSz8c5DM5WuGVdLrwRrJ9hVnr6gVRkYcc7aW2YWxg7DbCU1fCxh41HGVP9U",
  "key28": "3NNqohYSKvyHTCVxvifgRBr5xivAfaTFzmBMcmMuqDkf7qYo6ZYYrD77nVr7iCsjETeq46bD5ibaHagpQhGs52TZ",
  "key29": "45jpvRPgVLmygwUPGtKohNo48VZm1fN94sm9qGvT7HbfFGDLcKZdnrdaQ1r3wgwsjVtWwG8H7rZLZngR4Nm3USUB",
  "key30": "4tjFovzztrWYXQcoxkyvkHEwpqtzSRoNQFhUiyLbbjAankdtdWA9ERhBVMN1PzHTtzvi3GsoxnRG5wV5QFkr3D8x",
  "key31": "5xR6fWS6XNm23Qkyp6CEQ1ebXVgcz42oPovydJ1CoRm1KjPKv6kaGJcfxGArhWJYTEwhzMQiNJUhNsqhYpR7X54M",
  "key32": "2MCHT2iuJQqVuJW7RVVdayPT1KVSYFj9f8E2FJRE66rUZ9YfLZSmGzxx9c4UysJqvx7f8RTVFkZR3ivTnV3fX9S2",
  "key33": "16XVuM6LkwHKj7j5s7DpVy2Lu9qv1JgXEjrfrqY5QeN1mq7WdrQTizCZUnhUmRjATWNR2dDHgiVmWaN2Sy73opK",
  "key34": "5MNyGeZ9TceeHztb8p46vosggHEuzv9nv9by6cCwtqSdWzacAYe3S92EWS3vj2uSizwB51QKJZ5kR46YBErU72SY",
  "key35": "2BteHAE1QRRyPS4mEdjLMYBNWsYDvP1SvHBYDASFq94zy5MZVvQ5rF6oYzC3TzX11UHb7REW2zXVEAie8sEUwQJC",
  "key36": "2UqzFRAtCYv2EZmk9vS7cL3rAtvVN6CQEB2Wv8fobSK4tk8XBo98P7Ps96fpz4Fa6J6ZfpacGGjgNsW3KdrvxN53",
  "key37": "3mZwM7wRrQTvBMPLt3GfbxTvTmDeST7iNfiefDhXmUse1j1ufjPDRmecXJK1QzhcjL4J5PtSNLuNu1BuF3Dzx5wr",
  "key38": "6GyPwKg91eVri7zj71jZYDiz8gpyB4MA5wFevzu6vdxASAVPfAXvzkq3nF4coAG2LGzT7qAy7uFtAiBArW1oCGm",
  "key39": "5eCrL2PcUeofq8nAq7VgNJkzmPG7RKn7aTMAz1Q723kpLziER2jk9RBM3e6hKX1s8W1m115e4vtjNB8dfcuXXeFk",
  "key40": "5TFNAuFMBweZ4qaSG1BDKwRrrZZ7xjCXxGLDjN9n15o4UVvgkcnixohGHgP7CVbW9pjpP4PsskuzFrQSrM4PXDNx",
  "key41": "2EWCAkePfG1bkazYRjA1Tpx5VdcRyLpbtP4tb2KC59bW5dMSCACopzCzep8MgQTqQLgEhMponDCJnhHcFHZduqeV",
  "key42": "2u26GvaWnWFY46h9PvPS6xivNEhWyZFaugsTscEcCdYupQaKsyMSR8svNJGZLGSNw5wZZBFobCHTDQDKSCDRGPR1",
  "key43": "2CMFVF78vsRHQZbpA2KfHWE4H6ZHmJyzU4mefKeNwJ1LLKDH6iTxcc4eNk7zbVQ4WgFbZsNXbgEVGW8uxSnpf2Ty",
  "key44": "968XsBMcqS7x1EGGKkgh3TyZpVWHEqUe917rtQrkvSgo7YbezftmAUtgVHjvPjkiqrmCot8B8bh1uarXMfvyuqV",
  "key45": "3vsRnmyjSSvGBBFobBZUjVmwZPjqsg4MPrGmU2N9Xy4uYRNtZdA9nvN3qayxB2XoWjtER8UQrjNBEmoHWXdeCNhA",
  "key46": "2yt464QLA8sjrBhWW1t5DVfRnErnJYh64awhLLic8NQRE5Srr7Jc7c9dmsSRXHBcYt5LXxRUxL5aRm9DtGjx843C",
  "key47": "4D729ZeczENzCatbZSfGwt2diaaLrDSrfdSJqReJHSi1xwUw1ZZAuejmFJ9PyxP8M5DHz9DSsYyEYxv3W13j6JQw"
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
