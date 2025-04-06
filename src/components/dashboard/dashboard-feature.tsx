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
    "2xwHhBN5rcq3jh1n4E8MubnUFXt1aY5d5A8MwwmZjbg44xnE1zmz85SmydqJeac1rPmHdRP9Kwjk6jr8ExBtgnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nmo4FcCfRneDgk5UzV5v41q6snvQfGpXqHrsWThNxVcqrhqm5eDonMrScieGToBrfjZJqzt4JRvkYMsXiKy2oG9",
  "key1": "4oZDka1CMHtveEVaSZ8oNGUmFagCaK6urzsc9ptQsguwBSozdXmEZkAsJqs8F8i5CLRV8zFPfxDQg92qVrVUE2FJ",
  "key2": "39tGE4HmCQ8rUSpQuGJFowLkEsQu9VJnYtUDLXTtYQBd2YMAjwMfDJaYjUBxnKGvdsQc7SPPrZ8XG8kKD2qCPEHE",
  "key3": "48UTWvf1Q5rEVgaWXurNpE9ZE2Tz21YYD1N1iXj9tdYfDefSRzJaysjHd2jsKJLQ5Hd6GHuvSJodxB2G5dHbWM8",
  "key4": "VZgpG1amZjAaq8TV8ETbndSSYb6FjEPEPW3U3VUmrF6ZYTLm5d9VV2TjWTwXuznzFX2dymjm3477haXqbV3dUvS",
  "key5": "3n9EFEwzGCWP9et7dRG7rtYo4XrCXFW6eGVj2wmqEB4YXWcyrzZudSy5UPqXMvPw1FUYpgT6wcY7YcMrXDa9uLdt",
  "key6": "5AAT8tW5KWoUfFH7DUVb6nruRDT2TQ8QZg4s3WxjbpXusWajVz181SHT2eJLApuEn2fvvjqqCcwuUUYw4sV8WJKD",
  "key7": "2NSZUane2ksQMkqKxWjH4S7RsuUsJWZzq9zNjUQdMUhvXgJjRh2rSPn6oaVJiN83ZxbZ5NLsu3BGMPs6fU4X7zsy",
  "key8": "58Q8KQ6TdkoXsY2oYyYSJv8GAa8pU4BtveUpiNTGHcjFhBYeUaCyJHLH6KREGMVcGJHUmn1MYk75Hi1NSrf7KqT",
  "key9": "24CaWdrHh5mbMBaSc36wCdqkPk6rCxazYbgUn6dZktHzVvSBe7eMevZcvRxvyu8vzYG84yj1EDNez4e2vsPZTNCG",
  "key10": "4ib93BjEkH3oP1zwmLY12SCJ3zqzBEA2n9jdB1B8XBwDSdR8ZZCgHJaFZgjK5ryJZUwfqEGXbctVirh4X7QzDgMm",
  "key11": "4awdjfvRUqewzhkkSr9oV2VtRPPZBnHsqGaBTLud6j48PDamwSGPsZxHUpJ2ZZZEJrRYEk5CkpDNLfy7D8SPxuWE",
  "key12": "44adF7gQJF3sDzzDGWX6zFGHQS2FgNe7onnzkRrfBmBPcX2d47J4XMduEHckwiL9SuCi8wKShHC1MzKJBBTc1ddC",
  "key13": "3AU3dEdoLahMdCrqF1jUFG336Vg5CYASD3ZK9zstnKheQ4Bv295bxdbwa6m7V7N8u22wrbqVP8Cg9C1wpRhECDRh",
  "key14": "3vrBSUdyWCjVM9qrDFMajrKwZRCUwXH85FuayQAugvAzmoj9onqjLTDm8n5FLgaz91qC9dKufJKLsR4HdANiz2D4",
  "key15": "5WkVKsHxheqWG7HBKoKaCi3LaWVuiSx1x1Lqv8sUNpV3akz6r2UCCNtp1zhEfmZBqsxmRfxJn8rZyksM1zfX7ppe",
  "key16": "3DneGLQs3AJ3B4WkgKbNEJ1iWu41gdFBb52ZtGVHzagTwQqpkxbw3TjTQ59SD3jMLBV3D13hVsUtt5XEHtVbWoTK",
  "key17": "mnBrkR7VWr6YSZovomB7oTZHSSA3achaTCoVoUAHjHq4AeirpQFvQKJ2bpnBZw1hgsWkyen7DgSDacEmYz3Ftrw",
  "key18": "4BcKqt3ojwPK521Tu2H2FtVE9Y3ziAq9ssS7yjqrNbyq7yhGZ3KwdTx1uY33ZhaPKCW2hnNfyM3vpE5dFCiD96wo",
  "key19": "tcMgSB3b2qKkrcct8UcE6t5TCitxX4uvwXqvR9Rtpoa2CHHAyA39Hgg65eiJwbdpgAW6egewL6b6NWb2QCnQsCZ",
  "key20": "5PbQP6nvAoUY2Btw6MH7yQ7XY7GPVabHBPCfrN9pHeAtjX7MtFeqzx9FFbEfUmdxcCVkkcNzuofASq7mvhvfyL7N",
  "key21": "3QUsUhfAxkKuELABCruQ2rsn9r9bmxgXc3GWnq4Apc6YihoFuySTLLX1uDVuhTE6wckomQVHxGttpoARgMd6K2Ug",
  "key22": "5x2t8MmxtJzv5QwYepKbzx5G3PnTsZG2ptPuRHWdx7i8YMg4NLVhyLgQCcTH8s2KD3tPWCiYiSHpMUyyXA9oRfy",
  "key23": "jmr9QskFux5vcjQBth6FwKAfjWyVNxqrZK47AdxnmaNk1o9SbQXYQ5xsczYtDthrL3rJ9HDgd8Gx53Ps35Xn4Do",
  "key24": "4z8qQ33jbe5CvM3GiYmPkLxHFtiYS3v3VE7RP1pT3GVVfh3Esh2MhUvNjG56ZSWNTALxoxTLusMZJtU6b5moBn1G",
  "key25": "353QxmwFATZV1WQMYBoygDoHFVk61yN3mTUJg5mjrSsZJudZwk3NGNYNnppLnx3tbwR71uLJ3GXKuigvJESLFg59"
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
