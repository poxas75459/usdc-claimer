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
    "5avMGB6HCtaW1wbCa5JUTwo922bKVzXUHceuggdUgTyWPEzWaT9YdCCiYwL1nZVySRDMFzsVqMDcgVHc3htkMFRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gbERoqPwrYv5rDdyL77f3t3VzwAukNT47sG6e3dGnh3xsuEg5qBq49sqyfm83RwC66R2uQs7PC15oheTkQnPc7j",
  "key1": "3vHYPrm8nPrVUkKmDksSCUACjnVWzrPnfWkuhpXfmBLcHve8YEVfkN5P8NHoMB2SgNkfLKtkwCZNneGQLsXR24Mn",
  "key2": "6TyfQxW81ZvpuycKLZH2Tz9n1qfiX6vCJJVP6MLEmQodcLAn9DnskAC4gUgWUcqPQmGdakj98vT5oWqFfntx1C3",
  "key3": "2HjrhakWX4k7bukvMmHBCDYBHCStYLAxpQE8SyDLkhi7ik2D7KrmfgpDjzEw8iDJHT5Vw5BxDa8PWcVjUQz7cuhC",
  "key4": "2pGN92Gdar48kdwgi6iFwWc3wL7GSeEMqzSsLWrLAzPjuKXqVbJ2KDvhtui9efqs3MxBWfUZ9RopnEyYp5Bog1hj",
  "key5": "2ZW2f1r9UukhP8UzgpbECTPN5uoke43HmtgoBDqZa39hNeYTW3gQzheMBEzjWmcS47Cx6XhLwV8nZegq66aCZwR3",
  "key6": "3uqPXucKvd4M2fLbb5pFdjWqhsyJubXxK2PmpsVzQNbuw4skPqzWN8P1Kc9mYLbcQgrLdKbPq2LXnq3QfXPf4ztL",
  "key7": "5nxeuCNMuUSFRtj4ssTrTgWi9qCNnLMxDTMu5PedZEUBuz6vJwBoSAhgENPoybMH4fRpMiFGB6DiTivocokrV3yh",
  "key8": "31LgiA1H3dyNSJvxpkhqEsbYgz6Xot9DpPm61v1W9siy4hRRkg6CiBTiqBuCFg9GR5YrVgnsPKhNaTXwqTN3kpNS",
  "key9": "2g9LHjH59zMPXVZ6vJ5zQdbsiF4RTgqrUzpqfTbbrGU13aJ9WX1UZ1XJpNq8WYuyt9EFVjEt8jmPU4HFr8ACdyUV",
  "key10": "3ViMRtCVWrFn5paUc28eD6rujSx2ntMqe4Sr689J7mhWnP5XqcReE6Jnp2twWnvv3m8Y3a92d5zZ3VPVbkMrWmGG",
  "key11": "2kuHkFKyXc5rdUqDQRCagSDnmZuusgzN9uxxNz4kw963uoaU5zeZUURXoTnCiRtJRJwU7xxwDJpXZNi4dycwM8eC",
  "key12": "4SPmgjHX4rH7GMSRAUejkp2uufJzG6NzH3A74Ci6XeHmsvzN27FznjPASm72YsU96sdd3mmAVGuWC7mj25wGGQyf",
  "key13": "3v7Syjht2FZJW8xJnS1uNGRyKFvSP9fN49UgfxgtQpVRNWFx9DcRibpMyEGfkP6dT3RKMPxHNdhaNbhbsh1Ai2Td",
  "key14": "q1rEFwDDJ9u8tihcqowHmksNhqLrhemQc15akEJnbsoa6NT7PUvfDVb1SFrbpGq5zP6ASEXKsFVDjHhQpDqYWwe",
  "key15": "3abs1n6vN2zT5CQWiRB4hSr4ZrMYRf1XAN5fAiugV4oSvVYwpgmn6LDCrQJgLUbgjnaL1BxDCxN4jVj7tBdzJxNx",
  "key16": "94WXkx1frPdj4NEBeyPRmGocqadj3gH6TFV4Lfyzn3EBphp7gy4bHbARFuSY8uR4KXnZEGFwPhr1Bn3XHBgmvmC",
  "key17": "3GHYvFFowxrb34R8bZR979CYmdpAN2w6LcHwUvnHW3dUogbMDHf7GvaE93tTy5crYbwb3Tm9JLYTFfdh85kNz64g",
  "key18": "5SDPh26iMmwKfTR5RZxKihzAPVvTrntphvBCP3dy1QCnFmzLPfeR8Ktyz77KzbCT6G6GMDVTW9U4C3Fxgk2yrHie",
  "key19": "23q9UrJwuxFdWTx4nU4zjMiwBVwEorp8K9wwr3DQvSVTt5EbyEciuzvWYE3ti5HccZZksmSneVxsXhdh3uMjkfY2",
  "key20": "2FW7cf59zHKaawjL8dU3khmbzq1uMQ8oRg8TXVvTMwN4RuUTFoqgA7AbDiupm4maoMWWua4E4r75e8aZtpWSGpth",
  "key21": "9VLCveC9ZCHNc3YgeuGwCCMp5UFXm2WaSDo8ruwcDEAFg9ByomnuYKz642N4Fgk2daaVCzHDAGtNwd5rLndHGmW",
  "key22": "t3Tc6kbRqhEBCEimtvV1EXaPTDTSYQPAtsMuTqBDvNqQKYDySyNQUj3L8YezRjhvKtEQcvdRtJEq9n6uxYfUDmz",
  "key23": "3HuF8iHUYpmWePTzs7PTUAeuwaJuQSnYpszWtkubjVhu4C5Kw7LA9CogMR712UfgZaeEqoLW8NN59a7Vez4pADQ2",
  "key24": "3HaqxYygieT7iEoQKEFe7payUFj8J5xiZ3c8QsFJc697mConaXGkHmSuci6Jskqr7dt34kb83st5yaDFoW8NEgWw",
  "key25": "5dGYFzJzWVZxcZXqFLnd7VLLKgDtfBAuqtTfZYad817wLkAUEmd35ysjJvn88d8DBihoLddbgDxtnnqqUGD441CJ",
  "key26": "5CuGpCWwJxab5SY3hdzMP5h3tmTt7NbiEDLGckN7fizDkoA9vBDYGoh8ChbMMXwkMHPAdPXFXEr3mPrVah5HDGoz",
  "key27": "2cUfQWLufhPJMpvxXnNKnbXX4Gh22MnBb7PJQec1rL2UwrbY5TXCRa4Uf3SZXTbqZ9iP28zZkzKtTGSPMC8RYXYd",
  "key28": "3KLUmY8nWi3xBuZzWMTksTtRePW8NYkfWXkmksh19fCVWTQiSAg3HL98ucy6S9afwtT13sCXwvLWikZNqbhwXKV",
  "key29": "4xVXSbtksPp45exJeJxpoc2iRzH7Qfw8Bm3nYWVxCq3o5s7LrbGtfeQFNQ44akE2niLs6SjdYMUFo9yQhN3Dr1YE",
  "key30": "4kyixq4Neo9WJhHJcjgkDRGiv58dnfz5vS1BnDuZ7dP4kdi9zHfdFMv1GJ6RJbRv3khvBhuQSHnND7RCD7Wg7zcM",
  "key31": "4WeuE3zn7jiyvxLrsAfXm6AevF313NH2hibyy92Pn7H8cAzHxrEbANXkwxwAZcmERzkTG7spuRbtPcrTKir7Qg9F",
  "key32": "DF4XcVkmTFScxtfeDTYFfEVR8GtYg59XxHLNhzQsgutvzMgF4aYn5LUZpXLdT9f7cf6CSRSx2yoMrZSZLbdwaBi"
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
