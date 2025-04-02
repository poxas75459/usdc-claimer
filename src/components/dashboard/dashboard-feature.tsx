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
    "Qv94b1nn6pXbqrdD5Pg2LZDq1Lf7vnxrVzzHq5mpZLuauLnYQnNC4ayHDgwwgbXt33SvHw7aevFRW2CuEbFPxJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AfYmkajKYQd6AMEEM4UwozeRphCJY4yAZ2VQYaLDV81iJmJiWYpFgN4UqjKpLq1HGFe2KcAUfLfxbDBrFJ5Eaam",
  "key1": "qMVdasSmnfNFQttqw3DPGEX7AzifJfP7c1BSwjX5HKyKd8TrJMPFoPVKPGNA9c5kWtc99C4NKR42XMsbx9AJ3gM",
  "key2": "4i3w7K5cV3E7wm2cYM2WpEY4nAMMMZ4RU1uVVgBuFAaKk6RyQdAVSg3pDBCSoo1Ur5XZAw3oEVtu4kCpJRyJk2ER",
  "key3": "5ZtrWrE6AHZRVtff8o8eZpEBU6iiGdB7zMB9Nu8eym9j4EM7B9VD9NAoJ9UwaQJKQMBDNU54nR2XirEusKvirjnV",
  "key4": "5WVAAA3jibS7qVe5Sqp35X5bBZ4zRVzu8aC7PRfnf35fj77Dva2NHYqSAgXRuKfGP9bX4Sx7ceVNUEgdXWcFywbc",
  "key5": "46aguNPFYCL5Bbx9Ke5bqEot6aAXXzgg2uAgQECWTmfSyPA2GjDjskBKwBy1d24Y5PHPsC4R5YjHJ11tdfYqPEWD",
  "key6": "3cwcquS1cD9oFsVJEGioEi2FXqQ1JpjjcwxJQPcNu5Vd23yVpmMLvmnYeC7ZYYefz8TdWky98ASL3ewVvksmUJoX",
  "key7": "4yBxnw2Jv4x8N7edTPupxLFQBAG9mBPDiLeND7zvAw2pjnkydZ8hHCyuweyMhF2qajH5kuV2vNT4JHMUA4Up5jWN",
  "key8": "3xevhyxG5n2fnyrha5JixrJYp7nNmSKmpQiaLuTp3zswBfGgLHMjYe5iZ978SRDMNVJo8s4155CsQH7WXGxQqwkz",
  "key9": "61Yxd1hq4b5MALwnfb2iJSCyDjzEgy2mvJDbmoxBsm9oKbmbxd4MDEUTqTjKuBkbo4QL3tkkRiLsLAkojyGP9Efn",
  "key10": "JeYzrVkotgiJ4whTUom3yKFJ6yQzzd4VgqcCiYKuSryxU7keL69GesxC4RzUe7Q3wNgpRzhRNbA84q7spyLn1bx",
  "key11": "38VtczJArd1LMiwFUpX92vMGC4UajRusDiAek2fHvJRTXSvNtDK1g3ErN8PBT2KbKykR7Z5isi7mQzPPkdxNy2yV",
  "key12": "5CUnvKY83M8y36zg9mWP1txfXPja6KJiGdTMG6F6gR57uJjs8s5R87kZtra3ui9N3dXQ1xbfH1RbArDEZEQPykoK",
  "key13": "2C1iVtegf4Ht1rYTtbbTHP2apZMKCB8LQM6ftC4rSNE4jSGCWE5UBi7cPrhWHoWcx9Lhybnku6pLGBwZ8PEA9qUo",
  "key14": "2UxBghpc8d8pkPoAwSbddotgqTnyFwzDBsbBTyTyFUEySnG6tVTVReZGmaLFySwpFpBKDmr4FfZrqNHeg8AaUfBY",
  "key15": "3SE7NNrMA2zA4Lskc1yGUsdyZnYzXKMvuAQ783HB4zDp3XfqUcFhuRyLp3gyACnT6V8BWQ1GN1yAkvV1JhSy19j8",
  "key16": "3JTsbUcGaRzCGsTHkMnZ5KuHzbSYLQrWCCWcXnZzGrQ4zHdHFYgjyEedHLk4NoA9oevrFKgsxhWsmDyo4kDxChxr",
  "key17": "2Rgs3HZpgQvKBVpJwdZuNreomNRmQ9FCQrmeUDdwCaJbdvGK6XSpaHwz8yJS3W33aYjb4DkUL4k1dCwDNXS9qAyZ",
  "key18": "5tKZhG5Zvt6EU6nqH4jaMZY2bgU6tyg9BZ1YsUgJCtWSxvqwactDXXDSJ1keatD8knupiRThVah5xqWF8gvpv8wX",
  "key19": "5PjPqKtBGfi6rYoy79Pczv1nvatTGbz68VHAcGr5h5SHiZZsLXQdUAopofajNiBDvF9tz7RuYYqggD68CBZ6CcRX",
  "key20": "2Fr3YYHqGsbKxPxs6BPggVynGGVz6jRHkBJNfKu6ACttCqztg4c2cyTB5M9rxcQcB7w4iWzaUvvTPTL284EQWKgA",
  "key21": "2sVc3XZVGBa6tEmQ8X752jqU1FVxb6vEBRR5fw5EsNjy5ywL2ozYP2tLGJd7hVuXK9cLjnT8tMWCMUAsEzfdMz37",
  "key22": "3zS7PzpVP9FibmNCKmiCjkc842UGQN1arbCqnFbbsKPuq5V4oBeKhwf36GA7BtKgd6qtwG1WnhrhGUbFNjbFDhs",
  "key23": "3E55wBsVsYe9YMef83vZkBvKdbnK3qWTAapVheQCcaCZwcrsneDqbiscrZhAqW5geZhXvKBtuMKT2d7BrJP2BrAy",
  "key24": "2Wne5vDB6kFC44R9pvUDKWxbRF86k4Qz6pLYdmsTi9LudqFHkQzEhJQeYUqaDkKos7nqqyMBKQpFzibF3zTG1h2j",
  "key25": "5aBRiV3rPtZqtHPhV1PCvaxusgJvHmp23kQATUcWxcj3BDw6JumJ6WR2PyT1RK8YKd3q4GVMcjJBpEwD2sPsjHkz"
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
