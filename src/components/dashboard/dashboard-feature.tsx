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
    "7kcRESi11xz5YSbcqNva4EpxevtE5LeiPoZCLPLqdKhTWxadqcpmmuZCbVt6Kap1Zo2beF2VZcVPSGPEdvEwJ6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhCHTZ5cAuCFKWtutpx8b6i6w8p7c6TBrdyXsRXPJsdbj2QdCRNWEcMNuHqEgLEXQER5ToBEZaFZNY7LH2sCjpK",
  "key1": "4ia7EgThb5bsnELaW8hA4tpAVccnJfvupkEkDHa7jwU7UPFVFD5Ehg1ckhN2StB9VJciW6LRdNKLcg4nbUVKBMzn",
  "key2": "3Qje2k7fjwF27CNrHipZK6DUkEwhe3wSbAcNTSG5FV4TMFn2tNjXL3EV5Gf3Nosa2XtLsdAnXJS8fM6gYnWMBgu",
  "key3": "4S1tf1bSwy9NqCR95rpjLVNnwtqpRn9a23oZQMVkqhMfGZuhq8EoDeViBwRWWLBNn9ZiYBEY3VnXAKqH66Wg3zwo",
  "key4": "Svak6d2cVAhAr1NxJvzJAg5Pf4TYRqV7nUSb4GSoU3eti8XYoMxCeQ5ZzC1ZT4RPNx6ombQqwULtTKwFkZS3b8F",
  "key5": "57VeTihAn2CdLYtwjRG9sASoYbd8y1rxbCSAB3WXk1cmV9LBB5JwHmiS1cQevnqB91iNtLNe8fdCVJHFZwYPgzgV",
  "key6": "4ir8ZfRdNpP3HMyqgjypKjG7CkVkZq3PiZPhcyTwxYFsWcnGDBrQJ1W3qKEeYJcJ9ABns7Ley7PiK19cfA1M18zq",
  "key7": "3BZEnDmTAdzVdExyw2u43GpHDTU3C8Dz4nQDpUG8MFs2q112Kqa6oDi7BtV134n86KPMhZniwgfr4CiqzyzUXjV6",
  "key8": "3jE3zaFuHTAfgcpNQAzbwg2oMzQ9AYiGrUCuia55fJt9juxjkMVuKDVCTT8dVFwggXC4wRXxnqDPTEb7SquKTRcG",
  "key9": "5GVRtBSZxD76QJ3S1XF4PDCVifgiJ1M1dXiXZapRTP3LuBLT8AyzEfWWN4UDDxcAnaKVkdYPBmipZxKaZHio3FzL",
  "key10": "2AxRCSr9L3FaYJaXN9TpvArE4LUUTnQKbjdQvQhENQ4ZEgFXj8KyauNevsXGXy4XAwqADgWm4jhxUFCWMzw23LkE",
  "key11": "2DyDfxbvgunQWVsrLGfPykiP1zWa4qWipLpgQRzZbPbzxPw8r736i9ytEjEmbC4XSNv2T6C4WkQwNWrbQ7iS14Hb",
  "key12": "48RRqUpqo4htfiax9sJh623BiVkgSM9c9aVj7rgLZDWMMfh2eZ4AD7Tud2ZEbs4yYU1BsaUgYNY9Z6ybxCuCmkJf",
  "key13": "3JrVG6qtidiWzjgz6hoxRXA6Xmfq2FU1a6HPGX1b4tFdjUkZvtyWA9EvqiCRLpEw7VV2MzSDQgwqpwnqXsehSxyS",
  "key14": "Rdwb5eJfY83wJK86P5TV5oi9i495QxgwTGvvbNiSpvVR3mv76gwLmhxndicdbaB9CJUQTK9dJx5N1mhyYpdmFBW",
  "key15": "3WKK4NJQYDGPY79zSycbm7ByyjJSE1PmGHsHnSu6ykBxE498qbhnEo4JGD3YvkEKfcynP8rQHZ1AxsC7DZk5cGn3",
  "key16": "2dUzTmkAGQSH3wPsJEV2EhebQWVnvak64NAEQSTbNYeAoVa6SuJD8UtJj8jeFrvpwQ42FvzGZwcnztum7jqApEWc",
  "key17": "5ekjYtqArcnFSqaDQgf1i31gQ3PojdyRmpA7rPtMbbX7tQH3yHYh7ys4cWCMHSg9Jog16AXcpH6mQWMbMKMvkpRG",
  "key18": "4yWC3CZikm8vZYedScTuis1Z5zLXqwLL73t3darXZzB3HMAbW8jvvxRYvZfR8SVbDkxSMX8XGp2vrhugUyCiTRiv",
  "key19": "2oqmvajxWs3WjEjFmCRsZ3FnEHuwANaMkC3zjE89hYEjqQoSzc87X6eb6YxibdmHjj4Y5zuL6ztUQUKXgtbgYvkP",
  "key20": "49tLwncYQvBdeJPQ5qqktrwoAgU6KTPJABNNwb1n8bgAynrTnTzVKdg4eTM16yXWseXe8Gm5y28EMBPmLhcnRjic",
  "key21": "5iEeMbgADLdvENSVxm3yT7sswp9NpHHQuhkWnbuB8mUSjzEunnfoGJT6dYxFF5Nz5Pf1daRyYy74qYcgEMF7vyVi",
  "key22": "4YD1vFh8XdfAeJxsBvY7JYWfY3ykjcpAn6qkJPdA9XWCNQzW9h2x2LjKPhEw1RGKVo7HqkH2NUhg6u5zuUyXS3Q9",
  "key23": "5eRxP2xizndCGYZqJiv3GBQEo3dNJV4VV8aYcjZmXcrzk8mZEWRiU7qkXkZKh45b26TwxnvdcGuF2NhKLk8ZDiEf",
  "key24": "4RdhV2zAcGEMGsLgTB6ZVLxvawmku8FRXcajkDLBLJhaXrYLzYZvinQsjYh3gA6ck4XjBqVmjHDuaUEaxTbjJLzp",
  "key25": "2bnNy9UAP5LmHgzAnoE1MyFstpnmbTG4q1kHYi6yMqWdpb2PjjJ2Y1EVumRCKNrsBvM89MZZmSB69FwfqqdtdJmv",
  "key26": "5YPKCna3AmB51trYYgjXxmtWEH2r8Ck4CaxkPmyg6mCW7Z2FvJQPhXHdz7sDjN8wJ8QVbfWuwRcZe1nECEEe7eay",
  "key27": "2fPCVzJFLnA5Ztr15QqWBFq5AyHu45E4xFoyTVdUcsEPeq99cDq56JphbRFff7CV3tWsD7yihdNbiFuBqZPEKMgN",
  "key28": "w2MqjhWBn6FTKbE8yTaDhGVpp3ESdm3ARr6GaGmExDuYUTyHHZ4wxCpjXNjz77BZdst2MVMSz7bwHehU4tnAy2A",
  "key29": "2nTzG3boiajGbe1LCbx1g2HfcqHbToShX4gAPz8LErqvYhmgNy1SzfzZW6EdKfRVH9h58BbnaLArvaMqwPb7xpCU"
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
