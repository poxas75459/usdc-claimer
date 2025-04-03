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
    "3bzbv7tXZEHvjHhZkXVhWH95FoVTKXtiUekaeVrcpNy1rHzNDmhpHCfkma5YuvWHFSUxnUZR1xmD35LHVUmciXVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sG71H8VcA69xAAo5TGuupcgaEj6p6zEx38GciGpkHeKQrYiFeQyGiut7w19Y1ikr82t5Y5zVskDuRt61QE4hQec",
  "key1": "347ndF4L7MKsCTGCFLBHguD5Km7fLyiouKDQXpaSjTVEhPFbusKvjRLPCVnsSLTc1R8dYParKy18B5kFWUFWon3E",
  "key2": "WoWJUsWDkXS8FWWoBw4kLq7wQrMfPw6t4YEy2TEZJ2DezLCVc7J5BwPQikh8cHrFWFKK2u52KP3GHTh9YRbdRfu",
  "key3": "2masRFykeSf9angqgBKnLJhZLfpRyaWti5twavGzP4jZ1NKNcz9wVyt55A1YoRAypyqrVwMGe9fKpdHh3SezLxgP",
  "key4": "3NdmBmgXuRoTtNxgT3dPP1d7Ujy1gqmmSaq1JfH3Bb1bdjq7fPgZF7o9GwAbbZwketUZMvHUvZu8CPSsz4cVnk5d",
  "key5": "y5YU8vBR2r7HdX2WWsShcaqzwMbavbhPMwDjcXVSC3oUFcTVvg5mkWpcAgryazhhrBPWwRhPM8DwTJNHQHe6iNo",
  "key6": "2n3pCBtnqWxjZRhRbXn7Zm1ggBdhEf5GBum3xChjv9Rk34E3fzxoTeERYfVvFYqP58Wfc9BhsBrWtGEMq1XrbLth",
  "key7": "hcFspuVB5XH1DjSbpak8Y5aZnU4xMu3vNWQa7PiETL2mVTBXtcTv8CpuBjfAjXouPTsUa7ByTQbiQAjr7G6yzMJ",
  "key8": "4roVYAwxaj8pZAE5E9UtpjNmXShPRyZwq7rQYCe2WgYrKfusWsFDt9rrsLqDZEF2wJV9xPFmZiaPZvsukD4BcYjX",
  "key9": "5K3D7Y3ymrsi9MzLWqrVhDYfv7Ur2dj91Vs4HR1hrWLPPfQPctRL6StPHGSQXmFs5DPdfeYUnJfU6nDKZupdeJZQ",
  "key10": "3NaKbLYmzk1FtAiDiJ5M1yB8KDFJX6nUc6Ba8tc67nVr8JurV1d9rFkKDsubF5qzZ69pBA5c9uNuZzcPA3Nz99o3",
  "key11": "29Fk98nHBfyYAePsVoHuAsWg3Q7qZ5pb5bb7XrgPxrkBtgYNLVD7sbAb9snUsmQL6oxiyDPTF2gVUDcGPu2ZDSFU",
  "key12": "458TW9oEVKFUN3SN1B3DwLLAj32PpfqSEavrnKqFLF9ZBZS9BpFbBr3pUCrm1viaEWtG78gGsSxg2JzLYYCzRHwh",
  "key13": "4dn7M1omx9cosAsRc4h8Lphmxn542tvwmgbWke75cimJL1kGDH61MJcigySm4z95pVdNNrLZBSMMZWq4eoPDy25Q",
  "key14": "2dUQshA7ABdapzkYP1cLCP1wED711k3WkMKu2iq1zCAvKL9QRWc7WZmzRYHcQZVVRvYUpaScexQycQepeLkkA4cb",
  "key15": "6sq1myQUTvWudWsME5uYgy9EcjKNSgTTUEHDRjwh8igs2QgspKevwFiAKAuSsCjdpNke94j8ussbjv1QTMDpU4T",
  "key16": "4Fbu7LrYf5q9aHoFqc53axGfsHLvq2XvAQzeDGBxfgW55SVQfehaTTzdc81aWH1UB5wg4nhyzMBVu5PFeR2LmM3A",
  "key17": "XrHrweNmPJhpTjCiZrmNfhTaEXSaTY2yF8BhhJNqMGFbrLUTUkXePMCTq6mELBtF5kuzZLDshCbf4XFmjBaW1Gq",
  "key18": "4ZoVuz3chUN7LZQ9W2eTQe7MoUbQPtxqQHwYHCn8Zi3ifEAZD8bDZ66wx9wEKQHBCHxcZy8a1Q6JkGbXAVXP5Z7q",
  "key19": "4oFzj35pGTFADfTwu4agGyWs2Y1iT5v9eUfZh6SFbkssQvPTF1a1EsZgvCxswz5CAJzFjpkNjHMTZnDG3j8oASKG",
  "key20": "2JKurcXnkxJEdHP7ShQHxch97aG5oEdAxHYQzwcrbun4nFVw9SVhvt4wMkw5enCdb2DuvbTAd1248nbfSSB1bTed",
  "key21": "3UYZqtSsFB3ewwVdkBzG4z2hKydDnchLQKiRAatYH6ZNbaiauims7vCEc4hcQAc6hbt9rbfTTez5SJo2Ftw8Jsqk",
  "key22": "3JEZNqv6z2k8J8M3DZDrYcoNxCDMd814t3AkgGFmPW2a3fdbNxoWomkU1mDhu7ZyBpX64b3MRaSb2bWzCYNG3egV",
  "key23": "4ygYUKJ5KVKtknVzPjdcBYWnE9a7ZpGAmg45ggsofbauQnnqo7oB41BA4gWKDGoFfyzjkAZGewC8AZd7RofZtAJ8",
  "key24": "2MmpMoikyFHE3ZdBU2NxxfZ7AutWLHRUTXfnJLyFDFYWTVsb9DXvd9dkASx1sR3HBGqP496pFLaN3AChWgtCda6b",
  "key25": "2JK3ArwiHrBrUGJoWS3xRJaMSGnmN8FWbQHPx7S8ynoE9FitLTwD96KAXQbK3Ya8MHgxKAMJTFrNB8x2GXkycqhg",
  "key26": "4vvn8EeEUW2FFJzbnNrQSx5T47iY9YP2GzfU6ndq93DB3TB1vXZ9xMj9AWwwgC8kMrKogJigFfVLsrZRUDHPr66Z",
  "key27": "31oCeZVQuQoDYNBCdTeQktL58QANqHSv2QHG6pw4DmHBmYk9kKtwagH9tEBh9Hu39zsMnSkjmbqSjEpjeJoWJV3N",
  "key28": "2E2iUvjnXWbyncDddUGTj4TQsYc2ttxZmJdJSiUzfXv8LXjf44vdnt7gsEXJSDjEa6r6U5mTPZVGdEwmB3Ta5VNA",
  "key29": "4XVbEEw2apgEZufRhu9x2RLNRH58qSyHPxiKrA8bgSDPw77DxGzTwVycZQ8KC9dxMTPwmgX8aQ7xVS2ots7CfJ5T",
  "key30": "7J9aA71uesBNYQR2NSQnKSLy11umnvDJUkhfLznTakT5MtPWXAcoLo91itDkfA5oTkg4vkQHZ7FtGZpAAbpLioR",
  "key31": "2bgeTNg3HcxZfpYpXMFzq8DhzCkBishKLC4L5JPj8Jsy2trfsAhhRAD8KzyhkS5JCZWn7LvADJdJqbH4H7FZS5SY",
  "key32": "3BkA9nRjyYknTwuP8PUiUzAPKjemANqrqewQLSrn2scnidw9aFTvXBDRZqWCkFAmbc1jPiHXGRkzEsjKe7QYYGY8",
  "key33": "3uL9xLhjziP6BxGD4UzkD2ZRQ6J11JxqD8eLarM7egnXpYUrZ2TZ676z5F6VFYDzqXefAwfU9CrTRrS4nNo3djsM",
  "key34": "3bCfpYW9B3YCAGNoP8PX888bScNZJmntkmduj1uyJMBedseBYNbmdbTvERMKVbcRaHiRzfYPYvQyVETBDPKC3tsb",
  "key35": "5WzhkpmcigoE23qSBKhdtqbKn38XLVG5vqApxNRkh4Xtcf45c3wg4HvUZn7LgEdWmz28yQp4rdCXDHkfoqSZqvJa",
  "key36": "2A7owmR9Eje1UG8n6SwUkEwzBnmbzLhRL2pNguNMeReW1SrtpgkkfctqHYHXsjQ7ynjf2PpsYYm65YGK2ZhBmqmS",
  "key37": "4axeTbRw3b5vbJRa4mCjBkyQ8Mw4u44WvxhmrJsx1PPMoPVrKQmHn2cVoF2tPZSihcx7pShcxJRAcfj7XS6oE4S6",
  "key38": "2aBhqQQvJV9HB9qJ4cT1fN4fhq6hw3FfnqXPm9CBj9z54orUBpsi9mSXB45XKB7Hb6X3Sxth44nLZXABZwSpzQQ5",
  "key39": "42RvNKdPAAP3rGh5YJEWMKWcofcUpLE6m7gk1itdPiDDPmwb5MYqDnkQrzznsGy7uZexkCBSPuer4vxZ9anVAJzL",
  "key40": "NvjPNhjczpvRjj41o8XZoee1dY18B1LQVntWvDoRBeJcAH9syqMqg3KtaLYrKbP6GnFDH8ZHm1EzX6nKqyhAYin"
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
