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
    "rzK92KbF6f8nD8HoFRutXSRYsEa9t1LzpAsTGx8ZSyYzBefLEnY5c9LJzshD6ZQM81YYBNeAJD7cHEsora6iNq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDyyXsQAWXbL89qDDAciJf8JQGF1cLTDsXCQq5CBnPf4Zbc5ShstZhsZREFXEnKtXHeKVZXALbwritYHks4vzA",
  "key1": "52WHoLgGuCZuemJWWNNjsJp9dtcH9yVJkdbzFVvKdSpHioxJkVj7AxzuHx3oLhJgpSNRmNceuF1tXZnupvFQmNTd",
  "key2": "5K4BTFtKKRqZH1Wb2sXhHEkU4tDDezVk1xtqvDrfQCFHFUHkZR2pAmGNUG2zJWrfr9RPhsTbz7WQNrThxQc65vXG",
  "key3": "2BhgziXrSxwQdYrNZDTMJAwEPJ3wMnzSuQPpnp4PiygxEbp7kRLrLCnb6i8R9VoGWuznX9euLCgQqNdsZnQU4kCD",
  "key4": "4xXgVYoW88ahm97eB5X5mmBSMAFJyjQf3EDnMQsr31HTY4nKsQmMxk6WcADF2DDwpWdXGg5xVVTXt7BiX6W3MeUi",
  "key5": "upxDN2zukCmcPLnubSqqPiS1PrvEy9z4yoo3LUkCWXWBpYZysJ4yTRLy1JpeeDXhybCcWkN4hJ5oJQtYyKYYmd7",
  "key6": "5anzbu4GYRDeie7RZStSgLGNg3xp4V3UXAJkS6h88uAsvkhpsvS1LQwTBzSzDJqK4e76fRyX7owg9g2zFqudEVHK",
  "key7": "RZEhaFDqh5JkqixaWfqKCZR5nDfNe5BChXEsnZ5TXwGKzMvwVfqR67mnutUgY33iU2fXc8mAfx8gLQJPLESLfdX",
  "key8": "2icJLY3P3LsH2h2XJVULK9vpSy9ikTabFB3KKBsbMhfKqSdfKWNsSxc3A9cJLjuxKLMqSR4gUemcn71Tw4zcemD8",
  "key9": "28CxfyrtUXW29vQPSc779am14arQjvTkNX9VdwaN7YVKbmnJCMdBrsT8t9jZ3NshWWvdQrXa13DvwutWgzdXKfJ5",
  "key10": "5NXLMBYXwj6aKP1hcyF2PnqxwRqAJYs3zHnM6jyFZpfZGkT8c1GMq2sXWuc53BcFuJ4n9onNGvgep2LdHBPuX1SN",
  "key11": "4ukFSvzKpqsJvGekw867C3H16fPgvF4S9Dsfh8evAngw8aQMTqTWKDCFQqdVLu2Z5VrmePVEsX9b8L7QELzUqKJ5",
  "key12": "3htkck3havMfV3k3yYX1PSFZ6ZYU8ZJgXPkewB4qJqhChzBx3NUfUVaa7TEi35QoSR5M9apxabvGRA1MAiLaBqLy",
  "key13": "41WjAG5Kuhi7Ly22zzw5Y2qjosib6MggXEGqsjjwmyQwLHsexakYFES5pnNeh3vSs3iV8xy5H34Em47LYuRUtpHB",
  "key14": "5BD9QLxnzrbTWiKZB6DXWHkji3UxvWgyfyCGLn2P2EBPFwpJpoLAwgxaCSyomNj4fjJPxtCYF754LiXJDg2MJZjm",
  "key15": "ARoDMB8PPEsa7r5xp15MC8cEH2UwPLEPABeL6eXrC6roJh26nr3ZH3Xixq2sZBySopZyKC6imYNuEMMMzGTwWGE",
  "key16": "3Quc1hT2LFiaqChpcbbmaT78vYrvQkwncqhnwTA3rwzkPMexfcNMGkNc2HTYyCuV49NwxbZVWBQEKxyzkoSVtgQY",
  "key17": "5Y4e97cnQcyuFfPBkgRzN8DjDP7ufRbDZVraejCL2HhhNS3sSkBjNsxiqFjtg4rcZpN4ApnZFCfsLT4dShKt62k2",
  "key18": "2sA4169GD3KvB9XjYD48Jt5rCUGmEdDJTrrcctGmTDhEzPj8JY1vGi2hawt5ei8g4K8JDjJAwzGS2tBzwjTDPDbX",
  "key19": "36Ui5nGmnR3SUP7Z3ayVQ1vwcaF1MsPAhu6wAbGdcp1G7D6CpVp7JYE5xmtYcf8QRqzA3C7N5iBHnrXubT4Ey6MG",
  "key20": "NMD5XqyhNM5YogyBK3x3mQ8EFoMDwKXyEmWbkiJZi9WaCDtSosCw5vPHbMUmKJPs7M1ZEX5uhQvJCSjCad2E39V",
  "key21": "uLY9tTtNWw6a458hcUovjqsCyfWQoEEMvjvr3TxTZbWSAyLM8f5tCyQ4Bx4MpYcoGGucBGQNVwsjqFfKHAW6HKi",
  "key22": "67Ty3aWbaXgnThtRxcziqmubqWZUEk7RkeVEg93ekKTBzZRqUi5mzfkdWZjm7qScuyC6JZBbE6Vj6wDdk3J52Xca",
  "key23": "2JYXBBfaz9t33zQQBXQ9b5jJFnKEy4nXD64WerNkVx4Xwp3Xkr1PddUzf9raURjR2T6CBeN5hXUYr6NDWcg39HE1",
  "key24": "GZCxT6gbJ8rbgBQG6WaF4Es2Bov6qQr6HijKEbJvk3C59o7fK1MsdN8pJYwr2NcY3QkvhAMaibc23osY6aJ7Wgt",
  "key25": "v4dCU18dWm8TzYnDRqanSBV57f7u4WABZmEHHwJb2ic4m95DJGmhZhDAHtPAb9Ft41dKo9grMqYfm6tyeLqxnru",
  "key26": "4u68oSZsTS8BVX2uudWRZ1iVdncy29eHxd7FszqDbz1LM4ZLmx89m6FiqvuJ2S7mG388C8cPHUiRjkYdN9fc9aPb",
  "key27": "3uuujrVaLStLsgCXbrqsWjRNLxgRAvNnmKAYRZopysLuc6DxYZUnfWU5ymEpbCvpBG61QWygf7dwPSu7FQy7cbxC",
  "key28": "2QKz7FaovNC65nJZG6dNBAc3fgaXSBA3zQdMdnvWsio19eJxLMdeDuaTbNU6hzXceaQLSQytms2JBT3tKzGeANXS",
  "key29": "59zx4WnMK4So5VyNhmpfgvPMVbu4jP19SvTmxVpMj3GTWBWiBXCEzpyM3MkaSPMDR76TMcmJz2p47kBoVADbasoo",
  "key30": "42tqR1csiTAKL9eC9e54MzFsnhRsrbSdA7Md8jQug1Rj1vqE8XUPdBxdPgWihLDULJCzyJT35uG1KTUiRdE5rxCF",
  "key31": "4QkJjf7DGg8uHY9fwgAZfhsH7uE9ygcMhAHV8x7HQN3RLExDz45HYEG5aNbX81W93NP1bQsDM5KxCh2HswPBNrVx",
  "key32": "UDgqeTuMEEBgxvkK532UAmiXTX9zJzzBSmXtmYUBvsHvP1yujRyFVabLBNzLXu4JdsCzJ74cNiPe96hEHzQcZnL",
  "key33": "5hwYpsckdpJNgGa8Ajm5opQRkytGoNyKhxdgHG5cZCcAXPqj99eQcgxNWV3BG4Evf8SQm99ExRG3vU3tPraxfLeE",
  "key34": "4NTsg9XfSZakBwUQMyeLkYGU6USLhrVop7j1XBGH1dSDmQm3KVgefZNrg7oTLganKMpBzrpFWi3AWGNicVig12JH",
  "key35": "2Zs6mzHbVxZRjKU9KEWaJMxXCUNSBYqva3U1BC7Fhc2SR4CmEuMf1NvpG2cUskGVEUENmnU9yRJ2UJzTorxEZE5z",
  "key36": "jpswkhTbRP9UDseHtirHAjdTwBdaQQB4s2HvUek1msqSC1AEwyKQ1v2tAT6k1ZxaakrZZmHNntan3YHQj4fRvU8",
  "key37": "3KQ2GZ1Ex36miGv5cZV3T5iigKHHV7g29J7TV8aJSmTMxCVAUmdrA97wXKdp7JzrVd2gu6fVSSGuVWwiS6t7JhY4"
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
