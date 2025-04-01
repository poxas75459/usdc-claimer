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
    "5fEkPyTy3GqYfSz9wzJYXMQEih2NF5z8Z5waEcfcysLC3AhmKWwTAPY4vMcHCCtcRHKa5mRv4eMdiZDnAPhzfpRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64b21Uz7cEtTTKcDuMqxqHD6gvuMz8cFdecb7PcPjxTJgFNuUoZEBQHfvZ66n4rg5YC3mmhGTV65Z1hs4DmU8w7m",
  "key1": "fqNurPZrmTW2cVEY1CUqnAPEVdeiLmSmjYmz84q37zpAqppd5h8wWgegpMQcodHMTY6rBrYkVoEXGzfkz8Anze5",
  "key2": "2td8wUf9aXWnoWJJ2VmWdghiLLzXiJyFK3nA12qdj6HFnPhrRk9VUSMz5hcqzWYKUFSKqt2qtGav8DrFArYfqWVL",
  "key3": "49yFyQsee8pq114fKVfuiuv4agxCPpawApiXuzpjJ1MkqjtbE64YFJ6Ewb2WRGuEgFXSdYUabuEtKu1LJxfmZMMr",
  "key4": "5TspMbo3BC8LGLE6kJFLeU2hDmuY95CabKf4xKnxV5graVE3vr1EHo4s6giBZZzriTy9nCgiB8esNrZh7gSed2U9",
  "key5": "eKzf1i6DpuGtSheJoPZGTXTySPE9MKmWTbpJ5YJa2A3cecjD2wiZASxAMUs4gkgetRnTasmd5yBdjyv59qJ8463",
  "key6": "VVAdNHsCcMLShPSq4jwuJTkubWibDYxxJZLj1r8NiaGQK1GVNHgnjbLNzQxMaKjokKgRAp77jxQBxmpQ9jgE9b2",
  "key7": "boY7QPEQfqR4WJ28SGc36FhfnjC578fpymRdH8ukvuntMdG7cmL1qwcd1CznPxm2tTJRndWtKkhnY6zJphFEx8W",
  "key8": "5CWUitp9o3xi2bhdBrjHjEZpS3WsWRmMNqoYP7kMGXH2FXRuKnYi7odGxMSLTPQYemToerg3vFDbdhikucG8DXMM",
  "key9": "PiibkuJjM9H6jBykzjVpAgipZfTidthQCn3uUnzhM1B9AVotudCAqirPpZQufDzNzvLDV1JMDsB4sY6LKCYctot",
  "key10": "2LXFQVBCco4EQuaki5yQYjK1yBFNPpLD4WRRHPniZNVZca9uA1y958sccaGWuVuzjuda8Gzf7qfxxHPETgbuCdLb",
  "key11": "EbGXqM7Ud22ayPGC7qktmjP1uoijRxD4KGpfJoLoj7DbsqqQ8zUJJJvpauDRafQEqb5hA1rQJUEWhUkrUycsvPV",
  "key12": "5NJfHTzokHH3BnQvWn8Krvvr96E5fWW8Jb88TCNhP3vobZyS3yadRBHocf6RBPtbXpjxyKz7DA5Uk86xVpi59R47",
  "key13": "61jg97iWmT6UbFsaRXXT5W95e2CCchRAahZg5SP7E7839grYAWyQ5PcMuCnuYGnJk6Dv93vPpJ2arfqi6A7YBWtC",
  "key14": "4dkzNYsfUE32Aa1v63fFTXbJt1ViqaWMuEZeFqkF1nVC3nAYx5w7yQMi7q1TVc68viKLrkfQt4SEzg9NtZfaw83F",
  "key15": "4aKs6aoaaRme1YkH32nHimFWBYepVcZWBJm6gyuaQmgj9FtYvusPqxWVNjz8WzcJapehMY4awfMpKTfhrqsDCUjF",
  "key16": "3Grv2Z67oPMTupvPHqBWH2N2nXhkvxJJvtEauqre5jnV3K5JGuXgVqcDYonagFZxYNsR4eDB7BKYf6Mn3PC2QrHa",
  "key17": "5gDD1a43WbYZdYeXmpkXvuPp78WXEdtEAa51TA9THasJt5nynD4oZGgqfzEucDG8qccoGcjYYXvfX6oCbSK7vo8K",
  "key18": "t7JjCUJJYSqvHbdbSCmwUjuANc3ADZwRo8H8m3CJZombQM3U6NkLCzhnQi6WrfBXFm2bpqhrWW8ZxgknZhi5WLm",
  "key19": "3KXfywZ4inxP4hKWtbsYmmn8zjpBpu5C6psSz5meSwwcsnk4xEDhEwkyaPgu7U2Uxt399GtadqzoK7Cv4mXX7PiP",
  "key20": "38BXNzW33sqPQuGCbLoGmQ9zeipQQMYaUrVJE2YixLtk8F51jbDzUV5qpfB4YkcdpcGbADfANqrcpXi9vxSfnezL",
  "key21": "3dPmKVfVboEJ9y7GfUJPXtyqpmog8sGdJPPRgED7YuAyhujx1ejm4HE1bkpbESLMcPiNoHSCVyo2cK6xEK2kpd2f",
  "key22": "5xg94MfvWuRBX7t1cUDW7H8tzubuPNB9rN3YbyAuAEgrcUpN2gYePk2frv8p9LQC21zGh4wGinNUPsY99pRw7aGo",
  "key23": "4Noh2J9FU1wvAEYUViaA2EzEqSrbGaWBSb6rDEwBcVGrne7n3MyoWKpsDCJM9iMMgbtxagvDGfzaRYesA5hqMeV6",
  "key24": "4rZWLLv5gtD3rV7Z4duwhqz6tqUTasjbdTzqUxqBjWz2YELkmsEp22aUjoHk57jR46bSLkpg9LMtpoue81Zco9kg",
  "key25": "449LNZKcRuisng86cdpysBFziJC2xvKaz2TMFqEQw9dHYHmdhbiEZ3kPrC3y3QqRXzMmcvDTuSvtvta4pUzhCB16",
  "key26": "63uyGBHcGFRd7FEko3rsRMiSG4eURChANhhDSpeCDVFEMWHkRurPsggFwL4WtrD5im9T69fMbbN1FeVxLi8f9kpV",
  "key27": "2omLecZsauunVKFccLauE9Wj8yasNaH4FsALMC3QvFuVbU8Kc5MzNv3nBynHQ57PubHq21FifJyRzyDUV1vey582",
  "key28": "3zXqwHs8c5ea6nyauMaKxEZieZvsidJxZGVdT1LpAhLX2ieYWFx9DU7HfR4Bwi5EPKiZn6jguRFj4eiy1nVwGT7i",
  "key29": "5gkACc87313k2UtrxdQ9A4yZ1EMqysB6jJe9u6o8fgn7fh11jFmHUG49WfkwWoTDvx3tduVBtqpVaWQHzBuhdpjR",
  "key30": "2fxzXca7sZYo9mH1XU2D86fvoA2VcXp4Hm36rDFao39FJ8anRKcNP1kVv6ExH6Gs6sz477KebRUGBP43jt4cMBiw",
  "key31": "cJA6ftxthKZLMAFR1kG7fptHFM5Ln3kHz8BCdr5HWBLNmG3AsXPfzYqBKT1omKhTWZJiuYaHhMfmtFGAyC7t9MQ",
  "key32": "3qTJphW5yifTFP5WjC9TrCjp6XGasKgwEW6zgRKiZQD215qa4njZZw1WJ7ZkXqfbqwhcZxB31wLCypM5BkxUiG2W",
  "key33": "4KXsTx54ZN9Tq5U7Jf5ULZyK2K7rXXKqm1RJZzmirndfzDs1ad1y29eSDqxSfcKQ54j6ADeVY8RTDzTjz2kB2iVC",
  "key34": "2xsk8QTFTSG5j5xGzKPfRhEvojpH2H1beA5iDu42xHD9Ys9LVnd6yyjbmtz34LZiF6a3cPhhvg459xBQ1h3qpTJ1",
  "key35": "51JYEiiPbh7vEXUEGKt65jxAN3EfPYSKnUqSxtiuugDF5uuzGD6UeYdpHUaaZ5KQ7g5iYrSRUh9qgZfGNifsTjuZ",
  "key36": "4maQnUD3i5gD9XGYDiYMCvKh7JLvt9vwgCHuLrnCLbA7hx9nfVwTEQAMdXqNY9zKQ3q9KbmknBS1G5FXE8NSmHyv",
  "key37": "2KCQfjVTpr9ir9SB9Eyfk39SjsGvVrcEEehTdF4dzhPehvUZ5Bv3e9cHP3BYoyPKZUTzsiWFA9EG1jVg32CkFk7o"
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
