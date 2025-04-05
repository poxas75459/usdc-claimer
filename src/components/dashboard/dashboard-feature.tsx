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
    "23aCzttMn62tTEW7gn3NnjFDwKvc6bS5RkgwWhgYNvpJ9AGRrVgBCSY2c37mfKfLgX5hPcXp7de4LFKrMa4AdXSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vP9wY2QxNGRHyHVjBb18HumEvgt9WqRoiqxAbFLQkZHzEPiRb3WhQaDYJbL6CJFBsXG38PvnMgwQSwSs2xD1Qbo",
  "key1": "3AgBRz36o1F1U6LdP556Nu1USVPs3dke6ss2yiq7ijDu4dKitp5LKB8AVtAjLGMYbbKJ6hTEDup8gPtH5WafuBSe",
  "key2": "5mqQuvkRAcntKPf5BdkT8EU5RVa2YrgA9PjcL2Jud7FtYc6PFZTXY12R752YqmTXMFsTDoxGN45UCvCXeu4LvuMW",
  "key3": "3ofQmUAd5Tjm1KpL9fYAhEJNWtT8hY7onqmJhadk8p4AWA4tGhgVuteQ8TR3Bo4BUSMfBJNyai344Vo8Yzx9tXiL",
  "key4": "5KhATVXSEHaUjb7iXBzFA7y5q8su51SLJowzacqx2FTHuZevsRyHR8UvGJMkAEPnKoNbhNnhnLAcD5frDhYoJdhf",
  "key5": "34M5cUCaorTwD1kYBMpwoSH2jMNzL8jVTzEu444U2VCkhi1ae2objFNkvTDvSQGy6crmgWzY4npgtrLU1b4PDk6G",
  "key6": "4ZK78GATQKqQBRu1awUA8nT6npJ9Utc92hjKrHnu2pz4c6Sxqpyk9MKGH1r9mEoZdZ7oK3fHoihS29rH7odmh54F",
  "key7": "2UDzgTaWDmFHp4xJruPYkBVG4GcSfUxPsQKLS8qoQUtPKqMCgi54Rd4DNR4Nsvhu9mAiCzKEDm8DbW1dqjziyzfx",
  "key8": "5ajRExgngzY2jBTNKfnceit3TmmCvzxKaN5RydPTVR7uRQRNik7xzHpZ5f4k7fJgrofBftTnrDk21zE8keqeAxvY",
  "key9": "3cFSTqwxtjQB5vf4ZWPjUzaL4v1BDXFZDQBXtqDzUw2KqNkL9DK2XXzFqyJqBBECjretgpbE2NixwAVhH9adTdvM",
  "key10": "5tLbemsv96zhcA4WJeHPrbVpYWu8pjS4MvuysaF7QXvUcQsfKK9yHgQr3n1qj9vhzmLfpAsftpqvZ6Adcb3UXiaK",
  "key11": "32rwCHYAT8oSYVXgfo9E4eF9uFaYcHwUYy3tB4SkciNrccF7RUcQARk6iWpWRUhN9jww4xH73M8PpY1392BHce2b",
  "key12": "5TLPwkCP2x83i4JtarQAxyUuFqCwyU6ba2EKNMU8Y3oQb5ZFjntsoVvAJ1M692AFJ9ja5oV89eWbFBKi9HqUYxp3",
  "key13": "3EpRPRkcFyuD3ALpd8e1WsfoRKLEpcHtxgwNp8ZeLDRTRaFXAW8MqSpKnMz9D7HSTjtxMCVt7LRcEK7AuMumh6qZ",
  "key14": "5EcgS2pT4cAWg7YY4hYJ31y4opbmaYz5g4DiP6DfRx3s4wUnyJwM8sorhVFKcRkcvLpEjsXNvY9zPWV2RvMR3dYg",
  "key15": "5mFYFYUzJsSYAKiDAKRjq1kszYzJ14j3pg3Kgmw3ENX8uKLXajLCYHCDcQmadsLdTC5PZKM4hNu2mFAW9n4EXAgK",
  "key16": "5q7fVYmfF6pmhb14c5LzKBsbMazTH1b85keLa5iqBBvNuUWCsYKma3ivX2gFuf5MgepFR86bhp2amMbatTFjBVaH",
  "key17": "5PMPjaaazvu41e8whNXQCY29sbE7DZR7r6DuHbDycwS4Ap4NfDHhguo5kGRQiHzFi7i44cSyfCp3ub2kBFmKYL8c",
  "key18": "5Rb3HAMkzhQegtEpKU7cvUA5JdpB8whF2xDNWZW8nqBg2g8RWCpEn6psc4f7BFHXwENzNwtVPcQpCRGyuxAv2Qcs",
  "key19": "2eEtRkwDLN9eeAmFnazgg2fM82dvQ15uLxsDvxeDDRi9n55yn5sN3x3UxoewMPJcH7rXYoMr6LorhtBCkjdL4GZF",
  "key20": "2qN1Ypm4TNFx9sM3CXkGvpkk9cyGagbuyCvwnFvD5CU1t4FDPyfCZDeeCU954wruXnkNofEEmU5t3nTEY2ZJcta5",
  "key21": "2EFf3vrtLgPTBXWVD9rjYiVx37dJ1RJ8dXWqvyLC7WZ9wpj4xVzeGc5m5EXnUiDJC5yfLZmtzTKWc8XjeW2J4TmB",
  "key22": "5XrybzMYwKrgw8k5X54XLVafkovseMEDpN7djwyq6cBTgBq6NeQLaWZJfJ5oyvGPm6ehF1FJXPELgSHdZ4y89Eqr",
  "key23": "2kjaYWGw8FGSNXm4A9N9Nd4BguSL6kgUgT7LfDzjbk1uxyEzok6G9AQUNgCBTYfZ7A3PUn93kdRxchsLe4niy3xK",
  "key24": "3qWgWtjUJvcZJDXGvQNY4hjdvHbCxSvm9uBqgoE4p5PbGLZbxaxGSwn3yCMtTLgw1DKKii7DvF6RpF2zG6Hd5XPL",
  "key25": "2hjkCvBjbcNF7EDxWreHsKUwutZq4vog9kaCeS8zZ5hWFP6duc3iMWZ4MD8kJdV1BWwPLN1yYn5bBpcdU5sgiW5p",
  "key26": "31pR8RquR7UYW4nJCAhrJuZJBKcbGP1dnBdNZ5xwF4D1iW2AHqgbREDp8WnWaYzE6h3DcF6VsEZZWoeSYA1pDUwe",
  "key27": "4hAVJujcf8pmv1UcmNYYF5txTyAQWckB4YxZR9XXV1dC7YbhXf399Q1isJhJXYbYnmApAt3Dp5h1xrGyhcoWYJoG",
  "key28": "5aroXB8ZhJANbvpAaLeuDTVmMKkjJAwooemjseEQaGKLWw4nuerG5hpnvgRYGBaYEqwDBiX3VsQb6QMYL9XG9iM4",
  "key29": "2wgSzJbrupj5iSbzgqDRgoKExho4QD5AMzEDAxmgUFfwmtTpxuUgJJ5G2vRdY5qYhixM1r7dqiqZbh42kKynfagf",
  "key30": "3nSA22gajsDhvRF9GN2Ls3ALnrZd5FgSB757iGNw2xKSAAyWnNrc73tBAW278cfPHTqtxo8gSjLdmvbtH29413US",
  "key31": "5F6JbSMfZmFCq5UWRsTd8ZJEkWAKBvtoeuhV7Ze3WLsdMtRSWrs95B8XEAdSyT1E9J2RUUxUSS3oZTbM5m8fUZPs",
  "key32": "2jWjHtNRNi5dYFcQxgU1hNG5TH7KKosVg333nTmEn7TPpgdLVzfFHeMCjzC7xgcRjchY3j3W85nNBdto2HNxXjFo",
  "key33": "iy5fy1pif4B2XHDZg1WYvUp8UyDZ4MaQ7Tfn9y2JY27z6zKeQXAtmNXcmwVw2uuvggHA6mvQs4XHiLy2DA6yNSE",
  "key34": "52uk8VUCRT3dzrHbCWwHgzK3NyrrkieWbspeq5eTr52SR7TaA3UQ1szqoLd4Dy6DhdSyqFMBbA3Co8htFWH9vPFq",
  "key35": "3Etq2WXuJcN4FxuQaVoBt7KiAr9msWvmGuetniMtG7PwrcjgM6Y9CaCmF9oNRChD8ysfHfNogh8yrps5zpod5Ry4",
  "key36": "z4GfQwbDUVPc7UCSxSu73xhaGCoe8uXWWQG3mF4UT3aB5F6Tc3AJjtJbW8q18HSx8tQQbVzgoviEZyDwcWwJA92"
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
