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
    "4xK7obmu3xygqT12dZD6FV2PZYbrGKQojGa7eRRzzhHNduNXpRZKdVw2Q6fSVJdoqVfi7p8MyzPTtUNbxwT5rL3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j784ycxCbm22s6Tu2RCKdgBq95e1D1rBaisskLgRzSQ8FHG6rm5i2yvcjEjM9nF4KTHgCdcLCRjnFS6GortNtbV",
  "key1": "L3FsneLHGXkTf8zq7en8TrHZTo7HG6DQkTswB2xuFZ1JD2Z2eTUFmvMSYnfEcc6YRuMzxdZhpdtdBfEDkAACi9U",
  "key2": "56KAT1VYoNLThg1oRoEhcThE2JTKtc2Pa4wZJkW5jpnwQipy6nTFy1r7LrXPJPxKTiVJuPzQCNqhXUTb3bUT3hDh",
  "key3": "1tsUMNyfsAuoUCFbAHqVNA9hejfKiU6sE2bThEY7gEwx1uckeiPGt9kMpyTmY2UJtg9acA4Bume3rFiG9XKFd46",
  "key4": "51V4SNqtTfXpPEtuoCwg2Pv25GNEEKPyKr91PGd3WNySM6ReWYMF4H6sDwvkMRCfLqRGDDM6DddDJzPGXujZXzMo",
  "key5": "58c35LyGPxFxDP5m5u2FAihhy3TG59xeRXRkTq9xepjWymU3P337Xv9n9EvLrSaP6kPMq5sbqKWzr1R9jodG36aX",
  "key6": "33J1Q6f1RvEqvnWmoDRXKCCi1FATcpYYPKenka8km7QvihU4A9NSLEPjCJ6TZcE7bJWgrqpfk7xAuP3jexn9og9p",
  "key7": "4hfZKNowjDHUTLnZRL3V2AF6pBS42K8Wn9xixr3U98XDb7hLPbDz6CgutTpAek4spfp7k9RAAoKywS5m3MrHz21r",
  "key8": "5mcQATfSMznsdUDumdL5H1Mo3Vzq254zzY8kdL2RAapsTA9CFs5BcCDtpRQHDNYDHd5JTgnBYLpMYVqJ89j6CHMy",
  "key9": "qqroGGbiogttgG5Af7Byy33TZ3Heb1wDYRb5xZnEac65pSzB98ALrVkng4i21YLaQxWyRDArystTozgsXghhGwF",
  "key10": "2wuwZLw2iKR83khbycXxDrABCmbvmqTe7obLk2vduQCYieskPNkpXLB6giFNWHTdXNhDbU3i6S2HyoHaH41ZJPpj",
  "key11": "4jQP4CJMBESuRvxs2cckEVauYcJEoxfV6Z1BfL6XFV5Yzv3MFa31AdVhQd3ACkLUWTZB2CQFL2NcRnH89jPFqLwU",
  "key12": "2eUxDC4jXDXEKvWNQUTxmLmraKfqEZoASYBdDTnzZErkHxBafVscVZb9duLAf8iZ6Rrwi5z5je58HGu1UNw71WvM",
  "key13": "46tD1gBBUSqRc8m1bpzVQ3AxBft38yXYWC8HFg3VZvfg3c7DcWJqoZjc7KqwJRszcw5yz86ENyXHCbCTuo44jG8a",
  "key14": "5FfHKUQCMZ8H6zXqynLWZCTRLR7wVYB16RSBZ4uukUUxTeFA6WriThDR1zKPJhpwsWiamxaCcXnb889dqfhmXgPq",
  "key15": "2aQcS1M9uGTZB6XHiUrXY7CqF3R3mRsVMQyw3yjJcgp1adSjhPrq5zuTyQkL6kgvmEtPSKqfRCPbxEXrVRNUE7hP",
  "key16": "2cQz6vuQ5TkpSWukKB8UwdmrqsES5dfuWJ6Mv3CEyVJSwB5NGuteiJFQE8SVpUqq9vAvULhcvzhsjJ8v2ytz54jg",
  "key17": "311xmFqZPE6vvik2zJLXm1kHQBpQsMDoiFKjvF2c9hYnwtQkbXamEWVvX8spKgo2DQJn7wjHvAWX6vfpV2UdnMvg",
  "key18": "5JHe5tynyUZo6Fp1SZfD5N3MSSZAat9PDDeDaf7dvZuZ9Ae5v2ry7Tpwx6xKRpo71wSH7aCTgoNHwK8Lveis8vpX",
  "key19": "BLb4BRUixoiejXK6dC9pztPFTzWhJhQiJoovX4r3KJ25BW2bG5KcheAXKYwEnmXHLiNRqmgfGj7E9GiE35hzDCn",
  "key20": "2LhWV5i2yTTGptZmD3jNCNcdjsxcX9Cpe52TfYZaSGUa7aSiJ9vWU4NiXthLGEQWDLax48fmacoBK4LkvmvWWPmG",
  "key21": "3p5eKTVR3ToouAoY8aAW74qkqKeH5XfibS7nRSuKJUyGVoYBLcbvyDLywX5TsCWCQgVrzujLLWm5ALzxigPx1Kwm",
  "key22": "3M4sPHmao1aHezoUJWVHXbjrUpLyAtHhkCd6VVjE8X7GX8vwSWA1JpzsybQFKxmDVF9jwMEvQuRstXzydgaNjwqt",
  "key23": "5Sp5P3aw64AV2QMUT4bM2oLCjri2CNbHhSDQHmukq2keBQhyxLGsJUQrQCQUaAN3k4XCPPhdkR3CMQm7muuC6Ht2",
  "key24": "3Vg4jmefCagwA2MvQTcaPcbrmWBYL4aEtLW6xsTamXos7bjQmzawfpqfxgF1pNLtRQRN3RoYEygN1pbEEkpU2W2p",
  "key25": "2tRMbkzzQJZEKZmRT6e2p2HEV59R6VRUDjw3V7zV3TQkWKQ15QRHRZ4KMcPJSpLNuvsDdwC2H47EdKQGsqNcvybP",
  "key26": "4nqLMXTkSjnfobKPBEkjk28NGVfVpL6FZFMQB1m1QaQZ5uyvDMrTpy858LkpB3S6CCkAmb5hT138MYyPDPjmQ82c"
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
