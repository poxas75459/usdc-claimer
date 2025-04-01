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
    "5if7zYaQyrcfyN8gQ7Yv1JcZWzrbcjUrU3mLL8SBnoZ2qNFyHnGM8o3kzjLck9ebfkyBSs4cmq3SAEHzgSCyuwJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UVcckVVfsxfsAfqn8ayC1XP9XKB1DRcC5K9DzX5D5TicH9QJ8F3bokJxitNftEkVBL4egFgFeV4ddn8cryxDaqs",
  "key1": "3g3AJGAZxTRvuHEqbJf9BZgYsdtUuWewP9KKjmpfY7U5tnhvj2tQJJv9vfJojDdVSJCxSBcuKLC5whiuZVuMvLSr",
  "key2": "4ZMKdH3eXuoRKvdpgcovV3Zc4LoqCBmYjJcWY8M9fJp6iw5EGUT5qf4pP1evApJ12MnzwAsXAS2aL8VL9A366BAh",
  "key3": "4wWN5VWJ1jmiKKvEvc7GGh8aHhW1aovt3kZ3TycPDAdJueQzVQe5uEP6AQEVNE2F9hBzhmZFH3uMtAXEDzPZbZWa",
  "key4": "65QSJmKfhkwZsh2rBU1nQcuQJcGf9EfNE33TpT9U3NmsZmrmxKDXPHfpKFDvrhgnDrfynLxtfpFJN13HnpmsmbKa",
  "key5": "3Nu5E2UJdTE4pVw9LMBJTd7Tu4CBkFEBQsynHJepvTDDewygC2ekXgGnwypAt4WdiYtpkrKkzo2tExMnoueSJPPB",
  "key6": "5E83hQ8WmEAr27s3R24dToypyG13zAemCC2d8q13mQq8gow1Y7qdFiVAmKQzFm3PUF8AUXwVFTLKYxW1HgSKuD2M",
  "key7": "4R2334L1DpLzSZYZLgfNCiTWyJPuy85FHDGy41LkF1AizZuUMMj3HDC5xFP9hMJwNX5XNBvUpa4Vj3cJjHwMyDFn",
  "key8": "45cRkUT7JozdEsFy8aY2EagqEb2KfqFWJu1m81GPLWY6WLvuH9KjSK91qKToqB2MQyH95hZDEfhnU6LMvVXo5Nk9",
  "key9": "5VCoXhSh54fpfCBvfKgTo945CE6idM2ZG8W16gHeChGpHDpQWcAKyEm4F48rvaXoxTu1sNYchMJy8R8zMc1K9ne9",
  "key10": "3YJAgnuxbvc8xTP29wcxvNnWsnZKq2Y6JgZB4Vzk6BuGBfKUcqWwtBGXq5r1TecRUSgTUtbJj9Dyxyv7V6WQMt25",
  "key11": "2dNpPBQrhFJkA1HcKvDEbeyqrZB5ZQobR5Bhh5ihiRRdvoR2Twt7Dpk99xYMyuhLwsVk3RVimRrXvni96AKPaBLY",
  "key12": "2RDnBQJsMd7W1c9vq8NDnFnrM7aWTq2HQMKFiURCqkffDvEg6Ko9bqSefGiSkEryfYaALTG1riNHunsfbFi56okL",
  "key13": "5LZ5PEFK23QdM12gVby8P64WXYguhZKQEdvggymi9xpre22xDmgSNz3ZTe1JpD5iM9QDdj9DMtsBN9VxLTFK8pwj",
  "key14": "29md39j1aRwpEXqwkdyNwL8EG9ZZSzRVXJ3dtT6GjoDGikQ2dj8LXRAiGT7jjjSk9SB5ovJp56ZNvT9Kp6pscGNC",
  "key15": "5LCU2RnsdKA8ToQLCTVYN3AaWBLMuv33CKMdeFafc2ao71xpBMLPporMrvVMYEcbtQS9KUZFNu7Nqvy56fyamc7z",
  "key16": "3zhopTEvzmpPJPTCWXWq1yVJc3RVon4BVHZa7r6QgnBnKXMTW8iSpwNzDBKCLie9GHeR2zWcaN6HyRMSyFodEdaX",
  "key17": "4i4U1te56wNxbzJ7xsNeX8vaPMoDrnSg4gdxTJTupPM7Mj98MVGceeYPYk5dSBrF7uV4GjhrTSd4isASWjU78uvY",
  "key18": "2jGwh4pBhF9BYAv88i5umbko9Qq5cioATQGsMvZtbLmMW9bndQg7kREWfYLdxoGAGmHTuBYb36kwTMuzcAQUYhrF",
  "key19": "3kSM9xLFkxsQoYffeYcDiKpvASRbJ66txrhZPyXfEpjtFXmWfCxzhTZb8KX1zZikX1euWWsMSZr7iNFy4fgnrpRA",
  "key20": "3RFj58vLYuRqBRP121aArCAVTnPdTEyPtJPkeWksGxrrZ71qJU78wkTd1c5VfnnYpxrdQoVSGb55atxHy1SQ3HR7",
  "key21": "56S6Sdu8MSdMDXrUo8muNhZnEna9FMfp4go8iHrAzpimTkv8S6rkMUHRrvRrqczR9hNHXFCUSTCkgZjA4TVx42Kr",
  "key22": "2696NMCNuqUqHZkSjn3gWyU5y2HhHADppmuv3yz3KiaMM9V9ExLgNsGa7kiE7zyYEB8wewP1bUCCrqLj6Vsxf7bN",
  "key23": "5RM8ESRQBfQKrPzQ9zk1W3c4t7sbKYYr2ukH2MBzoxaoRJAoqQUzEUk6DRcaJorq6agxdgQqjbsR8ViSzfx2nKVK",
  "key24": "4ZCqgh2MxWNfdG6kVqLJr7hpqqCpCvQiy9dCji4aQAoPdZowAiCSeuw7uB8Ea7T2HAM2BbF2YHxHA6vd79i5LCUS",
  "key25": "4JYRh2sr3QRL4oDAAqyyVc1MSVvmHZZBWJBtoNrThPMnF951xFZASyrdcuinUnYpPRiLrXbuSKdT9FQzzgauyrVg",
  "key26": "5dSWx2nQL69ULHpE7LBKvKXUjyJB9zqCcAifPjsg5ziQGW4yoYUuyLd7CN3CyrY3YSNR1otSEmQft7cre8CErWzX",
  "key27": "5FBRG76RuGC9sFeirXocoZZCCdxuuLgoYjpsEDLr3j6AtZi3o64qaUkn4xiu2m77ZFRTxMLzwcevq7pX9XqmduFi",
  "key28": "2JKb4j87g6txFkTsXhGk5ys74yEJBb3t1iLpAMBiNPvaomWFWtbprCspks6U4WdM8sAen5vm4fY4fgRzibrGAeAA",
  "key29": "53j8ErWNofCtuon69txGQXTKovvxJqPNaNFonkf9Hrg7g2uAtNSAJJm4AFwqAJZSpvTYPoYruBySrP7pYw6BmTwF",
  "key30": "ztu227bg5eQZ4YPzLdN9DbvE8XaREZMkswUAYiEUTfXpMYczX767Be8UXxuHxXeDcTNnFCY93CFfSwUwpeydhVN",
  "key31": "uwJHq5jatJ1F6VXZaKA5SCRDr6xN5qoguxtGm1mjzxrY4n1VvtvKoY1NYoKycfwbis1AM6UeYTy3SVHqb2RJbhw",
  "key32": "4ErBxGpVYZyRb4rgbJSF9cFauXEiztg77xQTMPEs2TxZiqJJQAfQx1iKW5RxfmiLv7EqephpeBRfT3xUVNgDPbrm",
  "key33": "3idkiGGkKHbn8tCyHaY6aFkvpCxZVcgWFDWTx49WbFftouVQt6w8T8QuM3XLR7zP5H6BmYtRJjHwUY5n62ScQLQE",
  "key34": "2YphM8zmriB7ThmhzFhMZYVpqQmzVtgxfLoEjEHYnRganCMwJdZnPdMVMrSgRRQTEJuPtgdzPDqAGTpbwWnxp1uA",
  "key35": "2fUs6NK6ZDadYnR5ZquEzx19KdnaDSYLqN8BwJ43766th4oSDP2qH87qGVA2x2qASQRP1185xjHeeitPJNtgvtHj",
  "key36": "YoHdREbmNsPPUhvF6W8DKa1GGihk4JqQSPC4Dwo9p4PcZY3gWHVtvsfYt9eaVFsXS41cvyaBR6Su2boJtEge3wt",
  "key37": "2ecmUJigRBKGrJui1zjAEMJija7Xnie6rfuStvzx6GdHXjhCz1jBdaMGEkSJtC6XMKhRazsR5Y63dQCTHNLUo5Ui",
  "key38": "5rokV8dCPNZsyrewqYqmdrK7tgxvdU3eSsgszsanuJrrXgbVZmwUs8cc3KXrhEbiqeR73Nq2JCefkpc7GyY9Kd9S",
  "key39": "5mXxPyFv6ULC5kJn7JQbaKnsWCwpRXbdsXpGrbgMe8nnhvhAGTQukDVAkoqrsFHSaTDSt1H72WiFEoyeZfRXTxnn",
  "key40": "4ZAvds1Gd9w3dyuQn2LDQFvWFiAaErpooH8oot93AiFCegkDuSrb9xzbhk951kBQnmBE6g7a4RYxj4ReVjdfB3d3",
  "key41": "2SHgf2D67jRXwPcS28JV7XeibhDbMeo8q23cxRRM7mBnu8LwfmpZ3UsWoLZYMivdYn1FzSUBcAgrqL5i8CxzG5tE",
  "key42": "2YwW27h8ce3wic8KvnsYqci8jheLMAKGHDR47xpdLgatZfnnJFtfNnDLeaf5ayCnwmMmhr2bnLpF95MgLnGKe5Nd",
  "key43": "3H9orD72ffPLATeKVb5aqzxy1c394nTFYtgDxHzbb19k4hTqnjTocbo8Q34jst7T7TvDMfvjqDQixz8EUuwhCM1m",
  "key44": "W8XXuAaS77mvGvkxeRQnZZBBx2Xgr4MxjfUfMeFV861Pw6pVbFFQGeHE3o4EozBmKAPaEnT9nhhGxViXx5MebMh",
  "key45": "5FdYyB1pPnpqgdtMz9rNNKS9bq64x741tLCC7fBvuMepaEVSLc6AqAKhWzDasqZL7ApWsxFUSLZrP9peMKjXuvnF",
  "key46": "45KPvrXG17PqpVVpuv9e4VC4S8z1bZ3yXbCkvuH9QrDRX7fm8JE5cdX3KYoae8RseXWJRnuhj7MekMjKqgFJTSeh",
  "key47": "27ckt1tbegawTUw5hPopxQqqKuMrWD8wqxqNuuofjkRvdfXMvNnyJFsURmEhRVoxGm71qDfPMR7vDxRWE9n5MLec"
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
