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
    "3FfjY6Lopeo3MoRVY9QK1QVTUdUxnDxG542KuJy7fqSme7GajsAqtFSHLNuDY8YLM3h8CwYwteonasrsxJx5rKgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPNoGAX41cGq2u9EiD7fapUwDuMhAqjysBEEr5pE6aNLBpf9TBbiWaEEvhq7FVSVsnrhDMU89dWRqwaT8mBgYq7",
  "key1": "65DpqKaJqPvytz1GC8QSiSvB87b82xLtGyoCbxtQPpys6DSALpoPwSF36F7AwXfViwuwh3a2NTqqnqH34wSTy1vY",
  "key2": "3xKZZzWJ3nZ5VY3noQuc9gYxW1CBFVK3MnxF1hfLdGGZFiWNEUuF3pvnkVz8XEL6b6ZyrjN1SNWE18Y9YQhjthF5",
  "key3": "5c3ReNbfaZ7eMduxJvgSuFnhKebvy3D1gRJGcmmjc1NV4NXCkAiiyuuNhEMNu2amWY9PhTi3GDXDxJDk8vYH2fDr",
  "key4": "5CrRSXCKGW8XqWoMixtqmhcDRHWFhTet8kXRyM1Kq1cXqktYd2JjAM7LUnC5VeFANqNNBc7cb44Pcm6PtyidwYmC",
  "key5": "3ucsnYhjLYxkc8y15XQUksq7YDnjrS923Xj4foBMpoxZtYoKESp4QZbdsVC9xp9i5aZSFDEusrnjxiF44wpTuQZz",
  "key6": "4RpGUgq2z3aEyqTygyGQxoLowAvmNseLNs9cwzPw8yFA67EiDE74fDCWUWUKgbG1fyA6yasyBmEU8PGB2CdXNw7h",
  "key7": "4Jk5xed1AZtL9JmAyyec7hpPcjeXnsKTfBhiuehDRpoyQUAdFhU6KYLcWiNTU4Ts7BCEijUhkoimMcFLdsunocXX",
  "key8": "2GvWZ9wQDQxFMqnQYefeapZJaYhronxxFGYZvZoSu1xPuTmDCRJ3LsfF7VofcTgYXXrRbDUr61sBMkN5Gw1VVpuY",
  "key9": "4pPKQvqLsCWBJPencdMdjWqynWxfnDCZaodmxAxXyX5CSBsY8k3J1opUu9yPSDEgJHfbSgSqRKkicou4mjkVH9DK",
  "key10": "5H8xnYJp8vgDS4z7Jyj5arWejeTQxXhLh3AqHge2uYuNhQbu7kfHHCHLfYbTvRTCH5CfzH2PDCYizXuQrmDih4db",
  "key11": "2N5AR2wBewVGnMXqk48ie2c3V1AU8NqdZcPnZcqm15fD7vRyBtgRiySscuVjWE6GCeDBqUj8q1ifQXd7ANaUDzJS",
  "key12": "2hZgdJyszcdEu4DnqWJzPcoXYJ4BoFNxGT8sEpe3W2Ff7iRaYHggkTdeBp8A1BVyJp9SV1DESm2tD99CbxTDDwfL",
  "key13": "4gumArtpVnGqec6g1hhxELfzBk6UzdYJv9c5cQwXxcP1WLzoVHJeRuzqzfEqMPXjTuTsVbv6UvwU3GErGpvzd8EW",
  "key14": "2DCgC7XPj5nkxw8WaN55iDsnWVnoavzS4UPQtLx2Dy3iB8gxK6eaPCeWqnXHh5ypGinLLteUUjPbMzcEBdnKsJ9m",
  "key15": "3Wa5nMz1dqxbh2baSwhPwpfxLFVaZZbhbn8DHEkVbGJeuxD7gUWFDwXEbCCPydSQwAr4W3ZQM1cYD95aJC59RsSH",
  "key16": "5tYJ9PkJJp2cKtnBRWxYBSuHqgCQ2UzVs93PJAceYD7c7ksfR6dCbRqu6cbat5UaGD6nmkB914eUdfMFwcP6Axu",
  "key17": "66moH7YpPHvigeoTn4dV9s6hGc8hExP54BxG37zfwvXRfzys4GeQBd3cMBrd8kMa4dbzCvjkQWbXRhcgPbCHYt9u",
  "key18": "4ZfvrdtEaiTsoprTtmUsuxhvPjHuGBTGwumF1vetowtupHbgFTjba4bxoKwYBogS9g42JgKLAKox4kqXDCY4pKsc",
  "key19": "4gnHLU7DfDDNbbDyrfC2WBcHqUNoEj59sGdKNrcQVbkFLZnEjpkGxLzVZNHjzE8xuBBJyuQx4bFrfgeB9fNFyFaf",
  "key20": "Sj3iZmH9FjdKc8n6LvmCE1TnJo5nyy3vwkqi2uNYVLw5TpsQHUUnqvWmxyxig19FV35n5HibJBa6FE9RWfwz4V8",
  "key21": "3GLbh1rwhSJgxyQP3qFUg4xb2gKtE9tGBPBtpwB1VLg5VNCf5WcseWU8WLbxGuC3oRe6TXRhthm4V9ABnM8WytkP",
  "key22": "3kWitVkyu4Hh71G8asTxVgJuHitcnEY5rmtTUns38ifZnYKMMT7GmcrY2y6padJNXixzfU6UKP9kBWuNSv3QKWHD",
  "key23": "18FBdfZrNGwkABfYnMdybcZqwR5fTi7NxCBkx42qqttQZ2xqCZVsFxLvKcFiU11a1WcKhA8Y3F5ZCJgQNwHfbd2",
  "key24": "gESU7KNC8veCZRDyR56dUce3e5VyT6dSJ8JTiYSCd9bsc9TSyaEwNjqFFpFdAM7NbmgfdNprxAkpfF7XmTKWH1c",
  "key25": "2NqrZ4T6gHDnNTfDM6UTvTuUNbqs1U4XgywqGwAMmTLaHXiJtxFoupL6d9Fq8HT1MqyP5x9f5N4QEsegnNUhJovW",
  "key26": "2dPtybFTRQrBM7ZX5fv5trFvDb5M83NvHMFVpBb3qEEk1tia4QYv3mGqdohNrNY9JexP4bv3TAYEpBrzDjyjPMLB",
  "key27": "4BCuXsygsNQLbMbsPEKS972effmb4GwcdEDfbjwgmHyT5z8bpXiuC4n21p9WZ1AVrHurhcJFPtXB49HoUWPnwZny",
  "key28": "u11CYjckp5exN6ywAVKMHT5nL6QPYAgCvKNnr2w3V59md5rpDjbsEkEwX79cqnLnVS97b4osHJ6xpXhAEYvEXBH",
  "key29": "4sZx4S2sbnWUVw5hXMiMjzjqnzDpCUUp4ALahmYFt9RdVPRhvFm2sUQtDJ5NRMP4nx94D82GNZfY3b52eaKEABxo",
  "key30": "5sVDGenzVU3ZffQBy1YpN91PzwUxKZQFK3LNmiyhtZhDACPkxkjx14KcGdHvLvQXcJthDHfjzjiHoHDZACMjdUPC",
  "key31": "4iqhGsDLmdZfdwoheH4h27e4asKKQH1H8HNMW1LTwD3Y1Yg8hwxwBWy9EzN5DbhPVczdCodCty8VfGMAfjtN576T",
  "key32": "4mekkcWUwkoC5hLNmdo8cMKv8zftsQrCkDyPF11LwiSYCd2ccnPwwHGuLK9tekD6grRUwgELwPyjRjYjRNA1FNJ7",
  "key33": "5ddoxFDJwSi6JSxy9rMGV1xpYpveFqew7yxQD5utJ5hxX2X76na7zmW5aV1WeJTuy3Juq5rzHqj7u924Zg18yqWo",
  "key34": "aU88rSCbiQBK2HoChSJew2HdRjiy1H1BGE6BGKN1wfsCUTKrxJqmmBUzKR8JQkAD1cFMHY1HHKhrjoeUC9n3U8r",
  "key35": "35KNcu3tUP89HGszAwrsxe31CeojQtdm7x7mkqi93wiyZG3GwkMJufSfZy5iFTg3atuNz5KfCeoWtFKitK6WAYa3",
  "key36": "2LRxRkqTmWN6xXpTGzZzTFtzNhKPmrTryeQPZP4oGkus6K3S3ZW261HC3ETxXv6sXKr1CyWzT9g3qj25dHXjUjWa"
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
