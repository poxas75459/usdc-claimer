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
    "5megFesPWeX7DsB2feXHJMVuRojCms8uKDdoTTApHVuDWJoyhRBZ3cr3Y3R2HDEsmUUZ7m5BhUTXB1sSKXHhBAcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FgdK8K3TzovSY6JsWA3JuoY6LjFz5Ru2Q34KibJ7FgdYFFU1jfp7QHCGfJyrpoqa4TJJxKQnLZyc2YEaHuBAyKA",
  "key1": "YMadcnexzP2BgZ8XoKZj9ki8SfZC8mqxyiBDTmsxo4EVoDonnemcEFrM4qPoEEbHRzZBzW29xfZZJUKb2fKq2kj",
  "key2": "3rwt9jRuxZUbdCmAnozMuGKrrbW5woe9nNzJLu9BLmV67dU61zQFULWGmssnrJ5EWbMNMwiHaQQCrinHVheG4ueL",
  "key3": "NRF4QZ3NTF41fMzbYaEv1xhbA25Q66woWngopFFw8u6P3gcQCLLv49ShkVskBausGdPVf8fBAgwvgZnjFXuQXu1",
  "key4": "4Tgn4eyi3m7Qc811SXh2zrHVCJpTy78att5TJGTMVsizRe7CKCUKfhzi2VpUrHwLgwGvapvDNfEseTXqoqFYnWZj",
  "key5": "48GHKBwo853h7TmtcUEUDixYrFbqqGfgLUXSufgbpmpjtLkNi2RCAyFTnRn7wPoEFCDpuR7C8NJtcCtCvBLRxtA",
  "key6": "64D23iUEYu8w78wuGSpyHa4qQ1y653FXRpq6CHviHhdEv1xRNHTPqqsy2U64hoiA7UUJZ9gU8PL2B7GJvw4XH9Xy",
  "key7": "4hq68232P4k424Pe9Es1XqeWECRWaU7xHeWCdSm6XEEq5DjtViYprxt8wRUCiZ7EqLu6a3E8V31Ye1CUiNFJ5SxP",
  "key8": "3rqvUWJmXCZTtgipHcSm7yqssafe13wRVcYArPnBMoxnQbmfC4YPxUxn1o5RdZE91SWUmBitJtT8bwQDzNaoWe3n",
  "key9": "5JFJKppXbqbxdpcAVK9HCcS8DA6z3YaxKLtT9kkF7HhHHmY7PXN763uLhgZEWLE6ny1rgfbUf36oVTHvi25Qq6UH",
  "key10": "4jPME3FaoRDxgFcfjCMGtcCdeViHdkDoTmkYHzKWAwxpRdggKUn5EPXyZyMZEwr8sgUHxpLDpYmVFjGvnMRngGe2",
  "key11": "5wRvuaytzrRq5bT9AxDqtkRAQpjsAD69kjUEmJMGnMqBgFxAjEeU1QQJd4aLs3jzsfFWo3enYPcNb3iFpdhJEQjC",
  "key12": "yYNdzHi6Mb2wty5VRvbvZLRR1d7srHztgFLx5eH3u3xkRaBjB8UgPZScfUzEfbAYEcSz39RRjhoTpBimQJxFdYS",
  "key13": "46gFhreBhYfkXTiodfK12Vr1Dxb4WHjnrQSbMPAqiVH7BABEvFkyG5xrPqBy9awhrqxNq6JFS9h2inUQ21ojcV4k",
  "key14": "2nAYvyAg39qe3pr6zJ5JtxMYo5KrwjAuWp7fxpQPTejsaeGNwQWXfyqDTDLAYRYQbaGEZf5DC5WcLBc2ugTvWzhc",
  "key15": "28p7MQysifpSsAe4pbtzGSiSHYKM4HWJc3sgggCUMcDnCs82ADTLXvrxGXqFUA32uUhNodNXpHg7ZSPzEjDA7CfS",
  "key16": "LGqnqr63haJXm9RtbkfRrm1w8cpfKSbNWKKWDGGopXxhZZWcDs89nwcPiXVmkxEpZp2KMWvbzBfZmY34fNNXXUc",
  "key17": "55UpHRNEe9APLFdhKKuh39gyJtrhrKCgzJKYAFDkct196hPFokMaUoSsYUcdrz6ep8r1rTHNomiYJuHzX5bgcUza",
  "key18": "2oz7fevaB8vbQQCTEzeWL4GTbUZREx3FBSrK18pM4NkLFPSjNfVJiekWcDeBWo6Rj1rNJTEVhkkjWLKsUDqLxuMe",
  "key19": "4HZLU5W3QCbmAbMF2d5H7U8drEYGs8t9xTZd5X9HUfsDkLoXbvaFQHCfy81LWRpoM5J2dKtoNZkuwzQjcZmeWLK9",
  "key20": "2nHrJJb7z4oJPcC9UvekMo42b91K1kxJmWeLAT2vN7ehGCetcpXRC38CuxeWLuVcLetSmmkZQDo6zeyGwgEBdbbo",
  "key21": "GEjEt328B3mga82i8vV8j78mq94iqU2o4z8YqvvcXiRuUbniaLfyvoe4tVnXv5uVEcgQpkmAY7f9DCQ7cKmc1QD",
  "key22": "2CLWug9wUdbTFPYCbw8mQ6ExQTW8xVjKjaEyLDxD4auBJY3hukf16fmzq4szznHZU1J3btwf1aiZbBQ2p953KWrm",
  "key23": "39pHEkJ7aMXdb2vRwKE3RvxbbSzjhNwwSvidBVAnzsSJmXoMbunroySv1SatkY84wFSudBSGLo5ZPeGVFWauc48J",
  "key24": "4ScLos9p4NjzyL4LittDeikiQ2z7QGt6kap7qhxMadSjfbKGA2J3BRUhrs3mAwGinjwMG7YabYxRPHQtdK8Jxq9C",
  "key25": "4TQ9iQdSiNu4nZDooD3itUQk41VpL5Yf74KdgkFzfw7sevyfw3bai95mGj9Zwkj7erQUppcd6mW7nZyoiqT6J3HW",
  "key26": "4itRPzSTBYaj3LKt1HVRE3fqxXtHmpM7BJSMLk7Vd2k5tSk6RonCrVYN22BqMJ5wBy9X9P9Gs2Dc6GWwwYCvoh6f",
  "key27": "2ui4fSb8LxrmvzxAU16WENRwpYQXgXTnCKjuX4SH5bJiLjghM7SkTt6GhVCFrRCHmpWNHPjzwLHQwP4A3STDUAjy",
  "key28": "2bKUQWbkbTUGi17erWobCKm1U1dhuZMnyPhbwrWU8caMQS4CBKbY27w7D8Q8RW17vh2LneUtYSu63DUpWdpT17Q2"
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
