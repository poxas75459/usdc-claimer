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
    "2TnzwT3SiSydwdYQJYNn3XTZwgEfEhP5mwbFTEfzGZ6vb9Won3Mbr42baSZKd269Bb5zGKCCmg1vZGmYgJp2B6AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ms86K88zzUg4AzpCXW9hBoHvdHteyT28Le3vhusc75XN8fWdkR3ZkPEmX1qK8EFWmKuu3R548DAuEbcD98RYs2s",
  "key1": "36bzBy2hKbGCRWcLxvo18N4KK4krJe11AeaGQhkxQMYzHAo7bp9jf6w3bT92iLSimRydEtDqafTr3rcETZGJ2X15",
  "key2": "3T1ahiiJSSUyio5SNvFk5csS2N7ar5NoSoXyTFJcE5EzKV22jPf5bHSdMyfyHtKn8bSvns47m4oKT4wXK5eystss",
  "key3": "yuELJrGhk8BiseBi6cLFbuYEYTZ56w7GLeUCwhvvkfqssb2CrLWKzrvT2KgmBjwR12qi8PWkxiy5x14ciQ9LrCE",
  "key4": "4LNYSVdpYofy6x2vmphV81ApXvC7an2oLnwHHAZNh5j2QwWkLTb5dwsD2y6GixuiU5VT7jBvjgEzF1z7SuWRTLKE",
  "key5": "2bhtKCp8oV9qiSvxZ8Dh44BQCGEJxHzh8R8efRVRgAL6NJvZCupJ67vTLGZCvZ4YMMFSyqsEaC9fuQbCY81ap3cu",
  "key6": "4b7H861BQKwHMfe3GAYGG5oQTsVHkThEPrxmaFSDumUGN2WviLCXLAY8SWru4Vu3wV9jtT8dhuvmPQdHQwerUmx",
  "key7": "KfXHsya3DgYnTX8c77PN442KnMrFpyrpaWFX5w2Q9tiGgPCnxs4yZ9buy4kQ4DSh73H9yuefRc3EAjvnmCju9EX",
  "key8": "5T555zapeAKuT71EMFy6L2BKeqHDTdp74m9V6sMYQ73p1uearxrnggqpDmfktHKuYwBbYZKGBMcaEK1J4jAHSUnW",
  "key9": "4KKQgfHKrmTFqKGUEjeTXcckfGqXCPNqJLz2SsJBUaDA1RonRbFWJFnQe2xLZDQ8cMTaVuXeceGjq84TPoD6ADXw",
  "key10": "5gn8jdFXrtqF9EHUUwGMikimAxcbQZG2kHpTXxpri13UVAKNdRmPHkedYTwMb8fzG27seWHpR84KChyjn1XDySEH",
  "key11": "33p1FYVi19Vv8Fua6z1FZyT7FhAGnHLE8k9rEZ1rvVAFye8TXXfgyUEuF8645HrkmSHLoewqcS6WPQgwGgAoJttC",
  "key12": "2shMKn1rTebujcNdFKRd1FHh6Yx7ptH9a5oqhMVGujfiAe7YyxZtj3kgenh9ecNWw1B6V21UAzkEPqbHk4DD4Gao",
  "key13": "demMZjUusuF4vZEPoKQGdnZvPpCBE1MMsxgHRdXMBYcwXkhBZ1ANVbQrT86KGyjvjbCFPccuUF3fq6sRmVa51JR",
  "key14": "4Fzadpf5GDGjzARr29fgv3ARAfHbHVK63fK7TYk6EH4wuLjWqTJCwYX8KMA46RZSSPbPpvi6VLTW2ojc1rcNe5ky",
  "key15": "4kv32e7U678ynhTPzfPCNNiafy3PSzv12rsXCMnnkaZ1B5YBLC572Cmz829nK7mgoPWyC4FJ52kJExGihF5ssbLn",
  "key16": "KfbfDQnrqn8HQmeBo9XdQ5qVcvxWgfZJUZaUhtsJxM7qh1M4DAcE8fpMubzi1RPswaRDZDay1kjFHwFWqa8cTQB",
  "key17": "3byuGzXvBP4GgL5U4ygLejFYDFc8iXQZXZTKc3GvFg73YDvmgh8sPHGtsiqbwHZ8zk9gSXzzi5bxZhXoB7RbdkN9",
  "key18": "42TCLSUjCXPYkUSaq1nCxJVJH9QpoKyypszHJ3QjdEE3KE1mZaavHzEjMwnnKsnGS8s4aK4LcL9iNUS98M1CCRNy",
  "key19": "3gNEPYQzKYuFZtd8h9vVxdqm6w4neFYYgvgmoYN1y7TK78eWmbEyyhKH39DNLiu9Rhwn1BVZge5U5j3R5vvtjdmd",
  "key20": "3m5Utq45xEG4HfkSD4Q81SGxKHmKfKzhvq31CgYfeze6HZJ8rDPS18nCWDHNRShN9kVNVYZ6FcFnfqsbBDLTQcsA",
  "key21": "5NxfzvUkh9aW7uu5Jxum9uUtPHeU5eHHkr1gsvys2QxoTYCPoL3wqji96mhTJWDTTNVjGMF9nAqmf3BFVVVar4QN",
  "key22": "5u5YsaBe3zXbuL7BvKa419BUca1ohFFWduQD9spYFrmhXq6pPYLrBrnUAQri1BJXQiGtegqaX5JqWnrj22A1B9Wm",
  "key23": "3EHfcXeiGMbpzf5yq43VWtkepiDkvSmEhpvvH1bqAqHuKp4toHdvtP6pJC7Q77G3xt4zX1NiUxXbHcwSBUESqvqM",
  "key24": "4UjR66qm6sxQEtPHS1Hx47Fob1LysiT9Vfu1kvJxNqWoWeCMM2r66nhKDXAwaNafcDPwRhxPoCvSBdhaTUiepi4A",
  "key25": "4nL12R1fgJ1sQKjz7JiKuaypzuH1gHqXLvhyYrKrvEfReLhwr92CXS7ikgsk2Jif8YgBWQJxEfypdNDwBd9EbexN",
  "key26": "4X2MRxuoMpHCdc5rsFTA8WmHC7prdnHnFt3GTCgcmNK3tDDvEj8122nsv9hQWCRJ4iojcZAbAc5qhYnj1RyvE3WW",
  "key27": "2JAdrmmcGVdwG4khjmDhuYNKidtVaZKaNf3TtyppycrVpbFHCSaRC5cAnnBJCnRkkeDjvk8RJax538BqdDjBvWZL",
  "key28": "5wzYevR9EefVPgruejoYEUpA334fnfnVCcrE53NjahQ1qq45vcE4XZtR8jB6QG4GuWAXLAUDjDJqfHc8H1VY8EGb",
  "key29": "3hi2f1Y8qB99v8Rzq9x8hhDERW8jkRWKtk6WzSqFmYBwUnDUnofd2dfEXLtKbKyUagcbvTMxBRnpdAiECnTPMQhv",
  "key30": "2zxniHNhwyMARRFDiBvUnU1SvB6i64yZUqsJjncSfkQ6Vtgv4TKiaQzCVEsxyyHs9DpeUXJgvbARa8yYyCyqrUcZ",
  "key31": "3a1kPpncVkZE8hfijWuAJkRbnU4X91msHNUJGYY2jBU7pr4UajGsT2pobHFNGfeDTQd1X53BVUCmnxMxyyDdXUvq",
  "key32": "3jo58viaLpkvgJLzPVsXeRMw78S5YpMLV5oraMNhq4vVC7sdsv1uc92aMemngnbzCJWmSqsPsTsPdwLxTXeMLGhS",
  "key33": "4M4esWetJ7XFpMwBRgoCyctBF6L4paWLHZPawrhSj69k2NJJTv3JXPWpoNPuuKVtWPHELuowTnm9dLVrkS4LU7qR",
  "key34": "XHvUT96oy5kY91Y8Rsm4dCBa34Q5aB9Gm43A7NtqgYW6hpg8SPA5c3unZenaC6mmpRftQw1haiqWzxvK7L4ZZwW",
  "key35": "4rdr484aASgpHWcjbstsz5MCbbkaxWkDKdmWSfrijPMhNQu4dGSMBwAb4Q3AeA9Zk2oESDGZcp9v79xfvDAFR1tK",
  "key36": "2J58dB7LjkDFQsjVEV1VLc2MkpNc1qpeFAHvaGDKwTQnaPzYyCSgAaeHF5R6CGy3YbyXaSAnVb4cFnqxLB6ixUnv",
  "key37": "2qJhZHdWswfC7XLnPiESMsBBbJRriF3oEc2bYHe1X2GdQH3LpLpMbogAGZpDnzhssmrZSDiSJfAptYmdvaTkzZXe",
  "key38": "62V28NpjdFT6V3BfNFm9DJASZahVkskjV3zFPyLhmdsJ4utx2Dpgzp7R7YPUuBufgAUrG2u6nGdrfzb5q8wvov9b",
  "key39": "C5VwB3MP9uTEYTiw4c62JEDpaySC9JYrEHLmfwT1AGVqojUN2yyKqCtPLiJMSjPK4j7q8b4mZ1JebkE5NwfaprH",
  "key40": "5314P1uEet6hkrmgCKn5cf2LmWw9fxgCG3A8mbFq9ZEWRCy5cesVqDajmRaGN8yyaF1Ms6JNuBR9RN1sZRCxrof4",
  "key41": "4gAjYXaB9a3P22rzMCDao9hMtvozssqnowEzhChmKkkaeuHPCbS6NdTDFSzzYDvGvaPS1KhxgxSVXwsbJrRmuWAB"
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
