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
    "4nQAAPifFYU62LZWSeKQd7jycyb5tbbgwjByVWbxKcXNM5f57gHzefsEMtv6zV5R5ZwL5yU8d5awWwg9vbRg5aev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UggKaCJcxNXB1TLuJTu5sjga9BCi5aVwxiwMWcg8t2kS88BLTxZZqyZFfSG44sWvCebLTn4QwgXGfJD1cbkbp8v",
  "key1": "hHN8EK6YtoDm941aHbGGCj624dAFhS6NJBLqED8JtmJ6EJsUDquyjDAQGoLaoziQAL4byxCc8J9DgsjA2RtQJSS",
  "key2": "LTh57VwKUK4uyA6xPQMBfNEiyy5vMSrRSvxipJcY9wjB4cT8xE9enhHREwBG3B6VygcRaRZShhr9bLTVf3NNBou",
  "key3": "33iEz1UkjJ55uatmgfysU5PfRAU1yxztMxbAwwdFypYgrgFaqzn2hyaAsyiav9sF6TKG3qQ86jSSf4Brp6XQ2p1w",
  "key4": "5HrEBH3gYTzJosdmvNZXrKYGciapKjZxHTMRChBvvBpyP4U6JGxdZz5GxKcNR7urtuuT5DK1iAddchGaP4PFdkpm",
  "key5": "2HrhCJMA6g5pNN8TTvw7y17kEAdNuBVTt5237ZKGLMvo3LSJbUcTcu9a8P6wXwnA7uE6yYBWye2yEet3CFjxZJmB",
  "key6": "5AEFxJ4SNA4PHEoyQgeobYuMRY9sCoDvk3xxjWTFcg39fNLHyG7iPv6mGA8pW6b2F84sNJfjQS5MkTs98FEcMKpj",
  "key7": "4GH5ghgxL7Zpkpc7am5iq8WGhX9PKqV8GDYkugstNJkoxmfwjKjxjLHTa2KbPjMzxQLdEWWMkh95AXVcV9udbU6Y",
  "key8": "4ZTKmCs2tzAoVLp9FVzbc28pY3zD3UpXH6uprD9vLqWnd7vsCUtw8BaxzbFrg1bzsDico5YL4Dhz3rvqpBo34h9c",
  "key9": "5rbuDUZqCMGmP7BactYGYykrssy3c9NzvzsKDtCkaoudFzSdfcjMoj1Z7Mfog4YEQLivRuJQndhNuYTGi4uVdpwP",
  "key10": "HPAbfrWpvEqstHvk5huUw8RPptHGoiiQBAtBqpb7YLZ3KQbyiVyLMhSgrrB7mmEyqMBtExgxwnDyuLPhvN3MnPA",
  "key11": "9pNkhZkE4dRQvEpZEZndYmyLorFQjvvvwFZd2HGNj7fXhm3xYDM6sXSGz7tFa3GJmoxDLtvWZXqkB67TM1FoPvi",
  "key12": "2qpspRhHzd9PpPNYtnfPPVf4eVAKrACk961EEHEHAw4zK1indL1rxgfSRtzEsQcAPjMHfKcS4L1eT9d99gTzZHjN",
  "key13": "4vYBuh2pPhvzMVjanwutApazvuuwbsvZ46X4VQkENygiGAj9yFQjBVbjdbufE6cbDMG3AGKEe7j3BcWzwWaU1b2j",
  "key14": "3p4hLdGwz2HWPAoa3yy8voyvvY4j9nyCg8MKPjsTUkPDszsDvpcCG6zbr5pQWcQSkSM1WMmkJ4tg8MQt52F9z9UV",
  "key15": "7CHh2gZu3TaLre76u7NWrUbpUjySFGzv1EJfHPRfJNNm8FgJQcya39RJHASYMhDBFHvyCxQXWyRAzs3ibKt9ZxL",
  "key16": "x8owJ2Mcv9KrtKd5QmndfPjLTms4kWCAMqqohZ7d8KBfDPMgd7nWYp3pphSTVbqd4zdwJpmsi2h8MGaoXDDfwvf",
  "key17": "4pS6kJpHpRySfkohYLsnbXdDkxaLMuN1idpJyoGQH5c8CTKUZ8BU6iLVda75LsyB2rATNB36Y1T6ZfhFaZf6fS5G",
  "key18": "3yitUvvgUY18Kdf1L236Em7ZETHLwNSLymjhzBstjMAqYvDJeEsHMAQXjBojg2W2bYEZf5JZfLuHL12TsNNN2LBy",
  "key19": "46oHxT3ukXtDXegiDNYsKQMYd7HnpykbwbUotYsFVpcbaRfBJpBTEybggFMHj2ivv6EydfuYZMhmSgR3KXuhnxTT",
  "key20": "3gtTNj7Un4uAZs7sdmWL2jpqe3gSq2YnQGzfYsLmuo18xzpiQse2mrE1Jnsiws1VLEovhxqwM4X4SdnE5G8aAY6Q",
  "key21": "sRM7feR4XmUxJfMu4HxbypWtdbdL68pYBZnd9mD32WVNiU6SBmVaceMjieG2LgE8sqevATT6K8Wwz1KeCAm21cm",
  "key22": "4chh7kQUgeoAu8KKZ7rKijGvD4mDHGk2qUCj452vsm68TyaNkKvBAYXNrPMzvsbshvpqR3mpUYWs4KFyfEFXo9o6",
  "key23": "3oVqdzNujQ4nHEAvio6oH2VyetQJd7fKXBMZpHKa2jmCZ4HhxhqhUyLDeFiJvdHCMUSKm5v2kdGe5dHdd6dmfabH",
  "key24": "4N1ipHpgb6xRCpo6UgxvPWSmkJqEarZ9ApbsuwbyqC8uMzzdwT1QgcuzV983t5ScEtz83cwi6hmcPcLjnxF6B4jv",
  "key25": "2Z3Bs5ZyvrkuKiopjx3SDh6h4Y8Z3SLUt9e1HS8nhKbUBdfvxvNica5LySNUwMQj65nT1BNvwPZec4T9oGx4528P",
  "key26": "55oNUFqLrzo6Nfk2R51WfA6jbGtiuFucM7VLNFF2QgijytsUCo35saasuQAtpK4wLo3EthjcM4QwohaFWqiPd2VU",
  "key27": "2chn2q22NgxkhnmTpExCfU7n483omQWMubQUsuCCxKaQ7KFUoYrvL9BUwkEMnLnsoCvRQWuMchFPP733iS1JbX5s",
  "key28": "4PsR6JeGDhKzUGC64vomWTfW6gbxGshVNvsSQFejU96NXNwbJrE3tWX81VkxUpcQRLoFqJoqrJSnNJFPBvNukaVm",
  "key29": "Qq8AJnTCJ9v3Vh9DzFgtyXaNCpHKCnGWVMacMxHUwhwBVXLMASBU5XPxneK4wWSWKhndDXu2TWQMXzmZDtKjBDu",
  "key30": "3gkGokjrQgt7RpFFBZDaffTWcWdd96eLfWSaoWGuSg6B896K6LkhPxHGFcdiURXXvNLektqjECDUHf8CnAE22E8B",
  "key31": "3Kf9modnZDwhbWWbbzcccCqvkkLqeyBNNXNKZukioeSkUkETLmd9GqmwxkufNK8ACsHboG8QRsdnXeAPLNQ8vqdf",
  "key32": "3NEvL8euQABhcEBJ2uTiM3M7H8BAG9qHPVfakHVX7FeRGbgyVr7PnKgt1Q9rFrY7i41MYVZg5jxnhH3ZsdFYKE6k"
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
