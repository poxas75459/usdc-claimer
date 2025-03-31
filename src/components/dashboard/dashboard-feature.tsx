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
    "hsvUmdkDtuHF2mZdWkKDAhD43CTiGiL5HcyLbuit5b87M3YQ6LBkPyV7BgD7TYTbJq6JR7M2ZtsCkM2iTMme6Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QyoukhNeG1cxD8Cb4pD6gJfjJDbWcjNgL4sAKYvVxwdWwaUnutyVLztRoZYYxc6LdEQiecAFA4WUUuCNzAuTwcz",
  "key1": "2eGUEztUnfsNUqw2MBv6ZXXxPb2dokpzwWbxtYypE8jpbz6uSt2DJBChdwqqkxZqH3fqVQqAFbXQPN72nDhUfkzJ",
  "key2": "9e6kSXgASy9L8hzg2iBkGauxBzZDdJY6qSfjiwFWoHVEnAB8LFyqCxzynQeMkMQugeaKJ8KhQr1jZsZmrLbtmz7",
  "key3": "gyP96FTWEwv8VGHKDWaSjZuedkwDXusYsRiTXkR8zkZw2wbMWSDqwDFBEbG4VPy8FtmQ5WmZ8pM4K5Ro9Vbc67Z",
  "key4": "LyshMGPG3BPPvJfWnFa9XFb6utVFneDj3D6C3FZMedQf4ZxUpQFg3su9ePnoAEGws1iDRunwmqJzgw5fyUPnaEs",
  "key5": "2oQHrJCf6nYczyXLtXXSaNKjWj4UKaFtADGpqqTDTHF3NP3S26R86PsaDsEWFAXP7yk5ThwfG2CQ9Nty9r5y83ys",
  "key6": "5vkkgovsbTdDXSfsP8ijbDr7reYJSa5Aj3Gctenmrxgg7Fz1xJpaVtRCRVQNRQjRmmCEyjGj8ESdoNAWwZtBAC82",
  "key7": "85mVibiQUFdKAoy1oSk6RWVpYszuAvRw19syLn6jFBWE9K2muo9oVktZXFcAMjQZQkPNAjsVz7gYHFfJR1TnzkQ",
  "key8": "3XTq6st1Q9MQQ9dtTLxciTAmbQhZfd8s5dfCKFDF5dr9bHZKWc5SjiU92hMgJ6j54DJxPsBk234sJJ6Jdkqgr9yw",
  "key9": "2So5nssuNTPzV9wB88DRXurqPkqfVhNvLowzwEjSQCutCrWpYGk2kCzm4gFE7YWYUzXEBrzAyzLYPd9s6rLVK33M",
  "key10": "ozxYoMtBBKepPCzQcqprnsp8nFUVcm5fYXJ5N9RDBbgwFwBgdpAxcvgQtaNsazkr3gbmhTwGkTYNp1XGASjJXAB",
  "key11": "5gAwJ4hLYnTSrZzQuDH2RT8SBrSRisnodEpGKxQygZjzFdYTj8VuJgpdVrqoFKeRN62LG2dQqptE6AyP6tNWp3Lg",
  "key12": "3feBTmaFXo6owRZUb4TWC9TDEah2CA5C7aBNbxLfCfWP6TuBrWP2ooRwWTNBC4XQSNUyGuKneYxvq3WxYWwsvaeA",
  "key13": "3foRZzJNufexTp1Cv7dzgVaWqXCNCrGCC6dCdYJQk7sKfGT1sjYkKgcdqWKo8csir4JYEad5DjcujUekuj3HHP66",
  "key14": "44Mig92TWDu5VJzafNyz1tHWzucngU8YM5LaiyYMAfSgcEKo8hBwey5aUGu77xs8bpnjRJGCp2ochbgLtPBDWaKs",
  "key15": "oKMkaE1wsTehwYcvCkY5N84N7f9nuBpqaq7fLWrAoS44SQ2WithPonmChYGfS7YNjvQnE2geVp9ify6zwFQhQab",
  "key16": "2MGrGCDznk4cPVikiJYo3qtQh5M4p9wSof6qTCKy44YBTAyG8AJ8ASRUDxsw6APp3nnkns18y19Ve2qGUbmAyS8Q",
  "key17": "4dh1YXyjWxvpcj83r3J2neNX4M9ypJMExJHAu38nxhGbxmaE336zbH7h7ovX6iphSdFz6zaJ5Bh7ZU8G3rJxgEkL",
  "key18": "FvzHp4xmNhDUpbENznFtzYQ7ofNrFnpRQNNd7MZRfgAe34sLUzExyNrfxZn35yXj47K2gRAVznLEtsjpwA6hAzf",
  "key19": "3DzqHum3R9Z3BCfjMXfjTkG8PMFW19yiPovpFAtBZJTb6Z7SCi1JiUPUDP9UhVkJZjFUpNHTvDmBziFDTadgH86x",
  "key20": "Hudtzh1UXT1UD52n2FGnvqRVesLZ9cgnTgy7hRuJCAZpUwvjSKdAHzdRitKW6kFFq6dqw1C3bSodbEcYEKkyajN",
  "key21": "67VL7UdEjecgy88ivHc8xC8qCn1hu2bH7qE7NQhqfp3Zcr41EuPvQguS31F1AW8stJvkMdJ8CwvQm5watwJazmXp",
  "key22": "26UBCx5V7zZ52HfdizPhftsuSiVB6Q2QbwGxneRpsddB3wCNC9VSX6kn8bxifHLV5Mw3497MYs61XFarZynZcXaB",
  "key23": "3PcjTw1oET1n6aas6CGPAbgDhGz5feTuybRQe8RJmdnjJdtEAQ1LeaEoATUTmbabWEdFqPncgJPfHGBQb9Mw3WYb",
  "key24": "4KCeEt7ShtSR5ooed2metgxuQQMhtRG2DNAV29iiqBP61FYcYRHMWewc4Vtiv1ChABQrpA5og1wjyah8dAXk8w26",
  "key25": "4sBMFEhFqWttLQAQMYLmBCTyizu2Xh11wMWim1y5LWTisT66aBGDzkosqrZyquUGfZ9e6RonCVkTJB2fxXBHWnRg",
  "key26": "3ZzoGDy6DRsqmZ9ciN5i2wtuefXEWHso2PRmEFWHUYia4H5FNDipk683mwAgLtjGJBoR7Fz9TBpDc52ZrsXg1f2x",
  "key27": "64QmPUkXQvD1NCdHBn7dUPCcRBUy4rLccYTCfWvtEegPxxPMzVN4y91pRunVA1mUUNfESzzmaqKHC1WS6ozXDZqS",
  "key28": "2NeZMQor3CPotsVa32TGX8hmiSsg9a4y6m5128cgU3VGsKZJx98P3mtuqcjTJQ26QaNrsr4nwkXQpsMhL7jrepRE",
  "key29": "5VHzGWNQWS7seJmhn7Ek3peo221HzFSp6sGAmpNJcyg3GxJFhWyAUzbZcyQr2rA65t2fW1i2wZH6dZwx7M5y6zdd",
  "key30": "DZkJpNpgMGtuVuKvFTBtiMWANPSeUEwpMxSUY9PfQaW77JUEA5wPHH6xaXpofaQ6Q4o9Hhr8Z8A3rSoP4hHcsTm",
  "key31": "3JK8r2E7sdLY6qnHNqdPGTYu1F1imSrRxwezznmXdwqhnXEpXfaeNn7cP7r4AptwbkmagjRxZMtM9CPLZrqFNk7V",
  "key32": "GcCtxtZm1PKD25LZa5U5vZoVvyevHVWyA1HM675ZV8RqRzATVSGck5ZJHcxw6wKRn7JmR1rHjcfoehhbf7dPGEr",
  "key33": "2jJbToApDQzYCZPt8juv8sZ1XVyv4FUDXUyMsRdXcHyEVZHsqHqFs7vqrf7Sd65tbYsexMG6J1YJyEH7NJoQvHdi",
  "key34": "3VdavHVxXJDadaSiyDhahDddhCiZZcMo3oKvuBst5DpdcKMLd2wxHJ3Kb3ittpCFFwttHt9YvQ55fy819fSsRiNR",
  "key35": "sfvuAngBxJhazxJeUk8xrAFcW3c1phKkNt3BQA9kgMHtQZ29RUEqiKJZpTqANLQh8mXbUxNhT5ewBJ8QQ4VEBWD",
  "key36": "5t6dXYJFw2zkzP6kFkrUKcdxwaZg4d25Bm3wp3e7TWsevJgP7qmn3pJxGkTHNcEzqw4NMfZP64WwvuKZRvLnu1ds",
  "key37": "4UbLJCZnAz7VBc5pNMMbzUVDvaZ8afnKBayvHSDozfHU5L58egsCkcEMzdEgZeidfB124Q5TULXtK4CYXbjenWFf",
  "key38": "5bdgXzvGWqqcnb1ufvNk8EdLXkEhDcbyj4Rj3ZkfBtjkYPmvYA97xNL6ZFJ6PrQhJomxq8pVupFNCQxfcgwdR8fX",
  "key39": "38538LkrvnsEZ6S1brPfXiuC7rkaLTNmKv2tv1VTnBCQMjLJKadCkiUfSkhqe8VKW5f7jZCim5fJt4zc9EDg95q7",
  "key40": "4WCdky3Q3nGjpPMTHpLxwHcGzY6znVYhFWUKheswayx8FRyk2HCEjHRh9GoYDNp29pqCFUzYUsTnepapB57XPFcx",
  "key41": "51F7TJNckaMFp1qCsqsUj82VDxU7Q3ve41vNJqYLcadXjktbJK1HH3csDv5GsRdtDVJUPFx6biA9FUN2BxuNin9s",
  "key42": "5SYvedfSKeP2q1Q8UFUgZm6uYnQZR6aizSSCzHWx3Xr7j2DcJ7VrfkPgLgttmR1vjxEVQGxSmjzLL9k2C8aD2bNH",
  "key43": "5jF4F7Cz4uaMBMFAM8kWHQViR5V8Vfw9HBM5WsHSPwjaMJ1UGdX5wwFxgPDXtU4Qf4LUvwoqcdHQPpuwxPvf9Zsv",
  "key44": "4YXoVJZZMWYSnqUHA5RTtDpFkftLMvLXkjbYVihNXeeVWbJcWfXHAKKadnup35mTWvo75dbZAz4yWG4vGhYPri3o",
  "key45": "3xZGQysVhcdtCYzN2ycjm4M4yj9jXWQYLhvSLp5QvztSiLmUoivq95fRwY8z2JEh4tG1n7ThFNHzQawmizoK7tYp",
  "key46": "5YJVnxxN2fpwEFGF6x1TryQ92TSkgF2dhs7jRiwY5wdXJ4nwz3VMrm6kyRQqKTmMmtgHrLnd5QfEYjAWK1RXE8wD",
  "key47": "36shJccWZYsZrKM9RTcM19rucKDo3wAg8qTzpN2j7Z3kytxV13TS8KS9F9JVSsBBTXffZAapEY9GD1hf586pAHo7"
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
