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
    "angfk93NKXhmQsKct2pa2vYsH53AF1h71Ujha1MLiz5ZB9TfDo9xSF1Zku8Eeeg5DzzBHKbmk1FQyZqSLD7eJxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eiAvfxTnWRD192WoQn1TN8FLnk4NX4KXuc9hnvj4QVCCJXEUim467dFfU4pZRbqMk7ZXuzVRh2ECFQXVGp8xcLT",
  "key1": "4Ty8DVynDuM7w7GzEv1tC1NPEpRGoXbGoiQFoZZVR4QTh8zjckFCye1vRmh6NRzqXoqxxc3HZnAR7uBvJ2aUfAtH",
  "key2": "42u67UpvCVnV2SuEhWuK2hV2XF75RVthi7L8XzDo6fWFddvdB27zF6Ty57CDztGceq2n3wWgWWnSF4KMRzGoeXM3",
  "key3": "3o8zUQtPiSWNJUKoREvfmgkiCRVKT78gtX6Bz1e1tkKa6xj49fSmZoDi68Fm9zfbndQChUnjgcEwrWHnvUpb2AqV",
  "key4": "4qF1d7XqQcnU7abQ2nQA4pZQJ8dG36dNN2wmpb2wqZKNkxnkfbmSK121UbPzFi1hohgTksNGkGbV7vExviJrere9",
  "key5": "3unPGw6trerx8sujL5WrUXcLV5DDcBqoSJJvmSJkzTW9pkZ7c4vQBcaZSdbmo3bQ6CrJVNhrqvrhQr8u1G1mrmzS",
  "key6": "5hCMTe3Bw6gbQpRMZ6v5VcsuEGyGZsfqugrdyVcBif12dwZp1yw5wcs3TQ1wsXsgXG4HTk1d7qW9r42MVzGtEsZn",
  "key7": "2GiD7ekzpvYSknuX6YkAgq82GATjfvmREoE7F5NzTV2XzYwd2c38HqZNVLTEnH1Px9p5vGyK5VmAJ5dHdEjtPEuM",
  "key8": "2UFv5WnGY7aarxsH5Bh7wPoGwe9KKV14DV4F7mxQsF25zd3suH5oMk4CvPVHnM3mdBCGAjpEDw44Nh59Jm7PFDCx",
  "key9": "3H9v1eGeC5af2mXzf5HdkhvvWNi2Kg9u8mdYsw5anAEHZQiFcoRrRRBQVWoxe5jNnEtJopgmargTJjVYJRqeeP1c",
  "key10": "5XQbwgvy7kmgYq9zVWzCxYVEDpBAV3NVmnHtrWXVQKHo1cCJHZpRZaQQogeYCTZK4nKLpc1NuK6pTgyJWrbx1mzC",
  "key11": "4heiFJB8yJqbyHDuAUCKWymtSWje7QxfotUt3664mdDGajTnyiVJ8Zk3EZ8E4hQJ96xJkp2KX2vS9y5EFfJQ6V5x",
  "key12": "PHsHoME7zpxW2LcpSP4ck8p1f8u4u8rYPqUFk7FMQBt1UUMVtySbq3fscfotDx68DuZvqZMjVSk1BvWp6XgR8py",
  "key13": "3sNnZSCJdyG8t6kmW2uhKcLsz9Zg8rd1tDEz3KwJG3J4TSZ2PdgK9qYeE6Qyz2fJGaZssJuuoyycpaf3rGkxaqUq",
  "key14": "5kfshgYeGGzsAU5BftafPV5ZRE6Y5tUTyv9KLfy5SK9zSnggH2EUAq7ip3Q7bze14uBdG7BtqLmpJg23vZBrfRpb",
  "key15": "2Wbs746fpEVsRoyc9QfctgfpHvPcoApmgKnV4FGfQdAXGkfBgTtwPQ8ckHzzTBs3HhroLCM592Xcz4e2r3edSfsq",
  "key16": "cwSZhiz18AnXXy6XHhQpSBKkPwUz4ctXCBxiQjT92JvdqY5RKRgJ1qPzUbH964XV81p4FYpzGLPzkpxGkjWZyp1",
  "key17": "4zy4W8So57c2eHH5YXcoe3yrwemPA3JKWJTLpFxk97YUpZrHjWhs9sD95b2NUaSpDGFSmAifDvv52X8USud925tq",
  "key18": "JVeXJNQ56gFvyVwFBPENRXcp9KfJVE4rXXrspMa1p4ocMDaj2wunkZh4WbsXVP5AEa1juL2nQSDrvJD7BgRczsG",
  "key19": "4y1seMZSCquYUGHzzfzX8ySBeN2FNUbMuwu8AAxDLPgMzpwAX2Xvgf9Kf6J8KVSbSUAgmcZSwEnXx5BbZ884FxjA",
  "key20": "4TaN4hiJXtBz6dBrX5LHjTxuk84Sgob7tXBzhzT7Mp5iNtpR6FxGLQLp6hn5tVdYHYHtjo5YH5FEqT9oEbFTDyx8",
  "key21": "5pu6adKsLVZtvUqxS4fD19Y3qmDcZ4emXmG1ijcNxe8zq4v2CHwJ2FaoQvf3vBwXTTxigsCeaPsSjVAEiNVtxS2W",
  "key22": "pJZJqGYgJSHu352djgXhztZGPnD1q3fLEaBtjcLMULyN12vXe4CGJpX4nCZ66dvMh2yt2jdU7wk1cRyVcNeXt2C",
  "key23": "7iDAdABho4P6gmVgXKi2nb1Vd97gncRp7vrUeR74Rn8EkDtQsD3WKgaF1QKT2bHAjTdSSwuL2oG2HqVbYuUwHCo",
  "key24": "3fj5FLYe5RvRSUJ2yE44vt39sJo5xHpfoU6KPDGPpZvHr5Ms6eE5MfWzttoKzRLtsPkassVzhvh5ZE2xgM2Vz7Re",
  "key25": "x17MbcisSWTxQ7ZXogGwSKrytvHBXASiLecG6yjgGQMjwVB2CvKuFrTkSAcLVYrqw2GB2CkkR4j1u2QH1sMgumu",
  "key26": "45Jb5sWsj6stArYc9hCMQxY4etd1P7LR2cRRNZqhB12GtEBc6bd9kr9t1JMJMcspNGTLinB2vWePAoobKboe8cKd",
  "key27": "4MRYrwkjnKqKwaC9gfWTiy4C8og7QLqydSLeQ182WSpqc78r7EUTPgj7SX3DYihfYy1GDUpcNcErsivsuL2AmMyd",
  "key28": "3sq7DmkxcEm5gJ7i7EXq6nnyQctgUA9qQeCy6gvZFUoAfEqGo2USQJZ8QKLMEbcqb39x9uNYaxAqRC24b6eEFMfY",
  "key29": "4pn2MpVtRosamNYPt1hNnisR4nPfny1XpVuxe6ga1AFvZzNMs1W2y6qKRRxbrwEG1S59v77H3Uhm9Lot2pyu1uzZ",
  "key30": "2BxAbndN87murYraK3zXsoU6tsemdLmfi5cpoGC4FPUbXF6WahCp6B5sMfc8Ar2tj3Gqw7tPHDa3Mtw6wJxD78Va",
  "key31": "5eMxEAeXVCQaJCs828T87z1Ppm787sptH9wd27fGVgfa3gVGbAseRkFcMpTDzuS6FwCU8VsmGuvUjfgrzWvL66vi",
  "key32": "qkxdP6yUuVdS4oMKm3EdpCL4vzFMsNAPRDG4kngdAhXdxLHV9xFfnNyKiZSENGpmLQtwKnMvLTWpNgZ3uFpMsb2",
  "key33": "58DcePDkqMpJXJy7Zjhz31zELX75CgGzByVqCuJZWnszgEtfenCebwtfZA4FpXV6MPYbQvydc3QmvicWDrT5Sksu",
  "key34": "3EgwEuz95cF8LvdRz859vJ3ziUXopJE5YNFYVQUuYR5gH3HPV4ry2LdAjSc7cEHC9J4HeEXqgTn3HPtsG7pXrdbu",
  "key35": "41s5JQxLEDZrUxktfCTobADPKciPj1u5iALhA14i6AunqFJ7Dp5g7uvxQbtC28cLxd1b9bTzcmGz4jK2Kc6Uz2yL",
  "key36": "4KovGFFYCPiuWuG1pVSBLzdkKbzEwXyjHnSQU5hozYU3XcteFsTL1739cVebsymuniZUVVRoie63d55WbjJyqJS6",
  "key37": "3LEDptBKn3Tx8q7ws9yz9BfmZmfcKqsbHMzNm25QP3VJfwqWZ7GwLjXignCqabHyCqFHCmWevyCJaLnDx1T7Hats",
  "key38": "5CwakNWxNKjgwa7i6L6yAr6du2uWWzR2dFihjMgRGbFEgf6VXKUGJA2vpYTFhJGLpGj9sr9ghpwZP4bzKNoYGGVb",
  "key39": "2ES1whU3aFTFsaKaxn4xSpUoXJF6gAhyzD9Vta3HBMrYYYn2Wt9zkTpt9cGEsDeuNFmQ8VJBQVFyxhYcGQCQZUau",
  "key40": "SLnM4j3CaDmnD7FwNBu4eTYFGJtA9AJ2aj3fDEdXzoQgT3M254ZKaipVtwtdcd5gAcnh1ciNEG2taNa2qE31Vxr",
  "key41": "3jERGYSfWTrCUKwKcqRC9E3cQ6dTsUuuF4kRboS1Z3zsKPBHQj2zxnopub3KP3pR5ry25RhmgtFfPnL7AjwyxPpu",
  "key42": "5B1QwgLvRYrNvQK1CSVDxdhZo9asdgxmLKUSgygycKGoxktBMytDe7dA2dGzmNp4fZYoYyfWS3keuJsffjPhum6Y",
  "key43": "3gceoh2pfqEoMMsXNMuM4MgFt1Dj1ud2rtAEwxrHHSKE3adY8Tt7EXWk3CjWaCeu1AgYxPbCjx1rfZjPVRU6Anth",
  "key44": "24DnuvjXbzoSpcXBsAZvS22G3cV6snXKvbL9FDksrdx3rdPtbwqTNPuFbGFv9Nh8ZixNZa82CKjXMVKGDFcWvaqD",
  "key45": "3yJy8tYx26BBNHGbyo2n1HVWozXAzw6GM4RmqUGKRTqm5pc11Cq1eYurdEDyEf24up9F1pjfHNVZt6bTAJ7MNgob",
  "key46": "56W3Ncx6HfkHQojLUY3tK51qYb7ZyKvcRJrXuSBYcbkcHig1THuBiySeNn3r94EU7hkVhN8Jw8eNpfhrV8WBBEn4",
  "key47": "3rjZoB6sKXn9pH9NF2wWJEuPVsnRogbQyPLLbDdcPC9KDwpF1dJXsGoMwayjZyvg3XSaeX15XrPNwZDjJWf65hrJ"
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
