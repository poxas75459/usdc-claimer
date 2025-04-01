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
    "5v1ZtwiAaqwm9jreUojULdYnC4Xg3viJCzHRzjxLHkVFBQjH2paJmyLhCooiaZNRApTWtmwtsJoHVFaEhUAyJLsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSJNKqcQcEFTnHRNqPQFLQFUW7PANTEHrwQ9x7QGXUpAGn89VR2sHXYsgguuFpNEwd6un6VmatbcoezJC5RUGt6",
  "key1": "3vrZ8EjY3aCpiU6VY2bcV6KLzWLUbXcsYCNH7g3d7yamJVTeZBewqwq7taCAeAZeCLQqRxto2XjRj2UbzdcvNR6A",
  "key2": "2AVSGa7dSFtcsswRUaJS3Vzy3rvPSdXrTHd6UsnrqUqr8Wf5JyVcpnvU7Eo1fYLjB7bJFmN8d7SN9zbbV55aSs7F",
  "key3": "zX2P34n2yHhFPS1oeApUEDRQu7wpyxvfQuTvjZ5T2eBWqXADwn7VJf6PF7EstczJMiByEDB65mUpZnZ2fdaDX3n",
  "key4": "5pdpgbX9Sh3MKkHjsn1WfJquLDQsxCoZrExpfBysQXCQtsyho3imh7kzH3MswBBRThZVkhnM96U18g6TauZ2X3jz",
  "key5": "pLDJLCE4nK2sD7Zpag5kgJZXkv95xCRGup2itCwdrN9etSn18iKieRBbtpUv88FcQEZ7UMLwYFZUcJP3TLkfoRp",
  "key6": "tgQkypDeYMUaSg5BffpqKDbcE6VWFZCeGF1vx1rnjbS4q1x9nzYmyWnRHCyTBz72qp3J1tsjbBa8YUynKV5HUKf",
  "key7": "26SaYc6tJkiAUdqGrjRTLLdWBNGFVsJVA3LUPe8EMZHdvdLiuTzFHs7vaANvT5X9ZxVWunuDatnmrB3qoeoAS5Fh",
  "key8": "3r8KQ68SDGYD8zHTCGGjW5zV36fQo7TqJ8i2BbmFswVxTQPRDvYKcWaPAN2Da6QjMYyyFCjwdgaFcEJFiTN6rwh",
  "key9": "22hVUrozSqeDLxXCfgdKWom9oP8AztuKu3PUbUbJ5utEMVzk9TwUj28CBtEQb4DKkufFDa9bnDG1sajBhYUd6Joj",
  "key10": "3omhzrYpoSwM6Sb92RZsCGdTeeE2Z6hrBXxtDrGPdG4oGjZJi5QzsTavHWLCrisiG5u9fV7KT2f41igvYnCThkJk",
  "key11": "XZm4EjHepzmgJiqhM3atLcteoU6wP2beoPou79ZFkjvjA3vaRVPm2UL7BNeoJNyWkbeodZtwzPXkezEWSTwg8oW",
  "key12": "4QfNfWiRbEEQPtQRfnDMCwTqujLVNg3jbJXLSiNSXfwbUb5fKFTUEXvAET2KATgLyEovwFSiCjTyzn8fPonsQ9au",
  "key13": "3Xpr8tgxatN7VAWXyFDGoKobse7jFdY36Nz2y6f3G91UjzUMqzfMpeMnAh9vbGd5DXfmKBmyFpJeW7r3oHcMiqdw",
  "key14": "KpJmKVy155Z7L124TE2KtNm5CDX2XwzvV7RBnRZE9bvY9Vi9j5QopCUVssD56BHzJbb57re2poEZuuWWAh5t4iU",
  "key15": "3zimq7oSrmwzfmGs7AvvAmMtKUqG3FapUeNfVHbHeLvLakKJj3Utjy31GDcWqBbFqnBeK4xqgSNonV69MEDRRW3g",
  "key16": "4ZKHFaKg42x7YmKY1sWPDqFNzk4oEJ2FgGzPEZfFHdM5NETAZCYbC99GbrP1HbLnRuYyF7xxKh7os78xqnRjyeNX",
  "key17": "5qRbf9rXGXFMe3i1ek9MFhsKb6ooAr7NcEnKDKXmiLzp9pzjpighgVwFjbaa1reFuAjecjNcDWHuuPKDYuygnQbC",
  "key18": "ZRgjqU2czpn2uPgFNsUxLLKpySoP3KFrJwS2DfhVE62BJHA8qydBx6zcGXRiXVyQCEbg8jgK9EFGBTq8vwAgu72",
  "key19": "BGkvkGftuPufj6sFnDQhRgTXzhydj9chwJAeXSKcrxcvb1irp6WpsXjN4yb5JWk7DQb8ErNoLZC1RZRd1w6853c",
  "key20": "37k9L4csvjwTddSZzv8FeWvff9GjqLt64iacZZABsBqDtY3R1FzMpvQdUHprUwQCZokEbddxKbCwFpLTYkADzmXj",
  "key21": "51VmUQrzcnqJBpfbKtew57P5jakveuLihUcXYVFyT5DTYu7LTaT8rQEgvxXvTqDbpQqWwUizWWMdp8wdec43H7a3",
  "key22": "xebQ2QmjQEhnCb5WQgysAgmpvqfRMvisaCBpqAymBrQUUyQkRcsinXsfKfuGskzbprySCwgjaAUDvfvbAqmgXFf",
  "key23": "419cYD4N7STaEhgmEpEvLv6RpT9FgpTwPmuaAV7xmTtc2t5SzXMuaTmByiGyQ9tq1BUFY9QVARAKULbo5ZMA1H2C",
  "key24": "LpbMjMczVjykv97tBffXgA3zxycu6zeoPDxbtSNFbVJgNVFkZZaeCPLawtZ1GbSQarHLi17yQNkFk1yhvs3xyra",
  "key25": "5TWRqhrNAoBf5vzgsDVmSFNk64NWPFXMxUgkefUFvURDJ6WFKitpZWqitx8AREDYz8jTBBb39hLm7GfTaRVg877",
  "key26": "3wFCMEyR1DXahrqozKSfjyuCaorpqMTULkbTroBifjCDcbP2PGRzyPM2GxiAKtkfaKhU8A2hGwShazjFCwxfcAFA",
  "key27": "2yB2s2Kj7LWpwD7B4joghmw79W33vPGKedDjMQGGEfviuSGT24BN8f3q9KBibLtBeS3qaa9b7wcx5SbY1vx6CZP8",
  "key28": "4JCK7K6ZZ1dD5Kk85L2MiXZjZt8GPUGuEAbPWhU7Fg5ZAiU72ZzoejE1YfitiyjmhQK98pWCSfQoWban9eJacG57",
  "key29": "5Y9Wz6RYqgjKLWuAEu8DxkGKEupjujrfwpFhf8wu8dkFNE2Kp3qLqCG8BcxXFoJmSwd7M3HuJsBTRWnViM6cPppe",
  "key30": "i6ZT5KxLjKF9ciaAADcghpcvAotjeeiy3mXWbTQLH4u3DMPQjd3jYQv22so2Xjcqb8EZNT5ZGfgWrUsBUJ4bVfA",
  "key31": "2AqjsDWC4XZGuAyNcBEpX8sYBByJ8uvjc3fy92opeb5KagvCxGzhs9Fju2JBzsyXbuPVzj5Pfww16UE4bddp1iD2",
  "key32": "nug9sFd2KoRk2v3peDxPJ6r9JZRnJ9qty1pzJcLAPvv3gk8DYsG1CxaETpdhgr57J3VsokteYBEDeqjDSkdbd32",
  "key33": "55YjteRFQ82dz3uy394UMGrssMUF7eoKqoNNhjYmX9eqtSYzhtbgxZf9cMjDKfphAdb3yNxdYgAcZAcma341T87P",
  "key34": "2marnX9gDzuNR3NCdwuSKXfBNtdjDnA49UqdpQPnzGBTBh3gDxankdChQCxjngbhfHd4fytLgMzKLKa7cgjfohUi",
  "key35": "38E1ftYc8BxtPWqNhzsTmBhzr5AsfGj9fHBdTcZ5tLLuqz7FfGHfKTw3mGk9k5WUqihMEJC7CVDMHj1UqyuCJiV5"
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
