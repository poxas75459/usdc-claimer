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
    "3T9WcfVT4aP33RALHxyBL88VtEiQAM4sp1P8iPeYqNFRbpGthUyXpqKcTFwdJiqjuwPnxCuMqzBvtj4smMxoq3tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQbLxrsmo2iY5rFf5QKJW1B4ucTNh8zEHLYeRGnvsk9aQY8bHQe69LySni36uN9cCbUTPsZ3vysSioPmNs2XDur",
  "key1": "d5fPomVaGEuatgDAe5nmBMi6FniJ92YXoRsJKLkKWW37v1mxxZVRNZnZHWABnBbmgjt5FMXji1ZkC2JDWqpMA3C",
  "key2": "2Zrs9Pe9FJk3nutbPA41jcwNj7b8JePM1CzRhHWSohNSJ6WYuzMhMxSacYh7sozjvGiWaZBLU4cfHArpVhTaCT3J",
  "key3": "5fienSE6jdoyuTUjN6nDV58gT28bxibniw8G1RiuSPq82Fwyi5sq7j7JkDsyorJJQXczX6UvsoppzyFYDFWDTbmV",
  "key4": "2V9Cpm2azRoFRNcyBLtGwnU9uCWYHCcWb7Fztmq5vgfNsER4NcaGuZ7b1QhpzpPYUYrw51tRXtTQrG8aRtoQo2Sc",
  "key5": "2A2QaYsbWVkTRKigJjSXBYuKBu3ZYMduPWnnEd2xd95Hr43NhH7YYxnCket4T1pUPsu8UNn7wg6UgocvrpCny8LV",
  "key6": "3Si5EtoEbp7H87L4vtycAeJNuYCmdxUYLkz42KD3zR9BE7oNNEHcPQp64RAMiHUz3egYjCMCWp7aT7TjzDffjwCk",
  "key7": "5hLEyubWGTwGugPqm8nAmEc5tq93XCRBcTjukjDBi6zwV4d56LEci8AZxgJUgXoBCwAMJgRfRf7TVFhLYFkUxm3H",
  "key8": "4V22r55gWRcefDaMqWGG5DQNybW2HAGdvty6X7YuY3QmHBjrn3FrDeQ2YM5gM4UKLhwMhGTECyuMr77RRfDLvRmY",
  "key9": "DVdgjDcPKVZG9vvx676BS6bd9nbsfPYPLR3FuXyaKuXwrc2EoRHcTJ1edSfY1xi8HtK7VF2uW4q79pPCb48tWiU",
  "key10": "62wyKTPMpgKn38DDWx24uTVVjfuycAzvYzyEF2qwTzJMhRJGs86oN3LqxuvzQVCGvmjttMBhjNGfu8KA7cqaWkGf",
  "key11": "3rA4UJEFFw3tz4r1xqzTe7tpQYpn9nZSFg8pZYt76eb5D8WN63Fc4nEh68qvyfgczhe5KkfSpRVSqGe8WHTJMiYn",
  "key12": "5SMQr3DUjdAp9eYQkSVSH7DnMRRGsqvmmwqMweGketGJWardx2DPFMRJYExcU8fRt3Krk6eSokotbeMMzTxX8bNM",
  "key13": "3k7PBtAphr965ydeCU8p85BdCzLFjhHvJ5J2c1PnVGfKEvLfeGubrkkKVieLCzyuquqH9AR3ud1xMWjiPPEYwp5t",
  "key14": "2NqvJV1Jii4AtYWj6nH96o4nNFp7coW8yzu4Zh4TGvtRQknjkSh12mv6jfbiibjsFaiJ9nH37MAH2dTyBncsjfuH",
  "key15": "4yqU4CwiXuADLsLgNLdhKZiqaDPd329GQTZeUFC7Efd6wjny3piYYLuJiCLrvDQpiHDer3Ufmwn3zXbwSSMNG28u",
  "key16": "PUazcY9zDvLxGYmV489AK2LorQqn66eeCKZ1eFc3cmBdjqG7UvWcdEw98eTdeRQeRJ5mWi6qF7ZG2gCdVCrJtgZ",
  "key17": "5K2y3Stb9Mvv1dzvfDyXZf72JpmPub1b9fLpV99cHpXo4eaLLBrHAQ952KPZ4yqmvsPbkaUoLVpskpsn8YUY5QiD",
  "key18": "4idbQnK6CH1NZwysRu8W7yGkMLThtsGqp1VDzkUVd2e9svzcaocdx4eHSUsFkmHCqAwzAUYEC1LQy1LGeoocF9z",
  "key19": "5aeD54Ke1TQf1pxHbK8vDkNSCXKdbSR2UzZkzh7UWhQu9XnqqsReUvChDDe1yFHxP5VUpZr85qUhpBfvTfTBkUqc",
  "key20": "2WLAV4fT3m4Ey5grp27R7cUDS8RCxvZx4DebV6cg8pc7tbSLhBaPLk3KCY32rsx9a69yDF2U1XCYbDEuVxfD1F5s",
  "key21": "3wokyPcPhe4D4Wy1bfs8pfvaKbCd6hQnhcieAhDUV9MUuynw38uA3HCUNncwc8vDV3GDH8Za2yR6Z5AbH7g2qQ3f",
  "key22": "41VQcR6bLykaUQPaJhcGv8mjctpmz1yVRq3jGBC6PdXKXRwx3dy8YtiiyUztdgNGxJujTqUGstmi65XvAwrUfGEw",
  "key23": "wiuEvjMu3yHSsePqRAFite65RWYkgSqhF8X7AcSxDBYxiLYxKqEX4kuN35mUMo6XmBYq8qjVXrf83FtpYfSn7Tw",
  "key24": "2UAMsUfPf1KY11tA2AG99yTtJFGwfTWc8NHTg9DV6MmhwpQTGawueZxpof9JCYJbjfAv2627jrw2nJu5XZa2AShm",
  "key25": "4RcMX4vmrrXoW2AmYuuYvEHqAgrjHibJSvxTaiJU9mqk39F9Awq1LP7UQHsQpn4vw2REJVCWS7dH6E1i7zFNXRBh",
  "key26": "38NLQ4DdDqA5ymQyw9MGw5xV2396gonNBoF2GakvyA24q4tqkzVv2NWaLi7GLZRngb9o9qfBsGPcYtMRxbx4Ktww",
  "key27": "5Tmr1CH6rcLVygbmUm6YSFQwXJgWBZxGkDL6dndcsio8Rp53BNMrvJ2njHBfC48CSc9uGX4BHzvsnfBwbc1bkLfF",
  "key28": "KdqHbNRfFWZ4f6nxf4y9kmnNave8rC5Q4LVpAncVaFPs3cBZ7dQor3kNUfi1oPjCvaVADaxwFoa7zsA6TUofKAh",
  "key29": "4LMnNRUBEy1FB3FEpfnSvz3K6vfsXSYBurtdP1MCYT9v618Vj5hEndJA1DUA5mEZgPEECGPVgULUQ492YQCUwWfu",
  "key30": "3o4pJznteojyRQ4MxwXYfUsPDsDLqEiV6UZLm8GFuJrp1bKPA5LXAy8EDMicmuSaLpo4Y3BaZCn9oqR3TBiAXnso",
  "key31": "23USN1XcmGdijrLNGCaGxRcyDGhk5ypev5Bmscn3bQQvpxqSAniB9epCwvLnkovUu7mRuJR5VkNWgbJYqoofwh6N",
  "key32": "Gso11vXpkh6SQFfyg67kUtDqnb4744yp6L4nDchsDbDDRkwMxKBrdwSaDq1Fw35KQtaW3e748sN9Z932B18xHSU",
  "key33": "2gbRwXLu6RNSWd6T1YtoDdkQNWbNkvueM9tkihT8a9xo7PpDNtpCa7X1SbKnkJ6FyRqeexWEN936WpuZospZPkUp",
  "key34": "ztobrumGp2TBXJww9PALEJXui2WpHS5mTMKjmWzhwC9DWAZxVY7srEHZ8doj8ozrPRtvrbC8mxceSfpbGtdPYbB",
  "key35": "3o2Qvzaimn8UVUSUsY5dxJcFcFS8hHXAUE4nj3g6RXPx58HtjF5coCahTgnPnbXF587Q8CteMgiyfV2LN25X1cYN",
  "key36": "2wf3i8rFSjHPBYVU4zMQrHfxhQvv7xfHf3mJdpgYBtmFqR3395Z8tabKNRud44F1FLApuRQBYm9E5Gu7ESPht3xY"
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
