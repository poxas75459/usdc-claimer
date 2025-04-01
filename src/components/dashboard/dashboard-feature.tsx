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
    "AbvBY8AxN1MUULYkcs2sY4Ge217nCRGMeHYC4fzZ4B2kNq7vmQ35TbB7Xnp8atFYhGwFgMwJmxSAyxAM7RWygn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YABAnVVNYApbET9x8uRDXctvTPX7dKK9A3HVGMKhovMcMdtiKD9JP6ZFtAUz77kBHf4C24JSW6Md27VdF2y8qMK",
  "key1": "2pgEBpam7aHQqnDJpnniinz5sCB3yhko5KLyJF2o1hYDFcHKT2ecpShzxYZQWujB1xatmm2c5qHTaGfwwTHr2AgA",
  "key2": "3TFNmmEYGFPgZWKY7p3rjxF6phwxxdjXYH8f4AbC7833UP1iZFkiCVUdqtJc7rg9vjvZnzYVrtheqrgYyYPB5XAu",
  "key3": "3T8A5gYv6TKzH1mdir2WR6JEMG8XoCiSXDQggbqc14Fw9rdR68a7N3M7brQJpugTmGAWuomX9xryU7ZcupCyRA1v",
  "key4": "3mKXjrfEcCU9jns5ULkzjYTCQbnPy2tDs4Dcgr8R2JhKyKdk3xgWtdusiuPQg6v2bvt6z5CjMwcRT5NkG4kvuGKC",
  "key5": "jAE5VaMaRRKj2FmSEzyHZAvswKzpFoyUGBAaFqQ5KUeaDPGgVgxLnKRNmCQb3yoSoTjgjuunG3o5n9zy33F9mLz",
  "key6": "3yTaBgUD4xLbTj9FJdUcfkuz2g89CQYY3h52SAHsxMMgwBwgkMECycrGPeuRkScedFRRgQyQbZKwfHQqwfPEguuh",
  "key7": "tqD7kQdsWDGXgr2i9TxXQ5XoNZZDhhD4yubscpDfKgomHy4etsKPWC4v5iARwrB8qBpTqyH7Gh1R8tehUxBcdBz",
  "key8": "2sb8qSK6pMnmEvt8XhLHzDBfGQgYvhLG2gvFAN7k3cag4miXAxFZLZgfin2MonAJTbT8dQyw2tPXDfWPXAQDTobv",
  "key9": "5VjqUmbdHykv1XHsceCanNp47UZmS6QHKhFA7sJqeveAucsWjtgS64HPqZCtTJmz95Lo1UMkUyywEQhmCjmnvpjf",
  "key10": "3HMVzRy32ofeLoT2WVW4zTh41J3JmtXWYpztkTL3c8L62oPWxt92sVJLs3ZN63zefRPzQxr5VFZgt478zpwMXoTU",
  "key11": "38SaiJfK9AZmM9y7mZSdDqhqsLS2virPXLmP4ibRU3pxLmLrS67MufrsPakQ5oZb97MQe6J4shtEXucy4aP3vqM8",
  "key12": "5R6wXkS1abZYNn2HYESPm4nAm4VCD8GZ2EBZP4wS7sL3VZR1k7k6NS9jafUxZVLjrYbiuUGscQruway4nLbySXRo",
  "key13": "2dUzoFvE6fL7oS9UvRQca9EySdCEuPqvcvH25q9BPhAPuYUQi6yPoWcQ3HSAzKo37EXut37YirGfamk16iY4dGES",
  "key14": "43g5ANQCJtCK7p6mgYJuRG7bVBFhf4GEGBQKPauHvY6wPA4ccanLwY4xKKf7A4xmTTnYdM4EU8cvzj9keqHKRGz",
  "key15": "56T8ah7EhZYq6uBp8NYMSDzHPNpbGVPFZpGCytAiQ1T5jQDjf4WKLkamWarxEx5uYf7PLGARbQZtdJNB14Ura6sx",
  "key16": "4KodUdRdcSNVGcbT4N3oycrLxejPWryYg3uLSwvR2hvC9J2JChUvKXT5iBk7L7eUhQcint6uPkbZySbMMLdammvR",
  "key17": "3o6PDfvB9C6wsXzk7gdJSctgdbH1LtzWHa8eHcpVsjmEfS1LHuiJQx1o9Xvb5wjTKrBTeT53CLJrsreSt6Qg7Xoj",
  "key18": "4XZtJRCsHhFHFbnTGndPzkF5SiuBfwRjkwmVbCzSCsSxiGt8N5ahHDPaVXMX3CCb8TvfbyitwzgaywpqT5FGwsbx",
  "key19": "3pHE13t2S8jrK6LBtTpKMJ6GiprpiWhDdAgYCeKcJ92ASBEbAh6zLZBm66ZfP5tdhtsSSQMNx6yqgnP97rc6CSnd",
  "key20": "62ko3gtoHqaJikLbkSCiw2xZ3MH2NT8Rk9JPVENYYqMod49trMb13M39gGJNbTfpoHq4pi22gYyiGQqzgXGGqhVr",
  "key21": "W13snx8d5KZEvWjbsnXBdhadt7Ga1aquVDLAT8vuS2ozzxV9KaqzfUt5XCYJXvVUYxjt3J3rvGrzLTFU3ME62wV",
  "key22": "5YH4KMyyKqLYxCpqwsgrSUydjWcun77G3BMZUBRQwDWWb3bNmzKj9GfcGB6kAtFBXjaN2CaGoYQLHB6S8cFzirHt",
  "key23": "xiqiNV8jvJKobrkrvPgmiXcd6GVwYbRA2uhFXCjFRaSMqhK2Q2C7ygfwFUgAdW6U9p265RoxBBNqvSLQBg7toWe",
  "key24": "3vydYEkoAnJRoxpY7mw27AWJshDu3mfzJZRSHK7cRDYJ9RwM8uGoyThoCTUCPk3SGSuv79auC4ATduXy8njnew6s",
  "key25": "n92VjonzotZLVXMVnDsrf1WY1rmSxLqvUe1aiTsqC8SL3C8eERqbHY66p8RYb8mrkYdX2fSP8Mktd477MS434it",
  "key26": "3BWgnvSHS1wzppbUiW7mzw725maiYJ6zPbE2ZevgLXi1fstqmVvvJT3RPAcKSofMsJgyJUzbXTgBVwrEkDtijWYH"
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
