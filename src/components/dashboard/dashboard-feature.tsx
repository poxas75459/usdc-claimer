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
    "4XkTrFyz11xWaFFshy7fsc8LVnEkeEoS7q9c7mdniJnA6gpWcbp5GnrWoyTEf2wavJPjnHfWcHDThjABqNgKRkgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y96bBGzBH4fGxYxVWg4jPd8NTgUsxuBg25VfBq5YwSMiYmA5Ues7gyhRapUpUDzWudAV2UnbSq37E4xY3zPtsd4",
  "key1": "58Pspfz3wQVi4T4WqU6xXceSd4YyuekyA8h4KabuvWFDpSvD5r9SwcSVwY3KfQsPoTYXA4p86G5DzGnUQmqSkduA",
  "key2": "detTvrtZJnLAawW11SKkxbm5fT7AqbtXnwwBwjUzdhZYiDueD7HC3zi5htg2cstnDLdWeYr2yjb3dNvM6b8dpg4",
  "key3": "3mqVwPXcnFruZfuCbLPHz17SMD3fTXK2FCC4VHJhTo4CXozJKCmyPzscnrjHxbC79QpDoQE5t9dgkCkZkquvCCtc",
  "key4": "2xPMnoFg7hpFAZ56H4bCL5X9nBnTJCSMVKiu85LN1yKnApRvqx7bzKmYMvZdvYyB2TyG3yfXRUt1n3K4AmbPgDG5",
  "key5": "2HKNJQvEtWtMqYAKHeYQxAVNDduM218v1kue9ZAUzNAHRrt4ZhJ33hBrorrY1TjAmrTBhGuwH8VqgMFLGc8P62s1",
  "key6": "5BgMmQbWrszdkSUsh5D3bPmwVytD9qUxB38AwJ9nmmXB1SiusRSNpPSSkpBBqb8AQtNYPzuYHi2FnQN4hZUrTXYE",
  "key7": "48aDG4paNmCRLKwmf3mruQPcFFj34rZXbSPWhQ6k8ySr6j3uTjkVTt6pYnMTpJcHRXmn5BrM7en8jYfjNsApKi4K",
  "key8": "2DSgbQ84XsrPb3KR7X1bbmTPW2QRjq6DrTiC4t3NFg4d6wJc8be9ZrR5RLppJUXTPfZyYDeJ5e1VSxBy63nDD5hq",
  "key9": "5sdyjcExR5LKqdfYaGE95BWPKEkswpuz8yd5wccMESyRPA26efq6ipHM55zc59SL1SHcU8AsY6X3Ro15oLuBwNgt",
  "key10": "5WnavUFNHDDcgEWXyPvkYnMYhK2TY4aR9GV59HxqWwVGEXGabch8Q7pyvcsjCMBdM3Lu33DyinTMmPeU9pMD1YEp",
  "key11": "JJdzgmPxfZN7ft2LxZWLCVDPHCoet6FXnzgiCHWw8tb5vBoosmWxzvDo8K8CqSKS93TsairkeKjqkUYKJvhn7y7",
  "key12": "2jLiWEiyrEhTZoC2sE4WEe7TdUPSjz9c3DxhjEMvwziYLoDJEYm9ES8chDDugAoHUXdAH6MzUwAnqMbDZA3r4abs",
  "key13": "4aXpddf2uii2q1HF8F6r5xm5rerWEGhu3VC8c6EFJciLwwhL2pvoHt3qvsAA5m81WpUpFb8WbCZkjjidvHtC7JKc",
  "key14": "6X55wzeoLUaawF1EqBsA5ZZwPeWTUKLphzR2h8Appp7gsMSguVv4LA3nQj7eofMq4ub8f226By7tyZKU77xkQJe",
  "key15": "3goFjz7hVRWk6THXdMT6vtj3mW6URZYm5wkokwFJjRkr6Luwn8JorVCMYdrLLzZBqat9A3AEWyszLA2RjVLK9uv3",
  "key16": "5mexZL7joHj2Niqh5dmsQQjrs7KGk3bS4dTNV3zgFGwFjPFxwkveFPxXC4iAharipPsoo5JVVwTkkSUL6AbVSkTg",
  "key17": "4AZN4y4hf4E515Ns9cVULfLaC7PSMbQnM4oD2vksVtTYAdB3nKTBPtEVNJ1MFy37VEADRyVvNMzohW5Z4XCBhz8c",
  "key18": "3k6uqWox9s1pQ8fAAzuDCuTyC9unUYUqevAuyDhyGmdvdgMZUvSZGagiHrb5jnxWPJwDnfHcUQURDQdsBdsmBXXC",
  "key19": "5m8Rzpr6dKN2QJXVar5GgJ4Lm2bWaQcZGXB7wwG45UDgZnBjAExLRUvgjVYZ6DdBdWoG8HG136BrZ66s6zC7efm4",
  "key20": "5ohRceDfY7zn9pz9wH5vesbXZkgNQ7B23ewcyX715CCYQ5JVWGZEFrLpKrREqH9vuQuZQUqFTFZ6L3oq82b4SQ9m",
  "key21": "5TJJRb1VNeb5mMbxWWLr4T8jwNAFDrFQ8otHxaCP8r2ZDGPFLkb3kP3pEvP3rg3dyLCrGZigPac9AGiewkd5mtsU",
  "key22": "2QQc1khNkjYZ48Kcbb4m1UHbP3iw4XADg4BJ1qZxiZpsAaLvDJPLBSCuuEzme5pToWbKeSPBjVcjfV6zRhBqPeaY",
  "key23": "2W4CHixvik6CnUYvrYEWYLHgb62VC4H8R12JsxavyxMgXFUdJsND8vZ7sizU6rVw99sHhZFDuzdpipR2yefk9rus",
  "key24": "5RVzvZVgUq987Gdgmra4bP9amDPRZBbvCVWA35Zbc5MKkW5LjGVxVxS3j7C6cx4qZ6sJ46ytwYwWzjf8ExTY8BRw",
  "key25": "JZR23ibj2AfMV4WJFNkXCofuAthTHtrjjk8Kyu6zaXtpqwPk7kD64QVCdjcyTf7XNcDYffXpDne8FyuyAh9ZuZ8",
  "key26": "4gEG5NSXu8DP1tCH8GLzT2cembSi5X2zRgYtjpod2N8QXQxjmPh5sHUtfob8uzkQHxWHPoMVXfxeXV1PdedR6s6b",
  "key27": "hA9pz2TGfLvgDQCTFhn8mwwZUVCTFvxrP72CU9S4WtswmqXZb9bhP6KkMeWSjvUHiUNohAj2ZqmaiDtSq1qbGKz",
  "key28": "4A2xiZvgf3BAQ4mBFxemK74n4NHD37Q31eJMpanjLUjAEaWSDoBWaWpoa7ewdZVtxd8Z1iu2Mn4DrJctA3KeDS3k",
  "key29": "3ChCuybRF96Ls5uU4srqAhu7khFhLB8594xtNMSi3sM7vp6xVy9Ez368daCCnPK4Fky39rn2P8GNBXUe52WdngWW",
  "key30": "6NRtVAJfy8QfDM5Rq5KfVF9WVnhq1uXdfA6xJ3s4LiQ5CFWLaT652Km5uBZ39xBeJr6jpbrwQLuXqjBEvfzFkQr",
  "key31": "5U9DL96CWUG2sZ7XgLapQuTkFbhMCkk5GZezaTX5fcvVL5nvjTA8hnxpy53hXN52KL8y289UUkogg1QzhnYq2jvL",
  "key32": "2bmpJXY4nSeA9S3qYvnWMiGzDmXqdYUqKXneUB4h23edoMUfyLM4xCUt7gFcPBt3tfFYrP1wvDUBjMYrQ3QVxYGe",
  "key33": "2fG4xrvQPDwqcatjej2i7Bbkivhs1EpewKv2JhLx6yBGGDrYp4BUhUuUE4cQTLDKBJ9XdBR51ictaRNXFGPtv2FG",
  "key34": "62jPsSv7kzq92Br1hkVf7iw63UXg9unmykDKFJbUCqYyPpxtVtwTptMTTJAB3HEHLyngDEUDLMDGGVy1ioxhaf6n",
  "key35": "4KpSXSDUJHYVVcbBrwFLQor1amYzXdfkdjCUc1Rn3z6qFDEeYGMMwvdiFc6ktKx3H2VW76AVkn9bqeyYivKP5rKY",
  "key36": "jRpKgH4a7RPXY1DcbeVPSGFDf49fysfpoS5exB8YVchaK5UeWMMpQNGesgfRdRqK8tcjeSaqHoTtKBukaHWMoSq",
  "key37": "pjE9TbQCwtZfV5mA7a4otu1zvttKBwkRAMosbdRCNeh76hCf334L71AH8XMFZc2vFPvvSouYUygqgGjCtH69992"
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
