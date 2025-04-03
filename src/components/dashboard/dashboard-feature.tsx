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
    "4XpydK3MkoUgxNYnxd2VxSMNV3jfK8RfZg4qrDeky7wsBAH6G5PkiEoS5zwZVsxbt8VRh2p5D8G1fDWJrUWKryvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L8TGqJd6qLYofnBSbiP5ndxhzY54q1BKkUsfAeEock5464ChpXX21zKYJ2EaLU9vsXeaHcmhXhqnczj1dkusK2W",
  "key1": "55h4jiKbDpyzTVYeWRcuXEF6L8PgEwvaCHuLkSLSKqYst1S9NJHXvwbBjpZzWxGuppGzB7TwU5yjjuuwT6eAk783",
  "key2": "2Pu3zDmeLbPWkj4y6AXi6qJMcyrH1YGRTqz8SYoeAdVp19HpEYHQTm1wrC4XnKetod5SWASVr4ZUF1eBMy3MMCS4",
  "key3": "2KFJ6SaHgvN5ngJRCzz3EfP6fs9rrQ1dKvcgnQid2ZJgS8z1TBUixSFryCcPX8iozdQLKuePgGdNf4NPFFKyFQSy",
  "key4": "4A76t3MxkZ3LZV1kbLm9a3nmEcAFUBqSJe5pUZE1cHHV9RNu8RHsk4h73TJtK5v9oB18PmiPohXgEw5ud3vFkmun",
  "key5": "5sWjF1NBBGZs3YBd24QkRoXLQQjDUjwN4cMBJnZgW3RTtco7wFhxTs5CBMzfkfNAQx7cQpnVjCW8od8rj2uuLHPQ",
  "key6": "5JN3TcqjqTMCYbwaCLDvoh3W2RVHVbo6EE3Qut1HMFa1eXLaT8g4bvJLKsXYxJ6oGLV2ggJyRF6nsSTRNA4m4Ur2",
  "key7": "4AdKduJB6K8ERd4xWq7E32tji77gQWypY8j2HRxesnGEidc3xeJLKoK4BJEWbyxkwjSDieECRf7EUtAicqco3HiA",
  "key8": "Kqz2uuP1HtjsF7RiWgzw9PXRbHTgYW6YN3NesQppvhA2qMER63xEJwFSQLnnjftFx4gSHQynE8kS14zAnP5QRxq",
  "key9": "5ZsrAEkrDUA8wKBc9yaL7a8PF3Xh2J4w9MmpPfT7aUgzYMA8kGU4guz7bNhat95tywCWV2JL5t2iX3gSrjkYe18j",
  "key10": "3gunoctvKjZhR1GiwrHXiTNqELZcwc9nKQgQCiQnJGrCWRGs9aeVn4C9FcToN86S2S25QyLZaBbMZQBFh2dRE9GC",
  "key11": "3RoSDKCQxK7oFhceDng9j2ne3BZ7udFgzTnmDmoiYWbuBqZbhVYwFWrAbpW6g9yEdmhtLuVEZRD3sxhr12Dhxgj6",
  "key12": "3qSZ1TgstHRM7Y1UtWwedJZfiAhhq6pBu2yeRW6uKyKPMVHMLe7egSQdK1KtKaLtYPFckBtKmhe3geDsHk5F36cF",
  "key13": "3QhgYX1YrZ2UoawEAApLuNdKZmeubEYczY138WzpiKWEwNfJGscWNyfFEo1QBdv2E8xTdHQdxDuf6n6fqinQdzDD",
  "key14": "mX7ULN4Nu83hKrnq4nnzzKDAChxLDVyJTgtYNnck4kstbZRjXu83eZH2MRUvN1WF1FbXp7CLYRwGANMcGkT5JFM",
  "key15": "Qg8SYvTJjzVZ2gvNq4Bnah3ZRCWhg3KqzXC8SXFnWenDVUjotR9oMKUnQasxXVScAjQaPJ7erTEb8U92fuwmAqc",
  "key16": "3qaRgWePDBeSPhoRHGv6pHzj9oa8GXu8RfhLkqwVqhF8riNiLjCdKsuxeaLLqVwmZfjAZ1gHZaw3KkeRpf8wqSsj",
  "key17": "3vHumTbnxAw9yeHAVXNkVDxyebfJueL27Fex9ux8apZa68MKyRgUsJyR6F75PQJudtoHySSVR3545J7ehXcpUwMq",
  "key18": "3cQ6euGEZ584UxuZLb3E14zVwjY7npCoRG7yzhVKp9awmcvHL62XovUcgGPYnBk3MU1f7Rgn1ywT8KHJtinEzaoe",
  "key19": "48sDf32ezojhNUUgyGb54jSRwyyWjNKqXf3h97Lgtef8hJmdzSJ1HgYUa3FvHdtRN9eskN7f2EQEhMzvqKcuNCYx",
  "key20": "5tEy8rhSvjNDhnyhP45dyBjaVaoSS1aWKLKHd2fMYLNMhk1nZj13ha1WvPtsYUsQ7LAWCxYBuUDVZuXyTPPFCC51",
  "key21": "5atMi2ismfZSJzcsEEWoyyyNTp5xvbYXdaNg3qhczejT2rYWgHfL7vGHaY5ZxQb4iwSoUqZxMfvv7fDpTwMkauFV",
  "key22": "CFxP5LUMB9qdK2k837Fw2Gwd8RE4jAMx8oodMmZ61JWQPu3XecmC4pZQE9p28AC6j7y1EvVXozgMtemtSLdbFcj",
  "key23": "2eQBcuCh8pq7m5WbWjxXgKyvizh2tU4MbRAMLCix1c7dzTuGxwrs69bVTyxtPrKoVZ6Cwh8FdzeSmp7kaiNHVpcL",
  "key24": "w8b2nunPPHYq2YSsNftFaNREN2ETxc3PHEq5UU5K467L1sjDFd2uy2mD7HbiMfjR6Z7kwdf8iijVvqqPQ5UcvRN",
  "key25": "2rPoQM4Qnd1pts3u57WswbvWvnii7p4AQUycqNeHEhorfDCpiE679LwxL574pGoA36Nmk6ZHdqh3Y6Ju6Yn7NKTJ",
  "key26": "sFbrS4QUnDRPM9P29NYbpr7GbQ84XYETUxjYNvxN2AmgB9uk2oW9wo6GDztdsPxDCGDM3z5n9aPW8YrNVAcdHTs",
  "key27": "2B4aWRGPi711bR7sqY6fbmWhHtaQYTF6PtjDwqkW8dpJ8hyNVSiAAqwN6yiuSschfPBjodZ9N5a5PdnbSrcYiizy",
  "key28": "24yumqpSLxcWEJnNQGH4UZoXcJFPEX4kVra5qYwZpierBnUDnMrjp6tcDo1iriBLhHGicDBTqGavhca7FosFqLZj",
  "key29": "4Gq58jQLPkkYKvMo8FqQjtu58dyCGUpb5wo5Wau3srnPWNrWtRsPrpXxgj17WtQ3J4BobaACZGVVF7M9DBtp3JxV",
  "key30": "3JvBopMVFy5KFQsoCcECVhCfwouTKVYzuBMTjMedHQoMYrkyboANJC9mADRgG2Ey6rQcbL71bVukqMBgu5yzKpk4",
  "key31": "5443MfyXnq2V9D7w9XCLc8ZX6AFs62Yt6mdosZQoxcQ2zQZJyLMURqV8As3pwY1oi8dVcmeYbH6RJv3fthvTC9ZM",
  "key32": "3QErZ2deAyBnMoyq3h8rZbaVUd46x1mzCss331bvoNKzv8yRjoHopVEMnPxkm71bfP8nFatQbPi4qPxUVDYAnM8m",
  "key33": "52fynxuaJiAU8ejFJqV132D7XYA9UrrZpuAsDYvvsHibgbvFxeuba1vFYw9sMDqkMMmPQbScGNzCXVMFLfrqz1X",
  "key34": "4K9jRiSd1f45NFYhPAyfDTHLgtsvpYJEXunKa1jaQrBHmvaMNt9m6xEKapDwEGWs9qacJPxqRtjiCPrMDnLmvVDC",
  "key35": "3hbdwocemm49PbuxLMd94k6LjH16EzoMkuSG1ryDnSHsgTnqeaekkxN9Tjtcbnwkh5c944z81qwC1cA9ZxCuWcTi",
  "key36": "P2NozUM8mUjo4czYqJ7iHEFKbvGWVkvB5YaZugjCuHN3g3tyNPCuYXLue9XDAN88cYvSe7527niM2i66x2WJDnC",
  "key37": "4g5R8Xj8HF1pPUTc3iAUVrUUkZyZBiKNcG9BdRNT93YfYrMUTYnC8inBmQNzxRur8prHFhfDL9emBdEQpY9B9bCf",
  "key38": "39hPTmGsFPB6ttiRVRYGfHPdYTP9qVDCh5HJhS3iPfc3qqwe8ffcnJhyR3B6JnxB2vi6ebpgoFpVnwHUYQ2tLJid",
  "key39": "4c67brZ7P2UtCCBv3VjC54JgBuEZPsrNpsEsfRZtCH6H34s1xpFniBzeeytSCeHNQFKHiGer1TPe61hn5HAXm6GV",
  "key40": "4XNFTcjhUMTSzJ3D4DXUks6kNWbQ6HoBds38QZmBjiCrf9UGJ3y79eLacqmuMrHck2R3UjYW72h6UkAbG2AbV7Ay",
  "key41": "3vg1jfhvACwx8zwemLjFZVPkgHvKZjseip7aQ1R9c3ScMhG3XEs7fgErznpkfWQSGh8dGtTVFasHaHgiA4mZMxJB"
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
