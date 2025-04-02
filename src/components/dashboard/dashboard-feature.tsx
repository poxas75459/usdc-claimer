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
    "4tGNKbfNt4etNVT2Ux4abK6JYHgP98PDLtGdsFAieZzvDnTNoFsP1N4s5dZamA3xEggehRFj5LRihUqiPGdUveBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2khyDtkLpWL9WmsGMTQjiLfgX1LAtB6nssm7znw2GAtKf5rctgshPGgZxg227gkdc2sfybk51hnUz4CyW3PniD57",
  "key1": "4BmWY1FZsy6bSgr4H34fRoMq69SqLPg3wJLC9oKCvUZsu8x9fcQKB1gYdQgPwphJ9RrnXQfebGTJYg4HaDLcArwW",
  "key2": "3QUP8GtLEiuupAtFxVkXqmi87Ep4cpztntSPqaFmyJWFursGCuL9Mji6aU7eesRY49GXWC7eDqCyWH9PRVzyEyPY",
  "key3": "56CjNPJtosPV1FWd7R82Jfw5LdS6JTy7wFSzwDXVP8fFaPcmPUM5vxqPePqD9ahXodEBfirUPAMw1niK7sDVpu9J",
  "key4": "4nQdGgLaVeTN8g7U5gEqmUfbaNhyfjrhYLZyFnJyjoUYXrKFBAogcA5tR2z7aHDmZkcQDhLVnLSUeHDmdU9ZXzGD",
  "key5": "5XGesTgkeC1Ar6hYFZX9NPWoK5aKzbvdQXQLpJ7B1a4YKidBUK3Epg5tmtLtAqGeAkpTfAwY7ueVq8cVLmdRt7SX",
  "key6": "2nkh7RKL7Gh7gH39os4g2Rnd4dEq3ZG1DxB6wm2zQ8BWURxSZA7hmbDkW3UxT4yaMsPx6TwzcCQzhadUv6iJhSBs",
  "key7": "2YHcRtdobLhs2XBLtshA5UYKVZb2aR7q1EgVbuUwsEHdPSQcffVRHWKrE2remNfCuBBZDJ9dBZkN5oYbgR8w8rB3",
  "key8": "3FBMqwcDJxFQ43EvRZtpzcMv3wU73grPdJFsXfTucxgQgUYAkpjwPFq8AUrnGA1qudkuhKsR7q2jfcWtHEtNyvjR",
  "key9": "4Tr412ogoWz7jfj7zDpgWdA8woEf7ZinnKTRBXFYdWUizjbHK7WCd4S6k1ycuj4ZC7UMGkZwZZHQD3kWAUjrMUCg",
  "key10": "4N4CitxobB5fcyHg5V4fSJDpDvqY3yMFGMPg5qQsynTNNA1aiApa3ERqAGQZJ94hexQyv9sG4NNaRAxmNa6WsHkR",
  "key11": "U8ppJZv34yr3Vk1XTkgZQdfN99FQP7tgy5XHuurmbUTRLszWrKdCvCvnMMGCEMh8aCoGvMSmD8iwCRYQvvb2Xcz",
  "key12": "5izj1XzKNQc2TeqFNLUSNp2ccG2PmmNuQ9FSijJkesuMmZxkXWEet4MCfA3AXyB2BvkaXBssPLu3fzvX4RwbcfFt",
  "key13": "4AAXER2D3gTY7aFxjEH57VjntsEFPG648kDpjs6pfQnLQRm3aqu1HfNfG58BS5NVwopvZddJnBC7oSXTwbsDA4rc",
  "key14": "2qRFehnsqX2Q4hvjxJKcomwf3Sd5MNcNyt25Rd3o46GypQyLzmNKf64XgGHhmBbPuFeDctTkVRKDUu5hcW4Wzrkp",
  "key15": "3FtixWoW2fqyXj4EaJzxeMNoQyBQdw8tmsy318fJBRRZK9KjcufR8ECEP4H6Dn6hrRrCAb1xNLvJCEBP3BaRRMeD",
  "key16": "4hNr4Ss1WFBmrZ45PhknXB5Hmn8R7H7UyMXjLUD1BErAALMBmnhSH4qFPUH8KyGj41HzBWecysjz1fPwkHQaxGAX",
  "key17": "39N7rdVXi6mtsVhgTeKQGsVdDbP1jUApQK9c6ymzpPcCP4A5FXifpn4c3fhZogcuEypFbzHw8pSg3LnW91RM1aoJ",
  "key18": "51u1ne6FMEMcnqG9U3z3ZD4syFFQWcRoEFBo7H55p6HyXDy2cYaDVA3pZTtrCL8Wgwsb8xgbQ87jHxrZn4ySkiQE",
  "key19": "24Bq1fxsfAHid9esv229onqnBwni2cu5fApXZZNr8p5aJxA7ywrqwqdYkWYkqT4V73SJRkVY9cJoHHNy6exKQ9mM",
  "key20": "2MYKFZpayYBCkLvqE83VTqN3wYHpwvvw1Xdoy99mXx351cs4EUfDBv6DgvrXKf6UTLNk9k1HppPH87VZMqko1Tm3",
  "key21": "EvS1fYrHF9NzCLrmb2YaJFzY2CdXQAsZFMvTj7RRVPPgEtTqiDXWxtYQaVYEZEcQ8W1ekKaEbkjDQAR39218upf",
  "key22": "4hVBFLWUC8Rj7ttSu8ayCztUUTMwTSMmpoKRrwUU7fpGukNj4fQYBTFEq3xqP7s6pKz45MuTHfBsDaDxTguZFCiH",
  "key23": "5vf6uJLeAkh5wb8vabDYaWrwNjSNKHSD25MYL4K9iR5p6fGW7pVffiA1wUCKrE4Eh9opFyyrsbNzVyrZDF6eHRK5",
  "key24": "4MVYywEXvjJ5AMUDrcdU1zy9EhT2Wu8yMqfEBtsWfnJxp19AgiueUrrVCgUpu2pJ58KdgBU3b5uwYw8usw9XsdaU",
  "key25": "3F3WedRb2jMnQigbmA6jAozL9vuJgsDeZooVqAU7ttrrjeH1Ht2BxnRMgBQuby6SBG4yRdDkX85ux2QaLUuBRjXv",
  "key26": "pePVooEUcQMRNWsBujbvZckGhjGN2rwbochjruzxrApec8CAcDJKPyH7NzSD5pHvyKkpDft74iVsuZEZXsgFAA2",
  "key27": "3v42SdFRcR1WbWPjdbJF5TgzgNsxFPiFydVFSXUwX363AiyjyFRHGQJULuR2e5k1sRgNe6rHZEEEa46WitDJGxgp",
  "key28": "5277wbNo4DbVeiBAxwqhhtgmLCbTxhFCjRMAM7wr8HMtCdXPEiCet9ddPz68zPkvB1c5a15BCB6RrVNcRf2eHRQV",
  "key29": "5SiESRyE68EkPDQodqLP5QcHoNwnemfiNY6PmJ381C4FteeTFtT7QaHNtkK3oA1tSWDPsQSqNApcUwBgGfaSP5c5",
  "key30": "2e2FcMK6UCVF8atASazchvFr8TtwhrYiL93RHFjExJp38eVbDfZZTcM46RvNQK3AEea4nMrZE3keiCcBjcsXiRFq",
  "key31": "foUNrkGCnxdyxwQ326sKeso8up9e6yJK664uBvYWncYizMz4rG6hRqQMvEoRbyfLFSPJN4LJRAkMcuiEhGXU2FX",
  "key32": "2oqPSExNsMKGYa5j2ZwMwnokMpCacZiRkpaTkFxPhEexyxkNrrKkCMmFKMaA67cYE1EpjyEJZHohDTK9tWaT52Fq",
  "key33": "UG2kVe4hPH9xLNbojTsaPsM9WBs9JefWxZPXvzYBWNafBD6mzCSriBwbC7rmwj2DfGAEFqka7yKtELzriE99KqF",
  "key34": "2qzbRK3b4LYLkJX6ssdAmDRaNavPgY5fvgmGwr2urY4GaAbpbPsTfHRBvHybq44rvYuwGmQgB2DhMTpMfELpcgaE",
  "key35": "2wNPUYbcKZDtjVtpS92PVTWJFvQLJWWuyqatgn2LmEFNDB9am2Ld3eszEsdQNmMbmKc39cgzWgCfow6Zep6G1VVD",
  "key36": "63SwbcErCHYTcteSdpPKhEAskcFL87PQnmmbF7ojn3oTjyLyAnwY2YYQTgQX3gnm9ZJKV15VfvH7bWgABfZtQtx3",
  "key37": "5U89QUqUD27U7UnZr1LJo9zZZkjwYB8K5BbcG3LWdafCwk8okx5vZpszAyARAvZa6P2F2Vk6zfy3XWDR99xokXoB",
  "key38": "3uV26o7xksC37C1zqu1LyLnC9Qov8tjKJiC1hQa4MiPghDGALsDoStNyU7WgQ39Xju9JKALFkE6zyZySS2nWV3gB",
  "key39": "uPiiVEcpMzZ74f5Gb59SdPixUdxqKpQQv7UCuT9ZHSnDefjqmuoivZ6QGLdaKY6yDqfDvqmvRXNhBanjnJQmF6k",
  "key40": "5ogQz94TGQ9oP2FfqoEFHTsTLQBoKwaSpLA4WCTBnMP3RgZHDNZkZe1Z6StVGpgNxULdTnhDAJxdzhT65yMvNbvK",
  "key41": "47EMUVARBBLMkbPupKXiVQvPLoRv5M1hDSPG3NpL2HTeTbYv46oynuoVJ51ckjtV9R1tGvXqC1EHJaQnYzCXbrfK",
  "key42": "2Bjzv83Jew6bUPwQKhqLWh9Y7Q86ySLitLT1NybTMTERazhJHk4DTf5ucELfrG2ndgTQPnqynkPrJCdzZ1swppew",
  "key43": "CdEk6eqfWMkJQcDTGMSYkSBzjr2HgdikTwecorjqeT4GQxMA8pMshsM5BSRYB2JeoGtxdLhVCK8Gd3CUhPifDBY",
  "key44": "536XdMhEQdP2r2qyybZ5vkUBGh1KTSrRBcVRMvbqUpThWvG4oE9fkdCJWmwrdBKnmHxEC3jmrQbgVskVA9mmUWcG"
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
