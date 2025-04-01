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
    "2WVG7M3xcL3VX3Sat8Z1hAbrRJ5qQtch2E93WgTN2D8tKV3rsuQLe71NeQDneHhNmpHqFGd1XGZmcVGH8FsYvMxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "643vxhdf2ujjpc9j3DhbEeK3ByxPEZZxgJPRUUMWkMPNigw3qY4SakifAXfA2hx1BvxHEHK1D3hsj1WfKGaaZLoe",
  "key1": "3oCJJUCLdds46RqrhBBrD7hvmMZxqTnMPrpiCBcbxcb8s7Po1f2SQNcrf6ojQc5p8A156RUBUZqAFWMAYNP1T3gA",
  "key2": "2CCp6TXjiTgU4hFetPbu2dWERASHEd41zEnqim2bCHbviKGrz6hjyg6qWePdoMNn1xwBJmN51aAUMtttFAzgLW9q",
  "key3": "5MWUMYy16CEm3YZkYckweTPbsHuFnSVjeSa39WAJsgJbjVWc1hk7uus56WCiuEmPVNomv2iY2Hqw4JPzQnGn8r7B",
  "key4": "2uwLLMbGTpLtyTTS3YbEtvgqz6JcXkFsmV5t4sgeCj32msxXdBHsNLv2kFoEheHzX8qUBAtmh611nxAAe3Cm1Z1r",
  "key5": "3QsGcrvzFepggEthnTXnGggbSira1F4AReJF8swLVSf5rCPDvDi6oXcXq743Ri8T7EHwwEbjiFV4XijN1ivf5yQU",
  "key6": "2JrAwraHRMeoCQxeCFfoMbUu36cGSRr6fvwDp2V8kjJ8vSBRmqSoSwSWZEZWrW1PsqV3QGvwxxtftkb3tMCgE3WE",
  "key7": "4zGGbVgonnRtDYKjbgZLk3ESCd33knkh1bfTbDBtojcPWsjsMGidJgGjp34hDWe3pKt6BgAiExSB47rQMHnVC85s",
  "key8": "5UB7dy84BFn5DCUgxDceciVwDqr7bM9w5N1NVZQ7jSFiAP9g57i8xGiskPMGDjNNmVvXLuTfvfrn63NhjYdN4vHq",
  "key9": "5RNoqzrrR4gS62j7uLqHBLoZosb1LLdoZdCU195WUvvbtMcgQeXTV4pvMpVabJQsa8pz1J3EAtoJNbNjVtFGPyij",
  "key10": "3uMcAHjvpJHKnUP5u14WHHyNkeWC8sRLfcqfxeMZTpMV4c1vEbxxzQGCpkTXcpZhGsYbU2DzukzLRSNG7kCFti23",
  "key11": "4qCk1X1eTTgwiDKW13zwukfrBBSKKb5iP5aXmbwYQaiHqkb1ERt52jt6xDAQ5oRxWHPk8w3n1Jf2NL8A1PV1bHwN",
  "key12": "Dnrm1aPae7akUfNWVbkDwSCBscLvVb9TUBRtLRf1QfMjg2TKBr4ixF11Lj7QdBwjsDaHpxQjh4vt3jQDmY4AEz7",
  "key13": "2r7NXNVgdmYJbAFG781gTrkkiF7kmRMrbeRxHYMHcrWkZsjT7386vFB2y67w5ELkHYGuvnyRJG4t8R4K8BUJrGAW",
  "key14": "4fQGvaTc9iSCnp9mjTwWU6azamEDh1BDkGcVSMohXLUhWXoG8ZktZ65eiPjxNMtikQ3tSWJ4V8Kx33nzz6fanmpA",
  "key15": "5UrTAqMqJ1y49GBL5tErg3bEvqEFeYNZcrS8funWyzaHv5WSDK1kiijD2xxfkCHSteCAw39NS9ASE6EfyQLtXYiU",
  "key16": "3MjRrefrsgigVdgX2jXovofi7VV143Hz8YpuNDkZTiFNKtKwhMRTBzZD7jgFP6awZuxbHg6SCdL9xniT56VHoP7r",
  "key17": "5y894adm7a81gyPRxe8gtSGDJ98gBpvipyeHi7VaJRNJJ4VX9VeoRzdTpna6zDHdGDUZLXitVERy5AhJbCKmu16j",
  "key18": "4M9jgqJygCcQJnSCr3m4hYeyCC5fhopUisvMH6NtXNrZpDZXqSuSBC9YbEM2vynr3Ko2P7Fdub9pptvNFRgKF8u4",
  "key19": "G2FbidMQew2uDfEUAAM7Mz5kTK2rJ9PbQewbGtZ854gbXZQDFL9VCPNgc3mMw5ayTLA128GV7UfN2PDo6S7U9JZ",
  "key20": "5QWWdpa95XdAm3m1fkB3J9ZpHVAn4xgRcFnmipwYuxosFYLA2RzcSb67u58vA1fgz5oxBv68364rwWZhJ4XHTzvC",
  "key21": "5ykLbe7QhTWkKR3kEFX6kBpHtMhctT1fjtkZX74bu51tELuCRdBuqWsEoVX86LfepHEF5Tq41NANAH3itJfmhxbX",
  "key22": "4oJ1xRh1wghjEDSNdy2WE3T2bmaixbdnMcAgHXFzXNpUefFeozAHUEEHSh5BgLuQ6hTXjz3tnTA5JN6yaHPnrsaX",
  "key23": "2kJiovbk4GBtvJo7soNGBschjbTYNLKQUwzLEAxZPK2NYZR4738G2fGTz86wiWM3tCwWJbaGpLokwND4kB5PXxQd",
  "key24": "4XW4iG9MtcLrGMb1dnawp36LL5anQECCp2dtj2Fep6JF7gLKqMvA2FEDxYsxRSyCo6xj12qkeGmGEgLNwpoAxVZU",
  "key25": "5E8L16FJmz21Jsfc73GZDpEfFLMkqg47eyd3JfHzNfGSMRiKjuBJ9ghaCGyD6AB7scdpXFJvT6TSRKQ9wRWK4kPG",
  "key26": "4qVp1U8JMDHqH9THmzVm1zXd4e1qre1adNzCLV8PGEQASzG2jWd8fX1EUWprbb3fSWaFLcUXykrxuwBDspttjuB2",
  "key27": "2hpgWRpsiaMdU2cPfnZ3iCcZxdFoGAKC7R9VYHiwJBeWRLdfHnA1u9r1R494SHeVvCp3MjxWdzvejwZoaw75GR7r",
  "key28": "4ywWXopT3vA3b1QZQkKg7L5HoFjrheXxkv7cLqd9mJ9UU3iDYYigHAXYXsnqLDZJvPQzeWq3HaLFhxbYzSmcEnd4",
  "key29": "3nv5UM2WFvmsWSZ8MopiXLrHMDFcS9LeReB1dUgLDS5qEw8AQ8Ar8zkjSmnrTAqHaSV97WqmhezJUiAM55LR4g3Z",
  "key30": "5KvQsisUEgjb7PhMQipCbGzH5ChWmG9kp766MrBve3aeY7QpPnFMuMbpaZmNaDPfg9riTu7ussM7ex4McWGqn1wV",
  "key31": "38hzGqHjWZ36xNMi3V2mJbWyDCqYCGpRVfzv4P183oA2XGGSZ6SHeGNFdQi7vNYYVs8tmQhAhg6WiB6f8qsNJQr3",
  "key32": "2RnwCmMieUq2dBKhDFFivcoCNwM6eYRcDTc8B6PWo4iCp3vTGaSMtpt15cEUKMo8sDvuMdY55Gp5EFMEYEzNA5F5",
  "key33": "3wgCddZHkcwMWKUoQG6tUmTKU7YB4ssYmmYFnXkyZDp8NSNYCh7jftL6Y2YRnjmytbdhDLXJMBY44FEh51wvknwn",
  "key34": "45BL59XhG8d5SF9uvaErggV1X7w6qc3vKdRHLvpCAk8VFWx76cKKSfdhy8owoRJZQ3mHcbRqij8AA2jStK6rpFph",
  "key35": "3MGjkXXfm2cPbaVDpZRiQ3ub2LYnUnsYo4KRuLhiyDY8nMGfiLCWYchv1WEKGAqDsHt2qv5SnV4UWPqn8ztgyYDM",
  "key36": "4Xg5dPQyhPnvQR89cXQ7Lhe8MoatfchSXrEmcoCMEDNPmyd3MMpvT6WBqnwG7CgScag5mivdBX4phJFTsWCW1r2e",
  "key37": "23KFugdh51eH9tEPDkvoUkZtyWy2anouwerTv2JMJZ3GibaVBz7CCoegkKZndtMj6n2LZNCetoid9ZcF563E3DfQ",
  "key38": "5TSe5SiQj3BiXnTZ5jFB1wqo1tS26DN4DPSnF37ugZ4dzHzZDBxQnJuW2PuMP21acbw4tSZsKS46fjTzchcVhUys",
  "key39": "64nD3ECPShebZw8E2aJ5qBxnqucXBUXUDvBZihpkCjaAhANrzWuznLVyrHwfcf22aR7QCj9G7acUoS4vwfk8XGsh",
  "key40": "5v5JVaobaTFxXfPWNtKoQ8RxuYcf6tipJAy7wkovoEXmM8HVNFvVKyhCjeSi99jh1cqUvMV6dD98UPr77ndfjiPg",
  "key41": "5xgec9VmkEaTFYEoZh7e15g7kHvyZZf1iFswW28NB9hgNGyEg4mF31HQvPeB9BPJ9zShJxZGppu1J14gvPY3TMTQ",
  "key42": "21hM5qwgx9mhi89ge7aqNzHg3hmiE48voFvE2SQHkiU6ePXoseMAwEFNNgBdpPfjRUDDQzq38xtCQqFBNn14kkfM",
  "key43": "q3YNoywKbU2HarMjr5GJoWRzQZ4bjQzzuFMrxRJKHAwULNnYfNsZp1znPZjMii2LtCqq5ToeQpiTZ3XA1BgaiiJ",
  "key44": "33doDd81vJWbNEEeGDZxfjsm3RmjucPzRiUoZt7QN3TVD6CrLE3ovvYVjHjrsaim9fKK3LMe8UHXzyivXx7fvtpR"
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
