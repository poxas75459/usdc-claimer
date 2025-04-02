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
    "Tdxq1yV8PJXfhPYfTia7PngeWLRiqno8pdmb4bxvst327WjYmhb3tYLchmT7jmXGRp5f3V7RYNrzGEbA28fGaxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GCdCV2xSPURU5S2nPPkAzgjdLaqUEGPXdbeWgmSGBZbQf6k1cdDSHoJ8gH1tAr19L7SoyqB58Mwjga5zuSx5y1f",
  "key1": "5hVeTQ9xyiphZgQULgr9TmgJP9iAkyxwgdpmGzGB9261Rp5ZfWDm8k6vpu5m15pTtpFvcZmEgFU22zwr5re8LVKW",
  "key2": "61LQjJb1nTiPcbUefLnPyNpN4F4stwiVkRSztqvy2ASUgFW17ZM45dRmB1A6kvCBvesLL2ELjHn7RGtXeB5NTEf8",
  "key3": "4SPG6NF8LQWm5tHBUmijyL9heEDbywc3EDmL4oRdDvtJe9Q7bE5DzP3hmf2bTdUB6Vb2DGgjzM5kkUs4MzAfmKYa",
  "key4": "4JvfP7xZHiWqaWs1he4mYAuNzUZodtMYd7wEMJczbqLsBCzgkM13sbKmuanBR8Um5UsrmtG2jg2GHFvWvrJw83gq",
  "key5": "5rJxd1P6jiGu7zFpwN9EW22BCDRAMqoZMxAF1RMgKf6C94qA8jJLcFomHpbPYLuc5BYPrMms6hBJgfwtRF2Gyaub",
  "key6": "3puRRe4vDSqUTVyxG67mxqSosHqJ8TRCaZGVD6ATh9fXNBdpS2QQYbMe5rXzdZkqfthq3c6jgzLAVg3sn4egce8E",
  "key7": "MSA6cbKyhAZA1FYVYAR8R2iGW2cmRm3NqyBnsYHt4bAdQTXuxQ8UEbS7B13PS1mYQLHvuN9ucCtjnshjUvrzKbp",
  "key8": "2ARYjX7cgE5Ffd49mLsmxRhSmvAPxGfUMpZuACsDKmWoNi55wD1bP7roksQDUbGBzYydQEma5wjiKQDdeMtAi78F",
  "key9": "5wMustpKMwgg4JJw1P1dG5QndicyxKNsoUriaegZ1cSF5otaG635JvmWJhorT8fsdxtN3WgZERdHBpUCXrrwiirF",
  "key10": "2UAud7q2FCG5PDSKaHEK5zkcCU1vZK25DJQE1SJ21CNLg3GcndAoHBn3TYqk5u3MMfZyGmm8VGZTp2AGK6Y66u9z",
  "key11": "51HKmcvLoHEuw172dCyBLd4qQqYCnsYkZAmULSFm5mVFRnqtMMb7crX1BqEeHtkbQU5pgP1mtyXwmvBREaNgswDq",
  "key12": "5FhqCiHMnykSjaTgrCPSQh8vKkZp6KR9s9AaoqMxPpmyeG6Dfq8NiYwmexYVCs7LmHJdCQz3E9GzXiqV5NUm5swS",
  "key13": "HVyNSVta9j9xZaqyvVUQbnfzF6Pmx8Q9bei4g8QTZymBeQXKp4Efqe4FNkyrvxBKHB4ZQwuMV8cnPJhESFgDgBJ",
  "key14": "4L4y7Qiq4SzgvEmpgZxCeodf9kR3MQw9zJYrewy2Cd47SNeXHeWEEyakcvVSHpmPWmNVrDkhuhYXfruGgSjWeobz",
  "key15": "3dhfBCAfLqcWaGymjjzYtwXtTAdzhmg8YnRAycGSUxfNZDw4HUsXkXtkjVfBRk9G6S3WiXQN54Sj68cv2ircVsx9",
  "key16": "kA5Ka8PkjydQW3JQCmzx7rCL8xcw2AZCoNhamASYahgcF3drQHHgWc8PDNv2KtxJWA6jUaYdK4bvSXwNSZnFkvJ",
  "key17": "2iGpPaWCQoG1ikhS8JZd8MS42oyqVosFiZ9hPXUgC318WDgHSmcA3coPF4SXDNkmjc2d191pqVQs5LuWCzR7HErM",
  "key18": "3VaXSz7omXiQciZAefn1yvgxkQwuzrXuEpASYKBSBFFbdnyjLpwTbuWr2GB3EBdRhewE4ZrEVHchNGRDgs7KVbXG",
  "key19": "V3YdveJYHgq42KrjoKXxE7oq8CTXvG3wHLTrbCmeqYirpE5weiCDM4T86VKjdJ2Z3Yu3fCGMppKY3G5A798gyZS",
  "key20": "4WMBquwdjvFde7KxsTgJnsJWKUEbizFFUsdCtBtVxTzKMJodUgVCnVKHEEkkXmVVeAs5cqc7kkEH3tJFM2MsuyAw",
  "key21": "2d9mhV7uQLhtH87A9vCDQRmmJtrDv6RVmEWyatCKGXT5WaqdRivjM5GWC2aiRwpvwhVV4JsTE6xGBurvLiZV7RiA",
  "key22": "4ocfeMSxL9mvfQBj4mjdFqZ4scGvTyU3JKewxZKPkGU1KHCTCvP3p7umErJrHeWiahTkBUbaL5MCUx34f77i58WU",
  "key23": "B1ZqmEbaSyaiCcQJRV87M2nTkHBuwgUFBZak4ycs9G85L3bxWWM58bKNuwo1TzQKqUSUCTnBnav13Twn6AZvsv6",
  "key24": "5jvfBMx9cqwRAxHEUvQjhVf5uagAkRuPSp4tEf5rFJWPm2NE9Pj7kjRjXuqnD5cfqHuHCzteUo68qPwT5zx2eY9U",
  "key25": "2dPLUyCB3bMW15rEziNBW5DpWXUQA5NPU1th6VP9fR55oRqtayvrS99TKtisRWuEWCNcQqtZpcnHTGsjp4HgiK7P",
  "key26": "4iDJ78qMf8ix3s1f8EXjeyCyAARXmQfyHBd4oq2PYsS8zmZ1Zvzeg9AN7DBkm6aMubbHB7BoTznGwQgWfu91GZFE",
  "key27": "3DRWrE3PeJdGkXXeuS29daeaBsmZxD2aD5Cjd8vjsoVFzt4yjWCzpdhL2c6esZUmLYNU5N2MH2TWpq7ZjqdNgkrT",
  "key28": "2MuFzG47ksBuedJuUWU31L8VJduRh3XD7H4XCgv3W8DoCJs8cPz2ZpJEBvSE36LhL6ykuAKzafhyxEWbYqhzfqe8",
  "key29": "5mhQzR9FjX2CtfUc9uwZZEWoY6TiuouAUL7UVXcQibfFoHypgCfabVjHX5fmMSmS5B2GpVAvtT3htGtJnFXcEixj",
  "key30": "49tdmUnAT5aazak7LX6xFWaK2J3Yq1wNfguiWasgDMsGkdpbgDH8en2Mn3MVWbUzDSewkuaHkfqQSDgxHJHi1ZDE",
  "key31": "3xsCfHGfr9uVS2pYdeP7V53dK5ySSj93trFAz8h1edCd7nNRdwJzhWryinWyAhNfQyCmS7Q56Nu5GpdypDta2mAQ",
  "key32": "XZgzarvk23FoFB7d7WNKjdY9K5bnswoAoqDzzt3Q9qCYRCpH1YngCbScrBkH2AzSwVFsUwA9Rs6WK3UxifiGeTH",
  "key33": "33GmnXaNo5PdV7oxp1WE3AJDSEXRcBjHnNGBXKtdxm9asqF2fqVnZhqVC43e4zMFqajXrUZhoGvRP2DSrj3EJE2u",
  "key34": "2sTDkJBzrfgMB2Ty3fPfpMoi1ep8Ws6SsmMFrRbAfvoKi63WLi6xLBhsXAQ99G3mAPAh8iGNp2782KJUaH5z3ckt",
  "key35": "WXc4xyw58f1Ac1a3qTSXD4q9cC6b8x3pr7eZoiN2qErnby9TCUCC4RKXPsMQc31TciHDXEvJecWcE9e7k4y7v4w",
  "key36": "2E5iDekRpxMbZgCxzHMNKoq2F473CqAwz6yZ8RgjDu3a2xqczAk9foawBtZVi4DVhREk3ieK65yv5k3F3NNynnpD",
  "key37": "2RHRMpWM8jMjtpdWcvrQ9hfcxRVRs2TcRQW7eAq3nTCWpBztPHLSamg6SDW3MMdcgpdGTJtUejVi19RPyRiDVUum",
  "key38": "53QmYMmJYDYFssV1BKAgNsZWM2Ai8zxfRxf7LAsqne6uoWjCPd6jEgnFaEHVNiWVMh8EzxJjdJeX4cqq17yFWjfK"
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
