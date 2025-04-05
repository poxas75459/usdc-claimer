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
    "2i3ZE6Y8EdbpkcL65o93RxvZRNUik7cLTXcF9WCALyW6TdCvVWoFuzj9nebCaC6uUM9qw9h2Hxy2LkDxDCkJqdcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntwWY4v2arUZbMbcey4capKPGsEZNRqzcqpryYV8vsLCbwCwTGio4nzWHjxLr1sWTAB21bSB8zyZDLjWEqQpfBn",
  "key1": "3B5hb7w2iE7k2umj4UgKqJGF6tKC3uNic2TvdeAALXq4NpcKLt7JxZCcy8wex7hKC7CCffrNrH8L4W38ZqbFG1Af",
  "key2": "TSoTnU25TVV6PmZinTVYrfXyASFsCbq6A57C7nJG3rVe4LimXR9fpcvhjZaQEFzScEM957od4weFoi2fPTutRWq",
  "key3": "36YDrGsYJk3XWEw5mArkn9ehHFoU5kGRV6kMrxvWjJiJUasexijHDERpuo9Xnpxq4nKe1ZMhpsN38KaRKuVVPvCj",
  "key4": "66rFW654fvUzLoGfkpKHTom9oq1YUsavLQBbzCka6WgnB5c9rZh6123zxjppQPHCd1h5PMwvjWKXng5jURYVWkAB",
  "key5": "4JFgQ8z1wdYNTeaJKqz88M7AQ4BxsUit511SSr8c8u7JZLQKSahUaFQZ6um1C638NxJdYAtj5CXXAVMhyCTCuRfz",
  "key6": "5y427cQUqY6bBugDcMK9nuMdwyqTCqQcXkwSJSqWuzMw6GsFDu4rNbjthYrr75CUppxLtuCJyhDemsJGR7X2SRH7",
  "key7": "4gpetmG5V9iAyrJRmQ6dhicC5EEt2WqRpFfDUrQqW4JLWXws8Gff64AiTdjFatpa1UUX6XBcKNJRjmX6rPhUZEHF",
  "key8": "3UtedRYcWgzypzKGqmVjcP4BUx4vWXUXnNot52iSdQDoCU2WTJBT2Zh2ut9y8UfDtARAvr4oRpjmuQWKmoBiTU1q",
  "key9": "5uV6NBVpaQgpn26RZXNuPrDjUKHkQRurCCPkbNQA44oCFSg9aHNUefgngorZRbY6frrnXsy7ux1eu4wnettp9GCz",
  "key10": "46f9Z4rdTmThjiq9SwbhcugqjsNvJwPrsxJMM2SNBy7dx77hGEox3c8VgBxvXke3g4hdaCC4L1rehVwJqEvxhBPL",
  "key11": "3J7w76AoZMo7fa13Sf7kvrn6Mr4Rfqkamj7eGPXQhGPV8AC1BdCZcnGTT8DCcLXqobZunq7x85z7YozRM3nrUxHg",
  "key12": "kZQVTrJZZ8CiUUpNcUA4izF8QyV1Vo83vzYo72XpELFhkvTajcJPV7rVQgqbxo18Los4qjMEwTg1ZzVErdNK6Bn",
  "key13": "5K4Zc8R1hAvaBPEjm7G5CnHY7Fvv4qnj55LZceMML13Q8vRHZ6swr9n2ZHQkokrxTJ8fPp6P73KdEmm3yATQPwnP",
  "key14": "qTQGCwmUTPonnnanRoNkWnAjrGMRUpcJd7fdpRmqwye2FEJsM2GoJ61BZ8ktihGuRmitfehUwX1mKhm7LEc8yyc",
  "key15": "2MbMDy1gf2esemz2QTysxDVXPCjjE7xcGQiq1Wkp1Kb8MXFtrzbmuhdoDrFwJX86ks7uX31hhbd92qgftxzKwdVh",
  "key16": "2Psz55nLsJm1BgRWqcsmVBBkv6vvXBZ4JwDBvWoF667ZcjwSSkUmypZ9GijSMoHY2LuDGwmjMgBqabrG45W3viFx",
  "key17": "5djsJW2t2DSYpAqGDSgTKYG8XWcrq4sjWU2VfR6SpEHvik57z4NLF3ksi1fRJVeh6nzY2xgfSq29HZwG9kWNCzNH",
  "key18": "4u43J4JfAr1Zuu47AmPsvN9c7QtbZQSaWTC34oNrenFdjPjET6q9YweGthdKRCduQujKcZpbyyVa4yvn6qoBTm8U",
  "key19": "25sNYE9oKTfjnic3N3VpPhL1a1zcvNL6CENpTTcNpihNhRH5vt3ar84bU7fFxN6BBCkE1FGU8eSNqR8HRxGUS4NN",
  "key20": "25X5cUwdY3WXaDwBpP6zK36g3gtrb9WPjkqxR4XHUs87ZCGNEGGyNXHLb4UiwjuEushUK8wDtnkNhWmWTMMqacpw",
  "key21": "5vMhz8asyRcDNWrrdBcx8hmtivcNrg692MF3p6mcqtdnpuy2w8GG8yWfcXY6WGELyAxKfJDpmULESX4JhRDFCVVA",
  "key22": "3DkrNyQ4NbdtWmiLuu16Bd6yPS1aASk7q3qLzJdT2zCFJhHZTMqfBWLotHmS6xWLfS96aN6yNRbvHMonyBfojvZe",
  "key23": "32jkYoC8gTmAnmqc7xV1QKsNKTguEYKXVGJJn3mJ1tmQ8FcEn86aXKyFCSbd8JxyFNm2T6Q9oqdsgEFjFa4gSZWK",
  "key24": "5azVVcM7aznCAy1YE21FA8YxTLPVwDB8dRHugmFLaJE6tCQ1RHmc7tCEtgAdADmLeJgSs96cgQk8ia3aoNfzyzCt",
  "key25": "4vyGYWPaa3FF82zi4BT37u6aoh4bzkkwJsZUpKfpJYCTReTpkPakneBNFKb4Be7DkuPxZprrscHTsPZixvv6D9yD",
  "key26": "4drqoDyJqMKVoyM9frRNiXYKyUGw5Sc8honX9xbocGxNTpNbC3d6yFQJF7auWWiwkNVLBAzPviL7qC2M94NPsYHb",
  "key27": "2s2u29a5xZ28NAGFYvfxWkLXtLNs1LUz8SXJKyJcNgCT8jY2wXrEj7y7fD7uVCApWVGkp1cExeCqkdZ8Z97brbg7",
  "key28": "sWBGq3tZLNVRYuFLC8voSMFzvsnzApASDBUtAMtJjXw846Cta1TDcwUtLZ9w5A3fHHwbMXmUS8eb9AZn9kyRHUs",
  "key29": "4DvJdH6uAtiLNJVkdDkhXeGezwywT6V61tC3BH2cyQkqhX6xU6a6UogJwvFcDHLitQo3m7GGid19k8t6a6npwny5",
  "key30": "iNGd8WZXm6ePTBJKEp8y4K1Fom3ESd8jYSDpp2q7GeTPTQTD4YzXZQfhLQbQbXbKxBzh8TySDfUE81a7MKgrQJZ",
  "key31": "5vyt4Dhp5DHDL7wYGrPpboaPMjDWJnv9zSBCFQMD4SRavpgqanmcqWFMXuwevsZoW6g9oerAikcjZi23Q7XBwTVR",
  "key32": "5bcAKRx6uVEZXutQFeRcTDcyiVgRMu2iKDVUjUW8cBiB3bCL1r6NdK2dEcu5oDeJeY16ozdDKseRHdb4XZtR1iaL",
  "key33": "3yy8EFWWKGsmN3i5Mp1Hv9S7GkJMjmiHZfbjaYd95DXrnsCbsnAbQZceVnqXJ39cSWaPzjJSi18b6gj9dZ1DDKjp",
  "key34": "3x5Zdzz7odNWZCqzmFAcYPv7fx33vHRFDJMKSUX7c32ZJuqYzQR6Qr1PhNYVMRKaCHMWfovGnN9XsVt51RmFYKQd",
  "key35": "3r6ukZmaJWbJC2wWG6hALUHpCpTr72HTuqiiSw2X2fJ7ighqifb3uGYrUC27eoUkTYZ4nKEL4Hdycat4DMvpFSMn",
  "key36": "V7DdsWqbqk5jFnAxdvsgPPP8KnBFjiA4PRBTL2aGQMVTgu5DkgWAdAfPgvDi33szPYed8f3n3mxjvehKo9xiogy",
  "key37": "3FZzm8xxNt11e3E3XZsLhf2rDczbSm7a9ZR7QLR3zeLDTMU317uFpsjmj7RkBmdiYuoyzzLdsCdWUThAvQ2PzgER",
  "key38": "5CjMz99j6dXRcuwL15jr2J7uop5K9vFHFk1ucYfBhWxNURGKKm3WWexn4jaZJb4SFHYow2QovLWtwbyGD84hE2Ej",
  "key39": "4hysACnoTMXMuKGL4z6mVzBRTceXmo3KP3RHaVXwgcJXcKc5mJcZbosHaU9H5WuAFNPh3VNR3C3WojU3cbntzRzw",
  "key40": "5PfLYBdGQjwwUBYAzsZcUMZbbPexkbk8Vb5Bc2JTbV8At3ZZgBM7ZRWiYsc5EAmyCqhgkFCDbVbjicDMsDCWjNWe",
  "key41": "jCPBYBdum6nnYWBSNG5nxHDDioB2hL4L7BonzstCioubWz2ARjfzi3Q9eVYjFkn6EQ1cf5nNoDsn9qMKhJU4Rmk",
  "key42": "3bGRYpuSQ98YePXev12xGaKGsShswWv3uH4knGytHatbPgZG2DJg8q6hbMBMhgjBnUWyGmh5h5vfHqDRxvtrJWCZ",
  "key43": "67LUiLgqCQ3sQ52sArJG9uux6YsRTWamZRqmVKTnn4SR6E8XR7wbah1nWH6k7dzFSKVqsKKELkouDDLnCwUTvKXG",
  "key44": "X9ygvNRDuDf2nuzszTw9MwjmkLkuJisDsBxBjQAU7UKGJPYPxkM6ZnDVdhLoNGjuwqQ32TBwurca5ng15YadhKY",
  "key45": "oM3x4C2xAJir7dPrbR9QaLP6P7FfFt2qkkN7hEM64QATyJsFoEtcNVct3R8fGCnAqA7ZzQvhn5UG4fWACxvCC6Y",
  "key46": "rN19YP2FbpPB26hLd5EsyzjtvqWdHNsyp8bEb77NYQQvyZp8heaEGbhaihy6X9a5skWYL4xySdm9q6kyA22s6XK",
  "key47": "3u2SsNw24STYbgq67kgjQ5AsTewMAdUMtiFkhG6irfctJjAmFWG3FGMEAHFTvLkAyoE1aipuHirRkMEJaYeiZ2Fz",
  "key48": "3nrhiCyLDY6dUSwWzq5SCJamEPwaPjyijDfS7TGsKAz3FbGpo91Q2ebaE39K7foJ6nwPejG7NSX7xfdrEYkoZNLg",
  "key49": "2Xz3iDbsrfDvnmrv2uZG6VJUCs3iNXDa9kNaBggD92gqi7pLzdQ8NpAKcsaNySParL8txnkaJk96YYJJNpbqbmtH"
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
