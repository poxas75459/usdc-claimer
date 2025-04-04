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
    "3zKi6nAXwd7x6udm6f9bxgKNq41wKop2q1qea4P55JcVu9RBS7BUKKr78kw1us62Ntww4nZx2fJwUZb8ZexW3f4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2YhC7GqVXfDqMaQNRxik9QWSSW7cs7YNEKdDdmRwdg8ymezhPWcZTr5q5QcTr7NGFDe3EfTM9aPyPvdX76HAAa",
  "key1": "rbgt5mf71La4pUEpELtDqRCH7VTAHG2zVTkecfMKJMiBYAusamNF9xh13iQwp6BkD5UNSXsdkbVxnJgDP9yBh6V",
  "key2": "2V4GdXMAvMwnAdN7kWLTrGJcc5asGwPmkz9MksGsqhFVbf2kpksQ5DLHY3v7hQSLjw6FvE3XHoNcJi84BKQVuYDd",
  "key3": "BEHuuDxTnX5kLQDQ1ahGA9J8XAYGS6rxb26RPspNWj4gv1d8uoZa1ZTqTPNdG1DGDPBFDqhbtBWPJfQAm4ZGFkb",
  "key4": "5gJpZGPaY6su1KiyJnq2gLtUYCD24yBpFY5yuNgitvm5n2DUWYLDqgHAS2qdmzynkh7yh8fJLkh2mmDV3r9iomZH",
  "key5": "Np8ZuX7cfDw4uu9e1wsGvxhgZD8pabfSHNZ9XetSAFevKLxPtXNa3p9KkbdD1XdDw4fuaCggbjqPriZv8snS5ma",
  "key6": "5U8oCjbaM4kK9zscxDrgnhFKnaNx6wAL9wjFiNQrRWSbfDNn3eYfsAdhqWfxMhhQamfEdc9JhUGC4hDtJ4tKM4Xg",
  "key7": "JuW65tpKWQtMKHWp2QxDGgZPurHxShdBaiHT2xKrDB7bChaofZeXaLXgv3DPhSQbrTxC8eqxDH9BgR3dNXavJHK",
  "key8": "3GdcHmPmRHe88Gkhk1Kp5BA6HX1sCWKBU9YUnsfS3CcccLwjRd9eqGmysMpmKWtSL6q1X6PPyu45TzRPU3Dr7cdn",
  "key9": "minPqbwjCptx7DvCovS65pqcTuwMBeVvU2rFmJfG3kbh61nyhd5rQWtLFpFwLWHAxEVknxrA4n34SfdSFYeF78p",
  "key10": "3fnLrW389Mr39LzRfYxBRMT25Nt6dwmTj1Yd9uG3iBvxBg1UwEWPKUNhpHVXw3PdB2sf2bTFSdgHdPazMgXx7Dpf",
  "key11": "toVMdDVxawDA1yDsEQVH1jztEM1PgX36qt5LAkb6F9i8baJoWrqnGMwoNpdYerR2j6XugUh7SenfzmdQMktqdEm",
  "key12": "2iChqoT4aJjZC64HgTQqWHGhsJhpaD7pN9xM8RAMdwQYTUt5jkiaxARpdbvn99SeL5tqpiLkecs18gBGHYi16u6M",
  "key13": "5ShnFNwFBUjJSgpxjWtgc1AFaocdum9GZRBuKBU91TBtDzum6RdHhCiXvGwdStcBUBLZJCmp19J9eHjeJsgpVvPD",
  "key14": "4dKK8DdW75JtxB3GAA7cNR71XWyKhwAWWuAz3HVpS95pFbHPjzsjuYZUCUxnMYSvtGF6KDPM81TXDefuUpGCp5Lz",
  "key15": "5Vb132UFZC3vYqRzHxEMGUpD6AqK6iEYGecrowSnvVc1TepftCQzZYDds3rUxBrf16R3LfLzv5CBSyF2XDJnxa4j",
  "key16": "5NZKTxhBSJaeZKWsh4HxRuYXuvmw4LBDJZPNabEXn1H1DBNtXzPKnyiAYVRTFiytcr6ya4rskKY14TzQgXwbEZmC",
  "key17": "5HebB4fetHZja4MasWEhd5fBqW1SFdEddeLk4ofuZn7bi3DYzGBeWNccdpyUm59cHfhKRxnHmTbt57JWXAvFEd6R",
  "key18": "5bwSkgxwoYjRnkVPGDhDj3fZEnQasLpJ4XumVmXY7pdmNxJt8wvmFW31TFaHrafFUof22wp9z29o6qbKpa7pF7MY",
  "key19": "2HZRWNqbMbYjE969z4ty5PDK9aQcF7STg9KjFXbLLNujaKtusqzTAv84guHTQps1DSUdosd7CeqjacKrUvY4fUrV",
  "key20": "4BaeqgSBaDHdZdUr4hHvrk1FzE6BUxbiEuFm2aJTUyCQDnq43KFGQ372pbP3yyo576wyr7k4mzAJPoP5UQjMgfxj",
  "key21": "2DiKuck3B6a959CtTYbYe5XVxC2jNkaPxmeGg8aZudCuN8bsMdR3ZLg55SzRkqFLWGMrswL7EWgtNWSwDvSaxSth",
  "key22": "2cVj7QAeABwx6raqsMjFgY9pzknBcgebW2XchyV3BoXZG668sExzsEVG3tVyFkmUday5wpVRyu2TJmXcPBXAhbAB",
  "key23": "2tsMD1aoK3AmaRjFcJkAnJNLyaw1dhG1uYzzqSHoA3KCSrgb2evUrFeKwKhVaDbcEGizuajJAkyQKQx458epDAB6",
  "key24": "3ZpPj9pn3euwefaaZpDPBiE3KL5yoGFN4GRC3wdFskDhdKbZ1oU8qvvY5KnnSSXf4EKPSyCpSD41Npe7Rw2ahTDr",
  "key25": "3ejTbAs7CyLFMTXKvXgsubPKiMd4soQsfZu9krkd64JFb2XzeFSjznmdhUTr93ohX9ZR1TCCUevwj17TQwHGYgnX",
  "key26": "4xbZGoLQabHGDbfGtV2R2cCopu9FEPzEXN749tTbvXNWDfEbDN3WrxAJ9JtkX3eeiyRivHFfqRc2U1g8o3K5DfPu",
  "key27": "5dNQZwChnvqmTqxT7Mw8XK4rjqHMFWsNuopd8moM4DM8UeFH13MkKdbeZCkKx2ZFhA7jAJjueQTszFFywjcM4CjR",
  "key28": "ux6iJCKpUXJz5bPaSGD9vzjsZhsFqKgdRB7XPbwanN83vganyqrbnDzbZ5X1PjkMuUPPzpLva42mQtTLx8gjNfC"
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
