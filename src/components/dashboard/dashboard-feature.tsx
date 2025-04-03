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
    "cfb1KFM3U7GifHzKDp5veVF2gFvWLyqY5hZWPcZsQ8X1Dwqn9qNkvngCneBWnsYg3oAopoMzCW81JkAhHkgfzJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2exyFDcN1wRSdL3fECDhwiom1rWvcThZQ9urfH3UHT9YGu4cVFBMnLJsa5tbWFRcbqWR78fAN71vutdPrktQQYUD",
  "key1": "3nZswFgSjU3SNvPNSKEwmBvMwvuM6JgoFRiEqHVV3hEoYfmHfPxVaDMVgaveENcezoSecpsaz3YpxQeLhU3RCsyL",
  "key2": "4qfTcvZsy3PvXfZenMyJD7JTg2RnCfi3wJNG9AN8WJ7n8mmowg5KQyDsffBtK9AJL5QXNzFsxuVijibhGi9vjtRP",
  "key3": "2rRigdM3Qre5fBWN6uFMxGGoYwv3pt8xYUy4a8LfRCmqdMaL5AUTcTARiFPSTtoUZPe9fgbLZV4yLRkEWUEEjaJN",
  "key4": "3taYmMGKND85NcgGCyYF99mzjgkFUyGUzes9oqBZkWLAQ1Fc5XLDXaMDWYBHeibTmvGGFxjvwjh5LxSP2BgNwUTg",
  "key5": "5GSpUw4ZvxEJcyNnxXLDB7J8tm5jMLyr3HZb5azVNozcYPqSG3YViGVqwFJ7566SXGz81ZZ2ygKkV9MqgqKuXtBA",
  "key6": "5qGRyXteHGTLXqvy1nAVWZ7da4jq78YkUwWnNCsyjLZLePyaWPXEowq3RyboNiRM66tKTmejwDKVqLn3TK1YmaS2",
  "key7": "32v6NTyqwbEmsFYMZsadmiEwQGpJuVCT2MRHEcbCw9gReLhsfNReXwgVTJcjrUYMKE4Q2ZrGSwpcjWA1Un5BGEdF",
  "key8": "2pfmS5Hwb3z9zFTtCzzCxGqVwqWB3emRijLKt2h3JLQ6bNhfMEqoWtSZxFBiRub2xEJRPDtKEtTRWwyyfvd9685r",
  "key9": "4PLMiSZiaN7ByGrNPsQxSJQeCEtPLuQGGdzZ9jijpwSmFwHr5vez5Y1Df5is2FXXDwwm7suCFHYyHtigoA7afniw",
  "key10": "jSLYynjTdD2CeoJYdmxdan2PL9msgeMU3UKZseD7NpoUEm3a8isS2kPxmJgzrAztvEjiCig1UCyhkH6AGU9K5DQ",
  "key11": "4SX7JT9idqsvGPyw2LEU9kwdMA18EzBKPEhcBt5F2JgoufVXiXSLx1TFQ37EAQgq9UxMF4kcpbV7PvsRjKwPKesJ",
  "key12": "DmsyvkzSxvbb9pc7AQbN5ndWDzmwspySAHr5163k66z59xpZHCpVsPz9pA526eMM7vAKWS1TCZTWbVr6Y126i7C",
  "key13": "4ZtKQr4UcSQ8AaLgXi2eKc8c6HvMng5qE6JF4X5swMG3qqdUuLDwmM87FbnnsyK6hh2Yx9QqhvH1qocFSnEf1PPy",
  "key14": "66RS9T3YcTvZy19FdzHv47H45Ef1ArQx5DbNo9nqYKmGgjaEiuizuK2Kt8EnmxTDCc9GZ5d4VnXYPo45hp65dEkT",
  "key15": "3uVJYpWDtCrMG6dnquoGLKQgWwZGEC6yU4Gor7YRPgMVE1JAe2EmobgUfU9R1QMukkKsqvpEXV2xAL136QC8Qe4n",
  "key16": "45eRLEMY8XKyqbRtUKv4uqCjGXuiSbpQggbnfcKMMViB37Pd7pTH5Rg91gtgtd3DnSyDv2eRQcE1f5NTrqisiTuQ",
  "key17": "3CfAUTBMCm9CZ5hRBAj8pCBdNB8ChuxhCh2WPq2w5KLcBbbQCAgwvxxzHRN9LNJ5JcV2P4EK8Lt6PrQTKLA6qyaB",
  "key18": "3f5ynKRCqsTxiCr3T3sdH5Np3qTKFcAwTSGx8jFDoGZ6rhre5gX725UuhFbocT8NTa8DPrrTfAoTpL9dZTfKuXBt",
  "key19": "LbKyTUrW4Ssg2F2W1DPqfj4qpL9RHk2iKq97qnRaREZWYByLEcnD7bvhX7D99KTvSgcv1nRPm4KZ1vcwYXgqPgJ",
  "key20": "5nmudSXYsvikfjBHm4LQqfmkG2QoydhiWhbSGhFFdLNsBru1yYs5DzMccBwhteHbAcVpGQLcsWidud9U7ajWDURv",
  "key21": "4Wxfifke2DjucWiJyxWDRaL2pt2yQ1SHtANtE2DSmPDipkXidwEQzGQhNYshrgv4SGmEZy9UqaTJPJcVB1i5c3Ua",
  "key22": "3x4kt49ueeGADnTVWvFJisrQtazF4KU4QzGXCjgM2YH9WjQZtj8VCvXR7ziwhy9UGGpCVzJBYv1hjxk4pGiXa57g",
  "key23": "Z2SersvKRZ2MMrd9xdewTpQvcmc8SKSR776zLf7E27EJHtryTke6geqNLWr1pJ4ETcByfSDeWy6kfxKiGhqBi37",
  "key24": "T5S3BjGceyyrCm513sCJcqUydasFapT5TTeAjRTo9rrnZYkzfmgjcHVqcwNtoMD9bXtQGCJmx86QJB3za9pkC2d",
  "key25": "2q1UfU1bSc3DHujuVYgJ32uJzXb5bCF4fWhyP4Gnhq4ELoFRtze989wrTeQgirqJiLjcyNwLAbz8J71HPEWTuyqA",
  "key26": "3VwktpwB2wdjMkBoFU3MejHRNkoiUsu5cDKfjwUia4LVNDKq65EKT5Kidq5o3ez2CCeVskhKHWm7FsEunptUa3Tq",
  "key27": "49otKi1dymK4eXUKBYPa8ekxuSpdGMyQqWe8kbKaTSSVYyUAntgBuVgT6WnjbcbuVsaThC2HvrLYMyLG7mjVB1vR",
  "key28": "5b7BptSMSwtbMyve3c9yFXGtNhdR9hHNGZuWETSrG8WW78TvpJtHLiQbKn6K81cN9CNcFLGaYXKCF97J7rWZq4s",
  "key29": "2CkkQpffHJZDkPgQUrjWmd3RZ6W6iKBVQRYceLTS8v5rYgpVh5AwCjz12Yw9ebvMyAXeSzixLUU74V9ikkoMCEce",
  "key30": "2gBGB6bDkZ7UyziWL3FCsbPgPbq2hvzGqLvbBvC1PvLVLrucq1EAQimBeujNnTTyG1tb9xjy9BHMsMH3M5gZ8b7d",
  "key31": "3WHALeytCBNhX9UqPm9gHgBtLFv37DWpXXJi1QRr6ScbiwC9rq4Wx8RCuPJDfF29NQ5GLfHAUn5m2DPeo8eJuStT"
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
