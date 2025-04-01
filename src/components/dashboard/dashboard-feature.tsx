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
    "2jc1tFTXKrNXsFW7UJvVsAeZjyv31K88pgRYtGx2NRJPuS4v9h8uSgj49BBDRux1gPbpnw99p6su1DgHxuosrnJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qygi4ukEjvm4FgidWAL8SFDxBtTDeXoDEZvhmYLBrMP7SwNb3JHLxD8xK33ofBM6UwUUpodzrHQg3MdBAqNBzxF",
  "key1": "4jEqFRjZFvrfehcDPwQsbq4s6gRgwQTvCpCF8kWnQbFohZnRR12iyYqD68smx2jzGKEuUoCzQKZxBS2covjg1Rkj",
  "key2": "4Et2HgdQbXuRZ8ooeq7C91Yr97cdZikgTQS8KmZhtiAddcPi57evnK2i1ve6NWaSarhy53rhvJGTup4m5xHFwArK",
  "key3": "4LERo8E9nx2hHTnPQ4Rrz9bH4ajKm28uSMGGoH6bMXJEZu9T7dykFFyRCBmsP5MaCfvnVgMuNuiChqc7mRhHRrXG",
  "key4": "46FaU5nPNdEKNWk5c1pqsKG5SiW3cBa9DctGZNK4kTuKSXEUd4A7d3Aa1TJDS3juYgbY99YjmrwuVJnvfYPEfR5h",
  "key5": "41p6MgJGheha69HAPWvBx4KwUEJ3LjcAaWdBvMUW1n9uQhnLWrc6s3HganiYRKASCpsKFE18A47WHJx1kxskubsY",
  "key6": "2U3gXMzG79twD8E73eagvf7RfSwtjEP2tm9qgnX8y4YgCUXGgYezk9bJd3nHys8bTWKbArxNTLEFLBA2gAw2TaLv",
  "key7": "4KFdh9wuGascpFW2n7zLTd9JWe9skHB4C5tA7dwwq2g2m71UwuJ1gAHD6GAjAgiiRH4Dker5gVu6YKKLyHfcoVq",
  "key8": "2yYDB8sJVLEdYBaLN55qqYopgu5XTTK4XHptRMRqoYvKhDRH2FhjdAD86aWDC6aBvKHZoU7AmLtotTZU7FKrWqGz",
  "key9": "3KcYvr6QTDfSU6zMsx41RJBQsxAa1ReaVHZp9H8ZLqMm6RrNAvDjwC4PsgDXV8Q8ek8X6fTLMTyb4XfoYYayDbZ7",
  "key10": "59ToFFXMT845uFjAo6CSzPUJBDvi6xcbiGqRLb6U67m9h9P357LxfFQW2xDoJ3JYJnBcQfQiDk77po6RCJA8KeJd",
  "key11": "56dFSKf6EniRmYxwjUv3XDeGATt8AZJDiM41M45bHftxGbkWM2xjH9qjRdPHQ3HQS74WXEMSS4nQyDcNek61LKrA",
  "key12": "uF2oG1LrtUJAUXbK7ooh7GuA21seWjqDkvmrU9DMCfaEDDqcVjYmtBTgopX8sph9TEHSdCBtEBH1kghsEacHs8Q",
  "key13": "2XT66Kkft8mF3cCPNYoZeW6nmxrVYh4JRV76dCj1c5spcjDzS53eynwpjTYSqyvoyYnnzK6aw9ZHWk1MM3uyPeGx",
  "key14": "3CTGPQ665VpewGHrcJbz9v8DUoRV5RBYyG677x5c7RQGwmwM58UQMkTowPxgo37hUJWbATy7wMMPLBDSAwmUaTa7",
  "key15": "3Z65JZD3RPsTVbKdg1znTrC6QpKf3xVUsQjtqCpTWLJoa64q4ibKCuKGHWNtZEEwgFkREu6BgFDNJXXSH3z9i8eS",
  "key16": "3NjTqPkQyakDwBQcFm68uzM4TaupeJseG5ZVModPcnria3AwLeaX3JuWBdCh12xtQz5N61D4AnS3XCcJKUTRA2rJ",
  "key17": "2nZ1D37oUXxKNctu239FgarCSt3zQuWB2Tuaeqs9ZUHt6fi8rLittBhkH4BbLy7FHDtcP7sw6FDW1QuGD6dWtAcP",
  "key18": "MTNpuzZvZhnxkTVxgCCo5VnBX9kYx8pH26awg1sMXgACGY1fetAsxekTS5p412yPfg6QXvUjkWnoC4a1gcRkK5G",
  "key19": "57zghjTEr6xyicCSMb9wdZUzbdqyR2vdqjLaT7op623nKz4SjgCSHceKPu1uH6qGnHbHkjyjWr8jpakSXwbLf2EV",
  "key20": "394L1TA4UjVkhYWA3cmKqff5FApmVYyWbt7QBSRaJQDQdfnGy6NgHFL17sUiiFPQtL4h611JVjpPAMyqYQLq7g7W",
  "key21": "Bd6S9zkVQZEofpYdyqy3LzSwhkBqE6miWzfsSVZeJMwsA5KZ4TcoyYr8beFKdoYkWbThoeejFLzfo24L1jruuFL",
  "key22": "5LnNGFFLurGiGZwGNy65AVZhgvWU1pLAM9BnVDH4snB6R2bi1AZb7xhAXbMFLmKCACNnZoVQfwzwsHbvg5J2nHWy",
  "key23": "2N36eG8ZywCRPiiDrPsYoDHKXNFbb2jBkac9QkbNcc4fFiMxRvrJZptEH2YZUUEqPtVfPK7dEDLVUUiuN6AE8kaG",
  "key24": "28ftTnq6iGDiPzAsFBAWAbkyMNX8Rtu2NbZDHKJBz9heH3D99MGXRaA9AE4PEyKJnhATgfwc1iXkhgq3cSNpaL8q",
  "key25": "74jUEjMFbxHfzJFvpKRZrCbTSg5LS2brqUXJrGh7SiygpWpPAuDWbv5xQ1C6PHFixAJVBuARVFgjgb4Ab7HRXdT",
  "key26": "2wgM8oCVSDmsXFfKr3zXffGnFU6jsnhtT2YcQeZdk1u1AhrX146J6q9dTeYyFqq2DWVw7FVwAzUX4JMVf3nxZ4iC",
  "key27": "2AGHuqeFkbWYTJaqt8VZMZw8913NDLtNfcrocVbR58kr4SxzuzVZ9PpjKJpRf6UVKjF9vMCshKapPdJ2wk5rWuY4",
  "key28": "4C3WmzPdGDKvGSD8hpFB1H8qAQQamBekckAbiC8RX1SkT1D6nSaQUWwdm4r3iYsDCGNnEpevWcMbEpqVsyG8Ns7T",
  "key29": "3H4XoFjVypKoCPBcTh8Mrr2iSyfaTq4Fxn83ReVJGx7566DyDJoYEEx7gSeYGafM3tNoPxdvXihmuerrA4eSmmz"
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
