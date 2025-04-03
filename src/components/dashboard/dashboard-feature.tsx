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
    "2wD7qHTeDngh6ZfSbNrKC1T5KtZaTWiUuWg4HoWUQ95RboHVqZn4oDHphcawS1DybABqwBjwNcV6gbUaNnbVe2Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxAukvVgbPCoACrwTcdTXNyXJWmXqBh9z3pv8YT8qvg5Sw6TTTgHoAfDRYYBZ4ojXvGVo4Aon4TpxJK7MdzvuYP",
  "key1": "48qqMkbiUdKktiQZztVvsKmvkTvAaRhYBtrmtaG3jqXkfEQzBMLLkmSTB8VGa3zb3NiCo8VgPoXfEYd3bgQsT2k3",
  "key2": "2GLdDivRCqKpWRcGwb13nUY8MS6maG9ckV6FReLisLA8cxjEk7Xq1Fw3RGXoPbTteBPSqK9JqYS1aRwoouy7dPAZ",
  "key3": "5QKFRyYtBpkHnypahEVUPj5i15k5tRDtY8bKBipB7HR7xEGSXeL6w63PuYEWm43k9z3zco9BYvocvMNoPwytmLQF",
  "key4": "2BffmhEjU2beyEp6RwHB5zgBP4EqFztK2rjX2FSvDtochguXqsXnTFT4FrtoRTFgyzRqXFvoUmVea94ygBkNcgWG",
  "key5": "5fRGqbH7VJRmxgijD5LQYUe1ovYbD3Lj8YPdt6P5Xixit4RtJJFHdBZaXnw56NUExqVEfRMVstNNyu1XLDgFxf9M",
  "key6": "3R3NivirT55dBgKXZoPLQvPxfd52j5LwAnXQwEsikXBKzek5vv9VHDs3BsZdrzFEezDTVBCSDHuBGDVEBKDABZy8",
  "key7": "26Tw145xAiTGVntvejNnmLv8CVC91jyX81sbk8CYqvwNCpyifpuCYeLDDSHuPjBhzFCtGcHM5hFYWJx2RfRTfXFf",
  "key8": "59PhapvhM5YEYqhqLq9jqtBk14CJ4R5vFcaVfmwdK7ejzAe9nPGtuEVF9RvdZRuw82v5j95Wmg3QeZPz4i9ZtMBx",
  "key9": "5nM8u1rXQpjjad7VJXMBiJwq4nKJJrp6EfEGJdviqGUm7cx5zh8zAMm7d1XKQWTo2JM6Y3PACtY9gtJeh8MFaUS9",
  "key10": "2cXX2ud3pWZymkXcNVz6WMWFJditEFYZvmnRRh8pZQ4cvcsUGSS4EooHjU11K4fXXaHLTERkHPvfXZbanviSNnVp",
  "key11": "3zU9AmCSvjXRsFyoNq7L7ccNPuxzbCyF4PGcjpaT1xBNvqBfY5EPgZzLdZHCtKVWM4gmUXE9cgCC4HZMVq1tnvQo",
  "key12": "4ijZxFN6j8HcTNSkPeMQhX1Foee6fGR4d1RTdRsMDGFVuTAetxLFnxYr27uzNKND5nDMc99D6EmnpTWL7s7VahCJ",
  "key13": "5a3z8qAJTepWYKQCDoaCWyKg45QvHMzWueo8YegVo4MC338eLuZ15y21EjGPp5s6UBvf5HbpzV3xoknyXos3BMKR",
  "key14": "629koUHX3D5GRc7ry2hXBHhz6JJogy288tbViRcW5wd9aQcrrxjDMjg3uY1LeX4WD1MyCd6drZo155PqsSUnCuvt",
  "key15": "5Q1oG1b9nbYDxWHvASqn94HkPg1GDAhQfb7LcBFNYPepdsHGnefANzLU2D3LcfUv4RX1Nb57FrrrBXk8Hjm5XF7Z",
  "key16": "5K8ymv9AP5wLN4EapF9s6kVvNmQ5DGE5ycJjTeGJmH9qXefEzmB6pyCcXZyE12t46sLfX1KFWybZW7ycM4GsPv6z",
  "key17": "52EAXQCwPDA6hHpcoXy8SikRgdPreSNbCQgBcoyCcPBmJicgPesmwsaVHBGboRzyM6tNZa3Jpvr3ezFefiLq7trN",
  "key18": "EG6KfTnmHhCk16Su7nkPgfmGfbYLkSY9ewgzCQUGaLX24XP3DFNQgU5CEvdZDzF7MMYUA33gTD8v93v7ZHUY94p",
  "key19": "4p7556WEGvmdD5nWUsDqmXcDWNGAVfdLR8o3X5HtyVhdEK4ssiPjQbKtuRgy82pZPGXSPYHGBaM4oL4QXd5b9Yqw",
  "key20": "2yEKoCGGadATMoVY3ByURrvaWdeFKkmTNB4aYGCQ7fTyxV7ZjN6TJmSULGzLTZjMxsdqr3oJsXJEsKUM5QzHJ8vv",
  "key21": "qVf57qDXVmqmbQBh6boRiC9VenW5xELGTtVNEKDm9WesF9CU6XQJPt9RWp1DDug7cGfYBB2TgRYPSEJgnpUyhZP",
  "key22": "5FkhMHKcsHyNJkqRw9ADgPze1E5VXw8mivBUUsnMbzJDW2qe7fATNnErvjEjYyPLBVk25aQqpxA3gFzXUfv6iJ6v",
  "key23": "65HxSQgCjG6SQ2bHEPzV79WmxKYyYTCS2kK5P2CyJd3ZhuEYT8rW6xiuLirV468wHZ9r6x2NaZfUdjW29Yca9f5B",
  "key24": "e2tNP4EPeesHszgb8zop8yhPQbkYMh7gku9HRqNwpjrJe3AvXUFxMxafhCob2PdWwnK3TiHPF1J8VDTrU13WuaT"
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
