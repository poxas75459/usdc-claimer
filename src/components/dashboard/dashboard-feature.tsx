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
    "22UMXcnrz1XBQnLLCWV4Z2Bimh1AstQqFcmnGE5khZ7Gr1e5xQ45cJvo8LQHyUYUFMRoLQRLrDEuCdVfLT3Y2TbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FeGL9LEdR3fMBfpGFLsSUG7FhCBcksU24RNwkGt5DzNtRkWY26spXDbKKVtm4sj82jvjHRvUKYbh9szDGxhWzSA",
  "key1": "5qNs8zxpx4baxY8ZohvEVpPURVbZ4ETF5DeVfGMWKKDdt5YHX3Q2YVnVtzpVuoYZyNBiyQvDC4898choyhpHuBqy",
  "key2": "2HVTLV7PLXgQDAYiaqMYwgisi58CDDHvxzi8U1FyYs7DAECYntNegGLVLYeRB2tY82queg56NKSFvUmvzKgqsckq",
  "key3": "3FRQuGhWRvn9WLNbKGxQZKaYtRcyuBmB8y4m29YTTKxSgiUgBHu3e7cdZcm4ZhkqF6SjfMP4D19pmA8o3vBp1RmK",
  "key4": "533PpRhcQue9TmRc5tU1ApRJPEZ84Stf9qaXiooXy688DFu5Mzu1KUpL7iFopRBkabHAUfgwhvVJz83CtPNhLtV5",
  "key5": "56YzEZQ7nxVzCm6GpFufhjYsQyqfF7c7qUQ2qEvyG1US4cnav5871oz1Scq6rcstQ6j8JMFjwB2eFusPSFMg9nSK",
  "key6": "675QJmWztByzxkfUNmbzhxzkq9NYvXEXNgJ9hPMFxThLSrT3rHtmYUvP1kvnQekWFxSE4s4YK9NnNch4dQXteNX6",
  "key7": "4qH5MyPkcxyiRa9Uwm2NHnydXRCXjMBzsyJvXFjiJCHF8jLWNPtVVqnNpVbttPcs6SH7izhr8foiH7FE3yZSg7xy",
  "key8": "24WVqzSVkuK9KW8pTk9hMpjHqH9Y4Ew6bEdo5LneBgcDTChek7UihrCfAwqMp64yKygVFHu2KqA4ZjK1ZuJfkvGu",
  "key9": "33BuqE4uN7XBz7j536De4zkB8ehCMZiE8iX7b5gupRRMfgDrVrGZoYc5rMKpWFg1BZJcfWRQy7gu4A69gqfSNdWj",
  "key10": "3kiDKsPiEKchGmBf7krqs2xhKF6VetVfrprcqjZDWk9a2rkjX1bQteaa9eydTUH7f74rBJoqEwwyxP25yAAXqQF5",
  "key11": "2CHZT9UuG9eHPfvgP19YSzkyy7ST9eHAhSfwN9RT1snMypTDiBwTrjcBmhpmiZVvKncaqig1Fj7FND5xkb3tnTUR",
  "key12": "2sn75qPyo8zypxBcKbQsWaJC744fET7DmYatnCP3DfrBHD91WbMvTbsjWhZui8XazVehCzshW6EsXEs5SYynPXtA",
  "key13": "5GaGAYtwvjuVLm8mbECvZwch3XJPC8pYwHtHtzmn7SPpyZWejEFy9zDTsBJ3LPhPJ9DSbP91CttFuCHxWT5qWQMu",
  "key14": "3sJ1SkeyZH3vm8XU54uajzU1mWW9DZknkeAX1X641na1Rz6KzQchW5XrqU61J3yyAdqjC7Squ5WVumV579CCqPXX",
  "key15": "5p1FKNUuLerE2fdsUB7ThdEU1LejnA44P9cybiztaixtdhk7k8EzfuA3A8P2nbvLZQwFWNdBuUZj44CNUhnFWbcC",
  "key16": "3EnrrdqDCFU2vBv7uXnHg7X6zfivjuhJATdrM4fGpL49dh7wQhqFc8WHxR54a88PtVrXwTU4ZREzdtRjzUHJnRfy",
  "key17": "5tEgXLpCEUMM5DjQtyKyUadTHwnByvWn4oxmCSN1NCia1N6HEd4DcLwCsVuMkRu49gZahm7Vf8NkN8qm8yPephQ3",
  "key18": "44LhBdhyGoq8HcbWDNGegAvkHiTzEHnPmB5k6MQSge5Zcd7Rvii52o1WELYbFbh8rXysipD6PmfBVtFJjcH3Akua",
  "key19": "2kfThAjHPdg6zGfwZ2mv9FHiqFnaQoWfDektCLa5GRiRQW54imCdF7GFYnJ17p8yGQgAZ5isstXVwvuUWZwPX3pq",
  "key20": "48N3e3J69hAyCBV9zAce17UnisQu3CSXDov5id4oDDd3HDi9mWzBfyxyVqLGPFQJvTUtWtrLJ6twWKmVYLBEwzw1",
  "key21": "4kdJraJhzwZKUvDg2M25cztmATZ5sL3eAD5AHkpWUd3zR7yFRS5WLnqdumAGmNkAB58G8P1ufEJRvNCBRXjK95X2",
  "key22": "2H2MJTByPBzCLEEXwTuGEZAyYMrWPBR4BJ8finF8CpmuMAAupNhx4nodKFESuBgyuqBDVPBdDSadKk7onQoVk62r",
  "key23": "4WvwroEezCmBwd9vk7nmFiVptfWRA7PginPkN9JA1JENx1kLwTDTD7xR7cGnyAgHmUkM86Wsb2RobV1THSp3Tm3R",
  "key24": "2AYiE7QmCvm6Radd4RTGgM5zeRTCUoPsPxjub7hivmv4dyXkAKEF75tmgTJTK6RVQNjc754RmjvSeNVsi7negdVA",
  "key25": "3sHpVjZPQERy5LcydCDRo96MrRiK3XUZhMVdrSaHFQ81Mvn8qG8HpgNvLgVDFzN3LNUwMCwtRjacWUhiyM4S7tDz",
  "key26": "2kT1wMg5zhMbA572JMqa8U4vZtuXsmKZA7jbt1YHtrnuiEZPqKCExRoa27XD4gxk4qDt2VfNyForuVqQJxyP3W9P",
  "key27": "4hVQuv7sbucKiG5hs9BQcFZLztDQ4oVfVR8sdocsrQpfyG3PeEgK9unbpwxRoi5hAXC21P7ToWTpBEUrHarfYpvV",
  "key28": "5mzuxhYraCB9JPfoa6Y6f9XfcW3MWAzpspEBFA617zNrmWRj6oJQSQQMRWkWkTxCQZuTx3JZmrdmTDWk12atgd7L",
  "key29": "qYVNZ86vdYw5kJQrfrfQUAmqXVQ28HvxNw4EGceYYedmZBvnSfxJ7SP21pWBtMqP4Cdp1uR2xhBtSFVVKeUdD42",
  "key30": "2bhH9mfdn21TqM1QJRhAZU6WWergWNFYhpJSDdiXdxzDpbzAfRWNjDSsiNYWM8xBN7Y97KadEcemCFAb2TCkF1is",
  "key31": "JKkhRNJ5hpTBb4iTcZ3SKtKyAbWgDCoRfkrncokzWLbXaNEkkrhXdt1innwnR2LLqTLX69hM2D9713thMfbCVPS"
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
