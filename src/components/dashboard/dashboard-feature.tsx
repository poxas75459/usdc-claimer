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
    "3qE2HbvkoWvFWCLhUgmGpptHNvAJxATMEqd187SWt9mhTSuzzy4rDxunMxh2fpnVEn6qaw79oi6Zt4t5dokoyaYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igyr2co3LhVq8r69bg38mqKrb8KSAGc6QSNX76iPCgY5NCRPYGDZZQbYSvk6cd8YHoGGHPomd1zETTAd2CBRV2n",
  "key1": "59WwV26RbAxJPbM4ay1enSzDN1tTnMa7KezzrBmXirMxE4yxyJV9eyATDFqsb6Ee1x4P7i2gHKhZSytEcM5yrNoL",
  "key2": "4EMvar3jZZno1uNNVvob7T3oJHv7p2ZFvNwAZBSqhfqx8rfxNXD3c6cTjrgm5AptChcGGFVk2bbCAZiXwtysG2YY",
  "key3": "5JyxgxYzDrNtDFJAdmgQWKcBHSCNwgdVW1R2d9LdrfT7YswuqzsS8T4sQwYsUxgdV24r6Cjbg8B7D1yS1nZoKoX8",
  "key4": "3YXwXbqV5aDmLik3srjGGYPPwu8Mv4yMdotEFSTsUadmP5Tu2xEQ9bZLswmeksqjwFNHTgzcbAvCA1RRPCYqypWD",
  "key5": "2AqnG5C8UCXgsHHSWoqw4WyWRjfsxvmhK2wxx2SVetfJsyajL9s7ZXuyT9XZdAV7TAjX761VzCKSCeVyp4XQP9uM",
  "key6": "3JGY2Nq22zgWuXLjhcvRZx32L7j66LArXTbs7L9xnpqXUTFEyNvz8e58dX1GJUDRSLHysgB8ZfDAnXEtcsXj3Jm9",
  "key7": "3qib1mYDViWDsoLzKzaagREQVQBLL1udrfYL9aoaNJP3tcyNr2EXPBc7HfvxBpx8DvH7raHUHyrCpag5sJ838ZMD",
  "key8": "2cP6bCFCGi2ca4JuNNNrYqzzdMVdQF868zVZDA4J17g3Q9MZfhTD8qtCi6jSDhmHw68zpY8P1GP5TvXF9WYAatzJ",
  "key9": "2DjGTEokMeK9HKmpoBpBe9EsoNKuuL1YprNBw2KJgEG7TZm7q2oSH4EV9YDD6yEuU5PxAiMEnrekZbhzZSYSuHZF",
  "key10": "2CXWDSx87JquuDS6qY1RKEHDdRzJQALWSE48vPsuahii4PsDe3G14nexmsdcTQLTNexfp6FfRTmsG28yadhMXWar",
  "key11": "5dYoNqbpUe4qmLp7GUqPq2LdTT3MEUujQHiiYLz56vUZaXaP6JQuNK27gj6yxgiMdDt7qEAw1r1rtLS2duasS9xW",
  "key12": "1G93S5fqfPpX8cmKYHxEiqvTxFW58sm47bvX4LdgdnWCGtb4ykmPUdvaS67cTkLNLZjNRuhKTAhq3QUPttjwmv2",
  "key13": "4NsPwroYCLV3Yd7Kk89CsuVq9CrgS6NtgjrnUNPNijzsazArwxYSJr2YNcThCEdPbirNhU34xJ7MSsfRBZ3hq3C3",
  "key14": "5wtjBRmwTmr9KXsN5LWX1WQkzau6FUT3LqoHrSa5Me7KBcmMsazswquYEjzf4xCmBskyRDgXcqnZieJ42tL65U5x",
  "key15": "3iB3uSRMBNeuwvefBCW2UdbjVGkg9JGkyMMtA1YSTi9ZuczuXGuSnPfRWjKpHEM9hQpQzqzrsXDdQm6YzBNGzW9Z",
  "key16": "ZGoQEdiXXNqzNoYqor9CGh3TX6Q4wC6XQheFNrKZ2Df2G8bEc7a9dJ77M3pNG5XhGAg7DQGkZUZFavhq1WBZiqR",
  "key17": "5oDkMb2jNGXHudtZJ6vDXMThvZYcMJCdyPx6djjbUh1t2iBk7entYJ4Fzi7fM3rLz1AEyQvKLUZHRHFwgDEcgUEn",
  "key18": "4Afa38ZdTiKPzyv7yqR1LKcoBdGfrqeYE9ZVrzpN3m2gK5B1boQz63NtDo6D3WBHUGKeTeZ5fS4Pt4PgERh4ez4g",
  "key19": "5HWtK12SaNg54bzPgGLMoQe9BW4Bzw66bTqxA2qessfWUNiK7afem3U7cpF3cSx6zFRwPx57usQzSZXXKGuQomCz",
  "key20": "47jwmyvXcdtc1fE4tA5rpjepUMXrDaFBMBku27BLc7GQQFogwsAznjngvTcVfQn8fnxFSnQSKsXtrFiNZ1gP1LFQ",
  "key21": "3j9UWSmetwU3X4CAmtJRUZpomyHvv12v881V1eXPqTTeGFCQQRHjjYcTPrMRBbN3A6ejsmesCDRifwWeiMHaMu3a",
  "key22": "4vnjdQhAduUxPQfnTxFEDcKZCfCjiMGqdHpdGd7rnsg12xDn6cWyiFJ6GLYrJ6NtF6o37N2eNbc76X71JspjRDdx",
  "key23": "3DBqx9pJuYiMBi258rxydLNxdd95z5h7RZX2699Uzci9CH4GVL4p2yMLUYTTLXd3YAgkvHPm8NMBUr45mdTN8bgb",
  "key24": "5je67F7yhmaC7JTTwr5isP7ro5pgqNuTaPTynjavBuCpv2AZfLmGBFMe8nuXA3GrKAofMisgvCfByr1vX1NdZHEo",
  "key25": "3ob5sYM3NfgPFqu7j5nat6RBpynt43wnDKynZ4sPe5A5Gk4r2DpHDr8MtT2G883XKnVdwbrtKGXxtemu1ZckDiAW",
  "key26": "57SsWLRWCXwC74chBLF6xUevH5thoorhJFq1USv4CXkEqy5MNmGb2aVtNCS6DpbRzdRzAtk61bHsgiTrH1BDfqmq",
  "key27": "52FZWNRZUMju5uGoGR4ttbxjLJhCwRvSsdHDJNh7Y8ytmGDyzKomNYSVA9atByrqvKVKKNwYePoFAJC4HiGviY2B",
  "key28": "4Dbb7Vx1CWHK1m6aRVN9mzCevFLLKScb534jFq27C1N5XRMs6tbvrAEAs2e38iaSAjKv4eeGbknrRm96vx9JhPxq",
  "key29": "oekBx15CDozmYBc6Fd4RZA9YtCsYvHrxracUtiz3qRPr8AbmkCXzH3hoaMvgcEVp8iHZMCzwCg6aEAyByvBrFXh",
  "key30": "2j4L6iLCXDrQD8fVa4voKCyekt7oZsPnDzPxpyCia83XWVtjQxafSggJyDnsM6mk3xxXsst84pyY6xZ8NgQL9XTE",
  "key31": "4ZkdN7HksBjMLxTxWCbYE6G4RWbiaRePGEobLg6kgG4zDymC65cE6f4SoPXsT4NEDhAE6iB4E4VHiwStroupMErb"
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
