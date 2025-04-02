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
    "3CKMNGULnEyZSifi4DHJUxDXD8rMRYBhtqsb72iGvKps4c7HcNKjiJmb3PzitSFt3WjpbaGEJpu6jso3ouT1X9zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyAE6aUskJG34pZjo99TAmwtEocHQu9TL7zMncirtabF6gc2RrC9j1d3Ji9DyMbKxH58pcMWLkMRvXbz4xsQSow",
  "key1": "4z8xXujdhuvhcZpn2SVkw4gTTXx5oGCXU5mHT1KH8xKDVirhaPA3crdbWJmavGbwtHUGQPcaWCopbz7VC6n84YsU",
  "key2": "37KREYBM78NLiU9BwFoNAftpw2RHvhKdWXSVxVmNzNhWCzhtqeYd4BSif61i2TBS7dCG9deUCMT6oNFPnkHJpj7",
  "key3": "5VRohBX7U2QCAfreWrMLe3GcPimKZYqYktkajQmZZFaCFRKtfPB2TQBGBZSnY4eJSuzTwHyx3mQiGD3g8o67bbJZ",
  "key4": "2oLw1sKvK1mYi8w8U4P7YwTMRPXMsjDN8RtwqYArephKSG5HEjvxUmyEdQMuT85ew7ZYDhhcWZ27Msnm6UdRbkUe",
  "key5": "3XwFtCt2wo6ynWfVCbB4GxktEK88wmG6sNdwQ9vrZjqaGNv4nzn1JKn2CqL5vv28CViaNX3uuPtnTF4zfXMcUvvH",
  "key6": "5UCgtHaWondR2VC6CCV3bA6JiEYwbkvb3gz8TCrz5Cpgut6hsL5LxJtTafXFCGTPx6VP4nBF5a5dKQ7nkBHc7qPQ",
  "key7": "2RVgcqVPqSm16wbwWuxjj6PvextQeaMTiNcQpKXKsEWVNM71EcUq4shECwW74oKHJMd9swgFoAgEG3NqQDm3KprT",
  "key8": "2NuAmScc6EWbvXPPCQBdj9BW2jjVs61iCx4HZakp2cEnxiSnhFXSu2MgaPQvt2B2P4JS3m7JDqpU6sXSV6pW51KH",
  "key9": "4X3qKgZX24CaR9xZkU3p4MchFLQZemyKY5b6aprnyBUfcxXxnDALREdZUHFbmiv1FYMEUPUrhScTGF6EZaWfikCX",
  "key10": "4nCRiJTwb63kcCjMnKzHt5pcgX7QD74PT78LTc4rzDohpv4b9UVBVgZ38HhJpcBVfr7ASsF5fUWB4Yc7EK4NPB2t",
  "key11": "3JCHUds1yTbX3qCKCECLVdKMyLApsUtCvydFkwhuuKGLqn2aKs2WswmqD2jgYGEKr5GCJss1sfQxdSGNSqeLuMu5",
  "key12": "2MFdwErnfnW67eRscNEGGxxuspevgZEhkhhaaaF3KeMmJ6H8bLeW2nnHGs7MRP9ZsKbr3yAcRHSL67g7Ekq6Q6ny",
  "key13": "4HE7SDXFmGnBvCRW7i6hGx2JDtD4TYnSWqoNZKW1WGLviZ5nj2KtfPWHv9ZCfTiubKWqiW69b9tWF35FwA97KWNZ",
  "key14": "2uAiz39FPUsNvbvY3D782cf3unWASDJgcvEuFBC9ZhqmnEHfiP8B75Zp4oLvMJT9R7zxEPP92TZhqFsLEFwZM6B7",
  "key15": "56cCbEvqDrGBzdK66m51yqDB5WKP1j4Ja4t7tKXfjFjy9Kbesy8QJ9VQJPQDDA56XtNkNY8Scadoury1jYtet585",
  "key16": "3SSeBjg1p9VgmVkuJ8CMRJuGsF4M8rgkcNiiXoF9ddydCT9EuzcdzLcgAbb4tp8YdFHUE1bjGyyQAYFy1iRtFtyA",
  "key17": "4xJBtFkjwFUNarcq2i5s7auWnJgC7TSQXa2p3QdgaxARDRbSz6ztkvJEu4WybaG4ZH4ps3Trmsx3p38431kyJ6t",
  "key18": "58U2YBHzBKUdpnDuLjkXX1Y7wDPeQH17QFptM6Lou6NmQdC9o3k83ER1SCfmH1aEuUpepzqAGStfP5rLuhxHTKgf",
  "key19": "3Cqmyof6fKEfiqxSox6XGBy1FMm9wpJQSg4SkksvhELdWvEYijLXFoPDgmcLjAuHWU9V2j7nhC6nsoTh7Y7WxgX7",
  "key20": "CnQ5zqo7rYDNT2vzGdsaevkj43YpsRM8SFgZu9dcCsSw7jBiZZn1LodkRpRumKPmXEtrToPpDptTrGCoYQuxo7j",
  "key21": "4jJd6PcMoNNWTwTb49FXRfb4W7dVLHsTm5i9Nf9YdqDKQoVjgSiP14Zu9USFkw5JhEoagq39zcqcvgfXJPM1Qtmv",
  "key22": "62C7QjBsntefFWuZqYb8siWiJ7sXHz7MqWQx7maqjq4xZnDtkuyfZjWJ9s6oBLwr9SYwDCQYVUFYuixdFswgQQHh",
  "key23": "57DY5G676h5DHC6xkLrWqcKZ1Fk1vunXk9CbaNDSPehPv8dMFsLdzBHxiAZpP3oqQBJyVJxrKyULuZNVxQWHXxy9",
  "key24": "5ZAnMdwRARAXyWvDPFeBoJ6KoM8L5MgvfLeaF5b8CrxGF7GV9AEUqWHBJEij3X9dFhA4C5jZYePhfcY4WFE9cM7T",
  "key25": "2eL6qXu5CfDknSZdjdLNkgR3RhUThPij4gfCACJmap9ywBzHyk62Lop3p9inRykKJMfhdzKrXy9UkRXqiEneyknp",
  "key26": "UA7orWetqDyMH2C1fFVg8qjiPUsdNw57XvycPnQjJahELUZvi3YQzL7bx5H9SZWqovNvkUFhiq9cHp4UJpNPhHk",
  "key27": "AaQHKxfAiConU2wxeUH2zY6kjCJQMe6D16zBeaJdQeKv5fG6W8ZV4r9xZ6cdCttkfDrNSkrhNRCEkWwmVnyXFYz",
  "key28": "2Q99hE7R7rnyEsYb1YxcvH3SWyaXdzyscX3Hvw7vpKM99LH7yiWbwLWMRneWXnWxtZ4MjjfZe6T9codSu8GpKVzR",
  "key29": "4QULCP3HyNNmKJub8TSR1JtDFwmnssSu7rJfV8bSkF7KJXBk9MYGh5MvmGmyF8R4NfkSdKinDnFu31LxwUMKCGT7",
  "key30": "H5Vf87VZnq6yFwzA8ieoTVrE7SJQyv4iCFmuF4wuMue4FmNBJny2DVYw2dYw7fBD2huv2oWKnZvms2GNzbpdeCp",
  "key31": "3b2NPcd5ygMGtM2EBiKKFLozL9WUWKm33aPX8jevCjHCR9iK9kah5STPjVvc6CUspvV2c4r6bwTUtmLcnU3icZsn"
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
