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
    "LrPTDKk5bQYtUysd3awxFdHxJdfTqHsqGbk73p4U4ma1Dvq4sMvgegCnPy5NxUTS4qsfT1hxsuHBpGy69CKE3mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MEqPRjyM5SD7bMtrV2mcq5KUGfxrs5KzeYmLXJK67aymBeoBm2BdgGDKWvazUGtqYL4zWXpoW9UkfB3EpfwSDr5",
  "key1": "2cwG11cvY6eaABZY7nsxnaFEAUa2ScmXiFkry72X3bbWX6bQosD5k5t8T36WqEr3ZK7oXCTx5Muci8GLhZDKVHS3",
  "key2": "4S59CB8UEJMN4YAjWNJ1PdAwiZMLnSCVi1DAB5VxENvse3iRjDy44ADp61msJ7gasYwQYLvxkVEm8f1VUTtNPUUC",
  "key3": "1X9GKPuo6Do9XpC8zQ8wz81C1ePxPwswS1qCcMPBqd9M5CdZqw9oXf3mvsKAVy4x62u8u8d2dUS7KN91iHcCwc3",
  "key4": "414LwafpDHsUejydeRaQD4xRVAR1pZC2neacL9PXWa28wFEVFD38NMGYx91SLYGWcd43TzJyqc99LamhibPP4xvy",
  "key5": "3Tw6As3ErQMtRNevuQjnJmK6WYrtqKs7jsGSzDgEuALHB3HbK26gT1S64mMW4rBd8Bbcr6c4UgV3uEnGuVVgoWPA",
  "key6": "2RLxd4nqAdQnfQpd3FRwxxYFrr3g3JfpoVAhf4T4nJksWYgaV38p5LLYty53LXxTdSy9qpFuKuzyMJigvdTXgvsk",
  "key7": "3GfazosrQRYhk6ZeZVoqgCSeVViUJYu56a4pvVpG9tQaynqUQTB1UwLQDcLJMYSX84KpLcCa5kusbjMkny5up8UE",
  "key8": "497FPPx4WhjqpcrB4XqFhErYgEyez3oU4YGWXnfVME4JSWnkU5BMLN8oHrgbSpbxXrz4tqZGPiE9hamndUjEng34",
  "key9": "2aKZcHfJk6uQDYAbsmdVpfdiZHM7s98TyRHpbwnR1t52E64BbywsyKBjgzZMCQyxqnrSRzZhNz88ue2HAiFfmuWh",
  "key10": "3w2ZUASXm4QXe8pHoXLLxw5cJTo2wH5HfGQhcefvXc6hcx1ZksE32y9iaH6mByXpb8C7GcwAPDQM7SVHdAjZZk5n",
  "key11": "rRbmAhbsGN18oeKGPRPDUeVJQrjiiALdrRvKER9ijWGYjTVrFGd7SCdt36jEgWHhxMvzj61UKz1QqrwFTYCF7h9",
  "key12": "539n9MDdkecPu7qh1FZ6rZS3TC7VSHkrJ1X1EUkvd9ZUZMWSiQkXJ55uHT4PeMsjqnjfpd6onYbjM8pq4xaR6SNT",
  "key13": "2S2oTW5d4cS5UAHiVxiGfXssf9DfJqfcW4TdVKZSHW7gjRaUc2HW5NEP6uZ1JbCpviveN58YzGHWniARxZC2knT6",
  "key14": "3kJL3JWSfyzyFhX1ZDWEr2jQTtDANzSddtyrAKVsey5diCH2HLdgh1rqGgnmPTZhTUQjaSxqcZf1Te2vrgt7KhRz",
  "key15": "4rYNF5YyVUbv3GEEv9d9vRUAXB447BjShJtcmcC1kYqqTWNpSa1VtdQZoeJPBA5kRALNRMEeuty9i37NnSPg5LtV",
  "key16": "21dozU3KBJqdWLEmAkPsfVPBMEnopM3CPdAXW6ich3wx2WXCHFMT4MDJNQMAoXfat6JgdAP6YsEaijAND1rimQvU",
  "key17": "REt53t87Eu2ZvVpdtewfnWVB8Vp8QbtypQ95DqjruDpnfY52FFS9nwSDv3jYKaDsk9Bo5VbwAVoaHNJ83Qgd61F",
  "key18": "4AMMCzFyBZFbekUp5qRotcLjdvoSsGVi6WdW6x9DtwS1JqtBpNvKsX82RK6a1o44bptuSrXZJn5AW1dwcEH42Nxd",
  "key19": "4gAPw2i6m9xhBU2vRYidXUhxCMpEHevH7FuUxnmf4Dhw6FPQFYFvkt9usNqxVkV2jgdvHRLujaBLbCGm4MXb7owS",
  "key20": "oN7bPLDbuJfPRhnLs2FN2UrSCLquoTuCc1aJhsXKHh8xGtG7576QdkFpY9ppkNZsUP7g51TPTVy15sYEYwtU5Gp",
  "key21": "5BgEH3RqgzQS7rxcqvopm1JrvkPWv7nhvffhxPVK9aAQvXvcTVR1gUerezkGwDw4gR8BTLLMFBDDCR2dKLpfS7SU",
  "key22": "29epESKFw9QGxsnTBwGoJ4e8qBaKUrhgfk3iMgcd7osgu18NqaUfFCyStYjfoKUwRD2HtAKWBZsPD6Dkv8VsofyJ",
  "key23": "5GVmHRnTN76msBSM4Go71Xt48FdR3A4aqtbcittk5GjfGjs4BqShP9FUEhW2nMRThNn1cnZnJdhh4acH5J2koH3H",
  "key24": "Sn8SddtdDAdsu4MKB2tyF8v4Cs6oNgviG7rv8rHUEkFuYjxdP7uHj5GsKqgGiufecuiekSpPG8wPZPEX2qx9nrr",
  "key25": "31uc7GBxmG8vmUzdw8mF2z3xQBQU8g4QrewZRLYqrqHc9yVcRpddipJ1LoXN9131UxvoobypPL2bdCuzwbv6ugXb",
  "key26": "dEVuZik9vSXvRNiydri2BJZJigo1tj1iZX8chEhVA9qSxadvh7yBF9iE6jRSBsaszL1eZK7dtXpniH2F3KRP65L",
  "key27": "2uMeo3E2Ud8ssYzJ3A3ALSrjSUA9kHpiXxaM8df8irYgPGgRL58vQkQbsKa4gRahz3NaJRmiXD2C95cwT6FHA32N",
  "key28": "36cHE1fCLCU5Q2KS8qj7zKgAQzfqq8S7Mt4ihjoDRaWhP8KvdnV5dZvvEgExhWgA31PUv2pvPVpezszsJu2vy74T",
  "key29": "4e7KW2MPFAjTd3te71CKAGtaWRh8AG8opcL7iNM9Bword1mqVbTDUakRn17bXU5Z9LchxWhQCoDibRrKjwwNeGUz",
  "key30": "4oYZFxyhgFZEcLRsuSSDkUFfhsUxLmhM8WK7BtG1ZMi3BHPSab3hYzZAzVXy4aSiDrzKUQZwhJ2AXgire77NhaB2",
  "key31": "5Hni2UTnxseUEEaZCyKZaAJprw3Ar8uW99mFS2wTYnR6BCJz5FMiu74YQsfhRF9LQdWRLMtGt8DK3p66dondRvUR",
  "key32": "55dkJrCn4gSE6Bkp3N31Gx4C5CiK2WKLFirRGNx5Bo2HqXbSGdpx8dMUCP5yi3WcGHp8nvsP1M4ar4BPCvKCvrWw",
  "key33": "5DkS7qAdbCBCAt1UJPjtE6XVhnK2smUAcfiunYVr7GCjxooaHxNkdFQLuM3qbXCqtmAYVH2gfCSxeUKABKETmw7F",
  "key34": "2wMBgqhM3KxF2Cf6YdYp2HoYwd4gyap1SCdWwgJYffJv5HoRveDh8cNzceW7wSJZx96qDLjGK945oRyoRJv2ASjL",
  "key35": "47C2DJUeHZR76MJHKvYJVdEr1hjRgAATZfcgRpa47bkf8Hfnf6heS4Sm7wsD5ZEp9wZdCXKJk6hFhUZnkySZBs9y",
  "key36": "4tbigE92qyriS8vmK5DojHmHBSYksudJfd9jUSj2V1CDnNXuQzhzb7QryyKSZa2NDmx61vLDXis42ytftLcRoxma",
  "key37": "21FbiiARrNV4LwqK7wnfbXmv2cnAbFsLFWQLg5En2DSqSkJRcDvpQLN3Dn3QmJHJizJYWeXeCFRz7LLtMbgamVbc",
  "key38": "Gk74NcmcMh378booqUpWjj2jBHkXG3hagj9ibHsNkFgkVny2w6AYR2BrR4ia4ZHMgSN3CEDJLeNuJFzYzYJ6UHy",
  "key39": "5MVP77RPtdJSJv6k851gCmedozCShhus54UNuJDKZA1ZhKm3Evsx7NcPikEUNR1XdfPvghyokisuYG72AJT2ML5x",
  "key40": "4Jd6pDDrFGTq3pWJYEictCAcprHZkLayDraSJQCPAgQZw3SyXde5ELR7yY1tHB2wofojxrymrQc86WgEHihWQ1pp",
  "key41": "5JVZqi5boiRFGFaiUYjBnURV6ZABA4DWRuqpVWd5NGbK7oc6TNGLjqSnzRZhSGCcPj1cRug4PVMFre3NLU9wdtYE"
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
