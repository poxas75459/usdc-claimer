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
    "5M9WM7T3TPLH3dDxRqqsLeN2yyCG1f9FSdQrejaTikm2uEupUxShC7X7tPh3X3bEHksN1UbxHbKekXFbaZfKo7SK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vCxqjaHjBoUniNCiYQRm6tQp2AdGgobutRCsbm9Pkyok7PQRRKDhrdetyEAbojY1o2sMBbWJSFGLdqp6XRX8KEr",
  "key1": "3vVzokeTwtxVguqGpiCA6xwn7dnEhTKms3htEcfAVphTUcj6JWv1z2s8qXsN9ZdhRqx6cqnqzv52pCo5LG2vbU42",
  "key2": "5q8zsQCTXCVHR8jJ6WuL5rVKgypQo96ziQ4DxXoRCxeJ1mYWsQHChyMdx6is5yTMEdMT3ZLvKcF55AgsL44CRTVE",
  "key3": "3HeNR4q6aTCFJT4MR29aoF6YSGm5LLZZyubffzdiaFwobUp9qUpDdMpJkEPkZCqB8pd5xXGcSj4TVRjXn6JhA4eZ",
  "key4": "5pd3Zs45Bq9iVtz241mvWMYqgX54KSLrxahff5T5quu7HJaSMrrTPC2pPjUpA8SZKJ68QmEG15vboszTSiTDWDbJ",
  "key5": "gHpaD58aEdPu5p8HiQytRAAxQyejpsNCv3u4XZAWpn3S3ijcDrpUngGtVMpdUz2u4y9QKepyxkVY6gsFPg9EH7B",
  "key6": "qN8jMxT2g2GoGrE4ybMUmeNS6q9J3aRFMQmsRtFZ1qkyyBDTgy6aPUCvB5RiWFa1mpKssNhmFHU9EP9CrsRsnbc",
  "key7": "65LiMHQxDh3PszTvn7CZajq21G2ZRNm8WQ6U1bhTn9m3Hxor3EtpggLvKa5EmAoz8yWvFCYpx9XpRzbxaUUwuCM3",
  "key8": "5DKwdYRoQgLDuxUuFNrW7hhDx6hWncEite6PGroGoLsqLqKGShnMq9cAmVKDtRh7vMHhe5SLhEMv1wr1q3GqVRaP",
  "key9": "AEvf96i51qCBwJCWLZwiwrHaQXNop63XWaecqQ4kYAMaGXQVzAQDfW6cupEZV9Gm2VPG5E37JmivCztFY92oCqX",
  "key10": "2K13jwZJMgYUevcwTUECbJdAi4vbyoZPXv96D2kdfupobEsTnFdMYM86gB2dBhNvk3eWG2vNs82Qt1XehjJ1gMAC",
  "key11": "61Z5ybJ1cMAF9MHGgw65UH4vN2UDuU1yqS9yKs4T7gCTE2G65wcRQWX7kGHjtP6eir9afeAY3DLsAwJ6rQB1zxBy",
  "key12": "5j15aBdoycxuAnQE2KZgwAnATHqKV8Ry9mA4vfwEMihw4ZoBNt5sY48LmJm5rTmMyWi9KidsZEDrcuV55RQD3JBY",
  "key13": "xuQnxpfcQvhEBJK7PC4vJiCSuL7XiCSr69QCrjd1xtfrKQjEBL4afVibtqQEqBfAS2rqCXFHh7XC7jnQHyu4ysH",
  "key14": "4WsXUpB9uhkoQszLk4H38zamQqNSyQDaGPkVYv2DHC146gQd1k7sJMVL5vAmywaUPoa2CEMstcGoy5GanezqT6A",
  "key15": "2ioAXMuN9Y9CwxsrMN11Ciuvsq6R4rzwHYdwfd6SLjkFLWZmqpoMpNDYwhm2BpLtbWy1RmH6w9L7gD3r4vDsLjBV",
  "key16": "65JW9MEyAVj6bUbCryNP9HN4igNs7qHYnsm2KdKbE77BK9qKrimKAV9UAQARWsbV7RB1xSMJjqon9FonjSofWckm",
  "key17": "2bi6JYQYh9a3xjLP8qm23jz5rhQitHJM2sAR7fEzk9oVxNrPhf8xCLRE5Ltc22hsDoXYiDyfAg4oK45fwsuG3K1N",
  "key18": "4TMG1pMHoBfYcjGtNDPRtAJKhcdgEj88saqtSR1PTqGAKYJCWuBCDhgRSw9Fa4PQdWaPUwfScWZsXSFN2FP7tvT6",
  "key19": "4mNVVyPtjZGGqPfTPD8hTVZjd4dQ347Z3pJoHr75dXsWhR2aPEbjEn6X6byoAZSKUxNe3nzm5YqDUjDkfG2b92ug",
  "key20": "5rPX9M3cvj3o6ZsttVCwBNtZ6mwcyDNhakknwhvjGuLduqqMxGkXhcmUFuairxGndesPFtyZByVJmQi26osXh5Fm",
  "key21": "5KZYApdfHrYnJcdUzogFimJBKmEViLrrZqRda2yt4soEJNEzJSXnEBKURtroA1muenNkUJhN6ocb7pK3ZBvwuK52",
  "key22": "3saEeV7zsLeappTMosQQeCg73JbKZVxqujDrkdMzaMLUGFypcFLAN1dzcTkACuVkiUoKuLwcXQCzgDJSFb7aVu6B",
  "key23": "2w7ZMSdY2t7UXDNdis8QtzXBxW7ZaM48avvsXH7t6hEfSwsd5BXpQqSAV3MhTZ4h7wMMJwtX21NuTxUT8rqbWp1Q",
  "key24": "3SgW1s7mcgR7uUVV8iz882CbPnGaxc7vWm5ke6P2ohtmoTa6VCaBeqiVdhtYR9FesNgWMgJyvqo3NtHbgyar64JV",
  "key25": "4wqNjCFmHAVaeh2iY193PSwLw6Dr6B8hFTJbVbUH26NbkHAC7H6J4KMz9X1orrbFBbDQCRhnLZDPvUpafBGrAF4k",
  "key26": "4jpBPXMP6aJpwugFRYWJxVFjX6piev2RCBvEoVXAY44opBUGossDCDAUNwWYb4KPEMNj2BVAX4q79HEEhxpJgRjg",
  "key27": "5254QRR8fAGmFH4T4VzmREjpfmja4K9ksJseypTp8VKh4JcUqSdRCwo5RZtqUZquK4HxBQs8x7ZSJ8XFHXJwjvkZ"
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
