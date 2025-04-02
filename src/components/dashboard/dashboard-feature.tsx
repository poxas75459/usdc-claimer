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
    "2EWjS26LfQXoo1sZScn9WUe4KygRhuNbBFEYiLa7TEqnfEbSG4FEhRLcfjFuvd9Wo69dSFfgAJeaJox2eNZZhxvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CXZu3DmJckV1pz9hf5cxkdXAwQV8edBE66s4t9jJVgBt2zusevDXLqPdkkMNw9NT8BqV1jznAhb7jM84JpD4D4Q",
  "key1": "hV2pV5if1aE7KGg7E4xFNsaBeCWrQDUsKBR7LpvZzQoAqhddv6mBJGW7nzbwUg3AZd9R1yDhoEJvhXftKDPuvNX",
  "key2": "5D5LMU6ufL5quFP3emBp4r73LccceKM2Pby5hgd4S78xfkEmqxbQ8WsgfDqDTrHsgYL69gZpYDArDnmGVnueCSMe",
  "key3": "2jhaMHG3tSA3koRQwvysvGsJe6sDsFLJsAiHqtfgqZ1ppfZGCRcWqCQXLZFNsdNG9cRhoQDv6yFzUXJhsyexmTCa",
  "key4": "5iuFSKB95CH188FZEcen45qxuW7VemU9cUPMfinYqSVuT3tqjiDbcLaqSuGMR1eymJNHWyjYNkXaRBXacrHG9Yg9",
  "key5": "2CNYCSv7cenfGDj1F19L1Tn8KSZWVkUKk7xm1nE5Xh1KMdhcmyDD3VryLohJBQCjDzP7Aa77o9YDqLhyxYdFcy5f",
  "key6": "4g9KJ38GNzTT8hHG7ujySx9Zi61joq7v1K2eihkvhEJWh3t1fCuLkXnefhDJsKvPciqTTnEEoNTALvjeVMKfFzYH",
  "key7": "4AmkbaESTVJ8Koan8tKwWANjCZwVtrKBfnhqTJQpYa2jPjTPcpB4tKwidMqztiV2gGAvH16xCF51X2JruxgTY9cP",
  "key8": "3tL482ipEWLK6N8MpiAZGA6RPe5WfReW3qwLMbGZrjE7o8DfSLoGhsoGnKhCAD3zFgbE3urLYrGPQ1n5uACWmraQ",
  "key9": "DZda63xLyi9LCcYAynJgstHjytcyV9nyaZ7KPrcULHHu426sSq8nfkJNPVLWnQojUQLff27oL1ogee8YDms8Q6P",
  "key10": "2Ase62Zi6A1qHPc9rEBVZVnQMm6eWhH6amjudVLTJQwkNjb2if37Q8eSDpByvNoep83QG3qx4EJkmfmyuE1c9Hy4",
  "key11": "Av2fzqJYkkXi175KhXQwaDq58y8tzXQwtxJvH6KYv3QprgLKLtVnVPHYiU3y1VAjhEemqoGEsTzVfm2i79HpbFE",
  "key12": "49z77Jv5Fpwz99RdhhCTB38Y4fVD2wHJxmxjfRhRRWEE1v96dtFeUWKSHpvdEtVcbuoRnwWM1gmW8xgmD9Yfmjjs",
  "key13": "587DANZwpSoQre17LKijogavwvcMyXcuvgbgE2HRmt7FoxVQaRHgtvcJ55uK48Mev158XCaN6GXkARr3BxjNBnV4",
  "key14": "5WLkwC4xWv1YUzStjQGm8qcA6i3JvkGBQMjyBzJ6TYidk382HT3MFADhjyEFxTEJHmLNqA1R3gnCZj9Zy7nWGp3W",
  "key15": "5tvTbmcz1TpVJ44QmPTvj9N93cESN7pbfxWqTPi8umgemjwhYTE4XCmGDC3K66S9MQ1ZHWLQtzytuFjmSXU1P3VH",
  "key16": "5vrSh1jQBVV1FDbghsLXHV5zjjKfKGLyAce1VHywW8wJNoDd4wQ863eHukbsDrcVzfVPSEfrzcVxsLiB4zWDCyVu",
  "key17": "2PdeZY8YBoQCHc1fSs34bZTYN55xC6wFJCJnQz7gHF22b186JFXAi4zNQchcQa5ivTyRstp6WbhGQrepCLiQXn1P",
  "key18": "5LmEjfvr3EBVCcMWaGxk3cjvHBvvWAY4StaxMmGomNtYMAXC5ETNrARM3te9ZkDvudrCJfXrU7qCrGx31ctzMdoH",
  "key19": "2RvAN6ATojh97FvA3i7McBPt6Kfy9h3Jtg97uo6hsNWEStVkmPcDtYnNN2hgB42ByhM8pEin8JMj94B5pErYpRMi",
  "key20": "5QFvYhmYjhpAkrY2HwucADZ89bTN2y7MAQua4qUMW4vWekPfXGFmjMd6qx2kW5joNWoyAxt6L4RRrQav1V3NG8Xv",
  "key21": "5cQ3Wb4ES5zznUd7SFmUroft7KbCn9A99gum9RgJYrjcdb7j2EbLnZ7r5RPiak3LrsQ6gZiSsczcE9AcY8GNqfM6",
  "key22": "YVqvpKFEoJhoq5zV2YSUPbY68B1XLhutkW6pYn8guFqvGDkVjJcUhHeC4Z4nJuKPMZMpkMsYwxddwtRWTj8j7WZ",
  "key23": "4aocvCwnh2pRAHA4z4YcfFycdsnRymeYJfrSG1JmAQ2tjry4ktq3qTnMNL5tjify3NzQKaYEakTvBSLGfJPens2w",
  "key24": "2x3dQqJYaJ3UZayTEHg8J7HTqZFYDpBp8rTzGf7UpD8SgCA3a49vsz92ALHtQA6AModb1U5DAKuaCmeiuehsn2Qr",
  "key25": "XvPdAQDdPJ2K3YPaToNvbzNYfukeFkuqYzkN1qJF6CEqDFvQyk8ddxpHKCCMFw2ExngpvLznr4vAFMBd9DTcdeg",
  "key26": "2VWZbJbwrCorb8fPLtVavLmNe57P356vcEzgDMc86eumKeLowAhHqHCpnTKZHKB3kUHj2MjiRdo1Mf1icNUsZ9Hb",
  "key27": "2Ld1r2bZ9qSm5BHx8Dgf7jtx72NPDfp98rrfDJ8kEJWiJ29K2mmP4J9utkagDVDcKppkNqRG2NxGcaZ8uVDP3chF",
  "key28": "3aKwPx3R1LdGBU55r7YfjMNKmtWZBJqwD6hVft42MUeXvdsHKmJWnSnj9ECybuyPdWhrPWGoBgUCYRXzttKYCzq2",
  "key29": "5XCn9w3AG53QGxzFcA2LCHkjEnsy85dCWamLEyNMgx6kM5hbP92h8fbsQJx2qhS2Hf4Mw26geMh2QyaVSmTo4Zt4",
  "key30": "5BMeHJmPHEat9ZLKmtesrk3FJjLDEAsZ6pn5aSUCxCrc12xgnB8jrmqNTFndEZbi3hpfLqSpoaeTmgtMJRV9kBwb",
  "key31": "3g8uTWBh8CsUz8hgpisTC9wcP4mBFSJz5gGLeqzoxGQq9tbyEURhAeLnArYrBTKXaMLbk8wWWBFtKZiwetiJV7s9",
  "key32": "2Lm9Ld6GFp8pDYrR64Tgts9n2hgxJF6Bo1FA9WpaJkAqna799tdswozu6f24HUDJ1bJw8nJaX8iKbkwswzxTwpuM",
  "key33": "xr1qE4bgcRgMephWZ4P3P7PxMqLDdZ1pm8ddizqZtBjdMWqXaXNqWyatvBCL8bYjTfFje51ez7vnh8jqjW5MemC",
  "key34": "9y2HZ8TNJxRX2tFqeJdy4ByHH2ixRDtYGWCQfjHj48WcNw96oLrAYV8wLZFwGWzEb1HF7yWxD19kAqJpZ9DwuQS"
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
