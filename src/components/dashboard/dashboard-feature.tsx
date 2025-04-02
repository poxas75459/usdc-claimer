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
    "2tkabLviVZ3RvsR5U1ehKmLUrCTxaWewR7jfG6hX3U2qN8MF8XgGYu8VtWZLraqNTREFTdWZFczibJRH99dXaUqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rPovxcVVqNwJGV2s92rcDWEvcSvGMdRFyxN4rvgUhxypFxF9XekrzN7R7Ds8ZWF25Dgsa4x8QVA6vNezrwJZznB",
  "key1": "39Z8KkB7jpyZPQZYLGYFW7TLfj9xary2CQXmz5QDRgNc25iLyvkUBKke3Yot4meo1ZDvcP2wBTZWLiLQJEA9Hp4G",
  "key2": "3PUivVfMUjm1FiSsCk3fNQLSqCVAduEa3RZH3sxVLZf9iF3m4F1vT4NZ43QNPF4335ifgnLxCTEQ27g3w6PRnAgZ",
  "key3": "5bePyVQaMEndCrxZZKR6rww4mhBwjbaLXfX3B5ctW14jSZ1LB7JBNLFtMS7dbS4zvx3zKx93YFvPP5V6BmBJ6zKm",
  "key4": "5hCPg7nVGQs8E2rotf3ZPj8zVcdPXnQvariN8picHkR4JaNiQo5go4bkiCztDkj3CfZ3kc8z1FDPEk5zjg9R5aWT",
  "key5": "TynCLRtacQBEczk9DrNaQGxavFWwtuRx1ePLK476C2euvtugn347yN2fRgDaz7dEPpHs54r7x35KeY4Pesf653B",
  "key6": "3XU2qG3Jtkx9gMwogZGSRWuwgdBWArXamj9FsRzsSDkqpvQ7qcwvhxDwdkTaeZ2XjiBf5GBCgQzaLZPS1m4jLtur",
  "key7": "3CpbrSyeGzdro4bAXGZFFwUToY7ppD6GWHM6p1mjidAbQRFStaGjLz21DhjPWCddywrJy5fXgbC7tJW1bMhXrNg",
  "key8": "4TAWCw1jHPNVgLRwYrNGVeDGBZW7rTQknSgvDF4qNsq7Xhnhg25hMpvRC42QnwRvduQYubVns91aehhBmbbKhuqe",
  "key9": "2Wqjh5a8rtdXxF92wnHYJdLo5YFrtDhCZFPDBaeUtYuTigtVbhJtBVW9cV4vHaFbpZ6gcdohobD8kfc63HETX5PE",
  "key10": "59p8MjB2np2q1MyVTRtiN4MvJzN8kHKVnkVtDM3D9QRYXnnXdXa27QGJefmeLUFCpgxJcV77HmKqt3H1Rk27NNf2",
  "key11": "WnvvdnzL7Bj7L7aog3ZqUXh4bt3WFcKDreUts4NMh6cYd89YqBtpn33kVwSm5TtE7GFLSZSgABXnz6ZojGmzHiB",
  "key12": "5JVL9BY8FjkWjZwSTB6boYYY39a3H8JC9X8SE6dSCAryUS9wCr21DRqsDmGFwsj3PcbPLTuu32tuppkwQU7L8pkE",
  "key13": "4znoQ5RvCfibJZe64zvf6JcFPV27spvZzmyeuMPdJp14EP2in3aZtJsJAZFjpX1MqgmUW1a2M5xtywGQijZTVNui",
  "key14": "fF7RtW5SnCuTVHvRwKXZ6eLv4NqmkK3cFTMLe3n463sUgLYtE2vnwxBmAFYiEK8XBhR4KvgXf2SDBLbfgnvDecL",
  "key15": "3uwqPzhAFaxgUQ9QCWNvigDQBRgc7gytkBniRMypFAvDcn1D4KJWNQMGeZLJyvdCHnvXZ3Qzqufmm3VkVfT3Gvfi",
  "key16": "3MVwexRMcjxHG5y7rsFF75hZNjAp1PcsdDgQcY1JR9EAPzx7n4FjMGXTGjZMCT4YhNzq1h6hTUrJSj2jMmfzoaFK",
  "key17": "5bsBevbXsu3ZCe2ZArgCVtZGp8wptb3pNzXcxhGxUSFyW1Gf8qdhwx33L8dSv2Nn42tk5sMGEuUG9qvxNj72Ya1m",
  "key18": "2JvMJSgFnjLdWSbKBCupnMdCAiJaueThtrNRsayGA5TzLotrMsK5TCWy2TV6tLt3xG3Eog5v3uqbbVZu2RaTtrpF",
  "key19": "T6RSnPjK5KC6tVwNRk7e1R8WC9kX3jxXaENWWhrx2bVvDUGZPvJBsyDQaSr5FzeCpAzHs8N9Q2ruzEDUmQY18pk",
  "key20": "6GkDsrGFm5FpLh36rPcThWVC47V9LnY8b1bWDwgWxVcmdX52uFkcvTDswC2oG3DWetDokoWd7Cexp7nmnvVuoUf",
  "key21": "5Vz8ZrZM1m29Av6Bfda8R2UFjYpLSTBnqDZWhcGjYq6YKUYxF1uWLtGBEkmP4kQKiQBLNowz3FEaazxHHzb1CWXX",
  "key22": "2LjiaW4Dvh1sQHSi8pmnLA9XM3W6nGdJojNZi9L3rQHLio3HgscNLPvcJkYegL9dEjibQD76kn4FTGVeGFh1RMeD",
  "key23": "VpaUhuyrgPVmeMeWuSNci7EVfz9WHAsNv88iBDxLiPXRjQ2z9CLxd18uFFxRgGaQvdjcDXTxTpxWJnazBbkmjmV",
  "key24": "2NtwJm6FMJvHRmJw2as5i2FiSATDaiKXKuXhecZBN25Gu7LTTkL3kjAsWzHdxsi9GQ64TdQ7cNLpSNwUvY4MkDXR",
  "key25": "4bbCHt8V2Mx8iVZLhAZQfCeJVStP1z7VcWwBKQmgURY1VFRLcNX8DgBHgupvFsuq3oNaEq54eQT6vzeULEastJyj",
  "key26": "nvfavCQpJxwMsMHtSKKfAhkyjPCqn29pAW6nrHwe9Lk45L4B9Etb6zGJQMtXWUatAohggBfZH5wT5a6mHNBHw9H",
  "key27": "27msaDebpNNkFbuQ9eJdNGmHTNzXKrawySaiVJqfgt62Q3H12qEmP3qcc838r5Pr6jZqpDFg4pEbY1F1H6sJsR4W",
  "key28": "rNKtPDdyC6VpQM1s5djtQwnrJoU6wxQR5hky3XXL4xm9XNTSLgYs2dQcG8SGf3GG34vMSc77iDFPuABrzZoBWvD",
  "key29": "5memdDiRv1AkRVKoNntSXRmaznVvd3TAgSSuCPna72oMcqvuv5R7ghcEuRV4JF6MFXY7DxeS8vvEH1JvPvdCHP1V",
  "key30": "127Wh75PY1Sz47J3nUozdNW3spByCsWLyZCVCpDNU6Qg2iREX253HJFqzEBhzL7kq9Ek25UFvzRwCVS8ByPNfpn9",
  "key31": "4wjK2B3cSayJL8sBj5Ji9EHuzfJxykQX2JgNMiExtVw8sR1a2fzeG7LssSgFiMiLcmpsrMTW5LQde3Kv3Z6G3TqF",
  "key32": "62cXSW16PtLhVcsVnyY3rkqLhiRQqh4F75WrkiZsEtmcJWUpCn4wZoZPtb7tgAWYgzCk7CAi46C6C4dXX1x8Xpni",
  "key33": "5cvArYf4sospNZrFe3v67HBJrtrCtcxfGcQJ9Zgsm9VnMj4eTYbJSF6QVydVtSYrxxQv7zvB7NfKYkSjtoYv3Bz6",
  "key34": "4wYa9QCRSpQr3P5KWNs7pdM5KURcUMAkub9JgmkcQHG3GyAxbEQAYRt3NvvpQXWcsbpP6ozbgMCmGzwfDucrTMYk",
  "key35": "2BwDaw9SfnhkjkUDDoQMnTbxKzhYLPWfqTEGGbGX8XR5ub4vMdwEKCeHc1F66w99TvFooSfZLNWBQzKbXGo1UuT9",
  "key36": "234Xxwwg36LhU8HBeaFd2Hx9kUM4FsVUZ7MbSXa5ZENuZThDrHnAQ896pGuQw1KMXbK4By4hY1QWf9CCyAVokqB2",
  "key37": "22KRuTQowTG66AKWRabgyzqqeazhHZoshM2PEm7hwQ9pi8M2YvvZhgC31bQV2rWeqf2XxzGHZi8qb9qocsq3UeJ6",
  "key38": "2gzwfZ7SbeyHtWNx8fXNrmGC1UFf142qs7crpmqHjYAYBi1kcAZ2A7CEuWBLjt6RsqeSMmYB7nSV51abB2ZoZcZM",
  "key39": "49UPA27FCCaNea5LhvBxGNwiDURMKvYbrsaj4jKprNUK4oESjR4DLHHALZNuQiGrVKByneLpYXcXWsyM2meC4NbB",
  "key40": "2PJTmHiWfyLJN3oW6h8coASMcezcVuwgNiDu97e5ADbrtVtRmbJTLRedDwT73NZhjPRhBsAnqza5iZynsKGCCrWq",
  "key41": "2fitf1NBxwu9hpoV92rSbeZ7Q8aHJjF4M9RMDbwQdXLVpocrbJEhTe9cQ4yqd58httjgmvL5cZKts4657keG8KhX",
  "key42": "4pvk9CC2nsfkmesa5yT1uYoqZgWhrzZb4aUYSLMUZzKu9TWWAtXmYY49TL42tBTBDQ5n2wapoJjwfgjBk55GHgVV",
  "key43": "2SYy35TCQ4BF4qwYThBccr7e6unRS5Z4MRPp1RCo7X9jhd6Td8cqz6qpSnmrBFZg8y8YeepHoPFPujbUgwo1vv9K",
  "key44": "3q2RqSaohNbGKcb5VaABysfGc59Qz3kNE9yvasydzPyLYip2nAX2W5mz6jeAMQ3pmLu6NKk4AsW58qAVxTrQK2EW",
  "key45": "4KHA2Dnykd1ptL2SozCLr52Z3aiaY7tPdxJUHLd1zjj4u4PchQE4Birh2zHfFywUGBdP9wCykTBVaMF32Qz3RuuR",
  "key46": "34DXRLzSf4iWm31eY8cZTc7xsbmUFkQpftLcXbkn65Js8arKtRbCFdQcki3ZdmTwpNXiUH5JhjMbx3miCa1dmfCw",
  "key47": "4tiKcZXbsFibrE6GNwg2RrS9oER281nUM7n6iWEHFMbtsY7fXrbcRaFKbBi1DyQ6f8jVjc7tQeGRKZ17fs5wYgAQ",
  "key48": "ZD4FAUsshXXWE2q7xurL6LUbJvvWhUR8fCsHkEyVyzpYWtiWMAJqoYXPHssTUE5EbERM1f8aCqTATC98hDT78eY"
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
