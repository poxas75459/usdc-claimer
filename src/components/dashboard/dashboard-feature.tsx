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
    "5gcsvCF6Pb88xP7rA9rV3uLQDizkfWeugFXpUXugettbcPfRYa2gw3SzMxJghVjgS2ahgkWLfEZ9qF9GVUB4QWpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k4fshzr8vtvWmjqVDd5GdvJAetw7UzMo9Ahm3iEFQscq5mkdu7BsYLePWkiBEwVRTCx8SNVicyYvjHkPNswBcPv",
  "key1": "3NkjRgNGJbvgcW4E5szKbJTuUZVYqCs44QuAj4y2fweXPPqP5EwiDmnKdaTRSAKCMjHWLKSMyWkXEjLAxr1N1w9P",
  "key2": "XG7FCxBH2DhzCQR2XQF2rakcL5BMnuZKXLVty3XF5giTrjtzPWpUew8ZYt8isWkQboZ9nb5ExeWs543rkPzMKG5",
  "key3": "3JyV8BtE8oLveakXyz8jHQ7SAFECyMuWc97V58HABggEZFhn2vFjyKyUjPx7MB6cHD64ZyAw45nvSaQAZGmZs6oo",
  "key4": "2Z8NWnqJ3AHtwNk9eu2rXgPVKEknWEQNz41839DAjEfmQzfGRUpBitd2uYKibQQhrcxnxPe5qaZpeXkN4pGAMe7U",
  "key5": "XcvRRM4hBqMAaHFrXFALDv7qezr2HKJrA4csZZjDSLQyMWPjxgdFpzeDfRDbFvxBV9tFALH4AKWN4LovQ68YpUq",
  "key6": "4p9dVhkCTcKUvjQsMyEHUP4WrjnNxSPG8Ri2tZWT8Z6k15LQnZJ1g6ZD1W8EA7J3RSDYxMR2WGg7TuTjTKJ85QxB",
  "key7": "3umNzo4gmeJhxC2eL7qqME2eHEDkJXf46pVJkXAuPwPBwaDrcd5XjhUgjryib24o1BmDA9sYx1K3nP4kpaK3HyA5",
  "key8": "59P9geBBUw39M6h8yUcnNyyAbBeqycU7GeuGKtZzSUt4zwodpumVS1Ga89SmbNMWURSuKEJhq29G1774QpgTYcHH",
  "key9": "2o63u57T88jd1MVBtZZrSkDDjknbXFaQYyQPzqpoR8MZ3cSMtNfAHMtnTNFCZQ2osnVuAhekeKBwxbmMS5WDowSp",
  "key10": "4i7bEVV263andwXV9otWuuFEyzaPS7GzoGbNdQ5Qo1NoMUcxT5HTnmed6kzfE8WbNrqfsSAkaoTvdYnjnXmtvst1",
  "key11": "3F27skhKV6hs6XyawFHxVSYWzLT8khAczfvmyBKZpL627s4FttHEG7Evd8otqbGzFab4UyDN93axik1b1krnAt4V",
  "key12": "oGgn2r7Gqvq7LVgwGqrQy74QxoPhmLv8mU3usfYVGDeNmcQdjTnT8HHqHCzgPkboZBAJUfcbr7e6pzrJpcSvUJf",
  "key13": "2nUkh1aFNsUkikLJkWnQ9iPJWdJN1qZ7xg8cXQST2pWaUcdxezJZAdjkzNVpeE7L5U47mDEWrjqdnrsGmgAnNHg3",
  "key14": "5i6akFwAKU7xUM97HUS22eaRhPmU8qQc1CxJgrRRdpozAdM18wgUWbdQ1tisFK2ZuUm3KBuhJpNyFMy69girSpFv",
  "key15": "3FGEUJSPaPf2YMtBYxRShrqEGTMyMz4DpkKLchnBiBRvatPfmguxHxR4QYRvX5gUXKsKQLEZ82TjrviTtxGF2Ve6",
  "key16": "56tBgXMLotBmU5ApyWZmECFLhF7ciQbQVquTCqvG81PRjZXU39ATBD2jWmL8oKSWH6qzmtWCJPqQrR3dGCnHrYrZ",
  "key17": "49tDn9aSD8gy8fqr1XPrwzUeiae8N9jYALdhwrzLzsFn8oDBA3Vq2cYjyWYbyLJnFqgznEbiPge8czqYNUNwiJRN",
  "key18": "47iVHMQrpVQ43AstmfeWBEJsKZ76muXN73WdwjSf6x9Fi5MzoPmh3kdMVdscFPCJywxCbrDtJrYoCKVGwLewrtWa",
  "key19": "4n6TfZ4KdztbxvNadL8GaXdocz1aMkVip9Ch8taWdWYskjaB7RYJii9ZpPyUu1Jynf3mroyJ3AnLwEttWBqBsrMs",
  "key20": "4WXavTsXVKgvNbfTfLZc8m7B8kneGfDNG92eR8svj8KSBgStzHP3cvdWVUo6f46PLqswkooVjKyxxtTU8Gky1zBL",
  "key21": "HrnGbiYrhTD8sGoGot5xeetqr4KjdtVg5155ZHwRde4Y9bTsbHakXL55b8YAQ4FTFFApQpfseXw2o94vAWNYYoB",
  "key22": "3ut9sksTNtPfyScPjFX7qBdyEDW1zKh6xrquSyykKXr9ruMiz95xPc6c6aJwVNYHso6xQS7pLA1w9FpwwcS6qSaC",
  "key23": "SM71FnSmm4tPpras9P9HFFVTFcKfjDrVWcnMAer111J48Z46QXKcb3Q6VgPB8PmqRcHWDeNjvEYRmSo9SnpUm6V",
  "key24": "428cvYPdC2WAptRLYsK8GTznzadR1aZNBSF2YzS8BKMHuexJTUP5AxepJbVgWVueGMdEL5TLvtmCh2FjHHg2Yrgj",
  "key25": "5FMAignQsbhh9TCWuwv4h1fN3YNLHZKZ8U5rL8mzuZjsRxGBbLGUxPpehg5mTwF9VhKHXz4WYZ21oVj8MAu6dpVq"
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
