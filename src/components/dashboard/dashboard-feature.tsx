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
    "64kdCguGZQ8eWB4x3mFPMBkLp41ZitpSjvAL7qqjsJrA782jSWDpyMBgrLTeQgrN5u7s5VDLtJTyvsPJAWJ8k2UD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4va99WTRJ39QWa4xnaA5SSYfM7e7xwK71gBBT2Ho3KHuU1dkAA6vQ53CrpufrxbFRxeCd1DCp1Nf9HgEF69X9rhh",
  "key1": "126hps1tjptfxhDXF96QD2qief6BgLMSFVEBdCxWMK2izW86DyYa3dYZV4pf1QvHVG8Sq9VPhB86yFcgFqQryx99",
  "key2": "3RZybzxEBj76rUURQXpA2BZsweMKQeVEtNzpoo4RurWzcnZi3rGeNmiu6GuBnAw6pAR5XGpfwaWs79zCQtBT4EsK",
  "key3": "5Zvhk7w2WD8MovEMHVme16rTRXfntBzqExQ54Lsd31UYMKp8ne9ZXfY7hRKswVvDdRDYCDyYE3cPTZu1SW7j4jS7",
  "key4": "YBjNZ1mscLW9qBuett8Jv52HnS1AUxYR7Q1EEwDnoGV4xohTjJbWwzEFc8AiQSdprBm7vJ4wBsrTjho1aYvUwLd",
  "key5": "42oqNi1zNZtvCn7K4Ps73mrXL6Qrvydh29YCJHb2oHpNdx875UkNJZmGsa6gvhzERYV5kSy4sK5VCTnkU28NXerv",
  "key6": "28otEAnRXioGnN7rMrq22fSmpg7iHGaZvczn4CeuJnqHMbBV9wjcYZg8j4P6sxeM1ipiuourm6CDZtvTJ8js6Ejt",
  "key7": "64GA67s8sF6XiakDFB624rWxCJQJQ413NSqenTn96LUUmcRfDMrRex1CbhugE3cRUa3Pfy8Z2SZEWtApqJEp9jyg",
  "key8": "53oyxxopfqpojL4gbn35ZLtvTDStsWuePP9GQRuHUxPJ6HWbFZYTh1pyjnjczz3gKwrc8vFLhnfKaKvBzWJxjYVQ",
  "key9": "41HYS54s14ySKuWvtaEXyMtFYpgmMxJ64JnNkgFARmuoQQAXfuA2WtAiEnZVjZcZFh3atV6SZnsUePXAHTgAMfuJ",
  "key10": "5a1nw7qm1G8EEspeKYEW8sttr2igMsUrzeSpDHAXo8BD1r9bKQZQwaNNHWTgxVduzgn2HW447Hm8GYdk8jZn66dB",
  "key11": "cHcJ1EsVPcRvzjSuDUHM8UdB3seQHSrkafCJTW9xGjNHWPBwb8jbRRDptWAWUESK5Umwjfd4P6rDYEuQstrMua3",
  "key12": "3gTZPsvf9FvGQKDRWt9LteW7roEKuago3ipmritMUnLZCa4cwMqjephVCPdQFbiuZvpBFQkAWPDtwNPYmWm7BJae",
  "key13": "thtwHaeB5agauu4THhMoXumY24DSv3yLjUwM1tEQLutq97VNLyE3yeM7n7whxEMvfCBbkvTimz9G2NFP6pH2vgx",
  "key14": "5m3TeBTLqBT3v1MMtdnSgKCRDSUFbQXdNaqxPoPcTBDheMKMchNcxobyaavYjpaA1r4agxRw5g1NCTFQqLgvm9mW",
  "key15": "2mGXDF2CkskfSakD9aUYGirUwqcdFhcqW183PnDKi1a6dwofJw4tsfH3GFJ6S1EeT8M4BpMLSonCRjZo2BVoP7kv",
  "key16": "ippUUg1jbYL8LWspwdUMaVCKRuioYmcfUNvxRFS5nxNrkRuNeWH8QYCKuuERXMJKZdkHv3tB3m9sTbbRf74zaoU",
  "key17": "4VHkkhcCq42f6NWzCqe7PKZGVqe7Ts3XzbWDZaLALZ83eRV3cT8SD5VPMGYngEQrfVUa9xY3wqdCyrNXvnLwcfw4",
  "key18": "4c6vx8CsjUUbToABdjbymehXFqa63uxgrPRN8V6neKJmTBC7HyyCzSBmwREJhR6UY1xVR5e9V3xyXXz6jZTdyMYG",
  "key19": "2UkTeNJhRKLNw2GnqR82MkbyTBTHbCjauShSb62qcQBnspeKUCCg8HtsiLRZ5gNoyzdsTwkHVvLKzT46PrVio1CG",
  "key20": "2HBpMc9LMk6wU87eVQdJ7ED42SSyxe3q1WCnB3487ke5JiTDutAZuXbt98Wx4hJBZu394LaUUiqESw759Z4PKznG",
  "key21": "4dZyxBXfbrVM66RfSVEe4KvXzgjttbn1SB4vKbJWYrkbYFD8XAzT4C6A2Y1PxmpUaDxXf1Tap1dU21mj953TCV6S",
  "key22": "2wH7YMG7hrDTFXYc7WdAaa45k3gghx4x62UkQL5k5nKGM2cDFZvgDntWNCeQ841kVEidehC5SQisVvkFe4PHEZ8u",
  "key23": "5GDd4sCtikC91DxidNZfpppdy5phyNhRXzWbyRRaXTpy8PG8Km56Sncu8vrtDqU8y6NhMY6dfdcs7ivTSG8NAkCm",
  "key24": "2b4yrUnVNy8taogAvunbixafaUWMUQdNcxLn2A5Q3xgoY4mqi9tmSz4E3tZDfSxmWqy9DS9FAnDG1AMp8YfXS6eC",
  "key25": "4sCTkWzacifqemy8fisWisoBCpvbfdW56XZ4KxcgqeuMnvsT4y8yS3eJ48npzwYcMoCsC1ARo1EWvsh6qgRr8Vun",
  "key26": "BVSnWWPTiHGu3exshVT1sRNn3GzpsXYLzFkrENMojPxpwzJEkgrn5Fy2yWCsBNssskrzjoEFmm8MVh6KbZ8yrst"
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
