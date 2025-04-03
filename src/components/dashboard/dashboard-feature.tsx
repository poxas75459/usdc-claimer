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
    "22mwwXny8cbNvtEfMngyKQHGaGVtuSgtajy5XtzPAAN9YbFCZDqwQSUk1oawMH5pTiwQy8gFoj4xVGKUdDNgfHBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pAP99ttRc4WseXv1L3HL7zKLHfDJDaMEnPX9WQ3kYe4rBafmM9XxFVKfUXXxpJUggHesA72jLiW3s1BQtwQV96",
  "key1": "5UwUpLCj8jBon5aTJNgWBXgeyYCdQxdRX8tgiBsDh71MwnD38abRKhzDSXggeJAjXgN8rTtmaYPCiQNUCxB3BZ6r",
  "key2": "35NSxywWaGfYgGVoXhDjZzuPhDKfXF4aXahPmtg86srEKFQ4WRWdxq4LterbGRwE2HXDYgfrpsv6aArArZ1MMG68",
  "key3": "4p1rHn6W3Pwo3FK2r8TaFRzTyeKqUJx7816TvEC43ZeraWyvg1vPv1pndxyPthu8XUkD9HsjBpDiYjjzYhDjmDYQ",
  "key4": "46Gw7bq4wC634EX6ZJGZQCJAUpFdnDYYZ4SKTWqnYnRBgdyxWKxFhJBvYpPwpQUcH5WB95EBTbaF38TZ8Hp4QoWn",
  "key5": "5zujg9rWkQvgmzpGv2whsBscLB1UEB9mXekw8ozexYtrmobHXxmJyqfBGQbhC9mSGY8FL7G5whkmLbrwKYMEcKQh",
  "key6": "5zMBsWnshbHQoATw3K626LHmfKoyium38iZLEopN4rEgy5brkabqFTVwnvYLEfVgsgoCZHywVLcG4H81iU63evc",
  "key7": "ewLURqizQJNoB6ztGRmrBfa1oCChrMbuQY883dbU3LaRrHKSbAed1u6wYSGT8RDefF3YYod941Xjdc64VSpigDV",
  "key8": "2mfAWdzJfPi92jqZgTWjkEhBEW2rgWf8D5XVbvaCrYuofL2JNXiScjoJVXRhu4L77S4LoAWFzF3aJFpm4viWxSHg",
  "key9": "2riGUC39HaFYSoNUSYpsj3EUUAhCpet7R15188iJgE4TcAQpTaky9TMvUeqQo15ejXW8NBDC9edcMjmKsiHjs1Gk",
  "key10": "5oZRkxvaLLuxuvuifsmnZ8scvcJeK1mFDS3vSzyybARWtEEZrayshB17jKqWU98HS21F5abNRsLsz25cQBp4TdEo",
  "key11": "3n46hKaqQAPzHJtqRWqRiYqD4JJ6H2o7DBtWchoDaq9jeUChQZxazJZncsScqpBi7Wk9xBWtKYk1my7piN375r5F",
  "key12": "3P8FTC3ihVbYqBmpbym7FrvaKscFajxFvE1rLgUYsqNFmEG4ed5zoZVfXAE7GhCEf55pyKXi4VFCMMRCdsbMJvuE",
  "key13": "3huuH6Nftw7YoshJ8QjVe72XA4kUSn6pHagZw7ETo4aKQwrACms73LX1EHMpBcyMe2Qce6ZKW4Y4NZrVDmP5hSF6",
  "key14": "27gNX1CSPCSEQMFTfo9Wb3hQ3ckZ6qzX45J3ZQzoQvHvW7rwBJKfRqS2BCFUGQpDpDu3KkcKM43BzfaQB38wQX2a",
  "key15": "4ewFvMajBtCBdRRJcqCioYeMmM2eRa3EoW18cAaMxJ6L7SVGvRqzUPxfMruLV2kZBBYeCbXuhybBZLTu93vcrZsv",
  "key16": "4e45LNu4Bsotpd2YLMkswLmNLdJ1HgcoGn6Q59C2cBZ9QPMQmHDEpGDcBpeaKdn9PWs31B2s38TAefvwQEZLunvq",
  "key17": "2pJCR4HvD3SM7r5K4Xzyk1Q7h3MC8fkovwjHpcSnoj8qn98uqahkn1yLXYgoq4VVja6H6RfktMnrb4ht1H39kBWL",
  "key18": "2BLQ9rgJpGT6JAnZMSAfG7ytSEpNNjmb6HLAqtuUjYnKRPqQcuFEHcGF38tucSyzdidWUs6PyrFP9C4FgzbiVrNm",
  "key19": "2AZTYvsCtWvxNXiW4xnCUBfATYFwxmAUmPjrfUQBMesmbTgmBEyw5MXK29HJK6BquYxsTS5Gn4rn2Lb9w1ZmFGGr",
  "key20": "3HZNT6noDAgX8SrzPvmRosNHwi7dJYorb2WTiFvpsYCkM2SquPE54jg3jHN1Rzc6idHWZUM7ZrvA1TfzyqNALnwA",
  "key21": "5ZC6oZyYzyru1NppGYP3SwpmniBc5mzvasoa5twjTJGW56mc87xmo7TGNhMJJYQkHBkQWsB48sRWJTnBJE63ySGV",
  "key22": "5L1tDSVGXNWHjzMdPgrRd7FVK52n4wjJvasLRXWHp9XZxrfgkemmaFdM5G6Fu9RkqpLLJDvsqa3xRhinUFfsnKLY",
  "key23": "3DUM2LrhiXfDYd7Di9pqQwHj3xCHLi8waYqZP6hRp7z79gpack1uYguKs9XsFCuwWjwUTzQ6HcLELrDAJrqpZyiu",
  "key24": "4n7L26XFRB5yETYhin9h78iT2oowhPzgU2DExbDBBrQP2XRtxugLMPSmgxAt6RvxEEPNvriwWZ3fUCHbShqmy8ZA",
  "key25": "3iQ5ZzPz2ir25YfKgBB5skyn3bTAayFbeyykUzyF7uHnLxstkAJ6eJH6vHfxiR2u6Dypnj5cPdKVXysTVYj8SZ9N",
  "key26": "aj6SoemnSJpMfupkjHZ9rZ1iyQkPqvZNqCg7MJtCKzyM6ki27nbDTe9Rvxw5M2PMTSNR7zHaLdSUUWBY9gEC3Xy",
  "key27": "XHCKjWRBTXEk1UCAsSBs9pX238wsMi9E5UtP8U9tkuUemNhKe6cKaU4bsLtjcpmfr5j8iABL98cVpYZYAHdov1H",
  "key28": "4TYQFwioP9vg6C9xtxQJkRSSW5J5BHsdfcR8MxQZJkj27yfeyhjsjvAp7wxNi2L5gMCAm2kQpBovrP5kSazb1RfZ",
  "key29": "3gHbtEmBYT7kFkPW8BRWG6deVUFGj381r7aic1FbnZupCy9d1VkQkhuy8SqqcThUmYoJHxnhwwkN2DDauZRWgzN4",
  "key30": "nws9FKFGsJRwdPRDNiHMJXqJu8p9PQ475avXq5936reuvZA2mhzcfc8yv5QYHwwLHrQ3zzdoZswH4X4d5MMXM96",
  "key31": "5qHaDp3MRuCY2FtgXdT1UwnawYzQtmr9dQVCe1Baix3nNWFuyJC2JdLyUiqBwrC5svueLnbH8VC325bW2Ko8Voeq"
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
