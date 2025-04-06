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
    "3aGuWkji2ea1yZfmebH3F1hX7mXgC5ZNMzmEuWE44e2LESSY3mP4nSDjyxbH362jPEC1x4w2MNSEAGZfH4Ah3sqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EF2u7TWhEMtG85AbBEoH2dP7JFRwpuvQATRXLt6CnGNLc9cde3TqKxaiChXvD9QBRr5Sc9DvZ6zykBQkqeLbmm",
  "key1": "sy1MY7RTbLUT19A2A7ovdSkiPibNE4rsXLqz2iB84BeqtAXe6R6AhmbH4g2FurvGMp6uozuXK8Gnq8PJuuEkJQP",
  "key2": "4tqeioNCSUgKawKCK1GCroEmRrudB2MEsviSFjqHVNDomTzKm97eFyKRyv3iUs5S37KF7zUErmsikFrtRCbFoHec",
  "key3": "4hBhsPEcPEYxLr7PxdkudSHFRSZKrcx2b6nGkUGGaqpnbqMidrZbxZGf2q3yUVq5QWVz6vNanrww6fvQgguj678u",
  "key4": "3VmBuVxPzSqefumARGGMeh2NRhYXgCWrhUDDFrWfduTgpU9bjfdT7bsEsDihkUSkHRQtjrTNdNPbwcWzeLzVRWSZ",
  "key5": "6353uEh27MozmKEmGUbtJFwiuRrKx7jyL2myx3PHBiu89G3gGccZ2ehpKv1hVZ5SpSUpqHWvnj62SmeYSMGifeh1",
  "key6": "3C3WusyQ8PKXA7t7bYtWz6FvCcUMS6ntqntfRzSyvsUFWtykKqTUh5j5gjHuG1ddpBLDhzvNh2UeJE69ZhdDzV4y",
  "key7": "2kcR6zqtSmij1chMBvXDc3mGH8WGdzwA2V7V8BYpMq2ttXfgQ4n7nfU5x9z71hDx5bTsHcLRsHks8oHBUXjfLZL7",
  "key8": "3RZuJTo1vCsRm3ftfuXbRB2YEd33ipCDbf5Tr5LxToFe6AsGFPn3d8CZxWvsoWeYWF3Drb1KijsaSg7FERJEzpCN",
  "key9": "2Kh57eMpUNnV1CpDhZ93zMNcQwr4xq4TkRXFXVedeaiUV7JkCpwwLDptbpfvQ8pwQ6aDA3LeYLDiCQ88qv3q1i7S",
  "key10": "mzVdmPmP3DiERipDAkCrthY1aD2phdjojsJcSEqgrpApmuFYzBGWvTZVPgrZS5BsbY3Z9Ayp5tywPmBBgUr3x9Q",
  "key11": "4zoCVqk8j1ax6FVXoYMcSEC1vXyGhc2vsEjEVucjg2oZAiWjedsjx9nNBM1RmCKBEGyQBXbkZAWyWsZ4Pm66czyY",
  "key12": "2weEzFBTpN6DH3utoymAN7qsQoJvXgfEdDCPpTTgcYLJnz4nPehG4aZgXtUQvJD1rztWcS8Jw1ZFwHkNMeuSb1xK",
  "key13": "61bXMc2Z4Y4qsjRv59Rr4JJQtnFWD92Hosf12wm6QcwLuMKBEbdhMhprVUZ25vhdzc8YhFTx1DfQZ1a5nFGXLS4U",
  "key14": "4xEyh8rU6Gg9TPMoU8ccu3MsTkk4WkwnnhtbUeoAAwaKBrZN83yo7EQ1ZZ5MdxnzZnkkoXameiBBK59guHoKMbn9",
  "key15": "5NfYegVPVsYzTKYiC4VqrS4Cpk11b5fGRmePyckGJ78aZCV1mW9R7XADhsQSsBoEZKsZQ1MJQaGLiUi1QKCbhUeW",
  "key16": "35gS2PhDT2gYqvYvdST64W3Ty2hSBwhHCBtjZU2oUysawrwaMbpfe36UnuJptwGdxmZdDb7giA7H2JkkjMbEi8u2",
  "key17": "pPDMnCjomEXyPvyCKyEqVgMFEFbFcjVdRLHz8nKRGMjTJAbQXHqdJ6n78wtBDT7ZDRDP4TZYDAyC3BUQZLNQo3N",
  "key18": "2ooSKX2K6nM7L6CC42wGL8Go2QYw9NGz7XWwnpM4Wzz1Wa3s8X4EKMWsquzbUch9xPQDmrgNbBmytcFgp7CdA7ez",
  "key19": "3HXRDR9YjRA1uwVCFE1v4Yg8DSSJqAU9hMXBquHv64q91xNzu2kdTR2SUMukEK2Wnp1epemziqK7UhHymun69mht",
  "key20": "53hmLY8kq7X5yMrp1NMfzBKPgxXrbeRLFkhta4qcnCZqxfMRdZ17UhDSgBAGeY9rNq9H5kMnDmUYXjTYF1tkWTS4",
  "key21": "4QebLbioi47R9BQr3ZXDwTcP483tMZ1kW6ne6GBiNCGL2sxw6VWggdKikSaWkWXSpsPEvWwSQ9yyFBeSHQh2SQRk",
  "key22": "2JKT8NcHeqDHx7DsXpGiofMim6QUiiNN2gJNxEg5ujSoKuvZohDkKV6BfUPYYRBjQzqEcHASo62yhgUvrw9iNBN6",
  "key23": "3aK2ZYZ7veR7zDKbkSf6ZhH523TGefdFJWmDCwJvXZhrYrUuS4mUz8xcdHbaB6WxUnCVtzTJyp1bYepNNrnUAPe2",
  "key24": "56vkLFywSK4bpBe5K8Z1zhjGvxsTaEHuxc84KkT17YgDsMBeJAvbQJdRHDHos7muaLNDhKTw2dEqQKeyZA32Bfr8",
  "key25": "3erbpmfxSwQWZqbM4mgewkfTcUmQB1ywtNvGgfkUhX6jkju2XTY7UGFnmgxKPUvwbFz6jZTtUTjjVoSr8QpyBCAF",
  "key26": "h51KQYhrL1hHr6w2xmACWi1QZmh9NjQN5uXXHfQKcg9wb2UjCMEQon6zrNKmR3XJhTSQgi1njL6ABAokdCuN8px",
  "key27": "HaBKyUH7DmUPJvAr25e23dPycpBC6neAgTc17BsuVmsGv7QGiL4Jt55BctsdCvbgxoiSF2vq4GWT6KzHudqefif",
  "key28": "5A7pwWC8d3KzrJpmfe6rwcnCQzJTt4tUM46xYs9hLCE4UipDSBwYEihYPkrZmmoWxmFUi3QQAXf7dgFTEYnyysDr",
  "key29": "2H44corjgs57XZa7wEvdFDzGKhYxjz1H1TjeqdS2r8YvQwXjBUZnKCbbRKMXYtmQcsP4jW4297i9VVTcrWR383p2",
  "key30": "4NXtGgs29mZMCnipd6eFJAi7zrVJVxrLiJwjU5EbHKQpJkUtCEAqcVGUkKM7TDtNbZc4bFX2LrX3SSujpNPd8Nh",
  "key31": "fVi4Pz49Q71m9RGUevkkSKgWARKFNxJp8yYw41Ve883LujErkK9tp8wVhiAQPL5uDSudVbJRhLrCv1gpFGnMC2n",
  "key32": "3QKNFDcQUSTdtPzfDp5zp1D9GXLAkMJUtdSNkiix8pzmNT8VnuQx4HwqGmF6CMFnnPFnLBiBBof1ML3fmaK1GF4F",
  "key33": "2dvaMto8po9XYoUdNAbEwecxPXaxhmGq4oXzSetLumaUMQGvrqnbXmDNBjRXsp6QBJFaWdrN4p2Gdf8T8PuLcG3s",
  "key34": "4bTZszMSSJTZq8u4MPkr8Gj9b8oFVezPzuxMStds1oY6i4Tue8XdxATnFyfGFruwYs7UCgwbJFx5qnPFR1KYVjJ2",
  "key35": "2BpkWDLEH8k3aucgjL2zrwxxiHrZLjnyTN8UEH7g9ac3Nq8KBJCbxhHwEfAzsbxhQbEkCj5EuXf5Ag9nRdvmF3i9",
  "key36": "4jMKc6oRvnKmTW5e7PswngFomhwWdjj22o2Hq7gCcL89Dazwm7nfLZ8ysexFErFh6HaS1nkEVudzN87RSgmmiU7",
  "key37": "4vyfjGVQLcgV9cB5J3TWMEtAR3N35SVoEJrMN7DNvHpeuPyntduBfuP5XGZ1RxgkURkV27wxVmEjWs2T7qzrJbfN",
  "key38": "4WP8EMMpze856BipL6KNaS9h6Rsa1mGgVWbNEZdUdA95oiHJDH7j8DAL1VYnNhRhiFJBgkGZ9HjWQDgaJy4LVmhB",
  "key39": "4R7wq2FjgJcVa4DhsmLLHQAguZoZEnotfG4tzddGodVkRDJEvge4spUERGSRvFzdfDVagV4pxRHuy3hX6abStV8B",
  "key40": "2qjb3m5p8aLVxL489JAMqawBa3fJeLJRaFqwNcfkEJFQgnY32ayRgsQRACEo2GAgheMikASPEh5m3SRdo4qi5X5M"
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
