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
    "5Q6mWqbqBKaMhJ4rypmV3M5fCMAv5Q6pBbB7kSqCw85c5BNjFmJyHbTuVHhcujNztMksgUc5iFhybk62K86jA6fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ajpk8WM4xHdg8Lwv6AAPWmdVb18bTcuvtCKZf5auP9281e92XijqEGfLRF3XzpijP7XvjDZECy3dbAnpwFFjLN",
  "key1": "3RZZoBoJa6Jb3zDBW4ZC3jf55x2EjkAttjXX311MJVRa5D6vzz19FXtbpx8z41omqERFhGM2uRUPH31MrT1WJ6wo",
  "key2": "54USCtikNgcRMbXCzbxSmYdy4KHjvUPMY1D44dDZyBF64nMeHYaA8RtZLNaDfDXrW2WDxy5AWTJFSreB96j2FVQ3",
  "key3": "2mAEU9Dmdn5x52vXJoWEES9sDXuwhy5FtVUK8vfrQdekqEQRtbnMCTPq6oXtWdnU4voxBvdpdXRPyPqUXfsAQWut",
  "key4": "PdW1UYfDpo4bo1z8pMhRbSwnMEWzVLJjaPtd7sYw9Mngec2ivfKW8MKHeHSibvp9iYzoMcaov1LTBAsUwqnMFK9",
  "key5": "uLN4YrwRZdr9phCwWmLu5JrTi9kgA9S6drwQaeC5afDkyXCyfPTZbv9b52GJaorFGVJaELKCk4o647i5PUXxcvd",
  "key6": "4ZTpaXoJLsYjr5BZvjnLvzTukz2ugQpr5h2zrZjzWpb2nYE1Lt9zpp951FVx5qEGwtxdtVjHZwF9DZa44FEe8XAa",
  "key7": "5iA7wUkpUG5e24EFgrqEUvvKn9DFK7kZuFrSABdZ2cgDFX16Jgw31fdTVKdSQXXh7wJETrqm299o3vrGdYKdNCTM",
  "key8": "53xrz4XohwErdufQ67Cessae1cxDL7sNbuTVAPf9e5gkXNNizxMari3xd665vkNf6Bp2cGiEvJDdhcbTVZzJ5TMi",
  "key9": "4fqhAzLD7ehBdjfKP7ouMmmUjKDYvuLMbkSa4eUsMVcX8aiZ4PqNDzdhBXjL1C4jjnVTr1CvohhCHGqQKaTgu4BD",
  "key10": "5RTcVcJ6dkCG5eBcq5qELupbqpwXWZPQAJ92UzKzY55UazpVjfamQz2hdPrrYXQDnsy6ScZcXjwHovRkCEEpHoky",
  "key11": "2e5hjdpYmzeSsNy5ZnTzzf97BMs89fYq5TDrFj5jnKJvJKN9q3U4Z7ypTh8cceyu1VpGJgmfLSmTBDHRrFQr4UXF",
  "key12": "4r8DeoYBsqAHHpfgkvJ86D8fJmnxMcw6y46KePZ39XeTzRDTw8cy2EmT3cuKAevuZKYvRWXCKRK5RFo4GFsimCKP",
  "key13": "2Vu4o7kkED9yQhPthyZ1HpZ2SXF7vqcxHSo9R7c1FdHcMpi34S7kZaWjox8ZTT1NytjAZydtt8jWyqv7vm4U3Hyu",
  "key14": "2uAjdEBkpwuh4iGEMydtnCYAtMxfKhw8WN955EiyDkFUWiYNnbZhtirAfe1dwvccZ7S4WRrrYwfsistTDg4wcyfw",
  "key15": "37gZcDreDR8VAbTwWksEbA7RkuV6Rp2sKSEcY8u5pdpt5PQSZEnLBwigS6og8EuVJABFZxjQYn9cRY75d2DdTfCh",
  "key16": "5SFZFBDJGtATzrUyLSpX49BXpRy53N4zs5N2nqVBPZiiQoz5jN31nZkzW9tTfVSnvFTrA5KQV58cHHTeiZ3A1cBU",
  "key17": "57hAXm5jYbxsrc1mefyzE2HtLLsk5oeXDsHKfoRSi739xQz7DcgCQj6fNxbJzeb9FCwcT7eT8qfvHyUJ7vBvVDre",
  "key18": "5mavTWwT2oQJPXndCC6Mvqf4gGiviYVM4qy7dMdvwGaSmY7qvMAYcQcibeW5RERTMSeYTCdcKjT34wxSE9bJSaHk",
  "key19": "45kuSfQRb7RBrENqkSWmgfmbcqkSURDVtRh4TfhkmngnsmUDshgAgi8cNwkHjUsKUhXRQzy7N5T9kugE9CPkKZ81",
  "key20": "3G7sPvQvKRrnSQD9RRpz913JcfkuyaLeanqNDV82Vo8v65MA6yf4taWQxkh6wS16eVhomG2dh94ztqgshgAkhCMW",
  "key21": "5vpabU6vj3WH989DPX3VMXW5LYhGCx82jsEc2udNeLAWiyDzyjsXhNDrZrEJozrvW6ZXSES1H2QLtDfWZkHGvcPk",
  "key22": "R5qwKy4iRMzwfzjQjFFe5ZMY5bwko3sa6EAHCUTVsXx1NDhnswFq5nceyjzrjgeU77xQUfiCSsCSHn6kduAUyD4",
  "key23": "3yKQptSmXiuJ1fq9gHk7fTNRVcV4pZWfgmKvthB1fWNiiRSG7YKWbxuRQofSKZRfKAki5w3ra1xVR6ZoaoLYtufC",
  "key24": "4Y2BfoXqtBKT4Ujvc217ABZBxAsRfNWSWN9ix9aZsr1tnv6VwtzGNktmecdnULQLTYfqbGgXKgLTz5T3FKwneorP",
  "key25": "hvGoCSWbfFaDMgpjFJBFX9oAx5tym3U1Vet6P4ZuZxtwyL1v4PdQUvupqNnWBi9UgALXKGLc3n4HsqHeqwHHnWc",
  "key26": "3L8fhfxpXi7BPboJsVG94cBreesFrMkhXUGKJUfwDX4MaAyqkLLeFj3KPmzrUaNDp8VDQBSMqY2Xzs3P2Y7F2uTD",
  "key27": "p6cPwY6TGzL9qV2Cd2PxFB7EkE68DKPpMPq29YnfcMCZr3BLc3TeePWsNvzEEewj8x74B5Kx7cJbZXK3pczNGmC",
  "key28": "39TwbUcg6sLTQGQcTXb1jakML2ScnMC3s1YZi2H8RGF7Mr3V7om4dVBJ4XntNKN8MmKcyKV8hqfreSubdYgjsWpb",
  "key29": "5zEGx3L6wMFwq8cSY5pEr8PcrPyqZL437HURq5P47oH4nt5Mk3xtywYWiaT91X4Rs6Fnpu8hJzuiWhzXiTtqXihi",
  "key30": "2K3GMjhy6triypxWxzxa54abe9a7JcFs5mHoZvC4cH5Qv8UrqEqMw7vZFyYrDnzx6SySxwK48RQJFS2obNYWoidC"
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
