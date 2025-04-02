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
    "DGUdjoGakF7reRQaxNTvGevTw6Sn6pysH3DxQTfcjGAMZbZhDppVDnzXXvmvFkVvuQat6eZS8B7CCDuaWmduoTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35h6NPMdjUNjCJE9oAFjVSNT5nM3th85U9kUnj4Sdc1uAQ95bUFcRFatVbdbtd4hRijtTLd4vUDf7dBbTNFcBniJ",
  "key1": "5932Epkx6VFZFafdMRugrQZC68Zdy3UQiqNMWNh2gAwF3JgoHusaTjs2ADtrgyQabbNYz1obKVokndUQMr9Kz9Mj",
  "key2": "5ugabbptnZcv7eU864X4dqZ7xGKcRvC65RsqpkDJqrBbXUJ1LPEiqP36EeUTDf3P93urftsaAFSKa5wuZKYFUyzb",
  "key3": "4BspCXLx4fqwsjz7hfconW3oAGZByEkmbS7bT8d978VHvtM5qQsuhnaXkUhd982XKFmZ7JZ6p6xVZXKCMgcRtUor",
  "key4": "oLbtff32UC2ZqHWjsnBcBxYQqF2sPM6oLgyRTq6YJfhkjBzLk5u6JqFThLvUheSJbYBonhJgSdzimomk4zRXXsf",
  "key5": "3gGuyRXiMv8hTzt5ebzM9h4m2oCeauc2h8Z1psLMFruYaKjtQaDyoRHvy8B9SYodAP7RGKnkziwazCKdva4X5GP6",
  "key6": "5rjsHYoQg4wCyUqPDw3vNQzLEbDwSXu3TMMnAS3GjczB4RFTMCUNSiofhcuu2NvksRE5TgxdhGi2nQ6ozAMTbrZc",
  "key7": "yjtX2VrCy9JJ1xHbEo3yt8opTxgPBfyzsaD1rPsj8zJ76ASJspf2EWCo3X2jyG7ML3Znaw9Jhx5qo8WcVnw2wTg",
  "key8": "5euvKbk1WTrtmU4qXpAFHFQJkDkNykZ45wXSG7WMMZHmkDeteZbYGk5kGMw4Xyn8gk3arqFeTe1dMBRHnkdPtAaN",
  "key9": "4PAgPZYu2vFuojG52N5M1BWCce28GWNEqGcgZgk7Nh8vAyqW53oryyBWBckpkkJqSGqQm2TnwWSfRgDqqRTWcxUr",
  "key10": "2CkKbjsBSSRSHShnVS7gMWtNDi2EAPq66x9zuhGjdVWRHY25upX7UV8KB9cgG6eaYvgz2wWxiKmp5ZJchf7mRCEk",
  "key11": "2jr61MaPH2eQYqgnSse3Rx8w5W7aqPh2De61NN7N6HXWWLCZmcxPKtPCYvGYBpswxNGoRkqNFN4Cu2ktR2ixyAa8",
  "key12": "5yCKuUuDBdmzwSjd2sSeoQ39VVYsSUnUSz7WvmKonuuvwdYM4tNuHLkASEEyC2tXdF65dAhqJeLDVtiN1kRHxeMy",
  "key13": "VsBE2EHKwTrm27j188ua7YfR2qQ9ZSzM8Z7qSkFhoyaEMoWHv7xfABKtH4s5YEPF9Dxbd1shtLGh5U27kovA1iY",
  "key14": "3Z8sGjRmBD8sfvaLAogndc1YGW3Ue7LBXreRfBSLUV596dasygho3s3t8xGetg7GRwLFhxzfrfzxMmp2CfVxBrmN",
  "key15": "51quKVxQXqVJ54fCbhykYCvzmY9Uecw2wgfVtKRJb8sxe8QJTJSnWZ1JZMgDWS8EFzQ29BDqzuPD3enoXNoxqPEB",
  "key16": "5gpzTA1oTQkvmhAN97NPoByHVgtTtvQhm5RVRhPVWVEvEuFNkbrXfRRrYXyGHoNp2e5wHHCuheNgSN6SWEfoAHAg",
  "key17": "4sSyecDw8ikkqDSNe3UuZ8YTqeENNWiHbT8pfw4gRhcDhNvtLajNUevuCMZ9hms38nAptGDryzyFpcV5ybjC9NBu",
  "key18": "3CLB555AsxMEo2mpeTpnArouHMZsyeCL5YzsBWUzNc1nVjiiDxZMMMLQVEZdu6b93b1Bb8NPpyDH3E7GwbpSX5FA",
  "key19": "2R7j2Kexp6A2NS4RSvJE3yD98toQZQAytRss6tEBDTAQ2G8H5DqhhKj9tAjHS4tC2ARzfe18Wx3ptcy53qdfUFCp",
  "key20": "gPJ2eVxW78M33ksiFxpDxXyBraEMfEzK1TJkBxA2eGh2MSxhwytjA5W7xxZFARQ18fUUN1dxdTR3NeE71XPezVv",
  "key21": "3zFkPHqnpEzJUKf9fBzr6DEQXrAtzfU3xxJLvC5SfC3zfAk4FEa5VDF4nojFE9kdoMpoGhKgF9Us8tbiDLUSuECz",
  "key22": "47dHCmnji3F5LhCeZUqaMTm8g5iu3G7Y5TUfgeGsEED9ZT7rHNmi6igRiUcPyNJkJU3GTuosRB1bUJx1q68CpKUD",
  "key23": "2g6gUpd32WZdCxVvCv4fuqdGpSxdCQj5Yd72X1N9WqH8TsS49eyaWFQrDBeEDvnUYzJDBr9jcVK1jQwEXj8SwpeS",
  "key24": "5uLAQavgDaoDNTLoGoVkRmPhkq6zfNC4eBVALYxZKdw34vyYvFVX8jpzKaFMYbLtVNPxGYeGJF9CeeQySS8hLrno",
  "key25": "4SkzEv5DMiZxjHkibC8LbKqQTo6kS7aMwdTEfvizanDByi9MK5J9dyrbR4gWShEtHBHQo498YT2tbMCe5SJKBGTu",
  "key26": "2qQByRthGgWCJnuYW4Dq8kjz1BuLXQQ4gRNFDDyqNLt7pYdF1LiHgvj3xzVqVb3j6zZvmMpZjdUHUN3e5VAGCiT",
  "key27": "64tjWCE8FHg9vbAD2tvZ31HpUFwsmd8uLZNmCDDxRT6uoBsTT8e2w6pa3AEsiYYDcojPxUANkvoYz4gAJiZYsTpB",
  "key28": "2yRUP4tVWARGV3hhiA3XdWBxjpxPLg9c9kCB5Yzp5e62Hb7KMurWWxzafy1JKTC5qSPxcXw9cxCtJSeoZzncr1Kj",
  "key29": "5DTdT1h4x9kwv6NziyaRZ9hzgvf8einMbUg5jFJKiorfPVydT5aGcn8L1zZyM6rEWXqdQ3rmM8wjQsBeTki17sKa",
  "key30": "5M2xxZ6RxGk5TjQtq8wtVzeMLqFSuGrKuWfSX2Qs5LCjPCuVLg8xj5j4G79oDNB2gqXCBHh1jgtsSreQgePpNeV5",
  "key31": "4Yt58QosEieedVhvCyiHS5BgDj67uUDkCSCDC59Cx2eqZF9D1voFZeN95xEXt9Cd4g2GUYvAo2AeEFEV4towkJUx",
  "key32": "3zy96qpMiCiwVhVxaUrbSeRDLCpaiYKKmuuvjaEpzvEEZ2e3W3tNH2JgjDFzc6LA9FiLEaTXtKU3Dw6shCx8S6RS"
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
