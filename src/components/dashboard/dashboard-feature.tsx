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
    "3289or8NfZ3mVyTYY99Va1TboBnX7tUTKS94mB8wwQaBSiNeHDvgCQo1qiT54nvgkyULwAxYsb5zQwJ7uzioXyaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GKKhE4Fb3LwGR7XnTLuiJzfXtHNUuJCjTwmrHT8ywFKRpZ9jY1o4AEJcnTyniysFMqsyPDdgCcr4vpySrL9uorD",
  "key1": "513TXWq3PTgiD7zcqfBKXtQ71w1wMUXSX1kGrL6kmwG8shjPpEvBXi9ms4mk1352QZNRNf9rUeKoeVMCKDDWBQo9",
  "key2": "4ZFaiFQeu9vt7JuoCVvRi7ogvUdwWVrwbtKkZrJr9BV48eefXcExJi8aFZTzK7RH3FTawE1kyYjEjSWK1KcJmFio",
  "key3": "5vaPLeJ6eS4vE4jrdjMcW6gDBQNiDWQh1kU61G7K35ae275kJvBb3KcY5JErKzFt7jEbsqhYS5Hqc2EtxiFzD2uo",
  "key4": "Ktu9bxtSKszyheFSbCFkZo3ezBnAPE3XDXbyzgWQTmMmcAVtfJU3dH1yKPp5or9Dwr7RehEXf2RrvM3tHM6QgFc",
  "key5": "4sX2vPqVUQNxRnYLpAUrQ754wNhh3pEmEsLQJXrBbee6VMgux82yrPHuZpQmK22Ybhc8ZSPL1hCjZhevk4Mmnuif",
  "key6": "65QTvk75SX9L7dhTJ743jn6MwLVVKh4AkySChzyhcyQ9wDD2aWihZTFGVGHcxhLF8B7bwAsothzPTKXiKzYHbp8n",
  "key7": "AHQ6FWXLgeEcDoAMYrnoHscMAmpyiWXhxcgTrPmSQo4iqfPFdW781XVtNowSWfwP5GesGmM5vYbZVjT7PjXV6R1",
  "key8": "2zdPsPvEDYzuNX6NCfQ6B7LQtjgSiBRZPs63MvMWitm6kCmXCUeFzetn6ZCVNx9yFMs7m3gmGhLRC8RRNJjvq954",
  "key9": "3mcETurxxmhf3s5CCbX8D2kvAVoffWUnFpz6qP3S8sNxWEb3Qv5mTnDGRsjRHnyDXc8huQAMGGoBsSzbpPuXFK5H",
  "key10": "zP3qYmuoLrfFDEhTjGTFZGUjLFFvUEViG2Axa4XyLJUvcpv5GPvn9m6pNx3ATgF51gtS5qZ8ZvKbwzgjXPFvjFU",
  "key11": "4DpdrdG7c6Z1UCghX1824bQC811Z55Rbsq9hGfnHyVxZ3v9PSQ459SatZyjhimDYjM3fkYEwQAw4FQAJvTw55M11",
  "key12": "2ABWqAxEGNYT9cJGt6QXZJZQaWwcca7MztZoPmMyFmGnAyrHbpB5LNd8rvVmkPFQ3fYfPqYSmHp9yw7jrgoFqwX7",
  "key13": "2h7p5xgSWrTsVtHM6evGoSAwUJaL7MVm4yuUsskv5GrKBtpECWd9CLCvGUFGFWivbqHD3KFXpwYPW981uF5YUHZn",
  "key14": "fxmfkmn6DQPJAhf93sfTREAvYcaDuKiYZBx1UiKjnCnpwA8QQpedLfhNUShqM54wRvFN5mY7prsurxJUtey7ETx",
  "key15": "3H4SCkwxyo4Cpjr2dVxb41qJCeZoPGpxbDY8VC5cdzakkCt1PE6ycXQjdrsBoRAMVF1DEVyVEZSSWCHCrpGrff76",
  "key16": "4gHPRJQyjG4mwyuxUYTmR7H84i4UCy3GSuV4Q2cJaGvxZ5LhY2LmChhuE5JH16DZLVN9yZMqYWTbQX4nqacVgTg5",
  "key17": "4NyeMqczZCRLX3gFmFAWqhjXHscT3vUVmFWhoj7jvRbnrAthCEuzgJmfxqSuktdokaqhbMoHcHvXZ2YvJatNKRwF",
  "key18": "rtV5KfmHNjsmLBterPwJw4ojiuWX8wJGKFfLqtatWpd2zwMkZy2QBRZ2UtzW4jUCM9TWyQ7Ut6ZMih8twZ4yu6b",
  "key19": "49ymaKCfFvkm6SjGU81pqEMjjP25snLUcD4JGJoaY7dmdgpJWTL6RZScuwqzdgd51yznM1KAyyaks3Dt9jr6qfVT",
  "key20": "4osvSDQ1i21kH7TuHYYr55eL28aKKKT5iLNAgr8WxGBe8Xwcgn2dNL7krQEXUkUhxzvW431skdhi3VgqrDdBv4pP",
  "key21": "545o3ZppvBMwxM4eTPTuPdoSEmt8FpuyqX9rKQVAL6TesJouup4sKe54d4tVthrbGvkKGzvKsB6Yt2eJeY2kDi1H",
  "key22": "3XJLe4gDB3KA4Xf36HQvrMJyZ8jQuagGSiFPMqPu6ndEHey341bSk8qucgCSf6EMwJ4iwg5pU5SHLPZm7kuNbmw5",
  "key23": "45rJRkcN87bHnBJ6RPmxzFmHc6RE7tYhXdfBwHyApxDYuJkpriNmJhWS6Z4o2fiErFRJQAUcd4mBMdXy52QUH1Hj",
  "key24": "2Ugss6pHZY1t8rTcCYdGsJt7FipYtxXQhLkKkvwSWFtfAKY9S5Le5kSfy9y4W5wH8krEaFHJEbFZJAtYBGuBw7Rg",
  "key25": "34JTzEbC84F7mStZfdcEzDJh6etYfbiC5AjSuFoGg5z1DnkZ5j4ZdMUD27gbxRdD9ZUzUgcNJgKgddcTtaowgGUP",
  "key26": "4k2Pg83mbjFfaa3UedC5ve6gGanJQzniXufbp65MKC6yfKDkFfnPhuD5w9oFjN3HkUpPvwGSfnt3U3DCXpojRJKN",
  "key27": "36aTT54cmbm8NH69Tw171nRcxxHqAxQ4L1dr1xpHm5pRKz38ksy3FMGEbzYSjz71vVFgHbBxSC7Epa4RXRiBw1rt",
  "key28": "3mEyGGWmqMpzZyYCno1t1z8Nomutvg4556mGjAxQsj4SsZgyPsCe6F9oUivAqkKquYAguzXXa8kmbGmDUm1SQ4wN",
  "key29": "3x57msfH2iPt95Cw6FCFG9AsMrGfQySfb4R85Kp9MM3MVEfUYyFDCXs3PWEcpTvKhNgiDbR5Fs7jkmYDo1gXozf5",
  "key30": "M17VUi9R65H17zNZms36hrr5z2wckxNqV25byWazP8hxkSsLBWspi34cosz3WH8Rkdjc55oWBDbUKqkELaMt1bu",
  "key31": "2yZf2kCY9VxktyCKavGuJe965gHX68QFFXVuAvr45uFi3DheKrDrKekZonpyEqFxcaPravYcbB6n512iaHUxpAD5",
  "key32": "YEJbbzx8w7LqKdWHr8TD8AckFDiK8ajhW24hseFj18DWUZbN3DNG1442z3owSmmrUvKMPNT89SK2srqNGXu4Nxi",
  "key33": "44E66RifXTNDg1LkdLCTvDqwKUvaiwnm4cuC1dZFM71wGDqA8gmbB5h25uyX4Ah9TQm2UJHpdiJd8HJBj1tTuZ6X",
  "key34": "4rYxvLrqVeVWMqyKvqCy7teHQizESyjM35w4aNG9NBYcM3hntxQfGNFMq3wt9wjRwSZrznb8oBMmuC3xSfAC1R8D",
  "key35": "3Mgw2UPjUpiVbAQHx6VPYWXASFcakvnKSabqJceKEScG1G4UBQ2LRa8hUt57cmagGasauQLwdp3vMSUShL83ydYw"
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
