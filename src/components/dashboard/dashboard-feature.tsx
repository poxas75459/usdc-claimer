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
    "5wGEw5Gmvt8C6tRqBu7rHqiFQ2HZBXj1kUh2Cvg2w4wefh7hk5prV2u6v81J2x2RauCvB7XV9dwMz1BPbzv6AQVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RGZVY72cdsunQq8KzBVbBNqeXU5HB2292SJcZhorkPcz8kyYfuxQKfsckWydasp9aqwmrim5bpevwrdKQoQcR7",
  "key1": "45HvvS1T1ZBkN8T3gm29UKD9iXP4TdG5g4oFBSqhxo7Vaxa5g7gbo8GNakp1SZZoXUqtWsi9UiCQY9wZnxj46xVw",
  "key2": "3qZVqbRN6i5Z3GjjKVcXWWUEFEXqqZEQ7LoMLdAoZ2RoQNethLLCsLfejGTjRLA6vroK4iVHgBxAbXE4hzbUZcVC",
  "key3": "3TRc9JeZzRTTVkEMNHTapicMWDQe9XSCArwUJW8owdE3NYB6dEep2yZQ62XpHqvwgkbt9NhySCofMKhiYqaWRHMm",
  "key4": "2XvU4ViEPhsnD5shwZXgWtyhZ2St472yAEdRvgfmzJYpo3X9wgPEW66cyBKkQZeH4uw8dLHziu9mtN22dEKZM4VG",
  "key5": "27S2XQeJ1UuKS9Cs2aHbxoNJgXiDTi4MnqP3eBBjBEDYX8X2Fhr4SeTZAyBjAy2WeGWKsYBNNxDW4bqFF95EidUT",
  "key6": "2xwxXeCCHzkV3socJfH23eGsQpCqsG9tE16YbhXX2aGaW3H7jRdyWzwbYEndxAwtQ7DsGGszvkWH2sodK8L1gYe1",
  "key7": "295HGULJ3UgEm2bPwnj3rmTfL27VLPbraaESFpc3ckePHHAf4NBZGjzkZ5hV2KHz2mAFhKptxHVmrjWn6kV6yeo9",
  "key8": "4SMeGXXep9ExvamuCR35smzrJ5qTuD1uujz8ZhFAsxE72hsyNQiRdcicUpzjGwTZbcHsnh9LvGmjYTB9NfaQes79",
  "key9": "vsftyQaXVgExUwFpkwEmhJuUzFuBJDhPDJVWEcerKCaSvnL81VGPPPQAzBzwR4v742LJohNHZyDu8NKzGss5d6J",
  "key10": "HXacg6T25sMXEYu9JvspRBrTav5zRLHy6k5NZWYjxLbDnWU4ZzYq3WZ2eh57CTx4pyGBf3qdaj9b7r94bfUXU6P",
  "key11": "3azpFc91Nq2cVsgkDGEkt9uvkvAdXMDtRAFpbEaaEdgLKohqvPsdxkq5yF7cBsX7hRtzYk374zBh8bWCMKGBPTJ5",
  "key12": "3eLW2swYjWTZGwMRRKky8pTTPEMy6cKjpzCGDhJFC355SeLbeJNuCpRfBxDkULAPeD9KyHmc6eF4Z9MesnMRUenV",
  "key13": "4upQ2Ba3gCG4VNrhREHzKm9k113SSCxDFqq881XZZarqLegN3xnUiHJ1MuAAReGjXfeaxeHEZFF4GV2nH9k2u7y1",
  "key14": "5unzjULNRpUHEs2LMXgqhSGjWWPsU1BaEFWYS6kbzZ4nh7JJR62pTHxFEqxXkLpUugVpPh17zUif8sjgoSj7ryTo",
  "key15": "5dLsk5Rk4JXCFAWyT3ZPXFRUcaUY7GK5n3Xgm3tVRq3sMjPisHBLKWeM839b1qQ1rStk1GvvaLfHLG3LJ4mjyikN",
  "key16": "5mmjRhYcictPyhryyjnaAyiKuH4VmXC1U14wxbQT1dUVNTpdmyGP26VjDVuEeJ3qJFHC4JdhMQwfpXxTd9dptU2J",
  "key17": "2s9p875V142ZprpB41XWHkzHYfcMqfUgoCyA8ekDkFbsZpC26tem3ctoEGhHntVGDZLxez9JHCwGZ2Ru4qSkN8Zi",
  "key18": "663x2KFaEr9SjRM81TH47MV89tjZdvVbNGzfMDbRipNL4yQPjyfBZmTZgrXCMDpkWowEe31gV6rkuMJksUCcJo2x",
  "key19": "5F9f1F7Hcgo4ENwCVrH8aqbC4YqzwwnSethmkTNmHkDMfHVKF3Nbm8Nddio5MPPsd3cVTfvPP8rGpkR5Q1T1W6vo",
  "key20": "5vJ5NR8eK9GbW5kPC9sz6ZX4ksLDqVp9gav6MA2YyFTZPTnfeMcvhjdnU8FUfsf912u9N2GjqjUsKZtK847mhjFS",
  "key21": "5WYVHo3NXqrJoQFVVYZWRjpsPhbpmYjZCrjvuf1HEwmPBGAhhSH6bhkLBN8kXhA2BPJqPPy2RsU1dQN3vh2sHLrp",
  "key22": "3r881Eyw9yJBRvYjkqJUhhJiTtBFqgm3ztvAhunYzLvpbSqb7sz8Mv7xCcKDBdN1GeRmaQvRQPHeQR7Qbn4ZK6R1",
  "key23": "4CnU9ycFCkmgYAVqCHw1FXnKjVzPafhorkw8pgKkKB1MeSmQdpZ7teVc6piJcD9fdqzBDuf9nZXDT5pE9DNcURJc",
  "key24": "62Ugsf4mp9KxGB4id59uRS5DigxnXHz6kZAmeHSmsAo7FB8p9cpXy38K4JrusgzMzg4RoxZnueBsoqtE7qY1y9Et",
  "key25": "4HuJnhhfbge9isZui976DrfmgRpPcNfcTJn917SDQK2Fadb7n6LVQ7kdYYBvMf6faS5kKGvoaiojFywa2UAXFMw8",
  "key26": "44RcNyRHUZSt7qoHiCjVTZxMLMDhiYVkcKyjXPQ2Seuh3BqgydEe4958qVvxJqM4cznqPHqMtUA4q4KBaLWchc1W",
  "key27": "5q82XiGQuLbVsR8AYAcxCSpEWj5vhQsf7mmsBoeTMV7ikQ82pX6zoZQwWbxpDNm3fFW2g9avN5ZtCrNhN6S7U2Wg",
  "key28": "erWaRfYP1UeG99hdzNHE9YLmC8KnUrwHdTmGCB3aaDtZVmkVLDmShzCsWypxMs6szc8SKppQ8U2wp9b3SeixZQQ",
  "key29": "dQMGeK25VXWRcQ7Sc9DMkim5A8VMjn9WNy4BzrhkKwgcnULHVoNJErj1vYdgvi4Rb6MbESav3ZD4JbJmfqRjLjD",
  "key30": "38eCEhgzSTbg5YRnAihHSvrHFMuiysPQZNrj3QvzFGbjJf2G9oeoUUWNb4smLJPvKY1QFayaqx7WCZNhFVncxhT6",
  "key31": "4TutP2Epkwya8qi3UtMYSZ2bunW2MPJgx8qL4TuzzD4oxEfTroQPMrtvwAfWNbu2JRASN31uGcRKDsPLmWp9DuDd"
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
