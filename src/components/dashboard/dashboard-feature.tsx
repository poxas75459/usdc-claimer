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
    "5vkDHibsNCha9KcWrYnCsznyqot37wP5bh9zKYGvZ8JRPdxmVXLA6QG2Qta5d5kY5qbDxRRurmGLngXeoPfM8XCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dt818JMdDNSb7NKrmNm1dr14Pz4FAYnu63FC5N6mnx9AxNgD8v82oxziFbhqFPFtkriivMci516xps8FFaF6jqb",
  "key1": "5NCTGkthj4B5WBcuTA3VhSgkRbA1diPnkvufxUuxVeDwCkrFKK2EzVvD3RCE7svqUPmThq5uYQwGYj2i2NzE7oWd",
  "key2": "5p6qUXXkSisvLap6EdfHmbctdRbfrd7WcxxpjFPdfWurfEgiCDDFKbg63x3ahbcejTz8ymCsgKFkKQ92RZBVUaVu",
  "key3": "5KVY1Vza2ZRRbhdU3b15aBqzEySVaL3RSBaX2r2xAKMyhHmUtVn2wcHdvJozgwajY52kNrrgZer49yG2KErkSfkv",
  "key4": "RvkCQ2forxPQuA4sL1dA1KfQowPQ9YwxPrDVNFSCYFNy3zEriHg1txPKmrC1KSgzNFbrPp6XhDismcqiY2sEkE9",
  "key5": "5P2zuHBTcNCvzY9mPoaZB7zPjyWYHk8ntc6wgK5ZCeqdNwTmY98QfDkjDCT79gEEr5K6o8ATjEBA59hMYc62VoVP",
  "key6": "2aeocm9ofLXXZcuBjrevZs8E2pUC5ZVPvS9U2YTvmMTkvhboYUHpa9t8r5Uu4VRvpXLgyAHrMQxDzJk6jHXXu6x5",
  "key7": "3ssFmJBCdqtWPeeEVQmibHjy278p4fezYuRdKs4vZvaVnaEYLFyfihv9nABr3PGoYKXvFZyv2js3TRtJto1To72d",
  "key8": "62RfMSb4URZsiHqd8CpAdyKTg8WyMquSKhWBNxFFZHwq9WioUaUW2p1PoyxY8ewC2wuvcvCR5fimAEMH8tTa6GEB",
  "key9": "FywYP4vV4nmBuC9MB9RYEeqkK9Zu83Mc1g7HNAuDn9pqNWMT6pxTzmQqDDi3Lsd6Fth5oA5U3MwTzSvmMLWgFGD",
  "key10": "53EzDpWVtetcmJ9ztG3tPkRs8MFTMzeQ4iEYnmGX1BjJzgmV2a28opNCSaDPQTihfWvbWCpR3b5kcwadTPPbUz43",
  "key11": "joYZFzbo58sanSULc6eY6pziyGcgz8iL5sm67EUDYYUB9bDXXh6rnE7r6j9oM7CEmDy8cEB9oLwAbRGbpuLCXHh",
  "key12": "2JzdbVxuyrNz2H38ykTD1TenQUqhH4Nmj9UmSfqHosPaujSydenuXZ5hFXuRxwX5gFPyfPgTFSWDJiwauxNmipB7",
  "key13": "2xdmWuj23HHtVfkoDHEPaiYCRZFuDtKYZcv5iuUVJ3i2f3yehaHwx9Sqb8PumHjx1YCcJm5GWeckepibAKBcNFjN",
  "key14": "b9GZbT2gkpigmSZpEzqSMsBADBnSBVXNZhds1JNVJ8CLb1eYjVvLL6G2Z3GQrJM6ahNrNis2srhuzdjqV2zwqMw",
  "key15": "3mQLG28L9DifAWwKprRZZo8RMUSdWz9vgDUPLauvGQk9LADa9L8dubWWrr2MwJimJV73mD1YwgfUCe5DYFN57NBn",
  "key16": "5GENkvwhnFWjFpmn6JEyY5LU5rpNs1TqYg5Ux9AgofghKBGNJi3nieXTkxBduoxfb8UfG9gCYxjXyaRgZriaTbTc",
  "key17": "5c7LdoNsJjuynQZhobd8fwsnDeeLYNtUMXZ1h2E3GXsVKFzpC9SmYMYoFbMohwgad6N1hNixLEqdUwvpK5gLdSuT",
  "key18": "3Y2AX29Gts1UeZuTaaLiY5zop6xbM2r5zdDPgojo52Pd7Ek6DLdv5xGDAsF6PkHNmpChm2GzTfMz1324DJuD23tp",
  "key19": "gab9HSnWAd7k88TbiHF9NGePzgWxRqG6bj5sx2dkzLcKYZHJ2UszKsgSf3nf4t97ydGa1YbFbvXwL3hCZNKjgom",
  "key20": "2vZoWDJunBL6f7qPbSWvQDRikgkz6Z4tV57MvB1mePVArpqvqW1PW44at9zsobiFSbJpFa4F9Hs1qM9SoXcAy71N",
  "key21": "2ZHbKLht2TH8TMi5ZkwoRagqmbKY8e1AWhvcYx9HnpGMnBDTZg1bv2Poy7YsEsHhm4Ury1vMHjtWfVZirah2WxXa",
  "key22": "4NtYsApnmtDVuLs12Ks5dGdG6xq9dd6gdDX2fGQZHPGKikNvWDVuzeeh9zPPb6vQe8cDafkN45tP1877DBwvL5Ey",
  "key23": "nX4XxW5qcFuNWyKZP5MZkgHhufudgFbpNJuAXXckiqChwJ8cH7YE14feukFwpQZrSe2pnLLHZbb4br8ms25bEvD",
  "key24": "zUh3DaewjLtHX1jZbbAQzomyRzS5U7CFos7KvJXoW3HMeCsd1TGWWXidTWeK9K3WVRVmuBf51LmjkNwUGR5FJRD",
  "key25": "41ypKnKKXm5jHkxBGxJb4oiQnt1bqYTsaQdqRhMEQL8YD7Cnu1GqRxehvUzNcAkMvj7BoDfxza3Q6R5TtPeax5PU",
  "key26": "5vu6gevAptFh1x1By7eHitLcnggMwNaT9F1PJE7dQ9bQryiPMwWEfg8j77UZb9o1GxNwbNNY6hRx6uVx54jEMQ22",
  "key27": "3fk921MpvQQBkRri6KVxCdZCKemWJTFUphu9H97SEae3uHCjwVXNjUCbVU7nvTVcRFx9Rf7yR4Jbd9p8zVourhhR",
  "key28": "3UB96QDoEm9H5XfMoVRkXBRpZBV5BcDqWjZzGTZ34uKH28xYDHYBN5Tgon4snm946a2dkXvv1Fe87gNhLaTuK6Ji",
  "key29": "C7SphMWLoQsCEyVsTs6Sz5yafNDLh5WNZMub2Zm7MkZnwJjm7bZyjsbYwaMdNg1HZUX7o4PQZzYcd5uo2PK3XD1",
  "key30": "3iTR7vWzq3bQ1svcRXbaoqS5Mbo9aSojzJebCaDpA2RcveLKFCMWJB3a6JjZypZ9qTnzKmvxxQyWpQzZpF14YYn2",
  "key31": "AnMzSWpF3wreaHHq6ZYpgT5xo587a4HPU42fuV6fqxoa9PzgJgG3sRxP6h9ptnGuNMo3kH4LchXAuk9j84NfuGB",
  "key32": "2UpswdbFfhGjt2hmDYm4rPfTb1pAE3JG663eQ9efrrJmMRNGwfNyNxWWCFYZqJPsmhniQbB9D2SdiEtLjSaWzbwN",
  "key33": "MbQuwA16XWcpzrH8AQTgNavqauxx2KHnoPiWFBKAqeUS9rLSdtsSb8MyDRgZTHZN5znZ6Km2aPwkDWw6m5JNfZx",
  "key34": "5nenndLdVPWhmn1GpX7BkWTqd6fNYoQ2KpciLnPmFdaRnQeaya9s6esyE7uVoZDtVCwWcW45fGmdzhrtj5kW1uzU",
  "key35": "3fswLMH4ri5tyvZmV9z4mkTkeb196mpftGHFfdPyQgq3dNwCQTY5RghbG84yCNtG4XkxavZ79t1yqwq2bnMLRWe2",
  "key36": "2Q6bt53nx8N5tus8wypRaLfLEFDp6H2q4iDT1EhK26b9oVc5bsNjxB5NpfU3BwXw6PhRp4wVjXBnVAGdWiLE98vq",
  "key37": "3Y328a6hnhS3sHh7n79riMxCrF1VHSntexMf9cBFRSxKVjrucfysj3B4DZJ5M1TWawQEJJCmM3bCkm4anRBXZLWy",
  "key38": "wLFbiNBLgsGmEZLFaioi24Ctx2UKvBwTWAnvRK9DqdBgbLxqSJFtY7XyxXASwowTv9wftfoGSLVSmUz2Qmd2n31",
  "key39": "3APru3JeQacGQLpu484fno9jpPi3kzwREWwQA9iVCX9dy4dVeqcDfpARXuFWXe89BRM65jLE9gqRJZdmQ82dKeG4",
  "key40": "qd6ktQ2zCXDyi9qeXMkaito9GbN2k8tXSBoURhudVwHsonBaUNjoVhuXCAiNVxHoVrNFmEoMaBUJAoAeAVYSovs",
  "key41": "5ToyVV5T7Tzm2tquVobESHkn9V46hu1Fj4DbYMV4AEG7dfRV6dpTa1eZPLYf8qVKfGryKFLDBU1gedpbpG8GTTHf"
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
