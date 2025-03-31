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
    "4tzUvwE7tCQsQKZqMaHMqn28n6spExSeviBLc9pcGtEDcWhs3hpWgMQMDwCk6JRv9jzXWXGzK5j5XrhztwenCG3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsqnyMSXZJHfhF8icSZfc5syfiQw2EVc8Hkzg7WR9bACTutEsyf19ByxQNomV2Jz6dzCifYXFTzmBwH23XR4deh",
  "key1": "65rzM845CgfHUxwZ1sQZcewngayKGVGmGJh1foJCLZs145RKVfCX2igD4rhpMCBt4CxjWFMkB5H8K3pqNopCi84s",
  "key2": "2hndeXzhPtyyUXfgYAWHemRw8BVfkn5BqYpGRv7TekkDzUYPmEqSGv9VtWiCNAi3T5jWFxz7TJr5qyJR9etWgqMf",
  "key3": "5cxcgsF3UeFGJ6YZYwLkMjKXbqbkecRrcDqWz1JasY2bKD77VAnkhESSNuStu8szrxQmnhSk6bbkXNoaGP6gUMK7",
  "key4": "2QhvbDqS6zcKR6mKEjwea7w8vBWjvJLFgmSLsG9Ttpujd7krCyvf3Dskic3HhV9WA8bwLRHvWuY8BvLzGNi6FDT8",
  "key5": "2ei2Xmo7v8xa5wpkm8V93xvcLqEn9xzFrdhdgaW9RZnJAXYJtEWqjYrgRhGgDbrgCJqBujXVoA7Zdoz8Ri6BUqsi",
  "key6": "54VrenjFUVh3x1K6E4QfwXnS2t3E1wFiDwHjW2pUvTCtdfV1YNcFzJaLGeYPuWrdFWVyJNnJGAGLSzjsegbqPeNs",
  "key7": "4sLRjQLSXMrcmQUaEvcK6FoQTrRcktKt8ho71c9LDxwvVbtHAykfaaT5vrBDdVmYZMj5oFB5BKAYGMDrLRnARcnp",
  "key8": "3PP4WMZxL9Anr4PtscpqhNJoFxrZRuRBtDHNUNSDCGN8h5kq5B7FwFFCWReAoQBULFXJ7yRedZdV7BNuySKSUVMQ",
  "key9": "ygsSMhFrPTWsBG155pHWY5bgefRdrefrCmFXq4uQb6SBTtGbwuSWMnPDwKYNoDj8uRT1tDzM6rzkT9FrPP1Snih",
  "key10": "49WgBrXnK2SpnteCQUaTDCCfFgwMTar78Bjx9KZzCYmrH5iXefTteWTnL2gWxx1ShkGKTHSMgB16eRtP8oVzSetA",
  "key11": "62391ZZN7vNxR918PsXcUw1ibpayQXsrJJ1fvkaGj77JppUyJhFAJgxYKJieU68C3aAgSHG54fM4MCauKVtPy6Bk",
  "key12": "66SAQgb1e6ARfmVK27fg8fXRMMShJcUCquKDZhWDhoQUgzzeVZLFaHrFkSCKPeZoAnituTGd9GhHRJbY9XVBDhBv",
  "key13": "2WAsX31Mhw7CbyMYrK2xxmVRcpj3wGe2XFR9fF6NDQiXZQajhF7ebL66VaiSHXirFKFfUog94AwviigBenzs8fbu",
  "key14": "2LGvyPz1yqs2B2gd9r12dMHKWwXraFgP4rcLv31ZYEDbZWghjdKNnSktZKsh6MvxzpZUZtLWGrkvEr2EDEfLe2nD",
  "key15": "5XGaZNaWMFahbEBCFP9rTRC6FDEDT2CwWwMXLtWYf5MWfWvdFrX28mJwLh3NWy5Fu3NENd7CRb3xh9dUQgkhZvXm",
  "key16": "3bKgyoEMFvJsLFuPgk4mi8UBVWAVqKcb7FTz5zEtRADYrrDdT8h8HrK7wBUAhyZGCczYS3k56ZwKeXUhiCRyUSC",
  "key17": "5WVbsfMDq7gfwP7tQULvpV6ZJU3LGMTNmYxrajmDaA89xeobQibLHxe1DUgBtpi6C49rXVchxkBWp8jzGpykQh7H",
  "key18": "2LZsJH6KedEnY9Nm34UKfv9AtCTq5W69JuowVaeyBa7AnffUVY3pPYCX6dscxx1TMLCjYFsC1MRipzEsMsW7xxdb",
  "key19": "5gU5Tv9du8RQ8UjWEnxQH3uGP52ZD35foB6qdqgxKiTjq7Qsq21HuXkMASVdD73DLNwj1KQKDYpfUdPGwSsSVXoZ",
  "key20": "4KX7smkfB7pw7e7oQNBeJhaFYvBHAo8zUnBBvedpNgTx1KJ2RsmxANxNSN5fPBB5p4g4DEUESY2KNRjAsF7zoyLo",
  "key21": "5CoSdKmpPthn94bJg2qXMEQcKCDmf9Bkv3vPhpacZz223SB53paRGjYJqywdBAz9opazAmptHthneLGn6eh2EMJX",
  "key22": "eTM6CxRmiz64oHcnFh6jmNiMFChsoCbkfRDpcoFELUEKbYR9GFEK8rtu3h5Ku3dFT8S1Niv5ULxoeSyukZFyNr4",
  "key23": "2mjLwkxaaSGZGe5oESG82pGv7WdpbmMd7NPrYBWANwZQfYRdm9U9UejUspnUNmqSqUAZhSjdAU1DqjY4NrCEAFNK",
  "key24": "4Fb7DAZVGnkZ7qrYEJoZXTfSejMp2x9zATu6MjgtMWn2nRX9NKuURiBvaq7mesfEbZGVaVDkzN1qc9diz3rT4xhy",
  "key25": "4itbnY6wJsKxr1LiKg3CzQeBAUKSmEKqvxYXamqDzg32sYWPz3iPocRgPFExht7BGHHVpvebx6eqSEcgLZGYnU9U",
  "key26": "2KXPKeXpWX2DyYawCxebVAUJixuhbTpRV8t1H6uERZtcQNKDA9ytuH9dqh3sprb9utgdUbDE4gFDZteDK2AdXkkT",
  "key27": "2RYuPaXX2f1RQuQVXyoZ7SF93piTVykZH7da9XmV68LUvD7SDFXjRotHbzuAYUZU3hLDeNeJ819BSriNsQgwmsku",
  "key28": "3R8xo1HNXYdsKJFaULKFxnV7s5GJospyK7q1jqAAb73MvtN1ADSvkrq4AZvUKGQbHjjM2psHfNLUsDdJmRv8QXWk",
  "key29": "2ptN81Pe19PLLfZZ9HMkkaKFVUqZTHs83zkdGMB3Ed6cdGr8WT23u2xx6o2XALU9yBo3mWCtrziw1k1fc7CMHoxe",
  "key30": "3jBp95L86mUUZZRTKU2KzkBY1otkJezZkjyYwHPyZgWavfDkziBSrNAFp1Lgc4C7GNmEUf19zKBdcWAizuTtX1qr",
  "key31": "5Q53fQoxWtUHF7ZboDFnw95Enjb4UFf9NkQqcGQeyc2Kr2KFdRxL7hgUK6Csk261WxSmMfXHbJkmnmxqxBbzZpQx",
  "key32": "17CH1RktL5sTY67EzLE3YT5PRPAW81TXBwhPgSAmUtfeVTqsWjyG5viqFRvwFW7Wg2ejvbAXDSJ7Z229xe57uSR",
  "key33": "NSXpzcmwiNonBGtaKtwvesFzvkbDDPQ34tTeSZGi4H37FPoPaJrtZEKDpGssTKRmBxGKTK1qiZTxrEH6cAt3R8h",
  "key34": "2afhGdzR2umMBHnvbW1jFwi5yu654SiYXssfQdkV56Tfrj3czym4jYs2UMFMJw8roxYcH5Emf2aEucgMvgefneG2",
  "key35": "4QpFTWAyaihkbZp1aioHD93den2WuFu5x8ouudSaJb69xkmZQsHp7yX6wdaiAaDJiCyHMdkjU9USW43LTYZVbaV9",
  "key36": "5KiQqqneJejX7rmrPwh1xuTwKi5FWZpd34gTj1QFB1meMDchZ1C5BGhSM1TUERLikC8fk9HRjACiGFY7vTkgwaA9",
  "key37": "5McDxBRQfeEEfKbjxLC6uWqYHEKiiWxLYTH3j8gTdd6KZtUKCu4U5hmJiYstvUnymaZR1S2nbFZWyepntrAPGwst",
  "key38": "7yXdMs8gSVW3YHxZbasWPEp9iBZPNuH151UDDnSUCgWQ3StYy5bF1dxUyAr2iwsusxtPmPadNH56zehuJCMZTCs",
  "key39": "2kkNpHm4XDj74nvoQhTLhdzJZAWQA9gUQFhcVRyGCeNZi2UDKt1jDRG9bTJfppqM4DctxGwBvfu8UVAkFcE3WSJk",
  "key40": "4NfSnXHPHjGd7T3eMUiDBbfYreVKQUKG3eyPs67rBwQ2mJRg4GwBuKpLmiPaVjwuq1VbmZWCrRHXnHpRXxS6RSgf",
  "key41": "5mJR5airjZ5mMomvf8fEwheYVyumK94c9Lu2r9bFcmDcUwjiYamBnpAyHAAtu9HNceKt1SXBARTDyGhf7njtN9PZ",
  "key42": "2yCxurnQM8yyjXsP3auPY66D6cCrQ2q7Q4hmMJrmgZzmZZq6vkD1wQ4P3xv67YABo29r3Xndd6NXfruTPWrov4XK",
  "key43": "qLBnJad2CxDKCopHM3hZf2gBwHBagEACnzvoa2pLRNQcYpAUZri1YpxfCknNFuokGKuhz27SwWRRXd9bTgmU35S",
  "key44": "26WqiXBWB5jNMar28xjDPvgxu2Z5PCTWQrA5bvvWa5pjVZDh6TTGTsQoCNSYqec5uqAJAgDM6URFX5WZG6HPpVxv",
  "key45": "361EpP5NiajBBy2LdT2ZpKzNbA6cNAZbQKriH6VayTrKR6khd6XUN6mvygwPky6eYVecfmZUKWu4wuJvs1L8mHYT",
  "key46": "XhiviRicC6UZ5bJpYBwr9BHbjT3HRAgTkYCaQ7ayeeN1Mj2Emqcct1uUXpb7Uy3iGJopGkez45raRZDiCCU7G9P",
  "key47": "JQ7Y8TyMx3U8oTaosuBaGgSZRQr69DPTst3d66qYM5KEPAYm3GueAfutHrEDqznXt7R4itF6CCb9kAkDB6L2HjK"
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
