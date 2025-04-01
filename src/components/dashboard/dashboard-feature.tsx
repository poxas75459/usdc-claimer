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
    "2zTKPu7VZSFZEo7ragtVeUn2jsT9Zx1HiwhcrbSVGcFYdfGu4A37i8xPMZQpoQjC8tXgEp6WGf3HzsTpBxUeBMrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S63uitu7bWdCamswFBGnGXoJEscmUb9y7krcNaR6gtn6axKVhw3mo38JW8iuW1RaUe6cABSSxBEGFHLbprqRgbM",
  "key1": "TCTSh2fNeRK7gzkQyydfYQFMNHYSWbkkVFGPCwEzKgYVcEDg9VyJVopFQiGf6J6x5yDCk7VSwLXQGbJBbWG1a4Y",
  "key2": "3t7D1mY6wvFVcY5Uhjaq9Nd2u8rCSAMH4a13wRcKRvsjAvKRULujNkSDVEHYHjny5gh2a3VbBzraFFYeJ7BgPX2x",
  "key3": "4ZmbwEqGWuHYgan9Z2V8acdxju3NKC4q7aG55KFtqApk1igjabJ3F555ysdeHr61qurW2BVMacHa2KJiXZgiS2fK",
  "key4": "29AzgNFwBgzaPm4PmWspLU8FP2dwkkWYRCzcvrxA38bpMnLdF5HXgsTTqDsAHbFazMnk774vBmGe7WkUEKmhKiMG",
  "key5": "FcABdmWd6GKTgw9WZsXyYa8pcQs7HHPkcgP2atoyoWrAMCjKwA9oy9VhWXaWZp6jy5DqLKWX55crHSUSYwv3JEG",
  "key6": "4m63mTCjhDfzU6kbWNPib4iqwHLds9Gni3fcJzcgDRxwSVe8tSbD2yaemayNy8QsJTfH6t5iJ6A8QZ71kWTAZoU7",
  "key7": "5Le2J74Vf7ZM59wYz3e7WdJBuXRLfHj59rwSRAhRGdnS1gsApjstkXsR8QqfEfMPsYqxxq86jxPNZcd4LUHgrNx7",
  "key8": "gQhFc13QwhgyDjLMfuwvCr79oCu9fNsHVxacw6TBpjizvBfwerqPD4wBgr8VRMvCQFw4aHFvjXVTvPMD1jQo5PF",
  "key9": "43nQK6DC5HsFSCa9TCDwAwkyucu9wL9bfaUD31gz6xM41d5XTLLgkxKns5CpWKYQ4LdLw7uUrmHcmPTac9XBanuQ",
  "key10": "2ue5YoLk3Xa82t78Va3x7ST6DWrs6HyEfCtRzMjJDB6vYfUMGL5eeX4XPD769cxHjRQ9xVB6Y3mmPdouoZUeUTbo",
  "key11": "2qpXCnoU1WuWBSGTGxYLf488WVEhtVffkK9tcvD7fbzrPMhTLQaMtFJEsqsVrn3nWvcbZ3yh4oCN4xtrAgKdkDDP",
  "key12": "3sCXqYZPkHPnai3cikEumoYsTqVVdHv7QWu3tUPNGBDe16hXPEgBav6R2eC24X1uznv1GHmUd1rytd1JESFEFChF",
  "key13": "3fUujF3HQHB3hcd84CB7N4oe9scyT4Qkb6inkoqJcPPMCEVvX7Nson7JS4oqg4RjG4E64uPhXZFvJyawM9AWDB6A",
  "key14": "4KFqd4vq9qvCSpeWJt7tmc7rMZ6YrFQQL9zAYApfr5g4MGQEEqercnG3jNS36KgEcmbbnrvvvs4QJ5sMGrXyGy7y",
  "key15": "29czjEEtV26HLpB6wqRuX5zwckU9UtDAWhVDR8F3K1Ctghh9AdAo1Up8sYSYUhXFWMvrNdkK3XQAwdbR8sUnkJdH",
  "key16": "5p32MyLUC5fvXHJ48Teu2cdMYUSx4scLk1iaHdoGQfwiqak3jxxxyYZFiDtFxBi8nYgLZ3vW2SjgVzwsUctq22Ki",
  "key17": "vAt6QqwRLzbX3v2widPM6gLpwTNbjxZwSufZ8f5GX6uBz2TjdNrCmknRzx9cTEjxbBS6XKak5dq9VTHd1Lqxp2Z",
  "key18": "5M2jdqsaPeVdG3SQMvRtjijSFXt6muvW2HYfjhbHmvqWx2VAudCxp9Zmmi2GFJHKfdtfvDukQjrnw9MAQv9kEem5",
  "key19": "3sTUoxpwNnFuQRRY52h7GaDUjDYAcLUMovtNrp3LRK5t9R9vBQNap8SjpwsBzjvymJCWQSSfWxnChKQNydzoxjoS",
  "key20": "5wdVjhX5fc3pc6BNBAp6j7Sm36cDs9Aya3MzTsrkMTMpvpnD34TouPKrW1DgyM3S4CE5eiTm5nhQQM6J9omejJtz",
  "key21": "2nJdF76UjnWQ7dfsxpyfy5Dwyf6HXiNSdXkujnVRdmj6DQeJkLXy9gXczh5gcSbCdNreapcBoSUBV1sUGiNQvj23",
  "key22": "4DLvMjFF38tCpNtMnQ3fiTB7AAUooT31hw8DcTaPR5bAE53hWcbjnztN8sPCRGBcvjw1HE4tNp87VG8os34GHcmV",
  "key23": "2NdAuHtqE546jvMdxf69upKdkc6JogFztss6hr5KKAJjzv3KBMTCSeeTnLsa9xP6vxMWLpupZcfoyskYxPAU2Zxv",
  "key24": "3CJW1B2gn4ec4a82CD5Gv3AJq8aK5jHzHRjtzqgpxbovihjVcUzX9Nbfg8PfE2gutTfY324TtxUVkBzZLuGvy5LR",
  "key25": "4tzuF5mfYHMDCbFbZcYpBt3kanAFDctsg2Mki7aiTTMz8i65ta386T8wiqH33kCXcRZjUQMKiSyTHT7tVmGGcypG",
  "key26": "5Z4khYEwULoYcxtv4Jvt81TTpZqtaJpsq5WnJeBAQ6sdUKfJwFujPZCwwBHwHJ7mjw41R3X3iMPRARm2Nbb437NN",
  "key27": "3ZqfbYgbWiWRmk69VxMtF1D8K8LEHdiPQETWbxz1qekzpH2jC5yikfr2jmfVSw38RhNaC6guiGcricjrpoLMGN49",
  "key28": "3ijc6wQ7SW4Hjq1XaSWKs9iEfvfDHi6ANXBc6BGF9LTdpawXu8zqQ64yamNnF5EXiJLXMfNaB6T727niTq8rF9gi",
  "key29": "4adFLf9bLCYqtFxHigXreiSZ7Cbh2Y8gtCbvRoEh1WTZdqbxBYqxvjbHxN83fyVyqz2hpVHWwHVV41dYUZ3S2Co1",
  "key30": "2a86aqzPF8qNuz6xgb3wdFFLGDZzbrvgsDhQeJq42G5eyfqunigMyhFT8YayuLyBYk14UckFFNzquuCasSX3f96u",
  "key31": "AnbQjFByjup9asGRKHyvH1EKPxRcX2pWAbpGQH51FS7ur4ctvUaNwGPJf3AN1ghPecdgJrL5E5HXvrE91cPc41B",
  "key32": "58C1Z7ijXcAAmw4khSXbPw1cUPtFLakn3WN4bKi483fQvUELATjUpjLK7f2v5RyWNpqVXZzJthqqU1q1BiNVN1s9",
  "key33": "3NWdhgVmEwHzdvsRbQkDUwxi1VCo6aAjc7ScqXEnXewxCzUwp8YVuv42r6VAV5ruXwe2ASWUZKeQYK9UpUrwZnTp",
  "key34": "3SSirMrApqLx44VYjWKeKThRmcVCsqPK3C78XKDWqD9VNb3Sq5VN3j3baUsAsw3gETyXpFuWpgBPHGdaYhqyssoB",
  "key35": "2m7fJ2JRr1ndQzMJxnzk4mT6dhV2Y6f5Sc4S9hPMLWp9KHsnQdkNjZ5561ymbD9XARxGvLr1Q83fi9U32jPpTnJf",
  "key36": "3XAHYPURzeynBJMCYb85bnJG4dcdRHTtkoENF2VVjgjF1jfHB9vnqEG98B1hhdQEs4JddHKYQoPERPp3Z731aMTe",
  "key37": "4aFVrx6nkjwzuF4RAzSDeFeeHZmxUYksDN5B3k2gy7edH9X8VWfe1BFNYEcztnwKfsoWf5q8YcrJNu8JqVt9rHyP",
  "key38": "36FHmWegiznoqgqFCoESfLwjfGmgEM1pHmApuwQijoyTQ1L8k2HY97bEb2p2rtB93Qnz2EYwthsSVYcByG8NAHFb",
  "key39": "3agKVPqKnk7uVPPBXRcdufhXpF2WMfgP7fQCr3gQq26ewZ4P5XMdZ8CEyW7XeGBEkTZ1BvscMSGktvLNPQtMZhWn"
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
