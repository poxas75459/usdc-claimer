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
    "3DxAFEXbBqwNaJTQTHsuSWPnUK9oaLx1SpCKtPkbcXhvPUEmsoLYB8VZr96pusypo5W5N7EgtCKS4CXY669oTpyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VUMJKSzQVG43AcMGMhngjG2f16v3eQAY6RedBELEvLRzAM7i9KTJ4Yutxy4U6EUiNLEd3N89DnPDxWVc94SKb1g",
  "key1": "4Ub8rkVAoYydZEeCCrAdm1yAQh23eV8CJFZ4WB3hy7XgKhW2YFgtSbTCSNxSopJfy49x38DtftG1Y8tGxf9Fy4oV",
  "key2": "5tPnZ4tyQFGuuuiuyY5RR4crpxRoNx2qP69WKFCmLE6YkfuKdkbt3EGQxVZQU4iQ3hSwkwBx4uDh6mdUhRJx2Yw7",
  "key3": "EqRZzgrrGYqKv1SSL9KtkjZQZC73r34X7XpmRL36JiuXdhH8eWWDDexZDq33fNP9VZuJGk7BifyQ9hTwQB6Jq4x",
  "key4": "2jjapfPFrBU2H3cGh5YBn4MaJipcwNh2EWKDDS6pJ7rSxJ2eEyx7qByRqAszwsf3bu58M2skYwb9iG9oGjC6SGXR",
  "key5": "45wjm921XSTB9FXV2RRTEFj1uRbNWDS5wC2Fi4gzj1fgY1CTYYQUFeMchY1ccwA27ygiYxHAPZK389gYniYoLgDg",
  "key6": "4gqu1yuNpoMSKu2Fx4qGy8nEFS15uATcqJCvJrGR7nZkeaN8gkYgBDe6tSjVHVaw82bQ9sjP8G3gZEdXmv2MTirc",
  "key7": "5snrHUqboHX22X4Vg3bzNgYWth2qQPau7p7zfk8KAU8t6CBURF7iBcmXGxp2q1iBbSJULEn68ff81HPPZcND8XMz",
  "key8": "3p1XiFZn1kezTZ9DnNwmDuPvYRbzGu4mBMT4UUg7qgJb9mXmTPBW1yoG9rZQ1WyjFXMW5eHX3Dz6xBvFeJcfbhMu",
  "key9": "2CXUCv8gMPatXBtzDTRN5kcp1hhe28do6GVijJiGTvra3BiG3ZEyRvDtMbNvLf4MhZsywyCTskk4jhnbjs7sGs3Q",
  "key10": "vmqQxJov6ZG7zYavranW4vqshHtwre56CbxHCvWEzCUTvrbGrZbC779TmbtZsv7TewByfYV7k5BhR7zxbmpqFTX",
  "key11": "6vypc8PbMC8bCWmGube3GBUkbpBHWR29KxtXCEoPKAaQPunb1mRuxCSn3Dw5DW814sEqj63XoUS5R89MnTQP349",
  "key12": "2CfBTdhYTnERMBeWE3FYausM9VRCNbxsbsD3SjZ1WaM3rmhG5pLz1tYYR6iibXqKvei59RXoajYCt5jUd8fSrekQ",
  "key13": "3p2R8ZT1Xu7or5LqTj1iCXUMb2uP4tZ3f7zT394rJFYgGaJV8Rs5VWRwtZ3MzfRDiqwDTT3gp9C3pY85VZVnzQrJ",
  "key14": "5LwuY2oPLsUVVt7vH2geLiTMBQE8h17rbSSVPNLDMwMi8vJWEJkjkemYaxNGJ7rXiy9pp8h1oEzSPEFnkvEDKXzu",
  "key15": "3CSrFdW9Kk1KQEXDc4xRS9qcubsAV6jqvWu3UoaYxYKoHpiR32f7w6VdJSLjmCuLVE2hWhWF5omEm4gupuQoPy5g",
  "key16": "5hPBmxo4frz1pUuPY1j9HJCxvFdopwwsz47mckEQQRSt4B2618QTtkBEXccPmxrowm3F9YKypU5AK3WAYnc6nKni",
  "key17": "BihZ7Z2wXm5sjW3pQ2yBJLXbkBD6BArgNz3k2k6YPeZdQrqTZ25LwpvzaDYKanogCf42qWiFVtCU5W3aDPtW8eo",
  "key18": "4s3Hmd9ZpvhXg4v4mFkTkWnR3VZdXePp2Pwko6hdaBqf3U7qUk8oXCVzJxQytgfp6vG674PcMkuKnEtptvDaoRJA",
  "key19": "9tiyEQoZrRJbhafXbqDmLC33uy3X9pweZcEMxLqJ59Dj4JaJ5ahYGnYMqJ74TCk2AzXWc7XfTGB1dLBKZUScJ2Q",
  "key20": "4QbiTcyK3RKsGTQvFdnW6xBYrGeypaAASG2Gmrr1YAeUSFasyRtnbXtgQu4T5Lbnfv9uFYJqdZRfSZJA3SSVnHJ4",
  "key21": "2n4hyA1akX1pvC4F3weR6D3555PqAeGtKqw2ParjibFnqNUWqVivqkHawM1nc2cdYQcWWwWgNJRCwrcB8VkXgtUf",
  "key22": "34sL9cTJGzcWfBzR2xjfvtPy4ukFRgFmQPG9YsqC7p4hJfbT8RWteni4hgFwNpxRfVSyuDAwHENt6su3iTFfbptX",
  "key23": "4Qw8JffmtpEpWSBZn1vfe4PQHXppoMcLwsQjwJT2ufFpR7uP3o6e4hFWXh6raA1nCDM7fp4tWy4dkZ5YT2jz6nKy",
  "key24": "4XkmLrYbRa75PmNUqpdZKQXzaAWVrTVSzHdFENJxjD2QaMPaMZVJfWihF2DCsuwkd7gBDBt9Bp5Pi1T3h5BLpF3Z",
  "key25": "49MB1nxvFYFMUzoHTQKgAdan7H9he8i6auJjRca9uRk18UXSyhdHut5wTwDWQztsScsYTXdijzNGKzrNNNMvgNDR",
  "key26": "3iUqBcqLq3ANEgpPyR1ndMze8syrd1oKMychddB7LmuymDCJKU6nBrkcQWVUJpYbuu9kAe1jGbGG6bcVBLLXrrvn",
  "key27": "hfcWdZy1oyc5oc3PBs1r2WHGrdMjGE5rrqjfewq5F6d3LDvWqmoDUx9fY3jwBtX77GszWn4s9mCB2nCRvoMU8Pb",
  "key28": "fdwZ8Qwdr5u1wnLb81yC54yP8DZu8X6eNKsp7D4VDRp9mKpkr5qkrcpogeexydmt2Zyv1KsprnD3hUnAWZB9oGj",
  "key29": "3BohFEdJUo5xGVL7Do682eTx5giVwcVvfRfNYofYfqB4gGEtokRqfrQTsGSy5k7XRkQLewUDSr7vm88J46Y5kmvg",
  "key30": "wWua14KabTYYL8QTx2ipf4TohySMgsukmUBm4SDEWoYo3AWcn9hUy1P8ShGxhMM1FyWkRnaJq5kp7zLxhVgbzfQ",
  "key31": "gEMiegrVPZBkNcAGZSXGnraoUBRxRsDVAvUM1MxMwCJbhzuV5P7AKwtvL2FbNeGFSqqG545MZRefz8kmHA7ijRK"
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
