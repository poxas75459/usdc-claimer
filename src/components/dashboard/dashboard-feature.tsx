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
    "36sxAavozp1HLAXihqxyzFcXD5SvmFNMCxnYGg7Gho1BXyCkCNPrQvwTd6kkVhH2t4EJHiER7F7eihGMW364qpCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLb3Xa1XTCEhcYRc3S8ysj9TsNYbB6RmYxrgBTdHGABpJudtum7BsSmL2kLkbtyop4LGqg4Uzku4Bb4pUy6wY9g",
  "key1": "4AsaPJze4S6UiDnM873GD4nqaNsD76fdxiiNDonuMZ35g7sm5woCQATGR1MzHtGb8u7kF36DDKkeXPFqTYHvp7o",
  "key2": "3RsC2oAVQtKpj6aHukVU6bT8jyRPmUoRTiZAUqXYw3opt8C92xGboKtGz27h6s3gjRrtp4CacgfyoAMu4Xzc3E4P",
  "key3": "55tB83az7sgoZsjjLo8be7hjWdAwYXL9s1w2as3XtXv1TNgE9zq7rmupxksSgdF6vm1XKVT4R1VgFLWFUna6LnMv",
  "key4": "QhnzfutaABS9oAi1CCuZndchWZY2LpLNtHgcPTp43DYs1A4yKmymCHSv9bxRobgMf1vM4t7LhmWgu5JgQHW436W",
  "key5": "4o7TXuBLp54frMobnFT7b475TDedi89UK4rwykrQ4A9aZXdXzhha8ePvhvXsXsetBg5PgVnyKxcucMyjSsG7nfUV",
  "key6": "2rQs6URQdvQB6ys5hDDvLe1WAJ4aSSTwJ5sHZ2q78By6iv4iqFWxSEjYstTzYUZa7S9EAWQvnnbWQSFqvTw8RbBz",
  "key7": "sprkX4fY8HCSKPVUYMLqdybFtCb77px9QSKaWHNvrE2DBRtgo79DmhzWjvzvPdqYZxbzD42FyEXh6s5Px3ZtVRS",
  "key8": "23zKvTvE4vcwKHQishVfWSQJV5hWTw5w37GcXFPE4XLbLk8M94dDR49xeqdG5rg1uhPox7eetJyC6ySzRoBptaTp",
  "key9": "3oXtRnac5bkTs4nh6frHb3wNEatRKcztkcqANmwwAf1JFfGHTFNSfR1NNDnSqgah3tVHhnrrgFPUCRm9twmp3MYG",
  "key10": "5Z5QkZjBVZATX8S1Kxm9FzZKCMGCJWLGnuNj6p1SDt58uHe68EMS3iL5yJWTGDWVcpVnASNTpxog7XQ8kP2BcwTd",
  "key11": "3X9m1PcHwoEfVg7r36q53HRn3BdCHNwMJc5k514E3A2KQ5oBiHtCHW8CUety1bUfWdyyapVb5AAm3PMGUa4c754N",
  "key12": "4NtJ2dnwnVP39cB1gpSfbrPwXazT5Yo71URfiuX5GBzQMo1rMxjZNfdhGTJFvgWxGaUoYEtFGBqp3qFGMZuvniBu",
  "key13": "66KXv34TZgH5aJfK1ZYFYq1CBCbXNKD3qU1HDUzMx1BUkV85uU7DTjxUz6NpGeGopi1bv933abh8W1gPDxP9Cvh5",
  "key14": "22t4TJz6zUSPKo2h3eSoLNXE9znqaDMa7ZorFjLgpjNFSxvBDck4Lj1ayrkFT9p1GfEysTQpfmtpSxzrZgbPZTW5",
  "key15": "FwbujG1bXvg25CiC59KRQd7bxT1QAqVio9fb5Jq6mnu1EXxBpgmSUE4CcUdeTED82oYJhWMeLwDRZc44ypgjp5c",
  "key16": "2HRGcDVTds3wvKh5vm8tnZSCYoVd8WZNdrYxudQdcwpbtqBAQbfWnuaPFZK1WtD7Mgfhoz8gJh8FnGhghfRwiEZZ",
  "key17": "ZbhXhcNbButWSd4EBTj9yNnXT7dvvQMjF9pk6NDz2Efr9XpHk2N6Xb8WwnnGKj3xGevEw3HCz6pH5A6125VBdr9",
  "key18": "feFmGXCjYpXh7JNCufvoQ5RaMziqfYLZXhvE5ZDeR1Ni9fpYL5pw7zcSLfhaeJagaW86bnEN2Zg1VNHkFufFPYJ",
  "key19": "5F94ZS9Cfcuk3pUK6KNgWgvfXor6fVaPSycAtDxCRuzxxvYXTP9cjB5Dt3VWNw3FKg2TTAZbZrDyACcWcxGXvy79",
  "key20": "5rd8wqRHmBz5ZBbKSFLvkBA1jf2LUpYKrEptN5HM2cQ2EgKbK8sefmPmvuMJHs5ssnqjoRjkYvfbgNTZFrHF4pNB",
  "key21": "3XSk1dWm8n6cUGNqTuPciBr8hRnqeBuUSWQFPzt57aGXtReVwfSqr37xXNYM3U6xqVEVJGmsQksKRXH75d9TeBw9",
  "key22": "54rcbgf8fEgi99ssGhoLW45X2meAZtJDJHdCshFKm9TwurMczZvrxKuWM2GxJYgh5wGdzwMQgZRorpGa24U3bNjg",
  "key23": "5rCs9eS2ryFBPHrWZDwNSpt8rr8byEhY8d4A7U8VMVp7Hv8hJRjSYDd13MZVXTJqvn3hFmCJcEosTRRCxcRztdnS",
  "key24": "u2MCSneYmfx4JPLHgVGVUVeP2oQEojZa4FyaBmDbT6aDAq5wGTXko33HVyjTs4cnWrciFQNMxq4MXi5iz8SrNPh",
  "key25": "2asaPv7SGyiFecNrGmwiLuDuEg8aPiZrGrzniaXZXZApQLc25baG2kVTeruks9PvkYKQNPsHavPPcyigAMpBWzbC",
  "key26": "5UCoWC4S2bQxBMwpHKw2V29cNXwxrAjDSF78Y7kB5JyvHbYjUmJHtBBqEyYDuXrtu54FEZR9pXk6Cc3fyWwhHJRw",
  "key27": "9GSSt4N615D2AihKuqYCiP5HQcgb3VKoymcJyiexhPTdDuoUxV1ksLD3WyeGxjeVaQNSQd3F4F8zcELMPbKxejo",
  "key28": "V6UircfNUyWENTt7H7cC7fWSeW8ts1y3yiVNeEom5F3nwQkYgMKzeVCz72G1S7ijimrf7AEG2asMzc5GDr9fvMr"
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
