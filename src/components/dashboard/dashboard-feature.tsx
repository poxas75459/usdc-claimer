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
    "3aUUk8DjfaY5FtpKEw4aR42RKYU4EVT4W35A2AeXYytPrupN2gduUuj8Cng7Pbj29D7UifbgEFenSL1FsvxDyxMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDStYpDA5SYeBQedfzqCweNnDYFqsjvBNvxBKj3sJQ5jpZuEiWpWDSCzpFZeRnUu3PYVUsT1BvUfafdsjE8UvLT",
  "key1": "4miANKXsaSj9DqEgR49tFeKfBntTo27Yg5vdCaatoaoE1AePTDPUuyf1Vq4CmxvRqafWyYWZSXA27uCk6X9PdEXu",
  "key2": "5Bg7pLDVe42jB47NmfMNxsAwHBucQWTFkFATMrusFTv2WuTYvbbAR7DG2BBarMsVxR6TU2SJvpKB1FjuNJFeUrQu",
  "key3": "5G36Xxz62pUTRUPEc9e4jVBv1JYBwADZ84yZo6bTj5r1aPXE3xcSLDUeXXG4bc6eKfkx5RLe6QxitHpNDdG26i82",
  "key4": "tJSWBRiw48s847ZyuzeAie7ngSGZwLyFv3MpELqTYB2UQ1cB8FR74fuzXxiPSBjTnQmypVyVoTAjvkTfyBeg6j3",
  "key5": "242Ew7E21cJKTenQ6npi2DwKxnrc9SPEZBbkmCWCWynYqChivDmSqqPE1fUg997pzRanzUVAV4opS2wKa88ik4KK",
  "key6": "vzBQedUwq6iFURhHVTA2T7XjQbRyMXy5Vmx6Cufcq21UcBjvqLsMgRKd7wH9gf77BeYBz1xPNa6xmWgyKzZx6d6",
  "key7": "4ZCs7AbbsJ76NSkdTc35mQwaci6jwJEtLHQvdPrisohhymwQEPQRd2MrV6wMicdvUkfh1RCQFXzrUBj5hxRPCtFG",
  "key8": "5qMgEVFa1mxpR7CyGqbKPFoYgneEZ4VMXT3dx5DAkrwCrfV5yCmac3YQAe8j9QXhMMc1qpG3CpEsUwxnojxMVQws",
  "key9": "2LNaiFbZ2B9QaTfmKbg7ypg53iXxM84J4LUxW7PXbPunnv546RTJD3RRqw96orZnnUEVyRKJSFccvq7CEijJmkwF",
  "key10": "5m2TBmzMz3cEHFjEnYFzcKweXKowhr6QyMXqZNdn4YKfznB82KqEwH3unoef6Vha77EeH9vMnw7N6pYUadj79Wb4",
  "key11": "3DNo4c6Xx9YZhiWXbqrruNC8RVaymD5HnPdSszcjx2WSVgXhPEjYutGuiJ3HJLbNTYirmUimpV3J9KAm6D4ePcmB",
  "key12": "j7Q2z6znRe9rNRFa81z2T921uyLTFjorv3xSCvL11cCpprYGLkMR7QwA3MwcrDBZHrwd72ZzCjycMMKx74DurBu",
  "key13": "2MDU5kq6xANYGdwX4RTREuZrDzv44b4WtPJZgX6h4yUxhX49JqR3CdX9A3dRoXUUjVkcJUDjN1ntgeso5HYGKp3u",
  "key14": "5VYPjobbXnymjWj9ibCivutggd3864N7KT6b7cXfiZiu2CMoFjx1DEXn5K5znr2KcNxxUGFeiYroCWWG7CJfuJ7c",
  "key15": "3TPU4ohkPWdWnpm8LjjFMzi98Urjd5paYDHEquKqQogu9P1qgCyqKTKM3FHKJTSrXTL4WyMr2PFkmrLq61MsSVEg",
  "key16": "2kCG6AVDpKAsk76UGkeZgpXjGEKDAZ1h1zUzvrjjy5hTRpv8HCzZZNcMyR9ARQbnRx5ZFJWbkvoXhhuLN2h7d9Tg",
  "key17": "5fdaQzhKum5o8Y7i5VKsJ5hdmVv2PDW9f4ymhiuCnN16aXBV32G7RPXS4zXEJx9GLXbgpXH27YuB8kDMubCLgntK",
  "key18": "ZuxfSq54nUzAC4J97hr4GyhC8aURSk3hs6s8cJXws7U1RceCzh737Kj5NXVgwwR4KFFET1yofkBWo4QPLZPraaA",
  "key19": "sCw4HgcMTNfzBXKiu5ed4FCVQoxLEu8ca5zBDH9cVPvSgKFPgR64iT1FGrF7aXUrNgAkJ1Eb7mJqdNeGhW8LNKy",
  "key20": "5RwmsZ4KkboJGvqG1sCEd8VViWGexFemsJdHxRPCao7DotgMQZWK4rLY53qf7y3j3pCw5p5EAXpDhW8h56FUVyGW",
  "key21": "3v7CXMAkqfgTVVX4GSMyeSt5PgcFKXpjYnS8NVybS2krkBDJ3UkMzT59yTJeWiqb5dSzTiFLVSZzrAkdAaeUJxfS",
  "key22": "4YLg9XEH4PnZsL2N23fbkoiWMtKbVGqXVepPNZiQqjfWAB4Qk1mqBrjU7kyWCJV172rDLKsQL3aUoSd79MDAhu6T",
  "key23": "5r2FtWuyumyoRmU2xQ3otSdkdXwc3nMohzkiAGzMTcVwjacPNAngw94fX4APrEj1HmXMQ4djwBymwvfAhyuGVfU3",
  "key24": "3xtW83Pfo8ogMbnKnNUzEv6R57ULanTwJU3wm1zZ8icKa98JiqxQ8YzmQ4hVDUmm4nAagNv5X7hGeStTaL51bX2B",
  "key25": "5GeJnQjNf1TyPDRs8wtGVjQ5omgtufwWMTJd2ykbYACj1fs8h8W8Xrr2Y1JLv2kX4WpSqzvBGXQ8CTE6Vox75tHS",
  "key26": "2sMByTdgvxZKRQPRzJpLarcfdurSDQvKp6hpCQ1qTooYuUtcqkgxWyjACSSWvoazJtmYPivFi4RNySCHAw1PnCcN",
  "key27": "5gRbGpoF55QcfjZqTjNNVJcqQCXZAhcnYxmKnZESY4xrBu8JCK42t7dimrV7kjmHmkcQ3PJ3jwEjAgwk8P1NscJR",
  "key28": "4A3EP5XpDhR6Lztxhau7dcgAcFVamjs1TYbyWPdWGZRs8AFwNgNXA1NjCx8fruHBru31XwdUc45NaZ9dm9gnajwn",
  "key29": "2W53hHnJxreANmZzK6LPAtDVV3ftwmd9egqp4qPeFXyWFgDuDhW5yyaeRKLyW5MbQU76mYXfpwrsdXjqF4voWfZh",
  "key30": "5t93KEibAppUUTcCeVDPMqyPYQTtQS3uMNfazHchi2PEEFLsyx65d8Lwvq8K1Ve24UbQKPDd9stnSoZfZ3jkPCp5",
  "key31": "NZL85TWowWB4E8GepFhu8v3XyKJPvNUepceDLe7c58wa6ZwgoNu77Eqc4jhut7Vuu9VKB4i6zfW4fJhQtt9oRW7",
  "key32": "3uUhWGk3JSutgFwLY3MroNWUNfpisApRt6dN3gLk8EVhH83dKXyb4XyEUCSAve824Fpp4QeEoDxPtwyc38Jp7c78",
  "key33": "3tsLAgvh4AatPMtCcp8mBvA1dNdTJYVVebfGoHCLXNZGCbFo8fwf3QYsGbigXdLtop1H78qGbPRhYHoJERZLJ2VP",
  "key34": "2zgZJLNrr8DS11JwKnedrK5bZVAF42tftNvhVCehdKtFrRBYPGfszD2JtDBhgCqaGh2r2EkoqgqS6Y9q6mFjDvWx",
  "key35": "5AztBzay8JTNh9vZiCcNHPPh7tioWKRZeJzkJMyQkyiuojG76xwoZHizygUPbSAGzDcroEoGmZsxawyVwNTwBMuX",
  "key36": "55NFU1NZ3k3xDZZTMbMTTFpoZQz4J8EUmCHCpFyjgaJtYpq6vcV1encbKBaHmsnwLQQMn1ZfotyQer9D4Er5HhE1",
  "key37": "4sFyHHT39USquTr2u2Vk7pzu4EFm1nisMQbDc7QF2LqoyaJvL6bZPWYpm2y4y1AQjNaf2be6EiPjspqXzXqWu2RA",
  "key38": "4MVt7AKriCiHfuuZST9TSqR8SwwDZe6xVph8ZjXVair2FrmgAs4wyQxuMYhsnC8JBRRXARWdnBZhnz3uerdpQnsu",
  "key39": "589rc9FASb3H1d17d6MeyKDEZbvtUAXooHwhVTU6vmb2EfBFafHDD4KzVsTNUqUpN7DwVSEHauALSF6k8KX44woY",
  "key40": "2Ra5VzqicUpZXFpVDWF1XN68oUb9eW4RrGckDDbgs4x3PWyixSxBge9mrJdM2VuSH63ibNHdoY7dMVtTodD485MZ",
  "key41": "4D9jqGQMDtzcNByhraqajz6GqnZuC9KoZbSf9gbn6k3V5MdUkLndwDmizR4yYqaDPqKEPV3fBzEzNww1uwxE2w6a",
  "key42": "d2Wckcyj4NsNMbxRg4QaZ1A49HrZkhxCkeSQwHbMtTi1VH38VQL1tLyfXvyXuu6zaCdUFZPGry8oPwAvnxQq5Vv",
  "key43": "2jpMtZ7QYKXucyZoTE8YxL37Lat6XX8fHkx3YyioQK8VsBzdsDjTVavuo82FXLvwPspxCqTYTRG3gC8HWacsXQDe",
  "key44": "3yGk93e81aBXTdpGfsu3ZpP6dHso3gfcuPcXhcAdEz1jMbyNCw9zQ4aHnVC9GTKX6pParyexGh2LGLgYQKurKnms"
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
