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
    "3Ebt1ZtzaF9X7Zvd52f67WBPtBNnfSoVDKQZkX5Kzhj3HtKwM8CTuomZ219ffm2fKC3wtFDohBZ2FbbXVr98cePH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RrvZG5WpyAMUBsSBQguxmzb5CBzVNFUPtvXcrsL7C7iP2sHUqRDNsat4z7Xw8cojKiRSVChfMvrWJjFXVUDsr8D",
  "key1": "31hnGofbYiy4YpHswYT5rntVRetGhJjYDFzN55bHzv7L5jA9jTDhJQ7AgJN2gjDPNA8pDj2igU12h64hxB3NfJ1x",
  "key2": "5o9X7cEP4uFBSbwBcoKh7LaCWkjqZX2EksSNDS4iqArUhywrAcmAjxyGban2jfdSQoTxKrygeSzEcEeYPMafw6uK",
  "key3": "3eNs2QbpFD7bKf9tJ6bTLvCRNuh99aQawdaroqU9bfRGXUWFGCZg4VNLJo6Xrcpq3R8MZfU3zVs5zAbv8hAU75qR",
  "key4": "3FpZNGywN7DkKDduPY5FNTpHpHM8Tv58N5iaM3JdqsZijLzyPuZBk7b6wanuybFHuWoY7BoCNUzoRuTRU9d164L5",
  "key5": "4dbQ66u6C8EGKTA8HyUKSb1yXkryLosxtnJWjF2aRQeiriPwfEaDRbFN3ETdXbXrQV7UaXo86qmSYS77EhYUi4PR",
  "key6": "2XXvKHcfNaviUfFysJGkCKgUAeUas5jekbrqLyDLJvxCcxJ75gshThMPQcM2a6g2tPWWr2eQNma8zTgkuphY3ptb",
  "key7": "2yVSa5QTpygSjjhfn3kbzm6z3L6f8oSCAqpQVwUjKMsPRPC74SbQFRw1q5ZTbGy3dSiP54pHk4jLK81NWTZV278V",
  "key8": "2idteGzJoYtVbbV44S6XL5TAnMUFG13QkYy49aTZXFgsJNWZsWwuD5Khn4mE3GQxDGiRtSZfDrSXy3ijefUapbTD",
  "key9": "3vqGvVZpjKqQehZvGUZEdKwyYhoGeGTmLchdENHVczpJJ1Jqt1mkMpVAAq8VhwivFFF7nFGgMxXXyMwu7HKhGJrB",
  "key10": "5We6sJ2yqqpqNn6PDoDHyTrV55g9onqxoAriM95nv1sXd5rqx9RNfzMAuTEoi4U2NWRmeTktXnXYoe7L57K85T1M",
  "key11": "3dtiTH7ei1GqPrw3MsGfpyQdPPq6RV1Lg9g8YzqnXGa2DiR6KLJPMviCMEd5VfvRWPYqyhTniokbXxGpWPpwfph",
  "key12": "5uNYXvcJBaCHUX8AJSBFote4Cr7G6AAwmphKZdc3oGkVHimeRcUY8yoMHW7mBMeGYDeHREZXNwtFKRMxygYsNC1U",
  "key13": "4mRjT8BzkMANFTn52g9LmTpcFjuw4136rm3z8vaekixrTTYmUcLa6tepnbEasJpTkiAQD9BssMmHjvS4R9E8V1RU",
  "key14": "8eghaXWJUfe2FzGixSY5SvZYavTjCvkDCF4FWHvkrqJRBTDZ3WfRujUPMJWx5RLEkL6UXgxBmDSJcKA7Gi1SeoQ",
  "key15": "F7RRE1Ho9M2eaAHK6RCftrUX5VD57azqgpCBpyH6D2rBuJi1mCTZfvHNhZWw9dtKXrAP4cSBtux3FuJwXifccJG",
  "key16": "4MpzubzYJ9LL1MnebhYMqn9VeAtFwaFr4ommgBLSWXBazzLB8fXbqQoe6Lg5RyPHk3SxCpmzNwj3nwqxawhg35eZ",
  "key17": "4ECXXo5hJm5xCZA7bW6Uswtx6kVuXjDWA6MrnkMcddryckoXQZrJJuRyCTLjKo4xerhb3m3KkcesVzvghPEkgTKS",
  "key18": "3N8Gf6Yq99HY9yyeAgHUdnKuhS1FikmBp9qBbA993jRSfSujU8EiYmVy4ai7Ux7pJcNHstoNr8KPQJTtVQiMHiRv",
  "key19": "5ajCL7vyS2DH6TnXmM6HS6dTDvcWPMwTqu3RdARNK1GyRvaZHecEnybkzbEKEH88fs4uwbvDu8fCEuWhnFV99obu",
  "key20": "4AXQcFjhwsR5EmuiNK9ZqCAk2BszS83dLGD46BdHSYDf1yC3C5JZZFgnsV2KvKqf5g6XMicmwcex2Hjmx5ytuTW9",
  "key21": "4J4QRX2vhhF82Seoyxc9RXf2v7AGeRnvAnyTEcKQ6s6tXmh6VWcakQpt4pSogLssEUKqB8JjGVscqNpiLm4QVKkg",
  "key22": "ZYw5yQaoHZbyFJJwQYBZ1qSZBDFk3WV86v6B5CPNN9kaDgAFdWHaNcBzZsccwsbGGaAaNqwduahwwzRwJWC7YWG",
  "key23": "2rFphCs7MsyJw8B3rhEJwsvWs6i74dzsCCj2HizqdmwM5SNQcSNwfLWp6CdS7p4d4usaYjSpc8hZvX2MVRk5YNUU",
  "key24": "2po8XABy7TnbkmdKzPRgE4WwEn3NPGD3Y8eYayUwcawrzCjVbB7rkgi5QAqbirumFCeBtwf6kbvo6kgdyYsDMPQ5",
  "key25": "21FXjHSa9WoDfZkmCgs37FKUfW9vj4hhidzqcM36JmJ1jPr5qNNj56potr7WvpHmpxRBQxXWEKW86qNEziqECkSk",
  "key26": "1M7QLg59idBjXriSrctd9SPTHUtmFJMmPAkH7DJmg6PTFiKHSQpaJFEWSddr1SxvWW3BsqohJ8ZbTNp7ZEj3Jqk",
  "key27": "5w4iMkXhc2bB8b6ZdowP6GeuyFuTK8T1tEZoSGvmXHfKvySTJv2yTUKXkfRophFMi2jAGaGMx2GpBZcSmhjwoyCF",
  "key28": "3Z2YJq5VEvD1NKEQHBoqaHqpd8RKTWTjyHgSZVCYqHKayam4pnWnAY6bgRanRFkbY3MKTzxY4jJbWTfT5EcApFAJ",
  "key29": "2pjFqfhd2KKrWn2uPYUYpYBABh1GqxnvojZ8cJAtS8bHuBf8epXM72EbZbR1uC7ZU1D7W7bxG3Gh3uyBhhZ8b1NF",
  "key30": "547NnonBNQgREqXKYgpNwmMhbbyi5jm9wWt8H1nDqHK8tavq8mHMtQCZTYuncmVwph8eERViXpD3QCi4Ju9wRoge",
  "key31": "wR3rGUc75xbCkg1xqhx5jKQn7Y9t6QtZCbEMiLAEP4RvatHeNSFo9JEjY2Bf6UrcLmWD2ZVzXUvNKpsi6FA8eTw",
  "key32": "CfctEkjEFEdJ52vTrvw2yqwskjxzxv4CDRksecgz4rmMXNaL2g3xLUyjFE7RwdkociFGiM3efWHpDdAd5VJQKXs",
  "key33": "5FTGTXemqCyhGUvRDtpn5w1NTDrPG1MqLyb9T8B125eHWHvXdgD8MvHbTpNjYHMsU8eNoySvL2kTa8KXgMPYGjSB",
  "key34": "2LCTwc8yaDMG62ja4t7bNLkdWZFgDKBscJYfwptaLBercY7KJfmn2AyU1DJcKovnmQv4KhoQnfgJ54cacse4Lggq",
  "key35": "4pveo1uQZfVK5ciGLxYsZCDAVi9dGag8rYZTvmCKCco1bfUwLtQnfTo9dHMnRMZaFC3b7xukCy32Pf3LtwCXpynB",
  "key36": "3y8UcyhiU66cDEW7WZkANQoiDqj16DV22DD1vFqaem8TyTokmRENR4dLTudEQdmYGRQsq57QaFZECGrsZ9RGnDD7",
  "key37": "3WBW1tgk32KBTeEcG7ZcDZf3aBv1PCQcYg8Hi5ewGZAyLB3xTA36pRNN8rgK5BXKJF56MJwq6kF7NhNx1Xu4WJPj",
  "key38": "4Nv8JouEqTzkW8n7rrpPTzp3tiwMw9WJyYeRQyiFdvkp1gdumP5K1idNET5XhkCdwaUrYdGJ52UaZ7jdhtP9HYYN",
  "key39": "7MB8CeWAsYYVpkVAURD54viNvjWJHfNG2qmA7uAZuMd9sWbR79JwvoNTzbUJV56bdtW4Au7R6frVoqhUD6uCEba",
  "key40": "5bmuyrdTwCuXSzYR57stswVeapfrhD3v7fZLKrTWtEn3m1PWLeG5P6cmWwQ65GkAjnPvTBttWULfVgx894BMKmbB",
  "key41": "5MRpnjgVqcMUkfozypf6D7jkQLQwMMSUgUfE215E1refo12PWvwNyYVTQnq1U6zcnnsFfg9f1egATwNHq2Px83A9",
  "key42": "QhY9JNMX1MwCHTgKHnMp46ochRj5NdTTFaWz869xPi9XHtF1r5TadX5jX7uoQ7uVZMRmEP37Ubh35j7BGsETgLR"
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
