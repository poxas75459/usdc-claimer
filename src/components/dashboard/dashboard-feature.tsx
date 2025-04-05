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
    "3AUDA4h7JKB69RexLSfJDBWtPuxpyoNNj3MekHxvw4RJRCTUYcvnn3d7VYVee4azDZV881Rh2J8dAXHKM24o3Zqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g5yjrtpSxcW4k6zrVDzoHbjZfWgE53RiUGKLSehBX8gbTpU5cVpSobyEX8bg5KH2WPQS54GWLJScYcaM3nPSGTQ",
  "key1": "5PezFM6QvMf5HhvunGCAYn7thqU93HcMR1e6sxQCd7CH52BMndx24xPYwjgMpEQVeVC5SfMA2HLeHTQWfFjc6CzU",
  "key2": "67JV4jZLcQfqE4xXfcqn7YuHdokruFhaDEtQMy5y8naQ9FVLZUjW8dahRFgcMHSY6bUS5msz7mUnZvMgPPnKNnT7",
  "key3": "424JcLfuF4uDgzrPkmTvdwFa5ZMEz1M7EkL5BsXmDY9MeUy8UDF5gXLzjtSJ7LvpoRX53Rye7LUwc64LmgAp8RE5",
  "key4": "5NpYthrxQiy45x4WBV1DcPLuSoq2g5FZCgG18hMiYP8hUto1MCimvpQu2QwnXDPCqF7hpQF3qWdtc3fnQ5MjbFSN",
  "key5": "RjKWay1ZasL6xzmiqXT9bndRVRyTxYusNkRRcgD5mxQTtH5PXE9pwcH5PHNa7FEQcuY8vwg2Z8sXNSvuPBGH9Sk",
  "key6": "2eF3KKjQQBfUihAMnJnsHR5KPzLBMNfsd32sKpoFkW5LTxHyVtn75HbQPmfgFAvyfQAcydxKBzhKVMWbZqTh1mXf",
  "key7": "AMCXCsiJG6NwLnxq53jBW1BeCsjZ3ckBokpDakuDVsMuHC5k9psLmQLfh9zo3F5j1oJ34wgasBZFU3ZoU88obqa",
  "key8": "tjzDMBa3mYkcQX7aLHBrZpr649rmQPCwVsmWWJ5qWm4oHBqeQKa4tEVximUr4NXymeojai5xb4xrmaqCJv2iqfa",
  "key9": "5iZgVz4DWr5ks93zaA5P9giPpNhFRM7MAhwn1afEEig8R873WsPejGfmRbH1vZvPt2wgLaAqNxRDX65BUKbxeST5",
  "key10": "4S63fHPYNuMgR7zRT59nLX974wDgp5TGxG79PzB1vcaZrXuk9tFvK2eXmM7vQLYg6J389ZUgwP4zcmHKUVpsfNg5",
  "key11": "3yhMfpbFSvC1YpyAPfx45Q6x4x5Spsr6m6AVEda7KMj3bz97vC8WiQP9c8ZCDNGza1CVdFTgzYfxUEVWhH4DvkZH",
  "key12": "542TbzQFZeVPz4QeAkgyUBVBxjHE3Sac7YgCqgFrDhWAkJzUtU7nBtnf6tirynE8CFQTp1QJgm82o5nUgxhmKrcE",
  "key13": "5hfNfjT9E28QUJYx1tPLXQykMsKE77dEMCpgxLgggSYZ5FLp58WD9BwAVqTUQCexzaRjHQMmcthGKYvrs8Rd6hdr",
  "key14": "3HJXCW1gPdgFLUhoX5dTLtHmnVHiSL9a5BMeJHYSyuCydm9uzMECpiPrzCkbeowzPyFQqfrPp7k7z6ruzUdfAeuP",
  "key15": "3hvNnBeYYpTYJ4cPJzEsUW9Zo6LktHiNGc8Bj7qEU9DDJqygzH9gAD8p9yuimXxsjWt13n1S6ww9B72gihwLP8Tg",
  "key16": "5kNv6r6fBwCrTFmTmxYD8jd7UaEeJjLnDijgA3cEkYxXz26CmdSaom8p8FRZr1iVMjsjJ1c28ZBQwZjXLy9kNhV7",
  "key17": "32jzKT3pXDhVFVC8s5zfNuaeN6EjZC7u4WgWru19QrvaM5poAHgmL3QVsS2frqGADzRcLMtZbXmVga7dLvrsFS6X",
  "key18": "5R2hTvMU7E9sP1XWPThMtku9HEMXpWhQvFJrbAiXmCNX9RZk5FNd8EkJ6pp7wGGD6cod87JXvbxfmyeLnPXeu8Yd",
  "key19": "4YmEcNsR2deU3h4vxm1aHwvZDhqrAeGH56YpRrkhsYqkYbrFJd2nU1nqRVyvi256fXxcRFoKtmvVd1DPmkbt5hBB",
  "key20": "5YPikYYWUY2pJ797zdNpuiY76RMEhiHcaTsXWaHg72XL34DqPAiufNSe9xxASAhQkQES13BgYucWMNFbK6mSJXoA",
  "key21": "43cpWqN2AWvFctcbXrGvxrDQ7AqQprfwJShe9DnNWYxRtcbngsGrArdFsRUnpzWFrycQYbSpQTANZxyuyobsET9N",
  "key22": "59hJt6FNpgUV4ghDwCsLH5koGL83jjeVoXMcnm5J7BucbN68Qut93QL9AXWgQYZXu4ofHgyLCrVcq5ngQSZTRLYv",
  "key23": "62w29QL39emign8rXx8opcWAdCgPTWFsTiLtqVqDBu7xj6kx7KevSDuEveVcPRqNMXpGZGuJD5q2gn6aabdKSFJT",
  "key24": "HUEFMZm3H2hdv6xLU1TMu4nSarF2sN1GQLEhHCH3zTgtcZi7C7yQsSxSCPEnKuwMiH4nTvkULg7m8S4B4wkb8BN",
  "key25": "5M9a3gvD8JXuMP1YM6564zUDS9uhGP9Z8aQyDPwYGyQpbKDvngbdSGsEpWNoeZQMKL9XWAumbf7n4cyF7odVXU2M",
  "key26": "5BeCiwWmwni1hcqySeAviPYs25YXJ49GNvzSppHSaVZhACmKws8da45tULDSjGWKKmTtuydHAWdEWoBDwQ4Q8y63",
  "key27": "5LwSCKez7RnW4EJ86VEskYubtNUDUmK6TbfV7qQ7DAKNfF7T4EEFAiyMcJhCu7brpJfzmwusCKMAd2tXiEcGpqiR",
  "key28": "k85pcB62X87xTehu3G6uFVnoezKLKBScH74vjYckGkagHt752X2hPZRwcMmi36Jm7jNRLk5muUvzv5WBMJ6jitG",
  "key29": "3hrTL3evZkMWRAgdmEd5bKK9RYeqeTYqtUKLr9M1QbNnmMZ98wsS6oWBsLjtN4bnKK3Cqu9PmUzAvGWYEiLCKRoH",
  "key30": "21vUYLV754CKMyLo697V6enV9Z93sgXd4PEjBiktg5KrVNh8iMMv3YGkhQG8yhBPn255g8YEXtCacNV1LPmtRvAr",
  "key31": "3DgGb4WqNNgzPK5vbbiLceP1tT5bMQe3LP5G9VYBzV9gAsKYSjnvs1P3Gu29YysVjr2FHrmb6RmGyNt6NAiS5YCc",
  "key32": "5nUKsAfLRb34NJFbY5BZ9UtEpAaZnmSNij4JBzjbqYoaYbp8JCCiAsvpG1s7m9QyQgrJ7xhPibpvMdSiy3pU8NEQ",
  "key33": "5U1cR5TAAREo28uaZ4QPf7vDWfhcvDX956LzK5MyrQLeZU9LQM18cEwrKCgGrgyzUsV9VHfvxHwjDtMNr5BJfrHy",
  "key34": "2VQMibHUdfAAt6tWPHGFPzebwH8kAMqXN5awTJKnrM2DrfjgUYhFgtTpj9yj9epdnTydj38jo615mGupDs7FVsyU",
  "key35": "Lz9x9rQeNEkuhXMGjhXjyxzoWrah43aXWFpgDxtS5J9St6g95XE3i7uRbziDjvWf5zUQzqR9UfuVso3DHLjEhnh",
  "key36": "YZoxoHQfFiFkgaGeh3hgnmUUNxgKATjNy7uFrnsNM6LV3S9ftc4Ktn1xtYcscS68miTZVvh3hYYaSPXqtgpyHm3",
  "key37": "4ECHqXsKWUEFd7EyYa76rmY6MyrFu6483RRtpVkYQMVhaMvZ8vvWxxJX7M3w8c9dEJAg5F5C11PAVNsZs7kJdpvJ",
  "key38": "4vzVkQECtFLmEoK4Bkt6TVYtXtHZT9HLDZqjYkCsDY7gHE6Aw6JiM2qYxqk1fMDBQcBZNx7a16mhgBZuvFJv8wQc",
  "key39": "2UdTxqfdajKFWYj2cBRkxjkfp3dCRbr3CrkiEsJi1pE7aZNmQkP3xPfFH73rkitnWnRpYTH7FGMRG76G4coM6Tv3"
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
