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
    "4gAQgw8i3MgLV3mCqneD1ijqyrDr1Xgsb77YDqrCTkDSM45cHFhR7gMjQLShkC1TYuK7ZAAcPJBErjraBkS53iMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DnwRFdHGfnyGnJwJDH8ptQQecBuBZ5aJLqmbPCRMEo4rx1B37YkviHBGL66qaWqf1WXEPZPLEP3SvrWvZw8gGjx",
  "key1": "5Qfy5Dks2iT7jSdGNovdpgSXgSBCS781rj9xn8YiQt4KRyqYR7yntfPWEox56pQqUcfywHY21Q9hkj93HpnZMneu",
  "key2": "2Dwi5bqWaKFujzXBGXWWV5kAhar3MiiyWzFySfqd3M8PauZGrCZiHnen1TM3D4wa8cczp9cz4UArChC1HG1rgLk8",
  "key3": "63oZNsFEeKj9Hr3yN9kteHdFDmaTsq7AbQw8nLPWU2kuoKC2rx3o4vSGWsnckTjg8WpqHdfwpaiZDGw3kdPWQYxg",
  "key4": "3kpzVm5D7X3teuLdPw76iPF2G2sZLcBpy8DrK8UyE2jRipq9uMgfVUZphz4S7RZfRboUyaQve4gD9xZWuggJrM7H",
  "key5": "qoyZGiY88QHoV7fQQ6K9LCfpBmJRsTTDQU1o4LNbrbCprKpRpxU2ej9MjyN1kwzJJrFLGtqKhPmXsEBH2VmF8eN",
  "key6": "4H79tWbEstnnsFokFCMqteebbhqb7dtVVinaqysuh8LuU5X2uEr2F17uBJgxLV22HE1w8TSeVGeN5nMCvEcbkes9",
  "key7": "9Ypaw8AXA6vbcJb7Ug7rCRAsoksaseZRRX1jzejPG4EBSB43wQxiRsGAkY5HQRaxPdwqykvh13GhPYzdLf1bPcs",
  "key8": "2DVhJdLATuriuvYD3p3Grmf4YtScZKc7BkUMidVF6u29oLw2ZS35HwjfmVFJ8fKWXDFWQyTJscnVSb5jA7GYBpyW",
  "key9": "3JUHvQoBQAhGvFsPFwb8eg39Eb3PDcKWC1eVt4k84V5dKDP7eZfRgfUYmMnqV1H6D2ftEeHowsbg3NYXPveFsQrw",
  "key10": "2aGJzuPaFmMa8J7MY7wtyqHLrDVboKHZqhfyrUWYdgRuLYk43PunMN2B1xzeZP183CR6c2mKWBYqkM8mCbkYKtCy",
  "key11": "4gQcyj8LKZaSBZRRAp97hmc4zg9pkHHHfzMNv2YuSUFngrLWUazXyjA9S3KQbQpAoJqRt8mVjMfACWowi2FzdfyF",
  "key12": "3CuLR763vnCsx29yDT1VEynvrH8GZCvDGicTfj5QcqrdtJ6PCNNHjcs35tJf9kqDr44c1WKfGuisoohGmnwnXDo3",
  "key13": "3HoQWW9RKdbKr5kDvXHGBGzdn8iDRxjYJo3DYg5vhSqF8qReaZB9aDM5SPzqp4cCqoEzUzzGVMpLooBcDXCD3qey",
  "key14": "2Dk19rQn4ermfPoFZ2yddwdd8RBDg5vRpZFYAGZgNi7AKBC1tRB8X8fSXG7SBTebk4WYp6TnFijtkHWK47c4gVbR",
  "key15": "5RBSAd1gBE7LadcJ4rCFwfzrMYB5GpNH4khvC7czsHV9YRyrm2KXZBVQBmDSzjjL7ZGuTqHt5DxuZVMVQ884xxGF",
  "key16": "4xhVZqvm529tYRfzzAJDyZoJTZZAZxwV5WXrz2DciMWdMhoWwVKADWqDy4Dd4jTtZUd1hUkUeVPuVWsgKaMAswM1",
  "key17": "tYAfmta8VQs7gbzoYRbNeG93pXHJ1FFZAS3ygYuoyyUYVc2xyfkh3fQLqHtdbgUSdhSqakf8PVgD4rpLqWpsfxv",
  "key18": "43JLRMc2god74v8q8RfaGab2LXonozrckxDKdaQV2QnMSpAfi6EJDPmihnUpXystnXzFTMniMy7svWgQaJjQ6hqX",
  "key19": "4fr565mQiWXUqrmNWFaKBFzzt9cLxA541SqMUi3zWm7izsKzuLjzK2pacRZBfzWq9kD9QbrRmiWNwFBqgwR8YY9G",
  "key20": "2xYqbySw7qPhSfRm9bVt63tMf5rRo6NKyK3nJvpJir5LtFkWyGvPuG89Sbjz1oPV74BKF6v9vWwEqsV1Aj67Dk76",
  "key21": "4YtqxxoJd479KcjwaK4zDoMFUb2RvZRs772bZAu7jnR2vmdEhixoU888EUNmWSpLUyJHSPxd9c1J471VWHTzK4Vf",
  "key22": "3SSm2uJ8JioV7AwUTPzoDbGuXhAGU73VToGsVPbw4Uqe8ZCaPjd4A6HAEgyGNvMqedeF88N1A92pWHbAH11sWfWL",
  "key23": "2TpucN8DNHcvraKsmG5CVFkaWzfMcuAew7BnZqGcjnVbC2cxLT1wzXfyKMzkje3DgtufkWkVkWViGYCGe1erJxXT",
  "key24": "3pRCHce1QUnZWsvm4S4ip4zkjbWaavV5oUqAoQk3MvKVw5MYPrtkzADv9biaEEUjKLE9TBnRay8Wck8UQo6h9xw8",
  "key25": "DL3iBSYakgqyGmbXpCTcASL914H5UHF8PCaKe4uTrjr7va1Xr3itkZNZyEjQKK6w5ExWCcryEWZyfLLoYfRuRtv",
  "key26": "3wiWyYLf7qRFCzAFm1piFUrRGaqmeUtdTEaJYbZ8T865hJPsFW9K7cDyHuPDpG3CfCGRoXRRUUijmeRzm3vSNeb9",
  "key27": "5HrTRGXer9ftiNbMkBf7YSbd2rEszjbvevmwyrvfCMVCHFdkC6n1xqkALzB81x1X1T4n6WHNBtqy5o6Qa7QK8NAH",
  "key28": "4VDpur7QsnTX3hbyWvXAU6JMfsdHPdV3Vp3Eu1ZRCWxgaQ8aLv7NqaiQkaQgauMLDR9KzK3qZrtkNC5jyC4MyR6F",
  "key29": "49HYAyhfM6gJkFwanpfK5SXhZEyGw1Vsowgg8FVcwRknT3vDXCGRcNVtVb81SNunUuDfBTMexkrw4SsMRra8auGf",
  "key30": "5CNkpeCRuFRNZa9PEwPSmXiTiYzqx9T4k8VRNNGJhVZefAKA8rzzECy9h8XPLpizYPZJqqM8EMeHwMp4cNnCAz6j",
  "key31": "2sHuJXGJp6ZKbPZE8EWzR5LscKa5B1MLqtim4keTLAk958nzhZAFMJ4V1EDrn6rpMFMiPmrdykcS5LHWqWdgYk5f",
  "key32": "2tMGhjPEC91fXV5xeTqejhvNKTSnsFkSXW3fLNeR89X3dQarkc48ZuWackvFKiiEjyctbEsJXRewkqhEy2eDL3DU",
  "key33": "3sG2dghpvL3Ymtb8Dv65uYMiSzYCd9bTW16ZXkQ97fcZBZdS1MfkKpD3RNT6peLeJ4XLWEuvLTzp8RfHGnoCi8nh",
  "key34": "22HkLoY3rjymweSMU9RPTwH3LYKdALp7Bb7a9bodLp3JvYVbsDpoiePN4Axf95MfdgvfjwJCVKSLCpXyzQt18JmM"
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
