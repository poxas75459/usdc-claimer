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
    "5QgLeKYbBrXZaB3tR7N1uLqq3hdumY7pp5nq4D2JTAbptYravkPVocXPP4c92zCJudxy28XGPAfRsuEK8MfnEchn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UPHfmzHyvMvahaZr8PYDjknc5NdL5nTC2R6Y8EtfaP1UGjFHGhhqpB8cyunA82TJFfSySeQuHzmENByVccHBwLT",
  "key1": "616BQLetf4QFeQt3NuTAhyazZruk6Ayz4UYATPybibdNUrhDSg9mLrT3P4Ebq234pb3ASdt3JkrVKPScPk9ztgxT",
  "key2": "4UkLQr7bD6DWnKn8iyKVB6HywFZsUv2H7YtvZBPhbbPqyVn9EmpoSYNiJaLdkRnHJYPjYmhZrrEkcKonWEFu5nYy",
  "key3": "3TKU8rLbudoG6CPHEA4kGiC5K55jULrtBQJf98p53TBnguaEWxGQuM2T3YF9WB6VpxXFA6tkDsWscXM5n3cHcozh",
  "key4": "WTS2Ue9tmJ4x9D7ZneM9astDYX2femC3T5eyZdftsgWUjeJPeFcfQE1URQqPB1meoZTHbM3HUkdhibuR7cBePV1",
  "key5": "3L4PGkziSrK6tAmraA9t76v292CDYLtY8XkGuEdY4U37rJMybq9C4GPHrMLXjUZuThWa52weE9xSqSDB9B9xVbfr",
  "key6": "3RCD6p1UYLPhuHNMaVGEPsgHS97uAJDuDABLs3KehkjajZFduMme9YeVmPQv9oaejF9r8qFWuDiVTJ6yw8HukAg9",
  "key7": "wRXbEtBuwxUDKX9e8vgzkAcLAY8sAVPN23yEZDckKvmwvakoMY7GNsexyekDh5uW4mXoFw8n17urLyHCQqykLLh",
  "key8": "1mBD6dds92U7LAay6tJ8bKcae4ByzbbYjmJFxJmd7iK8LzT2pPLQnFZEnBinoLC2zpxm6PVWd6axkif2UKczG11",
  "key9": "22cuW8p5B2yXpDe7V7CPNmEofCp63NqnS23zdJaFeWfBwaMXURwJReqZAAfjLGPPqP25twyr1nM8ryDkV2NSbVNJ",
  "key10": "mpi8wAgxr4W51KKaHv4yh3j8kcZj39rk4TVCQ3Q6sr675TK27NN9wNngfZ7m2W3yEo6HNm3jxjJfc8BuGAvuiUq",
  "key11": "5vXMR86NgvyMqSWzPEPXTTMwffsRGzxKpX6fDW7FDQKKtxzfz19j5QH44Xgr4HbZuq6x5xzeRvEyxDFkymTRhvt5",
  "key12": "3PqdUTo3oUJ895izfAeQbgmNk6EYbjTAvzZfxzAisTHmWGmKxgoLMiGmLLVxZvoZDFZviGQjQmLgRujboAaDHRNX",
  "key13": "5y29w2VwwBjNYzZYuRTyFTNbgJQBovQx8D2N6eN4Ve4dhVQWasKsv2wLobraynueb4eNN895kKaWvLYAAu1Ne6Yh",
  "key14": "5F4wWTtzccGcmehF4JqvWo1JNygcQTZdmxmm1USnMJaGfTK4kZ17tWdXzGHX4su4W8aHE6vNtga7BgwKWfWhx2s",
  "key15": "3eXH9H6riPSG2TKg33t8uzxbbgLPNic7PcDQesd9iPrQMFg6997bRKsmCFZpHvAAwfQ7fQMKiNDVeT8db4KFsGQi",
  "key16": "3UcWG5nPKPmYPYKZ3RfuLVy6oxyWG7Lmbs5D8YXidyvZWPXRkQdbpa6AKKPnGMhSQZ2HKnEhq7HFBqd2kroSRFXr",
  "key17": "5euCk56H7xPn7cqnEQUYFZr6Ur4T3gZMidjLm8AYsZtkyQ8fvkp9wpXLBBpP94PDRXZZ5kFCu6VbJTYRksmcpd3U",
  "key18": "4reTXGsYzEouLZ7rT5VfujCJ8ZJ2VxanqYWyoaH6SL7EpPDZirE46M1MTjdCDAkZC5Rbhct2qWnypUyUs8D64cF4",
  "key19": "3FxGwpjBD9YgYVTBoqRHz12mErYyGWRayZwSVdhaTJmYjQyQfpEcGd9MFTh9QXTrG9BUF8YwvpgMrqewbeGgL9HX",
  "key20": "7VXMZq8hathFh8q5JAPiHwzAHQVgoAwfMrnuTbzM8hwLuRSiY2qfE9yg1LWc1Wqi4Nfm4S9xeoejCfxU7hBsnnZ",
  "key21": "cX5zswHTxJkuZq1P2sp62mAChLdadBDCpt1PhoTm9NJGNzdC78YzXCxmw39Z2QbUvNj1imQ7rtnr2cJWRz73K1T",
  "key22": "2dbwdd1Dd6FgdJioCUF6S7Dyjz5HWuq4o9WCqMExR6h1QWDN2JEGucGMiQfiE9SF6A5k2QoiLXwpgKuzRb886CQY",
  "key23": "5UrdMCkAPaJUq8i1FSZrJm6FqGUeuXm9qvmEa4jLmp1x2rFmKuAn5Vh5V8ywoQtRH89CTL3QRvnvgnUYgwcrvwxU",
  "key24": "2EBUt64tBNcJeWoyQA7wXL46AZaz95jk5Do44bhuGsSEg9yBPtJxqhVjRUAY7Yn8mSeTfpVfsoe1zt5XcAUng8AG",
  "key25": "3MiT7AW7aHwKy6fRfPX55VfdkWaEgzPBn4X29SNy3HhtL1TMRjAf7fw2Q8AtWggdABaMYzvGTksKtkMCqu5fNomC",
  "key26": "VPcY7PkxWjKMfNiPYgnTVWPm6CNoyLLsEZiR3AU1ZcBhRS2FFnYvYX4jCr98AFLq1fS89pmF8nwQDjjMrpigUMr",
  "key27": "4dBHjBdZBf9FZTwFzvtVkuHpj1VyWJ5M8z4yDXBgM2SwmcsUeXVgUoZtmzdqVpEcHYnRZcyY2SjFmwFWTUHLQqR2",
  "key28": "5fxVNehDhoMLDJFZ9YQk7ph8uosHuSGqmmU8q47VmySuxh58dUzr4BofsZkXQheRoaZJW8Hs5me4YDmfnxoF7U89",
  "key29": "2DZ5xH7cDZFH6CdRBVMYfiBahnVi72ZoFbbV6dcDqqzk1GqbWGvfE8dm512xuDhWAcJbMdk9EPWKM9cbQF1jsbzK",
  "key30": "87Rm8XJegQ4wAryRunLJWdskZhkiL5FHok2QDXtczo1PqX14nhBiEVvkB6v35mqVViYqE2VcDFPQbQvody1czoJ",
  "key31": "3R1t4cQAJT8pJnp5cxqU2Sx1wPjT4LVp2fsEwXhpMNes3H55iGj9oyPFndnSCWwj86oyWVGTFK3V84pWESPYRAUV",
  "key32": "568k3Qt76UYbt2wWroHe4YoKRoGB5EUUxuhH4HToo2TXLrCeRQjoo8i5hC2kZm8JTY8ssjD85fY1SgDBWH2LA9Ra",
  "key33": "677eor7aJzT1UCtfN5wo2eKWH2UPEsmwtoaLS61fgYeHYrarhj5bYxJKiTAZPbfvjJU4rJiYGE2L8HvsNbL4aXMZ",
  "key34": "4vsYGf6w1eWJjVXk1qEsioCTyJ7ZzSBjoZptNoBYWNCX6woCdcsW8jKkFam2YKdXuw49xBS5u8oU9gm1oBUypNPn",
  "key35": "3K3EjUKtiXa63ZYecY9BAuQBc1tLy6jqThMXiBiXjpgnh5wz7PkavBf5nt9U4FMbXpjn47b3ZPCfZnWcPjAGCXCH",
  "key36": "2pkntbVgAEDnjGrt9Dnc9EWZ6E2gta9xwmuw4pHPoZXx1uLQzTDVwLL7b38NPSSpFArjWbEYX8sTRKUXc4snnxwM",
  "key37": "5XV4v9ssB7gqvGKDaDbUDdUKFYTEEuYgbA1A6Gd8uM2umcmE3ga2P1HKtzSv3CqxGFV6PrfHcjDotcSQeUPFhi5a",
  "key38": "3rjcfzPxj7Qmco5UbMLniWEovrodgEaw5XK2VgmjquULop1EWb6MhVumtuDo8pVNbs74kiShcbuBqjVBmFcb6VFR",
  "key39": "31a7ambjBVyvodUMrGH3VU8s6xf1kxDozd57giEf1A6XGZx3UwqDMs85uZ7Sv8bXRs2p1x1HtihrRr1YDphYLAHc",
  "key40": "3uH3KnGAjRev9C59SCuM8bwWdMZEdQvwZ6oZjC68Feg9z8kbVYwGMzcenBJL3YFZDk753x7f2wBck4yyKfFz9zvz",
  "key41": "2LjkbT7MPUrcqNf4jL245f2g3BM9kBubiBKSKzovXUwSwwJQ1KsDueRpyLXV6v8SibdwZPyAVQ12FV8SyopwZvag"
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
