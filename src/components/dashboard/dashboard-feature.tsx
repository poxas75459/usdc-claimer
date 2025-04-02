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
    "3BE3NKV2suCFM4G5VXA3fetX23i8PqAw7a8dmMvXFgZ1PJXMsesNnepFGmbK3ZU5k6WBCcwqyBJNt5LxYYyY2VqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtjwhQH5cnfixkLLh7vzUjjfVTYCx31NiaM23o8go8uJYrpBjmQKouwbWrbX9TQmuwPrEK8kFbT7LQ6kDX3bAnw",
  "key1": "4VNPeK9XKZBDYKU6H88BYfDgbr5nSR3Wnv86biirUd2xpGFGdKSJ8yFBgN57FtmZWmahizVMTmHiKx2a8dZuwwUr",
  "key2": "4WR1tjMpS2ZWVdkSoLKCMRdprTEePviHuwgYifadKbdwJXBM12aBX3C5QrYQs3ut2ANeU3b3Nv5HHPY56ccgTRPC",
  "key3": "5giQGwsgmocxpQQJJjKhyY8KxEoCZ96BMcmh8Fpqaf8gTajrCMLerpjj2ygtMn8r2MLS8Fumfu4rUfgCvi54wsSM",
  "key4": "H3uKpVaJ2igwe8Jjbd22LSr3Zd2NZnXAdXRs2q4U6jPVWap5xqCh8YnFK6cbEWFQ39VFmgnyfLFfCHixkaMSwKW",
  "key5": "53KeDZ6URxaKETBwbJ7HLtqAMp5eNao7PysoCcdYvvHmj7GgZZmzZoWeWaYQ4tH2QhMPvSvWvKgXbVYnPDDRWq7L",
  "key6": "5VtJRXhwJndT8JLpWkifrK1zEifEzxCwGcrgGF7qFtEZJdXFJJkfX3sHjg9vn795cShUejrFxsTBgZYmjzxbYREj",
  "key7": "4WDeo6ay2z9Ue9gZfRsDnA1U4T4SVtaSChHQjES2cnoekbT71QrmdYtRCMauPEhUhENch3ru2PdsRbxLMDTdXeM3",
  "key8": "5g5H5AZS4Ta1YQzah3jxuZ43fSdYDqyTBaGSSFuD8McxGGHhA7LtmNLVLq2HncmRttUM5ucQqC6fSZyNMQf2uMQ4",
  "key9": "4aY42AeyL7CiuGEZV9h1BgbFZBZZJWYpEpnxrhnBRdWCuMt39B2qHb6gan595MPxjTy9woJ2RiPkzuHrow7waW9C",
  "key10": "mLwEG9yXwDW4eqMdayJ3gziJAWLoJs4Y2zKuJnPSxve6zZfKPyyfPwL8VWWtCDuDW6QSdYTyMFR2F475DV7Aduo",
  "key11": "3W1JYMa4p71irDR2ur8cDen5jfP4VpCSthY8xLGRinrt4Pyt9xyGzSd2FcTdkjR68LjTNenA5eP1TYQdt4N5adQS",
  "key12": "5WbQDGbpq19AsREFTF7Zq3rAruWF1S4GQY7c4DmBkrHhBUDKjhtZFSKwiWu6yUsBRyffu9GZLTQF33mBzT3wg5D9",
  "key13": "3YUbaijGVGcU8S89eNPB5ePvKC8CHp8cTUhv4dkeeoFRAygmL3Pu7bg66g9JH8ZUE2eyaeCpG3fdDaUAHQQMAU3K",
  "key14": "MYNgQrVtZbhYsQsjeTv2xc4sNZ8Agn6bqiuxpDKjjcQJWNtsAkJATkQeNeiuxRczjwb52zhtVKvX6giK37ix3hJ",
  "key15": "97znpgyk9jDHmigko9LTqAngZgNoridNnep2Wwotz7Tp7vE6FXonuicSRG379Jkhx3v1Y9RUXCFfzfNKHktnN3h",
  "key16": "4iog3Q6o6hA7LUccXrBo6476q8uaDvRdnyxMcqx9LEiS1EeRieow1AmHReepG3teypQCxtN17GKvE4DtHyGQR5A6",
  "key17": "44pLvNkTqxBwynVJnZcFTALFbPZqxJthipyArzvUMG7BKyZQS2Zj24tzzuCEW29LVUu95yGbH5CeFD6akWSgRYvh",
  "key18": "4189drGwZosuYP1kXq5KpZU1qbQmavs4HBembzkNnBuPSh1pZRVaFSXgDHBYFiN18xTc9LxoUDKjqp2dpKqCENrn",
  "key19": "3iWHU3xnDpwmKbyLDbZ2Ztc7nvCup5L1itx36k4pokxwTFZEn3kBxK4g3MGN1eeWE3qd3vj156WpPFzsAniZBc12",
  "key20": "4yC1T3CdsrHmvK6h5CXvPm6ztecYcGLw1iEb88h82k3BWtegyuY2iNpfY8Fvsi8gr3qVDMWfLJjXu8CSj1VVYcdM",
  "key21": "4kNM92ezn5hfLgsn5iHSe9hh3ekfxX9JQfSgNxsWUiC96Z5QZjVWGYd2cPx6LPaRaAVwZCS8Z6JhgBW9zcGQrFns",
  "key22": "3dMPVLfdzgreihojrbHj91xHGpcLihuuoPqKqGSwaz9JKRQBJSsQ836kU3GmdUR1mTmeq3iFHyW9FHpxtG3ymcvQ",
  "key23": "3X75xGzBzFpcmNDJws5eRtRCNCo9rNB4jYZF9Q3XrWDzWTBpX5dsBjdkq8Uj6YLzTgHXT3n26PEznU8CP3aYrypb",
  "key24": "3qjtqKJX5iTEXsHCfpXtoSsc8U8J77NrAY9mAMVFim9skpeKxcgoYbCLnX9bBaHVnCoCdM56cdiAJH72P5W3gwEi",
  "key25": "wsPocFD62G2NYFmFMKH7axVHk1dF4Y5RqaoYEpJvQfaB5HyL3r7sBHL7GrAjTfwpVYt4wgk3CPvNadcbAJVADQs",
  "key26": "HfGmijSjzv2Twx1VpeAn5o2cWFRiSJRWZ4GZqCN1tmSn6HE7EGvoCKdgsKNBqcquGdcsHnAWqFyvYZWPfA6NS6Y",
  "key27": "3WY6JqKA3Q7eCNed2C1UbP8zMazvDQWrpvU3MkBcz63okDHCm8gd9kVBGXTDYjrFkQjimujrqBwdtaV31rudw7De",
  "key28": "4anKrwtoxtqLoMGQnVz9CaGAqj3eWMe7MC5TLiDUknFaUuGLFariBUMRA5GKgsq3PqMBCfpUbUjY8y37tesFgwrv",
  "key29": "5uN1br2R498ojAw9YLwMsE9jpZr7GF2vFvgzPv3LDKk6NX7riSyexpguoosXeueEGgBmA3XUDWAfyiYmpTunkRFn",
  "key30": "58xCvxN9YWKASHU1PD9bL9FPGkXnkkDkpCEezu2tsUiZx5TMqFKn5nvQTP358p8tqkKbJvNvQeX8WyPnHwENKg3x",
  "key31": "gthFnE2Kis4hmiTsgVb8vSJkmd1xuaXD1g6rE8m1RcQTjNpqDvj9SnY9263L6uEUqL9gGF8SvNS1xHPc5TUMqHW",
  "key32": "51Cs6ZeNcd9GPVjWahMz2pHv8wryAcoEFr5qRtSyQsuqz9ZxeznzbNATD7U5C6Ne9cxDUe1o7jpFWock32dBJz1g",
  "key33": "5qpCvHjoxdpGN24CwpBQtHQheEFQJGYMd38aF6bWhFQ9WZdJxV4CroDrVYsSMoWBKT5A1FGFbj6cQfSTp8X9VehM",
  "key34": "3etC8EPXsYjBMScz7qnedGa3CAXp8zFztbzhJCoAj8M4VHZ2A4dK4zriGtmT3tgCmiYRiFXDBSmGQ1zBYiXrZ9q",
  "key35": "5r1YvQAXszm4ncrMT7E1EBd3ypEUAaSGqrTWoAu9NjbqmxCsRr33nZdsWzH6NYfT6KDEfw7KsQkEFAGKiAmXQuSw",
  "key36": "4uscn4RJXqccYkQ8nKbqpUK8Smt6oD31vLvnAaG89KnmppUnsR3GMEgsiw9pG6wUCtYdxcf33NDT6rgYfeNV5Fnw",
  "key37": "dWY7YJYYn85FvezQn55siYKXE3ogfR42Cv6RjAAFsx749sNgU9ute2gpAiccMJKfekm9Z8pYST3EAEpiTwfwtdf",
  "key38": "27Yb9PGcLHqpwqkaFqGFDY9GCzYB1xPCBr8sDtgaPHGLAWw49nCeCp7738PRy5CgHBhitpWHUYBSiAUU22e3GiBw",
  "key39": "4yBiaAcDmb2ZqWYM2jpXZ1YiNKBNamVSpLbWGE4UQCt8Hq3x6ndK9RoHJ8UuZctfzSDDUZJvdSQxW8BfxefZLR5j"
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
