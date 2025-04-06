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
    "55yXdtirpa6o6yo2L63ExgJVctgMs47jqxbLn92eJrbkiLPhrbZSMXLxmMWLguCH8SwJ6pE8og3wWbVKz67427gA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q6LLE8oDwSzjsi6qDpWmxxr1UWCBp7YUkkURKrwjYpTEgrZmVaQUxdpX3ULxsdsRuWJgcPavFUieM9K1LHcpjG1",
  "key1": "2Fy1Y8Hzo7drT1iBHicy56FCDip67R36TyfsuQBGx674hXMYDNBeLTfLExntteNnzMm8jwm7rXB1WkNoBenfgYE",
  "key2": "5j8j9zJB6EMNQttDjSm3s5e5qwcsrLJ736d6My2xmnkmsRtpww8gj685CbyoLkiuxRLbNcsgJWVkrGcm7eeJvAGA",
  "key3": "3m7wenXyt8nzwbG35pbDc4gM4nKPEgdMpZbsPcW94sHrVvBvQYArCgnMjYdkmY1mjgCXoAEhgp8wHRY1ztnrAzea",
  "key4": "4BxYEwQaBfPvUcEAKEQfR98ciiQ7PhEbrfvafqx3GuTa8Ahxnna3m6HhRgE6kZDGYDZqNoefdvQ6MNV4mS2nSo5z",
  "key5": "3fPiTkKkXBXmUhWMicNXxXtJPeezu8BAhz4yiA8rQ4NcpV6U4XN7KGqF54AUTt2yEUBrdwxo2oVMBacccL42vXHs",
  "key6": "33Ccouh4GtEapWsSz4cqjLQT2N1x24h8FmzSNkTEW7ddC8xuRAfbcdDXJyxZNoJYKQNxTGebXHu7kY64yuffTF37",
  "key7": "51cdZD5phy3C8hzut272BeABVhgiD26zmNGRmzzLxVGRFPhb8ervPnrZL1oXUqYWEGy4TinxFCbs5SRMCAmuaMXB",
  "key8": "vffvJXjfY3Qu8UUraz1u9qLJPC21Sg28YuxnVCw5y9c81arqVnQaQxBUq4Byz4gHgtX2UrmdW4dkiYsGhDuCzQf",
  "key9": "2pxJwkxRebUA4NHQ8YbkV6unkqM7baCcRTs6MNpMHTSokaKCGTz9QmJMbi9rgTGe6x18Qp98tVrgoq1d4JPbMQWj",
  "key10": "FJfeur7TzXZZ6Q97Eq6TJ6xtk2BzqwM9QPg7ts9h1wNQ2TF8mihgvcPyTYeXtFHXBy3UEvoftDuM8qFt4JL1kFj",
  "key11": "tkUfj1WA4thT8GUFuSWK7PEtZLHFFTeEHf6WbeA9oSyBmpgrkLamdVwk4wqLYvbaSBrJqT9HY3sAJWGFBkDR27f",
  "key12": "pT8Sv98Qxw2gv7ks5tiz8PceoKVftdfmxPnxmvRGypuLhUwipsUhTNNBNnjU4GD5KdS3qaNKVx2EK5H2GgbTUbx",
  "key13": "5E8bGR8xB6kyUF22Wa9CGMVEwgiYsPYePFNWN8FGTn96LgZadmKxjY1KuRBS4xKyMFSUQcxAbDGhCtJXNQVQFqpS",
  "key14": "3aTDgECdSMJM8xtFb5auaAdgCM8uYFjz61qPyPzj2z9J68Q7MEyGmwiYUSX55zsnZFfnadeeu7RVayCcHRtm2bQF",
  "key15": "4uyvPDsmW1imsVxNZJDhNPnhnpnK2eLC6iEAGALnKhacE5rTpPigCXtp8bvJDN4SYSaWGdzvXgkP2WqXMUsL1zWs",
  "key16": "3TrpHyh15yEcUHbjKBHXJaqBoBQ5NQctjZH1fzKaC4DU3TUomZtnYQWXhfSfHBpMWB5wYeMUbRtNSsgCTYwJtTkL",
  "key17": "5QMVk2KgTp77i3zhShuhzQ5rDYUANjxt73GUribuXvsbAojPjYzSruyVk7WiS8VnPar7Qf53n9Bdj4cuhbPBfRPq",
  "key18": "2GnxwvDKArXmKC56EJeQh8b2Ydn3vvVNuuPQbRfRyUHWm6yrD5GSFWs4kdrjVxgB381z9Hin4RbuEGtdA7yX1LV9",
  "key19": "3C4LvR1eUDgtaVhgqtSn6NoBMa9jxddDxMdwrmunTPa3WjddDbZ7yXgweooPwdwWowVDcDo9BVPaSQC7p8aab6Rb",
  "key20": "5zMomoXjNqBf2LTJgby6zJ1gNVQAr1jtBm1Q7eMMxuCGXecZq8iwHX38YLmoE3wJk5AUT8L5UU8QkHpJNN6s5TLQ",
  "key21": "4NKgqs8QBs7UMTfXETmkdUZhuYg75kwgfuEubtuHCx9So1qVfkCFizotYER6GDmREPqfKkbYckv3zwcCMq9ncsAC",
  "key22": "5sfdhQ8wBz96au2dJDb5MXMXVVhngg46GgyJfRQPNVkeZszH4swe7aNURZBzDB9XzuFGZRDbK4XDKGeGduapoTfD",
  "key23": "5VvPtU4fWKacbpb6ibyx6URffZoLjXMCSaQ7DSWUVHh9kVhDq4LiGtaoHiivv5UtokY5eRrimvG6MV2D9Q458vUc",
  "key24": "5g7HupByrNJ1Asi8ubzWbZBLuiWYTHNH1keejBuz2p1fmPCwn873rspcmhmS12AAHaiVxwpMfWWsgQEKeBADK3oA",
  "key25": "XYAdLTwvncStx4vyrCsMx2sPzyKNhv5LjWmLYcgG75NHHVxAX9cnSzvCvz3Z8jHZD48iQTZnZ1PKFF7NXHE13B7",
  "key26": "nhHPDREzYge3wRdyyKRiBjzdwrsZFJ5U6EXgY3EeR6vY8wJeV3CLXFCYR8fzL3nghE8itQAq3GdKcyxYNhzNotQ",
  "key27": "2XwgCTQ5pWf7XFK1DRswgEwMgpCajtcCQiZHKGFeecGcSU33GdqRRFoArbYC5UhDPdfu3yYnpapQFexe1Ux88FkU",
  "key28": "sgREbHWYotC5Mj77fTfAmq41Cy4V3WVCuaEv9zpHWe317k5iV9WzbVmiz1TDZbD9yDbpH3gisAw8baa6CLnikLw",
  "key29": "3HuvEMSxLSUqLvxQFNrQam1BhWP1NyiCvdbcxGKpj7sup9fiJNbVK8N299zgC2bm5mxLZSzewn3KizPNzQS9mBWr",
  "key30": "hT2DndndiJyz9NZ2gCVNu9vxzvPXfZGYb4Muz9fa7cSoPoqdBRUZ5X9mjcB9y91DaAubCDyDQXSSt8G3iQM6TzP",
  "key31": "Hh9Y7DimjtXU1ZUapw5N575BxfHWwa6SnWpkdL8GN4SxYkP5imbJSQVjTTg9SpfYHhbt4XMgzuHqoPwUzYztdzr",
  "key32": "5NKmdQCPxjxj7RQqj5h1K64FCx7FEogM9jxdbmZXVL4hnAa2vkuNhdNRH6f63BWfFsxbM1zmfVHFx2F8HvBNqynq",
  "key33": "45CZh4u9G898CvrahAyX2cVsqktAf55ChS8nEoXSdSEma37MZxj99CKnZHDGwuFAYRppQKB7JDBNsJMuiUpSuTYw",
  "key34": "22N7RUJAxQ6BmourLsGxd1GHAe7B4ApGJXmmpkWs4jib2R4LMrV3q8EJGURxFJskAeFeRUwZLETx1X9Q4pzRkk5A",
  "key35": "5tqzFaxo7pXDGtpWXqDJGZp43VGchc2d6hNVtbHVxsY2BHGRhboT8k1RKKbfLwe8iX9X3qwBiSPJ4dC7UnwZoxX9",
  "key36": "5NWrjV132DJFT28h33x1VgBHet4zpPhrXBvsDc2NSuLBf3b2wRFYJRiExV4KVicTmzpefWRShyytYic37nBR88mu",
  "key37": "3RsKHSfBUbvNAfcG7uqczU9wv9S3DUi4s6PN9JDUpQjApoTVEzBLpfzbce2yyfTfrGdAAMWSCfQhxzGgpVm9X97u"
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
