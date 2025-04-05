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
    "3kDqdbnxa2cQjvESW1P39fDaCde4sy41ymYUAFBLF7SfLgajkZQ6Q3H69MD6rvAQaTar3TnZ4usigvUMd21YHJ3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjBHnNkkQ4vgLjK5yayor8rgZFLGodmYys1DXigX2y6UuuPp21YHVciDDfug8hoL8RHG6LpTZSJkcCJTjvCRYV2",
  "key1": "4VM5qAU8cAfzYCi1sDrJvgY8SjxbEnCa8wojKbsheEjQ3k2wN5AQxKhwA4SvBhhRCQx36efEkUdXBUJ9a7qmWkmw",
  "key2": "3MZnHMNmBNQGvf9pcDGpCgHzDMdJ1rwyD5NsYmQnD2k8gMnmdhSoJdUvy6Q2SzYUHt4AR8NAo8jpsaX9D8s8pnZQ",
  "key3": "27cxeYAW5wPVnLv9ukdXv9jnWxG4dmCXKHjy5GnQHFdPZEGf1H7yzCq4foKSwy36DTsgi3SE8QPBp8bRV56AGWWV",
  "key4": "5ac5tPDFPSTPHrNe747n7PztFvP8mUE9UpMiqZy1fbXQKy3GvpqiqdZpZptxKHGCo1bqK1wrkyqWXT7BZQJSzZJi",
  "key5": "fGaGNghLzxmEMbwa7vo91k7bwdCnQBH377jFwhprMiUQkS7G6vGPpdy3bqPeJLK9WRZk6Tcfb1x8fjAhML5rRvA",
  "key6": "28zt2NUUZJZGPaSzkFzVPLgFFU6M61DBwoToSiJh1Fw8kEkqud3eLGK8hWRe9ghzQrUiXEBK3tBt68J7x36yVDv9",
  "key7": "3UtfphKDcCFNouC1xTiZteXdTzoAqGaNZ3thKu6UJpzrcvDvqbDCsLWAU5z7Cs2QdPqxRAtfbm8cnEZCbKvaKwPJ",
  "key8": "2HsYduq29sk4ngNtQtbpYrhzEJENBBSHvBWMh8CkRjnpSXs71wfjfC22a9ZHFQy7pPsJMvbnoYYcmn3ufeiatpSt",
  "key9": "3VaqDYxH7Z7uFYzaaJHsxNmsCsN8cMTnvauQmfAnzW5Qpdx4xqeP4t8C53wPzKXcnUX3vtzfSzQMrpzRfRTCQhv4",
  "key10": "5E1xiwymY7UnX7VmM25pEjhni25iFC7n8kKcymYAusqZwqBCHnJcEfBoQjsGuxvwxbgEeooF8UdUHDWQqhVEGwvr",
  "key11": "3EnfNUwGr8vXnBYTeE9UUpwk32Nh3QSBckaQCySWwMhXgbwtNyHZniifGj68qVwTYgCHZnqxFGPN9fxt6A8G7C6N",
  "key12": "4qeEn6xEuixGtiEoRPmhS64ijL7tQjMLDkBt8LqwDWasr9EAReT4FqYaZtMvtoo2dFMAeGRBgTQoaR25UqeAwpz8",
  "key13": "4eN2LEDPnW33L14L1BVBptrihJyy3FtimsqfabzcqnCFcQumxxavFTwcPNTDJdzYVWTKVghjsk3sB5NHAFCqQZo6",
  "key14": "2qWfcANJhXUDum3VH6PCE51b1xgW1K4qfELCHRtHq7eebaYKQEYBbMWDuGD55ggKoPXsvA6g1DxrnfqwokXwLPGg",
  "key15": "5koHSmZL4Rw6rgBFM7XE9TDGv4H28tfJizvPhkbE1izHk9XkCzfaAi4oywtQvbBQG5WwP3mKc4R5inxx2NU6A2jr",
  "key16": "eWnTriMCzSHHu55bkU8iNX1ZUCvYoq5ZyP47Qx9WA7M4cQNq1XfMZxD2UVpUGR6zCTKvHJYqr2SqVaroBLR9Q5z",
  "key17": "5Xhgnt84QH53WvDrMqdVUPbjLADJEuAAexbTEV1bBGuCKj21CHYxjvt3ccxXo8nDocs4YNRtAVPDGzBo9K2PLNkV",
  "key18": "5Y1fbjKCcfwRLpixw8ttoMc9YC5FRSKSxTWFh26i4Zfzb6fVauiHXmfTBB1bW67rQswKFiXPEK6JojCcyGJg9Lp",
  "key19": "2J8KhWbx8YSey49NfK2YFHTCiXgUZLWutazVgdyAPKF9k6sG6kVGf8bvg7kvm8H9tGSXq5sP71nQWCUyAJGc2EdP",
  "key20": "24BGUjbbDW99g1ZaqmkFJJedWRmZNwShCBmZ7Pfu7RasNXNWgFJKjLUfni4H4YZR7PE92rzGG3NCZK7eaF29T1xs",
  "key21": "5Ly8CzsxPGuKFHrmH79q9Jt76F93DDyx53Nm9P71hp64V8hiPFuMnPoGoAvcrrk2EkdSqJHgaawGBvJKVwT8zjgS",
  "key22": "4mTDMKvyMKKroqiLuX6zTb5VLeuYrvmg6gBfmLY5M3jGbi78eozLoqgfJE4ewbtfpGJgNcuHVV6nZg1vnkaaYWwZ",
  "key23": "2EcqezmHV49Rmn2vBbV2hjeVpsfQZXq3gz3N3XuJD126VjXpUWWJPfxiCkEYXacMH9mgmuTYr6UnLVjJjdszJiYa",
  "key24": "3VhzyL1GD2xCK2B7J4N7wfry2Hmf6F4L4BNGR3fW1T19CPWHx4qJ6JAsoZBx44VdkvCBxPdN8KiA5SsKkexHTDFW",
  "key25": "2bkRUAPrNWG2CV27cDkEC8MUXnNjFNJVdEq5uMamXUcLhQtBS6ftMZuvTABvzRyXyZnXNnXZHrffGRTYcAMZuscy",
  "key26": "4c5N7JXzw3ZVkdxEVa9fCAeumnECFhhMmJ1obPnh2xEazUcoPwxRWFjFfZM9YESpG2uYaCzMNdK6fbXjAtSsQ3cv",
  "key27": "5jYz7x3ABvn3BajoXsbAEVUCeg6mGWNYVPVhbNJHriQJHokTjL9vp6M6s4EYJysNtpxuu2856e44ihzoDxAFBSYy",
  "key28": "4wBAiZeHeNEYiVjAT14WoK5ZTeV5qxU6xEYebVGidyQ5PQ4jREmoXzeUAfZZRiv1Zbs3dYi25pfZ1YGM2wbnNKUG",
  "key29": "4RMtoasYTFScQrevWJf8n6aFrKix3QAHbZALiKaRtncYiXCqS2AUyfVq9bhjcAwSLjfKYmB5W42XjQatvmKhpQ1q",
  "key30": "4X5qDvWkx2hZSPyPHPfxYwbrHbAvnjGU86KAbTSGWmvs1AShxCg8NH4aAHYr4kysGzjG1sWPJSJSSxBBxjgxb1N4",
  "key31": "3hs4SeAdqiecFk1jDXfT7x3bDh9z96g51zhjsMXgY6krhxkVwQHNrb8jnjFTJiSPhX6zzYMxj7gY6NGzx65khL5F",
  "key32": "5u3wx6GMzTzvaYPMAhTpw6YxajB7ThDVLgRsvodNMv6wKp5QXspb854cG66SFKFh7HBRSVNMiLAf86ZQsGG3iog1",
  "key33": "4MVGASCfbDGRoGBKWj5hUaMeYTJeNdtWeaFpV1TwvHaxgTRccMo77q8uDtKiG12Ui49iVrY9aqCXshaXAVjimevu",
  "key34": "3cMUfQFpBVGzxiYGQ8Jki23ELb6KT7SapEwjBJQHaYyXuvCrJ4cUVpgQnQbgAawAPw2PUwwx1tmLMwhvNhLLUi6K",
  "key35": "4BcMqwf8DefEeUxaRoXTSvg6wpjJ9cdF21MDhKobKfzn6vN9WGzhEQhYVUbK4hWcFHxf9urKTyqAX1oZEWUasxdL",
  "key36": "2Kg5ce83tBDbNJHbV3Z69v3v89SNWHfsgMxj5oETKokQW6wzQCiegwtdkTmTknB9PGp57y76eRqqw16ekA6shsde",
  "key37": "2wwqfVXBQg1kZuftko84RkkuQhz2UnL2gsRTFPp4CHHQvQdEAgSonnjRDm4ZFtSRBDDvMcq82SaGaNMT1x4ua9DS",
  "key38": "eYufiAg5Cw5WnsYqvGnU3kismuTjhMKnDMm2AHSRNaewBNFYkgcda7criJ1YEuXsY43DBUgyhi3qinJixhfiMpD",
  "key39": "3qsN28zS4RB4ekiSf3YaoMACVFabUfh9c2xj7pK6Py8R4Bd8hkxbv4GAbviDrZe9YqtE2jDo4V7RS4i76zJFqB8h",
  "key40": "392Fkjbyjnh9wwbM6nAj4RxLppzmXKEEsJMjPXtscdPC7n2m4pj8cBCWU81hXRhCanm4d9wjhtYAPyKWp5qMzuS8",
  "key41": "48g8BejNsZwvCZsV91fk6dnmcRWR5Sc33tZKHPdzZpSJ9pjfzKfeaj1azUSmipYuKEtE5nJJgdKzNBMTMs3ykJ7t",
  "key42": "2NbmkztreoFBp2HHm18NiL92qXtDTi6m21gs4hQHxJMV6QzZzr3fPH5UWQnkWkX2e5MAd3mY5dpdPtztHSx3HSuV",
  "key43": "3my5jWAzL1cFJ2GquYfV59Jps7dVjngztU5H3Lc1d8fvJyMJfkxqXG3rrhUNwF1F3W2DqzFWYXZ8LpziXw43xiG7",
  "key44": "37QpzJG4Ay1wnwE1fs7V2bnuH9HwTFrDktsM62uqf2wRCEKBXLfwoqEC73JDumAby3mq1zf2zzpd5aVBsfSMzajA",
  "key45": "C9zyGKGmQQsaPpZbo68PYGDN81yezpdYcazXzF7yRKvTqsskGQ5A1ijz73yDV4LDsFuo2tX3VZv8GBYGPok5qvQ"
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
