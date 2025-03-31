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
    "55Vc6FGMFpYkVNLMcTWHXmhWnpEpTjCMD1yQrSi1YhaxFzz7oH9CSZce6pSR8ry4HcDUJ5VaZmQtJ3xCbq2hfxZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YSgyepNy9JqkFezXw5CcDbNcwXnF2MwKsk8HMnRCrHWaqK8D2TBqgcdgEwUZDATgmpDXXxqY6CauSffgnyeT2Ca",
  "key1": "5UzkgJrZJ3upt7tvnZ5hQPsgCbmqKGwksTwHbF1ErjKiXHHkXf38PJrtchhwAnpLUT9RzTVfasqzaeBEsRnddNLh",
  "key2": "JcZkqWRzsQr2UCRgkVG3XnZaCVfEiMsZqea5UfeGEFG3v97KTpA9quepzHW39wANyT6zKsLbsGz93anNa697Eof",
  "key3": "RAML7TM2qtjY5d3t6Emn4yYyNHvhqz6y4RrMHyCbCyxc4zZRYVsiAvNmFXyN44FukQoHfRLNTVrm1F7gtpKRNA6",
  "key4": "41sjchjymfzWVuz8BoPyShX7nEK3mGZ3kktH6sueTE3nKQJvnSmSWEyiAkAWLTXb4bxoEco4hm8xmAUtE63zthxq",
  "key5": "zPgw2zAhYADJepmXRn44Vrti3F9c4yM8ZYKVpCC6qheWHt2gV13jmVQQSCLYRMbfD5k3yMLkzzPLUYcF5cSasUR",
  "key6": "iH89ByaTiPnKf38hS4qHgi9vfumd3CEkKkhkJ5ZArrgZpDdp45uuCFRCiNskwC2C3mjrXwopDDowN3oFqDAdPR6",
  "key7": "5cHfbNwkXpSs6zaT8Q51G7cuv89YFprc32L9ce4mX9VdKuAPcxpYhwTZE5DNGpAh1FSsfmRkLmPzPsZYvUaa2tAw",
  "key8": "3bMkcF3ggsfZZ1SHSDZCx4d3VEkN9q8iat1zoUFkzfzSKf3tC5nfTnDnrBvyNsBgq1fX2aHXvZEPuF9hzEfuy5Sv",
  "key9": "52sQTn6zKWTf3fcPDSzN9Mm5T8Rbkf6PSCp8TdRK2wZP4SwiRaV8TJSRLNe4XQDd5k9LjEm2vXgotKZZepfZDQyx",
  "key10": "AXwvGspGzTXUuqDJLUU6WKKb8oQMb8fT8LwLg2DX9weZdft7iudtULWQNrVc9McvZ8dU1mARcSDpGz8Pw4wtaBq",
  "key11": "2KCFtL7bLJm4gsby8nYsWwbGD67icwDfGHwUCtyk4kY97WYWCqSWrBQSKcRRGS3yxaVUL1pFDhHzLbNg77nLfQEW",
  "key12": "DcC33uNDntLqBp8h5ZLAXjAXzLYo87KfuUWGA31F1QwkaHGNnDQuSPwZXhohNHFjZ62jTaTARCbCDXzsEwshXgU",
  "key13": "2HoqAnSakZGtSGg3MfPAcB9U2wvxmha7H7ggMjvW4c2wQrsfPZAqEot2XHsJnFFxL6YugkWZAsfcJ8wPpk3CBNZu",
  "key14": "3wopAG67BjhRNKhqix6Vn9GRW6wi4PX6NmJSwFmcBfofwxTXd34mqq9rkgxq1RNPTXuYW2sGfkbyfx3VqcpRy3AE",
  "key15": "658RwArcJYYdZQt5HtB2DZBaeE4jJTBH37RwHG4p77D2X2DryRjL37zJQL91ae7ZyAaHR4WzJ1gAsUD86S3rnKZj",
  "key16": "4f3aX5sfkrCFKzjRPHZB6VuYyNkJFv3CsB7Kfdo4nT1JyXTPvUoBriFR6nLpKB2zCQHKp5emMPRkaBdM7DJQsnii",
  "key17": "7kjtu9A1PHyboj9yb3L1rGjKbWivmAvNBJr6v5Lh6KG3miw3ULt282TnMnu6aGXSE5X9hJu4sbXF7VSJJsUsa2y",
  "key18": "4dJGzzTtWZhjj2PoBDZUJUwwZgaYFknvRufY1HJZs2gxbn8Miqw9KxYpV8CSRTmcFZJu1kAecUWQVYqDP7rWoWaT",
  "key19": "52CcSD5HqMT69VRTEqS2cbef8se2Fw6V6fAK5RkbcacgD6zJzqmjvfXGFoebDrp1dV1vUWTHB5GP97aLGYR7ThNw",
  "key20": "4qYk584x7SAgQCeNEeLWSNeeN6RKtH2sgHNFaZKkKSAtetH8LkvUHja2Y7jQNsnc3DxheAmsczecWPxsTqwZwYWU",
  "key21": "2zWaJ3hboo14BzUkRyLVc2c4pUNAtkM8HWjV1TcfhM2uMf75mUzzyCpaEtV8prvAMcNu97i4mjVTsBT7zkoi623R",
  "key22": "5XXzC6uMLhE4iZca5CuUoHvXcAdEHtPEeVis8npqBvKaRhy8k4pFvRgvv7188gPXt5qZRJKwd33fNw9VGv5z6kCX",
  "key23": "3nZQUWiWhfEgbFx18EUbyhQE19Uu2PGewRhAmKVZNB4m6s2e4NivtGquF3gm6sAU8xx8Ghrak9Ua43Fd9YU1gWT5",
  "key24": "2myvdevvT5P4ZU2Ra6XuxkbAeEiL3ZjCqf2UJi3MZB9GMhdUiWWpePkssE5V2vjasdDmXwsy1CoHnrr32noJz6AZ",
  "key25": "58VKRtyHnZBTn3oJGEiGmzWj5ARgJbQ9MusKZL7sMpaYtXMVafvTQyitjyZb2WTzCk6v2DHh1UWjZDdMUgQvPTcc",
  "key26": "5aJjxbFJCZC7qaZLCmbSCpn1g7nNYPkJKMnotz56qyknDAK8qdFqcUtshm6Bz9ag2578HuSAd8H2LeTCRB3qViLW",
  "key27": "5dbm6WiJw3rwpvs5kkAGckQmrTbPFb7xRrpxcJTgW3AEf4vND8G9PXFpvWHnFBHtzWJxqgqfQ6e46yauErpwQJiU",
  "key28": "EEpVMGpHAfSJtPeEtQ4htW8Has4fnQ3hidp2aavGe7No6f7BKAm4m7C6UbTbpupZegzgpWzoSoHZyseaiAwx95X",
  "key29": "2gfmQaBrpcBjZjKUQrC98n8VRoqpEUuUPrTwtwPJPL7z4wPuS4tBNEiqKcJhCtPHyaVAhwwbcJu6i7mmoE5vg6qG",
  "key30": "35mxu5am8fKJmtMiUTF4hfqF3FoeoNNg7MbH1JhFBVSvMXcsPHRiojVVVEzLyXWJTCVbvSyTWkqELdBh7QmWmmYY",
  "key31": "djhvkh9AQRevrDWgYpXYxP88YaUNz89RpkA24XVUc1QHDZergNVXfPB93gydeptwF3W578d1YjHAgotsPdRnGVG",
  "key32": "5BRMA3v4JeXAe7LVzcXZ9rw7vmxkn7wSURWWUSJZHsR8W2EAiku1q7aRPZuAC8ro6YX71EBpPu8JJk75uWaeZqyY",
  "key33": "4DrxNDPmGiKafyFZik8NqwLfWbVDyTreisvwxiC2AZiDGBb846o2zfq7kHwEPqEtcq2UZxGV8yJDdvNKiRBVkv3m",
  "key34": "5iS7oNVto6qADijHz4zCTaAAxkoTMns8tdGnt4RqjJvegjUmKVvdHjoXjKs9bV1fBnYX8JimhmXJoBjD1qiNwAvP",
  "key35": "3bRm9a8wfrWosJth2NHJSWhcSRynw1Z2RjmNBTdPq1mpEhkzLMebkhtLepGkScvNtqK9TooQZy7PSGyX9GgSmyvk",
  "key36": "3xCSjFtNxJmQCdwmCD5X33JpYLcFS92bym3677YeJbaRHdFzkQ9P1wSR87FyDnezeBszi9fYdWBqzPmwXzfFjJvt",
  "key37": "nqE8hzvLjnoTJKY5Wfm12F86EjuaUVWNPT6wZQz4WihvWYWyTgsiEF526CsVzqdXi6mmpqYRGjifw4JHoxK9sRk",
  "key38": "3Jrxrvpkmm1JzzJUo2xp9PbHG3yXtRuQBHUUtpfaW1429dGyk6JnaCis9uCA4cghS21nGcn8QfKUwhHqRNFScnzu",
  "key39": "2sfizAREp9YQ957UYW7wy8gVTXm6mCtmj83JjmzHq5rcrfVPQD9YWTPXkbCoTCAyrWPD1qC5XA25ExtiXNZp8rZA",
  "key40": "HRXqPrUoEPawcQyBo7EXYQ8k25ZnPfns8GEGXiVqmynFjpCoDVjH8fn3cipWb1rQVUGYJjGKtMmMCFsKvoXCwg5",
  "key41": "3GJQyK8chdQKskfWDb5DLqM4JT8K63i4uKU71D2FHjuo8xT5pgKgFWoYV186P2EvA25TdLgoyAh8h5g5m9akLAEK",
  "key42": "51kqmgpT3j4yEXLwcRmfnfXhAxSzA5ScnWAd3RJRUsiCEVkpTSNWxrherqAWGP7atq2NKvybWETuWo3kfh9bcu8u",
  "key43": "3EBB3DTUVDU7HXfnpKXDwKisrsobVRN9UKsL56w8BdxJ4aArpUE6DJRetnta9JkP8DJJ9rdvMqmW2vAJdhJML9U8",
  "key44": "4zNJp2igqEuJrKKFQYdg1hfhQinw3mFswn4obRNs9aQzJ4rZwRb8DKhFDRzfz3Bz4Z1rpnax1wH1FVDLnoBnSkkt"
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
