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
    "4wnz2qxR8FGXkGbLhLQC435y5eLo64utbHmc9Qh7ukLyuJeTutmGLfM8MU2xBd4rPsTVSqXrX71PYNR5fVJdV2uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFpyLti3ymcR3uLnsVrqL9Rm1Zi6aPoTQ1QkNEkDdmQ4MbjM5dGfMMpFZEL8cxN1WJu5T7hUmMJmY8zxdQk2Vhr",
  "key1": "8iQSgSDYs9Mjsa15LkRjm6GyxWfUeWQrQifR111GApW3mFZSAEHNVQZNvjRhg8iQx6wvDyEAr6HPNPL1Fh4p9MQ",
  "key2": "5q7az4xzHL858rbhKeZff7fqt83shLcuKJ4vKwoVhYXAoyjK2Cpsb8xwxu9WAzKKFjvMH9AMFqaXiuamoZN1Wv36",
  "key3": "4ypPMphw9QJ6hW2BJB66uhW6DDJNa727FhqKdvdSvQHeWU8qBFQa188YbQwZ2H5VMLLne1g94ZYDPtGuPuHqEGh6",
  "key4": "UXqhXVQDsxFd8SXG4Ea2oGu8p1aVVE4gWtSZ8StpYBms6igKWZhwqMoBqmctukgaGyb5nbfvfGxwRz9UB9ZypZu",
  "key5": "2yV2N6H5TqkR535hRNHpjDtt39uD5X5mQaJJWyfaPZZJXcDBivZNyAwgPD9Jay6K21JVtqDqvPPTtFc5mxCFE2Ej",
  "key6": "4Xfj2nK5EacKJwnaeESbvE6ESKNp36douLad7XF9Drq7uFXJRRy4jJgUJPoFVznUvXJKUQkR1FU9xHYPeHAmNSNz",
  "key7": "3fiHzHDjpS6S72PpCEnaZaYet7hdRJMpDUwqNoL8fwc5FGWUHnAvGBiniGAvNQvrtQMpz3vU9TSRCxJzFwatBWoh",
  "key8": "2CQqDjTsFB7EFkV5vgmTsA2DDBZY7nsVYUqE4pBPpn5eoCPixj7yvYDrekBWdjRPA1GqpDXVNZ6GijitgA7VVCm8",
  "key9": "2qe7zatw4mDNhNxFMPWbwxEFNewpRHXw2zX1i1VyHDQkLN1BN64G3qqy8tnU7FqxkZypGdsR4ycYiHaaFXX6PP6V",
  "key10": "61jDtfyCJST1Qs6FbfCC5RFsiBQnsyYo12gqhd9T5ueraS4E8mz5j33oXxFR34DGjDpzVjx4r4cN9JEe1k6S7kxC",
  "key11": "2tfPVT5AJobPozQJ264uPhcgjVwQ6jree9VK5ozdtvTK4eBSttDpNTwreWqJuZnmsYv9zL7pbfc3vSVgRkEFjcD6",
  "key12": "3XrQS1CrXEYpkzn7gQadwQuYTWS8eS31uEKsZSLukCCr96scFX4Cxp8sU9HCDgGKiJfjbAjsMnabAPhCbmYF22ek",
  "key13": "29KLpdSm1nzp48zoDi8UCvMo3ppmT8gYVVGJHPN4Q9VPSgQXN5oG1N5Pfnp7zyjf3u4zJpuLPPfXWrfH15p41ELP",
  "key14": "3hDBnxQGRZ3zebV1N5UM5z8aZR2biDLYwfQUHjag6EHi3PEQ1T4WPLqqBiTyiCDcSW9BVVG7LmxxhXT3rhZMrc1B",
  "key15": "3pyBe6fs3dxbkSWFVt82fKt4G1MvFqrtpBotsQQMModVD8DrjzBrykd7ycHoE3w14XMUfcQJur1XCdfw5dsrZmCW",
  "key16": "46xkAghZdJDeahjQto41imgXwcWtuUDvsUm7ceEqjBQadXLjZTokLjcmB31TDkELENuHtk3JEMXJTk65ugg4ELP8",
  "key17": "FN5CLKeNXdXWJcoBTGPBstqy1gdDfo43HmVm9jtPWj7dstEyyNeNipiSwojzpJWfPxbNgM4YDKNnHFbxyBbZeRi",
  "key18": "5m8PN92Yc8sPV4eZ2i2MpVMQYmhAKFvJU5BZkRBv5Nh9NUZz9t61RmP4xRxRc71owjdz9oKURsZ175WXRMAXjyEg",
  "key19": "26veqzgRm26GTXde62wags2poWgXbGqdu4dhCX4i3c6C1uKEj16dVUfyT9MdXUcde3ug3FstNovN2EzfRst5jcNW",
  "key20": "4QpYgNAtzdAP8KNhFHU22rp3cgLMgcDUMWWttM853XzsnQPXJaeFgcS6XSprfgKjuRBiSDCZr8Q5oGhnRDoVXyT",
  "key21": "2cGQMConjRTpVkKqyMkteVL6c59ymc2C2ck3fxwfwYvs5s99R5FeQmw4T48vkewgbGe59uK83n6rWsrHe8VPRKKq",
  "key22": "5x9ZkiQT3J8uPmAqfoBXC47kbXUPahuiY2XVZQ1jaXsMYTiDbY1nQafg2Ag8twfaQ8Qye2rUiRvXw5Uh5VW1bmwm",
  "key23": "4v1BwPHK6NMKLrDQd5571e16HfpjYYt8H7FeZNgJeFqHUMfZFXMu5WTyh4WqNza5dVgf6StNvfucG65BwE8byTd7",
  "key24": "22UCv9YsUCU9XPeDdQzemvSjsr4DugTxRwdjv3VEvo4PABhFVrPLotZTnAFE83bASMoTLACL5ZHjuVcJC9rCki55",
  "key25": "27B5G8mGuaWZnjb2QxL2EUEgeRRwMaPiD8HMVf6BbTcUVcFcAMvRPkNAYwC24DM8B94TJxYoztBL2LJdWKdz8TLd",
  "key26": "ViAFkLf8Z9CjGzthCKx8M7JDV866abT6y6doD1Adr635EtzZCt3bVcxFrMCwvvjH7yFQpcjgmUYNZXktcqWFsjj",
  "key27": "JfuSSUnkCKqzrjy1zSnUERj1QwyHfv5wUGazEAbbh61eLyN1pyv43uctB5wS94oAtHtDL5zsqTBjUkti6wLjVCA",
  "key28": "4vbpbifJqVeYJJd1hvYB7AogKBHRGp1UMr3H2wYHM8gy9hPvh6YtMi2NxGe5VY2jGKJHWRXPNuhpJynTxmPdkVFC",
  "key29": "5vG6CXfSqgSN4LYPNBZDab8uQEHQdtUSdFggNjpsRMEBc5iGKmsGDGpERzSFNWy85KoQEEDjsisRei8XUhEpbY2Z",
  "key30": "ptuGsnpGXrP8HJHvcFrDtTFPxeZCgHxJnX63FM7thxsuqz3m8jgLxEFQYxi2pvooJ5BbAtvK3bbxbjTHUMPDASx",
  "key31": "66D7DVUQoFH8AE3ALJ9tA5GrpHBZREJrKn1qYm9aKyHtDtAsafRNfEHb2GUr6rSfLUxSXWS2ADtVfyok7jUVqSiT",
  "key32": "2ySGPRgcAdSyeHeNFHnBMY5DHpcSB32PRWq5iDirQCN27uDGPYSKYKz9dHfrcwkD9d3m1C1NNCnANtbuebUVn77R",
  "key33": "2JMKmzmn4sHvLfG2DLFZyZf3BCGUYH1Ti6HaC14Dt3rwSpnGx5zVFGDRMZJqtL5Ljbdofnyy3xM6QCYXygcuMRxz",
  "key34": "5vSY6HM6RMLDmfMR6h5Wdu6pMia66VFnoxeqikvHjdpPzxpEY4DbuHc6AEyF1fCoAEpBxtcPrKS7MxH1yqGAKHnP",
  "key35": "4L9kBs6xRzeUN77PKiXT2Jx9Pp5CXwpMrtTBKW6DND4Lf6QDnNPXuHXkJrYFvRznPccV5RMFXw7vvQLaqrFcHmSK"
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
