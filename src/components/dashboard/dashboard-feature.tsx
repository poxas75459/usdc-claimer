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
    "42UFNeab99LZRznj99k86mHURN3KKdRYCUdND6ewQYuuSqcPDFo2otGkfXQ5V8jS3jUXa7y1AeHMrQdYbsF5gSuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xcb4MMQAsjcTkL3b5Gn8c4NhJrNdvDv82bL4ADEH17kb9UNQgvjEoW6BuqpgVfPUjJ76baVQ2LMm5B1BTtmb3C7",
  "key1": "76GU29UUiZ4hj4zjXvmW1HS737b6MwPdreFbkCaYxb3FS9z3LV6Tz5a8aLMLVyAX6jxgV3HzHQT5Y4auHw4WdR6",
  "key2": "38SEWrBjxCE7wSrE9hrEePHmB55pSD1tSc8a6tjqUUnbD8SwMSg8oWqQBxUvZXA6Lm557iY7s1urJGeKeCDS95jq",
  "key3": "TExdLk1aUetir75rfp2t7Y6BkcGgZRV2oSQ9EfdZhtUyGfVXk7iGBae2B3FgS7fDdFyATcPCt9321ugzn6MSxqN",
  "key4": "uqXKDfyzGPoFAyqXGPWxHdf2xzboZF96mubbd4aa6NdxMg76e4dWxD2LY4Z1DigX1uEtGQvqAaWgcLxb3FDrj98",
  "key5": "4V7UqDbAE6tu1w5oQ9vbRfzyiSSTNWnUyghht8Yi7RKfvojYuj3Xu63YaF6muDvbTqi5DnYGSLWZYALNgUrCfx3v",
  "key6": "3uYdscqCWxftLCVuU52Mhap7asubQRuDYsuThBReS36XAmvBrHrDPr31WEyUqFy3iQWoT8qn3cGJAYjCVw5uimtX",
  "key7": "4uy7WcgW9GFtVHvZu7NjjFGku5QugzRo62R5xW6qyDMvyRh17qyzsNWx1SC7neyyn6fwt5wttWTxuyhY4LnGUAWH",
  "key8": "6D2UA3bwacTecMuzVmxXae5RGB4rneehuCUH28EVLMK3TqheJFxCSvvQpH9EB5KUgDrLXrUYmRXSK8SzNsV8i1G",
  "key9": "5dXDqKFrfyNQB1y4BJXXDbMqY7Arnkhed5NHFa9RU4Tf4mz4Du4QHYp8KWAeKHqAs78TPqnRdYo1QexjXeVv4Bup",
  "key10": "2w58yqkZgfQzFPjDmcf8C74azxShojEUyJ6XswDhhHaX9GCbZw3Ce1GHwYctPubnFyt5P2ZZ8Gcu5DiUjiEeo3iv",
  "key11": "3k1CewoAwg6U8qtQL6qzVRZqc649PMNtiHbuxZqtBopQMmaxCnqKt4MkJ5SR2PVKYXms7m1tvDRKtouehsfDCUb9",
  "key12": "G6ie2nDEU7T8VRYMhX6YZJzfqzAy5bmXkjCD7RQTZqFRrMnWhbKvbULTuK8vbTCxYtNhiewZQzvsUig7DJzSPis",
  "key13": "3wWydjyctNyBE5VWaMSz67vb569NoFh3mKZfyBT3GwrwudkNuXB52YakXGQmZ3fZHP3vjG5utrDzXRCHWYDweWDH",
  "key14": "2b4MUTwCM8FuR6cDrzANSyMFuLQvodqBCQDhFugLdvFriwdP8FdR1NKghpn7Eciqh8sFb9rbyaEApmntp1VnhDnH",
  "key15": "5e7PUxrG2ru4exijH7goGQFBjipwRN98LJXFtF5YDsSL9Mcx346SwjCjvTMg9SNAFno4QTLnzyvdVKWszyRAQW2U",
  "key16": "3MRr8aczrAK82m7sqQZrRRz9RZHF2TikBxnZehdzq3pYEVyYiwTV9VqnD5cp6rvWtcsoasfFpZTmWC3HeFeqWUan",
  "key17": "Er3fzhT92wVetMADzQEUUQgEXnyxrCMoXkdECJxhhfK4QSV47LgjXayJCQUqYxe6FmHzupuqh44MagtXZeQyG4j",
  "key18": "ouAmJXiheW69LrMGWs8o1vZBwao6YVw79i53RfZYJT1euW8YYsgx41SVRYyxRjJgKu1TdLn2Jd1ZA12HQemJ6oN",
  "key19": "rqz3DyCg6Vn2rV6HRWdyFE1V9HxDiszwofvGwUp1hPHdxBS2K3fm1Dyumbvsqp3VuFHgLwPLYsuu6sdqnzcAegu",
  "key20": "363YACpa43CU4jb2wKQn9Mf9vb1qGRe5nSjyCJZ4577QuuErhkuiwxi1uVexWBQaRBcKBCpepd5EiAvVyxAioV2q",
  "key21": "5gCwEcEcu5rGhi8QF4RqsYHqsWzjKMS6HcadFDZcfJbA7Kv3KoJSCpRWKX56usx4Pd4GqyXLyECxe1XexkhUegE2",
  "key22": "V8G61N4TGExiB8P6yG4hKjR2mV4nZpWqbophz84WBFg7brH4wDmhzxjY4a3fHbJ5cTzpxJwmutBpBnnzTSNzi1y",
  "key23": "3V3cA5UmRFzUwx5shy2eeAabRacfo3a5jpYXDvje1Bq9oeRNqL7EqMzPi2rz9QEAF3zdAoQPAS8ahrHNSuQMF266",
  "key24": "36G4Q1UPrSugJuMrzXRTvUdvVs8SyjXNN2L2ht3G5XRwQpWafhxqKk9Bq3x2eEVzfu4kEuqGHVAj6kppot8eqqek",
  "key25": "5723fHLqKkMFmMzQ5Ak8Bp2CHmdLwHeLMpEpQrSLXa5BremR7hUXyEx3MPgPVfS2f6M8aesXkHq5ZFvpRiA9KwL6",
  "key26": "4YeQRkp1XKp6rG4pwVMgQCrez8fieaNLH8KicDa9hMSrtEBtZzPRaBfRVpJEyXjzwLdvGAeAz529AvZrCEJNqutz",
  "key27": "thb4PxTwcTozHJit8ZtdLLf4T97mHb5iujpygxC9yGqRhePFhXdkFkaBodm3MEn6bEjvFhhFAtdDWbwr1dcutip",
  "key28": "5KCdPuSpMggX4zfyyrGCgaptmq8xCjzKE4w8mUWe3iF1fC9NdFvDbzCw57aAYG5gpP6xvRdUXBgPuoyTPWcchpEd",
  "key29": "2SLLEq6Xtk2hfAcKxapQBXN3bDbrPjoZXYdVDMH426qxR6PLkgL7R3TNqF7MJAz9zhUMEDM1SsTSRMugK4nWkh6e",
  "key30": "2dLuMnyQfFRgeffNLxgvj5cBfGYbdjF63FvRuA2Wmw4hqn6g6nVL7YC3ozY3uwdLkKZnDxhtma1UWcxf3KM17gKR",
  "key31": "2mntm6xJkq7ed9YSGuHXrdmvxWsKiZ8u4AqHttQCSi8nz42RbQEpcDVywvFqS9CAdtqCqTQRyPk1vrLX54XwKS49",
  "key32": "2iAEDofHdkHRziTTFqzVPXKxhVeK53XYfxs2UiqqphBEun7gChbgRKFMthP2ADUq1wWPvTpZZm5KgG1h7VJ5DhQa",
  "key33": "3fZvf56MKfbvbCytmik8nehnHJjLWQCzEBXWuS93wZbSqVTqHWdBH6gmz7nF9raLm5SHhahDcKNTfkHeiQNU8i3x",
  "key34": "5z95D8v3T1cAjqZAn6nBtKGzXxFqmcTnabu8ERc7tyE1nGPmZ77oxHexVMLrArgUiTQobLruJwbnkVjWNvAziHzJ",
  "key35": "2q5e6t8oDRvS6qGJtFXjA15Ytsz7NAptkzAQ3nBCGmdupd9ezgQvGT12TEzFKbWbc5twFAdkCCirwkquV4bA72gc",
  "key36": "kccTQbQNsG3QQc3dZb98vo3J5AZnS9VnVA6GSG1uDjnovksZgiMrur4YwRmAeFdk1nW3z1KWkdbJckffwqyY8NK",
  "key37": "54AE3NdmLaNnAq9hrGxZXhM1ndTGrbuntSdWQrGEkoGUk6AuxiPGa8DLumATYWJDzrDuKgsEVRQhaoRmmurVf9T7",
  "key38": "5oc1khQrE4t5paaBNAihpBVX1FwdAyGZrrTH58fMigCCMGY9ShTvMraqwTaM8V4EdWYPnre6ENE2hA4KUXCmLeQb"
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
