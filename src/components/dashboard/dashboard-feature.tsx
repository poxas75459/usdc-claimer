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
    "4wJL7xrLkscZtSaRdHrCsobCAgxPHUY5H6zM6nFNyiKX63W9gGT6fzSvyJeVy7qgMgEd1FgBBwgRUPhPP66m332z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8RHztnnSX8FnHL6hhDzqiDqnigZTanFaCWnUjwrkZPAXVfYni6BMTj1PoSYfNyr3Zc1v8U5NpPdQfoez7uqM5j",
  "key1": "3gKXZQQCtoV9NM9wDLChymrvNV2C3oPkoV1V7w6ZPepceh4g7LSpz2h6AXBHv2EqP1eR6QVg36yAuv1RQ6zDLY45",
  "key2": "ygAKJpixoGeBCfq6JzdTSF9F1iwENNq4tiQ4eg1NYFx9DwfvvmudBRNz6oRWd9rScuKbLJKetiEzozvUC8YsUZ9",
  "key3": "4y5JTRV2RuX421a66qoNbz5JNeEEVaCVBDFJ8ozC9gxcdWZCvrpSsTtkAJTvCzrLJPmqHsUsCept21jHduexFQ6z",
  "key4": "2PMJcDLhWw2Nk7PCLGkYVr9Lbgwe5rKJc59NFTRNzjB3cuTL9VaLGg4BwVqX9NpC81eSZ97znBvPDry8xctGKViV",
  "key5": "2Qm9L6HwNqgkTSgm97rRBEkqbdJGdYcRHFCSnKdPbMLgcgiDMiwHaWccFWxeKGei844s1x1CLynP7E52xUJtJhGq",
  "key6": "4jhX3zNCT4vxPXEhZV7KpQ3buYsfNf2C6gw665SUV9UNhEtVMJmer8R4WGopuzHT4fadwHQXJP1tDzQBQtptJPv4",
  "key7": "2J3joUQ9QPq9myfncktC9hpryP8WpZguY9Gcaegvc5W6DMYrpDj3wkEMD8zVfxyXiFyzJSqWs4FuvEehevKmAj8Y",
  "key8": "57NVQzHsfeHDovMC6aDD5EkRa81u6uLudV5GarkfXAorTnN7WKRQfcRkNPAHhHW2hTuLA7GfuDs5rRp6ywLNXfUc",
  "key9": "53QwCFRJo5k6XSVyg4C377U2BTNdsfGMSZMSa6KtN5nzPPTQoAXipj5TqAyFXTJjAoPvSYKP1PYmo7xjL9adr5gy",
  "key10": "4BLjcpvB9WxtFnqVRPrNuM5CsdJr1JANewGEr77boNzMULjoi1nYdzEDVtXJcNx876tusZkGna2AUb8mC2m1Y5qf",
  "key11": "2qwK23UYsbDSXxnsRgoQq4pdPNrSzzfHsvJP5jhrYBiGRBX5xtYqtx4FMJk3M8YRPi1nPVgi3JEEBN94yZChALrq",
  "key12": "5XVjmuGmY2ajCGDEkSzXca95dCZHx7T3iXrimkKukai5LFkGwucSb4vjmRL8q9HWgxJ6pNRPZCFhBBDzVyeo9t89",
  "key13": "qDajhfRT3NcodvkbcxFH1jisqvoCSvBcseLVEbSFZrCBWY2fDnVBW8CFwiSxUqJu7ZvY5NVbbBMtCzVQ77SZKb7",
  "key14": "2TYJSpJP8oraPoM7Jt3oDcRRYxUuKXofexYwKPZXdDrqNRjZus6fdvMV6veDkiQVY92KY2TwGK8SF9DB6D1wCnv8",
  "key15": "HhhtccBz3cdtSD4xSkXz8D8j5oaMQsVutbRa7PJpBn27XYYe5BsT3bXwgJLg1tNnY5Rg6pfkwqCnLULvKhViVVC",
  "key16": "XemTigvsjmFmYZfNuvLEcaySuvtg44AUEVzhZNoB4kSgeXpBkkGzUrHoBpTVUKVcj9zVKBuuktGovTv2jGJKBfn",
  "key17": "5dMoK1zMFtMxXhx3Tn1JvUvBEaZScoF4FdJ5c9SbMnraRU695kjsmN6sj1zCVckWAoHDUU3EQHH6eyVKJBzkdNh5",
  "key18": "4UuhGHLVt96wmtYofCrn1V11oRK2XX7kBJv7fJMqmxxJcRYCffhsdyvPLfs7rNMXDdcp3d6YSWsaC2Vkba3nPBRm",
  "key19": "5LmGEaB3mtrREzGGM3qEZKiGpu92hAsuZVZEFuUyQXNjMhZFsM1QaMcGowGSJKcRriZL7u15CMhrCD8DvMqRRWGJ",
  "key20": "4ioLyGh79sCMzk5oo3aQq4SULhqmfYSERwEWXWinmuECzut6ZzvnqkW6LP2ArJhEbxwowxAtaCzrTYNqytf5mT6m",
  "key21": "5DfkFVvcSHLf5HFPdMwojrqVZTJJDW3aoqRwRWZmqsqW1XhZUUkh2jBuMcwwr6PktP9f8ZRV4WwxUg1yVyAt1ifm",
  "key22": "4kWH7qFrYtMrfJ63RZXZ8pYUmd8pmdWTLA6eZEzuxir4iE2Z7kKsbpaxCEUALQ22eFdYY7KZmWp8zg5Xi6UZepst",
  "key23": "58ipD4SyQ5fLPkMNxkscVWm5w2apqW58BXyGauxBPcJFCYgibCyxNys7ZNzvfRqW6A6FvguicsFpJL1hcPfYqAaK",
  "key24": "4UhRp3kfVvXDwmEjNxzF9ejFmoaaCUbuuAcSapWsS9VttD9yeKxQPJCm7TK8mZhFNa25YbiCfGr8Sq7fuFZZepKp",
  "key25": "4ZoJE27hB6RSyPMm3GV8gasDFALs2EAPiDRa9jFDdKDhm3RU8c1sqATDnZzKRxUvoDM14YRXC637MA2EzxNCe1d5",
  "key26": "4zCfh5T7FGsRaMNtb7zszY3LSLaXoENezwFdNbQJ5qtgucxt7uc6goXAz3EV4gQqUM4MAYReFEMtw8CmituqjT4m",
  "key27": "P8sJSGC713vSvUXz2Pq2VjaHGgH6Nz2v2TXof7srJHDu2nUa7mALumyG2ktxzeN4Ums61QNPttf37fkQoraLEEK",
  "key28": "4w3xcjwjxMZvEnPju9J9txTbVggu8uwiwbeskUNjUCxSpLAfk692skRb8AnnmXzrEpvMkVV7g1HQ7pQZNvPFcR4g",
  "key29": "65LeiRMa5mUJDCgMr1yedLAk5NMjDWXdjPuc3TtyBkkuEQqeMerUfur9F4KpdUx5DkxcKpnQWGXXsPnzHan3opoX"
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
