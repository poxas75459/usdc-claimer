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
    "4q1u1NZV4oG8NLkVaEsbvWZuBgHst89waEeCsaEFnnRmPVvseRsPqhyouLMG2RyBU2KLQuAEJgBsbV7oHKvZgyZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i1iiS2wWpmVNoLFx9HBkkx6ktcE4NLpVuVc8vqNV7aZVoDX4bb8NNzPakqA2LbWM5zG96btwasbGuWnfbXCNbXt",
  "key1": "4WX9Cxt221dfkdcDmKy5fzySbFtt4s1FooZoe55juyy5rcfUpobWz6TXUU1QGZuuh2YrBVqnuUm4rK2LjDmuz5dQ",
  "key2": "5qHPkXJWwaYJi1cq3wVzLx9CdJyiJ64xyK1ub5DkUiEVCeaiEprBinorj5KaUVwL8VEhX5M7ePKMV1ixUcYaTmm9",
  "key3": "6i9KExYXVd8Gx3RufB6zDZAN6fbNFsTSNeHJjpxgtfXrnTZbQuMB2DP4g6TfEAwDFLX5tSAMB5o64ZF4mUXes1x",
  "key4": "2N2jW4tkh6f5rYzmTE92BQe8sVLSzPvtEvVB2TLbAJKRmLtbZBLexegC7HAbhnd7hXNtpLYQQ9NAuvtx8dNEfVRc",
  "key5": "63cubmAR6hHKLGkBMSUKXnzR9Ah1JwFZBpMdx9eJUKTa3jJiJcZfY9dXxxBPuVupryoPSDUj1PUe31tyBZnZi7KE",
  "key6": "4FKiEXDT26G9HV8curDQ9eMuQ5VtsoTNNHgiP5xHcL6Yw9htfigpjNE55Vju2s8xN8W9QvvmLeeJ3qHriJkzvXJN",
  "key7": "F4mJBcBivTN2ZCWT88FtMmb1pEEVw8W6quyR4hM6H9BrRCLD3JoFKvb4T7oM9UudYpgCMJydSkR2496H25P42K8",
  "key8": "3T8yYznqKY168AnGiojtAbrBJ1AboH8aADjvhhZCNWjJWfZQjhjdVV4tebAuCkcxEXQY4kRUnVy3JLoSwNkggD5k",
  "key9": "5Xorzrs2xtfJPdTHMSEafM8Ac4Xjayjxmy8dm4qbXmpri9J4htJBvdnHnv1cZ37vmNeL4RT8ypeaxbEwzNAz491E",
  "key10": "47Z1hnLPHsKAfoapgsfohfpgpMcGXhv7bkpEueMGFNzoA97u7JZ15Y6JHQpUcMf1oJt6L6v4fY1YvAcVd1rxavbc",
  "key11": "3Z5QwcbTbUxkdQ7ZMJ2gicccUoFmreuSLDjRs54kqg7o5K4w79TPKnS15PecdiNQzzBk86owp45CKzRidUGgH9Wr",
  "key12": "TSf3Ah1ajbTerrEghs2tVvR68DFe3KNNwsancKtp14awPxNgQnPGxAhCd4NnUv2BuSWikLGcVPDxKZfWocf6KWE",
  "key13": "3qDKsYqwe82fvMHaonS6kTso6zG7gCUZro3awRDXKUN3vX2FrsvXL9MufM4A1Exh2P6AvFxzcok5mU69cKKJnnL8",
  "key14": "5rrDgjfxkMiBUb2daJcErdrLLfKsxVvgvPmmnGYq5CLm3aPXX1orxT1xqwLMAn9GXoqviAoMa44mZ5DJnkwmbuZx",
  "key15": "5Ushj5H2UpbCiE3nMRtGS9bGqENXx89RUYtpziL876jcJnVtk1jZZwWMXnyw2PMwPH82Mso1Pd5utUor9mvWJYVD",
  "key16": "2bH1SMA7brFbrVg1kzvns2dUhunu2TJTgP7FWWkjmmXjhB6T5k5JU3TS6uQuJE7yCfAeRiJBWnPJszTroh9jRmLz",
  "key17": "5JvKZ9XEZF5LgrVcRnjLAeBeBbhX6zM6XXW9yawQDHoZxtgyo6ER1D8pH8bqcQzPhmYmdAv1CpL1XJRYZKUgbKM",
  "key18": "5SqwTJ3BHQRE8RseK5AAB6496VAZtyvnytmovBbH5wEXFtkBkz9JZgXXcN1F1J7DAtq6NFF67xJC7hojfh6784MK",
  "key19": "2p3TiXLFk3WMquYf8mUxNyyfpBAykjqiB2b4UUf8DPMzcjKXJERJkBVv96WvLBFmtzdNYyo2eb88X5FRQ5fGkaQ6",
  "key20": "23UiiqUU426K1T2cnNYimfLksoCcBgYdfC1wo6Guwa5iqucG9rsj8VTzKjZizvhkfgV3BzTN9MADNHjxPx49352J",
  "key21": "5beCyi6AgrwsiE9eVLH8w9i3mnNAKoEpfehVcoMzf3x3RNZcVekc6WBGjTsSUgb2zH43HyTuQc4BDAeAoyRbsFYb",
  "key22": "33PeR6NsyipmNAYSJASMCC5iWjcm3QwVYzvR3ZT9kNg26mkeyiCwvKsS32azUZpfCzJFriwDXMUjGiWVXngDjF6q",
  "key23": "2MxYcopkSbvpVX3ScKJqTpChgU2oasBJ3iEvDYqbJoVqKnG2tuZqUn8rm7pdv93ocdqqRxYqZiPQhbw23qVodS37",
  "key24": "2sBVoyz1warmRYmNV6m398BjCXUorMnpAEAh6HYdEN6TsSHtMvQs7iuHDfaCSZvy5saPSqT2tUW3JPzt12knhGMf",
  "key25": "5ECsBLTcEDm3b4mWjdMiDq4iqP1CUzfSTccdUwnHHyFMmdNgwNmdxGeDckCzfsWvBmcJVTsmiopCdxnUnBveWT57",
  "key26": "4AS1qCSQJs8iiNaKyCW6az6BTxrH9NYoKj7b5FF3dRMk9iU7XssM3McAV68HJ9KTMHvUuJkgJRVqAfvxHwrccQoM",
  "key27": "2EZLftEcMayzhrNFUJCJE7KsdU1RYJ6Dr5LGbMyh9bbP46n12w2ENTJYHVu8f3tLQwwUsXW5qdZ5BYj8P2BoiXkq",
  "key28": "3pme71YLsFP799gmZkDcyoa7ZW7CSQakegexKVfPAzGpsPZwNT3G4W6BM8NqjaHTawjYhp4NDes65CkmtrEfKQbp",
  "key29": "3qEg3TNRXDEutnvubbqgi3GKespDvr22amtq6YoeQYrLHh2JZsmzr3HaScFe8RDmgpijgtphHW7QgziUCc3MZjBN",
  "key30": "667JZbZ9oSDkHXnfnvjq8kRSK3US9dq1UfPzXccAg4EViVckr4ytFFHYHvFoTuCe519614NQbS6S7tAFBDK67tP4",
  "key31": "5aHZYSHQWkv3Ln6G1MSaQAVkafPYdzjDgJXVjZdoY87LtT5S2Bjg3PvpdJSuqxWae1t8S6vnkbYt2uHurCgcqGka",
  "key32": "32BK2vss8pm7kDZ3e6gZZ7T9SUc5P4RjLhnSBE8BiDxquz3LCA9yZnDNopqXvbSNw5Fpsz5srfNkbBzYdm2GoYCA",
  "key33": "5JbSnjtXD1q8LJVPgnVEqrXz7PwVHdRCvPWvsjGJm9XjQaf4RyhvqHjC12w34XTcj1d9Y9dfYapGXXRcymce1Rxe",
  "key34": "2Vw1eziVQnhCnGd1uUkDt1aVTai5kntBp7HtQ9QSiJHdBAPXVjqidJThTCHTTLLvmp2wnZAUP1Ngtdu1wL9Etxr",
  "key35": "53d6wQBM3N9HTXqzNFXxfS132d29LsoXt7BzJN13tzVJzZ3Nnr9WWqqFmjp3zsdHm8vxGD9Kic8U617YJfUq3H3d",
  "key36": "5HEwRXF1xt5FzA3EqH9U5HiaH4AYPxmMX9wUDR2tquwwTWuU3oZYkwthHpvNA9KTRq3DVsJ95Y7L51gkaJ58qkpn",
  "key37": "4kDNwPAf1rNojgXfs5KGqqJSkf12rrp66UE93TuJvti699iB716NR3V8m1ivLmjtj27XAkgtb7k3e6aVLMUcaJfy",
  "key38": "5oZ268rED9tCQky6FMNxZkw2H9i4YMNBrtkt4NYQzdYHaTx7VXZamBRa5cbjE5JKDdv6sy7aYG5FkPs7ibHwPy2N",
  "key39": "34WDn8Bkm6rQTz2kbF8hhtBfXnJ9HB8sR2cCYc2Wpcd4BiJhsmqCqMX3mtfdPuS66xAnynAZjSxPpdv1CELrJ96d",
  "key40": "3YEwEcWQTpUFMXSwF8HodBMALuNweZMrnpb9riScVASv4Ca71AGVE6TwrNsnyNpw9wzX3JzYWBtjCNa5pipdySVv",
  "key41": "8Vze5UGSh4ZVGHzAytW7emSDeiz3xW21Edp8eT29YYNaTHthxvdyTNv8xq4axXQg4CM7j5TBHkQ1MpWU39Deb1X",
  "key42": "62vXEWtBQFqhLCQvBPd6LsZstkD3PUGhsES77SeLD1X57LZQX2prjNn1jiZa8KSysC4eUEqH7oJnoJ87WqBm6dhp",
  "key43": "DpRNezcZrWASRfAqfeAZBwFF4wRvGDU4WXSB4hevd7YZJNtxyzVQuRwSAfyQ9DeTrBttKeDgosiSE3jZaspMTXi",
  "key44": "3pLWJG77rYL5Xka3ZEbiQSX9LybM59BJMrTmv4ML3TbH2tVTnXD5YWBByRVdqXgee7ZdDwTj1txnT5A7orF4kjtL",
  "key45": "2VHY9hZ1sZAzyiGnDcGzZeXtfajy75PYFWFE87VnyRVhM1MVp9T57LkZNwvwnE3mQF2bWHmFhx2yAhocungW5zt4",
  "key46": "5dHLQYbFVXtfLCgdeXBs2zajmXsaPMT94Ey9RBPaVN599vDactS23zh8tWaok4cUKZsZoB3iaV8gX5Dpvovfjxbg",
  "key47": "5XfRXmeNpzR4qTorA2DrDmTQGEMz9EffMmDuC9ccMydBpoWJXtyALcaSL3yKFUK96J8WtwzouM16URH5i2nSZuZt",
  "key48": "3Z3DUMjvLLzcvSnymoKppTUCKCRrRhXnNfc87qtetoiWdvWfB7aZjKYsCEt1AzcWrXuFbB1vo8tPXQbymUih8iyT"
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
