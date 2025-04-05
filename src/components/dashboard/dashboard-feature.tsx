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
    "5KyERVk1WKJvRRYpbTHLQDYMsLKFwi68vxRukVndpgdfCqzYN6T9bPboAkRWELRciu6VNfjGzLCyCNLuESXwWVpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MpemUns6o5Bo3T1jMwjPh47oUKJu3BTgUcfXYELxGpF31buRDpV9fgiGKCcNg784PgR113oBw1HEF2gNBUiVYzH",
  "key1": "2VgC5zjSLUrqRVsqe1PdNKi4eqtFDt6Eu3XGcvTtGguKQYLwveVLCSNGgMMLU8PkbWTU3bnGhNJ3pe4VVggvi4iS",
  "key2": "3Zxbf1jz1EzsGd5yNKtUrzkkw5MQRWDGEybSs5Dc9mtgMvKEGUqpfkef3CsT13xMADq8RP6FsUCnu1sp9tzU3w8v",
  "key3": "4F9BhrGpmU1dLr48zVQmkRc5xg8q6TM67Q7yYJ7ZsQCwJRf4YrucWKKKg7DCom2ZNUwcnU8Syj1LW6sa43JwvKLN",
  "key4": "DWLDNZjD8b5c3amUBinpYoqsq96RiHYFSederb8JzEncQw7i8ryoTpiL1nnGoh8tbiBCLMuiLgaWUp2EqpcMphQ",
  "key5": "4MQ6Lxhxs1gDPJuXQyRpNYjZnZo4F1KQYU6WvK2EqqGUFajGHcAVA1MyoQMdQVZRSMuZgaG3gvbzU5DkfZUJTv4M",
  "key6": "2iAQU9PoMUrzd1G4vU6uxJ1s6XzWNwCZoFPPEBzwkGH3ZuEFErqrAZdwTV3RThUbMhpRbHkzhYNG42brh9i2z5To",
  "key7": "24gJ7oWTgmXmJmNVngk27cXbHmrEWygX7xTAuWUUtEVcNenKii5QHUSGeBv3qzrA5C21ZZBbQiks2UDRuZRS5uqo",
  "key8": "218ysFFNtXpcQuCUVddLjb58uBbSii3F9wriUj4b5zkVLndZMHbxkkQaiUqLX9BJf7jCjSoejZjMixidWf9qjWg9",
  "key9": "25Z9kuvUh5Z6tgcPcA1n1XoMXVLczZ8HkbTS4VGgVbE26CminQed6MqhCCgZUPcTmXjXS1s2hn61jUTUGJp7YCVH",
  "key10": "33ZzobsS5Dxu4SzpZUC5FtATbNdwfRsBejzTEjpumk1AUZH57Ue1xYPpsaBzJ3vaZRMA1PsxHywjZg5fr8rwLPJt",
  "key11": "4KhwwBbdQPZES2fcwuRiag6vigyyErv1M8T6GypRhp98WmeRXqVfgbbWa8tPWbF5i3rP47qFjFa9HRectVRmSay6",
  "key12": "XBB3r87VTXQcsCBkyLDug5haB4Seo8MjGYjeQRqr4bmv32a9e6x4ashZyxoPa8Vbxh77WHG8ovFrewAP38p3MQk",
  "key13": "dA24LNzyvUEa5JUjHGGDpn8bJY7LExgD1f1BXvsVUfPa4tZjgLsUjWWWexB8cHySM15NGDGJhUukW9WWT3vs9kS",
  "key14": "5h66LWA56Sx8NKVg4mSGjTj7gZRDCsP9z9DDhphDZvMHMQGufWYJKdnxxLzWoAV9TiCeurLgBbkJw4iNqZARYr1N",
  "key15": "4h2KnoVdiDP3A4s12dJoeNpNeF6xH8aXrCYSMrFfm6v9wXpYFfN3ABYFxtuDKy3Uuwr1N8uAmSKhS8uiAeBS8o8j",
  "key16": "2V2U8qGN8RjfNpuvRs5yy1QmrbH7VjZjhNkfjhuqnBH2aHpG9uNu6mU5L3NL7rH9R1Jwk5oJ7s43yB8ieS1ZWPQD",
  "key17": "M7H5TCbCQtVNH35yDnY5sfekXx4gGFKQfjF99UB7AkCkguvFdJLbmy6ouie2niyhdDeRRX96UTYDyRxS9QinFqU",
  "key18": "5Gf6qZFcAaxLvNGZWqyYQ35SCWraCKHDDc1aFVtzxWnFoxRofJhFMTSqhcknXW8XBUuxCfzePSjdh37HEm3F8ZoZ",
  "key19": "4UwQhnDKFrY3ftsdfKNoXto5fuyzH8TFyPr1zWqgRRhpQKCrcQzsCvBqvcbhjvTKJ46q6XHhzLVAex2g9bWMtKjM",
  "key20": "53nFz8cwxDgr4ZCp5vrvWdfE7KtSNA4megXNutMSh3kVGGa8nGXJz9TzJ99HBPc37ctfpNzyTMQW9mDG3F9EmKZZ",
  "key21": "38bWoH9zVQbdwjB6Z1Fh2iofPHGc98BCoryorbMeyLncbZdFz1EFibRfrKYmtv42GH8oRhDfHGAukiDPcPE9iA3P",
  "key22": "mtTYjRiXBVkvrCyPpUSY185wFJamSKVzZeDe9ru2yq9wVVXnDL14JVn9MXaMpkFDxYvx1B3gx4xwwZeitFcHnrt",
  "key23": "38pXSRMjbotkmtTqLjWLydmGUHXUUmidAtJE5yMwB3m3k6XsJ1kKgECSm4vdv8gU2Cg39xnThDL9zWEFYF1N1Kej",
  "key24": "5u75jDXo6jZekNihTTk9icNAoQtr6ZrEKtYWZAEREHzY9TAt3i1JKXdFxC6toFzAqNL76AkeviyzhY2kMTgu71Tj",
  "key25": "2SeN5L7frdBA2FrxWZRX3DxZy2BKVHXH9cBFcqxLfop1BQhKDY1xLF1S2nGKfJKkFWawKhF8pyWLHQxNNgksaVJC",
  "key26": "3iid1Jtpdi6o7mFf4W9ssxG8HP2C7VX4gByJfcF7RGJ9651NDvd6a99WWFzV8kXj2z4RDorPKFSfyps1SVVQLmqz",
  "key27": "vvGGdVWXaSW2emekYt8MnAJLKA5v1xVA4pAfgvvsawiXX2AzcBwxcqEToGoqXQyzBYAyKMXGDg4J3sV8WpPfZut",
  "key28": "2umVG9xW4HA2MATTxg7kYHAEWaimDLSdtwXRaU8fBKRE1woQ5U14Bp3s2Ud6cWo4dQcczz6SEXA5wDBnpfjkcQrU",
  "key29": "2aHPbGE84X2QyE6RSPvguuBVoSh4xM3xxzZ3oh99ZMGx6LdpqqA6U8rvGvBN4UoGnRXAc4KZwDnxawWW1dUctShF",
  "key30": "2J7tNJrPZNhag9yrxgB4eVVdnJfg79R2XmukVdoKsh5rZTk3whoKtKd1dRExzQ2RKjRznu8Nxwt15724TDqtkfAB",
  "key31": "4cQRRJkWq5NQjCcwNTvHJP1PiogRR5rvKbQnUQcjcGADpZLrsAEy7yUFnfaUe9FFUoCgD3AH7U7YpPD4PBrf17SS",
  "key32": "462LGD2A4KCGgQFfRFBUN5mubqbR31SH59TpYZV1XgCVvuR5iPiFxJUqN5GD5gbogXro3qptYYNxz8tfKpKWUVEu",
  "key33": "5X3TWFSUXnmQQStsz9nxkDoaoFu7osRu9FFnqk8LfQzayp1MJz4MDnW8AE38syMQY3U6hD4S3neMKHPgk4FfVuEC",
  "key34": "3G8cSFc5Ag5EsaGd5SfeWG3Yz5qWW6149wWKgacqr3di4pv9JCG9muqZVW7c3ZKg1CHshKtu8rnWncRZwzC6utK2",
  "key35": "3STp5UA3hvr4fgDxPaEMpVorUfzgGj2WyFBXGZuTCUVQEZoESY36hzUcWRat4NPfrLX8CfhxdH5xFCJAhbUd7anV",
  "key36": "4uVRkuYygGBGRjs5mjmZfySR6S3AuXVktFrxWJPWZpX8ZtpQXTW5EGstW3bqaqawRRXjt9dTkqccnXgAm4qwzK8Q",
  "key37": "2CVp1dxzBEh3jV4WRJ88URsjV1sRA7VLBziKYu7LBpQBvyLCXmL2drXhS5t4V8Cib8hNy5emryDTVXtK1oJJ4my6",
  "key38": "5KPihidfgAhun3AKCjzhkEhLQiYQakMvYspue4UoFnFS1nUiBmyqfhVHus21syD3XwQhZyA5cNaXnj5ogdVntVgs",
  "key39": "GPAbstBygfvNM7mgqMCcCYMZrFY9uDhKAdouWcJ55nX1HLVrjYkAgz1q5u4zaahNdq8vL4fGDUXFqfX9QkH42S1",
  "key40": "3QRwLN4z6cXFYRZ5J4ahXu9YWgA7jkZ7viv24CUEPpGKGs39Bm8HwYAxXCGXFpi5huMYUsTPC73b3McjmpgNsjYk",
  "key41": "4a6Fdej8Uqg6HDgEjmrVZucJCChsWMZVZnzXoAKqyKZEDGs4KbwJAaMPWiSkywByUEGxk2RCnhtRMukLa4oMAuTw"
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
