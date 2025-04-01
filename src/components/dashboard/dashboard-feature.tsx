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
    "4FD8cyXE6bKWxyAQUHx33M9RDQQVg2JFbBiFQeKeedLXHfSYaPg7GmSHUXKeEq64N2dNqFsWoDc3NL425Bz9vMsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gk2r6qdMT1mDvjw4n9Yy63aykxjaH8CtZa7MPehbvgynmEB1dhVNFas1924XrvhvjQrwWRMFXy6LymSusTGNK7k",
  "key1": "4yvVVmjeCFeHF88UutJBWqfQTtTBNARVmy6axAZR75ktmZM7sLaXXiXKgtMZnVNu1PUdsaAX3TLoQDnTuEGqJNnY",
  "key2": "4M8Aej4qqcury9QBk47mgAB7dmFw2u4dLQAwRMkmAuVtkTvBfpqBbuHr2Zc9wfrWxKbz8wzDwFr46xvHHKzpVfd4",
  "key3": "5njArFUTAiWbQtAF9mRU8bjZ16fcXMTSKk9c7grYwp1tGPg2AhpiuYQ1vHBJy6vKBPXFHSpUqFZVsJNanrfoF639",
  "key4": "5J8GTUevAbt6W6qikSNuv1EXoFgrJjytyhfUS2QFz5SfZhX9D7i2rtCWgeUdV945MkdUxzEbrPj4Xyv87Wh9yk25",
  "key5": "3GwxKFGXBYuDFr1dDCpkS7o4qB6G8Zz1L33SaYxgCnwH4gVfcUAduaqENRQPKFCNPQCtHe2Z7BMBFqAKswjXFdtt",
  "key6": "5tZrxy5TkPKDCF4KRjhFt9Fg3MTvQwyspyu1voASicuDPsXdY5Qc23ggLdt8ho3KLLLBipgJDU4LJZ2PBJ2RsyXg",
  "key7": "377oyUUUt86X6yBv4vnB4HxyJ7dqWrky2o8P2BwyM833AshHrXsXERRZG82ih3WZVg9ChcWYwja55BLawDHooSYC",
  "key8": "45VuFh84JRGgMcHinZJjRZ1hohmQm9Ld71YaVNqJz7QXcq25HXEUyrtwtetCAVArUMm44whR778DpX9zSYJyBoVp",
  "key9": "2rqwSLuDYsNJAEhnPqCSL1F3knNbite4Y8pVmVZW4WKQGhiWgeMexVAPVmwX5rhj2Ne9fNWvaUk9PpwsH7TSJvKd",
  "key10": "5Pdsp1Y5bsJkiECHzdSZDzSt1GSsj2XYTpwLKiTKj7vUEi8TFe6UoMcb9F42hp2MbRJCMuCWUVDek876wQzsopFR",
  "key11": "2jER62pUi954bRRpmPX6V1DXbeeTRpG3DzVCmhcg8dfdNVgudy3JLnvRX9UouSxtXtu68UVF9vyB9cQ26Htitiri",
  "key12": "4xeC3SDx34Gcew86HVb9wsNMU4wFmQcYUvHzgttDEkyjpXt4oWPHHBVpnaVRnt16qJbS9vptNZTef6xsypmVJiXi",
  "key13": "59pVWsRWA2ZYkQCAhsjsiKT3finuDgm4cfXizThPCko5QReB2cXHgaXEqBS8tLQykBDGTz8Zp1s6YhKqmVNQW2ha",
  "key14": "tEzMLCpguwv6e5EoNUm8WcQKpitzpnZA2bj3WwFjGjTGjNPygBDBg5FYBufPSz3fGpGcEz69SGDNVCaxJ4LvwUJ",
  "key15": "4dEvh6gXipeuVJ8Bts9KDu3ueuLtuLMmykjj5w952khB9jC2rNZsDa6FnVBhYLr2ydYgz8UGB6TqTvJdrJRja7JU",
  "key16": "4U7Bd3N7euWZ7KvJkibo9BmNYYK7HSibohGtafqujBrvdn8pSmvAZudqZnpL4hQkebXQY1Wmkriuk2LoXBstio4Z",
  "key17": "q8uWWh2DAotJiufL6TA28taGY37Fp3GJgRKFsjNaVEfrTd53ZpQuFKwSQUWMSNgpQSN9S8SNKRZcDj2zDyeRGH8",
  "key18": "2opjpeae9KtvvBXjX8pK8tJrGqtmd1MnXo2cP6ssXZ9GF1Qdw1p7EV7VHWZc2dVnS3Z3uHAupZYbTZAJzgk8xNuR",
  "key19": "54h913xsXUWkJorc58wpPxBfkuwZAgGAjFJfFqz3MUCWWLx5DaCUv1Cnk5AR483KJKbmuR5TWphdXyyTXNJ1hvhS",
  "key20": "2ayKoj9kgh4RN5FhAF7doNPwwEKVfmgRZyVQTdmDY3AcRW7Hg1s3mdk8BnsrgZcFzRAdZ5xFc4bcrevrsFpy1QMk",
  "key21": "4dV9oSfxKeeTNqCj5Bg55V6sxZ4LG862jfi49v6FyGcDW2m8zdmUw8ecxhUt3FanGCoYzPADup94baarqYxjhhZL",
  "key22": "5pNaG3kTgUxxcnuDZygUZF8bbPTVaF1XXbSt7xNxWCupzAWJgWTxwAXKAJ9mSqWawzEy2RTfkcfyvauH6wQYNstC",
  "key23": "4LhbLThsCPhGocnPL1EjET65qgXTPk2E1PGgxLvUsDFScDhrkAwEKeZfaprV8p2fmb13iApGj7NHCvefyC3JpGa2",
  "key24": "27cqhiLfL8ogofBnq2jFRbA44syTkr8pYBBBwPJyuVidzXQTYDkenrx3ycayyCCocqZFwjjbxfhANNoJaYqiMtiv",
  "key25": "2A2XNU9HQgHN9rkKbSkmBV4VkipXjGV4nQy9gDi1mhbMLcy4uXaBKandN2bJBKoMDGgpstZqPrtTSgDLQq6qMnRx",
  "key26": "2JNiHDqhAJbhobAo5QE9TDJXfGfNmTUAUJ97d7f6dhY3L1qf19H8WsbzPeXTaqw7KYFvpFq9Caka25okDUi2U6ve",
  "key27": "5cT63ciPyxpjKi2J7a4Vzc4gY353CnueVCQEFhki9zLCT4vkVq9QnfMjdk2MH4mZ97D9Canwn92s9oX52Tqx3pae",
  "key28": "4PA28i9zaGuDioWoG7MLSsD41AdjRUaLEyoBuwaVUEXiYRkLBjBaCduZZhd7shPU8razNSuxFZruhXSHrBT6D6ZA",
  "key29": "2w3xKGW73apJSxTPYZ1mTzQCFC2caH1tgUMALCRtuWo5UPu1sTwmka4pZ4sCtcmfpgPrYkVSmBjcmewQkkF8xVwF",
  "key30": "5ECow1qzAEshDyCkHDU3BkoTzWsne794Xsdm9DxoKyAA5mpsaLtHx3cjKc8sNiie1cSY1UPVPuQPRZBSKbdGn4hQ",
  "key31": "2ydXM1X7BiN7oqwcUoHWFQ5h6PtwdMGq5szW2j4A3Xw2SfcypG4ufGx4pmP3ZKfmied7jxb9P6Ehn7U5aMJbEcfh",
  "key32": "5CuPVNLLoSLX6imMWo8dSEgXYz9QtJR2WxzkGpVe7KQoNuhvXAqbSH1pgK9NyGogxmBFGdmNZcms8XJjs8uLo35W",
  "key33": "2GQbCbSRxvqbRe1kMeESfnQX9mV6TU9JP728KC5qAf7bhVTrcutFuLYqZNAKYZfPjXxkeUNhYQK9ENbzRMBTT6D3",
  "key34": "4P1N52nxqJqW9dUVcLuMtsmGVud9mhEWBu83yh1bu9AYghr6Cu77AcXNaRG5XQCQFf2aR5SRfNW1y4wvHWZYuN2T",
  "key35": "353gL1bBQhiU6dcd538tbHU5ow17nudFeymsAzHFXoQmr8rsVePmXtWEeuVykEAttkho2xH48Gkqs57sLYzy9jxk",
  "key36": "x8SmXJpUbJ1gAUYintSXD8tf68EMisL5dEJQ8gptU68KpZHcRGtpQee8RgDJnEFSt3G3YH37PcwAV3MgWRwSKUd",
  "key37": "2TmVoXxALEi6y2QvrLJX9PtjeS2eJXjw1aTbaU5PTDD1F9uxJDjS2Y6oKkV6LsmbMb1eyjaN8ga6qmEkTqXwsLna",
  "key38": "3H3Mevp66ZsMR6SspQobD7V12avS4k8i2n9Srdqh3EWAvttkxAy9yUgUhkiBhaShJoRyJosTeNjRV9fsCvesGRHD",
  "key39": "4GyzsELNE7NM5iZEigwioWH5VWby5gBxrjeecRyDhvteUn7LxH1CKZ7HMeD4pvchHwYNgBVY8Q4ZuGcgaefuRgHd",
  "key40": "4EGRi5s75dBYT1JwNjJb9yr85Lb6oDeWkusHTRTzmeV9Fu9kFfxnH1kwaSGiDk1BwFZBUMnwG7zc3Vj7L1tWynP2",
  "key41": "2cDDwFwTFPCufbBHptCq3mCQvfvtiuKmrX8jDTKueBtNNoAi4pw2kcWSbRtgYw8jLmcMHs4oyorDsLAQehBXzgbt",
  "key42": "FvP7edtbF3PubDdxmkHHHdxB42sMHAauyZE7QNrQJrYHPYWrw2au5pQCXFbwvNBbaNJrMr4jyotJn8eyjGmJfKd",
  "key43": "y6Ha6ocCh7WGj6p3XG8zMY3S54fGvMkGa8LnkNda5kDpy3kJo3VkjrP8o9yQYRTquYEQqZc9g2HCdrSo77aTEs5",
  "key44": "2d7eTRCBQQszDkoHKUzLMwYtLTHmo97C2G8KxxNqNntdPHwSGJhCMRUXH6hQayd3PeSzXUzk7W35aAmnjQryjXL1",
  "key45": "4bihnqDVrJegWFGYSV1oiiDiqYJ5paNpumkcEeN5r71pcvwDqogHgd8Kvv77tQNB5ixQfpvjeUGLAZDVRysv7XQW",
  "key46": "4aLYJ2oLMs1NhL1AW6kv6mt9WYeseXud6joV8gz6ySk2d77JdHKEr5F4jd7RbvuPK5NzuJmNA5mhUQJa6Gi5CWzt",
  "key47": "4UzvXCB38vHLMqQPFFuhkPBMFjrrxybK4xC3VSimLV1aRL7nVCqpmf69CkQxsQnQuD3JQFJpY5XSbPm3c7QBcw37"
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
