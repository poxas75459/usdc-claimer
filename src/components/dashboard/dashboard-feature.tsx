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
    "4yNBNJWuPw3AqTWqvroy82s274tAtpoDD44hstnEeTqbS7WKfKpgUwfByTKa2s5wZqKqbskbVZbVMD7XckBX5kaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVPxpUiUvtpPUBdLkCmZJXbjDXB8cLe1XG8yenyR3svuPrwYLNjkEkqHSTSqHKrmFuTw4Z4T1BwGrTtVYtfZpWw",
  "key1": "2c55WZyMzNw2fKAEyhsSxdY5G3aM9GRfgabXC8aTFoGPuahtCMou7yKwpniCnjWxcideKH39AoUjVrAuAeMXkWed",
  "key2": "3AJYs5rjAuLSWcFLZEZXLzfCVKjLATVYAx65XZBjm175CSCEoVDHjLVGhAJuiuzrNLcB8pVFJPBEPu1xi3gb3wvz",
  "key3": "7eXQUk8SShSt8LAHRyZrpKJTvrsfU9Ggb5toqfBGkxjgtyzGxrtDSaj5r8BwaGaVV6oA8Z6fN3uaEmQabSpw3ek",
  "key4": "B49zyz6tiqsL3bBxoqnK4oA1JZwsReN1qms3uM5pbo8SKD4zXhJLMWHfqzRNS3RPtufPtvP97XbrAGbnwNod7hD",
  "key5": "2pKWatrtkFnjuHYQirSffXr9NTGTNa9ANVm9t7FHZ5JjguzqaeJsw2kr3NuhSjHvVe65xs9kaEiboaa9uzKFuusQ",
  "key6": "4cqnptWS9RRzwPymePvHDa7jfSWH5Q5SRJETwthACBoFzkJD5teVCwgfRqSNNcroGcFte6soZyk1E7pqTUwvt9Xu",
  "key7": "23YKjg5dZcrLGBe6PCMxYiCVjdVxLBR1umGiDnv794cvZMmUERT3nGxcUfaso7NgfSks8sTsUvWNZU2mzRu5qzPg",
  "key8": "4TpaQvvtvBYNjuUYXu4Afgm9S1Rgso5aauaZX9wKmp8rRBtZrxX3bF8TT4PfcUk486un5WjNbWxZHCD6trYNPegk",
  "key9": "Aq35ACnUE1KaGsmkyreweeoCeqgxEA4M5AiMFX3xaM7L2exDwpiQQ5MfeiLLWwrARXUz1qnEpKqd6c958CPdkP9",
  "key10": "3sR5n4U8wxShK72LHCydxwU1NNfpn93dbx9jKrwHpajYKhn7gT5adqehGbFYWxrNeHiMMbKaaaT3q9BVmvYwPN61",
  "key11": "584P1oRzJeXNVBCkvrXj3G1NUKSQbMQSeta5cMqQEU1NvwYzay7eRkwQsguJHuHtBLYWdsKDvVFzS7Wk3wQBgPhG",
  "key12": "4ekThqnJdkLMU2EMMRp2kPoEjwyUwDaqnC6qkTA4Wjkz9FT4fVkhkYxbrzCsFksXjhoWU3yygLDezvjzZCcGdkDf",
  "key13": "2wUDpLGyRwsYiHmFjAmiBK1LMK3URXoRhaMrD6Waf6vFK8ey5oxiVV1F6oDzhCM4Y4zBq9j2SZhKhMxdks1nJinT",
  "key14": "pHqEBfgprKQGTgXSZPaKFFuB6dWaW7X9pQNrW4EFQv3mks1NP1k4PCXqHSWSnx3eaq649q1aDmbNFJJjSgBmAQG",
  "key15": "4upXnJ6xMndPGXf29aCc7QkrC6ggeqgkc7LUg4ofdoT7Edj3HVn8W7nrAmH62x4698xoAWYUMgtFNfjGgdqjm2VH",
  "key16": "4tXsathou8eYrS7rX9TK3RYUAiqZNLvhXpVp9xn77b4XtthM8RvWpJbJpkHqfaw3ZeTF4XAusSdbH5q62T9fx25Q",
  "key17": "2imvKBsP7NhhEwzkZfCxXyPk2SDWHypwKgnR5CBjhYMmD8mMecyCnKsGoqCkyMumYApSvE15aT3CPNKgEpNw2Y7V",
  "key18": "4KrPLBxe8zgtK2Z82nYyhnVEzVezWe7VbfDW5iJrk72KARHyJYYneeh6DMUZ2bE3ymcg2fGfznWKcJYqMPir2RD5",
  "key19": "3DhUpxamuxReE7acTW7otXiME9J2fiC5QmwKEpfLLKCXRyMnRt1NutCcD6yNVWWbLd92ZcCViyDow3bPnww3D1yU",
  "key20": "4i5tLAuUm7KsBHbSkVxQuizgapLrQc2pd5pkq5V8exrXCNccqeuj9bRtn5URLGdPYWnkeWTcU4EDb8tsZMJunAYn",
  "key21": "2dYek2LqQHToduFBYcaAvQ6SizvqayXZ6TzAbAFAG33AgBsDagVQdYwYFsQ8Pg24AQ7XPiA6fu2yRjwDzNho6CfG",
  "key22": "3KQsTioz9uxEV9V6FkwXydi5rZuTkXtWetMZTWT5LvDsDxRnQ3xV7qw7VXJCzRMJjuyfhZMRmfSgiaczdyQoUzsg",
  "key23": "2mynCHWCZzXQtDo6zp3ewKiavjbhiiERJhDc4mQG99YZkGRHoPW24ZaNBLZ4jkP7L3RMGcP4CKqT2y9f6pPYPF5f",
  "key24": "YYn4CWJY2cbpGezgSEneK3KQEX55M6eFMmeb1SWjfPULv7YGre2FTyffT1MtxmrpF96fdMBeSknC9Xag7etUmsQ",
  "key25": "47ex4NDnUQRCDRQLRwDM1bfUW5Jvq74izdUvds7vEdHwzc5xZRrA1u84ErfPoiVqAwSV9jy7B8i48RiB1exwmB8G",
  "key26": "4BMHWoRLEqjEtk1sDZGZPBzfDYtqGKabKZoSPWCZ8YdE9DeCLozjSG4ejQSmmjeM49Qbnqq7SvyuhGE9htw8X2hE",
  "key27": "5CEBq9C1MrGvYUiVbaCrnhcefe8kA4ZNidnTg37gFCCqyAZYEaR4kX5q8ZgSXnjdoJQGS5zd18t9PhTaqmF9JB13",
  "key28": "JwHAFDzy2zEyEo7P634yrQXw2caouZotGcNn4QB1vxdzbDUfypPCtHMiEU3om1TZhJQxbK3GJu1gd7Pk9TMJxSF",
  "key29": "2Zv7a6uxmeoqS9xcGPzV7sSQaLzvN5nAjaVkoyHeKD3CxWYqoFEJ46QdW7Bqyp1AzPxmWBcHnqFwHSuMKzqfAUP",
  "key30": "5Gr2WSjc8Ciehag73STFyk19CW5ndWRJ2vf1AvXyKPKj3fJhjKbLxr6vpH54UFhTU9kcUYZydpjFrgnbjFhkE7hQ",
  "key31": "2WcLMF4dgSxjDjgVTccws7TmRxc1oFpMEbW1mDdYu4WEEjtMKiwk3QGxuQyhy2C4z38e8xdJqJ3J9qogMy2eH19h",
  "key32": "2iqmdFir9Je57A2qdkx28vDWipDKvP2iTt8rjQzUYSCn5Lag4YQ41BpBiXKaAwfk8xZRB7bgZMdV9GVxJdc8hQSP",
  "key33": "3GSufr92AmRLyTBmH1vdFkeGfNzLMjAgz9zC2guhfduq4SVHnLWwBHSCAM19s73F7d88raMpVg1XqiMh5fYmfjLX",
  "key34": "WMzA4yPrQBbh86VMuPcq6SQPVvCDhm7hujfobXeCciDD5vwzA9NFU6Ts45LzQhNYmXdtn6qBuuP1mPF5pbwV7Qz",
  "key35": "5yxMuA5iEK6knz4FeY6T87myaGF5ZSU9NLAkHKEC5hw3cBFGG6DxkHWoku19PkCK42jGUw3T85XY7tNZPdc1a5JM",
  "key36": "2qxLtvHfShzfTLATRVPnkYAbtBhYPeco3s7xafkA5TbxsAfm8QkFmhEC9drcQR2SdpyQQ2wh2tsMVtbcexfjFwaY",
  "key37": "4FEBHXPS4aotjfy6xyhP8vjis6i5ubZH1nvdF3o4Tn1hd8dSDZSj8wq4VEWYU3WesgmhXGDGG1WFWbirujWD2R1D",
  "key38": "28YQveKS8dviUrnX8V13UAmJJ34NhH5C6YvX1FNZYphML3XA1Vo4XgZDrvH3qzSsnpPEwvh2CwvCW27BhdCuukbp",
  "key39": "5MMJwGaAYgSMiFTQZ5GekiqgEBrKSRzT3pzAqzFprtGjUc1EhYh1T5psyQRdpCvKEZeyfg8eAcPjVURH6f7dfgAU"
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
