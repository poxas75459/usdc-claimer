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
    "5Z3QsZWXrLh3ssQPhfo6xSLsFMAczkEHyrvs5ucqZLnfsKAh9WskT2qoqKXr1XVoK3ZA6Pcuw6hQVeWX7MsCLQBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orfMrrXghxGL34oo9cH1o2iFJZPp7q3iUMGVPdQhd3jnRo6bNQPs75fuDHYCkE2g5ejd3s3H3nmWQkCoYKYGLQy",
  "key1": "Dn1FLx5WfraGTVZXUgtM9rJ7AMkCzBRKBi6WVVbFZjXgqxT4ZGMn5frJDndt8YRTHb1XVRsoK6yQBvKmJPbCrxc",
  "key2": "4dvgyYidJdqWbpaEpucnYCfgZUUKYdW2GbtsDt8yWhf3o8GaEFFpWRTwWyckGdxFRJs26NaMoQtC3YEh3RU5qjZY",
  "key3": "3JyWEMp4pEdj6rR8xdQaspgsyZVaQZPDU1YTjZwSzySzZDw2LWHU4AwDY8cXGPDQTYn7az3BqoPGKNhtgoQ6dzuF",
  "key4": "23KhUPVcSP7WX43Y5ZiuG9Lb1taHjJe1Geh4X5ra4yGNDWJxssASZENX3zYL8PwdBnoEFUXADyoZHrEQYm5ZkcGr",
  "key5": "3YYqKJeMUjgmsy2m9KibGq9LNfMCa8CWiw7DRPH3jBYZcJgqWv4n8LUShU5yRpGGUzkHcqwfo6xxKjaVHKTdfEkj",
  "key6": "32yq6opVRWGPgZaLER5xUsAFVVnggxfZBGFXKgXMCu6Wy1yXhQ8N9yU7N3bVn17f7fa7qMMzj3PghmqLiBsLSbFS",
  "key7": "24U7ShAMHGcQSJArtV4TRi1dRCeBf1sZEdJPPiS1GQwKpXR9pTNtbCZWVvRTnx8LaG8Q4nENmUjyLj58dt1hm233",
  "key8": "5E8sjX1nhjd1CqdxPxj2yGo37srqB8NpuGoXvk2vpGYqxua44SM9AjXF5YNgoBqRugnmGXZPBxaDhQs5wi91GiiF",
  "key9": "21T6pjDTisprZ9a8gbgxSQnHjUPTdu4Q15fvJ9jFe7q8rVgkwBCFpQc9qPpcosZzA4935FB1Xn3otiCDa2gmPV2Z",
  "key10": "3xQRc6R9Rap3Hk5KxjJD8XtBRThKA8FFfpbMLcVVVoFTHMgk3njvKNvcTXAeXw5esryrUifRrsNQ7GavoFSpfUdn",
  "key11": "3kGEDREDJXoBQwa137JkKGpsbWZGyYZsryjnu9CRDh4yjCLtpAHF98kcza7199F7mST5gP4UQ3bxhYLTEBcwszFV",
  "key12": "46zf6JHSLtpqQWjjpSduks1UKUSrLDBzgY9zdw5UrJJGJBS5X5zzp9ettF6RprEjvUt2XnRKCW2KLHQqf7jvFqg5",
  "key13": "5ikCKvTp9aGxmdmc8aEmzeh5NC56LVeRa2jvWzCh96QrGUFg6xRz9ru8LWuzPY7oFw1uBnWzyaaXb6SGptPNzsb3",
  "key14": "4yB5A5fWUqCmx9ZXVaW3pt2mAU2HLbCCKDefW6jhW3tVoLRLD16aERuNT37qJhiMtrgb8gW71WTPsq19jcAyQ8H6",
  "key15": "nG78d5tTekqGeS5f6nE2SaXXd7VsKX22B7HkUjhDxP6ZpFEK2MywgmKV1oaQWA9a4NzXnZzBbPotf9Pnp5C9KYm",
  "key16": "5GfnByhSQk9u29FozisWLhRZKMJ3UaYTomFvywKJ8sgPHHXJu2iUJasusAWtsow3v497yJyq3rxwUk3B9Va5Uo45",
  "key17": "3jRMwu5qXpz7LEyvbc9DvLyKNSYU5GqYuiutzLeB9nmu3LG1RAz2ms19fbBRAKbeQkJ8peh1y7Nmp3uaUjMwrfjq",
  "key18": "y9MXW5fbnfhVVtu18EvrpEQseN5FNgXYWBbkYhVW95tdtDrMFQDbTJ5GecoJ9jAYHF3Uyue4x5mcv5J9xm1YTjk",
  "key19": "3GuCQEd1naqKppjvqYQQSvjdNDn3Bvyh1ZZJUAz4HsGQeiZBS322GDoHjqihagFobQuu8FctcS8j3HLW9kz5X3JR",
  "key20": "CT244piu3bWRCBLzUzsMfHZ8sEBPdu87cAaZ57hkkbwrYWPavBBUEEygVwf8RjugFWYeVgh8Q2AEh65FuYzw1J2",
  "key21": "3ejaPKhhYXgsL8tBGCRiRDagWP5WPrSoa2YpjK5aKcAy7dgsUAzWZ4itP1r5AExeV18Q2Q87DMQ15uemQUHjSJfz",
  "key22": "5onGuFqijwqJwpaT3MqgKXc6BDeJ1kKuVwP5jkmnj8PDZ1RWY1CBttAxQvQHvdhKdCn4p88tAYMtwsUNJNBB4S6W",
  "key23": "3ALvzq3EGbDvvRAFbkJpo3QqEAT4ji2vuVtwCYovQR3muQijASJhB3M7VXFhbzzxLbrQSqcASNCEpoMMRkVLxxaJ",
  "key24": "3x23Xr3d2JqcZfN72x81mCyGFc485knE2pzuWUEukKzAN129qVxz1ofuEH9bvPWymRT336qJVW8TeCeJccRZMfXU",
  "key25": "2P2Em4998dvRCpe19b6QWLijBWKATSxyGLr3xCmvPK6SQsxuFdeRnHUAFKCG3RHqu5yY6ZuDbTudw9QEW5EAg8t3",
  "key26": "5qZgB9KmyG2TR1UqX12BY4F11Qp4Tmeaqd3NLicgBYVoF7TznLfuCtMU9eXjoLCSvSXvcP687xy8WABMFLnEep4s",
  "key27": "3hYspc12Eid8mJM1RxVQWx6yEiSqfL2R2cm1uiiKB9WGCHDpWCvnnH2JCK2U41SnVFYRWE8vBq1qvfok5bpLWtv",
  "key28": "42hzWPF3QAWK9r3axoemNncuiBB85LbtoZE6yf1CmWoZLkrFhVVB6dD5KUxCUJyVUWswEfbvWLwjTNtQ9y7ijURt",
  "key29": "5cbTfLmeECUqPs8fWUaNnNFGt7vRdX5GkyCQgMK5CjMZXjoPLmhMTeBXZ2EHfA8Bhqa62HmqZS337jJdxV2eNcsZ",
  "key30": "5u1GxtABuYbteo3pddyuav4Va1dDuN6KCjj8xrM9NSUsqaQmAaSoUD7wFPwBNXNTPrF3rENyvhBFopjLcgrZ3N8N",
  "key31": "2u5usuyXiNp8M7FFRWTBfLaADsNzNHtWSp2hJapzx3kYXDSTQ8rJsfQqSedcT8P7P7D9eCmJj1xzEHd4igZQ34pJ",
  "key32": "VEJ3uCL18ysZysqDPsPdQj9V6wvGcfTeCiFxjM4YPSHbrGxzgZfQN5TrdkBUNsfRso1esusPDgf7ouLGKeSSaRL",
  "key33": "3qoNNaMPhg8Pyw6gYaKCWCrfQhtPznhbDTVnAAsDkJQjyywx6vCJpjkDjZNuEm3StWwpzKz3eFeQH5VAvTiab8WU",
  "key34": "3Wcw98K5bH9YrmHKYU2TdfSgYHn4uHnrPF4AT4ySPC6WNfNhUSHPW9DFfwpTVTZt7ebiL8VYwK3Vd8Kd7tGhavop",
  "key35": "454nNeaABvAXb2MFyTH82iQMFexkmineq4s8j1tKdMpF4gLDQ4GimGnVJtzJq8Wy82kqK2W2sZmZfZuZNEQd2jv",
  "key36": "5HK9nkirHzEtv5JT4XsXgcDFT4SexUdPBqqUBBpk6BrDoBZD2eWDL4xNUiym3Nak5wnSQSDfgasJZ26pQKt1xZ59",
  "key37": "C5bS8gUUEyyqZcz8QJHfcaQT3TcwoJwc4UbDGppmHRFqQphUzmAyNe6MH8dUm5C5K7zw6iqgJY78D7eBxD6XTmA",
  "key38": "2oCySk8odiw71ECyAncVUfDA29Cdg68anfKsDFptn1Q218g6HDVo8DuY3nGag1RqprJ6EeVoMa2dddcKJUer4tzw",
  "key39": "3hFq39FQioyjJGgLwDaFCvRcMyWb2HtSVBQqG5DMp2HcjK46wutmY6qCtg2B5o9DV4vh9zKfwF5e7b8aTEUCHAqr",
  "key40": "3kQ7bdhrzzirM4Emu4SbrzDyr23HLu6jU8seQpLPEmEXLqH6STs8JVmBE6BkSyJcDD5Z7gjbAnGoBv5cSUP6Lqbk",
  "key41": "4FDLrYBEgG5XXEvghCsEbXRTwf4tMaocZNr1VsuECro4vB6Kq1UZLuap46r6JqXV4zHu9amqfy15Lc8uqDc8bBk8",
  "key42": "jTHZSXnHzKVmAKGuZW9zNkS1V1vG9x2TKeWNFaFJgb3rwbrZZqu9iYPYSMUJEq6CbwFCCyAY5WNeBjPmRqY8xZn",
  "key43": "2W54D4EDNHou58JcdqJL4swRWtGFizFmbb1sPoV3JSb18iqxfgzzYGm3o9thK7z8t3bU7sFsd9Hds9Bzjs5EsiGM",
  "key44": "3PexqRHYpAZjF2q8u6CqGUYPgEeuAgShbeNV5bTJugeugzCmmGMhQzH3LL1NRuwGANS7brCj5nnosm5ANJsFywAR",
  "key45": "5HjP5FuDWh2ZqfCsqJsREskZnxLkBN35kmHHvTaDuvwd8LnQsRLdMJopthsxZiswx4QCANAPRUCbqB3DAi2iaEyD"
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
