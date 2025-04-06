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
    "2EQ2L6Tr96VK5sFYLRCPmbcgAc6PXh7i8i3KY5gDRyys2RUpB67Po4ZrjEkY8KF3SWwEUWBH61taTmiDRSPhTM9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAf5Bj9pqWvoUr6NHXREyrgCdZbZAuxT42yweB9qr34i9HF5idyPAxuYpk5v9iZ7t3jis5QTRM5YvwM5C5S7nvZ",
  "key1": "2Z4MndSeb3SX5sWUEz32rxNjFhdVtnEcTHi2WP1992cNeu44fZhziV25wXu6ppTcJ3ZdHKtGfJqdtwzx4QrCukrL",
  "key2": "3q3BHDbG1MQzUg81jtGKGB6DhBGJvkLR4mV8khufi42kxcBJN6vMCHHwCgoSp5pTSGfgNHn6vH5GE4dyiE2T7Utn",
  "key3": "4tMuzGUEzpLUvjXDAoM7EpVYC2BTuhcKjfkBHtCFnVRBbX4Zp7BdQjFohEV3zjuHQSrHxvUZ5YBYbx5ktvcfcWts",
  "key4": "3x7g1gDGHJrGjLhnqgPayNJ5nL8Qz5TytVPYZsxsuR5g3S4EqnHpAy7NS6PEEr9uuZBx3xoWVr5H3D7qdnTYthjP",
  "key5": "3adsRfyE2NFg7gfVigdJRSSDEbsURzt2XBLJCGYecHsfwJxJLWSsDRMqUNH35XsxtcmPEuA3aXTcnb2BF5CsjCMK",
  "key6": "2T81CPF1EHuA8zqaZi81cYhrf9hoYsDUKHPX76NGwCE75h91i6uEffBp5VpPtc76x7XxS2KsPfCSjMKBUoYAA89c",
  "key7": "1sxFHgdFcb7QdCVy5mM3e7M6k5JTV5mEdSPNuXMZenFDtYzA6fTRT9jUAZV44sdttD2cj2M9kGaPJqWgDNsBi9f",
  "key8": "5zJzf98eBYEi4tKva7Z39dFPogykwX6n3feddihFEeiL7RMhYekhd9B6Td6sUZqsMWS8qyyjSLt92tfDQYEm4Pda",
  "key9": "4qXeJKKNqfWFnyAk3WRPW6JK89VjnEHZmpDXMHq9JXCZLoso8zpGwGf5W4EbvViHMtUeK5KWLdei5PYeABpetqRD",
  "key10": "56FyUR5DSGtgh3jp5c5Hae7tjhMeKzLu3c2nvp37zsSWbssgLUQkKvkieu1ezakr78Fos136mkSWcpuBrbvchpbS",
  "key11": "3oUk1i7aMR8oC5xQXraGWLUM6RatxuY3zZWDuQTqT1ZuJ8Gb1vUDnsQaSDRw5bDKhEqU1YF39jd5uBkthzc8X24k",
  "key12": "26AEpj5rPnMN1oWCELkwmQ7W68m2XXezQhbVm3mqGmuXXgRgh2DFcGoqzpocRAbqPamj532yvyEs632jaRTBVcRA",
  "key13": "5EPayBfyKLzsu26W1288ZhH2Za3PN5RHRiUqXpGFwaTwSTAU9P9GajQMAn8QfLP3chAhvjsF5xgRV2czsrNHVfuy",
  "key14": "2XbZdXu6zgs5nCHUZcLf66LXeCsSTmitKCJAJKSfDAzR7uWjsvDaGxviCqCNqASiYZPAxrRaDSZx7divhjjFimXR",
  "key15": "5y6bHQD2zXS3r2zT55FL437jEu8qRH6g6Ge5rYrkbvyNBNJJgctJdw7mcFSnMyZocUYNUMT64RpamrPnVX6E574g",
  "key16": "4cXLMEmzXnGBJVeVWewD5dVKLU9G1GgB5FjJQzC2YnEnqA99Ujgftv3iXR3S9HzSjfRG3yuoKXCPDKN9jCrvf15J",
  "key17": "2qcA5G2swfbYhnnsEcfBcx5HkKPReQLQ5zTAUAUDj9uzWExXgRdpVzB1HX8uBnkUAFxL8LTXq3aUirhtjDshBU3k",
  "key18": "4j8oPAsKTz7UNkoq9nWQiXAAJ57ztq9Uy6c2DcFbKhyQwd15x2DAqafcEa1wPvDw4ity4wRr8q8rbgjTCL8kgXi3",
  "key19": "5TepXQJCS9sVvDQZVyBzGgpVRtDGwT8jH5u4gAbL65qPjppUw7aESM3mKEbenU3G1Kp6TffVtQP6ckXd5x6hXeXp",
  "key20": "7eM63LmLWPjPXHqAN9ZjjXNvhQ3cbofhTcrxHPatBeN1cTNPHSPea6P1FQXmBP4tQQ5JiPJNAFxht2LNAEy1vPn",
  "key21": "2cBF1KRBZboo37SbKrYMM6Vs91h2eraoK2uevtsFDGY5i8hB2aguCmUk79hb2RBDmNaiTQcMdmLq7ePc6wJwP3Cq",
  "key22": "2BZEXniUFJt6cS62rebSCr49njuAc494AMysLm3fhRz5vVjEqSpqHmAZdf4cWTYBxxRJYY9K2qdd6c7DRLjbJq4K",
  "key23": "z2Ct8fHfvmUjFw2n976X8RbjLGAuJpvR8yMXHEPCe2s8rYuptUHe7zVom1AoCWveJDswk4A2p459TmLAqqoCUFQ",
  "key24": "BowNW2DaDXJrU9VE98WEtQZZJ26Zig867kv7FH4sT13L4njsJtyhW3x63uyN8Ny5kEyqGWS7uaoyV2rNvPuV5p3",
  "key25": "65VPzFqdcog7DepPHeRpTkPX1hxrenKLAwVGBZaqrzyvyrYTrUphyJCuzGfCY2Bcuxa2Q9xkUHUiG9Hr1gAWwNR7",
  "key26": "53XKRiCVgrPWdgyjbGu8utmgxYrCtWNVC7jYayCpo6F71SUttwXmreUHLUUW8wCN12K7jZx7AwbHKUo8ZwsMifqb",
  "key27": "N6HK6ZjisXAmC5rcRZNiXjPCE3o1Jb3YFH8Yioe6RMN2xRgWaxZT7HrsmdE6r9AXwj2tccb9zvoPYd8Q3m15fgN",
  "key28": "3K4tUd6JCmNUrHS7dcV95BCbigYKyjXfoEbvVgqDMFxZQPmYtYmMsRTMpu2AryhMFbX3P7vzxkmzEwo1V1ommDZF",
  "key29": "CkqaZbHZLQq3SusSAQfNV1UK8t1jZWVCirBpU2rsmcq5QDuz8dn1XHq3VTYUEt1HPHUmL8oTi6ESUdbF52WJsbn",
  "key30": "yo6Lxv5Vsov7sbst6oboY6FNjBLP9CadPDCAt1ufz828swiXiNjR9oq9dsVFMyLE2Y4wEhhxY4HMwcJrTYozi2C",
  "key31": "5hSDr9h3EPovmcaKBP58usdvTAp8bWNZ3CJLv73yExyXnLmZbMHdfcbyFUic4imCHLJpeYBtGNzvJyfjn3bqpD6d",
  "key32": "2W3iycEQK7h32a4imXZ8gNP9YzkSWs8xoKEG3ajx68NRQpw4gB3ZtUpHD8Nwg4ngRr1NWwdRmj6BdqJo4NvweQGj",
  "key33": "3wyr4ZcSSNoaC7Ka536hRAyo3FqQ2V2KvuXLmsYH1ppwfdmj4gwSEtYNreFpmEr7y2xgoJybNejav7tDXGP5ngcB",
  "key34": "54xWoJgvDoJVt537xkrTVmAcoy71i6BX9gTu5w5ejU4FTQBLvru9zB17HXE1p8epg7Eyv3KZLNFBHAiVp46d61aR",
  "key35": "3ibo17hMkQVD7QHqCZtQejxYYvCA8Ah6Si2LoX5RCghwpQ6svUXkdC11wfG9cficsctTVsPYePBjJ8s7nqrL6sSE",
  "key36": "66CbCeR2nFoxTh4tBLaZc8J7MRMd4XgVFR5iDyJzrbwmBwv9uBqMAGSrGvNK22di1PXARjdBfAKRRpDNyY9AQx8m",
  "key37": "83JqSeo2AYZcifN6DeuBeriDzKij9e2EciXw7CZLY7BYdfaBoDmiWykuLhDTZwtnMt5UY4MFNdH7rBxhrxG9iht",
  "key38": "55haf3tzh9RDgMDMwFtnnSYDxNEK8JhT9FH7Cytpi93ZfjqBhFYdhL8pUjWGnRpCLiRWjwPVHDuU8QUTe9Y18A7Q",
  "key39": "5UevGDDikCb7nMZ7eUkkrKHwqNVZfEhH7Sw9BhatMTqVhXX322grKnC9N6nxFHFTKfuYBLCaCEFVCwmcztAzvoXp",
  "key40": "47FMYuUuZQQ6ZwHDZNsmim3Z164YqCtd4SinCndfNWu8f1Yd9twt9mo3zSbkr6peU75v4ZsNzo7m1CLZvtkRvgxm",
  "key41": "5WAXLf87j2WPCorBL34mmj96RQr5Aja3Ten4J21sEz5xEWVaKpMuJTVH814j4mdKLMjxq3SyDEEUutPZyB4K7DWo",
  "key42": "52q5BdeEwWKQs8CofWKqJdDGgUbSYA4md4QnCYniEVkN2xnEoBNUK2JLRopXS4T5bgJZJKCyRZ2sXQpUNac6Rtbc",
  "key43": "5qxv1nHJ6UnmydjCMtqi2mqLNnukENHqBaZWukpbpyxtUCsUAS51YiTBMDGDLJ23HaWxR5yG1AT1tYKm8WmGSgfQ"
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
