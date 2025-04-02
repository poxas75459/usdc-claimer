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
    "4DhnMPnAKsSJNsM9AyzFqVbPf4VpU9eNmFoPQPr6MHryB4v6yAYDM3qEZyoj4ixXudxk8BCNf4rfN7ADrp9ZxnJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJQBXiC84ZkhUfJy36tEKZGkRFZF3jzm51jDqCg36EBwVAz1HyG2oKhqKyhju72nGngedCVDQ6HSrQWVAcU32T7",
  "key1": "5SXXCSgAXZfZ2ZTgd7HTDLVDZRXHHrnZcDgNTumoKrQJ3mN6DoBnrCvQQ6Q8TDzorhC4PSF4zpRqDBNnBdCb2zGp",
  "key2": "5xQsJDR2g7WRPJBjh3kQy9WKeKidCDDUDRVds2bAu6NV1mqKDn21ctZG2aH3WvSkKPJEzokLA4wxkAGsJbwp84eJ",
  "key3": "RRQhgxGML7WBxZtNene1BUwnaYUL4bamcHhydVX9DCJ9rZq5bVUYUhPFNyXfQU3ogx6dq3quz3jYaECocWSm1ik",
  "key4": "4JcdKocvZh4uBBFhjgpnV9yTN3vmdp3ULrqJp8EiuTQwu1qgigAhkwSZ5K6CaJmBtnNgoqvnTtJFy6mHGgiqnkEH",
  "key5": "yoQP7qYSUWxyCwQxuPDGX1VTwPeG6nJNvucAi4St2XepUPdCEecSj6Q8X8exFmvrdNzbDXX3Rpwcmjd3GJYfDbp",
  "key6": "58YTXvSACxepeCjjGqweRGm6pSnXYkwzEk9Gf3DXxxCRQUdnH34wbXUi2CrFTAcKCNTs99Jza6YiozJu4k1T3VxE",
  "key7": "36ya4H2P36iVw6JQpfMtbxhn12MPmHBK5Nek473YfXAqCxX8UgtWdhP8DPvpaQvBjqGUUVyXyf4wRS1N3mdFpDuj",
  "key8": "31L8tGxh963QrriyoF8yq6ATGNVRwJvKTbcgnK5sPfn1kFgvMknM6Sow9TFQGiidzsk1mLeV1yHTGaBcQLUDBxaF",
  "key9": "5yQJcX9YMf1MoLVEBJQqF8JusjD1M1DBJPxWGF4ArAQsGVQxLEYi3r37Hq3QCFB5ysFWd3U5CMTCv7NvfSWVjN7A",
  "key10": "AWLa8m7ttkSjbfDYnDNf4xbT3KTz8j8jfm5Jpu9VX15r3obYFkMfRpfggSbjsU2voLHxKGnH3uDdHYQqyy4NGfW",
  "key11": "SqzJd6As3aaY8A53JNPvgCFwmffGD6cKv5K7nr7CpXGKRQaBKQ2u6HYQirQoKFF4RzqkpZHaWGgUd99YK6fqbUM",
  "key12": "25yxLdWgvzrW5is8Y9mYRoxW8kvKKkYotpuphK2ohqFngMfuRBHZbUPXupHc5LKUDnYtRFWSy3LKUrnv5ykEDgkc",
  "key13": "3NsBHDRkvJHiuLJVW2K6jPYPSoTHeRPDPStSoguJUR2ZTySsoP9HiJ53rzESw9fzuGH8mBMoKbKb6oegacYgbiJF",
  "key14": "2Td2Bgpqs4pZ1nXygDShvUN7qXEWTXaoR9V6rPARaoNQ382w2gGgRdfADvibwroMQPzr1FPkkEgtJzsVkTEPF1R",
  "key15": "5Wze21hvdF8E9LbGibeHJRwpa6kFdN8kbbU8GFSoJcqTdKhsvT1Ne3Hpbk9biEcf7SZHWmAb2QYkfjCJ42T23JXo",
  "key16": "5FjxF5KX2cDZMewmkZdz5E1ciNy56HKUZy3CdfFGHV5CpGEeHnFVzkLCJHsii2KnDocZyMz4iaGKJmryo9ncjAYu",
  "key17": "66ypQafRSCaZ7WD7jDvBXBnrMKC6Dhz8wmvKPum6rAZtVetyRT5YvMDRLU4NLDa2Zsgg7TXgeNzNF97R7kxuvk89",
  "key18": "4jcNaiLG634cMBpLtaEubvnKFtEC1cay9VfJsFgVaXhvhhVq6ocP3535vvhzzVET5kVux64t66UcS17GVzAJZPAH",
  "key19": "fuNjjn2ekKN7ECMHcHogLrnSTecy75sSDaJj6KuDCMMcfSpa2nu3Uvqty3kqpMpZ8xRcpDLbMknXfu3eZefdTGX",
  "key20": "2d4iLH5pCLGpav45h8zCeh3z4CwFAff7tfE7fjQvX5WqZgNu3DVvnBAhYdY6b4Q1LAGsKHdy8QMo9A8Yk6f6Ss6z",
  "key21": "na2d75qbzZEYKuyxkX2EjghR3e7aRh2mCoajEdZXXzcy9Yht61qe792LenSK7tKjHf39dGnof25BR2smeCr4oSp",
  "key22": "54CqYL675urPbqKsD27tarPChKZJffFWTPPmxUDg8vv6fxJy4p2YxrqeD7NNRpLfqStsQtspCanWdw9Qukvev6Sh",
  "key23": "2UMYUPtE5DB38nik6RtbfSEzTMLmQz1Cvrem88FKG8auigmZ7NxE8g4jMySTPh6PHAynUtjyZgkaXACpBU3jgwYH",
  "key24": "24rNVcVg7N8VcqncV7U8ittYEBviWseZ77sA91GB1Gu9Qzds91xTc25mqJCTLtVG2BXP39vqUTTCpF1kPk5BHibf",
  "key25": "3W4mMks4du94tPcVqQmpvtzrQb7Dz9GsCyFeNh5azCiv7mPNNSopHYZpMtBe823jXz7tTGqDhwaAGq5NhJRQc23U"
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
