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
    "2iLjNM7YNZgz2GznD4CYQbh8DXLSksQwzsm3BbcoCxjKT7MyCicjWzCabrPcVLNihNMoMQUhPNe7th1qye7MWVAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43VTeg7YvpxJwxJzcF7ALBQqMdVVMjfzF7g3WnXUGiHhGxD9oscuRkxc9QvvMgqbiKFGPoRjTGXa5hcjhov9mwA7",
  "key1": "5fV4zUiNVSUB5CRHtLXHPEoTpGz77E8YXtx3vtzrdqLurqaHGu2sp4mSKq5x1dkUthPf8JNt5s8Q5rzF28nctx32",
  "key2": "EvaCDuoH1e4NGy1qqNFCcnVuvmtvtCNkwgsg9Zef5pU9ayHxK9fu4tfsMiPkxq9NGK11hjoNH134L5Cyzx9922B",
  "key3": "27mku7s3kXZxH2zNUpruaPAzTND1cdoDrHKuiH6gGJyM6N35EG1Eo6XWXT3TRQ99PetvoqbDq4eckvqZhbC977uF",
  "key4": "88Bgc2Ex6WwpbB2tzGiPAkWp3XbzXikaenpp2T98kAm7bddvbHnJYibTkdd9Jx1k142aMzQvHJTDThf3VNK3HW8",
  "key5": "2pWrNekW429dcQ6k7RyNnYrkNYwbhWRQEVpZPYWh7URFVHsEGhS6oH5VFt4kVKig3PsTVN1oM3MkKxHwfRCLk6Cs",
  "key6": "3bx3yB1RfyJBJXRSoLENFpC4ZPx53AGTSSxQuQGJ8P1kBAfwZAfqvy9DSippJqF5Mt8u5sBFJ2GsZ6v6bxbcmYWP",
  "key7": "2AmmhHngBYAYfkqMJkA587wrrLcXni6BniEYDghybyDUSsvn25bzcHLpvMqPHkpjcsPCFwr4trQTWSoCdn9mDJRf",
  "key8": "pWHuWzVG9Y5Q6RXjmPw3wnMkJRY22ixeXaaJEzbiPfaGia9z13eiY43KiqKuCxHexUWfUDEThAE3gZrQvuBbcoD",
  "key9": "opa4UAaeng68tomNP4c9g1d3BTDrQUq4A6crT84JxwD8HXkzMNVyqZDDm9VnxnXTTKpBjGeERCdks5XqxxqZX7G",
  "key10": "RWciPQ12Ha8MotsiAvgPyC3jiN5M3tfmjNBkvc3zDvCkjBne55Nv46GUcCNsm9bSxMoTQapk22Crvu8k9JtDJGd",
  "key11": "32aM59MU6ftwRkuDMxcTwvTpkUnwfqzLNq3nyXkV3g5Cx5URkPdJ2gtn3uMReiXSqkVcMvQ7hCemd4PJcVk3hKEC",
  "key12": "2CZwUkCSYeyCL8HUfcHqkKPLbQ7cLMfNJRhPWCJaZueVENaDzx6jr8fUk8WFJ6ak5r5yU3v41T2ggDiDC84AgaJY",
  "key13": "51GWhfjcYA9frVXxQPHupSajJ5PDv2cvYSZbQfBAeapS2Rezkq1pmpofsUdUJWvHTRMGzDF6v5oG4drEc57SCD2d",
  "key14": "4FFxUZKSP675ycJimgsKT8u7D3iDsHz8K7D8surucB4HHhrw1uUhFhGyr7cX87EPAit86wkjuwwP3eo2ypLpsgj5",
  "key15": "5GareESmLkY2Kv2pgse8aphMZR58xg8avHZttYWnWUvjQDYgsQQcCi9TiSe5yuYfS8efAB9r4aqaogoRzJzajgSY",
  "key16": "4NumnkG2WctEGHXgLheePBbf9PTr2gf95A1i6rZobsypEJDuKP5PMf9ubEc41hS2T8rUy7RRbCd7yo6pViPWMEyj",
  "key17": "3p33hvuJs5uTm6rmrSrxjkzardtatu5bU9ziV811YVFPyoTrpsB8EqwtPZtD3FPTAHHRyujHZoYqY8awUHFJth4E",
  "key18": "2S68hxPogovWX9g2CdPbEiuDZYNGj9wZMwap8LDo9fkM1HybiQnFpTpsaAp7EVNx7uKZwg5r9CzsDpbBntmk3fXz",
  "key19": "5zEy1oysaBqDsRJGo3q7Km6A9yuDdtkfp69QzcU3AzhoviAxmqyAbdpLTLv57T1dbPNG4Qkj5uTbxNKdCmEjt8mz",
  "key20": "4Djyhu636LAJzpagNtfEWyLkhXsXChgeSELwACBapj4BYw1BdbCAddrYpUbArAeYYYMXiSqYCecY7XVU8bvERPY8",
  "key21": "3mQ3LMCfkhJX2hnxymdJnoEzYmQgeLULHAwx25LdZfUSvFHvJ6xZH7Li3LhbfUKNvLnG9Re4hjmLbuo9U5YbsHef",
  "key22": "5TyCy9XSe4xxJcQMaoSownc9CTV1du5L4PYo86ZgxaF1xzBgbCh4viebw5h2AG8oJ7mXjFhkHZ5JtcfS4t9Ve8zT",
  "key23": "2feBWeFNr2qGPsja7jeQgTv7jThn52LRgWbQFAvsWyH7Qk1s8VVQ2E4ao3CpLcy6UvZXtseRLMYK4bydTDjxD85Y",
  "key24": "259KMubsuAoMjemkKPAtaP1kWxLyhhVpCny5xUfU3cujNfbAhHfDBEkSE39bt7KAV9JhADRLYvVzySu9q384MJ7e",
  "key25": "3NXUsQKXZvvPYp8wjbCZqipBw5d3mjHZjUyGRCFtuKKiz21upYTvS5s7EBZN5u7V57aBfT8WFKeMc6RrrRk3pHMN",
  "key26": "zGTx7c4Vuuorb3EFtKnW4TMEsoiiTmRYLwfyTqP3jFJSD9S95TJvCBeL81LsxX982wjwdq7KD3bG7BvfZZQUGkD",
  "key27": "2f3x9zFyrU6eo3eY94KDj58UGUPDCqXKsSQSEowq1MhtFKbbRpahAsrGKnbr7bFMQBJifvzidUfa8kJKAuWLT7U5",
  "key28": "4wkTnd9D8bYKbGiD5r4ox9dCnzQ4KbgTL5mgU9wGBWkZhPwB8binAhBSvt9qoYa9uEDjAtyZLUkTdRRGQRRBDiDq",
  "key29": "3aT9GLftL3tKmmLWjeYYme2QoveUjxDU289D9ETFYYQzvwHqDnH8Vwge9ysjLytZVUDLowFD9ypDJ3si83313New",
  "key30": "ds2GUo1yB8gzBeBra9xmjkh6edJGVTkRfNiHDeATrWvVCJrDAUkfFxmDZ48djrEb7cMwyMxNqdsyngwxs8QjoD2",
  "key31": "5oRNZu2uGkVzXEierHab9z3WneqjiHG5Qzk4ujjEvcxTybUeWrL6b36Wrfch4hKALsmrFdXaE49wCEoYBxkkcDQ1",
  "key32": "5y5YYo8BRJHKuQGVVNey1AiJ2zSfeTaQR4ATbwwDxNWsYjJcGARAPv2RUzNo9gcZ9DFaomQp7WBVw6FLC4vMKJwa",
  "key33": "65wjhWRipAidS1h1nBwpHSMV7Ks2YZJM7p7wApVopckhHcYvWfEMBGA15RaxfS4Sa6bQJNYh9xAZq2TpF11EmLsr",
  "key34": "3hLA3Gc4H4cseonpTj2A86c1fdo6eQ97ghvobQEXuvRwqYS2kS13Ldc1Ww6wHEKaFBHGbfg2THMYEW8FqXTNKuKG",
  "key35": "3Z7msVup7QZ61BHsFEhLtSdjF5bG1iW9ZAaYdHd1N5sNfUkcn7pHg6BNVUcBkVAuF5f5GMwaUFFhxgcZc3UZg96H",
  "key36": "4EhdpB92Nt99X1xGTQGaLtMHTz12Q57LEkVnoGxd6AGqg18sEcsovi5RhT4qzP94vBBjzt1URoqnFXv26r1PP1A6",
  "key37": "4cnnv6dspmno3wtnEVqEwFLyrJvJHKmZMa3jUtdPBc4gS4Pgu3oHzdieEJu2UJwtXFz63HgQsUsCZySEMztTTqwz",
  "key38": "5P6kmoKgT8cRxqWRtvnRKP5YSoMghVC9zzLZKVfuGJtr27b3F1G73zUtahFm9jquvZwgbMdK9PLqxDtcBd6QNo7P",
  "key39": "4Rx3BUGe7DQSad6i46cGLLo9Q5RxUynDCfaweoedhWHKZCrAS6XQ4RGokGaCaMJh5nNjNse7SPc3DXUEkWYS7PhZ",
  "key40": "3Lau66FY4T4Kgkqh9gZaNfU9ZpUFY7MGBdMKjhi3ct51vea1fiF1v3nSh1GyK5LVmC8qVjSC7qHPcFjmHytB11gw",
  "key41": "2QtFZrY423JQpZky4Ctg5rBcaWj3PgPsSnCtf8mBSkH6NSdU6PZEmSh36NHcr3q72k939eqVNbwMMmaUc9s9HBx",
  "key42": "5UaggSy1T1S1LCSvFsZyYSCdsAvYnK2BgYm3gHFE9wPCFYpt2d4gWMa5vdSD5b8AJGnbjyW4nGqPhYdWkHa2ZVwC",
  "key43": "29XQBxhRwBB9FgPztzsrsWwekq9sYTWD7pPqscotk6sDy61YwhSGqCRronCxm4MbX4emMQhGBKofrGSSYwJ8xASq",
  "key44": "5k1v6UyQ7kemS2C2yt82tzmRVvYLVbvrgQpojtsbebX14yKpjCpSPzBuaJ3A1AFsxr1wyVuxr6ZMsQ9Z4N4BvbBR"
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
