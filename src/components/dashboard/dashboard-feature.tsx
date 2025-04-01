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
    "4uwfZ2U8Aw6wbb8qAEK1A2tKpY6QZUxT3gXPqg9hCyykVVN3zFHKh2UdtLpNfAHydwuW6bHGS33MjPj7qPADkyUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kieLcsoauyHpXsHZWRv4C8TbGa74mKJQW8eFkXbLmoPwixfQEVAJTHaLtvXEmtdrePJXaYM9LPbr17Xf6i1Ca2H",
  "key1": "3VUxHYCbxb6sBk9ojZv31iJySsz5iir3aBVK3LAzbaiQTgNKLM4Vv4aPsN2vzYp6Y31VvS79CwuLyLipb723k7fp",
  "key2": "hXFTAbdFQav9msSGw3GKokwEtbUMjUZFKB6s1MzwCiMaXRRmDzRDxXvWFbmQTT3eA8rZsnK5txJYwKfJy3orXak",
  "key3": "5pqHgxjDFtLf7UtvXVUFfWfo2Vdzfzng5ajnmJHvPn7aNaUBvcozQE9reEawLod58akCYjuVKeGkoxk7gdGtWCjW",
  "key4": "5vrPPdhVo78YRHDRN8gVAGrcVi1XQfya8KWVS5DXgCPnJpuQnH4cr1KVwvYr7BuYdTWQXhkXfF76DLdjUn4fW5E6",
  "key5": "iJY5r5dWqL6MvUf9qDZw3e2EiwFKrYUugW9QmGxnoFk7LUvMwfwuQ7yQvyatZFANVFAXhZYqke6bMKtc4wBwVza",
  "key6": "25QmXtSxG4PK5dy5pxmYXqarbRyVB6R6z7dg75pNZfwFM367dkT3mwnqpp8vNPK4dwG2AbFRE2xf8HfGQKWfLWF9",
  "key7": "2PTcJ8tZxMTxdp7MJRUbvb8R5iyZnB1VcZMvwtqMZWS8zHaUKTGY5ey25KKPFJneMGUQG8qtJGdyqaC9ZesFC1Mg",
  "key8": "2NpNyHV51XG6BWiTbpEYhS5QT79yQ5sxYq34avyRLjZNCSfWrKPCbGnFwAJgCeRwsMxTFw3TA3SmzpMDvKSjyzhG",
  "key9": "5ZQgYtzaZCtiVcy7FygscDr7LkFC6Cjq9t4jL2XVWrD7t9pDw1QEj9icXFCigGyAuzhuZ3V7kXtYpDDMDa1z5s4W",
  "key10": "4a99rTUoG9zkd5FVrVNxMwYBnWjMbqpiaGjLmMEVCKSRfjpdBkA9WV7a4NzKwsCV4VPtR6tJayvovuYFR9TxJnMn",
  "key11": "3cd8B1yEM3MFMrfNcvWQpLBZDn9NYEySK3a9BRwh9XpJ1GMYc2iBVRHk1KCm7J6LJiNk6Lv7z4FoVmRTe19q9LjS",
  "key12": "3si4cAgyvFRfKxf7bnwwefymdLetNhzfDtsKbvhf97ftXjDzapAV9XBqfdBUXsCKPW9De24Wz8uCKKnnrzeNVPNh",
  "key13": "5BHrU8GwHtB3yYFg65ZWw6xPjHvTHR6sBYs7syxv3TQxjrfszspNSEADKZRsXn2Lx79bwCSzmmjs3QsG9mq8hPbq",
  "key14": "3YGnfLdNhobgxLmoCQCrb91Q6a5FxbFEF7vNrFmEFs31UmT1uTYpEdLNU6mb6oUVkjyJztDcU42oZCaqZAbNNVkP",
  "key15": "4YjQd8TwscBvyMYdGxesB114omTK11vhU4JiMsvua9BJhfYbWawyVYANvy4AQiPsB12EKmfwbhRtJav89c68oQra",
  "key16": "E2fBAuwPXdMTfg7i56amQ2mTE3zSFSY2sm9arakQRw79D5sn7fUyLmDuJ1YD3hLeowyTLkM6n9SEYepzXmepsT7",
  "key17": "63zrMrRkTJEd9HCd1LxkwT3Q8eqn6ivUJnvGyKTo9MYiuFmKEmwcP1E1yKRVoUmAG7J86vY6BmnULAtqvekKpuVd",
  "key18": "2WADKHaMVRjWHKnDauHfaMFZXPH6DAts8Q2LPgM9KuzMDhA3q9q9wA2tyxDmU8TiFoizmMHEhrmU7TvCe45bkeZx",
  "key19": "2m1ycSbQKv7rDi5qfumeW4D8axkcTbgLqtau9Jy6MantrWWcyYd1wJZ5kCFJPj2oWPPLm4Jhp66omW3as14kSHfJ",
  "key20": "4F1tmFvHk78K5mGANbWTsqnfJHTX3McNpMHAvDipVtjxW598U5vckqLZLZDNZ2g27BiAmim9i1emnh36FgFUMmaJ",
  "key21": "29DVyXnLtahzq8PAgnMrSuHhzKNzUXDPTeM2r4MFHPhF7MZz6VY5djnd51LP99jpzaUq6FBQy2znCTgnydXgMsN6",
  "key22": "seEMCsyS9jAxGApSBnLctCRdqk48fjKeiN95gHdYrB1KamxPo6ak1DrV9L1U6cN1FQegR69MUZs4CzdD2NSAJuQ",
  "key23": "Z2K4MrG9ZE9f31b74cNEikHTUXQxiFi6hmcF5WAa756KstNWLCY7pGWrp2t96FEwWP2XM7vi1H9mbDhXSU4uErU",
  "key24": "4Gp9i6BuJVpE7PefZc7rN6gXEN9m4hpXm8Yqgfh9rPdhi2Tdu7vrVQ196nkaMLP31jQjE9K51uUBkwvRREQso8KA",
  "key25": "5einh2juJLDHVLbKZFwCqMmPjB8kNHaQ16WRPW3tR2hmBdZUnChnbsZiyCEfwoBfYQPi3EDLQFNWWv7QDytJBj8L",
  "key26": "2EboqC985UMRHhyw3M5b2sevz1qnfuwYeAE4zB35HuyKTuxQFnVMfHWjwe5mzzbDwdXE8hBbrrSDvdW5gnTLTgZx"
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
