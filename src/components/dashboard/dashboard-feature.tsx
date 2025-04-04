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
    "2ceLt69p6w5fwGpvvuuaLTFzZmCP8mErBo3fhRD1VQEAFd1jM85oKLGrF6gPVXLnRVZoDgpNEtw2ig3yeVYbXdHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qcL8RcCDoNy6EMLcArurB6S8mGYaT8ECLvnyVUFT5iHL4DM3jD52U84CvNz1mAw15QjeKEaTKVSpofuGonP9NQ2",
  "key1": "39BMXDKWbNHJi9VqmDQqkH1X6k3WmVeoELiEgoii7wHwGiGiySVtxFS3XVe14yTEtpC2FzMJd3WFm9xqDGFYNDGY",
  "key2": "2Y7L3pQt9F91AoY9vKMBMNupacQ76cfmmGfcZXUQAGRNLvszkDhr5SH9N3rdh9JNtbFLyeGPeHV1DDcPBpQ2r6YJ",
  "key3": "gBLVDZFNmruz6NkLW7GY1Atf87NGbBkL5dmVH5wGc6xnWVRWj76yofdXeWVq4NTL94wvNx6PCUhrxD6pBrD2Jzo",
  "key4": "4FjDfb4XUT4sqKDnUYJ5aiXjsAxWrfnxH9qDzLmx63kNrHA9Y95HZcNbh1wP8wuG7HNuAabpajPbsjBiPR7xm3jW",
  "key5": "QptzxYFzX7oPme9TZcRCErStHhZ3bnNdocUkYYdgZPmxExjkjMtUnn2iwD4mWPgLRGbyBMk2yPgn3Jt2H7L8fxZ",
  "key6": "3wa8QYYAasfjXF9G2Afb4fJ98es3Xu2rsYMy9VW7hMeYBwUZZAApq1pRxNwZzuYtGdhuLVub2sVQnBLYY9AzR7Gt",
  "key7": "3B77RX7TsdoRSG9FeycTMt7sGqJeU62YEuSEoehTLBf3Tq68UTSXCauFzVfo6iQx8AruVegmYm8N372mygehFyyz",
  "key8": "2RDcuAfnXX69QoFW1QckTMLq4NXWcVBUvxV7Wzh5UHKr37FRPc2q7hkTjCDUP8Uu4mAFgLgkhNdAiVFuQuhdZBVr",
  "key9": "4ofqJiXtayKZbowByyCPaXFXTVcGHcHBrUVXs4mMeBQ9WagrpDC9MDACLtfNLPuPHQeeKc3q8rDDbzd5kRmd1kQB",
  "key10": "3fqRmgyXL8acMGSF4xCBvCNBRuCovUdYscM3vZtYXVgB498e9RKmEcXfm6mUAMBTDDH1BTLXY5zDVMrbF73QFK6h",
  "key11": "3Tyhy25uF7iFHqiJx7QN6S8Ewf3rVCGAJg6rD7gWPDpJQvb7Auk5fEhCnPuZuWzGb2zYfDVvjaMCHvu7bbNGwgVT",
  "key12": "46aHn4M9dRbugGZxaLW2YK42HUg7LfdMidp7qSZyVCQuFXf5CYp8TLnt3VyDu1xRdM3DcfT1BdUVofhQdj4wAccD",
  "key13": "5YyduGSSrvKB7xP2tKgwY7UieBkhJimyy8DEUQWCXrYVov8fpC9RFZi7DaERDFwJ79B9H31bzCKNo3V2bKbzXW8g",
  "key14": "3GHhTpV6sgCdJi5fcFigTfcAvp4QDU8C6qU55zoHtv1KNKeihPpfXpgXkNXTAw1GXgVRL9QYScQxoio5ubVizG2D",
  "key15": "3PjxzyVizcQ9qkjBjD1orsutRrKofS4T73kCTbhGLHXZvQtFaiiVH48bYbX7GP8KRD5ErFL798ieVDNVrrJLo8YJ",
  "key16": "5PgqAhmxbPCxAJQ9ug6gXGw15oSmzsTahqq2n64RGNTVvDr8E3mxxYpfSZBn2KFNxBrEYSmRuvmM35J32AEZbcwf",
  "key17": "XqPy3nXLbLU4Akvpr6gCZ3iimqPcPhUL8YuS1ZqTqPC8nqHEkAWboKATs85oxXZ5kSnTPTR6XwpvdCopm8xnNp1",
  "key18": "4pXkcBAJ3QfQopR1PP15N1oRFn9fGnF4sPSmNBdLuD8pCJCVMoMBnHqJdd9JSqBkt48V6jxA47QtK8V2VtkqHENu",
  "key19": "4wqcRMzvSmbsPybCy4VBM8YhEWNvFRorZ6uprVdbSRMG4noAH1PgjBmWQ68UwdE7nGAEpgoSmSh3LYCcoEWB3scG",
  "key20": "4nRQzW61M1rFoJZeoHk9JgtGDFZCTYU3ArrVEmytcB9ubbcoRvb1N4fdiu3K1HLjvSKZXZx1KWvRSry7VkRNBjof",
  "key21": "3nniUAB1riQkVb3iDUA3a11MGjfp8AC1gRuPzw4KB2gJkjdnrWgSkHxp5Nmh5e4H7YFsVb1Cc1fukD39UWGaaPGx",
  "key22": "nDZrDPPPyoHGgNwvRdtFSmbzNNuyNkiLFkUsm45izyDsRKe2hPK3fcamTPhw1M6BqbSLeZvoBjgeo27RjpGN3vU",
  "key23": "2oDmbdjdy6ddyeBjAqwiteTNFWfjrmkFajmuWHp2UJu2VCVQSuag1PAC9pJBG42G317jJG8EMKgntr1w4qcLZuP4",
  "key24": "2Qf2ZkNTKnhLBeRVt9NFhjrynAqYELCk3ZgUFj2xcsmwJvKjyMvJMbR5gaYSsj6SiHC3N98J4oTXDtn9mQPk2Gjn",
  "key25": "62P2d6NnGZzhZo9jCVTV9urzWYjoDSoZL7y15vRAYywNDSYj41rgLpghanG8Hfa2XsrdKz1kSqcv8otA1rQ4wXSc",
  "key26": "4KufsjnbjQxQJ9NhHgoFWpVv5Kne4FzzBF79g4Md8jFwLfFKEnGS2urwLy9dBnSpBXigDAsCVmjNtiRHy1ckL2hS",
  "key27": "5se8JJdoGjPkJb797S25EzJiquivH6pyvqh1vAMxUxkdZLvDZExG7q72VNtTDYgVULBy8QJa19oj5YHeS94JR8AN",
  "key28": "3jDWpqBSGVY8LMsSUim6LBkACxEpwkipsFpUBAwtcM2m7LQUUrYy9YViFzZCfMi9U2e3d8LhrdvZWVNLEqigPZGX",
  "key29": "S3Pc68c6DJNXQzU5jAxVqq3jgMd27kJmQnhrvaw1vGASRvSCqpQoMTdYTmqCdjk1n5gxn2hnSdnFHaZF3siNEY2",
  "key30": "N3KVkarYUGvWepvZwtRdG6ZRHuoDKD6JH5858YtogZbQne7SUeH361aFm9uoo4reSfLEQLk2XWkFp4Q4HWM4Nkm",
  "key31": "2DhnWo6dVmrtopLT4DJ2KH2CnAfCPf27CRBsP3a2o9rw9NipJeqfoozLXq2NYAjPr1jLAx85VxWY9J4MRq9fvqph",
  "key32": "4MVyYBkSytgcddRAoT7u8Vuth6SDZVJudJG4Yz6CbZXJ938GyxqspGZRiWoyXQ29U7QqsCxY5K9tr4NBSNEJDscv",
  "key33": "yL6aCTNFvtG44KhWqrTyanqW8ye1zFpMWGyCUsY2NCRnBMdNZhfRX7Uvwt2B8euBMsqifssZCFXH2UTLLW833gf",
  "key34": "43WH8188KvV9Hmf23XWVPXBxFXNmHuChtChrkCgkHucji9BsSH3Tokq9VX55X7k6HBdMAqeTU1p2RkBfMbqTCW5q",
  "key35": "36ECxJLv6c2u98bJJKybPPVP8JaCbi8stTbowFwWVRYRBLLEoSA5Dp2b2puL8iBki24C1B6sNXaSFiLuBMU53LRo",
  "key36": "3ybNavkVifitdHsG9NiFySqWiji5w2Qp8TXopLi11QuScynThBGcwaSQ8ZHdD9TrwHiWmggXDLzSRr2VZWNGqTyN",
  "key37": "5RqbaQvMtYDEwNYjdjEQASyMne1orn8uBeTMrjgnVEg6quwejqSvkVaxisd6iZRthbeRkUH3BNBAFQ5XwbruwvgC",
  "key38": "4ZdTrJgPiXE44AJshpGS5qUcHedgop7ku3gSZP9VxobUXKuRrHKh8XjxwvCTLQZeSCqqAb24j5EU4SsHy1283Gxq"
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
