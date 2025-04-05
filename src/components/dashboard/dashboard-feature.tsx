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
    "6vqHyZaEo9JA4Y4Z7r8Ge15G1Cc9RRfHYbSHhiCWWbakrdmTomVUPu3c1Kr5JSggcTUbVKD35Keq59CfPCt8BHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24D7ScoBWotSTT5gDrwT4tZBLpCBE5dAzZYmBGWv9UYrqWetP7uLKXJV87xVkGE3Xbuomr4tAMRhWwtMdUTNyFHp",
  "key1": "3GZiBfA175rFGLV9kXGEAw1k47xFGhFAZntZjuF82q3rvY4LcpW5epfqMXJKPAfg3pdVZptCcKrk1sbRYfs4P2C2",
  "key2": "3nUyDuxTq6UcYXXkbmtTRKaGVHCrHh9nHr553j7faPwE7zznUCsUrJkSPVGCRDT8F2fZut7uj68atmTWz2Gvef23",
  "key3": "4c1uHRKx9skGRNYz2nQNjbgp6q4bZA8Eztm3tchS42Bb7nCV8yGDnFZqSwJh5ZTRNLtftfECGchHCiKPfhNY2iqM",
  "key4": "2uRJ6UJwdSKs8frvUHvKj8LPPw6eDJyJHVUzGQvFJ1E2PgoGZ4P5BaZJcYBX1kztKezW2VRsb3JKhdFJ6x55vaPu",
  "key5": "3Xv2pYyurtW3mKvJP61uHszgPDiRBG2rZ7ymN39QMFQmGPtZRfxpc2fT7D6um7cW6N2sd8ox18Yqja2mu5pBup2Q",
  "key6": "4NTxemeL5yjqKu28eXTQVziUJcESbxoqB8F5UYvdFYbbeRXG2RPCrmmgjtt1JghCGuU5WUdYJVXwN1yKgEDirAJB",
  "key7": "3jUUBWninVU2Rvo3fNrznXKxqLMGr6y2f7qdgnM8FnBtoRRPjC1V8zWs1rAfTQr5d78JFxAEDW12QXAFBQV2hj2f",
  "key8": "wwXDdL5HRNgpckVUygXczPY6TVXJTfRJk3xQqaRnt6rcQk7dXxcUuJQC2MnqS8jPZnXJZFLgUFnDRmXSx1tY9Gb",
  "key9": "3KviugHvBsSnuQxYQ9tPLTH5sQdd7nVkLNa7oNyNRV5BtrKzG1rCU7fB4KPcqwzmNknuXu4wPM24CirYc5JvG1bo",
  "key10": "b9QjGmanEhoPvv76jY2mgJtQemw5FYDwLDbodNtoQw5S7Lv72mtNaYSRyBsuPhBR9kSJ4QBGZTmLHK56SXvyen1",
  "key11": "2NTYkUyEySsZfjPswiLVSxDSRFPC3vaoKWHnY3VPUpr8riR5pjUAYVYzDobC217eNf38zEhZUhN12yTuZdQ2e5dC",
  "key12": "hcFoaeAo69V6tTy6X5Wtxzpp4QH4zzUd2W96Hz1rVYaEL8bgYBHFqbCwT1N8tpZTt4ZiYuSzhYDdAMWsTDHTfuo",
  "key13": "3wzX8q6N4jbuFoEX11PGjfHd648dfGFc9PzNqnX35oacfEUfVpyXq7zT6GVUoisGSDe56VUxoUYDVCqJK8gqdqrn",
  "key14": "3YzzPE3m8o5k1j7KQNxhiyKBcVGvAmSJhqRYhcfMKfHbnzo26EB6aY8aQg6u7i25DTbcCPAXUkR7m3vXmHCLjJgf",
  "key15": "4yzxLm9FkQkUaUxfHiRa9KHB9YXSNExG9puSJSjUm7MCQvLK9PYn2fhgxsPYz5kCUti1CJctyXdBxhZNLeXwRaJA",
  "key16": "xPpUNVNbJ4UBG1iWrDzU9WXfgWsaze1NEcnjoz7mtsYbomKYqNDcUaiBzpVMHLDJGuVw9nSs3mKv5BWmEtPvidG",
  "key17": "3QVJP3twJvz2Q9KHHPeSnRiPiRJ2Q9gd8gLsNRd4vjZPSWVnxLqgk8js9NUugErcW9QVLrwNhsDSHuKzvAjKvPdj",
  "key18": "qnuq4GAxyGFcWfkWGoSeiGznKSQuYi5BqJj7gAYhcKMnAxDsRj6Do6oxNG7hgVnpBgDMJGrSJicCnFEYptdkrPd",
  "key19": "5ZZtStamP7w9o1xJWY9otwBz1yejNYuHcYPopAbniRWah42ZASgHDippWjXN87N3Uz6kfThzXuSxSz6hD5QBnBrW",
  "key20": "3R8XhEmyz5SPYsA3LEShQqc8bZ7mV7EdJ71iD1M2CHtxGgT76tJYic1Fr4121EVHvpVwfyFmWZoN4Vts9o9zUerQ",
  "key21": "FAu91k76WVE2twAzt86PCYU9fo32YpuHus4BdLb7tT1o8NDQfjQBYg1Sk5Q9xyoTvBSvkccBnvBaZJJDN9gtr54",
  "key22": "2d4jyCkCGcWAd2QFUPZyvbxH2asCooNnaiePmToRjgwZyyfDYqnU4Mjc7fXetHLpfpMa7A8uSY87tBQU2i7nGSdi",
  "key23": "3pz4T56oELGBcYPUKV4sYJWTKUr5LALCwRREvWbVQAbmox3rSCPFP7hj72NtuvekCS9dq6jiJJ1k3HjrvPC7H9FP",
  "key24": "5kpV6DJCwGNGodrjCJi5kb38mmpWd2h2UuUntHiYKNJUMd8jkx6ZxbDiayLgGEvp14PXV6QvZEQ8RdyCwE3vkVa2",
  "key25": "4VVPcZbRqE4RsKdULa72P2Uh8UJBUfqhU1X9FUifNgd1WHRaxz9ZWBf8CfNig6g7rnDsrYqLydcjvPaJBGwdX1Uc",
  "key26": "2x2E86Ama1JdopN7Xq4uLkD8xd2DzGbuyEd7EZeGzZpGUjBPryBB3tVLuUcRAFBL3eVgzCFAHSGsYHHPqFkQfuft",
  "key27": "5mRdnfoQ2wmkXcomTmADi3x8EsD2gNydCJvRFdXE8aBPGpYmb9GPLkRE2hXehRH3zUKHnJiy4Rv1ZNPdWmAdpMXN",
  "key28": "jj1ndnHhyBuyerg9ZJ3ZQVR1pYkFbH93x5ytaJbYs8PrCqajQ9FmPT7MjazqgorG2MD51uFtfGSzdoHv3DrSVkh",
  "key29": "Qvr2BzUKq2jLJDfL8B218knQfZCh4xsEANUGF61rqhKrc2doRQmN5Rh7HbcUtGHKD7UHTAyUvV1mXDFAXoyUPwx",
  "key30": "2rd6pjYAAPHJWhJSiSAqfZf69eRfwhQYeN1AWP7qCPMt65ry86vRE7WNCnxU7Nuvetr1AiCY5xZ9fjsF46xPXtXP",
  "key31": "8qCCoCDg2vFVgZSUqfpib5quah3rPgfs9UkcKFH1t8tqziQCCR7dXMTLZFXMsTPUp95hQK92JWwVt1xW883dxEP",
  "key32": "5NJBUWmw1gu4SG9R7k81izZtq4S9zWTZD6WwfGpHMFZ3tLDubYCnh2rpMGyv71fhH5oJdf5X4fiZMjZxujWzmBg",
  "key33": "5x3FBAnywcJCDq1Tb53uPAWbh8a8czzuKSwkQKZQx9CFrueXAyAzRydT7XagtbunfEa5kjKkiyJBnRy3hz8NA8G8",
  "key34": "Gq9Jn1KhDkXx9Z83FMkx49ZZFsUc5ZiKUw7Hu6e2TY8GUBJ8b5LQ8xs3YxcixkZhfiimCmhLxTZ7HjMqko7xeTG",
  "key35": "kFoWNBoCUCF4FGQzeUxqBvtZ4aznBuKjdRGbYT88zQd4K89hZabvYZJadojnAev97PVSvA79QLXFFsLSfKvBskF",
  "key36": "5sjySZzn74oQDgvfP95bfufscGaForK28YYZ6GUpBKiq6HVH9mEkaq499B13DYbCR9Kf8ZkCaHDdJMDCyPDCWYv1",
  "key37": "3tSjoWzyQQQ7k9xhNoxcL83UWmQ8n1A621ThQcfjVEiBxExfL8FfErLedJundeSex8ofSAz8DZQ81XBJkr9apApB",
  "key38": "4xMEpYtMpTovKkAcJMNy1sjFX19eGfDNf5Cg2NJ43xe5nG6a3RNu9amR9cZru4sh751tLebqWjTSS8V9hJxLZaQP",
  "key39": "4b4ah1bhiY7jes2UMkxBiiPuTbS5Bq1snPYW7PQNbhkSSmoW4bt19DJtDto8R5cTxbsEDYjk7scifmXLQFosFkS4",
  "key40": "4DBSvvahbNCARHD8Nk6WLaGM7zzVuFVc9Mz7FZB5zfD1LTpLo3c6ThbN7W78p5ckVzp7KuK4AABecmuwtMiw3L7d"
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
