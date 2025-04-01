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
    "2GidX5jcSPtRJRa3gKcSTtmAXtzGkvibhoSLqYPv8iKYEuaKgySe5HLbNzqZxvTUXe9TNJWzfAyvWqr8YSK77faz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nzgua1itYkHDRJ1Ehp4Eo8XUyE7GvNMbo4URwX1bzYfiFZNsvyHPiRFapSU9WDVzafZrHmFh8RFUqKezZUcmqHq",
  "key1": "2VxvyseHGZ6UBNBqtuNtwCXnCPi7gzKgtEL4xLpTafrMJZREfz4vMaUG6DRX8QZNGkgRzTsBKDx7bo1X1mVti1Q3",
  "key2": "nysjBZeuK1MTaFLoLUsgY6TJUJjCQTLunE3GgwYt8L2NWYvhjRyGDSTnqGZm4EGUAuiFBBsbba4aBokM8xgowDo",
  "key3": "5qFEVP5HmYXS3NYyUyRvq42G4perNHnkJAeoBUwY1zwcc2NxMgzjMyxKUpb7sJq57R5vNqZFkSQXN3suFxVrst3w",
  "key4": "3k9siD7txpcHKcrsy8BiQkRn6CShiRx5qWEQezu76RQ2cjiQZZB7dEd4bGdDEJyTGx572JQZZ1W6Hkb7BkeCPxkx",
  "key5": "4HrKnTXbYXeoR8gqKnkYPee4jAzooWqA9L8s1gcBGtovKSW2GeuhgjikratbAMHfgjDKp5A5Gcu9TY9rN27CKLaJ",
  "key6": "2HAYk51hDfryCLsWTzWxoRF6MNhSRAwvcgSzTbGJzRzgspRSTeQGP3qm8vLkVqdaxcqHJ42robrPMhyoivbFk7Ck",
  "key7": "5pyvdT3ntNH7inNvGyYqw3sotWSq6by96zG5EE7osDhSoF5Y6pTTg88wpQ1DGMGQKbx85LwZSVbAg7jDsme7zTn9",
  "key8": "24YrGtTy5A6uMj73DToZgiKKxs3Kt7wgNaeEdz3QSBU5mmJBih3WaPSB97q44cFHPFbPb8FqvSydzRBjk1WQDM9a",
  "key9": "3FVFJt3FQLj5PWAZb1ZZJe7sEVVMNT6enFzVo8hAfESELHADaF59vrHENYqqkLsWszoTbY28hM1KcFEETLvnC959",
  "key10": "5quw54dk38rvRMRGKhjQT8NsRRC6wUqnVgBiDsP4f6sRnmVcXnU4orM75btPat2b2q3n2nqYhAf5cNxPkUjS7gUZ",
  "key11": "4XDrpQQesYSYrYs6mXPgU31rugNYfGsNJvQ4ttKMuuDk5aBmJoB6eEgYStbGjBC7PdsQd6wkmSA62SPXtfXDFJEd",
  "key12": "4mmvFPHRxz6twyiNZkk35wGLZi22a7Bai55r6SvzmdFc3iCwyPzHDfKtGGYqVHd28Vx2JaSf4cV8FcCsCZRZ8XHr",
  "key13": "4fqvXRfNgcr21rpRnjiGQKoUysd7Z5DMmW7jPYg5MmebXdGQAR4a79iZKWCM4aB3iaHgzYfVjosqTiXmnvn1rJVp",
  "key14": "GpMefRoibPeLKMf142rKoUHDjjAjxnUNwFV3Q8aJHCpLqKTwE6DrvpTrASFQpEVWeGSY7Y4af5FsQta5eeZcz91",
  "key15": "4USk6phmN73A9iARTZveuEzq8AQCrPATsYE71MeAT8YW6FhkycLASndZmNbrNkbPFUnd1WDPxFmqmvQLWuR3rddd",
  "key16": "44gU42nW1rhoXeX883nyY4HDa2eYXvMgUFimGCsRUQx5gTAK55XfmzdjxXy7s5veNVjqop6PSfhLTXWKC2BQ3Bcv",
  "key17": "M4sJ7FGmmtyhq57WQbJ2wc97dVkFe9SiBDLkWAiFkVBe3es4jA5RyLkXeFA2Gj1dyEYVmLyyoTV8uujdUxPXHvM",
  "key18": "rsaES1GfZDJw8LWNbHcyk6xr8tnvNTkpD8bU779wnMN8jqtroywnazxAUPpje2ovJvH2yzDyBZyTho82kv9NKMk",
  "key19": "25N8FS4me8oe2u7iNPiXfKNxxUrdKjo2SM6WprpbrnK3oYyV4piBambq8ShExT7ChdKFYuSG2MhLvHnnHTV8a2AR",
  "key20": "5y2viCcRFHAmUiQEo4LXC2yb6XSaXveZibkvpGf5bjk1hys5qQcHJZuA9FuuMgimtHuZjAxZmopnitqeLsqoinve",
  "key21": "3Re46L4mY4HygPWEj9Ai6zod6nBzeoSgLGNAoGANTWwkxpdtUnRYnJ8hbjDht4duxDNMa7rMgmtWAkqU5MAFv1yq",
  "key22": "DWp47yQKx3W13VDcRpmnpLZF64P6JoGg8nvLuoCXCv2D562mCAiKbKh95z6qkzukHZuC8aNToZ99JWcchDvDrxq",
  "key23": "2XhktfxhgwqhacYNmeLzr1bvJd2ADvmxSHiPUjTzXF1G8kdChmzs93aRdmBkbJ9gPGENqbZ11jDHkoaHAHWDEyFn",
  "key24": "5S7T9UsPxRRnkrrw77FP8EB9AZ5VLcy8y7mGCHN4tcMaszZFNFp4PkZkW48FPrEm8D3EWdZLPGm4HiTprpWdJxiL"
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
