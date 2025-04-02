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
    "3gmchzcbSjc2UuKdC2Q6ieS6MsKrL1mPfvupKMmMhkUnZXCRpN9UHET6tW5s5VCzQ1Q14KK2Tk327DixPjZJdwRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VLX11Q1oBY7avRnwmMHzxUyC94QBg5suSfqDSWKGaD1pMvkQwJYDgxb5yWaQkkQtREQoZkYiVpsoy2u8pxWGMJn",
  "key1": "3GMWni6KoHmkjHwEfhsc1GSN13TPiHrmzZkkTBpKHvyzMvSEKXevFJS3QYCAo4Nu1H3DhV2fJwQ3KKSZiFvPMgPm",
  "key2": "3jxK4SpA1TgaXhLtd1VBwf2h6wWZJydcWcqSaNN83LCWpJsexMUKPJeLLSFrN29Nv4TM5Wxc4RBWVxuziGKjZQM1",
  "key3": "2z8zgvqFLmjksGweaQ2WFNSPfFzJiTKcJRjAozChA27uHiDnx1zLHHtNfHssUj5RenQhyVgBz3fLSja5Dy4YYxdD",
  "key4": "Ei1Du7R9pkc8RQX2Z5Tii7fh8dLB5ubCTa7c7pAdDnK1jJZuRf25GFEJciSrpPy2n2sFHXuhoK24EcaccE5FjDi",
  "key5": "27cEaKRrhKLXJwD9fDpdhoY8PhK9ncGexjeYMaMgVCowF88H2uPb56X4VjvD3sRzeUFssRXictnRT7aBQALSjxBR",
  "key6": "5pfyqgzwF7SgpSvftVkLqtTwcVFBg1VdAUFPDXJZtb8TRGnLcU9TnjZpCRNFrt3XEq35wLb8479he6tcpjq7EwtK",
  "key7": "2kRVS3oRpMbBEVtoH3emiULk4BRrmNVAPNaiMmpARH4g3uR93VEuHGPSnkZyZzyRCwSRQspnsWVgcYBZZ4eD2bL7",
  "key8": "FSRaXH5cPVAzkamLAqwU68qULQaEgvTNieqphm5V57DqZnAfDg5e6TQMc8mQR2kACWh65a6B5JEuZ5RHeUJSqQa",
  "key9": "2bpEA6ZSk5RUdRtwXmikhUH6AwDesynPVDg5FcUHWwEswxTR5JUVpYpdKiHjh3AHEsdDsKNXTNW9GQdSNfG5PaKZ",
  "key10": "3W6kUqZUNeFKPSAtB2azDPS7hwNojhWEyEX8To8Y8C6No1JzsgeimQp8C2qWGRzcUzY1HaG9qrLeh4gAKyw6Qw2t",
  "key11": "5i9pvrfGNvCiPv4mPCG86wy1mvizdztMgNceEwvdNM2garsCYz11GZPFekTdRFoKoeAxAjVgKFz65MabBvLNbTTp",
  "key12": "5Jaqb6FknFZG8ZNRnrF9mKD4RymYXCwz4dSY8MTwrmiBJtCbj4fo3H5YU9inqrxqh6TY3hmeNt9mrBZovwFpnfD2",
  "key13": "YVbQduNhq62gdUdHa4KMRM2hgrSsPVgg2fNJZi6h8KUJADrRcmd3B7z2VPhnUjNq8mcSQr4yDdTiFpJQRYciUbE",
  "key14": "3d1RsFbT6xZk1wJYkWQ9j399fhyjL2rHLZKgY7Y8KvcZA4zAt6RyYuNZ884ydbDjFp6NMFUANduc3NtusNfcuM6N",
  "key15": "3DGffVDpvi8EXfT87zzk4St6naoFGKMzjXEqUDDud45AJo384p3tky1ymiM4omTKkr9B8q64zZVGbp8KjXXpPHLj",
  "key16": "3S1GkQsoSpkTqVGoTi2LFwW2FwKLNSeyLW5QdgV5UvkSUaAaPreKhfdMhmz5EmNW8imMFHS3CCuoHJCNEkjzad9v",
  "key17": "5gZtPf7zfTsmE5JKmeb3gjovpcxejK6HFvCpm6SKNTfkPsnALPrcjGH7CZHGp3NhCf9p5oFXZk5vkyFE6UHPdQ6P",
  "key18": "58pE3YJprzf1kJ9bQdrUK8GiBbBwZe6zhuxGz7jrtkefKBZU22jXKPT8JNGmGBqy6dsTdD3Tk3d4j8qz3P6Mvkux",
  "key19": "4Zqh2QJwNXQxXY5umB4qc5sCA4bgwevnsHJ4eyJaLLAei7y6GXYyc7pMg2t7DDvRRiL5Ce4c2qMytSWtQZEgjAVU",
  "key20": "2qscvg9VDqDCQJCed68LMdyDRJppSjiBtRyVaBEStNojaaYsn3t8vBBQedSW7wZFhbxSrKwEXoFeyeXGwy6tPEFv",
  "key21": "5MEvT8PngKJy1HvnPsQxpqJah1vqBSuMd6zx4EPpdiagVgcbGCX5JtPEfk2gqtNViYA9p9urZyvZfWkghwuhkF9V",
  "key22": "5wuwTAZ7FZdCxCrfDq13B6zijrZs5ba5zrG8AdqN2vRccgjgbARckcvh8BPLTNt91TnDxYpsDNbFQ5J7nC6VzeGt",
  "key23": "4R3L2RvLKtF8gZG7s7nCHU8LxuQ6icLy33MZqJ1u1zvz25APbNybKKikLhDEuHHqhZxKVFCBrP7k4d829RRqkMPv",
  "key24": "3KG1z3xvnNQ7Q1QPexTzuXimXFDSiyEj7Z2tZ9qspUnemHK7S4bcCRBBe9xbHJEaSJ49iokdVnJgpSB5LsHnaU71",
  "key25": "2KHCDoBMzM57oxswfewwZeQ3uwBsoaMz5CNou1omAoXQfeFaV6zMdQAeALyYAsmt4UZhKn6wmvif9ybGCAEggy1e",
  "key26": "4z2AyWYDV9vLi5JtxyR5gJVqD9k9Pb5qWwzMWJwT4tV3UL1oxEQsgZjj6c7ViWLkAg4Sp4QKe87X2HuB9LAcA5ZC",
  "key27": "361iwdJyYU2HhQYuZqFJnAixVcHchpaQUZ1JPWqCCAh2nnyDSYxM1xKUQW4D9a5PNSBWYQgiWR47vezzicUhSGeT",
  "key28": "28JcmEHji7B5mjbKT3Q7Dq2SZmhQp93EzE7vsQ7z7ebEUCLw1MLw7999RiWjhWJzwFy4az8CgWr9YiyD2xmsMB6j",
  "key29": "CNvnEvyrgPaeubjypmbFjcfkuyaLSQAcotFfWHJqpRQtRCkdcPXdrs5ZaJraied6edTPcm9YXkU8od8oTPpeYiU",
  "key30": "5qjUJLCtqX52LoqQ9Qb7L8J5XDiWY6Gzz1WeGXyUfirVsguiH1fuZ3uHMKepQyU8Z7EVyhiurYFNaENiFygd7rTo",
  "key31": "gj184tXngAMLECWiChqv68WcuqZm5oBTcJZ18otTMCsieKNkdZ895pkQq6UXbvJFWdck3LYmmoV9oDsi29Hcv4r",
  "key32": "3aJ6MJxf3veNMZFNvGP2zr9g355qTpsrnXd6fE9XuCuaQDVZUMmEbJUDVYtDuuep6FCo7ff5CecJErFv737FtByP",
  "key33": "2k5PWREAoHbR6Xt9gonMwX5aZnEERCAzTXW6fXQtgdwxykn2JAreezWht6RqgQfAXKTQAK2MVHiXDQTrzumPPwNw",
  "key34": "27XaDCjgzysMouE4Y6T9115ZuiicBgQxeiEVigdmqtGERmk8tBxWGUbwNyfXRpoV3NV7M48LokX7r2Mh6zLJ1sdS",
  "key35": "5bUBAN8LXic2oBeWQwBMnb4LwYEapyPzWio57brGVDiXTGuFuFxqUxZPvPAZDQ27AHbMzdvRqRtbTadx3P7KsZ3e"
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
