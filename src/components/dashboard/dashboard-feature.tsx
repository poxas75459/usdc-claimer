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
    "3M2vG7nDenamWuNBsajW256Yq7sywAaVpkZ3M4pEahkpCHDiTDGZWfBSvYbUiF7SzHW5EB3BBzZVejnKQHpp1r13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vpAVBxGdRP7VP33Tuo2DvqoCK2RnjQYKfoXiEzc6eyddcCugtJJ4WwcQaNeXc8VEUsJs55dt4bTvrEJzzpNjisy",
  "key1": "4jsUQ46pHqPob7YsxsGApvP5qYj3HeUBrvgyRdxMQYRfRcf193PhmHcGdcTaMxpw7jJGbMX1HVjAJnXdiHZNGpWN",
  "key2": "3iKQYE9tXGtH3FBJYncx5UZUjHy5FoTqwg79GgfxUGDDjRxfkost7JXCqCBQtoDqHL5FTC4Skc8L7mtcGMwUJZk6",
  "key3": "5MoGaZkkNTF2cnzG4HGiuCiCDQ2qNpeAzP63jvfP8ACVTfnCGUBm5kLFPSdC9AQd7Z4v1dGbzMcgJXQ1KVmByh7Z",
  "key4": "2Nbg1JSXw5WYUGEuRp1eV7rPApSmMgubfhQ6RDQ3W6E4rmy8HUTaPqMMt8dPbVn68KRbLeHH2DZRdDNQUYQ7rvmZ",
  "key5": "5iwTY9d85d2nGVBi35NBWLGRW8u82UfduT5Dhyhq3JDcAKECAXxZ6idiSYhbD9RwpQc6q2TwPyX9HoJxwWroNpyE",
  "key6": "3CEv3TNDfocaYyp1rMUUzCwWZwtG6nxxQTBPGMFVXj5ZAYvtvvvtWuWXow92upguY1eVKBYZP4erjWaxBJ9CiKAU",
  "key7": "53FLrj9Y3mbJ3viKUv33BTaqiDXNUQJcGRZ6YPZJd78CGR9bvNaFK3SDGuaPSBKVp3sH6RYBwwQ7YHYUGMGtYC9v",
  "key8": "NiFCD9rxhKCtgLVy6TowCj5Zx4HX4v2oXetKtSEXwdjP3dVQSny16jACMZ3ucie4KWsoxzuzyiSxWWKM1GW9zA1",
  "key9": "5RoJ9pd49fwfoeQvK3TwbrMZ8in96ZqHjAYmKZgQy3uH5YUp1butwQp9Us9gzEDihasMKbQMub98BnK6YNu8tUGn",
  "key10": "4mvL2hsnfLb49wtWKJDuh3SGqyR8BoXos3WKcYdKkZczP5pKKgJSva9BiSZqj2qWA2456c9CUVT9ftcvxBCex5mi",
  "key11": "5qFatAh1UKGPe3phwaY8TbLWfjWj9XijWpKYitC1DreE6GeFM5koFy2wNPLyvTwnRARdc1gjYbQMEp8nm8XrSvDL",
  "key12": "64gYw34MwWZHLHXrsEncahiad5Wsnswzhz6hWSHxrkc2vRjxyTLaWSMoTRv2xsmSiYmaokwmLVZ4zbVBAKKok273",
  "key13": "19HEUBWvodBDZQqz94EBzEjBVnKmtLnEwUiRvdFbxmvRQv4zkDDGHxXFhP8968bX3nEg9Nhpr25RGtFtm9n9Wxd",
  "key14": "QEXGu2MkQByhRFkQQcfbNRGTDjW5NDiZUAwdihkbhkUQi2fGd5C5G71mNyC8WzfEQwgrws1forBUNK17EAdug2k",
  "key15": "48RJfFBoikgdQkUN6QEkutgQNm2Wqkv78wpyadWJuFVrwzK98G2dmVDJoBQdMpqNAZKhxz7bkHYg7Z1iRE9omdz8",
  "key16": "3qKYfgSuPKCwoJbNQk52GkxB36n7nzUx8U8ehWPfUkmUv8FBJHF5cYwB6bJWWfCmTqeMESLUJc5cC7jajEfGyT3s",
  "key17": "bEUF7UUK8w6k7dB3DLXQkaYepVjwkNc41i23b15d3TAaaakhXyKE3AWpdqPAxfE4zXnT7oupd7SgBXPmrsrjZZN",
  "key18": "5XLXntNuFYENwXLKsvQjdY9qPzcuyJ7hg3VPkqc328Dq2VaAtN7z13Y1c4dqseuRELzTgwFQPzWV2k8WShZxRi7u",
  "key19": "3JRpFdDsTy3dKxbTUgfxxHE2Mkaxpo7REJ9MYKqo55fuLP1W2RuYKbce4aWigHynn98PnNX1vteBV7RXHFHF4U6Y",
  "key20": "2bpA3LvKKSHyPgHS9rk7PCU1Q4fnJ6FzP1NUK94tWgmm4beVgifA6xtcpB79ffQiBxU3w9Z8aFK7u2VXRR8rRK8r",
  "key21": "5p4w3gZexp9AXzhm7PAAnfYR8Apggmajq6vTHfSs3K8YxA52E5ZX7YjpMgBfNkvkkWNmS8kyzDnWzsK3aXXugY7x",
  "key22": "AdCPiioJVxUJ54mnZhHX3A1NLLZct6FJrk23dbLS8poMiGtQGKRus1neiEk5BEzzChTvVCo7aKFdFMcaQhBnBAy",
  "key23": "3Hs5SEQXfdEhCphav1pGsrQe5zMBA3qGkx6eLfgjNeyUDM43ksvyfhFeQN3BsMmFe9aivC8B5m9rCkaMYLTWaeSa",
  "key24": "eF5ZRQPu8HmCmUVA2WtsatSmVQFsF7mQkoYj3mj8LdSskvCjHVzNyHwkWNJ17KMdyyxKNStRxEy2bavj8ukLxuG",
  "key25": "2Y1aQWaU4xpqzMpLAnmYosww2xAr3BJ1H1tzsjs3ddN8pkQiRE2YxnDC5pum4FxtoS5p6Fv8cmXQhMc4FcwnfaSR",
  "key26": "wdTCjaJxw7LjnDrR9jUM6tNjMDBzkEpKy3VLWkVq46ioSCimuy4hXpCZKMMDgN3mbPP8CS1rM2fhjrB1JTqzQDg",
  "key27": "3X2JBHkQWENa7NP1H6SZa4qfoQ2VyRszvybm6YdtayBUfuuAqnP5Sg8gPTS4MMC3ag8QW8YNtYzyVE9yLqnKXgBE",
  "key28": "4qkMfpd7w663rBP5fyTtk3EsrfuFaP4GssqFNcUTfU1AsJ5KPVJi9hbtaxUPfCKbCfrtXhZQXH3FG1hGDchhAHKZ",
  "key29": "4xhE2hdBaFMBaxWKCiz9tZRgtU1orZV1Y5qt2a426yN4bK9vsFcJ7mAe1Roi537yYzuXkFBY3WcdRaFA5TDhLy7T",
  "key30": "2ga2PbZ2ndAufurya8upywBHL5ggmjnY8MMeo8UWn78GZfJy93QRguwxpNveGJtAXAaH2B6NTgppQmxgjKZP9YFw",
  "key31": "2GkhunyThNp6E34bZjVMDX8gbruCh3Cz4W5L1SGKRn5nE4Vofepcn8HDPiPJSxteurMEGWsGxFLhNG9k7qUPrF2p",
  "key32": "2CTyWcsxMh2CH1SVWZHVWxSSX8Y5WLkg52s7xgRXq9Zi2mUGr6x3vE3yo3qjrmGaqhsqcCgcFv28mabSiqhcqBUp",
  "key33": "n1QXtaB2Qn5WT6rwncLmmmbyu6t9nfnSWJbGiHVnX93NfH5BFaEFEPhmQBraiJi1VEfmspmEY48deztEk677NBM",
  "key34": "2iRQF11dXyVgT5qCJDedUDBbgBYqZHtwuJa1DvknAfibUzqmQrmTMdu63qCFMwoxNK3eybCqnJcuJryFneg7rMe3",
  "key35": "5KeTv5V3CgcyTRQZtHC4RpQSAV5PHefPd9fyaEZUhNSi9QjfpMJD2zm8AxEGZcgmUsKcBRCRn85taq3XoowpMh8L"
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
