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
    "47CyER1sKTjh5TCC5vz5zW9opqmhLbxRQZhLdNiaLdSBhWYAZKf1SWoLgLG8ZN1kjZ23NME2oeLjMrXYuai7PLpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "425A6Qb2BvMEpRbKdVgjeWZPbP9aePHpcG6B2nDNhNakgW2yV7E4sNHJnpo8HGpkfGHVpmhhFavsmq8Gi77WZrjN",
  "key1": "3BQs9fsQCFSv2eCvKs7VwBFtk7UCD5XSLmkb5ENhi1eeDxmxivzToVRmK6r1x2jAm86e1a5GFWGz3AhvkCQwEUM1",
  "key2": "iDAXavWyMtx57utvPNmFQGWB5PvjzBvKoKrgCurUrzpjUf66Mbwx7SZ3rfQor2fxCiRZg3DXtaod9psMDC3zGKe",
  "key3": "2WEB8E8JYmrG5HQigHauAy2UQrpMGegscY2pYxWUD4Z7qxjck1dFwEwFZrw5VYigf9RAWXhtZdGMADZ5feUfCqUc",
  "key4": "4MyfPYhi4DqqB42XZi5Gy9PmBuSdV3AFPd7demvWNkdwC1YsaUaT2G6dgsgZ1XPaDDvevRDXJ2CshgbUzy8YSzP6",
  "key5": "5TKJKDBWPnELP5iX8uvZa9zKajZZbV3kV4fpQJ7PoUWobUqM7iQM3wmZ2JiuZbSyKCy35EYaVwvwE1zC4LM7vYu5",
  "key6": "5a1FQyVrQe3cZT63MpM8o7B725zDByhEmpQR89DQhdWvUgPxPcpXitdNXbBC2sChFMqEvEG5frqjpcUamP79asf6",
  "key7": "4q84oPUekd37871PbiguM1LhC5J1dyyGV2pzGKLhbYc3vELvriyQ4AVA5Ez3DgdQrU5t2kRTzxdPgfTF6zLSiaU5",
  "key8": "5uJ1gWwetFn1A2tmdXpAE7PgcxVVREieCJ9EVN1odmm1ketTjPSyyzwPU6wMSPas3N3WDc4C1t7tAg1EKbA2DtzA",
  "key9": "382AWvfVZSzbfjEv2ehcjazmZGia3L6zC5e2Pb5n7gNqhy6PsDUXrvri59nAs6oHJ5CARnb52Hk4c998ysLh6F61",
  "key10": "kCFs4ctgDeSZh9ChGd8in17aJKrtoPK4LdxVTs9UHKWnsVbmPVhwpkHJrtMcyZ7XUFyh62p3AbhhxRqq3giXD3W",
  "key11": "3YFbfnFhT5P2sAmPBZjiij44bqm7PZtRyy96Voe1G4q1d82QUp1QcQTnAkpbZQE4DGLS7DgXVN3mZY5mfjfZ5he5",
  "key12": "2V1e1a4e5wVkvgUrzWYvH75mfKYccEUNvcdW21YTPgUEFG495jFidCTYzsP9PURXksWr4ZzrFWNvQfM831uyAjgt",
  "key13": "312J6wANGV2WNehHSLaZm2D4WDnU7evL2NkWZHiREJLLSp148cgb6EZwSjcFoYR5JwUpp2sLGEWJNUDfzi7L2Fma",
  "key14": "hMqJkRBwWNatuCAZAVmjfDEJavqUATNad5S1iKb3THYnpehsNuiJLG4oQwcFwKG1YYBUnEt6otDvvq1NJz7kQ9A",
  "key15": "5dSjtUyvvVezq2e8upedU7JmApVkNLqQskrwRTSERMGR2uoK8oGugp6H36QRNijEjFE8DH3WK4eprCsP47yPxVHW",
  "key16": "2b6mMExxH4EjGNfRFBDVWLYfVsbNgyZg9PQpDdimkdPyAZAFXBK43GzXqQPcq2ia6Rcbpmvauq6mzHNaDN3XH8ja",
  "key17": "xYorQzix16ffB32CyjEsYp68Wp5eMawdkNeueCrBqvhnuosjW7PjtCNJLVHDCe71zQQ1oJmGJsJzzp1VhnTyc43",
  "key18": "4xafC6d5UW5pi4s5EpBh9Wj7Duhx3s7fQLD8KutRT3xGKeBWACKo7HeFMwHjEm7G924ZwzyGQK5SXaA2ucS84bmn",
  "key19": "yhtTWQhsPxYTHZqr2t7P6Qedis9B4JZtbecKyiugcGGR4xpZDuL71ouzyipd7P3ELv6XQecSzySYoW51iT6LhDY",
  "key20": "2Ncwq7KjzSRozEZMwdrTCJGRZCNomSPbCmdEwLg1fgkGLwfdhNcLzxPhN4UEkvBk9UWk9GQuxXzqoz94jfGFZyk1",
  "key21": "5PGdqAW447o8XwibUbDugo9DhYx68BpDsThf1KmUFtHbGv9n2JegSrCj7JunVjGL6GNKReZQVuwvEpYGxS8iqyN7",
  "key22": "3GUBcuJqBdd3PYRuj4nhU3a4FM7ykv9T8VzP5SsFThQoMBMwP8Y34yPKhfJw43QRp6CEJ3enJVaAszXxmNjpmsL8",
  "key23": "HBMkAByor22P3oQoB44seSxkrtzppwuBKvRL9G33H5bAmY6ZAKTJJezsBusPNYNSNNj3X7fkwu7pMTTtAMiZRxQ",
  "key24": "3QGkFnKrpMtVBPB1eEKVpoQdFtYgDUeAWr39Zmtx21nfdCQ2bGKe5ugXmArxmiTJjdokGZ1vy5Px3WNMzBe8sKHM",
  "key25": "5sb44YHGTuejgAggFUKxMBoYPCb6jrdpKFkRPB2jJMKi3C3P1JbacMfGUyGYqnZXgft4noMj23kY2oFRmrt1PSuM",
  "key26": "49mGtxrEBPPSDRxeJQuX974L2WMudDERTXa8Sa9ftpTqrtuXu5Ng1LSDJZ2ByPEUb5LAptQU4uHhkSDZcdCCdTnB",
  "key27": "2sPMVwKiaDKcZTfnPqPTNgVx7B2MsKwBUAFbemW7c6tVFLdPaUA2JGsav83MLP5Gq6hKusUVLS1Y13mxvp1E7Us4",
  "key28": "5qD7jgD58cwbUrUM1xnNzGAougrWrVfoPxNToiPQjUuNn7XC2DYEhsV7wpKsh4smivbmtjd9KySSMipd8GSxBKXE",
  "key29": "2xnfsbRHVdkjAY9HK2CfKXahgXMT3wuKeiEMiP93E7S6BEuZ6bUvWP2qkXYuJKYyCjXFee1gYLiZtDoyWjk5KNHi",
  "key30": "2Np2m4NMvprg2d9dbhfJT6cR6BdxhRi3S3BMNPutTEDrCCFQBnp9dHKRmnB36tMMsCqBW7M3C1XdFaozFwsKVwUw",
  "key31": "3VmrYDqGF6BZpFaMzuUF3HsCjFQi8UDPr8czHvfF3FmWEmxWUTbQNvcAJ5NozMwdgPCRtEWEYGQAhwD5VQt2npth",
  "key32": "5Yek6kew8sNQGVfeFn4g4hPqbrdkKe7gqhj3iXkUsHberG1zamUcjA5bi94A1qoqob3mmYAant891TBtogyA7gyc",
  "key33": "49rcZUUmSZUwGrSaASwB9vBmKTWx1xZ8iFe77xkGNpwk3XmZttdByuUnB6vLVop82w6XaKuRpLNCPaxj9EA6x1tD"
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
