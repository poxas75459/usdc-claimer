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
    "58da1mSTRSPSDnZ1ExucuUFcbSibihpYfiacjsbf6g7j1k6r39D7FkQFbDvygbDYLd5qfnXM2AxtFkBGK2VAS3QF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVn6tBK8c3Yzw4PgV5CYtBv5tMuo5vsgdT5sR7BzMRs8J8Q1mGpHpet9jsbErD3ehehbLYjNCxHhsUWJJNSKYeB",
  "key1": "3Btp5NzSTSnM959ym6nMKYC8udNn4SWJoxDo4N55TfB1so2Je2BHq5Gcz9D8M9GtwxWfH8M5vr6pGHTEirFezypZ",
  "key2": "oMXvEbwwMqkwberZ9DzzjYSiU4fnjfDie7R7TKVVeE1CZ86c8FxrLmo79kFCKn97b341B1tzBnCtdgAP3FhYqYL",
  "key3": "5xmyJNHbpzxG7pc35mDguFNaM3iSkTfk847Q9ccQayt5LSWpB1f5NaHMZ2tTdCNokSVQZBcRkQTqgXzvkJtr5fJx",
  "key4": "vNmZtJSdqbNyrupZS9FYdf2ZxWeqyM6Q9k3bFHn82hBrDyDYEJPHxM4JJZL8A8x5RTC9i9X4hmWryw5U4Fu4PnF",
  "key5": "uutY5Nf9xd5htcNiej5yPH7q5p1myW8PnPvADyvp2Wybv2KRJi2n1NwAX7MPu2tpTGV5KY3RZGgHoU1EXXdkTQY",
  "key6": "3ygyKFo72Z1vkuPFjUSpkNDFx54cxb5DoxVszGnDBLzhfWsokuaG9ZGNEpHjSDURCi3wNSxG9W62J9r3p6UMBCKM",
  "key7": "F3nJ5ZJhoeNF8HGKenE8Emhtii8Hn9KnrGoE9z8ynfxhsCwqPbTrwx6R5HRY3NdnV3hkccVSSQzb3GrMTWvUJfp",
  "key8": "37tkvBpU3Ut1ypvUynNS9JbL2Gmjyj6SfHpp96SZueLvWRM1H6DQJRBDYa1HDFrwGeHxfrqaJUoTF9gZmBXtEsNV",
  "key9": "2Uiy1kBGCrtXyZn98D4Tnt4dKDZARCmV2ZUAGtqhkhERigeQV6XCshSjC6pgfjVorFUBqD2MNda3ocDT9D2ViHZS",
  "key10": "5y1CyeLvkmgaFcCUNaSccDboU6qDpBd3AK637z4dmrDdZry9YZyn3Zmuw6kPtAASitiYBX7vSd3nKMzcuoRaYnXd",
  "key11": "2Y1c9bd1eM3R243UJZaJ5tEYN59jbYDQkB2TUCaTcvHZ1BJdoV7c1Yt1GhQLBf1jS12NSkUcpDKpoKCZejS8FbhZ",
  "key12": "bjf41FmmF3o6cnR1neQMLkP6mqundFfopbfDuEiZJFFC2ntUadm1zihdgTFfLkcuUCKZ6wVjoFJbKXo7M27Qccq",
  "key13": "3nCcBUMKvdcwidyWMLeSsjN6pzcdQ3AiW9Jph4TEBrzXQfChXxtq4FfDKu1ZztMAjKJvEyAWgEsR68XaHeKGz4b7",
  "key14": "4vfJhuBemqrL3V94AG5rQ2Dj19dnURuhA9NKppaw3RPv7ioUbm1E1f9F6nVrRpFkidqAxtcXsmJSk1UMNk7CR4zP",
  "key15": "3js4B8PLVrLva1vDWf7QFN54HXetvFpfDAGksfCtZqMQaaQn7BHeQ7DQVdpZcoTQf3NorkZ26EBqZgGVtw8N1HNM",
  "key16": "3Xfq8WTmUTPy1urSojvRUAM3uRqTJyN5BsmpDprqBK7HeEQxsQCLSih96kZAiTwMDKNm8zKqQpXzP3LeJ38XJWEq",
  "key17": "5np5iVU4t1ssuR8joTWzwExfikRtDnDnhk1KwV6iwJkFDk3NSy8Mw2fkCwCzwiEDqTQQ7ffntFfLZKqsQ4h48PBK",
  "key18": "5LQSChEnFaGejp67m4d6dR72XFHR3SkVUUd1AdR3wXzffWHBnQ2jnc9XoVxboZ5FscP3BwKTk2EQp2uyjiFnfAoT",
  "key19": "wAJYkkcxkLwqBMu7taeVAwh8XHNNCmeiBWrJvYKQrB8CBnDVfqfSqEDk1TuwpRsWBzRXmRXQw1s4dBUZSW9PvME",
  "key20": "3SAm3XjgdoDTjohoE4G6Yrq51VmS7VHmYc4E14Mk8BS6qHB7SBfzHzhSXXZEMVUQKdBjcZjoEZWzrsuHqHr6YRPw",
  "key21": "5x8hB38dzuYcfw763jy5o6A5khAVibb5a32yHumx64ivv5Y95KJPdnjRhL4jhyCt2qTZnkbLcUcBXQawHsJ1UDTj",
  "key22": "4FRSYvro2D58YRMsWmGLABciFQ3XYp68Kwoy5dixaxrw1o89TEUzrT5G1oyovMNsUh6LzjHiAvXobJFWvekkE15G",
  "key23": "2u7bhtxjSZ4E3wKypS3UHH5J5tJman7q1SZ93ZdbPngdgyfWRk4qFwv2R9Ga9GMmrLn6zB565DpEn2E3wbsYcfAC",
  "key24": "5SerAScL15WEqfYF1h5LwgHAhy7uebqa3teDYkKAWWHhkNKcy88Ma9Dnpd7XnT8R6x5SXWZJT2ZJ86Ea7BnixYEb",
  "key25": "2NXr2rPAczp4LYAvRLZ8tcszwZ7uFJceT7ddQpoM7uRsGn4cVhtgWFLXvpkxqRszHp6rFd4i6o15NkxCVSB1o2J1",
  "key26": "22Hirz9tws2EJWkXwNATtWWVZnJTtsnTSUaxPuzzFm79dHpswc3UigQ1DHqeSjS1nkaCuc9yYfbZBTVxqk5Xd4cW"
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
