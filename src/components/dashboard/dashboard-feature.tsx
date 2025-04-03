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
    "5kPckZxZuFkDmrQ4MkyFuaYMKSEoArXsTWyGHHiN3HiSBG4xuHc7Wrmd45aPcvCmLxqmdV53wgVkootaEaorY4yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z34q9T5PFXLBXqbWK9gvw55LuoRtv7wF5DN7b6zy6HpbbRzwaF7gUnkrV7mnxcCVJpnqJxa2Vyh9RtRr2FK1KKV",
  "key1": "5gHNf5JWQg6zt5udZr7q3cBe8QnG3hQeZNUCrRCrVYYvYD9dXSkNeMprJcBnnW8SigD5eMwQ3DaaESZ3hHydpBNw",
  "key2": "2xtskwaTFduSvg6XdvtvJmcVWmN4L6DM34u3VQzBG82Gk6RtDYBkGctTGy1K7YfDdTtm8MBYMVop6Uemrt34unPV",
  "key3": "2cNkcmHRZZxCqKfnu4LfbUDwWXuMT1AQebEhFQWag1vj5jqRjuYb6wH6CdySYeR7wWuRAN8eoHaM4oCy8jEhypQp",
  "key4": "3oP2WtVV3nNXst9Fa3qizjiFb7e9RKpAvMy3LE7ALGJRpMut1jDqtZ5u1YKAjcykUhYA7DJLdYCJ8uQK2NqWnDzS",
  "key5": "2Bn3X7BzwwntoJdusYKWqcnxGXFx2PW2WtYyQSUpkmYe57MAMJPHq7kUtEDeAQkGHS3YsxX8S5yDhJSC8xBenMW1",
  "key6": "3VDxzCqSirHVdZwNiLNjbUpVcMyzEZcmDAquSbDdK29Qp7WNZVT3vjs4yxuDhXVdGr4GVmf2CcoQYFiFr4cVnWBH",
  "key7": "2NzzNW6yXgHqeW6YP1Tqoi6a642U35mrd6rBPc78mYQpEXTfe4DRqp1J1dZP6iYqHUPB6qC2yMM4zayXt6dJvUzD",
  "key8": "2G3iS4ddzAYoGiWs4pAzH6gVL36HoqRThT8VWmoSKFyEWVDodYjE8X9xio61Da6bXUExd8G8x9XnWJsarxbiZmvN",
  "key9": "3F29LsFW9GTQBJi6VXXPYKphD6MwM6wzRFRLZCHnMQJT75w2B4KFCUeVRLaMPjTWyvEU8coDTkxYhYm7Q29any8k",
  "key10": "3aDzdre7LG9wGjVWLS3PkZyAdtvbQrmwyR5S7JtwyXdNccA6Lz6eY9Di9HRQf7ReWSHdu2KFpAGawf9fajVc75rN",
  "key11": "3bSJE8EnKY5AjQJCKQ9853SUQXgKTxUoyoVQSwHorKBQgzpE1sHjiTBhKpQid2RcTEq6EGmuCeCd8R9kqjoDh5vR",
  "key12": "sXPiq6e2xxgLoX6bQ5PoUtDKBEvB7MbKXvUmkC4raJRLa8xR88jXDD9DLx9twNg2sMy7VVvwJ3uMUYXjVFVyPoE",
  "key13": "3m2XSVU7BdUe92BcoR9U1UfgGEfPrYVz4JHDXyLUE3EA3amEQoXA3otxA6xsRur3X8etWg7H3QkyFYvdbHoNvbfe",
  "key14": "3nZ1SAFupMc95A3LpLLqxAESxiGtza7MoeCyJub6tj5YPamx9U9XFZb4kaFiD76LSS3p6CZ59CyfJ6CMza99S7KN",
  "key15": "5cY6TkZSfttmj1YhF8hDckr1MAZmrbJutd6TMDQPbG9Dr9ZABgL4EmSjca19AbWwDz8DwwiyUVNNQsvCkdre5mcJ",
  "key16": "4gTE4sr4wMn6dLoGtdiW6U1bqRhV6RwHEcgnoGwCkM96BcZ9xmqAwSgGd3z3dUt5467gMPZVf7hcSQeGoqg3cNao",
  "key17": "5WACscak8nFu1H5JQMyUpJH7g95D9AcoMY8xnCuQb5Z16GR4E2FY59x5XDean5i7HfoKPtvLcCyb41WMNcgA1u61",
  "key18": "2n4FwqafxGdqcseKeX1Ss7jk5CBsRNhwh6YdgPbj48yQcGbMKoRwHMuH2Lnbk6nm4wJw4QeGnwseGG6jjcxFarw",
  "key19": "5QC9Q65CPQ3RXPowyTdfXqZwrRi9r625xDLHeKJfSsmsrmENHg9iTuNNHVUodevjb4E7mXuhawJZNHnTbeJdmxgW",
  "key20": "5k8Y5GaRbM77TmvqhMXhK69UUSdu19Hb1R6DnP8xUPJcj5rToV9x1DqG88B3fmUWR46BLWEB9cZZcorPn2qAtTaD",
  "key21": "eKW1BcNVUX1J7L1QA2WUnURagX4Mdsg8Sw5xwbzKYHPaRU9gK5cu1zatdN8WKPEE3nL2sZCGCq2GMxikYtBusCg",
  "key22": "37PjPMo2cQd5D3DXkU32RLYzya2mABGwLdL7Ah6YvBY12rJgXaFpRtWSifdVNLRMAg3Ua1QjVcNHDUBGKqicpvb4",
  "key23": "3xESrxrKCdp6MUifw97rsqMn9Gcc8q8xYwLrVpdsNbQdDYQa3LbyHDBawQ9MCurkZHVSBvEG6ipgDd47VEbQMrrg",
  "key24": "642Zc3GTFnwzbhK7CWwfcH72rSti7RLRCGN2jXvxgJqv71EBaBjqzFRjyjRwXPg9ARZiB9odZmMXBD8bWJip1U8x",
  "key25": "4Bv29ZzjyManLke7f3PR8nvekR7qGqh8wKemPNxcHXhoYrLERts15jZwydvgXKrSWVXd6K8e9VCseHiYmVEfKt7h",
  "key26": "2qCsQgEv19sr7Y5HVukb1NEtv2Hw7ySXmBMJXm5dtQCMzLSoEbbYjSSkPLyaadKqPDLkkEF3xhEtvMaxUf2PJ5fW"
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
