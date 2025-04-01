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
    "2LPSx532aj9AwKAjyWqMx5EkSW1bQE715n8puKLa6eVofKbHEBt8GGciFoQGWM599v4m5SibyAhYirJhXRVMJbcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "348DUjSSGJjQYhwji9ngtzT3qyCBQSJPULcB83xjktfgXVHX3YmqpgDU4Hr6APcAR7hvdtcNncVznitdhRxVMB4p",
  "key1": "3t4cFsKBKUJf5eCFDKK5egeskJRAe9hU8RvhxPDbp95E1HRVmFXyqobR3Xzd8MDzRyWGNAMm5vV2ZZoRJzDadgxh",
  "key2": "2W3M3gonh8PPchpC9UHGjF7N4pVSZm8ZU2PhfLuB4gxnyoU68a5gf61qDKZSNsg2DxeEiMrwMm5anAVzXdckUYfP",
  "key3": "3bLQSK9UYc8o8Yq2CR2H9hybHESBhSfnvkZdoDQWagZAuVutCJLDKryRTMKBNna4KDQxACUx2d3GCFYF5ECmuoAi",
  "key4": "4NW1aHHnsxrrZpgEVD2qRVxWvUfkqQsHjZDZrYogtAoMTtmpUjzRosp6XLoZwXDz5BxtXg1MJUNYpQYPHyXirDBi",
  "key5": "5NA8hfQbpxzura413bD4bUrg3T9rjpquzMm39yowLoJJkLiza3g9L9EcwuScfABU4AyKCHUZ14g1zRj5JFaD8YsS",
  "key6": "3SBrQuGq3RsTdF8ww2qmxMtc3P2fZyNPxSRPXJ8ZNJbjqdadY5NDMfJ78VzkU3mbGqwJs9Ed9EXUEUUG8owZkrMj",
  "key7": "276d8j3G43zxg3khMrcV5yFaTMDrUGC2WfXeTrujm6acEDy3HZnsE4pZW9R5F8WdEwRkuPcx6Aq5wRqs9G4GMzsg",
  "key8": "4SVoPzqw6Kz2K3tLSKhohDiMb7vFgYLAaHSoB19iCoLrarrt7zd4mgXyWBfBjEETSn2cbJwrCtbZ7kmaRzSWpPVK",
  "key9": "mAR9haAbCgM25GQ45y6dPvq6PemeKiegib9iFb3q6RaAfwJALDZVhM88nZVZ7p2DNb3s5YkKxBry8QCWPwHgPE5",
  "key10": "2TcyxYz3N8FY9KeSb4piSb6HAFLusCyFBYUQvBbo4dYGVw6C62KHJrwE8YULer7sKspHEYutvhojmrR9U9STZ4bw",
  "key11": "5erkjr3TWAiDLwdivJA6jmCKgkRWSvWaPN1mjzCq76N6kmcwmEJE7jbCXzpPRYFZ1qum9L3VirymLy5JSTHyTe5h",
  "key12": "3ef6ofNqq4KA7KivTM3TFJpTCVUjf2XDNsvPkv5ob57a4Nuw2UfiXB8YsgdwFFiUPgDRZbfVifLSCPCPDpiiyt6J",
  "key13": "2DHXxq7vvsjaCuGfUwvQ1KsVZsnLXMcPn8wHMQ2wJqjQj2CPEeVgWGYzc6HTkhxWouRub3z4rB1sp1SY8oMSC3d9",
  "key14": "46famytGQDupD4GN9zEKHQzK6g1yxgc88rv4oK5pwUs72yFB77jxG3VCnVUnAto2n2pV35E7puAW8TjKUY2DrHS8",
  "key15": "3UK5xyaHwfN5B2ypoQjLZkmWdwiD9CTP1ZCfzmQq5WL4759F5XbMs6hXY2b4Q5SwFDtoD3WuRtvNJickkhSNCNbN",
  "key16": "2kKyntVN8YCBqCcECeybVoAcQrYYQxwECVWiabDGF6GVwMKYJHmWfknvVozvDnqyVnNeyiB6ySyFkiYYxpgx9Wjz",
  "key17": "62ScpnciSMhGzCpRiU8xb6ELNY9QpqE3Wtzsr8YE2cg2w3kYfY9C6stNes2M2bYiAPqRfMosYmX3gZdgJXQHLpt2",
  "key18": "2kEJnZhJURL4AGvVfvbmjuDMJ9PL2xfhmoMxi8f457y8QQReR7D9gPhwJ2MyEVm99gmetndgbLtw3MhSLtNV3evP",
  "key19": "2NgqSxtDbTwJ8nuKdRNBa8pH2csW9gFghsWNBqVhEZ2jsTPMEtyWPau9D6q7xS29NbrkaUhVGggF7PMPVKsHtmRe",
  "key20": "2MQzwkFBHDxCRekKPncNRZhgkVaQiHK7EchgSgb3rFoR42SDcXwfVynssqjsLCx2jtucFYCxkqqxYjK28XKe2iE2",
  "key21": "3cHMSh9Y688hy3vpoJsRJeRvyhyJYg7uYKC4Zrs2jTrNjy3dGDuC6Z9HiNj9EF4H8wa9joEYGTzFUKrNZwhguMD5",
  "key22": "4sr48UandToQDyr3xo4R1L9gC1cHSP2BHJN9WsvLFFWQL5Whdgnj3D6r5p4EH6o1RqdqyF5HeR4oMLy1FSnDvNgV",
  "key23": "4dVRs7Sq1xcctoaPNVJbgZkJXpCEVXTAtNDCp3QiQ1SbyGCX7VhgXvVmnbLFieU2apDZ7rzar8d4oWhqqu9HHags",
  "key24": "58oHL6fZQEaU7C8VXxxd5VQwh8R7c9nD2yaUQRD5wTYTj3jww4GEZ5ap8cmmv7MEVWKg3wj8sKhFUDfWpCFocYpb",
  "key25": "3Li1nGpdtFc4K6H8fhPeiGyMMm54CHvAm43rBS7PUmAySURTZpRZSFob8DTe7XuC8vU86xUvXW7Lh2msQPd4uhzz",
  "key26": "3H1Z5EtmES4h8E3hjCgkEwgjtBFQHckzL83k9fQQx76L9uaH8xS47bgMBxCWx9hPopHSobQXRbE5oyqTEAKivi2b",
  "key27": "3YnEeSPtHbnjrdudjzXBE6tc9ir6wy1fofRV15sanATx2WB8ksEdNdoTz94hvSo2o4LHYtgKeJgcfhXcsqXz6otx",
  "key28": "eBiwfDA2VNMyurQn6m5dvr911JuD2js8CCpdkF7JBBYTCsG3d4s89eSC4RuRKgciSEt3G5FchkGtC1bLkV85Rdd",
  "key29": "5FLRPZMufTJU7WoimEZFCq8Xr58MiyuXNsQDEHZ72255X59bjLL3hadCptqG2cdwF8eT4fB76mYW2Gr19xTiaiyA",
  "key30": "3m3uErs3uFkXGVg71D4jWpPE2gjfkT6c33ntbdXHThuzfHwQBpSNMhr3MNRoBvh3CF3Xu96C27rNCWVfgMDHfSqu",
  "key31": "3WR6P4nZCFF7ecmAqJ3fHWPAgG62TbgoHvm32VSrZeWDpboWBvA5x9uh7UX4EWCRKSs9tMuMkST13q1LLYvMRCbL",
  "key32": "WgHj74EvQqX5abJBdqfWMs6prGJmAAyaWL5qSTaeo3BBczym1zsAcYKuq67BEoSNrQRLfMrHgViH2dStdiZfPZD"
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
