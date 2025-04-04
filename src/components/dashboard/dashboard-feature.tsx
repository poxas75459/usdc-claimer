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
    "3RFTK3yi68Tf6EckuTGirjD9a3NESw1VdE6TqG1pUA7Ajoty3EA1BSsyfFc8WmWXRi1NG3h3EjUycg1n4UeKA5x2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qM6nfMph97fSiLpUDUJac56Xg4UgkjP484yET6gRW4ksD89rDj9ekm4AHkAxKCimYejt8sKiD6EgzhPkiFN1fgH",
  "key1": "2ejotC5vVpi9vpo3YKEvJwABBPbJ5QMC8XsRbLXX1rghTZcYYz3J59gGtvXB6ffQDk83VAGPM5jjPEJHYcuABhos",
  "key2": "5ARbUHYwKxYzApP2we4SP3y4XvGDWr3Nks12fVy8fj4UvXkAh4Wu5fsApdYwD7dTvtoxTSbcHTyq3DUmQiLSxPYD",
  "key3": "3SMxLsSF39Qvnhyn89SiEnoeL24Ja1xCnVPq5jNF9M8XhAdotSVjtmtn3YVYoomeQJWAduW8FJRTDnqFsN5ZZ9U4",
  "key4": "2XFGsfHep8yrCrZRMghwi2NNvDH6MgDn89CSUaLuAgVBFzNztZVHKm5vEoWbYtnFzMcXSBq6p6Ridm9MbMY6acSg",
  "key5": "ad9NerzhwdNtRqztaR1HcMfJANe85LbS4Nhw3aksCD2usA4uWWVu5BPUSDx2XUFT1VcNoxEkTBAJQBbfd2Px4WL",
  "key6": "4SDz51u4dfACkfvbpigAc4pfXkBtHiBCQQRbnEij8vkn76aVTQioPpW1ehZiYRuvmr4ur6nDUoSoitP1MyZxXU2n",
  "key7": "57soThSFxkxrzbF5osj9AK5vMAkaf1KMeJr5wvmbLk7QjKGPzpQ4Mp39PMov5d8TuwAKpKkyYhxRL5gJUWBmoDht",
  "key8": "4vtZsSLurm6J5wXNkHHqHUYnkyWBErgYmC16NJjECRFLvHktQuxQ6tfALdFp7i3ZnrTQdgxjds4rGBK9s9gNWunv",
  "key9": "4C8QS3BuQqFc2Gw3TVtaky6tfNdDAvvxmNvVZEF49AtKh5juPnAonqLh7pN3M6HttBUsrjPDXyVJ75erS3jN1YxW",
  "key10": "2CCfqajSHodHsHPw79a6d4PzLuqoi3MQY84rzNkzRSyMqneAD88i5M9sV7DhGxfx5VYCJ46imjK1KWfF99DmjveJ",
  "key11": "5CzD7LX1tWDS5c5M9XWJvBSrhSkM9LuMUH6uYiMoU399njgTfpQhikPCPJCzqhf9PoQukDwtreZis3wTzAaUeckc",
  "key12": "4QzP547sXfQG9ppvTvPjd249bBPqoXwTzoQYErpvb9SsfKHhVVVBH61xqmnG9y57v1r56Uz6RoH51jfdK6cbtusY",
  "key13": "5bdbSzK2z8c8hueg1Uug5NTofQxMTGtPEFqAtWux74TgGK9Gyax8JnSULqKx2g5EY7pfiVyDtfubwqhK9NmDSZiA",
  "key14": "52VC9p1sMKGvyaZFvwkmPgDQJFVMvbeFQSPGTkKWBo23Egx7RjDnBpjfjYVvWzTb1jSQwQ1CJ15Fozb2Pm33tB8h",
  "key15": "5rxdB8c4AoxfTcBNRLYC7aWBsGNeHdDPPW3gzKaXHeXvsYEe9Ka6CH5krRjqkvjBrPDN9fyDZLChNHHgoVwwmfHH",
  "key16": "4csTzSA54ZqowUPibzofWxmiNZsN2Zfqhm6heX4greSUsY7DfuRxZhF98BXfC8nGyqZ7acnB2Ek7Anm3hehJgPxV",
  "key17": "3kvVryPP2c1tTGcZSsxDe7Q35NwN5RsMpQCv52Y5CSTdAn5hvMoAVJQCDTJHC9A2w1PT6PHzpT5ucrEyKCnWXmcC",
  "key18": "4yJohRw1gFmaCqXcuxUt9YD3s8rbymv1HAeBPJnA2g4jbUrfiUCHXKr8aFkQ9xvV4NRwSLgJAZnZ9321T2YwPF3j",
  "key19": "YhZuveMmQLVpgGwrgTs7PfHKVkSXzbKB5ZMaMFiRkLosRJBrQ3XZ6dUaRNnYBcTvaJLiz2boF6BMKXYkTf78Rty",
  "key20": "4P8KzeUpMXj2EvC18CwYq1a3JGKiQ2nfdbMcCnGkjTLG3qehwn83pp71XmvBXGSfhHGebWcXrD61weC2Q65jo1Zh",
  "key21": "4NUEKjaLirCNVF5u6M4kzUbMfr1SaMAs2rYT8RGhACwpC3jztazx7f6HPfEN8iMTUjF9EuwjSucA6txPRKDh559F",
  "key22": "3KsENaE71kWPY2EeceQHAPPVz5SU6rmS5B5qo4RD8MuzZ9k86unPMG9CJBgAESzrFzzxZLXiA9ZDDsBH9o8nQPc2",
  "key23": "4Vxrm2Lv7U6RPahR6L62JtohJf3hi6E5chFqb8kbrowhqUDWy7LV6oS5nNPJSFmX9VAcqhZgsoBguFSxXgM6DLkC",
  "key24": "4z8tX8sKZKfETSBj2D19dUFLufC3em8YCpEcVT6TJvqCQDnPehN5F5DPwr43BYTFNoUEaEXVQHYTaK2X1aQk57FZ",
  "key25": "dyA9Nrzi28G5z9VMrkuV69j4uHBCmnJE35qmKkfEnobEwb1wqD3yFrUEAdqRR1UJ1X9giW3cdESavYTx2dUE63Y",
  "key26": "584Q46rg7DxXar2Ju3tqtWa2tvoDRhunDKXUg4PAmpedYnLMupMpDy5Za8xhoWwVd9tTXmzjc1z98XFwMEERj5YF",
  "key27": "2ufjefVRnHTWf2HtbqCqYTmuXmHJt7r5GUsnNXrwYk2BtJJA9i4drU5Gb653jjRb9gX685ou2P7FnNxkEDYeDHCC",
  "key28": "2U4xbMV5s8uCMDPU1MJNJyvsJPXE62YFbComPydLgY48wkJ4aCz8LWyBGZUVeDe5oZC9zssNsLdyRH5WLUoF3fxm",
  "key29": "qF9EdY9BjQdtbVBBjAz1UEMczt1JS17Hmf8SwzYvmXTzRAwRdYpniFp6sNbbufJ6vhL38vv1Ga9WykWZz1REUgm",
  "key30": "3UWGf7rePBuRveupWn2McHafFemcVry97TeTX3TivtKRfjguzHTLxULwe45rtDfHsFyfaCsSYyJdcswqjqnXdzEH",
  "key31": "2K7bxzjnJ48haRpcMMCra6jEay56fN7Crv9LvQfRwPpEhmh1JTr3pcsfJHqWmoB8mn87qMnnGXB1RSx3SxRDNhba",
  "key32": "cDP5yrS1MRseQTB3hJMygxi7xx3LSms7XZAY1B4vmeozNjzLrS1JkzfWJqFX4sTb2MmQoWJLJQH2SUYgiJqxQrE",
  "key33": "3fWUjvZdjERY8Q9aJdFVGFah3jpNaVrnWw1vcaffhMZsD5uqaTenWPnHSVgpF1a74eHhida55cRdiuyGsqs4jsMD",
  "key34": "ZcXZT1beiEmhs1YNm9zXh9gyMhQVWxHtvu2hhXwsaMERZ3RNs8L6oqb3btpNoqdx15khxZaR1XRMUYzsh5x1rBY",
  "key35": "5sTXMHCXC8wb46yJUzA43YkYLqGn55mKKGFarBTaDyaw2LkWiZkod7Q2zdFQgJcFghAY3rXCUvmKUBursC6sUthN",
  "key36": "2JwdtXQM8MRbpLeT7PyJPkAJjm1fivkaNKvEYraenjc9hv7UAoZS3Arbz7L66utqKHj6EGxAp7ryGj24X5T3iGTn",
  "key37": "4RL8n8MD7Uj8XES18tGu4Uu38ZTae8j5JaGhJdsS44XZv1QuFfqt48fyHwfk6cZefegtoFb1FExtZY8i8qjkzKX1",
  "key38": "5z1XCAgNkYNuKDvEpBGAQ9o33GLxqXBZ9BGnSkJFciuG7F21k4pExVcHkiamgjzLfbE5Gq2Ctpk5Bs4gtJGgGSUM",
  "key39": "469eAtBMBEf6pPgz1D8DdzC1ajTcXsex9V6o4vdVkSWdoNukcsgLtGvxeTjTdE4X7HPMLcvSS5zkQxykTckom8Cf"
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
