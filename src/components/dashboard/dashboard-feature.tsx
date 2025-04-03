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
    "5sQm8Hbke4rxfTuqKFduJZK1fk9EBnuRoATTK4XKvhhRCntzZ7tdS16RGRisDpyxZoqPdc5SWdLVsPMKZdQyw2ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KvUufBcgxUdPAbdSCQdP6bso6XG7HL9ZRmUcDqAnmVg8qtcqnT7TKEhAHJiNQQQ3x95Q6mYzrLJydqhseoxqwFT",
  "key1": "3hZbWXm9n5bcFVm7U1cSCaLgKJdpV2VubafU8iLjFEmhLLxiucjHXaG4crbLR99QLswb9dyfzghMwPxXB6TLMWgV",
  "key2": "QgyvyfwqgEHk5krqL5qrJtjoVjK5s4ASzF4N8DP94AWRA5bYoEVqmPbMdHmeR5b6SZ8RfDrdRe2Lza2nPoYUPLi",
  "key3": "2s1xUdoec4JUikcyJYrRVLnBeaYHtxwpiPmWp5megqP4i2EBidrecjrXREZZHdHCeBCWtmcjKf773712PYiNabdC",
  "key4": "tVfD5QC84716ci9LeN6teE18nsZhcnGCeTTg54h4tNVcU8SVA1jsUeDvSkFkPhjVhgRJ2kGZ8xWHfnCgMHppgpE",
  "key5": "2Nk47BEUPUsRGQhLFxjkjvb4GP7nMcxVT1GYYriB3bMYVzgDGUoQzH376Wpneo2A4vhaBUSsFuP653NGpmMjzmM4",
  "key6": "4txQPeGpfgo7YQU1KSNfUJWZrZudZZJe4gFX6dQncLieY2Dxp3ocJ7CKRcDD8GtURXkdq9xyoJJxWigWYqXAKJ8s",
  "key7": "28ueqqjr3NyY7nBsvAACyinqjCCijMRTobBgK1o3KgUR6pTEFKQ1VuhoeF9Gy1USsjTPs5caNkFyA7ujBp8dzhKo",
  "key8": "4VD3k2NAcz7wkdBXxzJbVVE8hHX3LsUhimcnCeYx7CituiChGtvbUTgQSCjF5ZfZobmRDnyJ9vbp8xwczXGzEYfv",
  "key9": "25iEUt9m2WCz15hc7HQyCDSgskAnNLTcppCKhnrkHN63fr82DhAM38p2S79Lm7KaTE6enohoDgNgC4xpnYbNgH91",
  "key10": "3ugdY6BeZC5qyFkm4vp3MYiVfGSizi4hPJ3Ln3XaWfxJMYLfuZrvTDF1UXMN7Z5Lzw8NZbyW5eoM4Wqx78kEi6DH",
  "key11": "4GhKhVYgsCq87b6od94sWQw8iqCPDnRVhwRcEBq5PpztunzSNvx2Q6KPWnAFQjQ1SvCv4vVXU1XtwJVBPfFugWMY",
  "key12": "5ZQhxr8tVG4hGobSmFoeaxVYpyeMhRayZJDjgqFcZPBPSBfdTFGtBb84wVy7CiNEifQ6dkJS1wYUVfgYLFncbaiw",
  "key13": "4nftLGzQetmvnkk2AF3jABbyrvcXNk5QAt79AfmQ1LdRJVLLs2Rt8Fn5o2PYuasKeSQmzfQDNMTY13RMrVBspyDc",
  "key14": "s3Hf8taX1YyWX97dhvdLNdYkemP52NjtzPVH5KS2RLnsVEjkm5SqjtTxbaJojx2oxm7mJdoxJhWcYfNzFMaFFgQ",
  "key15": "5EBeqvPMtWvkFLSgyHdvrhAbq2JGiDkNKEBVG9fPf2CSMuoAUd2oainrtATE4Wimo3ySiH6Ln4stZie8vNDq92QA",
  "key16": "5MQTFxsN5LBSnR4nBTy5GaxYt749nbjvmhVcE7CjYmXt78XqCyUPzLEdKeCxaM3AYHXgTazWxbgoubKikx7CBwkt",
  "key17": "4Hh1X3sxZksxXsWycxgm3qkJkaPQbdRbMqaCf4poqrHDKdcgaWC15euWDcqghh1GarPCF1zBF2paudCJYXHtkbrq",
  "key18": "sAFHHnEPHbR6iUtasfMfjbKqU4k5NDUrMitCYx9d1Caz3K1UhHT3tRfNv63sN4qjXcbBrKLGemmLBNwxtrqCuLa",
  "key19": "3jK7tQqAXMobEjpyGZxifY3iAX5Aiva4aaeJquyiR6YSTDavLCNLQCx72JL3D9XE8rwmwphdkVQSwJ5cZ3oxpgkq",
  "key20": "2aW4pF5T6ZwrCF8RwaH1BeLMmxGSjiVJPqhijTMUMGge5WowstqCFtcsMX2CPnruwPuLq86BYJnvcLaFzJxLThke",
  "key21": "2eKK6Ag3nbPSYERJvxwhASB7jw5nsopAZX8hiz1QYsG4YLpN7PYbKi1bUFGpZsCw6CjAfGTNcjxK7VMXYR4kwFgr",
  "key22": "sE4akHYsVZfTQkAWQHHoh524NKWqqm4K4Hzyrc2EkceutvTLhGddNyFWSSRp36y515rmSswVxXJVYieT2XtYyZB",
  "key23": "4RPpACD5mvb9GoQbWcJUEmy18CuA8mccuE9q36sARSoJdoZqYqdNtRmzkoaybcGAHwqhRdu6mM2fbEuEBnUHcQaJ",
  "key24": "4Qw3u7jFBLBwiXAUxoj92Q8soaUN3S9XV7m5aTSCHMs4FFZFBTqt5mmrKqSUypTW8DHuj9AjkywQo5CQyijjXS4V",
  "key25": "2VQaTtbQeLxbzmqeCAAxUtJFnhGfQ82ZmzbwvHoPeTJrf5SxRLTNQkp8xRtKjTq4XBYfuunDg1MvpnFjoBrYzgik",
  "key26": "3HnLsyx2N1nt9Gd8uJEK1ysAuMix1prdgSKKztLRnSk6AVsiSdTaMH6eBHvWvgs5atj9GtFcgk6XWY3SVkYWVp7r",
  "key27": "DdPTiqRS7fhZzvC8cGWNUH3emfwguVFvaLHr3sVeZ2aTzV1BpbuHVGchAFy8PvgePG45vGq9bvv7FjnbvNqrhNL",
  "key28": "5BXzYRjkWvrSP7mmgjkJrjNjKYywDXxwSuUYGXDzn3Tc8omrUqZioLnhpMePc7BjtVVWDHPijkEDmYaD8ZwA9E9y",
  "key29": "52EWG2HKnmTxcJn5tm9hFcKHLbFK5yJ41sRG9f41RXyU2p3KKogfngug8xKwhZFvejpHhDHuQpxyVEtHUwWy4Bnb",
  "key30": "47wEDRWfuH53Jj2ycD1ALMHWUm3nX4HJFko9nCFm6CzzWAJJDBuFeVhK32hZzjHoc85aU8idTQpWkvpPaHqAaYuy",
  "key31": "63WfW5SrBnfvZ1x57cLuGMoztYSppp8rioEDXRHb55bNY9vnykhSgZVMzBzASJEKoxLTQEs24C6jZ5HwehQiRUPW",
  "key32": "2LgiEobneGBhE8bjbSJyujHjVZHFBNWKGJQxSFYepbnwiqBmpCPtBgAvQgMg8oQ1ecs7mZJ1zRu5ooD7pwxQPrJA",
  "key33": "BrP8yykeBAHDEWXNosFMC4LqNBnSXT95uhrWhUWEDE8tNWydvTisyxQpqAxDgJLSeQecwEr6aZcBFbMc8SpR9T5",
  "key34": "5TVbB5onsXjbgnsXRbTd2kxstGFBD4f5uxK8kyeT9c5sasWJ9L87HVz5w4GqNXihz1Jk9qmFZnaThk5z1S2YC7dQ",
  "key35": "ZLxnTTowAV7UVtHpENLAsqqioCWDoA42hyHaf4D1eW18qF9m9xT39Fx1RXzGqvePDk51Qm7QJYem72PV3UzWvBh",
  "key36": "2UFA8KyyfTKj74CdU6Ro3jAkCqhHGmuKub5atSHawvb9LVQKhNwXUWWE1GwyPkQKF4vvUkpxQGoNrKUuX8hmxXvm",
  "key37": "27ZiMaxPfvViuMuk7ka71iDgfMk6LQPM8sWw16RXQ6i6Xx3ND9Dsm4YcrvZPVMkXcKHWccUyXvAtqAD4qNiDPPw3",
  "key38": "3UjY1WtjTgtt57nCQ8ZeRnPcbv6nuZMXpi8zQUoBwEwjfDrRxq1HW1zN6Jos2Fv7JvyGywEzKe6eLQhRvU5az8Ku"
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
