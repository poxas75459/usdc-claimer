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
    "3S5NJMhmSuFEFuJZiVi2NRE2hCETmni7ZYSaC22ZqEp8it2bN7AfvhtD5VjvkSNbzCbP7Ts35pDabC3mF515rmPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNa2pMhwkDUnzu5u3YGzZdzBqzB5RqNLXNANsHdrcZxfj2PBD3MhT2jTdiEJUDVuJEVhV6xuUZtAmgfdgLGDcN8",
  "key1": "26LSP4FB1a2MLfs7AXZ4uS6AoXAZxM1JiqBDR9Znv8najymEGUVVwFPkhT6FJD6or7NDYzjWxnYSrQK2oAJZTQ6Q",
  "key2": "4CT9hN4N19HU8KpZAL6xpX2LcmdJE58Ghp56PF2vaF6ak2ZPLC7FS7Z51SwNLuMSCUYHDBbkVs6qnwG17kMJzhUN",
  "key3": "3z7GiCm6AzWUn3Ga6d9FrJLMrbFV6gdW4L4xJUMaCmj9E9KrDMxX1ceLphvYKcdsdq3bHnXHjTHqo7amZEeE8zpD",
  "key4": "23w5dwo3N9376pp62fvTYCyqooGLUFEHAnaAbxMgyBPtFHnh1bCPYPXCL4pTzjHLvNSpTqVCH4iH5JQFsFWNo2R9",
  "key5": "okNeefHNWmhgMEnSJeHsJhE3hKy6Fsqtd7YhXmgRNDZemvMK1oQg6w67aoTJofT6dMdbdszHDFFfiEze6RQ4z89",
  "key6": "5fzTqwJfdecUfKokFycpiz6PeopFkJk4sqeLV3b7St3JZYrRNydvsfTZ86bJrBYTcwdjrVcFcAfb7airhW4fporG",
  "key7": "27ZdDdeARzxw41Xtzu6QDXPagmP14KHgN3UB5he8b31s9fNcp31DQzwjCZZ79z2pWrkVrW3tE4fdRHbQysLbDkAK",
  "key8": "26M2hLPWh6VWXx4CP3QysRksXxajS5pjL7djp4AR6jEpeHKeWEKYH5teyvL2zs3WMH7ShNhRPoRHG5ct3TPh4dSz",
  "key9": "4opVhUPQKPSnxBkfbdMTQCgK6D6jnRTAiQ7uFMfkwRhZzquAmXedAp73EdcHwaKQggUM9AkEvduV2pfBY28ugmjA",
  "key10": "43Bf8DLeLAZ9ZqxWVNBpVng6YUAB2yynhb26HMViyr5NhcMjy9LDszvbUEetjjHfhpTx61xoiLd1sWKHGjFtEKxD",
  "key11": "3MXw86jpDmDBzHC9MnjGZJi5jvgkLdaex38pFEqQWMwxe78eL1S37aY74Xc6BiUhAq9xmSVCpXTmrfzaemyoNpuY",
  "key12": "2RvZCAHbHWMgPgNVCvUZYwhuF8buesduAULb7oPMRsDUbzXn1n3Mg48i8kUN1VdWe8PhTTsazwxijmQE1WQJgfSX",
  "key13": "3josi9dBdz4j1anpg3uodEdFTnb21XCzUBRAG1BDwC4Q78F4dQj8rhYqWxkiVyS3HsboU31qnqtsEYRqCiPGUY2L",
  "key14": "4daT8SzhjR1zRzFTK4YeR3jdqdCuVQFiskq6FBw8YgSwpPyAehCPkT47YNi95kvtXifEPibdnUjAAUWcQr47FTwk",
  "key15": "5y8QGpc1jmb1mJ3p6bdtm4DyemE81zrEZbsZFncsAV7jtzFfrNCALHyN5wuMtpPMoYTDK5kjwFYKK7eePCArso2H",
  "key16": "3PXRQj37Rfhj6BjKaEj8xN49yDEXVun6MtBuHKGMTErvpLmZE12KKwJL9MtTvW5K2LS4g2C4RDvs2QJoXwutyw42",
  "key17": "33Xzgh4qiS14rq4Ty1NhDmTN3ULs3ww3EQA9NvhhUrmzj9sCdhkeKvC3v4VCQNz7pbsc2UiT12NvpSDyukVxwAW6",
  "key18": "4p7jwURdirVp63gPb8WZW1ZHBee2Fu5Bq7tWfKZWszDsSTrJekiCZV2Su94LWwdvGw4m11rqBB3Ke4quypFx4tzz",
  "key19": "3eajzYk1m77BxMJaehCzCRRymioJ7jEZZpgcmfw6f2GdZNosgxbKMBRKQD1BneX81LggJq81GfJfAFTqNCZRWgVP",
  "key20": "2EwSVp7R6EhJYptXJDS4tqUG4pe5tCN68eYKcLkQrT2BAsdV44PDDfJcuEicAxYqsDALt1v24QafScXMSUoGysoZ",
  "key21": "4dV5PeeNNFTkgLYeQiuT9zA38THV9Gc9jrxNTtyNaiYrqY8YvKNFCeHoQHiqFb7ApMzQxNs16GZZ2HBee5R1NcSq",
  "key22": "3zUmE65V1zEEHWMDbZjqWdir4HqU2beJHUvNG7K1F8hWkUgwvgqkLfFJ4zMtgtHtv9F7RT6h55GVnrARwkinia2x",
  "key23": "2Ja4UWURLfupuFBhmEhZzQXKSAkUBqysVCw219W2Uy6nZhDHZFT34QDhZ8XzMMETbH6Myw2ZB1uVeXUrfNVKzLZv",
  "key24": "42BW2VW4ZkhrfBeQ9C7Mf5f33jMjwmLgTciMCGeJd4fCMB9RMqvw1ov1fYaxj13MPyGwMyJjLBf5iQ6GxagDgQx3",
  "key25": "2Jrp9Q3qNZoMWMBfz2JFRNvDjYFQKA5AMcBvbFNHMpkudPyBVqDKNcU7PKQSZ8mBGyNh3WHCf8uPZThLowrLKZxy",
  "key26": "diLq6vQHVHJXvP6VERXdfxVUFE6gyRySQafQsovw742Ln5kB6vMyzHCpiWAZ5UVh7eS6jW4W1n55PZ6p3RZ1hbL",
  "key27": "5Vz654RDeoEpJfZ3fAn62RySG6B85pfwSW3h3rhD32B4wBrZE4SVs9hu2gxKsyLdt6bnMf4ZQwKseiKf7S6nqp6b",
  "key28": "23uwgQrngKwTAuNucYq7E417FuHsKbDBxdA3EnzRWcPqDqpEepRr7Z5hyS9i1r7CQUma2ogiiGAmMJnisqzBPa6N",
  "key29": "5toYY6cJ4ZfTY6KvBpsbaFdj3NT1rYZJwc9R1KncsX25qup6WTVJihvMSMrZ3wCyse4XSBFmrPs1MvyK5Y9xdXQv",
  "key30": "2fZWnDjMUvU46YL5BaK7FgjJcgMNHcC9H8xsSfXfDk5j1ij6JWy2bM7SdQnbgSdQnQMqTWmYHmbJRg5uK1VQhfrz",
  "key31": "5y9bvnkCm1nmgdbirvCXR8aHdVnsTFMcMP8Dbaci4YWgux2MGYhMJj7jRE2kjiAVGTjzdz3jTFwMp8W5cJLQ7SgT",
  "key32": "4a7RW9ePoQz5ExY5sdtcumReBH5JEaqDdri64xB9Tvhi9cWBSxpzXTtDLNqgrayFAzLtijm6Dy5zr4hsUf1TgCBW"
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
