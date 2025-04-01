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
    "eqjV3E3QuvTj78imcANG2xLmZKj2MZtePE9djwew4PwmHHadWatsXavWZfiZTpMJkitYvdYFgxp7zSx7jj3YuiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3myErrUWwJhXZh6Xj8XGD4V6HuR1ZJD988QjDjes6nrTs4epfpCvz1r9LSjH1W4S48rFTLVGGKtwVrJHb5b1jaZq",
  "key1": "4AZBgYjMFYBHFtHbMWqpCwLbWE1eY4EzTQPM7rsFMiTtHH8Hd2watUVhs8yRyLAfrhXU8VxFApN8tr2r2ct9SCwi",
  "key2": "4FFBW4CLHfnyhzwscQqYGfSMypVhwVLdwmJhpKRh4BGnFjAW2ViCug9h1sJPa7NuB537z7cwa9pwKzdLJydJZHL8",
  "key3": "4qXcDU5c94EZ1ZsCegpGZTqSD61ctQ2KYV4zhL4EiKXRVTyubG1NBhqWRhnpjAPpQtFhLpyHnAJwB6QdW5hMmM1D",
  "key4": "KAdALfXQpzhaZuQKGq9QthhToAL5BnNScyAwZRAYmBZA3V73oPiMekD4wTnTXbwrccy3iLHPyfJaSR7eXfTHn3T",
  "key5": "3pscJriqzZDxwDg6RFu9KDMtuYQLYsgTtPxga1554ZW8PeFPYxwDM9EegxGXYJdESfKJg5tiQo32DdL6F4bVH6DD",
  "key6": "572FeTeWrV2vN8Fmf2f5qXj23wni9cuSr9nsTAhv2JyrisJuFQ357iTPSCjxZogauFW23M9fSiDLmdiw3HyR1sG5",
  "key7": "5fLJPTR1DfPDde86Z3bt5HpY1e5337R2yfdjd3t7yWZ4c6dc3pUtGAMQhzyfC31dfNQTsJ2DDJiUQ4Vhs6j46qLn",
  "key8": "5Qecy6LtFxsJE51UgK9SLvn12DmxzFzwTFSf87DY3BzapCDuSfgL3UTwUaQ3t32q3CtmZWY44jdoT1baRrRtAETR",
  "key9": "4WdKvfvKq8kV9Ev41odeJPS3qHEqNn9K7JNgBdS6N53YZXEDeAAsmgpi9taoJCTvv1mCvKBfLdd7vrGvBdhGJV5Y",
  "key10": "2xLP72eAVFMrREPZaHYtnTcSdktCKWJ3piJWME2ayzTni3f9MAAqSABCyUensTd19FLLaAQ72WdWFisT4AMeXHk6",
  "key11": "37kyd88o7AxtMXJnj2gSrmzmkBmqbGYDFLTR2iQaq9qzgpv6GgzrQWwXcSGofnKmL7hPYij9EoEuyejSZiWH4dtD",
  "key12": "4m6cUtF8wiHDTESh6uv8mnLzxkgmo9Zpz8UbvZWmevF4drTQ3nCLybRktqveWhe1CSXZGKRxaUmZ6eKJGjyNd6jw",
  "key13": "HR7nEn1pULZM7TmWQnMHX9QHuVnfh23sFyVpEjY9GTVgLfbMSVmfus74to9BTo4DoE6t8iNQSq5DqiAHqKS35ks",
  "key14": "28pFbiMAQzc6obBppu9BY9xm4vonREHwgRf1sVp6sReToKMe5KzWMLDaji5bRDDCwxVoWp75Kv6v9NJxJBgTWR3N",
  "key15": "4UYAxw7HAwVjt8xRx4xU7ed7yFmLayU489anUTSPpU21PPVP7Th8D2Zi4bf6YJccvGvtZQqoJ3NDRz3HDtTRqpym",
  "key16": "4zLx5V7Hq7q9bnCiTwjUEEHGuRqkpVoDJFaXZWiLHD8qCxTVL99a5Z2G4TJSuUPb2A48EhtkNqSYamyETNmZVit4",
  "key17": "4BTdpRGof1uzKn1jhYe19neALHsbVKxvXbEaSnCAzsWojzsxMQX59R9b6bTfzGa2efYYmjXvvasqXJALvXCytMFd",
  "key18": "3ebFwLjKJq5LPV9gA5nnBaftRRxWZsgCQAHfWqRQXSq8uWMdYLkaBoBhnSPZVNaiobZh7Pg7HrJzEazfGQc4enf",
  "key19": "4ss9F1WfphiDfdfCcbtYMEmSBLQ2hEmnNGQXbuLs4yuWqmGYTbkCxLvoGYXwsscQZkBYAddZpAaAvYjmZJL3mhNb",
  "key20": "4uKTjcZs2NAKJoRK4Ya6mh6kJbGV3cz5zFst4yQjL8D3bNru1APvwzDfZDjzAvTTY8fqDJuihhbDwbQgMdb74nnS",
  "key21": "4nqup3dGkhDn3XLu2JfcvadBuqsPgWrPfcwp9QWphvU1FbepVdbmNQ2W4nxPERGfHEaYYguEybKvX7KVVEcH8buM",
  "key22": "4Y6ciM3wsQFZQFeRyjQBAjG3diijm7Ebm5UoYgXc4zR2ZjyVyffp1rcTUn464MxHTQxsJkWtLzEfWdtzTfuqkGUw",
  "key23": "LqLHdR45UDomChZnPo3G1YjuQmQL1V81xqBwQFMJn33YZTGoh1gysHPEKaajTf5cyEpaZUUsQcUrmnPK5LPXFpH",
  "key24": "GokZjyCLQmMbRxzKRcsAigoEgF2evL67zWeLY85hgHvnL1eGqNLHfwvn9gTvQuPhCURyD1KWDFRFke5HVN4pwd7",
  "key25": "3r8i9JP7Vzj71FrS8PuLBYpWvKVJbVxoT1wFuRTS7FMPD9AP1XmKvfPYZRdR7Y2awTJbrSLqG6WpysRQ5MgmD1mw",
  "key26": "4aJexsn4wqu1RDmsioNzUybZKCr5TBwkT678YiTDo7j8VDtPBGWiKFpthbp4wH2ERC4wckfEW9FZdrp1ubV5fV5U",
  "key27": "474pyoYc3vVPn48Z4Ev6Vp6y5YXDbR3cSAdCnDKgZdyTEuUr3xEajvkzr86BQFw8AfQabTjFuaDCWTCABKCi3VBT",
  "key28": "4kbsPAtujzC6tsm4MLwfA3viT9H12Lq9jmgdtGxxstmmKx5ySRJ1YGpuR9zsp8Lf1b45oRHiYSXZW22Xq4A3fz42",
  "key29": "5iwEAxXERM4mFTZN8t6Ar94whvUtFfk551Bqfu6ekKJ8ghQHN2BXtRVAuLUaUBJhRSjAPyHRmG5uFm29aijVqDQ3",
  "key30": "4vQk5qBViJ9Ztj5p4WNmzFJBscQgxUjADRRfkCY1wphBadwf1s2inJm61rD8fQJCK1UZvY5L7HHbXDFrxPodzfY7",
  "key31": "2Vz4jHouzvcHDmPkHKMCnfa1fZYYdA9pPKx6UStvjMC3WqQNeUVjEApoxuVGVDBWNVMvxbwnYgbuiPwnfsojrTJo",
  "key32": "2kzv4E66GBJR7YiZvUoCyHdc3W7DVx4gtc5ZxYKv72kfWKDdchx498zBposNDRGFm1QpuH2hfESAjUxZ6Jxdnr3J",
  "key33": "2ZyNAiFTchYESzX7kkZ7isEwoVJcEUkXQe1TFrn3Tu9JPCukRVkArwyrVYusrLqHEXEcR3epWxzvrdMH7awFbYxb",
  "key34": "2BhUmiiQFwD892L4Hn2mHfcJcn5AD2JT4j8cfJKMF5mmu8bUmjnhFcQdhKitvhAVVqL9iNaMRvHPBGAzEADrVKjH",
  "key35": "214f8BufoYCBB9pZvbXKn9NW3uJdPXgi3S7GNRgfsDm6q3ERN3yXVUeKv1YtEr7aVeMjcviasSB1hF8FSNWgRotK",
  "key36": "5aRFEvYWiBQNiqnwRroRpokrCtXabVTsBWLqX7UJFxj4TyctYh7jP5ZCUH2X1teq3afFkJqq3mH7HK91mztiQRhQ",
  "key37": "RTPMa7rQRGZfaPet8gkp8394n1QY1u3b3YpJMXMNuP3fumrfw8gx9yCC4V8iCNqEqR69BeLjLUg5zrrm8Y2KDfD",
  "key38": "66oMzeDKcFokrBXkwYxdeW56Xvi5c3y89EVwXB7ipy6i5W15LgMfrKPpn6dpcYV85aoAPWJHvE3QJ4bSPmRpMg1p",
  "key39": "2NpvhGVgB6b3MYXKP7KG71W8eDETfo1TyRiMMGz3Mz7jJm4ehmBhvDRKp7pYC8avHwVgwNz9nv14UGS8LeBdXo8g",
  "key40": "4aqTz6xsKg8iRXqDzUPt6BxHLj8TmBTniXobk6LDa4AaN9QoCgnxVZUxDiQpsSsdRF42xJ1ZLfMYWQ2VCbqnEWBN",
  "key41": "5dYPfKXFRyBXJk9Tt2PbcuRs2FvqsXTNuhtTANAtiKagSwwV8mJbaCKY8QxuvDUAJ1vtZShEcJmQTSoukjqsVUgw",
  "key42": "5uSvYyNax16zerKHVXBL9b2MTmzvu1Rk2wnchBduXe7ashDVwums4tUyDjb2uittYyKVxQK1emLVEJtghUZTvHdt",
  "key43": "3jo22uQ4Wy8kqTipE9tpJme5L1g4eHK5c9Tf5PR26dn1u9UuXGXaD5VU56tCrvNjBkevYryZF8huARYsrwwRLrgC",
  "key44": "3QhKSpftwWaEym6NfQFc8KGxa3PZmtcAaAMm2Raqo8Wexzfqbgo3fq8qy3NjvNFqDGVZy5hdHCbcmEHBAGc2eEhe",
  "key45": "wMW2xN85zA59euAitkN8pH6jdMYY7JfWwksTdv21q7oio2jKV6rawygBdYSwQCHfGqas9F3WFLXjoTQArpgMpEy",
  "key46": "55kckRvV75rRkKtSny2kcRbYjNkcutKvVjiKzazKGp7gZLqJpYVXoyFR5GVX4rSy6UQcpyZF5rBESiJ8ARttVXKd"
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
