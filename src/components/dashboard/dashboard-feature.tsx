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
    "3PNarpRWy9ozvqMw8cSufvJW2iSz2P8Gurj1J6tGVemeVtKHR4eo4P7eJWJKRXUf72DinFAzXjtNhiJpEXw5QE6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWQQByDf5RkdetoMJKDwXL2K7GEWGe8DzURZpnvndy38R9fNqeJkcDYsjDqWCZofkLoax4mQ4uMoD6pLrTyZewZ",
  "key1": "3nj8ZZeWgQHiFgrSU1dvtXTKxByg255TVGUZjiLUb65fKhUjgSz9Tf73cF7zJCvpXc9ySx1cqXg8C4xVnBYm5srJ",
  "key2": "2C9eZP1wmQdBzYbSWjPLXvF7UTi9ovStpQ4mDB1GuDFo6MxZTemavLAyJxcYHuZWMeWZs651EZEPR2hg7xrQRQ2U",
  "key3": "4FBPDi1bH9bgszZuK2uF1eLGzyS8sFkNBup78qvKx37jVBKch8FYfjheXweDuQZ3QgtxjCk8t7HRfdCdM3XUGKqR",
  "key4": "xriUBNimAy7PqL4pJR8z9LMEnj9umcBvU5MrDLwV3JaE5rmdTL6UgW4L6FBiKRn1fDbixxrkUFh6r7SWisQ9sKV",
  "key5": "HZaJ53szFiCknASzZFUEni4iWNVM5V9Uv3MHcQDmtZR5myfW4R1e1ZHuEySTCP8dxPrJ4QGLTuUBWfEGzzB8zWV",
  "key6": "ZembvmPU6RLi8JK2byYToWzdBGFjVEu2biwVvinnJRteseFj2VhA9ux8JJmhDCGP1268s8Non4RhFQk88SfUyzq",
  "key7": "38PvnfE9dETiTQG916erETcn6zQDixkYQqv6jJCRnchonmXVSua6qag49TNLxcUzG79fDSh8WFRiyLKENwKCBj8j",
  "key8": "3JEriWCGeProuoJGEPCuDqvfHBW7nP9BcP8Puikv9B4Up5vaBXWFWPjNVGjcvcrSLHBm74UdHjwNgyYfrpyHUQQA",
  "key9": "39rQViDSBq99cKf3QPpp46uBc3TyPy43upNSNUqUKZVv3beGsZUn5CzeyzWvqVfmpkp9Qan1saXb6nyPoak2rqNX",
  "key10": "4NXxVteeg9dN9pygcG7YP5JC3Bnmn9RU2MwNFYRahSowMvLvEi95LZNodNHBGF4JaveYpc8bamw1AhSQoiStJF6C",
  "key11": "45ZwK1JXn3A1UyNs6DpXu7TodnNbrE7wYw3P1AquJbCyzCGjVRJAtKd7cKfHiLEjDUEjzibaXmDnQB66YBSE5fFp",
  "key12": "5oBDGymG51pRrZJ5sPjVExN5VFsJ1benrmXCV6spoe7yNFQXhxw132yM3ZyYHtwmv2morc23zuYecthWjPctc53n",
  "key13": "4sKu4RFWaYgn79LN15uaYAk1UKuCLNFS1xpDkiq5sRr7WbAo7AY9Tc6YGUXtZxw6N9qKGXjfyFupwmD84poDgTjG",
  "key14": "4z9TBR1KD7URo6WR2ZQhqGoGCZ9wDhPA2sAo7w5vzaiA4CdmGEnKxyrJjAhcCcXhNV81Yyg2oJaqrokhcPsdQuJP",
  "key15": "4PEfQJtBBY6NTBKsie1td6esZ93BV79NzddT9ajmSVqh5s9XWMy3UNgshsow1jppjaQVkTwyrxbDExRz94jhjm3u",
  "key16": "22BF2jvJWLW3Yn71vSmDeE1GGuaJwUEo49ocXGhcaq3NdHVE2cht5QetjzMtLKQZ9d5A48atSAbMBdjzX6LkToBG",
  "key17": "5AksmqKvMLedNfScWbcRGnthhbxenmWqdqQMpywvAcEkRDqpetrWw7fPuLsiAv8437nXUEFe8VypV1A1hf8qyLxR",
  "key18": "2NK85jyb3QbokJFkkRFpHknBQ6y317wcX1dD6e4553WazZoxgVRGXJwLEV5CoS5XwwNc7QtTyjUxz19f8CyvrCXZ",
  "key19": "41cxHwbhER1nF6oZMYpJCdHi9iwqFRBh1ep8wJVz6wurEpuWNXUoFM96B68vss6RRx3s2bT7n5VWDKKRkw1jwmQA",
  "key20": "4eDNmYKY11Cp9nbQcxPe6HgwRCaTUkKj6sHRMwVGPN6F9Qs5P2969WEQJKZ72t9XJkAXrJxJJTWzddwSVPxAtbZH",
  "key21": "61oTeaTbweRqAhSP6znEam92cCYTZSumwQ2PDzayemnY3moQvC8urGTKMDmJEu6DPpTUPeuc4noNnJjGRJm8GRbN",
  "key22": "4wDmZmqZQnepKwsUkm13nw8zuX9cyBKh5rcNnXCph1v9stQF2o6NBzCpHLqMTQ2hUHoobeLpFmHnPMvSBNA1vNC9",
  "key23": "4RT9gDximK5KC8qXGCLHvpKXpbVXDhdWw8PYjn8SKviHc7AY4gN4KEwQHC9apHEbj7u5zGJj2RqmEL9Py2Rg7nL8",
  "key24": "5NwEdJeE4qW8spyrP1LjkxDHV8pCBCfpQCqbDtXuDkuqfYxvSXvSc2fizu2ymKsU2QfHFuPQzKSbsMhYbRXTXShh",
  "key25": "2h4R53DLPdsz3KJbgLXHZHnskPoJ5xfXpWaDLD9hG6mKYcvjxxTBGGcyxjCZFYd1opMm14MYbsmGoF6KZmXjAGhd",
  "key26": "5955Lw2wsfUtdDgGaVjNZZ1TXUe1tq286kJvrL2LUyzGEFy7hLVAYQoUc32zHjuXp11eqcd7AuoEw4ut1Kw2s8ZR",
  "key27": "4kE6bFaFEFNyjG9G8DHMXvQxX6aKGYoMxeA1noaXxzQKYxCzMnsMwHBqWFNDV4yDtJDCHXq9nzJSG9UFU1e9qfMN",
  "key28": "DusWnjMfwm5H361DS6VqF8sCTQywxfYUJx472XRmjw4aUywaTeZwW7od3ci5j1BTgCm7B9pkKCEzE6C4ZjDvdYs",
  "key29": "3cpxpPAWWtuMBsCR1jDuevDH2ednHVnkQfwVjW7T6kSGQCEGuCavK9RoHo5HxfzERjLr1d3oXnK9jtRHx5HSeGZT"
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
