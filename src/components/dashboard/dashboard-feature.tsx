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
    "2ueMTnhAz6rgXuxweup2WyN92kxoHhxHypsjSCV8K4BiifjUVzzNiBjveeLxXr3q69wZ3Pq5p2dL36RKEBu5EzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WTfd6Ecais3keeZinsEfsSSzhDLwcGWq1dWXB2hPfPmiaL3j6w9K9AqKQGtskx1yNZHQoUDp69kTsBEApaMcn5E",
  "key1": "3dbokVsfTAgcg3hmF2GXwNvJK8J4osjTUnUhQ8EUKhfTK6r4UkgrsrKDtov6G9rgwdAgpXY8zFiCaZd1LGjxmYBn",
  "key2": "2hNy251wDybkcDH7gtqXz3KZVDiGVkATK3S8AfFgu49SGaEnx7r6RkyfAGGiXVG8Qomu3Z3XQDHodTzQy4PQWTxq",
  "key3": "5kbHD7n4Njuo1bdvT1jQP872jrVNoJ8zLUGUdJ1fhGUYeBx3vRoNkhf2yhNMmqyvHi5GYW1XrfoPDsVxJEdjVwwp",
  "key4": "2Z6eGfwj73znxgF5fxMX9bHykerp4LgoEPd92XMYNyAmjuytsAqaPvrCUbABBgZ5qU4hEUeahgYE84R8UkRVz2VT",
  "key5": "2biR5cMYsFFksjjmwBdyngDjVsfTfrrqtMpQLUBq94EawipZPqkCM4h1j3wLdcv1PBQNtvn6S44Dz68M3XdZc2NE",
  "key6": "5APGZPnMGPRSGwApheHVNL8YoFeU7KAX47PQb1kP6BdzxezqSS94yBXBtXqSmxhb3i18nxWGwVw2tMYhyS4JRMVS",
  "key7": "5RXtgBzFB1TKq15qf67Vv739oWqwJabgLFuioRtzUMaeUiMwZ1Yug5hSEJEjGBEVrHZd2MBsnkLAXCU9jqob1gD2",
  "key8": "4DfGcYkegBVmRMQ8n7J1xqMfCRRKUg1sWrrKXJsKRjWAmv8QNSUkTBh877sxgXBDyYexaohzYGFbneFL9ZZjYKk5",
  "key9": "5HEZ7J4krBaUHLV7MZWDgfTrv4A8fJtEfY4gnrGFgj4RV9FKtuDm7LAZzwqcuDQG51Ac3WwRux3bUU3Hyfd2T6J3",
  "key10": "5FkdrLAjGfkB7yuEWYaiMXqtHVPwrMzGTh6xL2KBfX1Rtrzoas41z6aSoU3NaWdqAikhupG614sHXS4vfoW1YyUf",
  "key11": "5Yxj5prgFcadz2MxEEEjSabrnziVaJUmkzv9xK3madvhAjerySPN1UZKXmLnz616vXyXLUSY1xaUNshHwBLtbdou",
  "key12": "28Aeu6YyM8SSUwAfVm8w5sin29oNBx8nCtXN64HVdMLwkmH5wunWiBqLuPdyoLg1QfgFwVSgnb9iJHULJJnFCpb7",
  "key13": "3uVkxF7vZD2ferf9w6kB8WydBRWwPtE4a7948PRsYgBBVY6KAsw1CiMsjbrMit2e8stqRJmGdTe6jamKeNYDR5in",
  "key14": "224AQi4NSdeueMmhakGxUQwqsaYYuCATXervUNZq8G3XyHjG5BGYkv3TUaRg5TjZZgAeotaF9WfW2KRRYXmMdaz2",
  "key15": "5gXLgJ2CX4kNdwANMCQLbD5Sk4YAyehSpUqxnKjSp1yExKk3J1dzjYLM77pQM9QHnJkfetgPiibPXAjRrFyXEagC",
  "key16": "4JcGSrQDaJEUavZnm3BnaLnH7CHxw8AMXdSxEcJLbfgTzPWNAyr6vTDtnxzJHKjhsEwSpFbjRFpwBV7t4Ms4RUed",
  "key17": "3aQgVJRq3P6LkKnvdGbE9pSzXPh7CHfhPLZcjkVbbz68pqHDAt2ktoQNMcYFWCcZYAhsYb4WhinWxut1kbah84Ga",
  "key18": "57Gpg1ngajkjeEnGV6AeREetudBYGuN6dDtcHQTqgsu5fgwZpqTi2qP4esnSE1tiLxm9EfnDC2h7MqkPA3XWr2qz",
  "key19": "3n1FTnjCQa4oXTunwS4j4pjBxmiTdqsmUqUaZpXDZE5ftEfP6h1S8KuZeMw6fn8dZxDPxLuNKVVvgGm1fYJvHNmF",
  "key20": "2ip7bJWVGqTyEsmgBLBoy1LNK3ESFo3Q5UknkeuArJ9TpRD3iV7bvcnnStWUX4xhkPxeUmKkdyjaXqAVxkwU45wd",
  "key21": "4yj5Wedic1EHqUixwFnwGR4DzGn7iKAqSZniU84Q8U2pqvDuMn9MjHbpTbFV9LUHPqR5oqhSxkfbqJVffUS3Xmgu",
  "key22": "2e82EfwpMoZvJhd3Ch5N8ou8mzYFnyxK2hdq3aTgDrnZqb4ZTABfb4dnMZ3BStGod5qZHkpuyP8ZgF21CMzSZ5Aj",
  "key23": "21259yq8owETUFGRN7fS98B4xgYUN7gX5kEZve87kELVvUBTCUwvpdAvTrDfWj1ayk8BLdCR1sPHPQugqqQXHrvo",
  "key24": "5LjbHXif3NQyWwhQQ6awzNZfB1X9vz3VQDq5Xp51XyC4uq8LXNvtaLw56PA7BXVnRN36Mts7DGkBv9sDyV2zeFWn",
  "key25": "U3m1a8eCQd1MD9fw4QYjpcMiYU7bAUWdgWR539ZVubPmqSvvNfKL5hbPbUEhX7uYFP5SnAPJwiDjVFh4TftfJWp",
  "key26": "47yf2ojfA9vkemWSfapYNHdTEopqrdwqfa7BZLNQZjC1wJPxtBfpRni1DJxZ5jswwkejSmaPqWxh8vhUqyoREy5s",
  "key27": "2dy5hNJ7H4fe1rpkcaxwSyxV3R48t1BHKfNF2xoMJ5YL6FwAnt7ZGp3WbUY7wiPrtt1136Q9LtQruiCM44JyUdbT",
  "key28": "4e5J1AAe8nehvMdkSPJ9ppMJBSvDtunqnTrayi8wXpCCvcL8wVFLuz4bBChdpHB2hRpH1a5oLhNP6MaCNpFugvk1",
  "key29": "2ZBvZxDSt5qLGvpPaoH8WMHfRzEnW6N2r6C9c98gu73dE8NkcpZa5Pxxk1tnR1or82NHdZHwKqXsgRvdq64AoLYA",
  "key30": "YnBF8wZJyefH1adACixiznZG6PoyRAt4o1SAk1gKDe25NtLoULJjBA12UnL5xysrodT14w878Hw5MMoJPpmpHUb",
  "key31": "5NEnbnTQ4QdaMuh2u69BRNvBG91yS3CjiyttSCEZCaNoXHLTgUiSiHLZUy7HCN6soRh3UjiAM4w7a1R5vedVr2Cf",
  "key32": "28j5VPmVPmWNoA8nhPKWStDBCxdw7ayyjrNdFXRPHwxhdBKTnfS5zppi4GFqt4nuiJSdixVzd3zvfnYEAnZGnmJ3",
  "key33": "416cMGtcbBnYvotCCt8rxanmAx1h8xCfE1TubZWiydU2v4UdYbz1ehdH6RrHGioJu1gNZLaVqQbgXACjwFnrNhAn",
  "key34": "62R6mULCmV9YBqg7AJyDkAsTHZcu6KHMTdYjKPzK9tRNem9d2MoBz3hCWTRw1aGtp5x6qZpH4heteVMS6MJhYe1D",
  "key35": "35j3mFbr7UQVV5Uoms3XG9hq5xNUcU6PZvtLuE7CE4D21iKHNyQn5aJ2SndDAT7MY5E7RcXL5fLogQAJHNVENJwa",
  "key36": "4bCyUbSdE2bjHAtXGN3oGP8m2zk7ML9GsTvxbhn8eXJJEoxBimngbSNMbPmwSB4nQwZT1sDxnJpKTZK6y2FPJMvH",
  "key37": "XAAoxFGySWjpJafaBc4vKrEydhtoZMor1xip6bYH9TB6QaQ5z5kLJgM9gXursZ4imvRUVm9vrf1aukgN4kGMrii"
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
