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
    "35AMuaFmwX4Pu36ijXh5EKVyhq1nNCibqfKej22pUtK2bxfUu5DEpqjfjcFs6xx23i31p8eSHCnnh6Re6fFHQ6Sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgPg6oZ2vKBeUnVa5HmLqjhXwUYK5kL7VVH1DsDY7Cr8yfcjfbZew94opiccXHsCmKgqR4awPdFkVJuNmfXpZo1",
  "key1": "3t85uUcGb4U6QThiXbCGeWVJopj7dESUTKCfhnyBRakUTPJZjCy9TjmNuJairEEyxZ8jnye67ZLScJepCyfy2PGz",
  "key2": "2XAiAGXY7gFmxDG6SjjePg9FoyXEdy8ehEZHz6jQPXkNM4fGiJL7ASLg5RTHQfUXgbCsQvPhGSyuZYzMLx9gvrq4",
  "key3": "4iRSnscdwQUg4iGUAd3pmTJoVZ3rFXo7apEpTR5DU6HLHr1b87oiFwndUneMGB3u7vJwVS2LnpiPGvNZDehxvgSq",
  "key4": "ytZfXL9nRVWeYYMWR6G1ZwEXy5UfaTf7tQP9JAratVcwTRWdff9JtpNJXwtGEBixowkRCKzXm4Bqk5Do1enXhaz",
  "key5": "27ur11VJygXXytwa1944ZsdBVkcyKck4gMzs4obdEcToHr5Y4gR7VokqCpXUdpfGG4tuF4ifFxuqHFQyXCH9axBB",
  "key6": "LeqyRTrEpMaxUqhRRAFk3TdtWLB6SuDFN44JEvpUwqV6DhvB4LgSVDzZcwYTRoLAa2wMnC27qJaQp3UABA8Jy6r",
  "key7": "4ZcZktdyJG8PTk35jeCufhH92Fsu7YpAr9yn5Zq1PkasS1xXtSCfC9c5WHhMR1n3irsFi9Ht5hrs4AqgpJZagVpg",
  "key8": "5JvSxqanqBfjEfEKfWp4UXpwrugUpvLsVm4Jg5Gq6u2skDdgxL3VV3NhvhCxuNCLAderwkiNKQujmzCKsVvatHDQ",
  "key9": "vt4ZqvndFXn6gfh9fJKwb1NaeAqcXznKAkD9s7QfQLCFiDPMx2JLSse9rewRMVyaozQRfLrXpLNg3nsfSE28Xp3",
  "key10": "3b72YzqHdYhMyDw1RsqdfF4p3h5UXsLeEoYeJFGyBbJFK8prSvmWo9DRyp9iSh35Ue6jySKo5JsvWVqipir9wyfF",
  "key11": "2pe9NqtRftep45CXrK555iAVSq2cg7SU8kbKmJoD1vbGooPdVaUJckN3hhp3kbNpBcWHyaxSK78MUtxJe7w4AWS8",
  "key12": "3ZGF1dhkJCdtavtVqYMT7QP3zUQqKzR8PRFhCRA6BzHj3DWpZYurjRFFQDKmB5sMevBRXztdEEbZQmLXcXULCMZL",
  "key13": "3Rpg6kygQmAhPew6tkUa8jbanGH24tPFsjXn3X3hUjkePyi7uXzmJbYbaz5NEbjnhrGkUDG9W2pZZnD8gEFYwi2r",
  "key14": "2LuscKCkEZn9SeoA1SrbLyAnCKSH5YXX5nNRD6GtgQ7ZGAY1yHuebgZursN6hvfjj3ssyYNghBavny8mPsScfsfn",
  "key15": "5KAEKj1jJTvEoxm3Uuy1nRCQBeJuTmrfW9ZYZbFzcXwtcYSoAM4cKyQVRwzQ6nwm6Vdvip9ZpwDpBsJLPgrhZp8c",
  "key16": "4SqdnESA1Bf25m5LiG45XkB4GHvqo6KMoofzFZMmBaK6JgTDng8ffpzvQMpCqTecMQGkZzKpXWfiKZBW2h65iLtY",
  "key17": "vKY3BT5zQXBARzhMNSp8EQajDuDumKe8MTVFsw8ciHgSExWHUfz5RqbfTdc2wL7PkhwZHuHGFGttXn2WryJmoQb",
  "key18": "2iwCrXSBqN6k7MyeNvXqi4iuKG5N6XfnErZCuHM7SyWDg7kuJ7LoM8QaspT3cxH9eetVm4a6oVFjbwP2WMF1PFvE",
  "key19": "4pU8u3LpJmKGdiqx29fcBL82uhyEWvBNJz4qp94wzQCAKxYEJ3ZB3XzmbumUb6kNe3391xbv2aTSuee6QhxWu5ti",
  "key20": "27gfqneBzCc7oix9HUNky4Jdf1xVJyAzCqK3NYH1Rmfow3CHMbKWCvS4cmHHDtXiLLaGemtBAs3Jv54Vabu5Q8f2",
  "key21": "2f48YDHziSP59tdM3u8Ghv596sDsrwcEVudiHXu5cx5yo6d58CfUeFvc9mkhoyFbojhnZ8QBpzZtHkwuVJRpxEyk",
  "key22": "17QRGh6hSA1AKD2kpBBNnUce7X26K6i26Qx2ktgcZzai9UvAfwbS6S97AZSgSEaW2BcHQhraFawTskJURyhDsUg",
  "key23": "5aFChuhDRmqjcBYGCCVQgn8DuLVx8vA8auVWa8tEKCG2KKMZtyikg8Y2oXth9uu4bqJbFnCY4AygPdVdNxZvq6sZ",
  "key24": "4VPDsBW3JWXkVrgKXtRZQYgtWp3m1pvzZcesvbsmYLRtRKTGfMTiyZ6wEUeGwerwbBCyHZrEKBWAeDVrkyC96EhX",
  "key25": "4u6nnjc9ay7iA4oyq4VowYGRaWQXus7PzboEhwhQwEprgC1mv3zUULXQtyPtEs1Lw6d1vG5hymEw2dnsvKqxaDH2",
  "key26": "2gWK6dtoVHtgRATL37qJyW6pgzJcjNXRaAADerkiaKcWfFP9L6hqk3kxaGGd9SXBPs9yKG9tFGykFiwrnVE3uVnu",
  "key27": "2kmsUVp62uiUyTXhdVFft1hAT9hFmLDAxnTJHUsA4GDfJyPHuHAERh2H1QgBxZs4tGx1UCquK6NMwmGj6Gumthr3",
  "key28": "GFP48Vs93PPxFRnjygFfirxRuFGmwQcKyHwPamoQbEXapJkN57hAMUAosSnQEsevNHzXnFSY9it43EiNxvYMcDC",
  "key29": "5Duosfnh4ZDzF14xW9iQxB8deE2Lkb31mjSRMHoJkYhnpt7u7x4PKWps4JDrhpiGPb8G2yVUu56ppTayBjiJ5F99",
  "key30": "Cw2BMHkhsY2csyrBokNmwZUSWZ8KB5MExiSpupsxh9asJz4RjEBkqL8AcA3CbbuTUfh7XXpXfLArgctioVujmVY",
  "key31": "4TxDtDMdwMBMzJVvCxWKqSZzZVZVBpUwNfBKCmyP4UUQcVVLs5KuPW756MvWgqheZedQPndY7DuQt5eKWRW8Nk4v",
  "key32": "2P6H6ZJoNPYM7dMsDWUAyN8B695zARBeKJZSpaNb6KbGLQ2ZJYDCuQ5VFUQLPyS6fzipWtYYdneevrkaRCUExCye",
  "key33": "36JRpGJfJGk4r9oBTcCzQg7enUDTbyazLibj8apCPARMxJkb4pVu3AHWRqCqj5qxPBpx2nVYmLTv8eneRsa5TZoi",
  "key34": "5cw9oecVqeX2zhAZFcGXfXrbb8agBU7S5Lz5qZCpuu2MzHdWMCRtXD8qBddEiqQvRCMF1upwrxqfVBkZGbrv41ai",
  "key35": "3K7jSPUuVpUZcJECgp3VQvJ83oowmjsbynp9M7RH8VgnDXD785NqSmHRnWGCngWinAv7g7kjwnsePjzMBKwhwcYt",
  "key36": "4UGxrKGfayDHf1bKKGiVDHsDPAZYeY5tcy5shGQU4rhkweAGQdPSGkMKmKDYPXu8m6xnNc1aKcupXgxHyRam474b",
  "key37": "4uhxfpbRDHYjS6Vp7JTkEtNsRWM43bUf51ZBFjE9sqwcCLXjbUiiEDy2BisKDCJbipXWYivRzmYYYHWasHatrEsr",
  "key38": "36rxKRWgW1KzXoP9Pj9Nxw4S9cLJv3ZmoN94jkjSNvwKUEZGYTu7AqS1vraTvSKy3dwijGwKFpzytJy7ciZjZvRA",
  "key39": "PGriJBns9VqG1Ggs4zCH1NYQh7x1zFXDjnrttKJGiWL5WrhoM6FKxsMeyRQiM8zYSDQjiSu7q8sqTqwBgV2CMzZ",
  "key40": "4Qqg962c4yFS4Z9SN7ogP6E3zVnbrLwCyvvAD4kH2x92QxwwYomW6h6wMDmeR4bwfy57A6iCrGuR4GDEBwpm41yQ",
  "key41": "4yZPkdPkaB7gzVBkUMreZP4z83s2kndaNWS3A9qfr6pyzFv9pCtX2Eyg7pNu5mQUPo71whZ4Xw2jqZX7mH2LCufL"
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
