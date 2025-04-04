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
    "3vmfJwdwYrRZSPRoQPbpUAFzD8eAeqk4VzDxbKksjFEov1Faqn56NC7BhBiTbyRFfNH7hWbEMdYbxWvNpKGULwqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UiwU2ciyfHB2h1SbqauehaGZbMMbnYftGgvDR9WGWeywcDvW8eAFZDMhJ1MjCaPCPifyBNhE85pcY9JzjikocHF",
  "key1": "XFDpu49XUs9VW1Lhub1LnCayjen8x38485NCM4fYyHuPBqXsPW7b7i5JTTX5ACHmxGBJ6RhnhqvKhvMny26Hwge",
  "key2": "24TZGus4uNvmHtAad31i2tXtDBvyAQ6b35ajwUtsCnk2vQjSbPDohkcW6ssUdoXcRKWEYUWdVbHJ4ciD44bNrLPE",
  "key3": "4VVha9yMoe1UvppK1eADfN4gNatqsDMspjCbo6mbf1DEHf2mq9ZFG8stzkmRjr7w8RXc857cwr6zM9KC61Q6wD8R",
  "key4": "5L1ypZH8MBZ2V3eC9ZwSCWFXYD6Bb5kjgB8fL6EyG7uYCKQenDhxCBjDXwQUuEAm8eWfRQawm8v6PqpCJYK29g8p",
  "key5": "2eyQrTeDfL7X2vcer12pEsrAAyo1HmcwamXdNY9b7MdhQrQHZN8GiJdAKToT7eJ1e3M2vBNkeENz9Ktrwiv4YTmC",
  "key6": "4zwmG5Qwp4Bsc2Ho59f9p1Q1Cko69rwuwnp5K44j9NiRgQxwZeaKWoSQZy7msfuBRrZYV6dyRzXCyi81X5bgTM8M",
  "key7": "3kcgrMRqKeBkwTNYdbcUguq5MvdkpMURUsudgRCaBEL6iuJZRnbJN9gijA2eAj6ZSvDmZ5AEAhrN99ngxv475Hxm",
  "key8": "5Ej5YPvmYkhappkA7o5KJS1HU77Zt8pLrFZSC6suQxr5o7ySuAh1Q23YndCEwS3XVHWC5vBpsC81tHTfhPA5n8sN",
  "key9": "3mQFF1jhBukcCYdFTMZxM9bW92tKXR6nCATGXsozWp7WuEnVERkDMhY8B9kPNRELF7gqeQkSHhnL7nAJS9u4gQAw",
  "key10": "5KcpEsE6jJrDvCq1KYHn8uGP2Yhw5YHeNvR7HwG66dqPgLnezaCD2mkkQY2HwE5mBvLrDMWSRy88QgyhchyuqnR7",
  "key11": "3ehYbuH7btQQm1TNiqUVqZ27nsidkMuTnXpcHnK85v38jhqLB21Lv1RrgLiMafNscxhCiEGZ87Pij4EKg7uLWhcY",
  "key12": "2qTbX7pqBpYe4RQkX24enUmpPAF7FwJQvRTVVvm81r3yYGiLEY7cWrD2ctLqKeyQrxg4n9Xsn1uvHjD3cE6oKV7o",
  "key13": "5PUDpRfkQYxccoQMdLKQPGoxhuPwQ8bBswVFtu2voYG5iMuYfW44H8LGJ1CMLrMVgc4i9r5dRSyvA1tvPqeSSjLE",
  "key14": "4iZRBu5kvjtZFvwXQcq2DmkFkxPCQeeutzVF2UhkV8b87wkSwedP5HWjaiZqaCjsZKb6yKJQoSPbrKBx45YPYgDS",
  "key15": "gtkZ6AdGqEJCaeRcVydRyM95DVehLsSKfpU3eBokqsvpAGqgmihutVShyBNfBwhYL2sDfCHMTxGQtyeTBo2vmWD",
  "key16": "2Hy6PaB5ReGjaQb4RKiwgANvTMsRNEHwLFseKESxtzxrfLMYzPthmNE2UGCY8RBmfeCC6Gu1YVSDvXcr5xKBy5zE",
  "key17": "4kN3Bhiuoe59Lptk4C8NeWQzzcPqMf9BYFXgZQaLeCBPH2G5ZrSmc8jH65AW6rAxFrsbHP3SYvUcmUxGeixGvEWD",
  "key18": "qeo12r6Yjv6gsZiUjTXTqN8zE7HTAVv1g8KrwpPNkY9qAN7gyWXA7KBPbidLPE8Ej4eXqVrSkn7FcK2HNyBoqBC",
  "key19": "5mWoL6PDHw6p1sodSt7De6WtzSkhp7m68LVr42Ndm9mshfuKSAkUwtbZAwfFS2ofEkrQ2j73dp7ZjKhUX6xLzYE",
  "key20": "25FrmQHg3hLAmMgfbZUGUkYSnbkBgHot5V4MUSce8J8W7HE7GAVREfLojfSGtsGgieSjB3vXqY5LpwrAFFTPBnxb",
  "key21": "CywbAX1KysNgvRFpmnciy4gthdZLtrmJ8nFbWRwsS64pubEmRirAP7obWkW9o4y9gnsxzTJKBZWeyDNpPtkKMKq",
  "key22": "SrySX3VZWrmE5ZByC7tmBibo97oLT2eCA8gqCQiYjGKR54ud67L5UUvEmnedGkUd2riYe3yE1vdznnNjzWms2gr",
  "key23": "4JtMYtdkQPx6vrnGCnXfHbu87SC4NtuJsuNi1pgxLiwFncBqtda7Srai3boNBo64AEdsmhdTpuRiDd2VpUkiTejG",
  "key24": "5YPfHV8g3ZoM99LkQak4unPEkbUNHbhEfxF9viqPtdXS5hKyzQbLmetEEiJMPyHRM1zCgMvtp3Appk1bG7ZxCmFK",
  "key25": "44bZq2rREtiZf7G5SxPLo6KwR2ek2BPyD2sT5tKzqMvRct9D6rZt7Q96Kqq9MkxYZ9rpunCY8L74YHax1Zqt3wsk",
  "key26": "XGgCt8F9hyHa8jBSUVptwMMVbqXZCnQ1izREHJjScn7LvedcFvfXsm3s48yQYvj6WZ3un7vSFdZH9CfQSyHRkta",
  "key27": "5LWQK9kMHqJxQZEYcihQNfPcZYTAGDVaygCtziFzsB9SCuFuosMqNKsUs4sypCpEUfg782dU5sKhwNiSG6ENPnx2",
  "key28": "2xr24agUZADTQzhg86iQYqPaYsDeN8td8HsYT6i5jMushazwbE5PVapKVDKkp85rc4BRHMS11yxMXA4xw3FxcUaU",
  "key29": "667ccQkxFbsQHgTiPCDKdWkxLMbLtKj1hJQ4HJqFKzESjVDCJs1b7LsQtnq7ABBqVkWLkCueiDKGXrFArTxdpot2",
  "key30": "4AMSjVx5B8RzW2uUSD1WiAaC4zST3E9jx7xdmWT4Z6Yhmktm7iTx3BEgnd1gFkogiFUUWvQT4tQ6ZNnVr7LkoFkB",
  "key31": "4qyZGa49DwHaBJMawfrkN5ocgY51SU745YLhtJaa7j5DKpp7RtxvXMvZYsVgnXXXnBdRyrvrJ5qnVyLn52Hr23Gu",
  "key32": "3da7ThAq28tAUC9UCHnK9wukYHMVHaQRBPHdkr77Ya2bJhBJm1RW7PberRd8hVETzs2CrZzJqPNH1epdLzWN7XmC",
  "key33": "5aLZnd5fy3BdkXZnLRM4Tr6q9SmhgaPWt1NQgeiFC2QzJSPmxyHGFrjzADNjygYqguqshKZEc3dXDK8SDFNeinJ8",
  "key34": "kEV9AijF9iewWTY2uo9bDe5xc4p8MjHKrExtR7SdkCasXYoco3uGSqrnGrBdL61n4XFpd5PtMhXy5sE4dqrKMVW",
  "key35": "2DtrRjHhYYzr72fEvDMWkxVxCamaYb8CEKMn8tnRw2GXLwkzrJsgGA2Fn9xG5aBbxvyFJRjnbYX9DjdpZsPiHrjp",
  "key36": "4vGSX56MDwqyukTYWLN2EyP2GwUuqdJFmuLibq62Nwh9tnYMqi28ava1ckQkooAy6pGzirJyYibYYZrnAFA9GmfS"
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
