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
    "3qNJvGE7sD1ddVt39iVFMLLgumbLZhjm2FTSZog4FzvYz5gdHFr5zzKUa8SfW3tGvzn5sQFSeeK9nroo4mRJoZeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cyC7uEdx6bBfG5SCDmazQgy6WgQ9Jg9ghMwXcQBGLwbEj5Arj3JdGGFZX4QVkhrywcYg74mPLiWeNz2H1NzTPem",
  "key1": "45LsBrAAwx9sD5cWig38noJyuycgbvCEUYeac2axyFGgexvLxgVDirLcrfFqMSFUzRPat2fsFKnKaFvap5h2he2K",
  "key2": "4LFbTGec1VbUJFVcmCYcL7ToqjnvZBYf2wUZQ2mnzF6pVGsX184N4f9onLBSDKdcCU2XbtbvTap5UwPdjpvYPuHq",
  "key3": "5z6Ci2oRsH8E7E6pgeVCFsChnp7WSPvR3RSXSrUMWK5Pr8f54FGY2HHrbMoNKc4hZ3ZoDhGC5YKpYRxuthvGpb6Y",
  "key4": "4hMaQp6A9DNvCWzqnfnHywNTAeHcgwtVnZfJhCSTworqpnXJcu7wGNNrvtDk6VXHmsCU2jBFQrBdcKsoqXdH9q9d",
  "key5": "62qrifTCBAXGxRcVyseLLrbkyAKJejr1EVBLm7t5Mn8Cvv9apV5KeNCytwKieBoBxGmroLDYXeAbE2BRMCHS6kEJ",
  "key6": "bNRiHvjL3nFmQJEePCzoVLNo5NtXbJdVXacQMpVuMnL7u6FpoNZuf5S2HZCJgYzdbUoW55iSEn1VMNSpNhBWzUJ",
  "key7": "aXoypo8MeaDAJgYkpqV59VgQtj3wvArUynhG5F8crxL9vNpLpdwuA2r9X4heEZM27wZEBwAn2jF92469Je3rfdx",
  "key8": "4TZEdmjQj4fwURMq3xzQiGcRN8uWYEAwQTNMaYJKYdHpW74fzPD6rFsGPHX9y9Q7QsEirPsL5jJpAfmQ7zWJPxFC",
  "key9": "62xKpcw9oM98sYTsE8LD7oFbJcPGQmcuM8SYs9ghBf3nZg6AZfK7cJdqfLpeRZBuaDSSaL2hdw1KSqotcmBrvdas",
  "key10": "47EcQEs7YKjKhxxvgdpLc2W15ZervqmWfNbggLd8dGyt5pXUhTaMQyGPszwA37px1HyxJBEZF6WQEigpUZhdWuqg",
  "key11": "2khaPHDtv1ED67paNFcWJt9egYKeTdVtjAB4J5JcxGZLjkmJUV2FhzGdcEHCFooFrvvuEgBRPGg3jgQ6npQPvAu2",
  "key12": "3Ery97Z2oDcyDmQ9oRr8rRuj6CxPNfV2RdBvUqrxkpWNefaNNgN7MTBtDDpD91FRECKxsivoLFh8KXBJHMcwHPTQ",
  "key13": "2NUYQtoQMzYXDLc713jLSDpaAqLyhLjQnfABB5Gigw5azQDxVuNxMnTB5e8JWzNfnJ5KBZVKrtXAt5RRhjZKvoAU",
  "key14": "4DAF43PzeDENRBpKk1GZd22L2ewfp89Km1a2Nyy97kYpnPemhfW6stepWgdrnkgaeHkHQmcedLs9FiYzFRqG8BX1",
  "key15": "3QDYBCsEXi9vjYXuSzjZSW5vvgayFgZZVNwf6kLLE3QubPAkHbUecBKyG7vkekTPuQP59K6Ppw45Ljmwyt8i3LKH",
  "key16": "2EAeQudNrHh8xJtk7GL2Zu3SGLnUcyD6mvC76wVUBA8EWn9DPEJxTU4HWGRUCRTDMBbyYdWXwr7QEMjh6qNNFzVN",
  "key17": "4HHjoffjahh4e3aFJDqaBnN8CVb8PNqoNydS9ehKVWK3o53RW3yHh5KnjTYp6iD8a7r7z31BhvbfJwL6UpdLKbvs",
  "key18": "Rxp5b9WJ8tTcMDYkfQaHfzjp3uBsreVMEctueGexrNEEfy5DgGz69Bpz5DAeMi2K94FAQY56GWxcBDQRkmB4rmy",
  "key19": "33ULGPqDhttUstfuTzvxVq99SB9a4uAEqdDCJb7WW6tGSJFWbJwG6RSNwzmMBjUEhQyK2YwufPvgPJJ856STwQkh",
  "key20": "4rNiGhVnR6jv19vG5WeDMFZxbx3iRs5PVB1NxhZ2eVTfM16zSE9hbsvAuoTQsYEMxgBtQwenUT5SM83hWR8PvNtM",
  "key21": "3RGfjwy2q7v2dTUaRagzVYWpYpqLm7wrrcsQgSetduvqE9sPzuAvRzJ5VMy9EW9pVgAgyqujDdgYD6kgKrmvcZjL",
  "key22": "3daYHLt5mZDwqFbLpyAhF7QJ5qL2ATRZw2h47x89ZYdoqJbnV9w8irbUA8FFBFsUQJqVrTQZ2XroY9ovvwwoKzuk",
  "key23": "2daefBZp8MTLK5EfaAAgYzAgEjidMxCvmgyE3H5oYhZDgMMtyzmQ335FeyHzJnLzLYQPHXjZNAvjgDYWNPionKSo",
  "key24": "67mvEx8XsqvGgbSLzBdDeC6kC2p2Gy8613rmuwBxgrmXh8JBGSZgu9HVT11YnsDHtqWeDFAYL69s54ExsAnjyBU4",
  "key25": "4fziTu4DVfjmDBfXFyP43MsvJuyA3sVNwGEhC2QEneQ29eVAChXe8hCq9rSnggYEmHtxsMCiH4h5ypEYyMkZT2F6",
  "key26": "2mNxPc6ihX8PjMcTcYkJQ8GMJP7pbuqDnxRTLeuDpGoHBo8mWxyuPCspFzqKf8JSHEs4mG8A1AkrBnWxvReZ7s7S",
  "key27": "3sRUe65U89hiPmgGS67kKKoR3Gyi5YPNy4psfX1MMNJsXwfoffbzaLqmst3b4wD4eLtdFmeyXc7w5UmohW6ovTV7",
  "key28": "4LfeJqACwcZq7PFZtarfWxXsbqvu2koRm3CCG6VZ4m8sZxPwvx5TsGzxQjHSSnDiFwNqJYGTXtk4ebze2V2dFnVF",
  "key29": "21PfdM2vdxgVfsq946AUY6Meyhq3jspsLfFiS1vNzrY1gRcJUXkmhxbWPfGcfpDSG39hcZX3Xc7bBsWk1VXAYhrD",
  "key30": "RGoURGzcYq7LUkefw9YZ6rW1D2dv3v5bMVdnexptTxfGPXS9hmX194sDJYKaUNp6phj6kvFTihdQdD5ewBeikWP",
  "key31": "2SmAHjk19UYGtWyFnhaU8yfGW4Z3QbiF3kxU6eNEEgNFzv3nNu9fVxVdAk1dQMthNpHqiGLZYftXHB1d6oVdmNH2",
  "key32": "h2oLbSee7CGNibquTzqGb8w3so53mCPACxS2dk7SgCMpAarp6bdT9PJuXspxt4zxXo5CatHwnhkjJyL2nhZXvkd"
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
