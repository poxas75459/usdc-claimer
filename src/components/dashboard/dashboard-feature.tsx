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
    "5vWwzQEivsi17SFMrf9famigVYt3h5U3aHc6ksrB85npHwyDtDeX4FWmbKi5Won69Z3xRqxXvsd5UpELBgnsYWgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRDgAVPu7BHX9FQKMoxMvYaafgHeWKnNBuCN2kNripQVGWWgXSoCrT4m3nThM2rYtRFAHCKZyHoM2MRy2QzjCwD",
  "key1": "482Km6pkHUpVNLt8bf2bF2a4hdFbYk3oBE4TVx2eQL8tmpmvmDuLjkjbgDKxwHjzhtcfjqSKC6RTWpkY9nm8hQSt",
  "key2": "w76EDA4Atxw2oFRZNDM9DsEuEW6cV86Cc4UaQqzLi5cMCb8Sqse5XwQP8dQYRZLrqscHhxpKQLtAjDeTzwBnkNk",
  "key3": "5AVQPqGZYLsGspRLQ6Cned3YA8gb7UDFAvSBAGb8AHM9x4rwq2FLxbujWLTbd8ikWijiSMaSuoFZFM4gsJyp94G2",
  "key4": "5RvHk4ugPzsLuzDAa65uEEXVwnJwz372QpDyNzCmAe9c7TV3oM7LAEDAi8GeEV8SkrugZYJmVbL5uBPUfxoBy7vJ",
  "key5": "3BKRyPFJEzRCiXx3vroLSvp1jJvPg2b4Uw6gHJkUAgHNvfojRFq11kV1NZeAQU8pKv8gfCbsvEkuZbZE9fVFJ8bX",
  "key6": "5KvTwayBtwr5qhEqjBtUGfhGs8Rv2jgapUgjjT6FxsF1tDvdAZYg8LYXV2N73uP2qSBqnXopnh6Gb4niRQ98NxLr",
  "key7": "4zC2uefcm58GwkfLj3JECzZ7LPvXK9c3arKXFUtWWSuoMgCPssDRfofycJwXK7AcjJgHHkZq6wQiWCyStDTa7AXU",
  "key8": "5jTugjxgkZtDBZdqkM3PuaKPPjEuEv2M1mAn2HXoxRzScG1g23gNaHzFocmqBvQLFTFe3HPM2heaAAMsgmwFAYNc",
  "key9": "48NwyjbzY51TntT1n6tViM7BDfXzp1Siz6AEL1HHsAQzGcBhVCNYt7S8tDkzv38YwizohZ1EagYxouMN6DsrxTe1",
  "key10": "28vjM223QAEsm9dBrL9T3RpzzawDju4jPKrb61KwMHyxkTR5iuzZ3HCkLCeudqzvWJ5qvqqdsTRdS9XNUC1sQhrk",
  "key11": "2YHDVDqsGXBRDGEayg6jakZrFqpsQ333VbRE5gX9Beberh4pW9LhfPhhtruPWt3jqa1px78YoHroGeAzx8HmBzn",
  "key12": "1c68Y3td3UNnQZUe6gk1akfJrt8BpJvfV2FB7Ao2pUXvt5VU3Figtpz8wdiR3jskxjiveaHsnaqSWA7FH5wtHpq",
  "key13": "4hUNhCCzX2vqDpin6aYDvRZmy5EDWNySTauN1YoJUez8xSfoUNmqNXsrjCiJ5NNkoLpbfp46rPg8h6pFct5KuWur",
  "key14": "nTkHb5gMJaEXd6L4k25ZpSjtReCquxdN5MJrwSLCDRo5F83qCbs8Nbg8vkxZtWRzHP56sZLgqj1X3WeW2oBYHxG",
  "key15": "4aC7fBgFGxjdVnK5reYjuZTuSf5dxCMsnr5G73pdUChUMFh7eWHptgm9JXnzekAFmG8jh7dH6tFgR3D3n6zsmHmF",
  "key16": "5RuzPAAxKXbWwwN2Bjz3HZxPnoACwdssV949X5fTTrgW4pPyNyDgRS1ncfB7wTZV6ugJfA4JrvPgX9GGUB19xbrX",
  "key17": "3wR3NghbEnEFC5yqJT2uSPGyuJhJHi2Ep1efp3sBgESFd85fuUS2msXeWwyDVeapqbrhwZWso7bNPJ62UEBK33JY",
  "key18": "32jdaGAeNfiNYDzYDWMC1Z6r1FK37Y3fAURGJrnMMF3YWHPC3MWr6Zw8w5Fzaoa1JMeCFoymAcXTmeX9sUQ7EzE",
  "key19": "277UbfBfkzoDtJo6yhSWL2XzQYc7vHEFaRVpmRL7UFwNswBDssprDnm31mvR9ZuyaDmAH4V8ZRpWECXs394PmZu8",
  "key20": "2Ra5j7rULPtSxwKchTpQGWzeAG3ePmBMVdoppBWkDsowtTRVJCeaT2K3D21f8Ki12Jr296GtKVH7esJpkLRzSGLX",
  "key21": "5LuMDyk4GwzkW1M8RBPkZDvAUZXqAYYsE4sgUxFNgsE3KMc1RiiEZiVfLVp7x7QeEyw3CUfwSJCw2AyjKq12Uime",
  "key22": "2jphV4r2PPUzVTZLfSv9fJ2D8xYHNgLhPr9dBWH8gEpP43VygdxkEbMEVjUCSFqNRDMFk4kfNXhGViiGwrx2cHFh",
  "key23": "57k1fvZBqHARzDRRW5BGHNX5nps2b4AFZ5xS7GAeQmeXZ2mCxYc25nfnvw8b2TqttqzFhmgF7ess6EQb3PMzd1ip",
  "key24": "5uYbB63w2B6njHtaJVWHL58kjJ91BVHpQygbCoaHGKJuyVJ4GTJVNLE6ihiXPVqAwAqG5joUihRtDgsFCieQMEHG",
  "key25": "5YYex3dkPYEtT7GAZ44DPRZhLPfq9xkVEcgNPa3EKmvGiCzwwT4TS4ScbHcFqZaDVB2Zq4jLaQXt1Mjjxxf9NWid",
  "key26": "Q78K3dUgBMddgXsiczvVTEBUDZJA6V3hkNRNAByacFHgXtpCCB1E2CQfo3bBK7NhzH5oCgYFwf5cebjbRmhasH4",
  "key27": "577iEGaonzPaNSbe4Pkns4oGtN6ZJoDhGkpdeDUJREi5GGKYBUtf5evVzmKjiwLpu88JtkGbceLb2wxbhPH3bicw",
  "key28": "551SXYuXT92bgm4QdX6EM2mZgc2Zn3TKdjZbhF6WVFhjM8pv3CKVf8Nv9sD6Fr1i4ZdEVhUGFpatUxdbGhqy4Lkb",
  "key29": "2NWBNCYnkwAoS4MykFfZyHNi3de8uGzSFsR8k7Duse7HgVaxT4xXeYGFb2KZpRnXNpgPt2uXmiQDeJZoj3fpYwAX",
  "key30": "4Nioi46KzrXh3BX7hkmKoXYtLgq1DRUzgAGLnRZdex5yaNodtuv5QtuU7W6vBDBE6UyKyMkxFAKKvr9pSJuV6dVV",
  "key31": "zJGwmBhamzyW2aGEsrcUFv9s6j7srQMmSHb3w99N3rjwG2yUEDZF99rWrJAgxLnxuoo654jXKdoCgBuAYCNFmcx",
  "key32": "FES1osGHie95CY89jyXd3a4K5vvbrmsgEdZztyvUf3esa9kT8zSEr2FTGgN8AkonCArR4HszUD1KtTPmLu76V9n",
  "key33": "21nGuTcEj93odzEZnra8Fpn2K2FkTh48nVKGNUUov6yKwk1e8QHhfSDsXdJyY7NGyGErdev4uyMKdzBSEkp5ViSF",
  "key34": "343SuANgXS8XtMFSnkjsBWqxd5zXrCAS3FojajYBvQwMsAAwPUUPTUr9CfiRsTCx2f8bMtB6bgdhLqe7FELZis1L",
  "key35": "3j7ek9YKmvudTJ72aCmtdh1DCgiGVGa7peBZottZD9AutUxnQk1Jvc6Cti5awnirPvs8jzzuzcbFq2QyCLuDL84Z",
  "key36": "33eYaWKAkSueTjUyk3LSX9rPmpQhH8N9BwbYVhMTcAk2D3aVpcL8VsNfhRkWFTH1PRvYBkHu6C7MToUM95N92MUQ",
  "key37": "4D4PirhFMjezNPwURon4LznqEQp2bf6oXB3wzacP5LVgcVVfrpdyFG7rwDdAa3xn1bA7DjCyxj1KxgEMx1sP3o2e",
  "key38": "2Q6AhYPg2QhMTsSfKvekWCyzqYBBidKaN9KG3R8d4ZbXwy5cHNTWWxjRBpJbw9SeeMYPos4YiRw7yPkAF9EMJLgB",
  "key39": "2SngWzXF7LqW42ewhpJbW1kfwu9ZqiwwKFdRHqJEi4mLKLeKK9m3un2xyEjxo1ibVHPi76sJCj8G7ZcEDds25VFi",
  "key40": "3BXhCPaxY3LSUNckk3YU2X81UXyJ89yHDB4E9ZQThezxJMUEANhrdxjqFJvjXLpxK1quDBxA8bPovZMzZ2khwV2J",
  "key41": "3gZ4wPrMppaZwQDwWfVmTZAAhZpgP7k1tRS2bMJSQcRrcd41uThJCxey9gzkz9VgEtXSpqgcnBsDA2gxEBqcb5Vb",
  "key42": "4VwbLdepqkNn2pmuknoRL6kMbAa6BmivCHtQVvAx8XSXTBk335w6f2BgWqUPKW7y3utFkF7FZUUU9vDUGAPgzZHA",
  "key43": "2iWZVVruZr3yB65mjkhVdM4iaiUXNeR8HYm4JfycoQ7B4jntzrzQBVHrSXjVmLfuPyDA2TQwpkHdnyXWqZ1A6K1p",
  "key44": "aFKmG9KGA5SzYqvAxopoM6zgU55RxSw7EPFxsQ3TY5FVEXW2DrhbpPUJM3yeETswZyscnQ7h9HLseBNXWnJbHSV",
  "key45": "4HXzPDoNM1bpkbGQgDXf7jmf86SAPF4upGXtWMVRFPNez8VnAWh8Y3j3TCNxSq6QJAuaMZsENtxkYXVF2Xjeb7TW",
  "key46": "2kNbZu6cQRZWaivT37cz2uEWpbH5wkYp4zwNGnqQzvLocTGz2CgGhvbDqVx9tXqmp3gK2txDksKwSr9hYGnmFxmi",
  "key47": "5F3jYAYbmVFZb56zkRkgE7HNYQgJbNQxD9HpJ3WKqBnUV4Ut3915VYKYxyV82EK9N3MutuTG6VfpiHjRVrNnkHih",
  "key48": "61caoDeXAVdpY1qfdEoCpnYJ29CVcejRJnWRyhqFB2jGDdrw4NQnTXn6tHN7aZzcJzTGrL7Fb4CEEMQyntGD4wvp"
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
