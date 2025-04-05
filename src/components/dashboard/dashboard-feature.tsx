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
    "AES1vzpvZoGSFVgAH5uLDcL94v1tg7FvV8KT7DMktmB9kXogNBoC1J1fT5FKuLovf8wvQRVpY16bVaQ2J7rVzr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x6JuMgNYgK34qn7SGqsPVGXXsZRdnkHWhmsKPsqjYtJwtpKokhBKXf1Qr7wbupvqaDgCUsKvi6fX3xZWiqqXaqj",
  "key1": "5pVP5oWad7rSxvCVAiBU8LAwLYsrpYhPdS6ErpyqLGfpmzj9HFomnUX8vykZUAfPEX6oCeTtBMyWMJdBKbN96N8n",
  "key2": "3bnuQaGdvfKsrGAHMK8ozR5e8H5bAgDKoqvTcMEbdvEixP34wVxb1QJA32fYBFgaV6ehoQyXdEEGrv4db2Niv5A5",
  "key3": "4wQSHtYXWr75jkHSYxDSi3NHZXpcSkpmj9PRyXGSGih9CJMEVfMQgDZHpCY9GSzBaHNoG3pjtuHKmPd6g9KpRd3g",
  "key4": "5Cmmy9HL5Qtt7CZFN98qTVoU81p9Bk5VSgN62fzT7JZgsk14j2haAKXJmNC9ATTEMtTL3omJxJAaDGrj2GCSvPgP",
  "key5": "3UNfTAZhChKrBmJjJsVeCx9eZzuoMPJ4McTdeotHXg4bXCfnpEkapKrM9F24kngE7XBXnukGfmUHgeYAmxMwj845",
  "key6": "3g4LeNDrYAMGDXLQiA5J885yBqazypZb42ETM7v5PJ14YMb43uWEVp3ZiQWUxeTxHcRXrYLBvFZSK2Eu2Rk4oHzR",
  "key7": "4SPu5WZcSjEwEoByGW2pthJYsukds9GmmieoqY6aLpyoENCJvNgyJybMjn3RSd6pwiaBBLaXh5Hoxoz9cjoCwnWt",
  "key8": "4tDJyhoCzcdaCmpUUX9bZRhmP9Jm5fjH5wwqEVBoKP7AWC4VcmAHptrqKQgUYrv5Dq4sSKVcpy9kZ5Ug2HEyMfuF",
  "key9": "WgAoYhiaKTXvFycDCASQUMx7LPgfvYMMFExeYkhpQyGmhMN1oQFRVmTjrBRbDQQ8Pqd1HDVLCb6FEXdiG8mYMrW",
  "key10": "oeND2ucJtzkLtCP7E8dCzzkBp5ModthuPPYJhxUQLPKRJse8F64sSRXucxo5o3AsUojjQ1kBhdRg46ZTa55Nt37",
  "key11": "45Di5gMMpwvHNy8yMwtN2qHkJ3wAtiGdckNZRMRpxZFLQ4BiMDfGV3bvRZ8AGtBf8yZdmtPgUL1B4wo7GJ4fA62h",
  "key12": "3QrxQmARutQtE6E7y6HAbhEheBg3B8vSrsCrzicqdyp81eC4UagN6UvSrwjQd13J4oKDhkHmDT9jtyxwqf6ABDtR",
  "key13": "3pPDpKXWyzgvYSrLVPKjesL6tN13XHz19BmJLW6PDjdfmSsDurddFCEyVh6rEi7XooS7pew2S9DsNt5omBdgwmwx",
  "key14": "642tGebV4d1vB3QBDff8iXM7XNSXKwoBVRbnTjxA1CvjgXZuWQqYobDkopDuamthVJWkB6vzgyPncLfrTvZ3v6mM",
  "key15": "2qRxa7q7SeRkq1Jz3KcoEFWrktY3t1rgZY3CLNPTqLwtZFrFHKxyeFfZ3gUtyD8TJouKpZs5YY4msdngVR4YgAty",
  "key16": "2zFtoDAi771boVocNWFVHPidVSh61h3AeJMmsibcxhJBAirmMLvu3Q9HYn5mN3JcRT9XiEgKzfZ6oNKQPhmeh3P8",
  "key17": "3J74CakeiK3oCbF2heRiN9UR4QuZn4ECXnZKeA2yjRHNzePKdcuSDkxRYve7EVRDCe4oZwvPafr7nez111MraZrW",
  "key18": "4pfZHH6Nv43HG5BLibEZEajL8vcWMvFF2HEH9JWhbZSLYq4dcp4FUecHPHKdCvJb53c48KLARcHxkbJRYnpeHUjb",
  "key19": "TDP3EWAeRSrRPePHAxpGsBNy6jJQMSvJaSz9Gi44CMxM7QqPdCYc26iA3GctCbP29cBjcq1qgPgEHroaFtaGo6Y",
  "key20": "53yCrXX2HKt2ugWGZYXyB1Uzk4GTnsGZx8PV1NuBiZG147awSF4bwj7hw9x3BpNxgSGX1JzPLRyo3NvmgidvjGAr",
  "key21": "5xyXPoPULgNBDi776YGNVP7BP87c24HGjbZnMWKAvzUUwjHxPnegry2ZWV7bFEEmSxpzheBga3uQceaghiW1vsT5",
  "key22": "inZ7UK8y44WMBD1UR8Z1A9ePz2RbmzN7cZFgrvEp5FPfEVEyshpfBeC6h6B87VZ95x1ZoWnZ97kk6YdK2iAS1Wx",
  "key23": "3iFrb4XHJibMtKQLUkiwqvjAm6fGb1T4eXp9sQPV5TDYBcmgu65Z9BFLAmFin8t7kfugAdhaM86WCDkS6yJArtZt",
  "key24": "htcisQb33sodPKMXLwGFxoS3on2hhg391WBtRkFeVspHxsUtHrpfpwrPQrxEKucEQZ4Rha3aJkUk82WSUvnjvU4",
  "key25": "2UsHZV9Dsu9QN6YUVkUXFSqVHzhsTypDRQuG5366g7CYJBzypKcNbi9fi5Rz4phFzncP45XN1WEwiY9CcZKSshh7",
  "key26": "67HtT6S9jFx9JwmQxJUpspkgzfGsQq6C3nBAQxsZNqyTtRth5gPFPdBjm7qBNysTYznfNQ8Ff2hEiAg2EpGVB1tr",
  "key27": "4uSuXoUoZwHQoK6q7PEpCzf32ygXKqffnK52AjqgYSuNaAvSu8dWAuPHqtgSb7jc1WChjyojXVQFU5rCVzA3a4uV",
  "key28": "zVXPHQPBoJoiMJsYdPT9mi3RWUrDEnF9gHLWohghrGNV1AG1GUtZQySXZEzP5oWKB4Q6zmza3ZzFMbaJcWJxyaB",
  "key29": "3x4qFqaCL3Bq6mNyiLdYdpVtitCiBmeVETDoEC9p9HNStBVahQgJDHELcY2UiXBeShmsyViaFJHUbq8nsQFmyiPg",
  "key30": "48XuM78vx3fLuKeEaJA7DHANZq79RFkfLfS6BphEZUokv1TrFybJjUuAxa4M4w714FVeAiP934kLqGHsvPLoEuzf",
  "key31": "2RE4n3qdqWmenffKJ8STY2Yy5jKfjHtiM5MwxRHUE15dN5BoX6ARCKMKSbgWCpUgZpdcZP3DHZfxpfFAvzBog28h",
  "key32": "5NCU2AiNkd7kAbMAXbz3yWfpDU5HcdvSN284sD1bzT2rq3m9k3GZHaTzsYhaFvZkob22E14wZ4K1VaUUPiHXNgY7",
  "key33": "5qbsUY4PkrWM9pfpGAYrxVNpiTSfND1cEgqpeKRyWVkvW9zidCRahVkHPNCRRyW84yffM25ekhQHN2mTEQA6PPA8",
  "key34": "31AQG8gy7AnsgGktqJFbZW4EdwP25T4yfskYZagjtr69bQKgFcdKKz1ENSfRnh2e38skjqrsgrcM3DB6iyA65mAM",
  "key35": "3cyi4RgzAeqejy3Yx8ng3TMztANfE9YjV54i9y2P3quBwSf5rR2PwqkosKFt6LcPXLmgw5WtnwnuYDFZRnNJYKWT",
  "key36": "fC6PEUs2AaaeUCLcFo43LDMMpoTxAftyc6Qv9uxiz561pYTftQi5CGduzcACTMRkw4VnPwSiReXL6DrHjkqgJro",
  "key37": "2Weboi2YHfghre4GpGvKMShiGXvciKAnVT6xiSFqpajHLKh7axq2BZE33bWrGwrBmZ7PfsVgxW8UESjPRuUXAzn1",
  "key38": "nByFApc6N38eASchbve8sRRjMViKt2f12ATaqxeciEBfcAH5GCrmcMzBzpv9ApvymVcVtuDwWXE16uLS5bobHDf",
  "key39": "5LNbjRxu2tMVCj6j4DUYj4EfnspNCgXnmBxfFbGYZuG3j22v88ibMns2i2F6tSTDF3cfYJ7MxjAzVxfAVDEJAT2t",
  "key40": "CVwuDRE6pz7wCUiCCQ3pRB7ypBw2NmskNyYg2bGiM5iyM9M4ADWFS1r5kD2tUWcrJbt9Aeenw8Z4Fx7uVxqchKk"
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
