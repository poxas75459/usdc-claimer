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
    "2K4ZjPLf8SnT6vhfiNSzG9kzeQDLaHRuTp2FGWjUiXboDwMKLsP8EcSMzqmxyGWxV3toRUhNT78omBMoRoyzt8NT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJ7jMC7H7cVqL6YifnuA8n7GHpRb8CsLZEPdzAQPKgFWUUNx9gcpEu2PfbZKjjyhdCmwZ28yAufXNUhR9DbbTfU",
  "key1": "Syup6udWzcdNpXFjX1Gxepu7jhRBRrvs7bzfQ4iV3D8SA77pYginKsRHirrxB6DxYFD3Su2vdYVbDjbsucwiihX",
  "key2": "3EBZAKHnX8iP9BBhjitBvF5XY4NzVaEKj419p8iH47qB2YJunt7nYE6YzCLJP5VRLMMACyiC8goEjoi5tBarxAfL",
  "key3": "5KK4xCAfNMQwNkbyTZBMLGdS6SL1HSisJWYfxj5DKhCrD2XJA3YUfeU9hpfCxJ3FoCVPCjz7JVzR3ZP8YTt9B36o",
  "key4": "GiNW2i9Ydfc8KMbnWcPcLM9zuV1dEr5cxNVPoumNioVHMtRZBHwHBoTnAX6ofPhjq68hEXymBjt4KbqufvRcMVH",
  "key5": "4yPV8DWtTRiJuMi291SKVL1guMC4tnpxn1yyKjWTtHTsuWF8dMAHbnshordvwkSHMJS9jBNgaFoMdyRCCYtvJfkQ",
  "key6": "2A6fPgHdb8rSiXRPW1qNyKPjmWNmcBYw2b8SPXXW1KBDwjy9G6PCdcPF2s4PbBSXRXYSX2Ak4jmNj7XH3SqRxaNj",
  "key7": "uWFA44Yub6rm4TAPHMVAZxnCvB72DEbmoTCCbkqt1akJNmE9rYFx3aHg5kiZYR8wFR7o135b5tkJmdfJVd6Ytgy",
  "key8": "62Qh8UM9SxiWtw4M1imPcMC2uikNpCcZf86RLhjmTyBDjDsBtKNn1ky6vKqjdUHkHaEVdzPFm1rpP8snpeJZScbf",
  "key9": "zRB6HSdtiGoVfXM3fJGfsPreUC1NzRN7RFPnNDbtFEsr4akSLLLMn8uEitADktowjDSQFG83HkpbkKY9XbL7nYo",
  "key10": "3XNxmzAWnq48vtgLTGk3nKLBUpTr8iMMB6KE6yXR9HLYmyZ3nocwSCDiCjA6zieL1hSSDg2TZ8XZ3B1VL7tD8fCk",
  "key11": "4NjSkkECggiS1gpAeFCr55f3vRKHpXD57UQNPxV4RdbMH3i1kkVbFkqyTBdWxzYm63cjj9k7fAEzfQewXAqMByQG",
  "key12": "5qZTygjwjKPsJYsecX2xD2pyK89iugwaYrujFpHp2rwAbB3nKHC37QNQ9yE2Rz2yt7QQx4mmdwGfukvJXmsQxxhm",
  "key13": "3guMrfjetsPD9SPJY8Bok9K2eC5eChfshJnDPnbpDDxf5rcDET3p83f2ngCt4nr151D6ACqdaP1566YZCtewy9MB",
  "key14": "zBw9iiSqTswje3JZ1tNQUuXafQoKzamFGSkT4UgsmoU8Y2yZbnnXDt2gSShRKXFFDFaBmbYuZeNhbQw4NGz7cCK",
  "key15": "64cEkGdUo8vQrkkiA4tLCC9Rmu8wuZMk83DJ9n2aMcVNzwaK654HBM3r2LUKZKf3w3wEkNuPMRUDycHqptMbuZzT",
  "key16": "4xY1YJuhC5p4gYrwpPuEf8TBV3ssv5rQ4Jn2ALpLuaeXL72DRdKaFBi26Hw4eXbrR2W4HZGYc1LSut6LpdazMwZf",
  "key17": "3s3e5NXed2TgZm9pvBkW9kFyqTkzpqQDQhUt6M8wzmR11gAxFhhURquVHCuzwpob4B2F9PhiFEHtt2cz54pLd1qe",
  "key18": "3CvuW5w39QnmKwPCRZS12NFS32Ar8phQgSx3MJq5ShrLaBPRB3RengqwydA7bhyXjzcCY5cwkmcC76TVX17rKwjH",
  "key19": "4aXu5b8hov77aEJtoJRqLv46VmPJTq6ef51894nijJwRTDqAtMCvUwZpPWKDjgPrsQ27gApUfX3p365zPxWGAhye",
  "key20": "4PyZBqAEnpbZBKg2be6t3vwTKPdFZDXV6mToWcK2kccybNPtH3gjjmKR1bMVxNHv7Sg6obkNToNB8EDo9Cej98Tu",
  "key21": "5von8kvM8rP8Zf3hf24LzigWmrXdviKc1PXqVpanJSmbjAogMHk4J2SrTjwaVkzRvxrQsiM1y1JUEcAtunSZ2L5C",
  "key22": "3bGtpiiM9aPnAhnHmKFECYUAM5HUjwgtXa5sb4bbBZTeRfp4rE8cT6DXLgbpRkuaB2gH1CwbkpMMmySzCcLEXWEU",
  "key23": "w6AjQjwfR6SbqfqB2o8L7rjbx6WA128thkfic4yfpchFTw1yovkziUQh5NiqSYKJZxjhY7ZM3wtSQZhE9rgCZXY",
  "key24": "28RpNBi1V25M3kSjT7pVubJp5iTJSdNaniwesQiEWdhJfPA2rCxu7PqjwtZtpLDQ5PaALGN4EqNvGaWdJLceBuP5",
  "key25": "3vZhafb17DM8cquXJGm7bs4M81kKPYdh4xjprgqGtXZASDzeckBAoAYXga9egHhVxYCCKZHiRcyPH1EQUzcyC4Hy",
  "key26": "Qkk8YM6KTZ45hWnY2cvjNedaHpWrqCWc76hbZHLzHMUTsD8zXUEKFrkYXmPJ2p276H2jbbh4z8DkAxYaqE3b9Au",
  "key27": "39X2sM1YEhMXTyx2gtFqrfQxihCFB3YReS9gNXVDV1SfEEsVw89E9bghMG3wmdfkwe32qFXAdghJEy2vnW9mcTzm",
  "key28": "619THk3J3CgHEaFF8kPww477Z2cURn1sppgKMgLzjaA1CuF93TRpTkYrimjKsFVjGnpSvxQ7z3d6H7WYob3mBoiP",
  "key29": "57yrkEimG4U7hNz9esBCjTNG2ikmLdiJ1nDxWkSftPyUH1xTgd7redFsGigPYNvudB6qQUKExj8GtdxohKuLTNQJ",
  "key30": "DR1XZh6bxuqBb9TmgND4uHcjcEBeGNxLNNjLLuhe3h1z7MupGM8doyHFjxFgKnvN84AGKKBiRsXuAXxnvyJamWK",
  "key31": "37EzVzicPCpYbZMGYKR6MjwcbqHEWEngFqp73eYeXgrd9vtuzP145VvyvkLovcqW3TEVrcbmyJrV84ywvrBLMgsL",
  "key32": "8HSUZK1jLWfUWZpThg8aNjfsjVXX4hKaAbwZMCUwVRuaai8YssW1UJDHRGttQmX1K16Tv3Rhwg4LNK2iFHTBkoq",
  "key33": "65LfsZQCnW5Ji9xq1gscf2YPE5MbQmyHmvXZV8ABF2zbgA3NpRx8U5M4Xo5FGMnk3GaKtYJehxvnqLhzSrgYDz9G",
  "key34": "34ATAbzi9X55wgVY6PbgXdg9AymD9Cq7fAeYsMonnAPjpeLmuEXtCQrvcabMJUA3ZtY6e3cNLZAtFsQJQMJuAx4S",
  "key35": "2uFtXUZ3MYjXNKiw9o6kWbvXvwr7U6L17bNEE5x5SyyjXGmxNMctHxfAwega6ofUS2LUhW9QbU9KkndvivrF7vMc",
  "key36": "WNwsCMmzkMhHhJsiK2PxsTxMQcoD9nkTfUByYWaVYK4Unhxcu9QuKcCQtjDYS3z1BSeiG8pup2kpMKdRNjwqKzG",
  "key37": "5nwVuG5oLi76oH9XNkT3uWUxRS9xAAdyT5HM1pB7SuhWMyWbVSCuAyD9Z2oZepr5aoj2hDQR9uo4xthBftPDh4HB",
  "key38": "2yLNXoDSeFvi8o76UAVdSF1yrPgLxfYWkoXVoC2LQDshZAoTPnNDbP9acpLdCZFCDb5j6mjwcqXMMiR5PgKfdEby",
  "key39": "3RR4fSv89Ebdnmgv3vkUmwmt8u5tdu7ty91sR4wu7tEcFTxSjVB3RJmxWCkUrT8UJj6Py4rbB4kAk4fZmbJua9jT",
  "key40": "4am2c57eL31CuefB5VzqKPy73AXgNur1yLCP8ZrT93zxe41USck7T499Qx1fUWtvDECmsJ4P8z1dUjsUea9qg7Vk"
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
