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
    "5WrXcmdqergF3LHsU1eLgC3DETy8tK76QQ1aJqCBEBE1V9sBHxLQFYQ1qGAi8TdR61qaT3apBk3VvmUnNivsqoRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FZo76JFWcuaK4bCidGAVNzuRKKckYVe4p9Hb5ntmL8PTP4hatC1UZQNk126tG3CLMSaL9rp3rEFD6pW3HdMerU3",
  "key1": "4WAqdxDcPVS6fFNau5nm5eo2ncQfLXNz45c81a5qTPMbaPdxCQvnxK7M24iSXEB43iF9cLG2ASSR8t9i7BYcK6z6",
  "key2": "4ywEy7b2gocgQw2F1NEMptaBsTAoFg8qUP9KfQDP561PuWxyCuvCJEovy81Tw6vNqqusZq8oj99tLtfUVv1dr9pj",
  "key3": "5VDuDtNSsK3aCAGptJCd73V6NxYcEyhSMGK2G1Xf72GuA5XZ1V5Q4htzTWMDuH2nChLFiH2aY1FiTtp15dcraV5z",
  "key4": "29peJ8MeMCX8cNBRovrFMctVKSdv6ryZ7VSvJZnj6kXAmAnkj2Cb1T1r9dMEwPBYLaLygzPfQ9tEAGTTWzBH7P23",
  "key5": "595mUxAMbmoP9cYTiDHz8QjdAAv5zb5RNcFV2BZRTgH8ZerwwnD1Gw2kHGeinDi8z2vA1ar7VXr47k4zgm58D1ba",
  "key6": "26hjpTwYBFyKj4wnpiscANZ2MK4sKkqsNN6iaWn9Dfuo7m2YJfaHLSEND7dehnSFCHsWXjkuJ7Sf84PqGUwYrWNQ",
  "key7": "5nUPgNxstU8BE2cF12Eii43F95G633DUwERrx5E7J3iWpQijPCn3PtbnaiEdgGLt8X2br2DCNJQCgTqaxfLdgGQg",
  "key8": "4dpAUrT3y1hK1WQyBJWpzGi3muxDcVvntnjFnwP4PC6eVjgvvyHJugFhzdk9H6cw5W3QLHswXqFDgEXfwz4ixMhg",
  "key9": "So85T8Robi9MBPTk9P58a5dUdBz28ejaZr8emCsGNYQ6EpaEYC9H2J1KJsz5JBgzZvdLMBSorwcgiiXg8dDCUVY",
  "key10": "2WyoD5xuJr3dNvK6eSS2u4SNQMAaQGWoYgJBhv4zPoq1R6qtDKe2ic7q9QXj61EBh5fFkD9NezftusRBY8e2epEj",
  "key11": "32iFDpGBiG9x1qVrrDd7EKfKy3d8tiVzUPgrB3g8LgZMy5cWLgZnmAyWNF7BsqFsq4WodacNcptstug1RYgfK8AX",
  "key12": "3bp5gUiPXk6H7UeGghNmHVpF91aVwotesYkvp33L6ES5VxPF5ghdnnqiuzA8LGgH5UQxSzBgBNyhjfZYUq5mL8W9",
  "key13": "n6ETGohGdy9CgyVLDjgBXQ3S4aPRhNuoXUqdmpZhZch18h7ugzVxen8xMfbGAwWpcKDu9wb5zBYYcq2JmrXCo7U",
  "key14": "ryF9LifEb2A2e9VCHX1RYZgnYHth71V4coVRFUdPAZMdkEbFi5wTmszNUy1o6WXiCFYLPzPrwZmXYZvjgnLhBFr",
  "key15": "5rp8fyKdDKrM6R9MZdemHirEF513m8LkH9eTp5GzrKyihGciBSKSuQHpWHZruMmCRUrCeckBnWA9kEG9uowDn2YR",
  "key16": "4ymyuLEkorKo7x4yc9jgBY2AkxScfcxyiBWo77k9rUdUGdm4YBjUmMZnp2cs9VxPqsafCt6ZR56JbuxMDhtdWR8p",
  "key17": "2LAB9YKM5SJrpowZjf2HvFSZHMUGbKVrUcApRtdk9mYRSDPTP1mSU1or3jBWDxZsb96EBU8ejpVRVq12tts9EjGo",
  "key18": "3mCJja2Wbp2aisr92jjopVDMasaTBDDy6Y83tHtkj2FYw9UtgWW8P2ey8bWxSRBZzLXvAfooabswoe8MjA9WMhtN",
  "key19": "4HvhEUZ9FXmH2xBsZtJG1BGuKkJKwaPSYEMoasEabX2dVaEyTvAUxchmeNHkXaFLvmHMKCDnwbKpaMq3NUD1o3dd",
  "key20": "3w1C3fiS9wzm55LTn1kxHEaDarST5XHhx38898ki54qeG5U5gM9MJbgnw9jstarSzRf1moAYFienorNEZ6Kk3vui",
  "key21": "4yrtb8Deu4N1ZnQuH5uehTmDFhi8ZMWBsBRv2UXczwPi35wt42mb1VwZHrysnkaykyprWtEumy6EoKo4ryeTHRTZ",
  "key22": "4XfRcmBJaq8fkeSg51NFiMCi1QVfEp8DchrZ1rUmtFmTg8jwNBgsBNAfJakKCd55dwgvMDXypPHnmQE5Rc9w2UuN",
  "key23": "4xi4c9cKLvAEeKwqYQmH84kJqL67Q3keLr9Jsx4UYcWByvtAWGFr96ES4e83puABVu26k9p6xtFbLz7idXL7FbiT",
  "key24": "2hNjUwafrXPUH3acAqiYgNuAGeFykW59m5p151Y4md8zRMd6GWR6kJ4tYEhaYzq2vAqMfy6rcbYywiGwjEFsKxnz",
  "key25": "2kyg6ScAtf3DrCuzNNgRDAUoEjpt3kcfLRd7nNMUTKGrUsBMukx5qcHuf5K9EBdwAkvfsrseRZ5PhTEgEkDQrh7v",
  "key26": "2gukbtjVKfgByZud5E9nxAAX35Zq6DfZtgL1ttgtLfa79tF7mKYNBBzeUyshGvRXRwH3AUvXfEi5rijaUMeeFd6T",
  "key27": "58wohnHNJsLgxhPqiDbDUSC8K5dCGBmVmbH3D8krM3wpnH4xPksRz9agrKRCuRjpCv9KLBAizgX3hvQqS9MYgShe",
  "key28": "46MNH3n2HCy6KgTRabNfPoBUvDdukmuVSvPqm8FCZkdTfW1YKPnieeAF7UqQqc1e3SdUEfvCoyxQLoBiQf5pFtsS",
  "key29": "3TucUyrgevv2tAPTjTEqAAxMVH8gD9bE8F3VhtkrQR3WvdBr984iNavSNKPZHWVLSN11HKQvqEBSbyksfUFxYjZu",
  "key30": "58sQkrNRpXX6nA5BPsD32U9ix9jeuGcMFFVVBPCoXXET1ktL4XwwChtSpdUpNzwFtsRcF7An2mAvLUKCUKcoZTrS",
  "key31": "krEVfAdDcFL6TGg2R7FHs8wC4a6dTnsAygiCK6Jwn6hPWHCxsqj9NT49zLWMPyXoL77MDW9cQV3G1FX5o3NsRub",
  "key32": "37QTrmU7eHzCXMV9P6grVMquwJ2CU9VS4pHapVZsPTTFjXmtq63Fsx41cRs6rJUxsJNiWsDST3KNJj7wdJDDVDzD",
  "key33": "5esCsJmJoACkiV2Zi2NB49hgnkgxXpKwYRDM5gxYpCTGyMQJ3P5FL8NKuN7B3XMYKFJr9cfwE4J63DrRzWou4QDE",
  "key34": "3ny1NFkzksP4hUZiecSCtrHD6wS79tgDknpUJnP1mK4UHFtaHCFxqj5K8MmdKC5ziP9kDvA83of3YWcbV57kMYc5",
  "key35": "2N47uDCtGGEm7x5ZGzifrkgJRRJXjrUC6ax4ErJSL84tYMwfnyVsSsKLAAiQwbmNV3RLqF8tG221fk6JFgLyzw8p",
  "key36": "5dZHcqqyc3VoKEiLuC8JpkodJdCBfQvnsmSEcfi2tJPLnJD5aSagMF6HgzpgcvHYeBhJKtPQQtBXmdpuvh1K6UXy",
  "key37": "jrR34dByAHnPK1RUXcrip27jziRQF8q834GGCy6mAsye7HrCaUBbJEP7z7kR9HphWbuHioJN6TxbnjPvWMU68Pa",
  "key38": "2JWk1yjwvv6h2dBQJxHcUrpnCwBuetFQBkUkUHerkWGF2ALwiBy5DS67eVGdJR8Srw1PASnyjGUG4iY24LwGh8K7",
  "key39": "36GVJpfidrYfRuvowjHqZhwAETLy7Kc1KbSgnm5sHsARF8UnVDRU2dnU4NycpZkCEiHwCM5UX9r6u9bGsHLRhyqp",
  "key40": "2ELEtjEgoXKqkGQgrRh5HLaEYZuv5oAxMQs1dKpyeXZUdhULcF1XppH3YtuExL729Qc4GQ7URoAnN7uZCi1BtUbk"
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
