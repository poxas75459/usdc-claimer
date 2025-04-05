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
    "2Vx5o3UGWpgHFtFfbAmsGra5ibFe15Uk4FaijJ5YMjF3HkU2X4R1WYogtCf5HTX6AayK8x9nnGQLvgFEJGxRoatm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H4NS2RQxfpJKs33HE6eNjoSPzHKf4fGDYZdpC1vSSnP63YNd577g1sXc1H8pb29SUVFEXJfxYNdbUxUXCczPwGM",
  "key1": "h265GJTrkqtuVTcwiFUA2g3TCiTG9U1CnUajxDeUMW5dWdJty8k7YYxsgPLbXM3e8g1fZo2x3ZioMk8JAnJHik8",
  "key2": "Kark723ec4nkFsvLfgqPsVHrhQUoyfpqCvuNh87U7JMPdZg4LBEyKB7LHYE9St7vJqDqKyRNDQhT24vqWthFohP",
  "key3": "5qkZVKueBHKCFu84fMx6HgD2BEAbQPjDBNdvi4S36vur6QdqbCkgyADfrKagkGDm2bFE3KimsUkxY6wNqio1eu6d",
  "key4": "4Md6TVCxc4jaFm83CnDktfcZ2WbbYuov1QqSLP9KZ5MonHKjGSBAectXUjJcD5DQ5Q3s6rz3Zk2sN7ufStK2wbdk",
  "key5": "3ANGXzjUNbUCEXgw8RnfWDrzXrEeozXVgawhKWrxT6HPnWBTHcHsWmW7BEC9cB9hG6VovVuav9XfguTLxC8qa6x8",
  "key6": "5fXQxxsLqDHM4tmqy8SDGGLd3dFQRjk18EykqSAUXZLbD4rfNu5qwiHChR6BTXB84Czg8Rf6Co8ftAZU6pcRVaZz",
  "key7": "2Z4mAe7J1BBQFhVWWdAv6MLsUAwCvEZyzhtcjDW6t9K9Y6WL598gWmeLSu1qFAi3uU4kXBj83epTFB8DFQHAQpoD",
  "key8": "2EcGJpsM3RgwaiyrJS5pGfXQX1Aee65iguLqfUekD78dwZuvtWoPZRZbWJEb96MpVe6BPTrjSMpL6R7rJcHKX2qJ",
  "key9": "5Rbiji2cEsHnPoBaPapPQc9UnVJS6amor1cZAARnF4zC5y1nMHvZFmhg1MUZHTsfPFPjHZzyasoYBjzDVgoputuG",
  "key10": "5UGf1QJFeNBLpuqzt7nzpusf2Y6S7wMfYH4tXZQ5EFX2qkf5FUk3aXz8Dhc6ry856EzVTWqMPpKVAPd8NxvacwKt",
  "key11": "2BKshrbuHfo1qsN4DsMvcPKxiePSYJwQnxqmwvLBEAUL76GbGBQ2xicED9r5yyVMLzAoSgzeXWoxvtghCXnnWzr7",
  "key12": "5iE3zbemhsKowYe8TpbCZARhAMxVSxXKiGYqYLmUhmuVRCqmauhCd71AqxJ6DwoYYGb7sLGfxYCw6UGWYPsvKPnd",
  "key13": "3ajzDGtanf11ymNcvoKneFAqHQ3mep6WAKy2kdjcuRZDGR91sZcZ3iNV6uoZFvRjxuD3gvvU92jgANU52LVcDQns",
  "key14": "3kjAbsXD9docEAsRiu9bAhyWQto6tV1uC6oHV9x9qi2Vk9GNPDa94UNymnR5QcKgmgkXkvA5dCTorkiGpkXYNm7D",
  "key15": "4TEBTGYHzuKftfnDPdtSaLFDHg3xgaP5Wp8zyZvtzAQLjM9SEhrvuXaMnoyVwkFJktfs2qvyFGpQwaSBuhsjmWHg",
  "key16": "2m58NZnrBrZ1RZjn8TFraRqLRTEdKEMapU5hmhPTK8YTDnC9uTupTkhJPcRjETYBJgM6y5mN7rD8EqHBvHS7RXQY",
  "key17": "5wBqMMtb3cmg1vYDiyz82NwSSZL8R8RuzMErPfwdp84KUABgFJNFhDSeZFef13rGXAPKZqqWMieYwUSYcpQtAaNq",
  "key18": "2qr36ZkvhvmRnLbqYG9keLaFm8rNBMDAMFQo1y3H8h47t8jF6xFQrZKBjozJwgiRnEFoVRwzY47tVjRenV8c1rTP",
  "key19": "5zrfP7yamRkHMng4L3HXuvzSsRCYe75zQotyzyzbjskdi5hi6Ptpa4kaj6NmzpaN2VV6t5mGVjawMnBjZFWuYPm6",
  "key20": "Hh2Wd4pJsp89sFUHjPmMNKSFfNSKtnFSjjbzJgcssLZ6pu1mQgDYCsC76jNH3bKrkqSUS76c5DXLEji1XnjvprP",
  "key21": "tyS2FMUWFfgiu3zGDj1oLetKuv3mR7CkL8bFSjPwmMesffyLNYR17n9uembFUpVy89Xjdq2md6a2bXqp4aQy4bA",
  "key22": "55VYKSUMXCo7ZE1fKVeSP8KhTumk3AkzeX1Sax1aoUac1yaaD5SDu1idpnyKNXScjxBzAMzTFTatfpXL8DYi5mZG",
  "key23": "5JRrsGdSsFq5U9a7XLBiRJMAfo7b8wrM3jhiAdavDeBy94bem5hrXspiEurtQFiHkuChuhXaZpTT7esBM6NQRReQ",
  "key24": "52BHqjDtbWFhFRkrBQiNo9hJC1dpMF9qpiKPwysrfGxhLAbyczWZ3yLtSDjA7sCnY3GDF5yL6otyBiY4KuR2REoz",
  "key25": "2gGpgQkXxhwnpBzUamEPhusPxRgRrk7ZNmFSbC1vbrBHgmuoBcREZNfjCivPYGKC2ZXV6tQp2PuU87CvWkXB9Y76",
  "key26": "3mVFyN98cjmobp5uoDWuPLo3kyfPC1zHcYXJvk9oFBs2shxxpxp6VofkwwpE3zAArVsfi2xAtWsBrQaGGMGr2YWF",
  "key27": "8pidNtXfvGRMN8nBVBqvfv13rJHi7fArqihMixb7iiHtrpHF67nshxgK6RN551khNF3QyrMLj1RECghx1fbqQ7N",
  "key28": "4SkTBsbWafFs5rrZBGevh5CqBSgdyTSyeCZgQoP5bmbsPnKvMvAvFDM2LBLszbrnEtXjAxNfbYdrZZaLDTeSQYH7",
  "key29": "3maCi9rBpuWJE65SuLZqgjuP3fZ6BSUY79iGWSQkjTTGMqMVoXKLN9LS9fZ2h5m4f6UbjWNj3sVXkHNKt4zNMF1J",
  "key30": "5TdtxJzNiW2ZJzGbDYfCA25NM64Des7zoivaYYshv7Gok8q6NyRer4yLBGr6rEM1J8xyEZW2NWwBHBfqtVYsBEeY",
  "key31": "2FQPcHE2yyfDcRUF6HuzTir8CxHikVVt3Vyps3CsNbwC817mS6vE7wnexeTo59DKiGU2qRBrLrvTLkrBhVXpZP5A",
  "key32": "4feYb2EqjZEMhbS2KMWBkJCaNzsyNm92QhRxqhdVv2aYCCYAKJ1D5EuBg1obVXiWfbjR3d96ni2APDRGbS3vcuXx",
  "key33": "22qHYU1tSXDZnFHXTRhFz7r12vWvCSir2BSHV2JQQsoiqASjGVxoHaCYbzL7tCy9T9koW9NWKsHfJUhH9Yhps8yX",
  "key34": "2nRWE2Z83WneHkj62VEcdWkxvU4kaTwuZDPPDvxZGLWuf2YjT5BVBbuLZbdzHe3oQyVApqnUJEVbKmBTsxrKTEpz",
  "key35": "4vjozwdzTDLRuJBDE7LDEXUsy1gT9C9WT3LU8A6rzEZqsBPSVxabfQLfHMZQ621Arru62oQmSp39mmwrqzBYxeQs",
  "key36": "4W7RYvjwqebtV2QEh1TnnJw9fkEdcrxMA96SrBABP9JVmMMGgyNcknayZXBAATMiaoQf1LDiU7AVmk9BjxZXUqjz",
  "key37": "5rDKTCXVCn9JUSKaQp2mRpqkxhE2SddyrkfJZx6CkwFq3CccZyZoQEFhEqAExxvbkmWJh7kqcv2uJpAqZoLFK15J"
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
