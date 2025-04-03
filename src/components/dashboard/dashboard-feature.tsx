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
    "63BDcheMMpD4tZn3hrGTVUnzoLT7PJg3byxCBiS1GimevdfMjvgPmaL83zSoJuNid4SMLUMx59QuTzELnk4mtoYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4CCJQzGS3ewYXFgT3cC96ZXFwzpY6ZniXzVQCVQU3ZpAPPof9rVJDGfASaNhgfhhjH9bKGvBZEBvy7DXsCt7oX",
  "key1": "6217KGtKBbsLdqSy9DtgRBN4yGeHNHmJ9NuET2K2VFNrGVDXp3USywLZ6boQzmTT36KbddTpAzDqwGoEJZ12vwWA",
  "key2": "2Cjar1T7T8byWY3VMtYUmJeLsyNhexy2uaN3CH5SxMUFhESUD71vuNhUyU2qqpBCh6qe267sLSAYEG6Hhv1PiGcq",
  "key3": "5UvvBvcWESmWtjGQmTsntgFz383mvo7Q1KUTgPA6ZX64jN2Pvg1QmhQ48vNiDReK45jLG5mYYqEjRio97NoVkekj",
  "key4": "4KGPCAn3xqnq9TLUXd4oXNXWfQbZcWUwkJkf7AcjwX7pQVuruuT11mxtcBv9zEpwFZ4N5qxBMeTqCqLuCqw3NM6H",
  "key5": "2eS9dE5jpA6C5C94tQFAMg15no2hoW6q28A4ZHreBkZcL5fDc8bTe8PfFRAJdK2oQA9L1eyUHkvn4W2bKtDpbF5",
  "key6": "5WVh5ruqPTHEY1k2LV42M7bUhb5wHt4m9rdcign14xSemwyNGsMEgVUJhK8UQCGoA6X7ZhqyxpbJ3mqAjKbXTmph",
  "key7": "5Z4zamqiH6VFsPVnEDkWEhKTArZkBP22dKHmdLxXVty1odSWaGTGLoM9gTYxkidWAfAHmaXf3MSuwoy1FvvNidQD",
  "key8": "3iroJtbXNUa8NZxSHxj2nYeRQaM3nZj8fHXbj8ZBp1xCSGHFA4LWxmLBLGoEp5JwYovfZkj7KX978xstNJDT57Uk",
  "key9": "2YHWi6qPXQ4BdTBdC99ET4YUBuRx9ARiiLb6e2h3tu3z6fcPVbHDM7NhCXiQWRRXupexih7J5d4BhEqV35okP7Qx",
  "key10": "2WwewxgxgrsF3EaEkPsQVc5aveHbxX8GY6PRVcCiMELs1GYHjq1UgbA3LNqrLbACdt8vmcbfUmTEyBj7sNPK4Aen",
  "key11": "3dyrfPcA2D6Umk5h9LCtu49TLDTvRxM5FhPt5AiKsFg7W7Wfm2qToEwo3Yi7sXYPhiAVtgiAoQKLEEGqLhg5douc",
  "key12": "4WscThmGcEBNhk8U4nk49EE7YerKt7wXAW7U7n6fz2Moo5D2XmJLp68xBumT3rEKx1gepEAScYVPLbfse9oaYShy",
  "key13": "3jAGsdDCgnQDiYn12sRaGpVCaGHbVv592PKo8Hkg5fBCPveQqB2uiTfriCGWEduQNYaV73NumQYFfE93erWHzMVP",
  "key14": "5ZFZE9zVppUcN4zcNoRRmkHBEGXGZTEDpgCzps38MrQYQmAWfkRYLeDD888EVV3Bd7hQ6CJnABrQkx6Nd2sh6rT",
  "key15": "42oWnZrvjYKUMYkHzFTdMWE4ENWrjbcqgXs5TN4FQebfPnUNWxfiAWinsQHVwfcLG1vGEX2hwhYCnuhzT4r7pUD1",
  "key16": "XzE8v4ed5dYDCKETBJAkkcKV2ehaUL4TXcL419G1naoVfRoooNMYRK6VVy2eU7VrBxBRPtp74h4WkRi3MbSHxD4",
  "key17": "3p9PuN78KBxU3qnPuoYAbpZLVpZdvWJyDTjNT8bKnFG9dPs57msANJ9gJ3wPy9i3BVEXqyh3wdHz8NxaT2b4dHFb",
  "key18": "SxWkg9iZjQrr5taufPyUu8WEe4TtNCT3thVJt4ddgeUrPfaYJWovRsQNGsaFwss57fhCZnX1u1v3TTzfizVi7dJ",
  "key19": "2m4ptfwKwDaVfrixyGDpfQGMFnzUzSwKd3CpihUMvhbxTLAmhwzs3m9r6ZU7bLyrW5EsxqiJP6bVy5shABH8QaJP",
  "key20": "2vCz8sJARVcL16fQFGgrsVCNLV4nPBepV2ngpztqJQjDQ22cYNmonZTFpWENnf5JEUchRmgKAfv4TaRQvng19Fje",
  "key21": "3GdDaATjEETyfTqV689ufdcJCoYyniM5Eqt3ExK71d8eYrKBWgYTkoH4xSQjNRwXtRoRkSNzwiCYxkmpTRCs1f4M",
  "key22": "3ubdmbYsohWUZ1QXpiqsP3w17Zc9HuKcKFqG9duJBWaPjN17bCF83DRcgmFAKXiNn5FP1iuATGuHLDpHhZUstJaM",
  "key23": "2KNebviopwjMsEnA5E6Bf9QjjnYcLKTe4Si4ZhefciefupgJJUerpigwMGdXTvjj7tGTQauj2LceGWQY18TMgdEn",
  "key24": "3q1eWhQgrmBytSbqBCWmUCpqv8uTskBfPbjdHsogq8NRfp9NF17HBYERwyLAj1sENCZxQQ7Q68qF9LDFbxUK4ad4",
  "key25": "3wBwbVn3DFDQAuAYZL6BBGGcX7VDeYU1HMrnHZL8F6CmF7e7YAZfgmcb7bh4Pgg3TiV2n6cNtyL5twqevQCg3B1N",
  "key26": "56e8yBg5itea5X8pnAhG6KG8hsGYJQSf5NW6arNbL7aV1j4hwWAHC2X9vGwx4Tq55DDcRiS8hXmer626GmgjaBeg",
  "key27": "5eu4LJyEwrpTAL8VXaUnfCH9ZWFWR3YYMfjrKZNrnqXzdWofG82SBd4jHYhuqAoHNuWP4YdQfULrMyyPA67rsFZW"
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
