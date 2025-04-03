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
    "2WsmjHoobZ9j26ukJ6ddUPmo46wZGgFEKyhQdjNQT4VNRmT1Z6rRZH8X11K94Hj4rw5Usk54x1EZL9nrPbWDuXy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6pK573jLPEYrk8E2HZsbiYMcmzNA7ccvK9f4e9BSgGu8mCmSz1xNu7XxiAjRz2kdrp4F6VGqH4dAKxdGc1VRyh",
  "key1": "9edTGRqW2LxHwVSeaNjAkp9tqDABNFmjR7yMua4e2vJHwNhzNgKm76aZmTNwNjUXqreC7ZMeTBzpwdv8W8nTfCr",
  "key2": "56Ru7byAczQ3KUerQYBg69uZ6oxjjXZ7yEK9Hn299QzsLZDpJ73hGkfMSAbR4CSrQZ8J6k2Z2upakyqdP1tgBV29",
  "key3": "eA67xY5r4ShAndfsSbCQujXTsS3DG8xxQCU4qeHAZoWFxdhqGwK5KjjL1GsjiXN2LSiBQGy6PF19W5hqyjs78Qh",
  "key4": "4RVrQ8giaL1ocZv9FiMu3xpXiY152KWfMa9y3eT8EZcoY74ij6zi2uuFPtQwgtwHo19mVP5PU5Wu21TMn7tapm3q",
  "key5": "3Wo5Y9Gfn2Czbok4sHs8BcmMfqagrzbnWzvZpEg6JwxEKstPagZsGqAi3uYSjAVxUsXQTctxm5y7nRphijaYNLbB",
  "key6": "iqpXCNhCvtTaoN7ioSgVkn73K6kxEHW8LxGt3KdzhXm7xkeRnJrzNGvPohLkpsZdeGjmcnurDFtH9WtmKcSYYU3",
  "key7": "4UEPw8d9ExMpA8zPYiefxpCDJ5JRiisAY9b1ge1EEBGXLFQehoLYA64DnDaC8rwj6A3DUoCnYr978Mrxg82fARy7",
  "key8": "3Jcv2KBHnnmTDrYoNjxVU6kchskuK9XV2uYrRHYiZwA7dnEgoGfjLEXsNXKc8d1jsbEch1UH1XDPHiUmP5BwwEXr",
  "key9": "2h2vybYzLQXEAywuiYDxBDHfQzs1PxbvgUtgTfaNMtvB1cQzR8ZZyareDp73nP9Fj5SRGM66zsyWGCVsDh61aV44",
  "key10": "3LuPY2g4MdPk2v9ThEv3ieqppPKKBHvc6KTZ6CpRNf4Yf2meFvEkFRXfQhgF38RmQSJ9Dseb2dgW9kx6r2YZ1ws4",
  "key11": "4qqs85t7UyuQF3FtnTBjLAbZffhv8EuTXnqscNJ4bgQxAHiQ9rTVijH12mDxNorfGPsYZ3tCeb4aQjtnrRqBTX6T",
  "key12": "5ARXPqNNTmJojGKhzz8kUHaJ99HBzAVN8rpsKDiPb1aP44mi2K4dyeUYAndt8no2D6H4GJcnohMgqrRCydvMAXwC",
  "key13": "229dGU3YrFP3agFDQYX4Mie5Dm3isg1FjsShnVK9ie3U1jxWPcEZfoZemVAnXabimioafEBACE2MwHaHeri6ExCt",
  "key14": "4sdteXvgCS4gsQDcH2TNrCgVkvd3PGkNTVbksb71KYNhNpVn7M33gZXYvx9n6ABTDEkdRPmeoggNeWLX9gVTDPKy",
  "key15": "4gHT4h2RbhbVjAfhpsDCwsUAof89ZSXYRDszatiATLfBiY9YYoALZvwKELD4c7Px43HudrLTEEbZv5oYbHKSjcJa",
  "key16": "25Mb975WshMXovhuHFGsfHxFNAP8fgSyYEXMxadqWF9qqBRpQsDSW3mpNcN8kGewA4mY5aS4U8YKrm9VLAsP3xKL",
  "key17": "3CU6RKMoXBRvzrwM1g95NwgNCodURJZE2uQLj6BjR9fncF5NQLmJSnUtRJ6pX5YGdFWyo3zGx3p7c3QVRieEvfvB",
  "key18": "4DMq6pHzADSgPK8ez4XQiBoA6NEuHR7CPpn8KDPQex4WQnkKsRte2p6k3Dy4rVyxfKBMC8pah9TsZuUmuh3LMZN7",
  "key19": "3Hb8F15srLRwkkzb4nG1Sj7MGJa7HNaA1pXbeD4gLMnTj4Gx2iNCxX8KJLn3TYjtrhpEyUAdq5zX9svgb1V3mgwt",
  "key20": "4h71PM9nzYX8b24Rn1xemqgsvfvDU8exNn1gZdSuUNwnwk9ghaGGNbqV9ix5RkoiJWipwoGJewPYhrzu9XK9xr6p",
  "key21": "4DvLoVDzF8RviYH5avLaxFeeBDfSaUpWoG6CFjQ4L7sGi3HzdzuB6P4n1ucK5sbqifUbsH6GPwq3Dh2Hp6sqEeaP",
  "key22": "4oUqgUKz8VqTieG2TEmMRF4Rnm9z5UBBtT4DoiSLdbNYTPanhvWqSDcr8jk3T9TPpuRgS951aw5g5yasH89m629Q",
  "key23": "2BQAbbAZP3Hpoyq5j37CwaP2s7Hy635sMYKHAuw3zFHTAmrdqtwPkJ3hkLCP4wqjWsxCWCAUf9Jw9jBvjQEn7jY6",
  "key24": "2TseE9L8Ku4HnCBHsWrXYRjMQc5NnYqM1SBWLzWtR7w3VTDjZNoxhhgMYXxx1wfVK3s1Ayo5ALSyFy7cAh5wPEb8",
  "key25": "5q4E5QGSQN5d9qkCULvZHHamZBsKKcTMgUNpJcJ9WrEDcSPcQ7zZePQTwKdFWA9v6kRDoU82i8ceTfKb7SZdH7Ch",
  "key26": "3AtkeZk2QB7cnr27P5R8PSq9zaFcKcoR2GybGM58WdDaefvUktGer2o4kWrYqvFBWr6UdxXHcaqK4BH5SeBT9vKY",
  "key27": "3J1be7nixMLtFhRmpyfXVQWR1w221kX5K5DWJAE6FxfEa4ztBh7Whw7tCtGnFK8KgjbhVsC39YTPQQbFrofJbEKC",
  "key28": "4G8k3aaGaxYAqsyjy4myjtARJXXsiWVa8enW73mXXU54kqv35AzVd17VzT27zYEmicpK35JcVSTRXaTErttfyypp",
  "key29": "2QAdeGaXW3uE5YoV6tRzLNTpD6evEA9jQXRZGYZHWg7yzGhD3FUnyKtSb2mNe8AjNqLeKzGGLUjRWLKZ37KmvBAt",
  "key30": "3aYNyZ8Qqvkmg5GMYoZLX38uoqtbn3YjfYFEFZC3j3ow3tpn5dJekGX6PnG2cDuDpkfTv3zZGBZnZSvTgprUpquF",
  "key31": "5zaoojUZQHDNuC14uQ2NBBAvLUBPkKZjDTBYysK9UFSBuLEpA3rAPYb3dPEcRPXi4anxvUJ8wxb7ZeRBdosMFgrn",
  "key32": "481CoJJa46xggp7yRT66QYTD86SbmURQYXURAxXjhf2agthk3vFR7TqNj1HdGckc9Xu4q7z4dLFyUXQRGvgZdEzQ",
  "key33": "3Jt55EzvV4DKMem4WaqCnSyM6ZDGEU9YzGka3DQbo3CHTYnjBdBwa7iXcEx6EW1CSRhuvhaC3xGwxi7woW4eUcp6",
  "key34": "3x3YUY5djKCabeAazXQCPkuAFf2oV3RTzTCa5tmbuW2C8d8u3rNcm1MXRBoWSVywjBaHXbDnfoUQVXtgZLRttQtB",
  "key35": "XaNMSGViQUaQT2rrGRQcTr7rhBkK5dXiyHFd2yskCtfFMuurSf2Bw5FwXeAhjcM5qRGPS1iXQik6K9vfdB3C867",
  "key36": "2zKfdfEdBX1neH53vSTM9Mhn47uNiidMPkPdtMQudDQC7r2Vwhov3219fmL7Xv6Jqdipt1dKbkLWouz2sYrCJt8p",
  "key37": "JttC1gmGvxLrjh4ee3KG471v4dy298sAVrTJycBDdmbgjjCzWt8fKEp9qweRkZHEP7s3uUWWA59mUifpKw3AUYc",
  "key38": "3qbzwm1uNmh1zJp3AAJtZ8ZeXuNC7dcs5aeWEmfsx8dLVPkDnmutVgU3KLJHqKrkSLYiVop2rKUdzs3AxMxQjSic",
  "key39": "3dYM6mqS9WPUVJbLC1FvGVuv2YJTU5WbCwKywnAwqHPKTrTuT9YgakcovxKXwUXewucj54Vnr5PA5Ux2cy1qacEU",
  "key40": "3wU54pwa4yJ4hypMDC29qYqggRvGeC9yGLMWDErqU62PgeJJr94aXpXub4njRY4U96nYNcXXVzybYVvqEUAy5Nx8",
  "key41": "47ymwD3vDm2vqgR6UxPz1oQFuidxQbXBbh2Hj2J7LYyoYQbm7xAfkAxX6EGUGA7eGU2a9iayYkd7nh7MMQu5MUbZ",
  "key42": "5zEr8sgRYvQAZTsgTBr8wW4UHNwMMstdQSXPfHXvgDMn6yPZ1dcGqvdPo1coBj8fEbPq5SPqzmhMKkh36rSXxf32",
  "key43": "2JxtqGVB52zh4PA9vbArEyCMCyNgeHHkk5DrAtFNdvo5qeK7tmgLuXV5aqSR4ZgKrxkHHayM2YNhnhaBiHcNiGfM",
  "key44": "ZVJHRY8fjcqFLRQGXFamqWeXcfQgMVRoKuomoxeZMxohLiuxK31TN1bpXuT2bkzcRbKyCCdVVzf8C8kB9pY8Evz",
  "key45": "4Nna23idstrTC8uVb74JM9websKybjtbg7nxnNcjcuhvVbaBXCodC4TDeb1SioQALat7wzvRM8yy85UxoH9FR4WZ",
  "key46": "jvFhvBEXSPveiwqZbCL6QF3Axsx2oDiN6oYunfeiLN9JzpuJf217jmCHhsWpLKp28tuHo52xHEcu4n6jyySfx8Q"
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
