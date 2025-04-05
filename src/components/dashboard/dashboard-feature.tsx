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
    "3YzKLY8xVPysArWEzgr26LpWqzN2B4txmvVe4dWZnqWuZs8NvgJSSoQ4LmqmQewRYTtHnRkVyQxcTsM8t4yT3Yff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N2WPTuF5g8D9dLEXpnEz9DKssG8eBqYjgSSXQB18eYjuR3SEXn4eEXU1UTtBgdorFhuYpNYH3ixx5e8zeJ8K6Ep",
  "key1": "4oDp6YvqfVkb98j6BEcKWXzUJfz6Fks8VmYPguPJneEdTVC9HwPtVDHCqjP6356EB5pFbLWMUbA4GTr89LKTVr6R",
  "key2": "3vbg37WBxvjwW2Yw2maSN69BL1b7j9PVL8HZaHoSPuQ3pYoa4ZBLqDGR2DXKeU2srZXp3bcNamvffoB2fGixgR2N",
  "key3": "4RF7E3VNyTL55Z48gDtLdFm6CHzxE7VURZgiVYmW1BppC8vToHfkkX9cLF7nKC5ZbyyeL9haaZSQFLFVzxHGNUCb",
  "key4": "3eqXSpA4X1fP8ojsQKJk6eSJfqU8hkb1WGsDU7mveMFXN5gbpeNZ8d1vqDHtbiq3i8KwCPco8yQQFi5NQLHNiw79",
  "key5": "62TUo3oxtb23ES5P8e6oPRohtADuZvdkGemFPs4RxryjFXJ4pjggKWrUz8ShtxmTFLQqDD537or2Gj9jDJjQf4Zf",
  "key6": "5MgKXhitLENagH8wLijqQ6LbQZywAgmjT3C6QWsALL8tbJYGhrAXvXSGUA4F4btk7THAzkPTBzsVQQymiCxKhXuc",
  "key7": "2meEBRuUWwPo2DMafiDrRWMquDsDTce9eaXGcwfLwprSUjgjFKANjLEkDdTF4c27XyBHvnoqnhhs5NP8rqow5qa9",
  "key8": "4Jnqga7dXfvCNvL1D6kPVU4rr5iTBXcrMcjM1MAmC4ArMj33tQajCJYwqLqEZpUgCJWBNiBHpJUcaTnjLpSsUxyZ",
  "key9": "3PVrfcCUSsHxdq2LTRHjyRG4BvFopYeMngYDNTTvE63EfjsuMryaaaEPKHxLrZyyf294AChH27bdYUhEyy4KMdHm",
  "key10": "4pXLFPmoFzAAaFApXDhYh4y75P3gegrnfTJNk9bVoLr2ieG47LBRUh8pdKcgFFcfcJEQBK6PGbBFzMYB3jQk61Pc",
  "key11": "5soTyrEiZgjJ1H6meBWJJFt7ofsqiSZ2oPuj4uaKxQSZfiKCzGbyF8d5sdXPXFVtn7Jst8B7p4AFv7gYKcXH13ZK",
  "key12": "VJ1t9NEn7utNoNB8zftT5cpLWkLxybutjJQcDr57jCCdoDxq5aLQ7BMRk53Wafo6tZ5yUb4qQ6FYzk9L1CdSA8Q",
  "key13": "4uSrqUa251iKyjd875PzNCBVr9CwFypajR7rvRCGJG5PzakQWuVxHRfLi18JYKFyWEJCvgcT81U1vWT8sWbXYQP4",
  "key14": "5ff4BGpzikL7uzysm6A5o7BzL5xYnXqgXQjyHNwUCTPjXX5Q8yPiKH85DUWMNy9tMWvQYBtVTLu74bCS21asRjFT",
  "key15": "o6cexrcq4ruTimF3trxQ3MkdYCkGks6EbdHJ4z5QkzSaXyVG9P1fAt6rVey54ydoMg764J4LcxHgg3PveZnhA9T",
  "key16": "3Dj2XjcvbdBsyoWKz7NjEcUt5ioMLYTSBkCHL9AyWamTpkMRy6ygcC2GuAwZGWx7Z7FAi7dxGdDrB9k3J9KG74eF",
  "key17": "55dVEj22KP9cgPNW6ZxZUkBh3nWScQBrdACZ7p12v4RALaZpQNMvDJRTZC56XNjrC8q8rXbkzgpNQk26NesyoBSw",
  "key18": "59TeNcecUsoYgcJfkBxz2n441penVttV7c398oRDdCGEGCzd166fHkiVRqtdUTtk9rjeCpWFo1XHVwbK7YXvTU7K",
  "key19": "5TNEkrXDYNRV23sBroReQyoHrPRwhgdMYrcGAjSZkkQhVrtVsHCSetdQdXQxEz79jHVzZv953JWAnLiPjU39pXUe",
  "key20": "4nQrPspKibwwEE1sb4AtLFPfWc8NmhTEVWEn4geDZCxisAg8g2KXaHWsrURW1sWujV3YPDWwFiTHGtk3iLCnhzss",
  "key21": "46gUapgwDM2gB9oUrb24ujNqjETaceFuchf6SJC2mbK7dj7zT5QN5t1ursQYhfms9nCqPeg68uSLBdaE9vXb2Yg7",
  "key22": "2hZo7NcTCAWbwf2sVe82SjBfRTo8i49JTNvEB9bjYJav1mYh6ywuf1KqQRQKvSgzscZXdKLyNLyNRJ9g5hk4rQ54",
  "key23": "3UaTd12JFJQxddktFLaQQPGoCBvB6PfsxehHGDrwrHfS3ueCdkLw3towZjfrozc1ekMG5vQ9c6ouqy44YkN6S5oB",
  "key24": "29QD2ndqvnWwiLhjA9CrET59qz2aqgz7sSKenFaTvTPwrzbmL21ESAPqoi6TBenyb6mvjJdRCTB3arDPgM3zDpkc",
  "key25": "51bHZsWqHcB85xNgsD5iRpV26yDguejRguKLn5hSMw7Q6de3t58QKaGv7YfykU9VPwcFmAP8X7yuEeGSSHzp1PME",
  "key26": "aV4zvArGjkBPHP4Dxpu74hgZQzFi7A7GhT5rhHMFY7Q1wTKoFsAyVuLqGPB85MTPqRgEXwQENHbzW4V7whcf6hz",
  "key27": "3XEXDp1eUsdR9JZsioDDftWqTcbWcYasTSn4ysvh7ecxsWSPcHYkZUkLi3DwrYY3gULyQMd8dRUZpo4ZrZMJUYHu",
  "key28": "5Zgym1s5AcVQhy7qkkMCZabysQYqo2p24AUw9DQDFqUJQTiKdjDKWhrs5GCkirWHWteZCEREukSNwJTfmCX8hD2f",
  "key29": "2SxanFVsNg2qko74sKYsZkEFrgzfFHfLpbRvuyQu69amyLRUGtjw6hh832Dy2bpCDufHtxB868nz2q57j7iiFked",
  "key30": "ER9NYPS9pCyTkWLY1ersAKo74WdkXu1CxUnRA1ecAQf4b2efj3tzLbSa1oNnwXN1LdMtuPVE2Cd5XKeisVvRN7W",
  "key31": "Didkwpeu74VSgULNZw2H1ZngqhATDucCZxSekrTa5Paaatvp2FK8ASrHZMwB6L6KNcUmg3vpYNkN61sQUUdE4Ss",
  "key32": "2W6pCUKDUEPHoV7Co2bCz9kZdfwSM9FFBMrnHu7A5ueJAYXP88XHVQbi8cvbXpZy41zXvmNbPaT66WVJ4cmkowoH",
  "key33": "5nNYajt5HuuiFfD25ninoJAiESWxqbv9GUs7derB2esmWU8VnL5coX1SoXDnfGGs3Fb6TZH6sqmN9dVE6CzJSJYP",
  "key34": "5Rq6NtkZepCswHnWT65UyRwNcCywmigFJFDSyCCZdXBeLnTHkG4EvxwUMfeC9brCwEVCmSZEY4EuQVmpncKh7REu",
  "key35": "3vsJwdwtMgU6Ux3PM39zL8s1of38zhakNkA6EVQ8SkYfg1M9vb4vs8jvsKT7dVV1fbVbj8UL9nLPxCZmTkVGU3SM",
  "key36": "2iaiVSdojWLtHESaRrov81aMg2cctTRqA2196rLk2tDni221uBJge7JK3Epz3AqTUK4fKrJn5XWumnKXpJs7fWb6"
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
