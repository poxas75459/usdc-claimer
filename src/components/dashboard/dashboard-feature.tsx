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
    "3SBfyBWmL2anqmNQagr3EomFdBFRrt71Yp6a8rsuxydgLcfC1QDtzAGcaMyQLEr3VqtXQFPgTF9DM7eZjNz2jWuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AcyQVt6ztCxA3CPnf1DM3xxcCmpQ1ugoa6wxUD9aTC7Ce4ikhAGWU12kCndt49EUcaBZ5zY2LmuFTTaDNb72HFB",
  "key1": "2JSm9MNUMJJjXBLpkR1H4TjiDVR5sHryFHvj4KdCAjQ6NpXVupcyci6K8XDYRfybnHWFSByhQ8WignTVK2eLb97h",
  "key2": "5okf9QBp2oV2pQ3zqigtCGGCegUeAV2xBCWR7FV5aVwYqazVZBY88rCjSKGhhz1EhmmXXZyAwPzp375kvpQc3z7U",
  "key3": "C7CeR6KL7Xkbqk4vGFxms1SPdVw8NF8VBn2mg4hmzc4G3NqQH3ao1n5MFxRLqQJFjLDT6sLBKrPjinu8J166WXC",
  "key4": "voChXsQ2wzpYyuVEGpLFPMog2urhybJYPv9PTZYVLvyyALEpevgC5rRBapeXvS3qXF1DhA5h4nu3mymkPAuh9ZC",
  "key5": "5mVeXP4JohFYoGP2V5SNrpSPdbNpaGF8xmLhEfvCTPe1Bkyf8SzczkchDepiDLK7uhjds87DkvoTurjcSVa5ryXb",
  "key6": "3oCNaRJDXwu6Y4tvvRiDsqQjgAUHqiaG476nw8k8HTFMAouscHCyN6jc6Zhe5rPwbAYiyQArqEH9vrBE8pkAKctw",
  "key7": "VHStuDBkruY7rNGcWQynVKcZdT5RNyzPh3WbrtA8qYhvnFf9gPpecGCjPqGjYKdZiwcDuwoTCb59WGRqjbUmUKW",
  "key8": "ov3iZENvjpxSC3nAn2HdZmcUnTbFNWaKFFQHpFuX5ZeEEc9wxWoFMnYBDKVpdWSfmVcHcJSV5emihJqhJ2UDVFg",
  "key9": "fYcM8fUh8a5ZP7u9gS7u5A8zoDbHCCKnARqRbjR4hJbmULZdbxAJahGR4vS3ynzqHu8YP7hQAf7m4j4Xv6YenkB",
  "key10": "5x6gWRWVZ9kC32kWpCYdFLfRxqqBbmRiQxHt9qNwdSnjbJYpDdNE9wg57K8ZrueoCg8DG8EkaZwTynzVQkmt1P1i",
  "key11": "25g1Tq2RvQTwpXN3icZYJ7hy8E9pk5ufaqDFQ6gcYPxRcDFSCt3EAyk3SQ83f7w9kG4y5578LuSK5wBeB9MMEMFw",
  "key12": "cPZnnidevUhbmutokMYL3x8BUwGmdjpBMZjTW1JGCrfZCjNTTCruZQkRkvWfmV52VtCTbYDNuUSgUphq7Nm86ut",
  "key13": "679V6pNNLLHLzybzQ3WTbFaGYSL8gRaCNSPTuSq7DiMGGr9nqbbTtsGgTDc6rTR2iUwkdZ1koj2Acc5AAAqbp7ZS",
  "key14": "3aoUfYzpyN8HKQJvWBqDq31WYE3oVoYCvRqirfk8jskLcANdLCcUUYDBpGTsN7siywGZbNFSNQjpzUZqa3vfuXjW",
  "key15": "45CgtNY74zRyDZBiFQJPZpdL6eC6qEMptCTfufkBdnmsPWfhhpNunQYEhKwrgQjdK5byVkwefBdPdHSkHtvHZ6MF",
  "key16": "56ahjTdE3VwDHSPXt5QuPgC5kAD8ZAPeZsKvFzWX2zaVLDtz9o72tQGMfrWVqrpkYcgYA5rCtNo4f7nfSzQwrCTe",
  "key17": "5ugsba2CQFAkKtUheZ12tpuuftgm7t9xqgrs9FB8uN2Mc126TzJbfC8vx8mkoM2MaoPQ9PhDp3S45q933A8QETXo",
  "key18": "98rCgyyPvxGMMJ4AtUpHjdBnMZqm67RzG7rHNA7TVVdaHJzjkFyL6rKbCLu35PSq6MFFRSSXCSDMeRQWaaY1EsD",
  "key19": "T7fK68NXEMgA9PiVeLx9p4yFqkTmHwZa8eaX5bXRaeuHMrD8ZWeB3VtjkFSmxYHCnc1LwgbkqUDP6uJ4djMqrKK",
  "key20": "5nkSXFjwJKvAwkpTsjNgmUBgP7KR6vETvZ92JyYJ39DBTWBWGhe19BT7Z1bmMDr66YpPLdQaTHRgFxFoEeYb2BGM",
  "key21": "oM9sU7bzKTr6YzwEqTvKyKcFXMTgPqzWzHh144j327pTfeDUGUn8hiFvxUGxpK7Taj9irc3MYRpVQHiSnHhh14C",
  "key22": "4VGCSLUyNXrkmkCJW8jykXEhwWgvAzhpgVZ4Zs3bYj5SDuMbMUig3htssGo2ojxDote5QqmfJJLwR1NYVNVQTpVx",
  "key23": "3pFP7u36bv1yfLcj3FK95tGdCEvcDq9Aidbq8e2nv8eNQVnVBLVZ2aZGEmE1xkVomNSPHjvp1ufd7yUEHpEc6KfP",
  "key24": "2qM7Je7tepqpViNjp1R8vcZbiAmtrDChhe4asubz43cpRziUcGufEDiDB5SStXQ9xLoxexyBtsZJ6eeDpPDEomNx",
  "key25": "k8QmdgD3pNEWFG8EN2UisNaBK1nBppWMcbD85kPLreqQ9ix7pQCXD4b4YZiZjCCsLQAXZTZegyEXExrYDxxsx45",
  "key26": "JaA4c2RSbg4urdqWW8JTqreA38VXU9hW9L7aKczwkg38VfYLWqZGQgrnepSb3WomGzhzYLZ9mu4mg2gAoCR32s6",
  "key27": "4pbUEtg6hfCXLikoxihf6FwYYkiyu1BoxXUtygTVj8Z3QDWCquFXr9CSUopBWYucqev2n9hMnzXbTYZygCJsL5TY",
  "key28": "5yCe6A47wqQ1eZFJJWSZvRUn8YyUJh6V7oong4Pn8Lqrepm14AL3TFLHxpBcMLToTDzPX3hC7Yy3jVocSHUDGNrY",
  "key29": "4db5ovfX8AU6cvH4XqnfscV9VgMZAjm4e9xKZJ2J1UtPkkj32aibe1NDmcpY7ZMiGatEzsoBstTph6LAQr2Rgxv7",
  "key30": "5iBs9VTWqhQuS2FmmcWZKHghR6JgLcXPztd9jiiMs5iwQLFCLuJ6Mf8XLPBMoxi2xFBySg4MozceDdbScGKsBkVH"
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
