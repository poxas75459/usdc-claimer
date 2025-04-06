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
    "4AhR7YLv3VAc8FCwNJVhmT8iTsJmT2BXnA4wBtzg2ph6TCnwkKJvxfF5QzEaqZqAov3crDVdAKhKVAZmJLptpkr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKEPeJZQSkEiFoNBr3zG6QHABrSZAdbZ8mcJc91m1TzUPp4xVsPBM6huxGbbuWWhvZM6F8Y5pK78m2aNQv4CMvC",
  "key1": "2JV8wrss3iugkoLatBBYbbzS1rwCQpCJiFLqSmu7ncATYUxUJwBw63D8KJ2eWXdbXM8skbU7xP9KNEAQVkLyxW8c",
  "key2": "66Ra7RD4HfYfyZsZuZ6mTXeUXrVWZktaQr3tDc5xTP2XmvhzUfRaqTUADj5YLXQL5izmB1tpfz1wxTjLc9T4ybUY",
  "key3": "2Za2MFdDM79Gz28ZipkcmhQWzL46sq4HX2JzKhd3Fhx8aADe2qbbS1iwyvUQoCkR5bS4rkZ3t7QEiNgwgNJxpyNY",
  "key4": "5U3wTAFmYJDNP88vsZiBhbxaC6QrKCXStX6FR1k1nyXrzfzh3b9D5DEekNh7L8Bu9xXJyVveAvks6KP6HcUXqAjt",
  "key5": "2QFUb3BY1bt32AFbx7couqJF2EjEbZTxhADutysbzXQ2TNyFcRaw4K4RwyjCYCWoAB6uxs87WCva7J9Rn94pe2Pe",
  "key6": "pvGkAxqNiBp3dyP7CMWc8ujjnn8xWBBb6YHQnfKfptXMUzFUEiuqWEuYSUJgS7YBVUJgAEiT38z25fqLnefLBHL",
  "key7": "3jk93VGKdVHUZ9MUZ5GjCmSwVctzyeLxE9VVGXWzUevVxHjd5JScjke4uPEBSWdxhtQzEg8FugDG4QJ2nZnC1zUZ",
  "key8": "2mAEiMoeyvEJxESsfPGDNJZrydBr3QeqAmm1t5nmKBqmMwLnhjLgexRZNim1vKwgUAw3LzRrSuWoxJfwpYuhAZeP",
  "key9": "4x6MsdK7VCavHyKJuZ9Fpn8fArzzhMHzoNPkQRphgbuzygeD6mFxBXTa8izYmYzbwi6CXJGWztcAg94vT5i3ugn2",
  "key10": "4PzRK1Bgo8HezncFVKzb1rbtAku31HMPZ5H6BgL1WyNTNSmg7BPSruiW86VKHQrQkBJ1uzbM8XyounhD8xXYtGPD",
  "key11": "2p7E1iUN3VZB3BaCt4aeXwmh1DiuAnEzV6FoaQuW2LwZA1w5TM7geZ65fxSTeagAQEALucPe3MbQfpqow5QQHoB7",
  "key12": "64KdJpYx7iAwsBLkMhoHxtbcTWGhVUkWBoJhEdrR3sqRbgr8vx76o2pYyLvqiVSQghuckSeMu11d4oQaoTcL4P1H",
  "key13": "pnEzNQzZPvYFkB8dNGoubJ68Utf9jpBWLD3LThKMvyJCszmKZnXW42erSfc1phfK7KpfE8UJYv2UCXMxiTjce7t",
  "key14": "2oBzduMZQaCprqPRL1SGXobHsjuE6vvDonCkDZo7XeApZYHWwNBEDrw5m8X7PrK9c8sHS7WkbuvoKuhwpjtsK5HH",
  "key15": "2iyvDeG5NG3CeezoeyVP1HZBZFTnKvw5KeHqtnBnFfSnSojAzgpeJ7wHLUravMKeADYPgP6avNet1dWBVwX932M9",
  "key16": "66ocsyAeNACxWWgx3YiqCfXsCkrWMQQx1rqSfSu6wTxLpq1u4vKtEE482Zfpj7iQgTnp78ZCsa4VXn5qPb1X756v",
  "key17": "4yCnJEUWpQZc9yojNTvRzduYA2CPqpvjTK6mRu2YEaLjinHPVuYDu9yE1fM71ybFwT4jch5RDfuuhwrGrAGshxUw",
  "key18": "3wc6D1PDp9r9Nnx9A3h8BTkXYdqUBmVwdz2uo3MNvcggDe3e8Gx2uiM8hAntrhHpk4xN3vVGuUbLiR2TAzLd2hPS",
  "key19": "2Fq4ccZSbgFMsY8deXz9QTrvPatGbDZrKT1Jad6yvJ9aAAHoX472z2v6vHR5X9cCPfKVgH4d2h9d2wNzKS3QfqAK",
  "key20": "264F2w8kvim1xRALtWSqyX5j4prveMCc7ST6hRkqLrtbcFEHCpeDvAe4ZV7ezMFLycJw89MCBGyZ9LQdMNRcGGrD",
  "key21": "4HZSCNaq3MkVwpieVxX9h8qvBF9xHJxHEQLaKRizgaf9eZbd7WkxMxsgLpSze8aftQakBRHcWENyGvkqgqbxv8nk",
  "key22": "Uxpr7ArZGPbdyYgpwkMCvSqKA6N1oWpF7xxnEZQDu6EH1JNJmSg9ME88R6zTtXU2yURKzs58mSeDoQXoM7p2q68",
  "key23": "5VKDAtQfvWCdYeCfCbPUp4bXZN2Fu274sj5VjztAqj7UpQpsH6amhxVT5eGLZn7pBqw2dif4Ssf4EzjyrbnLcaAB",
  "key24": "3Sdg23BMx1A1DSjmKg52WxHXHrCSjsRw5PsRBg6v6Ennht1B5SJndxf1boN5hDE69EjCuuvGeor2fWDvFVKbh7iy",
  "key25": "2Uuetrbu12FgTxsMAbbgmUVNL5ASxbcBor4pKjizos69UvJCP4Y5JvrFocC8Soy3ddGny6XFrwVEQrL1K4fhtuao",
  "key26": "4RifqN8FJeL9hAs9Zny5Rm5179iJo691JVeypDpjRFtxG5q6WzCJBSjP4QWUTfj6LMXopJGyD8bqHub4fhW1192f",
  "key27": "wZNfjmb2qAebKiR4E2CMUrS8UcSh996Vj2eaEYbZc37mQpKxmCogvnXmoivG8kexmpT16kR3oPxYW75iNaGmW9P"
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
