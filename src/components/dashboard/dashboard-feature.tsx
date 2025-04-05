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
    "2i5RG8Dy1xLKrdkZTqreY1Xf4Qn3pZC55Ftu8c9i5STURVZopNQiF7AyspasvhBXwXQsnWUp1sSxPctkV8nXzPLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B8vgQ4abFkaJVPPddK47Uqoy3NJUiQxBiGQ8Dcc2QjmTLpvS9J85RP77afcoacnX6rQumYfnnvNEXFXP9tgZpug",
  "key1": "5HeuiaBvmECQZEtrnKtDotUR6LwwMYimq7BGQU3RMrW1jqh6pTiC3VNTGjT7nLnVFomD1aRCR3js7YNj6tZjZEn1",
  "key2": "5oNGfdKqNvdC97bAv6e1cVTKK3pJcP6GenYrYvgLqcr78bC631NtU8RkoaPHki9oENAamSWvy8bkuPPWzErLXywA",
  "key3": "56DuUmBNUrtZ7RQJCdTiYyDMEceLQ7KyoXRE9VCs65LeT9ptkvqg7EHyK4qHp1LvwD2xEf6F6qMb1X88KsBwAnAW",
  "key4": "3jR22KS4DhEd1waneS6DNBawB3pdBou7qjhuFUC2a83ShdyynaaCteDTXGyhqQweV5r47diJF1MyMx5RGH6noPQV",
  "key5": "3VJMK2YiS7jBgHC1AEnHtpshqSpvVmY5XJDeKvkFqPwWCs1PkRYV5LUGKvcLj4Rqic4UYYqPCA5sH9FbFLYsZbmf",
  "key6": "3Cbxni5CSY4wKqfSGowHSkZpdpF8yVhgnjxLsVcqJztHdiEnEUQnmmsAnMS8K4F21W6wSfdhmjpdTz91eLiEVhJV",
  "key7": "3mwfbm2ZUnibmrfpEHM3VRqNJXgqDuodULPNXFogVsgjTsogEWP6ymc5fY48UXBH266wrpZ1CzYy5bNp1FGH7WNx",
  "key8": "XZMRsf6qdtiZk5V6wc8J2wm4z5x7LA6w6pyqZ5SE3PTvFapdZ4EcuhfxnNHytmH5oyTwp1WzJaaboMxqETm5rzA",
  "key9": "4cFjdiPborxBi1SKxxg7Q5XXtSqXAyc2c3H9itV5Lgaku6eQtWtJfjqPB49jgpP12ybmniktJnyRE5CNbtoDDLD9",
  "key10": "sXw4GWZRMd1nL7bP8mtds9MguZqbnYHDFFetqBjuNnTmY5wirUWLjVkgLtHX4t4oRnzYZ1VJHHtq58hHVx1x6Ca",
  "key11": "4VEieiQkUww7MPo2kwHqhY39dTbttA9QQ6K6KkD7DyUH8zYoPrgR6maCBmJ9XDtHrcn6xf3m2mvVyv1UVNN5WF1b",
  "key12": "VPa83x7DLhhhuCbY2PdW74jbf4TX1FQpkcr4ftmjpBX5mWFsij4fMBrhkP2jnAQ8pPETQFE6UhLZDHzPktgZMJY",
  "key13": "29aRySYRH74qcnfrdizxXxqbG6JszcL1gs9j77kuAM4X9UM1jjeAUKJrzQmaoymeLZEjqYw8MrdT6cJBBr38zj3y",
  "key14": "3JGhdfpmzBDT8EucqcHxLuPqRxqcrNwsya4eNDUt6dKrMyoSXMTjcVzZxhNo9RokvDUdnfM2iJYyBNsiyTQXxH5M",
  "key15": "3Ap44M6nNZvS8PVWwCBrSuzoiaAV71jZnbFoCPAqokr639m5oXnmMpF878bGgd6WC2CrjiRxtHeU1EjLLir5pVkP",
  "key16": "5r1MvwqZpcKJYSVQJhgUdnsyzGWBfyYdppbQb11469dFrR4q39CNjSmm68TkrBQmPgkv2yJE7hZtrN9NHMrf5EfM",
  "key17": "3yygmZCpRtdDNGs9gJBtC8pLn3oaKkYTf7xbimAcR6ZdN8Am6wJNg9PyDB1pxYY69gsKRPCMVHz8cV2s8y4kZHu3",
  "key18": "3xNXTKGfVu4xhGJWx7AJq3dT5DbwWhz2EnuS8o62V2kkPez4P76te2TMRWUi67qjGBMPZeMCB7rfUPAVPW2vMwE9",
  "key19": "4kbfcLPNq7C7eMXUdHMa5Anzg76DVoPihWy6RTtWc1xWTDZpmiRZwzU5BJgwEzEU7HqXbuiMu1k2xeyDiYsZBoJW",
  "key20": "d4eBcdAF1Fj7AxqXK1rCjcdQ9SnY3q3ov8Qj7Gadxr4a4AGLCy4bzbEPXBv3M6ygsC26Fqx7PmKpQfzUemSwoJF",
  "key21": "2fm4hUt6J7EELqFSeqGKjfKYbB2G41TRLQjeUX5BaKpCF7Sm5svmaxFhGhrh2TuCvSSV6vUC3kTWqdMTMoeaP681",
  "key22": "63g1E841WJVJf1RU6vZHL2bhuKnGPVfDYkA3usiAQZuY1ewQCoGSghrzNoQ3pxx2iTucFHJRVYgZu7Cnzw6n48aR",
  "key23": "38qQKmi7pjwMYQJXGrgRQdFe6Xsm5xAK4zX1h1WwYnvearTXYZ4vw316Bs5VswxtNEbQ4aaPPXPvyWi4SWEiF64F",
  "key24": "2ZbSPiCW9A9sX3WGjhBXv3Fr3k9pTxWjBRdPSrVVGhGuddbRtvRbYCBH5MU53mvZ9JmacUL15VZ2WyoDpiJskdNa",
  "key25": "wNcZy3RLFBUXAK4LAzcXRs4QQbi4SxZoUBdWKYZQUYms6y48636SBqt1uc6eZ7eypLJm8EP5pcQmdDzX2CUxwWU",
  "key26": "3DnJD3Xg58VeeTy3TaRrv6gMvqHXPx2uo1p3biB9KLPGFrvxgcXRuqDH4pQAzb8EnjF3TihtELwWbqsnzBpBRZzi",
  "key27": "4ik6n4xinomGEUux41KHKFgy9aRorCnHBC4mFPGd6VJMRRhFNJdmW8z6KFdVZC8aRn6hSTx18FDeWdyLx5akRtV2",
  "key28": "2PCX84yrbyjpoKpYLnSHeuBnsqGeU5NgKhPrmdsEVhKSqtvzxqJExkycShVVWkgGrEpbq5T5Sf7gqhhksTWkG9iH",
  "key29": "3vAC2PjgziWwgt4dwaDCiRCDPDhF9VP2HpRdeHrDN539VK6wS6u2NZMwiofrdi3yt5RgQp2tHwz6xj9ohcStPYBC",
  "key30": "mVprWpiyvEGymiVr8rk9Nh9GPL6oDJfLrnpPpAjvkpAiCYiWgbwbicfgifuNFNDtBMrhH5bAd5UBugVJLuSJR7V",
  "key31": "3hvHLZ2m9M5CMAejM1aWby8wMm9s6Y2BVBJDFYb3mbCFYoqGkfBbyRwGyTLvXQA94RQGjz4w6zxkA6UFgWwcxCci",
  "key32": "5EFxadzUt4aGHiQ59R3Dzsbd8guNcidhpuKbgbs3n3csrq5k7TPnFMBSK4YEy2mNmeSeWD2TGfW6bqWPfAE71fuc",
  "key33": "2KJMyxjwhshz5d2AMbMhEkRWgTNTCp6dueaA6x8u1XR8k1Q5WoDvLrXmQc4NnPaAahFNko5ZYoJss7PeNeCZMN3u",
  "key34": "4Ciyp1phwcubXi78sDjA81h2px7W7p7G7HDygK6wevMXfCZWHkTeFrfK6uDTGeVSuqZyPVy1AndEJXRqv1Gv1Qaj",
  "key35": "5FghdVEWHVvrjG5mjPC2DZqGRL3meMCdDm6HkypJ9zsDst6vfMQ3w8aknuQgDz6CqBP2TwH6pqqanDqYoQSYg7Ky",
  "key36": "3AXCkFzRqUHASgNs6AoUYRC4A7KQHnUXoMSsaVzwk3C6f38Z7rAVxLCx44XAcPJCxDxaUthmLBBKXyM4hw3tDFMQ",
  "key37": "5hFcH2TaRkvJHLgPgSdwouFKv8hTSwTZ2xMxaeB9T3XVkFThCcvsrFSKMwb2Zj9ZWPRKp3uYMWMZDciir3otPyP6",
  "key38": "3btD3TBVgsTba4M5K1LeypaCRfSSBRbcAVhGQNbWa1fBZWV7rNVCkRqjcYqkqGc2qDeYzTeT7f5nJYWENiqb2MMq",
  "key39": "5pd5fVjyCxrBUuh8miQN7ZH7b6ngXyBZbZHPxK8znsXWunzsKYWAP13GhGak4XmPSPb9aQgVn1ezaPprRwH4EH3e",
  "key40": "2o4CDvC2X12EPtF7VEiTMkLQLYR1F11dAXDzXKpS4FiEa2XbPgURLMtSbqat2P1N7XJTVjoAA8jaL2fDhPGgkoFb",
  "key41": "5TPEyMkYA5KdER7XhKtwzLVpfipci9kJmPUFwiXL6HagsX2CT3Zuw7JBQ941KPgK5rznHR1MuSrzb1iEbkptq4bB",
  "key42": "3HjfkmuVUX1FGVFoBXio34izok38QijnNgvLLEAYztmyy6DUNc3DgkfX7mRvw8AytneQsBPCTMz2M8ZMiWFgQrAQ",
  "key43": "2vDJmGYfXW6GLTtvfBswAFCRr6MngUtPiyzdj7RL1MbaCVEvaCp7j6HpjsoheccWirC51RRUEycbhYb8gtyEhmX",
  "key44": "C7DTUUzar1P624nDeWkVoeuc2Hie9tv9dJK1mJ2TSjEgT9GginBtopJHi7kwkeGKvJqmZNGUgzUD3MDR5AUyQ4p",
  "key45": "1DwRe31uSWPdnR6NKsTSoc31nuZUhAcEkEJMkVTXSmLtn6nFAWex8nZSMDXrW5ypezcjv6LEF9iLkjvWKxMN94B",
  "key46": "2oxiF4eJHTHqSSVWmeJMbjojYRUJbX8pprP8ZpB4GA6bKeSDVGSjt5EPovYkCR4At1H3XuDSti1RSN8Ah8aPRuZs",
  "key47": "5Ki7FTrxsS24M8uNP66sbSw5Lk1R1LXzmVVtobJCgcHqF4S9ctb2Jp8pKq7Yj1XG52rwBwwXJGu7UviX9GcjnNX2",
  "key48": "3YkNYjt3rtJnCseYTXiuhfGjLMPHLjE5fZhLCJrQFB8m8mEHjqNZmybzJS7ipLJtW1Ds8RWR4wSxwPQ5j3hQG4nV",
  "key49": "2jdBJmPeDt5Z46n4orA1s23x52oDsJQ16orj29R62DCd9owWUygU8aoLtwZcY5gC26u4aCiLincUiKqoYoG1qhh5"
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
