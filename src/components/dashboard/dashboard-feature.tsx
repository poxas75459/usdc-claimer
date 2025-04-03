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
    "3qXQepC67HUSDBfoAxG7gS146iMjRsR67fVkGWjp9DZbDQaetE88WenyCzHWu8rrt8hsw5fC6W94AHXdrWoLwQVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3jnSZvWUve3bZ9KZrvq8eNXJ9CQcehSAMHmBRn5sRPNpGLKiDr6Kag7wBBrctX8rtcZYWGgHVephmdCPcurvJz",
  "key1": "wkbba4eejoFmRPs8ZTmvNAUkkCSayin7VEb1JzKnNHcngGKudjxinUbir3PTg3QWxXghQ7aTypRfhdHS74hsEjC",
  "key2": "2PeRsQJ71CBEwSjwCHEqVZwhfGH37q2LmTydJeDduhTR58DkXTxvWAGsH1BS5xsp3qUGeMBu6iuZ8ovP3WXjF65v",
  "key3": "46qUAgX9zthp6ggmUJXueN1U7E8ioM7MCDHsveCXENVNDWDxwv35h2oKvaMKuMLJarVUfQcXne6MokDXig9xysvn",
  "key4": "2JExvUuLuPdUVNzqTopXBdysGqc55BrxrPeiRntK22vk3LafRmGNiXdVKFV7yruuii8RPcrqdazcHumqTfSBjovB",
  "key5": "nm9MA3mqQbkWVdNcCYFeZBpXofyqomJMXpHQt733p6odoVW9PfeM822nMG36cRrV1jtQqcs8SVHfD8XerwHyueV",
  "key6": "4zZqDDjWDQFZXiu6tFs6GaKEabh9L5Me2Y1WWzX4jRLfPskLxYjbQyLkWpk8Sf66Q5ZD563MNXcawcrYKwkQBmTY",
  "key7": "12AF7dzamd43F3qFv4HEn7s2W7dvrdYnnTGNJ3PBNTZbhporD2PqofHUyb4BbtVsy7TRi6bLftUX2ax4E7Aojsdh",
  "key8": "4pY5KnxSQ78EXiubRp5gdiPtKqqv5YE5VcD2QrY1aaM8Cb4bHCxRBHKoE6e72g6m8f2AZU3wjwavfxjrr1uRHXk7",
  "key9": "3AhwygJMh7JkNV97ESmva89P1URCRhZ6GhzAvGVm5MokLxrP16HSpiyaNnJyMoVChVCfaSxTWDFD5MwuJchXMu8r",
  "key10": "miLkojxua5niQqdZaCmc4tTSyfecYCDQUbwzZ5okf9afsXReJFpAdFKwyGGJ3EYNm15EXtUhmxJJGvtLfeiHEbH",
  "key11": "38a7WkVQKnziVw2Upvo1faLdcLztbBzUsSS6F4y6wgy6ZuHFYXMgf15nq2s9Pw6P4Afoaay673uaEWRW9qYyhTu2",
  "key12": "Xybfybq3WjJVvBnjNmNEXTGnqpbg9UbESvaDX27nkBCYNGhmgiumoHTca6XfdxkUuyvdoaxRMU2bkshsg2nRsGv",
  "key13": "WHvfW8gtG8rmVmWpA1esvTq71ecGH9wPbiedDUavTA4BFD8Xoth9G9zpYA9szUP3yEFYKunNxDZvLBTRp9YRaXb",
  "key14": "DniqMHvDYXqCNgFYcjbPtvY8zkdGK5KwwSxdw9U7ax2oFMUqJ4Q3r2xfHjXqRCNujfmvgbkWekcpcBnPAd168ys",
  "key15": "2PDv6VG4RhCiQ3vsWcH9kfnTRssDbd7KvprojCW3bWZZqQa2sK5n946JDMBFvRQ4hog9uGD5MgbSkj2VHfP3Z7Yz",
  "key16": "64hHPhEjefRLanSCRRYZHzCwaYejTGmf8SLEx3HtJrK1Y6foUjPcsYuegTw8L3AgvogtoeKrp1z2KGyLZH6eRJ2r",
  "key17": "3V5oQ8g6Z4U2fskRtUN5dNVRPViqLc8Vkao3ogKbGupQvXYPbRzM9Am4nRKfKsiq9bgn1vnFzUJ1MNYM5KLHwKXy",
  "key18": "rdC9bmRg99QbgzXHRBQkTs9UD2VkA71S2W1qeMtfRgFSNsdSkqtyHXDTMu8Px2oLzRpwbNFXJ2VodVQaV1vHPZq",
  "key19": "3M3sxYYNiu7gkvf1xX2mp1dHiwDhP3QNg8bqCGHFG9eSTAqeqkbi7RNtBQzb9LMXPAYAXTVcaWpLPo7EpqTya4fu",
  "key20": "4KGfKJyUBZZt7t6uZWcVdHPY3YMXNSyZ3DzwgoRhbd3reQGiPdVpYXuQSRNre3BrxNApV6MjaNUyhEKECSpAFA4J",
  "key21": "4PWMdAdyW5kWHL2kYZM8f2ZtrzniPSZFtVmf4v7opEbqtBNHgNLCeoaVSST81er4Gc8V7rMaT9MNSaN8fKTpVVAT",
  "key22": "4CHsMSPhajaorzFWVYt2si5d137ss9Eo46eooyeH8VLM7C9xXweD3S1YMiXDwqNpghJHtsT7PadfgUtP9BdPydX6",
  "key23": "46tS9m35XjiW9VVZ6kLT1eGoosHsDWYt5Qi7LMnR6ZptsRjtMCqnADG69i7C2fpovcuwXy3gx181aiBEhGNAxUch",
  "key24": "4961jxdw5Ezs5Yw9NvRuRDGNMrxDeb6rko1XkRBJd6jHacsNZJfiqwNmCfKFBxzRjiVMqitCsKqrCRNTEGwdpTPt",
  "key25": "2pSkf6qEQkB1TaK7NfwH1H8XtrRyDzdyMJMN1bbUBrSPaZwF5onYfD7XGGkK9zJSwtTybBnSeUeHSokpwxUyEPeW",
  "key26": "3pSYzwahm7ncJ5n4xodaVdnHR6LTpjHMsDbu6y5atY9VkFaqg827tGVk6Qx2cCZG3FB7Xq2g2tpNC8eNvWXiMATY",
  "key27": "4dkHwoTPKtNjSorT9QG4YeuAmgv3bEJVAAYdNtJkptPZ72ffrSUNy34c3Zzz22a8TL46rhJeGcjeMSwKW5yDpwwL",
  "key28": "2kNF8Gk13xnp6SnuvuhLNLKcjpAwBcp3XWTJNauWPHjLNA4riRMEM7r1XHdXT14AsX3NvGEKUYqUVAcTBnEXJN3e",
  "key29": "2HMMahoyGMxyGcbG1ns3wm2iVSCuqqGfVFCtwTnQKcaWK3cMucAHppdm6XJmKVYLnk4frujXku9vLozUaq9moDGp",
  "key30": "4doBs6yq36wzoubo11fmw92ahD7dMJSri7GKn1pt4YxptVYGD6LfquuJ4xwk7Jw9bbXvBkxoRWPF8SM7k5GRkDnh",
  "key31": "4QLWFPzfV2cvsTi25xjUxzLr6kNbMpUrAd7HNbWf8MMYr8411mqW4vcm9pm5qETs6fLzPHgaP1dusrpdPSqLqTp2"
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
