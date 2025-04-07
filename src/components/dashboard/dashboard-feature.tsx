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
    "3DQtLihSj3vCP269MNTjTKhGNk74gyc6hfLNXTRKE1u7kQG2pPZZDCpvigzmfeJq4oN5gvYdZUnvEef3Y2qkbYvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rDQPVyvo8qdJmUGn5br3D6QXGgo55KBBQPGc9CgW5eiqQtSVzSZTy6ycsvYwGmtSh2fiVwdwcpJCJXScNZidzL",
  "key1": "65aLaFrDpRCTkvaufHB9jz8w79TCpTE2oEnfmFoqUzLfHv98Mhg8b2AfS729eRPGYKcPD7GLqkkUdNCuY6kgGfhz",
  "key2": "P6fpCv1UDUnkEyxVEgjR4Kk7zgnfc1h3SLpEpPwrPTeheA7mmXmfX61pxgmAjBSyMCy3PpbDLNJuG6dcqVnAmUx",
  "key3": "2NGi7XAG3FJ4qy4CPkJmguNoPmkRMRrJtJgasA2cu8kmf638P8b8UtGBnGdMbXuV8u7JT7SPVsCMaGHioGetN4jg",
  "key4": "5bn3vRPBRu6nFxuLvNRhaibmfVAMUq8Vgpkr8RV65VAC6maLmQbcqY66GzPjEyURdxw6dxreYhRJizWeZxbaiYDB",
  "key5": "2vNNVZ1VLErbBosVHCDKyTyHeo2prqEuDeKKv3DyHM4XPb4j2wG8oFb7fyZE9vjMjnZSzqzPKC9HHnTbk8vEaqkF",
  "key6": "5kXmtx47QoCJ9Yjw3wCEHrWuCmKf2DA45zQAAo94rvxFG4vfaPUs1MMv3Vna6z9AC3mpfK4EgXcSTP4haHGqHhmT",
  "key7": "3g5jweUDdEKRn98RtgddxFyhyWBqZT1M6UijQE52TiFX6qVAprWcC6XsBz5WUzJrzQ2dDagSh31vG7V23wi6JqWT",
  "key8": "2LGmRGVyD4B1Bkxifqtc8ZJa1a1V88SvU2nymgoggcae4tTgWZP6NMfZDcpfCjGU7XVR3dskcvUYDEia47rMks3z",
  "key9": "24Jxj98CvUkzYD6xwosdjiNGcMRM918C8qDeVioeTyDgRjEWzJvAkfc4DrmPhxXa7LYNUHrvm5qLhWxhW5aTRsxc",
  "key10": "3bBtkeS1jJEVem75ytdmPBGbJwzS3NQEBoLgDonLSEy7rHmj3kjNimYn3ex2CExqUcY6M4Rwer44okwdRNwkTpgm",
  "key11": "5MBkP4CuZ9ZDuab6xmNW3nkwSrSjvQ6et5WVs853yNxGW12BKgVZ2AZZPzWNFLzm82gqo3Y6vc1nV5kvjVBav5S6",
  "key12": "4UWUmuKNd7mgd8hCi1daBBa2VWa3T5XPwcfp67LboNWd1TpwkSsbqc5w8cv1HLX4MNUbaVWWhud7BuLNNZMzFZzz",
  "key13": "4K7Y8rZ6iZm6dS4wUQPHip4ioSHCMHm5sZDj4wGKZ5mbKgazRTW4tDvgyZ3j5nfwAE1a3FxHdWHsCkDCSdUtKbyx",
  "key14": "4csMUHjU3ckVuAe4aYfR38K2jDGvNXWWyw4Jfpud9H3abU95oaEVrx18Rzv3eSsZ1AAVMz1aYwvXCajKYCwe9s6h",
  "key15": "3rqNVkJaEknyFtkzgDfSmTFqRFzepP49GLwfgYjYcjoxgw82dQ2ySTrJnfasCDRAp4h7dfjxXeWpwX5fJTmVpvdR",
  "key16": "2VEwvU3umuVtNSMjStohpRkoEcXy87xiai2zyQ4gynq5of5ckvr3pzrWAXEhsnAX5zhCcHi77R43qac3yjEHx5FV",
  "key17": "QJSWSXQBkb7NbjydaRE67iASsQvmewBqsUnF8rErDC23hdUbexT9wtQYy3m2LXp5K133k91GWV12fSGzsGx9vov",
  "key18": "3h6A8SVDtYPQFZgFNGUFioSZx1iZVBWtVQHRXMi28avEWMHHCeB72ciGdvLV5RzT95EcGRAzmo3ZT4xLHdGuHTSh",
  "key19": "3tkn1uzpcz43GG4HAYXF4bdtS5M1R18nyHtx2XwUAr92K4q2AhRVa2RqxgUErdEdNPsxsgDJs1TbjpWj4LymmPy9",
  "key20": "k6eNtcr596WsfgHbhvbT6ofPLq7KFTAjZr989n11QrrpXsziFY4hiiuzwuoV7pXkAV2xoiavrwULW1L3RKRfgbd",
  "key21": "36XFNnvKv9XFypFpK1Djr3vz3yj1RisiMvpwRg27hQdaYxkKADmn7HqY9DchtLpRy639uJxr2asBnPEV1oPs7ryM",
  "key22": "4YWXYGnXNXZ5MXuyE7z49cxax54zTHk7FyAWDEPLAD83nXz6wyfrA52sREoMush4gTmPR12JdmTaokr34pnzgvwG",
  "key23": "5NgCNshHcedBoAi78jkFSGCkPvVD9qXRkgYyJH8DXEwpKWmUMB6smpxq8AdYKQDBQGKhC7E8CnJ5mYijPgCs89N1",
  "key24": "5obt4p4G17XQkRYpjEaP63Yn3KS5K2wNy6tQHa2dABZgNnqcwR38JJZpyrwB1BBbuvdbgpWj36M5iUCVJKnc38rD",
  "key25": "Fh4jfgxaeUz2jcnmNoe27Q1AE9or5NGdiKH3i2zifGo8jSmQQqRB1ZVvwArkxUFJHEKCrqT1iD1H2N24XRgTixM",
  "key26": "4UdqzkNYZQwD8BvaxpxFXqWDYZPw1CZ1Hy9sAscZfxZaRLn6UnE8249gCUHvEhPemWdf4TiuSDw97YTWvBp7VYrQ",
  "key27": "2jSzKxzhjWsgtqsAP2GRTA85yDMb8dNuCvuFHXgogaPFURXrx7JtgceeXrhfkVaY9bS6b9xPdX5PymEtjWwYtght",
  "key28": "de9Myb8dWGrffYVNRkoDsvCSsWYXvNhPPbLqqEvw5mk4DS7rmfCPxtyCyqWxVhxbzKqNTadXVk3txJmbc3CDony",
  "key29": "4pWfQumTj4funKn1UWJFPjiGipiWamUKAia53AomS4S7JA1JQS8amRAT6rJ4mDgU9zQSDDfgbXt5qSFuh4HhXpEu",
  "key30": "fne8XPtjnWXMhaiC8qnuTyuydiBBmf22vYqHgVkv8rJk4AT4ytdTax2btRpXhr4r82vkBY8zMCmtP5ereQnznmi",
  "key31": "5FVjXCPQrUC3P5xbzKUo43J5zqDSNHkmf3SK9FvWbKTZdEYomDesnFppeoJeTXisoHUNS9SyG6rv4KJfW4HkHmtW",
  "key32": "3C3qLG4Fzobyfj3xozMZRFnJTAKakT5dUANDHY9i3aWqiTChpL67Th5jt13czXk4zwA6Lvncu5A8sRvBF9Rvdo4v",
  "key33": "52vF3GRnjfPUmThNuz7cKoXsptyy4BxRPxRHXWVegVMjGwzJouaebnAwxvoWqZ8DfP5YzpTq98Q8jJm2WBF9N7sf",
  "key34": "4cFYGUMjb3dL7ZKkivmJX7ivZFJcTw4wLdNHNf2bPwjCUPtSZdRWdjZdm3ueu7KpERyJHF9a5RBgKQRNV3Byd6nG"
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
