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
    "3gEe1crb7fCsF7khMUYZ3EK7japmouBDRR7QKnckb9oup4Yt7uLYGh6p6D7fXFRLsnkNYiWymznV2r6dFwoKoJMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uoPrRUwgLnx9LxtJgwPzYbyvAxdpQV6pEWP5dvTFQR6HczcPKaU7FyPAx2R1hu6XqnynCC2HWKQzFD5yuGSS3Hs",
  "key1": "EF8gZhbicWmyj99Wp9ZHXi5ihgQCk99pbfqxfNVBp8kKmYukRuu3T8VHipgL5bv7jBbJvF7nvAzq6XGHC3L48xj",
  "key2": "5AKYrQKeNEao3yAg9q38HmE8YL42aGgTintmnUdm1XV7rUdwq1JZVRmbcw1rZ4G4QMujeXrzrPDTzEZ3x5A5cJSC",
  "key3": "3daMFxv4SshQn96t5EN76wUBzEfAftdbTTege2rR6KxiPjVxGYxruN788uE3RGETMVhXWFjtQ4GjoMmFvrwMZE82",
  "key4": "4XbkUu2hY8TtcGn19fJeRNmGP5gPFje8fCYdoUyuGyrf1TfdTUzoYGM38SpqF5B3pe8ZBcnaUSRXvTu5F8SeCyyh",
  "key5": "2mJkkXvDojaHzTaRZivumb6pLMUK2nZJU31QquSgQ3XPF9AQgMZCFoUac33TVNvakTPH7qmQb2Nw5LQh9Bk5gayc",
  "key6": "5Tgd4MKrzgjegUkUgpxnPbR2yqLN4HHKMogMGNaJN1sJwaWkWA2btFDGwuxXNmsSWLqcB4jjaUodMD8iYTiDeHHw",
  "key7": "2G4FQzmKYPohc3deYxL3mvA1x6Y1aNABu9YeLCGjrGJLfyeghseq3Pm3jmHFHj32kjp5yhhgU6ikUv8vvXhVmKjo",
  "key8": "3N3C8tXV9o8momC4cZfn4rs8CFBc2UC5kfj5SG4VGZapdJsrL4fD3V6MaYsCTjWckPMy9c6k69bmnvA9THZAhFRG",
  "key9": "58W8QGW8qat33GkRzE2yovPdhMyxeF7DyeCiCw6rDDtcpgoVxVnJSrhG2XGyb4wFCsgkLT7sidwm1JMx2nWRdBkV",
  "key10": "4EL9UeonjfhdaonRWcYEKWZNzwDV9jaUi9jcpszgYH71Baijeigz2xtU5NRWZvZHLwgebhCPFJEE4DNgTHQJuirY",
  "key11": "4JGfgwM9j2yZwNwE6Nt1s1TBpmu1V457BwXxRo63KnFxVuDmryDBQQxDpy91pPTNjEjJ5triPcGw9zhZzB3MaKm1",
  "key12": "2ZRNEhRr6E2JFzj5FVHdGcExwBby8HgPcNRbQX2ytj9T5CfMApVTwso9ePmzdGuQfUnbeDfpD8ogmJVJmfDDMoYw",
  "key13": "4eyFzcUjhDr8yCaZf5bAdmoX8LZcZvY2RCefxAAeKa3AmwPMAhiJ8GUTn5hFRpZMVKwCeFwAbcGJZoTo4pJpQK6G",
  "key14": "4Vba2gUgYf7UTvcTt6zTHCJmquGBbCek4sJCDCQ576iBDN5CeaStyZFTZ4A3iyKBmyTvcpFYyq7XZ55c2DSRb5ov",
  "key15": "5ZLWZ1PzKGKHNCdAFFgRGhovwpvAnZaWWgjL8U9EANvGxXBHbN3qBq16M7ftevefhAwbB5YWTmQmEXyCqUv9YLwe",
  "key16": "29TF15q1wMVJosi22wztkFsSeUXZA239BGQUGxuJxFJ4xJhVb66VuNYKxuTyAXCRc3gTzzZyAr8Hrw1nbc1vMPyk",
  "key17": "4UC7ywK8vGGjTe71fr36gEzxzFMDFG1EDwxiBSNm1dFUkvfVWqU8pFjR1iKR4uRjeKpJcBzKm8n7Ye563iXswb4n",
  "key18": "4VWNDukKJoq3cEw2rH9hRTsYJHo5qLtWkehKRAjQwCazRo2NaAmjK3DbvwUo77qf9Nc2UKggLsEGXuWPUnVb9YEq",
  "key19": "PjQNk6vfDHhXYhY8asv4Gin6b5TGtmhAx8cZMzkm6vrvzdDu3SAkTm2JzYRHTeXgL64NyNaxCPtK2RJ3a5phru5",
  "key20": "4EdthzSwgZMQEDnUFNd4j7cb2Pm6iWDMKT1dFbJpoHTv2m5keS2SbBta9Enkv46B1zVFdSiev9mSsmkhFjwnFh4x",
  "key21": "JvwPJQ2ikAJjmg2zmnbfwRSJ4AFFwndo5ws5xMVHkLEhe7gSgo5dsWaCDmXYR5XFX79RGz4vpB8Qkr7GX6mYR66",
  "key22": "2F3f6cKiRoemFriuCjdSxgNaxbPmSK3eQ76LKpFpVCTECyX2DzJ56TWG1SaKKh7p4GUx1Gi4o4QQ1DG1tQMpABSd",
  "key23": "dc39RUgppDrtq8ic3nojhvhLesaFSvto42ERtmZxjDFqeFWyCDw9BNwNw4HXDjKXtXAFA6jnQPA2vU7C13kVZfe",
  "key24": "3ZNCzJ5P9VsBp2how6MYY8cuArCpyedPmkw8oSyJwGzNNjKRnP6YsfC2RNPo4hjtzj47yujtLwcCv9EDyFTsB48J",
  "key25": "5Xz2WpegUWN4Sw6VpFp5ofGgnPrNoH6iRMmk2Sq4M4WT9sUFgxa4FcswTs8tQubmdEX6nQvwVhF39ArGy2a81zdQ",
  "key26": "2K9N7aUW9me3dbe8qZRwUH7GgUFh4wB1jozUF2ZxNn7Pf8s2DrfGeNAHjkvgHTVz4UV1NHqhrZSUTbcHd1ToFdYM",
  "key27": "5m1LK2dGuz3WJcTgyRZX5z4zYAGFHSgRiP9SbSgyDSQgpevcoPugTMWJh1xWEoq6NpmeuUXJmXWZS2GyKKRQ2ezk",
  "key28": "3Vevdp23hu8ZSCsre8aquzZKMymomZYKcFFLADNqZYRBjKK7rM45s3epuiv5GTEP9uW27Y7KbDTMjTi7tbXQGcS3",
  "key29": "62WjVEijopz628B2bmGkAGUjAuFNKzsebeBH8Dy253F59C64DebvpZPw35PSBJaknBAVjBfyQt3WcdVvHURVrm7V",
  "key30": "2nqSrSEAKtAxhpNmMw4rXu1Fu5zwdE6tr5sjUhzys3tmCW9UrSgoZyyDN9QQGob25u85WasiRAeuGg2Wrjj6fkcS",
  "key31": "3ghH3o2MeHBpq49RMu628u96w1CAhqu9Q7hTGtjYibxFwuyL6ARY3WXd34A2vPwgSrQuewDGnU1HykyoTaYX28MY",
  "key32": "5bwPWLaHirLd4Lh4iJsbdoaWaaJMdkwUxXrhrdC4QBWATNqm9WPWm7dAs1iFFxPs6KjQ4S7qAza847ekjg6wmGms",
  "key33": "58i9CrppzKL35TMPbgVEY8o6RgGrw5dkMnz5UbjkaLBEwZN9cV3pkURbjLnyJLb4o269617g7CL4w9W83nzukThE",
  "key34": "3gKmWErZf4Viu3bcDfBMXxqHPmnLW3GdJLMWgjYXMA4GqFUHSY65kCWW5GwjAj5Vp1afKBWvaHvKeFD5y5v4zUDJ",
  "key35": "K4pDCA6t9nrHbRwidq8PNS42D2Fbneu3aQqiAiAFEYjasr4kQwoJ1ygEEby35f8cGCHJFxjE3GTLzY6NiqFFQUM"
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
