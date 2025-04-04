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
    "R7bt3qMBDHaCg6jtuNuMKcK2L2dWEYsSovExUwmfmNSAiZzDGCPhmAyaZUNVv5gex6ifrWvT92sbBKhnLUcNemd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44BmtAVSDHM7Bv6fkCh96eKg1od4vUo9qRJKRiTyEnqLjBdXsPe5FUZX3FUiL3f1t9XdSgk7ma5qoqYwYh3tLL7g",
  "key1": "4nGaKaVa9Tjqzqpc53tbbS3b43uF9qfenYMMssv1NVwfpqFmhABNPSyVRu36qtUtnGfEvjLmg1GX2zmTxbDq1tpf",
  "key2": "2aq6EKc5Xnwhmw1PG9EKHYHpaivpEf9srerEaBdt3nfuUkMWdcRSWTTz4FMCV7VeHiCN6UZf3UVASBHBSuM6tsnw",
  "key3": "bwzgPNqyjXFaLJtJGR88BAMDVpJLTRqd1z7cMJffqQmTiKcuJ52sjHHHtkWLApd6kXNHSEEVtLDea4Yc2aFGT4C",
  "key4": "6c3Seu9h8VG61uJ4Fpj4NUZ8MjvQX2BsYAG3VMvu5JYCQEeZw2AisTotoHEYfQJSDaL54mZfS1gjjCURuMhdi6w",
  "key5": "4mUbMPvHxABMyBCouwHvUEEhosLDH8mxKonprV58ZTiJGUX6zD2a5Pa66NYei8338R4zT2Rgok1MyTL1qYBMYw1k",
  "key6": "5k7bTrFGouJsJ3uHVDpfEbsHyVhmSvWJQDQsV5QABQ8fCAymSeW6oSyS8E7F9PRZWvEsnCtnhCSCvahkjZQS1tPH",
  "key7": "3At7JstrEVdoSMCXqYvYpHAmyxvy5B4sDPkgHNkLYqarik1a8V1aLUNvwoByokF2PBFx1mTRHsHuUtxrGQ3caoJo",
  "key8": "cpTctLMzGm3m5j1o5DezdMGMr9vXf7N5XVqLfFqqEbfgps9X8PYrNhWBRWCyUbdRte37oeD44KvXB5dWAyNj983",
  "key9": "3CPH7MjQG1Bg6ckXv4AfvK7QC74X4zKfVRskYvmGrSFNU2YXfGJCrk8w5edHLFRAqBg8MbEkT5yZNuaVL7GLi4p4",
  "key10": "3UR8mrj4c4BaD6DykUsjvHZ5SbbjeFsqekaGuFH9FhiBPwApyqBTtNVxibfjaQusjsScj4qaZv7Wn42kVka8yM8X",
  "key11": "2P6d2hHzvoNXBgDex8vAkH16R46ttsDKGSRwuvkZj3KwcJDk82Uq1ZNmv2137JWzsVGn77B7zBbgTDp4wFEgge4q",
  "key12": "AtfDwpVNSxMRxxJvXkjah9raDf9RHCeQTSG818PtYruNRW3goVWAS3U5bJGkRQgd4mxeJFf9QtsfeMJhWsEG42U",
  "key13": "3ynuzcQ6eBbEm1QUt6R5SFKsqvAMmfrndGdD46oKefDokf4GgaZfpQpJdjowHvmKhKdvDtiriFe5YnAgEMQKHgCp",
  "key14": "2k9Z7uNKqZiqxj5AZQPANSWA9BkGMcC2UfoB6RUXp4Z5wxjhnj57xkZDt4AnrGoQnR2TPLLnNHdaRyvWDHQ1vcuk",
  "key15": "2tKBTMAzYnEZFcZzc6RqbG4nTVzZCARcfVEGNLCC7D667bpCKLEk7rj5bT66wonJbBqXCYPrMg8ENgo9GztjVStS",
  "key16": "ouhLrh9LEvk5tbbJygU9DjitAgJkmSiUTrbR7Vxrr2J7TwwSyBaUA4xToZwU6F9ZESHwkHh2fbcCe76jCg9gavj",
  "key17": "vMuFCN15meszZCBZdtgjQuCDqbsw9uey2B7TKaZFNkMiSWATL7wL3PN3SDMt2soZxn7c4pyggKUW1KDM2ANAJ48",
  "key18": "5EtQLtxsH8KygE7mT81B9uEj3XMH3gGd4m8WfjA9etH8yu9UQfwCFU4GTy4KwVDjnntUhGtSesCAm9zm2oPF7kZZ",
  "key19": "3BQiiPCNTsx1n7UCyHLGXmVG3Cfp9QpfEdko9wEg7RWd8S74qzVSkSNUQEdy26U8wi1cno8M9tpY2oCuxuQgHWik",
  "key20": "uWSyrm97M2sLR586PD8t8sHdTYhFU7N8q3exhT4XwaA74g8sa3WkaTo4yCNYb3tSyCeChpW1EwTU3jpUdbKxw1f",
  "key21": "5i25dQFysm6VHrhxaitJevN6YYdQG2PG32B92ePT3zozqe6b5MpGfHui6TFYSxgawvwgHNj9wMaRWSMXmpQeDbcq",
  "key22": "5H5MQjHYRXw5HUaJ5SvZ7yKDxuRSLu4XfMLUnjKi8JMfFnDLtSo4HCUzMaja2psnMdYZXa9SCFB1TpfpYpdi9a2M",
  "key23": "2PmRniVyKxeGfavc85KMy75QTJUZVJTZcEWnDSbHGv1k88HVigbBR74YK3T2kHqMBoEXhGszGpVbNu6UxQRHUBjR",
  "key24": "4gt1xPd7k2CNpxYJYCitzkY8RQz3VLwz9Ud58hEMsEFvscWT9gKk89hzWWcUcUh6BZfB7DkF7gHqhuRYs5sJ2bWT",
  "key25": "4sdQtLiJeUAL515LcqDHtY3WAHiSuvxUs2rXmHXvBXnXoz3iWRFDkHdgYv4GUabTuscqosFRuVeNaBEGQCkpbKu8",
  "key26": "1D9mNh1xcA9ff7uU2jned6PSPUwH2rKZLkNVPzdaJ5gFDCyZREYfQi2Dz3hBFB71uy9fPnZqw8gCBGMxQVzGchE",
  "key27": "S8kwrC2Pk1Crs46EwyaAfVvv65ntQvczeszUXd4U5seYrAZwTCVjvqQkVuP6929mtQRTMsxPNBPuwYwFJNe8hxJ",
  "key28": "5eHRp96LbNPtV2YxQMG4omg6zBK1Q7Z4UBpvkJgGytEqW5JB7NV4ELQQdffZ5exikgwm7PRkVv7N2k9xXdPdQuDF",
  "key29": "5oDG6L4uboS7WgDe9HiopALZKzMBmKBubwQhRa7ns8P5m6VZHkDaHwHEHUSQuvcG1G5VSw5SBuKRPHrQjgfei6bo",
  "key30": "4VDdivEWN11A4LddjDjxXLose4SifFf2u1G5p98cFeDhFDXHcpTjTg8DRKufCh9mZKQpyVZjG9RnretaGzCVyqG2",
  "key31": "CpbqUNztYPNZwkqed3pb72SQGPus9gamZna2gYZSTzff561PwcvUtyKzjAY9sgYHdzpqH6k64ebKh1Em7xjkXNg"
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
