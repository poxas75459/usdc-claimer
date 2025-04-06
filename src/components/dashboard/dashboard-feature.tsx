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
    "2pb59zjiURnoc3siUqaA9zsQjnh4kfi87aQYdZXkKVMQorJv5CbVk9UNGFKqMvKJRSgr7fNqHyBNctxE3rNEoWyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TYwVEFtqcgwmnZ1F1ueVmXYN3qn8tVgMgFa3u3LuBRQkxQn8UA3MmtUj65WM1yZ87iCa7cySxPfDy4ohdDUqW6k",
  "key1": "242daePFSSNNychzetTgsJpupBfsteUfLqcHmX8vV3QpHTBJRnPVC6DM7ayo9BLcoYBhCURoW6ywvD4c8a9e7Nfd",
  "key2": "3w3unNHxtFfxQLupiwbX9ZoCFgPiozgxxXT9zhViVurdn897jsJGjNf9B2HFwMZSr2EB4dKTFtNhocNrNCYREamt",
  "key3": "31syVFrXZzgayU9XaqrvgmVi1qTXH7myqAHs5N4PyXBCf6AYWAqwCCNpDjhhtZfindLjLKACDTGakQokeLKMsJdM",
  "key4": "5v25W91QyoMSV9Z9MU7fNET5izHHAFbXc12LNJruizukBbNqyHdQJCyraziArtHLx4YpGroHyDWSGoQh3fXcgnjg",
  "key5": "4napyTH875UJ5Fn6un1MT8CJBbwTCf2TLjMbAqFq4eQrEdqxFPCmXSj5QLGGCivYNF2nNVDdTNjbNbJAEmxnz3Up",
  "key6": "3fR6mhuD6LgRw2nnN2pJiqZx5R5bVn2XsnA5JoQeBxN78sWMaA6XJ5XGpTv8ApGvi2NDtDN7Z1r9Rho7Jp1MmMm4",
  "key7": "5mrHLsQf9LZaTpyT9WxAdxQf3TNyuYA6rWHB5FUp7vaL6xP5vPVZtyHrFyQDR1JEhAaeQsLFZuT5cxFEox8etmSG",
  "key8": "4Gz4PvyYvzHqbt6hEdyJwakGsAqTqZpEsmRy5kj6EyVxU365RSmh3PpaFpj2Ze2wdNZYU4PnNTQHHWw2hZSHhytQ",
  "key9": "2F5nKghECpzBR4xYhHZnyd3qYkSUVKmp8MPMoVjs4rqSqnvyKn2aw2eHiq7zfoiLDDuhwXBq3Ka2TCj7i2azyfhz",
  "key10": "sR6zsG1gsLuJY2APYpz1cnX6165w52DBRi7Sq82MTC7Xnb97uqmxqxfNQ9dLWCqsFWZkMh4MQZMSJRaN13uD9Xf",
  "key11": "5y8YLUvpMkSVREArRzsMRbPjuTp3GvdeFwLmJXo44D4EshWyB1XjgXYao3tExzzYBjGWhGDYCDFD6gYndfc3mAti",
  "key12": "2qZ6cubJyV7JyVe4szezKdH1JSrnasL2HCD46zwr45AupdQmYVxegcMDhy6ZoeR2uTZmENGjRuV9Lh3VdXKpj5K3",
  "key13": "tiUGdu7k6DFJQ2MYLcgZ4AsVAw1p36H9EhV2tipuq2YubMGf2yzg3JUM74qp94VCq4w4s5kSRCRCGR8tNy333zz",
  "key14": "5hxdiCtpsPu8ugGrtrLt54KiVEpEA1FcrMzMoPzxbchNnpwGBCPkaaHvt1CGdqFE1S7Mx4nhtw71jiQ9dTPZG9uK",
  "key15": "47ec9i7eVBCrhBfE4qCFqVRNt5WC5KSHQnYKbXcWz1EzZCJRFt6t6pZEYLTEmkHDMQo8UwqJJiynzKcN4vrhPewf",
  "key16": "24cpMDMPrKpCsCEhwZRgQYJYvitPCpcULqy9mLrcStjy1mVjTcDmXXhU8355pMwDsTFHBrh8q4ooTLD2BYZswvuF",
  "key17": "MauEnbgvwJ82EXLRrzYanfc7AwHoejME1E4tM5Md2FGw97mWsYcHJYvssi5WpHG4TkjqvxynwPch2JTKxcYF6eL",
  "key18": "2xjiqsFnmsrUwLVcB4NRrK63FyY9MezD1PjuFb837Hqku1VYiCQm2feZRdYdHjxXM7pwguDD2Gcazu5QL7u6F75H",
  "key19": "5jgHjtHpwHAbukRK7UCFcRJVMgshrM6Gw1NaKcXDazr6rLxCzU9WTUj6GJfYCSpmsBrNk7NpGebQBgoKr5UXKES6",
  "key20": "8FEqZudqDx5Q5yuuV7Gjy52tVRaBwxYdtBJ8GCmx2tcEXKWh4tkZRsqfouMJDTph4Qead9Gcp67vVUtUVBNykAv",
  "key21": "DJMc66UYE5bE93pVNyEaFobbuHeCsPwqyVeGCpm78C5JMkC28kZ1TjkFXHWutdxswrDNgrQr69PTmgjQAJwTKij",
  "key22": "2f5iEbGcD7BpxdiPtbxiQKrVhq8gcBtsdA2XBgrgXL5xER4nTDPLLNgKmyiB7d5WhVsWLVPd2zvJokc8LujpY2kC",
  "key23": "2CXuEgr339dqmymXCByYdPKHoYy698TufyV9oADukATAe6vVj4FyPVrH2PdG1DumTsSs2fahqEpnyyuV7WXZEN5X",
  "key24": "Vbag9A2jeJEnBooa317FyDs8eY2aa73FSFC8dF3xWW5Sp2gEoa2MueFQsyAe1XrM46Ty18G9KDYXh4Rf9XRVPMt",
  "key25": "4U8ZBjrbd9HJAfaeEpoDPuBEhMVfuQieaqGr5kXnRFSbSoGtXqQFAT7q5hLRebespLMEPMzVNs23QjhM9WfKNYhY",
  "key26": "5jioXDr7pzAcMwWMToAavauFEucZdAK3xb4GXtKiASCSvECfKGPteoN1wuhmkDDxe73BtA8QbkTsUDareQLejPZA",
  "key27": "5PB7aPceUu8LDGsMA1TQ4f2rWKNGdSf8nVm8uHfn6qEeygVkFgZa57NCe5xfYYw2f3Bwt98FSZqiEdgfDshdXTe2",
  "key28": "66Gh2rjqmj2nYVgS2Jb1VZVWNvFWEq1S6jbyhB7VX3EF7mkFP2h3fJcnuy68gvdoLZCW2tce5GzxLBKpdJ3PCnx4",
  "key29": "3Z5ZQEvbaqzpixc9NVp7tjK2JEJTWVtc2i5jzfAnMKPfTJBdSkbFeo2b3suLQyZQ7bJZr6Uvk4j9ULzdTAz7s4GZ",
  "key30": "P8hp5G38LjhhixQAgVVrhSmAMULDSnKLZ9W53VZGKrY5UbaaUyussY9fihtgCRvYCXYQALEyi8CSQzsiY7xZhtr",
  "key31": "6Eg9UKxCGa3vZT57uLj3XpY8FtkXAKQzvmnmznTzgHzKeLLrtEJsskD3bcP5iHqy3PdkoKqbPuSfnbh9BLVYW6J",
  "key32": "4dWynupHFWQ5Utee79KPTsR27xsbEPcsFnURAHEb4tpiLnAeKeDwmozJo3Hy5YSuFNZL4NEEBLq4UN9WxgMDaf5v",
  "key33": "538YkadDaY1fkXkpQ3JCwg8cWzJ9eFLfVHwHiTFvaeeci9iscY9ezAjyGsNzcYhtj7XSWvtMFKXp2xXv3LAbGECk",
  "key34": "31EZCEFmV9KPD6wnVvKw7tVToZTV1dqdn5ZCuqNa429o6apE4qAa44y3wjnmMCa7fEWhst5ahdVkqvpYjxAZNYqE",
  "key35": "2ARmSr3Woq4E1q5aokLkQzBBLzAURMhxDLuEn2aMZgTjm9ix9cS9d11mmSiRigfNNjvCMy9DoeeZ2AP5N1zodgGj",
  "key36": "4WHbfJ2HU6QhkjcFsR6LZC8kqGW2uQMwFKyXX1BDkqxkPWdEQM4M43Bc56e5tGVnA5bqGrurEGPW6W7TtqhYimLs",
  "key37": "5F2471uRs8ugURgQadyMeTu3LCBb8YUgjjCdhYoAUD3NEeE3M68cjkheQrfLTUp5Fdknby9krASKpYZbngjVBcXb",
  "key38": "JMNeTeyN35fZUcEH9FnPdYLuNCo8a1DxPCR5GSkSxty8o23K5eRah3cwrUBRpjzHphUCDxXFG7FWyVXxqovdpio",
  "key39": "kYR7MFA6atVhWvEB1uSDsqKeB5HbSSq3zRH8GUL8T74Z3EjxW8qpy2KThy5T5h2GErwsdyxmn7tGYJkW1V1jfrM",
  "key40": "2ESLEmvVepCtAdCx6AVKt6BMoLe3bkUVQ8UGgx3boxaggs3dPA2jrEuYDSxRZC1zhjEzxzNyUwHyf5vmHyqCvDSF",
  "key41": "4uJAZ79bE1Q29LE77iBnzByvPBec17xVoVLdgsj6CPctEhtFxhPhXY6UkZ1L9WFkwpMUD8wPXTPR8uw52NHD8Z36",
  "key42": "5yhPcJSX7TAncqLzGpYqtJLPvDchzB37tEDjXxkZNDsSzWagLQoudtYGfukzMZHtTuMJnptyiBoR5gqdPMwgm329",
  "key43": "2QeQwoKMQdiHyCGwxt9CXybgaAp4DnLbsw9bWykjR2gqLjbLjimRn6oN6XZQKJ4CakvCZREiWBuNgpDdPe2xD3ah",
  "key44": "5pHoYUjHDmCdLvohHxR1VAH2haqSwnUGEGk5jtp4RojUB5N5y4n2hTxXarTMLP1ogD1BW9PAqFK7gQN2ZZuJwe7e",
  "key45": "uqHw1jfirBm5cJFKNLRx5Z6Kk6zQRN9T3BgbCESybDgoUebXGqLhKDS5Fk6UWwHumoMoPkMWyTEycJa6d2uNVSS"
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
