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
    "rYzRVY6ekHDT3YtZeX57Sty398eTkKq35vB6F2TQ8Eaf1F4ZAjurmkrv4fhBze16oJCLh7YARQ2XB5qdfmR4Mmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kiK3sfAcJQ8b4pG7HFP8r4zYKWUtSEmXsTF7TAyNHa1JQya6oRRWMFjbHzYbWib4pdE6tY2NWAp44GidFhCjzuN",
  "key1": "4KDgcphsAs5WMFkFxbrE8JscU35V7Tytd3F4LmY3hPF5HKTP9178qZxDWvqqwiLU69eaPeeN45rzt6gubgWGHJmT",
  "key2": "fNxxFBGEsbSLLYNytc4n5GGtNRwdnDrF3FQyn2xDU8qj4McxZ5gD39rEJ6xMJoPKrJaxNMLjEZP1jHe9Ei5rqsJ",
  "key3": "3VCVef1EL7phuALEBxncc7tY5SsoQFWX33wRSNLqt1im3Js1hGN3wsnfPZrePEBTq532HgE2TCzYFUo3QZUjebP9",
  "key4": "4hTKhpBSmDbZffFCAfKxqq2DKMBo428enqZexjLqYBk7Mxk1yr3vG7WNv8fRPcMWtvwCKxfJ3sWXxcz5XBZifAPK",
  "key5": "5e3qqvTWn4k3UVtTqG4LzfPRprcfTVyyu6xMKBZuxwETvEmZVkBhfn8AneWH2mX1bbPrvzMfjUBw7H5pWb8J8mQJ",
  "key6": "2ofgkUXG9mQQZAR5SGZ7xhuZyQ696zFieCN8QH5rHCDXjUBaB3S6c9oactKk7WwUWpuKyEEwruVG6vqc7Bsi17FR",
  "key7": "3byodchdgAzDwMdSDu3mSWTvT5kU6z5CW7Df5Zp4BzEsDwGDX8J4t3SgBiapdf6aS2AtGwRdovWhh13SjLX3CFLQ",
  "key8": "2bzGHag2pkBPa5fzSgySZ56uFmDd6CxnwAhudaEfVXqvJxczTY7EQ2r9jZFFvdaebM3Xy8RUSPhc1WZffC7Rc1XE",
  "key9": "4BoyF46vB9QfoKxuckkekTqQAUAz4uukYuKkB9pHoxjeUyYh7AaXPyUWw2DKn5RJ77qdhrWzNYPUfFCwJnHzzcSm",
  "key10": "2ho7aFWW7uADpdSxT14gtMUvXScPiPLVtfu2xj75Jv9MDb66acsGFW4mhcRtp6uo7cSnp8SS1aCPVfcwujP3uadc",
  "key11": "63yUQTCgQg8Nq9eQQT5Sbq2RjAgqxArHjih2FkbsL7yGWsX7YhvX7m4f6PaWYY6ZTPH44dGDQs4bPvaoFyFjj6oB",
  "key12": "LDtD33hWLqD68yK1kMkYzBgf246PwgGzSNVCaP3FaeByoreBhP4vpUCcCuX1VGmM7bCRaZSGwnubs4kEboJo7zP",
  "key13": "juYYg8LzKBQxdVhMD9Ct6t3XawsV5d1AoHxkNTuKzphosyDwzry7AF9nzAT84ghA1R4LANz135fj33eC4nWZsbZ",
  "key14": "5Aojb1x5nzArdtvHRZjxNVeKUXkmLXhJQmpCibLrMuBqgHizDbasjUXiXqcA84AajQSXJoKaF2SiXh4e8gtrMQVK",
  "key15": "4EWWRPpbhfbqzJVgBUoEY7AG5vSaCZbpL4WCjDF1nMBwf8ACofGXKfGP5Qou1rRyA3xzEk3JAW7JAkKtuRdyri9K",
  "key16": "2n5fPHJcJLCA55zWKcvPaWGPjnmeq5j9Zw1vbwJnUKpcFpUPB46oyjZ9nAt8f6PWv9sTK4dnghaWj7i9hp1vMUKq",
  "key17": "bnvwMB9hgDgKJ3DtM5rscExDrzuDGpbzXYHiij4HmBpYHQyxk494RtQXhaztttGQieErVbsFtd8NRawd37HMVnN",
  "key18": "2SuAKoJj8nnpaa1Fxe7w4M29XbGxUaq4jFhLeu2PFpLNpi93bYknvi7DwRCak3NGEWh5Dv6Ur3TzdmpJPm6pWFNu",
  "key19": "2ipXbHkXEXnv8vb6gPQf231SPJ9PpLnuoWtcrScyH5wqq3N2a458ktDvUf4SPwSGXQviWLfcHzRA9tTDK12zo16s",
  "key20": "59JBBNKod63hXpPUHX32awGXVgA2UHV4vziAuWGDBjKGf53AVjuv2eM6owaUZjccDxJbLJbMkyw5DxhJKUJ2afP9",
  "key21": "fHTBAZeTUoC7CNJT5gN5m6eRxsYWzPj4iAi2AESdXQSbfkP7vKr8JVt5jqkcbBw6Go6ccYSo9s4vkdmndmsbvkc",
  "key22": "2NJNkT2iaWDetZS9k5pEdPuUQDvhn1sKToTSuVmuNSY1Sfanvo6FycH6SBGEujbvyuN4zunrMkdYo9HejBKFaaNH",
  "key23": "45TMFxa8GZgqR3kDDPtLAFXZdC9n5N7g7wQbHk2Dik95f1KXNAdwcEnBASbh2H5MJiLFUsu6JH84msyoVspQBxDg",
  "key24": "DbXu2Czy8hR35oSaM5yrRDkqx1HKXQrhxeT591gc9D37dca4Ao1W22PsBeQC8K3Y45FYXoERpDaeq9Y66jgN4xb",
  "key25": "4uJ7RhC9tNN8z9kbP5911exyZWjgLkmV2WvDznYpcvaGVi3jmwCrunpvXhjVoJQYEUPbgz1m7XztXQ7UaSpibfWG",
  "key26": "5gYFTBRzHwn2sXdeSMQBGUPNRmtCj34Jn35ptk4oWaMhTTZV9EDo1r1YNFcwzZkiqJbVMPcuXSkNkReN4A6svybu"
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
