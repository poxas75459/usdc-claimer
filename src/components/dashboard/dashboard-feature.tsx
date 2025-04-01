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
    "5W3F1qzVraB4A8zZhS5k8cHpfP8Z2txkBa45q7eyjsEsndf1dK9mu8StuyDQJd8paCmmgrD9hX2ivNhEDidn8Yj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMiunf4AMoeTuajeRVrFStfAdWtxPchgMK9r9jaTNS7QvtUdQ2cpyJpMZVw9ToqmKMVYfGacc4Xny18tZ5ok9ZW",
  "key1": "4oDAADR5Y82aV8VH57iPP4gNBFSophqWaLvxR2yPMmzMMMFDdT6Xsv89vRKL1k718k7oxBQHCPpgq3Ww6ke5PxC1",
  "key2": "2pk4f8VgyFgC4xGjUcadmETQCp47set4Gso2JCn4h7Rw4DaYaadKg8A9yPco7ZQpMuHBqqxb64Q7gfCKA22e6kQF",
  "key3": "5VGBDnR9Fuzp36tRjoqFQfwzAU65vQTyjNkr6wfMktEHXwA8YqodYFstCSBbtQTTuwvA4U8EVXHtaJqpUaT8TAhZ",
  "key4": "57e48w2hGdnJueg2YngiUvKBRDPYjq7CjV1yeXFTxhNHvpLs67Rx8fiNiSdUTWLTf9zW8wG3LFZnXaVgJB45W6kr",
  "key5": "2asD7qjYkbnWviQgXLckBNJo4BwHNg2rhpaX7urEq9jsB8o8YQgjJGGfhSp8vj8zp2g2Smj3mPhkghEsxJZSBFAw",
  "key6": "44jcDke9Tez3Hvu7gLpNCmhan62JJn59Vgfgg6xhY4eg7SWNJ2CLEL8s5V4vSUEgiFxJLv6kY3eoFBS1WAwPTpVi",
  "key7": "5tR7EqkpXE4tp9LMHQdjFjPBANC8LeDyD2GipdMCfJZHbphLAmVL7dDpo19FVddVyZDAtQDgLWrJqJMFXTrLdkXs",
  "key8": "3YX2spPNKJgU7RYSy7WoiinPMKSDskzUr7bXnqtKBbf4aWJfgBfpyBqAhTzpBYdnNaFfpHzLN5RjPoi15c6MRzTK",
  "key9": "5dsWXGmpxxFoyZZnbRDTuQXpAWmoqb2MuXCUWsBqUCUZ1j9vGJsA2Wd5xmHfX5JNxzgSHWyBSQkrtjZ9omh7DBX9",
  "key10": "Efjk47JUQtEq4AgT5z2mLEGfnVZUbPWQoDH7qppGWV3JYXsYKmLjQt29tVsWEiNiATdgULuKKpd2H3fwW5yjLwj",
  "key11": "33rBAjg6FHzu3ePS1Bza6gacKAM1DVMbytD6yccSe9oMKQqyjL5M1ba5sVUXrfPBwAyUSrPNSgLq5QKDuspTTnr4",
  "key12": "4ViShLMz1AfCTsYrR3u2MDiKgrcGmFBVS9zd8y5UVcAr683zKBdKGLTXoi1uZzcsA4UcmPr91ScbAjnDmXxpCd37",
  "key13": "5UcPozGfnr1k2AfruzsBfrYpyLb5tTNQbJBZrYPKfg3ZKS4P42BDLcaunEMrVeBH6Yy3DYj9ZuFf51G6YFMTneKT",
  "key14": "jMRSxZUcxobZYWVdWr2Zyo8EEdaLtanMzGevo9GQWkXvd4UetPfxL19CccNAWJgjC4m6sEFmwbAiUiLByffPD21",
  "key15": "66CkkCyNRyW7AM1X6d6sjJXg4ducyGrqVKGffq89z3YRW63Nhe8onhaa9mR1pTGsVchk1eTty5RPPGji5v52TijK",
  "key16": "2dqwFznHpAS8tRgyKvTq2wn5hEnXqWhQeUJYvG4WTLRUavbFCLQmPw7tc6hBgr9rDoRR4wsi2cZN2nsdAL9s3N26",
  "key17": "41RC2YRGSodvxnMMRFFi3V2JwgCU9Qgphp1iMhxyEwKbGKqpEya57bmnksXBUUpVLHTpxGcxTqPQameCi6if9s9C",
  "key18": "37y81tPTG1jTS1vN9tqfDQXWYsi2JSTyVGtZ1WFcms5hfemSfqf1xUd4ZmgNVhvRr8qUTnpRb9MLXHovgdU6eW7Z",
  "key19": "26Wv3Nt5wna1Svz9UStQiRsURmMF3rq2xznATFF4pj2E3wJ63h5MdV192kWm5cyyfZtmTPKQtewL2QFKjRxVwJSJ",
  "key20": "ZiwXo2WhP5k5bW8qJ9Bo5LfY67LdwWnGN1UXVBdm1kBwHFCnhcxTLVyVk1vouz3xFLouM5Syc8KYN5Sdki6cquH",
  "key21": "3hkKCRSXwdsRcj9wy3tCJancuiUuyTgJyMdyuPcLYxudqXj15bEVjuDP5YEMVTdXnJsZJGriA8b63BAbdhMBeN9c",
  "key22": "4pdBpgmDGiMcUWwXLXXHTAhitXtpixGTMioLc5YsQVomPzM49AfZ7cAp1QoYXy7VW8zYWqKRG56ARZ3ENrjBhc7C",
  "key23": "3wTAwatZTfpM3LXw3s8BYCpTpYqkmDywSRkaDTZRqNT3zjKZvidGZuJHT77x4XZRk5x4hskMjsneVrzqfa4qWUB3",
  "key24": "4kXBH5D1AArEtzD4CNKBjdYZeT2dYw9kfrECnE5VNh97oDAg2pg37fPjLUY6XHGR4hzAM8V6rL1fAwBDUD6LxFdp",
  "key25": "2nZGcJaKZvS67kQPtD55kuudBWcBDxEQgeFAnbE8aiPDzKswCvwK49taJjwCbnxeUAqtrLK5RGnYwQWiRfW1D3g5",
  "key26": "2K689rXx5bzfT3xprv2se6wZL9mfLbryeoJhYNrkorUrp1SLGDBQ8FS3DqznJk4aALb3Xvmc34veJxBARJTXzTmP",
  "key27": "42Y8xYZnHk7ymhXw6TnrrL6rPQzeMwtqd1iiJ6mbcDXumu3yYJaQ67m9E1Ujac16CmrZUvGABxnbxD2CYjoJgLNu",
  "key28": "2WiKGRmEmUEmRuHf5NEzS2xzkSZgQKsF1p1fv88dt5awXWJg22vPdS9jj5mEqvTC9rdaM3eWzjvfZ8MVDqjnBAfA",
  "key29": "3UnF2sRMHrEwBMHXeACprbLtVQMmDTES4XJpKn7o5mhN28JeMJwCR5vWUvedEJMsVuJBWEui4PkXtgR2e7otB1vR",
  "key30": "3oXtCbJZYU9F8cRGAFgJM3LxZgATUuSQpjujra7WNtrmqNHra8tiv7czyfxG55dwHYDhn63x3ifbAbc6XumiMXEC",
  "key31": "3wpnfiq8oe7xRvgU4bfz95ZNew9K7QAGizzfMzMK6VQSqnouejvaYkqMwT8S6YKxawRizp9vkK3fYAm3kivvJvvc",
  "key32": "kH8brjA5mikxMq3QUhsromseR3pEigSPsShc6N1TwWivN1EXYwM2mV6wfWxjV3GKYcwEASEZy4qpfmv6CH3JPmn",
  "key33": "4tgGHEPtUvqRKZ5w2Sc8i585mtEtpwKfFC1PKJDYmwdSYUqxXQ3YzRu6V1N7ahJ9nHyDfmJJjMTRDCg17UWhmFFm",
  "key34": "2jnbwctLiKPozm3XSmWxBDdhUuVxiVLF95v66NhjZhg3nxtL1ZtfKBUyArvd7QAPgC3gvSnWu9GB6KdGxpqN8Mgo",
  "key35": "y6jUqx9mSvNy4YqB3DXtdvqaJTALfG3duSBfz9NNq7sFJvSi3BZ6fsgxtryZPoChv99SFCdQ7jnCDaTGHTpLunR",
  "key36": "5xXSBz1JKwEUyp4JsaBDH2hQb73YJg13VSZBsuSkojHtEbeQ3kJc2JhagSRfLS5wjHLPV9v85RkzfgfzebSUAygQ",
  "key37": "2t56MMJDtUUxTdPHtPkxYxiUrQNPSQfD3vEB1QNRUmPoXimkK8L8hRBevR2NmnaWxS2ZW4p24vYikurbUKN5auMU",
  "key38": "5CEzbs6A1vE97MAK9hgR7HLBroTUtqbDJw14mgwv8BUxkj54uETWLpZnGd6LLkwU5kNfDtboeZGzY5MXhvojAaVf",
  "key39": "4jAY9ChUeHJVpdE8NgqaiKXtJYQ5J7LcN72Rpec7BFm8Bxfk5rKEf31Hqq3FebkMofdm2Jpz9uXugGw2R9vug4bG",
  "key40": "4G2WaAdC4xJ6qxE1Ri6qhcdLPMtBXi9bE9ZQvPZNBj2ZqiABHnjS1CYte1XtApxRqjiQ4q27mnrZ3mfcC125fJkm"
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
