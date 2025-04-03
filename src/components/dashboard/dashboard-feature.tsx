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
    "2tYH2k4uYscVvVMjthpBVwB551Aj8o6ZrygaomrEvcguwtq9BgxxmaWjVVEgK39oAo9mEBND4x3RSwiBHp7bacE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7SymrK37KrzL61EKwZ5QFTs9hqh6cHZrFyQ1v4UtX9JVGm6dbn3ec3bwXC9v2ZVKZu1HXa8AdGKcRXEjHEy4Fg",
  "key1": "2hrfeecPgDWL6P1vmhYek1WK19UThRB2UdoinTYSAnzbsb5D42wAzjA7hXV83J7WhW3hoqc8x5we69SfE3vYJgNo",
  "key2": "2mZ3dPzGvNRTHkSBygrpb8FK7TicjfZr6svQNCvVrSqSBpFPtE2C9ejCaLWankyKWsKL5o4qhvEy9uh24mJpfVTM",
  "key3": "yhEep4HZiRUo8xCCn1jd7NHMEmdneuv8UMp1xMECxw5daUXR1x1HcLSBsgy7L8XrjT5HA5n5kGm1TE5fRdP5djJ",
  "key4": "5QPi2zoHB9X6MbRwkCosEaXfKR4saT2kLmxtxyp9s2oxAiWmNYXV44bNhuhqK5k4rysCS4qWTth4s1jLMaBuVXf4",
  "key5": "3EbEL43K2Zj7aeVBCuyVdMbY2i6yTjgjdGJZWoXdf3fHC37iAjcSUfDGqB32wekXoK4PvpkDF5tMD9FFes7ofZM3",
  "key6": "5z59Cng3e2yHKnGeWYS1ww5B3X2apa5ubeew8iDiWQVaq6x9RWKgFFd1Qm5MAPkYaPoVk34XNTkZC5cKhBkG7Bq1",
  "key7": "Eca47fLkK17imhMW8v9EGJVCruAH6BdUNcWDQqFN3swj871uiuqiDGtgRMoiew4HkusTYndrm44oECQvu53Aeze",
  "key8": "2aAiJRvov8UyuouN5uLRDD8pPEL5KfMxjdzhdtVjwa9LGocVg2PmPiZoDR8MX3k6d2LwuxCzYoDoE9uKcw6mzowx",
  "key9": "5WDhVDfTfRgZCVa2KTfTE8mwPqty94Ud1yQN2SYP1yrn7uXQCJvqHjbbQF7ezzQP9bhSH2nvuaEy9V3z4WF32jY7",
  "key10": "5CkyGewNkh9bFSEbNWj5ZptiBDf5TS8WocZSHuGsQ55BM4aJzSabZL4qDW4g2xkcD4Qg5iJ7owhLR9b8kZsHyZmw",
  "key11": "3dYHNcj7zWxosgzmqkQSuSk3pAuQPvsXzjK8yu4U5pAg23rfLzmeLJ5zAJG8Nnk1mDQbMBb24b3zviLYjuCo54Xh",
  "key12": "2NrD57ZfVzeS88S7LPoA6aXFApV2iJVUbWa9M5ictZ15H7ZFxtVwbA8i8CWTMjxoXHYQuzLM6sQVJzKTRNi3rwGg",
  "key13": "34n7Lgjj9r2L7L3gWqdZw6kqQSSiVabCVABxAU1iebTdcgA42r9YMgouP4uR9LJ3EnJnrpxk537HzuPrPG3K3qtW",
  "key14": "53gsFCZhz6CQsCpmh8idPFXapCxTg7vs9A97TKFYoNqgjziUGuzreTbwuqhzJKSQueN5smEJ2GPLsJzjFSx2pspp",
  "key15": "4KXQ2S8yWdEppfndbZ5nEtjLDrpkta7Hx4UXXYBXp7V3QXkwtfXeafmdmpKC4UQtpfNom9SpkzzR8wvVZY3Fd3H3",
  "key16": "3E3GVbpAMhHKzRAb97waxfkweyYLzSwFQoLqbBxSh5p9o8kAEryexzb4gweuWu1StLV3unzBd7T5iC9VcLWkysed",
  "key17": "2rxvtJmZ2UZmxH9qUgGzYVjwwMgdJW9rmNRyA62DGM9FBwnvgRmmFEAaa7Z6G3WkhdQY12F9XPpo1nn4YDmf5prV",
  "key18": "3kopSr3MNGQEDQEJCnNrYBvD2a4Lc32F6yrk5sKMUSq3CbKD5gw8yiSYFmdXEeaxCfyYG6YamdgJ8JU3LjyAnc1K",
  "key19": "sRQpW6vanvSZauQJnL2UxdTz6xfQTdMFKJYJMxV5t6P8zEtENjnBpcZCNkbJcfCNjW4P2cNKXMGj8DQqCVctDYh",
  "key20": "47SY26grju47SDXDsiuyQE8jbZKWVe8ixX1RyVQCy7yyETGrWRSAjEY2nocG6ZHKtUVFBPcnxSf5ipBwSJ1xj9Bh",
  "key21": "5qcBH688nnsgtp49sDJDZi3m6ETKwCGWDZkYFdAcRJMMTFQ4GWb3gZFEvcAZBjQJVCDKF4kvWH9TV8f96EeAULWz",
  "key22": "53EbfkFBGapdwep2HNhZCDehKn8xaZHcw9FhQkmamL7XiPxMCcdedLKNDjrPCfSUXWqUeoQZZKufUDQXkAA6QUby",
  "key23": "3Vifj6cv4ipk3Aj5wNhH5HDkaetM5tQSwhvnAxCDGezW6zRb3ZVik23wciuhfgAqnqXrFkex1WSzZe4xD9xNRcwp",
  "key24": "42TJUN3RoSHyx3YSXywgXiGh1Qm12GyLJmUbnz6fpRnnRGf2N2PMKJChvdfJfx3Liau6hBpgo9TdcsGgyPeCe1cX",
  "key25": "26i3tbC5D3QMmnDv3NGNQw7487F2nyCjLPaUDe4d6MeCCMP1a7Wm4HGkTwWYQv7dVxzbTE3VCPoWipShMnZ8p1Jk",
  "key26": "3GkmERqutdkvHCRCUMFtkWwoNUGgaAGYg3HKWUiEn28CGK2gqkZMikVregWH9G9X288EBU4KG23oDV68YtN6j4uS"
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
