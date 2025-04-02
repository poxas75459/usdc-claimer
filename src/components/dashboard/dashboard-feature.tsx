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
    "3NM3vZWN9Vu33iRcecNmxt6715ibszRBxB4tyQQ7eHDi9eWNj9Rb1LoAuw9wWEdaV4ktcWSMtRGjEKQUvJBo4GdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yhMjbowq1F4SgkdRCg9D9i2PwygAFNtM1rFwJ2T1qoFx9JTsqYFK3mkSx4oBmv3nckPHxUidWR6xLMLdD9L9dqg",
  "key1": "64oyKesxwnFr3MQwWA3GftsWBL1XdMaebgXjmqQh2UGCZ18rPWwBjdXnXgYe29Nr5KPcJ9BKr1Q4KrcqcZtLJzyZ",
  "key2": "ufg1HTXae2AyTwEHUCakxWoC6V3RxxJ1cm2nMZousa4mgrD9pEZjxJTvdKCBsT7Z8pj2HG2MwGcPeKkn2MCjeWz",
  "key3": "5UBSzci1KCx5aUhBasCsSo4chPbBbYK6aJJMpPNyHynKrKpZP8tke4nUq2L6oDbVteQ4qaavX3pvmL3u8wkiLLie",
  "key4": "3igZmKxTdvsUyScUfmVVHJQCaAxihMYDoe6PPAGY92wY5DK58Tg54fbCv48undsYhNBtNx6662SHwX1vwr8KDgRT",
  "key5": "jGhF89V6uadcf5LmEzYQHDuYUV9ASarsMhGM4ncebmhgRdyzKsYtRChWDytXPAByTKcgnT5L2deKC4c9DiLzWuP",
  "key6": "vBmencpEfezDMzYYywEQcA3rtpKvkekyd2KT1qckfSLQJoxsuCYQ9QX68xBZbv2XQMdVEXzfShUqne8p2qEBWCx",
  "key7": "3Mr9dSm7iJZMo6rc5oH26fHj2dqcUxGFHB3jY5GYx6LnTDXyS7Sx4aQWVAJDVeKNkPkKeUBu9bWuuVa7VtsgRnE6",
  "key8": "2XpcgLkgaxQBrFwgWMN4g9tjUTePxpJe953CNZAviJD2kQ3afzpcBTQHyXpt5ukyiyogTVRdPzgbZnfqvZVuykoE",
  "key9": "5MsCYiEo6Z3xhBoxPxfM5x9JHUPUXiDj3AZ5Dxy6zLyk2MY7DijAB6GNg97FZSgCtszHijsw2m3yNhopWD6tbWfZ",
  "key10": "5qf5B3uob2zobcDbRnHxS4odPmKnimQ96fkLX96Qk5ijPmhis22NxnPJqTA5Z1wHpYVSEjyMHXW77TJ1wyRLHEe5",
  "key11": "25VxiFSkhEH7o2H2VqKwzms9pwtWnZbfqg1uGxrMtJ5P61yBHQDRqjMRz8e1mWuHPcXEAeuBhsMkC8D2D7bJ2f17",
  "key12": "4RwEau2xVqvW9y1Un5Eemw3nHytatKbu3PCpbYyexxKFfc1TxdztmBmfY5FxEoyvm3LCYYQxBq2Gdh9BynU7QAxw",
  "key13": "3vAP3hBEjTbo5mBEhdj8DP2eZWTLUL9oDpSMEG7LVgCt2BPBePV6CLHLBHxqVUdPwrSgnXggcEohCUGwSC3cmHvq",
  "key14": "57GnN2Hg33JuzT18HsDoXgDfRAQXyuwL5BGPw93Xn8DuHTjnn3vwhHdmc5C8agsFLx58zGgRxaKtaFAcfhBeJg59",
  "key15": "pKHGiF6PkqXLabss8uaZPuDYpbUTU2oAYuLe7yfFerjYj2RVXFBsDqseGspSLX5MtBFrQqMmKXWrMsaCmDDXFRo",
  "key16": "2wzZNmnnGye9w3qBh8kTe2womkyVg8ELkm3HT38ECEDXbca2HzyV5rYgXyacnENULt8yF3FQCGKV7rsVJSCQGF89",
  "key17": "4qNT6tJFvj8fBfk399t1rtG7L3y8XHUzDyomhjftspCE3bRDBH7fpV9Z1VTPCX83B56UGRi2M3v86PW7e6Cchv6m",
  "key18": "3AN3vbQvYxf932NsyjCrYu227BiFJpJHRRK38ckj6NkKzmLRpJ97khLFAp6RzHuM6EyZJxWeqEAKZ2nWZ3yHjEtg",
  "key19": "4YU1rSoxD9KFqSv3jygDVRwNzDiAU2HXWdmW3pmkpgvPqZtVAL3jSYJQqBHufYju1dxxhwTHMpeBbLqjpnJAMHax",
  "key20": "4uDY4jVPGJzoFc6dkwatguwjGCKJAxmYMdmhsEVHAda5ronKsTyPptzoRoZrKpv6gpaDXLkG2bwZw4FZEHKiXBsh",
  "key21": "2MwRKvfZveWq2xvxc8yCcWzZbU2YYm9JArTvx1XYoUSLPmmjwKgJnxeByG8ozmvD53SVQXdpr6jXb5v33NxCevXH",
  "key22": "4B1xXuGW3VLKrKJUwiUPYohtnumx3N9gPVQTBRdD6UjFcdoWuMaoidf7i321h5pU5W2HTtDzuPYdmoAgReuMiHgn",
  "key23": "WFn4jXomqPS11nsLcVYLF16wUoqLKPr2nSABuBaKirx8BrWcrZPszRN6Mjgim7HYpwSCx6gLcWSw4uAtV2KGf8U",
  "key24": "3y2uNLhVkb4NvReJ73y3uLzwHgfnYaNU5UcfnU3bdJw8pa4cb3UbcV8LjpVPUKvfYnx7dYPE2cNdmYp4AFesm4C6",
  "key25": "3V6xYbSMADW2XeNF2Dn5ws35pfB3DmvkF74Le7juKpbszwCRyPkvB8Jow6QdpVk9gXemzK7BPGnTpxAyefUvQ5AJ",
  "key26": "4ZEKokjb8a6NdBNhsVbJoe7Pts3DdYn1RVishAZrf78Twj36rqUqcBZaRykj47cK8p9AtCNLppoYpZHN4wCJKDGF",
  "key27": "zKqTL3ovJ1kMNeP8C931ym5hfwwcZXrJj3T3JgfePJHBSnFLTGJN8zpJbtgnxxaeXLhoskNByFbvHGvStwQrC42",
  "key28": "R5Kvz2Yc36RaozFB48uxyceKAdUU8FMLsiBZRSVXkeHQg5CZQ9ZTU8NFaWDTC5fgiS3QpyEAtf6U4SkTMH1w7Sn",
  "key29": "5pAXEueNBYdgchSJ8CdGAfGD1kFfT2qdofYvnicN8Ftkd1LSCSecCXcH1zsYSqKfV6RWwViUbnhoCVLWSK6rsJrt",
  "key30": "44xEo3AQwu2dWku766n2hVT3bJCYHL2rRS2P7UTBmaanAUoFV27xQ2BevgX9iWaiHec2tSGNPa1ogBiofgLK2EER",
  "key31": "324D2J66oiQYLft2yL3WtzpoVgawH2vR65gVhoBaqUVajpCfDui9238KGHEhqwdVXvHNg5Efwxd16qmLWq4xqzZK",
  "key32": "5GAfPCZf2VcLXk5Ptas9F2eXg6B1Sg3qZWLUNs59UehrRXWwgDHo31HpscpMa5CNJhCL6tUhRC2JAsTHpsDkRWz5",
  "key33": "5p4eSb3v1JvAMsD9VaGLu4Q4Qbm8JVnJXq27PmzSacEanbJxeXWGA7s3eVTDbt9VS8S2PfLgvcX3vMu9yodzH6XG",
  "key34": "5KUeiWsgR3JbejaG3g9Y5FKJ72JTSAkxt3fdAJHsp7aTnVhRNKDR5n9RfkqDbRvJL7WV1zf6928s2FxAghSPV6Uj",
  "key35": "5qg3q7t286SymfvcCde6xbJ4dJ3nCPukz1YQD1jJSD2ztsMpgd5yUWjCpfQ2FGxB4wnGQuw74NfQZDkokw9AxdN4",
  "key36": "5SJ9J4JAV4UcQH3BiNbdXC7gdEKXFybLNaN3YvWa34TjcFLUMYCy3vqeMMmdd5NebzJWHwmpxEYaRmxQc3tND8bS",
  "key37": "3dvMY6DwRvjSRkpD1WECE9QThvUZ3c1pLoVFSedhLibpLYxznB7Cy9gtsh4fMNv8UWiGhydWFZcjK2Y9SWBj3bH3",
  "key38": "4Ma2h6SVSgVmR62G5swd5a3rnRWyBjkqSqNAbQsEubXvBoq8WDpETwx9XxHVJwTeR85cq9ucSaMki3UkmcbnHU81",
  "key39": "BeN78JgN1eQixb8vHuCaW7F8Ybo73ZUrLKWT42t1zuqc3CGh5MpfJNJsHygkn716eUa1YEGRn4ed2dLomGABXj5",
  "key40": "2UQGxBo54v65XecXTdj5tmTxgYBNki6dt8wWjNGbDWFa7yDckhiDHcuhBWD2VC2fBhExJ3zipjuZRe86qJWvqRHz",
  "key41": "5Vt4TAC1aLVzRRCFYCqLbdRcLz61waFDLvByW4xXQmt7pqHXzFacHwP1ZrU76gEhjmYfE8y6TFQiCsjff67ccsAM",
  "key42": "3jrD1cuQNngDcMN8WtSJZFsC1FZZNTqFPDAUvgzQa8xZXvtHBVBvBb82KVYnSdiMbQrLoSsc9LMDkHx1pb1vm1EW"
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
