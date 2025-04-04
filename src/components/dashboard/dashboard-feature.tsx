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
    "3g5MDzo2QWXyqtosHPM19tPVwso2ES8xL6QGuqA6zz3GKsUTaYUaw84jgcYwzWVG9otd9Qx81rJTH3CoqCwYZrpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57gpiHs8ASFeSRRZfUXhbcaNDPvbQETQAH32jR4G5jzUCvhh3NKy9A1N8W4FCh8mmrLP2z8yWtieWrQwioZ9g7vk",
  "key1": "46sE1jgKZrA5Z53ZaxYKKRqase2MkipPi1Acn6Ks9yj3EssVhPFfGdRwHCNd9ixEcCtwGvQv3BvissbqYXBjK9Nm",
  "key2": "43CAH8g8raMrLEJcEtWDWY6iY85cKAv9HPuSPjLSHvTNB3aaKH8DxFJrQF19dAiH7kYcYjomdDrHX3uoChtoAQBB",
  "key3": "9b1sc7RJXoXSjJGVdmDA9LipqkZN3HMWo1jZP4cgudgTGpSDk61AmuuLid5D4VdEmWTQty2sSmNUusBdiyMwkth",
  "key4": "4MHxFdd4ycHAA3gUXT4UwpF7VUmvyVTjehB6PCxZuCpHcjwMVxwrpQYTxDvmhyErHh9wPQGFDnko1MxYXgVsZWs1",
  "key5": "4avYNXJ8JmbtZiqrMjGYcaK5srPXkfvVW5iJm1zjbDuhLKpysFw9warSvk1jYsGADWktTgFZg5iHME9ESyDox5dA",
  "key6": "RU4boXTMnGdFmi6dKc5BS3GqQHrV2Vyzhv6bpF7cC2RnNrBSk54LkU656CJpy5hN9USUAiEkXiixJ4KFkQfhp9L",
  "key7": "6vHUak2fwj5DNCizoRhYKJBcvhVVpzWxoDMJGZFQznL28zNsNM5jPoYGWfbeqUdV8nMoBuCmAaM8sGCAuEjFscC",
  "key8": "3W77K1krMN8Knt5cp3Uv1LECPW9Lb8CZi3aTmZgdq33gDgJwufV4cof1UKivnZ8bo7fWrtUxPp4tfE68KmA5P6JG",
  "key9": "63WiyZ24xX96qFKrb8nzj3vxiphweVoHun4cHhKFXyiXxX59C6kE45sLQ4YFAS5EDuacaFRrAxEtJdKwHbbLzN3X",
  "key10": "5he8CX1qhqkfQQtLufr3ZmXQHt3YhYDhARNKRvbJ8ztmF2rb1FHpSxzNWDBdGTpoqrJVQ1evjjT9dVNpQk7T74Yp",
  "key11": "5b9CGyqXr5wY3SrrTx8TtQVRDuyqudJDTaede3VJ4gdLu3WzhrRpEYFRQpHFXUDtokv4hYC7jJHCAwrbkT1Gh9ER",
  "key12": "47PmJASE5bY5eMRZDRu5KiqY2fkL8isD7Kn88Ti6HVLKBYKbRuBCMuY6yzUqu7gA9gfi5uaYJ6ZGu9nGRPsMSncC",
  "key13": "4VzV6t29vesWJRvnZu89KWgM49LN2oBJd5qPurSkoJipzjqqs2G8f3SkRYogpWoi8ddDfZBoVbJekzC3XqudGjbT",
  "key14": "4L5qTLwpmoDeZPFSLiqHoZG65aiAaPVvNpP5JFNvh4ceRCHgcdB6zA1LY2Gm9AxzJrdV7rKSXXx3Zfedmo8pSrF6",
  "key15": "2KLzKZvfaHYtd4vvksnfFWcX81ExRe7JbEqfjRAtaHQ8tr7pwpzEF1wFXa1ju6a3w8dGTUZ8A7Wq17rdZFKczAa1",
  "key16": "33PjAr58VdTK7gVDaN4feSPz6UyHnuACSZ7xA319h6wRmqBcML17NbPapFSiDXH5PN8eMdNF64h9MkQwzZ2cbkM3",
  "key17": "2oK6iiorJLELevGbqFaj6NxDVAGPeT1gCQb4XKYSMPw6h7FwL48UC5uGRPveBn6Lv5ghrkxwPoPmnKogqpgparx",
  "key18": "63FKw61A67ehQsPLMrbUCLDsF2VgTZ3C8iJn5LoCjsBe9CQuMohKNAaPzjnUDQAiGXMijAJucyuySfQJpTa2MFnE",
  "key19": "2MNLto7Jvsc2LUNEg8h1JJ7WyLnVfmMj1GzgTW1VcCqygFpnHqUD3X8eanyjM1kZwmtCDKPv7bABa5CMohuwZY6S",
  "key20": "3SA5cJy53v4msiPn6QwUbJmvmwM4gWkzTmg1ehVhWCLFCNWs2yxUNYvcH64xJkbCXmGSN1GUmAXD6zjzdLRz9KCD",
  "key21": "FJJG2T6Hv3A82zQd5rKTPyfXZEeXNUt56RYBGg3raaeyLEzfkvVwhzhQTd4gmHyw5xk5vmypCQgYtAzKUsCfn4y",
  "key22": "66tKCygXDxPTSp8UzEep5nJsmKByqKeTScxQBJM87MMH1KVQ4ZzuU7J3iHFqMaRzwdk3wVT3kWTkayt7hmqyeqzn",
  "key23": "3hruF7VwsE32RjAtHggdJEN5DUar9bQDjoMF3Hwsx4RaDpQmeuuoF7QZBiC2LjxVVqjrnEpPUNAR2LfXp5k2i1Vo",
  "key24": "5BUGBtcRDDyg9uDBPSJRkDNBDmteN1zsDiyZ9zwJvSA9Sehfs4Pxwf8qqiV4zSAdi1p8W3FgFidu9PUhFJsAyMfh",
  "key25": "3oWpkPz16bMLPryFPUYCVyyTFPDQ4fT19jfZ1idVSVPNBa759mDm4USey4NRAimHxtvLXNsXortTtVM79bixDFoC",
  "key26": "APitEKmuAf5WHvfDp4L5Tn9mqV6jwy5T26rSchgos4ra839rztDKeY5XDpCbxFetUm8xRdMHESijeqSviGZSnDJ",
  "key27": "4MtcAU4LaiBy9MXdTfYUW1TMTRQz3umrMvZkmPrcECwzoideNvX3Pk5XGiDTKbV9Bre2VXG9gjRitzdpSjgvzcVy",
  "key28": "24M3dkcGF6Yv1LhUscwajaLm2qoLYXgJy8hNa4MWJmcW55NfnV7bYwZy5gAHAyxrQKcKytb3i81Rz6P1d6JeHtWW",
  "key29": "491yDkvYGiMqQyr6Wjn9MNeSpaGYoZ6iwyvg9fVCTwayNFXQYmkvdpMX4TLoL6M5Swq33YunbUU163PNKZdwypb9"
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
