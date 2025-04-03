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
    "2CYLF2Ea5HMZgfCAieycdtbqThAc1jNP33Wy5t4jiSGqugsY2hjW4VMyDPyBMwB6qTRZcWBfzkq2ZQFYsfrW8Rng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M25xG9tA4ooxTYkC24FRMLrBGkmwJyyHKRnfQ4N5K386opwcfKyfJqwUEDr7vgdYamKxCrf61Q6ecyfjBRY8rRK",
  "key1": "EC7U3CyECj8d4XwKjKzh75ZX1pZ5qk298Gi7UoiXYuhafVG1PxriXCL3Ls9h4bod1k2hBdRiWxiwK23e2VtpQWY",
  "key2": "3YRhCsrSuu4i8HB2Ao8jjE3kRui8bEHmH2JznVgXS4JTC9xL7yaFi7L49PDmA9dewDC3h96WboVRbQwpptug3XD7",
  "key3": "3SSWh677HBhugnADvDHFccQScwdWC8gT6N3zZjwR4fxUGYAQVnPqYTX67bfYzEut3ue44KhmUtuBXKYSKp21v3tM",
  "key4": "2h3F2339sJzoZuPNNDFU6Gegr4upyJoKFdYyTvvRLNEx9dAQtraPbnASTjH142mbatsSHEcJQpHpmhBTMRDtQ8mi",
  "key5": "4hfx4xm4J8Y2cpsDqXQt7fVdaoUEkkyYuCWm4F2PpNy1QdB4eo7GuUgNotKTqPWJB9Lr9CU3BbodkvLbdoJcQo3S",
  "key6": "3LEd5dnddqxfcV8mykp8CVELMT1J3ZnwXxtiGp9Ndg9pswaWLQcpq1QUz5wa9sBJGJPof8uxbaZRPhMuUKr4nM7k",
  "key7": "5fTrNNiPDHEfC6wR2He6CQ3DdV6YtzFxyTyQdWEAqChoaETvRQwn884gPCMuicW9ZhYb1h3wJaa66A3zuko57D4J",
  "key8": "4Xhj5fZxwYKBvd56dKQMy5sV3uAT4KSbzYRYMHK5x5VPMP4ERXqBSjfeVCtRT5uA5xofD63kmd9aTgynvJ1JSNoj",
  "key9": "3YGiMYSbH9Cag6vHyvtxafZAbNmPgfoHJ5ViM37vhMF2vFwMdZGU1AbKmHycVpYKUA2mFLM85e1f99ww3JUqzEjC",
  "key10": "2DTtHNa6r5SzkWNayeAFaCc5TKftnRK7C4i23AdLhRBjEbaSYaWqAoYbFLC7SXwo9cyR59a4WPbfNfC5PNMyBxWy",
  "key11": "43bVX18QciMtiqVTYV1P13KKkkUhPUqP4dUvrDUxYUvmjKcUj6UYGRKbUuPbD6a8WJFy9HTBnMS7KAGDzKzU7XQg",
  "key12": "45C4m8DmboWa3cMgU6EvQYmpSnJophjCch5SbYDQu9QjbqXzeZDM69rAJjzENNp5V1FSJZc41MDJHvmh9fg9GseL",
  "key13": "3YDgLnqTvsyjFQ5komqZApMbDa7RMcxqDTtafvYKpnLjZCuYiQhVeEshGsAoRFLSPrfjmfbkPcZc3Cacf73Qk5Qn",
  "key14": "MNSGv3fktC1rQXeoYVeCkhdR4YYuUhMK3AAyffU9gA6zgSoVZm1Ukh4VakRFngLYRfEQjLVXzVPVn2uFTjJVXWW",
  "key15": "2TmzZ8FG1BV9v8PsaxYedgmbNAeCMysM4WHPNNwgkpqJG2PRUL8PYJrBuCEFFC2MdxQ2NkrQnrH659AsYmVtRzPg",
  "key16": "3K8Mu1cM9Yo9CiGVBQaP8QcUs8iiGoL4c92VFvDfiesRpGaaR9iz3EvNuobtLoTLtEYigYCkfwUZPptoDthN1My8",
  "key17": "t5hwwUNLJpB1K5QaDWF7JciLejKHGVwLbw2GqXtH2ALuYdui7zAS5UkSGWBjQ27XWfjCNrr4uG1sPuNquVUZNvd",
  "key18": "38mskyNJFJY6Beym5cuap5SMb6xSfKAvC7LvEYXbTSnvTWKtXFx7pn7Z475arfHQPRVev72L5ZRBkp6Ch9kZjaEd",
  "key19": "421PPuiBR7ZfUnKkHUfCRF7HmEqd1KoZxtXAeSWBwdcZUuB7Jsuj5w5ne3yDAzJXy7GnvkCSmC685jaTkZPPt3FC",
  "key20": "35gi1t14e1DgaAA7kcFoG5wWeuLUnsENepJXxf2FUdzLcCNUHdyfWc4aZSVCYgNrBHQFQeqPnWaerkEVAATLBLpb",
  "key21": "hZVsX81Ec8o1Z2pyYpa1AyVjMCf3FPHVwd5zXdsQqWC8ciAPFMtTgSFsKdiecpViFhZA1sQk3z7zEc7AFU5p3bT",
  "key22": "5tKFy65dmjXrJYDu3TawkkQn6ZGje4TTeq2chwcyZfhU14HAoZ42oaiHtMfunpNj9L2XgKDjSScK5HjzbKnXcf7r",
  "key23": "5DFpPDa5SMm8k7guU5QkVWaunrrdfJyhCbxeNzzR4LsF1m8fTzHSgdpjDFriawn9TXyfZaDZACHkVL4x2Lzh4AAY",
  "key24": "5ttBrMbnvZmz4n5khDDfyQbyQYEpwB9uto7t9LdUHCFtPHMiVTUTzPttNKKL7o1mj92uKMoAqztVBVphjJCYqCoB",
  "key25": "3mZMeKhbDnSLPE4WHz1sbQ5dBj7aWmNFipqPpKCc2u4QE4kmMxAWVUv3ueVFubvPHatbKZRmR1XMsEoH1AVTbdMf",
  "key26": "5dnabJFxKrqpRS7eeoze9iAaisMFczA2cMFe9AFU6p5in5GkTHBLodiFpQhFpp7PanemERPcABoR1pLbdE78tfNm",
  "key27": "66TRVnbNm4JEkjbYXYSvQT7WwJkA1BE5FPMfbkAyck4VdH92Was65wVAC5NMSzGtHtCKrKrHc8J2PKxSdsWkEBb",
  "key28": "3CmDUryQhYR31j2684edbJm3dAwX1WC1zk5TZiNjQubAvQJCzVCyTwhQht9y8jqm1Qh6wdwe8Sbwpj4rChynupEq",
  "key29": "4zKUtiMfjdMoxbciuSgeEEXg9SJaKGN6m2jEaFDQi28dieH1ELCRvKCVm2gwonuD4bgmjLwp36Ggvr8FYVHUcpQM",
  "key30": "4VdS7gWLPsRqaRUunyUzTBbjzohZSJNw6U9RjgpiSwSU4PGXNpMf2fVppb5nPfEU1mu4KHoQ5ymmpFEedToQtKWU"
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
