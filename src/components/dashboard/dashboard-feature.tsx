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
    "5TqkkPYRhNbPSt3gSMiaEw1rnESNTyFap4RMHaE6eG14xPufxuiAJfSCki1Waw8DnJSJLCavGynKwgEyDFAqcHui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N5k7oc3B9aPJbX2KJiQyUJGmQhDDry5eJzSESFMs5xhEVsSTtanvYVqVu6d6MR5egNkfLqupXA8P4iDDBhLcsa7",
  "key1": "uyNi3iBk6vsSNmAupb4wtuEVBWBp6SDwJS3HQhYZbZM46yywP2eyNt8dCh6nXzT5MZZ2krmaTeycn6UjfVhpZdq",
  "key2": "5zsX1WknRx2RaMtnfFwefj81umvqzv95moVXgXV6MA6j72Mp9EjwWTPEwXZmwZU5USc62UpkhFaqCixaSGEnsrwY",
  "key3": "3cK8xmkCzQfgg55ZaihdREd5Zj3ELwmCmGCzgdpji7mzfGNhkpYpyDWdEMT3FVcQdoFoqBkpk8aRcP5U3Ur8LmC1",
  "key4": "4Uf3ttpPdc75HZnGW3xaeHHx9new9y5fgEK7ebe1g9EtZj4jqiUyDzUo9RtBXpBpdGXanWhd4wrqgiHhbdo6Z1av",
  "key5": "3F6a5XBprYZqUGHHyHGiA1uaBMJDM1qLWLz7fd8goKKh6NfcEGhKTrwZShiQ6Lnc4Z45mMsg4C3wEASKzHJwtT6R",
  "key6": "2kLqpoxuEPWFtFr9u5wykFRhkzafuhpHp4xz4JYKTcDk2sEvAnGkPhzfjFfDDVsnoxRTAJunLRLjv4E2T66jTVC3",
  "key7": "4FdHxJvrHm33fgV4PC8Ad8UqkK6Quz4LxKdR3dT9E21sqWZdMuH1cgFXEvSrS4eJZ5HNph5nyhkR2FU4rpVrkavo",
  "key8": "5fLbsbZduUZs2pwMrm4XVSY7Qwk488VUaNMmAqZ1E5uK94FerY2oyQXJ21udjPpjBGVmtzB5SuiQSjA3fW3fD8ZJ",
  "key9": "3EuDkkvLvCYfYmeFMJ2XAoPjhirSjkgDx4L4moVQbn2KX6jLHcBtKJ4Q2rqEKEe2qKvaa25EmbSWXYCVyqtAfM5V",
  "key10": "paWs8SdEkcJp761pLqxf3UVjkZE7vTNKAKe4vgGmoJ9CcmYSE5ndPJ4XVbqVhdv9joJjtbzuewHKSwejwNCGEsG",
  "key11": "3dMnBQ19a2pcQg2VDFUFPsaMgRX93DSUYbbczEQjDdajpFP7CTyAfUUbu8BqtzUoias1g94DYrYRak4pgSdTemvB",
  "key12": "2YoLrxV4FGuzd8gEdx1mhexoyUdbZKgzaeTtmmDNYSrfxRuAua9HttAGN8EejprRWgdGhpFNKkPbb16LUrce5Szm",
  "key13": "35wCnaHACwuH52eqdcBVmsqXhCe9oRPx3r4TPC7TGydfM7AVxkpB4bN5oypTRWSa4UFMEa1HtrdDaKzBsumvRGjW",
  "key14": "51BpxNVz3WXmEawGnjYA1geXNcikXwop2VdbpLG7AcbNspFeYczoABmpe3ivZpUwZZEcuaYuNgs98z6Q2XdXYzss",
  "key15": "283YYRFRkRTWpywKSkk3YkacqdFXDTHryVaA4cCA8431kMHbdGwvRfB9MTKkEtkezfXEo19udVMxQexu3fDUaAxH",
  "key16": "AfdzM8aFmTNHiS3PkrgN2La1E1Sr3Q3X4UXbXA4CQX8GhZLnETk4i33XfFjmzHiz5kyHdzRRMQeuPUwvBAJ4ShR",
  "key17": "4T9HqFzTrkVLkofDy1oshvP9JAtgYdcCrjMx7cuTEsvwFCoso1nvCmoGMVRRxtnAvavsuM2ee9T8qfNJNyGdXHd8",
  "key18": "3LLjykcQutTedfMD3EQeL1acDAphurHctHb5JitxeSfhHKnWZmq2gbSsoCbpk5Vk8zHJfeW4cc9NT2tVCu4zYFiZ",
  "key19": "2vHcxQLFKbWqsDo187pkU9C6hH66HwyaBMePXZ5zHT3mEBnZZpVHcyxT528CdNq1fJsMU9dik57cSSfQGfXcHivm",
  "key20": "65Zs8fhHwz8z1cyXARb8ztFtQSRmZbcSrhiUhJUHy5MbiZCaH1MFX2EwsmswJGr5rRhaSJfbRA5AFhQakpZvGtdC",
  "key21": "5DEzs2QERyR2TqByJVBhBRxoD7D7bdjxR1UseV6CccButz7BoejPiDBW6JKRxtba2ZWRqEXqXC6RU68TWhp3gS8o",
  "key22": "3bvVWS5EFWNRj8ahbqgKc6USUvV9kJXScbrsnq28vTT2z2wyf1UK3zKKKMBCqznhwW36xuhsjWEVo9D4SoX43Czd",
  "key23": "ektxbTEigQe4QJR2Sjx95AudxPacvpwoGCwz1BBqMSChNkwnhovQ426DJWbH9cLxbC4ZCik5suvtBYLy7EesyzY",
  "key24": "21UFVCdKgCgB41pZEhdpnmtQ33R9Wed2bQfLB9v9HGAeoTRDrnky4o5qpqhnixEomPHK9dM7RiBdBTav2nbhUniY",
  "key25": "3WnPKa6PUy5cmQi7HCkFff9EtgcZGoJNN1YVJtMqPuVWHMm77cJ11brAkC29vizCeReBZBHP3cJjaPnGryv5X3ub",
  "key26": "41TcQ3NkX3MM38VzAcnEKVnqFxTXwZyB3WszGaf1AB3RkraD82NF8cBUjxzzeCNVvJEWb2zSyNEcVssiEET5xKui",
  "key27": "48tfRFdGkb39NuCh34b4a3X2NQYMCgUt59DxymBzZ9o3DMkUxC4UgvCZfYWdsesrF17jzykagGmwPb2oy93qnRuN",
  "key28": "S2V8Fj9Zg6m23Qos27vwbbJuBKGLvGBrhjTynaYpXEwLNvtXtByfSQumwyxdFjZTJR9b13pGLLMDVVH8V6cnCu4",
  "key29": "hrgY99tWtM4ETjSUAE6Np4rgPwD5H7oExjbSB5TB2Rq9fPStBZ9ZdEbr4GGCCb6RVvuZ34FWhg6qvknqbKFBC5o",
  "key30": "33mBvNmZ2TesS2dMw4HBB7d3uruLjB3mKPdvauBXsz2ek68M1vy4EDMREzLxBedGdYz1BtvmRtGBcB52dz6mShKK",
  "key31": "2pjmGVnS12hLbMgzzL52PpM9fozyca4vbJomhr12cP6ev662bKd5Aw37touTRFQX5TNLZBpz3uW2Jt3STzEf7VEh",
  "key32": "3nxsiHs5NHHuiRcVbjiUUTLr7c8xs36fRNbdV1eV2Bo4nqTaL8W4MogLmx3KFHjzz5r7cUtYpe8TwBxMZiDnqbTu",
  "key33": "4UDwWBXo2bsSPGTnVJtSdmoCEJz363kH9HuhnPCErRvQvu4V8PnBkuofuSLr1BdKdRCCSrqZA1jr7x8QN32iZpmj",
  "key34": "11FfVuC15k9pHmafHM4bA25bgRTkGW4uRfBgBUdETHgmPkvv13cKQ7hm7zTUCoNcbu5bsdJEnL3uJmUdiiQTWqc",
  "key35": "u2QmEZaKMb7E92UWJsSfAmabinqYJnkd3KUiigb55ZLvbvCKBjaHXg7TSsCg1ZucuZ5zgovTK9uyhecBsmX2hw1",
  "key36": "2GLfngecnChXK5NkhD34kqHL7MRv27AD4AvbYsJmdJS9NuBibdL9Fvt8cx7pMjShZ8rNQWaV1bMaYvHmyoHUSxqC",
  "key37": "3JgBJmtHD47BmZTyKiTutHb5RQLVJm3aqA4HgvPunkjWRgSPv6UxxRYWh41hSkHYph4kcb5jU7S8QPJH6fM2m4Go",
  "key38": "4iCARb9st182rQv4skRiNeq4gGZsPWxceD1QtLQLAqppehskRka7w8tW8S5Wj3hLkRLnfaSvLnGe7BezKh9JPebw",
  "key39": "4rJSJBUTm8VZzV1PQEVVx134HRgcKHZvJ79bMUiVhC74DPtZHjofJPcVsZWVrBkxr8UjKufC6cdFomhSdWgXasTH"
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
