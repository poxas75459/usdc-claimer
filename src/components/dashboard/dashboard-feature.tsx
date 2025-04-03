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
    "q7Ty3uex4oKjywTSjekMXd7wG1qwMRyHaQtBxdYBBQ9JMPh3tHFJoX62ojBW6ttafZeMKVUknDYmkbQmpPLRFCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vyYygGVGZXr15bJSVCwoFUT7PkS25Q3CzTHbK1WYdEva6746WpJY7VBJMz9qCoUypKv1Ad6uf64KC5eWMtWa4hu",
  "key1": "36DmwQN4vcTZ7jHLEv4LKgsQJ9xdANibrpFg6JGw7WVaCLB4mDBNhh5Tg2u2FJwh21jvWJ67nGTCro2KxDLW9BT7",
  "key2": "zquFvG6k9fUJb9ZB9BgxgsaBXbMjxXfgzDjTF5M6VnDqURPvm2rGcJX5jojM8MV3EtbPh27T8Zoyoq5Rg2hUMXC",
  "key3": "54g8ZLgKtd1FGogw45qMkGdo35bcJpM2PntM4Yk8vfrBDEPCMw5ZstL7iKsp4dEs3Dz62AYpr9NmDLEbqNwTY66E",
  "key4": "5EjvjSV7YiGFgxQEdekEVbVSzSxTx8h1VsxLT6dYxEdjfCKduJKzZSLHMyVgT1TmfgBwZ7qTXYbXEQ7KaNRjub7J",
  "key5": "SUctaiBCPw9GATi2LjyJKBUQgsoWTBco69KtbyBCFDoRNWPNjxhfAE4dWM5A5hkhJ7ManPoCDMX5vb6UmASuWxE",
  "key6": "6169k1s3jJv6Fa8qn37fASjn3inTRfEd6TbKDT6u4cmDLoqKcH916bzqif2sfTcoARMKpXcQtTjQui4hapufPZqx",
  "key7": "5Xkg6cW7eKHWhPH76b8fmSkAxKQqSQkbTtEXTNQxbZnKFeBZvZqpkS2XPcinMquo9K7euSg4iGrA1gTtu572G4ap",
  "key8": "pY9tEDnSarGXhH2ScQqoTgn5vnR4s3daXtYqTzEnksiiATzxGefuuLuNJ3hz5UywCd1CjPzgvgMkVLArcXgK1eZ",
  "key9": "4GTxRfQtduxGjdSC81xMGBcmdX6PWKvPCKsQpqtJFcQecqciRKUHJpRG4JBfgyAmVFRBhQDGkqrf19x4rdxWvSDX",
  "key10": "4HuJZnT7g68T5Zcgdj5S68XRf64UBjnLaQqF1tGg2BBsgeg9MSw9Q8kD5ifTagJfWP8kzih6rDjZSDyW9rPAMfFA",
  "key11": "YAUupvqWksL521TWuF5jqqH8PqvnLvyjT4uot4f6bJ8nAcU6NsU76uaEjTdbbsQ15MC7Hk8z19G474vGbtJC9aw",
  "key12": "N3vvCmKh2kdY6VfWCJN2pm1QSU6BGBjh3nYZbrt9cH9cZ451DvU1C7qx1rQy7Dkj3vsjPeC3fh24M23G6pgcUTb",
  "key13": "5cTzZWu4W2rcGCSsEUpxqDHLYurH7DFjLvGCJi8Dt4GibBL9fb6uhm5pbevfmcbVxPkHKEotH16u8dMXZgYphrC2",
  "key14": "5NofqG3L4ZYfW9AvxM72ZNhSmCJJqFde6F1UWQHfvB4KsJRsYUpV4dvNGHUjH33ujQ8UJhwje334q7ShvZQraG2A",
  "key15": "5zg6Dn9K7V2vLmi7DqpMVph1cozgrPSc1yQNa3rAEBXmWpXuH73DWJk6L89WiJRbVH4cQk7U7JQHsJ39ZBQKhgXs",
  "key16": "5iDccJJ7CbEf1Ck4vbFRRbtYrHkyHa4vEvHEMSB6YFbVmfSoFbm5FCGon7PYf9V3ovKTZ4P3QSoJjCdQd1xodY89",
  "key17": "A2U1KA8qf5LfhGY4ADJ82A5fZAhhYSwWTBjfpq93GjdVXdbQesi9Ronjo2cmVCJmJcFUuxFWqtpvzmYe1PTgLcE",
  "key18": "3FdVMxaudjGPpEdFcWscvd8zMGMXp7k2nHfABoXtspcs7p3GWaeyWSDhrdyZ3r2qAbwhAVBscNcGY6C1FXq6cj2W",
  "key19": "57y4uNpB9HGPXJfMZgBrUKFjKTYeAkT1tktpPCgTb48FCSwgiizpN9XHZ4sVNFodkvGsvHkfd3zJKEpcGaZc5AL",
  "key20": "gwZCyRzJGJhyajWgdhKQcdKxa3BLxoFPGWgRG5Qa3ibtXHV2Gn9jii4d37QmTLLmGt5YmznzDsqxHMaCHzwWwaf",
  "key21": "3LkDuD7y9TR2B6Pdk2oL8rvUBJjMf3KgtD8TnSGXqEDm5M4yhDicexEd9ccaCbrAgS2CpmA2YYyXMgJehsPMZoaA",
  "key22": "2gHMnRVNxa5rjZtRJSZAz5LYJ5BJTTcQUh39FExNCxXzWsY8eYvtyMtd1ztePyDT4N5mdpnohHTzcTRU5mWhSrvB",
  "key23": "qPZAH8qgvtXyZrYZFtJk7L5AuKnRCLTqzMxrnTtBqvj9hT2wq329oRYKAKCkoY5reAmN7ArsDtgoK8WS8YpQP6V",
  "key24": "3ezuQiS98MiBzYo572sU4ab4vTpC9Ag6i3YYXCFFLcGQ5vvvu6EBGmaFbKndhVGd1F6XpYPwb4tC8TtwzrAxCpPN",
  "key25": "4SCo6LstVGcgQSSrYb8ahs73RmFSrGYzF813bzn4KeA7QZSS4w493opMqV6fcXDvZiTSqnwHubS6Q7nFLyCpCQ2n",
  "key26": "5KcfB8toy8S6EefJeESKxXNYjakops37spu8qXGYq8NVPgKHXjvRjo4RpaqA17jfouYdynGa4fcLXuombMvYBAGt",
  "key27": "62URHxNxrowcQxf285KzaTrsKcQmXTKKie3brgxVTKQyqx6f2qWssKfxiw54o78NgMcTQAvLrJugqCPiAkRWA5jc",
  "key28": "2SYRpqZZRpEFesbBNKDVTZsbkd5nuyaUcP37xJ2apUqjuk8gwHPfyApTKFe48FUtSk46MQgmxv6KDvKwJNvWUGVm",
  "key29": "3Nm45qnqmSoKSbtGUJGA3MF688MzHjpxBb3Ake5cVseJm4tKmScCihKJmaAKdb4HMUpFJkCE7ETw6MMkKx5zXhxY",
  "key30": "eRkBmTMZC1f21kYWQjkh9sSbGXWE9zrar5haHVDLxsSB56A6jDBRyHJ1B4a2SWZ7A41QbAnoTHwReK79HjC3Xd4",
  "key31": "V2gyPiMpXvoBkkAjYTbz77Erct7fX3Qj6fuZVo4nFwAt9UeJW3SXaUm5eQxqgBPo77ALbS7LnzudUPtoJtBq9xh",
  "key32": "4TLXcrxB4rmadKxU7MQD2wFZ4Rx5NZPkDRFpfJiCAvo1XEN16wwYo2FHNoAFMJEUf4bTm4wGCG3u8i33ADutdQrj",
  "key33": "21mWyJZFBCHKXphtgD97noomEXpKNnnMSVBehMhCCya36DytqKPV1kjBBjGKXMBd95orJx6LfDfJUksBia9dskm2",
  "key34": "4HspcpeGKLToXVbYNuuHxcd1Qy84tyqz4GezkCB4VFLEUP9BvWt4HWmQhBccNysbLwuLATArVvqF3WeEDp4SPvrZ",
  "key35": "32Lp5yheDYca83StDUugzby5WugadKyw1cXdLDfnh8h7uK93xbiunSzJWZgA6jfFF5ZNsChB57jWk3Xbo3G6ovuo",
  "key36": "4iB1yz4vBgeKKWbivvzcZbRWnd3dCV3ksL9M9tMjdBZSVcN75x9J9UVs79i8YyYmBfgn9A6C8LiKcHCngUCzMhys",
  "key37": "26TRhWSEdpfkprWSeCMuWqidHocanZwbTwd7agtNfRLeczELUQAcTih6mdmft9rrgFGtYtZZyGe8A9Jkp6GPDjnj",
  "key38": "3My9S5nfmWFquD9FmRhyHAm3Rh7ehAwnMuyx5jitDZ7ibvPRxfmb9NGaQ7T2MohbHt8wYo9PPzr8eie2aqS2qHu6",
  "key39": "2RKmo9b3f5WVF9eS2Q5wCAKcN8Ja4oNNdcivGFnMCfGpgxwALCQA67kYzvgSNDYzyvkqszk4TVY5cEggc1pTLHQF",
  "key40": "5kiyezEeSA7kV9h6poNUJy4nd4sQk9SFngLKKSiJjngoLFrb37ueQmauyuVcw4Fm8zYVHvZFX8o7MmnNFynm6Kii",
  "key41": "4tYtyQjTsSyDuCdKAAZdDEopAk8DTVWG8E5vtygVciPWCHGpzo7fk1PovFe5GGA8iUW3Bq32Hm4E2ustSB3upjUR",
  "key42": "38DmkbLXVXWaNti8HTguQhnFRBLPUAmzDaUYRwiAhjssXGeRBAGQAcDLbEozEcHwc1dVcrhm889vKQtC2a1UPqC2",
  "key43": "5R41Tixjd64eHayZ1f5L9wKd9eRaV9qtehth4MW7hz7g6z4tvXWMMhRmbNK7ZjNSdhiDw66gJmeDbG6XiXFFUVTF",
  "key44": "52tzPmTeUwL7oxaN7ufFVu4VEzDVJePootbrTLS9zVzVaumcZpnmHRGDkEiqZWpkuxnQ8eFsNYo42iUNufjwZBq3",
  "key45": "2jkXHMJoA6CR1yHtbM8YFvQTFrr77WmaFyoFTCtMpk4ZWwvVWKhN4anpX52PnLDzJBZKAD9a9UYCLEecSM6vmWyY",
  "key46": "5YZ8zu4QaM2MoZNeYMbvTQuhuorUz8MpWvNeFJ6ucnTncNgLRCRAjoLjJi7huPz4P4nN2kHeGK6qzpgFnDu8yEcQ"
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
