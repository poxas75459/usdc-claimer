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
    "iDdjsJyvmjyfCmhfKAjYT7zV7kabXaBvbmAWUXT31BXSpYyzVREntdm7o2BPDsoeq1X1wYouxBisqzEXnoFWciN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zW4xtCrCYQAqZFsYnVvBa1bEncXMYFj6ao3y3Cn49ug5HGoe5pZHjAjnPAzP9sLWRqYZnbEiBhVEzkgxj7RsVn",
  "key1": "uhyrcrvV1dDN2VNRL1XE2Bmkmc3mb5SaBZbfjC1y1GowpzAo9o78ULr5ijVV79Z4njx4F8Gt2pRTFS76QEjkb2x",
  "key2": "1392ks2KiNqV7MPCi3xccvCnUDZxMHyc4XKY4xNTxA8YT9y4V9anHvSxBEkUkEd5R2gmB8kTX99uBruK2jVwav1",
  "key3": "a5vJ4CGSmHVcXKgNYf2ocP6Ev1vkK3KA7YoVMSPQuyURw4oV8qqLoQhr2jxn4ELt2yETNsGExAf41kxHoehsRTf",
  "key4": "3atYy4NQNZ5oZ54qohoFetphoJStDvK9CRM7QPukxwRgFuPENFXsw8qDsVMVDuUMWXmshSCekKs5MiewMow6WmGi",
  "key5": "5qXRd2vunRGQZQURHLq1BMgtzJ2QRAX3ZmYxjqSvk3gWUhEDWJ4jDZD7sBef1paXw47AR1yQyhFB9y6B52qMrri6",
  "key6": "2KtoogAPZ8cFRZBqsKZM95Mf3TKS4jC4Chsb96JoGiqn1MWxzSZWNNyDen36CxuWKLjFrj18dVqsFzVgaeBrXbt8",
  "key7": "2EMi7DYgfmXLFyQDpFtCUUWa34fV2TGY96h4FWZh8iqr7kyYwBowwAGN2npqMRJYg2SGhGyKmqVqRGA9KTL3Ytd5",
  "key8": "5GNK2WsAcp6upR2JRALJkSPSyajLHYe2wu9TRkuFc6Ra9bxJFM2UteXyci92nq8BFXq9CKboFA3o6iZamCW91iaz",
  "key9": "2nMwMAwBf1RkkecPmVcKhZwBULCfip8SYdZNaaxWjN6rUXwQRooZQQkJKMhe1ZchVaB7HauTF4PzdCFMAZwk1Cec",
  "key10": "4Rg9Yrnij1rwZ2N88Xc1aLrpjHssrtfJdz1gtoKcHc3dM1kmisasAo1sPZSc5Q6yAzvhjmkuu8YkZUsNGPEtJtnZ",
  "key11": "334CUZxdtXR7bTzcai66nLJfFRdc6636vF4xB26tWQ31B3mZKkphgYqHmJ4YJnPqaYyqk1cUx12PwemtAHkjUQUU",
  "key12": "4m29QhCUmpKDeXqcRrpiiHQKgHhgBRWU3QEwqDPnV6jn6VHwycGX63oSMW15PxFhwuLg9wT4gz5HmFst7oufHRnU",
  "key13": "3Gj44UfXonBKgZABoGwVdTPdEveq3HsSfaZ3RbpGVHxfqFDQkgYVJrjMFRLi3JveQGhBJKWXq4aJFYw3tcWiihRD",
  "key14": "3MPfknreXJkgNfzQVntS1enfc49CM4b88eNLLyN8WgJx1T799tBwyFoB6PJ96696mAjSY47YDLRSausT9Pxxgnon",
  "key15": "DFRPaf9xWSFreGHxe8pzRw2CiNjKatrVkoShoVptCEXGj5mAvKkkWwjDzfWBEmGJgJfCJY65MikXfU7yAJ9kv9W",
  "key16": "3WYLjkK7P1WApwQxpkPGV1jktNGs7NJttNcHquWkySRJzsbV6EZ1Kbri1r4ajaPvGohdhWYAg86HLvyAVeUqgCGe",
  "key17": "5Ga557FfppSrBxNDuh9qdXZQgv62RfxbWG5z3K1uwhq8hd4KksDEGMSwcVMda1jzYc1kKS3S9e6ddM5TfJM61r7j",
  "key18": "bWLkGNBpi4BZwMnuPZkVK8wKGURefaugHeCFAZXFTqBgTQq1XowQAZrSsGWmQnT97CAFLdy8wiWh5K1zyj8FND6",
  "key19": "29HH9bXFX9NLJwuF8YtPUNGtngCpZJXFNXM1aiwsdnJLx9MwMaEpcU4xWQaevQK2L4zYeGK4DrAxdgGDo9CEF5bX",
  "key20": "4Yd21M2cu2aw1JepaZBdwshSKavrZZVs7uALr3w4QzrBKRwZubCPhWjwbhGjJEJvSo9JQEHAbsEUiuQ632nv8bvL",
  "key21": "3f7XTUGxQTSLknofHsrVxWGkPvwxnA5njP8VixycEnoZhYQ3g5uus8XYcwKCz61ghnpFfmLrGZoDJbG8FMS8B7J3",
  "key22": "uit5uh12eZvCz78yDyjqLkjvDSQs3j9TovkPgvnj1hd7oHLKMUth2iaZ72fZcZ7YxNKaCq3jS6DreiKxBP6ePRB",
  "key23": "2kmFT5KAxZc7SaYyxc4SaFHxix5xrhnieEVx9Cda7N4wE8pJaQ62hQbyHBiRQwxqymjS55BCyyS4acRzZJKkdUDu",
  "key24": "SPLcHGPgdSLKhSrWQbTecDvkZx6CGNVjceuTd3BKYVXFY8CNsnjp3RyBf9BuSACJGTTUqsgPNJPzppHZtqK9qMB",
  "key25": "nR4SXA7LtNaYU3Mo3NXXJFqpRCqThRWisDU1QSARYERJNSLtqLAzvWgKqZ5i2tjCLq5Wy1WE3zVL6xZPzCFQG2K",
  "key26": "2V2R1M7NhDsQ1fRZGvMPJc6b33snJ4aoHvNVvZQyiAgD9dmv1STsNsb8o1cRXEt6QhqeKsvjfVVuzKHEm5MbZFPc",
  "key27": "3Pb5yxP3ohe6gUZKWcesNnor1ezKohCq6SF5dketPmudvvqqNBhWytfPaJeKjSi8ehEftiFDjWq6uh6HN6gp1P3i",
  "key28": "3dQSFFp5s2Djxpj4nVS4dDZBfHk7HsSfWnk7s4YgigmFkdR1aE7y2DTknmeCcRSMTsnyCSEqfJHz4qkMrdokhmyu",
  "key29": "2CFTSmMvFXjv3XtcfrqRNMZRXV58hDv7wEB5y8h5fqKBZPwS8vovrjJDmM2BV8MkajpHqtkc3wfQ5uHhsoNS1fcH",
  "key30": "4hFzxE3XXDR6k6ycfaeGazFQiT8ycDtxcTyfeufvEKH6YB8oGYymaDihkJM8sYjRtz7wxPt5NJuK1Jb5EZHE15Mh",
  "key31": "ZmuVSho3c2LMoUgrbppgPonkuT1Y3wk2DzzuYMmob6CAQfF5oK52cgcrXUAsMaR66nCNWoTvhckZWDPMLprfCmp",
  "key32": "MWoueqGduMca9Zqcf35sqQYtjZw811iarrDkp66jjyoCSCuuTrwucSZqqwFRwxkLaG64CsNZSESCLM4GG4xKWag",
  "key33": "3Tx5ZEcZqrpzCyHJ3TDoN2cmWgUZEApwYUuGUmSkfNquWb3pxPRYswQJwNed5oFuhn1gSW9wYHZT5xVmf6E9MNub",
  "key34": "3WCQmnBKHv9kE49ATCYAPR8T4zzTkDifUjsMtctMmRGqmH8ZpAmjB4eMXdVbDBVBKmpbhLbrrFTZyUu8p5yzNMJi",
  "key35": "qyv23J2wZn2y8vaTEHMcBJtoiYbb3LCjRjxKpBrQFuUVsPmyk6sV7opA9UXpM9CA3nfn8tueaj6qXwwsGe9swQc",
  "key36": "4A6B5neb8ekDUFuzY73Vb6chsiVwh9iHFAffjbeX9FjgEtJPipgWpdQ1CEgpGQeL7D2vMbESnbxG2e2GCrMQ7dQr",
  "key37": "2UfYoUkR6kWt4eVhEL1kSNNPSGgWW2g7KVDnw1qkbvNaqnnYp95YeXxddgT9rNAHAZ6JmTL5J35fDrRCGEMyAwY1",
  "key38": "5aMNqhWZKBaZ3kPDPpgzZeiqS1URg28FE6LiWZg2mjANjJcm9PaJZ31umhP34MBouekca2bF6rQqucQEs93cvmkY"
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
