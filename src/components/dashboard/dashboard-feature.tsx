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
    "4QvLJppeNiSK9AB45DQSUJjHCararTh2HwuDFiU8kuCYLrmtpeNGL4PzKNnH5jMhmtjge7GTw8vdRtF2K2DZPxkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ritBQrb8jGL1Bb7pyKueUpkxwxbrsA77qhay5M9mxV9Leu78ejZsS76iBh4qjxh1JmRtoH4JBDbchEdaKLcSfS",
  "key1": "4nZUaRtBPdoDn5et7AXtNeuHynXK9rhLdGbED5Yy1vi9CQNhEsz9M1cDdfSomGF4iaFdCRiF9u2GtUA3VC71bpFa",
  "key2": "4BLeCwPRABYecWuqs21ZWhUGS51jXKepwBAvMxwhRQZBDkwL6iySSQP9xiFz6Rn19hFXAiMWU8Pt4JH8MPZ9mTAA",
  "key3": "ax3orDVEjFDRu5LzfnpGEXoaWvd49NBhC29AdBB8XGkkCUw1ZoLYRABaAkuFC6R4W1w51WgYSDZrYtugLkPPYWE",
  "key4": "3riFhUkaW8q7sAXAr3je1EQZzVTTRziygYn5eRbXcBsFcvdTfkvgKfH4i1XCaicihACnkc9ynZadJW1Wu33RdpB3",
  "key5": "gxkxiz3iJpunk5e6xxfbNMzWMstKmNr77MdhtCgVHJZwVPiC5e2pLBQAWf3omWhsn7HW653FUwdrsx3d9ZHV19U",
  "key6": "5sxRcq5cUw5KRLNmJozPkxm2csfbYLgFC5Ytc5LzhP1aKwErCgaFicGeREVxLDet27N6RKGqk47KASFczB9tsCXa",
  "key7": "3chkzvgr6V3FFyoNQ1ALzLvt7AFpJyVqcen6ukZ1qyYusH8u2FYNt4b9JVwUCxNfgkdSJoFR1NoktWuAt2Kq35yd",
  "key8": "31f1hot9YTdcuG5ZZ3CeyGexTp5e7f969GjuqF8Xv4MnutyLqMx11vjcF4qWqoA6FTk2FdgsBiL56uAYQwcRR21g",
  "key9": "2nD4eVNXMKYAiNZ9vQgAUdMyF1n2ATYmRs2yBiZhcpsPbL1hi5F9EdrXRmbppUGM42m91tTpnWxvET89ecYns4or",
  "key10": "79hzBoEZ6KiBjd5joiTwmFgAXEFPGcs4U4Kit8PKTHL5kZJoS9rNjbrmpwJdFpEbEMLsHNNnu7DmGHHK3fL43Pd",
  "key11": "2U5ET2dJjrxW8G1M6wwkVrMYpoSQvpDo42PhU6bzwz5WMgeX7Pzd31gcAZZdZQqTfxZodkbK1DV3A4NaQ65fGgjJ",
  "key12": "WYp4bbMc7FkD9Rg4X4kYKWzMFBfwuAS8e2eQi7CtYYorkMc2KoZsKfJaD68XcA8sKtBcGLn3irySLogVkfmBXTu",
  "key13": "2G6vrAtb47sxhzkjXkC9XYpu7q9dtHiufX4k7J1gNCao7Z7eH7TDUUzWp6pa6yTmsg1V7CbWkLNVUR4uPSVjhaNX",
  "key14": "4Hve3QZnN3GyKwCZxjDDZ5H3UZj84RPR51d35LxiKLPQWD5SAwesqtWL48fEXU7R9M6yTj79ksF3qdQaE5s2bTQx",
  "key15": "4GyFAWsB3WzJQLrv5tqtUQQP3HQvQD9cfR2RYURwKRD54GHdfiJ8gg1UiPedz5RmsH7AJP9FQ3cZokZsd6kZTXEm",
  "key16": "2VFnN9NcsZvm7nTTuoGz1WCNKGbTAzRwaFK5r4RNpmJ3Z58MLMG2qEfT8wJuH6KuzdJg6c1vknBrKpgfNdA3NBJj",
  "key17": "52iYJPwodnTHokPVYsL14AxUAsWonAk5YXxXy6zrTmRfdPSjrwpargo5J5EaX6RPs5EVnC1cEzyckNBpYQsaTh9d",
  "key18": "3d4MaNFGTobxoYAFX4K3NFcsVL8uMoYocKGnCHmsBLRN8bzUwjMjKWvDr7r5m68QJsTRbzCu58k6kGdkoCx5vddn",
  "key19": "284BhYCRNKRA1tdjtU1JQTZ1svZJv9CNWbawcfcASWNBnyniCrvx8ySLJjEJiNBkXFDq8vxF6sfv4h86fHYDWoq3",
  "key20": "28JRNCDMZenc4dQjD4PUtc55w7VWoVbTKwJEEB5yZXmxFW2Z4n3bWJMUX5wFbk83fENHteVJ1NCjuDzz67b675zw",
  "key21": "2zRqDt5tJZdveY2b5hSrF7j6FmqYmqRHU5zsGgPzxU9qhWmVfawe6qyUbtMZYFYtbUF9wMjj7GgXbjaGWFMuK5UV",
  "key22": "3tEVHq19VWtD7Gw91TQu1wMjCkBS266D1yGYrD2PYQPFtaUEtpE15u7qATw3ng3NanUFgU2PV3L8k1XJgNEk53hV",
  "key23": "5uLZ6sFNP4GR7AoV7FxE7GVNdqPmKKtDTkE5BJXC2ML8Gj9xPP5MwTSh6n7KjfjtXn31joSWjUxYFbw6ZyUP1S7Y",
  "key24": "44zSrQ3dF7We2UwoC926suwuLNhw31tm44H5EEB9kCP9BN71YJnn3UNC799tS6PpD4oX5VvrKytXRdKCxTAQaJWx",
  "key25": "5697j3brFPwREBTMgShiFCpAJeRMHBexoXuzkcXS1pNDJLFQiVYEhSA4r5NcmBmy43N6GRjTYWuXYpwDW2GXbWs5",
  "key26": "5syX96KLtLz2FVGWMLysUFaRCJqRxrCF4o8jroXF3CTaqQ7Liryq9gEMbsnZ8hEMszcwPfgA6MkcwK41VKcPRCUT",
  "key27": "3ayAx3f4JJXA87XZHnH8feSBaefXasVTcq1uYBdSpLQr29w7zuhRCm7EsJvia7VVYxAZmXc1ETXahoVX2PFwSojb",
  "key28": "5TReaUDoQUEpq5WAmbHhr3J3Lov6Dq6z7o9Qa8vC4Z77H2ebV5E863eQqv27xJooFoMVwTHfGEBiRLEvYwpDsAQA",
  "key29": "2d9WSGf6qYW7jVwMvocNeeDeX6urQfhQNWgY1ZJqRKt3phJjxmjH3ySN4wrruNjRgEoCHdf6iHtVNfufhg55bDun",
  "key30": "2PvBcdvyCEPc99zyTkZwTnLkBNdnGMNpUxrVUeKzHbwna7aBk8LPyqdpptfuiWM6m25JH3QqYAWrSE7Rzn4RSRBz",
  "key31": "GVSozfHMchUN79C2Y3pKFaqr15J5Y7Z5EQoZBW4NFxZr98CUos3CnBzLKRENiqvEMEjW9CmiZKzesCrnwQFhh8h",
  "key32": "4JZBTf44xbeaVVsn3ij7zgtmsrkCJ7GEnWFwxJ32zQ41M6TXAN82fB4CPhMyePoZudeo3FdAWejXgfQghJ4CJwXG",
  "key33": "SVqHGscCtVGHbp6CS7t1NQH74Pj83GJgtzWf3tqutbeKsgBgNkycrtVCo4XEBxqDf6mcLkkttt7yGDRA18nD7PZ",
  "key34": "4B2j4HmRf7HwWztRvRZFLRXroth9c5U84gmHXMRmC1XarsbyfYdgjjNdKqCuFyaQfZ4NaLKqmi9ThndoEM4t4ycQ",
  "key35": "4z1QjuRAcbxCeH7otKmnNCewZ3FHyX3R4vSvZSjVY1Z5smMNSxP9VTT7FMgEkcS2dz6Azq6yuu5qrYsaNn9p3vtX",
  "key36": "2UvZRtNuHBipzn8yHvGhkwrWAyJEURJJLvFxyYWsqAuzR1CUBFWk2ZXQLVGJWovb1haVYfryauN8Pk8bZaL8KraM",
  "key37": "2j8LvWmooz7opXkR32KJKWhuhqCztf9rMXz3zneBycfK2vNReLApUeBgznUKMtzmRiukoXzzL4s3FGWSQNtdZJeu",
  "key38": "2TyCfLgKLEpSh8FCpNdUS87C8XjXXVekQS3BFBVVTXSryo21FxDrm96i7ukvSiCW75h6JsmQq2zbey5eDLq2Eyw7",
  "key39": "3WoDP4DJq8ubFfq7c9B4xMATgSMmVySbe8w7qQpsgVtfrLazBoHpzaSKcQv9cCieiLkW9VfyNNuMCVfkk3byYiFX",
  "key40": "2cXtcxKUazsQmA7dUpUbeCAiFi8Pkw5kv2BXQrhmwXim7vY6tdHU31m9rPN6iQpumesBnQdVAQ4xQ1hSmwyfvBEY",
  "key41": "4rKMnewJCw55wWHYRjnujYhkGxftTymWXANp1Dx6w85kuAStxmkxNZt31sW1WhV6g76nKGumkKhLEnt4ezHHFy6X",
  "key42": "3gXzXP2u3s2n2pLBr1ruWrNZsQVjuAn52HrUjBS1ThWN2rfRcyqQoGMYdLSKYfnsG1XqUam8SS3PpvSwzZoBScTE",
  "key43": "7nCML9tVxwUJQyv8DdEigL8fYZe9hL6uYd6PJA9pwae7YwPVR4nfb3yy81X7RsiCdrZKEt2GFjcuJZ8msjaHqNN",
  "key44": "4JECoeQdCZepWLwCqJTZRE8kJ55jMC5h4FuW2NaAa3N8z3zYA9MWkF1QXUF7kpij5CM3zm64vMQV9Bbq5m2UtqS4"
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
