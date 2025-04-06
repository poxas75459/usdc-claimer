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
    "2UKE2X7FVPPC9zgNDwATera1HJq9naLVDgGpN2NkeADUKnD227LoTHYEui9Ly11UANMcDBRHirqviwdxAvhehia8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VSBz1Qvfm45JQoegsT8pPb5SyhDSVHAopnsc2wwMtq4332YsuFVZZjHZERKnTAsdEXNrMJAzvoLuUCEW4fbgXkC",
  "key1": "35MoJR1MEtk9VXhdosK1r6ErPYDqX7MC7opZRRHHiRVRVyQMK966vtuJp3F3JoZ5kYu5cMpQeZWBYTwabMSnd9Na",
  "key2": "47AJsytFkACWRwDf7KY4EsBUpao1NNsLYP13wr4sxqiwmKjnsXiM9GSo5GNUKtqCHWmZmyZsjeQNu3C8iH22Gtm1",
  "key3": "xVVhvNVn8oepqn9GMSCRVo5jwP5tfDhajas1nKSwPxvNAqfqmbkBbLaNzUSsHocahf6om2ZDfNNjA4iqAnzgcQG",
  "key4": "2Ddz9Rq1cGUQPGmYuYNHKFy9aByuD3dEtVHj2gpk5jQRihZYJNr2kpn4TACPjxZoG8XH9jQ72bnafry3Kpo89nBF",
  "key5": "2DYmXZ1vrUiAL5MZV3oZuNyu9fkk37CmQ3xeXpWt8UWQnNsfWVUeBqjfm8bwti4RmrH38BK42R8bAf1oHWYtzd2y",
  "key6": "35iuetEM6Hz2U63mSud4KWY2LaYKQm3q4weNT23AsN8yUcqvFvPGi5BftqCoVKqx7YvJ5npJFjjfBQmkkstpWibB",
  "key7": "zfMKQNmvc85DMiSTyxj9uTSJpQBbno5UpfCrrd1b8PQHeJUyAzoXge52xmwN5xWFFMHhxPCeoYsPApAsR1jtatS",
  "key8": "4SkzYj8xJ8PW21e1fPzmGQ8gLWJgLeBCLWngWZi8QDxkf7UTNeArkLRY6RQ5PWXQAvtPRtGRZpVWHrZNSr1n9SM3",
  "key9": "3jzqVzvuDmvurHpGzn7nk6oy2mbLE6X7YiHdMY9v46icUo6pmk5tqEDqxNsvMQ5fX9v5d4brQcLLXgEuWE9ntnW8",
  "key10": "47SR3Tc46Ddt1dauGzCXucpyhJr5ShnW9tZjsBF4wydC7zar7CqydwvprdWfXWn58tMwuVRnAQQhzE17abnVFgjf",
  "key11": "3kYJsLhodyHEZnerFaBHmS1T96WZLf63PWNT4iD4xLLUVpaY9zkW1pdNshCWakCkeyJxLJmqnwGTQm51S9NM7qTg",
  "key12": "2M6SpkhBJmZqUGJhGD7EQ4WQsTbBhPUrAZyQg5EujWLzHcYYcPH23aGFGYqVDTJeXhd4Hvyn1e7NGPYVoVng68h3",
  "key13": "PrgGSDSHRtc3qwwWoKPNDTW75ibe7Ce7JioEy3wuaqqmqF3ZgkVBjcUBgJUuPGtKmtxJmpKoCjg9YgQAY76m7iU",
  "key14": "4rwNmmH8BCcFv4BE8rkM71rLXmDG1YqzUdvDknsyKhjdx95pEgwhyN3K1p8MiviPU937Z4c1DjKE6LLQG6wrMTFg",
  "key15": "33HYgeZYqcpKVKzsfr7uDHN4B6tbesiMFkQLFVeZz6zD81QSP7bXPdD5ef2NmPG3pN2XDZiyY2G7vU2qNDHj4Kjm",
  "key16": "z93rDTDXJnfXqZe5icFdtNCBsBtRusQhUo2rTn4ueAhqFxQ2XgZFP3PVtx61SEWMvtvdnJpZvTNxU8QDYbWqGMc",
  "key17": "35V9vHX3ZDupFaGj7TnFhpHA2ZcL1G8QzSsD6gGeMWoZFauDReZmRqoopS8Gfezjr85Rx9uMvHEvPqkAsSmhEB3v",
  "key18": "4cwgz9Avz9UbPW5Xj75k7MvMGQYsSoVWPw32FPPREJkhY29ZM3zsmdwST7KUmw1jHSZ5SaR3ozAuvT4hvGyPAW2W",
  "key19": "4zCZyGTUAZnRvLtBH6VUpF1fvUwemeLjYuU3mLJxdUegXsyJG3YV4CMoBXkTVg4i11Wks3rpuiYbKvsHagvNVtUc",
  "key20": "3aZSiCz8jG5pDHeuYuz4ozzud9gtnVTJz5UL1nc52oM5YgCWdXXSuTaFHeai5WMUF54DunzBaH7oB7voYgoGqyfG",
  "key21": "4voMWKXjasUkd4RuFHRiCVrno7qUdVyHTTikUMNBt42SCN5jmwtHNFjv5Mz31Luwjc43beYqTEv11njjPEuQGWgr",
  "key22": "4cfbWrj8r6qzN8EQohSRBtidayo68DQCPcdY1ED31Nuxv2USMcuW1dci6JJP6zD2dkSfpgR6uyKNJqWiX9Zz5knJ",
  "key23": "36w7juc99BFmXVfY5vYrC9DNvvSfwy3ButWqnok7WZVCXGmwHoracFzpfdMFsqENmwXHw3MRSDqXrTt61Nbu1TJ2",
  "key24": "5LaTUPahX4z2Roi2K8V7VeKJ8gjtqqVBQkhb7MXmppD5ua2EwPPMD8vuSSEMBgeEgVcq5YN58KPTnC8SJUer9muZ",
  "key25": "3gctbA7SXAGkvyoJD9nfhGjUdB5ywuoVDiqy1uFviJ2Sz3jXHjUhXpJ3d9yi8E8gqkLR8fNeY6RdM64kzFASh8X7",
  "key26": "2ZtZz8JTxKCkJqbZXbgYEwDmkTNVa6fso9oi49g76jt89DGWtaQsQMTZwFwm3PZGpRsLUMAwQWWoRyCCwZTLbXbD",
  "key27": "5ihw59BqmMeukxoLG4ANdkdCU5dRtUW21BWjnzk3npFjfep7LxM87cFkCSZ1SKBaov6NGmEU3PMXYymyiDc8nr16",
  "key28": "3meyyRiYXqo5A4JruREquSnUXMstB4S3vyA2sc3GzvmzkMQdSUgQsaXffZtYnJ8CnACAwF8biEwGij7Kt7nBm28w",
  "key29": "4Pmmcb7BQnbMo8qrzQoVaRiRdq5TMe9gBXkLgmfMjUJfV9UBsBTYJZXnCbonSjv3KnKcz7cqo3Fipm1bTzsFC2y4",
  "key30": "3DAYkkjWxW1L2ymaTw2Jw3amZ7WNDno8YtsLxAiN7fSi6FYwEpsdC1cL7sWaZ3ej3VWwGg2XQTET7Kz75Etv19fZ",
  "key31": "2nVq29kDe3zKjNby9ECzMWUAdstHAoFQrZzz992RjH719A1MUg6hLrLiem1jVr21e3XppsecMNnXLttVu1wXL4ti",
  "key32": "34K33tvGG753TQUmb73vTDpytpXsJmQaUm7XtX8tnd572s71KaCAy7TJkWVw6G5ft3TC7MAkzzsWcr98agxdD1tC",
  "key33": "3MTpy6sFoxc1K2MVg4sYs56vJvkLsCYav5Qk2bEc1ea2y3KiNnADcZ9W69fScCzZRfhhfsV7nN7pNVGUgLA4ZQSe",
  "key34": "3AUCik8qzYvC2XTGphXYjBR8uRXcD4S4G1cRBM4miDq6PHWcyPYfKpLdVz38oqogTcWFFLBxiPCN5RSV2EZyGpd1",
  "key35": "2uF7qR2UEeA7CpNQ1KRwCAQD4EwX42DT9rYgHDaKUJy8qm43CPsi8Y7xEDdBefk3FseRgSj2vfYEMt394ZPLGZvD",
  "key36": "4bMbrjXYXtZvWA6UoBdqpgfyMtoRXjbYMGemfpwBVp37syfzwSbvEqFWYcHS9CrTC98neCg5443UtR8a1CQzbfAR",
  "key37": "3QQwwZ5dRzhHbo1RE93bHQppRrmNYX9dLf1VmXutdrcyZc1upHDJoU7nC3rFVEzx6VBCoAgoeoP2VUL62wuuMnWk",
  "key38": "kFswB8ZkLYHr5kZnA7iPVRJbGGSCfQyM2e3h7TWwuP2zp9YZe1krEKsZawAvG3GSf2oWV1dsCfR1nq6MET5W6EZ",
  "key39": "45fNedaHa8ujBgWVwKYJXatE1Ns2qgSUhGqJyXvufWJdtVRgwgG7bBaGFbk7N1Y17L5heGNacH9aZQqonMfjLCJe",
  "key40": "49zrghP249oa1PUzhL2qhexexHW7VgPKDLi8i8XbB9V3vWzBKPLxPWAVqSensmyqtxSb27RXMNevmnF43wagsoWK",
  "key41": "r625EVHVJtDWQGaieiDB1dHuGwXMFoXhBNiWwfk9fF6F2C85dfWq8P1pJw3LPpt4oAuvKE6TXm776Kt8vJLoRHg",
  "key42": "28e57iLnPib63ewvufusH24kESkzztczEjc8nX26DutoWvCRvVuAUkM2oEvYk4WNNJqR513YPHCgyD5NDkRudUPR",
  "key43": "2pL5LcLpNxnzR6mEqXFWQ7LX2RbrZBSqTkefPGnJocyH6Skcfbn9PcxfJt5RSW4zA2chks8o2DC9CGfkWDGET19Q",
  "key44": "3FZprkPKRvbTrMnjJTTmoUCkn2yQfHoAk6yaDy2MB7uC9qeiGPFdZ8cPJXPv8p1bvZKx5HFJe1ZGQVckKRQLorkn"
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
