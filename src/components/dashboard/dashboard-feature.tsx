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
    "5MUnyicTAMmJC3DV3KC7X5FC7XQMoK3qTdiQhFGeXzYhQeGeD2Z3Xm5T2RLWSTzC59hzULZrGJSE349sq2swtWbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cCy68y3s7JogjD7TnGjo367i48BksEQ2rhrPMdmiiNJHtzVkGr6uswNgnHQPxTTgDv4fatLrJBwUohcp7C9n24X",
  "key1": "kMo2mymyEAicD5j8ZgHxpcgkFKGNYsHMUy6R5BggcxyQKfxpkzpyDGxPn2c79tfN63p6W29XjM6Xxv5Wnt3kYuQ",
  "key2": "2AY4ugvEhCfyzx2Hoyn7gkXFNDcY7Qy6UMPTXeLP8tgHzFZ6Uue7qz9mXVxumsJApWUq46tWQyju2NUBshiLt6eV",
  "key3": "3mFUhR966DzUgyYpu1fntK3frZb1q44KjsNxZH9PcjSQB5cJsSt6HebxpwXBUCZ9bFKwACNATr2i5Rhs7u2ve42w",
  "key4": "rHaKAxEEBKQZhVnwqfqydScoqWoVA8rLZVYc4DNAqdzKz2FvhtiKGVXgeqmAWW1o9TSjCjj4uFioqxsvXjeBAue",
  "key5": "5LE7BNqxCgm8iy1jMUCFY9MShEXCWQwXkCRY43spxph6eNPBMyyqkkFL9yJX1aSHt1eJWpEXdphTsJEMbv7wTfpJ",
  "key6": "3jBMJTFNiEokoSd5NQJcwqUmv1xg1uDMDFTdk2FJTJri1MsDpwjqrbZNqbTQWtDnbbGnj9gcSW17YQnaZZJ2vwmQ",
  "key7": "oQ9Z4AtEAarAJ1T6ZDT3KNrW31nqyc1wqpSWk562k4TF4kLpS4DGDAvxsdaZykB4BVgf1ntapAW4MxZPs9vAAL5",
  "key8": "3jb6Dhf5frRfSJexSSPzoWrjBHRwPNai2dWFR1VnhZTiqdAb2iuUmmkYGgfW5cQR3mRBQfJSB8HgDXbSug6ASV77",
  "key9": "4r6X8PYT911f9icKcPWrspQV7Q9wiQHazmpLJsLMhptFZJ9nav2SdWoi5g7UtA5TpNiheBNRuVTJVGgYigGAsBHa",
  "key10": "4DuDqQwekDHTxsBzTG6gCRdjrsA3ZfvL63Py192iTRdvdTAMGV3E8fWU4VWonGbvjum8okpmb7c7rFYcQxgKDwpQ",
  "key11": "2iSJuQ8coicCSBqyA1fvJ33aEpgdDekquTzKatJ26zh283GX1qFmPoMHLUbon1PdbvZqFpFqUyMDDb1UZEhr6sjJ",
  "key12": "48882GeWUWg8KnnVTa9znVNmCLr7wFq37BbtA6u97bg4hDKms8fH1jGm3yurVpL4F5DuMsE9urz79vjLBVfVPf7",
  "key13": "4SPdgHGZ1oZpqk9k2kLMGs7DLc5maYUFY4noQ1uiCALYzaB5L63hXNtD6ktcU9uwAv1iiDpjhj9ebfhuaSSGk8qg",
  "key14": "3K4yvAPS4VwqupdDCBxmi788rVb1ikCAGkpuC1SDqEChEfAFugHDmmRXwdddMm5MBaZscbrGXPHavyEiWmvab6aF",
  "key15": "3NDSqb58n3UXMppw9DZPRPSetEcp6YTaXGnonG7H9r31EtsnHm4L74xPJLeHTuDmPpjgqURzgojcuW2oZEcGiF3e",
  "key16": "jbtcyGQ4GdpuyXjsMmKHCwYMeYL8t35boTmLCrc7UwhK8nMZanCQf7pUfjTa1yzKsggPum64gFtMnvB2ufeeTzt",
  "key17": "5RvfjbmFSAvExdbvCy59ydKHqTB7aSV5S9vx2EbFxZHbBh4hsnypAUTy6PYw3o9d8nE1FBpBcjyiCN5BfmubSaQ4",
  "key18": "2rKhVqVySPWw2hcNKMjc9kkE9tg28f9GoMCeoUhzMGWQSEjSbAM1K6qafzGU3ZYxbuNF8riNQvRqDR8uJAFUo15v",
  "key19": "453FAFZJXtsbvvw1xKKkL3jHi1ogFpBM72hh8EVDZyswWgSkZHmZoVngvSL6YrNmYWPw9atxs9m2nbJbNpPbrnLY",
  "key20": "5CsGtADWEZWLj2ApFwqMAE27NPqxKyvJaok4tRmhpHNTdbScVXGTw5PRjGna6fbV37GFxRdftWqZWB3zBt1DcFXJ",
  "key21": "vHSkvDAbEuk1yCMhnDvc4NtRFHLVSoxM2p3cbbNjvWC2AfHArenS29WRPpYogFy7DBHuTfaZ7EPwdtcqzjVCiVG",
  "key22": "4RRCeaKHezSzRmStg5EEguMnFQ7E4c7yFBRoog1c9b4dnsVg9V5kE927HeUei9ArzRhVpYfGHc3tmvWZ1er9ayRc",
  "key23": "MS2MLJ59XCWNUCmpj6W2fjRSw8MQrQDhT2s8ay8LwXcyPBmtba8RK5bf91onHjns7PekgxLcf9sLCNmiqntsy14",
  "key24": "zg2ZaxkZrMxfdVV5va33cdBeXXKQ4W7iPZczzfaCzKdtemdYJb1soMTWcfDJXfgM8MSjsXCwzmSgJpeT45AUjfK",
  "key25": "42fF8ykNLB9r6hXW3wsDieJ64MDsiQykvo8VGqCR2DMkT2xof9eALfpLJ4HrM8btdsZnBMVKqjB8eDEhJS9ykRDT",
  "key26": "33NiDUMJwCDsBmwopMnLmrrbADSaMKpBZEcNDvj5jEH7EuiDnfLHxUpCaqiCU98iNDbB7eMJ3Z7L9KKCgCAaeYWS",
  "key27": "zZKYiXKWp5T6uph872zrq6jtJr3w5UU67pTVT1NRtd3X8XxcMD29bpBTvbG1bABzMdo19Z1i2dMPTNkriybffQA",
  "key28": "5KA8EQCKhvzbdo57ADkK2qh9iRj7yhJwG4g9JqfEKbGJTdSs135JMKGVcwQceHEKyMndzTsZpAgAhnHsMrr5uH6L",
  "key29": "L419Vg4vEfVjnacVoqDgFEAn3pBwe9cwMbaV1Wubkopj6KKhsyqQRaC4JwXNthFN18WmowkPUjnW8xh1FZJqmst",
  "key30": "2E3npkaNawT2s2d6B9QF8Ny8EXWgozW5sW84MbpxvTRw7Yz5R22yrVoYmQChwkprmQ45G98rbErLTQb1uooVzzTZ",
  "key31": "4sLcANy7eS5j7rhY46u3KMUZXS2LrG1vs7SoasN7JPxcg3aNnivRsYMSbkmmbSvEMxSpiCBghh4PYgzpmWia6QtC",
  "key32": "3ZqXiBv2bH9XZowWGLnu8Du4bau65rdn2dvxHF5E7vwuvEGDTAQcjrpK3doKBaDzw4GbCupbfDs4722XVACRkkLC",
  "key33": "2Tajmu6fyU27o9LyzxVG28VYBDBmiN3nCXYiHwtubzVJ5UbPmxyViFo18RzUWA2RShyZ4R6fptDA6cdzmsY3Jh3A",
  "key34": "2TXS2DhGYnwHMij866ZKVWg2zP9EEbeivqB2de8Z6FtNtpxRMbrb2BGR6MN5XJg7AP6AgaCGsaLgA1F4GkHsev3r",
  "key35": "2cQyj3osYBwUPwdL5w8ycpwma1nffRq5raoMwsepCCxRaDP1HBxSmGyWp5wjcKwDvJNwrpyNHhDRumnraMGzK4VF",
  "key36": "5X6NzW5VpZqEtv5j2fAAqjHSxzydA1v4woYfqacWiH89qMoTUvkhT7YCxdm3hhwKNEy5vuAH62kw58DqAZXDqQMm",
  "key37": "4PQbErRpjjhVSNnAZxBX4Tt2mGXbhkt2LVygQKPS246YRMSCqEzkKibEJ556NkfU74aYUMbEpyhPj8mHfqfffSMJ"
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
