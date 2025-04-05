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
    "4FWuYXV3947RfTKxQ5uXHRfkXMX3gVALEukK1PvMYAh3L2QMftX95bpmwquaQWKXaewCdxoVnTnN9711kGZ6zdzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BiYUmD3ESkXGZgeodDvVFo3bPuAbjgxk7SbJzEsbBbWt9oLwvU2c4t4MhCaJo83xSS2awH76ouu1nqgC589of58",
  "key1": "5bi1xTKbbkumwjFkKGFaPyCAo13xDow7oQVac2i5At9mhvGDGcutaJPavDndW3bvhXuQnQbyhxWbxFxAALC23twc",
  "key2": "4GEEnJyqznVGN655gqYfxrefG7ri4CWRq78B3e8MiL1S8RQ99xud4ucH2n3kLVqhN1rjDWdG9rdEatKTFaxohoXn",
  "key3": "3vCd5pQZByMJXeQ24BZVoShZsKVSLU3TtLkHaN9UtJztumXAZR8w7dJTgZw5QnR3hNKE8JxDkThkWJJzddgtRTdk",
  "key4": "rXGinHcpbdgJk5vnavxsgkGF25z666D22jARkDVq63yaUTRs1Ef6VgUq2BDgshFQQARLo5QpBUdQur3TiP4eeHv",
  "key5": "4F74omMreHU8pWAkhpP1UcZdDAHHLmnedpGW293xseauqJNZZVZReduCPe1G6sBCo5dWqQWexaE4KyzT8E1a4Bay",
  "key6": "2xYiiUgdozVVgVFhL9eisJkQpvpYiVX6j4zVYFUFvNeXdGKJqpk7KsAUzfDzNJP3tHshnkzxnoZiDqkcUgbk3sn1",
  "key7": "2zHFQXrd5Zk4T3ezQEzjXGn8VxTuWhjifjo4HNUnid59j8BdMHFVyrYCRWFfAQKj5jqA1RFGsnufpfs18rvQCVsZ",
  "key8": "h8xH7HmW4s1PxsHqQNNV7PQBWTb6DP4TyF8utfgom3YTtmjzTix1vrUntgPL9hLUYVRg2KaD5MvdApMSJxDrpRd",
  "key9": "3vnRACa2g1Xkj8L8LRPPAXhXMPBgnpYHeJtsxt846scVf5R4DQ6PFCh7cpbrMRPyEatsRgaKXgDQ9TodbGi4Y2oJ",
  "key10": "5zWJ15cxKcqxCPdjjhQmZB5e31GXMgZTpchKM5bMRSVW1s1uUwNaCjvRcJjeUVTq5J2p6oiciPiMeXhpMuhaXJVS",
  "key11": "SRGmVZgxMq2d4Rh2ds91HTaRaP5E9jTtjzcFNaDjX9JgRG4rZCRRySViHDFWWhALttdrLtKC6hgkfjGJKcUHNp2",
  "key12": "2PniX5ERU6psmkWpzvxGGWCvg1rppfCJBCaovuA4iwAzR3aAQ1G8Y8Vhu7c2igWMrHYGwv3szY3S1HRqseL7DDP8",
  "key13": "3TMSQo8wTZDstHp7NBgt1VoKJDGDjRJtk1C9nKeT5H1tdp8pXXnea2q661VmWYJTcvCZYuTkAaRVSzP24NAQCcWb",
  "key14": "2zxTVV1Rootgx7x38QPFRfwATbmXnDoAhb8hG1pQo96V29u5HopFAf7vjGpRjxrrESUj9XgdfjaJ7QrSxe8TBqfw",
  "key15": "nNVU2jKJjwNJ9mw1CRFdXec6dDCMPG9j9Deu4oBdnKNCh9wQWBvBSik4mxs8tGv75VfQc1suP78TNrWJJCLUMAq",
  "key16": "4Bm9gfA1BSQjY8vRmWrjHkRwCXFKBRFr7cKAhgsQFWvMkF5PcdCB6vgxzWS2kXoeP7MoRAFwptvrvxhVsTEAvYqc",
  "key17": "2R8V8r8nAbb5j5W6Wdyk1qLoTdCjtdKKXBKfkBLavdQ2CUgGUfTteXSNYEqZBr9phhHhfVxpeSGJJnQHsL2h4wCS",
  "key18": "2CsGSK2UN7PcgebHmNYqxN4wPJimYaQTDoxED5df5wFUyMHGfEoo42XhUuKtLNXcsWyfPNXohpDrVCNSKZURuL9h",
  "key19": "62sS8Um8VdUtENGu4ujxssHiNP3H7XjJqRFaTe6p8ojciGfyqtxQm293h7Sk5PYub5iJQSLubZGHtnPm4v17vAsU",
  "key20": "5Zzfq6HDJhWKQ2AAAZmPuSHfLqdwDpEw48MPHBd7mArmNPnxSYafp6gEVZdQm9uyv5NR7b7EstTwTX5i9LYC1AAX",
  "key21": "5Y5yUrrErVtAwYkBsP8RqdAESXCs9usYE1uGkSfFTmmjtGgjDn2CHeERVVQT1H9CewDj7DyJLNsyJLyPS1ravLfV",
  "key22": "2wsuTYHc1yczJPtx7E2APsCCz9SiCztjvyhNkDVYZSp5mfd6GuPxbGXMQ9SoXTzxLZw5KiwMSTm79y5D4qA6apdA",
  "key23": "5QtdeZunENYtTQWmFmkU3wq9AtTjkdvtcHkDtEQtnaihJadrEVAntQfdydHvkoWQ7FYN2ycZ1ehPGiEm4rEGDVU2",
  "key24": "55GpkwL2uReUgEGwBa6HvvLMvPFJ2yh4ttqjEGomcqTQi4LBE8Uis1b31SbpJb81afEK85ebGZicGvd28QP47RPU",
  "key25": "4VS87QK9ByXaQihXT785KwxcEV32A6mSE3PqPJ8BuZ78A23XVUaKZzLKxJcQMdxJpqgQiFJb6BrUPHv58pGsHLtj",
  "key26": "5okecp8w6c7W2fRGwsEAPARSqnrFgUSYdBDLsVEPE71z51tF6xyYTA7bzhhB233xmJz1cFwcK9LFZh9RWXcLuBg9",
  "key27": "5FUcj2D4bPuSb1JAV4nXQ9bjrrFboNvjCYw6YY53LF4NaVkBQN6ecSpAi9LiVVfpddAmNFTWJYg5TQJ18wC8oxJQ",
  "key28": "2rkdTUZCeEeaLNCYNkmsuyVD7FpYbpuUsrETPYM8ZHSazozGgRP16zR8mMHyqnq9LMVXj4xE2MaS527dQqsvNTFa",
  "key29": "5XLxU2KrAsucquemfhynszZztc3GXhoBBpbufxCPzbxgh5j6W1LMAPH8Mn5RRFFKHSTpZDAZL6T96BJnFkhVXrNA",
  "key30": "5Wip2VayqLwui2kLP4f5sWeWxvUqWX44CZuEDfxywvmMLRxicQu8s9FWSxmkyWxSDPvRgtQ7hDKn9eLjw7ByzyNU",
  "key31": "4Z5kwT3MKwcYAfUXCKKZCeaAzbUo9fvnd8xn1L5jLT2nbk65JqT2bjwyrX7wk1SDe1DWeiTZEzm6kq1RgdfTMZD6",
  "key32": "33fMh7rBScfn3K1YgAdTEMfhctSe19UbauPArZxz9xzgDRmNGMyVfqXyTgVCnAeqcqj6brpYQtacivGyTjFm2t5C",
  "key33": "VEeoT9LvTcHzz646YGhLYjNyfxHpRBGfD5GCZB4BVMne5kBSbTWjPJyhyeJwxUeNHKC3SDDpdjXqfiy27DphjNN",
  "key34": "4Ew4AhQ2Z7Twdj3Bu8uwKCdHmJsJKvLDT4sxWkvgshzhowsXTAYv2CR1aaNobc5PFNogH4ccA1irmw6v5TVR621K",
  "key35": "3ZufRtm53NuCc873UWZfwt7rNor2ENWVktLqXYWQRkJBhvnbvFxhwtY5M6Hd93oijrfTriVjnsmDYhPmuFgd8b6V",
  "key36": "4jXmYoyLYPM1bFEeRs3bzkKvjQ7ZMsH4ZX8hB78wVcBfmCWU42ztbKzvusXrfHAPG6Jx7dxU5ExZam4uG6uyrRDT",
  "key37": "3XwCheCuTuEsDsjqcg4AA8DyknXejArGrct6tgrNtCCa4xF9qSbhKZG65U5899HNc2UoQanBoknWAqeJeq572uga",
  "key38": "4gDqNcV6MTDTXogxWrLas1nF1qBU8nUBKuHsTp5ikgq1xCmokdvgX9xW5jjvnJDJknoHD9JmNbzUp9Z96WhR4eKZ",
  "key39": "5885QipBib9fEsFF871FnWmqjRjGEC1KvEEtzhK1ti9UnKMMpLxXzXrMGcv2nahnC77TBni4RUat93qEeR5RZ6Ws",
  "key40": "3ZtVFMq8VZy7rxkrSX7KCJKYk5HYwY5aZ6Hsm5pEwmDbs5dKZDiQ2f8GN8q5BVzNmko9fkvcBBFhwtQaYda7DXgJ",
  "key41": "2EfbN3Qev22pyRCWiLws1u1fWvckqbDYrsQRB8bNcrLMNbuwfuYS89U8TzwCYhErEMCdY6frbyKrnqRmDk9GWVbt",
  "key42": "4yEmpp3zNGum9uVQ9AYuh9zmz5qRu2fmwQz2Ym385szp4mm54JjsP6b7T4gQvg4rBmzMS4pxeXYPFrvRG6bJzPAN",
  "key43": "7vwRfU6tSCsKct8WBEWZ5Rzicof8iso9uCsPHSgxtH9hAW6z9ciXondbY33Nh8LZJJjF1ZU4RbuSrdHGtmUdLBw",
  "key44": "37eqRzP3YUtepSFnRES4Z1x9Uyu2xtPu37EcRU8f59CvoH3ENfAfQzAkWLfDesMNYJv5HCwKQVmsfArRoaVuSCCv",
  "key45": "2jB8a617B2Ys1AhgpV9kRGGnqH3cmFhsYh74EfJPQRJMjEMMkPzAPoYAb13rFrJj1ShhSKYRckve24AXHE37kg8G"
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
