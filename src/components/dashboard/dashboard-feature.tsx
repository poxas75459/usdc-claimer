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
    "3RSTuBS3vW1q2Gw9ayruvvZJ5KQnCo3ELD5kUyDvAGVFj4LveWx6R5MXmRkkx5D1eB8vGmCsckGnDqdBZc3D2Rno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xeVQih7JeVNbgktuSWzWUryuDkgVDosHwkhApxBKYN867iA6JpTSeDsNrxkPBWFN1eLvZWJMey4yBjyZUVeyr89",
  "key1": "5LedACA3ebNjamE1NSZzzQQ4WG6SSUfp9wFc3ShHDzm8YyFrbrnMWtmaz8qav5QgVbW9NjtsRYPrZEv9sDUSC7CK",
  "key2": "54vcqcvgASnbgjPcsy9ornL6X2YAUa8pgoAueAzGoUyeEzkhKn1MZrPoXqqKxNTMDAG3GvvfQfqQ1Rfp6HV1gffj",
  "key3": "421n3QE9jW7PUWhnd4c3LAyj7FB1iNoGdffwhdo7rJkzztGEsNSYEhA1H5AZtAYV3BFo8XGFqMBtSCP8KgsXZUF7",
  "key4": "32sTAerRy9bcLNkPQQUjnmHziH8AH6oynyCeVFtEtx6hCoT4Gt1Xjog3f7we74V5JCoTbjkFokXn1jTpJGpZ4tmw",
  "key5": "3N11PBLmA23rABUMnz8nx4MbiAZ7dZP5HmyBAw8wyqfQwSjnKNKASNtt18GD7jiamfCqakm2bjpf1ciLqgTeoXWa",
  "key6": "2sMYeqGB3BC28Hykh3oSXtFf2mjTsx5YVSy718BcRKtdAU5XGC7sRfBCB4nzUttL8UoskR5sR6PgV4uMgXovTxbg",
  "key7": "3RVc4jcX8Y8d2dTyhvtjE7e8ymqiwhi8cmTLkgKhiDdRGvYsGhU2qwhWxQ1j3Lu95DyykNUvnq7KCdGyXM4hKwVJ",
  "key8": "4R1M7gL9cRU89jzKi4FhN4UzC5UehqaqcE4R7Yc3c4K3rFz1UDN5rMhLQEGBeeHoAAYPfZdGRyCLRPUpTNe6smMh",
  "key9": "RrQYmd27hazaPr2zxhCkwdswtaJEHU59Jfcu7j82xEsJFZpAUt66LBQgEy6YuUNqcymsuwbUw3x5s8aHvaGTtZD",
  "key10": "5ZuNFZ3dHMQ1vcuUsA6hSj3qtmxegZZc3zqbYXxP1DhJBZh74fcXu2Lsevg2odQ6qGF6Hnj3XDwXTs1jRwbQUS6k",
  "key11": "56StoRytqJyJWtqE6QgXyGvquUh37uW3VEuoeXfHRo1ppfHXdJL3omhxJXKKwcBNSUbmRve1CLYT43G7tmLDPChU",
  "key12": "39hcmXMhu92E9FjgssK5QyXcjj7ryaTGkMTWBwjmvBhsmFtUUpyC2cbXy9ySF244AnoRoE7SnnbZj8LN7zyr439g",
  "key13": "3bwum5zycX1XjAogM1XxapW9MkrLgQLXNgsYfuwuuhw2qirDwxcBajT3TVGYrhktkgGWtoo8GHEucTyYyLRiwyTs",
  "key14": "2F67eYSg8QUbng69a5NhWgcjKJwbY4udVBMsEBF8AheEa99pEFzwHgwcHhfwUjoMKMaAWu8ZgCdqbv98JRFdE273",
  "key15": "LUuiEj2WRL2HyiEg4NDAT7aTn1FsNV8KMMULP2X9LqG5GGo6RYCvMHKm5VCrQcibgJTyGisE22o6gZviBBzjy2B",
  "key16": "4H9gPqFaHTthCMYekMUMDyzE7BMQ4qzuVqccJafSgg1H64wtka6cnnFsHiwcVC8JWV73eJ6cpbVWvRPBoD8J3cuQ",
  "key17": "23SMv5YZtfFfFwc4gRVB4n4uqYq3du1oTd4DpVz6vnk4KBXNyYg7fgQJodunGGwPLZvG2YmDJdXq1m6xCXiA8wy9",
  "key18": "3QFtP7y9zgAduWApwfCYhJM18QytRocpwbzASPR3fxdq7Jw8yPkf2yozXM2g3dDrBGtr4uiEmYywB2FiFrDTv1FE",
  "key19": "x8zuNzY1nmh6ryMfbiSFxK7FrBGWo1yVaVUtuqX6vPwARnatuYNYEXbWRWGYqq8BE2zxE3wzA8q8Vvc68MEmQMw",
  "key20": "4ixBhsuEGbqbBDUxNWEnh2aNWKrnXi4bDEwkjK389EaiGr9vJ2ZiZKTKnkGB2A4CvDti4EJRVbzx3yjJF7chpiPs",
  "key21": "qknKXHWi7zzRSg6wWBvh2qjB82cFzwmoXCkLTLkSWU6ziVfoNcPZT5q3BQye9X3HmJzcwqCrV7gXHi3YGqTgpdJ",
  "key22": "4ptM3cdcib9Ycvmedqkz3VP2t4KPCG2nJTe8ZpWWV8Ktc7DdHmBJYr2gvGnRRGkEppBJ1NR6Vopf5s661zfKeKgd",
  "key23": "2H2TCmwh6wwJqL3SAbyWuvYcE2DJo8po6Cd3NjpXDXNXmGkonvN4eWo3x6wmSoKRohk2P9dPK4FNPXMrcPwZpZpJ",
  "key24": "4ZhpoMfqhQRpFbgWajExfY4Qfz8UJpyEnfhRBojgx6BxtY1nt6LWrnwgEfmFc8DHmoA5YLgah3NJYStVg5bqj6aV",
  "key25": "3hRnrF7wj17tWrv2CAPDEztWgwmHSpcvJt8w7XS9CxpEbqCYVhSK7XqHaDVY4dhbweKvb6qAqDtDVCvSF9VEop7C",
  "key26": "4a6rVkRF6MKCVoqwa99fWsxFMvNJ3y1JxRSujunUsqDzBgMramy8nCYggWcouEbb7LaoNjwQ7dpE2YRW7BYgp88x",
  "key27": "4caN3GgzwEyXvaWCuPb5NSL9eueug6xSZWRW3tvFvuTNDpcDKiNPw3Txvi5SU45H9pbgtgqgV9f6iGqNpyYupeDk",
  "key28": "L4x5HR6926ySChSD1ihF6gbwQcwyJG64S6n6En9QnaPCGM2oK91sbyLpMDc5JTE2HxtRDTKEWHxHXciWmRfNsjV",
  "key29": "3vyHwK6iCxzXQiburVYY6A3SZXdqc7HftY4XCS7jTwBGL5doG6y5qk3aYrNkVWce5s9Pt2qrRmcfSUPSNWPST42P",
  "key30": "3Tc1ndAAPKSuFuvhV94NfX36ZUwFq1kbHw6UQBgEMKc86MZYToXoXtCpwCN8hZCvSrBe6K96N9Bwh4EfWLFsKCwM",
  "key31": "571P8oVtV2qVxwzXBQrPVaTxPCTujXWD8e5MHk9vo7WVYqRY8N3qUpZ2efNVS2SKCrwSh29Bou3EWNwBZimxCmiu",
  "key32": "5U6UekRLyYgBcv6vXBZJHWRFnqKeYf2wQ9NHmD4e8WJv9bMLe4BSA3TVSAmVf7si32HbcteFpgCNMr3MYutu4j9Q",
  "key33": "3vEVCXa1ui3QfN21B3ZjcdZB76QP5TxSTBCujYemX4Zgohp7wAnnvYQGfj5wjQ2NaPABWCDuNb5A5tFzaYBNBJ7Q",
  "key34": "2cLJnRtQcVcgi2n6tZR46FsQQcfdrTrSPr7bq7dcJiwsn9xhbuLMSsmMziXgCBbeoECymPUFahkGTbtiK4n3GPPi",
  "key35": "4kqoNeapLod8JKVnHLRsRPoZfhXruLs1nYTZRfqxCEYV5iAtftHYyVeS6Y9qFxUanexSp3dHfXTKx5H7HweQidnG"
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
