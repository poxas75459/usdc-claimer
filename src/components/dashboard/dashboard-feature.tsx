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
    "2QZncUBZeY1MoaRqswBV1ysS3ksopeoVs9zw769CdMzBJXP26RoMzne3VzCrAaP112sGx5cH2kiZ1cMjTW9ENBJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bFiBwZCK8BdcUgUJ91YMsML4NmoxAsa2Z6PA5KYyPaqUfanFag7PfYwWXDUQLFcnbbEQKWWSGZLFQrtk97TekT9",
  "key1": "vSBHfVmsWrGU9cz1XgzbBv37WDG7T91zDZBRV67znUavfzQrGRvrv1aRexpRS6Lu1GkJfuodXyTzCSi2B4Fja3m",
  "key2": "2fnu4nFccVyhrA1HeaSr5jwFgaZEaouf2xoiuWf39TjWnTnRZRVoHLhCQXDg43HJQNGswrKbfNHs2qgK7AepCzV3",
  "key3": "HTEEoKh8oHQd3XYLWxL85LwBfmeaBzkKtd7skQA82BhAoWwvHd7STiA8QTYrzNd8Wj4s1Bbrbq4undNXDE734mH",
  "key4": "5ZAQZp86cMNurbumWtGfcFXXmHn2ocMvCRBPHMQwwoQu2pdA9GA92ptGUH3nFX91Dk7gJfpdth9jka46t8VFAjaf",
  "key5": "5bLMrFtCFAqBxHL2476wNwJAdddjqfdhQ6mckzR5CcLaYmx7qsqoHfNr2KbwmXAbHyvChDzr7g63dPwLh2yvkbPu",
  "key6": "47oqLMEmxv66AmzEsaovZZA6DwGaEnK8ekwpY1xj2iqjgpsq9ab7QZZ9bwVAQ6YpucTpv4Z3xV2PwjiCboLa9tQt",
  "key7": "5rRCjZxaWkbC6bXMF5ybxx2y8Aq9oCTQdw2DJKMkEHDnBvii2Z3R9pgBnkKcdpQmuRBbAyhqQNfNQBNGANHFsoz5",
  "key8": "2Y3sBPiAG23Zhmq1yKYKVSfGuYFRzwMz1eDeyTXbr9nKgGG5WfkjmSee8zRudN3Ezh3iXKTtuzGG9sUyu8xDGcfP",
  "key9": "4oUFDVXYK6RDAWniaC8JR2SCaw98wJVVSXFzbxNNUVcwwoFWPCDRQ887TXVXGC295u9rwLRAZu5uZ2DH8B2Rn4KD",
  "key10": "2c54xGtMpvadJCD3fPPVaNbzWum59zVrPULefbQVHyGbCrkBLGxcqVxKpm1ye6GnwTAe5bYhMvViQPzWM2G6eHwy",
  "key11": "3LT6H2Ycompzw4JTBoAKc2vkzpBApd2iXPFhz7JCSdtHUMLmqrNZAMvnYSxZkw32zzhjwChE9GcDLAHgn2WbEDxr",
  "key12": "3anqHrvEGVxwTSjkSZUMfJjzpa1DXK4tz5VjVGKjgrb1m2k6kWSECuuwFjn5cfbCXb1nJYxJ1iQC4MEBPKuqdQ2z",
  "key13": "4s93KW8AVwvXCJ36ui9recGNxFsnpLhwZqBUHqx12C7aNnCLiwKhx6HJkXqAo5qgwFWqyT7CdB5MJE7MBYdfqmNG",
  "key14": "4YBpWZZqcPjCdsAtSAd4xFoBKhrzCRgKCWxCea7fFzBn4RBDxZE4K43eVwDPG3fEv4KtnwaUKJV6b4jiyKP8naNK",
  "key15": "5njmoyBWyVDd4sBEbEsi8fgTc6wVyyH5Z7UjGs7SthobEej1DCDVKbEr7rmusb1FcSgKK6k7ZLEoNvdbp1oZvCqb",
  "key16": "2Kz6euVpsLfzDNPphG8bTqP6w2R6kZYqAQzAo8MF6HjMJryJ3VYxk8Xdabn41CZYGmvSNz4K2Uw2biVHjURa4CCV",
  "key17": "4x6nhCamiRJAygDD5B2yHBmWcf9wa1rnKSdDfdUGfgEQbcEZLtpTa5mCAD9iYvGD3qDd1XtAwdFUeqFUB9ZFayxM",
  "key18": "4TS1JFavWwCiYmuNEvEWtEzrJJTbtTCEQjUMW5RmPB2xvZLud6Y5sVLxLzhRAq5jTbDd6H3buv42qd44xdaiQLrh",
  "key19": "44ZEL35K89wQ7Z6mN7uobMXHcPBuwDRrcNrsKJmDbrTmP1i7qMo6632vV7VL7W4QvzaRC4CGQrsfuh8NPTE7oNMh",
  "key20": "28oeyzBY6qs4JtNaRHY3eWRvbAQyz91wpyC4Ym66E1nXRQwUr48quqVhWPYqwi4wq14nmVDPc7mWQE1d9kTgQFSm",
  "key21": "4pdye6T34cSMECGpj85pwZWWye2VvkjiBzqqv7qEAYr3y4FZ9x8rhTfnYAwbUufYApqAGPcfdBFJe1ehh8EJeav6",
  "key22": "5Exkq16GKTJDA1sGydtkZWN4sxwneVHT28kXSvgSE2Tn1dE8fHVy9xJtsDMpfSxTLQdK1LCMAwSDsQrNWpaeW9Wz",
  "key23": "4kKBj7r42HEDqrFVMgQvB5oK55YUBkX76DDZUZrN6c4FdZs6kX2xQXG3uMujqoGHaoNSCtFk2XkoXNvuwuxwQtKr",
  "key24": "22ZT6xXjVWMsmnkddwd6R3HRo5YNyMwa2DoBtw2kqHEbMdQJ2ipa1dARHVn2UWYZCW13HLy9MFurPjpkkuMfqPux",
  "key25": "8k2GyLQXC4Jfj9tXECeVJePiKTDYSqU6kmyPx7veMWn4hkmt34HMr23hPzj7axq3fVHe1MTwCjocy73JMqqjXcL",
  "key26": "4uMeBy3ZJ8kDzHpXfFJBFDUsxTzu8i7RaXcEuMXzf23mLQarkoGZmG9gWSHJDTy3N2nWNkW3vaCx2XsUcuksM924",
  "key27": "5Djyea4u1TBn73uzsUiTBmRXm2Yx1ZMPg1WcY5zoFojkfDbvaPCo8ozM5ddpn3s9etk2rBdecM3G7nxRDwonx3oQ",
  "key28": "qc9Z5QMVp9WHu4surLHM2u31udg1JjDwo6wjesbZ9NvZJ1Ywx1MLxzYb7jHKQ3Z72a912b365oxFZFvQhkaBHGP",
  "key29": "5cB3akCLP9JbaPig6UiHChTHiBKXAePDNNWFM9GZkweYCixtFQdVBReKsXdBkrzjjKN7KmHcG6kMZAy73Jsu8Y7a"
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
