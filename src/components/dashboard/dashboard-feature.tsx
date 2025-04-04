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
    "5ebaJwE4Jagm33381QatnjhMwanNUTDGuG2JBqa4595vikFteyDGVe4uzzncrj2BauwSnAzhv1Md238uAmbDnPP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42sdSofKBRyLygDECq7eXyY3tDeffGPtDFHEvBXZ7yhPgjpS7A1hPVEaX3fqd46gcTLZeEKYKaRQeMhaeiiAHcki",
  "key1": "p4B4PWim1w8nKZR7hjjQnMtE8sA16y3cnwho2AEXuWHCMfNGFueg8WG71NuQH5kiythjH8wj35ZgoXSN89TsqXm",
  "key2": "5qYePZ9Li4exZ6KsJJFUc8xjEUeUrzSrBZ7Tqda6Fb6VpPUswSXe5rSQ7y4nX6jSJKYZ2DwCfvSNAwpqs8Kk6upJ",
  "key3": "4pC8tvCQ6ThrAQKZjMxwkFS775yxhuNXwNAVKY5euFTPmULVDSFGvSM8GSCM2DAj6xVSf1msUTCoZCYhh1KRskGv",
  "key4": "26hSrAiwpE6EGPprTSwFu6qk9ErPMtX5MWV8wG5YHzh3qYmFcUHEDdMDCJAJo8GAubYTQkpKPG5cKgqMT7v3Q7NA",
  "key5": "4DyKUqy6YJkX4vz4HFXzKdXiFHaC2aPhdo5SaqYJJM5y5LcaLYpsGToy8AGtSzX9oQKzUgKHixyyZ3KdCbbga3AK",
  "key6": "5npFXh3xa1GNWffxB7SPsDCsaivXVK15CH6i4kG5XXB73scy1Pw4tD2tdJd95XT2DL5GzeMd5jY22kbeUNVEM3KN",
  "key7": "RjkwmtuhA9kZFBhvYADua62671P2wkbA7aNnNoDdvFjFWD6kcyPqgeaPqoMkQed1CstdHDuGBhDysBNTAemRv1U",
  "key8": "3SovJsStaMzUEjm7RhzarU4ThCnuDfqcCF6iWfbSLoiLqD4w8rU5Ha1XeHd7mVo9Va2ifPkHzLa7shKFzBMoU9GC",
  "key9": "KrAMmKFYMR8aGNef22c2uBC5p6XcjBE5Gqc4u3wzfc56zpi8nrWi2JJstL3rbsSuS8MmUzagyf2BA3wSwXkiJsd",
  "key10": "2RgwfKST3LTi7mTW9xLu6Yzf3DFzEYKL13xDps1xETJRkkvthNEYRAEFJMa18DDdqzdweHzGkJz9GieWD7RhP51j",
  "key11": "FucNV9UJRzKRni9hmUASGXteMEYkeS1hxVFQs52rR2mJgfUnCQGBVRBLLWNZBvQDRcdNaMfMgrCE6jCpGJXguNC",
  "key12": "451z6RUqpQHDeA2uawTB2UWjwjqrXECFfkUdNSth13bWbqEtg5MX1uH56PNdWa8wuUi16CxFRm6zfsu3vHD5yasT",
  "key13": "3dj9mbfhdDWMyBBfFtBA9TuWX67Py7qja36Rnk97g6iEDiswBtEqZrFWo4PVtrHiMkP35MAtCWzNa6mVfsyEERS5",
  "key14": "5GiSxKXbs2J5LcvxUV6PnkL7vMUwsvsjqmas7WQMVvJwVDiLd5XqfcYPm1GddCBdmNaPLUUoZgccmgesEkqgv1vF",
  "key15": "5wRZCNWEy6ALxNa5jsKqZ5TfpDrAfr21PzZaSu93NENz8zBKyeKzwvjUkzSwsvBQkNWSxG9dVrx4qxp7CL2MRUu4",
  "key16": "sw9KwgWfYb6t3geQ7v2EMgKd8jCCBLCamZdaQNmbFkPMbQqCWYWHy4bcYarZsaXSXw8aWRyHoLfFxe5gCsVot4e",
  "key17": "2ouSbidg4DiTf1vCSnfUeSXv2YQ8ABHe5afjPfogaamcqKXDUeheSVbyAawUKeCj3R5MqQSgA1WUT28ZpePkNNCN",
  "key18": "5YPF8sYy4Uf4vARfDbi5zNARAMc9AkFpAEjdGTm4jUPiGc8Jt4jpjRnuGufSHNm1DZFEYpjq3MSPKmBWN75Pw9m2",
  "key19": "5STibFz1XhRuwC6P43L5aXthrrGW1DkwN3qHAKEG8mvJJx6deoELUY66dAKe6WNqCvZw36iiWs9JyhrTZcfy2tCr",
  "key20": "3WzBiyVL9y521FzxM7ndTKNoaFQfH2w7zL6E5rdosakfCUdqm4ydevF5oLAx9SvH2nSUsUXB7hNFiuTqsVdgtYSJ",
  "key21": "4rowMX9xz4Zf4EKpjfeenmQKVSaxvztnkaRL8tt1cViaoavFMHiTL5h4q9Pc6TQkif7syWHKXwxoK6B38jVY8JZ5",
  "key22": "BL6mkod1hvfQMgTE1iDfxMBxB7t9v2omA6JJXoAFrVeEW3ZEaM3oSDHm7fNaZVPnKK1zbYznc2RubZ3So8H2r7k",
  "key23": "4BRfgZ33wpRMHKLGVyvU7s43muUGhVo3e7Y9aWvjqmNy55V8wgNSCPb1tvqkSr8pTUiiKvLN6Ut4JGJZty6JzitS",
  "key24": "9Dig92Qt5reyxrGRTARm6GdkQEBZWDGV9u4Mxo1A2WAPGqoU2ePeLYbqzAz7XEgHiDLXcGxoRMMPcVq6URJPc5J",
  "key25": "wyq2DLQAV2uhvvS5rLiimuSSoayzFExXRSeGdZTaAswyf6vP6xiTDqjP3eeMpFTojegLHz4JC87KKtMBZANbbBQ",
  "key26": "54He4aCJiyXE3ZmhA9TJB76VC5ys6848NFxYxK8VngX2jpR9mxCBLUWEdMdUAY9yEL138p3sVV3y3aYoZADTkqvq"
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
