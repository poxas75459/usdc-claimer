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
    "5hsg5MkD557e4VK8vsKaqCHBEV3qSZho4fyYHscdSGTZwQfEHbyfFmhG9rCHpEaU2vNHJWBuAEEcqmmnbmV63Lza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q56fh1y9bSXirJzJo4dhnkYv9jULP4YhhZGEqy6qUfdyER1a8jx7kmrQ2evr2Zfc3ZbwdhwhZCzoyXtM5kioMrV",
  "key1": "2hpQskkimLqt188GXBx8wCvzfFBeF57sKmKP9TtiAZeD5wPPvFAMoGyE2pWk2ouKBrHjEfFdCtaa8ncR9SAbdqLu",
  "key2": "HVayeEDPcTgHULEmDjATaeJWQ3Qvx7kvix9EVu2vd2bLGQM9VqFLwnTxcjA3GYTLKLwTHqbZ8UzsXVU3K2KcCja",
  "key3": "5rZGv6vtAGGtbRMzcb1jHfGz1HquqgRNtG5YziAFhEMP7TWUNw9rrFnXVv5okZPXz13TMQrmzPjFDi1YjodCbEUL",
  "key4": "5uLbXTKLFdyEfxNcmpJL7cQoVyjpZNyDnee3tbmW64vk4bsVk6HShMm97o9qmaybCB5qd4povewm14Mcx6eNzNVd",
  "key5": "RNxhXnBvXiuKX5wqK8xxUvquUFDYBMTdrBTqLS5EPgoFPgiJCgLN8cftAYPF6cQZG3mpKbhB9RLhvbrHNXhC8MK",
  "key6": "qiqBDSZjannKpCgTKE83cCPNeB55Y4enXoZ9Ypp2yGphNuri7fq42A15S4hq8DnGtxviixCQa27eriYV3Fu5M6E",
  "key7": "4CfJsMaqrfZkPmErmVhUk8nt87RHZPa3E47vMjrPwfypxCLSGRPuedGh7J2UvqNLcxQJV2A5iJqQewgqQiAtSSJ5",
  "key8": "a8zV65wZM5snSXzmCuFU7VFRFWdXhxaVrdEMc3Nwd686sjaGwJgrDth1UKZ1GzXvCKJmsv8yG5UancRBSoxRHuG",
  "key9": "63EXWamg9GeP2j8szeioQio4AiMJbpqYvnzKF87QSTmGCFQqxceRjn9GupS4yr4dFAs8h8GTBKj9cPAUsfGhiQWz",
  "key10": "5XZrtfbgqhWLQRVVEQhWPfa4XHtAeiJwob76tz16A8VUne1QfjwqswT4mMm2obDCapprHJqDVD9KVBzmdSPw8Y6S",
  "key11": "3RSpgLbUZP2gsqFdjVJgVBu1SAVQG4944HkXkPhJ9gEK7g5X49D8ugZSMGeYmHHuzQx5EjV7UmMCEwbLsN7anFEJ",
  "key12": "4e6R2aTxKYBiiu5C8gbDvgPLCCaTTQA7WtwTLDCMvuTffJUzpU4nTzCJXNr7BpBt1fMSydmLzcXUvBXPD4oheZJJ",
  "key13": "4EFaKDjgBWvAAMSvEQW7aYPp3Dff1ztnyPZrEsuVavfao3NTuWc5C1JmQgtot46Tyui4KmWwqLUiQUkBaEPGUpnh",
  "key14": "5oXCQLYD3Ad2dYZ81x9EodCSXqQLXKxGcftS7f5i7yF7Zmin1Tt8KASMfdQY8Pbup2eYVxmXVr6mKzo9gcn8NRHv",
  "key15": "T6Eh9PdDfu8iTKez4AvhgJLFvposWh9QsSMV9G5XK46NpSip93wyTHpzcbiZujjhwbGKtDRRjVmcuaaS6tBDaWq",
  "key16": "2d3PKEwuAiZ8XApn4h6EBgF7jFGZQRhtouKW33UiUSwZtgbiDsp3wrMjN7p4wtLPfYCj3hhm9XutRsebtfVPyrnq",
  "key17": "4iRWeV8vWE48CGfhmRgdeMpX7WvWYbVQponapbGV7FGA1qhozgT9dETaMZeptwFQUkJqVuiyTn9PywcakejcbC4e",
  "key18": "99jW3JLp9LkdtKPxuihF9cZBJwVaSPAkWPMbry2VscrqP4C6iLC4wn3sXqFUkR5DEqe4WyKgebhA7PQuxcsSB2S",
  "key19": "3wX3kPj2NF1S7eDu2mpQqDmrnp8iceuSU6CCL5kYL11oJTPMdYdgQcC7gVtmET9TWXdRQV993jnV2i3T3KKW37nr",
  "key20": "2iKrc8gZrtEGBjpcVTDRvU2HZ27GmeqsTbnB3P1DxgG1kWjqDWL5t2GyyaZu2XVYsDsANgNALeKVaFX6NX4GK6nT",
  "key21": "4QwgiTLvARU1GFQMcstWrHG2AWKESguNCuJr9RzDHD268FyLFSsLPfAuhrKE2Bc7VAvCKU2SpmeKGNSFNqFe9HBd",
  "key22": "DjND2coTrE8hvhPSTtnSR2j1Hj5HGQCq8yajEkRykH4HJaSbnZjb4obMtfbm5u1x6QvExEnnbupNjQR4R1TRfiW",
  "key23": "4Rsed8UpQUVBQtbqHzWGQMPtP8JR2bPrB4G6c7an1RzV3F5ekvrv4mtHYfkxNaqTSJJTW8rnBtoBKoKB9js1DbZQ",
  "key24": "2Tp6DNPyVatA5FKFWh2ctmvK7tn8TYapPRwfGLw82cfxcAfSmXLaxjd1BWtW1Vg9Wpbw3NY6At431L8KsLegTbjR",
  "key25": "4uGuSjUXooTGKbKAxY23YdTU2myyyySQqkgbxubfcRQMMVuQ83BzeYAt96tqLNMpFUeaWC5uzTu4bNv3fcsrde2e",
  "key26": "35vE72QU5sFH1A2jKG18nXGgnZLgBJu524uPsoyCt3pjimUEyzbjDF9PPQ6AFafkhM6ee1q2hvU6taGFva4Snqma",
  "key27": "3xKtHvWCyHVLq1WM7Ea4tzeXDZjfEP1Hpy3VDfrBhStfM1zLz4RGxaCMXu6pd8tEMvj8CSWpjQ6jDnBsV5A3kWGG",
  "key28": "63ZD3T3pKp5TLb1yAjm7g5qkbJLj6bz5PoLuAmjwh7Mf2SSvpqQpEbgfPugzbbUPUF6nRB8yXmXuzQCwDWP85e5u",
  "key29": "LFByPs5noVQDMnqfkN8gz37bLuaWdpEduK2iWjhFkxhDFRHyJWguL5efctsgTobVWtDvuJeqHx8uMh2qYqeWVsE",
  "key30": "65kjeWWHYgh7csKDWNm9C9xwYCyPygBx6HEaiCQFU9pgbAS681eHosQF98LvyfhmaVSecRr8CjpmPVPJQ81WUmT",
  "key31": "B4n9X4nP5a39B7Xka3PyZVbQr6azxMGzqtLenJk8D5xFZessaF3QigjXxL9Yt3f6TZ7TPHVpWhXjueanPRnbfs1",
  "key32": "5xLKzcgoguJ91PsTC7k2PpY3AJqymfNUSMfFng7pLQbKgv7iQkKr7DehuBNEnT7gePHP5zZ1RR6pdJVEfzcH5S5i",
  "key33": "4Z8Te7gpgPiVZKA6b27egU2SmAtDdTTHGyGBdLnkgdX7GptkxHm1iS3qrwy2jG2XzoSCWHXXrMT3qvspifEaMJ7y",
  "key34": "3Nt7vUhAvZJ1sMJq8VLpC4Ck1t7tyGjWWE6ybwZgw5xTEkjzV3w5CfV9dqwKirQ6d7VrF6TWucTWv4oPyySN8Q9F",
  "key35": "4ZiC7a9ZonkygPF26MY3CagAJtHdCMY5ovpo89FKBfSGdjcnJ3sk3HyFjzDXL3SdRseeeKC6kYaxBPz6sQDEQbrh",
  "key36": "34FZ65W9nJWMLkvrEAEmZnMDEsL8e8jvizNcSc77HrXcqr8G4UhhGB4xHvqToDDw9RGaBwxzZUKpRSPFK1SKJ7gH",
  "key37": "4AxjWJ3iLNWXGernSH4T6EraDQDJydDxizeThSotryBYVks8o2FdNQwhNF9uoNTvaYddrc9j5SnRhqg9duPLN4hs",
  "key38": "217zAJP4cfi45JVrZAfoyR2V4H4z5V3HZR8Nf6nkEYJq2cVEMbvYyS5KUZ5ovmsdHF8nU7176iaHMNQVj1urb4VD",
  "key39": "2wKii8uBXqcXxuZKtoGyundqU3rWJxKWTKmeQLiavg5QHB7j828JvBaphZwdg6KcSpRoS3EZkV7zx4EHDg4dAPxR",
  "key40": "58qP3VXZaxmTdxFPFwYZFQikjUZBarbRazfnhwuK8QuvTGaSAQYEnf7RVUndRLpvyZSofVnFrzpKLNdkwCKJz551",
  "key41": "2oCm8qPD6kaDPoUWRa6KAQf4FXqfhT1G2o1nGZvT84zUgFMih4GRPrUFfZ2Y5CLMKxigBdi97AYKtgLHDWyLp7BM",
  "key42": "5ozSKDguukA7QLGnQHSCVC12R1GcUeu2DUCStAZVaPNYt7u7ZwsdFktS9iVdY3cGoq25tbZdE45zNwJBpT4i6Dyc"
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
