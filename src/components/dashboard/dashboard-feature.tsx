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
    "32iePgvvmLYRATZAGjgpAQPGDMF9Z7XvgLQA15iNEXxYrep5w1riUufnzjfxPCFDdy5ND3cX8UJyBERRuohdVJU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEH5uMivtCVBPxtLEGASBeSaz2JtPANbpWJ6JUonxAEfgT3AsauYfaRWHUHoxXjKWtgXDimnc9LDTZHto6k2atU",
  "key1": "4KFF7ikBzHVDx9roEfXZeijrnSvY9WtwFAVSxkjtw7iLxJZYy3RRGYjK3iYUKaYNR7jKmpVdhcwMSnBMaN4TgAEv",
  "key2": "2t4cq2vWGRm2iQAMiRZffQ79BmSTc3yGn7hbaW3533A8Ucvq2w6sbFWGwo9t98xgBGJdP1brBMFjdEKbRKAirCeU",
  "key3": "QjyKx6GYFUYLYbsXLqcHWurBGaaz1RP24d4uSf1pbzck5mCBdycpqphcXNmv1vfqAhWGrCc6pBQur3Kt7MictBZ",
  "key4": "2hnQq2rhsKDsnkMw2FJTi5Fg6nnB34wLsEpuz8MaTydBPMKjasVBkrtQspvdMBFAayNvqG6tjUKnnjk6uRnTHGu9",
  "key5": "UPdLfhCDLWdL7W2HUJxGD7WaZfcebUej2VVhspqNJ6H4UZ6TdmxZLUUQmwh2878q2jJrF8EkRbNsAj2vugztmQR",
  "key6": "5ufkC92LXhof7RBkcQg4K4si68i4HVF13F6qUBf45ZhkeEb4pNSMVgTFjdRRoMZAw1KAZenFhyzPZjUh9EdS7Nwv",
  "key7": "2attPfWEMunsT6Tr991cBkSbT5Xtfcj75Y8ktrupYNGvJeNXSqqb9fP6Z4RhzvHgv7yiGz72i2Q8kjow7DcndQQu",
  "key8": "5x8n6KU5KVmJUD7tWi84BrAfjHdoBZHvh2HYMm4vZPUL8QeDwSEEVKbGM1p8nE7VKchhmJ4iVypxdCRUc2R9PrsN",
  "key9": "2TiyR87Jg8bKv3Kubv5hW7YeyFBS987BAaDo9NzhgVAhQXMcBYq8xAMForyoDgnfak2Xwu23Bbe3z9urdcT6fFdq",
  "key10": "3YT6GFFj83cEC6EZXTZEHPEdMZKGwuS5s4tQAYVBmxn3sEJuyhszFjHWFmPFDxbkdXEUPJjYUyBPxXiRc1EN63Ua",
  "key11": "5Tu6w5eD5YfBZ1UiYLzZVM32qEcCqPUiYzyTV8fucom2p7Rcm4XniBoJaz8ajhY4xSQwEAkXv41KSaknSD5NKTN1",
  "key12": "5visTwrusAB7wtSwoBjEAupd1uvJysbu64HbY5HzTTYhD5nrfxhXuLwbKQ8BprGKNwFojtSdTyd2ntoD1ZPg3BZR",
  "key13": "5cexnw3nZEMnaJ3vAH91YYBfeF5z5vtuX1wWTX8xjVYTX6MZiFyjBSnNmeLvcTPMo4deE4X98Ev9h8BW5F7oDVqG",
  "key14": "3jn2cyCTA8VL5RJYojVvZn7S4GCZoSHS2TH3dFYHb5PshvnY2efqNKibWJAas8zufrtnH2Gydh8Gvxe1WiMni3Qf",
  "key15": "uUwZ6QZdwsk4ut93WSftEwdqUyVB61Yr7vHNfQ15RCiDTAVRaQ8bTjiNP34SbqM5TEAnEFgyXU3ts24PGs2PMxP",
  "key16": "2WViCps3rSUsNDTQVfMsbeBqyRUTp9m5uCPq7W2eKpkDeBk9pFHemzegW99qAQt115Pg631BZZcyYFX5NC1EMmmM",
  "key17": "pR9Ua5zc7hGuPH2j9pxFcp2zbbBXtQAHj7MjwzNy5s9pPUs1oszxdPvLfArMAuzZVimG3p3DWPAogrrGXPAdXV9",
  "key18": "5VYpMYnz4XXuVrpAmCyZ2VYRFJzvqS6aya9ZD29TTwohxAwBQ7Zynh8Q9caZCXUkc5rQCHmMmv2Aaw82ksgNYDSP",
  "key19": "2wwG8eMr2qRHTL9tkQDYAuunePHf6PNcm1BkwtWsxkuR8YQ9tFAugwGnKcHZw5zyzUr7f58FXD2f7B9TgyNz1B3M",
  "key20": "5YjXdLgBrKPgSFEKVkP7hfmwvmnxav91TeXPywWSF6CuRTbaMjbY1Nk3P1jfZFZvtbt73XizHV9MaBP49nspqkLP",
  "key21": "tVadouG8VffomUpknaELyg7bNqjnoR2d9Ut924VeN6TmdYN16fWgiY4LfZ2Cvy9k8fof9A3TpNCjytZBBKELucb",
  "key22": "5bN55NjtBNuWDveuccGGMJYy26vYJRRDtgcLNFtaX5A5ArnJ11mZuts4bD8QK68tHUB1gasnJGyHJe677yg3AQh6",
  "key23": "5f1M75gRL1ruc5Kzk6QnMgmEsDFa1tL2bk6JBmhPSMakM8RgbdWkajfpRSM5FHBYKUsoHdAAkxj5R9c1uHKvi7gC",
  "key24": "5RqGgwZhYRqy42zYWH5o5X15z3nwQHugZX3bZD9yR2Qxrcz7HVVUrnaAtW9P4be52qSrRXCZZypMaE5geCEwvLxd",
  "key25": "tLxcGn6APrx2Rh5LBZGix2sCqKZbQKMJkZevgqRw3ziUS2mX7SBeK4bqtqWaqceWVXdK7PYzViye2RewbkQUnTr",
  "key26": "3dLzaBjhsBasypbdiqTuACvQTjC7rrwSsXKQqrNXsM8hY2YJZsLR7tYLY2kCA7ieuWR1xzUZAsKe2voCSK631Hwq"
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
