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
    "2v6BA9K6tVPaJsUAFVXF3LbAUNEXqsCLjCfjc1vC8c1CVnAXnxGxVRjyrUUwceibmL9DPDuP5ToSK5iGonq2zjPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hQTaUCZGScJo9hU7pjhh17ET5nEo8L2ALHbggXKBApaWtxDdjV6m6dzZ7gfhRxy2jht1gVhbFar1Djjn8VKpPrD",
  "key1": "4e6TXYa3bUqBmy4sjBaCAYCfnKHSbBiRxG2vmJhxDnDaxgxDuFfhumHohgfJicT4eb6nten2KEd62MwcZ41LwM9i",
  "key2": "5mh4ghAJayjDzAAk78zPupyFu5gaDhqUvPRqGfnpTa9qfsvHXAfGewJCyykyRV9mRRWsQognHhW5vuoC1R1qfrdT",
  "key3": "3rUwg7Wrm34Ap11jYz8Bp5w4hPS6saC5AvS21tWRWRLB1oqJ6ofUwDHJG7iMkexiiifVs6BPmLvu9rQ4YqxeCCwV",
  "key4": "VTfbaXxmmdgDW7eYhEU4FtkRiRF7JMS2G8Cm7p7AfENpnXY4ud5oZLxJ6Ki8SaoQEj6jDUWRicPbz3sbH93MMKD",
  "key5": "4imnpNmFDAnPY6XQxMt1NZomiZNY1zaRLBMBdKSifoXq6pms7cpcGdZFxzYXRYnn64i6gYyWuKc9TbVQZuAdKAuy",
  "key6": "5EUAsMkGvezemcZQuaC7YAdbe6haNd36huf6fZqX9iATgDm4NcBgQfLyTJqejkq3VjofFukAgMPFPZJWYY59qNme",
  "key7": "3HZqaHck3gTydQdY5yewedXv2wQTvoxhkH7DWfTK6Li5LoAttnQ2yWK2VZHo54XaPn92G6T6EqvYh7N3ME7cedit",
  "key8": "2ERb82FWgoUStmyqm1UxmXwgjn56AxxA7pjRtzaJW4HtN892RiV4djUzqb36sSyEtjj7kY7BKwpVUgxuUM23TzWU",
  "key9": "4ZktedZmvPabLgAuVsxJDGq4pTCHbopSACHgAjzXa4v5ssHgKHcYC3YkuHETLD1D447QrgFbmMFuwnHP3FeeCSd8",
  "key10": "2hBZhSV7hnxYHf9QEgmY6dwjoqyZckKDMN4pWVL8AX1ZCUzsDWMXPgfgSinrUserdvy9jdZbzUQ78WfYdbSk6KhZ",
  "key11": "53tTSKjhtwRdX72m5kaXh6UN99t71VQ6bY1aQWA6apgMcFardPKJmrkeUmoABZzgMd2vRSsFmhDuH8pnFqUeypes",
  "key12": "Nh9WHNwVXrbxEiyehPzpgTnnV9GrFFTtb87Nkt7CQijNQsoiYCZGPKXAsjYeBz8PoruXzSwkXLvGpohCtaFUuFQ",
  "key13": "mwKv57JvXZC1oy1xMHAzdZE3NvytFHTwcyQR2MAPAA1KfUvsZUeG64F11m4YPGBp6Eqaib55akA6Ga1f18eXaGy",
  "key14": "7zyLZGrgRscbueVHnJZBDzM9re21EyE2eZ4URHfiJaA6zagJgHXwHEAoto4jJHBjjqSoAX1AL5SfBT85o3e54jp",
  "key15": "41VpAxmNmVi1bovn5fBn7Mk7B5HQfL528FF1Ccju5S5x8W5fjRQF3qeGYXJFKinDVrfjAo9mAN6QU2rifRCWx5SG",
  "key16": "2ZcpCcAeGQKAqq4H4piFszHabzK9yCe3CoeJMTWhc6wBgyqNg2sQedPDgPWd1bbLZVYV1AwkbreFnNus8SpgMnfo",
  "key17": "5SHbW3eEysrGwE41htsxQrd1bZmTqDbvAgSi53RdvTKJUszFCV4KH9zTFthFWxtWjFUtB5Yk5WXxA6jx8nJ4kzxo",
  "key18": "5GxhB8MaqX39zS72eF6CVfLSscHgqmmPtfXJs52b6NA8rK4etj1SXwNowFMngfFi24MCbrrbAc1PfQyawT2HWGQM",
  "key19": "DuHP4Z2d7XbzifA1WLnMMxcbdVb856pRQvWH46LU3qqDqL411GLYt8kHLsqLqnVANy3ZUmQhjbgvGSUEhdE4A2d",
  "key20": "5kRWRZ2izR2TsNCXPzNzzqQsz3g3We4vxq8Qm8vtcTe63GQFGwD2Ue6cw9h645gEjFQcZs2DgvaqmfPTxgQ6wMEE",
  "key21": "3McyYNRLCG6zSdYqz7KnuuPkhEXUr1BpzeM3VQwG6CBoQpxz6btA2ET26k3gjty14JWwHdwJTLWbfduuzcic6h5M",
  "key22": "4qDJAeH7T8tuMEHbxPG658JqzyXRNupjivKzRBjDBVfBb83dmqkquJfgWk5vJ3MAqAZ1JTK7KvrYDXJ57feQLbks",
  "key23": "53RZjxR1zbAYB9aGU5RE1awGh1FxRBgE4Lu7ABJhr4FCJ81n7x6MHUEiEuSgD661vxSLD9hHd2nphNbd9LPgd5tL",
  "key24": "4DGgdSSGJDgoeTiznrBSvkwyKjLuZF8oCUvxWHrRTANEE3QdFN687LhJVFLvHrTmuB2pFYz11rQC3MWisrfP6yhK",
  "key25": "5xEcfQFjZRy8tXDTN2ERCHEdGd3pNzoh98zpgrFzNnrwdERv5F45itJMXrH54MxpmxPUZy6KTUqQSnPN2rdB1iZD",
  "key26": "21L28yxokyzG7ZyKP5J7gh4nHxyjqsaBQPwq9KofKmL9hfv8HA9PTVqYPdbBM8VeN3WWoSq4q4tMT5pMYVDRvKZE",
  "key27": "3VhnricqTbWjWZiP8LsBMcb9Mt2FpPRT2464xWJMPgRiMGA9eFuoB5ayUHPr4oKeQeT2P4nbRiDFcGFjdiGe5KdD",
  "key28": "485m1ecB1zu8WykNcfAEF2vG3yVuDtaxMa2Vc87F6V89ZM4oQWyou2fXURLqjPHv2rybWNoZdktv8cGd8Spftw2H",
  "key29": "B172iQpPq9TApdvrsisPc46tXRHFwTy1P6dKEEEp4UjNWUje7wrJy9PSUmTuKfNuFrE93EZfGQ1u6WY4r5cm6pa",
  "key30": "2drccm6CAEZ7wf7D38p12cQt2HZQhrvxgo3GwWkZ8MPrDaub6oe4FrVhbEcqctKr5mRRSwLNVqhZAjHCZNJUuvd4",
  "key31": "5jCbySrffZnDKEKGtYwLmhcdb5cbG3LcgtwfA6kUSXBoZbKKdRnZno5jeSqRcXtBn6Zu4ab3g2x1MyUtwUL4Ksgf",
  "key32": "sXaJMnHKWQgPex8vHLuEddoHnvM43pic2GgDzr2cDmv8Tv2uNA4Y2PYmZKW7ZbhuDf7xQCNJgBBrhAFZbtDpyF7",
  "key33": "4PeAyem4CxUe4r6eAuhF2ec88uBR5GXq5xbFJNcSvdnj2CXvx9Hg5M6zu7mTZKLQNJkUd26GKT6Ry2UFPDKfeEME",
  "key34": "62TsdHfjvuTnb3Pq1gCfbhd43RuZ6AfjN4xciA2Nm9bciZeYU2ukLWfX9eQqAcPHcPMwyhhQaPbEjDrUMaMq3ZGi",
  "key35": "4Pa4rheeJdM176vL32q9K19a89SuWTCCE9E2c2TbHPqEMAeBDYVjRTJzBFfVjjeKKwfbH8RS6rchJKhPKcCAkHhH"
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
