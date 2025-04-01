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
    "59yHGaKCff6beV8cPkvV3LwyLPma9TnQr7zRB5GMJ89MsR8WTmacfp7peZrq4aQ4m2uDRBLBGvLTf4MFC4Vf6Y9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBUyxw8KgbcNeE3DhTy3t9eM6rbec14F8VV4QSZPAdPHaBu6SQqV9mro8XcUBCpg7NXiu3hJDKa82kYDSt8B6Q9",
  "key1": "3qQsksDkjxMujqtDRAAxbzLHasB1FYsbhXu9TKg1r4yao3juhgE1NRLrsvchqhdUQuU7Z1vnBi3dL1T2XzhuXbCR",
  "key2": "4ydiGE1yP9VKGje8iSLHRzgCAdvR5KGjJRi3ga1DvhAE5gUme5r8XbkEJbdPBHfvJuf1UYvnRGeQf3Buc2PXSs8Z",
  "key3": "fgDVBb9CoZnMrQTFBYeQpHaafXxvTpM8gYqciNAakbGnBozpkaWRnYMetLPi15gt91bXQCzTmuZFfEonoCjgp21",
  "key4": "3aeZKGYEyrCARiLuLdz8NZrG1rhjUhigiR7JnBFZWVLE6NRNdzYqJNMHXqA7Hfy7s3HokkvkmJUc2jcg4CsV8zs9",
  "key5": "B94wH12HinTCFXRLwkiV27rssoWtsuCF2KLCrUe3Ddh7fecGAQPwe7R14oe8cBXZCZvuoWuBaAA9ytXaVfm5cSa",
  "key6": "29dEL8DmYX7Fp4FPNKKXRFXQZ68tE1qYqpE6781RnpyhXYoWwYCgQLrFBrNnejTtB1vbDcTzYvVuN11yj2qqNwtP",
  "key7": "b5LBAq76tLpTN32jjFWqUXK9zZ26n9AUVoePAVU6YYWCWZke45U3a1C9XBwkQfWLoWJ6ZKHVFbECNFV951CkzYn",
  "key8": "5Gv6v77rN4pRfL6RpZzurNo1dw2V3NxEfP49tNv1fsxN2MQ5v65JVWY6hS5HHgXCicfsCXiNEccpGKSv2gMQ9Leo",
  "key9": "38QfAwYDqLWgUxFCamLhn4RQco9mrMsj3PwAGXZdLT6Xrok55jTnyqxPUYKQgL9HcABxTjG6hkoYciNeT8SSiApp",
  "key10": "5F7P56j9MUqpFWZqtGZXhWtfkkQQCYRmDWq4uGcgcjvdqo1S3iDvfkL3ksKVCA5v8znkKMwU7jXE8YogJpwvSeHz",
  "key11": "4bcnD7ZQrpP5sjjkwCzAJDZPa32maNeVCmBuTFGM3DyzLeMV781JhCxHoC1GDh7o2GGBUmgV1waUqioWicHQLNni",
  "key12": "5DTCSrQB1oSdduCahvUsDb4FxPyfKpaFBnm5eBB61yG83WcfsC4Ua4Gz89XRfifYuu9WfrC9sw9w4qFs5yXe2dPp",
  "key13": "4n9ZNwvMrBqSX76GNzjKNebXvRuf6pGuye1yYVigQg1RpwVghH9NnfXpZXXT53v7AnoKyWunp7rBXoe725dtPi6A",
  "key14": "4ue2hfoJEQPbS35icsA46XA9PfJFfnpQEfgX5Lf8B9KAPDqY86JwzVmTqUmWnE98gDwWgffPQewXdSgB5ZU3sQgP",
  "key15": "22FFwGWcKqiokxCaSkwBzRbaLzgsx9GiBVhnrnw3bAEG6kwkKjRpp73mrcPsYBdAZAz4RhW4S5MBMgNoBmRbk6CY",
  "key16": "4PaziynyPQVCKYbEZAAA7AeNKboTgBNUa6QAE4wKT4AVjERXgQa2bAca3XU2YEJWm6LXaNErpdKhR2Jcxh7L6i8v",
  "key17": "59Kc1ih7txhzhvkPE4vLZyNwGoPQUU3nUkno2wEPDaDr3Lpefo15Ap4h6ow89uZKtHPBtZGaLEppxYPKHfNA1RdA",
  "key18": "3zAswVVqqHfte3n5pHu31q3dKhyCiuomxcwPJSebMZN6SW7NkJJKCi1L1opYmTAuqpZbpVd5JftyWhNqk88dAKQB",
  "key19": "33B6qpWzpQCpABoNcq71h5zE9QNhwpYA3P4cJsqjCbUQksvSzFvX8Kc7Qa17aWDdv5aQKERteXFUyYGyoGzZxySA",
  "key20": "3MGyhZfYrQWFioEHJJKWMhMRAXPFFeoFgMhZypP9LuGyRvsSX2esSknfnpumCJVbif3wDUMLQNG6KHAyoc9juuU6",
  "key21": "2CKmHiWdFdDn6sXCDKt9uZ4DKaEVN7ZrsAz3GwKHrjmyRtLobcACAz3Mygckh33mVy2aEAKjzAgNCuq4CFr4wUPN",
  "key22": "56aV7tqqS3FGKYpwA1EGRSYNjhSDPMM3mJSLVrYYpSgaRoSD2geL15uR7vWwNN3inW7Y1GDarqHrViL76CXLegg6",
  "key23": "VebrArr8HNw3d7KuwzZJH9mKG1oeYyGayLPqqBsnBYRQSpX81gBMSsZw5D7BFRnAWdYCSXCbhCR7hjxB6vgpwj4",
  "key24": "5sQVef8EJozSFSHrgYzSCzULSZrxsopEqVsLZAgg4CVbSTDrifZtg7uRbDnAtAjXDYwz1FnMBLBjRD4jW9aSNN1x",
  "key25": "3Cibcck3d8LXT5bRUdgqivG3H2DA17WK1xSJ8pBP18Qr8MTqCTa7xcneH75EsURjbvc1tvQEB8fvxesHp1x6pJPD",
  "key26": "66yJw6gaD61B4jhGLeRtv2Y1c9NU7q2UamZuUipcCdhwqScxqa5sWZbfXo3msX92HmgkZgffdVFghbA2GtuzzJuV",
  "key27": "3NzcATeexjPoseyhFi88oF5ybDnoc5yETknQ384jTdjotrRfbR1WQZBt64Ba5jDzXhPrT4xvJx33kuLUq74eYepw",
  "key28": "iEY5HPFghtQhd3Pq65ArkskMQJHMMxUh2FCYc215t73JaVS83n1HANCPJQs1uUQoAgScCSddfv2ZH962gwmsMf2",
  "key29": "4XourdJdgNdXpQf99X6cKBYuBwKpBDcS4oaAtW48DbiYWpMtXcQCfbFqzois48Atef8EBTedk7SdnvWmmsQ5wrk9",
  "key30": "3e99TBqsCw5Cs2MeYpeD29aNZcAPPn8hcqfjMP2qyhunnH1ySCEnZJwtzFjbSGAkK7EyP8KkTUYaDLeMmzWgK1uc",
  "key31": "4D42pHrTSoh8KPdHehzC2M7xr6Xu9M65RubbBAxp1UA6r8uP8fmZgHU81y1oV8HqBSGiYUHoAipm9o8w4Mmw6ZjE",
  "key32": "3RPnacn6a7aDAFaB7j9qfW275qKe1PSkXxKcNS9WKYgYtNb7fNT5WSuHFJmYnywKsKnHCAPdN29EPRpXpou2R3B3",
  "key33": "5uN91NLjQV9fFUK69h9wryEP8zFR17aFYcUhAqkNCMTB4JMmyoKaN1A419fRu8gJ3bZn4qNVkjm421HVYSyXA72u",
  "key34": "jdfVF9oUoLow7VBnj33Qq3EUyGyVdY9aiw86hSQHaG8vk47JwjpvWFSx7UXLCMaCyXdHtH1FFGq5GqzPynBn9PM",
  "key35": "2eEJ8ZXgm48kFQqkWep8ZQC7vb96xKy2UGbmD1wRyFjqQE5KNsxVSthu54jJoJ1oWQ7ZyAjLiSZrxmrvdgbLebdk",
  "key36": "nyS81ed4gNtSsxeFUkfQdGqiputm3Fkqdme9DWpaG8R6JZT7int5pMrY5ajEyjZkwrbyK7ZGYLim2STh6JzZ79R"
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
