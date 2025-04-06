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
    "z2T5STxEY9Ma9KB5EQSHoHT4Sf853hWZHpWsbnNejSqH8PJue6CiPVbh8dKLPxpQmXeiQSKQfRJBMn4s6icCvei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2fJHDf7MDPKCZ5FoL3RozXRSrYi3p4fUAb9Rz3zUsLjec3FBHnMy7DZXw6Py3gVTdC4JPWvSgJSynQCCb1PAyo",
  "key1": "BaY9A1tbP55q8yaafqdXwc95XXxbGFujUDUHkjZgUagfqvVieBedqWLE54RGqFqnsN2J7wDi3hKHdXYd8Pm89yE",
  "key2": "T8K57roLNWc65WcVhd39Cvp64AbiLLpdv8XmDxxsiad3QXJm5zkRHkQGvmYkxj5hBGv7cWnxkcA4cYu3mNEHxHW",
  "key3": "5kTuRFcmPmx9UoCWvbRwWHofZi7TD29G1crHDB8dbajMcV7BkK8BrCmo5U4Y1GnqtVWqbhDEDzyXWFm9XddysSPQ",
  "key4": "3N9SbSErWcdhkLMbSr7rbhVL8hAcKsWnN59iHPF9rw1wjmnq4RABL62YCx3qMDSBkzRoNj7oQvyDpyYaeF9dmm1g",
  "key5": "2jkNrvB1cVdwYt95VkVmy9Pzny4vBq6g29JHo9Six4RWaDQJSjBSBHN9GDfHkYuUXiagenUk2VyR3Y8wHQmJ2iHN",
  "key6": "284Z9jZHd8hyMKaMGQPidQsRBNZQ5AE7wpcqt3zz6ACEHjKxYDWE7GpWcseFDYGr8NxikDpCrYikmDJixEnQZzZ4",
  "key7": "fshbZykvZUzAxZYjTmYcCMMTS2JFyyf2phscc7VLHPvtL5yaKLewQ89KwANDswV5UxhFtYXWr7AnZSXFaTytNWj",
  "key8": "5EExp31hf7CKTekXcqZHsL12ndTxBa1dLHqUbf2QGoz6CwjDprkW23aKcBbZw4tJ3AfuRPcyohCqWU4vqRssjnk3",
  "key9": "2XDGShPvXtRWNQqAvSipyTNqnrw2GWCnntpMZtaHepMEWUg5Xe9t758zzKBdHhHT2PsdbGLZZ7UAo1SV2MJdjN4Z",
  "key10": "i9MXkFHCnS1n7tQEu6EmCdtAvap1oBScCZpNJ8eXik8QqwLTECzto6qrE8ydpKyzgRPYe1sm5gAksTjduFgbTTj",
  "key11": "5C1pQw2T6BA95joz4XEvSbiCBuJu6jPaMEnXvM6mG8z61Y4N9fYKBJ4JbYFTcryaiuj9s2LxGEfkDzWw9Gy3GquP",
  "key12": "2DW3ttTiQRhLbazQwCNndfaXf1ix3EMapoyRjn18u5JFk7QtwmCpSbAqeTFuvwr1kS3tBfen61hHWjbMh223hChV",
  "key13": "4QPjSPBJJ6GsvJoThcfd37Me7tKD11FtB3ra1MkYHckS2NQ5yuhAM8TcXS3kPJwVJvfzhSmuLqCqCHcbbpjzUWN1",
  "key14": "5PtkJ8geiQpTdTitfXXyczgAPyZucDyta5SxBvU9LwVkAo3WXZNsds8oJevszoCMCeEM8bxbSZNJ9waHmtKrbr5G",
  "key15": "AougT6kuxLvJZ5Zp2DaknW71nedxDXceQ6v3yVh1EtfMw1NP1V1xixXNmJfoPAfNdhWH1ZgH3xDvK5GuuXB9KeV",
  "key16": "4PXQuy8qPexAp7RdDnPT8wFfPewV4bf7LL8ziCRRn7DVcJYBvgs6wh51aVWut4Zd6NNgfTbKeVydZUxzjJyWmzRc",
  "key17": "22jtUmdQ26dzCvPeWUKryJAicHsU8Eai68ioZrGSc8C9VZSGuE3BZ6N7qozbpvBZpY3bxvU4pbB4Qjns32RN3DbS",
  "key18": "2wy926wuXXPUkVK6THhGybRHECNJbBYmEikexSVpVo9cUirLGwq5Hu8XosEupo5qhQ5YNBK4TZ6hdHN5GyFUiAoo",
  "key19": "4TWGJJeKn638C8kSHJDPNEvpDxV2TEu22DTMkD7hmi78mFk8QfbCiuUDHQ5iYBQ9NypEofNpLxj8Gq6rWo91AEHz",
  "key20": "3YTtV89syNLE2Y2hvWD9DhwDHvcFfECZeCSn4DBQUvkb4omwjxksXvPDBMEk2htvwfGYV7NHbBwbPCSGHrvWPsdM",
  "key21": "2gmKDXnogMRF3dCutwQ2dPuH7h3563jmcNGNz7FaLMi45UvTADYsZxtF4Vt4LRxGJUr9TTvBcniQAVKcrmovp6mK",
  "key22": "5UreDrfHbEubCeDp4KEMMNxSrCECa6EmZ69Q2fiRqjoQdudXMriTZmwNiChXD1pJppQTBmdmFeXyD8XdTwvsYazB",
  "key23": "oM1nAmkG4Kedo85PWtaHta1VVriZTadNyqosMuw82bxFYZ4Qe4Br5v2XLTiH1vUTdNQFdFpDZgeZVBfeCZzPyEg",
  "key24": "2Rd9PCaHzSASLhFBFXNWT1HGFStnukGAEW3oTtZXxRNYhDcxnx6hXAtmqMwhJxgXZJDJByBhPuGMmP4gjQinkb3C",
  "key25": "3Tp4JKe2b5ggbV4qeTgKLDwutZYiwgZUJ4cnGtYW5JDM9Z5uiQmzFTmPEgdyRydZARtg4vnhj4ktHv3xpdGoDRqL",
  "key26": "57F5MkZqqbmSEb1eLEbWgUUx8c7ZzUCu54uHWgbC899ysRvR8kAkim8uxXDHJzgrXuoLLdJhNk2vMD9g2Mc9b7Qm",
  "key27": "4fNhTD1RecCT7Xe74FiKvRrrPtVzZb5fQgD35NAweHWprZ2Avbd4rfVod233AXMvjPx8QMBavjUC3eKHaqDY1xso",
  "key28": "P1URrMLqRDxk8Q1Qnm2Nfi7hV1FGyfzmcJSiA5FBpWPjW4j1LohhiAmQcYiL6C8cKTcJJ6dkFQvTjWPdajs2nzU",
  "key29": "5UMeB56nwfi7rfscaSTV58cThjePk8L4DUE4o4mTMh4Jzxa2si9oYnxy135ddcU67D7DBRJr7tQn6qJ18oynV3NP"
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
