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
    "4uypY15TV86HDtwVuVqgtNYfJityyTRK3qC7FJpEEHH2KXuDdPPd7sryGsPnMS1ueGGPPAEEGQHa9Qr68LNywzxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmA6HTDdUVLLmT4gafg67waFUXXMdHd43zG6U83EKRJ49hzD2ezRz8wmPn5GuVNWk4JDvRLE1xhHT1Q5iRv277N",
  "key1": "3KQjc7ZQHcvXir84zcp6FMR43pSQQszrGXBki4qT3T15Q1qe78YLAGutUmewEEUTwjNvCBYqhRDpNqoPR4AorLG2",
  "key2": "2XMjsy5kPnsmuAbKCQF3gwJ2wCQPkL7GtbQLZ4rFfYKFGcVQt5WZm8R6BCBVVjheyQuLPbfUcBtQXN8GsPiLFqPy",
  "key3": "3R3CH3k6wHpcpyonQQ6NYQ6K2BiFHkoSzYrSpV2UHGroVELNCaYS5U1xPMdDhJb8U4qZa7L2pR9DgiqjB621yzuU",
  "key4": "59E6gBaGqQzUyQy9S36TEAJ3jpGKjHeer6i48qu6kzXiA1xb2jCdLqxrjFokjSSsnS7z1vNaJUUdhEXLqdt81LU8",
  "key5": "hKYSTRg8WNR4du2Lb4nStBGxKtfhoYBMvtS4S5o52uEu5KgKe4HhU7xD2Z7iY5wRazvN6JsmEbQCb96XHeyJdya",
  "key6": "38EqRXcR2csP6c64BE9PgV1V5NWMgyQeTUhkEgm8oDZsyKi4zoRPVMQefAaZ5ZdRDWUdUhjj1wUXumJk4B3VJiY3",
  "key7": "46bk6RqSqp2DR5AhLVQMBr6JyDwMxgG4tjgr6wi1eGn154PmxVTkyQ4YJXeW4czfGFxok7CvKuc9KpCChFVqRgsW",
  "key8": "2wojP2NVEz8CgfVNjQH4RFysB7mRM7dE2n2rGhRcFpLm8HfGrwo7GwAJJCrS9LRFYS9TgtJn7aT4UbygLMgtmpG6",
  "key9": "2w37ioeczNQu5dH5TQVZ3xdk8LJveC8iApPDwFPh7CWmn1zyxfB11UNiJ5qe4wiiGY1qa4Dw6pyXcZD2bBcf9NAc",
  "key10": "2UZWNeKiH89ZnKtTAsyXjmX1EotXKSMCecbmoEC9pc6keXTmx6Hd9AFyjvvKrDs9AyjeEwsdsKaR9szT1CEJza4i",
  "key11": "Q5ph2YQQDrDJodUMuLNr3c2Wit6jbVsjcNiyAjs8yoK1tXq2m1FMgARvLaS2ykRLk36bbK8nnP4DHLDAJCMDXoC",
  "key12": "5okiEgStddbjj3Vn1yFVcaWHcy1gESWv5v6tZDP2TTDfeMQc6Pkzzcd2DsgbGXmiN3VJBBGrZWo2KioTm6EKR4uF",
  "key13": "4JJntX5ns9qTnDT2REwjSnD6rcAmqoWL6pTDXWVyiy6JgWX5Q4XTiPf9aT2ZKMehj8mtA249W2ov3XJ3nNx5b1vZ",
  "key14": "23TDbumEg6pBgBK7CyQtqZSTEKtAZfRXkq1miyXyR4qqDwpCRHXSCNY2mMJSwYmV8oJ7oeS12vkm1McyusopJY7J",
  "key15": "qbnoHK7F6im6cUDYv9WzzsD6gVkyvAz8rjhqBGGWhXqzYqvr7DUMzHiEuQk5XMBuyuSRttNyL2zsL6cUuRPNbC8",
  "key16": "4TNJxxfQ4Kpi3kmyz7BmZmXWq3aXyLXtzsaeJy7PdhhWnJJdkMtiBWsNLgYUL5gPt4Zx8JugVuYxwPWKVPBvTU2T",
  "key17": "5ThJsEYD1Chv3Vu6jf6G6bvnZiV8PjwXDvTkKT4KB3WKeZdFf6HWyUz4Pir5LoFDXuwXGBUteebYdv7UZQWCkfMa",
  "key18": "2gNn5tZRQTr92LjQxs7SKwumWC8AZHWJSfdviEEFWQ5Z72TWiuiunczPkGfb6MZmUWbYmg4Uuojyz4Nw9grLx8o3",
  "key19": "44cpSYerR5uTKX8MbmY9CWqpS3Vk8sv3uLADRBNxEYjjhGQTTHyYFuAqPQA3z7Dja818fF2LTv2h5rUusmpthPtJ",
  "key20": "279Fe5pK718M2pS1HbR7jy9cRhiYrUZvP1LDZk2soutEgWVdjq9LdK5N6GAaSYQeinBZwiX9z38dhXsrXU5V21xP",
  "key21": "4YuqP55zRnZ4AiCjtcsgogenVS5Jon36KjYDAcyNLm6PGFkh2sucHQ9Lzh9nT7uxWi6GPaNNQ89xEPASggvHV42a",
  "key22": "5VeBpsZ9fCDz7uiCq9CfdsLykAzRg9H3gSvfWrqSEq7BRKqdT5ya1D89YyvjkXXPbBXwcMdPeEvJ9tmzQLvxPh2L",
  "key23": "oUexWbD33et1QrtgfiLDMVBNVFtX4PrsUVdNVzffr5iu7pmNwh1w7bktGHpCoHSe7tdboUVCZCES47sJ2pX9JND",
  "key24": "3D4c6BYXv5RFX8KneThPMzKVuh3LrjvqWvQSGESKb7htaUtAn27H9WEzwQdziPwDCJXLCGz4t2BAq74Zancpnns5",
  "key25": "YxHHBMEZpWHa62FMtc7vmfPsmsvZ3czx7wYNrzcANLm2vaH18GdAtzFcodBBENTCLGBxUY42tinxvvPCZB3ZPBb",
  "key26": "4w7Gur8DtAd78zND2k3825iBiy9gjjYsDdvMiXsWXQcq9JdVsoPFiqGveNhr9vkFbiWueGRGM9B2ZzTHoLVM4dJs",
  "key27": "3BRJtXzZt3wrRK399z2V78ZkNhfn6ATKKhBWeVBvWYUjc6sz2QiSZ46p3G2PsjnuTLuV9MmsKkmSZBD7nAxjJweN",
  "key28": "5zMfgVVY6rQ84x5LS7VKoqbHenudTTeKQvNBrM3hMish4V3G6d8JyD2s9vdBTyjGNveFowxe4djBLQGb1g4KXNGw",
  "key29": "4wtLFDogbLeBmCZ7GnjiGhCtXTCMo9dJts4DdgSXgXSLmvge7oJCJgjtbEUYMnXxMnqcwj9EGdaH6XwZ37H4Zaed",
  "key30": "3zjDYY6i73T9Ba2c18Zr2gaHBwPfZ2q5wDG9hZtpRNAyobvpo4CgGq7tB6r5mpkaFt2jRNuEdUBVKCzMhKcZHDad",
  "key31": "4mPLe4ZZ2J4v46AUBUTG2U4tyZM3fL3HiDap9NLHjgqvs7BGJv3pG7KQESeQwYbfJcCbQXm722UehN2p9XGHNc22",
  "key32": "5XBHsSmu6HkwqrgkYXC6M9aSwFhVTqDM8uoXLoxoeZQDwjiaKeP9EJiZw3opm6SqVC38aZXoxF6MsvVwpavxgGmQ",
  "key33": "3GSiGBVJsb3AjLxNzWN2TQKB6WrBsAnE4XDND5HZVv2NACfUixKKH7yq2BHMsuxuUq48R5DtQz9EUbYxiNjJkY8i",
  "key34": "4Sj3tthypyedgLTH6Ycz1uU62ZqcEmi4U5aBACdxfotE7vZ7SYrtSMc1oGCR9Bh9tHavdc8tuJSPEDfviKUVstyx",
  "key35": "3XL4Pn9oeCuvzrEXKhZbvBTNNd1sGb9dR4ZCHp35TqNUJs9xvcvJ4BXNNnka7nqY32MzowCaGihu5ojNwMQCPk2T",
  "key36": "5Cgv91GfzShjLyBBE8pcgi1ATH72JDDrMf2QeHEffHEhD5pwGLQLAniJFon9eTQFcjhY3bm5Z72v3oY2aNpMTEra",
  "key37": "4PeisYFNjdTenD4Xiz5DQYQC96hvCmmS3Y4o9z1gzh9PdLhafxkprdzE7Zp4in8DDcRGDF811QSdP3xci2B6PQdW",
  "key38": "3uE8qCrhGquqapMhaQGD4dE5orPhbjxStvTYDkX5CUtV2V5E7SgiAmByihkEx2Fp2WDXTttwrAj6hX7Vf465ViEV"
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
