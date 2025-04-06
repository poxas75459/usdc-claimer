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
    "5pYEjbYiNkzpKY1mDFGoEZtPtMgtzwkNb7ZNzgF9hw5PNygrv1bzfNx7JHm8859mBMRtX8Brw4D8nQdTb49Pjbhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjcmkBnGY9eHcAvTmikk6He4wCDbRRocdxo3S4RS1aDsmAMQBFC8jCH85ErWHBTHq2iPd1mmD17UsRYPCzDF2KL",
  "key1": "2v3DYTcp4J9V5wTNxJwBCsV6AZG5REEuKB3nkLa42P52reqWTPvSWNMUWaFdJWLXxZh6tZMwgdDy9VbMCtXqiKfN",
  "key2": "ZUh3tbR8bNfpZpFUBCwyMrhZ3iu2cF1UYJTectwRWb8pTzxFE4g7eXzCndwc8qvynqez1xVeFc5L267oyvoB6gT",
  "key3": "524KJJgyVApM8xprZW5MhoUa8cbhbKHcB3cbx7jy6Q8BiSfgjw5Q1eZhWy86uK7FceXUDrjkS6BpRWJFWgcYC1ue",
  "key4": "2e9vZBND9PY5xAAq6M29GxVm5Aek5kAhV8FfbDsJhunMMg7q6pETudb8ANt93ZodAW2BumYiHk4qF3C5WcryF77o",
  "key5": "Rv6VKoNgLvRZTjwKPm3qA5arX7AcbteiTB5LPyC4gg6oiPiBuAvQPscTjxwUmWaTXicVfTur1kBE8aPj6LMadL2",
  "key6": "4gCcUh3Qv8UpvJEDNhvZ6hagSkDMpwGVWmKLmu25DXTMRZbcpccsrRMqJTxjmfXVA3uNGE2xxBe4WQBndc4dj5NU",
  "key7": "5oZJApUddsseHdWCJ1Lyr3cW544bfgDpbTUHEN4T8uNARkxcCc1Ejyo9raj9zrAsGVsrwdYUoqULyiAaPALk7Mfj",
  "key8": "2GQKudLKc4LpDrwX44vGtWho3L4QH5Su4HR4diLseuoy9S7RvNhb6pWgf1utQ4X7zskqfHmTk5WS5Pxy51dEAkw1",
  "key9": "3vDNZ3hxST4PE6vdNJya8Ln7R5AhW3Xo2U3BMX9RCxXJsFxtRhPM2fCjTz78cBqr2fZKbuXLdWm7RAevPHEFJq8N",
  "key10": "4QXRJKYeUZ2rGhoHsWs9i2hfbmqzBgHue6XphxKrhkdxSnmSampqGo3Eu8NkFSoH1c32jX8SzunAth99BrA7sRmc",
  "key11": "vfFsH1KvBBSfxcqGyustEZkgGBHYYQkxUDvbtEpjM3EUBntYm9Z8B4fShru24XvgPEx24o436WBNz5Y64j7e3XQ",
  "key12": "5GRoG4RkFAsTWb82Tjkkv6jXjJyCbFmd9cyu5L7t6amKePvzt1enH4AqouyUptZ696gVR52TXH7tgLMf7HpnX8ng",
  "key13": "4v54KJMunhcJU3R5szp6D35g7jjYhe6sSXdHDY3jdbTESruNBS2HuajMEozZKd4aVC1PVNL89fACZaBVPFkptpFw",
  "key14": "3tFAedh88eBpYFABCpQGNmNDcbWEfzHoNcEjeQxPgxR4zDa5AYE9YXgyGhEniAbaUmarXJdnaqJJA1susLm3q8gg",
  "key15": "4meL4jhSPbamjZfv23UqLktQebKqLtdTESmZ9BcBy7cLbDuYFjYRqcozj3r6ZUQmtS8Udyym5EY9cpfKusFtMB4G",
  "key16": "4F2gSnZg7x6yCYMUYNqXtZyouTSbCTA3wAz4W8x8WToRJfX7NC5dVte86H3A31HXPm9PrmYK5myb2ryCNh5VQ88q",
  "key17": "816buqExCpVMKqfTNFJnNMq8PudQPtaiKU9rTfs1KUuWRtpDDDTkA9xo2j7U87bfyCXYNZYwLDNdXHjKJnFztFP",
  "key18": "26LmZjXv6cC5Ks6qhWqinz2RDELyyDpVMiKNiiZmPui3HGDaSbPAJwd8gMhbVt93CeH1PRnwtsiGhsdMqAaP7v7k",
  "key19": "3yR9G4BjyMd7E48drHBXUBZDJV9PDTnUVZ6QY9o3V3pbhNq6p1ovkLYLUduhhCrmntsPde1WLZUPM1CdowjpG3kR",
  "key20": "3ijrDgFc7rfHiz8SQPC8962MECxphSUoMTQPs3ALU8noeFGC6jfuV3db5C36oZPFhiSa71hRMyemuhG9hwwjihiN",
  "key21": "2LjPD4ckTfgSFRefKs76TNMsmtp9EdY8jSauv53TvaZpUww33e9vbTu9bUExnJZnh8t2SLfhGyD8FRMUtE6p4NV2",
  "key22": "5JA7fpYfWDmdi5TVZphSy4eMMqM6Xq2FSMr3FPwHjbG1wDgCoDwoc9HPf65yYtPy9GwHgoT46KDZsthg3wjKVogg",
  "key23": "5EwvMz9qdRSe7Tog1UJ1ZFTC5ptJU51Vi27F9M3gr6a1cgZUCTb51jzGtqr21Q8DGRfYuf4J6iZ3Bg4uainpGJbi",
  "key24": "5TLjxTFnaj8o9Q1chLvnas2eZLZRZyQ17qnMABfkWd7zvf3ALL7MzL2hsEVikArW63H5tk3PAUKFW455e7A9TRjb",
  "key25": "3jJxwiruXxERAxGgm6Ys8g9gSKBfQ2FDeKSm2P7MdzsF1BSjy8FAF6U1EkrVH3PeqwBtFEVpMu6DbzNH4sNZ7sWB",
  "key26": "4UQUpbyqQY6zFMn7UTNVmzEBigzFSysSMEF3TT7pAQiUoWFNnEPcKRujLtxwwiELtgoW8U2P6udZ6Vy6zCRF34Ze"
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
