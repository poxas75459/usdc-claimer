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
    "51xsLWCDDBDufPhikejtqm2Ehtiagb5VppkBnaavXvstaYk1cGFA53wbu9k1f5BX64WAiuPzci4ipcK9okaw95pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCouYzvQpd5oFwPeDqCkhk2LrG5HJyDdToFqQSF3mvLoVytGSph1NFvwwddFambg4YnjyzQ6gwVW52aWZGd3zRv",
  "key1": "2bBCcEmuXXVDGYNexoHXoRf5YC1EcXCD7jHEdGqpwfWinhSTnA4xZ8Sz7hzBh3zU1py9VkCSnTNXLufZnnQsgBN",
  "key2": "3iEj1tngkeFpr13aSfdHySaqksCYa4vNGYEEz2zi5iayRzvytWwaBQTp88WH2oAAdZeQftxmiJ1KLVT5ny8JtUuK",
  "key3": "2BVXTBvCvgNEomfcEeSuybjkpNyy8KSvkvhmtR5UipyJLhmDkdgDejX5iN5Rrc6HGquT9sJF5yuGg9rvf5aVLC3U",
  "key4": "2Yt9DgvFBB9nyZK1KjB2TWkGPcth3iSKC4wWzM9upQkHaqjkQ2hMUJdDnwjkgEEK9P3tr3DmDW1rTnAyoeVZz61C",
  "key5": "4XD48c9qwDrkBheNfgqRWDzzr68yHY8ME1YfV88gvbTt5LfpzAxmoFvZbfqD3WrA1S5Qq6wz7ey7ih2ZujoM29Ve",
  "key6": "TdkaFqCGQuMiA8NTy3e6bSTcY8cWnftLsvQ31nbe8SjTX4uHUrqVMBooWxQ9UonG5rerhbAi8wGozP3P4v3bzeN",
  "key7": "61yiSgxBKbH42rh5kTafLeKxasQWysDuxjTfLnGZk7gRfx6akv4jfnLaKqcGtuqgyhzLsdb2iNb9H7wh56CYa3KM",
  "key8": "hNw7UWADx9V1D9yfHdS24BMyvdabAnMLbJcWJAnMxQ9AzX1GDJfBCMn63xqS7tH8K1wVnKh68PHZxbVypuNP9Md",
  "key9": "5zUPE6yQDR6RjqCcXxgJX8GS9c714FYzWctDKQD1rawQ7tK3sysVjiMU31SASBXDABTNHu129tj2Meb1yTHhHyz7",
  "key10": "5J7yXAW6vdvZ3hqKDwQTaETThZ2xaW1AKsUGqQDwvyo9j2EKeKPPvbEG58unKtMdGyEqBKquWXbZnWat5o2hpw5k",
  "key11": "42ksJ8BTVCRruJ4EPzffsD2kaXxKuuidVwELEU6hxA859ZAhJDt1p5KAhKsrLzhGwPxa3hpCj3C5pvopeDQAoYfE",
  "key12": "5vVhcqB8iYax9HDjEz26suZTZB992jfzPco8ACXGfiCHL2TsJR7Xj1m3bkZxgqNWxFHR1VWE23xo65JggRvn5RDt",
  "key13": "5okm5jmxp3w8XtGdWND7nejUTHK1TbU9uZgHygfvYQYhHCq9nSCZEGrK7Cd6VBm8ZAaeVTdhB6Qp7TvP8TA3KVLD",
  "key14": "3V5s2GGwFjAnvhzfVHJxXy2oxK2QBG6JLuuyUFACKxDsgJkDpfWQ7zn16e65oJWQr3N6xCchAx5PaFD4QVQgJdLj",
  "key15": "uhvwKkhfuijVHnQazH8ZzD9oojyqJUPUwiGSC1umPkLjbRAMR9Ygh2X5FC46qxxbVRAX1nTAEtLcz5q3eh73bRD",
  "key16": "3ZouovnFpq7Dgs7r2QeobZrTA4p3fYiGPGo4ZjpBPqxDke922G9f8cb8c2HsyfDZ73vPhKgVvaQs7qqqRzXWzYeW",
  "key17": "3b1uBS1E5Et9gioeip6R2RBP82x8vPg3h4PkHtAuwMEmkw1XmFdexS5jVAEg1WAgt7AJaLtzQiPWQ3jmp74aEsFS",
  "key18": "32A4eRn91LqbXRGjDVWTSG4fGiGqkZ5kEDEuahQb3FM8LoTqndwdr3jEpmwoYD1vZJnuiKFdXLdwcDNG5x7qLeH8",
  "key19": "MBzNG3Y96RQW9B3b1AqnJk3Zxx98kBVpcqeTngmT88g7xkHxZGM6rRYwYs7bLZFDnM7wPkPcRrKSv67MTneZ8yt",
  "key20": "3mRtdCL2TrhxjZNmLyk2TywCiBxMr54UWwLARZmxWmvV3MtdgnFTW85cSVH16MjApKZQqGR2XH1yjF86P2dKw5wc",
  "key21": "2tKzpprjXBMtMeRwHNy2W9ZYVKcpgZVBMuZGQeWJNYwpFGiHbvMbdQ5zufLcEnVqMa3kiaHg5tuuRFTzc3hC2YTJ",
  "key22": "4PLmqgC3i8hZFcjLmx4ERtBeqeiTMyuhLPMcij3qVhk7bNmPBsru8irWBabVUSWSC1M4PukvbTWdwbUM3Nu3mS3P",
  "key23": "5EDoWZpCKVH1JQhbFgkBFxa5fPKG9KGr5Z4zjbKknkEaDgfw4EgEw8Qt1TEYzi57rgagUEA12quYx77ubke1ZDQ4",
  "key24": "3oquVCFzmLxFUgLodwsMkRJtx5wPDg9KfGxnSroknLWU4jmMRCsq9yoQbGU8XDxVeXiGDs2Gt1ss1Ga3BRU2kCip",
  "key25": "22SJcJL7CXeHV38inLaN1CMScoDTkyL28YFdti1gDfdNwtD5Qmrv6X31N1iv6n9rq1HhmmxfQwXSWmaknZgb4hwp",
  "key26": "2n6tedvYno3nxvUTRu7AASjF1WVXcHbEmpCYFUuS6SJY9un1PobhgrWM1GZCCognunHkZY6oLR929bfAdzR8va35",
  "key27": "swLJAqaph37bqg8HaYzvWuLPwmWyoqneCmr7RQP4eWDFPV5B72v7wmVFcXCDxrNLDRUnVeWFUrMpEXt9KTW3x3R",
  "key28": "nXYdSr77zUbcjx9ygbkEWpL1KJ9RXXdiVosvDrU5ZfJtG8629dswywbhQwtTKuLzPrHiVY4kg8oxkYonZxXYHkz",
  "key29": "5Dv1yieq9UsmqYhdFm4XP7FZnGgL5E4ny55NKamHmcpnJ2t2qAAsUoxH5JUtSwA9yWmNPmHfGGdLh7Ct541ETGEj",
  "key30": "5uEAoXBaksynZs2ax4RbJVR9JEdgn4DHXpe6AUpU5sTJpmMepY1p9CCtDTvjqzfG1S1y48DPerYwXZGhUwTYp5kV"
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
