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
    "5ETxBUw5a6TXy8gYNLCNuXQHymfrKsesjgy8b9uVKSar1PcMECTpgU9uASXvDAHL75DYBBq6kRgdB8s7jXhAYu4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eAgDDwAChmPhJdzwvuhAdFfNQSE6dBP3gJ3Y3tpH8VjAXwjoYM2ygj3AqXFnLkwzsSDUdEGSb6G6R1uJm8jZgEH",
  "key1": "47Wk6XHCBpht6uj4n3ovGSPewWK6PsboDkoJ1LZEmMDkLe9PQR35kmgcpxg8T72UfugEphkDEvGZew2E8BTCjCfH",
  "key2": "2Yp9zzbi5JPrCCgY7ABHoWLhhB5iruroDR4xHp7dPxt24WGMAxqouBenZajj7g4oJs8hc9sjJBR8J9HWbGKiuCMT",
  "key3": "3wD576LXx1sTrUNXh1HUZ8VgLBdPsGaBtSmvkDiroB9YJSaWx786xmY8v8aox6LR7zgHks34mXWUq8S6LHMTnFh5",
  "key4": "2antw9xTZD6LK6fHwAzCGAXuTogC3VKknSArT1JoR7FdBD3FHWrFBbmntu9Ggn7ksTrhpyRFkqNdfejYnsX29ieX",
  "key5": "2uBspS5apNwRCLan6rs2tF7rUxbvz4hbiy2fcF36H3TTRRe7iVePFNFNMRtrVpLwFmVGYJGUCFipqLxtsz7vzrsj",
  "key6": "37Btdre4N7PySgtj3pYDtCaKg3tLwbtWaw3iFAcq8unejmrmrUYMsQWtUUi5RVF59hMRoaG4JxRJfJdBiZ5NzQuB",
  "key7": "3WSZFJhhLXKrQ2L3rA6FwfnYYKzBXoz5GoyQvPM7uDrTYuPsX65fDo2Y7UCY9e15qWFh3Ec4HGv32aofwxQmJAoT",
  "key8": "du5NFYWSbfYvcaUJKrWFjRvSwRqNnbHQAu4mxs3cKiMoSDAo5NWFt3kmu1vD4J9rF8DuRJBtWJTg8F2XYUJ1JMq",
  "key9": "2X33JvFhJyDryAgpJA1kgucLQd3aunCTurtMNWGCEebyCRk9LnT7rrLu45oYqY3CSNEygaDyoWqJFjYqiQuM9aqo",
  "key10": "3p2FVGvzcDgNuM5NPVaZgRSXE6gSWA1hdXVowtkKZmQurSjefRokFcgtfDPzV6vcEDWrZF3qMfbtpP6mAYVCDTwa",
  "key11": "31VrAk5GwUEBYVjHJXfkP5xX49yAt71KRdK8G9kQZnoSXbRoEJWehn7rNVmnuuZcKV1bHAgVcK9Y8FhgDXJvBtWQ",
  "key12": "TZCSqMx7154Js9EsuapB6hqbdU1zTathcyiF7VEoGkcUmHgbGVeUtv5CXoogGaBfhM68q49niWayRae1XvetDQE",
  "key13": "3gq6dwztD5nknMndxA8bzbpXHtCAhTqZgJUn2wkP7xeghTmFk7PHhkb1BozeEFPkWRoTLHEbBZz1b58JBTq8t7FS",
  "key14": "2L5E4WAKyCwVPXyQWYm5q7dHLJmoyTiaQKdoJ1yUc1MqYRQAZuGCzRE71mQJG3Bh1SypLjBPDPDGnGBvrita2H2",
  "key15": "3e1ujq6nHC27yz7dgan9AUKiZUf5keXfBi3cxR4Xw1BK1TzsfXQrfg2CazFrFggLD3VbFdDPafNQngtRdzv286Qk",
  "key16": "4ftAwn1Fb73wQBtUMEK2bXqBJxrKJBdqDeRZiFCu5CzaprJRqyLPSyS3bj9AWCRaKFwvpKL7cuzpEvk3XjMgidjD",
  "key17": "5Zo9pW4n3ES7U6JbJYrri1VDH9quDKshAf6cDfeicNkV8TB4gmTM6iz7bsrnGCpHdWvbntjs8h1waxy2yHzEVENt",
  "key18": "4YPDHeJv5hkAAwdxeh6kvfWtgUnRTVDEFvvcSeZfxkdULnuFiTYGrrhonR1RyL7dCWb1VLzp4KxwVYxDTGWn88T",
  "key19": "vGvMmF8PWiPqFAnUhvSuUGi4fNEUw4Dsgo6FBWwDsSqqzr5qABkGPAdGXpUUQpJ3W7FHhx7oEQ5UiiCazrx43Bw",
  "key20": "5uavWtAyJb84tiPWWwV4e6DHCmUtPizzSbC8YyyHrnJYzzQYT3DeftPUZ7WWytJ5tCJycvX6ErYWpxgCycDQiVzY",
  "key21": "42hVNh1iTXiJUbwTt62nCtWc8HB3WfGLX5FR7UNFUcU84Jd5pEaafqJEcdJXDStXGgAmU6ynjhFNqiX4YaqKpBkd",
  "key22": "unAiojyxuwpQZ5XD8ah4dwt6MvMYg9xK5ePAttUtenghjgA3F2KuGU1WA2i7ir3oHVsN1YFX4wYiHZvmndHxjMB",
  "key23": "XLhpDVNLN1ndkVQeFNSn5myeBcyJMf3hFj8rGRATAC4Gg5gi7K817qAJfsGcAxCT2xQAr7JJ3Jtc8fFo9VyBEKP",
  "key24": "4xN4sbM4RXzhJX4RWUhVENjscvxA4ErNNrLU9exMZZW5CWnfPbFLfUcxSnVLyBH9mMQ7YcSP2hah2hzsLgfMBKSD",
  "key25": "27P1jMSyiRCvfdkPPy2WVyKsmN8wZK8hP2Fh3wxYqns4cTDtspE2CPHm8A4p7ojGJFzZ9955VUyKe5V2Pr8u1X2V",
  "key26": "xN3NbgqDvuwS5yDTEEyri3iYGWUfXDmvYN2vQpd8QAhiS5WSrPZ7XtJcMuLMLSpHULSmCNyGyQumAeDxj4TfHdD",
  "key27": "4RUKnkPyfuv8hiqiDUot1FNd3tYyJKtprYRqqxRbY8HuSSiooe2NcByi9YP1z1rhMWFi1WYAguuKM5FUUiSJrMiJ",
  "key28": "2E67P7RSFeiPrz5KuX4g7A9TT4ivh6QsaZAxgjw2meGJuL4Vy8wVjHf6CdaH1PiUDz5D1yhPLnJpCKEurpamsVBC",
  "key29": "4WGnceuZkEKg6dUGpK9RBm2Z6zR5aJ7CyV7A6yJfLtqyKWzbgvsSoVxYwLo2XuNHo4FX5B8tvkFL8ZKHoyxmXkWA",
  "key30": "5ohooKTf2y3PemtZTqmZFRNgdkFT9fMqW1naL8B6dex22FTVmJgaWseTjH5nujd1UqtqD15chkfmu6ssFLedy73A",
  "key31": "4VutXEqoJMV9Co79iEnJJHoZYP7h4D35Z1U2cMc8eGRNy9sdHKwHipBhf93HSuji7eNMN56nipCdRBnvUG1W7RRj",
  "key32": "66LXcgT9SfWqhbUeQxs4aWDdeWmy86Xft6p33r2fEu3Nyx72DYRKZbvSqyVTH4Z9UK4oHXZHHZvMipZoEZYZZBqm",
  "key33": "QkknSpBeT6gu5EVo263dqg41WA3AyFrbNZjNR4tVzhMJvfCPP6UKWrJcXj4PtM4T53j9CYiNiJ1EhthatPVWcj1",
  "key34": "5ggnCEHqVpvHm9adb8bSVU3DcdxTAp3mPTTLRhDJcNSM2GPhkdYqAxZhNqYg7e2r9EH3nkQeYDjcBcsR6usVn9ig",
  "key35": "47CawkKjbjrQYBgckKZbo1gfWsk2rNKhbbLQofd4K4gHFnzF8B4M2RzSaQqPv2ywcWWRQnS1xFwwh2s5EMyRs58B",
  "key36": "3JwXZKj7u2UwaPwXsZfpCnt2DkmpuP5rKETgSChH1nVGNVi6HF3ne6rANpcBELE8vMhMfUbKcSHcoKrkkpw2oZe3",
  "key37": "2z1ZPPYwLDMMAdpnoyjJGfCMmf115Zq1BpozXa5ThM8ajZU1yVnqfVF73UyzPcSbf77qnp3fkssEJtwCJt4pzm7v",
  "key38": "65vF7MK1P9h2RepmG2Qsfe4McBx33HDuQj5NXZN1xQj5U2zN8jeywLfpQHj3nthen4jdUFM5DBiMV4EDg3tUUTtH",
  "key39": "5ikevDfj7MNTVGXkFsr9VCTVqkpk9k46ou2imvQnvYHiA921hATbUFQZz1cvXwsRT8B6eq4rPpwkaLELjJwoPmBE",
  "key40": "2ikqC89hDq5m6vNiGe3dgdgunKGF7oReqy8fnWcx8CJcdLMCBktDc5ZF2J29tK8kpVfkqpFEyt1zSr5u9YrUt6Fq",
  "key41": "HDkz4FjRMtNHgjGc3bbVLQrSfvTNXEZgvqVcyx2odmTj9r32SiAVPYtrCsFBBMx4NCjCkWuczYKBxiUinDiPsY1",
  "key42": "4XpW6XKHiK6b1ApDkptBV2Bygf2pvFYDpxdhrZ6XTtwnotN6NTvr5Hjt5Kfm9BTSxVSHgKvMEVE8TdgCT1VMUzjo",
  "key43": "g1eRoPwJcMPXNzoD7wpo3JEDr9HdFjMLPYt1dNwHk8iFNpRVUqLhSDd9ceYWxTyKJssBSpheoQpdnBy238pD8b4",
  "key44": "QdRBiqZteTqCM3Wor27dWTjLfXw8RvjfCRn7gRQvpUwwguLRhX7bc5Cd66oSv2qC3Y59TxcjAmHQJgzKHJJDCZv",
  "key45": "5xNbNJBQbfLxLMs8SvoW2XkbMUgvgCdzwnQmuuvug7sf7TqQGucowuFZvN7CcUYBpmLA84M7csFcmMhSbR2en3ss"
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
