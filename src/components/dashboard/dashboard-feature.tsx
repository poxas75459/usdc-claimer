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
    "3VCdAN8s4T59WZnn2nvKo63HrzrgRzKKQuPRfhtX68Fj3HunjqEisxj64ftieFNXBSb8R2BqEC6nKw3Y4cnw3eyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s5bDS3qRt8kkQnHYQrMo3Ys2Dv6pohmt9i5Fd4iYyuiM8XXCe82yrqrqGjfF6LFtwXiJbrqBNUN8PsfmhV1YxLs",
  "key1": "2nfqhALiPvzi868WbACc9mpnpc55hCg4n1NLSVxLgJDEzJQ7FSXnpC8K2Jn594SiKX14SB7fV7QQyFsykv2vLbpp",
  "key2": "4BxkNqCY61kvcg2kczziDaPMbRNV1jskmEMARZ8V39yzq68TASjMMxL8qw2D3gm8wZz1wqrxRnWZ6Duc11xXkdWv",
  "key3": "3zU87Ac1WmJU9GKQpzYGErvmx8UehbAJ7b2JCKQ7hi6EiF79qt8Uz315S9wZ4DcHay3YhAaMLnNXnsEXCXMuThij",
  "key4": "3kW4fKyLFC5ktNVmUPnYvn4K8X5E6PpCz11MAYdYQS2TPKaJ2q4dyM6dbjdoawbNiFj4uCRBjjt6EfiSnaJA2Rji",
  "key5": "4kXtsM4qv8yTe1m2zcwuAgkEqQGXVrTirJqcFccLq8iwAsGVrnGbmQKjtqLCTQJdnjdHC38Vo9js7mCvfQLhSEcs",
  "key6": "sLj5EYVv2tnZSAkc369Vk1iZgUcbhDzqtMs5dLdG3MvYEqdrCQvNXGPUoqaKE7G7W4MATsmMmRf73dSAsqKLt6A",
  "key7": "4hpLzkWKPn58Z5YuAhTjrZUyY7AdW6dsDXHuQTEYJr12vkNDmaXXn2yvJzKJprrEaNHosA8Jddz96cGGghfSKybd",
  "key8": "5bEnuHQzt4A5R3Wzr3XKFjbn2CGUuSUwivm6LB7Nn7t2ZX7H2jVMa87pXdj2mNfZpPEP5wwVCUnkRNxDw5yvWu3",
  "key9": "sCbSjg6LrzYhU7nSX1zD7CvGgf7QEXvaPcdZ5DMi4y4vzHYZwZSG8unTNTbaXi2NWcckT7Y7XA52uYvqCoPkWNU",
  "key10": "4pLR2eT1Nah3Ld2pCiukt18DPargP73Gfiw2hkGYZLYKsxCLLH8nAKSxALSpqEQkD3MFBqkpm9qwtArfb8sz5Jmu",
  "key11": "2h4Ztn7e6Y7eo43XQjyiGM45ZgPCsGxePC8kP96Tmerqb7YVmmRMp3eKMBYwtaZqtNSaHZgrfKo3TSbimW3DLUtY",
  "key12": "2nZaGaGJAvYC1Tyj5FsVyvufvfbqbtALxKX4FFzeQB62MCgnD7gpgz4n8wA8ayJBnDRA9BBbvyFfbo7c4Hh7VB1t",
  "key13": "59fWzASDaEKvfiMuUsceKkmKwmhgLksGQKuFLBVW6768WYHWRHSaPdtpJyQCHKU9Sbj85UEmLnH84adqpjDcGd6w",
  "key14": "4N5pkYkYkBDNyGWhVCH1E7siYcifXrWmqLzFXCu5ZQacw8hwBddz17Jo5FJAvyxyX2q2D3vyv2CTM8BqgenL7mw9",
  "key15": "JnpUGeUfKgMTcAAJoEtEYnRUnWtkuX4C8Yw1xn5o54NR89pcfkMmJpPuwj5zUcKF6iFzS9xUcmb4pFiHmrJ6RWj",
  "key16": "5MNF4A8KyL3mTENtjCzgHr9fYKjS79bJLAuSMPecRKvFP5HTXwiYaXwMuCtAG7KNZsZqg6v6FqfC1xhpiJbPtq9",
  "key17": "3aXJN4Ce7CTGr928ec9RcGa64eAXQKsrT4KVJwS8VjKgjKvMRLDDD9qbWdYXAh9nh8YNYAHzfHZQrHrzZK3bgkiE",
  "key18": "3xQq9WRGkjbaw91364yGHXvbUoNKsDyLe1f2pmXuKrhgbgguuGZhtcqKoj3vsu9fYqUjo3ybqNAJPfthzMbWvkzZ",
  "key19": "SW2k8GJjZRTKoVJt4zgJeFCPNeza4JPyCbuPRfiY4p3gBDo58i28QJrUK8tZ1AK1jEAQSmiD88rqZ6U8tH7c1oZ",
  "key20": "3uXbesD3i5bHpuFrFnmvuEtSK8uB9MXxKvYBhNRLU2vNthDHcZ6aMvrXzYxJjNyZx4xfzBPNign1JPTN8MignhGt",
  "key21": "26cbXA94V85qM1boQ9RgCLoN7ofm36nfgeAWtCWTnYDMne8PHkgi2NP8QxVD2EeBse2vHaK3zg8SDiBsWv3Gx4vV",
  "key22": "38FeqmMHhRLjQWCNhgc5bqbmXjVz2oQsgUitPGPTkyPa6fzohHkJ5wLJcFWNJwxathDhEbd9gFEZy54q86mcMHNz",
  "key23": "2VfmsWW7YpAR6V8GpUAs1dhsfw7SMP74VmvRQJndU9Uox3AGbLzsKcCBFyZchGR8aof55ungr5JRwyKAQs5taF9k",
  "key24": "2R7tkDGijoR74BifEqQb8TtBzpg677DZbSvzKNrXEfAw6xjPe2W7erpXWp2u8XeZVgiD82apEPZmnu6NVPyKoRW5",
  "key25": "qMeiMCDuEnWse4uTNcfWiYeYDELB4tmoQqoxh1Yg5DEQuJ3u3adDfEwsXAt9p3MG3BReE42ZC1DoWkUEjAW8to2",
  "key26": "2YFmcTG1uaFoTPvsC9N6e8GvtJycuFrLQXCeFunbtVdCKxMqjMyQveztJSwgnkqFB86di1VNixfYy5ERFS8bV6Vn",
  "key27": "4TrttanVxDBSNdsQZi4xRcEv1Yp2XNeUgLSBQHRYDMQFyU3B9vpEagB8BcCXPjMeXMLJZgMeE4AeKaU83TsQHNri",
  "key28": "RziWpTu5MdJ4Q76hUpmACWdkm6kLthZfwqHzZAUkBPLd15ePinugvPQUjGs9gP6q8CQT4WXaPq6yGxxsY7ao3cT",
  "key29": "24cFt1oecx1PtEPo2CcSowWnM8ts9m6As1hkzfJpubdp1UB2USRn6cCKDxqpMEaV2PRBDBhceAxhXDm1Dn8jSqfJ",
  "key30": "2A3b5HuyXtDSXejTnNfE1pbY4euFnjMbz3KSWzUzvX3g1BGj4mjQkZYT59BSt7RQSGkkTMkEH9wiUJpnQPgJHaRo",
  "key31": "66n4qKANMcrRCBSZhqxxRygAvf3ExQtoTVoGFvzyW8ZwFzPGe1atD2Hv9BxDp7NvJfcCGQ2CXVBwqBiuTi4DqZMm",
  "key32": "4YXnougbuzH1wZLGGuYGuyUbPcJVxgemAzCKPokEMFtAER28wsDduFnTnwd67npnspgqq4v5KuUgW7jpHndEzoTg",
  "key33": "3C86JN8UohUxyWTk6kvvqgBNvtRYf6unqGp7gxW5vaCiUzByDxrZS9rpDrYFnsXxBuSLAigT85ZxGaini4RdZZrj",
  "key34": "2FFMngtVGy99kMTFc8QH7oAjU3ftPF6F256k6aMXnKuNv6FjDZnQTFGrKjUZpaikaMgvDBhE4ox5bmWQgQA594r1",
  "key35": "2mp2j1ZvHLJM6LdUFYVSPgSq6cjNpiMG21CctYYtggD5j4coUt5Z62MdabroKLea8TLQs5D2t5yNArLKRMecEapC",
  "key36": "5hRPu2Gsq6JHKYZVNmD5EEjioyJpTSWBo3nYRnQ4Ttjc8z1dCTRgxRbEmRZZKfaFFBpCkWKxcRfoDPsdcp5WvzRz",
  "key37": "3rZCqrV5GQSXrHA2GjS7XWk3pQTbUxE99p4B5EYMjCdumxcGuiYPRQsHC8E6zF5V6FzyHrcUEMsYj4RCbKjrV64v",
  "key38": "4k3UbmaLjmCTtELYDEUMPEhKqok7mRQPZf8QazdzpDwBFPxySBGUTPtPCidfYJVbmrotEa9w4ZgkXySyoRMLSL6K",
  "key39": "3dhMKVtQrvTGkBZsRxiLoU9NqG7BgFEsKNGS99uiLtq2SQjhi2ea3ohohrWVCti9LcpYjNafHfqoeVdfp4azPKeF",
  "key40": "n3Bnhq9kLDeVGNbZbUwArCqu1PaupdcL8VnDFHGMADtzpcW11UJNDeRh6iR2Kyq3GGVXDoXXA3ZL7Wt9c7gAW5C",
  "key41": "5ZAxbNQL5tkhqutG6684yS3PhiStQqBNGJRbFKS1f1FXHY1FTMAyfvkHjqCeMjTvz69jnitbqNz7g315zDT35dRW"
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
