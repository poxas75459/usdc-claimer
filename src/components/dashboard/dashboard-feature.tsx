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
    "5hBqjZbpFUKwzD6ntLkqesqkfqjEJxNrZ6p2FWYhCD7HdHtjwqJfhn4xgbAnH3Aycr8cmT8wgR2FzHCc83i1iQNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r2TpEjuG2mNwWATZt9cgDRiwPW1ufaeNfNykoGf8FdYLcNWDa2SjDfM5wvyRjgX6NWrhAi7SxW4pAXFQpA7sWvw",
  "key1": "a3Qo7QcPLnBaGQ6skTecoYk3TPXv6DQNAzrFmrw4BuP73a6BMmx69oWTANebJjgu6dgsGxXFnvPJLQyScQdcW8Z",
  "key2": "2LTfBE8axKPNSYGn1c5oCmvVBWg6Y1HZVfgCGihUnz7qdCzJM3n1j6AgnGqdhTdVrmR5geBaQbN9jWRuNcyoM8Nu",
  "key3": "4XctMezrSBUYPM8avFL7KUAgjUoufdcaNRo84fukkg2d1UdNhdazdWu368Us9Ygbbb5KB5H6u8ia67JYmMvVJYPL",
  "key4": "4UZeFYnFesWT4rwNCABYR79PxHyX73pD22wp8ci3FSyCyeW6fqZFwcqFSht5otTUeQujGKZqd2v2kVyKgQFVDNo5",
  "key5": "5ETNnEvykvJgHv1R7v2tpuR6KwLZEBA2VYsxfuJ6gqjAzRggcSZdrEgWygbGyQRTyaGtqKtwafTp5iBUAGcKm7Gd",
  "key6": "3n43aJrcNV72hQvd76z4rs7vZu7mDEoNMzuANA7Ysk5VwUuA4w1GPWadP1EeooUtKzKjr4pZaEp7V5WfpfQX4eHs",
  "key7": "4X1ZfVj2prtS9ryaC3AiwhQJwoXj9GWMxDrLeLTTvbsBT9Hg7AtWjbrgS3ULyXjqWHBgCEgkwLktHg4kgf5cGf3s",
  "key8": "JMyxxmb7zjoD24oUWhmr6jWPeBHxd7WPEsqtzyKBHY1r7vpgBvNZmW4XRY39jkW9pNWp2Tg7Aad3EU66MNpSyTx",
  "key9": "QyWT652ESF1m7aUdxBbyNUpDYgFD3dsNCEUNsYKqcmay1Y2Xst2THr2C4s6sPK1CZQrANbVKAh4H5EC2eWDGV8A",
  "key10": "E6EgBC67QsVVSUy7eKNPsKNTuuNWRzzxhTULPfoMTz2YZvwyxLokTZbx3ecn5mMBaESgevzswx4xEjEKgMPphBi",
  "key11": "6kbv61iAcJ14aufZV1tLN3A5yvZzoM4pn968vJV2frQcegiFMJgCdQk8SUkqaFqrZzrNHEboP9mHMUkbJDQdsAM",
  "key12": "4SMtvwuVJBXbVMrWWQGFqw9wrdrNHyumnaZMmD1znyHYLrKy3sMwKRg6bDTuzNSFUvkpbqLZYUqWGJZMzDc4foY4",
  "key13": "5VQpAX349SA1PaeGNhnXcWm2ZbDSuvSkqq7JS5bve24yUhBTvxxhVgng7NBzJPbmHJkupHHxHisdtDRpUe6LbykP",
  "key14": "4ojK8aRBW1W2B3YDVxPQDQ4nCtDtRibnvN3gN9VTLRDhPP74PcBzozwoB39TR2jpopAjZXc6w5v5BUxTD181wHgQ",
  "key15": "4b9htg32eHMwu4SP5KteHMKKXZEeqS2A6Rv4bs3LY6NPo4houcRsA2sa4dMxv8hQdQ4EKScQMzkVSZRUQER3wUxK",
  "key16": "5xLNDndkjAyG3cnjzfL8svLbDguTSXXK7jRpa8fVoTVK19ecu4bJSWBoazxsJ68etAyKcbVZbVUWFbR7XgodDGic",
  "key17": "2m7gD9M2iHZpohLamzfbhRnaEPu5QcFNs4KqRfvxCvy8muQcLGgb81HZn3mFsMFw1q3vp4n2yJA6CpsbyNW1AnXT",
  "key18": "eJycpSzf6YKW1irFfaE8BL3RHerRdZ1kbcitzH7cTjg2KwszBieuLLkNFv9fEoanNGMnwb9jCuzAX9Bki7wRiS8",
  "key19": "2yczLL6FLH4g2aC7gfQsw4NNrwtursy9LVv8YC28adwMe2bZpqBEDsECAzy9MewZZWU7K8cMa8RYqpFc9h7bcXUY",
  "key20": "2LEjs8wEjBzgyyk1V3EfQQTjYvx6aisE7vd1M5PJMood2NoJ8Zu7SfwRphHLBazQ6ST5PTW9BhidtCiHQafuts5Y",
  "key21": "V2YsHGEA6A3wcFJcPd6QBeMBsFvVy4fPkSEiVXxrxrZJ4syim3B5MgSZCk2Szgip2yjBZ7zQy6sqpLsESeFxzQg",
  "key22": "4e6HbZmQ7Z7KBNurwJyinRERGp4ZpcjLzrgUihZykT9qZU8hQDQrbaHxPVxWNsAs6eUZkaxwHrJYkKfxfD2awVce",
  "key23": "3becr6XZNX2zhWNrd73ENYdZdVE7PnibaX4469Ezg7aHoumurPFk63JmVCRXaWCRXPpc1PWxT9mPF6iJbXtPtKkX",
  "key24": "4o7aRjD7Cyo4nDbFc7PDb7TR8U76z3uDrLj8aCGJgFF7CoRdrpN8PZpnx82PSMJi2YhzxQVHEf4zhiqsG3Ag5oDx",
  "key25": "4vwSgmffZac2KjMDj3yGDwG6HgZfUHibeAtnypWyAmEk2zh1tyYs4Y66baGW44ZhzAxvPZ24NDqqdt1fG9NjRmd4",
  "key26": "5veNB1ycTYidBxxMvWt2DjknDLc3dN2DHPoZWQGgFvVjmYD2AfvQkkXRpWoea5VFxdxgWe86SG9JhizSc3ML8LtH",
  "key27": "46yRY9sVAU6zks9e3etBDqYrCoUcn9Aaun655Fy32fLs8bhYH1qhYUY1P6En8nB7fSDGYq5qFGEPPUVNfq7Q2U39",
  "key28": "2ckYecPiZ3sqQwNoSHkt1Pie6MXFcTaovUFRMpDra3BzjeHCz49JYqAthMvD163nGRdEnNcAmDgKQKJVptY45as3",
  "key29": "5sFMabEt4pyEJXWB34Mwu1cuMM5EqQJLQwRYUXZwPuDCezW5UCFKSFTdqmBnPha599jHMjWP7VNingN4hiy2hTVJ",
  "key30": "2wmGvjrFeYf71Po2XHEppfS4zL5BDJKyxWqW8StQ3qcxtDjUQww1M17K33o7jcMU8ximFc4qGHkNt86wuTzYKMUT",
  "key31": "2kThks1QCbjDuHVLS6gKNy3Lyz3nea4YX5g2tp7EuKga3cSgNesheTefeRHUYVzvJRmdnigGHDBnijN9VQKUQMTV",
  "key32": "2EjXzJqCZskzkYSpZjGrTe3C7Fbhdyvkcry4DPPwcLj5RUFB6fisDsBw2kR59bHUX7ZxazDWwjnYzEioS2HypwEE",
  "key33": "4sQbswNQ5VF6sNAZU15PUCX84dpts5vX4oaXJvb9zc6zwDuAzbZiKJHrBCVvfVNCSJ6ACWhXnFMXXVip28woJggZ",
  "key34": "2tMRVEz89Efvbfmyex9eWVw2Lck7zwijyUkXdqNeV4uWPZfNUi7k83eCUkeTWYAtfH1Mnvr9jjXKQ4KJuxpB4kF4",
  "key35": "5Y95XoNWVc7cGxbq17dPyi4d5bW6DTtYuz3aWxEKBCkmeSbQwmNauDzRWPdAKYrxAhQeW4fPi9MaAb1FeuVXf6oU",
  "key36": "4NpRkrActG2JQ344SrXHjJgMAhaG5HhQYRdrngcemkCzxrpspchz6nDQwnyHYp4d4qnwL2ZVm2ZQD8WQRbjf89ge",
  "key37": "47G3NFxvd5ov54U11XruRELpezz7NXT3GQruf3VA287EXfzhZjApSU5JK8vMuKg6c6ZSc9Tj8e47BSgkSnr3AEVF",
  "key38": "31UMXuLqtEbsjLjFsT4mvDPzef962YwahX7ZixoePT2tGjKrwCDdp1cbii7KVgJwRMvPbJ1919sExA7WZf9QicqY"
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
