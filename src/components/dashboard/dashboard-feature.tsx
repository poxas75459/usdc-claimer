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
    "2c8bHJoEZu2JG9mDzbH17S1iCqntu47bxPBR2QQDRDFNED2tEpcCWT4TSsxXKweoKRHJj4Df8oy4Z7vEzEhbod7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LzFBw7HbM8MsAq31PcezLuzuYCx4rWwg3qx4FgwmuDuW3QSTtaHVA4GfghXWcpbwJAje8rRYZcTrmWTTQ9YWVC",
  "key1": "4dPGmtBG5tQm2bJDjrK4n7mvfCbjVD5bqi9tmBkmWshrcd14YjAsHCyrS7nLaMoyoGixWwuVdoi998scfV66MqJ9",
  "key2": "3y3Eejjx9kzbQdfLexxkJhnnFGGjBG8ti2MCRVmpgDgzc6QkrpNUMAgm5ziH6iaZro4Kb4brcfmD3TmBU9Wj1t2T",
  "key3": "45eCr5J8XujHvJLP1qWnzh9QFvXXZHf5PUXsd9Q4v8CpgBkCimxbzYoCnS1rYydoVqqb29Bkrtv56Bto8fFZZbkK",
  "key4": "4qfebkj1eD1QqBhFyFEojcAEYpSnWJQDS11quT3Uqz3GW2PtaWdGHgRNnkMJQCp4z4GiKnp2e2EWNHuPHb314e9R",
  "key5": "Wzv5uszZZStZn97k79uUTJAEe9s94JT81oGKjmxDpoKpueyiJh7n35h8SEuEwHgk8NvN8CJU8u5n8zGxgx1AZCw",
  "key6": "3ahrhhJ1s2Sv3R7wXPHxQevbewTtDbc9ZLXpXYqfvLtwvWeJNPD9HQygR4AUYYrEN2j6r1p6MUTA34NBSbkycKYk",
  "key7": "4EAEuus41yhDZGGxPrB4iNmhntZZkCAc2PuHDGJs54Wo5uguMjqgGAoKppPUpuTaxyWhhVnVPQg9Sd5rXHYHejjn",
  "key8": "4JHqX1Ap3jmxMmZAxSbxxFGATeCKsST6yjW35QuzFDkBrS1RwDmKHXxEFBoJFoPasoMMmckRwDeDQ7RW9ozVR8Pk",
  "key9": "2HQhuqXUuGM1rDgFpjV83E4ozwEzvdtzRotbkCS7DZaQFjmHvfVrTH8Kdi7V7icraPYWx84ejaBpqYNsNpftHTfv",
  "key10": "5hjuw9uHUHce5XnQP5wcECmi7eQEpBRxfrUnsHeC5qtbxb3bYAWzBqwb36ucN1biNRMFs2qxnZcuQ3sGHoxyjhuw",
  "key11": "2Xq8ERoEaAX5MefLFEYZyFjepLLsPd8E9th9MZaDveBdpexa9fGjnYoJRwQ3QZfXtVfKRrzGvHj5SpLZDXNAyWLW",
  "key12": "3Q9xQPZXMZbcjmRk3TKs3ed5cuifdrCTxtj5LR18zpJAPRcjpVSQLMx1RYs2AqBDeeUf1k2mXycfDt6Xgp5GhmA5",
  "key13": "2StmhdDXTsnm94xUTbcEvtWUUGCfBNahqPUA62ZW4wrCYwiVATpZBw51c88BvtD6GqgW6rvvXQSaPrT4mmpPEob5",
  "key14": "49knwah8xQwR6AhZEDJpSW4Az45kbQZmUjYBhWPM49rSSCnmBJWU7KXrDvYFVKRWLbR5A9xNJea6XAK13XAcezF9",
  "key15": "59ci1dxLAiYhMs6zbdQD3eM7cfuBceXd9DMD4B4WhGzTNnDrtx2kUhsz6iCNvEAUqqDEGXn4GWyVkvV2v25FPBVY",
  "key16": "2xzewvn538d965T7UyNhxopwFMY2Vpd9wNyaXaGyLD8xBPoCamMuJGBeGTAwQvWCkZnMtq85uNwQuTKLtEnS2K1Y",
  "key17": "34bKqJQ5wxJ6LNW5VVVyns7vwG45H7EQfQvqZyUciaKiQ1EaVnWSMrs2YYaihbrLTYn1RawLKyuQGRF5PiSdihJZ",
  "key18": "4t4e8jzhfksBhunfY9GoYeX7326Tc3wEaqrvEitSvqTBPFyYhMVSQtwYB5Q4Z1UfxzesxfRa1NAhv2dJXhVvH9Xt",
  "key19": "4BgkP6WWgCPjxd2XS95k5sytCd4dpBKk62NBJwDg8jY716tHaYdcN1kZkuny8QQjcjfeHUijwybCcjAsc8kpXPix",
  "key20": "4qupRe7zZCNH5PqWmgXXsHBaw7aNNxE6LpmPFL7SRG1gQSrcmyP1QF8jw6qM6kexQFqXiAH4Gv6txe4nX9CxyMLF",
  "key21": "y38RkiCmRPzFfMnn4FkwfjjPwAFzeEjiRaAVAaaYfrRHRK1CwgG13ZfsZRECPhdKwxTtr67avMH4qP2rPDZTFrr",
  "key22": "2DJGepfbZaJiCc6prsccs1JwMb53DDCth4Pzd2Bns84UFbGexAQSjqbEo3QCgnHPMDqGrG81wtkGm4r2yXpDrzUi",
  "key23": "2C8tyjRXWmCJwKZZdVbXiiyPbf8R891yeAsxyXxDVwaUToEJcyjJy9bPDbAprHjxtJUAKkV3aKtjCbnHaqLLA8AY",
  "key24": "eMHjURNunwfmgmgnKNHnUFpTFHxW4m9T6L1KEpGDpXUjbMRQFRa4nVaSDoyXzngmr4mEejf466DBThhNoi1o5d3",
  "key25": "2zYF1u8f2gktC47GQTACsfBSxyn1R3umX8duY4zri3K5Aa7YfveXJuoaUr4dwnW8yoXFiECHuXZoKJwe4PDatY3T",
  "key26": "2uUcHyxkQnto4ZeMnwV558M4kRKgo6CDdKRFo4B5cfigUEpcJJVFNSvtSVqRMsqtRPmTk4bsyLQjYKyB4Y9ggoB5",
  "key27": "4vs3EzcSs1TnFH5hbA2XLdGK2ToMQJ4x8eRFsFFrXwKPmXtyCfhrc8ubJKf9G1U13EYdgguSfwEFCZ88SEFhX3gt",
  "key28": "56rLfsue15PKmxvE5JeLFjaTcmx2gyFNofMjuxDjy1TN8Sh3bhMeddJXbaHTYiSKfscnW2uyriJvJHh5ZMcHgX8n",
  "key29": "3U3QoadfAKVXeJZEYbRa4ezCn5Wvj98eN965PiSVQdJK7LFZ2VM2KhA3NamhBT7ZqLHEu3AXMTsKrvVL7KMpAhAQ",
  "key30": "4f6k7zUgP1hBtbPgD4NmrSF1yB5NhHrYnDdvFUEvu5TAq8Bkow1SrkLW164HDmdrPU72cPbAsgLQdQYL1yPDMLGS",
  "key31": "5hhVbrfNveiLo4R2qkjtdVkYGX84ke4hTF7uh21ZrpSGvxWwdsnFFfGzCPCb5mmWDx2LxB8YHm5yVGfVRP7KRijc",
  "key32": "3Yqpcgo3hPMhQejKEM2k7U3i3r89qCMHuJMe6zvGZEjSARGerLVSnXGfVfmGWGPwX1kXbhVGJuK5JyhxaC1JbFJP",
  "key33": "BH5EAaob2WBPjM9QViRcfaA9RkGbbDAadADrUdEb9HeKfPtaZs7C6JXqhx9ye5Ws8Y4PsaQV2DnYNTcxEGDEfvM",
  "key34": "2hyZ963Ps1oxvSQYBfSp8T3D7NNXZ3hZm7MmwKtX15Rrnd8fmHmZbY1RKwhkjHWj5Do2Urna2EarPJkrXPUtDLp8",
  "key35": "5DXyMZbzXrvu6BrexyLmzyZVCJpWLFsosy31AUNJongD42N6dy1Cof9LUQJ4NmHWFeK8kMyKeT4Av5r8JEbEzVFk",
  "key36": "xf8FL1yXPsHqCsWhaDKgQEPS6mMKsLpzUXWH8LoyUQie9Zna2SBC5t5D9MSjDGyiiotXrSgT8Z8k5TDtm2rqzQU",
  "key37": "5MBMEsRozsKjQN9ijiVShKYkmmFk9u9JEfNGj9T8LE7XzFG2FKeyjZLcCmPy62PX6HzeUFQbKBTYkCsqjdniM5Zq",
  "key38": "3H73ddbWV6c41HgedojXXuL6AW1G7cYXBpGKUM7RHwG8S89G42s4U8TBGidQkweArXDqVRdpDB7CRQ1ujWbS676U"
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
