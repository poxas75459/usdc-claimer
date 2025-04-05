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
    "2PTbBCLNuEb4sG9iyiQAHXZ5zC6wvA24QiWrGcN44z6ZEVGsZUgrrndUosCjhAkrjMWT9JSjCxsLpXoLguiwNqX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YBwQDBsZZjzb2UF3z7GjPyRQ7WP9sKmNzQNHsd6EbNBRMdr95eJdnqoJMUa5mDBnabC8PYHVzkdLeAhd6gP9p1a",
  "key1": "34h9c7Chvc73kHGTW5PNic57uRXs32VmuHXoJw4SkPGdBZZJYkGrrEjREsBjQnywPtzadJAp5hq9gePd8GnWV8py",
  "key2": "61zMFzX33kZtu9HJ79HFUnmdDNN5hHDMUDwQZd8WGYR2ms4Z5D3racrnbvUDg1K89ggyGezPvQ4p7qpM4hhzF6zM",
  "key3": "41fvGZyDud41MEZ4DpmHK3dt1NTEFGjhpa3Y76HKtCxbYha2BEmsuuCTmvcneUPqdaxaj5PR2zjyq3tfRigAyxpq",
  "key4": "5tSZkg9VcAbr2TEYtJ3ZuiJ3Y6qYUD4KQsdQV6Vr82t2P4MLRecpZRqPbqUEMx14NL8fnx7qJxNGMv4xxcnHH5zG",
  "key5": "hFn6aSUaUf9N6NT6yQbznR7pnvCNsz4qEtQtxQ9gHeriBJZaE16db3W8ftTf4r9jNDe4JEvtaMmPMzuQG4sQWYT",
  "key6": "56HnVySZ1bjwV1ggzvMhLgBoJvsbv8bjPeyiMSaEKzq9AM4SZiAW71ziS1HTroRuD2s8RxqC4MEofVZxTgzVdVdL",
  "key7": "5vwCG7dPBfhKEwiib298F1YsCWoPTumMZrCS2Xr5PCNtvcBfm53uw2PqG21MWDgGSD4CWoAgShikhd4NUpiA7sfC",
  "key8": "3JpbSH3EAg4CYuUMvr4WKC5uGh9csZMzFYmZKipozgU7FUmrqaJBwpAvN5gyxmADFzohG2uNreqexuFssrTJWwze",
  "key9": "4B22JGE8UjhDeecmGwwayssF76jUVLaFNJt1vsErEVodqJAAosL8wYy37AUyEnH7tuaEuG4geFcTu9cv7g9vbm6Q",
  "key10": "5HsnbfVHDzrwWKXrMx6RLPqTCzen2SLvQieLBVRjbaFMrkMokHQL7Thtp39t61K8DMCzaPQ18VrwAdF8YGMxUsDT",
  "key11": "47ez9Bc6DtUcwXD5qa3p358t7KsGPyP3UBBPHX8zaJCyJT63qa9p13SKzKxvRoEBsV5RBKoHDNeXcLkG2s2snQG2",
  "key12": "34YriFBjV3AZkZ8A6YFFH3SaGvboTJ3FqtfctQdwze3wjx6EvWntjP1Z8Hsn5jnv5MKgRPEZssiqcGv7ukagNe81",
  "key13": "2Vqu2Yjp1W7EdRWLKMKTxVp1WozzHqpxMBWzun7tUHeqHASjj7VaE1cT6qXdGRWi5N254eza4QpjAg3UH24h6dUb",
  "key14": "5p1sX2fgpSMrNiYjSmvtspu7yVdZd93fBiiQmjQ9RGmn6Km2FGk9KznQQA5kvwsNAEtMbsZGcoVTCR4XM2h57qL7",
  "key15": "54ik4w2qJWTTUzZkbrnzQqEUf85wF27kBxLcdeBgVQssrR4v48Y26F7VgfXdnvttWhf1p5aLPJAnx2EGr8SCLG5F",
  "key16": "2N5sstACgdbkPNw9d9Ff5NbL4fJjhsr2PUxJLm1BokR6rXKo54xrqQPyV99typuW9P8dpentWXuJMpYetaYXS41d",
  "key17": "26tgQrkkVLuSP6gqMBqhb71xr8j9HKyKng93VpJ3xSMcnDQqpaezGattwup5mYt32ALr1J7dmov9vcgzYNQz4kNq",
  "key18": "4E8aQwDby4tZ5ohKqXtLSq33Dv6NTx8oVqHDY513maJP5ALQZFkZxkVbesCestavsBd3FLmK3aRZfBZSn1Ka3YMu",
  "key19": "2D9rvoba7Yx3h7AqoHoYjPcjN4zAY5ARgADXMARpnmUHhy9f8c1vUka5QSv7Y3VV8QYpyYFvy9ABGDBFiNfpP4hL",
  "key20": "2vfbuds83mCGXSSCbvKRHfk9CXor5roJZP6XLc8tr1adVHh5Z4dyQnD757vViVGx822oefYpCJ3QsXm3NWqnFKah",
  "key21": "xpGixnsgzw2d3p7aexy2ro3CehkrYcW6c3gM1NuQSFFDfHinRvis9p3bZVm1xag1sAC724WA1dQmAFWALFWaTJM",
  "key22": "2oSA88NB5nZoH3USX1RDawB1eL2vCtxazuCeNjyKnbXMGD68DFNn32MwnyXYtz2ocEk7hr3nWJ4nPFsTmWZvxg4i",
  "key23": "Pc8rdse1zd9oBXaGL74e4x9KyB6BUJ9PEExBt59iftRAe6Qi1Bwunj6WSFDiFinjLVhT3yCMDfwodCZUAdtqJRm",
  "key24": "3GC9wJqXX1B5yV1NFKa1EiBFdnQgpGRh9rLutwgYAqYKVXLMnck9jWAh1teBMQhWBDkRiAn3Kb5KXzJ58Wbv7WWo",
  "key25": "5pky7fYrD6y6VgZj121WSsPmsoEchfRrKUkuvXVLzghtUcSPTmDv62Agmf2b74bLMabH4iYs6XH44rvorMt8thHY",
  "key26": "fLkFXiDE6TPxLKimwCEpGay3Ncvp6DmW6PsnWo8maQuJnpPZfSdXg2kq3B3353YXfvvAgZMwdoTBpdKzV85cpwZ",
  "key27": "2KJfyMhBtHMBk48m2vue4j6L4T7MdTvUdWNsqEtYdxeNcTE9mCsD8BvdfS7scXNCvkDCUC9B9QnWJwd4BWTwwcA7",
  "key28": "E2z8ECitXuTYPNRQykM4PkWqeo37fhUF9QEBb3iMydUwbg1fh1KjHhBMch6QntbxXKRKpJ3QZNN19buWF6cFP1g",
  "key29": "4rYiq4bhjZdk3Z9Dme5T8tFsnxCny2SRE3MuQGvAoHgay86GbeBWd8Frk1ukXq46HFk1JotKUQut9DjzGMGYfHa5",
  "key30": "5BGEAf9FjWsCkRKc94YC4b86Pzp7wJ7Gm6xJCKj2QCRYF7tPTN1DTcKSnuZse6zNz686Wtqm2cqs6hoGHGzzesXq",
  "key31": "5RgEGhGszTbbVWNBhrA5Cg4g1XQbxeJdsgSqFNHQsPR2bdUSTHUDbfudEdwjBC2CQCyQguhAMPMC2c5UVZzUSXvt",
  "key32": "54yvstHz5aMHDfcVZqSnEzCo8jAqk8YhGShLjJW7wbKGJHLYeKUfG6F4ZwtcCeHqQRJ4Q72EQGb1MiL5KT1ApuwW"
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
