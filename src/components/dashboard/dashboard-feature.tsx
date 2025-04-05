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
    "3ZLp4LiuDb1duZFLMpye6rSyXjKD5SB6RKyT4UhLXRZT5xM6vJvyc5G5ewQsbDXY3R731FvK9yyMKfiv4u2YuTmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3vub6VwzBQeB5oALvNz3fg9b7BA86P1m8gUQ9D2dJdDiWdSjSL5ubU3RY8yinx9ZzR13NewACRVC336M8pdKYP",
  "key1": "4ahKTai8aydVoJ7VL7Srg8fpTR598nhtpARBgrZrD2BmZtHLL477paucrpKs13w4WT2YJbWD2Wkur119QNTHjXnX",
  "key2": "2DZs6yLKFM44KKAVr3xpBPuRQVhgtmLV2nfAR44Emv68bMamkCpxWduY5Pq3cUrBEmkr9uUvC9ZBgfjyhUDiq9Lw",
  "key3": "euuncS15kGY1z6fhPWNGGbJeYXndWx6VyHreAeYFG6HbdgtiL4RbNunQe9X7zL9GhtTQiLLashe7RC6YVcbUhsh",
  "key4": "4CGmopXLAetCgVp3hUEprggbtye7eBtvfjemZAgrPfadzE1esswLdR7PEB5PmHdNaxkzj1vRLL94MXy88YYswkQH",
  "key5": "a3oS36MW5rcg2Hhpn9yQvPbe5pKyThxHEtmyTqUwYx5i75BZEy13ByMwyPHPYVVCok1eCaTTDS4qLJEVRkuggN3",
  "key6": "48wzPLW4Bp9C336JfKN9kS59zxp5CCuZBrtZG2qUDDfNV7sWqBU66nMQXJ88n4WYLVCwKRh53MDJsmBviracdE2N",
  "key7": "5STHUKeTyhyrEXT3uCdDnVEe5dSd5t2sNQPc7Y75gVJBzsuwsUceQqnAtbAVVHGbiy6ksUKQFMtgRCu5JAU7hdM2",
  "key8": "4E5iXHGZPJJPj4J1mWZcrZZxoRFe6GX3XzQuuLAwNtXX9qUPUvKjKuTYV8WBZHXfgbAZDs9yq6vpdiNmTj2NopHB",
  "key9": "Qk3dXosqunsGTUXvxHmErmiCUcnKVc3HxuLiQVfTfyTEsVgdUSkwrnw4DRL869PoYoroNZtmCgGZb4ksUE9dgmb",
  "key10": "qkUqKJ9rKVkv7iDZBD4YqsQpnBYjAeuFL5fAC8WJHPzEHjJJy8viorgb4EQjJDaVc65JXah53cKfTnDSmxnaZMT",
  "key11": "4GWFpJ5rr7QU96UGznFaoXvpQUjGKW5rhcn86DA86gQ7dWXGq4d6CjvpRySqjjaMKqCoPMB9rZN2LMovA9uRhk7x",
  "key12": "4DxGVXQVhztixYnSUDWKFTNFMTjW4GWznZPtaYX7ZBYdFooLbB4KbZnaQvDPx4jRbD7GvLmx22698tq9q2aCqM8i",
  "key13": "4h2hMbjpBHXrnkcoZizBVnn814RrDrVv1i7tx3VWSkyDQjLetNhqgmLn7n4rXHzYcwdCDn9f9BAbDhxVPsirT4Jx",
  "key14": "5MxrTZy2d1wgq1kJr5y53BLpK6xJNnidWEm3jnz5KA6Xc4iAF9oa8Zqw5VvLTusXaE6UZ4TckTutDzKGTrwPaUV",
  "key15": "4FZcPNDCpmw2GDBxVdSB6wirBzVpcQ2Y8MG8VsBNBNpsLtbn12CSBVNLPJT3AZMT7MkjctuoxpFJ4eog3qsWRMxC",
  "key16": "4iYEFMatFJmTxNbG53oGzs5NUZVoq59LPfYPYc4PfewSi4ebZuTh5JsooczR1FrHLekauSUor7Z7ycPjGKiZtMW2",
  "key17": "ZWjixcr22nyVPx1oDWSbuFBU7TkWEP5VENgpMDmWSq1UW4CZzHbsCqvrsuMfrJt6gNJFEmAWfFhZ41iq1r2M3Hb",
  "key18": "24c4AL6199uHt7rMMduTxq5GrSvRW8FKM8TAhJg5MSHj954mYEnouj8HNfXiQqfGBMHQjAqoSijsUXF49zGLVCL8",
  "key19": "66TgQfosvZtQNPpfHMKbpAdW4mSSweEMu8PEdKkHnA2TV6hXiKhgMxw2gnbstTfQBdSNHwB2Q9PU2EKnAENxPDcX",
  "key20": "2eJg5dvben2ToeQ5bjqsSV8tHLJC8aJBTeHLGqoG5vyP1HqBUyTrXE4ZVJLTZUef557wm5QDxH4GSS7rDW7Y8rjs",
  "key21": "dpHD7CBVbrCk8w9VqGudCP9NwMpbsPdGRSuqXjtzueC3p3zLQ3U6A8nR7A7bLs6oZbehkSC7fPUUCjq1mS2BN6b",
  "key22": "2bpPWGRx11nQrpTBVYNk6n3V4MGA6nDaGJ7QadTCpYefcyhuenUc8pnarFgXgwa98RSXYpxzD2qSt2Vf3GRmUbdF",
  "key23": "3N1HXcgdEYiH3c9LYvhJxUrf5MSVrRkqH8ht4aDE9XnkvnZANN8QKPu8sHGggBr6At47ixkEFkvjJR3dmvAquNHE",
  "key24": "4vz7aaVcLnV5NPmBgKR5AibxRSN8Nxc2WyVsC8WDjVGBRhidrXMG2tdyTZidPXmDWehxN6ArfCLFDj9p3FELwWUj",
  "key25": "4yqPqD5C4iMfvT4peqVYfEKf3wpVW5MSYaz5bwZZYgjkEhSVZdXNFwYPMb6Kq8QR8JKQKNXTDggy7M2NWD34sT5r",
  "key26": "rBjbnRkBnoi3HbEuFKAVZdy8AcBef7Yg3CbnJGsd8RBVMgzLGnSGNF6dFiRV51YwaM1GMPXR7CgmiGi34BFc7Vz",
  "key27": "5YAPkXsA8LvHLJc1kZm6yL3Q1gCJwnXDELFLJsbRXYJc753NLXHczXvsDWY5B8A6ZuxxHrVijc16W1dfdF1T3CGb",
  "key28": "3BZPADqyDNmJ2iPA6Ps1thsXDkySNn2Jwa7iSXSFStVS5DdtVG9RmtqurMKmS3TzCa5QavhZ9Ge4U5jxAQBdFnRD",
  "key29": "5qami7nU9XGEVFgBFwtDhenR9p5tJ2PsPbw1Ur7cCBhzmHrKMhnzNLWx4dV6KbcwVXLpNtwA2PbF65QmaiBUkfWx",
  "key30": "64cjkdAZ7qZzD53KNYdLWKF4T5PwpAzo6GZ48hCYEW3e1iKrN86gTNbg6c89wmHnbEVuhfv9TT5sQRsw4xHactoZ",
  "key31": "58yvWsVpXj6gUQuDLkaDb7kGpdkEze3hwR6CuT4mp2WbMJ64SEmi36tyMY7fa15T713ajW1u814b4ZXzgsjc4omW",
  "key32": "4JLtcAT8t8nTPKF9xjvPxWp9hLompAYQrXmGJTzZjg5J4gJqex4XEGkYmkAJFpdKdGsXArbUobEi27UY9MTEBUs8",
  "key33": "2Rjn6CbTYRNKb9iaNT1x47MeswuZ9Y6vTEifLV7U8en7PkqjUQbBif28gZqJWEp4PNZjjavt3Xz3eoaSr28KY8xb",
  "key34": "WNoCKWMkaZ7HyS731x8ByhajRw6CtEn5iiby1da7CaYVhfWnNXo9tLea4daRsLgJUVLt1btwwBY2opNq4yB9BeH",
  "key35": "4YA1snFd6kufjkFUojmzvVkKya57AvHrtB6AzmMCXNAbEHyDydYxqituKK12UBWzmK7kER36JAVGiwGnYsQXJg76",
  "key36": "64uMjqsM8QdgDsknuL2iV1AaaW8WZAUjzRvpRDEqs2nRkCwiFFhjN7wSPKtEeu5BEXtge3bqnp6uN76TadfSG9xM",
  "key37": "3aBCumcv3ueA3jCGy6Nc7RHrLZbqrfML5hYRjEc8keJouqK4qj2SpBgpND8YPfFfghuKqZigBw2vKD3f3mgZmyEu",
  "key38": "2kJtSR1EvMoKj1RunsuGFWA8rKVWbcyegJfurpiSAMRkd8sJydTnArjjH3h32Zpyv7uvY3iid5dnitigmTjyhpW8",
  "key39": "5cHf47HjR8gDCp3aJX8jWhnsFEBk5Jg3YKb151Tfc5wf1yCoHNcPqAVXmVFNG8if2WoyKaRQPp6AzWVCHw5GiA2q",
  "key40": "5yZcP2yVdyReLPV9nEAekQe2qrzWhChfR41B7rv8FUgtrjV3ytZMK5jjuQhJ8dRo9yd7rRTav9i12JgM8iVaxmqn"
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
