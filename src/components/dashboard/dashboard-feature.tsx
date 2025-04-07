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
    "3QCXP2J5fdrrWFFE4K2YyBWzSzzPdVahuSburVBVj1CuTD8iyqoSpdps6cNqzyPb2Lxww6rTtDvjVpUpSLe8aWc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5nJyqBwJ89PPi4McdmMt6NsWGW1N29GwUVR8tuBXii5MnU6dvtpfueS1Z4rEHdVGcJskT9ZE3jNCWM9YRgRuzc",
  "key1": "5QcEHGvuNnhTVSUgcwy8UnbNYKArAzRarhRxCfKoRRDudGr8XbX5szo3QEhELZQbG2hofiMRynuLnkLnZUe83uXd",
  "key2": "4b5Q5PX5FEm9z3shd4NnTF9H6poXzV3UiSr8gf1zw45TACshEVW7SmXcNrCYemKvaS1kJNP59VAcCCh1upR5s7Hb",
  "key3": "5hczy61Gei69qhhCjopbXevEGSPbKCrEqpZGtMwD6TbU4E15ZpTjAAuca2Jwbp6HxPnHqjpMjpBHAHLysAQxc5nv",
  "key4": "2KtwvQkeXdr5uv9jgqaB5BpQhEwML7cQvPQw5Cw4FQkGYBs5HepWWdcYz7qonuyxFnb9mGTN4LbmVcZXytDNvgKu",
  "key5": "3PYyXMaJxi849VmZXNPNYAVuLZ81PXG65MHQwGxFeLoUQqwqKxqKCabkJbJarNR4M3yLiNZgcV2GeFZQ8hwi5sNE",
  "key6": "3pjtwjKcyB2LoNN82yJx1cQRV8foPA9cbQmcVwh8GJ3DfrRxFGvp1TZ6ouzndKALNsnSJ4JJbLkxupujeHxp8U7V",
  "key7": "2WWtEmBbB9eqWWRdhnAbK2un3TeuyKg5x9t5B4aomxYHSRDXrBztvSANUrejxuR7MKT73BMB6vZySMStF6Q7J816",
  "key8": "2essoagnygyCcdyWtYS2PeKjGsfz6zKe6EHQk7XxJEQcdjo4p4BDer8c6C3mJ822qvJkxt15xA6RHMm7ZEEDsN6R",
  "key9": "49LWLbicEuYadVyJBsspPsz8YkoDiLDSSQF5qZRnpDfVx8CTTw7ScYMo7NJ2xkwzNcPTEidqjov7WpKdyvm3zJvt",
  "key10": "43mPr9xdAKQjK5xzuJXk7GgGiZdSSfEjzSoGYHbF3GmBUc2iRV36vscJetzwHnYj8Xfc4YooRTA7b2EyqJDR9Js4",
  "key11": "xJ1vjWuxoidv2RHR6Gj3nyjJtH9hdFTYumdssSpFDcCc3SStuFrAWkKRBHzWXEUgBgvzzAADZk2cFeTXNDTECYg",
  "key12": "3PwompkrjugekFdN6PAXu9atuuYhp7cegxJwDzaeG8hvJcZxg5NkHWbwjZ2TmJD2zhausgDUE8oahkeVgRzHwA72",
  "key13": "5kaUzt9ToXe1UQkzQucy6noaaY6ejRjX9Vs9nygdmSYDxHCpENBtwjHVwQuiZL9Zra5tnqrf1u5Sr8oZWK97Fdok",
  "key14": "5pU6mV6bjh7t8sXC4nbXoi1Jrzc6Hk41knUHiTN7iNQS7v5hV738CBcwEuqBry67CDTsoK3kxbaSiDoLdHKPKQgf",
  "key15": "4ohSizhXxNH8Pb4w5iuSBvs8uhpmHYEAGAY9xK5S1UvjFD4rwy8MTJfiVSer1YwrEDVb4HE3ugWGJ5BJVHvVPfmv",
  "key16": "2fsBjDPrHfkSMicVSXbjP6idoN9xS6GEJUtcCUETL2QTvEg6wxFy5YKKdqYdvHDsL7TraV7LwRa7Wcu6Q66gAL6K",
  "key17": "CDSaJeGzWFDGSY3U1CDptxeCVS2h6JjGDmcxFCFho7NGKDToxvFr9HMhf8FjFQCdtj6xTTEAYT2QDuPJA84PAgv",
  "key18": "4H9pVyKcPbVccfQP2dps69HqrxV8ZhyjBQdtaC7vEmK9GRbDkCSYDKMtQdvZqVL15LiaQtSSNfnU9jZznpRGS1PX",
  "key19": "3XB5sR7iFrJoKGcj4GXQQkvvdrEnV5HQ3PbVAjyBAUYumX4DBZJNRwr37vcdF8pLURLyP8dDbBs8xP5fchnJiB5p",
  "key20": "38146Yna49tXC6J4WiNwHzPwmABZK7n2sSCHaroSGEMh2FwjJeKvALb6bGBfPtXvoZ2m7KrXAfCTKhUiWWo5ujgT",
  "key21": "5qVBztLqWmVKNpqXGdh5YtnLpUsLbmVgVjDzFKWbXv92S2fLUtJurTLzoe4bBZ478Nfuvgm8MNsTUPhmEbveQEPF",
  "key22": "5dvCyX4RHwZDrFoej5tnBiQwVvb4B7SwsHpjC118bpWa4RdsPeiFkjLE5Qrq1GcbMywUMSC59osuN7DLBLY4gotk",
  "key23": "3aRJya71KsCN44bJLw17tengc2z1PaD5BETDRfECSVD1MGMNrjym1izgFDxNV4bKRkBREJxzoPCS6d1L9aLasjkf",
  "key24": "477KSPqYE1teACnkMDpBwhg7og4jzhz6fcdFPQ5LBkRxMtnmJUrXLzcAro6ysEhAGzwtTu5ZjiU8RbMCsezKgNiz",
  "key25": "2xf7N57ymvQ9F11KH3ePTAnQ7qd2s1SL6YmjP3jjSAdHxpwu9WCKXehYA5p4pjyr5uwgmmKpE8kdXUFqd6vaxX3n",
  "key26": "3TrGpDTyYSGiVHUCinBwukV63vkuCuzX5hZR1b9j7q5DzWe7ep46NdXPLYe7K9PUVJ5E3En7JkJsbA7JwwFfxYK3",
  "key27": "3uYjAmAp2Mv3ZNAgzm12M3v1v65Jsjte6gD5MA3fFVuaqWEoVjDnsXwqVAuGZn5y9SMrXw91ML9HdviY3cKM3a4B",
  "key28": "4GnSXG6fsgcei5jAR8vUPEpPkA1acxkq9MnJ1j6w9fmbd1Kkdc7cesATyv5AeXicze2btJ8RczuneYpopaPHNLhs",
  "key29": "2dtEWRm7xGcz3DwxgzsM9s58Rky6dQ2SnSCMEBZwycCkjedNmK3Wc9nDVBv56F4roRVtxsqHWAezrpDkZp97RgYr",
  "key30": "38dXvxig6JwGkfqYqaRti33HXCQUrPDkppdFiuoYTkAU6gE5gFpzezwHmu46CMmjci4eVv57A2YHzmNKScLGsE5U",
  "key31": "5X8GpNooQWMVwK8AHu2J9UUQ79KqmV97kisKtsbZxSJn4k49oiDXfCHN6SYghKR5yngDqH6uYJUNbmSL7ziJhC8d",
  "key32": "4hXR4xT9u4JDebgru7UJnyUnqoXrB3JfbVwQHauae5bcpfFVMwGN2vWH51RLhg3qzguR8arXEpaPVC4d4MAEp1YF",
  "key33": "2XockKUtjZe3kwKa27tUacXtU2frjKjFAaBfmnmCs2oQokR2xWxCKhn6dERovZjECVMEQ1kr7u8eLYTXqHqsaRqN",
  "key34": "2wPp1md6xdjJ49xaXn9adsYDhLLY76eiPPD6utnNrG5ag83tvWkuZY6MkytuhYbPGM3LuAUVvvk5b8xpoVJVYaLx"
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
