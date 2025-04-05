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
    "3gS6N3gB5Us8rKNXV6b2KdmdhzdQesfNBDNRqwSuoNwkDFS7PWw7hdQ4rnMWWZzL8gmLgNN5ur7c6KWVGkv8nxfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBvf21u8TVfmFJbrC9P3W6kGXd3J5em3YGutpS3Zqj6zwek58T6MT5JiShLSwpu5e69akwLiVR5N35hwNkzj28Y",
  "key1": "4qf7jwrLqVocHDxgGRCGhNmYe25FLswU9nXYuwrbNX8DA3sVy8sAkYodwvv9khPQCeBNPgUVJRuuxmja3tAFQwbq",
  "key2": "2yjosRkq5iqBvnNg6hBxfbUUPpQUCLzfMbUHNRThE7uJ3notN4xTrGJwYUrWHyfS6ocpLaYACLkwVxEBCNbLjWUS",
  "key3": "51yMczr5vfxegGZfcio1gg1mQEmzceSaPin7SA7m2X4DxTyXaMC5MHNJqkmsa6dVMQge3NDJfnXwY5bGcsPSaeBn",
  "key4": "9tRoVVZefwZ76k3LGcEYpXGu5KxujpeDp3f4GFLUg1DfN7jcJ6eR6VknmCnFzJ1H6WVoJ2sduN2KpPmQA81sdTV",
  "key5": "5jBFVKawxd3bC7gD59NJksTidbqtuKrtHwtydEhc8KijtCTg4vXNTfA8EXrBRhcAQAPYfJdToEH1BezXsb25URdU",
  "key6": "5kmd2KJxAsq9oGZfWuxdx6FrgB1WjVgsg5FYEtcy39YRMoU4iGwX62L5pLnTQiFwYnVhgFXR9tc51YWWYmKctc4r",
  "key7": "3UdXCs4AAV8eiB8o7VAbFysMvp5mffLxZijbRTjAAMKFTZUZg4MWPwkAJFAgxcT7GBpnku7E77qeGNyfmCdwxKAZ",
  "key8": "2BNzh2wZVVDDFXZSwBs6ZPi6L4LsHM68baZC9txC2T6JiAi6R8ZGnEM4muaCTvZB1oxjyxGvc1b8qab9DdTtKW6x",
  "key9": "3HxVL1gWFQoCw5ECpc5fRhDoWnA1mJ3TW4nukcdbizbdXYSnhgRRHXZJthZKRLGUzFmXmGooxg8bVfEgaVh9z5Zv",
  "key10": "evw3ryr8PcWZ3Qdtbk1xoJvMqocpxb6bjYT7Ccjc9aVJftmvgEF9Qq8e444YggWZZi7RKnKq9mTpm28j32bhGS3",
  "key11": "23vwJktxAwwdB7wkAk9s9XRVbaRasMesPJzSf9EpssbbCLeFfBTKUTQRMkA3GcEmMqiUM39pFj6aRPYomnQAtbVP",
  "key12": "4iK393ax5ZVpLfdEZf7aWCD17NsbPRVUW6xegUb7myqJgTHL2Twdu4z17kwMULHCctv5b51X6YBNQkxzjM2ML9fj",
  "key13": "hptrNCEGvFYA6hSMWnzRrHFAXk1ECsbvmtwUB3bvZj21ZNGmjAr8zdM4cBCo2BhsDwZp6iYf6JrV24RrDY5yq3j",
  "key14": "3Tmid5gtMsaTSFsuGgwKxgMznt5LDLdkPUGo1gCTUuNRaXrZ3ign1YDUPjSwapP4YNTxupKnsT18E56h8i14saK3",
  "key15": "5VniSp9VHC3DiPQQJi269YUsp9CkNM7d9DDMCxypCBAWzAZCnnaDGvKcdpCixswQihCj5f23mSnjjmmZJKupvbP9",
  "key16": "NfVjhrCnaeymXJab8XpUNGQW4MEmEtbYPtRvXNrKi1uJptqhsRfeCnmBuWsbTbdU7GfossYjNwt99GQSj1NKUtT",
  "key17": "4qiyhycky2J28m1JJpq9urFJNPbyRUd8UeQFsQEvFZxFnsDkqhgSvjKhapfK1kPqQ6qXtqkjCYzLVhi6R3evKcDV",
  "key18": "ZXSJKf4hx5iJK4gnbqLMfnYkst8z4aKAHXXMGC3StYWYwihuHL1kjbw6VjHX7NmQzMmdgmg3FJJSBqqJFEmpLFQ",
  "key19": "5N2sDRqSc3ET917ANeqdN2DkPPr5AYabJ88VzhCTt8vu74pdFznLdGMewGKsLHwnGMQ7QFg7ZDeKHkVDuhj9j61D",
  "key20": "5S4xwAUWVgdqkYYWrdQPKUMFcoVKVBxCbLXjFwT9TExhYLJMECCAV78tcpumraQtDmhYwvjUqbPjmNKHh1bQH7qm",
  "key21": "2wePffhYcWRmZse283bWgfY6sYCK6dp3hinmhxKiiaze7admfF1XCEGpjT8xv7XDBRNGTijP7TKJdyGqUWMJ8o9v",
  "key22": "QsGy8VGLMHXNxVQWzrP9egVfPYHtYKbZt2LNFQwDgDjnk5faDJ8AGKnrcZYNFDH1ULaAAz394CuCRhwziqdUvxn",
  "key23": "3Hwhq3GUhYhKP6bxD7WXEqwQPo5Rir2UrWom1fxpJj5oR3RttvBt56AVzjd4Qo9q3fNhuYTMhomGXvU2hWZsdmZa",
  "key24": "5uWRwBxFgaJpVjsbRekaZmeD4BrsAnmR7hnJkPXj9ESvmqNqAV58fq6XVadMRc17c9mWhgpchx5Lgo7JcUQJMxk3",
  "key25": "ghUhoU9xKCfkdsq7TJ9KHeSH4LSNieTMqP4DtrXPzgcuEoReoFnExYmwUP9HwmnHCbD8zbQ6x7Fe88FZgXBDE7E",
  "key26": "7GyLSzs9dpBokJDA4RWJ5Ef8WjE67Xw5jr6QWA4RwrD7PzGs8kuKXybw1tZBDEvwQU9nVuLv7RrLDSXS1XUJvhP",
  "key27": "5WXesSD87C5p38HHLVGp8F36QxfSeZbFUqwiPXi9gNuTgKCL6iHMRC5soaAnvyL5DBiHMKXtWfJqL48j6459VCx5"
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
