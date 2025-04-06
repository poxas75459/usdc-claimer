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
    "2wvqwTvec4v18BfJL5NSPABe1m2bU4vFx4gGew8wkwPhyzHjLgDmSgt3oapc7jFtFBdQBpaGD7dmfyNQcBBuoFXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATBNZ1Hr6MVqzH8sJ4Lc4a1HLfQFVgW9BPrmgko9Xzhdu8QGu2ptKunDBeVJ1w1o24jvdBb19AGsxibDSRtA1zR",
  "key1": "J4LNhzFhqRBj5JYmMX6f35rMBCKHfKUSjbGk9vz1ynMEANw9t4txrVGJGTDVoS2UKVC4u9awKZqEJDF9wAmhiUS",
  "key2": "5evVCC1bagwqEPg9Tsy7TxtacNjBgDSNQQwLDKF1UGETyuHiYtk2nYNtjym3V4MpvqqU5pPkWKG4ehRnNJUenKwg",
  "key3": "SACv59YEybNvRrvVhb7RLSiM61eUfeSXDmQC6BM9Brg3oMR6c6VKjtQSxjv7k7ZQugomMJg9q867VpPHiaVPTtm",
  "key4": "5ChZfYBW27t4yyuHmzJ48Rh96He3fB77sDhbJxpGHrNvbGiFzyYv9JVaUsp6gAqoMNMPHvpkM6fnPqdVGfvw2Wyt",
  "key5": "3ve5cB7aDnMqerUc7AiMWx9SBZ9oS16xU4M9staWtyf41MNpZWNuKxhoNhUpQs5g8NT8kcSibZR5WUHAv6AKUoBB",
  "key6": "54sMsKD4ucvDqmdKSoatqj7TAU9Sw8wtM4VyMSJgHcWQw1SWWvKT6ioVSV31teNVxzPUSpEebdSNabaEr6KDdjSg",
  "key7": "5MuXU1x5TDcXv6KcQ5dhn9hUDKHyMyRchQt1wmQ45ohFz6yCrE2VUjov5ntsAC7XFLxGikZfz3PVonhiA4kj3Li7",
  "key8": "4HGAuQJys2L8n5UgSgwzdJPUcX7bnhWf6R561rDcP5MfFKBzzGqyRekUW1V5EgiN4xMduz6ArhHoqDLwzu5V51se",
  "key9": "49dtDVS9U6y74rSvez6ExEqVvG1oF4EWbvmL8WUBvGtB6ChjGU4ojoNXA2H18qpL1zv7Cw6dGtWaS5kwF53kYgr8",
  "key10": "3jcuEZn8xJQPVribioRCvxsnaR84CPqkEFpXx9nKcqwZggCRNmMMWprsUGS9dwzHfPRE6u4y7EcVFsHKV3jfyoB3",
  "key11": "2fyG8UBc1UHVkWoDKpHAbcfcKCA29hCszbztrCBZUDN461W93HKaeAqGqrxNfFMftCUqtACBeth1KvBTFGEUSxi9",
  "key12": "rYMbZaMt8j2PHdqkfZncs98bFoPNUVE1MrCcquLLJnWARu1CqNo4Ws79jjMsRAMFayRayXZTfhYdW9TfjdHaGj9",
  "key13": "2dproUkKxTJ5UzydkcQMtuEQEMEdJ4AtQAQC2vmYUVRXnZyGZE6pAS5gNe7etHS4A5rQLMf1uvLMFa6zJH2c3wwh",
  "key14": "3NnKF256sGo7ebQWoDuB3A3AhDaFQgdXumGiGQLdriydTGssKSsHFyzhZ4w98K8iLkXdBTzQ2V9qNXYXJSUGJLsZ",
  "key15": "5P1sDDR3X3xQ2cGLv6vUNpS2MLCkYBDjRtiHJoskQjNR77ou1rG79T3V7KvDAsaEqUjgKKc1xJgUNkjSB1iDJk2w",
  "key16": "2XCkTLzrZfo2et5CVNwsGTcVPthG9RSj2QKGo1NfWxd9bVgs6hDfUvmzA66ZbWbKwDaDu7kT8Ujxe3XPLkeExtrN",
  "key17": "3TfDPvowaDZ9ViwSNKjC5aXfNgMgAQ43h4atk9xxzFyJcjayUKazgjsj8DXCVKEJnEj8TtbvzVHz7mAgGW86Hp1s",
  "key18": "4MoKTRkzqKuVR4pYyE4PAWx3G78GCT1sGP34bLmUWBSxcUt6V6H1GmivdmvBe4ihoZ3vfeLFzsKuZWt1vYEkMycN",
  "key19": "4hTVXjDRpDZeHiWmeho4wLhistCJsxfwBbywmr6YQ8CHHX48QVJ6byL85pKU14DHAMZcHSJALickc7XydfM25S78",
  "key20": "4BgBjWVNJxygitoh3XuBsJQnyPrsiBzg9QVEEFSKvMZyPPrmUYHKmugGAKXNAZ1PYmodrNmfMFTBWG34hbVFEApz",
  "key21": "5PftzbUGnNysbQXLw9R4BQA7LkqAqrWVGMoDfEQ1vW4UEoorBvidEd33KbsKVJwzECCSE9vzH728o3LFLmcSZWVW",
  "key22": "2ULtbh6i3aQ3ARfiL9oASYDBrmE5zTdt1n1TcaXK8gPjnfM96Myqy7qSiATvr1wDP9MQPtyi3sEaiMKXz8Kr5kts",
  "key23": "3dEczUZzZzWk3m7ToGFN9khGdMAfzfGj4jhWsHhAxLCj5E2xCUQ67uo6wt1Mh3jrjG2Pey5ECrWk14ZYityx9ZJg",
  "key24": "2DePcPEonooUdfbjsYdx675td5N3Dvmu7tHwHN1rJMVv4Aa4jPqMfLP3ZV3BgtQH9EQJKauG3hG31H6U8uHqpaHf",
  "key25": "5H9ZYYinrVRtVTkfQ1az3a91Q8kM6QuemeEYCLd7xsUiam8pFn5vgWGgUK9WmrwACaUeG18j51vffWS5Luwh5dDS",
  "key26": "4i1AjPX9rMpdF1iLLnfjuXBXjcNyLHiMASXB7cc7eT5eAZpy7phRUGgbKpy86DYE8LZikNeWJobdAXgk47R5zrbh",
  "key27": "vo4gaJZ1VytSCcJVYmb2TgxR6s3CnAAnDvrattocPWUQXM2ccAXUk91cGP9i1T9CdnayhwAdgUvGgSes2DJFMc6",
  "key28": "2TswZ8ag8iv1ncJ7EdPj38SkHpSMbgPmoJgHpjMD5vuh3XzfrP4sEXdNaGs9iKsSUi55d9D6iSbgZ4PiVRer6u6E",
  "key29": "4KM6z6bfDFn5dDX9uZFXtcWS1f7FfM9xHeZXJV9oJfiZnXQTnxy6i8w5BxwwKRTheQASw7oYaiTqeCWHgupW2ZVv",
  "key30": "3KbQLr9osSotpzUYgaR6mvUeMRuE69cZt9jY1UMDrNiMuhGugN7BLU3EMUjETA93T6ofM4ueioAJuvK8rkov51bo",
  "key31": "4ikE9pw8r8AuaBi1NhvVjZfxMusr3Uwm79tW3ZJyUVePipEMy7CUVUGKhzz8V8dzDaVysB7aLCwZubna3Z2oSUk8",
  "key32": "fD5CQubyqeDdBjkdzCYWEZttPXzqD77fxbdfpdpTMCrevQobSphbDs2EC9bMxV8JV17AyhJeeMbAeirhsn8rk7g",
  "key33": "4knvzdXNVYKo7253N7E1PiSiNVS7JtFFBa4b3PrGf33crJkGsY3VNC7RjpxGimUMy7mUdwMnzMbVZ7myfhEVEDXs"
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
