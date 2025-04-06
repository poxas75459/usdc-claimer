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
    "2Ms4PKVxavKTtptyQfWn64Bk9QevpRRz6vg2UwJQV31gdjWqZQGGiEZCnZMW7ZG9AThioE4L4bdc4c84uoWxVVBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2koDaKhZe3EhtmvxGMdTVYGa67f7QHR9yo6ozaBbBnuUYK3Qy8ZPYFXgSJmDoN5F73km9aJHT13pNWLrDvFoYDfM",
  "key1": "2CYHhcngnszRKFZjfUASVZuWuDa8bpntm4Q114Zvhgf7S9dmhH6MNuwtBFiLW8cnhbTem8YnJ1UwQSPgieaV2mB9",
  "key2": "4yRfxTAvqyaKyz1gvUmBXLpRq9fVrJBqtmyxfqHnH6QxoyZ2kZCcAfTezt4QSD58Dh8g7v5MAUo5cMepWpA2XoBu",
  "key3": "3CqnZb26L9xzfphwes866TfNe2M2AiSn6vLexGVQ1N33oNgErCDcfuBP7ABJ6DAooooxsLMaTsEHzaoNbhvSFyqo",
  "key4": "bDjrzyJ7u5Wmt4h6G5qPkFzGoHsWenULi8ru8hgMyWu3ZrT5R7zWJQP3oTVdc6KAB3Sb9Ti7g6WE4UzYcGVdbwA",
  "key5": "3cm1ddk8RybntmD4QNQPty4FkB9eBZaNoZZCRWNyTSTm8bmrATXVMGENzMECQaj3ERqCgVqGYSbT3YCc6JZpQTmE",
  "key6": "gkUdJ23WZFDvhG9rUcYxuHgAzfR3uKoZRswmafdr2d2hTyESb968WfKRSn73Pm92KV7mjLA9fUmF95k38BVDGt1",
  "key7": "4aiNCY99UBCsn9RZXLPnD7ZEi3ruSA3Nj9pvhRS9nawkV53Jgbygx2sUL4J1CzJ2YaD1sA4n6Qv55yqpu8ND3Xxf",
  "key8": "ecHTpciJTuhsabNegDDKSZLDFBNaWWwdwDUMfBHrfpkZMBvaxo1JGQMzSeQnVuGe2BopNebuVZ5of6puyLm5tth",
  "key9": "ybPnt5AHyDLHvSdZ1WmoaExiNuov6yho7zDe8xnLtsZednAt4JZgXh7p2SsgKzLBhm2E69Qxbbuiqq8cMa51Ufq",
  "key10": "UgHv56thK8EwWDWfRVST3JgwgUEEgV9i44D6SiUL5hCpsPb4SQ5JtK5Mme3qVLTY5Na5DmGtzeW1bLmFUqSJ9ib",
  "key11": "3GTeXezfa47HN7MbHkyF82tQ4gvduMp12omNqTVCFANQJ4kq2d6TpNHEne6dEbp8dmUy14MgAYijdWQHn2JKMbZt",
  "key12": "4r2R1GweLgXyrnTFJPfsiQ6AChsrUVk8Z1gcjp8PpcMvBhnd9hubwqifTqSDuSJzPWUKDBciVGjQf4WaUPYsBwcE",
  "key13": "zPUftxh38FRHpe9VDX9pKNBT4ALBEfVn8u5LVT2dSzcbvECyapUQirweMifTDJYHwP6QuMfwNsecykX3sWmt1av",
  "key14": "2GKHQeKwToYrJWjv9fZqMN5xqLGhkW9R9G9jxMxgzd5wrnFFSQAp66vucMRqnXL55MrnJKtoTXnj4gvst1JF9np9",
  "key15": "5UrsKay697Aj2THviKE7LpDp5XwEYh1XjZxFtKRHdCEFM9Bdaj7ivdtj9qPv8er5BxwvLj5YFX4BVrtKMvjvngLR",
  "key16": "3dhHJzRJBmSyDSjaz39pxwh6gN4sbi7Smbkk2YLPQ5EWgDDn3aLs3RtpPYpdSGNiw4KhJB9WC8Z9di49HzTpVqd5",
  "key17": "5N9EMup15gnDLTDvNgkgZf2gmcMsn88oVp6nQrEALsXsgRi3NfpRyUtPueNRWg5aeMiLHALRpecamkCZnPPxHXTJ",
  "key18": "3p8xwBhew4BX6DB1nXWFGEFJjDf5BAEGe9YG9fjoN3dKgzwZPRHbcF4UXGNq7PaoTak6apnboxbsnwC1nKPzVnCZ",
  "key19": "4QbSweTgScjEVqMttmxFJDxevpfUz13WURwDpgskzxiq29sSo4ffS8ietfXiB4457d1pByzzsgbuDnaHQwJhu7p4",
  "key20": "5dcaNicAbrTKcEvr6NL87fyZzw1QSdgLMjc1jHFMwaftrWqDWL5ajcy2VYztyPXYR8j3jyGVNq29UGT3GuSQZnQo",
  "key21": "31EdDcrsy84kaaubA2J3XFf67owZL4r1ctiquVfzffLnBzftTE1U6tnKb6M9kNUr6M81YZQBJBp5PMqetURhBMip",
  "key22": "4EuQpbosTEaKV5P5rrK95bGCKK2RmyA2FscUqT7o8v7hvqqACg7Ao3BbukyMB42mkXFFqdmhbrE42gd6MNeWBnCy",
  "key23": "5udxHvo63oGokxfHX6r698pnqcoixqFW8SYdkT8pRavDoYq8NL2e3fzLS2mbqiUFcHvBE561kPRNEk8KuvLN3fdk",
  "key24": "5jVLYwpbup8ozCv9b2D2KjCUTYkUcVNsYhEFEEwNuUKNxcisXTemYtS21CePbMtTQEJFAo4JgtMzLe5n1hBk94KZ",
  "key25": "2ctu3sWPD4gbbyHmet7MvxxqG4Um9eUreRNuPZ5RnpK9THfUTUJXk11sJWdXM1RBHksjdJnH2k6XkU1Hdb5RHNRQ",
  "key26": "5ysiKfkoBijgE5YK6ex98hfdc35KCSXgsTwzWsDnzCUjHAhFqTjuacbBkQjXv7V4H5U2oktYG7W1FdmXMMQ4kLU6",
  "key27": "25ew5uLW4sv3KUYD9hjBmLLK84v5EANKBnJ1ZpPEhWiqM2yF1TZeTvC8ybybGpHfkm5rTBnqb6FDXPNuvExH1keX",
  "key28": "2n4EkFUVgBihTkBQBprZGitVXQuVqsdJvSEu5KByC2ACsCD3Dx7XByedeXYNasq24uKB7DzKZMiPH8Bt9H9vyPxk",
  "key29": "573EeAfmQ7AWp1DPhUCpSJmkae7BygKLnxoG5RvnTdc3Lg96WTgQaDmNtTXVHxbN67w7sMNyvNtmscrtdAHj6Po4",
  "key30": "4taoUMFJ8KRmWuzjciKGAxEKV38gxZcLW8Rs1SPcCpmbGoFu2Rh8WEHVF4g4zCLhDqUisnfdDmKBVnRctU1ozqzm",
  "key31": "i6PtkAtAisaL5jR3NNtLaeUqyqDCxbWF22b6nmeC9rJVzdPt6owtRt9LU8FFpJcgKTySRDNtjGfQYMxZWX1cQJP",
  "key32": "2D9RR8yDc6AK2tDuvkbbkmCPdBhbwoG4oKtjqdm374WaQ2rjZsv5MpESuc5xxNtUBWeM7cKyN2WB5TewV9a8ts3j",
  "key33": "5KR17yoesPdTfDpw8J9jT5vU4863viEwqve9xS1LWTM3Ds4kDFZoneyux2quhyXRpVTJ4rAr4JTPxvT1CeChjibH",
  "key34": "45UdGq7yjgDWbEzKCwGzSJd3mK3qhwx42X1fGRpMNsXgXPxfYG8qQZVWjpPckeafSes9umtZe8kYRcUayiJqwgde",
  "key35": "4UDPNw9W9XV5xkAU4myKQdzhv6Veg3xyoF7s2S1NXbWrvLVFHi2LgTPDcqdknaSFJs1LoQptkAHueFudM97ZQczp",
  "key36": "4kBCPv1shqk3J6YxQRoGNPVhKxMcgtpKvKvYpBrMsZ49fphe6zdHvub2py4JC54FFKVbDkn37P2tpL4HoFK1yxgr",
  "key37": "Hme5uegxHpPLyaFKfVTEPhuVgbKzwzYrAN6Bc8g8pC3UrPKftinFrxKLbZTXTfHNEos7JYZHo56vdYJEKFFmPPi",
  "key38": "3xZdUXSVdkfKKZh2yYA58VLyYYNnp7GDHHXaJ44U3dJtgz4wXb9nZnPLEcU8iBzwMiSBsnJMfDkLTxh2FHXsvZMV",
  "key39": "UypvQKpa1CCK14k8KPBFEixhVuX8tPNTCdT3vvP3ntGJLpohKupLteXMtmqiMVGenwtEnKdKmw3Fm7RWLHoCwP7",
  "key40": "5i9N1zUfSsEXVyZA9u864N815CuUiMEQLqvTrS5eEydHzr3C5ChuFxLoEAAn7rnjRyrCVYEJstRf8GWWQW2dywzd",
  "key41": "3CEBUbdbLYZB89iquiHSjX24UZo3f46H4i7kDAhhmVJqfCGHsLMYjVowSV93Lpcn4wz2VMcXm8ZoTrcCHfN3qAcj",
  "key42": "2o7TTAhaFDhZySfJ7B2kepNswffQ9jQeX8jG3qN228siR8M7WgVZkPj479V9yZiSiggo7chrdE1TaiGpPKLErunV"
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
