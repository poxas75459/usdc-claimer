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
    "2eTsgYZD6rTmDoKL1zmzaNtYvAqiPg1Gs7K2JW2nGUamGt7tbCtZHXdMNcCVAWHXWErmBa78QQpCxzk3JuiveHx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7F67dUB2Axv5Akq9BDKV6xiwvb13NU1suH647xQDFgy6uiJD16nBWMqVZWYGRK9iXhev2mXwuykjgbQr3aXea2q",
  "key1": "3JDjqvMeutKgC4h2Cv5deLQwkX2MT7BukC7TadQsW6GzXNbipdDNf7kgTX2wx5PtTZ6Am9GUuKncxJuvQ88VxFVM",
  "key2": "3sjHDpoUNZvEGxfJEGyPbbA7WzeaL5cGKGMtHstWFwghi1geB8sb9NKhy3jEfJeFUaCM4bQAQUANQDjnPy6Ab1Zp",
  "key3": "5HBjk9mqg3gbqAsfFAAbxynKF2ZFkV7GHe2vsnPq2Ta44jzZnkpLjm5ARi55nxkPLr21GAm59B9N2FGgWfsfXc9E",
  "key4": "kbRS12kKQAJPxVXvHP2YJRfNFWSUAqonAdvuZW4fBJS5b2Jf1m1EWKW9oPt28CGU6ij65DoofddjVUgaRQNHppc",
  "key5": "3psBUZX7ARScWExGjtN52BHqmjURuN6JpkHr2eY6j4PRCYMFDf5HbHaFx3o5aWpEM2gKtXyP8d5h9xsWTWRpYPeR",
  "key6": "5pVWNqzv76C3sbkesBNsLv8vuPhty47GoyYw2ifGPEJ1GQ82ehmrUGwgxDV3XTXjRSjWA9obL9Cv1fkNfeD7n3Jx",
  "key7": "2vJLWNqiNvrCVbwgFVi5oqBsW8gugefRqv2mGb9YQpNdCdu9d1g5qJ322EjMrHDbrQGWeDKLuhWQ1WzN8n9GoYQf",
  "key8": "4E99dWz6qwiLPNoBMRnhtDkdkAuLce9vbgcWTB6sCUXgkAipu9WtXnbqcp6nN3LwxnusSriPFuqoDRctiCbrRAKr",
  "key9": "4en6DN5BornVNbuh9cPM9xfvWcQzWzHxWEKLd4xoirMFhhw4CKLJYjdWbxUPvA3yEXvBqXJTeSpF2M6PiucoyANK",
  "key10": "2nbpSd1tw54mik9cEm6gMi67qHs1huaFimh8HxmBPvdrk1rgorL4DbodZrpDmRkBF3XpaUUXRqihW4g1GMybucsw",
  "key11": "55ejmaKT3db8bHvFx6KLSHU4PWAKytZ7uayMHf6oSYv6Ss8adFzJ2MhsfFZwqnVGvKCN24g4V4oL4u96M9KtMYkQ",
  "key12": "4ZKCQwLEocbYXgzu4gCRWGZHRqURWbFEwWSAZRQsjo54R4pT4DoYM3Y1ds5Yqrfd9DyAe78bDFi5VTfvjuW5y7zx",
  "key13": "4E4dtBXBS7VNvXYDSfTe9gpBLbPnaAxLkZ8FH3SrmeSMPePpgzqE9UX6HRbyv19b6yoYurzLnGBMxCUTHcfPJP64",
  "key14": "vb1gJn7VUY7NjbhJTMEjc9PMWsNjRqtZ1tVxXM4dh6Kys1ev8W17yBWeqYyoV2ZeUPVMmkBtivyxJ6eXhPfvW2S",
  "key15": "3VFTgdrUJojSDD1CuRP5oB5nRmBQZjPhgNfXZitLgT8zfKdQiMyCroMK6corbfgqUg3NCsM3eD5pX6CeqtxkLTK2",
  "key16": "55UW4EgPFzW34x6f8h3ebSiQ8WjifxwDnB2jdeUTjUnhzVXhK47ExVTke6UUCUCyFM53NnnMpjL7EoJN9vxMvnVT",
  "key17": "125nw6zTSwWf5ZnLF43LBtXwdyHx5LDPtebhRpG2uKgc95YRrC3LXrUPZr71eiRVYhMLuHgz4Ws72v3dp4EsXMrE",
  "key18": "668xrfvTxNDrxPQPmDfp9BKJRv1bP8xXhBLLQLQ8ugMboWABy8v6LMM7jmpaazvNh98tccXSDk5isfYqjuGsgDJ9",
  "key19": "2NCSyPsB5xKj7yYECV1hRKYaFqq2qAKYNE2KsjcBYBhbJc5CD2dvSS3wWj5S3U32y7aUdbcGui9STVe2Utyq4w2Q",
  "key20": "4t6EjWzk8R6qMGRchfSfzbHBvLEnAaaN9Qg3xiB2frAyCkWKCqvu4XyqZ3trsZPAu9pXxTqumwML4wP357yb2qeM",
  "key21": "3N8HkwMydr1cuFZctpdkSXsAw6XHdv1vqVMKBsjwYo7hAMak6w3G2V7mu945jZ36erB4gpa1bVrmEC3pHpoGfKnv",
  "key22": "4e9AFdiNEf5AnFDoQiVCXE5TnDTgKSYU9JjdR5jjbPGnMDziL4xfwfWQtyiTnYpFrtETNGWN4UfNrpydueZVvPmh",
  "key23": "2FVvmwQvVMQkkJFJmD6kRpwew1bsWgpJhqtqYwuW6kTuWumcPJtEJxP5LEydehztvHLZcVt7p6VAiSgZZWiz38eS",
  "key24": "3J45wXfYNgBTgG45ZGRY6YRtTzouMdRh33XwL7qksYubv6UthTtQdAVp23ddyzjbH2rk6XG6tyX61C7srqdN7Q73",
  "key25": "5tAv7DT7MFpeSjysjQX7oq7aLpbzosmwrirGzgnKDu3DqYwuqzWC3GShfDhYxCfGFQtQHrAReBsHyWEbpB9fV37h",
  "key26": "U2z6Gy55wPTzDce3Mamvjbjkg92HfjaEtg2a1BmGrcpcTpPwZYwvYmvBiGLQACXm4Mu1SYWC6iix8DJ1p8B9bKH",
  "key27": "4JkyXoS1BYuEr7uyzZhNvHBPJNH764A74AEotTbPAarReBmxKRskTuWDcWMAGdfmMj8YYiAoxYfbvkU7dLFvRGnF",
  "key28": "3JuDEPRAhaEv3mdznnEjki8TNMj2ZYby9DsavaRXtmA5iaGDiFjyaJY8AXzqBc49obY836zbsqFVe3HUF7kZEt4S",
  "key29": "4r4tDM6xhUMCzyh9rP1EpRZp1cMuoAiatghcXPviFbvKtKWxGAvYaueRmyt2vXwQD2RxWRXJ19NLWwQXHPvu2C2y",
  "key30": "ivuVB1nuU5RGzUSQHofyQmcqJXFh1zADSaDM9ALapVumSVTp7B1iGarBH2i6u8SkKyFhoMZZ1ob4AbrGeu9vvuo",
  "key31": "4NEkA6MFPP2S9ux44xDyZdzYLyqNdjCrxeB76tA242NWQ27zuwMzPcyWBaU3YaS2zdy6PwS4xdnXFQNvo3Hw6dwh",
  "key32": "5t1w8QXqcFRvbu3TC6b7CtW15Bczydzgqfpru7MUsdGrxR4Bxiy8ohLjEmuLDPwTmtjszKM98qej5t3HrDFsw7k3"
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
