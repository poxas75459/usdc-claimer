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
    "53fLqva2kufk4ugs6QJbEf6Wh2cED6wA1zSgsfmM8DdXD2PCK6Lu6VfqmUVNmnKfbkhciwUfq4Ysmba9TjUJ8T4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T1PYoerXUJ9aWFR4Rtu5HjqMWkGYwFaDEfUFLtcxqkiWFog4Vcnqt2XDWfnPCgtHzj3GokTyCmoXK5smjYZhgtX",
  "key1": "5Mhhc1fpJJY5tuRZPfJQtwYZ5cb2X1Vefm59TguQ2kJ6aD77bEgz94PQZcyJ6MwD6fNi8dNhJeD9VxGb6x9HhQQm",
  "key2": "3wFD5yreheEykMsKWj9minaBHQaxiRMT58wsgwy5jjcA9dzhdV76zukhn3Q3A6wXqEasQ3PLMYGHAUqoFVUPPST6",
  "key3": "2StMwCBc8GR2AEHj8ccTGGvzfV1uSagX3vUeGK2fiAiFRzXfqeEtcbi3UiUoYhp8tjdCWz6uNjREUcDAwSgKkncK",
  "key4": "3BkXp3pddhxqtNbRAtBc6669vSRyir6qfrPbpfLGbqZE2p9MPwcqVAPKTvCGV4QBCh89b982o6XDpZhrEfZqGMpZ",
  "key5": "3s8BWREZdYxzH7GpyjfhUFf2ULcshk2wvcSPgDPQdQoLi56BpQcniXmAQBQAUzQryFQMEFZetPjF3SSXCEFHKtGW",
  "key6": "4Cswk89ScD3DfTw3rysrpjUzeM1MUdg6KTdkNLzKPT9oPfswnpSJVXoCYWbdnG9dedTD48VUJCXPF298un3Q9kmP",
  "key7": "3C5B91tL7eV2woNUAHZnLwy9wTDULhVRumrucPwPd45mEFHbsNMGFqBgwLWcpw5ggqNg5wBv6zfhNEzojhNoKrg4",
  "key8": "2YBJ6XLn5PZdY4X5Aht7evB7idpA1YcmRe4vn7GPK5PRFvDAv8Cv6kwscrWghnrWcoJfu1hM4VEgtShqAXBKq8Sf",
  "key9": "566Z2KVXzsyw3Yn9Mu8J5dBQBzxyeNd5gnFZ8B5Bv3ouaCkv1BWoRUPzV88Mb8WDi52gQtoPDzbUuZE8dn5BKoaB",
  "key10": "3hxF51YWS5B1g6F44ZiUbtTRvaEhpcBJKkDCo7EgmAuZfdtAd8kfS6LfhgUeLtq2He3JF1HJvwLbkKqPn56fdbNB",
  "key11": "3DoyM6o4TEiFB2AbzMMneuBZ5gEACXiqZ2dPFu3PbuuH4KKWVEz7GCpUAATur3wit5cxQ83dWMoQXPjGSSsD8P9v",
  "key12": "68pJHB4RpvcLZghgnifP5CPWEYbKi6mwPkwdKfCyMXcGE21DB4A8HdJNfdgraWgYfestsGYS1uN87XWtUxrs4Sb",
  "key13": "1xYtgkiBsvQqcnUqsEMKHXWiPEFKxzQTtBFWd7Fg9HFKbvGNavmEJr6k9wNA9SJvwwzkuDxSipuAokdCsa5XE7a",
  "key14": "q5jBSFpU1mCBCGoJD3NESeY2KJ7KRE4zcq8tVNcerTKpySm7aYLzzdUt4ztF76ko5wEUFWLT1zYoCjni8bz7Ky8",
  "key15": "61DoG2PsNkS8uwUFZgJA3dJLMwhVSaMnWTopcnHrqfa5VfpCbG34MJvYijqGXLMMZtqjSdHAr8a44HmyQavHabVH",
  "key16": "2M83cP5NgaZkRPKRHAWwRHRWSuwWXVYd13PmPzqxSUYzw9hEtQEs3HqzhaWSDwt9DNYC3bwGSNg3Cbz1xsK8noHh",
  "key17": "242sorhRPERyyXBfG6JjG4DXVvyqcdukqjNP2RqESan29oWucQEbnBLg3mqz4P4tLtrA5Pkg5FywZS9EzX8t1aCw",
  "key18": "RGm9FhEH72YF5WURdhkwtFgoZystafCoKbvKGMEJLrZw6swEGgYSd6p6U8vVgSM76oERNWTr93MBdNjg2DHbEBQ",
  "key19": "5gkZMaDUjz1wovU5fhetcV942RWFJXKZCeKjjcMajgw2GS4CbKEP7ES33STLQ4YJohKpNz6Rpvvgrr4TkZkxbTMQ",
  "key20": "4X3QgZ6HzREusfmJdwAimviZmQaeujCF1Ns9CCXc9xPLgBwHNHj1CthjuBPaRSKrGwKc4pJbzz9uuosxTM75vvcS",
  "key21": "5mfXG3KC4k48Nh5ucLyQYKAi3v276G76mhd3rrbaNjrc5HC8DD9B1ZuPMJzwVgz1SdEASXJVjLnyyafcjyRVCw7Q",
  "key22": "5ijsz7DbZNkb4pK3fRFqQVLheLhKZuzXt9bdgyH2ypfvqnRxm2sKWJzYGcjSmFaaLnFBxuVq33J521158iCiVyUs",
  "key23": "253y9iHxensNFGRrVeugnhPBtPcUGSz8Je41oc9eWFaXooPB5TSwkuZUsaLhvUnkA68Q7i4ZCPmEgMmbaYXCmmzC",
  "key24": "4d3wcqMtJsrYsXdxUk7igQU4eAyquLzWGC9BzLHHEkArthWRPfFZ5K4bYuRHDW5uTGqkdUpN5Q9fEkpKaMFq5jkc",
  "key25": "5N1NhRWyCGgfYywbwdQQxbCnMBKBKH7Li9sDuYbRb9DLYmhiwvkgUAR7cRz8MatoFn3TNqEfK9CeawkNfpfUGuGP",
  "key26": "5hkLJaq9RrsegzeX2nWAtS3wVxBJgeCERntUeqGAX6msBukGeKxj3btndbANUCTC29rUmmCjzTq6RBcJmmSGqZnF",
  "key27": "5Eqt4zf93H6FSShd14YRiUHVW76tdv7AnSajvL9hRPadxZJTj81u9vZHrqXhro2STNCyTEsb8nqJ5PmkNmGYLE1d",
  "key28": "RFUh2cvfTa2sC5jez6pXPufbCbUJYpxaULzgS4d4oreYvxsu19n1gqvTxjYMYb9M9MaHeDiKGnhS6jkb57e8hCj",
  "key29": "4mVEV8mGXV1jVfnQzn35hWfUh4WpLQRrzZ27cTAKJxkBKR3Nhs5t7Y8qWTEsCUmVHQTgcZ8RP9kjqdXYXvNLbYJc",
  "key30": "3AFiqXqkmJXKoWsM3NAesmbbcnoNT7GZQ1XLV9wLMGB4QByAvaWbqKw8QGZdFYPxnKEdrXam681FzudxiWrcRe3D",
  "key31": "2hSMr2MMMbYPJp7piKssbBbAGogPw75RcYraJ4hNwomAKeo9gN6CBQ1E5hBH994t499GUFSKtpXELTNcwwmJ1mXJ",
  "key32": "4wUaSMs3B8Yyb9eUHGr9GQTLwhMVr4f6wCmmETPM1UFBgnNLdzURWmZDdV7Tb685PsYrpivecf9oMEbMYEbERYtY",
  "key33": "3hodbrPE3ssY8a3HbFWpUwk74VQ8epodD9iEdNF14RaTLypBrtjdYrSSTD2NjGHNoEcpzqTCipdVozTbAJG2baTp",
  "key34": "21VXkjr84cY7T4iCALAbHKPqnkoTToPomAK6sNt8RMnYrHspaBWB7zN24zwRUTDAd6RpPs7go4EaCLsZvmMqRq7F",
  "key35": "4kekLzeNUD9EMDzdWLa5QDwKpQCxSVYYUqqkUkeUQGifhHjkUbRN2WpWMWeHjxefx7dP3ZmEtQ97FMqqoSzAVms6",
  "key36": "toHV8gNU1cUbeVCezMp13Hv5nYG1sdMrpbvhnYtB4kG9qVkHYanD4vQw4Jr5eUyEQinUrJ5iXWM8VL2SnxUD8QY",
  "key37": "49Zx8cpySSVRoQdeyMW4mCBC4UxBfW9MsTivn7Cf17XXd2A9gzeFvfSY3egYqDHJRaep2k3BwHeBArpH4JGaCwSh",
  "key38": "5pdg1UvzyqvqzvzaL8kdRcFs4HU8Te7CcmHc8V7c4p49MMZqzvPGiLJR23eH2gy7aukqU3qJUwdJhZDQf5rjYiMY",
  "key39": "2z3gNy32XMPvXadU7ydfXK6LX7K9PEszUY24q26fi8iNcS4ruTuQEZ1X12GoWKeWjZX1VL19MgAPCNjszQnBrrr",
  "key40": "278tLGPKoVszVMcWTXPhvfkHudsrcRjpqTLFx1eqqQW7JYgaRuUGP3UDWNRHERzkdN2oHFSC2qt88DRJQKzL6fWh",
  "key41": "UQC3AEaZMtSqZCbhrg6oc2fD4SSVizYJ1eUX8QLLVkuFvZBakpBuf6y8kWtWJs6HF7WtUAkN77ggoJFL9BEqoBn",
  "key42": "65gwNXBbTusLiAEkSzXfoRkzekivwq8gk6XW2kPEVhg5P6iSpiW7V81pWJhhqSwSVwSrFrqc4EqLwevRewZud2Mv",
  "key43": "3EitSumtuLUhSh2JQLATj5CZLV4GK2h36VhWbVVwkJ93tdtG8mJ8aTKzoX5WHWSZfbM2EGy94y1jQdFGsHa56GDW",
  "key44": "5vP92ncx54vp3FtEJVB3JijVFfNp8uPbRRCZbHcwhceTB9Y4WofJVTGwXTthTGosdbxhjrTTpKjj11MEmmtSELTm",
  "key45": "5yUphxFJ5Q5T5wsm47Y13dP9xBsLzsDSH6K3yBks8wsxkgyqh7N8ZDwrmDC4kKG7woqf9KhYyurYD6r1LgEB6Mbs",
  "key46": "24MxkBRdZAHJdfjFjeCpznnd9zN2GgdnUANWBUJVmUARUYDzVLedNqYtCM2BND6DrKYSHNkSVnNV52LjsMismdC7",
  "key47": "G3bmVi1FHVGcU6XW1aCiGX5aftEMeTccFJxFzDMhUK6RXcbgV6oZbtrVuDJ34PEKzXRBbWy8HQ5ZjJxNVMQgdLo"
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
