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
    "VmkvjYf7mZuk6JGQ3wMFo7QgFjzL6fwC3ZfxBjBYymczJrdXGvbpw3JpsBRtaC3vUGj4Zg8wraddEJtnk3Nbw7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HaTCeMpWtHYaAzFLV6P1fTbdvaiZzBLJDd9i93vgYuXwHDPbbjgvX4MesmqHn6DGA96qjTAmhPF952dFw5y33Zs",
  "key1": "4WWpPUb3DJ4z2agoEi7333QcSGVMYG42EAtApnvxcRg8N6vHwz9YZuF6pwfyp6KuWo1V4teNYeTbgFbBNpMDDhMy",
  "key2": "581BKwhCHXtuNHwFdXZtrzVoERYJPLrMqnnEx2QzfcBdxmvaXZyf5z9zSiRZvgpCqLUEWnr1pJrsfYgx7zz1FZLq",
  "key3": "4jjXHVNkDnmKnQSBsyBEcZDLDqGxK3HATiXFykPD6pyeYijCiKTkoKZKEk1DtirZ4YSmAYU7ptmWz2ZoUGPyGiUy",
  "key4": "6568PaGGdUAgKHsGmqdouZLMNhq13eCnDtrqsrj8ALj5hjEv6dHQFSZSdBXXgnYusQ9DMUXuaLQ8og193m6t9s3g",
  "key5": "o6bsSJJGSua9tvjmSnuxHg43HPeF7AThf5H5mHKncbRdS9iQE5Ktr2AwjtA8bQEdAP9fXVge72UooK6KbU8R2tJ",
  "key6": "3XrUr1g7DkBRdMQ1GK5jHjNSQqCD4cVz1tqHRa7PzHci4mKioyWhYcEuf3quNSp8HWEWwacwCEDVa38Qz4eZ7Uiy",
  "key7": "5TeAzxYC5165mGMDTpHiTLbYDK5D2nxwmx4eJ9L2HvM8zZpCCeZYdKeTyxYf8x5ctCoj9mvBdbGit88YEmDsFur6",
  "key8": "2G9zxYbZrtMbzVANRpQnAnwcR8KixPFMaRbzhxwbhxUuUYrPqQDjGA95vKiqEuK3tuTVwjFtvDeRfjPBSkafQkF9",
  "key9": "4z9s7HqYuxwMJg7TdDtUDx5Kvi3sJeysxWB8PutXiqXjucKVMiT1oSdSAmi9RBt6dq3vCzBu2xUnhXcvqzirjStp",
  "key10": "S7eM6585wEbo5LtHfyta4Kk1utZjFAcu6RLvbsydWib4PajiN18CQsSsF7nhAcmMpSjpFwdxqkLra8kZsmQJQ1H",
  "key11": "4TBZczvCV84gsr3XA9TDBYx6PHCt5AumP5AyM3UbUU3CAgjWKzTsQc29K3wTKGouyWQzJ6bjG9XL8yXS182gNbuM",
  "key12": "eB1f7HbGKtiaWkYKZPnpYUoG2d6XVAQHU3YAAEAa2XFfk4RgVMoqV4bZi4hTd95Nge5WMzr1k32sozTMqC5jDPu",
  "key13": "4J2ftqUULjB9eM8iWLofJEH59tt1RouHzhfJLi4MAL1zET7cxBp9f6Db93Gm5HweAf9zAFwbXBJCRswv7GF1LEgc",
  "key14": "zif1MCURCzJyqtdH7qfGdvaetue7hQSByDhx4esiphow4WwxMM7kQpKdKuAhZgAcHiGUGkW8HjcJbCzmZKxpvSw",
  "key15": "sXwSmyKYwHb3iCRqLfV49zoXExeLpiQqFPnsVdgLZFrZUVeR6hEXsq5BHv8SPHKSa497Qj1rkwm26HNtQ9QDtqv",
  "key16": "3TuMebVk12puyCnhmusXC4LGTsqmRNptnL1Lh4n68VaSwVKiBBUuhnuvWXKgCThwknoVNSJnVyTxcxwAPQyBEpD1",
  "key17": "7wip7PL7pWdXcewsMb9ia7Gj9hJK1QHhVzVnLR6PHFqrULVmkN5ATh1Fbz69iJhnHmVcYsqRriu3f3rkLP85ecp",
  "key18": "3nf6jXghmPhdA46n46ZJWzFNfcNxQEJzcNKDsphTYD94JGCcebrzKYuv8FMyLiR51LFhi2fzPPSrAp6d96kmpacY",
  "key19": "5s1Fhvk1TM3NMX1qpaUqa7nKGZMKnbZMnAaRSJZM5bPBqZHqwfQi33oBFaLxA5H5y4szoWUu6QJDzAh5Hc4ZVKNv",
  "key20": "2QuSNNv4X9gGMmjgos31UcoV7LihVxjHMJiCy499EyXJza2qMiwxZmFXndLptivnFX4hdRUbQSjCdDzou8vU91Rb",
  "key21": "3UcWDndM4G1ZgEW3oP5p3zpo9WdvTjr1N7p7LLpZLCw1mUN1iv5TKELiYNyuewp6wfZ4Eowtc2rLEs1ZSokUzHYG",
  "key22": "3LhwLX8C7Ud2DnkbFdnrdr2dT9u5VDgtFBjtxU2uQaAsmwLrBhsiJfapgKuLrvzJ9PjmAM6qFFSHHMDjygd74dip",
  "key23": "5giGQSA2HuoYTyVW1Q5orH61WkRCcBUi2bUdo8TFsSMphmnwdJdZ8BPuFMpt5tU5qiugAP5VcfbhBdXMCerw9GZd",
  "key24": "2aoa8eEr9LuopHvndJ6nnM8HpnMWD5f1cVXTtPaM6mW95hcniKG22MvVdNHS58jC82gHbxPzAAP97uYxjsxxuXHD",
  "key25": "2HZx3fS5AqjoNnQEaKUZW8cnhLzVuaooDrMa9QgRa26SoLif9PPuVHWueAfiorw53E4PTkX4d3DAr2uDSGENsLsC",
  "key26": "2ntuq7EiHvLgADosuaDT6koTLwY6J4dpFyrhX3vzgPiBXgagtgpSxg8SgoWtDSPktFZ9Zc5CkpvQFnR9w3Wspg2B",
  "key27": "4KFhHcfkEMVYD3ro7DFACTyuTJYVKP28zhk2FT2DNW4X5AbpGh5Z6F4N2dE7a5BYsDGD5SLFUCHoJSkXBCgbfWPM",
  "key28": "LGB7QmeFRToTFBvpKCsedMGhcor8Wn6t7KcG5ZfYQ6874Jr9q69o2pDJb77R9hHQAJtHzjSTpbEBbkeVrQw8ahV",
  "key29": "ud33p76gHhnZrhusdta3GzzUoeP2aqN9Xr1xHM8sDt64TsoAZLQ3T1s5s8jpT1vYbm9kLomUbz3KWbjgFCYuceS",
  "key30": "5nsxqqTGncaGoj7rvaJwQYimB2591fS2q8at7rj1xZzCX3yLyyMEX7V6PMB7nsQ3DCZvuhLfKjJinpRaTZ7R7px8",
  "key31": "P8yMaZ6twfCKxxBWgVPzsYDeRewmCddHmWLM41K3KQZ1xvm8vPx1BxzzRptGi8bNFPcosbMWPaZkng136n7mZTT",
  "key32": "2qnDRn7ASz1QdKPiektjp3hWC7QZpshM7rfdsFZEFE5wtofwSy46dGBnQp2W3hqE6XtdsgMe1H9NBZmMUzzBAicu",
  "key33": "mg43LLwjrPA4qsPnynG2J61ZT76bZCZfyrctGaw6XPHvDrZQMKniqCeTvZw4BrUgh8V7iRDc3DXSgEbZ36grZCM",
  "key34": "3v1JAgocLHG6Bc4EXR3RY6cCTJ3175SBU7c3QNpCUbGYaCmHVZgte3sxLVTdfBEQpxFLjfV7RW4ZLKfpKjTPEC4a",
  "key35": "2xdeSY1LVpwJfzdZHWKcNb95jactywhTXvkjVnwVoxcFG8sEHFxofuGJrPZinyyXkqFYnVR3r2DHKyzkN29yafHV",
  "key36": "3tTHyqCs6sXDpgR26dPZ2SDFdB7W8Af3mbXigdC9cgMeA25qbVpvXRsSECZSppkKMzWn2e1ccDBsmZ5dav8Neo5V",
  "key37": "5ooMbkymJaZdDYN5MMXbWo3FUHMADEAPrAKnLBftPuAZZDMpkGbhVu9nxSWu26tgZixxJxD9PZsi3gi8BjFvcs13",
  "key38": "2ERj3VcFVqaM3QEiptRK377dshmzGAscVWSwC33ZNBCh68MpaiQhcTM65gDigqzWCZTYxDZjUbH9mb6rBnajm1ha",
  "key39": "NTXD9rNqFsyYmb7yo3qe15PMhg1H9w1vzwCsHJS61iSCWdyRBym9Uv5xYCbJNJBe3ZmxQmyJci2iT7QehV5LXVy",
  "key40": "6G3Hmsvq9XVTfc5rTzdMxVWsGjJNeYJnfySC4Ka5oppijsASCqC4DfEevJx6rmDWLL5spkUJR7NFYRJSReq76TH",
  "key41": "2wFTRLjQNgmZ1XbJoxopMX8tz4esv7e4pCrMJca1JkGSfzonSCWTDhiR2ZVMTFKnreRJjJCp34PeMrypFtVFkGkN",
  "key42": "2B6U8uoHZsQM8e1KbpsEi6J27aJzx5XgRg4cJVcUpbRiM2hDtWstd6fBjDKneBTdLB8GBNLySnybJ3qruLPe6vUB",
  "key43": "qFGuM5AGB2XiJ2UqVB2uxu9qLzdDsbmn7gQB7FR1rc8Jd48BHtBAsezPZPr1hVmVqQdjR3nwJnELmbYqjy9AvpQ",
  "key44": "kUH6LqRwSeNCQkZN1EjXbHx91ApsEWRfRH92cTVvYEf6j1m5X5eZQixRF23KVMcixXsLduZsJj5vLVrik5hBaLG",
  "key45": "2vNiKxAvxNr7uH5zdfMLDNLVoUNuwGqpVTrCWgt7xCmjHrGVMeedFyLpCrL5tmjrLypcEqhvZ4TpcPBsBbGkFxih",
  "key46": "2He7ncK9TRzhWncvL26Q61ymFp8gnB9b5FnfYrcKeSsSTXad5c4xnAbDkZeEmgKMtX2QAeugGSQSteQ8YYtLZeLb",
  "key47": "2DGJ13rU5bxdoNYsbdtMmSNzJ6qFjUQKDeP937bTgLhuuwBTNpQKJNq2FdsJgS49VKnAxUm1EwGVpBUf7bRNDC2T",
  "key48": "27H16W96KPYCQNj6TW8CQKvE1o84vW4ZMw4hWcGjxMMgzRvjGKiuanKHkF83Ex6ThP4QaecWGvhemoErneYg8aK3"
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
