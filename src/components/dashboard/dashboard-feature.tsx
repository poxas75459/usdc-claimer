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
    "5vVNkn8f6hrPR6BJxRfoFfVQpg3TbVL9fd3L9qtWLFJb8ChCSDJ75PV9mtos3qGYcTXCnxTXZ7FKBDKbsXJeWzAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxAhvg9ZvTULNSMZXUxUtRJwgyd4u7qGsjMZaJUnnPwLn48AdS3ibYNbmwu2kDHYypxptKEh48ouTojqFyeZvUs",
  "key1": "T5NiKiaNzpothKpYVLXa6T5qCmGwDcrZ46fqiwoPyGitM7eq1Gn8GqgTqYpx2Dq21tfK6AC6nJpPn78Qd3NbdvB",
  "key2": "49B53ZtY676JFfJmiZabBkrVrVK6Nek2wRr1ff27yDyoPPPzJEwJ7s7cDYygSbQHWw6jiQxszrXM6MBGgXoCTgv1",
  "key3": "5KMqhihskQBqBt58ffTeWX1bYmxgApxb8eL2sKD21rjkTQoCF2LXKhrDeNFt43rKJpeqrkyE6DV5t5sppRGq1ucW",
  "key4": "2gAVMAiH8X63kzjY4qqc8evGhi923Rd1i8Po85kvnhJgsWVgA21vjGpRMnibnwV72euwknCrcuayZ2qWX2bYXs2b",
  "key5": "3Suw3zTrpDf5zFrtvARiD2dTMMuJU9aiEzpEknshJAFE7YfeFJSUq11JvTM5j3HZVvMCLWrEryxc3yeRKa5k7P72",
  "key6": "5L8Fe59WK5UU4MJ12Zw1rFLtP4uus1gqBS31qQ2RM23UMrHoxDgK9UkiDKrCUVQ64Ge7noPtcmyTTukuaxPMQxjr",
  "key7": "3BUpRnE2YTEeWh1jZozoVo9RHiXRdatHf7SSFTCoTZG1bmJFbdptYp1xpec7AiqdLrm5HFHPtowyofPKzRTwS2C3",
  "key8": "3FoB57q7xLEpoSk2YacjvbmdVySvtauxYEm4aU94CWHd98nSdgZhoQtaWfFo2e1w1mtU7TXoJui1zUfYaUX9n6r1",
  "key9": "3BLAsdWkJ8oK8q2zKmk7wkuNAMn1TsEetia6KEvBRkawGeYh6Z42yssrjZSR3C2zq4D1Z4eDbvjfX5f4t5Ah12Kz",
  "key10": "iYmXhqFuUz5FXV9AdpiHFedg8QUqBmBgEL4usfLiQGm6r89quSrU9LHi4f2gzvyLNwzZHmZBmYc9WWEPez2kve6",
  "key11": "253qvWCCMSDMKrYYN6GDMDeULe5L35Hg5x9UuDYMLnXi2TFv5yAJu8kTJmqSiwHiB8WEkmhKuPeL27rqXpGq2q36",
  "key12": "5h9Q4pkm4evYsNpVRNFfqnbRgBzwsz8pUdudFqjeCkJCgyKyvrv9FdJ2R6ruHAhW7t22EG3wZ2mBSTpfdKdJbDJP",
  "key13": "5PePLBb5D97WtXXHAhF9Py6NAR2qcp1S7NY8hKCCAGkNYAQiJezzViSZrmKHMcf6xBHhewD8uXHVqn46GW9Ge3Zj",
  "key14": "21XVdPqVdY6yqMKB3kWaqjWnbndV6ht7PCdZ5jjt89FoPKbydd6exnDeydn5QcJTfEy5szgxxLWSCLUk95mquthp",
  "key15": "2F8Ks6DXxadUvVXAmeBCnvnvh3QUcLErXD5HpL9TtK14uJg2sNvfzAm7Rrrs2ZgGjofBRfHxXZbKTceWyaWPg7eG",
  "key16": "4376Kk8xurwnBtAAedoxHxkGcf59kiqYuUFonUyRjQEQcfJeJp8nDPbeJDcLVeTXvQTqJqQx84RzKN2z6fpETV1F",
  "key17": "5kH5yG9ySsvmU2NYFpo63RU9WvBJdrZSQK6GdB5c2umRrZkDfR7rzoGqEnLm8QrEqzQSC65BdiMZgSb52LLjAWAy",
  "key18": "25UHnUCdBortqCLDrhPWmvduqWPqi7eccgHKzdBhL9HoiJ4qr8KuuvtfnUq85aP1PFNDyagb9Ho1pEpXaoahG4zy",
  "key19": "3RNXR8bhgm43z3VidNycQKEg1YKLRiYFmNeDHhXmmb3K6a5YNfcQ62jCa3yHkhQHX4EGxCeMHz8fFiTXZADchsEL",
  "key20": "5etGUpBVAZFKppEU8w6PJKroVZj3WnL2sUVSZTqdNUyFYn29aRK3q43NZcwUuhdQeNcsxcUM5foQ6iPAuA4uwdN1",
  "key21": "BL8oRDgUn6Yy6bbm7KgtUcRoZXk9rhMaurhaxhkjT1nMUrTg13nJzk2tjwe2629YCiZ6eWviqdWCPuAc6wdvf71",
  "key22": "3qhKGBiHW9g5sTUZhuBkfVduJL8qWSHvFTyfc8YWAw1pyMNmQu55n86i2n3rwUTspVwYYCx8MubnaBM6zRZP5wHz",
  "key23": "5NgHV8kncfJNRh6gHrpdJeK9n5kvgjTTWdpPKaKivf8SFpvh9SZrhyHSEGXBGAbrZbsz7gSK7FDkFqtcSTYPh38A",
  "key24": "3xgyGLDT54dhRaC8azAkLerdYcuZuuvZRBH99wVnm4MszPWgVDiWGv5yq6XS6pN7zfzz64MGNXuqMaZk6x2ihe7a",
  "key25": "4En1bNMCd748LKkofnaPAHMgWKExnNCM4vZu4T9EUyxKZBu8bjwLBkC2CmpWYmjE6RcNQLVRHyqkaEYMqBs5j4Dg",
  "key26": "whbpAwG6JMwX4oHYC9teR1UA96wsWMH3oF3nAS7fbRPSCwmEFtKHj57pbAEfN6NNh5gaPafALu5wUZjXmomTpNW",
  "key27": "48r6nAwfuQ4yEitZ9rmnM2Jm125byXwxNJ8fzZjtYcKptFzTwEmzbp973FggybhCvEDpUMhMnyHBiwmzXJ1gmYfe",
  "key28": "2XLQACyGGrRLEFEuVMf6GkFHmCXn5rhawtANp9MCevKz57PegEAwTh8c98yeBepRUBFcRAmwuA4GJF4vmTCiCrgd",
  "key29": "jGShT9keb4qy8NNR1qGNN1V1rkZPMwrYKGRmn5Q2hxTBR2SfvWufAtQEMpLGsaQUs1gtr7hhbahupnZX5p32jj3",
  "key30": "2wmyx2Ypa9ik6z1bfEUFvTcSqgwwYAT2go2BqbBkdmzbf33enEebWvqDGEKY5asEgQCcyXN4StWcPYiSGz6yyGi7",
  "key31": "btSDEAnv26i8Tj2SCuUgUTJfduKQtLNUwXRC846uErrCmdVDjwYce739xDkR78JYREwoTTNUJkX7j6cFGTPFUxR",
  "key32": "2AoGscHd3xQBqgvQdBSsq2LwDhRvrGssBLoADx8Gz9GA51H2Q7kqotU98XtnoUEaHpaUMKLVA4arExcdUKiri4o8",
  "key33": "25w4bnBUffYYNerJ723YHjC4DbcKMMttanW6f1L4GX8VG3t61tfHR7bQqZMuLwfaP2Xjjp1ZAiH7bsdECWUc1oYW",
  "key34": "571F33jNwLp9dNmDgUiyNbo4dNaCfDBPKUjBXbJwqaoUvfohvbHab16gfwgcGNv8qKvxvuhSkjwnRFxhm91E4aBW",
  "key35": "2WwTMtKiW3b3UW11mcH5U47pM2z9vspuhNv2LQjRdRfoW6dhr1WsN4qT9S82JRrH9UtWmunuJSe1DWz5gHfZ4ZiR",
  "key36": "2ZkzKgmJiDwCo5HG4VRXwqF7GcL3W8TL6vbHXtAvfVFbiCEzaNs4rWubTE8MMopTzzrKrKCoKXr48QyiRdcX691P"
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
