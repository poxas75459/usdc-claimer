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
    "2PXqRpiMHDbV735oCpcA3tkmzwFg6LhGzsgzmqxu1qwSVhPTm1GtnRMaUWHnGvENqCBFdm88ZBiN9KfgoeCxSCnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R7TxqVem3AcJAkdD9cGJ2sdb2M2cgQF7eTFdWgppLTaqTdfBmGQcbyb37Jt7LXn2wRhwZAk99BAu5CBBxMGVhsN",
  "key1": "64yV3n29aRfKQTcDV65QchrNz9F7YJPfe1MGAxqzhX5g2utGYYCwfWAdTJ6hEmu2Rserfqt2jyusdZrTDMXc6iqM",
  "key2": "4FbhpicPQriw3p5Ew1gNahhMdM7GEbpiJKZpTzHGP7vYL6mZnTVH9cSSMmRbS42VBSSveELvLWxR9wKHMkxM8tJN",
  "key3": "28H7bdQ63qhKU748gC8Q2w1EZKVbbMCUn7CwKhaRJHyqhzR8urutYhHsw3mzAWDYVcCUG91aoP9gyuADPB4txzes",
  "key4": "4SstgUoveXcjs5Myt74NUmcNnt6k4VpntJByF8Tk3mHWjzqMVo8BS2Qe37YPY6XhGs625dV6LvsWCmHsY3hEqeyP",
  "key5": "4EC4thqYTwA6UP2oZG5NNRcBqk8RnNBjxbiE2pfU32KhnP5pRZHzMEi5v3bGWtoNSGbV9BQWt8rrkojdEghPtGd8",
  "key6": "2e67ai2ugAgvbp93Ayi3VEYyniBb9EYLio4Y4zNSx5eczXFpx9Drefv9guBkjk2A9TDqZpsEdU5esobNLDLuAawQ",
  "key7": "5FuyzWfp9F8fyxoC7NnwPUoxERxvxuQ6TVqq2tteEeKZGjddSsouUqQV76Tz78CSydqSJ7mqXUWUX4SGuGMRezvc",
  "key8": "2qyL4FCE3KmnKQKeV2YBT9R3kTuCvgjnxETRoRC9nWDG38UPvDcJqv3FQAe2Q3WxLTkGdVo5EPtgtWGoqQGEkd6T",
  "key9": "3WXyhAFCaiNU51RgzCmeg4tkEUGMaEWfQ1RKkHJDVmkoB63PuTJyWZQWVjpM2Qs8YswPSoEyB6b4nJZM23VLN846",
  "key10": "5usmQwUDd2HN4YWUTM3nk8D9f2PuMGJTiWucPFRx2R65BY5DoP9CRFrJ4uhonvWGEPzQLBxUkokfbck449giyCk",
  "key11": "2z1H3BP5PZrEHueZ1BqpQTKrsibaMAqrBLCaunnDVjMHqB2yh3b8eiNUCJV2CMSATiDVxDnsPWbbSPNwLi1gnT7B",
  "key12": "kKYaG7Wj5M8CWYMzk85bgq9R64bXDCF481C3ECW71detYNFBNMTMo3zTxExnxu6S1797qwfudb1zybE7mdKxd51",
  "key13": "3SQyPXRb49C7xNHqi326mjUNFQnZiLfc8RuN2WvstVRPWBT1whV77J1DFDzu9hdwUHHc8PYCcpXPYUf4ASxMyyjS",
  "key14": "r1ouwbzhKib1qzeq25BnVMfvpHzmZVsxBCc5dCrV79h7ovhbjkfrmH87FA13J4PbztZUfHXzjtfpB6k2qMYMnSg",
  "key15": "saavfyGQUM42guH6DbtsSKx66f725EZhCG4rge31Ss8Nq3Z8Hq7zhwPerDAfxaFi4RdHZDehYZM7opPiWSRG4LT",
  "key16": "2HBgefuruKUgmo1YDXj4f9tCmwhg7DSTNAihJ6nGJjH4xqM7LFPsxJjy5CUegCCsPH7AFvgFbLzsYnVjKjuwK3bC",
  "key17": "dSCWgFuyNDuiAxYwfH6ecCD68KMf4AoYnaTKGESsNEAqjFwzRxJLiJY8fPN13n4VC5Bx7ARhrSeSZGHzEhn13wP",
  "key18": "5dm7ELXpx5RGup2q1ZMPprAgprBsGyD2BGLiKQGG8YzaxtDjdC8TjdmJAdsxRn2yP3uicgPZ1nuFJUVRFQpoWUE5",
  "key19": "5SeiwsKXR32Dj2KdPyJAn919z9qjPadrSh98Q2Fc24e2pvDjxyytpL95KBXL2iTbHXVb8iuEHtkSzLgcE3B7Ld4i",
  "key20": "3xK3f2nFtiF6NRr76yfk7QK1jn7zLP5unKZyfBmCiYK2ngmeuWi61QZYaFaw8E3s9W51hAocPxhPDhna8H6sBGJ",
  "key21": "2RGL5MBqWpcwHYgqRAcb3KRwxNeJGMdX14kqstpgDWrxeGpjUiNbu2tnszGEhqbMdbTjKmbsiDXMLHjhVsYCjVg6",
  "key22": "2YCre9XzrXozg45wbgBT4dGGXkwVsuzLSgkNTNyFpvtnn54ZUyJwJwYLJn7LPViARimgXtmUbwVz7paG92WafaCJ",
  "key23": "MRSVFcpH1wFUf4zhj6W5tnXMA4xrF4PDRokQorQKVAn6kP9TYnhoJ6YGrjxgpoEFXqR1CysTkakrmRtrpuw8hkJ",
  "key24": "SnjzTGysFQN77GUkoU65TBwYH5mcgk1tMxtt2GSkmhyi6ymCPLFE5s1r2SpA3z8KkvFJi4VKjfkKxoAFbin73J4",
  "key25": "4eEWq9oJCfR9yM1oA5WwJfduy3cFDrKuKtsLFUmHe1CjkYf9j2UYsZpz3qNb8ymwuUL6EG18bqMzLbsw4Ss9pPof",
  "key26": "4ESHh2fgngcYUA8PLYWYARToA1weZkzrGRwh6invpQUEMSQaixNnjjhVDYoPFywmcrFmXpXBAZvV1rQ38ATzc8UU",
  "key27": "ho2kKAeii7jWZKTAKCm76sUP8wczf4RgNTLZhkUrUKiaz6TNDowVfoXBjRVZU6R3BL3LzXvZiKhjcGhC8C2YNDf",
  "key28": "4jqVoTtat23JdzkXeKNUgZ8DeELmn9aSVYQ57QPVzxPE25TLBxxBXGZPdjoxvteDJjWq34x68rgZ8qd45jEJBQGi",
  "key29": "2by6FAszk9GZE4S4VRLVMrAtNjH1xQ6jGiPgk1vdwyf1eHybpqdoLTdJviU53zvwBYssGB93ax8rWf3UVaqrqGgK",
  "key30": "4C5MMYEBLbxL6AjyKmdGAVPKb82EYP7CYCuMAkUwG38Agwq4zzT4y9P43ecfieavz7FBMS6Tsf8o113ScJsxVoxo"
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
