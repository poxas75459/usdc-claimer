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
    "DzR77F814oy7PpKVQcf7yV7PokoFjqQ8uu2jDHSSF8s2qfNg2ozyqzB2hkdF9Ep8ece2iXdMPy9m47gS34W4SGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oEJHajsUERzQTj79rtKV1ndgvwPaDVXuKmTbcS83r9VRoaVvQ4GwpAHZ3QZQTmEW4W8qLVisdhoK3VkpFB3Ti9t",
  "key1": "5gjkaaNyZ6isbVHKcbkPcvuwmCb1CGQVg5LSEGi2NhVDcyYRGwMnvxbAwyVKPs455mWGxuHHbQbGUt1pc1MCYAiR",
  "key2": "2N2DQnhuYH2qhwvf9sniEg6q9Yx1KFr9YgAS9Mo1SyxdvkC4TEZRrpPc2QC24XukSLsf6GXB5rPcVihaJcfnLf9p",
  "key3": "5SgyxpwEk6znCtmMZkQractQvzNkfjqPhqjh8wYcRoXMjnWEz3KwJNioMmm2edwiWmYzTzn8bBk3WJwkwPqxT9ng",
  "key4": "58hnn9UEwUy8PbF7Kx3LRTfSKytAgvsGwG5c84aKW8jiN9JdH5GNvhL8KhMdSe5zkpmF7B66f7Wt2KSKK7XFZLYL",
  "key5": "4TJsiXMvcLN6vqPa2zJyBrn6MQNrJT1HDmnFwpzNsXmctPGY5KYVR1vKMuZ9QYKs5As6LFbSdywaxWVojXFkqx1v",
  "key6": "gp1uyBCmzY8rVU5LUKGUpJM53Werm2VQWrgfKBmY4GtaVAd63QuW97WDhqStWF5Bb8fEMe5sCxqdSJNWqUbE7f3",
  "key7": "EaxcvGcomuLn2YCAza35KxDa6qdNghShraGHwWRjwatRRqr9QECu55BueVJPgnhjukktE1aSfjEiq27ACtsmvt4",
  "key8": "JGchLPu58DC3FT1aDbQin554GGxTf2g8gK4tNWpcR6AgYiiVTEoVjuD68DZL5KBZyiwk4QTXYnAJQrZCvrkqfQN",
  "key9": "5h25RwGNjrJ8QCiUvoSC7pjC1JHJtP8227in2179LMCZZsydTe5Yc8PNB1CQY8yBpz56cFaWDWAcpTZeCQ644DfP",
  "key10": "3QEFTxNsutdTNcMX9axD4QDGRmjz7PPSbjozfzMRbJNWpLJaptSxpzmkut69fcAX1suNDAT2iFJ2qfUXmnge3432",
  "key11": "SGYkhMs5yoAeowc2oRdeSSN4v8Lk8amoyBnkwYs1jW2JsVe87JG1VY2oKWH5pmgUYF2uaqdoAPXAfiBmdcfEuBE",
  "key12": "5jzm5UYrDDV3rgYXeyYyuvtDrXSKzEDp2tw1CJptPncBhHekhYqCo8DfS3ruwRSU2xvvCJbNg8Mp95RDdMhviAK",
  "key13": "21GbfZ4Su7zPiYCTAwDzsrz8ML5npE5MzrjVNYZ9ZmGWiRrCAcoxJGQzp8AydivH6dWQropAfb4KMupXtrryy4mL",
  "key14": "3Dcfypx5SMZ1TneH6KCZCz8qZZb9XY31zvN9bzqnyAQbHqvsPf34GvpakdKhGVbSyLGAXehqAFj8SoSrfkiLFH2v",
  "key15": "4eruxPhWY2fPPpmsMQvKckw82tU4Z4bKVysfghWbKbgQzEnZVjJuDwirA8T3wUSEFgzrhTDgSoPz8gmY5B5MAo9G",
  "key16": "2exLmgNpdsPHEmnRcwSPXo91tDGBTos8hPdrCBrzLx474ut94xVpTPAtDUWZ8DdAptngGpSrPdcQDg5wPqEZAQde",
  "key17": "5215Vzds41JNPjX2dyELtxYneXSm2d8BEgc1zfoSQRHiE6qBkGZe3DPUEohapwoo9vX7PAXn5Loc9aC1NGztqJP",
  "key18": "3xJMC1pxYqg8Dz8ifi7CCQEKjvjLRfCXrXFFLfwdLtfJGsAyCtQF2SsZafce8cKDS1WTaPHL419Av1SCUvQqLDqT",
  "key19": "62rRqa2A1pGRNeRtk5B9SNTbUSr1xpx5ytDdFc56kta6xHhQoSofGeCzRZ1eF7bPR5s3wCp56bV2xe66vGaqRaUa",
  "key20": "5TiRzPXAMHoYZobv6d8T4mAf6U8nn9aNUgrZrvN9DvaA1QGaET4QuKouowsbFmzzuCSVFPpjfVDjmdvSK8XHRbt8",
  "key21": "2QLFqP76FyR2kinuoVRbARWjLMacjYwnHxKrzX2tkMsynQZcFF4xt68VsssgsHX9uXREPwZKBf3AABfoGjhyFqp2",
  "key22": "3jam5YhXCaNa8Z61N9sFYSnRfc2d8YcB4gFwFNVDT7kzhai7fKbcqvdkQiJxJSB92fuNWMmDVVbNmogZXXKLKSEd",
  "key23": "39UtGHSkMccRNcFN1GzhG1478UuhntveBSbTZodih8EmvEjxeRDhgwBSvs2SrrbNTdz9EbZaeUeTxyJXTkBRiJxg",
  "key24": "26nnqD3PnpSmcoNYgDYqyA5CCeff6CJRgY6wRWRyMFNSwbfJUQHTq5Dm5PabM5jtzPn7BRX1haMnBR5QtNJurogd",
  "key25": "67bdMmP5RzehUqVvAFxfrA3qCnRHzNQs5bUvEczXRyqxu3RxYzdqrpCc2k2yy2qc8sdP7sbJYXzHBEg4novpg2Pb",
  "key26": "2Fqft81SaC6bJjd6S77ZhVE9zg1wHXYNLXAPnzGuyBSDYoo7PjScmczVtNhzR8GgEDNLcQYinsY1Gj6iBxwJyia1",
  "key27": "5bo3XH8FvJ1QntRYbR9bgjN1pN7SZNEYBGQk8W8S3Gqtva16eoT7TxVN46H79zkE5RMnnfs1CbJ83FD47TnbcRp7",
  "key28": "2SgHozdJfZrz1n8xYxz8bpvXrjqCEMkep6QWyAAqfmPCZRaEAJ6AX161PHpHQkSTmC2uQGFtHwVDexiSeLXLYNM1",
  "key29": "2dHLaXMGMZEXUByGCvCsNj2BYk8zjZNSjnLGkLp3xEWHUcrfJVTVauV8BDHvW2ZKWU9d44xS8sj1LViru1L9zySv",
  "key30": "3sWK3HuAtJhqRn2oaEiKncLV1DwqsqEtUNFwfkLhH1Ne97k6zm1HjRx5Vy3H1UJGJPXLo5xu44nFdnQYwurrW6RG",
  "key31": "3SY3w5DpWv1kgkDKu8avEYdHGJ3mhmjCp4yL3sD1HLuaEYPmN1rVhhV8umjCu18VgiHZSuWAhtBW1UZ9UJ1qLiuK",
  "key32": "5QL6eNTwWPkAMvmfWayZxpynYhWPnGusi6tLMXS1tBibJ8e2Yf2akSrLnjw6Y6dqUWCqzUzLKJMRY4Evo84k52Aq",
  "key33": "2vtWJVvKbMmw4SwbM742iHGw6xGwYjZuXnif3XRrmQUoMkozH83FYkMevZopSupuZYDkpYq4z2iwmPyHnnd4EFga",
  "key34": "LoH7e2iJ9krDyxPewqpfX7vdP62Cmg3uwAgBEf3oP4N46wJf59Q9VH9FZpZ1o8rTauwv6yUeLDK5mDZqHbjaMsu",
  "key35": "38r4Ftz4hoabPMRvgJ2WBwsDBYxnYzMz77tiYdaetxpGxCoajRUCaE2FQVnWvmH9UUSjLRXSQsVnXbArMJHXCqZW",
  "key36": "2TSv9UJfQDdW2ZXPFdn242td2LBuPrVgC1YQJH4KnWktdCKw8XKYics6RTMNNAbWfBcx2SUPNRDbHxcjjMsBw7oK",
  "key37": "5WQasCtRjQ9u8ESPQCs6cGCD6bV9wezKSk4zr7VTXJBbDVkjKqZKisnfZ3Exp9VzvED8UpcGZWFciHATKtq45aaz",
  "key38": "2hztDYLqwFfU3g5UuveJgEV53bHp95A7LJvFcZh8uo2Q7Riau68xUn7yvZyrrbezwWhSmZjg1Z8LftLPTWj5Do9t",
  "key39": "q2Nt2gjeS2ecnvKa5Enovtnec5Cq8gzVvZek8WLonZ9xUaerjGpYNPuwX8fgofwN8J8SAw13XeS5AJeUmNX3EFr",
  "key40": "2Yc3Yjg2j27Kxe9SvLBZXRTrdx4sunP7EL1hJD6KwSiB7a6uEz2BHhQ2fiZMmCqyueQDeXeR5BmNJjtqwYnMki68",
  "key41": "5LPb9fMiF5SHUpnqncX6b3hzTnSgnULPWxF4B8s7fcZ1kMNfAo3zU8Qg5iaz7VqYqX4YPRQkokivpMUWfPRi3dLk",
  "key42": "4xL2qFzx9Cnj9hhnktK1jtMPMUMHKGPvqXbgr53i1zffLdyxeieTzADNDVywciiyj7QaGSxqpp6RgoUVUoYuLTHX",
  "key43": "5qV1uH7NbxJ5FRG69HEmu6ZhoNmJd9g4Ra4eYP1KEY9y6PytWptbwhmZTb43AwHUrKaJJ4cdGmLBZTmK1M1ctv9v",
  "key44": "4p984JSkXZtTmkxWQu2uzKpdxQz2V7bNCLUa5kNqsCvJkwC28TLoukm6hpeQXyTJzxZb8gsC4uytrgRjeDnH3spV",
  "key45": "4aRqo3VaTbVJJnkiRCh4WNoVZHnQ6saHDFeURQQibpTFLG8VZMvEzkqHFm3xVysiK2WLg868DmxabZGxdGqKTmy9",
  "key46": "45xPki3FX8RVcDfDReEpBFahDVt5vmEB7aasJ7sBQ8mVRkBaLRAyJVUqim1UCHjKBi3zJ5mtVEWTtaEmUEq1CoAE",
  "key47": "2drcxoPPd7hjEQeR33G4m9b5qjDpEbXQMt2ZaotAjtp4LyskZ3nHMmGKXewtKQa2zYU8jkQEQmhBbD5qkXzptaFi",
  "key48": "3ago38oNthePNRvY9j2ukwn2wKXZN9BmLeUELAh9qxFcHFYbRD59Hw5sEuA2C1bmb6cduegNWzBzZn1oVnABfJZY",
  "key49": "VxyYY2otkNUirsjsCTpw3xW43iSieK1cHfhRTcnqcg5C3nAyRbDQceJJTF9nguEDp8cXmK3hBk1PKVZ1Hpi5cYG"
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
