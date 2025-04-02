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
    "53gS3MhwGSdLSZXKREYCu6ouPWMeoeLFkisHjGnq5qAV7bNS1GCGNBMsHGgcRTtqdmrXuF4dBNH2inykmHEKwhVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TbW3V2ket19TrohDQyQnzgKFFXaP3hEvHDaNkkU2pXbLoXQRsCdKiU5Qv9DrkbCM6j3yytU5maQuvfPZuzP8ijf",
  "key1": "2fJKab2p5CXrgJG9cf3kAv93kWdfKE4Fuc3dwEzKp3Zy75CbFe3vFjzFQeDdJhdrhHKzD2LLRX7TK44acmV2QeVq",
  "key2": "RLs7uT5j4r14BdzRXPi4NdSHQCcyPrtMJta1Lm7eH4SWZ3AqAei5p3BgjasqBFzaP9imFF6JPb7i6rA6svtzRxY",
  "key3": "5ddF2Vmc4xhqPwQPB6DN9653E9DUUgNPh9A8GB7bshm4gnCxj1oHECUUWMpK6ahCo9y346EMGVfLmDLXgJvdfCvr",
  "key4": "2eWGB3dy7hx6d1hjmK1LrU2vi7uFNxydRWUNTm5wWrBagwdH9RLYQ2NLEZQhtKdEMUv9LA8Yn3T7VTm6cDtueKiU",
  "key5": "28d8ZnY4YBmsBq5QAnSZBYRBX6BjgQm2KJ2BJrJnaXR1J4J6yj379y2TQXuyeoKjTEPXetLkVvJ2ve46CWdFsCrB",
  "key6": "3WgG4NP5ZkXXrqbdcA24HmKYYnX73kyCxH4rtNXdvabJLxHg4GEzFrBcs9723hUr71PQqR9z1vxBKBq1CpA3fPaL",
  "key7": "5yYsei6ssP3DRvwzpFKRHKrVGz7Ki2uzN8cisruiQGTDR3Tk5opxJz2o2aUi7HbmLbhJ7YrbuTUro8TnfTWAZZwk",
  "key8": "41XhrXxFNrDprMfh2wmWQC4vkEdKKHXLCmLnF8wK1z9B5iPJ7BHkADoo3aDUz2rpgDbUokt1gHTCVBRdWq3sirDU",
  "key9": "2AzZwsHHMRSzUR8L5E4TYdEbGb2jqtZz4n9bCii5j1ocyByXqeA24S7ApzqtXwE7uoj2RcjZ7zZ4q4XLrKSWt3Dm",
  "key10": "TiVbpLZBLDL9ZVL3GnAZ8ei4r4iQEwmevB4LfF4C4Xe7ZxMaBKjgGgdJXhZyFZg4KTtewHfaiDd4ssjBAkGm1xF",
  "key11": "48HrH5fT3CkqQ1uQJZVLweRxV1vm774Q9pbQe1pmBokakUvpJAbBAL1fSLFfEowB56BhXLb6kDW2JXY7ZGTBMFKJ",
  "key12": "36u8nmoCRLLmH82AR3aEHZfcCCCjNBXCh4KHUoSeRnDUPc6mHLQEm8BfNysnuT4nXFSRfNMfPbmkEfhxV4YVb9ji",
  "key13": "5kuH461LakGacEEf2fSchv3jsqRhWwXkK3bgbyLYtsY8s6eE4BViReyku3GkPVQc39E4mMTSTS8m2PbpSNXU9Wt4",
  "key14": "2ZwWQmxdT1Qaw2mWqTi2tCHdrUrQ1mAbwMqmd8ErqmyhsGUAY9mefSy1B3uxpZ5KpVKEXaFZKRKP1NdcoWtirZrw",
  "key15": "4HTZef1LejQFEbobdmRx8pszyEjeBzfegoyxk1oakLjpBQomSFiqWC9oAFixDGJiZxErjuNRQx7nJbtDhtbyhm14",
  "key16": "GBS7xDP4gVGNTgWoHzr4Wmd3ABTmtAjGRbmKHfvKk2NpntRfWAwyPWoLAXivc6Lq1sgb795drnCSQbc5YHcB9iT",
  "key17": "2APFKvM8CRHbjtMBrh6tFs5rqGFu5DnC5ipkuExE7shLsZKNR56JCJtmr4YPWpSNQ6iu3Hn1UTP3HADBVALusK7n",
  "key18": "5DC3BLKtciWHxHaeoAPh6V7J3SHVDAEGTGgvNtkhDENpQ2GVGMKnGyrnFt2ZKFAWn8JVFCptN3QcBW4Y5QZfcE1X",
  "key19": "3Ac6UviCmvCDmSc1wP5rzaR2mjgEqbZAPDsTx8dvbaGf64zDjvCLVQJtz4apYvQGZwEXpzSRB15wUD4pbSZvYpmX",
  "key20": "5duMG59eBHeWByVwPjjfLzBJ3cxH4eE9FEmX3eAiiq8DedU6Jz49sRtL9pbFD1F3sPb1JhEGqBCVfDX4EtFxMAX",
  "key21": "3vEyotMCFScyr7EWwsjFmPT4i5FMBziTA8fTYLDTeDxhDPEmTt331gpXSQYzr1Er6v6n9bTxBpkb2fERZkHKoxio",
  "key22": "3idoDSakpQCjU4S34FsbCofaKP6kZb9dGauz3ZrT8FJ29cxfmJA9LjgjcB1cCw1CLzbZYpWKjiDDR2EkpzDzz3rv",
  "key23": "4bXuFRovMgP2V6khVZ5yyAwoxf17ihEzXhJZeFEVxrr6VRrmY4TSqKpC8cSXLAzZuDhNeanvh6uWBQBXCVxkCP87",
  "key24": "4VfP7aPAmWbPiGjyayTihTLQQRCsM8oaEphpAMnt7Kj66CqbJyPYSDJ3yoq1RuSfMtiLD62w2w8AZ1uoFiXXx4p5",
  "key25": "5Weap7vKLgWgraWztwTizFZArzQWPCyrZNFco1LzyQvi4K9JdXidS7N2YTNX4AMsDrPErbpk3LKcpoYzNdoi7v3o",
  "key26": "2pLNzrVeksY1Pa3fN8PgTARPZFoqiupTrFjBvecgLQ1R1wU4vFVF6iMzt1Ay6zJMSf9A7uQiMm4hBkggFBWQCwVk",
  "key27": "4TihoEWLGBKURtdGup6BeN79bqTyJjk1qh5LKdC3wgE5fhyEufHvyXvn3cMJmCXxpcVX9EPbgWHZDp7TA7XLQgRE",
  "key28": "3GotascriuqSvoEGvHJHHJwE2GRhaG5G1RpZRHyU2GjwvSwiuphgyv1sNjhLHR71CqsXfcomPdKzWPFZWjCUDTVe",
  "key29": "3t2meuzXZP9piLMjTHg9hX4cJsPHyfSiPevVDr3NQ5xAQi1zBqQJtg113zDSV3KX3um6nKD8NmMeGjdQkUHTMvTz",
  "key30": "2ebYUe7rFkBCrLK52oj2ohUgRzTQP85vRTGfhgvzb7qmFgMVbE4tc47TdJr9Qqti2zcdS67e6H5E8sPR3A4kGagZ",
  "key31": "5CPjj4ZufMvn4i8hQZghaTnKUrrXmMJaCRn2FHS5FdAiRqroSuD9Tx7FfwZvByinbt7DR5y11oDxKUxFRsXR8nTJ",
  "key32": "64p5qwERX5bxNYw6haPEaoXPcwh58xSQUSANmrXHT6Py6kRPfm6hnWvSRsNVskQJVDmngbgFtqxXa9CE5nJKSPh4",
  "key33": "2eSecoqzGE9V5KLcornYP9eUDcjx7zKzyUYuRayypTU61F6nwXL6T5vTTU1yA6FME4QV7kZbHDuYoXhqpz3NZC4T",
  "key34": "WD5By7fQyn671yHr9JTajtr75ebQJxx7gd1SLPTXHyzfRFN5Kk71ZorXxWRjPW51ruhnGfTrHGS3nEYwkZTQyz6",
  "key35": "5YW7E88JxdLdibzmyd6ox5UNEQTNRAugeXfZfkMEzAnfXamfUtTiWy83sszgY4rd5y8U7nhAdMGaU1qtYdDLZ9P"
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
