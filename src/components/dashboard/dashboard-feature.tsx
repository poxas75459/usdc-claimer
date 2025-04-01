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
    "26yFhoBbRAkHW45GApknzJzGHY7BBJtM6eeYSKxqR9Yc1rnisBVmamDkg2Ly7yxUpsM6qRiHNP9kC3bA3GPDjWN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qysKspHJsfFV3QWYhyRxZ5ceNt3jBfH8KuHANdo6DUDcEMgnntLHQVf3jVDxVSfaX1ieyCF88XU1VNe6K58Ma47",
  "key1": "3WPicpCBpeP7PKZjnH6DXzWYfyxTd4uUDpWcX5fW8f9ANMZAoacm9GLhvsQH1DHzuy2W2VV3debD5dsV5ciAPQ57",
  "key2": "678Gsthft7VyoBfcKcrTSgzfq5KrYGf8VirzACg9ahfTg1xLrUxvYmZV84mAWcEcgPvwEi9DR97MMscEC6xoMZKu",
  "key3": "5Rm5P8TzG2SD9RvvbFVKzVgbw6LtbzPGarpYajHgKEAKaS1es5kykCMNqd3hFaKCtUuZexNvRdxrRhL4F2dZ9FrG",
  "key4": "5c5nDQ6QeQh1rnLKgSNwyGym3YxFr3W49n5GPzpU2EhVnZ13LvtSbrVPzMCkwfuSdFj8frehVu1F78Abj4wuXien",
  "key5": "2zVSWW1ZNVzdQPPMtmtAwfDiEvM9dfXCDmi1u2cVg5DyorWXPVsuWxSesceUgxxayo2PEqdiRbJ4n2NwKqof4VBG",
  "key6": "52LhmpkzRcsR7Vniaxb9Qxv61tFsBevzB37pG6G87HhQMZRCehDYbcbL1G7HNCVMe2Vmm1z13dbA88THuhwphVNE",
  "key7": "5KLUy4bGNHyvsdt1a17LwNt7gEHqEbam63JjyX9kWFd9thM5yJyYHqRkxnq9QDPgUkrHZEzaHY1KpHDkJAiseJnL",
  "key8": "2Dq4uzNMTUrWywnDPoeM5p4rB1WPAKk3abBKbg9LwEw6m9yMXH1neyb3pPJ3SuEtL1QRjtSayTKWXZ7nMXjxbT6G",
  "key9": "2MRiMEeM8paBmt47iFNZqftYg2qM1APMF2EEdAcdkaosfZS8QgfntdaFvEuANvZZVX2p1WcV8hgnHvsnTRyVKrL7",
  "key10": "M9ZWb4L8h1pPRARFmXYYWut5cY84YDZGpDkQR7c5LPeP4WcFho3YPxX8zut5nU6JkrNo9WYsewmdZ1Zq4jLiNhd",
  "key11": "nCq5sqQzHQnmmrBCheywu4mHAyF2VcsdHn6aakSwmPNHBqzSZXhGS2EE2ihMpEudF2kPx6DbMXQhhkFxZcjmg1A",
  "key12": "3U7FShnkR9Cu7viRMFFwJzKD4GXtpoWFErjewSZcs76bUiZeGky3xyNLfk7tv6prLazZ9FSr4yYTi2sR86JFPzQV",
  "key13": "4X52QonA3NtNgfcgZ33Y8KecnQaBQxcrcYxF75YhxUoxQqS7pdtogMSDpyS4rUndXrXJV6P9A3pk4x36nmbLMhee",
  "key14": "2dJYXfyNBxLkJczM7YC9TZ7CJGQF9sKDxf8CDrPzVPDQnJNQK2G7cy2VQ48aFDKnchDPT6AueP3qSKCF5UZBUtqn",
  "key15": "v7u9gciiU1prXjqfGvHSbVn7VmtLpTNf9Gz56kCdzzizNgB5iABNdrnN6pLeQ9kiFhpDmxHeP5hXnpTraAjTBPx",
  "key16": "4EwntY2zJzKLNiRtdMg2iK8ovg6bchAwSNUbWwMdnHDcpfy2JjNLg478XcBv5KcMV6dtVYPzPk9o2yV4brJYVx4s",
  "key17": "45pmkL4dmmABvD9geZhY5UnPCrzXWFFcb5PqEXKBJW9KmJ9uEFFRLVudQoUAHroKuKXfLiHPJAVkDwyjwTFjWMXa",
  "key18": "2esuYFhqpGammjE1FF1N9sFFg9MaEdCP61fs7K1VhNVWUamdCEA6Cm9r5otePpDumVqdQqe1TYxLmQgYGixcZ9o1",
  "key19": "3NQry3WQfQQ6Z6KxRcYiNyGoqRj3rpsGzzU3VEvU1TG2D7MgJaQFaTU4onLNX2F821QPfAf89YZ4E4NJ1hx4New5",
  "key20": "4gr7Gx75JUCnY6PPuQEWSrD5FeS3LfcmdprYDSsji1YifQmJttjyN6TCi7bB27BM2DXsA1uCR3JSJfU9LzPaByA8",
  "key21": "3rq4be92vxfgeQpdGynmYcCubfFf7imYYG8q38jQvh8PRk6Wft9bR6FDgxPE7Ut8LvME4SAP6G9qYnbLh7V3CWkS",
  "key22": "4ZRxJHMZau4BDNnFKfpoNTrPRQJj5Lc76xUD542gDF2CAwpouzd1irZx7MXEtAY8c4KuQWssEdocm1wbdibnKqdJ",
  "key23": "5eGyAYxGGHaxRpMNBPN8uHVMPxJ6R34L555z7Ktwd8xG7NnyGT6qeP171T6LQqhGa1eeivhpGJtx561HYJtvc1Ja",
  "key24": "2yTWUNok4BS5Wz6gE5xi6smSK5EqtjAkPp7dNgsDMtHcD2sauQattSnCKVxT5yPNRJ5PmXTbpJsExxjRtumDk1MR",
  "key25": "4tvweJTAoXADLFU7DH3eFsVVug4yJSQmL5pihQ35spYvj8f6nAUNKpuYfFKqNih9utPYCFYbUVNw8zBGHME5rFmG",
  "key26": "i937MbcV7tcFSqohSWBKc8siw9b3mhfFVwwJPnh2UjRxd8xFaLarwEyBE5c1EzXSicHGWBrDY7CpcG2msPWFH2w"
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
