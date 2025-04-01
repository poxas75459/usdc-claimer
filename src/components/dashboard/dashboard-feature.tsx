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
    "4czWDrWbSkhfbjBtszAcAXQECyJkzVWncFNDKGv6iEBRXS6MyppBtSRwnfWC13HPUyiqCfqNrGDcb6xY9PZvxmpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "enhcXPbchbYaGvBxVoFmhNYGe6qb6sVbjk1pXm15DM3Ln6Jnqr5sPGB4qe2njBEAhPA6DNYUQrQHePKiatNXYiR",
  "key1": "3mbfkgBRHvQZjsay7JgHSDwWWDuUrT4M5bePpyzW65rY6RoTeixqvgBJ5CvvUdKKwwtBxcwSFMDnJbnUR34ksn6a",
  "key2": "vp71RBrsgoi35wQqaQTxAQqvXM7mDSoB91RR3pQ3AdDk7hhcitbHuztGhyPG8Kjui1opg12LGVdxtdVG8yFPAre",
  "key3": "4G4xD4eyUAHohMPdfqE5ZwAboLx8iUWcL54BcLDYtneRYehK93hAQRqkZNnmCvfoudH4TZ7icxbVtY1E1V6VbVJq",
  "key4": "5RcW1zZ6hCF5am3LqUCfqJQZSLAH8HehG7hPtdzU7XLHysw7F4gLthF4EzhRNEipCxTUm6YfDQmL1ajPzw1wuzZw",
  "key5": "PHaraMzhsmGwa6hHFwu59C8MjKMG45Ej67aBZpG7u3gbVU5qo2AxshRFkyofyqxJbCeL1CP9AA1Sp6D38KbroDy",
  "key6": "4SngnHwbZArQ1EooH8cfbbwPcX2NJxbVPVwCeccc2CdefMhoAqZCBKUSgGv5oyF7VE2XpRkFWP2GUnjj4hiePjES",
  "key7": "4B12rfYWJ8pXcRn7P3bCBusdFFEP9sy96vSYugfwPoSwKSBJYQZxRZMsmgA1zTTcdhB3skn54YCa6G7b8GNqUNpc",
  "key8": "2GE8L3n9oRsGkVqRLb4jCtxQu3dQZxcXQxKLNFajQDFLaFiwS9qXv3DA1Xcj2akKXRVqCRaa4oKo1VqRP8U1RAJC",
  "key9": "4HY8YY45xQwnCHAjQtKmcEkexSzY6E2EvLRrSi5cGhwU68PQqbiGyPJ9QxRnwhxWNVJbYknob3YwhSueJwgbeqWQ",
  "key10": "59UqFELaH8XwL1XrPNYUEQTxi295G7XhTa7SxKhqLwhqzfQEq9KSejR7JuthZcRKH7YEvNn8ospuat3jubdLYCm4",
  "key11": "5UZFyDaAAk5222tRhfrqrtuuWKrpBJ2Tb1XfWKxumPJ9BuhyxeJtiApGeHBQd9pXMwg8seGzwZPNmZHZo1ius6Mx",
  "key12": "47nL1fbQXaRsgUp9LaBx3nPFeM2ngEzvuDtfQwBw8vMDk5NSHnMfPhBE5zv7TzBaR2XnPNbFLqnEVD87WrB3CdYM",
  "key13": "AJ5VYhbGWvxsdZiwsMsEuFojG1kwW2rHTyp4ng3KsKtSrTrgn3x6unHPgPpBUuEgDQcjDSYo2WK1qqxFj5Pzxqf",
  "key14": "57jcYhVGpZuzzD1g4zLzeF3cdnmXbjz3kCEYvzL6MwySCFxFuEz44dBk4tgcTyxwCsBpMGdesDaJLyNrMbaRJjZ1",
  "key15": "5y5UgSwPr4ZSQJqRdBt1Ca1r38MGc4LyBJ7n72nBRDCa9J354WbvbWs3V7vSbKD7nnnsVGug4finJpCADKNaayhq",
  "key16": "4qtHSJTCKugrPr8BSnC2hGSXYis12YzcmKNwb2cNeb7MsbEcXgjX2vwuNj5s52d33zz4xaYkb5VpvFja1mNgZegx",
  "key17": "grb3jsidbPDmhiu3nGC9PgMLAQyBqw2NRAetT1ZfR6DiaNdPyvKUv8vYJU4f152qtiKQqSumeEscCGKsf73x87g",
  "key18": "47fboRf4xdZzT4XNa3ByFQcqYm1gPpAMPbXRzPvVSurUEGimzcXMtETsbuFXfDpzwumpwfuMv7Xx7rUj4chhY49V",
  "key19": "49dsMajks4C6NaTKgcaqc6qgajRjqbfjQf243KGbzc5P9L8oqSjhiRRV8a2uKzbCPozYKo1GYyYi8LbKabYn3wMb",
  "key20": "zD4efoUrPEVzVn59TGWqTjHzn4Z7N8p1WhWZktE9S1BvUU1KuwFzi5ou6dgfS3NwrBMi6wPDvjp8HZVt2joToK4",
  "key21": "21yWjEXQgYrhpgAYCWYx7mNvZP1zDUWQviNvxMYF1ULzRc9iioB24uCL94yjhYz5J6yja4jFLKptRRKo1h5hdZWa",
  "key22": "4w5As2y77ep3QNy2dstbR3cRmX6ZhQzk5tvi79QokBCdah5nyTXt2A3G3c2rVvMc9nfP7BVRSiKr59Rp6c7hmDth",
  "key23": "5WtfLVDS8XTzBDB6EkjLD4mcNX9XyeageGNjLtXaiapxp1v8gJWGVe7xQCpRRLbgLETbzUaCVhAZVX16eGwLWipu",
  "key24": "22zrveQB9q7zHpFxSsygSyBcoK8HUXXGDu1kzSHvTofku2AyVEE3eGoTzuZx7zJA1J8FLnf49GJbcvU2hU26fVF3",
  "key25": "4vYyG9tuahsAdDqY1saoBNvjcdop3Bo2NXsbYJetmWSHSJs6FVt3kS8jLeWwAMrZrWf5eidSuoxocRbRfoFhisBW",
  "key26": "23aFAseWVbLewicfwbxw5R7rWBTrCXYud983G38EKL6Uw3nvdbKpGVofiQj5Krm5MBtDrQdAFQXaMQMzyrmXvCB8",
  "key27": "3vv56sF6VH3FzaqL6d6CrnSh84KdeNAtTbFGFz284PEKU3JZ6nZs8xhj9QkEaN1hKxVYGzNdfGWWcu8otRE3HMZZ",
  "key28": "4AJmLb6bHF8L5BTXVi6JGSRPCFYQ9CrSh9PfyXFv8N27CSTVGUgrACZTcsJBBmrq1EieLzyR7r2c8cUUKCHAdjQd",
  "key29": "tjV13usHJrxVtcTMPBfDY8xY7yWg8UtRc7uFo7SBNeMxh4sxxJtcygNpqhTHUBox8XGAUMRkjB2AsEa2M43YzS7",
  "key30": "2VEXebu52u1C2i3oqHovHANyT3te2MuJ5RdddGiNLPBYbacTqqEvZsqrVgTRL4WzFwf4Uu4skWkg78kfPiL1iFpy",
  "key31": "4fjS3DooPcSARFA1gYyxYmeKedqrnH2qRPQqdm9Vg8SFZ7hbFWyph9VpZnbmhb62n7zXEHSfVJA2Pe7TBQ6Dbjrj",
  "key32": "4DQWQEm5APsimzbDNr5iHZtHc9RZpbs2jXnNCaEpCrYUbv9oJru2Prrd4tahQGUfbFAHUM62Km5QszL67imYUJum",
  "key33": "3nAc1FAW9yKC8p8bdgUJuauXNYxdzZpgsNvzGPnqmJWcF1iPWUHKz7rhBF9i7kGoPWZYYbEW3SCiDZFX2tMEh7mu",
  "key34": "4zqDYabDWXm7fKhmygcjabyJGbE6YJKTs9wyuLwUZAJCVFwDfqbGx44zFgWjGDhevFkPtVbU7FXw3UhW971G7ukj"
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
