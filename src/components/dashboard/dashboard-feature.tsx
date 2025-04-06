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
    "5wuKXC6ewC6ZgF4HJHvHVThJLikwL53eE3SXrcLwihFAjQg1jXEycrFw1exrdYaF69rwSfThP7Njo9JZmE5Sz4yG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uoSYrJ71QXuBod9JqaLMnfYVXY2hTFY8vvxFixSkAtWs83CdxSwtdG1FKDs1Qpws6fdVzHyEapb2PAPZqzRNpU4",
  "key1": "57j8coCRUSfywn5DvZpFLA2NHyBXD9w1SaU6NCa2QY8eR51UWVuEaV3Hic2mEYUpdr2Rc4abELFaSJ7jamexYdJi",
  "key2": "2reWpJchReHsqx5Tifnoe5XJPbvphK3Fb6tXbmZx3E6tXFEMmjgyG9wdvQCe3dWVDzHMjBmMxKE2WFHwLbKtbNxD",
  "key3": "3M28Vkbk6W6FBS9L9yTQmfzDhWxYeU17mMJ3b4QLDCwLU1WN8uqi7jMHytkgCuBpiqB2BitqAkHVxPkzeAewuWGm",
  "key4": "5wh5u5eHLimkSeNGSkfmkzX8Zp5QipQUgkQ9yD4YMMjAHg2BTtuRCUuhtE5JFcFYmwkeFFwWWkVve8kB4TW2kxsr",
  "key5": "4NYGpuFE6jEpswSGorz8jZNGJ3fXBcCVCUE9tT16pp37rJ11itenY2QqTUbHpVyzpKijxXKYzVW5bD5heKSfak47",
  "key6": "4UgGK8S4Nrqsqfn7EjtJjEiNHBNmD6yP2i5rDq8esfbhrd8rGErK5D6y4VtBMGgqGFJomWijGdw2UiB4KPkfNRVg",
  "key7": "2CNfJAmb3fghrd8QezSkm2bd9XJRGcqaQVoFFPsUCo4vWPcK4JoxYbNRdRjnwJoPaYYxR5eTf9WSAyWBc8kj1WmH",
  "key8": "4zCoJLhMHRftdmBoPrp9UCgrXeaPZtiZ6QqusGusQ8NQzrpmCFoVCiwVwh8CjkWxki9e2Atac7D9GAd34j3kcqZ6",
  "key9": "ahgLAW2NnWjbnHKq4U2DTRU2cvkBq5Jnv3W4W6uhinMg654hrYYBGXETzYpDzADUYQf11sffpQdcxhMteGhVsTp",
  "key10": "2RXhmJpkvPRxja95fBNQkEQ66RtmanGQk8LdAdVWwEZsvRTmqbynYyCzCgM9C6UjnZ713PFGrFjZ7Qt8v6hpT76e",
  "key11": "5MkJSDP2HxmjER3r5FKwiEnN8sgrhaYzpG1prksgo1bXK1FkS9ndBcNkW7P7EZM5NLY8jzvYo9exjUPmmBfAnZM6",
  "key12": "3zx581SznvDXEUGesQsuQSchoAB1oW3ai324jAj96GeeyvmBdm4moqCjExKTVcHXnpBFK2Bf9rjsUoHRvffTGksh",
  "key13": "3kbds2aq3xT5GqvAKeFgT5xMUiDLBPL1zaMt9arqDf6ZWQK2fqh9reDsFEZNRZetagjteZ8FFbYyWpCf5Qi8eDRA",
  "key14": "1R8SvuJPaXkjto2dcMSu4c1AskpCn4pzarR7MySzCeWrRMcK4QPrztcy6RHaLxyeHRKDmWJNaDW5Z277YHiyvS7",
  "key15": "3Kx3BXk6GUkame5xnJmM1CjzXh7eDCdUiMmU6kLeV8fPeXgXQGGjf9EutGcjvUg5nxCtUebgpyBLrPnnTYgcz9Bu",
  "key16": "4MrYuJEsD68ictpgBrs6d9dVq9pdAtUBFkd2EfEN4AcF13Uy7NwLFv3gzgma7QvA9893YAAZAotQapbyLXDuQygZ",
  "key17": "61sCchUNngaW6zD9eWLihQmMJUYmJ25MiDGBZjAS4FdWronfqwPbbeV3MhPif3CU9uohSE33HZipGbRSGHfQxL3y",
  "key18": "4X1SRBbMNt2gVHQxQCSh42u7tqj6qhRbBNFLcTymQK824pn3eDcgTiKyWFuA8jdkdXi45DWDmVeMyzPFTyug2QK",
  "key19": "62evb73RsS55rth1RLq3N8HK15uiKSGWyJ68x2dWwuqhwGvxY6sAnxX5rxwSnd38VvkQPpXZCWwSAtbTMzTUGAUg",
  "key20": "4EKMaPzKniPYUERYc3NRcnnwKYvDZGP1TNkAQbo1ShERN7WdjoTL4SfConZXT6AjfA8qrMEykXoeeVKx8FGhC6pb",
  "key21": "3i2nV1jfQdcoFPhkKRxKPTYPJ8XaGkzMWk7VHX6CLqUirwSRyZUUcAWUTqeNpbUoNN86DvBn7WeDKopqosjHqGtP",
  "key22": "2GBtxT8aF917nfAaCf64Q6urrWb5QUoCAShvqhi85AKVv5BqhYDbkWk3aWaLaZybLyfhcEjQtFJXnbnxDyx8CGZe",
  "key23": "2p9BxEWWjGj8dNWNapYjN8pToYiCjzogH1cLbx2ZvhBQ3KuppcXyMwPXtmtkDC9xDzfpD92j5JN5SUB5Z9TWhCnq",
  "key24": "CJFjWF4nLGcvqt5Z7eEj7tAHkiJ45y7nqposRmhB3X5s6UshE9ipiDGLnRbXfvnq6TJn9cJ7gRWAxnRU44uB8Du",
  "key25": "4TwAHsa6cETeWotp9TBfmeZK2xQ7LWhNnCp3NNFnyU2BfuWS7LYMwEY8DNdYgS65aKETN1Cfi6c5n8GmvKjd8CGD",
  "key26": "2JTfds6vsNa9mAj41ZQpHXDEidftQab32mrdMQr8hDVdsVWzUqbuEBhP5Kfir2GzRhVKiL17ZM2dkJ2WypAtTbtZ",
  "key27": "5dAsM9P4XW2MFo5zo1WKTKcE9SModM8hEcTnKLhubqbCbwqdHrWWz47gKDYNB12dKc4ttgX8gYKXLi7GqLHYjYKp",
  "key28": "36N191EvTjwB3e8TysRyacB6N1eP1mxf8NnV5z5EG2RgKLakeBq99nZPZyY8Rxi4ZneX4dYUyTckhxL9z1wnLyak",
  "key29": "zEYohxU2piSkQQh4aG5rb9p6B4ZCSNZcaL7ovRjmpFUn7PyPWiSn2QF8GD981faVv6gWxUFqwiw6ZPXNBooSVo4",
  "key30": "5vNntmJrACRF5x44rGi5P1H31aXrwigF2XeQZXJ2A5EHSMY86CrwhsYWRqiMGKtqy9p6XbCTV4dRSSiSokWMzVZc",
  "key31": "3EeM7b1VkSSd9UY2uLehEuWwpLXH1yCPH6T7zfkuL8AEtPPehRKHMUG4LpDaFSRiKzt26yQfHq6XwTkxHGF4C1Jp",
  "key32": "2nwpmzRUu1NeVFJf9ZoCX4po94Vp1qidb4SxCmp6gykx3REziZ1FBjsxX7h6W4PahPrGzg5GpT7wKGgG53Sb7wcQ",
  "key33": "36sFHqG3B5m1Zkd4aCPUEXUic4gpH5wLxvvxnFXETtabfnu6EJvNx5Sey9xm8JCRsRrXtxhfFJVo56CMJd51nnnj",
  "key34": "4PMEWL4773PDqX7orQoeHfqiSbEDm1FFrQLBsrVUEz44u3fTkabKa5kecgAPgL6hKkuAgYohAuGrEuTaJCLHZ897",
  "key35": "3HX54hX2jemg37CUViDuK2nQbYM8hTfNPTADErCQmrtQyS6AQEbVxLHh9ViBZv2ZYj8r1M1yB81oPKVW3CyzThWX",
  "key36": "PrBwkpfxXm3X5xPofxGELk5EB5PPTabj1sKpEpECAWKJo8johdowTgzYDC6Qmy77ugwMem82YsdXCa1dyeHTp4L",
  "key37": "5F2vbreECbXwm4ihDBCi8w2CwQ1N9uvzyFeYpHBaZczzzS21D7nWfqLbc5YVHA7VSims3W92JyT9dDWtZgQLpTF7"
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
