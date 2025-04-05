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
    "64HFhD9iPwC2Mukce1jQTnJNAqhAuQ2xV2wqqy3uthSJD7JPYPZTaSC48KrB4aLUJJG1B5oXoNkJPNmyTo1HMhbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJPn1uvGwE1j3Zm2cBaskb64vvzcX3NdJ2tyDNj2dCYnTuDQBetCgFwcuRZdaGafdYzi9B1dDFjePJDM7eAvgpU",
  "key1": "54Nyvxkj584oeL9HNy1VqFNC2FdJitey7PVnpGN5jpz5BG4kPWkbcUu4iTybrcprn55po3BabZ8WagHvxuYJqCuW",
  "key2": "39E4bSXgUsKTNtLmUooKQwhiSo4dodouBPgjHrNjYCVxGEdfvGAKwwozFh2nvK9GouFbFS2KLM2Ln7yYQDxGKfka",
  "key3": "5H4Hw4J5ZnKGg57piXNDt2GG8PjstLuawdk2iVoQmLq2K6sjZXrwPPzgfPJZyveHDPo2ptZSemBRFFwzCHVo1QV",
  "key4": "529r9r2YMffpm1JNBwVkm5mmRgoCKuZy6k4Us6WtpBvz8aCbYVXD3Qa11jcDfmerimEvoe1ky1Nf8NDcFf56AY2k",
  "key5": "65xaLfuZ14WEo8CAHSMvinxtCLrv7jNPzNMYow4bxDGDUNjgWKqUAgA7EdQLVp57HvPzkN9V4u7ocQJzNiSbfhcu",
  "key6": "5jyuSApw22y9W1UjM9U4X1b9aheK911k4wxksNrxzSTbhncYgPxWqzqrPZZTZc2YsKLkQnTwRvVrsG9e2wHS5arc",
  "key7": "xQ5tEppvNyASwkJa7MdURvd5j1HcYAyyKMAf5QhdyZFk83hHzQaw9BM7qj95yfJMgYzhsrXwsBs9s9MTH4FSpHe",
  "key8": "2AaevjAn1dPWetX4vKXppLH5BsKCu1ySnHnd4av2oHMWoVEBKpANkynED7KnB5ZUYXDuqGf6uSwi1TzyUbAUX7wr",
  "key9": "4t5ynF4twWdovyV1eHzwh2VgxU5R9ye25YUewwyTFaw3HmL2JDmyrRvLiDrTHz9a8ik1e18vU1c6sVXFK7qJYmGA",
  "key10": "2xArPtCN4Yfy4rsQGF4qJLfbuRLx9sFKMFFwNSwNnWWT1YynKRhpfvGbBbHFQfuNUyGJZR82xDc5TmJC1jMudeFp",
  "key11": "65S2FrfaZPmTD9ApXc3HVNmmX6kMEmQoTrrpMzKNufdGR7AVv1G4mtj6cfxMoXrVLwNwqY9UnCbSXsbxyL1nnTtD",
  "key12": "4DWL73gTty8241K2zN878DcJ3T4nT8rw82Jpwhegjfbs3qnoN2ckjwEGdd7QwTa5KiF9kfWgJiZ7bgRqddU8uaR1",
  "key13": "3BP7nnHrfv6CEsQCxHzYFHcMMXNaaTMZnfGaNcsLGH1aQRWCy84MoBcTEXwZBDDvEG3V2AuaMHp751B4f5gzsWNR",
  "key14": "2sFY8YrEBK9W2Q7aKCK59pDA281Xyr6WPjR86MKiSfQ4N4Pc16fEmX5LvpSkgbeGeprCBNnc7un9mp4hhtWheqti",
  "key15": "5o52d3uSwppB8at1Qt7AN4hZG7v3E8oMY6TEYir5PR8tvrXJBLt9cZXF7Sf1APXfhFisBiZmEpmvUAMyu4rU6Nff",
  "key16": "2ptizhusTZQkRys61JPAbnhwaXNnNRedVNNrwo6Qj8xRzkP1FV4Jo9P6VmzGaNiEEs5cWT62UiupNksRsXBhao8U",
  "key17": "3zz6Av8nwp91Kh4ht16rFP9fcTK4Z6J31dxyB9F4swoirktEtChRnKgk9jCLo9XBmhGc7jKrDKwEfrHpqeZvbou3",
  "key18": "5ReM8MxDqL5K6b1JK4PrReiR5wXCSVE1VoUdxiHUe6u8oxiHgxuYBno9ajvLySbes4wkzhgyHYrCrPymfngvqFQm",
  "key19": "3Mam9R7peosX6wRHJmQJHZoAJXNTe1W4BWGbRyx1DuLAb3WigSiULZyEnYkYKjmDepr4vGM1fntzNZJfVJ8wY1cz",
  "key20": "3qjig8VyaYVpXz6bByniWtAFeUmZni7eCJvCSxnzw6pWiaM4bCWXUgRfvSGjAKJExk4pm6Y37grL8HwkcFSp2HpZ",
  "key21": "436CSDazBVyCyA62EsA9scoj7QtwHSfuxMELqtnQBoNcRb2eJ1PQbN7RVbUR7ALrhbP4B6NAgRMs9mxiJDs5ZUaA",
  "key22": "3NCPj5SLfXt8riP67cE3zt3uTPpcpj1q7uAye4bQEAUk4s2z49CSzvmdzJCeaR9WQBk4MFPCnnsY55ZGyA5SXT83",
  "key23": "5wpcMhAeoH9g11qdJgDJrRh3Nfrz4T9UsujWsXdirj4b3KWtTDQ1ENf9zfwxaG7RhdcoTSti7iVShzmSSpQ9ifhD",
  "key24": "52vVc2qaoCw5qrrK5AiAtuLFF6iSy2SjHbGgFYAdLVMZruW8YJghwzZ2CyTXGoKbbUmSSvuKPsWWb3B3gs23HvTr",
  "key25": "3TFVgy8aJgWBAbTdDm2NaqaXXCjdfQdmFBZRgiKg3rZxoU96PVoS6Pq2kLsVhiN3rBZFdZGmJBb8W3KgiYs38aru",
  "key26": "4NKNooipHSESNyHdjWkhetsu3CZ4LWXX6jKQQ9945zG4mXpT2kSjJtWja7ftKNxZfa3a4hYbNV6LVcZnwXLy3Mmj",
  "key27": "2Cn7UVw4xfKCSSRtPXUNQkVS6tJHqhckG2NXSy2tpvrmLUhmHksmpH1cHVYeBLnVHtrwLX2B7mRxinTTWnwvyUQh",
  "key28": "To8HYKaHbv3JV25bXjopupje3HTnH3xQKv4jo39T58PVFXK5hGECxx1xGXSTzkc7PzoZMJRxnKp4hhRetad2QPS",
  "key29": "3W326AK1caRd1ADSGNcPJ4uEBaZe3SVrP2EYN6ymYEfmFC5GFMsMMpQx632RAS2hpiVBwBTxDmSZ96k8m3CarMB5",
  "key30": "4zcNw62fY2UPMxRp86mBaeGUe5fgZWSwwSSKZcs3hC2ZQVvukR6QFpC1J322Q1QFPLvQrce446gZmynBfAFGtAwx",
  "key31": "BLnGUhZmiB7M5We6RCQWseW2K26baG77DpvWKEYnhy48MiaKUTNacu76FHJ3o4NKs6uFPPJVLf7fXF4ZsWibkpt"
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
