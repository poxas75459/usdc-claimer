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
    "48VmBU2ahCSnR5nHsCVmmPR3qmbJkSdtpMvkai4URVaX3WG3nbKdYFmE2hvcy5fNPoD2fsap5wGgsKWnxoCjL9kL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwMv2sjt7JGW9KrUCbKZRWRvG9ePBf15ivtr6sa7eHJTkAmNL25DGKQVP3RwMcu1RhABgLXZxXoomovEdGnQqju",
  "key1": "3Cd3rqDqDjHQTDUdLZjEsMMwQrFRg22Xk1iR6S3UWYZbpwpTFVFWBQEuM8aPuN9D78zD32ebASJJCrrNdsDUkjgT",
  "key2": "CEtxNo6dWtY1hakdmypURuyFThHPHd6G5KamhPLsoECurN9qAY3tswHB2wLvqTZt8YcSax4cBbXqiMt7zefkqTo",
  "key3": "25jM7RTJHJoHd6YcKgqM6LjQCcbrQ8BjcoLZ6NjuhR2a753FoRbbLMNndRHGsZqSerqdPQCGj56VXSETtNKL9Bfr",
  "key4": "42LGGniUx695NvguQzn1e3Mr1NvJEHcMHSP2XAJjTyHWSBefcLtrHD6w5VvokFFRKmvxSaRANCbXZYeCVY6ea2wv",
  "key5": "u3GVzvgg8SuvDByHLqz2fhjACRLcp374LRM8akw7TewKrEiymQ9Agg7JhY18NBCWKCmghVVvuRkwGXTMN428MjV",
  "key6": "5VXeDF6B3hhNmrQ5vspdnzEoKMZ1kUhqPJZEzAYf5VpetNL5JHbedTSDmzk4uheAab8ug5itn4dQquQnboTVVALo",
  "key7": "BBcpyNsbbuaaWjM9tE1JAHBo2ouBnkbpQSNcKZ4txep8kKkBbT9i4BVU1A1vhZtxdvL1xcf2tS9HKcbWKJkAPYo",
  "key8": "3MfHi2Te9EfDymufs38u6jnBSrFEFh4Kh9cqm7gSw9YmeYR5zUUydDgUYoHtjHYQYVRXhHjSKdYyHVkq3NDwas4y",
  "key9": "47jWQg3VbCviXBFuAQiTKPqT2f5GQh35b21YjKNb65cbuEEFsLrbkKrmV6ttSpRKfDY3T6tdC7pPDXv7fCwjwbWH",
  "key10": "5cXSVXMxSMUGHr5AEWbZcuWH5QaVEpb9pQNnRnQAWdcYYNCvwFb2gcT3417t3GD3Cab5GeFqZdXUSHS4ZMdjr8JK",
  "key11": "2YVHPTJ4ZqUdev5KUt3DgcV9PaacbHHg5smvV9MVZvwkbKakeNViugUbBEj9R177Cmvw4t3zmPSTxT692sUWTs4S",
  "key12": "yXH9sK5kj5rK5Wj6R23PJHreHhUnMdwehedQG9LTxKYAVsbyoXvbGVUks4QzJjoSw5J9KtDDaRWLFhnhjJMttWR",
  "key13": "XCAkbx9ZCcZ2faKyyisEYCpuEedE2bgkgbxb8ndJKzGRV1jqvPvtiRBUscghMku3oZ5qtPrng5f95uQcDFr1bkH",
  "key14": "4otLnRLqumhn4CLNb8ootkUbk8ECPe8XkXVGjDRW1orEE179icQXFiPHnF6j8yUfPWnJpFAuMfeTdnfzpY89SFvn",
  "key15": "HG2eYUPFWT1M3Gaj8mZQ8cmLz6mgXxXcdCCUC6LELDe37eBsBHkCYDknizmtx2eXCFGTwYHa5o8Uapta16FftRs",
  "key16": "Dkut62UEocgDq5UdB11vdNzq2wmBjE5RmcnRHkEpH2sTVQYcH8cDaFq98U63pUaZydSbfrnRg1uNgonF2UMdAXw",
  "key17": "5mAi8AeN53bbdEJFzJvCpg4iZXAzKAYs9hffjqVaMWYi6AKSbJFZ1yckBNaCTKWw7XB1HRp4r1GJ8DXa3QEbupae",
  "key18": "4xGAkh1Urj3Vt61yVdSNa9KsffBBtS5cgAoRFQ4Fe7m1Qv6PuMUo2mGJwBsVXsVz76DV6CjzfW11hSSWLg7h1kMo",
  "key19": "4yHJ8zfEiFwDMpiDL3rrwV9dtpWCkKNz4vueUwogRAewp83zFRH5n7gjjWrLUmhbMoGGua2k3DcoMUT5FjYmRXAu",
  "key20": "4FxkaRQAzW3dUUD7rC2aJqgnT9dbwx7FvVoGnVb6vainmZPNAaVhwtq3oFFa3yqKkz4XuVDk3Sbep8ub174gavXM",
  "key21": "d28Z63ddHUnd7tr55z8TpAYD9WFcByPy2PJbGSXtHRWLDDg8Ph7btSk7twWqcxd3k6XCu4z6KEYLTAbmBWaHPjX",
  "key22": "4ehxqmbFQwM9vLFTA7bxMizKuit6tvBDt3qVfas2UEzsbBdtPXf68sYQiyhTAvr8iFVDyTdzTEgZ7wAvcvf5u1Sc",
  "key23": "6yRToKYUxToHTCtLYx5AxzS6QEghfrnLcvpT6LCJZQaxE4EKMpLdyfvugPV5BGP5UYpqHdKc7AJEUafAhfmtWK5",
  "key24": "5a4aC1eie38DPHpXtBfGLkv44qM1LeRJchWE7z2KMCHDFbuAEW4skbYjVQBLpmgY4zdxE5BrjPK8Ao1ypB82XoUA",
  "key25": "62Kkq8AqMKq4UTQy6dLPWrfzn5jzYcriK2Zo2XvRic2yv11iQmTbMUgeeiA1ovE5KWpezGt2QDsQhZj2eXQASDTo",
  "key26": "3t2z8UQmXMYMA2fyTXhc39TKbpQqGAeMTZPiiXp9zjLJScmX7LQGrUUFMCJGYr5BuFYQrZ4vsnRJHmsLZZ3Aoq2D",
  "key27": "boXpF4QcTau1MBbk5VtvmJviWDcqNmY9of1KTwbZX6LRGDA58sWP5QGQGMyTqpgXJhFN7z5WNHLRGoK147DybWi",
  "key28": "Pq4KXcKjthPm7GJ7JQt3Xz38LuMYgfLjBQW9SBeG44GmWTTP4RVyVPrVDxqF88phr5tu3KF5noN5DMPk42fHBb2",
  "key29": "2Ss9ydoLc21g4yjC6eJEX644ykuaD8egYPt6iHn9iZ1BJ6TmTtCibQScSZZSPz54CwF1B7uYMvrLtNw8vhoRQma7",
  "key30": "3cip6baFhbaYQ8pzjQV4H39osiJVt33cyz5r1hxdprEUq19G8cABrD3zk1PQJyx2AYM4WxC2StZJPqcNuwWJn51F",
  "key31": "WAhMj61UWtFnCCcKoSh8oLYA4kgJwyrX3UkdP9DBfTBKRDrSrA6Jy54ppbUFs16hVo7yKsBPyshF12BtVLR2f5j",
  "key32": "3SqiXezPXsJxG7YMTmLZsSNEUkMDegJqG7etXqaYtZZA7aCuTLWFdWsfdGnnJimeS8QcfuB1SWVSbd29rnWjwAfZ",
  "key33": "zZ4nyVBaSxWBc1AHLdNKAXU2MienjdiFWk1WQyrpt6E8nAV6qGmATSBLjA6F54SzyErSYFR3fJju1Xh7T2cQoif",
  "key34": "5KPWfVpX63y5tnE2beGrExmrUrdSA8ESF2TUwMT8GBtCnjtAwg1uoeYpK2Y3zuici5vuafBTjcyUD1yfFYB1Y33c",
  "key35": "2R3iCvzK2Hzt69TnaQRs8kNnfmg5vfrcgr4LgnQtB5TJhp4je6hmbCfK8wvcFY8oMarJ5SjdkGhm9MePvY3ZnEBo",
  "key36": "4T5LxN5Dib2M34iCr2GMpsVFNw4JWdfrkqCq38hGU7jKkv8YbnYy6ZS5ygRXPqayppvxF9MPGKTcx5TT6En5p7YG",
  "key37": "2kUyxe5kSAQGT4SDYgWgjtDWTgNTcbGmsSHsxfihUJ695cN62xNPJZwhynXTTsL461KxbUeUGa11pQxwt4DXFkeg",
  "key38": "5Noimcs3exFLKvTTTxTRVzv9vgwZu5JPabLQXPvmHExCAKSKrhrNseQMmMXegDwZZKSs12NjtoTmRdBPE2KfcdfH",
  "key39": "3CEWsMTc2jz4gQWdjcdH22mnBR2sGKLRs7vBJmexdthjmh5DdEQGbimynNHur6iJaqyNzZ2eH7LUfvaM6jMotR6W",
  "key40": "2TrZGgu55gaFoiXYVcEuyd68BCGh19HKxZqpM7dJRQrVELh8pAHiLQNt3KnGCrXRaD2b7AGVHuv9cwmMyjEhcvz6",
  "key41": "3e8YVAnr6UPpgoga4Nw9n1s4wUvfRXzNHuK9qWBNXKAmucQwDLY74m7vGT3dWu6afjkkiFmHGh8UbYDok7DgVYCy",
  "key42": "5168FTw4JtREvyXpnVBgpjaqdNat873iaxP3i4TakdEScRHtD1742c6Bi7mK9QW93kWFqHvWQcjeAo2mchLmXUZY",
  "key43": "2BK1aDGi4XMKKSNjvYbCNjT4qf8UhdcqYf7LtkUZkBcW2GSZqcfUn3yyoYj9BX7rpaT7iEUVQSpxAEgcZ6jxxC9i",
  "key44": "2jRGbsx4S8Ao4xJ44bmTmkLEjWAqzFbNAucnhvLQ8oYe8GAa2YsR2nbaryjKuKTURCLk1JmErvxm9rwFcFMA9enx",
  "key45": "2oz3K8AuqRSHMcXHJfK5Q6VyzXDauWuxh4Y61yJEa2E7MzM1kN4yu3vs8yxRNoEf1MQhz7Y7NVvTsYAAVXKB9WLS",
  "key46": "4wnhUbk2u44cogKwsAYQzeMyZh4E8i6qvpszxCvfgE8YpSwnKL7oXAjCLC9Q3DYX8ANLP5nLtvZa82PT7zbJyhxe"
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
