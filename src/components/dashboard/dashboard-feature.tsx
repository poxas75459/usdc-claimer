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
    "4vaj9HefvcDcYFA32YYwUVXotr9CYATsS2MER3TSGa11BSedHwT9ehPH7w9jyVxkSnU17PXfB2rN42hgqhoPjr17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46cCyhLVCUXcgeX9eRHEmPCoCn5pSVQitCGNwDsTG6Y2QZnJRtNNoWzhfQJMXywDJeuUMRSYzkN1tZPtaHadDCGx",
  "key1": "HYP61JM84DGaRSKtYNjb9XpvHGiS8tpyDpH7quqeMepnfpVvhwRhLYWFTmM8qwVFyxSC6DbHPeYMaPW39VbGUWD",
  "key2": "2KbCAAwetGVLEvRYM1aC9NmCh2PTYv7sSHaYFoTfrVWDNjtEQyPLFDLWnaaiA4zCoYHFtY2knpPBcagvAjmY3Hk9",
  "key3": "42x3wgJVHkhu6aAUKZdnfwZ1RzzYhBK6SU3s3HNhQh9PzR8GCrLccKEGiLo1n9fFPyg9xGWNrGWDctB752j6sZt9",
  "key4": "4T59x7x6yyCzsGTe8GLYSxMmRFSi4EFQA7E3CxreM95WPYZVjSgBFHFSqPUzACyj8fuMjmC6cwSixTLvQkowNJCL",
  "key5": "3Ts49GRDv6gzGBJkYxRHGrjBQFASABMzeVdsLyaj1pUjZXMqSynXxdFWu9xL7UbJAZwF9PKp8rpK9cgWzQMc6ZK6",
  "key6": "5jaMp4BgLck9h6ztEvp5bAwnnLuQDzxThFgYTMKncukpvjqUSC6ELxXupVhkKFWApzf2DRHiPiFxccUx7Tq5Cb9V",
  "key7": "5VRq1xqU6x3ovDdEQTd1LjNBojuiAFSK12VQDNacEZ7tyH4jP3XQTJYcRCTEGo6CFw5WSx8MFkHxJDwABrxU7XE8",
  "key8": "3QzbDvFZAgwViiSrHssm45GA6YFoDPPWvbFgpRXifWGmVENNU1DL4mwAU2f7SWNKuKTBfGnUgpQ85HrSZQ9zkeia",
  "key9": "5UbHTBQbmHeGe1oUvtCYVjk3VA13bUsZP92oz7v9GQ83nYHY7SdAPzXouVbpzREauhJvePEnwWs5E7HnB7mmd5nU",
  "key10": "5ojNJSJ4db9brePT6BqyMLKiHxxVkBPMifdAfDqEBCeBKLDvmnNGfYLGEDGPXKzLtA7uMkSHovntJ3ECq1Jiaew5",
  "key11": "6ky2eA4Dxw9oXNXJrkYsMXZD4MFv7N4qT6aGUMo4LYjEeRKkewxNauUQZ9CxTRu11xnrcS8aqWWhGRi4q1nVmfH",
  "key12": "26LbYp5GvumX1pTgAz1dJbd3brDcqoqYz5wbwimB1yvLjy42Xt56isAjzjnqwrnY5P4AGppFaCCeV7PygKzvGugi",
  "key13": "58jXYojjq3LLtYopG8XXDRwjxWqM7xEy9NYWGpcUPZ3UQMnaevKvsgVCneWZ5svcapJR8DtHY9FusbqjA3XkXgaT",
  "key14": "uoDMRM2fZQhmGCJQLNnHuRRadAaZtUC6nJrpXya7NU4zYSN3qYn2cFKhT4pK7XXsLuV3Ei2SJdG4BtjZ7Fejq5R",
  "key15": "UAEZbm3W8i6G8hXLvKSXBKbL1aYQPGa7qQSzumrcPCTMUNUjqAYPnJrWp9kCpGFXsjociTHTbDWMwYehNkZzMub",
  "key16": "5m2MiUNb5NHqmf32dwoHs9DvTaAPTHW7dJQFGyAxpUcEmc2vu1vkf7zvR7wvjpumebZycJTzB5n2MjBGK5KLSgtr",
  "key17": "41wVEdjyZB2nMwKwJiZhLRX7bkjrSbSscAgDrKCCaDFpQ7kvMyJGPbUhtBs3KrQv5f626cS6QCaLFNocKbiqu29A",
  "key18": "5Q1WAn7aAz6nGnU1PjAJRNqF3kY4YNFn6WcgnL78nVLbRyGrgpoB7onF2w6ymzKbKfXYzu7u4TQyPdY4Py1up5oA",
  "key19": "4dXBPTnFAw7ugzbHUaKsTEpJMThGDuWgzufUqXwmvALpgCYHPYmUmkTdPHcaT6cgvvkEG3qoPftz4mw8PJFoxMiX",
  "key20": "5cG1qzaB1iejPnSTuv9inmkyNott3CMGkHCb4eRbgwVAjFugLCY72cEEprnqKeVGmw6ehdPWaCWfanwwzeJUF2fg",
  "key21": "4veeutzKQrTUrdkx1HxmgrmgHzG7jwWWtv7ZDrjudkQtQXT9hMKBYsWo1Voi5hzr7PVRpTSZrGj4zYnykJRKw32f",
  "key22": "2zzeP6J1wDYtVVEX6Rh2ADangJVuQ9sjvApnmJzyeBGjSm3panjekj5Ut4CjnZ9RmZyhJY7KzEzjJfwvcrzKP6XG",
  "key23": "iR6JaPJ4S7QnGbx7sxcYcB8LteqZxoRMaJGjiRfCECMz3Wws3pNbTQifjCQcum9CRNiP6axmWrUM3Bk5XMatck2",
  "key24": "yccDmeRGvLsrKSLQJfDYw9XPS81jw3gqTYg21XTvsTEnVfL6F1rDctwyVhD2JHcD34SB718NQkCmdntNDnMHz3H",
  "key25": "4MVnnNWAEeMDCYGKuTJsZJDLaRdQ7KWQbZeeqqYefzyxBJ2tCWrNr1ko9fCKDMht3WbDVbT6phcbTSauLJdCXDyW",
  "key26": "39MCV2g4DdVCDXYprpU1MMK9vfNUHM9RS4A5epFte9U45hW6bnErC5D9U7YHCpABfwBUtUj6RhHSg4yfuPazsbd8"
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
