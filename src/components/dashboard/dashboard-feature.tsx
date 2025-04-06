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
    "4R5zFgQYC5cfpxw4TKb8o35EfTUUvAJyoECv5juBuoLUaNsXDX5Lk52obcAAPmr5ADvsaQ1XyyjNkFposbochteS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVypDXcLc9hBRh1yLJAQYDAhN4u5mLHtTyLgEBkqZyqC8ugf2YxaVLhbjFYdFrURAm3kgs1FW5jreqY6Npy3Jop",
  "key1": "4z47xaNjsY61wdp8tXEmcFbNGfihyuyEArENKXbT4mf9RunmyF56gVQrnNQyAjYkGdcgvmonMTUS7LN6FrCZXFzq",
  "key2": "5g1unfSkWZYmL5iJz2HXfDSFRqeZ7WNBSK4wdWCM9QSV4vR2s9n3LNwNR3XLMmUCmgq1K7tSdYTStvxrfbjiXatN",
  "key3": "5ZbgaSXb7gTw4Tx7XmSFSXGBumuJ4Uiq4KPBVcVN5CAvzp8p8RWqaxmQWptrLT2mnKFCrA6yJjisHKGD1XoETfaK",
  "key4": "NG3x5t7Jvq9xjE9UBy5TgDeHoeCXFyKtshDYtQkfTRb78HdvJtrKiLAaD5QbAY5uV6hsjsHFTsebFWK5SvBHapo",
  "key5": "5zLaKpjBxd76XqXWXGZC5aCeTKbxB8zgSyXTbit6u7GtK4UPX2sSre8MrEGs3eCmagUZnuFCvWSg4WfG77n86zbE",
  "key6": "5aGL7HddEK4pG4AJD1FxKhmouf3vYBi5oG8y9kswjkesvvgoK7wbXYo5KWa4dcV88P71fqhsaAexPNYF58fD49St",
  "key7": "5EunApUVGXtjJmhcERZt4k2mjeuWLHHR2kXZjHk2JQhfQvEqDJhC4t5RVXk78LvRdZJ7yD4rrkj6QsVeiM5x7EV3",
  "key8": "xYLEX86ruby6mAPPwYKzguQyWx3iSN92w35KmavjSgV5h9ipMb9pc5CcYYGaCqaDBYwyKJ3zivdtAht99VhiaGo",
  "key9": "2diqD3HdxnyguZJqfHfaojorThw6u9jgXS251SajhJ9EGwkAVehHfHPTGpPqLyzYvSjTYny3V3RMgAQTe7YBEYmd",
  "key10": "4kMLvsxueaFNreLYkqSikLo3hwHYQkYa718PW9jDaJt8yWG1ANsGniMvhhYnKAefuKJmQSUCWrnfJbF8vuzEYTuE",
  "key11": "YeEZyp1xRWP8XDob8h5evJ6LsKAWQ9qtp98V2xaNCmYqC8e2Z78zKxnUQrwK1vQvGYamfgfd9WMUuMEHsTUV1P6",
  "key12": "2rssA3dD4wWNg48XaqN1WmfLysJZ1JH6xVj2y8EEG9ySXrQzF7t2EuV16fs2mgnkkui9DfrdTRNM2BRRzubfa51G",
  "key13": "2viyHrHivzqVcft8msUSm5wLRjnghiNsejLMY8H2DwtNgVuZFm36uZNqyUHt6Dk9ihjC6iszM3HVdHu5Zu8koE9e",
  "key14": "2xsVgE65kyE8F4daKqbHNykTWEC4JChjzXCdg9mnqvAg9yaNsjzezzjMpkKnyJEdEcrkjXQnZz5SPbSPU13Fi4Zu",
  "key15": "2me9ADFKNT2mKrobQCxm1BLTMimzdYS4ZNvmSkTBhoSXFps2URUEYDu7epjpp5S2WUCww4sTH54mxu4Y5JcaE8F",
  "key16": "5ymrr9k1UPsG9ZWgpBdUUNNH86Xcfu9kkiZUZTCY1DRbJa6taHW8mnCiR5nz12z9gG97MXckVvozTWXrFbhyaD5B",
  "key17": "4WjWWeBWUbFVggjqhGzRn1uSFffxWqeRmbCetiRrertnoCCaDvVatGKp5QX5KzcicNvxiC1p7PBGmaGtrL7dnRMo",
  "key18": "4snoQvNbSpu34qumDhpU2CdaApHTqTq6pTxawaLVyeNDy4s3rmKsxsT7VbzUVzFHpvczEsofpFxHKyHGJtvDq3q5",
  "key19": "2yoRfGv5ctpxAfY4DQRjeg2JapoybSZiWrQh3UXh7C3FgPGreE8ZQCWAUP9oQ6fBDj9NUrAKC3iRDDSFmMpWvyfE",
  "key20": "2KBLoN2nBQ5BX3q3yxGnEppZNNvCs1J462Rf4qSGtN42DTA6zkPUsGKz1gk9AgqbSbRDyQYvxSZ7HH2rb3ZSBrRa",
  "key21": "59Pwc87mUd28Yo8ga8nn5wU93xWFBuf8oK3Ry9tQvHFrGu76ERsKq6otVrfpbmsPgYJssEg3XXGMVjCoUo1eeRrw",
  "key22": "3YKh2irqJVuJ4a7bkVkfaGDQLKZE3wB5gg1pUjhhKdGtspxot9Teus3fgtuZpi9B6VtGJ73PGJ4sQzqCmWVpgBWf",
  "key23": "4mJypeP8X6Rt4VGgFUKug4CkaKJVxMcUKpbY3yA6AbhamuaD3U11njeTy4E1wfHUTfPq6XtumjRNGVxrKUH1iNih",
  "key24": "5fr3CtTdxbABHYASXJsWmp76GAfTXaNc1tcWfC2fUKfS3dzgZB1qpZhxk9u65y36Z9NP92wTVX4jhzhirTJDm5Rn",
  "key25": "2ugqx8SJrg2KA2z1t9PQog3yTDz6YPVnrHPn8wspvpM14QbaRwJECBvcRByqciJ77sKfbEwRd7YtnVnfxgJkhmuV",
  "key26": "3YmaLwMPHuMXooUp6NWiA75iVyee75myWRb1fMZcYoB1GTvBjynrPqNehPdYqs9hF12kwP99unpkQMnE6Gk4cvBc",
  "key27": "66obbKFKTfVfUFEcV3SM617fvsHuxNTLqBpwLf47fA1jcEJYQAA1FCxE7qsNDaioTWN255B8Q95VPXc3aqwnK2ji",
  "key28": "5cCtFFJHT4JMk3oQYtHRVETxTmh6tRfjCm6CNwmZa8JAPzWkkjV2MpQecK3QRYXXtM3WdTCAiAuqezeQXjBVR5o2",
  "key29": "5Za82kHRpYXzf3DozUwkA2a2n1EgYGnWp7srn9pNwrqKMx4EmJtYFbcgjUAhw4WrMnjLh3jJtAXZaWdSii3VjSc3",
  "key30": "5C2HqeyfBsAyrseQux6QcZRAz4UzxAoB5F1Ad8hfU8s979XjQQ5ojbhEhBDBv6mrdCh5ABsgeGQJmS3mXPWQhPsv"
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
