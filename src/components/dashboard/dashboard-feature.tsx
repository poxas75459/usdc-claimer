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
    "5V73u32oqGeiLM4D3GDZGgrvfSNrDf6HRPkkLhVmdgqmTkoVk1LjZPmFded6rjwVSFSGBXzuqWaj7VwxSD95BYtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeeXCbqDV9KiU1ALbDnj8owE33PXdRj45XvRLHN7mi2hQ76N2Eof4EJkoZnq9chDj5qMQ4Xxz27snTwoe2LFkrB",
  "key1": "5k1C4F6LrEAg9mrbpJxtonDTjJZ4zS39MTADcHNZ9QADqoffD9GvH9axtyVRsJZxAptzcTPZBqTqWMpGs4qh5DXt",
  "key2": "4Wkpv3Qb3BFPjysX5xnFmAensErpjTwFxQ3yej9d2eZaR8xJeXaEnTK9eJmBABHBTtpDQXnztN9LotZ5uGhJc3rv",
  "key3": "zcpGNFpQeuyuoecRLUr4dqCVpSo4sYKfyWJaLVUouMrE85UXdvxuGGzpgHxrfr6wcrJ6LfsmST1dqYfLmJxDETq",
  "key4": "4z1JdUqA8tpBwy9EAueUZTWYAskabqz3tD7NFydej1g6Abfq5SEpKZjF2mRD8qU4B4BjSxxZQEnjDeShY4c41i7k",
  "key5": "4PRZgy4Pu6yBgVYRRyow9mdUck3PuRJMK1Qu5E35rsgqZBUUaxbQT3yranouFfzfCqSvLEVtZ2Zixvo162o2KWTB",
  "key6": "3U2bSMbPMtD5m6jcxeeepHTEfmJ9mjpN9XD1iJkwB9rQf795ZaP1KBsj8SMHn7jjV28ZPVYyfLLkueMhCMMdeH6k",
  "key7": "2HSKdCUMvdMTk613SpQjbCvdahGr65hyrHSTyNkMaSBRPAxL5Q5Kdfbdqc3S6kiKPBZ49JqT74Z4zMthdZ3yVSv7",
  "key8": "58vn4Kew8WVN5BKpJs2bSBNbmgYz9BoDCnYozuxdS8PzMNLNDSgYBXNodHA3Ui8eH7mfn2gCg2c6ducoFv6p2ENg",
  "key9": "39xwdWiprC6r1jmRS7LNi5caZCP1kQzxt1U5AewE6xr1AaNWAWGN2SZwfXiWSPvjNSGUTzz2Atug86R6EcRCuD4",
  "key10": "5o5DVg8pfzALQ5qv7J5KENtrUyZXenHFRwZWmLArWYdbG8Uh5uiKZvU6x7NyK6YD7mKtvFQYtKQsFof9PsDo8D3Q",
  "key11": "9PUS1Z5BPiS1QuMT2HgVQcF4LeV59jMqPe98Vg8HZsGunPkabu762QSFqXsYKFdiYQfujA2zPQvh92B4p74CG9B",
  "key12": "3vckZCsGefS4zSJFDu1PbyKRXkQJYpTerQT9kHNz3fM1fWJtMgeVqdySR41mpwFtikQXMZZveZ6kzFnwz5y4U3KR",
  "key13": "3jN2qp4ah9JbfDfSC9yf4U4ajVfz5BcPTTkMjUGhQ8YimAc5HTDpAcVrsZSF1kSnxqfa8ykGvrxpaPCn9bpezq8H",
  "key14": "NKwLF3H7Xj8pYSK8AEyy1VKTsz4Vc7wLNz5Sa8LkzvxNQnuPKJyJFbe4CAAowMTRuPqRwWNEwbrCbweNAVj7KHB",
  "key15": "HAiBb1Vgyxk3Sgi3nTjE3Cye4w4EWTmmvWcvdvfgkYd8jAEzhNSh1LzFRnunMN6FtgdqPrZafxtRwnFEUj5AQC1",
  "key16": "5y9VabLDimeLEaEwWaKRT1m7FY93KTU3jGjdpiy7BouevzJQskUnDo2bdsQnnMsjYaxkR8uzYheFrEfoa55AR6wD",
  "key17": "3XxW5WdofVj4qgveozMhQkuH2Wj5VB86Aa1UQ5gc5iXjQhkxhfruAXjixkdEVwDrVo5HnVP6hA4cKguTsvCCvins",
  "key18": "2QLZsabhB4iGH57pN8y7N9KPHvnFX1S9V2es9ckcVej8YurAMy4c324fsQ2qDsecZJAWdyuq7Y8aJd14JVt4i9XP",
  "key19": "3Ke2VdFFpNkkHzxax8oJaQtffYksrrEE6jSxqrJFC1cQsY3D2UaTBHp1paXYaKLQRkCfYgYaTbcDUmYtBrGfq2xw",
  "key20": "Cmc91fT9FcUaVHxwnU48zic3UQWGveuC1U61BFfGTwGGQoSyteErtqYoLSdm2dZmvUcV4yRdyLHteCPgbfFEeW1",
  "key21": "4qv1LFYGFMc7dijh4K2hExrC42K5PEAB8DM5rxgY41Hf5LVeoUofjkFkSM4PywH1G3KAtmU4KMvRdrv6fLyiNqeG",
  "key22": "5fneMh1pTwiizPJdmk1nbePb1dSAQtYogHW5xHXcoyq3iUAzgD65G146wQsGY5iR6RibwxLnPm957kSqECnLoysb",
  "key23": "5XpvBzMPnpJkP7y7tSEyc47hNkyAd2v6Zgd7ywqXHjJYp6r43HmPNiwqHqycesD7QbCrGyzps4otHUx3oT6fPXxP",
  "key24": "4j29EvedD2cvvBeXWxnzNkgH55yFMjqUp7YRTiBKgnCjU8HCpNot6h9dzewUeUAPS6XrsiXxNJpvZNoCTfnEPurg",
  "key25": "21NkxidiStPaWjQqbbNU5s9AtWEAjzEwHPPKxNkdVXgeqXU1LKEaHQ5d5WZfmK8e5qwmWw8FwcmS2A4xkyzVZhXb",
  "key26": "3YHXfyqgtDuemjk47vRxtKmtkNH2wPjwWn9NgwzUo2P3qAbsUz5Wf3G1rAmEvbbQ93jvnMzeAHFA8XsWUvFmEJCP",
  "key27": "43Xh8rjaMKiAoHx9QntyTepP4YTootAUVBpSkcrTumqotc2fjj1CuX6hSypYX6kNzoJfUhTHGP4CUroVTBrqTNye",
  "key28": "66zv3kBdjj56mrJhwwg6seD8PCY4a5dW9ifBo6Pms1VSk2MevTS5DBy2KKLiJ6pcgdcDD3c78jrz9f4WpdHc8ERp",
  "key29": "2DUawYQDB6ogBUiu52CuZSmFheFwXKAwLVoLoXzVUjj3EF4b9dY7Y3TZvsEj4zYKKBXTqQJYYsCtnK5WrggYH2Xg",
  "key30": "MtmR7oisfvr8RafyMijn3gRG4WhqAbPRRAMnvqBZt5fLmaaTvxRPE23UCzNbBmKs37gXU34Mua1cKSPjafRwUgC",
  "key31": "3PahU5Fkrnh3xQbuDo6wuDcU8Yj8Fw8JZFWQbvAWUpf7BFSqhPErVyXXY8N3ECHf3vmLE1DZ7Uj6NVj44jCW5goR",
  "key32": "4PScJfRXtaGikDtHZWp56jGRfnnoxkaH4x2XWD2pK5Bku2c7zBkcKvLtFQYqjifieg9dSMEC1HuuHBYbov2JGmoW",
  "key33": "2zN2LxHbCojMmqZHfnzJXwHnQH2FsSmBMQqSA3dNnH1WQpaoG9tCffKXt3ZgtGX1cCG8cu1FpSt2bDjETfdvBatJ",
  "key34": "5EprVmu3eu4yrHmP5avd14NdaQebpjSf61rS2Tmvvm1k1zQufKgpB8mvqUj1zSRE1pGNG7TfUSx3PkwHu6gJHrh4",
  "key35": "2jNDPt1GTXNTjPhU7b6cstV3XsqgX6C7aqDLqi1fSDohYdtfa4qJBccgS5WcW8tV6HV9ihbYvTqjxMH8fwjHwJZb",
  "key36": "4kGmD3RUULj3tcrKR4n4ZaUFU5RtvwP65aSzDcQd6Sg3nMBGxbxKrsLMea3VdYtq7W1yGBQu1VZUzLojNPjBTmiX",
  "key37": "UrAUCGzXvpRbvkZM54FAfRDRs4ZMWPj6F3Mt1k2V3BxZymZ5gKJM588rrBWZu3jKVSGWtj4JRRvEPa43y9UVwah",
  "key38": "2TXxtLDCjVep5eTsiNRuF7NFEHrd5JwtMbAbiWRgtNgWyyNefjonYvrMGCdrfZRzSueXQEt1jR947SK4nSzv44c8",
  "key39": "46ocbkiHZym4Mo5HCAXb4CXxoTepuPU6PtLGbkpFExW5G4BrYSXurmGWBKqyQLfSxp77RubpJkWgqDhLazLVUBwJ",
  "key40": "3MC2cJpALDZ7TkCpNXCL4aWQscF8im8d2YmAgghyDDXycqcEXRmQJxGYWxpwioJStegvagnV46GtUiQv5xeWizxP",
  "key41": "54rdSuNcNMNpNXznUEBifvov7n5zW3cuvG2JR1Z8uXdc6rpR8DrJViFsgsnYU7bcpKje8tWbcipZY1iQkZgjbEcM",
  "key42": "UWNXxKp8MZB5Knh87h7WB38Gs9MfTQHzpwJJHgSHZtGHkt59o5yZJb8pXAcgDsbZqHb5k1wXe72XK96cenafqed",
  "key43": "5GaZ8drLDGwrZk6DEPFMieXYV8BqribhUzZWKpL5owZ7T7GMyZbFTXj8jyLvJqBsaSR6QNwJ5K3H3a9o6qGPtSGU",
  "key44": "4d7xGfLtvQPkmxrwMHvrerHUrdR6CnJW91pxXNTuKrUEAZqifMhWx9GM9qePfUtKHXWshVFdSTg49Bsz8btJwTEH",
  "key45": "4E9yPf8qyJ88FijsEXg2Ui1xbFLTVgJDZttQH88bLRcfCVz2TanGCVY4jWZKSeTErxUU4MsLpoL1kGZ745qQcMBe",
  "key46": "3HrR9kYKNump9T7CDEj5UK6ySZytWGdwYVrXaxxTCY7qCN9fL1LDBdNjTsJ7Jkz1QjDsYDevwWY7Vo1PbGSd5RTV"
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
