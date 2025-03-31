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
    "3iWQhoDT8dfatz7NmUNf6v1hJsQaJ6cF4vExkrvPCJYeVsLnwrKGpA1EZj1SQ6rWNQtyHzTiPaRKB8KdcuHaJz2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBNts4G7oGLyF994Uj1WotBjKU1TccANTdyoXqLvJP7iYu7qWEMCM63j6N69h9nhuqG2himWerRaTZa1bQ2bH6o",
  "key1": "eGj9DqYQmmGQ7Dq1uaEThBqWzKAQc4fbreKgLjZFNCYkQeNTjzJqR1XDL1zpn4WaCcFkBA6w9etHUS5BxwxJHKe",
  "key2": "3YSwrVK8eHA7p46tkfJhSY9e9Qgwdq5pzWsdfQDihm7AcZSqMK7FVMRNoRLe31SFpdVXGLwRRMvDTjpTVtt8gCbf",
  "key3": "5FmYQo9SiViJfYD6GFX9KazBUh39EFwpkM2PShxvAeCa2nGkRvBafhi52XLiHNWDQwJ9QZshFJ4ntCQi7hGRtaLP",
  "key4": "38ofzBUnyMD8qgtjoabZfykLpdwy9YQA4TzELswBCfJRCnzYxjNFZfb8E7H3cuPTSznC6G6JGpnLDkwy5g8GVtiR",
  "key5": "4pr97U8CEfD4nG4uNEWnUvtbv9caHDR1i16FZc6n6GjMH1TcJiAoj3QqbKSZS6RwYuMyd1qp71cqoRe55qjuKdND",
  "key6": "2eRECRgdQgfBzfs1hYR7w7qiUg1VGxxUK9BKofKwvUDtfNVkeYvStui28q26FwmmcVgAoFwTyN1jBzdjhwoctzbT",
  "key7": "5qYeq5jQaqrW1KZCCezJHBcQurxj5RDBeKZQp528s6byU6jL8qt7wQGu8fwfmA7iQGXSmD7orA2kLHUnJhzwtQtS",
  "key8": "3nwBi5pvPcTrFYSPZgvZEC2LTRc6sUVbsfTtT512LYjhHX4KyGxbaqixvALqC3dhUaAc5CDPskLhK7DnDsEe1Syy",
  "key9": "tEoUzc9kxZgNo8Xu5m4tNQR5QLoiuELLijsPU284VvcBBUTQfK8kbwRSxEPuitRb23eZ3pfQS4UjzHrygjaRaqu",
  "key10": "5XLqpANmedcimif48fYokHmGGmqghQTsB3WYNWR4NEJpYnk9WktmxzoCKgZMd7MdJvg82uYSiZmp2Ne42bv5hqaY",
  "key11": "3LYP1XQipaU87kGkAktuyswNS6QKULRiAfmQ4RCHncC5VKbKhuHZGUHdHVBRXqyoAEL3pgj2XK5PBBLBBtRP9HXT",
  "key12": "21HonyS5zANhF8NSdUY7YbBTspBt18WiUp4GQpCA92nEQsVi3v9c1qLgSZY6ZqHocPpDCrRT4bKV6aRK7PnaK2rH",
  "key13": "2zgfvtkqNyz8JAJLscgwH3UnjuYDKVKXBRi25fyqw1QJfwsPreYsanwqSMHJnxjAmpGLWQyz4jCymS1d1a2SewWy",
  "key14": "3j1HgiDzELDYqrB9wHHJrmcnoJVn2pEV5KzqNRpjBgYDHFtXav1aybuMGwTcCYuWAChAmMCakjRj8DWJY13YLUGq",
  "key15": "4YC34nLxieMUsy2Mxqh3qEmk2r9yDAvLDrA6ZKeBrnAzqbFzTDK7yH1imMDZP3Tx9rVR7pNS7jH4R7DqMtKTxTma",
  "key16": "3rAYfUhTp8TziSJ51Q9e6V2ziWKp3wJdkGpdH6zzBtVtYk2EarUSm5GxzbchJJuYcs4f93j8mo3Won8F43k2FMYh",
  "key17": "4aGpxYcCvNih6nc1zJ8h9LuC7QzEXDKjFk1LzNe4P1cy892gMgijFt5i6dNwsTrJBfWiPuqcFw5R9p8t94RvKm6S",
  "key18": "3fJuTMo1MpLQVEH9Lp96Hh3iYhfx62P4yAvEKnjZMi77mfRvFqf1niyKgjAUWE7hEwPgbTygQDjDBzeMdFPtSKSw",
  "key19": "4ifxinQDcAetTSknjDjHM4Lwkm2RYgpoGsojbCnEXgobmtE86LvNT11haXHmj4PLxePq4sRYFTWuASY52hu7UZ12",
  "key20": "JwNvnyeCp81EBUjLYca1DNvdHMLSTZNDf1qNHq5hiPgwCxGxw3yE4hM2uHdxacQPuTmQBvwLVp11Ug8FSSyo9FQ",
  "key21": "4qXMQeJMMafaLBZ3JWpyqDcXbWeuKi9PpM2yBEZZ7DMTPHtfDv6XAZAJawdwJKfVgL6T5KMCpjDTM4ABTCP4y8m9",
  "key22": "4KcZgfoQMDctdZACJiEGi3h5iuvCumiRioLw2LELQ9qkuaXHTYDDnY1gxVkU6NasfvVf6GDvNM2eDv2Vk6uShHud",
  "key23": "39c39ifFFFCjpokg3VkR6QTuiYoWpBPLDU7Fc2J4veYPUb5qm1M1rRim2QniTpow27ysTsZ35Aa6T6j6ZD6dPEE6",
  "key24": "4ww5uzwsCtnQHsco48hjRhgea3DwmvxD3nEjTKJYmfejS14ztW16emAD9kBxe1GZ66tTv4QrKc1BYwpZjYzrYVJa",
  "key25": "36ZLcR3QbzBtkiSsPazXGmCKhDkUKCrPAXWm12EECPegAS1UKNphSCK2AzifFsNQNjeG36WHmN768z98JrtigEr8",
  "key26": "3BsFXpre4xdS9DFGrZomw6J46t6xh45jrhXeQXnTdnhJYMHgsxsPGHjVCf7D6ctfFhEuuegL7HEb7zScrauqiiKo",
  "key27": "2aDrqQmWLLZNw8v4te35euzNchhQ3BAxr4JUuL7cL46M1R179taNYxxWbm24NuNHSmVa1LrVwmqdWsDp4pSkQ5br",
  "key28": "3PypuByGfBA4RFACMLdD4bewySmjC6ZRDM2dqqPp4KL3J5esp7BpqsyZugSj7bSu3QkLaNusy9u47TvPxfAcoh2t",
  "key29": "4HRoNDoUBBnvVZoj1uUeVS6XE1nKf9mU3NJZ7iMUGGar41gbV9Q7geaPixK5fXzkyAJBHoCJn9b4dEUfYSQpK2xJ",
  "key30": "491UoK1rda2m4A54VUd8Dzz71U66bRVPXpP9g31sE7sxRm2fKfEi1UQY22bViCFGPQoNckhiarRww3g4EsRKpChr",
  "key31": "2kys1W2ZDf5fYgkDkqQPcHp6jQk7bTKoyeHGXKTvYo1XLNmNPzoJt7H6Z3PKDNZAVhqbHbY28j5Wcoh5rPK2rn12",
  "key32": "4jpVP48wY3HLJmYpL86udfKiqtc1byJ16UKVYwR6R627F2yLuQNYsTUinej3FQffRcteUQAofMrGQCkGaJCsAwd",
  "key33": "2wcksXkA4U2F3UmfjJ1S9cLpRk8mG2UjUDTpXkpF2yJCV9jV86tQa3fbF4CtSbhkN72ckkkQuTJg382sv15NAZxB",
  "key34": "3fH5FwFJbsU7hmj4ACKNLjQqB7bupAn94MFeKLVr1pKKVnfmxDnrDSKYXarhBSSQ2H53UHuQnsS67kUcxyoepw6",
  "key35": "3MtJ5bDT3DniBSCshtNe3Hns1EaQ9QnjAH3i9xAmBnWMZsKGEHe2PH6GkUbcrU4hBJP4iSHTjVbQWtUHpY2Mp72o",
  "key36": "56VdgpNLQkv9KS8uf4Mmvi5UCbHRq99KMnYq75qXFQeSPXLiHQwvmDMQsFqKL8a4Y7R4MrEDVGW2s3teiwrmGDA7",
  "key37": "2tjm4xT5iNzPnPRybN6bRt84Xg1KhveZVD3uTx2YZ2qHXv3GbXP8WcLtkZGqnvXY571rCzomz3hHwLGrVyJT9GF5",
  "key38": "4S1AiMWZJ4RDinA9pNhVGSF9jzk1UGgusoQRTkkS8UABhHJKVNsJVJTczVQPxttESH7uRmCZFiETVA6fChf5u6Sd",
  "key39": "5ct5x6s2cL4hJ6JHwxo5WLaVXFsipx3y2fN8Qp5tCb2m9Swi5cSCtDjJMUud4Gde8FNreH8a2PM6oeptCQKNn94c",
  "key40": "2fDBvBC8jH5WYU9VhtEuUJc5vuAo3U24CKRyc78RfigbnNmrwMAAt9URBNi4qJ1FQ8hwbnsYurTdJv9PsPAUfqkB"
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
