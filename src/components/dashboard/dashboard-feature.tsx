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
    "3G3MBni118PRSsSfkEip7CKX7dHykcc5FnM56dB281zfDUoTk11cfzmATg5BfRi3LLYU4iJ5e8kJDa18FxNyNh5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHeAgXHT2thMdTuz8hSASWnELJe9jvyW4onKepz5wABnMQ2AH7yF8Tp6dY55NKB5ynxALn95qZ7n9wfYWez7pak",
  "key1": "5hcMyQMRZJYhdmbgRyfjB32eVF8nwQvD8ipUzxx4jMtDkp7D8x1CGwURWaU6ixXJMhNJMXiRqMCaXMBsLoi4oq1q",
  "key2": "5SAiRsWkEP912zQTQZZGtmgmyRNMGcrEtrx6ZQ9eXMfhPaGA9RaURBo45HBJWQAg3ipvitLkodPQLS2oKYW3kKGc",
  "key3": "3x745RdC5wuS9BmTvYEaHtxU3qZZePpNZry88Rp7NJuoPEAiJggW59DcpGarnvEq28vqELFXj4C4Pja2i1HAZYKs",
  "key4": "h9Q5ziMR5pnGCenBNj6MeGm1Sw6yHij4xjjKJEaX4k3gX9gGFcVhypscXbdhegfyXyjBTX9S2puqYUtTTRRzGAE",
  "key5": "5S1z1ZguVEuGmYvy6z16e6jzX5HLyq6zwiyyvyugwDTykuGT3Nav8Wf12CsquUXUhui7vxMoN53KcEt6mrMcPAwG",
  "key6": "QikRzyPXysTQpuektuZxpUZ6VJpFjDkdiKUTeq1P7Bp8PkJdTPfuKdmBMnNFTBWULBG635WDau4JEHAdTYMMo12",
  "key7": "3Frc5c9EidaXAker5m5kDY4sXdP8LAVa5wf99X7F7gi3NpPAJSkfVeXfMEXsPUMoLXNjUqSFrPnBBu4yB22bweBq",
  "key8": "4Q9qLBdghwPCHXT87qbTPiGMmpLzbivJrtX3buoHb6xtCtpiQCAFdmqJFJjz9mCmQ2RegxeJoeUjgTcKrpMwoAfo",
  "key9": "2d5VWsP3L9KpfoL8n79uUdGYgZF7c2Cr2r1Uj6HPyyrnaeYZpxATx6gjjrNMpmU6NZtH1RrHaGzLdVbK9udywPJt",
  "key10": "4eCq8WbsXGXmefADxBAyiaQkxiEjNFDQ6uvzZGLjKGVBcJ2amtaLUomwrPhWVLEaXdZxpqurAiQZ2USHLP5ciLCj",
  "key11": "51xb4UtAFe5xM8t4JFAuT9JXUaVsuPa3zJCKZfjemzLY1gzgHxnG9UTpVv47LYuk8KAg1SnXpfCdSh2mHTNdfrKd",
  "key12": "51XVBXuCif3C7ovoBHwGj6vGWikRuTfk73cEoUUwm1aHXmEcUKMhSC1qCpUXUnNYyQ6z5qGDEqkUvYmJ2GzyRv8x",
  "key13": "5An6TiNnKEEMKsQMB3sfhnfjk3dHiQjysc1GdZMkCxGf8oiHexnfd7aq8Qr7688nHkXGR1FuHtdWwW3VfS4sYcew",
  "key14": "5Mr6fBHzYgdZ7CLjTiW3mP7BDSt1niUrtnqrw6UWCSCBdgYFFkoB66bMrNC24rVMBDm8YpzSbq596PtKVMAwkUN7",
  "key15": "2qQH8PCKzQ2bRb7nfqvuGtSw6uwkLSRtzgX1VmXp1uCPwbGSWKdzcJt8v3YZ3MK76McXD7xKe7k6rZ5DVyo8VRJB",
  "key16": "Yom1YkSmdS2325F3b5UXNR8XsFbPhvQzYsFAYeVHqrakPtKWJwKmDhGg26DCT536UFMrDZf11dfaX2GQ7sTxvZF",
  "key17": "4ozfd1tkTb8UrchMAx8hLTzjbGBPTVXY2ufS3w1YK7GvCkx8FdPBNRPVbaD2ALEWeCLaraD8mxzLepmEZWDvSPHH",
  "key18": "5VZrwYfmKE2zoRjamkr68ZHYisq2d4g3KGh8tmnFqas7EDyp9bEPZqnjUqC59rRLJC7ogAaJjuXijVUbRug7joB6",
  "key19": "3aebf5JnQvDYJmDM6UkyVzsxMeNrtXatw8XVZTKjhVeMTKLWC6FWqR597aFM3iMSRM5TSTJ9C8Pfr89MvKJADSE4",
  "key20": "2k1Rj91YsHB6pFQrHffV5Zp54Y8GDz8gBDn6aMtnDSDhd34hmGwCRtg9wnpC2NJ88Mf7Mumvf7XnBLrEY1yb1i1U",
  "key21": "2w1JUchKnDV3KedAz9XPAZuCdohcmmMhjhEzfgUJ92UcrWLpJ58vGU2iid9WnpF1Nu1gSm7VSEfj3tgZFF1ZWjan",
  "key22": "w25s6ngBFBcxRzAr5drYv5AjF7buk3hCxmPd77v2gVquDWL644oKestEpGA3tGBhGVtNgwZwXV9VJSY8wKj6RSA",
  "key23": "zkmhSoU2bUXJBfgpnCfA4Xgg9dQotz7raNWpZpPPSzbiQaBKNy2r1tefaoUrAMpJT1FPJaxD4fLxDd89RpyFLLR",
  "key24": "rAznJWZMwrHGoAxXmcvaYwmdBZMFuCNKhnNMTbgLHacrhxqxDyS7yjY9TTjEdJwUGn9zuBWfyhvb4bvXjX9vTar",
  "key25": "VYm3MkLKX2GEdAaUu5zgdgsz3ydNfrvYY3qHEm2hC2fCs6UsoxdpjJRp13G1QwDdovctJaQQf2pA9UiqaDasqR6",
  "key26": "5zSQ4C4arL9FUScqL8vUF5bJkY24YrbTYH6jQYnzWiyr8XoatFFvkp6oivvjj5qyvvq6QXvfAp3eD4zCcAB4JmPY",
  "key27": "2KYbpFYt7FVFqPdXFtVhT6Qn9aHu12tdf86peJCpsKJ3ycvREF3MJCXCq3e7mVr8VQPcSXFTsKrfw5r9NfhGN9BF",
  "key28": "2vwBYK3t4krhdAFnRMtGKh5qs9jgar84uUBN7Un6ucKa7orCohKXZc2DLTWcspXiLdHqA92Zewey4dw8nN2NH6Vv",
  "key29": "LxRAmYDbzg1vUCBz433BvuqNTFdTXB95djpgXqj9bU3eLfxKJQYXVmurUXfMrZuvzrEbvghzQ7cvZw6itjBFNPe",
  "key30": "4QKpAMz9uLDG2upZNXskwvU3UidnZQBeeP3dQ42cV3LAU5jDASF9veucu8sbe2DoewF5JQeigqDoF7SV7555jrj",
  "key31": "44iijV8uM6vunSUANy4x1Ch43YFC5fxHfHPDJXzSLgDd1CFS8sEVzk2uAeSMe5j5MKMCCCGpS3fMrXYdxxXQg8f7",
  "key32": "5f3e7LhAZBAwAcfaHvLtvcDNuWWmShNFUFdZAo5cPPxYLTWqDNDg6dNxhKFfJ69dYJXuqgDBc9a7SKYdme1giHYx",
  "key33": "iYUtN7asNcEU2K5bjSVeFGP3CZhUM4Y2H96iUzumG1XRtSq5AFtQsAstiBHvZ5EPixdwiC9rUp6unaA727JGne8",
  "key34": "4GL2L8u1TdcatSdvwfL2PKx9c1u2czuiMmJNnYNAE1bAvH4x8dyXPhLkwuNysNJUGXQ3ENi9XsDJyB8iPYmrCMnv",
  "key35": "5mSPZQACeg5sc5nQsCTxAnVD5mLGDLDzFJf5X8PGyHJnp2YV66aRWk4oBbhRXsK3zWEBUN8KK93E4Hm1TEgcBqqi",
  "key36": "RsRstWqqTZ5JQS6a2K2kjKSWpGQ3Cgvuq6fZRf6bdg8q1fVq4xECCmqppRnLrZDanWyvxTGfVNncdX8xPj32EaY",
  "key37": "Bjz7xAzEvSa9aSLhRL2BguJfpxayDDTniaoPqakNsfLXBtQYRtRYPT16Xizj4KveZScZX98VejnXa5hJSBaAKaq",
  "key38": "3i9dKV5WS8ZMjqdQZeDD58MBrjtJifUjNrwhxZdkpjGGVhv6dBDjXCfWBizBXYxA431FPpKw3zgJ2g8L3xuaFfmK",
  "key39": "3tkQKgeRxsJNLLJUo9dqfeM1PtjnUhkttpA8LNzRsGtsshWGJWvvMcJyeYihZzAY5i13SPrJuhGbxA5ZLiYbkS47",
  "key40": "vhL6CC2andat5j3ksnspiNXrMJdj2aFfRhSjGtf6PT62CMv266zNAms2aR7QFX4qZG2bvwj185UUEWVMvAkWcem"
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
