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
    "4f5dG5kjMGbp9pE5C7q3jK1xyb19vZCXSFgH4Dzezv81bGb3FQdGGyt1nW7SjbSzPNjtBqidjdhaXURoJQVbWoVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSErNFGc3eYhnUkERuXQUjz5M6MNPK66LehqCZyFmW4TAawPrtMNFNJ6jUimaMky9om3kYzjYu2wMEPriwZkrY",
  "key1": "pdJ4M54SwBC58ycKCJGscAdV8XkusB85KfCj1YmNLZ7qALB4s4bb6RayEKwzRzmwJAQGdVyfiUR8NLopdjhjULt",
  "key2": "5ZBSZk4jhXHMzMmkX5bawnx9L8jHZyeMfsS49FWsYac8djmfCiyz1G53XQ1dYahAjxnsFocH4TEFHWS1YztCgfLa",
  "key3": "5uVrwGPRP15sLTPD1Gm7KAYhy6Gk2ZrSAXN78v6mHLqYgrgmnWAKkyyXNHB4jJ6J8Gn4Ck2EXFWJopMNUMfwfW65",
  "key4": "2QP34sGUjxYezwCjXRv5vYWzz8bEY4wnYzC6SjJ8X2ScVN7CgHrGDmUVbdixwh43RBr5oKM562zVBSzZ6WGmBc2R",
  "key5": "4UG1byqhDP5jckEAXGAD7DGHSdxmamePzzwNmR9eKQpxzFyU2Cd6WtJbJUs2gxrmmyjRvre7bJ1m8ree9fshKPfr",
  "key6": "7ZCc2HwbToMWNeC4yj5sUTWm2sCFB3N32LPYZYiTw8myVQZN169vJ2Y2ieW9MoA1Es8qEc9auKqoJM24YNaAmQp",
  "key7": "43ZfLrbL7nRRs7Cdsq1jp5svoZAvCMtdPp3wqFj28GVFD933DATz25q81oRqsQizBuNTJr6uU79CGYaKmFUNyZjf",
  "key8": "5uRCWfcKFyVnQnW1zJzxEa7GKuoaHwefvxQdtuABbgVLoVSH1kP8kMsFku3ofKXyG6CYXgJuY3RvrBYtJPrAHtcW",
  "key9": "6MFgB42xsoyEPDsEgXErYoV9Dy2rnNKEPafhWHGktkcQ1kmGnTLwGaWm37pZwcAsTNs7GevV4LvQeU2fttW1pUb",
  "key10": "2xQVooq2J4hLPyJmdMSJYs6vhZXxXKponMQ6GTQVAmtvhVuKSoj2DGzgSw9r2T73UoxHfz6qyz1CVex7vTwJqzPA",
  "key11": "5me9qbEKe9LUfWyxJ7ziR74tpjtxxTPZsBiegWu452LmBd6SPiAXarU6qAJ9pxpYr7dDC8sjQb8HVCatfTn5pJEi",
  "key12": "W62CGzW2MshbU46RxZMBEBL64msCRmvn589yF9fYuzwPtAJkCAnLorZMdfaLgyvr22TXuaBrDv3gqkXtZ7Arjgf",
  "key13": "4P68xrRb4ptVkrwQDhYBK2Hb1dncXd1XyH3ETZzgzfDyCsdFSarPrya8PuepENEQCzad3niFwFs7JR96YQPaBK19",
  "key14": "4h8L1WuMiKkmjxp3b7i4SAUXfjsZbGgj54si7NBU5Wz8jBkeuVddhffzFmPhfXCSaqSKDdvJcCFZZRUa6XiGXFNo",
  "key15": "5PY2opSdbPoubBaU8wuDaDabjKRPk4tBWoCq52woZcXYijk1PMmBKSboFvtCKYHo6Nqb1KPvTNDGDibPDa8Wr3by",
  "key16": "4G2StWVcaA5sik6Dddw8GmeLDGJhDxNJEfB1rRsnTeMoeSJhXEQooySg9QKePgJg4fUi7o1yybtC3YY7u6r4nprv",
  "key17": "2be2Rn1Qooj5HmBcMNgMjiaMuRRiNQtqovup9PYAvtNV7GqxMCwNSoPiCrdwfeNTQZz6XAVCw2mpNjn9AzswqmjG",
  "key18": "o3jb6eNNRN85VjXV4zCaU3V3SUNs37284XdTBPwgSgruotgL9xPfD87r5WGHtQX2CZQBfUKYfAEtPkMq5ziNCdg",
  "key19": "2YEimLtAAkPZg11FUubc7RZKjUTqfAVUt6zVewnhrHh59A16smSRchtBMac3dhd1wUEamEahnmemsxQh14pS5ek1",
  "key20": "495j17hex92eGXesousfQN7JhcymdBZ5Hvbm1YVuBMMrbZfAnpmvWh3a55UEdq2dtmqPMwXDdb8zkjZv3vYZM5DC",
  "key21": "GZfGHdkV96gJFyhnXaecCcARQ7GnjGDvUP5p9T3ZhwSAWWbzbUDrmynyuAdeWnAGHcmkaUdfdMmc1Z6XUd3P7TH",
  "key22": "3MPfGtFQY2jh5xPjP72amm2gjY9rbPu7HcFGe8Kc71hueQmCyUycYVBQcZRLikj86msTRfTzd9u8Hq18RjoD17tT",
  "key23": "4dMTUTNs3i4T4vgwToZ3rEFGP8L6jrMhfWjNbq9CV485XmsojqDVTktJYReUj1wHeVnSjxY5u4Er7XXEsrmHk9W6",
  "key24": "v1dNbaytfy6nHDHQZVQzmRHH5vRMsaMxQ525WmYUv3bq68MKFyfrWkiQq1bAzejLgUutMoGEvX39dYT9haSdZLG",
  "key25": "3BkUnQpgbwKwUoFLLqBYPxG2dsEkS741W5wZLHBvZu1W4vtXUuRE4qYv1sztbKsbH17FNWcqLiCKQeg1UyFf1zb7",
  "key26": "55aC1NCic9JPpqH8xEoiQ3aGbsZbLN3yMeGYqWNAocMuAeuWbWur1qw5wuVrFzAUVJiyjytaPzCLSJeUjN5ibyU",
  "key27": "5BY4Rfia6F5n9hpvrxzg2tymLqTrXHe4HUFZPAav1z5ShsxzpJ9puubzcPjbSYhxA7kmvjK54BanywoknsdN4kPK",
  "key28": "5UJWK5XwGGMKkq6Bfbktm5ReWvuv7frzoM2B33KarPhS8s7CiBpTE5GbLDuPivdw8yjYfpgz1dLFcHzLGHky3hgn",
  "key29": "5ZBBtS8xCqfJbu2tXV9DLTU6vrNas5WGgFk39HbBD3gpSD8ttZ3YNL4WzxUWRV4EHUXYCckgQeQ5b1LFXirwgdcC",
  "key30": "26m2GMovVVmA4gJ1sP3mKK4PQL732CjamXdY3b9ZY8HQzgKnFmzTUn7GDeTvGw8d1qDxpJ7kWjp5PhwA9JcTFQ6G",
  "key31": "7qiPdoufxcxjrFkn1ndDZAWcVYhiirSAXZck9HSHWKBZg21Y9ifDrCNwfCzyqney8myALUeBuP1j2i2A3shHCoG",
  "key32": "4kFCQafbsoz5a4H5aKndivJrZHYYMkYhueFoaWBLkBVXSW2RqwF6kELuqzLo3PdJ71P8i3DqQdsDGXmce6iJYqvE",
  "key33": "32LNGSv5khzeftu5NWMxQ1xp1odHLwanQL4ubi21aRMK8aW9FMCHXqdHSgTzRMtDYkv3v8GuX8aHcPf1H5g3Lx8Y",
  "key34": "21yAjUDYZRMLZvJH1dA497ndiGWiQHGgdUwWXhNGufPnEUcaGw83x9Mn3DQGfSewcj4Xvrntd8sZmPwVYXNoR5G6"
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
