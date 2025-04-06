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
    "2aWVb4maAXn6d9HSXV681gDjHX4YSQD6oKYmPNuxkyog7MbT64G2PF6kTe6uLkNzXyy2GoiDwycc1XcgrkCnzFqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tuSNCQ3BHazQcfdCPNXyRKVQZRrm37zbgesKTsVoUy1XcmxbjP31NUJZsUVMVgCWUcFb7ctfYZf3NAgSXn3uKXp",
  "key1": "5GkjSvF9vC9Z4SofLo2ny4bof2kqAnEZxumcyXQFk3GKe1bAS6p45CWyk4z2A6CRjcYsYyLoA6iAPL55cKg9ho6K",
  "key2": "67RoGbyC23ydH68XD2e3CJFJiNeRebatoSYL1A5QEEWjk36td2xRav5z38TrgCNGwTdt9Jt4Ax8jApYkpNzo4kgW",
  "key3": "2u9H8BEnrxKnyhnR4NV78KccLb7KDUzKSPQ2arQJJi6FyJuB9ohkWfqafTfCXTuZf9YDmFGj9HejRuRGVG7LbrCG",
  "key4": "vBD8onosd59qasQzPHQopnnK59qSnABtRtPsRmj5YF82tz7MPbDRZ5N7FPv7p1zcJrPBjKWZ5HoNE6mxP6i8apT",
  "key5": "2z6eLuuaNhCC1dj3k1oJg6XW631fKycRch9L6GQNnaEQdHyipDtcgBkHBki37uxBpvCa4VeEwwfRegCgc9S45xvA",
  "key6": "3n9qMjFAc9zeoQ2SAq6EWa5r2eiBhcFb8Z8UphK7D2yroTyUckiN7Yzb2cdMxM8DwQqDXjR1aty7UzY3KvSkqk8d",
  "key7": "BnvvMQU2tj9mutoawU1fhQmnGe3Aqxgfw7PVNS1bnsQoWxHvRWZ8DoBPxjZ4BRYZ9v5vEUM4k7xfnfdraycjvxB",
  "key8": "3hGwNFpJKDCmP9a6X6qUoDp5ckf7zYi1CWRMCGh66UmnHB4wuD5yeh8sSvq9mjTDnCGWXjwa5kzuNNjbdR1SMgi5",
  "key9": "2VQwoCwqU5AjELT7sttDdBAMq66qw4U6WsngP8Z7m56uh4cxT59K31MmrTamhCqXda4fMcFPvCcftdVAjxNY67SJ",
  "key10": "5vEeLEGco1whU6JmthKxrYBuVoo7aGB99QSLqbHWRrQtDXvpvSEEgaEfYpHWn1sZ2KSXDTkKytyoL5h7BuwWvWXv",
  "key11": "4EgNgxZCUhsJikCz1vjPPraZ4pp7iArr5zjJqqtGTj8UhB4uaDmAFwq4TsyJ9irpkp3dB94iUbYVDALv2zBgXUng",
  "key12": "2hmD2E8wSwpCFLSn8KmDX7sw5D3DC9151FJ1SW3KSoXFfMZcbSLdMmwLnU1GYVP66RC8xnR7MwkHMBYck4mXuCbX",
  "key13": "2JGQMa4qWf6SQX2CUbGeCGpDNtHJVbaCrS58WxdcdF2jkUsgwsVipwVtJg1Zbipm5Rqy8YgDexQA8WSMJju3QRAX",
  "key14": "EvevyG9GgvBAHvoyHYjRsXvAdBs4vng7HAuQ5VhgMEAtyhicCmNgDNNZY3jrK2LAio5e7FxksucSuy1A2ZFy4ZK",
  "key15": "9SUjQo9SWWjZTGrA3gbQFGNULd9pzkHPHJAi1fv3vHUJno2T7qvC7hNhWQS3Y2xcPGoBPACDvGP6Jf8nAVNCgYV",
  "key16": "NyeKpFyZ3etgyJXLAPJjADNUSND9SmzvGZhXSBxb36tvhbMjGoUgaqoRiuJuQ8AtCR7T2onKhQgB9jmStiRKCSF",
  "key17": "2DHHJh2vuu59hKZHnbuY6ne3zDu9yFtYvUc3h1age5znuVDxVpS4to3mRu5EFi34KLG1DkJWh1MxjBaLLkUwWbND",
  "key18": "xk32CvaSTLtWqj7DMZfnKsmn2y3PT3atxisA4hZnuBUt7ibDt8W29p6x1Jv7gVbtJkefpUctDZBkeyzTtikggTK",
  "key19": "4xi6cMrri2inWReC3juNo7RmztGDU84dp2cXM79o3fw4nwB7tnwiiBsHcWCPBVsfyVSGiVVGRYPaEpY6gDyBm6Eq",
  "key20": "3mchZQfotZq5mBHGxju4gTSqgHB9Fqxcg3zevrGfn4S3sY6qLeoJmyoZ1D6hdkNXYQbouY9iiUFGs9N78L2PBwYQ",
  "key21": "4zDtzb1EKGY75jR8XGtdEasxvBkcYi5oEcuHmXzdPo4Pn7ytGfWvofaWo9167JmDeztjiexsNit7BTAAkN6Q9st6",
  "key22": "5HGKVESX3iFfX1MYhpksPGpAZF4KhuGsG7aUA9kgcr3YbPmDNHCokZh4x2BHX4mhrJ5oUpjw88qfkYbtYdfFdHki",
  "key23": "5iJMgzZ78f4htekqnsTtZ7GVmPJu4uFaCwHpgyAar3UgPZsmNrEuxXYgMDyz9o6U3ToDR69UCESRhKhnAoWTYh6G",
  "key24": "3GyP267Kb5Y6z3DoKtHtaS1wqyfTBb6shtm4GuUj5sYkJj63X5qoRXxoQBd5xEqzDvD5J7dVa9tak5EMdjXciT7t",
  "key25": "56wMWrDYmWn3F9yausoqdS4aGJaCuLremReXMTondJh6uhZ2VaAA3iXDeE6T1xbxepXUaptUVE8YnGg9Hoi3YZqr",
  "key26": "57y7RWdmwgJBmNqaBNs3x3QNtaMA2hUFEzeWGru7F5a3cCeDQuNgbuG9Aqpt8xcm5U5RqenXjCXkiyxBAZbUegoS",
  "key27": "21k921a69jyNw5hKtT7m8DwM8tq3iW9FjXyvk4bpK4A1Mm7XLs4v8f2XXVKmd13RNYvzw2o4SEEmipJJgdwPaNrX",
  "key28": "4UgcdCiWokxLHYwYxcvNmZqiLkwS953meJtK1cgKCDuAKC83iE1g68Wu1Fkdjwe363Wm9pPRRjgLoJCud7zTeoEy"
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
