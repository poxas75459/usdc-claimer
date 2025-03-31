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
    "5Amq6FUjLQKscVVAFJ4qgqeN1wDtYzp93dfHe78FrKMWJjaqyHHidQN5cnpj39dUmAv8sKgowEsajfGkscj8ivRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkB7EEqkWaue9CSQaP6FnRHvmRX5zqdSWiKiGFDuTLjheA4prjDzShVSmJNUYEyuCbckq5FgAZR3FjnhCrUCmX8",
  "key1": "iBjcgReyMVQQ1kCaNBhy7FTXhKd4VtK41tZoEhKmBeA4tg6YWEF5yvNaeD9XfSAZLXZCKyM3K9bEe4Gpxe6ishn",
  "key2": "3sUBJ7ryt94kSrvMV3gczM8xPqDZCSbEAeag2m3gopAexUbeoNoRoUDHVTWyok8hAu1FEN6H1GKc2g8XvggHsAR7",
  "key3": "4xpZjTiuSiieXyNwPhXh9NzDXYK8GUmLXRzvMJugzkKbh4UfGHwmefhkVSm5Lmiy6YavoDE1ihpcv3597J1Xvgpp",
  "key4": "3SVrZ7qbroe9WERZaqs4aL5tY95JVnTkRCR5p3yStcNL2rSZEmkNqwGBCrtxVfkq59KTqhBL4sf1jNtD5NaiKE4p",
  "key5": "3xStnKgzX1y91HwpviNsee4CmdZpB3bo5eW85Ek17PeKDy9XyQkZpzy2DT3Pe3SgvfriCuiX6xtGG9mePRz1FazV",
  "key6": "66P3DM7MtY5XmWFBNhsHktctoo298v3tG3rfZVxaXTPPHRcPZ4DcsRUm6eZg8PJdCWK58HGwJZGGVQuSareuWgkE",
  "key7": "5umNknF8Haos1qYmLMw622jLWXqu4TfMN3n9wQTYuexC417KBqdCGEmLZY1SpoKaj84yR2JoSBv8kDRRFodQEYfy",
  "key8": "5r4CZbAAnmJpKcev74D8z6jJ2du3LHGW5ev481YpgirtWviYMqkje8WgqC87R6HmxSGLYB3Ei9SqiSMfRD89shQV",
  "key9": "4UWXY4ikTWcxzDpy91LfQ9XZ59eCx2R26bRYYs2Gm22xLBfLKBXJZ2TygXNQSg3Q2CpX6GNGT7PbjVVuSWJRB5eW",
  "key10": "3qGRuBkP8tqszVU9m7ogPTELhZJKt5k3iVzDqjXYb1Dvs6TRA5BjQDBzFq7Z3YcwjSTFmGtx3bosChRhS7ohczmZ",
  "key11": "5Zuiu4gKUt1DwXup8kpW5UoV4dto1aAqcXvHUkATUaEG91Gr4kTfxipyjLEFGqje4yJkMNuy7hsUzxfxEjD3aqzQ",
  "key12": "5HENPbUmtZqXHcZZemHZw9zQvWGgyqHPUfNA9p9nNVhZdP4ryjiEWn3FMYLSykxSKb76btX81pLdM4Fw24fZm7xg",
  "key13": "4adapgVYWVxG1iuQFw84v2uityuJD1x3xuxJQt98i3wAURDj1RVrR7EhsMqvHGYxrrtdxJ1oi1kzLpL3tvbmeuKE",
  "key14": "5eJpA3SSgwcTQmgaDD5pUTjrCB8eqG62N2CVZJUcPw3cu9oBKyKpXm3QPvTeTKeGJUzHhaJo6EgK5CakTXkzPmqN",
  "key15": "3fNvV9tsDDu8asGKNoZNegP8THsBcF67mQduMCp4Tyuh8Co3QXAzGPmyrQQCTCGtNpCHh5vHUnd8iXrakNbT7ij9",
  "key16": "gecgfALqinX7Kk58GpyKfhayk5pwTUeiJjL7K9f6JxvzFaXwftGBbWKomD7RF1Gs6oMCDTiWPiFyoJNAWQaA8T4",
  "key17": "2mf1x2Ng6ZVnJ6R1DVYu4sGPyEhvxAG3kNSHwALnRFwLb5pon3AACr194N5GKiN3JjPam4HiiiCYA5Rz63yFtqaa",
  "key18": "2pPoN5Ez4KZRnGLsWsSPpawTMBvqioCeRJg8SmBrsZg1uKjWvfJmZ2AUN5yh1HHvqgxsCAZwCJffKzE1oE34NiCa",
  "key19": "5D3BN7LjTiKDqXwqFjQ4iHk9c6jAdWPeU16kv3h6mmhnggxzxi4WcRZHTmewpguMwiXBCGHu2RyeDc9Smg8VfP4P",
  "key20": "2Ytpw87S8oqhkV9rgsSQfHqkVVRm4EqghqG5sR2ZV4t1nfFYCcrjBj4sqD1TWA94NAaHY8ohxEoGH4oovR2Xsdb3",
  "key21": "2Gp5Rsrke4dA4CsRShUEERQyCYwXfUxQPhgaC9s88hzeLBCwnYQvRcPPToasQBjex49qiutbnEc5Bh7wGY2DoamG",
  "key22": "27xKp5PAfd5nWbn1SAHwCLnhapQkqxzaruoSwRYYt9e3X5omK2Nx1mZhkKeUU18wrVSD37GBEMSS5e4oscGDqqow",
  "key23": "2SqMPPj6aNLLDX7wsk1TUdRw3VpgU3oCgujBRduFDPXooPNBU5jDRjj37zYNm5QmoRhwLwEZxbg1Gy2hYx2YkAS3",
  "key24": "qPjET6ugjZtJSocX5Mj93ecVeLs4sQs6cWMHsDBbLv8QS9yTZXMnZCSkGEy21vTADtDkAZzpvKU2686DL1zaso5",
  "key25": "2qdxCNyvANmNJnLBcKzkAdWh39D99J2zZpzXSwpHeFTUDrZC6ahB2zvPuyuSBWzrEg1ufXicwagxM4GZNXn4gmGz",
  "key26": "3oq1M5vvT5A8E4NpbYW9cHMZcCDqFe29oo8GUzWN4m26zpppeUwfUqAE7EfSCvJSgEbtmgb5CXVSr2EAiWSxPgGC",
  "key27": "5cMgEpfD4znJHaAfdQ2bE2p1zUyxMzM3PCmYfWmtAymCFyUy7aKTjJqi9gGDELN9NpyiQ2fvrThbihRKzqqo2fTS",
  "key28": "2EvQCXj9g3iQUUhvJh2bLvWXooJoxdSBcTTi5ApXGSvNJG1CGhetfyRWpAoKj9S1Qq6kgaHNgaawdkdPMSXZxekB",
  "key29": "24PbF1qrBnKfuRXJ8e4oy7vGqjp1s2A79fN3HscRy3LXPmE9oJM9LzZo8euFPNRyRbpzi2afGM3qZg8WRXAb1GaE",
  "key30": "4ToRbensCVwtspKaR7q2kNCwmZkunhPdrJ2Wyw88c1qZHBBxmvzWQdenckeGo69WoQoNB9VWtkN2yycMy9GtxC9B",
  "key31": "2ZbWhNjyf7BJvNpz1XjEQnpSREFC8MVgLkatinSvhmm7ZeRVYTtj4Kvc7rZRMEd4WbkepzG9jMW7ozb69ZqDGuDJ",
  "key32": "32qWX7xxG8s9yhN1aTqZJmXvHggyVtnTEYQ4REr8zuWcYNjCgiNn8eNAQXAwRJQytrMg9gWcqiXqKCPtPV85rHQa",
  "key33": "44m32f4pdXpX7Msu2BBzioMVcnVvTfUZvdDdFMiQd4mLph1D4JG3B8cphSPxfVdK8EmvvXzKqTckcpmHX3Y4W9ga",
  "key34": "5eu5aJ6jTAQ2tygC4KPvzbBGtK21Pa178vWmfuuCuAN9w3MMw8U4yYaZQLj9YxFLheHTEs9aLa5MyHaXWY1AHJG6",
  "key35": "4j91mppCx9t9mpBTxbm2ayzxYiR7SNw65c9CrYLFsoT84komcTVMxnZ5ZTWXn5PGaRaKZuk7cmce5JtuDw7GK2an"
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
