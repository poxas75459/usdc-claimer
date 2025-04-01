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
    "2xTaaGmFwtDqbDANz13DTMFD6B7gfJv3yusRcrNmbimaLcgz7JXfY75CmDasuiJaVAaaEJGYNqP9w3cmMqjSNvLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "crzxGTbs1tmA2uhbV47haLrVezkdnZ7vCyK4XHR38UyRy6ojfeGiBmRdCpDdqXtueoVP7zQ4Kh92vo4YtqgL8hD",
  "key1": "59V4LfQTWxZTtPaHpacZEdkqPThrP3WSdMJ5QoNkmpSQvSmyDm17Pz1Mn5zSpyxTHJBVu6HQeRoxAiAmdHsqau6C",
  "key2": "5SaGkKseR5wFSUHNo2ebbpu6dnBgtj7TPuoujSpaoCQb6b6NrrkV8tuYJAxoVPNRZbiYmnHQvDJoV754gQcZ4nR5",
  "key3": "4XJ53FpNZH1Qz6Eb7fkhjTyYLToKqvNgnR2RkRoM8mGVQvbTA7KTU6EMPbKiPReRL3NRDLA2MB8nA7oJ8GSKAccv",
  "key4": "48risKtwtQskiDa5r9azeymkV2HDFvCwuK1xbG7V9E1AYNSiWZgGKRMgiF9TaM2te9GanyvGgQUdpMhtMrMsG8sA",
  "key5": "krAbq28NA3cFPHU74h1ohk9QGw6VnuNhMuKU9DhGX5TZ1J7spoody5oD9dNdMMvZ5z6SAyMgy4uR8ikbERHiHAK",
  "key6": "2vpsVoCs5JrSpiBtsXyy473ju6A9Zeo7D2LYoViLRcKkQYTupZZEnkmD4rTUDaTkbf1BP6qvCmPak29hmWWBq6DD",
  "key7": "64sokzXpdiBPb4hkCkTXpVX2dbKj21X4vYkW3CdWb2Lt7QkrVY2v8AaiGjvZaev875tAgrSjYddyZvEjnGhTmFAw",
  "key8": "33htdZ14V74azVFejPVQzCu43j2RA4dCErJR6j1pn6R468FnrUcRX5y5PdWxYBnixyV9mtuaTXrx1PMjmdg1PDth",
  "key9": "5Je8qyyNg37AuaUdDxckGSXKY8Lr1HsuzmQVcnF9wmjQ8a45mRp6nqDptxCzWRyfpMufQ7qqKXcgeLZXqiPMvxfW",
  "key10": "EX2aGhY4RUCEstBmYDfcmqpPhBDphjyZeAV2Y54dDyNCPxitt5zbmMPocHGqHgH5QEYvNNywm6K8HUFznEVimQ7",
  "key11": "4JZyyD17TTEbezGP54iTFW5K6hiBh47P3QhVX2c761p74VJ6TpcQvM4X8kPc8CEgmJwbvGALWTTqS4pR6KW5KwUw",
  "key12": "3fC7gZsoY8VZgptPdkqwygmwQ4Dh8CEiom1a3Y7b6K1GfNPbLCQfwpbcBoXVdPaSRyPtSknrnjTBbWZ3BEFSpGg2",
  "key13": "4VnP6KuNLW9PG4xzSSuQmH2dKDj6nQLF6HxuhEkxBA4mtHv5wf74sLb6pw4qY9RmvKdWUG843iaeCqkvmnn4G7Yb",
  "key14": "5FBXJBqRfg6GsV6FDLQULjhrXt2FYDUBm9B7aJ4tGfNJMavptJXWWxzzV34P6MnfkmgcuF1rjyexQkRUCyUZxK6n",
  "key15": "2pq22AHQ6KtMXK331KCSvk722Ri2cznYf53n2nUfYrX7pxnGwroZTiaWhfjg6UxbbvnXESYhh3ni3u7LKp76uyHW",
  "key16": "4gcLf5barhDPADS41oa2Ci1wse9XatWV4ZeuESg55J4GGUzAas7yHJEfJt575wQRkQSYKBwgG9V9wxfVKYW3w3dp",
  "key17": "3NmdjwnH2dazn9wo3KNEqbNLxgQRPPUG7T2ni1i2ccyVHjmC9ktuJurjcZonHgwScLungXCv6f1KSgvXT2hJwr2C",
  "key18": "jffVtwS71gV5ZLgvp3DFjrGfhrLmTcvqxvHPm95DjWwePef2k8uFpePyn4ckS3sX9ja7ToGkZNA3AYNwZjV69Pr",
  "key19": "b2NZCaj3Luy6k845fLTJa8nRgxF9PiW9LE1xAMeDCMqD3ra5qUqVt7pjuuMPhJ4FHbhieBmrnHBo8xQn9hBb4K9",
  "key20": "3LeyQFRwMoiAb28WTeGNRxsH2qgKa1tCXAPx2p4EXouz2F45tMQ1udQFtKjwyGvP1S4BZVLa9sZ8pA7wbvt5bo7k",
  "key21": "EUDNKQwnsDEiTSJchU7ngcNC5rK9fokknQT8MZ6iAiut3g4vNSAgkZ5H4tQDnkyr5cC8rmNiZGXXMh1C4mFMmUZ",
  "key22": "3WGxHJkHNaUrjNhqNCAdG4DqconsU5oYBwtGoAuC61H6c11Kb3kNi1RS7MhnMNJy4M2x4u4bbQeLAntg6n2SH3bK",
  "key23": "5kmrUZvxPgrdPkMsZhHS5VEYvnbvNPua3f1HjDwPwx8ED8gDURsuu91P7figAk94JAqCehStpguS9rSJBjxbSBYf",
  "key24": "4x5EEZJ4yz6f7mcSNQtyGw9gjXKszx3H23Vt9s9qSJuW834y1EQEbASx6yZepjfP6pw6kHyhrD1W5LWmNooo6ruc",
  "key25": "4LDUUgLtFvMYEhxqK2DnkM7mf8aKCM3PwaR6UwbkWR2MpdSfAsp9piyuvH7MabFQApsgB4AX2XkmTcEYzgwWk5eS"
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
