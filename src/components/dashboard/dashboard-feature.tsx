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
    "3dPL4N8GNGivHfRi7PBRzBqD1QPjJpothKdU4FCRYn9j9KUdYeDm6NiBhJQMBF8UeGBtvBELPBD3zgU2wGYMBmme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XqaYjFovwSwKDaKdQZHrEh5CWXEoeY6uhTy47NToKU5PK1RdntrmqHqG6XANkc5WxaXQ2SXcePxrQ9y5bpzHHwX",
  "key1": "2vqQGejKKRdxEQZ8yzUn3dD2yCv1BEY7wbYWRyKiusQDGDV2e96yaBdfezwdEC5s9KAmDcezHLAQRTzJfC1rE5iD",
  "key2": "4nBZS6H5nXTJztwvSppU721q5MVykN3Un5SczNR9EsXYfQ11FjFWcdh3anTpJfeSB4DGNxmNSfZbFv2LuWa71GPZ",
  "key3": "3uzMcymDenF1c2NxLKfN1EQ8xwhauEetUmSyqTPdYX4QW7vMufTBkq824RsjTXDDHHu12XfefajSop6XFdhAGP2v",
  "key4": "345ZU8c5B5vSCHdSxv7b2C4pKVBBttG8yLCyzw7BiztKu9mDB1G4TgN95UgG8ZnpWTR8ssQBHarafae9Z4dMFyDE",
  "key5": "FabK8FwNja29JWhAHX3arTJrQEhfc8ae7RoB8uccgfSvLYJVcKGXXcpas7L8gfkp4nbF6Y6hNZVPxNqPhE5CE5B",
  "key6": "S5L2TogERp58S8XE2WoxuknD3TADXNEPb9KC6Tw2tKBcJqbou9d8Gku37DvLZWPiV9oKosWRLQ4jpEZsYkSnpgQ",
  "key7": "4qQWQ6NeDmCYV4CWv3boPzBNmwBMkCt4sk4F2zTjhKsVfvAhTKg7K3NhTen52xWgCG71eNHv3afbQJDCeHfTspbJ",
  "key8": "49ZXWrPd8c3ZGxii7vT4A8igfDFTLgBPXigeKvHgLe5ZfcqYZMZEvRHz5zbwJjT7MDzwAjZVjMbvUZfjYuunWJzH",
  "key9": "2CiW9rcbRksGXiPEBG6jJc7UzXxyYDZpavp6NBuW6QFdGBdqkr5XJJMFnPb4zDDMwSzUyakTsNCMZeF9Xe5iv2Ra",
  "key10": "3eC2FijLVYiLwp93czF31MzLwZ1VNdGFBwzJ4tyVWy1Wa9joom9r8ejBKVpBiR54eWRjtdZHk8PwLPxC2yP15FSG",
  "key11": "2dzPThFJU2ekM41bP7h6W6q81HtrfQojf2aDNhNU2AEad2FJDJ4ZinNFGYvvfD9wYv42Ykt4uV5F9qQmTDfGcKHR",
  "key12": "23FdyvvY9S8hz5NsGhEwzH4ePoum3qEcdZHCzJVafyww3zsrX8QDx2pDWfJ7LMRGVC4n3ZN62C3wY9gHvMZznJLx",
  "key13": "4mBXG86wfUfkj1Jvz4DF7DCcW4XaWSCGBJ5QgUkAvnGW2CH5PKVQ7FzRJACpdXzBkZEsjMAwkT2BNwzYwxFP5MP7",
  "key14": "4TfFBN9HfzSaKKWm22sE9X5djcDjxymxWdyoqs42hPnrsHP6PVWCbaEpEKgezdAjTmrciEo4zHDNAcD8f3up45aM",
  "key15": "23jcvD4r9vCo95uyJ1Hu4LVciQBFLrDb8XihoYJHm3YRLiSUnhUCe8zBPMh6A9c8dxVgqtkH6zq3dTMSGHtjHKiF",
  "key16": "4LWRmFp7oeFARk626BAunsRVEkJFjbtzATmzfBpPF2uHDmGoW51GFiftspbSKnnY7dETHijTpLsSGSVeee6TdFUw",
  "key17": "2HQrLd6jYJnpF5ye43wnzD4eMWjnp59gJJzRYRKWDV8QLQHLv8P9nwkhENzcN63JVqqbx5UGq71jtMGu38UfGdqp",
  "key18": "TVY2Ab9shJEPFhHT31bnqvLJxiBWdwyZxE3bTNbV8mxXeAr7T3PBBCn1HS5Q8hk1ExiTENJqTLMxdLpzxsbwEEg",
  "key19": "4K1haJcHxkKuMn5enp6Wd3ajo6nTjgh5K7GPyN9EsFPTRchVvAbmyW4WAp5Zrp83u8ZLQws3ygW5vMYW94xJT18f",
  "key20": "3y3E9JK92Kh2M6smgn4K7Fhzbh8JdbYn2FNkkNu4oEVeuCgVoBpUyh1Pz4PmgBSUzksG44xjzjTRvLzkVTRzsKG8",
  "key21": "3X8eBV6LrauecK6nW3scmmEgaV2XDBGMeRXMmQAGqWpEFkBt3Gj6fuS4Ybp6bq631pKEV9ZaRm7zVR9mvQZu7TEQ",
  "key22": "3m7MeXHqeoACJWq6t8j7zuajP4hEKqHcdT4sfM4wwiua1hEG3BZJdCax73sQwEq992pvS5U6t1sw3PUeBo5hdQYY",
  "key23": "3whvGTLjZVXoJPCAkwGkkSqyUM5cT4fszDu4kGgu2L6e64ToWWWE9ms3xtJZW2RbtwARHSoWvzhvuA5AxuVWqQN4",
  "key24": "4HxUkbjNsjRkWNDDZB9hLxUZRV3KfuicR6gqcyUBmFNx6sNcvwkG751MkRPiMeF6B1R6ZzdxWQwNjo8vj2riwXo8",
  "key25": "2crvu9K1ZV7FGPBWbkMBkMeiQDT12Qr8MUjpxGhfwyhQwMpm9Z1xdTSoHcBkkw1NUnLzjaB72vCJretxUNK3Hcqf",
  "key26": "yWCEFHmWtDJDWNYTLaQgvfRw2ezTt1hXQA1Sj4cdKCSkqzVTEsSjy9RxWfQ3bSFvZPqf4oKrJJUfHqVq6hbp2Yr",
  "key27": "2hFT11aLMw6fBxxyNAzVqJ4LrRuBvsADka7vxvdt9QsqaSFi2PjsDVSEeiZXvhAVe2fZjY92KanWGJMKLduaMPJt",
  "key28": "49teYdS8eiitZyGG6NhFNjc4qp7gxsb8YLv7gtZkjGazLXjMugb8nmntTGKxSeLzW2iGUTtrDDAUfZ3iJ76oGnqN",
  "key29": "3LJrMHeZ2bfLnhPuQDrHWDePBrFWh7GxrAaDLKkaSugtUNcATCHXDqQmT4dMWBVCnqRRhncE5SCaNoD3JdDBz56V",
  "key30": "58rNBmSbRD91KZAzPGQHYyZr896HRjfmVB326WMMueTXYbzM8bza793VaQ5WCza7AHcMWux3EgdaLBj65Rbx7UZA",
  "key31": "QH1pq9N9Vmh8gcCFn63ph5vaBpG6PAXvLhFfAJjYRZTfRvXwMTJBHZo8jZUgsPHZRQN9x7eVN7dsZxHxdM66XUA",
  "key32": "3Ti1pDMQUon8cy84oLaksPAyXPBS5wvrsfk52n8iGLqdpRL3awYLtKG2cguHE2xmW6X6QtMuB5m1KBTdp7Rr459T",
  "key33": "25Tgr6sfQ9Qi3SVCTgg7g1ufUvq5WKDMViKNx6EKu1PfvRCVtnT7dkjpC7hNM2Gh6eLCdd2KxAiwcCdsgSyvL6Dm",
  "key34": "2QHtQXxBZdJ5dgj9UwWn6bec8PPEKHNHLKCC4evxGTKGJMUo5VqZX7C5BZaSoSS83VDzzGVJj5E73Qma8dbMn3j1",
  "key35": "3SFDHmKhMHqXggyUbJQgsh46JAJTgn2cpCgaC5PXV1wMF6hpZ8itdnY4eJSsDAhMDctfVX6Fy4bd3xoDrSymG1aY",
  "key36": "kkemAVcr7NnaS7We7RRDxmu6S4xdqugwvvyrnbxUzUjSWN8Xu2ZuG1kxWm8WFptKmFMYBPVrr6ZpNdNmES4UZBV",
  "key37": "3oTaSEmKwfo5DUjHAjgYQPr6RyvtaZZ5ineY7ZxuZYejEPhgWuM6Lyf2Ds8s3in5qGVJ4v9ipmQYrTB96JnDoEA5",
  "key38": "3SQDRTCyghbC6RsMRz7W8X1mtfkV5BP9PnGsZhixhRH1RVA1663HGtvD5Umi6r87FH8KQQ4eo9By1VuwLzDP7Bri",
  "key39": "5pKqrUESqce15YA2n5a1SevQotdnXYVf65S6iHsknSFv179P76UG2QGubGg5P8pJrMpyVWvyERaCZvNy7jFs2RsL",
  "key40": "uJcxeBERQxKhqPKFAQyq8z4MHkxQGwmabW34pj76RwZY91ZYUKFjyeMrgDmgTCGtR3GJBo2FMagUwtMkGNXUGfs",
  "key41": "3oFQ7CGMYMseN1Mq9FCTvGdM6mn6cNj4tsEi39TCXRbyA8grpFA3eEJsWsMv4zCjmGNwqFipgwsZmZqdc8kQ83Lt",
  "key42": "5rrrqaAmvuKDVkzof19FaESHnfTEm6WkE1SwR8HZcowRVDiwqep3Let4DY8JP9Tzsz76c4m6CHdmHTAxBYwqyyfa"
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
