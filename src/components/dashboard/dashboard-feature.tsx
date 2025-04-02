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
    "53HB6GCWJmyWeW2CjohtUDHhfXZaYJZ3zPXp9foE1WZQ8Lyh818bWKjc9ok6hrCLEhTK38rCNBcTnYm2wHAmfB57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kAzRA6S9dsw7KELTK4v3DNzm5A5y4tzstL7Qfc7uK9UJXPbTvMp1aUHCTcBfokqHeNutwRtArC8R49yUzQvfMhf",
  "key1": "31DHPpHSCyGz2AxuZqtT8FrDZcpRfayWQ4dgjC2DSDpEDbETS1nGVEDobi6n7PuZpDSFe1vuWEjY2aM8Uu16FaKC",
  "key2": "3aceke9vCZssvvuPz98nFNmivqjbeXPRWJo67CvBsD5maRDU8DNNoR3VUHbstD3aHJaaNKUvBLMF7zetWAe4c3U8",
  "key3": "5tAGvn7kxSePkafGoaW2U845yot4y81kKrVpPxkH3jVXjNXZYNKnqQLV5LjzhXLkE6RqTeiwZjnq9nMEbTDKawdX",
  "key4": "3F5SfHQ5ccSBRJymZ81jtPphuqz54beVAw4gFwJJpsEg4xH7nGrozAFHNtKU4DY7iWQFZVMQBNWra5xRhm8m7urq",
  "key5": "4RWf4BULrLbsztT7kmKybbEbRBvukSp2NteRRWnewSWtbkdrZkTinLwf9CEbakzDik7nruhgrGFoLKz4Z12nm3eA",
  "key6": "58CbZkmQ2LAQ1w38cFMSMQXKYDLD5xCLSjNj8VYzy6E9gEyvhcw8kg1iVcqig19D23QSKPYcUeFL7gFRGET8NinH",
  "key7": "3NUTWU5HDn3AiHpLSSSDCSycYfPJFC1VeJsUaytn6qZErbxh3BLE3gf32oQzSPYuMcZ9RZAyh3bzh9dW2PHbuwpE",
  "key8": "4geefLprHs5KTgTg9gC4qBLvA4jdM8N5qasB9qZ6JMsCU7es6EFeBvxvyekbwKf43AUWz12VF9oK2VDmRVYXDMQC",
  "key9": "5ngyZnrRm5Ep9xAFVEg6ocABuFRByaYi3td7vWw7VqoSqtK5t1m5g9t1NN7HwbSEgCUvwWBgMTfBp8aXyv9GicL5",
  "key10": "5BVxndEMSAN5CxX2eyszqJe5nWGs3G574e3d7J7dWxsMCLHeCT8xgLS5vMM6EdPayPwjnDgCDvpUBMJajeHLzmrX",
  "key11": "4kwrzXFwaokMYgx4FFYmEQdTJhmDHkjNEgwrM32hgtEMJp6F4Y8DdDxRoYDvvuwS3AT8usvWVQu34dpTYQayBzqP",
  "key12": "4H7dnLZBevkAvHztiC7zHouXwN1vLrg92eJgF1jyfUxNXuveVFdNBKt5JJMjSrKMj5rRsmQ7QU39DeKgfRbBSTQF",
  "key13": "2MkJAhysxCadW84NbEvrmQkxZbZA8sCxox4hiL3P2kSWLo5CcFvSP9pvU783zawTrAknifxqtFbpNCoT4voiN3Ez",
  "key14": "We23Ga4bG5iNnb9vVQ8JhdquzQ2JjLmG6TXnoNpCQW4jf1J35e53Woo5mKyMxB8szHGwwgC4KPDMFFkQc6B2MUk",
  "key15": "3pNVfvRzTsUfLCMsTJnJwLFfbcThcnrkuq9UKSBxY5M3PhKu7nE7EQhw4Ko5QejfyLCJZ2owKqdjwT5mkDu5qYnL",
  "key16": "66BudVTLHZKawfSn2rd4JCr6Ww6umHdwNBVwcotQobv2tpxLSMSkTSZs5hpzdxcwo3aF4vJQYQWht9MpB5vTTiVx",
  "key17": "4Hh9XW54NT1ZS6SdiLrHDfxTuYsQCYLMMV1saLKCV3YEqFyrT69Zh9wZ685xZpy5xaX9afqvxsds9gaeFhYy2FRU",
  "key18": "4yhivEEfZ9G9KUtt1eqAAPuZ5RooUUpXQKBDGJWtLiodrMYjCh9FU2CHEw8AcEmPWvP8FUsmWkim5iKG37h9ZMuC",
  "key19": "2sXhBwNJxZBWmQup8Sm4N7V2b7hxQKFx1mnquG3AF3Ps8aDhpXkNnsHg58R3b5QUnjFaimwDjSsFFpKa5wQ92tj5",
  "key20": "31eor3jpj6zxd7G3oRA5pAAZkVhCTMVBPQ9kkngM2pynSzQux3A9CzTvFNWcKVwHqCrd148ndkAwjCc7Exo5a5qk",
  "key21": "2qetBmosWPmm7r21f768kPsd64q79i25WC5wcwK8dJbB6ptRP79D5kaKe3XSZmd2CpJmupogjdZ3JKYCQxZugTQF",
  "key22": "5c5ns71dPEo6bmVEigxvNZMyQA6SWn61SMVfqvbbmUtLCjYZD3qngkZpqbYUfmDX7yWdu1QTcg8VrnDFH9U1fRhX",
  "key23": "4CFivr7jvexhsp2DecPpttiRGp4NF6SS4Nnx2be7msvrorgALJgzqgBkTRkGCpkrriRw5qm9oNsmfLJ5MRv475Jm",
  "key24": "pGaWsWwGBP964o38KjDbgrUKMAaDvDX2V91ZWMPNdxxskEKwzpCLFk9AKcnnJ2hNY3Zm22vGKAWh8GFRYSCeHM5",
  "key25": "5w36rZQz3o2yCPUxWbiXrSTGfnPrb5PPU1CPwkPf8Y7Xej9JfSxvB9saL8ecjx2Nv37SJyhoFGYFMZcFh2YDckjS"
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
