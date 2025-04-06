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
    "53iZkqzJMdyC1PfXCtDTV3Sf1KUukv75QtMGU1ikgsxKGBTchD9RGCbjeMxxePNHQQAsejqxptkwSgpwXgKVMLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Btw9VdDAWx49vQ5sLFgqrVxkAdWVoUu4vPJUpr39uYc6PTD5jYdArphfcRURWgEZADQeuBipi45gSsu3rZKZ4KH",
  "key1": "2zgokL54gJxMoJ7hT9PyjhieCGFg91YuHpxDfnr3Bf2C4xdMcvrkLQKfMWc2FffrZPhffPLyx485CdMsMb4qWeQ9",
  "key2": "67LUn2xJwfFg7MW2XhJMSRpZcExkob5kBffhCTphq2w3qxjEmYt2fKcqTajmc4z8qbCJ48zDrSbfVF7j8xYUz6Gp",
  "key3": "yV7nafFa5Q1aVmHqy2gF2EwiUDUF4aMYPc3vSoTTcxgUX9PP4CRQzNQTUMmo8tAJDt9X22gPxG1kwZKrLb6irbw",
  "key4": "4GFhDhoXctgsB2rEvas9XUAM7LVRuGSH2oqTtnJEwzvoY8pdzfDVhPRSQWWdMvhTXhkYifMHjqQzmh8GTPJkMtZH",
  "key5": "456t6GeFQ5gYVSGQTXfBe4xYFjAkH2QuSgLeJNaQNBibxh6Kg2nxVPVeDnS17KPLyiWd2uhenNXtzmMQrBykmVtY",
  "key6": "23Jw2aGvdtob2ND1M9yqqcV8J8X51Gnvk1g4bUegrPRYuwgtsJs5G6SLrEBzeydV49HKwSUJxiytjhoP16QRKDCi",
  "key7": "u2tMKqQYUL8pWNJnP777YNsqduGz39vPDZHFYUB5eQJWSX9D7JqWzH2RgcLDdw3DZoZE9d2bGtTiqYcBA6Wn3sq",
  "key8": "32YMJKFxPZWMsGtLTbqy268x41rC3FXaW9fXXRLmbkYkMqms6uLq1TXrQUjBtdTmSeZEFnREV5BNAnweWSbNwYtP",
  "key9": "3acmgd6j6rLo5JyxG3kgbCUA6geRhKZvRJqxuFBvL9yz8HScw7byUoZfYTgDmMkB2ZzyduCCJLRVJwSfEC45NU9e",
  "key10": "5wZUooHg4KreH3B1u7UEvVLyAgvYYztKUzReSak9Ve9AbGCDjbXmsasdwH8esdBUAVFqe12XihPTo5QV2Ac1ujrd",
  "key11": "23SdwebGKWrqPuhoG7xzzWGwBxpf7wEdNKTekdW13cYNbgDF7tTJC9PXRdo9eG1KYRNgpaPeDP3RnvcddMb6wAvV",
  "key12": "3SwmPhStZybmqqtt5s3U3jHaKooakFJ2VuJEoFL9tRAZW7uSpovJrc5hofeCWXiNHqSKiKoaLBv6d23pg3PML7h4",
  "key13": "zCjcSQ8tY9GytyWJ5cvYJ53VjVFcvWnB5ECdKr5xc8kCd5grLeMNjCRAuSZ7jsNEi7znqWEpYocn9HDAUe69s2h",
  "key14": "2JabhLuP6ReR8bHLFV1pXGnXrAWK7DvXNcb7QaQqk82E5TfRroxvUwtiBJ9mZDoQzrtEVm2SCqyPo3zMCavWaBq2",
  "key15": "4qmRTRB9FqT6cNRD3h7gcBtMhpvvLUN6J3j74WEVuAHM3eBxTbqnH2bPkFdtVbuvA2icD6dGgjgF3tit5aCEZDpQ",
  "key16": "4nCDRQAvXUXkd8N9DT7hxdLXK6wp8n8EFnyotR1qMJUmsJvcf3GTV1tgCUzGGwzoZ79bUEYMNSTi6k9djZw9emDd",
  "key17": "svBhj8U2huA8hYahp1heiibgt4otFYWzoqkc4b3yknewuRCzYFRr3Vtrzxszia71xnkooVmeGMbsLBUuuRnABAU",
  "key18": "5KhWyZQ7mocTiRjR8Nfwph7hVpPBRbzYLmY2QxQbJNsXF17z5s9gfmS6R1gbfVvjPHzG9eoh4PzboRVma7ewfSRu",
  "key19": "EECCnpdD1JGZomgovRDWnajHrwj5qzuoCxZrawttBFuugd9CsL1dGULyx8Bo7gpY3ExdmfmvZt7uXhFfdzKrkqf",
  "key20": "35icYrCsMTxJmpDrjezHER2kf9azw9wJNReGCmTBnsHH5XChYuSYdLrmwinY7WTebz5jCVcXCeEi9bYGatiHAMCT",
  "key21": "3zUho5XoCPc5ANM1PLfPoeVsPLEHsRHZtEe4SAaMXjTEpdawaYeYhE2b87JmvXFWYKqgFvBsvU6ZYHZW4BC1f119",
  "key22": "Vvf9mr87NWWZhYAmb1kgDb84KzjMZqUtfjs6dvb85ztQUeCp2B9fDn7FFToFUmgaRUYQey1FzvmyPz3sagd17sN",
  "key23": "2C2Bc9BRpBYxfZFzUvRvkHNL7URbn8SmkBn54uPHiug7StQHQSSMe9aihbTj7Gn1x2VrzWLBU5cxMGxR1WoL88FQ",
  "key24": "2yKLUkwWq7oUpugTX5aBjLp6sh8USdhycM5ZvbCRetLHzDHo9SbbzexJomEHyBTwTuZKVifJH16cNvpT1rjKTVFB",
  "key25": "5cmT7VE72KCUeNFatzr19preqVm8XewxakctKR4LoiVkcNcHL6CLZ1G9g3SyfTx5B8NSSVxc1kSLz5kiBpAFcu6u",
  "key26": "4fQYodWC4mdrBsxiHw178rY8rXUAHfGXtm9gvuTCDq7eAhDA2ENt8cUN1YCxyeMcR5tVoRwgkFUnfHZSrc9UA777",
  "key27": "3heQNm4L1rgNGEtoSyy6eseeiQfA3PHbp9g8p7pqieRUbBMV3sPqWrkHHRXwMf3H8Qf7a1MNM3b7bxR8aqq223Gn",
  "key28": "611Xp926hZr45p1WGeNxw1w9k732x6tKo6mc9WgvsZVGhUMMYeZo1njG4NJyBU6Rfes4TqwwzStNiFhLGEEVb6vs",
  "key29": "kdn66sFa2v41U45NCCHJ5hrkG4mH39UVCBn3bCyJFueuU6DCS6iZQvfpa3mPF9jP3jnC8xX8vsmvTYnmyPBJgnc",
  "key30": "3VKein9Xaz8cEfpzfWjrqhVHYUWczRvuaMfghVhRXiEERYoZmZj8yrVgRHrGuCM7KLBSX1kWJizcb8uydmohvNY5",
  "key31": "58cGfu6WX8kXmBTQ9rZ9BA8ZWEzzGFXBGvkXKQPtmj8Yiuk9zxxLNg2qS9rF2umhETGogUuNn6P6i8gegk43jxt1",
  "key32": "5996sbbnzkUbS3921NQSULTVT9z2atWRaLDyC3ayvqs9gGpq5tXrNMCjiwLHhtsRANL65N898xMiZkJJE3ZPJQSK",
  "key33": "3vk6zPt4fmJsgZeqWk5PBP571xwvvBRF7LePoHkNnDci4sTKfoM5fNcUXKfscvrETXkC3aAwwLfa47KNPcXzAzC6",
  "key34": "63XTphLJTLeGfKaVercsHafGt1vZvce8mzpmhaJq9ZV5dKc8kfDWSMaXDPxRB7TZ3vrxnQAM49eay7bQQRKxoRTT",
  "key35": "4XnJRkSTY8rU93HYokbf5gtq9ynSVsJ8DEC1SHcdsqG2Ebadd673JBjb2tTJTPDp2hJM685zTUb9iVy1Hb6EWZy2",
  "key36": "4hQsgPJHxTQrgAky9urKuUdVmQjm1t1advGHi6wCaKNn8Q3cScg5ZwwABKsGmSC69tmZEgGaVyrTdPNp2LyoHiwf",
  "key37": "5ABZStLqTaeNULwePZZH5njSWXnaHox34kTsghkXnFknx1QB33zRjS2rDAYM4dzi5RDEjy8qa31Jf9TVWWQyXRTW",
  "key38": "3QtEFGoHF3V44qb5Z6GkUSA4XiV2ptoGbgwpgoyLZvZVehchX77Zfia9hcBDWmcx4Puo3pQgsB96t2a8SEEEUQB2",
  "key39": "2XGfqMLCTDoyf9N3RnEuoyGhcxuj9iodG785bGQBheGNSiWrbckDfEDasatQaxibx3nGvM3CAznydcCmnoAzubGF",
  "key40": "479QxJ9NhAfkdWV2fSdL2VE9u4NsRHSeE3KeGPVc538A83BrmchNvwR7MixCio97KkPKyqgQkHLcSumArSWPXvCL",
  "key41": "35BAmNEwVeVhVtHo7oojyNe9KCk3jAYRN8Ed36H7k8wA3XB9XxKpJtaYrWXbzS5vBvmKJh2zfTaszHJ6u1PqYavQ",
  "key42": "3bYiqFm97ZrzZ5cCo1as7D944o1Mak54pz6gPyUNo2f7zY299vYC86UgYQmUC3CWedij6DotfTtR2hCh9uGqDaTS",
  "key43": "2cSscNLwKuR95sspj4Qa86eKU3a1uCwVi6GUWste2GjeNCmLRphv3LQo9gyfE2o4igf89WDmaTmqZKFGLRRtuEcR",
  "key44": "4nQTzgBK5yAgfpxUXvoA6iBsPAYzwz25i6M2Y1hWKJDTD8rCzTXUjwZXGDJkwBRSWfgEQpYbvRfCztWhVBBk687u",
  "key45": "Z74jwtxv5JjpstgEaYJQPtz23jtSGuhmyq2qJDvArZmvep5dqEHjXA88SpZJpijiVQ3azQMcrwhjAJb1eJqTaWX"
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
