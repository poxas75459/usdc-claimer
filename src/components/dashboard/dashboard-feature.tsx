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
    "4KUAXNki8GGF6HB12jA5qBbQjBt9e7ZZvs7cz2vzwN9zcGaAigQknvMgKEJ26m9UqvnUSzKWeDSESRCKUKNFxWVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtRUy3UVXdKwzmyqnbFFy56o32WAC2VGp3NssjfJuGpee1heMLKJaDzeCLgyXVbT7ysTq2v2ccATMS8FshqoQez",
  "key1": "3gBepZh3vYeZT1xm8hYDkumdocWX4kB3ezmPf9piwMtt77w2VHYRwXbyzVmpXXHUo1vx18XHHL6wAeZ9unDpQjgM",
  "key2": "4ob72tXQibJm4TKTZaL1QFNMrq82KWAYs7ugFQommWqScrKqvpWux5o9sB93dthJH6ArhBGbaJmFhn9oJoubA2Zd",
  "key3": "24hNNxTC4bA7jwRw3KdwPG8VDaJ4hWs98j71xrKYMYkVMEY9cph2Ni83LV4SU4mPJGhkoUW6s2zSZZSszke4t4Ho",
  "key4": "3xVaH68Jzejjf752gpiKjmEFrC6juMp7iHt2EktGwvZc34qDVYfbKUepxU7E9Fs5moHrkuSs8UMAWzrC4NudyqTH",
  "key5": "VuuLe1vrfVnYwVWfrkDnmNxiro5CLqguTKVk4aMUV58eKECsx1HBRZTsDdgGNsMFtUwEFGQLLAL4HVESzm52aKD",
  "key6": "51KtoQxFyiFE2UC27gYdvUicF1WtNuATMTq7bERC9ctFkLAEXnCDMMgRbVtomB9EWZg1f26cYhEZAuEqgK7tb9KA",
  "key7": "3atmPJZJ3ew2oLeDWPsWNuunpwAXa7ryqKa63AGho2sHgL3ak197T8FjRgratectHzkjNkYsL5967bqQkbrmvYwP",
  "key8": "4jAQtrPuHXDApQ84V2wYKH3aBEQ95nnrEFzwmm2QtRoRfT4cZbb55iDdNWaDiLWu5nMiAHnPFETdHzq7KR3pFZ3d",
  "key9": "2SYNS79QtdKg9LWpbrAcM4Bjvb5jk8xVRefQMVi41f2yhEWrgUwe1Yz5j7LUQ1ySrATRUWqY4Q6AWGnn1MXqKqS1",
  "key10": "4x38uN9KtxLQv9mRCrJfMNooJT7De9oTbEP7Zkc9GarKtwMV5En5EpVy7VDUFAKvoq7oPjZnCKtVo2rce8BGESDq",
  "key11": "5goqsGw8BsUX7sz8K4Tg55faZa77BLg4m2Xz3FQPyhkvDdGaehih3thZ6P18PmaRs8oRUVtBGhjTRrNRmaDCGJou",
  "key12": "2hDH5cnocFobsD5bQEq8kTD19QgHzYEwoiMAxvc2AcqiZxK8B5oZ2Wg87XcDCnMsHpfXY4kjQ7efcNGUYPeLR7Xm",
  "key13": "2bKnuossPuWZWsj8wnQiML6J6a9wthriG2qfmH69cuZyEvKozpJTS4zw5uBBrXNUw8pf2LHNAjn6nd4kFXsVaDcg",
  "key14": "oy3djNSft3zkPv5s8jrbpm46JzrHGVESbbuvzCQ4p4pz6CrFRoNQrmoJ7HjBLJcrhFut9xHXC4ETGJakf6hiiV7",
  "key15": "5yNURSxHzKQdDaK9mQ5U6ZS3qgNESFNP7cxbJF4TV2Q8vsjLqftGygxJk2BZJ1oQ2Grx2vZWAwamU9qE8aCuMQ5D",
  "key16": "57ppZBJ2pkZPYFPckuJ8mDre3nkwJXTcZSSuerbH5HvCT6DYFqjexk8QTNL9sfX78njRPqR2c12usWQySDPrYzaH",
  "key17": "HpgXmhc8JBGUNY2Gv9kq7GBfEWCHU37yaADPonbLUo3UUCWVzLsK6fqL3rmbegGJuJ2zjKGdLb8tLuAERPp4ZyN",
  "key18": "5hsxD1xP7zGRMEKfT2X4nZtBJiS26o3o8qsEn5JxHMznB5GsRHMDehPN19ezoaQMJSekVu9KSPG6AX6VaaoD1dwt",
  "key19": "2Yt5fogpvrvejwyRNcAJGJfN2M5QKMaomguzqpPiiHauzkD3dWRrGziZp89ZD66EdrAKQpYL6aQ7KvT31fq8mm7L",
  "key20": "4vfd9dn1gYUD7A6RXPM1bEn8exNeUXzQNqXdCFty7DtvmwoCpY6m3ZbLnGLYzZ8qm9dxiXniGAmNxJcVfcqBxFS5",
  "key21": "31sUgyHvhoVTHJ336qDb11gKs8MDKz2vriUwQHbXP2XwUgwFeuBsmQ57GjXsr7fALd5FyVy8dtrv3fWSiYiuJsBu",
  "key22": "3AL8W46mjPYh1uxMQkmoXzRjT4dueU6UDuhRQxUiSduZzT2tfMG14AjVPss7uCmrHkxi7JpHhv5eAWRJL9NuvTui",
  "key23": "3P7E6WF6vKy7XCEFjzdhfJHXg4Mo3RzgGMmLPmygUD687c8LY85cYvsyscXGCbbZBtwQ7Soep4FRtwSFojVNHvGd",
  "key24": "3tRanifXNchFf9WtJS5YSXnvm7c4ZpxEeQq4G5VCwjZBcvDuaJVRGupE2QwBWprhYHCy2LVKUvx8MZZNc1BoD17d",
  "key25": "rvNPNn8rQA1jgytcguCUUVPZP9oJmrGx7isBHFr6JdHnAvpwn45XHtS5EKztP3bi4QgrG1zvvVjstWY85cWL78t",
  "key26": "iKpS9zBpGoyWWqKXVrEfYPkdW4Z3FdJpnKwtRduMM8EUCEfRYzwPibkzQ4vnjHHgWJ2Bq9RSD73FH5H7MdQfWuV",
  "key27": "wdcAXQ3KFSAVBEXEFkh37tmuY5gT1Kq2cLpb3YL2oRdbNxV3rjQUBYA6N9WCWjwg5EMEoKtjrtvtX5C4a5RafRz",
  "key28": "5XM57tAgHsQk5iaqmaU8Zpoe6pJhBsmc5ykRPozphTP5zmzftVejokXdtJMvqwksnQsMGvGWzRS9DpQbnjEY5d3P",
  "key29": "5YeoW4jMBAhmTk4CXrer2YsNwLzryuUFJC3Qd7H7ZebKhQv6KPVbmm6kWtXQeVa6pYH1aRoBwHmRbWgz9o8NgXuq",
  "key30": "2PPhf4BVnnn9idk2DxyKQbPzeS6Kog9cdFWd25YKM8mT31zFmgSzgxrvb8T2f9LjcUoKaEZLsMhQTeNP7c723ZJT",
  "key31": "42HLyx84PrN3tFJNEZkbzVACCZyf5i6UMmwhaoYkskLr5S1iEzkRqG6GdqeKxMvQdTt88R4A7YG8vL2WQHJR7JRC",
  "key32": "JXogjXMPw8sPFcbA6Ew5MES6mrfBqDdf7r3ogYFrFui16ScU8msqbfApaErxaRXztNy2xTLsP9a2DLQjqPL4usc",
  "key33": "TEGa2dFHdNQiEj8PZmwRR6FPp9BURHurjpVQr3CXEnmnjUFRTB1jEeazATZJL6jUthNxmxuicTDqJDvyGKxYk72",
  "key34": "2v3jGyrPbUfKvi7v1oB15E3MM6rVS4KYCQpGs4vypPr4xwSjUqtZYE7f2fxeGDtBvHNA8z55D8TDnV4fMb8Day5",
  "key35": "3VgJ37cTXEnyBt6KNwcDvqMQKxQAYNXsY4V9JCPnSkMC9T2nvCPFnTMynEDLfsCXZeS2hWeySup9rdyxZTimHfwp",
  "key36": "3qpqxbxRPPzFm5zrJBKKXNm3kaJucrryuCkVgB4SQ9Bf3B5ycYECvNr1iYLKZKTAxTgXNo1iiTJvLPbziXp8K6cg",
  "key37": "2dHbgYAzLHMw2CdKMoqTJRMdvD6y1SSg9q7Fgar9aRjcPWP7jg4n2WDH4xBBchPB4WovZh84UbJhKN5AUNg8knCK",
  "key38": "2HKEdh3cm222aMEzCGSCcSbaAgWRo6d5nCxM646tmJ35CFBNH8Z769sipdhyBhrQiyvLKKazbjcoaK3Cpd8KUgvU",
  "key39": "4sN9GBBwyNfnWhFNUznBS5afwAKC6BeVZCHnk9nRrNwnbUWUhhFXeQuvfo8yxxy7yMhAeMucHGdUa31K4uxxCNc8",
  "key40": "3pKBFmyS4xbfBwBwXCcheJxqVYZaHiy4o13ZPECd6XyAwiv7LM7kna3oBVaFdykjJhWzv5AG27KsAKCM8fikLcVF",
  "key41": "5fMmZMwV23U2SHB6zoydurknGg39k722n4G84BQ16R4FfKbuUfs1nrnL2szxTkJUs1G9QqevWbbdaUmDqJvh1tZS",
  "key42": "4cfxScdacLygZDw8vndBb1Xi5UJr1AyNqN76b5Lkhynq5FPLmPqemv1h7KKgF8L72eLrKpEmh7WcvmfLhxq7ozkD",
  "key43": "2BrJ79qLHreprbBuB8F384mMBrkcXYhPdW3z21aLu37949WC8Eaa49x9WFdxMuK8ntxHXWZBRwQoBmySVcQZh6Sp",
  "key44": "45wfrY5iNm9e4eS1fEubuSNXsUco3hzf1LYc8D5xbd3PUdm31qbVhW6pnD21dGVcDXxiTq3c3ZE8sCdPY9fKQqmd"
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
