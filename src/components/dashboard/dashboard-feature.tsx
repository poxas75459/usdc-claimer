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
    "5M9KLbuVP46P3U4VDBdAFbPDFo47TAkpShqwCmDBcR3QeaZJvhprNMEni3jM1hUqj84S1G4pqv4fk3MEyG3HFyPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uqpbUWZby6NZPeNk1J911HYJErVNzKV9awvY8BsMK8asCyAj3FJU5M9jGVgWcwdHgXG13xTaTnD9rGCNAvx3mzf",
  "key1": "26eQdKTZVXkRkpVDMgxhgaLUsFtYodwe9fLymYW5kV2twb6faEEEHyoxiMwVwvQSNizEzG1PXpQF8EA3FsuuSXuA",
  "key2": "4qK56yx397CbhM38cvZU4KF5hQ1jc5vGqAT8TxNdAuauELDyai9usG4mb6Y56jNEj69fk8kAibQe2Ku6nhyxszWB",
  "key3": "4PYgTAWYAzsMwVWw45coNGbhuNuHcZhGh3RxKqEC4KcDZhAUNLEAFEu3tWsmvx932ijEnhNMBMdqUjuwLVTL6GXQ",
  "key4": "2AwByjMM6tqeuXEtZjztwSYp1QpWAiqQhkFToPs35w1JwLLED3DWEyB1PwZjowZWqu6iNexmC7crFQVgQsLfFkkD",
  "key5": "5NkuhQ3Y8TMkKxjrFpnxkUA9jC1V2xofHoRLNv58djqh1yARPZL2mf1etr6GCCsipaMtfaXFHk7zQepAQdGdXYxP",
  "key6": "iq3fa4osHyytHk7LTLWwamozKTRUBLkoeSV6T6qvPHyGWxiCPEDqz2fBYe9Kqf8A4C5ydSwDeB3MStAV7Ebqf2a",
  "key7": "2f1q8WbuZwTkgtqJXsbkyqA8d7M4NionKkVyfr9Cc3A1k5f7X59qPZe5a6gmy5TAKcGcKiRmjkHEu5mkUm7bcZyg",
  "key8": "iqSBoL4sdBhMfz8vtnehjtSzaib97Z4uW4Zo5BpAjKLtmKsJ22S6aLSyKLmWiMYSF7zbEHYE6txq7rEbg1YurWj",
  "key9": "38ScK4Nuv73RHcKB33ohaqNAZrjveHmqevtE4NU2v9xAgUJggoguZiF9u2JhsAFqqPv62cu5achee7BCMfdHtx4C",
  "key10": "rjmWb4RDEbzco1P8ZjQ2bjN2S3uJ8z8ueX343QMN5RdQzJyyNGg4ZimnJydgdwUGbkSYhWEiX4JuRntd9y28dnH",
  "key11": "2no7giKBnQ8zbQrzX9J1Ub6VpYaC6hBSJtz4jiP5UdnjCcnCn2itGcLmwDLTya2aQdLsTSFAh7qUfH6zQhcthjuS",
  "key12": "Nxq2kgpwuHvw2dVAEAeixLF9UJ1HD1x3GSioNnQ3okuzDbCocz4RGJKe3oxtVf59Aa6aKJXoSjmA2tZPtnNpuXy",
  "key13": "4zV682Jyco7XJaovg5YHC1FUmwVFj9LwipFfDcUcSvgC89VYnouApzmCzhQ1u2JgkmqjYrdHFYn6fgU4rw96mQvN",
  "key14": "45fnG6G1LWTNBGVhmk6FKr4JPe9S59MKcyD4YnktnBCGnoGfbiC3c7Pj8fQrXKvYqnqvHBxQa5QxQyPUohDwXsPG",
  "key15": "arsA6dCi75qwWRaPySSwv9TikHkKaCWpan3bgzQZPJAnXaEyx4FGwKz1B6Lmp6DqQRz1barrfcpKhddgRsNbnzP",
  "key16": "4PbfjnpJP7ygG4LXhrjoDCwWu8NBdYmkywg9iApwFy4ivBaCBFnnFtZrfqprhMDwXdAeyvQQtbSh4WUMZYWY5TtE",
  "key17": "51ouGEf7pSYKwkNGGoBHNB1BGzWYaMnHUxDz8yJMaNRiBkuYbpApCzfEKGXQjHFqb12B9gM84mttApH2Xw2Ztq7o",
  "key18": "5NWtabmv6beevwKF8PE4krBrMHn9nN8GeUDxncWm63nbQPA8WU17Dx8c39hQ1qJ6JeyCtYrrUQzEWpMw8Uhuo3Rm",
  "key19": "QeJbyuPCsM6T73hEnAZKkqASocB5VRmMCoLpyV1c42C2hzEX3ikCszcYqoaUn5r3Eg2S7RZoBgHi2sR3b6M9rT7",
  "key20": "Kckuew6pEgXY24Mht6eFMEqeh1cpHU5yt4n4p27M7izPvzebt9oK9oA1ojo9mt3FtsuMQgJ35rUQ97DWxdnw5kx",
  "key21": "4MTnLELZvKT6bmMZnR5jaxC9NiRCzouQf4kxqjw8xm2hiRsTnDeJE184n361rb3hxNEu84uqePfyvh1EY3tMJ7BP",
  "key22": "2ZrDSSzEWbfrgzcyeJDgXwYRDtUvWqNQfUr4mwQPDaKHcQjTBM7eLeoMb917ofmoE1hm63ru3LFwUxKPezXPBkzP",
  "key23": "5RxV8693r3i2J9vECED3xJZR4MR6Z6D7mePsau4ZUacGxjMfFkx4EYJzFxgEeJdWhJqDTsM8pj6DYM3pTB3gedQD",
  "key24": "5L1PLUQmbeRnSJTCcmUpm5kguNNiaKAFq6zWf6QYHpWrYW42MYgmhiH3nwCUpcibCPihv6eYF6w5DccNsFMM9z9j",
  "key25": "56rB1XutuVmqmDiQx1vxjaGpeN2NiswaNcRqPnq22CdcC2dA9NfqeZLESSCJwns2Pq4q8o5d3V7toErz8ayvqdVD",
  "key26": "3exT8j4S5RKCVQfc16GTwgckztTkYL7xDRcEuCjEuAzN9Zbw2Be7B5ZVamKcTcQteMdfd8p43wyq2t6XRvnFJtFE",
  "key27": "2nc7cK9yYCxGyPWVYXNCNzr5C1Ayb7Susy7zsnuZpoXxHd7TmM4SxkuqUqtVJcRp7c6FhAoJSYMCBiXEAc7G7T8n",
  "key28": "4YPhF492cmHsx2rSRVHo61iSfrWUuBFZsNBkad94kwYoSDk2K7jzJ8vv2ywka3fGPEDmkZDd8RA7L5JPpgdrExzN",
  "key29": "4HdKD5tQJxzAvhgDedsq1knc1u415myc5he84Pe6jVfAwhUfn8acxUB7F5XCrXLNztV7XTDRMhXoSauFu6RqzwU4",
  "key30": "2PcSg6E7brWFeVMBYZHuo8X7BjFKGRyy9MFnAUL3G3yS6qwiAYtkUeE8fFw8UddYZEaFSZNbaD6FMUsjKbT2vnkc",
  "key31": "4NqACxzsbKcYKWTVRNyQreRabW3m5tnS7kLeUbRAz8iuXReGaP9pJ4rxr3z2GrJcGKc5AENi7HBNtDBTgfEgZKV5"
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
