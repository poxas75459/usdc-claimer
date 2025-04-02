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
    "3f3sX5dedxKen6cCxpsgqkNa3peZiNEWEKR3VQt3f1fYUQ2gHCYT7yengFoqCV1mgrmANGFTuaUvpbwdhmRdXFmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XxqnNfE4BKeppW3ELtmnZW7JerM51xRpBKcvRZiqH2LLr8gvATXHL29XqfVYzpQZjvbBDLKmkSxQRBigrVB2tTj",
  "key1": "2LPR7JPgQBFCMaim7kXgcC7fjTAwBMb2PEhhDR7YoMd1iSGjsAbC51zk9wWBtLGVC2DYfZKX67QUKsKo7GojmKqn",
  "key2": "2eS9n2HYVU7H6toRZs9aHzUMWAj4AGDZVYphLRMxPFqcvvahLRfsx5o6FAxTqSsTdwcZHL5hpTESJqGwjXRxjo3y",
  "key3": "8CdYXBY1eLwU8DFc8MFaUWV17NketgSpkm8EQ2e7B2scjDpexSYCFX9t4dr59Ua23KQDKpS6aQ7QWMke8K28FqZ",
  "key4": "5hT8ytq2FV9ftmH1fmsmerRT55z1FMrSqdzrWVoy3K3ApMo8qLrkYDE92m5pSJSg4dYoUWa6dPwZMbrRL5wvWcEb",
  "key5": "1ThvQoBgT5Gy6AzWEM5CpQFLkuZjGZhUnqK7XXCKsuYDr4FmT1pZinumDBEsBjYCeBKXwKMParEKxW4DecRV84N",
  "key6": "Y1km4nzyEqpSza3dkpmKFSZnNgLnLH5SWKhFtkSPir5QoCC6mDJqp9QfqsFXkbsNkgEMxMxuxnCDxmTjJvNkWTF",
  "key7": "4bL5DJ9PKXxmPAX8JmbiBThuCYABaSNpNG7mW5cjeoq1fdYx2URvCiGiG79BxMLVuB4kDHTukkYGvFsQ9L4EDwEA",
  "key8": "3xKgLSSyHct9J5GCG3wUesVPkEuNZsaG4KmnbFvRfJYRtaQLmcjdQAnyZGUpHxhki1357VGpAyXgA7AbGcVKoz9Y",
  "key9": "1UR9iQHwa3eQPajx9stAiJ9FFAjSKJFrBUNvsJgVEkEXXQTgHiApnmQbfR8AzVyNJ5kP7bEZdMZSGWw9yNWzpqN",
  "key10": "66nKa3ZrkewJKJv5RgykgAJnedawyofqGaJBpqXqeU2AxJKEocbT46qT9MHxmuG7pVoqWv2wxHf2fXdt4xme6bi7",
  "key11": "27EjxxZL5ZSCr7315ndZ7Fb4ePhSCjHivRaac9mTKhcMnGZaij13BM9aDgNJBYsECaqPLtygeamcrrExro5uxRgH",
  "key12": "21rm2KTCPWwCtZRz351HeRvKVrkjJTLikFwpmtpgzoCd91anepnLhp8DAggTaKhT2vsJ7SuT6Ni3rtuoNw8yEA3T",
  "key13": "4bLozJgduRVRbRXutcBS8Hn4wYSfz6MXsraUYN1yDGSdtHNxTRnksEsZQqgjzyMpemfTfFp3F1M4DtdjUtcb2ZLY",
  "key14": "dMDTkkY2RsXsTiZL4vRz2onAkCTFQhZbLHgeA2PEHYUA9fvrd6RzvcVzzVeJXC6536nheesig2tkyAWLzZmGWED",
  "key15": "2c1WA8BZU5QDowYYPKVK8ZALTxGo5tT4VQS3MAkFvyKMLuiumeU66B5q6SmwHe8GefSWvtJDQf91iLLpDGLZYCGK",
  "key16": "3S3m7c3EdEvXswR4bgTX2V9MTfHQd6CPB8N5kgjMP4rgrTy3mJwoE6g1Rju7ZYAaUkc1495CsCrkUSibPg9eRcfL",
  "key17": "3wtwFEnk1escv95StQSNCS4yUFfYn8HKDienLxMyiukKJixpNfwto7Yj15G1v6XC3y9DhJ5Mnvu1LdCaUwswShMQ",
  "key18": "3AyjRXSVBHjM8R2VRzMUjkyu4hUDt3pHdqfPfees73RJboT4P1UHUKHrpdLq7vfDHswhpmTjzdE51ZrCZ7mCmrNb",
  "key19": "23isThKY7TXgu3kHKoQh75eiNoiZuuz8jk78ZQiPu4RXJnvzvo9vZL2t3EyTPU44kMyakcti5EKCGAu1kucm9g4t",
  "key20": "3Sqk1XgneEsvW5xcv4WRE9nu7GJhsjd3J3wKButMAZJiibQx7X6BT8kFAH8FyvzX7zgvvR6FnW91yik55v4XEL1e",
  "key21": "4UjaD2Pibm5uoAvLmyZLEvnDSGDGQVsaxKQUYWXrwUDJRXqE6vKjxn81aHna69KCDYCXVXFxpBKuMfoTQ3fW5nQj",
  "key22": "5eX2kadQCFqANAXDnJnXBwLQmjcAVzzeTHuHrFForhpQdJyxncG8bwPHbvSD5tR2EFjWB4JYA96XPsiLswprRhEz",
  "key23": "4CyGuxq5rs71WpftzemvVMR2muDjdGzd3TG2Y9Rjmcnenk5GJhSf8dCEys7pezT9EHqQRUwAYsjZDmyRLjDaDtQK",
  "key24": "Bes6crAsJbE4cs7k7k3R5qhCXK8ENZ4NKPkbS1439Tht4Hs5kfj9hJiMyKpi4cJCFrFEgEbBJoaYuKqnQLibG2B",
  "key25": "5BD7BB25ri6Rk6DDDT7F92qWeZ9VZmPcFiM11tAuY4upWkGBRjyYmbw5uFrnqiWAoZRCkiUPcjHWoaZK6HTnqH6z",
  "key26": "46JMSsECsGf2oYSGm6fVGsyGVTS42uryYDWoBKj7JinA1PqnafMsQiT93sWteVcLPQUXUugFa73ccULPdjW9mCLP",
  "key27": "4y4dMRBCy5utFJ9xNZkR2Mp9bUThd81Uhi5eKUG3i1MevdoPh5wsSB4SiXVNVbdy5Lc5xPiqgxmzf7Vq2Pk7v42Y",
  "key28": "5fq2GLgZjQVHgweBowrg681V46wAwPXDiYGpeeN1HcQrU1u8gWzizybLNRxs4iHjGV2ziLSyowz2XFhPrNXwxzr",
  "key29": "4DnwQA5prVZEQwBUYffCs2x27chGapidgduzK6UemJ14VgeGmp6xQdq4x7Py71xB2AGpqLPYykvhj3fkphogfjxH",
  "key30": "pcofqSfLpPmsK4EoeWLNdTKRzWG56j1iCwm6DsbVNs2jY45rf49sC8SuG1bATnH9yJwZSKsDmGA86KLKJSRfmGT",
  "key31": "EiVu8afUfaqmoBEcQJKtmCBbThAmuweg8cS6tgy7YHg4RmUsU98H29dPvCvis7R7H5TrDm79fz72pZXPRdfKQqu",
  "key32": "3PioxbtVkMRp4b9hrediZEEe75KE4LV4onhEdAg5Lqe1pRFZ7UrLxS9xeWKhKKZCdTmE2cLDHFRVZEWLc5N6u7eT",
  "key33": "X3npGPGpX716NrJdQTBLHwggFxfs2axdfQgmij2KspMmWhdtw8P7NX6tqs7vufGFf9zJuw22SbCsGQsv2VoNfsq",
  "key34": "4j3eV1jz9vnSuPLZygFQ9jbtqdHuxvDqnabcAwm5Ehcvb6VLKirFq1bWe7ggn6vMSYnLBfcNn9V9FWhrtkcNL55T",
  "key35": "2po6kzwWRvB3pVQBjWB47N8fP8tNcFtdSxPb7Hvm5yrvLxo2q8ubMXNB9ukWaP3HiyCVYnnbjqpfcQYCsZ51npMS",
  "key36": "5RnraXvgU3chUJapm1Q6wKFpQh4CL35q5KZMb7CHine96TgzJxPfdqa1f9aqpKwq8WAdcSYbYAs3Yvhxme4dtz9k",
  "key37": "WSjhedaqizis16iYyG18wQsL9zEboTEWKyKDFNCszSf9x8ZZwCXDcUUVthmZWTg9RKqu72tQTtXiJ8qQHa7hMwW",
  "key38": "4mYiu76aeWcxtr2sxXrviN9RUmxub9EKKCigYigdL5fESeDEnUQhtELYh8zGugWsVmyjj47E2QUm5RejDq53REcE",
  "key39": "2kSUuk4LDGwzHS51pW4CsmmJ9WU8D9wCr14rQPEbA81Y2kvCJqCvod1CSb2At2NMy3FAq4VQEnk9CjKQxLwUhGDW",
  "key40": "5MWU64vZbQV9f55CUNEkP1V3Fjot1LHev49FDhcZHikpAbhcmrbeLwZs2gQq3AANgdtsZfPQKgrtzZurCqVuMgFG",
  "key41": "5fivKZbpz38Us2ik8ab2GfPp1UXBDg5rJZiq7edKMrc8vgeUA2rAAwnXFfcTrY4wtpUF4jv5gL3ounwGFcH3pW1Y",
  "key42": "3YRpX1yGp9rvbUaNFjGeR51DQvtRUDutvdG7zP9D2YnwY7HNKi7eRGbf8iyc7SjSgHMjDFT3Eud6BP2sSuAAjmF4",
  "key43": "2raxGokphzEdsKfhGCjUbcT8k1tcrTucZi8eRJCmPmP9tkPazysTVu7dSHqGaMg7PdKTPaSbd5YVt2VVAGWdYMLS"
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
