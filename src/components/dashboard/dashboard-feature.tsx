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
    "2BhbRtKgGwsxDW312fqX1zBz2Vrr22uFFYLwc34iNhrDUEVUCkUKpU1gCEk2u6NMHgf3jqR642V9t9yMN2XfgBX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EV6neBNdzSEdmf2LGx1mRDMTTpjrywS1kxBjTZoTsmhFUCxnrRWsUSkxYFhMVjsBGR6a94udTC58RbZbCM5aMKV",
  "key1": "2Pg1Xuy9SyDcXwcGq1VBZNFxVj8LkoPf7yhRmX7x9Y1veKXnhSkFSxxVXWrN4L3biqsqopZhTR2FzMaFFENno41m",
  "key2": "5ucrBEdtJKmD9iPGCJ46YG8qXdmZroRNs8BaNa4pmHWqZS3ew4LThnfVZgPQS7kWmcWcnPBtYtDnMTrUsfjwQ3xY",
  "key3": "2kxi53s59opHghRLEkbMRkQuFNZhH42xei4BcJ8on53um7vB3TSb3DiGa5kWrFjFFziBsxYeceWt2WKVmHvDyWRH",
  "key4": "y46Xw2MLtGHHX1pjW76n5BxbQkB9MVAaERL3CMfPU7rAPfRYPwXWR8HyncjwxqN7rj5DNXPQ9ZuadrBgMNCkSXm",
  "key5": "HSfuDxWCeuzgRtFggEeUPUgJBWXB3M6JPPBjYhXr1EtntwhcPrUZ6Fwr7sd7oajm9Tekd5zjjswjKLBYsb5quhR",
  "key6": "3Zakp65tLfqynwaWkf9U6jBe4XvWGjV3i9VzZcANtiF5GX85MVNTtrjQotbkgLT2YaD1VHdMhmb5uZZ4qN3YXQCi",
  "key7": "5hF3CGs2LyvsJhh5GUnFPvfZw4t5LyVv6rLVbXKUe1YU5vLxoJtC3myLeLeb5GCA714NYU276BBRGPHXnGhxxNAm",
  "key8": "3GHdkCTJ4NtLkRXqkd5JVDSKyLHTJJFqUM3c6zP4wFMyMC6oj7qFgXBm5zHNNBUkxLwF6pbxaNJqNZWx988nbHRa",
  "key9": "4Xwn8h1oiqVGrREFGwc7VvMJkLkZA8BqXzauhyoTkdKAgRU5hkKAVPgnWy3ydR1dtV9yNPoaCqDA28AWrgWen4qL",
  "key10": "2anpNX9MaTwEr9YJ8sWhm4dUfW8hR15LTmNdsspVCU4oe3UJyFLeoQ3ztsh1F6AZxqxUwk5MdpHTQmCT6V4R9czd",
  "key11": "2FYZnfEbFnDVYxguM7tjGuyE7kFemWpGcnUkSxk3zd56CUmHDVvTg3E6o4pcSDGDYmoBmcgtjpSoCmAVs4wjja9j",
  "key12": "3Mn5oEapoFxEnGx6KEVECFi2wS3LdQtbuJ8o9H9EUKCsRJwdLpXNRG5C1pQ68KtoTUd74TuY9oauKzG2k9pAFLuz",
  "key13": "5runUYcUGg3ukqBDTJDWbDUR37jnXx4CCbu1zd3onjMhPHXYyPn1FPprL7nnmjyCxWjnyWTRnpQ673jVdoqKaWb8",
  "key14": "59inDp9i6ZZ1RiehPyoWsFzkBtLSusPi7GJF5eky5vYCrueEdchTwVXYWGu43N2gh5Bru4BWLyED3hz6Z8ipsPk3",
  "key15": "5pSS7KfaVW5NkffrKmghMPXTiWgxNxKZ8V3hnRHZAnUjohQh6ufh84kSEF3d8CypDje4DyG16Q712Z5YxQJaEUPT",
  "key16": "4246HfVDtJeY8iVSsEnGESrez3jfcB6JiM2FimiUsnxiamZ3o6Q6HgLiHxRGyPDF1BDUKBGbMhpKCzkTLm6CyTcc",
  "key17": "31FNbVjXYtvhguKg4r64HBa2iCepk1GJnm2gjBnBA4h2J96JkojKFBHpNNg2nmzk9egHnnSSBQAxBdqLXePQqnih",
  "key18": "3rTXjnqa5EapE2uMPH1wZEUziN9SzZmXfQQDtVJu7ZfbXMLS73a8v7qgLey3otHUQ4XetUY2SxDwnoaUBHyqzjNt",
  "key19": "2qsMuYwnSAp8QMLjdxMRKAwPRuYXRFUyqeTAqSYuMj87vbTfT9YEmAmbCxp9noGYKJ3hxshjFPkMAo2aZcqLFnaW",
  "key20": "3z65pYbG3axGDCs5B6iAzF6E1Pa9mMinRduJAXLoHosYbLfW2wLamLgCeuq5rLMzLEGgksXhaaojQZTaAAAWSbnW",
  "key21": "9qzBWZsNYCdKy1n1nSJaAfyokZcghwa4Znxs2pWjU6QUUByFQhsVGqD5HoAd8aSUKSmgMQjeKVvUmU9MNnf9m8g",
  "key22": "4iG7bec9U1KsUJBneZGixsfSuFYfUiHLgvsYZqtexYsjUPCnFMPgctZFqWsB3JZKYwXzSip6TQk1nNRt37Fgx91k",
  "key23": "5CagDaEJZqhdkiKcjkmJiHKQezAG5jVnoRDLtZ3rpHduHEwizNiw59KubHuehgYuzgFstN1owmXF1z53A1fU9QtQ",
  "key24": "55g3nKHb9QKHLWqgefGQKGLetbvaVLecfVxdkfkB2GP8Q5mLBFRRX1ebpAaw1UW6GLaCgNh5CUwrzK8ouftmW1H7",
  "key25": "3LLy1PxpNrcZFYU5jgu3LfZpr3ND3kUsSgqB1UxsKRh9WgqsKo88M5urKuH2gCgs8gExpQUMtooUEgHHYQagzKfA",
  "key26": "3vNbqR5CUxWMWnDpHKwjVWx2DaBhs2Ekn9zwZDkkg76nEvzqBxWguZBdmYHS49vPCD1X6bLGJe1aEgkJmbWT3C8N",
  "key27": "5NiD936C4sp41673cHpCxgMn2idiQVLaEsV5317kedPVbRMy9smbg4YDx62eJvdQ1dkoDAYBWrWwrvnH4iRVA9Sb",
  "key28": "63zBWG8uSYgXBgjGL6xpTprDkg3khkAX1sjmPwZb4atyK8rvDJrfWvSPUWu36hMHqXawqyZPX2pTPaZAxqyAh2d4",
  "key29": "4ydbgn9ioS5HyUAxLYJnQRNru6FMsDEAdJGNGVNUkTGqVPUgqDQKpx913MGesYctW3wcjX5e5532HucVkhWK9ebT",
  "key30": "2NXwig2TYugPpKWNPayuRLD4winDA8WL5aXGAbmaE8nhgmG4zJDuiY1MpzvKZ2x39mfzhS6fSMDnip8TGWfS799X",
  "key31": "3kW2Zo7qy1i9Cfgnbt5cwT83qUaWv68TSQexTwNVViJpofFXboBFNNwBsnGye42Xf9cFLybHnPssn79Crub4evG2",
  "key32": "sXcbuKFQB96hVsHjui6AWw73eHJi6LZxsUEkn6kaqkCap9EeJjwSLhv68rM1p19Bsa4jU3R4ZZ3uGLwbUv4Aj3w",
  "key33": "2QjzBE1LG68ueVGJdU2ftWkeQyJnYeXuNSFtzm5AqPVMomyrSVzfqur4xDCwQ6ozUf2HGLhnw6pSLtJEPJruqeZv",
  "key34": "4wRYBbd7Q6BnNP9W87ag74aZwsbdRdqf3sQiP55GGQniwychrhFrmF1ZSAsz1Lc6EgJ9PanUKrmGrQr45S3Wprfr",
  "key35": "5CZAoKscN4D9Jno3kVYKHXatZ86MC5XtyTnQz42doDAeMBs4AHrZiuD37R7pPHdVEW7uMEyUWvB5Yzdqi4wq7cBa"
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
