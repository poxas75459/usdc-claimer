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
    "64EsZUGGBDpK9PEE1owUWbBkB2HLGgCzVkaFWLWnPi2Q2EGoFT7CPN9VoANSyJYjPANbAVSGGedP5Yw2oEDoqrmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S8m5K39ViY17hcsYEuqDCiYcPpAjZqvHyfW9EFd5TZZ3icNsPRbmtf4Mgx8fYdM8fnXSzRaAoRaQ6ZiJ4ZrZ2Yp",
  "key1": "4m5u6dC6x4GiGgnRvJooMDSKtsq2cfuz4Ab9oyNN37mfVyP3KLVRgnccs8VVY35X9xi8uUGoQEuvA366ooF2kz7B",
  "key2": "2Zm54Y72R4EXvS8HcuDMtJ6iNZrZUaAVmc9pF5AyKbdX2oXsR2seiUHp8xP64TheDhAF4xHCaXFMk7BUJv1xts5R",
  "key3": "2QH9h3QHJ5AuPdKRomeuPtScpBwJxb9DRSNMQfCmCt17QMiQpaXLphsV8onUcBDftkg54eeP2wJWvYxq9EsGzjyM",
  "key4": "5tHYEeKyyaASLPbMgegg9wfVdFfabpCTMKsDgDJdNMFYvyjimcD5gtu8jzPiKzZgJ3waBbSsqkoBNFhgojB57HzP",
  "key5": "358R7rSkoJ2kNB4s2cueQad2oRiZfwx2LjjwFDfUxKrgs6GmXCHcZmw83MJECLGDcD9h8kKoZLQdm2dUukWydYjN",
  "key6": "2qgvz57JciJm5FESvcTkHXMqieGD1s4ZNBhxUXRQY8SNb2Cs3mHtCPM5yp4Wow4Qocdoa4Rfy6Ke4DtTMe2PETW3",
  "key7": "5nUigZR3h6CqEwkQMx7nHPhCZXMAcmdnzCP1g3TpAiWyj5piHPpxbyNzzMaTdb1vupute7bmgLz5RuW8GXxfe1Jq",
  "key8": "4LUTMbFahY63JczDVaB3tPUiuv5cYhkX7anB4hDVhvk21Zc3kHvLzziqZiTMu6ys7fViyY8CmXxx81RYdgc1rhY",
  "key9": "5YUZuZKZtybTNjqeVRvkxe8Snevxko7DPBbxUNB2G1JFmPNNUXxRcLAq4WvByFZFWxcp3GxFP6WokrJtcTXHYsaA",
  "key10": "NYwyi1HKcgEc6HdPeXYRYyosU7x26SRhYRySrB7uSQ4rqnhoofKhFy9m54Wp8dS85oMBWVx3D2yr98M2Cj9cshj",
  "key11": "4cUHiCv9kQ87Uk7Pp75TD9fsLUdFWq2ky5JkmQ3DKtFJjyniHXjSghzL45JTbF3SSMjpA1mABNGDfAB25FjngA7V",
  "key12": "21bNSEcBeyhUP5Txcvb8yz7Ms2fRjtYZWMqns4Fgj9VY4GEMsUFQAphZNV5oihNQq7CmYXmWmwTu1ZEWvUNt9s8o",
  "key13": "5couEahgNaSAGuzhGZYDDmR1U253unnx6mda37kdtwpTk6oEq3P34Rv2dYdSEHR1mtjsbhmhPC2DipCSt3V1nMNj",
  "key14": "2okHxJCo88vpBWDcY4oUTz2AUHeKeTaW6UCQyszmGAtsmMEvSP2fCALuXAQF13vfZY9oQb8RXgvxj9XjZeuKLhzB",
  "key15": "5KFnYLPJnLYjcSa7HNWjHMD7FLZrscbJiPFh4AU4ur85s9aPdjkstuQYsZ49BhZbRQV66r7aFuotYcUyKFwcR6hv",
  "key16": "4dXCBQenS18nMGgPPFYD9EXFbY7PqVWJVFi7YUgD1AYy4qGREzKbAntnCG72knmakRFkptY1TjFCNmgrpS4G8yWG",
  "key17": "4UoRbSTED4JRxKrMapp973LnP74vCMVFQpwMwPfRAGVFUUqKB77QocV1rfmdUYvdGc8Hm7QUDDpZZzzgFiYnrGRK",
  "key18": "4cUmojsnKb4Ru31gNQdbcyd2JQaQCGetpE3RXywBJZeRyqDoqsrzmMGT3BHacakzQ4T5KdN4hKsV89EFJvgqeLFK",
  "key19": "5bnvEQpjMsftmVw1BhZYGvBUUkqva7joosMWKB3JMGJ8BLgLdGeihneRfjfaqhxirozyXk4AH4r6VHoGACFsVr3A",
  "key20": "QKNrn1cjo786hxDRT5EGMVHAEfJtGa8tnSESNYydKqKnb67aFwyugrbFFvA4j9ghu3h5K86mfpfLnZoNoyLD851",
  "key21": "3UjmJPkktAHzApSnswgywtWvjM6QBRS4oVW5KJGi2EaMLVdevyk4jqFp3GmdZ62ZqtTtBqyMRZ7KqwEaSfhpHhEF",
  "key22": "m4mro6nZsHhuXpQaJizgd7wNpMBg5Z9UFzuBxnkhqeVvSFvz4LeoZ51icneSg8dgHpheqAFUYiTrRg1MEKawhFF",
  "key23": "38x4gtYjNhfHw2J9eWSJYeNRgumQdUH2SjjEK1mWWSjJnCp5iZZZ1xj81rPTQ5zrhCaY3tLRcVY5Mh8rvT6xjZgF",
  "key24": "Mi7TNaLgZnkUfMz6R6RASHsSvLUhVfEAfeqEBrQWzLefLVyUY8rEAUiARoUHr51VyG3Tt9HxUzD25GYtUytXSUD",
  "key25": "5fHtYDrYaGtwNP285bGSeMZjRSP4RDBVU2HYsJkgnL1i7c1A4bhCdn82uidwD35TuyVafZefJwkSnQx66Fa4pUR1",
  "key26": "34ZZkvqAS9ccrcisXis2nYeudfUgZCGM1qfypjweLGVuVbesJLHKRD483F1tbC1BrsGMGMa7qgbyRC4BAhnmuxbE",
  "key27": "25CUZHTpw4JcxYa7i46dR59ffS2EuZNpmP8Qn4dq8y6WrdJf5fewedEY9hT7e7U7y35qiZVC9ZA8YtCt7nWE3oED",
  "key28": "5pSjoeJPEPa9odLN2EcfxtpSVMqC8mrkmAM69yY4rrbtw5F6xvczfuZBtob7cvNWPdSRAaTF2FbfjGaXEyRRbb72",
  "key29": "4uiXC3bzQYkLdH3KPgSFJ6XQL5wqY4iFRWFHWbZiYcxYxUi5JknoYcd2YnFqDmP2pKHpgVwnX6VcfEwXCYWAdR9i",
  "key30": "62UYHCL3m9uxK4cmNEAEJiHmFcVtau31HYAiWDGzmScxb1jcyTxxs8DNQ6Cms9dRzxZA7DWwLostxjcGcR9Faqmw",
  "key31": "24PU8KG979isCxvBUR5hLFYasCRD88vvbm8GrJG4pnorKwtod3UNG7udL2HMusN6o9wA3nFZXCHxo9rytnD6XT94",
  "key32": "2Dff9ryNCEYtpGhQg7xQ5egyetQTfokYi4uHAamMMhkLT9aYScHgLPF337swHaB4gR6pgg3xKQUgC2HHgD5AQzo",
  "key33": "2jG1rgzGLiMHyyhkKszkjvzc9LbwnYjR74B2fEV56sLP4JkwQHi5vr2pECN2cnjVLDEKHRKJDpBjRwwK6KbdoMZs",
  "key34": "27QLF4srwv1pdwKDnrwqmhxN8jGVNQJXXEHSyNpusujtgqqSW5HVfoRfYqHfctYPtmPob8c4aHPArxRoeMuPhb79",
  "key35": "2wn1Ex7oAFWp5g8UXCDBEgsEENmXCj1cnwGrQr9USP4yJuB9Rwcu5JhZRtNSkMEh3PdHMrKAnwL5rrrTJ8UGd1VY",
  "key36": "2Wv5PEsNHhv16FTznVXs6RwrwJJWdohDjNtWcdPq7tnBBoYwBjrHCp7Zr9TWXDJ7ULiyX4D1TrKBkuYFLd5Upc8V",
  "key37": "5WADyuc5d84GixfVGWefKFMLuDMRYFYsEz6QwYvcMMoj7aypNUrRc9g44KBnHiifMj9YiEWLAoX8WQ35WGrdkFWf",
  "key38": "2qPS1pcVk7wbHdSzejAkfNNN8kPCcr2j4gKaeFcX1277xTjGQz4LKJZY3ekMJNNeF8QdxHVX22bDcY6b5JBGxtRt",
  "key39": "2Mc2ciz8khjXuBMkSemJkmSZHBJPvwozhZR2Ygg1NitaqjNmgvJsafmGAzQfGmWfMf5JfnEkavSxVfnoGjK9iWkg",
  "key40": "2Z9UK8P9ofuRF33WsKTdZdsfjE5PL55gxhw1wKvbTsQheDPjxpCFhSb1FXETMrmnBTC24JEksfbszF66K17Efjmz",
  "key41": "4rSJQcqh8ZrkfsJs8ZuGqn2gbKuq1Trw8HRL3Niz5Q3qkKKMLpNfKVERwnG8bkFGcMdDzzZFELqFYnET2fcQk2qw"
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
