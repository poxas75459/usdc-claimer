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
    "68oTGPvQNomgcc1Uw4nJQktoRJWEg53mvYMwUGWdS6fFCMTAGffVYjezfmqBeiv2VxLvj91vCuq6AYYVCTJBoXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545V49CWwvANhGoD34D2QcQ8SMHUA2ww8xcxUXPvGH8ffSyRfF3xRohe3jJbTU6avdtVe57UNUUMECRYhrKVfuGm",
  "key1": "5FtMBorBzZxm8mu3RVLvKo36dYTwEXs1UpdJPzuN7YLUausSRqAkqM6ad83xSZJcqiVQs7KsWUsQnYLSLJSPFhHn",
  "key2": "2X4sxz6vx5me5v6J1bFmUvViH5bpeSvfxSwDqMAMeFcey8hKZLhJDaroq1nPnjyDD43BUh7qi6kJVW46hhDEjtA7",
  "key3": "5Ejic4JZz1wYF9BoY8P2rfLJKioa13udw1U8bmPmYa84VoZbkLBKRENJtEXEL2xT1XkUjTWxuVc1QgfvKQuPDyzY",
  "key4": "2JeVtgPEX4WZxtf8uaUuCceX1be4orf2Vj3TXo4USAUdtQ3Kx4g8v2tcDwWQzKzTohKeeAPBNq47nv16P7jN1iUR",
  "key5": "5XooezddJAZ21JQHFQoaQhq7MDrPk4U6aeoHQjSSH4Y9Taemkds7ZF6kEsD3Fe3ABTZMyZWNELbAp2ZXW4b77eVv",
  "key6": "2n5jaJtUNZuG6K22d7totgjgkAsn4kJJNwazugqBwpzrBQ247mHnAHM7JDxUfFGGZLUzB3VsrWtAgohA3bCczQUg",
  "key7": "4QAxn44Wj2uFH3jKGCswcSNPWy8WKSZAC8f3hs9dLQHnNJGi8GE4KgketNPXxHKDzJntqh2EzHcj8E5NsQPnhBBm",
  "key8": "4776nreLUxJnFyCbYQoXGayEQbrq8BhxMVLYqQXznoLzeWkQnuqnsqxYs9qMdwKjp6WLprcR3HRsfkVNyTyn8Svn",
  "key9": "3qZ3VDAmrgUYn1WVsU4cn5kqg2Nf2WJQsyVbtyVovUq1inmrxzKqB2SUzPqf9Hso45avMRwBZyTnuAycTKexPa5L",
  "key10": "25jxzKWnp8RVa1RwNgr4C52dDMf6uN3tgfQoFSbNaVLTkB33W88Kky8KsGuxBYjWn7UXQNNweW7bjJtgznQs9FBk",
  "key11": "JiTfraXgWcf5TTooWxxuK9VLhei5Z5XMihxUAvLFMxyanxmQtZdDrxKq2LpVgUSJQKjd1XyEQyarctKMcadP4bH",
  "key12": "3BPAfuqZ8TMuVG1yL9qLncCZozjy7XptvVEfQhNzjHcuwL5Pa1smzK5nJDtz5R8hGAPNpCzvDZ13qVVqBEyB7Yzd",
  "key13": "5eRE7zZ7WSChhinLHKGzxosXeoreDraWS6Fm7pBmfQ6cWViV5cWgJLpP9psFZTn1FZhMYVdhyUFoyVcLriPTJsxL",
  "key14": "2c7hcChSK7o7nuqhVVeNdQ6b83pcD22YmWi4hhmWJWSTUAj5EUK1uBjMfNQRq3gqBJWDPHiQhG3rovKPdV4ArArg",
  "key15": "3SX6oT1H1vjbA1drGnzgn89wmT81i4m1gVnAJivHJozqaqEtkNVviGXXCiQ2r5a18nvq1Ug7JfRaW8dUUJ7fBAZj",
  "key16": "5Uj6rKtWRR6nStQCkL8ECqHeqMJH56kJTkRtgHxGLdtvwHntGyEjQTefDfyA8QewUYbvPgsbVn3V9FXs7M51D27z",
  "key17": "2peTRZhTpzW9CTmtWEVmao79iPyUg2QKEdys2TrY6UAy4pbhXXYp2KwnsJbbspsx13cwxNESixRBRJ12Dct86fuP",
  "key18": "43H21gt14Zq4nNV4Nin3kKP7s1ESyqAE4oYhcszE5tX7dqiaLHMe89DaEnjqhNuMyprF3McAcNiFm1d1YXic22q",
  "key19": "4nZFxSEqsQdv55rWdnNwvYsoBsZdJDnXbdcsdV4EBD8ruEpXog1gaWwVPAMA339BtUPaRCfGZkcuRKpvgtyR8qJk",
  "key20": "5nbdGbPK46fcoHtF5AT9NZtkajUPKakscoV2ZqazqXYmXNp1PhchVHjjtAEU8NmrhjXWPpbibuQM3zdnQs8PhWMk",
  "key21": "2P2DMmcNpNwpyqHTZJtdhquuZZCZXCTBmk74HxpVa3f72aiLdG7FrxUqd4XK8LfqPKTGMWuw4Ci8WVspqKGFZ2SJ",
  "key22": "5Dwu1uQVEUjmn691DSfjN5wtRsQX6Ut8GX2feU6nYxMhbEi7YZJRFXgijbEfUAYntEu7y5MGWtvanAdCaBVS35rw",
  "key23": "5e1X6b75g5cHDuTgg87xUfxpz69jKHr34t8bNad1XfDtiNFv1qVB6JRHRcnbvpny87ioSyB1ohK1ejS15GenTzTQ",
  "key24": "hqvHjjmyPiG4jRHGNgyoNKjtX8XSE8mVdbB4uWQvMSHN3AYb7XSRTrX6hUcVcCJFvZsE6mpHNRdxeASQd2NAC1R",
  "key25": "36qs9ZGSGbX5MDYb1zkfQJ1611NkozUHKfo2fqa8azEHWmbvaLQAFqmQAK6yDdMZpkMDKq4zzxZBNFiBUrnvdwjx",
  "key26": "Lv23BDQevSM7LENBTxWuyZ7XDuq5jYx8KbWUr6xiNomRxiyGvWnFqP1DmNGikkaaAD2gP2rp5aL2sUYL3F2arKq",
  "key27": "nmbU1qbmPJpQVcEnX1qrAJfPJDmyoL9NztHzupaWxDyUBWR8DRguN8fSUjLNvVCTQK5PPgb2j9Egxhw7gnndo6z",
  "key28": "neDe65kAdkVMzZGwANFvRR5bhZ9SfRUVSwia4tM9BcXnZTZB4WVg2Brz2TLGViwMa7h7y448zQPpzq87km8WgJg",
  "key29": "KqCkz435RdQBcyH66uEF7NTXz4iXSbRCnNCS5gsuPKPbhuUZm5UnR3Zcs5CVPyN1i6UafXV1MYBsCioFvYPyuJX"
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
