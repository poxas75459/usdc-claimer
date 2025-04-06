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
    "QUy5ErY9PsFQSYMno1mrWdYYCToB2QhZcPu3taGkCShFfQjZZJzEzdWnriULtPdWU8iyUeEi5WsLv9FkEtknzvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5it1Yv6KnfeHYfE51VmJrAMgPiKZimnQHYtovU9ggeV9v78fVDWpQC8KrfnSSvmGop75PAq9q4eHqHyYFUnr6tE8",
  "key1": "3Hz566uKcDvPtsSNFypxmyRpW39hBetCZeD5G7uaVBpiSR2xJi9wSVb72LuVJb4nxXswvnw8j8rwjj8gVBPD5kbY",
  "key2": "5aKaKHB9QqTBudv4Jqp1yZqkUbT1oEb9BKXEdVWRTeNH9kFfYkmefM2RtxxEiaVPH5ZZbCZ4jq928VJeB6qHmHgv",
  "key3": "22QzFjpM62JnkZBjo4rB8D8xsFkhwPso994bVm3XGE7RHcx4sAr2EfiLnohavdKAd1AFDahi9Qrft4UQonWiGHeg",
  "key4": "2642cg2SYwFeynrxB2qmisxrCjkKojFigVNoRnPVM8LCDLk8MwPZC5mRqwLrrXzFfTbN3NmLQehYotVLpotULhko",
  "key5": "2vtsS1P2tJy8M3KBjekZwixFeG2UQEWpDRrR8ahw3HJV12pnDABkzrYedvxhy7MW2so9ai88nrkdaC9RiEVDfSJ6",
  "key6": "a51bnJr3gVb19fdssJfkRcQp1bQ7grvEisKdXSbkcro5MEdX2HsdPAVqq5jmt8aq97NsqXFqiRKjeo2oZhkLsd3",
  "key7": "312uEwyZgs46D6MLB2hYUV7r2ScPqjLGD28EGLL7FJNuV7n2jTc4aqeYNyoGpAjgUkDeedqLZf8a4ss5LvhZRQzV",
  "key8": "2jnWkoRn5hDzBkYDCHQzmDHrbbCXK8mnt1uGqF9x7L89fUW7oidXNH3wecn2ut24owyCg1oTeC84C7JaT2Y4r18D",
  "key9": "4X1cnuuQ7Gw9ainT7JZsqizemwmdMR6GxqbC2zVj7rkZhoY63RXmeCkHKGHdE5q4SYY3GSK2g3hxdx8QRp2yD5iE",
  "key10": "617saFLWRW5daWpKHb3MrcBP7pPJrf8c7PS8V695bvy2zwG8TR39sbt6jDGKMDHqxv9XLbxuPCJiuXgyWcjoAKzt",
  "key11": "4UAakgGHXhGTxmcXexXHVodYGratviknctsXVchHMJHsCQz6K5MEJ2hy1CEDHtXtPQqPiWmvcqgrDZZGAMCw1iJA",
  "key12": "35mEgk4magxX6xC1GZSri1ReUBYx4DHS5wNPw7EU8w8g4e5dKwh5y4HXjMJfTszrSTb4eCXoeX7tyfmn98h9bcd5",
  "key13": "336SUP1Et6mGn4WqsAE482vzJtsCVTLTzpLrw5pmFZ2UzphiNfqp9Arcx9CW5W6RmFwkrg5Gt89pgZw4XDVTV28K",
  "key14": "2iD8T7f2rvd3f5Rqre1BJWCkP9r36NUsJEBbG227aUwFtYQ8ZBvw4Cdii7776ykksfVh7NQftRF6irKtx8V6rjbc",
  "key15": "48LKpfSYuiH2RbKs9dhhrz36mCCukA4ssu6bbhSHdeh8oTrw51mfVoji12FAj5y73pGmVDyr1CKmLreexYZ1s3zY",
  "key16": "vB19mTqr6NnMQssHjFuB8BqnzTJvrJUPi8DtnCwTs4ifmE3Zyi2z7RLZfyzaXGYpMxECATvbDpKN9NCTknkm7g8",
  "key17": "5jsQczarNn1K4bjwkng4HeKue4KG1vnhhHJdFvFtzsV3nSvQLkvm9Goyv22ftzPLBW6TcAMPzkVLxzN2Gpm73DmC",
  "key18": "tdQxxtAnSannzMYQc6eefi3zmdA9qKNgTirYna9A5FV5p1144rPNP43D9123vueTmRKnx9GrVKYZS7fDTFauSp6",
  "key19": "34uwq1w38epbPBmedbpRH2REHXRNTtjCRQ5xdeJWZmHYPA7U9t6HGcsxfGSWgncrZs7917gvsVrUy8nbRJD8Ytg2",
  "key20": "5k7RADnmFwtHSnFt14dayNakvXQikD8kdEQRnkkbJoiG3NEn3nvtH5ALzo1voUEUxnSeXq5mLpiXY2MurW8VMP17",
  "key21": "2mmpSgwQQvwRCNVwDtXMZeWgJuvUHfmr9KoDogtG3GC6x371zEzQbShyumjcrvXHYZ11vffe7FmFnqKBsMueDfpF",
  "key22": "61cxYcwQo3SvgP4mdMmRTZHBVearZomt4qXGPxGMgDXPKEx1EsHAhMv1LCwW5rpe6bQf5jtDaZK2xTQ95g1nUZ6z",
  "key23": "5LTQTWEcgZQ4hHibKbdsNNdweh6PVYTSc6SPeUSM8PVRy5UwhRPwF9X8KYfdc3BWcLP5o2BBbrAT9Y92PfLquEPj",
  "key24": "3wHur4iXeJ8Z82pe39z9tbLSVy4bRTqgeq7Dj46dnDxfQ4hVuoPKCud5YQ1z7JKeJpbQccB2tCQ2vZuEqY2q3HEJ",
  "key25": "543LgUCmGhpT5Qo4X9Cz9YkRHyTojmbP6rfDRUL7qs5ZWm9jn7MYuovyFEUGbZcmUyvxuU5SDWiRvBb5JE9naSA1",
  "key26": "4WWsrJPGUoSWYeoRpr55RcmRorghEoLT4wmewwJUEVp5uZbXwKgB3hXaRTGh51wE4oMtbLhwbeS4dx1zj6rvUM37",
  "key27": "5XoXugF7tdBYt3j3zJrpyzLYQ17Bax5Vy36H2W825SCEMQth27SN99ErB8pHp95oWPM9ANxvtGQXTuWvLzhoKm7H",
  "key28": "54RqvP5TTmA6S6zUDvV72sbkZ5vsXRqjQPJUgCitQ9L3jnRCqWLnt7927AU8a3gB1B3DBkecaCRVLcffZGzqicZN",
  "key29": "5TBLS9caCh9aBWdr4WDToGs8a2m832f2UghQNKuWzvJLfPiXnG5JF3XT8gL77JuV4aCksRoBsvdXTxxNgEL7nseh",
  "key30": "2dyoyqNA6rK5n1x8Unb8eKDe19JUgxDR43ciJXxDva3iR6cYChm7QMbf4RkZaYGQwuTtXfnMWRBHkkW4orSUe2xH",
  "key31": "3Go1KvoBiboJcHkRrpRiF16cLic9ToB8bVT1cbexmaNEpXT6hqjpzGRc9fQ4Zazu7GDgDBBGmGqXDJRDudbMBnL",
  "key32": "3rBozVG9NxBydfsYzhYN3VAD7MS39vFyinarHLSoRZU9s8VEZBy8RxcMonxz9d6rjTvbtJVL2FepyCeFwHthTZzN",
  "key33": "2Yo7qREnmsVZEJ4i2pnjqRwtXk4WQKrrG6BGBCxhtm62a5atibDyBj9HCdZ5Nxg1NBKZi4aAugXGFaqWZZ3YwpgC",
  "key34": "V5J5mMRtvYr2pKK36PSoP2KewZq5N1hC2WLDFsNUMLqRyZfDJUVVKfsRkQqvZGjJbmmGcGU8xWSTM8mRd33dGJU",
  "key35": "3BGAeiyJamH9FQDojvffaJbKPKqQrZ4YPTx18CpRrwpL2iZxzkLyyVBNc6CgYrAPUYRECLxT4KUwyPbEUm3TVume",
  "key36": "5HiNZHyDy1ewR989WKtfx1aPfAD41pYc1DrAVsoFRvcAtQKB7UmguAGE4N4FPqEd2U6LsKgpCn9D3w8q8DUdu4iS",
  "key37": "Y7fjE8HX6HD47mQojezsKHFeyU6UfiWVPnXQyvo6paqKCUsXjYF5gorZ3ezz4jZmCMiW8VamDmAwPSpYeD4MPeu",
  "key38": "5HtrMrcxMJJRNy4swioT5Fk5muzyTECVZuraoHJWf2xFLKhgrRLkZtUYfKfuURQTGLg6KqXYETF5eCJxKEq3Exmb",
  "key39": "2WQomSKgdPXfG4MaYEDLAqy16UEQFsaFM1eWFE1TKDmozaCQJK5RoC5tYDNYkQhWbzMAUf9r2cB2GmZQcAY1i7P2",
  "key40": "3CQ8x3uqeMpVKtFRQeyknvYs8fSxNtRPwvRgTpHeyC5d2dswqqo1CNhyBEmru2KMt1UA9W6hnamNZUZR9hiwFDuU",
  "key41": "2xC9pAF6QD74udLHjPCFNEheh5YxTkANk3XQj52qMtgnqCtmaszZ766QNyhg931mRn5FY9fLrX1tTviwJvp2Xweb",
  "key42": "5qwD6LHkV68t2c9VzkE4f7Nieyv5okLUi5veccikVjLvhkTXL7M7axWjAvXE4Urp1u4vDxau1nbVQvPfpF5m6Mrv",
  "key43": "4Yyt9cG41XiXqfcnveDUS4QSoVaF3L9LJz47H4urW3Ak5V3ugeScWPRGARjn7ATBKcoDG5rjXdKuAeNpFdR6fiik",
  "key44": "49S5ioVC72JqbsV1CwyZZwQwcNzYzN8aQmX4nTg5Lab6PVUfUitWhBXPRWnzdHhFdhSdyTPs5xte84RFzZzdsmh1",
  "key45": "39RztyXcfkv5RjZT6ooaSkRqVBCN5gpGdXQebVZLcBczgi5n1PBz2bxQZ1dWbpZrieMGpiwNsRrowkQss7BqaQ1k",
  "key46": "5MeB4Pm9vpMie9VUg5ZmSKD6mnSiAf1DMRP5siSt9s34Jei3rhnC8yHmak6bBUzjZ3vWKZzRCfGrBdbvoyUzYUPd"
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
