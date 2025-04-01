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
    "3yisPhMB46nonan4M63huEjmzcic1S2LKg4v1wYwwnVXTX891Jvn4PeToqRrQBaNjaKoKBV7ovUGrmziWoAREDMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EGd8ELcF6SscG7p1bUvKG2yk9Vz2KETuDFiuPSULT1qPp2eZDfht4YNgWYecDotwjp7do4DCPBn1gVSvt3mUPn",
  "key1": "2vtg5Bj4F4AuZWmVdpL157ZbYHZBritMRNBnCaFLdbXQssHgo8ovDRrbgpxHNaoStuT1YBsukSVWZAuwqQ7BH75B",
  "key2": "4CE8pRBqBK77oq9BbvGQhCBnKP1u8TLMfoadsrJLZRQS7aQDqCKtPB49qgUkvHvEvdnZ74u9U7f6dAzLSXHdET2N",
  "key3": "dipCVvXuJommLczXF26x2Xe6BAUpUeataaDhUKSVofLWhPKLY9Hjwv449rYoG5XyR27o5zoGmkWnGnA2Lw2AAvp",
  "key4": "5ctwNrYniz6vuULGCLdx64V9Am2Ec57bwPgm5yFwTQeWwih3Mv6G5AjrTmyNYewavRHKL1B3Dy2CGoKgabu5qcRt",
  "key5": "3EX8j9zKvbYVyaAA7tAV1Fa2iUpPZJu8K9RGMqRyn7KhAN5xPBwqpvWGNgqCVm942NrXtZTaZoZVnwE63bMMFsxU",
  "key6": "4h4UQLB2X3ghvkMjpMbvUFc3kyuj7ibiJX6pqRtZqMgZwYNFbDoVTYY4UkfqpcYR6XBwi4SuVHuztkwsazRxGv4d",
  "key7": "2E6SP6m46UybEQSMQv7Dfh1eoWxuA5Digen8Y32uZQHHNith9CFYUviasZD6Ankb1sjM18AuVthqRjjMma9LThRP",
  "key8": "3PMckkDvNNK8QXw6YJk3FkLvuMLrKFK1s4AMsfJRPXLn39G2k6AsrJFYywyrG4MyMkG5USW6YUMMpvpvCWBUHJ9r",
  "key9": "4oicR2jgJZWK8bCXqzcmeJgyY8vvCyCNA4s74VjG2gocATYG7J6kifeVqFGCjEXYYbhqL23XuLnzpzphBGSPW9HD",
  "key10": "3DPMoGXs7xuLTm6imR5Sngm2gsBS2pPMkPuW7prcUdpABoMKb3MdPE2956bN9ZLf9xPBKCn9yMUeiX6aQAFGQRwb",
  "key11": "29KzZUSQ1iAQE5Go88iKBht4zemPP5S7bfVDVKeRx36o8Qixt1P6oae1sYGS8DFTd5xtVvcm1GGNw2C18h9YGh2d",
  "key12": "4ttHGQUG6RAf8UsiqPqerJGcvwfu9HLXPjN1kJQH8bvhzr9YtPkiqowrcD9nM17E72u8jM28KNjrXNkLboP1d8Km",
  "key13": "3jL3znX8Bt8KckjYrgjvWvLemBkfmNtPediJcM3y2iRm19JVYErsaP4rqoxe9KXv7D6UVXD1WmjB3xxPTVuixCyh",
  "key14": "Xkxsw7zG3Jg9QqqeHm6YfafBug8YRwyujdjtqiwa2iY9ibVyKqGi8HcBPHnCfsY5s2fSg84zQqKwVitvrRnvsof",
  "key15": "46rCxFVuKUagvajBrEWJtyMsaapqA4bfPXEUFM366cmd49YbxPc2Nibe24eTmRQRAVEn2sJ4b611ek6eJEYjDCup",
  "key16": "2m8eahayGCbuykhGTZszb8ZoeyCw1r3EMp6tyXatRfJ8SYzMqrhaWpcsMREUR7oP4276Fq5cugcyiJdJQTB6Dtb7",
  "key17": "4JaFWpozDc2jS11Zxpw4tvXDtNtkq9FFBP7unVc1rzE2XH2uxiede5yQhJtjNiKPeN1ohu4fmeVLXmdfmY6PdTj4",
  "key18": "3pkZzdddCGKY9aNv7fB7qgpffXvUnM9iTBqUomgeNaR1B9V5w9WoTuym5Fhk9BUnHK4TiDsm9CgKTBKySsoiNgPS",
  "key19": "3d8S6Fs8NRtrByFWay2qzoWcikVfaQzmGLMiHcQeuCvSTPhk752D8pNmpoJ2k3peTeE1ipmZvA6MPgMRRzwuXhfz",
  "key20": "5wSEghvRrb175XB4Ziv3hM7ZsfTc3NFKhXnPDkbp7j5QkoNiHGpRuxYijtvjyZ16nUkwEbqq2QwrXj9EExpFstwP",
  "key21": "3PVF3bB4KxBKbwYreEeRtuAxzAS8jxhjMfdKmd9Dsbjcao1FTMcW86idUDmbSGtDu5SSRr31KhYZZ9d4UAnEb4kM",
  "key22": "336TaBB2BLvXwhQcS85Yz91FLzmDVkrqCgRbTygkxpYWx5SipQGzQ2DJVJoHuCx1jSogXCHr2YgrZ1rC2bGSDbok",
  "key23": "492d39r8PYcnst5DURLBepuZ2epm8JFMLzQW1Xebkn5FH8Wd4EyqwC5h4aABaDEQJW85tW6gvV8at2iwd7E5NfUL",
  "key24": "43xrxvfkdixdKhyojZauZhEEhuFjt2h2zvGgWxFeQy42ZTxqdmdzLuJL95HVEbFfPuisREi4WZBCNieBRPnqqgyv",
  "key25": "BgbssK1PQ2vh7MQAtNBwHKjz13zzgtKLbk4m3Z4y3gJq51X6rbKMR8JioSnLwH1mJU6nPkF5triYHykvFUDMGSB",
  "key26": "yvwECMB5QVPVZ2b2febWAXbjreVDsU6z9U78rSr4SWCncRVGDj7p2kawL4Hks6SLbJC8NaQ6kynFDNFAKiytqer",
  "key27": "5UbNpT73f9y9WqdrdqeahEkgBdqszeMhb654cRFtqFSx1zSJh3HPefbRJ7umngyiN64tNjBQXwbzMzwbGUQp7P4n",
  "key28": "exHr6PnX6f649YhU8wideohuccWyaAe1k4NTjMGAj1jHnft9Fqz4kRfn1gu6RvZ71q6pMJyoacC3QMKNkBvyF9G"
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
