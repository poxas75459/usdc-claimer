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
    "2YfjVsg5aiQbQ4eXSm43sUiAJ2Zv3DUxJnK9X9QZ4c4d94jER23bEvEEak91SSdzRSpagELUGhbdihpM1hj9Tfk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWmaLXoTYsnBwc9FvBE1zRLrdBVVVFqyjg4vNWUVN9wcynnvbcj1BB1AhB1tgAPgPF9Nra54hSrdBifxMe1M6DU",
  "key1": "4nGfUuQh2vZDQ6u89mzynz1vaihjDbLV1JvKQ8FNa6dEFopNB5TtMw1wGskCuR2iWf6wpBiK6juh6iL546fbNBxx",
  "key2": "4sqz89F7QxkcJbx42MtuByLTBsttLizYRe6JyedRCAnisWk1esFSQMfnFQfFhDkjHMJZERgweE2f9R8ZwDWiSHjA",
  "key3": "4qfGvr7oWGVjxDYjefE9SgHbSNAzZRh2WD3GnfmMQkGpbB8cBYUbFr7Bps6kBm4t2uNzTCEwv57DxUNyig7WM982",
  "key4": "4BQg3zUVQisRci2tVczV27o4bS2CYeqth9S16qXHJCLgHh69F3sJq8MzJD2A2UV7NtT84gHkhGMuXG5VLDrfrXkH",
  "key5": "5uVCpTdeHbvPFtsTnG5iD2K5orYbXcBR7jvQz9vUUJ3CtbZ4rp9opy9hdvbdqSQBUQz6ZrTmDv3e7mUf7Rc9Kgvn",
  "key6": "2MwAAEQujSnGwmpEqsyQBe6NRHPLDLPqWq7eDj4od83xtNRxSGd1EQCr5k19Aqv6DyLhYB7hG1wnD8jGtNCGcBpq",
  "key7": "3MZkLNyvDjZnfGWDMHq4qBSYDgbwWX2vg2f5fCtW3CZ2J6koA4DQQ6TRdz8y3WhLupLALgmLhwF3tiZTSzGhKzJ5",
  "key8": "2XLrik1rkY8MQYZbRUjDpkBgf6C1VSXjQNQ9h6kKwAJsUcMGADdu8G43Ni9zg2Fnams7xpRB8UMitTkunAqSsaCm",
  "key9": "2dhzmsjRrgQAE5HZ7QFZWYcsfGdnbZLGS2Roy9QZNYECjQEXJR7skS5HZBJYuVmKv6SQnqhvgxjLYDDHdRsJxCJN",
  "key10": "5SikHBrJzHbudWw1HHy2xCMmkk1rvDWLy9dEZJCbknBAYM2TbbE3qnZ76BZVwsVEhvZ8b8hSaUe2y1yig2sxK3HQ",
  "key11": "wcjwd7avmH6zNMgiLwadj6gQck9ToWL7e7VjGu6jmdsYsVUmv4BDwJVcZ66AtnPfTQspEVYb3hNS8mo3hXsjG32",
  "key12": "hW7DhfoxL84YjWufiVUqV32yMWHg3uUvMsXDAa15MEWRV6RJgmcooQRR7Bwhci8Sc4VMEFs7VaP6Lat3qNKbSjj",
  "key13": "4iRN1tkKLW7NufS35VqoQPx963XLdrPWzbvzeWbEwTuUVPvnBDFBFve4xagLTh4LuE987dU1qfnZMLrVGWwyyWph",
  "key14": "2oWYn2uH3iyijMiyN9XPbDrMGocPGZpuHkyW4LYsa9ZpuvJDVTp3aFgr2iKRmShmgzwHiB99Uh1Hv7Eypp5MzuSA",
  "key15": "34ceBmXtLEiA1bvCPaKh2QJUYVHi6dxwPgHDJtm2ToVYXy6bUE5c1YmLcJHhVbdBnyyiuR15UZ9GETbs7BPdt12Y",
  "key16": "4jbQ74HoBVvdF9UtPyF7MsXiDbZduGbAAT7J1axpi1a6yq4UA7eEHva6vDR6MH2jYvu6DAAkGARovLZJUM1zj2hF",
  "key17": "4hN8RWs3uj1dieUyGvpdExFcsrJPry1y2xHWnomdNBvRLfVXy4LG5btC3CuAqmpRBrNbuCw7hseRdxAJZojWqujH",
  "key18": "4TGiwqQrBK8fKPhkVwuZnwfKbWCzQsjrRgk7SEueSMLZeY5maqJYDu4Sr8MZfQvhiUdwffpvTHQVcpyfiEZQvGKE",
  "key19": "3aFNvAdrWZqaEKCLBzBUjXYcU7Lpjbzoi3f5gDRmSUyizfvfaYuxHmtQdncmJmi9Jym7z4osJ2LMdHo1Hhsjb2Qg",
  "key20": "3ZvuxRKBwCfFsFSRYUHH1kXfb9p2RuLJSHf7rZcPSsAULxSFobFX8B8sj1bYETbyShZyyxtvjjTrXw3vsGvuTrjR",
  "key21": "5w6JPDs4Asz6t6gaBEx9C9Rz3erKAFGfTdN7fWfU6QtXQGkVwkEd17zUuVP5W9a8nGGZnrFX6sQHDPLr3TZhR5Rr",
  "key22": "35sW7tR9H6JXwcU5FFqJA4k3TfRtxcQtTiAVZyvEJzPBQKrw3kJ5zKHZGj11DQhGEagVtNiEX8VLCnPn5a84PbjA",
  "key23": "VkQpLNaxjaXeWqMNZLdgMxMAkevs4kdvSFh4UTSiX6xPh7NMdeLNcLy6EbhtonVALpGNBFDF1vFWfFvbGm2kNAs",
  "key24": "4tdWdujEoT7piLUY7xozJ4vTbX741WGXaLhjKDUPBobC2cQENVQrk5q18dZukNmTQZPReBCUH5pWxmmzrfnDHTV3",
  "key25": "3VTNB8tjNczbPS1xgHJ651oVnok5JwShriV3D2RVZwL2fTLsMvztx56Yb8p4oFHscM2d2Ugi6Z3tzxn7sftHDrvg",
  "key26": "2Sh63mb2vrKuwpoXHdYkHsHEn37sYKKbBdx6LvkJa8FrrQoADvE1B1qEPgNcjXxjV5KeLqtwiHWsDNrU8A91mp8v",
  "key27": "HaDXrXuJFTcQntF8DfMyRuUyaPGox3Uwoe1gTpPjuUtWJrok3XEw5HpvMPhwM22VFjoByRTnUSpbbXyz7ZHnqfw",
  "key28": "2h1AYRNmvfT86TCJK67tKjcvXRXwAx3SNZD8UbXhTQTcLR8nVuJnAefDEnSPVmtvvcfQ3ZMHYRyeYr8RpjK9ss3T",
  "key29": "uUXvvYPqnQzGo1x4ZvPtb82xhpthN3T6YfFUDZpcAF763eMtfbMGFVGkVoW866Y5cdonxqgEUZ398tCY6k8tGbb",
  "key30": "2f9r7ceg1fSeTCnETFRK7ancyj3XFAWGug7EixLHWgUUo8WWv4Fd6uv3cuYHHexLipnceA6MZHQztQhQYNsAi72J",
  "key31": "66V8pyQbfsjH1GCMGX6VTN1aUPCUGXzgH5KupVZGnQXkiXYvVZKKEJC824aBGSRmKvW4RRqjhh1KZ8bjhP2WzNfw",
  "key32": "5Xdp4XodEypCRKYWt398jn1ELXgGKJ8YpvJVxZFCT3n8pyoxx178JmxrP1kB32hnuHe8ojjrrEgkEVwKqUmYXLuH",
  "key33": "2qyjDx6umM5tDqWzjcXi1QzP8G4CwVuc14zZuKJanzXV4LAbSdGBQnMavxYmSkpKj2ThEebzjaJB6ECwQFdeTZnH",
  "key34": "5YTQkQvyWqoSp8Y9ARnJHScDahigjWjPtREoh19qxZ74gw3HbCUCSC7TQZt9S53AqicgyX2JrfTcZHD79zQFJirk",
  "key35": "EEV8bSURUqLqswdnESP5R9HBbWjUvCiVNjFEnAJG4x76NTSp1a458rQWkebWEJXCBvaPvE8HPBGCts6oWhgH9iW"
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
