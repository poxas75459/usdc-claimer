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
    "De2q4aZwLKZNriVwZozLx2m6oCpASo5CS64FpSXpvkhvGAi2k6Kx7f2VUB7eW93Eda5f4BZvdqeF97FqML395tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YYFWNQPsqTpCmu57M5eYp617PHhmWVn3wvv2VNbByLLPUiivgkAbAJDFLdh2wms49et9ZQz15BdNjESDwNJL4Xf",
  "key1": "4nn1bfyAvSbMzUef4ikqLX2Z7oTnsKBwETmwWfkfk8B7GTsEGSGCfbpYnjDng9QkSLqQNo8XV1nx9foE93Z3bMmh",
  "key2": "3dXBkmkhwuyQxx5KcKh8jDPBBZss8VcPU5Q1HGkbdN8MPzj8fngFe1KW7zEPA59ZSuaac2DMiP5G1H8k8KiGLD7V",
  "key3": "4k3JFWuxbtYiDDpTKuoHaswRLpkX8sTikQvcRoZVLVmTDfSJjPhMaFQwbvmyXHfXEvQcCcn1EV51ScqBwNrFrTZ4",
  "key4": "2fBQEybR3V9uo7WJ4Gw49eGcAzxSeWN9xBEdx6XEab3FtRFJrE8eZ1BT23bkZPVmP7GWnbeuPBpi8mKy6y7aaawh",
  "key5": "5AXsh5G3vgcnkg65pUAGMRf2Pfusr413vXgXsahw7rZ8Qhq2oJ1sMRz1w6PLsRyJqqMqXPXYXkfvum6CQjjXBs82",
  "key6": "4gyiS6zsYgCaVoxqfYpxdaMdDBCcSv6XwuCZAtx77rEEgSmDtFLKmoaJ5H4pWSVzbtyK36xLeqR4Recsb4pWcPSp",
  "key7": "5ZVRp3yJHKHz4T73rCytD4kHb59AEbnYV7Rrww1VMqgTdBnakn7WBJVbLCEWm8SeJkELb7yeNaMmkCPRT11draBB",
  "key8": "3SHuZCeRqTarZMpnc45C8iFNjcfurQQrdPKDz9D99GFkFfK2H8e5z5YMo5SynrmJjMF7pDSNbjc4M6Gcwnz8FNhL",
  "key9": "3cMN91LFPruMRQ595BGTEbaf9XmmJHEYfdz7q5NqcZfzQpX5QmzeNHypLsgQEuYmu1YArXwFraFUtWN4aU2FpjBf",
  "key10": "4SNsrks1XhES3yjTRnUcZsHMAaVb9nMzBkmG9ofqGiuvmgFgPfcsViygrZac1qeoSW4HFkb9BsC5YJHSNWiw8H7H",
  "key11": "5uBTiMhxejit83LWKGEDJcUahpWUU8v6RGFWYj7ZrobJLrfP4fPRU2stEYLwM3yhKBygU5zKD26LJTvVGrBFfCAX",
  "key12": "K32ccbc7ziUtjjD8CcqKi9h5pZT7DmkRJoyYUv4z1QqrpdssG8utGBSUbWXaFGssSKV1He5wNq8rQ1rLyoVPcjc",
  "key13": "4XYVTyCEBSa5RSNHAZnJuA3iUFSP5XjvUboCJrJHgrQET8dWVQTUbPjwsCdZhGgkuWs3oefYg4Jm3X2J8oZhUSpN",
  "key14": "3ejWGTw5EW4NkPxz86TtQ4B2FqNZ45UyX41KgzzzYqYBgaPkE6BzZ3MgPVbRLuBw7BkTvpEK3KXqtYteaswTtxx5",
  "key15": "28jQmWaTKKWabtqTesbreox3axCDsjTchXunpc5E6MXzYhhtZ3DLfo31mRSr8eQv5Xy6bFepzPauL2FvgeSdeJPL",
  "key16": "2h2nrWBTzz15dzdiUgY1trsPQsX47txd31q3GaF6tJqvTkErgYrsPr5C6YkvFZBAnLy99a8GvE5jNmk2EcLSrMNi",
  "key17": "E2gxUDMUD1jTxjzt8NHsE5qMsatC6ztf1Rr6SHwAfEMbrH2BFjtwpGtf8vRJVE8uD9UXwgJJWSEj4Esua1tx4Kt",
  "key18": "2C81Uc1juZDD5beHVP4or1GQ28MkBnfi1DtT1yZ7GGF4CFyLfATBkHjHb2MdZ4LST3NkTQpo877GyFUMAi2KFuvd",
  "key19": "2uZvY2gnChQVin1DQfkFar4MgyjBHbgxJVPcRyHEPvXrhtqefv5GB5Lo3ZZ7S4964tkfvnYRPDFLbDDaiv6vcsnT",
  "key20": "3126GrtazfBE4xWk1SSS1C2nievtwPCAzWYBnvYwqPnDNDs8DYi63SJF7o5u1Qcv5QNB1socJfHqwYvHy6G1VzEW",
  "key21": "duLeSmFedZYRp7SwAxoFqTzZffRzaTaaLHFuPX3XEhHbpXsysXfwWAQm7tqFPX8SYwvsmYBMJN1iKTfSE4e6ezu",
  "key22": "2qzKFcNgyzcfnGiJwbYgSoGqs8tzn3b119QcP6gNs6nyLtWJPGJnmiX31cAh3GR13LkvwTMNv6JT3erYCuvb6LQr",
  "key23": "4K68vUJ8TXnbnbd8H7wtwfxxGwoKTu1iuN5sxCHibe449XY3YRoB3JAApvqvz9XBbbKT6iKNFkDquuF3AxcADVnW",
  "key24": "4LCBsEBx4z7h6EYcZgqCuo7bWB48aKQ7HqZu2RwxSxxXPG7hv6E1nKeUA3Y9ciWCfDDr9TjpqLFrzeBvaeHXnMhv",
  "key25": "67bLqVuMsHN7rVaw7AcWK2RefiNpxMM5i2WRFzYAsg2dERK2rMSzmDD7tDiUnCngDMUt4sVNGNdGQon2ueNeDn2S",
  "key26": "4KhiKajNjTUo6TdTHm9f5dWDT4W8izWbSiSs3FZzVGa92jRSqpM3QKvroazkCMs6YvRGFN3SLqhaEmMr9BsNi8WA",
  "key27": "66EcFysiiGzFSTLXSChtXa3gkxhpSQoNPJ6YvdrYTtuqYvdq9Zg62AzEoBAMv6cSJeaUi6nBpCLYzhwuSUxHigGV",
  "key28": "NBiMSUsDajHNeo7FWrJJ38F1fVxwSSi5TqdUHu5UZ4Kt8oxLUb5YqUtEARE5a6s1a9AmDUeMpSKwdM6x2RnfkCR",
  "key29": "3pLbCVbzPdS92PYg2eu7KioDFhGQ6yZv55i9zTyPmWvTF25LjCAiKFL1QhEE5SdNi1aTwd2XrMkPZFBfWpsnCoq5",
  "key30": "277o5TFhTiyhByJLdKh5YFbjh2kdr5qJgsHDYRk57VDnp7MULo5P9rbVHHxMF7P8D54pjQNcnNYoDhEnEwZ8jwZm",
  "key31": "3um2BsWdC7JaNkhGPMj3ATN8zMGPCJ9FVzVzmKmUTK32jzN7APc7gEzAgZnLtu17NRwmjhpG6B5gGVyvELC1jmT3",
  "key32": "59g94W3Wg5d9yYcb6D1uHSLHRGMMrBTNMPMNcYUXNvHa6ZbDkJcc3eRhimJCzsGeaYZtYwzvBfE9rCctRX7hizpG",
  "key33": "5dfnKY8SRf21zQFgcofRSMfYDwv2kTYnpuJTPzBUTR8u5UbCDCWHQ3W8AY1FGLMNGwmSj1Ra35MLJSu72ZJR9rwZ",
  "key34": "5ct5MSseRSXpkmvbtYfMMm1Eiq2ZnPBDZgoW7Xuj7HqtDVaeWaFjJHtUR1gfDE2LMaurQVfaUEDx83HQrJmVprEB",
  "key35": "3jMVcZUgmo9PePqbDjWSHejNDM4axSKkVyqFYxC5otWZn87v9kUEnFN2bfeYGYGUwwxW9Xi2UZFQ5yPp3cprmKNQ",
  "key36": "2eBENNM3TKMXKqZ972jY1ppQ4zPUCzWcxr6qrtYES2y13PibijmmPeZdXrNFpARizCxjWqQKZiqaEZGsJeXW8cJe",
  "key37": "3z5ccRX9Cp9HYjETTy6xWpr3sFxGDZEN2UXGQYGzKyXkMcpBR6QKzL1eJ2nmyY5vw9tdyY7jCxUossRUU7DVs9aX",
  "key38": "23HmKLAJ2LGAKChU1T1x8WjVRrCMgoUktj7uFMoRAD87F3c9BKnfiFvp5Nfz9heBkShh1d181X5CkvZzArUap5V2",
  "key39": "42mS4g8HkWY46Si26dRBeCKXHvF3i7f1SVbdqdVvyjYCLC5e35E5gEqFtgGmgRqVDTjmc4WK7QXF1NY1rbaxsJFS",
  "key40": "WHTHaKczFyXcJmTr14V7FjxNHhfMnbVAtpJCkACZVThcjsnMjNxAr5hY64kPVLHitT7NtjKtB49crBjHkwxkj24",
  "key41": "3TuRQgt6YDW5wbuocFCRbMmt3SXPkJ9Y1ecS9AhoyhtvLv7uqhwpDv6dZdNMpQuC9a9kgxbb8PfbJU3aopPWxs5m",
  "key42": "RpKpRNBc3NTNtk1ZYCnYRy6S4CFu2URSLSjA3RfDqSscitj2obcZNsif7pE7WpDe8xeT4WFygsjjvmkcAgv6vkk",
  "key43": "5rPnsgYogNffwCfuBpBfRayuCipAw9xGRasfJG1naq8e3RGb4u6goUDpcHCdbtwrkjs7kj1YYwd4MdpUrxyhEvvE",
  "key44": "5Gz6Ho5ppPTyKawzTkKzH3HaZxGq9KxXU1Wd6RgXPLvC14S5SC2UKD734RgTnHEK7XMmPn32tqYfdKdQb3pJAhFc",
  "key45": "4YzmFtS7KzEtZMytoGKNEbobxK9AQkTBk4YZFbLKpARhj21VPnEGzEK1fmCvCVydoWo5J7gaCWZfYyJoEWxpLUgc",
  "key46": "2q7GCVYc4TEWFjaX4bj1kwhQefHmn1NUTbY7sQXjqgBu16uEhbQqqLgWk4erJ9uoDMtmqW3a1M4eekeTrSYa4hVf",
  "key47": "3MHtPh6iUxTEF7aik77v9TQhhw2CuxHEimb2Rjpe41NHjZXuxdh1jr2F2RfwF1j4tr27ikn7tzxRuVUnqQeGd45n",
  "key48": "4LxAAW4sLMY94Xkisad3uofsVpKFz4UXqA3cQFqFuH1V4KMez7mrsKGgG28ChyxFbFHF4nWahi14ipmzwSCnoz5s"
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
