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
    "5k6cKUAS2S8dD6hhFZWhEDg4Ehsa3VfgWRT65A6AXJh9sxBpk9zY5vuBNnJcJoNu3EjWwfzGZRnwzKTopjW9sJMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WmzcmtaY3Vv6JQPmzoACkgteTY8MEL2LTozjnkCbaN1bfyvjdWdzVWZE3p1wdsp2GEwv2jmBFRUPbXR9CfcDqBK",
  "key1": "28t19JgeTVhEKdtaZdYYoAHUdMUVphQ4JF97EPZNefLjeY88JX4x6PcGt4bpGRPKxoRR2LCcqtwzaJuYkgDrpRnZ",
  "key2": "5qYgXgvg9DgYsWFDmRN8Dy6Enjkk1grqwJZPT3HDZ2tZcqDW3vnDhzWRoAsSxvUiLSHBW9gthvuSCGdn8jAd8GiC",
  "key3": "5bnXJG83jZSmafeLjpGMEYhsmmRj7AQAV4iN7fpa3UhwujbZbuqFyJwwbAUFiQjAVqbuXuLYxQVNYcXDqmnh9gWL",
  "key4": "2BJqyX4TScjoEZ5ZqxHjc3dV6EJrWhq4nUHNCpYvyYhxAdV9k9xd4BuhFbHf32sEqBDm8fHVchCXJgrPYaApamem",
  "key5": "4hLuSmdUJyGM5pESYTnscS8JpcxnYP4xx3SFKhY1ChyR22TuqEnJ9dFbdLScEBntu9YdvjkGBeqN9Prc8TQiSbon",
  "key6": "3t7XXV29fSvbmcYuzSAhNhVMJpXyEHJs4CBiLXwhegjwgg3ZVUVHzLS89NLaHaY33ZjqZt2mp5QUBeP5F7YcTEPL",
  "key7": "2FMs9AeQEFcbwXqLL5mtEc6ExfxxjG2hPNvubsS4CHGrHu5hPHKnZuKEhz7Q1qwcn1GvNhvMPqGGc1H6j7K4mfgE",
  "key8": "BS9mX2UYmNCmJmCZiwyFYWuv4prZwRNdsK3mGD6ELMH5tz6M6zug2EPC2PjWHDZopg5TxoCYX2SZSaGekDdhCWp",
  "key9": "5mA8pEik3WWvWDqeSuFPU1vDPE2wCcjsaaEBePxZMhTqGggsq9rupBk7Nd34difRXBfJWKiHdGfSG7n1sYqeqHo8",
  "key10": "TYbbnjwgPdJGBBJRtHMYCnzNUzRoHPGbhTe2hxKXamJLpLALrvfXm6uJmsunX34K2XiKFyLi6YwESM1kJipHXh7",
  "key11": "56B3o3dRcUTwHJiHoumaY4J2naqJhzE4FHg4ZHTfKU4hCydpCDdTA6NYhZsb7QkUWnGUbr2unURxfhvVGmtGm9Gn",
  "key12": "4gNiq1EwjKYqy6pg69nzjtXakuok3KnNrmUvHfB7q6RmXWsRhrwFYTd4XcaAKVn3XnWn9vueR6HWjPVuGAZuX7od",
  "key13": "4V6urYLNwuNKECPpAw1irmj7oDHTUPojNGyckF8pcfbkaRyATyiHtsbmCNH787qXGtPrncMrnovjH1kLNbb1rexZ",
  "key14": "kQ9Y5Wf4zzFNhzzzPU2YaLVHEDhBDAsas1ZYzST7Dv96wkzMsZaNJqPoCWedAAWecLuaqNy3zXhqbUvLuMY1ptz",
  "key15": "35xi6G2zYGjFwjGwQ5wtfEGEDpECpZA1oVQpeuaxZQ8b7ssAoKrLwXyRdbGs1v57VvTuErT2QZ75S8VzSQLgJGKu",
  "key16": "oVwpvUhDWiXatfUPAfQhoi5GWxsp839CDpHipU9ydugy2eu1tqkTgwKDDaivh9C5AzvBAjf1UKSdYqXBuzja2p6",
  "key17": "2N5wFguRxHTq8EPr852kvQ4ArKnkNsv6moPvYy8hEtVTfLmSouqCFwZAVnBYFcmfQzkdtSFy7hBj88EdZo7EFnwP",
  "key18": "2fnre8MdFCGLYyrPKhtTqCyVHjWrG82NmEGrJAgerqEsaFwhwUwJwVvojudFAr6ug8NGfoC5U9Y1NZk5VjQbbM4p",
  "key19": "52DbSsTfjithpQsCPHHc8se5kf1LTftKjTr8fARLXBVhrE58rf5xvEqbd1M3x6K6oojMLLDWqyixZByZjwEobbD3",
  "key20": "J4PGb6ynj67uBzDn9oyghPs4j2pKWcwmj8u7FEYYbPjj4YqjMGqYZN35U3PyuwJGGKY2HG4tnCJQuPNZ1xmSYDN",
  "key21": "2JdiDECEGpMGPn5ibuwmhzkdpJFoe1iKzuwpUVHiAEpP8trrQPbp8k4ahe2Kp6Pzyjqw1TxMyxEuDgodGzE8TNcZ",
  "key22": "2VzKkP4pBrwwTUc1ZFhLm7BZgz7dMda6f6Gp6ZdqoZLKbs7uktuJ3KKnBdicpKx7YyhVcM2baK6uSSVLM2pnPZsg",
  "key23": "63qUmngxyXqsfogriQJHX9YRM39p6RN6Y2z7KufQEM61VsknTuPkuwDSE8KecNdtgUStkaMdLWkSpJBAJj2dbGfz",
  "key24": "GoG5eqGFSmupm9RRxByRkfWy5YgTCbgTiZwhcM7cd29pAYRUjLg5MdceARwZEMV5vgzpnrY6SuetAM1XCqqBz6Q",
  "key25": "4AYrkDnzmjq9vCcgEckZpH28WtibZUGVLhnNZDbtc5hwvZWv8WFA1AcvAvnkuEijThzCXW6aR4ahvUgMYXRTkqoc",
  "key26": "Kw4ibpEGn9JredLngwK75ArNuumoSL6CPDqTNt698Vgm6b6PUHpGvTFCWEiypPQYdFtTnsgNUFNaqtwVESVy3Ko",
  "key27": "54f781Ha48czX9xzzZBRGKvZ6mjiynoTkfJbzGJfv7ZxJxfGvTJqBLeW3WQQ3xkY51xmJeni82vTibDQJzSf6pgU",
  "key28": "cNBHAVo3snE9X4Qr5BdETnFWZHh9qoL3jZpjD5VWTS6esGzjeMpcfe3YQ3EzhznGj8iUpMfuo8VjJCxduaEmKFo",
  "key29": "3LEtcb5NxRHfbPZSNdoZCgtSh7Vzz53B5Shkg353xnfbCoVPnVPG57b8MsgYKdQFG4jYEa4BwAqVg1g4sui6YnbL",
  "key30": "27RfnNi6yRKRJNH4WQKz8DggbyiDpdmuuxFnCtzpni16KF1FetQ8o75i9VAUMTys8iMogf4HfZNLhsbUHZrFKhNe",
  "key31": "2nZHCLeuFwkN5QxxBArQehMjVxXD7NC6Ymj6tw8ERZHBm8b4gnxkqJij9o8K1Udbt7ryF2YgKKrDJETi4aSzFSUG",
  "key32": "vUwRBckQpcvncyvWoCYrBwtrBuYC6P68p97Kmw9ZuugSc45QnYZNzTkjuKbo9vn766RU2poPskT2xCFTe2b4vQD",
  "key33": "5VskqyNi1DrQ8MfozDqiXrCCWMXzYveqPcYZHfauwhD7Xrdcyvuw9znJtXw6WFSUdc1gcmma1d7Bq11Fx6WCm4nj",
  "key34": "36EBhgbXrzoFiCX3ejdJfW1iUoNrxMnFjcGYduneTx3sBa5HRDXjv7vDMy91ET37WkiMZGxZNMTVAuk15FJUr9tD",
  "key35": "32ie6rf47Y6WDwkMGMySLdtq4zHSdxLvSzDkgCVv6gS49zWvGr76xwVh6wpV9iF5CaKQCwCx6KxMCqyRtUwEU6M2",
  "key36": "5rPnuHvco8PneXzdRvbwnndFn6ri63Y5xW454YQeQEhPShfkwt2NfxczKzu2KuuCwruZAn4AsCNpFRyN6nRYMLye",
  "key37": "39KyWC6jutzZsJ8j62fyJWE8B6qhzBczzDizS5ZdjUhH7pxnpX7GywH8xtH6PzJwnXb7AT5R6Wj74eEaM1GPQRTJ",
  "key38": "23ufw4uX2oCmLLCukQmb6x4U8BPXCWXu7ZyXJPkSNX52BW8jepXDGVrunsa1KF2G7HqHLMbq1HDB2p7qHnnMfGRf",
  "key39": "3utCRHF2ycXEbx8aRkaQre3d2dhyK1A9Dd1oy7wh83r1sB2GWoJnXjW3NbagBDGFNkBbM3TxVTvxegDUHsZn1KZb",
  "key40": "3tauq1MQLBL7WUxxVG9XdHkSLs3PpLBt7SoTSZAueiEkf1owQKr3EXQrAXx1gP6ist66FAg1mLAri1BhQeRtpJU8",
  "key41": "3PSqb1u4FVJPV2vXABY2x6f1AbkMfQbhcWyC1DdWRq6jfRFU25XDaTf4GXr9A8fzv7TuQLMFSL8jtSB18XGEcPNU",
  "key42": "5daHoQ65zkwTmWb17wsMwZdCMiR2SBucvw8kag8ZuMweWVXYdwTSJdXE18rMznxQT8V1UrVEjJeJV6tKKpgH6wQu",
  "key43": "SgJ13xhL8br3X8e8JyC8NgBAQfttmvhdorRnez2YBbHgDhS6pFHnWY9hxqcoeicxS12RE1aBvYqS9FFMhNfALdm",
  "key44": "LxMyJq8MheV1EWDzx9Sa11YYZxfg3cMLGubKt4GXiiX9GrgbfJ59tzyzcxmHJG2RvkgJERL48fWH5jB22qiBkkM",
  "key45": "3L7bPRketaWepHEjcHuW6zBRsyepfMZmx7HuUMFxxnTYTDpxsK4XrbpA985jzvdoyocRKdBPzYjZHNgmHM6bqAmX",
  "key46": "2uMW6B8yp3j8mSivqHwXzswGBo4CmSMfxPtsnqX6BsDC4XBHai3UyJQAL9C2idrhLT6B5Tgce5Rfk4eR91D5ZpFs",
  "key47": "65M7q6G9nKpYsVLDMVUX5pygoBb4VMs9cQwcfeLkEeQRmEtrfUhzGEL5L8bQAceRMwymo6oyxw4AP6o1kYAotUaf",
  "key48": "7YTdFzD6CDBGuKfv2ghYNTtg25h3cSJU9MScjRDey2esrCv42E1CfyagvXQ5cqt48Qj9aeMfxiGk8EYTVEF6riw"
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
