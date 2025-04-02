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
    "3LqPNn3hrJ8LMY8Qcu714YPzkXapvcN4gwNJmeqTocSaPo2evKMAUVh9gabnR9YGeBPgARCGNQGA8nMxa3tnpAvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KpZND4SndBmWS5tsq9vhRK6pZq5dgiZQMWsNRfcyaGDrDSsvRAhAdMzwzLtw7VxM6qaMJUqpQC2LaCTRvSYmBpU",
  "key1": "jgqzTzXAPigE5Fxo9VLv7Ywxb9gn1AzE7djzMCF2QiUgJSXZSagoVbc9ag5vFhuyqZCjWTtUuoZtiARX25f29hs",
  "key2": "4gZXYM8xLJ8RqPcwBo3TW9JbstCqHXvQV7jiPUynVsuxo45LN4pKUYrHNUiRcYn5bcPeeeSAFHdeYA4CAtK3ahcj",
  "key3": "57Ykhv2SZFbKmXeYgvVVqjXSjNJne2yusoAEXjMQ1UVcZAX8pAzfhfw1DpHuihBfrJb61EP7DmmAFUKHXPDtFSVX",
  "key4": "3uYAZZyksbbKaSRKzP4cQqc18SuZXcc4ywZUYdCYEQ15rjPk31e4F7yj8jg4MiYfNpfttdbMssqXwQt7c6gg6RE1",
  "key5": "2pCN892SvSqUSj1ogZ3xJyYkKaRxUHu2jVbutigCsSHb9Qu8EhUSnaAf1aY79b3zw6ZgZhXzc4ZDNPSkm3FCYZwT",
  "key6": "2ifkb6HToZZbTsYMGBYAgfuDzoHkgcq147qeQCoQkxhg7Ti8DfsC4o6MKiWfZbhEBTAy8JfjPQoG7gdP8v856Ufy",
  "key7": "DsvhQaW5i8rpqNe5uTnURnWbfby4rNc3KWCovRWsX6UsLZQSwU98kqPPtagiCjntwSpJn6y2esHX4PzVwDb3ueU",
  "key8": "3pPDNHVeVPkxn87bCPuubD1rTW756Uwbcn189varsMTggXLdUDFbidNQLGtXqYfFb1pqorN9eACJTzysjxwjK8wv",
  "key9": "24TzLoGGK8yRiJ1vQtTJ6Tki9YWbWzXspUe8k6R2DXKoMHydjivDcFMZy8pvoAWM3dtayEk7q2CBUCVb1B36gnu6",
  "key10": "4q9vHo7dTpu9mSF1cUokzGYNGNZn4PTxLgaDmKbKryReEuRMJxfjGMxVU95HR27eJeAwf1BQyxzB8z6EVypzuim1",
  "key11": "23DgnTXqRuGXcxpSzB6rp55wYeyi7CzTxZuQj9q8vkWsixxErRxbHYCceXx4Aa5vjfouyaukWjfX6QUePAwQMUva",
  "key12": "bqBzJfxs7CYTmTapzauEQtH7wDp2xGDvkia2MW1jHGoPwnLvqGV82fwpDu36bxgmWYpc9ye7vEECHx57VG1oZBm",
  "key13": "2S1agDU6yue1yArSBqor15BEHjzZpuznQ1BMoxWx9H8KHcLuNM6PtyQeEvMFpAo58C6Xkc9qesuc42fqVynqHT8y",
  "key14": "4NoTaZSXwMacavQQqLdUTcx3cSjbNL8mcrQPQCoKD3DdX1KE9HyjKpSorA6qJy96ViHR52kFiJnNNBP7JMc4zaVZ",
  "key15": "2AiuaMv6tuRWwfDkYnSxgwJ1xJyVnk59kEpG8HPbAz97aErksmstQt6DRDrmW1SJYp6Muifin5XC78dJN3NTLHAJ",
  "key16": "4BRCTVwk5WUJYTdJ6UrWLVvTLbczopwtiLMjoMqrMuNapVgThoXGTYRYvDpWduAEQfgELqNzD12yLPZ9Vp5EPS9c",
  "key17": "4SxQ15d7YR2krCA6VE5kqPbz4pKWLYBDYwV9goHb2CwqWiJYp5cMJBExtadUXYMxH7swDB9YZkvZeHvuBUVaEwsu",
  "key18": "3BgbjRExsEu2GxtJVKPHt99dVo1H1Zp2wBt39nDgDpcLAEANEo63sc8si3XbU569uvuP27nuNJJUBnJb9WvRT4vw",
  "key19": "2HSu8a1cexPiQZzqfKyc5B8ZB9nSwoYqz6oxQiPxTVMRtsLanUdF2vX8MNZA9RnDdpgUBw1u5HZD5hCkwASmRqL6",
  "key20": "2eD5SjgMCvSxAwsVvA3nXGSfKpz7SDkWZhW9GQtov3gsVmbFu8z7tRXjHSABUqgsJ6SqgRudNNNxTaJJSxBcuK6D",
  "key21": "5vD5PXUWdTP4KuyHLNfxsi3BsENWWVviQPRSyjXgkCmf1P4YH6bCwQ1sL2LXGQPG5nUnWnd2hdEbYAavWswE4jj9",
  "key22": "ip6gcEbVuBHytruAN9ewFwMRYwmuK8VuyB1DVYHAnE1qZjxcutrohq8p4PtrdsCKqmhkAporLevpiUj8Cvf2KvQ",
  "key23": "BhRbWKp7uXRvSiQ65usWS5HjEUZqwut37DKZzXrNPrV3DBTShrYa14qwboRCvSqAGiJNcNktHFx7ysHrhPbfmY5",
  "key24": "4UHbwLed9HNrXKiZcdZmr1unhcESwYkpBN3F5oD8iu8GKzpwP6K3VeCmzNXwvdUPBb7o1eDEd2FYRMLfChb9WtWx",
  "key25": "EPhhstBxaXoFV8hDXoRB8SHiW8bChW34LfTQntFBVyKUfb7hwCVb6Vta8ZvnpMjz1YPYbhFxTUi3CxsZhTpQa48",
  "key26": "42iEwQWS3JcuvMjmero9x6YUSosow4EbK21eZ1Tm9EZyX6ufHRNznMVbt4s2fFzmE9PTc45dFdkhFmTsC2m5YLNz",
  "key27": "4PL2RXvZyaHgLGV4gfSkZ4Xg1nb7fd7ZFDNdJ58bczUwfCpBpzJ2B5Xq21skZmcBMACjLZ2cZPfW2w9SDastFDDR",
  "key28": "4KsgDvUh1y4jzF48rvSGsH5B8ZduZYCmRw64p7tenVasEikUBiJKWkXwB9ijsVP7tiBaqGqtScHt4ScwvHGdiSxB",
  "key29": "4LkeKUL6eEwzzwyudTcuBThGMacTKPu2rdJw56aRtyUWWzYfTucQYxMWCpZaD8DPy4bEj6nFLNiJETRt6Jotc1Wq",
  "key30": "4zidrME5ApecUbGoocQyJ7CFiFfNAgJ73bvc4EnvgQLoeStGqxo5s2NEiD5NdLECM5FstQZVugw8r8wxReCL5W8Y",
  "key31": "2NGFMNoHwkKG22fAxnjXdr5KZ9jVm2pg78CyvR6xN425ccWM8hqMhZF9tJ3ax3AhmhdNsESvQr9Q7fZfDB2Qar7u",
  "key32": "3Q6VkPp79FQRTv87rCXe5KXuT9RdnoQeNQpptr2YSSkQyskiZWQAwJxxEHKh7VtaUQzZMWaWGG7KqfKQcMM9868D",
  "key33": "4j11iAmKsMTAX1j4kNPj2LYmj6XgEuLpMcqhVFiR1d9M23QPN6JPZ4yU4KodQhZiZRCa9djPuCvYxFAS4g69Sc4H",
  "key34": "3FnsdMcKBVv8HrxrtFHAx96tiYvXLqenHnmLsz7fipRPbAA3viwbi4i6MaDaWZBpSXgo7U9vmHXLva3rF8YhjuSs",
  "key35": "4VNtUYHCrWHmvTtUhcfiExoCSAhy65Pz5cAGGugf85QyAnK8y9fb3VUQw9R6Q5d9FS2gVuMaZiusdYAZWyGFuF9L",
  "key36": "44w75RBo3hWTjDcHSpse6Mcao7eKgEKrr7UKQCHnysR42pdnR6YNDptHtyNpRZ5aUC72Ce83Yd3gokNDmAdnnrVw",
  "key37": "3GfFUtJcHhYWNmfbm86YW6JnJuhsUr9H9gK1VQmsZYP33mHvZt5oDZvzqjATBkbDP3eSGSX9f5763T8kjwtcRmnV",
  "key38": "2ymHXAvMJiKKa9HnWd4xES5TUfRkGMPQ1hcZ2aQe2z7AmWTTXRpGu7bsPXtv713qoS1HyCKmdP4A411fCLwjMYsi",
  "key39": "5qZtoFChBXcD5pTRZ6e5wgQsKHmd7Xb3hmdsug8MYanArsfdddQNwea38oyyDqGAZ4zt84rvDmMD6yNK4ykBWPTo",
  "key40": "2PacQYXi3VjDrpNimK47DYmHGXoF8Jr4xcHwb5QJyVRuSuf6DbGFxCVetDeHcad5kYjQQ1rzdV9hwMHhWUDVuk47"
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
