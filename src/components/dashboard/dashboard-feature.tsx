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
    "4pTknJjYY2z3WMP37dupHkWWuf5pvTnBbmYtqwgNxhTJ1nkqQSUHLtVkjf5TgtnQrhxVHsgeHkYuBfgwetPqVg3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h11aZu6ngZh1gDBYN2R2qp7TnMvkvuMJvxsEQMD5VvFQrTRufiH3L9xzLGkRTDnvj2jhcCPMPHXBhxDvXed3sDr",
  "key1": "RtAMMcNS9X3mb35aU9ezKko8cAovi71EZNwD2fQc4L5ivs9MwPaCiYfez3ez74eEGD6s1xM4YgkAMGuxSZiKTBV",
  "key2": "5m3u6Kmgenw23r2f5kJTwfxTKnPbxMruyV93zqn7G44BLifobfxEjLyKDEpcdzszfy7EKtaD8A9yKCzacie8yNmX",
  "key3": "46m1uJjKYcj2ynGUmBop62QeycY2DLL7ioMM9tFkTNgNJc81xAPqoFbZ1Mw4uZn453HDnR2JHTma7eyeWo4hLuVS",
  "key4": "29BwRtVetMk4M5AZmtuu68rFksyMpXWU1XzsWwtW35QJs9eWkCgcZg4KK7H9QXRQEm18b9ShmUJ3FGeAxVbPL4A8",
  "key5": "2hTnCokkkvT4eTJEvFqsePrxihoHG4HCPegXdVcpLccfw8FEghzZLo3Vs1QucDkbivTJHhzzN7CA85nhvThT9vRB",
  "key6": "2SKDmLooqqNwYVjmuheXD3pJLerAENWGx2zm64WqxqMF5R62zh9HXqeghcAgcZ1ziCrDGjHxFhr4CQHBsjuFHvaZ",
  "key7": "3jwu4x9Qzf1Hu2DbtrX99kVThPz3bWNNK2G6Rayegs4xTyYBMtnEvAtGNq758zF8miTnwNfT2HzQe3tZqJtEnam2",
  "key8": "YErHQyHdn1Y7NdBKsNEME7i8Rk2fWw4qo2fikbKCo2yjRfYZHuE6EC3owJoQyx9JMC2ziB4oL29sksyXxQy6wKh",
  "key9": "SuV8Y1DZsqnsFcAwb4nFgPw2MeAVeJ26YGdzAR6xfGxztf48fkmtvvJHT4khjHYDbx1TqHJNH3WVD3gTFWjXjMH",
  "key10": "5KVfuZEpSiGxTbPC3wMhJ2HZDYXcgYhQK8Bbyj1ySQ4S932avp4kin5wyZofQXrfQFhb8Qphq4vS5Wm7QyxBL8ak",
  "key11": "e6dxsuNPx2QhwQHQJTkh9beHgk53J4QCkv4NQYuMt1w3CbPfRsaxDY4Gatip64HMT7kF24AGbbP74XJ3ATQ6UnB",
  "key12": "4ofhaRRLX2wkgMe4WsyVzrqRUNCTCYHEYs7aFUDYxEXiPzzcxAscZNFogeCDweRN75utg3qoA5JtgPydQWgSzS7h",
  "key13": "46BRY32SKzCaRDu2s6ER8AFSULh4Sn5cnLCsjkhHicS8VLWJVHfT3ZNyRN2RbxzcikbivXArxkzB3dRcp9ZSoGdh",
  "key14": "63aohr6mfSaEs1DaAtMqgvVihwbkpnMDpW5Kj5h5xw4b9Y57GWuMVgb91P1utkyk9qTdtvLH6Do9ySxCcL5PPEj7",
  "key15": "ngdAV6az6NHqfPB8AXT5H5YT7oHMdWTeaRs3gD9wM7yiTwcsUyQ4oXc2jfGEB3Bc3Ga9j6irGmU8wYnvpMBkfXg",
  "key16": "hNeabiyq3VyjdV9st2AKJFpw2FmLvPjowNDVHcbag9FS4SQ2icQ1vZVWtX99bzPHyuaxqowkMPHFEYkkSpfjY1W",
  "key17": "47MfjbtJZLsdEu4fZchYGW4ASz4VQdi2hXwxyuJEMiac52qxFW4bSBsRBhaENPuzxQJBBqLWEa94KveAxetQw6eX",
  "key18": "TFNkw9zT5Wy7s6ZLKsz9jZqMqCY23QmtWoNAbkBwYkcdJxaM1ubKN2waDr4Yzg62QRVnND6HTzjXRxR29FDawmV",
  "key19": "2cQS9m28uS5PdpDJWrrCFYCbPnrZmVdSU29Gw7F46XMspKVq3GLw9d4wvQuipF6F7UuhNovTVfpBxdgDfDx1xKpA",
  "key20": "3LaKztP5reRfSRKAJtYtns68V8SSzECpAu2bPgchWtTLV2VrE67hoq53PYLcgFfLWVceKApxfyCTT6BPXab1kCq2",
  "key21": "5ZbWTCLG9peXqxhne1NMNRdJJgXdpEZbG7PxWLsgmtNcZjzg37KXTPbv6r31vv31NBsuacG8F33iV86CoGn5aKPm",
  "key22": "3Rdn64Wy2F6nGAHQmPHRokvczSgfX9EBNrBUdAx8GPMdmGDvcSMY4rJExEkxzGxTpHv7CiK4WL9U81mBBS5D8gVR",
  "key23": "4jJpfkcCqUFy5q1uQ9TUAfVVKAyy8VXzSSFg1BQyWF5Vspn5najFknUhjjsuPAe4ubjkjLYwNewtYHokiyKBQAru",
  "key24": "4NSpqsn3KHHyVErFWwczPE5HdmH9ZD727dvYANZ6v5jTpQbrwNVSSwqSbJqqyXHcJaCLDohwJw92orgwL44Fvntc",
  "key25": "5ezN7Yd14191wVDmtQSznqEJx3CZd1JNZP4Tw9dbGY5kAXwck8iuEfAVeFLNZSvJTmuZD9hrfPh8a1QHMeWfAM3X",
  "key26": "hFzvRRcyNuxQz1PRaVBSxtAfFjcupBxn7LZvQSBNqwiKeQuTYYQ1qQZtQh9bkzKoue5vRANP7VgqRCtuCzriopk",
  "key27": "5txUVXwL7D5jYZysrTxm7zWswFQKeo1wiDrnyqvKcBaP4dN6PfKJt2EuwgdbUwV9kWXN8BPK3pS3LqQAE7oSQDXP",
  "key28": "3LFoBS7pg6RzTfxyACVvmkyCV9Aa79FWEb2Tmmjm4fAC7QD2EvFLru8swCsgksfH6SbcXYoEZeejnLtEwF2b58BT",
  "key29": "5fKykupyioojkDyYTcdHKZtiMnAnSCQmTiCaYnCzAUchXPfyCQQb4DvHYQgvoSDXFnFmvLHGy4dHAaPmgVCtxDdR",
  "key30": "tFPUcgX9QDWmcCkQCYjWK3gtrRE87xHsn7jT415CocaQ3YLqHAkFTBArHcxuzmB7tTXFY3cYq9EUbtD6XXWBhWt",
  "key31": "5HZ2ZdREkebSv5XF7Kx88XGcFKXr583AR4WLdQ8JMEaV8ek8uVNwb5g35F3ARs6TsYhQuZGTsdk3tAQ5DsPVq6Ky",
  "key32": "5HPVPNnmPowgeBYKUiebp3mxz8QozsoD3NrHU1sTWd17pPd67ZzhkaRzWGDmz36cJxp7DPmXdmiRpXrGTtsJ5sqD",
  "key33": "2BwsFjQHuWuGUHEsr59TKaNGriPU5uZw64RSqv2owQqXm29MN9gvhjW1bBjcn3YZSahBtdVB9dfF3v5pgbjE5MU6",
  "key34": "3qEWqZsgtrVkZGEbwnTfNuwGEp2t9RoSdVDUAiLy9xyjQrcmr9f1WVajQUZjYw1sQVqARvDJWRPVTPZN6Bu9cABd",
  "key35": "5X9JfNXjiruKqvP6m2tCqaZfV4NZKN1MY5Amz9X79UXg5LxgnAsU2wacYxdi7aTsFA9fkoiuhQzbHrqMNb76NTa8",
  "key36": "4HQ2A2eXt8315uALURvpx9SWD9y5WzwJYxdrpWZwi5p2FDbGXskLY9MNUa3baJuiCf97Uo6YuMLBsu9jA6T7vL8r",
  "key37": "5ksPzfWKwoTk1TTRX2EP486BaJarjo7Tnf1eapgNVMUrD1ArLKbZLZBGSSEQntjx5Urz1nzcr5BkxQx8ebypqQmn",
  "key38": "2nsK957PJpqTXXRviU8ZYt4Gw2Y4hcmq44Pb4Uf7D49NsXHhE2XsTkcPe6gxN4B1So7v1tE89E1Lp2JgHtM347Mu",
  "key39": "5TyBTauVSD8fDwczVQTr3GjG7N6PR9RfsXGtJVTJ397MLvbW8UqSBsPR3ynxd4naCpfk9tPpcvwvitnHKLHFWDMU",
  "key40": "61nWi2HGamsGQTShu6KZT4A1XPBjUynqdNbpeh8X1Pzv5wam4VYbFYQoBamwFmnT3cRTV8uCc4jSXxPDUWR1HYJv",
  "key41": "cpzZrzcj14hFmTGkQ7moR96TxDyzFCgWQveewTxo32wboigBx1rKo94EC55PGNKvjBQP9kpipFjvCBzPRXuxXdk",
  "key42": "5mdWFMb44zsYtH47BsXPnTeqquVfMVHCxxPiuefWebLpR7yJxL9EGYwX6otx8TGmhTbNG6mS3CiFddqwrTsr6RWt",
  "key43": "4FW46UmmKrYyBGcR4iMPsJcm2az7RRpzmqdDk7Fm4PEw4nXeVLo7Be1jcGgMcUMPZJAB3EMkUtk9waEwFwcEkF7s",
  "key44": "2vMPkZ51gTzQtMe5uThUMXn5cS9Szdtv58iG3jAuQDi22NpWqpnHyBmWKEDGjQpi8xn4fzr1ze4tGKg2S2m5rW7k",
  "key45": "3hT1RAe9cyunSG4cG8c35MRbN7hB1bgh3aC6pN7aWWjsB1MqekaZx2HtmaqrQLw1EFRkQ3xpbYHdYPmrht37NuAP",
  "key46": "YF8utxWvag6d3CrPhqQjyfhzVZtatD8ucKQzMazoFS4JwFQEr7faecVq8JinUf5CF6BfhGJW4KAyaL1WsGXgRWn"
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
