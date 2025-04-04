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
    "2NY2gvHGdBx237yQ6cvwDXcwFKBFBdqKBpiNB4qqqbnWLHrktKoV9dLW3fpDbHEh2txADGdmY5ZTJEHHkCUnfBTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omQTXHfacYppdriw3wAsiz2QbLu3rN3YJbwMTX7Ad5SYYCGudFzj1EvKvRuwyrpYfPcGZJGz1VdroRhmnpHLdfU",
  "key1": "52986JRXHBoj1BSFB9dUEgAdoD2kLTbxnygiCZJiRDsNrwuwXsf1U5VpyrZLdTZJWUTPQRtzsuiDFipJSV8wsEyW",
  "key2": "7cjBLneRpVtFn7HaDgYvFHALNBQRJxGqvf8cVEtdwsoCW7UUai9yU2dpZFWeQmyoBjYryHghBemrqE6pNA3ySXP",
  "key3": "5bGSoajQq5RKTTC6c11Ui4xMtThoHvu1SC1E3mgZG9Z5RFBXVi2yAsYHWZbHpebtAP5G9QYB2SCiz6dAmB58bXGP",
  "key4": "2sg6TZHkpuFFzMgfmSNy3FAh7n9LvPL733PLTgA9meexZvX5bP71yS4HXQGyd9n3wtZeTJ3dypLFWzEqZ8L2ZXRN",
  "key5": "pUTQVj5EYwSzcCL2FLSwyTv6TKsAF4h14iDJMr4PGaWJCR2E7bq1dTGEhKhLGhvfzeUpmM5MQ1GPC3anhhzbzKe",
  "key6": "3RAsCb8X3VHw1u1mQUwwsbxWyQdMvu1ensiMGYYiaZ2S4G1DaZk1oKkLAQsfaoH3H3yr7yD9T1Point5r7jCEifk",
  "key7": "5SHnE1w67j667evX1fMhbf8CyYHefjjUqh8i3q1dXEMeF7W2TxTV8svweSkGZcqkK3DAJA58oAA9r85kgykV6wDH",
  "key8": "44LjabU5GVYnfU8c4j6r2pTdLKH6iz7ADsuR4pf9k5Enfpy4DGFnHnnWryaRReD4rocG9E9qGwcqajRc2AZmpvyu",
  "key9": "RnqhVvnS5ootM1vvwrZH1mzzRGxYQWJVBBqqsxYBi41ZSTsbzRVZeYPceGdFL4q75Q21mCaszV75NnqJwm8Focb",
  "key10": "4jdF6yyUNTUJX5H25sKhuxDp3Fq5bwmQckrLfWQ63gzeaDZeq9FMdfVCUDJ4Lsb886yDttidA4q5JvKJiqjWMsKE",
  "key11": "4Q2KEYVYHAatybUinhokr9RgrUSyD1JWwR8yFz5JhgiowMXqbaEQj3kL5j5tmau3Z1fSQVMvS7fZpbMaFXACB2gf",
  "key12": "66wjRJWxUEBLok9ZNAEWYiwdmQQTt3RqjxSmVyikHBb3nzTz59K5U6GzZYEsdRYFuMaevCzRB7WQD5QNup5o6Tmd",
  "key13": "5y3GRkMgX2KvSJahY2nUE33GNXTGXVuix4gwrGGj93M1SU7hsHFVtSqish1iQNovRKHxM68M52SvRw3Qg7hXaESN",
  "key14": "v3ujkK18mBPkVgM5BMfsb6eN7f2Jega9o5hs9GpTFubaUQaUNUraJ3mggSPWNkGwkFDU3neFcbfsNCY6cGo4j8V",
  "key15": "2FuJcecbjAR6oupy1dsfg8mHLJooxWfycQAvAMbmuR22pf2Us3SumehDXYe8MLPPRzNTLATS4hnuS9vHxakboA4r",
  "key16": "3QVgpJUA8BVP6mGZZZBa7TUquwmwJNWp9dWCR8J4uRNKcQYSxkxfew6APDBg3ZireXbZruF495YE66rPtqBMR1wJ",
  "key17": "4hsonod6MXAjcGC9gA2jQD8n3XcTCENSkAJaoKHXaNW5NKvtSXUgvjhZvY7EEFdCjNrfunshXvoKj5ei1dv2Jz8M",
  "key18": "5ULAhZqJErKJx32KQpQLuU3Rn9jtSMjeL8KFr4xYHAeMLR7zjHDz5DrPb6vYHdd4ucXRWejZYjYHSYBnhDA3evhe",
  "key19": "5ZP82ptB1JuiGYK8k5qpK1gqJ2xxVz81SSkdGVyj1urjkUfpJNZxx3TQUQofU8cQecSR78noctNbqHo7QYfM7p5C",
  "key20": "4icKZvZDH7hHR1REdxsrHQSca3RVW7Swk1aDN3zpThpjZbLB77WmxSk6yGKgtdiB9r9hDgxjUPDMn7QdfWkmiHx8",
  "key21": "3T2AXcM9BwPRbCXY4WCQtTN831WeHt5UuzpgLLV1w1miz1yicv9Nth22AfXCAbA8Ry5Qp3dPuMR7eX97vEPeJY57",
  "key22": "F9e3gAhmHccaUfkYNvvyQnGK7ThFkej4MDXfXsK3XS7sVLcyJQ4XwHGcUTjsBHFmcFR2TZgoPFna8L2nbFUJuJW",
  "key23": "4R6Zq4w9s2LXi7XJMGY4QdJSBT2U6kEAts8WRZmnrWoeagTvD4aLkrmMZG1AaP1BeKGUGvuRF9dtwezmKwhDi5G2",
  "key24": "5h5AHDFxdFKkPnXMKyAM6PHdGZ5WSvBnqWKvx2YbiFNRVgPKresHBu3mK5CxqTb7FChi1veXRqSC2rhG59SfkVSN",
  "key25": "3kuiBsU6Zuf17NWyM4qHhFMExXZZHyYW3FHr8Bv5V9yJi9NqYxUQ2NedwwxyEJkV77r86hv2kB7KWXVZpNqDZjVK"
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
