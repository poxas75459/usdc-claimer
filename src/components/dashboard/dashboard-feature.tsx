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
    "VM34Uu5Z42PrLseBQs8R172H1iNWFS1CjnmDXQGS2CjrAQk4t9EHhbTGYyNkcJB4CACPRXgibTMfTRys1GBh7q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwWwecs8mhWZGMkftJn7UrnuNk5N8hNeuEU4qPM5o2yMkUgeWfsKTz5gdfNcDJzVjvhCrwp6sBC7n4w5WBfWXmt",
  "key1": "577G44iPFMoFyVKQxw2h2prXuCwUatxw96mYGqK9raxEKCkM7VFoR3XVZPAFMGD43ZNj9wzUGgcdWmbEciwUfgsJ",
  "key2": "4x2AKQJ6m3BAJuKfjseN6EG683kBqVznwmh4vqxmJSCB2LhSqHZJxWWiB7qV4FoSphrCMmiqXKA8oqUF4rTRCbVL",
  "key3": "4aZ8SxzCPYBY8u9pBVmRt8xSu444E8NJuvexeyb3fss6Ri995gVCvr9MMRGUmLThZxS27TTY9MANNvZxVnhfjWeV",
  "key4": "3zdart3XGcC1yskxcC85q7PHYJ1uw2aSBQhGu2khPEjnr4j61mYzvAoftxxpjgn1tTcMrj1zMcnfsdxQFH4egFet",
  "key5": "4rjS5E3AeaYmSRY5atArZ5AwnjAnrAJo9rAL4rwLtu7SeB3vnxQ9UpQyWoP1bkD8W5EpWBBUGGg53w1YKjd5j4b7",
  "key6": "4hhBoMDEoUYucsBJecGmV3Ywbj1uW8KCBZxtottYtB3tpFkEG1XZjPrV5RGMqVybXvzGJ3SwKU4WyZftVetnCWZZ",
  "key7": "3ucpR25CdSnJGCJ2UBnxq4DQakhyPa1xp9cRFqJoEUZpdhvSckCUCGeXaFqNyPV5P1bb4CiAsxbiSJqZd8NygTaW",
  "key8": "4q4rK7yKa8CCoWXaByVKKDonJVkKyaRq48WP9YyC1pSWt5ne35pCpUtp4f3u5sFYeajuXW1gQsNs9a5YM9oihonk",
  "key9": "598mKWU6EiEq7oTCDSKnojDPgyY4b4jPUcaeAEFZB58mfGmNgHEGrtpAoN8FwAjjFGmAao8aPJXgZdrVxE74jT8Y",
  "key10": "4BJ47i7iJHK7xp9GJVLQRD9tgRQGPE6o8UPSLhwYm3B5iBCn4WrqfLggHALbJTcdwmMi8vaXJZ44LqFgDgkYejBx",
  "key11": "3GzwuS8Pqhcdp6U7vykoB33Pav3VXLRYuvZU6czPndPfsZo4WHE6jBe7wC7X1Yi1g7gVuT7ZASk3ketCxviqg9us",
  "key12": "2Pj7ZGJUT8tBa6U7Gmg3jqAEkWwm4xbkFju6ASMsU61UwxHTNmo4Rox8fFrvmdS8fVxiuyQCKcJgPedbHcbATfEu",
  "key13": "3Q7wLxNKktCtkm2tEaCmqCJzmBJmvGZVfscVv7vSjLTBNaECWHTCb1QHBxszi3aePNpiLuaAEvkagNCxMTUmKyyU",
  "key14": "67qtWBZyZk9QdygxzD6ideaGkoNET71oTNd4gt44phN9vpSx2iW9r1bZ9wavw9bicoPTJogRWFFHrCSUzHWw3ykp",
  "key15": "2TjMdGdavJhregK8YdDAmoaA6PaaJpQmzxM5cvY52Muopz3aR9G5zD2HSzrigusEopUJethJjHuzYbFCD4V3JyHN",
  "key16": "5CzVe2jw1cMoRt9XukKyqUBFWmCbhMkX9j7sE6oFoiS6TrPqriGrwTD5Mg8VEkV31ivfeLkq2svDmSoznnoBGDG",
  "key17": "vwogcx6bAK3bhaCUuLCML1u73swzti5qR1UrCj1YvjpNoTUH5ngrNwWtztY2iAxhyWt5Xdks7bHBMqgbH9YWBrK",
  "key18": "58N5W72eWSitApnXo6Dvu68VSnSxBXLwSbdvrf1DwcHu7mgs9T6C8N9gvWuTAN6WLBT4XJxQrcCMzgrdpQ6fAL7B",
  "key19": "vKUoUKYqLHG8ZsGnwb8cv8x9aNzk4h1nYsgZ5mnpgEPXPb4JsogySXhhaZ2fP34Kcdk49ha1VMuWdfDHWMy5eeV",
  "key20": "zQVk2bRpMpEMadtrZKxNLaP7UAhNcMKjNZBwJ54kBrzUxF3qu7ofNZkWWcHQvG6MD7VoeyFPDLngSBzBjHuP3KT",
  "key21": "BTtSAVyYbY2YExzfyJXt9UxLTrtTRpoRV8DN2jMRgoLHVYQmSqPjrQqji1FLbV6VB7Gw7sivrQbRHEJjKECJGqZ",
  "key22": "5DoDk1pGvER9BYK5znuQVFLxTx3M4J1N6Bb2jjVSN3rwEK5X3tcPSDguREhWTz6n5y3PP6amCx2oJ3BqcW5JraDq",
  "key23": "3Xd561SA68TKUaDHGqGFuHzmHsjpkPgtbVLuUN8GBwzBrLGA12NmYdMEShWC6YEJRWWnyQ4Sxjhyg6JYAtnLCPRU",
  "key24": "3VpzM4hA2AJdFoM4dQfr9vf4CFUsdADXwpopP9bUbrXtrZWx7rSLU1jskoQQhHngSnaTsbWXgAMxGpqE2GhcFWtt",
  "key25": "5wwokM1ncjphiDSVCQLGFpt7rKz7cS51TV3RPXN4xd1EaCSFV9gPBGKaNbyHyqkTWKdpeVcqo1JzZThx8fmceLTT",
  "key26": "2DL2mPKR9ELuykvh53AdXz3XDzNg3tfyN4tRbEENeawmH7Q4obLPDmkLiHTSUTgUU8JARexYUX8weEMMiGgu9eFQ",
  "key27": "31AioVWkwHwMUBZdTyr7ATybW84xs3X48nZ4WFLJ2ZNcbwe8QhJ1gbMko2uAtvh1sM19qkXzLZ6v11gcR1JoFRvV",
  "key28": "ew4fNZ1iGhavi9zmyR4f7BPkzForzNG3tJmmGpxyGvb9FzYLoX2e8UBTz1ch6UANXMEQ1vVxscovKoSSkJUwqa2",
  "key29": "62ELz3xpbrB6phApZdhN67gTZu9ddcCrENEuSwYd5WQcEsZdQfreShzeayWmaHC9nyoXb8PFXANray86p7tE9dZM",
  "key30": "37sfpym4PbuWVAGq2HmC1oCkLR1raLuWjhKk6zD9rhEofRNewqzdwPhoY3ZCyrgP46QCo3gjkUir3jdAeKg9EP5w",
  "key31": "MLMV76As5EMNtP1ZP1DbG2sA6SJU1bPmucNPHaqEEx52yBYWyjpc85RpTVUzZL7s6LRv13TFjoHz4YoSjDsUYMP",
  "key32": "2bzK9U4SQYaBFHjvt9vqx1GduPpWr8xRFs882SpxjEbroG5wnwKjJ5uPAva6UiPVjoXX85831VDhLmcqT4tzMHKm",
  "key33": "22g3Vo9HdHC2rgj7vhR2WVeJzEryUvLRdxSUZdV5VmsEUDU3izRifXvKSiTNQyFJ4oCKT5RMnsmmrEChGw5Zpmkt"
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
