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
    "AdGhLPHVLetiGsqWNTQVGo2bLBfmkCCWtHFDgbHNVFLe3BUkq8hPf1ebNnhEKZGjwWzj7Hz1uKxDddxTm48V2WV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjK2z4b3Q5vMBLUBeBcd2wqeroQbg1breh3uE7sNDrNY3d4qohst9k5SRPBMBgpeoWwYj2Be81k1smrHryvUEHU",
  "key1": "4vy37m8EjA8RDNtHobPMzW4pEBqpqZUYSRabvVS8nuXp9fBHW3ge9sLSENXapTYW1BjDrtyGTC1JYMAN8KWwj16M",
  "key2": "YQX4LmDgze83BJHwi29KFA5aLfcYnxvHUTzAaNkZSZBg9vFBZ2uQY3xQSbgrpUGAtJQgDm24HXZfk7YpyLd8jAR",
  "key3": "2VhFH5r25L9BRnPLvsbjCP7g2o3E1EMozGW4fXhnLBtQkdeZfYsRo5HHCnHiETc3cf2e1Lmt1iD3f76wMmzn6vHJ",
  "key4": "4PM2qBtxu37xgKbpSaN4KuZi7JociahLgZ7Fdurtux5SES1nPEP6jaG6iKm18cFDMvtqCgfsVJEwumgtzazSXQEh",
  "key5": "2nUMpAEaD5wbWZjXhRn3Z8eiHxwQhC76eC1zhfEoKmDGuAuShp1v6VRJDjjBbTKMhpLkxiKmDChvyLvrWHtBb4g2",
  "key6": "7w4ctZWfMnNAjFKPnjHQn12Lrb5GM2KmoPvPF62BianAZXHvms6Wf4YrLAr4ZGdZrVChdEEM2qwLbTGdjFauB94",
  "key7": "5C9Nu2ubwDQsqK8w7yJfEN6HVCiigNLM2j1CFtWkmTVrkJZP6RE6xYPKM266LMSMcL2h7rUhsRoUzZmcLmP6GZ5t",
  "key8": "3fABC6e1ZhL79NX8Nd5uJ4zUBCUs1f3UbXtZmbModVHgvDULtXXzqvdVX9V19ceUTyTSVWdkSaYNpFoKV4CF43VJ",
  "key9": "64La9ZCyKVBQXQopSA9J5doXp5UrKx7zLDuy9FpaSYbdbvZWadTWA1EVybNRSjhUwZv1cmNyhFajwDnrdh2fmgGZ",
  "key10": "5np4Yhr7LXZRQzqMgFCM3oJMUhUQtxH6ZmAaBNoUzDVYVoeb5bWZrdLiLnrFwN5HGAFNn8ncxZSk1MdmzGtzXKR9",
  "key11": "3GmouMdS9FcZDnpGmWfhxBsypFzkSc4GYbA8jKSRVJba8qV7BrDDqTymCgn5NdsweZdz7uo8mrRVReTQRgJQSYko",
  "key12": "4TBqCEyZkeZhc5tsyamiHcfB1FvGYyokxy8dvSSAZXXHczWkM2P1gMuBjbcCYgj8o4QY9LAeBSmxfrUmAfKhYsGx",
  "key13": "2t7giWa4Qfwp5UePfwwg9cQY7uYi8XDyhwMp5RqwhY3GUuvARxNkG3im95LgxNrP7YH8jLLunkC6PAr7NT1TQ6hd",
  "key14": "2phj7qETTGsaDpGa5ffPHJLjaBY84uhukimoeZoA6yoRj6oVoTS4NuMJiXG3ecWwqReGs4BNXpNV9iapg1UC9b1i",
  "key15": "2CYiQUWiyJNJnugmGCE6WAUzegMWRDZnRdpuXZcLGvpwHhwdKQ4h48puwwGNr9Vg23VBrUL4X51Q48M39XUQVHVZ",
  "key16": "4K4zAjyuNB6kFg8hLHQhBZoKRm1pjo1rCvuubCL98NC8xNeWgbrbFhXSSwSid1bAUhHcPZRwogMrmcHLt7NtXN7e",
  "key17": "5QA5SkZjzvZk9D72zekLbxtFz7A92tSviEhE9SNXgap49XQcxJrGjeoBUzedfxVc3hzXUGgyDBB98xjgqkys2LAn",
  "key18": "4pZzxXPRH9ee72zbf28JW1xdEWSupximpeJXDKcdzxcreDKuzb9VT73rmhmD1zmkf7rT66kuKZM3rMvv3nSubSoF",
  "key19": "5NfPkDpY4c5D9w6jkSqx8ZF4vjLxZ5AjTiVjsLakEMcKLfiGTaWJr5MM3pfWiPghKuK7fbQ8EwSUf5f5knPXLu6U",
  "key20": "4iBUt78uM8efkD1ttdGbW9bfh5Rn3MFBUaneKfbXqPVNrrL1UWzMQTgmjQYmpGq1r2nTWTknwdHMpnVCKKuReX66",
  "key21": "4PPCuNs5AZFzg6pzogazG5AKAMMSReJqBpZqLEFp4kdo9duxERzadegBGZ9Kp5C3VhhQmFn6aogu3az7qQfZjGxU",
  "key22": "64Kb8yndqU4D8crLipkNHB8PqbMbm5qJ99oBsLcdax5DxB8Q4QZSbUZesuiTXL92NPWp4YRsEaKmFeExY3SLa2HU",
  "key23": "2wyVR68nFYjeoX7v6BocnngeYwhNB86xZmB1KRg4RGZ7YYcaG45zPqMbByVYv9xj11CRzd539nxiL2EsyWbe6TTd",
  "key24": "3rtJ3hqdpdq15HcT3ea1jD3hesCE7mpbFh6ZvudHZwUJMUFF9xqMSbogvsYxYh8P5k3zkgo49PUrTTdLvnZNtKnY",
  "key25": "2a9V5CAzJpGPN6BzkfD4heWDGoEhAq8cVagrFynGzs71GgiB5ZNdUqSTZw1XzYEZGRZcpFhwnM5Mun6JJfVAspCY",
  "key26": "4uHdoKXZkKsAfKfTh8qoeBQeheFsHjS24t9ZzbcGM39fgtEdMsiyU3cMsV4AEEMxS8w1qgzarPPdqZpY8UfHh5i4",
  "key27": "3H6rm1w5PhjVCFHtqtEZ4XyTeNSoGuEzJFjmE7aM35dCjSimyHhsMW36Qrzy7SNzz75f6XDQK3kfAXo962vFBr22",
  "key28": "4yzCQrcksNjQGL6BKVdPd2YLKSYQsxUuTWh5mLivoKzXR7TUdmBjnEvbfkVQDJz4jhRhvFx3BnYFvu4VFs1Kmnao",
  "key29": "5me6VeFZKJVnvC8xF2jS7Wvoa7wfZyVKoFZfh2UKbg8ZroAdEcyqMBorEM7xt8hvqEfSryTkNHHHje8LwiT9iPPn",
  "key30": "5gD2vanytoghaTitsBbaaLTXesb27nECLja43AX4xQBHV1NpiDC71zRMbFjQgb9wAmNzXDvGfeTrqknCgjQykGSP",
  "key31": "5VH8yPhzNzBYZA7QGhs22dRCM7sHYQnF2XCSZSZvTJSmtPMrtv2eC7WdgjsmD8UMBKo3iPHVWMEigMHe5b4cewJ6",
  "key32": "51gqigKS1GX9kqU15aFqRNJr4AZVmS8smADSeC7f2rjPuPHhBPUPegfmsAXAZLEzzFVkB7P4apNBSZcWVjNJtdJo",
  "key33": "39XHD7pnm3FR9T1ykr2yiT9qY1WfSLwr7MAMbNdMV7ZtjV3TvXG42cvhNrobJGQsPGtYRBzY8LY9JVqv3Lo9ZLHh",
  "key34": "22g2LwAfGa2wsp2sm3cpEiBSQAguqFivfhkJhjH9osnSc7ZQyBzcXSeVonWwK5zGHhVh2NWd3shsaxAfw3LCUefQ",
  "key35": "4jWrRCNecSmrZFyPPpEbMnMZERh7BfYSKga7Zv3mF5G5xzzDnahyQAfJctK2DznMP4mUJ4jKNJKbmNbCBM4YKeDy",
  "key36": "4eJZjEWxgUk9x6BqRhePjDUhBioj19XCkk8NBH7CEKyndGXmhTegJ2KuQpNStw8BunJs2xYDkSC4WfqNN6KZwx2p",
  "key37": "2x4wmJ5Qz2SjXdkLHN2S9VTKvoydBSrJzrn997KS2epg6rKVficwYAd89u1qx8A2m5hGvQ8X6TnBDMxDkYDtGnpf",
  "key38": "5q4WrUQFXPHBqvCHAGGGbN7PW39p1NbDodd2wYj9jeViv5jFUJR7psa8p2BJCG6aLep7D1ia3VGx4mgJXZiQ3gfa",
  "key39": "2cDraeAeWbrmV3xajJMkotcofgThNqQSfhosEX2xSUYA6o879fCk46APc9R9KfjcfjrgiueBUU5ayBmpXaAi9Emp",
  "key40": "oJ9EqgvVRzqv539vZWh86WvCXf6mdpqfCYRGjLwpo85383UvjNgnpLWRd6oFFoq4fUZbPvU26LNu6mqCRZXZJDv",
  "key41": "5ZGKbjxE6XvsD1YKXLaXndptsb9oDRt9MLxmW4k3ZYJm7D3WsRWdbzC8HtmDTRyTKZNvJwUUtCgf9TdLEpvaveC9",
  "key42": "2cXQFxM5FdwJKSK5gkLDDfRwdeK3Zj35MhiPSyr7MRLCDqmzuFtYRS9rgamPygEKPXdz12qcQ6frWFJLZCxoDQaG",
  "key43": "axtvuSPcy5eJD7d6Bfx2tNE2oUvGkNpHezSpiM6rY3UTSXupic183H36K3C7H8vwNytNGMGKX6uW7aT5gCycSvJ",
  "key44": "7hLYbFFFSKLXjASvid1oZk8Y8Kwn5LdWpKVogem3fpXadmjQFEu2jhRxtrX3yY4V5LQJuWkxeYoTFvuiu6YVZ1g",
  "key45": "2n8hSQEuKpNoTdtqmqpTra23bx4XoqLNbA5mB2zXBSai4Q8jKQ4iQZuhLsTdG4pdbAeJooxiVBmJynX8MVGoCN37",
  "key46": "z79Z3cZbFjkKPM9ANADiUTJx2ngiLrX86XJvjpR9oKxg1rGi5E4JmGcqsXsZ3XnzqD2UMUHLsLukFPUZE7RDFD8",
  "key47": "3XtAsH7fxmoVPWgaaSeEnCDPLZXrMMaT7wcQhdXBiEGFPVvhyVVJLEicpLSJisDqbZ5GToc1Mbh1sn3Zjvmr1nKS"
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
