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
    "2EcxGTUb692TVsyDnTh89hiJcQvMkoDETNPGmZR4rmc8HxWHzyWdwcZu7iCrSWLYcspS7vFi6UE6W43ApAkN9jnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qu4GCLzYm9TyGoATCqx5dwyZS6XLyCbNAyTxHUQrexpSCZKonf6XfqTQ2M7feAPVqBJEKiU2fyiieGj35RTqHZc",
  "key1": "54iakNXhpt8jKX7kuvnquhFT43A2BvAeMckYfVutj51AXbA6sXMBPr6yKRjPkN99GFyn4A5r6ecPRjuXHDxaMmYq",
  "key2": "4dXDvufikg94d3akeHBpxvZ4sJpKLXQgrLb5cvrapr9BitgE8iy8pg9B6Dqgy7HzF482qX2Wt1FSm88StsR7e6fh",
  "key3": "24FZxQY8ENXVHnH9akeQWAihDQkLwoGvdmSjWxMXXhVTAAtYnPc9rWNM2jW1BNKGejAmdJ7j3x4wzNnxHwfJ5n99",
  "key4": "BS7FKwPbzrdJh9UN78DETfprq3MxPKx36vFQfS9d91dfmREQXMWwnDSAnrTQdANp3wJ4uua6jRqR3VoVurfSG4z",
  "key5": "2zTmzs4cjrsKE276NGBLVDKuMs8UNcqBg6bKCz7nePLuUvNnELoPexEE7oE6kShhaswZwv3cCfT9BZL9QCBP7E21",
  "key6": "4d5iTMtyHu2D1RFj5LJEBcoBRR64saQ5JP3KjqbsPkc6iQACSd8JpZjivkmhepgqZDAnuui4xmrdMMZUb51CJT3W",
  "key7": "uL6wSJL45MTVKBoAJFojCfJT631w6J51pR7jqkwAeQpCrhT2SQNJGeK6VE8hPPw5qNaCxHiRr4yEuGxxGWX13XD",
  "key8": "4NnuzsiKDyqQNTWPtwSQPxB7WyBUwQg9UNUZx78Wn4sPJxsJEhCLHxne5wErSfoPmt5RUWVAZxbsGweqnE1k3mes",
  "key9": "2DQo1o8YzLwcQYqnRs1J3EnqtXbU64eK9Jdu3sMJmAMgAtCmWZKE6XbYgT8M9wUVjuKkD9BpaUstPSunQof1iL39",
  "key10": "48yNrTb64xu6XvG1adQRMU5psXAd7ioZo6SwEVU6weBDCLPMWVGjwPCChth4CAATi7HozdKrcV47gxGzhidXrxhm",
  "key11": "2d3YnbcBdBvww8ePjus7aEsiMmWaRKWKkwkydBb1VZ2R1W26gaDBeNJE66SeA3zHF2RQ9zfhhTqZMMifh21e69mR",
  "key12": "3eZaHmgQJRyCbPp3KmM7g49aDVLyayippesdCmdAdhsHnX3keG8xWDF98trBfdrC8bm3Ba8GKhsETvx3u1c59Ezf",
  "key13": "3VdeZ9CwftMZ6uNq4Am6LzjzNr6YtXowbJvb2er5GA9usdbmLHEk6B9Z8SN7TN6hgskgmQhGBzvooeRkVp1uHbXR",
  "key14": "45RDhUmNe93BaHvWhoqgNJsYPoaF9cAhdqB2GyFNPkh5jP4ydXCifWLhu6Gm8HDyzxmGCFEYzm1ZhB6hKgZ57dVN",
  "key15": "4LpJaKfBetJWcfPPdv6NWKKSJKomPuPM92KGpUFNLfVfBV8yh4CFdcJ39rBEw74h1JwKGBgofjeaqSEmj4Wuppf6",
  "key16": "31SAdRzE3AWyJC4yHVnuJxjatLsvP85pSro1Xk6LGHRynoHasvdbBzY24qmMxrtZ64JGfESaXSe6pL4GNCoa1CFM",
  "key17": "3w9DtQLWBt6dPJR3YwoBvJVFZqvn7N6yp1dfiaFCVdfFgAG8nNkYwMyrsiR9p4Pvui7AmR2avSEvW6mjRuFinfJ7",
  "key18": "2x9JxV3QH2UJJuA7hCUQXbCLY6Sap4oNK3mScjCkhtgsLFcPzJHNy91PhMkU26yDKqtvMtbqBNnhn6ZC1QXkWwhj",
  "key19": "2tWqF1McG9AfP81oQh6zLGp5jH6XydAk1szW6mhDWyC3j7UKJEkLnXcPAcbvXPCLyzmdJYKEHNUcZJXyi49wrYtA",
  "key20": "2WdBVWKKKnEAmQyePPZCNRS1b9bexk5aof1c1ECUT8iYkqjCVNHVJgca2p5KH1a4vKro2VW5iaKzX4h2aNs9QVmD",
  "key21": "5e27sbbUaFhEcQV4y7De4uypnzovAhFRm64adeFJE77rMdrT7te17ia6zBkfGmGupsHWn4GM5P3pdS3ww5h5aHUZ",
  "key22": "2Mo9DpBU1xTSgZaq3fXpZA94HxUTP97YvSdhznSGHMQmdrZDVkPpHME3jZPRG7eMxaHRXeHFG42XZPjzvqyRUSTe",
  "key23": "2pvjPL48aDc7eQtP9gaFwhLsPsCypEVnT8JsWM2HrdbWAvDepuB8XuDqjUs2GFHmPUrFBSsKXjRFjEHXpA8s8a8F",
  "key24": "27Qn2SjAJq3wU9rvmkuJGypTcDLjfCeaddpFFyRdPjFmsy492bcP1cQEutPFz5iV8dC5VRMJfPMzSf4xdVYZpgMu",
  "key25": "5PEKf3VGWdGDL7j5ccJzYa1ZXQfh7XRXvTEjFuhju9nvtjGS15neXr2p8QqUTVTNigJAgS831ZJuyzXWwDNQDNxr",
  "key26": "5cncvY5GjL6oyEm6nmhRHh3gK9cjRwfNwZAUjuRWfpBb8K4FzcodvP1UeGpx1WqQ1SUnSpzSudaBUnzuRgMZFGDn",
  "key27": "5UDrJNYRV9sbQZi4eHKyDog5azZtup5sUqUm81pHXEqHLqEcQDjizKktiYPLufvRe3SET9sFrGppLNpfA5udN8FN",
  "key28": "63batU4qwtUMkRR3f9K6KUVCJxwUaTdCPephxeyndivjW5TuH8JE8GJzu1wc2amMwVaCi3dvVTWn5sWcDArorRui",
  "key29": "2CdTNgqc5t1djCzMHDjR6Qd4WKbjHiGsF9fSRMkfVMPrGDZcJY4gG1JSevcLzfWeuRiRda6Tg8mqw44SFBowNLmn",
  "key30": "RkgESAPwUpQStUCEcgCHnwAE6UeWjAURHCEaJRqvnDZMKUmuCQQbcuWg3DgabRjsWWqFwUjEkfCKh527EiJr6bh"
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
