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
    "PnVkgWqWJ52KHNWGDBGZvUEDMRabUVG9oKQRaNBwB1Uf6pZhqBYtbrbKXhcrAxdzRLxXE7J6ufjRV3Rm994cLbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyqKaHY5RXqJxbDSSXFBv6p33g1Pem54T7KK7rgoKbjv9C5pxzYZ7Uz3yxrqJWT9MiQpu3NaZHsU7yeHMtmrTzz",
  "key1": "5wdL4AqmWvXBx5ULDcpjQYDeis9GGzUWyV5y7kaW5QGekExc5PHHmirsQ65Uv89Y47kiBqkhUWBaKdUaHycDxtvJ",
  "key2": "2ZqtuhAcBAutk43chfvm85s2QDST3mZv6s44pX9K9pCMjQpzhkVbf7Q2k4wnWP3jKiEaCFgNhLxDR7nGSSMGYFaT",
  "key3": "7VRmuczsCgyMyjpmMumdgciaYLtiS3TuWEPf4TgLVgrKZiVUMnvbvHMeje6pz3UhRfpC5kxPp2J6Ppf4QkZ6wsA",
  "key4": "dfTffA2hw8j3ziweNstmjDAEttqnMUY2k2NeeUa5Gze1SQ65Cu8QJgR6JSDUWiH59UYh7pdfmMxgM5jgTizLWf4",
  "key5": "2r2hHCdMTQY1VYNipvxKh8MpuPA5nCZ8LFzsVBM7fDVq9AgreJvP21oT7mFZLQYnNhxsPrca5BvcwxeNXejSyGe1",
  "key6": "3RmQhUHYAkqKpPheUmdv1HREdNwMu3zy6tRS18qYStNcDmAn2kbYB41DgRun4yJsQBJVMzJYBkqocz3fNXmLwb8u",
  "key7": "651s8E2QwjSsTHC9oTbN9uNm1fxjB1DJCn1DwMrj36DBMJ7pBRLxJ99rUKgtWEwvH8HAXW5MgzYxvUP3JxDFUQrw",
  "key8": "67Y966mB3bzrPiiLJUsiKRkLdWaZ5actYY1raiwNBBTc4jyKveeXJ2hDVtXu2uS2DKn4exg95W8PHpLfcXLFeGYD",
  "key9": "3LFpQcN2MZZ4jwWQzmuTjbr685H47HCieoGvLHBuVb1q4aceSJ7PhuheNdXpP8xKTFYVfou55CNwxewkg9hUNBaW",
  "key10": "2zHKGFZq7nk9tYL6Joce2SqUTsZLBJuLk1WwpsyqdpbbamAgCiSTy1WAuMYCsNW9nGEJWAthGhbfTTDajt5em1aY",
  "key11": "52f6TcB4LFnBuqXXmtLEjaMazqLjtG8MMAm5nhgLQAxc1gT6QjCfj4PvSiXwKeLyExFCrBRKZz5mGFAZqqH5zA6v",
  "key12": "5F8w89G9c1CZ8VuDqNyJPfxa9vi4N87xkt9SRADqp6DEHkBceCkTanNo7Hn7RCJRcoQcPF7VbUjrNvQxKFevf47V",
  "key13": "uEjJEqXCEY8XzbWjGFFUUihLLb5LYS4Kf2b5qbwANgeME2mkq6gkjC1cAm6H5raVHUAqmRrgQr1PkQTnPsGwxeF",
  "key14": "2SoMx2T7myDNdKTwSfHUUfDPd6uTM8dn6QSyAHYqbGHjpgtxRDMtejPpDkJRZ1nDoJfWS177yHN7qxYrbYBM4q1B",
  "key15": "3Kp9MUzHW26BMgbUStnAMGfEcTuk68zuyZuHuDWhEG89oKmWvqWyWzuyijNxeXC6NRCtbmAnsi1MXp712jZ4Em2g",
  "key16": "391Qqjx49fywzgaQ612fRs7qspcPbXzixUAcvw2VsejaEPhdq8yWSovUCe2DNfAwDzXcq4hsPRSwVyimHFuoLoCs",
  "key17": "3ZqqLBYsuArLoeCZYVcuDMczGjQnPy5V3dsLLvf5C3UmLtpvdMQ3VQs83H9pE5q3UbTjbV5tNuQwS8zVMneFQ1oS",
  "key18": "4A95PC2RB32u6HEhHE3Gjtv9W5KpYccZoEVN42cvtA2eU3fnECR9RMeUiva5jCmavJJQqJXDvr2J1akzDfC17cbF",
  "key19": "4tNtdbZyXCnRVK89Qu52KybtUmaCMppf1EqANfcM2YoGQLcW6d77ZsesCGN9gcNfYiZJUzGWRgjx1Uq21YgXLyy8",
  "key20": "2YagdEXafTA6BjbJgMiVNrJ7DCVpvocC5Kst4tWoBAubjFAjkuHHkiVHzrc5MTTRVbT1nAXz53LWNosHNtC8UoNo",
  "key21": "5BGpXXPkQday5YVcoaf9dkewW5u41QTKU87pTZpoj5Sw9Au4YTK6cSTVosgywPc6iJQrUpsK8LudcHZu3v9q4k8N",
  "key22": "47Hn7hkd7zjNvbA2opELwaPq8K1GNNCdX9BTidFzZNdMUFa9aC9w6uhmnnuPky2NerA9Q4h7W2NggA4XE7DypAY3",
  "key23": "2QRgKxVB6qv91Y5Ztuzr5xF1y1Ln5CPJ1wLL9mCMGd1fu7pJsvMAjkBhW1YRW4uvofEct6pMbBJnpFgwRGTvxoa1",
  "key24": "3qrM6TvZE1NSchvVytQW5dDM5cacWTMtoQ6uXNgQbd1bUugCpfbi9er1eck68hoMTZQcxLrgu6axu2zC2Gc3toSq",
  "key25": "vyffU5ZjV2tFKbxPkZxBxMZv3C9QL3RvwYAWfAA3hUnwHn75yfABZCNVU33ky28xmnexV5Q7fiRmHbyqMQj2ZQS",
  "key26": "3MApz7RofR5U3xuDsyiCCUHoHVHiWfk6K3TV35DZHYAgAx2nm8Xrp5vddxNXatpaBzfm3mJPDk42J78Xahy2JYo2",
  "key27": "pybZzzqVD61cdJ6cNZ6FhVRhLmGXwuHBENNStYtzMN5Z63NZ9uai5LmvoK4s2b514HnWF7vbtkuk5tv5nJA9Kk7",
  "key28": "M6c38RW6Kv63W5LBuerds9b6i1hgeb5Lk5HRnTz6BZuDKztD2rNHyxV7QfQFkcwrxm5RnnXtHtSahFbqYdqTbs5",
  "key29": "44QsuGQuNCBeMFYq4QmynM6wCPTjia48sess3YAEvT2uLVYxp6JGL3HRoUdxez11w9L32FdFj4K2pVTy6g33SNT3",
  "key30": "LKQ9LV1TxG9KuLKCdzMZwZf5awDGMoEq9sYCqbD68TYpvo7n6kGkhVF4pd6XWPDwA6EYaVW1cxL65GZEuNmnaj5",
  "key31": "4381yVMaHqXiFRi13A9MNiJ16mjsyfhiLohABPRKSJt5SDzLc3efeCEwJ2BhfKBvcMpDE8Tddi9qVv2N4bnguEmn",
  "key32": "3EckQr1P9ffuF1RqYtG9BtVeJSVDuwgDX27c7L9xmXDc4S6rMbuYp5uQrE6bnYF2atzoRTpQxxbL3MK9xjNFDcHR",
  "key33": "4cqhxxFeeU4x2xE33vPH535LaU2FjRjoLjYphNKVB9HHZm7SzJoavDCpaN4REhCyozbHoA6JyAtVEXp84MPtF99f",
  "key34": "5NkQh13YXkigmJRchKTbii8opBMp8AUxJECBE3BQ7JDNVE9LKu6CpUBWAYoKBeMyfr2Xt5LXz5wLdCxnosiDNRn1",
  "key35": "4dxqkmCEjDwVAg9hWndWYHBFH8eLZCQGjtYorHubNVHqRt8oiegk52EgH9WRpJvwhVLRdt4S3KPVhggihQJMJVnY",
  "key36": "2GF1Puni7uYeZWZfAJ1exEnVXg7Eo4bzC13bc2dtMtxQ9di8jrDUyLgWvWqYA6aioMsRABWFn4zqcar9t3T9qSYa",
  "key37": "5vqEA9qYjNnVyJxwuAusfXVvfdCFCb2vc9MUEQmnRpLnitzEaA3LgWDn2YGm7RWtgob6Q1K9a6yhfiReJdbHy7c7",
  "key38": "2tyJdkqyjw6rU2ztr3bs3zURJV9ymTqMtnjhuEgHjti564cWAWaQqZMa1jR1TKZVwJ5dr1fv8LZ7z4nc8WwRyVYV",
  "key39": "2oL4DuptHFpbFpSxe4rH3vraQRZu7VT8Q1eAXbTGjpowHyivwsdq8D1EgEP17apAG1J857JN7z8dfyxuy5uKfbYo",
  "key40": "2ULTGdG8Fb7quKu9S2mfMnLrRCtL9MEDxLEUAuGxKuFVZXLg9omvCH3PJj9kf9VWE1m4cFNrmoXMiptp41eDsxu4",
  "key41": "s9eahgb4tDrPAZd98CVhMFD6tfDEiE3dm9GgooDmEWpVf1Kz3rHfgEAez1h34ad2jn9DYvwbzvBzBNE1w6fz1hq",
  "key42": "2tJHqpqrq2PzdNyMfet293ocTLBLKpB9Nxq1Y4dZhnNhgihKLTsnDwfT17GexmWPBkNrJVzxsEXdLGyqSmYDcHeS",
  "key43": "5SazHPSKHkYRnNCCoammMHHXSzdtfuseoN6ABpuSrheiPFAiyanLR7z5DX1zeWYkA16dRZUS8e1bJkLom2Erc4mD",
  "key44": "5UkwRqZYtwAZtrPtsmpfJMNth1YvVcPfZFJtY3kEpPdE7xa6TdAU4x5VUCck4jQo5g37fNMgYQAfvfvGVCPpLycZ",
  "key45": "4mfrmWtV5tmZ8nFzeZ1B2eQnvsUVB3iggxJKFUR2bYmi3CKWWRwER3KBxdS1jRizMNTMHDivcSweKoNxnQMCbSib",
  "key46": "4nPT1MbAGNA1hdMAgc2SKgrMbwu3Z7WLJYC61LS7dwrkc4a3cmPYLciCXJQaykT3nuq7pynxRJk1AYYqhuotdcWR",
  "key47": "4gumrmwQg9gUSh2sPuWL6c8WC5sgkhjGfos53mUSKUNb79JKe38itNgXBnqnBhiyRokXrihvHqEUuHegUrsWCC6q",
  "key48": "5GWSKSdBWCSxhKX6BzBxkeKEMRbtynuXYMtMJQ7zD6ZgnASv1Di3q87SH6djwQNT7VdvDa4LD1dJeWZHyS6CnL8Z"
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
