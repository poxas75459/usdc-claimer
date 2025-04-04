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
    "4exd1nzcCC2raJPjYXA2GvntvtC3J4L7gBMh2bQLWcVZLvKvYQ7pJVwQoMcovTas5yeQnVFmPHgJb9uaNHwnonMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZUj9TxQZCmGTVfLu9Aea2FGhAcGM17mNZBfe8csZ1KDEA5E7oAuPTukphPz5L5hRNU62pvhP7a5RZUdJNdetB9h",
  "key1": "5KbUpkh12KqUDKQfDKSXF9QosdomQiLnaE4yRLvEAwvDyghy8dv8iyhVgQhddDbx9GPH45WiY6iek5QbyaPPNXka",
  "key2": "3e234Fu23iKT19xEb8RmZLFNehaoDDqsbopvqHts7qJnrbZevyxtancchLcJG52LkoactupcuMPVygEiEbeQXufM",
  "key3": "4Bg4hcshiYDZCy8svfVig9jB1ibz6ga3txVVyoHN4cVfvMKUCMSnvoaG7RkJggFvEQKi6JNBj6yuKZBFMBZWWXYn",
  "key4": "ionKpybKqFcEtUHxQwr3t7gbrpuufwefhFef9ugpu7CVAeGnRpos1PV3xtL5KA7ypr8fQeDu875wkZCv2KZDtTE",
  "key5": "4Rj6s1sVYzDsAAB3KwgAT5RuYptTa4N8k5dEUi5oc5tsPymfC37u3VLKqtBAZehQMsk6N5tpVSMtAcmme8NfbMdG",
  "key6": "2RK3SE24CecagX9rTkXuMUkNKrey58keF11mZpZLYUsMzyeTbP6ZAfxp4UA82Hpfegq8rtUQiUuyRgHZGSqvzf7N",
  "key7": "y9gfZaLuC2oVD8y9WWHCmfrRC65owJo8tMMrwdXrvHkVieWPRi9xqSHCuNRvB9uhuAv8oCXtqTbBUzNBbCR3JER",
  "key8": "41yLHa6PBSkurLW49AibvgdZ423Yf9or9dQd96rzpxFAKFfdFoWi9fod2adaqBykAN9jD2kDbq6QGWQLePV1DGo7",
  "key9": "2bFirrmVUetbfyBrRWHrLP5gNBC2gAkZiJazNYeBtfjmMjdKQQiQHanQSdLmKmZWfvCLvmdmuF6a8oyPsNEXjiRi",
  "key10": "5YzKWrYTV6DKyAB7qPai6kAZaPo6BAtyniJGEdeMUB5VYagn4ZXwe3hv69GkMs3y9Mjh3Eq4MeSPLL9VXp7VhtS",
  "key11": "5i5VmhZErS6Ln6aEKg3tNcwPBNCVyXVmFjmvHx5gXmS8wvXtPL7JUiTE24L2BXdwA6b6vgGG1njRugQwhMSATSSg",
  "key12": "3qa5FFMieJwGrDvwhYMbkQB3eF2MjrmgQGGhHZdijSdranbY6vFBoGtSUenL7QPzhnaTJdSTgL2vXG8g9QxCt7Le",
  "key13": "49dp8UTBp3o75eHWviCm6PgEbQ5fnha5a8KeBujfsiNRhV8X91voPYBiZb3h95SeSuRBbpTw5KuhoBfVktp9zFv8",
  "key14": "3eZJnkChsECzQm5oi1jtFMDPvYXCU1v1UKTZRwBGJNfLgwDmcBG7f3T3oGF7pVjjKi5TN9eDmqSUcLdG1vSBSU1m",
  "key15": "9ggPG2DMHw6ThC3msQvrnbcRiHreFDSw2hctknAPeepUmWdisQb5yRAqduZTsuBbEP2vvuRNDfmpezLEWg2NhQ5",
  "key16": "5ZcUu2CG8ZeJnHidAFLC9kw1vqeiVz3HJxcyh2iZP3L6PGEkEc59XK3RNSsJPDKEc1udH3VLQP3QWTBVR5KSuYTE",
  "key17": "4rbjjx27drF7H4bgKMeHSGJPFcPSwVoby6QL777GG4NXGKfkCqtr9vEk46vegxjXZbJNcLbfhNTg8KdK4D44T9ij",
  "key18": "2WSzSY5q34boFnZRzaqNSJJeGRdpAwXURvcBGWTN6RTJQjWfJVnzVcddzZEjyvDbGAUGNU46ipkBwM4QcMt3JXp8",
  "key19": "4bfE5vAfHWmfZbvRDvKUgpiY43ez18CKTwRcXMBMhCAa16mJ9vyvyZchT4Nbon44w8weSaR9ndLGJrLMdmuSbbtn",
  "key20": "3ezkPKhdSUQEeAszG9neQZ3bcjfdV16LLZJ4YQGGVG6fLV3LPzv5RvvWAkeXWCwXs5ksnUNzBLwmKRTZb9fWhTWH",
  "key21": "31tg2ACVJLzBhURE5cGpYKfkRJcKu3xNyAD6Fub9yXTfUt9zMf8xTKodLtEKsiMadaEikWYwg7KCLnAKr3BJD2j5",
  "key22": "NkAWKXDvDYxG2HmQNhutsM2yjrcoH6gEVDgRyxDiiMWKpyDSFqisRm5PUmeexjvE4Es2B5EanCfJ16MX1q8M8Te",
  "key23": "5JzU3dMTTUxo8RsSm9cRypGfUMrQunJQxhq7exFCPu1Uv62mPEKLsGNeV8bgz3Styzypbp4ksqzw9d6eiB5VaCtj",
  "key24": "51VSGWqyzBkM7dkv8ABDAj5xLKtiw6nw72eLFsaQ154ie6QzycpgfTug2U3iyCyYQQ88T6LRspYd5LidjvesRZUt",
  "key25": "5ceYWxuPX3PUh1wYps4FXeUGYbBvdD2CXshjAvv7yHe2anJHXc41PXvpWa7Fm9gYBctvbdLSDjyJfk1gtLdFkmXU",
  "key26": "EQkmqdFowoazubCy41eVuwLuiRP28wF3kbvH93rhf6tMobcaQwB8aJsjzY6RzJhNTzRuieKqaV8LLrjw92iSVMv",
  "key27": "3AZvrTSXiujxAquBR1i1dM1oZWdU14mWgqcBTfqX7e778b9VNR4eACYFpAYhjham9mYVypTdQ2yvhGyBhKfKukGt",
  "key28": "5nEuD7PEeqay3n5YtrX1f95nupqbuQ9MKj1Y8pwYs6Q5JoF4qvQpttb2P16nmZyJccH9HvHuMrQ1yMmWSvv3qzP"
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
