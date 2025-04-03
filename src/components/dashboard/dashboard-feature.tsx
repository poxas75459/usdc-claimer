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
    "3B8szoj7FWkgE2F1DwDjGVYDKTtbPfuEp97aZTBwjg7o6EJ9x73NKbaddW7YTVro7hjRGjzsCuLfvcj5sveDD2Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gJ33QnDWywnW4QFnnYpYVxpfdwUUez8C3fcSxKVrrWpgXrb6FVeLPoMSWmLPDPLj1uF93XkPqTCsqeTWZmKWTWF",
  "key1": "2JJd6RsgviymejWiNFEvn3yqkwV4ehkRx5L6Q482gdME8U9kx1s4UmXFQD1uKwH6zYHgJrRfSVWZbbc93StAF2DE",
  "key2": "4mQ2dMfU5UY6d44Ny9NnMzfWeApthNVhqvZHtaaexB1i2RGVZweXC1fWMSzidBYABM5447E6NCHMxTqnYbxHYHaQ",
  "key3": "4uqTXmcDZbBF6ynbUx2ALqG66HKqacBM48NUq3ENQtPSAc33bHJqQpDwWAUE5VQaVm19JL9axqwj6e2UeJurXQF8",
  "key4": "PTjENaTdXCw8dxQvKprSJ41xg8ZmszPoqCCByxHCzEqrgUfNsr3sP2zYodBsA4u3vETuUQgQ1m8DPNhLQJG3bSK",
  "key5": "2kumQdFg2JdaXqBCNkcJPRtSaCXRwXtmJuVAthg3p4pDLWXQbJAq9B2vJTXx27CVLpAAy9WWC3yBWfda6eKRChbQ",
  "key6": "3A8u3or5DsqeFtm4CFbHx9F6wZ4i1wSi9MgoZZExHkLityfq2qameZ2pb43ktiPZ4jXQE5qVqoy4EgCpJ1ub4WBr",
  "key7": "4aS99FjJsWXkXsX5GV2XpeDRdgZ3iP5kXAbAeUPJXDMuB5yvdPV1oUgjEukRGuo3EQ4He7X1vbAYK5YieCsNBFTr",
  "key8": "3VSG25WzABmh6ejaE5o3PE8dExTVDCz9P8FhAXEVGdTbgPnYJ6oA4iduKWLwndHTG8v9n3DMKbQv62vKYw23RenP",
  "key9": "3qu4b6GYQtGFifA2wwt4VQizages7oqKkeMChzDC77SjAX5CfMjP2VvEYYVdhtqM7agbb3KqmiteTLvvnJx9AZaG",
  "key10": "5moEQhgVhggZR8nAG4vkt6uXSATf41Z7pz8fJgsjcJnJd4NMxXtdJ7yHaWfnG8cGBFafRmgDdU4inQv2Tv5bq4Yn",
  "key11": "5Lh5az45ENaGujwh6d3JeTZcbA1LXejovuHzX1i3Lg2KLRLKZYjqWobRZ8UNAbSL5t7ejC96KXd8UGBD1xRfVi4V",
  "key12": "pHEn8BQuodfPd3hbmMh5G7Ccsty1xKfkJ6nHMVNVJmUsPXVBhyCjV7fdF8m2LbPvncJtCUozJTiVSonwvMTGrAg",
  "key13": "5vY6SX8H3et6FFNiQKPLxRqrnTTrxbGEQjt2iuSKjD9SMMFKWUiyMdb2Abzo5LNgbsnvsdnkN6MhLVQ7Beub254D",
  "key14": "66HpyZnBXm76UhztnpMcAdggRQo13y6qumeyM3KhsrZDVdxstsMur5mZosAavfBvKyNykyyuXGvYkcBtaHeoHjW6",
  "key15": "jR1EqLehQJ7bFNwcYMzmjLCejNQ8gaGw3eFn2PPwN6MA4ev49RpXfdzGNgZiD9euRAzZsxu6punJ53r7g4omuyM",
  "key16": "3hUN8FCuv8JtciLDx4PJvwzoajP4W6ap9MFeLBNYtvG8JcfcJyzCFoGsBcXt8dBccGb3NcS9pAznGpYV3EBoG67S",
  "key17": "3Sxf7nHksXtCiZA96JPGYCpqyn3D7YQv1TUcYBPN7vHhS7LDoFxbmnAspFQ3CrfTHwhKZEPUQ6qq7PtziWb5KsZ7",
  "key18": "25bS1sU3WktwXHwZRqmVjsaSPwQa1wbWNED1GqCxEW1dMyy9oAptmc3neVrcaGYAsG2RGWKdBrXfxx54NMhKGbQf",
  "key19": "3gUX6WPCuGHTdb7UszYnreHkcZL883aLCNxoHYDzRthMJ7Kj3v94btUhchZjxpV28YfMX4Qw7qpLiSdGvrnrgbEn",
  "key20": "U5WDdb2CFTsPYxhXchPDYDmGshVfJpCmDHqHx4N2QwJ7WKRz8HrQ8Wcyqhh1ZAa9cPDjV3qVb7PSqyg93A3EjvF",
  "key21": "5dhzBsBxYXvxhTSDJsAMhFhA7XZ2QkEBsiJK62pG18EwnuM7tK7h7GMGYZt5PARLajEPka89o71rEFshS4sXKSTT",
  "key22": "426ct2M3eJzeTg3c594hzSM4hru8GyTYTN2Hvv51CKexARZX3zxXKxuBKerkDsD1fhcW6PrfgKmKQWo1SNdAWCEC",
  "key23": "fWDr2hpfeAa9dfwY6atUSHFipgQSbVmaUrfi3jUfJRPFeuacCogr5n4sMzZ9YLHVkwiSUXUBBYZP1fhG3C45VgH",
  "key24": "4pbUUbPTXRpTAkMXJrho9nqHJhwYJ7WqBiV8awQsmVzpi6R7SGLHdEXN95gk48ni77G4nC1YhBemAdrDvmW7fCEn",
  "key25": "3E9RDc4tJniiA7YkADyMv1fL9fhwdz9DUyMNXjHUrZbFVs4z3JX4AK5PM4TnW9H79f8zyB7fvSXY4PtwSTpRjRSM",
  "key26": "2e6J3c3Gp7ez429TxcuSUudoap3CbLmTMMqhqTDy3dZ9v1vtQnVUEnRwq3HBP3mf48WoCsnNnJaXTF9AMB99W8j",
  "key27": "5BMdUedDNpsMg4Avd7DAPac5TZNc2sYHUFWCqqTDjyZAvUiRzaQe6dPcuHay7KiHXGEmd9Ra5E9V1xiTQA4umaVu",
  "key28": "3PmvgmkAWAQevhW9g9rWrcd3E2hXCWVZMoLzdKRFCGQsnaRLcsaTvgkm2r4jsNtDMSRBqQzEzdFPqNyfeNGxiLfY",
  "key29": "32Pb17WAksBfB7vexskjpUBr6f9jQ9nojtm9rWdZFXGGah2tkoShqD45Uds336chfKPAGUEMxpkKbzfAmzzvj3a9",
  "key30": "3MLSATezNDd8gvpnB9nZWtFw5YGL5iRrAVPYEqDdyoebEVE3xTURNRtsieLTa1yZp56DTNizhMDCbZvMgBmMKYR3",
  "key31": "5nkfAMALSVkS4w8ponK6NrWNDbkww6S78WqprJiFyPGq1zLf7NeYxVgAxgT5VXtPjmA6bgMzCgCMpHfBSvFFCHfL",
  "key32": "62YfUPPy4hMvLmxrdUPxkmmGiZYnj84ZADEhy6q9DAYs4pSVF256qV2obXdTjwsztLwU9RWw8DLCFcTFEQeEx95Y",
  "key33": "2Q6J14nU7CjH88WREgWMG8ERTaDHnc1GHJdMypCK6WJRLAWb2Upm6YUZa3gM4LYCT26vys9cGKKr2KB54vrYxMiv",
  "key34": "2JH51MmNA9A5d3dqnmP5PKeyR4RTkxyD1bLWFaM8a9iyNY4gaeNiWwZcvxQL6TgbKuBRMfT12jc5swDsye52UMNk",
  "key35": "2DkpZ1vSL1bKB83G4AksmzhwyoqELD3cppHZ8SJhTdrnFbdmrNqKnpBpW8XGeXjsbAEQKPeUeWTpyPq15auDR8mt",
  "key36": "39JawX2G84RvKGE9CrDqhznhcTb1PrYSD1hfBK8fjNAiy8cfp6p9rLLAQSHx1icvdFAbvtHNJHZhLjuo8DLhMHvZ",
  "key37": "39te1JfM611JwAHyhmHhWLXFnc6hYBSeUmYpWvreFjmYu4KVfiPMwd59GfJL1s7rUEqd2UhvgtsNKtM5AQVbcNfz",
  "key38": "3b8yYq3meM5HD77N68qtDzYJZNqdc7qC51y4CdGJ4W8BZnq3H61x8RUVaVnHqH1t2BRLdfbXypCFiuAW2joY4tug",
  "key39": "2gvSHAL6EF1R624u9K7y9yVEgk4RDf8teUHABj5NDMNRtTJEaPqTLe4bp6Pr2zuf3MzYaecicprGBVCMq47FXShK",
  "key40": "2UbZWDa4L4C28VWBXtkmoNCVn5ztSB7u6i5aXbYfgjshWKTgZ1QkAZHBoLn7a25Wj5XU2FFrgU7ZT4fSGgFLX2AU",
  "key41": "dEAZSZ4DoaSZzR3GbQi5YX2v1r4T5q7mVkhJQ5B7Y6kmrLv9M7sXGnoensRrxxYbCFFc3h6YemqKnSngUWwj9E6",
  "key42": "tWtLF1y3D81vsnjXNit24m6r3LhNCpRxmx3TKoSNMkmDqkX18xZ2pADncqtnW2SePxh2k4mQN2ZfTzWkveZjyPo",
  "key43": "2FYqpJQ7pdH7YQ9AQruJcriVKkCg94UXkmpX7b5B1DCAuBrutALMuASxwKrSfuEhZsv5vaAuBBajLkSbMfzrPrZ4",
  "key44": "2LszSYqwu3F4xNE5yFChKXES6pjWrjwSggDGJCrGHRwULBB9o3hEFjt5x36BTZcAqxanygWqR56kgjNP9gWpVDZe",
  "key45": "2wYzYVfTtBXFDtAiLUq49Z9rpYmJkAgMP7TbcVpAQcajktV5DBHgN4zXkGwC4bqdBA5wTMoXMVC1VGL1y36fLKDX"
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
