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
    "385751kDv7WbLC3oGg9uss62LvtBL9AoukYE2jB47QhB2d3jwYerQ3QZobAKKN3JoKCpxBQLJQzxAko4t9EHpEpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JhwDcUCFJqMiBzG2sZ7WZW7X1gNZNKam9d9fR8LLoMFeZKMj6YTQocyWBRbRFnvQ5CxwSzsT924R3rXvYmRtuGY",
  "key1": "4VCe4pP2REP5vgQMmUXxqP1FgXsUX8vu6WiKc1YZePfYxY9rSXWiRuSLcoBn1JBP5mpRBzj11uksq4tpZyHDwJ5J",
  "key2": "2HGgqdp4dypG1SMeDicco7VT1mVm947P7c8NwZTKz2uUqGoEVwiGk2Hu2wvi79gnNydyE64z9WecyQWQjRcJwdsP",
  "key3": "xLf3nV4bY2M8ArcFvysiXepBxeRRonzJikRCYsV5Lv2XGE1pf9wafWEpqyRme44WWTYgknXCjigV2w71CZDVm2d",
  "key4": "3Fbv2YJ4S5BqVbmvxb4oJXdWoUcs8eBGXCmWvAuev9t8HCKQNUHgLamVhzti18r3559JFgdB9wuce7EY8MiTFPQZ",
  "key5": "pGKvZmXGbLUiqeyu4yiXu6amxAbkcUGt6YdGqb6YkdhMamNh7fyhcJd9LRvCwjfNe1aUoLDwq9kyGcEsjjZe16x",
  "key6": "3d2jcLgxJcHvzEjEo8HjTiGw5hmQ9Lj5bXQUmBpDUNERsEeSsq3FmDpwS5dZsEBM1R4D8thnSwjyqT2T9sX73opZ",
  "key7": "5De2YgSV4JEKGtyTHDWGi4Mo9KCYZBd3GMDMwshZWKxv9oVeWXjw7xkjApBawbL9sAPQaqBC3Qx7eNi5TKjEHgCe",
  "key8": "2uV14ZYtaB4mwHc2bgPMuDUzMCzU7gskEBCvXqAHFatGcTTovPNVqRKBmci5x5x94NZ4Aa1GJT8afqJ9j7r1f1US",
  "key9": "5QQ8xva4yiySbN6tjuYd9UdmFGe9Wt9gjWY6mbnMGNucrbfUadofcPsxSihvZgNpf5KiQLZEEsa37zmdHUmqMkcV",
  "key10": "4iLK8pWwckirsHEs2o3e6SmrGWLWCzXDPJdzynyR64ZZ3eRn1LSVc8LtazoEsWJpNTUqoF1Hgp1PuCxd2vqLbfkC",
  "key11": "5Q9LHFmvU8uCfMGkrNVz1bRcFwUkkSojwhA2hZDVfK5YwCYrFbEzt8KY3ZjkauRBi3gvteq9FPESQgjKFWvhh1SS",
  "key12": "4NMzMHzF8ViADxfCYaWTMnKmyHRVjutGRbi3TpTgmCUzw3gaaSjMGqBhduzgYZa37dttsn7jZUKzjp6bpKaxfNcF",
  "key13": "3k6TGJxTgbxm9kPLj6SFJUCoK3gWCLYuv5HsSv6xZEE9YS4QZe51hB843VKXKKJcQEtKr8zrLgvg2uEx4iG3bNco",
  "key14": "5nDy8gNigj11NEB6bLUV42zy7npe9cvZc1XH2yKRzd7VPciYmMyfjYsq6turgVxMEoKsn6cQDmtLgqzzYFTV3vDa",
  "key15": "4J81vAb4y3Qxzyxxe2bbGniTz5yR9j6WJ89xRpmgdS4xie1B8aMhoNAupUxhwwmfV3C1u2DjvvD215T2fyzXVM1a",
  "key16": "5we8CtjvfA9ydqFdGVLNvJEy2Vc7cGxfk9X4sFQemTKBRurRC1viXH2mwWi8tSzisD9fjuHNArow3HyFnxMFuua6",
  "key17": "4jc347krTf235q7Zic3L9Cay3ynzrT3yVd1okVzY4BrXo7MnU2yWiXymDQqZjTm83r9awLoTKRN3wkP2haEziak4",
  "key18": "56qL39SabRNGJs1TPLVhzZzHdC8bSFyETcdgL1rBLKyuTLFkBPAb1PS1nTyJ81nTmkuLCJBQfKZUbdw2n9iCqW9d",
  "key19": "31RaiJVBAV7KpNjoWkGrgmaZZ6SED2EUhWda8fM6iStvjYLrR6NCHFj1bFLuQcg6JpWTkQnjpZnX7j43xds9Hoc3",
  "key20": "5wtTTsPFrmJvmgaZfVKDxKUeFuMeAq7qmsGnhGbCMFi25yrWzUb32chZtoUt6jDnUyrejhHo9rBHA8sSQXkVWN6e",
  "key21": "2Q9YcHW2rWCyzm7HuExfckYgtDVuqn2bwxusXY8RRHg8CeNY4jyRFMjDMangdFNsn2RJynoyDX4NvGY5EB7f5bdA",
  "key22": "5X5b9HNqvHas84V415VcyzkMbX7GA2DA6BUzXf4eBapz5RjdAuif1AqpG6JxcYoUKkd32JesrSFnRrQ5kHgQ8EAk",
  "key23": "3W8sGDkXMvVokp7m4c9b8sZkk7LbeBpeZgnscVWa19jbiNKnQLk7XUKVqMAbhymq8kaX5yVPSbnAMfc631owPpKF",
  "key24": "5Uq3VgzpNuJHxftVTJjnoFiNdie8ztBoPv12mcwLV8HNiyM12x7y31rYo6T8VGy2JV3exPB3BSp3Tg8xsufS1b2f",
  "key25": "4FCKN4hAnrACTpHKjxmXrNANiA77f1a77tqjUfWPUGEZPXA3BgdSeJgXj2sdb1CzFPAy27udrMfq9ovud5pmjEGw",
  "key26": "2UhGUJSZEVZKVdouZRXy2asuLDmnSa8RavjqLSYvXRd7CzgANnieC9qyAoJAvexY57xaKEUj5wy7e5JP1SqKjADN",
  "key27": "NguMiNjW3u4DWERb9EkwgqPgZnHxzJzan42s7FB2dirjZTEqwpTnzQDQZSPHoRwzPneCCWEVE1DLwNdu3c2hKD1",
  "key28": "5uTJgzFo1sVCu9WpoTp3JuUBpyxDRbAvVJeh1CgQv3sqBRRY6KaKsAe639V8PhEp1QpkRAvY7MLixYbn1WEJbazR",
  "key29": "4i4koB2zeunECQYAUu1h9GEbwwJJRkEaJmpCv6QCNvKYiBZXdJP3sLdfJD6ESQ8cGQJRB54vozvWUnPjku6QpfkJ",
  "key30": "9WAHPQsSZnvM9ziVHQ8rGffvDL62hybFQuNFLPQETJsmcHWij5CCTUiNjN6UzhQUvSsfnZ4QETqND2RJDoPAkcG",
  "key31": "wvbXU4rQAoPcnqLKQbmYCPAEvB4ysMLTKFyfpPA15ziqZsQXY4GK56yzJbj8CoX2PKFCsQf5UFr5x236X2guoqA",
  "key32": "4Thi2FKvf2qfFn9BxxdTNq3PNyLAq62gjVNKy2dT39kKVLmpfbCQbm6WGdNVi4cSmEtH5GZNuNbMxoS2BNUcXV9L",
  "key33": "4dXnXUUVw312vyiEU2zqWXBTvZ54t4MBbKaDfwm1uMwa7NYqwtJoQnYhTBKB62ddZZcqv6vTvNaUtdi4UZ7j2DZT",
  "key34": "2WeqZdngYAXXedsGkdqMdofAKzfB986ANuYFxfvYBsELqDrQT4ogwaHV9oW85HyaYw4HhPHbfy4c4E37vq4ky7TH",
  "key35": "5trB8zaiXHmVFLK1dbu5dR5THe6FNq6iQ7xjhx5LhabQSK5ckxzTbGNpY4AFs3z52YzxHjHy7R8dGU69C78E64kB",
  "key36": "txcCJYsqMyuXF4ZQ3VMWkUmeqNBPcLJE7AXoCzqTkNWp1toDbq1TtJtym1zasPWPgD9PBrPUY7dUVKyUMRWq7an",
  "key37": "4TryJSDqBxHb44brRMaAoCLgoYqQuJvkkGggQbkJyrchW4P5XqKHeSsgRV6zCsHm37S4oxH7PLem8uMsY6WWQ17s",
  "key38": "EigYKiCTZnBAh1R27nmAVjFkNRRXksbZx7qfeaX3pnzoFC5WsKp4LAX6kgboeQeVSbiGUGH6Wi5yFvsCu7ksdBi",
  "key39": "3KssGrsquR86Psx4pg2fcA3ZLXSPwWD14UREpnbJhZsoGLKvqZnWXRwPy1bdktvehAjZ5vc1deBj65ZBigFxRSY"
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
