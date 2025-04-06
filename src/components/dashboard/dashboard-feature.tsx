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
    "5bZNU4EUTGyq1JUVsCouffRFRbJ82MUYss8Q7QxNXV6ocPqoERnZP3hcfwxMTBbnwTc5pCUeev5YDAF21tBHrEcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4SR5Ry7oM4k97tfQ7WvZgH22S7XNFLY7X9X187nX9v9L3DvXaMTncnMxn982T1jHHBkCj1zStjGYgS3QKkSiN1",
  "key1": "4Bm4m3GfAenE9pnXqdcmnG3N7488t1v3VvfKFF7kNjBXZ2mwPVYairFZMn4tz6bZqcg2A1W45Nt4JjeCiRAW7Rfm",
  "key2": "3ULRWNDth14Lop6r7LpdThTAY5F1WKatpounLPhh3y8zVdXPSNURoVPTkfv6ymKqooQqaN1aVEtWHY7QbHqxMJ3M",
  "key3": "67KrEEVGtrWsMUtxeUg8EuKE88a9z9CJ8PMxJpgxFSqwQHybNTQbJd4i1yCdYE6fut8UWh4w3ZGXFehzqW8hcxeF",
  "key4": "5XDejLpSKUc85Q3kJb4ykJxXCiVJseuw7HoS2izYmyKaiXDEQKnpXTbtbxybJZrHVvP5Grn4u7BZtE9f3XNN8otg",
  "key5": "4EEu7WgxPddMwFKT8mnBs6coow8Kg2JeC4gM8cxRzU4twchgpULHU8G7Fr5bAmsKTeVcy7aL1EEZA6oeqLdSxYpD",
  "key6": "5DZsQLvwPyWqDjzrtUK8BSiqwDG7MKZbRBQqRwpDuAvxXm7v9MPwEGq9mtVE1mgdbQqD8mjEtrK1BtkwMreCPiyK",
  "key7": "43rT9555r35UZxH4LKPAG2gmwXz1qzpqALZejpjbqPZw3Eqn1khXx1EMhzw8LeVoKmnH115V2n1XYRcsZzssunCp",
  "key8": "65HsBde71CDhBTXUbqnXchoc82P2utD8CNe7y8sDbk1jC8grvCdF3DKcgBDudHLX9brhmb7GcYD3TcugZTCb8bjt",
  "key9": "i62EpiFJ1AVa546uMnsqYk6t3kER7dftA8XHZntmU4PtLoTHFSpcXXnLhYkqm8yvAMooMuB2o9LGp67nxpnVvSb",
  "key10": "3ypR1jvKxALdGiyUUezo7nQc99ZdbxQWNgoFbvpY3BdahtNAHDkU1HjUXHM4wYoRXdG2rRnGVzBu5JW1PCA3QN4k",
  "key11": "2ZhokaXNY2N9d7E9ifDJMRk5Bsd2GvtfNo4QRLnbBd4z5PoGDZ7RqxqoAwwZkqX2Hp9fDBPjEkZaeAcBj6hiEFm5",
  "key12": "48tfg3PbZCHKK2KSyvG7m9cHAj8sSzvN9AUoKNbthYYa9cDWVkLYCnQXYdUiZZi3ReSrtVUMJ8PhL7scTvaGtJRe",
  "key13": "tiQN6PXaGd5i9EYB4dAqCbjU1jgcAmMgeaeGy91EwK5ToQckgoMBtpG4eyu6msLqXBjxsH7yBngVCxhX9qEWjt4",
  "key14": "53MDaKw6DfFQcmJyJRqbyVQ3KKf77PCB4T7MHwkMemZBCu71X5sE9p4igYqCAs8LVNnHQDuWUHUBrLQvQSCPYbaV",
  "key15": "3eqUHi2DcScJu15NkYfDMUfkiadJRe9RNh3yUAkCPSVtGbfjBMN97BSLTrzW6XcDYuZrbAEsYJRL4NhKKbcPU9FX",
  "key16": "2p9Z44TgLdtZcG77tH8GpLEJzXwDquvZqdHTs8gYE9c5hkXauTEy2nmASKP1xpzDaYpW1CRCRuUYZWJ7Gb6vLXAF",
  "key17": "4bNSyiRb6ZmokFqXHBf8Gt5mT4Bodof6M8jDR8ceUY69gJGXVCeMwF19mx3VEkJK9XQorEXeWeVN5dwQcf6jWg6j",
  "key18": "2xB5mjKrfxiPx99mz6EkeFKVQgnx3aFG6nzcY2tx3QBULUNBzwQugEgQLoQmJXvERg3XyLrbE5rjXhuiZS3GnuHV",
  "key19": "2yTErML1nMSD86hRMo1cZCYujJdtFLnKpjZ3ErdvrXWnBe2wxmDe1BHSS2aNN9Pehk96tDig1obxaByx96YCstXJ",
  "key20": "5wEinx3eSoJJSMnuhXwv2SH7HUZMi6RuTySANxJqiBLYafELyXJF9obvhbRUbaaAtS5wBgLB3c6UvWWvoAmb7Rhe",
  "key21": "23E4nLXvp1HkvcpKe3sYJqkqKxn4qVavMTV9EtRtUkdNgjyevTYi13rd6bSsoy7BPgJah8xGSSBo1AujTvEFEkdX",
  "key22": "2Ru2Y63qZE8jhiBeEKm8Cy96p7XtkUv8RBNhrq3SG2ewAupFSQY7D7rUaSuDQXbDDsdBk2c6z3toxRDjKZY8b796",
  "key23": "2ygJ5yWMzoTGrw77nBunomRGPhG4GtbGi4jDgXvVHhGxP3k2kax714LVWyMqwDiZgTupfGKjADTQqy2H8JZ3yQQD",
  "key24": "4BA6SBKDuRBctiTs4rmF2NsXgWECN6FAQbipiXV6vnz1JXVkDka3NoFtuYdzxL3yCtum4mzW1mCeLQTMq4CUk5U6",
  "key25": "47CXfeVsrb8zASwqdR4z5AdYhBFzebgTVQDrf1UFxH3SjLSrogeYZPQFFpgPEBe7y7A8PU7vzf6qQ8EjLYRLw5Fe",
  "key26": "5DCZYBjBEBiSAECTmwvRsmuc3syapwMNzd2CktSZspufki5YxuNcVdf1vKhyZywUahhpV6yW6hBBfzY7HA2NCsaK",
  "key27": "ATUvaKM8jsHMTowDMKWy7JCno8NAMmoWET2QBGkCNmopuCkSVS4nPhTVX8drVuBavhcYa7Qjy8rSQMRRRG9hntP",
  "key28": "5LVZkYGd8DUFZsAHaudqa3KqTLbvASYRAoiqm2ZdpBQMGjPoXqbyvxJYbAffchV3wTTcrBZYJDuFQ9dx8Jfekhv6",
  "key29": "29g3ua9zYQSA9LcaK39wBU4KX568joBXYb2PiDmoWExG3rGa5txzjChAbjRNFESDj389gciPP8oHVvYGWTBawLjg",
  "key30": "GWAMegp1ftQUUFecfcZ8ZokfNcmY2D1mwQAmHqKwDHZW587Xs9vrHAUmAiiohVEVABknmGiScrpt5cD8uoHucXT",
  "key31": "dgfDusTLcgD5BydvwGsCeV9dxALNnb6P55PfuboVYHGUzh3RiHCCJiamt6oDhjXd2zhk19wyMaVosLKrS43zdfE",
  "key32": "5Kt7ZYhVHUam2EFpLPrwL68LFXXm87sKZhpkkyw68cGrKbVq8jLrLCTsPjyXZF4oED51uGtAdA2bXFooYqTTsMnc",
  "key33": "5bjmHMB1YPngebrAgTg8HBLjpcwxDqi9r1wZPpxLrCRsVXjFB2DDf7Aq3CMF1SgqoSxVZctBQzoYyqGKPZB8ySHw",
  "key34": "3bcaa2D2Ub23pCRdsE6LUAJNMTe7NRgbTHgWWcqdhKG9MU6nUrs7DuXXnHYNeaLRjX2Aunc3aUfYNC34E7j8A97a",
  "key35": "2PNfwvszfbERUk3ZasTimEUJx8gT2LC8xoZrpCoRwG95T76C3RsedPazMD3MhS7FkkM5xJ4M7wavx5oPdXNs7gfj",
  "key36": "2sfv4NMiqrtxdZVzkeJYrrt5kNoAwpiJbB9aFyB9cuN3kh7t8SRczXaFpxh8Wa7WNM77z5GGevgmqZSozw9LQjue",
  "key37": "2rSDmPncfsFyqxjtMgQcha25AjWJncQGVrNWDoM5bdxom5JqkMGbMRxngywgZsKvS63g9v9ph6CYGe7gzHjVYjQA",
  "key38": "TirBT9ShL2gTeMPVGn4ZrTeU42yYxWUEdcUQgvyQw822XUtaebBmgUHoaAhM6AYQ8JcwGzYvQcKvSJdrXAPfh34"
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
