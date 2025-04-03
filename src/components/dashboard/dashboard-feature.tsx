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
    "5PRriwqaRfUE6sUMiYJKSCTFbJXaPcaAbP56kPPhKXKmVw3sWNE3K4pVzsZ4ajersjQ5CAbjefgpcPZKUaJw4cXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpp45UMc98eKTFXA5LPAo1VBgGyHtj4TBNwAv38k2pcci92D5gxttZdWZFd44izUuwh7jDERELQ2M5wFyyKhcWF",
  "key1": "3Hcv7RzY2A6StUfCevCBACxqd8uxukGqQfDNFUph62LDxfLSnsWqnjsqWi8XH4LNs1UZiMBttWjEeD4hv3Hx5BN9",
  "key2": "353SPMWY8EKGS1oaTHFGs3jNZ2sWFoGYVwYKGNijskJEf8UN7jrGibbuVSs1ygiGp1sWrnGKJgPE63qe9Ujh9Ywa",
  "key3": "212sGu9qx9S92yFfgfK58Rv73wbwtmfMaJEQU8Y9EueHCwfsJWLMSFvk4RyYWDMv2VAxuTP5qiHjjUKVJifxJUkK",
  "key4": "D8gRdpERDbXtB7kZnwuYgHBD3sYTwLH7d1DA1VzBcf1uj71tzkXFAhALTEZCD8c6uHUqGaUhTdg2iqYhPfRiywR",
  "key5": "2kN1GLRLkHgLgsgaa4XXwCdWaaVKH4XBvSP4UVA4WjbpMTBB3JfCEpkRiGYzkLTeZScqAVDssi5DPu29SgHjivL3",
  "key6": "5JiF95wD4rSogqqZD936fgsKrwCWEKf2AhbUzWQyR4LMDNvGAs7zNzMmtFDDsJbPHdtb4e9Fh8u12ZKdMMtujBRV",
  "key7": "dazA6bs3whXsv8yUdZq89VpwzeMdr16vrUy8jPYqYHsuTKtPxj2L56oUJ4qKsL8GQ3xc4n9KvyoeJrvwEkG7cYs",
  "key8": "26rAR1K3VtWoBLamUBLiG8ghRSPpxRvm7gku1iATjB3KAnTq14qthZDLUSV4SW7HRw1YSnZjcdEX48vX2CUKdL8q",
  "key9": "rsVqaC9iesmem848AcRhCazcEeDe6h831LAZ9Vqj8GJcynTGsgkR6ffKk7gK69NHwWsCY2HYLkMb8wH4QYHGVwn",
  "key10": "511C6VrWm6ULJ7y77Qosn1nU4yTjed8xnkBSEvGbHRwEgs9xjpFmzxdnp3GVN3D7QCWS1PqECjtnQndyjtC6CzrY",
  "key11": "4yDD5NHCRm7dDBriS57HRUxc85i441m3TmNBycGA53X2hSuTfSyETCBwUv3jvRrwg1bR1dvPaZ1PB5TLoa9ZqoU8",
  "key12": "2kfKCoRvqqLHLUwk8fqRupPNNCbt1fvQDh6UYAtuA358sM9cQEHyVaUNSHy9o14E5P1fgNyCLCiPmkRgG7hRfn9n",
  "key13": "xd4AYaE4GbVFpPBsCe2vpEEzsXNQTi1KDGLQnaWgdpbjULmp7GxC1DTpyBgRRGym1u3QYrhPkDCeEx2vBEn1VBA",
  "key14": "46PZRhpmpzSeB3Euuoyag5PZDUseQWSMmhpK9ErvB6K3RMA8RnjC4G8wXfLVoMh1w3gUaBahEsEdvLmHUWsxYNou",
  "key15": "2v7Q21s7QbTWDDL84vm3fxA24UJtBZAcL1a22ZDsQCLQwfYDKa1q1gCy9sZfsEa4KCSuEZ7rexwSqzpc2i7Tnh8B",
  "key16": "3qG5VSy9AwyLr82MLrPvdyFuprjBrMNdbtGabx3ETXiPk7AuA4z6VsAFawVZk3Q8p5kEM4tsKLz12X4h7FJ7bcaJ",
  "key17": "2zTAYqWJvWSA71CEZac3RukzEXhNDxCp9duVZ4fDfYxe4CrkMWD5D5muZJ2uddP7699gSHX6CRSFNNzxY7XohH6Z",
  "key18": "3YT2FQ6b4UT7YmBFeG5LBmBav61RNacjvVLzBkZxDmwq9245xfMvhfMAya6i8s8xwgaogAqXqBvbAKdWR9DKwM6N",
  "key19": "4DwvMhMwFEhHpdCkNVmgwHqP8HoUpdncuknAtTJQjnwAd61PBnMzJ3cyP3F7YwCzAypeX6ZUv7t6chxRhsjnovFr",
  "key20": "2LG648TjE239tKgoWd7Gbu45uJc5Qknmn9DBd6r7WX5MWvjw9xciBZ7rQeqV3d1znfajkudMgCR66NCYwJLpZYa4",
  "key21": "3g1oCB39dVzXPu33RGLbbfLUx4i5NC3gBvaRbwfEehD4kavPCSQfVkWvQu89xU2eVUMsmTWUpAbXzHzbYigNp7Fq",
  "key22": "54MewmfpZ8t4rTyCfFPm8MKGZN4utz3S9qDv62ZGL5aXc1ujhV5GPp9Ad8pqmAH2x4pF5BLMZj1kteAK2Yec3j4W",
  "key23": "33tvjtXxHm9CJdPjXXvRDRxKkgTE6rNp7fhAHR2HMzhrXTBXBzJLCUSy96hC8wgMxx2sJ8yVJKDUxuoXugwxhoDk",
  "key24": "2hBvDyocrev2v12koiBCrdBhUD4aBMh7qrtCnz3KoDanDZo3UNWWKVatvq7C6uAfyuN9GuUVMKZBHkFSPv3F3Uw5",
  "key25": "5fz4HPM6N26LhMQsis5tSL3D8ws1nvznNPvmBqfCw2noLL8UBSXKq7FutVcwhhdhmjzhU58Qe69wktihEnEvu7Fi",
  "key26": "g8gF6T3HnuCckRZqfJBdz3pzE5sndjUhdFMoVLqBmfvfk8VT5zRZwLSp5hb4Uiqdm5unrHf1bfq45Uwd9MU4ia6",
  "key27": "2DPNocUao5i6wRxiVZVjTmZFqF94PnccFLyRptGSWPomsCZizvaDkrspUSVA8tbVBnvAhqj5V4ekSM15zEcS3Xk1",
  "key28": "4qG6eeAGtopqAsmV3BTYLetXbxfUtjrXteQnZDCLFrZFN2ZgvYfsfqggvQpG2Xb5NmF9KsCe8YVUeg2mN2HWJqFu",
  "key29": "61PTrAqYYQNQ9JP7mmmW4zHKxzyGMvRx9SrZzLQYxkHJyzDQ5QNfh7NZEBAitYKZNoLMowzKrgzBupA4He1FDQRy",
  "key30": "34NsMxeN3RiP7srjuokDXEBkLpJCEqNzNEmEVo85BuQVxH4BfxJrGvPbiz5JmhXFTDtnmXE7skHSEFxYTzifBuGW",
  "key31": "2GwTf1mkMSHZf5MgMexW91kbKNYGGCN8K7PEAG4FZiMFmgGXyrfz92QbWtoN4Bv7NPQwSj9AgJWQTgwe54VDyzN1",
  "key32": "24VVdfoeChASMuH9txiZjKatgRqRM7i8xutthnwJysgxzLSt54HaVmMK3wqokJ3HomzqBLoSGvUTAgY5J7ZwzFLe",
  "key33": "2EooKGG24xDPA9Aw2KUSMwxcbCdQEnt7rkV1ebNy2PADHRtmUyvPdJK5vC7M97P1YmnFTtzy9MNLUb35KCUm8S6k"
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
