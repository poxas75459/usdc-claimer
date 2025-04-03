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
    "2fTBXvhVka5CvkWcVfg3zqMan31twnhdPgMj7zJXBYmWvUmdaPT7PrUcJ7MVP9JjYs3ksqrF7obBmXGwUJiF3gzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YUKT6icKRtuUq5dAcQui112u25Foj3cLqyKJkmEoneN5CeLdKBUv954CSqawJusjLZy6jo6QzpGbk7HRPrjh486",
  "key1": "4W6L35BhiShFnem2LJoJUw9N52sek7KjRCWr7Burw86kKfHkpupvpwEuecFWP7KJvKBY5ourJPo1KpCVtPfKghN2",
  "key2": "2AdQYHzS2u3adfL6vWTeZ1UwDo5KnwuHHhmYPsbg7kxTTGbn3XN2aFjsTAMkjgx2dj3nftWZL6DndPEDgL5A2Gph",
  "key3": "36MYZXuk1fpTiCdPQdFn4uX2oYzQ9Mgw7hEgEUb1C8p1xonMZsBwZCdvvHJx9YcW6dsSjmh75gUMoN5veA5HStBD",
  "key4": "Uq9aC9qH6MWcLRhdrfBExFWefTuNRb4PWxH8Vbsqnfsyd9yA4KSXsP1cf4f3bpsQzRLGtTWLn1ZWB4DZyTmYhoe",
  "key5": "4N7iD3KSA1GkCyFdTBGRUVvKdqqKGhvKtPTF2hS27jYhMFcQZiNDJoFu1ZBncSrmuTV5Y9hfga2rYAiNCUgmbd8S",
  "key6": "25yMuCPq5prsLdFH3hyPszVpvsh9M1vfFH7uYTKURjtwojekEiDpzyeKZaKd4QXZeNRy9DFg8Mp5yF84cn6DEM4D",
  "key7": "2cTshhnQGJB76UFzbsDjU7b8tJi9ruXcTYhVf3wM8EgS15HpuJw35kWWEFAPs8jQg8xHRCmxiFKZxK7VybzhsRcs",
  "key8": "5MtKdQEiyiGKspKy4u4iBUXzCShPN3mmcosxPxWkamaJFkWXGmdfMvY346qFWrfBBHe1neSkCTSrnd8mZty7fygX",
  "key9": "3Mdmqf6uTEzLfyv7yuEaNE2zLxZJAREMsxspvFde43QCUC3Azm3e5WBv2NxokUEznirixvXdH8isYhsNS7aCC9Y5",
  "key10": "5uPQoAhgKERBzPY6wWEAmtU7bU89ornqWM44WnHwABBm3NSx7sH42mnhJv1PeBroWXu9BtDHZota4HH2mTtJuqxu",
  "key11": "2AGAaAuEvFKo4d6ewiqx7hT9G6ayep6YjMN6F2GBWCNRYWtUkXT63dipetiV26N3hHnqiyBJkxoRmikLvri9pshy",
  "key12": "4GmcbC1u88VRXTqkg29AoXySr2zUYVahc692ipXepjv9eHGkikXExFKHV4r3gmQmFBmYM1C7zBMFk4MTerFsf2D4",
  "key13": "8MvawJbFZ1HEEWoNQEtdNnKHmiAx2SS5CFxzT4EYRfV1LU6o9hdwsDbKATDtz9yxsWeUUtt3dkJCLnpyk3D5VLK",
  "key14": "5MvZHkXeeK6ivF1SXX4ksETxwZgbXCJLarte1MwdT73KSCdPrdGB8Z2oKx9mAwP6QQ9zAri11MzWsZKgqMzoS5sh",
  "key15": "3LYqTztCAdjcQPDUaZWQjuEJxk1nCp6U1p8Eq1Whcx3gAZxG4Qg9Qgs1CUcawEu1kwE4EKjyE5Zz4eCXkz3jKPbg",
  "key16": "2NyTyJ6ouuTcK4zNGKuazrpAMfTm4YF2H26fnybng57vRBCkjrQPiaNH23UWxhJ2pfGvhwWuf1U1yKxm8FdShHHh",
  "key17": "m8fXreU56aiNYP21hNMqnSMTa2hGLucPjjLSxuRqdDTft2mAD9BnH3mmEmj6YGtSThibbRvdXMaUwKAkyLnaFrB",
  "key18": "2fErQ9Ugh86r9ZscYqEP3jLDGBeAaMfoAq8XeEEWqP6ajYaS9gtis5KmLnCbbKicqgvorbZzyYXSmJg5peguZ6ji",
  "key19": "qh5615HcSHtNaaRvDEjWvgniJWeSL7Yq2DuJV1w1b2U88EHZWEqRxwL5oA4Jfo16tfZX6n85HQr539G8br7ig4z",
  "key20": "mZKmz5SfevJgVMEN5obEBxc4GY74bdS97oVocHsk7MWVvGHx9DpAUHCAvuPv1kXeNg3WZLYs7gvYgQNXK1qyWFP",
  "key21": "3ib95PEHt3DVgwado15jBUkSFctwy6D4xmAndx33fJj79DqPTho2GcXGKSBDZ4CPuWp81PWFZwDWW9xuNAT6aNxp",
  "key22": "24rvWFdAmhqhNzfmUHb2iYLiBMiiHpgwA6mTtDewfbLveZcewdHRpxn43HP8AbcJedmik6JZEtLaWfDdkEkBGjN3",
  "key23": "5Wa6z1nqFD8viC47fPL9hEkhtrHnoRgTzPezTwxipNHTPAmrQz8v28cWwjXod1Rgq8RM5xoyHqP2Pv8M6sexNqGg",
  "key24": "3ykyB57r4bw5n18cxqkJoy3REyxoQsFqks2qSB75Q83Et1KkQwE9oXFJKTc5d7EBe6EMQCZ98zfxCdG1HZXRrtTz",
  "key25": "5U18i9taocZAbop2fRdiedGLrzC1p6vgTYHAzQ7fh5pTQ3ShTG23ETfonwXUbh4uUD2WYvPUp5m8RANKjFuhNoBS",
  "key26": "5PP5k4R6Gkebej1iiktcjjMcYdWqMZyyCcCwmLnj1rxVzNxXoRHZ15zhTAKcQga5t7FsmKtEWSNqCRdYqiQYuzWH",
  "key27": "irhcF7wPXc2C9yngPfsozh6ozsi9EVjV8icV4gaX54hrbgBCeTcQz1w9yfQiVCZjKXZwFDEtJSLeWrGTfcALwtS",
  "key28": "4VM3UW6ZazzSRycT7aSAwtGZwkmtEPzBHVcbNwcqbRKpbibwhawKocY4G5qxPbNfJfMbCuhcUgLVRxX84KM4wHhW",
  "key29": "2nKwMwY5MXCx1U9FjCno23JrqpNM2VxP86qAhbvxUXNBxiUfpgQ75yJbBA3XDjWEVSEvbvYkTWG4eRQki6QRamUC",
  "key30": "62uw9vSkuxMgq6xXWET29vbzYAkSwZCzczo2ZzSsv4RsuFrpXtuJ8XkP8La51dHGcaTJTnPUnqfhNAAZtRNbXK4z",
  "key31": "5f95zWL7LJ2jT83uFhEztfa44XkizhA9DgTC2y33qXWMy1qwL4TZmSEw2dp8YMwXKwxKCCGBwRgcWvvE5UBq2gxa",
  "key32": "2CFgpVTKtTKYjSBuPf4WbR2KdGeLfeoPpV1FRRSRqmNSctpih4acusa2159bdYwPqRsEfkyL5mEfR1ThA1bPrjFV",
  "key33": "2hn9aUeoECr2emAby411ADGSC7hhvNh5rHSvzPPC7947GCTLPjkGYuzM2L526jdNe2pmjaUbYdYM3rE8BhuX27Cc",
  "key34": "4cAaK6SpY36cErf225md1o9UQrKoWCfnuDR1LXFG3uventZGhMewABLg9Kk2g6a9auTfsPXKQQ5AAPaLtAbmiXwa",
  "key35": "2rL9fnqE2ePPY1PK9YeagDdG4eF5A4JaSFooVcLGRFeaKMPb8byw9rQVmp2nfVgwrs8qK4M6vV1xwuxeqcTqoTLF",
  "key36": "8vgiQckQf5t4WTjLDuZQrtGwUWJs3aZMhPj7MYUQPhgkvcGyk2YH9eyNEh47j7idnizju5rZ1C2Bn1PD6ESfNke",
  "key37": "4SCputXTWFTd1M18M3WqhBief8JMGBVYJGCGWtKgxRrNfBvXBxyVybd1B3u9m7uArAYpGZU1KcYUXGwGkTbzhz13",
  "key38": "4k3DbUyCCxgR9kwAxhVFx3KXGi2RmjpPWc6RPsN4SXvS7sGreqWcGRpb4Ai2384x5VLUfiKTo8H95TdVSNBQFtGJ",
  "key39": "3HHLBep9sR1vqDPqtRHxEPEhbbkpyZyYLKiaUE5E4jnWxzNNNjK97w9jxWURZsMTAXcaW3usGP4BpPtxXqb51Sju",
  "key40": "3hiQRihfvdgetyozTv1j4kjpod5a5AY89uWBpRzt24kKdRixuR4Qr6sRWJzhKhZ69psv6CJchv4qEDtk6em4eYz1",
  "key41": "5RH1yku9vTUNo3W3PrCMytvCy3PcTvnFH5iJQJaKLa1jbHLkffCufTcUieS6sQbi1CY2apUcwuB4MPRD1KyEuFQT",
  "key42": "4Z2rjbE8jnPsUXTqWeaQdXvB9LEHVB6gbZUFRre6RmVKKmsxTyTdERyi4L17w6zhx7mqjzxmLUh8KcW5XZG393ns",
  "key43": "5toFq7w5pN2jkqH8iTbvJzYjLwev7dnXHhaJxX31rvpHKnVyTHVHZ6VyDgwXdxPpg4hKds1E2bSMN5mTtKRNSFAs",
  "key44": "3iBaAuJKeeriMdHmDY1CQJaT9a9dPSLwqhsGQVSaqxpxfWXrGpK5CV7vuKJn7FTE49tRCRMQnA5J3FPAQnZrMFQK",
  "key45": "4PgnoghiHQEGp1WaCFQesEdAUb3bUaa4jV37e3xbQuUBbpihjP3tSxi5cafdTALnWsHPiLVR7xQdWeAryPhfowiA"
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
