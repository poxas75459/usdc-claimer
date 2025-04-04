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
    "4KTQCpepnWUsqTqA97VmYD94pPkmK72Wu15CHbfgS8dx4DjwF63uTNJWsZYrK5GaAd7cquTYDftPtSZfTpe4efWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ArgnHYq2cUVXw5HDC9dmhQocCyVU3U9hag8Ejcan2xsmrs1A7zihNDQotgWwY3LbJg3BHua4YUqwdUv3VcVXdK2",
  "key1": "5UxenyH3T6c6AaBgSZbCgRmax1dqDe3uBAxprHXyx7WUETqTrsAUxF1iieeJYWePGYWqLaLS98e5hzoC6MD8heGm",
  "key2": "3Usos6pPwLqnFZNyu34ZKinz3aNGhJdSe4dTBFGnqYzHe7PHZMQ8LJGdqdsPGg21mzddXvUkJiHJzhog4GWMQbAp",
  "key3": "rk5qDXWRZxc472uAL7eW7DhQyCu7a4L5yLxvZbE7VMU9oyShB5R4ebcU7M7BEaNEawcM5VLN4pzfpCi2BTEVLxb",
  "key4": "3KijNF7dLGsdTF2eKAqKS5Y32AaYJJ5FsKonqntc9Wvvizp8nb2qvpfsQScBG8gAgwKsXHUBCyG2Azc8y4xE5xtc",
  "key5": "2PEPF77sEbz6KtmJzkMULEanff9CVrYUjKV3BW188dyHHRRDet1vgj2Ty8Uu9YqtCZuZurM6cDhUVYPB8Wr5eLAD",
  "key6": "4cC56D5CFUG6rhaYiXiTwDidb27qfF1NSmTwEp6gthN6qBgRY8XTn2yVDKSR2wEV48ediGMtTji6HxkZZXDojWSL",
  "key7": "5GfhJZ9cscH629EoRmrK1F6CFxEG7vQP5WrSPc5dm9Fgk3JMqHQ5bvG5x5G2yczoFTeroPyx1hSt5o3x7Jtucnvy",
  "key8": "5UrxtDXpdaA6xJb8qfLFVvPzYKTtdWGHFvuvW4QQVmYVBCiCNw6Aots5x4V167ATSHgKtfLx7QPiA2Ju7KWuFfHJ",
  "key9": "4Fj8bHBzpCehGAnt5GMxQEpRYtHCs2aGUNL2i7JET2Jt94CrvvSAmhM3tekskWarQ8o9EXaMJ1z9Hb9tCJd84wPi",
  "key10": "2bM8iiWmekUvHcL4JeXHbgvA7u7dFVUTG2ztuSKDdeNiVhspsptwnn5idjz51YzAvNfYMoBhNaHAuR4jqbXNRDJf",
  "key11": "Je9iMV5nmHWgcb2oJLvboGjArWTWmKFt3hj7VSe4X92jXZjdq9swY2TQcwaKzz99fdkuyxzNQwDq5ugarFApdgJ",
  "key12": "3drGQf8tLVFWokXnFvYEYEuuHnD8HXoDd8AMGWCqppqk6L6P1b6VE6r3CVWjWENDquszyS1vvNDaJnJnb5aBYP2g",
  "key13": "3U68gQ1aDDojY4PW3uk1WQNz3MsB4YNFsrwh1sgVd3sDAbZ8uxDFzz9wCUwmwEx2HHd74Wd2fgL3q8sFEnKqXyKp",
  "key14": "3hY3DYDEGPSkfFPx9c3LuqrUFp9R5eykNiFUHRR9TDhRsfoTEwsoVt3nZUn3mXtbT1qxDdd3BraCrtf1RFp37xHd",
  "key15": "51S6bXZV8v6AKv8AK6xd7edseEq6bWgGd6eUh6pGP5oqaDkm74i3KGLtcip3JHjj3CaPenDoomwo9QhoxcwCfDws",
  "key16": "2WXjENyb5caGVQau4MetWZhfc9ZLVpHePMVztTZGNCN6iuxtk9gxV4yKUakapV8fcX9CmYvCMoDJHM7KhLUcej4v",
  "key17": "5LzxvpVGD9QMQ6kN7WKQvgqSDHCueecbmgSBgwK6XokK2BBqu8DfeKEtW4NGEEUJvPeVAW8DtKaVREG46axJqF4s",
  "key18": "2pSPQPwBK382geQSAXa7Dwv3xnoxLJMJKzpbwU6DwRRY1hX61ZVpuoo4sh1JDJLUicnsECovmVkKw7EvuvXpNTCs",
  "key19": "4zqdQAsypxfGrWoqSPSqeS5ZM8PQfTKDZdQ7HHby16Hy7sku4FqREu6iVXkr8p8PrMCZETJ5jrHSNQ3NGHmZgf2b",
  "key20": "3CpEZLJThZvv6ZDDGi8Ua9WkGccEjGhpQk25v8GwLQHxC4HbGuq4MMrvDhnzTigXtFDs6DDzjEbaVzF9f8v8HQnH",
  "key21": "4QPtkEQjT1Yq1mY7WTYV3tLBFpuxCM4DXEB46LTBXp2WYZNCPnL3FxypGb4Q24kkqKTvRqfAbBRKVFkhrBJCqezn",
  "key22": "2FBzKfhNAUGbptWFhiqYBuBdJc4HaUXeqMPZeWUfJRLwKf9TjdFp9kDNBEuihbsmMKdz2428T66v1PBMzgSf3H1A",
  "key23": "64PYaCt5qWjh44vGQgLFai2ULJULc3Wm56JWQFwK9NtUciSW4dRmPeBPcwpEd3FmEAthh9mxBJthrNqLz61DzXEP",
  "key24": "4Aj4qy2ay1XDjcNeYQUa2c1pcyeY6dHTY7ZizyoQRRmynVCkU24K7FMdz6as66fjWogXsYgQ2tpGqkw8DkUhzneA",
  "key25": "2YQZvqTp3yzgDbzWtit1StLv2o3j9pxJ2McNWxfvEf8vz28oibnQsRs9VVVskLSisAc1G4V8V64pN673zejuc3sR",
  "key26": "64yeyYtFv6RWkXVBPkwaGH2uhWPSMSYyPNPBDqPVXT3pSy3meP1QM7Z7NJzn3vgSRKY6mcHyouMT9wsDgRQnLRHJ",
  "key27": "3Fh6hfFnobdBNDSaXD13Cfz5X6VA4ycpMrawctjKEqUiWwh9FBbGkh3p5zW1PUAiXyLkqu7bCgAv7koLZntNXUyi",
  "key28": "4Xu51STLzw4Xeh4aHxRj7MCZ3p1ZiXdT31dmnP8K8Dh9aHucCJhFx8vpoSAHBy5sUjHXif6AFg5aitsyL5Zgbtct",
  "key29": "3PD7iCX8udDMsAHbDKPvYchnWUhxj2a6hwdEwxYMSXthmp3C3p7G6JGfjHtz3az8J63oFieeVDN7jJpJ95brCEZQ",
  "key30": "49HidYxMHiWkXsJAasLXUgvw3JJyvVtqZK5eJrjBwvbVCMsE5VRhunmkgUS55SjU8rxJKshRw9vdDTkuma4qAYKh",
  "key31": "2byeJo95iwtH7TBhsbFH1Rtn7QJa43cjVCF3BLncebB92KAKfnJuJ4D3EhxjDyZhNxRew3tPNVPrXyFKUpAYAL8n",
  "key32": "5NFka1kZhqGZyn2MZro9rVMWM9YANgysSYX9ZYJDDVpZoEKdTVSuo3ztKcxcfpkTnThHynTSj2eHqNG23ARvaG3Z"
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
