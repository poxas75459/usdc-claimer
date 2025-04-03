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
    "2qqTHgmof64PJoNiQtv23ymHH2A8MGmANxJ8atrHnNKVGjwjCN6xiZuPk4w5uXWD8LPexSVkpvwLTt2q3Dz6K8W3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1fHPDrPY7pdJVyMK7vNfU2ThnHuJtT81bCAonYhSVje6amvGtiyH6SDwd955pdbrnHVxuNyX1KbdnphraSyF9d",
  "key1": "4ZArmEGsySC1TSxR68LHf6kWE1a3fEUcUDQuaH2biJ13sGKmaGz2Uxr2zJUprpGsEqKEc2NR3j2EJPDXQd8pfMf1",
  "key2": "fP3NGrgMhpcvu3asdiRKzvPJWMCqMoVdfHwA24pR2himiWp9T2GWHjXgEuT9jDhuUvPetM1aam9FWBjXxTDQu3t",
  "key3": "3jBSzeuP9okP9cNfmAU5Q5Lm84mGQZu98GatPUhGJvGf8AGs9At3WvAfo4JoWH9jPDUwnc4EiRfrXkGa9EARa3m2",
  "key4": "MBySz3nPF7YYaP8zQedBasswVp5PShyJENZk3RtRvioq36Zm2EZZyLhxXrX5bzgPt57DunDoNZfnEzVdTg6WkZf",
  "key5": "62wNDU6TXmSXLmatXPrPmdJ7KAYYg3Vc1h97FJuEvPc3CJqjutW2A5X2Yq3ATX11wQBPkJ5JLtt9qakMiJp4EVjq",
  "key6": "1nUi6mACXcBKiMmLwXLGwjJVhDcAakm4QFpt8Yaw16rNJypLTHx9jrFKbRgbw523HR9PXwcM8tzVaJ9LEWL6XiZ",
  "key7": "54PYng3X2iRhWrghksNjxtR8eAByJcg4WU7fRF4f9Ccz2xbuoREJpwGjHkGmQzq4BB8ghe2mJS5bjGiMibpw6Xnn",
  "key8": "4em83Fys2sXRWGFyaEhbnCoXhk7cXsEZieGyfLp6H7muRckabstgj2E4ERUjYk5shvgdqnmNeX2uGLQZcXf7HQE9",
  "key9": "5bDST85MxJ3Dsy1YfEnV6ynB57241EhjBEof4NAL5HhWnmZFKV1rmPLUgd9r2YAkDzhckgpXeb5dPyD3hXkJs2H2",
  "key10": "3vHniKWTWFiPtZy3nJJ1qMUMi9RHEXJu413f3HjPUCwMWP2Kkd7ZZzJoGoXMaVv4rJ6Tsa3nYFVyzvhGT8bSPVGQ",
  "key11": "5rGhJs1mHD66RZG6cpZVutm2BtacegGh5xqFCopLdsGaEskMq75ZAUxZTGbckqUscLuWwe4AwTT1EjJPZ6e4Twdu",
  "key12": "5UrDt5FRGP3fwZcnvDPU28nJAkmn8CfRJmzm4nH4MQYLbLSN6fptM7LEpeBNAwJNaD7fcwhW5jN6H4sZhf7RxsNh",
  "key13": "2AMTgyTaA8nhse7xUWHDCtMQTrTRw7g5CE4Nj4VM6iW6ASRxXzjaUhVQXUVHBw9KF2W2fzWHjqDDeoj5uR8hq9EE",
  "key14": "3ezSeQtcXSxwDg8hDbWDLzQh8K1xQhzET1yJNtamS1UTmZstDS7aK7Y2eUsA8axjgwoF93DUn5yovy5fDfS5WVK2",
  "key15": "3vXrWSbMLGFAy7hqqJt8ki9gqBMUaTNNSWk2myj6vShaY7yW768pcox75sbEAn9JC3z1eVYUV3kj3BT69oKfnsNn",
  "key16": "dbwiJ4HzQ5zRo7tteAdiuABSiGTFEcqmtgkftAXw5df9EXjTrugU6MPxM5QpxdtNZjGQr4tBYxHgsgqR58vEznK",
  "key17": "4MJqNpKaQnJFz11o1LUZrsXryBZGV38BRYD6yU4aaoHdyzqRBAkLUUNZUptvitx7WvNfMnGZci4G1ijWXR9gqmfZ",
  "key18": "56VzWuCyuLNSsQScnYejxfjhKukVQwpyaQHSp1HvEGMjjeGkvggHQFCs1FGEVHuVdLxL82o3Jr7wVPYcePRzyNjS",
  "key19": "4947smxXRjm1Mx3AwbjQvN4dooLxz3a1LwRKjjzf3nCaJB2GR6rrc8AMUkqcrZYmHPStQEVfN7iuBvckiBd2j5Rd",
  "key20": "5E2or5TVz8YZ6nan6YugbAhBQrd7WW4jLCCYC5GX9FvsHaseSfWYePoP1KbACC2L9kHZJzn95PtMXAuz6PvyDmbv",
  "key21": "2FHCadtQ3PW19PL6SdHW7ruwSK7oJ4bEQdZY2DgtCucb78UDCto3d6GxcaE9VwzYkSgcP9CvMecssVy3u5FkeyuJ",
  "key22": "4jnCY9bkgeBv9xq53Nq7ao12xk8BSMkcQnh4VvfxvuWagAq958hqD8ncwhEMG1DyG2ZJF6REzRzPpFR2fLcZMndh",
  "key23": "5QAEur3e1z4r8tASsgnzncDymhxSPWVDSqtB12qPZgSqyVMGgZncseBEoA4Gn5B4BzYE2aEZoe8eVQ6VghTkVWq",
  "key24": "45N9oGMRKk5PeSY8uQEKqYdnbSymXNgCJoKgW2vBRUNg6Tq6JtnVXeYEnJLAFmG3AqnY6E51mo947MgkVhM4SpSE",
  "key25": "3hFh15UewLLWs1ipb9Y483sudZsLh6GuyPJ4femFtagTKCfPygtSVwZAjxJHukQKpxCyLqQ5UTJn1gqyhcWAnmXd",
  "key26": "2QpEvL5cACAAz2TmBB9EsfQs66YLzBMDZVmw5Kj3BAgjistnpDqrWBXu8V8gGHQ87HLc2x8pdsaf4NMsdCzkcYyq",
  "key27": "35D7tkL1cLmedZ6SnQAANmq9nZZfNNLmpM9EbHQ5kXmqchDPD2V5uxnqPhdTJdrWuX3DAcqSBCMyD5D7iFpoR6BQ",
  "key28": "4qgeyoDzofPgqK4PLeVkjmJ2e2V1aoZWwtnSpJtCJUeQVi49ivaXrCSME3UhbKqsccc99KtwgFLi12vpx4EBmvrf"
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
