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
    "2L117dTFttGhN8fhg9UVLrAV8U3je6NVWkCmDmVXiXErX9531BNrSiJHepoqf2KRq4kSVVFpgBh7EUzXrC6a2orB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Es8TmVCHYfzRmCYqcwkjbRFNJkWyazG6jmxHbH1PiQDSnSG8bV874w384zJXS2zgs7ggpaPRqqPqwwvsNvx96gX",
  "key1": "3Ni6ACNceJBzUk963ZEd1CVZp14yHuThcd8AELUxf6Xmp3ep67R5Leex9U3BEZ3d1UUsxHRYvYdSXBmnPVhBsA7p",
  "key2": "65u8zEsPWb5GiX39Ti9b8kv41ebZUR8MYsgmmx4bRbVPyECwwUnwm3YcCqUWTDUuep1pHmM4JBaLLQoe9nEG3pZq",
  "key3": "2Fr4BZp34RRo4qv3FEfDcdY8B96oJQk7BnDHZj8F9UoB2cR26kHgLs4WEtECYqp8s5374A8gZyZryvPYtYQMYjSB",
  "key4": "xQ6aPLPyMD1mRaqHKUyB6UMTiigCaU8B12CJ3tsZqjZgCSPFbG2nMY4n6aJ5uCYpYTGtWSe9UStsevogLCKRxGD",
  "key5": "5SVHs9YivBvQsN55EHwqEhs73Lm4TYxmpobm6viyYghiwcbHu6cuvUgvcVKLh1hafPyZf4d1yRQwqKz8VTxZL6dj",
  "key6": "5uddNoH9HFbR99Zq7Gbw3ewCC1hUFm7HtnVJ62SVM3gcVJVPyfyyZCWfVmuWd7ZQDpHHeTF78huUszy3aiigSY7r",
  "key7": "3BUfVcsEF9DkoF7St2ppkjxZk8RR1ejuWgU7DLkLQXnKDZ6iq1jgpeUuJdS7CPmEPryRSYJLFTcrcJFUnf8ocfFc",
  "key8": "hcpu38RZa65xThiHTaxts2mvog5VQbCBvigQ8G9ggXZGC3KGEXhTWFNLXpHFXsE85aQKx3YPCJCtQKyvqtpLwAE",
  "key9": "2RqKEXJrDdyxwDvcy2vVD3Ez7PbrVL6pM427FKe52S24Xy3LWksrK4cqugHpBuQiyM7bHskfeEnLiRy2wwcabKiq",
  "key10": "62NXobkGCdE14554Qw82jMYyeDuFhPAAP2GCgQqyXVBS2hhA3AqWNyrCFX2FWuH7Jc8A16LQNWeNpAeWvMPyMptA",
  "key11": "2ReP14AjTNby8WLCdG8e1yCeUjCW1zUoKw3rhdtPSy9KUEyUWgZMgKmdcn1DKpqZbxLVy2hF7g3RhMu9JX6Zw4Ef",
  "key12": "5JnGsjjNtXdPJwZgySh8en9bVmnXmQKoJ6T2UkSrLEDdUScCehwgvHCQPiHoKz4uwKtao7dVmSiUaKPcJdagZFwY",
  "key13": "22BhFeXCWhq1vdEUM8e2bCD87ovqaZpP3A59RU6Lf62trukMryiCCtBAVdZhym7XBwgA5AeoBdNidx8T6C8ZNYA9",
  "key14": "64JPihwQrFYs6M4SxxHoxeXJmbaJd34CiQGnjZo4M426cRzsq8RkzxtKuwkuB59sEP8sbNK371mTN3gDxDyL857Y",
  "key15": "2Q2CYxx9drFH8vvqqxjWoewXhJYDBWPyMDjFFY4jpdto3r4pQYz2nCpzhtYgY8c72BHLQN9xp5vsrcFyvvs5cfNc",
  "key16": "62Na6cDvNNkFazyLxsLrXLG69BFYAHVGjyw5SwSpSqWsEq5A7NYKSGtJ3f4kLgbDSBXuMrMbmgifRTjjRdUnBpEa",
  "key17": "4gtXko9bXCuUaKKpsXy5MvBN9nQvDSCa5QFTCLURqP45pRe1fB2UU5HuA63HoTMnXDowKLuNsfwyDN4SWtbvRuyq",
  "key18": "pEAurGktsHuRv2zjM5TUjtyLivc5LMW4SgjVSHP57QekHbr2R1qN1eUyyEcwWj1FRjnjnDUHukdoFQG9EEzcDXa",
  "key19": "kwXv9dikUZNgmpqFiEuVEoJQJrVz23r9yMV58ErXLwvyF4ubSA5PKoPyca8r79SRUQ14XKJe5zAjng2vNd5nuM2",
  "key20": "3FiZs2mFC7CwhDkFFDTu6qy92qqNzorPNvcz66YcGwaJe3zoMeqUpDV9ggFxnuKH8ADiBzZYervAapgGUb3Q6NmL",
  "key21": "5LJvnMZrxCU3WFbS8QgSpSi1pUizX3xjUhxGSR4s5Pf4KYm23o3c3vydiynBT3Y4d6vAL5HEVikJRufQz84tTT3X",
  "key22": "5H3VaKkubGb7Yj7azsPnC2sNfCQcLzD43siso4Fka8Gr1q4jyG82SsG1ohiykG1Lzyxv7CWnsvx6N2n4FjFMTLS1",
  "key23": "5YzmJCAu4n3J9mLsELA35cacPRgQKv4MabyFFTXwLGgQutWEvNpxUuogsWpi2bhpgck3Ay5sifAJdj9tdJDssMDF",
  "key24": "5FU5ZB5yrMw12xoQ79LeQy1oQnjSJ82k9CAByCG3kkBWPhmrwdyXNx88B27NibVjDWBgpvXUJKJJz1QpMdPi44kj",
  "key25": "3g6B78YAwRDx1h8iv5nUzwcQgAMsrqkLSfdETrPkG55NepR3E4iLwX7nmVkFtNT9DDF4YVh4K14WMSrn6r4TRZWB",
  "key26": "344zPZoh5p212Bk5AHENufphmYZxT1bXjTD3mWHyThBTfs4Cm7ncZmZs7eNzh2Sh8ULoUcJinnkMvq5FuAgvdcP1",
  "key27": "59x2XBNY9XBdhfVDqFbcSwKwq9zoUJkuVSEQhGs495dhBDuPr2iXLZ6jBq4rg13smQkHZa2FH6T7LZxeRqcagyje",
  "key28": "549Vmh57YCxnSAgTryu6J5kah1Ka6SVQF9fy7XavL8yDRSzJupGHGmxpjTn6qGTJf2P79j99pZ78aav752dSbQKG",
  "key29": "4XKpK6Y8vrvdfRg2QaGn5p9E9c5GdkntZdbnNrMh8ybiriWjY1mA9dVoVYkrVuUvjPBhcF1xJU2oWhgbtie4rs3K",
  "key30": "jsbkZYMQGxtcnBcHiRPa9hdfH4sNruVU9KSvX6Mz4jfdXErTy8nUFXpGbpyRTFH7hvGuM6KSye5kKMPLpoKK4B9",
  "key31": "2K8FBE3DSeWaJ2RsUdFtGHQTDqJ2s1QoiBuc6PWCyfaDhJETwW4inZ4GQKvEHXbQmPnEEwN8jM3MaZyvXow159cx",
  "key32": "4RTeA7vk8Yc3ZNasUpqNVphPu7m11eK8NxdMxkUPCGRFviUcHGeDDeFMrqfqqsszzJCLbTYXQwtvBnpczwozkp2g",
  "key33": "NpoRJAFJq3F9nqusPXWTrCxGi7RZdzzxchasfDiLDFFZZVPYb5oto4DNMNTM8iqPkbf8LgquCGxN4JoCG5NYxdj",
  "key34": "4pporj1kuuPyH8ekPksRXVjoq51jHZ1SSPKwK4d1sNVRuLcZzeD9vWHRHnBxudkD22YS52eSUVsdSu4UJ4K6bbHA",
  "key35": "eyhieUV14vYi8ZJKLS7b3twhdqAzqoHKGhq8sU5J6TRUUWgBA1Uc3Dr2UdZ2QkC3SCGYLfMsAeodTatuznNVde8",
  "key36": "ywSwyw2CZw824xwF5SNd16FQRs2aG1eTUZBr5QHz3sVWCviyRUCkdiMKCmExBdVupAi5ySbe1xeVPpZqmNnChWo",
  "key37": "24WsS21AcRwyqEjxeNvNym46eyETyWuN9KzDmKPfay54pKjTMTxMZgSE9D3fZ4NGpbDnF2CpVsUnZ7rbnSgJ7iec",
  "key38": "4gyNLFBefuDhcfajx38BxF5gfUS4NFNRA6TRgiHZbMQGhSX4n5smekSXyqNhE8mCdb9oVusPcySKKxKkUiZcFiJg"
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
