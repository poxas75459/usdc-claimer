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
    "4kncdAb6aumsoMwvAfGg3UXyWyoXXhdBiidYcuKW19iqQipv2moNCpGDndKkFaggHC7WaUZAGnTsstVDmrrBjaDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bS9YW3WcSuKZsCzCRWMyhJLPUmMiES9eRtpH2GztB3bFxPzGbt1Vc3FfiYEPocsopTx18Dh4zt8fXN7HoieoKTE",
  "key1": "2KgCMVpWv4nGuS75JkFTce4cM8VMeqacuBDFQvNzVrhTXYHFB9ArkcHhYLPZChYSJmTp4RsfGs9jeex3qKnLKMpY",
  "key2": "5STTXQLKyZ9JAToKxoF6cJfcrXMniYyDTnz8zBj2ThonJUTNMTUVLhNtG4pnCboVgjhXks6zd2Z3ikL4eaLGGNY1",
  "key3": "6BuVYuEhhjHztArfvRNXxxv8qZNkhTtnwyXwgZTSipE3XXcF5rttxnJSSWAyiM5s9WUMadFU5iCLKrH2KhCnhA6",
  "key4": "r22WWrcDdTMayaaMAKyjCcHXzKKj9BeLkjarjoEhKjrK9KCz8pMvDB5S7sFiqYV2oK6nFgDugyTHW2zDqazAS9N",
  "key5": "28J9HhJWzDx4H8ddbRgCS9JtGtSnP5BNFAZj2GkHAqoLdHUwS4gCHopjVjdLECCueuWpy5sovqyEtxMAMPP51Kqs",
  "key6": "3K44oqVpkvoFFozDwxhQc7eT91mgQRy9uZqjBdGbyTqxuHAPqoLoHne2aubqJnxzKLxqCLujbwieiMVJvU3Rr8JC",
  "key7": "3trjrE8ANgvreBWaiVwHrKj3SLosPiRMG5tNWJyKSRUVpUNrwA4mpFWkypEuszEMvMGjvGAAKaaAZSzZZ59V72N6",
  "key8": "4MddGm9XdppYZM541EP63phSu9aeKWsg7tJcHyKsAtMWWxzU3vUgT96GgBZqVRCfczntktDTPZRkD7qTvHpJTRo6",
  "key9": "2AcyW6FGiQZojbffs358oCBZvmRNiAW1PXFM7W3QjDo4eYqFg7YXyNhcXT6bYz8MiL4xnAFV39GcUvvAsVsvzDuX",
  "key10": "5swCKrpWgsZBDokw1E4xbdEwcStkhQsfDmGSjQKkcJExEiUHPqpNvjAFbG8a6YeCV9CYurjktnH8L8n6Y73ryfTs",
  "key11": "5Ueb8Tksr4Xkm1vqX3s2LskAjkwQRPdE9ofDqA2oMJdPrH3UKEbq9hNcoXYmtxXcJfzhNC9tT3RFKqJT2iArc9db",
  "key12": "4516bCmn9Q3ZvxfYuSYfLLoPz94pdE196973Y7K9vgTw3JXTc7JjHWqZCc1d4xS9tRyxFjc3Bfbv5X81u5oQV6Ub",
  "key13": "3cGZbmP24kUrHdeKQpm91mENidZqW12xTkTdUrgGuH1tFjUThJmT5PcX7qgfaoTwdmVoHtNHnjaRgiWwQfaCKS6y",
  "key14": "65gmvmXXBbWrn64SbajS4xt5wR6M7QeftKqGfT9SYPZN3iUESgef8uwwmUKkkdBSqcTb8xZ8pmM9NqUWWHkPxu58",
  "key15": "3Xm58WPZE4h1JuxWAGKw8pD3VMU2ox6YVeTa9RuzRvMVSJH64V2D1GKq9HHPioFJkoNWBT3u3zv2EZpsqa7dPzF6",
  "key16": "5bh4NacCgdYBxXhDnVcJ6c7i6xVudsQ4Tmxzhoj65Qeu4dBwFRuZFaDZcx7h6cfD9JMxAWVUB8Y9xTEs6cFPESwJ",
  "key17": "3bafbysAgcoawscx2mjNooQmnXK8hrj57Fq2eVpBF8VHYEbEsu2ZGhoJDwmTdm7ohbreCoUH9ti3UNc4KQpbNb9f",
  "key18": "5SBsUsnMd7U16bDdf8mJs2RUuaKDoz1xujEQeSQyye9qjDChwCqX9YhbyHxTyaF88rynmrCUdRbaDuTgDddt3dha",
  "key19": "18J9MELsT47x1EN1QLNJ2esG14b3d9W4Jq11dq7N5X5WbUA9i6PHwdzPRiwgEZiciDa5wp4skAupzJ8TzQY6wui",
  "key20": "sw34ikK63cdiPCp3RRNZi1zR4Ttrb9sN6FDks32H8mMw3Zm3SwwYcq7r39DATiSvNdvcqLCkGD6ccoNk5S9bc6h",
  "key21": "4xDG2mDiAHmcKqUm8H4pKxVjH1NA8jqR5Uv4HENNppZxLs2MjgjWaga98B2JedZXdumrrUCLi6jM2hhNJ5BqJMZi",
  "key22": "RZhBeFdvW3cHCXxcxBpK2sWJGKDkAHL3eiY541iBYmrxL9u3Gt4eiwyE8hKgE6U1uFyTcEop9Z3HwUCJHSX54Es",
  "key23": "2CZQUPAbwDyexjguFU7q4vfkiQD7vbh5i8sw6kjdnNCZ9s7PKaQu4QRuYdm7CJyMbaQp3ZvEZo14hkz7cgirPADs",
  "key24": "5pbtCNh6vrtKBg1PEiBBhjTPru1vU3ugUrvgBoULAkPWgXjaqbiZvkgKXdAjpeMikrr8jiQZpD2eNkWzg8Vo5CTJ",
  "key25": "2T1yAqLh3guBaFZ1sact6MhZf7qAMZWNDipLModzHGu8p8nJKwRkKekkPzzu1mrktpommAck5FUReFUSRiCnhqh8",
  "key26": "31LJYub74DwLET51fAj5AL16hShh7Hbuz7JowmH3gkXteVodR42xYaaKVaeYrVvywRnq4yVTbmySvpvHY9piqknq",
  "key27": "5GnJjiMbkAuDJ6yfoJWCVCsWX9ZSgWZojtSHbdSoAjGYvndfmmsZyzQiTN8ibvhTjgfxiJd4VK7HDhdVKFccPxme",
  "key28": "2pLHxYy9hm8fASoguYfNVHVYZCEkQPVGaMSP8Nt2fwshpFKmSQddrFrQFc81NiD66Jb4o9TjJvkvKV3SfcA1mggh",
  "key29": "3jP96AscCxjdLuuZR1skQGDGUsmtwsAARWfBDLUoMYRqADZ3oQ8q5fXzysRbVFcsKYfbtHZPGcX2GEEhtTKNSYPP",
  "key30": "2pRGEvfraSFtvxQ8HLWLsH7gcrXrUPXzGt5dAZS7M7bBciZPjyCTBmt1NqLFQmsLxBty7TivBJcfzXh2Uw9qhCnZ"
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
