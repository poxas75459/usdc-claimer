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
    "625ZRc8JD8jy7SimYJTXmFXtK7CMYs2SQRLgqpt72wuh7JDCiQpC83yBFYvbqTGnELqopK4FvqxHJDP4DLVwZ41D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6tDt2hCs742zdD5WEeFWe5oD9ioJ6trkdXtz4omUjfRtD37MoFSMtFGLFRDWWFCXVHRprENMobppdELqS4GLJV",
  "key1": "dcJATTJTXGbEJ7ccX44FhaxrqkDWNPCovKZGNJpKJxs5yGvaht4aRzmgb5UVpfgSHnPNRjakvgzopE2rqaz1s7X",
  "key2": "2Ri9wWeiDAfLegrXtcLX3zsDc9dic5Jza8L394YsrnB3GZRoL6ExxV53KTFaWjCuUpXXboft9s4a9bPhE6owfVhr",
  "key3": "fRrv1VQHWkeqXXqF5WoaW5XGcGa9cDysBHZR2scCGCHUkT5ZRpUGJHLo5t9TccJtj1RmEt958NRDovXHrcu9HqC",
  "key4": "waJins8ZDRiptdH2VRTH7gJmQ8FCnAi6yALgyUtEZibBHVdRBNbwYvHWSZWfcJYkgRp2e1mBxzL8pG9SJwSxdrE",
  "key5": "vDkW231CHDz5CUs41isxw3MdFX4W1iCPWCLZDoHfSsy6mbYA9zXepfCAwJaoFpgeT5eH2sdFQMdkYN878diGwro",
  "key6": "2CAtyH7CCFtpPTiKebbpKk3K3bdzDVMmmwA8oZXGXeSYm7uMMvR3L4PkvKC2er1dP2WsFr1RQgMpJxbykdqb1aDs",
  "key7": "3kDa5pYhmJLT3Jn1gtHfGyZXygWt21sf8Ax8NHmxmCPjUXF5NY4eLZGaD5Ey7oiqrKWJTfh76rfdAkE2yXxykqhU",
  "key8": "2E8gSB5gPbtmUaeRquKgnS4HS4gBkxhW1kCRYjFryfcqgFSa8FmJki51aLmHRs9QFRKd5CJCNZDxxbKah3Tq8FqZ",
  "key9": "3v5SKVifTEDXT5b6iKRR2McJW2E5HRfwBN7EGMXQf5WH32Aghx3QDDWpUuVJ2MZRiwMJSnexfdR8iC4gmyAuGdNE",
  "key10": "3qMMoCA5hw7YmygmvTE59Rm6qzCepKdquJuGo98UmkK1UuhTMZ4JTSj6gWTUukgi6C6ibnz5Dz4ebowzR3XyaCKe",
  "key11": "4cGBKuYU6ZtniqtQi939YMsW4o4JrfHi5iaWRaDBEUjy4VECH13HwEsn8NaXdnAYddQrRcRhH2pfT6YtN9LeDDtf",
  "key12": "4p6mMZA38NHYkigLf1he5VLo2JHTAFmzkU76mbENPgaXX4dJfHpecir2wwsXYQPcbGNaWSq38J7Ke9ThK6mHKKHn",
  "key13": "4BixWsjygybWxQc3hbBfBTqrSKBpi2MBda3QsUqMEqL6qsixhrhJLEWEx3S27Xh7N3w8M4cmLVGiMCdJxFfcYfrB",
  "key14": "4HLBP8zbZ9fNTTSYUAffSEtUf1x1wkVu6kmJikzCWzMHqi3xL9FbQSwHpKxS6QXRw9aunt69kRQSaro7AVG8Cf3P",
  "key15": "bbcGz9iTcyzUNHeQ2ieEpmmNkSnwkuNLvsZ4aG641b7NhydA4ENqPZZpm6d758hK3kRGEKqWE8ThVdHLBEsj94p",
  "key16": "4pf27hxY85dchsQYwC9zLqa86QJ9u9AUJKuJ49LvKsUFLKW3JwNDAraYhqU9a3t6LATXWbAKj6XoE655q4Wq1PQq",
  "key17": "bsAFMxZYQCzF6gBWdRJKSvGSrZZUby6578LF7Cmp42d3xdK9prWN6NR7LjFjTnauFtxBsg6WcZgEUzCQk1NhTys",
  "key18": "2LrJMRV2MTpXsuRte9kNYUVHLQJ3wLqYdb2g93BMB2qnYtDxjoTGxQtod361tHWSTbgeuvJa37hmcm8aHCVJSrFu",
  "key19": "kGmCf9v1XAL3mrPjoyWJmnEiK5NUjZvnE6fTidzqvgBpxRjsKYsveD6nhvQPXd98UGgTXx5tmf1KnsudaEX6f2z",
  "key20": "3M1MAE6fYZXuGkeAPFWPSTEKqhYosfAsBkusR3jYxYnGbHYTnCKG3iZDKCtwg5KuXorVAfe3mNLxGGkyMhSPk9hU",
  "key21": "395qPBxhz6Sh26HhsCRyeoQMQr7p4gtCXNxXteN92rZ9HATveSFQQH3wG8EhUcK8VG285wuXUD8rM2NBth7A9iTf",
  "key22": "559V7aJmZyVRu45boeQ5Y63iyTk8tVNZM2gwTvhXb9xn7MAWekZRVRrUcV33jUP2abHJLqP5PfgvoWNc1PcxyWXA",
  "key23": "3aWHaDrGg6CM9Yd58d9xKFMpTDpSVdHemJrAdcJyLKPMqeuNWG3FUQpZqDa9En3CYiPivX8suyzyjifiP28RpnxW",
  "key24": "Sykr7SmiTwejM79kooDgWYrHBp6X1Db9cjWGoFm9ervfUwDbHBLg5CNYuQCCWQ48hNpjHH2Nj1m5Ja8PBxRzBj3",
  "key25": "3z5dPVz7LEmJGZ5joqMaLi5JHSS4G9kWEDQS3WaMgpcxxJJMHGq3b9guqmKXuTiAnjQ22fTEZfEYEhFHT5ueV8XW",
  "key26": "2rVMcZZrR3BQjqbgZuzvRdmBM1ojknp4S5TJ9bjQ1ekSRLjKhVDuFD4Lcakw2fW6CV9ZmJXzbMuKtBG9X2NBms2s",
  "key27": "3yziWsgwvDQrrdUjLUU5vNY7V4PyFoHrCFBCZ8dVvDxZgoqKNm8S6wwDiSJnbEzRFJ2stKXBqQ8z9CmYvm6kH2Qp",
  "key28": "3TasJTmmnkVL8WDRawHzkATbyEwLEJmSThgWj2Pa71GpU3rCMdbS9n2Fpms9re5dEpbbMnERWH9wUXF8wfKdNpXh",
  "key29": "3aF3456AfUAMaq7MeWrZrrJJCMb7HFk2TYZjyuAYxw6L8ADTW6rfAqh7ye66nTVbgNHntyPeqB6rk1TnvFFDqvz4",
  "key30": "54jiLr2SKE8Y46WGXPbuR1h4zoEzLRht6qyVnw9i9175Qt9ZinZN4nusBGfoKMptn8pFKtyokyoayAh73d7ssKPq",
  "key31": "27mB7THPC2ZWwRTwXxCuk4usyyEuGsPK5r1hMhphZPB7PSFabtAcHurqnh23NqGinMEUcU2nmJU8qFfV2ZNhHxwN",
  "key32": "47oaqxw1sGgK6sRiAGmUZWbby9Y5PzfMaig9axfLfomMiTwrTPRWszFdq3SZqaLsoDgQqsFeyjHvqDYFrEk2frkV",
  "key33": "X3iMWK6YRZSsJfEePQLH1HAC4dSFqYhDfBEfF5osFrLpeQB7ezB8Yq9edBbTjZsbhMHewdAzJSTBgZC7fFGatcS",
  "key34": "3hKvo6CADAH2x2BUvNcrxxpJSZsAujLiQswkBa52p6APgA6KbBf3o48pGi2sWiPbmmSDknoQR1spMJQPB3KnfRJ4",
  "key35": "5uNe8sFjsjm1GeXpdev4TqJbackeQAimgAtndWWxgveBxQyhpdnu89dJuz79ou4Quie9ogSR3NMcnWSap4SCo3Dy",
  "key36": "5GdXiEeJFeb8U7Uu8T4xQQZAFGGv5fX11yYtyKxcjT5YrizrVc6prtThau2V1jXYzJtB3Q8ezuqVn8nn8kwby3s9",
  "key37": "5bqa6zmaXbSYXyZnZooAx7zhY2atiif6kZHkhWtcnuxzLWeLsVK9tKKwYRSXh9dNJHsLESdJHHnRTbAprpyyEBiQ",
  "key38": "2NmTEZ2CcP6Vy374QtCuiGLATjj3gkNbU1jymku6sWFBDxhvU1BT7MZ1Ge8YErY8dgQ9ny5dVM27xQrMFLxA8tzR",
  "key39": "rmTojfdzKEGUR2EoVVZyCSMCRuPzk3t1Ftpu596AgmpQKcNS2mbWoq3zJUg2ppbsLmv7goey137FvShNCScWf2F"
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
