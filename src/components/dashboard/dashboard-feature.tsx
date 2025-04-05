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
    "47yVhHQ2T7CwCznVM1itkWNCbT9rSgG8mTG4qhHF1V1jyRJQ399xkGVpxr4BG86KJ4GBHtCLqUAWDSn741ZqnJvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RXi7De5bLjJFXNT7DRiB4NadqXYszckgqddAKwcmdEctT1PNNtYu7h4xoVP93pimG4cEtAPRYQduDEeNigwReFh",
  "key1": "PqNdQ1BDJepZ9DkqVVbGGXoXADUy7MX54eXJx5gKFrhTjsnp8yhoFNGz5UAkr6Ad3hk2qsDU5iTbvnwiJXgbghN",
  "key2": "46CkdHedRG3hTdMvbwiZvHbZ2Mqi6bPbbb3XY7yHfrPbBeCeADDbs68QB8RTj8cj3VbMY31UdJu5ay9jq5h4eyke",
  "key3": "53wucfjEJyFwSs2MsXZCzjArhSiYunkEE8rvod7mHXb7bfx6umAz2nx4SYeuBmK23PriwqV9LUPahdXeCA8EKnPD",
  "key4": "4kEGei3zBm1a9ne83hMHqaoqZa48TgaiJdLWq9UT9qxV54ETNTcTSdXEPRUFBtxfULMynpHyxX5H2GvQL8UF8piZ",
  "key5": "249FbevPCBnkLtCCy6EoEfBUSkwpY9geeQXfcEN2NGdTAsHiM8anDBdqqCMiRBarm59dA7MJcV3GCZCoVjBLKVt9",
  "key6": "4Jo9VUrRDJkMFHt2UMevgdhUFZa26rGQFo8DuPy8dUqcxe48FXLjGpwJpw3g5WRAGpG5bGF9qzg2k3cPvHw34WCW",
  "key7": "2KCubWSoRM8qEtrVt5MmNqxLC2K8XrxJnjH3Akmoaz1oBfhCwNB5Z56FEyyTnPTKScLB9w7bABKX7rxmbmifZURt",
  "key8": "4BbyfwfVzwfA9dxUcurt4fUfw5WtXUFvHyFCskua33HgsoifTKKf92W1stwN8QRmgtqwiwt9qpYFsLoox1Rte74",
  "key9": "4V7s8sR7HRaA6TFfgNaMu9upCK1Law4RuU2e1bucquyYvECZ9VkKcwH8TbkEYtzg2tfPYuM7XxF5x4RRTK2gp6MY",
  "key10": "4hrw3T2w4B6DDwsDnJJ8g186amV48URyEeD9cJLZFGktMedQiEVyZxmAdSBV5xCBtCuGtsYgU2uzuS6m8H4jUtZv",
  "key11": "5mtjb2swmW7HwtUSH2k8RqMVcvFnLoeRWhDChNw2kkZrkkW2b19PM9YKut6zn28HreQWJUSxQsk95n3RpMP4rqtu",
  "key12": "4AHS5qr4qN6PAvXhCJiiabD1eKHAhnDDTZzR4njBNBmHnt6BRxaBR3eyeG9aBp6sMQoChhnkmpubJ54TZ29S9ozm",
  "key13": "5YEJLPCSXBtr25K9QHg9iKQ9HeNv844dgxveBSS8fikQufi23axjdU3mQHuLvJhwFR95JALT8Vu7qbYC1iKgi3LE",
  "key14": "5EsCZMSLahnuoUeHoskFyUW5SnEUNSpXnJNXnA2HhEE4yMCyDkCpEj4ysf4Z1UdkaE25iYjYfcHRUTPWK5jiCFT1",
  "key15": "5oZbZopDoVvAty4e4dQJJAxMMqALZm1aytREvbEbXqkWfnC2m5REQLCTbas2bWyWup4LEYQV6teKEC9Yrbxpv9CA",
  "key16": "2zDALS1FayweS92c2n7dJGecxqgNCJJje8x9q789rAwSwJznkCWzcfosu5ThhgQu9UGy9mTJSvrSTQx6qV9EVoWm",
  "key17": "5kLajUftagTx2wBNQrYb4vkiXgY7wZR4jrDy7QkmuDLMYp6jrdnv4M7q1yVYvG9T41wjmj5tqUNwAezatPmNWXVa",
  "key18": "5kN4vWdsuU3mbapNnP4Xwe8wYfZEuorYu5VgknkDSyDVL8QD2jZp95qr5eeX9ceZiv4x4sFKV66VTGDTKn76QGng",
  "key19": "23ANK9J2rPMrJ6aL6oCwemGvgqkjEC2GoPYuPgEnR1Pg5gM6cbVsFnRk4uDJV7tZr34ZsGdNSLXh65XyhTTd5VtJ",
  "key20": "4EkDWsPS4EZhCeiEH9HJi8UqgJFnTJgTrUiTgCyLyDNrBEDLv6YSzu4VhNezCdXJ6cj4aWsG5CHZxBLf1kGYVUyY",
  "key21": "2u4K8pDsmmYjJkmw3goPmoYTfHNK64cdck7jU3bC2nNcQLp938qmskLTgRud1JEwKwVxA7rx5dGPKRf7duPyoc8g",
  "key22": "3WHsUWKFBeKD5sEgya4WytV2TsAdUK9trHBrD4JPjoJFwPUZZrYtHsPtoXEgVXVKG7suScEobaJZ5iAs7WcCsZ7w",
  "key23": "3XdUidaimcRfDFF69ohGr89FC2zMBkVbh5jNxkxSJRCQjyDeoDtQVLRqmsanFwPPZLB1V3cqBvSYVJNm5NxoPEhS",
  "key24": "4W75CPYK1WWA2uAG6uhUt4YA7Hx1N8m6tKSnWrj6vzccwjrLETjyzRyAH4FNmhHXKtfpNgJZrSV2FkUSypVCLjJK"
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
