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
    "5SRgivNVEZdYn3tkhDCC6iLndNbcYwpHUTjnTSaesEaQYpr3qEA2nX3taJrN5Ncesf3uRCZVN9KwUBNVM4Ppu8JF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZWxzfhXQKtQwfvgETurEHrhHW2X2diiDdMHCDS7V26iZVMYp3LaZDZthvqSjeKxChR2fPPdWEUNa77zn5wPJ1D",
  "key1": "3faXUsRU84amA2qudrkCe1NekA3vJ5Zdn8sVP3znRXipKrFt8n2MbmuPb1mB2DEwFafcC2iVM1Q5DDHEjAn1XnGr",
  "key2": "2QWAgjomnA9pDxoSzgncvDRoCQU9Srt59P6Wh9c61z3vrHtAAs56Ppy7U5oaRyQabFFHa2yEbceZSLiKgPm7damM",
  "key3": "5LBLV75SQZpxNAHLTigmq9CqNHazNB8JiJAuXwwmS2DyaPkT2Gb2YWvHBGNJrfcr2BBf9teWFTT2mxaMfoZKmbs1",
  "key4": "3BhSEmsv9QmUcBebWAk61jw5RZFgDcfizwZoFuYUcXrJyCL6vgCZSJs1VPYT4Q8nZMnfAoRHUBw1v469v1HmwoSw",
  "key5": "4WCvXjeXiqWPQ3th8SZ5ggKTukWFFsV6eNtS1eQfjPWKuBd5KLXrWfmbhhStGYDrzTJEHbSDbt5EGTEPKZwNpiKb",
  "key6": "4xCKTJZGcHZGrnmYNvjuTJkhJRED8dADBnuPHn2QdB3jNXst7MrzZwMV1vZgNnG5NeqXAmmEiJXLVddLeTNGzUX9",
  "key7": "KSBzEoH3E1auPevng7hKESKfnWi1YzvXnva5ubpkyjRCrBRGa4viFL2Bhbia1htBRUMUHFS4eBMquUo5oejoYBF",
  "key8": "jC1N1PDsxh8hYawAvVDvuWfgJ8858kF5Qqwim1S1HmAKsKjCJvQDk2964UrWNHDhhKEgRH47TJJxS2qSiQ2myqf",
  "key9": "4eLeuP9yrDmM7D9nWcjmjVbUt5Q5SJ3sxVkj2YyxQuLyFWXZy2EUry6gMYrpzR9G7RVLjiqzicKweojvS9WWHXfP",
  "key10": "2qPpoWTR3YeT74JEx8nG8H6cb3miX3DLnkV5PzuvwP7jyTsgsALuqLHEaaHpLnSTBH7rRxTHZLFQAFxmQ3zMXd75",
  "key11": "3ahBm5EoJ7R77CyGtbPTvrdH68go5dCSTfniDuuScuXP7yYgGHmcvDfr7CX17m128sCrf5q5hLfgw3tCfmoKwjdb",
  "key12": "tGu1N7vjcQrVYAK2BezU1YDqdf22ufzjmrtV7PSgRKSSWpUcBwgFU633G9yHi6qBRMnppaPi3fkr1jjyi7ug3BP",
  "key13": "2QQ7nA6rqQPpqNtJPs2YTPNdbSviTWnP67Z3gc6hL6xu66nPuYyciPac4MY2X4U41qCb5W37Xg1H9T1CBU2jAT8k",
  "key14": "2Cj5Q7P2RDvte5hwLbgun3YgLyJja1mqppPjtAs2T3R1qqiTBow16nwrohj4SAdMJajMMSct1PjE2THkrCcWsUjb",
  "key15": "4be2phu5ZHyMT3Sfxr8kvTa7PkZysSGdGR5k4mCyrYvxG81DsJXTmprU5EXv1CW1a8DjYifvBou9dBG41EkvU6rr",
  "key16": "YkiXjozi4DwXBhvjpd9AN5m7jveku2K7Hw3QfeBGZuYyc5YeADrDq8JBDg5pVk2F1WUM6qqBe5j11nSR29n6Rwb",
  "key17": "2ojAXZ1zwjsb7fXDQasHYfVrnTEk4vVYySHD1N1N8BodKWPw4dHWonNTJsLYUf9QnCkWiZfMpH3otasfyaiiChbv",
  "key18": "58j1jMyzejH6Fm8qrk2uFGq8rxD9xVppMusQxQ3QkRsidb2jP43rCyegmSG7EvriPbJghFbXiXcLQjf6iRmz7L37",
  "key19": "3k1E6jZN65nSd8T6fpk9P6TCz22e1GHqqb373ANKHYkqksBHj5t55eQbNuD83ScqgLd2iv5M41tgn3M3Kop75n1n",
  "key20": "vMKuqZnDKS4cXdp4qm3zo32K7E3ut8aZyWH4nAHWKdss69ZosiREhuC1v8ZyumMtTPiUfFR7EkY1SyZLxUeDQSe",
  "key21": "dWsWjoEji8YuYtY4wGzduTu37GvyqEzLXDuA1kJuCXB6y9SBXEgAQnYVztY1c9oBgzEMX4b4r8Efjwkia7d2niq",
  "key22": "29mvveHwi7piHKKouidTavZXBZzhGuffmUwavpcdeU5pm6tyhtRwV2j2xfMFoHwERv3WGeitWM42t38bXuPxmgcC",
  "key23": "4AfKkpiqSeqWHRWmDk8UV8MQY8uqqfgs2cS4XDPTUXbCaBXYjCcQw5arABDioqedDCx2mvh3hN5A7a5unkrm7c3f",
  "key24": "3A8SYRE89yeYdj9WKuRdB55g33xmnJ9eeBJBW2hYF13m8aybL7JHJHRw8f9ui8LhCFezZ1PuQUUFTNubQBxQjeRR",
  "key25": "3K5qDgaKVxBXoMcBJuP5u5WFE24PyAgm2w9FJLbbSfRttxFck2a83hG9sBYV3VCKvZipqc1956NWY7qk6f7W6RCz",
  "key26": "gdWjZwj3emGwMgXbXRiek2kPUex251QEREAFigj7XWsojYZFE5tDk4rmUAYZCCPceXtDk3oLUkCTPhY8w1nDv2N",
  "key27": "2mTs4EtsTRfncwLWfcBQj6qjFw6PLe5fxfYBfw3FH1AHfUje475Csp862v39y3o6UgcPBNDLY3XGFXMoJmfXFwF6",
  "key28": "PSidGgr6Dsu7CCKW472fESpzpKzKc7aJkaRKwXt1pAHYfmJzvaupSTWmDofytUcjhXdwMyQw6cTScApKxXJtvuq",
  "key29": "2qVUGPaZV2GcvmNVU187QkEV6WcSjXAMGwGCs1f1cVUomYshFbL7Sc8QUCGKKPyvmZNW8Q7h8DFoXxG87mNieqYE",
  "key30": "57AdZJiaV6kgkfvQGcHcEHUeDZAeVaggfKSYqmZmudzTXx8boPWEhTFfxVJ72Qh2RLxgQbZcbBvcPDhz2juvVr5P",
  "key31": "5ohJjDfUdhxUcNc5LFuKYjUBpCs7WLqG6PCD64mUHqrQ8mMH23GT55PZXxV1tT4RdBDygcu1hiNS51cpjWMDQqpD",
  "key32": "2WdUPe7aaP2GiFqE12u5gxxgpVRoRkKrj3jRV4ni6Bqf67MchmWgzsFcWT7qCNhUz76fSN9hwEGP3bfjMuTJ6i3w",
  "key33": "vTueCDFBq8qiwhiqdWwhX46f91NkmfJM3ZThKptikwNbnR3kjGWVZmThbGg6BaBxmKSCnq3nvi2Wi5nhctVkoXa",
  "key34": "4NEGfjsRts7GTKEvhsVSqzJkbpYpF3yHsq1BodW7w9VK92Km9gyzhLf9axey5DCz7ejqSEwMGmmJREq1ERbzw21t",
  "key35": "RxeVgionKTRqUiAexhgSswQeTUJe1aK5934HxwqkhnzeU783PtCe2VnCrCkj72BwJrZP1DRLuQuGFPu2ctjueMX",
  "key36": "67WjSKP9rn36cKhaC1iHa5K21nEMyMc7MSpCSMuq2Nke3xrnX9eZ518gSzkXmzwUpEMf6fGc9M9eeeRDcAN6Ccpe",
  "key37": "5iAkm1QvxXKcTNx3S7Xy2DSU9dEGfj9wKTPYgPvM4zLWLch8NUuFZWpnYw4QGmZZ5Wde5r6cg3kLE8dnbYSYCzXa",
  "key38": "5s8CGCv3riXnjnF8fyEYBS1By1PpKzgfgfsXWtBiACXr4Hu6oLg7u6EZhcKt5cmsvwSQaUZGQwh6a1iPWRoPBoRm",
  "key39": "2YPKQ3kPNX7pMrbiCQQYFpPdjYYrdxYkkwLEzNqoi2Lfd3V4MhxZ8FddjBUwwyzejdGEUzXcsuxQw9eiik9iBLJu",
  "key40": "4imYBHkws39sPPDDt8RPReTk1wJcMCSgrfdsDwBgML7E4Ssug7dGJKQh9w5RZFHH7yD8QRCS98iNJNtxr95eqZi",
  "key41": "44XoAQ54RoCaHjMmbdvwK6GrC5pyanRE2Ht2V4DtMWgzwHkiJRVnqL2Pvv6pSEo5FYfemSA4iYHQ7NcHvQv4rvBP",
  "key42": "oyt7XQH4ga1mgUq5fsSHGmDVtATML7FjqYcL1sZwfVVWtjmtx9igkEBZQCkrunmUNwBsbRptMeghEZbnRndUJEw"
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
