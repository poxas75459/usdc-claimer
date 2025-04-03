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
    "27jdmZa5aE5Ay3jdy9oWmw15wp58VidwQVqZGmFT3PqWiPvfuh1B3779Qw8xiDKqr82uXYur2VyqSsUsnfMXzbjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vCufN1qkxULwSMxNZ2VZptWzaA31mF5mU17vunrAM4apR3xqYCiDGbsBjPbyaNjaPz3B4j5p8aAeBZeX4Xjp1jT",
  "key1": "5LV5fMcTM45yKR2YbUqWZ9VdYdVaxwdqokKqt46YWPTaNxYjt6FLUEd4VXTLHRTTLfWCFj1Uu2nbABJ8vcsLprZc",
  "key2": "54d9y8Rjp4MWnLkzDchhnZuBfdxHAPHc3ywSiEJgHa7px74dtC5zvaSywXZKyKU4u7XCbXwAVVqhnTybNuX6g4YN",
  "key3": "2pZiMjH1Z79tkoRuR1pg6WY4to8PbJJLaw6BsdvrBFHXpVoQwLzWUxTn7W3mCKLPnPVkzu1wcVDhNFqXT37XwkUe",
  "key4": "3jWuR2yPQaYPZCo4z1Kg385nqVBLEGWFX87319zYwk68QCd9fyVupfiT5HQFbBMaLzAXsYkG5Eri1DFam7pgxLMC",
  "key5": "WHcsDGLadiMHZaj6WAr9QNHDHJNU5dHXgKGZGe2CVn7v5StZ9dKupgdVBUnmPmAHBFgEfKWu2naA2ZMSwHQFh7z",
  "key6": "24oxbSjaKcC9yLVBTBp4AXz7GrnbXoaXEbFeoaQzvcBJ7nTjWtosHkZAv58Lqrjc3UTmUQbHgyM2u4i3p8PwdKDu",
  "key7": "3c7f1uWoioj3TbDvRk5fEvjM2LCqPDzz9eB6Hkn9UYVaxAPn5nwfw6aNAELzRybqU1RvLtN4ADrje5wHCLh3xS3X",
  "key8": "4pPqRscrcnAAVQevhYakc4VtPRRMFWdBqYqM1BjEdcc9FNP4hWoMZ634pTuZ7QWEB317jxSe84dGBmLLCbwpfm93",
  "key9": "34fdPfSPEPSiJrfQUeBD2azZGaiL12tLUyENfyo2D6LQ1QxsKCfcQMELFeKFZQgqzBLMzZ7NPF4q5eA7reHoX3zU",
  "key10": "5iDrmYpqu6BeMxAN4JuRM29YhydRRaFtcbHrhJ5pkixjwh78RaZQXLvwft5YVzeTuRutG2v9o2HohXUm8FBRMRdj",
  "key11": "2bnLHyPscND2GA6qCX6Mt8mQVW56hMUW1tov3BL6dhoji28SYRQ8rAo4Gmj7jszjLUXhg1ZNBC95Sr4jJHuhQ9TY",
  "key12": "23mMQQAGjhEFBeCjCYfjsHJG4mYMiGjZuGtHVVFREZpcbAvkZFpWiGnRyBzyZpRWat7kxMkhHNPms1QbXWHpzcBe",
  "key13": "2SELT7WmiaLHr4FAeKqcJAD6k5VKV4bjEVVHdu56bP4tj7NRKjotEGWuZGBZFV4DeJtafZ92X8FrNawNbheyxopT",
  "key14": "2jJ3381jB7p5awyBiZYaAG2KCyvXc4AmbvfXwY1n7z15px1kWWM4HvbE6Z7N5tcXcYVMrvwHP5b5DVUcQvFJZJZe",
  "key15": "2iKvr9KQiXfCw19Nga5LEP1x79HyHUpSG2bxYb8jsMrmvXxiarwvaSDYjwm9GHE8uRWztcNXAzTMZxYY5APFVSGg",
  "key16": "3qDccywTFRYZH9RCzAGnaRXow8pM9N99LKUtLi6s2gTRH6j6TCkXGbsGkv8aHuZPQSypYVjbHPXPvf6tiuvp9Cbh",
  "key17": "4KCWn2rDn7gr3gVbuyQHcGX1Rnc8MVfdosaoPu6uB3BRSh9zmGFmYx1aQDTGREnadkG9QytThcg4cmNSdfkXkg6y",
  "key18": "567niz4NqHxE7JNvNge74ikucsLY1tscmWXWs38LQBZfshcaD4z35r2QYbmwvrC5RqyCKthmocFBoJcPsbj9N9hM",
  "key19": "6E23mRP4tvZ7qGtb9hyDCWh7grayzVUTZH41TVSy7hc49Lk9S1Lx5fAGzrHBqE9xnfkjAoPFYqbF5wL9Rogr2gr",
  "key20": "4jzGveGQEKqjVSoBZs6TFvtwpZPbkHqL5VXc9VgNDamkJTCFqdvGY7mTQZJF3rAZnTTHetyKheoAY7QgrnkoZs8N",
  "key21": "5MEzBT5Vt4n6qRJShJmCU1FQy3CtHjh1nrgvjJxyS6RGmQAZTq9gTCmkQk6rbbcMEb9uxSe4EwR7KuB9BfN4NL1t",
  "key22": "2uux18SxPxzRTqEYKMnGLNacPfDNH8bVSQKnjYyGRJfafXrBt9vc9VQym2hahMXbnhcbgMpLKYA6s7cUWZyAQyhQ",
  "key23": "3DMYCP4JGWAb6AWancQB1s9bbfZJNmrYwB2d1JLpJJzakCwZrzgHZUkht3n8jxymtyRvbAJF6r3EaEPytYtVu4y4",
  "key24": "3XMNgm9EUt9WtWpTWHoTy6MbWiZEMExQepiVQV62qSTj9sG926awUoeagf8pA7sDTfofWNxrkZptZi6ezv7ZjvDM",
  "key25": "2NobJxBh58Y4Zgonm2BodhVhN4umj1FFDXWtBHZ2mRHiCyYkeeUXiTaBR4Uz7B36MpUhyB5yp4d7bgnd5zka4Bny",
  "key26": "2ZN1UhqWvpEzGDQ4Bauwz8sUHx6wPfzRXVvduV2AC9khurax7bP6JzNTRgB7KtWABw7rwYXH9bfWaxZgXTEf4KAV",
  "key27": "5vMid2n8WWn5GjszERwkwXa5mK4xBkBeki2TcstCoBx2ZUq8ssktKNuA7h3AQ2jaxwxdU1jTaCyaWUULTP9A2Aez",
  "key28": "2HSWTdbhm1BFf5Swfx7rSDTrhLUE1c3i3xnecNDcMMtjJjVpgyoLdjK9SBJ5Tdi5hkHvBzWBGQ1QzFw4ek1i2NG7",
  "key29": "2JzAoWNoDcstyFHyz329tiN6hRqCdatM5gvD97tqqEfu2FC6ZLD3uAzTrjTipX12aebw6TZVYUW8gJju6fzrfben",
  "key30": "JHYDxYSQ1gh6kT4f5EL5NemMiSot587bybDbSNPNcux6roFztMLTU6L6YTGVCcSJtzJzJNAuZsRC2DXWLZzMZDB",
  "key31": "5iKqW8kFoZMPAHXwV2uTLMHA5Eu7CTGwXeGB5aWMHsVpekGeoqSHM6dg2SmQ3MM936VFACYkMr44PjG7TZQibCpw",
  "key32": "2ypoP9AJ2yEX9mUwZT7ywY5D797rutWvPGodQL8Frq4RF4VbpNfwFef4TwSBq1qoQtR8zEJuJnp2aAfUEiauB8Ff",
  "key33": "4v3vw2pYbhPhL4fkZjKiSab2M6pfb73MnnmvXFTaRKjF5gEes3MgP8KnU2XZYzEKoh5CqXwGbXdGngDjbYKGhHZf",
  "key34": "2rZyaLDQZAhxM1Jqu6t3gJvv2DdHyiiTUdBsyDU2E1NWNBdTKyH8iQtUd32JJQDxTX58Z7JHFrwXumeo1M3gDXWT",
  "key35": "Dzp5fcZg3qycf5rmnVerPPrbEnaPxVMRdtSt5u2tZL9kwL5Wz1XoGGzUsrqHam46bYBcRV2rKCTPyqXTAWBgL8m",
  "key36": "3Jk9TbWYrfwHxLN4g15USTM4ghnwzKjkVRD5e6a4AzYBK54CTsKfQiyaMD9biQwJVqTQXftvppYfjZbRB4ozC456",
  "key37": "4YcN3KdXpKKXxsLtRx7a88tVxBqhbp85yVJ7LzNbuNS2M7vktkrRngFWBiuCWRWGx4B5CKG4NmhUWo2U6BUkRstx",
  "key38": "2tbAFT4xaoHgrDuiQzFo48mbZorahuHFLBxvx3Aeyey3NmoCXXGwruLV8jADWQ6aYtSRuySJMccQ6ctyswKMirHu",
  "key39": "U9Am39M4r8t65feyeBm19iGsP2vBCEA9CuS21xpS3Tiw9m3BbfaseaYLtxZ3dEnWjD3yL63gKfjZCR8Dy8YgpgS",
  "key40": "37Xszfr7HAx7MnHrW62E2pwvQzsNCjCbBPFPhZF9EqSdxmrsAr49X1MMe9PeDqaQk6pcrYqVMF54wkWUTQthgJPK",
  "key41": "2qiM42BE6gSSKhpLwHopEA1CZ2ZcFrdtTrc6AJwAWqtzCSxdtm7czBaDNpcFYMqDehTMUpJTMVxW8Moh94BiEtP2",
  "key42": "YGsrzBneJVH51GZaMtL58XyagnnUq7mkcAXvmu7o3EUWqZBDaW6tNgRsQVpUrHPS8vzzYB7JLAHS2yUJkYAooEZ",
  "key43": "4HmXrkbUrouAYRyxqubeYLyzkuLbaTZ8kvHR663jeeM8z2sRaPNEECwq7wDmoJvhrCRCrSSWEJxq7JsKzwGJAR9K",
  "key44": "5b4ugDPjjrmiNuQqXHUZcZy8exavBJ4298Cocmoi9QqqVCXoU2g7NDsUDpHsjj8ruJHVUZxrpw5cbukbVfLF2sNS",
  "key45": "5SHQPSaErg8b97z7sgem3hCjqzKN6ofa44o5gTwaP6KmNEMk1xV5d7rkC3nGTyRN3PM8dmYGSiejnLwQRUu2uFpq",
  "key46": "4u26jDnrh8rCz5Tyn3w1mWbs7xodATCdi48EJTT2ieAF2SvUU4u17UaJ8E5yrNNxEK2tNs9DPuuiKxb1M9CGQcYw",
  "key47": "2p1ssCNWuTbDaFh7UxQ6B5bWSWn3DVMckRk8jm1ZCpPHTxzhJ9DPDrRy7ZhTcEVChnNnvLxyNTe7poLnuk6VX7HY",
  "key48": "2ehvhPkRFYah58dmxXJ77irXN7bh4tgKDmLFr9jCpRRtRM63vWBKRhv2AvboMqzqurAhhZAJjejqfAYnGeyfRHcJ"
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
