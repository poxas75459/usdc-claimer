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
    "3PFbZ7parKqzAVv6UT89ZmLgY1uLuVuXFXTTy4kbrr3nnpLfp4bKuJbjwDNXbptXH9WPqvBM5qhPmR2cNh4VJhVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZrPwCQAJt67KHv1e7wxda6J6hJMdTQDrF8p2uqHoDX5GXuXvUr3NmvZLRAkk6saN6WF6jATMekgN9JcraeGF2Ku",
  "key1": "48dFHT9ai7Ws4VVZ7ghDZuUTwrJB9Ae42Qreatqkjew8YB1MdGYbpVGCGjm7ouUk6RoRn4E6AwNEC6ahvoPXXHMr",
  "key2": "3hBvkArEpEsdUqUGnArfr69w6rgGnXpiHHkEqQLCKAkQwheNpdaXnv7ESHZV5VFevYmJZLy8wC46kEoe7LC7Ui4k",
  "key3": "2d5bf3ZnHSBpw6rvWeBYGKjRqRm5D1uJHrKFz8UjauQSCazvnxJE8We8FCj3uz7RWdgXUu8kzdko1qMrJ95YitWm",
  "key4": "2MRpJw19WBnQRysNByRrpTyx52i6kFutou7DsTop5Jwtzm6cjaCZRiATHe22k544XypxyLRFAY5EeCxkoAUsTrAr",
  "key5": "5TK55cYGvHNdoWm8GpVzZ65AM2kSxKjQXP3mydBhJowZC574oGFvZ8RBZU8YjZgmxVAkJ6vvTbeCDSTbr1cLzg1Q",
  "key6": "5Px2f99WtotpFeRvdiuM9YESZbBoUumma9wDMpXAEsgK2stZLpMfYaBodLCUegDHBsos92wsHSCrK7Uc7QT3TAve",
  "key7": "iXkJptNZR8CAaDiSsJ1fU7wbXjTLUX8wi5p1ggSPaqQNPreXKNgmR8iHojXN9wKBmVBnKercg1vwTmxDhQVPaS6",
  "key8": "4WzjYrsHNYdvVZsbmVBCnLG9ZD5FHZH57gyp4BRm6Bev86NreZ3VNvqo5xx8xPAUNPARi4A91zjv7soqFBghAZba",
  "key9": "4hYzCSzViGNWysLNXmj4oNfbu4BfM9ZCkD5gvLqvnYDovcCjr1PJc8fub7hygQURyGHUjYudQfjUg7pLiEZCjxYU",
  "key10": "65KwXYooGiEqjVGjp3MZSyzgUpWJ3YT81SskSB3ZoTT3PszdNzGUQAX2ubAWgqZeAkWknugUbowTG6EpZgXXTVbh",
  "key11": "5PgnBjXDGCMwh7qx8nVYJpRTztedvRrxZk7J6zSuzLezcgkQ2Wy1HjDEcX8Fq7WTeW5DBf39t4uFQbRz8ezce3jy",
  "key12": "2WcKM7aGNxrqCXPiFiJ4SgrmbK8Q9o66cEHK9bmKnjgoUgNQtC6zM6dnFjwR2MQ9jnGK3XdwYRde7CmR2nRYS8Gz",
  "key13": "PG3oNnKyPJp9rfwCr3Wku7Bg2cngKPs2MG3cgTCPYwoaYGCwswbXzqyg7EEzwDnC8WwxaxGxcT5TxXBUQpCKd2F",
  "key14": "2aZivpDDdRc84E6gmCWHk6WioYg24H6FtPWwbPeKU9GFuTCwKve7TvWzo486M7XSBG9KLx3yHMCcr54A3avxfBJ6",
  "key15": "2TPCddKyPJpSjJjFVcV72acXKascaC62yeDjp8si6NCS1DjuJeF2p1Zq94As16vojuXiS5aunPZqm1z73prwyzwL",
  "key16": "2PQufouc1aAkDdXjHmsRh9Xm3JTWdfvATAjY4cziMat7dNvAA8DfBn7AnYiD4SLtsVgvX3FvBrrrz3UK8JivDSXJ",
  "key17": "2pFXEF3TgXanzhwTUu4qk33oWra1vVVzcZi4FjS3wnokPmkrQvdcoKYJHhY3z6sNHz71zjSKh5Gz73env25XykkR",
  "key18": "K9Bi2H6azth93ZCQUmiNP2BVJYJR7xEhLFoML5Pqrr5VDtBoKXiNdMzPzyEn6UQRtCztLEvCng8YNPsqqDTeeNC",
  "key19": "5Mz3Xf6dxpTuLe1Mij3r8jXSVvaLDDVbLDyDfEGhtjxibeSimiYZKyMPt9q7eDc5ReUypKVoUWp1uaDmKfaYRFTp",
  "key20": "5ygG1FNaW8MfYtRqV7UPqip7ZiBLph5VNKhkUjRZ5SNysz2drrjn8bSYKEc3GvRuuEGCwiKRhzBRSX1B8PjVMiww",
  "key21": "5X3yKNfv65tyjzkkMoNattU7VBZpbpHxc1GjLFaPsihV8EhxfEZ2yL1istd4s8AocLjn1iwtULyUeLgZDafhjNqY",
  "key22": "3TRNv4puzVie69npBzkCnuneosEsuci2gLj6tZAMQ3g8bYv4D8nSzqqGrPP6gaX11w17XPpBsrby8uib8gKvuw5i",
  "key23": "5pi6VNFbTeQBfkiUvcvkmmPESdFLMfuLStUvgFEEkUTUbcrVYe8MUWUnuaKWbrKDUYNPnWaJ4NfL5XntLpUNBMEM",
  "key24": "4SBv1FRpXek2e92AZF4ZG8KbpJPH4hHMqmgrjoUKAiG1paNzPHbRZC56re6G8QzZ8xN8wmzjCBasHkWf6txkis6J",
  "key25": "fPTQJxCScwZPMqsSsfDE7zBHBDvTDRhF1Zre1tP5jSc2KPVggqu2xKBiYVC5mK4A9yLXSc1jgyzBrFqSNZHrptg",
  "key26": "2yzyvbygBPP62DYCDpupccikSbTKHhs1FBv8S9Jg9jpVcAHxpg3jyAk1bBxbqEoSvooACZEnJGU8jutDarySi469",
  "key27": "3EpZuUrCMg9wryKFkvYjq1Z3dD4uWEjKcdGcoerTahqbqoXjbd28KM4G7E2DmAPafo9JWN8eUht3xd9TVh4XGwTA",
  "key28": "4CUx8UtUkuTDEAhvHYBE6nxyK25fevCmBFGxLcuN9UuqWWUWffz5uXGL4KdbQ5hFABLJwRSNhW8gwEYHnNjzyFXu",
  "key29": "2hVZxZjB5qCgRtqNS1TgZrDa7EnQeh71cGrhV4dZ5wGyqkeYUAJzx2hJYtvy5S1xCzxsNNzoYwxH7FvD7sGHrKad",
  "key30": "474PSvfmd1U5YGkkrfWd4WiHKKyMXsqVp66xiwLGqBWBDXfj9zPUW5XaaQ8vQmhHEDf2hFyFq7LGwdamak89ASkZ",
  "key31": "4xo95KiNLuFw1mZuyPCHYrGV45uR7gd8qFEyf1aECKZhaeKbAjPSHjp1ECM37XvfEr2TDx3HPJebt1WyCKwKAscv",
  "key32": "3fFk931KXim2HapW9GYsjFmJbnwGrkjmhEgEe7riQbXgW7yJUym3k4772iupeczn46y95k9N7ZSTArRKEdxkRUA8",
  "key33": "3vLt7gUUAA1Ngm78JSdDRZoK9bqpCLo8XX1rV3NzeZEF9YKGobBd6xAprxqptpcVFPgTuRzWhXLjfYvxGApR7WNN",
  "key34": "65zQ9nd9pLN4FxaAmnQkTv3FDQx1zLsqBeftb9bgQdd1nUTQnqhN5fD1B5AnEFpF7pBjmJHNyfu5bniYqc9wZnyu",
  "key35": "4JYc1mXFfuiRa2aVFRELYNFgkNaJccq1Wxc1YiSeWbDqLVtoZxxVdcirW2NuHTT4iNX33tBs6bvdcfJ7Lsyk1eGG",
  "key36": "25R3YwYbBMPaLkZJ8KyT5QQC18cwej45dpkVtDXXwQ9xuDdM3oE13vNvoLmEjwU8Vz2VkujDibxUDuLCPEVgStQP",
  "key37": "NkAEkqvUp3Jo25ZsWEeaV9FFxPBEBe4ELE5WrXPkSP3FEXVnXMMHMuTDQBA6z8fjGqD8gWBMV3ZjiHJt1AvkgeJ"
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
