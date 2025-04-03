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
    "e3k2v9MgEiufG3rxPzQVgiqScYuPjAL1Cur4FFh1JtpTM9F4fxuggN6BEUyL9aUctPpuJA5GFUU3Uxpj7ADJA6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L1y9K7AmuaJMdXydnHyVLyhJz2qTzG7q7WbA6BbbaD74dYjkQQthn4eAsmRdDa5h2qSvamTQbJNbdsPwnmsdDY",
  "key1": "5NuDVaryHxAZ6ayVyLBz6TyGfmyMtmvavbiSNcqUk9warpTzyLnGLtoo28MWMwQB8ZUR6fatzBCW6j1Tgo71jxYB",
  "key2": "5Qd77WpRpf8dvoyjgQ4yqrUmqbGRrbWosHAEKgZsT9NFudLDvTom2i8DuNPYX8wtw7tVhJrwyqvQ92dXo5gvy6dF",
  "key3": "4MXAT3RZ8Fiq4j4eEUi49FFAPeEjxZTevk5TFSRzMqP1wGXqRBoawFdzzmfM7V9JEMQJB3jsQJgMGzRjcTXdVL26",
  "key4": "3HFFgmWTY7YpxPP2btBQQrJffwNuaUre2gaCL1GB1WWB7xaD3JuRo98QV4Q6LMWT8Az7YfezgsfY4gEi4dj5h6gz",
  "key5": "2BDz15bB5CJcDj3d6e2XC2Fneqg3iNmwJHvwYQ8Z2wgST6k7DqS5yd9EZgdy15WE5K4mPbWq2H77RZfqDuwMzoXs",
  "key6": "2LbC6R3jMEtf8xdQXiYU6WQRTx49LDSL4piMP9gHzcBGPwZz9BeKLje1YG7wX5WsgtwbJCQNm6YWXP5c8X2wC9vN",
  "key7": "6treMvd7S6N6V5CnciBTH9U8ePFR7TZRC2bEdDoaw15XyWug4WZAqqvAVFYen6PSnYMfASbM2Ek1HVpFeGoAcag",
  "key8": "5gZ4h6cehUA3uNHj5mq5x2cCEuDUBLeNjSf3NtfgBMQ2WbdaigntfPmprbLdtonmMszsye1yYSu2V6RKy2DHtDgs",
  "key9": "3hVi1hCjTiQ7dEEkMEEwKi4fTb9MYG7g33FmvrpfWfMAFdm3eFd4pt2hLU7TExekSAPuJ7FEsP92RFYjw4Ec52Ro",
  "key10": "CF97UjSmZheDsWppKsvtRrgyvphudRpT4v5EzH6ES6SaS1oX4ANqa2VNUvmUAfXTMKkgkWjBWcNXLNJyVYiDRt4",
  "key11": "FdiKzCMdwWnmr3K5fitnm6AWsiU3xxbCVUGwje7iecoGzauyTzVFddWQwCHhvMALBSutAgc4zGogkzWkGrae86N",
  "key12": "2xVCGhwaD9pXLhqzkrb8AkBT6GwUTrzSCzSYweDd7XTri9WTWfSvhq9rHGNqTR5Xbepgg3zUUgQtSGFLd9HSxfv9",
  "key13": "3VBh79T5LpxdBdW6aDsSbXBNTovUjn85x5AUiqWu4MoaKgtunN4uh92wLCmLT56mLDfVmPYMqvzEvAew2RSK6yY",
  "key14": "2xcQRBqGHGmUuM2GATALN7KJPPSK7rqs9PTbnZW6gjzo8zNHRSZcpTA8VWVKJjYpDbN53tjnKZ8sSyStjXm5eBib",
  "key15": "633HndwHLwherSnUtzCz1WHJqQXiJbnZbZbWJgJgteFATcc25396uAyb9D7txYLGZ5uAWxBDfLZAqHSrCc98dYVv",
  "key16": "4PB7X6f1GHuyq95tYrg6T3hJHjNoUiJXdCnDh3DKT7YGBFZuxzZrUPRZWNts4gvL5vPBTxUSBoMw4hPSnNENCtY9",
  "key17": "5pJ9por2jhoqtgiZAm2i8eXsWQzF88n5HjQeEE4dvuePP8sE4YJMqhuxudjytxU3WX9U717TT1aCPbDp3tTQwnyy",
  "key18": "4bBJnfg6qE3GqY26TXAEF4YX6VBDUoQWDehsAEZ2cWd6iauXk7HzsNLRdRha89Vuu7MnfPjJpHNjTuDk2pMYK8Nj",
  "key19": "5C7vT1VMgPyt6xaW76V6dmz8NvFmHoVX6SkRPx2qoUEvgp19GjH4vxCnPNTivzcgcFbPxFyN6tVnDXqNtcbg26SF",
  "key20": "4cEJ4FaLx9Baf6kuucEFdEtCi2rW2jP1p8Nx78mrAzxoBhp8qKvq5CN5R11JoDhDeod9iLaPQ6sXu6bdDb75YccQ",
  "key21": "PJD9FdMuLVW191FKbgXv4zDgu4KzXXFW5LUXrcfLXcEu2hUANdrjpms3MtJUCuNJkoHiYHRFeQPAXg1Zi69yjm1",
  "key22": "4G99D1SF2KhXJXfcSxd7qLpepHvSF5hXwzszfugyzbpZndNXYAYifoEshXLtCr4t7TgFFEfEJep4XEQ7DN7xXpYe",
  "key23": "4Mw2xozBDQv1vEo5bo2Lszjn3RyjFPdfnTvxqP3dkKFizNkXWhJVtBgvUAJAup93EGT3kn8HpTrQT4rbG3siTUMV",
  "key24": "JzDetiiceAGEJ1W8jsr9QVax2Xi9qQREK2shQnAJBaaMbozWaG3rcVTLrMjYTeNhvNPc9Epz7DkFvpLVjrBggf3",
  "key25": "BYCGuJQ84s4FK1KnMjjBCBh73pLDtBvGZgrMKPvBigz1MdgqBhsmDp8Mz3G2pA7EoUHZa6XnkP1Vk7sjcsAgJns",
  "key26": "vuczgVR9zAe34bx9dEkWcRzwChn3ZgEKLLskoqWah4bXiZetiuWqbZ5ZRLWheSw7M7zzh8pW1p1kRDDE22YRfEz",
  "key27": "4HQ9jsiNffJxH2AstNt9EdLKnQWWoBhAsx6i8oB6g76fvVeq2TzDERtzZSYK2mRcxhMtMokNJL9vvgLH9s5Xfm22",
  "key28": "339G1cZPDz3awLm79Pbp2PV1eYTD3euFFQhfE96bPLF6LdLjst2rhLFNkjLWkxTRzrK3irHnkhWsgCuM5tFVmNNE",
  "key29": "5sfQjPdFA7YY2E4LWBHkFhJ7q1XRGeGSyfqcJ5Jm9RrsX4zBuXXUypSp5neTbiT7nA34YCgVm7ip236jkAuT5oA9",
  "key30": "2hnkrp4SMEp9sa9EvJrfT9oiWbgEjcS7a6h4c93MhmfCfzUbJcCFgCWdmYkUAkpevfA4EGety4HMatnL3Kps8UZH",
  "key31": "45uVHK1wbEaQf6cTRXa7G39ATYq3m9U5wXLvoi4zgaShT3VoqE2ZuguYD4aBFAC3qt9DhKuQuwMNm9fRz1eWNqGG",
  "key32": "8USQxToh9q7TJVeU6j7jpUP6ZVkM6nLpeXtA78HV4TtG6y8fXsVVjHC4wzq1cyd1AEbiwDBVqkTUCijhhZjkVvR",
  "key33": "2a6aDxKWtPT8iaypX4jbpWHj8R1e7zHt7tDHL6j5EjShumphrYbqkzhmaPoutkjy7DSHa1Vd6Nibes6XVhh9ijZY",
  "key34": "44BZc5wesnx1MFzF43Ww66UYrDrWcm3KQuKo64KzDhDWvGMxNw4qXs9YCTZP7HWnz91tJ5tkZkPAN58orCdSWiDR",
  "key35": "2wVFoD5yzRWJCCz9H3nbDt8WYXEEmLrDtrYeBCnBxCqqFfeh7Lv2EAsuEdFNiWiBQTwdxA4SxrhMqyp4PkcR6JWj",
  "key36": "2m8WFfAjUKkuApYwDPxcaX35D4YmsLAvkjvRHfhF5XAcSpD7iJ6DoAhrSpSCSkHrMss74VzdmqFcAUv3bmb1yUiQ",
  "key37": "3QTinx1fD5xfwM6A4cr8hviyz6ewtTCADKrem31S2C6Fa9PuPeacMfxMoNYfAoECfQfZXTp5DdttnHSxeCwWC2Jc",
  "key38": "35Pj69eUizYNz4CMggGjeAU5BV1Visa7F4R8goJzSELzgDEp4Xp9z33sfUCNrPnx7crThDUBB6zHKj2eiVytbJ2h",
  "key39": "k9MXWKTAp2JAhiPGGN5nHowPnyDJiSqkvbd4zQ5gC6yQUz292RinYqVfc7dB3TjPbcEB2EDCMVcezhFx2WE9Vxf",
  "key40": "X2TYxsaDtNnabct6v6fciKSnHrxzye8EGDBRWBkW6uJmk1VWXF1rvFK3WBQNUB5FhEAcA3YyScpJWJiUGCvAddR",
  "key41": "4B5dVVUs36oSoJ9FqdaBQVFFRHCPnsZrksttffzrsmNP77vnYfD1Up7cUJhvvJi6STy2jztG627qaPgQb2YahB4q",
  "key42": "4reymyQsG2jMGko6fMh6L4nwF13AAdHMnnWhv1EehaJhb4HKhQPdhqenEgK9ey4jmasXgH48VnKQY1SXQ8hqdLVs",
  "key43": "diLWL6YzX2GRCNgJyjTbNv7UcqRpN56yufns5bVXdhowrtoUdCwg61ryCiGD4cJTWEEWiNEMHNUD7xKUSZwyqEb",
  "key44": "bG24yoguaFxzy8xfLwVYeP6UaJeznnEFUQR4vBuTb3bQRw1z2FPGBWRr3rsD9JdokMN9LUFP4qtEGGA7TNrRp18",
  "key45": "4EyLNDibJu58cA57u8znnkc6QPMkFAA3HHBTJojmsq47N8McZ94tBDB29fWcfkUXMsLvchzsPThyhn5PdkZm7Abp",
  "key46": "7ujcyBXXz7TQz9kSySYH7T7HZhkCMGm5cV4vGj2xLuyUK3REkLi5spNRLddokhr9mjYR6SrTiD5MXXDNARaYffk",
  "key47": "3ybZyKAvtVS2aRQvmdVYuqNRk8kfX7yGoHw1w1VuQ1RVc94HucDtTnidoFe4Au7QGhgWizXNrfX2rCjjdibAzVar"
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
