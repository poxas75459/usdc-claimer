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
    "3Eo3beZCBpuBdqWtTqpnspCzvw3Jfba6rCeQRhhtdq9kcnxjVDhzRC52fUoiKrzSL288afXdqkHEewmzKuJKXtuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSWj1sQRae2iqD2pxYZJjYfsEskfu2JKHX6hoFLVLAdMXzEUnBYN5fTDpcfQGhVeih4CQ6uyrqevX5XBhBGcjDd",
  "key1": "4H7F696VJyAd1wFVSgKnX6bEViBrXpLNdPej9ZUhS8QDoBXdwkZNbxtW5seoB5u4skNqzgp1FCNTV72uoJGorb62",
  "key2": "4HfzAdrwL66Wb5JmQijATexnid9izoR4NRSXNztrXtAn1cHhkwDMqcDHu3dtk7MJesT62TXHJXdpjPG4vbAeGoGa",
  "key3": "WBzkKVN9NZafyqZ4BXLz9UeXn1cNJvz2ryPVMGAqYBTRwz76L65WTNECRvSxMHPis1aJJS1uJjcjroQRXddNC1H",
  "key4": "3HvyfWUBf7uah5M4BA31uNGYVk1999c9CoAzeY9MLvCKdRZ5zXY1HrZWMtHvyphzQUJhy9U49R4bYPbPKKU6bAHM",
  "key5": "txwjymZUmULtpPSzV3zdqvmEjAc3Vz4tAGP1SePmDNzmfUAcaYBV78Zf6bYehJQNvQJsocTuk2XP1M2rqLgk7UX",
  "key6": "2h8dBQAVWzvTzFmj9HQ8Y9qDcqwBZXuDSErpw9vF5Kb2xpV1sDNhQbKttKchGD24EQMpisRxZ9z6yyeX9YbifFbX",
  "key7": "4AfkBn1x4NyC9Hyi21sZ4HD9SmTgUiQ6mHUdGq2Guxekn9QwuEe843RiRBHt9iVfQj6giSDrY55jJeMdsqcaStDH",
  "key8": "2oguuoCbSYtnA4vGPkQEqvketAuZMuQWzLduASA2n47L7KCXPbkD4Yiym1b4GZB1emuCFr2NUigtkaFFaY5D7JaD",
  "key9": "5RAmTJkyQ7k4dmhso7XLMWoacGwhEFiuZQPAaSSBxPYXCgWcYB552QzcT7A3pUUZ6cez171546Pqzo6KKARvERGU",
  "key10": "4CcjDCVefsE1nwortAS3HdT2SbamNzDXaeECJUAdqpsj8Y8rD3Ps9Emjon9a5xHxUXTxKqesmep4W3UzmYLtvXPF",
  "key11": "2ibJ9qUS1waZZiHHJZCNmTgFEG9s85UUvfWibSySRgAFezyEjh6JmXp4WVLgkzzctjhZYkTKpE3jHCLL2b8c4ndt",
  "key12": "5HJ4n5WG1tzAWZs15jNcMZp4HnpFiEVxs2Kv1DHqPrmcZGN1PQ7c9TYPsiG6oQRrJsB2VYtqJUcwiLgwJXXLg64R",
  "key13": "ZxGRf8igaPKR1W4zMNJotBbYanLZR9cLnxHHhFqVxDt2EnBAbVLTxDGTK4o6esZKYn1uGDF2y2Wh6h31Ah9LE39",
  "key14": "JV2yqQbxEJ2C59LDxShucEjMtCnqGxn7KzCrXDzKM6o2oGEAxbx8symPWECXMLbWnRgxE6iSoihDFX9srYWH2cU",
  "key15": "57wPw1Ss2rKanEFyeUPCuYMoVQwT3duBr8urz4TtbvWs6Bpu1ahTp3g53Xw5tNHZkEp7Sar4b5aE5RiL8cDpTPYv",
  "key16": "jKYRXSyXn6ev9ykunGLcuQxnuSXG7MRmrKypyWGPpEp6zRHzjCBds6iMBxGgMLVTYqcZgSQpcj6BKuqdfHDwJEp",
  "key17": "3HKRiTEHhJzNwB9byG9KYPKXkUu6K2ByanoZZvphpd5q1V1QVqEwLDyzTBbUT173FDptGYqtKybherCsVQA27Qun",
  "key18": "4K9Sh3pErTvjLiSAxFUKWJuJbNnwTQT2dp8z95bh9arDCWajsXv18dimtSZmHENgurmMXafRhMaAu7v33PWrvkJX",
  "key19": "4JC83x1uDZTsLLVRffX8VmcgZPZULffwA1KrVmD1zKDfJpJSzno2FK366Vd4jfWErMrJ2rEWf5YPPMJqwMZhRKRz",
  "key20": "5X5JW5iU7Z5fdmVhWKv6vJFU2rWVRnd32bFsk63L3mVU2DfXySwNqYWFk9VzbZ7hCdhE1J8DZKp2G8UdgrMcEyQQ",
  "key21": "34i5RpUw5s5hCncXTD4wLhqQwS89UYYmMxkHfmnFAVQ6Yrj4yC3dCqfZZvpUi2Mx7tfLwb4T3cEWi82f9mDANg6w",
  "key22": "4z75fpdVfEPfHjEqAu6gaM5CK2ahqyKboEaz43EoRiXqFGrM4wRtf6s15FycVv5eRGVKnMCpT2q6DdbpAxoqdFbD",
  "key23": "3HfaD9fyUhBJ9QRvL3cGYiYn7afajbsWC7j4aEFcquvniGoobefY6xmKPn8ocpukHETWEKEaezRTry1sRNZtyEys",
  "key24": "5ST8QMJuMHwfXt6nkdQ8NVF6ieD1TpxAd53tCGa9XS4sL5i2PGQLTHmXwz8cGdg5gXL85suufuh9NhohqbwMVU3k",
  "key25": "5KbwvGqr75AsCMBAsvfoMY4NxPUpCisfAv2SLKF4uuRoMx6AhGQet6U2VfHEnEM61RRk2WV85akv64EHxkQmixgs",
  "key26": "5gcX5yENaXX5bjysXJtwDa6FbqayQE6dA82B3DUdnDZKmdyUTMNo7LdxHUTvYvbWCEDrrCtfAoQF4Yg8H5sxNQAC",
  "key27": "3X5KmS4DwboSoDRDcTXfcA4LdRQMjtBZJ8tpCtV6rZGaiVpo3sJwoyr9Whwn2huqb3P6hvjT159F1Jgb8njQhDbH",
  "key28": "38xewVVgCFHpdwv8gJaqAKp8XZ2DArciic2bBXGFrfo1EimfEsZfNqiyuW6DP5tKkgNaEqWccEjQLQqV3c6W7Nzy",
  "key29": "5NFLJuRUQVYrozZS86MJGfN1hoaEafRyyiu5NEEWWYk3yTqUDwLEqHczitri3bdA5XhWsi6WiHttd5X8CeVMJ4X4",
  "key30": "36PhLx5uxS2ypE91cjWvG9Qumw4ufgZMbohUX4uEpsE5F7LmYdqczdvypZQcvncrR5NFicoNMDC3SesS5xt3aGCB",
  "key31": "5TBpgYMyTKHz22QBvkr3cVoZcpuumL9wMRnRzPCiL5keJM4bX5pBsWkm1s7xX8JP271D6Q7ZjPBzjHtUp13Dvhyc",
  "key32": "677vLScLyTaUQAjTsvfuaHm3a98DjzE8sCwT98FrQHM13N7inUsfEVpFad4hw4byZKCMRB6Dgk4gJkdqWr4xds8g"
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
