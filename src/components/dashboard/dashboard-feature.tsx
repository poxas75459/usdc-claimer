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
    "2PYX26vaEaZEyRUND2taP2Q3QciGhMuMYwWuJpYGWFMBrhdPLYNKdzw2RYFcJhNWVKyF6i2QY3y71ZuryoQZmybQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xU5TS6ica5EU8ypGzVaVwzR71QkgQQuE3yosix7siYcKSP8oMjmq4NyKgUBUTkWMtqYR4xMKeUSh6ZbJVKHQk9y",
  "key1": "569RmVveQYuoWG8ptYCdUqw2U77oNgtsMi1Wa9mLhjCnNH8ETcSVjGZQJ4mpbi2VzEDi4H66pUvFDiY8TSikk8fu",
  "key2": "2MBVR787GbpWVmSBWhseFGApUK8Zj2QSV2hPDjRuEVHARTVWJc54LLWddFtK84EMj9m3Np7683Zb8d8cRQA9iJPr",
  "key3": "4636LrA7mKhAAfFMPDhan98YDomoCxznUPdHMLV28dYvGDXuYshevKeSAnKfS2KeJivrCA1mfAmmmTf82pTyoYxf",
  "key4": "ueg62eAHV8Q7fGcs1aWJFbogAP6kErQ5CM5yZfYaigaT3CXcpe1SuEXYKqvXt3ZVFCUCgtvXTxyaERgmPrW9Ehg",
  "key5": "4tN6A2xGuxtDBDBf1uEiMr3EvC4xgT6fMeLA5zf2xWDJxjMKuSCMWiUWrhcNEGCRbJgTNVWAFG2KbQXBakhTbpTP",
  "key6": "ER7LDtXN3Xr1Nbhk7sKHX6CK3E9Tp9QPcgvjsnW6M57T6tUBJR8KB9cDd1yZaRQzq7WAttx9ZqyfZeWvmuMqzMT",
  "key7": "49yV6mbw4iPTSvargHSJCUAEMYFfVZ9ZpKufYQuvnx7XbsJjSeHrFZJsH6riukLS6bCxtJzDbdtyY6DSGLpzQ8Es",
  "key8": "39HWd314o1QtCjuRhFPbC2USEs2jJzeuvJm6UXFhgjRjyKvLsajKSQxvKNveMzyPUfurwkUNC7MhZppNDnyuigYc",
  "key9": "4KkNTVJgyryQykUvwrHKHsMvya3U5WCLLT95LYBDPoZgN1DiJfxVZ14hoxU5CdHx6Nk5xFQakToWtav9NVp81r8x",
  "key10": "3HQCTs6Kov9MPEaHoMvXe9ccBYqCTUmJx74ab8euN3EXiGkQyXVKs3aRpM4yr9FLPtReEUgY3DAYJBH7AZBkrraP",
  "key11": "2jzLXbg91adUkqvBQjse94goMCzkk5ZoZQtR2wSGVxnNiKV1qiRWMjdRV6TzZFRmnBDTjhPj7uNFo1PqmELfdbSE",
  "key12": "NNQL35VkWZy7Md8FuBZz48SMQ11zyFxb7rJ4RcDNeeYuiMLHLEJVpHHnqtL6BxTXCmES7cZFmbnYhtsnbVxtqgY",
  "key13": "4nfbBLvPc2CPg3UTwDeckx4aMNfTmF5snYkJKf5gEmAw5ijQHem4UFeAocFcPGLgp1Ut81WL6LWdhcptjkD4Eh2V",
  "key14": "4rHdECmJb7xedm8KdpsCXJVtSNRYtfqSjjjnGdNnG8u5YdCUTvBDRJNCtr5UPcjbmHU9byKZEqNRbUDRBZChi5au",
  "key15": "2CxHYWnW19phwmU6Xg6JtnUpJBH47Mk9mi9gstJ2ec6JzTsozC4LqfiVewaYE6Aki3M5Qi9SMQF7834RZqGGZfHY",
  "key16": "4qbVdKW4mY8KxCTinMwfQX5myBUbGQZt4RvMKLuHribahXYoZieVqkQPYditExbC5zvG9ZrQNCPedudbbSWvkL99",
  "key17": "mf9Gza3ejVdEguQUsvfy6tLUdjVDQ17iYQjZZJHmpEEBC4uXDp6XhZDG2AxJYRprhshiCkDvjSC4gVcoYSKJBYV",
  "key18": "4vUo7b3QABMur5Yaps9zMfAyomPRLioHeucUoUXnkXaNpY81eJPSmVc1NZDzs6hsc9MAe8U4qyW7iEuJvvBTwmc9",
  "key19": "4TY1Am1TKMo9PYfCsquUVhX2ewe8nLrKPQnCD87DLJuBrXhkE7kivz9592AcMXAaoHQDAvcsYM7oz7FXCrWzYVb3",
  "key20": "3cRNtiF9B4p1m6TVENbEoP3TMRHSR6T7yMkTkbUoufWuRiSJ6ZaffQiCHGpBLXGPgVbtXHthiBYYXJBHvHhq2Zjy",
  "key21": "3NJNAn46XAvaxkDLQXmq8PT6LSiXCpZgciTok4PUnVP2e94v4deXtCcdWD4VGM8LuYUhiHynkBMCj32rVEvXaAha",
  "key22": "2KfgKN7cSpi7UKJKoz9gqrXTkfworaUiKmucJxSG6Sk9mchE3NYkqmSTgRzVhNNDaM5nUgHGtWazEToJmL1ZuuYV",
  "key23": "ZUsN82ZW6ReVVEJQiHutFnkeoyBXqoNbTwttL9Lhq3Q4qFLbWYSvdzDU5jNrouszwXzTHT1fMu114eyFfwck67y",
  "key24": "4jJ3MkUttWbEvgxV8EtTqGDwychULJudCXb9ANYgXeHVXgDaoQGCEkHC1Lf6U4of5UuwiDKMeuam7cBuyUVnNY2",
  "key25": "3S4VfkrmPGZAt1iMM8ThrS8S47wDV3R51zQpaYL427G42PLQPHvh2zzYWysJz6epHEfypcVgddWUyAdm6ijyEkGC",
  "key26": "VLPdqQBtiMCp7sitkwjiqVQV4qZWDKJ43f74fDvt2iNTkkKqDtB5g2WGz9ATamVk2qMW4fKKhLTtuvXtfWX6fhx",
  "key27": "3gRz9nDiNk65CK2tfsr8sS59KMz4urTjq7tU1wk9JSs68wUr1rNCouSDNVHeFRyMb7yY1FSoRuzVexgrPrF5t4v5",
  "key28": "2YJBzzR89Vt7bRSJFvkGZV2DxHzxvJfsvoM8ERM5G3mhedKkZvKMZRdxjgVmFNK6tUsnmpmZD7C7RAWGkVtw13RG",
  "key29": "3WSvniTBjGbWqzjbYsVVMZcBMteiFudh564y2u6ZS1z9MaEJaEaKG5Hgm2fswgZ9T56gyTiRqB7jF9CRSw4D2kv3",
  "key30": "hEZWNY8rw9NLpSoUNWozZkVgHKGxjZxntQvFZUHo5Faz8A9jwJaHeFXppt4rtGMUphWEvLC8qXJCT18zi3ZD7Md",
  "key31": "3JtvuzntarmB6uh9owwJzsgZFwWqevLw6shG2r1WUr1249yDfNma5AF9Gg4v53bRwXkeT9cpL4RJobvmnnFQC6WW",
  "key32": "2J4jpDpfMtVmMaimxBWBepaN7QETm8GUv33VakVpWSipFbPqWmpnXrNApjcVLt4F9j36AVJQsXNH6LFBapH3DapD",
  "key33": "5LjMYJw8iVnJhXNdNqQYS9ExrjvXYi2vb1PUJUCin2ZqRDzuTm9JUq62DFJs3r6aYKqh8nP5xvQcyC71Se3eoczf",
  "key34": "4kk4tebHbZdQhAkV4oZL6VJNoscb1FgRBTcMfT5pBfDyyHwtJXqNksBwk2Sp3MZbLjm4933u3Du5iwTo8iKEfQi1",
  "key35": "295ps1HbSgQLiMVKEMrFjK1e77W9QcaBHxrsXyvqvMnsHoDEFnfwydFSGwA9BeoXN8PbFLxaQ46dg4EE6mowndAU",
  "key36": "rx9rhVz1tQhxCHSstxkoJDNV4qY3XuHb36PM7jdcnmLZc3y4LbNWsd2Hn3vHES63G1ors2Kwi3y9zhAj6TLFYfZ",
  "key37": "35s87YHJJhwjSyTKv8rVaYqZJu2Fh3CTeGRr9fEf2NGzyvzeWAbrGX7fETUXuD5nD49MQ17dHpSQ6Wm8uLGPpR6p",
  "key38": "5NrcM84hA8DGmaBXpmp3jW2Hc4cEQEK4PCuS8opxQfQQs6iYnETN5L7nP1fbkQR8Yg8fUB7ZBgPeQuXjuWcoS6gb",
  "key39": "3wQ1p8pn9e5SWcdfdjCpRwcuvnX1xBuXzRE6gGBDSp5XJU3GmCT7TfrnWQ8QwpP4r48ZUjXSaVAucMzgEpqQieu5",
  "key40": "62Y8zPvuz6K1svntTEDayDfzfvahn71To9e6EL3uudNAsWv5p39i3pLfaMBJTqusr1PsRQPVuNsnLB92vMFxB7nv"
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
