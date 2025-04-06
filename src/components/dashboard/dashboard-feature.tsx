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
    "61kHXv83L3HQzrXYvyJp68wX7TvTor8xKGFjnEzw14JP6LccQRi7LBM85Ts7Q95GAGmvbxrsntTrWY12bXhTwXn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627VxVkaUiQuFUWVhTVCaKoFAXomhGBDoFvmMx1LTBSkz19h4vCRgGAJ5tHnwMS5kFUDfZ8fjx1NGwhkfQQJzLGx",
  "key1": "2ndnfnMrNTz6JaCF3yoBKFE3Aeh8cGV7niwW9q3iX3imHhpS4SNiAQMX6KB12JVFyv5M9RSZ8yeGCeYcYPQkXp5s",
  "key2": "51anBpwoEvRwHSDBJq5UX66RfrpgD12YZ2jj25gf388auk6qCpUQxGeCjUoMsXHaqCpXW9wfMnmzYN5cvo5nYTop",
  "key3": "4ZNzcSutz9hBwDGmuPW2DdhTEC4bajxg5NB48Gph5f1MFc9yiCnBgDt8stwmwjbidyv3APeivnzQ2PLLY5rp7CHB",
  "key4": "2TBhqaZXVCTd9f7Sy1qoYjhpEQgSCXfsywtTdEfw66p3H5KLaeHJRTdekhm9PYGZTn82gmkzJ1rnTzYZxUK1hTgN",
  "key5": "36j7FaJsKM3oshmnH7gpE5NTmpquQLrgymaMbQj3gpEbNVdUHqu6148dbiz3ySbuYYSDGX1C5trMudHCZhNF4poY",
  "key6": "2GwGeyErqcHjqStXG3xZSsrD9ighigSBv6D8KLPayChF7dswCKgbMfQh6cEeW4sVPF2F6xzGPCWGYXXxN2z4j2Vs",
  "key7": "24hoaPjy49jHWavD6DPLaaDFb5Xufu8Y9CMXE8qzDbCuCugKkDXjsbNNkgYoemMFKjRKx6sZy1UHz1w1T9AsUaTd",
  "key8": "4C3qDaDDZEgm5T2uE9cuS94j4mYBG5g9Y2yiDa1hERgnfRHtctq2K1auYAqbvmE6pBy4KCfJ1nDewxAZ7UzZFprm",
  "key9": "5njNc6KdY1dCgVYQPREveaJMqXPnvdtn9M624YvZJCD7ysnZDFxjjuuMs6oogHi2pEnywcTBbPsU8zsbFFpKYpQu",
  "key10": "4xLkejMoe5XagfAhZpiUpqLkPEwKFqWKLgLAvCe4Lay7xfUSLU58F3tx8z1APYh1hen3KgSQgXzaAyLapV1yRfRv",
  "key11": "3wAwAPHtTUDaSfNGpFe2BcAjvvfKUjrPU5UFpm2SKLVs3LKW4qsdnKvNrHQgzNYFTprsePRkVYufWX3nqZ2yhwJm",
  "key12": "2fyJ6HAm2dUyvGphP2c5ZQbV3kcFa812bfwbA9gMQKNwXVJbPtqQ9fFooGdYtbtv5D3Aruz7jxGbPmdSKVfQCWRU",
  "key13": "5CeN9kj18a34eoREna4MmfXPUoFcs6Pr7iF4LZMD8ceLurYmRj6YSE3wfPADKBUGyattnRWtCPTdPPfmkZwBuCKu",
  "key14": "3yjGHa4i78hvpTKPhdVdF3B5paed5pUEoVuWusTFt38U7TPG4yETgrMG26YDxYsodzjqmSkJd8RELSUvweGvJTMg",
  "key15": "3e2KE4BGT1GVzbFXLUt1rTxoPaftmzFMqZiKZZEwwqopMxj8t5GaVhcEyAYhJDxsy4sPE7CDVcDexgtYcoovh7i5",
  "key16": "22CpNCXyZSc8w5bUK9YXwvBNrbvnHi5nYMVWUb9u9HYYzWHFLmwpPPjKWdDdAqoNzdiCKFaaSd6NQFcy836Jxxd9",
  "key17": "5VdU3m3qmqu4cBGoxjaYAxrW3KGZWGy22Pqcb9eH93HaEw4mGAVnYSK161HzMznVaAiPQJjf9Y8Ly4pDoyiQYbAd",
  "key18": "1X4UxGikGtRCSWRox82UM8bBgGdcLJkD6RY11SLEqxuRJfagN3BJTbSR1tDY4Z9yuWXn77DikBdqi9Uxy1Zs4ED",
  "key19": "57rUzzkQXuVB4vi5GPwHuG8qnd7ZAxC4bH9WcMshqy7e8ZfhbbcREtEhWpMJ2hZQFpq9tfLzHjCh5zqKmvxYQdUx",
  "key20": "5Lf6rCdAsJUS7dvgq9fyNuiNYNmx1oK52HZ4QGc2r95jxTabjbCGbr71YQ5NdWyY9u85hygYmPRbuicqjfqUxPcQ",
  "key21": "36FfPKUSDdrt6B5KaLsNs9LpNcgLnnTDiPhnRjLdKwWWJVdV7EmrFGnrGs8wurS9eX1CYu1J5z5c2UaGSVbPwBx8",
  "key22": "5khN4HPmLscmk7S4P2XrDnF8nxgy9CQZfAhAARGSqGWiKGz1UKHRRDW2cV5mx4hpopNakzPWTXaH7EDAqWR6JXkX",
  "key23": "3dgHLuwxgwLYpT3JbZGU3RHvNgE3rnM2zUoxrKr62goMg1Yyt74i3FMBkfqMAee7NW5FXWKTQfWjBMnysBFAvX8G",
  "key24": "4SHmfThifmyXP9i6nsnV4UAmpt5dCLivFWCKHRUapwbD6WuMFz66SC5tT82Cdys4b2E3anGSshiMKuYeBiaZDE8f",
  "key25": "EvD9Q9Yo359iXjRXS6kEwn2rmr4J2kb3g9sRJU4iCoD3uhJhhHnrdgZsBx7xUnpuWLhQgE5RPxC7EL4dAkhxLrd",
  "key26": "2Zy6UshhKjzLYgXrjih4tz8L9JzWNRGJmGqvaJFivqwxGMifxhwUjzwoaxHYFYjmvkpd7u333dGpibYpaBJpB9YM",
  "key27": "2SA8uTsEe3kRGdruLGHJKckXV7HWwBRatgdDLga9GNKuUkNQzw72AbaYYcpAbfgMCSqMCfXGr2PJhy5tWpVrPg37",
  "key28": "5ty3PiUnhRZXuYkCnwx7pgxg5nadLVN99HEx5TNbxfR4gYavVkVUinAZ2TnwcbYcBv3yXfmU23wfEru8XW17D3fJ",
  "key29": "542gprZpD8jVfwG2tgjzyRFGorx8xWjEUjp2F6DYyKKP7KVN9NAA6JFiMtdbuDM1MMaY2MDYD6LkogZyb2ctedf",
  "key30": "QDpNx7s3Ld2ywzmzp3TkPJfiDjFULUBsmNaM24KwCy8SV75sEXDwrzCuz1Ka8RD47gcBJjxNYsa9snUAHMu2vhK",
  "key31": "5Xz4rUuqe6RHq74mjzyYT4vfAb7DM7y2EpVA9n72zQ92mnow8HqA9vSwoUnSc53ZQKQRyEL1poLPqhnPxM4DZC9C",
  "key32": "PAuhBFBkYsyZVRw5qDNjR4d9ryvohvngUYSBizsAtsCJWBQGGq1BN7QfcS3Z8sY9UNhDDwwgVUKD9xw2nTGTpKV",
  "key33": "5JbrHFfV1Rreo587AfMbb37PiJ93dHWAnbN8TtHRTbby7NiYVaVBrAjaTkVRgoGydiosR3Yp7H7z21Y1dZKJdipJ",
  "key34": "3tnZszRHLypoqhmbB2PVq3f6wPHunbcY9kUGsthCXakh8aUZToG9mvbuq9qkfRbwpL3jekb8kjpGTWEPvDaYeZ7f",
  "key35": "QK6Xbnzsdjtf3YGyRCWVCWMX77SGGhJZ7xgPaAqKrPD5tPVzFEoyLi9BXr6VZgcot6Mgzjp2QxdsY4s8MCssD4q",
  "key36": "3XsFAfyZmY5bbyXzFUz3v5eJDTE6xqHNTYR6YdHWWgaD7dGHkPsS6nGXQwGGS8E8gfHnnBoaTrwzbQRERxCECcYa",
  "key37": "4zNKCsi7KVD7WwXaoSCTajaJvh7ErL9ucRdkuCYuqvSm58Lz4LNxie2b1QHcLKZoKwUMQXXQXAuRRi9KGwPDheso",
  "key38": "4oQTrvmsR1aGLkbnTQtipM3kkU8Rcvtqvw73vhow8Sw22fbwSs3ngYGYwNj6r9Sx3vRu6gH4vq9bYy4qabcDwy4c",
  "key39": "55grZartAqYVteqPtkM2DXyxevm6kUaGo9yRPYboVH46FUeYRAA85Vf27bDvFUKAwaaJYRkBPCNmB6FHv6RQPKmw",
  "key40": "2rJpvMvZQp8GMgWSje7MHVsb4CtYHq7fUwcP4LLqLtMhXxnSLW9kYNotDGUKi9Fcdpgu5oiyPYc5AZFEVLrzsrw7",
  "key41": "3PgjDPCZMAWKe6ekiqF46niPgAa5G7yApYKrWr1amMx1mQitPPN4Jz1db91g3Q7CGbN2bAMU2Ap6qjJttMJcmVMZ",
  "key42": "v8uxUZ9TnW4TBPpnP3eMB5w7zG3wot4433VrEXVb3DGscGPw1vfvoBhstR9BdJf8JVxMJgsy9oK6jZNRxRMxj4o",
  "key43": "2ofry9vVtkmVSq7nHpsNgNoPgDC3FAb1QhGxyiBfCdHocbkCRMYCULGru8JLrqZmS7uBxFFypjMaVCQdC8g5oxtj",
  "key44": "268Bw5BZPFs48DvEncRKj4o4ZbLQo3x5xXRjDC499RLcb7urviGvCZ9g3rCnXQBMJ3rfhNFTpk92Yo4XAADpyWmw",
  "key45": "4xDFmM4RZg1Zhxawsu7kkCH8jYw1M9A5rPDihRLuraqBAsEknvCVSt1vsR2LidCaQKgCBJcHbvnhcFjzEkbHH234",
  "key46": "q3WrDd5diQ8CHvWU9Ysvz2wrmVCeREEPA4RKkAha5F4c1GBf8vd5ny2z1Rbe2YR4PAPG1T6HMAoDmWQZice7BoR"
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
