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
    "5em2FUNW8mNhn6pNzktnguNDcMyVZWVrBhTWDzKo9Sdojb9PAJFCxVcdWW58iS3Nc5oL1KYyTTBuYf4j5A1J4J5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vF9krPvJ8Pk4GSX2kQm5sag5SVVxpyph3AYUm6TEJk2pVSLKoZusqn8HWQ5QqsJEnHHG5wJU6oChkxjgiCeKsi9",
  "key1": "3DrTNEwR1axqAcsjB7aWg7xtfC44reEHRjwRY4G8pnUGRBarR59v39Z7hGzoMW2dr24FgjHTkpfVi58MZdQYqags",
  "key2": "3y8b5XAfLBeDhumtofrt7A8yuSS2mp6s57m3TjH5GeptKonWwQErE3Z7ZsJxZ8njE3FSzGdA42LaWk9TRDkcTZEo",
  "key3": "4v2KNGSfpiG9CVPTFqucb1ZDmD6mgtaasw3dtmyQsrr4PC9z5JNMT8F6MStAgy16ZYPk7SYguWHiJ9iGybF6dn7i",
  "key4": "5YnF5jmoT1LhmGkFhUU33Fs6Ct1VXw5wdcjHq6iJQXKBpgjRaYqEsUgcYBDXbJ849AY26JvHYSYNwjL4Av7Dbodq",
  "key5": "4ArM7ZdTsu7NsjSbsrHiyaVpXRNsmCrVPiNcuZeuLpTNQw9UNyJHRdvppadVj5cZfxga6WgG5CoQVe717TBaiyqJ",
  "key6": "3ZLA9xw9EqA1BvQAPFifGd9kjkX5mJsAynu6anNDJU1YYj8zaTLTy8HGhQqe4cYuGcjmz7SGJXHEYB2z9vmARtnd",
  "key7": "2cUYFQkRXeDmqkjtjM35XmefFRkm67gj1ckkLHG3czvnGATA1SZjyMxPThBxLprna4n71ueFUEPpGKG4Bpgbvna9",
  "key8": "2JpXaTk6U8ecwev3ej1TiDB43rCYNjcQgWhNtPFx35uH5iX56Cou5F14GmJvyameBb5QJJivztFZuXzgswcVAJtU",
  "key9": "647HyY9J3wVkv5vhZpHG355tDEfW4gQN8DFWFuP97ZzqwcDD4zmAPnvffLr2jEKVVcKAzcsnByQY6UmWzSYSP8f9",
  "key10": "bgonx4yhAd7hxhVtgnAvEBkMoCzbqx7777tQbGWyTCUrwbnEPXoVg96vTCbxL1ET9jTbRbQ1vK7ZoPAFjNBkCb1",
  "key11": "4kVaF5V14uFt9kN6bUs1tyd3oSaDMz9vc9cnN8VfUDnHz1HUM1cnggKBFWU6Vv8E1MUouedoAPtTeHBM45WmzbRF",
  "key12": "4CfSZfbYW9r2bKZERH77EUFKU3Z1ZDBnWUE4VQUY1AHuhJKrd3dENKBYdT9N7at8a4qgGPNBPPSEW6NX3sDet3qz",
  "key13": "5kdXYtxZ2ZJa5aq1TsVkNXcrTkRTs2XqGaAM1xRt6wievvVhQw4vPD9Tk8AaW6LRAn5gGgf4S7FjiPt7tTxZX6dn",
  "key14": "4VqSmKBGZPBwTt8FAjviWCgorbDZVDMqwVNVdwyvGv2EW4Yxf6nKWGzw6cXwCx65ZNrZ7ydh75yb1EesmZepbbEV",
  "key15": "5zfb682ciqqQroiTfNcXyAfZfMQ4JpCQwmcEGQ9cqBMErUmuhLdWTnvqX22qSvaHKYGkDeeRaBhwDJsJCfpm1crH",
  "key16": "v2GFevy6hWWeF9S8FwfeE4hv55YcHvHsAGGp1UPMuSMnuvnN5DnjrRyZ8LzBQQL4XCKTiebDDaekdpYXtvhjULT",
  "key17": "2fU57vhCDQcXpcjPJXrjMGJdY2QaREVTEzBAj8p9bbqn9jEGXkKU6VEcKJaydJAQKFk4LcNmWnztJ7hxKPtMYqiZ",
  "key18": "5b7m7cpg14pYJjeBu4o19QyGj5JbawXNvQdLaoLXNR44x2wDa6tizbdkwtT1ritdsy5DRtrXSsWBWhHhQsvwFNTt",
  "key19": "8BJgQWSk1fF5FYmDbGiDkzNmMiJX36HpbRoBSEHBbu6Eyv8GvMjowkHAn6TcwBxDT32oY7RCkWLtLec7fLF9c4y",
  "key20": "5Gu8Lif8Y38ZAjT2tCUE5CaDQDidfqZvnNXNefKeoUdfBdcUJgNSNsQLGMqmeMSwdA5HKrFPhayt9DKrSgGMKwZw",
  "key21": "4Gx7a4i14WSJx4ihDHhebTdkksGEzXFpfVf9eCSUo9mBRPSRm1uigJsLV174KJKfNUpCHHnPuyqihxzvZnXRU7br",
  "key22": "m8YHX52FmEqQhfkTaXCcm4TNb6CuRnEDN3vsdJmwX5wxkDhSEGX2zJstnRRodsLQHw1qkQp7r8qaji3Ef8ziJKz",
  "key23": "JV6vXrqnLtjKeb9EtpxdBYErhXQghEjTNrioCPT2GLEWmfi39ZcFZEuk5VsetxhYtubgFy81Kr7dXKNT6pNYNCG",
  "key24": "23vgEU5WqchxGpzVed6vG3YwHBev8WTrPFGsjwxyYMziknjs2qfdTbs8jHdeQam5Mcm7d8rcQeKYSJfcwbhqdwjD",
  "key25": "4gSSS2wswpbuXmqMTcWcfNzVSKPAG9evqofyxfsFyzfpFB6Sp9EsjN61B8TQdoBoDTdaR5uYxeBYKJPBzqPsE1J2",
  "key26": "3XwtP7GkSTgqueFYhNpV1VqfTjoqHZYkJRVow4LNTjJcPVismRZdrMLYh21hVHy1ggi1Gjoh7wknsw7LTm5kjBLN"
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
