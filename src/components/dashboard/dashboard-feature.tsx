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
    "5diszjM4TkYQffXcMfibGtkwLBRwdHYKe2RL6usotB2NzMxBo1fTVEuDcaWDv83NZPi9Uta8mLU6zs1spNXWYFLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1xJzLLcfieaa9sEbUBVk5QToRf4kZJqQvHE4bXMkqxLihjnAm5jhxCYfxjukHebjtcVgS9492wdFedVSVajSW7",
  "key1": "znNHBhUZVaymGiNapESGSD4occ2SDUG8Rp7hoZpcNEjTou6Jr7gzbHwxZj1JmUjWiSyX42qJZrupmto43qSUmVF",
  "key2": "Y7THnzSUFkerDTnob9o7BD5qLcfvXyHVYnRqe1CYgFrzAwy3o6zefjQgnPU9DGFvJr9kSxhFy12UqWCuhg1rpMw",
  "key3": "2suBimo7s2U2mM6dvoUFjBQ5Vr3gtQAHYgujShyjvWiHiVRcFfrPBy9b8HeDjwvcNKt8U5me4Pw8Htz8iVTvCGXZ",
  "key4": "4qnayAfseuQeW6SPczFBGqqR6EwJL9vWkQmDJN5TsuBWZTmmNsi5A3UQeqVaYCY6c2dMXHqzcMnyVp1pZuLwcb2r",
  "key5": "5xmpRTaSPPDY3xvE5Cp6TtJfrMTG6WPP8tTLNvjKBdmUKfq3952numUYJ37w4SjT94sGfDuKFyDATbckxufqfBdc",
  "key6": "R7VzrgJekjYrcyAMx1QGi1ALyUAACNyvWxyhY8gVE9D83A1EfyaJuArVa8RTwNDrVzJnjNTSRhTULKxWxW4foqA",
  "key7": "5Wzhx1kTPCEvxr4hcVGF2puqGRZcTJjmvZVy2cXtzb77sXXhKF17thnX9z5SSj8fKt1nmsbcvUos9MAA6J4iwHYx",
  "key8": "31uuyNRX1NMKWMVtEAZFBMhzPZqptJ2FenCErEMGAjMRcUAyRa5pcZK9rD9HsDAe76Zv2JaJWAmmfXJX1tGLZe4P",
  "key9": "2YfKFeiVBKTHbX5mF6vdZA3ABJJmvAqAJi4uWgxdgeHwkqGpSQtB45TFGoNMtzXcShxS8XJeB1yWarFKjA2XzpGC",
  "key10": "3tU5t9jyKWDFSuJatSWnx9CdChnjuZDizmdjcfFRvQLJ1fGSV2EeSBMaKuaRCV8nremCGpagsamnghXNTYSeSbGw",
  "key11": "He9KG9P9d82P1QEW9EXfMeVxYfPgHiG9oDVFEW6YPWT6SoWB1WT8tKtwdjfHwFtqqtL6brPXDPtpzSNMpFwG71i",
  "key12": "2zS6nDzssVzRGYmZrzouB6e8uUNYj4hC4MgGar9d6ERwvMiCutqrLodFX8NKsnrqG6uDa7sPdeoko3gEQTr4KQYg",
  "key13": "5pT3bM1KTLitUaj49VUfE5rghHeHgfb2otxBAfxqZwjwcTN27zpxpnVpgRbKTsK3Zj5XCVavcR7TZ6i88EQ6D5K2",
  "key14": "2ZSWVUeHX5rJTwwogxKbQKqpqwc4aPnMLBjX4LhMZUbvXrqc6oCxECSiAZZrRKcN5zPGSDEE9PiYsJiAS1xBUSCD",
  "key15": "4syk786iCdC2Gcm9rDQua2WRLPaV8x8XkuDSW8CAvU2bJAfqrVi8rSGeP6xN2tbbjKAdMio21CAVnTZVjbMwY5dn",
  "key16": "eJ6ib5zH7HdZnmMtZe5enVvvLou8ePqeoHvHiNTzqADDwCQT4k7tsFpe6UoSbyeuW5VHA3BHX9xbBqpmiVZdqEz",
  "key17": "5GaNYaTVA1bD62gzgRVNaZrUQADAyYSucpReiAHKyGCFKSbCpo8YmUSVQs61U2Xah6Q7vKD28BvdwyMUZ6Puj7Bi",
  "key18": "4VSDfj3wudAYBpgFZvRfQuDEorStiJnTurY6yLcdmRFnhbraivbNarBYCRwjUBJzhUNQP6vjuwnvyiYYiCqpBEyG",
  "key19": "638kJeC4XxLXTMjUQGwUBj1DtCtAr37PeEbBBGCj3hv51bTTBYSAbhKiVDmBgGrd1bikNKqzQYctVR18uwvAHycR",
  "key20": "2ZmNndMQhwTqwU5dj4j4k51bYirb6BkSBw7cJ8fdp9w1XNp3L8LatRSSpiQLQnx1cW9CgvFPSWPu5cyFj7C4W7UD",
  "key21": "4gpcN1XcGmamiPJqQHLq2j6TsLuv3sZyBfTVQ7KBgYzFQLaMMz5QTm1bt3nYbTLbW5vCvWRYmgoswiL4eZiddj3t",
  "key22": "3YVXguNaaCux9hDDctHXtJc3UBmutYPLBy19QZA4nRics6ioS7rBQVyAK9qcFxtZsBeFBx3nFn7Y1YacXrUR7d7E",
  "key23": "2UjJVPxqFf9PSqA4u9jg1h2Un3mtAsFwmL64YxUApUaErnUV2LwUQ2FFCBLWYk6tkwoPzktpvRk9cHW9UefV8F4F",
  "key24": "34SAxkLSLyF4AiE9GXqXreWUAKaPHzivPptrPDM7YoZkxGyvbihezkZz3cURPfwRjW4CD4hRKwQmq1JmbdUfB4nz",
  "key25": "Ui7hqaaPhCKWN6ouesiMi6wB4PHBpizXQUrbWbVb5q24HeuxqVkJfMnVZ5FaA9Xn3oX9FtnEpp1jPGriwpBXbFw",
  "key26": "tE4sexA4rE61UNgnUHUoLoAycVBzcbWhbLwwHvTmXYgmFgwCrii1xuPRwqoz9Syh2CgY7TT7J6wSpvJk16hKhPn",
  "key27": "P23z3PH3r8CWin3nTssqKRgdBuAHrkyyZKFZjyJ7hktf4MBbGHf64s1cH1gTDYqkNY8E5ULUAZCiFqxaq4naYUQ",
  "key28": "5umeFghoCNPQ2LEXBpUUHDTPQvBKjYyCipPUes7EJG5Vn9PUBxPPKp2wjpLqVzRdaVsUCMnBSGAyE1iJgrrmxoma",
  "key29": "2CS9vzdM3qnsHgcHauZqeNKA5nWgddzGYF4WAHhRyo9SMyNSQB4tdzegQQMdWZ4U4A92TJi35JoqbxfVAqUmKSef",
  "key30": "5XLLf9nBccdTWbycZa7zwHpJVTBgVDJ6CfevuhvykTwJqSNPSvd2DU8SE3b12e7LCGk3quzhjtm69hyjpGPbtmUA",
  "key31": "VDyUWC1LdnXCwbYZZspumDYFuMcVoig9rLntxzixtWkMidoSEJmLaS3aDLK8J7D9ydmKSUTGb3LKiCCPpW2Z3U4",
  "key32": "f1BPRhzXxWVeDCTn5bHp3KHH3DD87Mnia8pPmdD1SfgcSTGUd53YjKUpdaBt7WUJbTBnMqwXcgHFqagoNvKrZQE"
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
