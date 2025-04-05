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
    "2kQh6xffJU6wBfsSydJLgXNgnGpfPqXvFTxhSA8iYEjR25xkkekWhd8KNrSp8ct4fYWf7aTLS2jTP2e6GvUabFpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K4FtmLCsVWt8AjsmMDGLLvQKamKFWvv2Kv6EGd1v8iaMVHP4wPD6kXCtqhxYU51bGJAicbniXvJXEGjLybcwe6G",
  "key1": "2ao8MG1sybaoVD6JMbcyp7VKdMQV35V19QsWPUjS2n41V9xcGhhHD4ECRCRRSkeANEjoiLFPV82FhpZXjTx4W64h",
  "key2": "5XD9PXhgad6QofSNqBNQHirmMqYK6g11Kc6421NsABMzs36rtDJ8bULU3fA8DeNNfNuWyNeLssojmDWVwXqMfjW2",
  "key3": "4rwSqJJbz5oWoYj7GDyxg8dphmds9M9QW31r5ZVf7Qu3M2cfnyoamkZRdsMPPNHBYG6QJtZY9GEfrNYRYB3uvuum",
  "key4": "5YSYo2MC26FZE5bCEUmNYJUcgkakqL3ZmiaaTnvRfFbf1xsBip2ZYRRJbweXrc4fMMywvZb2zgfC2ZHVk4Knzjwx",
  "key5": "3BKbUcEwu7Ew2aQhEwDQ1Sye5d3aHrj6EDsJPCcPonUwkTWMSvggGYuK4yh5D8uH8w1QM3FgkSmVhfKEA6Ds8pK4",
  "key6": "Zk6z2YUw2EW8uJnryo56xqCCScgsKTKmpaE7fiCUwJRvZe2GFwBPHnAR3oyrPBn1ak6Lfy78HzrMDB3zjuQiZRt",
  "key7": "5U5cGNFxuWQAADweLsVNZCsHgkC56hqvkCGBn2gB3Whow3y2gUysYj49t3gSXSrR8YRdSoQVMCyU7aQsi4QUGUph",
  "key8": "22PFkgCQi7tgs1ppwvGVrjZTaRZVufBarGgfgn2NKrDj9FQXCDtJHTu13MqBaR5H178voHLz6zfQEtXPGHh91onN",
  "key9": "8SDNMSrZkryYgWGwt4ZBR3Gq39K8wEWgmPDUCDH7QHDAVQpEvEr44Fv7UhpnoszUqhcpNTUjs9FXxNzehBqbii2",
  "key10": "5SB7wTT2UgEXxwvNJmknBpjFiLatUFJPwYcT5C3RYaohnVBDj9RzaFnxVT7SHCY95pFs5GAkqiKp6ThArSuivMiA",
  "key11": "56Gko51n3iSKgtCD5nSoQc7SDZpRGtHRPsLmezCfTH1yiWTvtMD5ZzTwKdVXNruEyeJHLTPdyBkJkjSvHYk4i81t",
  "key12": "4z2HTrRPWiNAP69xEbsXZKdKZeiUuvpskBsS6ZaWRX9kQpKveoC4EiZ3D5QPMMqunJLifNibRyjUngNiWu1U39EP",
  "key13": "54LSwjJ259QSHUykcqxri8EcjnJvEP3TyooVuEVA8YoiyErYc7AVKA7ksqyzzPuGeKP42ZLgW6SLtYrcFA4oY6sF",
  "key14": "4Q6NJSApCb9YzkqGeeRkmHfHJQyXaB1w3wM4mjw146qvAHLtVc4zFN6hyAwBzwP2PU36yviJY7GGxZPk75qv6moX",
  "key15": "24hLgzPEHsK4BCQ6e77PjRTaN4c9sLqpYJcQRRxLbB1bu1D4r6zVpRWx8ud5W2xDdHcVbMepRCTyxxiqEZE8SvXR",
  "key16": "4yrp5jzuhGMffKdq7muCzCk35bubNtjHM5KgXdpTCdi5xqBz6g5nEdDD9NnD1uazsorCDrujhFGDgiKQgQ8GedbZ",
  "key17": "3GkyPTGHxpYiGjwUANxREpgxYXooCJci8jF71o7QbPrRzcYEfA7cWtdLt2Nhbqmbm1PBNAsA4aXzLDgAdrhmjdi1",
  "key18": "isLZsuShZmtaGZTTssXN2YWfpwrtdzTFxzj3gJJLheuG3QazJ6tfCh55wYWZTokdsaSZet4yrg8v3rBaLCeTSf1",
  "key19": "411fAeKTX3HK6J5XiCLBFsyJa3EQj5X3U1rsaaagPKmTpo3ofNxf6mmDR6mBrcCbH4kbKc8Uk9k5sv2dwDAiUJ8e",
  "key20": "3vNjoApn6N5HPQZrjHUbhYjoi1DW14hT2ofobYqzsJzZgknDu1pFPPnm6YWc85ongrzYwrfxS3S7LuLe5id71jZT",
  "key21": "3k7XSKyoRNUtbayf9jn9jP6Mxp6wTF2YQG8LFRGgNaodhL5Z3E9MpAMHKT722dVCJfup4uM7uQroRqKSTkjRbuTS",
  "key22": "3p4dZLjVVXN7NQSvD9q4iQbPJ8Muq4uPiZK3rX9sr93BnMDj4j4AMAmpSmLNeTj5cNNqnaZxwLApUr4g2Msg4fGi",
  "key23": "2k1ngCNjKcsuX1tUgrCfXc3vA16xBpsBQmgoCHB8J7yFmY4gFT6Cz8wTpmF8cYN7ZkQNP5U9PJFSsT9odjjUivLh",
  "key24": "4BVQSizUWb5uWzmErsrDw3bvY33e1Di7MoxEo73yueeJ3ZcLZYq8WX8jvvh7wkJ4qGCQ7qou6X3TDyvSv4AQotqW",
  "key25": "5A9NHep6SyBYG18R6wWimPnZFa7KSHm1pe1VQBwbM7ZMfr9vCvFAkZ1GEJshpkhtniRsLyo97RZjRDY5xp1GYLLZ",
  "key26": "3p1H8aw8X57NdUdUW5EpyWeCHWVSF74JTEkvpgBNKPxm7b8XMmupUJ7xRU4EFusqvmReVwsPonj2Fd6ZQSE2z9HZ",
  "key27": "5SdtnF8y2gTvfohHF3xX1MuF5b1WERL9Dnqc1zntXueHhHRiuBenh3ykiyLV3ABvDnkfwd8mTxLoywp9qcSVm8b9",
  "key28": "4Dqw6ENiK2tP1ku3HPDvouLQJCEHou8srTSwKwU6FEVMqdbgnsWqGXLazRFxCr5GRFtHJuQ5VH227wSRvM8ZEFDm",
  "key29": "42NgHG1PfDScib1kZvyxT5uq8ccAnAEfNqAsxJ8cYa9L8PAptZuSfX41PcHoDxL4znx7bJmdDCap2dPzHVmVa8ZM",
  "key30": "2ferLcVNa9VgkVMpg28gkmK2vRUSrkH3zPr7F7pzeQdbZyZfm2GunhZP487ZbJRka7AdvPrnJmVwVJuYAKTeEZLo",
  "key31": "2mYHhFmgqM1gdtkpaD5joQqwhk8zsCURZfCyq3m72rBy8dwTEhsMMDBR1jLZoWyJCHW7PanY4ZNs9jex7bm4dHmr",
  "key32": "2LfYBsEqRqkfgLEFKubATuqatmNdvRy8nDbA4r76B77YRbyuqjmii7VeBh3cRUejJUsdPqKtPfb3mThrug6rfFRL",
  "key33": "2CHhT3jbwvCjbtwo71TjnkZjDAmpEz6bc8x2sfXgRcrEW1KRFoy12k7YC9r6v9jHsSD8agpmX1aLgkxSegWdbNkc",
  "key34": "2mUcXe9BhQGsDxWeryF3rHGcpZN4RS8yFmvUbrsQrEycxwU3GGty5w4kAHKr6kTV4oVY9NpqwK6PCB43Gh6iTT28",
  "key35": "4YJ25tFm7s8df948GetC3fsVk55eHRpGRqrbAfturcKDJUkntteyzzHh52pYMYP6FJyqmcePfLQgoQpP4Gb9QLAn",
  "key36": "2RnXcxJ5XsrxDJDGMtp42iiAwNuuS1UYTuvepnDgRnE5RxJUJithTifS1zZok4wsJCroLkYoXm7b2yVaQ4CbCW8P",
  "key37": "4WNg3vebqfrKriorbW9tafz9m6SP7jK7Lu2bVfZA92enCq7J9WyXSKDxzfL3JvKakTqk8bhYjFUpAM4zo5dFydfX",
  "key38": "5Dq9UfPUaEfSTfu61CxCp8mBDqJ3E6zg8nVbKLeoS9hMwYUQYcvkb4LiAQoBbnodBJhMQ3V3xQNgGEL83ad6VG2x",
  "key39": "4G5bCd57ENJnVq5faWjm5fg4y7c4Azm8hJZy3EWtDWUVwPajT5j9MgALi7biVxM3XCF5jBUX4K9uEguN1PvpNTHx",
  "key40": "4BzeztD9Wdxj9bkV93Dq6t6tYErMVZgHPdqrG8Tt17tgnJ6nZaueXy5jK7EBkVApQMDYoTLCexxwU5LYr8CPD2Dn",
  "key41": "3hYHb7WZpt8EESa5yLeLqX8GioERo8XFNvJNDRmC9m2i885FRF6h7uZFpMgbWkDW4LDvo2hD2q4GqJt7Gar6RdN6",
  "key42": "5z9yPerfEeyuNTVsPgUVJDcBdnNzm7QuxXkybU6QohZY3Fjs2bU9WKoUyP9QfN3MK45MgCNhorXj8hLesyim8PPd",
  "key43": "TZQdZPBnQoguBCEy1n29C89M9VFAHULzTxswyWUix8bmKtkjRqTkMDHgQQ4NcZbmS1DtEUAkmotmXbkpRfogSjd",
  "key44": "2hettberx4kZv2eSfwmNVFwQzZr8gh5bP5nHNY3KShG1BShbtrjH8492mV5H11Arpn4LWiMeHEtHS2ZeiyYSgLDZ"
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
