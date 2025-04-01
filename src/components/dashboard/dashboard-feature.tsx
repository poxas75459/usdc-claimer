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
    "3Hn2MtKUe9wo9PLFMmLyiGFyRYM4wKLdT5eutibL5fdZHrp9VUaVqNYbryz3PjarcGePK9rvEUnjTaxhNfSWppPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "as46xgqtfiS2Kb4V5gGta5HcoHeCo5LCv92oGLZgXjgVaBksGY1zprHTmnKjzVg9EVLugTQf4cRsm7xxYkQ56jW",
  "key1": "3igrJokRZtcbGWugPntYRNhAyHyTiYaaVdEcpP5XLTSDSPDcvSgB4FLtwQDwnKD88AdahAG8NStbTmfc5zBaBArz",
  "key2": "5kwTYhiyGyhGxVA2aZPvPdz9m3ELww5fWFTvouVGpuPUMPuSJ6UsHhxQmbjNz83kpQf8j1RLGUvAAbPsvpQ3gGtG",
  "key3": "411os2PAP6QTraN7AoVFBViiqjMYkT738YAehCMTWKTKFK6L63tc3ehNGM6Rb2fzX8vCHNttTXu5Lk5cmSDv8CuU",
  "key4": "qpH6DZrprnzi1qvcafrUYNS9ywDzQUnBu3utKUV94ibGga28danguwXA951RVn7QxHdGsABmAmAEYFJwEybbyh1",
  "key5": "25g58ZFgjUEKySE5MDRotwGYtbkKMHokMTt3Bm6EPQFgwP39HB58WiDRAnPXQev9UenqdJgaP3VCRyRN8KgKPKkU",
  "key6": "LyrRe6P5F4KLksR7eL4iYxMZRwEc4w66D5FfC7mi1jHhx6EjU7d7QGWs2afAJQWDjCpJGWK11Yq4uhMLkRsVssv",
  "key7": "2VfELjdWmZoJsHs5ZKcRSQK1eaEZfZJiaZiNHfnExdGhe6XKwgP8NuLMRPNp6D5fY1LSHprkvjTgAEPN3ZNzLvM2",
  "key8": "4huiLHLjTBX77cRNxpAfnWY1Kfz5PdurgLYAoD3dSGRqa51kSaEia8V7Eu5Wcq3b9cpR4VtSooHJyUH7ea2kRf6X",
  "key9": "4J8CYtBiiKGXWPcvZdEFHhC3hLVYPm6Avbn9ZRsZXjsddh535CBVwRomLxBsFKK2vkHMrFYRLzvH8Y8SeXHTTWEA",
  "key10": "2nDf9Jdeyz29NyEzu48DPhBP4SNYATi65Lf7KdVGHcZwhadnY82MWgcpLq3oATnti1eC9jPLYat3buhJNFk7xasY",
  "key11": "5Xr7unKkDyaAgvuYhcMdkEXxLi32rMcMWmtev9tVSc6gs3wUxyPUsoDK6XrSDHHCoiwAhWAXRDdUHh2tqFqqTun8",
  "key12": "5drTKxxeaJRCpwCRJsxsjPjhTVrhEQMaH3ADjm5JedRycYu1xHBupsyaf2gyeLaJcrma7VxbD94TQL5X3DBquwkA",
  "key13": "61x7pxFcgy8UdexQamLQSiccTC576waeTsu14RsALRnZdEYfckz1dMQ4B2xmjeww38eXuHuStFUGGnj6eLUMCzg",
  "key14": "32EZJqoF6UZxrCTn1VVWZF7uswMRrAvNue5vbBnfih6tAcKQB5KyKUoFARP9iUqkc4NGGsqxJDGFRWYWVsmc375f",
  "key15": "3VfPNkjyoVH44DJtLDDyhajRfBbaNTSrBuRGVTzQXP1CWbLgrm7uM6TmwiRRxGZtoSg5wkyHebzs1hHEUGNBo1M8",
  "key16": "36dwnJgYJEYpxPVr6RyKcBixbjYWEvSxCT4p9ov4NP7Jrpy98QpPgDHLxXK6FJwz8NC4uPPrxoSjjizqs29Zmkn5",
  "key17": "5JsjiGMX4gTJZzbTGZMxc98Zw1gEmvec4kYYC9w5fxPX87yH4JCpex8kQti8xB1bSd2J91XJNftmLPwpWV5q3vV9",
  "key18": "awXHQBiNGBa4CwhoaMJaQWTK7Dp3B8NH9hhJCAJT5NytZWYyan4tk3xVMjSyj8LozpDgEc42zkefwYjxsHDNokL",
  "key19": "TSQRmXGizpAjhCT2AJ4hETJU5VXLzq1jKK3f59TZ9jU7HwPCWWjqy4oe6PniYzWizKJQa4N2iWb6JkGLivbNL57",
  "key20": "46syq6anBTFfKgQkMeJRtSQTrnHtk163v6BH1hWt2TS1dh32W5foeTPxQHajQAMUDHAtQAH4YUWxAAeJqzQnftEV",
  "key21": "2gFSPET779a83aqn7G3rPBSvfNHLkxEoZ7fD6G9jayprxGK33N84dEcNNr3euBp87z1iRzvvy6xnywhYAYnwFPo5",
  "key22": "37csXMVNtXxPEpWUJm3duZNE5n5zSve86Lefx8pPpecgQKuMJiMTkHXuDV89WkPcFGBFb2gkxkSmac9i2PsjCcAo",
  "key23": "jKWKa6hktuKwMDRJUC1KY7ydQggG5UtheAHtGNcbiihgf5R9V4YVHLhrNeoMfjrn8KdGM1DysrVAi8Nfs1fjVgF",
  "key24": "rcovs3Eg67htUW9ThLk5WUBA3ixppcrmizf18cDTG2nA3vm1Kv7b2Kiwm9uF9ZM9eTx6ubXd58ExvEKgHphwV9q",
  "key25": "4S1KFoK8KEf1nXBnFWe1xGR3UfMcFeTdN8nByGSSW3X38SZ1TZAAMHYYpELgiMzvEAYEkN6aoiVK1BjH6fd1X3vb",
  "key26": "5QnrW8qVM47J547iysit7JR8CV5ErmZqfWfphSsHaMZv4bz32H9ouTsCGxpJkCRRcfZaaWCGdVfLusLDvkv6JRDx",
  "key27": "5MNafKHJmSTbcrHNd1G7sB7bn5pGDU6G79uB8AXk7uXSBceTeToCsgLcNsL1sjrHX5LhWLdz1wqiy7Ev1cnY39Le",
  "key28": "4KmpkiVBSuKkR4KJeuzq7UDBPLbDX578vhPYNxMS8v93j19eG6Fi6PgPp8nj1pbDx1tT8YXTWSaecohrRJuMTSMQ",
  "key29": "54L7miAyfTQWU2hRhUNR3d1X8t249NTbfWNeAHE359DTYc8d9kz8hfDSheFxW6fvZBcUjJqjKMK8stufudPtsukG",
  "key30": "3H1DYMZuX1Hte2bBqroShxDigJonEr8C1cbZzNddAtv1ieJj4e5DqcZx63opfhMSUjG2zRhwm3t4wFdnri52JYxP"
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
