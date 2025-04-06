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
    "2nw1u7QvgchMTNz2qb22cckDfEknzfaCCstU3oYX3D9HCE17sSDWJwt5D1rmFLqcxVbRHUtSCPrDkTb4tXGtt7sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWfTedQuJjXEznzgRgriRFdK1NweSQF5ZbeE9LKeV3gGdFQmeg6JhMfyVwhk4hbBZsKm5cvQYbFB2nsRzUx4Qi4",
  "key1": "43PT7BG5LVTQZtJjY7VqamrpqpKjs3zGTT3HJRDnQcjjC8rAZme4jEWDDirHcWCzmC7qHfMge1DBTguHvKUd7fvL",
  "key2": "R47A1fdoDdrzqnG6mSCzf42SNxJ3JzWRoVoPpcMgeu7irFCUaFPP21b9w3v2YivondDcXbmgRzW555Zzbt4JHMC",
  "key3": "5u98HVcKN1KDXmy759NiaUs58nLt79BFB5WKwzzssjnWhTmQ1SBGPv5Le7r8w7p4zdtRaXB5DhsydSbs89vaVNny",
  "key4": "RgJs8LffCWBs3L7BZNR1hGUJ3oCb94LKmnNKbXybJeJGARBDZUdGf97DBMxLSrgAuMJSPDcBT4Y9kNCP6uGaaBv",
  "key5": "5Z8EYdPVXy2A72QNcj2H3jdbzj6VMXE2934FFVrQpJcRCHCkgRyo9svaR3P7FkQBVLGDV8jkwDoECUEqcpQS3Lwj",
  "key6": "4XR2nGswVD1g1CRPZFJb2mkErLz3yezaSnr7fEvh8VVk9YoUmkqxSVzimCmE8LQv7FqLJTBqzzbD4JxXGvBki6cL",
  "key7": "2KaNXms9D17JFhpqS8CDmQPXTdEoQNK3aLpB5yoxfnEsB2Pg9TLCkGTLEK7d4SYGGj1vtHiXUNRPgM1LKZmewmmF",
  "key8": "3NMhYgDWmWG3vBVNcakdHn8A1PTETfusg1wCgA8hLsuRtaqd6vs7T9VFBtMaCRHGf2pxdt1tCTNdg1ADYjdqBrxY",
  "key9": "4TjhJPLFwfCXv7DnNTo7QT2pH8TqVr2bBLHA9RW5VxDfjBaU3Uhn6NFBjvwn8T2ktX15QztViNpnunak1MRopXYg",
  "key10": "4QVRVPSokVsrcXNso1Q22CxVcFGuB4TXAxhknjiH3jXRL8oSMfKbrHpCJ2fNUQdd2TmC5hcyXiMr84PHn76WGznE",
  "key11": "5hHtmYTDWsP4t5Nw2QtmszGkJbgSyyuJ8cyQqnLjuTTrjGU2Er2FYhFwCzpth9g45Fg375aakVb7wQrbv1wYV4St",
  "key12": "xjSKBdivRDjGgyfAvvKje1mAqZtikxfq4AsywjQouHrhMpr4JFXgiYNkc2syQawhyMGgF89F3Zmou5JAwCzN1yr",
  "key13": "z8CiwnRvT78KPqhzFpZwvrqUFECRjC12sJQ7SVdpLanTJMYGSQaxJAnF4aUXRwEnReLHMwJPxPgBJbG2Qr6qQvm",
  "key14": "4R9u9gJaabYG7a1UH1yeitKC8H4b6U1889foz3sEy8w3kkjsAQc84A3m314qfh6iFZkMoiqw13NmC9f9FKMfZFtq",
  "key15": "55yutHd5K42vfwr89pBMuzJsw2USqCNE64Qwux3oyZQhAdMpcG64jXE9HQs5qRL7KxgGD9k1ZFktM5QN3fdvCYY1",
  "key16": "4qpZGUTUJ5xjgvoBp66XozQv6ZwMpfyDtwyH6zbPr4TaFEuCod3Gkxo72QktswGAh1c3UX4FnP2cZxDnWh3DFFoh",
  "key17": "4z6Eym4BpbnBGs8WMbNiK7YSBjvbQU51319pECG7tHL4h9J3vZ9ngPpkDoSg8uG6oaVBDq73wKtJ3XMuu8kAJkW",
  "key18": "5gF7Bmv9w6izXiBQzN2Dz9pVmLECim6ygyepuN28r6bauykwEe1MFevSXJhJEg9MijXzFHSQfDHsK1tiDTrbXsBm",
  "key19": "48cBUwWPEVrWcK3bUf1P4DaLcWi6EzrwusEfLMgxVsB1nsE7BvCXseaCmp5ZQP4E4hsnWoAEbyWnqrLZoeHat1qz",
  "key20": "77QGw78REG4pzg1p8feGJz4KtRS5ijWuoNC7fBk8GYRu5SVMJSk6JkbjxCA1aWd51eeqMuXTS6hGxzePVQo2vL5",
  "key21": "32PnB1spqT9sKHUwEng34Bcn18prtf15w6amVB4XxTrxL7jZuYnFEKt4bFwVM9JQBdanWg1FPJkhNnB7u7SjcGhA",
  "key22": "3iMBCtmwTRDbjUHKmREFv7b9MWmVTuGuCdJU52nPQyasJDnwtfFoFutq9JnywoYvidqiEeVSobDhENTFsLd4C5vS",
  "key23": "m9Vza7azv1kXYQxCsQrnkNZzNPrWqquQL6qeYw69Wn9nkF9KWgiwPDCsEPQ4NEPS17jGwrBSEw8GbaKDrAft9Qh",
  "key24": "24tigUK81x6CznzgwSKNmskEn6k4tbZQGYVpEYwBcKpf1NRwefM1FQZo3omUJeCGEMjScGCekB44LNeCZsXqjpww",
  "key25": "2DUfrSqGe96sghgJd6sPFMbbK64HSkZ5Eh6L6to7tEKnPo1NHasda6JPHLVZnwWVSuT4TXa1BVikenxTiWRvXAFc",
  "key26": "3kjLAwfQ4jEX4UYJowx926W2Qb9J4eUnTozeT4rpFsDySb6UcH4oikJ1NZiFvKrGwsApQmfeAmj2H8Cyp26TDePs",
  "key27": "FyHAmssLaeKqvLphsPLEa2orUw8BYUCm4BxQSBSL5Eg5sz1N5vYnTjGbuTUA2v734kwsnK14Aw78h9Av6eCj8Zc",
  "key28": "3CgMLLPwdCxsEam5yayxj3BvjX8BxBaGGN6AZ61xUE6VLf8jNb5sm4BZ73ViaAecHWs19tm2GaoxqKXshPx2Tgs8",
  "key29": "DKKWN4BpXfadcYnXzj3RGLgV7GJ4esFAj8PBxcy6RxQACjtxQ14sEfMHpnSzeW25MaNoPaUZtSkDJZLKdiHoXvP",
  "key30": "5DishtPao9hrKbMA4GzmK1anTL55TKYJVbgzuoP63vREyiDWFvTK3vZ4TRC85zn1ksSWTesi6T7RSY6TAjmenG1H",
  "key31": "5TMtE1PaPTcn2WPUrWhNHQUcYbV7NLseq7VgRrW8YHr471dcpkd3mu6QitWkbrg6iCL4QK6HaZH1id8vaLUSVdND",
  "key32": "65BS3abKLNT3azjv3sSoRN7o2G1iEMAZwiXCjRYsJgfWLLbcoAetnty21RLK8foUromYBFoUgeyKUKHrEYB6mBiP",
  "key33": "4zSpKcrfPucQo7NbjJe45NwGJyNGrUMufQ4o51UfNsCLotHxZD6aHacC4avcm8CURAj6mcAagwfEeuQA3RwzaRQL",
  "key34": "4z4gYJ3crp4rVXSBTVKFSgTNXa3qk8cyKMN2qvPxpho99iozhuAfLpx2EBSCxDuffUgfcLDTJc57hVJQkyHnyJ3G",
  "key35": "2t8vL57FPNH7gSda76wQq8UNYAd7JRdh6eNgsD8f5NZy1v8t6H9WzFU6aKe16rSHiZX1hUYPKDa8VDsGxyubQtHV",
  "key36": "5wwGyb54FEMC46Za76vzqD47wmZCr5tyscxjUjLjEs4vsW67ziVMSqEhYrKgAVL2BFZRdcdh9VveQh2fxBSFVWGc",
  "key37": "jMsdRTEN6NyY4YJSjGwFs8WPECGRf7fZuWGASYwPWQR6Me1eW57TmNtP8rnZbUEqHtDfzxWir3LVHjdGzJjA6cy",
  "key38": "5KNGxLmjEtdaSjfxf1r78EibMM5FvJDmyzvtbJbmB8vicaorca9q3Mx6vVRPqYGNwdWePCYW2D8cm5cgVQBRV1YS",
  "key39": "4WcuhSNWsvXZ7J8oG8Dsoom2MoTAhCG8Y7V9CDM6VZr9JcpR5hUXaHi62fsGqT8DNYLMHD94DYpQDuModSvMNnAE",
  "key40": "2ggx5bx67kgS1c5D1jPwG2bpZriGpR2WMfSb1pXZVnnAj5gx8gLyrdX7cRpNSKRjSKetimytHXuFXrHSK5ezj88F",
  "key41": "sJn5fnj975tPQCq6QHTCdt2MXRN98VYogXBQstda9Y72K3th17fJje64haD3Wrje7fd5g7J9me5jgaLU72xDtqP",
  "key42": "3ZdTaM7nShnhBBtt7gbCddvxPRQEUYRmdtuAkfSjgMb9jQoSmTQvcLDYJ8DyH8pNmBfxU4veu7P9oeucWuqDVMwp",
  "key43": "5t1v4bWsqSCva1b6wNhdWdUzHZY88bsK9dBv8F2J1tSQ3UWdJxfLcCNS54W8NQBZqeUFgxuephfCuASDzHEAF7A2",
  "key44": "5XgA4MpZukT65ZSokVZcqvpJw2m5Tx9XMXVLCCg6kavRvV6aehRjkxYgSMJwc1TvxBppN5oUEr42Pyv3noJ6jQTM",
  "key45": "fbzizATtWabjqYRQodtVqDDrbosYiVdSjq6QMdLFgKmFgvjDXqiUoE1DzFW9Gd4eGVWMtLCXdU74j1gmcVtyF75",
  "key46": "5QD8ianWWrf4SKBneqVWdJLFypZi7quawZRUUiJPFhcstRLWSaBReHFZej4vYCygy2nmAjLNqk2qBJurByx39VB1",
  "key47": "2DekeXPLfwkfJHzLrXf6Kw5AMTopgyzu8grDSoZDsPEdhFpRa7mGpF55WdXnEZZcaUpZQ1AVkWwGTFM6a9Pbdp3o",
  "key48": "5WeL1MLQ7cnj64noZLueFsXkjtiSwyDv74xn3L3mCKM6D1dxLSqrquqEE9xbAoBCKQkWKimCYYwpas3Jo37yMDZx"
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
