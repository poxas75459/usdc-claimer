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
    "3wErJM6NepgDE4HUhCDXGMZEL5Ucetm2ei9tuYbQkYCTNbitrxq4fGwbNaQZunCwULaU8EgRW2R8s1cCNPNQLcZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AKRo2VGtgVi722QBRB2U9b772KZJLxEU3x5NqH1zuxsxPRRtwX3rLQMPkhJaVmS6shhieF8tc5V21DSubxuuVNr",
  "key1": "hQ8zZ6xDgRQ89XHW14irQSjzKmFLfGbQyd1ugJ9JM2GWU2YdSYfMeGVv3wuobDEytNyZxvq39KqF1w67piiPvEA",
  "key2": "2xgtmQhtR7eSqaQzCEXhgAJf3CtEbwAfm7y7MLXdPamvmMQRwMXvcuCmWkN7Yjy1GLHodpV5EKgZDQwj8z8khjfF",
  "key3": "5XyAM8nqhohTj2ew9VmsraZCcSzsR1ADjMx1WZf8GDxhxfv1QUZUhreR5YcvbRMRT67ui5VeSvqpQ3yQkGPCzRKZ",
  "key4": "Xrw5bFi2i4hSCgXGbjmrHj66DMoayTvTqrvaMRA7hWFpJYaYYtyo7FnLqstr5rxcEEGM443Hiy8zhX6w1uVaZXx",
  "key5": "AKeTGUNdxPxBR51RRgBjC1wMPnT3SiZxRHHC5t7w25Zi93qGDmPLvfJLMjG6sUaBpKwFn75zFSdxtSVeXF6EVXX",
  "key6": "4BTpgx6Ew7LdGsP9tv28PXQN81TJKJazfnn4WeSSzBCvhiKD4FEocLptxCqwh2AkkYx2DvhACERGed7v2NSCHYXh",
  "key7": "239n71bXpqzLUaVNa1B5uCUWoy73nKL4eih6mjXNUQTJ9pyarVaH5BEzpDTm3wXjvvUDLWgNk9zgAHr2SsLgadAr",
  "key8": "2dUNG99JXndfLpoCCrYpuku5f3Zu3qDc9nP6vVmTnGx8DS2gRcBMAouPh9kH7o7Ey25yxM5fUh4D4JbhBqZRMCmR",
  "key9": "4mERaii2kJUtid9kpRgMnGGquhWR3wk98KL5vcXiAk3rchoAkmGULgzLnmsCPV1NSKQAi49AE9FDie55dZmXrSxP",
  "key10": "2FFhDQR7wBR3fwMZTy5mCaevZ4DWv3p6Dhbsac2Pqa6d1kEExEWcdh4rnvz7cxdP4EyRLrLdn1jfHJp52JPHfaqB",
  "key11": "oUdvrHEjf7FyX7ZN3V8t12rPrkBRtXTvNVUM6HN45mohV21rcLJY3jU1YbJ4PJdfKuJPoV1BCtehNLavajtMC3r",
  "key12": "4UCc456XaZa3TqTyghR9k9GWGRUSeBZARAdHSBeP3w7ForeC18f9Ge74yyqE2Rn82hAwVEoZncrBTheR7jbfu9Zk",
  "key13": "3UyeuDwB6f5p7GDmtwGM1SoWuGi7XgPLbkUq3M8iraWtqXXUEkb7BYS7X5iestu9pLzptAMp5N88Z9ZtyEAiYErt",
  "key14": "YBvo81HWvWsabzAtHHUZmydefC7xijpGGPcgrpSAu8xbagSAhVNiqAvy2UaU19BGQNUxPoRWB7YnQfEuNBJybnR",
  "key15": "33h6yGnbVfJXtAS7HQzGj5evEntK9cryA1Ug1AaLjeJrDi31LiFVcKEAcRq2JxY9sTTXnFpejVxhfAftE3jSHQEd",
  "key16": "5zQZCwgoVbgG9VcgEYTYGFPCfUPY13aXkw5LDE6uuXcE8jh6QDN6HH7NM2LGVN1vxQt8HEqbpg7HS23fE3o8Pnja",
  "key17": "KHWojxcDMsdsyP6nf5jHaS7rtwvCY8quJjnhprrCaCAagKuBZXjsJCnfrimNEq978ZjktH18dhTp7BfgCReUqdJ",
  "key18": "4PZUDLPSycnDPFYX7zZzmzib7twbrs6fJfWMKoNdVd227MWLdFKCUtjQ8fRWALxuGYRtqteJ7sg1uhx1hjpQ95po",
  "key19": "62cMNRzfV5yU9gSMZkgrHMrqjrPjsccYFVf91z4sTi2542bjLHHTzbxUzSz5L63wXre25qMpYj19JhdqYe4xPzP9",
  "key20": "TmCS2N6e8VUw1oiKyC3UzKgDedLdeDqzUbNHhBMR1gYTdKvNpona4ziMLfCz83r63wGgdyGqxQTUzRWyULoJVkA",
  "key21": "3RRVrQ4dAD47PcH8SXW5P2TpbXTUnzqoV3dXEyNf5NX1dkM4ZgCDsfWbmkuRyxZ9zE1DJypJ4qGNBX97Hfp2cxUH",
  "key22": "44jHpHScVfoRYQVYwnkEMXgjBpLoQhsfCxXg7dJThkkhVNcsZENRyY6Zse2oLpB97hJMh6KPbuyL1ByqFusJbJUy",
  "key23": "27qYaRuN4dRnbY9ondQJr9RyyAxSPysPDPjB3darsnLwdcM2EmgvF34DVRY5cmFo2RLTndv342QrRc4GnAztDDeb",
  "key24": "2VVPsX8HnuoeZhSySTzQJ5Ukh5BX7V9juvoN5RDouzW4SiXuPb1BLpidf7wVRDwx3PTkNX68bujuMdJQiQSrzyKt",
  "key25": "3kp6BtUszFaSRDjqAd8XT6dQnjyT97WjSLbEAmFXcYJEe3sVDyFKE28dFoeBwMs31zPmJg5VQjwAezpcTnKtGaSB",
  "key26": "4bCxzv4EWHiQZ477ngYJP5npb7k3LDN9vpgyEVy2yxvDYBHarj7gCKXbjueUJ1HWFzxKLtpVGAoL168G1GKPH7Fd",
  "key27": "56sEfs1AT32x3XU4X9kbHFr9hg73HN2mjdeYYcGdsxgopR6cGErfmgoC9jcSzXqmXXqMim8rMtTw32vrKh7joiwf",
  "key28": "33sYLncbxDsmufoUrcmSiJjXE2MD3Uw2sSzqLAaSVRuQ6dQ1QQqAfWSWaREzzk7UcAJuGtrJyVR5mgCPw6HzAs73",
  "key29": "3LQkv93byBGWCzj3PeaBZnKbZcKitMCN6P8zHjH4DoahgT96RgYJk93DU7jvfrriNG4vhL5x7BaTu9wku1VBxnKd",
  "key30": "47Hb68voVvA3JJ415ULyiGtQXikJN4DohiXk1a3NoZFjKVCJRnBNczsVarxRrkRMtsxQsXgeBryMpZSzwDKG6MUZ",
  "key31": "5f3V7sJdqTUP1T3o69fo7dr7KTGu2Ufm4cQqN4iUMwa3AreZ2QEmv6LAU1bp4cMDjqAURnCfzEYq5jnbTbz2yA1z",
  "key32": "3aXYRtAkCXEFZAq8CXqLwJyCM1pZZnxcnALigi6HPJnMd5HXcvDtbRh6yA9yhRBdV7FNAYvrGJVYbVxhTCdXD2Cc",
  "key33": "5gnoQBANVfxY2GnvVdehdiimxjfkwfVewCspA4qzz8nD873tozfeYRzkjWrA3fPVN44mMVV1hSaW41QjkJYk4dxM"
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
