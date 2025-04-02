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
    "4rwRdjR5YLiNaSSrua3mnh9UxsxxoDRE5YFcLceDiwdmALHs6jFLr6N98fxfjLZhmyxDdiMQXu7NZ3qkwUUJ7EQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fDHmCMizKr7teZ6gT8DYvAdJaLdM6u3NaL61q645mF56ZMYb9E5haJTA9cF9NtNwcngzsBfScHaH75pkdHCpr4Y",
  "key1": "3owTYNBzxXaYLvPR53yinZPp1ALocDuZFEYZzAcbB5qYpz1Y5CdSL5q7Qb1FESpi6Ru3Xn7LbNomcSRkSnyS1mNJ",
  "key2": "eydchZU3NUQVeTZiy4eZh25zzYEqSAKw3WV3eBTNQ3WyeDCb63jx79Tn9hVu1EkWBNhZ2Sjs8PkcY1irybZjZKC",
  "key3": "2MRgz6m2cxUkwy8usng8PsvZxnuHYdKMaUfxkKReUByqP2Hd1GsKysyycYmwgnZfPYn4CU13jzM4Jh3hCLnMXMA1",
  "key4": "61ueRbREPCsqwqXbdtX4pTLoXYWMKBiwPFAfgbcwWmkY5GsXRNS2DN5ioRVMCaPUmMh5LJVfoGX4gqNfMTrZLQpe",
  "key5": "4Drn75ngXt41huMUeW3Wbj5jvXmGUtFhMhRKeh6ZgYysWa9a1irKWd26qC3xsrgJpfE8gi6JbWzFJmxkA1bJvgUh",
  "key6": "3SK1SjxysVJHNZLMWxUDqndHZdDy6cpt6dcXHGgrKqFShFCS44XkFkKbuhxkYQDQSb1LQxYVXSaSTDzAREiq3Lfw",
  "key7": "3echjaE7oqBbJW7DJuw9YWwmGszTuAFd4CYR3wYemfHBxtvMp3Z8bWoLQLp4UsNHPomJHHo7yPxvpjXSxbPgFnja",
  "key8": "3wfu17T5bC7tfEd25krFUx2kNZA4sb42fxkccs3CftZLcLnmYWdiJCwHV9pjMQTKupAcQwH5Hw86B7L1neMhjGsh",
  "key9": "4NiminWBCcDy8rcdMoLy89phLB1wFkTFD7av2Pw2yJyGmGcTMCsssqDfZNJnvT75tbYXqd17Sa3Arp6AVSXPCYw9",
  "key10": "4VnnHUMifHhsF4gnsECCfvjLYiMb6vAQuZm3vgx6X4TzW8kddaLxSi1THk1PFrguDgPxCkDyNVZ65KC6yCBQ5WyJ",
  "key11": "5adVc7FpGn93rYkSUStNBaPqjcRn9hVdEooaUozb7HCHaiRgATca1SiHuDNU71ZNPJs7yK2AsrnE7UCgeSW7GEbL",
  "key12": "3U1o3zyeeWrYrp8NPHYBocrNyWPxEA4Jd5c11FbNL48VHRZsBTGWxmQcNWgmXTJ2QUrVrKKDavyrG4MUVNJygMed",
  "key13": "4wGe9w1TtT8E3w65uERZW6TA12QFEcT5mKXWm3aaDyYbdPk5KqK1koFYycngv7BjwFdpFK1amNJHDM2DaBmRS4Hv",
  "key14": "2E4H8pzQfCUjmoTqwF74LvbL1scKb1eRz8XqV15ktwFnTVmgenq3p3ynaXUAYQXx3pViFpYTjBvXR3AVbY1vDBEB",
  "key15": "5yBYaaLGbc3JH6C5KjvThtmgsQKcGHNrugWHUpo8JTFKN3zkxueGtviLiaGj9d2axoY4JfoadKvLiCyZxL9Ahpkk",
  "key16": "678Z46zMxnuW42kUSMxjykTbcaKAUvXXAhZf4PtpyxBEckxJd9mSmdCJ7PYFjPNVCcohS3miXknVms9xucr3SZDV",
  "key17": "osbMc8MGzLekJrxete6wfL2j8EwN9vRsGYzhbqtLjAbVXUFXTiV56cTiLZcezL56A6Zz17iyS1TxPhiaDa3F5DY",
  "key18": "QGTxvXyVZ2Z7n7s2YvCmtyn44Dxt4615PFzKmHo5GG32QbqvWM7DUsF7YLsu8KWjYrcvE9SCtzJTnvKmBFDfqGp",
  "key19": "5JKDgz347AZqF5B6Ywe6dW7VDx2YuMVzTh8AfTtPta8idkSRaTb18CBpzcGBE9kgZutCjA2ig3WLoUvnT59tpi41",
  "key20": "3tpMqGmqCW1scDZEZgHkUEPRkJqSsfVx8ijBDQngFQcKaGTMfBd3eVkMG7UCFiRCeVEB5PgAtbTsxTUKeP1f3oKs",
  "key21": "wWbT5WtJFiKovJFVCVikgcgiDisM9d4j9n9awpUctB7ZdcfcnhgoqvtmJfJK21W1qVC7CRbFwQ8TMhLWAmviHJU",
  "key22": "pjyAQRSt5VhDnA1ymemyqRxiicLZrjwbdukJUi3eFi1PN1XNQTNmMiL1Wdm5DmsinhqVbqCaWjjtZUnPSJcLbn6",
  "key23": "RKKT8vtUpTLQUARtBVBW4qWNPCzSNnsY3rDhymdnPnyZQzPx8eB4bEHwq67nWnVrr9aRiv4AUsxrsbCVq74Ua89",
  "key24": "35NFpro3cHq1X8eJVQchpd3uvH62cXPmD95UR7J2cWPTb4CdtUfCMXEVkVdqES88TxPzWos9M8DBNgA5M2twz6To",
  "key25": "udqEejdkbThnXe6oZaEGSmvqp5pcMYH9qLiBTAtCdxNdLJhJEpTKjwi14EWF1ibdCy7zvNDsNpFJtrLN1boPntF",
  "key26": "3AxrnXUSw1YjyU1kzZwByjmcBi7BciJaS4nnJfmwMHLgdVSYiPLYnp5giELU5SjFPiX82XvZQ76im7ZjKyLLPHiH",
  "key27": "81tvZCtT5Tkxfqw1XpsprRVUydYVmz41R5ViwvvmbAPrEX7jYqEVAZCKqtjazKPf8wmBGC1T3BxbrNb8F3qixTw",
  "key28": "348CsGFT793apsuXUeMdzr2LfgD451LLFpdvhMHXyp8oBY8z9bKQkgQudk9BHRR9PeZqMvbc6d5e9WYshvYgpSZa",
  "key29": "3ZVAWsTsGfCNXQUuTgosnEnU9i38tnVUrGegQrCaSrdrpaCe8GeonyZQjEvLhXWkWdVSeLtuxbDR8iYWTn3n2vYn",
  "key30": "5AvEREHhLZLANa3PXFbJK5nPJgWjkeAAfaEQ2BZa89aBpTFkmCADHJSLUg6b3UZmCuoJadsPrRQLmJd2Minb6zeY",
  "key31": "QGzoYyPC4mDyUwwmTLieGUifVPDjytLK1pxSwvftTPTRxtX8a72tyBYnM7mKAT3ensDYymkFKi4pK5KsJjBMeSy",
  "key32": "2KvF7s6X9YQQW2HHvvJ4euNPorFASNtPwuBurRXBuitsravqWmnnA3NhNug5hXQYe55VQ5cHC11XuG5bKfW5Mbhu",
  "key33": "3HkzuiLCjZpNxJehrGEz8gGVW2g6hSdEL9FGa4m1anumEXPHCU5Q9NDAXRpRmB4MFNPJYpdzqTAL4jWWcnsRZzFv",
  "key34": "5avSgmaass4YYoiUKhm8oxifhAiLD1JDo9DTd7YcBn8ZSdTtxzyZitWuME5iwdvXhVxsZ6knStxuycSBFdEuRp1K",
  "key35": "z49eJodrWzy1Z4AsihQnYoWTL9d2B99z3Waox9LWn4bkFTreai1nH5XxbazMiCDNvQLLQ2gPVvrB7L4z1fNPgeC",
  "key36": "8AWJK8XY2CWyVS8M1z3P2VKzqyb7m14rWngghUjCq4EKJdrrzm8frK9DXRGhVz27TmjRzyh6Df7czLLRGtWcgi4",
  "key37": "YB7UGmUG4xbxbCKGCqX3EB5y2iY4Zyp8bBEM5jYamCnPEQ7UcnrXU1MDYTnfZce9hRfowR4z25sAuE4Ck65x9Xg",
  "key38": "HE9XPBuwkcZpqkgM4DMYz3CfR67vBBr8rRNDddsrw1iwPDo1F75LquF1FbcJDKK48JuwDudEdXCq1dFXu7qUKSE",
  "key39": "EAcLLu9iScdB2B7cJqw2gd7Eb2f15fhYtC4PvTctmBfzHfP7WccPqX6Ue8cMi5g72EVK5Uvc3ZGTx2dsycRuTuZ",
  "key40": "3Rv8JDC9E9WnpjWEiiyGcatzdHm1u4HHbWnWFGBpMBBYksCBHVvoFKRLK3mnWBjpgEoLKn8DumZZsZfXFQt46eEk",
  "key41": "5Jnb1Wrxbip1kg4A8vEeSPYuFnFehiDTZon2CgjRzog9YjAAPs3gMtPE5F1dyXKa2jaLdFnW7AnNaCUTYCmm9Xze",
  "key42": "4Hw1z8aK37CdggKFjixxtye7wqeqvZNjqoExVJ96HujW7sCU2aV5FTeYE3CMsQSpmzc1ojnq7mJnygcgxt1Wc3Tu",
  "key43": "3XqcbT8FBaBhaJ6L4qYTvvJeYj3ZzsqfsZk4dN3irosAZzmpLYca5z4m8hJCY2MunW5WifXRUiVQczC72VVqnPHD"
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
