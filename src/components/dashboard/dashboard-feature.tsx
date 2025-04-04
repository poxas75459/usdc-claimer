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
    "3fb24vL7XseuNSRKobX7vcRjC1C9VNE4rvoTuqg9wmdc2zg17mjNaCSuSQDqUax4aN1tzVMsUSLZy16qjyFMLTKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUYg5QFamnaRQApjy4mSeyXHQxivW9iR6ux5YEQdPUMsyoaKGJnMbdGBeFMijPdA5gF5d8ZCf5ri7ozzbGFqbuv",
  "key1": "46pTcRgaazxkHNgA6NmSHNu4dqaPG7qpeRc64hSZRXewiuGbxqshsmVHzQLTudxrERKBujbDPdsthyPAchteaswT",
  "key2": "5wi6bmfj24o27skov7LajzEtQp398eifd1q2VNvdmjMa1ymoQenAtLhBxWnsAbmmoJ7jhFRBXw5SFoE9NVci4eKH",
  "key3": "36WtyiwpazYjugfMTQhrKpmPdDTmMDot2xfTJfsYksR6cTudpBKsqJqNZKRUCq7GEFtwAfysp3k7stJBzeGMMfqE",
  "key4": "8KwM4WDxtUmFWT299r82nrMs58N1w5egudfgJ6K9GfNVUyRoeoCyNmcrkzDULaowUgARxsZbkD6V3r2s6UEAqCa",
  "key5": "iurw8Yw8iGEWzJ9hx8TeK8fNcZoHbaUKTW2KoAPvxkb6QKGLTTkvNo4yU5LmyzZGokrpyNEB8UkwSUXchDhREqq",
  "key6": "5zEcA66NkQVwsgyz8N9EZsXbjYKpcyhbWjoFJRAoPS8UserbrhBL3AAoqXC3vagPcJmvxifTiwLkTdToesc5epZG",
  "key7": "379WEGgZdqmD76DBrWEE3EMVWu8zvJJySq8KRwL7bSbkxvTX16qRq7pXHzvmW6YYjVkt86mtn9aGJd6ZKWUdZpU",
  "key8": "5K2DLsjyesGa6EQXoqWCnzPgTaQZ2NGypfHk2Duvh1gnYYXN4WJ3Xwyn8H76YmFErw6wh1knaYBBhuge957Szpvx",
  "key9": "eK1DV4V1X4UfyVX5mgH962W7PCsUXgSrWx9AadrB8bZzWbETrAQoXQWgRu77Czr6kDg5yPFPtCRXBV4M5UtMv8Q",
  "key10": "2KztKDQTtyZPVwapbmSBq6v87iWFzgrwwwFLeiogBfMrVKtwuuN9wjrZvR8pPy6gJhm6TEEoDJ1ayYMiUNr1Tww7",
  "key11": "5ZZdsjeX4F4ZUtkirADf4cGNTuikAYY4M6nBtB3xBb9oB1YZh5Noy1ogJKrRxACABvnpHk87KmWM3tzzHAUgx9DE",
  "key12": "FR3KDsUbD3LRogm627i1zPfG89U4YnbQj1rbw3htUW7FaU4Q2KRsTqNMd2NSjTqJagou7odsZ2nMT8c8ViSCcYQ",
  "key13": "tjSZQNgd4pfvGPVYGh5uQ61QAFLCuvG4aSCfJoKEVfYzgdLiH6MBQgov979yJMiawEHar9NFNAPpXnoZ1Cb2ScS",
  "key14": "3nn3JyQmqTP1DWho7HucMsWGzCB12njQwQLmJAWNP5P7k3CVypMEcQwrpwSKweLhqQdD875zCGNaV39abdfwkhnN",
  "key15": "2eqdxVTEBH85KRx2KSEfgpQ9SiU45bktC4V9McRCEGwnfyPinqSHFRP3RPgEFjPC95MdLfQ3bHudgmREokysftvw",
  "key16": "2iU771M97atTijQdk1a5VXgyymFijjBNS1CtzobSbPQiiV99BHyCKHSpaeX2ThntPtQwj9rECueig4y2hUHgfqBb",
  "key17": "D9H3toMcCtritsSibMr2frqg8xRy1iZjrmHcxomPiXK9mz6PESb7BSMt3bbdaXivgAcZ7LWwJPGxnjxTw4jT4Ac",
  "key18": "riK3a33ufUwPBM9WuZnCoZbDyGQk7RQEmReugEc4KsNb9UtqXfPxknW2Eqft7Lqh1SgLUxF1nPR45CYjtKFLSK5",
  "key19": "hB9q3PxBgmHfGBC8k4jwBnSjReXHoyVou5fy7iudRD5qswHAFW7SFRkqAvASwzMnUUadhv8QKCD46SxTkgtsTgy",
  "key20": "2Ura4bkc1HZ8CeSrm9Gvo7V3bnZsS3gGYdVhKQVjgdmanYJ9eBUJGYp57YMYsmogfCeLKT7tJN7i1jQ9DTM2VnEP",
  "key21": "46t7CHVQdU2QagmA8faRWbX22GZW4eUs8zRUPs5m4xaTLsPhUyN2fzxkVRwZVvvg1QrZ1PydUK8gsiSJY7qmcEnv",
  "key22": "54RwscmR21uiUH4Dd3oz2NTpFLhv2uDqrJwaAdEqNKCCZ1fKFv7GcdCT2LA3gkaSbJL8jUtDwSNEGcPjoFyLfnA6",
  "key23": "472fQQS7vB5arJzLMLB7a7yrRUeaxEeG1NPvCdhhNk4XYAhNiTmsP3RcmW638NfRQbGk7m1EKLw8ET4JroAqDn9x",
  "key24": "4ZjGB9uDckMeSCix46z19mpEUXRn4R8ZzgC784ypEvr1CGLn4HbKKZrDd3o5uP7ZHHW7wiXLL2Ek1v6oncMmY8Ex",
  "key25": "5zYvNX6yzQrrvnKD4TwEgkr5WDmqrKUgtNmRj3NCRyJkCZzx8Vm1NPvH6txLHPLUGb1QATGDdNCiLn4JH6JAeFhw",
  "key26": "3oiZtKo6M7Qnh2xwwZL6jaBoF7tgtxE6wLPdBy4dZ2vfZjRnELCXjmXggWg7hwJWGm1q8nDWfx4XhTyaoYVMhrWm",
  "key27": "3p9g4H76P8iKfdpg1rJHjsAH93rnC9CgkSK7RBAPtgtYVjs6uQPV9hdhfwGC3DJ5CXfuSW6LqE9Mnn9g8u8oSbeQ",
  "key28": "KxBNXmQV6t6khdNGdeAue5s2WYfFNX9mw7BV46Jqu2Y1jC4wvWX4xvLs2fEu8HYCVtSBtGyJWuxzT22CJPzzU6S",
  "key29": "2k3yFPkCYTxvdtAi92hunwMoEWr9fvRfxFxMVPij1v5fbhS7Ws4EyGrVaNUPekL8q2u3L35QSeQDjWm6gE5uNfNr",
  "key30": "5KiL1gJstrf7LyYJ8qugFPooknX8h1iqtDQAqAWLZs5ojpxFj4WMNAJgpSvDtDsp31Lb3k1QcCogLtCssBVsHZqD",
  "key31": "4Cnk7EuA8TyBfxREewiUUtrAgVMNpC2UWDvFMNJ9vdLkrGuZANKN4Rs9kWZ76FAtRJUDpz6fBGquYZbikz6wR2Q",
  "key32": "5GmgH2kfoTdZrW5kYE1CqMDLTYxjcgEdFbmjj4ESWYinbiYrYxE5UiG16Q4yEi2bdDDtQQ6BnzqLtBCy5WAWRDNg",
  "key33": "5m37W6nWFU3KdtG2ZmMXkWRdWLyJT1341vfeNJD79xdsnbYSxke8snxuJusFkGwCqfsW8oEF2nRMgaQkQtiTiaqL",
  "key34": "61uZueu2RgnQfo1oLDYTmAN6oPjS1X3kRZTB9hA34YvGetKS1vqhFCfzykiiR3FJYi9WANEtaaZ2sVNhmdYwN9tk",
  "key35": "3KjgPmkYn4PP8trCrWJG6L5v4grSGWgPkaqBjkCL4yU58McEGkZEPbSsnniyvjtRHYBCbrCUDdfqWE7r4vkUq3yD",
  "key36": "4x82BZKgLiWqMcH5JQhX4Kf3c9eD9jEfFyKMzCPrbS1ZCXcNKQAEXaTfiPBRkywrYs2poJs1CHkJXuTCe25crLEb",
  "key37": "5gW4R3umSDWUDFLfebMSwtT9dMu7Kvd321DmEtty2Gu4bjYRua6faVGTHNcPa6XurRvBoM4quNDaXRnS67toBgtJ"
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
