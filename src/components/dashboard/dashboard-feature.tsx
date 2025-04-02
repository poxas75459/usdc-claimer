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
    "4xwJRZAbmHNFVJa3NmDh2t7oG2s9ZyLvJuhhQEgbZa9meB2yrWmYdHLrKYMLfw89GEYS6CTrxyttfA9g7mkSsX2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeAWmhH82vqpCREsDdy5Jyn1tnuxAvntX2wGjFUVsMMPACyFG2VxmE28uQNNUPSWds2WBBY933v1yqngFv5SN8J",
  "key1": "2RWbyM7ZsU8CWPyDSiGNXGDsPhgdvCNMiJ51XqF2PJcb2ThTjPzLrPwymPhJrVsvkVtw266WdcdFLxqjPCEqSb39",
  "key2": "5NLEyS1wPAjfAg57q56pfmsQGtMcKs8c1bERAciGuYHDJvFPC2wh96KjSKZe7cBn4sAkxMMERjYUvtXPzudrKXA6",
  "key3": "5RKwxnbaW6izeWUmQ1piF7vxvV9aeaLRNjKQovZ1Yt2ANwtN5vkRe5SZMjbGfnXBq4tZYMUTMgqKU7u691mUp6CM",
  "key4": "5KH4n9NBZbEstrQ6ESC838CiXSBMoX2iemsBVTDYG1WCxk1yxKgBN9oGN1NuAcPfWL5nrDXStgmrmFYE6sXyWbZw",
  "key5": "2a14y92Nbc8rejzJzTgkPUAbV8GkUtg69mmRLEjALfeZevHFfdNHsxpwbgk8ZqDSgLtQeAxuvCxPnkZG57NkqfsV",
  "key6": "52Ni64saeG7VAGTUokkAmV12gvn5PhapkdwozPKEiKxiT11etyAJBZTiHUcxag47Npfh8Um7v8x2teUdiPuzXohu",
  "key7": "3WSzmZ9qpoqUoPRBDhnUM2ZSFUBGv5g5pQvshH7tDr3yvzsjBmZgu7CvBac1Db9CoU4TBqckLViwHVHZ7fS1chH5",
  "key8": "4cMeJPWyhyPrF5ia7C596SQGusFRjxQC3YSdK3gAjkW57xftpUP2Xq3k6Y2nSdTDS43DVfz2QWZSDYxomiFwvDhq",
  "key9": "36AsjsD5uAvmRETXsqiaLnEN74Y6FzgWwJ9GE89D8YMjUpZybudWsh8xTebXGqMWbv8yi17EUmQLD35v2YRGnquz",
  "key10": "4WChUkaceJzXhPQw4153PHetQA1Ks9sYrZaCQJy5Z2r1ML4Vo7pcaVB6ovfqX7eCrHhvgJyHsSNNKUKgmPpkNSZ9",
  "key11": "4fqMSiyjuSRHK1LtbrBdV9J3yBj7P6BpfNfSSBuKsjNr76E7taHBauUAGWEbXC7bNVH4wDcJo1qTMSLqnYjNcYdy",
  "key12": "2wwZLCeUduR6nd7BAdCDjFdKi3kiErs1NX9J9bfuzjAn2Q51nz2BFNgGiHLAFbEnYP5NpAuZ3HhKHDo3RJ6LzUUo",
  "key13": "3BN3PwVvYjidEC7MhQ4CD67nqyXT9SnRQ1cJfaiEdvG9iDLWZyu1k68dgRchK2FFhB7sV4grSzyeBH9XDV9iYWC3",
  "key14": "4MXax3keVeBG8gZujTG5dCiqV7mMGvybwPYKfo8845gxM6zWtzdNgrg4vnQLbYMXJjfmJv2FcPm46UKqnWCzExL4",
  "key15": "3PCPwbMuqLZFjJShBjcAruPwpqD7NKw6A4L7gJ8XMG14UaAdsPusDeno2s5t3wisghG2hkuZGhmNMrCoyTymk9r6",
  "key16": "4a5Dgaw4WDcoJFCER6KPB7zJDEVqngZMbowEQ3VEMTQxM5tj9GTSvEBZcfRbE8KJQV2DdwQboKu3cpyJnT2PrNuw",
  "key17": "4KzZ1qu3WqndPyeQq3eEEF9PooEA1HnqXxtSvDYR1XZah4V499fsDYFcrZ6UzsdS7MTQZscLMhrxnLPHMBy25fPg",
  "key18": "3mLFtsGKUWwthGm2fSMvLKfx8LVb8BXQY66gNCjcnKZgzFBfniPmB8ircvUtZhtgVmtbNyW8NmjyTUjnBvZ1dpjP",
  "key19": "2puvcX7ewsooFdNwSTYWAkfSKTu28pzDr7qkG1LUiXtqQNE9K5f27FLGJ5TwWprAGWiqxCU2wFmSQjYSycv1FzTg",
  "key20": "565upVkCAGxKefKuv8pNuyTasNW1iG5XgNV53d287nWE7MBkTRyMNMh4UH31Ejj2BE7W5zEBjm6eu8dwySAKyonN",
  "key21": "4Ap8Tf11sSXduoey1WwbFvAq1puzFbiZ6seoGUHoYWzpQb8sbYbypuSSij7WCrK7yub4UJ6E1S3xXUwqDWz397JH",
  "key22": "2Ue6wcM4cTFf9NvoX2iZnitV1XjcEttAfjo9HCt3C5qgQ3w6B5B8q9NV1mMaMdypvCwguGYuhKA9pPvUiBDdHZwS",
  "key23": "4GA9jMQC8mcG6qg13bynrqQ5VDD8dePsZ2ysVZXnc6yoSWe2ZCA3MoaKBRD1m47XF6kZpYxEyaDJnRKcJER7E2fr",
  "key24": "2vku8iDo3YfhaAkDxecTuWxD8RD6z1CgthADGqqFnkf8335j2rbgXq8jeQNBEVAUDUWPSUiSpUAXDG7KeEwheBAn",
  "key25": "5mXp4HVygbwvEgUJDTtcKrjU1yvWVNmQPC6J6yi2KNE7YCERAdmLab5z7cgrmZcdQJv6XJc1u1xSFN7LZkUfnvDF",
  "key26": "4TrC3KsiVQmi12x19cTW2PBpfpu93fvSoxnrxSGshLNS6KxsDbLMbLYr9VL3YKq6NHHZtnxVwituNrmjNsuy58Uv",
  "key27": "c4KaXQ3PWg8XBVd2Wbihns3t5efooHPzhoJYajqavNt9LX31zWGNXHJEV2FNuLGPNoXgqhW7tpm7MSJHwnQKcea",
  "key28": "2sTwisd9kdWHzK7LsbTMpRYTTRACGJJNyNoXE9pFSdwE53AmviK15cJFtgkkcuViLW6Uuka1r9B59iy6anAk8pQV",
  "key29": "5CV5f8JqT5EWkQ8gmq3M6JTiRfVFoUFWDHDMLsPmxHSAGdgQN1nhptFkKNpPmkPjoBq6ANfhpf7sFNG4oac5zSXN",
  "key30": "5KVpF2MG9cM22QBVXWJrHwbGeSuewatizR24xNRSgNX3HriwPK8RfphMq9mhtZryrv5zBo5vk5dSjPFmovK5upJ6",
  "key31": "2meS3BPcTxa59vy1nwQszhCW8PfEWuXtNq6qg1FYmMDEBGoW1Dpq7XmQnQGwxE1swBx3zKXpfxXim1EziQuVJYH1",
  "key32": "5DowP68iSwW5Cu7roVq1AWX5eCCgwSfoAP5LybxcxPNFT3uA88MXteoagaMbPBc89dAUpEtNoTZJy7RtC1Bqf67V",
  "key33": "2KWq4wYyNRMYiPzsvtexaX662f195NhEcgRZMag6aSbaLjaYyYgxmY6YKfgr1RDaad4m77HqLHKqA2ryDvk29jac",
  "key34": "4bV5aCPyFfmoX3zatvKjczSMasmmsWpuNY1wJSstPchA4qsE1ztxihMQV7wT2Fz5snZa8cSoXM5GUjygmgw6uxeU",
  "key35": "WCpR9JPDVgdV8jjLXFTaTyMD58xKGrNiJbrWBspruG8x8mDK9u8KtK1SMZx2EBeA936k3fSZd5PLdpDhjtE9AST",
  "key36": "33fwccxffWndsxuvesBLHXpuZYFgeva2ZJKjvzGwPBWno3VWrR1tY9rmXjeytw3tAdXAnZkdzBCmnKehUcW8stqt",
  "key37": "5inWwrUU3uoHrpgwQxBKVrKAfGhASVpNkTJuFiRK8uejspMPwsWdnsgTnzNJLjU1UX3GGsgmSXcUcVGoCKgBsDvG",
  "key38": "8nv5y9nu1kKHe8C7D64XeK5Fy4D4oEVcLJw7oGzRr7bBPHqgK8LKPgcK1JbsZVDPjYTLXgcEbfxjryqtZnzn51P",
  "key39": "3JTe1X8aCY2YZF1VWsGyGoGJUjMEY1te7w8AzL3ZNqePvreFc4ZzUcjGDYKzw9Zwe9qZm1VGoJNC7DneipezUjGZ",
  "key40": "52AFSWdjuH8uhy8xZVhF1A7hJDySvANDdvLWzPUCBHpB7nUMEYfzQRZEHeKKKnwmpQ34dh1xjwV5zSkr7FuJDZwJ",
  "key41": "5z5wueLmHBkvKSfXa58jQH6t6GKXS5C75pJ2pNd5difKRmvha6giKDZPCnSqSb4AyqEUuodwCqu6KrwRTF6ioqNZ",
  "key42": "BGvNnngbJofTJNyUFinWmfdb28oZBWoAa6c9dFgto98wZgkRH1NZMr2Pb5Krmvu6skcCFdtpY79XcvZJnF5qyA1",
  "key43": "5k6ot2fy5o4S9coQeLfbnfJMThRAK1EgvrKMaH8JU4t2xW1jhnzbfyaqfgZXeE5NbynTJ8J2sgQPLRfyY1FEM9A7",
  "key44": "5vecWjWuXqxG2gpQgywLDESrxgagHwBMCDdATLLN4LmpPnYLBXp6orBkr4F4H276Ut25Ek2hoivJFff93yPfG7Mk",
  "key45": "31pRLoasQWtRGgUhveqruMZTjTV72zhZoMTNwvcsDcMx5pcMDbqNgPD4Ztz4QU5BWrJRbRoWXEAeb7THRQ8LUDT8",
  "key46": "5V9jyNxs7cyjEPmfEg5qjEZpvsBLqKvq87NQcbJbJXt2LGiRVriiSth1Jcb5Nk7t8HNnwd9AvKzqkgRgurPTbUb2"
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
