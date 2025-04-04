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
    "26RfeLLcsXGkek8X34UbVf2iSCZ8jH9LRLR7beicTgi4Zd12jSkHtHfcn95FMK6PZY19sjd1ovhq3MKfGUqP54Jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPsoE2M4vZ6soVt57NpCtZpWQ4wTSzCzuwUfGwyXA3hS8f7EFZ6cisDDZ4ogob3qrHxepGumkby6jZsKMZunNZJ",
  "key1": "3w5g7PsXj1EPQytM5R2YRRwyeQ9ELMxkd1eTEjtiNjDcoXsrfyoz9GDsVdh8orR27oCMo8SrX5x9CudtLEki5jEH",
  "key2": "4AQjwAY2tSdKZDXw4E6eckGfjmxEVRdtGSzNBQ1RtaR5MCypX7b5RN5BNrCUrYFTcN4byGusszbE2RjUPksY5u8w",
  "key3": "2ATGx3pGUxdrnXDSpfFqz7bNj5VMYp9D4pcHJDhypG1MEDJ7ifZRAH5bVDLwDzgHS8gZ7XgCe249ZaPTtG72qCTE",
  "key4": "4eT4jAZ2weo6dyi3HKsoypzHRzq7fsEJUdVumMGgnuFFhBvrUL7rdH2A5a5okWbPyM6eyRHPnLVzEqwuizuyh86N",
  "key5": "5XPtKtckQW6Q8vLiaJkgexK3XW7m4LbQkBwbqwuFSJ4cdRxGDihqGa7dcRnSERb4hwhAV1DTdBymRgcLyrKzhYym",
  "key6": "5Mgwj3119n8GtyEC7LqHPijaniyF4ojpYuKQGWyqMJMbHhZduBYoArD9HFzENQePZZTacNnDGtZorH7VXHWFoitE",
  "key7": "5U9xePgr3VWBYRjPZXG1UbqGQiavV4PupajoFPyUVsB6P9737zvn6tABpvBxuuiVM3NQiCyUoooh1dSATJgrWMPy",
  "key8": "4omnctwW5uf6yKPDec1mesmtEAfcVBCfSi4c9agb5kRTwvJzdE7jp7KUA4G4VNWusNLR7JDCwiPGf5WtKGCLsUX4",
  "key9": "nMK6ks2JS1xgmioNMhLzvNYSFCGG9dCZvaLNH5Cy5uca2LmM69cr9zXUi67gks9WiAdgGPNgWUjSKJLfLe4tZHx",
  "key10": "4k2MH67LGETGkYZN7mww716unrT42gQ4gv8Ya82JnQiXeK4HMTcqE2L56yxijuedXdR1vvANbh3iPVrnPV4GeTYe",
  "key11": "3sznHtGCqN6PyVEirVbWANpPJGBsPh5Vv3hg9bjCVT1Kfx69amkmM5gC88gWcTkfUGifF1ZCvNuXep9rbHmuRk66",
  "key12": "2i4AEUFsUyth7dvbVWdyCRyY8PF6kJakoLfMRxaCriW3LKEEND6aKiMRt9Z8hz2ppRgmX9DA8teAgkqTkcJ9RQwX",
  "key13": "5yLYYVC8btgkSjbwrXZ8SSzpi6yFyLcV56RbJVmkqwMMkV5YiWyQr8rXbwm5mVfHRM6EJXzuqRbbbmvCqQLSMyXj",
  "key14": "FoeKmDPhKPUR5r5BWLs7uhn7vL6AgsaGRtFNgPxHbTD8NJ8BdvoKZCKJEoFPdWAMc5pMoK1u79e4L2D3UnA5y3L",
  "key15": "51KYJzM2Gs6mmLQFKpNrvZ84q2NViWiGLdrFZ8Vt5dtoA3o4q13EtCy5WwBUcyXgoq6W4xgugHhzx2FkEMA3grY8",
  "key16": "hHNoagVQMxABkdJDLkZyGnrKbfcTYNUphK4AMj8kqjaFYdMT4U7s51hq2JfhzVbpexJZrCqn5mUdYBKckzkzd9r",
  "key17": "3XJLbVPPUHP3J395nWoDrstq29aC1rEZKA7QxwjDoPon5R3jUBzf7eihkr1YnQHTgyWDzeGriThgqXrZuE5ceHt7",
  "key18": "5Rx9fEoRoNwMu8zdzDo2U1AFHfXVbr9CPBDDTfWTgJWiomNcSMs91M5uLpo6unMTpqCqgRmDSEjVHJCwzRwc9hBR",
  "key19": "5GFGiVk7gzWfv8qKpDQubwGLnCcerHHGhuPtmWEHjnbYWDqEF1XHUrnGZUE8x9XoUW5wzr3fWoTtpcHA71szSX8Q",
  "key20": "D5m6ro1z51BARVRYcMKPnVRBQujPZAQrKn5zHcSQWu9xEb9XL9fUcNBJrooW1qPzMLcvs2YYGtRvevLEPykSnNX",
  "key21": "5jMuiHtwL6TH2MMrStmJx5zk4cXTKCq3BtRJ7tR4nXQrZzZGDBaRr3ppUZ7em3GNuEhHEVExpGnz1DkpcY48QDX4",
  "key22": "U1e7qTsVoPqNsuoF1riMsAtTswYYaKUpdQkfEu2mA3dQ5NFBTv9h6K9yG2S8mN9VQsvsp8Y4zaNFt3JSkDpR6xP",
  "key23": "3ZfzSkVvKVmFCJCkFgunNuHr57c3H4HSC6cx9vC7Ai7AQc7Kv8EbWVurK57wmfXkbn7AeVzcP3rQexcensqNSgPb",
  "key24": "2EMyN8Smfuy5jWuGHJmA5XnJHMaX1WYXufyVi6V8nkbfuWtvmV7m6QEJvHqhAvz1EU8128ZhuMa4Tk6w2EnvC3s1",
  "key25": "5q6cftA4No811KgGJkzp9ez1rGR13mFHweSix4oiHCBsQsWocHsu5hTy9fV8foYPf46GWupCY4GD8u1NGevAy84o",
  "key26": "3XZH2gPGpqPR7CmB8BsYTKXzLzZmmuqFbowiRJQpVmLANHpEkRckXa8kHGXsHSNTisYnvEb9v9be5vFkdaJ3F9L4",
  "key27": "25PadMeAzH3HexsmQWdEQD31RXVHxxggs27gCZWUMu14QUfL2bErgxxVLsu6WTEuFZvba84hxmQHF8e6iqTZFCvj",
  "key28": "2BFdo5qn2WkoaRdJGv742wG1wZdRyZQgfhAbMFBYVv87BhqJUptvy2KxFFzRiE74gfLvUdWovJM68Dc7Xsh37AGq",
  "key29": "i4LwoJndcagjGLprKxniKXBRr6xufT5rwmvYhPnW4gKtachZw67L3Vb6Exynj4Gi1BkJCs4G4Foa823k5KoGWqP",
  "key30": "5mEqwJftANSw4xqnbH5NLdKBe1A3Bpi9Le9N8hVRNJoHfN6fM4mfKNL9tBNBQojCpS1nZXBCHCHMoW9zQB5231MR",
  "key31": "5RqHh7gayQYAoQtjpzxQzQxoF85pXzw98pPBkm448VAZDwTXNbeGw2FkLXV9Kvok3CXjQ5fZm9w5SBZNEyhDD9Z4"
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
