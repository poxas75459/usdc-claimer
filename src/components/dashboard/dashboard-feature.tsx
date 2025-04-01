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
    "4db1bd8PzSdBiaY4nVdEjxmuBLFRLPogJEKdjaWKEFZGkWeF2bVrpMGZVtC8ghPaXZoWJZ5XmiookEJGJRWU62cD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gcEQhqbJTWQRaPdGxdgrHrWJoJSSWuE87rECkY2bK26V7p4TXuNxY3nSwCk6nUBSRUr16mY3CjH8dwfX4bmc3mW",
  "key1": "4u6rrsCkQgTfpSr3CZ7cUVNnbotyQucArBv46WKQTbxSmXMhjN9oZrtacseypGWu4kCV4PBp5Jtr7WoT8ZTMvBZV",
  "key2": "iXSRCuu3Qgg7qBN8SzP8KG7hxKddB4Q4M2T8G8rfbp4h9ExpvpwRD5EmMhVQxENoG9sBqstsMbiv6Mfq3VrSM2C",
  "key3": "5F7TLbd5FaKm2zk7ZML3B9zoQzt1NjxRCzK7XEAFTf5oTxavjt1LX3wwgN5FGNXqCM1Uaze8fB478CJZWw1XiqAo",
  "key4": "4JojYU7ouV7r1mUKu9BHyKBgANteKYJt9j868DFLrvxQTig4B54dh2jr351focxadV4suQkVsqr1vYYesVSvhCxh",
  "key5": "5pYqWEZ5AjsJuswQKqo5YKNGuQv9csEZF9qqkkzGFA1b3rkdhSFWeqoTgP17jaBTvxESuP8p25n3WgsH3JkHKhLV",
  "key6": "3DeRCfrwZ4Qa9Qkf1GsrtRriF9SmEyGxVoVqoy2nddw13h25dwC2NjAKL4EraEVmYYecNPyRwGtuLjUWmpppMJec",
  "key7": "2qU2Dki2qjPmUi8oYwJ7HoETSqu5gFUXiX6Ep85DiSK9Px2fZZzrfYrZYoUWJQ6XtbzDeYni6CourT8E85una2oL",
  "key8": "3TR5YTznsmBhVhcEXaFg88fTHfqGFPbs8cRy4aVVqkN8KKxAMWzXWzpfaBgD2NcSfkAWJWiTuJuzGEKrgfvQ4rcL",
  "key9": "5tZxkRPbvLwtdjac6cMUucUyU1w3ohU6YE9hKXSPLJTRY5CNFi7564jBhxAoFn3Savnp18Yr6HjwsTARw6v8dM3f",
  "key10": "128gjC6VbQToKsGErQszprWvCDKkyqdBMkSN3jfVJxRAJNxcpYRMXD7QbXP96fGKJgoitWinPNhnVrk9pkJbLRmG",
  "key11": "4b7GJhNozuvB46D7Hye9Fp3fCgZcu2YcFHxcrnp2iM77d8WXfCSTfhRusBj4DTXJrRj3aJw9ePeeFPxqBT6MNRfj",
  "key12": "4DYf9doenHZBBGYVsqANXnwrYVTR3UXtytR5uce4PnL5fPsduQXiGP8Kq131av5x1dguR1vcsXtZWA72vphgaxHH",
  "key13": "41B7hxufVRc5JvXzq8FRSZcmuEjToBmufMduFj1XqPooT6kh5DKLU9mTBnivEkjWrxzsEdb6idj4Q1cHKXkv1sAs",
  "key14": "3fZVA3zLZFonRuxK1fnuEjQUrUYR9NdKyw3HGaYerP6SiVPC7FtXnDdGAKpZQP1sayy39hrESNAkBMoNAXDNT3pp",
  "key15": "65iNKrAEUk6pfjawzajnJJKAWmJWgxL7b9Lvcwzc1ysCaGUiRCG2dKne9PEMg28bRcehavAgRPJnQXZnJEuaxrvx",
  "key16": "D3pas3wJcqBY4RjkmJhFsd7d7XSBp1ZB3aicU2qiqy9pFUp3MkDUYt4YR1pkypyRGynQFy8ZhWFTmAWxyHzxnLk",
  "key17": "24BWTuZiCwjjr3pMWesNX2MyqxT6dB4Hrj5QbJAh59WunSGXDc6CVw75wvpQ6xNz7L6WuLcnkNibh6snb3aj4ydf",
  "key18": "2n7yfMQGKJwHoypPFWGaf5WwNpedRdcKK4K76uLhyhQ77XczNaesnDWq4QvwNdxei4iws4snHeksntDtCVaVEwer",
  "key19": "3B7WCazNvN6Wmud8XjztB5kd4Cw8D2wkq48danSgohhBzDBsQKSgocNPXL9k4g6ksXYNxSquCwuRQnfF3pRFLEfz",
  "key20": "3dH2Tom4noguWcV3K4U6KNDz222THXSYsj9s7FLqJFqvkqiW2tAv7a98xZmjsT3Azdt9Fb6yaEPKrUwq97Yq8nD9",
  "key21": "54Ukp89VqoRqky4B5w8WGtSyrToNphNBqEuBdEd8EzPX3iXzgd4uecDtDXUAjuQ99Fex53UN6TKBNGputJZM45nj",
  "key22": "62nuqPqrt7dh8CUNyvqacpRGEFfm6VNK5QhXKpkcXf69Sixg9BqUHkyvvDKmvar8rHfaogUkxDGZkJ15vU6Mi531",
  "key23": "5NEGXHoHfU9x2BAwo2XbC4KhEHEmx84ppTqFmLYFkU9MMaxY8w8xHBM96V7jZ2PWdYAXVwzh2s9ANvehkWSbwGhT",
  "key24": "5ZfpTiGyTr2uPjExP91Cwv2pJrQFJMkex3MX7ZqNoY1N5MpgtbNFAsQziK36YcopykyFCkNdHCZndX7p49R2UNwN",
  "key25": "4pGnUsFc1cc3YLjgDotYaRbUHpCkiTkZozTg8PsCJUqXeCpTR3ixxjR4S1BcBaxN8md29MKrYVfRfM6RA2Zi5Rcq",
  "key26": "3V7zNgLBavdEknxaWzDyMQCHbFKBE1ejj3CqVMryqA2GVgquiEzzGJty64v4Ke8LyQAeyRfrKiy9ESq3rqbXvxXD",
  "key27": "pYNFJ13jk4u7jpoa5HwnXCieVGzLJiie388UtiMsEUUyXgyWmnhbVCEkBGnDFQ4Q4rSFvvvRcBxU1Sg9h4BfD5e",
  "key28": "4UQfn7YsYv3XRcXvXX2Bv3kbdeTNNHf4Go4e7QJGBHhTSS7f5XbAGwX6g58MDHApftxznyQnpH2nk47ADkKGcPZE",
  "key29": "4UHWD8J87dFyVnSFykZDPdLBiiibj4GtjTA7dgxV3HjHFUAYSvpCWByBxSFixgZ1FWuaVDvDmTQ7An9VrZjnT1xP",
  "key30": "4HmvCdPTK8AxDQsZ7UBNMb1S5Um4HSLdicDTZGMvyi3epTMCLnXtqpARuQPKnfNm8sNQUfWerUwcCtZrRiFvuq8m",
  "key31": "5xZd71wfe5vB7xGXqpBxL5U2Ldsm6N9axWrEryV736vSzAtMoHXZ8ohcSgk7c9CqdyC6jbL3VzwZnu7VgthnxBRD",
  "key32": "bvXycTNSUDqd71L41tWrN1aHjvvM7MPUacwWL4AwoW5ikw2MRB2hxg2rPgw28auCMxK2rjDoLdPqGUSx4SpSVvZ",
  "key33": "2xUejoc5v23NeonPvsCb62krW64KMiUFhACGiUHgf2XDhhmfmnMam8G8M3rnUxnmqtE4cSN1Ta5ZZa93FtPQ5UQy",
  "key34": "5nYsHDJBzryu98mHPdDcMfPGMQk7RXtkNgu5FedLLUMNL2dXVMT85HFs6yPdZx3k7Zt3u24gPRAvnUqSEy2B5qqt",
  "key35": "2n54t3u94Pxn9eT4QJ8sf9HVa1KwysWFbkydUiQv8cxKZEqitAVJk3j12rCQ38dgxMAyELZr8vC9a9BdauYgrKwL",
  "key36": "5gMMMrLoXXXLu1qpd6TuZDxfpCQb4Z3D6xkp6goZqk23kfQrUYN6iADLSKam8dFmCdMS55i67Tj4V3DrCSd7XViA"
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
