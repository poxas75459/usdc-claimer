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
    "2ujLrhZn3fAxCMoT3tbMNYQkvG44EG9A5CwQ2K4sWsT9CTUn3KMW1DPGMndXiWVViCG9qMfNkrM8XTfiQdnNKLQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54eRX2kYKGW5nSjRxcj8f7yYtNhCmuNja2rv7NDZZBcnecCTFDfGZbazSSdRFpvZX7EnBrVV9cbuUw7K7YyFRGGp",
  "key1": "3w57yNHQijXpSEHVHkpMpcMJcicJaDqBioQXHVvRYpNNZJbCKvtkU9CH9wHdu9fEDhaastaTa9sQaHQTLVsdEG1c",
  "key2": "662JF7RKKXKJRNPUhVHqHBdw6sNJf6FPfyYPKA7cewHbLy8rPJ1eqSk4D4MkAdFipNNwLMHqHv8vvz9bMLxy5PT5",
  "key3": "2f5k4S2enGavZneQ56GTVwaERkjFL2nqGwkVvkDPMrXBXqKaDXf4ZHSAb3VLvoHu71SV8siSmUhtNxn2Bgn4xfhg",
  "key4": "3d27sEoixQyqwXs97VVo5A47rMMwfGZDpfEBj7XVawsokNKTWiCFLf85fnuHnbbPqXHMpa2vKGvSvkYi1s7FCiGA",
  "key5": "4U62qhKKuMjSA8ZGE9uX46LbKstDYfV5psmN22wXhS6dHJ2T9Lta85CuGQpRy1d7hPReL8g41tZjq9T9U9sqVca3",
  "key6": "49SAWPtTA6szRjrhCXc1rNuJPsCyX5D8kKUj7Rwp22DpP6rEZWd5Nk5EmKbWM4FGQUbUzqYT1AwyJg4o1enCcp9A",
  "key7": "2XQPc1LX23qZLr7EeeAxx82XvaAJJzp7HUVwsdC74R7xPzsJhATTh2BuMd3E7ppc2uEsv37p7BtU13MFZViUZgMb",
  "key8": "uHNcE43TH99vPKixAmHmfTvcEWdp96zdFiu8dZc73rD2NhKhV84XvPXk1dDstGuKVw4rMxXw2Y53HEoHH8zr9N1",
  "key9": "5AmDnMkqFKGFba5cgjHiccgaRa7eS2ut9czWdHj65sGySVHBkWR4259Cr6U5CvNCy6NaZMLNpWg3UbiaUBX52jWt",
  "key10": "5hp4qBcD87gGG3RZRwaVfdgfAHpgE3KQA6hYwX9Den3yn1FxzR5VoYMyewCWUQpqpu37CVSuFiDY4jBfeEzwNm6e",
  "key11": "Kwq69puTv9q8FkuN2s3ynWP6wrvdM61HdfKgnPyiQ72CgHtUUY5ofZK7JwYQFhAC39KYMvMwwvtujnu8No6z2TS",
  "key12": "5ifTqnbjDxuyCoAAWgh9b7t1869Kxo3gRzMyaGSiya2RC8Wc5V5TcfcPoXdziWqB8JYcEDbHM24d3E6LkZNqGAKA",
  "key13": "4NUMWDkKLS1VW9f8PGnYBUE3rkMRTkbSfDBitEHcLp497hxvJBSF8HMBKxykQcH7zymWAK1D8DUHyzAN1q5RpYDd",
  "key14": "5JuFe6jpUoANdr5sxaa2z7fBByaGSWUKiLGEbTviafHXj1doA6NA9LqkHYPkavEc6SWG87bu2hXkGUb7mYVUpJdw",
  "key15": "3Kg8DPUWhUaWx7AUDZeYH4ztDukJ1pZGG9vauzXoqC5tPTyYyLAx4oCPAdDXCFk9yzz26mby5mfjpNK2BtQqBLt5",
  "key16": "5ck199misMtYvhR8zbXm287WF2Riokz3o9LpkVeQNDb19RoBhjW37zNngim5Xc3Lz9FCbiMWn37cJe7K1d5emPjg",
  "key17": "5sy9pk1CNoKrJDC8oet6xoFvUVeGzNs6RdLN2etyosJMRb2EHjuWLov97Qtugo5xs4GXTfFQvTXkwNoncuBAMdqd",
  "key18": "5TAiPhSobkjwG6NWJmGEqrmZCFBebG3Qq3hz8EQ9CU7RSdN7tNwAVQX7VZu12RYiNeZgo2UC2SVxJwJkQ9zqyMnB",
  "key19": "3vgnoLk7Mw3gW8MNduVkoVYLrxhUxeMWPrg7ZBVt3veW11Hj3TtbiuKgtQpFkyK5ZeVWeUkK8WDcKHcDqvFHbWQn",
  "key20": "3mtB3JpLWNK9XcZ1CtBz2GCFTjCSRV7c5DwzwZ6145vuKuEXouCzWk7h558vp3tkCFvPSvKJsK2TRyxfMKRXdV8D",
  "key21": "PRH8oV6dUVCHspTHx3HJJwfZeBYVc58aDeq1LT19i1xoTyhJKkW5fngMed1SeBowufmqFvVrPRE6GfgWQxpqDzd",
  "key22": "4xHKQBYcCFPzVc2TxTJ5ynQQ5cfk4bVUhDK8nxv12cRf3UDipynV2H7B9QfbbercXaRvh6TEDk6ABZMMufg6gEqJ",
  "key23": "5B3pHzTWoWgGQdoZpU1ajPyX24XhzbCbpTkNX5dzu7Aego23W6hDTFRvReKWotGV3ypBxasgxEf8TguS7ZTavWV4",
  "key24": "5qbFG6Gc7iraQhQ3W57udE589sKsUb9N25KEPVXiceSZjK6AqLwCg8LcLA16mueT7FU4hKL5nhWwBn6NW1FYbtM6",
  "key25": "2E1DXMZC8HD1qzqEAcVJbDNNRAey2GauXC95Vq7JPxNwcaR8ixjtHJdQdUqHBoWUWEwskEV2pTwddYgWZoyvMvnV",
  "key26": "4sU83a6TguY6i594WCDrXKkb73YQmMUHHAewPEw7fVkEippNC9RA7LNDbtC6SrdG4SUXWSuxjQhmt9Hbg7D9bKVq",
  "key27": "QpZBgnRZjPdTKtYPceKzYbh76ig2w87UHdfE1UvSZ6Xsu5byEJYETpqrHCBmzwfEAbrw4Ca7t9UDr4avSrd1Djs",
  "key28": "2TucArLoFuBKpifpueWAA2MkW1qaYvWpJRY51aQxies6xfLv63gpASMFy9X3SeZQGKChLJ7XWqfgySfmYkm4S7C",
  "key29": "2kcQPDokges5aykyQapuAnwuG4gDojp1BrJzzAxM9v48qBEr1sjFrfDs4KvxSvegnibJYdVZWeLktfdEQcJVBGSK",
  "key30": "4bYeMDcjQK2epBgd9tLP5prx8684YN1v6giGrLvMw18yqPR3BJE7iyTdMw21ATGwuTUnkEnnteZu6MW8oPHDrtTx",
  "key31": "5H9xJ6TTrp6tPZ1uxdaq21j7G8yQxVjS3rtiQeCpdiKc6XYmtbSdpJQeSE6DXqe9t2og6aNaxzUnMrBBT8J4LXLG",
  "key32": "5ExnLcra6gsVvfYNCBbgmQ5ynCBVEHDYMpqz4su6A4oXhbHQggoWtka6mwArTc96dVcd4rfRrwxH6Fe3WncTEi5K",
  "key33": "eigMMrkfEiruXGd19JCqujVgRngNYHyrVZ4D4KEUb7PAGDJkGCT1SV84zKVyHHXJkEhrKbEBnhnsJ96unE4oonm",
  "key34": "5K1aEtaeUV1onHPypn5kQKrrZLgBEz5eQyjGBYt7bTAdgkJS4rDdA4RkDmn1XAcEWZ7fxRYhhN2HjkGs66yNn2mn",
  "key35": "3zGop4o8HzRcpDQqxuS3ABios9NnoFBGaQysqQx2e9ZyEq48c7vLXCTiFKCf9X2UhetqgAvTCF57SjG1Hybq9yrL",
  "key36": "5XvQRB3QxVNiZUGiEsbDmxEBAhA3T73Venis4wuSGJe2cuQLbrvCN3r5Grk96eQW1Gf2HvT4sU1oAdW6qQ63eMtE",
  "key37": "XyG1HVN8DL78Cz2yCQQe7bzG8UHzE5ix3Ux3LT8MKsXzVzEtDazzo1EsMHdMujtmpW42iRjQY7iNfDmNLbXdTCq",
  "key38": "5ddAH4PLTsdwYqa1Z5RvAQeVtVPPg1DGtZmv77xzNDs2AURaNAG6cu1c34pNmwZCMCdHMZ76NsXMZKetbr8KUvCp",
  "key39": "4znWdRaTX3VURms6qt3VgstuvQ6QEWZJ8moDeidTQDuDbD1Y1PY4ATALkBbZB3PoVqnHPbACVkAMQdv8F2pVxJy7",
  "key40": "9vmGyGBM6diNN1DNskfikejcsb2oK3w81kRkZ9pn73m1BjTAwqHjpKPedmsJvTjGpm2azizC3tBgnw2ygQM7bVU",
  "key41": "SBT5nvkoJk6RnKMoAfUUuY8zU2X9LrzMuSn7hicjegskqMjzLJUoPgNjXcXgHYZY6N4tFa2WvdEiDC4bhva9BAn"
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
