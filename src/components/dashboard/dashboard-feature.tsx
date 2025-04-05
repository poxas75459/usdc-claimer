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
    "5CxcChW9jK81SY3FAoEKJiCkXLDQXBxaWPW3CPr9bWxtXdYdsTvUY6jgbzUBPDPzZNgPQXCdfoRTuAZoarnJWnKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJySKGXfXmjkFUkJ1aC7GKni2euY9XGQNUVj6CiSG6Z4JtMNiDGU5HBqvEisdRwUdw3azokjhwUmSBFfBoxbHsJ",
  "key1": "5ndmYKMhefQ7LQGGJEHqrpPV9vZ6nLkeGDyymaKybDxMonRj7Kcj3fn7Ezh8Dr7dUkXWKWpWvj1y42CDBa1Pzs45",
  "key2": "62EceTG6ikZQ4PR3LUFQDrjvpnRmzhGPqzbLJsYcpzBnSjoKJz1xnWRz8soLAZe8Y6Kw6Ci1PpkPDvPjUZBMgWAY",
  "key3": "2vSxobr1EpUwbC2eBqM3MPzLhfVzy6dqCRoZSdYP5cCjMUEDuHh2HUxSkURDM7GiCi9riCB2HFTtmTssEHsbseqY",
  "key4": "Tv4ttPwmEgzVdFLh6EwiFN1GC1w5e5LTbkEgWumJJ59RKX6WCsvdugLV3rTWSNqh4o6kSiufrfmYijQFQPctffS",
  "key5": "5fc1t2nXHeHbZEaf7TNBHGcxP8Pg4FEYFhZHt3FNrLcPzm7CRPtJndsJagiDMg2DHYvJmtWCca5khqiMUPYP8rB5",
  "key6": "3pxyHipMfQ7FnHmyLVSaeExCBXKNhhM6bp1oP8eA45RFbvXrqz2Tp2J1Qa87XTvApwJc3UeK4XErBwqqD6qZSgyD",
  "key7": "5d66i4N3427stXhwQaRnWUUZHebthsD29HNsSJSz3nuyFpPSMB42kZ5y63cBgsmu5AcgoWKnntY3DD391fNi2zsV",
  "key8": "5cfkh3yFkN5e8zanHC9mNVd33FMdKbK8bxv4v8m9reT3tqtKXqC5YKg2tnAv4yrdb7iowLTDmyavirwe7KKmjX5C",
  "key9": "5xRAma2d2MHNZHs2rHXcuMHeGWmpehdwLSyngEZRY43tFJMyBrMcj69pa7nSayyi3ny2EXwUeMxcM5YAPvMAfV6F",
  "key10": "351dVYujy2GwGsTRJKkFRDW1S3kBUkp3kw4ZoU3asx3zDonmUnsb9ycZ6CF9FWBxLM2Q116Ex1pnFn9uDTJujocJ",
  "key11": "3yjmYdbPyKW87fuKZ4u33fpjQ6EYDk9fzVsKXifwKRSbESR59cfanA6vMw1V24DJ4Pjm9HCkAtnjfmBBg6RpWhTr",
  "key12": "37Gci23175QvcG5nTWNVjAE9pWafFZDPC48QTjrDWtRdrMVaHZdJwC69i6qVcABWcKWWyCNqmnHitzkz3Ksp2sqi",
  "key13": "3ecKgYdv7zhBq51qzVWVySqW1H7j8XCdJ3oHAfSvZBMk2TGBkUxLjjTZAT7ayUEEAGqtvLX4U3u7gy1nqwkWfECM",
  "key14": "2pXg5ZWjK7QiTuLH12tLRRXUu2Rq7gpKauxNb4C2pjvDTmCEzHVCm5WPAwefEbUYXfwy92wNFWh25U3stkYVTaag",
  "key15": "3FUJqfZLFG3iN4MMVSe5J7fwvnFs7h6w1Moah36pddkrzQei4M8U1VtR9uGroyAgkaXyoisYT4Dt7C4iYQkLqcKy",
  "key16": "57E5PeVvmFQeNzndu9b1eJu8tCu7y4yH6rrXU3z8mxYUmgLoyjqMMyU8MgCws87Aysg1efW5W4Mug1enyKiXDc4i",
  "key17": "3y5RaG2tiuu5WNKraGwkMFon1ULgXEqv1mk3kavoB2eHt78E4QkZ8ggMw6MPfJMwKjVpQCLEFtKQvqYuHCBfHvz3",
  "key18": "4hrDHjWJn5Ut69nQxx7Mmegtg9RXQR1RViYe4mL3ZHUmH568pckAe97VF2Y8RnbDPDJRQTDzSkqpxcpyBFV4Kgrh",
  "key19": "5zKBLCHfX7VRiExJBVV2ceuNcAU9pRD4VkFVLqNEVJsNdrBMsgu8teok5R5eafyDpya1B3a6TkuQ4GjSaZTwRmpq",
  "key20": "1kJrM3svDKnwRFwMBTRpARQ7Ntn1woDbb7x165WgXKaYo8WW2y9HACJ23uh9KGvnfqfPF8z3v5VmE4o79yH1s3w",
  "key21": "36Bogot66rDL78opguBjZ666MBYKakFTq6wU52vvdr7T9rd7bDELpdHShRtKXT9CaN9R3oZHQLNmjmXRu9vZNCQT",
  "key22": "498nk9u8RPNmdFejGZVGVCA6Caapn4zgTFMaFRQL2mTaWX8WwjDQ6h9uiK7sT1NVN3sbiYYQfESoz8M9PRxMGV6T",
  "key23": "3wAMqQa3KfPcqzjsaSn6QgSt1KGpBHoLG34URHWWZDwrLeKH2MQG79sqpWXsnMwXMopmjdDZeos9Soi5Jdq1pfrp",
  "key24": "2aiAdAcGHHAZBbT2sk7E8U3oXwid6Y4XZJL8MJhsVD2j2BXFGFm7spvt5FhZhBS9ndf8x12BeLxFpDoz5ivHWngt",
  "key25": "3vhHRVsoDsCNSDjZwVfiAE2iXLHB5oWujbo7kN6V5UJ1MsppNndkQguk6bmZu5CNNQyxCukn1uQkEjSg4CJzSyPr",
  "key26": "5uZ1teBYKCVTHp8eJyokKEGiUxdFFsTytjfw68FeftroJw9b4ZYpQhEctXQNNtKHye1rezsWHkYYwc5uCpqHGGhw",
  "key27": "3zNqKPYH3RAQZcht3xAPVEKJVT4ArCxeGnhi62ndqza2xwmiWxV2E75XyogWwsbE127kKiEwc3oxFZkjQQVeHRKt",
  "key28": "2JXgP5t6ZBTGnro9kkz17cWgfvpjnViyj1EFGR7hB59aLknMNXBtf77AogqxZrntuGAMTB9wAHW1WuHfevABUL6f",
  "key29": "2DSbvwLaFamZhVWcyDBmcYmGWjJ2KC3GEdBNusWTp4wGEjvUqKFDbpNRE4wbP1MbaBzwadApWc5dsG4vPAbtetTN",
  "key30": "3DSDSatfi6pk4ZW7fgRk1GaJhDGdjUd65ADAXCM4ww2eguvnKbssqx6b64qWT8gNw4tRSEWPe3ZcVJ1guG83c6wE"
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
