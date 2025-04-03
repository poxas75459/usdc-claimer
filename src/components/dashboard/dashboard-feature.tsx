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
    "4DMpTHJWWAF1XCiodrUdPT7jTfwLxaNbpTseUaFeSTQHHxct2Q2eux9ChtipyzpBqQfLXcTQUZwoRYG3kMxTgkSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oPWPTkoxp85YLEaoARC7D61eU3RwvAoHQas9CYwFPJidaXCTM8uRRbiq8sR7XFfWnHqLmbB5BhZJfejy2ZNcYk5",
  "key1": "3XcofuBVVG2DvkJ9vd4u7sRyJKyxkNX1vAkmBYEEGH17GUG9bzFeyRYwQXEVKCYRSgcpiwiuxpxt3aFKm6iHh2rd",
  "key2": "38N24EjgzmiRUpVwf5BvuaToDK4oSgwBMWcykTS4ht3v5pbvDQ5hrVWoKMnrv1zQxA6w7P1zwNeq4zbxbnhC1exJ",
  "key3": "s23rzVUkaJQGCGb68TPiSWM6vFueCZokoMv4rB6RGEfY5Cr2jywhZGGrJtKfsAAmpFqwnve8Gw4Y9AgJEeB2gZE",
  "key4": "K6EiGR7bm25PwisM5RYXmFhb6SAfK6w5gX3tjTs1yjHtSXU8F8aFsY2wPpnHcBher2tWrFsGrAauH8gTgTgcRLZ",
  "key5": "63kPogWp1aGfHbJXgWqeyHRiXJ2v62o1gZVGKMo4dqLhUUaxzEiLuZ3aHYUDuozH5hhysQZ8RtN3B75MChUpRmtB",
  "key6": "45UfBoG72o967AgwrWHWPFJB3SHJ2ejFWZES5frwjCJwGQih35G7peGE9e8UYXdu5NALTtV11zVfFXgB2fD6ajPE",
  "key7": "5Yqzd4vbswySNJs31nVwgm9qcR79CPv4WM5aSb6Rc6tgsrhpE56cgsHVd7y75zsGMi5875goKrUk4WuDoPGidEp4",
  "key8": "64DZ44RHTZFQZoAVkap1xhC4VfxSYDD5kWf52rTFhUr2KMbcUB2CfkPvFFuPEfhudwcb25nnNeqa5YT92yA2khsR",
  "key9": "4ZLTH7suuG5nUArbJPFEVY28gucHwRn7G4sUjjbbhTnhMcB4BgzRmX23XrrAXboaqC4E5Dd2Any2iq22sA9LVe5j",
  "key10": "3ku5jJ5BqUiPGbB2Ejd9n65RMfCKjdfiLYgXqHuhBoio5SNWrZ3QT71wCJnnSPcgbr7S9GHbjuPNifFW9c9FMKW4",
  "key11": "3XJb73yAwUEi9yJ7czHEKhwFHVNerDU4Q3yim33Y6DtNtFDbHcixtUGqxC6U6fqhZzuUykhFKckFuw6ySeieMn8x",
  "key12": "61wNNLUqWv7EHLZUergDSSCgn2Q5HriK9jwUxzdirUZeiHXJNGPn5axmUDuFEJht2gSNDtkKqU1XwkmwUUvi2YMT",
  "key13": "434kKJbBjd72XbVDazswe27rfHqPGbprG18qoF2Hhz7gcfBVS9gn5vEAkfJUYf1q6RcsLT9Dt2aSxc2KGUFBtYqf",
  "key14": "5m5fH8xtCcx344Ct68BLxC2gfgwpfnPjrTsEAW4RHyeyYRDjMLtYMEgVJ2WAWNvq2RN4jdySJeoRYUy7HBjKTKZj",
  "key15": "5WFfQjjox9UfCuJGdHBaWP79A6WyP5WXuRpU32HUefFLx1fcTNw7jyKJqZ3irXc6oRL2wrgYitHa15pP4MbchUv1",
  "key16": "4Gg4BmyCVL2sPsXWLksbiRh2QRcF6XQGgSE4ksZsV6CSNQpxQpKeLQmXfSiMxibFkJUNfNZXGuTQvqHuT2Dq3n9r",
  "key17": "2dhbiM8pjnU45JPEAVKmgjCLkP5TpbmcogJkH4qDTPKsMkEUpCoyST867ZD8ZLDLaornALexTm7zPcAUggaeC1CX",
  "key18": "4368EXbT59E97WPKk1rZZ7Cu7fMBBGSjTrYr5faxbD7ey3iUzmrL4pTRTpmWbfX8LtEqTBL9shZFQzHdrmdYLRTV",
  "key19": "38WqfiCp2u4mwaR43vzvn3wTpZ5vZjh8Z2pds98WqrDc3vEetov6gnQKupmhnZeAkr4sVmuXzEPRVN2BSn2CJndq",
  "key20": "3jdJkdHMqwgaEmE8DU3URo9xpyZfLYjgqdyk4mtMVWHz3YuaMCYhBoHPd9H9H4eiBxtafmvdmnDzSZAW1ZoVDWTV",
  "key21": "28rRRTw5yrF3HzTD95wCeErD9x8c38K1jFFpk5NhdVsEWpqv5XKzsyUpJRk7wNWESHFvBXETrZDuC6NMCnwcEpoc",
  "key22": "3GcC4Mqu8A7beWogRwJzjBuc4t1J39c2LV1CgBcxuVre7kdxc6s4cogECTZ7TWQzd5sLNi5cDtMugsP9xKuzDVMt",
  "key23": "2wvLHizxF3VXzHhjaichDy3wQd8t6p6mrpCWWq88HCjiSP8rNLUk2hZy9gWHPEHW3q15LoD7qxRT1BoyA4pW1cY",
  "key24": "5LzU5Y3n4Pr8eqXRCYWStTsi95WzUCeFQ1fzDJ4dTxuZ4qCJ3ur1wBdT6eYmGVB4Do96mUvrQ2rjRnb8NGsMCyxU",
  "key25": "41tJpTGpspABSY6mrfMCSWStka3sxMBdodBi5SUxrqHH5ub7pystKxH7rMQ2xkMfQE2wLb3KeiUFVVHDRLoADukk",
  "key26": "5ttrMgqSGqXzVqkUi8ZeKKb4frSWoYXmGzc2Y8AzSaEmWvpipWSxCdTXD2cAJSuZ5VsQotANwaNvD62qw9fzHxX2",
  "key27": "2VQ8q3gD9jFG6WJ97VYSyqKkxLLHXYuJ8mPAhWnwrVmvBv521knxAQ4kYWLtqAZVkHpSfhFUsvqXk2wXR91jKPUd",
  "key28": "2NmNRbbEZDqov7q5d6zGi8teqyQE37xEfuKeBUU2hdnu698HWb4AUUJ5B4ADQpuXmezL4aFHuZLSkDDuRm2mYozB",
  "key29": "2ohbgVZRyztaxKKcWcdLNEWLTAUSoSK9Y2gAVvSh5pf3FhVYqKXLny9273BJFSCou5qhuGg65Ag3N7LLY89hCogF",
  "key30": "4eWWN7hbQVFuRcaVTR8f1b95mRXFde8iRKkXrp4UVdpcJtib6beZV1NhCsC977pUfGpCSVUQpzSqk9K2PfeQ99J6"
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
