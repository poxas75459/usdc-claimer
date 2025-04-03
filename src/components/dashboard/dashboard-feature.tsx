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
    "37RGQyd8fXteJKGQzWsV8ZUueCGodvWM6qLUUkiLWvJXLpYUc42U8KpoN16rZQg7N12LcXGLnt91CNm3MF9k3AZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aYuJKqCmzbjkLJScZ9EBB24Ebc6GzJtYjbh3TZ8ELaLMmPhfz5n1dZPpzASXUpSzJXATVyJVf9GzhEEpgaUpD2o",
  "key1": "59ofmEh9oYy39WpSZJY4hPyqnxa7RNQp6aV5M1eqwTc27AAeckRaoNXfpcDfLQc1nW7maJhmoQ3xB2NniiX3eWZW",
  "key2": "siYbE7X682MexhAma6ZAoWzxbsrxmvH6h55LKSPHhqrxE7pGVGCc7S45TnXVZ6ZrCrhvKgXfmx1fLyMFJe5PdAg",
  "key3": "5BdAqoPVTHYBi5dmhd6dw7uk96pnessXkFnFvevVaX9HgXDMkeNS6NAfUhUMZBSCRLp4PeyKBbr5jUZHhNDsYJNA",
  "key4": "2YsP3FkKBtzuxEifR8kfa5zUkYsV7DBwiDjDkLuhFxgFy7T16ngqcqtUPzLchk8emnFGfRzk4As6w87SAx6r5hBJ",
  "key5": "63tvZKHTMo1osFc7jn414jYVYns1Mj49bR2pMtqo2PE28C6z19Jw6Crrayzs8TxAqLyZiQnHKekaizAGqKkuHrgo",
  "key6": "cRNBqSWErRvF8paTsV8kAivDfeE9MyGguri6Z29Nm93YbZfcRCKdPeHTYpEuSQGds9WF4kKfjxyw5QsGa9WSmgf",
  "key7": "EXKnKntiRTCY7xuqdsgBjLeTDvLt3wpTekkDDqmbmduQNFX3ZGcCxbcQJu3mKFQ3bTksTrNiUAj42Jw2VNVqNUr",
  "key8": "u2Saks7hZvd9gx5yceD6ZA6woqwhrpTLnFPuu92fDaSgsP92PJkrWr14mZJSYvdYdPQYSjBCmcFPgNUx9ujyU1W",
  "key9": "RiUy5vcDWFhPfPqUKBiTZJJFnNYH9w5f7wZzGn1ZbFDpjS6MSgkTFzmnQnVsExMZgeDBQGcf2QpgFgU2VbvqWbx",
  "key10": "4sjCf4Ue1P1iTuEEApFnPkh6DXPoXEA63rPZeBxkYRHHCyJqsn6pQnev2Di1gHbVtErMdHdNRibsWKsPNzkJZCqZ",
  "key11": "3CDcGdFfoxPpMshsHjAmx7agALRwp1XyXwm7NUGJaxfDcgrN4FwnLxbju78swLoNTLFMSjgor3A69ys4npMu8147",
  "key12": "45zEJGbKju5zUbcu1wWwU49uPY2ahf99ekxCe1ouLxWmW1UPADzPCWdqBbXxz6CWfhvyYe5N37enNVB5xqv6fsfi",
  "key13": "kzStymTsZTRkiGixErS4vVg3kx3N8LjRgs6GemYhkUwMwAET13os3YkJafioTdfpUe91Yuivf29ZGVAV57LTDbr",
  "key14": "3XQaZwM8TSfby5uYRUHUoppshMBQ5JFPUjEVtyM6M1neYthEtGopR3B4Smn2gHhXkG6jASN6YT25mNgpv2wCbgVs",
  "key15": "3Un73ki7apEJySuCD57LSW9afVRQ73Luvpyp9DSmDRxM6cQTCB8wC2XQu9rwgmecaRxdVjqv4nyQ6H9Gp4rrvs6Q",
  "key16": "2fmFXJFRbiWT64UpQiQbuy8d14nWvUTiy1BaF4rQDTYMPQzXJxTcME9iNhuZNsa47hiJxZa9aT8h33hCiKpLwgk6",
  "key17": "3mZw4ReTcNwogxGYSiLa13F4jFHv4idPDu2DEZYkbx6DKF5cPR3oGqDAdqJVFAy8Qhz7Asc2qV1S9gNbtoHf75Df",
  "key18": "39g18UFETMXFJgscGhMrk2rTG17E4sb7tUgGx5pa8wuF48pMkiitBAgjpnWVM9ZMTquJt9fj3wxayeeRFmJ8eSMu",
  "key19": "211fAUpc6jRTfnNmZaAtX65MJ7ZtKebiiiWiNobRGPiQk3aTC6GirAi6BzbHrbggjgu6wTURKd6io9x954FD5NpH",
  "key20": "4YCMJageTym3U1JzceUZX1HMcKq5AmxxSXSzHPCaNu2uAYUUj47vrQj5gKwTarjgXTTwyia7cK1wcCPYQFt2rKmw",
  "key21": "46V22q5M3GWe7cC5ABfZSidv8iaBKsruBLDozz636v6Akms8hUmr2hJRppp2GqT9iV3AkRzg4bEJJQDpWVhVkGeh",
  "key22": "2fro94hpjFTrPC3nnt3oMPLU88cbXke7ghARnvWrBzRmnfULhEPKsQRK52KHmVYshZCGuo3WcsVavm8Fy3MMxEPr",
  "key23": "4QmMoeJUBifdHqng5oM2U6WeveSBRtwesWxdsLdSvZL9DWryk5iDNdXeqawVJf5iepbjBeZqjeErU7FZazKvBvh8",
  "key24": "4iHK2UQxfdXJCckrucFgp3q4BvnC8PeNToQr3LKGcSKcHAyf9U9jbC5MMYFdPdoShzjAngrkJMxjXqZiTUqB2gcB",
  "key25": "2soqj2nLWDpxjF5r7zwJhU74Zqjf3RiHPa6t7Pu5XiEGU6AemHVvehhiiar7daLD3op9w8WAsGzfMJNJFrjtVH3Z",
  "key26": "4MabTkwr1UuyfEYqBzuViCkainFYsiwFBCuWHc9nHdbnKwa3sdGMQNTapopkkjhF7sEZniVxMsborniBX8TNBvWo",
  "key27": "2ozR5kXCD7htN2EYN4aMFXUrLrUrEcytbbaBMMCnJYQdWFQTewsFnMLmDahKJUfXFCnv5ZWv5PgxuGZgzD3i9L3w",
  "key28": "2QxGuiiN3ow2gjwKLwQ3QorC6DQFgtpcgJYPF48BipqwCXfwShUAm843Lhc4QVmLFtB8ZDVhTydfry35cCaL6J92",
  "key29": "3th8Lkv1wn6zeyCb2FEmPNVS6te5L26dcfPq7wcuctVN8SyjVPsR4XW6kjCUjzRraycSE7QSJ9TCwXos3V1MMr35",
  "key30": "GrWFLosGTydCQK9bSpEiSJcDUV2qdgk717X7ZENLn784yh1hToh9Ge1Y36Nu1dZdUtWDLUkj5qc2w2x4FPe2ufd"
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
