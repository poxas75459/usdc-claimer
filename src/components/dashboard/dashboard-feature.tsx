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
    "4LzitvWu2Fu9ywotACiBCRohtEmRouDpUwVcLimPCR6EeVFc27v2HyyN5dh9rNtfUJrcwUvYd3TzQmXkatcoJY5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G887pz2yTWBk9vyReXRLHrmF2UWFmUuT15gqFgdzomr5TrLCjJpZwGQTZZSrVRpHK3LHHh1b5Yh2prN8TgCfxdX",
  "key1": "4k726ywPPKKZ76bh8wsjKpdB9S1JTYkjpvmeobqxX4R8mVpV4Mdt3ARac2GVJdGio3EYjrVRxCW5H3Scw9o6AL7z",
  "key2": "4CZCLYpzEX1o8SQ6HrYKXGPMRZxpgdddR6gBq3Cb68FiC8CjttdSYCosyNsbEHenUYy7gGbDuzWfrjzU55vK8Ao",
  "key3": "25e3Wb5puTuqsZ9NiVQoDw7HWVPKXxQSrjgVV1qhAoF9YVVTyTh6QsDaB2eNm8q7Uh9TBQPQDiakunu7cCr39h5x",
  "key4": "5TcHZmzPTSzYLDJmh411VupqCobt2X8Hhcc6FGQHMk8yVwtyaAnDekhFiEKHwgFVkQJfoYUhbaWYCmArHQP4qgTj",
  "key5": "5KVP38K2GfHmqBHsrDL2q3g7pzaXN4qzKzHp1tPe9C8UGbLY9EFZvz77D42HhvDtHrfpvbPBavjhqhyHdF1SqM2Y",
  "key6": "2eaqkCNhBJtNpCctab9PX13BiNsKACUMCGfP8bcqTbZFQXhrncGEic9AGzkPBTJufzHoe7gJUM9euagG4JXvv3Ed",
  "key7": "5cJudLDYCjNTTeGSobnE21WUWjXaK6r5W8ZWBXZPwGeQcxfVDjsz859NRjDutGTFb6CnZesFjr2M5kXaHwcaBKsc",
  "key8": "63FHbk5QLHVQQZCRG5CZ1RFX8b3PNKFFjpMsRteEqYHQoy184D36Faj4XWnEWpPxZm1uWAciEuKhY1EaM7fPzkpK",
  "key9": "4m84CvTfzzAciA7bc9WceYXQPkYPLsb4ePpXGWY1oxF8EiaKMWjbShAYqMx2E3LWsiaBfyag4kDZUxYJCC7aBXEs",
  "key10": "3EjiBYHRKf2kUFs43vtbTY6jEfWh6SBGtpeC3ZMptmcWpNgBg48un6752Usvxk59ft6HkyQpdU8hnCoM4kyogcMu",
  "key11": "5YSnrRCAFYLp9BYrLYDq2ZwNfbzCeGqLnmoaFEdvrMhMrSmjJjyR8PfB1c9SnWDrkutbca7qizU23cFriuiRcEES",
  "key12": "3P7jYCiY6Xyts55voTXo6zTkfWJjJZLEP5MM8apmYuaRyDGB96uTefsG3Wts7bKfaRy6kx8azLUaMYxjafXG8uHu",
  "key13": "3iaHBpzwRJ466W3voF2ec6LYULyWzSrVZWBfDcPLyzQDrPoxhw4RTJHzhe1hr9cN3BGUzZ9iDgaTL41iyB46VPNU",
  "key14": "3bdeZbioMGtQZNPXxbTrSsLNZPHRQ6Jn1EhYbx3rhPvZ1PNh1bgJjmXutfXa6AUCaAksCBMP1iRapuyh32Ck6Q1d",
  "key15": "4RiH7VdHoZpXpg54bS5YTEsDrgGnndHEYmPBhVVPW2fgGiSnt76q52KEgwRjGAo9N1qVcyCzctBo2JLaCUyyxJb8",
  "key16": "3qxMqwtk9zgDPrrGdd2tLZg7k4PozfoXfxwymd6rEiFofpxmydvMfkL3bwj3L4UzbqYiuQKvQsHbERGyawbPaDMS",
  "key17": "mhHPviHJY7Trryo4abzLXNT5yoVesTVn1Kk6BwXfTYvnXMaM8SK2BrqUp9uBnK43zeBFsioQiVEXebJyZC38tPK",
  "key18": "2BiQorNUprkko82g5tc4VPTDGfSMUj2wuxU4k8AyeD9qQKKdSVwbmNQYKNC9prZ3ZyKDpdoEAgrHt6zyM1XQS2vN",
  "key19": "66UN7KMvzVtP1Jt2ahpxQSwBy1ZiKxHWzcHT5mUHW3QrchCQ3yJoFZGEfc8ZxytZwXob2fWYjJ24sjBkvCMUyiqp",
  "key20": "4zCoExugUqMuxTqpd4AResjHvRxLHzVVQ8cv8eto9cYWSAHAMdSXPTap8PTFk9Zg9C21MBzKTbW4qH2bVjqq2EQp",
  "key21": "5WBr3eDLi5c3tMzLdw6J3wNJRrxnQban2fgzEamACMzTtQMqExbeHYuVpZFoY8mfjJxcPiUyKaBMyRUwPaFV9nzX",
  "key22": "2tCCR1D66vgkCsNw1vKrJrSccgLnogZoDAD25hWbfYmkU1BUJY8T2RjwDYGo8qJqs5i8MbSXt2HCVPTRevJwVPxt",
  "key23": "5sMxR3Q3kM1mCFU9rC7eBnBHMGUscumS8HDjAjz5BwjkrT5FYgkFP6QoSVB1vdwyReH5nqEx9PgagnpG8TnUXFSk",
  "key24": "5JcHNeVR6wxfLv9Nc3KjW18x4mg3mSb1giLa1nNjAr3ywnRNHBKNYj9Tt5neXvJzzGc3xiEbPX39CAvaEZFuKCvY",
  "key25": "3KHrHq9Zw1X4bPfwRY3W4Zkc4ZAVhC7ZvrhwEG7dRNsc2ioSNyH6aFVaYK2Hst1Wx31NB9efZe1P8G1pR84KiDj5",
  "key26": "2t6LiG4pMtG6NvSYvughFLKoRDo8UQw4DFgBHjxgDuPZUCGQbGrHUpYmSGve1RiggP6PTe36aMbXQBP2d3x7y5tE"
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
