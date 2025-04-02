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
    "64d9rs5m55rHiCiVT3SzJJ6KQ9CE5NHb8gxBSq8hM4hU3zuqKpUHcViaZVUcsud1TKJm6gCNY8WziMBzXizUkFcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLQqeCMbSq7KEVDtKi4CdSbpqjF9ycjiLzEz5aTrDnzWCPtgmEb8yu4gyJ5XPEfosNvjyfR2BJzKf3DfoquWjps",
  "key1": "Tx93H1gciRH8YvideBjY7byeuY5tAKK6qyqRbqaToMXtAzfgyCWewaTBiGkbdCpKCLsaF4SViHPJ577r9MYsX1j",
  "key2": "4Cwz4A8uogsTVtej3W3TkG7zvMeLxGVfYoHmysZhhdfFT78zvu3AhesdMucPYApnJCWHibENtmqHWXcdk9WudTjJ",
  "key3": "4tFSNvBCZ2eY7QuUKaSDfTWHHA3cMhUqK2qYxt8iTYL8HBXjer71Jj8KAsaL6S33ojk9kmWtHvkBkLU7nRjDmpLJ",
  "key4": "4eJMr2FhvXF7bkaVKSE362o8ed88aTJp5maAUE4cSBG8FS5Jcw74EzUhhzLuaUGCEvZ4mU64UxZBYxDcCEAttK3f",
  "key5": "2GRMFzE8fj9JyRQNnppXjvAd916YSNSBEjQExTarE9XzFPfsrRWffu1NhENPhcqRmPF86PJxJEryDNptjj9Y6F3",
  "key6": "BYqvt3cDd6CWi47GQ5CF4iUJR3vXGd5PnhqaKZVkGxoEjg6JnDsvEACPQFv1joqYvq1oEKeL1mppFEDMdAV7jVv",
  "key7": "mQ58GV5bAY8rdDVZp2KWmZ2Z7utJXLrwMN3BCGpSLbctFTzc8NKPBU1rHw8EZ9QTouxEEV8N9MLvotkaDT3fkgW",
  "key8": "MBE2sEhNyFvs46NJmWDmQaYMeCZgZE2jEbZZLvcp4RD8qwCRrbmXtMzFQzwsE8MMfk2UwHhz7535gz2w6XVrgTY",
  "key9": "RFeZrYVqj5nmefPYKz7QdMNmS5XbScs26PsLKfbY3mYXb1x7JofQ9zbRRNKzFQPTq4DwCwuBhjS3WaThVZKtQUv",
  "key10": "4VxS2Hj135B48SjUYuzobcSgrr1i9QuZHi6ErMCm5DpzuRUJuS8eFpYKF36WczeVh1JPentyp4Y1aF6azK3dc9ow",
  "key11": "5n1rMb7wxvFemirZkqvpKX7uwwpbiicRFoYBy75Cqc4Mx48byG5UcG86VhNwM99zaiEF6ax88uS47M59WN1iATyG",
  "key12": "3DGGpbWGvmnGwjfWZHiegwviGCqk13gjirMVGz5nZEMXoRwgDN9gssmDXJ7pTC5z8oMUtAmhTMrg5pM6VSFuGH7e",
  "key13": "526fScs6auJX25Q1s5CvjNbckTFdsMk8KbB5w3scLQEq7LkrpsHpnM5HZc3Z6rvk7t1ppUJqSv3oxnQuTZqwxPBZ",
  "key14": "4xXK49cMHExy8NW427hk4Ec1sbBS5nGhdyE73JGhEnqC1EGi8Wkv99yinC18W76GNEVjUbJTCgSN3iNb7xM5c3xY",
  "key15": "2PUwLpcnt2qxQQx1vdHYyjGj9XKsNoEspYJsDimwoTUAz5KPDPstYnjHx9nW5gVTHw4TQYJhkxjU6p4PvGrT87NN",
  "key16": "5SaW4dcDZYs88aiPa9MUZeDLZnAdta46rRKUPSD5xpo1C4Rxv4YWxxbDuBwydNkhim4txwqAc6YQa5XFqbuhp7Zi",
  "key17": "BpiTq5P8KCnJkWLVLtixuMVsLnXA2agrAD3AXMzMTn8HYdPmRvhSV1ssbpUcGCRBNrnjVvj798QnnApoPBZRbBf",
  "key18": "5YPBErSdBtfweaQrL2uesAAoZurZ5z3RfK6YnRk7WiZ4u1ZfwbHC5BwMZmENrjwxzeJc6JzgtmFX7YZfn5gnXWTm",
  "key19": "fpvTLgya8Crm4FEZSKXqRuxqLkXCneQxK9NkVC6p87WuDM7k7dfDHovXR96NwJTK3aZGPGyZsyedSLu1kkGp6Rh",
  "key20": "48X5UNc9LiVTdYJ38ZorAoa7FQQUj4va38Yq3fGGTB6ZvfE3BeJWw7pSGCosGFSUGVhYzpbPd87T85wBfN9xfc8m",
  "key21": "5UzEh2hYgdAVayafm6q5bbbvvA7MhkKXWTPz5hPioW92NXWQwndtiRKX14NHSd7T3BCkwDfB1S46ZctrKSdBn7VR",
  "key22": "5Jjd6FdAFY23s3KMU9S6netEYg1vHHRexnW8YF1fDwdvUymAinZ2tqa9gwURjkhvBsBHQQQGf84GZjCJX7k2G23w",
  "key23": "2UYvHLCnkhSRbjG15YUGi4arYEf7YPNe2WQHe9aSnKJenDucYAWJxxbUhXjhTwaNzoPoRdwRyQ79kXBhndcnBKtN",
  "key24": "5ooBkWppK2Cd63nFPsQu32s3168T8jF4gvLMnNoodvHiYKZm1ELk6wnNEmCvwf8oQApkLnJTDi1ieYPHLbugmf26",
  "key25": "4XsLLzE3iAvYb5busNBhka9LVdkzeLPWAuhfR1xfcKa18AUjoZ8VEfcj8K4d6T2UPVBQhURNN1Py1xfEPDffLWJM",
  "key26": "2KjBD8kkxC3Ba25oHcnoDYk1rm7uiCtghin1HUCHEmPh63fJm3ZecwBQaH7rXzwGqBxcJaX3Hj9u2iqLF9GcRd6j",
  "key27": "5UiguUaaaAFmC1u3pnFx54a27TZCCwUduhbu8x8oPrKefRPFNooFi3onW1oZWNF48RgTkNYoQ7YvNTSYiYdsTYhS",
  "key28": "t22XRacpWp9sakHugnsFAtTWhVTKDjFTPzyqGga6Yb6tjZH1PNFxAiLRfQfvdDkQhKiXcjye15VQFDoef6GazmQ",
  "key29": "5JasHCVG8yVfNmz5L6nLTUEzyTa2BQerHFtYggSAs2JfHFE1vrHcjoZGmL5Yh6t8zNBT9JWbqykLFqQrCequaJfV",
  "key30": "2J3SZt1ii1nxPUxyrKNfau6UjWD69XF4tbTAUZJ5QsNHp29t9XSaeEsRSKpU4Mja1TmSHTxLHdfLLVN5GwrZiZ9H",
  "key31": "4hC7Lz4Qm4HwXkwqRLLaymW9P21e3ZP9dLFhfVacMZo52TuKSKDjA5sLMubTAhPZ8R8EdAfjSxXX1tRLKQwyJbn2",
  "key32": "2CsBSs6tNHyCAAkKh5LtcDTjFifKmXUMUEARb95iU9mQY384jDKmT91wZ18FgEpMvcTNLsacKcEtRfvE6WRp2fgL",
  "key33": "4arsMV5s6KEfC6PiMPsxRueVzUdjpt99hedGAEee85W1Mg3RhCuDBiM1eMQsv3AzZG3uYNdJcf8BYFpPEgDYtyQV",
  "key34": "sNYPHXjGzVoTcPFyRPtF8gdztZQn5KFaeGJABPKHVVLzwbbNfepPCqwp6QW9b8CNjv9zmxiunrTugGsoFp6tGDs",
  "key35": "2R5VNPyogWuFHRsZZ7AHtcZDZs9GzZER9v7bN3cMnXbfVF5nPt6CkC2SjYPbVna7XvCiYTCQTCpLXZFAH8FZTf5X",
  "key36": "22xM6kHg3QkHUHLNzJaZ3mJZMXfSPDULSTrZa4RhSe3jrZnhQuHTpz7wV27T4bJdax2EUv5eBkwrCeenGW5MYdx7",
  "key37": "4nat63uCiW4hcp6snAHqdjjZVBNtye3dvfFEYQa2X3qmTpN7aSmbtxVZAvBUxfMFm5CRFjaC5QSSwaaNLhUVGQwm",
  "key38": "WqsUm6SsJE7aQvwPPisKVnKximeNUYhKur7sMKGNsc49mHY2yyaAkE6dGkANkGWQgHiWtguX9XTD7xw7Dw2Dogc",
  "key39": "2D6Hp7Ce2Gemv9hihE2UwAntb8uZpN613kEaZhFCBxjaNm1bzwS2sEw4yMFxWJrPuDsbdfMupPoFGUbVi2sy1seb",
  "key40": "5tHj7TSB34g1vqXFnxSZRG2RoPn1Ey4D4pwh2H2UUcQ9MskMyXvWzcmxaPsNf8eJoqUJf5U57jaG6wnVLPkv9gBU",
  "key41": "5tEtWnGPtHHBDH94eRW9n8pGi31t8ugBA2TFj613vmHhmdvawDGVpAyeHVw6rE4NjDvddYZ7UEN2BUnVTpJammQP",
  "key42": "3dUTyqkvh6SYt2NwnFLCe2sBKRVNcmxwDknEWDtB91dDn6sF1vDGDu7jMUY4bk5EFLDFHS6aazZTcRiybZAH3KHL"
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
