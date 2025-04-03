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
    "w49JLQv1WsZqCWFzeVMH8rQAu6ZaPVYGzuCGKkovLjA7nA3RjyNdKAfZzXrZMptE6d6GEPPQ4hx1QZk7PKmzEyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25eT9WSVU2QdSSgz9KQ6426Q7PUM48daFmdTcLRzyGgrTWAZvDn5v4efEQvQyoh3U4JA6xnZmqifwfgGvonoNDCf",
  "key1": "MLATYmUuerZcg7CYPZ48qbBgU32tUzDNaA8HMfbi8rV6z5L4Gpn9EXKpsFopzwsXRzsCXmDMm8ifmGG4WJESKeK",
  "key2": "4YFe8EBaTVKC5JtU24aV215maVJoHjdoWf6sehBne2pKhUZovasDaptpctP6uNqQdLSCT22D3LeLQcuuXVBdkgo2",
  "key3": "SwigdmC1hDr4D3sRsRkyJ5rBKx3rm4143ZHUdXJoRFLcGwNWjNoWsoLw2gFPZ7NRAcxhxLTsyDbxBSLGgtkyhZj",
  "key4": "3dmpwwZkkxUgnebtPFz2kjW65nMSkj9m4sq9ggahqtjjPZc4pGMv7qt8EMC6ouyLZY9TXoqNLSbrK24qcS165qeU",
  "key5": "5uEHtaKGByooJeNqcntxaAhqK8g2BegcGT556SwC17RsAdeDQdVVye622XmWZYiD5iUEr3YNSgs3CQpqs6Df692e",
  "key6": "4uJkmYjj8wj1opSsktai5zqZRzHHc8KEi1R5JZw6exGf23m5jWHtUdPJ5WL4EJhS8RxjayDdhNzwsiQJdyAPDe8v",
  "key7": "5yj3zxWYebScfGcAMsULRovEohAfgr7GwsdQvbrfVvahueueZVDn6zKNZudQkcHsWGajXpU4ziR38iVDXv67K29m",
  "key8": "4N9pUtv2RbWpUL6HWEy1wUfjG7qcQUpZdRc5T94J2mvM6fByGZanAT22wvcY92VuffTZc8Lpew8vcAiAdiCf22nv",
  "key9": "7vHU2Aw7uQfdB3F1EyqMaHsUmFgwxyQrrcKSFp47jeZr79puJQDYsKcWiDXxSakY9RXSibZXmv9GTuhY8jSBdp6",
  "key10": "4RRwYYT833uhvCVnmZfGxrSNr3Fr1gyY13m2iMoKYFBGxXepzYQQsJSg1hhE5s33GW8pJAyDHjYgxSQzJWgQZMFc",
  "key11": "5xz6oXDJNzqSBrkDNZJYSfEYpySVECu3i4Zb2y5y9V1HBRNy3dwjPp8tPqHYh3L1hAtGEGdpYCNH3Tq9aLwd8ZRn",
  "key12": "329Tmaa7xJcNQk23TCuVVhupuXFoQatYF1hqyJZjHqqXSP7TG29eahi6JcH8EfZgx4DCgh65FKXaY6kNci2aGzva",
  "key13": "51ZTr773FYmQtpCEQNoNbNqSygcoT41t5sf1uLGAmfPpbCdobAT1vZZm7bJ4iXmNXsbDbmQF1nXNs979Cy3iqTLH",
  "key14": "24pneyVoB3mgxNPYN7MApjHCVvKRwDKwgmGw914JRLKPvM9zr3oKUunc83aeGN5857WEDYcnuSVfRmtCTnbgKdWE",
  "key15": "44XpDsvRjxKNDCFY9Sspz25ySkqHZWqzeCCwmdBLWWFYRQRdG9XBCXPoEyUsXDtjgeMFuXZpmXuGKvA64MdUkrSN",
  "key16": "4LACg18PG5Go8r6HBR69gLDdVdtqhDkjY2qFxj3NyinhiwnLWCMHkkLK4YkWXnTGtcxrKkKgno2fbyuuCGuLFM4H",
  "key17": "4SdTgmEWyS1AoQeqfu8wQRgNj31QEAydXiWAxVjhCdB3Zrzy8giTPqEbJGwMjyd4UJa5oJTbHLL5JyXqGLb8brho",
  "key18": "4zX4sxrPrggxwYp1U3qUYbfBFHvxUpJR5pWZc7EH2FezZ4u4FxeJ24Qv9vqrH7txNpLXKsv21rtz1x5vUsRJAdHP",
  "key19": "4Nex1zShZ6CTVb8wJzQ2r84NS4KhM7y66Nfa4RKFUprEcV13VG8qm3gcXx5JR8pd1RQzHiqLhNmuFibFPxGzif3F",
  "key20": "4tXJoTp7kUo4fqjdJ6oUx1enBMBGukgNae4puJoH5FYpaoKbVe16fxUrFpQDBA7aD3PrBVkEBw1diGKhAYGUtAz6",
  "key21": "2EeN4jnz2Bt6Rz5JjZ921iz32qqGrf8eWW8dGnEyzvFKMSKmfnJLqVmHYyjAMufjUBoanJqfeXhRktx3hHVdQwWg",
  "key22": "BmgxQ53rU8cS6FjGk1Se6PuT1Xr8tAijv6azMzdzYweofXKdTG5oLEzaSNKufNooKrXC3fTp37nNCJPZgwJQ8Wt",
  "key23": "4CCohFbTboGWHkprsNw6NyLnjn5aKPzJteHCbLiAgQWy2TiCzszBbCz2zcywiAoTK2xFXedgDdfpPkqpgLY1XdwG",
  "key24": "4ezkrvMjTiMXB9X2UuGSoN8sXMgBNBS2fAZe2vDP5FbnqvAPvD5v6kLbEaSXDGByHXcZBrhDxeakV1AopMWNj6jJ",
  "key25": "3TPtdttyBc4b1qbtdZFXYPAPwJJn8Q5Y2WYHeQPPV1UspqdorFajS65BuTZgVzFCyA9r97MyzWa6Bf5tRX7XaNaC",
  "key26": "5k1icGr32h54qUk32FF9Znbr5RN1nkKjHN5bgjA6UB214Lvcvu1CHmw2FcngLzrWn2J26mL5VWAaKz3zfS6PLvfL",
  "key27": "4DH8w6vTkkUcP3VC4AmDwXkt52wP8Dcm1GdLz5XBTRU1L3sakYMvPoHUEARyQYMedBKPbk286VksFMR7p3P4grjL",
  "key28": "4o6GB3P82XgvUEVJ1UQTY9vfChoTeJadE4cvZ8omunMbwYYkDg6pgSSDb1erDPe7F4iQpjnHyXrxbhLcTWsRpkr",
  "key29": "bo6NjBpPQ2VXN2LGPkxK71YrJrYfewaf3j95hovSDvRG8EKSCDjhbgLBc8bHsjrfS9dfVyCx5cnpK1rt4ap8NyD",
  "key30": "5MDip69YD1jB2qJnzEr1VtYXvZE7hKyUg29TSZr754u2ycC8UcHBZeLvGu9qFyqDyVVYVwYTcmcRvtcjkRUKhQgZ",
  "key31": "3cLUadfXvUj8fBP5M1Uvxccfy9sFiCPnQWMF2MnHmET3BxLyAgFUoRin5uuSzBzcaqWGGX7ypnroaEXBASQPFF7C",
  "key32": "2dPhf83prLj6RbfaKwjxvbtYMutapaHuziGVqB4k3YLhtYpovQNCufg4TyaK5nJS5c4UzwTPaki2qBe5m7hPnNNr",
  "key33": "4q1teADHGY9ZsPbZTMkp4Mgfm7sPU6THtDKsF8SmyMdQhxwjjYgpX9uETE8wBVKUrQeQKHQkRP64S1rcsNc7N6zG",
  "key34": "5VZX7DF1Mzhhwcr9ocNAz5RP7dMmaQ146C9j8wXnXVd8vubXdz4G5WQk6oua3fJt5ZWzD6vWGZiKKXA1rg33WXJR",
  "key35": "2N2WHU82s9Jp1fqe5jaKuGvhDtFqjY75vPWd3NS22AHVQyFDG2QMmZz9EZ1zMfBwZsco6Ru3eE4rvJxXrLsSKCaF",
  "key36": "5vbYaWDX7yaEgJ5TTBXjzQRPYmuznqSHKWDQwDZohKAKCKRyNxqvCdSokbvEeUtbGVpBFUdrbssqPEaco1n3aJ17",
  "key37": "3cCH9MZoLXGfqpNnfbeXNtkut2Tr5wtKBrM9g5DpQHPEhK5rNLhdrAp42AcLf8RLKq646eGDoH25Gb9HLqTKPjwn",
  "key38": "5qwBV42MZ31AvHgQfCSeb2qMtb6RMBBZHbq7qDqcrp4GV6SDjbJcCG8WJFJ5KLdQ8xWhSEBTjTB6BrZwbgU2GSNk",
  "key39": "cWS6PAE3EL2skmyDPJtJmm7Xt2wBZB9dKadXexKLm7rwBK8TE1E5jpmXrPrghErTRd7o2KBHCusRWNTNj1TsGgE",
  "key40": "2UdEPK6wjTB9vVzkHQxVQH3au1hT8rrznepwAF6gbmaAsPbJoBzcB7ZLmdpgoNqc1FsfnKJ3wnf7tbT3z4RcfL3v",
  "key41": "5cjznvgXNg5nYHSd9UCogZvaa6DzJiw37pXEHdDZSYP4Ug93tmZp9U8gTCemnf6JiJoDqziLpP9uF4aTKBNskLcn",
  "key42": "QyfYHviQfxPJKpemScu7csfj9bUSwUvPAVSeRX2k4DSJVXbbNDKcDwGFThGJxDq6SzJHhFpob5Yxm5CcgLwJcoc",
  "key43": "4UCHvAcbcgrFAhhyQ5MWVb37oqSurZRH3b5T3xXnHbA5PpJFg4b12YUJquH4EfHCSxG8mNhiZXwbvB2y8RF16Mxf",
  "key44": "2z89qmHpvb5ZZ3adps5MDmLFEBGGTv6fvkAtKcJ3qE3ejZimaq5nnsWSqmDE7oeVChieemV3GbUsedTks7JpuB5G",
  "key45": "4HGfcPYmManPLp2nwEZaB6SUQWtMKeEhTnWVWdqy5rxrC2AA4FsMap6k6D1cVuhHn2u6gVkpr9ehC3dLtWtzhwwb",
  "key46": "4ok3bDjHbAZfDH2zyrt1aywmpjzX4qudw4FrfNEQd6ohjnYxsKGPJgZf4jCUoPP2c97YhxxP2rjcck3aCHeQpohn",
  "key47": "5gGL5w1uR28tKyiCsC4xLxZZXpZGrDUHWZYHSa8A1CWwKLs9JFyCBKUXGgvcnrUWz49WW7q2ngU7Rs6doTBmqPDP"
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
