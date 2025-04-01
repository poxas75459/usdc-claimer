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
    "4PCpWzN8KHLuZ73eqdWDSWpm4rAXtXqJcoHp9xxBbuuC8X5C97DowUdJpDfHu9NfEBvNTWXhGpt7CeCmY9SgGkUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGoDPQbQDPmdBBX6knZ35CrHTZcZDCNRc8NHSoKM5Pyg2YmSFH2Y1wbzTsWQJj63uJAKPMzprm6T4QzWRT54rdi",
  "key1": "2Gf3Rh1QPFZM5JpxJDsVEfYLXA9wqFqiajn4A2R17ocVGaZ6oZAa9jTejTnsoP9pqetQBHUshN2mZuG9SuprsXVq",
  "key2": "56nEAYVK8WBDvNed3G5oniLVPHytXjhRv1PfZCfpXEtPSofqg6f2iB7X6tansDAPR7CEBGNmenSmVvs2rNd4y8eu",
  "key3": "5UPdeuoexs3D5PR7JHoTUemvQRbbCRdEMEuUMCouUqVpTgyysaTf3pmhB4SVvyMd4DdvQxp4gwaSVCGF6672Xg7m",
  "key4": "5YNSLTdn7hja5f4VwfxAs3Ba7YqRV973btUjgw4q33ydDeDXMPxc2SUkBa7cyAmgH9uXuvH5RcoebfxHJ7yyWK2V",
  "key5": "2ZZjBXctEEJGEMe5BksGKNdfVx91bDs6TvSs8GPP7oWP7A3qqZud73XLyfLLugLchmxdjRJkLvS1mz2K4bqfGdMj",
  "key6": "rSw7Yu19brnmUDybnfKzv821g1HmnYGXJovjjPU2U1nPs8nExyAfmoHVTQJ1pApXJzhtVzmH6SxfeoeqEuXrbBg",
  "key7": "2GmgX9qTqnmukcJ55Lw9aEwqjWHKwUP8i7msa9LHPtfepki16hzEU3iKVDdz73vtmtt1xN5ZkLNRpJ7rVh7xE7X5",
  "key8": "3zSsuN5afgM96AtVrimzLtog2GkXHdCubqnG5fHdgz6bYzWeRhEiXNFqq3te4EhtWgdzosck7VC4Huzn96Y7z8Fp",
  "key9": "67bCgDyZgHQ2BKyCoxzjo9KzV43EZQEnxDvUC6H7HzNHF9gNF9TG3kSLQWaPbk7eSKBEsHWsewuHFDM555byYL2Q",
  "key10": "Fa5Zx3UpLsApHo4n2Nc86XM2MmaUqwyChesSgtBbXLuL9gnAsdTja797RLnKRzpJLwkGyRrGHDHBrBE6xhPMJeo",
  "key11": "5bfi1PKnwHQW1griNvBgidYAPQQRQu4mDUVrBLacfjqzGRjNFxsHusSKa6t5mB8FqNQRRwdWS8fGW7H9QLNW52m3",
  "key12": "2LEhqzxotjV9ARddtjxSpAijoSH3FKZrUQ7wYdPVubqkxFsUFFWSrmUKzgWa913Ksf88hZNehzeWvVxtPcnMeHP2",
  "key13": "24fe3ZLbZZuYjTkndKv9pQ9uEuDiW3b7bCFkBjFABqE88Bik5utuu2BBHZUGFeHGYkD138Wu2kSQWssjj1Hwgwx7",
  "key14": "CjnxdAuWkmxb95VcqEv39TE1eGWkH2JeuYnaGrZnZ36BvxSPGcTi7MD5owehbYNX6m6PrQyFSuXiR3K7aQttLcK",
  "key15": "5fM9gndsE17QemZtVkwx9AkY1Jiycr8ASAAU21hUDoZUWaRVcPL5mN6XjTrHCKZF3TwihiLTefR3bPzVGNdUmVpW",
  "key16": "crED8useetFwarxmRPmknUe2GUXQXtDs7i5f3F9jrDxbKf8WfE6ejZ2LHTmRTkANGpE42LUwsPtGxY2BbCxWRnA",
  "key17": "2gmUfTwvgSZ3CnMFVeE4raSCmoZ1aS7FsKJ62rL2FeUnky9hNb9hF3CKuputHjSEEVMiRKFYX6GWVU4dV7y9FgGi",
  "key18": "51mNnXLVH7dmExahdPbiwyn2aipry6HN27CwetqYcVY7HX93pHNfwtx52kNLUJKmL9YPUmwTe4JxgGujhbjTrYKs",
  "key19": "4BcGTDk3HVzfLpDaAf6WYSRkJtAVH72Q49c9zr6kMF3hJh7jgmXvRMoWV4gNtrduBQUWJmNSWiRhc3gaq9zfJ7we",
  "key20": "3zLLAARJHnFPv5Ey32pspzXkqxJiqUHrGJ7jXPRsNVpwSLYSSWYoSXUjwipwAviRw8UvxwBP26RauncjB6PCCigX",
  "key21": "kTZGMWX9nuUNgKnkdXVS2WhXXc5Ljszk8JNYSJMqmzzExL9tLUmJpAi8aWKU1NiKX8R1onBiMq6YSWVE4jWGrxo",
  "key22": "5R1u8vAefxa3Vbsn2C4NsrUy47B2tY4uVKVPCPu3cHuSb5PQu7H3JAF7BC6sMX8QL9rtqtvfThUK6sKGeHNEhPJX",
  "key23": "4v9VDr9RefdNtHikAsVEnCzn1c6J7bum4jnbdWSCN61YseNbZhQ8GKicMZCSYczaq95P5EENBj9H8Jetf3dH7gXs",
  "key24": "5tgyyuoFFXjPqETaQ7AdU6UjPzWqSYQtL1hYPXRSxquaKfVjNwuTqc6S1WDc9JRwM7BowBqxZgsLDfRfTJCPiCwU",
  "key25": "4T71vfaQ8HHENgbrLibwNRUojtNAC5xw877BJHYjbUXjTMUEQEoNn5eUAFRi1UFLxNwYZRP97cNN7p3EmPvHjjYi",
  "key26": "5EyvTnFT2P43dLsS5i3rcmC3p4DPtdQD53XPaTDhmDUKPr6q3MDkw6aaVdezTi78TBC7FJ1FQRGiYxhAzUanbJDY",
  "key27": "4MGKXrzQEVUMNp4QDZZMNNU39CDUiYHEfE8orMgLLDsBBVNzA7NFcRyHmN4RmWpRdgmro7EMJew7Rkg5Zyau3Zb6",
  "key28": "2igNXzAzDtRstgM3DhUgbQ6zhgQgXNBTYGbxymcEnhk6BpiyQCDzv2r9qLBpcmPg8FnwDc9eakCeSxAig9YVHPpZ",
  "key29": "3R5MSi4JDhy2mdbnca1Liu7DeHPdrAvyrGwZV2VPGCjuSXv5dmkqcpGk3fwk7qnicGLgBTeyE577yXBjdLHhaq4U",
  "key30": "5TrHupmtj7E2PFQud6WgeqR1gfBSCUZ7GjMpFnY3gFaXSLKNFnKtFcsKhqw1h8QeMSrsXn2Z3zFF9Ebwz9yqMpU4",
  "key31": "48wSeS4ugNyvPsNFbAMxMxNRAhmzjMQGKWt9WT1xMojWDQfK73S7P5S2ziWXoyvZnd1XYhWK1H4H4GHEQ5ivVuWc",
  "key32": "5ewRuAmzduyEz6wt7eSRwwvS4V5fNHoUpL2y4gQDbN8C1skPdZ9MC5xfECm2TK3dzqm96dSF1hrCvUhySk8zoHcZ",
  "key33": "2EgMoEV6du83HZsEdpXnCuLFFtnRfxWmwyvfnSqT1Aee825fTtjTHe6R48Dhi8HbtSLDhsdE4ZSVx1MoxaA9JTKE",
  "key34": "4Djr5L5cAwnYVBRJoebVsa79BHt5U7BEPN1Q5XMTBDRYD5GZeHX6hKiy1EeuVEPZsPUN4eEdtwFycgY4jMAvm89F"
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
