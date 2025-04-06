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
    "a7keEBak4UJvEE3t88Ngwp1kinaXsCUxxuf3BQQkfnXLk7cTt7ezZj3TVxFn4KPs5TbjumEGj43PAGro3jvxZVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BDzCqSAxbU5PT2HbuBfLh81iHN5G23mfgXjbHSyxxyxcXXFeYMf3KyKc8UXFTHndwoeU91QnXNvvPeYLj5amu5Q",
  "key1": "3tWP8u2jgXk8pd8tJxWwFpwAWoT4ZAYsdF4QfQvAduWwStDeJRiGfgavvFBkrgXdJ6eTMpJehBkKYxqAUvdC1rgk",
  "key2": "5CSrEpVNA6iPUFWhT9QbCbMtAkSsCpVyu7sEZnizMymi5jDWiVahyXXALxmSuiNMptcxLs1fqRBEBkwViRZwmgud",
  "key3": "62BcEs4dCct1Wa7b8vhX1twrxvZAy8KtfFTnvde2nJXWb3RhaQULrcG6Ky21urv7wQE8WHpDx1YvWoTenQjjAsRG",
  "key4": "3KY5puXu8WpA2yZZHqBrFN9XhDTXKWzYvUpq17tEEPF7Bapr5bGJv14sMseBSLPdjaHpgC1SRN1po7UcnCzQHs2i",
  "key5": "4quNLHQ5tBgYdzf8QVp9m2n8VJsu7HyR8Gkm4qqMghwhxoUow2ynH9mQzcWHERHjYLDAZ2jJNDWHqm3R3ePXGApm",
  "key6": "5N9Uhub2576CQvLHfYv8oSbnzMrbxdDisotsMJJe9PimmYTGj4jBjNvpqeS42mu9HBsxqZuRUeqC89XKwfgcYA7m",
  "key7": "58gBkxfVnpB2mxbXrGwDxZmhWve94Dmp1LybvnXtYUsut7QYfLj2KtFdSa52sBzJbvqfYWdYvFx4Bw8vgNDwPDzv",
  "key8": "N1JGoYuwD3NKa6hRqeDEK2hDyWXiriN6q9j4A4h99iXu2NhusU6A46XFqAKECxR2XqyuHzDCEuBS35xrq1FnPWt",
  "key9": "Q2gJuAZP85ZUWeAHRF271JyiNnwsczTed4xMaC4W5VBvNqeiYfUZYgwaXbaG2ZEY5dR3tbVB3wK9RwLFabNzQQX",
  "key10": "3dKa69HU9Qq4ZE2t2KgNZUayxUtmbLBoxe8MGrp36jzDSVHZt1mc8jhKgetDsjdj9DfCezAW5UZhNStFV9UqrTJ9",
  "key11": "3pkgoRNPuBBdkmvAEWEhR2i3VUy3qn4N9H6rCjpAJ4XqBCBTZ7U4ErHvnxLVvw5dXc2kGJTM4MaDC9dU1v6b8UDE",
  "key12": "5fUyheymdDPLmhpAXPCNcWrxJV9LQDKsn46AgP2c78JYr4B2HXQs1q33rAnGRaLVfGxmtC74pYbU41s7xB4TLPKB",
  "key13": "5uk5WjYQhgSuC24xXe2NizunDdT2yv6fjvgeny96ftcQQRgkJEkUiqfAjovZPXJmYSkmvrKhGwHg8hg19Vwc7w3Y",
  "key14": "5CBbopWZN78uY51tUMBrBfwxLuakQkp5Xv8hz3HvCYphddztk9rC818jThsNC72vizoam14UNEoRHgqMU5EFMS8M",
  "key15": "2hZLFRj34374rq7NQGJNmUm1taxSzdumG2xK1LHb5amosFTffe3NfVFbJZPMexC9pnt1pNMxrPQt76rV9Fwk5bjJ",
  "key16": "3q95EpWhZoQYM53GZe4Y891kpamGKLTbNb9hKuc5UErdh5oeqcEUkn3MYSMRkhUA5v3ULamLqK5KPGH57RBTSxth",
  "key17": "PywJjK7LRVbKyiPGWetZFugXggjanE4XTjgHV7RKD1wUB6CQuuyu86Yk7oe9Q5gJXvsck87YZFogrRQaZwJ6RWS",
  "key18": "2vsUMBUWjBQXFy7EoHBbdtS8WCQ92JbhMiKBaBBdCXsUrSWTgB4JHwX5wieF4GY9cKt133FyJhVKEHrAAWDpCcgK",
  "key19": "2eE4JMDCw6VeYghr5iJ6VA97Uz2dgAwsvtbvDLrnXZU7psiZG69mvo525ohJDZhJ1an2g8tH2BcsE3D8MuYnEB2P",
  "key20": "5cYoncTeisZryFLz9wrXb33FeEhpRBvgKh24anVkZj563KuZ5R4NR5eCSD5gyBST3hPUU5xe6LDruwfTNKqb3Sy1",
  "key21": "2p8Wx1j687Ut5iH5TEEJf744iRgQgXzmUUcyjivH9qspygM2e1XkGUB9UPNP7TsWroXZCPFuVDQ8ARchbMfm3TKE",
  "key22": "2B7CYVVmk69X8ELEX3K5v4zB7GYBfuGoHscXex8B8ua9MQRugufoQs7vNh48WenQDbMqfwX4fnEfXSvKCg2jqVDa",
  "key23": "cEJMVSmiGaJ47zi1Fk6ur9W7pd5zgc6b1dEj1ERZd3pS1p77LzGQAkFT4S9WpippcMN8qqHx2iCEYq8JzqkzFAE",
  "key24": "5ntL5L7WLtAUz5jx28H5SbiweN5GqMhLL4XvpjC4JhFbHp2iqjRra4H55co3HhtXP5sJqtqZ6qFytL3Brzcrwk84",
  "key25": "3693VXo7FDxUhKijbpryxTZ1xVGspV3jr8Bpokd6HQBk4Ng5DKwVNK72zWmyfCTvyLXJMB7hZH3Thuj4VGGiN3hb",
  "key26": "kKgfwBQMPwU2XWp8UmHhUrVzAKFKj5h3tFcQ1RukWYUsAT2TQYGbGYonSHfaw3RS3hjDkneTNypMavmY1CjqLFx",
  "key27": "2pdkDpNTZLbEy4avHeYeEHfJdukDPwRj7iTVgHk9122JWsDuz4fNJRArNjjpmLUnrdTHFEkQgbx9heCM4PDHnZd5",
  "key28": "4AcHX9rTX3SnKgfuPXytZwJcaPFAPJK5xXCLmqpDhFj8DurzvWJJf8uHTPXEHvYSzDaNg77ErB5ow3RotF6fjZWd",
  "key29": "5z9iwucTXwqzYotfMnwdEiPqKaqfncRVB2CUweDzd9VzeTqvJ9jtRESTQabA5WRHFZRGfZUeydMH3KULhzi4NLED",
  "key30": "4c8JciPwLuSjiQd3WqZbFZ8miMHxjxHGAZKfaSd7LAG8BFTfkaPFbvjrLdGwdG5QmFVpWYrfHmbmTx75SssLmC6i",
  "key31": "94UEin79zcorNJp4tsLzUk9pUJbFCJLwi8dvtJ6YTefQvk8wskQQ9WRexWCZTxZpDuuwoSzQVuFd2E2KroCXtpy",
  "key32": "2uCX6egJLPrJm4kGWLkCbuGwj9hAktqJaQAF8cQj115ncxNCWfJzDjRxv54GHw8Eq1D3rA2prdXkjDp7xBHzh8rJ",
  "key33": "674H341JTk73MaDBhCGBPF37baX6h7TA2AgiRhxkqkS7muJgmL6yKonTqQqcY731s5gnKMhZVnoX33emGJhyaHAd"
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
