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
    "RVPXSr9kTTKnZW167JANxMauUtxrC7evreTPsvMR5EmwCoagHTXkiHiFeNAdGqTSdBYzBh9TjWFGPbP2t7j5kXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c7eGwrfKLUfyzSBSMMyRMcWjY59Xujo8cMk5QFkj4q9VungDtvYoyDMjhbMQiNJngmZqHwh31Fbu9WyWvSrytei",
  "key1": "4NAiqNjZv5FcQYgMsS5Xb2wyckPD2UfWpobhg9Xpwef5qoaMLV8xMKCmfYA1Vw8QVbQW8CGvrYpaeejnty33ueGK",
  "key2": "Bhsb3SAcG3CcDtx7ZW46Sg5Y5hTpepYP9ajj9jxfBiAND8nf7EfnSxq6wxpAStTYbKq9E65cvgdqY4LLAvK1Ac9",
  "key3": "5gi51Mg48Q2uQiNr2tCPKvVd1wCWSU2Bk2K1eDwbVQgwdFLTmufVUBpJpZ76v5GETsk4m5RAAB2UxtqnGMNGFyd5",
  "key4": "cpZxwpxcJwGX2zxDhTNJKPhT3goN3WYAihqimLj3cnv82dLuM42fwmbmN7NwYSPFdBRjWvs55tTBSsmwNqMGsAR",
  "key5": "26Xzd7wMHXhBfPGgeTGKCX8T9o1APoUfC5PfEEXePUFVPwY9qU7Qy3cYx3cEpLJ7AGxLDGEnd1XVnoJEEbNkwXUb",
  "key6": "63rRKYhFnxjJLbu91EPuz9WceUYR8cMrkPKfbEDuMoYM2owxGi7cAKAXuAwSW8wNVjvrNtXZfeMZfV6nhXmXZW2n",
  "key7": "21HKuiJkMfnFaNDr62QgiK8XR5Y9CMu4yokdKKLzGbPheCpBCqspfpZe4gjywXyvyjPGUceuABVSboqiZQsJRwf9",
  "key8": "5PQtVhzDsDKHMLbGfkZKjz8BSB4PG4U8hYEf6xVTqG91hXohrZ7U5okChsJKQXApUgw9ggvwbkhm1RtaoTUu7RZ1",
  "key9": "4xT9FzBLU4qRfSpkTsM81sq6euGNr1ZX2bXkegqAWxPMd84X8QmiQifAX4U9u5XT4FE17UtnqCd2KHuy5R34YzBJ",
  "key10": "28VQkwz8Kosr7Tp2mXHx5j8Zg1XY8N9uWkaNy5r8aNRpHx5auoHfvjCvKLDriqMt1YaD8iB2jtTVALBpsHarC86R",
  "key11": "4tzTpgvkMWZD1V28y6gaEtVukwxZsHGeX3Du2wHL4FdZVppiLBRrqgBeeJJPNi9TWjureTNpBXCsCrT7jAfUf9uZ",
  "key12": "4HXG79wMVn3yydCHpJG3h2cB6RuyFE6XUgRT5fj3ierFGRNXisoZWf1qDDBnW3CRUMzE4emthjhCeKyXEhUtdoY1",
  "key13": "G9vJf43zWvyDnTnsP9XToWXRzq4MfXbWqBMCd69RwUA6K3utF6apcCRFSqCa13BRDBS6rhmBNFEBchYgGM27FtM",
  "key14": "4wmpQQqw16nUr7EPDNeeToPkRSeSho3b3ZMuqCi7HMbr7JsGg1vQBCetSgv9czrnQDX9zPjkDqrbsBXieMzq7R4a",
  "key15": "27ZaTMqcBeKuHJNBzWzFHEc8pt9r6r4VsCn9wzw7ZYkfop1n27gTxTEWPP5u8JYnSio6ywH5Smb6BgT4tNA7XX2j",
  "key16": "2wrPsK22RyBqVnkKgYxuoE3VoXfTekhqGb4kbHkL5BeQn2iiPHb9vkYLz1hrHC2ZgjyNPNZZboX2UujCSo6ty77d",
  "key17": "3hxVKMhohDvZ6KNQvGLcsf7m1tBZXfJHP8PyAQN6X2vmjQMvXuX86iRUxrxvL4dnTvejusdEnsFy2NuSGeNKv9sb",
  "key18": "2zgvgWBa4Xp4C2GQiVqkY5sUrYsoUCLyUk8QasMVsRtJiqRQF6zMYD1YtoySEpUvsG7b8KN33zarb11nhWacXGJs",
  "key19": "4Ma2orUqKB8JhUPvF2mvrhs4vqHm57kYV3GrwKEUdaDTAehD9v3mYuSbCzfBRVp4Y5TFNtsdUx4XM763BbKZNRgM",
  "key20": "2bCQSv5oQKmyPQwRd784qyMU3iexWLmpA2p6x4XuzVVVRHh7mpzQ7t9o1PGP9k1tt4u5XxFKk9CMKg1tQi5VJbCy",
  "key21": "22fJbCfdszsnSHhadPFs6eG5NpQywTyX7JWtQwpjxLyywZn2X4QwwnLTRuHhnDe8xyMJAGHLojX3cStiGmnQMkwu",
  "key22": "3MN2UJJ7K5LGUgy1n6inpoUtaULTLDTJFokobDoZyGJ3H3ut3jTr4z7mNSTrdQ4fh2K35f8X82VgREqVQM6gQPzs",
  "key23": "5eq6K2tqbkXw8hT9LP9gYpeVebnFcJkdiPRoH7P3ehN8JdzkvtEwSWA9CrmsHXgbHyVpoK32zGqZUqtsK9jK78zz",
  "key24": "128ngWNtQEbV4LGPnbSp3zqEoDXTxmNPicsHWVQXDh7YoPPaeE1RChVYSfS4TxioEH1r8hnMvFgZsj4SCua98bVY",
  "key25": "4j9pFmA57YapJthxNHBfQaEU2jdfjxjKcLnP9bkeP12GhVAw3Wgn3rNM73PMe587BH1YpsddRKq4XhnMcYjy3iTa",
  "key26": "3XX88VmBZUGk9yGjQixpEYdo1GpejnPEd6FXHc3axrA5pAStAaDgRVDT6gSfs4s5nrzMqVL3P2eDr86vQ48Vav2T",
  "key27": "5tcYU4CzaKa8QYmmSqrR22tZVtksjrAm2fuumMDsYSu9ZDGbks3C2K5Mw4B6o5uRdcoAzRycBbY4fozyEgvPmzpp",
  "key28": "5dBfVoRaiBvgsc9eHaA1LmmkVnF4XVCkiMbGSK6ncueRh9rxmHwC1zpTQZR5FKq1iaD43yBb3p2ngcGNChVqNqV9",
  "key29": "2jzJpbEDTXMtggSJghZtwNAb8GdNX8qZamUZvFBmP6tvZTcgCUbsDRrEf39uramyivFJu495raQmA7RxuV34Sna4",
  "key30": "2LJx6mztNrvxcFQTETB52sr3UAwxNrqYsgVscgVvi6tTFCVvMjKRzhvRcCQjVmqNo5RhmGzDu7E537Bjx9dAQf4x",
  "key31": "4D5ZNk9yjkx9W8BMtPSiGUDYq1fvthpgheNwwYLvmdBEExFFdUC4Jkas8KJ33kHZwhAt235Xwfg78F5uezRVwQCg",
  "key32": "5n6hQancekaa4YMtSmPtsiYfE4eAi4oPunKgDiodSYCsDKdA4angoQA6tGdThfRF6k1GoNTuBECyAG3KjfuZ295F",
  "key33": "46Fe4VsWhZTvgpPE8dkQLuRmsYdKnfASSyS8Gtr1qeeYnhqbtic7c7VXhLVSSS8yaCW7HzV44s9fPrW7Gbwx7Z9i",
  "key34": "2r19zJW3WmrD4Y7FBtMH9b3vBSbm2wupL1s8CTnXbVZt3fHBcdeHCbg7CLeqye1A27V89AzQ3HoXHa8D4d8TChHv",
  "key35": "5iLA729K8tNFWTokN6poGPqCRaSYVKYfNmQE3s9vSicdxnL3n1tvjUE3aULYtQDNy93DJ8snmYCtMMNs1g9j6Zda",
  "key36": "57RVGeprLevnqqcnL9AeKEiPhPTgyeQxGq6WCedPFHQJwcd68NRdzmE2M3B6cT3XLEFPNhxn8sC6BxpjVEpWcuFR",
  "key37": "KkPJusUtFPjXy6vEiCBv4nntshrfKTYRa97MKsRiZFXGwV4QJGmDyniryJoyHtNBRisse6QU4RyggfSRmaUkCpE",
  "key38": "63KY4w8bsWAr4CmXsakQpuSoVYEf7mv5tejNvEra9nX9DQX5NpjKdqG9Hxej2Em43hZ8qQMmvoFEFkMXE5d3nsQM",
  "key39": "2kafr3dNnYs6Pd1bnjHtKW4Wyanjj6TkjKoeDmbn1YUT1g1f2M6CJFwfB447YVs8dd9LYBMnEb8CUMde4LtbLBLm",
  "key40": "5aA892fgVugwH3psmjrPetYdDmCka6A9EL4pBbM7rH2A1vaZ3harqRN1tLHEWBtVJ5mM3i7qQShTC3bVdi7GtprJ",
  "key41": "34UJdZ6fY4uvYPye9MtLvQrBzukVxWZrDkKJvPLcZA7GpYfG22tsDZn8fdcPSMjktn4q2QCrQHhs1VBUowY6hFeF",
  "key42": "5F2VQFcN4fd9Eyq72Ub6X9vYBWMagCnghFTFJh7yEBRfWf11uFAevGmrSkVYX57rqzDEBvbeXLXitv9fKLDKYdxv",
  "key43": "3AoPrVQfEf89cc26Mm2fhwEuLoN9UGA9wqgZWMA6KPGjfdF9STYCaJBTHh2HeeRintsFuD9CnH5SafVgCwW2hTgw"
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
