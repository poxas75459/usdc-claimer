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
    "2Goj7g3fLNzimojnbwB4w3smGPzXSe7eXvCxwaRnL6LevVCTDtVJ5L5ag9edi2qxtbNN88azBm1FWGXj7aXeFSFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iRag2MREghhsLxiuHFhPZ22SG6jGn5hmMwZPYQ69UamL8AkEeZT2RQuGviCMGJntwcURYjVzucVkA7Ak5U69mug",
  "key1": "z4DPrgPdiX7yvEDWaXeJRg1dwC3iZcW6pcvyJPrdDqhfeobCWAZkt1egxgUL9PrrucEVXRvWY5XqE9gJwcHbzT8",
  "key2": "5vezuDA88dXcKPYRoxtiDdquudgRGgnASWPj3Y5xaT1Gc8qM5LT1V8kkvGyuKAiKoWjEWTCounKy4aDN8GSxRJCi",
  "key3": "2aWX1r53uL2stFrBrdTWbHB7hYjQmHj2xvcmQmmh1498REWmbWs639LYVaZw9GgxeNFPt5igh1RJGVMdwgihXzDb",
  "key4": "5atxeCuKK6roXBUPZrpLAZc4s3qJqJEEEpo6wicE6pZnADj1VoedcSt2ZpNSs5tdHT4nQgEdYummq2cxra3e1h5n",
  "key5": "akByc2csEMgmsnAbjYFS6WNbZNL4iJ7CqY5VznJUqVZqx6jwstHXEFzu7QHnkUJe7QPJSSS4Vn4nC9eZiEG5mPK",
  "key6": "uygdjMtM4WQizwZrQHbc14LYWvfaBoR3z93cqimHeUxsJsWwK7qnEr3PZvqD8FJsrutu81ndp5N4FzS4ShzKbsN",
  "key7": "5QqUjUT7ih8TNzHMcaDFUPvqpswiEx3AKj8aSdPEipXw69hqrTKcLjKuaNWz6i7DzkczKe9DTuXARA6JFb6GVYXm",
  "key8": "FCxVbZfhw6r9EKNpsmnfkkFxHfrzkSk66vAP5B6371QXQ1LqYkTEPyiaHSXGHvTMRoEKDcgPGKfEdZHPbWHWHus",
  "key9": "1gZa18fqpw9MSV91Siah2FjPtvzxyJoQyJaGBjF4bhjjLoaVe4ub7nXAASjW3zaKGtJwzCqhX3MHnmZH3KuCnMM",
  "key10": "2Qh7RF7x5ovMb4VgtMvQrLoXEXwNASxtDmFJbfEkz7zMaikMKnKUXKQYbp26SHkpBjSc1vZq6coy7MAJcEhitHBt",
  "key11": "5bq3PL9h38y8ix7rxnrNhmqx3RnaQfCHJkmWGxvJXeYmfjcTwbv7zuGEAsb4KcNqLjGNEWrJ3SkcFdsqKjDo35z2",
  "key12": "3869ayJiQz6CErsEba53QDhxeWNF17WQbuku1unA5H4M2eiCj21ACsw7c6To48eVv165HFKZzSgtrVHcVvyfdtoq",
  "key13": "3qYnZVWTptzvAXSrpUnPeCLJdFcX1Fao4B64Y7W5sPWzTSTSKKiTTG1MRYrJnfoG2iQJnwrkAzHNWPQobFSztfXp",
  "key14": "D5qvcrKwLEKnJcQ7TpcLx3cAPJwo5YyPZw7HErRsiAek24ERbCPaUL2VAPMzV4w6uM4TPKA18Wzh8LzTVisSXUz",
  "key15": "3LBoQq6nHgNB8rzKzw6WVoqX6Y5MdaRDroBcArAMst6zQm6cyYsoT3zpAigRSFAHsTNDkpYdP42Tq8MwqCWioGax",
  "key16": "g5nEw8EzRvYNwtZXpPZvBYtgyoeFt4V6Bo7ubexiJZaJFAe3L8rWqTJxu9C1YhX1C1YCN1mmM5NCDZXCHsGVtB1",
  "key17": "4g83oWfdthSZeSFVqSARCAt9oXGjj37iWRxNoZ9AxriFvW2h35yhHZEig7ynLL2DKijDJ9WAweYiQUptWd6wKuJz",
  "key18": "YevdjsE1MsQ9BSM1ogBQvAn3aLcvuEBT3SmBd4vnna6ZYeccptqDgWrPaThZH2PYbDECeiJcmNwou5e8qPygnhf",
  "key19": "5PboL3c5c2WhqUCbcimMsxsYJK7Yc7FggePu5Bighe3QEvnp2S7UKFTt1QxkKK2tBbwL4RsEDAHxnbqv8FM426Zx",
  "key20": "3zuaT6JVj4SVcSDCtXpwUK2rgoCQ1dFB7PmqKs9ZXAX5L397eohWcpdQYuDTuY6i5pHrroDTEQZ6yevpDeVwgQXj",
  "key21": "412AexUHFp7D6N9yax4VTGGBdaKgiVUi9TuSgu57GMugLJZjfp2aX88kBNyh25RX2WMksu3oJJtPTu7FwRXcrybj",
  "key22": "3buLQigByFJ6qG7zGEV3eYDoLaD4spDdFLHkGNafK31VNN1qNvaUHfBBwgE8HYz3Bjszzhyx7pJS3HkSGJsUKnSg",
  "key23": "qKtbLuWUhf6fzdGuHxiCkWqux3ge5v8XZFXFosndwCDVfQtiUaeMrPN46GwanqNyH4XY5vbLDLvK4ZrVW7B1zjN",
  "key24": "341mHn8uHZ16YbH4VnjRnFFpn5LSeBDKrmDBsZNRZi5Pef3zNd8VddEx1s3cpBg9aQEhGYCHY2L6VgwGLbKm4FQS",
  "key25": "3hXjsbSuWHs5j8VHWWrbSUxk1tgh7D7fH53JmT8kUKevTvFks6nyZ5dvsfSgVx7UVEw2fgtvBjvZLe21LDNhTjFW",
  "key26": "2FAApVm73Kf1Lpmor8wJmikzoEWeG4NHADHsjJTtTvSfAjJKp1VgmNpHuDFKTimF4KEjRhFKNpqrZ5NAi8i85b27",
  "key27": "2rU5XoM19E4qc48yMLTexaQ5WE4KkzBC7tf816Yx6swruP8uKBmhWThWjzePAHHZCqh279GVUfmHeAC8MaH2eAGv",
  "key28": "2gLjZdnrpZnrXmT4QPcaZo1cqoWHaJuZqDzUWxHi4vm4CTbw7zjU3PvL87QKG2FfzESZ24AQSA7USDHoNic3BJ8o",
  "key29": "53JfUHYhZSmwksZbsm2HdWzGwczr1KTH3XsfDw1T9MMjs2YP7TJUvWKh1i4WZPgPbnCvALGCNmGspixyNDXjoj5S",
  "key30": "PYdqvcEmj75H7LmZAXcu7MtAjzBW1VaLiwBg6ujnxLmusrvgMRaEYBRB71FcENw2KE82oC63QgqVoE1bUikn7dF",
  "key31": "3h6MqJSqqQSxiX1gTrn2n2qXBUpBUnBZadBCzSoHSGxQdzxyzmNMUPXU4Wym9tqCmr3iWqzgEzh16UdyMpsR9kQT",
  "key32": "3tbGDLuhARmPQ4scZDR9HC1ZTzLGX41EJhf73RQg7FwBVc4CA1i8CWq1vJXC1oC59dcbVLX3UW85aWTKp2z7EYq5",
  "key33": "4kov4i8QBXvLoZ3Hpyrw4ZryUqATaGMDu5QDCrGWoqPEuQgNgXqrBsUbzj2ppEFC7JUf6pvUTdigxRVxUyoVBSMq"
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
