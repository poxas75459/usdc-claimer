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
    "2meuxKv6784g1xYDJm4J4vmf9YuHTmWuCsp8N2VjCHMW3Ycu7BcNBDZ5TJ8MMZzfd1z9nBtjL9VNpzuan65dZjWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zhPPNLvJLwMQwuW6EGjooEXiCGAnzrm8LFDNStW7w46N3qqcPVCWchkj9cgU4Ljonb3ZHAbuzpaxvdb7U7VFRcX",
  "key1": "21mtDsyGsj3A8cRbiiwbGyzQhdBYpKvxbtssgs7nHu3B4ynhFicXieA39rVQcedRMvYUS3DZx7j9GDwUnDcTiD54",
  "key2": "zeFusprR6Zc9j9t4t7zQ3pp55ZpRuPiQudE6CbTU5HiFS2GoUGitzW8ueXe32Gi6HCWApzMx312LNYvTDdDzXWn",
  "key3": "1kpHaVeED2s7UfZHzXoFB38HWQAkMU4hvb5PD9NqrTKydzAEkGCKkbsCvywei9GAWwLyh3bn1JNsdsfGu4sTksE",
  "key4": "61W4UCb8dqDmGTQsaG69E9qqwJEL6L6gAJsn94PrSTX6YBbpLUr39BNtpAaSw45kQeYWqESzr4R1K3mk66qqoSBb",
  "key5": "48v9qgyrvDQmdcoJ8CFT6E2V3yGARCFbJusuyKnghnzs7KZMFaJdMTX4YgfVNJSd7eo9UmDLTBFzRGhFacy4bowG",
  "key6": "2ctexfCenhrhoFq1Jc8XVea87hn4udULSv9d8S1YqZR1uhA7HxAFWoRCk8zcYTqUvZeHtuZtu89CZvWLw8aNVNdc",
  "key7": "42MGS2D5cbsZR4Xpfv88DNe2MyAeKQngkhgZ4zsGSMcttnuHfC55CB7iJPdkKToctxjETVxFSgYEmPH2GuF9yFCt",
  "key8": "35eDNmWhxjAjgc8Dz9vPjXqS43fyizqtMpEMNpZZGH2HK4dSPueTX6KFvF7bqfBwERF4oSR2KxR3BAzt7kLbv6jj",
  "key9": "2i5hApJQDZcNzdp4Fet7t3rDjoec3SrNijsPgaPjQMqPQw4ytLYfzt3yVDxXA5bhUyjBpXLurYswef6gSydYN3qh",
  "key10": "3naWAm8gsHErWc54NH6SZ6NJiJP7rQgiGUX5KSJbrQ7kSBamDgb3J7JZF2fu5b12pTKJZnJeqMecaUcEpjV74DR5",
  "key11": "3jEifVZ88qqKTHkH1XcwJkVqLsxUehGsoyL62LCKAHqKRXdCbhaM2diPQaMEGY6wt29B4W998WYSQiPb6BNEt3B4",
  "key12": "2JgFYEN2qiSLQ2vhJmRn8AiaHfBBxH1P2potWAsQPNcJ6CQfQxqwhhs8TET9RFYYkqitvLMyYPnaSxWrS8o4mG7C",
  "key13": "56mEiApvmbm7srDWUngiyCg4d6qAK2hEdyuBYYYtm73pEnovT4kRtT5XnZLyee45AvcPkkrH8SGXrZPPmo7wRAg2",
  "key14": "QGu72MC8Jv8NydXdFMdmgWufzAh87F9kBqVxLLbQiZ3urJgSFtDAyy4cMkrutBSVfcF5tzQRcVMe8JjhGhT6xYp",
  "key15": "4rR3aHVSdcbamA8m24wLVpuyrmybeDg6bAbK7hANg5TsvRxbVBsHKsuANzD5vFeQr9r2dBbBpxv9SbvLcxwo5KYs",
  "key16": "38QxwFB2yQhBQUbH97ZBPPrcJBoNS2HfHAXK9jVmrCrFxs7zFs136HX9cAqw6tLaNL7SbNyxTVERg1oLdtdGWYPz",
  "key17": "52tTcXKPPoP4Gqm9Z98sRNFaPTqvF83PXdDL8aj772yNde63YR32LWymQTLCb8XXm9on862wXztLM9mwgdA5nRrm",
  "key18": "3ogHmWpddey51vSWKCYPwmUTYi8fqtoixhHVduJUiudNtPPUpJzxBhb5CMive6tZtJV9Ly7Um2is8hWeZX5Tp2Ns",
  "key19": "4m7t6QDsuPXccUm7gFrfE25uMgyW3aG5rSxoKpL9yDhj69B8fpYTzj3SArhzgYq5BTJMsWzKDbvp3nFGozMk9c8E",
  "key20": "3KvfMNaYqjKUB55YuA2LLbfnNVfRrSBcSFP2v5w8w9m2oCXBkW7uRVREwRy2Q9Prj3fPV6vZJbZDZi1HW8v5GGmP",
  "key21": "37i48VRuqesHzs7KQubSqzbLtUU6S1Waa1uYoqvye5BsJeEfUqPni5qAkzLba5RgydEkjX6fKXGy6cpPAKrKMveW",
  "key22": "5KDBhQw5Y6bx32TvWYLkzwU9okNCoq95SWyZo9bZPx55P6mc2PciW4cNftWqGEENhxUL4ZdyfoCMngeAwKqXiYgW",
  "key23": "4MxUwF1xArAbHmSQ8MfTkGEFAFRY5ys51sYPHMPcNk8brqwJPPAFdKZ4EyCq8wtVaq8H1qfjCeCG1NtKC7MNSgHi",
  "key24": "3XEh9FCwNDmwwMYye9pn3r8GGAuXATAqTMzegZqeYysDssF2MLqXSthc6kfHqwZYjx4LESC5weey92eohfeKQBk1",
  "key25": "2oe7Ps5GqtYXMifgfGaiLCPt6RFHNnR2CA43QJL6D2g7rPAw8e5GFGyMttMtBa2Z58fb4m1XSgSNEoRMk86ZMA7x",
  "key26": "326rC1UDbQs6P87L1DJuobZxZLhkKXFrXxPX4eRsXWdZGyUtbkzv3F56a6Ys8Hfrp6DvRXTKW5dhV2iahigDDvKM",
  "key27": "34X2A5R2fTikBo97rqvafNqFUNWwJ2mqfVm5HAUbf3f3iJCVLbszLtkTKWMFCsCQoUArwBPBJD6X9hf47H1cE5Wp",
  "key28": "4u43MVXm8pnnWKJj4ADCRpAUtuPCAZsjxjdpT5ocYyiboWhGvCAasQ4nL59fL6nA8d3ntpNBmbjXqRsPhCBGFDCC",
  "key29": "4NpZN8ENeGaQMvJkEB8HVKy76uhwLhbiwtWzMAco5jCyNgkzon8SNLSBpdYTRQmbD4q8UgxXWomAWSDvwNPjFvT6",
  "key30": "5QoWm3nQzRxRK1iVgPhCBdRhBKizz2QADhKaKdFMqA6TSDnya8yDh5yPYP3Wzk2CLacFU6kabGvPHaGqcbgod8dz",
  "key31": "22tDqWHpZqvW6jyL9ozLeM23Wj1sAUtHfhreT2tSe29tbZkBtQNEWejzJYzk78SYQEsmBgKyuRXNxkcQAw5VbPKs",
  "key32": "3x7mMMKoJAmr8xEPfyDCAthi17utECfRbH1rcLbiYYYMWPDR7SuoRWNcgtDu5h8HKSYqmJqq49GZsoCahVaZ9qry",
  "key33": "4VGe4sokscJuKbAkFwxxLxkEu8LUQ4SNVjYdqKYN9oEMmqD6Ss9Pvi9qtP79AGAfBKJyRpdZS8fAYDsVphUrZrM2",
  "key34": "3dDbsmSptpvXfLFxMfrN93rvmKYjj5krJ3EtUdiQrHp75bBCE6WNJT5eZ4XUbXbKYRp52Lc1gw47A72vNpdapNjj",
  "key35": "5TMbjwkpFx7MqU672mxDUQhHxcz6RcGKSp9xr2MHitvosKbQELdvQkibQrGrXSFFvQaDAcGcMZbejnoGitHusBG4",
  "key36": "e53pYP8SNPu8LgHLx2VBS7Gv6umRaXw4mBWStoJSiWsyroYZ5m7CW4miAjdjpWKHkVwXmqJg7DeF1TZh1Q1WpcJ",
  "key37": "314axuq1CUDheDswhKhqtXsiZA2HRyjgycXnGZieTUS5YGB6XaiVoNspxTkdV1cyN8AcvuqkkBQskAiMm4JzB19i",
  "key38": "4uzK5N6tJaQp952aQTys6ec3jscXtWUEEaFSKuoGZRaJ4NeKfjkiLnzKnwitNwef1E7DfM79NfqPSx5TvfiUingM",
  "key39": "5QyvLWd1BZsTV97rmQMrfeBYrUbQXyDxd5mMVBzChs1NBhZdzDNVwBeZJaBh2KupQjeYbWxokUEDbysjhPmdfNTU"
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
