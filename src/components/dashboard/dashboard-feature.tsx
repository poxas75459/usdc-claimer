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
    "2JoJQQ2kgfUiZzvubd1hmN4JaZyPKVxCgKr4vArtuE28MYg3nfvjktNN2enKe9peUfRDiuT2QzniP1BRUkgSdobQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1nTNytJecgyxuNkt8WxCYhwbx5MFTahtKn8B4bQjKu1LdtfCw9D6PtXgApHaXYh57a5E73qdDUsfFN1LksLtWd5",
  "key1": "444cQXUeKQQssByqhv9kjADFCMDkwT3TGgvS8LFyeQgjNgcVaLDMBPwaE7whDgivGpqRr7U1zYip3EbEvH5V2ZYo",
  "key2": "31K4xwqBoVGJak1SmdiDcvfXpaJxjrMwn455pwWRZKQciX7ogkE87uiwsLWC8eca8VAK8ReFq73ArBEVaeExrxv7",
  "key3": "22MCzLPGxTgsbeMVTyvDG7kuXDgVG6TrbkErew8bu2piAYcUnh1z9kn1fgPqykJ3j8dqKXE1pa24Faazf1hqQSZU",
  "key4": "3xFfZ78uatubnzmsPia7Gy9DWfx6ZRyCB8MsgveaRqxMkYcdHTcuyWPu65NJdNEBwBRPPGECjMFREKJXrL2TtsVa",
  "key5": "3QpVat44zcmA562Y4sSzJkjxJ1MK9yoH3qsWjwYy3iLagLotpGgXjx6rVBNcLCoYLdYVUJd52oynu9EYvj4LpAMr",
  "key6": "x1aa1xn1AJQ64JzLmmDCefGzkBDF1mncuThc5Pq1voDoaf6Tx3jtbKrv254DtoJ9LwhKqemqrwNYm3DGdcbz4Nh",
  "key7": "4WYFEuJJtq12eY7CFbGAA1BQcvskMYZhyWssNbNyuZ4ZmxqpxRb9rWH7PEnueJ4oHMhMQcvq9KQinM8Jjf4v8dxM",
  "key8": "sduphG8EMT5JRrB1gf1TwMrjfg2iVWQafCBdcJ6uEowDqaLA2uzC163LZbdRGSNZBv1Pou9VQoLtZVtJUzm5VCz",
  "key9": "S4xAn6wrW7zir4RfJkhP9SrYyqjXQ9eTcG55dtuxbkNKXN4jcshXa4qXUBdSaDTx6F2Zzqm6to9zWFaboteBKUg",
  "key10": "3wZVni3aWn5dFbHkQFSxeYZERZ2Cv652Br5MikZcn9gVyBx14gD57mvVaQqeUYLCX8EFCEjFqRABzXJ3UZKQQBVu",
  "key11": "2sNAQJtMnEgNi6gLwFZbbu6wAse2TR71rnD4cUTtmn7FndmaovRFfgaUnAdqgPd6dZgVdMHcQt8DQZrmmATZsgTH",
  "key12": "2RLxFoFodokFgymc37DADfSDsXEwwEWQiJRYY25MXfwyEH9L4fzYChwzxKcZUT9ExCy5t1WQainxuLPhnyLWAGMD",
  "key13": "5bAuWCLG2phuv1MkXfWwpn9JbUApnTKnMVkEX8LBB8NiJRNckg6x5dn2HWRkaQwSnnQ7trrUEZjo9wthpy7y9z6y",
  "key14": "5vjKVVBBH7a2y4TJAZLhWukKKvsX3UCkW5wSN1CEHxb6GTVhJ4bTCXyeQ4dRdu6hsvGtcD7YVdfsKZM6whfqZbxN",
  "key15": "4en8prTtnanSJtfnx87rthzwEstAX9cceAfZwGYpEMXRVfGygNFugkS7BEBRo5gcoVht4d6HRmaxryFYvZzMWATj",
  "key16": "2whK2TGvmiHacpBGWVezmMB8x4KcnLfLSxQ5JrkkJG3g7uzaqyG44brtzFpMpCLaeLTWUHQdP2pcnjrY4BFMVAhb",
  "key17": "2JWERRfeFvpopeGQvkCf2U9A4UWv1p4XHWbvR8aJEQHRvZ6BPTefLwaiy3dQNLxD8anHej95CgoyzRjXTE2KHxHy",
  "key18": "51j4MUML1CSdpthkEoYiPsjZbRfxVAfnniuNZX6rLZyJgAZgq1K8Y1dAXPFQzZycPSjJMsupREyNvyakLNmjVZVq",
  "key19": "66ATobECaMwoQhLxW7WVDDeqBE9nJRLEbD4r8AyBAqJCwz1qectKBDN6woVXNuGHn94FEUU2PuPx58pCz1bi8a5g",
  "key20": "5uiUAT6F2fY4xu2h8x3rQftPmRi7YzdbjMkSnYqS1GLH575nqDAKNgN9sZ8yKEFgwLffsUkBsdUTpUgBnkHiuZTY",
  "key21": "3aX9Y9K9tuPoNJVu5qHqrKzhu421qfRcFLY9e2GXS6ab1u656bNPnVhoAQSSXSsN7UhGewVhkFDao279CEQRv4ok",
  "key22": "3wJQv3Ymm9PzEuCSrECaiB7U7VQMF9WF4dUrFdbNTvh5RAzXL3bxUPnjVD3VzPmP1rc2z9zycReJUoUG449WFeTj",
  "key23": "37aY7KifgTXPXYKvqEPZxTMEiNcSm3W6AzfwM3QtymJincn8aEhVsG89ufRXp2bpx4biKfmWs3Cf2HdCMJmxTgdr",
  "key24": "3PUX9thBTXZbUBMSpiQyjaqiXi47BRKYevtug8fJdUV3EztjHLMuqKRtLgPQHx2qpmi7ZtrqiW1unrLkxwjotdGB",
  "key25": "3fVMFJW7eNeWZS5XryPo3TXrzPciFP8obGvq9otXiugZbJo2csch4LJsGA2Y5rJPm2bpTK6Hc52h8vxAfXAfkK9L",
  "key26": "3obwmGAnB7ZAiVRxFMzD4RTTHsFb3zkZ2Ub8rfo8hc3qKdU1ruXZW5w7kP2B5cW3DxEUJvHNm8vdRvX7RSx6VDSU",
  "key27": "4nZgjCBDquetpEmWu3VfZFRyssUSVgNrWm9XLTaPh98yPNyLQwM65ZVoVduwhzGEftBHppcfVkSu11xQRKd2keds",
  "key28": "3FzG4cqBW2Qccx3UisbqeFdYEQCmpfiBbMcdprxTTJZJktrDbVVJnLsh7zwweir6Mwwj5A3Hd8WAef7KYe3EvniS",
  "key29": "3fyeXcS9MmM1Qwm5jTE7oY8T6pQkYZDQjJFVfmsbUwNahDCPoTi4UgJKwjM8eV5BvrpKAgVsSbDvPFZ1kLNis9jL",
  "key30": "3qKarqCfy2BqHz1Y2u5CxTMaNTXpZZS6Mef6mG39fJ6BMCvvoabVm1QX5KEzGN2pnjRa9A48yc94ZzBLfNKaCkqw",
  "key31": "4ydUzF332pjcgH8erhggB4gatyiA3tZYVbGLf2zwiUtR2tnRWMuPxAgBkBcV4BqtewirnuVJvo47f1WjFQaPkCse",
  "key32": "5qD9ifFv4z6MDuguD1Z4jj8tkpxLi6GMrFkcKJqCrFt4mn9zQYAgwYwHAunT9LS9WXStaZN3HBotzKdwbMG3TZXb",
  "key33": "5n28BrpYNLJKv2P9VX9Y5FDFdDdrHNQhdsZWJbYfDWknong9ghhy1CD95LHZTFQEante9HBjYYmXCFnLZM9Xr1ie",
  "key34": "3xYZrW8uX3qurbPdP5af4QApBZfe9Rkf8PSHLJL3LZR5g6zQQ8F72qE3e4bWPjPsJnDGJ2fXvC2ijHPsDy5eQQQ",
  "key35": "vaRCGcV6NTNCp7Fv76aKuNpbjhuJJJ6HbvLMg8yqDAV2hhgrSoBSSViLGXF6j2zUpB9h6FNYRGirBGymqbYt465",
  "key36": "5xZrPRYJXtG7CzzDGs2Vznj5JLR7VnawjcbEWJAEPZrf2mSVoREc5kduWGHNrFTK3StiBj6FJAcGMCDqd2H6QF8B"
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
