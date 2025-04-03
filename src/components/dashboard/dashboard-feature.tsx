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
    "KD62F7tAWP7tDeXHPi2W1UwZAkkvLsx6KJsydEmy6SmP664DfromWDjN43jdZ2sZx3PoUQ8GYcYaWQbgBVEJH7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjSe8jKGy8XeZqnmL9h8TbxAaDBhM1PVnGk4kxNHabjxpzUdWS98SdKgnKmMrKdrjDANMERFgPimMk2diLc57jh",
  "key1": "47YumE6dqHoccELcuCFweezqfJ4DVsGeErirK336UP56FAF6GNr7zugyjoJMD2Yu6v3f2ZY33o5ha2YtA5vtt5WQ",
  "key2": "452iKS2JnaETvv4tXR5bAmmxSZCETGqFGdbHWp5Gs4k8PFCEJYRBei7DjcXevykD6Pjh6sU87M7UnewDfZkimATr",
  "key3": "2PuJ83BAb5t919QPhGi7bXPR1CDg8o24Mcfs4aajUDHabwn1M21dHy54AH7KRftZbF7vAWem6F3PRLLcUnSYezZq",
  "key4": "4xaWuACwyfP4KVvohcpMY6mpEMKjrdxp1iL7a2zd6s6jeWzD3MF9HkTvsM5cMaHxc2xDWrkxJCP7x1xrzN5xa49y",
  "key5": "LGtBXSKEcXhBeJxVtZrn3RiRE9D8xS2p6Px7oxSNHVWrvceX3o1KBcDsa3vuNGLhLW7xuznfHAvSbqmpT4EWevX",
  "key6": "4bJfT6zEpLsB4f26eh3SbDpMt2b9DvaVn99hwSWPghyFeuwEWB8gDmvww6u2j2cj6uWnaNybtoGotaTtPofSUn3S",
  "key7": "5TzdcTs7Zu826TCQGXYr65TRYFeuztfjukrmqQk2EPKyUUzJKXaWTzT7o9ZWBfmTbnBunNi2Ua9QU5GiJyxqG826",
  "key8": "UbCB67xicK4534DdXxVXuyP39Ju7Dx2zsXw8ZWUx6NfYFDSeHaPbiuA1cbrjegdHtNQfezPidP2Pd8cRg6CebES",
  "key9": "dusgkJ6aJfUS2Qi3r1Y1TvQzkNBnxwGRZWLMtY9qWL97eCGaxX5efes6d2TAYG39HTcxRFtfZcSbgxF9m5NL7PF",
  "key10": "3bA56vCSzADBoAPT8s7Apr24yH4Eic7gQEPoefQBiGXjEeYsggL1DGsQzBXYqwWNkxdcBqLHrJhmGkQ23mWCyFUC",
  "key11": "3cD66xFGBY6udng3VP3n1AEFS1t9L7K4oTkV7j8zzPS7hv4CVoFmRZwUw1dfuh3j9dibty39VgcNj4byHe335Eto",
  "key12": "WALJMEAQW1hbQKkyGV5kJiA3vTkYvs6oPhSrxr8cwzMtM5JrhKXZwtktgwuX3HnMZrmMSXaJjQNteXJotYfkwFA",
  "key13": "4Se5to7UQxU2L4GXcHfH9wQuzavSjinP5B6QU6fbLMmSu4Kk89jevEo59uStiu61Z77ACD5axAwhqGMnx47oXT5v",
  "key14": "uo4wxgu9t6WhQqiRtg8hqoBaQbE4gs8zLXDpBogLf59J8sccnC4AMHtoJpTaCctsZSWGnZynFKhXMhxvu1GgYPz",
  "key15": "5TptDWCZP9ikDABkjZQesdGTGREdSGgAnnL1Gz7KzWmubVZcks8GbCHkhJEwHeu65RPc2LkWhcNM2tRnsX5V4p8j",
  "key16": "2U7sxJpb1FoWeXx4MRV4DWiSYFJPBF44xna4UJgsmqxKHtSuaaPTHoA5HPtJFLSmX6ry2EH8urBkvgmSd1VmD24",
  "key17": "5b6YaqgG2TpcXVXGkqdQGfapEkBSDA94zRH2E6t4Wr113j4iWiiTfxFt4XVaDrQFXkTha3uzCRYv46krVGaBBd4S",
  "key18": "27oSh5FSJXdqLUSbfp52RhQasUctZuKQADMKNR2G1W4GtpTcHh733dGzcb2DD6rGHyX9eWHQmF9xtnemXnjkughg",
  "key19": "4LpPPjcwioT1jYU3fpsQiXWNCA4AvaEpqjfbL8hgLxf5wTexVgcwNBSySTK9cPCWVfVQDDFhvmNsSFdAouCnamWp",
  "key20": "zzkbvkRmrnoLFxxxAwiFzw9BALzeFuzP2rfnLUMpGyfvs8m2XwaTxnQMudnRYgHNzfiAG4FzQLrh9V8qmb1cGyq",
  "key21": "51vEmWZvLM1i6y7bz87fVAWPFkjEPQyhLuvABvY4RfnrbHqEdsGptxKkceAQj2cayxUHKx34mm5ixe7ckwPoH2ES",
  "key22": "2GCoyuLwZ5w8DxfYyuN2zn2GtZnNBA6oks215LhToSH2ALH6QvfTNN4MGYHtwV1ae5nDMbSc28K7Nrzw85wnHZkH",
  "key23": "5bBw9Z5uZvBYojQDggaEKeFkQZQjG2K7YhjRzWqCz1s7yryMPSR6pfsyWBSoKfpJvfzfpwdHqvBuzNKWo6fauNtG",
  "key24": "5HLsZ9E8TWkk3WCzYD38jirXmBS3xc3qxtNMDjShz5sir5QeXGtNRnftmrNf99KhMioRjc3dnu5sYoEkGcMVaFgE",
  "key25": "VtwXUyRk1zRMmLFyJTLGAvumtB9gNX7nUJwuaNysexCKeAszvmF5b6ESz5tDG52EEjzuowqQ77wmLynVY9eJLC2",
  "key26": "2H6oewzpP5coqYVsDe5UcKX2FHoEbgCr5Jn5ZZaXM4958j9icqp85MkxTUcuB28KZtJPGj4mvsESp7JiQWjfCp2X",
  "key27": "24cF5vjMmdnUtpbpQ8Dh73hnPntWpTzEcBStNhbGJURsnaoJnn9JGgw2u3TNRSFy4X6CZuVDkBRKdiodR6joFng2",
  "key28": "33fm5ov2JwwQfKzXYDnREGMJnHmacWPp8ot5zXHqLSXrAwDSyvz385EoQKv41rrK7LFjJEvWtpZWsbq8GZYnG9gN",
  "key29": "3vSQQY4mYevRGkQVRKc7jq6VMRJg4hkbwr2rwV4ddbmeY6RsEqvBMXmuywi4e1T5ioFcp863gQPqW7ywSWgMdwtn",
  "key30": "2URhY3SoxXAHPko7BpchDBw4VY4vkq2zezc9RiWzKKCRJwt9o97LrwXeFQEk24VsBTLPRxMBD8anQYKNXNKcPEzd",
  "key31": "2RgW7NDZQchWu4nXUrQEqkgsSShhS6nLw4e5rNPM5D3NBN4XWqp1t7z49ybvc7EAJELtTmJLVbfnQaJKHP4ewvqH",
  "key32": "4kKyn6rFacbipcdpc7UCQaHYKFtexgK5Eby3tndwJkBF3PHTHpArJJg3T8e427PVALjEvRoCqMH4e1GDYrcz7KTR"
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
