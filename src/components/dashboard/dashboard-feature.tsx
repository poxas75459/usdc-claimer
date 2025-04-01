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
    "3jRF5qPACRU3NfjCMzDFWwqyE2sXnujrJbssGY1fviJtNQG6hXzvDpS6X4CiUDcpyeKnvqrscV98WRs4hTWickEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4U9qqsTvmGi4wVzk1rzizN8QUsfk83TLxgUeRuZTDN6WVLZLHqtPyUuKGC7TFLLwjjdCURGuMgLRakGxBw8vqV",
  "key1": "65fpMDBrkfAaCLJZk5ndnpMv5jSRGZeptL6k7ktrisP2xd8tftG3JBjQ2tmFiZD3wjE4pVNmz4V3YrSstSXaStoq",
  "key2": "4sPCfDzzGnnNmEyYHoL1C9mrVG6opp11Pv4STWCJ3ethyMi6a1HVKnqqTZPRsFQY9a5VgFtFSy7Fp1MChkdprodG",
  "key3": "GEPDfbpkZWMqiV47noCcibnUuD2d3QTdSYiJPLmQAjpovs99QchChTtE5E6kNHNhjjbDtkWdmmFLSt4K9kjfbVA",
  "key4": "2TQiGr1Bvb5GvWJtrv2GNfL31XK3aZutgnCpbBWUkgAbWyct5s8kbMWn69X6kbqufa3PVTnN3J1xy8XRRD3X92jw",
  "key5": "y61omun5CEi5JvUJHBzCqULLB4uh3PgDrZNa5aQ9r3AYc4SqGM3pyXXnxpYVTjjQuD5iEvkgd5dgfJnrx6itCer",
  "key6": "4fdwCFho8x5q6VaGwzVthtWfPW6aAuVirncLWEygw1ZWfTNervDEntttLZCAQhtKYWNfFzg59uvECN31E4wDPRiE",
  "key7": "gWmAR4JJp6mUYAenBTyGgZJx2xiH21WsvGpNs5JtjDxKBwPyix1djbgDm9BZ3G2eyFYtKhhaw2urPparB5hZkk7",
  "key8": "57fKxw4bV89nmDcfFjEbhCj61L3p7ixcakTaSp5p7hS1sECfJEpcgj4EEL2iVkbDtLWeWtVzoB8jUAT194xXajtW",
  "key9": "3e2GBTct6virBRArS1bg1tg78yFN6vXUNrUVCbfzB8WoPfn495h4MbH8Sm6ddVsmknYUQc5VqAnG73ezh3ZuaihQ",
  "key10": "4BdCYPojDpnSgDsaBfsVLf2nEi3D9ksU8RXzc6a4dhkZ5ULpTPPrk1z8VHzUJFES9zhGfGDX3m6ViksAe5im1ZBL",
  "key11": "2vDVXUTpozu5MtxyydUbVmk2g2USWSriAmDBBtk9yLaGdf7WU9f5Gseb8h6cQXFRtp4ggkW12ZtQbwBV4YEvUXXq",
  "key12": "4398kwcXrLZJYgo5KkrbugEnisUS6ECq8t9uBiePUYk5sF7A1kFyNXB5akaXytEtPN9pCYPLzWXyYAjXKSk8ukgP",
  "key13": "22LULExTMWEP5c17GNDaukTyzugrTtD2ixqUTjtAijvrLkntGqGow6xoXGMbXrqRiSXTQpbAtpgQ6cjW8epNsAi3",
  "key14": "4U9Q3Q9xmsPwYwZsYWsevG4oPLSDNGPHm4t65731Xsep816nh52gNA19DRViaXudiGZLoQjXpULkor1kcahkCAkQ",
  "key15": "f9pVcomkFsUx3tGsyCegDqHKBpf7xG4mbsu16R1QFcvDki4cxyMisSSwbJZSXcJovmpc6f1PBzZTZmuFSgypL7t",
  "key16": "5WmZiHHSLugK59kS2Ja1vbMt2NZbGtPUeiFeyNskekbP2r1RR99Wx1S5g6zV2GPb4EJzoP9s9NDHWp77iuCVFDmK",
  "key17": "3ude8FdhQn6ty585Ye2QFf1xkwq42CW3HdzqBo2Q4iiNcvC4aaHrJykjhhxa9bDG9kHU4bKjHbfokESmcQ94GhGg",
  "key18": "2qiuQGWYaibt242nFkndqPgupH3YaJ54u37j7XRVeeayr1TTYzGvZSUeFTpN66vHMJfx8EKSgiF4sDwS5TqVFQbh",
  "key19": "3Nf2pCG3eM7159y3tSHkEDecCxNDiRkBUTKf68d1pc63mF3mukPQDLKKmKEXCebgxn4s7udfjYLcMupU4sZFvRGS",
  "key20": "3LmvwopF3p9hp1USQ3wRk2fW76t3RG6zWTH2icvBPMyMvSeVgLXHyUgLEgz6QbXTpvQsgDsmVQbWwbUBkcyHpA7B",
  "key21": "rGQRqypXjysgBabcFQEuw1wDe9zrn7Y5WyeobvMGNmBgb8DXsjk846yN4U2zsa3EWazA2UQtBDveucCNn2JmNoX",
  "key22": "4qo4WPYH5Rbi4xMDqh2gWapCprFTnp8UquoUfTfwxs3BSJVvai7HbZYers1wCcJvFnPeysFtwxP39yNdbr2XiQj",
  "key23": "JoNpsDJit2dP8Ebv46iiqdsJPhHUp37Yg54ayVtcCMy6i9gkrx6UrxAkaNdDuUbj9gzPSRSefiBaZeX34UPR25H",
  "key24": "2tgX4s6x9GfLoyFgt2rm7vfzbiy6h4AkD7rz6imqQTYoD9qUnTsuXHCau4nRcRQ6FQJXrvTB2775aWvtMm12eTHu",
  "key25": "5mV4L37WEazpkHApNDv3GxeavcP3Ldj9Rx86kx8pjT52rCncMxiZws3PzZuzLDn9FodzDtJEaJfKcRHz5MYrMvwx"
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
