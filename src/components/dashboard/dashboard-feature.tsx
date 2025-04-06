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
    "3NS7Gqj6CMJaqnGpguHvURzsJ9jNNeT95WL1e6PD4QYUXiTkNjtFTtbmpwf6uuDdgBMtNMWSJ727fSAWPFHFcj8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WSKmoTmrVQ98hSYeg9A1rvPDSzRKrZQYnBCUr4C7MwGJu6wxi2U7mnbYcE9p4yxDjF4kFyuEo6uoiYvaHEtXFBm",
  "key1": "4wT5SRk7XvPydq7Majq4C5jYXKG75vvdjsNeM1U6c5T4HSBJyqWYoGDphkUEB7cLvkhQqe6HB5FGiqpPMuZbPd4Z",
  "key2": "5y9HQ4MVG45GqGCQKTAiWiP5ZxiwUQ1qDxSjG73zyc89LKg4T5FuTSd5Ubf67yBaTgm8mtSUQLj5F4dQNnwRqe2F",
  "key3": "2dv9pGQWwJzS69xVY3JjoTYHxSVgehFVBdBiB1qGRoSpEpQh6nsHXha8mbupgWfFUmQrKQ4Z7RDU2aSHuTUAXRYK",
  "key4": "4qciYZxHVB8PFyA34UmheGP5wfGJhkgKJh1R7nF5pSFFaZWTzACQtL8hM3tyeGn8iS9cmwcxmdC86WtYiawfX5dQ",
  "key5": "45HgYUGwiJzTrQVFSCAR1nJRqhLzAPcWoZQxRPV1u6hpujboJ5G5BA5mbyEomY2yvk3JGhbxrU6UGy2jZxm3tB4Q",
  "key6": "4AHuDVMQ4wuCz4hjtFf91BnwGsFq5vDTGxktL3oUWQRRvtDwxsw9tefJtxysYfuF1KvyE1QqJSEoHybiDitpxqbk",
  "key7": "5Y7mwcRckjMJxR6qWKF91hSn9f5qkeg2GszACFQasGCDb6ww8GBjrhFrWTEtSAMFVCCvgwQSp9dsJxvZJvDqV5C9",
  "key8": "5f4mu9CQEdXg4MfaDokuDvg5yMiyVESNMXfSPJGgyALSLCHbgpppM1848v4dp93ugmRqMXTgACXvi1zycKai6nmS",
  "key9": "2JgWZahCFaNswSiF16Yk1CRTJe66wYmhgGWUghhqbTKe5mLac8DavUvLCZ3a4Jr4JNFHySdhoJxhwVUGFXJdNJRQ",
  "key10": "5zftG3mMkxELepBV2oVTsb2rw1dsarzV2NVkYv97SvW46p4CrcUAA48942cTXP5Sq2d18d5Vb3EcEdaggmkigod1",
  "key11": "jFJGLzMLDCauAPiYYQd78EQJv8Ji29XifZQ6da82LiQvmPbXK7jB6CAJWrVH8EyyxPykuxNCcYYntdHC5k84aSK",
  "key12": "5Jakz8E52hPS6pqCs2baEdStYeYiAEe1c1iRmiC98FF4WxxwEStnYurvFoja1R9ooQEPpHwXtHuoXtiiKoQbWRPk",
  "key13": "4A1LVFDWgKUUpcguW8DUJmwTMDSyzRhtL9iqiavbL1NvZEqcuwdcqJVL7RW8a2b6vMmZAWUxmz9jHVznN1oTBgPh",
  "key14": "38qAJeMndJvtvbuVUEQ7b62P9DekNPRoLF7U1cS94c92STk41DQUYo517RNpkFfqyWK9o7o4bAh4hreiu4UeXQJQ",
  "key15": "5kCAYvTysmBm8oLdkxTBToTqeenQUdcQ1pavUqXtZVcFhgHbuN8p4uy2YmLeQZuuxjoSv4HjaJUgmBQaRyTuALXM",
  "key16": "TdJjFjydLR9VXGeByHzPoqNx7n1SNo5pM5MnELMrc3aLUASwX385Wve6uLmundrxTmUTYPZHv7JPdJKEqbW1bqv",
  "key17": "2FYnJ6GXcprwF5KBVK5AA4V5qWzM4MJkLawMztQvxohQJ84htMfDyrwaZVqhXM2wPDn6adxro2fNaDQNsCouWov",
  "key18": "3gW6g7NiL8nFtTUXhVPZdf4djwsiDApPQwkQfhYxbFRvUP9Rb3gXjmhaZJWyLebkVQ772CnbZspJVARPxvsxQ9At",
  "key19": "5w5YheybjSxJgmg2953nM2FkPHxzCJi1hBkugM2iJJ4L2N9Vbu74YBj4SDD5AVSVcfRPyDerDv4Me6rTeaKJcp1T",
  "key20": "4rVVWMq11BUpBxzTSPwnLq8ZE3BvbbAJt4PBezEuzeqhTgXjULZ8sBmbwo84oME67QoBp2SErYivVMfiHwVAarkB",
  "key21": "4uJesefs2LJSe9oq6NUPDUa3u7itxUEkpEVzhM7CRuVd18xoaCS5VELBapSduZdBf8JAF3iszWvEmPqiRMjSX4z4",
  "key22": "3Lg1Mqjy584J5P9X2fzT4fGGDZZxBE66NjFJiYb7AjGwYs85KmGwZcHjxPdvDJGDkqUAe1Pitzs2r8UM4zZFQFEJ",
  "key23": "32nBs3tRHbU2QPMSnFBiShPZNA6XBW4etKJcEXisiu7MUpvPXChJvAjSqhDqzG7iF7KfNvfmAHy1o6g6C52fnCgV",
  "key24": "5gsFMsRfrsEQM8WVHUZ4AJXaVNFAsv4tmbUE8Wj3TCycjA77gDwkJGjTKqkbRb7mJZGJbXvhSNWjG9z4M1KongJv",
  "key25": "4vokjPF2W4Nz679kGkxgmmdYY8XVQgtMxzS1CkwtDxNArYFMBf9hNStcqnQ38Xc8uMPHoswAcVrY2W7X3Zg2hWUi",
  "key26": "3o9kSzjdfYSY7VrzjrpsKXJWiSMwCswWindY7FAce5UcSH2AHQNasN7GQcfydPPEVyUA7RmzcHon6teT1tCLAKpF",
  "key27": "5U8cdneZcuWgxpAtTNeXyQUZEyMtQ7pDkgeoCxj1zzk9CqDb5APZoe9n3NcW4MhvSRxEoDNBoTuDPux6r9mRegif",
  "key28": "3bZ4ZN4djf2zyWiY81HisrLUShb8wyhpRsVMuxn6Rd5EWMjLF9MmzpCAXptHtRJkuYgSFyhwxfr6z8Yu2KUyvZQD"
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
