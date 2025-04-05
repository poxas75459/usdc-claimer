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
    "238WK4idmAYcbJKXaL2qTfcYoiNu9nKjU37i4gernqUBhbAv7jFWJRn4zy74Qa1kGNeFctYPrhGVwqdcwX4RrDdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEMecYPy5m2PtUYpDddfgcsR3s6BU4GJ4s5SHiCV3KVFaQHK4pYuUm5DuwRza29HVF1r3oVPKovKabgjwwSEQjC",
  "key1": "55Yq1Rb9ZeWjVgcid3mzfiBUjgkrB23vtUfTmzGDZBaJ7yrN2qLbxRVg9kiQ2dRYNg8B1s3G2NabYuhkHPMHXqJM",
  "key2": "63kGGka9VEYQsJFd8iuQeSK7uyLeyvx9kcnMuE1tkSDQXEv6YrCxtJGbqHgDwtxRHvVkMbGfVVuRrYecXZ1CTzQ1",
  "key3": "2RWNhenLiHuTzk594Dvihgtfdd978ZXKzPQytQ1yM75FzSM9mXF7puNQHYB5C9thehWhRfGRt13QzbCKen2Ei1yv",
  "key4": "3B9qatwaRb828yxSqVxZuQ51s19EMheKZ2DwXqpWbGAnb4J8trYaZtTjo4oWAJPWHzzWFGN6hMNxH3ZTVXFeHFUc",
  "key5": "3GtsqUERJNHVqjLkgQ7WbCchdGCyJWGPptghPoTPhKqApfWBvjVVeijVQ8Nueca3b52hTVRUNrqSxar9PawWhcuP",
  "key6": "3asnAcvaHEZLRqHMcvSKj7FvTrkiavBDKbFiPVtbXwMKnEW4cST7UJafsEFyWCV4tnpxkCzztEvf6QP2hC2Q2nGi",
  "key7": "5oRm8cTNuTQaDAV4sbE4enH74fiFkvyvWAJJ2RsijjRT9psxrfcX1Sb6XmzmTLCEjgznxt53kt1gdaRQr9a8HTyW",
  "key8": "4awkwZyM8KQuN1fayoYtGtJ6SJyFRqu2JbTLZUAt2tf2W815mWBKp32dUQzw6c8kzf9t3fXSCn52YpvFjb1xYQ6q",
  "key9": "61fAa1BgpebeZa3jhUSKLaN2S6H5cST3a5vqgLznMYG26crQUqizmmuEniKBCxVPypvL5XNt1KVqgD3XniHpdn8B",
  "key10": "4dKNPBC9fCRky7rimZDJWfUznyRJJb7jeka5yRCopvTK8mSk8qjUd5ko1a1nWufQ4FUoEjn2DuGcu8nfBHLG9wxh",
  "key11": "4Y5yF153FZDjHVjWrd6UmiCdaWGH83B5osadVPHuMkVVsP7aFKubZeBGfLEyrET8yP4f9SDww5ayNhqyUFaCXxVR",
  "key12": "Xgh6SmbvVP2puUyeTgDVzP8Q62WkgWKFbVENr2H8RqpLiudMUDC1V6sFSKtjK3KZvuSDHxYXSSJxFoyCo2iU34K",
  "key13": "28n1j12Z79fPbrPqMuDkmHksfhRJg29rEY7coVyvbaAC55dpx453mDVfg3zULGwi68dg2sJ6kopDnoB1wQiMTdsk",
  "key14": "3rjK1uPos5FU8NNvocf8Yjixu8JgbHTGD2seJRWveway9K2fTaEg85jU4fMXvZhwRqTi2Pq5ViVrajt7ZqE1cQXc",
  "key15": "5p9nG1uNYt1onm41csw4F6UAq61mjZTshRjcc7v3q1kydBGgf5xEjJRuiYt5QpuUJEKnqAd7v8QeV6HBiVVSJ9G9",
  "key16": "4n2EwkNxvw5XXaReTTFkXXtNS6P7WQoyerfoA7i3e6nRRNBaGCyCth1xUbHVq5mLR8kYax8fCn4QXbd4cr8YVyR2",
  "key17": "67cGnmgR2ij1Jt7oGwso5zuJNjaZzGXCWc4CBpegMUQaKptcxwWKwUvAvppH9Fpg3WoJeG7YTwx8Vzz4ZFvgf8Q",
  "key18": "4WdDznzXHhrq4fcDZedi4WuuxFiAUkq5EE7JX4PWfhUMgGXS37duZ2N319tJk79qRcQv9p6cpkQXg3uZDi85kFvb",
  "key19": "4etbfa51YafQTpxixry2e68vkqUQPuPvDegJXzNBqEGPXMuuEU3Gq7QvBW3wXnj6ETYBn6w5sk5rTJCsqX18RkyX",
  "key20": "e9pH8yspJZG4xEEuvwcVtV6kdUoxjTJAckSLHjxHRaDUsLs2X4vjp71Swkw2UGxT8gPNtoyPWfm3xF7gnoyFwi1",
  "key21": "4wMe5rcWYSHvnDf58d2TvCEjxSkBJqzQYna39goTZ3TEGRDebp9GM3LjcaRHtMtUZCNAHiBaY6f3NmZNkcaeHMN6",
  "key22": "674skm7uxi4hZSftJ3jMnDB1PYJ6zP3tFmRfFdfjijVxzBjQH3cpwHxWCSCrMAtE8fTem7yU3HBh2FTNXrSyUxNt",
  "key23": "2YYrEGWC3A4rhgdHihVeseN551EsVqYRGkhU9wAB9NcgcEHWWVdXxjVx42MQPAjsfVC5LATCa4Gnf1kKXwDhQtBC",
  "key24": "45iQjcQ8Q3CasfogGPawrWSVL3BXmhsRucKKbDTkAiVugKmEEbREXG1WAi4KMv3hz6Ectz3MKZRvhTAR3s6A3pqi",
  "key25": "3xk6J2mPT89juGmx5QUwtaEGKbVL4LbZP1dZGahH6pTY1kr2w1331YC6ND8puycTuN2iyo2S5bhe1EGDwPM6wb2m",
  "key26": "5vD5jxQZu81D8ETykTw2YVhZEdtvv94NWxgfPHCrVRiJaCUZUn8YxVjpmNzGHyqwZxwyvxaoah2CUsNP1G1NyCEw"
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
