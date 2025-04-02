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
    "38DYnBgoVs4ZGQdTPzCiqKPEKaiWwkECJhwFcVnndWFRRLQ7wJBi6CAmZ4fzWbQSdkVi5ug427Pg6bXEHXuFyoPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVL2BvDrSogNb1TXyCCcT9gyeSmLMdAp2Ru1hUsFFX9RVmiFq8eH3WWMQL6tDPuAU4h5im8f6rEvSXVu3sbTiRv",
  "key1": "3ygrZFBDuH9HWRwmmGcwPckQykKa5B7aTZb2tSEQCoUjT34FvmEftZ26gDVCADAgi3fdPEP7839oHwiXTCX838EB",
  "key2": "M6Zo4XsMujJ8y1sHZESGiFaasdcWSi2x4TdR6QUGNxrqvhqVCz3ZPJoLaFf8HRtEL86L5g6GT4c9Ck9vQJVQuNq",
  "key3": "3zNBB4rL5mmbJkY6Mv4BzXf8TTnDFhTepVE5VfXTRzwXSNV3g1pLk9tJvcMveT1yjqPtVFG8qJ8j8FkDRDaPZm35",
  "key4": "tSHBRHeAh7bvwW2FA5PHugHfs2BkP4mkVCdQFhCfFCaco6hZLSC1drbRwjm3w4shWYbA7BrDXWp5rD7rHyEN946",
  "key5": "5UBP7EYrfzPCLqa4uXJanAxVgT2tAgQnsJ8wPmrbCYuE6SCauGYfFcHiFtAMR5UWonZu2bZcFK4qPg5Txj2E8pSy",
  "key6": "4kYtbLVVRxwqeB11hrfX5aq6mWrYStTihgLhfweTuPi6bT79FiZB3njztuTiQ5nnGwofZyMQeLJbrxdfLV78ziuA",
  "key7": "4FmtxLtk3iUvkcj7YxL8Tks2g1LTZG728fSVfmz1zvPMyYK2jdeKX4Ernf7DjroBn5uuwSVetAfSLXGGuGkHEpMu",
  "key8": "wKeDt3UaFkHhHLn7sHvQ9F31BFMCL2PdRq9ixAxcKkfs89QSXz9BHJKv8FXQ2rjJ7NK3TMpFGG5KfM3nyqVJTny",
  "key9": "28DKUeuuKjsUVTL3Nw6o4BXr7TY4DqkevcgtTzTfBK8diCBgFfFfmG31D21JyZzh7BJMwTP4p2zEZWRXKLFJR5hj",
  "key10": "5ebFUBL2UDEz5q2QBMMie1xz539ByS8rYrqazjyDkzEUgLk7DsDt34A31Ft9oQibTageHzcqxwkc9X7LTzN3N5Q8",
  "key11": "d7cALTZSaHy8biPeehTrGjGuUw4YGc1Erx3wgQMhKRw94PCKBvTSYcr6tEXa4dvH2T4CnLNHt7Vg9Fsw3sLNvDj",
  "key12": "59BCPy2JEvx7R9qPjVNL4MTbaivLBgwb95Vpy8xE34t2K2PxgAMbAUr5wD5LM2QWPCWMGRUvKHAGHgHbuG3cgCEo",
  "key13": "5yxjQWkABuHzaJY2Vt83dMrYRBAXeXasJkYQNk5SN31ofumu76e5RUA7bS2hxHGHCe8yCiNiMBazzueC9qZ3C4PZ",
  "key14": "4LogoXYyeHAPfkFjPhnB55m23iVzfpJzPF6WXGfwWiXaV5tg1b7koDCFE5e5f4ZfMQ1bY6NLX1AL7uHvd8vNni5Y",
  "key15": "2a8oATiBh2ckM67HWbAEK2YExCA8xgHN71NrNVhFUqaxM973ugCfw4CFRMc1j8JsvAttcRkocW1A2QDbKy8G4jyu",
  "key16": "2UpZDJRW41DDr6hRdPSCRUcTQgeiTKmUYdjpJo2sYqWctpGSQT39DhneavG13ZfKMUt8he1bvbttbfjXt2zBjCMD",
  "key17": "3L1iCLSbzFB6CVA2iQeguiTrcg4VYp5xffNJAqAwbyRm2XtTzeyvA4MCrQLs9NmLdg3JmfdZLg3q5x4VWGRPNoAB",
  "key18": "RZPx8zy2QcttsiLEhGRuZPg9BciVX4JDRAB4MQZR7dfYomQ7poGGJYpWFhMzuLiLnRVD3cZvGvDw8TsZZyC6RGe",
  "key19": "5pSVhKhwsMBrSLei2RZb2SJo2g3ubUynCDuwNZchpjD6co5oaE62pxsC2jQSRYHTkS4eErdySNy4FqkT32Zghyb8",
  "key20": "59V6TZpsxk9D7Lt7EakPq6d5m9zWtecL1vbcCWLvvosZ4jGdJhavTXFmeyy7hGXX8SYceoto8XJXfvofX6Et9GeE",
  "key21": "4kM5Sk1H6EQMkjzEkCrrG7kEf1KGq62QFEuFxzMZaWL5UtHthVjnSB5U7U2uhcTrk6QoXAqakdCae5opkn1FLE6A",
  "key22": "4UYtMnxTc4eFM7XC4WJeUD8P4NgRgk5v8ZJpHb24eQaHbgLaviqarUUgnbYKwmdrW2TZnXe2HHG4fL3zVsbURed8",
  "key23": "Xb4ESMTMsxmtCiiJxvBgEkpim7YS23RfgntrbJnJHgLxATMbncBUiM6BVmd2D8BVhMiEnru1UfGpbUyx1rEvrTa",
  "key24": "5p9uGJp5hdqFeNe8JSwPkifWJtBVhD4wJNGigfhaQ6QmZj6aHHfKNQucjfbWHYb4zzJ2obZmYbHu1SMtHe8DiyAq",
  "key25": "22YoECNHqoz2uQNHbp8uQ99hu3cyrACCHDC3MzyHZicrwdV7cmuUWkvAvf4YyUBe4EDyZos6iVr1s2GutNbyy7bX",
  "key26": "2Vb2udkXsEkfYRFhVPMLNyy5CCsJmx8smp3QUrZQtRjvLKw9MniQwxicwtHjTm5cLqFSDeqdBp32sbZXcWUozfaR"
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
