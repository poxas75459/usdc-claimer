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
    "3AEYjibpHBM5QJWxrygLMaVerni9xvce4sgmPNqWB2Ga7euAkYS8natqXaXynXjZY5up7kzeVwoHsnREiUpeNg67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wbArFs2GV1iTk96DXcpijKDv3c5zrs2d8cm5ZdFafn8j6SbjXQxAgSxJg5QqWwNhFTAU192XPyubeZmtEdQX9nw",
  "key1": "2gx3uH1SjbwXF9DekvCjN377WGm4SwoPuLKgek8SpLf41f1vFyiJmJaww9j4DMeKbVKYtbaubf23fi2oEjJezp5Q",
  "key2": "prQcnwJ8K7jEEGRLhnutEAscPNtzWtsYRDStAa7oJmGQcyceByZoAvgZr4363N6AFMLKJhVHUBHDFFfR5hJembs",
  "key3": "4ix2FatJWxhMxid8ubqKBasF1g46kX2ZSYMMMv6ZUbs8ZffzXT64Xuemga6pjqNyyP7fPjcp34HxgapD42CyP2MH",
  "key4": "4qMwn6WTmqFmP7r1JGyJ89QBPob3R1LaVqRgDEKA7b9iTQrNH9CxA9dwPgAPGMLAhCQATEH33v73kpU7jcPw5YPj",
  "key5": "2WMG4NjRYhUHpWKWt81jpD3Fz4jDUVYkuzhYx83ASbU23DnWUkURcChNJN8KEDmAdYB8sGvP2pV2L5i6KaHNZZ42",
  "key6": "38gt8CESQSJxrtv8z93eRPRYVPNW4fajmq8MqMXTg6nYBZe6tetVbY4AsrY7gj7wZVnG5cr8o6iN6BGKnvUA54La",
  "key7": "62P2P5LUxs53qXxxreqkCYtedHW1EUDcvJYF17YR4KZYchx7816adcdqWgwB3ij8c7tC51EQBQH8mbY9ZC7VraZu",
  "key8": "3uygWw7iodyp69DV51cbj5A5mjcZAF7NuAims22GLnueYS2RHQFcAf8nZSQuPQHYA97rNxJ3sdaPDKPpphDxpT1K",
  "key9": "34kJ8tLoFzuyGuEfsMFGTdUBmHjQcsvqgXLy7JyFboW7E9iH44atU8VtaiZH136NicS94WnEUAdGpF2Ym2yHvRue",
  "key10": "26SEBVGSWF6tYksxrUU5S8C12RgJGTja9DoJUMieme2nee5Tw4CywY1B9UHyWUPDdmnpGATR2GdDhY1KNKt3zERy",
  "key11": "3nWznNfCLYwUTEZ74bC27XmsgBE9ahrJvYCrE1YJDgSTx9fDKCMF5H8YfK9MFZkdGMfK4FyPYPaSwEfK6sCXaDaE",
  "key12": "bkq8xviznyY6EacBc7mBUkix56YWtXbbv17xrnnGGR8y9szLb4Jq3ciWrGW3QB5XQKLD95xC6RLyHb3NkZ7RR2F",
  "key13": "mpem2XznxEP2SofUekT2zH8VV9Rco96XfDkHNsbXVjF3Qf6qPXcz7YUZ4vG4ryaoMXR2coVGvCxNALJfpJN6QJt",
  "key14": "2Mg1vkDtQ65k4f2HGrhPZcebG325MZsHdVLVj1tZkw7FgaaMkboMmvKFWQGkQeJEYF1jsWmZCHS5w3QS63QNJe4o",
  "key15": "3Z22LDxXQizmMV1MTXSgnBErUV9vqwT8SQ7ntCy7s9zEANgApbdC9wwNzRwhAjzD66XHMCsw9VfvE7Hb1uipfFC5",
  "key16": "5a6pN6jAmfc89JehNcCSiq6CUADaDkkY5FuLfkBk6oYymiNPNS2J5e6vgawx4Gq3bb6umiTHoXjvThPEQhzefqCa",
  "key17": "3ZAHZTGGYjE4M8zzJuWoRiABv6Dc71rk6DV4UKFUxE59CDPV6raohf2cQrGqt2uvncGDToYmS8Lycwanucg1Mtn2",
  "key18": "jUtHVoVBeaqTDXnzDQZnwpNofmZKQakjPJpEeuP7dCbqqdnJM1TtsME6niJqtKGxeFGjsh1rXHPyULRxJL9dxrs",
  "key19": "4K8prLsfheMP7fHK7h5rHqQL5QwAJXzccESsY1wkMDVygeqhu5gnp4kEE3eraB1ampzEgxHtndfi8hbo3RUijLgV",
  "key20": "RxsqFXda7mhjqpHhgUpCAPPzcnEqEDfNEzGRz7E2dd52y3RaEZbshKPmtRWP5wjucwj2MYg8YkfqThNfXuWg1Uz",
  "key21": "4FgPKqXAvDqRD7EHaiLuzgT7LMRbS3vGeRbTDSAwfUZimzis5nnjBfvZs21L6oQTvCYsAZ2tkayxmAsG7T5Us5Xh",
  "key22": "FjX75JBKwm8YD9oRLWjaq6sMYCMZgtii4VVnq3qvvbBj99AYfEQZAwwefH3sh5pXcCUwes9JhMgwp81uhpBwWLe",
  "key23": "4S81vixQJq7hA4EvRdtMPJSVVxtWwaSrYGQSZae4VMwryMzYtsgPmcnRPNQugtDZwofrb3fSipHYBut7GDKEM19S",
  "key24": "2FYinii3eZb9vd1yDTxNqXMCAo1V8koT3VJPidUTP6ZubuCN1rNcM7RAPP5EHLBUS11ifa8XKdiGgtf1iCnvj4Qo",
  "key25": "58rHQ2asPMS7hwnyyxS43KTCDz9xjzSEV3HQ91gvffNw6ymaEUxLiKFByHwzZY9EdUVaZvQtyEP76Zam6iCJBjTM"
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
