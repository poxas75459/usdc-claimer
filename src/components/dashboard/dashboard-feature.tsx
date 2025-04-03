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
    "22Qyzv5jTFPeZQbFfuaCwXGjTRqgXuadSqigvcVSTF8u2BBHXXR6zaSDGw9hHAz1jEyZsZvtTftmDU97oBJGHEJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tq8jmnwQ4pRJFFKeysdtXBKiiCmauwQuQME9vLgYBDhUUmyDnQfLQG3fZZxDQTMrhss23kuaZJ8bicBmZovpV6h",
  "key1": "2eRSup93JzmT4vFBDUr14PJhvpmpomBRoXrGbvvVu5Ye2VodoLmVuADY3zihe25A3smeE8jCfHFdzGdoFrDg1k6N",
  "key2": "2tMWFaqL317iypcJcaehs21Wm1u91zHrSWnD5QG4EqXLohLq91MVHQiJdRqSivq3wGwkVJdpWaNAu1jrkby4PF65",
  "key3": "B8MAgKfVphZveeTU9kV7GZmYETvhDgpX1yUmgcFCuFycatevzW8fMuxyaWK8jNZqesdqPPfeNLYKQWj3UVKxRVA",
  "key4": "dEoZ7Q454DH4i2VcShFZvu1WETsbfumPKLWJAY64vqw9JWiXrg9HKEDWC64GEjsFY19rhnrBd9RWdpxxWtHCxuD",
  "key5": "5T6Ewto526pSwcbtx3misYZ98esvcUXbbsf64B98c6mg8epmr7x6VbEtjZE6JwEdkrRuRNQSQyNHbY9HdGiE94h8",
  "key6": "BregwTuiJLfzHWyci8KswabtQRjjxTLH84RwiiaUXaCXsXsJ64QkzWog9q7o6sM5aPYAKbQawyeAHTQPDC1wQkc",
  "key7": "53sromdZ9v34ExCcTx6GYByuAXNnHVcE85TRAtCC4VAboRSd1WiWvNJwG17M6ExabNSoe3JCwAuss18NtHdDU4nK",
  "key8": "1CFrffva5xBwYiiRYDZUbCtcLZgras5sbL7frwH22TetFYk96J9RuGZb7AkPdhyqJHfXePLG2WAyzfeVWp2V3hc",
  "key9": "5vk2iUFNCpmnXCCC5PAagBVB4hT2RyYAfaZjE5ntKLW5kCD8prnanqRMUySoviLiaHsjQgsnGxtw5dnWgdDWJsda",
  "key10": "4XQf6LnzqqSET1R964f2otAMp4jcAbtdN9vRoK95RT5PP1d7zPMa9Wzas3gjBUYLHZJaHwHkNobJURXpg7emeYiD",
  "key11": "2rRqYEQHCScBz9FrV3mkcHZ1YbuHuY1dmjiT5ru5xjZijCt2cE32oVVdpWUqo2iFNFU6GsLurYtMDiC3ouPe3Jve",
  "key12": "5zvoa1SHnttD9LyfrWs5vXwx3N9Evw6q17Z4TS9sDtMyVJ9xS5sqUWsT5wEwU6a9kkYG25o6VRjfKyQBMWC2nEiv",
  "key13": "bk95BCMwo7ieys5LxcBopnFucRiT7shnSrwUMRPEaNHrARVbi9N46zjqUhWCLsyFGrJfQnrJG5euPAP2GXHhvEE",
  "key14": "4PsMpDSVczMRqJdE8uKweRtXxSBtq9NzjXv5xuPRw2Prgkik1Y5DCLQLGYVh8E1Manr8zhUHoFb1cU1qmbqmcWjc",
  "key15": "5hU3E4z5LPDH3pHi343ds9KCNkNTEtBtpv9q5hxTu6SyG9fX7MgbaFP5Mm62ncrQii76aMYtEMifyD6WYbyhy7Hw",
  "key16": "3cc92HJQAREk26x4K1oBb2AhXoY4TvRFHNUQB4z6RVDU77o1YnypHh65WEs1boQShN9dr4PfKSqBY33fNGp57PaJ",
  "key17": "NQY8CqnTen6ECzPAs3cVEnjc4yY618VR8UaW4sxxgKKsDQEqUmho3BR9DPWHFbr5ZEB5hVYLKr1X9r5pErc1uVq",
  "key18": "4N7KhfbNHvcSM6A8Nobe3RA5srugePMYMu3zZzE7hj3Y1uTZmDgHMDbVtbxy69sAk1gKh9itLBdsoTcudKgg4aaX",
  "key19": "2EUsB5fikC6DKjip75UicS8Zyn5mVbZhT3jX9RoWz54aitsTEbr8AnoVhDifX83m1C38WgwDpULVupzHhgKh895V",
  "key20": "5DGowQc7f5KzbbWYp7cwJ6ucoujTtDwErJ6J9qBdMK2c9swhaq6EPTMuNhPNecjfZh6gPBEYuSyW6fbdoMnXdUcu",
  "key21": "3FPpjTwrzDAXaMgo5oH1ZS2Ya8xeFsfbcQjzdu6rnA2Rirp9X8F89iXKGW8jHdWsDLtCKgK8fkfKt3eom2Nd9UQT",
  "key22": "382dLXxrprDpCBc3ePvZcWCkSoNsXZfBwG7FMNdTajxjiQst1yHoRdqFarbV16zHddDFgPGt1vNiWzdhJiiKrA4p",
  "key23": "62t28mas2GpJVJUEqwXymucpaAkKJMdVTXgoPkW9A9rwLADLjv9XX7E5z6koqukaocU6H8XsGVDrCfxFD7Ptma9e",
  "key24": "CFqGfG9rb8iqGchAFro5RQ2Efs2yccy2qtrTGrCfkHVohCN9j6gcRYQMyob7NVx34kQM3L2GjAx3rZiYS3aZJFt",
  "key25": "4e3EDjcAW5ayrze98keDH8LaZqXL3xEU6pFG75kQU5SC9CZFA1MKJfiGgHZ3V2FTM2ppnVEVa2uQSN3TNqAWxoGi",
  "key26": "3quR6wPe1bxmrjsoqiG62tWwZRefDuKdrbXxNAiqRA8toDCqG7MuNKjnZoGQTLVxwBHbjQzrFXGa2JqmT9XZTzDU",
  "key27": "4mEzLRaLBPoGonNiumv57kuU9FJNc8y1Saiww4S8eBmSYbGozC1rRQWyLiKCioLY4riFbjV5KJyn6VA4Dtb2wF1E",
  "key28": "ERKUpZAwxkp7QjXe8ZuXoYpPZ7kGFezf5HB9noPe3EtbJmxYDTvcwE4AEgSAbsh6ogqjJMphSk1QgrTBbqCfVX6",
  "key29": "3mHDu2ekxXeKi4Y8k3Wm1ieApf3iMssHdrFHt81Cz4C4oH4aHN9FU5MxjZA45tM1oDJSDcq3ozG2cEfgPdJJUYwC",
  "key30": "4ZLbfVZyMHRF6K4fW24kDiJSYviGhjPLMkBiDcTRR74usfLkGtiKzkStsQJw9bC2HfqaUwjDEihHDyhg8xXv8i1J",
  "key31": "4u3Ea2pYUjeD9kHYsSQYjgiTmfUbQD97RTa9QjPxZKoo1xf752Z1FtNTb9EHA5HeQcXG7gvhiKBSgAgrEz86PJH5",
  "key32": "6sGW4HeH9KGtXn5wsdjp1WJCfCg5z6YR9qDHTUowynCiGQVv6KoqNZQm4hk9p2Mc6JoxG3FxV7WPuoGcPAWh9rL",
  "key33": "42PJ7GpC9BJeysyhMhUQt1B6JGtXR7RZQ89Mih4rctzyG5tZtzUCyitsEiP8Ccur9tU555rvCq4Ps9h7A5pGn4i6",
  "key34": "PZ6fP8AiEMbBDp4J4bk79SjNfm5PFNsPhGynTFkyoW4wQUEMU9FwwG9tYBk6XvzPuyux1DuMDWh9dYKjehMesmt",
  "key35": "v6h66xd4RHwjxWrWgryti3LdsE9puu2mExb8nURXn3bvdGRoxuDartDPHBUroufRWc87ECs9WnMmXC9Jz1PDmds",
  "key36": "5gVi8ZriEZcYpECADqqbb9x6kh6C6oqrKZoKZ11a3Tcme17hvQJNqep4Cwvga8T2oQu3Ef1ZEvBsw53Pc6AfTVak",
  "key37": "31GTyQTCCVeBGg1q5XKNQvrLonthLPPxy8SGmWGZUF51DsPAos8ZFcoWjX161dWbq8gV9phcDuyc3nQgzdq9MsmB",
  "key38": "3A6Cng9mYYaJHSdvorotZJZRmBL7afSVn8rGZJykRYB8zvemwEz9DcqoCsUKWWmBQgJ5XDNEDkKr3p3KbEETWbze",
  "key39": "55jGiHy88dm16WSZw5axmXLunaBAn3jzchgrDp37Yk2hD125rHi2mquWifXWEYz1onk8jpxY3Qq6SfDx1PK4SZBK",
  "key40": "4LhNz5H5ibnxWoy4RSxoptXTaARjHPvmbJKP5LMne1bvwJ6mDF7C74syZgbQLDj7U9uLLN8HUEPcZ6BStPBwSC1d",
  "key41": "47wk9FDkyc6VDgJtorui55yjjk1TRCy6zKdv7APnE9cxdtbUceBCxMdc7RwsnH3qmN3XFUNFGvgLgPhG74rL7oUz",
  "key42": "2rwx4mLEfZFEQoqGhwWV2Q4xTAx5Y6MJpB6BmbyM5FQ4SAnQ9FMxsGX5JCL8apf9NVCVZzmsA2NGfU3MtxV4dFj5",
  "key43": "4aXviyEL5Tw3vYgbRFi56Xym14VWjfEebpkdfU7z6yN7pfjSFKHoFqSFTHF5aoysU1tsBvwm8nCVBE2gfkjiAzWD",
  "key44": "hWZaZxQiS2WY5a2zW6xnwevecCvz6cswPjZ74RHXDYg6vwy56ftbJRQ516RPErZP9JwDx8i9dntuLC8UBGxa9vh",
  "key45": "hbJGkm2bemGKLpZmS23fY5bGdgWwH8p99BUEy1SVK5dCkga82hWuTJmpS94UmDyZCuXf9yAnwNZUaNBAyAqJ26w",
  "key46": "QWBz9KQoFgh9ZW1ae6UWpzvFzjxRAkswN26xiSGE2UU6uuSU4QFtTjYZKyawCAo9AD2FMG2tZsWpRibYjyYwVgX",
  "key47": "5WW3JqSmpAtfKjox4oj2pnDuWJ7vyuYFU1w3PXAhFftYMvv8uwahTm999Wp8isf6UgmDnZmrh1oJcem1F27mnJF4",
  "key48": "s7vdyXCpWbM2eS9YMhDGU6TEkHmB2J1WoAV7vc3StiX7mVkYuDgMPuFPtdNhrL54EB7e332ZDEioTEy6Sbm39Sk",
  "key49": "2XHtSku5yrTZjN1JSArzzqoNL9spDnTy4ARUYvo9EchyP3zz9oK2BDpE98xUy3erhMDDAB7U64PLMcWy6ZTJpo25"
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
