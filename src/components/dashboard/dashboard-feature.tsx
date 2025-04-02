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
    "24numshbad8zDomWk2z7DQeYCTs9Kf3svWZDVJoHmZ2yGbhEo4fvZLy1RuXTbEvGK4ibTmUD6buvdQLSXeQ6T93R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YA5zZBmTQgB4e4HNbdccMK6CBMb2u5NQGDtGBYPqhFz7MU2vwzg99f2CbyryvU3dxfV2fXGGxYxonooFT5h4VYB",
  "key1": "3hhjhpYswdPiSUTCWL5b7r4DWmuB5ZDEYPDEBCbGPzh2vLtQgkqh3TpVTh9rC3TRb3btREP4d1RUqmszVdiwcXD1",
  "key2": "2HpKzDB3sne9EbHhpZ3SEDBrxAJ2LGEvYaitkc7eFZEbVnvd8bmYUid8UguZJx5RUNDKjTawQ5LKa8DxeQejGPsS",
  "key3": "5yend6i5JMMjDMWkUfqjtpMDfzD8ZSwTHv91EzdcDYM3PPWMsDLRx748j5zAwF4znPi2opPHjPFe3W2cqfk6LPu6",
  "key4": "2mMGEd2awzV38L2Z55f8Ah5fdNZzFxw35wcq4mFhsapSbRcZiU2aKHhVtjyxzUAPoGwd3qFyxmBA2DwQ5Fs1SPJZ",
  "key5": "eueKD8gk1bmoDevi5oEFrK1SXzbiqkUK52pUkkTGr13uN8Nto7XRy6DWUSKLYmg1Y6SdtsiuzDaBGUQaVBWf7gw",
  "key6": "4a62hViBVrML3kot3Jjv4Bw1FHqYducLgX78YT5m88zLt16BZpK13USEEMKe2KgyA9WX4HvgFAZ9QgtXwYju7t6F",
  "key7": "RfxTdcDbp4H1nSfKiHq9Ei8cyjsZJZtsQVCyYm4Rbi5UA9zsQd5oKqSur6WLxXTQew3AGaTvVnEsUFsEFXHVkgr",
  "key8": "2WLFHnBBtDiw6ePbGkxKLRNWjvTtWtRmzHzuF1GKt6CUABX4sBaZSo5cy5KouWnXZWCogmeEuHE5yCau46TsAm5A",
  "key9": "2Kbtacf9kbHBUVhN1RYABGKNnVKYqUNYNiynmpAnx9E5PHQWinXiUnRN3Uf9X6ozfYRkjMzSNUX3foBbLhYNQzYK",
  "key10": "4AxjFmM49VBNhHsyFBW2rh3zYYtezvwWmUjtQiVWrt8WgvLw3oTJ3B7spUQEB2cyt7sBjqXyXYU13GS9pBoWzxnf",
  "key11": "222ojeQ4UJ3kqMNy9u3jaH4RPbsR5S6oU711ptZPJbmZ4B7VjwJeqQuxPe5vZe7LJzdSwnBtfBTLz7GiRCjXqMj9",
  "key12": "3pVmGbYDz4fbDdt1pvYk9MQ7nuYDUWTw2HA587EsEgMAoUDqWHo3Y7NLysKPod9bQp5HsXPctCUks3KJ7zmHxNv7",
  "key13": "5aPoXCw4nofhxiUWTDgMcoM1QUsYD9q6N7GqDMqwzNZ3xTuVP3cEPD5xgaSd9aB886uiMJWbyh8qSYYCwobGFcRh",
  "key14": "4wYAEZTSdFBSeGjr3Ae3U7aV43MExuVF61pFQLrcadwHfd1cUsbDeKTJ1nQsNzEyrWdYh74hjWMD3BvxnBSk2yGt",
  "key15": "3y8kz54Ho2LSU5QagmRBVo9fzh3GzYNGwya974eVVGKgxFVaJjLLbFz65Mr1GqTwibTsoYCvs2NGsbgBjYHeJoMb",
  "key16": "3PXDiGGfpHmpUqo45yWmst6C4ufoHz6HQ5AHkdartZzALtjWBDd7ZVWt7soEu94gQs7szPbFufHXDsjGyveP59i",
  "key17": "2S8Ch8iV1VPha7cxNLdQDiN4XrNqZJNSXDY8ttrFVTpWzDwiCw6PMmmrfGEtV9ie9JfARkvBroDqb6JqGwPzLsk1",
  "key18": "3NUvUmWELTBaEVy6DKBYMEJwkpYYnzJ8hgzRYrSAzuXZ3a4788GST1ENP68gr1E8dKmvYGNTtmknbVpZYmKvQYcd",
  "key19": "4ZzjYgoau5D7FvNdQVzdo2SmrKZPMxC8i49iYDjzmEDPy9xk2QnpLD89fbeZPMkktYUNGemPFEYYNv2HxGbBybur",
  "key20": "52DaRqF9Fr6Ryd88Bid2yUPfYrBPmFGaqrm6SmSJgrBX6veRmnqjAE54Rop7tDjMM9vui4kz6uarbESqSdzaMQ8U",
  "key21": "2mBAhqJYrDYwCDMzGfE4NVX5UjL1tdd3tDP6Bq8q63LATwcZdYS7BL3hMnw4ZAnFCppG5BCcmyWdjiPXjY52txtz",
  "key22": "4YFwFAk3GuZXz796Q9YDPQBUJGKGNmULmAfDyhHaoLDrcV597mWYrTMXCJ4ENpGJCFN5wTFEdcNLXxTWhTsf2jPt",
  "key23": "2CKcTysYAG5gYcikaC7Whu8cvjopZwU8PzURpTQ1UFCA6KyBbQW6MX4WmQE6mm21VGUgwwaFYFj6SFpJRzWsWw9B",
  "key24": "5B1oopxxYhLEji11oafpD3crbvrH1fnCMSFbEtS2stmXZcX1ni68P4oYLnnA1oKifbuuzZhWT4g4VZLnJjR6zbBE",
  "key25": "4jBJmubvTTgFQ9EZhsp6ZS9NsUS7LiBCS7QP49TbciChPVmt8hN9ggqrvtj5hGv8KqGBpeVqL6hCwKZLvJCXfjUb",
  "key26": "3c1CWK2Qcv9imJHVZ1RJrW7CYWBr4P3pS2TdsP2vwFpBH5FT1z15fhTYqx3ptknUhDQWGfGtf1JMaMe8An8MULUQ"
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
