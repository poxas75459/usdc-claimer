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
    "2KxNSPXJBmZcnk1utRPXD1mP4T9qvPJ9rG9tRNm4DGzzCacxB5N6CXLTV9ypLwRXHCvyL8NGtXDjGUEhoU4NpEd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1V9r2dmckgyWj5jqUT5hAzaW9FJ96ocGTQrJYd9SsbsZykaQrh9ESEdecATrjz2PKjKRQDxy26mqnYFi6Danhh",
  "key1": "3XdXgeiMczKN75Dtu7FMZmAUvmZZScRBRHzixTtFTCPBfvN4MhGrBfN7oxT8wUnfTA8A1mjEY562SBCvGScTtD2s",
  "key2": "2tWtYZN1b87Q1a8sWVs8n3S4mnqZFptCGtFPSdsE6QGKfxZEc5wbEpSbxHrPH1JUrgeuhknbZ9zaVTgFPkkDfLF3",
  "key3": "5vzd61GhnwAJ6AvsYTqgf1PMkfevuZT7Xt1hx9LU9jwmFqDDfMyR282CD5BbsA3cxd4XyTg4fUpw8m7RxMHA9v78",
  "key4": "6TnLiZUKJwmV1K2pzjcFmWfmuKf3dcYnR7kbuFPdMdmkqvFdjEnS9LGehHRnSV7WJBmdu6e6DNSmw3krqs1KFyN",
  "key5": "44mgnJsFQLbhgt8ALqruMWs1KsR4FrtAu9ANk3FPvozqM4pNPuZrVYoBZ31FoGCdgKiPwSKP8wRC39PDuBLUKJX1",
  "key6": "4BUDjmZD9dgStofngTFAcakGU1rBv4tVRzrn1UMMvRopvDJ2zqKztEN52mGPLjSfQKbTkRPL6DbcShB5aae436Jy",
  "key7": "26acs9LL5HRcxphmNjXnXN2okBBPKRiiRKmQB6zER6u7JgWR2dHsVHr16SjMurDpGrjVhWgAfzBRwaop5uzJgoaR",
  "key8": "5ysyZhGdgWdVpRAPzbN6XPQ8LL3o45RVYBUYmz6t5kKkC9y8CsXmWbQJ9q7gGNRen3tgQhqwHdxEXHrhRbe212NM",
  "key9": "37FotpCLYDCM3HQNhTDxawgZZYX4SA9LD43pwz4HP8Y1AxMM8CQ9t7Pf164wWJ35QNTfpWSBLf53VLbCNk5VeXgy",
  "key10": "3YjCM8bzCmYKQ1mEBTRTE8enqVcbUEaHfJ49R5jUiJjZG9fqfTdqsF612rb7bHdCw3JXGa1xhn7AaK8TaLjgBaqy",
  "key11": "2J2P3vKPuPCxMHw4zBNip2Ee1goVKhoaaoLiLJxEoyyXj8SR8Jt8yNV8758B3kUpLcZNeVaRQ3yiBwaKpxTrSDCH",
  "key12": "3TyKzCXM9pwx2eoK3J7EXuPyWG6EzZ62xpTQsyN4z3Z8qzA8Eh36RntmnmSnWPXGfavDD5TySFnEHTS5y3xwsYQ",
  "key13": "5hNEyhEyAoBiYb14uKgfVLxw1gtBoDpVwkwkVCmDd57BBg1SSQ9WEeKBE4V4xcr1DHLDshAAgqncGj7gvmyEBsv2",
  "key14": "2J7wCEzRso3V9Vtq7FpuisVTByJ2radmYjzUnWp7syz8oTQk4aJimhrhxgJz18ShEpS6PkNKs7fAvTesL8Youpww",
  "key15": "4z6jQcyjNv4hwXDfAeuvfoAs2Nxbwds4Tb6N81BvqqUYQc9EKzR1LXy1pQD6RXyKWsv6t834pe7bCajbKwguwC6u",
  "key16": "R6gg8JamXYxAYueK4h1cXGhoG3SsZzGBr1sXapzHwYqKNbL2wc2Fxzhuf7p5poT8DbHuTHkowiGuKmdxNd3csKg",
  "key17": "4JuPaC7RBfDB1VKZkDsLFfkFoj4Z5A4XUEtXKGJGVLQ5BHMar8RZftsKkvq1MVUXfYkTZEPordbYMQa2kdUHjmih",
  "key18": "5UQxLxC6RZmTofn9gFqFEq8VL5HQtchWHe5WRBY8ytcLNVbpnSi1uGR4HWJmTVbquy5vTz63EREXjpi3xsAzWNPR",
  "key19": "3R4LWmpMprwkD6JwkmJ8UT7iUDXg4DuaAGkRyebfnwpa8pZPYfJd6TH8HQYt6tenzsoJ69aVHat2C9HX7t3CBiZa",
  "key20": "2RjEHcnuKpBQVp2LTuPmYwfpghkwmy3gMYiYn7REjhY8vxspwfFCXCyk17KZz69EYgmkCFeCgbBMkUYyshoCpk16",
  "key21": "5zx2CBWNWHiodFYsbKPB2kwH7gKZHYgp6DiRn2euiLfyptJCQPrD3TgVXaQ8cQyQDDuaLgVmQbyje5Lo4RtDKyuZ",
  "key22": "zLQCyaxXfkhz9h5mPTKSBtfeJq2FNftEmX9E21XQjxXjwHgeYn5DN9HvehSRzpEr6JGyGGqA3vW6NjR7zzg7cL9",
  "key23": "4xBGaZ4LN7DGbwuALF2Wwv49vLreEBGY2NFDFm5vV8UGNPBEEPZ9JQ68jXQ5xRPDJNjp14zSvp5ViNaSRX9zegoA",
  "key24": "5tau3FaXh5VLRhwERpYiZ7K1oxNpDtUbfJQsmjas68AdykPJib7cFqwXmvFjs2epJ9YrFDSqxmfvyFbup5Eb3fkN",
  "key25": "2CCCBwvnWCcjegJ9aaucYfErAZrGSquaNmBV3VdvAwRPZDkLvQmoEFAAWPoU8TFZH9ALM9dR28F5qrjmNM2Ge1fY",
  "key26": "uVSbpvyhZS7adye2QHr9k23F5pdS1HY5wn8ep1kf1e7jc6bzQmVFkvnMXMzTRzjuEqSAv64euv3BLc5Wq8RYheM",
  "key27": "4AKxHi7W3AC6jdpK3KE4rMRZiR48cStrTGTnAR9RUqdphuENWTkRHK3fcZUuabPEFx37ZitTmDdSSEvDnous2FL7",
  "key28": "28at7PAP9nxXunKEwCXCw7yz9NAMqVf1YZQCVid51kfLwJfi4xc7sB8BVWYR9G5FyvQkfni8C2Q7bP6SeVHGXBYa",
  "key29": "4YkVp3NQAsbP1aWRUiGzbaiU2d6W6QTPepyCFMhNPfEzpg8pTk5PxywiQ2JkhdTnc53rgVpUZ5Ao4t6XcHBVaGEg",
  "key30": "qRA7ZWMABnz7rZoNvJ3nZci7G1gs64BX8yv5vDxz8WLLRrhLrJUGS2p3568u5BMtaY64Cv3Vj69Ehm14bn7GMvy",
  "key31": "41fjNhQJtT1dCr5dX9BqSdzJ9DxQJVVgKwrcWF4jNbsvVxfFkRoRtZWiRwvzXQjog4q397C98TAGXJVNqGb1vY1D",
  "key32": "5cVqwjSjAN19qFh82itMy4vzSsxaF6CVDaNcMVuhH4zut1K4x4bJ9j6rnrc4Ngzj8XF4sxH5t7qi9LzprdNX57ZA",
  "key33": "MpVPAeecK1YWjBreALGuH54MduNuoiGGAuHkmQb9pb62EzyP5CdWiS6e148FHaA43SUrn252FHo9og21kz5KHAS",
  "key34": "5PRMWz1KscRFNqbjpcN2yawnnby2yd66mLq9DxkQm6F2hovR9mtCm9LNn2k92j1kR3bv3x95pDqRbRni7VrdTNnw",
  "key35": "43ihoyYaJNZzTEXYz4u1Rvc9YkJ8iKCjtr4XS2YSwoY5fHMf5ZhDiCCJUbwc3doq6NLNQ6FgM8jKZvTojzndCagi",
  "key36": "3Xa1tBCRzjxVcMTbKpXgTcmCcj4595LLb5kBtwJEurU8dNzMgPfrnatQFzBoHaYMm35z5W5kwXCMWx2yPWxSXbSj",
  "key37": "4PtHjp3Waiw8s5Mm6pFevVNfN2T1TFE7Sb9D1uEravNbaSnyqFVNeu3Su6A3HWPi3TeJrAb6gsWoGuuj1Yd9kzE7",
  "key38": "3hYqtrtPtc8pDBS7ZrWZp3P7kBfFc6QRkKeqLQ9xULZZrRXsgv5e4kGHhnPvuKmUY5xJydXrRsQCcWN6pXdnp4kT",
  "key39": "rFQ11158Fj6wvfWvuxpGsTKHyWAmHvDPbp4A2HNhTrm2VRUDHTYWaNc2iQczzaKoevJXw4wcewC1aAFKsnowFLj",
  "key40": "5pb96Vm1sSkEQUZeAyNVDVdFEYDJMU9msRLnChjr3SypfffJHqP95UbsfSqZw9QZ9Sat8Pj1aCNfuxjQxNYpCEv7",
  "key41": "2PH2NEeXFVZ6nd5w6csFCn8XnpuJG8xjJgo8YmFeECCT5WX33axS7UxAJMwhHCTcqeeuSMb6dXYtFQ3DTVk5iaqP",
  "key42": "3G9TCewn4M3bYa1w96sBQtiA8ktsyDreopf31j2AvsN6fk55dkeAV1rXCMKN7P5H163M8TJgexC9K15QjY7bUnZU",
  "key43": "3CuQBQAWf8vipzZ3PkfAbyfNiem4KMaKa5JEkJnJoNcVYhpjSBoLeErEvWibg7rhacQTN1GBpCj4Caqf417rfa2K"
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
