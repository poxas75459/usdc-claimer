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
    "2JCoJwVvgiZNFxiJkRuhCmKT9XottUoV3GdpesgXc4yiCtXTVRVVLRd79J4sV5rRXnZ3FHVk4PFh3DH7RqBLcdhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eAh97B3W4XHsemHkMw629AjpGMY1AQqMAZYSEuCPx4KJcQLWDBVZtexcthF8q2nZ61jUszqZ5unvZccGub1Q7Ed",
  "key1": "5AnNruuAHRxZP1kE2de782wkqZhgwyabcAG9bFciY7W16d15MMN9ScJj63dE9cZ459xiUM8dmS9iz16t3DPp3aLR",
  "key2": "3kwhLyB9FF2z1AVdiedEFdATZy75tsM9z92YJGm1Q3VFwBTDUfXtc9ZbLkFXQgPrGF8ZGF4S1j2BqqEmUqAKKskD",
  "key3": "5afMA4qTPkLJV4Sxkjkpcwn8xH6eZosa4QGT3rVn9YyqpC2pBVAmGat9zts53JNofFWtPrJKLhCfN3d3w3uvY7No",
  "key4": "29QTL369fhYeSKr4gzzehrz4qDVHAbLSADPt5p3Su1t2CQ943JvU6PQqF5E6md1ptBhG3kymPBtdaCaaULahu6pn",
  "key5": "52r2MZdgkDrisnRusDRY4KWiNGuD33zA2sMtAbFyX4UgUJfBkexc68zskGT6yC73besCzJrY4eHyQirMSCMFWRx6",
  "key6": "FxmQguqQisoPVWY7z8o9dYas4xzgHub6vL7EiwcyH44r97SqFtqmnib4qWWyUFPD4FAYFsZ6mgnWk4ARX8Z8sJT",
  "key7": "STUVfzjssmsb6wVRdhFeucnR99jPMQZtn2armQGY1YKDL8MAPrJstarHkPZwyE3Z26cSaPKi6pRvMiRg9DhvXmY",
  "key8": "48Pu1ognX4qAzetgc3tZHKKW7xoSooHyztgxVTAeKiJFRMepXaXiy8RC99n4Dv3DmX232HUicFucrPrgQMp54Wqw",
  "key9": "51ggxFcAp1EGimdumVTArdhyK6MRB1QBRqJ8Z6rcxxQi7Zdhv41YKmFHEoLhYx7h9kbRDgaSBbzC6CAeYLtfQzeQ",
  "key10": "2ZfBstYshy3mRb9tP1oJWnK5LYrRn9Y3eRg8iEEBFPFUk23rchqEXVeeLHzbBQdMzGNuCdyqiKZKAB2686DstF9E",
  "key11": "2kPbxrhkb8r9qaiwcD3VHUSWabYp9LvhMFB4X1emUQcaBTU1CdFM7sTVn2npkY8tTAXR8zY9HZDnL2Y47JfnUREP",
  "key12": "2FTiti1XqoTgswwKoAVRKHtwFyft1ZY7SzguMUFgqydL3BFjX3D7HDZJZzBwymUjDHn5qPT98nSCCr2ZvPJfr6Kx",
  "key13": "2MxzPoCsQm3XTB9fXwMyufgB9kcpYFj946a1tzRJNvjzrtBdM59CcZN15Au7U2SdTXSF4SYWWYfAfz4rSdzprbMe",
  "key14": "3iTRSoataBES28LW6eGTqtynyvd3ZG8Y5Gp7JKUEJp3t5TN2ooYDnqXQxknUzMDnAkx5PjAjTpek9FVVUDTkPyXi",
  "key15": "329Z4a4mfYzKayFZ1JuCBZNg8C4umBhs91kvBdk5wWhdNs9zwgT8DDsterpS64ScSoEqmt5iyCC9zUeSGxkNDBGV",
  "key16": "4wkEGwMkMuDfgCC9Fkf2qvbPrFDWsqTN7smBaN166mRnwHucxdLwDLdDK2ToJMqFpzJxf4frAgx6ucR5dBXdcgCY",
  "key17": "3Z7BTMsqVBRoHruoLKoCn95ToVggrCtu17y5fSnmuKbYgW1jU6dFk5F8zvMMmWow7s8pLvsvc97faMwCXmZ4PWp9",
  "key18": "4smoqn1smjVGzg3xrZhEi9sBJiaxufzuDoYDuMEY6N24xScXtVLa7fsqUUAqgbFVEJcBmdcDpkVri7QQ4WCCn1RJ",
  "key19": "nz58TrUuW3qcWMWBYpS3EQp34fGPTEjaFfcxjddW7Hmp37xLAUCFWd9yyTtYqAbwaJYpaRusqgeQN5VzP1tHqeo",
  "key20": "3gU4G1c3xkP354B9KWP4219zZPBStHTwyWkL7nSjzXEkyscBF9NRyrAaYYoPP6J314GHTmmpZWCBPrRmFtsEKiGY",
  "key21": "yi5mVDG5vBwBwYkFLv439d2cv8gDiu4ZarXp7ZE3m33c44wAiUGY7fsm4YEdTohhD8qC2zgPv4hkrAmgn5GcEC5",
  "key22": "4MjANjMknNTELxgXrRas8UL38tmQZVW4e8UiHk4owgi9GVvM3L8u7pFmdWBUtVcdZiUzFKvX8zR6qMwgCmBB9DFY",
  "key23": "2CiEKNRSYHgbZh8X4pvkYBLBfV9F1JSibw2G83Eq653GJbVh5BzikdXFZgyTRrwSGzCZsotuADbNeS68xyWuAzwT",
  "key24": "xXjT2NPYp5xmjEh8iWpCNZKWsY833GRhk3jKck2cGBV31YMcQvgx5Ub6UUts6yqzKwGCSUL9pUqgm7YLVd1EBvF",
  "key25": "trg6EhqynHVNZwLcrhbz7kX82n7Jmnn8pK15MR5d7p9nXSGuPgUHN7z9hU1F65dtdqbNjXAdRoz3oba3L8jcd28",
  "key26": "5Gi5u11X6wkYTJ2Egod9La6CcfRN7yDB6mvx17CmhK9n5rRHGy9uFG2UtYzoU21wiwEiDPS8DYnK5u22GqhuX8tj",
  "key27": "34iA3StpkGju4HYW3eFTnuRhZqDz4gp7zVVvADEV4vegqqfnXjZWxhwWesF55TFy8wvne1sF2g6s9q6RJPFCGRC2",
  "key28": "2viNhkuEZWN8GqbgEoc7K3c4ArXjMW4qJAngeQY9zC3e5UKpH2k5NxKY6fEZTESMcGQV22EBJ8TnetxwnhFpaubr",
  "key29": "2wQ39jp8jDsNyJbeBmkKMea37ALLBTY2cDovFSZqDjuTLtdQxSyN1YjuQx69Pm9WrZtxsyEJArfHc3Zd4voqGDCb",
  "key30": "4oVSVNhdC7EqvasBREU3PqbhqvfSEYk4TAGZ3LLTR3Na6kxJtHVpTGbRbsEXVqNF8qXXwqaAM89EQgqf2Vbr22ZA",
  "key31": "3AGkWtJFgorLuc2LzcCdvUYx9Lv71CTJ7HiPG1TJYciQpqmbvi7ibWrZ4JMyYNcF6w5eAbqSPX7Vyqb7XMcve8BN",
  "key32": "43wvW1SZqiH3oSh5j6RGsFeyEYBtELKheMF2oTjWDkqFhPgUpN5ydpLjuWDvmDziqxGsJKKMS76XCW7pVgwX3Bp3",
  "key33": "48S2f7ct8bz2fkLWY58pLbP2fhL1EWn6v4ASaHLhoWGi5nqkTuMLMvLhi3KXYkUEUf3atd48hbctcH6UjB7Mgio5",
  "key34": "4ZaUFpPF9cVodbBQKeGJ7j8HbBXZuua363NdeKc5uR1NHvWjLeVkpdh2DKk8HoV9SqQVJjCbnTEHdgGjPcGHT6GW",
  "key35": "2LY3a3D4yCdCrcqRu1AfEPTzxoTDuaWDEhrsg1d7HBaEGJcJyH9MWgtQEBYuJdYmxjSbuYmGs1LQw6yhoaRvkdmN"
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
