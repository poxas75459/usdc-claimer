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
    "5CQLb9h9nqU9MZPVbUJVkraPJa3UsVYrApwxNmEsM7MA1UCMiLM887dScfW8TFbomZ2n3P64xFrRWmjJKn7Zqy3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAbNjgt1633ZdYPrzAezdWBJWEDbJjHuZsJcxksiJXLiNfi7YMxDm1AUbSLdWUnnz1cKwXwtK9ix6YH3kmZ4fK9",
  "key1": "2Cz5zH4zsJMyrGtCnN618UGasp6hFUbV1HVQtXs1BiULLm2rPjZnQSRnr6RA5qnXXtuYrP1M1wsVNoyH9QXNhukU",
  "key2": "2pFaZnx3kHmaeuayCUhtPxTDhGPPdiV3pjTJ9yJZNSUXUNU9ADo7Hzi8Cr4xXKN5TuxgXZQi7Ys6GK6rDYTGnvSo",
  "key3": "3JeWW9EogpRAx5VUzVwwBF3jqEkQyKUQYZNseBC2eTbPqF97Zfy8ZNwz4hp5uftrFEVDEVnH36HXMJnRajm37RtK",
  "key4": "2TLxFoPKRnRP2gjcvpR1VMEnie7PtXJFEyJjuZ6zWZocCu4WPZAoGSrKGutQ5sZq18vtb23M4M6LrHk36ywwqVHC",
  "key5": "5fMAA5bZVDWUVYDxdTStGPa5mb3FwcCemc7MwqW845kyjjU6vaqprVSN44pWNygRdaQwdzgT3QuRPsqnUMTMSZPf",
  "key6": "9cE3h6FNV7QMr1gZBfdNHockM44whWKYTG1L3ieLgGCz3uG6xDVj3r6sfN1GfTRm6j1TFWDAY7AA55YWD5piQSP",
  "key7": "2x1e9BJKdSusFTKt5vn93dBSBbXGU4uA95PzzELerTpjM5JCdjeasnWzJVegQoUrypaG1vHPu3ND1Rn1qWXpU9To",
  "key8": "65Et7VLcVpj7jUxXmuczXrmVH6PWrydioUBgnhgSiQXqpwFjnAupC6zop6RJBGCsE9CzMrtbX8RFBYCdg2WWogsu",
  "key9": "2mxp9hedufT4ohijagjdyYiCW7dgUB8jmJanJRU2xH7j9H3Qkbg6e8DkX8QToVcN9eC7BRGtbSYLChPbPDZSBSKj",
  "key10": "3kxp5XUZD3e35o1LRgPRD8Q1k5X3j1c5p57JuieBYUscsrwZZ1gV5vScVJL26Zt8q6T8nAzrHygJvHwzf4tzC11n",
  "key11": "tyHY2eMjoK6vLjotQLoNqRk4PZccfURzYeoqsJ4wMRPZiVyqvuT2WRngsx3NB1JzRnDA8pchuRT2TSazm72qNAV",
  "key12": "5eFoxnc1wKgG2LXZskiYgr3Yzc5Hrf6X3j2KZ2jcePzLJx2cLAfRb528dP6X9r38q1gubkbTJez9US1yFYzmqmUC",
  "key13": "3Tg7TQH75W8EQg6k1jFySp8L6bfEPiTxacwD3YrBgPS7dwhyjVxu8cVVJ6ayV1XjE4SAbtBUVTTk5ng57SpFCMeB",
  "key14": "2LDEjcpMRiT23rwXZSqPLBgzxSCaVj9LH4N5A9b5YudvAj4tzbqxa2FPFz48MBo73X5HU2YnvkSXdDKhK4QRApzg",
  "key15": "2dzupDdtj4moHd1ReKAfnxPgroMEsAmHgrU1bVNsKjwgLpxxBNqYijc2KUNMrhz7tvHRyQudCDBwnLof1dWhbtKp",
  "key16": "4yHJEboBSzpqkEyizHxxe2VkHBtrTpfsQcyA1Td8TwN9CHDwtKnWz6UzeiCMe8hmgyYoPSKR4m3ArTiiKip4AEN3",
  "key17": "5Yu5kfCTwr9hfmsmkMwuXGT1vfBHhS1ox8cttr6dVBE6sd2k4Aiuav5TyzaafptfyeT5LxziLudmWFGbsuVnxTQZ",
  "key18": "4fP95x8CAnJDwWDEZFxy7FFL4wab9XRpHGh6WK6XCC7eNHdQEbw7KdVbdCb2KPvNFEe9PbuC9N9piAcgDy6rX1Nn",
  "key19": "4P6LE4k4NbNRPDfPD46hcf9e5qDBZqVACuwEn7PC6ncFcv5A8VZ8mMq2c4CFgKHHMj3dKYwawKYDG8MNjby9nWpZ",
  "key20": "3LEYJppseFQtmBWuAskZr3PNLsJkweT4gBDt5Q1HDRx4AxUbLH3SLhzitarrDA31tzKMGkwFdFZWQYgsyvVLnJFB",
  "key21": "h4zVhg18LwfXLcSyYb7x6GBWR7TsNWsL3vGYGdGxDXsLa46718pvSZiMbS3rbWW6ZbS8nb3xsdyS98msFvLcvqJ",
  "key22": "4YkNeewvL6XVVpb11YHC6uEKy1SC2ZNKr8nKU8sENb8PSXuG7qPokVsskTtyGjaD6rHhM17mzSqE7UJbhPNQzRpG",
  "key23": "48Arwin6q8BeX1himBjduXFZBpQqh6Vc6911acQGotfp29GV3VgUdGGUABkLAZSxuqZxyiNvwi9RkkXxtwp7KEPg",
  "key24": "5iorbjz9hsqG5cdKmPJSpRaeUiCHt5ECfNv2GZfAgg4SeHinUAyFv3QHWX8GkpnPtdc8HNBGAzjzzCgBSf2PwUZE",
  "key25": "QmXWPKAHJJyLmMHVrCJqPkcKf6LpXzS5HVhSkBT3s1CkvLMtTjuDJ2fiQZvwLo8Dqc7XSfc1JfwYtPcVguuLHEZ",
  "key26": "21WWU24Lmf9DLQnhYtAFHZc57F1M7ivmt14QiqxmdvgZxfj9G4zQz7Qpq9AAQWz9GTBuY9GMvBMnMyv37AWuPfMF",
  "key27": "49CsVhWR6YqaP6ekEgMcie1C4hPYwXSBHh6Tqey3pH74iRwjYqMEVur9Xd6Zk4ZhKPeCCFQdSCRArfkv3TGfGNWY",
  "key28": "2f7J9ugk6bYhLzfuGrsVKE8nKTi8hkkKKMuXMUxowGQF4FeL3YxuxTjknEfJ1dGQCALJwfT1po5UYohBRfAAP6np",
  "key29": "8FhsUBX1KgR49scCwDsjrV89yCUUtaccjw54skp5pn99QcX2WdbD5wTmFUU2SPkXHCwXBykzTAARNBStpdKmHTy",
  "key30": "Ve8CSe5LB1wjrQcJm8t8FpAf1y78SvYQBQ3tGKJnVCERRYjpSMF57CQFNQUNo1hFrhZh1faKyjZvoKhnqndbwig"
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
