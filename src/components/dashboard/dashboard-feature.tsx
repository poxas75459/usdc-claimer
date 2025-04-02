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
    "66YpqYVhQkLzc3yLizPF2RwaYnXg1RCTcozvQVxRrVagcezNQ6T2FRhup8moEjQTBnm1d9ZY6ueVdpgdhpKeqrvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DwoeR4VLS4P7TGskTigufjZYbuCNbibqjQfRVRAqifT6fPWj2XoRsnwCxtECcUpDJbbNTFeWF9BMSYCo7ANQeh8",
  "key1": "4JJ7YFFXPNshTgtdS6d1HtRBEB9vFXF6uVscUMNT6hxFRrDb8r61QfWsFgnmPxAPMsUECeSDtSTNYfyDyWQbTMZW",
  "key2": "4LV1wCAkHzGVUY6WC8xPtVM1S3wqgBHeqJ3y9BCGAA3UWxScv48vxjg4FLMS1GtUN8kLvxEw3hR1FhtL4AqKhEwu",
  "key3": "B8EiT7gD8a8xjc2GSGq63TBrmwQH7scitHRGyNq1tjKF6zhy8tsrbjRA24WCBDeyvrVvFjDUT8bFvZt3XSYFzHL",
  "key4": "TixcqZfhWckt6WN1QDYdbRrY2zypejhqJrYTk4SKjfGTuoD1FDpxbtYzAa6NEhE1pB2TiApXWMc6bdiV8A7QT2S",
  "key5": "GbzfyGVen4QTNrqWopgSfm1Uj2eiUsT1Fyz8mnoA7vk1Wvi3w8jRVZXhxbXkFM4WupK2SoMZC38G1auCmVwanAU",
  "key6": "GwCYwSqqWMMigQ3S4WSnUVxCsQ6j4eCyMaZxBzL5nmNr6d3cEzpUnDN8aD2ULGGzrhjott3KeqUf8qPV7HZ5a7f",
  "key7": "3XecQbRYp4EA6CoCfJpwMDT8soUidRMU2CgY9iiDP6VRFPZkMaEVavcSeBJjEDgGA2fMNdQCFfuSHVZ86ESbvtvk",
  "key8": "3z1zvY8aRSKS14wnTdtgUWiH8vkVGZy2NhrmjVjDHcCUg1n2q9v9eoZxTLMtkm2yzr9ZKn13emB1CNfmumbRWxMR",
  "key9": "4ueotSF5JeNHveT2PNEmbNLMDcNhFcxM6CQw6QNVxQhnHxoE9kz9k85mDTeJFMEU2q8Vyr75GHM6UuFGrWwc4r7n",
  "key10": "466QqBUC5CV3hCZXcqbKyvhFidXZwd67vCo4chKeda5mr1R9z111ZRNb9476B8hep7Bp5qFwU5Q8gwZAchY8mmco",
  "key11": "5L31fgvwoLVkvKkPwa4nQNQJmJTUG54u1Cu2cdvJmKQocgKgTdGQTBDMtvmvzbHQTFPqMafJ33LAVAKLjFe1GDQd",
  "key12": "2VA2tg5Sr4G3wjANHKLKuz2H9LYgFCkRasv1g4mpCTBpD4ERMJ9wyBZw9o4CaT7avHtyEyWijkkVtmZLqPuE97Kd",
  "key13": "3ACTpHdm7HDccT862BeeKMVfTBdPh6hiGe6ixuEauiaiZQMZswHyNBCzWwtZYnt5fahK1igeJEoDu9SWTkMDUy1k",
  "key14": "jwoEQhujMdvAgLrmhYP771XJJHx6yZhvJpqXZdZEhv21dwcgrtQdLtbc4HDhAU89noNfaCNPXgMRbHX3SeYaMt1",
  "key15": "62SM2k6T7DD2xHjnf8HtjEfpM73bQ5RGnbnE2gLwR48Lr8BbyNs227GGKJGUWEwHZQ36DwTkKEQbY2HnRkEfpR2C",
  "key16": "64VC5LBGpRPyVArur7MtenDfEhSxLpgobz8iy4uY5tXx7yWwSQphrN3U7CcGcWsnK4J89QJz1GnBPPuBKvTgesL5",
  "key17": "7jXveyy5WHTGKCTLWaePwjqWEuz25s9qcZ3LSpgKRuYzDENGeY5X1LF3W3swQsvPzhqDVqgicULQnYh2vXdjxGG",
  "key18": "5zdwf1yiDFGF63BPvi7jL2yAfwTnvco2snjwagRvPCSf6Qxe7YWzipJVqhqmjCjNKKjEau1P9NXqPFemZmPKwToG",
  "key19": "5Wm7k53ybiQPsXxzM954xbFNJYh9srnkEYS9d3dwnUwWH5AtLNuycoiYe5Rr43u5K4u4SHKsqzEJi94AJC7WjyM7",
  "key20": "5xMC4vNLjNw4Zk4hjM35vWA39md1RZUHkGjtZUfPd2rRrtgz5UT7QecDuWg667SdQ8y6ZeHtEgzvp1hEo1gF9Gh3",
  "key21": "5kcGqVXUpzC4AVdDJZ5LzFsMdWXtCWgphyqDKna4tpKJdwsHEaefw3VDtBySaykYYvyfpvZ1xAtjtDiyKHbD5mPf",
  "key22": "cNF2k1qj7mpwKTSxkHAFrn7TDsMjHSoh6f1rtnZ3VuEoQYmrzsrnXUxtMYxywCY7mFn12nwJtCjCTG9BbrU9VQJ",
  "key23": "5wUFXZv4peyJisPLxchNRBopS8zMAvBh5c4HBg3kQCqy5AcmsvqPAy1E1mMc33g7sKz51ueFgKbc5CTfFrHCy4tw",
  "key24": "71HVFjuETc7oVyLXuJgDQfCSkquZFzzQDuyA8JabqyNq1XdWXuvYYSSFcFCCck5RE8BNCpHNyhyhj8r61Qm3fwb",
  "key25": "3dtLMwXSrGKZBvrRoNPF2Co4V6fcHrGWPC9d6WvkqyVVhngwu1kWGtLcPQsTbzokEt2essXdBYUYTf8HooWQTzAZ"
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
