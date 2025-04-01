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
    "63VdZ8q6oPMUJJ25nJUqktyatpYLtiTSFmnoDAhZsgigwCwDRMx1bNHNniormGp7DYLUnHcMuHtPSCm2JkzQ7ms3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YxM3W3cT37z13g7BsWfUzTRjBaJnwbbj5kTbWqovSUX9GuufVQbysWL8aBSccgDNhZAtUgyqJeJyUT7rshDzXD2",
  "key1": "2hxYvdtkonEnk5PWSXYRDYLXh4YEsQXkkVVd1hSK4WmdqkzX7WE9qn3XwfZRrkYkJQ3LhKgBbPpNpmEaWjvJAPjc",
  "key2": "45B1sUdGfbnSAnwyHCUtYsh9TMSJcdYgSzwDA3qU8d6FwCBZwWo28QvXAxVVYe2PSE4EQxaGHK3T1DnFTKjdQJY2",
  "key3": "483r6EAgo5PrL31X2oFVP684TovMNrGQRJHPCF4KTWRiwhqSrcteGDFBmHjhLsADDQXUyCMGsYTtwRspeoJnkJES",
  "key4": "xW2YK6P4BEU3swdgzADL5YVB4brj7KnrcnygH4BKS64MCj3uh7y6T6TEveMaeoFCFccPXq2V3LCiWaR783twYWp",
  "key5": "w6KZ7BXKP334UJhqDxufY5Xvv8U2V3pCasxuEuU4Ko6pnE53uivx8eh1z5h16LNoGSqUbbHp6hyTdmdJEeXRHUR",
  "key6": "43ReS7AcKbRwtrBiZXUbxvvNS4g1tb76yXuyhbhnu3xUdyiqDk6fYrnDj1ePtB2x2xarUvMUxRaLgyfwnqd4XC2j",
  "key7": "2gPAQffamcmPHFxLZuzW3FU6ugHKZ82A2G2yTAmCotnmL6jigvw5C7Gm4LErDUnQAE6CMorjurgPwVZr8Cz5JbKf",
  "key8": "3Q3UsVMHED5VMgtk3QEnowgaBcg3faA17X14kFYHbEsGpgUCbXxvKGJ9Duy8gigaLpeGvPkNTvDsHnwSZMsYaPDt",
  "key9": "GCeNpttc3rabpULXEtFGbLryGabaD3Z4UHZCti5DEhnu9CGLyuoqqd1b4nLUdwWWUU549eiJiJrv1kLQahYj75q",
  "key10": "pT9YgBZDphUWjkL3guDDshkT9Soo5Det7EZpwA3XtqQZ6KpmT9EJYXP2RfFfdYaR5YB9HfByGXXhL7VtyqdE29w",
  "key11": "53EmWWjUtkuVs2GcFQGeBjyHmRCNzqNCsmtuSRtsMUdMTdFjcaea74YkCodm1rhoZSn4Yma87H7pdpSXLNFtdZRn",
  "key12": "HCEamx9jYJRFCv2yC5GBWrYmWamhUjjTJjLMpTy26hwQskgDvaL6Cu8FjtBSBevD5P9JpWiKsAiRD1ArTQSxmR6",
  "key13": "4tK7CXGYEMacD8LcLkX2MVC1Sd672CKahefhN9LdgFjHasDQDeQmn5JEDAYNLgN3ziddC1oQ7XuY7ewPG5FYZped",
  "key14": "3TKLdnpPFckgNtoVLVvF5iHy9NhdVfopVt8S7kyp3MULB6u3JfoMPE88yECeiEihdbXAwyDtmrHVsMMQ2kUaV245",
  "key15": "3cobT6oTDzjDfy1CdLLi5Tb5wXcsQ95J8hA82p7AikNAWHcKKErUZLaHzU6xhZEuZv1xnCninwKBRTe7wTiuuYtj",
  "key16": "3SHtnxp2VNR8wKJk1shvYyKMVhwuPjEYcponVBj4hn19K2vN6ebyJ5cgcjQ9UYLhtg1YLnZsEJzLfUVhK6hNFbW3",
  "key17": "jFfQRp3bBhnzgc8qJDyo3L5cg7XcQTxtdMgmGVEb6kFmi382jeMKMbSwfRJFaUv8K7S3QVnLV6c1VHQAqPq754b",
  "key18": "4CCBk1g8TSEgGYm5SwGH1L9Df7TPWoKCrd1jfZeAhK3wtWqQUgWM7PXYMimxiPpDtQqusgo3KgNjgtcozfj3P2J8",
  "key19": "4aJ6ApXvv4BMhCsxcz3RT2USnieyy8xGprRRma5zAKmV1A3mi5dQt3xfSa4f5fryuqeZqy9fafEawv78dsVNgrrE",
  "key20": "T6Xv691mKv2qLHsTuedPvoREyxjqqvXqnopuJBnq39AChioQmUKSXe2W7QJbRqZJGqi3GNtU7jzS1Dog8KEvBCh",
  "key21": "4oUTCQt8NfdLywbygwMcpCX1einYsXRMKUCReeL5eze97w5Cmpm2suxzgTAALctSwtpab66vnUkhdMSUH1Ttv58D",
  "key22": "3LMpN9njDoMCw99qHv99cNSiKXNWXJ8EoLQgdETg1Py37RD9xqBk2jMGoxPfvM2TSzsaUENs1q8KEV5Jmtw2SVS3",
  "key23": "4bwemZK9TH2WpMP2ePwVupEzCG4EAUqRj3A6uTR2KJt6JXjcF9ydXM4x7yd4e8tLXUqta2b6ejARq36uXH9uu1wm",
  "key24": "52SaLvmKaxP6vV33jecnaB2LTzdVYyxiC216tcVVStf2G1H5q3WJNJxiTULy3ratKeiTsS97JZTthL5X5XXzPNqQ",
  "key25": "2fss7gFrG4W9zBCRCzD9XZfMDpmg1VUPd2K1F289qN1t5fjzCcaw4ir5R5eA9Eo6KbpFcXDuHgyGDhQjHG9fvPah",
  "key26": "4XUHK5kaSGBKEJM6DybQurQ9aZt1gtRcrErchUAVTLBXbCRYyuTGqw19uGgmbVBxb2Nbbj4sxQsmgxSa8N9pW3bQ",
  "key27": "29YKgZZXtCo1wjxabCBJXEHeuA2jPWbKTnyHYV1VFa4CnjzFKhXuQ1VEMtERHwGUmnuV5fiY7X3hBXK3h8tGfHH9",
  "key28": "SKEEZnH82BPBQiDjZa79vD3kAFdkivywzEkawjCbkoYbUg2eSiy5ePqRBt45CmHtWYEZdhCCHxzavPNuxcLxgF3",
  "key29": "2RvXrNJyBQUwGuVVen5oBXMNWeueZgLZ91ajEzWu8w6Bq8FmsA26pf19CNbpbeTvQeQeX6WtBRvqFo1DgmojuKNg"
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
