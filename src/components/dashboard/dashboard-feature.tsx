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
    "VuSqyDM2VidXTQ35qWpj6GAyKqdSLhQhzqSEdyiSTVkbsFMFxRPqRD7215EDC6jVPgdKj5eeuZoS3rSu3i1wmg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YiSxsmowuXNE3K4uFA7KpW3YkxHpY97rraakbaFcz6yxB9FkDUdoYGPs4n28Wjp9Eamk9PNEi2Dwb1vqetywWTC",
  "key1": "3FEVD2y1qmYmUCgs98pn9tEkgiYG5o3bypRhBFHXFAjrzft8p9CVYLdVDsDnfo85kYVuMXKAExQzm8Q8dfMRU13m",
  "key2": "5aR7uegKu4jAm8sxyT2KbcDnQKY6ZpMd29rYCRYi4tCoXSHSwdzkBiY3J1jH8iPFRym7WTeGmFCb9nMDnHczyGx5",
  "key3": "5eSQ1FEXGHXws1oS1pcr3mRRqQrTUcyTkHPxPC7jXXt2oSrytbdY2bPbtrexkZNvKaCMGvzDgQALksxcyA7uzQxX",
  "key4": "3gXC5RGnU21e9DWRf1UCZhkXTYczNbVC637Wjat8PM8jjh6ZNyffyJ82uWWd9gaaFDxws4jhet4a4SWExg4nT2Pb",
  "key5": "64HnfkSrEevWsBub7Yo58dQXU62WtmcAu2emNcmi6YyxrBsNoYNb547ygDQbtjWBduPF2fFz6XN72fqj6HJeDTB",
  "key6": "5YFJMPm2Ery79aVpEvVwYQh7kM4NbQeWaB7a1WtygoWVXL7oAhSYi9qiSMU4Uxg3u7ZkPVHLJS1ec34oby5KwEqG",
  "key7": "2sbUJQS5UyH5rNxkgZRejX9g8HF6Jxyd1eFYjhPANv4PHoefWyM2vZJW5EqQ9jXXCi7148ehwTmrdFmFkiCWmNFW",
  "key8": "3RSLABPt4cs88zFnzu985WeB4oaQWnTyFpJapMw7R5wARVZPgnv9fJCpHWMkmHLRPQAkGomMqeEuYaUc1VaauKqf",
  "key9": "3bHvPTckQifgGPxGQHZsdtbYNGsSNTM4cxZjAnucvhDosMxb5Awpb6i3BmG8Npb99FutoDVWgEK8jLjm4KypGh1W",
  "key10": "2G7eSKVm7iQN2xyMZ8VXboKCwTZ88nB3t5YKRh5ejwS44y7MPhtsSWtFivkVFrEfD5t7PiWRFrXPRqTCsn4e5sfL",
  "key11": "TQK4h9V4rpmquSKC6MYjhDdDVLWWbAokaAkhyCujkW9PFnCrjF44syRwR3qmNSq4y2k1mbZPCGsEpzAHVoeM2RG",
  "key12": "4tT38ZdgxspkKhewP5Etkunr3b2H2oTWWPTqrUdf6CKVyPBmzVn7MqA1hfptdUWuiELfSdo3Y5KS1iXQhCER8Uq9",
  "key13": "3Bp2yc36DuKDPV2A5HcNXNYb2HrFxCPy2oSNYRzjxQpFcfKmZB4E5T7iVAKa2npYbdR9UuoSH81EUKQDCD9o3La1",
  "key14": "vLr2SR15HayHQRfY5BTjrVhLdXwLtvmP4vhAdvyubQctE1q9oWi6ijhA3MygNPn4a7P3rjYsRmuK99jubbUC1g4",
  "key15": "s9w4uuRsdV784LqUZetKhu7WqQBGLgMGLnpmnig1JXYhaEn2kDxqsWy6zD85mxMnqaqmEJfVPLnBvq7eP6p6G47",
  "key16": "4mUx2o4xaxRyxDBMQfenoLXGjt6mmv3HeZiiPQzu79wkfaNS6e2b8KAB52ww8reG2qrN7BjdQWbA3V8GRHRH7ALJ",
  "key17": "4mxo4VFoRuNupGTmo7kBaXYvcfTXbb1KX2Wcp48n66RX8p6HL4FVjZF9DtPwZ8Vapb4isumWBNVrsGkWBE6E7B83",
  "key18": "4XEmdnueHmMsERKtSqXfLcbAa3Zouej1XjqeEwyPhaViP3qtbY9PGuMKoU3VajbJDe5z5ErL7pWfqC3LgqmNzkXa",
  "key19": "4zchiZpqNyRzZExh4qLsDZ5Rkx8TVXAA2J3XVKFLAk37ZAmnJ1Kty4hmzDzWNErfAcBk3zwnLc6pC9zxGaSVVQPh",
  "key20": "5y44YG9Xy1H9yBpSuXVTu8GXznTFyMKHjPxn1ap8gs4a6ARWE78wHxwZZYNcY7ytvgfd9MERuEUXaWd8cEEm5JoB",
  "key21": "5GiGX7zqwUFCzssGdzYQvqtZKXGw9iW9ZVFP7kYtsjpkUX8zq59gMEByByHCFpXTouivvPT51pjyqjc9kgVuKZXc",
  "key22": "8X7jm3Sphn9ifptKVF9WpQzaWaSJpfMrZj1oZXVeegGtgdo5CV1fXmpM2mWGk7Di4yFHy5dUj7wGxJaYctropgf",
  "key23": "5d8WkERJsUxDQFYVSixriSRxeBNyJmhLiVwzUmWmpeFSKnATE3xnDf6t8qCwRHNet7ppvca4bGkp5QZCvM1ND2bM",
  "key24": "46A66mJF5vgKyc9fAwuMncH9uqfyvyRFR5DSjVVR13g1qqY3hcCeMAC2Es2dFaFuHPddVTjBRfyAVsYEtRgkwHVH",
  "key25": "bLp3duNJ6wS8C9dDTzaNqNVJzYkG3Y9SbUNWQuuFjWoutYRAYrUwFQFgHtgYcRZA7bSvnvE35fTnYTT4WB7sn3U",
  "key26": "4oFnU1CPrjqufZ9CUSYH1pc8Lx4uXSqnp53sjF3BsTrchPq4csvGUsK9sPf5JE8upPpdgFdCnK3NBibfPzi3TKxw",
  "key27": "3va2N44Xw9nxqPVsv2ge18bp5NNr8Etw5CsPfaCHuJ6soDHLPg6gM6hDJKECJxyaN56PNU1JSavdCZYvThrRFar4",
  "key28": "5dGx5WTYkMzSF8W7cXC7NggULA5MVgkiveaqYJrrgcPEZ5fEqFkCZrjoL6mtBUatzLa3B525S4fxFUVW9y5AXPXV",
  "key29": "438iB1SKphc6yzdaipQdifRsQonxSiShBeidxzDCTjNaDFdL57jrFH39XSAC2aEKMHcGuNfeUR2UWdGx9Ut3C35j",
  "key30": "2nuEFnB2ASdUd97qRRxPgVAzo3TaLwHNJS4ZoD2JrgmvN6zdWBFdgnCaTwyCmqga685gebbwMkAVgHcaVkA2KHf6",
  "key31": "Enq4Dbf6X1XGafughzwaNkjh5b1mDkde2w5Y1nbq6iVDokxWB53EpSauZDsJWagvhjNUZshLgbC9S98JTb2UraX",
  "key32": "5KRD1vYW8VRjCXZ1YYH3NeeqWkdLFJh2NnctuBkFsLRhx9bYEqN96YD4kx9eqyupxD8PbPs1MyLcnMi2u1BtVkvt",
  "key33": "3DKT9YgoVE8pzntKB1dgo5139fj9peiUG6grKZh8XCwnQ5qS9urmSRMJ3d2rEuhrNMdmnBnxJDV7fMPYFf6r3WuK",
  "key34": "5ELUNLPSQDNjPbG5keHtBxmsNTGz2UY2NsoWSeJyXoy5b1cWKEWtBPiyBQ27FLQUGt5eXyLWM4Pw7ztX5e1Hu6UK",
  "key35": "65gBQMvw1f8T8RBAAF9sLTDERPg44Nyaf5rgEiDruDitC5y4UGyxCqReSxYUYDjYuMDHCJ49BYUBX4yPSkyWSN14",
  "key36": "2evtJ3KqNcH6EjiBJWUmw59hb6GYKnP1eLceiqegEoqNaLmU2ekSHxmmhLsh6dNYVAbkMBUzgcGz4tsUeB69W1Kn",
  "key37": "579KMZq1yA2UGvKD7wQK7e9hF9wP8FdKeWUaXc6SLNNT5TaJ8Tj9goPsBwmg2nbbZbwokQD4oVQxm94oDRYsTRm4",
  "key38": "3pR1un4Ln13r9qPEzhRAaAsNYwQnM9UT1AxixfBQY8NHbAVbjAUCoWo4w87bEqjLFSqCzhNNFrvTP9Tezb4SwCR1",
  "key39": "3vZ8FjBEu29G58tohVS8NBPC8jnYQ7CHJ6YJDV6yyT5df9odTUvdojg2kU4P2Pnr289Nn4RB3iN2nB3pW9539F6j",
  "key40": "2ChP7GXqT6MYu9nLoVDUET6RkZjEmHxG8Z2kdqx9C12bJWCukRFARnqY6oXfiGx7CqRG5s2tRdGWeE3doMsXqie5",
  "key41": "4rXELKgjAvGU5TuntoYbicEYusQcDF8Czx3Ff1pNvbBNBqu9hxRUbCw66vHU5PpPMTdEZDqBJRBd6rZgqmWgtt4s"
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
