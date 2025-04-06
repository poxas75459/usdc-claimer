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
    "5M9cWqfprhPg5m1xqyDcH4nXxEGPBnTWjspyrWzxgRhatEGtfV2tdgdcsjyCjxwzZeNLpzH37RxQRrXnxj1KGvkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFbeJNpwaw1sKA7kScW82uJXwGPERuQdo6zGCfrLVx87itXyG8YqcJSVNsQanMsjhJKahBd7bBiHL1PB5gnULx4",
  "key1": "37E7oEtEzBhsktXFQ5PeYSG9Zpt2PBwqmjGs65yDPiWukZ1yXwS5GMCQVUsCL68XiX98L4KQigqF5WHkyRxh9JYv",
  "key2": "2h6jGqTcgqQTX4ZJbvStuKZyV61zVszeSDn1CEEhsc5sJ8RbBQ4W8T3XBfb7tX8GDnt8ZTXqkSV3XrFCPkhFAq3K",
  "key3": "5KEJWNCDdrmE2Lxd74iLMha78P2V3rH5dLxEJzECGVFfHGVFkdmmKykjb7urQpLgGC6hWpCBo5M576HLzPhgwn4S",
  "key4": "5jMzWP95jiZfBjEZUbqkew4FvwkoG9ED12eqFYTzatWNeNiXpH3aBir8Gjo7NjqewdA5mEgPc2QmDvVTmDzkV95L",
  "key5": "2GzdbBJGuJBMnazT9HwjQznVrzodZqxsXoAz9RXwYNHo9gsdn1eMKGVRGzkbPGT3M6kt2nzBvJRbKFSALr1eDvmU",
  "key6": "5DNdGVbNu2p7uyW2UoV1frbp7chfWSob1wmvr59SyZZgw86mvALdYbhPUCwZv9VFJa7uuztajs9xbZSiN6ZUzGSU",
  "key7": "5WB12LoaQ7FvGKkYhEZSC4fcCcEDDH6nLn9Gbgs5vG3fYbMDSpxW6EMKeWW1jxhfLfeg1JudSnxBPELVd3NcR2pr",
  "key8": "2KUw6Xjo6khgPRcgbME4XB4YBVprqm2L2oZ8iSjpZKKFn5CQoscYKR2L3kxL3c38iWd6e7MbjUXJzaZ2NHdbtvkq",
  "key9": "2sedMTC4qUHApfoVGWgw4TjfQgHgjKczn5acZHBcjsneyFaXcGQNKjhTaJbEXsh3FNa3oTr1zZotBTQFhMMzZWGf",
  "key10": "4Qdpv9JGii2YgBN1sLBsV1D5ihTHJoQB8FyQBzB4ideQbNZTZxZFbEPfyxiwXKNX549PEUgtz7y76Y6XPCX8d7ZA",
  "key11": "3uX11AytiEAruThjz2w2YKn6dZdzDW1fWPf7NAb6UrdAHxE4enZ3FS2sx7oy12pWm3s5bXGhvqATBwHfwC8xp77Y",
  "key12": "2q9v5TKPLeXM1DkP2jx4quAvZkU86aegNTg3YCwMAmFZxzuYwL1kA3hQfHtviHiznPFVDGZnm1vAqbatooeXrfut",
  "key13": "65AEEuVHhH6frcF1VtzXVwgtuPd46TTr1VTSh69xypTqnjMA41CLTKb5tjepuen16MkWDw9U3zBuLTi51JqWgiNj",
  "key14": "58eFQEt8HiAZwmTDuWzF618Mx33Zs2NFgN7eEP9njCsjpVPPNwCZQjVRQZXu9nVC8RLF8RFLZRmXW1dH12Qj89o6",
  "key15": "4Ec7kY5sMKMTqw1JWWdFfc9zVrH58e2dUf4PzQxLVNLcnrzGm2hUzD8bjGmSrgDkicDxUrU3gZdqBnGaFwZmKmsH",
  "key16": "5gRxNs2BrtSGe71L1poPqAZssajWKCLid5oYzEqv5MhfdKa9qGv6NPvFnk39QRKWb6X3LNQzvd2fehxQtYWHPYoz",
  "key17": "2PBcQwZQpqxE1XRYm5CPN6MX96deehE1i3GTQVEFA9s6pWofFAaSqEQjc8UFZ13FFmsX33PoQpX9sSrKH1nfPKKL",
  "key18": "37GuqHDHE4P3BYvS4cNNK4rHE4hW8TFWfPSweCR8NF2QtNqwhnqHxyWiM9mZ9xMc2fZbK3MLeVMnYzs1FJ8hicaZ",
  "key19": "5LM1GTV97Ughp5yzaNc7ay47SSWBpb63ck1mSY4EZSAR1naxofTohLBFyhopaSRhaYeruZadRvBbsvvqa2a8G23q",
  "key20": "5WvJvKvesrYDwrRXWkyvmbH6AKPDi4to6uPB5FQqQ3XrADQTZ843q7PZV8W7gxZaGbJAAzWkFra8uTKqUgFkfUuB",
  "key21": "rtt1MGaN8bJvwZmhAuLXFMvKV2TRrEBCfZabmuTBr2hb9QajyGJyyyF3oGFhdg4QufCnwuWpLNrmL4BbH2KKkr6",
  "key22": "fBviPUn7hWewBFWjyFSMGMrTKLBhuXJDQ3cofnkoejKLaQiNeGRLMkPhSQXU4C6TxdYFRADukekssd2Z2MFYUGP",
  "key23": "4e82Wgb1hDRiK2cfWNH8d2Gm6Xz2pKjuUkeGgJmUHSbY2hPKbJrfgdy6DrfkcawusbdeFtn7gpvwWWp3b2pyCqMr",
  "key24": "5PfKMpeYmBEhdgHFibyBsbgKcPTRu64WVrgm5coCrwVGiHhCv8WPAyAX1iwuwckBwWbKFLjDP1Rrnq61oddKXZVE",
  "key25": "3QEVwvDwhcvHxURyXxonAZ3sk49KrbHignzRgHZZ7aMgjUxXwY3zjDQfZbJfVkY4w6QeECF1cFdKUSy8wKkqj5UJ",
  "key26": "2GHpqBsqtMLVU4sq9NcsuFqLg6AYGicFcdLrFhzth1joN7NeRcggbvyo52y5CNsZUfmYNYbk9vVMaxXnMuVATEch",
  "key27": "5hbo4UPrjwboY37TCeXrXYHd5Hcg4PUKEvViZWtFbagpwMDAmr7QyttG7BfNwtdgBMmcuTvR71GbY8CKBX5D5SKT",
  "key28": "49UpULjC5c3A395cwqzhWDdsNLqedtYHt7U12YxEh2HkzhKQ4kdZtL2eG4wc6EvZASsqMoPpaWRkrPuoVeESRnQs",
  "key29": "39YWJ61EmwVLzcMKrUXKqWUpp7YrYAN7venGYYQpYKJPCNr4StwyUyMNP3Aw8GXN3Gp8UsFrGiAeobnaoRDccPA5"
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
