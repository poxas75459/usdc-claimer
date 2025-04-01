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
    "4AQxJjbqrXW22F1JZrXzuEG84dyAGD1W9ZmWYq3kgGEbze82qW7JwQzc7vhncr7wYFcidhetufZzJrSWTTVSSu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9wUbDDh6fmnvTZzGDgAbmBuDtqWodzT88tkoWYjfQoDLEBtz65YVWqK3E69bU7MDc7RTfbWHoWR7VFpB1oAbQ2",
  "key1": "5rucBqr8op5XxRgMG48uym2tJkRgayM9RoUQYNt1DjLmZWjrrXQUW8NTcEth4Eh3dArAbiaLDkAVm3prWpu9Qtg2",
  "key2": "2K8Ea9v6s9gYNfaHmynuDv4U76t5em3Qu437FZ2feGFBnD8CtypHNEkD2rqMH2NAKAQY65dXejLfN1pNdrdBWLZ1",
  "key3": "3M1ASfa16kPzjeFg7yNNvg1GRBSJTKEcvH5KsitFR7ZT3fZtNRbWjSUmDi3A9AvyYM6si7GKLuEyYtQ7kg3p77nk",
  "key4": "2StFTWf1BxSfUpgSHQyRCdKNoxcSvGdfSaz5Emvt236RTmUcieo5YmesujaMevwHF4v4dtmC3u96BAPjRAAKJVM1",
  "key5": "4X8oxX9gjx9NC8xM5UKCKS5HVFXdmGgm9FEnKhzESS8djezDvkpx3DAsvU1ALzaaJCZkx26E3hARXUhVinpAcPkw",
  "key6": "2pVKY6aMFYR7maE9oPyrmynAhNDykgVwdqvyNZdFQGGLXSjoCpVDnKYxMbX1tiMreouJWuCCmq3trfwefYWSfhPe",
  "key7": "2opsH8hS6fBX2BFmNgJmvH6qq6CYmc9wU3BAkRqbvhHCvWE9ZcuG5pKt6rUYtzozu1GtLw9iCG1HPbVgT7Ui3tMb",
  "key8": "4hQBtKCjcGvzGWV8GEdc4U7MpqHNBB5opVBkHCj8T5k4kjAov7B1HDpG7ZrCFpm9gJE8pAwooXBMHJ8bLoedXkKx",
  "key9": "59qo7zt7eJQSUvsAnD1Qfretavv8WKVF2E6pQnrkExPAWpZrpwehSptwBdCsEakyHUXsvbASj7f9j3qFwKEEi7BP",
  "key10": "4nK8XNx288mpdSkEK7kFEWHEkfTyjVdGKq42EdHEMveCpWLmqbsRYE5R3Mq1XpEJ2h59WTM4zH2m3WXdxGKxUtep",
  "key11": "vSE1XjW1nd6qsshss4Z2ipnDMUnBNEX9zPuSg9EkHLyMEJtKdPsUGCJMWqekhBCNCq2YGJk1TcjEUxrYsXoyJEt",
  "key12": "h9JAX7TdYffm8Se1k5udhDFjry7gwG2TsuwfuiphRdVoeytLbHaTGj3FHDVhBzprbubudwNktyX7EFsRYsd5krU",
  "key13": "4gqK6P7mLUZyRY3hf8jQ2kqFx5h9KCZvX7m1GfHZk3HxjnbeEirB53e5SJ7KhzadYjwFA4jSt9WwPXJ4WbvBY6dM",
  "key14": "3A6T7zRUVn2kM8CvEdXMeHCN3uZyL3XS53ts4s7GFttxWBU53VyMAMSkh3QvQ2GrfdE1dHhSRPEAcNSgH3CEY1KJ",
  "key15": "5oDjvUnsCBGZ4rWKwbG4MCWkhDNzd2j6jpPgX1byzRZALUtn51w3hrF6qbcT9RUCQG8BqcD1EnNUivN2hFJcjX4C",
  "key16": "hkMSL6E649WtdEH7UsUVV4Gx7sZWpFvC8NwccKWNVSRBfozS9N78d2dXvRugkDKQFbiucA6KLAK4g896oCJccvx",
  "key17": "2tdLHHQVQbtySyTWAkuqfC2qeSAcBTstgp23ciL6Bn7fRm3cb6jkFU4rLMxoqCeb5xd7Q5xUXvGoC9Jh6YghAJRT",
  "key18": "53ofFsTVn5zR4Xc7B7BR6Sx2C68hU2jEErzsw9QAAUtPznEjG2echcmrScSG3kngBPKWxn5b2tWrR4F9u82SX82v",
  "key19": "3QQuA59dpv58MCwQtgezKU5Uo76xRoyKWdEHWn3zgb3tjzNbhrp94fnc6QP2NgHVFbKgEbQnjHaBhXSn8cYzdUsd",
  "key20": "3XXdbv12hdWpcRd6T6isNkzkNHQpRg74bdDLfpQ5qLjnnR4K1nkUhBPzE84qWxVvE73qCyCpA9wzGZUnwBxH6v7s",
  "key21": "3yR6qXjjV1dxksMpYJNuaNGFqXgCaHTu348KXdZ12omePrQcJ6NUnFcDVLgtFRppjEj4MWzHCXGBy89x7UEfErd7",
  "key22": "3KuNLvWNuYfR7S8p8Tphaf1zkvTN2CS981sYG6Y48VtfHNe6NQULhmWdB9FAvtSootTMZGXCHqysox9W2W3gqeVU",
  "key23": "5eZPXm6TpogbQGC7i8c1vnfqm2v2uvKmxDVrVffzGmcSDUmQ7AopkJq73yzvUQLZ26cTCFjnekLihboQSPHidoaV",
  "key24": "h75PrhWaF8C9vnZKy9KEXR6G5r4iFKKTAbc8bgEBoBFEkM3VcABjy4HAPqZTbLGCHy6PkEvZ1ewLsQUzyJRrCXv",
  "key25": "4YsXNH2NeU2uSV1siHb3vd1dnPZXRMbmuBUZAx9YgUK5YwSq4sGfL6vspCAdmQNPXt2x6RnyXYmTNL1UmWyNZ3Xt",
  "key26": "twRbnUARpQb8FSCmELNoATuF9r5junMXSauZMrCxRfhTScShdpsen4kwPv2M1cXCHU4qKK6TGxdeQtLU2HwBuF7",
  "key27": "2ccKmnssYct1PgQ8uwmVXDxa2o9wBZJUTKzBF2sWU6ULvdYpZgv8rnQXzv3viWZgy2y75JamA7cSW2jfoq2DEAeQ",
  "key28": "2y1WduHCn1z9DnhsHGXxNf6DcGQkraZLaQgq8pSHszKYBcYtB3UAdjYApxH7GtmDErCZEVNwJfncQAk4SNbcHf5L",
  "key29": "3cq6sQhk3rWjbvL2hJn8GRAX9o9yac1LJnLYb8N3cwD7RrRMdtioaLrjckJBCp7JNkY9PTETVrvVWqVWLUVvCUjF",
  "key30": "3VNRRg8LrJ75Cmk8DvvZWaKyvdwZ2isb5ZVM7UK4ZY7h7dZHddshNyaG9G4KuQdsAepnSkyjYRVAXKYLq2beoRwz",
  "key31": "Fxzgrkq9oWAUTGM5XrFdVhpKJ47gU1VtEfnSDRmca2LV1Pq5VwANXs37zGSAvXoViGxfwCyeddhDKkAaEQtyHgm",
  "key32": "JFWFKsmaPYbM77UnqYcoUzB5KPtjGeBY677fEFjoieX4MSxaRc9znD8Cs14buQyC83puN31h3mYboVuW7z2iZQP",
  "key33": "6GiyBChdiXtn6gvskKnoutQdYo57fYLCotfZdEjRwNq7Su9xSssEP3tZNimZJm7f3e17ZpFuhDsEEXuBwQGxfxE"
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
