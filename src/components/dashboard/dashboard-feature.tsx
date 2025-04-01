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
    "2XSgpv2kw2reZnWUV9BNf1nuMncdzJEMWkfnPwSQy2w4puy3jxWRdmjp4bSPE7BcFSyy91LWtpZ6QvVJFbDdwe37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnfjZv6uKmMRchRWP1V377s1VxoJDP1iHa7dFoMyodWPBwifocC5XfrvTCcSigCZtuDSsvXHtF9StzqFooZXj5W",
  "key1": "5ySyRPaoE4gZcT99wyHSAvpZ1zmVn1fBRUKhJrHcmWLEPGTzxDAXau4eJ3wtNizJjpVZktJZW9Fipm8P5RfQhV6q",
  "key2": "2qfuMQuzKufC2oZSZf74vtx1g8ViSCXDjzXvyfsmHVuUhC2bb47X5MThnNeuhED6Li7EmyXN8qrKSNt4WeD3nU4j",
  "key3": "63PwEMhHLg4rkpv7sTtpXLcEzPL5knwg3oHZhqFX91Sqcr922nvbpZmFuy3oxHAp4PkabpWd1UKpsfoJqYyesktD",
  "key4": "2gekHDeAf2fTuE4Zah4p5pkesiWhYFpyppfg6PgQoaKXNwSvozeirutmBt5yAKG7odqCiNkvzFoZXCZxGCxNiJMD",
  "key5": "Kb1k6RcnBG7e34otqegPxnE8VNqoSmSc4m5N7Qf6j8L3C42CSavq9BKxh6geiejs39Ht3XxCxA4xPj4nNAk5X95",
  "key6": "5ygJjGxVShmCtkQkPY8x2PWdzZdezhHALJDg3R3kZSRuMTmP31n523hqc6X3uLqJVfNWceVJrMy3D4X5o2FitcmD",
  "key7": "49M3dmLcdtEnYhE8xKnRmy6YEZstH2cTCmfNiKEBiDND7msrHh5CLzuVDFbMoHez3BDRBx8U7Lkx1cUQb4mimaeD",
  "key8": "2L1AxEexchNjXgGEzzCbKrCr6gptANSidX435sYP9dX3xu2ZTUYsZ741L3nGXsWMMWr6H9xZ1N21HHJdKur9FX3Z",
  "key9": "spWBEvu1ipdF4o9SjThQnteUgHXECC1tUqysZaQBZvFxzaby2XQc5XHGdt4XuYLXF7tjD4auXx25kJSh85JWQxG",
  "key10": "2GzbpryzZMYyUM4xt5VtYr9fPHtvq5uzuvCtEBqjnFKrepRwNhgGJxRWhXCyFx9X4oVBwsuquRAfo6mkJ7qaWUip",
  "key11": "5TxBLfjrrXhRJrNjkN876YoiF6XS3h9ogB1kDpXWzDK7fzTgzBAd53nwwpAMKDSFQamd2JT3KvTdarDL7yUaXsRb",
  "key12": "2XzW8ePNkikMpBK1kmL9SEaNeHAcsq4XAi1Sf2k8zmcTKBYr6J2yET3Bif5JTfGNbXEr62rRJjYT8rixE52yLerA",
  "key13": "36PLnr1ac6WbWwbrLwTqmqZyvC6sCVHxWgCzmgNiMYBNMwWq1qUr6aZWr7US4GLGQ45BBvkiE1uULg1HH5KZs16q",
  "key14": "5pH91T2BGDPezcZpvaqMcPGKwMLazgq2XgQGjk3QzFnXCHMnRhT2LgzRkvC1zAY6m874cX777ZTa96RQem8ZYdVm",
  "key15": "33f7BybFri5svtKUGporXo3xzYMk918Tf311VfbY8mxNRD7sFXK2RKisC1trr15r4BdQMuemCBu4q5itzFsnEMSC",
  "key16": "DZcP9obVVtyUkqEP3wEMTNbbNyho1BFB4Mc5qSCDcbJXmTrMhxEFBrhuFm3KVDzJPdz1BaeaiVYLSdeVp5f1Hnr",
  "key17": "2KbjnDkpBMqRJTKeFgYZPA2xVsPJFUTEkrumxTZ5VCmfzQHf1Uo1Fa8m6dSgDPCreD7nBGGqYPV31PcLD4HSKdVm",
  "key18": "4t1noqtifsQJ6HLrm2t1eEpErmJsMiaCyyDQh3NYBA61cN85AvvC7cyEusqf6mXLASxPNyfZDKL5pVXd99jtyRkC",
  "key19": "g41WYbsj2LtvH4MqbCzyTkwgN7ighLQfZASHWN79vMe1PAc38dvZk13FEBLCPnYjxiaKgEF6S5PgBh5byySUnSV",
  "key20": "2dHNZbvuE7XfHvhiojeuefWPWwWah4o34A9Gs1ZHG5DAR4ZkWh3pM3msQL5pxekMuKScLoov5P1QVqyBp4j5APR8",
  "key21": "4bfa1g6X3sVj5b9HjpteukAmLVHuqervYdCXnAaSofVek2Ure5GJNQFGoAsgSQL3nXhf9Ne4a7MrABLVJ15A9tpk",
  "key22": "45HqYP4aRU7gadbp1BzU99ZmAURnqaqkQKGQZXfZgTHpoEVanRcS6jPQwqr44dwoPDHsn5ABXHdoKjLeeEcygTFv",
  "key23": "5gBtsxoSD9GJSFZGZpM76cWuwNUE2QtssfvuiJ8Cngs9ZckSxe2Lz7fpzre3rKjZPRqzpZH1hVizDLSCfqiutuT5",
  "key24": "5hzd6aiUUHo4VFwbfMPjjHcyD3p4VAxx4z1bKjtMMgAANBiGCwGEBEwzUDa2bvok6ibPhpPUs8TwAyw5cTHfZxG9",
  "key25": "5j8A7FwbC4J5hEgSFsr2cVxpspu7fSFb1c5vWBDyN4sXqKwEfaqs34NeMv61Uno9TRTJVipM1rELYX5WaUEKiJkb",
  "key26": "nJzDBDcCdp7aY9rEm6daLCYioqxDi1xstaHebJf39xTBSMY8k9UaJnh4qsWLMyKcN6s2EuKwoVJx3Bhy2t96eh8",
  "key27": "4t9pShL3kn82cpWTeqmtt2zAQQm6bkJQiBCC6DZeC5CcVxhwzgS5kh8meHa1y3KGZMUKdLEByH91Fd43fRMiavBN",
  "key28": "4kNwrjnXErHoGVbiAgpndyc7gtuhhpXogh2MgNr6w7Q9BTvnHnK2XqB4VGeZ3zsYvbZ4TxvjYr6V54XWZoqieSo3",
  "key29": "5Uz96ykyU9bVKxKco5BVT4YUHmhJmpADGCbETLTkVKF1dq4aC41dAoAeQcADH3PJDYynwuaiK2G21NMZ7uH2tjqo",
  "key30": "5fNQcvebVQ4xNXsoU4iPBcEViHEXdKzxoq2cjYkkjz4v5g2zaAVShentFyAmMNZFK81ugUWGzC5gZJeD7R4v6hPm",
  "key31": "5v1jWX1G5uGe76uepURCsQUJvz8Df8Y8pFLyMFaLd3knygqmVS4N46QvYEof7mE6Ro92cc2vdspFVkwrzbqAqFnq",
  "key32": "5C3dwicqdvG7ALYfNkGwkkwDidxwaTioWW1eoas5omkNYqfyxzj2Pb11jcEjPpyqhtgCtSBUdQHze9ENyJWzUesh",
  "key33": "K6f3mdBs7oAWEe1U7M73yeS4VHKZZsanwJR8tKguLZWynEqL6ZD2UpXc7j6zidAJSQs7wcoSa5kSqVSydXkw9Fn",
  "key34": "5CpBH991FHkKT86pkNRJEzFCG2Dm8aZZUTjGZNLdUCAdhx1myhYy7oAmKbBQJrSu9DkQXDV4Tike1ivaxfaCV7PN",
  "key35": "57Fnt5uFWeZXVoVB5BKNMXKv65HsV6kpxx85hUa8Ad7hc2Rt4CSpqefM2Sb1hHrkP7tbdsHTED9gTgR6A2PBNBWq",
  "key36": "5nG3J7HBL5PRUC42AUqPevFF3sHncjFnW1PRRof73pmUmH1hStM7HNP3byD3x9xyNxRqXkPy9LTa5WBjgcCQWUr",
  "key37": "HxpR9hhF9ysmm2vCMsSx2TVn9jmPTo6TTYyRNfpyKJzSkxvqXsYMX3AWNvarvSLL1HnK6kAFhggHKttHa6iJeDR",
  "key38": "5eXsXcapgEpAPE8SErSPDJhAHBAhwg2MsVUXkqvwS2rQxNbtwot5iKVicZJgGQyLPcDbr5hEPCqPzMa31DZy9ELJ",
  "key39": "4nZzoQSR7nyz6AGVQj27BzPRBZSLsAymQYe1auPMf4skvaegURf5mxxMf9juW4Guz2XruzanempThYiyry7vtbr4",
  "key40": "25qcQGTgCeZKYpqowsMAuALBu7VAprfxrj6sh62LoHHejYHg8g3CiMKXFP5BCFPckq1MiXWgjsQJ3aeEFfgogjuz",
  "key41": "2mcuTQh8Q8JjGQJdfGAmBw5m3MXXx678x2EuMmnxbNMwVCGrkhSFkVJUs9Y4qHMnNRu8gu5xtV5vZwFjYs4Tw3DB"
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
