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
    "oGU7AbZw7A2heNCssMGbSFXgxGxBFD9km9FJ8EzpTpkQ5kPLErujqRCJnhLriVde4omw8xC8BUf1oEk2cNFnVQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TPosW9HSvy9u2L5JPpYJUGHfjY9Q1wscCND6sU73ouMMEJomyQYcRxm5u9eU8xksdhx65f7XtAUSKJT7h1MiJXf",
  "key1": "3CUu2VhPAoK1krFdHkx6gqxJAZcTenTg1jnqxNQFgnswvcunhdxQdGo4rLKd96KxjrRxLAkTKaoaVbTgoGruQyFU",
  "key2": "5Q55jQCtDSSeLthRcaqehgmN3SyAicYfUoyah9f78aCfSkjeJMmzp9ddBaUrg3eRUMXHMGkd76XubVDuZZQuLMEj",
  "key3": "65kYrv6ZdXvSyWGEhS7zjbdHxNwLJpNjftN28mzcq8yXHQe9ZnesybLGA5PZtx2TmhDcfFGkcvxu2sGFw576266n",
  "key4": "4PF9UnPz18ecYWzs3uaiLtV6GRq4KWpaMGiZPH1ZCMj451jEnxbeMmi71ac9sCAjPSNqB3YWvovorLtFj41hbhNa",
  "key5": "2KDtuwNAuJa9rnECxCk5D2JQg59PWSZQ8xwFszSWvXkNj6E9smN4WbfpxoJNs8hNj6NDAWUPaUebmygYvhX9nrSv",
  "key6": "5m12y51dxT4SiQipQvLWdKosX9biqN4iTT16rNfN8ddaRGBYEu5ACYReWYTtEfrh92kaotbaXyTDCyvgnfGxsVq5",
  "key7": "47FAvUcmzRKUEJhY31VoF8o1NCFFaudVJRiQD56e3i51FVQsCwiY9ZWP6zHVp4jNguzUdAULaDJ36R471uCKs8aP",
  "key8": "4SVAsoocGRSv76RsQSraijgM3zPrYYWFscTV6A1XXRdvSdqw8shHfA5WZS466rhetcC1kjaTGEVDBoaGPF2Me4pk",
  "key9": "4vfvnDonz1WpaxZQx7fCxiwDwdVZX33uqkutVD4fUndRwmhzQstogitwEfbY7WeAsBjUrUkhvuh2SmbQCP7NrsVy",
  "key10": "3zYuYVdQnVSHiVarJ2RFy4ff5mXuHHutdtnY33kmZbu6MfZwDFU3cLZx3juEJz3FVKpcHfcDBEEHYqQtrLbUqWLE",
  "key11": "3o34PUNTWdXmYGAXB8WwL3MwgX7AuAcVEpsZhQ6vYVvmo4L95WCZCY9EEjRHxYVwRNmrqGffQ8SyNkFqKacBpvRh",
  "key12": "4gA4CdiKmyHubV2yPpgJ1WZcvvz9VDgCYtkdSQ56AiQH8sT7QKkTUTFDBxrcuhqvcCkXsLFu3satVaB9AZCSysPu",
  "key13": "4fhaVNSqcewAPDjwPTHjjtsJnka5SNTmzDt5EQVDCkaNUKCoZg8ku2VjYD2ySZFXjZ4S8uKswpWuMBxSrCvTwVbk",
  "key14": "4fsh75qAN1g7R1a4PUvBhnsvmNbjXWZbkLVsjS5M7qi2S87LLEaqMp7k3Mq8n5kbBF3Ge1gAWTq7MBJTbvt7Cvut",
  "key15": "2KV3cr1zXJfkxHpS2XRgc1L6cQMHpEF1E1fWjV4hsxsJWNC1J1aTMYBHNyKFgiDPgboqPaM2wa1sWxvpMs6d1GEN",
  "key16": "m8Uw4Lj6fWRSE6FYM1y4tGYmxRjgXmh9Lt59GVisUcggGW4d2qxqVmSsFqvZWEuvYVJbFJsUS97yybgDx1AsqVF",
  "key17": "2Hz7yHT3XYprq2Gxoq3GhCMPyNST217naGxM8B3gTv3gQ5DUGT7sQLTVEfzig2omkx1wtUwCyXuS5cZvdwZek2FN",
  "key18": "63CEtV8NcfeqZNSoxixvQ4T4ir3topuMLHBFu8FbqMDpR51FN88URsG6UPMAcqScDvpECCS7DNE9AmQ4REEvh9zY",
  "key19": "eZq4RSFqUebguY6GLxYiYrCYykF5ztsTehdpL4VPe5qfNvWAKKMZ2fvK9QBDSz9TPMENfCEzThSp5nZNvziUDgQ",
  "key20": "3x2tvnokJ55irTBbB5PhWDhHk5rJcrSLvCeUTk9gbgjPfMk6wWAKL6qaer5j6ttkqFFprGERhge1Cj1Ufgpd5nxA",
  "key21": "5TQ5NKDDvabTXSvGe25sChYNWjXQmKtDzbAtMrLCCL1yUBYsSwMaHLWCvjw7Zyv1KLYU8XXnbCfwTZRtuvaGnEq9",
  "key22": "RrbcACKU24YoSdQQLKqiTJiuhRUpcnTRGRTaRPPnqRnL6k4PpzUudfKncPTNvf9ygwbonpwzLoZ4jopdcotKCBo",
  "key23": "4P4aoCfKtKYbb6RrB5PW3ctqgisNEk2cJfX9QYQ4CXxdzVk2DwYPm5cgTiYc4ymY8wRhkAfUhj4a4F7zriZNozTX",
  "key24": "pegrXrLM7sThoBn3RDwLszYky9itRLwRALRANiUDeme3jckADaf4RzH6VqRGdRYpyA86zJ3Loe4c1vZDKsbFpaF",
  "key25": "rZ2nZbtHPRya7ETmHNnAvWpC7xaipgTCWwmXfh4AwTrtt515b9vFtsmhUar26B5Uk7sG1P7MXg6LDP3c6hW4buu",
  "key26": "dLrVzVsnhbTYj8mJL4Vw3r3xzYY7enT8ytEKEUkQw8vQoBhAb2EhgYgnbimsNH6T1XnQKSirDoHCFr33kzC9Pyp",
  "key27": "2Jbbdq273vcS6P4EAEXNXrMgCseNgsemg6q1XKjzdJSmeuo4MJUS44JoLtuHKxcMhaQrfNWXw7zztapFhmBsemJN",
  "key28": "ntKKEGjnk2giSwanoCNc9fLF72eANWzQjHtnZmAw3h8PHZR9tB8BuPu1nAjwthQYXkGoNQUNX6FYJnLhCTFCmtb",
  "key29": "43wLWRaEQZeHCLM5s3hXuJqrbrPkomtpUGofKYuyx8gvXXT2i6JEUkD5EuLoAgDNx2CiSEoWKdn8D2SoSxrge35n",
  "key30": "W1bTJmWDeKty3Q9mEgtStoixjAzZFrUjRJghkioLRtPTz6Gy4NZW9NJMJ8cQNmgQ9Da8FwyX9PWGE5NoijP9yGN",
  "key31": "47u1uEVUybgRucYUYr6H8PDsYLXWBoZ5gEESaEYhGpkds9mLo4EaifKeciGX4Yjuz8AC8X5SPLb4L4eKaQ4oTezX"
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
