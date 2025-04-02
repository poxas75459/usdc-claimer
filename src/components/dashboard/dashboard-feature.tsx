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
    "5t3qKV69w5YPE2vKS1T6RJKoM8y1hrAWzoskqXXygBuhfgnyFhJwm1k2ciQmysBs32BnKQAjBGGQBeA6gW6HxuVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m769Ztx8eoYa2scknqTbZAVYZH5SxkN2wqKBSYToBGQTRsHarryb1DX7fNqRkht3MymyeJzUCtV2msgr57SG9VG",
  "key1": "3mJnrtBTNo9bqiuBP8ZqpZMLmbmhup33n2KeHQWp42AwQFMucrYEkCLDKQ7GkYiSkDDE6g4bEa6A2TkfeGyXGFPa",
  "key2": "66HrVk7sKQDAMYfYskzt9JBJFwAf61Ni96TEEKC7ZFHoRc5NBXXdQChJJP7zvZVECMUoAnAXXXRLufEaP4Pq9gTU",
  "key3": "FbNEdnS9SZ6ViR3uLYqrE1xaWEuY1obUvpsRysnd99qGuxmnE9NyNrMERDDNHrwYzPuYBpMsrp1F7UXGM4xdvtj",
  "key4": "5W1ude42kXdYqmzkuRwM7vzFp7EYyhCJAV74DGGMTcCG9egUZ1MxWuKSdW7vVXA8pYjwVRRBBLxRGneb6poJqN5f",
  "key5": "3cPyQhzzdaP6CNkzso32bP2EGTjHfw9iYg3H1PFL7oLNmq7xzYdB6eR4Am1vmC1874cwDCC3TogbqMJkps91neKy",
  "key6": "2qaqjDRJK5ZzPBCbRANPaqJF8gZQ7HuBcUKfe5jpZVogvrDGK2KpiTVq51yrtpBYkNr9cNMELifCZJkKBp4kL9m2",
  "key7": "58myirkeRymNJe4afeZcuyYxJ8yChgMvzP3jYd34yky2bVw4A6zftcJfKLfttW6hhbyrt6MEqr8qWoja3wGfkURo",
  "key8": "5vAvYUPkNf5joWf9MJscP12nCi5R7wbgjStcrNiVkEYzgiaTArvLK1gAgcnsf6pD9LXvvm3ZxJK7PXYNy5PxJuv9",
  "key9": "4wiuf1c4AS8kZbfmKys6CoYDpYtAHc43gfdFA7wabty2fwrq32nnsrFQjqQdLqTd1TeEevTSVcstKnf2Y8SpiQcp",
  "key10": "kY1UPRm9yDyWSXAEXZjKRExmeYkx4nWyjwvD5B49ixu9beDNHVTfuts8ysfNN88JuodUDe5tiDmVZcXhV9mn3xt",
  "key11": "YmiN71vj4LfcyAJdMpvUHxsdT3tYwucry7vmrgma9a4Z6sDzTkyTXmf38DNuum5x3dD4QFkFDpoa6MBD9tDXD5C",
  "key12": "5t71iGy8MdaELa8ozgPnKNFA6kV57k1XrMy8W5FMU85kXr2ZHmQewFw9HKTNZBt2EoWFntC2tunjAsq2rReq45gV",
  "key13": "Azgom7cYZkCLwhUEGPCfProb1Qs3hkenh9Niv3em8dnYYLfJ9CnRK1eLXsnh2bPwbh8yHJgUMk9ELh2c38S2hLS",
  "key14": "2msG2okLQxtRMjU3qMu73fiQfgganUV5Waz4CaSe86HZ1Rz7Y4T9Rsr3E9zY2ZyjVtSuGgj7b8Dn43v9N4RWanGJ",
  "key15": "3XMMGfutk7mXXMAGYccAtmwEcwUAj63JAvwGu5MVjBkNTR1LQ62s9NZQT8JeJp2RCYem75b23Kk2qvqjCY9QrgVg",
  "key16": "24Euiv4UC39k7zLZAwJKXWAmuqh7ZdHGLDgucyFHUJF5rf9CN6tRghjKy3fQChXYMeWUee88KcAVdLVGRspdR8HZ",
  "key17": "tPdXkr24znqQmCvkEN2qSXroF1aCVbfvSSwkn1YL37XAHSXm4aBHnxTUHqsi5PdevV9tvv7FCKdfXW2ECD5FqkP",
  "key18": "2x8k2bFbTLr6Q3A5iMa5suY3aQhofPv9pDSRUZSNEE53TNvHZ6Gkvb3PKpbiSBrzMngBQu6r75FREghwg9Kr7apX",
  "key19": "5Af9XwDFR92LMCkBuxb1AqpmQR6EB146ebd7qEmn7Dj6QfHGEgpvTR2wC37xnMdz83xo1WwezXJnNXnGEdo3M5ja",
  "key20": "3eZW77BqQsyc62yvXVT8baLuZTH9mPng63AGioBb7fXDWPAhU2sauP22V97wvZp4wPZvgNhW8YqE5oqfnopBqANz",
  "key21": "4xhsKqzh4hdLmuX48MNisCb9iPKXd3UStEj8KCk4fqujzckm7GXeceBNbLaFoegqBvDUhWJuEfezQGqpAzGJbTRT",
  "key22": "2KSbbr685jAg6WU3XRJpu5GxpGvgDMQeYYjMEXCTw56VEiEtv1QPexWjadjK3m9bUems86mXormrWgE5mrDwYuvn",
  "key23": "P8WZbrKPi4rh2sg7AUmAmfaDDkyLRgqxH8pzTt1pQDFbmBRsMLNPTc2JWrsJSEU8BB4ibfXWYXnEktGdL5Y57Dp",
  "key24": "4q4gXjhoG6pDVQBP6iSRNZT3QZDhUS6VJ7v7wikoGLvYC4koiWw8BqcdG9dbJ1GHTTA5x1SHue3dxqJXMM8ze3KN",
  "key25": "2tGedzTjB2Ba8gDYfjN1k6HPHdpUAV53ZtFnJN3vSvQiVrkzoLHH26frnfKN3H9pLCibiH8By74nnb3WNUGAMR7g",
  "key26": "fASjJM66n3FcKFGC6HP8L9gc2NUMLsoWMyZuT8qo9koCzn68Uju4NAuWZcpfr2TsDG8enppTnshPVnRjzJULHwg",
  "key27": "3szKKghGKMQ6P7TEVBbUNc28Pd7wXDNrWjAgv3FRXfxHZGuCVi8UWcxuCvmh5fyY4bgJ1Mnm4LcsPwa4nHfUQ24T",
  "key28": "3fxRK8xWw4J8dKmzL2BMB2zgACZzsuE7YkCX1G9KVVsEigxV3cBYfhjNcmTMgGTWy515sRJVjWBXFDmekWW6acWw",
  "key29": "5PEFtUyvX2uyoSRAFYdvUEHEKT3fZQ5uy3cLooCdjgK6xaJ2DVBkta4bkpSdSe5iYE5YRmjDcS7E59fo4gc2L8Xj",
  "key30": "3zigByFj49P4YrctfWXncXGbhuTV4HN18FKzBFZ2uguRFcrYehcRTetLDcDZ6gaHUe1e7zNsS4pFTuNjg9M1qzB8",
  "key31": "YJFo8tXiKidZLX6GuGVz57dtFXSqzVSwcoTdwu3mGtQf7ojBt2ibbwPzUrxpbHUz2fTpomweHPVTfeP2gDPeXzg",
  "key32": "3uj7YbqWJxnQeVXBqXfb4FcrLTUb5ZgSC49nuXGEhCRRBx1odGnGw8fGcT1omA8Fdgxj899AozaLW8ob59eQqJkv",
  "key33": "apJ53GhGJ9FF37QdUa6c7rJXJrTpo5guhywXwoXWepkFDQZzwr5Q6cVoJoWLGzqtu768tfREG6Vrg5ChoLJeGjM",
  "key34": "4yFmNQAAWsqRTzYAPWpfkWHiWh1wX13FvZACc4k6fgS6N4n4cCHyMm4hRj8KnYyDouqJiuWXXuj9Xn4qKtE8iVSj",
  "key35": "28tkhsJ2htwnirHShk8BTHJxw8JZ5SKqAvYpEeYhke33jnCo3DA3qmDZgh5cwmrHNGu87XU6DNCZYBXAUEy2cizM",
  "key36": "5R71pUAJ1H1Axv5ndp1HPYqYkzJgd6RhoGw59DgQzX3SgRnMdsAxaUYES11v5Xoj4YaBT5CB2QcumF1tLye1UwdF",
  "key37": "2bWeMevQuAbMA6H8VYTvhWcigA7Q7fwhHjRRaiMGW8BXUiMrSvBTJLk237t6imsvVwMk2sK2R88Vz8tN5j5Cn7Dq",
  "key38": "ftFKtcP1CzkFP1UJZfwiojTo7q7niVebffXEjETt8MsqejhqhCXzeNKm4eX31ycQgT4MmRwgj7Vznu4r2uHRyYe",
  "key39": "33wGWahpbtxfv31s2UjHPNzZ9GNjgGv4foR61HUtXxAxb5XmovHbFRPPuHYjhFqjFFQeXxJCTSBoCevf6CnHvTSo",
  "key40": "55Rx3Qr88EAoRMbWfDY8fnQyPnPKZTx1LD2wM9Pwq87VKenWTFohVLJYxReGzxRQuQjXsALKCDX9FmkTxZeL3NGh",
  "key41": "3c5CAeXbprmUyR6bFWDWpBdY2JT8uQxha7L4bfWynnsMpbzaApRsei7VWtgneU57mr5KgkQuKPPs4kk16zjFbBES",
  "key42": "2ApGTd99f3NGzN2kQz8g8B6iw1F88scCaKhPoru13fmGxL9r23qptVdDuyfgKE93vzC7Gs5nzyyXx175TbtCTUPJ",
  "key43": "2bpVgscJxijNF1Rjmo9y44MiES97cS5GRzEsEY2RFKkqnKUNFvJS1RsvHnBv3AjtU5qP3T4NWpAkcs64FHURBRJD",
  "key44": "v4mAqhz43ems9mDXvSJHVYvSyuzN7A15UzgxQC9NMi6umXhkowdZBybqFYioDj1peziiwiYTGLErV8UEWubGNE3",
  "key45": "3B2Uw3BEVryiZaziZAx2sDVv4uLxsLqwCRP1ADGgKHmWTft3RjBbbNjtzzffv9yQCwKnxUNqv3esYcKhxucMCrtT",
  "key46": "5yZzVrxpmNUBdDQf8u3xnrwmcrcoijeyBnjUiVeuKizn5TA2DQg87s3rdp59yRu5FDBMyLNKnrwrhi44Z9odKFQV"
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
