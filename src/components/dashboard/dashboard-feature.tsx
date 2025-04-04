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
    "HNBEqsuR5sfv2DMPoLxRmKR2AcazGpRS9rT5LNrpoCrvMhDYQeddSfhWYda9xRniQx7B2sN2nGPE7Gw2DDFHCPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "grk6F5LwBKXMzTmjZCq1yFYC3ZcGZXqPyHrTtK3oXQsBA3gQjUaXrbLNLXNsL6LMv5UMwJxXmoExK1Y1yLJvyF2",
  "key1": "25bErdquH3NDVQ1kFnn5GqjvDzkyS6c2cybfrsbQMArwz36uixSEvsgZHP56oJY65oUDiaAMcXwa3QigDpFz9pig",
  "key2": "5Ah1SZj6iynFdgEFvd7goBADMb9iEzNJjCGSsx3y12tpgsn245mBTNXqngi4mmBpUecQx1XAk1JwGHfaUDtGvhuP",
  "key3": "5aCtjnJMswAuWmaLLCJ4cSk327kNcyMTCZR1rudjhC126eFAxP1qP8uyMiqDq8CTeW5jqBLALWCJWWqQZYrkQA4T",
  "key4": "4xGSySbQcPJSjm5UxpPw7MUtCVu31kLCqBADa5i6P8f9NMYvhR9nhxTZCaLErAdwYihKkrQUZLQ17uSN3LnwH55o",
  "key5": "3ANiCNkaibyQNEdeQZWe2DbYLyZxRDJVJUXV2VZ6fnYKVtSBwHjwdAGogTwwAj3Eo2APct787n9HvWqamKifSBkH",
  "key6": "5eibrCwJrfpMkqVKHjV4KSS7jGLPVeS6A9wsFTXsCC34gX1uCYFrNGqwvKxuWG6AmNysd93MLfpjdMxDhdyDiaPM",
  "key7": "4gNuxYsKSXEN52QLPFuhb5wc6arshFWD7LZ94sjs2dh7QekyBuHjDRGGUb4oz9ccETXhArXFS1quc3rJdmpR26eS",
  "key8": "5Wd4Q6auJGNEz7gxdkoBdGS5HYx5Fi6MwUMZRuD8GfL4u5E2XTd87Eh5aUGMTEgPLbCEMouZxCyQ6QGSQGUJBQBd",
  "key9": "58LYcDdDzg2uob2gKg3Lu7wsRRckGYQVnyqsx8qNjYQDpd1cNThbQ39P4KNLRnR2gQwGMnmFHjgQPnCTsuZ3JDHZ",
  "key10": "46Cn6sw9Ue9t2oWRvrytvc4GRCgbW7nArwjNVmzEvLAfthmP9jCbTrt9nANayX1iB6d81xbrNhhRFZh9nC6Cj4Js",
  "key11": "2hqHaod8SUyXTmqwbsPXDx7md8KiUF5B7MPUG7VTKfTMwaFr7ecj99v48bEAymiSe71CcZ51gDT8dZZxEfUF3VK6",
  "key12": "472j63BV9ciYS9n7fKHHYbSbcHHzLDLRxoY4fPiNwuMpQy4e2N8fWNytbMFqvXAsNbQiKiYXuGXenx8qtn5pe5Gd",
  "key13": "4xdHQLUp9uTm1qZo5CX14NJWJmMuaPCzomvK548pLANMyhUkWUVGqrnPasb8UfWw8zBdGYMExERNbUoTb1wQ4z5B",
  "key14": "2eCs29UAiU3RYW7baFfvvPHU9ABEaivKzyyRiazzd5kDVeV4veDvEe4oPipy5kHqx63st3wtqTWDyGdYZ7x24J1J",
  "key15": "2HhntsGG2WAJpeCwHBmW8VV1GzWDbzTZiMpSk56SUphq2ezH6Pys9dNa7YGoRpUXVzu86s3qVybkAVBbHFNCX4Fo",
  "key16": "5VQLB7vcRBeTmi7fmYEZHRvkzeqivKiGBh7TU45ocNsf2GtoN4Hjvpexgs1VcUGTc7KUJbo3aQGx8i56j9phUi76",
  "key17": "48K13kcACkQyGRv5zgQSKxMZkc8LFxxLdL36ZqfDu6S22BDwfy5BcRxyvxkfKffWVpuCNsNaCUVVSQaEdKkQFSfY",
  "key18": "3sub2BfupqXbQrw2rYwnNR8YXLz883zyVkph5jbxxQJtWkQtUni9Yh7hegTEHWfUjCsTZBKKNKNijLyhvd2pDbUd",
  "key19": "2yba4WKSgpH1LdAvGp44VwyK7SpYdxjHSYDRhZZ3jNiQA7LXeMS5SxL187DJWLrAiWnaVmxMRJCbYWYWVzCMeYWQ",
  "key20": "4sMrHkHFsh2Q5FptGon8FFeBhLxiHbPiD96BYqsWJfMvshJdhL9xb2Q4ASHEFYZkJfyGchgeV2f4mPpWWVygA5FC",
  "key21": "4KyJdF4iVqc6R6wfp6ghPUEQvq723jpdveT9rQjhFtJBwmXoEKuWPYjio7xkKwM38K9Xx6cYriZAe2Lj8FEHBv7z",
  "key22": "2iMuner6Ztz5uhq2qYozUmyp3H73VCKE3sZ6RVK22PCabv52tW59oJzM1yMqrGxBQX99hM4JpWCELJ84WKcgiobP",
  "key23": "3d8EU3wpjYopPCzC9qJ1Ux2zw5vUjqkqxyx6dTH4khu6tWMsUJGZT85xjbpAhANYtc1w6udy8Vf8CrjitRHhLBtS",
  "key24": "4NmBinXfmcssbFAo1isvdtH6e2ebp44KzDJSiPFxaCviRBU64BVErpLwFRcXmrm3wo5eQddHeARe5MgGStUuSWqf",
  "key25": "3Df9kZ6CXkBjSsxM5KCyWUPTKjjdDeD4Fjhv4eNuPFvqWAjq48pJ4WvtYazR9cwhkhyGjg7MNuL9MLe3yvLmfC8g",
  "key26": "2aMBojoWeJA5FHPGzpnQnYLS4zA9ebvB5Jdeb5wTQQZdedhAyzT34SvUibh52dN2sreG33HHp6AXcXqf8m24rnmi",
  "key27": "SaCee5x6iE1dpiiRaXm6iBDsiB659FG9mqvUFvdos2bNvec6LJPWGn4eGurUAZooNrL69zYe6RqvJ83JERRKK3A"
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
