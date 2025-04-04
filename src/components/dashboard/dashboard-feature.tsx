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
    "3ZDHmti5e5m5RpnmGvXtEa49EoucDy9wfj5gV4BuhfM1VkEbYNjeoPpQvkjQGjCScdmvDBYaRnm212S2RGaM31Es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ECCPgmq9edxuiH4HNJ7HGtHacDmiE1DT5UG2oHoLbC5m15H9NMQ8DHnNQZgjibhcwGKbuZDpf38RXSxFzUUfYvE",
  "key1": "5gt1oBE1de2hXu1pXbH6KwNxkR2kvex3PMNrNLBPvVGUtpoMuFRFuEggym2T8eA7JRFQzCXRvz7p1ke3tneazNvQ",
  "key2": "5gnqpgJofk3pfLcepAGG8VhRA4TPEXMU1KAxred6WmLLU4mqC687wsD5SySgbnyUFjGPwcPiGAJiine4KrcVJf8E",
  "key3": "3hK14ezp5V3KRySD8ndi61GTb3K7wBvUzNi8CyWQUDL7id8CteuaC3rvGWjEUKgVrJ58DUipD8ZpLo7crTsbFajs",
  "key4": "5PrV7D1AYRojA7Zv3PwHEpuQt6C9mCpUFm6rnR6JgXuGBHa4Cx4ZaqhxiLHufztdJHXgoFMqAwD3nFmgYJRC3DRR",
  "key5": "Z7P6H7Hz9yqPqmnfT4E5h7eViD3G1UwVcsRFEi2E9uw4TXC4NhFGNzar5U7tfbbenTXpvpqKzLqbLw7DvxHd55k",
  "key6": "csqjX3qCm8m94YsCethnYcJzJLyirE9ZbTDRzbiWmJStusuyNQgNvxyYwhvN7vVrUg2A2k199YmWsYDqAKYUTtv",
  "key7": "26ApzXsCqtBQkgRmUvU8uhP8Jy1B3MJt5fkapdLRtw4BmMJNKTHSu6gwTCtu5GnLDhWGA3SZJLEEgUnEzafS3CNW",
  "key8": "iEZ3LMqWrzQLjopTvNCqTbYZrcpDX6Vkvq9yqobXRTjtjb1TkAZqfs4KvzKcRs8xSqGfDuTQBTyE4ddfqGh2LwT",
  "key9": "4gt8uUjnBRKt37zx4nBjC77VfpZATYP9KVKVv8Y2zAJcpkahfiV5zNS3igJFKHGtbG1FevD2tVS8zEHoHkPjdUkz",
  "key10": "4vTaTvbKzSBFKN8fWuEJGvpseVTYeKBvNQG1sYYCR3xaMKmugSxYbdC7PYXuek1mCguCiiw3QACdvGkJCEyZkPnw",
  "key11": "2kUAwUHm87jqrYDxSp7JsAVVL2VZWmQ8rZd7vaHxHUwUkcaVNSkhcdGg5mN1hDEfoo5U8s7Vv3vVwSHssZXs1KiS",
  "key12": "3jpqC5BePwAZ9mqNFxo7wvWUnC2rqx47VRf82EdYiQRRz8aFG6Bh4vkP8tUr3BtB36itciMmkiK9PL3xS9LMp1PE",
  "key13": "23McLdYgYdDaPXpshJT2QcSt6tDu6E8CtRa4azyssU94pLAYQ8jaav74KJyoKq2U3S9TZHQr9jxTWZcyM7SEFUJP",
  "key14": "3kLKFLWJ1LHctaSbDN9F8e5oDqyKVxRaWvZokVFLcrXjPKWKctWz797c4UhFL9jZ5Qd9DxhuGh7R7LjWFaLAEuHt",
  "key15": "5Xen1BUV495YuNnCbaQyACYHkPJLK5NJ3n8xjGeMhs5FQABzZdERt11gQRAYP2m9GivUBEcqTNA7rMALLcW7gxAz",
  "key16": "2F98WDb2Egv83BE6goPM2safUaoRrLkGYPfrhgTZCeimBJvW9U5fMSrCpWH4irGkUkPYmgR7WSHWuwrBwi9j1JZw",
  "key17": "5CJHBMMyV1B7oXT5m4kCk2SKNCQK4LM323BtCT5BLjuvXupLoRpfMjaz7UBge5FHySFGEQzoJ1VM5bVJpGZNcTLx",
  "key18": "2LFbwDJpQQXmnNfUK7Eh121pXETv55d2tyDmtTgCWxFtnRQPdGJXA2MJrwoLNz5UvyxUJTERA6h3KYwveoZWsSRG",
  "key19": "2yRfLMt6GtuwGfKYUntzesVJk9nES1nZPXky4gBxS4hDH218FGUB53zEkSGSY6fZUHfXTdFWGZuwGrvFU6xfnkaB",
  "key20": "553wHd4gSTkT4Ti5Ta2BaSR2U6DVrCfFeknhDpyTQxVSLs2hB35jKaLfRvWjqeGLG7Cvf6FZGUu4KDejBXdBmaRY",
  "key21": "4RNBHW1PbagVs6fD2q9sBHXFK5ksRTMmHJE2NKKfECskVABYuHGYMJDrAVgFKvfr75nvmEBWHpjdBjiqER2xk8Ni",
  "key22": "qAtySjoDP1LgBtoBULenXgCxvZr9GnPUBJr8uGc9yWE63j7VRzVC52Fdkg6GRjh7rxyFzFhRTtz1LVA2N9juLxc",
  "key23": "4GZt6k54e6aemNUDsGz9MRBvi7iAemzmSvayQxrRGgJSZFiMVsJw9gQth1ut9v4SuRVW23tFTUNW1wp26J8tFGmu",
  "key24": "3M6RGAHJyNMwVdKSZzJEimNGSYfycUH6eGJ8HkHjQzbikrbjsaxRygd8FZbCyw5DtJc6ZKwLejgGnyEipHCpdaj",
  "key25": "38AqEczzPMypqMpat28oa6ZpbPDnSvx3Cgf3eX8qiQVUPEoTLM3NtU9bGhw8Tux6un1p6PiLVFYfTkJzHDQjKd8W",
  "key26": "4bU7hHipvMYgMhGVG4MJQ7CcQDsEaqWbG1fjcmaJ39ftRYN8CQuYgMzZuXCUddVnquyY3h679CSoUAdaZEn8jyHz",
  "key27": "2dqu16LdJDjQuyvrvwgf6BoTy6u5hULgSZGaZ8w1aA22EZ4dxCyxYMQ6fyjsjkKvrGFgcNkhTY697mi6We4ca2XS",
  "key28": "26HdCXe8yAGfk7LrKEeycWdnXstfSLsFADQEzHngyVkbEkZGJUx1yxR3MjbtAzHaT6WXexVMtvxsmb5Y8Ufj56Fz",
  "key29": "4F8NMbqMWLo74TZZx71Geck6WmTYEQgVvJ67wVwCUbHKfpLbMmeEMk3UcYqVDeYHqTWJMYKgowqHMiDUyr79vNQL",
  "key30": "5ybcErUVnK5QDBFGiKn1kGLjN2Y2HVMqH3CyosygAjfRcqHDDtBW1NMjoxywp6MZGJSmVk52R4fM4aqT9Dvq4TvX",
  "key31": "3yAXVYHVWrRTcMg8999d9pTxh37NQD8s761DA92DNHMpkKWZGrdoDUPkgrzc1Epp6NGA9dn2cwymCfJd2rpVn6fs",
  "key32": "39QPvLMmc9WaBnQuqqGFYm7mK8ms5fKxqddjRGeyTCNK8pSi9QfgjAa1nCHU7hoHrJp5nEToNAJTPMZYK7Z6yFE9",
  "key33": "2YuztgjZXAkrKpZqgzowE6y2ERNFY3u4mptYfnGhWWD3d6RyJE8N19L6vRtsx8ypoKPAB3b4T5SXSZjDCGUC4Pr1",
  "key34": "jG4ZmLJ7fX9NdHUscXuNxEwy9xsSTZrcKsHsn48SowwkVTfkndgxUrxq3t8oP3pftYKpf73JRSu4TpgbnK1H3bx",
  "key35": "4ELVA4BMvLjtjhGxsVnC5RrASEA4xT83cnoCsXyJnFsHVs97VrFE3yBvnYrBPQqDcWQsgNQjq67ni3nzwMHDbdDC",
  "key36": "4WT98ZfFqxdVvnoR7m1TRe1YozHTPJjg4PoEn5gacZs6pKA5zbBR69UAyhGsPdXcGbJdghkJEpRTUvFKdJyveEQf",
  "key37": "5YRE4rf4SLNggwqWLFcCzqgqWWAuNKGSnuYdXnqjYf2mKdmU5oPVDTfvUsF8SNsm7hKf9sJtiFKGkL1zcqttQAkS",
  "key38": "3bduyCiTrW2BUktMkN2nHAkAMGXuPuHSZhYSvUKH5sSsdSJ6cBXY96iBsShVyEDm8DhHQUmFvvYNvU6Ei4GhBd1v",
  "key39": "5FKexusMTo3454JfjbJ2dE2AdtouPHJRRM3Y7sdum9tstJVp4CrH5JrYdQvrvNndrxK6PQvRDoSM5gxC3VokqxyT",
  "key40": "23JHLg613HPkkjSBg3wmY7FuYTQUvtpbsLPq8v7oABv5xcViZb8czHM3XADybBmSM84Zd4QnBuuoAoLBxmhqm244",
  "key41": "7S1BxTaacyNcFqxUSJN3m3rTkBjSLA4vJXBrzKufqHsee3Mk21mcFuz8AXML45pGVGLPiX7PU7sXF64GkdPexmw",
  "key42": "5tMp7PDVEcwh7Tcbp8tvHGeqHZByF52CuBQEWgYJjRYqg4d7LuVuf3jikU93ZB7PDXSqSYNYJAAKuPkUsxtAJUbg",
  "key43": "5hqC2AmmMg7sUV7sMkMAGLQfoC11Y2HdRNjsDtHbLK8Dz9AjLfjGnDN2JDieGFNMCexeaqAUTpj1rVDFBAuVDDMj",
  "key44": "5DcDJwCa9J5rqA41mpcbnbPgSXMkseYVHYkhA4SCqVggV5uLEhgVZ4ofQqYCWthPcS4A86udD6ywa2CAjkA5DJmT",
  "key45": "6658v4oGXRnYw3zio23q2qmSLcrAVPpn2t6KkvHbSjv2eLYQ9s4cXfAnhkT3X2TejmPzjRkhBfTT5gxk86uFu4Lc",
  "key46": "5U9Fi5WVHGfcYWKNNrSymye4WeHasKvbnATP4tWxa4GHDKy5wtEuCwWw8wRPKnguUPmryAQe9fxpxPfRcGEdoJ4J",
  "key47": "55MUqgqWUDSBANYULL46mgJ9paM5AjNhFXFU9o4abUfagFQ9QyuFiQLbjU3j9827qkSi9ZuQkU21x1j1L1abLtLx"
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
