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
    "51wMaq9zuDEAQs9TxBcz4zJKsaz5YCFn8BssDex8wYkukLe5c9jBXhmmtbyBCXsxu8xrbArF94v93DFo158nTK28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oyEQfwkXdbDsghykUf5sBeteAGKEzcb4ogUzWJNeTyTezHqwJSbRYes4UmA11tpdTTYgsYLbH8S5Kip5Zd1Gujd",
  "key1": "3e1jKexx4rftsbDypkX7n1SZGbnMJu1uytopdScemjUpUAffUyrcHZmgKPy2rJzuQHh9xxzyrmQ6v2hH4QvHLXXx",
  "key2": "3aNtBviUu7yoJ4WrsBCUG6NcL8ALDCaR3vLfUHNRAQJfkDacgxweXpqMLia1nL3b2JJwpDRHPPk4ykVcx5AExzbf",
  "key3": "3VC8PaCugLTnAesWs8vpTNmh8Uxr6UYi2PjiFC7gYVapTNBz1W41hMhonZtdraKuiyVf6ZPCfLQ2K6vUUJGv7z7v",
  "key4": "4FXtt9xbFqtbJ7qVPjiMKr3uTQhYBGAfFPpGZ579ut2LJbPQjCw21hUpYqKFWeYg2Huqu8USH96ZgW4LVNd23GFk",
  "key5": "CJUqggA19cW7NE6N9hjExeAmLhjQcsSTYqD1V5TwvMGcEcmkbG8w6ZZf8sEbGJM3EK1Xwx4VUYSM5ENyroHXTfw",
  "key6": "5Dgack6t9VYZ9JGLb3HdPmg5sTPuiXMopLjWZKyDDWAwcuLp2yu7Hhup3XtdXKS6TUMPnkHd9QmJQ5Y3pi4Tu2B9",
  "key7": "2ynXUNYYxy4gC5rbnpAZAzhFy3v7VCMqcGhk8QCnYVfepwwppjp3Jn6ri16eXThEtSBjjKHRpMbaLZ7WJEmjeugv",
  "key8": "CPT4aakemQT2gA3B4KicX6z6LvoEyNM6DDUDU1FFDrZxBNPjgyG5tYtuzoZ2Er7YcGAHe2ygYn2hMW7UQ9dkHTw",
  "key9": "26LUHc1dM9wCbXZydFfJmQ9wkejqxDH6fwTwFbD793XMVAZWgfXuYAVuq483HE5DjucYS1GgwSMZmBGKf8doU2fA",
  "key10": "2D6UXJq4ocf2wpsADECHCXAcKWFeuEWKzNgXMdTV9bZL43qUTgTo7xs9KSYPtWyFRf5UocMXkSA1VWsHu6TZK92J",
  "key11": "2WyMZ7mV55T7k6rwaytBGDerJabMCUSFvuAq57Staj7ZuqoLdJUG6h8ZjWWsTxjFQ6vUnRdZnwJaW4V8VxoMzDhm",
  "key12": "ksKzNRhYSp2k9NchFfbz9Y2NT8iRJAxmb7HC7RPHf9dvB1xEQvAfw6pc1hosFjvsV9FP1ra2QZv27VFWwqa2hmi",
  "key13": "3xyYkgg4mrzQjgNX4ooE6kRo3phoC4ZawHFMqyjjnfpzdVNzyKLaaZSEqDuzVzA8sWu2qhj3qQPtyosH6mhFw1QZ",
  "key14": "4vorC8y5SGcVKNKcRSSG4L5knt4m8UDqyBygLncAM9FWRxHT4s5bzrrko2x8fdjxYYuBUE9XsRj3nHwXnCCWVcnC",
  "key15": "3CDgJtrLXSDrirXEegJFf8fzn4DvVRKrc54KU17B9GQd25oo9SW3ZKmJ2E1MXBQATEWkEdsXG99M3mXns6sUmkEC",
  "key16": "4c9BYj3bgFQDc9QV3ksDeB7A9SEnWk5DaoJKyPeatmNMDjwyxUeifKwwAM2EzJ6BofbHNUf88DMkcvvc2wF3kSo3",
  "key17": "5PCZTEAymZTvuJndhmzxKYXQprCSSm5U8c6tw6mUY7FH9HF9TSHcu5HzH4LyUrXihBiBmAKGdMWdr7FVkySBx5yq",
  "key18": "3H2P7cRpTZ3EnVa58iQ9CJC3UE6gxAHktbCcntDsGMY419LptvrvLQSSGbah7hEsDoFuMF1zAmBwUWamTejEuF3e",
  "key19": "38u48fSCcBGaq2nJ7eBnkiZA77SytAnLRddng1aNTaPLjKWQEFQ8aEvnyCWcaXz4rYBra7UjfmvHFjkydcWqr7wg",
  "key20": "3Fq59AnuEm3kwdti6g13i7rRmaFGf9C32QHE6sVtQfekRkC94hip7A7Nbx2wCRoq5uEoEratu1qGCeirz15efzzU",
  "key21": "tyAainSRCuFDiV5fwJcm9QFPzST2BM7QdaAq2Xy19yS451ZDJdfuVc9CcjZ7719xf51Skkz8pdfTTjeBrFpu77b",
  "key22": "2D7DztDWW6yBwUEKJUHBCtBtCHuyFPehnfpoa14MShNxc1eAEki85CAVTiyPZ2r7PmiRp1fLPs4WM4k6pFC9xhiF",
  "key23": "x4Niah13zxV17tQAG97s8EVj3wUy9FWY6Kj6oK3cJrWpkqU3cyMachdvLAfDHXD2xJzmKXbbPxCHKTbumZNRML2",
  "key24": "nGiZKQpDtHFPLztFzoTzdt4qkR2fjB5hFULDiGT4t3AaW6VuLgmr7ajeFf7S3oweYtG18MgL6x6hC3Mx11VPxt2",
  "key25": "5Eeq8Gc6VsykQP25d2RFjLtbAasfpfCAwnyLxh4ARXzTag6uZe1BVjx5QSPEEL1yQNWgnR47VPbaCWXNgaVdTWpv",
  "key26": "5DbCNmtw9mCTGHnm3XuZL2Lr2RZkp1pX6tGxMePVBZ39gL31gWjUwozyDNLN5HeZgNMK7CfWKEXrsxsdMKihMSfA",
  "key27": "e7N5qTGBqYCyJh5W7A15u5gL9JWwoPMucQUAgwBrXLBJ9h3STc6xt49jGfGkt892MNpwLHTux9xJtNidwyrv9PM",
  "key28": "2Z1Wkb2teyxdRc3t4y5ypLcn61BzoiVSs23FaRzftQETraG8Y3ekc9tuEknWJQdg2WQMpX2m9nhGYnZb5zRVcFvq"
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
