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
    "3dPAz5KTFDcETx2pKBpnekKpFw9eRJjZuxYz4T9iBobZHER6Tnmne38cz6zCLZ8hCJ1cC2JP9FgxeVJwTHLMKSgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RquYZ3omCv7CpaZKWS5Q7ocv16aVy2ERPbQwvWQyPSLmBbeG2n9E83uVKDxcR6JEvGrfCkxq4LBznSBi6AvFfXK",
  "key1": "5YwKbpoYSxrSwHmL6BL7KBMZkeUCBjYM8bSxQp5caYfGpmMjAPdvM7XfdPEJHadTkPpWx2SaCGS9V2qrU4UWbi8U",
  "key2": "4GtGCdeER3z2QR6uvNuNBJZcTi2BGoE5CeMFoLkqQCWxGkii9R1Fny6rn4kJcfSRwXci2iETNueRPAa448zDwiWB",
  "key3": "5o43M33uYjmCpMsVjAjmPYFfEcK2nE19aNB2JRfbhx1uhuAKuxM3w9gCHh1hxHcgto4e6acEqBT6z9ZXcg8GohTh",
  "key4": "5XeTMnUuSXkvZxznRCnNf2WGNNcP3dCJe7NKUUPw7rh7ooE54rWUP8NFwSQm8hYsgEsx1ofCA37Qq44Nq4kfijYv",
  "key5": "629uBNfpPAsbcBuGKB8d5iSaSnHnp4Xdq7pk3x8tTmkUiy7iHezHFGNkMQDKPNe3SWrRP4suzGNdXAz3cd8pzzFC",
  "key6": "5pzswko1aEenxChfhjfAY51FAjxu8Z3fEoi2k6nACxoMNMqbC6FXmMRFTcouJdAqXyck4iwEWoKN9NFk111vkX8s",
  "key7": "66ku23yXLk3uB8FJEjXJvDCgf6TdrcLhnCFppvSKkAL5nVTZwFpmuew3qVyvLoLVqfYjC3bxTgeZ9Jut5p8W8eZ8",
  "key8": "3Ar2g6C6kvk8Tj6i9UCVE9NFL3bkCvpAoBSYjX3bg2g3oFDhUiQXFRtVXFitagy6bjtyX3iuvHMndW75vgpbvJ7e",
  "key9": "ojSzpNmDhPcErcxKxwQHhaYUMd2YkuENL3g9X5AHELHbVNQTf6cZDhncoCZxnhNcCa1HdqniypcvCyXEoEVYRB1",
  "key10": "4qzofiXoEbLMWTVBsVvvZxixMVXfqZoAVbnk2jmJ1CASHmTz5pJE9Zm1vF1fQyvUvVdYpVAHxrzuhZK75ruvVFxa",
  "key11": "2bK1mme6DcZqqTpBKejNeSEjyUAvgDtA8hCkGz1eTFHYsYkACSkxQwtaX3oL8FdP62voxvJP6Bcc74nDN2MRzPG4",
  "key12": "4yfiCes6D7UGTAn46UeZpbsGd7Lbm64v1K7zKzxFCqHGa3SPYciAVbExEkumQGVSSAf35dkDXmYYTQyQfk7B1RvN",
  "key13": "2YQWzecTucsiQ2K7BQwVamVRWdZDUoszxVbBUttq3bbyaVFWSE1TXQgeqmaptAe9vAC5TpMdFm4reA9X8kw99Xt",
  "key14": "5GG6VmfHLBPWt2MKKnCSTsRJTchTV26LGJ96UCgdwjyoh11Sn9iUiU8aSiMzYb3krw4cWrhGX1JyVfGejayv98cG",
  "key15": "kieU8h9nFKQYtekPRZqPcBtoMg9arYfdvpCXsjGuyHSEoT9wvXaFSxAbftf6skZcYC5gSReFC7fXdW7ho8AmR99",
  "key16": "4VbKeoq2mfUyK8YSD73jSUtsCUMqXnY6MGdKoMxwxpFQqHDT2qkveySsGx192kh2VjK5rs6ZAjHzCig5MUyh8SUX",
  "key17": "PyfZMzFKM6Gj3X3trt9DRznxakZ4gFx9a2e45nNh6ChAXEm72YdT3CiPDhXQyLUMkZL6vimejfqz2ZrV8CWUxHZ",
  "key18": "5ukWrYHJAYRSFygaqaerezqnUW2wA3pHC6888s6CGG2Q1bLAYbB7v1cWoWcD9EMyqXAiDAwo9Tqro7ZzR9fHz3cD",
  "key19": "vGfga79MAumGQi2ooPfgt6w9oBo7TbUnN7dLowk7aJavfMXThGxSGRyB5HhLbVE2xWWQ3Rm29ox1v6n9Xtm1upE",
  "key20": "25ubaVzwLoKuakwmtaKC2BhxQC4Kmn51yAMGXjtJPWqYEnjp28FmDZa4p8cj6iw6X6JcQh91cceBTFPDBDj2zBFJ",
  "key21": "QfUraz27kXvjZC57jAfvWkuHXfPhGokhSHFR1BSL4NdCgSLW2FvAdnLabPSSRbRdnWXh19cg2KsZBGVJgC6aWsW",
  "key22": "42wACTxC8XjDLQqhTJiHuBCF4cG9a3z1vY12s1nwFt5tPyzPBZqyaVQYKfccuCfJzQJF6MNftGPAz1FnvyxV16bZ",
  "key23": "2SGv8NfCdyDyJRYKfz93Hcs885zqEthXJKcrvefFNLRv77wZ58W1ikTGXBsmVS7kszanQ2hns9TJm6sLYumRy2iZ",
  "key24": "4636Dj3E33ctH2KxTQrkU9ZjV3iJTwqc2kEgxnrfTJifRKgR93dHLf3aGxn67TebDM6gbB2ruhQutpPSsanJ2ZXy",
  "key25": "32UsvmekNunSUfjNTyXdKohsZEXoWQGBVRyacoWMEfVEsmBzQPBFxYa1Rgx74F7sKTYkjmqtwAW8s1feNu1ncprQ",
  "key26": "42TfLWBANEWVnTzkUyfq45xYbSWbLCSCRzxqgbGFrZaeVHvHNuML9nDNJ9eyk9PMM5fwEhfKXLNZg1UdmjYDrua"
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
