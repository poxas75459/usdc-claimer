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
    "4QbfdyRHsHPRRRCkamoSTq39Sws6HhFc1t1L626jYkFmCfZsbSZNUjPkunKCVxxfFJER5UTKHP5dKNKw21tZared"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yze9X38t69SvcrDrXhDHthf1UVLcqYWKH384g3gixUbmy7AJZkPgdaA1uF8JHmSRspmKPi8vL86nLbCgy2waxTj",
  "key1": "4sXktfCs6RZLePJtwg878jotuogW6trQGdUv5cx4pjq1XQQAC3hbGoRD26DzEPnouC7gqtCcxziHWydbJ3MkSfT1",
  "key2": "3jsRWazFMq6VtfTTiTDD21VVGXAKsU3E65sFZtt9McWcuJWpisV2tU281x48rZWoaQL7FYBcDChmAvQQ1EHuhHZ",
  "key3": "5yMwPDGwqwSniKWyzQVDoTaTbY4qcTfk6NBqdEVyYLn6qSVX9tryqW2gLTGqpJv5KJFRJ11SYbEyFBVfH8CJCTCc",
  "key4": "362mjYhBowbuh4cJUubadB9SVbEKKRR68cFEh4qSpmY185Ky9Bff3Z295UdCsrfJgyoe13iJkHMMk6DrqVdx9hgH",
  "key5": "kzeqoXmMWwRCeTzHsihZAAS1q3VcR2gMf1NZ3wmVLeZQYJ3PR6LrirkZBMHsEx9BeGuF6gdqcNFSj2QmpMW5NtW",
  "key6": "DAS7y3uFtx3ZsLY1rm5fLeUCTg5G3SCCmfdu8uowMgddxdJCkNK7yZsXwFESF4jeb4fVn8e2m6pqot2uYuWfjVq",
  "key7": "32qQSD77rmkU8vSSFebfQKifVei3WZ66pPCFvxtE8wHY58721EE9Lv2pgs54Ma1tkRbwsVD6MEomqvkr6iFQGy7N",
  "key8": "3pAkepGniRBRdA4vhkuFxAqKPzKARSpB33Htmw4EHrCQcDThnQc8qg9SJTBZwB88qBLsTbTYNC6dWcZVtG9pTTdJ",
  "key9": "5JeSuomnAiEbPDi2kNeZWq4EX31S3LTJAt5jPygXXCvg6w67iCEX1yUtCi8112exkf5Dhe5DimobaCL5qHBZfBvx",
  "key10": "26EwtYNBEepHxvoec7mAEL8fzP8CxU2VaZzExLe6xNHzTUKUrU39uksqGUASMwCBNKQLzRLNi38XHqtpjPj71bHz",
  "key11": "4aP3QSydyfFaefk6CSqpCKLVpB7pf4RHDqLvKjoKha52E9FSd2eX7SvQXPu51MMzEvt5or3aH7EBzJqHq9Ctmwj4",
  "key12": "hpLsvU1hw7sKjTJx65K9ojpCh86UE3UAztQHWNV7R2Qs88xb92SToeh6Y9dgwqijeG629sVh9vP8YfvWe48Eos4",
  "key13": "4He5PZV9CarPRbAmHs8mrnWBkz24BwE7Dn79UrHxyinEvDRdhKWLKLjsthqc9awNbL2hhbKrmp86ry3khqEnnqsX",
  "key14": "4Gqr81XBwehZoBCL1Nj3iCMUUkxtchvYZsMsXT993Cijortnp74JJmSuEEzPyhwQYW71LMNAPCy35X35v7vQ3zsp",
  "key15": "3S3faADjSb2PPuNMTt4dUhV9oUWaqnk8BgocfbsacXTFpC5B3NmCKtKJCxMWJUzCZujPa6agWNRV7xEUKcYECXsh",
  "key16": "C82dtoRQoKKDfYa93ciwQ87dDEFqsVzwoTuHkTadSsUNhB8Cde6CP8vjAMjFHR2HDnBJwieoVTiu53jT47D129f",
  "key17": "4go3omrFofJ23Hnurdb72YKQJ8cfrs8YVwHpnZsBBcr6PnDaBBYVCYn1wQRj21imiVkZm87PWPtuvjz2BJdp6TJu",
  "key18": "4iPffpHNtnQLy9geST212JSYvJTMR7baoQPcsZbtJGMW56LzgTfURNdKdxd4ygDHhkB8yhHLn7ceddemYX1vwW3j",
  "key19": "or2qYMfTBgV21fU3SxeRw6FUoPBXVMLRvYuYwnRqrCKovsbGCrC2Q6kGHb1NcWciumQBm5tKiKizcMVw5SFoMMd",
  "key20": "59CuVyaMmCRmTk2o2cUUuudyQJ3nmmPcuyjJ5MPrY89HC5XyRQ5RrrQ1d453tbKTgYk5WRW2zH1jbREiCB23wjQi",
  "key21": "4SW1KovzGXdMNqsQUMoNs6qgUuqTz9maALBAfm2QBU57Ze9mGeH2LZLfoZFn1hN7LCDsBTRKxrZGRiVbKJy4wnLg",
  "key22": "6JeiiddWPjSY6Rz9yAXJ1c9efzy5QuVDpn9csr43sqgtL2ea8nEQdZdM9Hb4JSkzvrz3KcN5gET5ukfWQ8krkuX",
  "key23": "64ngmCgVtN4hMbvXAWK3aWzbQwTXg5cDMsPfWk8HGZVbPvJUHAgDyDYjXTBzMxxwu6yrbVNivichNPNeGaA6iuUf",
  "key24": "2TfTMVPJVEhYvYUWE99TMpcXzMQeKGW1rGenmtPXVCqR3qmTqRPxcDRWu3H2enkMz9oGZN5PBq8NyU21BzA1pUMk",
  "key25": "5GbBt79zPLQ3zETqKzEKGoio44syg7oZNBjbaS6id92fGD5pLaLbuoGAAQFdGEqQEQYWWBcC4BgpRfawGQq6SMuP",
  "key26": "5WaWT8agQuiJEBQRRVt9jDuiTyeJy9UZaMEJ2LAHMUNk9jVXNXTDKNKf6Um71aJNxNqUiRDNBi5aBazKjbrY3zBE",
  "key27": "2AgfGaKL4yqVLskgKM1fwAYiYdHrZyTLQZN9scaoQnARkK9ZVCq6rktKLQdbzXfRxo8xpE2uwirHz7yKzsMsv5pE",
  "key28": "4eeTYKUddJEPAi7g2QTwmkNXKpiqWbMEAPSPhNgBXKfu68v4FYptaRA4m8t8YdBiMUGTN1XQNmrnsqmkQgCvmkQQ",
  "key29": "59G6TCFxUyVBYxko5uZ7StmEdUwSCjGpc7wxWg1p39pQtdJ3ctmCpZz9aL9JcLhC6zfZpcTHtREjSgfAxUbLFzkg",
  "key30": "5uExrJPHhe9atXrQMqv4FZ8pXsz6FWtUUHTx7zuAqmiYxn1wwCYxSfC1167Y8yCtYf7r5E913igEypfTg29TEYvd",
  "key31": "Hn57LzvsYMwo8aQCdPEM1e5dZaRFSpVanh3i2VCR3tGeHP4CNX2GD9BaqhyyLeNotDWDMaKvaCi6VmJhgEsnW3Y",
  "key32": "Wv8VP7uQ9U9X6b4Wc1FoYm1jYZywuTFcJ6Fc74UY59LWBReEwAQYykSqSLVFNpnqb8DjeDERBYYgjWuSSJvPVxP",
  "key33": "58Tgry3KaRscPajqBeHtiBCTkehzQqSBVPZyzxFTiatSZKdjtJ37CYWDqr6bEhpHRPRyDJiVXdhEojaSDiZ9oLq3"
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
