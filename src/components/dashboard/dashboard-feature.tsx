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
    "5BEctn3G2kNisWDMqMkhUAh72WL6yS2iQFjDGeAjRQXfu5V8MxQYPL1FSHBctCVAJykMWTehP2FrZzpCbjjv4ejg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAGMjAzh6r7sK6PoJ4o4c8aMkTbvCreVG95NURde66MUaWh4sA8MiFSvPVsupxhyeJ1G2zt9eS3uXJsXquwiVHx",
  "key1": "39o7fnFUuydFybgWU1YCM8ivqK4AM7h3EWH39ActVaRLDrQn6qzM1U5XcUQdCBqt8G13ZtYXbJz4Fg3RRDa2u9Cq",
  "key2": "2rcFibBBb2dLjtfQDMjuVydnLa15DWaoXj4JpnZNnUWE7CemzGWNMpEMkk8iBQpTk6SxpmwiqzM3Pif2k7EhhFo",
  "key3": "3qoTCASfsd4cfu6EEkmJg6dGQkYmVgop7wK1Bk5UePsuDnuJXpx7Utsnje1siFrfpcAKXTydtd2JTroVyjtmvxx6",
  "key4": "yUPtPKa49cPCrSaATvkbR99pJcJBPodDnLpPdZn35hrJUkvkE2W3sTsJp1pxdTbzg3YmBNM6SZ2boGpGWtDoDwD",
  "key5": "5qRDX9snPNThA5Ldz8bvgAXUxbf5iQ2To3ZGsdrUAfnm8g6bpPf9jGZe6GFEnjjX58ND9TUvCsq7eRwjr2m58sRE",
  "key6": "csmAupw2SHRGRYbsdrFyrrWKqMUichp5FpWgeiDypNqnPKbkD7EYfPteK2NmpeQ2tDk7M97SN93UH74dSY5McrZ",
  "key7": "4yZc73KfWGqeAwrGnDyZcZb3akCFP4S4S7zqXF9Jt7k9Rpts2n1rvhxy2zMVgC8zVEzQLt5ambsyLZiuWSpM1bqZ",
  "key8": "3eBRw5Ajx8hvxSmUmsZxnQPBfRTxZny2go5UregFnxPEZCz14KSzXnpv3v6UyvYH3jNhz2MvYWZwdmr6bcs89GmX",
  "key9": "4sHJtJtDWK419hb89W3ifjnXU6jcTWSfgnad2zi92cvsr8xCrtv8FZQUeHSc3yf3zgeff1VQqvE6jyzUyCkQ6ZNN",
  "key10": "3LX6H1Hr8d4R9DyT9dbEzU2Dc8dWSJqtcUtVVRPrZUN8JmRzmVsfvGULnkwctGqgE8GNLGf4wkU2nnsyvyEH76bJ",
  "key11": "5pKSc9ahh2nPstMe1LKphAqo8gu3ZqMbzF74UpVphThWS2Kws92a2CLqZPxj5aqHbkWh4XZoKYeBasgg6suv5pK4",
  "key12": "5BCKs3woWaNCUSM5yRRoTyUcJWYxqJPpj4FerWrwya5jnDbNbKjqEFHsFrxKAWuWgY44qwnmecAEfypKQxdgvxFJ",
  "key13": "apQBX4PMqNXC9MH8EFH4wqABzgaJ8n87PSbDS3QbPdU9tskrT4rrke5BbfdAkvf9pFfwGdaWmM1v9wHAAhD11Xb",
  "key14": "5shNVzhnW9c6QPYseSSe1ufiPsnig6Fk3wKrJcaJYSKTcJfjCQYbrt5uQL1q4C9BXTfEtHEKqXCicmmzzAafUPWt",
  "key15": "62HmXHbgggqXVMMTKrNisBe7amNpvfxifnoQ6kaYQWfngZzjCn9khgGsvVeFjnB4tEZn3qR7kH2xeESCZ9PfXvhh",
  "key16": "25RaFhkZjxD2uyhDdqdkbDsxUYGZPshDxKipzD3Xh3hhFE6MLYChCQPNrw4Lxw8v1Bg6c4Rz5qMu11hNuCmPxxkS",
  "key17": "2hr2R3fJTVBfoujTQTsHSnC92HwfKbd83MARMj8odm5NtNoDNCSufF5gCocMtXP2AuyPU4Unb5Chs1CxJgG7k3PY",
  "key18": "MXQ2VpiaVmMG9wJcDU2FSbwGKRrMd1XKiktMjTV3NB2mdty52pZcpteXc4wvpdX6RZcVEExjHS663mfYDZmQikf",
  "key19": "46fkw9bg3SPzcn3yK1nneZdZWRWdpgUvUbosm7yuGCH46vzn6ZNWS2ueZJPkm8C1oGKNNadLS9NY9u3R9Gm4CjcN",
  "key20": "4U8Aqkn2eHhGgStzfq3pbHSzPfgjsL96WTfYzqEiyQwbpKCFeiiu7DN8KJP9KwEhNkzDWCxYpPa9oqrxN7DgeSQr",
  "key21": "53Njqexffdpd5AQkdzWLvAZeHe1HQ9d6HHfrQVdTSG6oVnPF6sfAuce4zJzHHmL4eqLjcZMkRiN2bAZdBqZisWDx",
  "key22": "3GUYAUkR8QTrcwNd2r7C33mQ96dp24TtwDJELBgiPxBRaRWR6YQJXdag1HEmMkwcC2yQtvc7VvG3czn6WmhvcDi5",
  "key23": "2EigBuYWTnnLMqzDrRxMp3evq541WLGZr53nJE7ZhZyGuKR2JV8oFehowk7vrUa7bR1HXvFf1xJVRoYmbjjKNQBq",
  "key24": "5NV4oL9Gq9rtJeMfutyDtSLQPcKSKmdnSeniLRLqQSGskRGKdPoV3YMBJ38bJstaW5xmthgGx8QWWpExYCSSiLtP",
  "key25": "QeJBNPcdbKyvhopdkPEh1QstMRvT6a5cTUjPVJcVF23Xs6K3GKSXDb22vPg4DkCiCPFYk9fAYUj14iCDu7J5zrX",
  "key26": "3cg2UM8bYVkK5W6VZPkiG4jp77T6GY7Aq3gfz5jFvyBxvmyohHATxYVBPryw6FdUzghAXZsYCrm4DrPmxc8Dehpo",
  "key27": "4bf4Lq1Gtu63P4oppk4Hp5SBmZtDo3MaheTkzCm8Ls2Booey8xr4DKPsX4nzhbWwzCUYNn2xRo8fNov8ge9P5hVx",
  "key28": "iGhdKhjjM9m7WkpLnpgK69sordeFAYcZTeyLtzgYe9g5kFWeQkKrpBXm3Mu2dwrnaG9ZYrodgKXWEwQiErHX3JN",
  "key29": "3h2LahShRDRHrfdNiMYz2HhR4ee8rm8DKCCpZtx9vhmq3yoLrmVsYLGXLDk2CaQBUrHYEqgu2mB5DBhy7B5tjpp2",
  "key30": "3gDxLbgwzDww458L5zctEp9VDiCVMQZxGkUCievwvfjS9AYMUcLN3iFXrh4Q32rfa64qCrUoBmuQZyj8LRBZcwyE"
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
