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
    "KEToxvF5kofL6gV6HDqFQ5i4EhWj4UJiEh5vDsof9kpFY1tBdbrDzTuvdRz8DKDM3yFHpy38jV8MWtAkhpKeszH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYhxBwyrDWSC5Stw1xGhrmWCRvEF9bkbctrE5ho4edmSvFbwxcjncx9eg7WQ1WMqmWtGJq3urvNgfwuzLrddqWo",
  "key1": "Qdar81EfyXeanmbHZsiAWdcnVN3J2Y22be7HJR3eKgXysjUgoKx3LNWxUEUzoi2wJjgN3T6qibMuCdsr3QbkX9o",
  "key2": "39K6MtXzG2e7ykM5pmZywQAKVZwy9QCE4NJiuTHQPiBXNLHC9JP8LMXMa8w2e7msm1bH7r9q4RbzoaRk77m5kLX8",
  "key3": "2h82x2oXRhdDdfLTpBff8Z8N4E58E6DrvUaNQqfd66GxfGfTDqSPNoibmHvwraJtvrLu9VV23EBJ1ecCgjHrNfru",
  "key4": "4CzNjWM4xwfY8yDTPvziHTEULQcrE3WYM8TrCm1uFKKJeLjDi4VXqebWYnYGWLPvtZkqayQCwEjKtaMdMcNW7Sri",
  "key5": "5UshxgmY5qgGAJBn9U4Rh65kHB1yhQH8R5qnKsgrXTHGWfnywBX64iMWsd6j1mTmGHVVTWTWZrx4hhx5NxczfF58",
  "key6": "EoAfajBVHtXvvLyQeZYpattwegKND8Jtu5f9BxXQ7XfG1eMNfWVNgyzYihXcZzXZNJaoAe4FqMQgvge1NhtWsnx",
  "key7": "RH9P8DXV1BkDyCQdGKzDtvzRchaZKvvKQABM39GXZ9fThhrdWiRnNfdUSKGreRNVpmH3LNZi1PZgUmv5bvEdDd4",
  "key8": "hQ4a1iu2f91GkUdLtAB1nXeo8ZvP3pYGxA2TmML8FJFJgHpMeoh2u5P7driW26QWnUSWbuGqKJ3XbsA7p8Yom2H",
  "key9": "2m5TSerF569zfsLErwA7XX6fo6hb67hnrhnfESpU7UNNcHrPvuMWMWpTrdNdtg1WwK9LcKsf51sLu4FkWqnrvNsz",
  "key10": "2KKwENCEfzrztuey4GQ1FavgwpAxA25EUB4Nd9YxbkhU2j7sDJrgPUD9TotNqKY1DmZ8Gr4mcjp59SaGkUgFBWhK",
  "key11": "2QKfaQCPsDPDLoVW8KrBYRmdjKq5HGUt8MzV1UaK7jBcWv7DZ8GX926F9RXtq83EhmVAuhumoYD9GXYEdcjb4mvj",
  "key12": "4QXwKCSuuRdBxiEMZQHjYF5KfUiQkaJCo7jidrECEUr7nLbPAi5Ne1P5xb2qE8okpBoXRzEWoTvj6M6C4gi55CKz",
  "key13": "2XrC8Ds6zeFoBso2WSUBXzyUvGmCb1mksERUMU5EMhX8YUZuktdktQLcFNmxFYe4CKVukPtjbqoAoRFbTyWjgTyk",
  "key14": "KsprnNJoaEJTN2gX2AWywAfsZRivZv5s5GyWwmxXJx3Gx125kT77LcKFmW4QSDz5CSxZhonjCeUreQ3gbWZpXw1",
  "key15": "2yKQBayuti255PqvNceMmVewaUbJxhft3w2mw6Hw7s7oSxVNww44DranRsM43UBxSPjGk9ebtQjYkpwddLKxqmAR",
  "key16": "1bhrWL6TKRC7b252bZDmiAEsUkMAp1HZDGtJ3DPeppdVQ7bzDdvALwJWmmUzcUeD9dYW5S8ZsQKftXFTTYChf3X",
  "key17": "33cxvQPT62q7gSnf3zmkgeh3togr4cVrNGNqM7ttbtvqhQt3G6zvj1Q2bVpTHtSW2RkjaCqJLdbCTNdwYPNWP7Yv",
  "key18": "4oMn44siv6YEvNFuCg8tJzy4q1248hzXuyrr8T2PSs8FWbYfcwpsKdbS7VK8Abfvzyn1gfd5UAynpkCz5QjmzoFL",
  "key19": "gn5qR6nHLKod1xSNETZDRq1u7veYZuaDo6EcTAFY4kRB8WoM1fY6wiYag93pZ5MwKUvtU2fofZAycTFQuYxdt4y",
  "key20": "2Kh8kacYM8v5SDSrfhrVwwiENgUyz5aTYwjoDHbehMe329Vu21oYMTYJJiWZLgPozCK4hkxMvg3UvJzyLkeJMYAb",
  "key21": "2RgcWzW8jhUgShjMV6ahbA4zvSMvh3amA8YW8v3RyAHnXUYVZ7CQsFzHRBHQ7JHTeCw9KTXo7w7L3GsJcUxW2gd8",
  "key22": "YAXkGBYqypiKpiUrXJAqXMAj62AcvXzqentp3xqCNKCJ7vSKFfdrNrmPJgi1eBAaFvpv6pqKw7JcSj1FbCYAzod",
  "key23": "fkLtkpCjXPtqAG16wEbx4LcM7n51ra4oHD7E7fiW5iLnQXq8GqFzNadFJh7fSYae8hFUfDMBLmYdBpfcRBmf8j9",
  "key24": "ouP5WLgteaG8oFG1Ti93GP2S47Y7UR2GaGLhqqroJXPCeLVxvikb5qT2RKhXw2F89jAQS18BeJKPRDLHPesjWay",
  "key25": "5grZSwHS5M3xJ5nrL5ufNNB3vomkztfpMrVH1v2CCFLMiB2byoQ7iBuEB2qBL8wtVeZCo92wLvpzhSdbJDWUtftG",
  "key26": "QdPH4PDEQA2gzqA2tzPmHu5cnQFt8XCAakbBqTfnBdGLVN1zsNuiAQUh2zZJ6BkdeugnWpniNgheFV9sRsNn85J",
  "key27": "537RcvP1DvECKjMmjAmUYAqqFfRShQxZwB31fYZHrowro9we5L2ycovwkW2KoGhiiQtGDycYksLh29YJboHzopcS",
  "key28": "5Pu7TBk3iePVPfNeCeztc7vRxPRo1EWqB1Nda4gvA5TjEV9dBsDKDuPxBPQ15byDdYSxJcEkdkfUomj2SRRBAoH8",
  "key29": "3Dhra3CzR3A6QW7GtWNqAjXhi1Esow1SxZ6nkxYtWDFeJxZTrboSo3wRF7bvWce7ftFdu2NHoxK6FLLu4VN4i9Sk",
  "key30": "3LjoDFrkJwn9eeS456XpVSHzoGfgTsrTMQNegF1DHNttBnJooSsvprgJxMXqiHHNMFiN8M1zBNVSBtvLNNue5yaQ",
  "key31": "3LSgA7APzot4ubLPA1JFiiVx1awNddgymh8PAMKBw57HyNQN1SL33KJUD1DTQoLp2nUGJCXfN3UGNQK4CzZ4PrcU",
  "key32": "3nGuqZF24XkRJAxu1vr9fN9AGA3oSnpwvpnWNvpb3WvvcxfXfaY3XwMFkZGNZqHkHvJpuzAXbXkXD8hx9Pt2S48w",
  "key33": "51bQ3HAK8AD7bc7YiFGFQLYhe9dm92uptS1ne4gKWXbGowSx1qnZrBCFJUxShj6p6yHPBuWuVyQEczdxiWwx7eMK",
  "key34": "5xQvDmBL4ixJ1JvUSShR834gEKVnafrVaRyiJmG5YuDu7kVcQAHKfTiSsW25uq3T6HEXQQh6ToGHoQusthYj1ASJ",
  "key35": "23GUSugzTzCKDTZRKgiwf4guusz4EZR8Jc6rYmr4SHHR5p1ZxDvBUazW4FjW6CpaC6UJrxjPgYurJQ7wCqZHDve1",
  "key36": "5N1DaANQTiuJ6d3vPrwdwWQ7Yx4Hzx9gHNiaRodvvyVk2Vt3g3cgsazv7mgwxUoGE69ecLjqhK2XJNa4aCkSXsDS",
  "key37": "66rDzWXbhQ5jpFwoa42kYt24Grfb51ydDcpxrMVVskY1sFY4nek646aoa5R4KzaQ8xMc65sk23VxkK9YBwR9CPFV",
  "key38": "5ny16X1x7prL5ipmwMKbTPwk6gPPmzSBbCWLJR2WDn5KbxvkZcNhVnPaaysfPzCKX8c45Penk4vGgqMjpyywcGno",
  "key39": "3Logu11DPXcq5mLjow4CS2zsXBp3aEsHdj7BRt4kziXnZ4bpnbPBT3AQc7VwucZ8cdJJevuvG2vMcJ8McxSXeGCQ",
  "key40": "5Qm5L5naUaLCC7P9L8vJbvgKfYXSQKBan5LvAJzndPzxMYL3cFkxjqsUdU5dLGrsKZLwmQr9MvqgNGEJSkdsyjkp",
  "key41": "4kghk67oMcktrsBD4rRJo1FCiqGEQvR4TZm8EGo8G1P6pma7bBWJUJVVFR6tA4J82pvoFtSHYPABzkxtbTuCMyVC",
  "key42": "2SKSLAChMLPiUpoUCZgtonYPPUTh593PiKoeTZb9PLaSaEVsaibUSTicUg2Xo5zNZzH5FmSLzVqDDuko45wXF5yq",
  "key43": "2devLnWN3YFfZfX2tYjsZgCrP3tQzxhDuCPkZ1zgaJUVSGpxUF7RQ4L7tdENFTL8RvZmhMxhVAuaAhK2maDWLfPp",
  "key44": "5usfAuZR8oiMWfzid4gAukh68q5TTZ7cD4FZBaPqZQ1YhmgCMaXVLTEgYy8coCtWzmR57ibuQ9z6RkHxFR9q81QF",
  "key45": "NGPVJbJWyF1wZW1yPF5USYP3iTptSrS2XuJCBdxxMDpVVW5dak9oq15pP65ajXTASPvwcNEcEQTPDuX93Ca41aT",
  "key46": "3FpqJW2kHpTs7Gs6SsvtiFs3sEu6fAjP4aDJZnfAq1xdaKL9yAi3RHrZCSPhS7f3kmYmqqtYH8v1qRTFoArGsn3i",
  "key47": "38uGv79R2K6UNpApFweWjvZHBaisfQ4M8U62nr9Zv1DmF7AuHmAgV2Mya9qGKiJiLWdo2JzD4c2QHVsG8PDvpSbm"
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
