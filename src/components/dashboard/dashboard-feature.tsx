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
    "3vPqEygTZ4pPDe9He49JAgiW2jVJHo62PTSv7MQxuf8DHY5ZTmd4BFyCMDU5Tk8JgTQttEMdtFYWiVzyoge16YMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1SZ6xdh2PAjFoyDP1qfy7fqSHRjT7CxNh44nw3FqnDNKWX3FDE3NPwUMetPTW5o42PP32iGKZMFLjfoMLoFpZt",
  "key1": "3yKJvWJ5tQ56EcEjWHbWE3iX2cny7ukMHRRwyWrdSpdybDevt4UgVpDpNKaWMt25H8iNhks9CrZYbiT2UNchWK8v",
  "key2": "3fprcAx4WBQaWLy6YEVH4Uv8eZGaMUxc8GNM46tqsXpcrN1CXppuj5CjwJHNQJcuNFNYjE6NkBNgpKTpeQByRGvP",
  "key3": "5o5wZpwbxKiRN1KWL7YWHVq6tzE4RpZaf3hZCzqrZKfn9Mg3fMe98Q8RRMFtcq5gyFHKCBXAXMB7VWpH3xcoryCr",
  "key4": "2XpTfnnCKFiHUNPJobuofAUDoNmsoa9TjFKSkPEhwR96xwJimCpHDA1YrAKnALrFqyg3BwZuEHK7xDZtoBDi41Nk",
  "key5": "4QArZ2wahz7saQtp184PY96jViyk26DCvm257nrcH33aDMwMKiW8LQinULMuNdCsxxqVdQFuZKmCpJkggAioxzSW",
  "key6": "5oAXjnyoaKFnWs97PLzaoh61MzLEogEvrHErgevkaKBzufZjiJivA4Us4NHeEE5dyyVhFjR4zwcbywup48Vq2ziw",
  "key7": "7rhWYHwZffNECCkdj1etA3Pat5njnFW29kMuGSch3e5zGWm8AYKNRETMYfJ8uQgkM6KHB8FTd31G4oiggXTzdcp",
  "key8": "2kDrGXmAX7Jz2TBTmRMFGZW6xHvqGMtG5EtRdJjZVGMo5ojWaxPB5Crq2LcM6fotUTRW8fH64UNeM2yv3oSQecZT",
  "key9": "7Dx9vDkeLCtoSdXSq4Ygxkz1pHjkkB2EaSZAdVe75errvdWPTbSFm2MsPA2xfS7DgPjVtw2JSj6UU53B7fxve7L",
  "key10": "3iazkprBEhXsMy6FvZBE1SJSvVMbyejaLifFGfaB9nbUyrGpQxuspXN7S7f96fu1Sssmn4cg4kqcH7kyBgMCqyF7",
  "key11": "rHveigK1dkMFfdSCQdbsC4mUR2NawBkT5QJw1Vn8613ufDHJevKuquN8CtahvXBzewwwVubs7Jevaxt72MH3WMv",
  "key12": "gUXEHtKXJWTjVx2R96QxwSdKcmTfnrGvBDZGhMdZfvViHz2KbREGNVDGdME5GMSdY2ms2kQ4jKjyWGRaSohhqjh",
  "key13": "4MKqU1evcFLynVDz7jTVNwb7FYaj1tcAjB6kBdv79UPKtjea7ogFhtqNnHnkwQNW1DabZsHwyif4G8A9KoLxPyLd",
  "key14": "5z5LkN5gLN5EhaMgFX3G4nBeLSuaoPQXav4J2GPTZhcPPcGGhupg9ZdJJJJP1Z4aUXDkMpYMnH92NhZA74gir6Pj",
  "key15": "26yaepocTdTxXAUq65GFsyMLFQR25vcTA4ftHRYXcZ12H5tGqUUDgE2VZSLB16N45NavsnVPriD39rRXKqGDgGQJ",
  "key16": "3ne4JBuWZT3oXLz2pYj4q9N8MZz1wy21viaZbVHKUxkJkVqnBsrzUUGDjaJMxvyTGtpwxsnMh7pM1v9JZYv7hKzc",
  "key17": "4ar9ozNxRjXVc5LfW2sWEg8KrgL7suZwPUEj16LiUQVztqhBMscCUqH31JqENihRZzZE7GXfPhA9Bqbdq5aK2jKz",
  "key18": "53yK5MzAr6KPwXhZNNcUDM8EWezTo4DRQnQt1gxWZQLWQwZP4VrRbfn4EyZr17YxhS4vC5T9e1tXkaw28PUsF5oh",
  "key19": "3FyMxhpKNWWrb3ww6xUcZsWfuCNwj4Bv29V2EEARaFWzJ2CUGZEESXRz3jYyecUkyQbLdPkk1XsUFacCZ1GbGUNe",
  "key20": "3CvwpbAbks3N88fu8nZW2Jx8jZYBJQPJ4Z2yS6ktjPTUYk1twuQFtrLnhWPn8z6UkFcVMEXzqRukRNXZzY3iv8Wm",
  "key21": "2n8Kf8G2ESrZGJVFhF2mi1VULsnt8PCHwTjF3jRX8pJefYQpaN4Fv6N8GG5kTfsmdPeRWS7hSDSAzmH5rZ6Eh4ti",
  "key22": "53Lt1oqVrBYc6oN3B3i2QeLqHiDk8ATRwrY8A8jWv5ML8GEoYBuc551iNBVqb9cv5j1UJiYzZbkgFCCTT7sSGC4u",
  "key23": "jfnKdkm5YPiC52tewRXhTNj77zBjJkypfoEXsZtztnuv6oLSR2XnVqJWFZ6xjWHbUSbDF7yLD9FZi5BsMuyycGp",
  "key24": "63yyu5ctb6eDcquKGGH1v6iH12YUb7Lr6wZgBF7gHru1RgEtr9K4RJX4fwtAem9biYJEjZkerrWkU2Nv4npMT4qe",
  "key25": "4XGwQyH9jHiVygfqUXvg5qxYzC4UvDSoiJ5wPqbh2xJ7w2Zb92Thm1L4HpDTWeBNXui6a9LiW3o3hXaQexZvcA5K",
  "key26": "2poW2ZVvDNi88cy38EZDdQ3gyCkKrk794Rji9SEMsn75DxVeUB1HSvC791BLmPcJ489bzMzfj9JiqLPooC29BLeq",
  "key27": "27Z89YE425xTbxdqPhKhi5f6ycauRsJ4TsCUkhVjeF4ZjWY2o23xPRwfwV5GDLwjybHeWDJakSzCBivwtDKVKVQt",
  "key28": "4KYLrpryvh61oFQ4oXXosqqD777VZE8nd5QmTbz32Vf1EcA91nroux5Z9gWdeSo74xBdyihegcnQcAjWGcNp9HrL",
  "key29": "3NNQtGu777LuvUB73MTfHdMHov8YgoqFQqkRSPPsaPV14RTVan3bYFh35mrnSVEgTndeRJbAQRhKbLw32Bg64RX8",
  "key30": "5swE6RxqW7gyiDZdSsKNgb6kr87cdPn3KHPzpBqtkR1AWs54H6VesNmSNFcvt1xmgCZfTzLYd9xg8YcDCrGqKMX9",
  "key31": "2T11NcjsaUvsCPpYNJC3HBWBnYiJbxyyWATV5ptvd8EpPyjU9tJXDeBbQRmZ4Va41WiCus2BDj2BTnrzMKy5G4gv",
  "key32": "5Kz9BioYkBEu8nsqsx7WUGd9w4Tkf9uS5XNNRYUxWkvjHhqz6fegS9pQnY6gMBJ1undKu9Q7dGKaSW5XjFYEHZ5W",
  "key33": "LPZKugSDgPBBt3N8ez6i5ZpoZh9B22Re9PfMWJbhD3XSeUtfBDmAzwUcX46VdTnwkWXv9yobuinZ1TMw4KPg7Wo",
  "key34": "YMRPGbMEVNheNTkjdjsDkhoqggWT6i8LnkRbtEX8vZzUcbAqducsaLxBtPbDAWMKhVGFdR6xqGDX1FTdpqU5TNn",
  "key35": "5fpKhg2FnMtGi4Srauvwy2jpedvPVGwkwuzTRYEsvbsjQNQpRfkg7WLhZH7pXCkpkukdbjJxU7qKoffQGVgrUU2E",
  "key36": "5ts4cD8tBsKc5ZabJ74ZYf11JMUexp9eui9MmTjEcMkkxi85pws9Ujr2WDDwv255axV3stGtd6umk5Vj1iKTsyhW",
  "key37": "3ShYyW4T32N18Sq9JS1NHuEezbDymaGVgXgcPWUYLPcKVM8X57W9Qf4zgpuQJGPWBm47NLSQ7cc33zqMcjbKTro1",
  "key38": "32EoAp12PiQK5iVSVCdBWko1samoZAi28HNBW7KeTehoQYTj9P1QTfhWnkBcghxcHisVDaRbYZbitSL4tLGFoJKz",
  "key39": "3mV1zHiEdpgt3MyWknFE22q3xwJUJmE2AWTox6GsToLKKScWcwAp6puGYfstmgTahmDKKHxWGdocBPpAug9eb9LW",
  "key40": "41NWyHeXAHULVhZr1RVoFwcukr3wE7MCK2K6kCzejE9kjAjMtZgGzsnddcuiykVkWJuMBxyLw7mwmpTsEd6TUja7",
  "key41": "3L7fnjCRxrnKHkWHo6axraFQwdHonHLHrJRajrtQAXMcREJj2FYtKQvmtcgcDekMxpPdsdFMyh2ENtnr3gxczEgR",
  "key42": "4rHLwzCfAnoyBUx8aXbdzw3YFwRLmBvNxyyUCemaCZ9XCYbwEKZj8zv3xvJMMRhtXQDUcTYLdTHwT99jDwwUewb5",
  "key43": "2jGnteJ7vCPXAXkqSopdSGmzyTnd3Y4K4fpCHhYFoCbpGdL6MN3y67izzdLPm9ubi9b6gVBfMgKibYSMCaDDa4Yg",
  "key44": "2Yp9g25ziZfaZWPQWUTxeSsC7hayqTuvbrAXe5eybitRbMPJQAqXE3THotaLJVazyn9zkvg2Ne6PZyX1qJoL8TLm",
  "key45": "2e8D8ReZ7RNjJeyDvm2kWf9Nq5EPQcugJZZuU8fq172efVu2pKFyA7W4mEJ1Ajt6FbpfKbjJY1umE3UdkjRKnMsS",
  "key46": "4RCMgExvqmHMNUSd2zttFkN4SvUWck3BpqEUypQ1WNMAXxLMBQeR1vYzRvH8hX7QNGjpkhqVuhR4Fwq8HVxV4tZX"
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
