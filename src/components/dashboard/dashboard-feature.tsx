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
    "2GHZJvJT83AoTq88buMkoNuzFNSHKtN54hhBq3m11T4Gayss3Rp2w845mKWmCFKK9DkZWCHY7VqZaqjAhPQ52qVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TrU6ymRGbVeFAQhwSSEy3CjRVpHbyUy3H3yy1RSj7TpvdGH15cXe7wZg4NnkkXPHVPH5iJ56xFf1YLUZ8tWtd4U",
  "key1": "kW5DhvvCqUrahKAH4dtjDV1QscVAifvi6z8rGHAJz2iifj1f8buQjKdkCoofEU9AKZtBt14dnyfs2kdiKtrQ5RE",
  "key2": "4yyEZvmR7qLeJWa4JBphSZ4oirTqGrzav6BASVS1m7CF3UvoSM5TvqEzGxMaQ3djav9S7GXe61N8vbcqau8z5SNN",
  "key3": "4ArTHSc7wmKWLZwWq9hUBpbc8BERBWcCV3RLpnDMAS5VNz4McRf3hmrR6TsbG7KUxG9N2bDnwqXZ5mQvHDjKCNWx",
  "key4": "3gSc3RhFHFbzFm8hCzPFydrY7ZyUeWtcopkuToxFFAi9dh1xHN14R9Sk27MWqk1jsoDw6qjbDNuMd5RsZohddcqm",
  "key5": "4sCycnQQgLaFipTfika1PQtmvDqybNLbJjAKufr6YFVSwgxkEFf2Sj6egkMDAYkkMWhqTLCQDyjrA9K5AEowBRPn",
  "key6": "joi2LXfPN5xd61ZZ1fQz8orbdojVjavd2fnERWewN1SsiYE8XdKiN2nkakuAQ1c5PLtzUxu9AKPUxeeFU66GjUs",
  "key7": "4LCKN4Ftg4Y6q9fNTsvpPdUYqY7Ue9hNKfVRA3iq35vmytpm4uQZVUD6vcXGuQWrNMGD4Z6qi94LwtVvPGi1Jh8h",
  "key8": "5viu9oM3RHS6NyTo7E7ecUC8EhU7T5sAkEz8smaiUhV8bPHrPEux4Ast7N78Vodnjfft3m47D9xdHUUadD2cDp2L",
  "key9": "5VQgabz5nWiqfhfrsRCbUNQkpSBrjK6Lsw798LF3BSbvHWDsjXcoLgcDqpPeVowgNf8bZCY4sLgvjs5oYqjGRkE5",
  "key10": "4VZqZaJw2QkBSiQkUjdMHjcVizEfBQLkjRvRuMPMCfsEQ5Fd9TM4wMBBgcVmCZB1Uy7duiv5AVRR2BZHJjFpaN1j",
  "key11": "3T9kSkzBtMWBYpWe6gMm5ZpGdTQyc2KgC7RChCMTfw8RCh8KUvunsqxomrTjEgq1etSHBNNRjjfmjg5vqqxcy1dN",
  "key12": "3sQoz3SBc1K9kiiKhNJBnFXCgkikNAPhUvRMxuRwkvkTEnsfML5WphPjoxv6YivcRVrH9121RTV77TWB2jmMUqXj",
  "key13": "ZpwJnykQZq2JT81FEgu9Krjk6W5UVG4A6b44A323dwDe7wQfgTMoQKDjCzHFsjvMErUESLuET9oFDryjdtFiBrv",
  "key14": "4U4DThB1vEDbocpuj1PyfDMbNSzNLtZDj5NHZErP26FpLLyh3s8s9gBDjcZ9ajmQK6hXq9jh59tXVmsGF45YvD4M",
  "key15": "QRX723zAnsvGDVGDsb1GEcVw6BJfC886zzB9QZNSN44naf4r83nDUCZzCPx5RembVa7Q1NVN5pAGWPzGAsjLoYq",
  "key16": "VjX2vXUocMqp6uGpc5MY1szD2cEJ6WiESTwKPykoyBhnpTfuc3bXW3s2zmziHV3kfahF8YjXFUKcsVtzFxgg1Pv",
  "key17": "5ZxSzpGwT6NqMJNN3cTUb6kx9iLCfiHWVxxtxf9vqy9tZzG1JvNJtB8EhgH1dz4cN1id2mpNAQ5pKUGxhhuPKzev",
  "key18": "JADeFGU6o8xnjGS4BLXLkxay2SudhpQad1wvLeviPsizhiBPBsoM6JaScgKKiw5Szn767npsKnX9KmFM53iNcLT",
  "key19": "4s1PGmZtSAZmeN9o1hc8d7wSfq76zKWB4wVyHpEs2BqRuX5JwMMbdteqoLKunrUBHNZaBCG2Ur8K65iHEBcyCMpZ",
  "key20": "4BUGKfqbzguPie1G7Jh1Cb9Fne5W9E96ByksiMkYJzSvqQ2YfvXbegqi58nB96oKYW9YjTPsNUM3vL2dzNZjL3HM",
  "key21": "48KbYLXYUnzw8D5gw7wPSEi91FEewoXf7y3HeWvbfk4sFrSeDuyxRNhbDSxCTWRs6URf244rbRhLh5ZTtCUqJPtY",
  "key22": "rB3yWvVghbqw5Z8j4rHRUXGVy4XsiZzsG9eKuZF3UAsVKUKSXfbRVXMVBMzSeDxyhAWXad1J4Kkx6T9qCsnxoTG",
  "key23": "3LujGMHKPcjZSuTsevMmHzYvbzLWyJFKmNtzUqnemWqkWHLR9i1kLh2PxMxm2LQa1m6zB1be7Hy4ZQidsE94WhWN",
  "key24": "3cwTMVqnCYVCXR94eocmjcNq3gMqrF28HT5aLDsqtezoQxi13Qg8HvicMWjK6JdVMry9p3jYZ6crWjejH8468mVs",
  "key25": "2dQjpEJsWajxxmZY61vWTKsNajHCbZLDw2tzXomuBBBKKSe5EWeCGnxHx98fw9EE7tkkKsGTxtNRpmwHNq9Qj3ks",
  "key26": "4Sin56hyJd2kbrDa2SdbHGLkeLjDcTDcWHgTN4ai4SWY3UioRQRcgPMissbg5HWXEgjutvEUwn8dstGhzizwh3ce",
  "key27": "5G8iV2KBufTUZoW7KjCESG8rPnp4CakDRp4z5T8hWnjQf6ovTLMew2q8GEGJ7kHtMiQMmv87KVPgPPhZqHm2iQCn",
  "key28": "3Z5hsMmsDhPhLn1kz7KBEMZ5FjrqHw3nY1DaSj6pG8GJqyyiP2khcN6LqPNpmhBcG97nPdTKxTCMvNz6oqR4z1qq",
  "key29": "5VFfQvAPc1T5TiMxdWXjLogZy2t9d7dZmYFeUFWHCM7GPzMjypKa4nRk7EYWG5tX4cPpHn578f66PqxKZ6cS1TQv",
  "key30": "4tjbpL2c8vU8136TSq9yXm7h7ZRWx1hEaE5J5vB5FTjxU9J3fZHD2zHbt8sbSS4PTz7MGs39JefdKKgsPiJtVMJL",
  "key31": "5xtJGJCkwkrg4atYyyiB5YUK2E8z2r5LKo4LawUw7XNVHvFbQaBPBEWMxSGYj1dsJDpnsSW49Wa7hTALxr8PA27a",
  "key32": "3UbsDpzAjcJ9f61n5DwKSE155XuRXd8NKUnPbwZUrnpMmbJqaCkS6XLDXs5rwJJ6v7gz4uDQZkTB1Y6D47RfCLCN",
  "key33": "45EmABnmuDCYVfMbvnQCWU6YYpSdJtNBBA6acVNun5QrnUTQn5dVLfm3EdkAtdG1HtQy1xYF16BGDqQtWGaunbys",
  "key34": "45ocnWSLhx7HbczUfxe5wskcUVWG3ok3JQSRNWhLBcyXM3ER7aTkRq4qQ33o21rRV2g6TGASaEXEjvkAGXUCQsHz",
  "key35": "4xV8uLnpBbB3Exesxwq6GVw3cwDdabpMbdQySgj2iqbsrMKV8iZRgvCSPxkZm6NcUkVNoTJFw68p5VttvyykXR8r",
  "key36": "dyJ1CdEKCUUAwipHiejZsWp2fnvf1KpVdXccwmpXsrCZcMP91FQrF3L13qcmAuFn5Y1LYSGNtoqF69TjaCM799p",
  "key37": "5VPSv74HTaLmwvN1KS593bA6yq2t7sAL83sCiE6mnvBHSSbVe2vpEBGJi5v3hJQVswVywZQ6aqdUAg35VvBZjVDE",
  "key38": "2qRQkGDLGtnzEJN8pLMveqQXhcAfzDmXy4tvyXRSGGhagy485YoRqo4X1iZTLA22YF6559Hu6kzErVdnbxpkgt93",
  "key39": "2kq4SofqH46VQfV5x7NP2VBrTNQxkgpDqabveiopjGPj9zK37RbkoEsPYqfP86XU8WSdhv2i4hS2uDrSyyjdmssk",
  "key40": "2ir7XbL5TMYvhTnA2VTaVLGwGtMgTrrVZTH8AMMK2RbSAVfKBpScqVrtV1gB2BfLwLBpvj1H3ADfGDSEpaDMV2rg",
  "key41": "5UyoRkgdacL4ZBuj8jfmH4w4Ea2TJQNtbxrRRPMDDwLYtQnKVyyc7mKZAZBgGkLErHknFKMZCKhSzkdy6LMfMtKo",
  "key42": "X1KxMquWYGsbqCXJ7ue3MEs7SKQxVBuQk5mBpA8vHBzCeSHZBiM313Hca3oKSS2ScZbGoYTMpafANMfdDCh7S5R",
  "key43": "5GJjPQGNjEbNgQ5bLT11b2mz2YJ2zHoFXAGQfBznF2f9Z6Wrx9oc6TEVUC6AAbaHeKojNC76nruyrVFS5keNeq7G",
  "key44": "4pSacpYndENTJfbVDPPw1Jw5xQfTUujQTevQdHwxdGyK5S9A9hxB9GNamsiR9BFJc2hTPbQtn5ATyR3cza4VvALS",
  "key45": "33mVWRECvdMjxwu42KqPJK76fLWn9MuZVYERgqCmigkFLcxdjdM5Rq9LhyeRuZnxTWQy3KfUD51mTAS9t98L6kB",
  "key46": "wvh3XJy52Yb3Z1Qtskt6YCChVYokiFTBgm77jULvcQKC7CdyGL8irafA2i8iyE3HS9itVXx7iQYpSdjJ9cTeAw5",
  "key47": "3dMq6ukezzRqtiP8twu1EQnxq3nq9wT7mdCZ1i9SRjqoqjnc8xgVB8W7WeYJaHFLhuqAEPtThpfFHMVzTfqWu4zA",
  "key48": "2om6JCQ8TxvoePZYBFfAn8QxsMmMnTvd3z5xLbtQpRinEjzECkRG7nc5zbGVX2ot99PTWVpj8fsEPV3uq44DcdLp"
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
