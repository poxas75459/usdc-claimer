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
    "3Dxn2C9qpMeTCSqfqFMNGi9DsV3kYm9vVEKZtpk9DKUPKFHhUCXPPKSAR6rhbrA71aMpuYRSyA8bskVqwZV56cBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFMsVP2DAwtrFdXJ4RzE1bCzu4sA5hxdA2HWGFhRvSPsiHFu1E9DmrBvDpi4P26goTJhgivhVK3Rz6MNTMbhRsG",
  "key1": "397QMz7dYhwQXnprnWQnjhJQZcat687AdcR9eBCTRkijiNjxua3QpvdTcuPPn5XFsYYvNFXFUCdvdunv9YERnXfN",
  "key2": "4724YUGLyi4epFfmwBVWYAYjNaeN3mLQBmCTAY5HMgGYkpqAxUv1CRos6p7qMEfKDviKuW4PANsDNcKtx5bjhE9Q",
  "key3": "2akARhJ2rfWv31ESDYCe2h9w7emY4BHxbuVXjQbupraHRZbPSCRCX4nSUE8bLiXk7e4wtrbAmXEbDis9MYNb4bdz",
  "key4": "3Su8LqeGr1DVYpPWLX6jYVucxqBgGV4NBUTULRer6f3eoCvSmC3zqftHyMrGLZ8XXXnWFvHVaSxc4UZ6R7Kua5vn",
  "key5": "5B68j5RSp76EFjZiq1ER12n7KxCbfHnYpthroPwmeTDhEQKYSb7pkxizzoVEEV8PFWkqaE3TfW2EHXGqNHF6M8He",
  "key6": "4rSz2vv6zHNvW4LLzb5aEEkocbkn2d1efeGU3x4PubgMFCmwffYMJwhGZydbGu25sns7QNUQ5HjYEZDa6UUexVML",
  "key7": "5g1xVNsrhLRRS2JgfgM3WBeX6sAWRdrrrKpeHhKCn79ssS8CcseeLSQuTjVx1uuygmQZTpkZcWED3pSH6ovbn6Q1",
  "key8": "4bpNXo787iurP9swaCWbnLJmukf8ARcRP7HH15B98bmM8h54Ehyi8j7RFN8DPJHWGLx3f6zRXCNF9rppi7yVo7eB",
  "key9": "q4YHCkAyvxapEEqsixzxn59SP7Noz4DCgQQh1gTVJbNkzdRj5hEg1MGXDdq9tqTW5qxabdojrw4V2f7eZZv8u9d",
  "key10": "3fswAk5D2QfUjhKtdUmBm6ACadfKa34ZQyNikfh9J4wtSg1z2wSVTwg8YQXLL6C2J8U4WeF5kgifnphNw9Aa6Qbs",
  "key11": "57U1DNLjneMWyYA3DmgLYB4phGRjZBzUC6ziC9eioo7bgWbRXbKAS8MTjNfQd5v6vcfkQb4uf5rv7bpbjDCVeFYu",
  "key12": "4FCXsqyGYN3YBDgKmkgF9srsVsSyDVTHQBdEcDTDJNBdHKGVn75PCcDiinhRk4HGy3xsFQLue1Qq6xVWQhXTJ8b3",
  "key13": "3RZwSaeCowMiwcw9hRg3QzRsWr1sH9QZhqaL7qw1kZP9CwMccmKf61U6H8LqwkjcRzToPcUSwmgBWAnJqSFamVSo",
  "key14": "r8fzTaP6mgTdoxsscdkBPgitDDcrwdm2wS8uuL2FFbEPqaz7YCPozPGFMsg2vm2Ab3Nmyyfk4BAppVFLqtFxUzA",
  "key15": "3t7YcjyYUQZovjVt6EDLgymtjeoRC693fVRrotg8z4fZZaS5qMkTcLP526NzYpXvxfCohhUQVWoceq9sQUAvd2PJ",
  "key16": "22t6birCJGqtUjzdQWZghnuoqHwZvR1fH2xUJgev38uRhQ5hPxmd1dbVjDvzdbkvhc46reMhihKzN2aqS6HgMZir",
  "key17": "2seEKfSfZ5DfXZVCz9g46kSExYXjuohzNCpNvFjScKYQARvppzqCrhGfDawqSVeY4waiAcEZTqvfSPj88aFTazh",
  "key18": "4pgVHRE2Q5LMYwHeTv3vntnbgc2gBYq4XbVMzzqz9ieL5ezCbFouxqdBFRz5k8jt7GvekWz26pnuLHq4M4n6nQJV",
  "key19": "34qe2BoKtZKSyKDTFJedwu6KPwYvDXBc2Wmd2Qx79XGo5bkwVaRg4dSkNHVbwSpJiJ9j36ohgXTCeQjnscsvbtzd",
  "key20": "YRgooX66ASBN1CMjFtBcPAFAFXVUGpj9RHvntfF41NNDBWECDxW9rMnezcRegWiio6DSiwEbSNU6u8rKD74X8WS",
  "key21": "n31fJ24WXsRzQoEsyFXxKDWW7truHdA76Hxxjt6J5rEVZiky46ab9NDtqcvpaGKRg8Qo5dBLCMzL4bLYKQKV9ne",
  "key22": "2GNkRsuTh5rGVhfHBSCTJVHqKbeYX5BCZj7g9BpKPCVf7nrWnEMYm6qqAqTdNGMJ9cAjxHuGT3vffS2BJDcqbg8g",
  "key23": "3PzkukX5bGuuJRZpuTTMMpCatxdXB7L9QajetSUDvxPVTC5tTmxdUNyYkn8zDyeeHAFYrfVVkNNQpES6yfhTtAzs",
  "key24": "3G4oE5xnpWReXfoaEw19cteBT77GSSrCahFaYzHSgmH2roswoa2R5S6LpsEpgLCh8Yc4BYRFMKHzLaMv7nBysndr",
  "key25": "3bRGFZo8eiyx38C9gSc5CfMfFkpga3wTHc4438Jro7WwoibX3kxyyh88wJCNzF293hxV3zGSHHN1oTJnRVfgxkfk",
  "key26": "4FkXwSGh7z3jc2khQtuUNBwLKDBya3UoAdFQLxNSquYWwMjbv2y3B7q9FV61KJNXDhXifRuMo27Mfr2iZLdSMyXt",
  "key27": "59JnBQwE28hvTdfpWfBUy6ykspt4zifkAKz692c8arxwcngo8jmPQx3fSZwVrJJqb3kE4WqDTmEMRFUF27Wdhwht",
  "key28": "2UheEpQDFGPFLZFKpa91sLJjy3pGWJzenRtcR27zD5HQPe3CRcCPS32Smk2GrwpipkKy2roZi6JC8ez8TnBVSv9x",
  "key29": "51MCTEWQpiFnjHk3pdHe7DRTB5mVda28ZbnUXYrzdXfrYTQGawXskMg5x6FGueNTaKkMJm4PPzn6vt7Spmwb2Yih",
  "key30": "3nPcs7LxjpKjCkoGMDdBZYLCQRGR3349G3uNCfB2MyXJEvGoa4DDfSZG1B7KMXj1vyxXvMu89Qv91AMRQtjX6cbq",
  "key31": "cUuZwtrBz3rSync5awR7hE7wHNctMgztG1iJWLfoz8zwYgTfR7bKG3hopiJowfSAQjKqLhFGYstVgAZksdvc19U",
  "key32": "AmtbQisNAjkE6ed22JnJ9nZ9dttKFrLJ43PWxna9PJZSwZesvxiQtmZgZ5wxWUnTU1WsozmYErxt3QfKKgrFKFW",
  "key33": "3cFmipBmAr8mnqQinTUKvgyAn4sWicobtYm9M2zKuPWoPgxw5KM3fEEMvCi9hWrR29Bd1cbYZdV3V78PYKDb15Zj",
  "key34": "2eaSA6KArp21nbpmZaVgnHJdS1rbqctmw6GEPfSAb8Uynifn7GMuCWg2UGJaarhXsLkrcTYYSjNCUuYK5k3DaCQ3",
  "key35": "5f7bUQmECvC7twFdyNtN8hi3RANgh8MV6e7qpYMz1AjHYeCgYD1CLmNhSkowyPRT3iRV1Y8V2RZcqevD95zLneH7",
  "key36": "3M6qHAJkKoSNUNNLNvk6UTsVu9Mhjpt7iPX3W1UJNcjcPfNWiU65CnvKtpMbguiMU78RT5dxvvyZoED1EpRUPcrV",
  "key37": "2xkG1ywiwZZikLFZQU1vXdPqDyXN5QjVUpRwVnZjfVmNGcgJsTe9exHH6fxV9TYHDG74vPx16PpvwMj81FFX1EkN"
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
