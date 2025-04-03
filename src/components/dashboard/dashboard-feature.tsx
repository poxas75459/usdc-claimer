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
    "Gkkysa3vcRBm8efQcfu9sNmekWGqYnDyVhLHPD9NGduMiZBEhBFMiAGoHd1yZsHAcP5YSKy3YMuJaozgvFJ9Urh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "apn9BmysLydTpcpZCBwAcezk9F8wYgf7fW1gcYjsnoveLQpXw8KKG7z8TBTDGjxrLwNN47JeqE5vv2GPnCEm4zd",
  "key1": "5JeLBQr6vnRDdCiVhZTHHX7VXe46Xh1cVuac5yuketU4ycKjFcXaqhf85WQ3Q68ybJ8u6ZwtiUc16FTiTQUGXv2a",
  "key2": "57UNAcpMT7mD6GtoTYfYUjSXJdpvT3jC4XLA1pEid4CVuxRjTuCJpDTshm2iapNr2cepBHmmc5FjrndqiA4aZbJo",
  "key3": "2YAkSscjPnNMeUyhULMXVoeQp7g1krhgG2ipyun1vVvAJ8RbS1P5EZm9Rem5ZMjK6Ngfpa8xCUZUfc3RLV7BVuff",
  "key4": "3PqqxPrbmBZVAP24WyJmjspU5mHK7fYsjWMbF5z1nyn8WFVXZk3a2aduBm6z8WeDmXcFYo7i89YvY65KVCLSnEM8",
  "key5": "3cFK4kS3Yj2iHwVWesfxLaRHca9aBk2nbH4yXV7AWXiXDcDCdwz1h6W6YGPtnGQPUGPpns7pPiH4eWGjoFJBDVtB",
  "key6": "3zEQYninbTzQzU9CqJw2yW1GSxTGCmchzfWxeaAE4X65dvAcW1GtNwX8DTyD1E18Sh3GG8yzS49ig7QJjtKuZer1",
  "key7": "2oMu16inrbik4GNhz26xRbRj7cgqcPG6r4JdQmpGT6aj63JeqeRGRSicdcRHqXAZmmQ3D8V8REcTHZQMTTfCVYi9",
  "key8": "4mww13zC7HuNCiNbNL5YNtPebxWkoJtWuBXCv1j3MjQrSpA3ApsTmxVcMzg4fqcAXbp8QR5yduefhbzwQQKzNJJW",
  "key9": "3kzvyfyBiZtCiDYFPvkvQstgGtsFbVqxxcg82SwdjwzZUBiYrVqTZ1CHq8CQwgwW7xKMbrh2jmH6Cm5xVyfhUzyW",
  "key10": "5K5JDArtghQLL3J2eJKq3tab1brtfiYU4cPBnMN92k8dWHP1cAe6WNk9emWyB8P6bsKuZRkneTjUa1jqLXY8epr2",
  "key11": "3BzCNDfz4iuzaWXteE6bSAkUEumdgLW8bZpcbrcSG2tHjz4M4JJxgYHwfah23CA691yTdth2c6PRFkwuP8extdEc",
  "key12": "4tbCMDqv5nCDzbfAe8Un6gLxUbfUmBzhThcJ6AfEijuBG4TXmTgGidbJTy32riqfSBFWrfN5nJbUf8VRjZCw6eRx",
  "key13": "4XhRYDSmQHPGEJfLL7r8edV3jeZgaaJspPS4Bd6Y29knZRDNWrTUYrEneEWB7mFQiSEqtG5zapgibGjQF1JN8ik6",
  "key14": "3iyguFw6edkybKGhffrgJE3tQEN1GHcq4Bm9hL26xmETpf8rZpvwsj7CUWdttsHo6NA6c5bpufsYwukXZAYX8Xnb",
  "key15": "NK1JYmoqyedpqoqeG67N6toYKwYc72h1dmqMmLPmMspDgN9LpZu2bfgdVEWn9RbAqsEREVy4AceNSypixvSbL6N",
  "key16": "5zzEjdVsDGXnba7kk4xqafbW5ZPb6cjD8Q4aHvkatzxdtDKPtVSVgsksAFo1TRfNGmT2KJ5PtD9VoyMW2jRp1AsM",
  "key17": "3rXWdpneiZ7tXzcuiu3MeiX2zfH2YrnntkMkcGmsjmG7QN7SF8g5bcMYLPnYUXyFBWbqmVvjTPjLkQnouAVAzzpZ",
  "key18": "3FyJK4Z6y1AgRm1fcXVkDrhrJSPswUfPcjQkmEaUnFEZWa7crwUVM3UJrMci7vTaCQRBcWWHVp5TTTDrHqZLVtn1",
  "key19": "41NjXojPCEfL7DWREsu3shyGAz5K56SsRGFGPpYBUBq41vfozjnwfEAwr2toS3sdSdLpxjQvsEgH6VtwhstTgBo8",
  "key20": "3UvgHo8Rz1RfbBEg7P4QmYbvWDf4y6kEMeqezedDvkwAtrqtXA4TaG9hSrYNVpkoq16g3UmL3VHbpBPeCW37EUzf",
  "key21": "51qi2yF5cdK4TxzBQS6HXKyR8fNPuhYHJmz9eESZ9qHMerfv3JKLvhnh8kkHjMMTAE9HWi6KV2AH3GFP4foPNHv1",
  "key22": "4uUu6ADz22TM2sx3dHTUjsG4ENze9TfqferrWu2ei5768j5nQbve53FJazGkH2Apgjrbp5gU4XmLJNMXEsCeeuhV",
  "key23": "2VGPaB6jnYvP9GWM8vea86PpuU56JGfXWSQDQ9H82G1epQTqAPqUm2CBc3ouXNC9oQAnVvp3h35R3k4S7gmDWbLZ",
  "key24": "3ESzrgLDE3nnk9GvLRjasFzr4VfMtTUh7E3ijxfeGwYFfixqDE5HtwzWKZgHXLzneJUMmZdY41yXthFkG7jgbZ76",
  "key25": "5rMYF5zJgE2Q2WHbqF7WbLoHbrTGoAbdqrhFYs3bT2wWq1Bnw38rUuv9A6swr1zZdD2TLUuGyoJ5Tgwq72F9hUng",
  "key26": "4tcL9d9YWeYu221PUY3tP4JRU6Ls1zvHgC28Gc8WXGC2GFqkx76u62y2KtmHhXvPCbAzyfadsap9XYFGA9p2tKg1",
  "key27": "5FYywTyTMbNDL6HFNW1EUftv42G1ZLAJsYzSACb211tPxoCbtxjbHA6mddmva1jFf7CVSL5yRGroGZoU8vioviMg",
  "key28": "2kTvW3CfJ3kKjnc1MQdam5jWjFf1Psue1rJrKQDFmvbrkxv9oXpu8zYM9xqn1a1nbhEqjyhMpK2R2sRY4pEUqQP4",
  "key29": "E8H9WrcxQw2cbCqEtk5GbWd82TZTRsdoBBnMfYTWdJVqfzGgGVkqyLKREjAKGse6vXtcx21F39oDwExXBcPTANU",
  "key30": "29bJ3dE4zqoWS7CEHUcX6cCgdUNbpySmeEETXipR7AG2ZsJEsY8Z7QREx2WnFr6rBR54rfWc7cKTCZVXYcDSu6zt",
  "key31": "61ZkAuMhtniP9jUWyh1Fh5XoQrVzg4uxuiJdpmkouJvCVmFUbcdenvGaSPLitx9pjoELaPj8RuXQT6Yj3Nf3Xz2a",
  "key32": "P9kxQc7QUADBQkk2BYGiv82QMhqdbd4sh4n5AP6GKzNTHRZXh4z89kBoxJNREHS3unxwQ3QuagT9kzNM1evpZts",
  "key33": "3jQLqG3LLaoQf6FM1mcZAdqcZn2FvcMN3hNXBjUEmBezWT9vDXuz79VvgiJaSWj9DN9ab6z87CN4AM7WBp4LRFKq",
  "key34": "sEi3x5zLJKPdjDD3T6uFdXJxxYPKZ1g8gW2ZQNokP8Mhhq7Nkvmvf21wusX9JznThrC9q4JPiPYQ7yWb46Q5QtY",
  "key35": "3yszibJ6Jst1yBJEFyNzudWAMGNynb8kF7a64YM76hiMLgwxvKVnCqzv9yx8yseoKkxGBR7fTpg5d8J9Y8fawWFa",
  "key36": "3kmT5LZykfLtu1fMYwWiHq8BuaggiBoHK912cPWk42tA5Revi9MNpZ8dihCzqWrT4qpK1QAzAQ6vFpe89goY3seX",
  "key37": "46sqx6CPqqfit7vaqEV2jdSNsaZMVQ6tAcBbxsgyLquHJ6LvNPyRPwPFnvNBpw6zDWKJfDMNWFgPn6VwgDWFHr9V",
  "key38": "5zkBDmupwdjMr6ckmrGhtYmjm1kka1sDSypHT1hwUDJrBU5RjDBtdy8iruuv7bqaZxgF9zM2CKJjm29Rxkp3cnRj",
  "key39": "3sdgstFH4iRyy9jZZULeeVt1EGQ35rf22KJh4pbFHY7StvqTr5AstsCK7QxW8WTmt8khWLYyNMMdSdMN8PuMtWr2",
  "key40": "52BsU6xbfdavVAbvYG7bq6RJz5ZkH6TSEfxpCKMcLR58NFSHhRJigkyWAqfqzMhByvV6dnDbG2UzfZ6CFwMKfbbZ",
  "key41": "4Mz4ezCuos7nWaoXHLP6rJSWGt7uHAeB6uMeoU2XNQXQisBqz4qDHahV5R5DwURt5cxcDJJCH8F7j3FH56mvqY6D",
  "key42": "3UjSeRxZVohUhvZ6SLRbwBQMB5w5KAkR7paqPvumPjhNgbrqmbrumnGAAGztTfvNp7baehHpUdPbcca73t2Jy5e5",
  "key43": "2AFogyqUeXJugjiMMroqsughS55K7nvrTaa2GmrmMPMzaa4SBn6kt54VjnNmdVqjx2MmmFnZ81dZGwVeeieM5Ats",
  "key44": "4Ffj8fV36D29TyBNRL82nzLQ1Q1pjmU4RR3Hi4FykPJA7Hin9i2L5jas44ZSpJLVRLW1SxQqgktMnq7Qwaf4v7k3",
  "key45": "3VqY5GH3rfHP8neTCrnPmxh736WmPoKc7AwioJpT5BP5amwxRejfMQ1BXZ7pxE7MDRjV9oSkV8p1wo6FfKdbzK2a"
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
