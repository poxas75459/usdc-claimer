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
    "21w7GoAJA99PcqxgCQbSWRS7JDYwMYjbTL4FSauLz4y7hquwi3QVaGZfyzV5BbDnNEpbNd9GsnAMsgbXXcEoT6xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662KQQY3cJ32NBk4i9gGt5tXpriHyF8RuNKEdorFzMWw2dR1XVXHfzNfsu2H1DASz1Ti99nEcj8u37zHts4DnWBQ",
  "key1": "3FutdHpNr24yqvmCAmdHZUzKjLPY2jp9ELTmq2Wutdx1AFT3D2Jgea1D95U88maTEqDDAmbJUFRA3jyXVYnTEg2e",
  "key2": "5y8f2iYWZoL2cCgeeJi8MGKFN9oPbtASkBabXi8FEWsoBTvpErm2GA87wSFNrBeaQX7FyF5agWhnL5ajSTccGdXi",
  "key3": "4cuU5yHYrvGrY9K4JPrmLcP88NJUogxoXVe9MMdaL5v2icAwfbr43F97XFrAwyRMfiQy78vStPGx4NTxZQsduUZy",
  "key4": "5dM1PY5q3CghRpDT4RAviqsjFqCPevYrjfKXwf6ngVAvJeVjjEX8DCnyS77Ftk9is7FmCkwg6R9zSZCpWrGeJab",
  "key5": "aH6mhR4znjGauK6qHgZJLRMU1S91u8MX9p475sAjkebJCLv7HvmzanrZFwtRm97ch8wT1gcG2wxJhdcZ5SgtZaZ",
  "key6": "4S2RgrBZu1HKNzp8RsPwgD6C6KdsWggyWQXqgEUXj71fweXkUe4hYMMzg1Rkng4ai9QK44Ud2ctUznGjV3wtNkKM",
  "key7": "22nctVLyQqPTJJvfKzDy1saFwtEotnPCHsWeASfeMhNQrQ8H2rt8W2g7nrQ3hRwQkoew6miLjbLgcCgrGm7X1VGU",
  "key8": "2nbcpLMmMcT7kAgicGyeVVr2SQ3YRym7Q9ajPwGbtYDBCHdwQnKYUz7kZC6w3o5kMYsGHi7Tm5B7vDNQxeMCAyy9",
  "key9": "6nWu2JL6jtkhbQ2bQtDdDv5A7UySFXftvb9kMZCNjWLA2PLCM3vFvUBPsMsNMtBeEatg3MGgQ8FcKFa1eBzbdFz",
  "key10": "4W5XbK43YjPYVWeLmzxxdJDBDrPVNBe62mDUqASx4dtjJnpSU9oJ2moWQJGULAs5MAW28ePRHG8yTRTk8zWgBgdm",
  "key11": "5omuz7DenKWsXzU8fe38HpDdj3xrBD5Y7FAoGgb4xtJV9ZuhFaLBLxqnqGfcYa9vHchWVFyrvKTwptXynVb6KFnm",
  "key12": "2EfU2AJwCNcYJpvkcDuCrt9Tv4dGaPc2tE7RfBEyPkE2eAcdKEBkHffU5zcP1B2HuFVWFFVt7MbuHemBAttqzC8P",
  "key13": "47YzUZnSLKLDCopWyV44Qc4yburEoCXSaKKBf9fdscwrofXHHaSP6GYaPCHNmhfTKPi84AAsuwNc1xj3tXhEdK25",
  "key14": "64x4P6LjNsipm1JaVhJu7npcmcLYKgTTM5tQKfC5X6KNFoiT7AkoSdYHVctnSxs6zfesZ3K3DtGXkfSyrk9qSGtS",
  "key15": "4sZrYEQrfPkSJYnYhKuVJ7SVeb4pB5Y4dBrRqmD41Gih2ewh5Dig5CWhhbzrh4KtgSkonAnrqzoMUv2gdjz3vsxz",
  "key16": "4TdjU3d8y5Qw6QmoyPAjyQ7gQrst1TZgDqV7zuEbFPsnxXK15jCDrvKFffxDxgMfDD1Qq1dsQWLQxdvtKY73RvVd",
  "key17": "3qLnbqtvEg434EjvTmXnJNACzJwemZs9ZD7vpaKcnSKehni9Sfh3vChAx19ym3bjKVmubEjdp3uWxnT8QCD5cyY1",
  "key18": "2aHHh2wLHdPiPgFtM1PJKhmt1Rr4uusBFn1BJLDn8i8SMULmTFr7DQQcTCSXMFvkCVbwYpTGNxT7dDJNP4vpWLBg",
  "key19": "5vPSFfCiMoSZGrtyseSkU1ftR7GaXomNZu5Z2Qra5gVAWky1RFwBFM1ZBjbJ93p372PgdngzRALRv7eVfX8aUwJq",
  "key20": "4P31GiV5z2DAHQ2FRLmjS4zn6Y2hPZPrxEmbdWAsccp2q2pAoUpdJ8ZmafsdSsv2N1UrK42BF9bvrPEFGRwxp7Xq",
  "key21": "rws772ToXKE2VdV6siibGMS7MCsB2XdvN5YGYmo73xqFczZetyW53AdEid4CfGEgtWggq6WZGq8YMomKZAy7efW",
  "key22": "5mEDg6mS3BTcDZgqXDZbYtY5BnPC6LfYZAiMeEf3swggTJ2AxP7eNSwJDUbCWmRGWoUSJbJCdwqxDPoW6BXmusti",
  "key23": "5uvJr5KexcoqMK6CB9HgbS2mh9UEkA5bELYQAeAjQqv9Jj7ypjA9ZYjiH35v6h8qURRPKbP1GxSV3gG8dRPi5Azh",
  "key24": "415zKXfDqU2ySXEnSCzSEa14VjjprLELC98qFyFMFhtTRQo3EhSims8x5RSjdyEsedCR6EAudRQEAn5zXLjMCe25",
  "key25": "3tkPWZoNi6KvAGwuCFUKT2mF8AahXwyHPwwCquqwb6S2JtvUK3B9cBzoGhnB9mLpCHsev2fFZT7uwtmmVdsRbm16",
  "key26": "4HpwgfX4yH1CYqVSGEsT9kYrMnFSCZvZP6CaLDA164T2FNjVhGFiGRXLm7RKm5N6qCJJMGifAYUFfRXNRT4iXj2E",
  "key27": "5askv5As6Ao7Dc6hBizwB13tQaNgXx36S56m1hW9YWpT4jeN4aUrjmfYqNCYUnPPg1exQkR5ZAPNMDHD6WJ4c6Hh",
  "key28": "3W5qMvtN19aRTC1YJG66oMy3myoPvvnZfw1YBT2mszd5fTiL1MDCzmL6HwMwfScivbfbhNpkTUygmTc1hwRHH6JL",
  "key29": "32qVCo2q4V6Yp8nVz3Bj1jGKMVftvEJNE58xnAnQvD5WYgBrah4P5PbppqqmCYETXjZuiVSmzLugxJA7x2eUqGBw",
  "key30": "5vbsjfCy5FgQEmf1nuz2aTui2aCkPvqkZxQqkdYV8LUy7A6cHLNwSuSZ6C43SXmsQ3iPjVfq6zCX6oqL4eMTdMPm",
  "key31": "YzHk8jZ1SLfvvawGBL9wCF5GdJTEKZxmxp8moUWy6EbHgsRmo1BDyWR9ow2RGAd6TPRJHRnuBraC5Q3P6A4QfwX",
  "key32": "5GfSmxtARDw4J8rrN62ma4DSqQwcfNjTFDKBEdT3kGhearcdEE8en1A5pu6EdL37VM4RMmWiZpQRNZ6DCA4Jyx59",
  "key33": "5g5s7WoZphSbgnY57enHitvifuwRY1P2XhbrP23c2QHw4jmCevkFskPzFzah1EJN8aEJojXRj8NoKAz6rRC7nesN",
  "key34": "26PPJVNYjq5Ztb45EF8QCDAZYafyRbcL3sjnfUqwNfM63SQNRvvTYGfRycB2ZrsEexMgSzzzZs78pR517iR4BFeg",
  "key35": "3rHB1cFgRQJVNnwCHkDtfYToqgqvNj3zUBZMRELPKhc4yPqyYidXDPS4hkL8DnFzcuTfbf6ZiV4DKSHUJQ46cLYe",
  "key36": "4WhQduWv2MT8gn7MiYpAkvt7iAnrLmKi2DbRk6SGznwALypTEtVAdbmM2vgNBG2ecZmweaCgTx1MFMFKWbbS2189",
  "key37": "3reczunvPisgrjao4xmmJEYCexsc3niSxQ5NaGQjVkfti87QqYLsfC6C3QFtCQTkWu9Vzeweehv2pYxQ8ahh3f2",
  "key38": "8PoAijYC1SB78rpbUJxjs8aa8jqaXiUSEzukqthHJyD6vtAVfTUWDMHJ6sYcysNangF93tkzDHUAt2MLqmBTyGE",
  "key39": "2KFbostbwTxuNWCHr7VmX87BTNfnmLQ73Ni1i7TN29bgaM5g7vaTGyhqsiQe2U95LansstNv9rbD3ShZ3madLp9N",
  "key40": "j5voExAgLdHt5NsRs29yjTuQERai94gpDWyyZLrYnk1z5tpwFWvMykirwuHehgsWXV7AsxMXTt2TqXoojEaXFiz",
  "key41": "5HPjW4X7nqFywycJat4H6uVPAkLWrF9YtJo4yTUcFbQUcntwGYi2LfA3F96abRZuaMFDpU4dutxMxMTQPLhVKdCU",
  "key42": "4sCaV3nJyDL5mcCfUPgYdL1GPiMvSxQGUCncbs64wiLwg9mUYfbZrYe86gUS3TLNJSNHvpYyacLpk3PsWC8CjxDW",
  "key43": "4XeBQ6Ym3rnVFqkbK3L88hsFk9PCvQA6ggCYiL55Ju9snj8NCLn9CRqRE7FT1TLvAb1AtmcDwg96vpy3xzvqrUQC",
  "key44": "2omYvcZViS8zuAi14XCeETzr3g1acv58t9awdBhMPkfU4Lx76FrD8hQNXyk53QEJ49mQKmxRYXLp5PAVJDAH9xZi",
  "key45": "22cG8iFbbUXT8xK7i5axXmN65Dx4fmt49Q239CEP3M6godiPakA1o64r5YuqHCEGgtpYW51u2VxivDKNnTq6cRgc"
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
