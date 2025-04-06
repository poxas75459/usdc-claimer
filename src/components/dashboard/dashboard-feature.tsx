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
    "3L2wv6Xj2HAJ6br2oE9v5Skxk651bxgotgVQ83HRFPRLezqUxxuSBunkcubufgmvfynEKGJ9nL93RRYz52y18brP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Udtt19BLRPyoNy4eBWXqxN8TcG1zZ4mk435Skc8d89Jqvk8EUR19qer1WQ3QRuBsNjqeMPNoqY7Jg5RSLVpwQJ",
  "key1": "4NhSrm6CtbPQ6CfsB6twhjFKi8jucCJL68jbp43bJwL2jpPu4tKP89FfyG3NFPeQxaULh9cspZWBtu5fjQhmcZgq",
  "key2": "5gPwtR5gXzH3uVbB6X7MtmEv9WxJWSWsht8zHgxq2AivvgxaKBF7yxDHUx5TzQirxuSD8WS4cYvvV2mNbTdZCP6i",
  "key3": "PSxTDKwT3R1wnU7Xb92hXo3zQxvZUmxsBreFnzPWCeLHC2cYr18LxNJKgJyX5jms69Uz7U2yVQq2f98f2hG3WrQ",
  "key4": "55Fod1SUjW3abvTPQ834Ccz6RYSsaUaGaBJT4RJCEjbSWamkGeQWpko3fRBtnZZ8i3vXye729a4GvbNuHzFxwuyi",
  "key5": "2e9yVqibRsQH85nFsoUgNfxhp9qr9mx964KB3z7XAoLxiCE8EPzugn1pS8hHPcyxt5KCombQSHJezsJuohKoCwgR",
  "key6": "584JhGbR4tq574uB9K3eViiGXyPEEVqCCio956mCMWV5Xtf9ru6etUXhPEwcB8iKtSFyBpqUpkeiQvZRKxurknhk",
  "key7": "3aRgP8t1MApY1G8JNsS9xLUa3g8oXh6TCinpTjPBfVQqmKoPFy1KMYj8Ye7UDqnrkqS7nfAqknXagKD93RMvM2ja",
  "key8": "5arwxXLpenFZ5qZtxiavErG3TuW42ad81CWM7GSmY9Xndw8CWDLWN8UyuMepW2yUqJRedLRNK29otCMCxSaydcTt",
  "key9": "5vi6FEJqSQdEq5oonzbmEEUTqh1QKUnjBAh8Kwm5wZdtAZ6i43WmEaXVbWEjZEFB9YUy2dXZ2W2rAP8yPk924qik",
  "key10": "5shMFTkvjpYAhBs8ayYUwHa7D92aMgqNT1gvV7kaEQCfAjnocZUoWYAYe22gajcQq3JJvMhigo4ykipCxtijGEUm",
  "key11": "4A2nMdmEd9U3hSAMx88WhAytNxG6SazJ6PjqraPmyafDbadifVzWVVZmcyKfLQL5v9pZ2avnrVax3pi86wmdme3M",
  "key12": "22HHPRZXxUHQCav2W61EEdXiDQcWSmivnoMDFq2tk5NXceudbcLVxFBJbnXdwppZ41AALYZJWqFQCkQxsfZUk28m",
  "key13": "5qeXVuvAtFR27JJ9EqmZpPz7k8z6f6ppGL3HtvdWrAV2ftd1368r5QJk6MjjeAVA8T8SRYBDvzRvSsuX3dqY147y",
  "key14": "4pEsHAyTebTXjTZ5ui68XyTHfrsAoSeVB5RbpX88uTSwoJmuBEeW1H8KA8Xs3Asjz7YRsmpWX1bPsfKPx6AALXso",
  "key15": "5RwK8GwSeh82ZTGfypfZdeUyL2FH6L5gAgAXmBpK7v1HSTNfDCxQaYTx9D2vUsgdQ79mN9spQv5SHm6HStfhM3F",
  "key16": "9TSymk2jzpTJbFGYub16kEBFHNCs24vCW65n8cDV9kyMRferDPvehfX1q7pxnfe19RBhRkR7Sg1oDL3hTmYrr8p",
  "key17": "tAcEVS2fL2tuHZCYZju1KH4omo4EeMLMcp5U2aidFVB5YgntTJij8Ndumq2vRtkkg2YPC8BSbCGhjSRPgwTGwWa",
  "key18": "2gSND65CSfgnLTw5uGw6YHEhRnnJUcq92ZGxqVruxrU6JiGajVdJ9H5ns13sHRqtAovYWcdib9fJSDCCPPgpWweX",
  "key19": "5o39MLCyTdsPa2Vo1ocundZnNkTZSWZ4ixivEsksTe5QqvtGkMvpaDUbtHGWD4wY1Py6QTAT8tZv4ovnaQGgNnmF",
  "key20": "ibqLugjdnFj7rHQ6MmDd99bUX7uCzbHCKEVzm6vcyVuA5tdXLgz3jBsDR3RUWbiApBKmy85aAA1uJ2XoKu28vB3",
  "key21": "2Pvdx3UcQY4qBTiqAGHLMHrwwGcCwVC3Y77XCDo7LNMeCGatRgXWknTEsf11jvxNDLTX6ZU8f7HbTcwhYTdbWHeN",
  "key22": "NbgLD2P586mhXyFSfhMH3Gy6i91evHZzXqbxxGgfxtEoQaM7qiMe3KBkdy7MDsKumEpikX3DQYJJWay7GQCqCqs",
  "key23": "5iCeJNCvK9owpjYosYe4Hqnut6cQy11HtSq4Nq2beYWy2hkKHvWNVcfUB9YaNwvsmPJ2AszYdvmrtCe3cUakN9LK",
  "key24": "3gLSeCughMHwWNYpwUF3HsP5VyDdUF6rUS5c7V8EGbFPvbCsFEptcm7L6WUJFenNnPPvq3JcboB7fimJKAqA2drq",
  "key25": "3xhtGf6QqdHS2SDQfEin6vJppkEEdMwSGzBgjGjdVnPA4DJGA3kEeZcFbt5tr9Ujs2tgQ2qMiQhkxZPuG4V6dne4",
  "key26": "52twb77Y7ojmRAmB758YHV6GWMhZVpAMXUR3z9rrJUhTLGJ9tgRJE4jjsR7ViZxSGvFg2tRyfr9Jur8eq5Lw8oW1",
  "key27": "4Tu8DmYbFjKm67rHGvCKbAS4dBnwCDtCSHphTxeT4Ng1tgjHa3qvMTALfAroAnKb5AWn5Zyn2VZcusVU9FrsCGTr",
  "key28": "4ZeKTS6CEWy1e349BfStVT5WoJfbK3RA6Y4cgwfJvXzQZduHJmVEZNw6GUpKGKJP9QrH5yp4CwHrMZ51gAxb8k68",
  "key29": "5wWdeq2CfmRXW37R6qNjUp6SVsAN8NmBW2StxEXjKsE5GgzKuYSN7a8oX11p1yBBZpWT4HkQR6RUKibSpXdBEW3V",
  "key30": "2Wix8WcNeJ6Ey1ebPXaaTfTgrD614BMz4UaqSfa17X99GDe4iS5J3WCxJZatYbFCxn1n42a16Ctrz3XKVN73ayUT",
  "key31": "4AQr8yWsuprRP2FkFmJVqW2ATGX3aC9TFBRh8UzHvS4sCiGmsiG1QBBaTSeBLqjuDujyoVFJanjyoV2siv4ptK6E",
  "key32": "5NYiqGEoH3DR61zByYkuYnjT7q9h6k64GC55sAhyVYNAgPpkFJaGep2sTXKXg3kwKTWshuvWFV12ZAJ5fExMJJ1p",
  "key33": "4frFbA36zH4PGpqbpfFN8bwzJicNx1Pv4skicR8jkWvpdNvMNzBddBNvG7qirmVn46Cj8RDbvCioCviiQrj9TqpL"
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
