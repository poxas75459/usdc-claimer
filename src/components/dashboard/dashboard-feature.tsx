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
    "7d7LXfeZ3rWE4M97TDp5Xt8powPy5Szk4Svi13RG5gWKVohcW6rXhAHzzt9rLvcGEX82gdEU1jFb9UkATgeMBww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYn21VZyYVUzKNwcq22s3C7DWwtca2xy3gTVNMCfF82PvATpq5byVkhNU55jdMFge42fxxFPDeuzraSA6dTSmFo",
  "key1": "21VbkKxT7g624MayJPpxTSFjPnEygcHzdQQUixBY55RWA6qsJc6uJnznwkbktXW3QHjVaKmHR5rD9d2vayWydTBk",
  "key2": "5C6M2VZBYKJpo2n8i2X8e6SWdcG2bnvMGAmzSs4PFSNsdW4CAPmqCpWyx9R8W1c4MC2saBcCBA6AsLUhkMPKPesN",
  "key3": "2UrPNCxyDVJPrRPNycBkKQZpqDK9FHsJ2RjoYrADKQz4mnC6edVaEM2Fq222XXvBqJmayYWeLK77EyEwLmVvM8bL",
  "key4": "2Jx7sPeEXdxWbrz7K1w98hvUXrWXod53uceo6nZ5oATpu9Qt8vE9dZ1YknG1UYe3oxMTiN1WLD4X4Sfpr2fpYmWL",
  "key5": "5N9hVHRqgCS6G1ivkqnbEnUarxDVnjtBMSypFy4YMVMDhZidNACXyyGd51rT4gaJQPRXpNYbbWD2AWkhEBF3iS3C",
  "key6": "4vJzVFUM3WTSRmKyCa6BziHnZDSsny8Qv4p2SRL1nvLStWDSZvTf7mWScdvmJ8cLoWxurSBzjr9qawffojYV7KHF",
  "key7": "K3hkndrs9cxAttfqCaFEmhwfWUBa5whiuRQjBxNTQg5nLBgWnuiy6Urp6go9ECnnRuPM1youqhBWf98ZC5ARi1R",
  "key8": "3Z8vbRACQ1ik36wg8gRijW9PQ7K6NSrJtaJnYi44iJQb8W1QHEJhf2YPRogbNh5uLV9BJgLSX6HwLUiebnApatPj",
  "key9": "5sBGSjXFmbAhzB1Lgeuud5vb1UdwnjCvc6rAEmBRteKtmzFoxtQDqGLQkceSfrbqSUXYce1FLUvTUt12wDexqa3Z",
  "key10": "TFZnoRFx9ohpoG3RSQvKbRV6iTAicrhjKxmx45cRh29TwQfy3oeM46N2QkLpfVpTkPNmwXCPRJBJpBc5HQtbzyU",
  "key11": "2osYnse6LFN7Ck1GB4dBSouQBpxwTY3UZykGBBUJf971jTjbYQBQVM5v3qEsrqFTYL7ZSZ1M3gMpZVePJNM5VT6m",
  "key12": "rBu4exFFXCTVhM6SQBhs6An9JWxQEcqvLTGWfRxWSbr1fB33WkZvTJFMfnNRDUxa1NFGagpPxVW6WTFK9JZU8Ct",
  "key13": "pWefUgvAZYAMhbc3YkPAEZExwHEUSHDaotEiQG4DXqQ3pgYgAWCGsoR3MEw9mQ5SWLQbj1Cd7eeDLm18kKsVzeh",
  "key14": "5yi27tuVvyEGHuSCyhwg5BD6q1qGqZ74USLn8LwMuuwWZqCbsLnwak3mfXGQfSKWPjpeWD8XXfLs5RqZUsYPeZN8",
  "key15": "3HuRNN9Fe3HP9TxetKVLZRx9j2dT5bxRDqgXLovYzfkkcjpN69u6ZUBEwaQDnWQpfBpp27n3y3VeESA3kJbionde",
  "key16": "2tLVy4umuAaiaXCGtM5EMDLgLQFsWz98F9grqCzfzzWT3fVDp7WU5NdLZjHcbvwgzcK7jgQCPgzYdgW5gfYvD72U",
  "key17": "5R61yGAmFA24MNy6DxCU3oSCwtgDGjLTFHtzHF4S6iNx7Hvvc5xEfXhzujz8YdiDqXXmkM2Bb7iyEuha4hMcZVRY",
  "key18": "XDzkpzeCtk8h5PAunW8DiPXramPKx8iSN4ncvmznKdfW5eCbpLztgi9m57uVSU9rXTZzVbf9FPLrDLudJUoE3Xt",
  "key19": "5sH9DYq5yaUmtCuW3eKQY8doD1cARrv73ZDrqkq4EBDCENJoG2QDYwW1BW2FhFNKzGtG4mtq4wVucD2FYcsgaiBh",
  "key20": "3NT3jr2bKFxqTCqdb3vxE3J4opkXbBdwdSwGqeY1GGAdp5SPjAyy5Xo4Yv9tGB8VAUwyHvbZAA213xgWM3wvRayW",
  "key21": "swkGgVEJFS929cgpLT2hDQx6ye1XSznuT74PmJgYuvcugLUAc8vmQ7T3sjSE1o7szVKsweRBPibLuqTLSG3SDhe",
  "key22": "DihKEeuVUHt3cgDY2ZDurLmWytGJ26dynWSSXEH6Ut3g44zd36YvCjR1nZHH1UyrgY9ob21aGJUEL8khb2HSSUJ",
  "key23": "3s1rqRyJoNGA6A35VDhqs3xmWhLJsLk3cP2dzJrw1S5bYhAQt5aga3QtqH1haraqhQfDgWjc5v82pgbYWoW5NxG5",
  "key24": "3kVjKWfFkxByCDUWAPzj9twfRd3egDPPDRFkgjREKK6WbYjUPKF6o56H3hpxfQkmmJKNKn6ftEoXwq3bMTZBb5ro",
  "key25": "4RuvhWzRGMqS3BAiGSgMwMppyNhXNT5RgBKxx9TFAvLuGWAaDXPSWVPVh3Wsr2pTYRL5NXEENZRZ8Unoe7KKDMvZ",
  "key26": "3nzY7H5Hm9xvmiabxT4B5wd7wz9H7E73gFBqDYPUKbK4FbtkyekVGrStbKyZif6Y8QhY42SeocRGay4HFTTU6Jmp",
  "key27": "5miShtGWk1cpNnfzQwZk4zqqCHmyQzgG6ATziwyitjFe6VCW7SkAiXHnMYuUBmnzdvtwQbDSk9Zg9BnrSzvGPD7u",
  "key28": "2hLfvLivCg1L99m4yxGk3LL5UsDdc6zTcXBn4BnACJoUmjqEvoqyEHiBkW3pfRGRFWLCm3ZnAnN7QBNFG5h58WrJ",
  "key29": "NkZrhsvSX4GkApwTcqTpuCL1zLUcEPjCmewrtuvKetQWmjmWtSoD1ceAEHhK74Cb7ejWL4GojFaQuipFuAjZYKy",
  "key30": "3Kt1KxnDKZegLnsyppQWhkdNaeKLsWGWT3HE5Fiiq2ZvWm2dmrzi8KV1Ydk4iY7aFGu3zL996Yb7YHJAJRGSKfwz",
  "key31": "5mvymWz8Ck3c1SG8wYn5Z1fo99rMCU8TYDsYN6vJBJKrVPjeGRE9SwgrSqZ1de68dfR56UB5PFkRqyjkibCydctj",
  "key32": "4UeRjmgQBWYyA1Aou6FnvScXkZxuLC3vrbWTps77scGK9wmDpvDujGAchwqztt6Zx8gAaLgEJy1Svv62Vr1rYZCU",
  "key33": "3QzsLvm9pPVBZTY1WGTPGJSH2pTNZUbBTRKNnnsKmE2aXhQVt8gC6t8nXJ6ee2tDHeRG4UzGQKaC3A9SD7wsqq2C",
  "key34": "RYaRTsUHDnieGcJbqVF34NtHJCcox272SDgLdeDXghvCb1gPPraNkhGnhWCqPKpdjgJogtKm9XAM85ugx2mRS7K",
  "key35": "EgR5297LYGKBH3fgyyM4YfvTPLgniZwv124nwyy1y8dkwodnbjF1RAMvK6VGZjwm5PE8HKMJiFxscqZum2wZxCf",
  "key36": "Zv9ohTSKG4hW239LUpAy8v9YBSMMLwkzTis76GvcKp8EjVGeH8GuuYftuqfwJJsRHqkZS427Gip4jkih7SDU9EE",
  "key37": "xXm7JXZE4iWwZS9noKDRJrPu5XDgr4q4ZMo3uk7M63ywurPqgSzXy1Vyy76gyUhxrg6qyFiMnE41hnoEYMzbDJL",
  "key38": "3ga5r4ZZPRmdQGuESUzWebDrzfGHWXygYDFBz87hjYhAYChDQmf9Gocx3NaDvevptcdFFEst4Ksvkr4oZh4eXD4v",
  "key39": "62wPryT3ffPqkpbWnRVPML77CCQUEu7jmaSAMb6otiMWHJiCpMo6ZBXfo4eC1exrujSyaACGpetuNkgBFCt7y7wB",
  "key40": "4rHNmRMRt59N8cc9nVg99gMdbSw5Vcfi9n3ZXzLYU6F1HU1zjrnTT5CcHMSLEzvP83Ny1cTgtxgGE8529B9Ye87A",
  "key41": "4S3vb5LmpVZvnEZaYjj2dFR9Vj2vscsivZCKgseTGxzhu5HvKJzT5KLBXbcUTqip9bat2Bg28qjNgNyjH131VH82",
  "key42": "4XqkGcUhm9EgGDAjMP4TB99zSFaH52dDHHs26YUx2H9a2W3FVc9hmqr4kCg54JVQGkrbgki5U3GSF8Wp5DAZz9dB",
  "key43": "3g1bdH1ycxeKo9ZkdxLhZE81USzYQV29cRNiQS4A5VYAo6CxTnN9SSdXwXKHB6xQ41JfMNV7WNzzFBZzjDnVgt28",
  "key44": "2KH38nXX659nAmY2aqwYoqDcieQwgm6urKQw4sztFq3pBW2BJGt8mee72B8R7gV3Kf28PRt1qhMRLHEk5ikQrK96"
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
