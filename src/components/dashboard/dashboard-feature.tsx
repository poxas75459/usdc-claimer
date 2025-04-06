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
    "2rskisLVxMqQZfV6L4dxBKT4t9acK2gA3XKPoSnt5W21q1E3gAp8hMzdnsyAkzHLsUCU2gqGXLyCMmUPo9Lb9RXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fozRyfmnWYxFuJyqSK6bCf3jRr27UaoSETSHCvdv1ZuaTZBnCaut9rS2QLHGbKXc3MvrjKuaU5yGEMXM3aSph3",
  "key1": "45UDBN2Y5FoZH4yPD9tCSiapbgNoG6Fk2EktiK9PTS4ZSpM8cs8eQtXcqhBf3abxqkznwRHSqGN5yvTbFk64tjtp",
  "key2": "4i5qHcq57bkVzm5PUGxHEPbexP2Mh7vxpffFTM7xNe5hjXo3CCcMCxDowLWfdga38NJ6XwDf6vaXTM2kxir8xuVN",
  "key3": "3bzKtwBCADcogPzkFBb9MKoYorFhZd8xZCiLaiGz3dCTU4QBs599KeUZyfpSdyeKqBBGA2yVuETWM6uWexGC8Rhk",
  "key4": "4BDvLBFTcyZ4mq5BjCFRZYMRHRE2sR5NSQ6qXZATQ5TLobdgoFoCywqMm7aJiAjTnoHhXx6b9zDJSZR9moQfa9bt",
  "key5": "2JsRqHix4cLv9QKJtAuDyJUfGm65YBpj2d7dTR5DeGwakRiuGgE1tYWzc75pEiazMJJKFyJkQmswk7mMwEa9uqvo",
  "key6": "5MknoLRTAyqecEv5Gqw5kzqg9NMV3sM47VbMqA96zsKX819r32sZNjnDbcUU4J3SyTwxvr5TTFLgyynVXJs2Cq3d",
  "key7": "2Ys56LEL9XjRnbJsYJi69X4UEvdfoAv19z8Km5HT1CisSrgr85qVtGAjC52ewGnSx9FLQX9vqceL63gN6jNeQ2qd",
  "key8": "3jmSRPgFSg3SpHZHNCy5gYnF1a9fiGpezm87B4yTDKnaLiTqD2qLPYw38xsg5miYGboYLJTGV7hKuLQwqcbmrnWf",
  "key9": "pgFe9jMytzHiGMMgT1eshnBQ5RNKLa26mHTuCejQ1iedMBi8hWeLtSLRkVVW3ByoJQJwoYPgBmbutHtta2iM9MP",
  "key10": "2XHbk3Zud5Azd8p4B9iQ5BH6aKTmfj2Beg9yXMVY7XiSLi13VW3RW3Y4x7SRs3YuGcFAkYJs1gCsmr9xWVRSx3Bg",
  "key11": "2oyiZromRykvt7i7QtYzvPao3734KGEDUewqukW6S4st6EkH7p54JM6zzkL4wUegR371WgvShvZjgGvruaTVJMH8",
  "key12": "4YjqLs2MSPTHoaSX9sJ6nHoJzhmg6acUWhr4Kci99xhmZoCjJ7tp8si7ScTPhpDLh6zX4CkrXbQ6ENExpwiC8dU2",
  "key13": "DAJMMLXwKvpJQmYfybLfkSkkPYiimr7cLaoXDj1joA9g5csRF2bu7bRCMZapXH517imy5rGduUMHHNhQoYhuUYg",
  "key14": "j68qo96snY8FDQyZXxXu3ydHD6nBcGx1cEz21Y63hPDn4qmCvZFzyV8YeUceK5anbFG9J42MAXiwg5mQqiuzXw2",
  "key15": "wS2sjrsrByiAupicTcQJ4uddNf5ddV4ZNNsDEwKGL9FUo97gDk1uta7uMyWK3rdAEkxRCRFPeVNYUQH5D5G1pob",
  "key16": "2Ckqhr1ifBr1u9RGgXMKXce3ufXkVhazNYqgHqLi1wJwu7FmxSeqYvf16eHtxBdG3A4rpwqKvHtTwibjtKFNy9yT",
  "key17": "5AAdccbZpZV18oikvjNaLrJDVw3c568KhaP2XV9HLQeYyiRnrgPJ924fKynNQRZbsVW7bYV1aWLCySu7zpWUHKYv",
  "key18": "3nFoQppGwEhXu5V9opgLHCrLjTrW9xM8jteKAoGAd7gTyLeL7iA2fhzRVrpTzDwmdFaVM516yHxT3bMPsiyhExDd",
  "key19": "TQExSgSskJvbgLyJYk71QYbHCiRmVFvmFiAB1uKVVvMUL58VxhBLbXrjtMmzWwaXb6eq3mG3ArAQ1FLSKAdpvDs",
  "key20": "2ccD83wjEFNEwRYGG63Sr5vJP4bN55A2EByBnJpi9BwW7yj9BtvGAnFMHYEAbFF1qTrZ3MvFQFj6TXzhACyi2uvv",
  "key21": "5baLFXS7GhiSmP6PYRFg7bBc2YhmYXeM3UgLNvZcyz4sc5ZiHPDTGXr3VpswmfbgZu5h8P8SBtudSQeLx3TRGZ8E",
  "key22": "3QW192t9XZxeWb7rBhC91KiybE9YiLaFMLGxgXUxsSmbuwRFX2vfxUW5FhCdgG3Z14L4wt3r89mmAS1gLiAYR1yR",
  "key23": "4ZkmZZ8FyVTKbMhQ2oT2S4XSJSScE6fPXKBjQjzLUCzi8KarodVJ8sPDQnUtYaxjXrSonW3XxMU6esTow1PTKTwY",
  "key24": "5u426kdJDMFYbmujks58ZPpUx9Vor4yxDPXTrgHpKWD2wHE7ij2SR4TUN96EujQPabAggpnV82qMmMPnd7GYPBNH",
  "key25": "5UCaj9KZy9A7PraJSUdCK8szf2SeHBCipiczt3Rm1kedMnuiSp6tj3Az2ikqypsbFjNJKg617bryDFbX5Uss6A8y",
  "key26": "4TTvVmw2cW3Jz2rdYaBjH1EeYP4VaKKmVe4f2C9rykV9DL1rVq6jbxk2mgZ3RK3bBR3aoVq9vGvKWFEmrf1Dffre",
  "key27": "Ce2QtikVTFbmPPNjwFtfe3ePzb9PoR5yYfGreL8KZeC7Tpb4dRD3CDDFLArnLe4jdQ3m4Gev9ULQXVxHabBRsyY",
  "key28": "2nNiPPd7Yjg5Ha2ixnsu8xHzLqGKtEJXWySxagyTpw4UKSfzguuAKAUFXsy2iV7T5akY8RnaNoNXPrw7vU87qUmi",
  "key29": "3HwHeKhnJmvHNa3dVGYRdnXHcSQgQ18WQQjLsJrQohwsEXeNjeqMGZfBKtZFoyh4y18AdQqRiTAEuM7MzT8rHz8S",
  "key30": "3tKGi5NaPNQJZXUSVLjd9pnH2aU71M4gPQkqveLu4DeMcB5D8rXy4hSJvcMwxzYdZfsnvwWY22Lzwanuj8s8B71v",
  "key31": "2gGmc4pQUFjEoxQYNYxP5p3KQoJZzKUMv7s12frUc4jKG66E6ezKhf1vpNpwEQibJAgDixxioHgmu5F4KQGkYHCx",
  "key32": "2wnCLsdeUnvoo3ET8tz7kqMGTDHZyVQ215y96KBbSdsTyGD1RhD5zC2arXLbVm8hSZGivHck5x1hxsUaVRMfLPB8",
  "key33": "415rLxS2xi7Ckuy95AWHgnj3omswhTDRo6PLrCdXsqC599fsExfHdXxfreCbYYat2KRRVUJb9tdXf2aXvBFn3NE5",
  "key34": "4LieyU7cYB2tis12HomLpDz5RXEictdu6ZBQ6HUYBbD5VLAX3P8huTYuxyEEovTS3GD3i729F65HyLKHXd3a5vis"
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
