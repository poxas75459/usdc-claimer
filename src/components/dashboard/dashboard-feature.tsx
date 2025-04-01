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
    "41sDWgEzyUBK1M4rjiXafjWEjLaPQBaoJafKtQH7reNQ4LsNmsCvzAZDUTViTa6kunCrEF1QEFwRLfBHZGPBWBLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YEhLguirSTaKChBgkN5zRJTLANGj5CWiWEoE5o956kN7HTsGADzCbGfxPjNjfMoAnVS5WYCdr1QEePB88zuqRc",
  "key1": "26dgS4E4uUx36sSvNXjWuMG1fe5mFUc56RU9ozbJXjt5oUakHy5CTCRu1TDhZkc4zQxJWRyjh9nKuk4o3iYQPZQX",
  "key2": "5exbzC2JqhUoaLbJWneL3tdWdj5ETVvvtmeZvFfw3kY7wvLdu7N32FfmDu6WYhEnsFroRDsk4TM7u5T2rMConhf4",
  "key3": "J3Tm88vBS7cuqd5WVP9tzL3iaSSMGdaJteQujS8Sqzt9j4KjUHTmS9LzzHnLrCEusvywZ9jg7FppP2V2Ditnqxq",
  "key4": "3t9nuHHd9nPe5mD2dMajarzcEu4c4rVrr5L4fYfPd9yr6beuVx41UJWNuKzHDQYNLhBgEuYG77uqab3zZygUz2dU",
  "key5": "2jyAuQTCt2H2MHFXzaAUL1WekqbE57C2fLxPJEMqu2TKR5nKUbjHG6CujpLjTc4m5USNgaLvR7VfvA9TXrXrTN52",
  "key6": "23QGE5vNYHJ9wuRuTWUSgyArqWvWpbmVM4Tv1S5tGEr43PnZGGsoVGNGwQ72ZfakbDpG5hGyZXAwmjqERwTLFRZh",
  "key7": "4qWgKyUCEJQ6ARozyshbK5iMBvRmVEpSF5p8gPGW4m9AgWVspr1R2jcfXDpyDDd1jEdn6LfbmtWDkh6q5XQ2hAFK",
  "key8": "4LBf9XzXZBXedgRN4MMbmRPyByheHh8c62vo6DQxSXmksuR2AxDnrYoxABdcrX9RykM2mV6dq5TMAvB9B2EwNq1p",
  "key9": "2q4mVHyhuVu6y18BkR7VpbAdJKuBjK8MWTKVEb8UvumGygmH8CuPaeSBhUmPakyPaqkfrUgifvP4VYewAb6pyzKG",
  "key10": "4ZFEr5uqqUcytsDDi63fS1XGkPSbz37a42WKYzj1uKET2Ydx5mF24nXbJ4HabQJmSQ85Std3CMnPq1tKB19mwbGg",
  "key11": "5qNkBL8AXar8hLhTiqAzonLSLoJYsuBrmUXiMHwk2qHRrH9PVn2SE9rxHD7wwsznnwSLpvYg9ha5FBqkEf5qYAji",
  "key12": "rpTfvDqzy9CHbwR9Zeo9ZWcJ92ZYyMhGzq33PrWTEudkV73XK49JcBt5tC3L8VHnqXPmf6jrFUZcRbJBWiF8vJt",
  "key13": "S4qnPp96HfzPHCNx7zfoeDW1Z16jVUwudTRU9SU5rjcaM2WEV6BQtjFUtfphSGqGet3gTZ9aSzqBBUQd7ZMDtzo",
  "key14": "2PWyNaqDAPP6BSXkPBNKsbHMLVLCL59eHpJdPNHvjC4SYim4PkvRKfaRYiTdvMFdwioMRGkY6GwHrucdjUXYoN6y",
  "key15": "14RSrcpZMyvav7qm6ff1i3cMLJcnBuDgVfH6WwhjYXtYfgzr5rv1PZ84JZLHbt4FonoLoui9DnmdPNmZYCiSoGq",
  "key16": "5vYnEgtCDnVXF2xsQ3RT1QAvNkZS6zYBbdqqQ3GDxAgg5MGPdP8LF5QLcSi9Wdbpt4KJJnXDTSHBb8WokyZ26pxJ",
  "key17": "2JzBKsxHdfTYgACyKe2fj6Yv1FL8oyJswXVtpgS8uDukThBnYpTwC1CZscvTgmiHJCvHJhaD9C55jY9CXvTYdQLu",
  "key18": "3Uq9zE7SufNo9jnrzvkmCCmrmxuVUptikeiKAwdLhKJ8SndTpa3GBXkrE5rAkKtfeEwfMQoZ8wRuJDZ93hJ52YwV",
  "key19": "DWsyFYqP4tFd1Nyqm6tA6ve2c1P2LPHHDCsKgC1EGQFxSiyLXqb8XN6TBZmTA5fCgNSQTU7omjGJaqxWHkUHFdf",
  "key20": "5FBQFjPz6dw9fR9fX3DfgVZ5zUiFqoWn8R4yyYjsq7sSrhxJy4nykC2PaJKWKYbbTLBbkBJavbmBctfzPorssrTx",
  "key21": "2x7YSmT9iMYbxukus5iZnG4eqyBKrfKg2t8fXTaBjCjr1YRLMttQ7YYMEjVongQskdFpy8KgZiCMGAu6dW6P5eTq",
  "key22": "3Hx5JUrbnT6EpdBojvNbFMrFegQmw5yTiFZramS1FSf51bRUfrHiQwWkUC3CzwmBNuegS4n7rHz8nhV4Ro5ccGsn",
  "key23": "3vGKmDj6GwNPfysE74pq6tUTeeE58nSvaFdRb3sYbd4yY7du2GWtVaRbBoDJwA7AR3GBvncAW9zkDRhVRwTB8f5m",
  "key24": "vkb9gwCTxi4d4xxGqKa6VCthzERxBJfGHoDj9EHe1vXm4hrcfZM3abPWBXm6B6Z5bybfs3HH6TYLa9QK2fyjLcx",
  "key25": "3yHSrgT2fvuk7zfrytjddyLSGMTwXGoTg4ENucvUgK8kWzYuGurWavh7HkNxrx8KYmkHKZayUvm8BkezQPUh5CF1",
  "key26": "7c1DmxrU3CmLmFUNfQNpa9mSifZJM6jrAYgmQPH1paCNaTMRhp1jsfXXJanREMUHCJp6ZgWoA3ezdwsrbanC8av",
  "key27": "4y9QXeb3zJ7U9GbUxhLemhNPCe2AdTF8sT9tEYtgYjmAWuZNYZ4YbN35JqYprKyD1NwdZ1JBtqYwXRC2uHLJdHgi",
  "key28": "2Ny2qLNhiThnNreaNL2v5LaR6RXR5nBdLsjqNutNLdrXGr2cWQo8cvKVfpNCsxLE19xex1npVz5zFmUHUhH3Axsx",
  "key29": "5KomEkJ2yvwdPCmZ6hrHHKB5kqjo4pSqWR84rWGEAucxWA39xiUuekQA316juv4eLU5Ym5pVj6UzM1hyyhYgap9h",
  "key30": "5rmhpDFvUyuqTZ44JPPcMaNN7LXBGeVssSpvShUu8YdWSjhgRSbgmyDbZnWNtik3XNDG3o5e2ZZz2SQcBiQ6hCHF",
  "key31": "46YfVu9npwkTrX6zreW5nTnxqcHeVEkTiTbbyTg81YbKM1YGc61hn4KWXJEBmT91RkNyE3A5VFuJGBzrxH5XaHSV"
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
