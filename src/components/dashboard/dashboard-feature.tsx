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
    "5QrbevLdPDNmv9Mvb2g4n2oaNj7xweqNrCbR4EN9SxughHdeQ2vYS4vWkHCz3RimVDXVdWryLxnq8h8Z2kip6wvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PW3DuPoPesYvZUYkZBfPijyBsyQ59mfPApqefSQVnPXFYGjyowj5dxXrWBNoWRftr99DsHQybwZFRvJvon6gFbu",
  "key1": "5qFmdBZfhwTAukNWEox58NkXk1GNxCV3wdkoERP8PDLo6zvTXWrQYzij72p7sUHCB3UbXiatt9oqw5X3kK84TsRW",
  "key2": "67iobQ6RnqaZXYjhDCFGRXX5cD7axW9u876QuwyKDddVkryLA15BKzcXQgXmmV2W6eeWcxFe3AvoJC9ND5iCGScc",
  "key3": "zFTozwLQzE1eLHNx6MVYYFHhQyJkh3Fa26Lbzp1WzHAArGH21J8VS7auQmC9BHjfLw7PTC9LFDyZf12o1w4oi6Y",
  "key4": "3DNpYNaVNZnGwPKwtMmtH5oNiLC4cCcz6KmMWJTZcaeDqwmBuZskURtnUhhnzwQkzVMDxgDZDicXzjvGMTwqtMPp",
  "key5": "3BftTkhztEoK4D9Qm7MKGg1yTxhy5YrFUn5hzhHRf52eFt9K4bXdgJhMKkcseKoRfPXpHtvtx4hkWcQ8ifVCMdzM",
  "key6": "2yhqHMV13RstfV8FGPnaK1fbhcHHfWZQEkvJhXvkzxxtaGiqabTE8CzkJ5zLcd9ndG1xfgFNzPS25pE7ducM15BJ",
  "key7": "2CrUi3y3DiYfo67LMBLYvt4Hvn2wUKVkjLJdqpHSEJTgPHMxu8PFe7sHZAdNqDA1J2jkjJ4okqmaET8tgUtadDhK",
  "key8": "44PdzseGRK5aLMXdVZEWidixnYqsZWoaqwvV23eJGmRcZZ89WtFNR4djcP1bBN844GB84Kz66zT9WLMNHt5paCWF",
  "key9": "3byx8wRMpNEYkYfWqbRod42WQLPi3uaXF99FYbG26moMjpaWwH7f7GZN9ppJNn5Y5z9ALQFJdYmm2zqUC4yfpTUC",
  "key10": "5HLybRQzrmvfbcFrW4vuuVZwokJMSAuuFLCRuRtvPqSNR3oGQmcNuHFVniAdDxwZY3fmX4Uvqw1GjkkFnUKESzd9",
  "key11": "PkYC7yBnm4qQLZ1vfqf2ZKuo9FpmYk22GNDLCdY1hnJsxuiALicTZ5cFvVs9a68g5AS95P5UUHJoBYu25ArW8ob",
  "key12": "9SZHYcshsADVM8wNA5vj1Boconax3cH9A8uV6TLuEeudrPK2BM4RpVhR41ZqknRSXHS4JiRB2db8hwSfFF9m9FG",
  "key13": "qfWpvrgk2upF69fioXY6qonAuT54YopDJ8hZSw1dpbjnw6KHsmsf9wfbrZfRxHbQ8xCJd4CE6YPqn6y2oHfHqt1",
  "key14": "8Q2SMj9NvPKKuHSakDJtJL4LNQFUY8KQWLXpqfFYRDZUQpi3s7b6xVnhwzF2q1puWCWQseiDLVA9NEBTXSeqGGU",
  "key15": "4gwRQrgmBXTd5Hsukoi5RBA2gan7sZ88U6Wd7HVqCMpWSSvhADv3cMcKwxw3WqbSgngCaBL4jk4MEqNuuftZzu5N",
  "key16": "3HYk94gCbzFWipmDefmNig86USaBsHJPi8HsoZJ3KE78qSkmz2xDX8tD1sBb8wzZ6EaNRcmPeNFTuhhW79GrqN5S",
  "key17": "2S2NSC9kKiEjer5SMQ2XuG4UJZTMS34wEWQSgqJME6jFWomWTrcCCg26UGG6eWPvHd8XViM3czgFFAB5taMrrkn3",
  "key18": "4d3QCtBZnCWuEtDusSmuJUzuEqY3HRQGAyEZFJzu154p7ioh68nvqdxMMsem6L9kLT2hp3pQJPbjS48bwq2HopjH",
  "key19": "3xwu9ejyPbaNCEWdsspNHeSNdDEjf5hFKZCAbgrbacTtcNzvHMmpvcokfCP2EKV5KwchW4v45pSaXWYwyQSPnPLN",
  "key20": "1B9PNUMq16pFbpgFJg1jKFYRCJUnAmAfVQkKdAFapSeKp7yGYj45k4WD7MneCkjLzyT9rBAce2ycXnQ6u8CS6HX",
  "key21": "Qm8iApqAQrBZ88Kkfm5n7hUxpnhTx4wY7C2VmsGmepB5cUw2fXk6Xeict1Kwf565M1amgWuQUbuTqJwQHXg8VLX",
  "key22": "2vjjMxuR6UwV1H5C7oA2Zi8Fnb8oMmckaC2p8YpwWMtL95hHso7SdTBbdz2Bj7P6t8jv6nSgwpbkKq9pZoHys8XY",
  "key23": "3Eov31t5wQwrdnjUmMddq7TzGbvbPNrqLGmq4zvfnYz1yX6CYKyHviVvdoMArpBM3MP9ebvMfrawzUJZXRB8FT5i",
  "key24": "2jxrGWwM5JpcEW8YtscCRNUcdMYZRmmYhaQ73DSZunodx28SUHtPE6AmXB792Kx9w8RXLPcJjQYqDGZL2qz4VBw7",
  "key25": "kL1cPoaT4toqHYE6WippcQNfz3JqCaFw2PsYCdQwPtMk4AAsFyBNyPZ8xT5zugDTybtxu3pS9pt7sJQJAYfJwMh",
  "key26": "2CW4aBsjHo8tmEKW9AiMNLAChHGXEbizQCNSm5Vh8jntpC2T6BP7b2er2mAEijmc9syKXWNVc6wh7F4fvdbtkTt1",
  "key27": "5PGJjqjjbUG461G1Hahik1jJ98bzzMdM9Znaf2ZHwpQGjJ9F5HeAq72DgoYixAh4xQSFQQbYU3QjYeB7vr8G4SYR",
  "key28": "4E9xzxt7XciaPhJoJ3feF2K8xUbbNRqzKHTbcd2nETEn5h5qxWd86SN2xnwNneZrSyY3hRmm6MUkSrX7sScfzWE2",
  "key29": "2i6Z1B5XF5SKQbRTQpBzSLKGMxKhFq9pmTDRSzXqiH3xHBtH2dZPePfWkzXeZMw15EEcZhWQEBTHoXiSvrkf9BSK",
  "key30": "2DmEctadhQuEC3vErjbiQt5FCeDrC5WMkfii55UqsYSQJxW5fbvfxGzhr4siE5VzGgYiQBhARSE5foyGP23Rm1Ko",
  "key31": "5fuzRLJ1mBXbZrLrbvHYhwfUE8CPTKs4BbMD5pT6Ktoe81r1vrQ5zkuPPFomv7NqRx36v6NbHZChVuXmzN8n2u6j",
  "key32": "3W3QZYpJJok29b4koeFAr6Yg4PnGGEeW5aahGX3kY6mQ6XyRUYfDRhieRpojUtjLMFZxf24zDA6VJYNwFmQdMbm6",
  "key33": "53YcNuMs1RKfefPysdbqtjF7T58EXATyNYLDQwgwDwth8TD6F7VaUYPkGxdZDdBLs4nvFb1Ek4tnHU6DZD2ApGe1",
  "key34": "2nkmwFTuQXmSHdi3t3DA8VLggoRZzuvJYYoVoAJKjN3aShxj2dQBqv9wYBM1wCYa3hM2w79E5W8FZ42BroCr2kss",
  "key35": "4q2fGgv7uuXHmfFRqfvrknFobG75X46cPAR65BZUrvaBnafq9fw726YPXVuNZBAwc461hwb45JTZ1gLPvqMR7UyY",
  "key36": "4ay7aPDCTT4cuZUGc5widBAFoWkqTaMwo8UMgFQ7M7GrjuZMfgtEaULFFDL3uy1c3TntCqJn25KFqcQkQpsshDwn",
  "key37": "38nfuuJk6y6QyHKTDGZgwGUsC89NodFcKZZgVzk4Gyu6JBwzBqnQdRTRmhfugbEXxrRpKVXvx43AHJGdqCbEZuDj",
  "key38": "3YoL51YSyRuwfc7FaVoR1TfTai8GAPfHmbQWYAKtLLoVEcTYpveMdTPCCHsmudYScgDAYzhR6LdF5SxqxUJTGJSB",
  "key39": "25WhPqbRLRovDibbioHvkprCGGPjC15KfDXF3FzGxJKHF36uFyztLJV3Wih4ZPAtY58xPFB598837hu6EfrdBTbf",
  "key40": "3mw9cisMTAx3amAmtkC4i2s8Tvq2GKn19N4zy4yeiV5Rf3qmAjfKAdgaXdYELmYiW259qszu5PYd8v3bB4wfUsm5",
  "key41": "47K2yGfZ1MuFtrPMkPx6UzSWbKWi8Twsn9PbMksB5KShkGLE56f6xxsPutmzpntLqQMTEXnCWj9pPF49nzBegpGa",
  "key42": "5pfq1LzsJa1TobcfMbZ1zAEhGpPszD7SoowRaRvmYFi1cUVHJnLLNXsfZa8VEH6Xu7UEZDXmj5nxJ1YwDbcbPvbu",
  "key43": "4aKZM71r5RCzcxAPUD7KDEJp6vZ4NKhi6vx2o41xwfY57RxK4VaTPd6G2hMxThZW49KU9X7M5BAfYVJDycAcSQBY",
  "key44": "rVy4qKfNMVFh5crUGYXp3aGJr3Ac7LGYSYPfbsadb6AFo7VTnP7dMHPwzmLUSQKhfqswjniotQb1iPND6GAmMi8",
  "key45": "4ndEHbuw6iS74FXtmw1M5Q99dY763i95BSVJ5BUKAgdHAY25yhJ1j8q8y9QoR7oKdhdUCJyqpNZ1LmtfAjPjUQDm",
  "key46": "2HNcBGzNXRFopXBNUhsmh87R1XwD47Yw1mGVn8QfacD72jaV2a9C5WjxMm867cXsTQbvzg43TSjtXRB92GYtadAK"
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
