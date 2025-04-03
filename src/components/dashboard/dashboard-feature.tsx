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
    "5BbXa94tNPiJksdBJ6jV9Fpjv5tgVPdRahUQjoSEvQ3kLFfPro5aQszQT42EvPeJ8Kk5ZCYM5PoBFpiaowbK4upC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TEKY6wwDX2TyGyah98xTW2DzS2moZsQXHxmBbEW8zmqTRdEFfmx68XjPRfADuTfpDEyVFYphuZj7GMxL7wdjLLf",
  "key1": "iNw2smEfhHtfez2MtQSS7gBg1mhFyiAGFHHPdEjwWapT4S9Z9BxmUMhxvdhuF78vV7SVkbrQuMzacs7vnGBrA4C",
  "key2": "5y1WvmTUwJybnbnrcHGfT3TTuBh5KNL5pLXKxGdQyxUfJrBX1A9z1FGPWH62AcpNQehjuKSmRd7fKAAi2cG2ZAL",
  "key3": "GX33ReHNtk1fk3z71kRp4zaWnq2xvoWwg29K48csjU6BDstqNP6Sb1F9VRZD6PuqcSgKq7AEh7eN6LzvmbdzZuF",
  "key4": "5P521u1p9mMWTqXbqFDPyCXbGjkZMx6mN7K9pBLbcUBzV8kpW27PBppCFV35Wupb2BhC1HzCCMeDert5qhx9MPAu",
  "key5": "3WkUzGbwwYFyjgvG4Gnk2DQ31Esj94q7fRrTGXyorTL85S6ren4XVXqe3RW9Sk3FsveknZZLXPWK95B9uhfLj9ot",
  "key6": "5rrRqhrvk5MZTCizd8BkkKomg8je7gmsWzW7ZqzDqosWncA8gfUtMwoY6ds5m655gdiLMg1ytfHMqZLDWA7w29fx",
  "key7": "4Rr8UvUtmzPigmmSHbdaQvNb3eNaid15PebdZtw3YF24TD7weGYXk5bQ3QykrhoaJgPePy55wR2DNkEZhkXnrNw",
  "key8": "5Tmx3J8GfniHSYFXLQrAwztFCMmfw27KYqn9Fa94hHANRoYkvw2cUognw5PMDj2YLBRidbBu2uaLfPg8o3NFaZ83",
  "key9": "3nxd2KwCYLFpAted1yphBfSNog4z5j5waerUSrMAznZJ4nqSHSGmGgBQsgTfkz4Ygt5yYwKy3Ef2aFCGFtUf4jw",
  "key10": "5bkkAKANySCdwtA8Larj8mDhoabh985RV4vy9wZmYxNzscocAMCbbwCWAZhA9W53KwuMU4TRd8PRekH7Xvi9rf4A",
  "key11": "4eRXgfzHhFZL3nLnKUAqLcZABXqhaTTaB8jjfdDiUt6eYgauJCQNS1Hik9b3TAWFCKR9XRLe7QQgdMKjfzHXrzMp",
  "key12": "4uXMg4tagCb2Mcj3cczY5vomsWZzTuPrHewGk4YB7KALRYdfH82qpwz5u9o1dRjx1iQCTNsXozcC6LEnDbDBHvoU",
  "key13": "66S4SGN9QCn1iGNdMQgy8g8GfewgM3j2xktcY2rEiFDtiSinwbhMPhUSzxm3ad36GksevhBJ9P9Z7214zcYUbtzC",
  "key14": "5QXQeivWoKJP1FMiKmqsqM1pikq92GT62QJjieRfFWbo6KwbMkayRnABHuWJxBQ7B8FRKQQJmYGMb6VZxDBJHqWG",
  "key15": "5dZP3AxVdqWRKRJSs36TX64nYRinUghTMf9HVJHNoFcdHuqcmbJqRiCfG1K2cvPaxFmuXLkrHRApD9axRynv6UPt",
  "key16": "K14qPA5aoV6UZV42d3Dc8VZ5GMNHyFfTRN3Z6uyjfVm765zD5Gway6N72Cf34d8GdH2nxwuCJBVivV8VGk84Szs",
  "key17": "3UXPzi9Yc1DJZTdL9V2TDT6SSB59YVCX65YtNPc2qqm4cFaRdGmsn6NRzStX1EQiVRkJBt4xZgimKfees6gBvHDx",
  "key18": "4VHqfhto4jwWpyTNbhVvETqZyYtMSKM2dzKGaPKhvH17jgNSnvRxdwb9rVpivcqjQbJKq1vgTaQZzXnWKpXbNrHy",
  "key19": "3UgHSaAAGSXtv1Ex7Aoj3aeM42EuoK577JTqe8PyLRvSJS8wUunqmjKFwkig9XrspnryDKC25PJviJsgSWzfh43N",
  "key20": "MoVHkLjvMC9jEDjTZdeMJwFup5LFdjzhwAzz9rM7uDL43VEz2SF5jEAyDaueRu6VXSyrv5th52foRDDY9XVRfe3",
  "key21": "5ApvTM7jAhf237arXdMsbtRahxrL3opLivfzj2VZspNsyZ9A3V286FVMqDwU8VRTxQGHc613JBbNME6iP2vvyCGM",
  "key22": "3CaPXvrNqhVLPkd4tmZiTpzhY8SKY4dtV1hKymGgaMEKTDL8yrPP6JJt4q4gp4yKSYygzRBvuCzPZuosuWXPTeR7",
  "key23": "fNjD3reZJLvQ9pdBCAyB8U9CZKvjeC9ny6V5dQrXUak7mg4tNuS6TgG39M7zx1Hiuv2BbHha6WVHXJiuDwXMb7v",
  "key24": "Ntro5NtDtSh4UBepC2nPoUf3bACMmEGHdpQoM1zCuUbxm4se5hHZHgSckMv4MG9hq6VSj1JtKHyddLXkhboiL7z",
  "key25": "4Z1bm99PzvdwP7pHF9i7xXPuN13ZGQMyMdbughng8HfJE3qanzWjwaJVi6UAcmHLdVRT2dGTrPKJQTmFXyPxbV2j",
  "key26": "3eyyAwkvS11NeEH7q6imSDCr4u1X1ktumnuyFiUcy5Y4JasotFkZdnVwKNaeW2HY9tp8APJiZcRXDUURCP37QaTe",
  "key27": "4ssGbVNNhYFf8z4rxdKoCeYAejWYz6SaKjNw4Digtg68nH81VCPMYEn6rF7V4yJLng8ty2KmR869KQrRoFscBBD3",
  "key28": "C82PpGoBgM725Zc6p9MT4fFDvMVxbrcR7ZdUZKrhetftS9L94YrmCYyoenMnVxaYqNSfhwr5eMEwCTiqechDN2P",
  "key29": "48S9sozWT9RTChwMbv6o4hiCfPZo1oHtWT5roueqb1hgve2ETkuHzDGfM25uuFnznMc67wMiZms4Sm6Z5XySfx6y",
  "key30": "4gcV5ohwqXKfko8uALuG7eYRuAkbirXKjt8nQavKZcTf8dG2L9VKemdBpduQKWTz7WJD4Rh48H58riTyHiDQCUbk",
  "key31": "5PULWyLYvipyJaQBdRpX1z9MjihzcdFGahn2VWW9a1AanfjQLLr9hPKPZtcoLMNbxHCFeYwwek6oj5EbqwMuudLT",
  "key32": "XeevebGRXHhKqtUyvGn3rj5UiHGQrz7QPcMeaSYccSfZgRZyToWpV1dcjSLVCLMyhr6Buag1dBkUfWHBoZn44ti",
  "key33": "3nKitLdavDtQVQho5pKZyPQRcA9BmVcF4AC1Bbm7P3Gx8gkPu85ywg5e63iYiDqYoXCf2tZFEo2o8bBQy5hdcxqc"
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
