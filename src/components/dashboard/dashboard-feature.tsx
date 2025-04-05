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
    "2Tmo6Eyp3PMS9veBceU2v7eApRTBRksyj3hcTxoTABbixjz4cgoXda1H24buPJmPwEKYccRS78NPDD84JATKBEhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEnNf6HkEwBjhhrNiuP6kh14937m8aUzssBgLsP1kb9V2yziBcK2dLQ88Tf3LFtsVVJybkKgQpyWGjztH8VvZp6",
  "key1": "tABJWwgW6cB4kdZPab7PDF1GQU73wDBkhG7j6PJYHZ2e1PjM8jtiWRL1fSeapGwPcDDrHHv6WSJoeWysqraWXeh",
  "key2": "RBbsxtZwpWqpdtaMcRjSGKnsXBEHzqXKSdg8wN3HGg27cZZgfQh8coDkmizneVG3ZYRjDKmEK7us2zqyKZJS4R6",
  "key3": "3Futj3mNALb6okYPqKtQQnno4GbAdAF2K48XzJLW7QdPVT3ENBwyGtLNJxUt7zeSrVdNojku1w5zxGMfQwTUWK9D",
  "key4": "5erpGiz7VscFZyqw19u6jFtNrw72gT9NfLVi2vqdEaHZJ5WqJzqoxtsH4UdTb66mg3GFXQV7y4ngsnd3ByPeZFSU",
  "key5": "3fGXoxgyRbvJrvfntrs7g2fpN1xAheASpwCozBqnqQmyEE1KRj2kpqFNouESjeZ7QNvhsC4MUtnL8xxqH6qLx3Aj",
  "key6": "4eFyr4bajeRNvvvUArf3EWyUyK7zUDQjULwFXxo6pE1Lh28psD4NYgp6QXkmyS6ejcsEpFePY7e3q7i5RQuuyx1F",
  "key7": "TzfU25n8k2aMdoPHN6MGVDHb1DozVKQXXQVj22EUDEF7ZzW9rtiA67W85xTH83HMo4FaLNRY2iF6baRxyCsg94X",
  "key8": "3QSHtypgz1GjgVokpAcSihfuaTuSFxLBgD7iGRmLDqL1GrVBWMYFRzpeuGkJqxcz4ovVsYrRCaN1W9x71pyT2ktL",
  "key9": "3y2QXxH2XSv2HJiovkk8a58QbsgEJBFQXHTtUDSB6Y5gRjeTJhfmVhsiiPnw3bWDxNfcpNF6KeuWtuEjSibSGQed",
  "key10": "2fkzG3N2B29YHf5QqFVj16hSuMpNpm2Xa9RuaLn85icBAGeKfR8rNdiHWxh8YDHyALfYsFBZ96qPXU93t2aGGVzX",
  "key11": "Zjy1DyPXnvuFvuQ5Egu7pYMmjWi2rrna49K8BpXhTErySBbZ9YCDW69A1GFUXNtrn9fGEEW26CEryyQ4Fnuk9ke",
  "key12": "4njiiijG7Aj5vHuYpHn1Z3GKTt27L4eyMy8VaPYzV57WySvXKyxZuo3yi91mEKfUCNnvGYZNNsfMDQWoSzwDkrfx",
  "key13": "3bbZguqUD73UZag9c3f7am89Gn9q8HvzGRp2iqUBsEPNGqNLbRccxnZmusFFQEaz8GQygr25Fv9oAQGug1WAYik3",
  "key14": "625nyvP2NGhccr28AwkbZS7fBqKvdR8xZTiook7xxEMUHYHVJiduJZt81vUqJdqHHPtAz58wxgn78BNz6gM5qGH6",
  "key15": "3v7hKefyHMMPJakAdS5byvchSZmQnHezi38oqf2pPWT9KctJjYJQcxUZ5JBh6tACmg1ftVWyAvPQM8YKsLPwJui8",
  "key16": "28b4iQ5p7rCpFtVzacJ7PHbQag4McPAMe9QaMB8PzW7MoUk9DxsmGWzQgzZbRrdj3JHNWANB6dkJk5Wdq6ipMKAX",
  "key17": "29wmzCnvSesHRD5hiMd9is1iLti78fBDX6fpNRPvS1HPSZGZ4mspqoF2GQYKYTs6qWATiuFfPwTRanESyCTrREnm",
  "key18": "2Zw9bWHSDcaPcZrb7HmFPuiKyyvvfbWfWhPR5476pHUTBqYbZMxEPSfJ2GUysxszBNerxNiEVnnY3M3N369uXCyM",
  "key19": "4qz1qGzkpPo1MRdir5QnZavF3ZMVXW933peYToMMPYnhJEkuebrGi1Ryh8pEgc5jKmLNdynyNUvrm2mQCNvNKLiq",
  "key20": "5JaASzX6omCddRirXLKR2C5qMfvGhBT24eozCFMgo8jQZPRm7pLtStgZWoAN8Re8fKpDfwbb4aDXa2KATCdTQfrZ",
  "key21": "2i2HFqxrfSDifjHK5EPaDfPmE57kwVDz7kSLdtKt4hyGnqyUViH9gYsmUqUejkqNwns6Fp1SWowz5jT833JWxFrC",
  "key22": "4x9NZGux4U5bKNBP2ELHNS3c6vAoRUgiS4QCRcSxd96uPJmeoPDdEfia2VQpCg1NbYm8r2RPdWnNwZMPRkbVMTch",
  "key23": "5G5yQM2ZDnvFBeawr2RUra5Ad5Lj5NB9W7F2xcUeCq38CXHPGCNcQwr5Le3uh7xZg9gVWnL9jtEiGxUgReAtuRxx",
  "key24": "5cjNVeAEQxehSSvzSEgtajkDJsW5wQN1MCkkdJTPBJX4v7Qk9Ybd1z7p7mC2dwKSGPxee6XS3vRuAVC58Sk8ihf6",
  "key25": "3w91b7CfznBnGd984XBQSQPhB1JC3kzPBUJC6QFyz13puL8cdXGdxqQ26iv8RiwArSpYKT3v3avYquBjSFg8GunA",
  "key26": "KdihKteTXZaYwFCANp7ppPbFAt5EoK5bDooDnanbdbP5TVhHkqiUhmDwJRsZbzYYPSVxVCyPnPniu8NbgbNc8vQ",
  "key27": "4KMBpMG4UCpgrSTgYnP7QJTg7TDMZBYmahE2czLNVqjCoMWiTAPmtoMLWWyKVswxQhizAmTeNdf1ajc27kPFvP4c",
  "key28": "4D8xeL9iPXshbYQ1f2xF3KhRE2N7y8ehcaFJhXrKTfHRQTYXpzc64sZQTs3geMWkfnoffcY1aQwCWk1YmVhPrz6B",
  "key29": "5vG7r7Sxz6Tw49D66Yu3pKUbyyRiTA81AMUNUWsKDBytS48vCR63HngJn8Gm8GCbtLECrVH3v2aAYz2qubDbr8DR",
  "key30": "4UV4UWooHQvWYy8Zpj4Fre76J65Htfi1pzaBzJHovRxM7zNC1FyfzoBzRyxF9ucUhGtNwbyM2bfNNmMBP1mcJvPs",
  "key31": "5QBKY1pQwCu1uFHjaQutrb5k8Wg1bwt8jjCQBCTFHcX5v2aTBKv2rbTDBfgwhAhhFEDp9sNBLXAZyy5m9Kngaexa",
  "key32": "67ZYiPFJbEhjnHEN2WphYigDR8GXhj4yktgX9ANjo5npc6zmTUN6MpexxQys4k94upoT5g9w29tmxfbBmsyR6k31",
  "key33": "4auBGyYFAZJYTd2XStNubgXpy56nJsBcYZB1JpjZYAZMzV1AKuRwMenograS4cbW3YckzYJxvsybVCZukoBUdvR7",
  "key34": "2TpCgmi2Rdu8EoUeX1K9bqhewj68tLReXLHT8DhDtLwpeR3cU4GubRnT3xkQXurpthzMp3D5fPrDQhfGxcaVt4Un",
  "key35": "2LtfrXDC58YGBYkLhENAWLf3LmaaapZu8z7dg68VJ74a2A7VehqUgmcJ98Az36iGRPkRU1dTWHCJq77vjREThQWk"
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
