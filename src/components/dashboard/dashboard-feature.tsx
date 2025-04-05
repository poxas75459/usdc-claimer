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
    "9r9xTUJSwUgEbeFAwHGrpaaR2pmM2xZRkaiswrx8ekhddQs6ssE5SkUgtd8SroCyke9Hqqcq5vuw4AfG8ZHR67g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X7XX2nufr9k9FRcNuDznESDZWHZLCc3LFDp1ZQqu4fapQ5y6mhqhgEhNSmjhJu6N5NuHd4aquH8UgTZJ86sCTfn",
  "key1": "3PRdKNvTSBtvYHEjC4jTz5RMp1P6dvgPTRYgFH96zeKYd5PEV8yjs1fii1WmQ8GPjGGTbyi25M7NmWy5cqXKTFYH",
  "key2": "23MrQ4b26LDqa1hVQWNFqKxppK6wtyWvTqok5Vc1u984Z4guynCiMUdpoFkUGPGoywJx9DmK9pcKSL1r8gNeaAbW",
  "key3": "5PNpk5ecwpbA46UyPQBwHDBRAALyFUFSCvWvBVvzP5GLd6AXX67krWA3itWJ61VBtNq1zDGfkxxgYm23CBJU99Ro",
  "key4": "3iNy9czLfxqGB8uJ4W5Z9yEThNZ15T3MM9dQurUKdKTLz9MFDj5atvFyJkXPcABAU31ZjELFDKYmBxKVRqMt3v7W",
  "key5": "3kweFwQ5Qzp1iBr3t9jEHE5CNz1cf3k9HfWcEWT2mSWEpbAY3yBL5p6wQKtAKu3TpeYd5LBLHDQUnVyANWCo1t7B",
  "key6": "2ddEQeHBmesSBdv4Y18hiwEwa3HkULKRUzV56k2eKp8fmzvRA6RKsCDXstgWoxH2rZWyLaEWtT2Nkn8kvgiZjG3o",
  "key7": "qNy6qkHAV6xodxUmLyN9JXkLLC6Qf7fjzKGBG7v1Yw7sPFy9hB1cmjG9gFAP1ZWNQ9aV5ZpKn8BgRRyHRT3NDBc",
  "key8": "5azRjCjEopfbBhjdYSSjdaeXWeMFxmcbXAtCCf9EiBCYDEW3GLfbBn2fmd3JLvcqmN2z7VsA2HGsCY6BUweHeoxC",
  "key9": "5atUeuBsm3ZpYfRyu1reAyJm8Sy92ZykGELSdfSDtP5uUW1axR3mRa4tgnXZKdmhBnh6tfDYuF1JgGyvYU593cjn",
  "key10": "5yeXd662rv3TD9rT2tvmnTPNabXNL2is13qMzUiKBaKtf9USrzCmCFULxQcKJUqA8pSDHtTo3LRp6QEGQg922XD5",
  "key11": "cmepFFCHNo7B4W97Me9EFKRgitEL9KaQ7Gj7hTKrRez12Vf92niUtviAwBeXHoziyGeRVuyvK3xZMr1tNQ12uFv",
  "key12": "477TVBT8GtVfyyxjWtfKrQM1y1dvhpwPkEHK3Gj42wBWoUKRvQS6NzUWouxorhoWhpbN9gyzEAVxY7xbAWyF9aA4",
  "key13": "3DkguDHfFbJH3xiRpNr9AK1GVAiguwVtsmUw2ZYqK1GLHb7qZZtDt5N6dfYA8XkWa3YpAbUwd7yCsjCY8QSSU7k1",
  "key14": "3xj9YobSS2thuvQdxvpUpQERpXFbZzRMrnoEUTiBCmkyhXg9Pd5RpWTBEGppRe19BqTYgWXCSzNTcZkzv211gSVM",
  "key15": "5r1a6seYfBukzYi9mtF7ePyVPySWoosUbsifVomZ5FddWTrhMnj5153eaSkot5vDSQDcsPcU6jYhkdufbpZ3DuZQ",
  "key16": "2vhWFWXEUtiBNzRxRy6uM8NGXnukyTDdDaNuwYoNYG5MKuKizwrDka7fv2GEw5dkSs6nrAMLnKM18rVHDtBM39k5",
  "key17": "4ZBk6HUZxVX3dZ3CJ5fupa2Mhg4cgw1DEjKY1o6hBaRzdhip7vXkdeY85yGLojNPrukpwz46jPrUHsBWRasDDAYA",
  "key18": "5DU84zEb3yASnQuS2EEDWVAdWLMsTU3eMUaVViEkU554qZDbNtB3ip4tHbShbXoFv56kxMcytYZWep9HwiMJbHot",
  "key19": "5vzrxUCMLdNfi4tBzy5adRNnpq6zhPz2Hm7sscUHW8jbNPdKdBFLnxQJdP3VeZkMoUdcX3N2LoK9ahPHYtcPYmhp",
  "key20": "4z7YErBMQqNYK6SzFeoxXGkkMZur7HwUuyc1aHKvyH57ihp4iefQgEFnFncenCJXJVgbq5oCMraVHnX3o7Pv52gB",
  "key21": "31SoXsNpGKjVFBoHzVC61X49cNZEaJmc35aSrUPZTgUMLxfzw2v3ms9mDhq76n8sBfsL1632Z2mKHXF3Lm44iaSL",
  "key22": "5k522e4VZVTxhYS4JaExCGMaoUXGRV1uvaxFH5jHMc7Zusw61vnUGHyEAgdr9QTMmmHYFHVHfC6MahMhCwMddRuP",
  "key23": "4fVkbifw1q7C3S5PZ4M5HSEHBkhoPxwV9b5BKbUsXQuTG5cyQTSdFyZF23Q5A4Gpq5zVposzGYR8N52JWJQF9MtS",
  "key24": "3AaxgdASL4U5e3AQk3gwWSaqS5g9PLHrbyjhiPttJYWDZDkoufEMcaTv41Z5YDqqKHhvSo3aaM8z99QPWY6WVWzA",
  "key25": "2654zbpfhq5GYQ9D8qbyPrhHtGPcPr8TNLfzXrnis8KsgddZ34WYXq89q7eMYfsdZvnooFYpUXHxX6wp2dL6fw9s"
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
