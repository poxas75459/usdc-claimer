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
    "5hVzQd8VVLXcrtPBcQ7J8She24VhdkLWnxZNktUtZiPrD6aNs6P5Q3bfuTD4WSfSntGtRRZ2CcUxxMjG2iWVmCMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LRFvteGgi5g3kiwS4UwgyfgJ4MspwcN9tV8e4RYFH5uQQ8tNTgJB57uKi9EpHwN4edWjmipmxno7Ab6Fc3TYYu",
  "key1": "4ULr7hmt3vgW5zLv3LcfBXMLEGK6BP7mFEhKkcpzTKemyA5XNvu4z25eKiCZgJGghBuY2sb6CWRH5k4UnEP4Pyb9",
  "key2": "3MmdpFRwK3yc69UchR9xFsEgJHCttph1ppmEUFE9K8sz8jvai8i4M6pGvmzvBF3Ue6QauT4WpQ53mcKfw8Ypu3do",
  "key3": "3wVfR2caJ8U9A1hss9kpwnrozCLBxoBgw9k5x4muhmiMxfx8oCfAYEs5y2RNZFZLQcuU35z2TtQ4pNDigs4yD6z6",
  "key4": "eUwcfGhkTJ679fH7pHV3E2ovpXpF6kFFDhkoYgSeDbA4LMGauMEC4pvfhgJrgvPjRkdzMwX2gffqiFG7dhpNRDn",
  "key5": "2t8nwqRMRMNRYrtiJuuw1b4pqF9naPrpdCEupdVe7FMaHRdBtHKc2gfEQoH5ErpCFGCyso2Uh5ACNpm22nLgpzC6",
  "key6": "5eFTojbxvbAB9ucaL14GowJgULGm8z3PNR6HaLEZUGQeCZxdviRoDVaSQxSacP83mqGqymmiXxr2183xzgqYVXUs",
  "key7": "1jNR5FaskLf8STj1UhSzaw921GeMggp4ZHq7ATTenfCuR1yQihBYAXprsEQnKXdm77bUacHSpMBgLzbJdeiKpi5",
  "key8": "2NWnoc9kYxhGwxqDoDj18a4GDeQJAM3ZfHnNehy3zdCCsbfdM1mgjzNd2k7M6ydsyFRLNV1qWxkFQD6yk4n8yB4s",
  "key9": "v5TkywerV9DvFZmwipgcVyCShJkV5gK5z1RPXQ5LmrzoD5qtYfhTfvu2uuyjAhHpNsYinqD3EM2dZvkKmjYfJgU",
  "key10": "SdRmgPfJkattWBrHzQcwiacwzcbSjSvC8Je2cdmkgAUbTDiEgtSzx95GvxM3yA65LWTo6YHCybDxVX9MBsGR7Vk",
  "key11": "res4Av8bC6K5oKjJcSnKQNe5rqSUu2nxmYqcLVz3fGY4DEiUc97yU9BQsr9DnpmEMds1U7VSmKzosJUffAbX6xs",
  "key12": "3fpmwUCxH2GBVipzoYZ5Zp4AsfgZBWo1BcDdjPAheqAJkrZ3DUhtzoHwGy83Z9cNvuRVMwt2yCYbSrtasH5a3Eo5",
  "key13": "5pAmxqUQjszr3ARDFsrjRfx7PWLn1rVQTrGi1wsfmfpQhT5g39PSP3Mz1SpUvDxfJ5F8jKvnAUzAJ45KXJNgwkSv",
  "key14": "24jvgq95jaWGxZbDSMwRHgngQCDjRfX43ZoYPEQqbzE99xJpSh2Q3vtTbapE3YFKVcpMXVK8RyJwW6HsHncHsP4K",
  "key15": "5mVu3wbRabBK7T6feYwYXrWn5BayAVkwZvNArcoJiVftzSCDU9ZMghXYwt5qqx6RPjx4QgoqrqUa5qihtf3q5rs",
  "key16": "4kdvRatbRzRc6qd4M1gdkmvButxQdsoKvZapFEC2gNKQJ6gWk1Cc432B1eNDkaPa2tV48i5xwLzMPtDdj4kDGbUi",
  "key17": "36JASAjiKGqnAizoUrM75qGU92xszyuySTnAJG4fL6G3jmEi6kmwfxw4uVmbeqZVLhuLXufVw5bEEGziFhMPxwem",
  "key18": "2Uszh5mn2vubAwBoB58CUKi5YTdkJbqz1JyuQf93o1u8TEEmSCLQ79PSSaiLzVWPdQrcMk4S2gjjgDCDyupxk484",
  "key19": "4uUm7KX8jisfaKfPkCYuB6kT41NCDd41Yo6NKDTSoyrvHG95pj2VtsfcaL3AVMV9MHfUwJ1RHTjoXZAabFb5NjLb",
  "key20": "wKSwHTCRHeyoaMzhaC1xViFDwDXorJgMrQfqcBMimsjDW7jSMaaXVnnZgo8MigNu45eAQb3GSELziBTAnbivMJv",
  "key21": "2jRR1dDo9jAxd4sp1FzpjqR4pkXiJM7au2mMqTMfXkVPMAo8emwkuWp3hhTrbNSeza3z978ZppZgwmmwSeyK19aa",
  "key22": "2ro4KGq6DvzfkXknPWS9WusjmAYjYmJEany2eHMXzFUnt4RjnSmm8ghzML3wwGUSkkWDyBaD1z9cpLJ2mtqhbJFA",
  "key23": "5UaVuJNn6smq9ZsNmLa4cLn5dBCjtZSR6uCM1geos9xmqfUXEzt5E5rVy7iunDtmiJyYgQmVaiU1oHPQsqaMd8Ny",
  "key24": "2sAXEuBFJzAy95NA84N1ieViRSdTFaeJ71WZ6tgp76nTYaAKdasCy4hhtoo38ScdNd5ZG1kDmS6k1sd7i7MCrWG5",
  "key25": "2DokpqwP4Ew5uptcBbyt8H9i8fe7SYRCuJ8gSnQh8XxJSm1us31rX1Z7Ri3wHvsa7yCewvE2kNpwwCLoXGkpLNNj",
  "key26": "3BawvMNGbiEKEqH6F1kCdKc8EZ192bRsDmMeC34gzcuMDLu3awEAP8HmfhHLfyqAkxP2VPtqEBTEUcXgqUDyTeRm",
  "key27": "3Hbf456roMNavVsktGd3kgq9YpXiF1J2D1XDnzgfSeL1jXuYu2xadE36FXTYuosHY7jD9yE2AECHGHDYRRmewc1C",
  "key28": "2usXfucdxsQ2CBpVAtDuZuTnGPNEQbqZ3qeh4ekMKxMdLfSE9bbN4A7RrbGu5NdULFP23kTrh3RtY2NJNYdw8MMr",
  "key29": "NwRToK76D1LNRcCTPBuyuyMURNsbfX6F2983mR18V28Au2uped5HcEbhWvEzLK21m4NH8yErbgkVc8ZwFvrxBB2",
  "key30": "3QiNpGfMZvxL6crdyX2e9N9gkKvejjV15awxCU31brPvVHSEzfiWLQPv5ewXL1A7J3AwRf3jC1ExqWkNayediDM6",
  "key31": "2bmfJ6U8kFYxKicxP2eKUtXNY4yAFs4CNSksTwxsGhJ994DDXKF67DCGeMk8m81r4EQx86vBZGLMA2dJjmJLbQRs",
  "key32": "4oKQY6r2aqt57W9ppWLYXMiWGupWicz4z6oGyWNkok37rgaZp9kB8z8RZHwHS2LpWLcrWtqqpygSZh4abLCnLr2q",
  "key33": "V5VkoEWQCoFQC6PgNverSsiK4a9bVxNvNYGFFN92T8hvZusN4WqbpTVQ6K6xS3HNVKXej7YRPoVG41tKN9oRNRK"
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
