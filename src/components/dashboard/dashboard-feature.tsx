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
    "35Cib3bjseNa3zwpz8zCigtL2ZoR1zJJFLqYo5tp7WkswkKuGy99qv6t7ohriFXMX9acdyfdVz4kzJrnbyZdmExW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JZ5ufka9Hm5EPDg7c36CBVhFyi1UpmEXTXPHYbyUG3TTtesdf6tKh7TeCc4q12s5Zi7ckABuXFPwDDp8nfHMTJ2",
  "key1": "3rQtXC8f66wBxws7jikPVQFA6ZRGLY1EEZwgARop2L9oZ4KBHWBv4Bt5othKuh3AGSQdA3LcGnt29fhxhDFus46C",
  "key2": "2vjyfVMGymxZTQkP9yNLvS78xV7AqX4od3fMNZtxp95dZsUNW16XxgZGyWf15ZyH87CVmDeYWRbUA9N5SKo4nJXj",
  "key3": "4Pxz5UbpHf9epWxKefqMMwjrMn9RTuMYKe4VcdMdqX42oJdLYxiKS3euwPEafC2E3Yu5sKhfhh83XC29dgki5vJw",
  "key4": "zE532nbaHFTyyrb1Nx1FWTMpQoX4ZRr7t9asbHQJ3KeoAP2Psfu4UYrdxks6JEHktqKY1TNLfpnRpmHtBYUJww9",
  "key5": "52bvK2VNvR8kjt7DQg2AEpmgnqxYiv8esuiocCrzaSejYJjTxDSfQ6cMTj7jo4grHPXPjhZrcQLaKXt78mq66WGx",
  "key6": "3TYAhzVhh8a6xERWkrBWjeF2Ku6UEsVZUd8J8PvecqemnXPaW7FrwkkgdYkvcPzN9dtdV6GrWwETZDdykovnZe1j",
  "key7": "5zz7nt2d1bXzshCQjADogmC2QBR1MgR1mCTMkFJ9sLcfa9AmsFeRjG2N4oUD5teMLn3mKFr7CNtWecCifwftE2jP",
  "key8": "3kfCCTJ38YWXbyjqkv4HUi69h1GRjtWaRTvqNSpc7st1UTbPrBMN6nDwfkZRo1dXeJRUyRy3mwJyyD6TRRaNsLYx",
  "key9": "5A29Q2Eu2N292ezadXUhVDjTSGrkdDjaB5H3gdubputAmt9NFkEbqdgsJtLz3XQbgFcqJEureDnkYmiVbtFCR6HA",
  "key10": "46xVatR1sx5DeeauETrrZ9re65Gn3EwAgULXMDCNAVae7PM9L5MGFb75YusG6GQmVqwiWLDRvUkQoDkSVBeMRZFP",
  "key11": "4cEjCgH8ZJQBmaur3abPoQE9nKf77STrz1fxdqaZpEEcyUmdK53Yg8JG7VKbUUntaGxLy1yR3Q1SEHXgL3mDP42B",
  "key12": "2wGfbKtsg9N1gbcxrZUyAyQ5atEjTxKTkhb2jg4KfYuap8Hey1MptoDKnNSq23eXz9tTRiNZqqrqemvmqXdtBous",
  "key13": "2ksyWfYFP4vg7DQAzaPsKrKvGgeS2RCCMdJNzUJzU2KjDg4AWdUrLBFemaNt69nXiD5y1bxBdzT2EQ5JvNPQ7Wzn",
  "key14": "ogSqpNmHrU594CfLS2kXc1mkpe9zJKFT3ALmT4cvJCim5HfwpSfcj3FYr1BhWpfVgZY3Fe5BHjLG1eZzhcQuC2U",
  "key15": "65Cj3V2X55T43pFRcR49KxU9hfyK5AJsUydaF8eFa8ofBe6qego7R6t1KVF9HFD3C3QGoYN9qKBVSXrXC51m3pZu",
  "key16": "3khtLApMTcHpnLAunQGkj3M7bfyfXhoWZeehW64edAjKq8mHeEK5zvEuwtEg2RRdfNDnEgcXrD3h12YP7GkwBfck",
  "key17": "CLKkK7czMVtrXBc3HZ29PLabiWZEwhf7KfeYuCc6fvntryuGEVMpZDsoQoAtQY63RQseUg6tmnwUTdWg2AQyM6X",
  "key18": "5PhKf2LgqQjNJ19D6wZpwzuUf9UQuk8LVGAMetKmzeaderA72mfi59nPe3iSh8c61BmtXcdYiEh5rBUuyDzSPi5k",
  "key19": "5CednYd59aff2KDy7M1SQ12VuBv8WpvMrBbBy2jPCH3zZPjYcUgjm9KeCkp5bsV7LhkedNS8UjxQUsUru4QLtEQb",
  "key20": "3iMMN3VpMnk5QHbB425qNAiFhdy6f5qNYSEq5bdxeJ21ZwVzCYCrg71c3Ldq5aQPNkhj17VJSryt34QYcycLLC8k",
  "key21": "3Qq6fSxLQr7zAVuGVnAwtdhHdGSYpdPubr3QVpSp3Q83boGGeoxxjTiCUJ7n5aF7x9RCaLJdG2PcL9GaiuQ8nFTi",
  "key22": "5daug5gZJqymimbu67kZzEKHnvgt75omkttDkbPcjusfWdKZGAW9oVstWFXuYfA6ipUaxC5v1AhnfqEW99XutHCg",
  "key23": "3wtof2h88Sr2xV6itY8CBbw5CcWoQr5wxbXU2xiA38cDvcJKYG5448gMMxjjFbswS2byD7axCSATxjSkaXiGVDpN",
  "key24": "NCuX3EzDRPXyxEnZStS1HgBq1Trmhk65uLRrJj3CVnfnwB9N9Egz5KV47PX9QfNf6NYusU6ZvMtbMn3tEjNb71T",
  "key25": "4NL2iniHLZu1Lxfj2CEgKuuQZFsfD19YnRP47PJ829dkkKjP3eZkUs78V2WYYrtFF9uuQ6oAEs7GEGuezHa8zgAd",
  "key26": "2MioqeQP7KwD943h2HRpXM3DnWZx2P5SrLrmeWsk3LaFZmAt4ZYBSngbV3W8FbszcYPgCaLCUiG1ikZH7iH1t99v",
  "key27": "5uVPtMFVVhkVirQDgKHZFSAjP4Fs68KstdHmeVSAR767Pk2R18RBRDNKJYzoSKe39iPa1vuZ7VHwFqqt4nt4vRM9",
  "key28": "3TmrUGSEt5Tf5qJN5WxZMbUtxVEfMHq1xA2RhC1AFVdaAD4EWtH37mQ2k2ZU2zdGXVijvHJcipVsP89vz8QzGE6n",
  "key29": "4V4tsoBVF97BRw36LfxF5SiCmvArprUNB9AYpiST4JKrLCRFBibyD9vAMZAScjm9MDweC73oquJra1RXDn8fn1q1",
  "key30": "4QLsbSVjZqHzaxftMEjqSaKYKiD4LKBYxp3n6E3RdfroE7irNpaZFMZcvF9BSxzwoGTrquRwf6jdJX1cnWX1NFRd",
  "key31": "2VrGfEXLxnLTzsRGQVnKFjAdHsvZUQmmWEp9oVrKScpaGjMB8NVdYJs4aP8jkypXhK4Z6jEzHNpQovMmA4nB93KG",
  "key32": "E56o5nvKZwmtF382YjYmsQAat2J3aRvxGmsSwgH5sJYKF5UoaFvrMUpDR4cHDv1KnQ2cDVcJu3K2iqdkn71Uedv",
  "key33": "51WBFK1cSYaJQ9qg5pqBGpg5rkcDA8NUCT8vdWTKpNQDfrp6e5Y15EvaEUe5TRfxamGAzY4UhXXncCt7TiuaoYG5",
  "key34": "3Nbu3uYT2jrGZEk9KSYrUZ5syMzyS8baeuXYA53c4QAKFTyDexH9rCQ8AyEjsw91GGC392MD3GtFBh3GK1LUcQdr",
  "key35": "4aG5yMfaus4ugJBGdTBgg4L8QNTf1VecVxePZzKrAmb3pRcJm4pRSSaBfEp6EJVQuaCQ697B6sCXGYbPd2BvP7wi",
  "key36": "5feDP5b6ZJi7vNtn477qRDSLCFEczABK173XtCPCmoCBE1Mfa51gdg4bW1V2BHkJEdYWYDgnzW6r1vL3Xutxx7S9",
  "key37": "SkQKLKvkmMNSj7bWYEAMNqwktxE5Et5Q8pQJJPJ58wW4aW7jz78sq6W9QkqaEL1qzkJaCB2iKBn3sLhog6kbow1",
  "key38": "5ycyPUYFc75yTS7jhaiYNNhDCaEKj53xuQGzY1kwdu1PvtNAvPiVCfRUzQVkWvco5BZVVJaKoxgP1kN434uXWGZG",
  "key39": "3ysYWZudaa1KBhQaUTRk5zE1Ksu5igY5c9UbtenkUTVq6nMM88jYgDDDFaPn5DNT3pyBsiTykTBjffHGrHDFCjUd",
  "key40": "7mHpsqcYURayvZCrsXQkJRpgXzRaBYJz6E4Tz8icPcasfEApEYpCnXoYUfS2P5MjRgha9AMZETgAZivHfwybDhH",
  "key41": "3zcAQ9NsjW69FpccynWYNk5TewgMmFoCx12RSNxpauFWH5xgTdmmY6WFSXJkQrH36zqbgnNX2bmYrjbpp6nqSjVh",
  "key42": "3a1c5YPXDXJpMhDUoDnNsbALjinepKrzT3W9WWF2iwXQgMB3Wd4JNnaXfu9CwuA5egTge4axduMEFRRodC1vPaNK",
  "key43": "2P6f3qojdHopM9nZCp8ccnn4kj5KizJXpdHm7Q4o9i28x7dAof3AfQbZPXwe8qCPpHyNujsuDi5YDHpUgwmR8a2B"
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
