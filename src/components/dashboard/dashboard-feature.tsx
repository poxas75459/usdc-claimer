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
    "2sy3mrwP8ZyCf786sYsUNTkB8T8T7e3evyUTyjH8efgJ5dojMoQ4DHGVA1wAPujfRZuAaaJ2cMCrf8nTpYEJyAti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LdvMV6kxqnqbBHh5JC3jhf5JuGEEArcaND9pWjcRzZSqpgx7t9mYEcSkMTNzNfpJoqYMyoxyZyizyTT9WyBFSqz",
  "key1": "32bA3t2iDVtFHeJmTFbnXEKPZQdkpet9xLDCUDyC2ie4mGe11mwXxi9hAtaseL5z1iZYz8Ur6PmjNtZ24Sbhd3ZY",
  "key2": "31V5Na54ZJdSfWVbcuEseXvtbL85YuLv8ygjsxDJEcyhtrFS2CRAdSs2MJCaVM5htaPLLxjX9bnW6xmBYui6ZkhP",
  "key3": "Lm2aJodHhqmiadWBYJEjKR5PuUeYNu5Jtd5nmo7cnDmSba5oLws34gUagbiUyaa9ngfzEdUtxcZRyUMbDipBdmN",
  "key4": "taEhTDgXcfur5Aiy4yJcoC3gPvbQ4GuwTjmYiiFSncrytYqwHvA67DVwgSZA5RfhFyBQetYnwKG9QAfL3HaMgtk",
  "key5": "VuBTAtdx2YUYE2wnr5Q4w1A1PdFyDhrWrNkDGWJWtapsjixxyWCpBt7GqmF7NgrRA2TtEBSZ8YBZ6CRVGHSCG2s",
  "key6": "2afgCXuSJaiZSVmNexRQW6zp619NmH7HKbs4FtCTze2MPKYQE5XB3GKaXB5DeZHgbTcyuZjMwzKdsjGKdr2qEedU",
  "key7": "3fkNTTALxPdSBzR3jLQfgsYCd4QVuM5Q7gtroPoUy6aExyRCerpVVGDicf1mmViiKP9NayGGx82Zr4hCXP2xbcPa",
  "key8": "2HHvXUUrgbsPXkBZKngVg5NsoYH8QqbuYemCfaee7F5jWQks4mpLw8uefbEwYZwnUhD7h2yuoFJmaFW2ydfH2eKk",
  "key9": "GuD6mURK2poud8Km3ip2Duv3osAUQkWLREgjX8WivVNSUCec9qMserQPGNYYPqxL1XmQYSVKhjbW4RepZzm5Rsc",
  "key10": "2awWzAJQ4qjiGdy7kxeNqaQaKQXGz9EUWDWRjVxLSHLeaXVUimrnDUg2h3Rspx5ZuQLoDNGceQxTNgQ9YLNykrkg",
  "key11": "54DuULbvTVzLgnm6RVZbQQpGjPu5XGWqC2rzDPbjCQW9nSak5ZmVMjEuKUvKJTHPBf1ABTkiKz2br7Qy1mCdHbs6",
  "key12": "3xELjHo4ZUEbUQu9uf5zvo2w6pp9GdWw14MAKYbviRMt92Y4HNXz3ZvMuqudUnbgJRkfMms11K98e8ezsfEjXifA",
  "key13": "3KtRcdvDPTm2cgr496C1tA7wmCS2WsPHjqHbkZz94yGcErFAMmCAAwRuTbrDW78VBRtTz9HRczF9A9s2rvkakvGh",
  "key14": "5brkCCEGgyEmLqQjFAnmFSzT5kEJPYaiLfpv2L812k3MXm8n2SU7Bx9CJegEhhaW5zXChpEth7QxwXW3gZq9rqyA",
  "key15": "4GnXy39A7S9Btkc7XCMpx6gC2Wsgq2gx7SKrKRPhYXuZd5XiVYv6vaafpaEQZM7EPFDodif3AAXjX9oCRvoZjrcA",
  "key16": "2LBXGdTG5XrXVaQHC929y3uUDna9CW4cciFPED2MowMuJfuFisB8TJJNQL9uJUqdBPJSBg9imSkjAGR9D4Gmgqzz",
  "key17": "4GQf9Vm5JDhtYx6y5b1airsMyumZsd9gtowwkbpuxhsFBmhLw3k3WQFbPyX65ujWuRRGbtYJsjPoRHgYWrNFyira",
  "key18": "2qkNhyAScsim8BqExtuuJAPk3MNdKxgdCnRF8TJZTiTdCuvjWaa3wQMonK5B6vXMFH3HwHBQRp7iQitfSqqadNz7",
  "key19": "5BKb4JWRzgYsSm5PXdePJ5tA8gZ6y8tjPjVTSwYtUphUCvpSX8mN2CDF1WNSNDUtAKRpdBkY8weeSgqEXYLhrfDj",
  "key20": "3iWgZWuYn2eHK4pGPCnAmZtrcm8Vws1RAxtXxawArEYxTZxRV2a7k5Eq5Y1kf28yt9ynxkRJ8wkiGPsBQNVGwpNJ",
  "key21": "5D8kMqdVcFZzpYJorvsXTi5qNd2aCEXu4iuoW3ps9R1gP6WCYRN5jBNhVsVbQVDiBd3qSM3rVQ8meeRrj9esU78n",
  "key22": "cTs36ShpyqtM3PkAHvqpPaATLMN56LbZCvMBpqff743Sb1gby4osCbs8yQmUko867jCWXj4JFyGgm5LgSdqScBj",
  "key23": "2YSrCngdvmBSnX1uwggMo8SYRms65eSQXfaeko5a1VssADx3NLDvgZWn7uBwbfDXFNNDmUpUsQpHPS33EBmb3idc",
  "key24": "3nn56yuzCvVtURxH9ShY1aBt3Ap6Gn4b7rGzYqSgz7rtzH7bhN3kj39RznifbAV9ytiW74tvxLEwnVFUdGSLRHy6",
  "key25": "3TsongtUu4pdfqjmBV2SGycc2ZfE4jHXX9hmmgey9LZ8eHQWdqNptiFXpdTENip4GJ6hfgdk7ABM33CWxRQNRuYG",
  "key26": "5TDkNNXePKD33zvcLZSubJNcGeEFpQqAJkTD6XG6iQnGHG7qHATfULDeaLCaJcUr7RNBaM7TA9h3g1cb6zdBncCB",
  "key27": "5NPjHNgAMKJ3Htk67sEFrUUEcHvgmFwqtaJ8aeM4TkVfUE6DTTkMknwat1mNbnpbNjswq6WtY11u4mzexo7iZaBW",
  "key28": "39kASN6HGKdmc4pzuQGnqK1VNxjfT7u8Wd7oRaJLdDTxLfqzqTX6pHrApgXbTJVTL27Mu3razGWnrQAeTGfnD8BP",
  "key29": "66USTgDZU52KNeb9xTjoceJKSoxBvxz7EtPUYsHcH827J3gozDV2KzasKoMF2kunaagA4WWneRsnirz6QnrdrePK",
  "key30": "2jnDY7n75Y3zAyHEMKmGAXx7vueGXBX5WmYtMccdVZzDuco6p7Wf2D6xM4KkcwzjusPwht961tfuHoCDdd7XRJq9",
  "key31": "4TS8TKhGaRpzX6EktcUSZUySCee4p8pHheSQhFawYkmyweNNShq3wq3z262Snjdu7bttE7vE5fWE4MrwEo2aucCm",
  "key32": "5qdq183vXUWkZkym6pa9WMM7LbBQJ4m8pLRRWLsftYWgrWWYNDR61vc6fCFNwYcdUtEG8A7YkSkU5wTB5tmEbtxH",
  "key33": "3bgiZ14aBzvd4uzPDYhpwzBbyDeevwgsjVDTByf92RZQRiTATsM1wgSBjH5JXr5ZpWTes2hXKsYNkyQvCrZoU6EC",
  "key34": "sJ55syNVA2tWwcSxmqZ5s2zPRKMed5Xbgptu9FjKDJxnfCXGPK9rbvk5HuCm5Ewt9329KvsrhdMeqvwVXH9PCRz"
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
