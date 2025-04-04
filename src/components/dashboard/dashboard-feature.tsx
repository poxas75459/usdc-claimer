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
    "4oP3SKTCfA7SBGdx9R2QX1cuewJEwHSpyoXeBvfmQo1vfpjstcA5YtundJwft1Rj6Sn3CMirGzjCdWo2TBrTgCa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xuuvNy8Jz3LHDymS5bSscdgzUcXQiBtZU33rXf2YdcY1ptEt4ByZWe9qNmCMV3oDAcUQW9fyNH2ivg8ttZ8vHif",
  "key1": "367kCqBmuohbx1fiHkSZy56NFSqurVrmiMpZSNVZsSNFXG9aMu4F8GiuG445MNmH2KMojWXbMNk5oJ6tjG8Rrvij",
  "key2": "2VeWb3J7JUq6fVvYv223UywmEXXxwHRVqzKkqWFPEkx4ddLCpzCe1JRCbPC4MmLeuQMdtohV83EXDL7iiMHXotVN",
  "key3": "3dUaVRGrJYpoQZCDGAxjAVg13EPkyWwD3ttj7EMMnSKpn3Qp227FTzR4mgG26gHQxHcAXdFxnTn3LmkYoZuHcZ7S",
  "key4": "359QDXqzykVyZoVzMxPD6JYRHU5fY4pFBp9wWCFj3XSDn1f5hM7VneMvPrFjRR5muRqDBdxvfEwXk2MyWJJQtpyJ",
  "key5": "3MXQ5zjLqgBFEmL5jdgmXMtFTJvoiD9B4ZGEQAXFsZFQtt3tQ5ghtNp9yaj9EBiYXwvCL4Pn5nDCwkFq23RUqehv",
  "key6": "vphicJAp6VAEi4zHQLNyxDaGJS9TEZP5rm7qUuPtcrdEJ5Qrih4UC4dsnxNAwSpioiHH4iToAhc3bp1XCN5Ftik",
  "key7": "2NKpeLULQTfMfbnt3Srq9pMmjD3n3vas4e9bakDCaMjskwzhLSqzh3Zo9mGBtk1ENHoBjyTpFW7ZdRdSscVcsjYY",
  "key8": "2roEqpK6JZdqWkZhZ5r5RZ6Z7N3KwQVmH1UUvGt5DicUcETzCSfQff18V8WKThBCsUq2W1qT7QHE8s6tHxoKrsd3",
  "key9": "4MvkmDdBdxWwoSpFekNgHDjc13veU8AUCduAYoYPb6aFfM3xzJoVnVcC1fQDxys2wJgajve8awsoVjdth8Mxp9Nk",
  "key10": "hVdToyw4xwzdRzqCKxxgHXu66G8tz4R2QCKm3uKtKcMPAV95dzbfdUyadyRY77gSpzEfzQXutDUiifEDwdKszqX",
  "key11": "4zvQo4abhvgJAbHKcoBnvBocyuJ8btLVGyAFyqKdeoQoY3bNX3ydJDicEPUGeQHBkXHKzbPmzEtd1n6hRZDgvWkK",
  "key12": "362JuACsDgVLnvbtur3Nkszi12hQUArtCKiJ6PKiqxdASQcuv2kqTToU3o6AK8xhC9FvrHDByH3paRroCw15Q8vD",
  "key13": "EUCocUDojrwPLB2Baxk3n31ZHx92FtfPsGymKGi7BKmq8iNS1Ar9PSdhG1MugQxrPUy2k22bwhEeLMmSat1n16M",
  "key14": "UsG7z8V5wpPcoiWrywqWWZNhCzbhdV6sLEWKh2kgBUPLmvY848m33jMTZwQMrorT8vtBjUgcy28tFdAnhhkUCEW",
  "key15": "54CNWup4h9QxEPzUXdMBhT7tk9djQ7egzD8JsAydFs9Pe66Sqm9Jpf9hXG35QNmo1h3ahVkjbH6hMtXTLpsuQFeX",
  "key16": "ZmKZj3v7WsjFwj1gNfQ26a8qR2YCgB3Gw6HGfev91yTZn2HjnvhbybFta86cgQKsj7dE2tGJTe8WTDkuN2qVA8J",
  "key17": "5e1xvukhH99krwSBw1GLwW5qg61mSfwz2qCiurJa8b9aE2D9QNLXUgUDntmRp5LAyzAYKq6A4ie4adJuG4f8nExK",
  "key18": "5dtmpJyT2Vvo6EkCWg42vhaVVvmu64ieChM1R7XTTMEW6JGK1Aa2jcD9rUanVDmPgHCcFSJdCtcGqTdmnfThqE55",
  "key19": "4ZMvNyPi5fLqrZogCcekPd3tP2Uty4SzSsyAmCk93z522kv4koAHrDK84FXXQyabzdTqShDjVJ8NW8QqWgG4Utna",
  "key20": "3ZHz7uK1RBWGcvwaTdqsX6rXp8SAYdYsyRqKpbULFUReaYkZzhasfqEVjupUFPMA6ujUP2ro7EkLKiteBcbug19s",
  "key21": "5hNepuHVaS98vbez99zLkWhwTVzKCkg9VPBBFzN5QGXmxykCJGXNfMmrART6eM2vWPaaM3wXfXWmziazBqLR9UM",
  "key22": "5aR7xrAUmb1JGHgCdK5ENMQn6LobbR8Ahu621xWxa1dJDrEshev1V6u6ws8Vf7wPS4JftCHBNXb36SezWZuGKLtC",
  "key23": "PFfeQQ6CenHaWN4NigQgffMQhasAB9xVTYYeZ3D5RMNQerb3KGGjAjKnYYFKDxATU4Vy517nJnQbfcx31yQcHQp",
  "key24": "5FsBG52o3SFSDbUztLwmAvbVdQ336PrCk4WPhCXT1i813X2NV3W4GqodsqkUmTUWVDRrvbbGxiAsJDNzsbbvhYKT",
  "key25": "2JDW45Q1ffFZYS6pspVXSJM3fcfvHRLz7PP3zh3PDcpM3jo4NsSymzfbyoChdVy6JL7Hs7ajC4qHJPBpnFRwYnJf",
  "key26": "bEAUFG6ANb1UYyByS3gw8rFUkH2uoDHAeZknexmgqqN8tbh9nf4GDzQ1yF1VpFNdxJJCJ8kR5o3MxCtCwEcyqD5",
  "key27": "2TxJhEJUSVk1VHSNyGPW89AuHG3AdeHirWryjB3wfKzsHrcZfwNdvNr9yGdrHGnq9wZoThchDiLzMVQahGea1x5S",
  "key28": "3FrpL9jMBip2mfXUSG4zd8FXg8zNpnUmyLhd4mQdurQRQzUDmfLRUjij1m5AUTmWGZ8JVjgYm846bzFN4rECyUrq",
  "key29": "2Q8u4mv4bRrP3FPTBmQtZn7ftrAfXgB2KFpDMY1MkRBa6X2AincHiftyN4B4Y3CzTqG8ekSuHBmnNLF7ZUgKRC4w",
  "key30": "7X7z5pPw3JLyZVc6w6z1P1vg887KEv8uJGqkCghn88BTKZx1QVa9oFLjWycr2E6Ef7K2baQeMncVjQddc9agiPN",
  "key31": "bi2iETMzw1gR6qjHfAbjmx5WxEukhJhM9b4tU8gKVkgnqvZCBSnrhhL2pBK3fEHtfHGHzq6W91WwvAsjB3zoVQF",
  "key32": "4tWZYjPrPrBvrJ1VqAvuBJ27igzjsuP87djCi3fLygecCSJU6yarnVbnsNZ8iDkYV423FkwpyqZygctLtfcXt5HL",
  "key33": "5e6Do3Zn2QZZs3zjB2fTuuGtUfQDdH5sHZhtAXZeRWAhJ76Rt2xSN4sJTEJTsgDpTuUZSfqFtj7nsS4XdPDt8CWK",
  "key34": "2GPAX4YqFXLiMpKuJmt3aQgzk8gLRn7RcWDmg4UAeTsiecCMe6BXdRwJw9nDzExh7baBmjayGbFYojVskjUpxbuL",
  "key35": "2XDLYKBW8onKzxjomWzTQHtt8uFz5ySuvFhqYrxwudk64gox3TL9NGgZjAr13Ep7skL27aprttvJoQLL5snF93ci",
  "key36": "5wppY2EGVa5kbgWfNhZhwDVvxKF6QkPSsnzyfezhAJwjEZrnAeUtJk1gtvatH4em8omegW1YNvLKPL2JgHUA4ps9",
  "key37": "jkaibHyAfkGGE4nGDcAHYq2FLg87A9xun1vn9RMYp649RSBaTWjZ8iRT6NiKxKAnsLeS2H78yCxQWtjCw5cwhXe",
  "key38": "3Ygtfbzj15Xpi3XXySYLqWADNyw9tUosrhcjSu6MQYsn3tKKPpFSqGdNaarhaDk1uqrZUBYHaCquGABTgYQ5zWts"
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
