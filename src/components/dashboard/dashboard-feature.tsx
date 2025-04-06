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
    "64DL492onURh4XFK9trbFT9TuLp5vLd2HrY4Qgehhh8svvB1ubZfx94vc5dYYU16TH5ZfcBLQfAurAn4sCjWKhQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o2tVNpdq9rXRWvaTaZ4yBwakTP2LGdipowKYUMh6SzwpT4nwMP8JWnH8A1bXHhGhu6dUTAMtHtFg45WS5d32E37",
  "key1": "4HzW8qrYg5oAnkpHKACwnHWajyKSzwvmNMEnAZjqmnvzSJsyJ2VJC6uMZ3yajKbc6MYxzsUMNmUoiYkojd4ofFYo",
  "key2": "oeeXN3F69fQTs29TykvAty7iBX9mW4RketKQCbCHiGPaw2yNfPPHEPJCTbiPuiTMWA4pDySqpGSyj3jGmXWdhMB",
  "key3": "3vtpRyPG7C7yWY2tkS3F7WRfoTvMLjL63GWfZ3xTY6mm8raQiYuxtBLZ8mBvwichekEz6nyh84ZrnjTCbSSHfjZ4",
  "key4": "vyke2JShHZJo6YUE264bNYPnbTQB2bTzwE7QFBEmHJCbSZXPJ9JbaP5oVEQqaNfZt4hHjkNkjCr3M9mzNGRc5TS",
  "key5": "hE3JYK94wk3spGTbt2MfELuJr4XHcJWjpkzeUoHccW7nfpnC81SbU7tzVUM6A2TtKJu8sCKL9TGztFd6arzVno9",
  "key6": "nFLVmPbQJ3Z9wLLdhDVNYWxP6bGjUA355ZhdcppzyjwbKCHpP4xyRBwKzeJHk1RHWmmxfQbUYzhGo85Sh6W2WpB",
  "key7": "WRRWTQSMwBD2f6x1UpSmmo4nqH1k5Ro2bkA8G9f6EBRFbcxUv6JbrX7suHkHS6R1MyCDyNLiR5J5TQE3YdwRnEt",
  "key8": "2WEx3fNfjTr6hB4WqiUXN5hTrSqN6uctnPbKX6n5HDWpoZCPGmcU73pC8UeaJni3qWKF9Yk3iCZGYMq3YvZNBEA7",
  "key9": "3xwQppb9WECcDshWYRV5BxjjQ63iwDKVr9jCo2JBSJU17KiVCeFo684uUFySWvRc6ykyfw2oXmYte58YoNZ1ERSP",
  "key10": "4nuueBcsTHDu7cNHd9xr6C4bCJzpsER5bkJyUTgezMvsWJruWRCv8wuZBS2ACc2SE8hpW4rY8MQtnMcJYn6hVdb1",
  "key11": "5LgduovDTxcsEoocnmhV6iCrRYAbhoyx5DpyhNvcqvZs6J9KvvKzbVFuqVHMkzmYvo6ma9QKZkebe9bPMDQtkKhH",
  "key12": "2uQ83RGgKjuc3Jm8dhcpqXE9hNDM5yqTS2XdBVLspPXb91wCGXAL1Z4zNaJ1navriRtyHQ197QwFEZFyvcfffAfR",
  "key13": "qRK8jwzWBp9NbUBv62JPvf26KgtKZzMV71cKhMKVe61yAFtU4K6aiL5xQUrmPA4vg8Cb6odVZYPkSwTPGgKzfWn",
  "key14": "HWMpKJ76v3FSH7sKVG4DeKd7h5JzXbrfFShxtK1kTdWuBJEoJUB2XRFT2Lyqwcz9oGCVToedCQqmg3t2QoA83pE",
  "key15": "5vHbrGbpB3yxDrCU9jV7o3tssxH3rUVRDFCF6gFHXBqZZwNXWh3hvjRdfKnh6T7jmbkSLtSVJaSzn57P874rkk3C",
  "key16": "45XH2AgJ6NwvnW3THProEDiBtrt3jDaS25giFZk6Tmqm8mVYiGRvmaRQz3zCPZ4JvcwjpHGCR3uacFdhgYRjoDD5",
  "key17": "3dKcp5Vk7ekgTGrPyLpx4WTrrUxs6VUEEv7FV8Ea85RisKekpHDKQFGYTMQKcE6ooufXMV7uoyJoKveXsxDgM58r",
  "key18": "2K3dkLKT7NXTMV91GkQXmq7zK8T8cgjeLywdDHDwn4SyViu7At1D2n6VSsavsNSgdTm5DCTE1BAV4m9mc442mop6",
  "key19": "DAYuJpyf7V2QH3iejx6icrKRoXtHrN9vrC4VGo2fpZHF7c2dUMnGhdkTuUPKtf5QyuQhG8djmXzz5mwpULUrhvG",
  "key20": "4oGVe4XNoe5g7zU24aGy5LaAFL6MxW78aJ9W7DZy2fXSDPdpx1UENv2c5FYNAw5uNS3MQX16V2GLafa8BUnKdBHd",
  "key21": "3ePWTXfSn4ff9djyeEnkJdjLFiKYA5xTR3csC4BTmHZCBj64pACsHT1HuptKXr4CZdKxdTHACvQoAd9e9Tb9VMT",
  "key22": "3mWbJWtJRR7WP1uR63ofLkWBrq6UQ8HUYDVsaf9gEvn7ZYatRk8QqeZ8jVamGpLc6dT9e6L87zaxBu4R4rg4rdMW",
  "key23": "36zZdXMpqJVFPFCXabVKfrwDGMraekys7nYATQzQvLGQPst1e5vo7RgBogSEdgKKi8NzcGXqxUNycFMFnR3758NQ",
  "key24": "3oewqG9Ma6sYph2otVfJ7wV7riFgeC6Sx9FEv7MR1KByavRiJe9LtNbvh67yjsXyYyrX9jNpV7QTXVgJdNSTgWJt",
  "key25": "3PppvTqSMz8PRWVVqzmyRD7wHvKD464kzFuSohGcbkaQgwLZdqY1Vs5P3hStrRE8oj7Hyyzq3ZVgC61ZsaCHMyqg",
  "key26": "5R3M3wPNGRbR5zaw7TB4uVYfRguevsaujVC5UYiW44VWbhSp5oDTrKNpzVvqM3E1HKxTAPNrmsn22GCtgZWgyM6a",
  "key27": "52s7pZrT2YwVzPBDp3hSUdVbCoTn4WtZqH53vhZucAHJJJ2zWHk6JUwroPti7GsD7Tf8MLnPY6xjzUg7ejjufnbu",
  "key28": "s4FHQbpb2oGJzxiBVxb1DTUNca4X597Ux1jmWVm4WmNYrNz9ksmxtFrzvtzW84LGUS7dYGAWfzPFguh2guAoesa",
  "key29": "4rw1FH9SDyU628eMjUaxksKHseaJEmqYnHhCiq8DQ3967FjSvX6TSdXtUPALkJFbHUHQPLttaxKiWcetqA7DiDda",
  "key30": "3X7DPKtnjtHonMhpUGwkJ6FktKn2yJRhGheouVZHa11XKhExXT6uaK87UgcPNNi4CAQfUwSgjX3vpDRvRUrN3Aqo",
  "key31": "5hiFJnJkZa8YSfgyuGNbxHLqDkNST75dTS6mZUq3nV5jyjUAf4mssdFbnAndfm6EP3DPAWUXHXYU3eTRZiTW8guA",
  "key32": "3xmm1D3mZetvqfHKFmrjXeiLAxd17AEE7Y3E7k2YnA9nsaNuAD3zCSjAruWFv7wE53YRqWWSwU6e12QJf8zFBuXp",
  "key33": "2VCyYJWjMiHCyU7JFtr1YofskpecwdfCShZJTvUdnH3BL9NLWPDAjsPrgcRLZNSo4MBedy33ZY29QMyjEpn6HXFq"
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
