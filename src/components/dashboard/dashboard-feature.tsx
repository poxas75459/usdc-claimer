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
    "4N2DWVBKgbb5wrHdk7zZTjGPmrQhhbNJPG19U6CuqVLnksUfcMkqb7cwbreZRKVVZDeUqQStLwBVAm8nEoa24UHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TyT46fuhwbFLzLn8uvqdzC9QtJoGeRhBQCM6b3G9xrxaWY2CzwfwQ966wszW5zedb2PEfVM2urSaZoae2PE5MUD",
  "key1": "55LjvnqDT7hz6B52c2LzE9RYQ9eB3oo4h8UK12KgrKFvGKbcr6V3gfTmQURzQEBC5uQW3rV7xAbRqdQbLyTc7b3f",
  "key2": "ej5ijtvdx1UQMquTNhr1LqzBGFVaazqcM9StL5GkzuWqPHGQruiezA2RvF8qViV4K9xGvQRb9enkNJECEfdretM",
  "key3": "2k74F2i6GwAT5nvx3MB6kmnRiNuRnvtfWuxyFdV7GQoH1k8bXcX8bnCSWpGp9sbca221iHA2WymPbMeYPjJJEJAt",
  "key4": "5K5Bbg9DUZiqTSk488hbutJgjZ7NYaLv2CGYAYDTr47SWFzhv4oaABg87Y3BGUSoKDZDQUAizhKiPuuhKqvxjxdf",
  "key5": "22e59aCueg8NnYmBfD64AZpv264xfhSEpoMC1rEgq21b45weCNXsDANYkkKgh5rS3VhGijYy15ETjzNjjKMtd1TP",
  "key6": "3rDJ2rC5ntMoFoR92aroKwzNFhZ936NqC2XvFBddVXJr6VceW2wJoXtF8oTTp4HD4uwtVNaaFFsfAF159nMgbZF",
  "key7": "2qoP8ZMwWZRZxz2w6hMJD75jPNKWyH9HaYts7ZC87CS7zf3AtKnkeDqdUMNNrLKAwDaC3P81ngiciBQWZBN3hncr",
  "key8": "2CPr6zVuwD3YNif6UifyKCPW7hapyNenaY2fTkD5Pk68HQxwpLeE8gMD2tCGEdsePFUtYijKGHxvUrRvBH28HsWE",
  "key9": "Wsj5JAcpN2VStKp17Dkc78iPTzLxJ5ELVETksLTrct9TXHk4FEmLJfkZevoGD9a1KxjPyMrZNgyGHMbAWpvZ6Mc",
  "key10": "2X19W2tYAbaqirvEcZCHorsiHRaZVjES4dCtn5t1qcfrqEZABwE6FtMvP1gcrgNyTX7QUrALhXZEwp2HaJrjP81w",
  "key11": "4tYRpHYvSgbNuaaLHWf42fiDKPDrcjSv6idGKac6myBBhmfxeW1mvRUp4cnHyyh8dtjGxYQstCN1SKmMTodGZHzX",
  "key12": "BY8ZhngroYqaXCPf6PZhD9HCCKYz87SeevcqVzPUb6iAwkyLgMS5pVRtY8Ts6ApG38t4GwziAo9wQzAoAWXtLCC",
  "key13": "2hyrJ6ZWQat34c4oGr6kobBfo6WC3fKN41Y7ZGQ1TeBrH26neLvgetg8w74vdVJug9TfnM9UGm7tNr7uzdCXM2b8",
  "key14": "VvEa5H2YsA4KdjicNf6EtswYaVyPCT1Mvf21e25AbE2DTHhTVY7Wd9H8kiv7iyy4yEs2vxBMQk1thwMMfe9RXMh",
  "key15": "2RmkdixckZyenNLSXJNEyGGAoKSBpr7pLjLrPhXNfSqK6R2zfVA1kvBHPhUfdkW46cfSTSfZ3vjPV3kGyvMs8Jo5",
  "key16": "314MFSwg9jBLCrNqgi7b4gpMxiR1jdGAH4qdrHSu4kVm7Cng9vGzcrkE3j3Qkiy6F9kiSg7TwToP3aM9dnjq5GYk",
  "key17": "3AGXguYSH5kWVaGWJgJqbqPg2c7TK1nDXUzCt8GB46J3n4bEyFdzVkYzKW5TtqAHJqdd17JBwvYLeF4C5VKPn6dJ",
  "key18": "3Y1ZtpPNfYJyZf9WEyRevqmJzrVHbbV3dcnbvD5hdZ3Cyy569WZqCudjqdUWKL55D2r3rXRkbJGjiQ2H69BbxYEt",
  "key19": "4dZQuC8M9s9Vx9WDWbcbr9UGoTtrwuEJQngmWsFDqcRovSPdnaQKeRh1vHbCVEUYjNvaSpRJn6BGpSDoj7Bb1FB7",
  "key20": "2jn6f3K35MqZm325NSwrMMx9Ft27dYahMMyFEiZohnns1YpvJSWHXCsXgJXqjrho65LXjB4muMzboEuAGQNQPSEn",
  "key21": "3Uujy5FanQqG5osm8UBNA2kgc5F25NJLqwzPu3gphMAVHAKo4muUdF1E3mhnxTyC6rzSgn8iKDFQFrgKHV79UDtr",
  "key22": "5fHDoPNEHAfAHwbvVodPF4jvYaSPb3x3JcfJSDVvSZW8S8tpNxTWADzbRNwJQS323AEmMD5i1icq4gVypJ3W3vfE",
  "key23": "4prc96iDgdJhD6Agfn4rYkQm4pCua3wCA1z1xVnKgAnBxioko3ezd57CwT5ibrC6wndtVgabuZMybRUoRTn3UgPt",
  "key24": "4Muj36k413JiuLCUVPoEPoboKqMZ9MkJRwzApDP1dyPsRePtCxjphNjJBtJXYoutJaZgk5wUeqU9rXvYWXdwEnDR",
  "key25": "4aoqMi98F2v1khaUVKg3oWH65EuTisRn7LtpV711FgyshKfjfR6kphEGJhCGvxCV6F2oGgYhfRZgrdV7m5JxX6x4",
  "key26": "32dfEXskLwo42zyAsZHaw1QcAkyrRJLd6VoKjqEcaFrgHHTXt5EBrkDTGTKHhwcQpPv6MAc6MVBDu6mcjQf2NanP",
  "key27": "3JxtJyRJR8iZ1ALkvaweKeGcXcFFWvcXdoSxaUyrD7CP19e5zs1YWjyEBJ3p3TfGseEhSZmhKYFzF2pBfDCTucty",
  "key28": "3P6i1xf5RuBEmrHB7ESeXqztJsTBvUFNhiqtzgStqVccvx2Uzq1wvsiVpqksW6fbfyvQ49PezQXVBKiVwMbXy8tg",
  "key29": "295t3H497GCMuuYkcCPbYf3RuBf3Q1M58vFarpK4u9xitNBgwCFHVtmWEUrder9iuT9K7W6gEQtQYSW9oyoV5ifY",
  "key30": "5aV2S38XZVej6Mh1paDFbHvQuh4PhbnrrvmeBd4fpWYXP6hSzuMrep8Q7naHtQ86aC1tbXcoCWSE3oQ9t4jGgPqD",
  "key31": "4YhEWnw7BFUD7xEAvdJH4wZT61Rkn62vN7BQFttw2rxXChiFvXPy3sgiCpX5aTBkYVT12srqyA4iKc61Zf8iWgGU",
  "key32": "4fDgEJ4uVA5eMQoNvKfJkJ629bFnh5h7NCCeGNanRCMs8nF1xFGev9jezSamwfKUqyFKE3g34NFHu3oY5PPcGwBC",
  "key33": "5fPL7f7L5tqx5Jsrst35bK83QNPVbz4DZ1MGuWZ8iRMqbkZot6ane47rMA7qW2dU4H6qFDqbCCvaDUHzJpZ27D9P",
  "key34": "4z5kZvw54bPPB7AcyiNsnU9PbyN2JSFeSn4N5Uvu48tgf1e54rGH89Xdb6sF9EAhfAaCxEWAUmGeg8nBXdqmYPq",
  "key35": "4xtX2KB4qX2BnQ6CB6u6EPp3abfctY7EFpbGsTjpk2keNWP7jgfuE38wBcGru2TZgbWWLjwU5LAWFnx8Xzcwn7WK",
  "key36": "2L4K5zPs514KroZaUefQd8iaHZ4idzLUvgiRCtsdpV5Jdmr1GqsR4pJUeZCTRPuPHm515Cj91azC7hyNo43qwzrg",
  "key37": "5wCNje16XxfgYVKd4B5tE3dfoPiFz5rsEnZGZp6yJw5Yg4YW58Jaum9UcaokAoeAfQKZ3om19QZ9bS2Q8NKv5DDF",
  "key38": "4bySCQ65a9sLAMGGk59VDQemWatYGb3HEAnc29V9QoR51JJoSqW1WQkVeweWDS3mTPEyf79boeTyVw3aaLvRWP8Q",
  "key39": "wptX4eJAgYNPQNgStA8QFzdp4xt79CStLgBT4ZQFX6HRPGnfKjuk8W55KxmUKeHpTvr4devL7s6GqAy6vdHetQG",
  "key40": "4p3Wcp2UnWkbCsUmYwwtHAVf6XESCGiifrpipZQZ7qrdcGKB59LDTaYMaxwhWK2PWxULbFniWpu2RQfbkH3fDk96"
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
