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
    "JzX3PaLqKryX72VKSkDHsT99uJtDwzwVdr71ZKLtMjfUia7A8Rv8TwXv3GCm523GKanKZU6iwAiswEvCZ36ags3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RRudVQvGkiBMcgSJ7brxFKyea6aN1P2G2awuYcKsvJ3sABffCXMCkYH9XMQeM4vhW8XncaaodfDEqkEyABpR1HP",
  "key1": "RUfdMPy3KSG8JmXt62kmvhPMRXZSEreEckbuGXC9JQE8fQCzwAV47QUanCghcPrN2wjz59X6dGufxpXegH9svyF",
  "key2": "2r2X9aQuej599FMU6D6E4uPHmfv84KkaZ5NtG1SYwBVDSaL1KfZsNxAh3eH3fmZ3YoEKATE7nBadGRYfguJSxjrB",
  "key3": "AUMqQXvYCLzd6Gxy3iJMB8WCKXkNU8aKB128dFjWUvxEwFEVGBhTUJaPEXR4cqTgvb2URNjzjDRCTCdsPumhMjE",
  "key4": "BsSzQ6V5G7BfF4FXrUfv1Rn1eNwMHXSEbnFky4XFnZaDWDvmrJPY8cu4Z5oM2kZv6TJwJoU6PZH6C7Ce63oCcPq",
  "key5": "3tHuPcvStgdqrmx97ywqayTA2T2Y73W8DavTBkpPrprRwbNQFRTKL3vjcW6rmt1hxPBTjG2fyZJCd5nmizXh4JEx",
  "key6": "5pPAsW8GYhHsTGtU6nJr1LuZwFh4Dt3ZP4ezd8ZodpWWZukLTy2g43z2KPWR52yjmuV6aNxxboBq4A8TR3eoNFqw",
  "key7": "58tH6iiTPfD9CVvXgtbjUtrpY4PpJi3WBcs1i8uAnBjArCpECvXp2oqW7HXhSwnxP6zS9gyR8Ruq26si3UFmZw6n",
  "key8": "3P2Liyp7LA9EJ7JZwTKn8K91Q7wK2tHx1ZmDXRUbTKFfZN9FXiNV8uMBMSyjB54zJUjMwpwen3CdZUr22ftk1etW",
  "key9": "3FUtKxmFfh9XREDNNv7RQB4kNJGhJkMshzKK7bJk9G31XS74vx7KXAvaqVp9ypGMofHyEVsJ2KHWJpCQ5NzbaLzU",
  "key10": "3qQ1mnVcrutmcE5pKfkkZK89BNqga1nyVRC6sJ2C1EGqzvPfQY8Gw2e2m7vw5U3G2v4b1fxbwMiR82vrqW26WtLm",
  "key11": "463fVFSir7JxYPPB6mwS8Q1Fc9FjYpUSCNfi2w2w3A3xmN6mEAXUMg8yFrNBaUvoCPUsqdcJjhAwr3v3hW55kkyM",
  "key12": "65pwvApbEkEJNxGBf8givDjpCmBmjyvrDcLDJSi6eSoMxygmZw5mGTwfyvHaXfTmAs9yn6JoFbnEVodwmf9V5DsC",
  "key13": "2CFqxMeipLMKTVBoTJzuNGbLt5k9YpTH5vSDyn6yEUcT574N3Hm8cB8BJPSsvUXs9oVhN92vPxSd6zWBzPESPaeZ",
  "key14": "oiNhaj8dp5wTmn92N3UbjN62PrLN76vaXqMGgYw9jetQtU8d3sMHHta77MpwEhcegrZmaCwf9aBzbDH1hjyjtG7",
  "key15": "2zuuMq1wDeKcAUczmGp5Qxnt5a5nWmzRZzJTZY6EJRzAs5aCTX89Gkk1GM29Z9sZWH64cAhsjd32wV78USnxHrz2",
  "key16": "3ztGF5RWAXNBocHq9Ws1ab5U4KqcTjbQb1QfKguWZtHanuBmHa8BVQgnW8uJABjc15Z5xx53452Q8bXNA65SaWAv",
  "key17": "3f5ZaZuDufFNkytLG6tv5uvJT77jYjKMZUZJSpYpVLxabBmR57mpxb2Fb96zN3MSSZFjRa8tdT1szeDqPZ5jL1rm",
  "key18": "2FwNuBgCHLKohqL4eQMH4VuCoXB6ombjJafusHw74p3i8k5TfKQsLm4cZwHnnpuCES6jrdzh6vGqBo75R2PBTrdX",
  "key19": "3FraWkqukGNogW4wjQsnMSsXerESCWvWEg3GtBDRLoBqprzAnPj38BiDUDpLj9k5bN8HFavkuFsJpAnAFXGPr153",
  "key20": "3GsHmRu3SyWoMHwnPSk46dBcA314d7qZLNGHeSA2yk19nFbTec3fSiRrwoyGfhPDVMiwjZKp5A7ojaFq4qdKTA2H",
  "key21": "2xHYnNMPXVqYmfRhN5kYJtDxPbUargdLAzLMjsdXHHpX7eDYrooyrLaNzL3wZvSHTCF4vW1HJR39FShX2ppe353Z",
  "key22": "2gKvND9hpTRYNx35SX7jFXZQAJWnhNyq19KxP1mY7mYy2w3RFmJYHryYwUyR6Cb4EgXfk985yERAx99XBVZzc6Fh",
  "key23": "5qAZKNmUSvZWp3FjNAs5wV2wPHtPJdnNqMNCzuaaMmTcxcKWjPNXdVm96Y1y55NAZmWC4CD1hF7GN6AUB78nfUWg",
  "key24": "3DH4pgN5AXNiwx3CsiGbY8wBhLjyd3MQTSaELjyZVFiQWVHmeHYAgaagu1R7eXs9UR83e2L8cz9SHN7BbqHtkk5h",
  "key25": "28pY3CrZ1aa9mknjUdhTS9DBTMa3KMCBTa38XZVnr7Zp1qqzXWeHcTFkh9M8Ca5YhKd14XXGfhS2BtWFvnjnVP5C",
  "key26": "2mr9CJUHgjSv4opG8QoQVFrAe89yPmBPSPmnXiBBFt6VhnFS8ots62GGd5kuEF8hr8mAa3Tzhcv1egV9hqpdb5RQ",
  "key27": "fRjBAEQA733fU1DWcePu2Mhy3WiVcM671PdiPfY9TW79LDD3fn3ywhd85yR8Y9Udx4tfFXyh7Bk3nm4RLBQbe7p",
  "key28": "2nPfkhKeRGh8vkWkD1MCinYZxZo2WJTVbY4jU1i3d4CxkybZZzBA3jExipRgEgKGJAV1LioVVBa32mEDGKiDrj1Q",
  "key29": "REFHQSmh9RTvNHS8PcjesF48ZUTAYwboXxa18URpNQqcZjKV7ay4n2fa8YkUJ7AHyR6SAx3BLJ49Vn5uEXmgNMf"
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
