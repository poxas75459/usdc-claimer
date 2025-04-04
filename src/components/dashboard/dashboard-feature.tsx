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
    "3TVFwVrRZXnmYEdLBKq4WdnoKaSLyFavZqTjmKeeW8zXnnYUG4RC8fEN94FqfqwgTZkyEDGHGgcqewf57pVbfvuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bgH3GmgyAGSguSxZEVp8GWFaGoaGu9Dew3uQiiNyP3E8ibU8BwykMiyxskZSquWX6bRCpQpawVuySzdUPniGj7D",
  "key1": "5HTPm6VgUpxK3fU72oXNHp5NwLHeNZsRxzrn4FFd6vJcr2dbnZ8ohVvToh7PZFcXksJwejigXBNqe8xzaVsCJLzt",
  "key2": "4YhnczM5i2Bch5n84XKzX46TmUtKbcT2NbAj5bc4EQSyYeYGcZFMb6YKnYjA64Z7WGFHsMwzk5EZmHvTvtF4g25Z",
  "key3": "4DRGMWBNXR4vhYtrH3efaMUEY8bDPaXtRS8LHUnmDxUbUwMMK8Xb41jTikYn4ijG6RYp9YuAG17eSGZjFZGGHgQZ",
  "key4": "5sbGAb2AHczUvkEAqtMNnJcdqmVrXgH651qZnVWFnDqDJSwnWNH9pHQtN5cdZJwSrNgQeKXsU5GiCYRjkwmDn2Cc",
  "key5": "657nDvpDtZRg8k7M2NgvShN2ANEuh9CagUEB7hgCQH4UxG7PWEM3L7cyMqcJjnP7H5NYq4uf6RYGTGzSxhRuPWU8",
  "key6": "374uBQRrx2k7Bh1Za3NhniNYRvNbwPHxWv9daeswdr8qu4VHHFp9FToHJnfvf3xsmnsEzZVvxFAmmGv4HXknoiP9",
  "key7": "3RfYUuS1xRwVqWgmAaDtKwM7As16hmYj5JNSr1h1HdDmwFQonZsrXdNneLyus21vwhVWZPue3vhAPoYywRFfDZNY",
  "key8": "2GG9LJ65Z4rSghTtenmFtTM4CyYwtGKeH9exfcgNbv1ACoKr3KKdqZGaN1W5uTLXxVeUXzTTQHJhZwHeWtaQeVW7",
  "key9": "2sgbBdw7bAb8MVCZqXvenAuxYi4gApUm8B1SrxR2q5UagcXzEJdMxGJLwCEzmeeczgMvzNHg6VncmA4Ft5Wyc68u",
  "key10": "SGscycxrERTkv1Z58W71oeqZS5U8LL7nnzhAea8Hnmudyq8yNLeZMZPMBgMPWhU69bk964MUqBT1s3Uk1LmMdkT",
  "key11": "2QNMY9X9Bu8sGZP9NuqvMkG6aenhFZeCR6Q4yC82cth5JHhUEHMygfsJmhCMMegqMAtHq4gR6iwXvoUbYytaNmri",
  "key12": "4mgm7fnrMMwg6Xb4g8yDEE6DdMcKGpVeoArKKPTVxSvvgyLRsbj4QjYpcvEE5NQnNohWKgameMRu28jM75FFUAip",
  "key13": "3HGFk42CzwajRCCa1QmxKoSeL25Niq7oppPWF2W1mWs8JvvBXhxuLKkvwdnpGtJtevXjkuLY3pEoYRdEaPejgE4n",
  "key14": "5EfmmCNyUL1Bgsnjr3gnFSLQ91XZxqNz6HmyaA8XkHgiihx5VtpgErFm2c5DQxoj5meZGb88EKULVHHATc8WGgbJ",
  "key15": "4zQTJF2kbGtjejcKzvmVZDaexn8TdHAvMoKizHy65jkvvgBUCpvK8BXrUsoUza3JEQVNwUSL83CavGozaWN5fc3a",
  "key16": "2xEqv5qkuvhEFmk4C72XUVDjAWYTQ2HVxZCFw3o9iefxRTKw7mPDcg7uYpg9oT3XzmaxFpfTREVVhCwtR1tevqbe",
  "key17": "4y3LidkxShx7UVBBNqQGVBWdMftaHTmdUZV8WFdp2vgwp4eHvxocqoEimyDUACgNrkdBhVxMcTCXsGdd72N3eyQx",
  "key18": "dKBoipt5EoMZsK7PgirnHs5i3dH9wh1eFHJ5R9EXqDEJ3pEJjVFWiWe5JLsbvggjGmd1EGWUb8UfBf8wANFvtrG",
  "key19": "4CJKbVFnFu8dVkZSaAE69vRz7YXgha754rRmhAnZvyXg9KF1b2FAWLsvrvjd9cgtgZgZ7AF54JhyF6VHVYYA2o4W",
  "key20": "5vAoxdyzZkaPg9Dep1pSnm5JfVABD14DfR23TY5Rc4i3QehtckPsSfVRArQLfWvJwgREUeqodpgzaiAGRSMjz88x",
  "key21": "4ppiCMrg1pt4iwsjXQu52XaJyM6cG6F1WELVXMYL9qDc1Dykzpu2U3znXxCuBVSRBqs9tGSjCQiQ5R7eKXVMAbi2",
  "key22": "Fe9VChwRzgPPo4VXcxG4HRqZwB4offzH7XCzp6s3ntoG7ogw5w6jxcqYorP4auim7uvvgR39fcMosRAcaUNRzTn",
  "key23": "5ZR1akh59hPvTFYLBBAUC63Twoq29wvPPkfssM44cUoWGXZsbFcVzwrcBQkq3ampyF7kRMjJc91PqRFhfh6ENXNy",
  "key24": "48pKRzDmJW9RryGKXPXkd6SzzdwUASGyywGtKZTaybNGcXDp1WWZUbHAejGBf92pbD4z1eHEN7E5dXw2gjEkAJY6",
  "key25": "5BtceXTARiwUufvVw6JnhmveTYhxxv5WbKLZnSj4nmv55qrozEdav3uqf68gUNmLwxRZrBGqbzB4TRpQ3GESoeU6",
  "key26": "45XMDnK6GWR2GXwKe2NkQnrTCz6smmG3z5YjAxUmb1j4ACVXd8gEicEcgrokG6SBWrrPjTHaBvj65FNHjcz7hkwR",
  "key27": "55kZgLMg8Vk2nJDfyPFuP2Xucppv2p25ciA9vH5xysPqZMxcXNDHDpoduJgM4KP6r6ZZZfJcv7Wvzud46KEVvJKc",
  "key28": "2Yi2GKMcYhvDeu2VvCN3qt2GRJTk1K2AobKvkX3KfXqs7SZ9w43BpQTUkEbxDYe2hQ4BZZMB5uUt39bVPWySzPmB",
  "key29": "3K43cSYkKBP51ndx7mDUg3Labouh9BH2J5PidbE8ZkJ4MDPxMeajPPzLEFe3jyE9mD7b7U5UgnXu6hNx6WKigkCr",
  "key30": "HEGbDk4HrYKgyWpHtjUynS7hi8YeYV2LMAaKP6vdA54L41sLycx8ocuoDdmhG7A9nQwUWLSUd3JTdBhUZ22671y",
  "key31": "2LSM1wJpcZNmQCMxDyTRDatM76TnDXyJQyGAxAGgSQgfqapWGMXwfrJYSgeGHD1r2Y2TNRTJZyqKi52ZBQMkkinH"
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
