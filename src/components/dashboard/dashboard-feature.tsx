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
    "id3N8wDRr2ca1UKV3YpQULjGsGgnhZ6htVAmEjSPtBto7ZtajSk1XGVAQDMTrhUDvTSBaEivuH57z3HBamKyXxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNDx9YRNLtg1BphkVaVi8qqeDgkNgdiVKkVAZ35t7HxdjjhgmtiNfvFMNyxbDE7G2jUQ611Snbis31rySabmAiF",
  "key1": "4s1d5drJzWUA7hCsStheYhozygiZNp5uyXapLzwqos2kYuQdmrfSpp7kao5KybNCBZniAZDGLkvrDpTRp4JjVWET",
  "key2": "4ZRsaJpFDKcKawUBicAe7ivfw7GUqVFMthGpHBnrHcodkzcvQisx3SzgzrirFYo9fsCaKQQa7Z7gxVtsdGPAJiy4",
  "key3": "5rhmvrYcZp3B7cdtqos1kuBjvaeoZdgWj5tLcsUzJzg8nFeDbaPt1zW4bTcyyv6n8jvEahj3RJmCj75E2ScKrZfG",
  "key4": "obSaNPXqDA1Esp5pStamJHK9t8doZrk88BQnWiQazL5GHd3fLPjN3NTzBUUu6gYQAAbFBUw41PAjk75bSmdoVf9",
  "key5": "3Pmew9PsbfU3Bg61drc9hqcApjyuhGUbRxRLPTxFgXMJGmEhCAsTTLytTHfRM3VworDAPsPvUxVEvfuxFJNnU4zX",
  "key6": "2Gp7auZYJCS57y722D36NNwJJhVZoo4f9hbX3mgQSgsAoejz5jTJvD9FYvc4sfbmqUeyzD5LzcuTAbMW4t9379k6",
  "key7": "WKHSzsuWBBMSAj8jyCKoZoePd3ho8xi34PojZM3VhU9LbNg2jyrNfFcTzH99jGmPDhwQY4hq15RDNWxZJaLWj6a",
  "key8": "3Vf7NL2m7KiwANqxJUjRCoirABxfsR6FDcZK5gruxZ8RQtLrc4XhemAhp669LNRKhmjT3ErmnFRBXfaJ6yGRUuGL",
  "key9": "sjPCEEKfQhh2MTe3ejKdK5VCNjcJfgd3FQgTQxvrg2ZEGt53qDMmiUNRqLsS8oPGznFJM7qxmKUW8iGLjdw3rRY",
  "key10": "EpHXydtaaV8uRB7ZLdvtMJZq2sL4YNKZJBTFKCxwQMkonCYHbYVXdR49vbSVW512KZFabh265suir8DyXKk2W4D",
  "key11": "5FPX84TSkfwgu6PWjTWeTynmnAKHU6Y7m3NuQo1ouaEPanFkrqWV4Kg52cnymc9GXphoFukp4uzVmXJz26MSvUAw",
  "key12": "5DeybVEYXAvETqxAfroEC97j3tqYvgVJ7kggu7LEF3LC7fmY5EFfB2DBpeW1nz3aoCqiudhhGSMNVy87QhRWeAYP",
  "key13": "3afkhNLx7SUdkPqNszUk2qCn9DYUFagN6wLDASp9z7L4gTQMpkSid6Nfy5149YMWu6cwJwhconzaRyRHWrurUFGr",
  "key14": "hYNZrPPngyr6yGQPCwKTXTCZkS3ER7GZoUNxkrBbu9icHXShUYVF4JjW1SeWKHM52ptgeohSx2QNLhZ1jx2jg9P",
  "key15": "537MKgzetmXWX8ZNXFwabH3npezwWRrsSQ52QfQ476UMrUP8e5f638y7R4cKsLsRLYtpHsmRGo9auJnLR6qziFfC",
  "key16": "kGzHhJaw5DWyDt8srTZe29Vmr7NXNZhjFhnzwYwiMnzKMxC9tcb8Mmjx6NrW6ACM6mTXs2Jq1dPfYnLEx2JYcpe",
  "key17": "52zzP1oZkDxKthRSVQJinkQ8xDyfyVuWnAxssajiUeyed3vwc3ReavNTmg9Cntt1xfLYy76HGonAyFhiD2gpBdN7",
  "key18": "jHsxhnTDt12nJ7dB65GFaagQ5yX8GoEmamP1QaHYztT8tNnvRfg1kkMu5tVKsAR3wQVtCb9NmVkckmczymsXSDN",
  "key19": "5AFyBQVYeUD6EGrnxGDLqs5nYXBszC156TN5MpN1Z7RZnNykaajv4pVpTH7PH9UWTmPAU4NKVxt5pg1Ydk4zG5FM",
  "key20": "5cLRX1WWhTJyPMkimbEJnVpKfzJfreNEnD4Rg6NFHaysKmZqEGXJRWuV5iqNM3FMXhruwSv6614ztBfYyAWf1ZuF",
  "key21": "4QnPbBoCFE5nDF8MMKjf47RzX96uAu2uYDKpPVcEknkHs3LJNLVBc24KaBZjRLna2oNqzg6wekao1vouoeAqSV2p",
  "key22": "3rxseNeZGpDAgRKWTXH2RypAbHtgS6AUH7xeLrikkP7TiQ8fAuFQmeK3x6Zsowb25SmR8QpwD8B4icxqv9eCzicD",
  "key23": "4GXtRJD6HyHU5aCurr4RLqkULnKkDqeqcbuk3L63eBE6YaVA2jJxFkkYXNbhpgbXF3cVomesa4Zg8Fp1xMec9j8h",
  "key24": "vnPqhSGiEyYqiX3x8Zbn8vd7Y8VPzydsDsBDHdQpNkn6NWc2nWdCNc47QdWVqDkxwQ7hVs4x2GB5fuPGMmh4qy9",
  "key25": "2jy5tEaLDwHsarHk1e2t8B87UsYpHu8EoobihcMdCwFCTHPBSmoSTkggxU7gwaGtYRdj7sg2rQ1UUu567TbQ9kcG",
  "key26": "4JJi8G8TgcsmDdpfTm6ryMxLDbXhwCPyVH76yybVPfVEacNY7tMF9yd3ddfsUxWcuAVtHS4bdMV4MMKEZCknAKwr"
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
