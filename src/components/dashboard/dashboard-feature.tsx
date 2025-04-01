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
    "67SNQogtB7vKM6HVSQMgvYmZavAzPdHNSMYg9V6SmuTfWGcKmBTEvckeAQD1v2eT23SYGaVDMtQuMKZY3drA1dpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KiHpAuK8PFgJ21Nix2MWQuLYjzjvjUEX41Zph3xApV1fm7irMVjS5sYnHAyuffF4w6UpPkabzQroswyyJeugQnA",
  "key1": "2nnzyxEzNFuJzRwF8dBKNqqseT6wyhpoeK9CdcGzre6xf47Nj1AfLfRDDCo4yxuqxXzJ9wofeVg4Wd3R9LLEdfb4",
  "key2": "42LCnKN8qsXEXwVxfV784n159VPEnqZpvVT8o9R4JmhewmT2tVYNx9rp8575364L2Lt9vMSzhQ1VSPqsJwFneYi9",
  "key3": "4eBPotCToySwihNzoqwxXNYihhjLrvweXXY5dUJbMzkJzzgCdF84bVaj3n65DjKBKhwBjWLuPADf1nxEVPPCJjV6",
  "key4": "5jFBJ1yVAKXzTrz1FYNVAKGJP7vhHtqJ9HLALrUruThU2Cof9we99fFcN6pXU71LP2uvJzn6S3ndKBiUA2na6rfs",
  "key5": "5Pjn5VVKeVEmGCNGft7ucUdNXg6HWehgDdhitpM4UFeXjqeqD4p2X4rN29RbmfLX12rmUWXLvd5GvQm8kCVbhBDT",
  "key6": "26UKW1cEGSKqDX2D77KP82Xm7N39ibUaQheAGvgWjYd8B3d66VYgSj6oGAq8PrzaM3PQVQpCatGCezKSXUf7pLXx",
  "key7": "4VHJ6atJx5SZKfEpPf6J5572wMEKxtk9PNYYeu5AM529WSqfEzAtYM4LxdRx25ZmP8VLrsNcErCVGfSVdgCyrzqP",
  "key8": "4ecodtCeXzHppovCotvzk3eohuCEjkGdNa3G9jCPSL63E5gK5pQ6ofywqTD4vx8s6rnViR5SuckyFdtxJ7NPVnM5",
  "key9": "4ReeacZFDUNx7dxxEpevhdJ3v77eqz1rK1H53fHFvUWhJ4hirbqaDhja4RFVPCrJsFrXTw9pHi1H12hzABtBGs56",
  "key10": "26LRwTMm33nrdW5VAUjdoLBPk7gcSFoG7VaNTN8xuLBAQhtSdGXQEHKfvM3w6Nz2eqCkJ2xmvJnrKAqtSWFTNfYn",
  "key11": "2qa5PQQPhvrKNQ1De2hL4aymhPnkubooYpgfLX4UhFLUW5bfi3gKdW77CH1yFnBBXrHDHpPNG7Epmu5QdAy5Dqq1",
  "key12": "4ekDopE78p7oZQPuKj6Sfb87H7GfRsX62Z4yANsBf7AZzQq8pfKyBvLcHPHfFKAECcj6PAso5T5bqss3KfNeUDgf",
  "key13": "5ZPn9sLQVsrR92HXEETvDRsA5oP6aAnxWwgHkJEZHoM7cihCGcRJ5EJoasBNy74q1pg5eLt7dZMHnsCQWd9pF36m",
  "key14": "2wsP3rX5RWJhwVBYS9soVF6oP3owYLf1ieWPsDdP6fhheRro87244iDYdHrcX4LKArTVg76qwsawgfHcjGPHB7ez",
  "key15": "uGR5JV83KPTKF57fogHddvC4v9CCpraoKpSrxfoTKYbPWVa4S6stFA8mBFAcxrwL8CzyQ1pVRweNfSiWsoh9Tp1",
  "key16": "5aXXfhVEzQbgsEViAHTNTKhk5zKqQ5hEDTRVr4wbyZkN3o9KjehpthYZuQEMeuZBBF6ayWki8h557nWstAXYFnmn",
  "key17": "gkRVVshqqKcpEsxLr15F4g4caa2EgxLUjDa1ewpJqyLjMk3KqH2sqDk3cpZarwGoTG5WAGB8Wp4cWS7ChpJiVnp",
  "key18": "Hf6vuFj9X98Txeg3otA7hpDQtCmFBBA3fk7rdetWhkVQUR9YFHfStwdb9WoWMqMpN79s3h3sdqkvwqJDzUieEbD",
  "key19": "47ykSbtvuQbpUDfguHkiDZuq1uXZVs4DB6MPsZbSTaJVYjVkRei7NbkpTGvzUkUieAV7V7UzJUpXypRyvQYFdXKz",
  "key20": "63t64bwUx2RgPf1nC9uezUNEtWYCqSKcfFLajxRGipUphGiM3uKgFK4T3x7TSu7xvVTpTwGFg8UNZC564kpzNadC",
  "key21": "BWGQyeQhy8qmGG3ipzTDwZCi7LTqZ6jepZ4dc8yJSTJnrom7D9NYYcdbDcc3ShfbYYBaRifCXipRKtLkbZDKaYp",
  "key22": "3ArT1ktE8wwwLTsJNxPdBJPrCh8r3NLarXKFLqSUBHp4gyoUgCYBv2LCwMW1UVob45SyfcbV7DyBVzRmNKB39VYj",
  "key23": "3x3JfVT8PgAy8xQkGUZnP92QSDxHHemD95ciFUBe9YtGyeig26Lsj2j8siBy63DfqEUveAQQuRHsau5BqKbyXTKn",
  "key24": "4P2LAdXswEi5TQzMTCV4A2LV7gRKWt9HYWseMseNKz8JYbUZjn31aVp9w4GgwiYv4TEBqsexvAUgyhFggHDEoqf8",
  "key25": "4CxAWTnpAsTDW7N4JkjhNK3iYSpWStUSRpnaqZjvbctDbmSzWaRZjYyFVMMPkkCfNYMonvf1EHtesUWaZzUwWk7v",
  "key26": "8fS27BqSuQZ9kD4FaXLsFwdFnbr63y4PWVPSMeJbffDC54W8PbMAbUVwhed5vXAj7Apc7MQvujgYCLvTXhVEjQp",
  "key27": "X3x3Z2tMtgeLSmXV2DxiMN3PSY64TGYvmjX1zpbmCdaX4yJ9Wozhvrf45LdPXHitLMqynuYbDMMQnD9BXUiZjoL",
  "key28": "4dYP55Ct8jcu8L8iup33SeoSFZFnGxurepwCb8MG5ezvMQaUATcrzcNcgs9TxaYmjtKGeacg6XZue86hkNynJixs",
  "key29": "3HwkFiiKmLh4oF4K4mNiCyDVh6LFHL3D1HCqzhKC6VMPG6ggPxAhHMMzPMUrsJdWWdEw955TkoY5cqzAJEBzKQLJ",
  "key30": "CbBmpQy6aasN4XxyKnFQaaznobM7PZ8DQTQUbegPfdwhisdey8DMWo854NfgMAM9hiwcvc4myxMJbdYnyq7Ux6r",
  "key31": "bn2LHDCnKNi4E1tCTQ1U1CixfAV7ykqSYbE9k4VaMDpVvqaY38D5EiASG4xjQrZ7R5KNik5FGGxfm36UM1H224e",
  "key32": "9cEtSMjBCG4wP3WTHM5Xd9kZDRqQr6zrd8SGBGHvQ7zu2wij3SbWtS9anGabx7h8ZJYsfsvFWu86P9UPDsSkac4",
  "key33": "5qma87kJRkyqD2ousW5wfdU2CsRnzgbDj1QFxXtAEqrnEzxdvPQhPDTrGgPuQgK1rH7SMUuutw1r6ZpUUgpoW1Gy",
  "key34": "2N8Jui8QQmrRFDz2g1f5dvPoFUp8nRwNUP9MU7D7k6dAEzaeJWqiUSo4tNWDQCEBSdHkaBUDCbY4DG5LwpDaDmRm",
  "key35": "267sR5zKea1mY4odUee6w9ZTN2hUU4u3MqJ5LM26ZHxFNFdP9YZzdzCuw27yhdJfzmQNQpoQmqnek4fDSb7nNmuU",
  "key36": "5DEAjAtP8vCFfKikUtqrvkV56XfA65cB6wefzfHLSjcisQmJEBgs3ojSvDPUSybaTh7ewqH1Vz1KH89gFaccewZL",
  "key37": "f13UUSZvqofz28gdz7UyrZnKgUSGesuNoroqjTjPso81Tp9eK8xvcbJBpT53gsoghMVbyAWdhzmcQtZWPnhontC",
  "key38": "5S3kYb6NMXFPGd25JyPRxVtweCmVEcfFxUCGoNNsUFCeBWftVDgT8dpktxYKYbedeNs4npcgzanuw8rJUg4o34JH",
  "key39": "66RnAG9U7YHTjmgeEo44uo2hfeo3d2NbQFhHKCrTCs9F3NFbETW4RBbf5gkDNHN2HaMASrgwBN6NDhMUqtdKCpzf",
  "key40": "5PCz92aC2yZRXA1oPDFzFPeGb3nJ9LYBt19aUWdu8NXuPrtRB8gAM7gtWfTqSDk4cXX2tno2tCUCD143D6iF1REg",
  "key41": "1NFUZ7bdXW3QMk9Y5UF3piQrviBmgK8DK1enLYAqC2pWnt2AxYVB8Dovd5NKBwFnd8YZy6qr2MtL4AwEoY36kQT",
  "key42": "3EVPGMYfw25MyD2heYgqZSC2AtudBLdApbTBTzzzrhbUivGn59TMXAyApRijBSh3swRVHxQfzeXzZ9GF8WVihE9J",
  "key43": "2w4mTE8bquF26ZUyCgN3r6grs1RnK7gLjTq6U1kCjnoX1vCcCZMQcf1pocSKdEXZ74fNtkJNAnwMeAW9uyEFjEAx",
  "key44": "MWNh4fUxY2XKpTwuTcgudoVhvtJA4ziU2TjZeRFudKSs88Rff2AWRsXqw4JbYPaK3NTbVdaAsReirCyHBanA6xD",
  "key45": "43S7iXQPGeBHoQ2aUc6moRp9ZiMzuTfiEQcQXYapgiCGeUvC7BCw28VeeLg6R2q9N3dfZZKsHTTZNdPZcetU1BMH",
  "key46": "prfJrhGxfAuJYrAXToBcitGp613dCPxoCvsE4BAZgm9UVvqYpTtZ9wPRYXATB4kgEFRqjXy7zTBWZSnTAaTVrJR",
  "key47": "638zj1E4p4kJP2imYtiMzbGbKaFH8ARpd59hzY8mHNBykdRNn4is7o6vSyph5bztcrSB3uD59djJsGoW3cBSvpY2",
  "key48": "3XhRxXLfgjvxuc5DkwTDJ6RZGgd2ij4N4xBvDwW6r5YvdoKbek94ye8hLsWqAGCGEzYVREgxJG1mXZoPsAG61aMt",
  "key49": "2rNXkctWdHFzqzAL1hsXwgBsxUFAFPo91GpKrqCFzjYkxMUWF9kKQvhjBFSMMxfnAYo1tsNcHzASHUtuWWKeDnDC"
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
