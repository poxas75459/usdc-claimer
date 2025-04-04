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
    "54qEVeGwhuLqnTN6SXVvxAVbxo193x8SJbp1Xqp7GNSdHBUoFPwVHB3e94Ho9eqiyURvNpcXt3QghVNTEbzMvVLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BsgCwVWTZdfyJUNLXnfwkPkTZSxiTJ5vjeidhYmpwZH9cg1kWVY132dT5u1TTJi69kpGGMBC2fHVA4aGHnE8N5t",
  "key1": "3bdUximRtiU3xyZDUSqWNvPukkLUg1HqsVSCTrZLmuyK4pJYVnEPBVXRk79dnnZ5ocMjSQwMK3W9SciUeQJS6efK",
  "key2": "4Dnj2x5jVPAV67n4sQEB98fpPzBNrxATxLDjfQm6satG3MgEGUja2jqWbyx1SFJ1XZcB91qwn2Gp3FuttcNF9tiJ",
  "key3": "39V2aFaQAXhUEEwSCeNV1933Zkaii1kbxMSZng3GWRqUdPxvh1rrbvHWMS7AHVfcHfoQyNyHUztQjMoSKMKDGWxE",
  "key4": "2jmuzqqCec59rQj5UG73D2gGh64ejfkAC7ZtuPXVfDQiHxbjyY7yuo1iHMM3sfU4ZaMhjxyE5o8T8hrvusDMAbTX",
  "key5": "4XS9qUo8BN9yAuz1Egk4WzgxV6UsCd62q5yoVUY56HZtjomwwMuwzxqVrSNTw2HGBTsg79QTGtfzB5PYMT9DM62t",
  "key6": "5LGLDE9texfbNiP5t8eWPmKeQhFVLe2jeE66EKDKJjcSGG2dZYM8HRawobkoNz6c1jkR5EcrMfRxyZWK5cQvDSgV",
  "key7": "4dQYdtdZiiJpg1Xz5ENgAY78Rs1eFnfk5FHwWq4gDtLAB42xx8fQvH3JSJJi9tfsvJAwg3uWww9RUja34nN2TDyn",
  "key8": "3sNs8BtFdKfBj1Xia3MSdTKx5145piNCvuJqiJcMWqoHPNkwsM9Ran9ten2sjt2QGWPSVmiusVWHZxGvzZ29YXqA",
  "key9": "5zFWJoLVh9sqiZ1Ti89v3UYRMWvVjRXxTf8vEMjLwsmRRyF86zpyuH8dA4kaDC2yaQpweDaCCxKq3CDzkvFnagcP",
  "key10": "63Nfe9LUbcD4hm2gAQfL2NUFFF4zVTWAByhadtyUvrEBuAaYa9kpjzKoPLK2m6hEBqdCd3scsHbUB2AoMRuyDYvi",
  "key11": "4N9ADYidiG13FDYQmFc5VSPHPdMbquTP3cNNRiiusH3fCShkMCp8ARbxhsy6ycvEFiFdFoK2rm5nxuMfqZ5wsrsk",
  "key12": "pQFYVWhK3vebHvXb8JMMUs862gsXwNDhCLGGf8vUqzMWyWEVDqLU9hHVqvYRh1NhdMvtD5YUGv6VPPiWnNj4ZX8",
  "key13": "4XDLkWJJAP4ffXsJDsVyeH997xfxKykqgyC9Nph254nB6sNbAJe1nA4xqDaFeLRf3LnLbHqoYGNFskYrk22YgcUb",
  "key14": "4ay8zSz958MS3A3y8ys6nTTYMoQrTQpQdQYtQqRCUToge7ngpgrmQXmBUG8FvmpxsAYRLzTYiq6AdpoB7EoW1EW3",
  "key15": "39fUBwX5AhQhXgrWJHPRT6HoihzNAeDyeK3G8uTgSDm1RzyeoKqbEWAUfLq9bF2gz6f7GRZbDchgupzSDsC9sCdy",
  "key16": "44mTpKnTqK27C5MdRaKVnEeTugGTmQ4LRWeJJtrV6x3g8C17kMT8oDVtQvi6poZWeFSm7UXECmM9qNE4sdkCt9BT",
  "key17": "4FmwyXWkd2Ec3AMspCM9Y76XCvmsn9x1hzVtMT4T1imG294qf5aycs5i1xUod5CiQhmPNfX7Y9XpiYNdsm7bqc4X",
  "key18": "5yFgkvxQXQBxa53NBgDG5SAkMYKEXaS1dw9q6otwvqXjLU3CaNtPJ1vf6gZdt3NMYXmPn5be7w25zxyjjQq6n9jg",
  "key19": "2NwSLMNFtxM4XP3DxbjNgQ8ZnFAN9n6Y7gPd3KCiYk64NmNaYr6myqitLHhrWNDfyX6gUeKdCdYJSj2sdVfcJSLM",
  "key20": "46dq9dNtboyotfRzqJFegohPx9QZheAqtZKRMgbJxrxWVM2LqnzUqbgQX1qvmbNeiZi4qx2A5UnaPscLrBnVn4xz",
  "key21": "3oLzaKCPXntpfpx92JdPDAe2mxbniGTBnZPFBNrpoHKLmrkmnW8euhV7aPVBzh4j8tV2xsQUee4ijcQrugeqZALW",
  "key22": "91kUSQ5yDaj9X18JXjYTbFAKYXLYnwjoshXJAnqPqeQAtJ6VDMNr7Je6ZTq99NAS5nSNnsxD9epSyJ1NdqgrKmp",
  "key23": "2JdqQXT13JkP6LPE4aLR3LkXjVnDiZ67MJVq8M9pcWXnM2PrAmfJHEyVpJPFibEPEFw5ENJ7Ct1zL5JEcfnqnDb4",
  "key24": "Gu8jUJ4hmRDzmYmbja2zPEVGmVfcyCs8BwRhzhBVKWSYz3gBZT4RAMyJdhbHSTAyh2qSqN95ArX427jnWcLoEtB",
  "key25": "C1AM3kggdbVfDHcsS9Unpv9MhyBEnm49Ax4hmi7NEBVQipitJFoox6qWj5qJ2ajkL2iMYZoVtVwqGvXsseG3mEg",
  "key26": "x8rW2QntVjQx1LLeyQJY1q7SoeB3u1ZUhgcT3W4mtC5KM1XPhmtVNBKsR5Cg8N16QkZLzr4KYQTGSiyrhtTSJTu",
  "key27": "4ff8zTpJyovyvGrMv4zN78BPaYJmu599utfr6JNQEaouNWaHmR3BrtHT9SpQcaEbAim6GMBwUtF5uhcMha59EPMt",
  "key28": "3Xnc7Par9NVrvt7yn4ouPC7rUetCsstvDhgbE4FnvcsbUSSZv6VJ5YGhcJMCUouTwRCXMcw8VivW4nBRWnRHmYS",
  "key29": "4T2opESLWvCQAU9bXHZorTmZ2KRTc7yHcMrRKTfKD2pkkdeLDCuceESTSx4xZCcR4SpXKCH6eV5sscvXR4h92cj"
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
