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
    "5QoTcWnQo35dbHVziuYWLoZEZcEimYyuMWVMELXSySs1U37NBPvry6tJwAc4TGpUUHcgHRtzThCj9AMDXHxE4HRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "617zJCzwvY4mTPXR9ddGGNDvEnTfoYpMMPqZn8mhjzMAfSgKJrLYdj8XJqqxAQQTe4tBcYnwmURo5eBVqEVQYGph",
  "key1": "TiuHtkz6A3pw2XoSyMhuTqew2QYC6HmeXcaJHvoKSZ4TWkuEzzeZUVW7pDuCyWGsmCrsnuexGtXktuh3Z94sZSF",
  "key2": "2u8SaVJYgS4j9YyUcHvWeHphEU4Aq9u2xqJ7QCrVtKroYRxF1ngmyFrkKyXiE8wbX3UfM8xvRpjkPpccNTPgD2Tu",
  "key3": "4qeJtVrUyw2JaVbvFffD456YTE9oCx2vgXgS3cpKdiMu8Zp3aHWEb2PaG3yBhqSiTKen6ZoQdbZUXu3nXccKA8rt",
  "key4": "iD6nK5FCoKDTo5amxsrjpsXNhhHn8QW7sbGYjRANGRfLu4wU4fXCoXwjwZteKFaLrxyZF2q4sW5QeqR8qi15TNm",
  "key5": "3xKMEFWPU3rHn5Ho7VK44NbXr3chm1jpGo9HrhEPPKPFsjazh5G7RiAkvevCf2W3WzNg69g8nMJoR17eTHo1eP29",
  "key6": "3S8HN7dNtffEb2gi5WzAhNaVcM1MyJgJ3R4VUZVkc7fdJhCFRJnzuqRkw5yjg5XcWg3BdjYGUiz1nRQRLBU6anhm",
  "key7": "4b8t3cpKLeaRmMGLX4GDPXwuASXqsPmMm4QVQ9NCuunP73DXcfagbxE8Sgdw8hVEkVan7ThdDenBi63WgPVYLDLG",
  "key8": "2CbwRCtDwYiQDPRq2ZEsw8ijjwXPRx15rTRc8Fd8poYems7jVrYZN3eyCjcMS9G8T5Nb9z2D4c46kfGG1HYNQfdt",
  "key9": "3gi7JPhrSZ7uGBGrxhTgwS1BVm6JPvCjJW4Tibn6HrfzZ4zPBA1QsKEragF2PEZuSJAZB1VuULezT4AHM9Zb6X5s",
  "key10": "7DBSEZ9oyxnHnLpPWhUpHnvUYCPHDh3LNb4HPpHMag7EskT4kw85A61wYZPdQXUnLVQkBnaAgPQv8xyfAhVibNZ",
  "key11": "3YMRb1pCCuwYZQSeBoE7J9MNKZy4F41MwyqrJgRN1qzuWxxDF2cgoxBYedoDXpbu6FQeN2YtT4Jdodfq7AXV3R3r",
  "key12": "5PepQStskrKgdhYyHaHHYR8kpKB9zM1e78Smkwv3vGZb5W7onkKx9ZLkUrkv8nbKpofDxrawK3GhXLLsushWCUhA",
  "key13": "2fSHdmFvFR8w9RoFcVXtAiPAQD8SorLgwhwS6KfLdfq69Snf91EAwFgNWt9AN13CNjRC3TVmLhLapHGFX2ZWiwCD",
  "key14": "4bJk7RJh8rSRZ4zykTSURX34fcWRVGabGZC6mh9NozYEvi4y6kRRcsKt1NN9xhD1vYNPdgBzUVk1a9pquat5f1xX",
  "key15": "5pRR8e78X1iCk8PshKBYyixwkUYTdx6QoDvDMHtpDDhUwjmdRdAmYHwzPdA5GPNjMNu1GZMEegeviMtBceRVNPQA",
  "key16": "2x9aD8xP8QMR1Y27usdMngXyrwoaDzRVkwqGLWvij2vXBje4NwwgPuz9z2Z93UPT8WTxSFzXc2a8iiibw7K9XoTX",
  "key17": "5KYb67nMQbRZFjn7PKsPQiuCzKdGGZNiCiow9KpfLAoyeF8x9rS4X91DNVczwatDhzAhD6Mnh9mdqsjfxZDdqUPA",
  "key18": "3oxBWbThDKpTKABtsJgwxEsc5LkdfGgvVt9YNYMdGvsdu6Ry1hHSZApmUS8NxVHDv1zazmv9pyiGEotDCxaYbMhu",
  "key19": "419Mv6d3KnPLrqMyudrjnrUt8YkqWQiNZM5U52eiipnHV7g115NFbcKKHeb3KzWephsq1QgSrCrvkG36LYGzW2nN",
  "key20": "hcAK1mDhKza7kssjX8h5JPF7g7A8CdKEyoN6ZNbECPksc7rM6ppLHfFkgEYEHPtQyMR15G5qvqskxUVWcduBJ5F",
  "key21": "5g2sjKF6BYM4XoYjUKexh9hiTibRQFRKGUgidMSH7ePL4GFtNysoSFvXU2AdZAr1JEWR5CwJP6WwmxPjbAeJv3DR",
  "key22": "2CPcvXCx5pN9pvKzLGa2Le34iB8j2kosEU596t6aNcswQVsnx3CUqbZqN4WgB5wHpiyFTEVD2M9vyA9oP8WeWEdS",
  "key23": "5yvdWndD898xQkb8K3emtayCD9AghhDbCkyqRpmPrGHuLPz8jmocok77DndXYX8XiGGhTZPn72h5jzDti6SEXcCF",
  "key24": "36LNBBMduRqKTLCUonBde2fo9DxpVVXstH1r92QeWCBwF3GnmCnYcDsTC1qvaLFQdybysLainKq2BqNZXu5LM4Lv",
  "key25": "4NzNZdwnAosinWBZChbXkwmCH3q7yZbuYJgWF4noEwXgGSDshuSjefQB3Y5s9PKraqb8NSbfXbTywPMxq26bcwXV",
  "key26": "5pPmtTVkCQvkM1WCWxU7Uit9GJjqi9hfaSBWfhw9zH2D1mF5464vTf1298N5SG72mXzt3p2VEguvJDAP8U93zqKR",
  "key27": "4YWofaDyDQxV4VYRGwX6eDokr87fBAZc6hb7Ym9n2EVjfzy5uPR76toMoyoDBr662mKECJ7VVa25jyaRoA3jX2AL",
  "key28": "44oMNVCvoXvqVLPBQzW2XyEzrLm6nWccB7517aZik63cWoCJWZ7FuS1Xyhoi45W5E4XBv653G6yBL18TN5nK3umc",
  "key29": "5bYc4NRmYCxygjgxi8MNAcRfdfam4utzANHMBkCgqHDzug6cSrX2YXe3TJ2JfiCKVtdVsuZEz3JNJndmD7FwYqpX",
  "key30": "FkwoqB43NDcwcuNVvRgypQKVWgQ7j1JacxnbGiAvm53V44NMDTtZjr2D7p9hGoSRnDTKyVQeXjTGeovs7uY2Bc5",
  "key31": "5fNELw1sqgpSY2tnbER8jZQPKhykv7D6rGS4dEMXPyyMHwMg1KQG1zhR5UqEQdUW47vcw7nQPywDZMwYVp3xhPdg",
  "key32": "5GYVCpbNoCpSB1C3Vdistxh9WqKPsR1pAaEcHzsX6XtyY8fyiY8MU5PbBuzMULhZapc1u6mZa3KcteKUqBEoKtt7",
  "key33": "2GxruV4inKQhpnzNS8rTF17VL6JDemNP7dbRbDfWFLtMPtYSRFs51CytiWAM61Au7g9w6n51nnbfjjUkVUz6zXPs",
  "key34": "4cABQxLg5BUPzGi1acEdUmvQiN2zqou2v42mxW4dKKDkPkom175uU8jdpwoJPwDD9J86J8M7mgMD2AGuFk6cqEx5",
  "key35": "2c4VGhr6Jb8rqMJqeaN13YBJb67pzSDSEKDeacfZz6bPdQs47hHqTxYX1EsF7mdxu3PxnGFAWX5NtQVkKZ3T8XSd",
  "key36": "3LG7gHdhyF9tX9E1hR8KyA4wtJonMNPpBdnaZGzMyPv44XVWWEqKwLjhy4X121pW17essPwxcbFUp3HMiuJ1UwJx",
  "key37": "3Ypn7buCKh7UkTipW1FzRCsoCATu3ChksKbnbhD82R37KrR77iVNdjK2fiFKExhFQhBPxwjF94ixrEBjQvuoWUqn",
  "key38": "3EenUZzrE3kjnBu9QuYQH4D16epe2HfPTYgDMkdKXba6wuRLkJZgMQnzkP2vDBxCzoSJkeuSfdKggpCJkmjm6GEW",
  "key39": "3gprZXyTMbzcCMEedMuPtFX1p5LW1MhmzEGf8itF7C8Mb94niZXSAxkm8CWWFZYTtbSnUyLYbT7PHozSeuDxTaGX",
  "key40": "4yMFc6X34xZQHRfhucS7ieqh46eqSbXHTSdZ8Cm7vzrQp6oVjzNMexwXUWk1EyYjFczwH9RGjBYBbSCT9JCDvMcj",
  "key41": "5Pmgoj6mBNAdUyA5GxG4P82Z9BkmEDc8o82DgEnNHaeiSekbRHDZCmKFckzDJzMtRiUcq6VLswx4cHEE8dMAHJEW",
  "key42": "LaZcrgWGYrA8DrF6Wc8Fubs9XtFjjGJe2fiUHsAvk6bcfMzyanEjajsZBBZhV1yfmvmAP3ex7ku5kHoTowTeNXy",
  "key43": "26uVAKSJUjmyEqNPsHU7tskFx1odkPKcTrT89woKgPrhMWthE7yaHQhamcwHio7geCe7EBGXPSebfzT6F69RrHP1",
  "key44": "64Qk4G4WJ3qXxFB2nBzRniQ8iX8eAEQ3qBhfKN22kDMJ4nHyC5nwBSbdPcwJRdDARmAWP9h6cprBXo9BSKXCh5ck",
  "key45": "3fPHS3B6eVYBmFpQZ6DdJ4Z5eUxKKbK5o6DRMPbHSYPQzaMfYYjZe6JSMFtTGM8eervFnB8GVN4PCEAfMwPc7gZ3"
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
