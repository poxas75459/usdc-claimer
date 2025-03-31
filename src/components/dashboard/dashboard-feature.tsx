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
    "33DmwvuJyp15nhydB7kBd945grnroXmTJJtxnxHmC2U8aza4gwkFn35r2rGaTQz1o6YDgvT9DjVWtf43hpnv1AE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JbxA5CfJ3fqekbMwHWiQZjHrsjEiPP6GWDPiaCheVF4hPLYkRfMEmUhv7nKZzmH93Ce8jWx4kyZ7qU4zMhPH5Fy",
  "key1": "3aH9SqrvjEwh5D9nZUujpAYL229jz5n9T8NnGAzSJi6STB8Uq9tukNtWAPcRRNdgoPSXsQS6R5dsF3kYYiqXAM8p",
  "key2": "2LELs3NBxZRoKuzWmrVxKyigVgAyYdHPigztgXnYKqGjrba6rJ4gBFYwfLwzoGjnCZJYkPT2QtMhuhRVDuGqKkHU",
  "key3": "2Y4uqzMydWoVT1GzJoEozug8xyXCiiJZnz3JGw8K9cHY1iaKUhkZCKN5NtSXVtNdHqagaSX2PXiAQqaSzQftc5Tf",
  "key4": "Txmkn8pVb9dacqnVWyxSSxxgPNBFnpMmQBsGQ35sMBjfF1T5wETLo6sK8n5vNMyAMdthPHKQ7XFiMpaAkemTZNb",
  "key5": "63ZS9j1Lrwu8gfbUtxNv77aDq8vmR87Z1vKSXmRETbH7qqEgPkA4cPC7Kqc4xz2oxaH54hgx6enQDSm2CkEGcf5B",
  "key6": "6682EKhCriajNBFB1E2fYvMHkmqvr8651PMbm1ns3hgGMCVxsDAtjwsrWiw9efqfWjcioUtgRuLk3dKqge4nUAug",
  "key7": "5HNTP19hUg7PZXtwAKVUg7cdcXWtzoCgYng7tyXP2yDb5fPkUd8Ya41Aq6MY36v6WcnBTaW6W8wkgwT7sJNh7LLd",
  "key8": "32b6WSgsLfJh7Ab1WPekVLa8Bn8XHVcvngnKtXApu1ECYsFmfZ2tR7oWtt4YYKKyiAT1Y19UMG8bi2Yvj2grmeDE",
  "key9": "43xRXB4a5joWVt4oV5b8EErgj5w6syE4fmMaT2UHSd5BSvx8TfgedpgFZMyRp9ouZP6RVTZVWKHy8DsFZE947Rjs",
  "key10": "HjcbDdSYvQC2Fj588q3M1AAm2aGX57SvJ4mB6po1GPeuSG75y3MSB6a8zM7qzy6uNEuTFcYXErzXoVzJaPCU6PX",
  "key11": "2ipajdaSFNjAwdKctmRaYSzqBHTKwCciygYPaHFWihB4nq8bEaCTDKdDAhcEXZzB1xVVVJkVG5mk3NBYJzwAuMqX",
  "key12": "6DyQSiQS6F462c6SeBs6sizPQRbnSNETkcw3dQqbjnJYEr2EJffkdBHTnGNurSt9nMCg3FEMn87D38fNVcpxYao",
  "key13": "2rQ3vuuevvbyK7QzXkw4TBHcBkDZmikGWhk5RFZGn2MLoZd8WJ1opv7GAffs4o1T32iDTRsW563AYdf2gfcdQ2mZ",
  "key14": "63HcSaABaU1j8W4D8APfgSLu4A2QZ7UNsvwvuTDmw5KyFKUq4UUdLfMN1mXJVZg3fhTu6VMyeFTytvpY943e3XJ9",
  "key15": "3QnMkvGaMyXXK5PuABsHxaHXT9jRg4Vp1GsubFVX9VKF74RrG54ccSGkPp6VTd3okX6vg8iRMXSVvgkuE58spcNZ",
  "key16": "2TTiNhjdwwEKUPpc8RjS5JZHSG3brTzo6mKLiyndJnAPerp7M2R4PWRNMYcFJQeUjEmQDqdpsnjLD5qSpc9KTtVx",
  "key17": "3b5NMmfmq4gugbidWhvyN8s5j4VFEMwBtMGBggGij3tstBkjSnsLxm3xGS5sAPwzGCgRrhx6G3TvSb3uVcaZCsvw",
  "key18": "64GZCv5Snf2QihD1grhrFpGbHi4apEnJZhLmwGH5w6YanPWcGwrAHwQQusEpyyfP76TnhL4Dfp5w4RDy6pdrmKVB",
  "key19": "23Xx9vwnXNz4dpLdKxjWxN5Cvu4fAs6EvFgWGi1vSJZPJ1jsBu6bR1G2ix9gNsCHtqMwnJDkvcQo2Ka1akXVzUmt",
  "key20": "hNqhp5FUGN2KU8k25iCzQAa4AduuvDbMT9eZbYThSusnSRyF3Z5wcmaHXsARZBd2VRR7VeaXS3wvkgYfFGaSy2n",
  "key21": "4r2LEdzgjGiAtsQK4emymeguyuZgpqYAi4eTXDkkGXa4pwgE6odoV3tpYZRGnoM6xMHDcwsu3zPY7pxWcYJdrKSq",
  "key22": "5dbNMHnDraU7Xc4Hx6yJ9mewfhE5mnZqTkvk19b7FWtgwSmt67H7B5zn8QdoRqiCV1a24G9a9fXFKeKtU18Gwz4v",
  "key23": "4kAtoF7CEmcGcws6yor2vsaBrzNbpxDAmJxMCPN3c96MzuGvXX8eKWc6aM7rRtVr2BEAuxBR3Bnkg4rqFD1Lk3uB",
  "key24": "3xvJ3ajpvMVgmwFGMULYAH2m8ieV3o8JegARnV13B5wco2UoR2vEsSeVp7gRH7d7KKRtUFwXhHouuD7X6Qznusg5",
  "key25": "rjJVTyU6Wf3Kcm71NZP4YNwNasCTkwwMHAzk2q39WfNhKhZ9SmbWXvxwSbLPxZ8oezeLaodLPMr3SJNSnSBp2GZ",
  "key26": "3GRKGEpMBmzkycwUA2pScY5mFxgg74QBUDwZKDsLUYw8Uge7citv6xXSu2vrsYAaEHW5taCUC6KjxPDooxHwZh1b",
  "key27": "4TcaxPt8seogGWSxLQwas4E2EWjxTLBFoDkEL3RckbFfcVBrLW6h5BdKXTWtSiMGLQNV1Z5gRRi6YjbEMoSUAYoP",
  "key28": "3ypG937RMoicTewYEak7TNTwdBfvCeVhCp8uEWbBXM23d5Ss99U4Cu9ipGsPscxhT7WKMsYjTffxPmjRixpzAcLj",
  "key29": "L4ngnxt6BURgN5oQVq5zVM6T3DFazCQfhFX6mApemHPARMLBRMM4uyoi7SdsRsXGGqXJbgrmk1WdxwVAzkvXQ5c",
  "key30": "6VyQj2rf4Lk4LQxKjwN7buRHDRbvhwFMZE4DaqP38iMXj268k8mj1wPD6RnhKNHz6HFH9Qs6aLbMRiMDcPLFDze",
  "key31": "3airjpbXY5tNvpk9fn4xvmKF1MwqGuhouc9o62LWM4QLjnCYBXEoGCWj2sFicSXZTK1nkSZqJVoTLsJFoDVmNSKz",
  "key32": "6WCrJCYbagRfnmsd3NwJtVA4iZvQjHS9Ba4e4Z9SfS65FzJzoj4mw3Mh5NGuyqMvyQBA6PB2sKPUgWYTHAACGZN",
  "key33": "5jQUofGEh8kdg6zygyz5dpaq2Z3nA6R5UaiqvhhNKHW9h5sE2BrFc3G8dEUbkMJKjAc1JVKp2KkdLjDHgjsGrDGD",
  "key34": "5dqsYLNHuApe2kH9ucn2Vbkuq7TG8PirLUcNfc84tamfWcnEcZ7pvX7yXR3uENSYAarkRaMR3sEoxAsVSHbxwsFg",
  "key35": "5AhdzBVk7Bs35Cx3WNKwTwNBUiwpUHtXVj3jYVhuTSFzWsZPdTp2iY2szGLdXJxsspoR4mP5aYN4ViLmq5EZAS3s"
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
