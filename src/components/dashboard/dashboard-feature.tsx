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
    "4Racr9W5cTeZMXz8PSqjDtGvSzz6DEB4s5NkDzrnF5DaEjWJVLK4tS7YTCKFyomP4DQnmbQTojV2khmDZURZknCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4emiArggGdFMsrT9DBfPLRn5fC3BUQsvzNx25RumWh4HrEZgb27XUDmuzbvnJhxYVfMRzCCedz1qXidALrdFFqor",
  "key1": "3xCtBxwtXw3mYigzwgkGKnwbdKmMcWnKeJjP2F6Dw1LiQnBPHt7fKUb8VRjMJLYW8oUvfRRjr8RUd6cvf4H9WBxx",
  "key2": "3H8NGxRGCJ18QvVYy4bHdJYqZm6T7AXuz1qmmSMANmCHbSdVjJHZyU72T27dyVvcEcAZstxKnP5tpG4WspbbFqVF",
  "key3": "5MGAsqBqsKa4hWU4wQhftoqakNMeEJPLPamGAos285e6ibz4gngarDn6HmreUnWwaMrxksdDBwbVU6X8U9toZU9c",
  "key4": "Nf8u6TWTjfsyDKTG217kdmC6HJZwicnALMvhd6XHDEiPHXAiMRyM1eGFk7ZmXyimkWFe4J6ecbSxEMv8MPt5iKK",
  "key5": "4pfKKP1rXCH9g4utU2711HVodETEEarh1Nf8LYEFv2MFF8ddr9y4ytv5m86r8jx6E6dgSzaoBk81SKVv9Nzmurnn",
  "key6": "4dLRo7FG1EiRoDi2FdWAyY9fuB5g9pXxaoYSKhhcPxb5unA6qLqHCD5f7Y8Do2FigmdYHEBgUfHn9hsm67jZwqfY",
  "key7": "64ZpsEFMZNp5EMEzRJU2SFNQoAX1gygeYL83VbtGU1DDqamqS7DYfnWaA4gQsnWmMEpJCbEb8uvKS4WGZio52AFi",
  "key8": "2DMXmkdwge2D3THtPK54CxK4pCQEKZot8Lw5z9uxvo9ZHvKrx7yUpat7nwnzAZdM4eYRHiFH8LucBfwvrbT5g3pP",
  "key9": "4bLuS6fMa1EdxGxs5bdwcAq65LeUdKUkgPhD68kHSWFgakSe1ykhHf77yQdVHbNxKzoNf7z28bpgnnZAxNbDVkj",
  "key10": "2hLKNjJiiyN4T7Jz6FPHujdQ2sEF8nme8LuKgo4QzWAgMHWybyFVi1HY4xvEGbSnPa423GDTXz82a5PrPfEsxtmi",
  "key11": "1eLGtHFMXN62wbsqN5S8CHz6GpVQoJfWvY6uJCeMMbSw9EKA8cXxapnRm7z8ykdfsArbDzm5umwe3mJ7anGFWbM",
  "key12": "5SGpPVQp8wyXBr79NVrVeEC8BAMTSNDQQNsEoBU3MYQBSbQ7nmnmUF91kWk5TfPGxUe9dGWZ6AQVcBqcBiHcQQ6C",
  "key13": "3Sd2bz4qMRqPAAs19h4iYHYw1iJov38beK9sBdVwmFgZVqG2L2Po2WFiTuZBA5CGXgidY7XpZchDhTFLf3ZikSBJ",
  "key14": "y6TzJUhbXGRgJtA2CNK2hh7yf3see5EMLm35qeHjhVwHY5kA1xPWCSQUBdDy6eTCvVczouLucwTkJBGiDzu3UHP",
  "key15": "Q1AHrpwRHDXyL6M61MNuauEYqtWqyhf4DpZ9p42zFvGHPYHSgLdzisL5m9JckctVRhamevf6hjYuRnBhCYnycfR",
  "key16": "4nvXuTFaWqtvAHBjSviq4gwKTJoyCjVRabXSuMkBbmN8y5zSMPkUr95AQrj5zP8Zckg9d3SaoK35M7ywsfw1b9rc",
  "key17": "34zFoGq19UWoXK3fLMGCXsmuS516heH7A4VTuPtXXAXpujcDxm7cCr9ijZR8aq58Vxo9wGafc4mHQFzKx1cg68ue",
  "key18": "3XucKKCdJp5sYAHC76HPUp9zGUbcScLXQnBes4EQW998NWC2aoXZb7xjNw5J9Hw2CgnWhqNp8PdzFMxU6uWL2Y85",
  "key19": "2v5Y6GTeVoj3kPTKJGpU58UAhmhDByFcgT4GMMd2xSUUV3Qj4e69szR2UMvEqUrZ4GDATWLLSGNSJmP32Xt2uSwZ",
  "key20": "4E4YuFMavFLi61xyx9Q5V8hEjwQ1JgP1ywqx2oaP6dmdLB1m1WogjhQsYXSuydbLAErztHjyUReZguyC3AugM5Nr",
  "key21": "hwvLcpb4Pq1kwezEUqvUH1GZurc3YMnvvBWJkDroR2UkLuTDWompbGmFjaEJDZsj6fAs1wT82wheD8cvDfhvDq8",
  "key22": "57MUR9DT32YTQJFSaVKZ4MX9Ze9rEJbMjm8MeBEVJPz9wNhiZPRJD9D6uCCvyefFk6nMYS55uXCXNyejzvwTtNjh",
  "key23": "3vsL7P4341cbCZaScW3amw9KyWJzpGHvNkTRFRu198fRarW8dUffMof4MxAud2VZBgEEXJv7GUd3KhMddHjVuYS1",
  "key24": "4c5i4vaMJsnBz6djtg8LzW9kT7hnFciWtDpjgVNbfBm5CnSef8iRcUUodEkVQ8Y4bDDTBi27wipjTozB4nEJGcub"
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
