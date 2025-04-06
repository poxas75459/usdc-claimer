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
    "3m9xawGgtr8TeKBjVP6C6wqtn4ghMX3engCDeV8qg2RvUXweYpviBy7ydds5GqyET8uhGFEnjR8zpqW6mxcuAiaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Lst5EBkJSGnP6JZTeUVGpsFEdSB2axJT5E7mtymJnyvESsVc8dRuJBGwypFAaWfhC3Ee52DNRZ6MGguUggkg3H",
  "key1": "4pdQBooMNJ2M8xGeCFp5cKqpMG6LoAgmenui8SNw51dVxa1gGvNwqpVkSGpBNYSX8c8sxWBdDCV2MyAP6Fnw4gRq",
  "key2": "2LQYUReQwpZGdQjV9iYwmSK7Ld4gmCC85KaZ2NYU6dsx2fjPvB5S8i78AhhkQWHcCmoRrGBeirqsBP74uQuEkoCe",
  "key3": "51jRxH3mFwkqeRRGTiawpzU1Js6Fi5vWyiMaJr2dmKBKis5mD4NdpZ9m74CZAu3i3VzbWg3HhT7xGUG2vim3ggd4",
  "key4": "wPhdayXXYCsLj2T2v7dqzmUv295NjwnCc6NSjytELaBqsUy68Ghew1oZSDqZF7W2r3zuoWKvt26c42PNf1Smwyc",
  "key5": "4w1Uqu31LDED7s24BPyt3TDNnphGwK7DNRWAu2kq8mMDGT7LfZPADdurJgDxJAxxnV9sop76majZFz3mCU4FCNaz",
  "key6": "3SERtoDYRxfkNbKZyxgayH2zKPnCXFCfr2F7mfXrZLtjM1H2C6kSajD66xmbPM2xhhZkoosv18kx29XRXdvR1zFN",
  "key7": "2G1fP4RFwVHEshTEEtv715uK1vMv15dVw1HmVLQ2jhUGDvJMN6MxTqKj3aKuo9JwWF55HmTmAEFUChmyqXsiaxMi",
  "key8": "45a6otM2YWLJq4K3VahLuGQt48kT5Nsa77qGz8aHrRVSZuFQLVV4n6rVinUn3sFM5FNA2PfcPdfcHtTDLxkEUk59",
  "key9": "5cMXCLhDWjec9mN8ogktTiWXekNKeg5aTye5La2LLsGPppMpgPnGKeWWoqq4pMr3EYkRN99hPWgdTPWDfDqPFUNn",
  "key10": "3g71s56LcAxgiyYyXCKK8ZJH7NZTzawy2tck5ykta2xdQHuoWYkDLE2f7E3ttrGUQeMCFhh8acxdfJncVDQzvk1K",
  "key11": "xviE6Qk7PqFtQQVwTYuEsZWmT8dF27P5mMhMcr7t1UdgqJUY9wTN2hAG6svYt92H2ng3aWgQ45t1rmxrMCeHo1t",
  "key12": "5JZuvGySw3XADfjtw3JCgaZgTAnuiNyDFE4QxP43XJDW9shL9yncBxgEj5vRogBHRqDdCDDtnAVEwFAbAszjCC5r",
  "key13": "2Cpb8qrEQSL9gBo8fstt23uFeP6acuPczrDdnyGqFA4dVdzxX3psXGGZtjo14FPqjgjDH3Lgwf8XsCgVJc8PF5io",
  "key14": "aKPokqXRdCgKvoTejuoNQ2T2Chcqtcy2BLqTgPVx1eWqDiyeGjNw7py5ZTDBcwppN5Dy72KkTr4vhY6qio6sHKA",
  "key15": "2gnfcCcV4oxxLbRkMz44cLkfra29Us4MBmbweSUBBbVi17ffxfvxy6ujwLLHjeeasfmtPYAEY8ECVGzpEqWdgAci",
  "key16": "Hx63mH1FF8guhE4o9FsstAeGJBEGrSTp73ojPkMG3cWRATrug4YdZMycNHyUqt2FUKB5UK7xTRtKQfRoSnTprCU",
  "key17": "3XBLws5YTZZCmwy7ZT4VXDJunTzeZcweZA2NzMWViFFgE4pAagBU3MpR2L8uqNJLKUaNS4gWkMnZP8hbvzamb9Vn",
  "key18": "5icJ3WcWZg25ohqabRz6jqDHm1Anmupd981Sxz2ixhaKtxbyAzaGsj7bzFwMx7NQgo6fALdWrgx66EkHmUYtraZS",
  "key19": "3S5YvaHwTrJNkP6pHq7Q8NGPpHFHhZYdVSZkj4JgWE7TAyVZvXQCgwWQiMcazyeGwoF5yw85mn8AGqvJeMtJKJCS",
  "key20": "2cY1UeV4FXfETzgPXvR1v3i6a1hUuPrczzgLRjZGayTih1Ru5cmc36QX8roPiXpvJsLV6LV4H7U7YuyznJztdgBv",
  "key21": "4tsz4i4vHj2XuoNFhHYqPskG5jv4f1MJtt8cZrNAqXJbvSNQPJPARxuipHTVUUMaHyfyyFJmsu9FfEb2QTcgYr1Q",
  "key22": "2jbbEkJTeohDYMphvzt4Kh5iURFH2jBfuSpohGzysoYTn7xqnBmq3WsmRpqzirchxyQrE7JEuTxH7f35xg2hL7Kc",
  "key23": "yfdt7qR5RwaXzp64jCJVY33pXzn6vbQj4BcYbqgtYDKSz56Etn2eVAQPBegVmRrYvPX3HW1qStD944AcrEzCpin",
  "key24": "26j4AWFNo3FG8veGnQRwGSqu5sBqbmVUWhjnXP1bg8MgfUY4YNnTwgwqDK1zmPnMNqbKRaEM9rz7kfN7nSSJbRGk",
  "key25": "4HQdozxG7EX1xW8pmqGeP84eEEcGPJxP64HwYTHXpnPNWBq3h1oSkT3VdeMovun1MJUSymPL3Gs7vi5WQErbRgbx",
  "key26": "4UV2TPLViMqsR9KFeaZw9Q3GsLm614TjC4Gsj2MqCkBDEWvEM3Hp7nDwfLtdpDM7E9VRUTe49ZNGZ92a97Nt3Qke",
  "key27": "5TfCu3eRM7F8y5363nPiVMEggG6xrF5etk8Wv5HynSRpr3BKJpsZrweLjoLD9vuX4bspM1YvcYywLCCesr38dpY6",
  "key28": "umJXdzx9oNQjWAbbqHKX7agHBbtvazhY7UjY9J6n28YfXrviQcyDRF78o4oKWAZ8FE3JGRuPwAdRZJqtJPoURDb",
  "key29": "2QuL3uTeVeHUGJRgCVTwvQUHo8nqmVqRRNnz45gxYZZ3d7aNu55oyv6SaRsJ2WDffmvcLLixGMMVq4Ur3sgCdvLm",
  "key30": "3mNsALXqfXoFBSpDGqd8P198n62wCEevcK2erQVe62TLEKzX6tbPzCmiVn4L4KF5Kwgazw6qzr5fhWC4xL4QL5YX",
  "key31": "4wCiTNoVEqwueHtL5eyD7jRDXFWhGmcsnsu2hY3cZ9b6Ppi7XbQrMmxnVZwFAQDGQq8fp5LdyVA6fsbWgMGi7abB",
  "key32": "5UK3Jzmvd4Kw5dfhjQJVHzfEnLGSZwUfgkLwrGU5KaWufDxCxQjnbnmASpNxnMyXpAzfE5P21zuq512kgztSkHr3",
  "key33": "FVvzGuU59kZDxu54AwxFvPVoptvtkjs5MbUVoYsxBMpkcMHziYMAjRCUdbs7nS4prpFUNBDDgbcnWz5Y68rX6uh",
  "key34": "4MxGhBAxkhnDafqbJUJ8Pr1a3x8S5FhYiawZR3D3UjQ18Fcy1umQpBxJvqFqczznTzQKCkyBoUMswuv6zEtj2fo",
  "key35": "3a3JmnFTMDEmpXYbWyx8mNAcSNEhxr5mAxTxQfRYeVt8jkhYnMhYcFeLsvVZaDD2hBA84qmD6VtSsZEwe4FYMwx3"
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
