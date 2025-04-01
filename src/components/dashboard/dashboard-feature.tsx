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
    "65rU7cnzN8YLHHvRUHoXDSnPwdk3RZx7WD73mXmxzHN28vRx1mVnMd6c3NGczM8c25LyHvfaMr6KLkKGKjNLxrvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BerpQNsXJA3qzVZdBtjryWLFQ3BhpJ2Qv5C8CtvaxN6UhNEHwWrR8RrKFDF9hw9Zi4vesbD3UEqgzS5sWroML1",
  "key1": "2nvrByuuRg8xzbRneCZ7DDZAnETfZSpabA4jSbz5hscSeVD491LPMJCimgGEXzGMNmRkBheBvcFymVcdjAZLDMXR",
  "key2": "AqqSWjaEy4Z48eomFsKGVBZ3bU7ACtkhktQikzyM5Sxj9WrhT8vsv9bCxoCGs78Ad5WHUFL5MqjVJUVKuvjQWRs",
  "key3": "3uowia2pkZRnUbYKYqFuqcMpdbbpGZfRSJj4nNnZeXPddcMwAFEsMCepYuKFxiUcKnhkn1PcEavmMDRqdz4dXMDD",
  "key4": "5iHiBrHzvEwyQh1q53QJBssd4SEqjJsdATSxEBtiefYmstwvet4sDUh3d25zxPokBc8pPqbLDrMFdFdyfRkwCRm1",
  "key5": "4w9Ys6zMz5eXoEd6GuZBM5T8exKgahALJcvXmNFacum5r5nX45wLeiNPoqXGyX2Vjroif8stm2smjSuRp8vMvnxc",
  "key6": "3GM8dUUUJ4PSCEBr7cCwmyKWma7fFj6wQBqKQdznX9rrVy9eKQS3re7sBJTNVXNqHPWgVoXFUuGpDXfhpcnT8fdA",
  "key7": "4vTEwX5rzSSKebwX4g8sRf5h7L1PFFwjF27XUY7qqBytfHaMiVAeEqerA1A5j3gpL6EBqnMwVMtAZ2JFSfRx1hxv",
  "key8": "2pVK4qG2fpVmxwpGRjdfLqH6jKNju7aTu7sBeedqXW4iiLG8Y72dt13AJnbq8RpSUk9hHx8BU2M68enfKNvejYaz",
  "key9": "2U9GRfYwDMCXybFCSap3mvtEpvp92jFkDR1GmWKSmo4h1gcF62frgc76sfafGA1tTLzD8R9dN1jvwN1wdVSz2Lr4",
  "key10": "41BMYxpuBfo3UqoFFKS2uz4YsZuH5ZaVo3LphCv2GtBsLANqZqAGCM4Sb446bTQawfZEGCrXR9mnUUKeFWZc57GG",
  "key11": "63wPRtbXA5yEzE949b4Eu8MTvbynziR46zLz4bWGtutnuAcvMuEYTjYLieEtoQxumY4c3nHykN2S2ghzWsUWKCPK",
  "key12": "3keEYkP2vJcY8UNzqPYU4a5fRMyDcjuMVQB6Y3cANw4R43jL27SKNR8WiBNvzbhDkPuYdh8uwnLBpTG94F9ANaNL",
  "key13": "48KmxfYbdWHcTUoF9MPDd1tkJw2Sfw73LrK1fpAUr29heu9YiBsRR9jGiaufGkiesmAHhenbsvj8jgpDDxXmFdHv",
  "key14": "uXtbxaxDhffBidmRyNtGVvtLpmsFACeCVXrAgAoCbdcgMiJaG2ZtGAJR9UKLHp98qXsmKUcwWrRwxqNLAVEGxGB",
  "key15": "48op4PHPC8BsF3rbA19rRMANM1zcKHZT2rnQppfCgprvU7gvwrgiDE19LFfPBKCSQM2k4eFxMa2xZLitBVWhnCbm",
  "key16": "3dfzuhnouPaiBWdfT2kT53f2dmpyqGog5qmH5fedumPX1KFCwFwB1pi9ugBEgxBvzpHuovnEqhYiejy6PfG7m6ty",
  "key17": "LpPMQNUDhe61dmKQb7hwM5fBmXASqupLewSTjCu31aFTSdQcmXqpEJtfLdUiEpVoR8GzWPCE1g3NRoemYwcDzQH",
  "key18": "4tSaPk8f5Hu91JmVYb88MCQF7jPG6VuKG837zxco6ahW9tWZSgoekgm4mmZ12GFsDDh57WLcVgtW6ZvJHYzur1ge",
  "key19": "jYxLrgVAvhaCPMSckaZG2KZ2copmRLKYvSMUZjuKkanGQ1QPTrhmvbhD1knNAU3eWpFTN63xmDkj6exLHbPUcg1",
  "key20": "2BkAPgREhtHQ7SFw9Ahg5hj3obLuJEa3TTtFLJ3MK1cyGnrwgso47VrA964a3jnW88QyrrWY4tPPV1gKPkoPs2wP",
  "key21": "g2knmxpJV6xivUvVitWjLNrYdsVQK8ksFV7bsLhBxP3ptxN59vKGNfmFqjcK3p8UKGXBGhYbV8qF3DNLU2BPtq4",
  "key22": "5icamyafRijVrXqMGsDeT5BzUNNPmeKr61p5azHNXN8o5tddRK8SPKkjJj6i9e5XrUzkkvwfG6vf7DVp9M4kFDpC",
  "key23": "388MnTVFZoHKmVQKqZEMsqFrvx5cXekfFr3YWnq27CD7BmU7Bi5y16okAEcvGrDUkDx6bFMN9ANaopSVqEZD3o4x",
  "key24": "42rDKkUZ8UD1TwSGwuvj5iEYjqDXSJVPUPpVDwtdAvd5VPUakBNnSSEVgM3XDT5uu7TGifMXUkgxcsA4QRTHpzvw",
  "key25": "2mi7yDCGSj7N7uVqQU78LPPnPrHxD2uJezRwFZJ3Teqk5JoDVQzdQ9kf55CdGcosZznZWKE1q93LQziEaRvCTwmL",
  "key26": "5CEEcmAGxD4rTtW3zuTd8tx9L1UrWYnScSvNE1wu2NfAAdzDo8k94i2sa4eCMX2S2jKrYv584ZpuquVCTgJXS5c6",
  "key27": "2Fqqi51QiUAUsNxcBMusWfeHjg3pYDXKvg6FqdorEDBryXdLPEeKYjZfx6Eud7M3tUsigGVnkm3R2T8YmXin8Jf4",
  "key28": "5znqPVBjWRXnr38sBzGirdHKqEiFuLsbKhCUSAFsiSdbHuaeC72hyrHtd2wt8attMbR8drwCn7X98N9SE3rR4izX",
  "key29": "bG84CLasq4vRUGyrAJKSMDqJEtZmo1w81UJFyuqc7hWhDMmCz7aqLQiNMRMCqyX6AcszdZBTxRYLegCwf3Nwczn",
  "key30": "5y2iXGA3Q7uaS7WPAp8tZniTp53s5Do12fFoeSsZBJKYLSan8bPvkH4RvfotqeJP21aLLVY5URfHs2dhtn5dcXUF",
  "key31": "4w2Xxv7W1cm2Hqqrvo1Hd3ka6DquPAhMPY66BTL694UJZMNrAaNZJdfMrb9GyjFeR3f28XAZktwE6zzF4Cg69iru",
  "key32": "4VhkUBqwUp2kqW3Km7kHTuaz3s19s7XhE1KxHTjNjXpMmQaaduQy3UX2eyqprfJWtASn3gy8AfJnBwYmhuvVx32z",
  "key33": "5cbUXnN1Tjvzpi9PCozoJUx6KhxeU37D59LCg5aUJpFY7KwpMrq976vH5dSSWvMCThqDyxvHfvfiRVNnNhZUm3hr",
  "key34": "3jvWAPHmQA1P9kxE7tu8oPW5W5j3GreKqnWZhKdrpnDr2ucCd8gDnkUDwrWoJkj9qbBj9FYb1rHzEyaLPqgRWahS",
  "key35": "2yJ5vQBoyB7vFtVgP2ms3enFXGV3gaMyaZqnVLKMLFSC1c8uxdyLJ1vUy52YC9EevwcGMdtTb7RDuBThVxd76rAi",
  "key36": "59Xb29tEbWWcHtJsSn48PqLjgfLGnSqPdDAFCbmo4AdCJF8L7WFJfFszn1TwKMyqxy8jMoXEHEjBzfPrsuBCAQpT",
  "key37": "3shJnYPpeArAEJSVXauirzeWbSXL8yFRnGRjPNLmpaFtqm1f1zR33feigQuW7CTYGiNjBkLEsRLwbq3xxeYA3F8W",
  "key38": "ybu1nAmfSvPKJjgpU3tiXk4QDghUBUhTQPp1qKxhvy7CM1nvBNppeBUY5VrY7ATRkT4gzFcLaujKPzGv5YVMKZd",
  "key39": "4Jtwhv6ps3yPm815LGaeSrQskMadWE7c1sSgv7XpAtamyKwbzWwEhVfB8m8UgFVMJdvScbhKyf7dNfky7nqk1siR",
  "key40": "47QoFEJ7e6Y7VqDPvcHDZEGrAqKcddBwt7bshpQYoYM6N3JTLw8QP5W3QHfihPKwRaThNyZQLC9mKcCaHLacoFC7"
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
