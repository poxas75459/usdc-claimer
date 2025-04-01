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
    "MeStfdLS4TtddaLgn3R1WmAuFiChSsi1xXW5tTYMvXq55cvEPfqsoQSdmGsNwYChxSc5XpjmFgttM2JdGdoVdQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SBU6wSUo2tANzjFffc2KGjdx54PZKpLnZtmVzzNR2d4RcdqdHu48DdiKQ2BsJXrgBCzFCihZnEHTJYwt9gUbqJA",
  "key1": "3BQm4Lf5Uxme3gGrx7qz624248SU16VFkRktaGXmysb8g3Wj3TiyYYmtK1oX4GtXxAFgbvvgjb1yjiTxhGh1LpAe",
  "key2": "2pNTL2QFkN6x74kK5fwgbfeJU3HUhfpnGhGuirquK8pbsAEQ9sKjevYjgWsCsdkzucMsGhJ8xVQqDEGurbiCcwrh",
  "key3": "4gWWvcisDdtCTtt9sDLrZuNf9GVRk5CD2zCxy3McEF9n2dBEL3RtJ66RXxUdQgz4bdZkPzFHfPWm9MJbxwRNRJbd",
  "key4": "5prJmkeiiixNyVxhih85bXh4SvzDbpWefMLMZ2ZKc1mrGeconUgtqFpGhWq22FNRr1iuZHBCr5HZXcDib9zyqngL",
  "key5": "4MA81U44Ygv1sjoHjSusdzE5dvuNEuY3MakWBktiramN8WDZUpgzupNHDj2PtESmHSq7seDfTGhWxuUL8YYWN9CG",
  "key6": "3mV4yz4VP2WRCW4djuTk3aTS4LexUZRKneVUbPSu3NkwjHbADvC4S4ZSoK6ji5W1cYc2UmBTTdBgiTPUoHRNx2zR",
  "key7": "Ys468XQYnc5PJdjfvT7xuKLv6S4ER7vgrjsHoW3sJAnHbs7Uqcu8VVa12RWXTK4BegqqhXmvkqHi2MDi6sY5Tus",
  "key8": "5dqoZermGazYJQsGw8cKyoBUf7Lb1iRGGhSBGLwFESjFRpxnMoxEKgNogNXs4RUgYcSD8SAsqXUt6zhr9brcVXsE",
  "key9": "ew59wS97UGFBboGpuVzqm1epTEp1tRjk5YKtRDavq6x2odKNNuv3kaH74i2yJpUzc44bumVfW4Uuvo2QoqdSpxR",
  "key10": "uZ42Q4dMSZtovEkMnfw9jLd2pTFn7VgrVF9PomEXiyYaSQxkW18ZAdTjC4LvPfDRzP78QtknNLXheSC5uhSS9Mc",
  "key11": "23S6fUkqkWfmbHgEWtAT8oVt1qsxmoDeet3tjZ3TCHkfmpDWwrsaNzLpfzZq8F7hpHCFHG1CMgBzQgKqowbW2taG",
  "key12": "2DDT9DYRmJLkruBqL4zocRGDHXU76hwjC5oaMtA5qAFCgDfuQ3a1JutMnGZ5LhUcEe5w5y3un2oVcW1E9NAi1nz2",
  "key13": "2yKA3PRSU9rhpg8X5MiGfdp17J7bnkUye3Mu9x67oPBREodpLaGVeRLcKCtkgGfpird74mjHFZaNghHeFSaCi1uk",
  "key14": "b7RP31wCEmXn6L5eYNNLgc9YTpg9vkUcNvniujL2Pu8RyEpH1tXDUNe22s8qATbxtLitdFEgZbrYdPXLsXBhLbg",
  "key15": "4c7thaGrQDkVPspPdvyZGBir97JEuHTbXqyCbnNaY6cHBURpVScpndrTaDphcRLrA7wDmEoR2mVvhsmdXbiCM4zs",
  "key16": "5Vn4AfjcGkLW1WhZt81sxLFG6VV6nFWHCBvRzautbtkqVXqVJsgdoyPixHG9F7adJr4jRvQtrXQEnMKy8bvzkseP",
  "key17": "2AF5BXGoNNGBRDLq7g7AnUUADVoLganCfrqiEf35ZgzpD9fnHRdfsKuZ9Pe6nSwhvhoiacwgChhXBTPGtVoCA15G",
  "key18": "3JXottEchj1hP4jg2AgQ2pZX3nZHmsGpmSCaZ5zrQQ9V8r8Cnb2zCb4hyp9UBm7erDPPEWA3j5W1rS1eZDPS71Ys",
  "key19": "3fdRgK2Hs8Y8iWxz912MXSo9VwCTAi1FqjLimoj72jpBPgd4fPTBWwm6EfW6nVnTkf9fwQBK3MytWEQ8C7FW4EBo",
  "key20": "2QS2sf6xinysW5JtonXcRbh1oNtKBgTJiPxUiJEphco1S2FjD6ea7NwmQrB3p8ASkZktkv7XhvqTCNrkaAZamD1y",
  "key21": "D4Goowojy5M2SUJT3qXy7k8fQxAvRWaUhqAHGUidT4qv2qhPcua8wK5ceCDft1AMoSe3cx3jvymCQqAuax4VYMQ",
  "key22": "DNLtmTfUbVQHdceNpDeMrwpjaXTxkdQXCF3zR2bWagogT9VjoSudWpcJXeT5YLi37UMRxAsJ2Zb2FTo1zpuDyix",
  "key23": "gBuZxd8xzwZeiz3rgQx5H9eYKCAJ4b7HSnBetFgTTXWpKh83mfZe4yEZijd3nixSNphb2x1kiL8hqSS4DkCxvfv",
  "key24": "5grY5tbdumQq7zLhgbkRvRhJsSB8VtU33QaxNEMSMSD2pTptHBLsk7CrHTLyosTfQJ4P6CZBuy2ppeXmYQF3qaNw",
  "key25": "3g6LZqG3gkRiv6tvYdHyvzMWHfGdDLBs8tpnwHMgbBr9Ep4GpKBLEDwVokAB3gfuCjHPrM5LqLMcgiaf2TL8Xgjz",
  "key26": "3L3LnmHbbqwitDtrpyknbBPCo6EJjce5Bn2je4ednTawqyKtjAQdSzPniSBc8zZ6rZHVfbgs1SZpkBkBWt3Ef5PS"
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
