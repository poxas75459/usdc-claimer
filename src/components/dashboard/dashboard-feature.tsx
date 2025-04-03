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
    "2it8sY9khR3r5AufqWRkVqgC4DHSPNDmZHxJTo5oKXHGjy2gGRQNUGrNMkgaws5NCAyACRmWZfbbmg7gMcJP9BGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnkrebWBEibHYu3cZmDfjH6eGG2ZNVehuYBgjk38QStVd6yU3m2CnataZ2uUwgrdWi4tPw11MUDLUWQgt4LMyVE",
  "key1": "5jrfVxuX7gNnG25b6uHQhKvafbtasbMAvzyFCBwB5nRtrTwq3eMf1mMtMBijrDHn9kXgHnNEGqyQ4AGGB4V8mqTF",
  "key2": "2FbfP7ZkYmPph4bhArLVqsbjALYXkcqhr7zbBewEVe9LgQXDoyZUFjsmpdCJco3oT2Xru5EsjNSeXSfqCcKrt69P",
  "key3": "5kAZKJE4o2JkDXWRrJwNbZ1ASFXHh8ZHbRpnjeXUQuWskcLpzuHjCSchpRtS7YuaCuKQm8WeZELBDsrEwPwvzq9K",
  "key4": "2yMq6Px8H1KQzjGahVXPVAq8bQbCNt7mr2naRDXKcqUox7tDYociNM1zd8ccJicueiisqPu73iazLHKJeA4iKhsh",
  "key5": "CBh515eSxPkziNpanaP83DVwdVM1FGsVKRFNkWakQFDFmqZSBkaLPuWc58PWgyFuZSG3tWQgZAcengn2qArpaq6",
  "key6": "2pPuKS4ELrmTZTLCLoobJtzE7AS3RCJRhqFhwcwX5FvB5x6x6FbDnUCaEwPzBYCWGFC3jx9z8xaTrDYzX8dj6UAU",
  "key7": "3FkHyedofy5MNVPZWoKr4LGkRiaL5NTY1foHsiY53avsPu1Zkzc5aFGiiMex1HCeSG2bS6BdWbnaB4qjTr6w79LQ",
  "key8": "3G2DecfTR2KzcBdnXTRqpnKimzdxZhYVWxZA5Wp19ZHdG5MTt4K9CGcyXPz3BKUgpNHpFtqMoq5AVKjudCxLehUw",
  "key9": "2tpsiGRMBXKk24puQKVuXWg7AgthuNPXSAvFeDfFkQGPsJVRxAo6EZVypMKCoqVA67yx14YpG29kjC68iq9D7qzU",
  "key10": "Vb3JqZHPB518cB92pMhDBpbEp89ehNVqgp9LojJQdPomPsajAcM1B7xdcgSqMe188sorUsw9CwTsApR7stdhZqE",
  "key11": "51sx1y1s8EpFpEVSa38GXDnGSzaQmfATLHWHj6gHBFxrn2PKpjnaEGSRu1LQsxuDzrFnyoQbBRL3WViac6yp7qE8",
  "key12": "3smouyGfYWQNz2vRb26X7g1q5469zhZW84nbDfJLdYqhcrSkz9RjBfNfrKLh7AkiuLfPJ9KKzYeVuGGa99ao3MbW",
  "key13": "26nNbiReSSUK4KdCXNNHiqLVu9yFinT4sabevxufgg8F4wBDcgfZCkyoMiXrDne33BL8jt7MCLDiKuwqwkT8a3c2",
  "key14": "61yixfqhcTmZ8rkrfNqLWtYTMQ12A9PiTotq1eVXZAyAw2q2NeDVNN54WCuwLKx8H92WhW7yFzcbtzDfFV4cvG4h",
  "key15": "5dwHiEDpXDyrRygFYWMQjgWibGvZUj1PqfUjGWXiiPfmtwA25i2zPkAy6dmQguey9G21mkvUVenBKtcaCwnaNHRn",
  "key16": "61uc9h1pFHcQbPpQBgJHzHXyf185zusoSFQgbnRCqXjVCxogeNqnCbfQqcmYwwwhhKxEGUx8a5FoXfLKDypo2Qj",
  "key17": "2GZ1WK7itrLB7Q6JACkegCr2j8Z2sTNjTawKTQhVgXTqBH6SPXNfjQGA98LqKP17EGPYzrttb1EKnHF7vT8KLuD9",
  "key18": "5sEa5TRmCDVPpFwmPP5Um1SMZCUhQC7mMjMiSzuQd6o1K4RGafDLwg3SoHQRGQZq5TwZLFZg61yh6nv3prm59Vtc",
  "key19": "2UPtufyVvzHga1EaGgXaHTnZ4e6nizN3jLsp5TwQCrPJYdAk87qjpLMA8V9FWSSJPoCsUoc43fanuDNGKFmDP5Xr",
  "key20": "25rSifDe3um1qdtfpvXG87YhAShmhrKsTGZKATMAWVMnnA1kAyaD5hAR4LEMWCzSLirdVcAQaHfFhrtGRTqDYqnG",
  "key21": "rqCnpC65YCX9at7WqEeHd2XBDVQswaYmZdGhVD5mzMg86Y1Uw9imzVNYSPV2GGGS5zwNTWMDVdDLwcb4e18CtTk",
  "key22": "5wGNM3hWDLV8Fd3ymkEdLXZ4XhZSxmEaii5pefY9jQp3CqEk2gBkhdhdcH8HTwayV2stdPJXG6SuDr3vezgXg7sg",
  "key23": "29VdyigCKQjAWTmyM1sQ2SmKRrkrhjUptdjXWUA3PQc1YdbUmsehAdgmHKNYwczLn15AacraUgEdpZQNxfMy6sdA",
  "key24": "57S18tiacRzTW3drupLvtoFeVAm1cbHxPMyGSSErrp3WrNLZmBWLsUTUgRuFVbyzX94gQsMKQUBnHXpEeaRdGyJc",
  "key25": "1rMv9Rc8G8kRk7h45AhaQzfHnJqWVGVjUhCThsiC2E12aKmuhcbQ1cnmrdaKcYyKK7tGjK4jozemykNTEa3ZMKF",
  "key26": "5rTuj6t3c8oJ4CvExjnqbwaULpp82Xfp4L3RgpgGhRuDgEUDsqz3NKa6eLkiSZLL16aqsu6PKqtb9aFBMiLcJgHn",
  "key27": "4NzhdmbK5BedHQL2R44Ny56d5ycyrrdzbytqQmYk3i3f1SeS1LXUwJJnSqhDgYDt7x9EkgxnWVumMz6SYSuQ3vKH",
  "key28": "4bmaDyyaPf9jTDJQRisAC7AFgs2U3D4GYLcuzyGAmyvrK55JBi1De6XbMeJ9K1niXtTxdpXV1kHp75RSesP6qrL"
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
