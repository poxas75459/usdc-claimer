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
    "2g8nwFbhUV5SUMVuDR1qFnng15dx7FV3DkqTQsyKGwUPRvgRX4SkUzSkSWst9ddPbHFmuMJ4MpzgKNS19yJsBfSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGUeYes1SsEvX9pvXzfxbThfgUADoX59mocZCJpaq2LvJzeTNheezQNXVZmhDwpSXPwuQHvSa7H7QbWGqh6HJVc",
  "key1": "eBLotCeJmGWxmomhE1R4UHRNYfEqrproJTcHGQ9aEQaXGTxMnhdKWU1xHEeTehWYMMc4QsCFMeAJ3wUQND3DiwN",
  "key2": "62dGvApX82BrvvkTRF8RiQiRSnz9mVkQgmxR96AMMDaLHJjU4DoTXzQ5vDWyU2tvwrzv9xPCtVsdNT4J9zNJ8K3w",
  "key3": "Cg9mjXi1suWEqnjHLP4rtPUYL2zQSZ3EtVdouiBaDeigX136zyJzP92QQaueMjrXbfD9fn6FeAznmTvaKj5PAu5",
  "key4": "3TkNByn6r1s3DY56KwUAcn8WrPsd9tTFoF1W7FqDfkPaCeqyK9oP5ZwCgD95mgVigeXEwJcUjenBtdXXeaMtQRoD",
  "key5": "2z6zwaQ3dSBKzDzTArvm3AL3kZpBCvDPXMNuyxQnHhWpu5Bohs9qDs4LGVRTc7CNWKgW3Vr1TJ9oxwPxnTciS7qX",
  "key6": "q9vhMQNJ7i67ELXZhFJ9Edr9ANKARKSPiF1Fu4zQQWvaDPoj87kXavR5nXA83Uqv2kFL6LnRWYAqak8nNMiCYkn",
  "key7": "3h4w1HkWMGMJfVBVshNyMyENHhwuPjgbZf1oWYLTsJnZV7a2yop4BkZyjSAzQcdtSq3rcPddj3RmrSDzgCjWapWf",
  "key8": "hq7xnf2n12U3K7R3Z7EBfa5sm24YidhV8kLpLvatEaHjf8CbrFsVxXAEdci6Bn1CERifxtWnNREvMdTJeCiKQ8o",
  "key9": "2gE5y1XfiDwbmntbLnPiBD8xNSWpsPPDzurSRhGh6EatRkgyaDbZM6USxUq6ueSa31TuyRb818kcRoMxuujUHR3m",
  "key10": "2R18k9Tg3DfyeAFxFbPGuhqY9NG3xwsNt1U8gqeSqTdH9RxTkBHvZBQuaKZbmdqRh4yoAzzL7fUD7KZ3xaZkAnNh",
  "key11": "3Z4wLhajbF9uNUDywTvAtgRjtndbpLeF3ASSJJcxoqkuPrK1AQ4cKEtHNpAhGSeiuWjtrD2DGgPQ4P3UtB1yyzPN",
  "key12": "2JGb8vN3UUvv67f9B3QfJdRn23nEWzwyUcWV7E5EHow89LMDuydvbASnyVGvuYA51pMMZWyKx4kwAotcGBU9vznR",
  "key13": "5TsseE4cPYR144Loda4V37EGWRRGeG5fdj8rLG2kcUcWLbFso4ykHA7qFXoEsaS4GYcsifvyZ4VhHoFiiMStM7sK",
  "key14": "5qsiVZBwXpQgs3z2ieXK9Fd3KrDbXuEbjTUPhFBnPR9bKC9xBrmAeDaCm2uRQheJhsKu7oWZHzwEFw2Hvy4EvKmW",
  "key15": "3EJ7guejsuFTbt36xQifiBNmnqD6t7G5GEmc39hgnfzjySJf1H5BV4sqhW5q8VdP16HTZhR5X1wuMYG77QduYCg5",
  "key16": "5YfLo8rp4STmjuRdeajcn83kT1AShvsJg8ax9AnezspssrGTzGB1SywddHnuJsbGR9nHZg41pk7BkAjhZ7MGo8Bq",
  "key17": "4jB7rLP5Dus7waBMdSUgCEVkSRwmFTdzk4kTNLoo1HoZmrdkmAqL5TVm21m6VYy8T4ckB5EaZwxoLw3gPZexzB37",
  "key18": "5eZEHMfZaw4tqabP87XfKoiid6gzECrzjkNPkTyeKXCuojPmArNDdQVZNfDVqeSNkgPzM4TBAJqecp1EZ1mS7vKX",
  "key19": "vXRaoofc6Nh37AZvK5bCiPo1uMaCc2c8JhSPw6DRaLuUZSJ9U9tvEMtW2J7WUHcdRdw1SFt8kvDWVYGH1JCtCK3",
  "key20": "4mzPsNmLJobsoAkaZWw9kM9TogPSMNH1LQDEfmtCRoUFygCx5GgaRw7WiX9uFh3Cjso4vdhPekYRtXuExwDKTF95",
  "key21": "33Vwem3fpToQNchYWsRmhuoL668YcHf8nn4j2qvTkeGdBmqDqrS8zTnquo9TnpxtuJCocrcE6412uUTHmwJGxuAL",
  "key22": "4mAMMNvMTkv5nvVYfAK4Rn4qfdv42zH4fPguuLhp1sd9H6qqZZjRH86XaptYcSUha2figej51gEsgvHSnWodWgTz",
  "key23": "xrPh1mnVRd2cQeNBatBzdUAnxD7duJL4K9GwBTLXu3QFTe71sDPtcWpC75oRpUZMfcHHHpptTiJHT35YG578YMN",
  "key24": "2J8cszz5468ekEGNSAcoxArrx2jCyTWC4DLEfcyWQAeubXwJTP7c7Y6pkrB6mfDmnqynoAVK5Jc8CgY1reunMxeh",
  "key25": "2qKuGmfrqp4J41GMYba1RHyYn5YFf9pGs8VqZULwJX8MM7Txs49TypQmcqg3XDvdwkX1vGVAPCfsA8idTodUVE2G",
  "key26": "3hisuYipJkfYT99PnfAsDrvPPjQaTDPtuJsoA3pJKLDjqEE6BwwNikzuuz8hadCYDbNP32pCyEJjnqQmt1QtjX6H",
  "key27": "49T6DtqNqu8hDaJDfe9HB1bXDDZa8GqfoEHuouwuj3777orpK86uLzif1euM3zU1UaGMaY4m7SdSjm8mD2S77ZHA",
  "key28": "pBz4NJbgHRVTNEzmu7tKco2t8VEgUrTrWzLUB3LnrLk1MtKABEseUQY2yywdxMw4GzGNDpMGhLN8XaMwGFwwC2d",
  "key29": "2cPPc9SaCokD4RUU9XHnQTxVD8jXS1kREMgNBzBZJFMNghpfrkH2Pu5gYLXxbafyXSgHySnVG6oWXWV8Nr7GVMUy",
  "key30": "5utPGBYackzF4CXkXmT9mLrSLxsVFtr2Fdv6eiDRMH85Q2UnnY4EPVV726kacaWXptBCbPpTP9pngmTD13rymMZA",
  "key31": "1bAZCDxb8CqxZg7ZomgRREuUo8ttoC4m8oZzNE5zr3dFrjN2ChaSnbpTJRNiefnmg42BnwmPNKHR8QiL2gRt3vK",
  "key32": "4GbfpVxk8jqHsn51nUAoJ8Jpvuq4mpB3TnxMqwEDk3gAUhZQUZwYjyCN6gtBZe2tj62UtbqSFTm1WurY6qZG8gEr",
  "key33": "yvYcK7B9UcRDLnCk8GfyTZtZE5KUSrT7EdeJmR8m8FqFnUCq9xQLpb7xdrrR9rF4eNLhjKkXx6yZB6rDHwaweHE",
  "key34": "4PEXTyS7LtcX4jQxcfY3aeALjcLZH6McniAnpK1A1JxU8SET1ZUFSA2rF3A7d7kvyg3AJhppZ1qb6y95zqGAsTRN",
  "key35": "3WMnUryXuYY3zonQdXzEdZ7ZQEcLUor6cHBGnVF6prsKgTYrMhW5aeSF6MrZcafB2EuFDREWwohDyMYdo81VfSgw",
  "key36": "2iSD6WM6u4BLJZLQnkvimJhNKF6eegBf51XKp9vBy8HEmoz5qDM6KupuV8Ln5A8nep6Gi6wNBM1vjc9Ddk2WrTgf",
  "key37": "3qBXsrSM56BNogQHQgfc44Ews6koZ9ummSmBZP2B4GsTp6BmS2UkrfYML7C5cLgvsE7sNhiBNKa46BEBEcAqjfiz",
  "key38": "543pvhjyYFoh7aabf5GxgBerv11XW7h2aLa5yNHy69TJJM9nrdkrcyd5D6FUCnGkZGrnXYiMs1ecPkFJY4k5VBEX",
  "key39": "4jxEohaPmMkY2FRHTJ2gaa5gexXVfM1fZLgU5M2s1pDTCavDxZuCWVyW8sxNoAC2zGq7QDyBRn5MSE4SkS5xG8Tw",
  "key40": "58GjfkwUL9G5TuSN91G6fhEN1CYu7CnPtTbqNE261JatDPPj19z2igCHJgRZRr5WybLhAftqxJErvnoTaZm6X9hW",
  "key41": "2waj6VhnEUk8ev4tJw9eSPyM79ToMXFjyLPbTEvNctfEnjZbmtsHfhrbpaz9CPcQ1wKwa1RGHgBW3t6RuMTDtiGt",
  "key42": "3NYGuTQzEs5fnXRAcGWXh5kbc7ig16rRbTXGTynM7n3EnQ8AjUeXsfdHREGnL2rj6jAXA95GELw23a7G7C8zvsjA",
  "key43": "3xmrM6dWvrbZDrYDySoWASqXNeKQwswRxpYEVUspVrw9JpJsoJ2C1LZM8BByBDPBWqJcZt8iATyceJ6Mc4G7JDqG",
  "key44": "3DdsByQRJwcH1PX26NLQvHSFHEF8yseXrWRfhjp4cMPPMrspLMxcwYXy1q4vEus88irJWTjkJcdQV8Pq6FrqN9PF",
  "key45": "4S8TrhbnPxehbGhVjcP1ASZGgPXbGV5MLVwAmmcRbuHkZ2UKCrVaZAtfXLp99ywggKbfxYHhe3KK6r8sDnfR5soN",
  "key46": "c6EnGEZzdDyvJrrUrA1aUSWMzSqBx7hoEYfAUKXPdyKs64v59DKtK57ffw5fV5RFyE1aLhcAqasnE95X45fwMMr",
  "key47": "2wR6baubCtTu71iXiwio9GpMFL3MTeFsfC51bTwFYxrUr6mD2xwhxx8N4AvRNRy54yuEsdQwmGsWNeg7Ew54Ewow",
  "key48": "DcqmJHecNSBgAhJ21VSJNivRYjLwxSPS5HqQk3xgyxXg17u8F2BsxRygj2EDSJBvpTXbARHLJGGnmEajLBHtSXe"
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
