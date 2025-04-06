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
    "GCYZMxho1WdWdZV2xTRwz3KDuJ82FjzzP5boV34eXF3p2fKpzGz3c2VSaXECBKwGMmSJdiDaCATn3qRiiLomJBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmA1Yp1TVW649gnAqsbNEDRJPFifVVVpXVVje6duBWJvkjAHcfhoCNdeV7xdSnRsQNDB5ZCBFQGU4cMuSh5wRwn",
  "key1": "4tu2Rz8aqVUKs3j7idBGjQ34vdTo3QsEQixJirZ7MNi1VHWmw5QWA2EujjhqFqeMK86XNrJkEYuPJHsDrFQwm9tP",
  "key2": "2XPey6FF3RiSZpHg3s1jJc4k8khL7UG8Amg2AjD6DbhQEJBJEfWcxvX6d4Z9sZnof6LpxecLd9dXoXiHS4z6nB4Q",
  "key3": "2wb5UfUVfBjdZUcAfJHrdV8B3D2pWbHj7mvMZjkRcJEp5fCZdbf3eT67AqVqAHQPPyC9hMots5DJQDjZSBraDjUt",
  "key4": "36btcRzASCqKDmczeeqyPdiEvYhz5qWqcVXAnFJ5tLs1gv2oNXMetySSAXG2HMb2gqz3VJmoMxrVV9zGiWp9joA",
  "key5": "65c4NNsjiyKUkHoeoBbEkQgdikknBReQZgevN4JB5LwWfaBKq1m6JF8HvbpFPtcpDG5KCAfcXGyss8o5DoRHNsS5",
  "key6": "51aXQcDAiZPPECjFTqm9vamuM86EAGoQWSLdCC8GArNPS6f51SuFWi89frJc4KRGgPgFZr1R9kb2554eLFZKECAM",
  "key7": "631qZMxjghPgPNNUe7XJkoeGUc1zircrheM6xEFwuoKsix3r9msJvfPCV14idu1nfqVGAbwtpWRU9VLgtUbsj5By",
  "key8": "5w7gaiwyfavqR4WXKCC7XF3yNNmVWRQHR3dWYcEfnPdE1c5Ji25V3MdtdL9Hkob7VRVmjcWk4hr3Ro7fMmGucJ4G",
  "key9": "2wx2NfJrqRULZMRzpTp78oUxQJomMduQzoAb8UQemoYsL3YEN8jkKqJKgEfzNWB17zTN7Qr6YU7iEv9rrrz1hsAm",
  "key10": "65yLgue7HDQ5YHPDFYZjqgvDqLmfGDvW5xNAgbf5zBqFtR9CLrF4NeNGegNhghHPjMuVmDzX27PQmnpJZoj8Usyh",
  "key11": "4E98YeTjUh8gCpY5n4CvK1HXyMryQnn8dNiRuP7DVYZuJu5a29ULnooZRDbiiYyTX4cCxP76sypVZKMrNsaMuC5o",
  "key12": "nPu3N1zmc2xYaj5UFDQSJZgxzoPoKkZ921HsMJibrbiHRvAKnYm1L9aNABnGx9xGB4s3BMcpurfZ9RX4eEJcXiV",
  "key13": "5p9SpsnFkhVDKs65FEu2oJeW3QHRS6jvBbj6DoHnbUakCj7c8HG3Qsb6UPxwew5LAmburzqX7uguHXk5Qy7mxJW6",
  "key14": "2VHbcDwwyVMtEYQxrEMGFTWJnBWrXJoE67z6cxVuubAY66BDhRgXhV2CPYB7cYgJerT7QMhTC2j7FmrCsksNmide",
  "key15": "5zp4wrY3SNMq4hFLrkuaHrRDNn1ENNPmfTtfZ5NbQmJgpXoPK1AVqgw5E8iYyH7N9yPCW9GQe6xeNtbty721PpVJ",
  "key16": "5mkn1VCqYTT5wouY2Pw2TUb3DU1wcxY51nhhzvoMyeY4qp8rK5PYd37bsiwtGYsfKZcVq89m3hXbju3Y5uSBrazS",
  "key17": "2MWUoqeMBq7PqWyxVhnnrXQYsNMVizfXTJCrbWpuAjzxW8BHvGBRCBtFVSB918urAePve93k4L7jhSBZC7MjywY",
  "key18": "3TWgHU4JtY9NAgrWXi8d5NEjChvkcgMikXSkHvqhQmUNTz9TC47DJdaQZdAS11EctPFaygTvopXPezqokviWsZ2Y",
  "key19": "3Pw5o9ZFKWZSZjr16mPqB89fFy4ptZMb3Vfwr3jhrjSqiYLVGf1ufu29NnChmHuERS7ERUX1ZURxAe5cUUJqZD1z",
  "key20": "5w4cdfC2qdSFfs3EU2w29mPYvQR2LDKYwMzKnHzM4yfKD2cjULoZKMXdTo5GgYGTBZ1SyZR9p8GF4RpNfdaV53Se",
  "key21": "3KqNv2Nj6kYzxJCFP1XRW7acFuiSUNRJFT954X7CJPXY5m75EaWGX5nFkaYtBQxyKna9jeogbcvUb1USEw1oEUMm",
  "key22": "5KWyLVKqqEcYVe5phus74UosGscuCoENr3xvhA5MEzYfrF14DTb39GrNqGz7mSXoQuaZs2MmU47XEnDfGQGUbh84",
  "key23": "3bYBdWKNYZgFKgNr4Qa16F5n4UgSU62mnNrysEEYRKcpoqfTDKYMDrWLYmdb8S1Q55pYMMwX5JJLDUjfcaoSroTx",
  "key24": "emGG4gDL51aLkxJdyBfTbY6rsGXJiWdTCfNH2ALnHfGeQ9F6NkbP8EheWbG3YdKFiS9teJwX9F3kCxL12UGdEyr",
  "key25": "2DrHsYXu7EA4VW6kKX1zc8eSr27E7u54JLuMxwpHFWbuytVGywP7ehtimN8gBxZ7yZ7hqPpHGFGYEmLxPJeLCCbQ",
  "key26": "XrbfHG68gBG3mz4BMJtn61qkrpga6yVCN8rineKpbB3EN7HgHafguioWYUXyLsNmnMAA2bxvCLmY9JmYub43pc8",
  "key27": "2NABUBYsHhgShb6GkYn92FKKGKBxCecbtuR14hdPXqjzWTTRxVpqM6NbPSjidW6BsDv1zKACWo5MxV39Do4ojNqB",
  "key28": "34frB292YNFgu2HLVrJBqn1kiXuYfY2g1qSR77xRDKZVBPjTPoNEpJxbQ4mkpAWmN3RPYqEog4PjCEZQ8ZcTkTLP",
  "key29": "9E9EmQGZSGQoqmP2smJRFCshadTtj4q8bjrUnBykmeaTH57yxKjxPUnhchTVpkkmqtjzQrcqK5eC1bnDsVx12gK",
  "key30": "2WWbvUNRVHNmyA1LiNFaTyAvrehxWeby4PSpxjbiJJ3MhSVC8n6YY7nexPWHRqMU5e7RcjmnsTKiFb7QDtu4pf5e",
  "key31": "4hzf8qouRxasZvdmB2m8PFTu5FuNCXTQgcALWMVm6nZG1TN473Vbx6CUwoQVWkNBncnmRf7YL4snSTLNGgTY2hH2",
  "key32": "5BxQZpxDFZQTptG3b3HTxqDNLWrSnZ9CBK6d8ujWUfSGTTaRuynMUken6A4bPyuNdqh25fibnufeq1foBFSejTT3",
  "key33": "39rUikrSxCDXQstGXHR1zxBkdV7NDmGqksUP6Mfxnir7Y6ui5Gvk5wKjLCFiDxMbd2qx9Yv1YirSsJAdSNw8Bjhd",
  "key34": "4G6RB9YtByC5JpVxRQfvzMDVyMaJTcHxdb4MfHTbJyFvPJcFWgRz3mvy8tGm288ywVEMwsbQoibEvrzSUa1comGK",
  "key35": "2LzJ62CNPRcAdZP9d9stHCfkJSHvQbQuVvHuxiwPeLsVrCGEcbgtZ8sGftpgN73CdMQpzacXZy5LkYEQsYeoXb5F",
  "key36": "5typDa5htLEGDHBKEkuuMsZex5cnnKTrXfQBpr8HyGRgUX6CQBXqwqmdXtjBZfd2KffFixq3KZGcWaRpDCpAUShh",
  "key37": "4NYUPeEdXuUHKn6EmBC87wEuoiu2cjsDEzGEUVZRfX4iJ7K74ozek8R5CSeFEvCbGYmbWZyKMfbDFXSSayvRXAU8",
  "key38": "65sekmcFThpn8m5Mwg5owosxF1vn8nrTQPysLiSkKXdWiNKjsT65GmSJZzvKQ3o2njFUq385p4xAfpSSbYtg8dtR",
  "key39": "27frwmsXaZefURzsMyLAHNrNbx7c4ZdSizwFn7WAHXjnzC6oNE21eeirKaAkryYyBy32ouEAUZUposvAWHBwgAm4",
  "key40": "4sw3G15zW9YX8WGH9SWYbGxzCkYFANLiJfVLX42LXwqUAMh81cca9BBbB37Yie6pUp6K7ytgANB7h3mPZGQNKor6",
  "key41": "mbZ1cb8funPspZLhy5kjw9izAmqoMZ6Xs2bekPmD1nb8FQZBh3tHmV6L1UKau9v2Q3DFusWUFtk5r8XqBEhkaCd",
  "key42": "e6jv39wofFDZGw95E5et8Sr4soFs793pmpdZbrtGAwb4g55QmAFi9bGUAKmknfKiRKHuARaJw6CYbgVa2pxEznV",
  "key43": "2uqxfMQhyLbpTjBSrQwdsR8t35kSkLu74CucoHmUmoXsGF5wW3qwLU5NqHSYNsCTGriTLXUB9UWYu1m32g8NS4nB",
  "key44": "4TrLFcqTKycxYzttYZbz9dJ8LBvg5DMStujCMvG2T3Eq872sUyNekvWtfcUpMo8o94LNykhuQSfcBcdhf8RAyCWw",
  "key45": "34SUv7Bry5Cyj3dAbWiESPsEtuifZjoQTdUs6wVG3DXcs2Pm3utGqPJojzEX8ARtWAnUBL8YLwHQ2oXp2K6tiusP",
  "key46": "2nNbKtkfGggXwsUx15D9QgUpuYVnbY1qSFovYdzPuqMj9mQCzt3q2MaxrU6LGbjoC8xvoeu33V6by2opmjuqLrkz"
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
