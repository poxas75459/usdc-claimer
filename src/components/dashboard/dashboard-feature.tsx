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
    "5Kttd6tvjDYJs4D6XuvDk6kcxipaHTUajzUFGh9Etnj5snj3EgfPcSQw924XmQ3WEnAzSbW1Tg3YXR3W6TYMh35q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2n444eiK3CkkyUwXgJXzHyYAcNvyq3WBQV5R4gRY7ZAN5MCe84Y925W6DqyXWPXdZYC9Q4XaTb9sWzhi4VNJd",
  "key1": "5rpRdLddbQLk9i7RTwU6bmkJyxeEHM7ogtd8LaGa4eWvRj47bynN7iypAAtGXhYXD3kib2hxsLRfLu5NKXTtBYT7",
  "key2": "5pP2DrMLQpCgbBLe8ogEBDBc8ZaAwDj2kR91kBCg3pZLHteyX8kcqvUi3g3JhqkgS8Zo1hxWVrmgEqteEq8XKceH",
  "key3": "5qcdRerXVMBTMj4LkYfb5ytRFiHpUiT4WGaWmYC8DfS9XvopkDFHQBJtBH6URcSqq4bXJynbdaiGKSosoaTnscF6",
  "key4": "3RvF3WN7sy1CDvTgKAB1fJCHwEhiBUXt6zjTrDX8ZkGr2TRc4fsoDzNXmZXRciy1VhA66HErXM1e6tfVE4h7G84D",
  "key5": "2T3MJ92nitS2w4Kek8KMZG7riMZDARgt8p2dVeoCyeqAVetAcm6xXhpU9upLzzcw8yQsCocpV922ptx5GnesVW4J",
  "key6": "Src6EoX9pTgbEjxmCe9WkHK1utbvn8GWXzdMCXnN12V5K55C5xx5Abwxne2stZ4AAgHRTHLZcr5Nj9zeHjEGRgu",
  "key7": "4EX8FpNsvcx8xsxwUGTimPeaS4KdG6bGUj4ERphVEw5rcQYbNchLKRwXghz9yVsGgrx7Eq8BcEyM4SdWRjTK6Kdk",
  "key8": "5XACMAKMEKDRiXoRiRSeqVXMeV9xSJfdUU8RFXjRA163DAWvdUFMTsaxB3BFxQbPzDTZVFZhRQ8TXTwiv2eLeGwJ",
  "key9": "2Y7JzUJTXDy1VS5kE9giA5Dx61NrmPvLx76rjnebNQNu12BtXMfFDm1SivZQXb2HvNsySx4K1PGaeqgmkiKXGaHE",
  "key10": "5tmHWqLtKzHwx9EKaTRUfrp61r16TBeGWHWSZ2ZFMe53BXfUBdmgEpixbEz3YWzjiVDR2gVFwxriX8Bb1ExJwRLK",
  "key11": "5xgZA6oKZAadLbAqcM3veXoe9h8DxYtthasmu5ZxPSwAbBXv7qofSDDpmwGdYmx3TFS4h8H3NsVd6H6rEskJ5Xuo",
  "key12": "2GWUTz2x1b175QfdJ3bAg5Vzig1PNkXybLTS6o5otZWPsMwTLkeNZDTe5kZEmm7wtGy7yY4cWcUk6Qdzj7XjgXDJ",
  "key13": "63kygLewFsMCyKEX1ig8hUMKRDWVVHwxeprUH2WsoQ287U3CvcLdkT1yL5b4J5zFe4UEj75sukbTMt5Q3jpwmZf4",
  "key14": "37MGTBQH89rKBmz2BFktbw7pD3QwLCQqRFY3t3DXvDx9QocXjz6wDJ43EM8LhDYvXqQmG4LgkhyD1NiYuFSiqjAK",
  "key15": "BmjhqpxTY2vsx6qZREq5yFWWjco5qGAiR1QXujvN5ei8UGFg422H7QEEDJmRpHepNa8hY1rm6vw8QeNYuFCkK7c",
  "key16": "46Bgy5cUW1PqdUpy5iw2kBgHWmCRTsxmE8Eph5UimaWvrGEGL6waHovkfT3YL3RGVFCNntWv35FzFR8NAPkxDjEr",
  "key17": "5VfhjDMwNPaDbZBwbnvkyXhsZUFDE7VdXR6DJjKEnPM3FrwoGXbyFcFLCadEMLQBvSWHYcP25Bfr3tTL8oAVpyxP",
  "key18": "46dmwmFr3W47mW1coic6nthLecLbftWbkJFZeFwyMKHZG811wjSAZyrH8iQ8RWixsadvW4dEhe3M3HUQ9VX4XRkJ",
  "key19": "2x18kQMKgDR5FAqNLRsu3rDBc4PxxYFzHchqHm3gDo77T5vS31avQHN2CjUnSVSYW6M5zD8Wme1ePCvPHu58EX88",
  "key20": "2557ND4wxvg3qBG1TSxn9513VARDiqEzCLLHz78TGYnMN6kfLzVrjuonUrLHLcuGqNFrkjHQWsjoaq6AZAbyPm96",
  "key21": "4FMSm6VA9xZjXCHbyCXiK4YhR4oCAHB8qLwAvz4TwRb3Suu9zFFUeYw1opST35G3bzzGhPdNWCYSDJiXqgXkUrHL",
  "key22": "5UTqFqypGRSeWT3ExQj5BiaNjqYBqEhRckosRU2hXnNjUQ4trD9u8NeWJK56L6pT8BUnmiqzXEaCm6p4F2EREr16",
  "key23": "5RVfBkSrrJePKe8yELCjkcRYvuk38PVfAqScQMQ587Dx1tstGY5xLhMCwJbsiFg73PfgQeL2QvnFQtzc43foSiRv",
  "key24": "fCeuSbb2Kr5iYQqY5NAr1d7vQZRBFUj2QJXKkUizRK3X2jUgSzWzFrjK3oo51xAx3v2wRQJzP2YDMr61MQeHf5N",
  "key25": "2Fq6rcPQ74ZXDg1tRLDCtTwb4EM5v9Nb6yvqWQmnihEASX16htQxPDS7kqc6q8di1b19UmWV8khxCiMJu42Gwgfk"
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
