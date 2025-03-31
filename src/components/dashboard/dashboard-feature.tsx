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
    "5hLM4gEr47uGDWgGNVViDsSr3iuVp8FMqBTb5DoKMYF1MCdV73LScghTkj6qawv4SaGHJHvuubBF9qCkX5ypsSwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21LRpzrkhwh9LP3syyy83uYqHFTCuMDomEezPxmQqCzddc6tB27hmdk57YBeC3iXABwAQ7khi4WyWxRoBT2vQpDE",
  "key1": "5dif8aSA4hrTdJL4cr3i3nQ2qj32HciDnQgoun2jtPReXQjZWuvUPuLrtTnJwgYNdVs4Q6KXThQwTzyxHyA76SGW",
  "key2": "5EiYfE5tV2DJJ9EHG4D9q3vAmTypS68m3ug2xq156mLi1SrdCx83DWC4umUu8BuNZiquS9PAAg3WzrjMsZqVnhWe",
  "key3": "3DeuArZE1F8GpzZuf1GuLg6terwLb7KqqwaHydX4BHukY8tRoQpNbJ6CaY3uZbMKi1sV9F2RdSnh3QGvwYEVjVKu",
  "key4": "3vxRLuFuR22XQx4EisRBK9TCc4ZLGuB9odgpojrDerRAGitmeABS1u2GoUgzgz3ZsnaUKgNFuEXGvwvBTay63pHX",
  "key5": "vkEsHD4cB7DSAFoyw2RFQ9AeSTV2PHLiigLAYrSGV3JdBi1sgDpenYiBbfmFBUpCMu6QSGVhTtF74cBf3fkZYNb",
  "key6": "3SGPU7SsxDdGayfsw71CDdVXuun4zkCM2TgNaiA61qhUEcoUB4sVUNJKHg3wjKvvm4QdutSomNWKDcDerGqCReqo",
  "key7": "3uvq5i2jkayFXGdUSdWrwSnVbkWG3YBY1fdru6edMqYtJcGdZgEqnXvroVoNMBF6SFpmMCCYDyP3bRXhR3YXsboS",
  "key8": "3Lo1bc5rtj6koQyHN8BDPhh5RR3NPUFcTh3xAVYd6ooYqfmTSN2VNj9m89dz1tb1pVjBgre3iD7CJN7Zbwwok7Y2",
  "key9": "2GP3wNyhdBtMc8dGcPgWoccLMctqkrLrv4rUwDrhRVBkhYvx6DVPvdgkoP825EfM6zCNMR6LPaATCTXBPoFn4LFL",
  "key10": "hWEeQxPRWHVZg7QuVSixx35qEmtKN3jUimLdudbg2PXPiT7wke9eo3HaauVSSJMrtfzwphpmywwn6BpVFzNQxar",
  "key11": "4cY59w7MmM9CFkxmwTaqxA5NAauBKHth8o4zbCk9BvJAgGAkBE6yWsuVqPuqeyxNcAKLxy4PymFSMgNGVfr9U6mF",
  "key12": "2hvMJ3UPyghFvRgFw5S6QSjzWdb4tW81djkPXBSCaGZWBkNBxs7mwGJx8Fm7TNaHQHUcQr6P1QGKjLqATWLcVGFo",
  "key13": "4kh84sTk8Ajpm7kCRGi1Bf23bKeQ1n53ounb7tF3y3XmYHXckdQpGBdfk1xezGN8bX156xR9iw6ysHZxgerMyg1A",
  "key14": "wpviokDbmBEwS2te6kVKpQWxCxLDRQBzXJVKCjMcSXRvAczZ1PJM53ujkQ9BVHNtYgVNKENR8mCSRoasS6LMQrE",
  "key15": "2YJKYWjWycRfA7NF7XLiXFChzTZm6DpHMTbvFkyBPo1eNB9XwGsf8j6tJND8XfZdMCNi4rofL5DXsbAYkeQr8vdW",
  "key16": "jcyQZPnkzA6c37LFycMMo1vTzED3foqcpx7AUmqBka3mzqRYKZ3JCRB5w7iLpf8cgVTRqnWZjXNkzteBiEz6hhT",
  "key17": "3dhAdkpGivA2CHrnc8tVrckKZziHgSKgSAemRmd6AQPT4WWRCXukwWcMiSRZGyXcxZ3X2d18GdksvYn1E7muVVwL",
  "key18": "66MjLpB1pwo6HpqupqtLVyUMeoXyzJQUYwgNx7jNz5tfpGS1dTmS8o3q67HbL3Jx6K4UxmDsP9QtocyLZXF21tDw",
  "key19": "4Jvh4jknKGTUsZh9TZZ6aV1K7YvWNrboRDmMWRvy9vKdXFoZU4rtVpgTwH3WS8pCveg8JWWqDNNTAeSzzgdBeosv",
  "key20": "4Xqh64X2rCfitHQHRPAygF44gyWiBugkDgo6mvQahCGkM4pUjf2cpB5E3y6oMSbZZKvifobfaUEYmWJb3sjaYdD2",
  "key21": "4HZe9DH3ZXjDQpasJXvAvmGNk52WibXfEYFqcN16PVXgx5c6TJ61qe9VjKNNCHfseT6MoGRFo4R94N46S1VKobAa",
  "key22": "64GSEg3j2vmtDs9HJUUzGxndnLWeQikyCr7naUpzabuFF2khECvSFcFN6AkaXWKvw6FgTu88WwwbqKkRtVsJvFyo",
  "key23": "2fQR7ZbhcTZCaWhtExbXiG4z48ai7fJQevfAnaG4UZKez1XKyHnub44bkS1mq3w3iPP9prVHB2uo1wsVhuxYUbeW",
  "key24": "5F3vXDBVvC45cS8EZpNm54NtThS6J9oHzUBpLXDXa6oH5miG7NzHXqtFXNK7crmNNVSEPxEdkXJBXQBd4z1g7jCB",
  "key25": "5Q8QKxrdygXPMPa2F7vbVubgSAEi82x1CJPssgKgBzdTzGFvjXPXL5uGoEMw7gR45GHe16myUUMMqVm3Ktj546te",
  "key26": "45iXnrbsALkaGpU97V3JMxDCnwVJmjUF3zkBPRn3pC7AyhV41LJdgdDLwQe6qvd1j6KYGibNWmW1iYeCUtubNPbr",
  "key27": "5CHQpmTUQxWcpHekuoe8EpJGjX7zYAXebn1qhBBhuMY54LhUpiakDhDCvbRR7TVwGg1aUcVrafhvKTN7AFDHVzGq",
  "key28": "4vW8nS9cSNiZaN5xavDwgbQLzQFprHKrutVzwMm2tNP1BVQoaRfYPWhpRcqAfi5LBMaHgsYe6nUBKDAvtYMS54Dd",
  "key29": "4wyFUYPqTXyRSyVWgw7hL3ieGTcRkUSsgiYAtP79sT7mYNDXoJJsbUzheiNdrXcd1XmqHY8xtkT7axwQmGgciVop",
  "key30": "5ikSCRmB7MNrArem8bm2JHDwd5pXoeufBmqBi7DC7UAEwRgb1QKfuGuu7hM7woc81ptoXnt1hro2tE69keFkNuQb",
  "key31": "44by32L91KDWZDbeRNmyxrDRtkEjHdztdvdp5jnbaQr5EbTKMkfSxgh98x2Ye6zzKooMBJgXq4asr4gLq7VmjfXd",
  "key32": "RbWQ1mT7MuQBGh8pBQTm7eAPYPQa5NSob5GWYAdBjSSxoA9ciuk7yhPRP2EMtchHZF5hziA3mHBo3apYebAgaQ9",
  "key33": "8N6zUSLbNivm24WywJpwp4f1VXTrdCHQktxzUaaqTzPrXW6MVG2y6Jv9v6xsDggevy5tG57sUPVkgjjjRgnV7J3"
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
