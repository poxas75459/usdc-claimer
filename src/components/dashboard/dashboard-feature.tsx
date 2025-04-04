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
    "kp4pLGXbzRrc1bsf4pvqUiAXwGNqVwRQXVJYHTz1gTokhdkYGbS51b8neQBjXTdNaqwAXgTo5Fmru8m8cYaQ99R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25gBComveSVNFLvox1nTyAK9uQjdyFyZTHr1oMfLYNR5JwLrUAvuoqQN4H47oCzsXUGsrTH63nsR8v1dX1YWqFd8",
  "key1": "1DnSQhMV8joeaZhM3b6v7e49MLQH8K9GGPRdkZ864ZWLQJa23qyVnKET2iJ1Vh8KVhmeWRyUrtwbShwG2raiEXY",
  "key2": "58MxdTbkpeBFVqFEUt7S5QuempmWRowLNLu2SzRXWqMxjdQTmPshRWFH4kdx5sQwHypaoDf3ck1Tbdq8iCahRNjt",
  "key3": "1g7RptKt7MrugeZ8KqpjFuNe3Y7HzDEjN7pLYXXvCTejategPfGQ2Z95f6Z8UjY4PbnYsvADCdvak1R7Y7AmJV",
  "key4": "SsGJP5SaVeDdsbMtC66ADXPwqUdDXzcA1LRfv49HcxycEUQjahYPQkPfipEwk7k2nAeuM68mDBSNCGACadE14bW",
  "key5": "44ipKfFn8PfvXA25Yh53hsyyLLeicH6x5VZRv9o9bq8awXhjVohrHsxq2aqJzesnoRHgJ4e8mH5hSdABp17ZDRH8",
  "key6": "hfJRJDeZsc2uRPy6uXhwGYGSJgzZM2vAPJ31ybVTyyAZukUDVgStWdGCT4mMk4iq5fyzs9zr4bNkBbc6qTruwEV",
  "key7": "4jA1Vt1h3oiqioKeEE5i934AnRukhHBhrLPiXCyaN8BmgxxQ2qbNepehUFsrFB2CG8EVJNmmxiqSuuvawaK2XGV8",
  "key8": "3BrQTf64dFLCstPrNggsYQZzjGHCVa9dLDnxeKJesvCuxLkUqZiDUFDSSwV2tuHuBW7Ks93akt94zSANg7QF7NXZ",
  "key9": "3TmZDsAkCskeNFWszMbUA5thdSDB4XDSKLtrChaR72sUV4pgbfDKU1HBrzvNkXJxJTcgujhRPCXusSGtm1AXBm5h",
  "key10": "5ZRagtkwVvMtiSBKsCwidwuGPDVZdAR4S9KapcKhN79P79VE1CoKAgx2SfZCT7PUNz5wx8DSGGw5ntkCpq8zcau8",
  "key11": "2CuWKyA2TrJMWRYoVd8UjU1pQBYtE7NzTvAqq2BvoaVCTYeT3Ap3Y47a8pxspdi6Dp4YuezkqJjqyMtbm54dH7S",
  "key12": "47Xd9ev5uBuDRQfA3P32GpHET2KzrTrtp4S76RVQUUMUr2EXiCNBqhEb9fhtWMB9Xr7HYaGi3H79W9rwTJJmJJ3K",
  "key13": "uP6xFdPRFgeoSuCzGxKFSvjFRYWaqtaFXuwisSBmDTttgnAeMaQCXjsfzXUETryBACmzgdfvXU5CqNQuchMsR72",
  "key14": "5Ykpk6rRHpMw7Yu1yWBYVgAoxNNYK16HAkTnvKSyKybS7JGFetCwT6Sw1KtYU1DUYRbKxBJZL2e8GxMFsZDT3ZZa",
  "key15": "3LC5V9D9DDMDn3W5cm6KdesTiNCqq9v8c5BErYp89PtG8YYrGKmWnoqRni4MExwjb5SMQCDu71HHCvsvUuiRG9Pg",
  "key16": "2EktMPyV8bZAynxUz3jqDcKxaSPGnrzmRwk5fcZGjPf4seAN8MHRJuG2UxzAZopiWDJRohg7YfhoqshJ3znN6i9B",
  "key17": "3BUwBzLGmFHzoTsfoAhVcrt9XF1Pe8AaY3ge468dqSRCxtF4w9Y2ATwx49vg1KMgP1DZKpatj7UtoDAdrG2U5x3H",
  "key18": "35XUopCqsPYMzPAgJWgM6m7YXX8G39vhw68ihxnhNzRvxqBegtfRGjDMmsNfk1bVoN4aopNjjCXumnFP2mixaZMD",
  "key19": "HCojSfCU5GYuqRxFzSvHFH3a1yuy3TNfBFxeJn42asGrf6k6zn5QE4cVcrRkdbb1XW1fhR1kmmnifuzaf16rxQw",
  "key20": "5vBDMfmTDT18BtdTyVKYfLWzzZ6GFot4d7eCkBRUgMWi3F7jLXe2J7dkkbo5cCQXGBKYua4mCppyCRHFMYxg498s",
  "key21": "3c3dkcVVF8fWEGYMtEMe6brosLSTYQRv9E3KswFk9SNQyWBme2PSGEh5zvpmBzLurLtzpUP8KPUzJnZrkjfooCi4",
  "key22": "2WGPoFSmdWHL8RZ8EauJjApUAqkavE1aqyxth93ncRBcSsqUDMtq7y7uWi9fWbyexrngXyWBHKbcDeYjrQHxArRc",
  "key23": "4aZ99F8goruNhLzCNcJXPBvHfLxk6rDZUESantLHWoMMDiXfZoamTVvcam16ZBGFjf2o3DN8UWbVtb4n7FsipmtX",
  "key24": "3Agz6upVLSCD24L9cBia6SoBVCL8zTa9qoYeVGTaAmFQxJaoxJ4YCxqSFNS8FWaChmiE6Y42HEs7Zmn1SkEmVbQ8",
  "key25": "UH5BxpTToarPNTaS9b1Ezj7jHo3RQNxfTXVieW1f1aXuFAFN3PUn7PcZunPcjNzQoBzJwLCEeo6a3dvAVW6hDvi",
  "key26": "5xM3gBqDRS9gy7ScAzL8EVTE6TxNtGi7bPN6NByMzx9atSSJoT4aucPXiqRpzAXgdiEmRKzM7F85kTWVKwk9u2C",
  "key27": "5n4YWbiak4b6gymeib8XkZxwdvqQU4wG1CsX1CFg8SQqEq5cPbsiB8NqsW5gm2YpQyxhDPkzmSJ5yxtZoDsDVArG",
  "key28": "48NK5zGThHyjWTNQmYZVV4E9rGfjFfCa4MexdNhrvL3DGGF1wTDvciavHqDQgJoprQwS4pXAZYKgwFv7AZUgyvZ9",
  "key29": "oLjHYPAingzeuTDZ2VqSgKkAKcT7vf8hSEgYdE7LipR4zWekN516jgkKgaGo9UktDP8ncBLzMyS6S9MyTiAwP7M",
  "key30": "24tnZoxJzu6joX4TB5Zh7KCDcowXnA2pdyGGw91naREUTuHCXF3srR5eGxGttMWp4dXKTbwwYyieGheWLYMbuzYP",
  "key31": "2Jbuvhn3DcjueVMTmyHcmfzPqJqNYHZp5APxsrEWhzP9xTFEMS4B3D8cbxStdRTuxitCoNEwfskHAtFAiKAtRRa2",
  "key32": "3ZEuK5auZZcWewcB2K3pQ7RTuadjS6DqRVjoz4hoRJaFUR782yaQhHkwJkFDocpS6SroSQr3uw8XMd1Azd89pByZ",
  "key33": "2ezB3t1cCGVfPrcUfTGGFopCrMQsAXvVeLrpZuHMadpxSngs6t6R486SUMCkGZ8d1W5ckETW5GoCD94ZKJnSRx6N",
  "key34": "4oLWb5AHQz7V2HXCMmdS5uqfaktZvSMnkM67QrRinVhC3fYasGs8B5W1Gz1gFkmiRk9F2fwMTXssnb7rCGzngt8v",
  "key35": "3irTqRuLaL8SxWqqHCXSBFPTGrs19ohX3bjTzM7EVg9HDtWtt3A6KkwqnGgnKYV6UenYFFhq2JcLwYqPVV5VKJrU"
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
