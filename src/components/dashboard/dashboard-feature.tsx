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
    "4Tj4hAYWCfXUVxTPrSfWgrbhzozUSbGx4shpyXKncnvt1fH4j1JGFNCXJgpe8ULfce1PYrhtvq1oGumDFurpPgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XYcXbTn67U2NeaeRkce3hK1bsYTJ5cnGc3rEWYK7tiRjXaajyDkbX36Y2ZpHuLMDJ8Eze66Vxn6xnW9Z9Pdntn1",
  "key1": "2yKqrHY5CcAS3m2HToLxk69yyMPJeskk68epEzKyPySLLW86tLeYSvPQUFrq74Yigwx7KgqTgkYKtRLz95CgD6E5",
  "key2": "57QyNKg2JUhixNNi8S2yk8qwkWxpLAzvuPCVW33Sm4b5PeSGmxCRHE3Z9FhPtMFtDVU9AqYkjT3e2UpdKyT78Bqm",
  "key3": "3RDKUh5zMwkMg8HcoWt9N9v2PvndZjpge8rGMp7F5vbeKDmwy5CaH4wKJ5QgbRaEWyM6mJAT44Qyd9Y8ev5aydd9",
  "key4": "3tZzjGiBPpHmsr7KF3guu3XGEMrjiYZWczr7Sq3Ym2tu4uZVyckbniq8JMNQoXXPFgQJuTJWSSDXhr84aMt2bze",
  "key5": "3fAsG1GkXQHgCMWWzw8iSgerrQcqLPAZ4qWQ37zVUR2JfLwk7MfMdfZj2USCWrJ72kAL6JMg7wJiUcAXZxsRwoDJ",
  "key6": "3LvKtsYdXgPUKnN8w6w2QnC36PPckCewxR9VgNFMhr95vsHrLDY38JKpGJkvJdqxWYYEC1FS9CJk955eEygY1U11",
  "key7": "JmnYzsTqLZ21Dk9QjwfdBxLD3UcPtngE6BbAdZzoHE1w1Sgj8y5Kx2ehnzcuNyrXgMoujMUfWSyM2DQABH1mGyt",
  "key8": "jzgk5cHwQxTnCn3zUA7KZtQnB42BJ9hdNfJpwFjfC7ZxMnT7dyiAaJPQkQnjt8hayhX2ZAAkK1o9qZNJektAFph",
  "key9": "5RVwxXJYMG126uqcLADKQdSAf3ju7sXCaj6XUXCMfMWrxKHXJZVaVFiWaQ8wAs6ENqh8HuiDj1iUMbWTKzk28CqB",
  "key10": "2UFyYEqGkQiPfRS7koPEgyBtVRSBZguJs7cCq5eeyKfLVzmKkWvL3CPXVv8pf95WiYGnQWsBJUc324EhczkPMRGV",
  "key11": "Qi8LetMEHF7AsuTD3bbynfQUJA5BUpC7fggCDzyMYCKP29t142Ck8XpRrEegbYBeWFS8fJ8vkQ6Q7QC1f8GuX3t",
  "key12": "5CVGUHRhssyz7cDYji3U6RTozgPBzt87gstEnEnisTvQvJxe7P8Bwr8A4NhJoZZnZ98kk8ED82RP3orQqPMiGrFM",
  "key13": "66SPR97dbBkJR4EihnSGA4N6ty3Gg2qSErqpBPVmXo7DdQTiD7nYGxcaEDZMdkmAE46iHqhmMgBgDVMDRXie3PU",
  "key14": "4kmFhKmGcQAXvdyeSiLSggzjwy5itpcNDV88Gh5NnzVwrZfWt2uSHVckUzDj7vq88FCfPEqUMEd77YFEzMDEogxQ",
  "key15": "22r9vGY78R1DM9QiapjjEZSvGb42jcCz5rxzi7CF3EFUnyQJarjHW9EfL8oFUEyzySA9ghBz8PZnarFMW46LBvP7",
  "key16": "3kC4buffySgY4ePvav6JmZRcHghwXgYPGWqav2SgTBUuRe3A5JzFDUYDFgAbjUPvHGV2YLJfpCTGjkDbV2TXSMrm",
  "key17": "2df9xwzEBgTnbz3qnP9XpDCHPMw463EAzSQdd8mTpbZwWWNpiteLiuForFCJxSMtEDH1jeDaGB5n1BXKA6m8jHCt",
  "key18": "2pkSLpFeDty8C2k5QNcF3ji7mHYP6P8DCEESHdpkHcqAiNT8y4npbKxQELzq8Sox4in4V1XScQ4JFjYVNfWgU1bG",
  "key19": "4FFNT78GUkQ8LQ5v71mdus83KBYPXZrusAUdjCYMN8Qz9XgVNtvFLnbA66QvSW5TEGJJ1onqNok6w7Jbk7Sfmhh6",
  "key20": "5TyEWwB4JXK5Bzqv8QpkA1BCBnEaBnhWFHhhXGjt6e26rGueHVARN6tKDPBdSEan2fX3SSHv6mU47L3abaTFf2cU",
  "key21": "5u33kVpxoju3t7aZPvvdusWeozuxVRT3uHZb6ENF6fPdEfYRemJhLukWa3HJYGd5G7Ueo9RCDPUuFoj4w2WZRSGo",
  "key22": "23GFje3fsi1cauRKicyjsQ8iwhHUV1mURT2D5YuKMdXHZmd3Yx8iaMc1Ye79bkMNPUPd2QYZyjRPuV9B52fqukGG",
  "key23": "5WnPvukftu2Gcks8fQxFEhoJ6vAjAU8qCNd6pLNep6kAXQqfkuUbXyzzD6HXrTVf2HLVDJeCm3oFokV4k417zW16",
  "key24": "2wCy8pNQKNkyBf5FMfAj2QLb4qaGZyVctWzZwGohqKUekekCrE1o5qEzwarBdn183ChGNsRCnYpFoyb6Cdkw3SGm"
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
