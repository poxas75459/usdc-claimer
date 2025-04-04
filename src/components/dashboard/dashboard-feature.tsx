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
    "N3fthaAHXeM2rHnpSXutSXKLCoBK1gVb1ZLL7bRGfEgjS3a7NB2cnBk72UazBAseezdi58tS8cStZZ6a2tngKSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxEJ8n5N9XnaadCmtyXkm8SoqJrotQ6H5dc41fdJDyijsxHLBAtmj9MYBammiZuEsGz82eDbbJU7VN5qwehidXQ",
  "key1": "4KYPjojYfYv9M8TqMec94hvopiPvELvyx5HuMryvnXe5gwoi8BYCDLkC4RrSHa7eGDpWGBb2SYxTsTpyXd4bGM3n",
  "key2": "3iUbJbEBNu8ZBCobUqKB11FakqBumLJnCV8BbJ8zi9P4rtYsDi1ENumYYfDJ8D7ZN9oSc7d2mhvuQFsFsMjxqNy5",
  "key3": "3oE3Kvm5NnWQw9YhvA8EsPFeBvWKN8HZWR9r3fD4WHfd9UHeHeqRTE7X96kw958jm9ZzfEirmQnae7Pbgbw7mmA4",
  "key4": "5MMekwXG74NR67ciJb7p77ApyXycRZWDCDAyJtD3Utp5nyW8VmrB7LTGRckRaca93oaK21QiSyNhYf7gEc71V61U",
  "key5": "5aoZn4sW38MX4aqSNr9XMRyTKCTxEfbUKvCQbYXebvb1RcDqebfBHYz9UkBGA2jSNtRaxeUK8hrWWwgD8bDigwnZ",
  "key6": "2DHHPv7npE3BnZY7Dqa24ZGgemSCLtLT4QRZCFiNDSTh2MXPg4trwB4cFEB4J3EesFFnLasZTbZDmFcGgURWxATx",
  "key7": "5wah28Y5aFwgzHKWFYvgGwZUZa81sLVAaEd3bYNPK1BieXX8SPNUTRkzCMt1DDPCci3iqgKgbu3LGLFj4u2iiGkb",
  "key8": "NNVpRyZ4mJsu5khnoYqyKozfarDGsLkoXXagPFGNauzKUkWLDZZ2YkDNQ2iBs6vUi1zM3LvN1fuSHf3PwjCvJbz",
  "key9": "KMbt3srAK8Y5fJkbofkRwt1ZAb55ftG6dCGoGvUZKfcD94F8XgwaUv6yHG4dLyyUtqZyXkK35jaMQnt8XXQCAKW",
  "key10": "qytq24C5BRyznf6YFJfLTkWGDHCfwQLE1iMdLUeMaBTWMU1uzCcrbCe41h5yXHtMttsRmup4EMTpnYuuJQBg7fb",
  "key11": "38noNYwnSJb6LjpLvN41yg8GvYB7thxMZLNrReUt1NkUMSCLXrTdWZ78zXDQEvp6yfaoS34mJFMjPGbNksZgjtCJ",
  "key12": "4uiAMHsYExKFhK5GPoAtuqQAzYZ9rysute5zRy9Q384hKP83t6mU9d7jdyDzyJ8xkcjoCXYp7gRBsWYpDHTcSv9G",
  "key13": "3ruXLE4AnjNbGypEz6rGx2JpoxmxnozY1zpLowofCEDbpQ9WkctC2t8XVEebWCRXsz6mYxyhGjktkze3rEhU5wNs",
  "key14": "5pzwuogR3KhtWwMHbuLJKkmtzWP9FYGov1JJha2E4Vxh1pa84Z9ABio7fRngbWsXLm7gULem9ah29QddAfDDsfxi",
  "key15": "2hYZxQVx4XGyA9S6NGa8gWgBQvpvBMHAvkLLhX5Dm1PvSCrzY67q3DLCz1dfpKMTGG9oCmrpoHGr1ZNQSizkcjQg",
  "key16": "55iv6b4p9vjuRsj4qNATDUoMBJLbLAUS3mgJhmPQRJKGF37j8ecE2iQAEBnioQiHHHxsy7EKLrjgzQAq3xdDp2U4",
  "key17": "MSuWTgon24PYngGLnxffpxcLcgU9CbUGn2qYCzM6J8Ry8epYmuF8xu46pFFbqzTWCusAkx5Nwi8iqQWZnSv93k4",
  "key18": "mNPpmKZUJj1qEzTbxSbVBHYVqwiurzag79hhMEvBRNeSfUcncEHzjC3GFrfXryZuXqh5RqqAGZPfBE3dDvRhwaB",
  "key19": "3CCKeXBNCrRfq3gvdiD6HUktAHdMnTDbfzCvcZfWgzC8JFWD2YKz7FmAW4mUQ5dMNf9Gsq6nTxaXNs9NVgywsY71",
  "key20": "4EQbYRUCFctwWwo4JuiLq6RXGjC4CHCxinWXs522M6ABgEJFZt8bZxJiZ1CHi7BuMkjj2w8vCbKs9c12tGH9JG3w",
  "key21": "4hSn55JFdQ1g35H8m57Zhqzs5rcQoHJnmwxdD3ZDuqePxmk22PdwpfunvdFKZafMXpYnTtDuW8sZuZzpePkx6fH1",
  "key22": "4NZidzxmrdwj2TTq5SvQh3r3eUHUmweNtF7XW84srng8TQHnaAdDMLaGnHwfhnLBKNyV1CbuubN9RM2imTsTbdB4",
  "key23": "2D2zVG159rq2rujvhcPuU7xhPWXwEH5PqBCzB4wb7Dg5z3V1okBB3vGWcSEoNEeDqxou3xMouq4vehwHmotk8wNh",
  "key24": "39gzf6fQQUa67yUkLV11uBWZYzNGhP6uuYoing57ypv3M3yoAX5y2PKirZ5YpQbsZHAB9DspnNJFoiznajA3RnXJ",
  "key25": "5AyMdZEatzJq9skp6ZRAdeSp7b3x8H48XXzr114w8apdTpNBuc6gpyu1DVg3S5XSZyWB1jps2t68rCwM93AsjHzr",
  "key26": "2CVMhNJ6CmSmJhkkMVj22onksYZ2yK9JHPinhAdY8gHpNNxwF3FS3Drxnwmn4SiVBRF4GJZzkjjuCSFjTkYZ4SLd",
  "key27": "o9GVX8v2sVgU3Q46RxfunnE3XYVjpQR2v3D9XPbDyQrHvDwEgpJ4XfmmBUkexp8r63ypzymBXBoWknpuLNDVg2X",
  "key28": "2u5VuoTGoZAETciT6mathYAmi4kSLec2rPd8NhnPXGoqm9KALzbuxAohf1jggTDA6SVJQpTQNZ6xcZCECbqSEQn",
  "key29": "5ocwLKHHqGnQ4yo7mK9Y56RoNAKJUsYXSPhs8coeeuGnD4WyprEzN42ot27xjiX45EYpCgV15Cd1RV3Z94Cfdezz",
  "key30": "3Y8L7wp1DWmCKWbZgxutMM4rF59TtQUFeHfmKoRJhVTtfqWe5egPtkVnU7MB2vCziHR8fokVKrJvivBt31V125Ai",
  "key31": "2EMVyW9p9DSZDAaQ7ZVuk5hoangsNJQi975NqvTLHzbs2i9NTEzfViK4WmZHLUY4ALpVmALXw5B4yGWsFe6ZnSWY"
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
