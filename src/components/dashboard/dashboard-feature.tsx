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
    "4twLhenkN2T4XBy5HqyTCcEa9nNyPSLxd6Ef2Sffv6UAX9VpTP2PiVgTpp9UewZaQW4KVCp86zDNxFCcRAM62D2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ouxyXYbTBamK49yrgnXyR3GuVBuFBByXf5ZPVdmJiQRtuShXiobPazwEWftRYnXN9rMDkJ63BjBRPUanBdcqcfZ",
  "key1": "2Ui6YP1p3vVswG1gg6Ddm92n6DPY29pab3uKCVLgdWbksk2SMEHkN25TzE1Yi6s1ytJx5v15sy89A76ueL2bViJZ",
  "key2": "56LXm8MxJ7G2uuAbycXPZpcKDndKcvhXJPzN8eRXmLs4decTy4VHkSDdAoCZdX9dY8aCEiMy9vhACGWcqNKHcRjC",
  "key3": "4SZ8zic82vmK6mQqdRcXWvE9Z2iwXsAnEc6jhy77acVtzdWGeTCWcn9tn8Gw8ZV9hnZ6Mr2jS6HBpxBwU46xu5uW",
  "key4": "L3rZSjY9LD3d6BiBdobDyn8fg9Lsicap8j8qGbxrGFLjtHn9xbbL7yecXbrEfmrH7PMjKP9UEnUBaqACAq4SebS",
  "key5": "4MaTP9umUUAhQxNuf7BSdRPFzpctycsRBjKngyiTLFhC7H1ZjgUQWBoed3NUGvUTJUqTQs5cTbDngYifziSMfdHb",
  "key6": "2zdr7Yg4mYnLThacLwP9q44Rg6drEoxXT2hPP9BewuAqDz67cmHg9AqV2dMv48dzrUc9QSDusFt4KusrwVGtWDza",
  "key7": "4RifXJZhE9gVCPZR23TmS43XhidLrui1r8bsbEM4gP19p3fYPK8FNuRH52UeuiWTiAAGBzKupzBMhTanNHFqsTrU",
  "key8": "3TRmVfGzmfsAwdx4pS3WpktpMhW2A9Lks9kq2RuF9RPzCrsPtpGqsDVoSuJQYBRRnVcfVjgN2krrCwndHv57UN6h",
  "key9": "2qS5RjgyZVQLqKaG4AgNqraoHCBMmQugZudCucAPm2H9sLTxarmNzzwGozz9EfVBpLvYy9TE3Ny9jTN2UWdqJn8z",
  "key10": "5QrgHQgULkwFoRJQcsXV1nu4UDPRLtp4PM6DPctB6UpWxWaAVb2GwQpftdUzF1nRZgHQMHy34u49UWg73gRuSiFM",
  "key11": "2hymS9Sc8gzqzuvHNPWfBYJJgEeY3z7hnW3n1FPh7rhrss1NdASucU61EJqEgzX9HqyMxPhxGM7qMtJNntCcYjfz",
  "key12": "328GJcP3rC54Emh2T9kdaSACZRzbJq6R8z9wzHhvEyKKBPpf9NDQaFWXRvPhiaYa22iGLR3a9Un4WcaffmqLBfYP",
  "key13": "3fhZJVKgzQ2MGYdXkhATYzrk9NxCTtnMXbJm1Ho82LybjPGMYjZbWwb7g4sZks8FyyoqhnT8n4ZS12AAoEn6YRCX",
  "key14": "3YjgHhWQ48SpZSUQaNbrpPNkBiNMCuYePycUKo7XAfxxza3pwWMPQRaM9VS7iwyG62i3LCzVuAhqNfjHvbo2rjoa",
  "key15": "4zFRZweap2AnRhr89PVXaMSPRX5Ad1NDaYvCJ56uwswHfCseqrBVR8wUT3rJg4xo7gER9cUNgnxi1BrPgdH898Cb",
  "key16": "2AyDHA4Kc1FesdhRsTXqe7MN48k52RPffrU5fWjymJnZZXjwfNYFvwhhiJUnDaAFbGUBnvTapPva6FWMS5UgY7gU",
  "key17": "3SXNNCRGMZR4BEKjn1FjePTDDHa7GjxqF7o4z6WCM8S6Bd355QxucFaQt1gKJPsYsz5UBFbo2mpTyR9wAh9C47LU",
  "key18": "U8VSQ6mfCeRqNn2JqGABbV5ovESKhuUH4TPKRbzbzwDxG2cv2mpusRSCgTqSGbkQyMX5NSemy53Jgsfk3AeDmm9",
  "key19": "LJyBpjJvxJ3ytBrGgVqD7bnYfVY6ZcDNBxRaSSjcENsF7PuAQQdxRv8STzFhaNW3b5Wuo2fZjwFKBpf6MiLaXwt",
  "key20": "GFF8AucHMHa2KEiGJmKAL6YR8o8ZxYfxnJUric7xwuo5g5TWmptHbehmJz58oqTQj5DFX1X595GMpXkcgbfmfpi",
  "key21": "57fdA3jgsfBGhMGuhpCVnCxHaFDbgsd5nn1z766H8nLJrdHW3XCjUerhK8maTUQD5GQcxFTqzN2dHNQtcZAuEWi6",
  "key22": "4ByR7BYBDsbH4XexFHvM1bTrev3Cqes9gXvEj2UrdAnmE7kSeaHc6fQTuEL6pctUYAWBTWerbPS3a8EPGATXLuK2",
  "key23": "2Bq2rEoDd3uQL7vJnL2T1wZh26Ms2oRiJ6B4dMfjHXruUjG9vEWB95pmmzCne4a8pqtE1rB4XKFsG465ecSG7z5A",
  "key24": "44DyWhjVFXsGTex4AFPFErFB8RiYwh2GBYL9iWxsPW4Fcx7j2Byt9mn9qU5e4KFTjcM81Q6EsXMPLxL8cNecd7zc",
  "key25": "4v8sQB6GcXi6JSGX2bH3CAXo7P8H9g6qvzhqoouBzZPge5JWfTfCmLvv8fjzZDjt6vK5zcwccoeuRFP9RvXgpkYH",
  "key26": "iXVSe2YcezcmRL6r4nmtRZXmGB88rz9hcGUAxbZPqdnvuoKFSRr1KVvJyDzqsBLERtDA3CWZM2BkBXqMDxfiKeM",
  "key27": "kR1MdzMsi6RhNhBLBA6dz1npWLupzX9kaDy1NYq8qwxX7fXJCZWzqgrZ7UDeJB6QvTZKzXbmHrkTiJP9eZ2AP7B",
  "key28": "4inqpPs15TnHmk6WD1RqA9iFR9yHmjpBAiAvhYtomsujXQZAFXLxmRdAEcpTELurtXbzYmwP2AZeS8HhhBq7XMUN",
  "key29": "2oarPXQtwdqA1NCEbmGMmcqQTSDQHrhtfKcfy7Xr3Awpxtg25veFBoy4LqQEqeyL9C2N8zFXxiaU968CeuXCyiyv",
  "key30": "3U3C9a7AQsFAsmihAS29BpqE18HTd8rZX1jtCPwVhP4NvwXfBFaVYYPUy3XvRSV7gUo6MU7LXNPqg5WfuTWefvsJ",
  "key31": "4WkqXSWU9UNTaA2EtC9y6ETPQoNLZgxoas5YiapjTrScQRnhcpVy5PNSUXpd6JNJ8ZkL2qMYxjUtD2xXHqTfAanV",
  "key32": "2fbpovi8uPCig8TNGQ5D7QMieqAAv2XE9byCWHHj57zjkh7YhWugBRKamtNHJx88TdHxKHCeNm5kzhcryCW4HBPE",
  "key33": "wvy3asxfr5RL6ruUS6jDeZUZKBawa7zo1HP9A9ZeP4oa7PZR6cU8QumgUeLWmbZ55xX2QTn4vyAC8w2CJMUgXXG",
  "key34": "5YdpXBtifRtB4qw41Pzo43WmZ3juJmzhekvMfAY43WZADfFb8vhgj36WW9PijrCFT2KesoZMcmWMyPgtM716VvRu",
  "key35": "3oV9gtetKgYyMwCTKAQhUadL3YT61GrEjn9zf7vwYj6SfmT18YiaFsbxA2xPEuqKXzCKFsZo4tLdMYdNzsZnHoRX",
  "key36": "59H6jmxSqafx7ChPB4Vftqgcox7vgVuHYH7JgixhxcrbgjwxzF2KNctcf1nATy298egv6V3tpvFnTUGayQqqCxLK",
  "key37": "5dkrrCCTGphy3xaYYtS6Keb72uSviodgf7aY1r43ehhhsoC5VNuaBGe4UXn8RwCXS7KAm3Bu6XFLwrGsujzsz1cT",
  "key38": "39UziQsePVrf2tFUKCoEXUxzq9Xgeqhki4aPmVL8YV3XvbZe5GhBwswpr79aUQcwMY7Y3qi6VqQ8yXSSES5XhVQz",
  "key39": "4eswNEnNohHD3ce7y21BbHxSFjNynnovMhnoV85davN4tnnX3V5ZSYPiuVLLxobZpE2vjKTXtN6Di4nLvUxVqVNj",
  "key40": "5ZLfSzdh6ccFKn1yHaLr4fUamoM3VNbYajvXYmFtYotWokeshvtXjLCrShb9HQ9gf1mhdGrc3RCeN9kkduajSqR5",
  "key41": "3cyUeSPhHVH7XgfUPpfHpmypaAh1M9Lc3kA7WhAWDWP7wRwJbkYhJdobp4zZf28YZBc4PsLeZw3BTTReKaSReDis"
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
