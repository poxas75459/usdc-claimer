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
    "uU4TfsU6Q1qBBA9yfZCBoo2QHQQDDxnKYtt5Rvr4FTefDAnTm5Zz46DC7LRnub2uPgCaAg8dk1cw6SSkjrN3J1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pic9LioqxRCcbWBdukKwi97DPP4fFTkjwGn6Jxh5xjhgvYggNgTx7j8wt21XdZn1igCwWTRMGEn7FPxhCQgYJS3",
  "key1": "56a5f6UfpinDzBL8wyW1QTpUazHcGjHYmKvgfUJZF8TEfU8BRP3EJLZDvPUhsn12wvkytyYVwV9tcs1WxWStRXdL",
  "key2": "2L1AQv16Dqavp1pWUX52nw6ok7tE5AP1vKmwA8uSkNvsnuLCE6xvXKcp8icuxEvyh4viJd8uAWSuEPQR4XfUMRfy",
  "key3": "3MbabYFqTEp1zGdQZZED8grXVHPXBAuVMNfc52zGURmip7DnkNrQJXW7R1oCp9CuKdi3eNH7WFU3auBZsE2imc8X",
  "key4": "6d8vDauCMbass7weyDTp2BP45FKXdGVsXuComggzpPTfF5uaQ3TeqbkYwfTeE6pPkmbqQNCnREHj7zxxkXTSjiA",
  "key5": "2WFpaLzGV9QWC6wn58vPVe4HJdXCPVoTirpDZkQRTwVC5fFiYmmv9ZiCen8PUnAtVa4t7eWaCHgVCkVu1XWp5qec",
  "key6": "5ywnZ4iUoJUMJCtsuEVGCqp5gp9diApU5rfQUoBorrddvUtrMg6U56ibYbUvtBEGH21fhd8DgbJp1MgMPVa5QLCt",
  "key7": "4WDoDKRMcGMfuYgZDH9rvSaifRduzf7RVSP2CtHenUbURRqpD6nfDmthhUWPPiMU4AiiQsB9iqHcq9GmagaBtv5p",
  "key8": "SacpVfPksvF2z8e3tKK9TCHE6FeCyDuzmx1MK25xLe2EgHpaJdzWNH15E93SQDKrTiHBHuy7rFUVGnA482VpoQ1",
  "key9": "5H1xaZ5gvGbmLdnizdMtXba1fToZTNoB8aJBUZkLvkhvstWWHfhXK1aki62hECMPnWjyM4nt9i3zpRmuPfjs6ATw",
  "key10": "KjWxYQnv4fHMvKo7USYohDGcdFbNY7pSkL9LamxoZJnvDdNif8BeyApzmNWLQLar3csTENZQNL8JkHuVb5guQMH",
  "key11": "4aGawyeL8jeUDpeSPvv6cKn5kwse8TvYagWenjjSqtwQAixeKuVHAHh8pyvs2c4vQ9nf4ULJK618GxPGnPCFtHou",
  "key12": "bYrQiy4iBEL8DP6QvkUctrxoGBiy8hFsXapWdW3asiBw3srgPVQsFrmzHCe7sM75UEwGZNNzMioz62fvijcwv24",
  "key13": "561E6mvJS9SxUmzBZJBM3BNi5ftynmueEoA2FK5eC2faUs674v3RGKZ6Cf7vkd5mx6cUMvYkcFiCSKXFHCdCNHjT",
  "key14": "4vc2fdQMXUWX2uaFfirXDoY5ANJ1pU8T1soAE4W5s73t8NUEGmwusxJmrK2mV4AidtJZLKDD915duouK5CvUJxNt",
  "key15": "2R5PA6kAfP5tGJEbiydVr4L3NBWZCcc9RnskRnGZAfG32ohe4c63jqWkn7uoZVdTRnuDuvmHRdVNVJVeTZXQnWtK",
  "key16": "26RQuaRfJrJ3bCgo6mhkRYZbUvByqMoHiPr91PtoZFGW6vBJKxc6sNwHGAJLQs38SxYjvbe9zStwwZUpqdo8kN2m",
  "key17": "4ZBzEwHes4GP3N7nQuwPB6Tjvk4FkhVSx4MoEK8SJ59F7LWbnqHnoq7bWJjshyVu5yQaNpu3Cp9aGq9Qs21LbrbB",
  "key18": "4MMd2KktMUtYLBg6DAKKkQU6TkaiRep5CPmGqUgn9bmRQy4cDLT3zbbbUGKeersR618prwN4ydLAejeyDBLZfoe",
  "key19": "4CtVpPbc5RLamzE4Z4AhpHT6m556dUc3SZLLcKoqgWKVPhryu9S55uJuG5xF3mj6brCaFFgiY5swwDV3MdhfWfLS",
  "key20": "4KMfRbn1MXJ2LdExpR8ZL5hgFRkdNp3L1BAC95ro1th1RJvRKvf6TfQekA1SuCMghRAGjY48mc9D26iXAk9bsm2w",
  "key21": "4uvFrLTeZ1uRNufo9mYyspL2MqqjLS2X66kwwitvVK8kfqpJSfqMs5QJGj9TSyqYAcSWhP1H9na3gahsWcGbfYVq",
  "key22": "y7jQ22a3GicHupMY47kC9ZKqob3PKqsArhCrrGxXooJottSzKcg9mxttSBXQSqbkhAjn3newn1TbpnCn3sCB4tg",
  "key23": "2UNS31MnocBzpj1m33tuQXUTkjFg7tu9id8T7S9pfJnwzczmrFf5NXKQxYPR1psPfbrYHZR9hjjsyKwdudf9UiCz",
  "key24": "3BTqiHCvdhRd5BMu4kfhj8jESYyR8nWrDhaZA2YHNhGsZhwnAo3J94b3hRdEcAAzJyAoPRWH87g6i5w1HVUsx3rA",
  "key25": "7bjm1ykC4hbTkBgmiPwJBe3YRkxKJvPRzAWmAv1zH5qNduExoRMvo6yhXee2HNcKWVNJcNWC7nDcFY7xQPTgH5o",
  "key26": "385zgnPLuS3DKp2TYdJ6mMsLRyMWVE3y2W1L8urnMzQUnotGyjzbNVgQSGnDqbmXhYfoUQdG7bTgAPgTnYqg1m3G",
  "key27": "3E7SwWXnWX21P2BGfWbHcwseinbseogh8SSR1dcALfZ6AcapbC7BNPGxeGkSZaMVPbNYYkmZLs6zEWSzUmdSoMS3",
  "key28": "Y7DbWhXuc3Ct9oSZ3TWz536psm25oj39tJT2py5knWauTh6ZdsXtFf4kxTYLhpUQxm4ZgkdMc7KzYzLUDf9qMBJ",
  "key29": "4K7tRzgmXg8VRBqKfwTyN2fyMCkhRg4nmV6T7uQLFzdM7b5ej95yFJmaGmQLMsV4fZhrm8zsobgUyWvBdincfyeD",
  "key30": "5CFiiR1fGt1kyUdStcSkEVcFD8uYx9WvQK67sX7zC2hP5uinVVsAy53hVRaz8hMtJmnXeRvQp2vDARCJwCreiRxk",
  "key31": "5paRJoFtv8CytMCP3ZCbsewZrzT49iofjwwjcEdM2EaUpukPz41NDuV3VhN843oWvkdkWe8yQE35fn6v89H4uxTd",
  "key32": "66UbtqLzNdwnDbaFxBfSP82Dev5hVziGgJtQSqM3XiCLGexMLCNF3uQqMnCQHHWGewBREfFdc89mkeRBdqeqnd4p",
  "key33": "2auRNVVt4iLzTPMC8hkYkgQAeaArs5fgZSZ8VSyTAk555nfxEgaDk6MeLktgqR22H7DWFnHHuYk7487bE4vq3yGW",
  "key34": "3vT8zedE2PojeLbyTNTMfTB6AvkvTGJLbvzbGjqRe33Ui7B4zinXY5PXhUeG7Fx6CBTA8iFxQkH4gSTgWbZHbNpd",
  "key35": "4yJxFYwcaSxrHuy8RxQWduJo3ecjbPWgS2uZ3z3yRUX8K19oSHPu7iwPTAaQStkWBBPEG63aiECpuAi3vFcC7Kmn",
  "key36": "3EMG9MUMHtMqm6g7n79PzXhHT3xNx3r1z6HEUW8j6v6d6SquZ8MAiWFabKTffrPrsBmeucjy7fGNapL9kNsfBTJN"
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
