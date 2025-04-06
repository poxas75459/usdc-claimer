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
    "49X1jgC4Pi21finqAKoLRrGSgqwi6yuWr4SLtUJLDfc5P6f2MW1YGzh8XG29Mz3EefzfS9z1WdVyetGt6fbEV8fG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23sxBtSaDsmHUPXvYAjMVSr7nXgakVE7Qdr984iPFnZ2oxDwY5QkTV9aLMbSHyVV8B1C9Qy5LTFkbapRtYkjP9Hp",
  "key1": "5LdnP6wW86BBtXZQmTz7ykA15pTRnKy2tPCSUJ17z1AS4MGJVmoz5KTHB4yJtivNykynNPPZ7KEmdPDsXzwTDNNp",
  "key2": "2D4eTuz8c4g5jcQ3F6VNbkyuc8AHRBbwMhhufYJBNBu7wv6Vs28W8iKZbvUDsBYXn3zsxJgeVf9tRKTW9e5pJgtp",
  "key3": "2i8TP9Eu8VoV2E8wfM9QyhLimaqxB5eVdVdHn1XbVEJGKAbGvdf7xcrnVeTGvL8ZCs8FkfcptdvjtPAQracPiwW7",
  "key4": "4M36HiP47WHXmfjtSH2c6RQ44BhBDS52rcnCm4njL2gqm8FF9QJNjkr7aPMxNmo4M3AXVavSMkWtPjmakVdccwiB",
  "key5": "4xsoisx1Mjg2zHsuwH2WmrMJvyi97FmGS7XxZFYQ4PDssjJQDqQMo2HWnveb6BG8EUPB7iKUhakdvRTNNUzPBxUf",
  "key6": "5pw1ora2KMWZCzW7jweisVU7NdUuXiH1rqfHiyyCHs6DUAmyKcE6T3W7CCgN8FttEMHAdvLyeDXkuAj1qUsJfFKs",
  "key7": "4uEsx2L88XgcpzVSPVWj9XmPcSqH1amzpTKLnxCMdP7PhwPYprcXuk3T9XLcF8s7PsCXLaYDPuo3cJadBbBg6Jdh",
  "key8": "5YZZXHUQmcKf9hqGEYA97j8eQp9QeNX9cNWyFPiCPCmYDja4gf4mVpL3PF5FBz3Sp4wFJ7JL63gAUJhsjQ8xxFwA",
  "key9": "4NhTHqRwEiA3JWejpixWt6PhpTJVjjT2XS4qNay8cPVkpg8ENE28hDHJWTFkrZUmMvH5542ssp2H9vLVzzXXVYpF",
  "key10": "3RoJ8gBnBCPyP64oMv1nhukp4Do9XHMtDWUF4zeNPW1gb8KqHPp5fmteRiBCMbzK3jc8dxoCg6wK3BsdnTo2mjn2",
  "key11": "7fTjgxrmQjc6rdwNvaqtrExtEpLE38udmFo1kaZAjkBcUo39JyLKEocbcQ7aE6jpLWqvzR1BKpNfbnQbRTT5ViB",
  "key12": "ke36bQaQHwR3bojkjGTe1Zeq1AMvtJi6PXKrU7E5KvFAYgvJWNjRqQEf4i8wX5jApprVXPH9ba8SeXUAUThW7rq",
  "key13": "57Uw54ZRzKS3zdE9cCdahRcZdzLHL2RHMcWEJgtEWZzdnR8QVs2vgAj38cyQzoHKBEsjj2u7zmv8N1iDMX8kBQ7",
  "key14": "jD4fqA6FWBtSTJrpDM2Rux5qkaFR4Y4d6u7YFX9zb3aUN6UmabM9ktgKitDg5NKeBQSzTTKjND5mkDZ5BQsgJru",
  "key15": "3vKgcePtzeVyCk64mwPXHzuk5RWkWZ1Q1UYpKftg7HtaDaCcGiWgrjB3AShy6x1tfxqqsmrCmAtQ2MstFjAH77ba",
  "key16": "4pEwxeixBZovqRr9c2xakv7R27VeY7seDkro77TU2hxJvymbQVMPY8PX2SzVcS4Hy9XdeQrbdn59geYq7MSd277n",
  "key17": "65ECx8ZB5WbtqLtBYyJ1h8C67ahkhed6gJWk2snk2Ccma8s19bVgMdWY9ZjySpbWE9CJDF1GDDDFkLsNpxfARgMc",
  "key18": "2CAz7eNLs4dANV5GRojC13RF7TnfBDG3RdaobTR19pGbN7JXPVtTAaVQNAZYofMkY3f5m23TxBeCE56kJ4uSTgaW",
  "key19": "5kpX6U5MQVkAeoXu8AeCjFtG2AcNePZLHcs1ngkaW3k5Tf9ZDHM1d5FCFKZoTBWr46ymq5yzQgmP7mGeXFzvZmeV",
  "key20": "3g7sFhug8sy8ywQBd96mfPdvbsWTh3cYQxNZXUywGiuAp7ZqLQjvKGuXSBZ2poeffKheQUy48T5SVybpZh7GdvnM",
  "key21": "HtpArR8zhWLsDjcNC4KUdv9EKeJVQkRb5UyXkyMMPZRyLwNyJ4t1P24SaNxGessyvawx9fG4uaCB2uGegzTXt2x",
  "key22": "48s4SELYBqWHAT2RGhkgvvXh4DFmVhZfYtPtXFEu41BMQ2jKrHcmF2QPwWktaFE3ZcUFEuspMXKht1d4r9kkXA5i",
  "key23": "y2TLDpo7rhXajBLY84STdTsPzP1epNT8CULKvC4are67WVzRxYtqtw483oJxUz4U4G2vipLBR74rurV1h63Rk5B",
  "key24": "4qkRYt1923SFVGDTTobpBcrHsSpqeVCbiZGNXCdD6rqWFmy8bxoueD5DX2jqUX9zNEBWwjRnu2Yknnc77qXHMrAF",
  "key25": "44WtY3ZDT1Smp5fbA6iVWRvQoczkXjARRy4wDgP1mFomBy3yrCiKt6RXQByzm1BfWg8fx3K7FPJ9u95WfiAra362",
  "key26": "5gTkzAsoLqFpALWqmNzdoqQ7zSzm75hSLX1fsCLKZ56V1xyKgVqZr1sRmUHnEc2FHtjJACmBbXwf2nUkqq3A7Vxo",
  "key27": "4RAPXLYVmV8j2teCfp11Pdq2qeFzAia2JPqpavgS6gpXKpfaLQr5PBUd8nKHQKPgwXpun32bKCkzGL6J41T4Xyvs",
  "key28": "4zAi5eeXU8WsuzC4qZcu6ty5Pb5f1VrCevFPppP4TugJzCkPcUvo7cq1FNzyi4jZzD8xmZxBGyzFxYkgMDnaHsk",
  "key29": "3UfydFzgmcR1C2MWTiyhAtXr3vKmifeh85GGcUfoWTRAwC38MnLrZeBxJFq9mP28AQnZKvypa9UaDKqsCXNpAFxH",
  "key30": "3dnF7UhqcKcaPCbCZ37tXceHsGuC1DJSA2GnEeq6MsYMCUBswSc64inG7qzp9fvzBzzzuDJeTtxFSr5YAWfTccrb",
  "key31": "2eoStK3yjw5PEPcbZVVn5wTJSbDjV1gGGW1YaBYyr92o71RdzVTuTtprqbKQjAfyTXX2YS8HC63eHYZvfZbHNa23",
  "key32": "pNdeJe96WAZVesaLND1vCQEqcPjsuKWsyT5ioWLoDdk2X9CqCrxGbDrXh7YYMBxJsR8f1xCmJYBDPgGFK7F2SxU",
  "key33": "3e1pJPSUX68dE8DRaTjDKWGfwxzuadSvtBwwtgRfvWu7MWiECRSHUgJwz6Btyaf6nivf3FUuZFoq2uMgmSgPFiTf",
  "key34": "2ZZy3MPAWqgZvGC6A3Pire2gCJJnEeEAFiwh6q4iCDaFQw6Fm1K4zPNnWRMpfg9yTwDavAYAjrhcbV9gLUFrJQqd",
  "key35": "3DbejmURgVf2smRjMNM8TsXS91KzvDqENQPdjHtnZHTFuKPd5w9VefPsCi7r6Mr4cuHzDzo8Y9NCMx5EJ6CVc499",
  "key36": "4JqUjFR7ipv62qi6Dpa9roYQ4U8CGoYu9CVVzH1ZeS4XKZhk2dRCxUQdmufgxgEAhL3EUAAUbTvETsFgFVywF3A2",
  "key37": "3GCksDmYADNdZ2FNaxYPMw5TtMiwWa6aKiPxWe6Lu5F5Wpnv41WAQWkFZwdmumk3cfWZhfJbKFZkdRnEJe1G5Yt2",
  "key38": "3inRk464KD1BkxzgNEfGyq3Yqh9DWyskXMYSCd5Lar1uHb3iVePMUATxXJwL8iJQGwah7cg4CtNXkiP56GFHdSTj",
  "key39": "36Yb4AFGiNo639nsrAhiS3czY4hTqaWfAWFxtN8y3akEtWKwZUAeBx2Zcd4fQ7yKicx2S6bWCew5D1VXCrRiaqH8",
  "key40": "3x6TSAsT5oN7a9NJZyb7e1vyt1w3Z9FMxDrKCrZSTNm5Y9K3V3VVmzd2f19VCtuUbZYphEQPnBEwhSRBynamtLpF",
  "key41": "2xVjfCXsRAbtBJ3U4oRmtsxpW2HAYPzK5EgsmGW8qyRxcXkrbauPGbbH2omCnhnJu5CuqEwND9w2s94Aq6mPk6GX",
  "key42": "3NZQy6KW7eurffc5M3j5XqJdpUx6ohQGk5SSNeCnetkQi1SbJxwnqzPMzSdPa4GSVvEoJaEnPxprZgJAGvtU8D85",
  "key43": "62bMJWf986moNcRNfgw72JTgvDPyv1BNSmBmsbwnpPiGzSej12AxTEu2S4HA816LwYgwF4GeoM2HJgaMd2AzDqGf",
  "key44": "2tRj6WY1X8pECkn78AwK3BfKKR4hdCtYA4uj8SkEA8W2LjMwaTGzqSykQ9ukDiYDzC3nETn56UHRfQgA7knYyiUN",
  "key45": "2dukBiJFK4zYwYj6WWkcpsm2kNiS6YnMxNKuWsteLZL6ZHfxWCsGV9WSF4UL4taPVjGaiiMapuVPFisagucwPtPj",
  "key46": "61LhFWwC2EMBPfVVeKs2m3739J2nszRGpoaudhyHrpcn8HLuQe7Zi2jkqJriwSucX4d7WeKTnaQjndvu2MKDXvd5",
  "key47": "4kFtBXqN7hUpLqJjP88VRtdTUtB3hzwUgdCDPhLLWtyB3K8dgYJWPuGDUrWDpdRrmE233rfsJGYiEiWF2Rb5ZPCU",
  "key48": "67CxNXZuAg5m56BYTmhuFCF8Fb3BfqA2xHb6xyPpEJB4odEHDw5zJVFmULxA9duSQKhpk9Mt9DsR6gDAnGAdUFFM",
  "key49": "HKPhBgvuakQB8SuNnGPxjbf49nu5oSfAPd681esZjbR1nhRuGsGuz6xpbF3QBLa3LqZUKPxKfwuggVp1xE1XUHe"
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
