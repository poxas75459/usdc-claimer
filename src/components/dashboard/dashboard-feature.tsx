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
    "3rXVD3nGgSACmFzjBavyPMEU4DbkPNB267hNj6Q4NAYkqB7Z1mhBfkky3fgSzTfDfaWKsrBg9gdZCGKQV9TTJo4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XRcLQHyxjtBxty5qte3bf6Px9pu83KpxQyxbibmW2uAjEzd6WxUEDNVzxiP1G6ZjR9tsL958BV47Uizp7iTyPjw",
  "key1": "3AkEzvxTzLi61yJ4585zBeLwK18RKwUvFobvfy93z4wfmMonCdt987SDwgsHBNyBFu85UT6tZhoFdggu7NUkALyi",
  "key2": "4AosipujjnGvJtgzXtWSYuqNgK1HQaqn4rHVX84BC7D1jbNsFLpC9HYQRFdJGfkacWyMsnDkGGLGjkRJVGoXRcqt",
  "key3": "2BZYsBRohiguqGwcFRFtz8d7nzauTE3Mb9nFory4XPr3PgkexCNCPgYYyspxPVfRtg5F7LL7yUVsfHFWTAsCNQhv",
  "key4": "5bVCNd4X5h9pv5VM4tfjufgQ7zD4qGrfoVRQe9KeHvmghnasiScATZHSJTApRD1YZRMPRs9iGiayYqtfxbTRfpH8",
  "key5": "2AtcBKzKGm8UfuunaRJqN7npYveNz524jnsoKdDnh47SuqJyzq1ZE71DZA7azSxu58GAK6sjLBsqdQFA9cue9XtM",
  "key6": "BZEoKDnUP16XdGHJCD7t8abtyrZyanMooFkY7aEzo8VP9HHBJFU3pnqFgNboiAwTqujXUhpTCxCXDRXpJ5TY2xF",
  "key7": "5K4gpMfh8bN9WqePYFknoWfgHHkPjrbsJP8Zagqmv9rJ5VbHt2ezK4YA473ifxovPNEV2aEMwzAbe4Mf7dFT1b6L",
  "key8": "3obuMAW4Nrceg8BZEM5Xd3tWK44S2LMPkSUpoDmny8Km1PrwVGYYeaW5JMwBMv2cEeE4AvvSrKsPgh4MvUiLfit9",
  "key9": "4gA6qiriMMwxY9r1BJE9qCnH68s2gqmXgJVAbFKacJJYKubKweGSWiXkfMF9Gchp4bkJoBAWzauMVjAPJXP1PuJq",
  "key10": "2u2wo4PZsrGBFKMUZ7ysyxdWQnf3zk4ZtVEgW6oePM1cTyNqw2yV8dwxnxHn6G9k5SosHA7bLs5pxoZFjCQyLhoH",
  "key11": "28ESMrzggWpBV5kNAQftmTLssrQqqbmYENCJMJGmN2JwB3HsmkTuARxfQ2wRauJiRbBqCvwrXqsGRnjD9BPmV8ft",
  "key12": "54WB3nj5BHJ5t7SR2rygjy2Pyot7N9v7ko5EbuL438HrVSaDMRFDeKSLRQZUNVrU2xApsTzpJgGNUJzTHxDH8d12",
  "key13": "4NcL1D452qMWzeinSidtmw48qu6wtVS7AsyShF9S5vmvX7HMW3tatd1ZnCKM89GoHVpJUxGLbFVF8cXfbLb2t8td",
  "key14": "57zvA9iH7gHUgPGYQbzt7bwJoubB2eN4TXWH74pSoKhQ55jtdVoVRsqEY7QDHk4VzF6BT31ftTHXJAaoptZxftyt",
  "key15": "47wmLcRv1V8uUnJsZX9kvWCYpEZg12QPk1ta8Ho5VKjA5DAWBFWYxKdYdFnkNkQLCUE8KpjoGB7jYvEDmBmBU7kC",
  "key16": "4CWPYEJ6sWEVvmL8w3Z6jX5pbBiyd8XwNoyvpieHwEfaojPfTFaHS48PnJyNUzThhLB9rTrGjpZPTw52SodsgEyJ",
  "key17": "21JHtwsQRhnnxn4nZ2Wd8qHLi2rK1RnPQ2Au1WN3HYUSaahKhiqaCj4BN7zsHojpYfAqbyHx68WrZR8GX3DVK6hg",
  "key18": "48pxkjxoiQ6ihnFY23VDMC6MDYeU9WQz6RMSm2zcb66WgHagSDskBXQFyccWY5LTG3ZWfhhpvCSrXM7vyfSy71Kn",
  "key19": "3ikRPoRGh6AppAxCHAdS6tQq1CQsyxxjiMxtBS4EnvEAHprVv5GcW4xGUDsGeHmnzPAignvhqYc3wqtvFCXh5b7i",
  "key20": "3NVfMFsTZJjNGzG5Sc1ELZ4xpu5xZYZjBtD8ebE2QeB2bNmp9PKQaWMmeUYaVPmRwizUup4rbpiNRDaq3LEpW875",
  "key21": "dJzvRYf62oczMNMXHjjKxq51My7HZUSyW25VCzG69TmDSFQu3dDemsA22n2EryDJLXqY6RtEn5YkGR6Hswzm5cV",
  "key22": "1dEu9Bts4knyoyHouNTGMBPPQ3aKrtzBfWErEA1Ut9S2WTypenCu8t9WiKUUaUFP5RCi9cRCyAtWF5tor6Jfhcm",
  "key23": "5dyaUWsPe9V96gdmxq9U9oUTxNgMKVNo4WBYbrN4ziCLGSDcixXcNz3DAnfC6j9NybCKJeBZpC7U6Rt6ndFnz5G8",
  "key24": "5t1wUJrwEtGzSbq9wnHFDuvQ1MdKSYTVZuxfst6b6upJrtNZaZA7KfkjgpQUQTik3M8KQNR39Y8kszfdhjY21p2X",
  "key25": "56NmXZH9SJvV4iGeAxYnLAdEV6zdfBrzJnK8nhw7mhFbgrE59hrg8CD8D9fBbvCLuWkmNpkHd2qvys2GaV36FhEb",
  "key26": "5CLRaypke2ziTm96JQZQd2ocEcZPV95WyU7DA6FzKskoiUQGiasb63Y3L4Jf8hVMeBAgp2Lb9Sk2iKv3X9LYYnZc",
  "key27": "678eUwXUZp4JVRmbMcuUCCLXqQ51pgvPSPBQtnBJrnXGspisfctuuYnczCgNHq3BFwFVEwTcQAkZzSuJUVtP3bXC",
  "key28": "34zyWXuhkMzJaxWhg62vCnR878UCmztg786YZuknrk4TpXfi66ectU8zAC3bn6HWPmx3TLmgijM8YGiFVhUU5je3",
  "key29": "ZhbM3YSpicyafMhf5tJ1ZtaxouW1vwpVyG6HzYVVeoWhg4i3jwaG5xkP9PtzzquxSvRVcJzWWam6rJjXSxLZw59",
  "key30": "2ikih9QgEsXP6s4Fkkb9sfHZN6UqSnHDv1QivfhMFAHGGDK9aoWrgX6JUq4LmY82LVEdo75hPBaK2tQVbKuCfaj",
  "key31": "4uhPqV64HsFHjAA8ehpcA4rbReGxXmT1AfahKU7qA6XPqKaTW1C2HwmdFhik2zXudmaEKsg4KH6DVHUXtN5cz1pW",
  "key32": "7WLozdsJnjf7tQYYZipowU2n1CviXmGSvithE37yNxBTWyaU9gyjfmvXq1KWwECehBKd2BJXhutL8ipERy9s8Ew",
  "key33": "4TrqEkbWaLfvi5k1swLXcgfcHAU72Zpcoj3htgYUzN7dQqsqN4J2c3DS7yQodEtY5i8H5BLiHNzH7hC3kCQEumzE",
  "key34": "3Q8xZPg5GZu2226bwi8AxUMLzy1J3VtfNJ1F2QwYLGJcMqP4fo1q8Eb7bhGQvQQDGoRip66gqLjFGNJ9VU9Pn94k",
  "key35": "3D8q82o56TxXdHJZKexpLMM5vrTKoQdAxfQHonG3DuWv1gsJi92f3ya15tb5D4ooQzkbGneaLvz92Nus5ubE9eYH"
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
