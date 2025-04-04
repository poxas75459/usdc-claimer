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
    "3Un2TnHkGpW3VdSL4b6A7imn9FFkbnKFpBPXqHo4TpwFfjr8ExX41WadAtvSPXa7Bi6g48CNyN37MgCHLc7YwQsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QZd7jKpbA3jPkf6PpuooLdrhQ3nVSx2SEANJsKkgboK3TCjpUYLak3kWttyD4o1ZE3nQXWZjgZHdK2nLqTw4zSg",
  "key1": "5LaP2zodBdMLML8bxEvXGhK25sfwDgT1jEVwGfXq6VQCxdA8dGfvQLHZZ5WNYUMhKRYeynw2ExXubu5pH5bghLPG",
  "key2": "3UG3t4xqqV6uJUF7NqPCUdhJeUS3bcWwx7dVNt1N2BSHr5zEJqgWCtf9gCNrfoEP5nK3kbDZ17Ee748HNR9khzS5",
  "key3": "rkEUL16WjhL6Q6pNiB99dYTYQiiwqg7CkgJpc9V43hakSpebcqsv9kXCU928CX55jYXxieGytUT1PQbwqN2WTS7",
  "key4": "2zKUDSt21VusU33ZtMvEAs2bzWvNJWkFdr7CqyfELryFw7zpTFcde6PVvLfMVpW3xq8ozqgzhi9Hy7T111Kg9NY6",
  "key5": "62iRQ4Ag6bN6TmaMkXDdPzPNhb5K7KJbhVtDwajM7k2Qxgppmvogmo3pyMtesPvjF6JDAHWmNiZpe4FYThg2EDki",
  "key6": "2vqMRmZ4U1hZCmAHwmcSJihYsiiSDTtEDB7A1KgW78uauFwdJqghY4PPcxdFCLn9ravpZMoULxLs2sR9ZBdsa3KD",
  "key7": "4sHne8YxcGs8H1Mb3knPyoD1AgyLDk5y5BRXpTfWn6s3JUvwTCB4VgSDs3M5TYbc9kkHCYZHDk1hGCh14UaUJisp",
  "key8": "xLy238eGnCwSNTpuSb4Qk9psr23yL3b5PTiw8s3ajxqa8LV8nb945JGDU7w4md9oS7eGtZh4xSmMLxBnUHTw5F2",
  "key9": "56zyKM7bksK6KDAfBWutj6rmBtDnRwPLM2i2exRt4MeUfumA8r6x5H5c7fUaQKed5pjNkTDGunLCFH2gQUmQ6s4T",
  "key10": "4t4Lt7pcdvcgnpQfFp78c9yJuQfVDX4Wx5eVAyVmSttbompWnZaxCzPuTrjLzzjCL9yMbWzqdryXYtMKacZNCac9",
  "key11": "4f6vE9MCeG2eAyL7Rxxo1wAZAc5J8SH41S7deK7k6RNAirhyAXagz7jvtHhtQKMk1hEwUFgPQb4gRLH54f13UK4S",
  "key12": "7GBHnbBpf9iauLaoSNZaGyNTSSeFrFeAxNWaC8Nvi2q3734rpwVwBWTRUg8RsUwHajq9YqgSZQ4QNnMpX9i4Hss",
  "key13": "stXss1FdEP9g3DKHugtrEVF9EsZ32SsEtQy442Qcxj7hMgFa9GDPmJNpgvouV2zRvdHzRjfuANDtZ6dNwayrT1f",
  "key14": "2TywtGCuzqHYMmV9tUWaL4RRpTotNNGvL1Eb8yTwoyjLB1GzxszaqT4rkRGAbUBVpaazuT1JdHCqigjFZfa2AVVG",
  "key15": "3Bokb5RTuMXDKdtwmXgkqmHMs9ENLrscbYzjdF6tQZ9gBMx6mMhMFsPSLGFv7SxTKfoEA6mdGF6qjH8cWvnbDWM2",
  "key16": "5Vzo6uAriCJ9Pif1n7Y9xFryBBt2iCMfe9Np2owNvyLaGEQ5bfhNth8KMajzuTsxWonLinGPASczYyJtaZLwz8Ws",
  "key17": "2PoJATbrENRHpwNhXmuyMWqvgNufeRzWCWTZ8Zfv1LrfQANkZaAP9sT37hSqZgUHgnfffbEEHMX17jHupgD3kK9f",
  "key18": "2nas2HPgqJBncxrJESfFSLGvRUTZhZrTdAU2tEECcGRKhToohdUcmZdtkH8ZwJth2Puu5zui4K6zsnPrbnfQwyBV",
  "key19": "3EZxZbS5d84i2HaGWTQMdhDnw81qPztZb6VFRE4ituou9qNa7CzznfgdaaKFQ5A2vK9C8oCoyDxFcoRY8D141V5s",
  "key20": "fPBcPN4hDcXEmvQ2KYjre4iQtvXvM1iRLeBD5mRNsPm72wGFyxR2QzkA3pd6u6YgpMTVtNZifrw4nWafqACqms6",
  "key21": "3PDxTHz7NZS5wxEt9UiRYM8DjycN2SVrJQAZC4HtSKD3KaVmrtYVPnJ6GcMXQRGWUBqyw4LQfQs6QRqgp8QmozyR",
  "key22": "4T56m62w1WZLsDKTwMaXwktHbXXDSkY16NNL79hpVP9MRdMUnrvmGZpHte1f3hSWuyYiEFT8i1Lab76dofq4UQzK",
  "key23": "ewJFGeswPK1rLjg7Bgorkjp2hyZ2TbnSeBUCYF7EBivFmp9g2MgcHXDcs9sLnzyD1nk5hHf88WFjukCbTwSzGbD",
  "key24": "2FgsD2qnBpj3BTz9sPTL7ysfuKhgtnrL9zvH28xYMBxL2Dc4uvsnqyuSczEGUqfC21gzNmGwwncQEANKiXi9G9rh",
  "key25": "5Aty7A7TF3dg922TzQcvNVBNPgjeou9cAQ35Dr1CGKg73LiZ9RWboqB9MLhE8nVfB2b3vWA5Re3A728aQYoD12vY",
  "key26": "3E6x3tz43GRame9wavEWmMgjGE3W3BNE1kSL51XYmdJBsUHomDaKSjwvJHW3UXcCFxhufyRHEeufRbBUQAGEUd5",
  "key27": "52Dm8PcDNanQhXCkAVMaRFvP5htDjQu4uQuY2ytCYUEyLYV5CrbULJ54Yoco2SSNuyxEcwjkbExw2SHG1D31yNk3",
  "key28": "33TmK2AA4oV97XMMvsF5dND7KkkzaXmCXZG261nrG3MQahBV9ZcgqCRuvQEehfhyTADycd8zCcvEaeyZC7o6tzud",
  "key29": "5VSYBsjhY637p2LEcQrkMeGb5bXsWhadMT3xVVTaG72BaFLaonQScR8JdHnQgWYcYm8L8qw6KZqTcvebrfWhkN9q",
  "key30": "4iuusAKgKfc6xw7idHyw4N42DJx4sKM8xS6KK7qphqAMQj6zY4bdRFemr2xpLTbcpHetYaMS6gfrwAi5Se2iJE7T",
  "key31": "66J4ryNkfRcYUBxcQTVfmHsuZpxEifFTm6Wa2ExgNRR2VPVKm2Coj5cYiachNW5Bmxuqznc35TKxacWpwsPyEffY",
  "key32": "2siT7vNBYvc8K1RgLg5PpWyq363k6SjwVutY7ETtqSY2jVAr1eubPTZh1Q61ue4Ci1gom3bpFLVm2b6MmdXTUiYd",
  "key33": "4aHMwTJc5vyhk2UDzyKdHk9JEzUZtLpXAePfZtooBzHhJD1EjG3uAbqj7HatccyoTdQBC6h8aFFPYsZNW1eDZwp3",
  "key34": "ViwkpXFd5Z3BxenJcfr8psfVofmV9orER941xjYpXL9EsjB7NNWMjViWMRexCBkrWpiBc5QKChSJinbofEuR3RY",
  "key35": "5ncEcziWDRssLF5VJPRXBjhthbFqJks956qU69Er8MQq4Knr5HBANsJSfQHbeHV5nAfWZd1bux2Y2B9RR7NTym6y",
  "key36": "AiZtRJsBzvsBahUzspTZELVHAEUHBD69BsTykeSSZ3aAgQ7AQtcY7PJHMcatYtY5M6VD2H5mLwmW49xGfHHATff"
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
