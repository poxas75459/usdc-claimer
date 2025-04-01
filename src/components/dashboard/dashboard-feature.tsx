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
    "4PVSJkdzMehEdSMiRh6dH7LdRMoXnwmjLwaY9g15rxKh3ZH3UT7WkqdVo1Ew6dA9UcGP2GadJLay1nf8qYxK2mk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQkfQn3RqpvtAzubqawYs8vWZo1sEUuGBqFLUfwBoC5fa5sGEYcvnJqznH59GW3z4XhAs35yi8jba2eB84ZZ94s",
  "key1": "2r83ov25L77Fd2mnw4GwRAzGUWZVWroKBCJ5GXeg4tAg9V9Aa3a5vfN85Z9N8UCYZF34FuK8y37GM1WJjFLnjdQk",
  "key2": "5eiBHy7hLCGUREsrqtJqGaw7QSGcPbu8ipETZzH873QpcCDZnHY6CN65p4BHb6rNpm1gYVA11sKBR9eshgKGSbiV",
  "key3": "2RRicHbZsHtV7VF2nBnR4h4SedeFFmgGSrDah9aCzqwcme3sPARjPvJdECxC8LbBk2mkkY7xTb8KaH5rcQ7HaHzU",
  "key4": "2kfDWU9XuvFh8htcW41SZcYviaUeSgX8JTnbs9BmfUa4tjZX7mQrY9WM8d6uotw4ee4guobzStrKzh73h9P3EyBT",
  "key5": "LshZRqJN22rsWphr4ibeKZsAU8PwXJTNX1XAJV9iZRoU9kV62erqD5CPk24VtHtJiEXTGGdqyfBFraZWCr4NP6B",
  "key6": "4gxqDqt6zJd7xLnGmbcMuVQLKcS5DSiBvpAhvNcembS5cghtFx9asEsarEhWsoz32i5MNcMNptfJzPnMuzenjVJN",
  "key7": "2Yz9LSofGjQXNLhF9cCpxTYHuEd41CA6y9qtKWe54WXHe4ArmZRNCQ7787PRqQVuVYoctEk7nydTGLF99C8ep1t",
  "key8": "4hmRofTpKw79xogfJZMfSmARcq1qGzJMxpV4Xzz7ctEoeSexLkdLXrgE2VZyaS1XYQ39rLWiVXjMDX494rhoUhtF",
  "key9": "5Fngpc7YXdUw8MysFkH5ExxmAcCsuGYm8vDbDafDNQKKyq5XVYwNp8tBm6Ktzhg738cNLzBhuUeApRvJiuPZu7Jt",
  "key10": "4LN1HjFcfCDnrgDvSWYSJLbc3PHcXckmW9fZh5UiyNtMAYBcWrLvydWsvWwrsBWyJioNET5EX7QyrJ6KTzBH4rX3",
  "key11": "23fpJkYYMWdr6EamTcvTv1Z1YxtCRif1fjWjK8gG4iLZbY5jRXna4Creds5DRPpbh3jdq7HsAgntkbVFDbY3g1Si",
  "key12": "2CKp5v2927ge3ZMfoSVgkz64DwAXu7HrqbLofLu6inpKN2WRgsTkYTTJY8waoKKeLpDaPWgdLic8oKfEZ9rFonq9",
  "key13": "5rxFHMnDdfXgm5SUyBxJHNovnRHkN8xhhUBmPQKNZBZjL9gsRUSKE8Wwu8Fdy2tEjhDMqTMbHwShpxAGMU6KB5bo",
  "key14": "rq8AzB7ubXFooV1pzqRrZciLA1UsdDJQrHDy4Tta2uEkGw1J21ThsXV4D4npcFy5wdDeLSdRpohRtAFLcfAGR5c",
  "key15": "RqbyfQ2Z2gkwM5XUkcGq5hhdWFmbSYDfpmN1SUjaAM7fxgKzHkGjP7qeK8fF5PXq7D1SRmsYe7TKeySNaCUimLr",
  "key16": "ebKLKRGp6xVuHyf7kyWj5CDGvweiZj7Kjmot1ZaC5hsKtvGf1tqWk58sb35AeC4gCBJxmSzXw9scXeK2RBf8KE8",
  "key17": "3gB5RgFddsrMkeZBAuRPfxew1A9M93X7LmECNz5iTjcnThSjpG23ufRjB9pqUhB5nbnXohT7bJeRZo4Yfk4fvRDz",
  "key18": "dxfTKDKDUNcM9LM2zv7FaP9SAK9ndGBzA4z4vb3ZVJPyEXi1jvAhyFAGyaXBvuT6RzrETYa9W7a3LQY4eAvK12S",
  "key19": "WouqJUpsAaFHfyeCfQ6C59CdTdHcGtGahEQnfGwrJRs2CDkLfnQMLDXXd2gPfoyzL6VynaCe1FGBzqKDwJMMPbp",
  "key20": "4Ba1ZsawyUsuSBWLtC5yMNoLh5iudtuM2mK76dBGuJsCgWgqB1Ew6erUPLk59P8EGXzPAcFBFwBtyVVXayJGgFNU",
  "key21": "3HEBRpP12poYxWeB2UfEcTSpndPkgm3UTZxS7dmeeiK6o3uqBFDSSzBWDy4Nznkac1tCULCSU8yiS4Pn1H7uGGHU",
  "key22": "3KJTtXG9a55cwEqPpFLbHQAWBcMWWXMXS4Ga9jqHnwYW8hdyFCwhjHt4rBgr3BRqLmyWJBN7ZztcjeifgsyyUuep",
  "key23": "5cAcnjZJszaqzzrRozyNiwhsf76u8fpi1KJuCeyGjkNZWNL8ZcQMEnU2fDGNXtZL2DGKw8mZvcG2Mh6FhZwkTkxU",
  "key24": "24LsTsZYJ9wzcyburmBeyh2jDiiwB7PPqNxBUsMhw4nbotu1z6YUhpcRNkEenATGN86kihZPHqtD5XyuXvH2N12a",
  "key25": "3kZdYS1WBnT9db8CCM6VQcAzh8icwijNJNwjDHvHRafhnnNVHz5vCCGqS7MmPuVdYXgy7jDm4VVBrnRHfK3Ug4dc",
  "key26": "3GFHhno2YVGQDuM2Qfp2vppwjbDZkJyYanTnXKC9uE7UqhSHkaNEbxubPcSnTo2aLvaPbsKRX5qY6eXQ11yLdwd1",
  "key27": "5sDNUxxRxcTWJKDBNJvJv3jAgP4ze2yG8QhPMBhsWKhCrGXmMrUKyjJv6T2qBoK1sYHCPefTrZu1T3R8tXZfn63N",
  "key28": "59hjCoNLSFGX9LYjRLzPmkTagVJTgyDmiWLiH8rhrJ8PD49NFBxPZ2ad3A7qbcEAW1CoEY1KWX2xT5KtejWr3A3U",
  "key29": "uzMw91JMTPtDSbScBeNM1S3wptYxzCYiiRXavTkJswHxM8soZFgkY6gXRkbJc6jypqawTud8QLmuL5vbqGR9GBt",
  "key30": "4acnx92H4GjoCwnRCfXzmTx8Nz15gBL3QfW7bSuCdNo35T9rHXszzPwrDWPC5gNofeoSWpHz88WA5kTtCTVqzVS",
  "key31": "5oShcYwQARbc8KFfWo6Lpd9pKN3jJbnAbCuWi6KhmFLQ1E3JDCAGoVPro45MwDMc5aeUCbfgzS5CkN6JdbXAJKe4",
  "key32": "5FgUYCZJuqoeZQfBmVfQY1x6TCMDupmUufqkPddWQPmxLMqxo3yj1wXcXRdnKBQPuf9M6AjrovHHevLQanKLy8Mw",
  "key33": "5xVvjSDPo4p9Nh3VyhFLioQ98UEEgvp8mRNSSp37h9xtS2oBH3wqQcdqxFF7whunZSveDGGMAY5syzVKCyMGvQc2"
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
