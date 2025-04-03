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
    "2YKkAxTVyC87qBC1MHBNNcFXmY7VRxjX1i35Eb6YEEdaJ9AKd631ejKYDx2oZaXiWrS2LjSdoiq1wcUoiSKrxgRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDmDW8kWqJdjc3d1tf4EqkjCz2Mj8dNB52sdn3raSH7F3LrBLwm58MENVnACnwp5Y9qo6qp85kxWsMPxhR5CcMt",
  "key1": "3o6wBBHTeXEKb5narQXfGbkowHR5553KnhaJVAd11RxNtiXDPTSVKrgKcg8yoztTxM33LtJy5J211JKyshENuDt5",
  "key2": "3usHLczznxs8HSZk8tdvABTSahYTx89Nx5cPbiCQuYrZ4AEM7ccCd9Pzv9Dy3dgLiXjebBSXGJxyL3Loi1eTgwqu",
  "key3": "2ZwPViBNKEEqchXUsFbeeBotWGWBy6bnofQjDTAcjdEGFPmVj8KNvfvFicGazLbQRAa58SwvTWiSMo5y917pR2Gy",
  "key4": "5eaooDDj5qghpz4GvsJmg43WfKsZadJrXHhBJ789WUa5qQGVYn9YP9whWiG7JU3kBgqZcccmf8tSA5cFKRySYKNe",
  "key5": "2rC5Mt7y85nx6tJy3LbmSW8BWRTdv9ovzBLWNeH5pohkkGkGGc9vM4heuSSWUBgUR3fk7JnXNtg3uZ7oTLGQKTc6",
  "key6": "5KN8PMNi1nX6iUgURXCeNjpDVEsT25RaTNYpSVkqTD2ir1EBpHEN7bkMKwvmsKmUnapn5UKjANeTdgT1TDgAnmZv",
  "key7": "4RvqVmFzDExNRSMaCBBNEdWAU1LnYvcDBwXPjTvvLuVQbRzgRxUgsiD7SJz4xFX9ZLyx75AaM83YA8R9KqgV5moq",
  "key8": "3zWgUYMtL7L8iQ4jeB1mz9xqSZmuvMA2fSMPfFCX4Z22kcTpKrzfNsL7r4FxeGZ93AmUFqw6ntrR8VgjsjdEN3QR",
  "key9": "5TEE84s4ycAYKsWvf8j9Q36jVodpKDBsgztNM3Zp4jvY5wR5cgqLKTh1Ny1PpM4VozciTai3izKJNTNTQF8axwKd",
  "key10": "5W91wDEAM6fVUYS4Bttr6x8mizRb7SefwS6NtMCjvXtu8B9sTE5n2XG6kSnaux9uhJ6yvzAQSUHYHHwcBD889EHs",
  "key11": "nPbnioZU2p4amr6PW9AXtW9NRb6KNRGedhksVzjaKHKHE4XpycrSXXYy2dGyySJjwHRAnBbvMqZSy6Bxso54u4H",
  "key12": "5a5rSVGvxZ7kygFSoqVqfFXdrqjv2aqU9X5vYqhNbS9ZYHaqpyTd75A2JwFWKKbxMSPEejbiw8fsQvoiK6GU7SJC",
  "key13": "6634xTf1FoGUKQeeD6rhwsMyUbW1gxJHcgekoU6GoWEnaV6LwY3Q9BE8kFo3TLTasXWzGJoxShJKrWG1ywBStMxm",
  "key14": "4U5TN1EgjKFsxzdSxpfogHPStNiFpYmnVdtCp5hm21g8miVh3UyVXKdBzvqm9oqQs6Kzps3di3dNfk38YMP6n3Hm",
  "key15": "5xgzX77UtBDqHRWKc4XUkKxujdfspBeEXrv9Mz6HWgqEDcP7DqTvbGUE75EcR5vcynCA7LqZPtnYmhr4kfZLUWeR",
  "key16": "2G9FGATsDvLeBWq1R1NftvxQWVXD94Pjcc2oQqAEWNuKTEHpbS5mvZ7Wb1V1hLp6H8b25F448gGUPo2MXbyhy97y",
  "key17": "3BGbE2tGi3sTgGj7CcV6nnPFk6yeDcCTfehZp8zxKGv3kvcjoNSRdLQHehtsxvttvgwH37SQY4dFHLfiLuoAt47T",
  "key18": "4xXS3fVSDvzq28aY2urBVD9Qow7pvLYp5dKsjBahfjF8mJDHt2Vca9h14C3Eq2WREEQcMiFfBqMSkNAKABf32drv",
  "key19": "mfehAi54Z1WBp4nZysSsSpTGwQtgnfZV26WviW1TXnF5ooxauXGEyWRJEXDaqgGNxjwoLTSvBrMpArV6EJaSudY",
  "key20": "3wjq8w5XGK3LrGaTe5ZU8wd4KZLUVm8YksFRnMamY1GPZXPLexuMyt2qzhwYny74J3YKU57EdYD9jHZb65W3sZZT",
  "key21": "45fuauUmdqhU7Rzp4mWrzF6PVphcYVhRTBqkRLCsuwp8XYwY8XVPrtCUZx1X24QGgLVd9ps67PJAK5CnQZgxnyNQ",
  "key22": "1Fpdu4gKDpp6hWgMHNqvNxM14TwGa2nwTZEvzg1bxNzwZwq7DmswHJQnDN7fWMYf8oSE5M94f8evz68PyHXxphd",
  "key23": "Ys8PHosMZCqvzyW9LvJUy2JAg9kNy1pCGPuYUsdEDdVCodcHNSLpTnTq6pQiQAwcgKMP8TyWGWN4z8vinKt1yj7",
  "key24": "5x15EetZALwPMgq1yg44P1poQf6MBqYEuYQiZ9HrSxEpWvHPbapvyRv774JhUsT1EKSkQzYRB4xogSSLpdW2MRdx",
  "key25": "3CpX8jKDSia54ipKXQQ35NRUJALnyUJUkVFKNJAhMGcWE31FNjT3oA1X1efpa4RVoxMyWeryvLFrNe31mz4w8UDb",
  "key26": "4iS4dUj5RAgbmxevSXemJ9bBCe8RvLNL5VdhjmHbZ73ZRyHEyzhZ718WEDJQRWvHeVn2h62FQtHqV7wmGfXvRzfA",
  "key27": "2Shoqxdwy3PjDYQ7UmWmZRHZt1gcKiCRqdaVQBUb6MwJj2tNtFCJ5TkMU3NiBS1pxstxMkYkEfBVwMYBRctqwaG3",
  "key28": "4cbuCKNTF82rpuQFGCoKvmq4HLDaRy89Gc1DHXMfzmWvw35iAaWT6MVRaRvFmvqZXSjhhZDXU7uAp3tGTgPHpYCo",
  "key29": "2z7dQfJSkjjyRXi8e7q4nNojiqNnr9CQCMjNYhUr62XpUADSRCiJ6pdRcmAiuEJvJ5nUBRrEyebEhidti4k7jheG",
  "key30": "2KGLs11Tu2tdV45beoqgcnGnZaMjGWvLj8ETErF81sqKQfpETsyqfGdgx7rW7c6p3wrAYkgQwau1zc1dnNDXavUb",
  "key31": "5bw6mmEiXrPVpguE4BP8sK8SuWf4KnUbXTL92L8c6t94imbQX6x9SszCdUaS5y7mt1mncskAD7wS4x78sFmtr1Jq",
  "key32": "2a6RnGtB3viB8MTNw6J2SjxMSxZbWVi2KA7PQqVutU2Chm9BVxycx6mvy1rNP2mTjGc2esq9gRGc1HkztrKSXCcT"
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
