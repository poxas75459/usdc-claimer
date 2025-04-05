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
    "1fWPi6N1HNd5U2S8P1qXvH6kzjcYfXHCAZbJcjF7JJjT5CaTepmXRauH1HNbnaCnqh2hgF38CpmfnwVuorYgWuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YdpeSQf4xMh3ow9GG522H9hynZoc8fxCKmJ5uzCK6XMZ53FHgpu961cs8Dr2kd2CMyMBGjTSjzFbqss6c8nwyMa",
  "key1": "66QNeN4Nb45K62WUaJPtNJfwHZ1sLRqtE1EJALHtKs6TUYFdzVV8coZEFCpbyCz6sWipos1Xz8PnfU9jiQfh484f",
  "key2": "5xbqvEz56z7waf1FmDQAmLibZonRkMAtFx6PmuykD9uBfypdbvUPNjf86JKBuosFRrMEZCdeucKDhyjbDX18pqMK",
  "key3": "5hNj6jznvr5sdeFWKx3TQWmrYiQDAcHcGFv52tMuEJxKQu2ccF3hnDqpFfbeJ9gJQU7KvtLZsNrsgBMiTcqi6A4Z",
  "key4": "5f6zQ7yKCvwGMhmpM7HzXQnBQeJ38163voEWvKBFZE8HxzsqH76Yh95iJRTRxtyyb6FLrrT4GGsU9gQRgNWVFA2X",
  "key5": "d9kiavGBcNgKXP9SftcEVeGXo8KBaJbxf1YcSaTreJZhY5Q4mdc7h2WdYS687LKvsMKn2mQCRSXgfQTXzTcJW9T",
  "key6": "2Fw1vdZ7DxTdvv4gMX8ryMcRKg3mxoStbVzryVADBYfhqwJw7dhwAsvbnMmb62zViUzZh7p9w6sGEteQfjXCqZht",
  "key7": "4pHGx34CyyUxTYD5Y1csnU2zxFt6r7UgyKd9jszF3M6s29DvhWPYQhX7f6t2HDMnxxUG5nhBVpXth2pdqAJwY5RJ",
  "key8": "4hGgbiuwuXPEzTYtbAZ4t8WLQXBDGj3gVGU8jL5qsvHnRjxGBaLroynqJLGSv2pPibabFWYUcoUgicnfSpho4Ard",
  "key9": "mAJmG1eggPca5pZ5fqtU1HVVNKGDu4zs91i7uFrkNeR3tf24AGp5rtKDnxUoTR8yz1tVTdJtPdxPwEZoq8t6GpU",
  "key10": "3KMQpB6Y7cWiLH1StuoV7ViLGiGC8MnWcip17Gy7YMuw4fsxwDXqipTuDKPPup24nHTHJ2UVHAJ34ycyu1whC1wy",
  "key11": "5quWUkQa7uDVqE6KKzqcahu6fVxPHMQtiDJjYznSYioMJYaw22ak2WpE1CXkGiopViR8hDc3qicEntymBeo1KPeu",
  "key12": "4ai6fqNXFUvBsUoYSf3BF1iFV9A9fQAeoAx3dkekZkMyhnMJANuUh26fyg5kKvhERvPJcAa5YByPL7HrTZp1B84y",
  "key13": "3uK7TwPE9duBjT7Q7rdUpeoKYQq4xSWR3TWTyLUexrPEz88qcwabNzSJozqyok7pEbAqdvgCDjtCZ1WVwruofpFL",
  "key14": "3w92Xdo4UsCwR2NYko5RXZLhoFmm3yfj7UUYMMSgTBs1rBz5Dxr38gHknKn1kTAxA7gZjuEZBrJFtvPTZqQvshX5",
  "key15": "3A3UNBZ5brqSRvVkPHULKPSpmkZeSikS9FyiX87AaRsj3JieGhoZdT8xaHTEiq7b3u2RAZ12i5E2C7MhhAjcgaBL",
  "key16": "443BvzeczNq2R5YoB9b47uMf7Y4kz3sMAf3VT1YHkACiSqcTcP1R35kPbcoR64HFhjv47VVvhafZLgT6EDzzHfrq",
  "key17": "5n1STRh12e4x399yYsbajfPpd2XZ5ZY1LemZeBk1f1zUvvNjZiibsX4QaHP1eCDLcheWpTwJykPfUbzAQsEq2dQK",
  "key18": "4bNZXkdEUGPCZ8Z2g47k6rFwQpeuiqmWg1SXB2k4GVpM7HQyQhovKXN5SbzqS5sp6YCtgjYSvMh2HwaLnDCuSgce",
  "key19": "3y9Hoikqkn8BCSdGaEfEKUiKNhPVZPgtZC3vMtSP3LHBGM4XLzUhFBCGXProRYoCr4NDSsjGEr7h7rSG8HQBMFZ",
  "key20": "4kDJznRv7PbJRT23ztdhJXTDDXZAx29cVUdq6wvgcZoBxhamFrDMiTwbi39ojKtrLDvgTdJdFaCYnMgu1HUq164T",
  "key21": "4MCCCoYqgSMBNrPrU4NMbKLvevzEcXLmjezciJDai7NwpYwMQJKDSaVtyrW71wAYFzrwVRXMjtxkjsL41hkfsj8F",
  "key22": "3RcbDiLviABSfp8ef4rr3cHNWPZE3nRfQVNSP9QM9Tp9zBM5B459PCt6Lb3D2UTG1fymyUx5LWxGtTaRu83soz4D",
  "key23": "3XAPj1ngPFwNDdMga1BfH5pZogtDYD7qm9vVzPCcNnhgg6j6MrufoF1w1bt5XcVRsm7yHUuyXQu7eGZyLe3oGLQo",
  "key24": "4cNdT6KPjZYbrANcci8ZKG3p5RfYeD4wocmrPrGFHZnHLKAr82GzA9sdXsoiscoD9dZLn3U5tXZ1DwkYDUnxRz6r",
  "key25": "4RPqBPE4o1bJ6Hpb3uuNWFgWQjd5Xy1foUTBi97iDur6yFRGPZCFjWQdxhQGn2wvz6vDKmfniZ46oumCPwmCcUU4",
  "key26": "2c1dRNiAmiGhDtxD9CFPWpZWhqYbY79Ad93BLmd89KL1YZzPvZ31dRMfXHvr7GHqSE5h2eHeHztzpRJ9eK8XJ2Gx",
  "key27": "4oP1xBYbzCR6asjzAxNwB2xbc5t55j1ZqTrrn4hZqhrnufxpAdqxpgcoqJvFmW4zUEZdZH9KBvB6UkLzj6genGJc",
  "key28": "4FVwLMETtCoqWZCSbRcWVBGXsGKvCkUuVPfDirBtf89JwjfypcTeRP2AiyUk41L4uj8GVZh6qWEtQq919gEyECXc",
  "key29": "4tDb4qZgwK9L3LWZL5wJizmBaYKr712GffVPZvgyUa169J9SZVYptPYnxBLBw2egsP1b28AhSVxWhVZNSwkWeEzW",
  "key30": "55qEJTAhkGquhnjMSrWG1e66jY2trtkWit3VbUYbiRTeQ2yv2ZgioV8wVDCnvYmKNRs5VPAnerffDHo2FT3HVVbD",
  "key31": "2AiFTCYLiTLda5VB5ofu8QpBnHyZ9bBBoZChHv8eXoL73z9NDvgUMgyC2XaBsnxLZXqRdxVSTzYwrjjtQZAf9hKV",
  "key32": "4xnmVi4XZy1XBnY9kjRg3ywzosqb5xbufT2E8qnmKem2EvyjSoWavJKexRewPGGsLb6DicbF3xFGiPWwP5T3nZKj",
  "key33": "4B9EEMy8P7VgeUTr8Az5yPeJWsw1s5ZBgK1HQa4KKu6qpadyxQkKPNichKAEKWsE9ZnSEAEABonQFAYn4RjSFurA"
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
