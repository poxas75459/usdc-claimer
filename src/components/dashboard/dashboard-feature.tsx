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
    "waDBBoZuzqreuoUxSRdCHkv8Ld7gg3Xh9f5TZS9LYaSXdACNZpT5WV2QxWwbNzWtGzWyAiEXMgjER4x5WnEhCBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fa3TbNMT24wEoD8U1dPXCJ7fFVEu2CAHz3DtnWHaWnVh9h9DwozhSR1SzmLdreSFamtAD23DnqSs35cqf4g1h62",
  "key1": "3nUg34URQzgH2Ek3SV5jATKSzVuM28nCWK6mTCqyWH7Fef8JRkUoQYAvrvriz9M1aumv3B9z1EC16vpdK414xHSa",
  "key2": "4z2ZzL6CDRL9tJgRZu7eriSrhpf5m39wjHaGDE3DbaMq9sDnVrZr1PEp5Z9jbKMYCz3t1BfXtuCwoHBGjRH8CMWX",
  "key3": "4K45GWzvE112SHbfBiNVmyEPFCVKT3uqkVFHtR6VYAxDypLRi61iFEgtjbTGJ1FFQay13qMtuBba3d8NsvYWbnev",
  "key4": "cw2aoAf6PrKNkMpo26rvsP8a9qECVXpnPaswLXdzAbXPVPuprWnbSSAhDGXsVLnKjyhmuwSDAGi26am9pn2roqi",
  "key5": "4YzXHqpGcPzZCyLD1raWoH3CGZc3ssuecsp9ng6FTdpXcY1XiJxMbCYVXHZLtxNBmiaw2FXM3rDmDvgmSLfPAd7i",
  "key6": "2Yeoi1knfKDfAdxxYGxuH2y1afKdHF6jWib1nqgTMzganDbsu687B5dC3ZzjpkwAuz8v9VwbJjc9wWbdGBUEsMTp",
  "key7": "nnuH1FF24p1vt9CBhpVHYSqdmxvqpcgRrobSngWwXAhUzZNnkEwLBBe6Ppuhu16WpiaqcvGKkcSYX914Kw1NNcz",
  "key8": "vxPTzZg5zXhZjL5RX1tFX7SUp4gFJufCc9wwxw4ddhJBCrfuEZDVtnoT97ibMn5pozVLVvaxASbZRezCdQsDmn6",
  "key9": "28pTKgSp4WtcpPY3MLBB2GDMtkCLerBPVjHmFCdG5dRTYgXSCip5az8D3ft2vVg1RJkBoLa8fEZnzYFK4AH3HTmo",
  "key10": "2z3gJtTZcZMh1mVyym9A81YLch9MJxoMqCJ763TitFv7Qj56YFaeFEuA68rjSed2rwfRURXtZJFYMLLfJ15CCBZo",
  "key11": "4XufypwdKx94ia48YTqSbhVhRE3zv3meuDx1aUJuQGAtadjaDZatmFdCfbKSsHtoWrHaKBNGVbUdJUjsRRoJL4Fw",
  "key12": "5NF6WPfFPfa89b131ssJ1Liw6zN4kojm9V2unCuH4nEuhfJCht5Q1QhKpgNXkBXogn7cUCvdVHqf5A3UMjQ2TkQw",
  "key13": "25zJYsPB93rdCwAUt8k99kZF72RMnnard9kJX6yhugEUyx41rCkthKfqXTkyv67uRzHGAvRxp4PR1Gyn6g75DDZS",
  "key14": "63wXGXbTMnaetfi2Xu4kTbm3wdThS4Uxk5fctdFhaT86smksxyKLvF4hnXPLWWVCAtpEXaSYFoLtueZaw6TBZzGM",
  "key15": "5z1c4cGTnuwTsGWGyHBNPorL3aMW89R2ZwmXbFpuhqSG8QBVfEUtsaZPn9aK3fYhRsTeNdnwRY7oqL5bYVp7CDTa",
  "key16": "ETXFHb15VevqDnZ8HAJYGQmdp2vf37u7ABjqdfMREbUvxp5rs689StXGUpEoedSPUfzEDqGWUFvPJpWq31TBqWc",
  "key17": "8k88vPCWyXhk3TGUkTCzSGhGbao8de9orksBJpVwgNmGoBUiRedUasmo1LU5pbrStLu1AkxoZ2PFEwkey9TZRAN",
  "key18": "3goHEPb4MaHuarMGbpTHScfSA8JTTfCNPheEuUTbALkhm7Vt8jSVFDEJzmbCQUjxHEKi6rA84XX6MzZLuajMvUAD",
  "key19": "3mXQjQ42eH8fbRn2LZt8pgrGUiGhp3SDYidD4FFNMCSBZQY6hG2Fn3aJaY3DkRDQWadwkJv9AAuaWQA6At8LPY2J",
  "key20": "3qvvmizBc5KzMJQgqpSWFaTx9qMca4be98JpXbXeJekAaKPWzdMeMgUuJ2qk1WTKbKtewoe4mYeH8A1CVTYAZZX6",
  "key21": "3najC8nPe3QAAPJe1Y216uSXdck9k8EPvnb6V47f9ydrdQs26xtLex3ViBXtfxn7JCvSRJTJhPkGErgBdUPiLtQg",
  "key22": "4RGbqyvppgLpSdEWDshtG7HpGWKzysm6wDkfcK1A63TuqtugR477UVqwN4cpWwgqEeHjFLEeQ3h9sJAVFvj6SQQG",
  "key23": "4CUJkTe9oZHNEVvrgrfHqP2ES53bAKrcxGvdtTqGXkoynP4FJeeptdSP63Z43UXKA3JpAUkm8TakUcsGpdVYEqV1",
  "key24": "2V1fV4rpiywrQfc4H5P1MufapCY9gzdg1VukjrNz8qhQyrSuYxD8NDYbrD6hRXiCj3rZe8rwW7Dsg9RpM3avVknF",
  "key25": "4fTNQ54McM3n4UPcR8xzR1DjJt425vHVVnpwg7AXBaiiumfcUg6HNVQYNWJ9MuAzj55BqtNDuwxW38wt1ibrs3PJ",
  "key26": "4AqMUDWhXpwr1KndYzsm6fqGW8xETdkv6ELyQjUzbTgHn6KKCHqQLjc8FUEkcZtvdtB7GBeT5M3AQLR2CERnSTW7",
  "key27": "UyaDqzVzfhX5X4uu1SaQvbuW4rcqZ6UQBprhEmW3JVuHoiMuxyBQBo8HM7aBZMSvDp6XNgcmRUNyfbC6T1nRBiq",
  "key28": "4JJi7ZC76N2py9RpccjnMgeWPWqW8tJU41oKoatWaTXbq4UVrAGpXrfDi7ccotxr6wFk4kKQmZMdss8WQJLyE1cZ",
  "key29": "5oZ9KdU9Vks8AbrHFzPG68ZBDSDtZggnH41e3GZ4ui7DqWnQ5RHYRohyMXKu1aCrRXWsz583wtXGuaToBG6S78Hq",
  "key30": "3uz4cCcE1kFAumcPmuGLwsGnWRFUzxuUB8z7REdrqLwEKRh592XSVVrsj8c5VSESbtqnKhk4kqkADdRVLCNjrwPk",
  "key31": "4VvB1d4Byx7mUVTJdkrKwMBESB3qC9BV3dApxJ6haEcRNFjoE2cLfz3axp4N3nx22nBLiWk8QVJaoDysAqM1tNQJ",
  "key32": "3kD7R5BjcJSWrHk6P8ocK6uuxEm3MMAaoZHZeLP3Rnnnc5GuW2SDNTfwvFvnXforzFdteaTbFzg7HEVYRFFbGgem",
  "key33": "2HcTx48XUT9p8eNAoKmNe4cNVQ4CVd94Yvne8GNTHG6LreeWwiHEHfQGjWKBZNwTqf7BaSFSWX6rD8TEthjCHiok",
  "key34": "3XT3CbUMYBQ79XZTmQb9VUFJYrGGn4tjYVWjeYdaJRnV6BXeh3ftb3ePrLK2yiKMpsMaeqABs8GDt14NxAQNVj2E",
  "key35": "4RgW8cAec6J9gLn7CFaFqbb2C6PrsRS6yVTbto2gDgoe5fckK9J1juLmSW4Gwr84GJHXEgEiKWMoh8ptcJWeZhz2",
  "key36": "35CH1TjjyQA4fgK9korimd6C9nsS8KuTXiDTfnjR752ncWbUQP7RUNmobg3myueTtG641MtiF5iQWUQ8PK3TKNdY",
  "key37": "257gAKtTQW8AUWWoBtK1MijmC1HARnzMgXrMjCCGMeQDcJg8XufgrBAdDDA9k1MEfZwJykgiwMFuW3KeNANqcU1u"
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
