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
    "rxwrKgSyNtTSLpeuakoTttoCW9bDkHRxEtLkb7z6qHjjk2yCGf59k9WudP9siuuBHaFLUtzBnhrEwpFP3LrswsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54m8mag9YWyD9qDVb5nbeawy2Gt7Wg1rZmtLTbEMW4P189QLs9xknoXgyxUxLZx6D4YTRsbZhLN8L5M7wU4SPRck",
  "key1": "29tDmByr3yww5NkK42LLvu2HsXnNcnMeQuKNrZPfFV8RtwbtWWXvUjJGGXBRPZ5FLscigrEcx73CeqECZFW5H2rL",
  "key2": "3c7LYcLxV3QPeWxXacCRL7NxWFeBAmhCcqb1N9C7L5Q1gg97yR5XLSVniijKkU1rif8wrJWcrdUUh9s3weL7cmNZ",
  "key3": "7AP7fVU4JPw5VXQZRDRuc6nhuqsTC8KDYroWVQ2orkyCYEKQySUJQXdtZDwMNHKw6cVa8zdmKLgjcAG3N7gc3gG",
  "key4": "2cYJJYqCzNXip6F4cDpBA7TAhi9EgcWDkVwtkXjjNvNFs9ed8Dzq5iToiTN65jRM7HFMYtGDHYrPghFtjJQFASJg",
  "key5": "4vZY11xfxWRYBWsxjCXkJiFoMrA6o8u2YF77GHzJXpegy3YWjp3UQdLZMTmcf4LZssxNWBo6LCwjCoNjaH3ReaeQ",
  "key6": "4WtfQ8B2A5P8X2Jd7UrvMYsvxc7NeEENF9FYfSD1bCSDswTGk5uyzsBg6nPy6Rjm9Knr17RVbUQ6NKnKheMdGtDG",
  "key7": "2FCVHPyFoif6rZojSdcV9gyFHLFGdB7pezm3djNV1qgaxM1GxPHwpYS8aDdF9VKPGpsj4qeRtxTFQwgtQAEy6Hon",
  "key8": "5Ubp26pWZwaBnyBdqk9SeHJacJuknDwU2jAggVDVDQg1yeERkKx9wpDJZwpSTS2eFtsiFdDxNgikRn2LwYBZPM5k",
  "key9": "56vzBpBqbnAavdapnU2VaxQroUFa4pHePvmCUrUk1PtvSgaffRxnxeUVTHhU2KFSEUVvckeVFnhfcPv4qhP7hivh",
  "key10": "Srvp5B5HNcZ9c257fEmk31HybmBvWhWGWWCgQjhitTFjh8pZyD9nFso6it3UPsk3Fiwp4VrNfC8HXxK2Yokdso7",
  "key11": "4PoJ3n13n1SXYxEd2tfq4fLvtQu2WgR5hHa5uXeNFQDRCse638txT2UBBpLX6UFCGYp8Nhpcff5wvZYgZpdSZt6X",
  "key12": "344vkPvpJc9dUG8HiW6aS1yNANkvcCEqMnmh2QibKCcdBfWArdL972SP9LdEG7JDiFi4YUC7cKnAYNYyffXAfeUn",
  "key13": "5D72ET9AmDfBQZQFDea6CvCVjS8reR7vquTn7EQmehZZi52XDMEB8eQ6ELhds4ts6UEs39A8LLaZ2VBWYArJwXKH",
  "key14": "4XQfVgWptbzMkiLL3zKcEHKtDhKLkSCKKM654f8wZXpRGP7bGNL4HQdx8G6YWwLNZdotSChckxYNcMY7f5baXZZP",
  "key15": "nMBfesXtYBTzNPfavBmhZC5qae61L4CuucpQmbVvWKK84LgqeD6RFtmuPtcpqLZ6yYKYrvmguigkFGfKb9MngiX",
  "key16": "31x6FuoHHwS6Xyy1QvbsFrgXUF6u56tM3Y4E8n1Hy1QRwpGTeERYVfw5Dovjdsvm5QzMJzZAJ2GkXK19W6TnsxUK",
  "key17": "vVSDbz11NR9vjjUvBpFuwN56w5kwYhrsV7Zt5j8fauVxHaot78zSyMb9PX41H2Q2xVU5YbbKTNs61LTZC8GcivH",
  "key18": "4VU9nbuPF1i6pDMKp2Rhtktkr1CktF9eKJixTaJES65bsjuREmkR6TDFtP3KuDqAcor4rVunhYsri1kPNvCUGURP",
  "key19": "bUtVjiGTTeRT6YXGMaEXyas8en1NbqRkT2Er5BWxrZifUaghSfohrDP3G2gxK2WXKoXTN9Fhxya4dCSuPe1X4W7",
  "key20": "C4iPtPR6ucsN7ntr9dpzDg2CRQSF8wEMMgCThyv2DvUhMnRyLaaZ3xZ9mMozqWFA8sTpU2ZYKp4ELzaeaCUWH5Q",
  "key21": "2sHgsimh8TVs6rfceohtGxw8p411kPhMYLRoDgTfc9NpArCGWKnkb7ewvJtLbjRikLDYZ5SRFnajAWMvQ5mMBRhA",
  "key22": "4uyX6cAtEFCoMp6p19aYeA2eBjjEKiXt9U8w1oAbSB6ERutKWE7jrSqKggkkd7tyWxoBnVPJgaCy3q93ukssa8Lv",
  "key23": "338dujfumh5HB7S14xduv26xt4eBZqvpqM1fsJHd3Lt131g3DZnv32csW2RqGheS5ykStiWH847JSjoE4yqzaeru",
  "key24": "5W5T1APzYEyqjRUxYUiXqS667BCqp2wpT4sWLFp5EQacYyTNksrtAmoQXGhHFuHAbWLZ2bgGDec4Mi3Vjihskqrt",
  "key25": "wMBXhDZCyv3HkUwWoa37u8HHrSQ8wnHKCNmKZ2q6smtQpHZJ6MiCBRWsZn74S2z7cvBPpWvLo7zRbUHrt65a6DX",
  "key26": "5QWBMN5DRDK8awSYhoHjghkAxzjEeFZ5UoUjBV9CzHtMNk2PDe4dVD8xmSzqfVGUFX3pFxW9Yrmg8Sufx47qtQ3E",
  "key27": "4AFWSZBZb1yP3hY45A6GaMF3WdiNk6WumdqTv5SE41rKf11G74VEVu73pUku2hYhK2hQQNBrsaUY3HKCt8LcsYNu",
  "key28": "43KJT3AWNz2ne44jBv4wdvs6J2pNhFnbk6y7N37vPgjHtHfzY3hk3CiLgLtt2FjBA97Vk3hSTUgVJFSQQobxibEj",
  "key29": "2LsJTgUhZEqWyRPL6vSL6kemF2oStAp8E15LzFD7tnUayVvn381S3kAyFKtKPfAiYAFYrpaxFxjeqWAm1DjdRwZs",
  "key30": "4mxaWFeyqjtf4wqncX3a3k6xNmeDLLi8W8fLcvL9PHHTbLBQBqkvnLX47HwQ3ELwHrsL4CrJYzgXhGeSRuDNzNPJ",
  "key31": "39hbm8EhLuqBs6eqW4VdKwMovExypTraKgbZRZQN5LFVbobgZGcp9zJdGH4yvVjetxF5J8bw4xosoNdt5z3YH5VB",
  "key32": "Dy7MNfThxxVHW8p3Z6VsB9uRqojpUjspn7YaH1An57cA5ABNnBBTngfaK6RhMxQmrLzXQbkzQ6AzpqXGMPVXX2z",
  "key33": "2JsqcUpAQCf38PW2g5fGbsjUAfAm7WXwFrrby1dhohb7xv69QDSX5rPGfxjF1wZX4EUKbUvJ8i7bEGCSYm5exq3q",
  "key34": "5UBEzKgQfG9CthHUUZ28fSP53UtuuPPbLETyiuEb3BmeiH6aWK13B2sShRuNcXgec7pRdv1A4iyioKB5GFNXMpdG",
  "key35": "3Zon5KpogdRXrsZXEzSNfkhrRcj7smPzx4quEGGtBPwzgdPxFq3VJEG3yRoELpnG6Z8rheG2qSNkLkeZaWCrtPbV",
  "key36": "2BiYX2LHmLHkcX2MPcLmfZwdpkRwmEd91fXpKKodU4SzcoV12qJGCkQ8JgHAX5MCquakufV1gX1LAGsTViiLRgu8",
  "key37": "t4Bw54CpxLDH4XEcjDvSEzhk8mk3RDpekGzC961KikMjvyLWRw7g8CsuincT9jSmCZAhakufna5fHmjEMv7hQFn",
  "key38": "4R9UF2N2KqfwkTKrtJqgGKvQPsCR4Pu2K1d7chTMfWyT4rBzoB85hVviaMefhHdMs192djGDuUvmhqrYAaoBuMBL",
  "key39": "T8uHyGoqAq6ykeUZwSK34fB2xcjXNoxjyWefV2TzKMrJAxQrwdgczTCd7U4N5gPZYCYkuhaqc94oHtDM6gZqSf5",
  "key40": "mG8Macvpk6oWza376zHLBGff9oRivQrmXWvVb2pviLoV1FaNqznAh65NR4vMCMFhftCYz8BhMcXzzhdd74H2SnZ",
  "key41": "3g91jn1XCjcRR9yUK3rm1RKwUezxy37VoJzZLj2ihj4Y73ByKbTqXUQZfdm4yXY6tcLJHkWZrVbLPgTiNpeNnej9"
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
