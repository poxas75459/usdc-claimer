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
    "2taTGiYYsKiY3tSehC5Bf2JtQHpjoVZFCU8c1qVnzFwcLfCZathY5MkdkEJg9bFzREtDYY5KJsMoWmH5K5p3yH1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdJx3G3pu7CQhtHfNotKX2rQgknzVs7fLuJpmBmQsgPdXsCkkaEFB6PSuXbwayrMcSD4tWA2FTChjeRieXAoN5j",
  "key1": "4bBJX8KQ8EH2qhDsny7sLvkb8vGam3PGGgoLVXZKfi3m8fz4NoUa4bpZuEdSMJqtryPgCkvJw5pxu4Pqy68BwRdp",
  "key2": "tfyxMoL6iCDUWTGThbFWWxiC2TiQ3K2MLE5p6QnUETfRBENZFKdVfw7mS8TRUmkG2NikNniFxhHUpGADKxYVDkd",
  "key3": "3j44xjz1CPQkrc5oJm82SzNFywtwVVAKnZejvzqmK5fuYZnoxkZnDugSPPcGwCgLdWaT1qhtNL4th31r5U4Mo5b5",
  "key4": "1VV8YEnBF3ztrtuHMBo4DQ1g46q99dtzckZSoU3CPfBhtVzP4roc24Qfp35G5mBTLP2eVpSX3AiqiTKzscgiSzQ",
  "key5": "4ZS7an49CYX9E4oBvdHisnqZWC6xUgvLEbfiZURibzpFvi1edUHKG27vGonrh2JF8gYdR3r4zm2K9SYAYMLR12FQ",
  "key6": "XWKn1YeoLefH4T1sihsFE9Ya6KWK4erHd3NHddQG1n68K9pEqPzyfwjpDQ9M1nFC5otoNg3rzTweeoc4Ai9nNGu",
  "key7": "5vuSyjHJoNV9Z3KiVdceSe9RXjnfN2tBtGYx4U8Poqd2NuhqdaZcKddPB4jP3FyeBqG8pvry4qA9P7qPhrakTYa5",
  "key8": "23HCfMwY1Xj2cAwAJMdEzBAXHJpysWAvFfaCowxMVVArsiHhTV2DP54QBdtdRDk6e8snrGHqUteECMhW8k2UQTzP",
  "key9": "5F38f2vX5zPxhMdr34r2FGhLe3z1xahPokRfYuZ7TE7suj3soARAQqdVFu7CqaDtVTsqr5g69m8eWCTUbAnm6qJQ",
  "key10": "4VrseFkCGoYMKXgVG8eJSsZ9HNk3DUdQ6aThEAXTfEbSvwRoBRqqydznxhz1dHGmDgAqAn3khsaWDADqNLCBPHsw",
  "key11": "3fYFnpDeCH9Xbzrd5TnGSzMSfyx14zG19L6i95mkkerKY1sVYV3uxQAy5sMmrcjnDQAw54oAPcTHHLugMExr1m5L",
  "key12": "4qwyNwT2oBz7CeGeNZ4JYx7vFbm2jKheeDc3XJrtoMQyqb679TrHbGevDMmHUMLmCbN4mwv3fUnwA6Umf3n2ZEQp",
  "key13": "5kDwYS6GX9XrKNcFFJmnBXVKb7E3iDngAPZkNRRq6pS6QgesGvL4RNL1TQ1ZyxfYBhGUQcXx16UP2tf5qVHLYNf",
  "key14": "5pbXZmEkrwU3t84zwxive2CLLNWmdnbgFkHz9TDjCHoH8VfmgzAy9s4x33PDuhEjzaTFKdn1Ja4sm2Lsnh3fDzEP",
  "key15": "4Q5Jma5PYRKeVn8tPtYkbF1KjZxpfmiVrQtqHKVWxq6miqnvuoyGoaNNPZDssQ1sUzCqPoUG2qKrWUB5GKPqSUAK",
  "key16": "3hWqZQfuc7EN8QBcNz4KB9j5547AgP3dTtS8kasUCJ1U1e5avACaaa547eySY2LkGRHLHyFdWSn82fe4iaMrZyb2",
  "key17": "51DV8pBWbxW3mfNv1DkyFpaUvYSbwdtg7q2wj34xbrnBiUTpY8k2sEmfxHQAjTvW2L6umpzG6eM9q7gAYuVzxY9y",
  "key18": "5Bzyw7FyFkrYKsuxKQUSPuJarLVfbPF36yXMMtxpTYM5oDWkF91VcipReSdLaZo43nsFMpPwtgEXDgemd4invBxK",
  "key19": "LDMmbyY8wnHUgn9J3TW9RfezZnZJNFAGfmf1zeMGVBLZZe5zebzrpF1E4vLGN5dNZvs2FSkpP5iyJMWgAdbc9C4",
  "key20": "2EJkDVQofKVQ3DAuAZSefvMKgkVhjMbAQT3s9AnPWKGnkrEPyvZryhPfXKm6k8HKJ94fhnwK98qx3Ta9gUBGBokQ",
  "key21": "4q5DP1ZKtGWAjPJgxz45CcpNL6nVwwGSF7oCKNL6o1iFy9w47aYsSMSbeCoCRbrDfrzs5t1qwb9399bt5tQQ76kf",
  "key22": "4E9z1ezwczF17wZE69wuEZAvLauZCUPizNCjE9wGobY7aTUhX5P7EHfZoBwRMnwQW4Nj7Lco6FjxF42RuoCjPezc",
  "key23": "5Q2u76uZikcRo5vqhWPdUiQ4qWF4bY2p1trfWadGkhGUqC1wPoQYm9eTWmujmmv11NFHLBYnqC38tRWhp2hovMfF",
  "key24": "5qxzxbnB3bQGxrf88SpHqPvxUCgk1bYTuTd91JWSupyRK1NFTe4y12meeEudMQzXqDY3icPvc2LAz2yspgoCANr",
  "key25": "41x2XQWiPK8cifRbnPrdbaU3rhb8y7vKGm1saVX4yJMY3ozQdfKNTGTAsNxYrCKnsAH3abWRnxFkex9A4xxNi2yE",
  "key26": "3ZK1Bha3womK31tnbA5cLPrr7gxNSyV49FihGYuspFpWY6NmTMF6n6vB8fPuEcLYbj5ZZX6JJPEvb5kuhmjY9bdb",
  "key27": "5xGN6ogjn1QSFbSGkXAKbpBkZSty5cFJbze21JxbDvXXQAetXqd8bG2ipeB8BpjsS4AbvMWbjtZFcqiDSNSbS3ts",
  "key28": "bTXZwK6nfPizS4DScR345oGd6uYtWWyocqzUKAcDTUeXKDV948pyCCFh5EWaL4kSGH248Z1BgckdLDn2TXNpSC1",
  "key29": "3VqYgH9HEzmVFq24Ro5wpJMpmkLFZfakKGBVF6L9z7eHHxjeKRV9phBx489AZBbQFmRJ7vAaARLpnHgW1t7Xnmu5",
  "key30": "3PycaPdDjhJNRCZTAikgL2DPf6pRTi7wWeTgZB3dWYnHJLjHqcJHEJzCLPNEiXgenCPzaceCfAiGhEvMko6m467q",
  "key31": "5F5RLXkFhKc14Gn2RzBLzjx2HTF4VYHk8iahytgwLYaKe5PREKwp7ZYpgsUwcffyZTXEreyGgjL2vTc73ahT6cCd",
  "key32": "44n1MsbT8K1AnUWE6DK1Ldt8suEnMuJ6RfWb7L52nrnemnd8thLusiFLvhcMez8wF86S1PoKc1P72gKbKthRgzus",
  "key33": "5Ua24CdFz8wRK2S9NE3hHD8Qhs8zmZf3zjymVAfSHTXQ6eQ8LH4kaMRV2tCrzzw285baZUTMtHdPgwhTpbJhEeua",
  "key34": "4saEQGZdJGMC2EUzHWXG1Co3Ee8YiHFcyajxqDjBcYynNawBESz6ZVaYiFhezp7rApYrnLvipY5VujJqVEorUmNp",
  "key35": "3FV39wnsp4uVHMKkJtgVPqV2Mfn1Z4ZXSnq8yigyLpevxmBzcxewVaWXGkwr8diAbgWirZwBmVMjLcNccVw8pRyq",
  "key36": "5KYytkdZh5m4hfNW4YstSTcwU2A7hUZ1f3gv4ipbNuHmYuMrnXnkE3hkhUDCTACDRN4hp7wuSW5xNMinhR3SvNHb",
  "key37": "33TdrhcdACrPC4Xt4ybJD55yfUq8rEcE35bXpov1PvjpQJiH8UvDof3WUb5aBZirzEsz7NnZDm3z6MArbUKuQ7yU",
  "key38": "bWGd85RZNfeq5YCbsUuszXJZCbShcwLTCZaGyZU39vg6nCzijindc4gEL7QYK1rVjiMmHgWCLpPPURx94Q7UVQ5",
  "key39": "2f6t2fwjYE2Ap1fjjpYiyHtBaiCUfRYvAkUq5fadSUxe1nBcyVpR86cp55f5upPmmcxmtJSXkA4NK8UAA1MAvLHF",
  "key40": "45RarhBGPkR9Kbmjv2vSBuudWdnFa23xUV2ERwaPt1Hwg2QsriHkByyhVAMjYMLnsUW9gfS3DpzyUMWcdnKmv1tJ",
  "key41": "4v9ojop8aQ46TmJVZFQo7dke9XVB5xWjmi9ACw3Yv7WKpgjeWxabwJvA2uezun2M61KQJiUHdpxKWoJGfTk23uxc",
  "key42": "4PwDs9aghrL9Beke5QnPzyWBFB9QPA8FEW1P4MyY8ynym2ydjmpPee2e5MLJSC2HhByoPfKtRj1VDX2Wm8pGp5zV",
  "key43": "36JoCxEbYB4NaijTobJCS83jwHdNBYG15bmejanmVWgWaffLqtCsuK6c1kBhMxoLwXWRyYCkppBQa6AGFiREM7ft",
  "key44": "26XyzWZkkv4QLHnNWtzysFxPyJq8XNbhcJkfmg873ZM3ubKzrVTmbGHEBiYkVYtC4WECVmAaUSMFgcJUFoFozrqK",
  "key45": "G2WRCsEMvgMdA6AmNWMmYeqY9q4Mh65QmnQ8p3ca3j6xeTFJQR4ArRQK6NBdEbWjMtWhVFVSnPPsbk1SXGGAPZU",
  "key46": "5tU79ZjUNr7tsezjkeoz15q44NsQDyeceTAXsbarQEP4U6CVbUaH7mxRqhVdrQYxFhDqW76oQ6LUzWwYTLishboK",
  "key47": "5c26vzHpQzu33LrKfJErX1sA2g1gZRAg3tyRqXC1z9mTbaemzCr9Y8R9wdT9yKWEpqXC551nDDgvqmTFnEt858Ga",
  "key48": "2hZkVpngcjg38XDhMoYSi6ydfUb79Gg4YVbiNw1kMSPizUBJkuvm4rZ33gxFZDFwN5hYC6sxm4vB6mAdfGYk6X2T"
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
