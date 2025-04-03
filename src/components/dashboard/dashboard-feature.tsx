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
    "3rGiL3yYvD5e96A8vETpm5Bo56EDt3DeNxPM4G1kfQ9JwQWXEt6UjZ5h6DVuaqug6cuiu6TZRuR4tSjwkcacqHWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRAdPZasBUP9cwrsaYRRgPi4PEhGdzfcGimYnojvshNmW5tyc3LAjT2QELGnn6r2mNZGufc4nYTT5cStxXa8W57",
  "key1": "2eEGwWnrAAttLrB5yY4AroN3v31Kk42egwr8ua2EWWejsMej1kBz2zi4bzUbs1kJPjVkkTNKYkmw7kHFFyDcdaeP",
  "key2": "4VswQNN1EZxf4QnnkRWJ924swNnMWBMN5rrBpLA1CMF2kG1t8qPfJ2GDtHA2SJSiYoqpUDcwHrmre3cf85XQQtfV",
  "key3": "22PEpytKxiHX9QWeDSMQ74XzkqB23uxah5nfuyF7LqkPsY4iVcx4DXko67D1kzw1rQqWQxpA6LEq5aG35X9h25r6",
  "key4": "2wZ5qAhPzKpENDuy6pPZYrGPVEvgUYGrVeLnWNqDURSZovWbU5oGeHVhTQzNQP1jtTBDxgndKVtPGkT9b5xDWBhz",
  "key5": "5zY1hFbN7xa1qwEJxx7c43HkaTYzc4oYmwwaEsTeKqg4rradrUB8aVETDAEZb1Yxp2oW3gX31h4WAvn3GwgRxtrF",
  "key6": "ZKCeeS2A4Ranvps5GrnkrCv3qYBeSqrdzFENyXvkLrU6ZFzLvSbvr1YDxoJdALY2wzi5sM2odX9JxBMeWBV3tPu",
  "key7": "4Je7tfst3KM7pjza6vNokmgArKrN1ZMv5M51858dp2j3wxN5C4rqUw9RsEyziZMnDi2YkGsaNdf2ikELEZH6k47J",
  "key8": "5mGPyPYcDmExTQXBKiTpf6n599wideEB8bKoRo6sMw4K8VNoc2BG2gTeqdxZxMQymtPT9XkDVpvUX9CavR2EzYAk",
  "key9": "2kQtp1q5FqcDJjN4cxPFSqPFzs3ZjRYGNUCge3HCJpJyYU1MSRZvkpWytNSm417piLhtCh2U1wEbfQZtsM57xfva",
  "key10": "41xX45SdVW1fEKboECTyqfRMMybJR93eoouoFiZifCUZYgA3wRB4NMgMPPUpCD4S4MucYdVkfHS576h8U8EbNzs7",
  "key11": "3tfJTP81UH96CQfEtbhEHm9qkmVbXhssWfCArrmo1QAicSBobkQFAk2w1aafXuWZnZsYsCYWaUsNmvFLLVbMGQ6o",
  "key12": "AX8f2RhZfVgg1nC1gcHaUcbXr3nkQRsntknV5D3r8KmnJAtMnn9T17g4qEZRatoa7gh3H53opHG66TdegiRJBgn",
  "key13": "3hXV5kaDi5cqcmVVKGY65UbUYuFhXHDLuiBEDpp6cVZak79PB5Ein6tKkeYmsRcf4H9JASecZQhN3ttgHsrUyUSP",
  "key14": "2eBZdUNA2roMTiu4QhnQ7WtJemikACYJRzRU581GYqTr4yyBqZPwbLXXvzC9vkHjiXQUCUTBgAfXRBrmcHBsb1yq",
  "key15": "3bbJA1rnoXFdJGcTDesGVtqmm2EvjR8fxACeg7H3xwgogqvfc36a7Wotkhv4YdoxY2o2uzvtF2ziP56b1VeGXr5g",
  "key16": "652hVSzAmdbQP9N14hpvbjd9AVdbUtm4SfMZNhfF4hZ3j9wdFUwKMEHci8Qu5efX9kHBFWHDArhUufRzdRDTB3VE",
  "key17": "4cxCUeMgqxsUHud1KBFDBZ4CfMB2Yo9bz8fnfkxBTxFwnZTBXjFzbT3ZR5utZfcttjBjXEBnEDb9M7hTkoAePxg5",
  "key18": "DL5xtSuaKde2sDGR5Ajpnp4MJ3NqBY8Zj6rC5fYiTfYQjZ9Ss2SUe3b7mcKAD38uejs9MApq8Xtpjovmu21U2Wt",
  "key19": "23hZ1kjci8ZpeX2WrYkp4Sd2KtL2MVcunA1bW2QrbBvgso986Lct5tjq5CsAtT6Yyqcgf8dH1tMTPfAGz5ZoDzmB",
  "key20": "5wXNENGZzakjnQuUhHW4Fu99WF329thMXaKnkgF8mM121u7hQEWSp477ffXvr6ps2WGLZjCWmBjEHKpzH4k3V8NL",
  "key21": "Di34QMeZsQ5MdFDF8VBB7N996myefs43Yo6cdnfCnU6q7jWBpwq28SJH3z1J4RpSkJMZrBpsnsgDSELWrBAj35R",
  "key22": "42jBnYDArfd8KnCuhxBdE6t6kVkuGFTRZ5gDNnZKdiJ7V3cS6YbciwVNjMYYSZieXEm8mhzRE7qJYBChdh1xVEJX",
  "key23": "5bhJ1fKrWz4SnhTgcvyvCnUskY2DFZaGW2fsUYkJFNuC4mDEkJw44fqN6fznDEsSVawSip3tx6hTk3DbNQNkGof3",
  "key24": "5MG82hy4heu4qv8isEYaxjN22x7uNCgRgwCkcYhRuDo7tKhYVmZqqefZzP8D8PjFbog7B7amjV1jqNyizMm7jM3H",
  "key25": "5PD61kHYuMT1kANaBrNLYzBQy8eN6VDmGa74YGDds6eSdcXRgqbXxBd4AbJKFopxZmtxvZp3Hnnitj3faCHDHMD8",
  "key26": "51mCvnQNNLSBxH6trfe8gDoDMHcYLm4CicgH39Cvb5E56cnPiPjJSoZ1CjxJdivv9dgbCUphyZLBMArJu96SRckG",
  "key27": "5HCjvSJ5RNA7Ch2BxXWXyJRFAgveX5zd2ThoYKqse541gTsXG1QbSavKdtr6hPUfSqroA3snZsPKPwLuMPPkRNQ8",
  "key28": "5NSRMTsFzZxJyV1QTqZYqwwGfFoyod7qAHuXd4DHgToyVpJ5PTsSyaPcJN1x3JPBP4ZQQE2FxrihCSfMy2Ykj86k",
  "key29": "32rrpTMjeNvpTLUUGTzTYkh8grX3cYJ3dSFRSg5wrtYXKvak59a5N3RWujorN5E1QJGFDzCCpsSyYjKLEaxwwrUd",
  "key30": "3bJLX9GAsZJXvRz3dBRKmuMSCMcmTgpdjzwBWeiLhdxnTNuySRiqJi5ZJ8xf2tEe5uqdaAvVz1NVNXQCXdxtMFxi",
  "key31": "4xtoBp6HejTzU79w7JLu7ntdq5m9YAVeRkTyeemx6oiLUQtu6NaP7xzSkzTWs2rd73G39LnextNcqiiSPCEKjLjZ",
  "key32": "65Lky3WNdSkcUwgsiCzg76GEiF1WfSqa6cv4Pp4UvZW6WjLo9CBvDj7N6rBdrvrQkmJSFnBXHvCocPcW9qD6XDmn",
  "key33": "3TL2QaXqKsYsxXvhe9p9XxMgHkKb5iAQqaCCXkAj9M6LMkMx2cxufdhS5ALepC2sWRwK5gpK9v37o1FFHjyLxjXp",
  "key34": "rt4y2AXhCfVnP954SQbxJmPhQkZyfWiuYNTgooixdJj3XhhcGJpMjMU5wZyKkvGAc1Y6po6f6XE2ZPruP2yVjD6",
  "key35": "4XCYViimUuHpo7cKw7A7UPCw92Wrzw2QU9QNY7PSc1T1SgmrJC7zrtrTQ6zAyyyT6er1pEMFji9kNXYgptvcbHCr",
  "key36": "o3YZkYYpjJnzF1BVx3uAwgNvADho8zhMSL5rjBa8yeTP4ReMcxTrvhPdQNtsMb5CkzmAJFQf4rZSA2L4yjJduNt",
  "key37": "5VdVG2PHyBVdoQMswQGrRG9Z2xKPeJZsYk9FbNwycmStAUG1igDXeK9iT5MBJ5ZdEhz4A2CbHpgdVBLPHdPvGRZv",
  "key38": "hNsYSB6vWJNG1c8fcz1FAJrmfoqprUv1CpWXVfudd6toLwS6McegfTCGW92NPMuVPQvsNFmTLTnHuxruCSGk8N8",
  "key39": "2nduRL6Jk3K4YH5Kv6vrFcx7veRWCwgHBaC5D5GMFJJDNL1jZXN2EWbpqgogYfLPoxKQvZgCE8ttBGoHCsZWTi9r",
  "key40": "PkFKw7DVML1Eorvf6F7BrbDAvKsgpbDWyR1LaKu27jpp2mdhAVeYEx7CJtu1iP3WJJXmgacVBHDPqbpBdySpS38",
  "key41": "4S44UfxEh5Eg4W9qGh4zsCzg89GjQ1Z8yuRT64jUzzMXkrtFM16Q6hCHQzdCs5wogiS5Fa3QTMrUQyHWy2w5PHTH",
  "key42": "2qjf6sUAspYaY9w7FB1hhSuiuPSRtN8WY1VtGotLkZuuEQV7nVW45CpSnRaFzhx3NLc5bXpce9dgDGtoS6UwNZxf",
  "key43": "oc33ej2NNaLXos349RAM2ijQKtMQbrPEiCvsz1UM7tAqQZyk3VSmcoqyy43jrduaBbd9tGew1vbYkFK7LKMcLDE"
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
