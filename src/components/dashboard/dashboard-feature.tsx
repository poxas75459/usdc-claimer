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
    "27cZdmpRmJqGKpTQRfPKR6ndL7TjQdhfDDfGdopzXNjWp4zcQcKM3YoL6cDNNKiuhFVj9gE79ENA4oqfpRkofD3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYLj5zY1gDZJyvRjhMEojMujEiuYRGqV8Hhq2fEVebYGaxQZt73XsXbTeanZ3ST36nkK4kJeGTiy4Ec74fYfMsY",
  "key1": "5y8fRz4vNWwyu31eirLmMXxRVYGSdS6YUzoJGj8bc9jxBGsJzPM6EFnRsjQPP1e7CvqJi42dLnT628dkePVF5n3B",
  "key2": "2ADGpWexN1L7m7PDrANUyQkemZcURoR5NXvaLGoQM8TtAWtEbvgcntzheD9LNkqt9a7UEZXvZyVHkLpyDLFEqZSy",
  "key3": "5qvHW3aU1AQtsJVDrWV887BAmwKgifvKfTvXqcFYRnoNo2K3WUmpV3aDRa45UfvobAZz3jaQNxL4fWcYGg7ZzzqH",
  "key4": "4sJJ8h5ARr8STF7DtiSXr8d94BasGi17GisKgMowGxoY2FYjrz9MJkQYkJ1rHd9Vo7TMfgNwtK2ma4GmhTScVDUX",
  "key5": "3rmEmften54ArTjGGP3iYEdGV2i8HuysLbpp8yhrQWL6WJ4YHs15bM2awRF3B2LJBrZFbR57GZEDme652r7oUqya",
  "key6": "YpL1sL1T9KULNrAmrNz91gcNMjzBaRrqe6HwHrnurqNy37KgQ7gbj8D3R1VQDT6AV33DyTW48ugqf4DYT4Kb9Pn",
  "key7": "2gwNfis2ZgXSJGE9zVc6rasJpc7jKgAyMZDEvxVrcuZQsjBKyEj9K1HQyi7ZakQZHT7y9sh197TmAi5vJYUFoPmr",
  "key8": "4f5BfqbGUUke4QjGoxmY3Rnu1YuNuVGkXsszf5Xw5oiP862qDgzRyrR8wkLypATUkrYM6n58XtihJrieMgjQEnS5",
  "key9": "wdbmFx5eKk2NCoXms7PVUmed8xMqCBGAosFK2GQAZYdGooHqZNNCaMQ6aYmRnCYhkL952DfbpvTh7e9Uf8ZqVPk",
  "key10": "3xLbnnx2Gn8eLFU8kyiBBPBmPEXJ2JEe1mUyAwU3yNfp1oNeure8MnPdr1QMQyhDNK5YjRSe3iYzuaXpXZeQeHyZ",
  "key11": "4zQWrUaVhzQQgt38UbVijV7PFvSYgCxX6WkVfv4VgQwuWgS7rU6gEQ6y7ZsVr5oNu3KVWHSfetTd2tD9JpMNWBM5",
  "key12": "2tmYS2rdemo6dFsqn3JvwKdBvvmv3wx91Mpx3asxTsyTgVVMawnP6cXBDwMcR9JUfHzxdvU9KmGi1vHBq9H3niXc",
  "key13": "24CMk88wTZCXm4bFAX1bV3Z577xi3uUZRYwkm4wiuomybEkVHc5VR5vGTuyKiveW57egECouJBKp88p45c4iB9An",
  "key14": "3GjzCMf6ctHqmtd2xUfMNmKiL9g8binK3PztcSSLmLEK5EoWwKKrB6ZHSbzr5ePoDkQT6Y351RNPDJ1fzYqZJaa9",
  "key15": "38Juf3rgRdZnpMhXDJkVNupxs4zQGwm8K1XVvyfisLQuCovoXTdMHpzTF9DBPmA9SNJ7vJeMfUPciJDk39WyfSDE",
  "key16": "3pvhFuLmV164PJABxGFGbZNZLjBcvJWLLjTNq6ScoQGC7t6LeZH8GfpJJg9mTjAJV2vbRTtdc9Uh4GhTfMNKJQeC",
  "key17": "5wHLvyuiT44Ee5NYEx1xWhJH8s4PTAKppdfNAAhM5U5aUeY9W3BMnviQxoySNX9e6uPieUC47oqcgEcXx5JcbyQp",
  "key18": "2XaQH9E4TBPeCprM4FcHjP85HYjLNX8Ndi9tVDnrG9f3DSS8W9uoKNAQykvsZdAYznCVJzfU81kZ2a6JuoYzpnvq",
  "key19": "5tKs2E9dCDGQgJvSM9XTKDv6S5nEWMvq4JHR995eZvKfcZLpjRjNRCVbLckPEmsttiFU2NP5g2QGruNV5jv5F7JY",
  "key20": "2FUcCnJrkVL1m6j1HEUjapvGPN7kVvWAiQxCEW7Duj8U8itBpFwN7EcKruzD8h4W4PueAz3qpkQJKEiVoiuXmm1c",
  "key21": "5p8J1Jy6pgzFJKvhTDyqUp26ZtrEMZi87PEWNxJmibcXu4MJ5uqjaNnjn6kD4Gvz1ugjb6wYhppXpzQF7e7Da687",
  "key22": "3YiMY5rFDZun6DxBma1SDc7JW9Uy5qzE51J4EX5mQ2nkENw2vrRB4sfCibubFsVvXbqqErcdTytBBNJPrtuqReL6",
  "key23": "2YX4mL3aEdXcE3UETnupSsXSe2W4bLuuNU8i6vFt8eex6mSVpopZhy1W2122NH1JRyh5xtj2izEqNS5F2x3P7S7K",
  "key24": "2jPRru8THLS2GSncXt4uhYZY1g8mu7ctbf169KigfogPeHMVoUgiC464sXTkjSUY4bSSY3io6aUFtRSWb9ieTwZc",
  "key25": "3MJp2AjWTCpWSKkHyvrHbqJC5Uzdmn7YiAcBXCR8xTN8bt7UiM8ga9BFRrEy1r2aiBVy74LzTqaXsjGox8HCVdko",
  "key26": "2QXSQEimZZB49yVsDBZKwhLgpWmUjWfn6D4c8HerozdxSNGU6GgmAdQPN8FGQ8qGxwziXwGW8HYHC5fsiPoJsvBS",
  "key27": "22vQnpV3tZFzkjVMtwSMrWjKk2dLrcR7oVM9VkoxAK6tSLWjEJ37HUt3toint5khD46pMVEbdGqPKxqz4GBnaVtb",
  "key28": "3WUPtGQc1KxBZcD7EJxJFYyLdfSFLJhiRG8JtAQcocZj9zodU7wPRwrFimkPJRqveDbWQGqT6FbC1mSULKgMztGY",
  "key29": "5BE2UoxGZ3qGv4YRr9o7e3S6L8sPUztSt9qdm1G5CWyYhDmEz2Aawk3Y1duYGAh99axfSMCGxHantHQGTfyQRshP",
  "key30": "64kiZhgQpHFHvqj17dbfqDG7vMNRLABZiytLbarQk1SH3UQmCoDuz3NYZDNPft4n1DNpNPzS7RFWP9g4vgW8FqaY",
  "key31": "32ABjqYHRd5hQCy59vQbCaqvNraDzHFVPkZ5pM2wpWKBfyTfyqy83BubYtHa7krCS2RDLgaqY35sWwVeruZjWGvx",
  "key32": "3W1LuKumZmCR8ZSSHvuJsFXjyyWojPtrtA311C96nMJomz1Hxtut2gCFBSohZhBRDzHExNq2JL6TkS5tCTYdrAR5",
  "key33": "4F42tF6CLnvcWhSvkDU7zNFs6TCLxqmsnUWQxTAnDaYUhevpaaeT8BYZQJpWS8o3GMdmYGrwMPsmFTDMbJF6HGSf",
  "key34": "622MYswvDPutibS7DB2KoAaowYdphVPTbYBDz6a6T8r5udwMz5R3jyXxvqeq1KDmeTVjDvXfTY9WFkF1A3dfdUfA",
  "key35": "4gRL7LFSq3JGzAgSiwEqQkt2QNJBRiqfFxrgnCUedn2jssRBw54ARTDtcqnYhGy3zhbFy3XekbfysytgoPAxcYAU",
  "key36": "3idveNeRLuEcRLAaYeo2yscNUUuz8S6rY9dPF75GJd41N4eChddzbo5tsu4doYFstRveqJHnXtxo6nyDt6SmmUaQ",
  "key37": "5t4HztkmU4fopDvQau3kTDMgbWmrxZWg7EhPbJSSdXsuYGSoctw7y5Tox45bjSYxmf5gK3vqfZpjUii2KMTboCkQ",
  "key38": "4ZY68cxJ5G4wUadhadsEcgfxqureqCrVpzvodzh8k7eXr8KNKXAzaVtQN8cbCMFMNhRVAoiZQ1a4UGeb9CB35wpz",
  "key39": "SiiwkvDr2yvt458BpUAFnPfNxEk72RBgjSoGFaeEJSf8ugY1s1gbnfeMZTnKtVPKtxxN6wzKMkfkwoQ9Gx3ME5z",
  "key40": "4prHXg71n7vTfTf89Rq2u7Ddrog1qr6hqf8VRWLYVmjjZ8X6oS7V1VTfiGCJPbCyNDrfi5XKrRdfsDfHNEDhDD4w",
  "key41": "gEtMRL8rJXeiJK6xWVG4vQy2FQPGPSKhbJCAxKbkZi4kw5ANvfuT3YzjixNsZkZpvZ4UN19qHprcYtVeCytXpfF",
  "key42": "bsaDiZVPzYuYWxGB83f5jBzyW91n3bPgukmmjtdzW5v7H9CsTxRf4NzGrxFBzAH3eHWgbwkV5ytg7ixkw2Etbaq",
  "key43": "ZGDuczkWnxPVr82FAXu696RAVLJaonN7HaUFHb8R278z622BhjULf1W79kEWUPnoGcgxtoF3FsxSXbwrgGYFNFx"
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
