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
    "2fjkGz9wRuxpNHG9QMBVNdsMsiFrgv6R4wYtWbNv9xukdB6YfGqGVimkXmdtRHGunkuKd6KhpJLrCceAuGVtYmVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dmxpr3FBtT9j6FbgrFmdzuxdPSt4SCkAD1PiGuiu9P3zwcjR1fXUi8XVDzid2bTCNCsaVtuJpmhtfUUKvYkYrP",
  "key1": "23BdDVHVV9ddXgpDHEF6RazRQoHAgGKxGYHP4WHtsNAPnpzqVfHqRxGjUbjqbNq1BVhQ8iSNtiTGPcZpTSrNb41x",
  "key2": "59euqNbFk7oUBRtQJqmjmNhdF1uFijimDqpmdKumBU4wiVvm33o4q3ryrZFLTWsmbzqtyAugg51nX2W2RvjrtJ9G",
  "key3": "3RHCWwcdA7Tp4Wi5WsGYSSx7WvvvxTqPvBoL4o8jiGaNMyh7YPVFbNwt7CQA9vCCD4JbdMewCHMBEKkgpAPp6nfU",
  "key4": "2xRXBtpMskzLNkbm2qdCEkJnbmLpdD1p2MAtTak4H3XGpweb1XTJHe7QYz5cW1J1fBuy3SvRumQgRpNMtBJ7fDsE",
  "key5": "Ym18tban4KtYY3ASr6CsRiqUaWpBbfjnBjaGwif21GFG6oE5w23RQ5KhfQVwzUa5KFJkq2FoTtGt4VBHZm9LGPD",
  "key6": "5ePQ6ToBgGUv7H4jvTfigK1NnrFX45si8wrpp78KPPTBUNkuy3pzokcS4Yp7Qx46X6ChNfa9AkqjsP1G2jXZDUZZ",
  "key7": "3ncKnX8zfSWtpXD8PTVGW8CTzLMpkgT8cJe7GFX7tvTsaHozwaA8biEw88onwF2E6XUgtowa5eTSFhLJY8vh4cMb",
  "key8": "414cePP2W5uNcVqpLeXsv42TwapXFmG211wdHEM4aZGkkN44J2V1svVPvv9943eA2pFGhbQoeFsT2kYYapUSNE5S",
  "key9": "2FimWYi7U9DkUNnu3r8rwcyi7hib7c57CCU1v4fx2adCq85BavDHyanstcneQZUqPWNfbD6nKQDiqgnRkUvvD9cW",
  "key10": "3g9ZDJ2GHNiHbzPyrNRprjZDFFQeWGUs4jv82QzxUk5t34xQjZrH1cDNTFtDXRNLBwGx2FmoxdqKCwPTXq3CYzvR",
  "key11": "5H23brzbxCSHJkXrvTx2cKQzc53YwLRh8Y7zYHHr7vuXdRKs5VXHdVc74N4wwTMQU1RqiaMUpq2ygmGwaeHpMui6",
  "key12": "4wUgFBxbYAELn1ChjNqhDuUBK8qKrNivKKf7av9LXAb9KgCCdXMUmfk5BFL55ssxJYyhJkD4ZG5QRCjpTRRCB3V1",
  "key13": "5o4F7rDgtHnRQ9eb2PW7MQfRfxes545sGkz3vTiJ88PdYQUrSzx3QcH6YstVnjCBMbxaiQvo54aY1mw5pCDuNSws",
  "key14": "5cUcBizeCH7TkUvCDRcN3E8oiHUezAFU81u8iBQJXFyXbs8dvQrbeHr2rwXS2BKcSAan3QMSXELNMmA7yGF5BJ7Z",
  "key15": "3ZCbbfrqRd84d8HPuuDfCE9KaG9tRtzZtmNNBo8CVMfRud3RnLvnMB3yF6NAjwQDZfs5FZLk4mAB784q97fWTtBb",
  "key16": "5oQNvwkodTCAoAdfEYoJXPDrp3Q1ykbrhJvPZKK7ksCzW2FdFEjPkAmwXyLtUUjhczrhWeqk8yzFZBJLdGZUgE5p",
  "key17": "2pY82FKS3PvLC2QC3mcRVbCPuznSDLdbFTvapgezHSfdYqZMxTKfk4nzCG7Tb4abewSqK1jbTbVN89u5znfeuMFc",
  "key18": "26kGD2Z6yCK5sCJAu3U7DMzRPWofBa6FB9KumEGjKMsVnB4VJxQyt1gB33tALP2ZidaADq674Ax4qkzvAE7aKYMf",
  "key19": "53JuGE4HpkTk7oK8ygkPZDYrHM9EQ2kr8N8Z9WQouv7eufQ1xU2Nynhuq4p612SqbTubAvBHpUmcV3Sa5BxybmNm",
  "key20": "5dmi8NGu3wCosgqFsrKKbxqogAu5W7AS9To3j8fHAZa2pZE3qW4Cty4apnwh1zjh6KdJN6Lcna5Rwm7QvoLtt2us",
  "key21": "4eUq9VEDbt1mP61Tc1kjXYSwomMfWBP17db6yK7PoNayNWAqF4MEWV1i3fNXcSUHUtAQ3T6trMFxS5V9pZrDa8y7",
  "key22": "5Vk6y1afXCmgRTkkZM17RL4AtgTPgLJCQDqShZGB8PM9UQTJbif9zpj44MBrKFS9xyc4RCCQg8UCQym2eGFbaVWv",
  "key23": "2mNAAUczDRYhBd8xZUa4gDLhYnUBxjY5oXJqubR75pxrZ25Qf8WiNrLPTwDyKxHnwWWJA2Fwd2cn7LNFzDRpHB6g",
  "key24": "52vxpYfmPVQx9oFR8iMGic79xUrqN19PWRAD9RGeTW4P2ZnpKekmxzeQVPME6YCUXDgnL291frQpmwV37CqxyXr6",
  "key25": "3nHbfpgjavvdkUTmKKavuTukVTYxATgDbxM3zi9Hy2wGAjTvQfRcP91PbaPLoAWuW63BJJJVaSY6hAJe4TCTxKnP",
  "key26": "4DK4fqVV4wSMe2KdMGsuvQDZwXEoZWZC2RXhgu4UhPmJhwP1wpZATux68W7NkDortWRYgLZJXQQJxi4G1CKrYyxP",
  "key27": "4TPSA5MxH5j8cWPHYJTeXtkfFCRY5TwoEQoLUuACoGeUKDygPK3RRoGie9oWTAQD3MSheVTb3aDTse5zKy9HHpd5",
  "key28": "2o4vm7PkyVoN6RJD1WEjQoB8bqr1y68j7aSDU15Fegc8WAQZthNWQHN9tLg8rTRhm3rtobvnXaWHsDEW39GcNRiB",
  "key29": "5UN4fhRTDo5ohwYc6qZMYCxmwFE4gaMyXeJtFs36ZV6ngVys6SK92y9W1dBQDt43qAZKLGxspSPZLQv9LJW4xBvt",
  "key30": "KwVE2s3o8RBcSyCNbFbWA9wqabA2ZZeXLts86cKGFxosXPmwz2fxYE9J2HEQQQYALo8qUi9mmLW12FxrrWyQEcg",
  "key31": "xPk4YaCRJgUeVFHWNE2orZuWK47LQ1YnzFRPahuVq5QswaZzfhCgWijpZ89S2TBg9RUfZNyByanzWN4a6mYSsWE",
  "key32": "5KJAkzEoB78uXZSqZZcniUJYfqYgGgJkxjysNV9vwF1KwNWM8k2R3hXcbxcq9eoJ2tJHaHfJUaUUWhizEaWUkNCi",
  "key33": "5Zhri3jUcikkANTWkmKHGVjUSk6ueANt4NpWzMeDxq5zqeAkwgpqp5ScxQ2gRmCuhdATCASmiSR1w3Cg2Kc6ahcg",
  "key34": "pN6jdG4vNoteGSHFxK4GQhv7WQgA1wqABy78avGnMVp1pZf9Rnv9csVnABh3x7nkbV8rM1TDCSx3pB9GsKDC98q",
  "key35": "ZCKGMBvGEEwWiWmqAMcE5o3bFYbAR7ZoBe7ZCdyGzTNdffbaAeq5ccyJRdAw14J3PN3x82EUSGHWujCDKsy7f6s",
  "key36": "etS2kqU8G4NArC3D4PiDywoFiCPzNDTJTeQpw7H5firBF5NT2i4RA8XctfiAJ5t5zt3U65hNTANfn4uJe8d1aGL",
  "key37": "34Bssrmb3xgUuscMep7ibpfVuFB9GGP4FYq6SrWExb6yyHRqzizvXzuX2i2mGe9VcBJPhZUJFbXXNb7p5jfGJzeo",
  "key38": "5n9ffni318X81LfQ7Sv23nhByoCVgzFLFFAxvgPMBJsSCnss7VaHwfdCV4MtXD51SnVfMexcvNovFp1xf1xUFVYr",
  "key39": "2yXzbqXWR8RQeR96XNzWfDMjiwaR9MDZrQonwvj3nTMNukztSXS4MQ6smiPUMe4Bij89TCMSGK3WdEX2VMikiW4x",
  "key40": "2PSkgn7BHV1ykFECtZRAXmmhAu4cyvuaE4TGYU4w3CZiNYCE8MHMFaKSCNBZShcvEivkNQzhadB8qokg2nGmtYBq",
  "key41": "5puXFgz9k5ndNKiXn4ktm1GqZx2qYoaGA6exR3ZNhbTiLUZqgfXLQvUSPx8HuQjtkXUQ5XMDDzMxzktnCKLsBL4f",
  "key42": "5ef9sVb5LMwkcwqJgWqpz6QG6mKykaANMkE27xvCyt3dKL42wZE9MFbHuYtfV9XAuAXAMfv2tfBgdbxDWaKKkQA",
  "key43": "5UGi4qygmVsSEYcvQHKobgxG91rcHBT75UNpPaUwbNWik2qYxzkSoghhh3ccUDNNvch7GrzPfX4VNWsBr59N1rea",
  "key44": "5WigXiXrPAQFBYR8VY5GbaZUooHMSYKCCvAzM8ot9H7xBUWULQ5Gi95aHLMwSs45uYGTecm8s88huh2Aca1VrcFn"
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
