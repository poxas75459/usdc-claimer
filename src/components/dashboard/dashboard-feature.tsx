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
    "3czgKfGJM1wcpWT8zgdkNLa72zxJPAU3TtGQG5CehP3UaqgpaQ7JdwGiuUpciEP4D6j2FBktWUjwdZTGo1QHWzpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukvs2Gdn82Dxd1aUADfwJBerP2WAv6oZgTwznAEBM7bkumK7nm5KYz6AzQVEA9gj2VH87pM7Zi43671KcRae7DP",
  "key1": "48km9FsmNEP3aH4VsLnGiv6HSUSLJYgcGF9PigdguhH26ih446hTQQrubQhneSK29RrStc7PS4Hq9bW5s642ijc4",
  "key2": "3qy4AjvceXnxYvGXHp5AHiw9WLuLwdvQxvFn3hAQV7x2Ntgirfvh5aJQyB3H7FKT4dH5RdTTF6NHtxWkvxdAMorq",
  "key3": "2qDrbr4QkCxxcz9ysR9t2rfs4gzDNhJNbZP1yyunSQXQfRnfeYL59NigeBbNTstV1qbDS5oUMV9XLg3gY6jeVXWX",
  "key4": "3HLry3y8YbiHk1EZbTvqASQzSwu6Y92dmENCZkVi8WmqHWd2HsPFUKMpyhj1yXMpfGkdSV8WECy3ZGY7Gjjsy57B",
  "key5": "LMc6yJFYUqhaD1v6HeQ9qr6MLwTA7cHqaWjBcfuDMrFqmtRYB3bjrJ2Dyoj7Zv9yJizCkhGBJMAxp6QEJ17cjoW",
  "key6": "5m55pLDYvvWF6pvQziyNDoqZyc3YjijKVcS65v3MiGWT5WPRZLDJ8KuTae3dZwAveFwgBL3UTWY5DDuYFHJY935k",
  "key7": "2heh8eLc1P9fWbjavT57r3t6yYRupnLB3Yn4udA6GUP1CeUhZEsKq6dnFhLGxin3BkqHBwjNNsFntxFb5Rc1PxUt",
  "key8": "uftHzGwDeVv18St2T4QzbrMXQZ8fj7VB194eas6VLd9YfT952nW2TCtfEoua64D5h68X8jwGVVwADPcdhfdW9ws",
  "key9": "3z1iQ8fzHqXowU5cEGXcyPTodYCGkfWUFYfRRNzph9RNg29KAQ83Xv8mTPRL4n46WSJJKq52jU8chNMv1AaCojEv",
  "key10": "cYqeqfqJ4JU2JVtd8bKS4BJUDPurMTC16kxqgGwVHHcBqLzESHmkJCbX2Y2KEUpXWspbik48FaocTPt3qLt75Nv",
  "key11": "41Nq3EtcShzvQbupqUWT1iAqW37uCWPvncRKgGWk8su5o5TaWecutHncJTvWFgupuLvCwovt4vivGDrNisfcRTU7",
  "key12": "2HwkFCNfxnkXvrtDc89Ku5oq9vgeU3YezTpv4QrA5WasMK5FVRTPa6kkEM8pQwHASCwi7VmMHJvysYjSoCNnTVKQ",
  "key13": "38BELzXtQWbqiditpJQE7x3kHbZvSsqGLAmh2EuRvcyioM62pZNDEHQW9N2BWdZ88GPypUYSs6JSXM2wJSJegAZz",
  "key14": "4xaBMvKQ7AcAdqpCtRBzWAR4zU6VcwyLF6MeGVG61gAbeBXi939Be1f9yQL9NPJ32fgy3a9FQtGzeaiBr9zvX9kk",
  "key15": "3Nuu7uDLRrie35MZfe7HcjEPFMECEiPhtncRUgieex65faKEGbJEQfQ7xrsmptLdAmeQ2AdjhVkAjAe6adsCSnXT",
  "key16": "37Wc9H6Spdsxr67nub557XwwXRAsWingjrS6bGK89arxsbmw5pvaCh7yRo8nci1dqMxzsKT7yjDeHtqx5zw3PeBf",
  "key17": "4QsLbPfkAeFMp7fddJbTwt2ZLjzo5BwKr4h67rLAzdNot2QDvTaf9VcKFG365qiuhjqduGoU1vWMxBJvNMgU1tDx",
  "key18": "5wuUCSqSHgjyruzsV4MGw33zRhMUezkEoH7NGX4unTXRB2oijMw1f2Fo9tRyLKA9TtoQ43Z5iViJ8h7dt1X1bkPn",
  "key19": "4hqT7pufqTwZxQ9ejAA8zK3nvidup4iKZKhjnMqd6zDLnoAo4oh9MAwwBBJwmnW2X4GrMwViYVGCvspo1ER76Dwk",
  "key20": "67cidA3Su2Bd24z9B2zNugWwyEG8431U1suhtxHB756JLtULAS6yyZedazHWyv2strVnX9WDHux5zgVXdF79gbgZ",
  "key21": "ZHRCiPCE8g6okgMeBUH66jZ3JTf3bGYUrhHicUnNRgpiYafCe2kJVDwMEqe8JqUfUUgFhVa9Rtw9Fqycjiyb5bd",
  "key22": "2VoLmPAVoHwjXj48ay6G7Q5QbXZRY3PgWLitCTNzLgTfKUV9wehmR6RLSnTzBgXQCWq1xrUG8GvDWnHj5wW1ushd",
  "key23": "vHDFiJ4qKsSgubQhdr3DjCEwmDwdVDEeME15h3LzqyUa8sYodCRW6vi8yyFZHaQUMf5sEWUhnzXtDunnr2EJdPx",
  "key24": "2nC9JBqq39MQwySEyA7bRrt6FjSZ9W3vMG4vybBVtGq3qTBj7gyGyr7DCGTSPK3vP43FT2xZv5FfHvAQeib6B16U",
  "key25": "3GJkPo5DbE4oUdidxmuF6cDWtyFtuDRAirCq53hiwA2ASvmENa1ucmNeaAs5dHqn8THZLTbEiDjDNAuXJEP2pAd2",
  "key26": "4HW9NizWqcMcrb9FeNwQKqK43Wj9ReEHj86soXmnjenJw6B1A6w4y2LpWm4iCSekno9u8dLjnfRpKvuhn1a1FhzR",
  "key27": "3ffQSVzgcGo8VgKrrjT4yjUz1YM9aVfrzNGnrzJDGZ4jRMM3XVkdoYiy2WSWmWj7DhYWwWmZaFw1a5JoY2Abdquv",
  "key28": "2tQp1V7guVx6K84SK1zXmZK34fNFiMa7GgwcXhHDbGSNe4jX36Q7uF1gYmMexY69SKbA29nUEzP7NFyrfjyoWvgR",
  "key29": "t5iZ2wCHiFakQsViBisPRNn1cNmDjHwnaBYugJMTChLoAMrqVawDVp13TpBn7jZkrioWUQQBQrK8sUYmNx13Bbr",
  "key30": "6Jah2DRw9qbxpBijTG2WqXtUkzRfPkCQj4FvcGZP4UYA4PuDmDqviFMn3xEBWvCVaS94yhwi9hR2xoNXV1FJMYh",
  "key31": "5ieZGRXfTB5FLpPnjfQNQTrHYnvBEiYxHMuMvq4GuZXXvr2qfpZyyps1qc98K2jjrBeG1qDRvNjZVzdwZpZU9Z1S",
  "key32": "3dbBuhJyS38YrUqUKTSUHGmYZNJofcPaqMb2jngfCX6W16FSQVDqQM4YCcj9edqi9K9DMyTexVKT9rENyeovpPLV",
  "key33": "GfVLH1Q3mRf3DeeYejNCwwU6ENNfEafiTLEQGdg1sMDdAfVC8A76raVz3wJVjM2iUPRaiGqjCWF7LeGiikoBWys",
  "key34": "3hMakH59bgyTWL4H71RsgoVW54ZXJ47ESJssUibVmiri4dB8mufDfP1Fx9TrGpxZZLUsPbmPN7sao2dKDqHuckf",
  "key35": "zTN7zAvM6t85ifrWH4oCHuGiybVZXTUjevKowG18KM2Bht7ptyM86iT2B6DnokCdoQAVfMhX9qoZ45Eh76hbkin",
  "key36": "4SBpzGcciGAifZiFADH2Wh2PttCnZ5frZuxgvZo1Fy5QsQPwN26qYiBRbeZWNdqBYGwFkG7TGVpKodTjpnd41zWi",
  "key37": "59fTxyog1TsRw3FSogFZgRdUr1ZdGyimrzCifg2pMNfijVvMaBnpyurZSVv5d6VaiEoRiMZG4Hhco85HXp9wvpyR",
  "key38": "22ZXJqisd2udAU8h4yukQX3gtaj7HDkDnP7XiBGdfrAapTFKoig56fhyfNyKbWiX3q5NBAQGdovTemVg9ibsjhHx",
  "key39": "2jM4RLMAFYzCShhYwPR9nd3a2Uwj98C7ESvb89U85ksW27CCpQKxa3omimEsojELnSs143Szq6QmeacVhH51UjT8",
  "key40": "YT74cNGPxx6vBbbKfyCrGA9EpX2AAEqVsaux1x92WxqyjxcderrT4gVKABQJmxjjXieACTXm5PmFLHxNhPHxKCP",
  "key41": "3gBfEhgvsGqj1VqbFMKav3eD8w4ez54Fb6KKgbr44Y6jAS599aHPQ4ZoNimxdwbNuQPzvniWzY8yoFNJqrmPu7Zt",
  "key42": "3K73pfjWuoiYXFkxEL7qDx33ixLZAiuZci642eospYKYvqWHEZwhPvKHSo6ELTjdbiYpmN8kAanURfMGbknEQiG",
  "key43": "QHbzgmfbq7bETueC22mUscQ1CctPWTswzTn1xL81EN8eaXoZpaMz4cqM1qyfUBftpYskqQg6qeRdJiYwrhj8Hc3",
  "key44": "4KpEEvbfvcJbPvz4oiCKFZAkxyyUfhELDCfXcXy81XzWEzweMrVc22kfF4F8K7U6UmddziUSygxa75Jp4oom5NtY",
  "key45": "5qXxvn7UphBftyAPL8STuB4rH4wBwvYjBXLt9yxmaeCuoFhTn2Eu6qwaUTkWKSrkLb5y9KYvAJHbzU3JZrRfMdp5",
  "key46": "2YN4ieikoPaRBaLiw5RLhDxBEL8uhL5qnFTyPGn1Pna7EbtN6wiAo49NbK2hgHKMaeLHo49watqEt4ToYre3L59j",
  "key47": "5Fxvqwgz1AnbsW12KCFaQrysyoocGCFENtjWf5MPfk7uV5N6DmFDCbFCdP7pfSVANKUWF2g7LQHzaDhBqdVws9np"
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
