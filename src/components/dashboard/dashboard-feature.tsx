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
    "4wKyXSFqdsmtRDLu7FpfQ3YdWMKP33jfVS4GFkqqNMaUhW65afA41Xw32P5kktDVorYtNpoJZoLcBuebLGyE8SP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cfD34fn8pwpS2ZBKvYCeQn1VUeTu5CgedwVtzY3mu2Fq1t2pDHGqje9VsV9ifcFnN43Jxd1NEMWcErrLZs1gvey",
  "key1": "2TRRqUkygK8SE7yfmk8BsV1zjiWqJSK6Qz2gWeeyURzkuidaBr4z96LL35zGrZntP8fMWWh6GsGF3QzkZHodfpgi",
  "key2": "FGrzGykvqQPLM7Zu4PcGLdYGJtj64NyHUdZeBgFyw3QweTuKTJeEcBDmcfsyrcqvJwrnxUyunbHbPdBCTa22BG5",
  "key3": "BrAPSMzSnLLefVXThjeHEtVPmoNg3vvrAQNsUazBj4TZDQSFnprTMGwCy5sa1vRAw1UQFnmniFDsaHGX9AtzTKv",
  "key4": "62DbeXVHALpNZ45JcnSd8caQatZ1mn7U2yxkxcYXzuGj8jNpPss16k8NU111vMEEA8gQ93p5WenT7MqEthTECZn6",
  "key5": "2Pz4cUdAuPLzh4ZdHfeFrChY4F4jG9wgi2iPG1LMqBBTo3PSaVa1CxrCBNHJLNf4GswmdbGuyL1a9PYXrKUi5CDB",
  "key6": "3KSBbZpFnDBJpGdtSTJzsEP25CybKr14BPg4ssxBKFxRGhRrHdM6fgzAfRBquFkRyMYPwghiVDHZizjWXcneUxmu",
  "key7": "4zWiV7pRnNQuDUaZFqCo3H8nthgA5ia9t7Gt6zXvTCrreCMTGUmBaDxAEqvd3gy4W93TexgsyPuHmyFGezTmp6Vm",
  "key8": "pUavkayky2v5Df9neKouH6yBGzeRuG4iHWEge1qh4a4xUvc8aQHFRtJqji8DD58u4YXu5urN8Ht7ZNFcbh2gxJh",
  "key9": "Ybv1J8P5YohiTotYWsquGtDDrkyeLbA44vP74UApkiAEj2sCujTz76tkEMMJPDy3gwC3BQWoD1XDUHjNSRMuKsf",
  "key10": "2AVi9zbbRuErKiS8nMn31UJdf1T5onkFgMTt2GaaRBeZYuEyKZZ51UQH1sTDqGDtwEERvnZzk91vunKXe6x3SfVx",
  "key11": "34zrn9JkwaJp91uvN31dpg64FsAUzJihhhPWP8w5thxJGu1HMjyqKZ8WEgex9Tx1q2VVFnPQrC2sCDxLh8Zdkcnk",
  "key12": "5D9URMj5Jd4MyE5nXU7XCRSPPRYzL1vJDo8mMXrB5LoQVNz1WsrEVC3xqhbfWcfQ4Jvj9hwSutWBPjg5tPjGz5af",
  "key13": "2Q2mNGhQZzhsmfSAceRdBEji9dS5HPFZ9MnyjFLttUzVKL2Hp58jgveBvQgWAq8zGrNr3tHFWAmcvTWSrHiaqje9",
  "key14": "tBVCsTvXmQ42NBUYCL1K9mkTz4GoxG3mnKDpNyLckwzHqyLn42FwUdhwnvGRrb1FfHZd2tDYxPSLeV42Kg8kjgk",
  "key15": "3TT996ErLGFS6XXUFksYxE1qvzxWt38H1gXZkmXvnXrHyMd6o5xt8pjp2Zwjbvb1gYQbryhsyP3sSe4D7qjW91TW",
  "key16": "3VYGewND2A8T5BMp2PhiAVfwxMvfyo9hFcH2jFLnV51rUBcnpsrRsPPVrRSUBiXiGhJnnZ1XcGWnXc3UvxiVKGfX",
  "key17": "32RsU9MfPG5tjHyPSx4q5Fq9HRu1WmYaKUXj3KkVDY1bFqRF2fQBna82xDufowcgPn58TJMsZMRyNdHPBNv571Rq",
  "key18": "4P242an6sy4fH7AL3fVVpPHUGmL56XJ95Ln3R5xjUJuVsYmtBTptpjTZzKJAuwaTi8gXtaaS1Edga4WTAtPh5Lx5",
  "key19": "3XEMaF2uxdqrgbsxZzpM4Hynu5KtCdSdGM45iLqytW3zQ35rfZnKrHDto9jqfRdPNL4qFEDeUJG6YyGNJR3iMAY8",
  "key20": "29NsscEiFYRhUrxZQwxcDtqTQR1DqQ7kuaFGbTxwVNzvPbhnxwLRmtaFQRDq7Xe4pxVetfanuZMDinerHqLVmAq1",
  "key21": "5voQpnhbc7npaf6ZUk5KBJpYvPin21qMU7CBaaf11hb7YJQwji5Syd4srjq5HznLGB6Cxd7QfqhTSJft4Poaa2uQ",
  "key22": "4XCMEk8SqSWzM8RubLi4EFiiy7bSD5s3ENVZxuEPD1gQpZ9fVujPNsg8TfeZFkgxEA8VSnzyggA2CxxFq1vBaGA",
  "key23": "3WqwMe566r6koWVBn5vx54s3nwCYvranoWm1irrckfCrKbL1dW1YdmXrrQ2J3LKXTtgj9aQLLR6QEF3bgPdvKJ8Z",
  "key24": "5TEUu9YkvqD3iPYRZF86TVQb63TKmjd9Z3xr6drxHqBiKCqnxz6RrQjX9CKdfjD1wAJqWDVBsgENmcFZWX1U85uH",
  "key25": "4K3DaoyUQzpgom5ZjvmWdg3RzJEgNYTqicVwtDMXxn1NTTev4RCnmfDHTYysD7C9iszw8UKvd9dzHvkK6X25vXsA",
  "key26": "4GzhwkffFFkhJ25ZgcjBJa3Xex6z66ccvoJ684nNdDB5n3VZU3YzUw24XCwX71BkqdY8DLy7oYmdcBgPVK53xWqj",
  "key27": "dCC4MNiUHFXMGMiPiyXLvv4B8ARR9KKcMnURWK2PdpZ3MmgBmj68TFdrmMxf7MAnzpcA2RzvX4vebw39RcLwQk8",
  "key28": "5vny39CwDsJYnaxxbXYMetar4N1Xk2CCvc28SHvwgdD5rQeHn9EBB5y2GtWYkrGdxTm7m2EkgApA2xCKThSxAVtu",
  "key29": "2nvLnpQKtA8UbFmdBqBaqz4pSS4Pu3X5nV9GzP1A1VLrmcyn8jzBtiWt6SQdBn14CCeNZaAtCwxZnJvqQYXnnoo",
  "key30": "3R5XNGR1epU4Nsf7GbAiphQ91ppiaE1NiL1RmpMmr34ztGwW7FRZug4Xga2QjVuj9L1TFdcg7YbGWggkmGZTaf8v",
  "key31": "3cZkCabPHQnNHdJLDJVYWcUVwnyTsCRsen9E6LcF4FKwPtz1sW4Sdwah2tNiLsR8TymqPV4yscEGthD8RAA1PE8t",
  "key32": "3KeYSsTuKb1UkkYgGN8UbErwk3CiEmpkRB9eRRCW7Cr1v9M95rE11zQ6Cy9cVHGpwhLnZM6Zvjij36GW6FQzRUfX",
  "key33": "57X2E3NJf69vzPGjt5fiK1bcbWS73prtNtPBAJ3x6MBPcMYxpDzi2hzWvqRjTfjjH4vP5pKRmB5PQaxb9a42kfTx"
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
