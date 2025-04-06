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
    "5Zt7bvKVPQ3MTBChqRNtUgoy1o4k7N6B2kQxYdN7Hu3WxQQTdhehitbeTX4RY3GceKL3zsiRchBnYzXD77EPvmxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64zwmAQ8giamCoK2XLc8gasbfhWQRmBD9yPXRih2o1uSBtzD7NjJHNGG16ydfSwEVz3QhEQLF8BRP3V469zmwkt2",
  "key1": "2eJbpeVgfA1e1wJSo4HirjdTiaYVB2wQTAJJLAtqceFezJpn74GsQmi7zh7W23bdksuShRyhnRKyqLS8oRb4aLVc",
  "key2": "9yQ1WfKqE6LjuhA5ANrDSzmo8BG4YTyrce9yUUDPgGfKL8NjzNXVqDybWtzjHd8xpiPhDHaAaMeiMoRxKDg3hYA",
  "key3": "46adTERJweLGJN1N5rWbPhbZTf7mfSVrN38eEthbqsWBpht5BQ8k8MqeJJXMCHTymj9QPwJf8bnN5sXtSZu5Ho59",
  "key4": "3hFXeiWGdCb8jdHndo6CWr9YjHcrL1o1KZXQtj33DB8CXntiuYwxQXUPAgwGEivr7EbGzouwgq8613hKsGW5xztC",
  "key5": "4i9344ukBX5zGRC7DbxDv7BpcTZhDa2bagMDxUyXfBqBjqf4YvczPzTHytpjzatQnDNGkYayZVbM46z1KXe5aNne",
  "key6": "3gjmuWp5uaFazrL4sK2EdKrew9VdGd2chTHKV49MXP6HUYBpf7AWKKbnjZvAtYnrgSxEM3zVjpnUfdYnBzEmEFAK",
  "key7": "bHjnT5AYZrEffznXRbXzTLcTW7HSNNmx9yaZQ6MSkaWjoWFM6EY2Srx1yNeb683SfwCb8L55LsWBER3JrXX5eB6",
  "key8": "2CVyBFEi4tRc7xWvxQakd9kJE6vgHX8hkU8qCVSr3oiH8kisgK2jsdne8jKMvZDvwoaBDqBW5cMGpsKZYbRNkEp1",
  "key9": "Zfag385cW9pfvNEN5MgYtpHKn38NBR72g6SKdPVQ7wTPDm8pcekKerp4cfPUdjQxL42qEHof5zpqZE9E4WBvzfG",
  "key10": "3sqXrXevokmsKHm3t1ho7yDaKyK72xYAUtosEMvkN6VHjTiyVJaobJYcDtXNaezXuheyqhTr7urPX1eJ2Hh7azPb",
  "key11": "4j5Anufx2FaLdvY3X33utM57bYeySsWb5UpdWXBGbuciJnoPTo3HQJoRsJjwTrhomqjttHYCerdrYfHPmbAEmyXq",
  "key12": "1SeJAYtsS75XzeY5qxm5thQbMPy5BcmXnDtxPWi4KaJn4GFj7ecet5C16gfXwitZYDKTMVfSvFkwrB54py6mP35",
  "key13": "62uN4EBDfJa3v6gwb2KtUSLARedbTLo5fscoLpJQ7bXtWuNT9hByeq6kru814akHe5BsgYyCAHwgtqebtipmsCZ4",
  "key14": "3oRSqjcHu3qtVApmLGMvMZjo7fHyjfMjjDRfrSwxh3pXdgDmT7zEtcanUoqo3htcLk4CdF7NYQk7Rq4xPAojbe97",
  "key15": "3FbiHmUcT9dJRtzVQrbzWFHpm8TZoPWFFzGCStWk6iQP3CVxwJ979s1z31ziYgU3kwiHwtzZaBXWKonJ9ijb8dGL",
  "key16": "4knoDrLysgBatWPSa3oDRAGyETxLncbdZgMmCGzDkx1phqApZtbFKrMufiTULBmZvzxTHfkxyua9VrH5EHnq26TK",
  "key17": "7GAcr3bcr6zf5BNvygXoZ9DpN6oBWH7rrsFTLjyinWXyn56VebYwbFzXgbhvuaNkodzBc5DYhSFK4Xk5mBH51si",
  "key18": "4sigKgCiSqeqZshMWkxRYg2Fz989QY3UgUmHHka8uGTewqo7fPXJvsjvecHpCy6kh5kCUym4tCuKs991AXDa2K3V",
  "key19": "3Dua16tsPuTWDdTRWpnreBCe2aPYgmPQUmmyPpRXatdk9yjpa7ZstETTJiGQpdzEmSQWzrV9rpBQrrxV9EQ38V5J",
  "key20": "fMD8FXqabMCgeDp51ZYjCr2hQ5jbrKsfSjS6oBLGFC4nofHs6Pgjr586PEvk99qzB4p7jQm2DMS1AjhA5VCVma6",
  "key21": "22kZ6PfpGznuFWPhaJqkF36fgfJMzqcJsu19jPKPVrS5HRK4Muka386SdjBEMnYircLugAMcdz16CXa3XqgEJtu6",
  "key22": "2h4pqcW87NPymzdCzx187gfHTSbDMSunYk487qKLHxoc2oq4V7aYinnJK1vo8VYGUVVcz4DyJeSdLvBaPJnb4CC4",
  "key23": "4w8F1x6T92mE3cAdoVgZJxPw1f3aEzj2UfqSv8cWveRW7uh9bfZiw3jw3UkRBukkotS1Qokh1r3aEjEYS2NZbuof",
  "key24": "2wGjNejJvBLvR7WAT34rLNS6eUWDgaFqKfqh2b9nRm6oqS83CRbtUhAv8EpmuQsZaZxnHJwY1hFgmudMgz6kjknm",
  "key25": "2By7vZySnqH8xR1ikoizABvQc8gmcXD8pMPL2zSWfL4BUyKo2GdS5cCytAKzaepcijHysoPh5Aaq8WzhCyGQo3VR",
  "key26": "zmhTH8P7An24EgRyoVre7d1EQfNfdqPQL9KBgWKBLYYhNELTuyfLYFkgjR3kzk4xU3obthdpPpDRhqET6UiVBpY",
  "key27": "3foUdafS5ns4x4oUm7cjM2hhTwrrTp5B2NYqk94GhdTnvPL7M6ar6eVW2b4wkjGKZ29idSA8bQy2rTVuL8u5Y369"
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
