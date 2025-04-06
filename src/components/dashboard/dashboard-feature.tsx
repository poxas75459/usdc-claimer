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
    "2JtcK74vFz1kBMND1En83jeL1aJCMQ6afgPYxQfX4ja6JJWHoaqiQ9R7RZJW9qiiyH3BwhGZRFKBjXc2oF2cZmcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22jUodhn8hn2r6xtNpmqRFa3ePpubbgy7BUy46xEhF1cKsfARfkQ8UVE9NrvqM7Gkvgtqp5JVz8eSLYtkxkTzddu",
  "key1": "2CpsVBacdKpD14j3zcoMTkjtPkiLDTXB3E7STz7aNXj5jSkQu1wvMYotqj4fg4wVGvpx5MEEtddfE4A6ac8WJ4VS",
  "key2": "5ThjhaxomnTMfngyhSJX4dH6aL9uSGH28yW7WoE8tXPS3tWhhaMu43Xmh2BkSVTgXsxXa2qHukqRzKAg1X7crA6E",
  "key3": "5J93gg7pTDCwq3ng2KCKrVW3bPQsEEBnsvm9HpLvKpvkkEannmHqsEwunDudhaeaGg3fRkdPVgXKvZtvJLXhwAgq",
  "key4": "5sK6Wvuc9wWN6T9h3icKFUKZFNDiEG9Tz21zAePsEAUk5hxPbrwkyF6SES3pwRb2pWiBThbnjdVLxF5hVX7ebmhw",
  "key5": "2UUSERNFoBy6xtFj4VnEZd92HoWCWPKQz8jKgA6vq9LGd7zzxDNF6gAhwSKNNZBcpWX2sCgy76DWb5AKgPT5EeBQ",
  "key6": "5i9926De5BuZz12q4yZgG5tGuDVPGGjeFXT55ZHCn3BA2eKwGqXpc8C6JyWUiZX8CAjTxf6cdQFfkYSCSP12MmLf",
  "key7": "5TW34XeTeEY6HwJf7NLtuwaG8J4BiRXxTGWeXA6cpZ9cXqoMFDhbsVAZDS9sWCobCbbuVxxqZxd8H5QupsL6CiDu",
  "key8": "28fB5hGvziaPfwGcwukFE96rhQRCXaR8mKPgFK1skUHb7iVvnhhX8tKdHJTXucQVMottsRMWefaFPEEfvSj1V7Nh",
  "key9": "4aD3zt3AJzo2q49Kbdofs9k1oa8naa8GJ2R9TFvxQqppxMj1wr6SkVDZus2P6X8XBmEsG3dyEZJB6y6eUwHBs8SQ",
  "key10": "2vgd7KvhQP9KrDgoLZN47XYhB9Gtk88dbNbtKUXQ9bK5nFxCUf6L8tmPD1pY98T73mJ62ExuJXsw8Djo3EFACzfD",
  "key11": "4HvTwyA4NoQ2QnwY3RAVeSsx5aj3ghhsZPn1wdkTFEhMZK1Cgu6Zt2ZcQbyyvoRiMrQTKieq26Ps1qDi6bx87mEK",
  "key12": "mGewp6C2RSETsHvRXc9F8NwRYNKYWCfVZETT6AFVUTa4D2EEJ3HrhYi28tkzNRdS5RSsx3xXapuwJZq324NLoKW",
  "key13": "2Ptc7ekoL2Amgeuo36XaKaMCdRCxqJ7aLjCDJAiZHXMCGoz2NjicBEzSYrPYtmro8cKdojYqkdzuQLwEHRPN3VC8",
  "key14": "5UJaQEzSXBBjz5FNfNaSTsycYSjsgc2it5n9NWFEvnjvFL8V2q3Bhef7ELebdiMzRzkKyTVspDE7BW5PRQQ36ExU",
  "key15": "2JWUHbXKTXn8tQHMbtPQyd6Qi5SwDCHHU2MduAjLNjESbKx3kEiBm4ebWK6ydNyVCQ7SRoygZSfWqQJ6FpegitQ",
  "key16": "3FzyFrQ9vVoopHcBEREHyruNSzyeXka2GJyPrvRvb7ykhKfAtef3wHz9eGeTYz75zN73BNL2kSVBWddfeGzpjaoq",
  "key17": "23z5i5e5PhExGfnB7dsk4tHgfMe5gsQRBAs1749tsUZWBz1mhdzdNEp2QE2aa9LFc74L5gyJF3Xd5gsbh4p6Sptb",
  "key18": "67Jpyb4rnxoaaJjT8S3T5tDZYMt8hxpZXS4cpEbLY8Qhq4EyXxSo8dPhiW6NU9vKGTmVdmephgNSuwXpgJX9BCZY",
  "key19": "4A2GJhCGUaUGXuZ4bH7YwvA6VqRA6Tox3JY6n5Wu2n8rBZsGcTua86oqFVnK92EQHsbwciwA8McQNqsEp1ZGMoHF",
  "key20": "432J7h76ThuZUAou9rj3KML3GNQQ787FrrFxggRabXPTxrYD8Rg18AXB29d5bENxSrYJCRQphvHeKJe7kgqJ8ddM",
  "key21": "2ikXmgicT2b4yvFvescdyV5YzvnbHTR9Jo5XXh8uVh56oNotwzPeBkzZ42ackNjWNhsjLLLuQA4a7DG4J9cFSUh1",
  "key22": "5cggYCVMcnrTTjSbXBVEKxWnssSDrfLxtRzGC2MkJ8eRThnXMfDH9EQoWzccHk9rcGMDNqCufqdkSG41qVeWp4qG",
  "key23": "5tmWaNQggGJTbmWzj7FwFLSy31W9x5rb6AwQB4kUGhkMvPhzcXJdH6wj7VSijna37XDe7RrLF3hGAVLRsii4AAH",
  "key24": "3Z8aoDKuERQKyeXvdsxofUEzgyPYDoegZdimU5M46tieJJaKfBWRFcJUi1tNxxx59sTguQbp7e12B2jiP1zpFQXq",
  "key25": "4yqqs55DQ7TfW3GDFZ17SpACRubMbbj8U9obBBfsHKMPAHZZUHw4oZNNizusJK1mfnXCuNRGPGL3tFTYYb8QByTm",
  "key26": "3c7KrUQhHEN9jPfFs1TJBVYXPsTB3Hses2Y4P52JCcXQ8GadB3j63SKqAMnGWfsnH9u53iYNMi7hQYmo7XjqQ58u",
  "key27": "2KdmLXdUzQPsjJ7FYFTvHdCjiYvfaf87oadGyQktbRyWZ19jMJv3GDnXMs9ezYwCNCiQgdvZd5rsajhGbxtpmonn",
  "key28": "4CeTLajWQXnNvACpLqPZgzYFQrTpnjFwGFE2qcBi9UwHUvvGQaPBWK5eLsCKe3AiWsAHQKfwAa8y6SfDSPU9N1US",
  "key29": "3MUzpUoof9SrYRwfPhbU8zj3nuC5VpRwXDt3FTJnS9sPvRBUxJAsYewUoXYYwVWCEk3BLESAePDX7NErunAoEH6H"
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
