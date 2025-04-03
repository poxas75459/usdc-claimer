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
    "296PULuatcGdG5txpbecfFWyQJRoQcoN5PePKA3dQpy956WPDsrum5F1PvnfwKmHj7kvCmwM1kWbLewq5jU27c1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sL8nmiYiimrQgJaMHq9yz55AFYGAn8kF2GaQSjqS51hdRhNftNfUXx3vDNNwsV9YYbdWHJgQAjuuWHysqiQi7Hh",
  "key1": "2NjmeyCFhLrzjpgnMDSLgCCXHaGR6Qae8T1RcyMPNQ74uU7TLvaWhBaTR5rNt7w1bdxwXprtaTZfuNpxGZRaq28",
  "key2": "2vejHnpa9iSgetS6ax96aybQ8YvVs9Y2aWKmkY7JtP1emVFBVbrCGa5E5NtNnG41ZHjgX5N1Ddn6N2gx9s7JHC5j",
  "key3": "3b9xA2tK2nNf4HJ4Qpd6dVgPtbo7ThzH9PVjmDUaoR33gtfA9zSC1wJyT2CfvyJijxhnDmVJbLVYsXs2H57FBhZ8",
  "key4": "3VmuxH7XJ5kwKipYchq9F4pGvaEaBgfSTFKGQf11hQpKFcGBS8gikcB8FfmNN9sUMhNL95uqCyaXDQkFUan77StP",
  "key5": "2F2eYQGN3hiC9dU61NrUpJD2Ee8H8FMhxVxp2teNBEfirAqtF1MFmA4gx9tdSCvirFpZieY2qb5ZCtHZozkSNnUP",
  "key6": "hpSDycRGp9WqhoiHMkByxfELGNaPwDaXgxaWdQaYkKZys5U6v8ap93LFWWndhVxVa8ujwYtHJzSsj11HGTBN5iM",
  "key7": "CNTpRRKoFKvKXZXc1PamkM6cFphfEHZZzAo3FJXrCPkuVecCE81MWMfP99H1EZoBsYm5cctdu4RPywbXsmA38RN",
  "key8": "32gNTxc6pYBi9dPyL5yCzS9cw3XfH4UGRoCQpJKfRXGFTgrTf95DdqiD5cPHdAGXSinmRp2d4agF3xyRq7HMrZrv",
  "key9": "2fyyAvnc7o89RK6DvkjXtJY1JG62wyEjHsMBUB682GhaqQ5xRLXi1WbMitTVAdBEQx4vQPHD8ogr22QTYNPr8uw",
  "key10": "r99Xvjq4cnR1X5Hv61day7ffVQCaJwBwKgDDScVRhUb6tV5WrWrUGWvww3GgEiReJQiV1mSNusFwVpPwmPTRGSU",
  "key11": "r5EQad4tc7regzhc48pEHXQY41RJr8siPwkCoZJDRknaZ2WbaBzQzPTVpm5RF52dSKrnbHpLHpdmqd8cwWPCfz4",
  "key12": "2wzhLfEy2shdWHn7Jr4raUA9pczUsmNeykFLLiHW1Lm3NTq4VZG5XJq1ajwMY1H6rUYsqkKySmGsdwGzFByamxjr",
  "key13": "2t9nwNWHf75XXyGtFuD7yHyXRap7uyGMT9Ci4z3B21eAPvSLfUyW4iq7QxnGjUbcahzAK4BZnq1YikjBSLtKSCjy",
  "key14": "4szxAhotfbvGrheCf7FGFYiJM8UKYynbcpXrhk61zcxqALM5PTFkpx81akzHfXSN8ZFa2EWHYpXsJ6myKmDQXrPL",
  "key15": "2mJsaDUgcGG79VSMq3XX5eWewrPoaPD38zAwjwNoL9ppegdeQQNeythy4qNf2kqomzb1qwxzvk4oQGc4nbsNXXRt",
  "key16": "BxzZeLbikgZVsMofn26Qi98aE9dTXGjwC1Kwsbncr9YoRgsyvUpXfNmqqCTzLFdimQi7mr9vQbFRgAcjBzBAVea",
  "key17": "28qnhiHV65Eev9R8C59osX3eqxS76nh99a5e7xpKk1uSFVfqTEmqae68dLUwTb7DYUnmxjAXVcPR3b9hfn8A62q4",
  "key18": "5rkYHR3Lx1PR3BB27mXD81iiyoSYhkR3UuoLcA3toQbrU8F6eMqWN6b5EMCntQiHUdKvSU53bBAmHusRgRa9FCDe",
  "key19": "3HZxpAGJvQ7ioBsa1za3L2CSZXA1mEZqS17nP9SF3Ws5L1yaDoTdQYfrWMv6o4fTAXRtjSDVBXrCE64jWLt8ewSK",
  "key20": "L6dcUXDmxwRnBmaYDzXcD4NQPLj399WpgiMEg4Xo4ctiAMbzwx9RsX6Nio2cPbk8wm3KL3eDLuy89cdZAboFin7",
  "key21": "gb9rxSNyd6DEs3fcyvANMBo7dchuy2QBUgaUJJamqdq5dYCB7T3FuzTzV8jNeAatiGuu2wSL4kpfox9P5SDjrd1",
  "key22": "4YrizRw3AKMKtNUsQ475CacyFyCf6mVYcJiyDXYHhRLsppQJ4FfSnvs1HbkfZqaRztAtAkLheZEMPfeqH8rrHCEe",
  "key23": "3hc98LFCxShRzhDLESf2xJ5tgRiypmEJEQHbmXHuqBdDiqjZ1yRbRrXzbf4cngLSYsvc9WhqtKNJ46A72sVDYpoF",
  "key24": "2uubqqXhG48QJpjnYLaZhPMQ8oH9oStQFLDu53dtwFJwoB9cgHdsB8UAWbt4dnL4hmhR2HttEa1GwWxx7wXmY1rt",
  "key25": "5oCUo2zFrTU4gSEUCcfpRTSbzHKupbuyrj8zgbhJhUDqH1c7sEQyi1kggnnareu5ZaWkt2JEzigjf82rB2bwN4zX",
  "key26": "aCmmUyKSPEVhfWUDXdh8qDxsxRqVYfioHmbfDo6xGWXgEDJkyCFeivnhyi11d59qTnEaUi3gatHwzuNjbHHj7uB",
  "key27": "4P1cnYsLSerMUJWE8Ua7uAXHvqhnP5SM1gG3pzPSe1btazAKNQ5Sb7c2Emu84DCjAhkb1Z82HfxZNw5SQsPQNhLW",
  "key28": "3yPgowZ41s1ppankzMSX3fuNhW6FfHUcZJsrmc7Mt2SJpJz1zyN3rjkSyHzMJouhprVw8xoiBGt3oLe8hqsXwVKr",
  "key29": "4e1d7rruiRHGhSUespcnvkGTV3Q57BqM4e5A3qkodoqT9HgCVkkVtyDuubMBFfYqV92r3DVKPcnaojdRLGomic5d"
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
