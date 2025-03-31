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
    "5gZ7WSVoVXkTVLFe9LEwUEWAMxBt25YbybJCWvtUjoMpsXgnGGwHRLpFc5EnhZrvnYxaixEDoZSReYYYNnhXtVjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53YH7zpAc7iMPtKPpHV1yUqRrDu4qerHuQNQj92kpKR2K5Jk1zk3BadD4wwSWtiz1YBYZSn6tzW5McjczXBFhG9Z",
  "key1": "kXow6NsUGfVGQiCvnNueZwWN8nw759xYm2gHbaGKdU917Sm1dj6U9pEeCbMx39jXaAQYf4EoSnsWwvgWnfe8rjr",
  "key2": "3edsDjmCQL9jznXydTrVG2UZrZmAbvF6K1JLorJhkoKpNb13oaeNw6GKudNSVmX3Hux4oJ2Hkz36FvdVc3bUuwHt",
  "key3": "55WWEB3r7qZMaE2ZixBPXpn4YUmZ9wqGxBh8sAvR6tpY4PhVGzRM3LKReCUSJv6o3jw8abhWyDDgUHw6j3HNTP6U",
  "key4": "4i2sq9ReNbYnxQ3fj8AjVDQkf7Cvy8hkVXqwohrdsLp1gip71faAdNx72Gf49QTkyTwVjeEiPZtxZLYr7CYbUhoV",
  "key5": "526qgaFTUMqXKosYzV3DxCJww1qLjiXXQLusguex2qbHfWj2DURdXoCdP74MibzWsCuUFwoBppsMC55abWBiGjqn",
  "key6": "3LfsfKXhTvchj8H2zek4JnaF97nr1wePjQpRdfb8BdiHYipGUVsKYnUqxF6fv9fwTB74MwnmRySpKrHXEvd7pFif",
  "key7": "5oBuH9V99zYPkAqVMjNxtCbZJsPh89E7Ud7np7SnYfetgLjbz2PwJ8h9GGKfWVdw5pAoc78GV5NXzLztuQcppppM",
  "key8": "Emik2bYWEaG6gQbfEb8PCjMGCfvAU2Eo2ewZvEPHCCCpZF41GQM3DLqwa68Rd97fMswLx5TekbFWp9RQsWAvaR3",
  "key9": "44QZrzmP1nAFN1tTHbq4fZ3eVHq7D7sjUQave9yPRSbkiFdAjExLcYrvfCujfMnawbpzubSL47Q1ZjysCXBQQH5r",
  "key10": "3xEZEFvR2SEFipg2PGi7xp2csKUp1JNvJuzBc7Anir9cakBa9tV8cC6S8ipovykaknu83Xveh4q2TJsKKPGAerEQ",
  "key11": "5SiuQ4V2P3mPpK3XoUeyURPsLp931YmTMJMQuhd8n49xvuX2PbbTPkAGgaQNhkpGSt7JYcMy73QowRvmuXDZnYfm",
  "key12": "2hY7hhrd82MLGVEcNNfYM5dmw3bJwiBnzmknVqB5rBfeMX5Fv4HMMXJS8uGk36ZRLghzaak2YpVJW2iXdCRSgLhC",
  "key13": "4V58C66hTgHMCUb2MKGmgZvMvDsg9jqWpJs3TmSF9ZFK1A8MFJLeFcCs17i6dJUqCFdCUFnBtx45biXExzPxLmFe",
  "key14": "5322evLMrYh35jdQ8J2YV76MXgmFoefSmTvqzJycMEosefuYqXNqKscJDLckht1f6Dx1yXcZocW9WiT1VvfdRuGB",
  "key15": "tMWWiESBkik5gP6PvVhkYdrBcvE716NJMTjpHVtFVM61f8iksFD7C2HTprrLWaWHptPysD9XreKLGMar7fheMtX",
  "key16": "38qxzGHg1NwVY8RoMa3xBDHdRCFmxxwhvMwbacnbpNgVxVRW7X8miNFbrQ1DKYBdj92gS7UgTgq4hT73ZXJYX2Rz",
  "key17": "4WrMBT1uk1VsCkwYXHZkUV6ubYNe1nkMBArsZU5YCFswD9EdwiAbXSSAtBRqYSCg2TBkJLW7rcJhVr58S6WYaX3u",
  "key18": "4o7bMP1y7GUntMsAvnxFEBLjngncu62dUm7nk1DHioxMTUobpJNz3i9BKy6jh5C8CjJ36TUzh6BSUQN2ewLZEshJ",
  "key19": "LDsWXHGJRP8UVA4Ha9G3Apdw9JvPGqcb4xaYUixyPoDWTPzqxaoshWDNdMQiAjePKvXNGKkPijco55vs2eB3UqT",
  "key20": "4QAUeBKmCEtawZhcyZndX8Yc5nbREru7TMrWwdisZ3fA94Zy9PcDrGXSqXKpW1pcMf5vodteLrETubktcAeJQQMS",
  "key21": "57TSZATrfzs5rg4KjCwMhgMEnEstaetB3axzkWKzEXFD8Sskdnn1izgJK2QyY2qAwriwV86GHCwLLUgum2y6Bijr",
  "key22": "cXgPYUV4PuiLN9mJkLw9BkGmvNQUyBFHc1yArDK7ZSHa6et1KMgxatkiP23ZCAHrJ9v3X2ejysRqDW5vubLajnk",
  "key23": "4wAGFgrxW8mN4t21QhrzHsW7GqQW1DRd1c9PxvTPbjKHLBx1dofGmjhtRcaxmrXmaKgx4ooKgboBXQecNPD3Ci4y",
  "key24": "5qLQr21EKtXFoTE21dg1i1C5HEVhHboykDtw2DZzVsgzZKMbxmFtned6584QrXGyBDP5bQJrM6WauGVgv8TJmgTH",
  "key25": "64Q7bfdoTCjxQ2e1rspVLdtgERQWHcXVdGxnoaZiWrz7mrCuMJny2pYEx3DCq5i1FgbCXUbXNPCN69Pigx691fRb",
  "key26": "4YE8VA2dAX5dbxWGn5M1LTcDCAKbmvi6jcxBo8sHXJyUX76v7DnzvgraS88JMJfv49tgy7wg8hoNakKeiCvLrkDE",
  "key27": "64xy5G986fcvQ4KcQJHcovB1M5nfGAPPvv9h6HVqJZ37s2kvNrSrFvubQR4pXRadsGLD9R2FmX8anqP44zy7Gnqi",
  "key28": "2Sgb8ULhhVdA66NEFz3EXxyqe5icdff2TpWmgyEtY2jFtYj2YRiew6keb1LbW8BHE7hPweMAAbf2S2UCwafQga4j",
  "key29": "2FrjS9rQHKncrvneWcArYmyVd1MF6pL2357ALkM5jSX1AVBc5PsgVmmygQnNoJoRC6N9RZHgYTFRQu6yma5nbym2",
  "key30": "5vXPAM8is7Th7uzrLhgakDdAopZotSg8q5Mwu3naPRdAtRh9rRZeRC4Kf6QCKUJuq6MEgtUuPE9HsWZUL1Rn5dMJ",
  "key31": "5RGiwVK11h3F6fxgccWtCEiNCqgh9DW84DDqMiCDQA9EqR1cE17eXbGmQcF6PajEGaC2odkidsi9rPpa3xxjz2qT",
  "key32": "3PunWHAD1p44NKxry9EZU9vBd9qhAQZWUjPTgYy8kDXN5UhNytMWNbgFdSW64HQ6PfTqwbWQ1pXRm9B8de7QHEtR",
  "key33": "2yE5WexutfhezT5cfzJGByqxzMCLCszXxuM3uYthjc9HY2LhQ9Vy2qqcTxpybcUGUFj9RZrk28AAn2ENZqjB1LrG",
  "key34": "4CmVCvgDtKkpnVTCMZyVhz4H8dvTdPU3JkFv5R5tn14M5qp8C6yAQm59Z6Tpsze6HtX3q6ACk9RGxA1CniBm4Lpa",
  "key35": "54N6faXXv2WqHf7vrM9xatq8mCrYJhgCYBFXo9pmuFzLEUT32VhkT8QyjDdQWwyGJs8NYoHyUy8XXfAvuA8V2PYD",
  "key36": "55Bj2F87hwWqnhK8y6AipRAoaAF2dyYGsUPn7pjc5PH8X8XsqQ9BaTkq63WcNUtFGQE9DUy31ogv9L3bjwcKdBVK",
  "key37": "zWU7qKd7wPnB2PwYUpztX4udzbBrSjE9JEVXVZVrXB1TQUeJfuvAWENCzzm1HcEpWTrE4yYNCw5vfxe3VXCpFyV",
  "key38": "46XZKyCynXcPmWwyebnpgK37pvgHHhxmCYksyBNx8vaMciXjFazXZ34Npo3otBzDZmaFKXmLg5d8QJpHzD5NQjPa",
  "key39": "4qyjWGeTZrLnXD9Kq2QHDvZKinGKa5CdFDQN61K726UCVa7f4MELgUXnTqLqxr7wEnjiQMtL2WmYjVu5sbMo4SGf",
  "key40": "2SWRZA8QYRzDpy5KcQXr41eVTxos3tAKa93JkCCrdcknZUfPALk34N9k2HBHYYe3a1yvPE9ukdrbxMxpxPSxQKYf",
  "key41": "3mQny8pGTK2yxs4LXnGn3xB3QqeqSNej2TSzwNoZjeKH17R8JUz4sS5e9mKFXMDtU99Zo7cbz5veRDKjhQpLLL6a",
  "key42": "3cTYFca42bMBRoynYWPbduWi8KUgVimiSeJTgAH7xVzxNr7MP69BPHVoqyC5tXuA3AhCUyfs2pAGYXCQeDgeerWK",
  "key43": "5cCqqaBefwSUTkKbk8Jdk3MDEoZYpDeeru4NohsZcvsJDdZqHwzkc9dCqpLf2qVAdHEhAhLQmZHz8AGBwx4TgdEp",
  "key44": "3EgVZZhRmkZ19iwyc3b2YLUmfrf6SdjdExN6PHr9Gve7mMRpd8BviaNVg7SKEDcN7YoSDd8qw73f92d6fFG7MRqH",
  "key45": "4jFsJd2PmxfjvKCSjozo2HZSDN1fNhbvCCcf7DvwWshjqwQZTkrLLGdhWCwcuPHGCAmPpTkkufSmx5NWaH5PPQzY",
  "key46": "26ue459dmCadHGBAQaNwSAf5Uads3q4JyZCPoNwGrL8pHFRV9Uvt374rK3qZMbSaMramFNr3rumTpp8eUWFHmUAu",
  "key47": "621FVwaCjiug2gEQAPX1ouXficA9fr7StsQQQaqVHesaEYpDMyDyFPVugsA5eq9VTgYW8RHyknZn2qX3dfjfLJhL",
  "key48": "XKphtLnH4houxLW8ERnfk2EHeicbD4NwxmCQih59pUTuzXEgZHoC8ffCydJGVFfcY6qWeDArscu3Nfgg8RjLuvd",
  "key49": "4VaCRvBt2UnDQ3aTfVhYTf9rf2mDkQW4sFUseaCqcWj6xPRNHVWoXKGnajfvceVxfKtJhRRZNwjDxDcEorZ9GeDu"
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
