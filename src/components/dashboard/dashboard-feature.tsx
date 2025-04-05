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
    "43E898nTtX7RG91EJUnKmBAKBZZCobHgUujRDmC9NscXYQX98Cjm5JMTsCAvoWiJmVWWxSf4FVkVZ3dyTn4Y4ksx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HpBuR79jCWtU8k5xiqWAuhp7urk3WR2TkqqrjNTvHtF5pUUpv2NmgKDf6mz25qEx5VTDrVTMcNgQQzxaEjxJrvC",
  "key1": "3w5oCpK76rHWjYt7CSC1RjsQhhfmit3wLAQY9mrDotxeUPyEzzeGys4p3MuyFhj2HsFJYPHgfpHZ4YAjouNpzHQD",
  "key2": "3otWVsZcGq9Vm6gyDe64TeYYNtozhz5tPkkcPZffT6qRXm6wJ9pgB7vVdZ6acChJE1wtTJPRLXos2N4UpCp5ssNF",
  "key3": "5Mueg9VLx3PuusyxU2PpqTspNbitrQkQYEzshfnNABdFMwhYxkL4B3WSD5BZfom1dvhwpcruz6qnrQSWF3mE6cdM",
  "key4": "4fDHGXGhAuotabAZnia267oazU4zXdAs8vFLAi23he8a1bhm3Uja31RRbfgFUQoXCDb8YB9XExTe3u6oBRonhb15",
  "key5": "42x2vvenyBERU7NTjYH6Fqj3FEwahaYD9V5kh5qWkGoyHkTYYn87Qu2PtUkD6Jw3mTHKx43MLhXd5X5UxVxR8f7n",
  "key6": "3HS9oWPG7xAQmx3fjZHaiqnnWX5CroqCdEz4feXZfV4wuUFZVdXGRJmHBeoau2gQwAm4Czp8EXTUE1jhHC7NJsPM",
  "key7": "3kJA95bRVCtmxLXxxJoyYppM14ptQrYfXgX119Zj66HRM2YzJ8SK5fERZuELoDmusk2pXmRuJRiMmmP6VYikTW3k",
  "key8": "647rv5AG9iU1Pca1vUVx2NWpLoDgZqpcuykmsnEtrUBgo5CBaqZTKHy14v48uq8VnDK3FXZ7w8j3HTSGcw9RkZw3",
  "key9": "4JzCGLNTqpeYuxASzcKHeoQj5tJLV2AaGkmgLSrAYpE8rnQLTD6n3u8LwuNrKEuf9xNZQuyhJ1tP9wSFEfWiL4nL",
  "key10": "4DNSUAMJWP4U4oVWF2MYjouf44WpBuxd9Ddw9Z4DqTpcyvHDMvfFzXpCRMZym3JPgVg7Mai3Dri2Rc35nyH5AUFP",
  "key11": "5m8MW3yWfviJomaZ5DiZx1vaH4FDefqYPVMuA8YXDyyxwmtDNdn81aW96ctZJmy41JvtL3cVSoa7RmezfwW1ctAB",
  "key12": "2obzWEueiFGWaUiwvBWtynqJVQchXFe3BkCs82jJENVXzDyFH3PSqmCQoLqFgP5aXYVhLeKhMFTFieTAf7t4t2Tq",
  "key13": "jK29oqSCyhspZBHrCfw4qLp3aqj2A6B2iZQMai1V9p1hRd4TFMjqeFqjbtgHpr43Mc9TdNyyijNraT9bkuqeDBJ",
  "key14": "KrHTC1b4XT6r8YD8wN5CdCA28bRPYwdwj726jsfnxGeTAQS4YbdpqZGGvRJWWhfTsAvk3Hxq19yuASwmV3m5VGY",
  "key15": "4N8ZVywUZujXYiuFeWS9fn3GDoS6BdpWMmccGqXHzr97Jz1HrAePNoHpiwqYnn6CwbFH7W7xwkKMxLiCZqTdu6xa",
  "key16": "3pLZ3v5mpQWPf9wUAqWhxASeGXXBhUvHN8aLeick5ertDdc2gZMSCkKmyE18QUHrstG4188KKwTT7i12mreEF4FP",
  "key17": "dLSjqoyG6kSpz9ib1k9ziboHKmLux4UMBHW66FMqagfrN1g2SsBRwJNdYzFgh3yFZNVm849twzfDBAGZMvPP2dW",
  "key18": "WTq8CsDSsox2w4LF1t9WVTWYtYiC19FJJYep5g5KQtm2VcgH2PELeVCkFZisFktJufDZqAhcLeqimQLwoJCXWnz",
  "key19": "3DbiZ12ifANcGvtctCzqp5BrtG2RDouFXU1zE7wadEUsfjaMtBTZ6SE3FoekQwGumv7Uknj6h7wFKS44YErucfMd",
  "key20": "cxYgRDRc2dKmyMB5JoDL4bupKPEeBfCpUevw5pknp97XpwXKaGQwAFcePAeE8YVQed7zAFDvyiwti8VPg98kvPR",
  "key21": "4KswREM2r59FpC93oPrmyGUGtqdj9GqY8Dupg1rBZmYMF67qcbbzYhnPHkuuKx3ZM2wmabsoHzsxf8BYoqqoSss9",
  "key22": "2vSY3j27Hb9PASr68tA3tJKiuGxUfdneV3bkxrahnL3hKy1QHyUA7Mhm62AX7Fmy8tqrEimuv3UKiNPWUpUPZr3e",
  "key23": "5bpoUv9qcwfFZvmagSXLcMs5CK2GXmnVQdXyqsAbdheQg9Gf1wGCyHBG2Lrsoi3pZqxjgFVg38QinyEdNDPq1ygy",
  "key24": "5QSZUMXk9TvtFRqbG7DMH3zLvPCac4hnpo6P87BMw5Mneoab1qa8cYhfq172nerTK4fCfW7rE5jYgXnKGf6mwdXh",
  "key25": "aD3prSYVMHZKqooJJLKnKNwyrMmmCkuCqwpty2wLxhPPqqLQhxpkQ2bBULCtBj1UqsGafsUaPQJpPTjsYmcbh6T",
  "key26": "4S3A7LbQPNfCtxvcCWbnJCxZB7zoMsLSN3Q3YxhLXaDJfvBufMPjEj1rkV3JPwnvHmGfJd8RotBDLUByVXe9F8Ln",
  "key27": "51TP8ZGqwjPKbVSU2TucgcmEawtBepJWtGaQckvNMJHvv58dGei8nDg8j8kvxEXuTo2pgbJcqL6hiNsFaQjoVb69",
  "key28": "Hjpp5Zr9ZcCaDSPpaW5SVagQTMeQ5ptn8od38mtMdnaJ6FqUyTnCQgsUo5WrgJTdEsw97kQARk6PbLCGDczvfSc",
  "key29": "4Bg52q8ESbGsQFnxUP5wwXTo98v3wCUtouuct4CSA5KZGhcmiUtau1iDkoLJ1JsCVgyurk9nHyCjnunVqFcPRRVQ",
  "key30": "2BpWf6GnA8ovTppBxoVj6TH35hkgU7WUPq77L9rTQVjeWcCefNb5m3UZmiuAxaVJs1iYhwkj2vrr5iFjyiRiW4ys",
  "key31": "K4NPwN9fX3sHFq1QdCZyGd8U41wViEQAjPz6DhHLq5mRXjafy156eVnij6CFKNYJhqYbgm6BnLQiNWJQQuq4wBZ",
  "key32": "3RseA2uv35Jza1Watdzg8E7vw3pcMV2LSgrWJbnd9iNeoUwBNukn6USizdNzRWmcAvWk24nTvkztDki5Vg81Thmo",
  "key33": "2tPkcVE9SzxhpdcGaR3GbtfVP8pW6eyiGqvesfqbQMD6d1SzANjCkgaZ3iE7gad3DSkg8Na3TMkUUNJVBziWiFmQ",
  "key34": "4WZQkLATvp7DYwT4ApjugNimx3qZ2tBobWTm6d1QRHc8AAJHUw3Y7zMLik3Ae4J2jUBM5m4MY5ixhktYXbDLYxkt",
  "key35": "3aKV63BonnhkC4jNvsHogSfFYmLt5ngc9wcBLtHfFi5LJXEHbgLqhwNyG7hPeMnrzh2ZifNasCGz2pXi2nYbX1uq",
  "key36": "4931TZXm7HwkFNhYzR92PSYNayvRFrijZTfTmZ2zWqj4xGyjmECAqox3WMqiTYNTjEZRB5pyE9ZQFyHcd58e5H9C",
  "key37": "3mNKb4YtPbm7bA83KJ6aHpTbAHCPdK82PGUULjuaPdHr3tR86rmroXkNoi6n7kvkPGTH5WPCnsuvQNocqmWNPTso",
  "key38": "36Q5R5L3DminRyQZzWtN8zvAMwVFN2mRgQ3S9FX9NwMEkMZx8bZyDMJcThk5oPZBnqAWPMJnx4FxNS8Cb1FJMntd",
  "key39": "2pn6WJA6c1hvVgBecnM6EtnCmztfgyRHCWDRvnbHM2nhz9jAvJREbpXhmbSJ8mHRjm3ssEbPkbPTc76RsUWi1ix5",
  "key40": "3pupTqKne1fyzxnxZa9U8gd6kbzBwZTeUtZ53aX2teZyErk24taS6m3vpyLt8DKs6ahdBffuS2uXT3ksGLtniF6D",
  "key41": "2dEimJiefqGwmFr7orKWNJGkP5nzsWnYrGBZhzHX2drggoA1vDUEatSE7mL8PUe4nqb7yQnxtXMXdFNDf9MwbZin",
  "key42": "5WHxtJnQ3fpERMi5KJp3cRdoBNq3c3gFRwwaC3GEmWTCQWqA6hp3CuB3D8YHKpR7f4wDbrnfqDJmKGiJsobhJ6Hx"
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
