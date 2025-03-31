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
    "36pgCAJFeGK7v5mSVzPzrLx45NhyV92sTA4bJhmiQa9EAZm8YewTtBsLg5Gu3TefWz5t7FNW7RDQSAgDAQ6uGkhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YXfg9bpwjqjkKfAHUJme8AiGdEab6jtsS8FEEyvwjftHWmCz8MzoUEJrqTa3Z1qiN5W5GjXgcLmGNuHftoF8VVm",
  "key1": "k5zFfAW6wCmKfcPVdP94zGYMGRuQv595r27jG4vYWtJUQkp8zrQ6v9kjxsmbUqZihjXmEGKGvG1jfdkxD79nytu",
  "key2": "35UjSH6SJuRCjc6xDudCBikjxFPH1CZXY1NA2tAWoX29fNQsrpd96HYUCb68YnCs19yrCsyCWVy27MZFpvGbCcBv",
  "key3": "3P1rKqjngJjsnJoC4h7oVUmbvDQvsnk9MLtHSeMCvfwbN2niyQJHYbYafuGzyyerDiD1g1G3or16cxajiyjxsR5S",
  "key4": "r7XTP8nYM4js2gD3moqoqHLM5D62TMkE4VHUZgZGm7GZBrp9tmjS4Nrcmmu6N4NQx6JBBVDGRoz6tKNwW2CQohV",
  "key5": "5qVHZQ8XHkoGDy7HeaExXsYgYy8V6aeNBbjrj5HF6bfM2wGXTgfTxENhg1Hc4NAzSusqTURc8QyoeYDG357zc2AS",
  "key6": "qKe8VAx56x3jX6TT4VMfU9yzFSCd1AddK4WgF41dZRryP6xm22ropuGnCku5nUzL5tybZeZbmm586XuF7E3WJLw",
  "key7": "21CJk94TbKeCVxep7xdN2zpCkXkz7NbbYghoHtJHvFoprfNB8gi5hNFQyvQQSnjpqBDL1zqywbWbFvvGCpY2Rdov",
  "key8": "2e11E1ue9zkaCZ8ea14Lsw9nHuVBe866DcGjZHh1YRaWiSNpP3vHoFwtUxPjb4BX2HcWU7e9BxWW2SrGvyxRXzpw",
  "key9": "2ttprtyFbCv7YXrqdb2vRCRxq1xohSiV67boZ9mzPuXJ6xu2gY6u8diQYJmC3Jd9jUMNMdhyyAktXmZPDoUVspTz",
  "key10": "G2gDg7vajefV2SgiejDkytoVk1MKs9pEnzJpUe2VoXHDqbTRmEa5myaaN8aJC552nZQvYegp1wASFTjJmDVfnwL",
  "key11": "3sV1zBybJXSyX7AfpU14WGTGa77Uf33cYYp12tFmr3mXxeRazDTThw5Gjv7r5KKpDmGrkFh84WB8JbqZuuHHMfxY",
  "key12": "2HoUuPm5wnKLk21Exvz2hwvx5p3FrycT95STqWUhJvXsc97AwH3UEAQCjSVHiLRuzTSi21qLThcq68hCootbSV55",
  "key13": "4Z8AEAtEgc9i8RsPqmzFFM1eXmTCVXMhq9zNq4rT2oobxP349jKXrc8sH84bDw3WD6Ht3vURnpWSE6zMksmsxFUL",
  "key14": "4WFLNA99EBAHeBzFwHoRLWGP8yiviQHYcRYXKYWzBFdeANTqpn33PfeAqjVwRFU5LM5mNFakZPGAbymUrwhLCoi5",
  "key15": "445Yms5ukNanLcPudc15tEsw3eqZhQ6eC3j5MBJhM4Lzop2L6zcbLq12KaDkEuW6nM8X8JzQ5ixx2HK17cmhdBzf",
  "key16": "22afnzw4X47Gew17pMAW4Z4Kgx5zK1YACrmDU7uZGmYnaRAprTMVxVtgtymMTScpJm7zxaJXgDWEDkqB4SzNoo13",
  "key17": "5Zy1DH271HqpnAUF1CDmm3AQjQGFWfwXhb6A4hgLAuVhy7hTdAAsp4fKy8ciq4EgBR9dtY8T94Cjqh4JNXkqQL3c",
  "key18": "i31ZoF1daPukDjmmapoBpqs1hEiHzkHEGdZ48zpp8gAawoKTVp8cB4DAM4nbhQi4ZyUvXue2gppGmjjmpaQFJFG",
  "key19": "67fdd4cEUYsYtGu8rG9haSMeLn1DsaecvcSSRydTe9hKBKHbeu2gWNHAwBzCKXqB8cgN6CGUZ4S6AHj8tJ4nYN1Y",
  "key20": "52sSin27EenRk1q5W3nfZf281BTdSuGhVVgt3UJqQtsrhnBdtHj8uR7kjqLz1YYwobrfzbzhoMtcZXLDjzGsdGhj",
  "key21": "ED5xNc6ib5Ed7wJMnAHSS1KJVcHnfAVkRrzs2V2Am1esoU9L8TWjX2MSXLwXfKrUgfq7vtFm1uhSBNsxy6GicJJ",
  "key22": "2FHpvh1T3hgQoiNHPh6L7PL44CWUv25Qe3tiqpCUQAHmG6WwcUGTz771BNt9cU49T9ngney2dSN7NY2tyVfRyUvj",
  "key23": "2QJ5bo78Tj2eUvm6fpSbMKNQTCSbvM4fpJNMXbyofPS8qm5trZcUs98DSL7aHgwp5Y8H15HMqY6DabL73gZD6YCj",
  "key24": "355Mgr5Sof8dk6RF6TaGBR5gUbRFCRZQpFr7QGnJuZxcKQ7ZKRMr9Xs3TD1gF4XjbAYJy5AoCp5L6vzSppfezD3L",
  "key25": "3SPL1TebW5jVD53ombCc3EEWbfAksHdSTUWRx56EEYP5dcxRaLMs8dzbieqMdq2vtV35QxFTYDHSkqgbPx1ev2zE",
  "key26": "b3kGMoCjSq8fMMntNrLEnSijDHp6khBTG8nkmZKMaNC3fQc7o4mZvvWcip8vyhL4Vci1Fc9W982Pt7dxwHCuyTW",
  "key27": "5h7MdTCUJJcLFK9PykS3MyG5KeVnUkNqgoRGahaPetx7w9eBZnRaCfEfjRUQN6fYQiW7GouJoujcpMEruDfjzqwH",
  "key28": "646sKY2f5jSE7KKo7bQZHsjwFHAdbd447pUVVaDGwo3M3BT8vQ9shX8jg9myQprNRc9Zkkd3Mbp9Y12dpUheAbAF",
  "key29": "4EGgJFSiq2G8oKmUzPnsMAcKWYnnVHRKBt8Qnupuudcge1Tv7xsufvvXwMGtDWtvynrbaSYmCDaNv4PhghwXeL4v",
  "key30": "4KknaTkxXHZxn7dLjtpWcDV8tTR3XUGpoXipks33VFvrZNPXdJc5qvus8ZZG8Ez8QZtgyHvpHbkBMNs4TLxyPWBL",
  "key31": "2VWjM2NUetBLwc1YC6YwY6oFVMzWRE75zjeTJ4ho5eGze6WAobnkg4uYLSsoq454W5EXduW9YpqfYDdF5WSdQ7eQ",
  "key32": "5ESbVsMYAicgdQFRJrDLi1dEkdJLFFqFTPsmZ1tHJegrBmfuYjBrS2wS5aR4ev7mYHypqimogKfx6iQhru76MdDt",
  "key33": "2W9Br2x5JzUXdK9nxhwwyFBfdZZQqrfmhXqqr4hPu5V1mQ1ARoW729kNp293BH8ZPttFCVd3CtMTV9chXeBhCMwM",
  "key34": "5XLJT9Cah53ytZ9oxvwyDbXfH7TY8V5K4xNZKXLNa7xHZJBmaPeZA2H1jwfmEYUXRRbLhyXBW7dZSmoPAY5kwzKJ",
  "key35": "5VunoFrY7iegdox6fKL8guoBfKzxgZZVaY5ttrURPpZHaKWjiDZ9XXyQe7kmeeauckcTGHSZACrsrG8fN7P2o2sP",
  "key36": "4TCPxAtqeMdkYTp5dbiXsvNGdwB9Tmjbb4rP88PXiYyYvqf4euw2a3JkgPLELsrSeQqQYG8HJevy1rHd1Dk9KxBg"
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
