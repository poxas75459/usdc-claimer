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
    "5bKDCrRfk4VXMgy1W9URmq2CGj9ZPjzi22op5cg3YtsUjb5PygAJkJES3Ktyi4zzhaLgkZtBGgcxyJ8Jc81YxWSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A1EpQcLNvYzDRie51BTa4F6zezJE4BM5zs4bfKQz4Fvme9mtUcWR7R9PA27rjddqQYxtqcjPjY6byARLhh1QnUu",
  "key1": "2eVAMGv6UaCcQ9kS7qhfkmvNWd83uXCUVrtbms8KcR8N2PYXZgmxcon22YVoqELVkFavk78m1XnwwKt8xAub9Wxi",
  "key2": "3hzQYqMhUgYzdFNDfNvTJqSvQL8oMqUVMHvQRwCzjqu78reuQYnJJp147Fp7PB23EZAztUtvkEEPpvrfJLW9usAx",
  "key3": "3mVqLyxDRvV6Y2jSm4L2J2MAJH6K8QZS3tG7DTtYc6qbUzF5WpJ1nRWPgF11H8qBjtmpWeYDax5gNHciwpyBGSHY",
  "key4": "XBNNEVX47gAh9jjbWme6Q6xaNNFVFyJ3JR75MxpsYtf9gi8v4QhRofPX3mpskAAyBHsEbCNQ4X1u98KL5XFPMk6",
  "key5": "2E9WK1GSS1ASMETDNFyD64SR899e1MkZVXugYPA8Ak4pP6yDiHF4exDLEAvJUcxrqauBsgeHHex9W9BmF7Dv1ViN",
  "key6": "29hKeL11u73cnnTEKE7p3UuCop9BSwHYJaefSpgfjXu9qBSjb4HotNripvZhCrGCzCLiEdbFYbuBeTeki3KnWbcL",
  "key7": "BuGNHCfkVmPSnNHw8B8xWgXTgAgxQAfEf7N5yH4cu7Jc8hTrsLkWPZ3sqnwtai1R7rVMnnWqzDpZfWGKuvTp6WR",
  "key8": "3jM4FgFgVAKVQDSxFcyRSqp52oFvB4YGhuaHVLzj4KkXiDi4pdWhX2XJtd6Cd2G2vFzKA3cvoVu4sjx6cUxbey1z",
  "key9": "ekGJtLYgJ9hcfT2P87AXwCj3zahm5wLnaUyPB5nd4fhYyunj1GNXrDEnhAgLrBwJ9gz1jMgGFbTmcq3862MmXjX",
  "key10": "2TztoNRU27XkaZ3bSxZ3RpYcxunvTvxNG7tUzvMA7Vy1f87E8xpxryB3ihSMVxvZbKKZWhnArKBpFqkK7wPCBezX",
  "key11": "4isLyxXyzaLY6C8fUuVpuR6LNiqShjQLAKUftVCtGdzbWJxYGFJ6hkk6astf2QDh91aNJXSyMFKupfYgoGiAeNvU",
  "key12": "5nQHnEsjbV71Jq3V4bk1EPYzmLvd8MNtJaPWi3yYyzBCXw7tK1DzK44H6CJfn781ecKtrzH3HFSq9HJf1KBdKMnS",
  "key13": "66gCmYv3kaLBEQV5CyQfppyqg9EAe6Hq3V3xgHnEcuQeJqHpJfVVjRg5f2EMfYfAnQVVsYHkeGHGDjeetpkgFXhZ",
  "key14": "42dd6FdbHEbE39MEFAfCRD4WfeDjiSVpPXTutwEN3YLybQ4zuGNG7euq5G4D7zKyY778veowGpJYte1hjFELgAfu",
  "key15": "37feyPxmYPBx6YDf5Mk11K4LRPnG3sUD4NcWFn4PQkadKvMSrnkTmtLJwQRHBEJEHuSavTHERrEsaYYoLUv8dZyC",
  "key16": "dpNF7AY2CLLJBwb4DywqEZzzHaFtA6ewdF44pqT2sWGUeASrReV2BxdqN1CjUKGFHag55RXpgR79NZjEHoMYXbB",
  "key17": "21Kob7ZsfoweshtpyFQMx4oRQAMoQsjo2VQDdNhHyfdsBZBCdyb4NcW9wmisfiwttnQRDUdRfSMF2E97EcvapkA4",
  "key18": "3t6sPU9atsMtioyMSWUPXmBAJr2ETtLbRYby38z5rahTzizg9DcGCsubCXPWjyw9o9LACE99Qi5z5NTSEoPHi2JA",
  "key19": "2dbi7oSK3s1si3Xf29om39arYPCgkq755jXijLdewWBLg3uP63Q5huPLSnoK5jDGyVbYNFhJZm6uNT8mFnCxn875",
  "key20": "4K66b8xd6Da5YRbpenRBzy7Ff4bNYazqearRJ38nXNWce2JGvETQd2uPx9BzbSVGzwjgHLDeH7dm1o5iPsJSRoib",
  "key21": "5Ks4jSBuj9XNVF54TfyUTh8nSVmfYp2joJFGdGVcF3Au2CjjuwLuGzkh4f75Sb8jD9YkS4kycpPM9BbrdYdJSSUn",
  "key22": "o6nh6n7dkS8c7TNYSFGeLiiae9SpHEMomQDwTWtndQLQmej28RAHDS9RWM1tUKAF62CJZmFdR2KHJogLEwQo1qU",
  "key23": "5CRHrBUpWn6CZZfrQv2xnqbrYUSbfe35SzCDZfZCyRVE571EhsdB8oA1sLUutS9MB8H9AfnixXxjzNSf61qqo5HF",
  "key24": "47Qc6AYXeN4T7RCunBJ1vVb82GKmVUaoYd1pwAqqypaYpCEhLLWAn1jiXB4g76d66ej32jfRvZV8ouNowoQj4Ti5",
  "key25": "5qreMBZyCc3GCoFCQgvK22ATY9xFYnDyvPh2gEnacYTK34jrYer16hubuAdgQGrxGJr3KsS8eAGbMRvj5BSTgg3N",
  "key26": "JSx96jutLb3LtSyRu4mqp8taQd4KH1NKpBE4UFWxA5gvvHFjCKdamA8K8iuw6PL79kd2V2a2F9WX7KqdhKMz6M1",
  "key27": "3KrVAULy5uYdZdXdk4nbmDAJmJ3G5uuryafhaEQzgubFxBkDQeKE69qUJJjcLMgVw27q3Jc2LXgqD7YYutcfCmDG",
  "key28": "kwH1HxAmaFwRWWUMVDYDv3NJ4Cs43d4axfxd5AWpAD1TsG4Dn5RsQPiRhW1rKfKGE8PJfp7pzvA3Mb5rpMF3Fz6",
  "key29": "E5VNRMzqbvunS4NzyLJQZn3vXcm224wuXBeLp1QaXEUxykYBqyrxfvzCgwxAhKwLhJJ1ZgZv3pjQnKDGtkMjke7",
  "key30": "39rbE9ufgTQY6hd2xDw19JQqybiPZaEV7yuJ9ysEqGB1mmHYFk95MYorKYMbTXHoDEPAja6jKkB5fSinnDr4mAEY",
  "key31": "3DeN36AFiiG7Rfggv2CaedRN1ikphbLWmbXYWLTGVWDJsYBpsNXkd7KX82cRhtZLjzp76ADP8hisKb9JiiKvEggx",
  "key32": "24p2KgCF96GeZ3ZdaGkui7kxpLPUQcApLzVhjU7khiGnQSdo2tcRUy6Mkfpe1p91MGSdnrdJvVDmAcWVnff7gsC7",
  "key33": "2nD8wr3cN4Qdc7RxstY6tXRSkuQNFodz2GJRLvPH9cuGoryE2Zh6ZXCf44kfehG5e9huAcAKDAe76e8mBkKKcpAz",
  "key34": "488TiCzD5WkRiQ3hDkPXEmgLarTuCBLLpv3yEmxecZgTpz2eq2ivcAtCNQdeefewjJ3FaXMj7mb74uxcENnkoTtx",
  "key35": "5DGB24nAzWjpAxf8NxTkEBuqZSxpQjXVm8KxUWrfrry43cjLgxYRi4DWzw27wVYVixuSVZ5XZ4kYiT7cFdDFaGWT",
  "key36": "52srMvQ8ug5qAyXKWUpMH8d3fDscK3nhYjCfUmUzzp923Sg4kvs1wk1vdJF2atHvfpUAMFK7jVJXWUxA73Wdi6Lz",
  "key37": "85ksbqzAsAYLFwkdJU3Xfb7NdVRkUsn1kQb37NKRahzsccxmp2p7gPj38uSHgup8rS61tu9gYPQzLPMqQZheHh3",
  "key38": "4dvxm2aVX3o9kiHPoyVuam26iF2XUZVhKBUq8Nh8hd98Y5TreBhdqvYx8ARE3ayRGD9wgfnCroNrMEqNSdwtP7MR",
  "key39": "3TFen77HBbauQWbwdUX1HaM75XfrLfixjVgBTaon7FMfSXNz9rXGj8tyCyvMPFud7JWB1sECVX9dcpAGB2dbjaoF",
  "key40": "5nMTEq2MdAUPvyEdVJvmmS4V2S1Fydtw5vjd4isos1XFjrgwYB7tytqDGa7ZuVf24DEBY3MWSW6d6Ms4a3Q5g9M9",
  "key41": "4eDD73NKxZgRTKDK44ixbgywxS9KzDp5GTro2cQw9omLzkspDBumh2nevbDT3phfWih7wLQ4LyUWXMwukvzAS1fj"
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
