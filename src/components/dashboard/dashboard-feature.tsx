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
    "4kERdUrHLonGkzXPfgNncheQM4Nbxbm6VPsriNHhPxjmNvTq4nZdfhMmkeeE7b6pY8xYRfCrFXFfSbQ6DHotVdrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sYVkMJDdHNEXjt4aWCNzCu5ZsW7KjZ6YydycZJrKExJGA5kZbKUDBh8B1KV1ErfzV5aVg7p8Te1X6isvjL6kpJs",
  "key1": "mcXj9kg6tmNXWf1qe8W9GCkb3TiZLKA7HjLHKNH6Ti2cmxHarWw6NLQPJErhpvJGHnrdCZ81EqzoMaNeu6nVmgW",
  "key2": "5dk47zwnKQzk82KPLV2M4ViNnngvhMmCsp3P1fVXGp2Pgt2ycH2jGP2aZwBkC6CandbpgwvLybYnu41oRb13jtnU",
  "key3": "3uG49SNHoHbZsJ2y8o2CdmCEJcNPKycjVBLDq2gPiFy1vPNaCbuoz8r1JHM5wKHX7F36QBdzEidtrPHJNGbekkZi",
  "key4": "3DLt2eMzYCxC4cqT3R6CmLiM19D58fb1fGtwCcwqHYAUKLzuTBc3PG5mKHTsfa8En8LgnaSdDDkR5jGN8VAzkZsn",
  "key5": "XhVvoGQ9Pn5Sxdpf7Ys1uiJYq59zS3jiyAFTuQZGsakyYSSwRgBR3hCMKEiMChAYoxqcuFaed8gsP5TL7woGPjK",
  "key6": "5bzfYfnvUU74TnpkfFAvyYCGu7hz2LzjGrLNaSrRjtqB3zVYwpXmTnqrDc1kSJ2mc3cnkbrotzdkXYz5oDv447GV",
  "key7": "4SiJp5PYxXdxQuk4UwQXFgTCu6zHYmexGYCx1AgwyzQ3PtxcHNDdfLUcvv72g26sPD3YsqGoYRLcQZUJv1RT8NfT",
  "key8": "3sFz98g9w4EiSjFkumWDMngceKbiRbWWMw6PTfnJgiVLUXJG9yXQ3SsUawq6JVRrJN9HPcwp8nhHimUNTCnBvBEU",
  "key9": "4e1nEUYx82NyKrZjammoJyCAvp51HTpsd7uGP6otgr6JnucmUmpFFqH5fdisLKPjynXXmMY1R2oFnuTX4p8KZyUc",
  "key10": "oXf9qY3KZheYHTEbDip1Hk8bpyU6renh48GEQKYdQWw2tbYgPJdr6iwucs96pJhVpHfB6Ss43ac6a2g3AaV6UeE",
  "key11": "5BW3mrJVaccqQ8HYSLKBetcGBzn98azFAWVGqi6iXBKAgFx9kvb1yiFEC4HPn9eSRoEpAFc4Z14f5tBfXWP6QV2c",
  "key12": "4NCFyainn1A5VpULdo8CpPnoasq5tFL5waYVf1PSU83ERF6WNSd4SDN2LRHf2BztxaxMJ6xTomd4JyKgVpmwm5uR",
  "key13": "5ULaF1do4jaNW4QPr4d9CW1SJtVgoujpxLVt4xRPMHNS6ADSjGQDLeVW5ZxEbTF6b8HGs6hSm5J1b8ozpH9RbfjK",
  "key14": "4SZ7DoN1Q441jC3oFb4vxYQ1opBrGwav2tdgrTpuHkxE4bq6iVn3dGBzthuFmEfTWQ73pRaVNxTSDe1T13aVdUTD",
  "key15": "67dkcn361vioHCMLj8WDZdHQWNcfsEBmai29xsnqbsuysYdp3LKW8KAX3SQUAkN429n3vcg8Uczdpb2tHSCSsAvj",
  "key16": "j3AzgWCWbLihyTeTMFb2QvakADGNrJAnKtdwXeVp29YmL3NAWG6iWdD65oZ3hhDBsdHsPzx72tRm1CbTVLVWAT4",
  "key17": "5yBj2H5TiWtDRJPv7irWxAuPH76XsWPn7jYEjPooJsFjAHi1DLP6QX83KUubvPBA62kPHSxC9cFeVwHq5JH1b6cd",
  "key18": "3BgRRttZyt8rHjv9bVod1e6mwhyRCwQjt1LASGGybXqpvjK8c7urpgaHjTD96cVFE3vnsfJLXcFEaUPNzm93KY1P",
  "key19": "4qid45HZXSUaFaC3aik25nfKp2SxJ5pradGzMoVUzYsobZRG5GPmMZmXquTaftuWy71Ymqoroqwak3jQwukqjikG",
  "key20": "VueeFR9ErrUvokrUasbxZ5CCYdunG4uNzCaE5bxGJ6WP6r1PHLU6qPNYzzMD3neNSy6SdtK7fKHt9WPD2mzC5hM",
  "key21": "2TzH9QjwbZ1sjiwg11hvcyuMQJfsuEc4kSYz6CkCGiaLEGaPYKzVuwTnyJgTfonY1rgbeQJtjNY8ZUztcyuD6uaQ",
  "key22": "4S7FFCZMDZfYshDJDNnzGyv7DiTv1DAme4WYFzDujTeD82D5cBqCXmNsyZPYUY1nwo2LeooeVXfbk15tBifmux3b",
  "key23": "fjyrAtjQBwTaa31mBJnssdRTxCC6nWrk2A8piVHQs3TKWbo6RmG3WVEubdQ5ACAPVhuCGxzorTuapQXaUo74sP1",
  "key24": "4ZLwEw8Nyykfdbv6W1wD5otuHC3VXwYk3V3L8vNboHs5EthQtgTbwron5MgrM67Qt7mbKpRP7dVU6ghicNhBrdnQ",
  "key25": "5SjhMsVgfKsjHpsrEwdLGyH6GVmJjeMG8qwZw4Cpo7URq9mMfLYqdyeXr1v9eFjvcJf4ZCQNAXMX5oBnVf1Xw27W",
  "key26": "4PCLD6jEommGTAHSCLzk125sS9W7PJ6AzDgDuNhVhxQaN4nPVZHHFeuKuLhUPBN6ii8dnwuE4oAGvS8PVtHEQRfa",
  "key27": "4xuCD8YLa8WuijDpMpfJw3PdT1Q4RsWGFQs69UB5tzDYuE1BBJqFE1TkEdJLyeCGpVD84T58BhubWrA5PcoKiYPK",
  "key28": "3Fsky63QRawsvfa1s47St7s4WfZabLDpqMsyxkhHW74vSNsbrxZTZesuxzKCQthvzLWedEw45WMA5yT7vjAB7WPK",
  "key29": "3e5AG5Ky6Z1b1di58umPEDzPGsieZLXtnKUtBWrRp5K1sirkAEW4uCkuoohiAuU5B6vXxUefpAvjgFjJBVDxHUJt",
  "key30": "5bvCRVPLdTRRXMGhsqTFf1KEY8oUvdfSe4B95gABtx2XVM9dByAsFyvtbYAwf3EtkKBJLynfNNDu2EUGL72opq18"
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
