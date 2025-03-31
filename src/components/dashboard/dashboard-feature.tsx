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
    "3LZcE3d5NGLMbsFnPVUa7E512oyMkCgU4nVUPpfdUAevmRqVbgxZSwveJMujULw1Ufiv8DaYLpKMrAK5AS8nRwCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfvJ8xwUXZPcGnbM1yFh546tHMn71A2fnLSp36s211Gzi33CfHtq1y9n9PQqpAR6gTYpfsugDvmTybCHGuqjkfj",
  "key1": "3gviYgDWmVtXyhL5hiRRnCKBsZqbrc1VR7wte8KuyxkzKyoBcsT6z5NbV5uJFncC8AKNogF8K24uvzfVfZwK9nTM",
  "key2": "ioRV33amezJQUt8LCP9s25mN8gYpz3kYR189Je31mL5N9V2ZqsJJ72V5Yx1hReaMATW2C19J5Y6j4yRUb6FmRtz",
  "key3": "53KbVX89gXAVu5zusyfmSPTehZPSxf7d1zYpf4uk2LxcgWhfh8iKg2LfLkhKky9FEKYL8BU77LLLK2bWFALfi9WF",
  "key4": "5UyZjxmyCWkwBgQAyYv3Sqvde7EfKs4DvANw1vUgu9aXzT5W6apj635SatxTwrttykyF5d3VohzhJ94gYwwErwB2",
  "key5": "2t3Av7UiiiDguUb4e2Xsg2ma9Y8PTDNKE5RrhUh1AK9yQRGojswDFR9MRaRdTT5Zta7PMnALwomDCzc2SvmycJ7f",
  "key6": "4gA6cLQQJUBjYJo32i3rCorZqU1gWx8f94AhLC68FqafjDiya5Ryth3WHD891ZtvuzEDAZkEwT9kfdNcLjHD1jGn",
  "key7": "51NuPAgtuS2Wv8HP8RgLZ2xHWswRpNxV3PC7XqvFp9xQ338ijNpo5xmSdNU1KVPrpFxMqMFsngjiWmhQU62F4KG",
  "key8": "4wy9rnF8PpnRQQef1dDEB7nBo6Ynqd9V1Bm6zBWa9D9McbNcqyMh5JkzQjKpbX8VEemThYRFeFS1Ste1Kn1PLUiK",
  "key9": "5yTndm762s2BS5Vrx3cqCo7kzeniwCVDWxhzr15Z1ed1CowFpcCsF988Be3rbMPYYkz1wZbqzT7eZxXDN21ig6wD",
  "key10": "3MBcAd7RKasFzfd3sdEoXgNqhvUhA9Dr1tyeXFKVvquGG9LycFzccJaLbhtkUXN62tMo2WZQVt2FeMZamGzn3gsD",
  "key11": "HkF4pdwXPThceGkDxkX4m43UbWpoGtw6AmABsYsNLY7e8j2nmQe6QJqK744HwwNDsTCr6aAsCJsDL9FzfLtZ1hs",
  "key12": "4bd4F6WEWJL7yz6iRqCaVWsXSGjShu1Ec16xqEXdoeiKKWsHUrF2x2eCsv2JbNakXLNadsPf6yVTbY3G1qxjp6XS",
  "key13": "5GTWLFN9LA5NtohahKFsXqaojVbhxoWyGqH7vNSRXNX89UhaTdEJcBraA3FnxQg6eRcQqZw7BFYSM6C4sC1YBmLm",
  "key14": "oskyEX2ver2ZS4VipWnhsxY5sk1FTLp6479FuG8ukQim9H8QLChTmBFT4zcY42NKVdHQ9uYXaUmvgTLcRmbHmzF",
  "key15": "5YbkU23PNpooiLBn9yfqud6eCVMseqw9nBUjeV7j5WJfffKwLQChkphQK8ax7MY35s6TzLgAWNrWRs1JTB31pbiX",
  "key16": "52M25nJCaMRCRo9d8T1an2ZW11xSnHd1vYnSMcnSMHHR5VqRYL7nSD1dJkVWQLjUh11uoxtaxhtSXtHugeqAohna",
  "key17": "AUvdsfWFrafPJ9NBkVxevTX5SxPKneG5jEBJP5mfdTMh8qNj3owY6zWsJXBcnDg7dNnk3Bdq1V5qNPb68EcnP6s",
  "key18": "3bAKFJvVBfjN2yV7uy2ND5To4Rezbw52MaJKQ1esGTtprRTD3fT6A6GRoaYma3L55UGWXstMZqo4Mwf51gyqy1hZ",
  "key19": "5xZ3qTGsYETg3GwNYbktvTpFF3WGgT5XwQZQVsNAbtLjggjgbucQ2VBbVQTXNNuyCVZovNdDXY7NeDHF8xhqSgwG",
  "key20": "4k1UqwR7rsFU2VTS7q8MofScNWTBUr2kjHB1tMsQWjKuUsdUqSgGZkmtFHSYcFKNQeGAj9JBP7QJvcnJsrD62Ct4",
  "key21": "4pCUHKFPS6tmVYJURjyYuu4cfKj4xb2sSwU4qBxi7Ev852ZVwD1HhArgMppNrFigmr2eSDyz6vvyZv8SHqaR7tMV",
  "key22": "39fgtyVmYERfSyYQH2GGhoF1M7FNLJm5hxpDJUDAiyUtMf3jHnHYb66SnUPgEb61suj2bfuyrhKgoJcDCbZDSvSu",
  "key23": "25eXgyigSrNhi4zU7iB5BaPxMYospDPJJiozPgzMkTP9PZw3UCjroc3EVfoKEbX5nwCrVDCu7Nt8awJkqFNWCF2L",
  "key24": "26TnCdpQcUXBvpr9ajFiK9BoZ7m16pP6BhbTT31babvtBu4pY4vrSMZ7RhQr16fpj4uqUW8HYGRBiTmr57tXE7zN",
  "key25": "4jmywHAwDzRsZBSoFbzHJVHKqdK9BEegs5QZjwfn8JYtw3ndMFzBs5a1FZR1NNbf3GdqRtbBxVyfZNrgZfjbXZMA",
  "key26": "DUuYKG7ejK7C83k4Pt74X1Ev3F12qcwzTL8McTscS5kqdgSVc5cwauES2vejFskX8muqESPWCQNtsmGjysFU4P4",
  "key27": "2PsDStvYYG5JcGKszdRxW9pnaE4ELKY5iQVgiZ131C1SPrsGAJ6nLWsoWnxX6w3zK9J9YypTZwGTmbq1kfYTc5NW"
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
