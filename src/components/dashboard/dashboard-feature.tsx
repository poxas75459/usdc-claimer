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
    "5HMg6Kfj1iZFciXLDtnt18SKfnubcPt86LXyCf9gfetgXAwYYuksT1u2D7oSJ2xgVAQwnp4Q5pjyK6ZoKF1HqeQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FPNGbxkEhRxgDtmJKAMWtQy4zm9GJBk2iHehYL7nKg4xCBZ1jHKonwEGfPMmXQZDNXH8BtWHShCXCGvSRq4ZL3h",
  "key1": "4DjYkLvqRHfARcdmkGE5qLxgVHrLSTbLqx6ZbM9bUNtZedi8vjG1f6pdpM2pvDFL3HK1EFHcanYDUKi7m4yZ2wD1",
  "key2": "5f6SkCo26MdQc8iFLoMd8ENam3yf1Mg1gYV9wT1knariLjLXQ9Jg6h9WrZm15dfqfBvNNTxR4gAEBxfA7v2xkK8R",
  "key3": "4XrfAkoGa37evGo8osw9ZjrGJ1ALoXGkcDDgUL4nutMWjpgsixQJhdJEXoDfxuhovjxwqpgYkbPENC3bKtoNbQ8D",
  "key4": "3bamsvsdZ1NBFbqKFTFAaAevZSbvkxCyH7fUKup2ijktKhKKdtAgJ3aRYCok1ziLhGT8PYphz29EGCTYeY8fELkf",
  "key5": "53iNwVrC23z5gJqrHAGwpN85ey8BeX1xQSNTNoSMGGzaBQJyUZynRQAxRWGzysya7keNPMd7JQYU8aeZxd1ELYD6",
  "key6": "4V3kBZeQ6chiDVX1drdaDykCq8knBKgTQcPK69EMkJr2KBXMgeWWpqcNktK4AgXUaBNk6iyFjtPu5itPbH335tQK",
  "key7": "hUK1wSHiCq5SQ8nA9NPQ3NRM6DtRDSaxatPagR9YUQcu4iWcwrLj6J4yLYSVU8eR7bC7kUBuHZsCyWVr5EBb8GT",
  "key8": "3nPFbphM84vJr6YTrtxvbDBvzVpjmmJCJj45nPQWxyXrtBEAKa7zwCsMbwYLqPkoizmyZC64A7E4gutCzP8C8zKR",
  "key9": "22ctsyJNpUprEhBNmDneotU276Cy8qBGAarw8j427QRQbj5Hc8dnvBLfRV2ysCQVP6HxwHePevoygWr48krRn7Kf",
  "key10": "4JbZ4GcGLmSQpZGGbQA9AUwYMzVMNsvYJtmwUJqjZyeYLrqj3QhPu5Wg7bxCrqudMnzc2tfUNDGmne8YKbp4LBkv",
  "key11": "2Mwh6kDWceQu5MaKZZbL93pPjR4NrfgrP44r4Q9sfoagkpP5GMTiPqt77BY8dUZC8Rjpk5VQdG5Ur6G6fwTzv2po",
  "key12": "3xZkJVgLy26KmR24XPZLLbSZ9iNq2NdGA3mXr4uDz3CqVsjtQwiMm8D6UgjFxpYzhKrceJ4NNQLu2q8WDXUQzWad",
  "key13": "3pnt5bV2jXZFHmf9rtiHTQpJn9XqHv7Frea7NjTMnvF4nASuvuB61J7rGxACEECPCvUiLKSa3NDx8WC8hfa4FXjV",
  "key14": "5QqAcZkPu8bhjdWAjzWQAusdeAWHXwLfJZCBPqGRReXAoTEtMpN9x8YAXxuRBAVtpRx1pvryDjUWBKoC5CDvP94F",
  "key15": "3yDvjsEaYwKfV9kWaAPKSF8T7w5RDJGLTXpuKsPTyT3pX6RKfmXxzjzh48rAd6QWTn2NqgATghFvRoQi3vHwJ3CR",
  "key16": "4SUTLcrPgsyDHkPMtbQu7Qi95ZRRJjqeUJRDE6WbXjHUCouem9hDVk3JVuGEYNxbPhjgzevWA1Er5TegA2m4MSTD",
  "key17": "hcccgqJzCskNWV3HyErByViiA8oKBp7EbQkxLNEL6g1sNjAxXbMWoeQxexBZpMY9J5wY75omnqpHxpn2T9DyMQG",
  "key18": "3xECVnmCuzgbeDyG8NbMwEQuLTST43nKpoZzV2sy2raZUKM3SKrS9YqJV34dUZX2yeppJ6GwSEWirbdSBn1TrgQF",
  "key19": "4AQy3cWx56JeLQMpCR6N9C7Wi1ukty634tHxMkaYEEZY21wofqueAkjyWpZNLM3YQ2ReBpBawKxhifgfYnpfCQT7",
  "key20": "exy6hvhU8xRMGFo2vhfFabcp9xpGStm4jAt8bKRCmX2nQ1w448i3JV8K7dJnXTAok3WEpWWSd3db7rPPzExpYN3",
  "key21": "65kPU3wvBkGem3ZBqA8dVpVtuswvA6CBhgEJN2RDr4R2TapeL7BusFKFBMQBFaofA24mvr6NVnnjBK59mYJBN7Ys",
  "key22": "3Yi7eLSZrJoJSeHBjBYLZMyYaqVwUcHN5KWoAyfw8SK7oTcL4x3qqeEmtLsxd3aasR39r6TdjpJM3362gXEJP4DZ",
  "key23": "2NCeeYsewWRRN4UJZMLTu8PWXqw3TMrZWVDjwjbWCfBATfirVsn2Zv81y5M4KakWKcNxN7DQTDk2LLnATCcMAEQT",
  "key24": "2Ko9NN1P5npi8iEHmykqgXkY8TrDx94vUxrsop81YihDxavdJ7n48edTLGWjMBGmUttJY9CBQnbmzdquJGhMuDSq",
  "key25": "5VQWtkXUSNLT2nuC3VETsaVM3kg45iK9w5pVRZVSFkmy3g1TG7dkvNTAVe8ewX8PBu4HRaG3pnp5GAERFjf3NBuj",
  "key26": "qyLbmfrPZNgCBozV1HX194RmEEYd49k5y4NrLwxPDQrDzujBrWS2UX3n4UNJG36ygH1c3V57VFEMh9FUCXQ44g9",
  "key27": "5ucAyB4qXyae3LMVpc4goTfijQew4b5AWQYZA3MZKq4PFW5ESUY8CqeN5cTXoiDzwXdnRPMxNc7uNk4gnHvd3MT8",
  "key28": "2pwcADDKKVUAYaJd6H3c7GudMW7g5H5yPpBdndb4oxq4DQmd2nNy4zjG1asEgVoaLrrrGT9WQ4bJV1JdoozjXuKJ",
  "key29": "4z2qkhAszZ2xMXzGC19Lkk2PpaZaWEUdc9wUU7yxawPnfSs4qSJMbnjrs25r4hiiPrSEC3uDrkAK2zWhsxeG2aFg",
  "key30": "489nLZZEGPgJZmjgyDbhqX2eDPg5E7kNuNfccNHCmEJk7oFef1SYnChBh2FJtddjQY3t9gnxy7cyE1xQcfFZpirb",
  "key31": "4njw5719JSyfatLEHHBnWdeVXLBvNQqJ7CkZivxu81qvu9RZgxho3ihUjQZU4UAQE3bXBwPmniF8F49UDbJKMyWa",
  "key32": "U9xHwgcZ7m5WG9fh3FZrfbMSGmr7XHajdvkdoctZBmrBsKzvsz43Xfkww4PdqE7QnwNpec14gK2BPhbaVBgJAVM",
  "key33": "2W9ZJR3GyrmqwzeXfnqekCZDpbgbi8zgKw35KgDPfZXEmDArY2z5QwMncBNkyRWmMMpt44bvavZuyVRQtBX2mK4D",
  "key34": "Bp95ukivwLL9HZKr612NbUh288tetpQWqPBoWKKo36GtvpwBoHwLcMYTteo9WWmX4bacMo8adUwumLebHYcXW3P",
  "key35": "4SpEurEFLFAkyfZHyHMUirRFNRZXigCwpM2TSATDuuooxuCy1zgwPqyjXUJdcrqTeKdkn2knfmX5REdo1EsBaTbV",
  "key36": "4oc8Py7TBiMctzYF7DnxgFqo5CfkVWAeQ8QVTL81rcLVnuLjW4xMpQ4HSeDTRQt9QzUhvGSV9S4tednUZk7FXTQu",
  "key37": "3xbpYA5oCHQkKpyxyPu9ro1HozYfHirBu7svbVCB1EPCY1hGd4CTTST12TtuwWDzSnbxfEhBfw6WCDVN1CJe7sKm",
  "key38": "3TNoMxbcwmUUpMi75zu2yoicea3vFEKicwEFgUsDAifZH2C5kpWMc8rK6SVUmr2sdhkj6V7y8usGGqdEFdPvSaw9",
  "key39": "2HyMaRJ5BauDFxxFt8Sh38FPKNoAP6MyVwRWWZF7hD6JhXXYLzgNACH78ryzpnSVNLxf3doMUvpX9hZFWmiSYwG7",
  "key40": "R7RhEE7HaFvh9Z1brAxPnkj9UiNyAezHAvNNh5PBjUipkDQRdGDqycNXNCckW1MNoWk3Lwwt5am4bU3p9CSnwRE",
  "key41": "zTjfkPXpGPp81xJ1d5md94Fg4PVtVaJZANYG4WdqiBsL8c2qrf75EiG5Te6fVLXhFVqTWUWPxgkcskBBYBHfSJD",
  "key42": "2yk3gK8RLFp3fE266h97BhKYdyy65kAT3s4ED2Zs6PVUoWgNcn4jE1w6iuaS4xGtwNe8tz6MFKvDAfSiTztFHJNn",
  "key43": "2RdSzapo66SLcy33yWobB7AGhKg7XQwjAsUrwoCnPjKBCQar6UtjyZxWcAprLLQ6EjY9FopqDH5A158cKW4Yce3L",
  "key44": "2kSjx9LumqrkPze3eEiWa5BFyA9o8UpvetbksUovuXpDEP15qU4oktEzgFnW4hUmEBUa6oXYaiKuHqGyqSFnq9hg",
  "key45": "2nbZAVw8JyKze6BgpmnKXekqYPjmYiUJMdNZa146B92kq6Sn9vU98W9xCfZV3hweZtaZHoKa58EtfhuGrogKVGZA"
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
