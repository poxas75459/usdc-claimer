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
    "2sLpcNxnGEDeuYeDTgs65xBWP6PQD4WivxuDap4fFqbqrLZdvnWNNvjMS1b1jU8ijmihUTxWg9iN5ZsUAbbCTHfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MY5UR6kbNyCWqe4c6sD9zFbN1DYk2A1fTXYWjxH4JWcP7qsY2PBEm9tZdLZio1HXSK7a97UpwZmGhmQvgdQyskT",
  "key1": "vGp1YdPFvqbPqQYoAiYaosJthqPQsyTPLw6WdU1MiNwXaY6oBHasggzgDFUTFd72RyK4CgPk6iDuGAG4E3xe7Lq",
  "key2": "5bzopb76SK8MmoQUHHgZ1C3oAR35HErsdwL76SxnqVH5Bjbc9vY3qt65EUeZ2xmF4j7HEkjuNTkKv7ukAyEhs3FL",
  "key3": "3zASz7JfVX22LB4ghqRCnfj1Y61AYsPAsJoAQqqqhge1UynMLhQUQyJDAtPrwAmPMjmZnByHWZXJMqWEyYxmSidr",
  "key4": "5qyoGdZwiagifuRi6hRGLfp1vXA2p7kxhaYVkANCYpgnC1vy5oFhkFBUG9CQnZjgHypXPsmea52VxL7mFcA3Maf2",
  "key5": "3xxpRzJKdkeJY3hRYHoZ4Gexuk3AEwX6gnjxHjUSjdk6Tg1eWRGQRPGFxJhh7cAeGF4FKHttxgktAuscKGKL7YVy",
  "key6": "2ufYz86PDqSA7usa6FALpTsxv3wmHdNcRg9TBNuFnQW8qwWghcnB1HvGsmzM4Dk5iQavrN8oxNYe283JXPesKJeG",
  "key7": "Rjc1vNSXhQ5rzpjQDwUeuZryuo7eUxEVqTv1Dg532GF9uq9yPZwdWanTmKMdVGeVMHfR6YLa9SQw9fdxtWPxJTW",
  "key8": "2QkRpSCHRPtGzvPPJL7Ko5vHokKWChS6qS9683uLNfSG4Yhd7QhNKxLqrzBC43Jyq2QMRqMx98xn1uFdK7fZNqx2",
  "key9": "2AQhzw6noChEkXTZ4SrvsF2JrrR6g5k1AZxVURkMvVwJsVrynQfbpwdV79ZFPvf8Pw31QFkhAxU4nfTE3BDZ4bfr",
  "key10": "tCmDP5vmSXCGTVhMcXds7V9z9rcASBsbooj8rUzphTdRMmLceqpcc6UbpPZo5ERunJTAPFU6BLeT2KFVgSfW3Hh",
  "key11": "5jwqJutE7ecr3DY4NGfRQuXLR1XcToDaDoM9sHdmXf5tC3bYDwdzGohJNnw7n2wofwj2Pou19SKc8PMX8yMPwpjS",
  "key12": "4VLphnn1cu4MuG5wr7iwQrH2u7eEwNsddCbvA3VfgtHkBznvxsG2QuSnK6b96R9VvVkdspFzJEush8xvszVxFW8m",
  "key13": "2t69f4Z9VmUZhxYt8FCUds1PmZYny3UPmadt5pxNky7ce5AFWxGYWunhf2h5inUxS3ZoydujsRGT1jKwJU2RCABb",
  "key14": "5qVZsobBuGXbwTzuuArxewqwPnzUp4f3A5N6x9AcqeBA7eR6rMu1A3SXjGDLfUMKpUMtG8ygA7FmQ8SBd3EwHAiQ",
  "key15": "2nGcw5c4gnnsLSB2VNnr1FmdC8fnYRztwzPC2zFBgv6SUZSRq9aBgri2mJLxwHefNfSfuT2ZJ9VkHhqm2UzokZyc",
  "key16": "NjYaV8mP6cj6AyhBWYzw8hk1G1DUWAhVp5HhpHnaJ9QzobbymhMNDeBzbx2pEKEuuxPT5JSsHhKGpzkKvQeZTfw",
  "key17": "3SbpMzurotcGXYJvqPd5mWENSzedaXm687fgy4aGPuToqWcMfn3PC6kb449FUtubYZtJKY1hCMPYcvR1sC6UAhwx",
  "key18": "3tReMD8pY8SxHo8UDi2gvEvSQFQMyCt2ExxioDzkWnD8ZHcZw4zgDanfAr7qRa4nsuqht6mgDDGEMRGYsxw21Lw9",
  "key19": "4AuaKuj5QufR6ZxWL2doJwd7UNEpJWQYCybqjJ1nPV7ke2R3eCLFquvFzkJ5DbAkEmG4tFWFidHT9Tpd6GaDwjV2",
  "key20": "292mdSjHSe4SPC9tA35uVcnbXyCQhTSmenyLJBAvkZqqZRVkTRrjCqR87QADg3oRavZK4LmR1Tpit5F18bwYeu8G",
  "key21": "StS15BwdsWjmE4iFmr2WcR5coYMSMhFrCWeZ2feuooe9Ur6SafiXY6tBgXWqpi393LW8GeYHAkSyrpfTxVUWHFK",
  "key22": "34YxcU7XBZ9aoebq59PnzSUTKyiFe3JdcZbKzLbeQFvuTGDW929CmJgpFqdicteVxqbyH5fV1dnwknMfimJF3RtH",
  "key23": "3vu5dPGSFEuRQPZ1Cpj3XFTEUk26jdvSqG4WMQtzdVZnvKgGX2pw3LpXDPZdrBp2k4rHg3nLNdu7R7nfhYZndDea",
  "key24": "4mJhZPkDMG5iqzwuhaEcJtt9EJ1uCxaV1YhZ9VAmoLJDXUGPogLemJkFgzSiMaiBxWqnDqzJAkhHcyGuUYAtDrma",
  "key25": "55cjRVxpqW4kKhiS71dK2881rjPz7ysnB1N2uzqkWGtiq5sJwkcBTc2wZrd1qXZyDdZZvt7pvHf2Js6semmaUoCx",
  "key26": "2iJVN5RFbnQGYEBviKfgVMye7CRaCYkmZiPLvJLLXyPfps1N5188kCvvBgyCwXynZznA7KKb2mWwQf23Z3k17M19",
  "key27": "5tKWEzprrs656i58nbcfGFAMvT5NMuVRWLT7mLNPZPpgrga1FVVwZZ8T1NFx1aC6wtGrQkqrt22rKL493YQBVBXG",
  "key28": "4Fss7sjxQdTVgoG3Z3SDvrETMBd54fNUFcqpwdmoWXgch6iNss7sEzfQER2t4VUS5Pz8LkgZLRj1SL68AkKsk61Y",
  "key29": "2XAdCgysimAJpkQ1aEzzysR1LR4Y5sKP44zarQ2DrZ8ErgCb4PyDuJFaVycX239AWPeQNB2wyiJouBd8Ao5Wsdwz",
  "key30": "4WrgCFz1gAov7R5cAk1AHajGjtmhJnbYP2LescG4gD7apXDQy9eS4QbdBeF9YDWuJRwbdSa978YYaGiBQ973myFq",
  "key31": "3DDGWPz4anF7c6tyQG46Ba2eeqjjYvnWsLGj4Ly1FPLYpFyFb1vtgo5Vj9Dhunpj3NF7jjFrjjthTM6NLrN7TkWn"
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
