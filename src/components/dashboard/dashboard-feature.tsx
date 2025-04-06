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
    "34XRLKN7xATz9zT8VWFKU9tBwVDcUXY9pWi7nhkcKk4KWtNvNAXCmGqC9tX2bQYZvDZZTqm7iWawBhm6XHYTW8z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YyYiHcXAE6673SmQXvt2ej1kSbsTnLD3yAsHmzi1aVZFShgtq7Rfxi3fmTEUX3jEMtHekUQ2EexPZF9vsGmzNE",
  "key1": "ALs2b3dUbjaEDce5WMBfqAa1fvSCJCVVdQzNszimwDxhpoSY4xYizPwjfGdrxvRHGLxapsrexEDaMEVqXhGYg6n",
  "key2": "3c7thjPfw4DVW5beq7GJdmxjZzwbHfuaH7YmW4WPRxL2ZUULvmiwnhNA6hkfM78nWwbwpBCitU9zgrjjeTXFHhou",
  "key3": "56a8ZJ6iBuLwy65wTddSp6fMGQ8SHr3ZrcWzo1BjLwB25cdpP4pYypTVi9mghrsp9taxJBX6fUetQsERQfk16MsR",
  "key4": "63uJ5hSWtb1zNXcUqSHBwxdavMhVeZdMiPSDUgoyEHinkP8egXviznHVFMnDhqVVxvYaGarNtF7XiR5hoqbb6PJ2",
  "key5": "4psiUKN2NRc8wAo4DrtANzberQB6MFCvNSfEWwtuRF5EftBoKTRayr3JfnpDEXaEiB2xStJbNg98Gjg9fYjBUVD8",
  "key6": "kVsToBGPPGscWggGeuGZ6N87BtJ24cD8N8EeV5ggsLJfJVHJUTYLPZCKLTrKoQoHgBtQxy1ktau9ZzUx4rBrFzk",
  "key7": "2kcGaNtoxAyTmJw6pFod21Ctmpfj1ziWrfaXgvKhA8vaJMYUXJicwDiydmfarXNRv51ncUokY1RVZsRtLHMJZePa",
  "key8": "b6ExXiDvfoKZxUnDar2SdW3MSf6VqvfRGGY7mypp9u3xVcNYPWJXRm1YccgGUpvEsxqccso7Q3merf7oQsYpfFq",
  "key9": "2NgMTtnGVdNhQJu6dh97b7nRkqnMQ4ATk3WWPMubacyMm8TYuWZjsVin4MHMwdp3Q8JvaH1194XJVdVzxhBsmAE6",
  "key10": "5Hc5SEvtZa9imbzcroeNSPHG2DVsBPpfjw4qgYfZHexCHXgxDhVySFFRVPWJe3FGXSXgRCxcFf6k6tUeawcskEoM",
  "key11": "USN9PbHDgQ4fS2M9XAVr8cpuG7vMrH1vGVLARE315RqYbzZptnCSnTjmC7WCmdQVtvkP713hHutW8qQNgSL5K1B",
  "key12": "2w2gSeQE2X25KZMV67VVXL7HzDni2k2k8PNGruRnoLzrqSZvrLYf39Y7mgwcJuJk8hnTMqGteTZjZwYQMAsav6Tg",
  "key13": "45dVoYYf4AtY5bsK6RvgkZ8aa4LcCiFtezUmDo72janDq4U88w42MMyJrcgZkQY4eLF9E7jYneo1r9hDomvBW7AB",
  "key14": "5WLTmAqHT8j5ssxzmRjSrhfiLjqncbpGczVeM6W7r1wnwVVRMPubohq38rrZZwPPD9q4GY7PVeqeHS8GhqZ8iQAU",
  "key15": "4TZ1znvW8LCPbPj8GetSxJCX5BwcQtJWTKJQDMrvBgYP5QJkYteLHSAbsY7JqzUaM6EuxPWLPTzBgQNDaQUFJ9zY",
  "key16": "41Bu1BqQEhzx5DoXPYnrH9yJXHoEpS9vF1MTJ2GafFJ6eeCVhHhLfAENyD38N67gPib6ULJchpVCYTsKVLSxXfnV",
  "key17": "4cV3rb2LCpcscwym2tQZ1BcwLxq7C1zxp7rrR3ZNoiEqbqHBFhyzswJHyjuVjAgoVMCK4HwyUdiQU7swCugcz6hC",
  "key18": "KHgwUvXCF3otcwQZ82f7QJXus7BP7uhDYmKRPnCvxFrJJXxQPT8XBdbyAiTukftwQWcXGBy7sYUaewqUpjKEKvF",
  "key19": "3qVwH39C3gMnWvBgCzdWiVHNNTAPd8uyiiQgTvXTtZanMYUXaLK5aMCdma9gyRYAbXeLZ9YAnHqvYQR75kwqvVLn",
  "key20": "3kj2mXYRYA9aWV2r9Dbjg465zuYUqkNEQoqSFYEseAGwk7JGKmc2qanpLUc3zneo6s8mdTMW7bZxD7ANxKhD9j1m",
  "key21": "3hDTLD6wbd9AbntNfbvNkhYtzqGSMamdUJpUYJ3kXWZsmuwBqgpZbV6y7eFepRfcN8ekaDA2RVrs6o2xASTp1b4h",
  "key22": "4SoefBHPW7KxzYhhWeMBLA3tqEDUkgg6qhWd9LdSeThGEVaVeJ6VeGUKBbXRJXNZj9hmnDmGAQmGeaGnD7wxAQ26",
  "key23": "5duF4Fr8Auok6xXGMtr6wNes6i6vQVnBJXgn246kDxQ4fJ7kqw244SxpigU8tGFtSfqFFjk8iKBBWxUkq8FMnzG6",
  "key24": "3SbbXyWeB2v1MiY53Qn5N57yurkAnmGaNJDfWbf6bzmjK7vLyUZkjfCfjLSy4MUyyE8fPd4CGSjWnoZmGET9Mmnh",
  "key25": "5tcRjeUkvp92LfJuqDJMmtBS6bWShpWTqDptz7LSXRoPT3kbud5DKtJSPbSeSmaMokUygT9GsiaQRNJCxK7qQENm",
  "key26": "AMp4xxRoREm81f2J22DztVpCragbcNxAZF5cnrLHAH4d57tfg4CzuxZu1xn6azt3ue7LRKZyBN83EVErhLZaZnc",
  "key27": "3pjTJAFv8hsU4861zn3ADDd5wkkmbcVVFdYU9TKYpnt38oY2ggDSsnxPc2RZjAjvp9uABzc9jmPrZGCqKK6d61pB",
  "key28": "3f9f8gmwSfQeDpU6q49SvJCfFjpSqtR5JAGrz1S2K9Yjm8L9P8Nv3qiowEkP6s3BEZe1hqSH3eaKFrVBFwDCifSD",
  "key29": "HUH6MxN2H7hrF3v3We5h1b1gVyJtEEZimE7jCMd3H14M3uvZeohtLi9NDbWSuvTM15u73ZQWfLtJfBryBZj7V7D",
  "key30": "3ZsE6RDSwGRSy48ecTN8igWVgYJkhSCjnUYTbyxt1cYsJW8wGvXwmr8qtTjtyaKrE7GNuXWcDyEtCPjWyXVkVoaq",
  "key31": "3VQTHknB4tR64fVV9Nd9x8JASSYXhL1LXcGhEup3CyMVeFSKtEemPm9XavTynM7BXkzyxbSB8zpR1KCBVFQXMGZx",
  "key32": "27b4S7bEwFpEbaGAriUBesXy6BkHmQosnLPjPXc7WogJRKPhund7x6peiRxBHPi3AbaXxSSyoAGSRsxWJ6Rdg6Ms",
  "key33": "4B2H9vvdFiacMMUM7qCcGw6KWJHDHMcpfZKWW4SAMKUAw2xRyPNg2GYvPZ86ktprUWjJFGavYeQnxmikYzYsZdJK",
  "key34": "2ovaeU6eXQihEcSygGcuuFPCDnoJFVF3LNmCunmbFNe1uZJp5fQNjB84KRM33CbeYv3rcCDvu3F5nqVDtxquJjbf",
  "key35": "5Qx7G6NfqXXq6oGDtrzn3uxkJxon4xPKNznd4QK3dZc2BfGHiRyYJiGmaQrVjYS3m9vLUwTy1f1N4VZA1Jra2oGW",
  "key36": "tpgS6QvgfbdRacdtZxBWWCUpytcaogTbekyok2uDG6zMgZ2EfpE4ra37NXpWDigjxs4FCopohPhp9xW1x63FsuW",
  "key37": "fGa3p9Pi5Z3bAPWVdVa6hgRaDuDMpLE4bwa4oWcALhX6QfD4wDcU4PZjNALoKJqsbFgzvmkAm7XPuDwYgoztjjX",
  "key38": "5onDxMYv5dq4XjqsrYyU44ZXi3vouBiobcZkqj9joZyKgD3empaWuSC9TQ7sHhvGZktv8QAxFSHSAb9GrnQXHGnR",
  "key39": "PPo97F6eG1LaSfpbAjGQQFfniNHqoNYn1hQ1QVZvAmCBVLM8h1dJFsnK8jmca1xgQpNwb36ww6pkUDMfCr6AZAQ",
  "key40": "2vtFXR5gzRgdwdaU3oHWgdJBycUcwatxdeZmXXkSkBUNUsG1QRq3HnsQCjXWSKJewy4Q5yg1rFGpbCK4bft2hSUz",
  "key41": "3u8XZ5G5y5JwmPsN3poppituvQ6FBfEMCX32fdxFWFbsTgNvsB77mazBJ5Taduo5BszSX1toXbcPr4wJJ1D4Cfmj"
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
