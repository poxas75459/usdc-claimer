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
    "2Lf9SzBhRvdy329KVazch3fmhonDMp1xtk4CoxGtVsrd9YESBFeEshuC4Hx2LEx8ycWC5ubcYvhfjfT2WAeqpvUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xsLGWn2K3yHA6AkSNZhvXYT6B5ur4ciy7zxKLUJf5VEGndUGVPhKZs2Tn3cEJddcEzwbiYE4U3fZ6YqwUGeRP5y",
  "key1": "5VSh1RYx9oLK9mgd14urt6n7p9yv8hbs4EzvGTRH4yqYhrTS48pqyATpkLoCT51VxNtZLgAY8m1oavVzJ7ZErtNo",
  "key2": "3Hd2bGJurBXeY4vkxKDr9h5u3nZmw9sz61qw8Ze3Mr9XKY6cFkWXEfdhdUeC1JJsdNZZnAhShiTHNJCwtyKdxE8z",
  "key3": "2Sget4NmXqKocUFxrKbuULvbjHkUWy2S2bD2bE7ePdickgDVprZvNzgozEkXSskUpebmPrJycuxqn7UwraZ6rAs3",
  "key4": "4BBj7NUY1v8Gx2aobH3hxBjExHxp1cmhnVgSwzztom7hy5jm2VMBSQhkEZXpixjf6rVN8c7LvjPBZApophhyV7CT",
  "key5": "iyQqushcHtLodfMG3HDp72x5ScZiVdjQhyTFWmVzU2wEwYpSuYtCC6LaXZ8xQFnw5aL2kjtJEr94L2i3vLzdHqD",
  "key6": "2hTzzG4D9T5PMbFqLTpjB8A5LVhbq94NcPGFJxK1bha6HebGhJfNcW9Y8gAbF5gg5kCBuPiZoiR29HF2s7dgYBhQ",
  "key7": "247xXeUFSBQhRRHbdX4kdi9fqvds4zKnjapvNUYQ8Qpz2BUshyCetjbLtH3fLnVbXPCZirFwf9dWwjcbe2unSbhB",
  "key8": "5XPjVtKfJFbT4DdqULLia1wBj3ozNuhas8e5j5ENaBPRDcaZaK1Fotwv8DojeRe1mhtpACnaSfF6pKg2a7uc7JDZ",
  "key9": "3tMZQaAHzbukwzmT69aXjnAv1CTepbJowahFUYDmTebu1duujVhBNuGdzjPQB2vkc3cjewyFUTjK9z3a4obRyFYg",
  "key10": "nvjvcfGMwzdoobg44QiKawdL1NKwUd9thXPfZ9ueNzWFwtsHTNed5mED3kNn9KsBZNMy8ty9bEmpW2tJeAHz8Hn",
  "key11": "55wQwarWB731oxkpEDR2ByU1WxGsnEkkAa5P7tY7KVvXFhh2QpsH8QxBS7DA5oPEkmQUh7NtSvwpyiMhqpdfUShg",
  "key12": "61jySiH66TWRexgATS3Bph6WxgJ11E4Jc6zLXLqtdvDSp1GoDjavARmuK7WFm7jF1tr3gy8yKyzSVxMhnpbbWCAJ",
  "key13": "4mQaig5mDLCDrT92aP5Gvq6s4ZQnHsCDbebvF8yykMfLrx4XMR64YaZzETJXefWuRqACfm5Hc72KPhMb5JFTY5EE",
  "key14": "5xu1wqAq6smpo1MZAgvcSRw5NsRRtTiggN24RLFFct7j3gmFm7y43LuWix4S4xnnENFmqtsZDFqqEgGJT2s5nK8i",
  "key15": "mB4jpPBi5oFUwJ6MNH9ZVwZaiMrYfELFN458qq9KbrA8QoJdXRKbJHBZNgxJwPygPhCWrHsrSa8uctVSF6qQNQ8",
  "key16": "5BgEVv9iiatfcnTys2s6hE42PWW1tsZzx2unwns5YqjKNvG6wrV789bGk89r2ScbD656gynqiTYaYEJRbpVeJVoz",
  "key17": "31NWcASRSdL6qTHwWMCFHeWzKKody4VTbtbSmP7LNWhpHyACxVefaUboykgm9Bje5WsYSUTd3P6md4LzQ1Eqs6qt",
  "key18": "3RCWwV75EgmpwrRZHFTepYozuLjBqURz4aAcBCopnW2LW2mm9Unrc822PcXBF2v73x3Rik7Q36vRCiDy7JTjSEXV",
  "key19": "2HU7ADZPYEevs5hXejSW2UoXmuedA9TaGaqSkRvhBJUPMFzGRH2fptbGyBhxvYJh5q6AfunZicZghuBa7Ld7MUJc",
  "key20": "Cwcxd7NkczMzmogis2W77m4rNTpiVq8Q3BUmepDBACRj9UFmbGSxLvjtTbxLP2QL1J4tvHWXgqS1ZDLzptM9Q66",
  "key21": "2SoWhVH3wPbSiW6BakmYN44o1rE573fB6J2VzbpELa1TdC6oGj7d8Bww7amT8ofVg2GVnscNWFuGfJipeZg8qjGV",
  "key22": "8qQcDAnBrzYgxJyaYCvVGXEML67MSDuefq7PdHC97r17Z98JBqmeQe8VcJCpoKv7EBiR2hKmd9uqerdPtn6enHk",
  "key23": "adZwyA8UXe1xBpZSkWDcVgLQM6Rj59TKrebwwy3DvGzUrfoZrbcTLKhf5otcoY7KimCcFL6B2rt8h4f1ZSqppFs",
  "key24": "Md3smSKacYw2FyZLCRMwgpdrenkguyJtUzLi3zB4sG5cJr7SXJR7ya54mRBDbKud31NCvkTaFmoRt6995jbMtEr",
  "key25": "it6bSbBgBpt79pghcwkZjFPqhcKHdMZRq8KrPANTYCt6SYD2sa6tMPB1N8DNMmqH3TrRswRns7p7KTsX9d94yiJ",
  "key26": "32ZixzqmFSnEEjmwpw48afXUnEUj29wFdMzeupbDS7wxjDLAWHRbbdtKLT2EZTA1WBkioc7vzxagzgvpPtkcU4MA",
  "key27": "5qmehggDHDP6oKzKb41zeLnVDaGQvk5czJWBDdXXCoj4Lc3b7hf67xEB8zhnM9Td1DAYz3tBzCtkJkaLwU8Hh6Vq",
  "key28": "5E9si3pYmPdHxK1mfzd872LprsPfyrszh1Mz47FAdCZacgo7QpAZC1Kjq3o2aQq7Zq9pp95y7erPB11HNwd7YLsT",
  "key29": "2KCgk9dvoQ8it898PvZhM5sGeYBHLZB2z9gjRcxYKDKZSA6tP297bfsLsVKQ1eRh49TNQuF3sHdiGahsJwaaydc3",
  "key30": "2QZuddN3FTaWCqbmVMWs3aiQAFYvsghhDxLMQXdN7rFMXAsg5x5DuTF1huaDnGuDBRHVpWV5oYuvwbQs1Qm7qyJP",
  "key31": "XxsJvH4v8bZDesRDtV6nUeot6eZjLctW6Tuq9nWFTJYx64DhH4wzjCcJ6fFuYg3mPtGXLzgEPPvosPHkhQCguYr",
  "key32": "5N722az8DP7WXKq6WrxFKuobQusCwH68FdydCNXjd7UJ4ZwEy4cZ282iC5HHcjcSimsno4XCeGXEbsi6CT82aDgs",
  "key33": "4wPtmd4m3JgjGyoGRacVmw3JBbRFAV1Nr94cn5jzoMbSJpCrpJL9bhHJFH74RvW5LP4Vz6ySpTtzBxcNtmxkgB5X",
  "key34": "5zEDow3ZCnVTwUXCo2To5eyKxS3vKxJMsts1NGpNEn3ae1vZaKauBrz6RtHHyPtx95LRiL1f79P6E87Nk6yvHaN9"
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
