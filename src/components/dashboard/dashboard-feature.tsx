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
    "4XcLHDqGJjy4pz76W5d1pV6XVna1KPnFkyRtfmqGmJ4NXn158xTEPMZg8XcHhu84TL5JLqK3fEdipba2RaG9MWqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rH6BSF8hTH8D1i4XfxUBSux3Ywno8rUgU6kBFf7pGCM85BN7qzyPHfoLngHiapir48Xtk9j7vAR9f3VkkWebk2h",
  "key1": "2bsHp3WYLkjtbFsK793fiFxpRqxNEtBgK2zgmGFVfwRU7jfgBAWcYmpxE7jSSU7iqFK4fStioF3qzi4gmoeTZYsn",
  "key2": "2RKE78nNa1HUpfJe4ayppJAQqCfHAVft8fTm9r7pdfCidv2L1cqwg1pHyEazaoCcaiEHME9sSxiEY2fNLdnppwcf",
  "key3": "3FsEhRecEy1QWFXcrdEVAJ8qKGCi76JZ52yLQovbNoRJtJpumG5481PmNsjqRA7ea5UZQaKYKgfU7HktMHYtSBiJ",
  "key4": "347N7o6Pwc9Yjs2QgwCp7Qfv3yXM3MSf9Q4j8yGm1Zmo6oN3v8Rqy4KUTTJ5oqGwA1aSuFsyDRYMyuiPougf99gi",
  "key5": "2WxjdVYbkKFUii4k2myXm4h69UBPynz1t6aAiE5qKV25DWrksR924c2B6RXV8AStnwg2ZrjKTEshXyLyaPAhyFpE",
  "key6": "4hrbAMNjZFnRctaxuH2Nnep2PT4HDhdF8ShtUdKpPrjxeXG4tjDR5aautSyeWfSbzAA4ViXv7MGuNJALSt12gbUK",
  "key7": "2FMxoXHpWWcn9azpZaa2nfVCdjWLSyMeTrDpTx1Nicrez7s5aSeLmxu7bi61XsRQLYJ12tJTsaHTX4gETHoGWY4v",
  "key8": "FWNhbia2orrkqFRTKHLR14B5YYVvHAYJsnaWPpoxBQvdUN5YkHsyxsENoMxpZ5ZtDcFTQdtvKvpaFc3bt7kERD3",
  "key9": "4MUzPQgCz5s3itVhEwgBRSkTtREViWUER3iGPD8XXtfj2Y3p9RyE3MT4orJmx7o7M8oc5tSg77VYMPFk6CZFaR6J",
  "key10": "51mZ771cRWePafCfHCfKYyLHQQrYUZ7DxWhi5Tv7QhzWXbLYqYVnWWoWqSB4vhe1NvDHibMZgfWDdtPFMgNmWgda",
  "key11": "53sWUm7caoShR8x9o2RUVy4RChun7kAiCimZiKBd61pugJSZKfBvhk7n9BjrgfAUhxbp39x67VELV1ugdvATfK33",
  "key12": "3GjAkXAZc1DyipCJQxnQc2isipSS6bJcuBuFgavRraxB3cEKSgNqWKXKkSmU1T48WJLvP8gpkzVXYvm7EhMhWgvq",
  "key13": "2rwJqYbo8S2sLsqzxP5eqUwh1Xh3S8R7qvLWTmm2E1tvej5fwwMYd7syB5uL8HNRTrJfKMaTEKeX63o6uV9waGfq",
  "key14": "34mcWMtkugaF6qj8pfvdWFJ4iiToaXJ49YLP9JZd79aBNyznBbsMMpVko9vYTZkJ7fNj75c67guRsxFgZ4215KTn",
  "key15": "4HnE87oBhSqb6zQK76uNYs54GgASweyX5QqAzMQjgs3fCZJNssUteJFi7DFDT8h8BwA1GLPhnUE7z3RDoEYFMqfy",
  "key16": "5cPvbHoQsSuYrhc7SvacQTMzFUdjm6x6VQi44WAu6CyNmRdHCV5dsgy5prC2pUE1Ajqq6DpKfjkKk7Jqv66cMVJQ",
  "key17": "5cZXNcDUKw2piiWxqKN5qDBoHCZL4NpeXGgCjLsZiXRqHgM5BojXq317fyMiskmoVkYxAaC7HdWWHNmCVA4qYjHa",
  "key18": "5H3Sja515kx77M1JLVH8hBt4YFYkDXmgmgLfcLtN8tyC2YN7DxjDVN1fTiuZMd1PAowkk1EAKLxxAx7kZrBdvvrk",
  "key19": "3srsFysPzhmeaScd9QCBDFtrZQPTcAMk1LeHAGXM5KPZFGoSp3rUQm2cPCdpTAC2TJMXJyScQ5tk2FBL3giptcAe",
  "key20": "54a4BDinkFcQ9QQETer5WqWeg63wxgVDNjNFiPB393EBvFd2pknXnVMykAjko3ZMgxwJCppbpxceHDYVHShvHRdN",
  "key21": "5RdAi523BvqxewVJnCvx3QdoPLWsx5cCXxuRfxD4922PL7hLCneHt5t6M3H6XU7YCm6xGyAyJ6upWbhh5YtFKRNm",
  "key22": "jocKuk6NjhkzHbNHN4c54URovNydVc7TU2NPwyimugtTHPrfD1qfFCGRZquC58SJvsxkBG1br9KWeEM2YUcHSsx",
  "key23": "h3CZGXGp1xBRnwxW5nUCq2kssJpmUGU145rDWsA5RngcF8LpDQD2UcW5ooepSqAZTVzXSLjiQoamv41CgR1EqPo",
  "key24": "3XG6bHHUqQdfi89WVoTxtVL4Lz5rtgTa8x5T1xTBYhr6z9huUYBph2rEMYCKAq3Dm5FPKj6rftkenRn9b9QBMmAE",
  "key25": "2BCq2d2cxUoZf3uQN1ycyomhd9jf2FN7rZGZiscQ6RTZgbSNUpiMBfDuX1S8pXsfS62dm8PxFfH2AXgyaU3yuSFS",
  "key26": "4Byrx6xj2ahpx8mAmdmkbaLU4PGp6ydTyTj5niTgsSTNoVmmageqFGv4QxT46BwZQ25nfD6LW24eEzLqfaEZoqgX",
  "key27": "49FKYN9YVdVr3vc5tx7jesLpDMiZLRvVP5xdBLfaGL3PqzHaSJeMZAvWgjLoc1KGRScpFeAAUZn77QBcciAm48ED",
  "key28": "3Zs7EtiSSmaUdA16sHzyBWEWhJEZHvJWXreMJfgVW7pbXNZfspepAU9xvR8VZvneWtQfREYz9R7gXWEFFiQPNzEA",
  "key29": "5KjJ3HnWP4ZuChEzWmrx3Ry4RtDq9vA2SGS3inZb8BsvSFFqZC9xXQRqcRv4bgJT3ASw7gqGtixEW2CBTHwEYuD8",
  "key30": "3SeUxf2Ce8UguRZox9GVec9MFLxC69bVevXYMkJBUtSCPhBrUPkLShYygMt4qkhVMM5Kvj7CT41TD2xnaRZRaNo5",
  "key31": "sTrRjRgtBmQ8ozPNKq5NL77ieDyjaJgMqt9dWhtHc9DX1hWRu3tfXQx2L2DWxqr5crK2JwNuuq9HxU19E6Pzckk",
  "key32": "2NTRnBWfu3yzFkBqnPdnKbt4BwjyZCj9ZWx49MBzcruXrQNCxLumsMrTbZHWDiMMXYWaiY1FEVr2BCryLt1e1giU",
  "key33": "2WskBbr2CjktTZQDZij3jZUWJXEjXedWQ574hYG2AB8iPvbTAcqPyETeo2bCMHinDmBfipCWscj2q5AN2pqzM1bk",
  "key34": "2scue73o7qsyxQc7vYdZKJ9vttsxCKpncofAUAmrDmWyibdAVggzTYsokeiCXS2JU8X5RfUro28u3BPGWQU3RChm",
  "key35": "Z6fxexfhbFmYkbNRhPcbjGnTBaUEkhLcbEY4wyHiZRvk9fbwYKFAw59X4QhUmLkMywrLUq6TCBZ6i7Q8s2rQgq4"
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
