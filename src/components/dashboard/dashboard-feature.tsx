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
    "47vDDWunsmDc433ZTP6nRrVPSfcomxLf53TwrEH7cJtdQi43wHwtzWhGm4iJ3UYYTVQ1TtgJTMyd1NFx2ky4k1Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPkV7jMNFyPpEDpCzKcA8siwgXGeYqLLnQ75sP8ZnDD9jjaw9VQzgTbbAR7x3mHp6MEtEBLf6ftcw53UFa8f2zm",
  "key1": "2M3njiXznbhLgB3HtuUUkqsg5KRjuXNbDPRFRdo4J33FUhjxwR5qZ65MsHPbYaRRCKwcqYfnkgb68nqRQt8qMMeH",
  "key2": "3cShtjd3NsuRuDWEsfWEZZxeUtGf6hdL348YC9pw3fawfj6jY4aYQ4kSrMQkEYpg96rayMLweWoNf5uCFdeVBPWZ",
  "key3": "4QtNqX8ArJG6LRupVWJD95WwUZNpUUYvFGh9uQsRTKFmF9vacqGaazJzr2xzv3a7Lcd89cEfQyWcDJ8hBpA2Xiws",
  "key4": "Ustrp5AkV9cfAFGTfnCLU7z4SFrrh24QPVaMS7fr8hu6iauXgZWXbx15hx8xxr6RPGR4mUsio8BRtt5tkGgHzjd",
  "key5": "5r4PqCCMijBQnx6zGktFEXNe9ubMFEbBGb6QW1rq1MPsreaGi2B6byrMQzpPh7uTdfxYbUj6Akt4MsJ13DhoonN7",
  "key6": "5KAs9tHV3bj7oNQLfgMRwgkVcRDEPkdvyXgELteWoDY4J2zrFjXfTxDnc6JpVNTMGS6Lm9X7kuBe4kSPxeS4b82i",
  "key7": "54K4TQCzSrQQRwF6x5baHuvMJyeEcvagPd85S5Ves1cwnwmo2Ti5CqgD3zdwcHJUfVJBSBrikTdM9xJGHdzH8QRr",
  "key8": "5BPFqekxtfmcvzWY8ZhbYZX8LwcBQMxnev4rbRA824HL7Qw6dEjfF5PNZ7oKCT5LjYUdodaEk4wycjLRkibVEpwD",
  "key9": "44MNuHL8mE4JAERBwpZWLojsBsFd6nY7SeKHGUPq2ePscgZjgzRSztQ28S2LeF6BD9qQQC6Yyu79j8BDzDU8C2Sz",
  "key10": "4EdMCedGff9ogqsjhYxUCg6VTFMRcTrQ6tB1MKGecHQhqRJsYZu431kyxYCWqSXb1yj8qv28xc491gZiqMSdNbti",
  "key11": "pf3iWcDu2DVYaCooK3T4Ur97wnjf2JmSUECBD8oPV9SksZjfDu3bjG7DBjNkikzbRG1C5v5WmZ8Etdi88Db9Zp6",
  "key12": "iDBBpxS6G6CqhbVpy6MM1sWEnVP11db3MobCbN3QUoNqpXxy6P1RJA3UwvxMJLZNvBHCeGJvgcZN3BLeCwcyZLY",
  "key13": "2WZj4xBpSqHi733SZML66KoYnbeVdfuHFKXSa1jnDxNaT5jJVo94Y1B8tWbgVYWNYeVrVTnopuWWtSnSthUA9eAb",
  "key14": "2KQkxHrrm7rf2PLMM6qe1BGTKVgjkyUQQb5PxSEdLtFcsLiDG6M9WfPr7RUg65aiJMuZ6FxvhARHR8imH64QY89i",
  "key15": "qB4nTMbyihtqmPFHRWPMyAuT8S9he7LxEUBkFipcRtQkdotqLEPusJ23WSs7HzypGmfQpH1QfJzHnBj4597YoYE",
  "key16": "4q5ABfnEtw2oDbHMYhRepWfCvCaZnBHTzTEPxbtMHonQUdNfV17h7DsW5iLARLp1c718h2TqU8bLjrH3QCyVBBbm",
  "key17": "21R2oRNBHTikhPXxe5rthdrWjS9iHsgRYsFtk8eJmA3sEsh1PsA9TMi83FuPKPCSfmVpsg94hGShqaYCqFSQ5UY9",
  "key18": "4jiczFNNsjeQwPJkM5QeYZ5qXQ5g4Phtm7mrZRX3wDRRzLBUu99SbVznnDTWwoNfH4Y87pf6LxkvCDJJikiqWHf8",
  "key19": "5XVyLHwZV7GDwdphFvezss6hGeQxK5kR6FYCdSeTJGT7p38KWLwH39oqjXUY6rwdbG62bxxPmFE15pMyUTNLMRka",
  "key20": "4DLLaRrmwGHt3BUqeKjFU6GgjCFzmRp6sb7todCceRdrHwc1Sb2onRd1fswX4otLEuHhdWEwDHu48msbRaEqowcA",
  "key21": "5oaveYqFbRqAj9ow7Bejfi2kNhQJKbTYiPpiYwBMCZn7nKE7kBqdtXqKrEFjUanBcZKd7sZV87Xa6mWpYiB9vbnj",
  "key22": "3xRCXAAHihTD14BfqQfi5mNkDzAA9AKDEqrRgkRZkTcr4bQgRHwn3qkHh1eWrHpryJeHCQoBuFfuvLqie7X1JQGU",
  "key23": "2SCDitNAwXJ35LpVDqKo7MsCMHmR1jznNj83ULAK9xy18dSgAvQ1SZnxHwXp3gsq3M62aD7ki58n7wtVmSdRF2tB",
  "key24": "3tjtfekMs8cCjsWUUWMucg6Vpb6e5NurUz58nx42jJK1a8qZLqn4hzyv2PrJrutkLmjotyMner6eUbEkqUWK66Uh",
  "key25": "4drvUVXRJFfwRy9qvyaPJgcWaMGLHt3kqKDHeqxHchcRVEJppVU2FoqMpr1U5AdFXXTetQPimHY5aBoQx43ssY5R",
  "key26": "4tXm1NwBETbYYbFzngfcrLaeoZ7BxfvFGgPLNTPXiN2uL39nNxvVMYphE8fLmKU5qWx5p1gxY6ac1CkGtGqWq6cL",
  "key27": "3UW92fSAJd7pTox9DrCKuWRsfgtow5xRLcNsic7DE4xkySThkHgLZyLjtvz2b11cMWFpQEz8Gkggyi5G4qNSmdYM",
  "key28": "4GeNcWujvZXpYFMJFk7m7SJEwkV1vmTFZUiPPgvVWfkWtKuuqissEFWBLu6Hq6BtPaPsK9y37VZM37GUzjKZNCCQ",
  "key29": "2y12JLx39cWhDKpKhVskLxxrLqULAJsuLvkuinTKmkVPZ3HtioG2Pr2ShhEhY9XxtEbHiH6JHRCTZfK9rxFxpxFu",
  "key30": "4dXNVemsRjoMUCWkJXBdenhRyNoNNxmrF28wSbEo1uj12YFeRDhW94NtacU8Mj2D6FHLdUT9YsSTb7eJiwZ7aiGY",
  "key31": "4cx1SVk4oLmVhnJYmnL6kF8TkJxW5xfi8SjJ25MVsQyJrcY3htvSNVwEmsSrKzbxZe1J5k4Qm8pRm9qcmgMxN7Gp",
  "key32": "5RmhQr2DjdSGuzjDf3wRHCa5m6vzuwFcDtJTwMVZoeiWFYw49NH9ypMdu8zRFqhLbSNFZgtRN5LonYFt27FKYUUG",
  "key33": "CY8LHRt9eo7bUFLJNdjhBUgk9Mh9p1Te5FemdMLBVtrhHgWSdWmM3sis55XFtgnc36gL4NAXrStnjQNX41V715x"
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
