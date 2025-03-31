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
    "2UkbvwutSjXKGcBSsWCw2rbEp6sKRCEhrZ587SzWhkLMrGzsbqmZpiABj7YETMe1m7nf1eJ55rk2BmdxjUQzxYgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KN4hF8EfF26ZxTkwQJZohENUfCTNYVaxtNr9bFD3LofShxkoqSnasXh3omwjnhPkPLjnPtKVuPNyrYpxg4d5rA2",
  "key1": "2np1rcqRivUwNBdky8FLYLUPbDdcVGiP27MDhoUWTDn6whw4RJHLMHoBFAWmU4VD5fVWdrRTKo1HEbhLJmPGSKbn",
  "key2": "62dDUARYY1jAB9NJv6XUSgFT6bBcjmShLKbuMCTm6pLbTvPCXo1d3rEX8LSQPHs1i3NwW1BT4fNZaLg8Anfp84Y5",
  "key3": "48MMtBK9ShbZtxDJ6SxEquYj8XxDDmEoctEhg3Pp8QDUjvtZKN7gjbhtD2tkoHdZRVcsvvmVvosUK9Br9FEy1jMu",
  "key4": "2THpTz5cGBtgxESBppLCHiomw9Ju4mS9aJ3zghsfNLoSe8rBNhs55dhDC9q4NcEA7LgagxdekznpSSNtUuEYDic8",
  "key5": "QPAN5P7vN2q99RytaFnZq9VKubQfruj1beWzX2RjKgzSSyLW7u4GWFfig3V2DrbXuwzLPy1bTiZ7dTKxHasmMGe",
  "key6": "3jnbrFDkxwVe9ibPL2AZaQRTZSnNHxZDUgQJbxe3wfSPfo87XPJZXDizkbnUzSSBzx38gCkFYvjvzfPWjFercCQC",
  "key7": "55sJr5NooTRmoeYNhJDGD6s17uKJJyqKgzJCA51jKyXjsL25iTEQHnvy9Nsj8JQefaBCVbpya6s9TKR1tnh9vsYk",
  "key8": "3zQuPh43hLY7vwSDz8h7Kxjyi7SCeMyniktxT4mAcc2k2AiA6QwPnGwaGwukTybHWKrVkazShP9RFZLfN1hwqxrH",
  "key9": "3NwyXwfeZEByoAeHqzxTUnixdcVUPM5ANbjTa7xKgMi225Eik4nt5wggrkomaQJWpfP3YktzCKkH3T9Ne2vcRX4f",
  "key10": "ZpoTejHyoZ1R5D2N1ooFvjhRgphySnRCauNBxiF4iXqLE9cLm15vTD5ZddE959aPXrabVp1t4Ft73ByWraZg5rJ",
  "key11": "2DyfVmxEVZTPS4yLNU1dk6hfN6RGCwSWpjP8AKFpQUeJt5jetmYZm5EXCgku4t9rexHBChUQhgZENHbwnActio2M",
  "key12": "2Qz1oLauW7sJcMnqXtGjYsHbwTt7onXUmafwen5Jz2mUUcLcsd3dmQrs2F3KEWpGpTCs5gDkrXd3oJwN5SFMPnAo",
  "key13": "32fx2qkjCX7PYRh3k8qFx9CAP4CxVkoiAibMY4L3fRw9rURaLARHnsQf8wXqX13fNzfuGvkWqCcNVs3iTXontks9",
  "key14": "45vudDRPoWqbhBvWvJQyeegk32cnc3UdnagN1QQ5TztLtTtd8XYEzsJmz2fXXJ88cdsFisxxUpybjCKU25c6pXzR",
  "key15": "hjbCaczDwyhrdcukpMAfJv1FjmNFJFUseDR49opKHhvL4eP4MzHTpVxGSRFPacXBvMuU3t8KSNeJHyrehG2Xt2r",
  "key16": "5QFzHkjGzxNt2DR78fKUwm3VzpHud8X9Lkqqh8ac76Hq7UvFTfLn8Sbqj2XqSyMVN4fzimNj5GPjhFRkrcjryfJg",
  "key17": "5d9tevSDu6XzErN8Ud1xc4chah2Bqjz8tfAyGzEFkazPQxvV39o8276LS5jbqrsYqFogFooGSiJtscYQnUxtiudj",
  "key18": "3LkaESKtkHFgdeTr36TPkfHwGgDzUH6RfsqCXLevjGFKSL93K4AygxJKqjgGwujo1JyapbDjg9gUKDyN8k1CkVp2",
  "key19": "2CiiikCQCXVDPufJiPnvRyFQtKBMyxex9XK6BN2kxSqiHrmPXYGk8HtKaTBYaJpC1kZdQ9KpmcuUgYSW82Y9i5uu",
  "key20": "2jgPdRjUJrJHJiJzDrxWjxJrw3YUAYQwzmXWFwNqoKNxT6K1pFoFLHTi9QUqtWrVBznKnCnEDLUmcB73zeMAYS34",
  "key21": "3Z7eAjDQjxf3GjjRNHwfZjPQtXN843QwLgRM5YP9hXPjwKppRHPgeP7YmAxu5fFx3rxPkEHd81SHUNetS7221GgP",
  "key22": "1qfEXQjcUA9CCEwcJS514A2wnnGPyAPqJevv1TTcAEnosWAP7PkcfYAnRut9kV8ZUbdKY68NGy5U9VsmdxGXDeV",
  "key23": "4sd6vmDZSKKHwoy7ax4scCsfLsqp5GboCSGLcQCg2MFMnREXMC5EaWYupozphPn6M3d697wF4BRpzXr6jDH4YogA",
  "key24": "4xcouEwBTNkss6i5iz8VJ9xRFj7yBAaSHEj5mX2okREsWioz86ekTSo8R6svA6Jwdz4UBWiiyJQ69Su7tgKKyf8y",
  "key25": "3CKQf5Mv9VuJCAPS16ubxHGq5jqNf93tvdo6LBobSSptShsFKVisQMLTAr96HRfPA8ygYXNmiSihVcQwmokJWQCN",
  "key26": "4SRkQoCVMJmSQxddaLh1X2D5zW3kmRZi616bFcAZhTVr6ePJnVpq524hfBTuDeu4pwZ2mhPh88b9Uwx5sawpUL5o",
  "key27": "GNeMLTRNtdufWPrKD7DB4XUP9aTjmJnPbCrCNDHsJp1NKLNm2fPos87j9x4sJsnFZmFKP7DQTJf48EwFSQ5iiBq",
  "key28": "DkMrrnWNHWsvWDzFsau1PPWnM8ykPPqsc9T6uNrqh1HDkm5VcdB35o4juqkD8u6MJtyBLbksznp5nAgrPRfNpjN",
  "key29": "2KrtYT4bgCagPEKKn2QeTWMB2wvkcZpQ2nfFmVWDjwMnWr82Cz6YfrMEVXt3gpJNL5fA54Tu53DA6sHWRV6hGdVU",
  "key30": "5eQgvG8q66U25AVhvBNZTR8CeiHfYNQrnmpC6kfa98mWaBKMSLXSRsK8q61e6Lfp7tSVF6kp3LAv4aP8WcaMCQSe",
  "key31": "4zvY95BF1DKqyzvmZqDEDyCgf9UMBWQsxGTAsPAcVD3JoFmUqhMqweS2zw98couT6sFMrg6WywfykdBDcPckszpZ",
  "key32": "3vNd7JrA5dd5VegMQf58si5nDbsMwA4VDrWjKmrqazXe6mMyfSSQ6t6492EDdkcw5SofLCoVR4gUymQ9dHmrwvse",
  "key33": "4KX6or1KC8qtTH7Z6p7sRDxXzgrQ4BG3z9dRv23PzMp7YbzQu41GFwKoPfVpDDHFFSQmqsQWE9TGgLz4dQ9oAbeu",
  "key34": "LeD2WA8qaKkUY7mRcGG6Zso7GLuF9xHeNht9fGrHR1dxragk7tpaJjNE8yw3HGjh6XXq9xqhs2ho4QjXWDRXFs5",
  "key35": "5RrgxKPG17FoZUZr1UgkT2Yx4jw9qu93bKpDEE2EaPKQxeXGmB2NdjsSoErrZ9j4wKPEGtE4WzyPrpn89hKa7UGt",
  "key36": "5xaxdAmaaXoznPndADaW1QcvXFPk3vjSsspjkHyFEUeafRc3pAJiRMPo6Jy1q8GGHFUYwF9TjLooFhhQq8gB7J95",
  "key37": "3FJtegivPzQ3KtTUhMunFGfEFox641mpdoawFm6FJ9diWa4ZxKdAaxxfPXsTXwHps5wocG2TyaFLsG2fSc8x3T7G",
  "key38": "3iuW7AZuzXLSgh1dQ9QB1pNaQb9gSRi12gpwNhNNYJFsM1b2iRsGvSNxM5nvRx7bTjwnt7NM3F5VfYfgGR13Tztj",
  "key39": "Btx1wUJQNfrLjGUynobaMgvbJM8m3Qk2to1767yoo1fMtREqCdx8PXTUsFPy36gKLXQ21XVaqUkWiMibchrKMmw",
  "key40": "2tsrsbzY7ePx89p9PshsyXhyGhxDBTZaEas2M8385EARWeJhnt7YFxkBdBTVoi6XoPsxDi3EEuwJKunV62bnER5Z",
  "key41": "5dWfRR9mAdddRtXvaDzEzGwE9pLnphVngjV7Svqeh8JHoV52VsbdZhea7bH3ABNFg2tYJodBHSho7FqAgVkhC6fC",
  "key42": "29hWA5a5Bv2GuBA9z53uNHfeU7tHCJUzspKWox48nZDNomMRBhhPa4is9oNUH4evbCYFfigk2mFhNvTWG8UQqx6w",
  "key43": "42Kcyu1kVDHTiUFCuAfryuT3TiyhA9PABhVbm9MKm2s2mCZX4wGa3HHwKCG5Y4XdtgcPFVweVmhT5mVdvDKhhz64",
  "key44": "3GixaXaPf839b3f3kTCDSP1UWEXjQ4UZKfrijoYM2sCHznD4dQbEVqJhVHmwnAMmfAwohcDSefaVf7KDFA2mbmmp",
  "key45": "5Zf8GbPBTvENxRVacxsC3XMsJWC91UPFk1yGce13EP63g7TUj5kugvqYkaDQxTrbMPV8bhf7e5KGXEFDJ8kSouT4"
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
