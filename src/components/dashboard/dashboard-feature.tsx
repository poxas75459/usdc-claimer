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
    "37wBbkq8zedjheYWftEm8uzoP4rY3FLkRC6iMGCAWKn4RqjQjtBH2pF4vXBsX94UaALUpUktrrxAj6XeLTAdHKuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CbGqzyD5Lb7SBGHahA95Wwz3BpMzuEGr9FGtMxgNY7DrK94mwhHpBL37aMqxMRgtDBEhqqrqEmPGa2bP7M1T3YR",
  "key1": "2r4Ss6xY6stwMKpVYa576a88a4bFo697uPXfKUyddd3N4VqC91ddwteRwY2spk4WVabfCjdpDNC1YnmNoqvsZCXX",
  "key2": "4oAAjfNBhmi1h8pzxeLui49vYm4xdUp8cZUKpjZk5ES8nozpy9irZ52ML3UpzFfpotnVmRG31KdmbFPd9FAgJMTW",
  "key3": "4z5urGzDpMCJ8xhgGz7tit1P9DcNPEsXFcRqKcvAdFwLUdpqwNZUErHqm9tkqPysNZWMQcA4PFhXNEjFDesq8PZH",
  "key4": "2UfxeNPQ8yLssfBx4DpxXfg8qRUpsSgYM4S5674hR1Y7wE2u5h46WrKDkBSp8xTG8PPgj3K2Evsu1y4GSHMGtPgG",
  "key5": "2ppCPa8TG7dipJNadn8gGNiQRQaEangJkBP5EwL1SF522tayGoXePuDgiss54oMnmjbC1Kr4cBQNUjTcQcucjCkB",
  "key6": "4wmdqW9r5Hho1rMYPmvmBUvPj3cytJ67CvYzEWAoGMfMxM2ve7qxG4EfCT9oA6Fc3npf5sP4wK2vCH2i8yiQeXEa",
  "key7": "4LjpeTrCMk3mVYLZaJcNaXJcQL6TtHrvkJeKL2phTY3sfoW6PHuNHCMyoPnZJu3cNnt8LUGNDM9A5N6SYYUsQEvs",
  "key8": "ipSC2UGiDrM1zr37jhwumaWTXoJCRjWChn4eeTAeQW9w5gddDr27n2ZKn9jtETMbTxPuwJKiJmHf4LU5UrHGNk8",
  "key9": "3YWsxJ29MerPnhnk744rL2YexRXKF13BNswQCqQQoQyNfAxB7ziqCrjjv8DuuhbSZgzV3sNFruemfU25t4CqfcNS",
  "key10": "4iKG1HjzYvEbePRPsragDqrskUhKwbPmL93mAgzf3FYTTnzS38dG1PqQaosZ4pLksVodrtQfbJznZAFZTEPVTP94",
  "key11": "3kVihEJnWpiZJsY8h1pyXPQGKY7vvvsLJRh7eWtsM18EGzcX3LJYXShbGuJ35RLFmxBYb56npetysT3y8ZscpZ7J",
  "key12": "2Sf7J4bFUHGmDsaMiUtwFYR62VyXjpWH5C8oa3aDvGxoEpnHh3NneGmfzJDpDPCyS8rPpDCEVqgrzeGYkffKQvpJ",
  "key13": "23a7SogFHS6RLkux9u9UtQruLmH3XojubeL4q5A3uzManHUUBh4NxoE4mCJ7mnJWwB18eVMxyCC8Hy4d52zr5e8Z",
  "key14": "45K8tC9SnDUv44K11emeLQVcraJrEa6PVrTmy45H6z21mMqxsg7YUQ95D8ZBGR7cx5HaVsyaDSjipaHmqXPd6wgC",
  "key15": "rAfCm5ev75APWwEzFTejsgkibEoW8udcDGfUQ89gwYu9uCLAosTB1wtwy6toCfSJVnFo5re5NWvvyZVcXv92K2Y",
  "key16": "3M358VcHZ1fWneZsy5R47Rb1YdeqeVdH6Uv43ahif8B99eNUhUbZkRKENZq6wCpjri3FX7XTKd5AeDJpPMNp3FMX",
  "key17": "3qQUQhm719N4hVQ1oUzLVsGUJcVTKdxpRryzqdAPjY9GUrPpckWTJKDCYRUSazKCa7h8sF4umeP5vr2SUzsBdJbc",
  "key18": "31LdQVV7nJexknCiLowDukF3DgER6RX2J3V2P3NkZYDcd23fd74BixN1QPqfemRj1gbbjT49wZRfPQk4t1gPw3pd",
  "key19": "GVdjsGrzDrfDjiQ8JCyEgyn952YjNP6xMVXrEcgek7Tsr5B3SXnGrASHKkWG6B1wbvs1CQPW2hxLS6zMiJnqekS",
  "key20": "2D2CUpSEmvRVJPYVzmLHNyyoBZ5DZXJKJ5dSrrgzDxtWAiUgQJmdJAU4xsjw4m47VimNXgvnMSateKiYgmFxgPx",
  "key21": "5bz8U9QFCcJvBUesgUc4ZFhfiY5VZNJe185zghPNmwSf4FMx4FxPQ2V6w9Y2nKT83Qqsm9S96JzMT2sbah3bohkL",
  "key22": "K5sRkABDFyvRW9vqQ6U9Q6TPkSrGdku1WLdYS4MCTUuup4wFKVoTFoURbXfNpp4vrAGNovcqi9YF9gjyP88yohx",
  "key23": "3mULxzsjvhh8Dwc4aUodzx42GP6surMj79iTjqTWVDsFBtAcTcveiJaqu4T93kVFur51iqVwc48szSHt6EGHEAo6",
  "key24": "37hUsGbqwunA5jHAXahVweNVuKSuHrDcngu89xTawJZfoFfkSJ7Meyd843gbgqDQCXp73NhRuYih28s6VmYmNJc2",
  "key25": "5wVvneWE4mg98ZAaafWpcRgbpXaxAopXuFkZcT2ctoevY9hJqCY3EoQfVGZA7j7NwZtv2zYnRPw9mpN6cYKvasqP",
  "key26": "3UsMGhoheLATyxbGbVWhWTTquDJrGWtYqy5AjKT55kksUCDUiHSxiuAU5QkwGxTGeg88YdaLXrg2awVb9xV1rGwW",
  "key27": "3bSiU6udi8zdY12U16wQHLRuicrjvxqeGrzZ3yotZUJRQKjWc6Kr8auV2QjHbVZ5iwvbJFmGH6wKnMdp4QN84MQB"
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
