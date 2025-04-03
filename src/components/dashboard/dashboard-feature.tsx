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
    "46x3naWBVar4sZM875oxuv3zKeyydMzr7pbjFYpJMqhF4uwi7yNBqwwqsRysNL61PbC4eKAanMwFhzkYz16bSttC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bG7tBNaFfVMXX2wXnGvQpHJx9wVamEqs49o1diYrozrqgm4FVVBmKkbbRxc7bXGC3PdpXBY81MAQNrjJGmKxrBA",
  "key1": "3MjD8LFcvSgEN39213cjD8qxCTdFhonjTCZbC77FzE1FYb63Bd5jJRMMPRdrGYK6oAfL6BP9CgcrdeLwc6Drn9w3",
  "key2": "3aKm8Hdcx6WaLJbo4zqJmK8DtS63jGfrkcYyzxfnJXNbo5wHe4tzBHCXE1hi68dLmAwhR13B3G5cLFGSeyynFo9z",
  "key3": "4GGZmxefsxqhoNmMzPNGmt2jBYYBo6YsWsKQErd2ZsWXPk8FGorDV42NSJvVvnguJLC3x7hgFNA4R2ZMiRiprTmM",
  "key4": "ZHS39Df4RM5H3Fi1XJTy2uYfgQd9cXN8VcWKkJt8qBXVjF661GWiHBM6UxGN2kVMHtGEFrWEqVb6tdxrNxtndnv",
  "key5": "55Ndzj9ui3oTXeNSGhwLRMNAH9wnAmZSd1L1duvW9Pv6L6K4zAsu4LmL9CXhWB2wSuXLkCu2JMzn5ybT4WSqCmN3",
  "key6": "3Fz7n56xSTS7SkeB6haWYV8fWA3PvbRZedndzmEfzN44EM2HkJkMQHL2myTRyNp7Dd3gtwesx4vWnraUxeYhXHBB",
  "key7": "63MCAWhkXnaCHEJGNCjop2XPZrXUxCZmqrqWXRTshZShDttmfCHHe8Nm4Dw9MMiDPEEfKRZRrxXy2znMYXU7oCDq",
  "key8": "43LrpFGBXK7hP24nxDH7F3PWovTSzDQWFT2Ys1rVC55jdxkBaTXrtxX8VX2wnuBjACSSHRtGZfpgSjDZ4JXXAR7a",
  "key9": "RhhAbR87JjBiFzGfDYn5EZg2WvHRgHiQ5n3phxveKBpaxXaZBUwPaeKYwiem12QyJ5wZzfDS4aYUEGnWDYqiXHD",
  "key10": "2TYxsVSRao8gQg5CJfrFB7xWsMMqFDjiUmggq4axuyeDKcVE2SEJpqXhmv2EY9u1ECxkiQ8a2kUXroJpu7q6uhTc",
  "key11": "5BAbYBmf745tVPmhmroGAWyJrhaqDFg6JtiHQka5nyeZNx1Rdv46LUsRCf15eGJbAgqjqdbuQW5PPmo7GhqTQCcB",
  "key12": "5G5FsgAoVgZojnUmAj9aMFqooDZSnr5FyPd5hCSihRLTogLRKNkYty1QabXssJ4xitXcdA4gdfTF1GeFJebTUL9R",
  "key13": "2VPLn363yC9q7VkFoDy7HktR5yeqrgfWXW3AYpKKQEcyEhKMu3XjNfdUU8y9bo5Qp8kTR7nVv2G6pgPUN3Yy6y1Q",
  "key14": "2yMrm2AtmUyxpFSBmZPzDrj3C3FcVqUfZtYWHP967prht9kioEhs58AxU1tm4dgnMn9KXBB5ify47uvRDHCZ1PqG",
  "key15": "4JhyxehrCviuNkx7jb5aiUXFJMhui5kbgBcNAAU8DsQJnaipawVWt1B1d4BDUGcwYLmAtaZH8rtTw9j3gBrLmh9E",
  "key16": "2AZ8QCRg3d8uXT125cgVfnvNZEK62fwzHXAJA5wSJazvumrFEfGXgFQWq3sxKgwrS5L1dj2VFMpXyTcB2oqLYt51",
  "key17": "32UsgVjtuQQiY12PfcvoxwPMRyYYwuR4unc1R67xVyjxSskZXpiJtAUFfgGVFi2r858ZwqvrAjiR1sigvfjXArLh",
  "key18": "SDpr3reEZv3AukPY2V5Tz5ftnNhZhRKepTLutL5GtJXJmHUAkz9AyNmx7vS3RPP6LNbp7KHbwwvEVkvNEP3JGt1",
  "key19": "cdAsguNFyYPAgtUEVk5XtjfGTKEYbeFG3kHdEsqnx8CZubgnAnRW245WxK4BcycWBQTHgVmkwQqVCW2K66jGb79",
  "key20": "28EhQUnjwmxFcHytAvgcJhmCyZBuVM31CSkSvZkGU98VRBeinARBif4SgZ4hrvLdiHR2D8qAsdEfTKHwmBTuppzh",
  "key21": "Y2iWrYavbi4a5kodxkbyfrNaVHyPuakEiWjAJ3CdkcfanUQuxuhgb6dTkxvrCddK2mZ3xkqujomRUAMWtmVX6qA",
  "key22": "5AkXNnJPNmUhzZgRACh5jyDMpeV9Byz1d18LigxPERk7UjirEmkFusUBhDFXZWD9Ydt9xwkNZ2i7t5mLq3vk4h4w",
  "key23": "3ozDeDpkcGRkWyRDeDzBScG1yWRpsjKRbaAyf9VggpG7eM6KkfWcFxhrAGwdXSHvpv8grrgiDRuaj5H26FUxetkg",
  "key24": "5tyqJtwwHv3V1L3vK7gU5jAMZxzjgSyuYjxTBT7oy9vd7zWuajU76qSE5Z8Kzre3NntrSGFdEFPiR2pAoijWXRfy",
  "key25": "5QDrphb91pVAcDydAAa9rv5YH3CKAo8EQnpu1kzxaDRqe5eTUnKpBRcEaEL7petK2VnjVZoLWg8SPAX6NNTsuamX",
  "key26": "63ucigmRvHoGcpsCkkjysbaYtBw7inLBgfRoKvYTNSFfdBLpDVHrtu539xVByUX2DCQcYKG488g3mJYK7CsSThkx",
  "key27": "2SuUd6ySMBwZBUEYsXDL7iKF4hB8v1GuwoqGHev9zdwe3ZXcmfsi5kyLqTibDNHeX1ELSVCdocnwX5vwbaqxDARL",
  "key28": "4yYQj8rvyTkynPtpoTLZ4BuhLQhYsKqSgztZv5diGotpvi8euWnADQASt7M9eisCSwwqMtRCjTxZYzMDGHxLF1iu",
  "key29": "4fo2GLRbEPhUadmJAnxVyRnmUcjJRmPViVRUnBhRpc7jQXQD7W1C3SFW6FFn5nhfeMc9CdPzbnUEP6mC4dAQQN2z",
  "key30": "26EwzB56EEDfeSjFNYUDhSruDe5RTNbCcf7YF6LRaTkTm7LmUoFcKYnDRVr93B3uLMgsEqViejeLi4CnjxCvvVZh",
  "key31": "35ngBYFn7S6c6SrsjzkmZEEo2JH4udgRiBE1VagyVWXwm2AgrhZ5tHS7EqS4xgWEUtsysTkA8MiFZs16JvXouJ9r",
  "key32": "4Scx4ytcg5n9ePEQhu6RA5G7s4TdiLXr7ZqtFo3tRmTwds1Pwzbg4ghq1HYQqMVJnuwYHYa3JcPgEqh1J4uEhGK1",
  "key33": "41LtkgWHD1NPZ4J9nkPaFiMtMc4xJPRoQhQbd2cx7Xs6v4dxJyGEaNgTakHpM4EwRjRjzEaampXH7veMkdQvNV5m",
  "key34": "5fukM1Qbuxmutw3gYiWNoEk69dQQdBLiY1REGgHNUDs4qjytQhrmYECD5fgvmTBnGqsZTiVbyBfZHMyFmiGLPpMo",
  "key35": "65R6dW2yLpkTyP9s2EZ4XSNTvwvYY9JuTnPSku2TpsuQ1YSD8BC8P8CTAFj44g2x6W8jKtW46zqPve6W6W9uB3dd",
  "key36": "3rQGdWbhSmvB1PuJynoAeCD9Q2JQjsvdEmP8a5swoog26fbarhN3Bb8qBgVxMoEpJsGrTJAbCktHL4gjZpZt7LBv",
  "key37": "2eui79Q6p61QoDC2P2DXk4Kz3aHjoj8YpUBVLbvJQ7nXLCCzpF2MAdZ4Pa7hDAWTWFTcxfAnnTHFqPvJNsVnBRkD",
  "key38": "4EtmmTbcEsD6zYR4GAvmNGfs9uggyoX4Hw2RHzAx64geteMbvRgA99iLz54UCozDrQ3DBN9kGaiqEByfNuXK6o8N",
  "key39": "5a3mGxPoQZrt8bmFR5AinBBhG5dTduhVhLYZ7HfaJ3snmkJWF9tXhpG6bp13HXsqhjT5cKJ4Nqo8gZidaui7sd4o",
  "key40": "4zL3Tuf9XkkanATRXK751RrVtDVvBZEMi5fonskrVt8LisnhbUYgR68pEiDep7U6BJETnuToVAP5bus8dJApDDGY",
  "key41": "2uR1ZvMck1nYWphS4CXjLjCRu7FuGXtj8yJfa2mJkdGCWVU494E4mLzqW1stf1Up1godGedKxFQBKbZJouP5CfXC",
  "key42": "3cTTY9KYxBbRjPAiRzc387kycWYJiZvAASB8yWKDbZeFmfNkoSStAJGEuSfcYZ9enuFKiBRTc6NH2xSedSSCoCVG",
  "key43": "379km2mg2DHJFG4ntXWntJQaCpA9uykLim7oaqhnXnNmJZRXfpQ5KPk7aL6fU843saJvYv1HraDfzXgWUUMQkD6K",
  "key44": "5xxapX2YAvpjpWfxmoxbKSVJ1iuQmQNYzYHwNudJy6JKV5Jgbw2LJVvMJTPsKExtFJmEEJQYYT6dKYNrVsffmXc8"
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
