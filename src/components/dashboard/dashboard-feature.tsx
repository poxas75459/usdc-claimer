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
    "42qSzTAQGoB2Lejddtq5hRBjDBeBYpYx1yJsPYYpymVq7yvvuVJ55an5RLCQN3GGJL9tgbWMqxSe36zZpcTr4w4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c14RpPF5oxWvnRkZNopJXLWPzwtu6j3LATtv1TrLRrkuaFQvsQrc3teetMPpeqAKZ5NngvSShPf42N6AHGExwq4",
  "key1": "5fjdq7Km534V5vkWJSS7YStFY44jgbYNtT3Zk5soM9GsrTLeKGYTSe8hYEQRi8HGfWrCXdtLAfup9cJuTCz1ksbx",
  "key2": "5sFbpanusS31bjHPDDSmrUqXpzyS2s6VehrfgrnjzZjgxyJCKKAWyxYfuvSMZDV1PLb8QtY8EFdZ5hWc5GAMcMVZ",
  "key3": "3JTR7YtE7mfP8eMKkkKRjr5ER43GyhoVaXs3q93msFee9T9jVyw1rzWin7c6w4sMBWuuY7pEEC8MyPqQbm245afv",
  "key4": "4XzVJ8yRp9ewtFWSpEY8RJ83cjAxsTRX4PEqtDzQb8vdoXvZyBbwSpnR921vakZs9wQt7RkjY9uKo23MvPcWBxr",
  "key5": "4voYHbZg6UVNvJXLFUQyoAW5mbb7T3pPPif5RNmzn75ipGHWYrVdGisw5VBVA2S9EC2ENbQPwfCrQR6XDA2WXAom",
  "key6": "2G6p5d6B8hw72CZnNSB5GKi5275YDa4PVM7878CLMf5Cf4cCdQ75GfbYuvXYkhwMq1TZ4eB5nsbRgciAR3Gi1ZQP",
  "key7": "5Lmf8iV6d78PBrwhpCRzWECj6r8cQbgZG3r53xb8cLR5jjExooMHm3huTwi1e5MRW7J3dEaSkHkUbWMUiiAEWJH4",
  "key8": "58x1EiFBjTmgzztkiT8rWfBSYCfds1RM9AtEdfuCDnPm7m6kiit2UZfcp5hMXgHSiVaQJDoeHk6T84d17rTEoHQE",
  "key9": "xEmbRD6UoTYXw3519jQJUu44SiwvFnrGsi7RcMoE49PRrzjbjNYnYTqawDPvnQ7aGZm9wdfX8wqZnZwafchLUt1",
  "key10": "2puW8rZE41jrEydhEvzF9KjyN95DkGtRAX7CRbbQc1J1z23pB3NSpmHXNU8r8cUHbnbVSb5znDat5SiVeRm3rHyS",
  "key11": "66dS1gyAQvuZnMQKhe7nnoEPWEbT7XsY81VrsXxjXCF8BnF2G9rc2HUQ9sm5YQuMNV1dvaZEMSTWSetDmqVGck9z",
  "key12": "41ZYjtcXLz4tiNj1Mi1B2eJFPw3V2nZuki6V387RbEium9ecfjw8ZxWqM38hPhRtFisUewwFKvbu5bVtkznbyNDU",
  "key13": "Xr5DDANw4DmewQnzJukgCDS2BNbRC1C1bSVETWZzJBo7W8oKd28JFDa8TVhceJiN48rzyaKbA2CDsYR5AVm3RtB",
  "key14": "4VWt8RhEupxPCP4aPyrk5MEESnUKzLjjqXYCZr3tgKNMNNYiArXUGP4739uWw7DaB1A49g8aPiVRedHGE52HV1w3",
  "key15": "34wVLJTeFmKXkbL4wC8AGAt4h352jhVNgiRCR1CThRostnjC55YoGgyXzRFM6ivpX2AY4v7nKWCS61yqcd3JkYCN",
  "key16": "3GWh8hbE48bBVsznnVkNYVqfbt26hiNWcj7kfguJEK6AyW8NiEjHkiC9JaZYrqQT9SYWMtVZujDHJoRx6GBsiJZF",
  "key17": "3eGWbuLLt4vaYn5ZqxSTKFUGaL8axXFrZDKhqXwtkBrbpUtiUrL3PrJCqSZ9JuwzNLFzz5M2rQoTbjLVzQNvaoyf",
  "key18": "81SPHhggrgwzSY5VqnNSgEjzidHf4WiGXjLsAZJ5f99xEUB89fbo7r7cx3AkBREKQJoBgBH1pFL7NBB3xSXyduP",
  "key19": "515cZ1xFgZGdhsu99x4xkNZoyP9zc917TkgfNLA1tcA6BAA3jaZsJaWza6BEBys5BZfrHUpywVFkm5pZp54bTpq",
  "key20": "5wGYbKaRwdd937ERwUJSbTBefSqgMm5g7PfYT5YcuSbwaFSpjHUc7gCAQ27xPGE3y5LgkAxUpUEJnBaDuTTf2yRv",
  "key21": "7SbzFHr3rSDpRcJyPxNRnZvx4so4LoqVoKNEVwTGqw1JzNdTYpLe2MMeMikZb4TQEV242Z5VtbdWYABq9WgY7Bn",
  "key22": "2RA5AALiqdd3tXGQm8Hee5j16XDmtggr1zGt5L6mWjvzPCq3TNum3tv256fAkgfWEngEH8zUX2JHCzi4JVjrpozU",
  "key23": "2HYCVha91TGUnFPXfj5g53TLkxTh6mKroXhH3vvMjU5NF6KkGvAVsZ3Z3bRYwVtqp7s7JR4sXswwtRYuSTtwXJ9m",
  "key24": "5vkErqYWqHpQd39ESnLf5mGZUMdgP7ws4CHeLnjS3bkRfmw2iHeLBEt1fUVhrAxsbq74BvgxfjpnFkBcfbhaK5Fx",
  "key25": "3iE46jXMnHv514Aoz4jUTHJDsXFGPbi7k7VrZcdvcc8KnqP9KVLP6GFFKHeZ3Jds2ocGUWKsBvuUmJp21GKrjqxf",
  "key26": "6XAfNHezzLHShPVpYqRhsZmjMpWtpWdetHKySvp8HWf1yBUvHBf2JwwESWn8AGGTgLQWXSQjsKioKPMWkjYkcqs",
  "key27": "2h4QFwQmxLH3X1XqRur2FXcKXi3A6uw7mSATzkZfTCe88wDCTB2SNxfUUqN22FS8Jrz4qr2hptpcR9Q837VBLodX",
  "key28": "2Cn5h9WQ2wyNGyXvEivQG4s8euF4kL4VqkGPsXbJuuNQG5fZ7gPZfy8KHC5krNvA5kskNT8msPeU3poeZhbajXmD",
  "key29": "4Q9DeAYqHfZptLgzTiXJ3xUYVdmqWPB6CWjBuRh6ApN7DpH3dVT2voggvu7DXgC4CmnRnqqFepEBvh7pG8B7cXWm",
  "key30": "34Q8rFoALKaH2TnR6mceTWqKfWdW6kuzLYk1YSG2MjQYWhcq6KU7iT6pHax1cmiKcafHmWZicfPi8Ny9Bezcc2vq",
  "key31": "3Z9tYwFpTj11NnepNJx8DaW4QSyX6mRZqb5EtL7mn8ewMdNyJ8r5xadpSvN6bzk8EWqRxPpbSp9DaJQhhEw5St1y",
  "key32": "2ctqBXg3dwa2zesCaa56HFGYGJ9Hnb46F5fdaAkMFCMHVhWKCZGQuiVEACbrUu1Btmbq85L76MqJHmZ9TR4eXfYB"
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
