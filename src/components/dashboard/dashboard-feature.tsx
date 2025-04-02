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
    "35r3PejfHd4MeiFgx7Yn1jm5i3wXxoCNLdLEsB84Gxw5dbXBXUGifhXmMp39fhanUXoHWHMzRk4w7GmzJihwgQgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i48vXoCh6cCqXMmwwo732PMFybrEAfb1RQnhzeHuepv7UMHrJY9kqTxCXKnWDX2oB49S5XmBZ2o6MXiazWFH2CT",
  "key1": "4C25qrmUSXPGj8E8Z3AGoTQRJL2RxXhu7E3Y7CBCzDdyKS7aEiPTLrdNnVR1GHVBukUzrHU5cR5XRxAk4STo4pi8",
  "key2": "3cdCADMXJC4SASJQHijoYDGAuo7z76EyA2DGkrf1nvxvrNz6Mn4fC2WjXSTjuXZhBXCbE8j4wHRSNzPa7oxsFZLQ",
  "key3": "5wrYrSAxmYLsUfXCiZ8bxLyDm9SRHScZ5TssrW4VqZXxTydCadKKLH5C6SDM63UiDmDdrWCv68qHzxqFGqKAnvhC",
  "key4": "4onvjYH4qDnZrBqDWVUaJ4iAkPMfb49u8k1H32s9is9hHT6W4F8wn4UbpAp8WB2YUjSmBM3QcgzZ6sEsGF9uuEsi",
  "key5": "H58VVkdEMfXUj4EVC71m4hTVpg8ZxbB6BqdX6gBi5AeznbAWmBvk5eoopLzGNfKTJz9TM8BfZ7FbGjwqukbvnUm",
  "key6": "3wvZG1nuijqNcoXTDCD4eZCNjKvLJdqyYMTh8DxBfNKTxeh2JxxbYNnVR1uHJ6AdbPb1ubg86WsDTAeJoXjbKScD",
  "key7": "3JSS5y6R1Wx1W2GzxKsA5oT7giZM8VjVQ7CaPqusNf5PQgEyfLDR8QSD1q9kaHds4kvJDqKJmkNDvWnAf1ZZ8PJg",
  "key8": "nmVxfh54dAxBDFwHbwGsqfy4yV29ht5SMRQv5LRBtqLha31KJGsXAp9omVjt2T5nhgXrM3KUp3nJhTkqV6SRDrE",
  "key9": "21TvP2A1kQZAMN82QtJwayzfqXHAnS4N5ZxLuPSdLXGFY2vJBCpbtiPkKySBKUVrLXCoxcQH3kozmENFYBkNXWPf",
  "key10": "2JyxSGjc2ov5BJE3eYXXoTVm7QSgCYY83Fy119VbHbM9vPp59HSrn7VgtTcvjNndmgKuyHrWTHxqpqpJBVPpH8eH",
  "key11": "2vghdodvM9982i4c6NkxgaVi1N3TJMGeQJxncZT6VyQFsBvNSQMtZ3qzAGBzrY8j7CXNogp8y8tDLAp9cZPRUZqJ",
  "key12": "5rDjh6i2QYYNieakn1iJvtdFBnJmvRvXLURJka8Hgx2roGwcin33DMvFiZX3ryzQsSBFo4soBuUfeZXq3L9bBj23",
  "key13": "5sdnMncpyT1fWmzRxGH6ZpQD96aGNHTtFEpngot1fFKf3G9dzSdtLKY1WBBTrRUg1DkbHMVZq3E1vxWdMjAmvutQ",
  "key14": "65oQUEUeNf7rDeqS8M8V9FHG4xbmX3wKQGV1HPRbwyayCBxbgMMHG3x1AEDUCwzA7a6c8dNPGMmwE9kQ3vpkvWCX",
  "key15": "4kFNw3YKFgeUeeWYBeWBsXupeRgoVphB17iVJVhd1cdBFmJ5S3GMyz8WsE3Mn5tar7QjKpQohfkfbndqiofTcaje",
  "key16": "21io26nKug7X3ojpMXxYWqXJEqmL3SsXkVsJPZiTUfG65EGc9SwFZFDkZJoorcyLpZkgvffoJguWF1bjpLQ88yDm",
  "key17": "4Wpa9DkLMjyDuRDuJ6at13K4F2gqk3mnX6Hyn4StwJefZ77XBZdgSZxNMAFPxSKHFqhkbHTTLH4cKfqr9edhNzm6",
  "key18": "3YcxfsedhgGSdP1MY2VrvBvjVu2e1ucHJtNwNjGKhVmR3MtwQNctn4WrSgkenKsW3XGjoNFnyEFuhyc4AS4oa7EB",
  "key19": "3fqX8uDKhFWRhJ9YAyaWQdSfYANWw7rjbAiBvWsQB3GRs2hgsq6ntSbnGv1jL1zBAHKqNSXAxhDY6EK5jegMYHP8",
  "key20": "5ka1vEaV4wkTrVCox64zAaRMHA62X2HDxMYTfwkPKfHfFPCeMU5nK5bcGjH2sicqk5MnoecVouzVVNNdET2tL1BT",
  "key21": "2V4wBGeEV8vggMmxX596xj9g9vvemURkEwzKFahpDAgPXanx9Me7shZdzVibUiddccZjXJoaQqBzY3vLfwrxxDwn",
  "key22": "4SASfi8LcPwpCbCZCmfdNsNVzg773CViLPUXxX7kxzkzfwTcpAPG257fRJ7o5bkK1q7sS6jZpjbCRbKeVDJPpyBD",
  "key23": "2GNMhRD9QBXPVZPG7raVCrkuNH7UYKssob2AkmR379wohFJuvEgvwooMkwP5q52qJPWqKuLfabC11NREwQ8Fwve4",
  "key24": "uLUrVH9qKLE2PjHHymNsyWtxTJNHU5iek2XBBqgXb1RuyyyAnFHsd7MoPWqyn7jmCBZDzjfcaKfGgo4y3yQpuAg",
  "key25": "5cw7nLJtk544vDamFDzndPw4Qj4fR8wpMWBp9zgsZi9zQStyG11jwDP85rrJwuHAzcLcZn8inidNBGLvTKwyG3ER",
  "key26": "3tspYEcwrYeQoQfnKDkiGDxRaLfmSB8wfkZvEgCDoqyiDtv1nH3LYziFJEma6TZSCgbtpZYn9CMxcR8SSfw7ZyRf",
  "key27": "47U4DSDJkFDJ8Fmi88B92He6FNePbEsphmRAtnMAzfBTJfR7SEz77xvX7swxVB7xpmgvgcnPTDQiFFY59F1Vwihj",
  "key28": "5Cfqgu8wRsAppzpv2RHFFQ2UYD8iJihWsavrED9kuH2juvTn7PrHBZBkS1uefyzeYa7xSxpNKknVAmLonHMRxNKS",
  "key29": "3s75NoNRZNsMez9qoJbrJr3oTBCCSHmSgSckhiGsXZXdHRd3Hhbya9uakGRtXqQ8LnvvL14ijfG71b3DXGbtHM4L",
  "key30": "33wLXwhv5pgWSnuLGNBe19iqH8DsYzCMa3nbtqaZZbTxuER5sF4NbDZ4uM6Tvz93XfWxyu3yfEngsGGEqtMySi3z",
  "key31": "4PMpdMorFcBR7q1NMsJVsfhUaaGii9eW9crKpraThrCMAXGy49AqeXAWNTVuvxfZn1iBh13b4SMy4Pf9EWTDbQfk",
  "key32": "28YtjKyKmbHT7q9yTnw5H3jHNGazLmH2uS5Wkt1yAUfHSHVugdC3d5GeZAQCFiUVDFuNeSw5WBCYbWmpNqfkjJjw",
  "key33": "AmY5HnKdoUg8Ee9iwWXRSPFUGVDP8KL32oUwo65Uj1JyRZYZ8idPSMw7UKGgVUUEoTVpQFxuryEguFR21Bj4TJK",
  "key34": "UYHia258cJ1whjKZ8fd6WTFoNRgcmQHVtdcpTWUTUazfgsQFCcmUTSss5kUSUDD9ezSF5fMUCHWXsKgoN3uKhKp",
  "key35": "4petLhrtW1J92BHVyxru5WocoyuUfawSB4VGZBQ1SnQNetZP3vtUwxWseF5bAoaR7wgFoyyMXUaA31c1rBvMYDct",
  "key36": "oENUPcehuCV9ruWKqcDdZiAEjmzMrWDt9kD4otkYszFhhfWtaJt5bTkhrv7m5xT1bgAbG5nSGdb2yHotQuWUNMa",
  "key37": "MNhb3hKAFSpcYtjSScRhebwYTUsCG8mbvyEHZVm2YKAoWwicPYMdimm6gwJT7bEm9TqSHi7Ze2UEgTdErkpBfQx",
  "key38": "2szvqT95vmi5HDzPznF5JzuLXzJvaRrBUQgugn391jYRZMJbUCekq5MgndfRZfDKC16VFdapp4SJ6GHfSYHP1ifE",
  "key39": "4heyzdD8iEp7mXTgA9Gx9qzXr4kkFDRcDMQxKDAhaYhmA8svhkmvThvNhE9zipUf42gubDitbMsQTRm1Afi4GKt2",
  "key40": "2HkHbuh79GLSdLiMdfs46f5F4dsiT4rpFXMhminPSr25cCCcymhXSRGUuCE26pYbRSZBeib9fNxVgRonkXPGU2j1",
  "key41": "4GwwnRLtkz6X9bfzFCYXBv5PAjLuyS83zu453i2qN3h729ySx22QksZsVg2Eqz9PsHuPz91Thp42Cn3s9jYD7xto",
  "key42": "GA3tWRjiLYZoaLN571LRiYyEkNMWCGVmAJiYFMLrdSJ3oH6TRT1LdZp7gR6YwBubVFd4WE4zaJSUhqwkPsH25t3",
  "key43": "3hdNg3TzTsESeaXmrVCMoRACLhgSio1bjyEF4SM233wXCphB3JL3pnn3pyb2gdcvJezfMAQt6QTJjFT8fvsnpkog"
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
