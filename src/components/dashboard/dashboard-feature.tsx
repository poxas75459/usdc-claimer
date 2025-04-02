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
    "c9y4heVP18ijWi8PKmhQQofTvwha1eGBCLQcKEgck8yHE8coub1ktKCC3PamjkFvKBTbeyQpRoN1gGVsEbioewH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JaD5ztFyTwuaLZ8yG9ENuv9MXcdb4QrEnwF59zYnZF5J8qLGx2WPbGUBtRcLZdnvCyCEFi3grGK6NRLad9kptPP",
  "key1": "2DV8YHSCW1s5CmeUKUGFVyJ9qToUoxYwgLJyVMmkywSbiH5KhMo6tjipDsEApKa3dNJzenMNimS9Zf1gQPZz9b3E",
  "key2": "4XNdPfQDaEGCCuz69B8xasEDCY9iqzJZjNCWy4jiNyUPGuxxVKQL5ZAaD5Z5nhzEo5bURSr4CSb5ySHPZg2zKabW",
  "key3": "5LXyR9RHtnwNs36biaC2oijAgAQY2VwwjgTcA1sXkUvNY49n6yP3skxaiTEWazqiz7PjiGD8yutu3meEs83Tcwxz",
  "key4": "5eLWEsgtYHVicZCprVibqoLoiJHF3sATUWPQyzMDNcB6zXnDBXoza8ecJQbvi97gPNzuhwUHq16Wucv1fYokt6Nc",
  "key5": "4pv2dzai6kSwDzANKqSvFRhnqkqUguXCYVmG4wGvv8kFVzE47ZZW5Hm55YfY3AbCWB1QyCqRoGJUoUMY5UCZWUko",
  "key6": "2SzT2v2CimT3NVQ5ieSXFiCTm8yMoS5RHZwq1YGiatd34GsGNXNJwQjZrrjmmmHo74t2oUx6NjCAGGibH4V97BYr",
  "key7": "hHeHBDPR3AfAGXBSs3XM1a34PnZQA1EsN1oYLnVVcSBjrEs6SFqBH1v4RZ76LvoB8Ady4VDDFCGSCgQBFS8fXNJ",
  "key8": "cBbMSL5hFns4j3i2mm6QF4nAwAbVnpBSxrcs7PW4BrLMqemvW7rjFrAzxC6MwA8gw9o6Qf83i3jh6EuEZCvJLff",
  "key9": "3KD1nweTnQFYiAaS2qTx337vaWvnU5eyZfi9iaBnEYhdSSSvASUYUdgpmN35QXdYaPhGDWtzxhgeZW91VbezYTCC",
  "key10": "wxWG3YppC5ocQFdo44AmhSJ4mPJpTiFokHTcgQkEFavVuxTsUEkhKSYxqYo638z6eNyzgaxXB4B3HEzkoNmroXL",
  "key11": "5Rud9P9nn8vEXNWW9uTns5oHWzjvHU79EhxiM4yVqoRz1UdzTYwvkLYknrtzJwZ6ysfJKn6SYqtnmTtq2ZXVA9jU",
  "key12": "3UtQzyYZGFCuiw2EBct6UkB71juLrVSt8P29Tzn52ryXRXQr42dkn51CWaemrDNP2eZtwBkjCZVDErg13wkp7eEp",
  "key13": "5hFKBN3QNENZ7xTcPBmoEZnMyWhkevYZPkNY7AYnNb95MkrZEsFirRHhw7zJWdNjbYfDp1krmuKWANKCWah2V5NH",
  "key14": "gPuhKtBzFdfhUYptjAygYQhKAEDNsEQ9BBB1JsnHV6GjjK1jU5NPLNypxB9nyTZXYJ875PHJCLStrqzhPH728MD",
  "key15": "2x8XoVRp75BRaWbYhPPuiLN3o82JED3Bf3yuqFRv91b29SRYZsyY75LuXqa2VLhYyLom7e8iqT9j4MmfbCkkxgVM",
  "key16": "3HvVNMVSQnA6C7K2Ugi4179zMTVvwBaoCma8vScA8BBCVRAQqXqXuGZrzMCuW4ReHnkuCsZtagu3o3DymYfvMW3h",
  "key17": "2jzFKAEcZBDofqaqwcYHu7PSfa6LiVwjwtrR17nSgby51jb6h7aYbPo8uQPxELGnHbUGZWxoKMigLaPJc8mR3Q29",
  "key18": "D9HCkhLd6orT3nZG6FxBJHKP5J9z81zh3D2fZThJiSi16jCUyJvB8n1aTL3jNnxFNtfEsqdjCfVPtWzvvzZEaPB",
  "key19": "3KpVY1KAi2H4VL3u9GYhn4cWVvvhRWwH9raA2yfgQ2CmtyTY4B7MgBHqQyJgfJ6fKBj3LUmX7Cbikqd7XpLCmsKg",
  "key20": "4mgdwwdSmTUmRfWBq3673XyfEoMpJ2eecG5HBMN78Kk9LPdK16u9QK5uwjdPQrXdTPbBSNspG8rKH3M9dzZK2uQN",
  "key21": "3duCgV5JA6aTZKXvpBCW479xQkWwHb6S7p5XnzanU39e9jhT1HGnXa5XFbNp7Xvp3DTPnBn1r9WEdtDpxtxoa5eN",
  "key22": "2AnLP8mMRmzB9Ru38EjbngYrKRy4uZh36p26fUJPFwet1SW8FzG6qVbTUYxKCDi99kJdmKCacR8Vdi3k7UG7beve",
  "key23": "2SCNPe1m4uz2S8c8pxr5YR9qPaHBS6Nr4ypouF7iy6rWk6CPxwK4CuPkieS5MyXgRnWXj2os19Aa41pUhvsAaxzd",
  "key24": "4K6ddZRTf31H3jdci99krUDtxhwfAeUUpzn3Qj74yWJyLPTYopRcYZR5YTrPyMM9GxkoAzBE1C5r8YqCit4fTkYd",
  "key25": "5yzvkmxzPMFjd2uXqDTM66PJQf5NGMCuWb4wFTjTg7QG9HvV3GgxxfLv4uBEyB9z2kKz9bZaCq2bL2qWkyFSwDsY",
  "key26": "47tV8FUfeFkDAvtrpACSRZqsxtc4oTtFxjCKVGuxRqfcM6zYg4gfjErgowX7XnhRAZDZbpxWPK4buerJpjpd3vm7",
  "key27": "x97Jr2FPB9LVsftcuiH6dEU3fBjjFuVnkDUYVhwEsoGx9K3tnHGuAXuenKJ94DnKuCFe6WfiVP8pa1RCsdTTS2c",
  "key28": "3rUf1cHMQ2keh2x82j6DD5CscRD68gfLifC9nmSXvRj5st868oM2j4VDqHzN3vRNmdYQnpC4ebZ2ZfSE9wphikfM",
  "key29": "5u13ZQr8jkhqbZnHREzDvA3G9Fu4EMvTvcBzWswwWXAE9jyP1GQ47LQ4ouhg8QJ86rJyXiRq7K6AwGQsZ3HXUyGs",
  "key30": "5h2CoZyDksyiQC7GDDKmHHqkMR2UgG3LBAzWMnfm6TSernE6ku7fFd4qZA9kNjzdcw6BXXfSutzs6h5mWNz31azU",
  "key31": "5NCXsqvqP3zNLwyTZ66e3xscfBCU84WKu6UvADJgybiBY19r79NjUA623yopNAFBZTEM4nxzHAvTwzY9ADiJ5FDL",
  "key32": "647dqteVgfP9GjE7guUdWi8awbWzMniT8SzBT4FRLZq1hDDcd1Fgwj7ofzKWUknGhHrRP7498BVsnBNEKrXh87xU",
  "key33": "5JHHP2gXqoQX2ivCLf5qcj1MxLEz3yNJHk7gAyuauyoFUdeN2EspGwNs7TCybkBuMSzixfyPKeiJyzwgijNziijx",
  "key34": "n2jf4BA4MLMMyVGYPKYCk97gDsTMh4GRSYMKLFdEwSMcjjg9nVRxXNPuaSVA6umjkKVKMHGuoKZE1gdscKCgz6c",
  "key35": "mAUErtbf48nborLinUDA1cxwuunHBeQKQJRuhhWsvDGd7Xh5PgpAJWN4wXQkSRMpE8xxqPXHy35mUpArfhtQ7yz",
  "key36": "2ykwGoKQvirZvZUnUSLezefq4Lov99sjz78bhSQ61oGehPRsWTo3d3VazkZuHVwDBoXqfFZ3kKbfXRZythWRGuSE",
  "key37": "556f8J1TB1uodSZ6qnBBWbK6pfENqCv9xBQAAtErKpWKGbzHrwhWeK7muGgiM2n43KNw4iTXtgJq6BkwBuM5SYtT",
  "key38": "43BSckC8t5bnSP8BJBZAsCufy4B9QMbuVoF4pUHHVUxT2AHNQ6D7AFWR4MCXxJppqYQTdsiKy3svnAibqnTATj5f",
  "key39": "5EszAGmL6YoBNWpMJW9GivMdUx16wGReaCNZYDZaK2S49ciJZccF8B8zwBEvaJD6GCMje7fE6KZWy68uSucQ31BF",
  "key40": "Jtix4o39oDUXTvXrVeVS4X3ecRV1uRE7HBtUi3hWpgGpLm2u54bdqUcsYmdD8gnxN3gWZmneqhfdCJxZaYN5mwZ"
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
