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
    "3fPfH9y735AM5mC4Qt3RTySRMu9gYcm4NkPuwETttSCoFNfNezSitmdKppLikP96DwBSG7qDN1Qenomy4Vrr7Fjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jo1AAH94JwQAW1wmn2KPEhscAicQmEacHnKLxnyHeDCGAeRWopAwrB1KtMzonANUuXDJQ8h6vniy6PCo2MzJ83y",
  "key1": "9wCJ6PZivCxvLiyrCp5MmHzFM64YfTbRHKnhfcfNAu8vct6Vid9CyDu2pUjgPd5AeyYcZVJBmt6MwTqKFLddbQT",
  "key2": "sxs8Uu9iPPfdCF24NJt8SHSdjjM57LGmdmK3Rk4Vf3FKzFAd92k9ah8JegsxPErMThfqt68J8CeP9tyNPHk171V",
  "key3": "4AYXG73gLKgLXb89ve3fK4eMSVAcYgWH8BB7XTJ15NruKP5v2io6EZFEppJZy7fGDHcokUrL1RHtm4jC4vbmvEtG",
  "key4": "hFBFAUsrgtcTP8cRyi9PASVCYzDRB98zvyKX9L6c91CRJWn3SHwmhWCNwA4GWEY9o92x5NAuBvTP76fnGQ55UN3",
  "key5": "4geL3cVwjJ1j87b1Nz4g9XGkyPhUyGEPB6NMEZYJJ7fRWNEVc9Wf4E3heRThtCAPAYArgtvQMsbKdHoVcx42s4oX",
  "key6": "3LftdJ2ewWn2GXqedJBLqQ6x7aJsFwrBLHWaeEhfsG3Eit8LKqDR7jR149B6XgUPJLtS1KXTA2YBLD5JZSWT8wRg",
  "key7": "UQbSdPgkW66PJ3BVgyRYBfirqYeCH6aHi3GMsMRsBmJTDQt4kZvD54B2V3nMDdXy3qkgVNJku2mjVQgvMTSzdhR",
  "key8": "3NSdKPWVqKQcqN7SLAk4F83KPzzWV3V2zgpPfMif7Bms5MxhwaNU1BnCTSLh8F6wfkt7WZ3uKGihCNuHRiSAUM6b",
  "key9": "3rMCRGbczAhp26BQ8EZGDv374SmVw27Mh4bLnJpY2ptG9G73SaNESkiZVMjNoXyKi8AHSDdpZu9s7NDky3r9uEcN",
  "key10": "3ceJFSYAY65sY8mVQH5w7SAZg2tc2X2FRjMkQTkUUUAdHeMicaQ3AuUr8s1wHq2udvj1uctWd9D386K8kuCdQGcj",
  "key11": "3Qkc8mPt7Q8n9HBCcVFd7Y2NAHp2zSyjfzmvmNYfWFtBCHnUqQNabNy4tYoG4qiCJ2AXLeQawfs47DiymzBzRALe",
  "key12": "37SoCDjtBr6TbtGXS3oJyJhTDfV9dw3ysJWynWGYJxsbyffbEwTEKw55xifJq9Sykz6EWvBnrPZyoanGq9JaQ3dv",
  "key13": "5DvFUdZAr4wGwmfwcEr8kzWNtXA2NoJhhZxnFvSEXtnrW2wG8RH2XYSSAFSb6Z2ENFWHkGLUrozJyNSZE4XJAk8B",
  "key14": "4uvYu83p8Vb5TMbMtdj7oevvugbfSGj77SHp672h7JhvJiiEAubFDwzRHn7yHmdedbSJLGbQMUErLDYiChxFSmip",
  "key15": "CtNeTeKY5CT5TrhJA5CDgRFJVk3j1xdJfy7PV8pkKQi8Wz8uoVPAa6W44A9YaidcTWWcyQfUGT1G84omefP9s5L",
  "key16": "65mYv1idNxgUaLT7dreh5L7Ke5YMzgQraWTfZRGSLDaypAUi1JGHvLhDozvYW7EXVDxTeiEpm32Quk5MnxuAomJb",
  "key17": "2VUeLiBhPbqWj5NAv4Xx1JaE2NsJkqu3PdB8YDyQ4FBy4KtUs4YjQ3E72mcfiPnbfgwKFpaUAhur8Ti3CAXw3255",
  "key18": "4cYemxYn2RzdkQAVqRyK77Ub2DGy3XdmMvuUdVVGEPi8n8Lx1ULcbEhUgWcC4PBtTTTr8oDk3hTqzPh9WTFW5Ztt",
  "key19": "4asW5Kthhzh9wBpuHJxx3xz5bo5mQaGBeqaig21CiaD5dQkZF9dV1u7ts92QBi1R989FrCddt76J8NaSYML2tkzG",
  "key20": "2gsgbhJxoTsyvhbyZPNreVEnUh1Cow8iDuoJSyzozZFeD3WP5iV5oJVRsYq5eKfULz35EaNVmx5tM1Kih9QyEo7e",
  "key21": "56gNjynDyGmVPoNY5HhQVE3oS4rYEQaVF71cyWLU4NEENFHR9LFV1mpbGbZ28RQgqzHiuzzMW2p1SsJamtEM3G9g",
  "key22": "5ipUM2hWNPUhDxuGiyTxo2jfC71uri46iyZLxujCVJhuXt5eiazXkTCp52NUBfzMDCtLyxy32RMjzDCudJBU93Eb",
  "key23": "4W9cqxzoGYb4SqHA5qrXjaVhSMVvm37E9ajDgeTLooodeAbixegjpG53gnxbkuxhQomZVwpwtoa63CUDgLNmvXbA",
  "key24": "2WsULfs58APx9U5ZQSJ1TQTwXFhDHgt9aRKrdTuBYNogKZsASuahVRrDcYdFVvRnjRXykvG68pudjCJgiNaaHHbm",
  "key25": "4tVVSYEy7aqeFwsq9Vao11CCxHhZWDCXe6LGSF9dcphuinNHwkPiKA8EDs87wRQBBmFhrbdaYAw5gqgd7YwnLa5u",
  "key26": "3xiAyBAqSDGKsmtfrDfRmuQt62cExotZUKVpKNgDBg6U4zP1eGK9HeXjG96PCaCfCywfHdo4cTNCD2g7YSu5JdMa",
  "key27": "26XBFbED5xXJAFF7ZpLc2ustgiFjhncsC46cCg2Hnnxb5nT2vC9RhpQM2xL9MxeRA9YmbZnWVwvF79FtxuTwDBgh",
  "key28": "2UJu1sZJJ3sKa9J5a81re2LEzSRL9PvLSAvufXr4xDbkskzTJWzPCUnpFVCRVSfhPtaH5Dj2c1nQd375idEiArp",
  "key29": "4k7ddKauKn8KzFaroAFmrdNabuNQkh2Qq11pmFrnhe1VXqAoxDJ6mZseiKvUA32hFdWaCGZZdbbC8QS71efQ6a7p",
  "key30": "5DsVEpYq1bWVshrZvAPZnDtLiQUNufpAMd8ow3XBes2iih5tdbJF6FbdgbVuabhUWN1eC1yXnLWxuDPkkFGzuEwY",
  "key31": "5spbyeS4adTaep9RyXVkvraKT7XWT8VGteCNpUXRxdRdLgta6eGK2wGgRUfgigtQzzntR4ZfjNWh1f13tsvWPaEu",
  "key32": "2zX3YweogqKXLDiEZ5Fj5CwL3FJEkrvur3tLxxZLYU12gTQmYfvMZroCab8Dmn2kj28hVJ1zEZ6PGXcp5cMfavQM",
  "key33": "XGdKP3EkSKJ7F2A98XFK95rfrYpeEDg3Fbu7eZRVK7Y2vp7tYWtQL77cwYCji9uSRWu1Zh2etj66Ui8aHNyz7N2",
  "key34": "5VawL1WYB2noeGt6bvvhgU4nFmipR9HJ2vvUH7ktbmT4nKeGpXy4Bd7vqnRiFg8ZXfUGb9HBDZD4owoRwR4Fm693",
  "key35": "2w861BTyLEF8eBu3ob118CH2zDtpkpiXXgn6kK5vF45iNLUzoZpimvjG1uVGMqCgouFwQoL8vR9BEjrdk13ghnrA",
  "key36": "4GPtjmVtwvS35pUZSUXZUCPBUjrNXhAcgiMaYkJuaS4cS2SokrfCnqNBVzuX2qsjQ1AtSvj5nhf4vTdYXqprvVCa"
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
