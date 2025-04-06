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
    "2xeNfGEbbin2nvE4Eoy1T6szXjF2Jn95bm9QBo9q5ie74GUBJbCCTXxSEp5pz7EpL34YAAk7FUo2VpdhYa9aCNTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nX5ymgUJFU7RUuDcmhGiCEBhaMmcvHTz8FeyZFAacA1Bkor8C47GEAQgRuhsG3pfYhsrGX3Wo8cnAr5EUsjgQfP",
  "key1": "5vkfFU65pf8ByaBorLVYF8mXgtneRiFwtXs1R65HsFCn8iHG8djpo1hpcBQY2sgP6WJEB4TJDLrXV6PLmYbVssP",
  "key2": "2ReQR8kD7yXdYBSXTxvECR7P7xWfHtWQe4qDE9oPw93iN6hZo6A2CJKMMHH37NkrPQkV2quX7wmhxi2nDtKkbKRD",
  "key3": "ua5RGWUc6bDEXYT3zkJPtjHCmLU7FnhoNCVGgZ37LZc3NJ2MdS8aSzCGfT6Y1rDETGowXPkNbhpN1m2CVWsa1AJ",
  "key4": "3bD2uKvLKL314yp655ryskeJkwA3EkqgBMeYYGHLbv1gTpeHBmiNkQVxe68qzJJKNAt7LQj4gFhLH2AKmQFQiLyC",
  "key5": "5uS4zcMTST8bEqmC8Ej3uP8xBPMUjPwwuhKbjzAadvJBBUGjg3zTunTN7MEwQzuKmYvaZ2dUb7uts65Zym6Trfpe",
  "key6": "5zgJjFJyFNBB71ZWDd2K8q4MXW89ytHFXuBV42sLaJDJM5KUYiyuQbbUovearrUHkQtCuYsCjKJTiWP6ApPrmQKG",
  "key7": "4v7YM9XEAGAAmgxLwxtVzpDC5g62athAUFeeTdjjU3Gq6hHqshWoeFms8qUvUFtgi2feuQiqBhh1fYH9UAh4CZ6U",
  "key8": "3QZvZv4JG4VKktrSyWwgNcB4HUxsgHfasuvGzXBm9qjgw2tAHvbix22PYioo6YTfNzUZ5G5Fnjb2vsA3bPueokb5",
  "key9": "4TcHawhtzeuFmCR7qTv1bW8HTvJb38mWB4PyQy6erzFRSji1hB6Npj5Rc7ewcQkTU32DLo7fbjQYrpg5s1pTBnTZ",
  "key10": "36Mgt5rrZF1A6UuqSiMnpjeUdr6pfmwMCSg2RHJWzhRLJjtRGqH6jUXHpYptsNoETmsEBuVgJZKwozDoj75FNp3j",
  "key11": "gKL2gef7haEu88uJQ3YnoD9En7UfN5F7i7p4yZ7RTYhuuRZVfEsqFbz5sFtAhTTsQinA5FWXDzS6aTACdmCaNvn",
  "key12": "B714EQewuWJWxQR1R7EL1Lo9YRiGfLC2wmYoxDDwzeZZQPtBYiiUooskYzBUiNHS6oQKNWhSujoZbU8w4PneM2M",
  "key13": "5YAyz46hGtRh2ndmbfYSfk26ycspAbSb6PmpWW3P1N5TxfdNy7mJAwXqY3yFodErEpMUc2n3UGBgbponoaGSRs2z",
  "key14": "3yukfgY8bNrhi2CHkvigics7vFMkMmPdfQdomKbBnHmiP8hPCSGbNasbFiPgqwEbSbA4xKqnCFwzWhiFh2VnCLev",
  "key15": "4b65Kpa8eyxWgzDNf47YTgqvfyXXVyZHSwvsY2i1HLkjJMag7C7WJdN6C4YKZ8Ta9TQYMj3upUifCKnBkZGHFcs9",
  "key16": "4Mizr9eNzQ8jjHZZ4zvC846MskdVkvpRXGPWBYtreAC8kfdoymgBNbFaGDRkFiSUd7oahJ5ubXVSoUygmmybc4ye",
  "key17": "4rYkePhXA8rPeEh5RW839fHusBXGfZbR8WiPsSb1QS9V296oVBTuySSzC9uEfWWVfQ8U3f5k8TBoMcUt7X5EapJy",
  "key18": "5NCDYfsKW9Dqrhd9ehenWsy6VHQy1oFGZPn8W5JF3tjvFdw2HBiMPTfrwpQ3VP5vN1hR31GUtUaRhjmYLS6mSCbe",
  "key19": "59mxvrrHyrHS1YBGRV7ah4v949fVhwSszrkehbTme6HRftoa6EQ2EitLTt22MUE6TA1dszM2vb5BK82BMSQWE5fp",
  "key20": "KsDcM7mrw4E1XZPfyT2891RLgWHWR3kspetozHufL5d3EeBFZCJXqWrNJBa4Pd5g2hpRswfJ1AKoPejNxRaSb3o",
  "key21": "4dDNz12UKQiZDGbZCCqv1Atvt6aoK1kiUvWAG8cfuxRmG4rKDvsd3eaMpV8rpxmZpm4yzMVZkRBbQTtGTHV4JuN4",
  "key22": "83MqexqEBRSVASqnpN9yVNsZSAv1AxQUNsqFt2GiQGMhv5s9ojxAz25gGcEKHu7wSCx72exzLp7J9R7XaBeTLjb",
  "key23": "fFJFm7UdAHZQzvVVPEoDyZXDxVUwTJHQdNFCMYqWAwQNyXoh2DxYTwqtaa4uEB3aRCAYPC69DbCTsbrwbxQZcDg",
  "key24": "5SeYMK74ZwNM77tBt3YkjvmFaP9rJ3cEj16GFXXjjATypYksxetQn3nMneNN8h3jNB5M4RHXnrfqqpxypMy1gkN",
  "key25": "4YP2ot3bjBkR7NxcWaKZW7Q5bZ4pJg5dSn6bK4cs7Rw4JKUwMTQb2b2T8ouAyuhWHNiRXLhDLcYyz7ySzyKKDtye",
  "key26": "3qT1UteuHg1tLTG4L37xr1HU4eEBRSAL3QVU5uNBersLfDyNTTF4NNXHEeBUevHrJaryoVtesXVyHxwt1T6x5SuS",
  "key27": "5oddY86bwfvU1SLpgVK2NYo4FNb7gqHiF5oyDya8K86G19w7iGCQ8z1gA13TXgpRG6bZ9aR9oC2ZY8QaKzgcNM1r",
  "key28": "3MLEtjyqQrak4ZqbDHg4AB9U53VV2Yz3P8Cf8mAk3TvjNsCnpJ9XqC4j8nZqCxAJns3wrEmgwzUCc7XMZd4s3FMd",
  "key29": "2z7HHNyEzVPExoFV6muyp2BpzsVjT5GTb9JpUitPtfFZhp8iZmRhHdhDbcAFKUuHRGhcg4eAWApHhJYEBeG7uZFb",
  "key30": "2CidsaHRchxBKABjMEq5Nkqn5uDfPpwgruirjgALqYjcAXse7fdzyvbT4uwj6bfeqwSucNLUojxfFar5WRKzJcC1",
  "key31": "5CyLRxBadCY2sJ2iJBEcXTd222wueX9jCgEXpKWXmY1psVji5zKtGee9MSbyGAxPUBw8Tz67rAu8ncJ8vCfjyKWW",
  "key32": "4Tix8RUDr9FpEwVrHtPdDT7ckixjh8HJiPWbutsxjf1e5i6wsUWHJrw9nQHjXHnnTsTiNHamKe9jF2brocDZCZyx",
  "key33": "3DukvXQUyhF2yVaCuk2EGkgKaFTTrDMU4bqnmS9vxhqAr8591Yt8GRKN2e1GQbT5YH54ociYjaQH5pf2597UBvLD",
  "key34": "i1UJXXFzYdXFz2fyGkX2UC7yr3YXe5xXweSUi16d7xu9cWw1J9awKBKbBHV4xVvVAFGfKwZgQHBJ7tkW789XNDW",
  "key35": "5ncMULbt69vPhhFeXnf5YZSzhtkiGFnQJWuapbArCUzWAkukdHgL4F5ds4X3fiUM75qeKKVcqbFn7W3zziuTip8G",
  "key36": "5wDt8AUzjWbdYhzWJuTSqTGYPLJen5rQW7bK5DCnLkNfTs6kWJzGdwwcwg5PaGWwXnXbAm1SA26yafGyvATJL6C8",
  "key37": "GY7gPS6LzHfymJ4LP5F5QqWzTS4gH9vtQ5719ULfiTvy2wDGaYxDqPTS2oAMWftdPWQ3auqsFb1VcsAQbexPvQs",
  "key38": "3utZezQVaszwEeGY7dhK1jxXBomiwFRBQBkR4DbJKULjzxyR9aA5PTXxDXZof5o9SA91FFuKq8nMkoJMcbMqZiJ",
  "key39": "5q3L8yVgqye2VbpkmR7S1HS7AbAPNTqSF8NFs1rSg3wFRzDt3PxaCvnVssYUdpKSraJRUApAMQHkZdYoKta4rsyf"
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
