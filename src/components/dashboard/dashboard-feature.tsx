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
    "5yP1Chru35Xh5xMu7N33ufKGLDMoVr74fHLtDwR7n7iXiokphF8masnJZBZ9XxdV5zXQ2qYZcmJtQ3SyUqtSjB6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENaFNL2mKTvM2n2ruLXykn7zEXHe5tyNmsetdVqJtYA2e4G7BrhB587U1LNDuAr3R6P51UxgFnaiTBHxozUXfm1",
  "key1": "4dZDhH6qkk22A5kn6enw6sz6Eh7m1N8t7NbVdhA1aCpbVoAt9L7BfP4pNkx3xrFgTL9S5ZRsPzc8ftNFwEUUs5p9",
  "key2": "63NL6UxTm7Tbo7YkngfpU8toT3eor98AP9zRA4XSDQ7xVKor8b1tXXQkcGASvGeqXQhFuPToTUVSFntCsqLR5oRh",
  "key3": "4Szf3YqhCUkPzSvXn5c2AJv3Mo65Ho6ZvYpFnLeMZeHp55jgCmGTHh9zMmrqL4ZGVYc5F78x286L4wFfWoA1PCu7",
  "key4": "3cBU78giX94zydUMeNMjHiYWe48qDWCDwJC1dpc7FSpw5e853KS97CSVbPwB7S1HtfRm5ZD5F5hVuCYEcrH2YTmg",
  "key5": "H5YxN7xvHfuZeeZhshouuHEKU82zQUYoTNJ2VQ9P82B6moQmRgtXXV9Q5RfJK2Fk5xbL56TKVxMuy5HScRdiXtq",
  "key6": "333FAEhCru92m9eDZkiWjhyLGBAnxRYJYbm4v5KEsR4TddGfQPgg6QeQuHFY2ZkxHemin7t4dUSEeW4tggz1DL4v",
  "key7": "36fzX4KMxxzdT9a5k5QwxWnffSHv5xNt6jEQUj7SEQPUtcn5Wn1jywSwkfxdW3JnTpdvJPjV6aDTgSuyfAgjTPfZ",
  "key8": "21EjArxEV2fGRGppygRiHEJBfPFXME4eu6Pe5uwgGTmbiCoKNfEQymXH82UBzBaxXAHPU1upDWAbrgo8pQjPEkSL",
  "key9": "5u7Y2q3Maw45oHpACDN4XXsEzAKQ7TnmVRRwdRHtdc6QW2MNEaCitkR8n5uiQ4MAt5NtaKLLLVCYN1x2Ys2pjoS2",
  "key10": "49i54xLAoXcXWWzjg1VLM4AtMWsAjYeKyL9jJ5Tk8aLPi2DnuZ3n7xYvwkjgLUpGf7xR527FLBz12oQkVLUA93N5",
  "key11": "5GZPg66GjQNc5umNxnBPe3Bi45saViwmkQuLTNeJwBogTd1sBhiTkR2E7CnXeCQWNVzXsqrwCsFkNtBmMqESyMpD",
  "key12": "AGqkoGP8gb91K79bBED7xYrmAAw8u6Di3jiHSGrfxXdhfkzYRbhiKqMMhhxW1MZPabQSPuGnVVcu2dbxA4Lucta",
  "key13": "2DHmfjtaT7DUqjzBEHe8wwwLP8ihtw1Wt6hMbTZA2RdT8YV5woXTBEGAhrFkb7BwWuye9LaEL4bLsueevug6tiET",
  "key14": "2ysv28bXChYbgVChMsarpvQDoNDdiEFTaPSpFDQtqD3Br3tsua6xs5tFK3o8y9b79dSMEN7hcV7fndpxFKb7BD5N",
  "key15": "2tv9dk1inas8vFWft4Msj1i4AUorbTz8P1dpNFbGYZGXPb6n4E5Be9wvkfnZ92xeF3nmAXdBTuHuwz6bfgyawEWw",
  "key16": "4acQCKcztDzP8ZSGNfdw6Z9vKX76RZxVksxvLGHwg5ZdzKjG2cq5kKnkUWdCH6R8WjhQNkp1fN7z8GfDKCS4Fs9a",
  "key17": "64TJvrfXPoDSmN931F7d6dn9B7VShwYKB31iHaP4ZjvqybY3WRU1hDFHEkSyakb83nHbwtxgvYEzrnTZxddP7Hcy",
  "key18": "eyjxufQUKtQ7WuwXJyyxHYnWj4m76R8w4vLuYbq7Mz3bsAbuWXG7q1o1qhUTUSJua44QaFkW2k9qo6zzSc6iFoH",
  "key19": "5n9X4rPYdizCCKX8yXG58AtyyHM4R5CB2rptLCXgPf1mVyBANUQgCPsBPshrvfyJMEAFirE9heZiHMQJEBVxn6Tb",
  "key20": "2qXzwWxLudAiSPPZN2Dzw5wkoqewxNiiw2nwK8Btf7sqD4pcDfhjfm1U87ErvNhf9NugHHnx521ta4NsWHrvmat2",
  "key21": "cLKBHrFG3s2DGoKWPL2ksqMNyEzHS6kBRQZq7S6sFVVWfQ4pzcsyD3WAqka2ndyHBMXuqgCsMK3usz8AE5NNCG6",
  "key22": "3defk8jni1ZWdyuwXo4uo5tZFwYuZSc3oUKTAedzGgmVZz3jiKSgb5r1C4HbxeMqDuoEjGPttTLSqwTNVByk7ssa",
  "key23": "3Tiyv2Nt8G7jjvcgiXDqmMckxzDPzZs8LbkSHYPcR8isSi5ufQJoaxL4XnjgDKKCX32jW5aN4VSpQ2ksJCRQ2RhU",
  "key24": "44FFaUUaSreavidGzzzp38v5rSMCGJAZWzJ2u72DAiJoK3f1NnvpMXdqJTTw71jyCDJziEsdB8zFGg2kvtGyG3mu",
  "key25": "2AbMsRmWbrWZTNAb3kyasmbNa25cf55jJmk88rmuUed5E1e2frKTXhoCWKdmJype2H66nNYmiiXKNpPPhW2BSTF",
  "key26": "4kjxwXvp9scWiHq9gvCAuFvE7iT2xEP5FwRCWSbBBUhXPcMkHNqronLhiAc4BnjgyTkACM9x6PmRg8PqqrKehHMx",
  "key27": "5RhUQEAzCAGc8eZ43o7pqKqZ9SagobEbH969HJxj45SSbPiR8Bzs4DoELR3d5mMcq9U9huNkMfosSMbNntsfD1rP",
  "key28": "4uawk51K3cVJXhRxL1tc6rQfRZ2hcXb9i3Rkf89XaXpqAunWTsA187qsTzYtA5X5HHne4EANrPB3fmSFJrHbwLY",
  "key29": "5uJbEsqKx6VgbiDs19dqsyC6oPbbgMhz8n6joCt65t663KoXiAU8Cf2Qr79xXv9vNKXNmYYP8ztyHUxiWHsmHui8",
  "key30": "5bwqVPMZ94EMDtoFgBh5GNRgQjLey3z4Y627KdMPmksRttVhXEUPYW6ngFUxtixxXJnfhJXYZDAh3PmHvX7R3a9Y",
  "key31": "3sq7nKKfRE2gHWrHGas6edTVECqateinofMH986AtNkUmm7BwF2pAUJxWXxYu736DDikXWZrxwihRK2NTjGEJnPF",
  "key32": "owuEUxBvrHVJX98MNoukw9NkyBtEtwxntn89YBDocRoYnL9wyhb6tjKfXS9fohrVPFpXPYx1MLv2BZbxMx2sJm5",
  "key33": "4gd1Y9yUUU34B1ApNzPQ1nZEkNGKC1Emf1cNKyPePFL6LuTAQGvvNKa9N4kE5NW7qWcC115k6DHwfntRH9cLJnrV",
  "key34": "32D3GmgN7QBDs41HUSWM86uRKRHMHUjem6peQGjakJJLQEMkGcSDFVJ52CAmChUte98oDFJ4YXkDhtfZ9BtcK5iX",
  "key35": "5cpvEBPYm7SkRMg3yVV4kyWetoJmqspbJ8PLpmHzXEVsj2oQbVUJnm7mvJUv1eqmLwHMBLio6qRPRq3ihdS9rZv2",
  "key36": "5S1ugCEz3amh1jksrKMecYeXbbHq4zJtuhuM8eqTzCfM4wZabkYLuYe7XPdjMG2fKPVLnHoeiXG5EhAM2pua1rma",
  "key37": "2mkEruAFBJ4JV1C1WrfGKuznw8d2oEfUw4fypWAiA4CNyxqiVQkrw2WCGCqRwP9ky5vih8jWQMx9Vmj96XUYKjBy",
  "key38": "3raXbwRDSmx6LJgLQVBxVsbCP1eUwYX9hDDtykiLaDmZwSjpUfJXEFTshF4jVqQU94UjycJjmWXZq8PLU446gK2Z",
  "key39": "2Qwau9AuMEYDJie4LLxMriWu96tPSdsHKkqKocLccUsMifWL4QFbEBAuvWzGKBuFgg4QbBvgEiRrsmpHmdy6X3Zd",
  "key40": "4JEH8tf7i7B6SsNvaRehpcUyePRfqGzyRLHqvMjKEDfAzopVwK5FApXQq3xVSx24xMG5RftS6HbNpJXEpUr1aXS7",
  "key41": "34qvfjMzxpdM1qYzyFzKxP4gt5Qiq9tdXRT8oA6trSmMG1yhUV7ssdtZtdB3QzbErpEwAAuxy7oTwABfXF53JtyB",
  "key42": "4RedLGSSZS1q55YVKW9MwiyAEGFaq5iNick9qZkv1ypuvKendsvsxmZUXmeKXYPmhaqSMTYBDBF3TMtSDCNRMdrx",
  "key43": "2WUqrNcb8W9FdBSw7TdmZwutQwnuAL4ux2Nv5biyydbF4qPhyWmKF6x32RrQZCGTA9KJhE577X3UEaGytNvEPJg6"
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
