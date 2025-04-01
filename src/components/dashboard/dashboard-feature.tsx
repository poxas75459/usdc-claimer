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
    "dsghnmHogammuK6XVgDScLCwhe9ZmGwk7hVC2TAzLuTxE7iPeWTHMocqtN9vGQzoR6vZW5VsR25p4hoWzxrMoQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFDk7zB3i2kfKfK6jdtywbM2Mam43JDUN7SpTMKYbiLgB5uHRjYkdiAug3y561md6oVukpuhNhHdbfsYb7ZaT8Q",
  "key1": "EKuqMbrmNaNJrsjjJ6pUwVk5Dk4MUbbyvYVQhKeXvW3RDzpRFeu2qHKgYmihYrvMeoZgdrH7mm3AJm7q4GFndXC",
  "key2": "4NnsCjydiYBj4D3oKbgy7JT58Kfe5B4XXsLLi2bWk29aeEVB581vADhwQGboa3QipndkA4sAg2ZTearmVFLY2dWq",
  "key3": "4u8ybHA9cdUovxoHvttagG1hzwaE4L5aM86JwNdXjFP8Zu1tZVuTashYhjB2j5iCTJve1oqUnVa2j9cmdBXCFqir",
  "key4": "Ro2knP3AC44XBSUVS4SUm4DUSjRTT8RCPfp6Efuiv6VSBiKb3ZQyy3myiNzLCaZCP6Rn2YHiETBpQHF9VGr1iuG",
  "key5": "4xWevhD7AXMezP51muYN8DwZ6gkCBs5PeeRegXzeEeTmQ26oAJbP8KcfunJYBEE7nmUqAbtbWvpFNUbdXJwYNC6h",
  "key6": "5B9jWvWpZR4Tvs3ziADMi1YEBEXaPX4trHtxasmSHT2bn2yjd46n1rBz8p7AZGfYqc1843yksME5Yoy1mraWV6WZ",
  "key7": "vvohQ62vtT6U7cdYmar6VDF2vGmq213YB2YkPjtfxk4on53zqhFjqdNqKxNQAxYNUccb2KS7CMKMaUXeF7C1Msv",
  "key8": "SFsKAtCek4SrM6zgZEAH9sDB7vFCesN16krSjMeCziKE4URJnpdjPu2JmVPDrZPXEE4yXYYpa1jp11szkNsmZ93",
  "key9": "49w62yXNzWXYjXKmiTTU4t6CvDzGXxTndgooWivUR85kjSqR9cGXHiFLZEVQE3MxdJG9br19AHEEifiSwaypHq8a",
  "key10": "4w8psiHCNZhUFZ73KMFUnGUjMhp7hp8gm3AuvARTSG55fWC85q1vvPx6tvE57MXxaAM5uZe9QKR3aVhtXvQhHQBc",
  "key11": "5VaCY9FxB2dC4Vc5EwFbmhbar95t48YU6edatrmWvxkL65GjkbRyC1e16YyPHwD6qXLxTFndSoTgaS4W2wWK8FbG",
  "key12": "2ayQZmBPTY98dqPJfJgd3qidzRnayrdZLV1CkgHZbgxYgJu4Xwgwts9ZSvpFnztxAadSZyHVRG3ffowsyKLa7Kd1",
  "key13": "52uqLAyj8cMaCT6cr5mSXCJsTYs9zDAVxEJdrYWKEdJFzz6ay3v2qATRedNAEjBAzm6ds5TB45hXd1NFbdRGKurd",
  "key14": "2Ubzzn2HSXMQTr19vFUrX48L783nDJj8g3yKo73H9oicrhbu19SYGHa9XMn6Ft5YenHjnBcRcEZ1X97AUPzkThAZ",
  "key15": "4E68Y12FA7vYbEFqxPDKbF4CSSdChDJrpinTwZRT8T6ed5UbBwCxQi7zsrEdFyejwf6xkmTynx6PuC4Gf94TeYW3",
  "key16": "3MKaTA2XY4ZdhrAjkBKeN5qhHqhKqBUqoqCzYXig5eQ1wC4y3w4exdkJypcA97jtCrd8SnThnBs5VWN8SgFcV3Db",
  "key17": "iCfYgGexkieUuGRZStL7VEZu2SeC3fA6rHtLGpHVNAMBF8Pcm7oeAESdFLti8KcXpUEtrPvbTDUWc4FKjEW9JaJ",
  "key18": "2DtCKtD5oHNUD2jQaaEwqEmKHw8LZC6zSYVYL5dKQtvSqg5U2dj6mNsfWumCS8ToNkZapTbrgZKp1JiEdZHmzuas",
  "key19": "4cECWQTYB7GPJLGBARbR59HmnwkiN2zLbGDs4aEp2WTr2h8gsjFXywTeLBHDVXcFGuAn5GYVp2bKYdfDtQcdd5w8",
  "key20": "4H95CGYapVJp2WWPYE4Tim5xN8FzLHzE1gD1R9myGRFT1DYfaftmgAJPXfoxvDePxnpGkEV6yKeww9RF4ZTyMX2b",
  "key21": "36FwToh1B8DrUqaZ2V6nTZY9zQPFArETy9fvRVr7r2njvcuSEYPAo2YxAz8Pt6yBbrYwh6JmXrCgQzAJKddMsCPb",
  "key22": "uJfBEPBee7U6t5oMKuz9vxnHph5LY9vAsSv6J31mBiguwDAsrfqa9F3ohmUNMmDPFpkoQuGaAT8gm9qp4GHq5Ck",
  "key23": "4A2Uy8D8QuN2Cwcpp5FhXpsLJaL6e9he9YvBSBjFk1o8MfqXBSTbrUSCKh5U1S5ayrx3CRy7QA53DuPriHsgmNRz",
  "key24": "3yNRSKh7tAa4oCHdXXJkTZcupj2fngp2hj8cuq8xpi9bWBxhgykVL1vq7GTfv7aBchXRDWeHejUtBoLbvSgyemnz",
  "key25": "2RkYbPkoUAhQHDdq5953RzkixYGteMqUGcCk6AiTauQbkMCCDgNqxEfwmnXMeTEVSp8mJFF8HHXsPXJWNDPMaVjf",
  "key26": "5SVR5WkU6Xzk9uAb4hWWmrG4JK2ryJ3X59HSwq9yZL62XN1TuFEZFXzECsNyovskZSJdxBwyEqpM46L1PXGJ9qRQ",
  "key27": "Y98ZnGfVghiCUMPVmPYSNseKgJxZChX2mfZMjueZJPgRmYvuV3WXkUounEWMz4Gcq6EAGwydDZhqaq44dRW61n6",
  "key28": "5mKTPABGGQXp8xWQb2Q8GgFAF93K4nFHYKzFhCr7QvPxqmoBtTr2uTshg9qnYxvGToth5GFP7b9YYqHkJ2SqKSZi",
  "key29": "3s6a2pppMErRxn9gxqvjgAVYrQDdsDCNV3NqxLBHuNBAvn1uQNKi5tawERji5U9YKiyd78D7C6VskkW6NUx9YACo",
  "key30": "25LnJCs7qdQjWtyiAvw25FUmbJ7j95XjTpnWhctXh79ZFxUSeqKUg9bsF3pgmshWtSCUV9xrGRXjimcxCGMMajx9",
  "key31": "64ew5dmz3FXmbR6jS1eDEc2tzSYpprTP67vDocNeSFZVPYvsZJ4vHt14TVncTA1wnGFVy4ap5NstxEzbpvjbzxzr"
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
