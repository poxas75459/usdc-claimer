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
    "2u98w3kgfjFsTczkRVA61zehqWa1rJ7rFrLyhBfdz8VWfem7mLvHSDJS87gesC8HWqsxQgg5nqdniJWpZkj7f8ZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ciivengNmTgSdDNgTrwcW2cwvt6AKMjMSvnLMewbLDqJnoLvZaRgP65dYPLdtH1w8KmLBAasydbh2DoTTp4kV6b",
  "key1": "3JC3jWpjzcDGvLiVxZrFYhEiU1gpKj2Zantv6cSw5Hj2UbVe71fvQFFmeGadvVeGMrNSuDv9F2NzuBiFx1DCX2os",
  "key2": "3BZC8zfVKeuwefdxcs45EZoh9mJcbgmCFWZdtYYs895BZfb3Rb8Yxd19ixdrCJDTw1jXZgjYoGad912dZWTMzKEx",
  "key3": "54k4HLJ7qTuY2n4yWxdhPSSnkFRYS4PDWaWxmMauUxTtVxx2RHT333KJAEPXhFwaoztorDhrSvmbzXBaMvsr8Jpn",
  "key4": "4zgF93a6eMV1AN6i3wHbcuhzaoE2BSWFTH1RZyRAVmJuW7qe8vvSN8gnJvARNEKSC9Juukw5R8YfQwDC5BMeyJ7Q",
  "key5": "4fm3KPpWagqNzNZAgVC2RwcAuWmsxacWaA5bemeyK541mmDZWd76prL9wWk7H61qQ1EgWdxcVN6a4SMGCYraJm3V",
  "key6": "2yWPRBpnob2zXSujUbvC3vCPqNWd8deevEorfZ97jDdw7hgSWcNiB5WWHzUAGvvRzUkrefAcBxKPSAG22g9Didqz",
  "key7": "2CRYNEyotwzZ96A27AcLXemg9fRfqppsfXwHR4nLag3LBKH8QnxFGs8vYppkzNg3WMRpSvxZ9hdho73ZEg3kx7AG",
  "key8": "31XWn9QRG9Bivh32CqeCipunpxxQB7wXXKyt15HJQyTQLiSPPr9vBKostdqrx4KrXLAxVxibBSw94RU3aee6Bkg2",
  "key9": "2dp9GihNf5rRZmikYgJnM3z8kvWXeSbLvo5KHeYt3w4HJiHMBxqLguxY859dRZwBhDom8vLLwyqGPPz85Wvncw1W",
  "key10": "5SqPENoTNUyfyZ8k3yTeR2xxxM5NxvzKSaqHmccN2GYtD7EgdSvvKnTJf2eGMJPc7ajuEvC7THMpejUjogSUnx6r",
  "key11": "hU2mF6zHRfbgnTQbR9e9DdPyfWq6qsTLXjws8LFFxe71qJqL79qzeTVZACkjrJNs2wyN2KkVh3t39wUZNBqhqL2",
  "key12": "5F9YKk99NFtLn9s34jNRSPTAVaJ87KTcwMcqdgs9TVsye98UULBw4F8Qw24meEYHt5UXQTZTNPpTvrDXeAAJiTQ",
  "key13": "3b8zErjAkuLpBptgsmRv8U7SLYBaGomS3yQL1tyAFQZVzME6S7JZrEbbcrDTS2YWoSSRZJXYKR8w4UPnm63NZkv4",
  "key14": "CW252rXBNiYdqy44D5k1bGJssv9PCeMyQzSUjL6qxkkiV63Gt791QNJJsTGUAJdbawWzRr7LeHyi84rFmcRBhVW",
  "key15": "2P6wPk4VNXg8trtiiC3WgcDsuH4rcC3CXLJYxK2x5nqoY57RDmF7CPeyahrsjDaSGeMDuhcnru4jN9qjszb2EF84",
  "key16": "4Y6EThyBejyBMZYtZ6e7i9o9ggHr5ddE9nnvetnpg1gLEMTqLHKbAHHtiHtm9u3rqzk7siqMVfdyJXAroHSFNXuc",
  "key17": "42WTMMQuHNATPjur2WE3hynjHED4pFh1FvwP7wCjj1dhgas6KVCiYgT8zVCEPuLPQ3tsc9MaF7xXKrkNoyE1Tb6P",
  "key18": "5aXBX3DdBL3YbybbLha9LKcbWu34PuNNeBp1Gxg9JMFFn7rEv4EYEFsmaRED8Ezm4FSVv2c4FD8w9LaxfwNoAuZf",
  "key19": "2yzwTzQr5DrZtGfdvUgUrCjLvbW4NLsQkDVRwLsNZWKRY7LHdDeuVugDYAnsEDc5PsjcBNxSFTMdSTWT1GQXFrrE",
  "key20": "3xsTEvpDkaJtyoVCKXaqBq41ZPiuPYNfkKNrvGWhVE6SGAnPszH6TiEfrcrhxJN56P3iMt5A6SNSzXyCjPQJgo8e",
  "key21": "4xXMLusGwF33i2KKDGaMtpdrEKCtamp9bBE9DwR2Ww2xeGaiqQbJrEhdYD85ggoRWH7WuCfGfQXG1CKrknrfJcYp",
  "key22": "5L8k29oNimkjz1PraYrpAPmcn1vucUzZR7wi9zZbcEMx41jLcCQGgCFWrzMr4DojHuTZAEDXajKCmxp1kPLKKTe5",
  "key23": "5csyV4t7UKqy7cwLCGG7iJsSFiR6hySVajd2KSc7S74PCUuj9JEbAJPa6KwhJh1irCAhSsWG73zj5cB8LggkkDcg",
  "key24": "4YhrNHXtfZJbt6NCreTNjqA3S34jyZKDDKn7NPVGQR7Un9j4YRN3ZJuz6w3FZTeDhGTfyVvGeiYETw8vCXQrbnsb",
  "key25": "3aCd9VQBgrSQfpgXAqqUUQvfgLKeDxh344poNTuvLsZRtNQ7K3QuxRhsaRRGK51j4KcNcqHu2whxL21Ch4VfnKTc",
  "key26": "3kHt53Qt3b4jUJRTDfWy6ebw8vvYgsUakJ1dBGXD4iUuCpGmXsG8EWhEdpneefwc7WQCCwLtkubEG3zCE7h4XSGs",
  "key27": "5AzE8np1KJrdHMzDgWve54kdn3SE4Zu1uDxBx413LzteVeCF97uFL9vGRa6FmGcmjLQcq4XiE8UkLj4Dd5H9p8ge",
  "key28": "5RZx4JZ8CvRaSDhkPbBdSMYGoLDWVpADd3XqBZdnwW13xXNJpMnjwZ5GrNVCDU5g3FLcFSASgRVjxhj1HfGW3Art",
  "key29": "2E4c4T2y23qjZ9hNPmur8rmY6JkGdXoLBjJuxtwL4eKywj8z76XBkBWCErkbMhaTEiiHtEzi8iBbNbASKxUHCgDd",
  "key30": "vojuC4RCmxqRueX1un5DoCwXe2fGjzBypE1jYjMtjyoqTMkyBPeXY5Je2ihYA6hRzYvndxpjXvWpvg7Lf5xGqiA",
  "key31": "3L7cQuq3RTkppFjYRerH3DVsCHPgPHzTYFYDZQGgEmHoMYGfrgcXf6rcVvdek6Le1mS5EwdJg9oBCtNGB3AqKczv",
  "key32": "2omtd5vcrkAqTzGnBebRwn72VrHvgqLsC31Sn4C6bRcrohkgb3FvDFCpnpakerUxaPAD7R9bpeSajSwKu4kYpHtg",
  "key33": "pTCGcTKfctdtsowiqnMZziQVYzVusxSzV8RKMv5Td6fkqRDAFEVbEudWqrNQRKKBWJRTDMcsjcNZSYhRwhjgdV9",
  "key34": "39MEpEGuZhbd9ChEzYKSGjAnLNw9q2739V7zGdDRsrqJ5rjBaDXhvyBe8Pq6xHVdxQEC2AA2pUfkNnkRQGrXxkmY",
  "key35": "4i83eUuWQVxdZq8wKFt6Tyx4BQPbPjMqqwbCoKV3C3ziAtaQqbyVyGgwQhyT5C4eSkohs3xJKfm99NwaEeXsM4RA",
  "key36": "36z1RUgJorNXYbToDdbM47v6NnZJyFrJX9CQGb1JBsJ1FK1eqn1mxQRWKx8M4doQhYxVuApPuSvaG1WAHMbmaTd8"
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
