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
    "2urPE7832eWGuxU7sPM8kBonGUzdmVAENoUESLMJ1H28nWHA1eUcRsaekCd1JXVojt99MYBnVT9VMZF9ssyHtjGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fFskmCcapVfMNWBFUMJPNdxXVAYTkC2V3v68xesVewvTPiJn4iDgcZ2vFUMR8dXU6TJ378eLgD2RmjhzLbHmqL8",
  "key1": "4m6LUThYDfnwqXSv2Y9VErG7cU8WqbJav1eYDjUCC8guWXoxvxAzeLpecDcoVYsuPzjnvEsCsZ5rXy4UnsN1pH6Z",
  "key2": "5KJGKNJ4UZC8aTD9K7UjwwcBVXLdTqRA8eQFoLK23LRoCiXwFW25padQMpvaH76JV3JQMF8yp9fXJpxrd5kDwH3p",
  "key3": "u1uo6HVssczGWdA6cRi9PBSrfpaTKDfmAhwHDbov9VWLhxwhYV7CYwz7cgdDUsiD7LsXzRPU3vC98ZuS5xFMYah",
  "key4": "4e8xFvedxLHhjYAjgoNrcLMiBPCK6HWr6DEE1wbP9WoAVRFpTAyv8urpfoxdv6KxR71nL8GG3s5pFTSUYMSAvKh1",
  "key5": "4dq6sAbJ5ygyzmcKoZsmtvhRttMnVwukfzbBjP6Whh3t6FN51gUTdjq4Q8FVwuvQ2AJJqRrXf32r3jQgfBfCjDMY",
  "key6": "3H2YjC3Fvj9YW3r5qod5nrBVNbYB1yzDAJKwWVqE8eqrzhKVDVCyHHReV53CDydUNpA2y6LSgfUoGGSbSVsUhfFL",
  "key7": "5Vj8hsc5jJ2aCCLVLoDPUQRFLxbPWW1CHVT8Siyt6GJme4Znhv6D1QYg5pNry9arY4ZBskjzZVfnv3YGSZBKAGzM",
  "key8": "2DDzLJbqjc5jLE3rPL46A9NtRtwBTqtHswmgF8Hx4eYgWApxw4sSbLBymg4k9TjoDvSjVN4kaQ49MUg3gChXVUH9",
  "key9": "3UVPpLoHQrgzDs6zFq6KKhTYdqTiptTZ518mDY9tuMqWWyc275mdRjwbRnCjWNmwYKBXoSq1rqGGuQf2ftw2G9hG",
  "key10": "4P4eFncxVT8jSrMiS1tWbBoYXpc6447mdf14FRnuE5b8hDLbiDzw4WHrFbs4eka93SrxbVfPPyfiginhi3sD1ppe",
  "key11": "5wDGVvKRuj3oinTAKqSKEY4KDPUKHaqBn3spaD1iUFor7hUhftKxNdoivFC1wGu1CfEA2NGXW3mnKxC8bzHcpLq2",
  "key12": "4UUbfMYKVNFm1sQ3xWLy5K7xh3CZe8ySrBGQzhpfp2jQBibRhwBqAKKh5pHAfAKxgDdp7Deggb2aFxu5iQQKMA8K",
  "key13": "5aq22vN8bQP9MydD763DdStFkbUcsr9YpAcsKJccTEGUVCfv6jN8qE8NjjhSrpcKutRX3j3z4xhgb3HbAvsrRLkN",
  "key14": "4iX8QnGWxkym37mdbyuyuGM5WoHSYVknnSByp7ud6Vvd2QKtToJnHFZMyfsYPHYkKDKWJ1F1FWmBGjcvtqPDY74n",
  "key15": "F2vRCFZpiiCunkYuxGCp14ZedWrxecS3g3z4kGXzToAJtFLzHvYMCn4B4XriycgAq6CmBsrvrKssNzNrV4yHazG",
  "key16": "2QDvhqA2ADcfjBx83CxdFinhDVNcyxzRuPaNuUxrCwNCXtPVBkrEoodXFK1xeenmBEEsP9QWbUEeq2ywLhYHVGg2",
  "key17": "35TS3Y6nPni3nFUbjQBi2XrAGokjfUaH7bkC4FFyRV7DAKbD3zdAYJ6m18guvfVtXKiF841bnQhr46iepUfqhjVg",
  "key18": "58DQhCGmoNm3fo3pWqxqGQheVU5UUUvwsLWVGoYbMPf5LqxMxdQjfCUgFRkFwqWqujZRBM5mZ3BrCszGcoqjADds",
  "key19": "4Hj6WXHR5JkRmiF2dbQSBw8fxeRN9kJ65PQ23v4v8isbbXyWkh9DTfjwHkH2E7sFP98JuzdTSEz4SGRGRrzqYExA",
  "key20": "GNPPGT3YcB93x57BbWmSu9JXM5KmTJS8jx4XMyr9quuWdvtrMuQdC6FjRTcYMgiWKzpLWBurHRmC6sh2JJnq1nr",
  "key21": "Jq5bSpZr3msmmwza24MDgDNo33T2hZzsEbPUbBL6gYA3pgwdFNPQKCcEQ6UxMzkEKfWwwtgRbfhnDSpL2TYkd8B",
  "key22": "5w92KSGh3a53p5iskbd2zWB7RAANGtvVuunpJDGC1CLNCMfv7cwHhxRcNjaBLXMh9CiAw9U3ANZJHbWbGkQdwX4q",
  "key23": "2BCGDghhPpKkc9rvvF9Vc255Gc9igavT53J1dT6uLc1KeBk8vJLzZ2S58FSzsd3od4h7ENsrAcDurKZHB38xs3o4",
  "key24": "LRrb2UaPpHrRNS675PzVECaYqNoTtAMbzHgFu8HDEEq1NWWPJmmWhzGxSp4yQt4Y6TtgzTwCL2EssqE5AwZzraL",
  "key25": "4n6og3tZTkufZgVvH9XDxTpbaabkftKtdd3mbxjNmsxtfv27nJ5ddzbUVig3NQLbxWTAsfqA6Y7aoEv9P55TbG5H",
  "key26": "5YAYxLgiJryJ8ZVjHPr3LGhFKFswH5qk9N4xDrke6gbZF5eQEWw19NBwFWg1RTgtrqKJpvn9HVkmBe5utxpy2wQ",
  "key27": "23J8atWYeDokHe6dQeGx8W7viqHweW4XtPbwi1BEo8mxinChsygbhXqJ7M5gbDEp6KCaW9xMPV7PrPrL6aUSj7Px",
  "key28": "3PzzWB7QxYf9v7dkzGREXmeoRs2qmceyuspT8yB4129mnK5jhHqz3LuQa4xCDX5osuFeyDiXWP9aPvFpXcHM8kCh",
  "key29": "4H5hiZZHaPyT6iTrF61ND4FiPbqvSHziN5FeHepUyVN9gKeWrDRfyJteJQXKjDqXmkVa5vDuCJtVnFWp1xNvu8ks",
  "key30": "2CmBsVoAtiVcM1ybCS7o3qah1dfxkT2RLJVexh11DJ9toeozhfpTJJCxEiXt1kTUBCtpjVCyQK69jkzcaFY2wmKw",
  "key31": "3tTyaptEAmWNzXXcwgsdW8SC36UexrwNy9BdFLL6q1VQ7DKqqiiwdK1CKLkeY15f8fdWRFUnBvPuEMTiRNxf8jnB",
  "key32": "2hPGTGXM9vqvDkiZuAy6GTcQZNdjp3oJZs4HUSySqvd9jxG44SB3SvGBT6PLJmAbvauywkfvUMidANq3hQ7tsK1a",
  "key33": "58rnygtSE4zS9MQ7755jWdrPJksytX7MctNLvBQjpJusRorf5kxcTVHJmCoYPUyuDP1MXtwdmuxhDYsqpx1sC5mN",
  "key34": "4th6RVmU59vdquvZ29UpX15Veh84CzJoPbnKVpf6G9eugUKR6hUFnFhXfGfNWW1BnydLpJCBWZ25Qg43xB3sCHVu",
  "key35": "3BbYeLMs126dbSAt1d7qfMYor7m8oZXA375L6Ntd97tZEpqrjWKYfKeowS23BDcE9GEhZ4e9Dd6h6Tb7ZegwfB2K",
  "key36": "4Z8iTSHhBLTRHUdiLpGegkhFBrnkm3T5bEeyGXaAA1v7dzB3i8ZHoh7UWC3TyWDXRfZEabUh35VecACz8XRHeytA",
  "key37": "5pQoyeWsvzVwt1Fgqr8eGGTpx6miDgoCF5SgwcSCGPpS6bsiGTYxvKxqbwyyJ2p2wT2Ru4WoC9WkzThCiwkEMQW4",
  "key38": "5viXpffrJBXdbB5ThJ2wxrYcmsmV5tqTvHdm7kR7xFLY86YVP9fWyV9TPLLuLBGp5Mfj7dYC4tLoYEk2nBqCyXpn",
  "key39": "hGFk77NnVGjC1tAp5iB6SJVMXfD1SSkjDrHWWjRRSfFgMqAKEqTLuLdbM6ne5r8mvKb41DunYev8oc6hVV6fkVz",
  "key40": "2eG2PJaF4MtDZpmysRBcdPEwbHPyqXgoWpS8NkzQ6QiMzmAmn9zp48b614v9Lu1nqEdrFwPtQNW77mM8iHUpQGU3",
  "key41": "5XXqqSV8CZwUAaMULGQ79Wsd138GGnR1mfRNHmr49MewaTZPcaujcLZgVP2ZLyejC111Y2TCp9cS12mpXAmYN5Hf"
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
