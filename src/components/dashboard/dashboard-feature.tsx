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
    "5HvyQNB1b3zszyrAMBtQ7p3YQ6767HeqeavjrXTx1ugSJLvtRUvdEBqdn1QTNXF4HMRxhPRSiwiHbB4iXaHXTWGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XF8KJo5Fa5zQ9LAmppj15VVyyt1yYe5qPFt41xRpkn411pRWSSjDkZh125ST7qJBtxx8sZED8S5Qq25EvjL4SwX",
  "key1": "3cu7Q8QFWRAunkjz4Tw48e9VDJRw5iEAiJsR9BeBQRa9Q2pCrXshrLAMmJFf1QhK3yBNCSgP7sUaUtNSfLDmWaWu",
  "key2": "3BLdHDRSqh82HkRUm13HBjUC6egSZiBdfZ4sJZoQcLVC7AEWWWWdD4wnccuiedha2W7L62AQgXCc9d8nJn87Ggb7",
  "key3": "4PZHQrqEBaxxe1B5JwzneYSiTTiP2fg922cW2Ah4eDHSm66hX1pw8bfvJLz3YppcqrJH728SLqkgMEUmFQafUef2",
  "key4": "gGhoQFgTKRmQWWYBiiCQCT5ZkCHfZNCzxt7yQX4hgaV68vqkxrgH4PmmYHFbvWSpPToN9YUSbFeqVQQaQqmoC98",
  "key5": "3dC2UtdSNYaFSxH41Xdbdu3MxGWsodXXNksV2d1jNRmDTTEzwrMxEaTRxzHw5jHBoFmuYZLhhjT23Emc8pM8zjKh",
  "key6": "4xggB9Mq5dDa7jcXacBDX8is9APQrGxUQ7uUYjx1Rqhr5EhJDsXvruh34rrhVhUXsM2Ho9ymooxckraGGWXinKA6",
  "key7": "4F2nFqRBpr69Lc38YptwjArAYejKkhk6GM8qBZDB24BY6cJ94u8sb4ykPhUSqkV9wa9apRPW4TBGiQZwE9zxCF2Z",
  "key8": "K5y9iBvxoP1fxUnzakt6WJjWnhDfUWxZsS7EdQ5rETPDKNrzAEqUdh684JSgT1YDZvE2fdZEWLw8taci8szfpT9",
  "key9": "4xNzSNWr9pX6sfVVEkjJF7AvcjGN1TnbhVC5rjgXuEtqfspQsNnXC1wyniouKPLov4WSGTjdfSm3hnJBf3QF25d",
  "key10": "3QK3mtHHWuZeAwAVzzVaJutKrTzzvipTqpJzyTYzbaaW25zyN3UHtbYwVMeAPEAY7cqG1LwVT2zqc16e7TLDVjAL",
  "key11": "2RRVsFJ6p7Styt1si6ztkKbCQPe3YemMct8NXk8CAqRC1hFnPs5zPhBPmReeCBQjNhv9gYqoJhk1tn5CZMw3XXAp",
  "key12": "4zZTitXHPFPhQHkwuCznCAn5o7oJpGn5VkwTwSKiiKyAuJYNjayG8ZKdXX4p8au1BTjZMV67YwqtH995AA4c9h8M",
  "key13": "4X5CA32YVbXYqopsm9P7Fnfo6DWv8ZdqQ1i5uHqQc7sB5d1yxcZtzMN7EWSATdhUDJs5gPwPzBDYFPfVoFkPEBdC",
  "key14": "49LtTp57n8SzBm6x4bFVoqGoiUV1C4CjfqoHWkQKebHvvJDDGsGi9Mfm3bvwowxmJrd46QKJMA1h79X9RDuaf3rY",
  "key15": "3aYNKKwksukiFgQ281JWCwvf4uvYtiZn58RNX3UtBauKktB1mjsjuPgcCEGBXXgMAbePWEwSkNconRu4NmHYJjoX",
  "key16": "4GGbYpwTT2byb5KBFYTXNJdJNRT9gBPLphm7wPpgdtTNStkV4xPRTM1uLxz1SctuQ6rYZTkrtbvv2AAq6NtHGahS",
  "key17": "X2gVDC4jok2dEdRTLsDdMzB4fzYb4KhvCzGemesov18kSBQkTkkR44jkejbjpqyUU6w7rbwH1QVsBNyFVRug29E",
  "key18": "2EVCETkzgDnM9kkgobYH4wYH7qLkNVT4BgCaBeTLJvygJZzfvuc9BRuVYpFgwm42VUqR1vbHJdx8X9o5GD2Tp13f",
  "key19": "3tQxBHdecjkzaT6aufok9AjUKo7WkV1mFTxXooWisEZtuZUgFNx1V1UYB96usrukN2ZF52DMzFvZWz461ZsyKux",
  "key20": "3zj1jCtrRuKNF5Y27f7DFqkwyFN6osaYnMSuEpSWm2UNCJvQuGmqVnguGr811yDNz1YtNt6tQPWvX2RD84sTAMM2",
  "key21": "2M14DtzhLjXdZ3XtEFCEnfog2ckJFRBW81YQSPaNWFj5XwaKy6t1QKoHP9c2bsd3qYjwz2Q1MmFe9Hb1q8g1Fx2H",
  "key22": "8djVg6L38gEV6NGtf1enSU6h39sNSy2kGKm99y3QyBH4Xbr4eibnhznbciRXub5mACaWVYE32UrfChqVoVVjLgZ",
  "key23": "3GidkLLw2s2Q8K4v26RUPxpivX1tZnPB7BiPBeVMHaHBcV6msyWbQ7VCBZsxqZtCuWKtBV6S3HtTn1Zdbsgd76xn",
  "key24": "TQjb5QWsPp7Q2LSuSsFJ4NqE3WxVm6ESRywW7e8nj43E7jac7xMbV251FXtq4htDjrquuvvumLmWvfh39JuoVxx",
  "key25": "2EbzWWyiZWRdMdEnrSJwCL3J7qKfdEtRHTom91mgCV1oWYAMACTa17soB2jAZA2rRxqx5gQyRMWaEk5A1LJwSQvm",
  "key26": "4aqgHGeXCJ9mQZCgpxKsrhnUTFgjpAa3ifFr3padRZgWGRBg5uzMrGswxgy59uhgyDBkv3rgNvvWWdgYbpRMuD89",
  "key27": "4gVqciqnxpu6SkPnsAXACqBixbJwPLpFKxafg72W3yJtVTEiTD16mp7qirUaJgDJpeDec3TLGa8MR1KZnqCGwD1A",
  "key28": "4jDKDiGnDV6gskDUFaxTVZmS7rMhX8kiNYLBSijz6zwk7unKLPsqMncnBU4HRXALH4JGTgVSopuu628tCGnEqX9W",
  "key29": "3E2ubAUUDFCo3fCv9LWCempgimDSedSUnuB3WEUmXaLkUMLnophr9ziBfTsbUHJCcE62ipRRowKbniKsTSZDXG43"
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
