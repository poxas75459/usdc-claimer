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
    "3ppWNknqn3gvCfSsvQKWFZhbUw82SDSBCite653tXJJoTgGkHxpXH3rV2M3vEY6jfmaqjN6qbK4bXa1r7A6pCPPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zsi5ckcdta8kPr2kwsZDoaykJEnbbxSfz9FdseuChxwy6h1xfTfJR2zacmTHFWo9MCdBgupWxMbRPp6kHwtmRaW",
  "key1": "44t7qqxJ1ANjjmpPkC84sf9zmi8Xjhcms6kR51ggo11rzbmeK9bbwZmg15SXKGGwXDTc3DeWB3VzDyreo9owDY5A",
  "key2": "3XbFxchbdEx4sFpaWoDDA1wyfmvuvCAdMcozig7AzH3ZvHigoRKnSShSNTKYzg54dSXs78nS1FmYsKnCnD8easqm",
  "key3": "ptrsnppSWd5jFbxPyjgV7VC1niYeSq6VAL6KM6aa9MUkmWRnr33Mk4gYY5TZhVcYZDC48BouKhwS12gu8v6kSnn",
  "key4": "3mtN7UW5oiGWeKfTbVLCW8Ssm7iUpdtxUZjcX3ARU6gZn9me4t77HcfB8aU9tipGJ2LiVcSqW3F6LY3G2E6ZWpDe",
  "key5": "2mUAftnSoVNjdyNoSPPChsvEEaU6axbo1y4UysVwqbNfmmjgXaJPj69r2gwf85jgi8GgjdXdarU9XRAiBLsX5LoX",
  "key6": "2rYT3RnJUdC5Nam8L3dAV3zwr8fykszMzawU97dNxTKo5b6nv4o4ipuDEwSZVJzWJzfFowEXpmxVfLURLLC6z2S6",
  "key7": "4ttSQYp7PpVXHsqt4pcmjF7jbbyyU4HUhiqpq2c91hLCJbR31JbkRwChQ6f6DX5QcPtbJ2ssMzhrcqLgiiFw1WiG",
  "key8": "24DDFoYcYT8KYrU3fF2SjrTSKrs8Z4w4Wvb2CGVQQnWVBcQBTKRFBQKiH2Hzxyc7mDSh8YcP61w6evxGGLogvvdU",
  "key9": "3f6ytvdyFhjyVcstJrbuZrRR6gYmvUKri1SKkMWoHYahBzMKyrMhhQkdHgjB6BFtrEXDTgWayoY6f89pfXWv2Pmj",
  "key10": "5ngVBoxd4rWUKZi3aPxzF2cKUfBBdUGfD1Ha8xSSnx1wawHzFVt3sLN8ocCJn7G2km7rZjZx5oLdFsDZdzjj1zYS",
  "key11": "51WhMZg4LXm9yPr39qVU6dCfdjtYt3vNWZzMPrfEGwehsruocWvKBqEPZQWCge4YBcgAj41CJ4qgwC6d1oXSCAok",
  "key12": "63R5L43QBNsdrT12rET8vCU495kwyA4e3pwzSE9zsQ1WJPpHiDXvDS1XqxytV4sTT2kvW2LHeWYwaWGAVZePunJR",
  "key13": "2FSamUXTHjSevCYdGpZLc1vSmRQcVJs8G5sYhaa72LzQn7yM3dr4x27Pjpm32hRx6iVEScGSkF7fzwBa6NoNYdTy",
  "key14": "3M2DU2bPkfa1S7jFacNwSd1zuz68Qr5KSThEPoLxmmYzyjo9JzSyXUWPweR81Fspn7Vv1DErhVShLqHAoQPfriTk",
  "key15": "54M13DmFAgNqDGMt4NtudeCNdcZeYtFmWKkP7wUSbZMjAhb6rKFakgjx39imQkwyjFiKBgCZ5iTerViJVTyY6YJF",
  "key16": "5kGARXnTQBziJmH9JwW8nFzmgrTk1Pori5W96Ba3iun9hLAniBFR7A1pCQEfRJhrUjSbfjZQ7Rm8EEqxBSoW1wH8",
  "key17": "66BKoMUve59fozv6BZWBE3ZoGSzkZpwSrRGauD57bk6jL8LfzQyep15WJRaoQTjsjpwoRgfPiYAARNTifoZyyB7E",
  "key18": "4b9LiSWGHMnmANRb5PCut3K4rFkHQxzd45zSu75G8KEA5tScLovQ2L8Qd5PRQMUUKbfcevja4qgQkzEeu6gbCo8h",
  "key19": "2gHpjWGqnFhWWaJ8ZwFqEvZaydAhkzvqBoX1W4htiWB99CWqkqzMcTCZMmdGtQGuNZnCzsLxF38CYjc9XQMqJmAL",
  "key20": "2NwMWs5PB9KPreNYws2ApgxbyCjWnW8SDU5NcozHXfyHtr9BqAsyyaKHSPZ7RxXu5ZvnG6D5Q6p2ccx1MqVVNJjM",
  "key21": "poq8efN1LqkEFLaEcSviTgBS1qdKnhkZNksXMPL962ZaMyA9KKbBtrh86LDJreJjifCtLhTU9JHXCNxr7MZhT5J",
  "key22": "526dEvTme6y5VkF5nbdkEcpkg1TN8PGK1wdF3RJk3ME2bzdSs2J4esqzN7mMkzK5FcLnh89TJcwEgS72Z7r1wwqA",
  "key23": "y1s9qEWnByGFM3Xg5xrmWgmz9VQfZUkZGLdxDWU2sGTXzeQrwMqhd9jAzXG6pyjPdZf9Ad7b11o84Cx96y2YAC4",
  "key24": "43esF1gbHcvxrAtPBShv4zs8uLS91hZ6nYiEmeSpaSSpCqhaiEgDxNgeotYaeqxhNkNnoW18n7XAJsgkXf8zu1nU",
  "key25": "fLqofDkWeBbxWBx3uFdZeHrQHn57sbYStMfDxGCdznfgoJ5Rj6HZTSeicADnDYHBNbzSGZrj4774J3nKiGEqrRq",
  "key26": "46Q8ET6D8CE7FFPCHWZgQ9HB1A9LXyeoyoT7kvNYVCwWGnMKiqNh4jNbbydNEfrnhR3psoTUnhEKTbpnsTNxnrbf",
  "key27": "2ihtDTLNQb1HSqVkTCNeF4AJaQtNtTj3HqHSuqWPKa8mKkyja6Z1YzuFV7keqqB7r6T9jW7yAutj55hMYaPqaMbu",
  "key28": "54kDnircxxggZmXTNnTnTM3o2uEiQAPbMvkYcXWE8yg19AxpQCEQgUKzJGBmCsoNkh7ojqs2aDu72dLaNLSFyGh3",
  "key29": "4GcQaqiYqDbqv4XYgkeLbpvCr9QqPRdTNF3p89qSiViUx5vqKiLQsQVfRskNp7tSQev36WhsQrrkCgPhBSwy89Qc",
  "key30": "4QxwEhEpxMmkyfofJHdsRshjFowTjG4fDridR4bEy7oRuut2AZKMx2psyKcnPwUUVZHS9LymuUh8KJHaTuaUyQdo",
  "key31": "66SoTnvQc8y9CcAgF8s1MrzFGKngACZkY2F9rxjuHEBKirbAfGaXoRDKKWqxGtNaFYLXFy71ox6AtnTmofgtSSMn",
  "key32": "4tRtg1Ruf9LrCvz3j154A6vzRtuWNYBELyjU3NmRd7a3vFCchXLZ5MSPCyRkHruyevEqXjs4SiPRd7geBdmTW3tM",
  "key33": "46r1yi7ToXvqMQQ8MGVnTdGxxWWSu8GnyZPFKHKnPaTksukhBRVsBoUrWqVZr3CyXJg9rvD3EfKzEiKwgf4nebVo",
  "key34": "27RaWJNVkzb9YuEB7D69qhk7XMy3qFX5qyh3ExCuJgvLQGNvPBssi5xLPmaYADWaWtZxvqw9qhP2anCHTq7GSpSX",
  "key35": "2JUQdAUMKCtUYiPGQwwtGRMCnEN4QLMyKYZfXo4n8MHEECALnzPz3qbMZFaHunhL4SV4L26fST8nVxPXhwPa2FKk",
  "key36": "2pu3uh2VWNkTZfFvDtRPgaiLd4T1U8pG44yWBUeuRi8hLnXSbYdSvQNoz49LarWGfJxzU4LbxSuZz67HHFRqTZp1",
  "key37": "4Tgca5t8594yKEKJBBb9GivqHhN7RvdDHg4ydn5H8RineM37Hxc4Wc5rTBg51xsxjScQBsXUtK8vBfCC5YYg8971",
  "key38": "5VqvBwcxDqn4mzs1q4SfT51rJLXFiRtp2URB6u816WUMkWGQQFgoPCt9nTWzJ3zKTQBPaE8BHMwF6dQj9aWLas3B",
  "key39": "44yeQB2rL4tnJX2XWP2B3RnwDo5z5sqgbTPPDvJDn1PsU6qpwxf9ek11o96RSTF8YUqU5jU4pE8iT2XrJWS8Udo9",
  "key40": "36LWTSUvsET6aJ29gzbm4ex9LHPNavk1wwXSqzFkRPuS7p4iGzXemidbzJZ3bMjbo9DCEErxF3PVdLefh4wVZedT",
  "key41": "5LxhynpitPvZyjZGqgEHbsUQPr5J4fRb1c2UHgiNJ2GmJRhjFiYinkhyTMKeNVsUESM1cNRFjYvT2EUHg5P8UmSP",
  "key42": "3Ug2AscXG5JqrFsEvMeatTsDSzW7yQjmxCfmv2378qYwTkZ8hEDutRfspnc1axP4u8aTQEhn5fkMESV2FK1W8r8c",
  "key43": "58nUu5Av2pL7nQTUkdc2YDNNMX752Ci2RpyEQR3RQxT1uZ2RkQ1zyKS165kBHe85ax9cnk5W7BZT2y6p6ZMKmVrn",
  "key44": "5opVeb5n21YtfsN3EzjoWqprkL7KvpNZmchQKUwDaHCrAxza3eyrqqYtj9iKJwHNsDV8RmxFVKb8uhJr3p4Zx1nz",
  "key45": "qqsorJdT4CimPNVYviD7E7ApVWBeQgV2kRtEnLqxc6KcxeMehx5QcuTopfdwkRg9b27PpaGSQK4KHwegWtvDJim",
  "key46": "3ktzjN5mcY2XbKJhGaDnFEev9P79WTMsDEuRJp48ToHNW1oAbcHhPLXT4hoPHkW2caVuc7rbgQYGD45gSjFsavTE",
  "key47": "4EfSCRnb8nkK99BQjHtrwxvKVAkTDxQ5gHom3CAn8Fakj2sNhTLdRnKGcHrMAHffh5QHmi1tT44TRCqoRqFKyQ9E"
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
