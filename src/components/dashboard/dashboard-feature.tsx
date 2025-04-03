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
    "D9TG6W9Acp27NjUtHu6w4EFahrabwtE9BpaDZpj2HoRE5nZUHmc4iD4e7NT7neBMcz6gEzSvmHjtf5sRww2Qg8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXpCPahv8ReTwfvv2CiKA7KmRCMtxEqwhwghm96Eq7nmFAh2J2n3eBnY27hj6ChRmfSu9e2XM2pQCvEpV9mSRaK",
  "key1": "4rfvioN8P1G32Lywc18dBicMi4RpxvqDSijVTKrThHE1pRd4PmXRHiZVFMzTTA3Mju9bEnW97pDKGLF7gzswfL2b",
  "key2": "2ojKoAx61bcrhbbicJ142zk4VZoKdtzvA155eohw6dLFxoscg1DF4xfNFrxcWdBSPM8uExcUxj6GTqPqc5ua4rSW",
  "key3": "4HXZjh7zhsybb12QtUZijj8jCfb1Gsvp6AiChHPrUzTirjLcyvc1MhAyKxUT77puJ1Za4T9HaX5ZxJzWxETPPXGp",
  "key4": "5pxqa9xwmpkgaqg76J5uKaNH1o3tZC2qt1uraNmYp2YFTR5LriFWdiS8nCaU1W5a8WKzBXWtjfR11ZU71Nc9yDGa",
  "key5": "2Fe8nsRfGLDDEh7wbK1pnQquQuF9sNLzF3dM2ZZdtNgk5FuEFLxD1R3Evw3jngKGZAuRJbkwmA9PJf6wicAFrkou",
  "key6": "3vUk1LBXoVgLwXhL8afPFz59nfeXzv2rGni1dNuKahpn8FeFQf5LKCNn3cQCHFXVw4CmDLQdksvG4Y1B19qaQ8Pr",
  "key7": "3vudmD65Hh4G7vS4NRMTFcetDKLMDpLAEJstdhgM4wYV4fEmab2PysMchxj4PB5o4aFaAR2JuW7ATNezNiHq4txf",
  "key8": "5pK9nb29xetvh6xnqeJtrLPNEF12DDFk1vVhjPvK7ZKwDwTbU4zmQE9WHftCq4wKtsLcRYcr16eywtWLq2q8HsAH",
  "key9": "3pLgUaA5pUPmu6LYV5wc554EBHD4qQbsBCRCpU48694gud9VFDSooRveCGz3RXXJgWWWoxTdwV7mrX38pELfqX7V",
  "key10": "4Q1xSiLuqJPkD9ZA7pHpbe72ubF3sLUoZSMB3wKbvAcZvaaUbqf2UUpbSrqm9v6dYnEsXHDtGEiH1qofYaH5fTVB",
  "key11": "3k23XqjruzKsDv9aQM9PDBz8HVM2kMHWhvY4WztBt4GsDJGkqLUi7qJEQYJWot6rrVqoysr8zw5cWP4rgY3nSLN3",
  "key12": "3Jzz5iBrpNpzdf5GNBcbbL3Uv1uJzeXLK1sE5b5JjR4oVbR9DffsbXvYN7xcvch6v3dxVjwajrurxbtFPtjHqD43",
  "key13": "59DUvtYBGhuvp3uK8xez2M13HpFuBwD7T12Xwi2DG8ZjHUjNBnSBNh9duaUKGXVxkztu9T25NhbuZG8czRdsroh3",
  "key14": "2BGUX95YTSH9yoWwCvuZ2CT5Qco43JB3sNBKFyBizUHRcbBvebGYULJh8jViuHkoT1L369V9QrRQwPBdse87uwu",
  "key15": "3vbq2VTrPym3ubiwpQs4VWkUGcB1Ewhrv2J1szQ4VKB3ZRtBQmVbFKaKBTTzbwTinyBtgfuycSr3bN4PfGA6L5dB",
  "key16": "5Gib5Qm6BcFFfMtn93Znz8dsufep1r19TNUWMRNmLPiFGevnqWM7KUQgZSTpajc7MnmQpda92hZgkQ3vKCf5ixjk",
  "key17": "4sW3S57eSnFi6h6Xiz5WHmyuhUg6XVnX1kTYQz8ysg5Ugkxzf3CXHpfk48A4Wc3d4ru1ohK54Fu21Jy2FXWnCobX",
  "key18": "hXiUqYe4jGxzERSqy6YYAoe8GXiAqbSqB3Eg87nb31b6AhRSZV2NWE7go5WsM8Ne6qRovgkaksUXvcABqtDznWe",
  "key19": "5PEVpPTuDqJhgmVuVNd77Y22RX43FqhLTtAQrPvGLnQqrM9NjnpToq7iL9mEruS5tdUNrLf7RL6NyQ5TgTmQE9o",
  "key20": "DwSsh7s5CpPros1cajCqYGJs67J5YRxPQPV6oDtEDznRn8yjLcWQtCw3eUnfixvoT9ftRQ3cKg7e74XzbcuX1Cn",
  "key21": "tE22owetbQ5gE6ArKgmBNYgPtDr78exarbBJdHGMsLmKUUXt1BJuhTErRJpBuQVMdgv1UwozPv7SQuPVoBoLerF",
  "key22": "4beBvH1LAB2dTArXXgxZHy9w6Y2AmQ4XTwLwmEJYFxV9Z9k5sMTzAia1ojgvYRRZegKLzLwLp4NBAzuWEAjqhWWZ",
  "key23": "21HkUjhfxhtA5v99q49S8opcgCMgr7TEwgTL5TEmSPzErRokMZyMF3TvNyCfukv1S3zDSUPUKWMPfkNCQj6d9W6y",
  "key24": "3pXPjRMzS3UxKBBVRrZX7nMr37hGD3eujcqxvA3DtpPiJhJRPsWcBV4UUnQpD8k6UZrNKr9VShnds3Bx3Ep3kGCM",
  "key25": "4NQg6BY2jVEavZV8HsHvTsHv6UFkUcoEDc3tGx77faMhrYyjFd37WujyNJAxV22PLHz5bTtny6JF8tpBmfZPcqnM",
  "key26": "2ZH9WWYmikibrUJvZYheCh2E8GfiYPDWYtVtZGerhvp6FKbLXKmgPvMSgxL2HwL3LBjGVf42nowAGvLHjfkvr4PC",
  "key27": "5W8pb8cF8yZSMwhtdJpGtjZgUjJhvr9Kkgz2zjLwDHsotMxWouMDv5D2dsiKKZP2i1gaSzw3q4ioLADgQoL256Pi",
  "key28": "3VPUP6Fsjf8TBaFSJJoLRPvXiwprQPQMvzsCQmvSYjakmEZo9pStZ1Vc5Hfa7C8YwGWwdoMoUrV8yANJ4VB9EjC4",
  "key29": "2w5mAGodXkJyFdQsqUJDCAbCqmwBXXBxYB1o7oYF8kG11LKHKnPdcNJJLn6uaiheWXJjHokWPPKLYW4tppRVBc9Y",
  "key30": "3uGDQssjF538YGAi4rUUMTENYwp7b8Vk6B8K1stnq6gxdN2XaeuUaCxiCFgJfHLjEGFzUVQKALT36H7UTQdp4Q3y",
  "key31": "3xAgnCAnUpLZuyVUzYfNKG2ZSkgHmVMiBsYsC6L35AEA3TAJNS7zaPk6rX7HNf4q3e4GFxqqrGh1QTUiQPYeHrme",
  "key32": "2UbQgaFNe4QGTPPMmTHhNuM6VToPPzdSrknEpA5M95fsCbfjaWikhAEbdQ8371QBy2ioMcS7ydSEBW4sPUSNRsZ",
  "key33": "47gbV8qc6m3wE5LzNQWjNcPvKGRP9VSaBWpXjLX6574m2a1GJFR7Emvt66U7izk3yTLzuk3SwZJitJZGnqpt6mw7",
  "key34": "4XsMjjKjzGxSr7oQjpGwZFmHVcKum9e67rF514kKJeGTYvmFhsPpKgFUuAPRoJeJpHxqpYACY9wL3pzRdkMeHVSE",
  "key35": "3rHcrRy88wvhuaeFL3h5tt5uQVZUcRPPdq6ueeVdNhA23nLqPdJW6CPFQCriFCGC8nHc1Ky8EUZeeHxM8trnkeeW",
  "key36": "65jB2vWPNVdM7xbDJC5iLyiL1jsLA1UZ2dfjcxjcaAoDB3pG1rJSzx2dkDKkmtV2WJhs4CDiutG73pWvFaY3u4wG",
  "key37": "4KpqKug6edJXbaDgHYNSndAZUxJBFJM4NUkf2Ke21xghY6kqHFYfrKEE4L6cBV3HdLhsbA3b7Kj6tr2gxB1ydyo1",
  "key38": "1ZdURrbAqBEryF4a2CjWRG3vsjt633GXr2Fc2EKtyMzcXEcRowHvNmHRDXe3V7BGBKRFJkABj7usxGr4CVLvBzD",
  "key39": "4wdCpV6kQXKEVyCDMTioiRWnF1h6ChigpQVowuECgYBL4FM6cQzXqUFNjtNQjaUdRNZKikNhkLvEF3Hw875Gf4jR",
  "key40": "5L7T3MbgSNTGPTUc9tgnC4ESBTrKuZWrYuwkQQ7aKYEYdjf2UYrUYxv5aHDprn1u2BMWKKyUzJKUNNnwSRxreqE7",
  "key41": "4TfxZRdEjBnqRphbnvPcVGeVgMJ8mhUmN8fa1NnirG8mewY9vAYMhCe1jEqkebs82ngh5A8PE3NFDeTgXZDsYK32",
  "key42": "5EjqTE5vEumCST2U1UvscPSunp35FFfmUTy8sWix8VEKZCWmHqPDVefTJzHBv5aoicSPbQ6MhFnW1qzupswLgAHH",
  "key43": "ZgQ6E7XybpSwGiizqEUvFJeiX3fKzr7fH79FoEjtZfhjfP2FLGV9dEZ3uakLDMcf5PgZU6PH7SBWJ94HRWxPxf6",
  "key44": "5CE1h3Hu7MMDUNpYdneSfQVeTCweMsLayEXM1tGFTDduzdJ2RjFeqPS9zjJh77ikM3ugiEt4i77wTTMSZdnArgrD"
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
