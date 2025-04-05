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
    "Xhz3PEKy4PikuEc6AokjTsztZQ4aLtFexYhvW6yzGr5iaNA4u6CFn6BcCaKxmBvuPjm2mPMpo6brneEhTg69Tkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uawuoDgj4cGQLoZMbqH5JTVztNgDDhTNRSprL2ZoiuYzaFb9249yC7QGybzLYSbo6g1wnPGMMXmxckXsqjaK1jH",
  "key1": "3TcGFzk8oeiN59F4umhHaQiPuyVVaULTcXHDDMLF3RkFTAUVHhEG4kXkS358nv5hRiRQQrL967xmLfiksWF74aSn",
  "key2": "5KEuAoxMUAyycAEHbuyp3Qq8NdJaEn2PjqjiJrLuNyWWaPGjTgeem9qoMox41PafcrguUHMeEiAGn92T42wBEQqo",
  "key3": "3ziEh8SQyrzhFX6bhQdMgjxiYeAmXvgc9qDGSXzPkUDe8MUsnxEwWT4BwSphpXZWsne4h8fkAUWbVtWujqBGSMgh",
  "key4": "6fV9DEQzH9QbjJEbKmUGgK7RnJDDQAu64aLvQ73DcXuWwEhnpBunuWezwAwfKH7hEbGvSbpHkPTrddaXBpaDjyX",
  "key5": "2Ah4PLx5erCsn6rKsn7XNUhpZ4QDMu4teuSRCAk5Xgfd9D4Q81URThKbbuicGixfjR8K9RkZoSSJAnKR1saSC5az",
  "key6": "H8BjNj4UVxw5HDzUAuC213u3PXtPgHhBCc9QDRE11V4hUj9vZMfEoN19hLZyc1SjsLUHWraE6Gpwuzg5k52YbWv",
  "key7": "2Q47wnwN7x3s6fkmkMjSuiyNL7EfFR187RpiqPA5REG7fyeGnv1b5Rji5kAFPBWuYqeLr55YtqKJg9hRGPKcmMAM",
  "key8": "5MFrPyny2CDugYrWGd45dHvQkw4HQAEUqefkKSaBNqbEge5vxACBJmi9WrDHVgMcS8SdnAVgJqm9XNPdkjEG1TAa",
  "key9": "yuqggBFh8qwNFUvJNNu4fUwVXaTUrEfpqdbAs8eNzZFvM9qUAWgjarReFyXreuqwYiAfZQ2Gb5p9USSrup76rCy",
  "key10": "3KoC1ecEFmwMPNp8drZPyjuH1f871ZcBA7fskXkrWkCTY5ktL6BZCaRx1gb2yMSFec9qBDjsqKkU9f6vueXa8v3v",
  "key11": "yzvMTVmzLwu6KMZMm5QWBat5Hh6d6LH3GbVLvSMyaBMoL7dvzjjw93bxfJxLhH6NPGpxMZG88hr3iS2irzDpzz6",
  "key12": "3N6JUMFUvko4mfJW7CqVmtJUNXoVU6fT54CQ1qpbQwDv8SAX36kYi4mAcrW8UkXPLgrEH1hAw8paSSixyLNc8eWX",
  "key13": "3sgRNa4fKgkFb15H17MV1ns9rofZQSGJZLafGGEEm4HH81fooqgSHpSXHN8XATzUL7wFXgwATHbvYzh2d6F8GczH",
  "key14": "3zsJiLxBrXF7f9FKdoM3PLv6mXdG8dNPzdA1BrXpJPbrjSQogovz5GTbCcATZiEBYDQuuP6Epew2J1BgLoLGEWJE",
  "key15": "1JDRuhpoqnVPs3m4zG6KLWR9gj6pqidjhYBK4Mh3AtXF3y1jPFVY86QU5AL62gNdyFSGx5haG4DypEm7u9Utf8m",
  "key16": "3ENzrcWKqRDfWiW5vmXaowos3uDFf3KDgA1m1A2tKbfKbtBQ1BXHWXfEYB52KHXBhtkxcHGdRWtZVYJzFN6p3fUV",
  "key17": "3S18uwvHY66mkAuzWtDWX9tziUjfZc1TbUurDVvFTkDyExi8p5dsjDr74fQB7PXLPPCktVqS8nxbptn2kFC5q5ii",
  "key18": "2sm42K2jzPWCxR85sZCLUGJ5ELEvuG6pMoxzPGDmGtrWCBMDRyXMRcppR29GZbf21Lq3HN2MfnvPX3CrQKLutp6a",
  "key19": "5419Ch2wGUiQcs11GSQHVt4DxiDGqCWnLNiwMpe5Rj24k2UbRt6yHerBKu4W4KbAQkXqtCNnbZW4WM1YLPKmofQR",
  "key20": "3aG8RfHSFbJFEgPZZPy7GLcWaQE3ke4jghZcY7aVZQbTDcjnx1XjiSyqjqmDfuFHrTHKwwZuiHvv2CooT9txSC9N",
  "key21": "4aZm1xADUZCKiy9y1Z1AcDZuy2NC2s7BcaoW9uZxssFhzj6ft3wiSJWFkBVbAtxoTXyY2eLRLTrpfFsiAv8U5aJf",
  "key22": "5RTiWnsoXZe3NtN8pHvms7jzFQKJbpVzN27FFp3ubVg8J7PhdDffzXEsvEnirz2JhSyx1WkFsz2twYWpwbnqSQSv",
  "key23": "2ooHEy2VW93nfLroyKzpS9kGuCkxGgPg5SSUBhZ27crwVKgEEVsXGfdBKof5aiuTrFBgJDkJrymG4po9GHRkZMbo",
  "key24": "2w5kCg2PcVkZpHyqBMCjsR14LRmgCce79PGYXHYb6Qf5FfD2T2ysurNY89Q1hAeBzppHbvB3q75MEmZ13UeuSftV",
  "key25": "5o5SeYkG6ZxMH9ZfGGnrQncCkivp4WWDz8c4EmvyELSWDw6WhALqrrU4n4GgH7PQUcm4gG2t1Beq8R5qg3wWYBrF",
  "key26": "oLEZVkBwpRNJ9fgzzcHb5mge4PERKTVMdJAQw4gUPrNChKuYCFqHKrd3JXAyVVzvi7H88Z6aant8pjvo68rwwF7",
  "key27": "3rsAhV9Ky7Pd9rfcn1VXjQ2txLcEtHADzWzyB6gHL7RdtKGDsJHq9F4gmERpfH1YATs49r1DLiNimnEHoW7ncLAy",
  "key28": "5X9j7LT9qm5vTJa1WmvcEEtfJEHucAmoQbYSoX5URwHgS2iVmEpNGdMribeo41Y3McfbP3QvoQvw9jv1ENNkk3pq",
  "key29": "4dwDUUvKD89DUindnTNaLwT35XShPtT9gVYZncYdVCnp766zS8F7ubEEDtvEa1nSu4Gs4WpdNC5L5dhKcSxm52XU",
  "key30": "5BmuawdpRoLbA6QP56sJcw7UrA5q3goYT6Y9ifqNVuXG1mjxepvsf3PDscYHRQAfkbpBpNpihN21Vh2v44YDc8hJ",
  "key31": "5gxAR9Ft7ke3JtSR1hRTKW3HLqPwA8me3svfjdv4vAkCX5guXtUPo1wA4K4vHwebBk9t5QHLg9e37QHcbuLmzkQe",
  "key32": "3NunLkMesLCv4hiUXkn2EZHb3BazALutFiGgGxYxPmrLGucwrsyUR4yoZdn1gxP392cPzoNhaG66uHpJzgjNPtnk",
  "key33": "uNkWAbMZrvnpzDtgCLLBRrqcYgejHcXU4FKHcXsxs4dGGSghEorzLvNhsxw4rxRSxDugKGnLhMDhnCcShXE6CLX",
  "key34": "2GoVUj5UpuEYPJxHpdiCbmSBBWD9THcEwNpx69pYq7KqbnezwWJAToEn5McxY4KniiuxToy7BCEDyDhz6kgKJqft",
  "key35": "4WecefVLttUsxGhrWf26Zi8L2CR9WsZ1nWxjnqbN3KriwvJC5mNxpJDu6EmTjxR6w2RHwY166wdakYz3YCUsQweo"
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
