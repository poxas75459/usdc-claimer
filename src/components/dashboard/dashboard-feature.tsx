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
    "3mWWKxXAUSzzgtevN56Yv3LADixzUWvGbayLU7WAyrRnXLSYCTSX59qYiE5zrNiXw6iScnfUPXqfq8dZRKSMEk8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4DtDrTAmB4zb4oZsroN7dLrKqywHgQd65Y3SfnYwpsJ2MMjdiDqGhgKrM3u9zXa2vqTq1fYc7xC37xFBwNEFYB",
  "key1": "5d2yxTykN8PjUoLfdSFABirSYiK8g4pcDUwtzRqpLbpZYbGTSEkCyMomRuvG1fJrd53mLJtaZYqisYvjKQpVp6yS",
  "key2": "5EtQWRVpuKSTbw5EoTeF2w78kqmQSckQxoKmjnW36dhkaB5pXmyTG54qf7bHcfHNxVWMLBeMZzdfWFeRkPZUagbq",
  "key3": "2WHwEmzi5TF8ChZ7gVqrpfhME8gVkfUSMoiMcyYdynbdMpn9U5pAZMN8NYmPbJM6c5RqmmHVpLm1euya1sCpjudP",
  "key4": "5TsJZSQJ6FrQHay1aqTjEw8jTrJkJd4a5SxZz6Ehxrc3csnPth7Fm795ohYp7PfhvFCPpXxDniFfFUaEwSzbSS1B",
  "key5": "56NMho4VKGkxrJBNzQnKY3tD7dPnb2DeHqJgrS2JW4brpNTMSARetj2dH7UBpd1hVgwfA4Gn8yVCzhaYkGDwMYUf",
  "key6": "2U8z2kCHBsapgtmBbHW9MTiMLADeTxxEJo8RdtLSZYsyTPU51BsddxaoPRbfWu5Y8big5iqNkVdyMCJMXdwYkDeu",
  "key7": "5ASSfJWNGiaKU89N6tysPwpfKGNT3jLpXhH7H6a1wbZyDEBqs1Ca6C52oYhUmppKbxh3Hyxucgsm47vGZuMxpDkR",
  "key8": "ggxwhMoDEchg9CtKZDL8mjfght86bkJvC1PbLFtHPVyNnuEbxsj7N5Q8pTTe44XeToWgUqWGqvTaZ7bYGboUeNT",
  "key9": "4TGCv89TF2UECyocw9auWx8TdYd6BE9UFs9RnUPdEAMgwR9CPQJQfTaeFrHPxU7U28YEuDYRVehDw3YknpHYMGhy",
  "key10": "2yVwbHrp17tPxaDfadur7bKJiXC5nM54pyV6RRT4dFDLPH4VG2pkpCnrZtiuv4v7U8e1c74R9hZqN5Fi581NR3QH",
  "key11": "4yNn357ZoMyVxKrwJzJM3p4utfPUz28QPyjBLFicwZL4VEQNAp255oYpQw9hUFpZRr23dNbkT3CvRMv1CESrdJPm",
  "key12": "57BQ5iUbkSBCNhseMApiMDa8DgWakwJJhFHm71i6VJ7BmnZy7a7pwFpyke9Qa5hvpzvwa3sy1cGhm6gL6JiJsAnG",
  "key13": "7NBaRcSYDs6Us92ypNWZfoHPs8qE8v289nkvpKBjqua4AASAKKWpj87Hc8QP93ZXRrkxRdnNRnhFhNstC2rtwun",
  "key14": "3pGLk75rHxm1TUHPhkYjZT8dyqnNDjdecKBMHjoEuJeXHr7ziUHNMhijv2yNvZUpPyNYSVS81rYUmyhdtRnRxt6i",
  "key15": "3PFasBjWVqLrvnjZTZKErpAx223Hwz9AwxoNryfsuVRfTmU1XdN9Non9Jy132AUabHfvyVfyMTg4SNZ2T8Mybzxr",
  "key16": "4QiHSpiWwU3p3kEXsbj27BALKwePZRfiUtp6pyMmjzQh5zTzSdPvoUpwPU2HLUm676E9Twq63eGQuuqapgLRzQzA",
  "key17": "4kT5WfpwYtA1avHNjbJYPhTAY9u9EgdRB9bYPgye5rEQnb9GKtQKWFHURqkh5Q566XqxDvxjNyaWhDcwFeAwMP2i",
  "key18": "4x1aCuS3dwZboQc4BdLybMEyTarrnN1sRHEGswF2UZ3EXRp9B3FX67tq4J7fkpZ21mbjD1PBnmy5K3PM8vdJDdjq",
  "key19": "yYKviNtgAjg6FTtKiBN4ojBwrDfUTfN5imkjcaVV7ApHVVEt56xHioQhttTvBqDkkBb24mTt4sks1fHy8UHbKzY",
  "key20": "YZ3dPedCTuecFRUN86zhAM7vsvQzJR3nGGhuRg1W99oqAFvzvtfCn1nLtTUdH2eFx6VTFvutbgmZ5ojpGfNPiPV",
  "key21": "32Jua1749FhJpEUR1EfugMr3u2RwCdSDo1VAVeZiDW7E6dDqEDUrUBzvqKqA5NVbCiAw6aCW6UUwufCnbnnFYe5x",
  "key22": "4TbkeXUyJfRAFsRuNhe2tFUtQ4MU3HYHz9ANJDCPLAXaByUUABUaXMo1iY1XFkzjGEMfqu3qKk4WAbv5waFeUEmE",
  "key23": "3akBGvuYSpLKuHxqLDJ2FHaSXvAVPPsnZrdTnybhWEGq1xjfoKPGA2WEQkFXxG5GQxxAMZPwzY49MHNwyctTQ7XY",
  "key24": "2vazkG1V3f4xusjfU1s948XA583nECuwdSPEXfJD4tdVTsdvYphgYGv5trrs2wdenNepzLgEjjyhtV16SrWARrdw",
  "key25": "4TnguyVG3mgftyamW1DqKEvR5GazvaVr8cWcBTUvPzErprJEFaEhVSZoshJqDFAfrDsWAdHLXS6Nx5E87ESshmnT",
  "key26": "23qBjmCbmzbrNgZiEU1gAS1JWwS5NqJSjP3kNh6prwrT2rW5VBq8iMyK3eL5SwJwpuBCkbCyv1PAD9oeFrWx8M31"
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
