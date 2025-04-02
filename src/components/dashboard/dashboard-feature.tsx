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
    "4Phjub5FyPHUNkLMBTKTEerishFXyWF4qk35tvQAZqE8hWGzJTKqp5jR4vMPv7yoTiF97GbWXYDxCBChuEWSTqnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1vX4fuVSFw7boCqfBSPhfXbdUMSutzXTRKdzNCYGTZAfRr9UMx4SgDEhQwmX6HVHKjL2L7teUrpkQnWyYEMzRN",
  "key1": "43QS4bcGoNaU7t7xhYkNK12b2DdyWDvDkcxZv4WJaqfUVdVRpW8dK2Awysesra89T8BYRWsDCUuYomLMVStt5qTK",
  "key2": "2BcSbTp14oV5St5AQWvw74A9FyPbogYPvEiCGfTovpQ6foJXffgxfwhF6GDumLjF9tfc3Brp5W9ewBXxBWVN2nc4",
  "key3": "4VTL28L1W8vjUjU32TzCYh6qBPgBDX8LdebP9gdEDxo8W3dJ1vFyuEh6tuu3hnuvpZSrmRbmj13Cj92Nf3NmwfKR",
  "key4": "5LzXp7QzDWPhARaE4YtPNqDkqKSTexs7vHJzsgiDzijz9CQvpo46T7xoX9Wk2wEXbzWudXQPKVeZp3rXw8Z6i3VS",
  "key5": "5KdPYJwEY4S2UjkKRMJ8Nv3TyHqHEGrH3uLtaCqcba8opwXf32Ap9qk4q6bnCEwCoMV7WnL15qPiY9xZLdjC9dnZ",
  "key6": "UkGsfS4FQ85funpGhpi7APDCqpYbSqxah8XEbDtdQ5xzcvAc4zpBLvobpEm5TdY8ZmiuMYew2snSNK6KkPzyfPy",
  "key7": "3uj7Dj62fNAjufgj3pbyeZHNrrS1MGbqsDMsHLGH6DjbvDufmwHNdpmpGkKH22YhpuLrLu4TpcD2dMVN8JCsvRTd",
  "key8": "n8BfHvAeGmmnFrbstDSeyRbigBKysRcmCWyfBuLbNQsu3y1Ew7wp4nXxoij9QJd1FcRqm7j9tiL825pnAKVSgfV",
  "key9": "2G7TJVdrXTnStGCddXLhsPkBcikjF7aPg3shjgbTA1J13Yzg6pCg5KWGBGnWv8jSjQ5hSUC7SDwirzBpqtaggU7e",
  "key10": "48V71jEptvdh4udGGNrVXTfn4KwWYS4XdBDUF5NhKZQBWLok5A5Xex63QPDhKeQ4fYTyGtoeMTYCjvn8PhpRerPk",
  "key11": "4zsxV9wuT8QFLoDC8fpJ7Y47RGDX1Y3JjmNRJhFznyyTJczTFcdJex2C5eX7c82sZZjZxAYq1Gv8wKYstFYHRyJ4",
  "key12": "571CCeaaCLRKzLfeuimriZ5LR61LczFLKtQosDtr4CaVaRi7xjRiLvoPz7Kz1QKr51Gb7Ptz4f3CRYhCGYmcyfbt",
  "key13": "3S3ZBFYnAvXN4A1NuB41g1AJjhXiSdmNMAsaqtV7kqqYsB7ZPRoHPEqe39cbJCUQfZVHmFz653MzMkS9smxfCqe4",
  "key14": "3SrgVzGJuwkUABLGhWMJpBj7PrWx85TJDwJoUgb6K6DJvBpP9tjxiBJ1kUEh7N5xzqghe1rTeDZ9hKaXu8ZwxbYb",
  "key15": "5vAgLFBTtM1qrWSXYuvjaLdieP3dhKPzRWvJtZ9rzGPfXLLCDcUJxvcBvT8BCxD2VNQLEiJsanwD46ve4NFTwsmr",
  "key16": "3ckBrswGP5fWg4e1cPmSNvGWQUtRkpH7cNdjcwqSJXdqGFM1TU1s27WAQHFo69oXoNnDmnxuyHxJWKwmXNXo5ptK",
  "key17": "25frPbYix5YiCFzvnRzgYngsdQFdVsi7YnddAj2zEF62T7aU5C2TvdMPhrMHtMuESwKV2Z7NVWVJUbSSo8wmZCEr",
  "key18": "3FS4qWJdcj8aSt3C7WkKLA2FGs25iBdmCosNipHSM5xVYM7tAWzNhKDZAd9ZVTWjwCU7hjjrFTF7CbPduqAmfUNb",
  "key19": "476tZQRjVczNhvpxVzP6EAPSiWJV7SW1RuqdGE8Bmjin2JDnNpHup1nyHf8LL7UCXqHnK5qYPb2f7jkRVtZNCkN8",
  "key20": "4L8t9kdnJsW8ZzK8R4pQ8FpMNfKP7jSSqvw7LZfeNerKCfoPx74EbjAXfSrUYAwonNcKv8Q2UedoLcTKYy8j8phS",
  "key21": "238y5ZJi2qWz4Y4ZtF2vmxfsDPrvaXyK4ZZ5PSQcausoMUeTuJvpi4S47coZqgoCGHAQPxBL8xq7oPWdbZ1USFYf",
  "key22": "3teBMGid7TF9duyNihBfwHGbLPqgyZiB9pmR27i85ScqodZAU6d5Xn2Xth2ziC8Q2ZJz4ZoKVT4Hn1HsUgzZDhL3",
  "key23": "5LWZ7P3BFduaMAeBKmY4MH8otCfMpF1deX4J5FbdF5pNrxSDumVD41YKQF8cnWPdazVyGdyJotCEECcsj2aJgqQ9",
  "key24": "3MaouU2GMRtdGGYmTP3ryVjrEA2E7rvsqz1rX9mTLkPom2MifhTWY7mUZcgGFadXCpKM1KWyStDxauyh7D8D5Y56",
  "key25": "5azQZowCJ15QMq5MpFGQiDCJLGBrdiQdmrxkhDEHEZgwMW9mjzLCh7YjKZqGgC45WD2sNsmC1AkMkGGKkSRw1Bkv",
  "key26": "4VDteDW7jD4YnZquRay9xftzpa2i8vdS3jzVJANJRpMVXdZgd45PixbLVCUinPRnrU5q9dGN2rEMGLLza2mAH1wb",
  "key27": "652CiVFMzZyGYraRGc4HC9h4MNg2Nyt2CVTfFUHMSmMbxd6ZvR7zKPr72iH9HuFNWoFxc2CxPsKvbRBudYuPgJ2K",
  "key28": "65Fiy8RuPpzuhoyCmVM3zFwmjSA1eRb6pGgrD5ZzURtdTcU4VHmd2yvDvez6Uxe989vRpoK3ajsVGc8oLRAbAenb",
  "key29": "5EbEw4tkxmKQvmiP9ByYwHnMNWiRXN61jztdDWzCb3ZjYas1iP1uQ79DFc7hwC8FjrYeeaSRnoYtz4khUbzH7Hca",
  "key30": "2uANUNxh8QqG7dhXk7xjNWr2YDuo1UqbJwXaXURUoHQjEo54AWdaiEZQbcqAyovHsPXgvStL1cDSuMfLp78g9f4B",
  "key31": "1ULbj8jjeGuBsuMJQh9QkgoW1SaJEBeKDYr3SXaPkUy7QUBRk1zFMWq4FM9x26iS8ujFqPGBZP1nZkJYqYDzsdo",
  "key32": "4MNurzvgeJG2DpiVdoZuydWussVFANLivTQVGe3QyvnhChDVnmL1d929JWxNZYEC4ALZsRnp7xqSSwnR4zLCo87i",
  "key33": "23hBmwQNmoi2ULnR7VwbFkw64Y6h9TncHQrD2V7fT25AxU7NJoeUcWchEohTsrzBphE4BbNuqUVrgFPs5FTfLdhE",
  "key34": "2hkWcmtKXFtMRP7hxK7XTCVz3gncH7XiVYa7k5tMX6bKdyx5Aoh395gTjNYsoGubPu4eTN8GwDeE2cs2vypTfA81",
  "key35": "5QVHEmJWU3iS7Vi2jEY6tk4fyWu99SP3sUU5eKxYnjHN8fJaQjkAEhKzacUjahwRwndMM46T5RLk8A2gDHDC6yHw",
  "key36": "57Tc9CaGn5wnnek7prXpgxbnhT7swpkUtYz5hADsBASA3igkNmNTHcYs8YjL8ksZRiu8cNTijXq2qJc3DhV9xTAM",
  "key37": "2Bv6PtEw4EojfCb76grGg27UHEYqdEkUFgHMyXWEn5yeF9zLgHqJRfWUbF28renwbe39Z1zQeF9GoNcLNv9tLsGz",
  "key38": "3CeNDP42WxUVx2HJp4s6zZeMuziijedJFuRxL8NVpyhfXsZnxZKQQjVyBtMjZiS9xecmaQr2ULkKS627JiiKimGq",
  "key39": "4YCRFzowjfrYDgSPSXiy6SDmsq6xe4TXRCC7GMvPMNb3CCLbBjsPPiy3jC86G2SQ8Ctjp8LKLT38cMSZQKKzB184",
  "key40": "4An5hXV6CNn9q8fEpW5EDvghkK4osFEATrVez9wYpgA1oFDLBACs3ebR6wTVyHiw2DtGuRDM4f1xSSTzCVFUuTEK"
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
