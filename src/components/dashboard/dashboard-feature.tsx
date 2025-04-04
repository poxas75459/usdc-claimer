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
    "64zNhMnRa8eE8QSXCN47d2Djkeft7kjgZ28NtnVveHRpWcsaA3vzd18Xk2FJT6GknEEqVpxUG5Lmj2kD7VKrioqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dtmBuuK1PL9zqnskYqrDHt8KZJDDmqgD5KDD6kwMGSR1AfK3wFb5eYBPHotQ29JVWN2UUWGTK8hkmhd6153SHH8",
  "key1": "5TUuMyAt7j1u7MPVK5sQeJY6ivKik7a6qLazV2vVUfnXMifcHAUcgbKHymxtnedXzZHRM4JvzfcY63i3z9crkpgR",
  "key2": "4DTN1RX3REcm7qmd7FGMwSDLRGwjSmLxhotjffBMprDRU4vzMLuwrNpbCcjwGyJUmH84qvRqAMoeQiZFVmVNuszf",
  "key3": "2dP7heTjZ11NbxJFsJ7X5D4rQCiSXVuxc8tvYrzFbp1Gq3vjyreDYjyPhikbVpbbp4jkthgRk8fLs1GUR3DSaU7i",
  "key4": "25vSUafsgG2P4icwCYY65413vXWUDHY1ybyWu1dmK2Wa9F8hdUFMi6vEzP16oADM18N5fwq2GA1749XNXRMGSWMp",
  "key5": "3CHPQDHfqVgQ1GUZb4ddJ2yxZUWJFL7Gnqh3HoiEm8JocT9TxBsbTfgxQdk25pzmMVUKhRzPtdjp7Ep1qi4ZsLHf",
  "key6": "YWThv2nxhRBosfNQMAdmtXdZHS53FWs28wxfvyMV6ACe4tFRZ8Po4o2RwG4nYn8o6AMU7xsMqAumMQSZ5LVhmVB",
  "key7": "5Lo6S7kAkrvNmDQTbPfE5saa4J2wfjBQQRtMpUyY5D9BjfVzj4ZoSBb4r3yf5mUGUFYkau7ZetwQ4UYBKaN6RifV",
  "key8": "2fL9wowYApQa7rkekG8s8GsRpfFDafHsyX2XUPZPXFBwiVf76ngcEg6Q9m6oNqhZLLtmnzUNtvxq3P2ewAci8LiR",
  "key9": "2FyN9ztRGqAqtBnAFgybz2166JhDhH4yFv5n2TWcQcNCCKBD1Q9Xrddb629oGjaBmHaSiYtbAs4kC1bMH8n7VVFZ",
  "key10": "2YbZkbyYT22LBUfuyJhpkadoGfZcP3HRQXnHgX2xkTKjhCgvjuJw8kzDtmVgNdLbSnk9vyzqw8wZE4KVz9duPCjL",
  "key11": "2UqQFmfDu1BM8wEEb7G78HfxNWLWxgqHyaCB4n2gye9zYmem3yx7X4SzHCzkapd89tnkYquQE4h2e9AAjQVa7Fai",
  "key12": "5ZHn9BG3hBnvGsn9gBaqox4rGJE3hd3XjWAVJ7ij83rAFaafS5rirJFGEZKnDAguNkwXoXVT36jxcP6AL4K6LEsZ",
  "key13": "3tXVT1oUfkgVoJcKcJ75p6LDUiHuiKtrES8d8vwVEoeZ4xDrFVPa16UnrvTAtfUtgqqPRT9NeZA5Zp9W9NbkG6k4",
  "key14": "2HpLwafemNn2X8LZ1vtx6uxZaMGaMvZvMiDSsXE9f9eUtzAvSKPsL57dF4Nr1H8TKuckA7Q2hWf1W8HfzFYawRbT",
  "key15": "4xEkvCYhpi4ydBZtJuLf1fc439qDihyWJwQazSTUKnt9maZVcPnpPnPtjxvStdPvBBUquhqriHiKkhxwuYU8No1J",
  "key16": "5TpXeQUn6FzDS8u8qjjcwEAFgeSA3VwevoizADLXqRKqC4PjhdzjK3qnqFpF7VLCZwcBe9h65nKhDvHPFMuvVEwM",
  "key17": "AKwBogoNbSMv2hXTRtDNv9QDt3ad8FFEdjrtAm8Gne4SymmjMsSfxALrXaXbkak1CUpQVYXnMy5TQJQTCExesM5",
  "key18": "4am6mkvxnsAGhganL3h5t48YbmxxgtNY4EZVXuVNXTkXstibuPLoJFpMWDwU62DERrVuqS5n1avBF5tmN1QshMuQ",
  "key19": "fqL4EsJpGvHCvqfKdmGt45W5EGJnCetaFmbUaKTJ18zHYiHFKj3un1CQbV6wmNK47FUDgc63M4SSHRiXok711Em",
  "key20": "26TBRNNbeoSMTJMUwsWEj7wrGKxaiwUnQSusr81obgCQtDezxPi5sFTM76bRBASZ49diZFbQqGsQgCpAAWrrBCPp",
  "key21": "4CMvomfj8eY2AVcb2QcMNYVAfVVqPYmR7VTiYtUAVStFFYttgbfbHQVGPXEBSxvnedikKT9M1hsgJfZj818syoWz",
  "key22": "2rauBsBshNw459tcHgJ5aAgGe9RAKa3nmSiCJkeiHFFgd22m9vFM5pMPQ8dcBp2ztcEmMzB74tbJMdQE1nJemf7i",
  "key23": "3PsMgeP3h7m8ujYQUEUa2n83JT4jNAtpsQNboxRPAb5k9pVHWZa4HapbBV8agoUD49txiAZiJcPDSRnu6KLAjANv",
  "key24": "tWmpDcKVMQV7BKG1ypqYNA2DPHM4rFXY7B5JMC5HBuSzDpCDTiRbYymcLgJMw5WumMVjrf16isfFJeKYYCPW8n6",
  "key25": "5UN91EgYEH1KCq9aDFAmrbRGpyNi9148s2A9eEVkCqFbaj7Jy4YBGFxdTBxshhcwM9ejRWpb1D8MhiytXGgaRgPK",
  "key26": "26618cyvcP7GxdmAAsRhn5NMayA84TxMFhFiws7VPMoQCDyZWgZKhhktAiXNSswt3xFsKCn3euUN7KJtmTycJRd6",
  "key27": "4ArZsX6bHKZsTxU1JZm8AU4tcERMmEavF498z18Axc6nXwenaAd16ajsa2zJD4ArkanBKQqyCFvuBurWqZZZgtMM",
  "key28": "5QaWscPaf7NXbgFdg6koogw2TyZjsJ46kWt8GVcSq5jTEHGkiDAJBkuyDfaeVTDf8BVezHzGfTPwPUXVD1a1uTyp"
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
