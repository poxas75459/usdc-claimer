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
    "3xbBsxKQSLZ8WUw2i2y77GMMRPF4hxqwQ4Xdjhdrh6vxMUMC61NbkyuxBf9iFChwCDG9JpS473X5QPd266hiXTee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aztMFdzfcGb6MARBbcxdZep5AkFUomnpWTwqkTSAvwaErwBCMp5M4yunGwz8dLSyYZmjJQc5rToVDQSns9CXTeD",
  "key1": "9eRxkTQtYRgZJkn7z7acvJcqZGhFTGF2WeQcngzBbMWTofzFpBninoeEypreo3x1vRzKihkjipnggPe32BDb87C",
  "key2": "2PuGRWdPe6aeALnmFSEjy5KCcgdBkESsaDdwQN7huJ7HHoBaogs6BxAq4E2krvFCDwr1qU3gncMi4bkPBYNKKSVw",
  "key3": "3zsK4UJMJorii7AqeKKw7RiX3TPpTUYuxR8KNSTVMqK7xc8wXindbMULZs3VPu4BsXhgobjDjvuqKGb3JHKvZM6P",
  "key4": "3uTxGAQdwcS3ezFZ7zgFzLXQKLnW9N22X2zBkXcEwbqhxVcn6DtqYkwUhdACkqbvFwmhem6SJrGxQV6HGZvQFRch",
  "key5": "4X7nYibhXvfv2o78huoAEGWSqiQNUrTmdKUrMFQroXgpbX6SdurJg6X6TtHURbE21tUqhQnsk7fQncTwz3S2yZSU",
  "key6": "5XdmnNXpgth7KGBDTZU7xjXSmuWNm5qvFKmgvQkRVhKEJbRHUG4Ep7q7eGeKV3y8WyDnj6zmBwBJL8AWFDEyvmA9",
  "key7": "125rJizXp7jAhGrXargDfrVXUEXukphXtDHK5wGvydsvcYEjmEE5DWTu5ZhwpY2NBBTArWtpqfceUTWGQemFQW9k",
  "key8": "5CMADAkVgtjsjuvgoSiUzLbB8jCMQjUfexxbTt6KWnjHmKp2zPDKf6bx3dS7qQjKdb22Kq5MRWJk1UDANvJgpkKV",
  "key9": "3CMu6kqJtiXpe5W6zMMjhdHjzeXb3mgToiYkTNhMxkG9SoxHMqCUAPDKUmgkzATdmxgwB8KxfcHU6iFwkgYCEXtZ",
  "key10": "4qu7syDHTQhZsF7PEgYnD4yXgDsRVuaue46JnBTyE5YgHHwQkq9kXwGx5PhtmTnVHz2qtCK2M7Xtz6BRx66BafMX",
  "key11": "33YkDAdXQB1uyzK55uQfmiF4CRkFAnWJedfy8RJyTinZRVSAEieiZ5JDWZKhvYhNyQRj563cMc7rz51P29cTAfXB",
  "key12": "67adJjF71xZqWegBFHyWoUE7ugf1gNZcYEfcvqpFiyQbtf9N45H6nco4s9LF1bpBf43DjFqZqu6kYko8yq3ZgdRS",
  "key13": "2FbV1pSYgoe1pi6ocuwSSZKxidy3hQwj38zKju9cBKz53D9omhhkKGXAUi9uhTn54dhWXH2GLfkXhLmmHJjwttg3",
  "key14": "5qpZ7EA9UEcNUpjFurPfiWzgHqEaHV7fTL7fosawwjcLFGvoGvyxc9YzRbDkFScccqgCwRuJqEBvvmp2kSJ9nZ7Y",
  "key15": "4xz8up5LCfha5VaQ1ExcMMsBpCnTDMmDaMiRmGwwnS4DJacEN1KD2s7YvdcPjA9Bzip43ZYtVGkj97Cg8Kbi2PCU",
  "key16": "531c3N5q7eW2fNFDfW2EdmQqbZ8qeNwc6NGyQjVQEKskCiCvoQxQTbNrxB5Lro56cfMmeiv8Uq6xe43hydqy1cET",
  "key17": "2RmuTAogtzjBKdBy275NQwSi98Zccg2NNCoxSvRQNGBhYBYitVb22EoccT8JWR7p2SUVTAqNN8gyVyPtby1HxhVk",
  "key18": "449eyVdWiTetijCwiyW9TMzN3RnSbFcQnXKrp7G1B2bTEvXTRPy7D25CGKSv6PM36pgitQHYWUnnekrQdGSnnrBL",
  "key19": "9Zqd9jbbhPCSr43Wp1784BPMfW6rEduEZ1Y9zv85cwa5xnn1zfKwbNy1V1RQyp9aEsyWZ75J3sSvgHH77DQzUnK",
  "key20": "5AKitKJDHJpKi8gcxdSx1VJ9WT1vRaZ3vX3jpe36rXzG6JRdZtyAQ1uoKifPLJgYK3UPqn3prNGnw7RXHvn7tjW4",
  "key21": "26zQj73odUeJzsVAX3HvC7Ab6G4J4HXMemrCDdFZD8PuWGtyNXwmGcaPQLVNQR8MjdJZUWnrqh5rj92Cf6foKWcw",
  "key22": "24rMUuSqSA8AwGsFTaZ3BCAUt8QSCU9Ag7MFqUzKtSw7d6BiXer773HmmZD8NetQQa3hbFMmysXTZ1Y5rqPdfeb8",
  "key23": "5Nc4q9TiEsLfUSdYesCt9yWb8ghzmKNc8FRxYdoYaw4BWe1fPskdByMttGdio5zMhMzKwWDAzeoEL2HS6Lzi37wV",
  "key24": "5HrwZF2xzVro7U9fZEVzti1oYcJfEqqbMDX6Kn9ckNKov9SfpS4qTZYth8MUxxoU3vWPqRtqiDYAbyQpathqYwrQ",
  "key25": "3Wchg3x5YXq4GrFBpB36dchhizCaRK6knRuKAJ8hg2cdthqvHpehcfrgohfnAdXy8iC2HdFyQDVvMaGk6fZ2pZZW",
  "key26": "2eA7C8eNEoRKFdPii8nvf7Ngg1BuSeJDMfmmm19ae8qWNNH6oo27T1rbi9NioR3TnirhujXzSCnHVddgz45j9VXf",
  "key27": "4MpZ1W8BdMKy28ECE3pvk7NYtBhK2krHmWBeuzmok53XkotATovCudRAqaQkevoQMhKuAwhEVPthQHYP4RutHpS1",
  "key28": "2SorquibVScuEqFZ9e1duCmi2cLK8RoUrmx3QRFHfLhRXzSUTDYsA7h4QWXQ1Ap6z4gD8sBxwMBTcnNAbCsrkFw7",
  "key29": "hbeANWVV5QoQtB6rDWAxsRS4smh66S4NHYoQ6nHMmj9FSZbXn5LsiArUsoHrha3bWdRFastWMDixgym37L4sS8B",
  "key30": "44C7qLDkeaKDYxNhzkwEoK6Y56P5dZcPhUBU1h5Mh2ikGDbaK62d2HSFm7C5HBd1feyybwwc4adAcJ9Xa5VweZX4",
  "key31": "5JhfXUaCtWERJqZf5LmLbV7GF2uXyyYn8mSS3vXG28Xaw1hrWvVtSQ3vSC6CVM4RLdsZUpNLHBUATq1LMcUoTYUt"
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
