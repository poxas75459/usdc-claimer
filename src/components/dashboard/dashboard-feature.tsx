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
    "5febgAMvjugvrLTWkk6RWNmC83dRXjG7dEHeL8TE1Z7gn6njw2MHU34fgFx2HffdJjgg3KqSWMCE7pKFaXY9FxtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNkxyUX2XeVEzNHS4bPvDsDT43keqJWEmLgTySbzrVDqzVA8M8WhX9MTuMMLpcQ7nkbH8w5CLUiuDCaZC5tug2E",
  "key1": "arZyjMH91evaUYhU63LGRhRn3ibRo4biNxVeXEBcm8YMPvZwfaLHgchA6uCnVCFA7iiWVNMZgcqRZbud9unyysr",
  "key2": "3vcDvAvSSEhPsBooAjsaEXxeMww3G3Tttv5M41Q2ykMSbzdB7XBbg81ikEDAk7UH833Zhdb5XoMNEPhKXZd3r8ry",
  "key3": "4Uv9CeZPcwKC2fZrUqFATDRhSbxfDTEwGZ2UpCMS9nCQngxifcZrbdutbMzjHNa3YEVrPZF4tRU8EqVfUYFWZhvt",
  "key4": "3V4Cv541sKR23CsTmY9BYBLiCtCjzQ5dpLRfwYugRr5ZHRG52Whhnoc57jiRMuz9cX8HFMSKHG4vsF5GPVuG6i2R",
  "key5": "51Y9GWquBtKNCfd7e9ZLpEcoy75HBrAX2hY67h8jYrWoju4iY3X8NRY8HYALEpV11d6y6tbjVcLSaScjcHsbnuSw",
  "key6": "34sfHgEERqtoCN85J6VejuLCViF5YzLJJ5HATZeWCj2GjhzPxcZRuY6uiso3c1i6yFWe6AdjAGBZ4yrhFWWpZSsR",
  "key7": "5yfTfgVzGpm9TMa67VrRwf1pZUwQFghqpVxWvFeF56CEUtEYDFEoJRZiHKgWHHYmXdSxn3WU3yxoRQEXCMQ4YkCh",
  "key8": "37v6LFBdZ1iWog7f6z2KHFF1uYCxNrKZUNs4w3Axys6wRTwf7bESyWA91Rgd9twH3gicsYGm1TVSPFMYYDWzavh5",
  "key9": "3JsmWmVcY5J6nyWNK5j2tPxbWMToegoBTYDuQpc5kkpTe3ywEYZVcqGB7MDDZCHzhf48QoGLvB7Cacyj1bfRGEXP",
  "key10": "5hndepjfqko5JN3L1AsPYKGrhZwAAU39i2aQVPqgH2NukEnnFMPL2oYwNdyJwJw5fkBbrjz1mG8cqMBTNQVTAYQ3",
  "key11": "XXovyVXaYHhYsuVxect1vhuUmgoFL8xas1vJcBwsPzonM7uLcTCxqq46UUgGbgGV6zA7jxfAKDaCUJXrQA9617R",
  "key12": "249mDvRGzBsi8y4H9bgKJ4A4qoraFgeUpJbSqeKoHFePAYN78ZFF5xYVTrJd6x5q1SbH4HmBAjdbQb4E4RAkbaaB",
  "key13": "2GhyDVrY7QXr6XPzRNGLFAVSxmLjhnVENXXeyJyyVMZsCCvngi8fbGJqdZffMPJuj9YcAVJkp1UiHJZBgr5mfe5k",
  "key14": "3bEKyBA7bz5GbQxUCVmf6uRTnEFEyUeHWsdHmEUHcQ5uds7VuvPXp73MjCUKxG7dHrckBPtNiLGJG6g672KWSTkA",
  "key15": "3YWYojEr8hk46mBgztqqyPdWyXovVrPjZmnBZphUi4E2TLEJzfiwbodVKWh8aJFNN72VLKHkE9TD8tn2TV1STyF5",
  "key16": "gLzNhuTi1Ckd1YDA2wHPp18W7ptE6EDAz2t9dPSUw1RS5yr4qZiDQuyqadvrsRqAPmCtBsBezBHGDtTWGhHaiq3",
  "key17": "5pth14hG2LqV1swM1uirihXHkSQYHgHn45eJTuAqkboEyUviLUARTn122orqqRSGcQnGjhWrSXHubiEPvt7S2Bhz",
  "key18": "4VmRGjGE9RVub5XQ21eA1CGVS9MfXTDPtSnx9sdD6KoSh7PNz3DFha43X2yNDUGK5Xwutt9ogk5To9ByFE6Vn4UE",
  "key19": "3RZpUhe1pkR5oFqY3eeAHGbHEXgDWbYAiqQ9KGd5we35Xrj9Zgo6HPyg97JSX4oEAmo4bhPKWsRAcZA2npbAmmVG",
  "key20": "4dyRYCxWq8HYVtM4nurWa5MkBS9vBf27ZYb7jvBCcdayKaXeGTiubmaULzfswdrW4Q9Csw2P1u5WwYR9ko2SMGt9",
  "key21": "5xajnTPcXhxh2mMPNaXTkojgxzYRnLR5AomrFw9VVbEWhaNyzdc29oSzUmADwhhuY7nGmuaqo7wCZeELAaMJcxnA",
  "key22": "P8NipvKmmZo3XoQmRTZneyUUt4XQR5rM8eg5YSzk74d1qwsHy7WVbb9Ahn3sqe4XYF5AYAKTd5wYJx4sEpW8Fzq",
  "key23": "2N9nXPATJ3dNScSTRzsQFNJaj24V1m6H8Jj1TLvdhuve2H33SXKJJKLR5Pet5obnjTbwN6opErw8Y95BAR41Eb89",
  "key24": "275zvbHcCSXBY8g3D9kPAs1TRDh9rKTLGNkyRBWnBbM8FUqW3H22HBs1vxzo6kpEwXmYkXcsQRBiXMueFSxSK4W1",
  "key25": "4982K8vkhjiSzAWbzni3suXfhqJdy5DT5pDqFyH6BeTF6jBK4KvriLXzeiFyA8aZs4Fivb26Mxm9p1HY6orHsscW",
  "key26": "4uR89CmEmXMGXCUJoMqeKArXNuSX1pTcA5aWoQUfvZQ3ZZquBn1fe8GpSf1hgFbVies9fJm2iRRfcv4F5nTmKunA",
  "key27": "4hTvzF1aZtrrdhngdh4nTx8UcjQpao2Z2NtCjcpk3wucycUj8yuSEiiHx58yMUjDPukzG6Pbo9JnGTzmyPQSZJ8G",
  "key28": "41bVtaRd1ZkfWBQxwysq7uriCDBTKSV88kGgEgYYrGFAqYM8DBkj2XocW3FCdSwZH8mnJuDEvC74Lj34i7ymnEaA",
  "key29": "2Kj8p5Gmvkte7Jf1p89izxjRbnUvD3jPn7xjSVzn2AvMSkLdfH5484BZbfZWs9ftVrFKKhqKqcuKu6LZn2vQypGj",
  "key30": "2WeUZLSnpPqR61wnM4Po24x3maHTguJeA6CWKzE6cL9jKgKy3hpNbTpxAZP2kF9bUXcnfRPs7MZFXXsX81mxf94y",
  "key31": "2oboiGQNNoCzodR71aLQGijhFAtHCYn1vrYhM1dLQGrkm7ExnqB2dqnr8wW1uvsE8UtK65eM1qoaCVMdHRwXaDuz",
  "key32": "2dG8knTimH8KGiFXmvtvin4ZJER5TQUqs35ve1atqkWLT3snpU5P1gdFnk2hpGj55j926uTCR3AjrMVaA4xTbYVN",
  "key33": "4tEsV6ueonJ5tzorpcx2UfZzGWbNuPiSxH3rRTvdHAEcDdLT3b1WB6GwNLDNTYunLv2WwsnXVAPMwXMvcDS9xfey",
  "key34": "3rU88CanDnXbwtshB8FWhUW1ip21FZTGS3uwE3En2DuCq5yoPXiSyxF9NnNLo4bLPg37g69LFrs5F3ctfuaKHuiv",
  "key35": "48k6fXZRXQbP4sU3ZFqmSs6qfmynthmxmcqWHiPJyz9uVvjimoMXfAeL6qoQpGspMiC7oTM64e7LvYjSmgxZvJn3",
  "key36": "2r9QwaXaAhMDTPL71aVzoDC2mid562epjdyH3jRgrwDn88kfqwXnbbutUYK8jzYrv6yc9JZVSgC3Tntktejf7ihC",
  "key37": "4D3YncsssPjKCkHW6BmuwRXgf5GYAzw6PGgyHEnRUt4HSaTtNqQG7AoVHsxnnMm9GdWBrrJcPr2aXdFG1D3GH9a9",
  "key38": "4NjgapPbMR4roEe9sAFKuXZTcwhSc1a96sMSRCCRnrjm2VAXfSffzvv1rS8KJMNFbap9rU5aKmDTkrCrvvN89L2K",
  "key39": "MC8e5gjnr6MSz4gtovmHHQc7PQtqfQZjceKLw6AdTyWVE1SeJfWRJoUWTe3HdZx9puVJYiCC87fyzSK6T2D5CfJ",
  "key40": "HSMT9kGXwBZNEynjrbhDfPXLgt14FNNUCrF11jSUXQoBArN5a6itZh3pYmu6otPo9yGFnyyB6L5EPgdzVWrJ5p3",
  "key41": "2euoqcNvW7Qkf5Vq7GMGcnSrB9mgup7zod8TCFJZr2UCjHE5NjNXJW78tDtHfYu9KLwpHoAEg7YoC7QDMejRSFqx"
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
