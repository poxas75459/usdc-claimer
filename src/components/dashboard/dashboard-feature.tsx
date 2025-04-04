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
    "49yCKiEgPYbHZKr9cPFXZe6jR4i3JhRFGTCxqiRcDU6okCSAZdCupyjPznxFdVj4gss9dZJzBBdkmXL75Km7ynpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QFEcUG1rvo9AR7YXou3Dj1WXqBDDwYrc2zZKPv49T95fFrCutGG6TuY37Ya9ipYSmEBKn8oUr9xU1UzPUvqDGdR",
  "key1": "5Bvz3H9xNVyvzU313Y8fqNfFHrqSDfhGodSB4GwFwmf9bu7axTmPS84QV1epWUgtTzE1NjLggygD1Vt49g9Ak5d2",
  "key2": "2kHNBvaSJNFFM1XyjRSjuvJUT4om1EpB3bnjUM6UYHhUwk6VmLUAcu22mjZdkXkDykeSD2SKN1v6GdRpmRyiAPzr",
  "key3": "2h7JBWN6BMsTFNUaQthfbC7C4pTHko9S9UU6QoB7eQ8wv8HcqfJtCTTEnmzs4CDM5e4BFSYpNE8Gpt8jDHQFvSfg",
  "key4": "49ReX9NLNGfwErD53dUFJpwCswaaqzCYQtqBvjgajhAubf6X5RCPwdr15YidZGTGMxTZWiucSRLQFQZbtucWADDJ",
  "key5": "4roXjKVSAkALYD8p5k7rpuveRUeb65awTQpGEyMXYQforhCMRyYRsLYmppxGN3A6Gi8SF3EgXaW9JgCSR97QULJw",
  "key6": "SEBpaNw6PRo2nVH4xhqiXpiwrAXGy3etpGpwGodz12f4S8vm9yuGkZNYczmvKKDgNudovPC1wMQ3ni7b7U3sqSe",
  "key7": "PGv4E1wGEkR138tqZp1kP5RfrRypYv5E9FCCP9qoVoVddE7AiUydJExUvbcFZVYDx44cAtbsPFeiAEyZd9nuhsL",
  "key8": "5LmeQJ23w32kxRT8T9btbHCmTPyrosr9Ha3yzUbmT8TGypdBaiDWE9fyjXneHj3k6UYfSWVGWtUcmmGNUWmUHHrB",
  "key9": "64nMbp6hTRs7M2zG7FMAc5wWJScYVx49HQKnnkxy5qye1ZKpq4gzhB6UKpUKrkPKvjEfuqsXWRYrWbbMrbFJzWqS",
  "key10": "2tgp6CDoooEfUMCHUT589xHENBkeHyi3hHrpMFV4y6oT58nbCmJ9G5wTN8Vtd9eDKRftZJzsY5Vp2eZKqgyfroUQ",
  "key11": "37w4w7odsdguNmbHvafHm6vQbNkGHFPtBcXojkNxNeRFVBNhZ3ZMpvgJuqMTu4u2ovkMyisdSmgVT3ozyxZqgu6r",
  "key12": "3fJhrDfzumxSZPJE1rcBuvrcpa5ZhZsRi4gBQe6T8wV5yufeAtYcJdzDRBLcdmhyibJAgc4XUH4aYTK5VSut4qX6",
  "key13": "4TWFriu4Td4mreQU9fQhZNgZW4puGLFkWjeBkB8NHTyhRk7aqQ9CPCibNZ4rPziut5YM668n5wY8DRiaJX8bzXmN",
  "key14": "p6aUqjNaWZDvSRKVfGGSEyCpdQZWFtCbaHdN1A8coK5bKjsusGfGxFkDBr73ufacj6C8fPRPhAL1hcyaBE2Ed3x",
  "key15": "5vec7xpxyFz4VKHU641B3ewaMiGnJdc9gbgKG5o1T7VMGAd1D9VCwRkNHTNcUPTZsh9XuHjh1UtNHE6r4RyCjEN",
  "key16": "Z6LesMxEcxN5MaoaEsEzynXMngE2R8v2wJh4ruxt44Yh8YACvZF2Nik21wCV7pnbwYXcQtqqui13d9RnbASubtZ",
  "key17": "5Jbyr869Drzo1jE55Di8vXcrbbykmujx4jGA7hUR6TaRmr6DnKviJxCJu9UjciFS9Epy1DeJWzbScpgEinmk9RA7",
  "key18": "58Qwmv9sVYzPUsJMpsB8UZDeen1Yu9ZoH7r59xsBaxWCELZfoxzkUYdckh76bUfAWEfTwU3q5YvjwqHzrF5brNR3",
  "key19": "45cxSLw5gVCuMZnxRroZe5oR69WqZY2aHF11dA9PajXDdSAnG7evLLRLST4Fn4YRNBmGGCerYnk3uFDtfo4UmqZR",
  "key20": "3Zpj3e6paHVhgoaUUigYtSTYwpmoVBAAW1GoAYqsbrw1AsjofRKv9vumWtCpASCfkNRwC2PqMmaJGkiQCxmz5qVG",
  "key21": "4mgMeQBWd1mRiGBsQkUBAYRWHtXMbuS2gfa3kcZgX6D2WNRGZJrNWJfZQ7XkTVsMfxCVwcAxztBNAwarkAcyctTg",
  "key22": "28MW2qnD2CsT16m31Tue8S62P6DCrEiXCks7gk6EhEaDU3RMLQVWxcG18sag4VwQDgEZfu5QSgtghACrTjiQbg6u",
  "key23": "3gARJAotmjge1kpN8qQM9xojV3rrhmgmKBMnaKzBFWwLbiPN9dn5EvSSmnqy8QKvQMpzJjMibDgEVwpFWGJZe4Cj",
  "key24": "4LVbJHR1aC5eQsjqMQHhQWM9gMKfJf5SBFGHrpctT8JvXbBtgmxRi7zuZVDmq768BCP23zy37PZryWqLeznaZVE9",
  "key25": "uWkqhtYfu9AQ8T2bYZqH4Pb5c5jAA9zSTmSLfs2SmGaVobo2SBGSQuznKvPAbL7N3zSLfCjqGaKcPb68enxJFt8",
  "key26": "3XW6Brxh2iyGaTzGv4esyoQAzjQdUKNstLDgLVAK2H4FkqV55hjr9YDHf1EVsQMhxCeADYKCgsgYWebsJwUZCjtP",
  "key27": "23Htn4bxY4HaSof4kBW2Tf3GAyyzBXok7MEx2M9rfnoysMscnNWnmtPm8AeEVF3azSkXLU1JC7DAodoFbM9qeX8b",
  "key28": "2tMjdZjFAxSFNQVJPJ8ugB3dPShfoocQSbw5njM1dhEGpxaDiFX1jXgMqAnxpVw29FsSaRBoxN6qrXU8jkN7ekoj",
  "key29": "qXGZjdWW6gFnUUqvUNBGowbztd7fUfY9NdACPxCvoCQw531voyHMXFQoKGXVo5L6C19rM3FQMudjZh63STjWRp1",
  "key30": "r264ZXWyuLwJstF5iPegp5ceRzyw3sdkYHdyVEBJTWx5whsD1a4XdGwSJyLvrmHDz8neyH3pPB3UjZtZYvrxMb2",
  "key31": "22bPnnJgXHpCt7vdXxpCNCt5gPw2cwTUiZG3nUg3WYqMBLtpjUEvCguA3gFe16jVyNF9Jd6FDz1mcEuiKHApWBrC",
  "key32": "4uMgG8BRK93uz86QuChz1Ufu52BY9kjUkDXoTu6XJJ4PK49g22tmwwpqqtgAPizhrQXhQ9BexdXSGWb8UiuvYb2e",
  "key33": "5Qsk9tSaHpMvk6bZ4JAzybuxoErLD2EDJZRPZWhZK746aBCFj4uVwhcBapj6ceiBMckaCDUfhJiUjgGk4MptEmH5",
  "key34": "DX7JoWcYwQYuPN916DD384ikdSS3WNCqR6amAtWDciUsqxwLGo9qKm782zYyaQxLrwjV5bazrZYBUgS1GD7cpbE",
  "key35": "4k5XSaTsHtPcTRc1vmeCeiA8xkiguoLq7kBGVJbC33foe9Dqnr5Qxo47hSLtqkFzfo4GgQkmB4mgkqT2JKPWZNfR",
  "key36": "4gEfPgznvDb4vFc6qGdr4ekAKVNm2eDcLAr2BCivjpBodNTpSjEHAv3SwMjV6TRz3j6ikJoKKeq4r5NBwR8yhdoL",
  "key37": "54R3sPbEFhFTwj8mvVLohXGsnk5S4k3RaeER4gr3bwHQ1rRPq9siZPZEcZcAEKeJuPvRAC3Cp99LNB5cG2fybu89",
  "key38": "2xk98gECBsv12whJXyXiZuQ7E7ViCYgCkxMi5BYn69MZHDHhyw86sGCPWGdC5riVzvETZfDXE2hFsHtFvz7ad4WH",
  "key39": "63QddZMYGMEAGUs4obVFQisLhm9kGdQG9nQAQYDNavsSRruyzVXRWN7mvvJDpLxbPVV4QhWuRyTfMegeYbHB3KbN",
  "key40": "5aiMLQWazYEsgW4VCccVmEstq1ajLxjCqc5hNeFz2qeGLamWxk1hNpAJ9i9FxYKP69293B2urwjKdejQDXFpeDq9",
  "key41": "37E6SG5g3Fjr7CtwJiQ3dkcn2raJCgNAqe49VEr4tGs9xUrnFFhUWjDBhNdYMCGc2md3MX5Xh19TciLevYH5mauu",
  "key42": "2qMKXhjwFy3JTFEhnGvTjXkKu6wHJdBFPupdmfPWC7qjGqmaUbxiDkcSsLJXKvu86tX9Vza5nVTDcns6sHQvH4LH",
  "key43": "59B8k356CoojQHa2qAEw7nEsDi7epVvMiUz19X3ugHTaX7VtzNwGzhbEbJLVSH5qVJ2rtA29q1GVjzbVZB2kgC6p"
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
