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
    "Hd3UNLDUfWFUqUGLYSi3k4uB7R34U2mUsx3z88AFikBKgDaJkBuh9ofVgzq2B8c6s5tk2NuSZzMbFgvQNuhaMTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5Rw2pX9fv6jsuCnh1qqzsVS5KrSxSXeH2KtyUiGPwxrcS3VmWZgeEhL3jmvy64RV2oJ2wYL6xviFG7rSq5u4jB",
  "key1": "dYoUDD7dMVKzNVYT2ex26zsahvkUjm9jKZm6Wwjvvoy3kqL4SqWt2F1NveySZVhyS3DgZAYUXSYuQWVkj53PkfC",
  "key2": "23NN1Np8Gh9BiVkDoCWqXVYBtrQKwwY95RhvCb462u2LLfHP5PsfyyzT9ux1J8ZZL3Q7c74PpUsBHhJTbJRVoexz",
  "key3": "MfB6pzkifgnpwzbACsCgCe6JFcE48L6tS1iYmWyjJ9j3qNiGHvRXvFpN9sY7bPBK77H9QTTEishDeNzfU8bAKFb",
  "key4": "3qdStmdL4GVLu9BtcKNLSGhCoofD9dVMST6oL94exYuspgErKtXroBNbzekzv3wbU5Tqit8t77ncn3FSqy9eYE3r",
  "key5": "5BpS9dKzaJxZkRAMeMYDbR5nqHsw1PzgTPNT5qsYjNSHSXLYoaPj93joSbDGXi4FLtar1MyJGnvKkL5NwRQssHMY",
  "key6": "MkrB14Qnw2vYWEsDNywykU9Yv2JHR5xepe8Rd9s5aRJV4oDCRpowDMgiG1LjUAWViEsoFf9DpjaBmHDaoDpGirk",
  "key7": "52APvmTwM1UzXQoZK6k7DhwabNX3SK3aVhuqhGCWNwyearThEVKcs8fp1ruDCPCWVk6mqjAsgxnwADtHxDqNQDC2",
  "key8": "5wQX2UkUeRBCpfXfssz2JRMrUhmTcaQ68GQRriUfXWq5ZCmEkEkQyz3APYnzo2RM25Zivz3UDBq4V4h4Mc6McW9h",
  "key9": "3r6Tp3MzHLJAp1uaYFx3dyzR2Fx8RpM7K7HchYfLMKd2pu4S3KUL8yJc679iM1ijnMCHyKPybTin6tkyJNUz1BK8",
  "key10": "bBfjCXgqnHXKDaXaqj4xPpztoXQMs542C8Eyfj8kp4hpN3jDe38aqToD9pu1ACFZDd8JPqubBfMLPxuYTWRpofV",
  "key11": "5Nx1Ri9AnGqejNDBavdYNAhdxRLgU1vjA3xEbDC4VTASVAVTgRn8gUgpnobQ7n96hNPcUMFygsDq3qka73tpBUFh",
  "key12": "aHqA15geWDWUmXURGEGtaY3VjthpAybkqPDV1JuY2xmF97GXxWr4sZj32JJfTgpXjSNTahX3jAoxv11JrNhbD8a",
  "key13": "vH8gTCbvLtqVymQWmjKMJcK2bi1wT8CzQ7iTwgb2aNqF9CLbbnGqFYCeK4kkmCT3eDCmxNwJ2a275gnrUT6t8N3",
  "key14": "54vDf4pmLnP5yVV1EK9BjUzxUWKHGvBuXG1RCvsMf6fgwTYzXwVzCqYRU6ykw8BEHa67iZSZruZKeayAzdZTL3Xs",
  "key15": "5cURmyWFJBjAdZ9Kdbh859YiKSSk84j5hRCf7BYwHeTe2kGBqGZ5wKf7zpKADbseJk2VJ1bLiXWxHDvKYBZp2S4K",
  "key16": "3EqinAvWRTNVEf36K6vG1u9hMtmHvkcS5FhSB3T9EmAg3TXBfjhyxxBsyw729sarDLwK4CVi96dXfiRDgsua5LhR",
  "key17": "2booV79bHj11SHnhuJN6eLc3DY6sb6S4UzcXUDfFJnDDvL7JXrmCN7H1mZzdnEPxKjmExQvoS5AR8SQ6kR1Rfh8o",
  "key18": "3Kr3KgwHGR5rw9JF6g3aKjjp9mJFcn3jqTMunP6UWoKxoiKTugWfFqLohPT4PeBQDzY9nFg5rtnAesm7ayMCDnbF",
  "key19": "4ypdGZZCdfczQaT4oySznf6bhuHvQBoG7N77GJSgePNCKSbfJFJHcZN6VyBftsdQArG3CLRdqeNZU6aa27gj2EXs",
  "key20": "sM5BHPz9j8qcwuxgpJ5BmENRhE2FjFe7cEMzb7BjgMageffFmRMYhX2dTS4v1ifqeT8ecvf3qpcsMCoXh45CWjc",
  "key21": "2Vo6CJ6mg8SyKQcTWAhWprtMHMB6mtfLbdrm41NJp3bSMG6W7RFC8ujQTQixcWRTrAbWgrqnN1EdP3jFUpvVfW97",
  "key22": "4AeJTjLXEnQFu6ML38srFi9oB8BTuc6WABJjydXzxVkD1GuQoUHpDtBp34Jk7onPzNcX2Zn4fzxB5aR4cpWXzP71",
  "key23": "MzeDJz2UWt6Ptra2eeoZysizKm49YHNTC55S26Gv2NngBtZVAga1yaqSYDFXFCYESXe9FMX1crwdqqqFkwDKCNU",
  "key24": "44diYZtG9hx8nA9RudZ67AtNtsZZbVh7XStj5sh5HYjSQmyWN9fHSfG3GSFfwBgHVXrJXdXDtEXccyYFP1RE9ow1",
  "key25": "33LmbrQFbqqWN9DFZpY8EJzEk1rwrX51NxnRpYnZbFh53JYYLwrKZZkPsmpcHqb3pCt9gK5vcLvcK38XfPZiWcqt",
  "key26": "4D6NmLM3E5m7JRaCWMyqW9WNRgmy4tQP7RZubuTtgTpEgiXsCqRzXc9Mpw2U9PCN6fyHoNsjQaF9eoESf1LLEPT9"
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
