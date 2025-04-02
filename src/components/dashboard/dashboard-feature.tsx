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
    "3KqBg4juduefpdCi5PgWBYHoEWb5jY3v1Wkc5UwgMK1j5rj2R9HN4aNmvtWk7ZaxwqgzHCEFWgwR81GeYQXb6WJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YStjSQDYuwEMNUYCXN5n4wcgwtLPTBFARgZdEHn3KGGA77Rc9WcqSRASt5FyTUUCMDtFPpPxnHvKkZoQ48uFYQg",
  "key1": "PNw8xRN23oTZghkfUoBZk7TfieSoQ4VYvt8FqwfySBGxZbJmw9HL2cHLqsvUdDW5NkzdA3iyBWiEDf7NeARUoZS",
  "key2": "fGW4axtb9yUUCJvwFajDYFN3yvRiu465ppiu6pZjnFk3PMhAQxRhofvUFR7gWNVQqdpqNztCZsETS377vZFN6CA",
  "key3": "2NQCd7bioW5WucZCxTjDPE7fpScJnwKn2kUYh1giA6Vz3jcg8dK3jYmRR5Tb9jxNtahNmFHFHeeYBwHuC3y6pj3C",
  "key4": "3umjCSychBu6mX5fATzSQ1JBvcfNZXnYTqcbYwLtHLweFsVAdS3fEA24LJGPMY7bMrpr7kDzK225hcoVEeB29Dwi",
  "key5": "2pAoR4faXQfsCRxCp5CgL6EM7f4ZucLNFRAFKF4x3Sv2Cz9WAGxUwk9R9NdGaL5DNozSkHesdvPbY6FRUuBTEvrp",
  "key6": "53Eh7ktzhKni6LgqV9zHJJTDwwagzqUtP9k1eZTEyxnTyupTC6bwMqmptK61an63zM6rAvV7VdgRYfHSZ7P3ihrW",
  "key7": "3tbU7xL7YZACo41buPwKaXZQ1TvJtwojvmpvhFeUhDTuYNKNCQsuyXWrgj1uh9WxJVzkBgo992XepUM2FMEwsPt6",
  "key8": "58SUuwphQHEPnjn8cgaViyujL9WQ5Sr4yLpPTNWakaa8p9QhDgf924qRxdTuexJTbS4izNXheFZzCf1KN4nAHfeP",
  "key9": "65cooj1qniP3Gbf75TEUVQY4FYLogPP63ENaTZLhsumYAzFfaByd93nToULLxv1kjzZ3FHS5J42wj8YZMJ6AJnyG",
  "key10": "2oHLXPBxNJgv2gWE7wueEbgYn5pdu3xoHteUXnynKxrgmYSJg35hzdoVumzHMDC9jybyJddYNYj3kjJHGJZhysqw",
  "key11": "3n4Dq88AFDJtYknmLxZt4GtYGbYSHjnY392uAARPAUSVoPqGhBSebYd6kSZGqJwX2i3dHuHczMZvwcruTXS4zs4n",
  "key12": "3AKBw3DaX1LN9ysghRexjXA4frS65B4WnmxWdqaQijtTMdxE5QMZWNArpJS8X63BUDT2hnsnBzH5LYgeKdKwSAAA",
  "key13": "4kAQeJyK2F8ztDSQd5PqWCqUU91pdcvZMfFnU9u5VzX3FAnxsUxLMAA1UYbn35qWXAGu1XhssTx8f5Y6UFoA1EW1",
  "key14": "JR2NLDJqcToXdSez7mBi1pvdkyKoic6akFpLQFG61AYzs6pDEjcvSYRBVL7QYUSdcraAaU9PtSs6krsqRPPHPEz",
  "key15": "ZL143obCwYtbHjAhfefV3aQpYnCDrYAQVnzpGfAWurfaTP5FHH9t9zestggVauCLHaHfbt81LMWZB4QbgKKLLY4",
  "key16": "3iJQ48AEFa4ngD1k83NPBcRwTYHMhVdhYeE8myHg7QwuC2eMbqtssTfw3Z84ouYB1H3AqsF6TuvA6DGcpqnPeM7k",
  "key17": "5bY1FqKFsSnSLCwBe32tFAvBBPfCEx8BX7B8VQgWikwYUExxs9NKPSSjPTGcPqrvDQFKz2qcXDywqc3TyTnpMksT",
  "key18": "3ZvKFYAWwzDaQhjmDqeentSwehhtdsEMe39jCfpr7ot5ozXpJYMQufXqzhNCbv2i9EBKrY2eY2cak1dPu5PvLtBN",
  "key19": "4CFzXCBrehLYckKZ15QiFwFthe3YHuKKzsCVstkccJRBsN94mgXCGm4WyPPUwqFB6X9DWqxxwbdBYqaY9qGVQ1dp",
  "key20": "32jGMrANUsQKzmov6hXJDeCkRfTFuZ3tr17xExvyvu418ccMQYaNt4EJ8PEYP8MK8sM7haGZueycVYSxk6cNdDmo",
  "key21": "4mJFDMjoykLz7VLhVpE9RJA1zA1bKUphAKFEdvWAMGF1exrgwaHK8RUjXdACHnBYE1RcDAyAGkwaLQYcDYXKwiaX",
  "key22": "4bxCyaahWedcxJ3ssB2zwFwA9Qx73KanFiFNmG1gXgTD89j36Exu9HqucY6Y1M53XSxhubePuvctn47HNZbVD1Q4",
  "key23": "5aLTHHxjemHHgTmAUnARqScBpbYrZVhA67HkebSMi9pnc1N6WqPVmH4j17H5REG3ykuwBefcC1eRygj1mKaUiswd",
  "key24": "2k9Na8jjuTueJTucukKDc29Gq8aNx7P2JbdJebUNJ7inU3cE6VEsXLSRm4uFhoqaPfTYSEVKfks14RCHfQNcsbMK",
  "key25": "2oHtGrXuBsiL3qQ485K8z77ncJUgoRYrvBg9MnrRzPjQFKbDabhs14iTmBoCwyzuEbSwTBXPNgGzgXgchd2Aeo8U",
  "key26": "4pCkv8wiCgrEqVJrVNWUYiRXr39o7eyVRomsHoVtDbH3wuecSrVTvNV6QzHfgrFvMboEU5nMnHi739XF9PQkYpQc"
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
