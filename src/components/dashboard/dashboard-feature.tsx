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
    "29RG26cinPjnmPYy8555WXaYFhnGAytHkxaCUWAgVoZZtSkLLiKNYJhcADqYEnXUaFpfubKBMKG87WxbeH5Q28MM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4HKttS6E2ZnG69xxN8T9g3SU4zCBXHWgoQ8JbnVYa1TGbCVGZSR9XXVe3GfuBrEcPCZFaL21ZfWeE5CS4FJzCo",
  "key1": "wmGMEK1zRqc49m1oEFm4YcncK24N3BfEGEQPw4jW6sGL1hBX5rw8AzKBjZcCicvLYEJxZ3YWGuf61s1jTqHeCpb",
  "key2": "3eJFj8pSb6bMo1jaLyHiUA6usAb7AxX5azyH9jzUyWUZnZ15Gkn68hqpfdjBMSPPkiqqAj8mXeQcRTHHZmyNrehY",
  "key3": "2C48cx53QMWWLq4LZsmVYdWmiKnDinzPKHktjawnc7sdhH2ZRSo8PEzdk9a4vzkC8kKS5PU9ShWTWZzpW6Dd4hXk",
  "key4": "4KBfbyx3TnZrXv5GvE8nCQ6FWrFnfVPQ4etbDHig7m8D71qx62qrvBXt1Jyiq66CpZ9Djvxbq6hbHnxmw1qKSDiF",
  "key5": "MNVsvz2CWaD1tTcp8fBp9qTxUK5gpvKzZYLirRmMYexc7Q4eRcUk9hRPapQh1RyFLWwj5iFXnA2CF5RBtmZCpuC",
  "key6": "AZQWKhWNo7t7WQHMWKdbAsRes4UF7QtPuAhAwc2TVaRJwCxNGGgVxVucq2JKvzCYjZFigj6Em1MVhd4YntAmj2j",
  "key7": "3GFDybLiftW1You4skX1d1gRL9t1rbbcNdgcs5uuViWYeuKDF1hp4gsezMFJaW4kcShjVWxbQGRjuZvvVyBrmwf1",
  "key8": "3cSrp3WybYFKGoGuF6Yt7r9hGbuYZLKpjtZ7Cexs8ThTcCi5HMcJdyvEZA3Bp1k48RyUr69UBaqZykxwuLwSmJMj",
  "key9": "59ENXhwASoyjakvqihGSxQznDRUjUNDyax5KQ9VX3Zpy9jRqxbCwwLTeXmSmuWEWzo2JTUV1kib3fyJura4jSemx",
  "key10": "2gbbgysuqm2UzemjexJ3Yd4vZNgXtrxLyDDVnThRF25ovkvGr6zuxhfxhD6BFeyfe3EmpRHwSJZ2FovFtwJiTZLV",
  "key11": "gede9hJLVzpxmqQUe8BmoDtfg9HmNXgkU3KhWiHFMhyFAozG2S4MAUPDurC378ar3a5eWZBpD7sbqM8jbEgd1hp",
  "key12": "2j2o5Jwp6CJNfKzoLpwnS25ijDhagpXzG9XphwsUS1qJmmEctWy2MKReX2XS5tPPzMUMigELhFqzD5dnPzLzrYmp",
  "key13": "3C4uk2Wjnn9NomiFETW4Lzq2Kf7oQwJ8AsircVapHRpZz6Kk4aQUkrxwk1qbwiN8z96GGT25PpfFifDivEBffRqc",
  "key14": "cXuNYv3eTZQcZUyF7d6BH89RVpDS45T57JumjmQXHeUxdUR7j5bLYZP9YfWsUqHYrqdr7a1AqNkc8tYbDaQngNE",
  "key15": "fC2MDNN56cnJQngxAgz4FDTH6xfYJPCXbhaHbFpwSGGfW7RVzPaKCzSoZjPD81nHCkka2yFEzVyPpG3qbZkPcoH",
  "key16": "5p7SbAbWac2sjV9csSjWD3zewuXUmMtJbKNgUJUTF7WAEJoW2WYSo5iA3r1LwEqQbJ449bdv6fKHFtXWA1733ySX",
  "key17": "3bPrpvUx5sowPGmE458M33eMgcCY5A1WW9nq6GiUWTxQDwxgxyh45uFCp9cgHA8tKUoyAhH4eeCARvdfukPERAm5",
  "key18": "5Y1TuLbypTcNGTrvgXaWgYQihJaqHDUD88Mu8zBkFKDgXTrREVwXZosWFRffoY7qqExtiWNtKc3nsGFbqmWVyAkj",
  "key19": "31mymgQMieirgfq66kdHx9cqZbCy3S4WVYydjWqdhHHrbJDrs3nnYHDQpBLXf8sQTNC4v1Vok5CLhuP5M3v7We7W",
  "key20": "5LVxGVEu6xSEaTkanMFF8uwi75eq8rFyqAYhY3ytQv1ULfvfDJKgVz7MvfjMXCJkejvQ6HNBGLYnF7TAGLKb21u3",
  "key21": "zcRKfe15TjZsj1NGdL4zq3DmrECwkzKyboAVHEkUi4XuvRsnXckcB6aqqzHa5ethYskJBPeZZiQwE1eoYrPCbyg",
  "key22": "2N7Ypm8rjk5FkFdkHCz85fb1GaDkMKXpGxKENcS56RHQiFavjJ1XfRJmnRWo3TtKEmzwi1RhmWYa1Ytr3rpLz7be",
  "key23": "52abqipWGjX6d98466imoHNa8oBCGUtAoANEG6BZq7v8RXDNETMvzf75bc6ZPyxXpW4NBC4NPt7C1m5zW654UC5y",
  "key24": "4G1Jh6RVw6T24H3rHZwbSbQkHZ8uXLJrCjpNwUrkXc3Do2KDQjXAbJatCrQATnFSc1W54wzA31iUrtSC4fC8UJv2",
  "key25": "2ib6MhGwFmx1uwX5aViN3nWW3QJYjcKb1857PsHAsL6akhRBC8N2sDTuRvXMLJf7hoRjnPHvBzYGx8BmvNBSTPDp",
  "key26": "YFefGEFoLWt76mTE4kJHAwjkoFv1n3VTd7ccWLGjzct4h3sL6x4HrMjWZQVgZH8vARjxYWiGHVXbgmB2FajAABK",
  "key27": "SMcYE4ac9eo47EWYgTrc8Fe2vpz7cKCCncn2jH4Y9jTC7eX7e5mG4Ux3sSCg1S1QVQSttv1bD4WscBTknQKVNBk",
  "key28": "SsjfBoEVnrDqyNYaAUi637SfozQJKbV2i8aqCbuxths9eCd7nK8CvjxzFb6KAa1GkPfhjMPuHHok57YD3rxzVpP",
  "key29": "5v8HKpYSoRZftTfsFFDNj6Cnm9sVsZGDpgdgHae7aPogdna8aoYFTqnRP8tvDmJyCwmV7a3tH5EWu1s6NaynZSiS",
  "key30": "2eNp6eruiBTnxHG3taSG7mbuVuL2yXyVGLAAWjswfpwc5Ux9ent3WiPBUQhy3sFhWwYmNf6tC2Xhp4jYGoyYjNWg",
  "key31": "3MqhJr53hFbWnFWtTddtD2vhxNtAy6JNxBGk9SyUfCoD7xzsdtKEytz1FJWauJYhJeMFmacSsYnN8MK6KTFLBiah",
  "key32": "3fuKFRjbLvzaFBfiFTN3eZgNnjwZbYSxPBfBCTCyKUL1RHyzAmQDwnP7wTsjyTZGCqfGPeTFyBBdSjJdWrh9He6F",
  "key33": "59GWoj7dpRTF6P3Z8Mr76QDU2r4ei4woZ3HHt6Q8yZmRPTzMWy8NhTdcp93wvUJ3aZPzyw6EJv2hvzZ28oquJQAL",
  "key34": "2B8yNsL9tU1KJwtfqotjSFz25w68KfuuoN9kgrw4YueMcdVrDfoSL9hkRxEMPXC42B9DTTJp1BKLpxKwns9oN9cM",
  "key35": "342vnng3YP4uJvnRFHnzQHw7jbf8dcJSQ6uzDPncUwxykHfD1CgaUCpwAiro4BxaMyMPr2GwwDMhtjuXzH6tuHfy",
  "key36": "3FtbN9TDRk5TKCM3CTKd5avhgBt2rhbPkfcHyhQjmGA7Nxq4qTaMSL3msDkx1HCTiFBcii34GKQQgHCFhs6sjmPk",
  "key37": "5wotn7B9udwgnipuGD6gSPNGNaeZeCVTLhpePxQu5e1nRH9JUsLknwhrq54XJDm3dV1KxGpdW8jZQdbGmyQLie6e",
  "key38": "2PiMRxHPuJDZVc2KqAMi8gTWjzWAy8xuvruhLrqxVkkarGrZWVa7pPGFatdwLf2dibAz9rWvfKJnfxpp9RgxDiFH",
  "key39": "5hMtNxnmHofoysRUEarhXL7PF7nZXSDrEhepxTFoNyXcB3gUwLtpu38U8FSxYirmkevVBchokuJfcgw4AyKsvMcm",
  "key40": "2t9KvCU2xWpSSVWeLbBQ67HcTH5Q2HAAsaBNyh2m1Xq4Veu8vzEXjnErE1XCDbGsftyeNZJzwek1nh9QJG9JfgXb",
  "key41": "SBrhnfdR3QYJdFpm6C4TGrN1JVpx9CxhSQJf24HZcCbr1SbbKAgWCRhGkjfXNfHtDY3LcrsHpZWMBiBsGcR8dCg",
  "key42": "2XNVbqMkARHH9zdaQekoAu97y891xqx7Kwky14sebRnrnWrmQ2ToFXqT1FiuqEqyi9RbhR366Tp1nJEXbreUVVg6",
  "key43": "67XXrqBEUmEmZj2HSFDjugsNdCdSeWdgstS1y7upePQ1gN4kKMZMKvwoadvC26ibSPqhDRAvpszdydVQWQCnSGoi",
  "key44": "2QjvzqMeLhRMyD5ktLuztieQGNDXDtxiKRU4vDh862bhWzSU6yXhNkCy8teaBZG2Qm2QLaifB1U5XbYMo66EjQe8",
  "key45": "41AtPCSBuqi5GXRx3fRM4DWnU8RRcfReHCeZ5fkfXsxaZmw5MS1pm1qZgNs7gYuSUSihepYWKzB11BoixMMGQUep",
  "key46": "57KeU8nn2y9ETT2cm2XMFGexM1QNgvUw98dSLLyt9uHrHMy17PYFawL5X46mKD2EE6u6HLSD9XAU39FSiFQrd1mK",
  "key47": "3XQcBaTAVuMvKosst2gQKCdezYSEcHef48LTyTBKyMCz4zuom8bVfxpJjjyy7P6d7PRUxGi6D8NivMRbbjDA2Wik",
  "key48": "4bF2tEVgLWtvxQfGMkfHatLbxaQxz5noKE3SwcmNEuCPji6cy3KsCSha3KgWFeuUQ6jmXYDsZoU7exWdRdqeEB3S"
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
