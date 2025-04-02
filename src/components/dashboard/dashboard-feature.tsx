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
    "3VpxzqJtgayReQA6EGuAo7pUvsS8zxF4MrYEoerdacAas9VgH2ij4VkJ6XWagzbhi2m7RYhe4CpsxExDbTPjcDhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVUUeFTphWzKEAg5p7Z39okp1MkVAtSxBEzp7M3DdoPhc8fJXJ43s4bUmuKMpt1U5aJ4Czv7jqkLdD6UyrNDv71",
  "key1": "fH7DuKhpGTrgBaSjt4MJueErJzdwss4NzaTcdQtibUbN8cFZNgj2xGTa71ZSp14UgGsAqY1HeDX98z9kgVMzdWa",
  "key2": "4JKxZoZcqWsZyKjF6dN1fqbPqA9qBRpzD2KHV4bYSyVY2w3pD5E5cV2uubUcDpt3pixKhd1RDxVjV5LyxdnvnEZA",
  "key3": "4Knp3rvGbVftsLhe6vBQEZMiCH7XfsgkBuzCY1UZXFFurJkNTjeMezrqEFKGHCJR4yhTdrPMLuorHwQifBVracT7",
  "key4": "3F9bEiGs4qBzQQi7GzbWaTkRwG4rUECduhHuaGUSAMWcxtJ9Z69qbgaogfcDVVSP22AmUpBjNbfjfBUEVBGZiuUv",
  "key5": "2Yd3TLFUWAK9VTDeJbvQrGA64JiRbbk4riMgg5CS7NGvn9qirtYanBsGo5BJhzA1oprxjpAjRDktP999xgGXpfpn",
  "key6": "2dSy4AiiPFkuEJCo4oJrgjmkpdBjMHdrqMAQC3HBYdawGKbXPzppUCN7fhyo9pQKeBCEVk4LhkBrkyoGPnLFutfa",
  "key7": "eGSQUGR1hj8L4HtCYQCDSLZNmJ2SkFJVamApYXSvY3MoNr4vTrvju9KPSemtgPE6bG1hsrduZuCxRuZPthb7gSr",
  "key8": "215QfNSHoE4etGREGN4fQQJZrWGcj3qdFfmmarwV4BDjsrpFfGsyduzMfV4xgHeQC7iHJBb8CvE9jxAK53tpSe1G",
  "key9": "5PfXyFv3QGphRX3CR7ttPjC4SL6XqL4HQKEk3d27VZM5ixnqBaJu3LYGMV4ZZqzSFfZMyBLz9boVPxdbDUEeoYBv",
  "key10": "5h9biP1cKwUgTgH3kbAvdc9GdRjbtrQNkb5yYD85kviA7ZtAaJAMLqEjjVRHyzL7dvMaeSpvxJRaWv6BkXzL9JvD",
  "key11": "MRNcRMCxbzA4WFGM8sfeQ2LUikXRVH43sBDPc2uqc6PbQb5oEgTiY6SMevEcZ844KiHAm3oZvj84PFVkx12RcJT",
  "key12": "L5GSxqD72e3cEooT9VG8yk9dHHnXpGBURXh1xfwjVnrfkJwybdDNnxiWx2k4XP61s1HTHxT9bhKWcRpBuZzZ2Ey",
  "key13": "XD9ZWJu1hSn9T7gDhsqZhjR2L64DHd5UxqqyEuULqm1TZijFaDqcJRze7uN1YQuBA2eMfzef5LVN2q2RTWEegrt",
  "key14": "3g8LHU3kxG62NiJ6Jmk8fxP47LdKDpkSA3HKRLSjsKXVxkeRNGTLtNgttBahiaaXYfTr81vive7mfD8NpXghPvxw",
  "key15": "4aSU9KRSjq9xj4ZRbHq3iYrUxFhLiUq2APWsBUCsqRxLyCEXwpTD6ECCgJKcu2GDmW7XwLaVJ8PKfY4u7VWaCZRo",
  "key16": "4eQusdAXPcn27KyrAGLFqTQd23j7ky6xVm1YwYvby2mY34K95EyH9SNxeyH2Y3iR4ucho817ZTYC7Z9yEwmQHxd5",
  "key17": "3erbdW13y1NUo5xTEDtkPoz1iUVVPQnjGkzVf9N5NaCMTvqkDQ4rnkxvh393CwRq9bcEtQhQNAWo7vZmY1ZMyuPv",
  "key18": "QfiY3MYbL8QKTWsSn4QK8JemLVa1GRkkDSNKUKkFjbj7iq65CwCePTPruxY5tvU9Z3EaCdvqv8cZeD1UpU56JJv",
  "key19": "3NRk5bGhRbr9qAGJEsRzsHrzP3nE88b5SKvMXyNta6paCeeqedyVbx3jpUr3S3Ca8CEjoXMBjuJhkomPQ2vp4B47",
  "key20": "3mG6pMLrsZa49w1oV4qewiTSuy9JKwAqLyn6rPoXJvjT8bTWNhcyKVZ2sPHma1Q9bbpgemrTpvAHvS3VDUxWWA5n",
  "key21": "FJfiXUBGk1NYfuZ6mM2t3uYtgbGkcKEzRmD7i6Hh5Y3afefWTAJcZTek22ohv9B413m5BVU6spXoae5u6Bwe3qs",
  "key22": "31bfdt7Cx58NkgBM6aavqkomxYZEgq43qvADZZD16WJHy7Qik2AFKJGqgCnNTJbboygcASp4BP9wVAajY6i2zqLV",
  "key23": "3vhvVtkCo9dZvR1oEPuTAxR8x2XJSDdXARWLN1fSU8UP4nKji2uJ9UGrDWtvbEeUAovwsCAhroAkNrfibD7NGdVU",
  "key24": "4VRoaTrzQbAsp2xoztVs8qoiwmkiMLyEteuRoVrducbB3EaumNqUEUK4Z621rZHfdYxkAMEUBjiNu5AdKAcnsPMK",
  "key25": "epqKuocz49nLEQykDmaTVxXXj9CC5XtvisfBxhCcfjGnYMMghg6cU8T6QhTPjR9iWqW84z3MmVH5no34PCsN32Z",
  "key26": "37u8svXUY1UxbEAoNiAJDHCdjbMwEVtWAxAaM9bsip7fPJLCV3codh8h7uSdpWw14PZvqxL9gETYZ5buJ9LEXAHL",
  "key27": "5LPkfcgmEL2E4d6XnSko9f4fHiN45rDTsanZwqx1TfTLdbPPfYmrEjXe3PZwtcqUn3QHoj7g7QeYyrEuctxBn8sd",
  "key28": "2sYqgvZpfpW5b78MTaiXENxVRYzHoSuqbxwU5HYbPBagdreGxcxMfib1X4KHCQgGkgGSqgHkCEaKwJC39pNUKzbV",
  "key29": "2nZxb6srp5oVXiNk61AYxt5UUPvQkQZEtxv4QnhPZcjXAwJsXqj2uY4tzCD8shsR2hsFXLcsVA215fBb9UoT9rH6",
  "key30": "2GZcNCCHbsxGg6ebQEtrt8eKNhfZ7Gd3aj18cQLnpNfZWAXbD8uSxUCzhHa9Genedbnd5X4bihCDjD921cgeEdrn",
  "key31": "4xEwoygFXKb2eC8aaqeDitBv9Y53V3U7Eq4iHcJZgZXZvh9pDHBhPKBhjbR3rCKE1Z1f7TZjRMsXLgxnF5NHwGix",
  "key32": "5AdHArTU6SVNrd8dxLYjPBGaWCgTNQQM2DdbZAssmnUtsLdt7tBnfEkAnjoFkffG9DhwFVAhGFXV5C1CCn31zXm8",
  "key33": "3pnsQkmMBY6p5p8SE5nLtVdjaoCg8TWJi8Ad1DhugVowPQR87eYmKXeDCmYUN5VbxvHryYHxFtThSwj4niDnrDoG",
  "key34": "z5GWoedWtFjqbvPHAxk6CeahsyBHmnHSCwp5S2A6bwdBH1PbEj8H7pfCypXm2ruS3eiXxQ6EQ6ja3yjU5VTzkiP",
  "key35": "2jcYT2jfsHCK1U95BSCYFUU9TbH2r9yN93Q9gRVJnU7bFqnF2Gb2Y7znbEDdSBDKpro1unuZdVwQdRCX62ZbKg21",
  "key36": "2ZRdZaE1n6BkQC6rbqDJ5R5udxdqCkHQskuJSZdEr8dDNb294LB2d8HqRm8xyHMA7qcqMphRZwaTiqU7EojfmrXC",
  "key37": "4RoDZPZmcNQCWMsnUmcG2kXaw69EKnWp98NWLDnJ8SS6Kzvesov6zXFnkP6cByvc5QLcbkETwAwXBwmm34BdXvkT",
  "key38": "4ezrodG69inBVDd8RRXVY9we4Du44jkX2ian93krDe5cxaoSY85hsCDsN7DZCZE5JjW96Ferq615UDx1fdezpu4Y",
  "key39": "5SNjSSDPbz9T2B6BKr9q6EoQXmiFY2TLQ9HFQj7GEx1ZZEvJLhnuzRnhxV7aJiiZyckFaX5KKcYF15kPC15tMiqY",
  "key40": "4EDy1FMNciGmEt6AVjTTRiENw72WiZrAdZ8Kd7RPVBac3i3QtWrPoc8ULXMSG7XvCHnWpQ9QqHEbTomnqQ5rS63j",
  "key41": "3V8LQaWnZes6WSzaJRAJWQ2bTJheboyPZ64zHke8QTaeattACrVJPGHt94gK1DDVAxWSsbeDcS2TCMUJvqrrExdM",
  "key42": "5DVdxBBAnxqsepxWK4yXAdWkozR2BbsTY2ZdGPN1fRL8waVNMTi172n5ApkThYiM4Jg5RoVXGsDwCXacRutbb14C",
  "key43": "5HEXqGjAevHG2ucNjxbQqjp3GN4dRBDyWEBL6H5LjNWSmy47LRMuxtmCy9sW5uGtk9vVSd7mgb4df1hZUqWQ8SmA",
  "key44": "3vNet5xc26cSdALobH6uRBgYT32xznzTnoWba8nKYAvUELW7FZqkzcVGMoQUF7vnT2aK7tHYq9a2K1aWfxGkWrdH"
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
