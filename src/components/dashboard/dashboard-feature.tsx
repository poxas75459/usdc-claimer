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
    "j3Dg9EhuELiU4LBPz66zAjGSFPMYiBryh2VuBMTUXE9UKw71bC7jLTjDABwLnaW5PEmmtsnZLCw4YTkV278EQHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r47DzaeRwfV7qHkYNf9uxM4dE4E2g5t1xJU11ZKcN1gx4vnHsX5zkdRx76127Jnzf9USmfZpJNrv4i3Q7YxEp8e",
  "key1": "3a4KZNXRZyfTXo33LNkY2VssFjYdcsLoHLSW5XSnQDWag76b7SDkGXAj3RGaQ3MjK5Sc7YjibERCvZTaRscS2MF3",
  "key2": "3p5PyM4B27yX3HjSSeSxHYEXKwpT2mxr2an8942sdP7nGP66wzEz196dFqa7gwA3HKPkx5yEc39rVCQbVtSpMcgp",
  "key3": "ByQGNVCtFYBG2T7d8jfd9v7FAGpUELkp8Uc66MiP6nEzhvrKoFPPMQVjM2y1Yn7wqR1XfUDqCVnKwhnuZvoRfb4",
  "key4": "65c8k4NfQ1xzTEx9V9Jj6iYpL4u1L2TsXDyfP6zmXat4T7BN6iUxmmTo28cSKHr6dzpq8QTiBrJgSqPZiBk2E267",
  "key5": "3WfYR74LdpqaTGxFen8bSqQgFsqTZkDyNNTcsbSfERJfY5c6mQmxwEtMn4CdL6eTBHsfu7QsZeRvyv3CuHRv3FKC",
  "key6": "UphANPbiZbQFGcrcha6PXd7LLFon1a21c8WhRGocq5FW2GoYytVg8Lz1yidaXTmSir3uhHqE9hievkDZvEmZdPQ",
  "key7": "4EnSfFDTVzSyiPu3tXNfANzdHhtosMEWvs9qM2KXZEBwrJVyu8sGAL85VNXjYQYgqnJsuTmjXeW7TM3F6sHLeKat",
  "key8": "2nHAkDCKfV4Q8nNiQKmuwkTcT7bJJj2LhFAtQgHytHKYtn2nyWcBdQ2NY3KdNg7tb4ama1f8mQBfNLWFGWt73g6c",
  "key9": "2CdvumH9ho9H7FAfjgcZePZc2UuSP6dtSnA7iWfz51dXF1MvmTdBP9iXYhaBomGsb7GTHeKm9os5BC78dVCxs1hp",
  "key10": "3qy1urW9bLCFAwgZZGXKZV1fxDKARJHAVdRAcodvTXVWRwDVnQpncLVhfyZNgBw7uidjneceuYFAvAQGvKLF54qH",
  "key11": "552zpLE62vYSeVwbcezSA2RDerAYy7XERPGDsoEfBBx6Cr3NccEJ6gdpEzV7A4mVrKSx1A26AWM39eqr82k1h8ko",
  "key12": "5u52RhMG437uzzPngNWCzLZYkFZcVrzNKLj22U5smjVJoi1enTvwzWpu47XHBUUX5FpAmXZp88eQJUZroJzz4JgV",
  "key13": "3BoURqdn89WBLQXWRi3xR3CceGMrnm8FrpFtwW85mywhRZHdRizxbM3vsvfspkvGVeGaj8UswwTSqQCMLnT9DY4m",
  "key14": "xeN4q7skTtjJNtnWzHr3gurVsD5DEHMkYckwyD9pb8KoL9dCD2ogF6tx5ZBKRrbqTTxvjy8WMwB4biNuzfhtaGr",
  "key15": "bSgrwy2qxXSfMvR8TFa7hiEU9ncE9vctK41RHvJRhm5jpuwaB184ZTUhNtjJFCtg7gmFXR3kx7cYRk2M1MXFEJt",
  "key16": "44TuRFGNmCyCG6suWaCzSrN3SbtDWazQAiffGeozUqxA4dthGKvxo6AfZzaky9KhpZpMkJpuCp9ZXfGc6rMMZtdg",
  "key17": "3f7Tp5UUDMH7DbTvoGTrnTrQbXbJcwhXAtqHP3bcrS4ddoHWSLhNVFtjiWc94HMZKQDfms8tqMvymNCz6MCUrWka",
  "key18": "2QK2FzYrtUoLLJ5FsJuUpnqSAgBD4zkWoCrJa1mSNnN7JaA1qukHFe8pJUrdjfFqE71XjbC2toox56YJRPr5rDQm",
  "key19": "BTs2pxnSLwKPeyd2JHbHHfjo1kUvz9fdCaEtE9jLGoT6pprgPGzesjSrHVR1YZRGhJYy8dcqpjS89eGAz4qfeM2",
  "key20": "67fFwt83S6D5ZFwB6dxpD7eGLp6qpsvTUPPWTgTwr8zzUmN9N6o5pSbtLzw3QipiucwVLotXgDkfvVkkesVvAxHi",
  "key21": "5BhQgwXMGrkc5yzhjTTe8vFgsmYd1MYRRphapmd7k2hLQF17yGiGjmyffgSGtkt1hyuz3MUCVRsMc2dSb7xTpV3F",
  "key22": "5hQuSirwbDvxNoghtc35wrB6j32nkeJkM8uAb53ue56HjXkgn9pt1Rs15W6UdLiWeT6mcEFKrc9Hrreop4TCrQaW",
  "key23": "4pkJpuPRoauHKfJw35bZkwsgfewhDBBcUtvv6ZBZsujkhg2A4SfzUrjHJUQxfZQ2qVMoDRoZgTSRvxgSuB9Pkf1t",
  "key24": "45vwuvKonRNfcayvL47efjkp3oWjewnmLtEodkxcjpK71K3cPyt8bcoEshXsS84g781HfmnqtYaCjxVYpCZ3SiN4",
  "key25": "635Eutcvsa2okgtKgyMZfW6PKBEz7oDrJx7routbbhPjFVhkNDGXWYCMUcEtWVv9Z36RkRuGE79u2M9awr1TA3Vm",
  "key26": "65Ca2BFsJPSpUmkssJj2qHNkJso9sVhfN6z8twDaqZvj8wCw1r6zvtAeYJg9BG7248yapu4ouDV9QipAKZnHkPzs",
  "key27": "hbGsbTjqJ93Jjv9ZPXev4zRJy9MfQDEgusoju4bSYoWM6AaWAMbd3kb6jy3QiKiMNybxGd6ePH6yL6ayAi77zgz",
  "key28": "4Fjx5jPW4cDVch5kAqfRhMgjJUiySrj4BjXAqiSvrr8wtMeVC8vbr1pwzACCrCBqHrGtC4pJ54Wd8qpUcns8J6Lx",
  "key29": "4oJZHeBrB5fV1TbdfJu9m1gWdmFJkMZKuNdCpe72CAgErqqMDe7i5zMpiwsDKe27rU5PuUCBYAsnKa44rmGhpVrN",
  "key30": "53pLisSumpnt1zNiWHYcfKaZaTKQEcLeuFcELxBhYb3yGwSG3sPHgqQGbpBNp3TbzFAw3J1zUHAtiHnZdn63tGza",
  "key31": "3DZEFK8VUStJ1GdCCd4s9ZaGBWEDsvqr1Tm3GfnyW5j2vTrEiCFQ44V4xMu4mraZunZW1Lxknekur2uoveVHCLB4",
  "key32": "5WCqfwhe9vwDwV8F86yWapj5qe1eC2AZks1hbtZsWLc47Qq3mvk29uCDvNXzQMNkYF1cuCE6UnbfGLFJBZgBpf9a",
  "key33": "5SHY6H7niBPi3pyJS5UYFgTs6jcEKgaZBWnFCck3pNi5yZe4yAfiVeGpg3R9BbKaHie3xZf1Zk1sLJ4JbTFxWdUT"
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
