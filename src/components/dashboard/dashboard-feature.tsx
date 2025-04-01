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
    "2LeWTCPUYm3EeMdKeFh4yEwBa64UfU3sooopNyEgx789EZHnCQvdU4M7cWjbDvDrYDMDLziFS4uv7xuZofgrF3Vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35iVCVgqKvVoCUsuwMTBMbNiQPZqZBxUoFJjhvD3X5xFui6wd1WE8NW6gp2zSoB4hMkQpY8ijk4tGkPB2tAA6GaR",
  "key1": "5rsMDB7wzNWsQbRBFKo8ntocYCnEa1DXgDRuYxfcSiMU4pBCJCpd4rmTZQrsS9dU6dnYxkcHkWx4qYWFRnNQLbky",
  "key2": "4h7uA4xcQJvkrpJeGnDTYcM4SzTKpk62PGro8xp5iu9PNDzQtNcmwLDXEZxY4Dd147SFj1z8U1UBwUoKgz9CTS81",
  "key3": "5typGXaCWienzmZASwZBpSyn9ntitzzMg6RugiwhcBpL9Srr2E1WCQUayJZwqxGustCH91HAaAE7ds1znJYxwN7C",
  "key4": "3mTbYfW7XWbGdcaRwtVi9ktE3RzHXjiNEqTMhZ9nhM1i9zVfFSRMCXNEXK6km5L9P3qsc9DsJLojNcMtQk5MoKqm",
  "key5": "KarYMGavEEKhdrdfeTDeWAZT8JsAyYXQyKuasTvHTZpv6T3GN9vepmShSBDoKCaKgEjCqbj4ojmR4ipxATyq2XN",
  "key6": "4kSofwQo4KcKUpKNZBn1pBQQ43Kfht853DXnNCoWXxKn3AJWaSwLni2toRwkHuwZLF8EsQBZ4jtiCXUh8EVAPnqE",
  "key7": "3xcvxuPa8x1HhL7pC6vjP4gLEty56oBES6cpdNKTyuF28w8EbLCy1BfkJt2mQyg5drEPiA84nQyeBFuoC57nSf5m",
  "key8": "5Y5BhKzjhVVyVwECLKq9KJoGNQNBNPTJStX2BG2Xsnc1uVD3av2CT2aLryzn8GdDcnJjSuQa8fbWgJq8EJ7viM6d",
  "key9": "3w3CBtjfmxZwnzTDE3VJ78kGWMk193GGW6vGCumG3uBH94qNM7y9Qbeoq9Avuj6RaSa1aUw21YiCPHo3nV7AXLmC",
  "key10": "2LgH2hSk5YmiNWMpMoK58AxELn3UspNqUsgyQzwgse2M7iR4MSNX8JAYHc3fzDvgJgEjF1pFWTPgJqA4YUJsm4bc",
  "key11": "NrV6QQopqSXZ8hhsjqUByfD5WoR1JscyuHS3pofoemTm7ap93peLLeTDCWFjGx4qQY8NMRdVFPhme2Kqma8ufZH",
  "key12": "52j1YDZDoXMyyqd7RmgarPrP7DAuAbC1Tcsn1mvdT8Uecv5xDGofaedLdCSWzTPneRWb9FpqgFH7Tq11K8ryHAsE",
  "key13": "3kFUifQLSLcUDpcpWVb6ay2TurVTSFiPrCCi7aK8WDcdxbfidx6YpQHexgUQRSoTwsJQ3Dx5TLhgmp7bptR8apLx",
  "key14": "4SJPQLubkroDbH63bCLMKdHPiQKLL2K7uTGudNqZ3unUJPP1oSPGFnAXzDRrku2sExneYvuH5W4U2dm78wXZkQBE",
  "key15": "VpiNeX2xfYrUFP1LmGYxxFn4qsVXqs3cxJr1E9yJdUATbSPhBsJ1djsekViiYDdodu9CRe9in24uJTmihji2fw2",
  "key16": "4rL61f6o3G84RmiS6uLCyxnw1rnVtWNzKQtXun1YH6N3mRLuBhaCbEqCsA8tbpmurqVt9HXarHjgUK4ZLV7njVCX",
  "key17": "3hRmdCCqqkc4x7xe4pNQ8E9R4R8zbhRjrjiRZc4XyVkg2p2bsHJxnVhFKLttCejzodBzgRpxj7yYZgECFvz72zTn",
  "key18": "44ti1fFicjM5sxQguTD9QpqQMeMbs6TNcfKvJp7PDJ3dProKvS4wwtXQuZXxs4VFY7rkWbvAqJWLwpYRGYb9RFR3",
  "key19": "LdUE3EWBPeeCBZfLhtSkcZqEuveC89LMBV6aBLm7rpLTLvWydWu5RXAXjtbXZqZj3R8p689ZfEfJhZNnwTUoh5q",
  "key20": "3syV4SKN35reTPku1799nCGBkRAoDufvbecYRFycGQcPufENsK9HVNySRhZJworbjmtqwRShy87YxCutreMCwNK1",
  "key21": "2sWKTRC62SwtbU3JBeJGMZCkBg3xeR6JFN3BHGCTPHDRxXNK9SwFq48g8zza78uYZoqATFGwAK2Rfjta8kTUgkLe",
  "key22": "5haM8bsPgZpssbYBgf6cofxq6kDod4ESutFCJypuoea6DFSEBxsLCPrx9i2V9Z5DLLKhrFD9A3V6z3Xk6MEu7AQv",
  "key23": "4qjQwwa7u1g3R41vEnkJK5rku1gSNtHvVu6nPnEQEM1DJhw1ADxNcz6Eei18ZpwkNT7nDHro6t3KrAFQA1XX9Gpe",
  "key24": "32g7kunFzJuYuWXwVxCD5YbgGpZNqD9WHDRxSgXYx8mjEyp2gaSPh3bDmB6PGUCADKmjC4S4yVGJiRazA2WwoVGy",
  "key25": "5LpWPr7oByk5LpBy6ApGevh5Q6LC7KoHDdrMmHL77GNFwHcVXYYFMrySZcEQXWRGgrvoGkxi88kt7hPZYFxRbqK3",
  "key26": "4iSSYSkMnu3ZU4aJX6vHZuQWCPhkuej8C8CUQFGc78NhuG9KnHMnD8gNLGWcn65McpYYqWYKFnzR55D4PspesxdL",
  "key27": "4jA6VTDN4QzJ7986brycTmngPZH1KvXvBrvXwvyL9gDrVj8PqtFfiHekFRxF4WrcMKnRHmUjyugYKp9dh5rz613s",
  "key28": "4HgyMMH8ZDyDzLgxNEcTLSkiYzaLPTrGQ8WPtFji8qwRqdXJ2auLtVDuRRQ8AittwatYgGEkpa3nLNMu7QCvePvp",
  "key29": "44VQxUWcPDMcQB12mPXCVfeXkABiGdppMMc4MR6zepHFC2EABtePs46CvWUsXPVuCQgK4R6qRWe242h6mSKuBT7R"
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
