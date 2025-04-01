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
    "43K9K6mzKMR1GGUgxy3BxKBfTKi2vtUoZGXCjYpxXmQ3XU3Kek6MYUkRFBhmNNPdBwrJF11L2gBp7E84nVm5JQ2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6aP7WuMH7Zd5ByNdq4rvZamgeKhG657XKiNF7Ti44sDeBu8Mo7ay4h645xDmzDT61HGRwE4cnTo7cGXTWgeZnZJ",
  "key1": "3jq82ZDskF3Y7xsPXWnX5XPyHv7EymhCYCTs3Z3gRfs6WSeqFfyVudBQ94yX2PAMyrjTZ45NuaK1pnx11dQstAuL",
  "key2": "3AVDGGvEXmty34FU7srDeghPEFqtb2pACkZtAdNETFJrsfvuiDC8shoWYKZKPk2JZH8nG5N48HYKBtbU8WD26S6W",
  "key3": "2fw7RDk4Pqe5FX1EsQzcbZuS9ZRjTXXUmjdqqa6fDs4Qo8EAj11131EpGbb1qwTVwQF1RenacEHwCka9fbpLvL4m",
  "key4": "91Wn1x1wComXkVWwSXVzGL72wdL4QXq3hv9hVpBGstyYf8PdpAFomg4wrgciwz4rQha8zCnuTfTX7XK27mugo3a",
  "key5": "2Wj7sC6aofE3fV5vBdPgMSYYewvWsgKuvyiX4K7jMpjNCY1r5fWof7MHyaMmTBTHeNjmijwc3JmVkzC5Au6AsqPP",
  "key6": "3NqjwKrEGi4CCTiSA6Mas8n8HTGzRFTRvw6icxG2xrcKxHTZRX1ae2f6qBkJ8QZWZ5C8EJXrTy5yidUw3LdQgtUH",
  "key7": "3a8JBXPtabRyLQp2wf4XnR9vhBVLWvocH8DMggAeTpF7Szn1tXoMHw4GWd2Z7UbEdQAybGDUKz2tihVpf3zZuM8r",
  "key8": "paowLtE1oXQPF4Wit7mgk2SHNJNQHoRCgpwARDTiqKUaxsNvgtFu6X1kDJZCfE9bGYGD2qtY19kMU21DJ59CwHB",
  "key9": "2x42PTUY2TEhLCn7wfQzYzqdGW9iSTsuSWnnyZLYGaWXAyDoW5stK3NkDuME3ARhRPMwPtM4nJws3kafY7o2YLRm",
  "key10": "4bQ373swwNMeX4Cd7RcWiGikvWH9AwDkaXb9gmwaGCpiXLk347RtknuavA1Eroqfmw7PeBtbGXWuAYaPpbed8Hwg",
  "key11": "5KHET6UUz19VFmZxrR3EQvmWPvy4LQndhB6V8x1SE9b5n4r5D8Xr5bAc9PZXwbCtm5Fxm4Da6JrWdeZKjfLRggWn",
  "key12": "3G7S16F4X7rbo5oNRmMuABJYk6gpjgpN8ATtXDisRvRpyZqQefAeDReHRsZrbdxMLkhcMi44fbmome9A92S17pUy",
  "key13": "4LwWQYgRk2TtgWmGaqHe4sUBDv4FgpF1Jko8XZKYYs91kw89kP2TQQr8tXzKdhwEi7ZiByP4X5dVSGdMEwXrcQRg",
  "key14": "5KQ73WW5z4LSrcyUWRpE1Hi1rq9b8kT3PTMHzQmxRLj1puD8kAgrLEMVSHD3QYw3fhS5yVGF5usV3QwBakF9raPb",
  "key15": "yVhuiLYHWmzYkJbgSK9QwAzc34ALmcJ9oCW9MQQRXX1vSTcJ1hrYKEz93ZF41HizpX84a5fK7vZVvmjHxNF36sp",
  "key16": "66S1UwoFuLSuToMn5XqPmMp1iTmrwtPhC9gMDrzUP8fmB7FpKYfCUGXhM5WFqUJLExnJGzuG3Q465C5JPiQ5gsN4",
  "key17": "2o5JuVy8xcobt3WkNpRLe4ucxRETVJunsA9JwQE6GizaAHBmf5J6bcyxJZJS4iySP4M8shq1tHiGXcLQU6t3nzbh",
  "key18": "67KkjvL6vV4VyefiYNERpmFDTGFUgMnKxgvBfxrxgir27bGJ4MPipwjrPPDJy7voEw5TKshyGv9rsQYTrwbyg7cg",
  "key19": "2E1zgFSrmeXkeuYrTxCLUctCkpparob1XnUyQ94GSxvjHPfsAzsrXyxFfpkD1t3XDHWnLJoSoeLG9RAf1YAokDzQ",
  "key20": "51r2fVKRYFgWPJHF47nAg4qm9z6e1528Feu4D8HPaVyCL5tLcaH782moDooRkeAgcE57Gyb3ZduNGzPpDHE6Da5h",
  "key21": "5jNbAEbpvTxgYevvxcBhHGDxRRdwFD2Z1QB1WzkzaJT3Lyte8jAKXuJxLse97Uq7p5A7gqjwzeH2ciHZZakinqqs",
  "key22": "645hJsqRVrFp2y6hFTaUdne5NRdGTe3aXYhdF6wniM8PL9D4fkZFnf6A35i5Dz5a1PkAWMun6XotesnzmAPPwfjT",
  "key23": "3BTFUW11Cb1VvHx9FkYvkx2Ehi6PFvZ5qHTqNVGKATDX96nczURL9qyP4y4zAEghSxLDgFNnEJmvWJxKCwFm8LUn",
  "key24": "1WvXL2sJRb9fDp2ZYU1Mgz58EqoDtyz6UB2jVZsDy6YKGWU61ExcpcaLGa6vrhWWTBzh7AYzeo9ZZm6cPTvhPGz",
  "key25": "kyf6pXGtoWLpQjHV2mZU3Fu3aEvfZbAxZvcAQ3AHvjQr9rWsL6eKrxHxF5WSST8tjuMs8YU1xHzFMJ2XHfknxJ9",
  "key26": "3ewCpE3sLwXZcjpm4jiugqh9V8tdsHYPczPJDwoA41rAGGjXSmn427pZGmUm57VRk4Q5LopiDSC7KMkTAEDoeyD",
  "key27": "36hZGJoA2FaQNwE52Uryxyr9bmRFVasNPEFQkkJ22FEjcwPqByTgvE1EPDgyF36rec3GZzPm336f16kEgQcTaeGM",
  "key28": "59ELv4xRZewY5nnka9czDP8F42ogyfRyMRFoUc7Tounr5y5yi2GfsiJEML17yfZJcpcxHSTJJ51SUHKYQ4B7nkp1",
  "key29": "5MzQNkcaaGBjLMpHF29W3zFqLABET3UbgT8korivWbYGHgL9p6STJsvnCpDondfqdzLjuRpk6NrJn5rEpJJkxDi8",
  "key30": "3uFM5Gu5ESCr79Gkqco4jKJwKuteEqWfHX9XPAEkphNTXWT5PoYEd1hqeNEjR4shZCes3j6Hg7TkwLpUM53t7zBz",
  "key31": "HNRupdUDhXAWcotfZyxeHc5REQKDtp1GvYkygNUippjeTfWdzLsCGvfU5TiNCeU85eSWKvP9Z4GrvVwCQmifcye",
  "key32": "2MknzZtzKEFUN6jhrNZkEVrSLiw8d6hJms18a2BAxmZuLuxcLUgvj39jRedVAwJvPstC8YPnqnhEKgwPso84rsmq",
  "key33": "36pHPWqMuKHaE2MYvH3HmjrEUFYwEwH5ioBzCUdXxruiznyrqCTsxdxbmS6GFV2msrHYzPeQL4E8ZnKBek3KdnpM",
  "key34": "2AzYvd9UPEjSxcpaE32xHg7GPsp1q5YihJLHB5z3fDXQJ8R725payBB23pFuL518HjxX421J6hLsBzF4n4SXKob3",
  "key35": "5maJPkemdpwU9aA97C9a2vdzZNpJtYcBPShoEiEkWh97Z2RFF7S6scAjQ8TJyeGrVnZe5byLdMQB9iBwJFTazqZP",
  "key36": "4JRyXmmpFubFUGYiQtCtCEqjpoYJQvuMSoNjnAAYQjNikKQ5xsheVrPuGdrpZRpt4zZVsDZDiwUDZw4juHcDvitF",
  "key37": "39Ki38QBQ5ZiMjR5SVm3QBicXgDEtTtaD4rVq1cx9Uj319HcLBwtQVSxr9cPCje4dB8pVQBwTdtYqmRDYaAEnvco",
  "key38": "5ME2bucaR57wbeGhfDb6Dc4pY4pqXCeMmNP3ucj5vcB7CgrxH8HGKQJv7ZVfAfJ7vAmq573hJaAixCEFESwVNaTJ",
  "key39": "5hZP1uuT8mTggF4kkn1KL966MUXFSUdGLXzbbjEzLGcdbiCs58umYUZzezNSGuR73XZ5xJBj7sh6KnWGjCXjYdA5",
  "key40": "5mcMgeeHDuCNSMgeTr63vFSBfNmR7MU9rwx9r9vj32YcmKwXJohuARbD1d66Npg6CWuqbnc7PjigFUgdNbwfmXNu",
  "key41": "374ypH6Z7MNTQYZSSAq1CywbUvoLVWiexrKV327omrXW7mA19QgouenJtPRfCAk9GVPSB18AVXLYMMXoR3pNt4gA",
  "key42": "2mRksEeGyNhGtSncfVkwbfGtXn3Wz8GsuiXhwanCLfjTyvgodpgq687xF4KqGVqQTcvpctNmt599DbTnyX3GHYju",
  "key43": "5QDHNTMEq2E5hfcUqHtbeMMvnpH8GCtRXSYrZeofG8eQcsFU1f5G3oGGuPu1n37zsV6xn9wMhXgU1Xt7YTf9ra3q",
  "key44": "5hqc81GzmzrosiSXE7sYc6TYgshzET1NnnyNNHTh7vJr9zPKURgEXjPynUvsmxnDTjLhCzD3DxtyFBFR9sYrrYnk",
  "key45": "64SApPHUjwDXEJKaN7qji3YLLXdLtr472NiV3p3hjTBMPsVcchVJixqNyu5KgpujidByKmiKmiDkUj7HRYtkHdmj"
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
