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
    "3ycsDzgmBSFGci8eRrHENBZ355dg2M6mV2Tfd37Pmwuuz1NmYFTuLLpJvrPHKi9AwdHqwU4RmY6JgL9e2iUq5UQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgG4xvCcqDmqXeUf841JB9PDkKKmSbbnbRRM4w43pzi3gtF6xTZwxNm2aVSAqFoamZbto3ukfYWoN6zmL8meC63",
  "key1": "2oc1GsEofDbwqt9WvY9ztF3kRwrH9TkjdVGXyD36YVp9EJLFN19yWJSVYt6rFo74H2WjoqjWzkNzZcUk8W9LkPMu",
  "key2": "48mSFjNPbTDWVZ5JZREGqo48HT58aTJ2WeACnaJG2MT74avnDQjBDmMUtx4zKLCn3tnXacDpcAEz1pPvTd5Mx2Zi",
  "key3": "2JqsDS81kiky3GosZFaL3ZDPbnGhFY9V8BWSE1CjyjrWgvDf7BXH49HjJpCbgcN5sk3ruPAUbeN1QhBtc5Y8NeYN",
  "key4": "YYFM6Di97xTMPwBdWNEfSHz1mCr5V4JzJkVXtbvg52yBRPPGTxuWUBQSd5qu7K27Wa6HfaSqui6eAGqgtCkP1Sj",
  "key5": "64pU7imB4E9qoWrzjtWawV1uH19joJVQSTmjTFLioCWRtyCvwxk9X55UYnyDrchoCQwcqVNQu8iUz5EGLJaEQ52L",
  "key6": "38BJPrE6yRdCPixPXexGNAqxvfsZNuGLmtfvzTVzzvk27QqYQjF7AJWFgCc4a1DnEV8npGPJyaqhC8QufM4o5Ve4",
  "key7": "3xbpCNUq4Cia9DKP8Xu1Lde5JQ5qoqV5VEXbWY39Mz66VTv6Ac1Rc3aZDraH1MvU7qygZMiv7WvZXowYyAv9qTcy",
  "key8": "38YDghBm3dF6qyqafDj31L73xXB3CUV3mqkfwVAimafUrTvRDcBzPU2NZyDhKJPS234V8zZ67MDFCwAwJxWWnKXy",
  "key9": "Gn6pGLS3mb1TpNgw49S9Bw7mA45VkXEgVYKdmwSA7sfvP8Ua6JKqKWn4UfT2KMQKtxvvTeQkibzEE9KwpdP9C7J",
  "key10": "58HThHpqSUnMZ9CVBqtouB455yen5jLkwN1sq1Nwj287GPZUv3MdGQ4te3EWshYszWJGe2tPwk9h3UGrnESKZ1Tv",
  "key11": "5nNnf536mVzxUKBRanEFkXbUDxgaSbgu53xwnZ12uSuJ7m5GcU8hy9LgoCLySgJMwtQ1migR3UwZZtFcBGUUkpVS",
  "key12": "566RRszprji4wRyyu3pVXi33u23sWQcnzMd3mkuNENA28icNw81L9S8KNDPJ17FeeFfzV1PZMJn6vseBALdaQs9W",
  "key13": "5gnu9DZhxVxUpheETNuqDtT2utHGi3BUnstdpXzUeiC7PqXqJgwHNcMPe5QR2oXbWZtV3pRFZAGAKcHARWMguvCv",
  "key14": "5fVbxDfzixJQZmUYiZgHFEjdnpLHP39ypP5jVp51JRQ7HDtB8KvNZvGq5iNzwxTTQir9gk7UvDbbsbnN5V6951bk",
  "key15": "4PTZub91jW86yJ5vM98FvsxebGxHKgxnaad2dUrPGuSDgGsmQ5NAu3JfsUisFq7CF3S8tJnH8ryXqqg2LWb8BMEr",
  "key16": "YgYBMbYPS4tZG8GEY8wkY4TpmfrHUP1hg7TieYQQqfGU4UEFAfUZWXK6tZAtnHWaYvEqZbjCFqDW99gFhsrNBnD",
  "key17": "3zDbDs2RMrxbLSkRDQ3HUm9yQSvq9SYe9wTDAYMUiH7a5GUMdHtwYvoLfRigLYi9gx2BzwEu1ZK5LYSTgabaQCfo",
  "key18": "4jAkg9nU5i2ApuydeYBmitkeRYX8hFuYMkccukvZb5A6tLenXHQdDzwg9m1cQW8izmrvX35N23RJ6d4w16uESKaa",
  "key19": "BP2gHkojhkijQdF5sWwX1PwtCjxdBU47u7KbY9F2cbzfDw5SiXCLwqLxdurc9N7rM2oAWf5g4qG25khPRfAwkqN",
  "key20": "5FCriFTs7i4E7cok4CJBkhJ4zK53EYknsB3qynmAt8bLiS4hJVxczZWuT7Y7SM7p86SoHBNv8iYpZBAbcZDm4CD5",
  "key21": "3aLJm99HKh6VyNm9zJGz1AXK62JUr7Q2dzReazG8iXoWEtrzbuyVqjRgtVBr64iDNQA4MdVp3QYyskqzPDSBrTFj",
  "key22": "3iWcjFE5N9DDXfgFCnfvRL8zsR53BQY1kbD6EgJDFAgQAGJX7fkK56DBSED6VSCopQF8qYFdfczdBaXtzAPYF353",
  "key23": "2wApovUDzTkEGYn9YbZYGkZVRh2gDxxNHh61pz5koBGwUHkuBBUkaPiNu4Yhd9gwqLk1yWGD9WjignWgtjt2de2U",
  "key24": "5FR6X51WdjH2CH8AFNnCbkefuskwPrSmYGHBR7zN1uwF6jnCZN1cDqq8bDLxqtRnje7yULtm2u5D1jMB5Wu31ULd",
  "key25": "44u6eVAhrC53TMx3oyhw5uqNHUDA77Cz7T8bnSuChqKDLdstDCT7Hu4chhjrvLwQQjZqidMyXBY3Y82esc7Lu6Kh",
  "key26": "5fz5tvAtZ2uycSdvsJnSp8UvH92aSPU1Le4cQffRtTLb21r1yErCEP5eWDJW2GDezMnG2eTvuSni3rWt3ZppywkD",
  "key27": "4asv5P2WEahKTg6DWAzRHhqJsJn39M16KtnPuD89WHmGL34zu5MNDpsxbfaKpa7CsaYPjueMGiBseRT8hVPskQ7R",
  "key28": "4iQERfTdZ4ithyXDzyduquKVCN3Xd7y4YeZV9ZrL9PbKBnAPJ1PBbXzwm4aamfTcqbyEEu1vZoFkcXGvECFTCQ6H",
  "key29": "5yiSYb1caNmoECXA34uHdWvE3ByhjCyWj4H6Znnbx3uymV96dnsjvUgqWTnWoJXsoC1pkF3zQck76cHwGPbkXo2N",
  "key30": "36ideGmbWZ1KXLf49y5ue9LxSHVW7b7MXwMEV5p9QRknRwxxShWo9mbcPJ7wbPPzNFVoeRPXtZdRmu9sBPfp63bs",
  "key31": "42NCwTu5uKUGakcbVBcWThe6V1FWaD5eocCrWGHvn3Pi3T66mU3Pz9GVJrZtQ3SzrvERkUZc1QvE2CvcaiqARYzk"
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
