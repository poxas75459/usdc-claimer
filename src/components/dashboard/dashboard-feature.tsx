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
    "3htq5HXiyGqLoqUDKKahDEH5RUkQ9xRqfifLVyVcSxevL4tteM6d2HrcZWq2nNj37AbfuVfaqkE26wPegJdJf7QR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmRt2x6YWGTAxWiDGWg39BK2PJET9VYWus2W73hxjczdGHpnTeG8AgxK8kEXdgMR9CXyHBK9zP5NvTj7H9Xfz3m",
  "key1": "597RMam5Z3BtkvyRmtiUkGpmbVAFE6S2zw7PVtbaYuqjPTGQev8ArppZiefUFG9KcV48bc5Szf55B4SwTQ5A2xGM",
  "key2": "GBRZ2t7EzE5qV3ygbwKwWFjjcgqNqPqkpPhNDmTrdy3wUCNtCBiJcV5hCWAZgaFGSjfx1JDq7gJxCYoixMj1A2X",
  "key3": "2rSxHC1CNePVrytFr2Yiv6yyFJqz2c1PTugZXNV72C6y8a4k6MgJ3FDVW6iRdcwnEXXPpecDniVsgxZTqetrzy2j",
  "key4": "8CYX5j11yPgqeZhY2CMy49vPbBH5L2Zq38oxPHvY4yQmGcMcUALM8o56T5HJZM5wh6WvLB6ijvXKWm8A7BURJUi",
  "key5": "2NK3D4A2yQK2EVUngaFQbpfrkLYF2NW2vue3DD56JQfeoJAtAry7gSZwrTwu9fN9v5wownsYt3d2JmeRkr5pZiqL",
  "key6": "2wrTvPYqGopT93tfK9NuFe2veWyTZ1X7CsKg7i6niymsZSmcocXwHmhp12JqqNdXunnZ6A4cTv3nrj7gbAw8eVak",
  "key7": "4qdvKghdhbCqsgN9nfLRCNkbmKiwA23PGSGB47CB3BsCE92pGVem1gnFn6u59MipWuhBUtM6dnZML73fk9vPa4vj",
  "key8": "2URg3rr7ZSavVW2mcqrDLZgwEPUrDTqUPJq5PuCtq3Fg8bJaZkEixJtSuU17npEJ572aZNMjewJDD8oPzso7BtKD",
  "key9": "2GqMZbxHbiDyVU5uSUsGoRri9Ao5EGCLKREC35tHSD6ou5xjzdVDuLoLZP3LK6AmFhG4J5Gg3E5sJZThs9qLuYQ1",
  "key10": "52kSxj3iFf9UbH13kpuk62kRVcVfCLiVMJh82m1g9uyHCjiuTnGvLPdPpcfPRpGYnfCWjHeLSti8ihSGcoebW4k5",
  "key11": "3HCu9UHfrWrmircoXT6c5FLMP2RHjWz3YvDHrLFfWMnpPtGydNTXy5zvPoeHdRFC9ju1zWQk6NiwvLWTS3V6RE1N",
  "key12": "3np3v92PqRHwz47FuWAx9y1gZ74RbLe4vGtA1ekaWc6vvxggVTJu4vmFmVntFj2jwU6nmQQE9VQXFLkM4hk8T6RN",
  "key13": "2W9Kbz3Rt6EACAnUVQjZXni3bjUSPK3PBb19p4D5hCepTEo3NXPvtrsnCEuMrQ2JTLfMtkR3yC2XF6ujz8ds4AoA",
  "key14": "C1t53f9APGodrbSLXGePqtAV9Un3LwCowL1mi3pktvsKU6YVGs8v49wWAP6ispDq5kUFLg5wfZWQj5epGVFNwai",
  "key15": "5pPae8nk6LgCE5J4DqAWCscumAdVsoP3Xe9nbCffmMzSmAz2S9S6F5PG1w6k2pudfjybRVkohbsksz8HF33WQ8aw",
  "key16": "ekZW1JsmYw3bDVfTxev63HcbMDjq2QyZbYqczCRUq2wsFz6iU8eu9S8qeP4Pj9b5wveGZwnMAtoqJsDtBiRAokP",
  "key17": "3Y2dWRuGW7dnDqgUtXMw3CHgy9diVjmSiXZZyFny5oA2JxsgFaqCkNDcpWrnDXUZaHCSeZHaDzYCCx2jqAPJdy1u",
  "key18": "4v8FNCCzsmy6zm9obCm6UcBMmgqN9P9w7CVNb3UgoyTSMzmBiToyPcvZT7VPuraYkz5aJUYPgadBqqs9GyqCEkaY",
  "key19": "5eYt8rWCLrcBfUziC1SExvk5XaBawvBbhNKgf2eKoqdHqFZ25NPTFE8YyhrpokcKAEkT77tByoApK1M3CmhaY8iv",
  "key20": "4FPLeL91fADfn1QyJWg24u3PKVj5knkw5LCaGUCdoAZR8Uv2ZPAygQqVbrxb4Xko1qyRxSYShS2nPtCBgqec8KLy",
  "key21": "9DMsqXQ5ttYyAabZSJymARR5BEaGKSVS2xwrW8nUBdL7WWbojKsFtAQ11K3QJbmb8MNMKzmUjoNzz9zCo3okHNH",
  "key22": "49q8efp32zNxx3pizTk4K3jJyTgDrTZ9U25hQd178UhRXLzibBiJU9Dxj1DJomjcLjxpN185Q9kiBJf6AtY8JjAT",
  "key23": "3SnoBj97xQNSzk6QK43P9wS6ut5WQYvEBXxBvuH7fUaXvWRCXT3jERURRmMnVpTMQCoqAWUGATebCjaGSoqwY5fD",
  "key24": "4u3p47M757S9zuV9UxbLmu8pm5tHYF1xaAmprsNCocuVq45a9Qq3UJkYMCLf6nMb8ckUAoBN9cVCiPnxhAkiwmEP",
  "key25": "wxsURmTPAT44JrkY6mmj1gJZGv8iJrnTaGUT1RTdNYmwyCTtgErL8CJ3VkZJTfHzViydjuzPh2khBaiAGsUCG72",
  "key26": "3knq187if7XFCPsuSHsrMuNw5pRSvHwwLwNSnXpd1TLrkytyA8pH5uckXWVtj1qWpJWorxNmYiJJY9xbVRA46r7d",
  "key27": "3fese32JTHokVsABAkwDK6dCWJ82fabfbzpdscpWz7KgdgiUbB9ypaGsfBSNTBgfDZaJPFv1dmPMT85MgXm9YQ1N",
  "key28": "2WHK8hNchueCR99VZopRyJgF2faB2mnhHBmcjvYDUZcaZkeAEu92JFrVvYqp4j5Rdt6176F2kmWP7ZCyUq6uRmsW",
  "key29": "2YofiYV33dgHiU9ztdkLEMA8bXAbUwjnAqzgv3ELq8mqSZtpyYzn1uxEwJBfgZhQa6nxsc87ksNHW9QLxXrCJLvM",
  "key30": "2QoruCgdwFpGedaqqyy7gut8BWeUisbxG8WCQJVsx9UitB9se2t469A7hP863MSyiz9MYB9CSqbKJFcXvotBbRJu",
  "key31": "4BWNyHQYbEsDZy1xcpwgyrKWfTVhBiyuT5AFThtSgxKuGXbajnaMDj9P8Gefy2yjkG58NsUaL58D5d7z2AjfRt5p",
  "key32": "5TiAVdFZSz3R7T7BCiEkrBwH449tDsUX9KJB2D8J9vjg8hBvu2YGZmTfTpwpUsK31f3g4eqfjtddVfYzgD8afvg4",
  "key33": "2uqiDFbYZuKKexrYnFuFPafhoaTRe9toaoSDC897a8gyWUXu5wLMhCYrnjGr6ET4h1cEcA87R6h2rtnBQ6U2DneP",
  "key34": "2PPfAACprwPW5neQu1m6q1Msqq4uDdt7yuWLRnQPH69GVP7a94cubcAsUs4ZmfQtQeMW8Zaekv6Gj8UYGjpm6sJn"
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
