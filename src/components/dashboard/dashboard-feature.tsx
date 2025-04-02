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
    "467s6fBcRdA9abHZVL7mKucoiNbYT5vUajsXtmTRzW7KZmT45kBmJtjjwPfaAXsYqhZs585MSuUzjKrda5RPLiUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jovDMDbgYo2TpW5ihCGHo7x2vqWVA4pUZfbLXx2n6JzK4QVBmKibQp7CwXJr6zXzn4TERBJbgygrnE8uHK3Z2q3",
  "key1": "fBjaByCLaWvF8JTC2MbZFQdECFtwrMgwQEmiRNner9GXQ7949SzgycYMrq8rGkpmmk5VbohznQv2yyosDHTGdHj",
  "key2": "nZgnog6KJtNVyfcqDJYr1rmCfKZ9cZkCqD6NyN6QH7geF23B6N7Rz4TBiEu8DZsRfxdcHPt3gHc97uCxVnTJ1yp",
  "key3": "2esdxs5JTTKzZXPjFBogvr7UYPXWscUizuedou14joHN41HVyTCCoS541m9865KGFeCay4NXBgeCwqwJs4DTTRKR",
  "key4": "3Dq6Tn8bEDG38Xmy1WQjjUFLF5jo9ZEUm44fz1Hhu7pRPbKoS4WXfauyLieVLuKt53BGD3W6ujknXMF5cdfcPAjE",
  "key5": "2uwfDgafffczKTbjPgvpb6QgpdNkGemT2DpkvxqiqCpeHdjwrYY69qZRFekDABqtAjbKfuyTb1EHzhunACFf11yv",
  "key6": "3M5rRBDfrYemghmCxmp52QMAimDzrBAbB7gMRYxSoMo9Y2oZSQtvHUbdgU2YKHZhutPSjFY1vT3sedmU6GQXvTW4",
  "key7": "25JMux5tHejJKLQNFpnGCDiSwV3k3HHG5uJPtot2uNCYYtYNpneXKf7giqF67bV5hPQMzXSnBiQ4HHPbz871tK5n",
  "key8": "9dDnLq37kQQvwbAoGnTirCUSrjTXrZ3NFBe1KUw35LY2uGzoauUCaw9KnqRosdz8VjW68fx6VHxZ2528FcBGqnP",
  "key9": "4AEN6ud4wb26krGgfKEQmB1bfubp72wQ5UV8cTefFvfCpPUmJPGqhWdMyvVDGcs24bz3kZPqkv3c2sT5LUHptjQP",
  "key10": "4DCYurvQTbbp38Bwyi5sZtxoGkrzhvhBjqRqgSK3ZZYysiaSFHVobaVQmxxb4sZ97iWDezhXGcXVZVHZr2CL6azY",
  "key11": "3mMgRNDob6LDtaWzmi3Yj4jbpLCp2tXCQuyTzwGVeHns5dq5qxPj1CyEiW5zta7oegnqN9if4AQE9kcQ5VYehWjQ",
  "key12": "5vNbC2VE8kdrABosiUQjees5oXXczqvaWvdM7m8feMgbyzyf1DZak1Ced3c98sUV3XBKw8LWyNuGiziLypeheC2r",
  "key13": "59xAkJiNtSHsJUjCcmhPxT56UYprURZer2UVWgqstKkNniYhp6b8HQfiEjXmwRUM7zQJ9CChTVgYrqZkTNuX78Q7",
  "key14": "3iozWjT9VQYFDbqfZKm2oy1SV4Aaq6HKep8cNpaJeuWTGGiH7mZjikPu54vm2qmF9V9iuKXWjwMJvBqXQmGV4tGc",
  "key15": "2ZHRv9BkvdvcWGXhZK1JkG3iqjXxtGwuc1NVZ7E4z1NXTnmZoYjuofjwv7x7AUr52QE4oiSANaaLR6RDintPH5eS",
  "key16": "WttgnhfiuN9WmGVLiddN2cdvgmEKKhmXEQcjMagbNkFbcNwW5BjxUiKdNwfRhtZZ331oZC6CqbFfJkY7qFFyZg3",
  "key17": "3hRbxXpcSqgYxwzJGXRrJaTgURyFG2m1g6W8CHD99eDnpELZrhx1vqcTL59K5Xxz23XaNPQZ8Msf9jAj6BEWjLSS",
  "key18": "3RyfqwKT3XxDvHphyBWemPwbEGZY55RYajnUMXQiPPjRHLec24SWddLD6unpuQARpUT4oe6PtAo5QywyrtLbX5W6",
  "key19": "xWB7W8jfENabAF3EhnqSywDDaGDA8G6HCpnJDXmj6bfFJjy4kr2mztoiN3GexjLw9ibwREcFTUtJwPJ17inWoJm",
  "key20": "4LJLrPNCkhjwBqZXdoBnXe7Vndqpwf1N2YN7miYpZCAiCVAuJWM78SsSyfPPZEu8oiYbTtHCi4qMLeBU3wy8QN1k",
  "key21": "5t6vC4DZqNYrUVdioY5gNw9FG5WXmX6hMqxvGGqgD3aXXQxVu4eDEne7e9G4rPCaD11GQHGZVDZGDKRQWN1vLn3D",
  "key22": "WvFB9goGJ3h173NLo1cSbjPbf27RKJjnYLA9efRDGz7NPHXFdCx5kaApyGLwMPGaT7YGTwQs7y2QidoQpXjVyov",
  "key23": "3Lziigw2hwp9yZruuCiDQ26AKJXbJgP1nzB4SEsmHCu9wx3GhrV9CkmAJJ7DYTv2TRwGkBUYKpQLbwAvdGUc4p4H",
  "key24": "2uy2zPDMwYFu9NfcCpwuTeptSHmuJii2nZpNQVaraoHHuyBepg8mdyXUq6dtQHsFx7tdcn42pfXb4G4nSXtXpDFG",
  "key25": "3XFbRu2Mn1NtjwMMnZYyHN6Kguh4HVJzWydDDjXcavdc84MFRM7XcAftPbNKXqubW87LW7qZ4w1N7DxY822hSMyd",
  "key26": "2SPTZDCBBvV4FFsPUydQpQxKt3yuazfW7SV8WcuawUD6uuSj7dhkQf8XdkARFXiLX2E4eK4pEP6pTkfXUDKXWe5B"
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
