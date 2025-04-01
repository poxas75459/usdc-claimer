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
    "3Hbin6SeqBHNxV9DFtSiUexTVqSGU6efjTGWsmH2phSb1bwqDLJFyv1q6PdF8wU2ny3kGqMRYvL5mKT38W4EpaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244tTzwq158GLMDxux3MQpHre95okmjQ4YfhcH594WwmoQQbVLP9nTpRo4p85LM6bh6UEmYoLD6WFtp4vFCok961",
  "key1": "yx2M7sxHdHNtZgwZzvArMzUHSycZRVpconYZ4P7F8AEq7vWgMnB7k7oNgWsKc4V366aDVc5n5924qN5p85N2fVJ",
  "key2": "4ELaYMi9q2Szxb4F3rFyuwN9JEiqkv35sepJww7WkjqnasHgo32RcToXzt5L5MDsjctpktsW3ep4vhVhu5bkv4AN",
  "key3": "2djpPvFidnFP9sKrwXhuDvi2CLHtDfdn55f3Edwd46fNsbFtKBb7GiZYx4F3BppHmYonArab5RtNs9oF58XpW3JS",
  "key4": "56HFsQzPvfCspfWt583Hj1tyAG27rQgJCF1ppTKCdQFmtZgrXXGYP6uAcDf2PfDSw6unEEepD5rDhVCrHWw9YAFA",
  "key5": "wm9ULoHqqQAPRmosm7AztPYDYKehwsNkEav8pjrcWJq54tTUGaJFWkcAwN3fYCFb6qb8UWSYZuvg1ohFoMrga35",
  "key6": "5d7PE5WTnfTTeRYd4K7wSEvtDXYtoErWFjb4Jsay2HjWNnKyh7YVLYiPQThxgDawiPU3MXndbdMwj1cPXxRiKpHA",
  "key7": "KpYyUk3F6TKKYoM51fUEwcUPTRkpSz42LEd7NSXua1oTdduVGAGJTPLYan2QWYGkwHSzwR6Vpg3X2VhujMjGYn9",
  "key8": "5FeWXdS5QnkwR2nPocFk8fAgbqHWDFQ7VYiZ19WMNUkUnkPXUAknSJMyLLV8vjqETf3RGr7jSFsvcVwqQXEhHmda",
  "key9": "PRdk5QFsGciQUHLEq2YELd2z9aVfv23YJzTnFr3FcJmt5ACKrqiMoQFubbXVPhuT2VQ6JRABPq7AvWiXkmmnw5r",
  "key10": "38Rgh623CJmrfAbYE3BereUvCG2QbMwyZSby4u37dgBnFFgQqw1EUVLUAn5zuacKr4uScWjo786C1NwZcJ9eFre9",
  "key11": "5evpetuWAJJDeJWT5i1oVBBzR3jKAJNeHyZRENZasWmcUENnJfZzLA7NZgV5QMi2b1veaCufACyxXu4gsk17AUqC",
  "key12": "2vM6NQ1hkWL4vMLpcr37NaRFBhQsUJtGFA4ZVMpHgoa4WoFybf4nVQo8qX13R6Wqf25wg8vHiPERbUHLMMnSp9Cn",
  "key13": "65QmnqY2DebkDi7wCuuwjKupdXBkJcTAMVCucsQbvv2eUPPTSoNSgR2Mcfsz7n1LcHnYXw3ypJRPTsrB7ePdUd7W",
  "key14": "5rnmLPBNC8jwz6DhHAqw3WuU9B9aMwP24S1P9jxuWChQoAmzT3Ji3s2h3pzL9xWJmtvwGaGfCY5vDhJ5hqku5p18",
  "key15": "4LsrbbCKQkUQVzJ9QwU1yN1kiypdUT4aEo8rXU8WqUYZMiB156fo13FmSxUAppqeY5eeokYouDo8vYv56JbLuCfW",
  "key16": "5LMaLYyRkFP7W1b6GWMs2eWyCeen2oLyH7LpMcpLCUzQaEDUvVtcciodwih6dEMLtvBkrAL6YyG4MNCRGYULj4k9",
  "key17": "3o2eGeHU5o5YnH33yCHmDo1wfpyrhtce1wmNnEyEXynZmb7bzkXzQaLvycJ16LDsgNSMRSkkWR3pMnbpRmtw1JRq",
  "key18": "4aVh3LZiv9Zmi4PVg6ixcTTRvdL24sseUDSPfX5agUkSKY7eSgGCVqAbs1XeeZCtqyHSzaxrM5dsNz332wyP6bMq",
  "key19": "2uHL9mtPzo8oPL8vHtJ8C7ZrYjsYMPQD2QZjsmntwJDNJ6UWD9QJXdyUFpuseFtZVcFYGyr43y3ZdYCfLcZ8ojZD",
  "key20": "2NBya4bVLNkfV37AKgC7QR8tqeTu25djv3GbragrhwVMNxJZh9zZfZ9XJQNfmnLq6BqDSi9ZhkN98NeSRVFoqoEf",
  "key21": "5t3FYRahkpSg7YiQP3F2sLuiMpf59cZhramMiakAPJcesmpNciMRi3W7so4oBdohJaskL9MFm73WFRFHQ9jKg1Np",
  "key22": "33dYKU9WpfpviMRbzLFzXMnVR2xgsn5ZvS3g1qNT11x9P78h6nR8YkEW6nHD29faqvBV5iowMFDMPnVag51Hqvcc",
  "key23": "4asgdCQe1HTrXRzMfatiiBSP1YPkb7gBxpUQ56a81xsGUK8WwnktaDZJeXfNxnow4DiE5fFjoEceXPc7AeHc669R",
  "key24": "3kz96petxHufNd3z6nRdu5KoVyt4DeaefYyGXCcjDDxYTowFrKcmVqaHayELGcbbfNbWPwME2Qc7ywGtQAE59F8J",
  "key25": "4yWbghcXmLtXibeL9K2CrpYLg7na1pAvTRNLAxCtPYPsqDPtgykmmww1eHiPRRtmmeADUkQwWXUUbWmtJDAoF1y9",
  "key26": "3AT5dRsYhMiqmtGpRffnWsMsrgdEvdhYKRh9XuWVnToDP4WqPMQJy2RMo814bQwrAdQT2JdRd9CgMZRZrTN5CQAR"
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
