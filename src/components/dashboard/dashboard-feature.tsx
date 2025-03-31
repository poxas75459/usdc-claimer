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
    "29XUf3aoT52hwNJqDp5RAMd5CBBphmFmCgF4BR5TxR5GBXQrhZvaxrYTCQBwDSR5YTjdXNxUQeSeqYDPWpNLvZEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dTGXPbR91TabWJ5eu7iT8rsK4gA1qEXR4JCUHcVBaqQ9TyHZCWpSRZ7HZk4W7jYAeV3PTBWLj3DVN8g6AcfJeZ3",
  "key1": "aEMWNB6ujmstgVftFVzyNMBXMptm3qB1WbnBhdvawGKBgTxYy4xF6GtLGdEqG7XMRj6Lnk6Pwr87NUaEiWcUQE2",
  "key2": "2fCAR9bp2oaUwRo1mEasjb9EsdAy5k4va4FduuvVBmdtLEwBqYJVbXv3paReWkHUhXc8djGpcE4PBUSS68b1knV5",
  "key3": "Yh5v4UpKkDgvnoa3NYtuSTYT3hLNUaeEd3Xz2D4GXfr9nv9ZP24EL1QEQohYawAKWvSyZ2cqUgELoreXmfCf1TR",
  "key4": "28Y8RMWzaWWh7cb7nEq5GhmUbrddky8sC752B5GhJjLHug6UYKrqoyCQQC7RqXrgsHhKzsYvjNWwCmA872unhNAd",
  "key5": "4MHprgZejKmNpuzYWurBqB3woGz5MgWuJFpUwFcZSwCeb43CWkHfk1VewrycCzRDSMF6ojFAwT48NYmCn6xsVR2h",
  "key6": "5rdGWoTdy8ZSgjsNzbJTJTEciPcNYC87Udj3cGvxAbWLo3ZBoG2sQ4eARwizTTGz59EDBvheEmKcsaoaGEEhu6GY",
  "key7": "dfQMjEi2YUSneDu4bS9QhbMd3DFRjM1a9eHgUC4qF1HE6sNkULPBaJoG5sh7jK5TtDbJPyHv16EYpCZmntLCrQs",
  "key8": "4X87wixB3AaKnCtUBoEkJ42emUSQShYpfoARbSJDgL2ksEiiwdoRjYjzZBRdpbxvvorRDdsJHEg6ewxQDCGJBxNU",
  "key9": "3RCN7CQE3tQRVtQoEutSuWHnjg6VSLK2Pitu3xsYdRRbqppCwsouXmTngo9LJyJLt2QgMM9YzZ2MJTXh4EH4VCWd",
  "key10": "5MxstP5HHZ6a47GTFmRLuPWXyuXMD2ophHFFyoSrUL4ahbjyNzxEkuDkYuxkPWgUaUKPTVTdV2JAPpq9Pbk4DFoy",
  "key11": "DYxtEVnUQSgUfwovcCncAAFs6kJFf4LfwKtXwAVGn9Q9wnG74sk5qrG7X5NCDk2EUesUVzT24MxkTUJw1zgazcm",
  "key12": "2iaXhdgCncj9fA8FxS88D96Wje4bCqmSH759zBsxSGM9RrX1wRBjUKx3TxKBfpk2pS3MSTFDvevqdzoUCZiSEFEu",
  "key13": "2NbaoA2qeodvmBAcJY9uCR1GV4uByNeE5Gt8QmnJGVsTn9n1jUtpQBy1ffUTF7TdrchDvaA1P3oqNFcqm7t2cbge",
  "key14": "pGT5fnLTwT5ui38uTFis1emFQ7yQwa5C71FVAuc7p9YzASfnJURkzCB3pCRvDKJB7dAb8qAThH8VvamZTRpbUbU",
  "key15": "2YECTP4u52JQQ6C25owngwcP9M9sP53sMmtZbToH45kKgNv7BpaEwU1sbgEVWqHnsiwpFoSpWtRUCWKvMsetfDum",
  "key16": "4gE9LAHVxvZcgkSqnLrpJAWn4FEBCdUtQaNRdC4pKcvbAtvFaaYq6BGBZX2epXsYSav84kWjC26LF7b1oS2orvRg",
  "key17": "2ASwW4K8DuqaA1kUUu11zHBYYETgaQTSBqLHUJajoBna4JJ1cUZfgdcBkEMYTtkwtTp7iwrXfoboQn16U9Egy2Ht",
  "key18": "DqQsBjLXQ2BWwmnqnUuJmQ2vpG9NkLtMwzvHh18UcY3BFYqMqWLW6YftPchc9yUUEWwRXy3tP7VX7j9WftjgLAV",
  "key19": "D6v81gvnuBWTz6349ztukgfBPEx7s5WU8rCzrwmEe5CMhtR59qqGWYoRTdgHfmH9vbrmVwi8PNAA6GqoWsE12k7",
  "key20": "3bJQgwRS28D2VihVRR3zDgWbGvKoz4L7qMPoLDNjVUaW8ozFXwKnCL9V9ZsthAEj9iTzFNHo7wpqq9Da1g2kD1sz",
  "key21": "53BMJtgkVHpczyo5MRj4wPUgxZjx9uP5pHzrAHzDbpfgESvauCqRqNDiTum7ekM6ZyfvAmrYi3Cdfr97B1wC1aMw",
  "key22": "5J1tXrKfH6EJWKNCQJZWEbFSva7XR3KB8FhjNxo4SVhB5EvtLgWkFGBdbgf5HqCCNXBrJwQNvBnYXpYRZ3meshnL",
  "key23": "5UnSMg4NYEevxbgsNhaKzuZbng21Yqizt6VT3udd1ibisb7rpy1HSpEmQWWxpt6garsrMvASJwHXaybyQc1FyLbF",
  "key24": "5GVMZeL48gM39Yj7saBuXkwxGB7xy5139BvKuV3QYqTWVsFG5psLFkty41hCkop4WSRFbKsf1tyrKWGjtTM7N9Fo",
  "key25": "3ZrvWCeE1q2MLU6gbiLvwbURSf2P2CgWDHeePtZLRWRYW3gs2chnxStSTR8mYQyonH5NbxX3Rm6y7BhofnSdkUbb"
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
