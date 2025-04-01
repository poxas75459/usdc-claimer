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
    "5KXy4MDcgRimg63fvfFn7g92KgimNuzCNbMdCcwNVFX5ME53wn2N9JWD2fYtU3Cy54K23eo1afcPdBYoTXnSgq8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59EaHbR7ysq6FDzBpXG9dCvUCE1TDva8fbU1U4CgDDXJdpNawMwUiXZWokfmA1g6fPoQwV69muoUMZYPXYrr4Nqw",
  "key1": "3yAbzmndsodQ1rpZPrEvPsY6HtHihd38xFNFYoCjYvrsHaY36DFbGdXHkqz4CtSVMzfaHjCFj44Y3ScGUYKFaEVk",
  "key2": "8XwqzhppmUM9Bf3CGTDsSqMqcb6Lquk4uSynJ6quGBxwueuF5D9w2U3ghdNo6QxENpuGriToF46E2UgQErt2G8R",
  "key3": "2e31p5ec1XZ1XrfywKtijDTvAv3xwjRzGmxATy3Mb9Rat4mvsQZ5YWyftP9nrnJK5hFgzFk5BgtcWB1JJzoUmpLT",
  "key4": "2B3eNhS99pz4KcCNZmTAqmUXX97PNoww5XUcW55BxE13vLkQxr2GUJNXy5zJcnLAY1QBBaTLZhvGoKk2qKAA6E7R",
  "key5": "4ykQECWpUJkw2AqNr9PRw9RGAr3AKK6bmXJgAMBkajJFoSdQnXijgtosSKstSUEh6L5THU4ETvXzYn8vo7aKpKC3",
  "key6": "SfTpEsWe6pvysuMC5kXB4VxdwCc3cLUk29o1pM53MWt9ErmSdHBh66mE2o33Hf4yvtpYXnZ7ZB8TTGv4UiotkKY",
  "key7": "2QNo5rMPfpoez9ZBL5S76n8BP6HwXg8XEQtNcCBdFtyAjrYkcPSmTaKJRVye5U57Kc6WDd6VTXjzhrbKmj8cj3f",
  "key8": "2uALHp3nNgKnkPCkGafDtZFtBLLJAz71zWBSbySxAVrSckMQganZcsEsU7FRy4f6yNfbjLirYkBgvCd9snFtDfSK",
  "key9": "4ZLE8A4aUEVthSViZx5Zu44HRw2FteWgLtm1KYqt3si9gLofRW9NfU1QXfooU6VFvJTkksgsU5ZaJiJGV5qgpY7E",
  "key10": "3m4GPpj5G3Jz6HR6iG9sKuxJeidmvL2MrfMzaeavtrGisuFN4oMTLeGuzrQnPuAorM4cWFxegxXSq1xJdKgaV2G7",
  "key11": "466Nanwy8EZawY9vNS8t8mdivmZdmAy4CYbEgU7A8s3UrTd73wDgmT3NrDJEeLQS9Nz3MnLzVJtZD34PWMCtMQNA",
  "key12": "pp6UMxQHHjJncUPD6ix3261WguVTrnGew8tndUdxxUH2Mz9gkd8nRVKXc9sjLCZ1dVDXDkE1mAeV9gL2jBhQfP9",
  "key13": "5cgkyy2WJbzRYqQtnK8BzXpZebNemQg2wenGU6S37Prj9VBspAhYnLeLRHbXJUmmKFdBL2ypsZZAuZvLNGVMLjv3",
  "key14": "5m8PLwPpVFEMKPxCBA3xJWs4SbWpQcorvWT3xhR5ct2sEWctrSKS8xEAUe5xY9pRQW2k96twKCsJTVyYK81nxRYr",
  "key15": "5bHhUBk1TYuW4Czr2sMafn1jUDFeSfxNYtZ7vfEaF96DonLQjoTbd82a8v6aYspvC3etH2ZMWiXXv2bKJD2L2TzU",
  "key16": "p2E1Sg2HFAerypzsYaL5gkvwiJbqjWKFB1SY1Ne8deKBRQQfgHrg3DKswAvnB2EM2xRTAaUFjfs5TrnmkmmhHx7",
  "key17": "3NVgWuDK46jHgtXPhREydHvQPRFJak5K2QQ6tegTXjPoyfhEi8aX6pXQoYmbM5LzUKoxQaEwMZssfWCK2TGuFxig",
  "key18": "2JwFdMif3fEpNC161g33tUoShqfNn26F6eTzo6zGzw6Ko3VrfS7yVzjh5vuv8PyckCSWCS9QGX91Y1uxqW1mubfC",
  "key19": "3ydr2dDqTeCVz7HpVH656JsmfwYDzjWUH1yq9NuLbZVGedKzpn2CbfAeZUFofdp9sW3ezzsi3TuSGNBh7V2yhoFo",
  "key20": "3AsvKk3ousj32XigbBjT1gD642MsAkoKrWen1AhtgY2gNTo74tq5J73YAkSyF6CpxpKTiNaNzyWkFChshqZCMYtg",
  "key21": "ti1M39yBrD65CkZWkyQKCRfwiiUYA8BuWHChghQudQHkmvvpfCRZBgJdzTu4bzT8VpufDosG5jcqtXubytpFgx5",
  "key22": "4AossnuLN8gUw8MS5nMc54JiZAL9S7vyDaRkrFt3w6tA1yhwAP4mWrUPcgnpX6vwXQKUqN42h1bby1NqAaGpe4sX",
  "key23": "27iukExnfBHFqwanS5xw99yG8VqHzT7yHTyaA1AqNKmim2YUT39ScPLnSz3nRc1cpgVwm6iDEBPK9WAgy3merSrc",
  "key24": "FkQYmrTFzCyEDY7Xw3L9XZgxMyTYz2wLmPQh5QAna2Z5js1amh27xPKDkgGjPinCzLmxEbMULiqZmVvdpKkkSqG",
  "key25": "4XYqJmcdR1y34kviyLLiPf34BL71T5XZ5i5XL5RNou1eigrPGPQKcRw4fHJkGFKLMTBb5r4a1jPoukgHQPzeTvvy",
  "key26": "25LQqT9s7U6jXL9aAX6RR6ibC53aUPC6J8KoLxT78s7BTNsV5x5uTq9dkRM1JjiB6Co9ydVnijspfuHQNxakTtMa",
  "key27": "43up6AyC4aFWCCbwqZQ8T7WJZkgq4uuBJYu4tUHXrHDdsfFSbxJoxwv3nEp9KDgecSdpG252jtndU6yF46ba6zNu",
  "key28": "5cAzRssFe2cUgiuyf4yyw2sii6z33woixizFbg9A6sLH546DU4r7nc7eXtXnQNjTB9CREVpQQbG1GYvJsKpSHs8y",
  "key29": "2JFx8J54sSz5KjMozvACQSAEC3X1r2x4uMfzPHQjoYqQx2f9UuwNg5wXCC675UAMwJyZ4eiR4xdL5o2nHhRQMdp6",
  "key30": "4neiSEy7HgSLXBeDx1HSAvzsmX3uoobfPVo54CXtxGQdvZgzyVN6t9QiyX8vDvG4aZxNydJvDJxZ9gvsDy9mGWHD",
  "key31": "35yuHwWbuPkuhc7MVUtVprnBFiyxUX7HY8cXAtthNzR7LkE8ed3a6jkrp5yA7Jf6AQvkhPmmvwxD3EcvSF5b4DK5",
  "key32": "2SttmgFwfV7FissYaM7Cexbz1VD1jXBAcWCd17QZBkeHq7goAUgJ8SiSyiTdj3PFLS73qfxsqYhDYDM4FxhXyoGQ"
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
