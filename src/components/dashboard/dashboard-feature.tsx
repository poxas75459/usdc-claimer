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
    "4tD2NFijDVz2YdTAAR85SyifNo2ceTx9TxC8nnvaVfP6oAXgkJuN4hAFWeYUJHmEnNVfDRR1yTKPgW86He5tVJhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfRRmfRTM3cRj5kRoYeQdPJpmFLuqwYJ7aDLXHWkscheJcAoh4c43RTxydCK3E3uFXTJaY1CY9PtmFYfkLqVTxb",
  "key1": "3RpMejg2S3CUb7qYytMuLG3XV5tph3bFxsN1no6db3DpAzAVbJRM2ynfphPjGB3WPZr3eDczmDo12ri6oPJPgmSg",
  "key2": "5V8LbtJHHSUCMAVRNzBtYPjQkfQroQ9p9JS9fGLuRP8J3zwGc1KgoExYVSLdYZZAuWhvoJEk9A173wAkGi69qWuX",
  "key3": "3DQLKbWRGCynaqFPB458s5ki4EP3xVojibLSXtNsJUtJEoQ9dWP9mwZHmzkHWTKLKRjcqSqHgbfENyBknVdXMpEu",
  "key4": "4EFTSXTkdgYPaAP2NkuqaNqJETpDYDrokr4cWresbybLKeRuV3fDcPKNUTAdxDcKPCTrhPwYiyjnkkFbewJ2LJHJ",
  "key5": "L7XkwubGY41eAQw9MSUPmMEYoNPy8JFbY4m1mcgqkZHd1YMFZhsDvFfra4SiaBZxmVci2xnsbd1yCog1aSbkrS1",
  "key6": "JWDXh3PQcvGHrdjtFdfEofo5SqjjmwLoJ9xq5YkUPqw4ivgr7gTJxd1bBALt3pqsCFA8mNcQL1rV3z24VKTovW1",
  "key7": "FiGd1bjoeP2Xk4Lj4AgzBjKDzvo44Wtuq4SUVnh3tU83JrCcuwEEaMqf5r7BiUDyHp3AQwmsfSgu4Zeic2ApKTY",
  "key8": "2vCKtzUSQrCkjLrRRPa5fvXTSCFMW8jwHEAk2AHL4RrdqYppT7Tg7JchxGyfDhoFrJBbb3Wi8yuCyEV3uQzMqJbU",
  "key9": "2SUKvyeiZe6M4bazf4cxGA16anjyrn3vipvMSko3MsFpmTDRmaxEhaRuV7Ebk7ivEhoVBp1kje1BwZda6rVoJbzQ",
  "key10": "43DGwLrWFD726dmehojTeoEFgJ4N2GwoUBjxgSWSdN1gYSRnXEhu2Jz3sgbfGeZbZ2S69jZuE82NzPhdWxD9tFvM",
  "key11": "311m8BHqB28bWrRz7eS6Adgv5gctjVUUQESZEETZeYRFDC4YkLwonnDsFQvnbPNX2nAQDdJb5CXpN9C9qYHn9K4F",
  "key12": "2NbB9XkRT5DRt8D4phRN7HaoXQXHnZEQD2UtPMfKAzo6WxeGXCFS7eyPoheQ48wr3cWUV1BS3j6BEAR4mLRKATMe",
  "key13": "26YRg8NosuL8cACpwALbZ6j8dAkUpkrRqJvKYt9jhtM8KiF2X3XPedBMViAiaLNQHBzGJKbPiuggTDPpHwFuqPZe",
  "key14": "2M6pwemczpL1e6Tfgwpq7PEv4NhPf6eHvwEijXDttak1JuLkYWPDoxZiximxL19nixube4Qp8tqCCYyDmZTPo1vr",
  "key15": "3McEDgPDq6QzLQ323BQ3qTu7p7bucrxVdY9xbzcaYN2EkhjJTU3tkFT7j6roDxKJMETngis5Y2CqVxHDjNpa5DCm",
  "key16": "2oeyfRs9CUfP9kDN89aZUgTtb27AVEubMoedqxJyt15393EMFdJRH26Se2VEhx8YTW7VAoE7ZwcHyeyomMnezv1U",
  "key17": "4eiGb7ehNaovPGmzogQEPDJ2XjWS3FKubqf1UHh8GsX7KRF5mTjqNxdJDV96QopUPdixRTMrtgN1rLWqug42iMdj",
  "key18": "5ypU9UfuquFUhqUMfEWbfLXGj7kZ1fzBiGuFeuUmj7PwoQBpLpxr6DjxGZyQMs1AFBDCXwgdV8sKSQobAj63pJnQ",
  "key19": "2bqDr86AYjjwZzYLmrnA1DWtJRWfDge6psV7MRtn3uV1YYjWyFDp1CmuaPCZixZ7nTq9RMmgn5zF654cjSDiXzhc",
  "key20": "5SndgVAFURSGChWMi5L79m3T9dBfoaz6C1sh33HFew1qWrtEW26APTPNZTZMSrRHaqDV6NRvLRf6Wk8zmZyTNhcH",
  "key21": "2mmf4wSY38vTXmb48sVS2pQ917ZcD1LdECbsgdkeqSdjHo2VVzwe5hE1S5YKXQumfBRzAiRac7Y59H8sfoQ72J19",
  "key22": "2uaZRwVckqKTN8YW15br1he6ASGJxqeAbdpThX8h1mTZDewDByNNJxtWDXSo5mbfkny5P5sqp1TErUNqF1THe43L",
  "key23": "4XyEArpH3owpRDt3mvJX8Xd7vkhvNRdwwqZkoTkPsjLK1NetocKSTHUSvCEJightVfGZrcqWs6XVf8utk9jahyGp",
  "key24": "5CCeQksy9vU75RJNtUoHma7KYSqcqZcnrRETDmvXr4BDavRprjnCTFoFwd7zxLa2cvLPhQd3B5jP8oFuqTcGHdGJ",
  "key25": "gsArPduzRRr2A8ioHUmx5b2QcgiqbW327hUoBGsTjYcqbKTW8UaQoJuSq7nTV83RST2LxgzLFJnhmP9YUhMz1jj",
  "key26": "4cw6KUTK7L7vtsFv3SiLrykCP6NNR5aTwfXZ4ikhhnHFBWGo3jJfWKhmNdQq3n7FSu3c8WnSAqMxyM8mNNd4oqr3",
  "key27": "zmFnw49etQUxM8FKbnnwZXcidweJaDbAyFq7bwByLJVsKsaoPVs5QZCAr5Fa4ajFbFeh3AuVTGXkhYDMnQWnfBX",
  "key28": "55uwSJv8KxFP1iMCKXaMZLeZt4WExk58mhy5dcTGJ4HXDRGm5exA8fbtffkPTcqsgCyhQEtKjSsakipAMvKPfdb6",
  "key29": "4SjJWoukAvS2kU6q3nArtwnxD8DDEpNaDFkW3HEKgeL4KR7Am24njREYx6ha4DYhwnebonhNgRHf3JP2XKPQ9egu",
  "key30": "2gnEhkPB17gj81wNbzCfFAtc3sdFUG5Fz78RkCZ6sGFbJjXg14uHhytc1abTDLtpcfmzWMnYvtmMbnqgjA1qhzQq",
  "key31": "22DhXoNRnyyKpe3RQ4EcoqP1ELnYRpx9ieZbZ5nQmjNaxe9cmWmtG8xxafjgQUvgtUVPrxrxTZUt9nYFrnCHfUEW",
  "key32": "5YsbzkqjRvLoN1yWTpd18wPnWaZpPwprXp5prm9DoLfrmirruPAQ4kidzevKt6jypPRW3F9GLA4abJvBm8bhKtCx",
  "key33": "CJkyKAAxqad4vZXCBFtB9YFRLJfwJBtda5c8ib88Svf9bDd8PQsZ68sRFuuoLwb8DivsAFc8vYEeG1i461h4iVk",
  "key34": "3SrkDGuWc9LFBjhmfwVQ568N9erhc4dHs69wqcKdywSA4sLkFVyukjZeH7omfMPNEMdEmLcs4gMLFYVohSpxGCTw",
  "key35": "FowKCFBGpcxJX3oqWVWikeGe5shBw5R41WJEroz3whRSxU6nAyPwUucin5VMcbwjWwmNhAuEFCdgzfJ1ETpyS6s"
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
