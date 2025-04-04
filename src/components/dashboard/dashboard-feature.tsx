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
    "5M8mHcPKnh1AFJs5cXHLf4gdVgzqEBXjmWBPjKcZAqbDXTB696GfuApRQKpmoamyuSgpgJgStGBkzCZck8cfAt7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqUN3wtNfDokE96qAvxrDigJeehhCL8ji13EwpApiJNaCV773T5seFFPxMPfDz5CSit81EqJg5EpuvXLXaWXafm",
  "key1": "639zFukPvVuvqAbyuvmA4GvA8rkSvLB6m2UVwohuXLEU12ZfCYCYxqj4P8xTpYYVUuL4B7tUmn5SxpYLpJcJZuyN",
  "key2": "5DJBmCgyT9WrYF53cCy3dHx8R3QfT7KXTh3MADur3RyFfVWvFg8DRNodemUJqn1CTrBNNXvpkWd36JqfD1KTQ68J",
  "key3": "3ZHg2sHwQF2Y8eRqR1M29KWKzpYTnRqibJK43bKT4gMDWt8RwiPQSvsTdU8dAM97MaNV3NqVAUDZRRWPnbVmiqkY",
  "key4": "W8P12zPqS2zFMc3MwAvDeEpQDaHNDuQ169YL8U6dRmYZaLE5Ui9n21iDrU2dZgBb4yaUFPL7J4eBzufcRHYtgaL",
  "key5": "wumr45NWQerWVxrACND56suwknVUKjoB1Aea17yLvHm9j3ozJhyW2psPHgZrcHo1V1bYEvALE7koo8Y1HgEaNef",
  "key6": "5usHx6w3yWwjUJmUSRp5pmcHc5GqutNfewXfhahDxsLCZMGoAakrsteUn3WJBWyYPqxZcTKfZPkLHQpVDoJbGCbR",
  "key7": "32CBrgGghnmYyeoLKt8gGvsSQbdicT5i3DuCnLHdZnJiTBAyDers2BQAwx9ZtN4YmY4eXFpUeahXfXBGzymkd4Rv",
  "key8": "41i5ttJYGhhS3oHbnZMj7FHYdbzQGrT3pLxb7fgQzqqzr2Q2BtU9hffuTJC6XZ3LBjw4LpfJE9D8uc1eeutPXBaR",
  "key9": "4TdHHQVg2tet8bmHh9J55e6H67vGa2JcasNaVpQo7o1JJsRSWSHxF5ZL56yKcbrYKskCq1erRtN36WpPBCzXwjmM",
  "key10": "4YCT5MxjefmKGaF6b1Hgh1kUWKR3NiZB2bXQKf1RHWqzQgXvehuF3UnYBrgCpPxTBRzoT5pzbYhBAsKDFDmBa5Bu",
  "key11": "aCyVKNb7b6qzL3A7kYPpu5EJSvkoGAZaiWVu52m1FJmZsfUtz8xAVpNkXbe9t4qbwDTZw6WARixSfbZBYNsRCXk",
  "key12": "393dadG91Ki1yyv1c6sytu4YYGEn691Rnq65WopfNug6JA6JLDLv8HnfHVniA3RqBsKJJzfTRkRmpwLj2nMj57k5",
  "key13": "6HGDsxtM17stmWU2s5jumTe9ShT68mjA1vmSWKVXsBuPqYwiCeLF3u13Dro7BZtxyh1cyB2ap1iTJA1BPHhwtTy",
  "key14": "T67LreWYjjjEBWyK71p43CAt7HMHRWrA5h5knKdTd55WWtMsGapA5P49qZAXxGzQdPCjYAHWta48AS9TDdwaQS2",
  "key15": "34ShPNc5dUfCt7hoZL5FedXQoyhhpmibmChaAuQVbZ3sEhDyVBWdsSEwCZTUuZRG5QQo4GpkDNQggjRFd6NC76ut",
  "key16": "87mDuQ8K9L31m85JKVMvfHZoxLDyUCdKzUwEkPNgXLFiUXNqLYZxGyrmWmurcdWwWfdSHMWS1CX8PtKTjs7vi9m",
  "key17": "61bfzWgDuwt2kthZCtMnRvdTyGWmD1ggqAXobMpKiN14QsUWKg4rQtdWZnPFai3yVDuAPNE6XWa6khCDYfHcUbSS",
  "key18": "41kXK4cGQzD71iwdXWyHNLNDwiQdqeFVBpCJUHSHaJB1E3GJe9bjtH1C7GKzmpmjfRf3SFbvhAs1sMasVcHEFx5J",
  "key19": "4DwDc55WhHkKRqMhQ14Eb6RsuGJJmLLWWHKtWxa2hz5UEMUUSmMETqMHT5K4APsVejGBQTyusHW9YekEy78T6P54",
  "key20": "4Hc6HRffnSi9jejzo5CLw6Pv3vNVSegtMTSUAVRqxX2KL8jqCxA4NscKzRjxxhRoMTVjVtnRMfGZ8C7Q4yWHPu7a",
  "key21": "4gHbUkCBkGuNLMLYGTWrHMc9L4KsNhKZsiPuRXfnSjUdeDqkkPSNzku3DVbvvCr8gAwy8UopBC2vbhBHRgbjoeXN",
  "key22": "4XSEvayn9EHp793Hk4jEbczJtgfSH9jxC3r45RMTbWS3susRr5UegBiaWVqj4sFGn6sZ528zgCcSW1d8iGEjXQ9T",
  "key23": "4TCrG6gTF4cuAdiEnhd8rpF6uAB4nrUihssFUZKhi5mWtrFCPHKsct6PcPpL8tRkYL9CxG4jwCUw6e3HZWh3m93c",
  "key24": "EJy4mnJyexUKUh1f4rdCjgGSyArutjgsHHTndMXpTmVueohrvDnW3DwnWzQmaUDCccGcyLf7a2ThhvqzGSszS7E",
  "key25": "2PdExnMS485PQRRWNH9uLAzCY293V5G7hqSRwiZK4K2f4XwRhzchcYjcuvY8YpKqz78bYwWkoFBaKyHZmBnn9HDk",
  "key26": "29PTUYNNJ6DvCspoUD4erXfQu27GpTB16vHVis3s1ZesZcYERnWaNPXrUQQYs8WNemjPEqnCcUySbFTeyJNXnaim",
  "key27": "2t6Jbvad61HYrBBaETVR84E1HJR3za4wSFeXxeo5FfQCEDkwbdPbmWtDtGGpFbxk4sCboFdiwPNKAS3HZ1UufS3C",
  "key28": "32EMdUpMmmuLWENTae1fSHymFJ1Bc4ZQRwLK926gxsoLgxtNYFVdDiJustP1pNRAspw3sZWMCbvz9ZYSGu1wsHXc",
  "key29": "2JevFx6fuwkW25t8ocuFFERKetHCZ8N1wMqwLyNeJXB3sr5NMggeePwv5wKCxwpQcBfm9kNBRMDtfsW9WNgq5Zkc"
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
