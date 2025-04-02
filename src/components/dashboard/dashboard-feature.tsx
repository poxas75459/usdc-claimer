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
    "33C1Fvc3CMj6qppuihDiJYyziZqNNM4sBgz7sGXttafNbvAG1qGLA9p7jyimUwnw2C5PgeoGnpfKDyGQbyxZiEzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SpVxXTPxfwpwCW7Gz9AjQsDdgxihR3qKhNc36GzuhjLKrPaGCu4rqAeGTa1BrWB4RFZX35Qj92n6C64dYwvmGFP",
  "key1": "4SPw7ahragVbRivswYH8mhNm4itYXbXdw6GK7HvJoxrW5b8GUJzUJkPKUAdZ7SQs9LrJeCCxBg6XkNL2rFsr8NLy",
  "key2": "39Dx82XpMxJLtBJd2p1xdpnr8AxuQ2jkWHq7pVjG9BtL2nX46rHoQatKpY1bbLw7hqezqkoRy4r55qsyxz8DBaoW",
  "key3": "3vcLiRKaw47Asfmg6sMr4qPnezRQ81oVjEf8PrKqY4FYk9AeCfhFsyBaTMG3yQBBqRoSD1gCgpsHAzc1qD9xy9uB",
  "key4": "AyksYRhJspnVcT7CvdmgbJiC2bQgkSRYsdUGiVbLUH5DnZXug21YfRzSCMVCUJqsMvB2bLv3tVJvvVASyhPBWVp",
  "key5": "4kG3J6tLR9xsUTp4CYQ8Qp2NWPGcQsksPZHo8ZEHJ3NJb1C9ciaDdAr3H6phwmEju6DN8xsVjg1BqApiZVFEozeu",
  "key6": "22YcRZ8fLVBw1VKJ2nt4zuHRYkX8Bm1ACSuf47qKuA8oPK6tdgtVd1PQX7KiWyqLjPnm4FRo2cbQzeHha5WCCQ1j",
  "key7": "2pRFBX5vKn6p7oSF3VKmEwz1N8ZoDDVEDBHUYF1uoyoMTLTDk4CTdZg1WL6JbJ8yLQ3gdZjz3L3D29mxmf3XkkzC",
  "key8": "tUP4X6ZbJfCHen9f2ehJALqEUDr3TJfNkv4jSfJ1qLtbKumNJezK2b8ujhJuGy4zmHhX93dNnj1xuZGJhdN6GAk",
  "key9": "RawfS2SYgHn7cHyUjC3u5zCMwfwiEtUG8Yfdh3DmFwmP3FyLMTSg7XKaxeApjctPVab6SG52VxWBTwDZRCDTTnY",
  "key10": "2Nf8Qi3MRdVMdGS5YkyYqcmk4V3mj3B9tXytJvDLbWMVcWdcf92yLMZwGnCB3WWY2futtN3ic4VWzm2bt2pYgiUT",
  "key11": "3vNjzwNYVrf5PcANWTQLDL2eEiLbYJtY3eyhMou28Fpa31BRRRkfC1FMcSce92zbV7d5zFeU2toHfE5dfZyKBHpo",
  "key12": "JkUonrYbXievhpDKvRiuqMk5Hjh9aHVFW9YEX7FLoLhNwQaBtJz8MjCpGr9yPdh4v1UQbqMaCiQM1x69sRzr7VU",
  "key13": "5RjsThKt4wsZrnB5iHs5ubZTc8ziNjmHGQWynhCKindf6rf7FtB7GeMSRGRfAjyGs2KunUcqzdoquY6BmatfMwu9",
  "key14": "3jvpnhUc4P5HPqA1J9XZGjVx3p3SvpDmEqfgre5J3PJ7wCL8S2rJoWpQPLpBNHCtonUwcw1PT4ss64AvuJmQQrLn",
  "key15": "4FavJXJ7pu62wMvkDJYMPxoJc1UpzVsyDcFqJjsGQYm23fsJ1ASnHE5uYchfpwMPZDntDnsvySGVYMrQ5b3yBZTQ",
  "key16": "2rKNu2QnsX2g6y8jFcUd6QvJ2LojKQDox2caWY7C37XBmXkvYzfwZtzFiJVdXsEs9jr6X8hn2ifBDGE8DDFdJmgF",
  "key17": "3nD6VX51uWzWWZy9of8x7Ufn1u9bjE1fmB18frNc18hfTCKH5u63DKcwQK2YgjTAp24jf2MW3oFamskvsFQFTV62",
  "key18": "3nbNEET6o4UUaxihXenVE2bbYMAKVC61nCYwhSBBPr2v73G4mJSzAiugNFW6aKa8KKN9idsATA27Z78LyrnQZctC",
  "key19": "2Jr8A4U4c3wSziTGnjxfh7i2ndx3sFRZ8Evx8aBDwrPdMC2ZxMKvEJgZoobWkwS8n5wXLa2DLcKvE4qqtMFUehuq",
  "key20": "35sAD5zLqSyMK2Hu8R28M4qKuCGCWiSRAfJyNx9HEmqDZNVmE7cJLooyg7Ybp1Tf2inqyCnHjvhAAfAwtfGraGvd",
  "key21": "5RTLjTobeYpJEa5HUUiJpCysXJTck5CfTrbqJpfP9ZoE317LmC9Z9dXyC81RYmhLp9LxWSULKja2fSvoKGQCLqQH",
  "key22": "5DUrrGq5HHokYDF5bytikBHbvK2VbbUUyDAcHYkLUX4NThm86sJFrUYo1HQ8e3CLoH4axvcg9mTEy71fhK6LQuyy",
  "key23": "5rsJzv1DEqpzX9ntdQcSF7HRuWqxE7kaXPyYNfj3tUytKQ1aG51WBiY2baywgbhfFdu1eVgFtCPjCEwWvHi1GonE",
  "key24": "4aBeGsfXTeGYVWNrHHwqVmPTzLpvyMwHGLyRk1gSoj1NaEXMQqnBPFu7sZUa4KZaskr2utv8yETxrwx7ojsvWJsK",
  "key25": "2qGq4mmmcFDVWPLHNs5uQhhQzGX2kAfysLiriDu54cdALezffNJCWxtaLdZBGqQ2yyDL2C8RqhuDNknPwtcaDJW9",
  "key26": "38rYegQJuowLB4ik1YJ7jkvmcbZoNQNpB6h4DtNygbx9uirxDakPBhqjjWPw9xqU9hcvAa3aV2Bfqsb7QK52FDkE",
  "key27": "3uh4bXtS929izucYP9VD4adsQ8x24CGeYxswsW2p8TbfDmqJBNrrS4gF2SooCVVZzYYNsbbaoghQXXSfdiTX2eRf",
  "key28": "2mBYgvWGhwCSWnXQpQCm3txwHJnNT7gFsNhQB9qJiy8GUiiYQRYZ4hnyk9BhhGTNpcg6a9c62exEDCrkoTHBSSY8",
  "key29": "5kSEr19FG1UAhUMBAmN31D94kdvKm7cJRx4aiZkd8c1jqeCsfcV2Bpd3qr7CGVTCY7v3wxiMPbGL8LVFRkGjxC9z",
  "key30": "3HH3jrxTW8rpovgwEHKqvRj5uRZ88cfaPxHEhudQrQxU3XqnqQovyPwvuirxKnUXtq1cbZy2CEaW1A1d88CDTiGZ",
  "key31": "4roZjPVdmMHBJaf5Vnz4FE6a7Squy6QweseCy1FuKiiDfeqzhhhRiapfSkccJb1BgcQYoUMHbJjiEGkXVPXuWe5b",
  "key32": "PwzHgwSDFGNmMmVcnPnCu7gfgqN5AyM2MhpWRDwtzC47YTBN3GYCoMTEQmpjRrwU2bLdq8YbtqMaqQE2CfXVeC4",
  "key33": "2eRa5eMV6ajDEeFq2XAWHxMRdBZG6DTGfpj5cbh4X4bdxEBK1EVxCUebdD7k5zPSdDR7ftJ27vchYqtAdoaKqFRd",
  "key34": "3B4yHeCRisRSQ9cRTGhWd9rjjBPEF92PjqJV9jCNpfHqXmdrJkArEiQYeiJ5jCUfHy8vtPqit7emovcSLBTf8fx4",
  "key35": "4z345E4eyFpvw9M66dYCiqg38qNxN64i4NpTPTC53vNbRM971PbnAZh4MxHEENK9vxcoHdvS6GeYg38ikpanMqb1",
  "key36": "25bDNijkDDPTrigEEjh4WeVZvUD3bE8LHG1Uvx2bsnzTn5X4KtWJNWzwDBzFB48UstqtRgZnKtKDPxMdkncogYpD",
  "key37": "5HNLgrSDMxXhr3nqMjPBPakiL8Dyby9LnzB6uqEFTqQM8HjE4zs5N5GQYFUNxbdznb9Ne7gUqaqUauUM54Zi6iJz",
  "key38": "MsACpTsYPzxKCrAnfQXBY3KEBAen994mKwN5JhboF3oTB3wA7nDL6enXDkmbiEoy3TfKyvhRfLhJXeL42bu7Xz9",
  "key39": "xGV54y9kGbyR1CPFTLiLjVLdNG1fH18W4eZQpGyPMim1oSXWdcniAK7oCsg7yop67d9arMPzMJEtv7q9MxGdNzg",
  "key40": "5nwKbdEiPYDPiNB7no56BUMNcfsnQEmhDiPJReRhcSYNBqGgbQqcL1fcS1MyVSksGGQa4cTD3xFBjiMYkDaPcXHQ",
  "key41": "2ukbnYZpYtzykJsPnvAef35NpA5tPPoPQdfDqqf3VGgAzsLfhwaTTEf5yiZj9FioQNX4XPomoDXjLFJWXj3SNh2J"
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
