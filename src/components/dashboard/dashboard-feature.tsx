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
    "4i7xc9mcEfTjYVQkcmYL38JE5zEejKnZJNVRfNbBQVw8vogGdQL2Wg4nybkL1BbXGWHfKegtLVnwy5HatgZukE7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22SQxiQzyKw8n3wFG3VbDYzY7JZwBaacwxFrv2f7Y244kHPJGmcQEv1xxRRW7V9Ani7YiTc3HsvKZuXAJU1q4kAg",
  "key1": "4j4vHsLPjkRxSbLVcRD6ejEWjE1x4CAHVFuXxFuXeQTZZrv2xWiP1PDtMhYpeJkkCdK98pP51ZEFFGteyqWkgz22",
  "key2": "2UL8YWqQvCBn8uzAXQAEbDxZ9HVtHwiyGJAYTMi5ShQL4eMtPpf62qMziBsUPdh3wBWTxfawWBoyLK1wEF7shECn",
  "key3": "4HWhcangkgU3foD1RXwc1Q4Gp1D19hhFHW6t8xN3pmRg8KvKa86iECU6V3MHkcUHYGYjkDEvXz1h316y1k3rjspi",
  "key4": "244sj3eMWy9ru5hZQ45dE73fUfoK18zfjFSpkaVnmpNCP4XoUYTESpUn3aMipcKpi3zYTCFoST97jJV1EKvzE1C4",
  "key5": "3wUqteSuyobrRmfx5Eo7Pz48jbG8PmhQcoBwE2tGVBNS89A5jWApLhDuMxWZje8PjNyAxsSJaB7U7RruUgW42Lp1",
  "key6": "2QWFF3vDNUsnNP5iBfDxsFiF87vaWj1XNfr7Wy9e3YoN4Ciz4nAo3wA3XMoiumehhfBLVrtxq7ks4yEeqSrytk5C",
  "key7": "3iZCSfm2aRoTZBqJsphFHpndKmkxHDCC84XfqSdLLB7dhV3gTDM9c1C4Uvzmh2ZvXFhDEDDvMm2rRaw9udV4i27e",
  "key8": "33gq7z2hrzpBpCxi38czDc4QrjE4cQkwi8cP1sdwiyvKhRjd7rMCwRm4bZngyrH6G1JxdCRatz6Lo5qLM94QkBEp",
  "key9": "2STqud6QBT4EVWvFZLPgko1jf5p5WSSDEnfYF7otS3YBqNLttKmYPTNSsqBLxnN1dcdnovhzBzjuMk4o8kK2BP9W",
  "key10": "f23VYAvzofNpyp5SPXat2tPworR7E1V6ZogkrH781DSo5n5YjUjMs2Gf4DFyd83Zjb4Cs2rHwnfAzHrkpcBxywC",
  "key11": "42KEEd8XL3DP3GQW1C9YGcbkNMUz3eX6aoJ2C41Pg9VGdcapG5AnfZ1Vm82aba3H2AZyYCAPgoBqTKY1tbwW9hP3",
  "key12": "36S7ccGJarFY3jXPgBxwFQ5SXrmbUV9uZ3zWa1JvJpXYjVoJBeENazZtj71kh8nyksuNUgPjUiuqKbBfgRVzUmnY",
  "key13": "5yechTsBqZP742qQF8LjoDQjjsJHpiKSqTErS2PcDEfLkmd414dAyAKHUKj22Jg24Dz2pcC291NEJT77BVyZc7R8",
  "key14": "RXRGpc9C8XvxnAko5paDWeLjqDczHkbFZpYhXUhN3E9Gucm6eBPCvmP8M4nZpyQwmq4gk1JLVn9uqVd7CgYPJX7",
  "key15": "3ssu3EyLPYSfFzpXcYD44fuuC7erYM55HkiWkM2tHNnxLHaDL8V8pHVQXVS1pEmgumgKFLC7JjrQW27TVtM9xzbe",
  "key16": "34P1TDVuYdpxWS7PntNKoKBNTuWtNuVdPBEFrELFPPcNW8NQCWymTKiCry8KtUK8JG8JmL8uHyCNumsYVhWQGf1R",
  "key17": "5QYTsS8c3uo4JtJeAVztDhS7SRJUchWxWaotnj7QiFCZZBXGQ8FYfgaZNxsNVcWochMJQ71dPrBXYWDrByQsyjuA",
  "key18": "5fBhLyPmjNXp854vvzF3e7Pfch1qUcFBqrbDmnt2vcKcSYsKEP34DM6843HvcBjXuoMMxGhnkvj22vWjKCe8ppL8",
  "key19": "5bsAe5x3JzZWi75vThN8iQYbb9VgEA2wiGDzZQuCWHVoSsMD9w19KJ6NfBDesxcBGc8e5Wkm6HjoVLTRWboNchGt",
  "key20": "2iHQtkVu97sPEJhad3huhMWH8uDHP5Zq5SMtcQuBxQghDAv86SiTpEW7WLrH1LMCf7ZD34KkNqqyAgMaJreoKSrm",
  "key21": "RDeDFBGBqJ3bmSDQoUjQXPvHrkhaGddCkMT37mANxqjtQ2H9KDa4SWmPudbZb1EFXMCndaayjsfx2Bsk4HUzMmH",
  "key22": "5e4FajHwbk4YVoJACDTwjcnKXYe9zUoYP435HWuWZSzBtitzNEM9RHPeyJDooy3FQB83ihGEfjFL3gzMUGBCsDmH",
  "key23": "45sNmUpfrPPqTw7CWM8119T2SWsgQwQNf1tiVdHXivT4FDSVpEzCNYhhHZ96Mfy95xjQCffCtF7adpSdsJCCcTMN",
  "key24": "3uzvdGgDyC17HF4x7JAVRSHGGKATrJbiKCtDF6hDmGZmvxW69EM1BwZpFkVzvpjaQBTYW2TycwYay6FuRvBx5LUL",
  "key25": "59BhBmSLvcswnpRrNZQ7SJSmAHWRcaDAPZWUXSp7MNWED48XkfFY32Sp4pGLqe1F1WA5okHRLti1bmckMK7x1jRF",
  "key26": "46LGPxzxmajqfSzHsF35827aen2LkuvjqrNSXFbuva2JZzE6BS35PCkbEZHxqPNQeSRuSPi1DRjb9LzdSSHHVNKD",
  "key27": "ZYgzRUYAVhk88qrbcw5Mr3ynpVjjtVAPwkuTvkMLBCHzhqpvKL9MxHJs2Rzy3GP4a8h7YkDkmeptDBRRPNE3Mqb",
  "key28": "2G5hDG9zNffY22Lor7nmj51xg5Zmn6Yt9KcJyYawvJgTcz15zV3DpKqk4NJ4bM1M7AYRHmH33nZobx61NeJqFwhe",
  "key29": "2Jo4yEabet2Hzo2ruEJTEhhWjjieCC93NMApZ7Jivgb25XiGQDGvU3SY8izuGrzGMtDqJ5MPD7ah2ZHM2hNr55LJ",
  "key30": "4FQavcyQoZ2Dtbpwow1jWYojgzpUYxC5ZCDuUKhAdHv6YiKNXzmw4Hd6uaschQpyHU8QG82XQxNkMX9MCgjcF4tA",
  "key31": "5e54ba2nsnN6MYkFvunKYVf3VRZVAGADH8wXqiJpfVaBobaL6dtJusNv6qyFqvw8CjbtYf3mfWRS8AqqpmGTu6ir"
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
