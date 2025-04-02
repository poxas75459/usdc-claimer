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
    "2HZLMjcCH5CVRu5TQvtM4qgwpv3XwwbbWLAi1iPjcboJDTfYnm71u6zkrSLnHccAygkm5buawaqHSKHFxdFLNUs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eiAhueE7kgaNGEowPxPjp4jjczZEviaJ8TpwQmhxe1qZ1PWHiVzJ5q2ZZc3dnBGbkDwkhQSkZufdZGqARwND6DC",
  "key1": "9W9Np1fdRAJjsyDUP7HWG7uEPu4RGjymWGAWWY9CCMvdAJH46DS7kKg6PZMctjVYvcz1T5SymudcC83WYQNdTVs",
  "key2": "42rzKrH5ksHGnNGPGrwPDez3c7YphMhYBiNZzPomrNpGreWRc3aTRyZs8kzDtUADEUWA7A1WeKQ44ePZhySGb1j9",
  "key3": "4zeSXruPHLLn6zSsyfwofjTKS5gtFsuJs8G9fx8rsbkNTMTavNUBZVCGaLiZZgK3x7kCMWCKSdxS5hkJuuiXyzLD",
  "key4": "4wD3BfJJfNusMtrLUAZQW7vDiK4juPEKNFAiToik5Bk3JTSybjBvDGmwqwRQ3XCBD1HEc8UUxhi7ucgX4TN6GCrb",
  "key5": "3mRDY3d7ZnccJneirmTDB29AaTJZVfygnmk6kR2pz7q5K2wJH9hSoNHRWFDTiecnxNwy7U7Jn537dKdPZbaWHha2",
  "key6": "CECf2q3PVhR7YPvCP6MahncvkPGaEH7mU4ZEPn4CZbv5FzB7GbdnnEfN4g5P6pcLX9Lmxx2xqR39Htv8SMDNEJv",
  "key7": "53UDKfqNHJHCN2gBShmKysV6PmpYjsaWjgcraxinETM2MHbPpfuiuT2v6bBx8bu4qpCSpasXEPpCg7QTamFGpypZ",
  "key8": "5H1NVwFVcGjMsGkr4rqGf6LZn5HXYxnuJa16BepQ9J161odWMBK7tEaYtug7HQbAcLYUWCTG3cnYAT87vN4Z13J2",
  "key9": "2gxgssmaDKX1nfcoCHXf4F4xBZDouFegxPjeWNAiZ2XruQPfFxE1kytfwB2avH4fhKG36kmh5918mYQJbJDLVpph",
  "key10": "2V4tcvGnfH5nveN86VxyPbJ5iP5iHLTZUQEjCmJsWmQPFCwN3Ln9YPNDPUremLTCfrHs6mHuviR17qPyPKWfDpTH",
  "key11": "2gk2oUz2YiJPkMe2s2k6LTfDo8Wkw2PMD8ngzQZUWJXaqtvci2Uk2RySvC1VTrY9EGkYeKFG9kpPt3fF62QJAZLJ",
  "key12": "5pnCbFby5CoA9VpMnLSeRe2fjKB2MY1hT4FD9TGnrUHbYtTRyGDsEXp922rbjmaHsgngAnQ5vTfBxv7yMHgt5ydi",
  "key13": "iJ4A945Q63Pa9iHakuDbRfLFWof9qPieNRZKUeUAsJTf9yTDabcux581iBVmvtfnLhEtEwC2hVPvaeShmmu6Kv2",
  "key14": "57J9kkLoF1zKM7eAwt5urNN8Exr2Qx236uzTFimVDoztjyzmPxmCK5KFKTRiC7JKdbhNH8TvtoPRawh7bbKtNqeh",
  "key15": "eCADCzvACMv7d76ZmtNjRUUzaEC6PUMiRtEGLfE5KJaTF4CZ8XTuWcwYj9TrPdtRPGKdGB8JjCnwYRUXidVtBW5",
  "key16": "3z9BCcEc4MGpPLnM27hRYvBHYMn2RnkpL5sHE26NLw2p4YqCQi8cCnmzsNx24wBPfjqUeNHHyDFUWvjuW8EZ4gwq",
  "key17": "hjuHSkVXia1fJPdEfzgJLJSapHRb2NLSmGkyacPPCFp8C9wYmYDXHcS9kRAMqKZRm1pw3Tqvp3wWycnbX8o4yP8",
  "key18": "2kTWL5Eu8Te6wma5xGA5UkP2RWqM28FE7BQQcuLW27WjfLdSqxCSF8AQk5Q4y2NPWs7Zx2srbCQWTjMLxF4s7V8L",
  "key19": "3Z9fyfmvhAc4Axxn2FCRMoZorKULQGTUVGo1KnWqReMAEu2cyADy2GA2bKakXbh91KefQro7dzXZ9yqjvk9jZgQ2",
  "key20": "LDyRRAsHz4FLrcsQqX6GG5VF7R1fcfzHB4d6G3h6mr2d6pEvyXHpMkvaRvxbSTk5vCVo4KLL1H9XNVaPmr6eaQQ",
  "key21": "2pmAuWBj3bXKwkykwTbezpC1AMq1PAeY1AD2BzYSuShammvj2reVPZxdhBarLDjBrTgPuRgxL3THJx4uAPfBdMoU",
  "key22": "HtJSKtEHWV9tHewxMj1BGYZF7kttDoCZ2mNte8EaXV6xo2jtLoXNbMzLGU6t7JoBBbyunXL81Jpv9DNkt3BR1Tt",
  "key23": "2eJnBHpQYcHHdowv1x31ZGdciZUBURCKi31j77msmCbAovVP6KnK3vf4nGJVzZUx6U7b4QSDfWih6B7QVPGh8Hup",
  "key24": "4R6796Kb1qZgB5EV5MwWjnnD9iWYCUkNpZYcH6AoYmz2CQDzqEacidh88iuhS2PyUPs8h2xtGkdumz7wysMTWpWB",
  "key25": "67FHE9pBPp9aqq8AHgA24yu5vRt3pewHTEnWt2yKfaoaXJGHtdmiu4M5WeRByDwkJ2zJY62tqyLQSggzXCYt4moe",
  "key26": "YC6aWpd9xcrGJWNFcrBNjmtMjvvoDzNpnnYA7ubUNboPYGzcaAuPGGWjpgHhuUwk8uu3C86UesAUTpYw6gXUsQC",
  "key27": "42crBsRrrgD8WifTReJrqJ9rc6DE2krJJVmKcjqMbq8VcnX2bK72FGE3kXQtfND27qFNTmsa7jMpYZq9Y4NZAVMh",
  "key28": "26JKEYw5tbMCGMGZC62ST6rWWK8sRLrNkUYvNrzqA49Fr5KmYy5sboDHYsQd9Jg4NcUha5uFNQPoUXBTaNxH6wWL",
  "key29": "KyWFSyv1xg6tYGVLXmektiyjASVBYx3LBhDHTYs4HPscdkfBKD7tfzZWbdUwkMGT9A3Sz9auQeie8xJnqK71WrS",
  "key30": "JLveKXVenedyrPPkHNC3yGesmeMjtHQ8m9Y3pn2Pj8kesrV9nsDm1Mk3AfMyorY7YEAihZq8fA194oP8tDtcLkV",
  "key31": "4632VxMU1NvKqvdLf38gFRfQT41fL7wZXm4rnyQvSmEW1iUYeN9pE7CN76aZN6sq1difvL9VEmFbmYiUj1Z5QpRi",
  "key32": "3x17axAM3x4XvxvUSqE2862faa9r9e4pGGkD6cQHKdCdJTVMyXoCPguLMAWLWqCE2aEGStw1h8jV6cVgAKbBSrZm",
  "key33": "68B5iGhvbDDNt6vY9i5FPgVyrmDS8WE7e3JZYqAhfsUvpac98tpXQ3dHhu8pa3m9BFQrmqnyJS4jY6gik8HZzvL",
  "key34": "5Xfm6MBh4F5ACjsFmZL7ExZvQTzceZuuV2gtDygypwg6LjH3Mrk6qiE3dYUpkbSHLcf75sURF2Hioq5Z1bgWkmbT",
  "key35": "S7cJ6QNqC7dKXMjKdVPz9PTV9g1S5HoAwACV7HqibqpEmF69NWpAkwboqQknXwK5wUQ6rUzVQvmdRDjps5wV9V5",
  "key36": "5jEEuBeHjqySVPMJabCRmtYx6swbJmEwuEno1iYtm1KUQxDVjy9mUNoL9WbreTnCmsBe7PPmmevZMChJhMn1UktR"
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
