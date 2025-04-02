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
    "5JPffrtLC8VbpsZujHJ2yzf1tWxUXdzbFuWazd9q2U5hFEdL3X8FV7i4J5mbBaF56BACMm3H2W2vSXCsPoExzGeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHxFGcJX1PVQNbRYQa9Gh22HdW8PmbcRcdd8bMiBS59dG967rA6JibS52QeaQXRNEqDY6RtMw2xKMM8UR5Zneij",
  "key1": "2CQASU9RMKwL7gLE85iuBgZ91GJNjtDD2VonwZHkYnw4RhrhtFKHr5rJ4syFFa3zpwLeezUrPDFMs4L9Qohcwixn",
  "key2": "4kNbEpZvQjebKnDzENbfpVuC4JDoDJZZT9D3aA4UvFmUUrFpG7gTpP2wdC3FZVA34WtFyquSacdLUCSqVdiyCxMb",
  "key3": "2TVJEwNVBz5UUzN4oEpmLxbbvR3ArK3hSQniJGyaaxgNDKkspp8Pe2SnebqmBhjsv9aaARhZ7DU6cdezv1ZCJcJx",
  "key4": "2VbtHLiNe7w648Lf829T9pK3ynMjRVaXrawqyPLR7q79tc6mCJjWELtFFbX3KXdRgMm4k9UC2NnfMDZtzbpkWiy3",
  "key5": "4R8Pa4mVqFA5bYWZ5YDano7mBh1ri3JDY3GPRvmD4aHNgz5NgsRBymuWLHSnhZuhMB1tjgyWuaBWsaMJjE2gYxag",
  "key6": "5j1CJhcMEEv4UisBy9k6xAPhLBeB8NqMSxeHURjKxj1hCWAVgM2qyHw48TpSm9XHHtjUW4ucnbB2efwTKLR4GuQE",
  "key7": "4TyX9Hq9rMEcv4UNeU43sK37bqY92Z74GPyDXX5QKQ4dFYbzd6nQ7zCLi1QQzcuJxVCEKnxFa2BT6Jp7BPJPD5Ys",
  "key8": "4RwRJggczJj8B6QeP7wkCTpBuxNXc3Tu4XcoGBiQfxPXL6SoqKYMen3WTWvNQBJ9gG5iy5ocm688723VFrWyqqBZ",
  "key9": "65zLQdBmAYFYLwBdRyDibohPqtRsMDLSKU1aZGTYPNT4TooPVgUmRf2CN8XUrds8bSz7Fim5eurWgcZf1LG2wvjC",
  "key10": "FtvfNfe3RPu1Te6N8v5j1TvsJe24ptaku1iimYVvLtqG1e2Y5DBBM7A8dqUxwTRMHqe5u1AgXUeMLVPPjhbDYXy",
  "key11": "4kkRDh74xrdGkd525Hk3jg7FYRpRhRjTv8uXguiYwkRvUpwogFgh3FmZr9p28KyWubUMnUMaoiHT7CkruSXRyEof",
  "key12": "gcYMTgm5DRXpvrWtVYWWwbKJmGGVdT4yqQe23hrLxapX6Sb3L85yo11YgzkKsCAiiVWs5pnAMFSb2GmcYmofiVa",
  "key13": "5k9jtWd1Tu8SNeojH28WCLVWNhFTJtijQf2A9Yg55tsB9jhNJPJTNDaxHFzZSUYYuFMRAMxNRzWzYmJcJ449div7",
  "key14": "24YKyCXHr519GoWg3gYzSZYpGjGenGXrwxcH54FWxwK7Gh9YPmqtVubxw3YehXLgjkmQdKmz94Q8xJRxzx99Jmdo",
  "key15": "3hbRPAtsvGqFW5X4XETYY9QdULGvc5tFLro2dKCdzeWbXPsPeBFCm4N57J9fUomwexZaz9YnWYdPCTbtJL2nQJgD",
  "key16": "5VAWfo22USrT7ygx1SA4mLDuwo6CC2GEgYVr6xEbFJEimWLr9UCvdT5LuGNpWtfDZymSzRrA1mCdkjyGzMserZr5",
  "key17": "5RyYyjyMKugDsRpwiVCvn2VpBWMcZTqVoE5zs6NPzvJaVL4qefxsgVVkdX3wE1ffk1c1aYmJyiSYPVqkHZARsgfz",
  "key18": "eMXrbzN6Wimk9nGkARXyjRe5cYdWaLFLJLKGAuknteRPa5eqtwUaZSGR2QHQH7SVNZEoSokR3TCAXunuzwYaSvm",
  "key19": "2v5WAsobaLawRQ42Wit41ATGSvMABz2yX52DivAxBCHZFx54HcSgZJVFdra4eKeogrH52EZwXKdueWferUPtHBiN",
  "key20": "3hLJMytQzjHQzF6V697WHREUFMMkcnds5kKSPEs1RMkTCoHmERK8WwqCJSPdSEECqGZ7pUKAESQJbMU3DQpicSBM",
  "key21": "4iJfKz6KyPCT9bB3ewHAJBTVoKf62Jmc3wJWGeFU5j1tR4r487Xdf4AXJsNyoUyvye5SEvAjrBPpgCgeGL3nipvP",
  "key22": "67iVBsd7ptCz9TMzhSh9V3LesDXCjzZbacGj51ks3hxaJVvPdBDNqVz3gtCJgNWDUQ2ZuLn7p8MrnUDfiy8ieUTq",
  "key23": "3HHhkJPydmAMhkJZZM1xqaZND5HZtGFEHhbcsfEvV9DcCps2gbV2vGUhiT5dPjgV5AzFMktHPXX457QSCQGJi1e3",
  "key24": "2rRqRT1SFSUrpxvSTBnxi3ajpaBaUcCErystkjPkyB2BUNuCXEaLJ6X3Yx3ZT947S4wQRJEuUapLsjMifc2BYkQt",
  "key25": "3nci5WXJtxBA8EbsJDuPauiP5DeWTKNxoAwKLUKUq9GtsKcFWMnq78U8r2sAeaSqt2h978t9WoJbPLLti4wtehvK",
  "key26": "8Qp3xnGPMyxX8MVKaeGAHXM57fZhUJyH6vDB6n7L6JXXyTUBZmDzPp4KAiskiRuee3DmngLJiLoUhorgxhgESzp",
  "key27": "2q8jAH7jQf65kkfjuF56LHxLd3uggoa28wjF6Q4naNca3eXsCXfnQJctkNYJCyq7Z4Wc7Nd8z9t8RcUfrhiNXPGm",
  "key28": "2UPsS7GRkZTp598L3a2n33qu2YqtBuVkS6EHge5EPbLzc3hmHhTSBwGw4Uc7nLVhJfhndybqfPmz6bhhJfaFya7q",
  "key29": "4QfG8yN69iE363YxUcuf3GrnoFxcs5gE9JTj7ECeG1Q78cnMNYXfCzFLCHRZbLNASJqgAEKYBxCPYTy3xtztQfXQ",
  "key30": "5hZqw4MP9BFQa7PcX8yJ2f8iPbJtt472m7Wb3jJeaz8mR74p6iFfJa7QnfysY6Zawk2eJ6EbzhuY5GBLXTCFdb6V",
  "key31": "5L6JVdCxojKXc48AGNKVsHCRTmuyZNKqjRjUXYmjQWsujqaZ88LZvVdhd91hM5PwUNSKUN2C1reZB17ZZdEHkrbe",
  "key32": "3oWzS7QWDUp7Jy2PcHcCtZz6T6ojyny4oQkFS5gMrh2VJ6Sg3SkdUMNuqUYrstzJmYXEUC8iPF5o9z7ojhBJqawQ",
  "key33": "MCxqavdPfCZQmMFp7eT8xVmgoRnzjp15Fv3RKzYghWP1q3pbkKMMSp7wp5QeB6qNhLFPq8VMPhgzvdoBKyjBo46",
  "key34": "2tooCBDvnnmfTscY1kGTQP5gcuHYrF33M2y1qGh6TGcRMSMA8JadJAncZJpVNp1BMkrbu4PQS9psVa7EJG8D64k7",
  "key35": "4dGXXf1La2onXSaUBSEUm7ggZti2fonzBFxw79iaC1mf4LSYncrJnBTeeUffokPUZWjCXEUt8oUveUgpaCeQRtFR",
  "key36": "odsxGEiTw2TvcpYi4XSbxtzTaizHxJJsrpapPVaeFXr4SWTY3vs8oomLbKzosRYxoUg5jaiHFSB4FcaxrWxVBp6",
  "key37": "qKVLavomhsAHPCjnGqN1EjDY6YaJz4jyo6VQTk4Mx4SE7e5hLThJFaYube8xjJ7Yk1L7Gc4eiCGsEcqizn5xDtn",
  "key38": "29xuqcPwCrNByWeCVicj7MLqnuopcLnioHTVt1SaEfFNxjqscpRgTqbEiCSTG8KxUEjRqcfBTB4L7MgibH6zggSx",
  "key39": "4JSrFUAmbXzRr58NyDVNHNf1UbhU2LS8uSvfG6fCHAtJoLRjNfhQPMRHNG7W6gTqUvh5FBkBidppwWX3r9zQBjTm",
  "key40": "31zmDUkYCFpmMthGw7MQsPx8CH9AMMPKd8N4gjJnGuFjVhjNCvgGshJj48Zar7jA9rA7J1oj9kwK4LiLRCLnvzsJ",
  "key41": "2zdYW4knnEzy7LyYDPRvqCQBT9ro4wkpdGDsJ9Vy5XSWwoTqNTv2nPPRHqUnxs3hgacLRuZ8fGkCh432b2iLCLYa",
  "key42": "2RbSVhgAzz5GDBx4hB2GHCtPDBE1joqj7GeVBp6ji6tzmPUpmBWAe4EANbyCjctXwsu4YXyrfTbRhKVckTTs4Ms6",
  "key43": "3YwzyoL7SA5b1Zb2vr6i8UDrBuY6sthavPfCXDaB9dWat4yLho625Rm5RkX3bCn2uFJ6Ab3g5W9ZxQbHPuh1QwxL"
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
