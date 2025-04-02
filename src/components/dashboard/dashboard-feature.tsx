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
    "3Kj7edzedyuW3j2G7tSmjm59EyJUwzdUQDHSX2QTuiNt1KjSWmkoKSGjFnjUUcCViJZNk8hzEf8tt4XwyFrsRwcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MRjwzscRweeLLaHaLjmgRYkWvEtkZnaLwdehJvndr9cevVvw9jCup5eL9W8sfMX1cEhCG1gfK6SDhgpkhsESihP",
  "key1": "3GYzevZLBVkX1r8DGMLmg5XLNoyvwYyoMFnJLgEdmHgNY7iup9vqRkrfpqguVGTTT9hASsdZRdmND3b6KNXwtnrG",
  "key2": "qTPuQoqPMzXsYQxrcp9NiuAUyr65EyiMAkbhd8Z6JAZu2dGUzFpt8MQ2z8Gqpo3q5rGxqo7NFscUeZFUDgiedtT",
  "key3": "3uj48NHNZhPkPYbux3Q2zZYUPXamZPRwo4d4eytZdtJjAcvBdiYTeFoXL82PaubRGrCsUdM6Szd89YcunH73wboD",
  "key4": "5putQo9A3jTHpTgsLvPRcfsHExizzEaApVWeyfPu9qxEHtpNJjxWLJZ8EaW31VMjSspZn3wwvjDLpLWg3zMY9RR2",
  "key5": "5vDJR56jrtkiwx37hri7M8hMAPGCbFcgoiTYH5Yhk7nmoVeHsrZhSMFtwasCmCKxskLxfbSerdX4BSMnRLrDj55T",
  "key6": "4sdxY1bJXeXdVgR93JycKQaF4m9iL4XL6GHeeaYPCBTU8Y5NuY3Aa8KzoUN6SFkKLRGK7uvZ7whFQFrj8JzsS3EK",
  "key7": "3w8vQcSyk8Ne5WXNGucqC2ePkcHQDv2KJZpZwFkKK6vxqZTCDVDJSyTDt6xNeH6ntzCDS1VgLcUikbromzJv8gB8",
  "key8": "5GBFeQesBqFL1QkMMZsNQaTBjLMx8hH3ohvAW57jasebH3XCM6iTfpYjdh9VVzWXCMtFHXJtWWDgGvT52Sa323a1",
  "key9": "2Rxpyd2fCemcHuoi24HmHRRU8sHmaKS3dHSUxk7cKT7qsvt8aJFQxez4VgQaAeewpkMZY3zqi68y2s2kkwbyHpm8",
  "key10": "2mVD8DiDhjtooiYQEnXiWoRpo2GhKi9pbmbWasybbL3FKi5TFqJifiXZSvU6PAft5tyE8Mrzmawd7Kgp8hm7ormG",
  "key11": "4qZx2cRwDXvPdt8XQajiHkMPgf6Q7TDSKNMkgfBH7gZgrH1oc1FzEWFYX4AvkuzT1jbYgKP99RyYfSiVYh1E6qJQ",
  "key12": "5yRXatKNFFHhR2hPcqLYLiPZqbbfh5ZkYnxesbwpMJBj1W3rUZPPKKfqXQhKd2vjdzioCTwA2D7UGntuSJKDyey3",
  "key13": "66mqJVKj5thznSobpFShexsJbbvmGWnpJ4qipDiocDw3XLF52DS9Lh14s7cxPW5RrGEhkuN8nExWft2zcNaqgDDd",
  "key14": "4zJjqiHvSLMaGj53RHFsmRwy6GghGn3Z8pybsLd8phjUGCDbFct9UswCFXzz38bqBjVREcVGM7rd8P3y2pLm89Kg",
  "key15": "3DTcxjyjTza9tKZAXPG3hscM3i2FEXbRoeULGZzz5DA6dXyVWGEPFL4ubSec8tn1oajzvcUAixxmdkC3gykCp2zX",
  "key16": "4irdprCebh8Gysnxa9au4oQyBXb3hY9n5jHYXG8fU4TGF6aSgk16yqdJCMafL4ShqB6LMstq59zpv6AXUjNxtqyJ",
  "key17": "2cajrrrCtkusGezwamDgPgqqfjuY6TdHnjx5dXGtnkEFpNc2ALDhzKLbumZEjRTpiBTrMtidaSo1Yw7kt6qc4hVY",
  "key18": "58usYtijeRyUc5vGUgK2sEq2HcLXpRMKMGpnM6Ywd4UcmHhjz8c6u9FuW6Pr8UcBBECBDNB1G4XGUkbjWTGeV8ex",
  "key19": "364xouqZeQSo2wE7Bp88LiyCWMzxBy6hh59LMYEWhqXYjHQfcwMs98LB2yXPM4NLpvpMo8a3FZ27kChBoxLsqHft",
  "key20": "3Tk9ajuJmKyBKvUTo3LkHLs9vaHqg97Jea7u1wXnqXG4M5C9KuH7GXkWBmPxuATJ9ftvV6krud33g1fuehr1KkN5",
  "key21": "2pfrgve6xGGwR4MykiicdPDpkRa7qGRg542zhyBTHib47G9stLHckMdEhhvZoJnCcBNTvUqL6vhmACMFPvX1eoVA",
  "key22": "36VtW8LaKoyXBQQN5YFH8DcVheypbA5sacGfyshxHGoPrFaF7hhFu3Yjra1aPUwmNTF2esNd6aJY91k4NXwBf9JT",
  "key23": "4FfinzVLACXQBC5JdoEBvZLgoaVxoKqqYUcTNK2NogKisnK3tb1Zm1yKmK9RGT1kPA6bEpTdwF22C9fVmvKto48T",
  "key24": "36gc9dagsgB6oDJqnr67tJ7p8y4aRMbirCUH4x1o1ke9ZEG2mViBryK1JWqQoYmPsUb3WpTiq7QcaBbN14ACmRem",
  "key25": "5uETnAEMMJZxRf7142rdxcemMLBdViKco6ygXTknwG17PjVpcYuw4eCmCn6n3zynjQVpjfkQJboSaFTs4ezauUcy",
  "key26": "5CJJ4Zy7bs1hGVSLVEKgWvi5sz1a334Tncfx4CTqmka2Qd8uxvDoGMugdfCEQEazec1jknLn2oshKRS8jWuzHLiA",
  "key27": "3iCgirJfCG6rSLczy2ig7RWDm9Px9AgK68sN4HcxponMa8hFgoc3pfDoE7dPYUjnny2vDHTAMuUCcXtG9mXQGsLe"
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
