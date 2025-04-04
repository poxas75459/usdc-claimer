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
    "3iw5EfpMHGqy9Ho2nnLZbv2ve74mraqVuQdhWGPZ2i7V7V5WxzFzuMgUwj1DUDPWDjs6eHij5LccKo6TSVgGjzyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2spSB7ptV8ZAbfuQVVPi9hS9LheJ2sHJDVNVynDNo1W5LqyZ7CsxRjDd1YrTuhf7Hz675PD9tpMHEhcQBufgnqKS",
  "key1": "4PijCCEZZKHrNfTfDYG9AsB4HskKfjjciBkuLaRfuFv9VjZJiEysPWVAWWgBQB4YAchT64LU2UxEZPSfWLCpy7Cs",
  "key2": "5KoE5bBuxqvrRWT2WhEhi5CZjW8HfpPy3t2wTpZDX4Dv4ZmApem5QwZzeSF7Ek4D4rPWpuogMBUjAELusKhaSNz9",
  "key3": "46ryanoHv2fTZ6LKKuZATgh9ArLqofA8qMdc1Zc7eBGkfS51VpjEPfdpXGGyBCuDDvNEd9JX9mwitzhuPFyabYjf",
  "key4": "sQsyMVmqnPgnoYEaG9be1ye6ogPdano8kjf4Qq5ck9p1KMCyzmBiLkfQGE2q53HjnMEMqP6vSnNs9wbo26sofCF",
  "key5": "2b1JBjq5v1JUSGT47Vz9DTBDnXg7gQDH6ziAf98edr7xBQ2y5EUupXzsKkLG3MifFxy4iFVqUmtTez8c71MAPQ4e",
  "key6": "3yeecoVMLkKW3auCXemXS57evsiHMcEKwXRVddYpAyxRP8r4AXc97T19cgJfExjwMcyBYNFezNHfMj3VJAybk5wn",
  "key7": "56XuzjRZfyJMT86AXJxqQfM1sVJejTUZwpf75eM6zLk16ZLjNtRJnaRqD7HvUzKvDvu8dbcfPAGnqjjUviwugAgd",
  "key8": "2Q3rxoQa3pk7VEAxPE6n5N7qJJAS5E349ysx22wmnSupb6Gv62iaQdaurm66KwCcwyGNBhRYNxfgwsVEbkLNHZuN",
  "key9": "5RFATUX27Qg6iaZkGeyhvvgfRDWBh8XhbFDR38dyaRajA1w9Tkqhfcev9YQiUxPgBrpspGkYGxAe8hC6x6RGtKJU",
  "key10": "38u9W6UyBo7U67j46j8upBT3E7aFbNMvsSaWvfiHpkdw7b2nqZcMjoJgtUtvXFCbDT1nNgo5thjc7LELYYVyqHYU",
  "key11": "4PMp86xaQ4vMFDQbD4D82Uk43yoogjpYQ41N2DyuQajpo9LqjW977uHMudBe714SLjUc64q6ksUgH32HWsveY7TY",
  "key12": "5LzG3Ek7QHg9SXH2k4KHXMwXMhiMXq2B3eowdXgNvrHFfJHVYQrogbCxDzzxBQkXM5jbxiF3fczEDMkaaquSK7q",
  "key13": "5AS6tbqBYoVrYJiAQkNJVAaD6G7hwaMjmEy63586sQAT8DFwiXd8yY1v2rqSZgwh912TEgAWf81KvVKH9ix5rMcd",
  "key14": "5418uPUMFSU5qf5KfZxrRmNuA9PCwPk8JSiSLBwyXznxJcuNcYj9HMvZPj91wfXBrGYELtqGe92QSbb7GVGEK7xZ",
  "key15": "3tshNeGVCcJxVVfH8V68KAcJaLLKXEauyEAN78ZFxJssDJB8RCHXe3S6JRxtKjhSb2kZc5ut7dvEeJznp5dYYQ5N",
  "key16": "3kABfd8j1skBoXvUbSiRWcCQefCahzQUikExCRLjzxhKuMFyEvPeXtTNWt4bBSRtYJjJ34GaKBLjRJnWBakv4kDP",
  "key17": "qdi6bhNbVuvNEE834uzMcKemDRrLBaxncsy7gSRfdZj9WcZHjNFVAD19NoQsYMQ3gR4HiRicphHbpVH1KEpAKPe",
  "key18": "5sDDMgaC4JddxTSHZS8KHLpcgDofydAmuyfycZKu3z3MtE6XtYwhUsRdfsYbhbmMunjWK3JKadpn2fZsjiLAweVF",
  "key19": "4TJ1XUmLkDTShwxxAJiYJmdCuuUP12PkC8iFvA1MQCchHGPGHC3dVgvF8XyPDzy77TAWzuehxez6eyiqJSFpbzLG",
  "key20": "5X86yToAUhqjWqvLAeS5HyQa22LrVWJTZHrbAd5TRfFFhvZwcBFpvqoNDUYwmoePoE2WWUakxVXyXm1tW6G68YEJ",
  "key21": "5miTJcavKFNX8syngP46JK1oSfUaxSitPQKBkxRgU5QqLpeMU1heMnundwUGaLsy3AtQ3NStv8LiaV79jLTJDUMr",
  "key22": "uuRAXscjFPKa89ZXgckb8bJzf4Gr91GgJdaai1MM7FYCFYAiuMk8M8NqkTJrBzijNUJLJw4YZhnHaPXKtDJ5iGd",
  "key23": "3SYHQ62nnyNBu8xdgJkD2wbxnMfHoCYFEymGBLGTqxrkoS7JLUn94GEq3a47VWRsjAweGnjQio9MKv7oWbEkpqVh",
  "key24": "4hJaWSYML4WhrXet9N3vq1iyg6ssx8beb72w8GbECps6mPd2CfpdtbM3qZcocPyjySzcQpCMGFPuugsL1oeDRPeP",
  "key25": "34qRw6DwuMyhJ6Er9MEvb6DP6Scit78BZdmj19pakrpjyQrQ63uaHppe6KGJaZmH957X9iM7UrpSYpKoPjz3ai3z",
  "key26": "3AmkUAmDqBv7fcZK3THQr3vzH7f6Fqt8AR7CrpXBVdQ5FWyGW8Xv9Y35hxGM8pgXoGPDL1nHiqvPrkwKKwB4Hw6N",
  "key27": "2c5ozfZyUZvGdpARBoKcipQNp4KDMmie2aEaBAEWG9Jjspr6123qqSNzPzx9QXftPsKvazfJ3BctyZdRVtA56gSe",
  "key28": "4RRSDL8dddN6TAZrgfLDLZjdLyyyK8AoJ5xLvstHtJvw9HEUCWKgB9cL8XXirH6DEFvPsJyDLMTfjd51uW5pXThu",
  "key29": "5renSqMtcNqXuvTMGm2yaEvwsKAZxNQCugvoYYYMdmzVK2hfLDQsPmXcxLrpebXQ6DsXyrVdhNRcVX1S4HdvUYVV",
  "key30": "2d4aDDpbsuMkk6fkckZMJEiaCcXu98g7SKoFTPpS59srJJeYfLkDuSsSK8tubP6XMZVDqrfP81hBXbqQU437eKN9",
  "key31": "PZfVcnJzDhhgJKUpLDGki7sdTuzzrbRDD31Hq7xNoQ1zHP6VSKVQJRxdsRegj6thzkR1SkwR45oc8edoYaT2n8y",
  "key32": "tBykR2ru9EewPS568VGqwY8PL5KNfhjtstAVsMVrm84wMunzkL95n9zbCCfzgMSN5c5PLsQnMQdNYhMQrHZ3Wbt",
  "key33": "36TbVtu7tSrMxBQ9a6mKaPqtbAyo9TCe3YfYCqM6de6MoU7f1MfQwmeC1F2eqyJRtSn3ojeAtq9u65b2ZobPhTP4",
  "key34": "5oxRWGHm2kJztttA77jiYjBZUBym1owjbwapH2RcMhJjTtBhJCsipuYswh4NCnMvceoiib7CRUj67yN6yc42qPR8",
  "key35": "3nnZsvn8hqyXbhG3V2kLcWRLHbRtEk4JTSQ82tDm5CcmdimQGT8uMNWh2UztfnWU6pthpMNLv9UPFyE1gHcGCmcf",
  "key36": "5QwsQ1nHffd82o6EcyzgyBgLhyomY1gffkC2WfDoaMyXNfWbxj54y97HSLnNAep6hWmkHkzDLvgvsnPgeWqPc2Rk",
  "key37": "33psoJLbBpZhYCSocUZ8BJfpYxswxPsMSJQw5ryWkRaW1ARSfq7HVMLDCxXQCcnn1dBou1PUXHWs2J1iyK6d1tpr"
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
