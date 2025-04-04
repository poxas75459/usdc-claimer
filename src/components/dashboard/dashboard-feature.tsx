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
    "9PjZZtCHqxQGMD8UaiWtQFjH9tYh3iEFasJv5y3EK4tYXcmQqLWUxHyPoXt56tgpCddwn1Z8TvXJwnz9DRrNuwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81SVdBTXRHUm7WXcDiFycbcezVW5HWPyVUdLdQomCCoJczgH5yFGKxmZmVzKbYEkpDaGKmuQuYUXoXMtmLAFED2",
  "key1": "4Vx4UNf9h9Cq8t7qcCw37764D7sADEVJU316cBK3ZUD6TCtEiBV7auqe6kyHtnD6Tf6JC41CAXxCE41UBBHYZpdw",
  "key2": "3XpLjYYpyREo7h42dvXHjY4RVzMwFBgTrbnJYPnDa84BmoFNAyPMTRX9iaudfWJsVgAAz8qMRbGKN8phhaGgeyQC",
  "key3": "3BshjjqeKXFGnrHd1FVHFvnNw2N77WeDtx9F3oNAjdSv6itP1r4gachGRRrsE2iMHS683h7ZEuPUgsY3gVnFqkRJ",
  "key4": "2HDMFwU9koqQTeGv42HBSDbx7UiASGMnt4uyAjLFdhQLH9F8vwVjQEQ79Q3gepwWBrBTfuPfv3DE1PUZvREjZ9Fr",
  "key5": "4bQo5tAtGZgZTLZ8WUyNyx4kYmL3HzLiuTKiXKjYL1rhzXuyiMfpvnqLHhsT2tjGwgZoNuQhsue2Y7EeDXn9EjzN",
  "key6": "5MDPv3Rb8zx4YmvWRZfZA36oU2mq74YaNiV8HViy8eq342F58xRG7BwoBsetxU1ki4VSoUNpWVSKSasnyU9VWL8F",
  "key7": "KHmAfTZcfKAx7LEoaPtotYNYxdZq4H7L3aUEEYAgJhTHE8rXA5guKZJEAHV39B95yhym7iJZudKfQxU7WPA12vC",
  "key8": "XUrwUArmuGwJikb3x1Z5HGuZTrDYv8faQHqNCx7cENxcRA4sLr8sRk8Z8GZNou5sLAnTpR5WTvXjJU735HGebHr",
  "key9": "44q9a8KKbN7TU5W8WxkK3Gb3EYhi9vYmX6KSdH6Tmjioq4YWrYQGt3JZjgGpXUjoETZNFmKUJqBHXR1FzE4Qbneq",
  "key10": "4ZuHEvhMPMAJYY4Rw54hGTcrsg8G4RbtPBZ8aKfYYQxuLYqUJ5UUgHR9j7LV2TGJASbPHALQkPk9bqMKDdFPKe5p",
  "key11": "2SFbSj9REex19LQsCzZ1vZQ3P26oRJmQYpZJNVnkut4WX7Y81EjL4EpLMG4HXjndk4fR3CiZqGEEH37C1k9bnpG7",
  "key12": "5LUTNDF3AjTMqjW14tvmyRGxbnw5Ngj7xKC4iipzjDpHyJ6nUEmdyvre8KUsFE2f23X6fXsNykcnDS6fqkk9o2ty",
  "key13": "2JxL4ShEiZ8VbuHXfyr8kWQqk4ju2xUtMUyGqnyWoYszbmiq9TVdpjRtzPAuakpf3he2h66eR2GNoUpzrb5syieP",
  "key14": "3kRW2qwKqbGSz2YPcJ8beh64zz5tXV6kTTcfriyqW4Rfjrsm1hVMimm3G6c9XNVS2rov39hx6yVzoAGfJXV2Czqe",
  "key15": "5GJVTSC5dqKkGmmQ64ShiUqGEGK2KZRFHPt1jeEQ2zvrVNXie3eB2VGfzRH3wVdZcHeMoNpsgCB5ZaRv9EoqtCY4",
  "key16": "4jLawLn4eRSDbEaapxHjJTUMWyHQgAx7Doj7MuE2VtEePqoo7GQPva8DjZpAcWJ7wfpaKQ6KBUrFt1n1bDySNWQu",
  "key17": "5J5EUWeaoqfCi5A3TCb3TyyGQRt3znL2RqtxbNoRJXPaQZZtEbLwoj1WDEsJRJWQC8Qt1NGawcxTTz8hZ2Lg9574",
  "key18": "5XL1Ygmzip85QQuAjcuwp4RsKhuR4D2MN2BZFsnSghQNPjgESUq8NsSNkHtL2WUN7jkNHFwXkLHfi6uukMbL5Wjz",
  "key19": "2131jqBVhJQyHVGHW8hDRvmJeu75HQYShJfv8tiA7T2yaUewNYRdrGq4AM5UzyktAfC25wTU77Ay4AVR47ffYU9b",
  "key20": "5cwCkKJsUy5LdDsrE5RS5edVFZ1QcoxnUhNLqXJMq6YYd2VpTrfdS69tkUxx3BrGF8WnYBv1tmHkM7vKFEzjdqRg",
  "key21": "2rDPdZMBAV4Ee8t6tk8jzr3Zrj9QyKfuwXQ3h1F89JvMYSxvgU5pT4FpCaMS4dSK7wFSCXgxZGzkN8SYUDwLV5XY",
  "key22": "5MipTxYtdGYiSL5bZdw4rMceE5YZ2usoriYvPfTpz1BLcsE9tfUB45vjaSJTFcfLe7Pi3EyW6JoH9QZJtFVmK2FF",
  "key23": "542zg1jA24QiDLXfADvdbEv27NX3zv7WoKJey69jmsH37z4QHqFb5KDDKvpBp9tskLTXbiCobE8qVXbFiwcGvURc",
  "key24": "62GZRvWdMNj5qidExNXf7thDYYcgrMsWX7TMwSh7QcBR4TEP6gzw3geyZkXEzmMiKrXhPeJ4ZnsPsGXNpXtPkiFw",
  "key25": "2ertSU7vqkuYj2NtNY1wo5NZ2PJfvwfqZwfisHfQRNhNGjgEYcZuUMDjhFzhtuJpeZwTbLaRnFWy9ud6nEQ52gsp",
  "key26": "zAhEGoHAPV3cjN3s4XhJvUAzjuJjxzudJxZEUXm9h8Nruu2wS8keuBNunb45egVJNF3wxPp86gePLibCsoJjwrc",
  "key27": "5wxvSkzquq886JtJbUk6emVFNgTp19JErjFWJjHpd6VJ4xjK53WzHKYYsPjHQdpwFoVcstEw5g3MJGxASfkLo6hd",
  "key28": "4W5CFoSuJ6WfLZL1EcNvu1v1iemg3Jvek4oDyY8TTGeSa4UQGsdVEHzhhVAL7P8z11Uzn6anZ7nSKeHTRaSRykwP",
  "key29": "2ra6pVYCPfjKdUN3xCADafkqmYxSJR11giAeLmFEg8qrFn8pauPnmACvt5FfEsZgHmJhcvHaYRmSX4dus6HwjGhX",
  "key30": "3jnofYP6iPjbaorp6BFF9cR7rADZFm25tZEdpJ4j3bTyBXiRMppXskJgoG2ACBAZxH4YcNxYtQyG9daSj8KtB9M6",
  "key31": "22AhrQtW9nZRt5TsBD7KVtA6MqZpRbhX9GVBhvFSnS2hHdH2ibumxtxpADF3AJXRhvdBgY2qUhMNB21rEPP2Z7Tm",
  "key32": "27Mefm1C15UY2yrqWo3i1jLNTPUThWQDZLJzPKXZ33213tn9zHr2TATRJBDeCFiHhntL4eEGrMFKNHQdav3Git5V",
  "key33": "3MA1NwfcNyLeEapvmBVq1dUWdCLbsRvT67NLrvwgq6JXbCFJkov7SdRPhNW9V53uQTkm6jgQsyxD9wQwK6JY6nzp",
  "key34": "3dYDEV4TwqvPJh2hEWGtAgPf9zzSRhtVCYEK9kKHEjM5qkPiBqMos8JV2Z2KEw94Vqnsnrp634kiioKAxVofmvUT",
  "key35": "3DRJGkVYcnEmiSpkbmFrRv8pdgEb3ugbmuWAytaFtaUiw6RNr6pkp2dSZKApKoxp63vPFFSGAuspAQQ9CC7vcaQ6",
  "key36": "5wQjaeeTb1Hp6uFEjx6S31uc4iaBFFPE76WWc7jc8MA399MszoHzkq2v4JUGybyFJqM6gcm17CocjEkBwbhHez5y",
  "key37": "56T8TYhW6291wCHRzc9nPe8A3jhKXybVHXop9rQqUYzuSQzziSAGN15L9mvbedq2ijpJWGKpVsssvmddhV8eY2uA",
  "key38": "2xgAyZhMkogWMMJef6u8NDWcYn6oE9KP4GQsGVmo9SjESSiiMfXwGpDkvr8563DKrkupKQRW9qHuR4AgsFXdsCqR",
  "key39": "4pB6Nnqix6VRCqUopypjHivfLNbibCifsK6ymoB1jqpQ9FaKYW6NMwJaBoEEKEQj5zXdA9pTQUW2mCWiG2ihSRYC",
  "key40": "BDuDqhvQxbc8nF1D6zboNRgYvAPE2TwLczV2eXdguJZD57yYfPuu1hthEoqEJCoFhGvfPCqJYQjSv7wypYRUcEt",
  "key41": "1RrNmSz2JPrk3CpkimszabPkgAaoYNUhyjA4CGmTfTqf5t7j8XacepUxNrMysghSMhFJzP45DKMMwBZKuiBG9hw",
  "key42": "ZsZUSGydZF3K1ttSSdcdyD4LUD3mRYu1tG7kaADoYLR5uPfjTVrdchEKcngZdLbGm91ASewDVPk18Jj5TfA5MYe"
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
