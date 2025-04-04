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
    "4HWccMtFWHgQwMMcJJZ7XJYqR5RCdxLRKMvL4vPiQou5sNfvbAyD3pFpC95SzvgFD7UAQA4aa1K9j2RzQQVcbZS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xbBdeR8fFWTsrDhsqnGtXL9hMcAyVcdPhi74CtfH3vYu9ziZJtQvaVJAYthSF4x6NcWMUyn7NN7iHoPypCPmsX3",
  "key1": "5EYKZZ9FoyNT4YiCE8H1BcCm5e774hgkhs3LMDTv6SAnypV23sgSCdG53eU4si9nfeJufE6jSA5QetnLWCpJAaQw",
  "key2": "5DSk2YEVuoFxWxSEmAHgdL92i5EkYXQeNMKZaTCoJgsiw7QZnb9QqyotkoZhPTcyw7rGh2DfZZA5p8aP25XL8ZTb",
  "key3": "AmWh6xBcb4T2Tso3kAFFXB6j2oVGsHLfhNGUqoPEwNtcKXFipmuGcweFt9KYpLgaatrcJi1qHYaYb7SUGJcaBCP",
  "key4": "2MnqEnjAVVUTqoVgcLi39bjfrzeDRqBNdHrDSDRCpmFZjJu2miJNij91qMpQ2SxUJnn2A6EmE8TvaNjfueTyBdZu",
  "key5": "5YrXgsv7d3itKpDDajTdazZkn4Sf7c3SwRsrW39Zmc6XyPd7HGTupjR3mTjAKZ9Vjm4qWU8wHwxUYkCLXE1XuThG",
  "key6": "2cKQbXoEjacz9qHvhWnxaPPFn7EGW7xFz3uxVsjviXgDWucqTbXH9pxGGBjnpmLoZaBn83G9W3DveXN5BZNYgLQq",
  "key7": "3AyYHBssvd8MC7gVUtsBkvKeitqz9h7nJ2oSyMSpFNXVWoC9y6Pr4MFVks3RnT47QoQ9gFCqA1JV3Sr9QCjtzuDy",
  "key8": "5wEoFyCecurFcxgCGhJAKyWkVJNokV7ob33Xj9HsXLfE1k5JjQeHD9ScA7Wg2su1koXHjkHr5XSRDBubQQt2GB1t",
  "key9": "2TBL9VafNMMt3LJYpq48GvreXAEXzQ8PcRJCGtaiazyA9GBoVUivjk67xnQN2GJ8hHW1HmTkdhkKNxVzrDghfxmp",
  "key10": "2YVthzKdATtgH1H9AXDLNvtWPfL6xUNbLmnBVqRqwRZ93wVG7eQWK6wPneFhBg3gbRLhaqspgCL1P2ukKq6mgpsp",
  "key11": "zhuireraz1DRvZGXXbtK5h2wjXhWgFWWThmz3PDwgoFz2UTGGqk2ZeU2a7SrigtAFcbDRkp1PJLjTEKsMQGHgvq",
  "key12": "DJ3vxGGfMHZsuTz2p7UYv4n4M3fhzeNTkARRgjV4dH8gjT47Aw9pAMyARnPu8hp9YYPenmxdRz585GE13YC1rJD",
  "key13": "46jvDLEqXmLe1TD4QBH9SRTDc6cyUgPHcVaWWmRqNkUW7dZ53wHhZbmCFw1Lt5yT5bCPANhAZKqmTbeSWURbTcyv",
  "key14": "32gSpaxT9ZKp14CfNwpX1WprSrvJ95j9wcrnnhAEkfzQ9R6qgFFstEgn7BRsXUUGKn9Th8xQQ2NCLiEMUL2jdAet",
  "key15": "4qDpAEDrGWCjSGGQ3nUfHmx4478XuvoU92jisHZyXSnbUh2hTq5PJTFhCHumYheBnHtL4AfJwXwFKp3fV5B9s4dL",
  "key16": "4vdizLXLv51egkyLknMcL71361HcNZZQyRnh1T3bUG6gUEhtN5dhg4FCgeKHJffExyxb7xYm1oe39zdG3gwMcFNx",
  "key17": "5xA8BTdib6C3drHkKBr8nFAcAWapducpHEvSTi4YgcYVBJt7ydVgCBNrB5EuoUmxRD7RGjeJQZmpSp1JZqEvsYN4",
  "key18": "2dmYx5o77X55nA6HEwknHpZrLfSr5cBRHf42r3dxnDupZH7YRBAivT2vsdUaBaJJ9qPc8LMyXxtXzEfxwQE5swSE",
  "key19": "52ppJ7DnWWLUzGATVY7apgfSpQikADrB3vRzxogbQDGu6Y89ZZNe5go97vvjqNCfNtjiWmYTA1cehxF1PyZ5VVGA",
  "key20": "2eybtRa5XtM9oc7D12fNUpSRSs9uWT8Uzg3FKGq3GjSHqH5UyDHQYAwLKVWdLUbsCNdgvWwd3QCPc6GkM8GRZnYc",
  "key21": "5ta38QEuZYazvPJSLviMcqcJwxouNyXwC5XwuPqNYRSySENLVwmAk3EyPwHu1z9Hx3u1ciWoxmiaFfGLzBnmDEwa",
  "key22": "4wq1urg6GnrEJkUWNsk2c6utzpnbjCnP8f7f7kExhj8M9zTHZjTyNvCiD5d8SVWEQHRWQRQDR6iPFWXa1zsQD7yL",
  "key23": "2Xgqdv51KyRkiX814DfsJpWZX8KTqnqE9d2dpoNnSqu1Pzap5hxuNiWegTWViUL6TBm2DHUhf9Wohfm6TGaDejt6",
  "key24": "2xBJ2GXmKZ7reGiMM72MAug9v2DSMBNHMzDzZ3odip6AV7Xxt2ocSMf9k2cnRHTmRXZ6wFDGUXNANCZNRKS8CzLU",
  "key25": "3XUkzmY5toSjqFwewUQzWP9agVCwBj3ycjuFGyDBkFZ1wgxb4EYufzjThAWgWNrZ5Uz7BesvwmFsKmESCvVSi9QV",
  "key26": "21vWEArvMVRoFsQCeAsUgn5zhDkfvxenruD88avfm26Fb7u6P36kPtVXecSCn8y6GxvpcE8CzC3buGSwRBjLGTAM",
  "key27": "2PJtpaGx2r9Saa34ctcPzovzBk8vKR994WMkkbNLaxKziqBg4wKvZCs9vPUsKSQkhLNU4bRyiSL82yX7sytGFT7T",
  "key28": "fpqac2CZhKALNGZfY2yJAUQLHSvAqL3m8R7jkjThEa9pqacggaPTqkfpemjRARR2YzhEpaedkivsvM9okwm3Hdh",
  "key29": "5zYLFNoSgTWwkUy2Z7a5iiB4Yo2bGfLLfvYv92sny3fveByre7Swh3wAcvpfP8dzajw9GqZH7UBdDiMmbbqH5UBb"
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
