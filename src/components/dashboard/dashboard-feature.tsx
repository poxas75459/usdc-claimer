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
    "4ae2xkpnwTnufM8WEQuXcPEWjVatXaL8grqV13nAcezj3NSnRVyvc8YQMnVVxDtdyQEu6U2rjZLnHotLWGx8h4ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sdy6FgkjV2hmnmoxYd4uTKLhKax1BtdjSmTd2dyEcbdq2jsDAceCYn7zcE3aBuV4tyvoWmAXo2jCRtHLmXP8TSg",
  "key1": "3Fo7fKSA3AKRhkU3MpaRLWzN8djGD4QzgHhyVaiphLCC3RDuRMAPycjS69Po9EM67yJp6SLePGc1ciaNzZv8WkNK",
  "key2": "46tnyKFShF7tsWaXXqvjhxquBxKhExZWTgxKq6AeTiLCCgSWMyrBECEFK7R5FPrH4BFJnTbS6vgVx4LabeLA9vbo",
  "key3": "2JrY8snPmKJ8xqMGzyN1C27SSmNzvUuntMDCun3Qp9uMosHpYGATArZ9tgKcVgyVpdt9FTMiqwvv4C3BRnfimXYx",
  "key4": "kqejwiakvTetcv7eG72kMGcyVztw2Wu5xCWW4fJbBiLnFxPbx8953BgVKv1hmKMCS5aczvwGQGHxhA61bEvySnr",
  "key5": "2c7F5aMv33yisEkPdV7EJiNX1dLHWxwk26kHkvifz6T6uS2gxQrJ2TUEwPY3iGnV6PfwPz9dcpkn2jbi2pGZ3Cw4",
  "key6": "4GqZrF29FWoJSH2LKUTw42BKsXU2WU1VTMWviDx2HmpKej56CbAj5aDuGXqH2RGCGt1QeNPdJevWNDCfD9iyBZuk",
  "key7": "5bnqidosnfBHyUeu8k7MhTRqLFCAHUbhgpR6uifhbGM97Byr7C29M2uwTSLFB6V2A7QKweMc9Chc6UJyZxse3RjU",
  "key8": "4qCzuL9Nc4exB15AmEdjV94zzTmMCQkKrVnBBTDcmXKCPfiBuLhEcZMvBT8HRpHsBqhGsvZxNfYVMFg9BcBCbxRY",
  "key9": "5znQiusjAgrStRDLUpmqiM3fNKsUwXcGyAqocQYdz1RgyJcwrv8mNa6uePrzhMgmtaLCFSpiKXUP6GXAWE62PE3k",
  "key10": "3AycHkU4LPoss4hZs5iQWu7oRW1SsgyL7YEXBaLMRn3Xq4uzkfk4VqPHBLosNQUnG86McjowvQQrUaeVvZFn5kF2",
  "key11": "51FW8AUThPPokRaApiG3ea39LX7JAg6hSMFvH9URVMNqxwWx8fvgA8vBAx9qBdgWpvMp1KdcCSWwzNFnmDqc4owu",
  "key12": "9fRRBhy7hALhoRWDicq7ny4qNFxMKuPjZyw2JxzWzziJHRTR1yijNGkLMzxfWtHyiLMM1QEG62WnDyHTxySVU8m",
  "key13": "5GCg6D9qm4GWiHFV8jKLGh3brxVdUhMtAvELmFS3BibzJAU5ihFqdsRqmeS6cWkwQQTfbgKtspx9EmAEd2AcVYdR",
  "key14": "4fNkgcTY69aoYKxSvpDwQc8zdDdpCiv89ZrNK1YYBSyYGqSBFe3NLVxLVfXwJgZBeL1xNdRxUKJForXrDtbxNKho",
  "key15": "2Enh7Ar4HKRa5ERqL5kWUTgCkhvMWiSQHXaeoieymMkU1BZdDB4P9SqTybGcJXcdEcxaF1M2jk3tK15T526P22Hi",
  "key16": "2bibQyLVx1ucA4SfRjoZ8ZB4pseca24qTNsnif86gCLDBQgaERsN7B74Xvk6Thnm83RChDEcfWMcbzuAHmQtJhVp",
  "key17": "2ERNuykX47zyZqMAyMNwgqK9GzUMEDeYcHhTGtED8y4umbLavAFoyvjJTPPgzMC9xPnkQs2JDYQ5vumer8uyzist",
  "key18": "2XomV9UbP1DdP1NN7EoNPCB9ci9EtJAV5eUWfNdJJURqRSGLeTAkNr5PqPiApjeEdAGJBsB41RHteSJpFJb4J2W5",
  "key19": "52wicytmWS3SNwbkw8v3XXNGyk5y7g53UN4zMQquuWG75PpMavvNMSfiRrh3JohzbtRLmTtvs8WkySM7TC4qTWqv",
  "key20": "2KyNLMZHM66ARwpGeYsjMG7SVeTyj4HnXDG8SefDxNwDJonNFaryzscvBV7NWC63E9SwgYDVYuUneixDjAwAMgQi",
  "key21": "4czBaWR4sUCYx8oWPGk8XtXPUHwe7ysgqQJQCi65rimHLJcnm13UpubEUj9hGkhubtkE14UC8BnE5qv3GC4AoE2Z",
  "key22": "3WRGJieGyM6Tm78GssKF7ddGYDsxvYyYcmf6qqXyREMhw2nbFCFLzzkLg1rsQGi3j67pcQrgu7aSuCVNpwG795n1",
  "key23": "43JK9wq8KLtXLPP6QvXzCMLQK29rtyd86m1SCdAhWy7sBcKDUwFbAZVcpjZRyqZvy7v57vK33dTKYudYRsGuJqF6",
  "key24": "3iMTwoDpDhxonQFECpAyFHiRnACTWhouXueuRZsS36t4xgZviKwfPLGRuB3yYCaNryPYXyakp6uyXReFNddR7NAL",
  "key25": "3ew3o15TX2ydBsUcHFSacjXMLZtUtAVZnkBka7yPxWoEQx7T1EqhyZZTsp95KSCjXibBmujaSjrmq2VYuE7H9Szq",
  "key26": "2Gg5iSQZjkNmZk5grUrFmKgB8ytnvTqvsnr854Zx9koQDu9HTWswCn9J2YQJFLMjr9TacvD9kQY3jPiXigYVXFpD",
  "key27": "5CHpcUCnaugAvFxBtYgN1VnAze46tFXkwcLmR3xCRi5j8DaFiCdTKsoQbR5ZVWS1vFUN84pynJHzvdGbd7XsfNQ8",
  "key28": "53scPZt8TqCJaAjTUn5jzieVtCrkZK5cBKyjXvyJtvQEZGqmENWVZ6r8QA5HBRiQxyM8bQW6NFsAZRZLkGBKFRFj",
  "key29": "25UHFQoBoditdm5ot98kAhho5TkxUE7ABC8FaKh475yW1eVwenedRUHgTwPc8DNKNVqn8UGVsxj6X73ueQUh72Tb",
  "key30": "2VnYy7sHU2PzxoT3SfDmUMPCUXtT65TTdUdTharZPSwaPToUDjeoiddPK5VBVpiFPxCCcuoUUZ4bcWtbTtEndakY",
  "key31": "5wnRTdEb6QUtrYGCmPvDTZZuw3FMt3hqSUTAueTg3rT9e2T5PgQtraLScYd9GZRAcnoRFWidZWSW5apGAZTBjngY",
  "key32": "4pEcsZcisA4s4ijvzrzX3GHLDFtyEimPuf9KrX5eDrrZFSzkYiMyTSfxuwpyEwp89Kg266UYyiiFipFn1VFCHB7s",
  "key33": "5DzZTDCcfws6a2CTNaihg2L5tCbnTsCem8jSBwxniLnchJsGbRs7CBA7dfZkTTsPHqPPKLq2WajHMwcYbtXh1L5D",
  "key34": "UjfZJk6PWBbeQHKmEi9QwAHWCxCpuh1hGRLrUP6ysKoi9T8LtLx6dSarCtbuSXVhnRQNs3SFqourUFYRCjGSmcy",
  "key35": "8bbmeepEhzKRNM5EASBjA9HqQKWC9ZpJq2Wwqau3UFzC9k3kgWawA4G9XnXN9RymWmiRoJArJwLaJvZ7554ur82",
  "key36": "3ZjaJMgXCoe5qwK8vzMbgTMNXwFhGjF2PRre22wvpgJSMRYyX8vUNcUGL12ermuBkBgY5WsXiEN9iikMM1yKeQwk",
  "key37": "4cjzHKrPpg27sivinBnccfVEG3pXLecBAz51ywegPgfjH352PgVHmrAXhe2n1zqRLXRrcHSSHYQyYBFKwRXCtSy6",
  "key38": "GoKLzpCQrQEAHzxd4xh6deQERD4RTAQNTw9Mf12N6ercAHYwSCgqC7BaBgdNHXzhVCc9wAJ1eFU7DAVufE22KNj",
  "key39": "644geYcXFGLnJbbjcByxX5LXB4Qgtbf72AXPDDWCcaFbW5dXq9QxudgPJAKAnH5mWBjjoCNeEz8h7SxpHt9C4oJW"
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
