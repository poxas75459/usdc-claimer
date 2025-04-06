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
    "4bNBJHRnNA2YVCRqgtKmma4dbPUGbKkAHpNFDmsozMa36sq34wWuxCAbYf4WmtFdTJBCU1zhN5gqVdZZFxzD5HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UJgJfEpZM1XcwFPTymonV1mrua3qx4rEGPwjakYmHZFKPYXaUUqyNxXep6n2BRmjfEhbhuJH4vzbv7YBtfJ5fTt",
  "key1": "5dns6rqPKJURiK2EEPvzhbknhKFS9sbQ5BgURe4pPYCNM5HfWjB8wux497MkDiALs4Q5TnPVstmt3bnadiiD1imy",
  "key2": "46ZMy6EVdm7NmLP84VyyMk4z5vJZ3MvMME7MgLGkRSyy1FE2MDdgqUz37Vrru5mfCqRqxUhAGehUgZ3neFwDpdCo",
  "key3": "37rDhwVuzKofuatpBxmBLy9XfLatYAbvtmHuZj3FXmWANTYUPyQNR7EKWEW1Rdju2GDYGwR3Ci4sVkpLXBGMqJ2a",
  "key4": "4qt43cnahfz9tNTcziFmkZaTUehQLjZLBMLUYZGZiWk64Kjunwcxdy15qbVv8PhmBJgpaZ74sag74ddAnsvgGcJ2",
  "key5": "4BUNyGabu9Koc2WfmVcmBKQWUYWkNcikzfgjDQZTVA6Msedhj9qvmB1s1CpCSHEFNdYZ9fpEGEmdwtaUNuYMwM3o",
  "key6": "5vbPbHucKZrmoPfAqRNM2aSR7KbLkxjPGCcWHCNAUcFkko5yX9UgGLP7MbFj58PHvkQEsaN2eHiJRi6uhyoyAp5i",
  "key7": "6QMq4iSWe6TgvWKosXiMnMVXnNJLTU829hFWvZT4ej5TXEfKpQ6ckg1NyH3aJDRGwSx4i4J5FGyzGnChmMsNkEq",
  "key8": "21MjSBbC5naxe4RESCVVJ2hmbozgUuN9nQ4oDEraqDnkGQZ7PkQQ1phi8ZMNB6Tn6KaZ1pv4RbEy3AfrbiVmPQ13",
  "key9": "513MPxCVguWdG8iNKQCNpXDo35PXUQVrcivrWyS5Kzrut7Na85pxWkbD7MoGAFH4xvNCNsj511vfdwYbjJUsgByL",
  "key10": "5cPNJGKJ63ovUuwyrm3vfSNPzGqYN1uAL1BMHPNTBpD1y5YmXk4YxZ1xetjzh6K2FreW6pyh5LGNTz4uZgRYhBAe",
  "key11": "3HphvbBSZK9Bk9PWNnhqpXstvCR5nRKNHCepdmzt9Q13k3VefTMWxeR1jhUpgkinVzEzAuAtzBnT3UL9ZauPL492",
  "key12": "2e59nkPUm36nowjQqCkoa8VjCfKh8xSb6156bLXhqUFq65GMZvmhwnxRY7kSNGWJ48eC7Fnm59ndJXXVYxDQ4BJ7",
  "key13": "2iwRPnDRGxgiRKGxn449ATQdVQo6CHQDS6dkYMwbtAtxcuqAFhR3nReJKqV1pHW1xcLoYkMwDN5gc1RvSMnHU4eS",
  "key14": "56y14Ut7yJGKJYwEup1xBqaoJoueypqfQzCD4kxRw3t7iC9VKEPirqqMjF8HJNtc48dzqpg7KvDmpjTeKfrmprpt",
  "key15": "mLf1MGJrNK8kCr1CSXxh6soB5V6AdYmmEfLweqEL3vfFXinmFiH83xgNuQYYD1zVk3oEApHKnnqd8TQ6WSn4nDj",
  "key16": "44avfHXiwYLvASCfTVMGyfhH4L3pXST1Qmdq6JpsFz27zGo5aejrfK8CZSdXzfDSdTs42eRq5VuKD9X7uZ37M3cj",
  "key17": "hm4PsaJijDgn1Yd6yQ6YeBpF5sbaZuSJz7iUfT4P48iwFcgrkzrNrTfeVHiAATeYKwDe1qJisck5ZR1HYrhEnfu",
  "key18": "5Exa5LXnAYMhq9WRT91y87KfebiKZDuAfU9nbXp8FRTytAGfVt76UcnPFXxJ2a2haRU5n5K8ymj3momSoXSVXCjU",
  "key19": "t7cugyk2TojQbPSsG879bdE6RjCWMsxv6scamZF2UiT2bLJgCXwNuzpGyNpRuU4BmhHex6gBBRsAVkeEXR6We25",
  "key20": "2cyBtsguxv2n7owCYgfmLpho5icW73JeSHvYKc7yWFp3JDKZp9J2Jm5YyUXwYWikV78cLJ4RTdcBLZoRARyE8GWV",
  "key21": "sUVZk1ZbXV5VXN44Wu84eti7LpW2usiP4JSVPJUJGSBgSvJJbhYs7Tb7WSdMRe4aejTYZQcwRHkmwuXheW4en9G",
  "key22": "4NjAqASafaDWAQ5t25V3VT7MNwpPf1X2ATxz7JHkwa8fh4XHchuDsiTSGLib7buFqpHYg1CYvN82xcJoVWgGZpF7",
  "key23": "Z5Q5qkXvMvEuhUaK9cELdZpywuzrQSLdnvdTFfDn2x7kz5twtj6k9F5maX2ZeWXABkoHEKikBHXhYZ27C8dJ3sk",
  "key24": "THjcvBKvayC9tnR5ZGC5DfRbi6gSrU7AHsc7LzNhBn3LbEUZBBwQrRYZFYQgLzg4e1Q1LryxffHoQEGndc4FHFB",
  "key25": "3d4q1FKeaVvHfnNdobaB7qn4WfnLiK8N7ArBKJRosiRPA4uXuXY7ELCbz1vLy4swP1Fcds3yFdyJDDfr54mQeE85",
  "key26": "5xpjeStaXsnZopFuPN699MGZSw7PkfDNBpPJ7aNLqXZDVspidGs6wQ4LjbgiT9cpAKVunPzGS3MKAD2WYQfQFSES"
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
