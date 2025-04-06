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
    "6RjBphdVASzihrd2ieWM9hA4kP2ihKwyjqSiNSAcDoFCA9AqYpNFSTQDVy1G6vyfKs3vqZnqKyZgdKpSmaQPgTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2Mwzcqxe54GNPaCfFMw91Ncm5jwH7rKFvDa6pTsiyPvhALtajKiEJqwNb4hKB46tG1nGKUGu5ybK4qZz8VR8yh",
  "key1": "rvBqocTcAYQgQPR8c4gcio7JHfThnaD2i98rYrJCHisqbJxyNJs7hUk1wEupahyDYGGfiPNdTyoq3e2TX3bGg9b",
  "key2": "5EB8PZ47MdgyXF1gmE4a2XFZLiAMHagqWw2tBDgP6RZ8DDdQK5yntqM8aagMS1gFNDgVzTuiMG4vtRxdHVTn3vGa",
  "key3": "WDz1qEyHC191ArBNa7bsf2pf8exeahdko9XaGLC3EP99jXoxUQ7HpRmcu7RzjL7vhQjjgWp6W3KQ1Nd38Vr4k1X",
  "key4": "4Uew4EL3crcjXhMfqSacTAgS9haW2wBTNkp8o3wRFRuSJmBfK6RozmzzhMBucXrBPkNHdBe19h1vqerN95HQArmY",
  "key5": "5Zckcagm4HyD1vH9RpfpPxbmkww79MnkNEp4nmaXYL9S7i37CJ3yU51PgxRS4TCrpf1k7R3enG9kGg2nwVbpt2M",
  "key6": "214qeNF5v1BVvRt5exbsMPfLjof6mtgwJpoH1ok6bYLqfG629fqNXbf25DuvRi6SBG85dTHuPgGwvdyiR8BGSHps",
  "key7": "2ssJbzbDALcCGqcRsoZLzzkphLHAkq76CAVSFBkFEUgyjWs246ccS2o27sECSUpwbuwLwzPxBTwDrNozYum3qYZ2",
  "key8": "FJgo64PkmuBk5P89EwsBBb2ELfMizrwjQfoJ7A92Ue1N4xpAWzSZmX4XmqhKD6DpgnxUYo2qywDMcZYLPDJcygz",
  "key9": "5crX2dAK5fs6U4grNHk1BvXFPdG7r3dadcLGhjfNYix74cMWVbVT15fTfMWKixxxrGN2t3JCYV4NAghai9wGW5pr",
  "key10": "5sb9pPtAhXL5cysDCRVvJUQTnfK2q9VATeHSUDNwX7fYC7HAkH76fBVRgdbz7kn8rJb4y111mfytzVZVjW57K17f",
  "key11": "3DZzfusapqE3L4h7SQurB7XY6rjUz7kBpqPTf1JECg9Qwh71cGWu7CNX6MskQn53Cm7p42Ys6DyJU7eTGZ4AH5tu",
  "key12": "44yosnDggiVcRRm1c1kfmyhbTfiWTMUDUkZWNMfjksMAWE3oYTPbLSpxUGvMLvuBaWG2dmAbg7nDf2SkiAwQxHy8",
  "key13": "tbqqKCLfqk7TmyFns4C5H2jFcVSZLoF3MKSz35aAnepwGLLBQaoyLQYC2mXLHjD5p34cZQCMiK46YuHutznoL8c",
  "key14": "3wxTdQpYKh3fcNdy8c6eUBQhmGxRY5s72wSFpV4UHfzE5uy8Hjs6YutzNQeEHuYdXym6t5d8KPD6Hq9LnEG33hfu",
  "key15": "4Veb3tXAoKAsxt2SNuofSdKJnwJaHE5SpUCTh4FDBm79GVYwFezGXEErArpxKFJeJwh1UwRVBsN7H4LF7FEGjSnZ",
  "key16": "5yk4QcQsByL9TLx3uoRBNjR2kVJygG7hW2tRdWSG2CG8djBmkc7oUSNCYZPemTXg15zNG9aXHypLizZ8gLp5bTbv",
  "key17": "4cvDPzQsNBJbBQnVEzzgpNWuofyHtcQCqn8QgTMhYDTHY7kourFa5e1YKTHrhNPbADnJY8wxzFAcB2pE75sSyjB6",
  "key18": "5hsnD4q3jrBEB4iUuqMn7PuEvsUwYHWHcGj9dRfLJFgZQCNT6xZUeAf4LmuT6Y11289zEJy1BS7NCZ9mtZj8va8o",
  "key19": "eFZCQRLmcAXcY7vi212ZxPBYJhhpukkgBj45zExjkrkYmbCwDfvCwY2CDECyG3Hd5roQpDP7kAY4m28W1zv7uBx",
  "key20": "xzSbcETS3BSsQyBsnX1HKhqYRr4AaBTDhmg27XbzqzNAsXNuZD6mCSmPTKYUcn8GeLVWqpK4H39GAdUW9Jnmfzr",
  "key21": "5Qe9fp2pMNDW9TgAkPoMDMKKsfzPdT3bg9o5vSowiWsNwX9DXHLR8wEwHJEk3XWPemnMaabXbMjHSNXNnJtQJopi",
  "key22": "5FNXbStN9Nc54uSJ6GeiU8sBen4nuKgvA1sxgpFZR9bq3T6jPC1cKrarJD3N8PPjYSBNSGQ3fSSj9wdgYekUxDSb",
  "key23": "4sKaJWhj4xBUv43MhpmsBF3SA3qTXn8Cuga4wpDnKKzWgQFQVcUjdeMVxh1NxzgVAjX6EfscxpEBDG3PxfV6pdKJ",
  "key24": "2XfeyzkRtyK54eopQ1yWmwaGEiJz9yHHTK6VX3fobrRH5SYyveZNeC9ZwLoGCnLkuMt5X6JhQxh3qbs1f6kwsSvP",
  "key25": "3oidaYSBk5KZns1vezTW9vWW9Z7awuawCNYFmNZpJL2utcx8RhGy7kA4YGMXifkhqLZThN4PW7VPX1WXXkLy3NNh",
  "key26": "Sj1J3GhtJSyBEB6bQhaV72YwVxVrzHYUiTbr8nhPj3Lm4fGG7FetYkeBEsyAP3wVj2WHbQeRZkV8XFiosKf7GCt",
  "key27": "43eWvD8zWVpq8Wz54CPESZSkkinAnS4NUFxVaXFuwiisKwGdUy4xS9vXUCaUWimeN1x8YCCrFouubiRJchz6yn3x"
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
