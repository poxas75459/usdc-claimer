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
    "451Th3oWkqiEVCRdhPgDcp1ya9apdhRq8Z2XCLZQvSoerFoUcXV9GpwcgPEn4TmJHWytoK81KNfyiGXzWwq8HDLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nH3dG5Zvy8ZLVnDMvXUxWWR1iFzoJyxxuoBzYPuscVtaokfL3QW2ErNzjhf3agDnTQHzqDEexY7PUVMyxF1TDQL",
  "key1": "KKxFmMUfZxeNGzTW9DMDMcnKmGgbWBi4pm2EAZtNacj8YqByFJsTXQCRSAfbVZgFF1x9624HGVN2KAZjquo7i48",
  "key2": "3GmFtghtvcANG2gVcndkfSYWw2UR6Lbt27kSFxSXPcCByXBBofwZkrX1VnX9P3MfZZf7pdB8Mdp6iXWquzHHf5g2",
  "key3": "4o8TBJctFZC35kzcDncJSPNhpFkRnUSgXdA3hqMYdrLri2ZV55pkk1aQzE5zEv1jR66DXm92YftRtzLUog14VHQm",
  "key4": "28Ns5betGm6WGPVJj73VaGrjoMAwthY1c57RgPqA3cJ7ktEpooDBRwmrNw2N6AEfEjAmQNdbGXNAV4f5DsGP5JUc",
  "key5": "2a7T4f8B5Ka7KQjscNRUgjsJFWQL7TaZYMtGzhTg7gTHJB1mjDG76zA96M7MYXt76hjseQAJZALRsSuS9FaX1KPv",
  "key6": "2B2kVgGNZvA5BGUVMzP3F9DnW6ZT13bMCo3eEXk9i9gxcCXXWKFmetTXDFYnMb2NHTCTPXkW7Rwxh8aW2AEYtxWX",
  "key7": "XM5xvpnqiRoCrUHGtmJ9AV5u4PV1PFJS4eh9eBUnPbp35JHZr6RV5MLymSLsEAhQoSP3ftrxLi1dmeATbxeP4Vv",
  "key8": "61x8hz9T3mwKGzn19n1pvqUKuY3syokCGtk1MJczF6PRBG6ZcpkKMGN8xa31hnAsP6ardAV7tv4BGVkqKGVR5auZ",
  "key9": "4vQD3y3jV7RSJoUYGyezrHy63iWdbLqQrFTAXaarnBpZE4adYYjEmuoeMbMEn6zaiXN7madJgp1JyfBKSnLPU4zf",
  "key10": "4MQezJzNKNXp4JKmANC6roF3PquSBE2VcjnJDyvXcoWm5zNjtDvWiyMLET2s4NBhzh6x24hdwnFNDo76hTkoaspv",
  "key11": "5tdNhps2pbwzgVNEiNJLbkETW9nLSdrKqofmryHJr7v8eKkoDyueQFCEe3cxj6dM9VH1jecRPD2bA66DDS2KUh67",
  "key12": "23X6fYRyM9zgj58GqiXEsqBAamrXu5uPVFrwBjsgLdNSZqrUUb9vCY8726ih7sNrRR7aAPsD3NmCVBrPEGWfJn8m",
  "key13": "2tziBuAHGf6c4mED3GVjRjR2Jpiby4jKTNcPzq3r5zsz6tVKwHRzep7F3hn9Mp66qcQruQZg22cAAaR8BJUK6uPe",
  "key14": "3G4nDLyRErXkmdSE4yB18KYPzfQ19UP3UEH3HWHBSez2teB4ZW1Xw7B6zq1Eqf59eZCCeAtv4v3Tp4Q5UKc9movB",
  "key15": "3w4sS2sAifeb6JyycZUXohpiws7m9R2bRjyvi9bUP355Mrhja9o95QoEgGVCSsdghvq2Q1nDTJm18EnqZnJyfoJ",
  "key16": "21Xqpz8Hq7dfsy1g2j84TGmuUwseDibh8quJkfKKntd5iCpUZhs6jUQ3QFW1CCGAbM8NkzeoEbq9jJqmutYUwE2e",
  "key17": "A3KD13s5PsvhpUMLZCq1GdN6VVVnJBjWmU8K12cSkqNkdaakqQn1YwC6csV4UWYRkrbZ9QnRVXSopQqWtDZwdNE",
  "key18": "5KFUs9avWyH3vsZkhMwmq9qPCx1dDYwBKAkqWbb6Te4V4VzXFLpMUaHqsUXjhYSjY2cLTohohxRqkyPnUDGwzdPt",
  "key19": "2uJ1kBtEAD95aFhomFvMj8rvg2JrC3BcFxj8gCiQHwkV6HCFXmV2FgbqLWi9dXqihrQDdcTnY6DqWNYsrwajza7z",
  "key20": "4tz3wkRkWSsdwEyWRQJjWbnuq41jTfQqE8JVF9xf3hwAFXBoADHoY1H2UtXXxt5EsNJum6avyY44HnGyExvQqGWs",
  "key21": "4xWoGQM9fENxTwZ6DDDFJeAHfFrisAxUZorNVzD9JAyyh7qE4UseVHXjqaPAod9ohNiY6SsFa57MM9wHGkYzGHKM",
  "key22": "iqUnJ8FBvs3ETqkZurDjZ4K5jd5ageghGR3GPk5nToFY4Qhbzsqh9vRXeHDWXWn8jYKo9UEHeCwQWKRXpx61hCh",
  "key23": "4vD9ik1qVgfks7izhEy8vjkCk4Xd1gNybANjrcppq3oZy2ctid9JSQArWHW1xEGwT56GtmRz73m1vNLtYNeREgLh",
  "key24": "4yH2ifLc6TVHaKh5uxLMF7zXcjHST4rsz4Qp85XfxEEDDCaaufXyhymYkhigRKnagDMi4AoAvP5vZWw76ETHd2Wh",
  "key25": "3RMWhPF2VjgVfWBpdNVNg4vW44voPFNaht3W8UfD49GYJy1yHiaCuKVJPayD8hY6bhFxphPnsexSSnVvqMAgnN2E",
  "key26": "3pwBxbXxpHkdMGoo5nvnabNm5odfLvNbYLJJjPWebEdupQC7qV6PmGWZ2RGSSrcgxavd334nj58UVN5hzizetccB",
  "key27": "4eFZ8GhFoRChyGnbisMMbVGvEEqkvrzSQXWRXRVMo8Sub3Vfxm9rNPTzLj39wQUUCYZaRB6V2G1m2D58v1xnWnDQ",
  "key28": "5rSV3YxSswuYKJfYSbehZqCRQTaSEN2gBFXfber5qthDy3T9qSGiLJPKt66SqJsbMo6BPZvRcmBhYGDWaQ4VQRsc",
  "key29": "3jvtsTg7SYLx6UwXFdoG7xq1f9J9XTiGSVYE8F3JpRRyMn5XErAxNqkF1pjEEP5xMKPH9JaeriyCCUfkYjC7REGb",
  "key30": "Nv1GSatMPkMzAzQR6D5mAVAfmaQTJSKqsHNGpow8H24otozbjD6VZSUa3j8D5cDSKtC2ZqnUxmSjYuAwQ23V3sr",
  "key31": "38ztt9bcvxv3UwuEPMMSFB7iQqmix4ean3vNxLxbJdLG1Nj4UbKCLpgQgjsZQtnNfNM3yR1NVwHvHDLYrJm8Gqqj",
  "key32": "4T1YsC8MxEn3uRjZp6dv4ayuY9NGdy4fsBhYrGG2esyTocV9SBqSWES9SVChqHw1gGYA9z87VaZEJpqy6dY9Z2BP",
  "key33": "3sFjC5tbWFE1gpWr8BpwoMvgMAvARoU74HeP9Sb58mnyJ46yWsn18vNz229n36pEowjgCGLnFX8k2Y9suaKhemg",
  "key34": "VQ6FrABNUN7VFZgyRRjRHQjoCSKjiPwQHWp4vbHZKW611KTMQYTzFwWHDYUeJSEACxeFNVsgTFfQHEZhChZBzTu",
  "key35": "32byqDqG8QDdtvRazGBq1ShtcB2twhcWz9vMTvk3c8SFJYzGReiF9n4pcc4tk2qsynnFRd3wcNyJsdgakKYuEnZi",
  "key36": "umX73ryMWSaUCbEd6CFnA8ADGFbq9KUngsmV26nBgbAPMS1KwmSmJ9kAfqb4kRvbLuKSbpoZ8xXhyRtXUDZuAwi",
  "key37": "9W7tJnp7RNvAWr76f6PcGXh2Q97UQ1EoCJGECskdgZx1Rg8XCLDWjktac7j9JxDfLjtb2oUPMxbDKZnypRR5twF"
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
