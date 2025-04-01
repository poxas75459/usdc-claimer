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
    "4VWy5Hf9SkDgway54ENSfGpi6khXCcCLpAakcTQaBK1aBdTAigh9FAMoe4BHX4zqabGHipzcgATNAR49GwrhkGMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kVNwThA7Px6UoPaddoJtz1145ZgcyZMS6fAcP9TiUuQRRc4PNzUyzdgyVPSmGK4aZQgXV6xRWbBvXkYJG6wBuQi",
  "key1": "2PoxbbAq5MkTJym2mUxt3VeEs8Pg5Ym59xTgBjee7qcDzyPwJNgFAnxDWEWZzM4A483gu56hKcvNLSWTZWbCPpTh",
  "key2": "35B7CD8eAvzs9yTMRDsjCidHA8B1bvUof3M12nGJzK6tcSRyupYDkhU2TeFfz2yjbHHANKBqYy2kDx9k2j4QizyK",
  "key3": "25eUrPTorF37yHncsaeJsQTzFuQiRkuCMq2rub51TsiP5rJkRq8JiujNrLofAZz2f8512qBbN1WAqbh71v2Rrr81",
  "key4": "2AxdXftDdDWixMPjn4HzJxN2gEgdzoZHjCux76NYxqH3vfKZPxf9CnUmZrjsEQruCNMEJ9epFFD8J2kyrVw7aWoX",
  "key5": "pvRY5QBT21ueuhhJF9tovNiEG7DEN1y8d1eTYGX4q6GhMi3d2RrXb8nfEVJbf3ygBGohPyZTEJzg7bN6NdXESuH",
  "key6": "4Uq8mZbnJa7uqKvKRS9n7kAsyzaLV8FL3mvPLfX27FTjS6LJGTTejyFnwkh7iyLiwuqZ9XWRdHZfVDp9WTDeHLM6",
  "key7": "nREc2gr9r1PbrjJKrDfGCByGdT5Ztd4jFbiqz4r14BFSUa5fgo1aMShGhidXPcc3zEx8H6VT8VZf6h8Npies5cq",
  "key8": "5EzdjmAAoFEHtwhVYVXtTXPxCyQVqVJoYcQ7Gs7XKiztYazHQJ5frXKemJys1YhnqA5Vr8zLbCWZ1skpgB52okoH",
  "key9": "21Ykz8aeHRx9DFNxd4FcFB7exN3zdb1ZiUrTSQMvLqBcGgoRnrCgSRy5bWAbHFeBGHyi6rFKPjqdxeEA5JZ6oHhE",
  "key10": "5cqJhAo8C8Mp6RbvngiEGqxqSxXnd9k85HPsfKyg5xPVVciNDaRyj5zx9cQAbgdQGY11nFqQ6p4F2Eg5cHNyEqJh",
  "key11": "2YFzWC8XPHZvRpDUc8a6DA7JGefCbix8EffeykYf13fGPkUzyA2gcmh2zxvzzfNVvxxms5mkr9ZCdPExspsLEtD9",
  "key12": "3feuXF4Xtkxw3cvPk66QEhAeujfAoEQaPktimiRumFJ9gt3n9x6fggsYtZV787M8LrhA3F5L33Ewt9qVYZGJmJNg",
  "key13": "3dRivAGK3yUiGeHUscX92yvLABx3H9gWp1dLaja3d4VxRy7DRitweYFKKwMszMkukPg4GTKx7jHgUazUbX7oupMc",
  "key14": "4FoVv4ARMaRgrm4FMo5EwrtGtPjxuyFEkorbx3RzPk3HhfxNWhsVXN1jtu9uazoK9GfH2D6zMU9aPVN51A6kY35R",
  "key15": "3zrmdfiSHWAv7agh1bx2xZoJ4YaAFX7VjVHRPqvzsPinQo1dvuibH4Jn92f266KABWhXfBBmpJdWvtJbbAgqkcWn",
  "key16": "4VdZfrTd2w4uotbJhgWiRvrbe8nmKD8YxMg32TFCQdDydtc96mwvqwLtnryXX1fH93ZzjRYaSz2gKVt3z4V31uAV",
  "key17": "iwFuTCAnvupf79wezf2gH9bTnt77mB4qMbxT1t8dgaAE1rPBQwknBBKabDddwF89EfJgUt37jKzogHbMYutvjP1",
  "key18": "5RPWmuENzGmbx4VCSVe2yTHA4fBNtR1oPr696K7RSUVrSRpJgFxQicSmTCq1xbZ9QMrurwaKeSDwrCmtRXVTY3is",
  "key19": "47GvyXs8sSAUgD3aKCwg6ovQBnArEwvWBLSkgxYABCoZbvJmc4CiWyFeTdLJ7nKAERLubBvk1NfqCQzUoQMWX7my",
  "key20": "47fTzXPPDYo7Y2ZuZbq2sfVuj4ASeCydWVRGrm1SVjcJLKeEHuc6Fu1G6sdvv8yf7KAHXYeL7y23XPapdz8AnTgt",
  "key21": "5EB8mDkbwhvEtNfB5YetjMn6eR9mbbB8iAKoAozu4JrCqxGuYs3aqVee67fb7HJTvzwCLdsCZeQu83xk5noPpC1p",
  "key22": "3PNnqWGKiAU3AWLAq52g8BL1UWZjgxVgSSq2aHe1e6eAuhXHHt4bMf7nCCfiS5Pg7UdyxoesM2WaCfnUBVtmMjS1",
  "key23": "2M1HTaMBbAg6Y6mudh2NfU6wybpxoCf8vTQ5ooyhcDPmYq6BK6fzhKFAHQCKwpm5RgXw2B8LDvyXWwScbhJozg5v",
  "key24": "27Sa9BZLx8QjWE4oxAaSGLZw5zS5gKSqQu2z9PtBY1yb9eCutLu6Lgkt7CWiyKchEQnCzN5PiZmmK1vEpfnBDEhK",
  "key25": "RUzbjHu98wryFumfMrCcRfvmZc6kBWmWqRhWUzhk4S5PTGzmuyNJBHYVafh1nt6SV9VBoi5DZELwWJPVNVGgdd9",
  "key26": "5HEwZFcHeWo8pkhgfqjG18DVq63WPE3yi1jqmweDkRrPVuWGYPqqyHn2dgYkYy2r4fRgVp9S8xyjToW2LycwgeQj",
  "key27": "33AqZXwgAfb6N9oR1UQtoJq13sxVbw2BoF4EFdQEokFyEZodQHM4DLzNQsE2AXkJdrFj5QrqErF9BcQZNg36ug2g",
  "key28": "5ThVkZndShgeoih4bWsc1pqaHEa6J1QbQnmMygu7ARL7SghQRaE7k7hnxBPZBNLYzBnGondWoVhKLAQQRaZBg1dN",
  "key29": "2jfauHHTFxeUcZydyisy3jnHTsFnNyG85C9WnDooF5Bk8yTJzthx2jVZ6NkmiKp3BvkANgcDXWbvwvPuFutiSGT3",
  "key30": "3sSN3zXSjofhGz3T1e77PasUsYgEASA245TSPZHu8yJ8gHejuDVgze5h3frcpXXB1W6mJUyrCdYMac8wZPUKhbVG",
  "key31": "5RL2t3Wof9yF5FRJ9iXLMeaoTpEFzvFD2cXaZ59ADYjP8qFXyeUghLjAFoyrnFgdkmS8RBdhyAzraTTjwPv6MuNB",
  "key32": "57Ji2DX1KhtmJ21E6K9Sfd8TiSgvKXVFde8Tnuzd5NzgVKDgq2ARw7cxYTe4j2vSM4sBDLPvK4E3pFi3yV94rtoH",
  "key33": "3UJvKToPBwEJoPsCAs9TvwFdHYHMoJudkMAiXYMDUjuKkJyPgWbGYwXJSURuKdmECxSHGUXWRgSfDXyzk1wRF8ZQ",
  "key34": "4JUeJDHMEJwChT8dPEd5pwzQ9yKTsXNQsbBUoVmjXuFDKzgJygHasca4YFzxZi4RwgAkMs4F9c6WeJYfhjvDJNNW",
  "key35": "cyLYZV7FGZFZe1ktmjprRS178TrVbvDvkbgmAcS7HW5pvn4yLwTikHJ4Gg7KqdM4VCvgVUr1q2RQDggKWyA8Qr1",
  "key36": "2wATmrqJqyfGdJ5nBHZVX35vufpeBhyNoQNWcKePS8639VF2b19rXmEpUUY3XHinDc3PJzKtKMZs9DQ2zFknXw4G",
  "key37": "2BAsLmZHkuzJrrTWRYyAq2n5aGVTbj4JsDjUZA6otKdBwPE5dpHaL9AMCBpMQcC4xtKH6WhgsY4DBUKDXSvVuASR",
  "key38": "EyufYo5hodmiMJEZ1ApK7RPsdpvsksEH7qWcnm2zpu9WMfXKeY1B5WSXeVBkEMTXHCmqHTFtCYgUgXrEWZH93Wd",
  "key39": "29HNNfj5AcPYgchSV9qsaLu6Lpff58sJRA8Z57MboUiZ9MuanSe3uDQ9AhgEhxXV1caSx7YQQLx9RVzJBpuEgRaT",
  "key40": "Ku4PXdir3N8R9dE3CoAAc3FEUZSGRiVCnaZYhkdYE312rnbbKMpg6rJbJzHwkF5RNa2aYCJMND1VKLF7DH4Z2jo",
  "key41": "2rUPxaAhnSpb5bRKMrFcnVtKGiLzPDf6KJ5kYEBQdqUEydUniJdvxZMxbSH67CRr3C58fWqJKLavvjSybTwdY7ru",
  "key42": "23P8wXS6EtttsKUq6SF5SiNC6KGzwmmTRv6DEndQgXs4a4E4ugCC1Tt9NfN8m8bQcGZyMQ76dXbWk9PBvyR1pLbz",
  "key43": "5vD2qAxvG2wXKx8DpnwPnZ72siSnV3AmDsN7d2WjFuZNekqSThXA5Yfg478Fmvb6cmCJepbrthDa81bPMoi22Gho",
  "key44": "2tofiNSp8R6PDfELNAme4VaANpwyKdHWvTZmRV5NTwtV11YSedtVosnkJ91qn8JdbkENtAGHoARzRCboL8M6P51C"
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
