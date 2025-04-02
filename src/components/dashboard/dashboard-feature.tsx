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
    "479aRxUGCx8AQtHu5uUNwF6MzMsab8CcMaRnavdggkeDPvJ5paSZChbaBHFsGxdP6trXDjmER5xqhyeWVj2dXVt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFx631J9U3px4SWyisPzNotGY39tA1bj66X3C9wHBhxVCBp9UMPZA5CWoqnUiaaFertxns9rsW9bJdftdg8tAjA",
  "key1": "3uDw2GrQ1iDYdYN5cP3GhvXSotFSS6sUp5m9aotb3GjAtgNJUFr5DgTjqRUoQh2dLeWLq44fozHejrFExGsqeXV9",
  "key2": "3WYG7sxgUCS3dJB4zvUEYqhuitEenewY3PvREUZsvZA8DcGAhSuKJFWtYHvv2uPNksQc54fzEw3izTqZXb3sLMP4",
  "key3": "26Luh9hVpjgNjMPnh9xSRvRR4sTzWroWBuApe1RUyST6dQ5FBgE472LESwGAG21rqm27vZDzQZjFgASibh1h7gUB",
  "key4": "dDTndryiZ1FZPnmxHir6H1kwzX47jETTgAsGwjsXSeoHZd2t8YkehhjjtD2omN5dp1DZWsMGAraV6JSsvgmrFfB",
  "key5": "25y39F6H64dwGpjcK4JL41sTMLuB9wS3hcoBLwHseGHEnzXNBB9AQ3RTyvvP4EiGuswLhug1SV4Xy5KFWVb3Sqn2",
  "key6": "5ENMVvXKDeKane276SNbjRvkFKHz9s8cx4By79iR9Et4GkM1JC59trieXEXpvwf87puigQt1kLjKh9sDwjNx5fbt",
  "key7": "5rqLJSGUM8LsCYBznK6zTYUZEvcWhoqrCkYU5d1g29h8SLpSiJhuGDP16Nb6mccBwFErdEcwHk959Djj2K4BYGg4",
  "key8": "2qVFTTF1C5RCSG5kmYcAGG1jYEqrB4Mk5FpWBhpHU3bqoXybkE9bfwVbmdaCK9QyUScKrAcns21Sw2k5fJJ2Zxet",
  "key9": "67CMPRzuJnPhrjZntqj3ApcazMhthYiSknLDdXcbTWjU77axejD7UBCf9qZ8cHHiXQ3VGs4V6oah4SJQtPqEfJTH",
  "key10": "5vS8utjft1nUwgkkeDyvPbJCNM63bBvPMJuLtN2BHeF4QHqkBDh5FdTfXAMJp3rDz27huXCwZogBWnWyyA9on7gB",
  "key11": "4DndijgG19zaN38SVTHs8zVUSJsHPTUSqN3kB3g96bnhhEDHvndoeR3KJMarriUvsoou6WM6dhb9ajRUH2ZbvUKd",
  "key12": "4KbybNwrvR7u6T25XEREot2fysN6pJHmiKj2JYpWuzVos5Eehkp2jA2SmKuWaFQJwHfXQpAodamwFkEWQ8dxfhqt",
  "key13": "cytx6TXRBZfq7XpQG12skSBqdMvBwUxPmbeV9ZPy6z1yYxwNYrietbbWeyrsGQX6RYHTUgEwtp3CJeRJ7u3mxsY",
  "key14": "21qvzDrYR4KCDkVjZN2FkaaqHonhfapwwHtKwgR5Jz1uXFKTtfW7iqbbyaYJoHjdhQRTJjbXEW8YWsFQ6WHx5q8S",
  "key15": "5DbdrKjFBjdpMmk9Zej1SF2aUGJK7EytzjUCEewreVRH1kNvK1Shrh3fgTR5c1j6MSFTEaEZ8FeBT1Mrbag55kV3",
  "key16": "3Wg21q5H1e3BkQxRxDPui4dntRCXqKMckSifkpCQdC6DmALn3mdNyuqt8BqW1WeHjtbCzDA5NwQary7riZnVr8uR",
  "key17": "44C6z6H6Qw7sbxdNpve7gEpv8dGBen2jyrmMNpkMWAK7eNWoTtdcBvCwcAMZxDevjTZdyFFtDWpArHVAy9UUxwhb",
  "key18": "5qFc339fmJj8ec9uNmfPcLChcu3uebS1VJzfQB7KWCE7akx69DK3q96exUv3CaqTabMTDeBBekjZKLKnZhMaVvJ3",
  "key19": "2oJC3agYnaACBidMjpjYo9UBAwsahuxAPNWTRocGTWjquEsmpL2dXAh8m2yuqwqLahhUbGVPTwr4ocxNtPcRHtyd",
  "key20": "5yj6HyD5CzvfQrZE6uFowfdNsebnhD3hMCtajLvPnfUn2MQkb2cRqXK1kKKW4DaD3yTikgKUsBSbrYM7kUckjM5o",
  "key21": "51uJCQSNAg6YULagWQobpMQgaC8A676ZHqCxyv3GuZebHkxZsBCSqVutE8iwh8EBUraAfUNuB9CG47qZFFf9u1AV",
  "key22": "2A9GAwmUAAengpM2GhWWVtZMPutaKCCPBfm68uiAs7yGJyQ8ReD2h68ykpmjTkzDDVAj2A2uhL18KpgCtvMj9ZdD",
  "key23": "pAYfr8NN5H4QgN4PNM1GrpLMGhCHNpaR7KT8eLVuvb62HNYrJ3ktbKoUCfBzSZMBtP8NyguugY9TZ93PHPAquC8",
  "key24": "2GPjo3Zfv2Uy8LcqTyPYkovJN7GGcCszSuoBqw6Dx4L964az18sQE3J3GsNEBoi7Weeg19jJMzYAdxPA866mj4et",
  "key25": "47W2nfBBZqL4qYzi2zZJcu6gbUXFnYxQzHewzExqTtQxT7ggkdCUqDMMmfDuso2otuDJkqkrMX36qSNkNca11tmE",
  "key26": "3gBMpUMeazadXf2wiiD2NhrwvCZpC8qnhzWbVQvpyEYbmTQrMhF9kgsQDNYpYDYirHMPSnhJDb9e2X3eU7fjcTaG",
  "key27": "4wY9m4RedLoTEYbJLASW5s1swoN75pSgqNmz6vJ3sxJ33QUDNfsoVQKRT8qwigooprkjHqUYrVsaoLn9GCu7K1eA",
  "key28": "4Nq7VF7FkvZFSLBiqaZj7vhubssPtD3z2Z4hgm6act1KhwWRZ2aLbKZ8QKizW5YvAhkch2ncdZUMAffSiQR5kam4",
  "key29": "3t86uBUMEKq32skDexqFQK7fWXkg8cadygMEEvVCKftU4jdTo63EBhKD2Qxrb3bv7EtP9M1EAEzcTsPFNqEsCCTx",
  "key30": "4znb8nAXeE8RWh78HUE3VKfk8zoqxsxvtTVM4S8amjk9wsDDEkdcTS7c37arKsXqU8Wz3U3B5VaN1VRto6kjjUmN",
  "key31": "4DRGBxvvGWURPBXvhEmqdkGE9RtNdjrm127RFKJdfbDKex8XjxZ1vdPv1p3MCdJvUcApeDkze3zkR494oGKcXw6k",
  "key32": "65NjNnN5fuWhg4cDhZdG1sCyX8cqWcgzp5RivM8MViMQWena7vSax6JMo4jdk6r6Fn5BAQP5scYcUGkkp8xRsCuB",
  "key33": "3fE3Jm345gtXZvS9Urrtz3qSiDf3wdziHYdAmSMj5S1uLxrWoJaehMzFh6a9tAWL3VRPhBzrHVhedo8fHawMW7HJ",
  "key34": "56Y3E38Z37UK3hSztBge6fHWYgeHePLhcNYoViyqV5wgJg9tSqf5ejY3gZqWZjXpetUokKt4mPvPcrbWbUDShZ8S",
  "key35": "5zbwaFtisfiRnCTAfVrtcEuHKpggnDE2EY8nNKXjFHjVXkjUCTVJ2Qz2yG6g3anTvKWQJGygS3FSxDhXrcX5JdC1",
  "key36": "29H5JuW1QaF7pMPrMBLddYPLjjahJPLzj6Ro64Aq7xZBTjNwxTUmFRZA416JfFvYnJz33kj3gVEA5izwxnpoXHYb",
  "key37": "82Vk4JerEBgKmyBZezbwDsGj1i4je3xbanTtggP6eVkCwgdnnLtdfnPogE3wYsK6dJQ1DGo955yYAnFgnfwMs8X",
  "key38": "2fM4akdXjwA79Nnor1vPRJ4UHRsMqaC17gZNLWEphnQYJJ7x56cxiKLMXosAmMhMwvJ2KoxuPbTQJYuBnBoXSyC2",
  "key39": "5hnNqjvmLYhJxBCpxrm7quULFiRRuY3TFoymama7oyBAKwKuUBDXLqkpFfVDVpQ9jCN1dSKAYxm8oADSJvNftTJb"
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
