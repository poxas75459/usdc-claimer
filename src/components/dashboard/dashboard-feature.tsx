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
    "43thsKCdSh4k8nrrxspPmB3htvDvyneGYnMVC2493enX9LSbspgiyAS8FjdtKdvSs3JigScf7HJ5yWPTzZsxYtiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cGmdznDsyUhPBoUHtafV5sA3J1af9AvjBFRqavEbabKQHZYxEfYxUt1KFc58Eq7vbigZdQCpR6nXmbPXKmVspaD",
  "key1": "63CakUUzJHbJwKYSC78CVwNpHQ2CAHUeTrLVNnswS8u8gdy3QocaZ5N13J1FDcAHpgxs7grwqztWzPVyxTL9TMVY",
  "key2": "2i8kdbGqcanM9MUFUW6jkRpVyBTQo5HaqH8VrfacsPwMZ9SmAjdNEmmygFKxKuQFi1xGJnqVEyUog82W5PwuuorK",
  "key3": "46W1t38nZBu1ZD2PLMjiZrKQNV1aiCm4hiT3Z86QiBWqwCxcAZMvpMf8vkuxUNfDVwcHS48AVLEmAQck2ibk7vFB",
  "key4": "3w64HHSYRhzji5aFmTEmMa7ZQYg8dkSxNWnaGf5B4PDJ63Ejgv1K3aift2YBZWAxkxhsdBQHAZ8H9C5Vw6p2AqHd",
  "key5": "4fap8n4oHnis7ve5a272MKZtv2hc3WV7UrqF81o7kcMfZakj7UfoVXVge9ef6dB6fwXfThAHwyg2FrAxDAvBoCxb",
  "key6": "5s8rrrXTTeuzYQom8t6ycNswzXoxKQGRYGE4o26v5fTGj6jqnUmgWxFyHseUfTYpsmeBqKX9hR6QVtVXwrzFFMjX",
  "key7": "ZivtbDYKFoYzmfP3zqRZ281VbXjPBYqDvXWwBjgq9GhvjpG5j92Jg3Dsr2u1djSxXSzmtkb5zJoBhE7greYXmic",
  "key8": "4BJViMDZxH3nmWrPD8MU4jR2W6qaAajrDmm1kPw2Z228MnTAYE5jVBt19ENkAksWAsFmpvhcu1HngcQ14uTYcbHt",
  "key9": "4iSgss8jTvGXSu3NLBqFN68Nj1C5PUdmhdhmVJPCbzkyWXY7JqytErZbZSrae4P8t1B7AvsBpMofaRtDkuXxwZUh",
  "key10": "5G28oB8AH7eHZHfDpn1MmpfNXWzZgbCjGPLSYyG8Q29Bch6kTdZxST1GXwMJy4tmyWbKckampM1GhPmLvxANEJ5m",
  "key11": "2CHXeDBthg636D7jQvfufWD9kEVGUtLjEPikPC6Sh9KDWUhSn3KhAZeSkS1m3NzQtFVhVKZSRLX5FQotyxLcAZpr",
  "key12": "26xayw9fFpBPUa5vQYKMpCRkzsxVvC53SdPNoQWrAYdXhixuu7m4mR5aHLkSPyv1uLQm1psCrXPTRp6sFiGs817t",
  "key13": "4Td2yhMZibvqh6MNTZMguVJduKarywNxfpQDsH2Hacqb17P4AmPnrCp6yUp4WHTpab38S2Gw4AgRC5V15kzBrhLZ",
  "key14": "5iGt2iKzdCBXmcM3Vrk7DbsTcTyfWhKDsRasbmrh62Y3BPHoUshU1u8UjFjM8qde7MDjgNdhqh9ywL9Nbm66H11U",
  "key15": "3iyQgSvs6ZqJe93afSvVi51QxJCkH1DdVkDa7PJzsa79MeomWoPANkRaVsLGTpZ4NdSErDbVWARyrEiebj44XYHC",
  "key16": "zgNAnAyoQMBwRTCrateP26trThGyoEoXxr4QHNqFFf6mbjSXRUbiRTCuAqESTgcJU6htXa8hZi2FRgfbv6t9k3m",
  "key17": "2Y2vu2DdRqem4r1qAnpwMrWpg9y7nVA727fWLYoqG744UQB6Xt9F6qY9E4DLPFLjg1RMAZebk3r318NPEBaBXsv8",
  "key18": "s1t5kL5mscuxVf8G3UqEQpRpRRt7WvhvExVsFdhJr1jVyZMN3cKZ8fWR4wQyZRAJnG8WAGFfrVx5Mi7RMjJyQwC",
  "key19": "3aKAdFHuRu5yStwpeLKjQV6dozq6XEmYVhrFdVTp1gH2HXo5VpjZQnXzwskp2JwSjqJM1DzXKVaV7C6idSGJQohm",
  "key20": "5JRdfbmnaHr7qfuDLVJVqt59nzZUGKgxuhsf77krG6imDjSr6eda3MCF5CGr5FEthGLwH9wqSG2ZYyAeQCgxqJzo",
  "key21": "5nSPfB2nURVXm17uUNdVsChUSBtRjGJqFq9cnn1uwVRFqZL1NMJEUdHUpLAUDd1QugiRJ2PTWvreazZpVa6j3M81",
  "key22": "5NNNavm52XEzNNQQ1WczLshUpQKUUZy2VMHSVXdbh35WYBRdjwEoMWEr1QnZh7eeQ7sqePSpnWo3p2z4VNMjZSLU",
  "key23": "4p5ZcYgf998CDjQnZpYxcYXcx1jydykWvo32kZhk2DLda2WHASXfzL2x2bNPgRDA1Y1sKyzoXD7Vk2iB5vjAW4RH",
  "key24": "1jhZ1eiwThEkmmxgFZZFfp7zW1imdPmzknKpR1LPuVBfcsMZ4SVgsLhRNj72L9hSJvWbCPuG7VxGgbR3zd2QiWt",
  "key25": "5tRnRcAGuVnUgMmVAk89HYGKN7cvNadKx2xq6igU1QKm1FXAL2ji7qz7gcjjBh4Ujg5jgfbBabrepWP94gJsepgR",
  "key26": "2HztdGfkQnovddRAKbvYwVwYSUPVhAfkZdtXaQEnRFjb8LcBhqhg5N7sfPpASsawNPz51mNZAmXEfBpAJcqmUiqx",
  "key27": "3xWff3q8CoMcKEXM9a3CVaZSWxDPwMsyPJWeced8916ihsdjYQLVHJ9TZVXUTZwxcjJS8dHYKhLcndebPZGLFHbC",
  "key28": "4GygAhnFpbqpzr1yFYoXJgNp5bDLZiChYLiBbrdcV2nXCL8Bm3nsVCei7trfrpVpieqFDdbCzd2UHa64i2xq1hu8",
  "key29": "64SbSKtJPuFdoLYUMJwE8wjBK6ZB64RxvRWk76yjMA4tBku2PvKNwtQGnV2fqL2o8QTxxSnVe9edXwFN8aHmuaM2",
  "key30": "6ieeemkQqTmiHySWY9U9Bk4g4mqJu5tKi6i17hY3LPnUiQuFFZBoMvY9iVZKPM6pjaz9Jy3XBpVfSDLftREoBWC",
  "key31": "5F3uxSjgZSCAeN9n9xgDTubHat3VycN2RPyNmyU6LRTxm4CHqiQsSgC3XBaPnefi5GniTY3KUTfHAfA8pUdDEdv2",
  "key32": "85wuJ8BWhePUKqVTBnQHqiHAwZSKpetdP4fihpkzFzeW9MVzzy7igE8jDZu7iFAcSXTQT7nMrm4VnEmtDfCREgL"
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
