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
    "24vMvNyWLHKjTM8fLsQm1qYgZiFyY8gGcpTMkk47iPSK7CNks5dRWjudb2Qio1vQZUy5xgaU4C4dPvH4EaCAcnYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65fK79ZzWeth1bJzT3KndL6Tc9sGaXmYZFozibjq1JqBKGEeRvreDWiMHMSvg6XhevQ6cy4WEfWCE5Z6hRhFMq7a",
  "key1": "65rvQGASCyJSoJ11d1gVts82wXDjGB8TE7aTowuTNnE7QhBQ1fEKpdfoYHEXyPbsEL8CivThp3aAyMNifoDFVSzd",
  "key2": "5MtyA19yWfPpPqpdpf9hP8tUtEiGqtzroKPGfTBZQ2r3dLR9paYKGLYSv5uRNddP2gs1ExtorvzaDUWkmxwiGM6M",
  "key3": "3iGswuCF1U3qyD98S3MTxgvyiMwJDbF8nPe9r4RxNpYSi3tL6V2NJerqQqitEkRudUjVNQbM8DtStzi2ZK1xb8Jd",
  "key4": "291NHvKphsAg1uoqWsCAbidNaYRypmKzaTqs1DoYwFj1fKr51Df74r3fpRWpMqCgLydEXnfxicbaC66i9gsSDUG1",
  "key5": "4LW2PhGEvAwfMJDduSvo5tWBzCmETGL3KUwvVSMTNP3AnaFS7wTBvLmBADLjjacHHE9ZtGtLdBj4QvC3MWJ8gGTL",
  "key6": "4LMmc7hPp5M4BzYWtKiKrg8D7631TduKGRS1EpJHVmqw89HMDBoi4H9XjueDaokxFo1NYKNJLjXxg22NfpqYn8WT",
  "key7": "D53thCgiJkmf68aAyvRxL2vLyNUWAub3ZGaLyrTuPZndxQNexATmRTU3ueq77pQb9EawoBjLrkiNwGrDEufr75x",
  "key8": "2yDmCVpoLkeyPQ32yFXnAvV7esKui2wWf5zRCHT3ncTcpip2cwmvRh1Fx83WhK6BGcUe9jSyfqWRr5h8SEiiDiTX",
  "key9": "5NLkQwPnMoCc8KEB4V3wfd2Mgj5kVpfCUaihEib45gRD5pcYJSPJdhJtbLbjNBi6o2mPQRo63eNxAnw3zghJqae7",
  "key10": "4sTQvMM5JV8LdUzZ4u6Rmq5FjiYsuboBwStvTKuauY62DVnLshHya4iZwBhH8s3B62REJtmjpXM2dX436rqKSrqt",
  "key11": "4EXqZDJaWS8X9AzoKdWtCNkUuUfyyRVhY2gFu42xJY67cHKhUDdQFPJrByvkCu9DkmMRUFMV6qjjaQnSNkrDixSB",
  "key12": "3KATazTsRbjDcSWzXxVrkZLhhFuc3fFYtDk4GncYXuVMLMCQBkosrBTEQV9daZ9UZ5nZDHRJfy8qTmpP6XdArdBj",
  "key13": "CvwkV4A5CpPfWvmY84M9RKzFNbtmMzbS3v7HPYNRV1t8hZSFHbiE3UgaqwwK15TC6wbCfBWDBhtDeJV6HQjTHtf",
  "key14": "32UfGG95ZBM3LfBJJfJPUxZETQdh5oXwV4oVGneuGiYJBg6iy2CP1he7szr7JxfptsKHCthePMtEDPxdT4dxDxyM",
  "key15": "5tv8V1gzWnNStL3nH2jCGuLu1pHaR6nrCq7APfmXS52LHt1p8gymoNkEq6z68YsHANLFSSW8YJn8hY1H3ZPD8pNt",
  "key16": "2Zp2YexK7TEtiP9LiK8TufNKTjjR2G5X2txuXW2m4VyoMhpQehNcBceVcDEv4NmF8xbyZnas34dWEEmbv8sGwPKj",
  "key17": "5a18DEM29MNSVZhu6g1zzFunuNKnvY3pnXAD9ZCsTwyTSWdP1SMZRWvNp3pvvhAb2hNcrD66P7zaF8PcRWbheKqm",
  "key18": "2uZfQbN9zoCxDzVDvSTU7V5FPFDCzzJVwQ92YgRuSSQ6mBVjpscG8CGLaRnUiov3ZDmU2C8HXdH6VHVN6otnoL8X",
  "key19": "2ixRguijGUtAdsVfeU6nH5gdEHmKBQiUJfs4FqgxtJLKph5ABE6UteenBq97bEbqLL1hEUH2DnsssZ8uCYXTy3Uw",
  "key20": "5BLbgwkBXKthFy3jjhPb74XZckDyQcqcWpdDJ9fR3ymox7kLSb7eJ8Xj8TTr3LqfR9v7EJ9GuukGFXYPUpBcEJ3r",
  "key21": "HdrZFoy4UxE3528mTViSJpgLBfUxwW3feUvX18gT2HJ7Y4TZmJec4AqiyzjLHu2HvFod4i15jATd6iH19xB3JaW",
  "key22": "4XSi2698RENoivmnaXcUdK61RhE6qq64pD8bpjCVWZvm9bjwy55EGwF2JLBdQRcHKowaMmhHyhhcGBWV4UjSBw5P",
  "key23": "QNVih57Eu81Up5SAyYZ6kLoRgBNXHggd2ZiVSWEA8DEkjvR7aLbNYoWdyePuaEpfp3Yf4Bi3wUtzuKT6Zobwq4g",
  "key24": "352q316bxFyMQTdTv15tBfxhEV12fvUUKqBruXA2kU6BmffYwpe5WFiHeVAP3PBEMaUHxw9yvixgnnN3daEpuszN",
  "key25": "2zQ4g9DzHKUPLM9noNWBKa81f67kcMkfB2goERZ2B5V5qMptKzCHK2mouTXWD4fXhUEC1rfnnxYf6nKbH6y7MzTA"
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
