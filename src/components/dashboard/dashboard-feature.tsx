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
    "3ZZrT89xTZxnvzkad2edFh8H9XW55ThBKrrK1LQpTGwmTDKY5cX8XLPvmJ8pmq9tAUNnfcxdjRNSwUfyEpYG6bmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "299r7874iQRcWrP1QhmwcUJfcEYMJW3uLyiDGoarLTV5x7N5cEGCoCZ1Stm6sXdDBnRfrS3mRwrEhSg1dSiAq6n5",
  "key1": "gsMxhhDz4xRpxpge4NjiuTfkYsH5Wxc2LyaTncPm1nqXkR9qDgioZ2RcxwumxXPtsyLDWStoSgorvHtZyvdk8nW",
  "key2": "6HbBusYCkqGezPd6JJkphKVq1AduXR4Wkre9xMX8T4CYsSuxQ2rtt2BxPaJsk2JADvQaSisVqAJDAWSTqFMR3qb",
  "key3": "3mRPbzoToZhSLLg4qpCWrjGab8YmTq28f8PuyCLNudyZ6uY7DYXLUFPJbijuMPptqCWeL9JyK7SDkoXA8ecnh7ro",
  "key4": "2CRdYGCe897NspDBpJHGngQ2AoQm9ANpcyWT9xKcN6ELSTQ3LCzERDerX14TEEdn2pDgxPB6AWnpcd4Puz3p2ofH",
  "key5": "2tq9zKj9BTA9Y2X6Kcswoi3523FW9ESdK4AZ5gDdYCaY6qgBErDZZ3L6gAVszxNsKV1Np8j3UhrkVchqav6gVAbJ",
  "key6": "56a39KEVDGJr8AoYQoYTULBEwzTHCxVhYSADuRkt8oPJQ7WUa5g4qa2Ghv3qnmgtzjprNZ4hiott4deGPKJLhDxy",
  "key7": "4XnUtsP6PnnQ3xQZ3ghb1jji9aiBXPef8xVXCpMTgx53VudeWH7EFzsQpBKGz14DfUdUmaUfg5QUcYxHnTedjXKr",
  "key8": "2Tz33Do5K7dLjMm3CYzDuJNirRuGGmxc7bk23vVGvbcSuTnP65PAsx9Y6TQ2EsYPBt6FkSC9Qq7aQ75tkCRbk7VY",
  "key9": "5feHmGYWWEkR5JwhYYeUZSJwb2ZgABTYYVtBGhZNpKCa5EwVym6zSE5mG6x3Nq3Qu7UovoMQdkuqJCa6k5L8WH2m",
  "key10": "4EVeyN3qYCEScrckEwfHPhkqfbe7e5HY8y4vyE2wHFywQhUdeeHdAiAxqU1wutEb95cqWADDEDUTdNGARpXAuFXe",
  "key11": "WZ6BAkhVKhmovhUg4X3QPgLpw1do7tdWPo3jCxY5hebBukSyL9UDapTGNjxNCBZXwMQvd623ovzHmKGwKuJuQHZ",
  "key12": "59wCyXz9gJnrYh63nkpbTrGT42tajJ1dhh8FA7r4oaBtG3iJDU15cj3WSNEfKmN5VSHp8TD83brVHKmfsL3dXtBR",
  "key13": "F8Rqjnprc8GWshuquPYjmNPxPM3bbcmJQZhbFZNLDuJZms2UTjoSVY5vTbBt3xLHveFecdtjzcz6KJyJGvBgwgK",
  "key14": "46sxCjjL8sFgbvZfEQdhfuqY57KMtu1MTrXwpBVUZteJqRJ13ELGEcRjJDgrs5USmkPNG2MnVQLrwNRbU5RGMFBs",
  "key15": "5vM3cVFN6NEZiJ3DEf1oTMrZzfUFLsndiyuDb1tkvbYFgRHdrQvP3i3zfA6fzqKBPuVYY5stAEsn1tPeGuiJ9nKE",
  "key16": "4AecAS9npWt8CCMNbSCkb9vw1SdTFLyXtHgvPFgaFjjH9MJX3dupYwFhNic6KFxGUtEEVPjPYK2VeDdMu4FN6DAt",
  "key17": "2ab5uRqCK7Gwkx8g9Lxq4MmDHcHdkiSUW7shh9QMumXWZ4XbWQTgYn4xrGevGun59fPCVTKDUBvzcS4a9S5wZYUh",
  "key18": "4bMk7tqoTrN9tpj8tr9mYfhMcbtGGdT9TCwGJLDGJ52ouNZRQJbM78koRHryhyLsaTjooB6VsvGuZX4634HRfBAg",
  "key19": "4AwCJEDHoirxQkH8cZESQ4LbA7iZhsNi1L6tGpuaXFkysbeZ2kQNtnJdbYGY61AfqVJAShLaeHNbC6xgnqLEcxu5",
  "key20": "2YdGP5mQKpamXJcycdmR1CutbXyeNQ6XoXaVpPDW5UMtcxh21GdT5PirHmtKw87EgGJpY5UXVnzXr32EPxEU7jkX",
  "key21": "25XjvXeDkEZWP2pxvT7LJYnqpwLTCAfFkoD9CP41t4wJ8uYmvKhrRmEcRVcUPeovyFapoa2v165J4st5oL4X8VB3",
  "key22": "55NGaQ7RNtQabW4uBvsM4gDsu96RQx4Rpua7Q5nVd7bnCUNBPNUS7sfwVcwaw5ydKpFxdWvnXVve79u5As18yQhU",
  "key23": "5HbTgAm2tX3KBy32TEcXk2QGEmbwLEt6Vf2pooTd4pm2oMf7gpX5S4R9p8FuGdwxiuS5kemS8wcvpz8DpeDomYyY",
  "key24": "2oxh2TbokWqj5pCvJAoVeZQu2q3E1cYncTgVfHjaDEd2kYhH61VBb1gWpXPeWW2o4g7uerHb9WMhkdFAXrKX6wSV",
  "key25": "4iCNNMihztzrfDodTEvaGiWevWpyd9617N2ErdEPTWKBZiwkcVxhU6B15tqK5DrswWSRunzfKhbY2rjTs38c1DsR",
  "key26": "27ryescGJNF48VCgyCxtRvwAGFQ4WL8biNqKNfoMvVmNn8wYWmmzQ5oCNYXCRyQxPMiirodgSh8Z1cqy91edtmBr",
  "key27": "5PYGTQfsQ8dy4KLbvppXU7KGYJATcmPJZzi6QsTVqNGixEn3vHhpSbCfkNJQ3QdKjHQBiz5dKgnEcCmxbyD7owRe",
  "key28": "334bQnRcSucMEMoaCzrNCCqcwAhdNci8MC4GhDJKwK66QYZ81c66dh9ex6zRwNBAZEyL3BEQvfHknRQUJKGSjYJP",
  "key29": "4UDELtHzjxpH5y7X7BZfuJpQtyFETjnPGNLx5Ju1DGeT6vCUdD6TeUC4hRGC2bkq6tHnXJLnLiGE2PRs8zm3JfaW",
  "key30": "3am2eEc5oJE3uuuu7yxSoaGf8adz2awkkptk24TWVZ5Dd5M9EQ1umyctw4hTaajugNBuqGHgDh8bDvwtxXUrdTmQ",
  "key31": "4JYUYwJsrLB5dwAaVBZZU7vT4DkuBaeHNBjsk2hYsmwzwMDrvGh6yHHxVVDs3B7i6W4Y3bPnSw3p4Z1c9QPTXbiJ",
  "key32": "5XMDeF62MWvW77ewZm7hbPwCopFCk2jWSGDzVvRHwhadXqvk4W8HJMPksaLapuejtP7tthyLsqGRi7f8uKB3Acdn",
  "key33": "2wb8Ha7FEFVbJgnUYDi38TdPGC3PLFJAco5JAufZGsRXaEQ8CEcA8Q9TS3uj7hopr1YonmJiVT5ebPUP7xNgmc2G",
  "key34": "2BkCH51io3Raor5w3Sd3G8nrDGgpKPWeMcoSX3Xk8XNYD9LpqjT8tBGtkdRMhgVikmNhQ34yHxZzjvCjXpxumeDk",
  "key35": "JmZBfnPN1EQaCvCHZSS4npT3TDuJabGWK3A7sZWDdmtjQLRYY45oTRR78qJGo7Xp7VX4dPnvPcP6P5DY1pFiWt7",
  "key36": "4WVGtXZfVDpunUQzuZspd1mWPrVWiNZXJx9EyQJWmndzuB6tryUs7ZC3Jn751WWFSS3YV4v1ZNKDBg3jUH1kJDvE",
  "key37": "5EkD9pqUz58498v5qtP8irChJXa7iMUfADsB9edLvGwLfBcoLRZJQAVSW63RpxTE7asjVZbw1V5dbMjJTS3499T",
  "key38": "3k2Rj2adfAf373Pnyk9Jm3FBJ9SxhHUSNf7hWrer7vqzrGydMgqWAMfpn7hWedX7a3NDgRohJQT3cxxyekh1agCr",
  "key39": "2BKayx9L6s8vV6uHxoFuZkkiPrpSo9chtBQvNf1fDU2dm2rTojmdiBBkfnv5rvUrSqKxMHG2Mq2rX2JFpcvv3Ffe",
  "key40": "5qyN6rEBBXUbkF8KN1CRkAHCHMY6Ridy818rLFmoTWKGXRXpH4YpRsKr24M41QiRgwFjrpCNDVcMX4CUSySGjUT5",
  "key41": "3gDuP7nwNVDBAp2Za48GaMPvVkfmyWttmGowSsBtmMQazUmQU9AdsCHqn7QUJTTk4g96btboNJQ3VkKbpT3fESLW",
  "key42": "65FRTQTC9gu9iCjhK1k5LgSLUZni3FDGH95rLmyt6smppAQYG1ScQtrKCn3n65EazvinR8FFpMKjCbcymRmmwzyr",
  "key43": "m1TonvqJszTg87Rvzow8i2HmJ8PG915SwDBzQoQf6bYARBV8XUGXcPsYcNap6zavau4M4L9oeiGJiZbhfG4hoxh",
  "key44": "41R4m2UuH2yaoHQYah5qtVGSVV3oVo15L1wpmkF97UvE9rHTJBAjyMhPcDjSnVqmaifwYfUKvDWXUF8eypYcmAH",
  "key45": "HYkJJ6m4QrjPpGfo3rfETBP54ZpkC21SHQ38TeG2mwybRwZudh1R9cSeFDApf4BC2WewgRvoC2XHWfKNitfDZUZ",
  "key46": "2d2GqA15JrkN5e3zUUTJDvgbM9UerEEuvmCE5LobNeS9Va4h3m6KCUx7XZPyMdo64S23CiFajozcuHeE8UCJ8Fdm",
  "key47": "mwccFzx2hFGd67HDuBHQENQUtefyPaFQLiZLSv9XePh8J4RBWgej7mKXTaxncpBRS34c67bkQmfKgs3aA5jASDz"
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
