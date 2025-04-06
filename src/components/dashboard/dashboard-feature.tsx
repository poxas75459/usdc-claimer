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
    "4BtVPgDwG4GDdYRFFU9RvZtDCFoE8HGTPo86kMyENZXgGtsJQySETKLBq5bKVWsd9FzcFijMg4k4yP2kTjBq3T1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59p8jUVewFKCg8abnX5odoUKS2QgM45UWijWdYMYk5wuc1uZqyxBFY5fgujnuwVod1SRwpMYrAKkRRgaW72VwJX",
  "key1": "47bgtPreQCdRGE9oko9Cj8jbkxAqa4NPUyPihFeXxkbsGgbsTK11M4nPf3kcXqueEy9nLjjbefRFMvigyrQR1m53",
  "key2": "5PGDCqsZdeArHdBzfGZV9HSiGWiw6xv6cPMonG9XAT1uxvvBwYw9eT5HH7gUdRs7YhiWBZzZwWEgad66obBxseQ3",
  "key3": "58AYkW244hnUA91MM4u6vLs7MSGnHhG5NHtknRHMqFqwtZGGs2Fh4rHvLjpKqhbnqYwbnE5fJwcu5371QzA6aqsL",
  "key4": "4yWr6jT23Ren4MF8fdakKVXYg8As85f7ToZ1VU8XmATxkvr52hiUdnrP19gH5Q1MiocHvRjFbE6qs1QRnZia3AF3",
  "key5": "Nc6XT6qYCF9gdFd9JEMx2m9fQGujmiEkDL4ChxBbhoyGCe7gxT8ECz1hi4WDY5sFiUAk3cgTcGvBJMUikhwMYiV",
  "key6": "3tJreZemidUSmmEDUEcKP2QptEZZvx8biXmjfdihq3rZfxqxVQMpmWZc5yGy9Qg8CGDap7KzqiRDw67KysEwbmXL",
  "key7": "2o8J4g5BFUyq2Eb4n7wh1X6v995j1dT7VyayZUhUGRCfvBXogqoSnxAWGtKimgChdtJztPLwPsKLiy8FmB7JZJWP",
  "key8": "4P4Sb76JdACKsHG5brkM3D825aJsEdXioSDJqk2MYnMPZuPvJxjLZ9oEvx2dPgwsDTPAF9xpPyWRF6WK8jb8AJD2",
  "key9": "oYg3kg2JjHv3aBkoJXcP6jdckWNBMv9qpZa4JgMcE6MjxVtxewrfsfd4TX7RKiBvez1zv28wd23otCDA6U5rFPW",
  "key10": "4Es17nGiRe9TSA9YjTgTKvqYvUeKafCYoyD9jYCSspW1CXNmojZBXgLKBRG2eF1FMHrdKreXg51xc1ZcGDfjpJRp",
  "key11": "4diajcdo8qNnboV4x2mDmvR6owzgUY8PrNd3WVnxoLS5NPVEBRbMStLriAPMVAfuMcJs7MuSFdsxgHo9FEjb8b32",
  "key12": "2ZCCsnJVwNdiJnbF86TmpGS3hykgUWbqW5hK6Eza4G6zfC6ExaR2KRvkNZLdCHWinTmzt98rUNgHDcT67wmxpVhp",
  "key13": "4wsWbKMHFTA6HA7SQ7xCsZ6BsAdVYLiG97rx1PALWwg8MufutnPA7tdyuEroMHzJWeAUY2a6dN88rG84EZJAUMu6",
  "key14": "5tNFVzbSVfX7svA3nshHo93gva3zoVk7GezYDrQS5d675qcefg1UBTnsmgRUNMAxn8z1MVXQZ1BDByf7wUc4Hqfn",
  "key15": "4m4eUf4YXB64LRggMqTgfVSq2Eei1s1BmEi72AURFV5jeVB3tdbVPkeL9JGSmagSZbC63NLWxSMRmG9zNFDJh6kd",
  "key16": "5sVY3U2NkdgvDAgFxKmzK788sQhEHKXHffTgbUL8WxLV5u4njo3RZ1x85BLn1hit4ViUmvz15h9XJJU2ZWyYWdz5",
  "key17": "oyZPvJ1h8hL3cG52mns4ugqEThY14SsUcAaBKGXLCarLUXpJuDNf1qyU6sZVvUK9shztPZ5iMuWj4SFTm1GyE37",
  "key18": "Tnv4JDS9Ad7vcwX3poff8wu6JgjUFa8YRVpjNpbjVePJMhacJKnSdpZgnx3Q1LYEhPJrAEQV16oTKLbXVj5FFbX",
  "key19": "5KDkxjD25hjcdBMrDQ88cuEs88QukaWcHFvb1uJo5WT35SxabsuM4H49sdmRYojad91BKH85PbmSjUeC3U4wAMW2",
  "key20": "5tus2SXhct8U9dpjzZP2mGZMo2LtWhEUWMzn341kGguUmeUoaEUJhtVPtAtMc3ywnp4g6j35FLBuTsmsmpDTscc4",
  "key21": "3pjLLozEpETAVZMQq8nRQCbWXfmHJaRjH4XT5zL1D6XqRjR6ods5iP7URNCj35fV2FdgMf5aHK4cdmbezyjM6SaC",
  "key22": "4tsTuzX1mpCSGovextqBcj28WfMWkGTX23betURFegfMLga3VfidFqfc9MLPQb1DKuQM27UwhN1vz4xU43WNSHSc",
  "key23": "2oDwNp65CA37jTdTTq3RUYvP9tNe5x3xhJ435Gv7DPwqxwwvgpurScwpGKoYgx74iXMA565yzg3BtzXxhtwxSDYC",
  "key24": "4tELjKsYpfcS1nkMyjsumeCB6EbRuYErQdk7y4bASEWgedSocR3uV8nSBGaVU5JcKiE8qcyzzWWxBoeamRc9t7nH",
  "key25": "27UN6n3KBuaSgdcRNygJSvVzvF57kDRaLJG8yM5JnsH4FaLUAHf5FiWcrvKiC8wR7fyZVftxjZxC7M3ygFn4UNNr",
  "key26": "96htBndCCxfyRv32QMrzTLGM7Ue1sVXY7fn7tSZ1W3UNWti8L1UsNopa1R9BzREW2iHoHoUc2CCgegwMoZbMZPZ",
  "key27": "Ywm9yGH5stLGfLoeaku4MijjeHWbTbY9qoNLhYfvzGdNpXBENnET9FdANAjcv9W5pqG9fqBcN3y8UZUbKxWwQBg",
  "key28": "5jh2wt2QJADjBiRQz9L2eqkeSR4wau8Xu2Gh3DVXzXoC5nKaEe9L8A8ot5LU1CCRgK1jCMHnXLt1c2GaUdPExTxZ",
  "key29": "2nUfudJoZ2aqk9amdiiz9zbmwNfWJJLrxAqks4YKPtwQhQL76vpqBMVqdqbFa1gLHK1ASfNfzNqS769t56JtkECT",
  "key30": "4cpjiaKEHzbmbaKM7ryWygkNngVTrAmxtMzNZsxMetckrPDGsRVyrnMqnKFvaCSo65J4iNnQbTSTqnsWWF61Wpwo"
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
