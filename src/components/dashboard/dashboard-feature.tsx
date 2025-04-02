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
    "5z1BjKTp2XJQZx6LFEVC3Q9tVduuDNka6wvRZSib5NSVpAssk6WnEPNSKwYvBPfWfnsS76bNejhpXsHw6LFodXNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XqRb7Gg2vSeqyqzVn6cXRse9yE73UcUHKzuPmqYudKj4q9QA7NypyucJ5om5g73cSvbG1wTWUudpiyFsE7M4KJM",
  "key1": "4xPfWZdkKXRTkHUSCwYhY5jo6B9zsEeJRY6PkHW2My8UDjcGsmunkLbfhdpyKHVLM2xDs67jmcHE8UPXJUkE9uLH",
  "key2": "H8djf6oshbiSBdT82HJV3UKH76MzUL7ZBsuQPKJdQnqEjyLekimMXgAg2EWw2bici1keA8J6bK19bK24vboarnf",
  "key3": "WznCN1zZJMfkL7TnhTjKR3yAd2eqGQBMcoV5apodhJ7NuzpiUi25N2Bj3UaRcBXWZDwfYRSUXHueGUeipicpR1k",
  "key4": "4u6ocTUpr1otSV88PqjuYfEyFcup28ZWSqjmNqAmZ1VDq1fA9F2T7NqPUoReNPXEZFYs91QVxvsQWmcsueQBREW7",
  "key5": "YCu8LQ45eTfu9admMyFECpYQKxHduU9G9RejdwhnbPcDJ4twBSggt7ByBz5bh6SM6C6TBYPLBzF2dJ6ZRL4r7ok",
  "key6": "3Bdyx1kqju6TQceaJv9b5rUZRsgb6fiJm2GNm4hz4dWrZyUsJuDo8o76zytpaquLGWNLG4xpQRMgxuHT7r9Zr2a7",
  "key7": "5iHcFMnvevHvsTcfh2yXb7Dmrn8JcjSS4jnR8kgaGGMgcXpYiVbrBebSCfZVx3ixgGVEvpLQnJFUGhE1btHvL4QW",
  "key8": "3TRD1ydqyGvE7ekuUxENouq25BiiUykxhdSLRZojEdKDjr93QvtaQjZ1Qx2Ke12kGLnSfe39Ciw5eH6X6C86vByb",
  "key9": "57MLE2qeW6yGB2EBQGJj5Tqr5Dy1S5jgePxwnU9kJQDXzdnaamtxkzcUKrmdQeCNSjwjc3X9eEtz5ToA2NwXeSma",
  "key10": "34MUwne9GfjbqdUbTJYKiLghwW7ANG3jTVY9huDscc6NqrHywpn4Dxiu1iHNTgMADe1LBkadQPdFTMS6pBcMsDyY",
  "key11": "5RhT987P6cBSW6eSeeoph7w2ipHw8hCaUx5HybkuCc6ZAfFcXhu4s86zHrMkg8fZxZCzLwTqJrh2GkmySpjNX7E2",
  "key12": "4UvaztRoxncnYTU6mdgL882gqoHbaoRifFJ42JUPxmDV8meMG5KPR3wz86Jcisn5eFj8tHjbCGihhgJPFzwbmeyT",
  "key13": "47vc3ui7kCvFCcdq5nQL3CdSVqecSGwA88rdqHALipyLZhuGg3cWr6fefoLLnm2pCx9nectUJhC6T8o5BaT4tg2Y",
  "key14": "52RuAaFMSLKGw3UBp5bFgwC8rhTq7vU43kXaD7gPxi6ytuUwL3baSXDRiY84tSoM1j8ezpS6vfYXLx38Lqx9sJUz",
  "key15": "CQoowUe57R6Wwqb2tA3mx6PTdpmzr2jAiL3b2PBXjaXWbGCG4H1KofmGSV7JwCbJTYjbSmZJ7cKq5tuDQKb9YXV",
  "key16": "4BYrFzniGD53njBpuATGCwRrQe1bMMU8ZcN8tdMpgJK4ScDxa5uNDwDwH6snFzMzUAdv5FuX56rnUzSLVBcDpnSQ",
  "key17": "45DmtX5FnL7aqnDkb2CPxjPESiCSTArUM1KF1SnnPvxASQFyVoEL5dgmzPybGU2bmFn4rzwSi67mjF4pZJvUkmiA",
  "key18": "tURLFBQ93SzZbKLjQjanfaJAEbVdVUJysdeDtxQAYzvGuG7nMJKPzEDpDz7bMHbaTjkYQLdYyjRkeKL3d6pnffi",
  "key19": "5jb8Xyi2dNo7mkUoM1XSoUTH3wFfjp173VykMp1LMXPx1CE2eoG7ie26XuiFGa3TCR4Jibb54otPDhNJxLRVrChT",
  "key20": "fG8xWXgD1tg73JpxZ7BoeyzAjdKDfQd6Em4EmMJjYrrWabaSrUCV1bAiGegKpefde3iD2GXUNVkNfx1vxtXo1cA",
  "key21": "2y9VaCEy6cabhygTBtNLPUyAmYXgp2CMQYToxGR2JSn8zYRStVKCiAmroDCS9Nv1t8SccN9ucFUMBpBD6EWzYzyd",
  "key22": "5Y2omoGGmGor3uKEzss1qKrDp1cbbfbA5ShzExqysFd8ENhytykSTMa4G2Nt3rC7tHbChtwrDbtb5cxzV2Et4HBW",
  "key23": "5zXRHJja5tfdSi2PbC99F4n4RpWt4nC9NQHeJFg8yctZWyUwmLfFNQ1qX4trWoqns4TSntcZMo54uC4BPXzAKXfu",
  "key24": "31VN4ht7y32KLxtmfvVuvyVVePMezzHXx3YMrzCZXHMc9zNuhL6tt6dW8imBiNQrcT1tWC83pMuKBGReZ9buUod6",
  "key25": "3X75pXTKL322YMPpEu4RXy8ezSSnMSjnWpcG8hBYUxz6gTFDuWogvFK7SHdmD1bE2M1PpxiDpfApwyM6VDjBQXGj",
  "key26": "4WjJr71UcW7WQvbpaND6JnHMfjUqHQ8qEUbFPF6tuFBPW579tkmc58Lg3Fyh8tQsbx7y2TBiDgMcAiBNqDsWU9Aw",
  "key27": "5dCgVuLuX6RGNHo5CBKBa5KzUUNEqtfJSaFdZtQ6873q55VgkrNxXPNt8mtZFTL73AXjrXAsRUoC9QewXkfd7ghQ",
  "key28": "579VCWPGbmkPPpTmNm4uP16pwSEFFGrAcLcWi3SnBCV2FA816JAdJmjew32u2Ev8uoj76j29fSf9uzLq57JPPLz3",
  "key29": "2SvFQint7KG4Sft67cBRZAmRinvGtpnaGdkoPgK2nTC3dKouUp4RknxDBNNJHMatyvEs3CyezUy6wrP3cnsMwcG6",
  "key30": "5b2gx8Ade4ffcqprgb9yJexT7S4kbt25VGSd3S1XvHft3tjB8ntePKCvf8ctcjCEVhTKPR9Zc4K79tTekRsBNs5Y",
  "key31": "3sgRGnMdr8b2Ry1U23KqfS36XQYmwUXPDKe3BzyFm8BTSCczA6WoSzv1tUcb9KsQyF2oV1GR9RSuSRjPoTyxThs1",
  "key32": "2QYKGvVfsWS3NjdJ187toWWvUEM866KPdKQUyRJLXvRpgbWFnUBBmLXddaAaghM1Hs7rNKgAueXncgAks5aTBxD7",
  "key33": "2LoJJtvCTHPuUmwcSWR1gmLvRyD2CuWGs7yCutZ3s2tkD8JwoxvpEjpmUM3ewXbGKWU7BptzgXQ5AoNbrW1Rim1P",
  "key34": "hQCeyXbJAc6VZfBSDMijFExZtZjALo32zdcGwG5WzDV8CXud9FavTkQL9KQnddME9ocKCJegvRooFeXy4Hizg2H",
  "key35": "5q6jqxhkCRBo7wWGC3JqvSdoLyBRi4Jp3agbz7LZTFGLH5sZUA5KyWZByPRBc6jvWcD8pRusM15XGYS82mtszZ6t",
  "key36": "2DkJFqUMWwxoPNsn1xBnVGbEAZrH6HYq3op3c6Rre6tc9egzjKQd7CYUiHQzpx8kC3QidhPbykGyyP6ydnP4YLmv",
  "key37": "5JFHLLdBWDjtbBx2T6yZ14dTcZt4Poac3HKtbsM8ssEE1YCgRvHrCP5QUUr4zVLVUZ9B2TZbEwwk9SL4hSKnsBn6",
  "key38": "5af1bqAX35X4yZ7G63SsLa4MJciJdAGqjQe2E3doZ995RcK7dN2dic9wadVg3pJuWeokqPZXrLtgAfMDjSvcZZat",
  "key39": "27z5PUBM2HuTZPJiMGyHzd57GpMNzxDJckP9UHpStns3TsFaSF75iT5FdLXA9uABBnStyJePa8QyAVqBCDvCN8J8",
  "key40": "2mfdFeh2ZmMCyvCGqvnyTAXe7rBPh78mh7Zv2wiYKYoQEZirnBHDSbyLK4ihoAh8TrUKrcDy9UzqqbYS7unQedVT"
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
