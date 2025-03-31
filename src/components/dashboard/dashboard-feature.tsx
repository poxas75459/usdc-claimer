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
    "2szL9M1H2zLhf4Expzt514k2QjQctY5pKztB6oYxAh1fzinVwzWXUcBn5EGWW9uz2vwCtrXoHfWTMHhEbNehsfRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BiP24f6NtgszefrYw1i74y5bbdLWgsmuhvfN3Y2dCLVte7d7k94kVpg6QZ64ZNfZ4mc6THQ7psnmkyKLECH6Vk6",
  "key1": "43MJy45GD5RQaFVWvjS1gQyhH3x1Zaz5ekqMo7T6A5GdJx18URLwWvWYjcpaAnwGWdURDWiwuEkgv7vWfCXtVkkJ",
  "key2": "fCitBgRNqBYxU5WrP17EnAL93DaTfHfE4eRxA6iDUmC4aaeqLrQcgg6uDFSbcxwFhsZcRhRzVJYeLXoP444JJwC",
  "key3": "2w6xTWr1rGuieAzi5H8d26i5ToKvGujKjmmVyT2XUNsDBXuJFSWbK46WkXjkpFwchhsSWha3S8hscaQgko7G6ubG",
  "key4": "3yhGZcuMHZXHvTe3zQ5Fiys26L3WS2nNWdUKsJjwWH9tZumAKTuv9zgLW7GYUhWS2gqfaxXoL9P5fCWZsabLU92i",
  "key5": "xEN2SRRciN6k2Wxv4rH3ymmZgig3PeqCzzEPf4jrqhPwobZH5H3pNwCrpDvRUKEJerdtq8v8FqENDFRLKQDFXwm",
  "key6": "3mCKZhmC436mzTSvXhpuxLMxk7vBr3zebR6sbSibnQmusCjswBGubKneqBXxYUiAQozSkUYfGcs4sQx1ioET9Y71",
  "key7": "PEVPoPFFsroavujdWP2B5YEFoxZqUHmLfXjCnHsv65TR2iQzCevCNXvV3Vwhih4QnSMP8UnKWA35NPgKGw9ijqJ",
  "key8": "3en3JVTmX6z3UR6p6ztB481yGAtLTsaLbT9mcWDMEzW76uG3FvvQ3qTdCbiTC7abyUkemqZui1JdFBNKSKiZzHEC",
  "key9": "2S63i7nzfbF5LgzPojLJjwPEhxHhiK9yPxgL1eJbww6rNMY91LgpaEuAmeJ4NA9tTFYF3joLdFDNNnW74GNibTaG",
  "key10": "5d5bsX18tPsNvZ6u6xfab6oPjerWzbfPAZaLgGSCf2SSjoDRkaxZJUE4NfMhFLE6Zuoui91FMuzkVv7K7EQ2J4X8",
  "key11": "3USXKtmX2i1MEStxxVsDMPYn55hMiXa2V7b5GtxCsuHhaQyF1dTt1rPXPJJ6kqWoQo3t5VSZJTzNERiaRMSpNu2c",
  "key12": "5shycimcrnUTSLbbYYqKLcrPJm58FK44wW9wgE71x3n6Tcrt8t9PqMr3bS95zkRi1UKwv1R8aJZ5dZbngyEvGxVn",
  "key13": "62k2o6JBM972KCykha9PGC96PAxQkNgoDDrUvUAg3saetWRfo3rRVb4UWfGD8ggWG1dhXxVcTfg5dfDHDQkT4VLK",
  "key14": "5vgPJwByvkMnpb88B2voG33JXCdMLyQA1sDRNy2nUUSvDpeRRhhA9fANccwwpgs4WyDichLY6yrw3s6uTq83WgGL",
  "key15": "BN4MhcLQ5oaKuRBuiaWo3ZjQBNv47mYuyYj76w3HYkKyD4GEskNQdZtBhsGXWTKczVUXV2qfTVxFnrfjjXNEazJ",
  "key16": "3d4t62VfsZeboyswffaEjHUXPgzDKGTPxpmdyh1rukPbq5pqMQr5HY6P9XS3k3bt8rvkkci2NR4bQwWDHSM4Gyhj",
  "key17": "67bg8K4FaZ6Vc3vaKXHg8P8paFU9ANBB3Q25PPhGbjiBWBF2ionMYWptbRqpvxJp58CMnRRDvoRPZct5HKTqYpgi",
  "key18": "4PKugE4iUzmPWse7yvt4dw4YymwZjR6Ax8jnAfNHSftCJFn9WSf83LvWnhoh741SqZ7jBQPJK4r4BB1U8SPu6vss",
  "key19": "33A8YoYUkEeY4tCahdS7g5Ayp6zu34EQVnJhNyCffXSsMF5FCG3tMyarTfracHJgv9GwvVWqh68t44G7UJiYdxmg",
  "key20": "2qPCYDyRE8qdDFsdJSyLZdLWMfoCTK3cqhPdQwUb7SpgzX85dkxnmMRVKN8F11AtyRW9xLybrQ2Won1UcQco4Ab8",
  "key21": "5Zf8U6CRc8Bry9xfXuUDQejUXPNXHcEJrxXUdpxY7ZYaExVD2vi8i5VNgWLWqP7JLMXGv1fbvuS2WQCCG5BeH2nj",
  "key22": "y5P41WouyMwHQD1UJg388yobdF1HfcM9gEixC52GM2tmSrBoK2zM4GirCrwBRVz7bcnmPqHCZ5NgyYEkpvDoGFj",
  "key23": "2t7UaSsCj1Tx1i6mvRaGhUbSxs5p73zGS328tJeHsWWb1bW2SdSgW9CpwJYyctwPWDb4xybonaiPYMBVUtDjFHuJ",
  "key24": "AKRuiv5PADgU2ivn72rwefa4PS3bodDVt4hnRJ4z7owVUFHWZashyNj6uNX2ZzSdVE4w7DuSXzGkFdowDVUvJMX",
  "key25": "4kqHt9zvqjj9svYXfC6Rs7oFFCxqATb6Ve2DkWKK3iXwnQ5NBd4iqthLkSB2HAzTid67eA1xDAZDkFeZ18w6h6o7",
  "key26": "2Vee2AKPgkwNFavfTAKE3ioWZurfoyEtQ2WGN5h5fqFfcpzZc2ezdTirujBiKYiidntEzmBX5oQrgtLniGgpkY1C",
  "key27": "4LZZcPSkiZo18WSnVUHYrFrN6ynGMf6VVT4w7RBJjihDDvKbtsqeWFuzzt8ndrqHLSsjLrviG9VmTH4ryG41xzTk",
  "key28": "2kQYziPa11VduVYBQYk4CLXFYSqkHUgEtu7YcKNyesJzK51fV5rUS6TVjyDxqrBVLAm4WJUFMSVC6sCYkZTJW9LC",
  "key29": "3vsHMJ1G9haEp1ZvG1GgicjmFAAjN7gvstcvyEdaeTpu1mWswDiNwYAQWmCYFAF6zVvbwrXbVFpHULEuwCtbpv35",
  "key30": "3K7KZ9RhAZMzxzD94r9sLM52AEs4XUN9RZyofRocT5A8ZWX2Lhiji3SCus5TZAZnUcpztvnhmgctW5viGxvP3vNj",
  "key31": "8VegYVfAMwi1Nbo6R2srbbq3avsjmEqAvPwautvudygjwqdAMnSAYzYEcRLWe5nFf9VwH3KbJhKmKRvkKnk5nVE",
  "key32": "SGZh58HREyaPPCXvsDe8hpAjYKNLc32NUZGKe3unomLN5zzWt6PCf124sCD1TmVQfmEqAPErLeBbmut2uCQ6SL3",
  "key33": "vsQsLueBAki2MvWfjs6gKDz69eBUWmCoks8LruT9m9W8C8kM2Lgz4AMVJwbipExDeRhGcDQaCdhmWAD9PXXZNGo",
  "key34": "2UjxMsi9ufuXUGcCYDW7rL2tRmfoKKdRCcpyimGDDYzMLwex8XotBCLbP22xuJKKtfJkyJuKhfBEihfSoCoaVYW4",
  "key35": "4G8nrzNidMW6RzzQVsanabm5MRYd9RRVPM851eTZwHPTxuptdJsuvc4MMM1Y65voTWLUo6wF7nLtv5YiW8MX2kwm",
  "key36": "42rA52bAQXbkPXgmF8ZeyR1EgadWmPMrLCWqcWsixnxkG8GWN7fak17vmwDZgn8YDM4ZxpFkpK5iB2TGw4RwjdNU",
  "key37": "4LHrEtzGQMjR6HZuwzxn97UHr21HeJESDoxNge1amoEChCWnC94VzYjsAGuEGdBjAUAbnGDjzByCZ14xnx9dCf3S",
  "key38": "REqNXjcDRqDJokquwQ298emXJivaRWVw3JPCGRGD3bcxNyF6i6F5mF8ZgSdPCiyrVdWgA8GMm26SEiJWrGXhkd2",
  "key39": "28Bvrs31bN2eGzZxCYjevi4vCFKVb3PjBx97pUd5zrurFhC6GwPBUC7ndsHJZqGkU7y1onxfx7hmLPTG2wW9TzgC",
  "key40": "4kM3ktzHERADmcbJ6nY7cS4CtWPyz2sdtYNj2t5SMn1yDXKe6pjYhZTHTZwfn4r8XJXMSdJ2jT5pYSJvPUmxpRe4",
  "key41": "ku85hPJ9ej3B2tfewQoFP8vNcwgf6LoSfnqAPyvxhTMdnWXgch7ZrmJ8q3ZMy6DtcPd6eo1RyAPvB8k2i6x8cW6",
  "key42": "563SWbn1YkeRHYr9oVW4wWn7sh751ibett3LSKcqbphxHWumUkMQzNJWXy6Le5jwtwKJMzJPt6CmNC9tbcGKJnXD",
  "key43": "2bkRrKyyKqKrzwo84BUfjTQcvDWHtjZGTM4EkwsFrZLSmfozoBfrX3vpLmTEt7ASsjX7LumYB913HwsBU3G8yCpG",
  "key44": "33Nk6Ew6krrQaQ8PbAWXYpGEVqYaBpJTfsgWcgJGQmVAzxaGTtnuhBMXUqAVVruMjBNR3SKJZuCWZk6dq61meYWi"
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
