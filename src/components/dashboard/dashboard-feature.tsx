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
    "xh8A8paiUqW4HJabMo9FUeps1dy3ieytJyadrv9fvM5pAMcfX25kBdJRRgSCuY73knLgqtRT4DcTb7qa9skxhuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7i2EtUdbm4xqRNshZbNh3mtQoN2BmuwnuPdjNNNGUJJwRrzA3oZdCcWtaSPzSLPhuNPiKoaxjugoz2zZHr8TGvC",
  "key1": "3TUCw3LcoX6sYZAbXHXmBKpLrE86XGBfuPX4VaVw2Q8vXEayUW8KDeXeo3K2eouTGPhZtTUoycAaHQZm2gbh3t8d",
  "key2": "4nKDrXDJpegEr9d36Z18M94kbupHg6LtZHZXmgxMx7FHXtSXhWmEHYFXpYVqs2L227MZj2zgiUsaFt9qhxLhqSLn",
  "key3": "5hVhiibT1ZcBRU5pjqTWw2B2NUK7QhZZw7ST51FnE31H53xfSAYqLhKbNNHsJcAMzMbQXaAZKoSfN29y6hyv6WjA",
  "key4": "3VnMTxUCAM24BxQaABzseky5RQg3BLoQ5Xt4p4x7Tb1gm8tc8hLNvyGfoAgh96PaBuo7tuvSZKk2p8CpFCsZBMmk",
  "key5": "42iui4mqbecwdXE6dEUK3jjrJA24iV2s74q2GQ5KT3yXMhyU4n9LhxPzhRrU3ts33stqMSWRML966QFL8CqrF8wE",
  "key6": "3RNZZkRQsGqDxa6RT3s1QxuKHK8j4ECsTbn5kK7WK24JjCCxPKTpye9aCX5MGzvjogoBiHk9HHK2pzD6upvrdeUT",
  "key7": "yWajHPFAhwHFBNnuKPvzKcFuJSwNq7g2af91KfZRqBCUiM7Rgq2AwVDAjLKx9Ntr8t6UkJzAYGgmfGPs4Z2xp5r",
  "key8": "4rhzNWPX7PnRHH3iBJFSGCKjBjpb6rJyRGmwurcyF8mnKwbGLNotx9i4BzbHSzjdN5GNoyH644DorYLPZAqYr58c",
  "key9": "4Fe4X2jKnbB9Z8ztMmY41mk5KUau461SSKDgQ6CNkJD6Wmem5PjeqHBEroJjbZGaYtWdWreP8YCC3bv8ADkca6vj",
  "key10": "4ygtQRqLGnSNson6T4uZ6ZsD9aHXLaPKArAwQ9UEhvkU5coBYJ7gTMRTj7TyXWCmRTbCXqGhnrBwgWJBgtd4tWaP",
  "key11": "58XaMKJvNA58QUCj4VHpTUEU9NbSf7cJd2i1C9QmZNoY3iUKTm2zQXNmrQiym3wDgf4oGXMajXcWDHNhXCZ1SWAr",
  "key12": "5zs2LktKcnEF6HEuVYtinTN89HjYMJ8khtAkessW4PJ5cLgcYSVGgzaaJ6ucxXY2aSgNvpWjpypsWcapsSKU8w8r",
  "key13": "5sLedSZU7EjpgnwwMmdCfaaToTJMaAhWCTGdxZnQpbjdqPpjMhNkttJyT3UgGkN3xmXczM7rfZ6uC8i7XLcZ6vvJ",
  "key14": "F8MacTz6EVMZ8YB78QDzbtcqKDLWx6S3zCLNYjbUrcBYR48kPMjAFuQwSptvx5KtkgB9RbYQEtdPi1s6kpti319",
  "key15": "m8EtKPDE69j98KHW4ndSfrH46ZZav7CqXFhiVQmdxhHmBHVkCpJLCCehcXmUGPa4wPbq9PdpaSvZBufHVFJFzY5",
  "key16": "66Mx3iacxB4g9vsVwxENN1KFEKMZdBmBxBahazQHXtFWUX4up6vRPgZs6fXJ6SMM1JhtcP7yLvkZhpV7jyBKYk2t",
  "key17": "5qKnQ1JRgefHsFUb2vjhaV4MxUwSyW1PmL6RwZ96hA46HNp8B2mZYRAAznD9gX9ZuDjcyPZmWF2VqKSYvti2QVPy",
  "key18": "5XEQN6vPYiBVp9e7atx29vgrLxX6siBWVFDPRBvzx4rjcgSFGpp12ZrVFuMdWUmDfJy37rhX8TzmfHKGimqenjLh",
  "key19": "5MxYX6EbxSj8cDUVcTNnbnt8sFftKr82zmWgBD3DDWpWoH3wNu6LpKeb35iZmcbnByGPXJHZyVoEkNZKyz84p5VA",
  "key20": "3Nc4m7h6NFYXVQGyzS4kSZVhLKHCqWnUz5fTnM5XEBVpqEuYpqjeJ2VYcr4UMEboAdEHkBKjpaTCESDYC68iZSPk",
  "key21": "127fg7nacD2kJXT1ke4aXiszKZSqcsstVzphY6n8Ch87YQam2sYSbmoVxK4rYzWqrQPNQcX2wk8Z9YcgEzJWcAUC",
  "key22": "2dNKRWWuRhgX7dumVMcNgEQ83jeWGtQkkB82j5Hjgvy61rjvsW6R493GmibDTAqtwwtkQdvR6GzvUhzareQPdgzN",
  "key23": "2d9B13aTT9ibQ78CYJvyy8YPd2Xj4hrQRZ1yd3bQ13dS1QUEf99zgynaiiVSPkB5Acn7b279axCedSvKXLoEJ7AY",
  "key24": "4mpQ1TMLm6goH9fGa84Y2kkgZjDtrBFaP3SfsFHSyiXJxMgHa8wW3RMs4ek2Y57vFWPsKRZHCzT5BP8R8FhNvdAx",
  "key25": "449akJoBAPHaidC6fXmZMGATzh5Jx1LXaG6rdy9eaD5xaZ1S75H33hp3yVqPFauBTAhnaTPxDk7SYYWVN8X9ETpe",
  "key26": "63RS7ZwsJSdR1Dc68HXazRZe1cQDUafkuJK8isT4iZfVNcKshwJx7jkvbQVmWKxmxNVn7jGi7tMp4MD7Geyjfp8G"
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
