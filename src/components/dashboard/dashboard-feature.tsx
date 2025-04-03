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
    "2YkS87TBysXnDL28QeaXsj7Pn7HLRi2gzZTup3nzFm246M4JBFWtnn4xEcfDB1kUJ3a6PDTReCVU2PJrv7mTr9gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdiKAYGUsU5SvKL7JqejZzGE6jV1PyKFxi1pixMeDGM72QSeCQZAmm8n76GzCrWEE8EmphbvkgNAab3yCJb2S8N",
  "key1": "4uanBi2rrbZLCUBDPgTQKyNtQ23jCdxxZDcWm1W8VjDHEXLCMfFCjiCeuUcAcKrv7WzfGuidx9gSb6retibqKq9R",
  "key2": "4k3LRScntrASc4h8URYRP9gsPDKiHtJ79kRgEQ2xALJK3XyQdDhhozY3pys7oZnDmZUtMHyHxhzLK7YiayqurYnd",
  "key3": "4B8XKaR52vURSrnjHMsdm6r5DbXNWsKi8vfGNPExej6BZ2EYSvVrie9vf4RSWVk4KMw99KvUb11xtsdo16tHS8yA",
  "key4": "4eKWPwRjgeyvegC1UVuFVKND9ChovbsN85UvYQjndYxTZh5YWwz6tBU5d4QCW9LWzDg3frvknfyMT6tAebvauf4o",
  "key5": "413PF1RXuc9rs76NJLPsdhoPAA28JHKSZG8mjuroFABZXmqyd6rJB8ED2ETjs9R3y7Maiakt92qSiXuV23AB3Vzz",
  "key6": "3XvNvkHJXgRbV3dKB3y2xqW4VK9e1YmaR29axvM7sCuvnAGJJ6YkiLUiFLSoVXqhHfaDtZ4oB3vgBpTpjqhpoeDd",
  "key7": "47rMKegDYk4LzXok9HzzaXujG41hq26csafHp2tzR1CUV268S9EWkCZo2nRuTWcfqwU1kHwQmHiF3erPQPtZ6etP",
  "key8": "41MkCuY3epFPn1iSTmnJPoFFYfxUgLunHSKWnJXhCq5zEo6zLENjgHwUxixzx1g6ix5MaG3RZbyMkt42sbMuiDyp",
  "key9": "2NonXTNiR2FCrD8YKoJiMtJMQCY3xxjz1uFSoLXN5SJNvGt1ozHvfYiAcbtuu2M55ej61EKBYg2FBMP2v5VCqRZW",
  "key10": "5bPQWL4bLRf2fpL1HoNTWQMSmcnWLZ6iH919yeMvkPqsqGiT4xkDZAoKhLZZS9aKuPzWU2t9snCt87XRVmQsZYvT",
  "key11": "zKu4jX1kATkKrudBQCgSmnCv7Hp2uu2aUK3eRuwKcwpQhzgMDE8sXmz7KUshzpf32adnwwLDXDD6JPNUnhbPbtQ",
  "key12": "4HPvCXH4SUiKBXTfYsPvZ43Ybn5uNmHAez1BeRsP1C3nuP1eyhCbLRafMmxqsVakfhPAtjZeHrooQxjU1M5wQNrV",
  "key13": "xJqnux1vJgTNa7Vj6M4mpfYyLJMWQZeRFhgVcFq7HHFzoYMgHM5HagDCHkCC44TVTetBB56waanLAi7Jxt3c1Kb",
  "key14": "5PNdBBM4nzBha3uebaNZmKCSoNDWHwer792EN7RawXi9SLSRAk3HCQdemxdiLaxAJfbPguv5hRoGmS8Jy7BafJrW",
  "key15": "cSUMTuJmVR1ReSaE12LkbqJmLxiUcpePr33to5iUjMofXq9bn9ruFbRTxocwDHUxbHSb4gJLqdhCJaDwooAy8dV",
  "key16": "2dUbBXDwz15NW8sqRokWc2oHKEG96e9C1D9mKzdQi7KfShUvmezGG2a12D1nDvz3bjgvhi98zqVJJcgiJ9tgfuFi",
  "key17": "34fzhpKR4GPuambgLmdke5Z72YWZeuGP7wvPu9DuKjyyQR6PY4DX63gUkTTYnFfEMk2W8GdepYhWVVAJfRHJ47BE",
  "key18": "8YJi87zUiaeqJwmGXpP566qcsKMsGYLNaj9dfD5wKMpouguLR7yCqroPsmTzNJRHEvq1g2gyGE1aV629XiNifNd",
  "key19": "4HStiAurQLHkgYfo55t1k7KE2yMoroZe5RvCG9KyXk946qfkmCRF4Pt4BPuQLDbcP8fNJ9K5SkxsBjaxeQ9uD7g5",
  "key20": "a3VMuhHRK1iEZiAtfUqEa9Zp8hrdr2ndPF6QhX1p9HGdh4AWwAKMwcFcwPaRHbrFGNNh5fsSEdW5kKUhZddRahP",
  "key21": "5TX6GcKbavTaPkVJNBNG1pZQSgrRd7aDAEdqVgnyzp4WZVezLUZk3D93X4bW7MzDRnMopDmfDSV5KbBQ8j9fnymN",
  "key22": "Y3HydGYCuahhjrmSRkBV2xz3ofe5DXKkqqqGVZE4eKP13Z3GoE1AjqiqDptc7UC1tACUSxyax8hdrycpaP9eCmj",
  "key23": "hWB4WrbqoknVoFcJK4kyMgpxkEHJZaP5DKpGTwKKrkXoYKXanb5gfTZa5rc9LVVJPNbZgYXPY6qQvpDRqWVGMwv",
  "key24": "n5aDHLuSdPyH3zwhtNUu4695BGq6ZmNnkfTruWje8v7RsL7Brb6gWx8TYpE2D8NXMgj25i43sfbv76n9gHvwCwf",
  "key25": "jY1Lc6Hz81AWQex53mQJDuQa9YFLcDWg6tSFY4rKtEyUWSNTKnAzddTkGfhi8Rkb9Afz4NpVfcysYqYSeVdqKj5",
  "key26": "4t2sddrtnWdn9dEKWpectv8cuLMBKGnSBEm4cmtTTWeXLEfLKcjR6eLg1sBu7fQupQEo96YqxNQshjMzgYbmfv4U",
  "key27": "2RzjcKwZW35DQjQaL7SRxM8STXAGzpsQHZjs2eqMCDo8FVonwgnJu7nk1zA4FysDxwNJX4BgZNC5Qq7g1556pDyQ",
  "key28": "3s7btYDMxnt2XZLn1YYhTbgaY39A3ZNBZvm8R8bwFznm8Ygs555DDySi8zvw3DXv5LF4kzrLJDUMQgSTENoAEAnc",
  "key29": "j6SacUiFdz2RUb1DPY2QERyn6oX4BcrirCmiiWSoS6GTWF6abdxDCZJT3LQBjB9hDA96xda88Krtq7MxPD6hoGq",
  "key30": "56nCceDsZRDvrHWN4ZMkpiePVSzLsqvNMCCmvVmZCh3FPamff2RVBvd8k6KebbzLxyWr1VhGYgXp3yCB23qXv49q",
  "key31": "3uohQei8vxLsWxvqowoTDC28nCn6NKarpSvAaMmKFM546u4q8Qpwx1FFcubngjL6e5TeUAbup1J7pLGxmdcXyxzv"
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
