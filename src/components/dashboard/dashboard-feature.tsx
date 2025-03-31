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
    "3zSyyHa9WX1FxvPQd8kRTGFSjsfK4H4GMBWqd8Be57zGY4nSvn8EvxVyez4m4TSefkZweF2KEkBg1CaYdwJUNG4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXy7ouLkiz1ECdYd8xCsziQNo3SV4eeuqEwGWh6vhgWvt71TWmZP2Hkh16YbhmX1TFZsK2qN4M2rEwR7WNhJZDW",
  "key1": "67oNdrpu5qsN9hvRaWqY8AE1HWYDCdbUfz4Ay7XgCbRsVeNUkCkDiuYZk5Co3bqJRGQ3y7NeoxCbnHSoRt3UfLpu",
  "key2": "UBjsUCTh99pweRCNVF66sr68689UoA3TbCFipKHLAVRn16yM5J1ZbgNofNyJc5MFX67vD2XTz9Qo53vCZ1kSqT8",
  "key3": "2GReuLhtbLtkA5S7k5FbWAfSxuxT6XvmGGkB69ZPVhkza9aeEumpyrRYAXcYawYkK3QREK34Rbs7PiubeJHeXw3V",
  "key4": "2Vnj5W9id8akywakZFubanK4Ki3SK8uWiHNo4Y82waWTtTp3grF7yE4E2J1c6nEs1iUDGpgY3sdyP1CigUYgBPgG",
  "key5": "2d3WvSxssXUJptBrqBibUyUzsYc6aGNkt4YJupvhmVH2eEwkjbtkeAWhjmXY2Yv3oqszNrzmo8xGFhBx9bVySMqv",
  "key6": "4qc6ek5QCL7iXdCjepV9PncL6yWQSrFuEUov1k6moW9nhEfDPKdwyKL1xLFhmhAsATS5UJds6mPnjCB7ozFuMsMq",
  "key7": "DGPTtYeM7qWi6G6ZYfbXeaHMyfLn4Xv84fm7WYRdioEh3FhBDxrPqrLhSjeLLYcBeac9dowBh99REd7guzcajtK",
  "key8": "5BMJua8KwK3wjvaL2bpAqo7WeVnWwvee13v13agxMck2u7eXHbBUVPCSAK1ejxK5RoqL58mEtb8tk88syLh9Epvw",
  "key9": "4Bg7oLhmCY9KCuFpZqYYuhVA7n2j7wFLHiwMucxeRCa7STUbvaiXTvxQxGS8o61bxiKbozsTPiYyadnJDViVkrUS",
  "key10": "bgcJWgbkvY1htDM17iYHhNq8KfzVzJJgkAmFRx1Q2WZSUY38FaQw6hZvJx8EQh7h91ARUaTjzP724y9ZC4K7q5D",
  "key11": "4Lb7DP3wzdRP8G4vSLmu1ezzFdkyscnX1AH4BUUZkB2K8BjbxnjfU8Mas2fHD5wzqLBPshxFx7Egyp2tSctuRQgp",
  "key12": "foJr3uHCyWK1rgMyyvcm7K1hsdEKBarZTUEyU7eftHvfsXMABaK6jR1BGbdMPREfpEGvi6PorXtgUVcvHEK8QcP",
  "key13": "4Cs2YixWC2xdUvNzmFZPkKdbGkoFHiBdn2mgpMUE8JJ9TcGGXFENaEdQ2a9cRNxhKZJ7ZyziqsSpN7LYPR9xUxQm",
  "key14": "5ifCshu6TMxiNaAKP9PnEYMgAj2yehGj87CZma4ickSsE7NrrcGWzy7ewwsHJ4y8XdsjHazVMam1fcANtsijJaeY",
  "key15": "47G9K4DXywcodG4SuGyeaGo3LgH9BcNNrZRj5ZuMXFp7PpkgAHK8FU2QLnZbUETYxDXc2ByBhcXigaPHrgtSi2Uu",
  "key16": "5AAc7aaU2y22AVLs7tzyWyypwVMw2x1tGSYEdXya1seRzAXyWua9KGajNDXVpKZf5FSxtch27xt7pXVX7Lq9Xg2P",
  "key17": "2J3kpVWyvYmDyW7jdHgHt3nDV5Zu4zkBYSyeVRi3Vw69NGuDUj2LL6aGbkKyVggwK1gtqhn5xSE2M4KVB1NtY1pS",
  "key18": "4n1261tPKiZ2WvPLR9dw6vHwPxqtUPK2V9dXsG1kUMd4mr4wkdmich4vtDxQszR4zXbbyPrZfhfijzfC2zbRcfTH",
  "key19": "jpm6QJWCGNLLLqWVnDegSnC5vewKccvEMZM439Pgdedq4jMLvn8uj19iHJaXGM87ccNSinyxgCbM4dsWTpxVG5B",
  "key20": "2gUPQRobSjTxczjoLmV2c61aDHy4ogMuAb3QG2BphJo9GNM8KbzUvjHfNhLZXiYSSYtKDuEq4psHFhchvJHYP88A",
  "key21": "48SSVarsfJa7zyfbD3LiWSat9kZvSuvzyjtGkNjVMsiprroPdBqC41iBziuNajNAAw3EZzwUWZknqGyjpDUuTLoS",
  "key22": "2oeRsE2q99x9kcZq4US8nbMy19kZDiZo1r9joggiAwTm5BxXxpY9G5FdgaWFoe8wepwVrmkYDmC6R8iA5EwatzJU",
  "key23": "53HUQmdVEmT6w4vaEtyexMvwxxcx3avx61SxV2wR7ffJ8ncRkXFDP9pnRFFmZo7AdMUBcd8VNPpvSA6Q1eCjurQN",
  "key24": "2zECqE3U7WTt7EK2mMwm8BtAQn5HNYE8um4ePwEcku6Aq6xxADBKMbcid271jn8ACKMiYQmoMQd9YnYLnSwhYYFi",
  "key25": "23UTwgQH3AZtbC3KFg7JPaUX2BcrnrGRHhotRPNSv4w29jFY2u5xgJR9ze29tVdmpR41KvdqJrf6tfN5rWax8ayZ",
  "key26": "juMfutU2qru9inTMR3NXXAM6FoNBKjYt5Lg5UnvSd4xtvWTyL5GHCNhEYHD1zSHDrJ55wBDocBkWAhnWcwnNksR",
  "key27": "4gY9zyKz7RGyYiQXmJ4KgEbGGn8FehjaQSBmMubF7SmkiKDszP7pDtjwkjLc35RY11hWYzszUjUUtnq6CEVGJcG3",
  "key28": "422ZGN83QtPx5uuyzfYLjQgQczjZqspv7X2dg5S36m9SJeTQtz5eC7rwwqKtx1uCkfT3QKkxFS1nepoARXGo6T6K",
  "key29": "WGSyiMe1VQgZyqWpXWV5S7RTFqVYrhtMt6vMVugRoTPVkNz6vaG9Muo1byCn5ojCtQba2BSvhB2RKbANpY7HEqG",
  "key30": "2vGnj2QACzZf9Uhr5uXfCsyr2FhLFk8coQU53CeNi1mskki8ndsV9gsM2ZqFimKQLd1QZqXuutcoc2vZEdGm67mk",
  "key31": "5F1Gcz5MLhKYJ6xe2idWDBFjUSMNEoJv6Cg6fawbk4zbiYoLcSKtj5YonAneCdCoHeKXxnx8AAUNSBkA1rG3Pikc",
  "key32": "4hPca2HJ1BbobpFKWMfHVi4BoLTPBixvm9AauU4rDQQcx2ssATM9oEnYtVE9PS9b1hznZn2jMooX4taJQGSqGDyp",
  "key33": "3m8u4fHXos78yWWrjtQgKoGnimByxf4fU42aqGTaFMtxT25sRfAHt9NUuQ2w6tCZ8ZKQ27DJXArWtbJFha6WG1iN",
  "key34": "3renVysAYXRKsFzxSKu6JgTowD6dwv95gMR38WhiEBDyh6d6f9Fptp6Dou8JRZX4E2BKmuUo66kXEdQ8pc8Z7Ss6",
  "key35": "3tz4goRAonYBzRCmoyi7CFLdjxHHCpHsSSpFkqVP8DHhN9hXovGAtjpdQZWrW7xgBU8vo1zRJacp1kaD3KD42pHZ",
  "key36": "51L7uNs9HmBDxK7xFUSATsePnjbXxqpUBFDuNzcqXUNxeYKr9inQvjbM454WTdjxtRtHhaTfmGLgu8ueYc4sDY5d",
  "key37": "39618JaYoreKodJtZ5uN8UL1dmntzipWqRrjYjZupkiDfA6D9EBAzqDdfdqXcVLdAbTpmvZTGjXfm71ThPwR6Zj1",
  "key38": "BNq5fxcMPpiveDXao6TBm5CzMXZaAjQheKNSbMiR49fdLAngDYhwaXckZRM1trPj4kxdTXwLt1ybFLFoXfz6VMq",
  "key39": "5mUVa5UQ3QzHaSTNgrwzh6SUaarMZFmxHMe9ZVZYQXdBK9SfXMntVVzvHgZoZJ53TBGfZWpBb7o1YRmRtNhmaotg",
  "key40": "4rD1PB9hdcuUYhpPh6kSYMwjQWkARbYPRKBxhLsF3eYu57rLuLZqap1UARZ5CHfdXxRQUMCgiubqthZApcnputmP",
  "key41": "2c2xyhuezANMkQSPmFKYyg1NiAeS4as4s8in8ZbwPD8hSvumZh2j5RQ6CHv6FaPnmYE1rqgNSxoEuMZqdPsp17wb",
  "key42": "2qx9bSR3uVY6djyNQKJGbtzzh5yXRhAQqXfiN4ypHRQowaRGLE73XEnsdz4xjW6Erz2NsWBpzHAgXVBFv1pg69dj"
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
