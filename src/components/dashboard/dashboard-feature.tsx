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
    "31oobtbNqbNKkPQrN2XGHs9GFbZKU78FuBZHSxTq3nehZZkHVrnf3Vmdwe3pwP3EVCv1xR27DqSwrHdvvAFKkBsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kAfikESFvoVotnshQHaRWbgDJJzp2TTYh6iYJd6jsAm3veNynLsbhfNu8dPGBbGRWfVvTSGcjURXRC5Z8mkSmxX",
  "key1": "Vbk724XqQDNPHWL9TPNxfRchgnLpjUzfNrcgygwBm8ZsLwAAnnctNYfXvEimhbngNKkEkg22xuC8hLTnucaUjEQ",
  "key2": "4zDJbDDwT74hTMsapJTrL6mmVjZBgi5BqqwAn89McAd253f985dM9rcnj3um4KBV9h8gydWzuGt4v8MttqhcQTCj",
  "key3": "35mvieVRsb3LWL5rdRWd3wA2VPrFfkdw2WJzE8eVa6a5S9UGZ2Leqy6S6fJ3U8hdZM7cVE8UF7uByhc6EDJfUDd8",
  "key4": "3UQNRZyvJ95X2HJC99tNsoihw9Lxxfbtru6SBNnmqe5kpPZHJtoH19Cba1tVeZvyt1DS8hZv5siitij1xwZghzXB",
  "key5": "2TavGwEtSgK7puhoNHKHwvyL4PoZLmUMLNq73Ye3gDSi2PybxGDadAH1f7BFyYPxc1xY1pz2ak78mstnMmvws6VH",
  "key6": "RYhL8tpzs3Zz9QjGZhzxWDtcYgVa1WKeFetJkmVWzgtvjqUKuonvKqx2JUsSG5ewDoRrmbUihbxJSpTamKC8ked",
  "key7": "3KB9eKqpZzCUfV1fMEM98B638zHVdekbComzHyWoJ7tDGDLAYMHDookUf9H55YRZxg3ANP2xzNfaBkGuMUw7vBEi",
  "key8": "3dc1XMAYaki2kgtL7BLjZ9xx3eyBh7f9C8ZG4pq7LixneFZ5kpBSZneVJ2vQrfZeqJq5jDAzJEDCvWqcbEhhpPj9",
  "key9": "4fPxpGn13uw7gMoZ45W5kMD1ke1vmacfSvFjrBmE4faLZnc1SaPEhfsXL6YMFtyd8wk8JJxGmGipLkH375cUW81D",
  "key10": "LV9riboDWBUvVn1pqFS74x2Ae3kC6hAhg1yxAvkzp5LQTgzsauP3Z6ZKtBK4g2nHQh5qSPJHocGD9sVDfxZ9c4r",
  "key11": "5nBqmJRRkLrrFkBFCMd9mX8hooTaVZ54azoh46AM1VX12357VMGj1euFwcRpMafYhBXxRrRYpsbZUph2ZSqSnnyd",
  "key12": "xroQLGPYYyNR2hHnfUyWY5e7XRvUjZMM84HsquTLiZ1q8VLAKx638wGeh38KEDedk9CgEAgxrXrN41S85BMDX3T",
  "key13": "3EsWoEds6Bbx8D1cvMV73Bpwan2GMfXrt6ZupXpTz8kq1fKLRsT6bnL3srSZRMVuVzhG7XE57cEnvHpyftFJEVwf",
  "key14": "42jBhTXuM1dsf8oDeeqGdRXrB2wXoUcEnqaKX93frWkQS5UtJTrjfUd3VzMbhMhD5GfwDT8z8529ijoe6yCmTG7z",
  "key15": "56dL2fNzNTRdb1dUtx5HmgR1AQ7DBi7958eDFce1puyqBHtYeenQhRn4hJUtn8crwpyhKzAwAkDa9JvNmu38iW4Y",
  "key16": "4vSxm1bhKXTGkZwSwoinAqsvzMVB4n7jcoxfhoVMGomd9Xk5fC9Mp2nNiLkpm324uKLUPL9g917eJ47FrQ7umRG",
  "key17": "5eZBcodXNAxLZgKFkmBY31tWfnehcCjQyXGSeos6dyCzZGxwFzyEu9ceesCm6AphbGfKpLc2mvKjnbKaNCXKLCe1",
  "key18": "3PY4947bPnLChyQQVPcS7AiaGWmVK4fGLGv6xT85D3tWbuVZqZpxbbKzxHn3nkCaaV5F1Yp2DRMmZMrTDCTGNNhw",
  "key19": "Ntd6SR3p4vYq3fF4mqFiRk3AWEGZWAfPrYb9xdZ9SnXyr6apNmhNe9KwAEt4SrGvnPZF2fhujWJSHvqNQQiniV2",
  "key20": "3Hsy4abFchPAMZ1oqCWaTiEnefcJ3fq5aVdRFtH31GydS6kUN67UNbBFmyVnMLoTBh8Qg4KzkKXhZec8EAUjcprq",
  "key21": "5ZUhhrihAH334PSdoVLjJMqULUaErjEoTXZLe679nfZ2q1AXesee21LjP7cF4L5UHQX3FH7RRCXEdh6e73oBcPKx",
  "key22": "PBQkxxnrjwRikhEepRXftpLQ9vykcKGjjaW6SGM5jDser6hevEGA5uEMPN8DtBdKnWzsHFoRRouv8bHM7FWHfki",
  "key23": "5vA1TreP8zhugq72KU5wQyGL7aYwuQbx8kBU4MqSUBMPPXTEm8VEuc31KJ8kKb2ShWbM6x89Gr4e2J3HscuU9aYM",
  "key24": "hUj2rpFfGxeumATKA1aMbruKuN49GBDQwF6ozDK7ixr7HP8RCpPU5kjs3EwRbc8w1b4y2Fs5R4pzZEJ7KtNQGWv",
  "key25": "52pH9qDmbPPUZqyJ69KL9bR2juXuta9frpYGFk8sZVswogcyi3mtZzYUNFyY4J6kLNkbE6po65UmbXLNDhVyyPbb",
  "key26": "5iBFoStvWefJzngfy7y53aQNB1De95d4dnGD7RdwgptoW8kN3qeyA1yr7G38FiwZN5Ga87BG2Ki8kFqsLDzKNwSh",
  "key27": "GB9LD1xyBmu1bSEEVML8resgt8RdQiVWhVsXdTwKkvA1cLJfZhSo1M2ZBkGCmAvhTomU76WRtmRFRLS6K4bS7gB",
  "key28": "bBoHhxnkd3h6Um2K14ahUxvSwkoN7aaGnRxhp2f1EfCLSxPgRt1H4BGbUvYA4E9BXqxyJtWYoGBtMhEmauPksra",
  "key29": "5VYemVt12Fqc6HwDUKWEjSWu3ogXKvPnHZnhjn4WU1QZhadGnXawVCb5TsSrNWdLUoAvEALiqsYgYHmH2FQ2fxhZ",
  "key30": "27YrnXwQ9vPbXwMXwTiKUmw8Vh3QDFsD9VZLsQup595irT8RSdgNdyUyAenf5hzmYbpcaDXh1cAUB3fmg3sVs3Di",
  "key31": "3ocbzzYEtB8LX7WNYcfAa1JYLZ3PaHUo2DTEUoLrREzNEscYrh2hASbNVafVSAM7ttAiN9hezEqa4w8MF8iEa9TM",
  "key32": "q4GihRBLPdLcdhcRkhu81yQ4jHwQHfdjx2M8TCQFxxXjVxLJm3mKkssiF8V7kkcrJwHby1HPU3Mcj3eqY3vN62q",
  "key33": "SxBBnui2K2XGdmxvwrqwJ2wmxbYVRtvG4X1K3bgHdLafNHQMa6kMqoGSdJ8VkpRbhHkh8n4ehgZZFvnUJNoUr8L",
  "key34": "3nQSbYtaCdmmNT9rCoW8WKKWBtBrJEujjbwfsJWFibS79ZXTKCKAG5GuE9iiCJkz79ZkBFeXBbn5WFNubtjMjda1",
  "key35": "5dLZbnsXGiZZzBReK9N6AkudaQSkJdgdzGu7UNygcc5zffo1iFA5D3iWeNnHptXZqY9SApB1X6vdPauRd5gAJw5x",
  "key36": "5Y7RPde2XQEEo9zj2vxT7geZhNJbNPfAyNcCoKFHMxZWCtTmQQ5u5UouirfdSJQ4KKpD8KfQBPuJ3wpQkguEhgZp",
  "key37": "5GARAgPXMTciaqiiRutZA6JV7bF59jMHZ4BLWUr5N3JoVSR1EdnYycBG6d9kovhc3fqFwoa8jvmcx2jFjxCLWnrm",
  "key38": "yLViG3gU2We17pvnAjebfP8mSigSGp5aJaSx3PHHrGRuF4G3oq9N2fcsk4SdCfc3ZKW2sPboHBrH1wggzNvdeCh",
  "key39": "s4GFKYfs81ac3gSbWiQJcaoyTTouhdLbwAxbajM8pJyRn6Lo7yW1TqiY7UHH5fRpPGfzncd1ryXML4v3Vrw6QAy",
  "key40": "3HjA1zn4s4FXh52VnuUwJctzWUvzjZFfh2hr8gA9ks3B84jzBTERSxraR2eMFYFoB1UcBHyCnGpVXArLzDV4mzzb",
  "key41": "4maW2ptpip6fe5yTAYeREQB5F9vGNR6rB8C2RN2rMgRLx1J6ZXpCb2WpnsGzRZFFT5AwXWcduh9CSSWATWfJ7xRH",
  "key42": "2121MX7M7K6pBAysQQ7ab6FUhYePyNWavzUPmfYju5TJom83mxQDzQLWUer8UHdvE3bv7wPxC6tPaiAQVPCkKhc1",
  "key43": "5sfQ36RXnJDpDB9VJrNp2xwg18x5digvy8fAuBxZXdxckKMiw5zfoAUEtfhcpRhg9JyL22xsWq6ipRw3fuv539cU",
  "key44": "29kkco1P5o4LsNqc6J8m2BX1N4NMZzbS4eGjMD9Q39XbsisvNbQifkj7a4f3budRL4S2xHcz2zwptMhiKEf8aubG",
  "key45": "5yC52vycw8qBjuKGUZLuDNxwed6EV3oeVL2a1ABbSQ9yCEkyBT1RkFr9ibgCf8Auq9nvh7Rr1dEC1KAw3FRa9gYj",
  "key46": "642u7TSZg1cs2EypTRvfyFMovapWMEnh3hXExDutw4bw3m9237HAz8L2GqDefJWM37EwXyhUayKfHmUQUHvUBw5u",
  "key47": "46pRP6TcUwrdUeUcV4wDfnkY8fVV7NFtVytrhaw7zomcH5NLQniYSSNAcLRT7KHW2zXbuvbsGqoirvEPD2QpC6kM",
  "key48": "2BPZuvhp5w2oYSwEFVVYatVUuZ1Kjr5AWYaFhTvHcRDRFk9p7DZv6TCmd2jCFvCENk7oy1qFZcLLm4spBiYoHyMh",
  "key49": "5AzvgjKHtQb8dNbQeRFepgcDXQq6T7aSLMqK1uUeXifqpajJoLfTrJAk8qpMAU6G4XNrkYVETSKQEqNMMBBRrinx"
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
