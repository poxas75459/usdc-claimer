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
    "4Fq353wC9H4ZADM8JiPRmPVnBXYaq6Y2rX57x7gJmK6zEpzXpwumm37iwPi93A7wtBDddPyHQE8jZYyAFTEYDxbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMriNv7zX1cmAMAbeMmPjxwqGQAVZPrt7S6v7PHfASA3xxrzyUWzKf2MUpZYb365zDZwFDciu4X4tnYfx7j8D4n",
  "key1": "4ZQUfzq4wrEmobyWA9Tn7uBxfQaXwvgs22Qrso6Qs2ocLL1KqffmxtoJ62MnbVXT8jgeb1L4FqKo7YEsuUibbWnW",
  "key2": "5ywRkDYK8i7yekJyu2JUdxdFtvnaovhuinEVj469hZTbSUsY2X2PDqNfXLQ5xvQv65JaMxYavzdLGjqdeLr3aFc5",
  "key3": "2WZBPtwaZTF5wyBLXNLWTJQBXxcg6gLsaTZhb4mDMq5LeoxiL8AjGd223PofUBNpvDC63Uy4RzFXkHpcEFpovpPA",
  "key4": "268Y3jodXCok5q49aFYCueLciDXET8rnRLv4wCJUDLE1Kctnk7S1qYVhnEWWZszKPQy9d9fkkHSk8EK8J2jboEvd",
  "key5": "FQMzsxUyZmey878Mu8pCHWVUUEB5JW9LcQesRDs5iXyKRzE3qS9C3d8fjxaSQRJ1okBjxYpTBxKUUzcx44YP4V4",
  "key6": "3ZjBi5DPWYC2jYDP5gS5qwpTg6Kt3E667hr5F4zpn5Dnvmvr2AJBYZJmv1czJREfV9Qsf7845x319wyzBNh5TBZg",
  "key7": "4Y1FL5GxawNsovHvqhhNamFQJdGHCetSCkpEG82S4itRrepiE9cqY3GC4udVc7tf8fNbLVS6LAz3CrdVY9Z7o1Ax",
  "key8": "3LxYPvSZuc5WLJHh4bKukSjWfrvA7MT89vYtREQgxYRyv5gTYY9FP5pFxv2C9m64z29hFGgzWPxAGWbDj3rHrqxg",
  "key9": "5SbN8FqU2qYYik6MVYHEfi2VLGXjiUgojMfsbpYntPuvBp1rMB5y188knQpj9VzxkfXc4hDuCUKn6LWjrKXtkoKx",
  "key10": "5HKNHsiF5StAjxYDngyFEoMB7EDZq5gUozYZhiHXFcqgtH9YSSFUvMsYKWeZ7vvChzoqAmEgJW9omfG8LJQUmUJF",
  "key11": "5bAKt7cAKgWEwL6zStkhgAXs2vGtkW3A2JdfVYwMzH77Dg5ojnFzFkF7DE9YXuiHFqcAazPULZLCk3KmfC9WhDoj",
  "key12": "34vzpk1RuxqYXMCvsEPy6ip4J5V8wTEE7VNCr84DgE1pqAJanthmNgj4NtkFGPFkC2nPBkLmRfC2tNLPBN2XEnK9",
  "key13": "5CssL8oq5u5Rp38GXnGD4dtr2ZmzRo4BuVZ4EaaVdDhyrNrJmQyc7XDDNDWy6ZeedtDyMdm9YHG76rvjtjLBmzxd",
  "key14": "Np7H3PBNvNhkbcLLDpinjpv1btSacm2UuZCzbXw8JYWG5WV5kFogq4yGHkBNhgPGxKZiv1UCa6XYSHn9JkCNtuB",
  "key15": "J2CBTJm8QzAS9iid8TregMrmyaUdT9sRbRtQjxK4NtbdwcmEVW1HAcUDbu1vJ4kEzjiL8FMYHqh6dSpVFSyvKv8",
  "key16": "2ejMXej7FX7D7UGsYvJN8yQoGqqJ4tNs51iZrHWvreW8MeBS4vhWETGFpMscxS5AHLnodsRXYDaTbLuwnzCe2LJe",
  "key17": "r6JXHk2tmdYrq7KWFnfcMVBmEhSsEgu3ff7NF14LhRJubSe43tErkUuX3DrSZFhXhXxM7RjW5wz3N7ANx7ZLusC",
  "key18": "3DxYvnwafbir6mfQgnVt4M4xhfYn7jEN2ZFniNAw6XQiUs33Xn1syi2Y2MCaMzR1H5LJ4BUzEKSu2VoXEyLH5EYR",
  "key19": "32yNLbkmn54mwv1J8wE4ScZLGckRjMgyiQ9jasWHeFawiUjsvVe5XSUrhqYSV5f25BViATPtAC9E8Keu9M5vxQvQ",
  "key20": "8dYubc1eeBeaLygR9nGk8TvJjqLveQKKLpHixq3WeWT6U58jTHA5NrgsaVnVJmUddgPXcuCU1yL8sr253hgzUoK",
  "key21": "doYm1WcaEBV4hC4hwHmhna58vrCFE6e3nbwkk2Tmzx9w5V5L6TDowEH3pnijP2UMmm4mdir4Kv3HAgd8r5y75wH",
  "key22": "2jm2J5fMCLwJfJAG3e1H3Ug1rygAzfNPsMeCnF63AgNoZ8cs2mEkcXML4K2rUzbMHjYhoKsWW5xrHKDgeZoSVj3v",
  "key23": "2SV2yP9L84dikuhFr9btL7uydn8W3YV9Nfsf2jS9vtbPA819edbo7qKW3ns8ZNv47xo29Cb5kVZqQVrG516u83qg",
  "key24": "4ysv4izmqZo2aG7S6s2vs4qRRYGL8WazQb1u4yVuhswx6aJXbY8rRqvGiqNB4iT2vky7WW8nJ5bymJ2LDz1SQgz2",
  "key25": "5SbRrNBG8j2V3HZ9EMaYCndPQbzVdSTSQ6pVbZMzUG73rj2csF7mckXrP5mhtCzkcd3JK7pGNdKWyJsCFR6dxoP9",
  "key26": "YhHzaaDoEbTqjTmRx2n4gfjSWqQY3KmJ5ZpvsSPxyHNb14vCPESSaZSpeme7ym2HQpJ4VkNcdnNoQkRcVM5AKpp",
  "key27": "4MxBFX672YEwrGsjhchz7R7WHh7tjL2sArK5sZDht28raBCCeb7PVGDtegWYApiSaqL685UogsuEqu1kFAsvKhd4",
  "key28": "4bQ2LvDjPaR7HAr6CRZJvdGrmrQs5ApShTv5eRa7c5mynWA6uM3VHCeus2p2mPWDa7F2RftdbRYY1ayC6uoVBt4J",
  "key29": "4ZiGaQ1WZaYs2EsSwQnu2Rv2ccgh6yK6K6U1CGeDTzVC4JaRRJ5HXJEj5eFuds5ANtauAgGTLqoTeGReGtcBjun8",
  "key30": "4bXVN4JQRy21xn98L5cnGbqs6pWidfGQyJHZM2K93QKQx27patSpYquhdT73QPdKpFuU4hoXJpcetuxN3Uvvb3Ma",
  "key31": "4EfKtLVxEM1TDkDTcLe6mVDX6V7vWkBJoxbbUMs1Vy9gSu3jVJS4rt5NaGjBQCH8gJTAsown7VR1bEewQYATFT37",
  "key32": "2V4BSfXuJvDQSX91vSJexoB7jVXzaXEsK1izpMzXKkcPhTyd7ny8DhMPv1wtcAiy8CaGiEyP2GmwRwoGdJgSErhm",
  "key33": "35SDcX9JqRX84RRCE5ExJY8vKX8qz48Ga8pNZKEx9WajGPF7vomFcd8LmEe1RZPFc21LyMT5DT1KNhcxck5H17j8",
  "key34": "3fbcY4eSb3c21s2gWkvxnFnDJtiVAqKzS464iXeGrgu7mb2MKhkfvJDWDxqcw5qQewH9TdFkWfCnRQgNF8jx315x",
  "key35": "4ByxGzgkB1ueDbyyT2PQ82S5bB9SaLqpkudcnCikXrEv3hFQVZr6p5qMk9Tf492qyq76vcZamvAYwoKqxdQkYs5W",
  "key36": "64VdXECpVADUyWWZewYXMFr26BA4mfnvHEPkH3aMkqZrHyLS6s4t3TJynDeRcyHb2uFwUmPWMwCJLBztLdLFZ3yS",
  "key37": "61EeMgSqvWKkDJ7oWVBsigs1oZ25W7VTJ9pa5yLM9kdn92gHALN4ZMvJSJzbAvaWN857Ue72nCfMFtejgG4AMrBJ",
  "key38": "2B5itzMyaVdfhSsyh3WxvAtqgV9YqsunDV76tvjjMvaxcdjH4H6sjZZGBTH3pHCMAsy4fnWMCokLeW7wEewcZasa",
  "key39": "4VgsVxpcwFGfheT6kcvQKNNgdcdUN6E7ZYheGYrUj8xDriwF1EM3gmDLjUJB2bRH8BmADYZ2QjbWUDTDJbKRKATD"
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
