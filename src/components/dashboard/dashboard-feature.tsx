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
    "5WFComXLNHi3c4zhkV7PjikoqfRfL3NEUr6Hbap9mVoXDG32BKpbBVbXsXSTRdnpiHQMiqcBmVVikNE6mqnQ2Thk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwsZLSNDR1qnGwfiZ4xvGHccch8BFp7f8fwRgDVp42HTvK8Wrh7sq3Lap7hxvHtNdPp3ZXLNkbMvShFFz2iQF5e",
  "key1": "gbVbtFxBAPvZmAQKBBTjJMUezXbnbVsa5DdyDWrNkBuZaryXcWJQvAjYQV3yMmePmNbZtKHaqYYJnkQZCh4tfL6",
  "key2": "4TURTwAe7nSpynoBrreaHAAP6SDC81Qb3hxAE32LtXVhucQv8cjWa7RpX8s5B6VAnt2Ncy7uauJV49RcDCgUrtZm",
  "key3": "HNZZ6nwad4n49KLoTEZDpvrcHgHrP2Yd74zuBCrxQPE1mESqL2bv25KtaSShuUHTDE41JdeqM6UMp138RBqWSfC",
  "key4": "497FzhYRCcKf9r38evuyX2PHi2MYixZYyAq7G1J6h7uxNe3xnSQLDsWCcQWiC7feNjBsmniupYLJk643ef5c4FrJ",
  "key5": "2kGBcjBa4V76oizjpJi5bq5i4dYeC78dJCjk1Ta4Tjqm2sBNXNomHStGZvkWWWzFBiTv9ChPaNEJgNaAVXrHEpJX",
  "key6": "ngtvhDd7f9byDK8KXdMwua6vLCai7YFBzqR1q7ZhAirv13xhbGs57cTawUdDKu8tDAnaA2aejvJQBxQp5CEiQTa",
  "key7": "iG9UfHinnHu6aKLZwWkCxMxe7r4iHT3XQ6RD2j6BFYmP3EEy3fSuo1NdGUZV6KLB4fTHi6DNCUdSY1DdrwVjmE4",
  "key8": "33ZXoHs7VBh2e4QneUu3xttRK7kbhCotKZuvU18P7f16pbmLLeLNkpUDf4T6LqEe9Z6Vv1yqeZjSWedU7KPFhKkQ",
  "key9": "61PmuVKeFVYk4XkaBZTiD2XiuggYjkXAz12QNoikRsSf8NjyM7rsn585bAhoqibauGgfFzYzaeY51wRZPy7cGnH6",
  "key10": "pBQ93NQfqs2E475684XUvwHQ9m1Am3x6ZMXK8YGpRe9Q5oymJZgyPxVBYgai2q8w1XPMUCLJXVmds2qM8kR3NvM",
  "key11": "25QHXf4aSndnH53mX9PTC3AYKUtn4AptRXanv9SJPnABzFVGuSx1yH6dSuSEx8s4uodvr7dbHRzTnn8ZpPuy8WP2",
  "key12": "5eJ4dSGjVe3xXQHbpGteoD5M9iTxABzndoguqZNQx7Hn5fZCTQCq1NoL4romYjN87mnuanm998EqJpkFf436pPdP",
  "key13": "zoJitPkWg1z82C2ipdVfNvC4117pBaSZtqHVmhX78t9sEH3sn1QVLh4fodELvQhjhKPphfuSv8FzNj8pomEeTtM",
  "key14": "5GS6RZh6F8Bn1poWhhEiwBYNmufJUwChM35Ky3Eu4chGtT82BWvgHSxFq2hjU4rgq84hboJLTsNeB7dAwzXqTYSt",
  "key15": "qC2criPhaTr4kfb1P6GXVQSTJdrFYf8LMRQMPGEuCZM2uSrRtFudvheGeHEEQS8zLYsRqskrpgDkW5ESoLyW8rt",
  "key16": "63AqpzJ4hv3eDripW2Ak4c7FVkg7QEMKYeEa8zcKTxNvCF7dyWmYwxBP3Szo6tqfVLBxSQKbmicAYvudrcTJXvq7",
  "key17": "XGFTb5WymeDkcMRFdsv8kMdMfmP9hTBNUVnScDiHXVUY5Z8y7dpup4M6mVXW6KwpHgFQNVegL7dhYjuVqrDv8n2",
  "key18": "5av9sFUJjvtLavagRfsLi4uNFBpixBknPjdHPokFHWrvwgMXcTNokYVCv2neEgkRX94y534QLtSnmQVeVJaHZbdv",
  "key19": "tFaL1h6FJEkCWrsV597r6gevgiNkEM4pGnZTK8j7eE7dyWhkFE6J2oJ8ftp6DQ7jzDPULYpaCLxw3F6T1Be2Pjj",
  "key20": "3HJC5ua8V9TS7q9smiogXTZyEpFYx78iBMXVzExiTrQpFZwhjF9aBXYszJBGJ1rdiUNxsDkSDJ2K6BnBBcy4nnxa",
  "key21": "41KoSVYgxHcJBcb8VwpBbXD25sGEiEo4R1ZQCY4KrtH7YK6EDU6Dg7F1DvsC4FF4z3KR366fKbncx3sJteSf815B",
  "key22": "2jJonvPtE3rv4BemZPsQQfGqdd5bNu5AmbKzNFmpyaCQyUSrESTYC23jicKAoRwDqXVwz8Am67qfKhay2aUnAkn3",
  "key23": "3NtT7fYD1Sh3YrjQyNXz36jrQzAaoE5mwCVGKsZ8XQgaCFjmgKMeA48sGZbbrfAho8Qu4FsJ8HPvF3Uzccz15Taw",
  "key24": "2JhrH4Xdz5Zp6suRvpcEbX619WuayWfhhvTridhxCFjVY8xsap3vSLUMDFiL2CK7qv9TrU4VQZ6LQSC5LPYZ3VxP",
  "key25": "5ynare5WBZYnpCRU5eMXK9P2atxDyi3AkPuf1q9B56k1XzrVEHGZPb6yQJ2XK6yw1LcABWcNB6shrTe97gFfASPj",
  "key26": "2ywU2qaSb7b4h8R7gqaPp2SfBqN5xzCyCecbC1Q8mHZZys8AwKoydXKNa2HqSWAR1arQNFbhvj7oQ2mrQpt3ZagC"
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
