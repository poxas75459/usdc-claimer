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
    "5WSe5pVHEor7Y7DHFDdsWKaC3ucXfY9xjeVk4FBuXMb2S2caBpBTnXVg5Tt3wSC9e1GYYJzfdY88XkXsHUiJw21A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nZA16RyN6ekA8yvR9TeToU3aLsaRMCVKfYF8dLXzFTAq6JTjT43muCNtdyd7Zh494MQRPaxbga5jMRcWUgyvHKs",
  "key1": "4qfvYX9yECMEenfB4TXAc8MbHw5afCzLhhZrmn344J64nz3qndkiSKQ3EFoh2TPhF6qyET1PfZpgiP2R8MdxMrMr",
  "key2": "2ZarKEyPn4na257CyKzveH826hSr5TAwy4uqLRfZM4jKE8uGFNdD1htAHRUka3ZXs7iwXBt5sjnYFnvZJCLBSsqu",
  "key3": "dT6zyzcM3ui2oZ71Y3mr2jhPXRe7jC5ukogNYy77Xhcz6A26RHceoGyxBwZZmiw9dQnG4G7Z7pMt43UMEek4s5g",
  "key4": "53N6jrUVKoa4RA2oGboxNFBh5eYTS9WhakUZd7ShtUn8DJWCJi9oycDwb8U1JuUkcX772V5iSKk7axyBa9i7cvqL",
  "key5": "3wwEwNsUDSKDJQTjJKgcjr3VX2Up8byPWqoRET4tgwBu4MQkr2p8FRZjzR5RfCz8xX3swxfGWt5jXgYGE7PHPhry",
  "key6": "2yjnrPmBzzYLQs5DBZJqHreMEJSnvKW1w2Fjad19wCXszB9kZQQh9hopMVx6MasL93B9BD3NmczcYtt7isJeGPJ9",
  "key7": "2FAy26279yxFdpsBEZDWHC89dcNWCyBn8iMcnysWUT6eShPratQivp3BktCkkfEgxk3Vb197WR2qnWJQDiYHVb6X",
  "key8": "8gL2PSSrAr6oEU28zpamnCypNtn4Rf4nZvtt6xEJx3fZV4WPcRDEYvKaFJUHgn9eT17wJ98cAJ5qXzQfurNSLfL",
  "key9": "4WotvSVcVZKksKAV5bAjh44B8DFtBj4xD6SFhWa1vuQQyznXBXRkd4EhnLn3GQFJne5Fst8ndKdbELY4FEaTD7oZ",
  "key10": "V5JQDCkh2kzrE9DxvKPo99wHcrHZoArxqmEFF78yWZsmWLbdDQDjNc1xRg7smPzokMsom3y4FQQRaYEDYjQNX5X",
  "key11": "2cehxqX9h2ZijRNgeFiLkx4fAZfqmgUEjHJxsruJUETRBY9LKJRRknxNcBfAURQsp6Rq1ekzzuwGfpujatXiNGzz",
  "key12": "rrJE8XCsBKbKTzNyegiTkNM2rgxzRkPECEup9EjNjbzc3Ty9D7H55SnJy7dvazXiRtfPvcVyA8hyYbELz8hWDzp",
  "key13": "4t5VU63Pb2ndQAWBw6TokDTU3rTZfZjkPEdEQ33AbvQv6m1NnbkRb3hedLwZXcksPDWPoxaLeL4yeGs4AHmeDYJU",
  "key14": "3sqMerbrq8BeGgbGxqaGPxquYPXxjXnRdDEci8SJe9oqRWB3rEoJdVdZxd9UbSXw1vWGa5QZqzgqG2YHuJqeNj6W",
  "key15": "5xb1inyuBGRMLdLiwxPK3vfKSCzcCt6T1TN69PnrDcR8VH6B6DY8nnL7d1dss58T2fS7wTeJWSWTmcni2TGbZGcR",
  "key16": "cCHEhGEKM4CvnvLhxQuvXgaeZ5RvZgQrqGHdhxDczErKVE3ETBFqcLV5SkJjs3A91RfdbY18DhG6gDPjPa8e1ki",
  "key17": "59z2ChsbtSY52vibt2nt5V7bjNDUud4LEmHysLm6XyryKTx9NR7Ht7CE89EKyRE5Z6FsMk3Mn12cM9Ukm5kEGZRA",
  "key18": "4D6pVzTAE2gpCS14WHBkqY6k1Thos6Xf3oPxwaSmuUgj7Gpxkx4GKHe5N7fUX1UkyemudyjBpGyZoWsqc2ztoZtd",
  "key19": "4uKj1a2WMRqSw44khuBvBfTXUcfxB5kituNbBd5eiqqj4GaZ1V36BNtSTbvkx8KKirdJokgDLMb7dwzswpMRGx1H",
  "key20": "ib6U5VHpxsyNYaFtnHQbhvdX6UajEWWyFe8BVjfyTWeA1kT12N2c5Yso2eVzUvaUJuCt98LcYg3fE6WDkuTj6MY",
  "key21": "4F7F7KwQX1oWXMCTbyhB4mAqJQ3otVpHDm1U1nPDzZq6JTGcKVzLxJP4DBfXedYBoYt7H4qZXLQkG6MR2T3M8gz7",
  "key22": "4WBaWEEmnSyp1H2hEgJ9ymjhTnLSfhfNYzau34ZA8oHWNbLzQHekBpLXtRZF9v3aDBLD2tTXbmV2WTK9WJSkH3MV",
  "key23": "2USgWxSxrVseb3hSmJN36qBbLvf3H4FHSJtoXk4r5hGPpfLapYLSPeoxtrJ4Ymx7mdMk1czZuD4tjk4TVtpCUD1a",
  "key24": "3p6ggQrbeJ7LsuiGfptyfZeQ5SaQq1jCPia7vUXjasYbC1mtonwAZ2BQpgaM6X7vQ6PzY7UrX2qE2dhatSvtLLY6",
  "key25": "5Tt3K5ZXY8sShpTv7WsApXLkANptdxfzYgouutktvYKwUVM1TCMMfrVtTmknhqciim8vtwCsfRMGheUguAEAQJ8q",
  "key26": "4dNPF319wQzqJAWCEMnAyTCHqR4ttZ1TktRk2VVJZeXA3jwKztoXkBqmHndNL9qAPm1zRnLCgtFmXcqm9YEBwcZb",
  "key27": "5ajFfv9k3wYDRJ5GKjETFHR1tKo4ieCzZHqL2FGyvF3fWf1kneFiRBqgsyLmtRfF1FeXXWidMWAkzcWbTs9ZXdBp",
  "key28": "4X2GdeNbKBCVNijDhGepz6mXa3YCz2hqzLkfxUPwc4sRfS7X5EWwVtZFSAaCgVbEMXx5f6RExVPAWp7YRuPwYDuL",
  "key29": "XQgDmQ5vGAnpwnvMLbuCdzeJpEQgmXCQoiLXRKsvQUTTTeXa8kqfNfoLNq5MPmia2AQfcqQ2rsEiDFyrvGbAaaa",
  "key30": "evQzanubjpHRLhESDnpCse8LPXrx6YPBfGQfyBXg2fKHF1A7coQnzHNTJPh44zF9CvLYbXtHGftqAyBf3Eq4tXa",
  "key31": "jGkzND2V6UHTSsFCeZWTXW7TFWhWWLLm4zs2XDo5hFDLWmtj2oGAJBm8Tb8g8pWsbnPZLjtGezeJ21ChcELD15C",
  "key32": "kzfS96BaQgRtXiHbXPKp8cRuu5jVznYbKbh3orPkJ8YKaPbnbXn2TYtJ4nWudBvikfL1evJekht6S1fC6esCFxV",
  "key33": "5W9FT3aZdfANC5uA4Aen3zAxMBLTYdeFZse4DoQWtYrZwKSU8NYpiXzrcbRF95U9MMnrqDSB5A2Luu5M24gbgWzY",
  "key34": "8wVVenDD6TfZvTcPB13kQHbbDEatmuvTij8g7cxcaQcAd1VMTmQR6haxkTCAxPEjkUQdf8ACv6Tv9J9KgmX7TvJ",
  "key35": "5kJq24JgH5GtGvdw62FD5NArTAwCvkLat56xZMbDrihg7NKnqRZKvQaEjWDvPbvUX3P5WfDNjVw9PWXwN4YmgnBC",
  "key36": "5CzcRjACsbwrtoWXUi66bfouGaZ248iiod4eiPpQJw5VYHCq4u8yEsB6Vngo6bi9gcPHvdcEP5T49Tq4XFKVC8zG",
  "key37": "3PpGjkSryhmeAuMzNsUGBGYQKhwhciePq9rdDjRtVxeZUmjEJfZ96Q9RQ41Ui1RATLEQ61DGvGmgYLRtjys5Lgwt",
  "key38": "v8en6L3u4bNm8DXurAb92fDvHqMYzXspy2u79MgEqdBzbcEJGvhrwV3s3NaPht15pZHsyx4T7VN1gXgiwaUjgjm",
  "key39": "2GXJWoZRi9gHp4gWhq2NTAf9V9iuepZULhGr3chtReFLzHaeEERrJ4mnDkyWRBqh1D4HSQiUGDTBah1ohi38jGhn",
  "key40": "4nNjV7amxVMRdCSCsuD1KJZMN5QK3GQiacC5HAq7wVQy5m5Bcg7VwNkzLcThPrwGcf2CzrqSuJgFVgCyoJyetRUB",
  "key41": "vjtCkkkXFEQ1KP3bXtyJzKQko6Dn9ibm5uqduFBybVXzSmwDswcr5XLhMVRoGzoWkN9yQ4QVudSsHV5pLDKpZK5",
  "key42": "5Ru8hnQd3cVQ65okJGdXd6NivVCJVG2itnV8ZrETLxeSwKL7UkZe3n7EzoGau1jnPKVLwDwkrq8y5kWpbhezrmBm"
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
