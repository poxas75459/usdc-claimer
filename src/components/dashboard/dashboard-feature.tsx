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
    "4N1ywsebq4pagjoVWtZ42qnKXMGMAFgpDjP7eb3j3mqi44fMiTJ7bESkvTEA45MzMRQk5uDpiBSHPUUq3XWcMH7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZmaAWmxvfcVCYCEdQJNmvbwJBPqzQUQE5gYHJTPMNH5QuwkthaupfNCtXcvVaJnGSM298SFxYoX1czyHgQqXNo",
  "key1": "5f32SwQiDuJD4LKbLMPorecyJx64fM7zh61fsqvKwcx71quZgWM9ojVYLiJZD6nDZrynF2GwgDATDntR6Q9fpMvr",
  "key2": "2zv56Cnre2jyJsw1xfxZ3XvHQwSqHbN3a7Aw61RbbSkkbk9zQJF2r4iskQQRaeLfkC3GYUYLUQErsx35wVTnyddm",
  "key3": "4wGCvu6vfH2UmnvzuyKSLV5bzLQ7JcgdKgo3KFWWgmoTLg7dnW3VCEL2kx4hD6SH5ahUwPgfaBaufKzdqH6RbxmQ",
  "key4": "4hE2Hwvea1AdWrFbXKyfeAkwaVLXqUSg9v5Nfr7aihyyYFspdsBJDZpUzKxFuFSyK5bE2o9ZBzGZq8meKbZn44if",
  "key5": "NCHWMWbxDpRPEtK35joFdLDfaq8Pkhbcpk7xDCSxUBLLqzZFWSfXJk36xtveW5BMshW5bffySckA53XTm5xrCJF",
  "key6": "4NyNECTr6Kv9CtfhHZDXBbjrTSgqnoXwejPQgYq88r334d28aMBZFM4eKRf3VFeDktWT1CpF9ociagJ8EXgkTYVc",
  "key7": "z7iAwqMmPJCJWNNDeh4J54wcy49BezarYLSDxGSzTqwD8AoBoDcgwQTNoHjD52f6HUvGVKmVYy8wRLqrrxvS23C",
  "key8": "24dMPttANrnxMvAoTtXkoLo8Qp5ouSXqAgP2kcmYumup5yCELTwmYFaLhzvWZUX2wtSsGbBS1KuTYB5QCFLGftWV",
  "key9": "2NUHL4FDWGtFac2ghFJ6W7vaALA5Nv35RNdzUJKkcwK9cBAtThx3xQnCpnEvVZbeT4zkqsxPChR8HJu4DHyWqxpb",
  "key10": "5rwD1VPsa7X8ZnyjR88L37PxPH2q22QTEdAg1WqmUVyvHUjCKcvxf4BWMPyE7ccW6r1EHvpB831VoKXh4smu7LYX",
  "key11": "J2LPxTjYyY9H4ZUmo7fbCPCS8dzKvtprHHQdsDMFoDxvjo8WCEZXtV2gwYeJT3kKubYnuWqSy72fzyXce3iVQCS",
  "key12": "62qfE7pmoKeY7q6mDdjHeS6bvJsz5pAJQhdTbfQwuv85fCnx9tYCkwWh88dcxAM7UUZVsNpkqWLMNEdCWuB34MTK",
  "key13": "2KZkXm96i32mjPWGWb17qwT8Weo3dnV91s4xkGrWtJLAGxJRpn7LRTjpjyzp9e7Nr5adjHdqmpJwz7einXYZSuyR",
  "key14": "4k4HPF8Z9V3UC3o9znNR6CfRULVD1psBCNoso6unJSTxZZG8sLXJArkCatfop4ZAFCmzzNAUxnEzkHEQZcdr6k2c",
  "key15": "31BuW4Tmxtqjg6sZt9N5X2ZtsVnvRnUWh1BeeaQQyiZkTmnA8A4w4puWTBmqz5nGSfCoepCXyAWPz9Ju5PYS4NcJ",
  "key16": "3VcetHAJJUMw8SQjYWyhMEfbawQhGNcKL6VPbZBzs3QSXHd58zFNGGEo1FqYRme12wa7nAFLTafnua7uTfppEVfA",
  "key17": "4cGWiY8FTMtEWUZdCMv5WCHPqgMHSC1LviWvw7Q1MSBhSTfxpxFahP6W1YTfG6NUr85ud5aRG2ZvsWypvwnscqup",
  "key18": "465p72PW4iR3mtUUVFmCs4ZU8f9xTaqxPvA5ajYyoEdSj1xtJ5HD2GKJjyvnPN124vT7D2PTcu5F7gSHXEXqMCuM",
  "key19": "4o4uJjqS7N4Nq5mkCRf8kfmTJKk5VJNSkX2LdjBcx8XV9fwSd3bEqp4ZXLZwyQFJNirCDk5DVQicA5yaX1SNb8tB",
  "key20": "54gtPvzjm78JM8chUYPAPtZwUDTKRQPsn3ypT8RqsQ7xZwrfqf4qXBJjXpeUahTdFwbNRGKD9smgrWUEGhWw3wMz",
  "key21": "4WMBwZQHz6qyRvu9cdxTJ5uoRTHitR7K3YACZr4BGj7qsYJ4YEz5SMW4uKRHuMcTCyS7LGau9HFT4TPBaqwAN8vF",
  "key22": "4uoSfvgzM8Gv4Qctk6uEs8wkb9kbpsEWgk4BskADUYF8QmfgtYCYiWgTTYVa37Zmb4Yp7b5we5ozdaP7ANtVez1A",
  "key23": "5EGZKau8nTBMxrfyHX6NDe2bYXMt7C23tyobZCD7itDAYBqgdRLTg5znasFcfauAsWej1DRGZzhYfN7xxMFiybLe",
  "key24": "4xPDiV6DERYVvpzsRnDLQCuinnnzmGHqVA7z6B2CRqMyDDAbEZ27wsrRcJoNLCVtc2mrhRrLdDrsT847nWqPaQb6",
  "key25": "2Wqd2gSNVY4VkQTeTR4vadSNhQ4fH3NAePYpZgE2VhSe5eMrqRcyWn3DnFgVXXAT5ecDBf4vg324Fu6Tks3xCA9p",
  "key26": "2bGfoiM9298FFoAaH4dqFon49VrsYZmxTGFL3bpKsLQhHTouKqD76GubFCUXooUqK8mE3jJnQ4iD4DC5t2CxcNCE",
  "key27": "4MDBuszpXpgTe6vpqn9hEuxLe2MBCvBf1fojrYnZsuAiafxwu8MkvqpkvXh3jm25XvVMjYRSCUpzvxu26V3RM5b8",
  "key28": "5YwcwJZmAdXBvMibvvKJU4RPNanccC6BEojbeTdbBGRLJKhwF1Ga3xEoTEXeWXu5roLiQY87bD99WwgXdbzB2jhj"
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
