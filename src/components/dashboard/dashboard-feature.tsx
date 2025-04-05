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
    "34PiaXmuZ46wTtj3BcZtphuEknVk34LTMztLE7v8SjYDoirReoWBZF5QEvqPyh1fvrUqSnDatBP4EUBKz2VciAVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33B37jcGW8k5oTepsVDcQs63fTgDZ9V3u7mPw9aunaX3LcfPbqEJz6uSSMrWCgYYUMTYS692rnD37To8fo96NxcL",
  "key1": "9dKCu2gyTjqSbVKF6JbqubA94QXUSfbYNZ2ruf2NF48Mc5DxEYTY8caZtC3eHw7d5KxtUXn4VoT3kvQavDRhd1S",
  "key2": "3GxbbrxDmh622NGys3dSUc24kGBRaJnFFKhhxQ2mKGUnApH1tx34rJkP5CSg71xvmHudVXAEStqvuExrWgZy3VUZ",
  "key3": "cKrgz8827SUkH5LpsQFizNY4pEcSu2ewge9ERvehz8yvHimMsqswTPZRtABRAkYcnrgeTrM5zKVgEjDVWmTf6KD",
  "key4": "3wT4DsqGBKuULn5z1eg171T3SvkSXs9iRBp39G5abfgsDtrPkcfn4uwToKQ9GFeBrs4ksjiUXNvuYqxNGQ8nZ3dj",
  "key5": "22Z1amWyHzApnC1b2wKS1VUzQphSKdhkbET1w8jnnzNUyskcrehcnoGCC7u6YGKYDAdEXLQV1MB63kpHH7Miktbd",
  "key6": "2mnEvDZHMayykMh34vgxAoRntv5e6DAB4ynhzcGnLVUp6cbgYnVeEEYFDWFpzeELLE5xhfrUGFaUnPFWSt513hEN",
  "key7": "jc2Tn1JJxQR2YYUqffWtAdKM388tTjsxx4BWwjnNgiA6nzbZ8aVQBSwtbZwNMPZgR1jPiUFxxL8nmzewkpkP53a",
  "key8": "5KM42CUqwE1y5syQYBVCfY44wfAfsny1VA9UyfxTLeBgpUiL37fytghWyM3wXbvKSjdyaYU2rkqr95wXkBhfrCJ8",
  "key9": "3y9sq3AjYKK5VUEvBKYUbcANyxRXDJgdZt7X1UDZ5g4jZNwGCtiWEzrZ9RJv4J5g4xMCC1xCFG2ixowqLPRXEtct",
  "key10": "33HAQsj7qrPs4HU5D8CCJr9T7ZMbyi9hLSFG2sRQ9pS6TUoN3BtoKiDVvr9ZkLnYDkC7ymYQCfhtCEroHmfCKnvA",
  "key11": "YgE2d5grq4sJkSwNvt8VQ65GxEJA3cXuG9ZSdWNcLrMh6ipd11VC29iXS6iqhNUw7ujQM2EXXhCqtuRPiXbsD8Q",
  "key12": "mC3RhdS7tEs1wJkB2efP5Y3i2QBcAxfYZPV97zXMSkdJciJqNoRbrdoy9k16dJQ2T8YWFjwSnJqfHbmxyUgAiEF",
  "key13": "55427wpKKdq2qcJkDRuhVpzTeqXKohuCwLMAeZ16cJrPaqqvqTYVrVnXLGmrTioCcsc4ugA9fBrgAFqp6FZmtZd3",
  "key14": "2vqFYWCZBdRnvFNfSKU4G6u6cFmR6Yc85fCWWgMwuQwouknAfW3QX99f7MUmK4BJdszXgoTZ1uqKLbArtLFURuDt",
  "key15": "4DPtuaj7mnkWSjVbt8GgCGm5gAAArgTe3yKpSYGsCiojfCKrBbzdjkmAaMHek1Nvj2jV6RG1bq4eehCB5Y3xVjoQ",
  "key16": "124kHv1adju3jpa4XtA2d2u13u8oy6hV54Mzph9k3k1Crpcmbto8ihPDgnbQiryGYacHRS6nhD4ALDvjruPvEUsv",
  "key17": "9dKWWhi9afhNMuVY5QCv5EqHnwfrto1sB8TyEP5uS4d5M7YPkYdZCuUkA7jtDK4PEaqXfmh4X5Csiz63FfPfZAX",
  "key18": "5ggWwqCfJmXjmGyCyYxkxpn1dSGV95SzHZwJH4HKkZK5ankwspkDgRnYAKLb8m9mu5pcYGFn8btsiZS5gqhrq5yM",
  "key19": "5WctrZyazFGC2KsuWagn5Ejy8Wtu5EyfisrmfEY49LuDUQiZWbM56w8j9ijWLQJ2dHbeEAZYhFrkxoD4ezWUsjAY",
  "key20": "58gmhir78X3F3SxVYt9GYqhPPNk2MzyVkQy7rxzkXkUMgfWPzP4fMYtSoc5X5VjFTQGyCrcE3d7XcJ8GQFdCoXd9",
  "key21": "61LUFY1mgq5e7UwFmPwz9JKT5PBcTrtUwxMorBhf6qBQU2UH3QKoAD7uq1Js1PtsPXVqe7H3UEfhofayNP9pijmn",
  "key22": "2Qtvc8s59yL85fy6nZ7MnVNVmDKN3J2qr4VgUD38kduMnEwHsGdtjePVp94zm5VvD9tiekWnFoNaneJjNv9VXkBG",
  "key23": "Mdf3n9t9A9yuJ6qTMLxchf83puiimjRAhDRKUdy4JHxREF1CbqCLzuFLFRLeH5JrE8Ks6AEfyN1ZxKePrZ1dMEb",
  "key24": "5fqi9hh9uQ7m42dp7j9j4miXKthKSYUKsNdFCGZcQ6eNqLkefb16BHHEfuz1qUiWbBjiTUtKqFAeY9h1jimSz1t2",
  "key25": "2CdW99DnV6Ke2mXDrRmvxmNz79qkbFh6Ge29mdoRgmSmmScbhUu7ZzHWznd5B3Bi4zspSoVrWSPSzQjB9QBB2ag5",
  "key26": "Ej5JgXKdHdJxDrjyvKcPM1h4TC1iiQQ3zbB1JjCwgsVmkzHn9syBceXsvkn5yQpMxqkLtpuH2bYif5U1vvjyVBE",
  "key27": "mdUKEGGTdvi1kysvjKkkF9QUEPUUh3TSSWBhbe6JTScXZhvjimhkdvyNWacxMnfpGaMdUEWSXHRnwcDVzpc192N",
  "key28": "3t8QSeXjU473myKJWz9j5XQQ5bJFC5YeqmQmTs6AR4ufqHPei7qCyfBJhFbrmcb3kRVAuMAmAHNJqjjdyt7r1FBe",
  "key29": "432Q4dYT7WGRMbfx3ZGaoS54LZtuSCgmwhtBxE8DQvNjBcA61SqDHCMMAL9WvXLpzK7FxRVHvqQmTo6TySPs8UuG",
  "key30": "Djsh8NQYiaVvNH4fTNPT4o9ja3RbMXcvpHfDMvhmRLTd916VfayJGd87oyFN1EoSXEVcEk74UPWYk8gNUWkQoxQ",
  "key31": "2vxN5sMWvZiWtpDP4pUuTe4J5Sockakq4aMNwQKJxf5CzjwXQC8s9MhYxSU14B3xd4qJfJFoZGwvYzvbFDSRKFqm",
  "key32": "2fofjzpyX2ZZQeoHuptHBr3tbgdyntp7mB6LrLpAyPVRPBq5GVWMTKTYtC45XpNoZ354aHcCPV4rpy7i3nHLfmLS",
  "key33": "ZdWe5oJhHMoH9xcaJECStPqccY3VzdfajZ61nWd6MzP7Jg4HwquSkGB3LAvyXVC9w3PyKjLQQgeZVfAEj9y4WKH",
  "key34": "SQpxeU95W7491H9g2CRNpDBdmDjTqB318N8YHyXDghAwpzDDuQxYJY5gwH7BP6beRZvYEEVo86homBSBdgctPEa",
  "key35": "5zG3QPi3AidkJtedmBRLboRdu69RPM1jyytNsRuxtRq3DLPBCeycJufBZnFVJz8uhgPRC5eufXAwNETsbtoTPkug",
  "key36": "2n7MH8Scz9WKJ9pBnBcb1GL5KNkWxc7eNmkm2AFS2sK3DZsE3fRvA9aBdG3WxZ9dCZREMRAe69wxf8Xs9Fn9i3FB",
  "key37": "67nGFKc2aoV5YRB3mjvVRLNUWTxy3KSC6WGykpaf8RK18Hsw9JLv9ubm1QdkSAQ7RbvmBWgujADa8JTEz7icK1n4",
  "key38": "3gnjZVmuM6keWEJFMkjMRrH1PXeWqMso7dqFmbEPBDQkMLRg1KmakDe15CHFneemHHRmHtFG6vXDQf2A6e1YnMqf",
  "key39": "5HTsHZNGZMurraCu2rfSsQDL3wC4rvZXME5ByRDcZjyGtJv6cGif9hbwgBvMjC7wEHvZT6SwDCe4e3bWARXkE5Ly",
  "key40": "467UAAq9YBJWk7SfFNDH5nZSY5a6pcbmGyZze7XgupYUvCEtSLN4NSyjgn2zVK8HWdCnyZgMrm1nyZLGZfQpvAyt",
  "key41": "ZKh5DRvrzig2Jeqa8ruyBHDcCoscLcJgxmVyMZ2gab89W8KRo6Jgq8dm9yzBn1MGtBc8izMGY7rQrAJqyZ85h5x",
  "key42": "3mdwrd4ifNKACYWZBqib9PkE3SRSTgiKn9MQXRzPEa3ZHCURgWQNMJUw7X8SosWNkgkdAKmKMUeKhJyeg3PPmX7",
  "key43": "24gSgWX3KcpzJh42d2ckSdDMi7XoSjvcgzpdXt2f5wDCXTsQq6hFQTAuZkKzCJv35yDx5tHMorKFYpo3xpXVerdH",
  "key44": "3s6hksnJYE5L5xW4ZJVjWQNZ82YjACENoNugCKBuVfMxCQrmKf3y6ygtPkPYS8yRcUQbAEHEjMwpnMFWDgfzCMRq",
  "key45": "5nYuStgmjVhN4XTwtE2K1iwkQhiQRDpB4ZFZpaoQ8rgrKLkWWXD7NfMUA3WRJjBkdSX3SMaE5BHqtC8xDqthgekE"
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
