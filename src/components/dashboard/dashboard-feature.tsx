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
    "4qsK7bs93os85ubTwdpfs18Xce5su8HZ1pnNJfzF726CC4u7ZVfWkQFQoPvKB8DVxrteDG6Xnvsa2NjS13waQdHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E79EqvZTUAS4x9dzFr1Ai2X5hQfZBiDeptjg5EFMVjhuVpzkEGPuvjGBGSqUtgT2X5iM1ZT1hUpfz9FtmvG3WkE",
  "key1": "LLc2ruu6jFNaPfbzx5BC4sDctmq3ceiu3aBTHn9CwwG421yBZtiT2vRk7A7Yx2uFxQdkFWs6gTrH34Vtu2dvgko",
  "key2": "35GegR4up97Kco2uDH7nkiBEVhTEKrX3FGLD6SNyyvykEQgBv1vDiVrkKuzeGkpzrpRcNf3TjXZEties6TyQNNVs",
  "key3": "3HK86Zd11mDfHiMjXZU2AUgZJdZHCMtPYwpnHJXBuGdj8BKSSxPgRfNvnTQ9DrSHDBXptoL8qfRPJ3mFU9WY8WBN",
  "key4": "U7SwKKeaM3M2bpYSvGhuoRVrShUQXjd4dkfhLXxaxFcFn8fGd1zhiiav8NM2ovSFu4S3aG2twgNt1Rj1uY3e4Fx",
  "key5": "4UeVkKXh7ADrW3rv143F2xrxibW6mNhtPR9nTrLsQymyZnJCifEJAgBKudiBKfJBAcGdFKNmgQsKG1gqZXJZvFBh",
  "key6": "398E2tVY7BtehJKv6kAKqAXXHxJFCYDBPbndHTah3WyRE2Vk8S3toFK7rqNhUvAdxGHjmxnayA7ndMursgvioaiC",
  "key7": "MG6FuEMbiXt3d9TcFhRYkMrvpfGmFchVRGzjLkPaaBokFqkK8mRz2BfuC8qb2JG2bCxDR1NRWkgEi7dtSaFqCv5",
  "key8": "4FW6Ph2SuFwNUdS3FetYj9mrNZT7ENhmTi83krFUWtJ3vCt1NgYX6F7jnd6CDHfpnEp8FUC68kwnzgBoK8Q8te1Q",
  "key9": "GK8rd7uEmZBL7f2EvMrdY8q6zfmM7zyp87XDjdEMAF67fthzaodbes5VXrEaYwkTb8C6BX9h4tBLUK15uUEocyx",
  "key10": "3VrVCE9xLkJDPSXEqoCe2YGYxQi8h2KZZ4KJX16Rs9b4kGtBoXfndYJMCeVQmJ4fhhrDJ6U4fZqSp97ffvDZ3oRc",
  "key11": "2ytaQddvKZunWuLV5FymVZyHpzP89eGHBjomR9sKswTFZR4cgmHyFePUG9PfnYrUSGdhj2fo1sVqDYww2rkoqVHq",
  "key12": "22eHuQaQna49d1TujD9GWsEaBPzLhTd51pBo9MRogCQjHmAzYpUg4PVpGmTi5akctiy7YhUKC9idJgLqqKBda9om",
  "key13": "4aiNk52gNsKqdbL5PjAo5g7eBEM7UR6d4SsVjkgwZQKnnX1gK2Wcy4gde47oAH7xNwhWizEw9ZoufjY3CKucHBcW",
  "key14": "8wuCYLB5McKFZwG3RSTtgKRfjGyYU472dK6YZ6rhg8QasfDG75G1yw1BstDt8cAiockd6zmPPSrLJjLXsq7ZZ9Z",
  "key15": "7oiqGvGyDb7D6Ch27AJJfjHk5udU76srrPNYzxPQQrLsPbTBmTfRXMgVPs7UjFt5oT335ToL8K2PEeF4bH8SNJW",
  "key16": "4bmdp8ADaJizYeApeRs28MMfeQmuc2scYdNNR8xodzZHwVW1WxNXSrvFvCFTNr4TBcwvWcNkMgqksxwtbK4aZeuN",
  "key17": "5pA94fXrgzFYJ81Qh62UtFzgoPCNrxWcL1qaXi21auKK8cc5278kvwujbtfBk3qKcGNT8AELs2FuKec61DARfngv",
  "key18": "61Wrdr4YmF13VrUnbpPDxCz1hHE6t2nPipsZsHjokmrFEAxtWopCTqN88Bi5VwiSe7bX7YHxfUQBsRiorvw4fYkp",
  "key19": "3s4uQnsTfxKzbqSPDBYtf2C9QgtSrRUFU7zRFqBd2DaHrq7K83FTnkTSeRGUT1RTLaTG75CYWwGtqdW9JivF2kPd",
  "key20": "4EPRLVpuSNGtHLqQ5oaRiguhi3Nv2DK88BZXRUoDWXhrzd7pV9P9vZpgBnRDvhHNMYc9TnVXrPRmH5UB4TFrvjKs",
  "key21": "65Rk5H8YUeTHHZwwsSMrcj4KWESqA3YVmqE58G3rGD5u2spbTc8gtYeGdD4ebb72wY75xsu3QYikvvrPmUiXwiPa",
  "key22": "2i3d3HDXRwdTutHG58yZzKa6cp7BitcF9KqzDNW5e55Xr3HJSbSCeLj9MRnyS1tRbgZPFa7K7gE5No4sVwYbovm1",
  "key23": "3z542MoMnTHWEb93TxJbbhyk4bxS4AJw279EjHmBK983LV5zAJ1pjzCz1qktVuBoWqznRvxUGWodoqDopX9e5RuR",
  "key24": "2WzhRMuGSGb3hXuQKPyo2fDVR4egYNTo1sHrhrTn1jA5WLHMcMDn4vo131dQddwLjo5DwZxDkmKjbeZsTtwtdWwF",
  "key25": "25adFD2Prs1dhfAh7SYveSPeWY389oKH58odji6VxnVMEJCNr3NBikSC6aWkFemAe88PKLJmcks1DzggBnsDHbwd",
  "key26": "5t3nieLCJ6AzqbojVUPg9RiECxNKtvrKADykjETpMVyQyZrB9TqdKDTudQxwjayRWu3fTYFPnfBnSTuMkdRSBRrd",
  "key27": "24ApmPUCCBsEUtnmuLqywmQmb3tTipHgyz7L762Fxo6jRe49HQLPYQtoe7hh4mMwJRXJuRRkHJPyUSkxsgtVv15d",
  "key28": "5QcrSZwu57rQUJ9vJvzY7n5Duwb9wmMAmTvYTaVhQPx6xeCT1Rmhgh4PtW8SZGw9c6LvAG68BVp8fLYHq6ra8CYi",
  "key29": "2Qef9aKELF3jZmbnaeZcQiq6x9uhF4YkUPupZzhRwT64nHDpvppGY99DVhvxE6yZmWEo4Ty3VKE9MbZSza5LdGnW",
  "key30": "2mFZVWmUAr7RQyLDc782yVCC1QcTH7tJP11CW1qiQMbWBXeB3m65HH9LkgwN78Mpt8muNPCGjzKvUiJx9aAt6RUo",
  "key31": "5EngKzsY3GoxEb1gMnTpVqtN6B5RDRGi9f6VoDwdLJTmouJGAmTgdPg1FyojxtMNLKMEsLk4Qa2yjoS9Y8FwUj8j",
  "key32": "2zmwbyRLkzEYSmnRZRWyF9UcSS38X4ebtRbhy5Bax7a5BJ8zn1u9sbVEEXm4BPXEyVNchbzjfmBe6wNNpqPwPNaK",
  "key33": "3X5VMdfiNVeNmqEqYs1fArZFwXLf9FMaFgRa2SuwmRL6dTqo1i6j6WsBWsgKST2LCqF4ztxZfai5sWM1A6ADnr6Y",
  "key34": "5DVpAiq9WFwdNpjjZ3BzZ6zA2JvWsqnW6CzYwWaZLsMkjFHM1HxHebGDUvki9KLiiEFWB4Sy2PvXy4TywJTC87Px",
  "key35": "23SypaBkxVA1EdcFiqe2Ja9tCMemf9y9ZWqTeTCrmwk9cYEZyrV5iVggoE6gqgke541PfP9tKSb5K2BNNGvEfU5g"
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
