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
    "5v8qioqbbdTvqNaWrA6eXr2AKqwdF43SLbxsYM23kceE37dmFJoBUKcoCknnXumVzZTPQks3HavNF9wsFRS6WiHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aopE5GSPPdW8XnQPVQaQis69RxwZUzrFPfZrzHjWbpozj8bYJjhFx8RiYjDtm5sTjgctY1oM4E6qrQn1k1GHnjQ",
  "key1": "2eugPiNBYXD2mwKnK15b8f359BGEwLfuLDUzWsmBPAYS5npr9mSLmJjes3eBKAsbDHzNZB1xKg8z3mBQp4PKqKco",
  "key2": "4RWUECZpXNp7nFEhaeATHBYkoKnKawEWQhW93LuHxZ9Fs6mYUKmcgNDCc6sbKFasGWZB8buGWE8HXJpgaZoNjEsB",
  "key3": "22Uq8MXXHP8AeCxHvptudsHSeWD8xiZFVtZMpwprVMQFvrFZpj1aBCndGH3raG5may27AvxjFe3zBU7CsgTF7tpC",
  "key4": "2qVNZB8j6KNuwe5ia1MvT5TsoVsnEn71Dv5USaJX113fMEQumFe7nrGsXTgbWhYkcTvwXTczNoeEkcJesbjukr2L",
  "key5": "2ogXeNK7eVkv4fiBEoWDXswMRr8gJ7zLahxQGgnuYf68TnhL6LzdFWLe8w7UWaSmnFVoGVCbvY92E5k4wSQBG6vr",
  "key6": "2ZsDrJBx9cq8PynNUTuoA5gpPMVDqLMNc7ojvbcrgCNGRgEVipW19Bq8sgxr69zvhknqdRpy9N2TVkcMxGLJ5Efn",
  "key7": "51gwWwCybLBi4oQ9BUQ4S38Kd5Azhw7nc4ww1Wa3Zj5LorDmNf6VnoR2s9HTF5VKmbuFEVNC6KShAnjEYeZ5MLzQ",
  "key8": "4QmwqT6MQtFmdhsGKidAPkc5TRYfzv2PuC5UtGaYrhSkAZo4aP6MdpX3DZf9kZmkXNb8njPSfAdgCYT2nc3Zbyjn",
  "key9": "3dcH63wtKETeXtDw8iHQRWz94vygodNcUcikBdRuqmRi7JX3PiWcwowjrn6GRydgyaQJoSR9Ck6XytLqaXeCfy7S",
  "key10": "4XJpzy6zYDC4Gg8bN9bL78UNHxJKEumgMXukLwAuGVqXbQwtJRdMD3DaG9MxYA41oRMnSrqrJMZYe27oqaeyZLxu",
  "key11": "5Mb8aQZgG1Uh7AzNZ6zi8CxkxXD8fCweEZLBbedz7fmjpzBEsyGmAk6NdhiprD42uDDkFqCiS9TFoHWjCY3CQwTD",
  "key12": "2h4XwaAwT7TU58qcBQRQAaoscLGyApPjEjv6TV5LARw9aH1CEmuNcbxUKNbtbma3WKZt3tHL5NxcJEYS55HzzwL3",
  "key13": "2ZEjpPKzfDfgSQpD7xmnwJQ8VkWGXMezRtJvesy2K42guve8iJZnYedTSo94BztPSFf8xHvxetZ4m9zNUJntNMFu",
  "key14": "4DisuubNeHbj9HXpcGvWzYduG7aKhXhJoRSvPoKspvYR3DEQVnCqxuffRULNK7P68sBYNMc3iKdFVVmgKqFrG6n4",
  "key15": "31yDDYNTvmxkxNqW9PKS32Zq92d8kYmKQpfqKwgCiAmnCt7hEDgC2MN6Ct4jNGZUerJJ47dQxqmfrtdb9c1rYKyG",
  "key16": "5awhAn8wWbLSxcYYPTzyjRbRWTG48zEf1KjW2Bdkh5w9n1NDVdRkc32CbreLEwJTAkZjXPbvmTRv6TiyQfLomNWE",
  "key17": "97sv77mokbMvCfeuNxte5ZE2q68y2Fbr8G8WD6xd94tH7AFDFVmW7j8jWxCphyh331HowQypvJi4nmhH9X5VKUQ",
  "key18": "5AphLUg35zErwDGjL3jwdVXvrTVWZmPQM4sVgn7Lrmv9emFmKHFfwqLsVwzuTjUjvwnkn1u5BPV8orSspCxufHkz",
  "key19": "31LSspeaJAZXM4afSzvXVTQ8RL4cs6y3XyRFFxRdEWxfzMcCGLQeURgcDNp5DU4m1UH7SbNapMDAAJCMbT1PpiUE",
  "key20": "5zbmmTTDA3GFtevbSgc5R4TZHb674XJyqXLCfyFRHuoKF5gpR7vRgaqobnxkmQbKozCVu5sykryBnDb2VBx7kqLj",
  "key21": "5VcVah7tARdexKGEdAaMtPGunFGhEPrNo6dVHcieKpFXnNj1p2HH77W2hK3bExCed97Vb9ie6UMQfeKhRPnRbuKZ",
  "key22": "24paXoBiUmSDgKM9jMZVnAX272wWg4iEDxoncu6en96K9nYM5XRtuSBkzSYu9hKEoQcbXfkkr4v4w5YodRKdiqLt",
  "key23": "4TaFomgArXSA1uvEcF9MdLkWrGPZwA5nYkeSHtCFDRWgMsvDns4puAooagGRGVYcjtHUdLds5fp733XbXUQqGorX",
  "key24": "3ao7iSe4itCbMQ75jEz8eNDJNZJna9htKCeeFvg9pf95srHnYUYiWSESkYdrBEP4NbFisLpcequZTgrjwsLU4LFD"
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
