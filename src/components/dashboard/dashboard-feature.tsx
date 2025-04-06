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
    "26AqY4mWm4XxiLXKAkHU2BNesLWiydpn6HfgA6sFgbdYzEkuhwhqZRpx43BZ7ADHCJtB63dqRtQH1ATZTvU9VZep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfaVCL5cnrnwitepHLz9drTHaGST6k9u9grVddXcwMJCnzcoqzJeXhxpFR1VoDTx9AQFEzUk16Ckbn3dZTJxTvs",
  "key1": "3bMkqzHa7rup7wwPwiSh4BuxRxDDmcWaYAFmoFHW6BQroAWERCra2yvSrBacUMyMAN9D2ahCr1MHDCYNQRqV7aHm",
  "key2": "kMGUSCfKwcUeS8Dc83kMXFCeamUidoBy3vBAif3Ekb5TvCh1BvJrTg9QPZujrVoL3X3wcc494eJFgZirZcMs9MW",
  "key3": "avV8sW8ch29DGQoVARyuyxUiHt8zkeNetKxafcxx1Q8xFHREA6WGdQAFuabXU1Y3VfXAbwYVUPocRAZA6wPwL9H",
  "key4": "4iSGMGogGMd6k84VxhwVKSRNEmHtZYao9z7GeAVmiCW3G68VFoau3pkDYewT7QdHkDyLMgdaRWYjHeLowsY4tnvu",
  "key5": "26GxutnyBoH5pfggPHLdp93BMuaE1WhzZZo93xuJKu9ggpWUTqTdWoYXg1VgY3mEhAkVLT2Whnz8uNz7tLYaVquc",
  "key6": "5ogz1JitAhrSDvXwF835JuZsYd5Cs4vsBBc2dMe4HKJCGi2SUipNoUpGyoYDdfABPWz7JYGugdUAEDCA9XtMHVz7",
  "key7": "5wsUzXUD2C3LaHfcALbTKWbnHnAKyYGT6srJ2z2WSErLJPaiRdmXdPBZxo6UGurV9ipYkMxtPKBDwZjUVdyqXP7c",
  "key8": "Ct6S1YnGEj3yvsrT6PAu9GD4MWV2pVKgaWkPuPTeev9gd4JpiED9Fn27gb4wdAXa1rZpFSo3jvNbCqea17MqAcm",
  "key9": "PiKRDW4ihneGtogqgR11in9W4kfByzur4LdzLcT3493e2BzLeWDyrvHkPcx4kEP5VMceYFWJg28ipKzGPSUaydt",
  "key10": "3vn1jTCXiaDxeWqEh9qKEbxe2SUAENBs5t21c7eApr1pXWgBC2Js4qD157YavSJoZRc5Fp1tv31NpKU6iBPRosMP",
  "key11": "oFiWbpSPA4w5H8jtLHNGRz2HPhigY6CHkKFGRtNntQoK6qJnHmnNeyXpuvBpgeEiynpYWaVGGgtchE4pCiAficz",
  "key12": "2Q2fUCcewMhDBtH6kTcYVsBTR4KdpF7y8WssjztXHfniggsyMZENhrNkUCvft5crDGUpzUD9up1L2wwRWG5kHNum",
  "key13": "2P9i7KJx38ifnKVru66iExznxAES73pviYE8tLDBjHCtqovDo28FVpG9qDV8htUix2f6sL44Qn4DLxAnWWiFMvR1",
  "key14": "dkQZJ2KE8YnfsTn8Q7v95HdM9yo4T5RxpZYgUkxbU7fzHcTUKAofcUNT1SbJchcarP7Yn1xNEaisA6X3gEahUdT",
  "key15": "CpRPtadEVAgUUf2nHMsgR7CqkYwezjJftH7faWXv6RmtpK688JHQJJbaFYGX8WYzkXK5Ud8Axm5i6wLTgDmanAw",
  "key16": "2o5Qs56WPsSV8Sak4vt7VgyXguTWVsBieSN5BN19iukpPKdeztrsE27D5bKaB4Yc4u28SwVFnqXWAnGc856n8RF1",
  "key17": "3zEapFyNid518Ym4y1UeU1uj8rpdJbac3q6VHr4m8qUZNGpSeHMiCNpUCaLt2fLYZvo3tLJHqE8rZWNJoYF21WaF",
  "key18": "5g13TSwT7puoMqBHtXvjuentpQqaZno1Hepx8EGFgQ5gq89KoZrjvMzSAt7hJe26rwUGBznBR2xZyRByfS7Yj3GN",
  "key19": "2wq3XDmTV5LnVi4S1KqLcoXL8j586oJ9qVBhvnZk8S127KNmY5YyQzz2gp6cbgVUeZFG5SRwbB9eQZHPwv8m73yL",
  "key20": "2StvT9U6gof9nker8c75U98QKWqTShgf6U1Q51Au1G6bw1iQTScPvS9FVGut4E1eLqE8MHVqwVxUckijBgMfUKpE",
  "key21": "2EKpwpjhVHRCbszqeqBpYpTsVS5bRWYPyGdhYL1NcZtx8FwwCEgF8AwBMyt9cuRExXd25Rd27jfZSFQ8me6c3EKt",
  "key22": "4roJeDnC2W3fuTCycARDBd5YsP4QNhGurYU4JvYmhrGJV2Bv5z6wrd9kDWetF32X4bVSjA2wQX9m92LX513aH4GH",
  "key23": "3E2momgtqW55kUcTBf9RQoBacVdtXYTQHx46eD1rjNAum9eVvxFQe8XNEetYzw41UUvEaMje9ErQ37YJqCeWjJi5",
  "key24": "QbwcUSZQwPgWWjSAachYBktLBqngcKpQaDwd2ViGwpw6ehciQZY7Dc8Y42yAMtYjwh9N7U3n4TA47V9P249Kdax",
  "key25": "2N7Ds2keyZ5FCDYrz175nnau9BaxjEAB8oRNaEwWm3o2ZtZWGZzEW2TXdDjUjswuH9aNj4KbhoarL635iJC9wLCP",
  "key26": "4VvBLq8tvDjKo6acNqzztE5vsWbay1LUtdRSybSwxwAVJ43TR3dRivpybxcWyTioaPduTbFdjii1DZ3Muamv8d1m",
  "key27": "3jCXxRnAYAUpWLSNhCVE4SPUv8E5yv3itMN5unkSN8wDNoChtZw9BvWgLU1P1fQwaDgJkKm6DabLHCzHTuhUJeZc",
  "key28": "yveLB19QexSNDMPrTewVxfQ4oAQeDfWUmhFB269Pen6LWc4DeuBi5ooPn3HpowgrHpnUVGU4FSvacj1i5UFkiPX",
  "key29": "3QCv2f7nRP8j2nu75R5FN8dDyZuSPmu2xbPUA6HwVpCJ5g9f8kw3fLcTB3L6sKCNfZTVFgmoqa3UiUrXKw6Mz6mU",
  "key30": "26JNGEm7JVp8CkpV4pbK7JVTsoZxGWfRVzPnqcNqgDFcKiGaQxrgMB1quzayT5LYSN1VWXGJ5cTPjtEdQPnAyjwh"
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
