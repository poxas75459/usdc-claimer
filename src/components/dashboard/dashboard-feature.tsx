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
    "iNHvLfzkBDv4FsiE9ArHSPAus5aC1krtY6UrV8o1D67BwxtGtLUmfCWeU6mb8Bf37xc5rMom3ZxKV6ngrmgMqCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wrqjkTsdWimqwxhHf5e9N9L5GxAdLfhXfQbZPn4VYzuBreFuCNc1dgFcUbQBm2EYNUqy7kHDthrNgLKdFBUZNEd",
  "key1": "3yhwXR13tbDzRMnAzkmv2HMdpyjMrRFzc29q8JRHHWNnm7qM1igiHuQjzW7vbfMH21Xa5HyeoEq1YPugpxK9e3D2",
  "key2": "AXxXKG8T3EiANxRGEHxwpWQxoth24DSLA8GRcRn1N5peHsTfDhKeDLPvDHFbrcgyCKph8Kn5o1VR6U3H5eot6UR",
  "key3": "5K5a1s2MjDGhTNqjvnYusmdJxL7eeJz9gKmZy8n5A7B8jLbqwqhST8ZNjpiwV7Akm2FbqNeFVyNpip6sT5oCDJiu",
  "key4": "2pTmTjo9rA9DppDB73igwNMKZ8ePvywwFJoyjP97o9EBUSPb68zCwh1pTsJRxC4agSJGtJuZyd66pfntKnNs87M5",
  "key5": "4yGdf3VA9JdTMEYWaVGPq3oaNWsUVcFVmNey6U97gXDxnhdJ5xd4ELsTZt2THrDt49JqH6P7DmomcwvbaX5dFRfP",
  "key6": "4gRNpxo65BH59C4RznTqcP1CB37e6FELeQTDoZaX2BJfW9GvmukC53rpMkBaQwe4mZ2Wn23ABHAQGrGDAjfYxqjU",
  "key7": "3p93Jby8v6GrrS5zYoFfnZCJQPGwJhyKxa8oCnsi2M1z6aNhmaqhLijf1NmDfk7KR2kX2ERoytjWMiwCLayMKSYB",
  "key8": "5rVqDBj2bmzo2zc5mwHYiBV3i84dUHhYJXbTjRLCmN8aApXAh85Gv8Dkr5qKUjNiibR8NkReBsacDxZPtnaxZFU1",
  "key9": "2DsqWj6uVcyJjUpYWuF6gioBvPtFpQ3PhW9BYtUuCrhp2n2cdWCw2hNNExH7AaA4y71VWRhWYYHJm5ak736cgXF",
  "key10": "4fUMQTSuMESqajh3CbRgkWYTEitThtdFyohCTQgShCfnDtNyrqvnwNh8eoBaiFEH8vxakz2vxryQuieQUs5Mzx59",
  "key11": "62W1Eaw3vh14RTuUqQSKXgHKqn7WQBt1teTHZqrhP993GXZU9eMrQdHcvvUwbMjBEUVfF5LUWAT9mzPm3hm7qquj",
  "key12": "3N8ZDWcrZxUxhMP9pHjqStWsVy5HyJzxeDnyend2voaZfNpLnGdgp8cmGNK6GXA1nnGtMYfcpTwKVKc9uBdFz5kh",
  "key13": "43zi6RPJpFeUk5Uez8fT5mxEqpYciemCuDLh5P9w2XEiFY3cFJwNC3sxX3Yo9iMyGf3gMsisNofNrBK7DHW1L9XZ",
  "key14": "26wNFQAogFiSXiRfk89Pg3VijfFksMhtYVsz6c9qQqypjz8wnVabYutdfW8zP1FNCXFykmwbsTL7jaxqSCD1dWcF",
  "key15": "RQtYRaCUMCssWACvfhUZN2gDvwqRcGxRkUDRqdnpUeFFQq2Dya9Rg5fVewx5q2YvHS7u5jkVvVQbno7ovsjdR7z",
  "key16": "gey2kRY8M4BqnnEm4TVMYjuASs3WcQForjCS6i3GCcY6nS2wkV1wqsdsb7hk5d5N48qPrgB1SRB6vPovACAtdpX",
  "key17": "PsWGEBK4xLLP6hvjuTeN6KBH8aYcZA7bhqenW6cA7WBiNM7C8aNgJoJCY5CvACwgJ5PEBtVwLGA2vqzrN1WoLjX",
  "key18": "5DE33fs24SkaMmv97dKDqHiuNGoZMfnMPyQuHeCXo2pkHQfaWQ8mQWZNLG8ZnfSEsVJr9WcimM2E26bovmWutdAV",
  "key19": "2kYMwtycEEby8yVvuWfjKf4qqNcQ6VanJZwuiho9QMfTDmeGdQqdow2DZwgisneF6UQTFXE6kPHUhMSQsnEufdno",
  "key20": "XVCC8PrSqAVEQ5TbHZRBK6W49JjcjKNQcxjNg6jRBXs2x4cUj3PY3SP8YxnyL13XUqDDnjpsjDtpAKtXrVBKpBL",
  "key21": "2tVVcHexgcYyrUwNMC6fbvuJtLjxBddzyMaUutbrUAutpN1un82Z4ajaYBo9eGFB5LPJNQ5S8EjF2WcPTmMkPPdo",
  "key22": "PwNyYaP5NYM9uwVzkUAsVDkTTiZcb8abkY5c1ZknTZ7Wt6dzTipvR1rJ6T6R4ovZE7FHXCRXXWXMJDYGZqM11sS",
  "key23": "5uvjZQxCUKwCkZAPmwiSQCjoAD2bu1DmFKComwy6upWRFnNXcTiHZANw2w6gQrsHQD2fHNYT5gGJMmGWirTLGo8o",
  "key24": "5MtHfMppqBGQVmTsMHVRCdZC2bBbCUy9oCpuGA5jcbVVur643nu3wXU52nbKrGwZ9K5Tk9QzRomG6PECQ9o9W5G6",
  "key25": "2f6g9PEccd8T5XYajKuwRzeKcK6sWpuUPA39DP6s78EB4XsEi8cnyEkjtXszcNDj6bvNrStQ9EBDDThVCMqb1Tr3",
  "key26": "35RUrpNUqeUvhKEiFZuWqwUQ4myVAMeF8g5NGufRpLKKCUX1t3x5xa5my6rAA2atWEexaXuq9XLtDEpDR79UwmwR",
  "key27": "qTBCkb7rLEGagaCdcRWcGzJokEbMeL2LNQ1EWZZextwvrRUeB5g1tDpWnKr1B6twyNVTDrbVjsxHvCwQhTzZ5eU",
  "key28": "ATXD2AERobCiRk5oqF7cF5an8cWFXF6XoHkyDvnSeaQS6qFcDLaKfn4ZLfu5sfB5TdLVqjFeHBCbLxPzVgjh98d",
  "key29": "2wA1B4AWfGfJ3YA5nwXrH3r75PeZAVu6QNCir2zL2y5yuXy9MFcp9hro21VWWqq2YGS2NXDw95uACmn3q6YdVbHW",
  "key30": "5C1MNCxsWeYU2mmXcW3cG4K8XvNmosFwXHFhqPjZimnW42Mfwy5yWHBQtM7tbk7EoaWzcWcKazTTbFzNEzXoSTAw",
  "key31": "5tz5Aj7UMtJCYjBKzxHGTZqgmm6v93zJDKFTxGe7Don77gLyznf2qyjhkaXQ7n2unBCVYKBJaojefwHLm7GTZEL3",
  "key32": "3zs1v88HY56bQ61pa9yV2ueNWWkLAdxFwKEUPUThbYCDbi4vPD9CgviNN2pS3z8PLUw22o92eK2NtEf7DeKPmevx",
  "key33": "cXFX5PyQDPVr8tWx9joD5AQwPQRgo4h3yTif2pTTH3uKJiWRPvKXWYRuFmMnRyw7FumYLbQS3wPH7YbcvXxH3V1",
  "key34": "5khpWxWLEvPWUWwNYtyn2VDbmLFdu68fznAcW7zkCYW7i7k73okJYxwRdzn6ip74LC5P6LaPyMihgE6Po4bHG74t",
  "key35": "4UPXTTqLYwBdMo8RDSjTyuigJmrSzCRVXyWwszwCLUhbGSkW7Gq2XBrUxA7BSAw3XSB5wDCPzwrEQSqM6wAFYJzT",
  "key36": "2ocKjxPBHWdro6rBvkz5XE4L7pcqJY7dimKuWebcx345EjmGLqbadaygjPZc24okEX4XhBMVGXijh9AMeuFj53WU",
  "key37": "3EdfEXjT9659VyA4nc1rLA5zMPjx9PSXtyKzykk92igWdvgmNWLNkGDMknrp3NFDYnZui9Y7XoqqTZ2oKpDeUEnh",
  "key38": "5k2D15vG8WNXccaMk4ebKAGRAdmHH1qhPZJUQmuJpQfvsSgpoQJ6jXukMFxXjFj7337xT9Cy4VFuHTbhBRASSomL",
  "key39": "Fb73UkSpsESQ8qBT4sYNFHRMYHs839Wk8gVauQS5Qsv7VRBcfmph8DtwSby4ETkJcLWRH9jrjQ1dGAAdbC2kRCY",
  "key40": "2vVpn6CagyjXMXbuir3dMBVL5rZV181PKaxQcThoVYBad4pXYTabubcirS6ap8P666HWT1XF5PheWsQHrwFWzRoK",
  "key41": "41Kh2Kc5xaMsc9WTAGfkQ2yu38wzs6jpYp2S5aemzU5CpZTALnENkLXhjWWJJy4SEX4pr6zydDc1uW9xyJoy7Apx",
  "key42": "57gmk5kjowL6adYWCEYH9uyEwbrm7JgM2Pek21gM3zrZHP8dfpUWZA2eV76m1auhgGHzPFZEtLEqnNZgopad7tqq",
  "key43": "SBHF1AkkRsqiULnVQ8BtJXbSBd3gyWrL8B1S7ygxvMBtpN8Le1DBuMYBYobGFc3BZhMEfbseaLa1QmWLgBSTfu4",
  "key44": "3tTgBK51yB1DyTxvgR3vJqtYvQuMmsXKwKAbzXGbBpNteBL2xixR3U8KCCAh3HUfNXnhHSpwx5gXFizHGc8wQA3K",
  "key45": "3XZjSFBGAouypRbAQano5kYyh31CeTrXaLJWdYMWq8ZuJjmGmPwGb3R5TqJQ4kJbVqcxp84dZRszufqDCrQXSMYa",
  "key46": "RQhnXDaDVny7LiE5NLHbu445TWEMnCo5MFVCUB61kn2J9G29HDHpUNk7wTKDpL4XgbaGJ5E5ZmC3qs6sMApS74z",
  "key47": "gkXxa8f5EaJ9hxFqEr9HcxaoHXNzPCsNtaGPfVkRcfCuSjJRhf4C3htKcamqLX4czuFkj7PLQPEYc83j8uSj5rS",
  "key48": "5VZQYW5uZjCiiDmrtv52RMG2xqresi72xw4JLgo4LR7BQLJWWpTfuK9CDQFpk4Y7oDdRXgeSBdFYMnBiQy72PYjr"
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
