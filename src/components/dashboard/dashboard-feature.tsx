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
    "BSiYAVY11vSkqAQb7ZNs5cjTkqgqy4KzL9DgkDet7Mrv2ELZZpg45qrftXtg7Ge5KcLgELqoP3kQBxTteF4jvPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59gnoG6iNRyq5sFp5pR5hBtnREsRDa5t6BHCxSo7fqV2kXaWac9RtMsV2bwe1GaBYYL6krvebgj2zMydvtuySXk6",
  "key1": "4Cxo9vT3giuuWkTe1iNghe6Zax6BWCQZM8S5f61aZiaJig7upfrPTRWEQ9vPxWns9RSM4BfiNUTMZetb63JmKUk7",
  "key2": "4RnzRkfbC7PAyEfo9cLpQCGFYwWrx7ain94qrb7rUdhdajhcFG1Gi8HtfhFZgAzMpnzKmGBoxDuQniQYyj1x3SbP",
  "key3": "24U6AtGop2nYQgsrenpirJtdMgFznLajozevUwvkKuegGFHh4yqNHibqNrzgwwyacg8PcvRb7FkvH3BgF7DeTAAF",
  "key4": "pTckBBmqR8FBrdcSgDCDDgPotN2sDvVfiPoDEmzQUpY6bxfYt8c8YE4nj2VYeX1LXUiMELgwKSEdLYsDPQJvk3L",
  "key5": "ZqVkPzna4j19w6CxhNVoMjmpfdEm6ocwvLbCZz73YbLT9gkQSKTaH2FsfK1budGoXcpUyvxV1wg7kFKTXdyu9Dj",
  "key6": "3YNBgqzv5N7AdcvKQ35AYSVMjGRiqyMZp3NuRK63aq9uysUpq2TpNmhV7o5GaaEPMQJ2pGtgcb89ioi6rEzQ1kPz",
  "key7": "n8i6evxXQyh2buYFWbrQSEBUTLZJeyoJbXAbhEjEFbLrhbxNmAuQ4W5Ax4LCPLnuAbaPGYQV7sem6dzhenvUDVX",
  "key8": "rcA2jgC3Ci8tMmnqQZLH9H7wmXPHqdJ9wwZXaCcGR9ZnKbHuu9BEBvguaxBmpFkazE51zxMsvgA4cG4DvxUEjej",
  "key9": "2WA8keV3B6Y2x45SFo6BavcDpqM1jh826WdFzDBJjfxEsD1KDbndRqotxC82CMmbFCgS6oDLX79c8sykSD6dfykL",
  "key10": "vNtLUm71SNV7JcGRgd9saEHZ2n8puaWPeqzr9J84ZqrGz1kFyg7UJ68bQaxfxLWscBbPdSW9tuKZZhdCmbwBxJS",
  "key11": "4gbB9NK8bNDgPzgMc7uRNy9KozhRhd4cSKagAUcgSoEBpZWGVb4UqMYL7nqV5bX6J3epr2Q5e2Bd8KNMzM9b8ZAg",
  "key12": "5TwqAyXLvgueDGWHeygVS7n8Aaeofy7TjJCc4qngeEg3p1Pkp12Jh7QCBpezx1WxoHoT3ELiomL51MXFT9EsD4dG",
  "key13": "3pTZtNDfmPFo6MvvEMx4hWnDhSG8sodyYnVKkSGCFNSot26yKHCAi7qbKgs1CNfRZRcA3C4m7z3Q4Vrrs9fJndUy",
  "key14": "4H28VNteGoFqwEED5JJQRKHZVSafS2nViVtmn1JgpcgfwmMwJTTezfuY226SYncb2629dC7cnch3efpfpvKhwUye",
  "key15": "2dKCnDQ9Zb9wgmMmtVFCc9kgW2kGbZ6X3By1xAVspUk7wQcdekZvd68a4X7aDQwLSSgFDMM2XZEYTwdtRFcv36b8",
  "key16": "FfyTHmqgGfaipK7sbBrhEm7kHS15ZBqWjh2mRCy66SW7MEVaZiHbnQRPabEYKZFhLRNa56VELQWRxDkbV24cG8g",
  "key17": "45suc7oZGqPenjBVz7gMotNNXejgFKqvnhaXtLTcFac5SnyAUTRsjfjB4gskF6yjinSeEZLGy2Hj2X4yDCpwvLeR",
  "key18": "3YB9dfAe1srY1vXZTnFVfHZavVJniZvRvzGFNh7Eb4aUk7pGqTPyadtLedPHkRn1PEGfZ2FxbP1gLKUycHK7QBbK",
  "key19": "5WDhcJCQu9aJDRz7EiYutsEQ3CoDkdsfidH839h63sjsaovUwPrgj1Z2sAFcsegngyVhSPMuCxYAkNcAGemwH4AP",
  "key20": "4YFnnVau5pRXRnQMgByXSb4VAFxnh8bskW3uDeWBe63UQKKpAauK1QwsUVMZ9FW2chsa4L14x3ZTpJ9g1dEZS1Qf",
  "key21": "3tQxvMuzeKD6V5AoapG9VcsthJnMe4Pf8B74BQCWWjWhveN7C1wmHuXL5wi1DEXzq2jaZd5mq129wPkQGYMbqZfN",
  "key22": "5u7DBkMxbkXZepV8rbyYNpqGvwGxNWw2uRgze4tJBLpf7765ihYMJPqi3KYTHnDNWHQszMDYNJcikkNp9Gkr4esN",
  "key23": "2WukJji1AnRqbxpngCMLkUAnxDed9iTz7sAmicuvMnMMvw6J3q2GrLecSTEJCr9zWmhX1cwQCRmEmpiJXCqr4pzC",
  "key24": "5U5WXJhAj1dPAbbuCB6GtFbYZGUa8yM1FCHzf362G24HAkfoRDkdAfe1sNUhxmkzcgjSGPJgqn2YByg3zjRTkqb2",
  "key25": "4ThpM3PFnhKPUUs7acppEwDMZwbTHjSMeoesZYaBFQVRrc37q925xHdpgtij9Tzq1wpiXEZDPH4t3CfUEbZmgESB",
  "key26": "1jRABYHPXdnZEBThjetgvvMcz9f6iaB9ctB5CpTkLbsyMoKhE9eh1oJaWdsXsfFoaLnYCa36pikxwFfDCFSK6qY",
  "key27": "4pxjyuGAAZRn1nnYPKpCAFYuqgRjsPwey2SH1xmiHATpNMo6c3KiSBL9QFyXRJ3MRhZ7pXUEKVkQpmBpQfXwJqsL",
  "key28": "YGSYfRQjxBYGkEByAqzvDCxQbXryN43Ev8BVcZicAHLwW73nZ9x8hPAKUE5eCBeN7eyBmKRJssyDd7grt8kZpGu",
  "key29": "2T8Dp3u7dW3xJKeojkcwmV4KxFhuCFAXHpRyNUdR3iE6CVnWeUAbZajrMsBpjXfJJviEstN9HikhXk4mnFGqH7eR",
  "key30": "LGQ2enZcCYhPixYdqB7TYotTKKJKrLmjMWbmoQnX5aaPmicJLWM1rRLhPak5zeGDR2zzvmvq4fuEA8gXa7fZhDh",
  "key31": "3EDVY3fJ1CaUe1mc4qGwXcb5e94mXRR599tr3A67YUwkhRANhjmFQJQjytjGsLYwh18vndzfXva3pAZLDhdCwWoa",
  "key32": "KGqZdtohA7L7spTWEG2syowGFPxjN7jS22DhcRWsCQPeSBE8nyTqn74xs4JFgg3EE3oK7cCyPNm3TZgk2MUYZ62"
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
