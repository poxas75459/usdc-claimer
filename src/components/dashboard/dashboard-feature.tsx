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
    "vQZg5SXrb3fwSq9on5oYoqysUmsizqWDNBaHcLvdaKgmz4pMZsXb9s7kpEpqdZTSwawtfTtPomhEM1GbKsCM8mC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YRY9wg1esFqhUn9X4DmdDNxHAyjTwuixsqr2zgk6JVAY2auJXwhmqTUmyUbQyV5zx6socWKYFarnkojrnzbZavb",
  "key1": "hn4eWWS8oDhcBfhRgrcGGmhTQR3WkpCprZUqxK7Pa9eJsMUzKLS4xooTLWrmMoNf9gZdZ4VAUAdQw9Mg8N17gD5",
  "key2": "3BKPwZ3n4LAuCHjiWTQ2CPbJCEcx3pJEqAsBePtg2YNuyrH3Szrx3AUmzBe7xjd2dAeFDVkaUofsP4NXdggbQiQN",
  "key3": "xGV8ecGkscj7YyNCARQ6VjXWusGgLXvdMga6MykcWzMhcyTJkbCHBcPmHHAG3eeHJgjsnPRxARP4fH4p12CyJMn",
  "key4": "4YQPzUtbzuqPqb8FJ4LwEEbw77t7nPNQauQBuC1mfpzBnWV2jzr4Gvt8Zu1c1sqCc1VkjmRaggeanSF2bQE5wVCJ",
  "key5": "3YcVtNHofnY9wYhxgtkyC97vupxyaSsq67i8atC24xfD3XHU4pcaFGfPE79Ez3B8wwCJDo8BneWs42VdwP3wXBLa",
  "key6": "3EDjnm4xAv3BcZq1CmqyQJnoGHRaSAbWZaN67WyaaQf3sXwMGp6fVVh8ZZhb6D3fMAZcp1sRw9L1d2ionjVur8XR",
  "key7": "3aMn8qZYV2AsmadbyEgxY5nCtBkfFBCBt1ZHM2VLYyaLCdMHtAtqSHYErxq6A9F65bkP8AnRrTQgGaSRC2y18y5r",
  "key8": "4oPWDLbr4B98A5hUMgNQLsUquiSAXwR6fjLNqn2pBAWYcTTWo2g71qRjQQHkrjRtD9NTF1AP3SePKiAGAyG553Cf",
  "key9": "32P5a5krq84T2vSQMtEbp381LQGQTaxncvh6HouikUkN4FN5Y3LqqSVzVBNdo3y7YBupi6vyFr9XR5d2M8HrfycC",
  "key10": "5uaHzxAFfnHpRfE9TvLzFsvaUAFSmQp2yJ2ae31c5aLNTNpZLGDaYVMGDzd4mBjN3KLbxgae72yMBR4CQ4QjBVQL",
  "key11": "9Q6LornKaqziNUTk5XYSqZb94h3CH4q2BEdyjS6QN7EWpZiyWPzD5dKzGPWqETZAmdJzpTqpvUJptPcj6mGLLox",
  "key12": "352pmfNprqHWp9R4xEL9KiJkjbSF3mc6dZfZiX7yBGoGeAXTxb6W8B2FcnvJ9j5wLhMmPLKiUHCB5QUfAWrX7tbg",
  "key13": "5nCAQz2UX9c59sRGbysjDxDxE8nnMnMTLwNmoiZVb1qQCQqpEfr6ktEKmQU8pjkSz3bMH5UVqCnr6h2KXzsM6d6Q",
  "key14": "2PQwSNE6EhYJwyi42ZAB1eKZMnPAUfVxpZd8vFg5iaNYKeUFRvJ443L1kh3ZeJNkeZnPusamGSnAH1jenifwmbqa",
  "key15": "2d5SCiaPME9ekmpFeGMZJK1WUmJ3WHvZMmPP5u8ZgutrbcKSbGSRFdFvtvLFyrTUeEmY3fQKo4AY92vMmobxLwJ2",
  "key16": "2tKY3AMkXxNtpAwiVXcFiXvUJTJ4nuybRib2CWusQsNB9HYERQs6LCKbEpXjkN1vtMSuk9tnng4AwzoQkzjTb84b",
  "key17": "2tqBxmvDygDDfjxFcVTqxEKnEttRgvz3hSJ3RYcM8Y6CsJWNkdPVVhrC27VrW7T1ki7eAWEwMMD5bezZrAqtvMSq",
  "key18": "3tstbrLYPEhhJoJpankZ5ujewWHfqb7RmPFgrik1PwGTGRbNYHP8437K5U9J4XbRc2Kh97dGC68ocN7cgv4tTgXq",
  "key19": "4tn7RYaQeJrKcL6f1MwCgbLcLAqvNCTfXXTyDyvLuw7ikmX94vJdfqNsRZuDxAFEYuqTzE6AXwQahmunmR2qF3jA",
  "key20": "3CDhsEHpFuW6rwLXLwPoUbwdcSX5jPtbgi4JVR1dztV5a2M98woSNK6QYMH1ScC1RMhigJpU2GauJ7iqvhgJBPyG",
  "key21": "2K7oajHEpgV74kDQjVUqMUAw6Jf3EGMrBbGbK7hgqEd3TGY2o19QkFzpUTsPHucVwc5w95s3CB1uvx2w2kUzC6fn",
  "key22": "66G2aXyvHhebP5putzPmziJkC2FwkKm36PR9emmQunm5W4EkqHZy8tdYoz8wpuwSLzTSTg752oRCVqZwuyQKhagn",
  "key23": "4vxcFnFZsevqSrvsgzNEcKQPuwX3CH7k21u1yytCM6h8MwZVSjJBiUF45pboBXF7CX8hzf5ud783inNPHkNr5Etf",
  "key24": "2nG2uQpmSyk6cLkbcmMer3kPhtaUZUfLQJTRQcsoEuVGZ5J23Kio3N83Ctsh3QpJcUYUS5JGdo7gPh2jieof8Bn",
  "key25": "3XK4ezuNoCxfYhgBG8AfdiZFuMjq6RmmJaQRMwBz9GgfMkokduH3e5kn5Z1VJgpBdizURK7xVepw4r51XgsxYnA3",
  "key26": "4157Grj4RfAkW6hSCqmsRsryU8AA9rSn1qfnCpkzoDnPkQwGQ3cyNtChPMnUMwpXwGrW3kknfEgH1mHyfNzndPpd",
  "key27": "3AxS4DrSQt8fqLKNc2LZnAUjUtuMw9B12RhUMPQ263ivaBCQ3AyPfK2cr6Zon63tRBoEQhRFeUeiZrJvtttmyhBA",
  "key28": "2EkUjxyZbiHfuwvwxRZiTEfndDvhr3kcFsVdHaz6rr9xxmVLPQtDDWx5U136Y11nPs2qRA21UteEidDoN5gtraq7",
  "key29": "4a5f8gfmkEyYSgLqQnUo13DhusZ2FHM3U99VMeFuAdGRQPLzRWJ3V9UD9CYGqdknZGWESkaLFxFqVmLYbFHvSguu",
  "key30": "22Sc3Fao1w7fk2pyFNs8jTvuK2yBoHV7wfT2NRzKDNFkCi9pPGo9DQMNMhjbyRphJv8eBcujaE5pCTXRvECKAyLC",
  "key31": "23torftxfvpG3woDN7Gm8kjAGFZxBBCsxEh4cAv6METsX7USJ4wbztScEzAqaodbfXpe4PFfTqRBfivexm23uHy6",
  "key32": "5vBxtdq3Hjry2F5obqbFmAP9mv5uTR3i2DxRDRyvECE6MJr41kUq1VHV9dKAuxDjvTg4dpayY5NsroFLG7Z61CU5",
  "key33": "BbSrYyHZDt6ZFARysKfXbu9UhJuoGDwvz1MugCiJKpxYdVV9Px3367CDDW9pw4ETBZ3jWvDXj4MmbyvFeZz1ptL"
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
