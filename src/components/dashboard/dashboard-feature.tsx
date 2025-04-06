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
    "mnko1Md3bd8naKG5LGRpWw2ZC4HTUhMeem4kthzDF1a8vDecDTdbvRc8eAYGuQSrtNPWwSXZTbGibSwrnPiqGfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghgfsqf6gK5wK7DcYUDJ6gKTPsGc3NLHeRuS3gywzyyCSMv9dqjMTrmXxxyo2rxifDTjNwPSinX9ePUxvYeiSBu",
  "key1": "4UkwMPz9nAjobTu8NSHrT1AiZku9tUW2E6zTiMxedv5yp1k4PnQQjaALHFHxf1Bp4cTcDdU4AJ7RukyGfx1sSULv",
  "key2": "2AKAa8zUc9EwCGWmd5DCUYy7wF5SdhuUdsAy5AK5Tai7athpDa1rrD7x74XYcFdBfahFaHGUQFMPRFY8gxi3bcNg",
  "key3": "2faR3XsNrGWWZwcqgxh8cFWXTrvj1AHpM5Kmk6mevPibULvaLfcUaXkcavzDLmjktXAuS8vysJjj8aqjBcoboBKA",
  "key4": "4ZbXDzNQAkosgwyMBSFNhkehVoRt2DA8s6cdGv37KxcnzWsuEYJtKY97c51bNMBtgKek6CkBJnpQLAikbB4sHRe2",
  "key5": "4uDd4WScfTEYgKWF4f8158diJPiXcq4K4SaTJtn2gzAyLJKbDDNk19fe1nm9EL2stLK5wjwzzAMPs4efA2fAFUNt",
  "key6": "eRTTGuxiZwkxyDeCYSTpk5NJgmHx4VwCdbQ1t9q1YCXW7hKA4atMuaZ9cnuc3a995feihqP9V4Y8hiPAwXS11w7",
  "key7": "26dUSNyKYp6a3nmbYPWNqX4RGAFTnLwG24a4oPo2tiqiSFmJfBirBDwexUJTNuJ1TfWECX7kWRoc158oBwDGehDv",
  "key8": "Q6RNtPRyMMwxYfjSqgWPYCPsq32N9VQMpTvNJ4dVWSXWupHXdNeSj8TBGSvxvnj4Wk6owHxb2CkdwTCymorKxYb",
  "key9": "F6dc9H1ynxeBccYxyVdvw8VbVW72xgdNMVbxJFSTSazcFMnfRMgyCX5DZRswF4zZYTAUmCzv2nuQTUyJ26FMosf",
  "key10": "5s9euLw8SC74vkmkd2T4FnxojHo7esRBD4JZR3F6tpiEpp9ubyPrBLfahAcQBWEdnvmwtjSf7kVV33XpVVEPJ6k2",
  "key11": "2dMk8ZoTqEZzNNrmA9eGXu5fw5gana7nfY4LHDqKB3MQsFaoMhoaA9FdDUncz5VPpXGUPAHuctnhnLBFqQdaEfbg",
  "key12": "5rpeW2Faz3eL48pEqSUMWmFVNemU13P1dZoGnNTfs2uBZZ42TbcRZbY7KXiGA8cKi9W3Hfy1NzWD5KrFXRxvq8Tu",
  "key13": "3gpAqMo1CpzYj82JHv8BACNnhZR2h8BSbXJY5XfNXG15kuc5cTCMnFMuMaR3x4yt4zS2zdbJ6BuAQK2X124XSniF",
  "key14": "2nT63E7sWtp4ddifDWoW5Rsds3ANJ1zDK1f6xkKnzaopoHfufnDCuxU6u94kAdmwRp4WqGR19tSqSejqzBFKGtUg",
  "key15": "2EbQ7FeHi1yNjjiqpXLYYJCJQdjzrUNqkc9oo9DqNqgJkG9WviNuM2drto5mdY5SLSETFHi3uj3kKbod6VRE2gyg",
  "key16": "5Y9BsjYEjzQ2bXMojGpnG6Efu7kCYe9KLzA3DDxup39nq87tz4g94zN8TX6WB8rksJgQYYmcu3nUDKy6HSDwx3ri",
  "key17": "yQFXRWkhs1dDcsdEvbJWJKHZywohsFFKY7y9EbMwa1XJHuTYN2ZLS6crCFdRC86wYFA98cynQedHL22Ruew3KcY",
  "key18": "3rs7nLtWmZESc61Tekk1YwgbiPFfQUDBvg9yQuATTEDCD3LDVe7dK7ty8cvaRWAKKzWq6cgaS29PqoKB1KtM1KQ2",
  "key19": "5da49uuK3sYLG1xRSrioV6DSAEbSeFVLoC3oEWBu7CxNajD1VvfoY755AcDwjj4BGbbmgG2KV1Bua7FCPgvhwHw2",
  "key20": "34z24o21U21AHj6EpkfCY5dYpeeS1ZRkB57psqu45wrjezcR718kzSAzu5D461PrhAQZzNoSRGkpZKE1UQMiQLKU",
  "key21": "qJv2tt4ZNn223jCRH1YooX4TcJHGZvbMsP2G8p9NNDG9n6QMtHH7B3zuKywLJDMP5wAGyawMTBByEeF3qPcvTfz",
  "key22": "PUVYSNktrWD8xcCfbZYoyQ6baHvmSz7XBTJsv59wFEb5gbqpmnRRpyKPJZdZdxzGxtPUctKVzYWnrAKZo9Li6vs",
  "key23": "Uw8KCwfy48iknkb7EGJhCuzkfCmAKJpd83PiBPCyvnHWtwxLikBjVzjDey56uHtTDtzCMBjC746dmLjG2jwGJL7",
  "key24": "29DsFPgtj5nHSae52ZjjcqrsPRy3USK1deXfppvmsoTYLvwwacxmBcVMaM1uKmTJfCs3YfeQHn1VuSLxf8BSv34F",
  "key25": "43AkdA96MSUNRiqpCRkS8JEMz7qNe7iN4gQELWUnagKzFQ9UqC2qxEuDMTkzjbP8vab5dxqJDK7Wwips3QpxSKYn",
  "key26": "dZQqxWYBBxWRUd1AfA4tpQbKBGU8q4vVp1LEJifH3rkEpPNAqm4EocQNLsRijGExD6LVk2wSeZBaNDGrAtTkNL2",
  "key27": "3LR5pd2uQgF1bkneq3UrfembH1jWnfMqgfn2bkcLSCagirddMVaASBPS2iGCH3Q3UumaVtiRViLUPfV1GWPeVNcY",
  "key28": "3oNwuthimVsn8QuRuo4ttWYyaoynLtHEfEHXjCFSd3rLFw1ePFuG3sd9mQQ8UBrZd3pA5ymjTHH6HhLdC4xbudq9",
  "key29": "4T1CTUqVT6K8fZYdDJicioEAm7YYazyrPrqzrPkZoGRRwpJx35YB8Fy8aujZucJawJ4i3duGcnaoA8fiGXNEBvRT",
  "key30": "RtnTpZbxoGieMMf2ZSeUb5Hf48Ez7Tvy9t43QKPfjWWd8JLa5HNqKwRDkgmdJNw6DaBTUjDhjepui3xMXzKt6s5",
  "key31": "32eKGiqfoWf3greAaJtr6dzsiEDVTn1Tjm22bXG8TD7NgFidpMZvQpAw3ityhNVRd4fPwx9HF7oGvYorJ7rYrYdW",
  "key32": "wRuHDvg1iXKBR4nZKuSaiTAW8SAnAXDs4BM6ut5tNdN88QVGat8Bugy3YSvcdu2rZ64wPhyU19GzmWKmaodnsRd",
  "key33": "5nm6gBGXQtb3d1PEsSC6M8xjyExmeePmcGuxgzNmoByrUAznKwWzcy5SfNvXXkAYxw7sXXUASYvJmCYq2irR49zX",
  "key34": "5pY8ivg59DT4qZNsEJ3whPuBvRb8dPZoXKQpGUFusMuD3oXjhZYiC9z47gCchyaHcf1hCwUL5xoFX4B3JFrk7n4r",
  "key35": "2b7WigdZxw25k6aAgDZinNthkN4xtKKNG64z2a5XT25sFm8rXhAAHspTXu2S82yG3MXfwif7HfNs2rcNfQYXxDuW",
  "key36": "4DsZRv7qUS8JkTsjfLCUPL8kkTzAKagDkiFkFrBVeTL5rTiWAUBXqCdFb8fNbVxyogBY22oyuRVrk2MaMNNpLpKV",
  "key37": "2LQknCVoLzwJWMTzwgLcBAHtLLWo6foRqJo9NqF4iobRA7xrgKCkZ5DTwTFJ3Ga86SskmPDmYUWZed58yRRJUP1Z",
  "key38": "5BnLhr6r8mZMwwKDfGT9hoL7ZYxnakStKmDQFHTTmffJRfuTJ52DG5KEYKPAW1e4xmD1Y5GABc3hUqwFyJLWK54U",
  "key39": "35YgLosHpWLeKjf46bJFs36Nys9PeGKkYtBscGjkpvP6MAhvdvqLMRg44nmQ68zU7vFCXCW5feEZcQTKKjGhwMWE",
  "key40": "35b7NsSqENs56SKGgi5wWLkfhLJT4byZuPGmsbw43i6ZryMazLucmcJZxHTJftNSJnrnwDekrek4jkWZUedHZae8",
  "key41": "2KV8H1VNARCmQT5gs7wgB5X1ivCJEWtypssAZqbiwmrgr2Nd9uZ88jGXQfzzURrQvER9K5CzsATssBuGU6yhL8c9",
  "key42": "4MrYX4e9Br18rcCWB1yeS1cmmSXguAQrX5gXz3QaLhDPnJZsavYpWBQ4nmQq4oYPAcjTzWfshLX2yPRWgSXUQhba",
  "key43": "2d1XPjQvBVPzWMM464e9oDzQtATVKAwinUpQhA63cUGdfQ5Nye25VcDq1MfGbWZEB4miGj9NcbMBqk3dLHRV5t4W",
  "key44": "bG3iz6rL7oKkCfoM8tVegYifkDu5eeznKneFFXoCkE4cBts9EpPiMy2YSzJkcLFF78Cd4ysVgg9CzNUA7Hntjmg",
  "key45": "5ZA9XS64jZ4WR1bREYPczyDbuaiM97bmsW9NyaMUgbv1AM2orAxqVuZv3LiWvGM5Y94CPvdffqEEGjaTm7ZUN72j",
  "key46": "2k9eZSyfpv4rwpzmzu8otxW676RdZqUN7nVZDBcFz25Dfr7tDXsQMf6oh2yuhXikyHtHZnDKubWHEzyUDCMKDYno"
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
