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
    "2yV1SaR4zdQcQ1BkJcNdvenPPMyJVBjp3cJukurXVjpcpvA7FdVWa8SdQvcN5ETXo5TjDEGA7YjkwUjbX9BeDYVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZpKcy68TjQCy8rbGDs5TeSU3buxWUCTP9B3SY1e9Dg9M18KJnzLq8eYXvZHiMDzVDiWG6BfRAzXZRaCuNynFai",
  "key1": "5czLHhtFPdTBF2gjrkKqRz2JqfH3QdU5bDuD3gys8LLh1bc72uWi7QbdPnXrpzuy3mYA5WMTgNgaa1tFTnTKQ6Ub",
  "key2": "3Xw3sbfJcGuTxMSWNMwHobjqazC5Lad1iTuN6G5E4xrCz9gjKyhhq9JpLsghnjw7jYPaVmdZRqeX4ZsR6auMsuPt",
  "key3": "5N1N2UV5NadoXMnL3kuG3eYoyRuizHLarT3VkMjS9yb73T5pBraUveaYqmzHDeX8veAbF9xAE6s87gAcVPQHYgC6",
  "key4": "4Gr3Bf9zDksmEmsQQv8kNr3nK4jMi1vXe6pyfRU1yVks3Fcimusw26yh77U8zsj4AsdmbviNmuSxS2FBEUG255SH",
  "key5": "5QD3YcB6NvQnwPZsCmppFjcMoYDBv9DwfjzVRv86e8pf8RZAnrwsuLeeY8KFAa7yo1fxuqQbWM5bitrYP8GbZWcv",
  "key6": "4cVrbM4jJLbAC2qnN7jXHdibj3gmv23nG5kpUaGoMbEVQfAJctqDwwLbVDq11azEmFRs39Yyh6SQ24fJgJxmBhuJ",
  "key7": "3yFbTUEa4js3QxCFUJbCgZYTpRvU53c6HfwQypHvro7ZyfzjWbLCLe39KG3U7Lz2yy5atAS8nfdt4dBZWkrwpcKJ",
  "key8": "2EzeNZyd1tpVycgGkN9zvgDCJzh7HR2NsL1NiEzrQghDZxNpXPYfKpL9FiX5w9oH1CZ12cTJni9mnE6jb1vTLEkN",
  "key9": "2NwXQq29DugGwAtNodeotNEi96PDQkhtDW3oQAjuxpiWaZet7McxdRw8KMCrtHHmTFBedQMysxTSyVVkaWaNj1c3",
  "key10": "3To3RXi57Se8AdjoDQJSzyyPALGd4BWXpqdDARKA1pY5TSQXFiiD2f2sxMNkXdGr8M6M1QLttLNLSL9Kr4siBvKk",
  "key11": "rfZceUwokS22VdjWLJcncayRYMXrpn8AJrarYJAA9rpoKYNjd4akUwVxbSQeTgXVQQEzbKyGRJ4PZ3BsKHLk19Z",
  "key12": "35jZJh4JyNg6cKZKf9M5c2fUGTA41b4GjZkSWqMZW7bLPXt2AjF6B2GQkKCKzNa2pL7f8G5397xZPn6DbrnsPmth",
  "key13": "24AAsn7REJBjbM5oNgXcRGbYqMap2D8xkcaDkb7k5E7FR7mpnztbZDimjuM9Cxnm1opzWbtgaVHfiJFo2jxr7RTZ",
  "key14": "48QPJuJqvX9QugZLjZrfNisLrQmLXbgf7CYUrmC2vExyo6QqRgjEz2nivZ6m6LjrvttYUt9rqjnvHVNgcoe9orUb",
  "key15": "3dkp4cY7SQJLu7cvJ3aeaYMcvBgkryo5HqLTV3x9odCHL9YJr5xYyHc8KetW3PR6t9HpYm2DVT6n7igJcQZ24GLW",
  "key16": "2bzWuEUB4SykMd7GZdEEpDfkiQJfmq1cZyNv1cYVxCAh9mBeiMoky1MdMdrs7UBoYc7uhytWon4Epy2oUmYE1wVQ",
  "key17": "5Ak9mh8bAguEbKxk3h62BmAxDruCeMA1r8feA9fFLSwGgTJhGMonZkE5hbXmeLNQswr4ki3rcQ5e4QDPCEizY93n",
  "key18": "2wAaxC6cohFvaCZryMG4iqb2r1xnizXweeWr9qodGYYvKaAEB1V67Z2xnG265hWq2JmxwPyifeq28uRyJDUaBBjA",
  "key19": "scHjFKYYm6Y2WM9KNQ84hQXTFyMjex1eKRFfnAAtqr9N1iSoojSFYS2PqUEDGFH55DfWazvHgcroKHe8HoGodbF",
  "key20": "5QUvn8HwPjCN5N9s8akgrpFBCU3iBxjTi3KFdot2TGysyVq1g4hXn24aCwqNbHVFHeMXVhNS9HT8dhEvyuisnUo",
  "key21": "1sfBL5mjvU2LML1QRPkRddubAyhPW4Wc6HpmenscMKxsVHdc56NtuiCpd1ncr6BfSWgu5spWLX33vQUaZ3U6riT",
  "key22": "59iJnGBGGUPE2UdBU4H6KynABHKf3AXEL6WrkxVjh8DDpLbcBgRtmVGTyhjVuXHTFEQkEdNiVY6jwECwJN7BZ8iR",
  "key23": "4dWe1eRzCWzsyjKU3EJM7pLE1FxEUj7iMsYWJTu89RDqN6ML5R6o5PkhoUKoR71oP6KVv5K9UEXwPL5xwr7NrHeU",
  "key24": "3vvtiAUjrvvNMXqU1u34H7L73QmAHyhNzHBpDUDddPvrnye1ADBqZiNnuMotDRhA7T3c4s4xSStcVW6fz5uapXdo",
  "key25": "3aanU3iRtuxjxc8Fe2hYRmm4cp3XFJoYv8ZxENJveSF3VvgMp5gJzUpEdBrff76jpv6TyM1S6TeeXWQvmwfSRXV1",
  "key26": "2kZtskcJTMUWWzN16uF5fNWX7ZaXBy8wrAHZu7eDz8kEfv6nBU9iSVHwZZVZLyKSqtTBPwHn8nikWb49aWuJeNp",
  "key27": "2mVkCETTqnfBavkvsiFmHma9ycGyyfopuurCWjcFbXsDCt2QbMrkZEBovFPG5vzNDxLjbbMvCa9Zt1yDpdaPVZd8",
  "key28": "8uoTHEFs2MDyYQJEqJvcmKRoYH9MFSfEwhUpHdXvFnD7uoJNMpLZPpDmsGrjcsKFPS3yHNzPxXzx4wadH3oi15u",
  "key29": "2q1ib4uVYbHj3oxsPvMfryxsbLpyHeXfL4ycof4kCtF9fEpbjEJicAospZFQ3iBMT51hu5iU6hEmKCerNCDBT4aF",
  "key30": "5wWzYb1gN1BwaoQD4EuzHjYWhCUKkxbhZq6bH58ripAWztQAzcPgaA1A7M48vyXAm7ggS49Q7BdZY1jNkZRjhmTa",
  "key31": "5wRmiTuuWHw8YBD8UW97jV3ENd4fsC9HQyiVjYZYwTdraM8qvyGz5Tipncp7Zk544NTwzv1HmX4Mu4SrYxrw1PSg",
  "key32": "3VAq1ZZ6vvnrFxA1QPDiFavWDXV6uYgc5wESh1NGeCono2NFY6jeBMCcrh7SQsB4AAvBJjDjuaF4Bd9YtgQ1CEQ9",
  "key33": "ae6EMAnXjVEfEbmrjjcVe1mCkSUZC4Fz8ib7QDvwLuUgBWQWQP6H2rAx2L2s36vp5wXpKi981TUNy1YbSygDFeR",
  "key34": "23R8YpivHNp492bdJD9Shaw5ApcpTQteXkEZXxdJUBY5r9dNaDFTBnmXpsKYfhVFDH7h47AC7ZxnogfcAAhvEVQf",
  "key35": "5DGn5EgPsTS7NdufKJXc4cCpbcRG6RidG6Pr4oVAk2YQaayG5r59N6af7DybrjbyLpfehHzgpurcvL4EMznQpfGx",
  "key36": "21Vi24jGpS69Du38jyYQT3tt9Uh9Jgbw16ehQzsm9ngPfkKeVAMZiPguYgaP1RmFByvJg2n9TyCRRXVJumjttowx",
  "key37": "66ipa4fPnpe9YP2acAQTiCujoH2PcmMUGaJtimGwfDMi3btKZ62KgpNkdkFed7dePYqGFqg6WGcQjEC8irqNSYrk",
  "key38": "2eNVbCozK9yybpmAiRAoKkLTHdcPMNukjiA3Y2Q9a3hhmmqqKX47gCssmArAXFkw6BmoLu1ia3rsbESEpr8HG8bZ",
  "key39": "4iPCa6BnbbnbRJQeV1Gq2g3DAcLm12Zah15nkTXzLr9aXuACz8eGDmTFu5LiQuyALS5nccZw4EstGV3w1mdRFg6Z",
  "key40": "kM1ymAtQWnaEt4wR6yVYfXA62DfAPYBEJZq5oGeULNgj9MHuVCUgbXWPgXqgCurk5VGHXo1EhvrmPNJqGybrkDX",
  "key41": "2h79Rk7evyjArZgbDYCvpnAF6iUKrerN2WLqMjt6D73iiwXQA85Edi17dpmFf3pEstS8CUTintFSRMtiFB9FPdyx",
  "key42": "5aZeMTa6mF3GPsUSk6Sri1iXZLVi4xWuXP4bYLH9xeHCypEuM9oURHuWTA3ysYvjXbRHRBudVVAFWBnKtrSjEnnQ",
  "key43": "z83SLkxNeE1kmkeUsjqMaqbF33dkYRKRWjnUYVvB6AysLg1zpWhF87TYCWiHg7DBuiZf5GVUfw3byJuvaviUXun",
  "key44": "65nsS8pFmV2pdi3QJAjUQSuwM5RnyALjyBb9YvbxB6ePMPq7ntmExAex64WrM1gtsbbF6TWGe5RXYeoF6edEwQXv"
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
