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
    "5AHurxD4qpsobhBmgcEowx7Bku1c7m95UqXWnKsrCTYES5CPoQJeaWYDyQvq4u2E2ByVQNuoRZUC51oK3vx9bVgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2saSxvF6nK5LPGNyJzWmUPDvgPRmiBgYxc7GzYhLKi7dbaBkov4TBkovnCL7kacAzqzwurG3hWbY3evpiyNShSGf",
  "key1": "28aUpennhoacmixCM3tRgRpLqXUDFsq93AdW5pwxqd78QXW1LXUePttBbGn9cMuXAc5VhWgKifzrKB3EgTZtkv1f",
  "key2": "3Ynr8ntsBi4Srp2Y7sMoNYR5xdkDLgrzAYbTTuP9QE8cPKTMqbYuqShqo3LiGbBqkemhVm5Wps9FkjuMPpZkBdLK",
  "key3": "4PxphwJ7oFBBHGpvw95xjtWWVP21TBM5JsGcbkq7BQmbEcmJTKXrcaWvjT5eMisQP3wqE5jeLtwYU398i1QLZuhi",
  "key4": "21QUuQPtsskfCbdRih3ixf4DGsKyXe2GZL6mL1dto39vCFJZ8PzwiZr4nci3CtetdkL6tQVtKKV1epnNVjxeg8pf",
  "key5": "5U9Re1Emu2fPu4BEVKQ1zczvBKcADJxhpEe3Ds2VtJVLAGC9QakriJjzdu9NNo5ZHq7cW7uL5j4kEq2feNTXC8Mc",
  "key6": "TNbqKzd5HKXYU5UJrn7LmTU3aLQZwVNmeJvULhdKh2tSmWUxo1zfDZ1zkf9Mz1CpFa22BWjKRvdrTX9LgE47FbC",
  "key7": "64JnfwrpzTciGPRf3QxgMFMEb57oGkj3FeLoUQUg4RgcfYnm4yqsUxgRDKabxF4ZcgBPr4XfsmKJhJQzzyVTU8h3",
  "key8": "4j3dXZKVG1gRoh7yUrYKQdkdqAMQ3Q1GW5XwzVgMZxoXeXWHcWU6bLnwBAsARnpPDeBhj4VVn9VecBTX2D4HGay6",
  "key9": "5bqTH8dRyEuhEmn3fVkxWWAKh3t97K3d4czAJy8FxS5wys625uYDX71dZ7tJvQuXR68qtqpHRJ4rQuwXEVZfX6N3",
  "key10": "4wVNWYx343MZftE3JuQYJcR2c3yFwkrgi3HHYPDzatPtkHg88T4pzNKsuCDYv5fZgRDrEUhxCwmubJg5iYDFTftF",
  "key11": "s7y13qu6858jjRrHiFeoqqWKqrVC2ybgJoGD8JCZeqcN2p4dGe7qjWVwF4vuAyfL9hqyBSZeXrptoJWTcAqnHNG",
  "key12": "3nKP48MZHggBqcL6vtRdBzxahntn5wete4Mv2o6H8Z3JQTeUTbD98Rhp3dzh5d9cZLUDTDpSkZ4QxVQdKzarw3Xv",
  "key13": "4DBdzzLrnCR7dXrFsAQ4Y51fXok3taMtij9cpEkbUzxwpssat3HJr8txFZpjHA5FtdzAYK5VAJSZQgaqSSmvougx",
  "key14": "28Bcp4zP87tHZM1g14zQYn5ToaxSf6MsiFuJuAP4nw6xB7Exif5FdUsH2T2fBjJEHcPNq6U6Ny2iBtNv88x4azEV",
  "key15": "f4EPyXCTrkCKkAFbvgVb2eVcnUe42AUDdBRVkVBrDJsjLACw4z2dDrFpxZ9Mi2Er9wTApndaKovugPRXRMPQN4w",
  "key16": "mnwAiQtWh7iVqQL428LG3CY6AxG4uFcWohQGbvdSGTVKtDJSkBmTWuAJxmBeKXUxG4hmtj6yGWhZk2ZmzxbUTRD",
  "key17": "2uftXVRFiodzYBjvi8zvwy8ZyvCcyxkskxRdiKzrRWhJs6FUoTa8ytuuWMMFh8TkBGFMCdmd3LFTB4kn6TH55XHy",
  "key18": "4hjcNWCZwaTKBMB2tR9PMHCtgk1eSGNzS5ki7fUPwodYS7DdUrBKGbwwodNzUsJXQgrhLPNbJyVwUFaGeC3mdutL",
  "key19": "5UQyFJGXuSwkW7yEpFKhzrjPSS7GjMZuQX476PEgKXAhoN1p6VpH6Y12Ka8w2bhcviiiThbEHCt8UJvk6JzcBzwF",
  "key20": "49souiZGaaj3SMXeS2vgHSG59GjPVh8ukHHRUeJbWTvHzQsCB5QXNPRqFDNto3YRPQb5CJcdfKV21dL8cave34y2",
  "key21": "2Thsh6un4F6XBXSS6FX2g8o9gd7rRrX4hPNNLiaaWyBiNyNnzReoNjsdVPis86B61E8agJ9rN1u744hXjoHp7yFG",
  "key22": "2aNqNz9M1WW13sDhnSghQuqRkAK3upfQ11TLZAm2iQeNSSzu8iEJeXWqbTH4Da1uVai679cmCA6nHFiaSQcinGGQ",
  "key23": "57svNWjGPCwxdQm5KLXXb7PPuGyG9mAwXPHT2W1XsoK18hrq6CBvnm2NrzTG8muhZ2uMAo8EjBR8CokEU5Y1irRq",
  "key24": "5PogTnoXAAPWkaMcyp48oYqHsvHhz6CcjCJaRpzsenCwaoWaBLW16gF7oD9DCu48vsjqgZ3qijZji31Hru95kMf3",
  "key25": "3cZiiD2tkLq3UUWi6gZKFsScSFfXF76jKnMPKcM3TvHaKNfvTNw7G3Wk9ZiHSHfK9TdR6tkiM7NeDRy4PdJGv1T9",
  "key26": "nFwXPMetGCA5dcQJKAmUFebUAt9ycoUZvZDEkUe7Ai8MGbfu43JdviPRP42fJeKpGEHZKubSzyxLH6EBVgu6YxR",
  "key27": "3e8X3WKCKehtXFXJ83dnRVvrFfwxsSQY14aemGRhH7XXH34Z7DfzrE5fkWCmM9sZvdo5wkxf8iFz8Rb999tEbHN1",
  "key28": "GdtsjJ7SAzhXrdFzb7oHUz2qjTT282Y3mfQ3QobPUQQ9D5XTsC7uLMnn38BSWPi1GZRXkQP8pJzUs7YCxU56evZ",
  "key29": "61BsafVrMPqmM53sEqChwvqgiQnZaPYM4TApxrYnxTxe1fhsVYwUHumWVjRP4R2pnZ4wnjeQmd4Nwd4NtFXbGFut",
  "key30": "4DKvYMWbP6e8nf13oXXJtVPJ3rWpCuP5JDQd3tWaJz6bXf842p3jm94jXZAgS3VDDtV2VRHMm6nW5JDfGhUcYjrV",
  "key31": "qGQt6cddPZ6kJVe7DqbhkXt1eQkEqvYaov5WVm5ugDGuuHQCvZf3H2mW1yL1EKy8Hkp6faaBMGGRX5YjZvmADAK",
  "key32": "5BSZtXooZuGaGKZVxYyaskNTt4ARrQqZs15J8XURcLRSyTToaS7zzgfiBv4dJbye22DC6SkhW3c8sqYMEoyTAFH4",
  "key33": "5RXAyEKzL4QRzw8a1Z27jvpSCk7pYcFZAPV289ZehoFzF5o7mijmpkGXWj3oAKm7WMW4SG9cS5A6yc1kCkh6EmpV",
  "key34": "32fDg3Vd1CwjjmY2Sa6wJ4GNB2WmnnHeiget2W7Ec1oeKYSwgfbqSVpm4hExsyiJfwMgY3xu5wrzZ5D94yzHhQYZ",
  "key35": "35jxEqeNNCfsjSfNrtZN1VZvvJkAh7uZutDqxxGX2FDWVDedRf2b9vK51GuJ8cxemMT5gUKN3uDGvTSZZUD1LbWZ",
  "key36": "2CjVttSmV6sDBk9RjRTkgvC9bTynwDxuYXrdvr4G7q1UxV1E4MWcHcQY1gms9nPJMPDJ68eYs7FPWCV5SKpBfa6W",
  "key37": "2nYY8QbjgYjYmqHfSKD9eGuUDQHCafQFVoTiaidXvQwRPA15w61K6JY4z1QKXUxWJm7z8vARDm8bx2mzSmnPW6fk",
  "key38": "BjhSZdm26zVfaJgzeDRrR6zDkWsxmJDGqn2tkby3KSZ171a4u5wR1o4TJL97WpbUKw7VE8twTKHnkX8SqZrTk5J",
  "key39": "atgvRduZXBscg8jKCEdH4atpfHxWkuTDTD9kkwkcFePPhRKjLtxKZenx2K4eqvbSkuyL6Kc3fhdz9AyTCEVnXyP",
  "key40": "4vo32p4C3ACLGeGizfWDoYjfFHSfjpzDWqDDbkqGDiFYrLb99QQ49N8XNuoPrpkgmrefchPPYgiJiuj36gVABBEq",
  "key41": "5Lo4kpRncRKfmtBz96ZAqbokdQa6kT1WRm3yWcnKeQD4qBB47Vrzb7rBE5w1LmFaiTwjy4b9axdbw6MbxtrhfQH8",
  "key42": "2ZWH3xbYZDRFWHy18hPxBL33YKe6NjYHU1Mkz8FQATkyMy9a1cRqnXmFPxmYxRdF7CQbyuSKPWccjtv9euHPeATp"
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
