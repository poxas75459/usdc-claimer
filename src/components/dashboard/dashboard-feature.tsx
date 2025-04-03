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
    "2rRoUrfa8r3oNpauFWsFavGzkCAheVAxX9WhYk8apEMgRx1BgzWWoJjwZnpNbJmeErdPC6BU53pNG88wN4Qxc1oz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SzHHTQ3EJB9ywTSymvpnxMFCw92UJLC4Sv9eWsps64HQzDcDXKFvg5t5HALZnuXGdqKbjES3h5g7rTwqn4P7qZN",
  "key1": "4MYL6d5hsgWHmM3uK2PjZ9UoBaTZ4skxhtpxTizS1NfBrLbmFj5RbDrKmAX4jbPrHQrh1ekHnnmJeyhTYpCxEQkN",
  "key2": "4KFwAeu2q8jZjwBVtgCAxorryYLdhrPqJyjWSgrn2PMWBz3kssxuB18had7uA58ZQ65x98rmgRSCM72UPrpafuga",
  "key3": "4rD34VaewsggftSSmPU5Hz7vQY3pKKBSTa1RxBAfnyj7y4m9h46bHi19h3pzEg1ReRYbsJRBEcAqWiVPr2y3oMvP",
  "key4": "wZAwf3ggbHyWsYPbHyM82ttDSDJpTRrMxRVZZfAKN5CphYDgFU4RhQcSaW5uGwaQqaneVLorhfgyKVx2kTkDQXy",
  "key5": "pwwqBVVSK4UnKyAJSBVSuvZX3bbDXZii76PadgSM8ZbuSU6MMitFEhxG2jnFTHiGZU7HmKYLz6BZY1bZy2uoGw1",
  "key6": "5eR3C24YLqNEyrGRvM8CVTBAR9zoBwfGyZb3KrZQ2YkdNYBeKBLfwNZc6cRhs6AGe4aJxaDnoX981qREiLSDjLtt",
  "key7": "2rtPKhN9tiLtxQuGY89L7B94B1RFX1E7cT2ya54S3Lh6Bo5t2qCi5FnRYYCwGFfSVmGJKmJQuznAwtJx2qjqhdff",
  "key8": "4vnqxfDjtKyP9BDuhHL3mkRw2R6vnMkwqEHFSXXwvYUJZY4sNbfoQzau1ibsqqiScAHYv6e2NZwJQhgQGohgVyN8",
  "key9": "45C3SSC5MrGJgbjpt5oaiSpbRVZpJnY677vv65QXnBWUyvj1V8AGw6o2kWkEFgaDV4op5KrXXar6kkuFNV9iR8wV",
  "key10": "XXZTzEhG9VF8DB3SYxg8NPgitS1jRhRAyQS2NWifMyT6DKwb2gzV8SmRqVXi9d2jyp65QpQrvaV5FNXCDAw2wcb",
  "key11": "2rjFGMNGaNckvgpbZWi2dyAjBx74r2EKQ39rF4wMirVAj4hrwNRgbNN2YLrjq6SJj75ogML12twfC3jkgnx3biQv",
  "key12": "5kiXutME6iP9UXnmTtx4EaosJWQQL9m2t78AzN16yJpFTNaHHFCRLnP7dCGyRdstbCpeTbYPmzUbmcw4rrudyvNg",
  "key13": "2PWjNM4m4sFaLqWoz4u1zboAKH261QH3DeCVMbT9bhVF9nNHr67Ceka5mMjaVTuJxkN1z51MCw1UeartAJewWg6A",
  "key14": "4NZzfbWTx9aqteq1JQ3iLwv9pJXd9Bq18JcMM89wfPcHBMFjfmE2gJ2Q5XfSVvPbg6kHufwdccQNHy54qy1fUwT9",
  "key15": "4mi8z2vtZENGG4PgjJ5SVXPzvF3ifuAxYHuH2jTjTtG9Fv9hPojoQX7pQKjvSjeswgQzTgwzHkiptRom1Th5cfhb",
  "key16": "F1GQ5PGWacV42x76Vw2mCdGqkUFdcfdgDihnVRiJ9WBrzSTh7Mk6hGdQZ2xBue6NvY9QXSkAGSyAELMbgvqXxjE",
  "key17": "2UYcsJqmP1pSxkhRe6frG4TH2LJ5vDrcgpE5nxDv7kSBgYLQD3EGR9GFMBXwHjBAQdcRopcXw5u5XBiujrpBhsHX",
  "key18": "5myQfMoMR6uBBQQyqomD3AsvmBSKtmSNoiDsxzPHKUMD9gc9wYR9kD4VKqDWak5snQmwSEYj3WVdRCcnnGV3Vabz",
  "key19": "5UoNypfs7Va43k2gsHTSSrjpiyzJdk7bUfTjHrbBUp7JXdqWihtwJgGiMFJPZpfdbvZsfJMZRRhCvAiZuSEE8aTS",
  "key20": "4qZ6REx9zEmzWwcwFbj8vmoJdFxrav1cbKUJcn4dkB7bodEFiANqHSDgifQeg8pYiYXXUevuZUerYsobv7PVcYjG",
  "key21": "YsqnpdNciS3YykW8nk4yAawxXh166NfYoSqK7v2iLXWX7SnKN9zFyoBXzhMtWs67KA3Akjrp4pLa45vzZgFL9kP",
  "key22": "5DpEdbG2mhB21cP4juJXdPVq6EPtBFGiBqnBzg3TZpdcveJQ4a6pU4cSkykgSBoW6yNUgwDqDCdBXhaJe9856g4t",
  "key23": "39WanW9GntBCebNVhc9x5UtQzmdpXDwivsqVcRmcBYKfyELfkfMD1iYwJPDb2WAH4uDbBJEwehiXszrEgMmJoCgF",
  "key24": "2rqfCF1cXUSCgsM5gVJbLGrHqSDKTTaqTprbkTr3m1waJQo79T7BFA4WMQp119Lh8qCiz7Lk99r9RK5TPgeZV9Dh",
  "key25": "57MnZwbFFMrAQLtpWkvPDvvXK7j1kh2rnDmv5FmXKNDT2w8yUaXDebvq4heZMLakoPpxVqJLfj7U2CwU8ZqZXHY9",
  "key26": "4mT2krAkjk9UQU7dZMY9JdC9QAAE1DzXnHTikCBgeE5TPT7HK2oxiF28Stw4XrXyRvuZA59BuxkWoQAVgaMknAyA",
  "key27": "5tP7aUXpLLJRbFoG1hUBynT3jYsbpT7DDSKu5WxmME4WxqAMYR1WSWz2vSz4XvoodcdPyi8YXWEontp1y3mLYHqM",
  "key28": "5X4gC6ByHRS3smKdgftguudyCtMcGJ8JnNUc2eFzjxRioi27UZBb15TYbuCdwD7AicRFacfFdGqstwo9LE29nTkd",
  "key29": "2mcD6XFzsZtVxmpk1yN4DJyyL3n7rZrk9DjUKadyMavkJjgQ5GHLLCsfXbFpzXkdctvVJvmW4xp4URq1zh7BaZbs",
  "key30": "2Y2Pi2VAq5jj6TH8MgkcLpUf2VE5AJTyYM4xUDjx4Zidusdfwzo3ETR1rTW9UHUcNkpyiSdbQgmHw5Q5A785hBqV",
  "key31": "2Gv4jS5YvVqivLN5y9W7yt3UWZ5zU72ZnorbbsxLMspTnURuHP3qPFfG5iKgGs5kQtByyrX9ThBzdgmLKMjzRbJj"
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
