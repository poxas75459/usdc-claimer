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
    "rGPhNtc2F4nap2a1pLhgCKCukzXgwsGBszzqNeSJ1UPaWDkgrNfxvZga3AiZJTXmgmFbCibnvGSKfA53LWo89Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ainie2nFwnJ4B8VjVVDnrfATWhcxJg2x5fRNZpKimspG1qb6x5qvsVJGqTeLTBoFHJezfyaCszMQpcxMYt28CKi",
  "key1": "4fob9xzABD1FvFGw5nLpBs2Awa9vhL1uDmKnszf16xqijewaNdnXHvnhByB6jGnhg4r6MUANSqX2FqXDTcWuXqTb",
  "key2": "4a5f54odTwqtW7xD77Yrc3VqaSBgw5fbPsHv2wjkXvBmku9UFys8C9fVEBM5q6MjUPU6yFc3tKFh8QVNGcUxXnP6",
  "key3": "49VWVQMCMes98JSxAkTQCYsCPqhsrKg3fD71BUqkiN5RqNsFE5o5ge21XbdaAzUGXLBV1iTLCeWkobrcmZ4Mrh4o",
  "key4": "xyzT4LmifLxsPWsZk77G8j92kQLDigHa4rxthEdb9XDupr4ZiwE8tzGQ7qTJXQF9xdsPgTgsusu4a1Sh8Lo48TL",
  "key5": "54XfHdBGaMoPDyYH6EWTaJHiTcCgYggQrfBaMhzpKwiTgMvip8NgXLxRAnkKMwqjty8A2cAExtCkuKfZnra1Qknv",
  "key6": "66UXHtAqGrjEy6VYfejsMRRRtc6FD3K6Si6GbeZEZBRCpofwJAyivwn5hSKkajxxRShHywi5UHXWJPpwYkQSdc7D",
  "key7": "ycUMDJWG51XuFCmY6MnFcqFNUkpif7vsJ2DxYgZVsJHjyT5vS2m5kjJGev915e1gY6kircXHWexi3F3QzTKtjvo",
  "key8": "28QfBXcauRGyvSZzZAC8qXCZdNuxGvzCqydJcfVLSpZrXm81WwKoD6yC4frNB5dX9nLYP1r4xJPuVVD8he5ipeVn",
  "key9": "5Vm643rtArBu8z4P5w8gWFpdEBWTZg5TzCZrgZs852Uec1RrkPHgJweh6w2BjzeXHXfynLJfyjtv8Qtok1i4ZLt4",
  "key10": "6GZS5zLiC232VopfwxxWnjc93d49epA6o7wkR5Ka96yXtrXTmLurUCGJouQNvAEa2m8B1KK2pXiwSqgssTAnFcs",
  "key11": "5xCdE8ui9ihkUeejVPS8vaVDHVjJF4QRbpSQa2HHqAckhhAjYYjUd93fGc7twu7eHYnAZygokfbUW9aLw6tcoG5b",
  "key12": "2rtWsaSe1GqYjeJCRcEsmD15mVACedUegMuki3CGJaMqtV5xJ39BFvfUZw58T8FTdTC3wmDjR8CQ6AZ4S7CXLVq2",
  "key13": "5GrcNFgxNqxdT7kSmbwUZ9hxHqAdn3PG62c1ZjGeru26C2Tyo9m29FsSDWvfqCxXrFb4tAGRfKNEHewF55FvquMF",
  "key14": "m5otVQwZw4wBbFFysEYQDo66enwrUPmtXdZaiY84ofmBuCVuQpgeziRhrabnsdWmwdCBvkqmTMBpw3G5Q88o24w",
  "key15": "4j7iDqnh2bZBxqVcssQDSD8YcK2ewuEqx5Vj3yXGLWfYk2Zht2s8gM1zyqJt5UD1v9n39XMxDx6XCxgpTRUri3J3",
  "key16": "S2ePmrDN9LtwLgGgKYh1vXixq1XJd2b74oR2sTAJWt3eqzgaZCQvzYF82cDukaqVxn2rsx7KecuEyiqCeuThNDq",
  "key17": "3TKnXqPP7cZvCZWccN8EogM8YLV4JX9MGgMuYvGY3oeseHpgLtNXwn88mDiKcjJgBYSLMLfGaGZvvTTd2Gu38UQG",
  "key18": "4wV6cdFWoZwdELYujbeA9ooeCX4n7qRjPxCeLATNApzAivPiZTTpsnhTHAVBhkZdbWJtSFsUZXpEikyC9MUczyqv",
  "key19": "3eGGX87HsiH3iV1LS4RXxwRpHRmmE4t8SX2fp9DHjxm11uJVdQ2WbhjxZ5xguVD3yTzD9qE4zThP5EJo91bZLirH",
  "key20": "5KNRJa2ivDSLR3KDumgvUpaKyKZ1ii67jN53ERZoy9zuEmpomKTS1iB2EfiBRjSwFT3vYncfnRarRob1rSikMiz5",
  "key21": "2KtR26UbGQ3KLPzsiSgsHS395GiTqwamJoqv99DFHpqRYDQopdYsDJ9TeNQJTDpEx1ZHzbr1vcJ5Sjn2RMoLu9HR",
  "key22": "67QmCTirvZKdgN4SyKWLAwSiChGNpBn3wmjFiencbrcdTRpffcPfpQJp9fswCtuKoiUXToZEmbnNdiEKoTmC8KDG",
  "key23": "VdvcTWzWynbknLkRmQJmguVv35LxjsK85jysTcUptRsrXsAZHbwSsMp7rniizRxvkjCT3hiCRUQHkawussbz9b5",
  "key24": "2ShYwPkCp4zpmfN5CnExCZt63T1XoPMooeVbAGDqY4NtrADGem3yjmjaYmA6EeEEjeH9vQjFJcAtw8GSukjw9Dq8",
  "key25": "Egqa12t7xD6oSDcx4hnxvwEvGVUKURLJTioKmHNsf2riow3MxTbFXRTqDNUeFHCqreaXAzBbYd1knxbQogHy8s9",
  "key26": "5TY4WjMd5go1g3B3W111kyPRiamtGdHcq96QMrYYCkDHv2HkVM5Xa1RsVxNCHVBAJb568EwT5U1eja3Pzs2ktHgZ",
  "key27": "rdML2stAcvgF7YauEjmqCpYbZCtS5vsjJmN3ngNH2RCqgZiJeUaBvNieQdSLcN81viJzoXjBmy3dkwdQQa5x7oU",
  "key28": "3DzjrKvXXpSSqvTcxgBfC8kMZtt69LFU64q5feP9crJfsjYamWqhw3VpGPhrbGGzKJpevWMLKyMQVrgGpf2rKLGf",
  "key29": "2JLPQ8jdnKs9CubkBsc6V3L1eDbi5DWni4fYtNYfEfEzLFVoyokCZtSQnnUpEiDwmSWdtEq9snQHi9ZUreum75AV",
  "key30": "47HKCky76TcAKHzaWU9FoHtjj952iZZ94Ek72Csb7m6EA6G5FBaNTcxiuAcEZdSsjY7XQMsjdq594tx9ocNcQqkx",
  "key31": "2g93v492JEHTETicaVSBQwhZXUZ8iu2ZvW4uYdjwV17QciWxuQ23oXrCujCUnPo7k5RWFdkc2CqeRWFqCNPa9aKx",
  "key32": "Khg4pZKUBzRDJXXjwqhdFwWUNyJi4PQ7XtMAnh65L4EJ4fFnVzsc98FkksxwGiiVYiEb6X7ReECTtiGsENL1rcm",
  "key33": "3JSYsxeU8dgKYuEaBSsgeeFYQrgWMTyJaQewEL6YWXvYvhcurk7yPQV5q1Wxij8VuFfTuT7AmPeQ5LtbWLS3Ae8Q",
  "key34": "3uVn7cpSqFaPgcmMwPuegPXBFn9T16RwbUcXyEXLJUWYic2efiyNp8q3s2FrNGs68pwET366QRLSgwEcbLLsUbyC",
  "key35": "2xw7QvRAfw2NGv8uLvA88qHXK24xzSyWyhDxTenEewX6gMcTWTRKLDiuU7VQzn7jsBsD56JCPcKL5CpAPHG8uW3P",
  "key36": "2bxMkrehjsYwpT5qS4oDm1vrPhckikgPUHZez12PdygqDEA3bbN7Xq7LQVKPkWavFNXCQqK1H12TjHQzZj7fUdDw",
  "key37": "3LAgESJVbpAfa1jAxDwp2NDLwZ6R5xd9BQZiwqE3xKKnMJm4c4HpfzrZodHjPqKb6uBYSgsgXemk2RiRuiUZedEd",
  "key38": "Kj5LjLPPLVGTdRcgXmdtf8sLZpU4FLhuR3BT8C5mmwHMSobdYGVmv1crf3YtEXCgZif6PiBR5wjPbQANrxffVuS",
  "key39": "52TLPoQU63rcVyNGQpE4MwGrxBgPtXhBBMAyhVdW3yt46egWSjrrTDZdkyEx4sky8jzczGhehk8kM5xyDHMYWc2E",
  "key40": "4supDaic8VNRckKt9znFpy8srhLgLmdRopJBjVmthTA6VXjf3tAj8YwqrFdpFeJAw5bZEujnKzTzdYSdQGKxK8Vg",
  "key41": "HPnhSBKNKd6ve9dnXxsj5fvYcxHN9oerRfJZY9HvrzL3JX1G2fRfJpXDs8B4ErALd1eQzjXRfFGxWbJw9B7Gzx5",
  "key42": "5qzbYNXguCbqZEHVeT3nE2wsxLuTi8ziY98ideXnEV6zqGx5guPnnpTaUCAkn6nuwziByTykjPbonKiJjj42hNfw",
  "key43": "2T6mjEUa2nb7bghWSUXKTtfA49iv4vAh1Ra9UkpDaCSficJ9xDKJXKDCKbm4EErLkEQnQSJKrNPotGeZe7qmdx63"
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
