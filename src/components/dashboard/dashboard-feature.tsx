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
    "6Zg3durCt4tZPrs1JAMks72G3jqpQGKHLcRwSvHrvFP1LCMSRb6pUY8Y4MLD4T68yJEisFjGBb1gdTL7o6ZWpXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvZN1cMcehYAHbxLGgYh3VmFAGizQ92oxJJe7nX2mdpbz6CKwtWFvUNHbj34pH1w2xCc9V5vAUmHrpTTYGgLBwv",
  "key1": "4bzF6hmtR8ZGq7j2VeA31sMgYgSQn2cxWhJVYL12CEYN232f9tu8bWtCFAhqhM8yvk16o3nxdBHwMuxYYdjKzG5S",
  "key2": "4GCxk4gMWj3HK3tw2s2uf53CsEPiPfvuZHtFUGb83Ya74EFofrooyHp5VQUASABBWUEDUSqLb4XS67WBSFUMyLrT",
  "key3": "3tKBq3uxZYSGJjznmctHJUsMptaqmBQUKCf2L5nrw3UGNAd96dErASXCz1aQtDrS7wHkF7XyKw3Z7eSSBcEcVCd7",
  "key4": "2ibqXtEXc4zyErzd7ZSAcRsDDEQtigCRZzekVLKNUNcZx1ADjzUosjx57dw2T1YSDmAhaJhcJPHrGpy9mj5rEpJF",
  "key5": "2Y1wpSkVA7MXComx44h5P4z2Dhhnkn7gwFnZAaQxCBMQ4u7gtHxy2T7WAmNQgcERVoznDHZuEoj3LHWFStfVxm7v",
  "key6": "aiDdLhNmEUgA2Cr1JLXtxEeifCerdmUJ2ygy1U3AwYFiydPAQ3ritr8qg5Q3mBrHcPJAL7nf1EyhZF6khPEtwh1",
  "key7": "bV7TMJU7NMGoauX43dvW67GBXXDiNCue3WMhcM7NpXQffVU73LN4wMQrUC8i7td5WKvCgfqJGLZSbivngE9JitV",
  "key8": "5Y1cBbJUMR91iEPteQ7omj6tdjuXUD2it9bthvd2HDTmh4DdDeD9QTcnbGGv6QSotg6DS6XY6HWSYDRH62RcjxSB",
  "key9": "3aav18NfHM8WzQjyAVimUUKCAj8kS1811dkNxfKAh3ZAGciBPoNwz4kq5pnKFfi27G9biVfwPqbverFuYGG4o12S",
  "key10": "5gr2Gp9c8gJ1x7gVrm6vvykpKnNkepgrhJbysdgxBV92hJbDvAFF4Gpt1uzUfUXjs8FA35G4D6KGGzuQJ19hMSAD",
  "key11": "612MYE3h9T39YU1RvaBKPerg9igy8udDdH1ynMae6oVqCwoVNWwWvznMurV4d2LR43NvxNpW5wTNSfyLzACtYK6g",
  "key12": "5djTNzYzE4csssfwDbJToQdAQne1fowzLMFwvNLQr695p5Vvbqx758ScWxHwkFjenvcQhEjyAPvbHEoTRfumYxc6",
  "key13": "3hwWjigZVH8NgTUpy2Gy3CRLuTaiWePM5HQKp6HFKLfoeMCrXimxjsrKYNSsdQpxpUHjMo3jUNip3GRVhUCZTf7S",
  "key14": "5EQug7DFiF5XDFDdTpYyGnnE9BseirrBb4q494vD4Y5LJ7tMYeJi3W9E1W9U8jYXhNdfFq1iSju5sLnCNjBbL1UZ",
  "key15": "2VuiQC6J8UA8WYuN966cHDhLDtU8kctGFE5kjmh9RcWrfpN6FUVveetzZnMZVoqqtCRYE5k3vFVq2i4Wu6spqoBz",
  "key16": "37REhubgzqFxvCF19otTgvrEdxFvzq9vjZUyf4SzpUSBM2cPXda31choh34s7MPhdZZzHvitwvcSTiveST27ZCSU",
  "key17": "4dXbvdf7NgpWnLjkmwe1ddQo5WLMXMnFTj24zfwfBQW7nHwjj5Kpu4YRB9wr7mzU3apXtPiee86QdLAjA2H7kYzF",
  "key18": "3zR1G1ba5CoCtWnSDwoHpoVkv9pTiQv79sjiSjChGsMq3AAexuprbURfT51VK2RSoqRRt4k3qLJerMgQx1iqgJzg",
  "key19": "46HEVyECWAefMZxbJJFgRMDh4orc59bQMx6XCuGCgaL1BJnjjRdDrbchXuLb1xvhciCWhkBwnL5eUtHxTWxd3iSC",
  "key20": "dX7bGQQu2vwkH9yrc48NH2ZFoVbWM7nCwDxWra9FL4YqW5ChShFCsMeXMamJvn9ffLRgFSBgSkZiGC6BwA2QKS9",
  "key21": "2MzpXA5oUSBv4JT6u4x7NY1BNEttiuKi6rAYRTDktnBeJLe6N8iwjdF2P4EE44gKC2HmGkgmLdhUXWNmuVdcnmKU",
  "key22": "3CEbmLbufkHFzLG3fwpzcu51aa3zwGU4UfdU7BcgBcxRGMcQ3a4LHZFY33FRHs3YRbushL8DKoHyes4NQH4uPsrv",
  "key23": "3p6y6boBBWgH1nxgwbF8oA9LwUBAsogYqDv8XfXYUaXKSxWky946PpSMJNidVzzePs9W2azj4kH6K7m7d5i41RgQ",
  "key24": "4tTn21hvnC78XSH3DcGBvxuvhXFy4gBWmcPnMPEKzJgRGCzTjNXTxyEu1BTtBph5ur8NbrsEzAKicRcwiH7SwrwG",
  "key25": "25sPL36JAKPYBP41SUYcu5dFfQuc1ZCABtcxnAPZiLWFqmsRjy8qSGdvBuXszSkffp3UR582cWe96RvYe3xnLhRK",
  "key26": "czZzVBHrYf7U5BHEfQnSC1G1wYXtxwRhKPEy4kuLq18iRLfT7ArrGXoqx4m4w3SfDuGPtgQNBDE3rHhpdm73rCM",
  "key27": "26b6LxT7vqJWBrPcNnyW7n16qHPydgwcyEwzi1fc1xCv2TnxwqHF5NZ9Gd4rcTshtKC7VFvGf6VEFqmgvxLbbFSp",
  "key28": "pjM8KEtrHYH1nqpK9H5EnhEU7ForkYMA2TzRqgdft6NuDYUEuiHte7WMcP8ZvR4qZJV1uwVfHFcP62NbYhSkPXe",
  "key29": "Ysk3avaswcqAa3WEMQsYPg9f5p4pVSrLL3rQXSBferaW7c8RtwuyMvZkTPypVa99YT33TLPVjUv8cvFp6a1XTnU",
  "key30": "61mqRnhK6pwtQy8RgCy4j7GNRcp7Qm99fgvxDz59dcn7kgGY6KafcL3T9SAvVwBoZpV1VG1HDDqpU6VMdvrFzD6m",
  "key31": "5beDoc9K9FkU1o7oPAFrh5fDTE1A1mbHuPyskePF2Ck2FWPzmpzGAECRZLgTCmLrjMhX3fu64LMGjxP7aYfcRHdA",
  "key32": "KYH3tSU6mrm87a4fPzv1KmgkboLCL9rBpzga8xE2YvEQVdq7vtEL3qxRLB3rYG9kG22eAxCPnu3HhLuNC9SoLQJ"
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
