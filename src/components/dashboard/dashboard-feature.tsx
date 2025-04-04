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
    "5gg5CSceLVj53oCYymQAJKuqBoaagCLfU6Nt2Uva2XKoG5XwMTJR4xAwHymex9oW8X3a3DXVTrBQw7xHSPcHsYbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrCr26irpEbMSz2r2Jrx71LxcLkTgPvWxnS1Yte3StYD8tXsmYruxvWkuLQfFJu8LncLJzgQF5JJ3suXhnEmJxR",
  "key1": "58UXSDbbprtJ96UnR9aY9zgm8A6y2F4N2Qu86HauZEECMYqCNwG4PNM5RMKeaGfqb2pA2o8hgmzf3UjLvm3kXP4d",
  "key2": "sZAmy6McoAtZdQzJjcF5nxScPGY8LTKHAJFAGxbbZ7QK26eUHyADVCcLGn5W8NTBStSZnkoawCnf2MSfWhXENFa",
  "key3": "UAGKfJHVEAYztwjDCB5rCZnev2pSUg5hox4L9D3TyizcqMuPNDXykkChmdw4MogpRfn7DTNu4rgjmifj8YRz9Yq",
  "key4": "3i6mMk8w7XmYmx2iU3DBMNXT3KWasYRpSNjFNj8PLncNj8tKdbLtfwd8wES8q6AJGL7abUgiGQnzEgKeqjPnZ4gz",
  "key5": "eHQZUdmgRYWB61yHba6uNq3vWCaAGQQdxFjjct9T3ZBYZT8DHCEAQdxPuMLjT5Yh3NEvXrJ5r3ghTHZGRndqrYD",
  "key6": "2DZGC9qUmQJY1Xr5eyJvka5YVWZvWte98Ha8qT4kXBGtfLxTomgccPQcn5f9JZCq7bgbuX3mELo8BG8rFV5LmRMp",
  "key7": "kiyqkcRKH5mLPDx6xKaRvVCtWzJj9iFhZRzzmtyG5eDQKPwcaFtE2fwkWAvJ9m4zXzksECJW49QNj9FqL5ssPe7",
  "key8": "3eEkjGaeeMXfpedwqULMhz3QiSzUKmRarar8tUtfJEJoaiSEe3cA6Ee1KnRB2q3QkeCcPaWoXk6nAJ3xWQoPQF5Q",
  "key9": "pVHgchw42ZY9mLXVswwDahR9piaeyYhLmkaHLqfJnf8s8x73U5GVg5LsfpuNR9y57k1oDtm1YLA2KGvPx1Hxn3U",
  "key10": "w5pZWjfJKfWbjPAjixTTHaVRTLTU9oLqrXZzWFwR3rNMaAfj16JBv266gTv6UAYLDCGSCyejtcCLb3ADNWfENwW",
  "key11": "4RamLYAKtG3eAiho35JzkEMm7DF7KoV3hi61euDDrPJk68qNS1FF34pQqR6EAm26HPasjmirFoYwVbaxT6kK44ka",
  "key12": "2aMVkuk43nZEjtVcW1eByoGVrWVGYW8h7GW6Z3F3LNBTfRD28n797W5McNaDGeahE5HYNJppkRteKaz3dXru4Xrp",
  "key13": "2DKS7huAyznEY7vZ5Pob9ksWiViC3sDF4pxrZgcsXB2Ttkp5ukAszmuryUp9LKu8qWy8nXyd9ciYdqsBsXcEkGYT",
  "key14": "3bHfEFzuSp9mEEdXp8FtVL972MyWSVtaPxs8q8dtbpf5mj1UTKp4X1Hg3xBmJyNpWUgjk5r6tTSogUJQ4VjrBKoT",
  "key15": "2dnrpPCkcizmPy6ZfWrErmwf4pL2xpF26ThxWUEHW2WyVwE8u4GURg4zXpw2d9RepGk1tKutmTuXW2CaT4hXBAGk",
  "key16": "4gtxMVTHYEGXRQEriVw8zWGj4E9QZpUqfddjtAyszh8WC7c5z9VPCVGVrEUr5uFV9apW1kyxGJZmJgV5WZ33Esf2",
  "key17": "p1eJUnQ5C9unLA614h1RJrVwofEJUyjSSjLFseRkF1ghWtZa4n7sAgMMJSFgpewMFgREZdHGwiLWzvEevEgQJLG",
  "key18": "5ecgn6cPyzMTY45yLJYpgp3NEFZLtgSPKbtgYwp258rRJkx1pD9jMVvb69huoo58HzK8YRg9NpH19cW8xVEjReVt",
  "key19": "3Ez7RL3k5bn4nv2hjQMZpRyCcFquv6bFKwgWMaooBUkq8husizcWdMSQziD7MXAbhqtLzN1VqvUkpGG8g6BZMnPE",
  "key20": "2nkPnXXfTZmq7nK4oQ1BYeYSs2psXKx6w4ZfnKJ39TrrE5VQSMYNSG6H7Gmezrrtm9T2kmiPqcJtTmMfBLLA535j",
  "key21": "5jij3e4tfzgmhGv11aXHmpjVyxPk4r19evUTF2TFACNyezVk7KDsvdRTpnUU6MKtYtrM1ePSiD1k4zQtBii1WzZh",
  "key22": "3RTdSyhPyiiDNEvFTFvgREP2LHuDxBAFEAm13RESLrExdDDfhf1yfTZyXbipob93hwuUr8YtRBN7Jgz2txVoMD2r",
  "key23": "2xKQoSj3jXLmBgWcdbZQcNxtpNM4b8sKXz3gcZiw2mw4yEouocRkDVTRikZ7xDEPem1S2hDKt25S9XhH9choZFvc",
  "key24": "46PuxbLv4vqk2w42KQCLu3RbnNmLzx2HmrK9nH9bu1q6DxAbWCAznH13wekcoGwdpT3SCjRrYcwSLVCNnBYqDkee",
  "key25": "5JN2NrMiPKoymFzRxoCJsHAMhLSDhGPpYpWRE3ijsGNqetKqmcRHSxPXAn6uzvfqGn2h5LphhAeF73EYZZF9jd7B",
  "key26": "5a41ZBNotn5wUzroenxefEtQ7oEijFTp9KEuTDwLyJpWmTnhNxWsfXBGs7R4f5JQsm2NNgmbKiDpuxKaAzuqfrKB",
  "key27": "Xf7PF6K9iDy1VQokiuFDsKmcb6ToQpmjvQTcg1QFeyGFHNRoaKZYaTJdgboLqkyC5ii38bXD3HGcvbf95H3fdvY",
  "key28": "4NQyzDHvEMArFNP3MpsA8JRpiyxDVeSuWhVdv7ZhrbuWg1opGECpQvokwVRoWqivyFwgxp21kCzVNdnZoWXC8fji",
  "key29": "22KpRsqHKahZjKZg86asEV6uakxNPYdBLNA1SZ1JfFzQwAx7TUnuE1YmFUnGubPhbQ86AZrf8XGCnMmecj2oiv11",
  "key30": "38xGXJUzduRGK5pz3h1maVA5sWsVytfWzB2Q5D6ekSSSfhqphHj84FkzcSzj41HV9VQpzchepyK5pzpN5bMf1UDC"
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
