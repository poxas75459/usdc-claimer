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
    "375jFdxoZG8PwRLCWJ9JfPAdCN2uLW7RcrYy3jBz68nQa6pNxtrYfc3k8hU2HfvcKakaUAPF1ym8o3YcT3JsrKnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tJt5uYPuHF4bWYZm7mCg7XSPgVrNxEFLtrSsjpS6VeCeLGQBywsqr1cfkjTSbXgfjSyCRKhwGKSV5g1U56AP39a",
  "key1": "5tuEvwEtdagezpn9e8tQAFrSMgfTDkTScVTeYvdbDzrVBWkPYnK3a2PHo6C5BViasEexdK6ssxTwqwLJX45L2fWt",
  "key2": "3ZoHQo8qSjFUu7HFh9maQYR9NAmpgSfEuDMv5uYYTjjSCvPx6psBvN56wznqMcH78g2wrKBu69oTAkFCsvhhkFcJ",
  "key3": "32TyjBB38uMyk1efoajMwaYaRPbh7Th6Myqp893Py6HpR86MsNFvLxSN5odJfjbz3ubFL2j6yhi8mbDAP5hJozJT",
  "key4": "JDSppJbN62TGrXpw7RnV25vMLKq1UD1efqQM5Mwry7Pix6WyKerXRoGEyRrqs1uF5Rau6TF2XAtydbFxt7b2hmT",
  "key5": "3zuH6kkCt3DTdPNWpqFeeD4uD2wgegsV3KzWvG5rFHPmX7dodjaRDrg13kwEo7pWaXZCxZ1WnTb7hfcUnj3xrHcA",
  "key6": "3CKASJdXAzmPMPzAjvXnqKEAzCuK7RmwReB32KtqAo5c1hwT4aMxMTzaWf7tYaZaLpHb4iNfDGCwJa2yq4EbkoS4",
  "key7": "4a8Gm9fFwPFqRtjwwXfZLwmuosTahY3ML5MLH9mKvekjBUonVrmy2h6B3Sc4VH7Kzmw857TdFq2jhaf7kQX8M7qp",
  "key8": "SQNST3EKsWctLWh36pyvQp4Lc2r6cVwdWmsu4jKXCJs7T3HcrTapCp47Kb1EpwVVv2Y6AmRM3AfAzJGK5dvvXhe",
  "key9": "3PgeKvVZURDm6qXeQP8jxXu2NPpGhN5t1Aa3Hr6pzyZKzpU4Gkz3HahW44xzW4BcSnpwwtJnUgtnJjbTf1fSwZo",
  "key10": "2HMtdbzHnt3b5745DMQAxEmxtPgRKa9JCFw3xKMV3TVBz1zYgAgsDdL7pHAJBpikMYT2hhZcLFyp2qCaaZmF14R6",
  "key11": "3HFvuYXbiKYEursSQsp1LVT1nCBZV3N6qxn4X6FQXkkFF1U1w6VCP8j3RiFY6nWEquWjzfaZxsYn4kW92eeL8mRD",
  "key12": "2gmdXxyg5tVcj43iLBcUQBeH4QE1CFSMEXDMcyKWiTvWu8983a9g3yhf3Myq9vifhFbCNkiFvihRPHibubXGajgx",
  "key13": "2ci7ydYTWcSmadaDgMnHTmYjhfmTe68aYAWQho7rYuQ7BaRFELwjwQuKDkxwD7gZS6oEg3PafxGdcUhzERPM6Jgs",
  "key14": "2FSaQXyt1XPEn8tEw8eciMS4qej4oozdoocm2D8SXZf3UfQEdBv3VX9DWXi6ozAbKcbPgMUgXu5GszZixmYCRXQ3",
  "key15": "4YRRJuvdDkrhCjWWJG1JwyktFKiJ7Qsjwf7YhkfgESLy4Q3Dafj7NZZmFgfnFNEhabk2dqCGp1D9CjnwzmnVzAtz",
  "key16": "3xqyDukxBJbwRoPtfLDPktCzNXmQHkXTb7TyEphTymM2GbqMuNmt6sN1FsFyszcoBFeydTFHEhMz2FeWLGyXLJpN",
  "key17": "59bkbyfXPmaEMi7yabXyVZLEhkyUHbbk14DDSM1aGar1fPh5tsNggyqdA8XyGUxoWZCm7ec7d7qL8gNw18wzkQfs",
  "key18": "41VHJn59h2wF8e2KtTXReaRE3iw2BqQwquDM7aVBThJJ3Gm3df6gnfZf8hqgyzuR3BSibDY3xjqqwg2qBVHYDan",
  "key19": "v3DFMqpgwzCK6B4Q7owy6gssGhkkLtZFg7VzZtWosCEVsD5DKp5TbMqBDTDiujm3tSoHSn8Xaja1YjvHMLD8TDX",
  "key20": "5ijbbELR64idNiowmtCj2ZQ9NDJ48wT9CW85EeXJYeiFuKKKBzbxpGzx9Q6iTpGnsT5gpzwqVntAhe1YdHohDV1Q",
  "key21": "4MLtSW31zqXnWnFkSB5T6geAmFXNpL38jDQ75LamSAEaxzR3E9wvNQZ55U4Ce1Qw7AzB7zFG84YBZ2DaFpYspr4e",
  "key22": "4FD2KTPnmPjxMfVo4HWZGnEGowX2M2ExKRdC7cWNrrNgGDWGMBM8yJCXKMRg3n61S5rALduohvZSKXM5a8C5PHvX",
  "key23": "2wjRiY1TxAafgR2mYfJrouUZfkJSLBbUZ74WQVfM59UHsMUDWyqR6NnwQ6Mniv6WoBF1RxMBe3cGTRgujfM1AZJu",
  "key24": "5J1bpmjwvm2WZ1ontF6deDbHkG2g9und7gtE8a6jmpjZJXbNM1WbRJkZrRYijXnr5dgJq3kfoPRSDAkULGZwXnxy"
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
