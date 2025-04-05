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
    "5ojtdmjZxutqBaXsg22P5sD39pEcvoXJ8W5kXmzyNkQKN6LEt2hgvUY9E1Ckke4nPudT72nQdy7EZPpjNiLhMgGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdtXjDSsgsMJ9fU9tmBuHQMJWBF11Ybp6dnMzyBXmRfG1GyAUytN6w1XwwxCjccfEFu44oEKc8hfimZ3i6KDXz4",
  "key1": "3eJRGCqFLBR3o4LMAY56CGNoq5fZD9e7LqPLL2PCRXfMXxcZLZuzJncGKYBVcan8GgZE6QZTPfmaaefHofXa5WTb",
  "key2": "4dqhExo4UksuerdtZSiqVt2tmQ3hvq88Wh75sQUCujUqG5xWoJiZYfL5mJEcYQ2PVdB52fkysEBTzKQfvuFbvh6X",
  "key3": "5zCmAxgwSANwdLdSwJT3dVnu1VWsRpfezcrKPm8B5T3ziM8cvsKK5X6e5bT1PmDwwZ2x1wtubeoNMoxkuHm7VHzA",
  "key4": "63HTLAmACeVTob5mur7s6YXS3NU3RktpUSD95Pt6TByEtFmAw1rUmpXURBLXeFVkbJnuz4jPzRwMgSqRKuQ1wPek",
  "key5": "3VQixPsUg1CbEwz6k1tgLF68VSvRuBctSAiLTscW8VNW38uB5TC3viNyJXXQrRWe2NwU3TgxeDvHwcEhgm5uDfjF",
  "key6": "44h8kwDVefEWuBw6QoAPRh1Csb6ZhJRNdVQM7fXVEQXaz3KkYDapNE9qMahkonbYntBrTsiAJxyhWpfytCtNJajf",
  "key7": "B13B3e3JLNsoGF8nEDLKRiVvg6cNtMQDeQa1zRUV1YjbESQdCBPqoTrDVMadtTrxb5LBVnZsCm4VkSRUxcvCwxV",
  "key8": "4udU2sXL2HzPeo74pjXAwz3Qar8WQGmngtYnPbX9P4YEXZVhW9Fv9RFusjZ9BzEEsByXfSTXZ1Tt794tBexwGmx4",
  "key9": "5euca11LWsjzoEKMdLjPYhFuSH4dL9pDm9JB9Fc1azz9MXEeWNbC4R4y13ZRciA2thJRdEXz9QBjoGWXZmf7iT86",
  "key10": "3SygWoVrWuH7V5EUQUZdsEHJdrTxnHq8BngKVAwUeJi4KCcp2BpwW8GCutGT9BPRE3ZfMAE3Nhx3pQCGs2EXtroT",
  "key11": "5CGoMmJPnPrPUtYhSfdd9WD8t353PZLmB284r6caEYYB3skoF1FGjchZEFeCvkoiZHDrd9mwcxxoRkammc9aipAj",
  "key12": "45CCH1b54gZfW5Xx9hQUPUE6Hy2yAzLegAikjT5TWZzX6v1afChoYiRByiTQmmKpJNST5C2u48LuHftv3ZJVuyEB",
  "key13": "62R8AGfTN9FkBXQQmQ9bjWVtTkQVTdXsNRn8A1aVV6t3jy7ZtT59Mkg3Ee5cvJLGPvgAQesZP2JZBbE8wYdjqA4o",
  "key14": "2oLtjaFiu4Sqesc2DKAgGHBNXwxD1wxcic6bxSk2i3o9QiSsvNUH6zd59zwct9f6xT87KiVY1yvcjQSBCnDtLnBG",
  "key15": "32Kxmb2boktiMHE6yXQ6PLxjVDPfCpnCPRvzjH77BzsHiwKoLLHmRYYToC2EH2MkgpeVYMeV4U49gHHdkp68EGMG",
  "key16": "3MQxudFnjsdUYK2MAw1fQZwpUZFNDc2pbGNRcW5uhxY1sCsokncHao4bvkRgcs7VLxaMS1RmhqxuKqJYKPae5Wze",
  "key17": "7n9CB7Vcy9kdXMjfhGDwpeVoxL8PbYw8bcqsf45DqYjngBQRNzzqbNuCRJEr79D7LXThJ9RsRt4QDKEcECk5v3j",
  "key18": "2grvW1aD1rVgeGVWsPN37vQDezJ8VSEmoMsfsRHxKte5eb3ixEVMoUtATgDG9Bwz7WGcHwYxM21GdwLazBMXTvb1",
  "key19": "4YLeasMXyJwvNhiJMN39tmrKTM2VghGsuYp4UUxsubJeT2d3eCgmMc3Cc5yDKuHbHEcc5aSThku3ZLcYoGgRysv2",
  "key20": "5ozSp6Et6vmKHUuTdaxFJ6vRLcUGSah5iEa5sqD5LF1nQnb5e1JbRuNAHejrEdrXw4qSgW2TdXcfAjmgGJKBtWaZ",
  "key21": "2sQZ1gds8EVVkxc3ybdbEFJd2EMRjUKuEznRzn2Gc39xGSVHw6nJ4eUrRj78DTohiexutcPhP99PmNhxsCXXdNx9",
  "key22": "2Lsu6EvoUiQWbMg7xkYQHz1m7egWaJTYL32QBJjmghcrhpsSLmzBzEuXDHiqAUKY3AGHSr3BhnjYhgM7ESrwHYXW",
  "key23": "4tTd1Pc4oYKrVQqasFqGKRum5SK5W7vwgyEJ6hUStDKuSTtcmBW1kb9yo3jDxUaRNi5CVEZxfeLd5b5g5161FWox",
  "key24": "37WrsTEW6WXauStPqJiYW1RR3H1gnboamcvdBsVwmkgdbJgPRYNYNZHZBMXLoUUeuNsfMHZ6XncDR9jXrpSQtooF",
  "key25": "4ajLMitM1MevcyM5rU9qEm732xj3VDuVPVbkkWXiDKsQQ1Hd1CRYhTVDJUFFadnDReeiEyYZN9ZUN4hqVuFQKBer",
  "key26": "3cbVWHLr25xxMY6zHydpfGD3NTXEqoeFFi1JKzuXUt53fi3fvnY4pCX29UxRuo87TDasGoFJHsZABV8uYYpFftoY",
  "key27": "2HnT7Q98WgYYJgw7wnqvnp8uXmEVeLiuXqmKa9Umv7EsuW8xPWamPAkTDxb86u82T6riXsrG2Uo5w8W5Sh26hPnE",
  "key28": "gMJfcqn7JtvdWvaHc6rBxAMoJ34PxZL63vAEpLLeoGFAyVbqQsxf87fpHYbmapoz6r2146ccd3ztUSowieuzv8z",
  "key29": "4GGLXqfjuSkAAEvUNbn9AqNPeAxrjMukL4GtLPKPSf9kFGYH5xLm2H2YaSVLS7DbvPmZQ4t4zU1ByvKogGzbmtWN",
  "key30": "5pXJF7jnkSiiusgM6kVZU6eywoDcAY26erL3NU2Zw3fThAnqmDuHhZPMmMeT3dCD3aUrJzkbDJf8fcWLeZbNn54q",
  "key31": "5P5C8kA3FKJ46X5NdxAyPBon7aFEabJKgyvB29hKn343CY26hbU9Edh3Y7MVmVi5NMazd8oxzjcXCMoYowEBLCDr",
  "key32": "QsyYvB4Y1xRfnnz4qpFgTKrpbDPR51kyfbzvLBRBBWxtB8TDizkGEks9Ne81iLnGudQJUGXvbns7apo5Ub7xHB7",
  "key33": "3NQ21ZwBN3E7pUwfpGbDdDeq1GfcVuG8Xj8TKRTxdwyy1KXBid9jmHjGFK2pgTraBW6GwvEmUQCzJE1BDpUSFrHA",
  "key34": "4xmQnyJCouFRE9VSMtWKGu1koURGXDDs8LqzK8XtX6jDvV4hjySHtbeAQfzvckQCEFE3Bc5qUby56Acp4xxca4xb",
  "key35": "3eFZMXkMNZ1BdzWJhgYgnv6Xm2Lf4wGUiad1T7UbqMVWRaxzXdUq7LVfNKqBuCpjZi5WU7nRLfCNv9HKpohXoenY",
  "key36": "4eH5FxpxQGCrwdWbt3gMbBokg9uHfhetxESN89axwH7uymb4xWp83LaNTbfQkD8bYNPpttqM4cLg2jnWuwp3fTrv",
  "key37": "4TshH7uLgFX4hNeVpWx1LEKtUmruybrauE1GfjYhnJ1F12sUJsAnVoiHxjXj1X324mSDMKakm8dz4hSXWJP9B6Mn",
  "key38": "55W374YKisW32uaAC3Y6ToB58ij6iLytVSu4VssK6puZ2AufjB7QVPvRSDCavSynQv2JBdomobugUmms3RnDpwu1",
  "key39": "ms4TsD4DSTMoD7Jag18RNVFnfmLNASAqGTbxzgejuGPPyxHZKf5WT64GomHW6Z4ZXnfkTTBdADT5C7cDPvb8XeD",
  "key40": "4KZ6kwsXrGdfUBMY4VYemDwCKcqQk6C55oGoJSQyQESjRuuCsgcGBHDitX2DdV1f8PZmW7cepfHxpEr9xNpTZvRZ",
  "key41": "5UZyH84jwD2bCWisf7u7R83g3kKvDfpKVxJvsAmeaajrN86KkYhHUayEjBVRvpyAN8EBUd2fRgpxcPTMgtMor36J",
  "key42": "rWRCk8145qJXUfYrtfMiMm3HY3uLZpGQvaLH7YGv9mXXCfJBFW4e593KVKzHoFcU7PjmJ3PbK36ZYsL7MVs5yME",
  "key43": "5GWj4xTThqntwwjnwuEZbwkjTDVq8jgMpptJbVnY4tXuXU637cPNe65912cRovSXLKbwY8HLi21wG5YmNKdPbFYS",
  "key44": "66JKoxH4ziQs4i2Gdixcee3sUWq3esVDjegA7SHDVdCiAvGZaiHhhDkGh1XCEPq3Ky56hBjq2FXnGsJFv5nCiLmA",
  "key45": "22jpFrkB51wmqzfShGfhiSdUBMcTPgxijFpmYWC3vjwfdurqymmhYoQm8VDEhgDL5gF2bo9sygQNEGgw6k4ov6uu",
  "key46": "2GAymmyS9Ei7gihFLLgfaLMAbfMZhkRaadjoReWprB276dgXgAzXAbCPAw2XEcjJ7rdi4XtKzjAjpTj7URNTgqUz",
  "key47": "7uPnrxGtxeyX3knZPzu8c7GTdinq11RtppVthvmZLxSyP3SJM5aJYytG2kmz4aKDSLfuC3VLBAJX8uxbvquLWX1",
  "key48": "262zc8W5mv4HfkneEs1phqEqeaUWdVTUtFaytScwwKwztLrLudHifzNk27XbyVzaEnaek7h3TNFMNsUbmQ4o9fGQ"
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
