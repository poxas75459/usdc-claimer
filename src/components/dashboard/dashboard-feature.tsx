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
    "5Q6boP4QRo3gvb7kNySP4NovoVqRR5MukGz8CVCxCjj8PiZLHjjnAHfmgoMaMKsWBQhwuiQBtHFzizagHE8vHEJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NLJnKSgbYE5ijcpykmanUt9hbGxDqb8yJM2Yno2UoWP6gpNNNb7ZWAZ1ectxDwXnBHkA9hLxHFoVtWY9ep1xfA",
  "key1": "38USQX1onkNfhqr5kWeiemkBeLnjvbwh3H5V4JL75788FPH2s5WrJiSM5dC3nDPkqVvznvUE5piuA2W6QMvmGTYw",
  "key2": "5BsUeS8rSWmoJrBjXeTcDCvE4tQEEANMWRgr9D5RtHnR3yjvCppY2HDg9rcVPKGjbzpHn9rd2mXhgwvjZ8WUwFSu",
  "key3": "8dMnCYcfB6FgBEvQyfz1nUF8d9sJMjnmBqUV6SGWwdE6oF9MUUaCq9L4cs3HqRfPJxMvWztGhqeV4peC1t8D8Uv",
  "key4": "55CYHUz6r1rHNb9VMc56YigM9o4Y8dwrZcVuNnEj37L1U5UtL1oBFa1yYUZXZ34thXPreQjJcXaPcVf1NvWBzvzC",
  "key5": "nEmyfA58DCcSCyjeamHs1Xre3d8ubMXwY6Nd2PvwFqXY7q8uL2u1CGVoDvXMsZVd88hVXJxVJCRvWt9MwxdhjKP",
  "key6": "4dDevxCjzeDjMo3vtYpHYP2xHUQM6hgxDoKaKmvBe8vdag6RaRBaTQ1KNg9tPN9AFFuNjUXSyYL48ozBKKg4sfE",
  "key7": "tAdVCWtgshSqNAhGitxLVHQxMxi7rjsqcFP2tyT6th3UGz7YAJw9v17eqYmb6dotUfMp6ADEXX93WD2Van1U9aH",
  "key8": "4yWSoeTsegbfvUWChKLNiemNVLjrgpHYnLhFj8JDTcGHDAzh13P1v9QfZAQSP1Xg9MtHpT7QsyzWiUHmaWbNAkrT",
  "key9": "2mvgpi6Utdy3b5oWBegdkYb1xQGnZGG59mcpLzTYKHfxiV19BeZePL4GP4GrpLVzTPAusYuhydXveKpa1HCx2shT",
  "key10": "3vMUSqh8aQqdoBh6n7XWZBTmkNzdNH9uumJDGN4pTkPiAmMFYQxmCmT6LwwgutDCAqAm9zfmUZYYq6a9itbryt8a",
  "key11": "2G6Yg26fgf7QrXhfuaDFohvubpzHZoRtUpphR2U4DzMkpJFvarbnGc8ay1bnMiTgCi12LuzKujNm2tyz7yJAnYgv",
  "key12": "21np81jRBPU1TVfyDnoD17SsfkAKLErwSUKBR9XBjpCY1APXAT3JSAptNc6T5Abpdcpk9HjXtLuVGyMgAnvMfV34",
  "key13": "4wCdmZG6sZMQPwW28cqd74goTThB2PmQK9vzZbxjoXarcjjx2BbcMMXM5EUQt78AcYqkw912cvhDYwXJyFYqGU1H",
  "key14": "CVTZNQCMXQBmnmAArN2varhfJAyaSRC7jBBdJJpDn53bNETrS3oL7LFT4h1KisTWacbYjKA2BPhAJ65jPZJgLXR",
  "key15": "4XUsCqGnJ89iTyXzDQzNqddnasoCfgfGK4wRi8VMh34ciA7KjQ1CvV4NBpBHaRi1nRno8niV3UYvYjRuUD3qGvbN",
  "key16": "3y9B2SuqniF7VZGtBakHDxgMR996zrTNx9KL5H3oAF35bTLtxEsC8P2Zrxee5P7Jd5n7ppbdLwFP3WuP3xaQ653f",
  "key17": "2ZcLbKnGEzkmsWYtuknvRmiV8KiFSwhFVh7CNVtogcoYKTswAUdfm6T6rLYbcxvSgvZXt5K5BWJyHHTsHTRo6FiR",
  "key18": "3h7tGy8E4Sub7wxK1WvHkkLJePMUGmPg7KBVKJQpUteTeAa9yVM8GHZnGf1twNbcxmWnRUsdSMC1j1akEj97EJ6d",
  "key19": "28BZGvipz3xG5HXzuNzUbgdHKJLK98NxgeL7mUNCWCoUK2g4KNmyx28CbZ7Y5HEvBgFgLMty1DSV9T4jFi3Xy6x5",
  "key20": "cULwdu9MtVutfnG2fqGQ9gDy1Xs1mwDaJLt8Lvsbh14H71bpQCicevKJwihbSabQ2TENHMuw3A3YarSUnV6wx5g",
  "key21": "R15maysTbpxCWM1otGohSj1ygqhMrrey4XGuT1RbBc4LsdF5CJ4ebpxmdLKMJgac5Fb8kPBYeLX6cUAd2J4XW7h",
  "key22": "5evfHyb6r65zWWMvnefNod1ZS1Xt6pStymmtKEJHnXgigtr2iUmRX6Qvt2g5HUbuU6UP3q9oREKfm9oBcaT5Q13N",
  "key23": "65FhhRif6kgxvwT2ZaSHsT19KgN93UpQqFvLujsC85M7BVnSyFNYN6BvVSJah85AN3Lm4of6ZxeRFtWmSUa9AjMh",
  "key24": "3oD81tqk65UExACkHugSCkkpGvcTZsCCTJRMUhuw6JvEqpPJ7AEW83fZUtZMvhE2AgqqMLSoGsaWxAGK4UMwCqLo",
  "key25": "3kADfJyzUAzchw6bubctoqyo8oAyqMCaBM4k3KnMADx7En1qzMqjKdPEy4jC4Q2XeyreLmkENcx5VHGVATr2RexT",
  "key26": "u9j2w8DifyzQozEnrj68QuXsFiixUEpUuxv2VYZm7AYJBqtC2VcZ1Fh4ZmvpYqAezpa83TJNuuHzF8rTM68bomA",
  "key27": "RNH8URSRoNUsqUUxnN2Whqb2wx45Qobdt3pDoSRz2ERwpmtLab4g6B7nPierYEaHzHh1FqFwX4pu4WbFMpXd6mP",
  "key28": "4FXAkEJtr4jz5QEmwJFHWGQBzMDKQV42hq9bzn4cUQT7sZTsgXzbpZQDAoJbKXGam4UYVmvRyrbX1tiRAC8QHuTs",
  "key29": "GXDUomhwxCWE5tM3CNaVchiKkN4CqAsVqAbaJnL6ttS7MtaR4FzBxUuf67HKFuhrUJMm51PuYK6EFdsxr9ufRPS",
  "key30": "2jbJJEj2QvSEct6URqSJQ8WEHcYxfwz5U9zZnpeLA2BNRrnTCHaUBzLSsPLrAHZNQyAPKL3fE8BMbCSrPT81rjGa",
  "key31": "anEp77xPPhd2ALkkHNLoQM6MhiyGkZQKQcdtupxWerhphvWf9hpoYSMSoZ6cn1NxwV584sDMEip6rpztkuUrtGD",
  "key32": "937agUSfmhc49Ybbv4fjofyNn1sndrxcNakSxSJzQqaDDkytL2hZTNMTvgFUzdL56AFbGQsq1G6gVG8dPg1jL8s",
  "key33": "5VF5gNN7AQjhMPbe5g8qHthjyr74YZpGtq2cfBqpJ5F9FhF9KHjcJ65z4GVtNyHfjofDz7xDntfFiBmDSiUPj1Gb",
  "key34": "4vVfyzGeHcHP9bq7CuTz8ZbaqYcEPcVuxMLLi8LWixRodxG4pKbjoBdEFerPbEC2QaHaDTTF75CzjAyq3JbmFCT9"
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
