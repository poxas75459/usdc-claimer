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
    "3doTo1kzpooknN9USEbmKiQJmhdCoEr2czKvzKXcJBxLQq2n8WtAGwGeUN6x14fbsaase93EUx19YB1GBX6yVM2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dwuRHydm3fhqombYSs9vioxUvToZoYSm3sVPLSHuSWUaG92BuJhYiiEMEGJMQjoq9G19JVhLSJ9WeTrYHa863dn",
  "key1": "kKJ4VwMyT6pej4hFqJSnndQWu33RFA9tnQCLgbqXS8FaDUFswbMitrvoCge5Xyb7VPnkGy7mtiAVegtB2ot7zpT",
  "key2": "5NLPD3UVJrECprn9ZSeCpQrxH1wv9MoeqXFeHcLt3KaP2u8e7se6wsGvuUJHsMrsQq5V3Az3JcHtMpfFCB4eA4eR",
  "key3": "2SozFnowxuAMzHhwQGjwZ7qnTuZapegNDM4CWUUibZS54pSqF2wk2fJuNHwRMqW7pTkCxRHZ1YNU1Xtb9bSdRskP",
  "key4": "xE5xG7bMWsv5yT1sKuSUiYqxiUF8nL2CQivYU63YBMjDXQNJDd4a2qLt46phoHbuvrgCMrt72tdQ7iuzssDfgaD",
  "key5": "5wQoRNJ5vSvp5jq9PN8oV6fFA9egSSdrz9c5QszmASiN9A2mVbcjasqW3HAVjWRmQdVkbQikqn84s65DPcwUjKTZ",
  "key6": "3jmsotTupfjjmjhUvmrkWJ3UDMeYvTY7SG64aRBmB39NfQqq4TN8HagcbQvobiSAg1qVmJueTpKbWozK6DLd1qTT",
  "key7": "eSJRM8pqMvsT8ocai2SVqzT76K5nqBPAdh3Ry9Z6kLV111w1qKRfZ27LXc6CbBPHMnuPFH2to6ZvKWCDv6nGeN5",
  "key8": "xLao9U6jD4YgCvdmtgVSzPxp3zmi1i2xg5LtBVH9FnexzA5Kp1izCSiQCgxWMubBjgkRr5TuK61uzHmmUfVj1Vy",
  "key9": "3sBkQq2jXzRLmStL6GghiN7ruDjzqoaqtnUgvQDeHcsD8Gm9HCxyh61xM4drkfp1GFxERQ7pghw6GtrL1Chk95aq",
  "key10": "4v11t2PNTPuNSBiCq4SbHzWf1j16yMj5VKwiLaojcYuS9KF3JiXWz2Hrptxh5GRd6Q3HzwQkexW592gSggfRaeLZ",
  "key11": "2UTfenQquwaXRLw7fXNEjNApnQ491A9GKezB6rkMvhvVDwTXCJkygxYFG7sq3K7pesPzYrc8oD1jk28ERkXyQ9RE",
  "key12": "4oKTWMpgrE8gK2gGew2Yu7FimCmFKW7Lz979kfZCqryX5BzagGZrHPEj46QhXv9WyrkSKcCK8Ha5SqMeWBWhu184",
  "key13": "3FJsCM2VkxWcYud83LEhSgsPb7JwZwBhb7hZAWNGNWyDbSDZpGMPyAWEWepHa8s5hUQ1eYqDmHW3aHeoHeJerSvp",
  "key14": "672PxcNASbxfVtmnoWSEvBqyMeG3xya3b8oNyMjG4Yheschb8NeHUZPin3tUFwH92gPbCrCV9mxPs4HuoKyNTACk",
  "key15": "3ZJDMpb8vh9fH8Xbt8CWo4gwHvGWQCkts6LiGgxZpM1Y5sq3SuUNzJNyEV16GPKZEiz4esDzukt1eUcF7ed4yqZG",
  "key16": "3Y1svmDYG8X5y36qGH9iJMNokWQi3oKUdBgMdn8VYMiAz8v88jTxqqR91g9gVz4gCe9uWVgzpbEHC1J1RrHyUNKj",
  "key17": "3y4MB6NkqeeECeG9bNqwa49EhGhwuYKnYYtL6No3rCkCZnt7isCUumBR3H3gLz57reMQfi78zK9HJRXZfYqSGdWK",
  "key18": "3x9Q6pRa8dAZDqcgmVhct9K6g2LJBkaRCMKmoFbRmt4hZnCvD2zGxKiKP3Vpn1UYvFwGoDnewyUFVoLQC3nVfdN3",
  "key19": "67EXGx26rBCSuZUDvEmRQEPmBwDCgf3Nb3V9i6tKFcbzTXBu7ffQCRFYvvccZG4fPZJdCpEZpFT6eNBSQRFh2VKu",
  "key20": "4D2aHj4W19SeU8dgqxHxobZEeJp9LLMbcC2ujTWz4HKZpCgmz6w4mGutCqZ2eF3nf2eufMGd6tWUDcqhdgrHYXYg",
  "key21": "45cLd5SyD5fAEvT7evxHKCH7w3p36SWxsR7AP3AzQbT5t94GQEbDXJTDWKpF6G2jTfBkF8EfCXUqVzn12mygfnR4",
  "key22": "4QSJMeoHnFv6r5r7JW6Gpddi9xZLMZys33YCgFSo1n7bSwyPrqPJk7UTpMg7h3YkZMRm4yFYiQdLzjUELbD2YK82",
  "key23": "67YrH3P8gwkRdNj8XTxEGZTewmLtn8FLvuWB3dqLQStVoo6vqthxQbjLbFDoSeSswtjiPQUzWhbCrsm5b7Xm1V6V",
  "key24": "4dVGws9XPB1MKhV1jMmGXWUw3VX4GKChuVGPWajF19nFFy79RiMjdYKZUWmfV7soQgzjXjpCBbrqk592if2B1bBf",
  "key25": "2MFh1qu2kz9ee5SmyLZDM7BwDeMAEhYQCmgrm92HKdR8MTp6vqJEA7eLocmaHoFrWdBMDhTQDYq5uPwBUFqtC2c3",
  "key26": "48jpXYwezdgeg2wj2sZF3K93YWe1q9LAPsNLdjPECYee59vremyKAUG7gatMdZAjZPQSgUFQrDBGTN9B9MCGAUhX",
  "key27": "5p1wpSjXQFxEDoS6c1bYz21RvFJQvB1PMpyhVBYyXe6CMhKLdshonB7PUd7U4u88t6NsXL4qCJFR4pJG6ocGAb9A",
  "key28": "5sny3KhYuQns3yws3pjZtWy6cw7BmAWTSWKWJC9fdjPLzjc5a5WtB75xwem5zg24tnxMUctqTUBfZHVig6eXLHHF",
  "key29": "2XexT2sWhpZsFkNNAp2A4Uytratrbwpq1t9xVuay39XPpuPFZ2jGz91JTnmtFu5xKwqrVrtSPQDyhkSe17zJ4KoQ",
  "key30": "5gBqaYzy4R4P8fvpg5AsJtaG2Jf1aG4GDrHGfKtoSMAs1DcVNTBM73YGducaTcRbUA3Luf92AZVvXw27KubAEceW",
  "key31": "4x5T8X4DSnAeix7WbXaQXNYzVZ6hhYroUXW5282KoDwsMr9cN6x4N4fmo4VDQDX6cwgcZMLQ1LfAdr4Vrbqjk91f",
  "key32": "ukP3kw2PevdnvttCxYFBusc2Z9Et5H912fQ32hbTqjp5vEcUVygUUmQ5UzRFAkvggGsY5R5u1Ju8yFU9KWywz8m",
  "key33": "5ny52iDrt2ZRk2p2uMTebC7oWjeLuMxrBJ4rM9VenzcqTRgh7YKGUXvyLEh36rnPnahodv9ask8X3bH32hKfNvt4",
  "key34": "5mHFDciQcNQFjzZGZvrGVZ1eZBVWipfw8foPrycSirqqKVGf8AqDS72FtLV8rDrtV2PASzQezJJqAUQWgFn9NdjM",
  "key35": "53JLKfVQEjpbqv6sFPgoKLKc12nChNPL35QowWFW8szT6GxpTXas7b5iH21zuMS7JjBvhJm51VdpSTnZmtC6XqUk",
  "key36": "3XZt161xiJnkH5az2NxVAoQDpDn52tmtoZJyTUwfFzYgdXut9D1sraJwKUErqS6GWjMyjjNgsp6VMMeB111Jkq3R",
  "key37": "3rArCCCuJr1tX7aGTQ2evQ99xRH49jHmDocKmPKi7fhiopFzE4L7Xh7ZskyNrDTwMynKK2Z7GLK69mpBZpYfBxdN",
  "key38": "24smdtBUKAPRNT8TCt13NBdqxzzMsraEoU79EDdznaT3RRUdBrQAzbAgDv3DgMJuQhFeDxop6tg7AARFha9UPwsb",
  "key39": "2rcS2k4PYtqCsaSeZo1HmqRKyVwCtyJheYrCFJV1CC5qYsaTKjDcSweTTH1xw1j9zawyLVhhsFAAgc8XRc1648Bv",
  "key40": "qhCTsEmzeYnQzG1hFZqjix3GTwJnw3Jj3yH9C9o7HFD9YW3KRfjoPA9ooZ1T17eftCtgs6VbAVo1AgWbUjE6H1R",
  "key41": "3SR2RzcCxYbQyKzb8iUVgQAfyVQwSLdT2E7BNG4QLFoFgW5sAAPGvHfMDAx6uoiHbzvGByAi6FWmFKbdJ9YxgmYr",
  "key42": "3RRwJRBHf7wpLbTqfCQa8PtdZ3fpMKyZNoJHMTjAL3Z5Rv25yzaUwK9fnJiuFEiuEtfuHAwJ8Hcs8o9EJTWarhok",
  "key43": "52U3zP9yMbgpPttyZDM5MVvBLj2poEcr82nGHngsMbZGBSRyBZA3gWHzaPyW5csBGDb3TezEXSAE9JHsPZdYJLP8"
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
