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
    "4hVCJZuJZZKwcausmEjNXDnxv8fYTCYDe4S4EsVRfERFomQRYLWLeBs976oWFPUAki8wGo5N8KVJir7Uyn9qCfre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YncYFFUX7gZ6eUxGg61PUYYyVd9G88SbQ2wLYZTpEZdouX8Z3KwzppCa89sC8K7tPMwBZKYdQpSa2e7UHzsLtko",
  "key1": "4Kpa4Dygf9PpRwwBXZbCmzbzii3sYo48Rr8132sju5HLVoniC2CJXVPJiRGngoWD9eLnUY2RkSr4WUsitQYfsSDT",
  "key2": "3NqZz33qFULrUdgtM7dLXLm8vgLv5X5zYVPqkAFpvgngXeavnf9pJRWhFyYPtYzkM86Tsv9n7SWtj8nXUqHoAMiv",
  "key3": "3dansduX8Jttigz821Potvb78i8KdEPZJJ2EHJ6vkzhEtnPe18Vnhz8J9ZVkDmSXL1zKDBrvMoMtKmKsHZiVXTqX",
  "key4": "3FYPVcFGeJsovwu8zoNtko8YwQenECSDB18HXqD49X9zKunxyXBbpG1JziCjx4PEgiZP21FLLkhzDncg4CVPWZgm",
  "key5": "7df3zNSUnFTnfMBdc3CxLvv8bpjEN1Sn1w9odoNvqfeYEMFVZRonVr8HvHr16tuReTyuwXCsZD1qdYFgj1CRGwQ",
  "key6": "5fFGkqf1xTmFMsx9ApjUnJmGeF8roe2s8JETLufPJNZGaS5w6YKaUNk1ccn1EQoUWwdSyk3DyNuRi1RDJuQ8r1xA",
  "key7": "5y3GXC6fKFvK9nYapYghVd8UGMv8Mc26NPXSAi8GwLeh448VisCVZ3JcEenHZfQRKZxvfKcnW8mZuCv9sstm9GzD",
  "key8": "4rZNNjjEQFNvuG9YQtfzHcL1dNG9ohhnDuQaDzy2T3YbWnNcftDmowmcmij7RdoY51muvXqGHeooSrPjpM1aabSz",
  "key9": "5FZSY7C4nj7fgEDtktMJ9VWwXG2nfdieo8JgR2zm6pTPeeyoXjiKb4Hv9PryTVqNsrRaFPUy76FKNDUFM2HNBnPx",
  "key10": "4urtXkcfTXVUfVWmMoEaNip7CL8RT7NKUtXJXbM7FNNNLp76ZpL8A3VYTuj1NzAipdGxigQ9N5vdUB9vyh2pKvw",
  "key11": "2GX8pheDYnkFdGT8Z8zHRYRKXaSMhkmf74F7Esp6ZCgSXLWtwSX5dXiGRjHxXWGNk2Pr2RUEbX49VUWC1B9yW7z3",
  "key12": "5qNPBd7PmYrBAYEzGrrKZpgu1z3qLUbPBXhgrxJoLGUXPTKeTnDGtBmMJQ6SzeuqyuUhvcH73Artmnfhh4Nv2FHw",
  "key13": "4xVYHp1ykRQYiAgdf2bCvHSbL6oykMdTXaoxgMtQLiW1e5MsueXMFGF7Z7ztT2JEyfuYAVeqN38BXMBo3E3J2gZG",
  "key14": "5PXZ9TyA1hRruL35JQYofhrLk6YB4ftnFwS2NPFfUkjGCu3EW8MtvKiwcyrTGxjaCSz9fehqY3Tok4Qx8YM2C3Mg",
  "key15": "36yEr4d8L8Hu5yDxK3QwaJX5cEsMnMzWiNDm4MBedLFXh1c39znoJCjYaZcpjXjb47cRHPmr4iS41VGfBhEndYk9",
  "key16": "6554PRL7WXn7qoe2P7xG2gee4J8xcPKN9bZpCeQgz5fexVWDz5LjWjxTW6G8YxUZypUUMndn6ksTZgXY2nGftrUJ",
  "key17": "549YRTWQxDbdbghhhdiB2J1HK8rB5EJ3iA17bGWq9rmnyH3q98bPHUKMvzyGjsBnebhma7UN7FZiFuGcQntK6oC9",
  "key18": "52KP7CA42iErbFcgTVQr4ceMTyNqSy4vD69RMrPuZmaC86yenPsFvcNehNbYB1WpVMqRcsCoSzcqszpD4YMm9HXQ",
  "key19": "45g6Zfz3s2ehX4yokFsQgQEc21FznA5A4hypYrqD8pnbKYwQtnkPSabXHgUobjFAFec7qqeCkoJf6Z6cqAiCKbeV",
  "key20": "4QNVPGgZpada3M7347fwzeXwaxNf2sUV2pC57Q5hHCPLgSavL434bzZaQu8kcGgvgs64WQnEg2MRSqd6LtGcbJA6",
  "key21": "2yc9a1RunTFVkP8DKabepow3wrm2xjhm6nFhysfVi6CFori2iWhXu54zXAwj7KzfsAS3FHMhXKmqzofdZgf9VY5E",
  "key22": "5VbbFtaYT1LqcvYYooxWBr5krEhigQYhMgaHuHzaibNhXFfNSLEiwbv2h4iJQRni8Er7uJ8Loug6QueLReumM8xt",
  "key23": "3F2DHSstVwhfwf8mJ6wVzScr4T2Utie6JrpzTpm7bkQYCTEzSACkZrzHqb5sLMsJ75P5jXFnoeXfyGSuwUxgBf5J",
  "key24": "2rff3sjTWftDfvBAitbMjkXiGc9V4Z6vdbQSQ6Lkzwb4c9njJqyfMg4FeEDXEQsqUvZ87BFGGPkF5ptE8jm1BzWo",
  "key25": "5ac6s1vFDy9XpNotAtYKRnqC6phfEo2k9ibTtoqXjnbAKcmsxLw8riq5vZXS4S36ZeyyKZAMqGxYYJoB9Gz96wKx",
  "key26": "HobbEd7Pyo6U2B7C7UuvXLrCxmqPdN7H5Pdu9x3DcFbPoZzBVdWLfqQMAo5rmJv1AVBH9eE97MqMwEx2NCdYk9Q",
  "key27": "59Go5UwhXDrpGD2suso5KoHY4ucBDf761U32rYtKVCuvW3ieXN1kEa4NC2XhpjXU4XR1Swdx8jFRT4XxCnWYiRQ5",
  "key28": "iVAM3apXw8n2rEVCNSjcmENmVxpgCZMGEkjPtu4tbB1pF9S7J6uPT5XrsurQrcqZPwksz5ZQEVZ4yVcDRb3jDrg",
  "key29": "2phub3nA2xMsRoatxgv2pX3nLve9moxjyZ6BcEApsJnFARxcjgCxaA3o2YFZYQLkxNhsD46hbGtQEVZxmNxXUqas",
  "key30": "3pchxF5ZTwgFPNUqidWdse9FPAz2PfXNKSYdmXVy75NbkNja4idtL87FveXusdQhUYmWrbFzhXkaZaBZydWFTjYA",
  "key31": "2xnkwo9fRghxzDZqDhZYta3EB53yEPubUVxSoKFwtnjQg2Bgkocg2ULzonABuhgii68ZNNqS9LHqfShV6rowAgic",
  "key32": "3tpo6FpM1KwtYDF1rDNBZSwDadwbp9qCJKCSr9WXHZ6wNuiabzgvXvjgG1eWvzLv22kahvwVm3tCnTxsvX9NTLj8",
  "key33": "2VptKVtKB2gV4tKSU5wnsAC1Q3Ku8qV2aNd6GCTaNoPN134QPynn95RGMPfByDCgA3ETtQmApCSGf2dzudSjNFA",
  "key34": "48M4HJh2CGn544Hauzqm5qu3x5TrHcc6tZKsg83541Nrotev3Fp5VjcJupRoqk73oNbeNzvmChYtdc8GefAQ9qra",
  "key35": "vkEziCfgQjPxyPzmhb7egfdyQY5UxLhEdkhjv4CrztRdsuGAPCejppnzxyJMHfRWTnbhLtfAifw2Pvb8XuaJdki",
  "key36": "3QDYstcfow7b8ibLwAPhRix6GRhgGv2ijq8nDKDmBQcuYUvKNqT4T7J6x35jxmTshHgjKSNSzQ57XhstozYEBqKN",
  "key37": "5tcUKrnQrZT1J6E1piNKsgKPzD7yD1xryG7FRkzPrDLmAY2AXrbmUwpBFCYACv7eFgDHJJKYG82vasCqh9KAJMrf",
  "key38": "2qt6Bw42LUCXP1d9JtUGDJ9WF6HDvpzRh1SXxExoNFfHRg5YbTTtjm4zEWJbNmPvXDNdgw8auBp2iUzD62i38KXN",
  "key39": "2yptQzk2xu9xWYFw6JgHYdeqTuSoEm5axP73yZBSLRwF9djAnHXygno1Uz1zJTaenZ6TkdAyLZjQU7RTZKxx49qD",
  "key40": "51SkiS2fDYoDXz5AFmGo9oWjD5ayXoQWdau7o9xCidHHhiBN1rXSwDd9Vt7THYL4ak6DU1eZEMwNywVzhhyM1seJ",
  "key41": "5SBtQaVjuoWjKabZ3AAaZnk7LaA8JPbPz2jHd49mXHwFyLBd3PutSkRi6HQmjeZLWLhWRb23HmHmUGFW7Y7SDVrC",
  "key42": "5zCt4FEzjn6RGRMHcZhMKLGNCiUkEToEFwAiivCP3bgnLUuENwpeGPTMRCpcfBKTYFLRXmqrCHgtQwqYAXcGn6UJ"
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
