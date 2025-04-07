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
    "64SVSmwyUPDQfoyCffDEiYKw6yvDAa6Fh4rRJs2cDtpPUTf9vBNeYAWUVcXL8d2BNng7cyZQwcPFRcQtmqtXzZWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQ8egbkL9TY8EaGeoanrZhSLqFJi4LaUJM2PvGgKmyrf1NYnQ92FqWgftn5ZLyQZypusksvDUu41jud9rCDReiK",
  "key1": "3Eji8SVEEs1b2UcAGniA4zVhU888bBfZg8ScUUKKVTiotHyLpP4KJMJEpE1VMraNA3T6PuNG3CYUg4RUZh923S3t",
  "key2": "5BdJhKdZU5Aq8XjEUBJ1p6dRyd4pDN4u42kA3uU1jBgBVubkEZKT88ew8VbBUPxor8iRFXFQC4cowx5efKpF1rSt",
  "key3": "4AYz88ZSU4R6AsKjuktSyJ4b8rk3E1c1vz5kypzxD4k3whftJN2RgF3f54TBWXYuCrkNqXCHUTZJLGhZwj2x9h9K",
  "key4": "4HHpDeSkw1riUKstBXr684pvatTfFSNJ3AvV2B35idHEfyTKKi1tJxAdpPv4s5eu81KZFqMXnmEPsy1KCD24gfjd",
  "key5": "2ya1r3nPuNcbpQRyceH6VsiVH7MfdXKxYRozTgSk1pXaqiAoPTodL48vJuhxHuSJvay1f4A1gc3YPtojxaNGpSba",
  "key6": "4gbn2sk4YpQpHQsravX938RkCTJbvvGkH6y6xtewZ6LpnDSihFKUERexNMT6MvPi6gv4VXL3tV8m5YdMi13zeynv",
  "key7": "5CADyDFHMNyQ3u7etcYQX7E9n2qPwMXrKkEW7Jrh8FroDidEnmtbNgq7oena2LEeuDTvy4pxCYnJndCYvQkWynGG",
  "key8": "4Gf6ansnv6Q8NvHu6Q3aW5rzKNAoWduka42EHyJJNES717x5dtZoa7QajYKE2LuDtqAymG1byA1mHLGXatBJvAwc",
  "key9": "2JhUtEoAZxA2fKq1ixLJn8q9i8ZJtugJqdV6maLEBCFoP183BJ14YAR7WhX7cirijX9jxTzQzogUU4PqToR45oMH",
  "key10": "3Gzi84BruSTpFaZMvC3G16dTFshv4U5YAJKNNAXRzYytHqegu47YZC34RBptBaM7Mpd6cu7Tms6LF4B4p7gHnZ7t",
  "key11": "iRa44omPGftpCe2zgjhKH1PJvdAZmJutQ1fZBWAJdDroEiHZ5AbcSw4Gym1DRxF91f1v5YzDaUWjHtigc1tJz2C",
  "key12": "3Hj8pPTKbKsRwwUPv4d9Hz4m85Pc5yJzheWwiP6dcWEq9ugneoU3o4c81fsnyc5S7XrERD3QXcymbHgqrD7ZNhth",
  "key13": "5X5XSKbBWodu4444ZhnNen5cPrbhzYX4JxrgcLsRMvFbha37e8b8ohDjwwcFNkMDYeHAPTS7fqUAxk5t2TpeY9N2",
  "key14": "4nGyJu3e1vExyJ4NfSjEFN5UryVz5VFtA8ujvTVwbCyxkhF1Bi7sH9LojjpBpPFGSyN46BT9jFvFW1RtsWrfa2J8",
  "key15": "LEL94ZQfves7pdLfB8Yaj2JC2619bCNKgUJQpYYaoCwFvxuHhzLsAgV3rdWwJTHZSpSKpdtCP6sK4s7g9MZCcUb",
  "key16": "5dvXpCRkK4FLt9fGiBA2gAUi9PC8DK1LvqpCpfMe1zCuuCbbp2hUfqS1yyCeVQkpdsX54uutez2XA7Jy1xaykhqz",
  "key17": "4ed6EM4ikDEisArNFgffwcwRiahNwQNAzuXkwXe9cBfM3N8vW4hX4TAQrURtUyKVVfdmxFejp6WuLGmhE2wZCcth",
  "key18": "4gBD5Va1w1qeVfjZhTqrvzAF865RsDuR92f9ja9JKuCitgK47DkcMccc41S52GaFs1kbnTTByFNN7hcoPuJab2Vn",
  "key19": "2qL4TRF4NNMJKJ8soXn9u3vLjQvHCNKybn77QDZSZHovV3YoThWrrFFLChSXkJ4bhPSqRFLP2zYCcpE7h7dCyQf7",
  "key20": "5ePeFxxF2EQ5sEn3zaQ9DQJS4e2xfr9Nqt3jxee6VN5AzGGFd3Z8RmgbpK3L2FGmLYLvza5nvSQznoA6thoVrF6q",
  "key21": "3ofHsZLWpNowZMHxhCjCirD1T18f8h6Rw16kAnTqLPCpaY2TRUu7QJobp9w4TNABm3ChDc3CyNg4Huqi6eCk14Lh",
  "key22": "r7y3kR2vLWrJKdeCRGAF3di9CrhV116qMFnrWpdMjTWHcWX3Dj7xk8sDqDsvEsanfs6SjedDjMjntz6RS8KvT4d",
  "key23": "uagb58sSyXUGtyDMCvNcxYtbYLjYDP1SW5dfb4ivjhigy91Tp1MwfHrxJYYQvJ9ZNJ1JXVui3qJNgrPQc66rwwH",
  "key24": "2erKWewA87C9X8ykgdr7bX5zBYKfv5TdoPNQgNeAToWL41dKnjXoN9mkH9mYXxxPvaAQAeQypmJ3NfXrvcQVxt5k",
  "key25": "5qcCgPU7Xn4MZhE41grUz4ELFFVWbdbRodTxmMRyLkJ56NwPcfETY3sUbWAwFtXByjLSkHjLt4XqSTGKiCvkseFA",
  "key26": "3pPestiLqZT2wQ7YLZmgpL93vz3a4hy19nP6nBbtLUemXqiUCSKQyFicp5sE426J79bWaDwEN59mBojrzychfTLC",
  "key27": "3W3gfshvG3pafdQnQim58nfTAJkF1jytY7J7eztEhnF81R1iPzmgaEkCFHeM4ckhatHuvePDriJoBFRKDRqT2253",
  "key28": "5mMpARWYh7WNSks5A8kDjwrmyYTum6ybbAoTLVE5Yn7469h9uyYtaeNgc7njknGdVsJaNeKJV2KTrzEaPKupR4fj",
  "key29": "2LfJYegmbERNPCTY2BAJ2BfNPVXiQUnZXL2jT2QShwcrmDRLmtFz8ZciXmGfHz5wvSPJ9Cj4V3hVqyoJuqZiJnxM",
  "key30": "4GBuCma5iBjp5BJWgqwaaCZsLqTYacauqBeVcQam4FPiKY7wF5xFiUpE9px8RA6ri9raqF7cXM3uwjQr63aBb7jw",
  "key31": "y9iFQLMaGoNciTaKJPCRhFsTKq5Lg1uZoxP6w4D8qW7fp1yQNRp3u24HKrC5FjAVmMpr9cHCPgtywqbTwgX1yEH"
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
