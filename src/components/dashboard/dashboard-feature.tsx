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
    "2eTfTkc82yWbEMxij7q4yn1JubQMV2HTteW98B6fk9BwZPRaYwgnGgXD45EVHMC2kQjcFLZPvAyVQ8XaLeNVHgPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SmLnxpBqCGaEYLfbvfyoLUyDCSruWguD31xS8y1ietRfrBQRawAuwWhQsC6rUvm9QuWxmcPTSSYePwnyKDbpuBF",
  "key1": "3rYt2dhMaRBq1DiYZJMgJ9sq8QndwoYch2JCCmo1AhFxvW2innxA7ZVLpAnfdRKcGASC3qCxJGesD8NsDZ4guRBL",
  "key2": "9rrgNjiTaTNNN78dpRAS8hb7yUT5MVbhvFQ1EySWpuussBASCzhX2STq9vug56uDp2HkpFebrDfSrvt55pdbcc7",
  "key3": "4dGNUDLadhDadNm36FkFFC3MnqydNnCtmkpMPqgLyxcuAS2M7LEfTzNwKKbv5VLZCW4Nhs76SwrZZnZYZ5jK2t8m",
  "key4": "3hj7HrHKst7Lcy4yKvpFhXNt5qGsSkkyJ9jkHrs1tUdM9CTC7CKK1ya9gHi7MXSErfx73EGSM3WnSk1PBaZqovJ1",
  "key5": "67h3MfigVgcEJPQt48H53NvBKh27yHsC5JkKv9X8N78LJnNK4ZiimU6VafXNbmAn5DrFu2nVTfcTF1F7EnfHaynf",
  "key6": "2jFbh5P5knNLp7oj5S4b9ZCKVsQsChYh6Pyy9Jqvp3QyeiMfkjZPdbGajEZUxDKQ5qk1SyaLHwaMEYXmPqz3bJ9",
  "key7": "2yNbMiZxqPyAf3rCvbSQPP588sbJJLj2Vg11GBbbjU1os5AJjbqKFz6QU9vpKGPvgj4azC77BzGrqrvCDAqLpcLx",
  "key8": "2f5YR1E2oFiDhnCZe1TMmriG7F1xYZxSRbjbgGBBaSiXdZEMt518exuVmv42b5Ek9tn349cuacaVuRZwg43X7oaC",
  "key9": "65mRzBDPGuK7c2ZWAoHzqdcW42LDZcYpmywM28mDaVqdwQaF7sNuVxgcoLiH22no9HNEfXLcDjLsW2treQSP66H",
  "key10": "2RUuev4EYpJKndYNvJ79w1fphzbBLjK4qy1dW7BiU2384Y1ANtKoyZfCaYoEddRiXatBiWrYq3TbF4BCaByBkDnG",
  "key11": "te6M94SUjLVKtn26mnZGycLo2PuNhxFRQCTaQY3fYqbBH77YMQfnCguGETq8R71AWFLCK7qD7fcVV6P7b2LZnDH",
  "key12": "4bw9U8cxVDCrkEsAMcisDoHKqSEufLbAgLBVbgmVTzy27dw4ooJodX7fFVYgrfu9T8Y7iQ9ubjqvfyfLKV4cc8Lm",
  "key13": "5DpFC9qwuypgxKiXMYKhNuSihh9Sq3DvhLbwLKWV2JPikxA3NBY426cpVFTAHdsuKyDnZpGcmtuv66fAiPE1bZ99",
  "key14": "5dFGZAeQq2YbGf3WNytGgW9y9STm2ufE5ftrwwrvtAUL7Zf6Hkxd9YtTLwSJsN648UUo9GE1zXGgTAznKepVd7ST",
  "key15": "FjoV8kSapa5w4BBmxDqgVqGLGb4nN5MoDhybJ5nSD5EFN9hRe9W99uGbujKA2FtJymR3D7AJJShtGpeCSB3rruT",
  "key16": "5c9hnjNvtHmdSoePB9CX6QokxTaB5btBL17GVfpd6xRQScqqY4H1ZtagnPJ5ybn7KGwg6HduQiioMPjvMq9MxUbj",
  "key17": "2L9emNqiSixF7Diy8jiSUVcTcSXAMccdattGXJaVvCZjfuso998GcKNaNRWETwji5mr5KwGzbVLGMZyZa7aeQ4j6",
  "key18": "3kJy3BdqSntf2NBrEefC155fcde63sTnmWqcHxXezzTQFjKuNjETevKeqKCpSqb7CCAGTRijHPiSvYUpkKWjRhiG",
  "key19": "2bUvM2b9RsEGYryknhserggEyxaHf4NsRCRg3WeCQxo3Sf772PXWN8wdiLSQEowyj3oF1iRJteX4VE5ikgGc9pw7",
  "key20": "3s1B3T5xARuWHyCcdkHDtxM2anMsbcPXFfufUEokFnPdktmAkR8JgYG4kjUyNAu78Cjm5p7Qn3Qaiv9izqehQYZF",
  "key21": "4WmpwcFGR3vdQBJE59RxCjZBuXbSmwJtFtHh5iM5vc7w7kKMPFTrEBZbPzi4L5E8Gwb3Fik3JsMwzfoxEgwEjWFa",
  "key22": "6C2cNgRxLeDBX79M7GY6wgSc6bLoE7gnDVvVQexmn5eswgMpCGZ47SGptyuyvyiMQSSP7JwaV5z2YgZCi6dD6sT",
  "key23": "5F2Rx89kitxa21KaeRGaNi3v6DqScFSj951Yw1aLefEyteQKz9yaRjE9KCD3znG9EZZUKoS824mUNssn2tpLCQCp",
  "key24": "UTtX5TquLjs3Zcn2xfwUDhy8BBFbV6Cqv9REdYSbMARoCHDRG7p1wUru33cwRg4tmt4mN3yDpRM8RjhPEAkSeW5",
  "key25": "5HfGLmAWveE7ZRme8FW56i9PKdBZ64dk5ERmi3ks7bkoxa79Mr4kJMWTLAPw7kYaxfBUfy7oS9Rgoiy4CJj2Gg15",
  "key26": "XgWXJDkxGmWywgoAECap4gCp8XXsCtbfZqkLhELzwQmUPT7keio9bEDhiS5wV14jJhanez1hH7yGUKYg1Y3kwTd",
  "key27": "5hyiKqGsE1nhbuk9E5Y6qhAT4NtPVynpJZpdEPKGp743XpTE9wAH1YsdE5BX1NmV96YtPvG4iNbsP6Lz88GBfWmH",
  "key28": "5BpYmgVz3b7YBYbGoYnwkmtG15erqbq5GQdCtkMr4thQz4cmjJ3Yc4U1iFnkhzysTMe9yjZUVBQJSPRGdrGkAxRb",
  "key29": "36Zjs3Vki1amZQSbZ9cb4h2qFFg5Q1R8zWVdGxeti9z1yBMDHN9ur6Qh1Rwnj1MCrsDiUdFacUor5GGncTc4Vivj",
  "key30": "4Z9pASf4MyQzFz6gUVC16ejqHMik2HXYqT3apoCP2mTmrzVkAWRhmUJ3qGAzdS1WuJiR7FwoPQkgD3XFHNK1medD",
  "key31": "4NpqJPSAd5xrAj8z5obRM3GeiaEUAdurdPgdxTHvXdUTJiAxZLNPqJV1LtT9kZp7JjdHhKmiYp8gpnDFbkS9wHZx",
  "key32": "x3sM2FpgC2cdMTp8BybBD3ikaLkmQFEna5fDEKqMymarDGL4GacT6Hq9dRj4kwXVjES12Xuko6iqWLd3Auan3CH"
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
