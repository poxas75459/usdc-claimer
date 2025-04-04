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
    "5GeQ13UzCo3vQac17ZKumJfFt2k2BDKNehLX2dsF8q4P2FN3LWhqNLNGNYgFSekjdECQ9WSLBRJeC24d3K1v9H1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnaxKKZ2G84zTYjVgfuoU2effEFVQ7k8HpxzTN2hDb6C7WSj9NUdiZ7m9hgLKyH41kJn4ZsTUCmhK3oJQ59AXN6",
  "key1": "PHe3tqzD6bhPMPQaAqnzQQg8CmHLdukAN77U9UftsT3vRe7yfe1Zk5JHvVWCCZikiXyaqHPK6dADXMNxUb7wEtE",
  "key2": "3HQvXHy8cUzepnZJSPzpCcsJUD3Prsyic5P8tek63cngGy4dAbph2LMDTW2LZswYyWiZ1TbdBXQJR8kRQqTxrbxx",
  "key3": "4ssBHUzUBi2Pgjn29p51jnUMky9nKUbNjg76DzHeZ58rRCzFR7fAkCe9TvXampwg3AtLoy48svghGxZW5cjjyfU4",
  "key4": "4W9Dxq5kofayD2JQPe3ys455QJH3MBwxCbrFyHoqvnicFUv5P92QthhB2BfWS8LShoMk6b6J8i2vNg1m8wEVtF6n",
  "key5": "4HT582zEPLvTmm7vEcEdpjuPqW53z3rqntmVtF3BEBEY8d6j9roWRDJGELm3YaEEr6PDYTh48ipnJ1kjDntYKGR",
  "key6": "kGoqy6DePDYNBiKwrv1vvzrG5p8f5xUSbT7tZmxeEbRHdjFzPBvKHgZfaP6LPr716Ua5LfNodx85DPYVujr7xxw",
  "key7": "EjjQnKjR8qEX2L9KtQXp5eqnMXLZkexMfn76xPKE2jm6dEAMyaoLTk3VTmq6KvUU2MtudeRckXEUykiKReVYqfa",
  "key8": "2y5JCMQ3zM4UoNYxV3QpLGeZLPZCQHfyDjEW6oTvYYGD5sek8hJDGwYRuU5yn86wMgwwEm5CmLhTvz7U1PMDTb1j",
  "key9": "48Rz5eSHtDGqnaDLQWYNNnk1U22H8YiwzvpeB4Lhvgk9vJAoAsvYUJhFc2hGRqnkwHDcgi3TMvFsxStEfYNqC8Lt",
  "key10": "4tPBVZoB57TyL81qh7171Efj8hxaDpv2VJ5nmj22umczHraGer4QCC3jouyJSctqmXLAZ7jvDFHprT7EuQj5z1Ci",
  "key11": "J5QGadTrHnPDFvgVqi7KYJesFZjPV79arUTAA2PMgrQPgvLNno4apSkyM5sGoJeyh73q3HsKsCoVPgSWyEkSabp",
  "key12": "2UG3P9BQVVhJr7j6md8jfHKFVy4eB26ZWceqrzYw3pufDyFQNurMMWAF8ZixrKgdApz16pQRnqFzxTRsQRiyLoyr",
  "key13": "3zSPXgyLqoYXFpquPPFR2AcQtyh1SPmPpYQPzFqnViMVNYUasFbd5acagA5zCwZN4BoHbreZ2ZLCc3YBc3zEWC9",
  "key14": "KEaSV5i8pqVyUyfvWMQ2CEe9nrD7ztjMrYnYTtD5UvK4oX7jeFVZMYe7CA9skkKgQLbFSYmHUT3emN1EXzT3P5h",
  "key15": "2femwUSTTm9iVNivAE2NMoH1hba9XJj3YtRWQc31yH6vY98jqNhEXURHxW9NFPX8dZbB2u7imSM3WVdE62ztUqHD",
  "key16": "BN1LyXiVAjYNyYnXxWtFXxwTUinZ2B8T92GrxAKTJuV418fhyySkbkjFxDURLhcbYL9qbauC5EBM7wC35o6wqN5",
  "key17": "JbFcmokHKJmPz6uB2sYqBCfkLD9vRCvJVe9xV1qGhM9Vn3kiqxf8zpHoPPaQ2gqzPnAmRGUXFHEHLtbHdoMXDbK",
  "key18": "6veQQEN8UwZR7fb1wzkMeyLnRpe9p7BoQvEJJ768gEweE1MTefaXFiEo7oaAX9d78irfV2sHC5cyc96LcpoGQ1F",
  "key19": "2rGpn497Rzk8x3hU7yVFZzfu6oFARpiRRVF7aW82Zm4QKbCjSb168sXreX5bvuUHXKExBtdNs4UQboY8a9FZxMqy",
  "key20": "SjsaX6f7Gdkv5gfDrxgSoVhQaod4EddUX5YDzVjU8fXLHJCSiD4t5GDwJKdnVwfN1XPWLSdi9kYHnmTpn1cdwWa",
  "key21": "ZVV6SPVYxLB44Xc9aMX8dAvB9jWomYQCFtRMvoLW3xojeftZKaEeANerLQ6RTWnhbbjcuHcjsrzRTBf5m1FcWxd",
  "key22": "4or631UQgQbypGYFCGUE1vna9PCre6APAzsydzWadrdQSoQgDHFjsKfmc7PDfMsxnDyZh2VFSYhFMipqHame9bsa",
  "key23": "484X9acYGLaG7ukrYfM819VoP3MMCUxnabmc82Mio1hAZtHRgDRzQMuA87Xhc9FeP1TMxYFhp86GCyv72M5A1L4L",
  "key24": "4fqnARFpnYDqFw9RrXJPdtaPGyP9f2uq61xRsTCHixC8wRKobCPvNo8yNhatDwYYTBZPKj8FeGPEKia8sNqwyv75",
  "key25": "4oD38p2QDbmJLaYeLqsdgXcMXjBKiki5FJpEVeaTcsMRehDmYkvPc1c5BGfttn23edCXpkmnFwvjr24uJGKCH53r",
  "key26": "52kn1F7xKQyLDAsUyiRmoy7XKxSruvtyCfW6yuwfjbSHUzicmCCTBQ4okJmkVXpJRKjaXzgeiP1o7GwaXF9Z9DxW",
  "key27": "FmHoAMg9uFK9EgnfrUAWhidrZKSmzKjAq2WnGa7CSCTjQWGazvgr6VAt12eYTaDh8rHVyx21AYuDoXdLiiHuqwr",
  "key28": "42PFAB9Cvc5Dy6Qf22UHnpfHjgq3hVHB1JRk1DiAwiLYFviXf1eJhncA5kJG1zxKvMKcc14ttqkKEYnqdKU4Lq3q",
  "key29": "2mARPsS2baNysAmuH5v2t7RTX5quQznPNvk89wJrVP1uvrk8XCUmk77tUaENZDHGqKNotnH1aiZot7HpQH956Xb9",
  "key30": "63p8XB3fw5EMr84b1EyYP8sP6AD1cQ43hRGMz3LKdT6GwGEZnuKrG7mSFViwfpy1txWe5PUpvxnviNPeoBhd3FMX",
  "key31": "3QFbxcVMdrxbSTeBJNFEqqZS4D4wsd1QherYVkR6hB9kcwiwVx1o22hwYUUiDHqbaCGeCJXpXCeBazoxrDutnGmP",
  "key32": "4EuSMJUqNGPzMKpzKpkUQzMcdxLp1NaJLrwgsT5e1qytYhcE5fX58NDT2JvbHmqyKc8KiasETYkg1VHasWNjhtrD",
  "key33": "55aWhBS5ukoXzs5wtPDa61vxGuiwwdaKyBFuG72KWwATE7HRgm3NkCrzp6poJ6DGSwKyKKbTNsBU5G69dzQMv2JK",
  "key34": "3s1Jn54DAqFA8nqQfxGorYAjBf9BsjEkrcQqWByE99jcrrPm22s9PtFqpqvkRdgr9i7FWX6TwYWzDt1sCFGuLuQA",
  "key35": "21tZPA9dwZmLLGit8pErQE4GdTWhaE9bxmNLJEHAfiGYF2cawUoTm6WKsduvCbsVRoseFTGGymKVUeME5NFcGkTS"
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
