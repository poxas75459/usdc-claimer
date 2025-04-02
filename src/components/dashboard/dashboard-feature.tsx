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
    "2GyYxqQ1N7MKEiicMYSATtKL1h7y4yUfv5SyL56M2fNaDWpoVH4djcjb3nvo4QdJxPRa3GGyKgmrmnZYTjhAzbit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KQm5VNKVhdowo7DApLn2dLRFA1qGxMywWxn8NkjthWStkXR1Vn9GXYyad2gcfSPqKpzZSQjweSvoZZ4Dmsnedj2",
  "key1": "kiXJzVzNGwiMyLhUQW2WNi2LS3Dxs5biuxrmrNznyGUYVnyPBR4biNEX1TkiUyDdcva54ppMkHArgRWJXaAiG3r",
  "key2": "xbQfvCHq4Gk6JCjZVFny63TAn51ei6Ckp9Eb8CvcRSRwZRcJCRer3EQRTNEZGiWBrBLyAM3ssKDFi5HbHDd8i4y",
  "key3": "2RL8GDPpkHCM2iz4upmejrAXbnhSk3Kppb4LvL2iiveJG75H5PHybkLiw9kg9qBGjfcGjy9jmMfxzKmjM3qXuRs2",
  "key4": "RH4fpF5j4bB27g7UKTWMpdSXMzgCNa1YSDu7DSRXzg6gaLHbmN6wjmp4PivJ5L7ssE1futEhw63kR85vZokwDei",
  "key5": "15Yahavcy21RgaJnpWet29n8dkCLMcvZ2TdJHfewWteoSddHEho3E55mXDmjvkp3U8QdXXBKNTxspa9bcexrbLP",
  "key6": "2XumyP8AS49B6c1HTxVtR24Up3Em7GH76ccofx1JPFtCWxzMqKidXz75q8PdB4Gpif5SG28t19ARZwhqJfqM6dJm",
  "key7": "3zjrhSepCBBYMNc3oU6KfupFgPAQwVdnenz4nXUBNRik2oNsieoPgwYZDov2Twxpv58F51zVp7kWmB7SvXzMdAY4",
  "key8": "iyWToh7Q1ezkPKYCaifEaxCFfM45e5pesduZVurTkpWjqRBGd4s3v6qTZJJDuyDGwuTsYcu2hvbJCFUvWwWAuEp",
  "key9": "z5N6UpPLBgnhdJVm7YGHPQuoMumoumxDuZePRS1vT6dCLS7zxqGerXjhz4C8R8KeyHPpsxkS42EqL5XThJCKW17",
  "key10": "3rxJpmziJTScLnxehEo6iGUuZ9o5XqEUSsjr1gzYekRDT1UrkX4FP6viPXeggLrRdefLDxda6fCyLxhzEoULXmrJ",
  "key11": "5Z5WuHP7KwUDe5ixYsWFAWzR2AzaZ8Yi1g1r7bvkhg9Bb8WDC4k6HVo1baLXL5HPCdLqsmUPDNnPxSPCzo4CN8wN",
  "key12": "4QubCMiqGm2DfHPqf4RJpW9DFsC8vg7N67skrvH8RSeFiCThqovoio3Tc8SHzrevkMyNR7jiPspAccUZsYqLR3BC",
  "key13": "2qrCHnJQo1tXCs6p51pGPnPoF81bmZWZ7gKKNFyfzSBN92eYqxXUCbtHNjqJnzYa4dvHKiRKTfyszkmQTgDm85GR",
  "key14": "2FdMPPrLptQh9HYh1EbpuwfyUhXdPPWgwv9hMY46hJyep9p9zZh8b1h6vtY9EYoiP9VNf3D7FNH6R5NmJWYUe9p7",
  "key15": "3kjkE9RrzgHPDD4C3nmyisW1SU5TAAVAsPQNU32YXcmCT675UfG6sNgiEuSE3emaBH5brMWEPpwGYhd8FQBXhhxz",
  "key16": "FZMh7MkeR9jCzp5jfiJ6kYPPYXBWVzNV9YQD5KCDdmLDjdNDL988EtvsaTSZ59jAhNh5KTGPZTx8tKnzeFqZWM7",
  "key17": "VXx9QJPQmVTt2MN94t1zCzjtgbFUVahia8C1Beswfjy3M4NuFQPq4jBuWFzJDS7RxsmnJ67gtfA3KDxSNrrER8A",
  "key18": "5RkzhsV9ibFbJtvNrqDU8vbnNs2rEVNb1zpTgEj5xitUBo4ErDc8xhfN4iyTCATmTkztfJ6LFTt91LbcRYvjkwb",
  "key19": "4bU4jCFG52iUGP2CNRhG2XXK79i3dSdd7GGnfHLLDPvpB74CA2DmyKmt7SmssksQ1P9s1CPC4jqMUVsuEMbwhEH1",
  "key20": "5i9bNg7BufaV7XTFonCtChUQkyggcYDRk9J3AzwiKDVcBBURt6MstWMtBdLdhb1MwnHWQXMeKmBXy2P662XTP3i1",
  "key21": "5K7MZz8V3KMEJc4JrbvHy7GP3s6MqrnqcfsFyHJ1DUC6ra25vhcmAgAyVsZqZVQPZuQnyNmuhxmD986UK3nXXZtG",
  "key22": "2cyWPazA6dF3yuw4z7ohnVZVnW2FZax9Xh2RdhzfrXje6nczsega13wZ9uHrJnDXUkxttKZCMqKCUstg4GQtwH5Y",
  "key23": "3uH8b1Gr4yC5eioeW5BxQeQbe1QWcYVv9YvM36VRATAEcdnjvwTuaJYNqUJST5Vb9ZKzfdceFme8ehXdXqFMyckd",
  "key24": "5xKMyvjZ6ixrVzUDkTjquY8cxhnk2qVYNXtkzRyAzw3U7BP5JuMTybp6qf1D7qZyYo7AR8oRPPtFH5DLzpZ2iCNv",
  "key25": "4aKC7kst1ZCLiuUnGjJKDWunFwXfCdY6xN1khrefsBRRAXt3PZvqADsMziMubPoHdfq8VM5bxPKpPhCke575UusM",
  "key26": "opN7uqA65N7TwX6ZhRXn18TenQNC13RafRqEgkRb2q6ZsoXcR2f5t36TZoP7Hv7buKGmcadCpkTPCG8xCRiV9HN",
  "key27": "45uULaKBCovRcBasGcd8FGmiMeevdLWy4LTrJn6gCpe2jJcc3Mgw9wDp74fYinxwZj5Eb8RF67Xc5GAgFRxcqZFN",
  "key28": "4FHe98vR88F7zZiC7o93gvPiBfGWcbY28LwNCmaQZkSsTHKsb2iuL77tYGnaVkBMMWBBMti3xJr5MP5Z962qnn3y",
  "key29": "gMH684HERW45uj7VMLLMguiSkCkre3siJk9a7GMiSYbNwmYfbYfrTk748cXKPDAE3nBWk8e9Efna5oCGQmopTxX",
  "key30": "51cFyVqjA1iQUqbqsJJHcocHfLT6SQ8V6eVgs4LwJ4xWSScuVvLL7VUteKqNxj13DK3BpoXG63KBNK9nAZ2ZKG6m"
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
