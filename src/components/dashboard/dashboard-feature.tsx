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
    "2ocztvf1ixYLh8Es1xwcKu4EPLUCtrA78JFT6SsHRgteLz6rPdYatHpxveRHGpyeFy3rS42VxqhvdQVXPzXJF6pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pA1tfAbE3tw4PCdRrgZJqpy6MtJvYS2fTcW2dJGiLsU1EF8hny6wvxDJuSPDWP4anaQzQ9G7tqSsbqWFDYW1BA5",
  "key1": "NZp3Bc4tVz7h843DZiXiv7VE9w2EXPLuXdhk3fVGTEf4dgKsgNpPMZA54G3DzwUYKkbgRpJAxB8gL7p7iyLfKNF",
  "key2": "5uU27HVnVi4F8wc41FoD1s8aKBr6c1xdrvFekHLqetkBp3Hg9hhy9Le41pruA853VmAxxYMmRxGnniWwc4ztQYJH",
  "key3": "5PdbKod5Kb9WE99WBQWdd2jsdoHyvpxka2NZwhcLMyPXvYD4tad516UN3zKrMahJa364gYXSs6Xuo1Bb5itZwSH8",
  "key4": "4fgAUFqzDcyZQLyEDmsPnLYTJd1zD31Lmw13aaS5anBUjPTJ5WDxQ2n44iQfzwXD27XCKJ2KxaAJfHfJ94moCBrn",
  "key5": "57KKN1sunpBPLwvs9mZJzeUZZmcrMzRp1aAyKdqHDD7iCg77TR3jRCsH92TJ2Gy1zZ3FEdbbBFuhN1y63MyUcP3Y",
  "key6": "2qUjvtpZFNQksAL9YZtNWkFmCVDMpQfAkJdWk1UZXJFBCWoD5mtXPY7mT6TdyunQ19MqibifW3p3tDnUZM1CcbyT",
  "key7": "3m8uJX6UzxHF1t67g4AWXgXAbDKQDcUAAcEaYV82YKfX5vtDGp9HmVYpsTgRJo1PTVEYLZnykqczHPp64e9y23xQ",
  "key8": "2hdzbpeis7QUvUrC58iLh7XmFXoK3rxs7uBVjTr8sM4kyQdkB7hrtUVyt1JmVWkKk4cQSuQfYGHpQLYkRHTKwsrQ",
  "key9": "5SHB6hCqYiF76nSiN9rGohp389SZrKq4oj2V8RT3xoqAwegTzrXG96KJfKgniE8QaqH9gxrbFX9LNhYb76tE7qZ4",
  "key10": "5thkY1mzRwyQ794pqYrvGMEXCDhuiHXP6KekVb9Db4YkHwwWM8jdg1SVc7vNd4j4jwcQQTqGdNQNdkdY3QdxVqrp",
  "key11": "t1CQFzriKizVLx9Gwf95TE35A6tGrqgbGJhNuLy9CXu9jhLB6dz58u6KiMp3NfXTwDsGgWYge4Nv294uPsoWSyN",
  "key12": "gZf1tLo77Lvn5VQdS92y8351ThUgsdchKoKGdSJmnuCoAGJQ6qyH9J2emckZuXKtrqUo4XTBYxidTPtyAgHZ7wa",
  "key13": "MNKKCyNVCdBwaFnkkHQcxKSGy11iAnhY91AhCfsSR4jYgUtnKYqRPXKijNuer7o41cQ33ZW9pnUXR7tR4gBeRoB",
  "key14": "4XG8yLURPQB5LZT3bxH8pMFBopd4ZRxYHrt9AMDKaqLkrTSDDBqY6rxNyAWrc6gdiTSLtPPVAasLhxFaXobxcwz7",
  "key15": "jc1Cpc4L4jALZ5dngbxSrRGrcdhfaWVbz2Agi5qPukdA8LM6Y7xAQ4C4ktTmL7HYRv2e63WayXnyza28jgJv1Xy",
  "key16": "26qHFz2z1swGBuZzkz9kc1JN3KRHG3kmds7BjWBHoXzjxHk5L41XWceXvJscgGPyLF8AVY2RGUHrbUvfEfAz2Rwy",
  "key17": "4DLof9ZYTNGamTJnn8AYUS8AhNFWzLQ43UDD4D2UWgtF1F7aUi9ce7AjzW1kpm4TqXb213FAhAJR1KavbdzoBznc",
  "key18": "48hrDAWZfsKndJxFKKBiTCs5XP7DrYCG86fypEcRp9ezNdZ1dAa85qYe4to1NJcq1xpfBZ8iBfRWMvbV3KgsApZt",
  "key19": "5yq7uLbcCZ5A19XZ9Gm1KwwTaypRpo1QFAr1L6S3hJkTiexeVHStcyHUvFsD69sdr8VL3D6APG5VwA7XyqkdEXND",
  "key20": "ieoZteatAWntoyLn4YYxVMukMSfWRqg9sQZf61ESbXJT5WzPQSvWb5j5bYqdoynn8S3TRhyG679Yem8fRhP1dE7",
  "key21": "43kNTYPVnGFHrfkHeRKc4xgzXmGQYqD4kb77tXjMQbkYXtDFxL4KU71PV7Cfp573dVbouPxM5pEHMzuSRPuxfjab",
  "key22": "3QC6dkDdvTa4SY5mNXJ9hkKmRRbFLAKH3meh59y5M7fLy9pwC2A386e1oLRGgevUKCw9sF3xYANcJPPpwbqBdUDs",
  "key23": "4aouVuVcnusY2V8BVyfgyAvFNB5juTeSJAxMv6G7qpzzfKEjY2pMUfxUnBw9jvFzhyKWoKDv8whCHe5VW33mKRnc",
  "key24": "yfMsDBn8hH6L3p9wmx5Q7YivGhypqddA8FeFvTEZCMngXxw3pCWvDt6pYYUrQMqcvLkauuTjmA6osCDDtGs9wTn",
  "key25": "67GSiseq77NAXVPvc7okv8Z3f7N5DTmiBbNMSrGEkm35VJnTYxhUes3uh48VXmC4tVrtMrdEDsQmVVBATDtvgqSZ",
  "key26": "4WEopyH9y6ZfFVkXi74Yxuo2MB4SZPHnvJHeUWxhFKAph7ManfG933NCj9AGYumt92cK8BJQWqozvFt17RH7fYSc"
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
