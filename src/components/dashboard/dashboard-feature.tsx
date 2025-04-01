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
    "XZghGUUFmATZyDM9sE6FL3ZPaVCLGiKk1v7kKw3ox18TR3xtQXSGi1zgX1M2aPM4EafP46TfLuoq9BKq81uojCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PTG5DAG2teGxXkaKuuEUzp82dbfMJjB6QRi8kTfv2WtFvk5AWcf2hH9LTTjvWhZKiSMANjAK76iGjwg1U4cGAfZ",
  "key1": "3U9HxukTY1MuH1Du3G2CLyqWx6PRzy8FSjvxm5gbbhgNdbenmS2CSpMH19cbSg5RHM5hv6PCqkZtzBjXPVvWTjeD",
  "key2": "5jkYgtZph2XACSaYYE5dY4Mkryf3YwufcV7aD5Bup3MSyYedVoKaiYt45LuZhLqShGnQxyTKcqyvuGfMHSacSbK3",
  "key3": "AbkbmQqzGQkiLjUmzvuCohgxZqA3WbxHC5iMMQam8vfWe7b1aS9HL6b1Do89jHwfGG9xgaWPeSPxeu7DmtcQ761",
  "key4": "5YHak8JZVhiw4GQzjkq5hNfPeTMwg4K7cPF12CKFgXurECt7kygkjjTHAh3vZ2R9xVxSNu48KpjbwJCVYuhXp6mF",
  "key5": "5BjMZeWC6oHMdqkNFqs1mNr1KJoXD6upmH7En848pYbGy4H5e9Fqx2MypEuiHeWwL1Y2xc4QuVPeG6T6ueK2Vkzv",
  "key6": "4ygRqgmqhDqPPe3xARD2JmXiencKtqmk6P6cS5DHWrcb9ZEpTeDTVARe23e8e4CSX8fFnkVpQ9TRQQzjZS25Yai",
  "key7": "45QW2ebtKNhrRnPdZk7h7w2S4nX9vVW5bnGugsSwcmeH8e6aL6MqDFV3R7Q97a2SLyHjC1LhHoYmLyXKwrsGdUGX",
  "key8": "Tpjj47JvSKbegVHx52diySsmiScRLBV6TdqUrq3dLR7BgWCyzSgR1vgxwFzKKxFs2wC2X7FMUaGK671Ugoj3GC5",
  "key9": "3pBhUPmZLMMrNjwVRM1ALbP4Ak6wFU2Pc2Law4QCNvZqDpGFDUz7nGfTDiAGfiJwvWicoLS3PUYCA6fuQjv9u4vv",
  "key10": "4ADnTqdrhLhsCLRQqMYRT6jdckZHjVEC2PF3Wz29yeuGpW9Srz6P3bYjvPBM3CriWwjq3wg6D138rPKctbWxvFHh",
  "key11": "4VXUc4BmyGX89WzYxCEi8QHysiAy5uQHagDTRiQTXzZkZoqQ8farUmeQpo9G2XRXUTS2BemaZVZaVPFShAPPFwDC",
  "key12": "4Dy4JKo5h6bDEFsLqkMgHV41BQKkJVcwTJMJ2xRrWYFVBDULZkZ2jJk735Y887akNYRga8NPucKHWHQwqYQMP7GA",
  "key13": "4BEVaZyGRbsrwR4uBvxBBwQMFQYb7zccY7pecuZhDJdJPDyE3WvGmeB2qexxp8UaV7RVzVxw8C7b3aJyPiij2puz",
  "key14": "52ABwa16CqHGC3KEvNSSw1TDDnoZJVVLf3kVk4PFJ15YzWzGajwKzvKR4zsEfhwVeVFvkFATbLLBBuw9qKVg9LEL",
  "key15": "4wy8oSCJmwmqpkjSz9K97UH49ixqS5RfG6xvhtymyToVnLZK1ErXqrLzjEUDsgSN31e37w5zgfKPqHPo7E97dTJu",
  "key16": "44WrthAgjSourTHG9vSNoFhZrY777AQTkDmmwmYYbBE7YrGynGsZvXu1bnVkwSLCtbo3SMHMYFeVsXzYhK4QYbvg",
  "key17": "4nc8mygNr8t6Jbo1UyrKtYknb3JMWtuiEqNPzuKadj6KHR2Wo8fX44gnehtqX7ir8B6vUAUr8sbqh2Xnr7KooJc1",
  "key18": "5QPVsVf9vPw9D8Tg4kkHtwvUDf1WcmZwZwyAqTDRExmAKJ1cXa37NAH4LKg1FjwkYPMVjWcSUbyVzccnE897sqa2",
  "key19": "5yWLQLE9gmHNPcbEGyJRgsAYGPcV3URYQHHJwFo9TittgNZUbG6dmNqNw7vubuZMc8fZjEmQ6iuv7LuZJXfhcwPy",
  "key20": "U6Hi8AXJtFEa2WkTMGf6o2aSj2b3Za8tTSWpuPcU1mXGsL1ugt6NmANgvXhkYQ6NWX4D3zVanHGu6PV43mdWD7G",
  "key21": "3z5agexF2pyD1ULt5ebXeeSzVPv31fNUHW5whM3yqGzT3vBfqMZso2PmH8LZHS8zv6AsJMC32MWZ6U1NCg5oGBYn",
  "key22": "5Ugcrdfsg5ecCUvBHCpZFVKJtGpKM1G4L54XTVmVhHqFnzQPzFarxrj2ZDvkwwjgvnJPZTfnuWd8BMaGhdfeowqr",
  "key23": "3DtCnrZfxTDQRGEv3rK7ddX3rxfHqaCaKCeKzderLhapffkRqSpqSgat55LxcFGwZDr4NFWh3eMXGEGhLPmfPwcj",
  "key24": "3AivRM5YkY1zpguuA6c3PV854bMyTkHBs5svynR9gesK5WWB5EohVtqfaW5oabg2eVabDNmAeamxXamui61Z3WRa",
  "key25": "2GR123ksUkhBfNoQKkzJBi3HQWM8oj9MVJ4Dp3dvmARGxsvTdj14qYLWGJN35ZrLUpS8WoCJMioWY7vPXp3ng5NH",
  "key26": "4hacKt7nHQ524WjdMKHUyEHSHj6zuHwCuh44CGLBGDxgszKriPw3yXTLxuHQ3AawVw2LLCJcBw6K1rWwxJyG1Hf5",
  "key27": "HaggpES7qoRLUPBs9fLq9U3bQ2uKw7hNct3kDYc7XowiPRM2F19PRbHG7qgseJUpo7nbDVoxWhVAFBetMgjc9xx",
  "key28": "5RZ8s6vPCMJt8APddVEJyooW4o9gj63M3NE4afsnuzv6zoRkEdJDLqGEm56BXYYUEqAkZDRtYXMceVM9mBcMAMBw",
  "key29": "52hTG2888Zm6bAnU6JXbLk1ugMRmpVrCWaiGHjSb9fs4b8pGESEMmQJimymE7Ndv3jX2yJGcspfbbq5YqEExik6X",
  "key30": "3sLvUcsC2dUb3GRQNEjcA7BLFJaXyYrBThFczEx5xvC7WqHeXkdv2ui5TPybeoy4gfrFiVVQeufpEbn9Dido5ZMV",
  "key31": "2EvPMR8MQkkz5W6ezvaia2G8FY5dGYoANLTTvUDJp9GR5WTr4pz8K48ET2KLRA49nv3mzTbHRd3W9GkgFqsx2LyM",
  "key32": "278tpWu6d4uYdCGGNzFFAK1k7bvVixHusbhtphsZkBNxoHMx88HL5P5HrQ6r2jbuAajSTHJspojWSFfGRV2tJqKR",
  "key33": "45ZMVxJjBdAWemwLQPQbrCEASTXRt1crdQdeFcUhjnhhkji8u8qhP8vsarw6mM2ScPnZc84uD3S54Bd5fu9j2UME",
  "key34": "3PvcuAvrGioJHXHpFEortgHVguZV3TpfEMD3a763fDfJJaQpVzS7HeCF12ZxmWts4ymoTTUnKRZD71LDND2DwyHW",
  "key35": "2hCz1eV3XKzPid7RMi5XRg6qTDJChqz1iFw5sxbLHqsXC6UCdHBhRqSUzQh9kuSKXYPNHktKpLP6NWfr1dL52Kfc",
  "key36": "42tQSJP9Hs3g9krpYaRg7Bk6JUbAEBoAB9guXRdhajWEMr6ixz7KazGjckVZ4XoygZsU95wLEmtcNku8HPKSzi2N",
  "key37": "42LLQ6uqBkYmpBxnh91E9KumrMzEfYLhSdmgwtKsBktceovpFd7ojRh1Z4d9XDHcPGBpRtXLUYHkpJECiXw4muzJ",
  "key38": "4NSfU2EP9FgXM5dv23QUL7wuJvjhyVkWVodhUUbGf6zCbemYU74WBMTMubPNCXzLoTWJQapzwE42AFcDnkR2QRTe",
  "key39": "4LB2qvAN8w44jnX9HXHzE8dC6AwjCaGfXJyg7QPJy8rwzFt28knGkLVUi975dWBKwGzc4ee1mNBvYvfDcxdMMKbB",
  "key40": "5e4PLYiHsJRvhrhXLdy4e3HGbG7gioY5HVPZT1wRRcUwqzEAZK858qAHvN76VQQzxsJ6AYTUW54pyZNprBBRcjYe",
  "key41": "TwAfGKjD5XNsetcboc7FEspcG9GH776iq7B7Fj5frSPbQF54MpD8jb9XA5ECANnLuAyySKcbFfgbFeE1LJtTuBp",
  "key42": "QXUgPay7tQ99grqNS1XqfvzoteGH3RB3k7z4u7pAwwHPYB228725CN24F1Ciu7r5KKkUAW7kLdQ462mJDo2et8H",
  "key43": "38Gs9Ah3ADmRFWb1djaqHG7vWMRFLoKgcrXWfwS5s2b9NHLUxGqPwN24P1sExrXFGFhmmZPMQDk878RMUWFU6PNH",
  "key44": "2JDRLJ7mC1KKj2AZ4gk4B6brQDJA2zNoR2fb4RLzVTtR5eyGnNi9ZGFfPWJjK3QLcvP8oguLqq6TWnWR94BTYJEh",
  "key45": "4DSodHdy3jedFwyHC9Bj6BdUhStJ7T4SGWWgo7ibpD5pFxqDm8LBzjnovsnrjTpHyZBWcdD76BDoipDyijqnqv51",
  "key46": "o8wPmosE9jC2qWZMU7zrGt7rWjnvBVgqQWdexrF4ekpGHhZ5fsAQNxvL7UMR2CA61dTPstFMk12rserWEmjiPew",
  "key47": "39L548okoT1j6R9ByyeobHTJF1U3C4sApztEbDrrCfxxyexDBDjfc1ZrrcxeQPFbHb8Tha3N5fYcciV8NZLgmdAX"
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
