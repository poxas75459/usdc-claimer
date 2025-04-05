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
    "Cg1dch4iauWQHMDnhT49wUNby7QCuhtFEkjoifWVh1VW8nF3ZZFpJSSzDmGravXVmdZMouLqQR1GMBSL1WXoZSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orhVhXECDsajmCDjR5RxPx6qgjEHK8hEab7sS6j9qQ29W5peMZkEptUn5dBbQTsggqYa2TQs8xbibxe9qZP4SY7",
  "key1": "4nx572pV97xLhztoaMSPeCwK6cNFg5v9FZFrpivDW1wXuW5ojTrAXNKKKKSVjrwpecm3crqdHCiZaYobP7xjZbak",
  "key2": "Udi222h3V7eDHKmVME8S6dCrUqPdvRsJQp2tV82nhUC9BfwJDMuVyZ7ayoE5iQn5i7UAYEWQ3JRuvtHGQcEX1NG",
  "key3": "4L9dDFo2gahx2L3sE8HYocgBeuS6jxxffKZiXmC4ecLqgt1Qw17vDfFgkjigHUYVrB6pEJ4XKtph4akQ3MwGSYwh",
  "key4": "3GHb4ucadxEL7KDUHMbzpz3C4HGCUacSjr2fP7vPeMdecTmnvGUjLYWxapXn2QuXViBDVDTymAxdpJ5MvJ3tgGFy",
  "key5": "5vunr9iWRV6RMRATZg5XeMRJhDCwVYYFzozMBRVCJQ6Dzx1aaY23YLek7LkQJDXu9AxXFCaVv4krwWocY6qcRyyJ",
  "key6": "6D5Fy1otNHJhSbFk2kWUi38p8mH9sFNTsnLqxm25VoD32dMSEyTZ9xZ1LdxN9icjkmy1QyteKtHwW8brag4Z3TP",
  "key7": "5WZ8hG8gCMCTZUaabUgfo7Ss5bg44cRc1Ykom4Fsjda7Z9tbpzasTvGyPYHrTDiGFSa4znrP3J1dDwiK7bucXFoK",
  "key8": "5fUyjh3WejbNVH4pa4z1pLGJ6Akj4YejXe8rMxmspWE4WXuJ8pGP9baKgfd9RnCpTwB9DWB3NgTBt1z9D3pUPU6M",
  "key9": "2fDp2s4zEKTpqyUysf9unZDmwiu69Ee3sfzV4c6VY4XJfMGMtbak2nzwdykABrR5DrSaFvVZsnnY4VMZcv8m56oK",
  "key10": "2RAX7LkKx1KfLQZ9Y9FNRxZcyaYYjk87GesVvzTkrJ63MgG231vbBtm3dji4o5mayyP8pe2e9uZGGocR7PWQMBiG",
  "key11": "46rXrGDKGAaeHr47vj2ePcJwom81LuGGPXhaxfWceKY9ZBtDvTbicG3v5FucKM2yq1vwmXydE54Qr7YH4ERLXXud",
  "key12": "437WuanerUHJpao1uwHGiV37bpXwVHW8Yyj6Q4h6n82FVjEFhT9SYkD5MmMGf2QPUB5ii5hsNkLRZeHXqMBLVuP8",
  "key13": "3Dh5oGigJPCfxL5pVB3ntCWLsA31u6i6ERmin8Z1xsRci4ZywJkKvJCEHShr6Q2zbBMwGjjTUSnUENupASJWeDL2",
  "key14": "5VJhBmzpkcztWGtFHvvZvYq4ay1QZDznah7MRC3eNNiCX9oaxJnjxiFq1WQdarKpiHgYnRdxrvSm5nXjsvSs51Kj",
  "key15": "4M7mhc7qUFawpV54LGbFj7BtGiXJH6DJTa2eWm34jNxqfsCGmxT7GqgZFZ3MxYtvb13vZ52RhzkxZcjjPdFXV6vF",
  "key16": "3vpxb3GK2VuUhakJvCBBWaa2wTEZg7chpxuVKBbvkuLeANfHgwFiEm5XmeNj7HXYhUJrncidJJeWg3erpzvvtu8L",
  "key17": "122m7L5GdXWvf4v6xy7GmBgyYsZ5JDnLVYSEC41ET2Nh9TtH7cStivcT4PXtYijk3qVqVMKmzxXnPscM5ewoSXki",
  "key18": "4XsvJg7X2p4A21B9db4aorjG2Jnw5X3aTvRUYGr9e4QrbEoLPQUutMku9JiFKJFzat8pHdU1z1h529nHe5F4akX7",
  "key19": "2bEjmL17VTscuVU35oZYHY1avKziwsjcrB3qGTxNBzKwesT55uc67YmR6LMZDHSVgxrK7itj8nRecLT4kLJQDTHf",
  "key20": "3zd83JtFpPskxD3Xo6gmDQEFm5hy2ye9fMp5cjTPdsj3UJN51UbdwgmtEQ7pdR8dJXoF374dTuH4wDB4juPT9K3f",
  "key21": "62F9XUoLapTw4SzAriRv3ZEaLNMDQwtR9crWtkKBXmtTLggx3WczLseR58v3fek9Drzkd4SSjbUy3GDMJ4Zv7Yo9",
  "key22": "4exYU2QE43GPcAgRyVVPmptN9SobcgZibH7JkbCyVGLrP3hPeih9Crr5mfjpimgfLVq9Qy4HHyNRcMwdi7BUz75Y",
  "key23": "2BtB5QdijDD37T7KQkeughe25ZxH6R2d7UvMremE8aKNyrtuP9fjKA298UMzFYwvWFFtt4S7p9pqJ2Kxp3oc99Ac",
  "key24": "4r8ZSwkJFA22tTGKysjo68yWfe5TQkk6W1fgfS7vkGCgfkafvUCsrW7NN8jYG1iCD7xNai7EqqpXmu9rb7U27Mxc",
  "key25": "2kaGWys6cqhu5fVNodHbmpkWHmLDVDvyeuH2wz4oNZLfvyQSzSGcmEJJq1iaCzFnD5u9EhajVUhQR1RTfj8zSZsb",
  "key26": "3ci2ZnMzu5SNRHRz5Wp7NwkTpDyPc6ZggxmujNxVXhpAyvKBLxuzrfJCpFzUtnayJXQ7CeivFQUCX1nhtKA4pYPG"
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
