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
    "2Z3swH2u9G6VZR6NS8M6T3UrY3NQ2zDoQ7HumF5uSVAF95uHmWZsSDtgebbGjCh9RRCWMAHfgyf2zzs2VynixRpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYyur3cN3cpqny1BKZTZjC89xMvuhs4PbAjbC4SiD6CCCDLjbWvELt2fVKJJT6iuY6Xg9TTAbM7h5DXd5PDTFpr",
  "key1": "3QE42FJWnHks3nKGYP52dc2e2k2Lp1io3tDhTCQZ1bpmq5Dhinpxd4D2oH2EemEg9SrmgHx9xX7YcvYwVwuvdNhA",
  "key2": "2BmR5HQHQni7RVzrtRoRn7cVv5U8sR2vmTyW4K8TVUNidkrrQyEG96EiQ6c8SdsAbR7kei7LSWdoE8q25sSMoL3D",
  "key3": "36N6tpBeh7Lmz42ZF1hcGnu9aE4NzUB5ARSs7upA1HPzHRsaVe4Nz7NHfMvmwyvDiS7dPVeZvVmcXzwpyV5rCLCS",
  "key4": "3HPVrHuuCYQ56zfKJhNePKD2MJacGJKdtJr2LXaepXVPkdmWgZVNhyeksqBaSEZWbD7co4Ufo8eNjwh21eSZXCbz",
  "key5": "2TDJno9zZQqZY29d3pvqBwUy9VFDrdM5AVs4gNHgWdUps6miMFrtFnLTdFuKZDLvQb7qdhZzFfUfbKnri3FdrPo6",
  "key6": "jkPN6ejyofXLCG8bUszWbHKPhq5LHmvGwxqgzS58t3MyoLLNanmPAb8hshV5H7JMrEvFgD3Fexy4uyR28QTj4c4",
  "key7": "qsv5CcvA2DbmpfdbCMKrPwKL8tfB9GwrUvzjaB31iWjttufiVjmJCyD88DiwYd9rkKJmCNXWiwiGZmzcCmj5bqJ",
  "key8": "2CyEUEvJroE6oF44qrJdKjtWGixPqE6zSbV8R8M3RtysrDRq1yywoT9C1TtwsAypF7z9PnznH8h8Svz1JidrNjqu",
  "key9": "YD2xCsS2JVDK9TKdK4yuHq7xppF9YJekZUAR4mTZEsqbrbjyHHGwxRAKVWBY2fCrmVNC7ZtrhS6c2wDy3tsEB8T",
  "key10": "5fykmBqZSFqw4bmTGWe25Dwrr5EXdk3cYq5imNoYdFnqxZ9zsrMc5w4tBDeuWL5P5qvihQdmtRVQCdSUWWUAShZk",
  "key11": "4vu3C1NLnvou2xp9bFbu5AfXKz14EPeBkFCwRmg47AbcN4NVyG79kVMeCkmAes9MBnfy2HA8NxsfHm2wFbh23e4b",
  "key12": "317GFoCuZD5EUH1PD6wi8NSKBiiwPkU9ZoaoDMRm6tQ6RaxwntiZ3oe8FdC2LXMuAbb1K2FoN9c66rfMZXU18sYH",
  "key13": "5od1yHHdDdDCCmZ1cxGg4nmgw5YK8Y4eDi19ocUjTbYXUvmmf5JUhTLbcswURVgb7bqrByXJQtSw9nZVTDwNscei",
  "key14": "3tuLtFyQANxv56BFwUWx41ULcomDmznphWhPJfCtWnwvkS2qAidRCjH7MjSVnJmxwYHzdKBd5txANDD3NGZXg7V9",
  "key15": "5yAf77rWjgY4tdRVQJuoUPz9pck3GkQMC14W33bWmvBRqxCyUsT6GWThG5baGQGjoQKMFmdM116Sf9f2M1UDnznJ",
  "key16": "3gBy26ZPZ8j2M6SG42edWTDC2cEUaX4qB9wKMFMd7VmD3aAbA2TXnNonTHCatjaF6fgasU4xJgPEoD8dKoaTC4X2",
  "key17": "5whAyEXXwtDQ6e1EkNX7zk8JLZoagzxxJEchT1DGVHVwxMv7EqWiEJ37UDmW2Vo3iqKa88mtjS5HG2QJnkVHPZ7m",
  "key18": "2Df1WxMMS6NKC5Ef51Cb5xkESu9H62UnRcv1jLRitvM1YrgMxFVHDDkvuzL1Zs6NGDUZVJrRFa6UyRZFUBDqdej3",
  "key19": "2JYZkcPSQTA3rGAubY4eVpvHg8EsLg4Y16QsPYsxWNKj6PRfTaoz3y3KU34RQeMgQCkNj5Q12Qk2UWDrXBRV1tes",
  "key20": "3KA8HFvVsgweEHjNhGMxGAVyQpU8AoaKpivphmNSLwiC8qiDaoZGawNou31dzUgYWjJ3krKM9m8yANqJrUw34NGF",
  "key21": "64YKy95dDJ14N8CRWMin5FezJyFpVu6ZYsQv9J28TF3LpNL3MfxX8RXDfzMFwzua6zVFLhw6wEfdmaJuWihgE8eP",
  "key22": "3SKJsPxPojaxKCAGG8n2tQdvVrE1ek6SFeQbC2APtWyVLmE66sZuXQEWVFBcsDfonHh8qZvZyN3fbhgzr2N21EJZ",
  "key23": "3rVb2Cb77TYwMbz28ZE4kFfZCi3CQGBi9vEt4qRr1k5bB2jAdNsJfMkoQ48QxCbiDaAWQ5E6cDBGN6k3UEBPBGw1",
  "key24": "625BM1j84ikAnDszoBY9pyz2rj5p2bcXLN1vYwBS4zP3nGVv4SGhxwmh5g3advhueLy39KDtq9q3CibC5NziR2yA",
  "key25": "4gtshr2jWNNthEbuYewfcB1UKcRrhN3oJmCxwk3EKyNhiW1v339SALSDv7Vb8o6ScA3RzgcEeZwv5bG9BLwGUZkv",
  "key26": "3tWoxiV8WDvM4uMXKdrRRnym2tYoj1hENuh5uwwX6iEFyo9KBZyznYHCxeY1pZRfmudpyhiqkcxivJm1kJfWzxFm",
  "key27": "54rBQgvRejszFZwf4HfgnWC9Nbag2PMntmYFZCm7NLdPoAmPsFoJGoZUr3AsCDu6gmnwMoHavK6g6V4HZxJDma6a",
  "key28": "2fpaU43ZHtTcWNxjfCdUumCBNWxdWyw54VRtg1SmURkPKw9v8Fk1XDepkmiNyFNj6vBS4XxE3wUyvEHTTzuyHFvH",
  "key29": "26V7X2eXzwPaXZvfiW42dEcy94JQGvMC2rEsCNtAqUrhGuQFR9CXFrzWUQdGBTT6DEhS4d5PxkyFgEc72fztSMRJ",
  "key30": "5joF4feS2xTeKSyJZpLexmqkccyYvwgonHZ7E86CGaEnd3YYjro7pqUnWbFkzXgKMiNW94G9bSe9v9ez4d2Lgekt",
  "key31": "3YxPN5BkHsv7dqPJx1sCvdW6pxV3hWfBcgAqJ3yZ6crBuWrS6HDsz4mUK8kWNBZYiLp9vjXXAgESuk79iLZ1U3Xg",
  "key32": "5DCVUraSbJX7F2csUVXdGp3ajbN8LoZPMKhFyT4GN6JcdWh7Dw8Dmfv68eNNXZAiKMqQ3XyNtjHA3fY4SeAZhTgb",
  "key33": "4JCEnA5SLWV1a623pQ8yTcfmjBPXwpnyXTLYrF4kArD5JyvPFAuTx64KGGpGX1YVYb7KsUeWFvtTNvJno9fThETZ",
  "key34": "uRmomVpGW9sERDaKwfyQKRiQeJgaMhdxQ1faFs2KQ2DMjGAPe1eb9ckme9TAmvVPvb3DW2DLN2uVxgpwTagnTP4",
  "key35": "BSe91iQFTvGur1dwa81suKzGABfNEsE8fE6jfqWBR3RAatmZwDDJkxeBCQ7TQfkGoksjGQozUT1nxcSJDUNX8PV",
  "key36": "TuKayojAt5RSVDKR9nR6vgojrAVbGnRPrVGjbLESpDH3Egk36BxPMwzugtsrkAQnakveimYCbHgd8eBLEARzf7U",
  "key37": "4ossFqVRzMJziChipJps3XNaaKehZDDGfLJnnD4Txfxnv1ZWAVq1CPi41VrzjmPCVGAuSNy9VrcXb1NViVW1siUT",
  "key38": "LxcT3HsSdE8hmYFc1uYL8z776M5ZTxBX8847FzTkgtsEyjFNRHgDBqmZGa3gSYCXdWDnB9ie4hQCASKVM8ZCq2a",
  "key39": "6139xwkzENvQzReNjas9hT5zjgEmshVC76QnWub2VYbGE2UqbSoEiYoGo5VUpPG7Q9nUUBsE2KqaCGDkmTwtkgJm",
  "key40": "5DNZJqwW4HUwmG3AR9Kuyx4MEE3DwWrtmveC4ebwfBtMt3v6KuU3dQ6ujNu9TMAeXpS1GKsqENFuTrzCdxnN7Sbn",
  "key41": "2uPVD2qj72FvihHhGz3EdvzKBS8oy4eHSicj7eBYJk3A1by9xokPSCasB6YPNoHJqqtcXuu7tamd4EBN3GASZwfq",
  "key42": "4FFt24JvT2WbdbALnqkN7uQ48hoLbWE5Mo8izj7MCd46uFNo3Ke5Vhpdf4TNirh2p1W5YFk3UFGvRKGgTcwAzyDK",
  "key43": "32jPmFHMBb7uCnLCVqrHGVG5XcSuQjPYGAEaEPfTt6qdTBxkueE4z8vTPZzBKhxhujk8rFcRFw9bbPGW4tTXp2XQ",
  "key44": "DCsBa39fxgrwqxgk8M8rs9dWzP9g5HESFbiVguZngVeMTUSoAcHVqUMDqf2BtfopaTb8iRCxp5QcdMKuhz1MCP8"
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
