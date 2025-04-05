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
    "3dDQpTDzjibs3jEBysRTR2tk2bs6XrDZUaA93k3nkmnxYRLJhr1FbDuLuB7ymJ92CfjsgYphHstmJU6dNscRN6yH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Egj5dxgXPAzNQPLgN1Ewqfz3W5WKoj7nUTRE5J7gnQ7qgxpcdbEewjgmawdFzSiR5ZT7HR5KerQ4wB6oSiTWJTn",
  "key1": "KEn8fSiQd7dkrnhCgkvvrmYFte49a69Ae8NqvZAocQbKD5ocX5wQci1E47NzSv4193rptG7M518G61YUGhY9rzw",
  "key2": "5vnhdUDDsZzC27LDWKoF1FnQCc2aNMHj9noPHCfcbbXNdS2NTRgiEP6FyrVcyTPq6sCQWm5La6sca9Kx3P5zLqpp",
  "key3": "2d5U87fTVgRVa1iGVuqwLniVoAuJMK2gadGddDxmR1gXtMNpdVH4kN4GAWgXfffrXkxos7yjkgHNSyfEbX5msFBt",
  "key4": "5QoQRQa5jEzcK3kDhndsuFnCK5yMMd5uVw6riLqQteEhCVJqyQ4TA2hxR8BuKVnvFtWMStVAwjB7rgv98WjxFF9o",
  "key5": "3JcQb9GVS1kdtLRcr5Gmk4BAK7FTyhrkRxWeXR9YyYwRFNFQJkRP3phBSWoh8XCvihC8hqAvhMz3rj6qiMyHYHpT",
  "key6": "3N8JBhgmxXTiunTEcuXXiDRFAMjXcLZYzHmR7tykYGVKBzZjicqju34YnUFKo6fLKreMwJiUjNQAg5raLRQvFzXH",
  "key7": "4eLqgMbf7Voi9uqJn8aPUASr3NQndEv2oKsYeBwJdB16ijQAVcAjoCjmJKJCuYBW3NjnvmcQ3gUkmzhrCq4tw8dv",
  "key8": "3KH8mtvAE9xgNySg7CKvm8f4oYPN2nKkLPtvHXiMAVUDsMcafwGpbQgYeN5EU5FsVtSfWQp1tib1tYDuG3i47YQ8",
  "key9": "qbbZc1E9mD2wfYZFd7ph3qdQjTz3JSnLkQ1BW4SaVGQL9DFPPSUpgBMZRSaubAVyNEj2KvgcKfgjVFe2yWUKXSy",
  "key10": "5dwMijEUgLpKEoHpstSCkYvXh9rYjonYP4GCaboG6ZBDuGdpNxdmQM8Xwk2EBbfJmYtnhYKN2uz5R9SSnk55Piwn",
  "key11": "28hmpc1SvWgNNXaLz5UcEJiFrQBd2Zq3PRo2p6wvPdu1HLLSMUFexJ9uptGQuUfrTSTNHCEY3cJFzvQtQm9sbKxb",
  "key12": "3JnkH6cfEAhbXZgj5ahhvTbYufVti6ovfJXEPTPuoL5wsxXdoQcdz3hpM87jrcLsULvKnjPGVArNYg4rhnJLiMMJ",
  "key13": "3ZAuuqBmtN8b1qo1sRZ2uY8wU88guFEACXtffuTowFRRKDHyGEQ9bdwHfXYFSCCqHL7jk7BrPtw7VeH8uvhQQAiA",
  "key14": "5kGKo9YihNZ6eK4y4NVceipN2zysV4uLrQuzHtViAzmhc6CGjkTwcrkKFKmeBZ5zMEY67gNZJqZjPV8t1cPTFjpa",
  "key15": "3QsRrsktbWM6sGECJeNUZB7dnqr3PttKT6DkDCSkS2wioUWE239ST2eQEwSaNrQ9NQWRfquJaaU8gSfhmL3WLvp7",
  "key16": "2LrNbSF6ocnQTKt1nyrbfXHUG1RcfLQSdanUK78BNG9vVh5fcbZaGyzkgfxZGyk4cgBrfAF3sLTjkMJ5yUyZgrpF",
  "key17": "4BpspSZNpAkMWoiT8StZzdLtaP9QYXZmp5oKQpk6ruFn7xYjXHhBTiDFsetb4cvux9Anww3fNfessUcNCwMBBVZ5",
  "key18": "3ssYFCUt9EFQMhfXtaiosxaQXYyT9TrNLgKhGsYEJAaiQa9cNurkHCL9iA2avwAswmGWVcBZm3KEHz3ah646p64T",
  "key19": "1VGCFRdEXa11jwx4XQwZegav4qYAXEwWRNhULiEH6QE85PnjNjMRHYTEh3KYft8qBNuPUpfA9gkConQSpsHFjdV",
  "key20": "4GeLcoCYsDsNEaze5d17RCf8YyNRuSJgoBNpwhwD8kcykbFRWmNh58G3kwsDCqEjf9XQNhJ7Y4kSTGxYCtk6izTy",
  "key21": "gsVyPPAFczoM5hrb73R8ib4mRd9BnsrmocxmsKrHq2y2AQkGGrgJxxXSqoL23B6PhEvuNbFXKRhPCM7Zdmikodc",
  "key22": "cy4aLd4R69JZiBLvo1j2V42KPsJTud9vWWtwfsU8JDasju15g5uY5YqfdL4VQzgtoTaooQsiDEKbig6Rbc1vzhR",
  "key23": "5ZpsuTTKCpFZDtx7ZkKrLvVfdXA7PUEAStW6BPTZbR9RfDY2D4UbQK9gZ7VA4xLLGPV2RPwvoTEocwA68svkCuZC",
  "key24": "XjANJ1ngRqxBtdoG8C9HGjYfZYPtSEd6oaEyHTAxpXCk65F4Kh61ASVfJgrzUBStxrhZmLczfNRNkEckyAfqUiC",
  "key25": "61HoR4whXgnpXkRMTe5WQCtYBnaB5Jmqw2YgPq9fqncgJvgEj17jWfQva4buV8EcQCtCM3jEENzsq2b7uGoyLRX9",
  "key26": "34qQ8yY2k7KJc3XxW4CRD4efWe9CWSWaxgVKZdWi1qbKwzBTZTTaSABm3evuEeAAKuwvJ5BA3DumexWucsLeCzNj",
  "key27": "2j6REdWcML9LzMz1CzaHseWm4PhtEdsj6jyn4bNZir1coPR8ugJPUcKo1JmpTV6vw3KLNqcqWfX2XZrkEr15nT1g",
  "key28": "3Y8eNiksxPEWbtPyxLsV11gWTJAfvLzbQqGBcAHb5GzyMVKsRftgPFkCi3NrdRVpshiq77Uay8M6eCWYTN2guN1W",
  "key29": "2wi2Diz7kE98ZJnMXwHuH8BJ1vLCE6caPrJuvzVVZSUQwShLcA4USbHb5TqwcpTZgjc3raQP1KYSHcexUpfkP6mc",
  "key30": "k1nL6jho51nbdepbFkQjKfcE11TrH6J9em6ocLYDqJsuF3DnPWYGfFtMXTvP1uK8hCFRBdsSDxCfcy8D8o9RGPL",
  "key31": "4oD2eATXSyJ8HJAtJV39LeZajPLqGDrAzEfRajSazrN4aLmbsmMt59NpokE8NzKtD9sqzfctjCiNt9chY3Bk6onn",
  "key32": "PFpwAy7QQDkpoMmJQuTDAmcoJYNGn7JHJXMFgGyqo2LGbcCFLySfq3Sig6NpmwnboP2yBZSgYAqiFZcuqTJcuXH",
  "key33": "2KvptnAvWCDwcNABQMzwHeiAwf2qMpz6J5aAtivNgQugCEaGFAwTrR54SLGqqCY5k8YSbiXU7YgeZr2sHKKzLak5",
  "key34": "5KA4jMmFfPLdDpoKBAU1yELQQwfe8c8UBHaVcf3HEoNPTgJZmPHjcGCiXB431KhecGaeput5e2chhjsgnCtxWs6t",
  "key35": "tVvZFSZqeG91qv36hG9WyY1EJ2U7ZFHyhK4MAbqDmrErg951WJBP7goXcvgnVAKbEAwhAKodedoA3feeZTe8kS1",
  "key36": "5CDEH6tBehHnZcjSZTEMxyRahxAtMUy5nX67sPE5pCfhfzthT7Cau5EU2MUKojbbYwjpMMYa5zCvgk2cApNMywXr",
  "key37": "Ptz9pXVrBHwNqbiUraECMRgJEzg4CnsXfXARfvYzvJtjrfgBMLAZr9tDL3BLtiqkfAGYGQFS2jQkPNDcn73b2ZB",
  "key38": "2UJeYC27y71aS9HDMPyyfaZsCjHp5A8H5gLj8GQzkBMsZAtx4XF5JqbqqTcFCYvhWGNKhDrTKYvyesWw6Bf2Mie9",
  "key39": "pMjdd3gcCW8a2tBhGsEJtUMrPGx4pV1i9bnjkVEPVRjSgNMJggBgVdH1P3VzgUjcpba5jP32P7fbGEtMs5idSfL",
  "key40": "2GSdmfzpRUUMECru5LVicJz4ymuQjYxdgaod2ZCUdJhtFLCi7JGVvGAMfyMRwHzGXyoBnEAPZCW8G5YC2C4YiK2W"
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
