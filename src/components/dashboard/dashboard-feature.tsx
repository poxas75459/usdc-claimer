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
    "NNRejJgV6ZxvSoYJ7c7kYfrEakNAB5SWwDwF8j7VkgYnzu8UShRV7NhZE8gVJo8goznTAWz9UqDzcgcsAxcWYPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v6KFxVQohzyPBSHQNdERtRr8p9H4vuZkoeJFXf8vSvL3LroYFSiEhLBRvDyDkusHRtvnqTTfuSDUs7Qo5D2ANQe",
  "key1": "wpiwMDXMgcNHLd4Wif2h6yR4rKTcVyje9q3voe5dZFtNQaXq4DW6QHzQ5SrgBK1cUdu9ah2EhscShYshBQv2ML1",
  "key2": "2jeVAVUdpQ5BrXU8FqwfugCiDojrVKRm6FT3NdPthw9Na47otY4bTRWPa5jVwDXHmv6LCaNMLcvGr5Z5GCRmxpoB",
  "key3": "3ecdLbfmAN6a5YRAMer7AzcHeQ9LqoDrUfziDHuu9azePmjr3vifyuc8oVnMPez9nPMBioVko8jaLFLD2ydVT2Bz",
  "key4": "2beve4KgELG1tBrwqLLdQrK3JbXtQvVwmf2MGBCCeSfHKECM4SjY3NLEzR7yVwjUNnotC8CtsMcpm57u2mSMvbk5",
  "key5": "2xGcBJAFWdeNcn8L6M3ardmHQ5a8sEo5BZzRjKid16etzKVSe7kG5F1bp7TY55zLcu8Lwcp93BPpdBqskR1w9ojy",
  "key6": "4opD38Tf6G5fvNovMJh3tgbwvDsN5KJe3T5hUosSN7eBcWieK7HLrPUU14GdxwFgwT6qwsWrMEbhK3fFYfcm5bLG",
  "key7": "5QZffZfkWFj6jrBUtMsYP6hyaD3S4ASWfRjnN8mfAuVpJUquMoLAxzwqw74ffEDvjzwUE3qVXDB3ocGuR3XHxgBt",
  "key8": "5DLL5k2CzwGQdgK8pNPKu59BqHmNrpDdSGr7Yfj5UECx2ADy6VDBkFFPDjQ7nYBiUHpGHR8YJDZmab5GTUhM2gQY",
  "key9": "5MdbAritfvouCioF7C68uYs2Axeq7CjeAiYbMxpJwU25RFAuio9BhiCTTm8om31n82D53kPcA2Hg8oTggzkvZ6vn",
  "key10": "54xnh9ryCvV4cPmDgtWY5skfddMYX3RuTFZmFkz1KE7n18brrFPiDqXrhPtUQLve43mtZN9UhKWXmm4149rZQE2E",
  "key11": "vhx1KiwatLkva4dCMmEaNJd7qSWu6raRQnqLFqQFUdfkUGciG3SATsRq1HzYKcJ9xh5AXgiY4FX1ktEsbfahJuV",
  "key12": "2Hifx7hVNYopTgzLabe2wKkospLyRWZ84L7HBNy3Nu58qScMyh1VgGNth4KHJapcEhdr2DDLE9kYbNS264ChAbZF",
  "key13": "5eq5MytRgv2ehArYrDx4vdgQ2iyiqHn4cfzrPQMCuqC96HENPkkzm8gZr2FgRedJnQZ8M7i5TU5CWiMXJaLppEwn",
  "key14": "53aEYLoBhT4q7yHM7yav3gYuF7CJB9iKceBS5zs7b3JU1dr2Zo3uNLztvGv17Z8ayKkns68JivKoUALhNWZkgcqu",
  "key15": "2tX7LXuFjTxiLLxg1xHnMJN9WDZ3B9w9aF6Bhn56w2NArz5anUqdnN1ryQpzcRbZ3CQ6XYeT7jXBkpbQ9ZVojJej",
  "key16": "5TJFuKArJCK2HK8g3psLyugU2m4AxAfH34NiGXKJAuPbKn5oj1duRLMX48Co5TZk3tGUomTZKLSFUZtLU1S5cC56",
  "key17": "5BJs7TgxqSwLLuDPg1KdnRtmhRUVQ6ZPnXofXvPULfaFTYXrTtGH4VHrNERrHkNXc3gcKg5pXfQSRFPtuwbJYYyb",
  "key18": "3HmdZWeRJoio6Uwhd79bUb7dSNTA5QUotKUGgWNMmh9jj9r4QZ2rzngV9P3ggf5cn2LhQkgnwdTyag9X7rRHZY8F",
  "key19": "3ogRw2xp6eGifDY5qCnoLrsWTXK5T3g7ipaqDYi924fnzLY1EoDDCLTfrgS4oGDFN3n6feQAk6JvAoSYJrKNVJRc",
  "key20": "3Kjiuov2f1b97aWpdiQ5STZxPFdRWMoBRERopi8YdyhnMq3AnuRaFfhRwoCH9TJY8uxn9xUSghpAccJmQFxtoYaM",
  "key21": "2AFBukSLYCLXVJYspEAGGXq195MEwxoyJFs8YAxLJK1JYfoZTDFJud45LdocwPhwVEf72srd3YZYHEo1A5CSUpGw",
  "key22": "5PZnnC2uAhjX4LRQs6Dg6f8XwVuNmPiy73cTAgzcHRrbRDZGmQXLxNKVgicA357Dm9V4RUhLhxbbprHu1MaPhjhz",
  "key23": "4EZ2mYPBiZcHuDLWZeEsgcfUEzZKrB3CMgQrf2VkzmAWTcMEQRWo9VPdb2wR7aDpNGZq4J6KkVyBQd2wJdWfUvdP",
  "key24": "38w3fXNa2YNJKmaZvDngydRk3w3sAjVieGtMQKY62pC6WQXo7tynL3FdLLckmzt5V494yVixkuwQqNFueXVkU6Vq",
  "key25": "2cUuJbSPAtewzRCJMqvmdSeS42yRHjsDCSQi5hco9iJN7gZUdiJtnrm4wZWkNWB4qGe9jGCpHrpWNRPQjrmiJAN4",
  "key26": "2qXgaXouPhgmnGK4YtkLMymNq7Gr1vkktvA83AEs32hF2FsMfbZQYaqpSVQxmga8a8bo2oaXQYWYo4LReAVpMmxp",
  "key27": "29Mrs62PzTmZK79k5yUk2VyHKgMZxt8ySXQRDaDtjF3bNNxSuGcomutDX4p2CZmW8N3NonXssrQnh2ZzbVqods6X",
  "key28": "ne2S1BtGq9H5NGj5FRbu7scgZoJMGvwZmEXjzTGZkLVgU9xbQjyzG1Fx4JiUKrBeFo8wE24D2S36WNHiMXhwttQ",
  "key29": "2guktQG8dqwCg8ogyiQr2wEM9DKdiTT37iFu5uBgpkB5KNNrm9siB79obs5bnMhfQ7RrwTfzNwfzhy8qurd6ooT6",
  "key30": "4SGoxaT3md8XbkgcGD3kwSaRoLA9rs9UUooR39VJsU4cqYcHjUB9eeukmpauyuUDXJaQY9CP37794omNGjSRhaAD",
  "key31": "4pyjKTX3QNchG1EggixY4QLqaykrTZnUP1iGEYYo2rEL7L2MJohByscu1PY6rD1rQnNRVCDqgR5DJHGMReLAM5RH",
  "key32": "46oe7yQ1xpfBpCFHpW4ooR3gqxPCKmTTPzgZzHtKGY5bzWrM7eGiH9uW5L4Y8WoniHz3SeVkz9gTSCM21gpw4qpo",
  "key33": "5tBvrJo9XELbRn5KAKmZXnfq92jyuiVWFLi613AraMTjbo1KFmwaY1W5xxpfRsJhRz1ExwNSjxdfSCozsncz7Gk6",
  "key34": "3d2XNuDCWAAbKGSWoJP5mDbR6TJuFyiiGknVvJamnEtbaetsNxctKp9s8L2LVeAJEYqZXbGa3xbGtqXhaedPjyMe",
  "key35": "35J8kUyNXKMgBw3hN6LCCkJXv6Rc9i6i4cbYWsuagsMiCtVvaeRXesZZnm7PoNkTtNQ2QxqSuF96sWoH3nncVyTa",
  "key36": "t2F4eM6qen7C1EbBpfDSEZ5GewbjkGZPCFKrqHJaJHJj6ieEC6uEf9TjguZMbhZZ2BRusjoJm58fwBt9x1iULUV",
  "key37": "2VU7VdTqhsrREDhKrg3kdhqCuzXRehShwfV42vESDNkmgWPYwqD7pFnA964aFdXmXEFa8r1KcB7wS6aiEvMWKCr5",
  "key38": "vSuH3FTdYwCBaKbwoL4vMTewPFfUA1R9FTehNrT9AwUakUWg1J8c5xZ5W3UfXLStnXJwuq94BpwSBQczjec5TVd",
  "key39": "5WxyT1UR9Y93CJG9R69goepCWmRPWqA248PvjJc6UkPYGdrqR9wwnaXx5BkYaU7frL8ha6FaTo8ohfRZYbYqksJG",
  "key40": "ehRYTKDKM5JyXK3LRk8HYGwzrWDygpniPy7a6VAWzBvM9QsRfvUryjhADA9AhPmNYm2BpeXkHahVWWsRkqSon8i",
  "key41": "33aZU4miyd8xexQCYuCFotsXxfacuTn59DFcnQ7ZVUipEf5m9SKu2pjW8XWcsUTfqnGLg6c5D3nwts53K24475iV",
  "key42": "24ckDRkjtoWBzmLDeNtrHS2okL7P24jic6TLoSjxZC1qGVcKkwsvjqcFbs1nhqxHHxragQr7KSDvnq2NJyT5ToSZ"
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
