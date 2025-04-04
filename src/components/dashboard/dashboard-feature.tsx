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
    "4NXjN6yqiRhJoVywpPScETPznyUytFRFg34tXULg3V7JJJexByoC8yRW2UMQAF3F9cYxuq6v6DG1M8MDtpjWKhWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "haPjufsyaHhcoBj14mS6eVy3KYGoURkEb55grgaGfMu8vBfbG3HxpVmm1sDoBG8T3k67n2fdA4Ea44FZZRHUaYm",
  "key1": "3n8utCd4czp6AQJvC6pcUjP1HCzXHHfB57iiDKZfmhXk4zcsJAqpveHD6soFjooxguN8a2we1v8VMwZCHc5dtbrx",
  "key2": "2PdrN8WNoxM7fgQHf71w7uNpuEFxshHjP8e1KfLGV1KuTCr1r6tAmPgyyofzC9aSMhbzTwGmux5MP3qPiRFe5Mni",
  "key3": "SdwW74Ykgasqg576dPpL8d2DZargAw4ZNiLA8bkZs34yDY5NCqEwdCz3oMETjNvrb39sMLxNQ68dtm7PTpC9u2T",
  "key4": "tpHS12wJ5VBN7CMMpg1J4Jif9KFEPa4nUPhWcQMN7XxH2rJZifhLJP7eNHZcK3H96unwFysxsYt5KNpDFYCqFvo",
  "key5": "21ujdJ98FpWUFjiXp7jS3LFoSJy9zddZStw2wTWwbwrh583nMCndYP6XxeDSJkoDMFoxfau8rVUa6Mbv7EBezPNc",
  "key6": "2hiJQ9F38vKSnQi6VLCWstjrUqdnDB5YL6Hv9kU6u6otf9WQqfTMsCNgaESC8RmKnoXPoxBuLDdiAxvmj8R5Ma6R",
  "key7": "3bhiRo2gT9vWNUuaYDb2E8PzVbxiJqtB3eGvaZ5cPFG4sr1Z7w4DQeDN2qxkSd1xxMH1bdAo4PfzHUaAhLorpwPP",
  "key8": "5gGent1k7QeTnYJfExCUBj4Zyn2JpptcRo3vqiipiSZHrFf8c3ysLaLTzYmcHakpGRn4wDjwYZ4qZPmRf52446MR",
  "key9": "4mwHhYWKVnLPPDarDrKUcB8LzUe28V5drbPQ8MT9fc4wxkWCRbpZFLiHW45pchTopyqkngLhMeUU1QBEHt2zDa8M",
  "key10": "2YnwKWx71SsCAMD5DRUsTxXDkwbT4QQaxYJD3zZXzCKjhshQwd5tUtMJzHrGq4jecZq34X5fSoUhnP7oL4YxQZ7c",
  "key11": "31ay2Pnv5AEiBqE3p5VMsmz14xZfNnELYxJuvSbdXKKJuLyCib7azSR3waoc3WfXEESm9rA9GuFZBH9721ava1Rg",
  "key12": "4gRWghjiWx7y4bbpAzjeUCJrS1qUuJG67jGwDxr6nf3hxmYaFZAYJN65pf8KbZ7SQr4s35nBVPJS9igknodWn9xj",
  "key13": "42frzvs8PBXLmFWXN6AcR9qmA5L5qToB6xYHThCT6vJb6aw3dCXrsZRdUdj4oPS6aAg5ym4oH7eibTPm6AYo9CBS",
  "key14": "4HNXFynvaD2qVDzUwXw65wGhmTPxux7Vfxosn1xC4qwpEwTdCCkjuQdVzXFTr55kLcXR4X6GBeZHcTAe5HAEeEQF",
  "key15": "4a8k6V5WQSUEh3itkvpdqaW7NAEajks3qCiif36qR2nbjGNr3HaEfTfbvL3EJpH9qbyeS5zYBXBfUQ8vjRsS5qzE",
  "key16": "5cMBtqswNvikizURg4bZeVcbukvtfNT8nY34oj7ifRAaSgnEYRCRGdeu4vf3e753sXFHM25Ucf2uJAKetnN3vYck",
  "key17": "54BdJUx4Xz996eaU2VTuyUdTcKnfcWnRtg5Udsiw9LDBsfMe9DtyrKXJ4aFs5JSAoBJE7SLUgVqWdomPWwx3Bor8",
  "key18": "5tf8cJgykm6DJciNCKz1g4b6GYojp6Q5reQGARrk41kAuqn7E8mkmCzQKCh7Lcd4GgkEb53VAkkHhwn4WscDVuvL",
  "key19": "2iX5wttDsjpSWFXNgcSsz9h6rTyzdW6nwmY4QastvCPUFySdd1h9UWtFQKKL3GXzoYe7BPuDApDfJX6RDDesfrme",
  "key20": "4SBgxfh1VeYRQsDWjnuCQ48DAdTWf3vZeU1RhbbAHFvLzmH2uyTqKPoZQLFezFFYR36mxqhMdmhF1B2snDPqsQEd",
  "key21": "3NCnuznGxfCDptizsB8y4kQeYr1NyT9ratty2viAAobPnfd6CNaK576sHZS8oAwSZkCfy9zz2jwPVfGjCNG4ekQ",
  "key22": "JYLd5rcUP8R5D4igK8bTZeMV1pLTbpE8612ogTmVY9LRzqueehKNpUVdQTb4BsnPSH1VMG8gxikr7WfeXXNDXop",
  "key23": "4ToeNfZKmYqwGoF5hgCZD1yA9EK5uU8bEjrtpSrC6zvwKi8oa73TW6FC9q2VXUEkuqe3YGxjxf3LgGUxu9yYZzSe",
  "key24": "CZ3YTYwnGMfBY58Xjx24AktV2Y2gEbj8erMBtHdcAw85pnHjWmLqbeqjFb32ghtjZDAjFRrrkEHm8xTBuL19fVk",
  "key25": "3VvEn6F2FExvqDt2ziyLJSQD7Jd8xfuo5JwNvAc593KseWZdbvBiGEYSwUjW2Yy87L6ZhD9WrVcSEG7rzQC4opd4",
  "key26": "5oSZAfqJ1VPmQDucTtsyzXwVgiZb9GubBx9DhLP4GA5eoPjrWxqYurZzsNMwoiRsfVd2Yb11sFJwx1aBhLfiiCkM",
  "key27": "3QUfLZnV9vzkr69ZdAg8mRnGmhXaoaemnVx16QG4qQiBcCr4V8K24NzZDNSktpk35EHwkDkHDHJm2myoYS8VA9ko",
  "key28": "5nKH5JQomBUVUUqnugpNoUpac8n7oyxTMkhKXprBPP2vzFkKw329qygjHHkNnFkYEyoWpUSzKGAp9H4w2rrYFMDM",
  "key29": "2oebJrDwsPqfBzp9cDykrx452CsfV4UXJBFxgCckr4gYqKsuJofHcJuhUCm3xg6fS8dhYm7nmXn2jv6T9vi1azbJ",
  "key30": "M3VVe5yNdRHhi4KX1FuF5rqz9AquECg4bccW9tYGqBWusYjtCVcosY3NSZixECRwQVi9aYLnbjHn6mt8i3G5wm7",
  "key31": "2qAgmXDu36nisaadNmmrdjQsyYCTQbdzJazGWyajY4jG9KWtDtefQ4SZJigP3eyoPSUwEvLrTVv75Spc1wchFL8v",
  "key32": "3utxSv5UcrRiR3chLm766cFGcELn7ZwNfniFzBR1reWcRjLNtPrgjHRtFKPSa6uhqkrKxv25tygeNY5dqzofS8tD",
  "key33": "22zTCxBky1XQz5S5ra7Z4DaM5PxpQoKvzwm6Jp8eu5nz65HujKN1Qc4uNH6Ty8Zn7ZJFJdhsggf7HdqDwAe9kaBR",
  "key34": "5VU1AYcj8bkxrwFABAEWy8uBt3xApxXvrUXSx7ciVrvq6EKp7GSHhFeEM82abwzrGf9G4VuPJwQ9K4ixhp4kzekX",
  "key35": "XedTVp9tjNsMpEtQQ3bn2k81Ln2JCmb26FNsPcZhtqKBKpRxDktgFYY8awLANAcEP8hXb3UiXY2aBDyQWMQaxhh",
  "key36": "2joQpxWbc6YDqD4tQaKySFQhn568dvgEUo9hyAkguRXBzKhJ4Yva85JgrJmx7c4NDvwXMeyQppiy6Ur8pD1PV9FB",
  "key37": "3Mfh7oprmA3Dn7NUN4A5psw2DahryBGd6Dc7ZoA3bHB6Dah9AeKLQLazuK3FKvvUC1dz6ua6nxJfKfvEQx6Jr1Ur",
  "key38": "NQUx8t5z94k7RmGTohvoLvxwSqBc4zPxfCwpsayZrPsRSzNQuB6tKfVA5Gex8ccgS993Qxk4TzMV4fTvJPdyBuq"
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
