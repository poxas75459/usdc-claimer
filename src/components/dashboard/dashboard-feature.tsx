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
    "2jeSQn2pf5MEoSoukyneAXoEhmev8hBavctjgKpXdwJdWwSMpLqUdgNxdHME8xQzgj3GjtgeXGudtgiQsU6VsN6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vih86g4Z5NXcDVrY8mn4V8KZaSZSrthpjMVEg1i7kz3kJkwuHfnTcBQ4JxLzZpyKxCWUrw3eFKdG2KXVN7YV8ec",
  "key1": "4TzCwLGst3J2GYq3UcAFvZcZHL2iZHNFgJiFon2qQUSnvx6kWjV2ZfqJPj5fUiPVa9k3kAm2pGasGCuYJCVDJFie",
  "key2": "2ju67m2fE8bfvLHCgMEe5KWw13qZV3qKByLtziHg5sfsXbG6e6XdaMd4zrZ5KToNJbMVgAUC6kR4nmzxiRyE7VT1",
  "key3": "5MVWEMk6aNwGQ7mBhcNdZRdEfMMo7Z1RgpyCBNNdmMC3qw3Rw5tPfpzmqYFqPerYMM1peaUuqEEuaUpdjcxvncnE",
  "key4": "GFktyBPTADyriQZ57AwHqG2oRqgChJENmGrXTH32bgszEiRaheYzQLQSRraZzKb4NHya7VSSq5NAhR9nvcxMgvS",
  "key5": "49GRmXceqhtJ5gPTgc4KFxMKyKhttqaZgR3C6BBrgmvVBS8mwmX82G4VcYZPHLtre4SddgdMiXw3f4RG6GQ9VnYv",
  "key6": "3waRazUhoaG2S8ERJHjdQodWmvcJUzAZkk1cY2zRZjXtMeKjikB8tcPwJUD4SRYkpNxgjPUU3ArAT3McDsBhQBGK",
  "key7": "5Qb9E22n8cLmMmk4Asc5g2RgnLFaJ71g94Q36oJX9uG4WsXjtQYivjTsFSawdGPdTamM8gWcBYH13FM6dqayXJBR",
  "key8": "2N7JthLJ5rroXfgKwfzEH3wDagrRCfTZe6TDuHDnk1FJeaRHPFuKZc1LftXTYJTdNcMhmLgfy9WtHJvZkMK47h3P",
  "key9": "2qcKoTgVetFbTmYsQhdkQqkDRN6Xjekk97ys5mxuy6oFGJfznB3xp8obaaDV8L8ovZC8bhm6eSybuovoBSnj2VxL",
  "key10": "3WtKjnmnGZpd9rrLnkyXfuduUxeSHdombNPhtatJrddAzPT7FGEWPBj6o37S5DLj4xB9PgRh7ECT3GpzRLydffHA",
  "key11": "xnbFg7jdDPoGpMRvJyVD9Gkc1Vej23gKSpecde2Y2gz7nke3fB99XEF4Sr8nqLhNQvhXJsk28oC2eSnyjTddYa2",
  "key12": "2dgLFKUnq6YsezVsN99Jr3adGDMHJxhNvXGCKHEZSvad5gQp9XnMjD3rCA47eR6THJq46xhazQtVbKc4UB8a9LbQ",
  "key13": "5Pagt6PtkAnaNsL68vo9vNZC7RJ7bizaRJM8V9XHZaRYSHJddhWpB2iwJhieHoWJN4dPDkDexMYGFabxmtciEcsy",
  "key14": "Vbw3nHcLYngEyPj5sUFzHqRQJBdKDoAoktiVrQHKPJmy6YknGHwJDYYcGuHAbQZEbBay34F5Hz95c6Ux76vn8q4",
  "key15": "3oxDwXRZsDg7BaMBcNs3EMoSsX7EbDQSVD6cLMH8q8Az21on9RUQzrrPQ7jGnHTMdKTxiWoF7rC2p4QHLYxz1YXq",
  "key16": "Tky4Zy53cRMijgmQ5URWjs6kbd8d1f7vbzvHB9CjCUALk195BMytvQpbEaqY2vZvydAvsYRaXMhtn7fcTmyZDQZ",
  "key17": "2H5ZhJuh8AA9bhtio9RsNZPKHBjNZKSNAW7RKj3cwR7jfPLts2CtbScx7VSheJmDpyMsUK1fibgjFs9mTk2WdVYX",
  "key18": "4xDC8eMJVZmLy2nkdKijB8ixdNANZk83JXykSvh6iFMMY9zhZ75YUDqHfeFDmv6ipYgxMTh6VGYPaogSAm3bnRb4",
  "key19": "2g68cq1iAoPXHKYcNSNQHnGq3GeQ9zpi2n58Nv6LVPU8TQ5uVfJix1YVMHVZugQUC6j8KZgubwaQtdhWDH79NVVM",
  "key20": "tA3XjK32ocQUBp2xo4dDaRFyeRVT9LoJsjm46SdLGrnvANW2AN3TK1JZFhULpTUYN61m5WTbi3b3aig8g9YjJW3",
  "key21": "myJs2YLnogMWNYrGRRCEJ5xXEnWgb7YGqytaNdibcJfoKdFX4CwWNZHR33VAxTitQBevQ57YDkzSXBudMVw4ZgG",
  "key22": "3wamPxzyP1QWj8RgMN8qQnbaiE5mksNVjkgnBniMpDpTBv4sfCcpdoc2QrSvkfRDwEdTWBjrouFG3iyAfdmo3ypx",
  "key23": "241d63iHJ942SW4bZW9zK2rxQNLeSHqfpGt18tZGupFLPqDrxyJBGUpkP1cSqmQk8rhPviLBHDLf7WSKM1px5g6B",
  "key24": "qAnC666dQxEVSzE3m1yabwEKTwmygr8qcdPTVke3gBFVyJzvapMdqpQNv3qeFSnzrYYogsQWpAG9yvHwCiRgAoL",
  "key25": "3DBt9Nj4VAL3Z2wqg7GDQ78FU4Nen5seZZoCRQrLvw8Tyj3UabTFxwpzVhsdMxZZdGXR9xDHBk9J1GqtvTtwKQga",
  "key26": "3dwzpUwrUrwJfmRQxBzeeVFGT9Shgx2ZR5KXn4RYKMfDopre1DbWkHcUFnxA6gtMw1DoRmSNXVMeM4tQhdeqLGUK",
  "key27": "53kdaA5RhXEec7oi1NHx4WbxTnyZfBHUAC8DAQ8MvWTtTsQhiBeT16yxr2GHCUzW6GWKvZZZBsyf5sHqX92KMXBH",
  "key28": "4mUdvAoBqLw1iqbpXuB7LdFZrGAsRmPt1kH9VaK5pSgfxzJBEwYt21n44orSEcRQFs6nYRw2rA9hzkkHomVvDYrn",
  "key29": "3w8XR2V6kyhrdpq7EAMtHKdFCnbbvWyJ5GCW4SvSHLweg8ffALk5bqU3c1DhQi3ZcBpK846BY3Y8Vbwgtsw2ytox",
  "key30": "C75RHSznLx7jQRRsTppwkWSbXUtcjzJdBUpZHt1JCi59ex7jqd5pPBFbcRs2QByesBRZZ8rvpBcmagSXvggG5o7",
  "key31": "47CFteVahVUkgvhJFJKoJFaZcPcuSa5cEjKWoX4TT6R5sz2unH1t6DfndwSX9giGHq33a25e9Uc4W4J7Ws5AjRsZ",
  "key32": "uaYmBu79RqNH1HVhvWLNfT762rGWZTcFW6TQykaYutnk9ixkWijKKPzy6KcRNtTa9F9irx5ainFs6HU7oXVv9Vo",
  "key33": "2tJ2jA5vzt8RsBeRh55JakKiAS9hwXQzyHHvMFyW8TYNoS7p7WpfHyvK2dXgyU4RMFCtDmZfLZuJkT7Jx7Hj86qx",
  "key34": "2UriXNCBF6vNBoM6WajrUE64yrUDkWqRXr9a493nwCTjFBRUYQJnDEtQNxPxR4CMSTCPQU9c9jVg5vMBnMUBDrRJ",
  "key35": "3jjY4yugkSdumrYS13gA9846LG5wchRot3gn5b41mLuEqupnTtLoER4on4m3ceGASYvHX4SAahzHeyuDxCYT2AR8",
  "key36": "HEeUncafcFZi6AN4rJSVxbA4GZGSnxZDEUmjvG1LLf4DJ19A84o3CZ8s9LZgJYjViiMj6s36kBmXBFizJuyvZnq",
  "key37": "3YVYTnNfVTqZDZvd3ytRv8DAtnSsGCFW5JZy8Yx9n3G1SfSeckpE7Q4bMNJgMw8SAgmhrtPdtS1LcKSu4Q7PE9Eb",
  "key38": "2Ptx5ZRt8xnkmJ9aFnUqNWAPxhF5rzXnj2sxWJDLTU3Wcht27h5wiErRdeJdgXe1tcnxeprSSUAvQZbpqtRjebPs",
  "key39": "5grFK3BGBd2A9hosHGYog3MmA1bZwKGr58sGaPkDBY7QrQkY4PatDJqRzLibMLw96qu5bcLQkb5XWKSKRuu3sjDT",
  "key40": "4BW2DTEDX8p1VfFW4Tbp9eGKBvM7GEHUrK3YiezKYuEgUhLaGGNJqWgh1cjc4X8C8dPV13SH8KzDvRfQQAiRBJxZ",
  "key41": "5nSC3mZW83pDiRZssTWJDpbhSMfbfpfVq5AYD9Us56kbBoETQS9dfXDZJ1FWDbyCAXYzNDrErH3rj5JRLhSKbYT",
  "key42": "2CAPBoniWNiRcpMDXwm5ajWtHsrJq5csxZ88XywKAaVF7gX1gumy1CC5gyafWcSScBA7rV9hcpnDXh8qWuN8iizK",
  "key43": "2YY5ooMbwGXz1BDsCiBMt4z7MjFwMGki44moz3PkbqwbRcin4PREtATyhjzfsgBdQwuATXziLssky46MX47zoZX2",
  "key44": "5J1WkYeue89FNWZdV94FqNeePs2hAP2wn1sewmVEie96VwUqd9qxquAj5Vn7SgHU7cNeU6J2UsJJfzViVaRpCHWD",
  "key45": "4BFrGqdyw62fpuzsLxUijM5i6M8k6YNssJmd1t8GQ49zszuco4H7QXFXox9RQT5nFMiCEvN23bXw8fYqkS71WGwM",
  "key46": "aDYaCfSQapwqw4J12nToz3pCpTRZ4fWv5kEGxCJB7vEAoDvujGAoNqTqdqqfj4NCmi5AKGZbTRw7RF7pummi31i"
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
