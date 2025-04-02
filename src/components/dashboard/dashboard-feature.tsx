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
    "5Te8uhV3nQNpUNzyxjiE8Zm2XHrt8UBxGeynvi23e84QbnYfc9qUddNVr1tAzevEXGojXFX8vUUy5bec9dzfxPTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63bN8ABFqyRU93pmoQgrdbp8hML2ArHGRbZD1qgPfqoHB1vkR1m3H3L5r9wb8sq3dgSfBStwWV6Q1EzcvNJnhuzx",
  "key1": "32V35qRWwM3mWVsdLGHJG9PmUJ4vpv6RR2o6ABMzf7kE4qAiyzoyNVczvXKNsGN85L3Lj7ycW4CReGsQw7knbqm6",
  "key2": "9AoWiNQAVoAr4bknLF8Uyh6raARDEf3kXvs7dXxeUNCMVVN6oUMDu6s2D9LiXQScaaSw9sqWGR6Vk8mLdfwAp2t",
  "key3": "5BLD5hBHUQpoqm4W8UvEBD9sPChZd1RogT3kCybsDSe8nTzJ5wDmfYjkng9GbsuPL7XmJiZ4jowb5PHV9zY5regL",
  "key4": "4L7pvTioRDebQbuLZu14UbS55NwC6Mpptgqev2cc9juCXcinKSXo5x8q62nyzYFfkCof89ko7bwTUFpqYPUZM1ye",
  "key5": "2GGQkdpuFJpdZw6SyJTGo1QkgeNorvy2qLkQTbxkyCynqd3ZYmgkvhUUUkmVpZ1gdfAeN57YucTWgWH6FZiDMKNh",
  "key6": "5Lmq5CmhY4jjNqiQ2siQ64DwQLNw1tmu9Pa5P3DeuBgX6g9eAWyfjb61f8DjCZyL2jBWQeh3G3jodDXy46UuxtHw",
  "key7": "2JKzbC61x5CzNvaFoYy94LeGAovu9L5cpQDZkNrWSCKHX94tUaD1Nwes11cxXbUopeVyY44v3RT5vS8v2MxxBw9a",
  "key8": "5mGdn6q12apVCeMRdcv8XPnaiXyGoNqH84KP1e9oaMDZNZxvaeZ1xJWQ3Na982bHsSUBGuEUX9qLpNvBPDdpna88",
  "key9": "2ua1uifwnLisjobVZShkZRBHeTXGHRX42XVYEbcXTRgvpDgbasvJUqgUU2RqgALdNwvPSScR51GdZ3VXiD563u8m",
  "key10": "2ztRExKBYpGcBgpkg65ujY2ZvGeBrQ8sKS3uiTAQRquF2sqTDarBmyhLgZDNBuFQ7c5SnEU1iTGyvn1ZgZeAzovt",
  "key11": "8F5rrus9VtuYxx9gnoaqvm7YAvBvU1vsu1N6dr6SGbBEmrT5Pds7Sq66g5LDN4kg84se4jKeW8YquzvQ586NxAX",
  "key12": "4TVZzSri2TXJkUyPCCnkDubT2KmEVvPwbh1uTobk6D3sKLtjWnBRyUtQivLv8XwvCn1wtKBofRtYei9Yz3joscSu",
  "key13": "2K4moncQQzht2t4jURS22kjbo1DPwowAR5FiqrivjjqsT5HkAFpUuuoLLvSeGv1MYuSsFpVwK3gwEB6hkVCZtNv1",
  "key14": "678SP97jMegapDsmMFu772LxrCQMPJRMV6ifQYYG6H42jgRc8BaA3EydDj5FEhBaVVhAkfcDbL7TNrsji5sK9s8u",
  "key15": "3Jiy5iwR5exZt3QedwhyQ4XUry6KoKvziLdHpqP33pYw7sp8B5sCnp9JJcbAjVNX3xWXn8n8Qvru2oRMC6SpqGcf",
  "key16": "4NNxxXVvgXDWUPzVxrNL2DVKfk3nvMT1TAoW9WhQC7cUsBkW31gUywmPFkD3kuTfD67ze2uHUPLYfo1UCHzm1Dxm",
  "key17": "mtkoeRtnKSakXqsV6BKTinkGVPAZcEmKubSg37XzzCb8SzaHGR9K1AYFYbW35Usq5RrbukGJUQhBocFPeUFWFc9",
  "key18": "5q7uTbj6ZkMiNDEdEDjZrrxKqhf2wKUFUN1AaQQbSNsGiz6WvGggAoi6KkJQzZxj8K8tjUf8DPinWT5NumnnH3ga",
  "key19": "29mL3JYRNGjK1G9Yndq47t1FxQ4y4Dao4QdQcesgqkJxzLFvf6MUn9hUoF99mkuK9HWuqvWR4GwsQf1nddFqr7jt",
  "key20": "4hrAfXTQMiymZjQEKqGc8JgV6YG3fZm6E5BKXa8sELvQKsohbTc7skLafoSfapCZpC3CwnxvSphrswNLcXYw1hrx",
  "key21": "62F8iGKiTXAGMT5Ko7Bau5EWaLTivXreAptW648mf8Vq3Cs5JVm92mWxGZ3AEAmc8Ta5TG1CCjTDX3xghZhsfCX7",
  "key22": "3AUPJZg5XCdEcXM5iQmJyeTewWP92si5YHuTDjLi3xVehtEkpEn68xWn76VvPy2XFFtddL7RTtsgfpvS49v2dkgU",
  "key23": "5gsTFMqE667rcsw97QpM3zCUJkfdLK5Jv9zrZzASHHWkbpDuYmgs8UNfZpSw3MDg2Sdh9mKfgfwJC3yF8R2jpiPB",
  "key24": "3kmEs23DcdAt6bcTWxHGPAYCPKnC8VAnRHg81Rbewnw9eBpFiUWqAfP1Zuu1hBKZ6jmB1GBdSmuZjG4oC1zqFaPV",
  "key25": "5B8AA8SkN8XG3dMootc14PS1AvjM9D7s3M5wXCAY87P9RkWRpjK6DBXbhEDPuZ73im8HDRyjpX3VD5626wh9LTwh",
  "key26": "56EePzoX8NcqoohUV2uBJRMD5VeE7KUpqnpSPNYMFpktdTZMayjSsXPt8dmS8uHKkfNpEbeXydvz16KWUfNMqvjH",
  "key27": "fXjNuDwzfC2haCk8GyYR1ksVtBYMba9NpDfhsr12UnxjEqdutGQYizvVZ8TN9znbEksjophxNu3zaur2z58AZYw",
  "key28": "2uNhCB8jofrhc8fVhys8mB9idYeQ9fhXPRB1he4689roa3sbFQCMGoWERiRjK4eofRj8ixCyteTvhi46rzYzVHPd",
  "key29": "4vDNYY8PBUCX4N5xsGQdHzQ4Yfxy7ivJpo2XzWirbrCUZY14REgDw9zuAnJW6WtnQGkJij68fz3VFbtCjTkg2e1d"
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
