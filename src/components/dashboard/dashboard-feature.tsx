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
    "3crDtEWCDZGf3KcdVk9i2QbARUMdwK873JY7yVpXK5j5Gy9yNtmhpN82nvo1UNg1UgqL175TWV8h5CMJ9cEd4cYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FVnT7tDzEv3EzJtB5Hnu6goSabeDsdeSMXuc5ZPEGW2kJg1iwHwSrNApEaPcQWjcqfSqXLZXLC6xZ2nqxkPsR3w",
  "key1": "5Ft4HJD1MoTtzSYubP8B6mskSMT4HpJm2L2ANv38g3oUBeDm83sK6dVN5BLaNYCtiQDqe3jVoTQG3ch3oBdHKzsu",
  "key2": "5FtKdfpyWxCTPiurJfVZ6bcvTj8L12vG2dsyoFP5ybfrVMoHFR3Lxjm4aggaCnsA9tcjKAvecuKmDL1HTC1N8QiA",
  "key3": "2TeH7x3r3tD9Yr9U8RqfciSTtAtWocVnnhbC2kRH5YKZkANiiC5bPj9ukFsGmhj5GK6MLkznoAp1niuB6e5bKPyV",
  "key4": "5aAYd4zPHX81CLTyX7Wuf1s2SpXFnf7vLKxUJZuiojkbk4q5KSbTEi7NDZaTs6v91yb6gex9pxL5WPNJ2JeRParF",
  "key5": "36J6ZJAhubiwdHMVV8Wk7WqSYXLFnocc3K6bKj6VnfUUskqeCpCw84mwx91YoGX2UKDt2M6fjSoUDrAFSDfRbGBt",
  "key6": "64zX9WFHJ6kBmYHAP7gGaD4r1HBgFjRNwvvz6rSc9YfmJXHNGprQhwnFV6zZNMXraHKZwSvnFb3uiPfo3k5EURAA",
  "key7": "LHCTA2dYgnYtS7WDSP7iLHY9gicBKpHFLNU4eG3vSoPT2whHqy6jG2wzoyfzwpGtDGnf7QoboK6rJqr5KVn8EtS",
  "key8": "2nvGXeSDXbW52NJxxee2kKKnYBneooqNTV3U75CBxB88Sm2vTSdDUCNFCLsfvJ78rEkUg6LjkfuJ5YvePPyzTXmp",
  "key9": "4ciSo37TpqZH7GR55AvqrNDn4Reg2UudMq8fcxLAr7fa8GWMDCG6aRvkuNvdPwfi2frA5xzUEuw694ZPAeGTei14",
  "key10": "3jGew4vHwDLYi1AoKBf1VHrGh49ewga2vZ1hXFs5J8orF6rLB14F3UpjVR9iReKxCw44sT6kXq6CmEDyoofG1sYV",
  "key11": "3Ud6jWrHgbsh7hh2erpLVzXaAegAD5An8hujyjdsb5NxsqxgqrcoQgdS2PA18q5oHwY3ckCfJpWWRzBANaudNFak",
  "key12": "4t8uBevXugKvg1xRU44mBYXwWtKHFFBJLmgnobnVvbnBcWMTB8o2yoqm4KzwD71iV85W4QR48W73NcV59vM6KNEe",
  "key13": "5BsWr2kNXtZBizQNeFksTRm8ASKW5FD8it1tgbcQ5hhsub8nXKMxk2tzDZf9LESiQ1mPsNyBMKHLKSJKD18D79Wb",
  "key14": "c74hiqA7pnLGcFfgP4VBtZMdNsidffExnspjKoEFJzfqepfBJzJn6XES7ndHJHtzrfmwv96nbSr7V3K3yiQMDNj",
  "key15": "2Jmv6isaaizvGeXAKjJcomDmf1EhMaR3bsD9gCbu5TESXjRqT6HPzcZxq4NF2dnrgv5VBDbLtdXLUU8TutZR8P8T",
  "key16": "3nQspvirtA4VuaPCCrRrxHBNDNwXgWVjKZPn48u7B3NEhx3G462W511NNgJcnbzCvbMyDZVGSfLZmaENuAhfRmQy",
  "key17": "8uTLD1CqpNJRB2bqUrtW3syJRcagpMS5KawthUtksfy6XZ8WVtGSVQXVq4krmFaS8iemxt9cmFaegvQmdfDUx9s",
  "key18": "2Bu7TViRCFfMuZkE9XU77xBpx2mCMAiJcz3MjV9kNQVEXL53p1z5K2eGemoLqgSQ85CzrsEUZ9eZHJKvuQgnzFBv",
  "key19": "5rQaEva544qdAztARttjrYskVNnN1rx67LuasL94niKJ29HRKwJRrkKQJsdSeMvWFWPvDMahGWtmbwwroqNqGj5N",
  "key20": "4t97P8RiufVuoAeYMST9eHeURYEAKGt5cVC1WJxLyqmwWYXq3yGvYS2soWpLNJAxsSa8AzjB1tELiPnXJwPpXU9z",
  "key21": "3EewD59uefiTdj5gQmM7DcSqiiJrL13k3WS29zNrFvrUCZA2CdAz5d3VSHgeCUAwiNQGxde3bTKjzHPvEWTx11y9",
  "key22": "3DoAQtd17bkT1QLe5UtxAFtrRuBz6VCdgfsHBqsciR4RfmLHjwSWuSVE8yyZTd5yvmv8f3GoRbo3gLbNrDNJRfHj",
  "key23": "3ELM2bx1YWqd1rfpqZPxEpPC9VvqQBSkqLJuBCmCsmqPGhcywxwViesYAxv7JqfdQYTZbUsBxTMvbbxf87FnKGqQ",
  "key24": "627kcneoj33AZKRxq5zNDvzHeFJL8eysQNpNGWMmzmVLDx98ZbRPn3g9NjHhrk6WwjdbPJC6aY8q5FAUEW4twiRL",
  "key25": "3sVQpwqgQTdHsi3zK6rqGYuRkoPbJtKSSZ2sqyLeoy6j1Kz5L851XkTHo6Uh8MrHnLPDqPA4js1PTDcPybTpRCgo",
  "key26": "3myE921M2XrayQq1rj2XMZcynjf7vhTYapY7rWpjEgCiNFAevMWSsAW7CuxNDCv5bEf3zyLwLdYttPvjSwkVHUdj",
  "key27": "2ZtZcug43uAAneoHbPYrGWjgQGngUC8toFZivCizxvz6yjwEaHV8v65iTowq7jyEnTLqYZNb5Nj42VrKjGJxdAnF",
  "key28": "4Z4yVj1p3JxZGWnVsVQcUqhxFgPxzTDUqT5nGf2WN4CvA777X4joYaa1SPg4eCgSpcfUkGucPTWMMj5xSeovT7Vo",
  "key29": "4eQ3m7aT7gzeG8xPTafcndHJ4XJ6ZcBVerF1j7d3m57pTxJByk6JX3zpa8cWTdf8jw4PHeYfCC1hAzBbnY22gpMM",
  "key30": "5KaKJNehSvyvTQSP8CfMVF1emmCkLk9jdzmk5exvWNBeKdVRk85qPbmbTkzHZ2g2EZzhwAcG4YTwYJw9ruxDNhoF",
  "key31": "5C8E7Tbe1z1Tmk7upSkJQ13mSA2jstWNPr5QLbUF6XAVDZ5zZzFKwbRFKY2azH5UEnwYHcUCQgBbFCauhjTk8M4i",
  "key32": "3KBdfkHbBNAMeJsb6DDKmGGu69NaHfrvXqU3dp4SyJMgxiVH2gtw76JS2mp3S9QVuAX9knnMFbRiUaXtKcwpSTEq",
  "key33": "3N4voyRZ9t2SR2hHLSCpc9AiEvnrXoPoRefvUpkZWXjzwnvZgQvm9KUoEub8trZ1vW958Esuykgw5mYWJSeza5sf",
  "key34": "33AkZ4hgNAcgGLYcnG1LUjrmBQqkDf8SWiUJrkiaCbAdw5ZEFBuwdR3hrTQrhhgiaMWA6q7D3J7NYnX2gjaKQTZ1",
  "key35": "3ASjSZ1dhodL1NCuGEmLyLLJBfLP3LePskvy7j3uHZZ24nSvo9V441EDrtQpFKczcfM1biMVLYvrtmdLgaso9c2w",
  "key36": "LNWVkmEvYCVd7qKNBaQz2kAbK549cRpdT2LJw398u3P7jcfewXDi8jYcAs1DtuEd5E7Q1w34xZWZJUBnrqP4FGh"
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
