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
    "4GAtkhMFjSD8xSq8b9eEHGX3XrK5D34ymBH3etP5BxuExxHn6Wd3FCemohcekGp88q8hkzGL62FwnCsoHgRkeR56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FurHCXVj9XKpDQLeUcNfhZugHawz192oEKE7wd87uBVSTXErcnqWMUg855kzDWJF77QUB6UnKg6Xcvky33cioe2",
  "key1": "3Du1h1QUzLniVrkD52JKBBaMmPqiRLJ3mWMUoh5v67Dvcro6Rh8nMWxauYHdkovwoiRA9zQ61BD3zQvuhAjk36UH",
  "key2": "4FZYCirbvSXJippfyVRdwiKEbEeKzmUSuG3gpu3kJMHaDLKkxM1CEFEPpudRysBRrZp9jS6uTSzij98dmGpsdDzB",
  "key3": "5VgfHCsCQBtJb8kYTo8B4Pxg3uBmehgnjgba6dwxfKGgza5X6EefXeu3M4VyrAXMiNVztAQwy9qoea3jjBPzcs4A",
  "key4": "2KTA2quMMrySgnh2UE568AJ5cCfWN2QhoXW23boGDwHg5fs2GZiPct4pBCujMEJaQXUJz5g7oXb7xRmSBqqvvEkG",
  "key5": "52qesuqDW5rSCKz7z1JkXYJ5wnAsVmUPDXmSU4HC4dBcXbZeULnn1y63P7jNG3p6kPEAYT4bMbq3E59ju9DnEARG",
  "key6": "4VaUTVmPpJbj7a1EJZPqZii8R3Ly6A9qmRzb5TSPbVY2Fdoaf9obwr7xHECU5cQ3HJTGcdcBpvBGRRYS7Xxfk7bF",
  "key7": "wchTMDczPGCRmRBF43JLWKtY3Zxf1vT7hYXgTMwujvWBjM95GUUiLanNcKdV9MfEAPBkDd1jM1t81LHE1SyDW9X",
  "key8": "3g6DfADu3goHWQkhCrYqp4qND2ZGcjqJsWjsB9HMAGQUmg7roRWBv96yzLKUFkPHaHrw1Fkxf4AxPQRgruBC6cyC",
  "key9": "wixq3UM3Xtw3PJtLBJoSCw2w51u2D1DNamVkEWy8dB12EtKfXEvZpLBqF77UXZW8335arwgqpLspYcyPyUv5xuG",
  "key10": "2GvxvNcMbor1CJLoU7hgFDoUnGkD4YaaZikUJGa2h7H9dvvK3QuKEXetw5YNsaFtrYpt42fAHTC3owZWa9VaESuB",
  "key11": "4izmLnuRomJN16B8GfafHzB1wuQifya4VJD728WdzJ2JZkyw55ofi9rbEuskbKKWsF7mhZt8AKfipWomZYo235yU",
  "key12": "52RPcKBZSwK6eEKoH8484y1ZcbNFUm8boqQnBwE64ReEkPCjykRUUBgMs8MLLJJxqqqpdZHMURxD3yBacWXxv7dD",
  "key13": "4Xo2ss9aU17of1DiyBjry7e598vsHiFEA43AFH9B8341uGHsKqT8ra2jmtSNhxPeTw9tKvyiGW4pm6Y3GQH1zCnB",
  "key14": "5vdDHK1Bd3G5BttvBgeMVG8xtbb2E1TtZ6N8pdg1cvnNeNrmvRoepxc59GnD4yKmXy8eVaZaYt4hpPzXcPJ9521k",
  "key15": "49i99grsx6LdKEsCHpHA9zuqVAHRRonv6Ft2RV8a6Bk39ZaHiYZSE6KeYh7FKnUwCw7dxsLpN4Fhm8ccyccUckoh",
  "key16": "266MdVAo93da8fYCrkbRNaQd1cXisiAZdS3TN57q9E1zQzDid1HNvUYpuakEJGUiLnsRCVgzEWGwTvtomewY6S3c",
  "key17": "2hbdaCtje9iq1hJ7mLTsSL5SEYdBF72GvDXp5UF8g9bDe4WiGFogm3XuWcZvWVysKy7iy2xknhVEtHsNBUTEcSio",
  "key18": "2onFMv5mrAAwGDmRFYaxrurCcr3M6dHF1JFLCt6pUWutQro5vRdxyvF4Mbu5E81zgnttWzYqDUbUq9GBoKurhhhJ",
  "key19": "2kFvuhFVt3q67YsT2RtqGwibk3K8Amc1Xaw3bKacmxUUxpSKg7rTvH6xZCsUnsQThwNhxy3nX4AN9EJKrRxS8LN6",
  "key20": "625J77PxPKjLV4vp3nt8JdGNSeGJRubT3kb5ayjRQZBmM7F1rMWaPjTCZDn5m6sqE3CeuBcyNrecocciaNN3Q74R",
  "key21": "3LNnYC4Mehsj79aWtCL6ebkNL8EsehwiUPqo37QWcnt14X7N8tgsfZw3JqZvTobtKhv25uubG1XaNdczrqXbZK6q",
  "key22": "2YkbAnziUjwWV7LWr3U2sgcfj8VeSofo8MDqzxenrtryqbzUaPpgWakQCxpxSmvw4jh5WdGj67QECc2MWtQF4JWd",
  "key23": "3o4JfJc8BYQ7fXg2YEZW2ZZG1hDbf9qxSpjzCigQVdYPLAb7SBWFDX9XC55JRb17nWRCRFnFhfQNukHuWxid5TRY",
  "key24": "272nGyuF7pmQfq7RC1SuctChdPFiydo2XrhpqkjjstdSfKq6Fpt7GXLPpMEtYnRvwEDmorsYJFKjsoQjLSpbStvj",
  "key25": "KzNExX4rsZwpG32JvmTnLvGG8SvMRLkv1rgkkCXHmA3WySQF1EKiMuUMmg4aod4Jc3GzDG8Bg2JMTzKyV5R1Cmq",
  "key26": "M1KvsFtHnrvbS9bsY86YjumSoDigdWVj8NMmtLhSbqe7entahuTe12mye5w1gNoe3SnxgNZJcfiuwRjwQKHrnwX",
  "key27": "5u2kXbwLHQHSviFEbewjoueGwGH54vAofrTSopbjVZRMTXjjje8jSJSHWDiiSt8HJYf2c4qYt7Nc5EdqTvQXfGjE",
  "key28": "56VdWkzS7MxWcka9dcPGNpTRX1Rg5tVSJRAcKD37VhFwat3j7gTP3Z39m1iSNrb32qsyy73qB1oAn8ESsYawSQv1",
  "key29": "4iMHTyNDKT27npZoLpru4M15XFFycMYUdDVAiH5GYwdoeDRaAVSSXKWyotGYB1RkHtQjyan2VKJHZ9hVQTzE9XiS",
  "key30": "45a5iymQST3q5AiDtYVvxwCB41aDUMW6vzpQn14vgwTngBqqrrXDkJ7RGkUfyNVjsuhG7QfWWryePWZu8bAjkBrV",
  "key31": "5W6kVbB7CzasqCYpFxuxxJeeXfDS2yw5QtRmhPJub1wWqRkQGngynsfmDeSWcGh12FZW5fYvG8DBc8Bw7iLc7Qhc",
  "key32": "3TZsa7VECNP32P9dUvvSbkbLXvmxAi8oA9VKhjphEXiejZ4zRVtZFWmnBKZDHUdGdmFLN2YyYZwyqhM6h8TztWNN",
  "key33": "gc4z9VxdiLb4FvT6br19ywNWDLUnAmKUVAW9VgjYDxiqkFaHAfuktkjkCJkqNQmUyj1EcLhU8QXcBXxxxf9bzk2"
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
