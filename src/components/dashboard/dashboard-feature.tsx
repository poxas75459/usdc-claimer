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
    "2zTf9ktE7gVbq98RYh28F36rSPRTjFWwf43SATjZ8gU8uQSvBq3xdC1UnW6w3bwVvMxN8fbtixYFhyhALYTtEPXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BFvcd5i8DYfmek63Q9H7gwwCvHMtCWdNxXogUXwJjo5KKsifb6FLfcKDFoAP7SmLq2ojccNYfTWiR8wgLhF4UmF",
  "key1": "3rT8vgrRxm2vScjmZ2b6Pd7bencFJQyWY285Lrew9ej57kg2DKnF48RJui2eP3w1MSTSg4LN1Vp2j7CQjmSxz3B4",
  "key2": "2spCo5cqVvYXvo2rHn8o4wLSewj3rnkhX7YNcYJGYokqX2ieD1Ym7fU8h8RWz4cXdrA96g1S43RuSrf7M3ER76xa",
  "key3": "53PLKLXzSPztogvNxpcB4a9aJQBZQy6PZNy2FEDvkbDJFm3kpAXjrTC3gwbEmxWyskarSmiMkR3uY5Q6JVLXdRtd",
  "key4": "ShnATLPLMDc7ehdxhPwqANMCaMUy1iKfao7NsFDQDN24yfev1hm87DyoU1c2y5WksGrL2fvfBRpUpu2AtpWRVZ6",
  "key5": "4qiEAqVUiK2FTpAJtpzaw1JUkGqeVkkaErEWdSu1ckBRRdDrKY1dMcXcS2LMtz9z9r5Pi7ZJbqAnAc9v7FYWSpxw",
  "key6": "2nEg8yny98Rnoeh5kyriVZyQCRoMvKxdGqJ2PUoXV1CE3BehKkw5sZSgTH4xGpRpg6cViGv35QbnzeWqHTuyB3np",
  "key7": "272y9MEQ5PqLUchftmCdARoNraWAjrJvVaeiCC1nTM9VXDXiSKFwY6WEN9sgzYpunvE9RoiQXeDgHCscmNnAJAmu",
  "key8": "3aE8hLbJQCRoUEznrHrH8MM89CCwiZHHywpXQuzRYcLeKCy2fCU2SVGi1nnGus58nA3cPUi52Zz2ndmxczBmXry4",
  "key9": "2enJ9ykJ6Ho4ai7RwPueFscqsgkZAfv3mZLsMdoGd3mJsjm2YJDJRPrhffYz1aMgCwHL1gr9j5EFDuyJhrKRZkyE",
  "key10": "3dcdQxpwF597A8BDbSkBEspwDxSKpr9nawUrriEjuModxQRVEGq2Zi5YY2t9mwDNaSdUaZcvGnQpDc2NjaVU24Qx",
  "key11": "jm3jST83pbKxYyzCPHaV6CYb8JuU86DSzWB5wDqH9ZJqSas4c8U1kyhvggz2QBVM2heknSFvt7KyaWG7jgsU6W7",
  "key12": "DpttxeWcM93avFesP7oiTY33G4A4HNpKyTtNfAjyczQR8jxQTEg5qPnNLyioUkzoc3tD3bopsg6osgRX38nEyuv",
  "key13": "433ci6iUeECQp8UURJLWdTcKkz2SdQgLBgxEgYSZSBDZ1GNwF2jA8D6Mz5Eaqkwj84UhhkozkQtkv9sxu37Vktet",
  "key14": "5QRAHNhDMp5ddhFBK3wwQS32K8ZsHw3nFuukRTUzkeiSA8zoCvLr5VEtqR8BPn3qYPNqsd5nG5dfHtPL3T7XuYQz",
  "key15": "5wbik455AJjapfKKTDhJtD7RQVX9UkrmbkH9EYE4BVbK6Z5N27gf96y9iudh6YQDtn6bEdVYWZfbB25hFvay91nA",
  "key16": "5JvoaoajvyrLdqXjZBqNnE8WK4hArA4GTaQWQGVafLKLRz1im7Va4NuS2jGwSA966frpx69sYerZi7xwvfSxaJpQ",
  "key17": "2G9VDgoLtRXnSUfu5sR6EWpvP6CYUukbirogc1HtjQe86V7PMFoY14GdcDeAPmHVpL67Nb4smjY9vV6ewWzQy3XR",
  "key18": "3QNtPsrxng9LBMQF7SKxpVBdhv1Pf19oJfxuA1fCeUwmiHbN329A5pzTV4gs65keEj6KYmKQcBW5heSEVwv8yYuE",
  "key19": "448bS9dE6AybW5iTZ4jvdkCE5gB8W1Xnto2nEKnGs8C52GsHzEkLTu2dS4xJwxLp6vPeoPSTUsQuqENsGT1c3S31",
  "key20": "4Sr6Pq6p5gWXsSVXG1mHnVbemBKTRGxEewnkgtxeQS2nwXTTDRZnro6wJTF543g1ivZVfF3rmMrm64f2CxMBfKkc",
  "key21": "5VbJd2C67nnXLDz2ggXcwT1SGyUwc3KU4ASW7JveAfiYrN2K8QewmpJqDeRSSuiKLAuG5vhu5fhDkJhmZnXoXhY1",
  "key22": "5N5kFkgCAyUobKV8ocL43M2p8MxmuJVYtvAiJjhDSshR43b6keZfveXgTcEFqD7XKhyBzWHCE1AUn9oHHzNRWMis",
  "key23": "5ndSqR4Wm6Jw7PUeJe64PdV9JQyrY6Q3Fznqjs9qeXV93SJTxmDqLUHwvwWUsyAf8pG4FqRaHxW8pRmdfCM8Ej9e",
  "key24": "8oAkeaZzeyEna3geHgC8HMrCv4p459VTNwrqkkdZkXEFeBeHTYipq4bEgUzm14NbR8sifxvmojNq6ZdUXxHq5JZ",
  "key25": "4H8UrzGTAPtUTExow8VV5q4tAh7CgQeLLrShLnXn8zqDHMoU1FGA36aqfha3i1rw1bWs1N8shtBPhhi6oVBUHKgj",
  "key26": "4NY9UiP5BeEkMRqoCAAGQZdsb6BCCY5Hdyc868WjbujrHV5fEADkxCHoD9dvcnbDiJRLn4mHZoyBWwSP7qKBFcB6",
  "key27": "5ZMpEq5he3ifGkHzykQM4kqHccDKELfLU3kHr7RADUaQZ9NwjdYjhVFMV8Nw6EjMQzbjSnw82Di2kAP3SPh4RUUj",
  "key28": "37hEQdw1udUJ5oxJTkynvoGFybh3HKT4vFTus1wqJpUqRAoEWzKfBYyinY17ELPWEkbNVT7RJ9kQkz4Axh137PZe",
  "key29": "4ZzoHSAKn4cSmrQmDoxX6NEbtDsPRDMy9HJDg3AuGu8aQYpTRWwt1powEt1W1HdscYSDX2JR1rhA8YBeDZDjURDN",
  "key30": "3f4tWeJKpQcHdhmYa2x5dpPeskeJACr1JUMtSr4RU8mJjb3ac6E9zoJndKGbkD2ueVHzcKNGKpfDhi36kVfTsRz7",
  "key31": "3Mm52ntsmMNrPv3UWrrxn37TvVHSwrAjoDwVEWYv7S56CYSP93wYkswqUGk2RUS9rsm4LxuXgDPK8vKgYyZbYEZ9",
  "key32": "4Kd3SiaKKCfC8e95gSz16ENN7ToddZrRrBR5znsiN2sMLLczEVhVXj2iyug1fbUC3oQ2eKCntbZPRLnjm2mNtX4c",
  "key33": "5MZVjtNRSqhZYXrrPLZgVrxT8ubuUzWBL5kZNzNNjMp2LENdJmCsqzWyBDCVTAwMUz6vU9JCS8Mm6t32w6mp27AJ",
  "key34": "VE1c8AZxxVmWYMSWMspzwRPdsSR4Ls3X7v1p3yjpmwLXm9LZvHC78Ti9VVAhPWSURmst622NAbXNcxCuFrT8Ufm",
  "key35": "2QoGuDyVJJMHtbCXTbRTF53bTDPiEbi1E3fXwbG9QLmQQU8Pu5wFteoqdQsvW1jroNEMComaXr4Ksr3WyvTg3sTr",
  "key36": "62BmKaxydyrcvMpawXysVHzM94qhJ3QaxEoPSDGveSJJbshBhHv5yEFEMEuWFy3DjJzBu7sKUq98RDWLo3VMdkeR",
  "key37": "58Yx1j3sRDCnp7aRudvKn2mfGubwmYi9RksS261TdXfGALAL8a31UBMUWjeUykcN6XyLHswX9aqnymrQzdiTWLyu",
  "key38": "3NnuTuEQUuCo4eqbANiF5GcPCLA7W4dUZZiFbnauDRVre4r7wg8ZPYHg5Y223QLdY1C6n672KzTVLE5yb7jajAG5",
  "key39": "3sivvgoZyqq5uTFBP584DPWh7vRzwjAnjmq6wuuSsp5txpdmD6TTBzvBRdmJN1v4sy2SyBPWLqfpJNeR1kDKDDwe",
  "key40": "rVkhS8qWx7kNdVnGQfhNjFr6jVe4enQ9kCrW7CUdK2AW2WDdJ6Pt8KipGaRHjaZ8GGdNy8hYgKYidLJnkSPxTUb",
  "key41": "4dQd46bpNmjnustGSRbJh1qcaw5df1i12xjmtjEfsmW1BW6g2UHsdJf2sQt3rfTEJRKxmgdv3dqiNMfk8dqBNkcn",
  "key42": "3MHDquHYi1mG6Nva8P617RtGXiqt7t6KhiSqVxAuvih9ZNmvYPuZ4FGwpkKjByozCihmyaM9Z4pHfb8oEHKWULHi"
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
