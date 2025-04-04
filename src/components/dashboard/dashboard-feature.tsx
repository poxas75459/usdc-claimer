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
    "4G9Q18AVoQZycRnFNseTtg645i6QuefJmd8i4PtLEAFM5XocZ65cC6BTGoQJFRGpp75ueXysWbBHsbQJTNocj8MD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ziz1YNkLfS18itNHahVTQby1a9oP2M6JMnYVjLrTctf9p1o4Z3BGXKTMDLiJ4o4yDuaMv56Jrh6mhBJdnjrfNHv",
  "key1": "TGJa4BpvdXJ1PVyYBKM2Y4i6xUbFXrz6tTHs611GxjHDrumg9eec3r4ZU74VchLF6D7y3SeThFpGsjr3RwWAGqP",
  "key2": "616ukfHAkYAGtEBza6v8NufQm2q22Aq3z6EtUtRrFydbBsd4EJSzjmZHp3KCysc2L4X1DtdnLb4pTnbDEm6mATjn",
  "key3": "2zwgarRQ7PMyxJYb7focAftjsGczBnELDwCL42Coax1Abrf7J2zyWunSbu8245X79dD3sbkKdfQrJSwY6wp4fTjH",
  "key4": "4DnfJDNaa1ogFBn4B6Y3GTVKtsEUgzEM2W8xiAhnTL9wh4vSbc6o9TqnXTcg2kUTSE5PfgcNaT3qdpX8CyuYgyXM",
  "key5": "4how39QroNbeuro1frFqrWLBpZCEy7v6SAsRSY2HQrWE9YrhLmDoHcgy1S7QhZ5xBeW1T49E4jf4SSWjaUVnyRfq",
  "key6": "438Gh2mq6Ky9WKTDjeATjyKWWHsjx6DmzCPVg5f3C1Fnv2cAbMjwxfXrkN7EdQQXk4paQxvLDHPu8mj9JW5RUfE1",
  "key7": "2CnA6eWZjTc5SSpeHKarpjoxzTUNjkB2nfVy2v1WFzsKYytCbQXdFG94L2CRNRAqofAsfNBRN5p43hy2tYZrsHFK",
  "key8": "RRYTmN4rKU8U8fxF6AMbTP7GNdW7a6zJuQkpCDMcx1WXBp3ZdfULvgjBCS159mJGar2S7vnoFyeLHPTmo6DSUYi",
  "key9": "2Va1bGL5L9cZS9uGR5cipdQC8UBEaz5ui6euZmkD4FrFsZVhtavigPpPow5bjHL3fzVtkH66MVz78ZPW7D583n1A",
  "key10": "4VFRCihk1EUd8RLbNjho2918F7A8WVHY1FVhNePqtRNk72kmTAP3gmT5soDsJPq345e92GRu9yBPuuYVqx5LzMvB",
  "key11": "5Z4zRJ4DUjDH38SHAcsLQcAeuDEmaWunvC6ajnw9sRCL5TmiszJQGpnKo75waFz4mXQVexGh96CyqmKrXcbHNzPc",
  "key12": "4ypqHKtfz8YNHwm2GUUUNTchZSyXRao5FVo9QMMDkVk4DCgF1Vjt4hSsuazPUQGpRFp1CarKCETdcW3URSCwDg8q",
  "key13": "2QwcVjEu9Bf5enHgggb8M3unrHC69eN1pPu7Z3xErKJzbe8Zr4ZVGvYJa5WKH9Up7vTNTSHD2unpaZqC7nFGPzAw",
  "key14": "2Bv96otUUDD4NLjS3mWE9H3q97C2tPGoqwLdASYqCNXYmMjehzU3tYhU8SLgpYPi5zy2nCpFSbXoBhrcRFqqVwKP",
  "key15": "2yHFohG1o23eN9yZLgtVVfPviY9fWm947c755VNRSDS9LGvmVFSYVgsCaYWESbFFe6tZegiqDwaLnjCTorekaDD3",
  "key16": "2wGy7M8J2BecmndwHGFdxkqa6NKBn445Gp2v3m49ZwLP3G3PjmTUkhEsrRqkzK8Nvn8zoRk5oXKuhY8ip4nhFvxx",
  "key17": "Chk9kcj2ejYomzvB1w3zv473cuMuagrkaU1wW8YeDka6rxyjiZRp3nK6EaVHbhuKsdYw6VKMH87iJ6scP3mnyy1",
  "key18": "RS9GDQpw54SakoeX5qBNPMoE7zvbUQNzfcRA2jbpWKatRisgQDYvCGx1gBzoQiPcZDyCUjFYLMbryRszoXH718p",
  "key19": "Zj9P8FPr7uQUgmmVjUnHXxAFCjvDS24Ks6J792Xeiwym9gupyHrq4pQvaVrTaBHgm2N11zn7R2XmH1kEgWzKCDg",
  "key20": "5GbFXSgLRhJYwUx84Ufma7pp37dqYuL7nzamT3kk2kac9BtfCUsLMJzrUcemHDXUUNqpw7Czo8XgcUsEYt7VgX9P",
  "key21": "3qpqhShNrF2d4D9xsff9TM8WLUjUJpRmVSBrXzgSGuuzs4cYNoWYMrjkVKSVCErdL6gaEpwTSdcpuUGrxBNimojP",
  "key22": "2WKaEwuU5LBpwPPm3zNTA8vDMFcHuAJZvjWvS5ZEe3TVMbsH2KwrF59fkTZt2Bj8rXj4Y3zNQcT6ZJRBP9XKtNR7",
  "key23": "2xhAgC4MNEkge1vKRxsHqUXn7Uw1U4wG4b4KhnkquEMVJdAaNK9UfSeYnRmzfrhkd6LUqinar1j6vsgUYgDpk1Te",
  "key24": "4QWH57EanQwAycJ1a4q6sv7ptKdJTL5WGukuyvgoE4BMRzpUofaPH1SqoVwzD112eMnVhudXfVMyXiPSFZembzxS",
  "key25": "3xrsyaMohw4p4EgcvUPXxCrpdsk8oyEzYFhbx6T3WNjH1cnBBek1nDp5fMAdg81j3KLhky6wUMKBu2pDvepmVW9N",
  "key26": "3q1ZV3Ux2VBdEpQpeqq3UtuttLBdRRu6otTyc2ksQBkwhY3rT3xsej6ScAortnVKkFS9aJ6Cya6kTxZJsU63vf7k",
  "key27": "2jdVk3CbciVc8vF9UL4pkRrkLJP6esYw195MzbKRGQpaptEGDsJR7uraQivts5QvgkzXJAuG6nADC8SHuRMswGYQ",
  "key28": "2m49ECYCcrqYf8EhVTqJ9TBhe7Jf7m3qKhMrnJE7zLGjW7TgcEePxDqgV1Up9ofzp73c3SmhsUiuyEjn4Qdygq1z",
  "key29": "VUJkspJu46fSKNW4jtkejzH9Y6HgiUE8dbTYVi6gMaeQu88hdn8hksbNFGZq7YXVMu4NawLkS1YrpQGAwoacS3L",
  "key30": "5ne6W5hjnMCGNUswmHp5Rr9L8Cu8oStcrrj8hPRjf2eywjAHCw1bPqKBx6BrQgig2U8P5Df8isMedagcJBYcm85J",
  "key31": "5M1MJiexoiYgK5yroxiWgy17cudeb9RNioHSxy1yQoGHhv3ipXA94VUG8HXDGvwDQNz6fNbJ72Fqwm6o23CmbdmA",
  "key32": "3qiucTWAJaM8Dukx84D84RDoySLdQETTUgKWgLspPvtNT1DARpTr8BsHvMPzpgm6WYV8UJQmHa5gSddzkfGPeiUW",
  "key33": "4E9aNzWnWbDrNCDT6zFWoBGauoMRNKsRHEWUZQ6VKWHSBEuho46Ni87pr1nDUx8RMju7JSyMYvzyJPz5Rf1HNzZZ",
  "key34": "64gxSfE1HUzBSVfrMH5FeH3T1LMuUt1GgrP9TPrDz3XjozUJTcYixkaG7mdmQ4RheFyEqkhMmSq9hjRFRiCMSiCs",
  "key35": "2BpW6YNM62oR4W3NgVvkxBoAyxq8EeqtvEEjywzu5CVq6e8snekggxAt7L76w7bnrSzFs5k2nwBvSL4VbGEsC6v",
  "key36": "5XEpKP1e5XMmPTjYMxKWiNGd9dr8cbqiGxKeKWvxVux8PmxWoLpW3DZFC8e3ewdTyoXZwmpbxoSVf1ukWxGA6RNZ",
  "key37": "5RfKoJDrUmtwASdSPE4bLp5WUb2rVrciy3uCBDYksC7spMvCH93KhNWVrd2r7V7UbPEugNgxq3LX3SVX3WRkFp9Q",
  "key38": "2NHcG591LWN4wpijFHUHqvcVr5rRML734yqQWrzQbkGtgViMUbMTnxcVtLvBfRB2YT7VmMbbPuS47ZtxipHjeV81",
  "key39": "4UBVKB9ZQBUcTCPgeQrTG12uXKYkqwmr2ps7oXJH1BfNYPp6JUTiwpoVsj5yhNdJAFUfcKTJdDq7aJKcdusAgdLj",
  "key40": "qcdHcdLAWXs4ArodJyY4rsPJzkPdiXs7xoFeMXFxphztua1gbCkw27tEbVUtxmJM3UpNwWH76B7yLUj4EuYt98a",
  "key41": "agaz6qvnShNnLmhorWKmNGNu15pykNeCfTK2hV2TTnk1XxC2RGUKXZMhwAAyrmhYWZFfiCqC9VxSKYzda7p8bWt",
  "key42": "4Hk4DAMsbJtad8aKokTAB6XFWLiemSoFA7VKDPK9PoSwUJXJWsTTS17vDEUATJB98Xj9cBEvCDAnidV2PET2wcXW"
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
