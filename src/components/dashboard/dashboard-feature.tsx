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
    "zhFiZu8XPSNWMvJRMDiqSjL26rR6VkK2HTNrz6MnKs1HLKWsnHM7zzeAjSTpEZ8YxhXkCUwBpnSXb75YKhDCJfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zx8PXBMg9mmSc2jEPLgdU6CSJFf3Yi1eX9y7zzHdfbQxGJgio689LB3EK6BVjz9dxC12evnBSoNL1Fs4sLLoc76",
  "key1": "KRYUPNuntCGiiJcrTFucmmvVxw1doNcRCUkSwuVGhUpw2n8HtEihdino7aNPLVYxN59FrrkmznwWicJ2JVKPUna",
  "key2": "23guLCGj57mbk3yWMdF63ueP7iqgCEu18rpJ7EvJeUsdRtfry5bNAaLhha5C8FeFezvgx5Bpuc4KJcqgeQSP6QDG",
  "key3": "5P23CpMt8SoeBTQUH3rzpa2PEvgKxYZJN4r4mMJpGLDGntByVQHs7xYWGGenXfAd7bQr9t3jkZSsF4qkg5qmwt3G",
  "key4": "3ZwcUVQFGo6T9yftxs6EepVB5nYar9KKdqHKhkP2CTLPizGGNQXURVEMz5hezbD6oJyMNVpNw45iS16b2rqZEdtW",
  "key5": "4CR3zqsBB4tQKaLwXpMrB2AFXW59QS8MQMABX2d7ASEAgtGPaLpmU3rVpKzaXSD2vQAMsTBPL4EyJkehnb5yHSJL",
  "key6": "43aFxWVrS8kVwFoSStJSYyeKcZcn38hUMgDintxzf8Mp7i3AZc8GiWSHP9Axxk46BT2mcZteBXt9AEP5kbCYA5zH",
  "key7": "61Ho3peTBLy8peLykPgDbvefj3Lfmkt1CT5mFFUFtKoWTsK9AeoKyNBxKBj82Rt2wD3SY28XVGEwWDWawL4Kx3oQ",
  "key8": "2QQHHPwdWuSMvsuSHbxVkVaaMtWLAcR9vHTFv1HWJKkQdgVpA7zPHUbgFiWcC91ucZjnjWi3pTZV798yZRpivz6t",
  "key9": "431aL7GxicdvJcKyAKaMUji5y3VXjTnTuFd4ewyayy8LWg9nih6Wdhd89sWLnHenKyXp95BGeUBKA7TM8g86hWrj",
  "key10": "3RCveTwTvNk4LhX954r1rHKDWEuV9AMmUNNHd4LTxZ2cCv6JJZJQnxqhvb322R8WqTZ2LjbJ4ioArVXXJzGBNsHu",
  "key11": "4uHRtRg5MnK7rrj2JjSiZDqjwK1w8M4pJhRmiDeAr2gEdsLF5JVZ2JtTFbnWdx9ThXBAGjEVABepGNHybQ1aZ5Tg",
  "key12": "3A9686M4KyCHBdhXAQFpJJ4i3c9FRxTeucbaujZJarTq3BdRQ6QD4yKaig9NUDefnyGDU9HjK6J7ax7jV8Zj61AC",
  "key13": "4yJPuC7zECt1ft5L6m85DG2wM1Uqz44et3iQdphtH7dKsE2cRsFehecG48wwXpuUTDDGN9Rpt1kX1yHqmAJHR1TY",
  "key14": "63o58MFqZRNK6VYZzY7Mj9Scq1fzdcaWjbHRMp9Tn5R9amqD6BgP7j24SVYmApKNLzsP2nPe3yNuMbwviaU3kEx5",
  "key15": "28x3xPwS966EtkWmPV6RFmfPJBwpfKEzrgMaK3FNuWrqHADymrPQsmQWs7Hawti9RRVwe4E3vZ3qRmC92c18rWPF",
  "key16": "4RCQnvCzKL5fJpM94yTZjZEn82DYwjcseLcwm99uho2BzeqFLgxRpg8qhSZXgtKdXbEWW3Y67symvwcoHtaD9g24",
  "key17": "3CwCNAFp7urbyrj5eSDssrUeUbmhwkJmTqNbRnnHGZRX2UoyG7pfh7Ec99bdRxiGoJ6MxacvVzAZ2DC5Qkkbucuo",
  "key18": "3fPUizsF3px6Yx9HZqwNXzwM2qNHfBdEBCZDE4Ds4cSn6EGhMBb1obJAmMRBdMs7jS4T94aTbJ3jkJW9cWjE9e99",
  "key19": "5g9u7JJALUxvsVJUJKYiZxUgZSzUJFBAJjXXx2k5yEdAoZW2PfikT7DqHwTjnmHBYtggHWJBx4LqGmo1HPLoRs64",
  "key20": "5RHJirJw8yforvhrtRyXoZzu7V3Pno2aLUWb3BHra6qCs6t6eDGGwRFLAFJkNDwPSTZyDkoeKhMqjmoRqX4uQ4rD",
  "key21": "4WCtWvw5W12FX3tVMxDtXjV31FAyKL71mTSXxEhH4NS6jw2KkKmEGiqC4gJhHo54w4CPgUkvhSXuyDq6Nj2iW4zw",
  "key22": "53tKLWoLE6MudN7db78bJmNRWCwCEWH4Uet6Bd5RNvxNWAs7UmVmpLmsrQMW2buwzHhuKVG5vaRiSxpJwxbWVFfi",
  "key23": "5dRzTvdQRypWCfUukdTA8Ym9YNEah2Y3nG5iNLuA8s2GNu59KH8qAqDx6aAg6JWsKSm9mkyZVq7CQb8VfbFqYbeo",
  "key24": "5PCdsyK35LNrraTzVZjo7a238Y49jUkqM6rDJsDxfNaLSE9wEdEaXxKvnTXW5TjfCFyNVP1cBoYF8Xho2reWTcG3",
  "key25": "4Tk7xKfkeRkcJC2PErfPF5pmVfEYh1dAWDDqS3JCP6mo3B21B5Y68TyxBTao2huUTWDg6pf2DbR98gTZzUzQ249s",
  "key26": "2DTSRdfRyjDZ5Rog7KkYQiYJLiemipo185z46R21sAQaAdDzun21kB1iFkZAbs8Fmkn4vzKMxEPhuhzCgqj5ca9n",
  "key27": "4RR9cjBNSCMGucop7QYDdRhPPVwWud5uaVcFR1SCNh6Ee8t5qTRRrdLVNy2zw4P1hThdZfJm5BWZHh2vSqQpTuLj",
  "key28": "5F2xwqXkwdxmThjXH7NWBEqsoFoXCCoN2AHbSFaNLqM82uZ5dNhcnnCmfyP6rC5RNqvN5Ei6oS9RLdeVLnioLthX",
  "key29": "4dwSXW3KUt28RU76jM6Ha6ivZTAYSZxohpPuRxJ8DvCLenDeDQ3YvBmfg9zRZcD9E7j1p1X169dnay8rhR1wgg4V",
  "key30": "4eKFcipRoR1b7WCYoEK5hxeioh1Nb6ynkzCeTzroyP56TRbdDu4sjKAyWNcihdqKBkWwruptSFuXmdBQCvYYRpBP",
  "key31": "4eKY99TvwS2s1EwN8S4upDRVB9rg5RctykCeVnYZxcExZdtqPTtW4XNZRKyAPuXLtYBjXreMmMLezpi8jbSNNwUs"
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
