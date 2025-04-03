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
    "39xAyrY9Ny4Ntu3mnuKDBFKEaUWs4pERq7vypiebw3XRcEzAR3DDqPWxrnxeK7JUwy8cbGmheXUMUZn1pwzjUZ5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vyBwZVZH6QAi7riLg8zYB94xrW4FxwUN3CXvrAA6e5azNFToqRhCvSc9DwfmtffBCQB9DKqfbf77reX1zCEY7hH",
  "key1": "3oD1Nh5ceVK2JxGCNQ9NmdAPEVdMiRWTQe974ZQ6kmVkXdD6DhgsrcFum6vXetN6ode3NJxjvYooU41Tz1KWS6Mb",
  "key2": "4UrRHDPVzaJYAK2RsRbPJEseH92fkVyugrVV5LC1p2XzwedqCshtHDZvxhzZdKjRmJLNhtqwD3fryNK6fvjnEcHx",
  "key3": "5eZvRiApUp9W9wAehpBkNPcPkQyk6RdXUoDigwo5JTBtazRseGmeHCnUc1tVKN2TVjjSxsYXXCrvkgCdTqNBxnaL",
  "key4": "5cmzsG9CpVDRZ4Jv7EMkQ3ZgLBNEeASQZwv1nqzVbXSUH8EY4anndGz4t4UHZb3pHn6PPcFHJ8GfTuG3eVVRJoaH",
  "key5": "33TunjiPuXubq3sMEK7RDRpWnoCrw6yR4W9mnS9dWYrW3t1NDS1eLMTwiGqZxDEQCeJH6wm3RBSGudpHB6g9ib3n",
  "key6": "3W4wsTpj1Jtt2Yes7qr7d1wpLYzMw5FNCaWGdXqo5cH8AubUkd6nRbr5FZxyQEZVjz1NCbmtayze1YsLE3my6tG8",
  "key7": "4sjX7yHNoUGDCNp8CQz1kKgswaZX8ByifdUNxfCercfr7L9cSCV2hp2sbyBovoMRoVqfPMAetQykzEXGUT4WY4ee",
  "key8": "2NPEHYEgytBizKTRyz25TZ59Fhi5EC5GRHFCfhPMTyzLrVXQGkA2kDQeuBEps6NF9P4deSMFPmFNFk55BFyo2P2h",
  "key9": "5jd7LMyeFptkrRUZMqoanhbxsXGMsQ3t58yPsMFSTsrQNqEb5ykMga4PTkfnL95HGAjattxGgAsQy2jLG9FTWe8p",
  "key10": "63Mh2CTiWz4y9fW4YfjcdxVTj3mwQwmYdhTyi7njLZEuDrYh7A5Za4rsVqqZ6LQFvZynLf7n3xxek3zzndxbtHfY",
  "key11": "2Jki9AEjfMsoYciUMKyj25cGBmtVB5D4oUFTC3JnCqqa4P1VfNR27mHQsaSrSznjWjmd9TTVChE14YQ8jfogAm2S",
  "key12": "3oBgeftAuESzeSr2FhDgVH7iCP8DztJ8ppcoNz4aFBuVhUqk24pdBSTb57LxGk8LTmPmUr9NYinwWvVmhjyJFQVo",
  "key13": "2mF41kbKBncLmjUb3ADYxU5R3VcMXuKWTTq55hM7cUzDoosG6ucQi2hv52xzu2uDDLCbjcxMfLsZorx1jsyPxgW8",
  "key14": "2MmQMepxK6RLrXVNMvm33VsAeuXvxEUqWWQKutu9FiGrpMBkLR65y1M3ESSegpixcnQi6xBxfridacc2r1ytLa5m",
  "key15": "3L8cMDSTuFsyBC3BC4TJMtvN6pvie2mkBN4w3vbVp7E5iLFccTySas89XRTJKPLHV1jv9i6shTGHaXas9jbmqYst",
  "key16": "25kFL31hGDg6kBcWWtxF2i9We4TutbtmqA5Pd37nPorTwp23n7oxE3Fs1YdNVvvPp8GX5M1mh35Ro8hf9nm8iEPE",
  "key17": "48in9xeu8VdG7h88Ls9naJQYr1XXxgZe2DfT79QVmCpLxAwzHfuJLwm2LosYBuSAEWehWMGa8x2XLzh9xAyFQRnf",
  "key18": "51P87WvjYyjS6ABxeibd9iVc9yVGNbjdRx4ew3EcohVVJdVrFTc4sVnd9EM7z15NwkwGrynEN7sC5S4NFpLwNPr4",
  "key19": "2z2X4rQo9er4MsfzutTTJVJd1sBGmhxJsCBg8Q7cjhJCEfwVWZcSV14Wtz8MCZfiN38zUM1y29AYMVswy65wnetF",
  "key20": "49Wa2WqMjU7HK8zYMJ5HWkmQtFQf468kYufurDYiwefXXarqRhtCAGMFBmav96GYkupQyPqdWgX47tH4ENmCmfUP",
  "key21": "225PkXsP23EGrkuahYiNJpgLtNMdKVGrsEEQwVDt3dGsnSavVuCgezsp1pW6ftJJ8RwW5GeExbBAmUUBFucL6bJa",
  "key22": "Qf4UW4RBa8Sdv6GZWxbuCU6cWD5YyjXJH1ZXW1QxwCizjWv88j2YENCg2NKfn3Ukpj9DZwkokCqBAkA8EPKq2hD",
  "key23": "57VcTpJ595kwAP8K4GfebqwfDXKstPQvGZJHckBA3AALbgB5MPVfTF5cgkYrMczEpoyqNYdjjyZobyUUEGEMoLLH",
  "key24": "4zRMd8CsXMMUFG5Ju7bF6g6XnMrLjPyNduaagUTzGHSuNsvCdrhDvFf6GHWAffWnYk3cNBe31QtddSrGFhaJvoNM",
  "key25": "2Np5FMHj1MNDLaFKDUrfPibESFfy5KmG2pC8DiGwG9mpPVPSVkbeBGtzhLvggJj6gLGRWj9GvBVNVTsTd36KArNt",
  "key26": "5umjmyqz322mCb1fdQbZ7eeytsHDpY256SoqswfSmnSKFjQgoFFJi8a428mxEDtKhzDhtfFRuRMy21gk1iqeWi6c",
  "key27": "3BXJhQnptacvd14rAhFuBT4wcjkDZUnPXVQr5g8KAeBgJv5VUNRT5TbXuSQpXcog4XRqBuR25pEa3oq8gV1mVb4G",
  "key28": "4GcZmRtpNeCp2GN3RQuSXBPF7wf2ScM2Ro6npWMtQ8k5QjrESMWsqgzohQdaQray3jXk4KLnCwcTP2vPjF49Kg4v",
  "key29": "2LV6Wp8T3R4XGYeBoYPN974bU9YcsUNUk3XWLo1mWmjmJZxGEgZTh3DH7Gui2iVh2B3PdVoC4SFuPT7F2MKK2EyM",
  "key30": "7DVe7JfBSqTCVTJ6WZhfDYgpYj9wiRKRMCLBwmKcs3rZTPrZob8R1pmXXoM2mFSLnuD23HTvrffmDxcPncU9Ued",
  "key31": "328Jars7SXhFPkKG4A5nmYUJS5QDMp6ZTF5ta72wmo7RqPgPWim2FBVHmYnYWnzJ6qBZ6cpR7n16dmH5UZoPum81",
  "key32": "5CMk6EUxW3sKK3KKzBhwqe3B9SqkrLjD949kWLZAMXGYYbJJqJntmQNu9kMj3kaL9fQRjiMg5NkFQfqYo5NHiam8",
  "key33": "4kVGEowm1WxRAEPp4wGEpM5ZXsxYtqBKC7Fw7okhuysbkHcfTbF7kZy8t94DPrNZQzUsPdzdrB89gmdBDtLkGyHT",
  "key34": "tJTnNM71RcNUARDmLAogB8iBqqcwpU54S6QVZKNtonnzki4QpSHEYuSWUAEcL4fK82bLUxtNJykv3W7NXH2Sz3X",
  "key35": "2xKpP79MQ5r6G5iQztg6VRc4VkAYrCVLCW7bM6AXVeWmfrRA2haMu6VrbUjErq3MvbtUc4bY4P85kzsZ4aevVqH2"
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
