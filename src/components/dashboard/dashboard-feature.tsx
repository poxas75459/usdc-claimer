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
    "2Muuy3zAFp58un15o2MQ5vQBRGrpSJszMof7B5J2jBfnipoPdNTErR6f6xDLGeXoHgUoLo7sEgBuzEwhZmU11Zzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8gZQ8NYLDxYZFoePJBbNK3DX9imWwJ7WNoLdahJRkompze9M3uTXHq3QXKeWb1jrsFkiBqfDHNsjyJwgy2o3eS",
  "key1": "4qJToLzTuPNKzD4TF1a2cpNt48HiBRBwe6q79ciNDphEWEaTy3X9U64jVYejTZNy1rsXAG6i8MDYjLCNqexhZ2DR",
  "key2": "3acgPXVpwkrxfVhkREp6Njq8Ehcf9csa363GVTxMeVmrZ8j7eXDd3ZaAn6tGLvTHaSMfAV7N6HEkEzqrEmHZVpP1",
  "key3": "42r1fXPyrtrGtNvVkPhfV2oEHtgD8qMep99oJiVdcokRGpnUQ76YuqVbdQNYTecfRvmS1jrPg8qQitfHNyvARdAj",
  "key4": "dvAb4CyNXhDwc7DCpetQnbStXrJmFcK5z68TjPTLiFChi8q8seJJsVwGq5rBb8zm8ut8cHTweWH3m5QUBKUD5Nu",
  "key5": "38xGEGnbtPnHwdnpNh6s7m1ecaX1WVy228kfA6nqe9QZRk94pN2x7nLZw6qmRGR8jAmvNvDwkrsiaN8YpyWbvou4",
  "key6": "3ZdNAhjyW4Ht1bxWxNzgARimFceAPiZgbhfFy7bswNc6cnKJ3KE3RydKPuAsVfnGF8Emw9dgKkveoChCN7qXkC5X",
  "key7": "5yPyVdMDpD1Hh6mNbCANTVdREVPfsLH7PXYdQzxpVCwotXYJ2JntYZySPVTBCamWPu3WxYzqNnZvRkR2gQ8mcaHZ",
  "key8": "2f8zr9FT5U8LvM4WyXXdpzpBBTCCSohXpDQXxJPubWbSeDD2ttNQewWynt4mLHTcjaTiWzBvrKSxQrCMX14JTeTY",
  "key9": "2EH1rYaJqhz2T6UdprD5LWrT8JTCcg9AfjzJZQSwa9spd2rwUg18XBaGn2AF1212HNq9z1WQZ4VBC7hC8EBH428r",
  "key10": "3yaUMkM97zMdsMju5WRF7ha5hzSK3Y9cNFDuREhoKuf1ETVM3XyrSArBYJ4y2d6JFYT6cp8MQZ9UuN3T2eazv82t",
  "key11": "4LKed3qfc6tG3JqGbhL4fpxELEqGxf5JTXwczxKBSrTticfgnzxtJNRAP8Qdd1SDxv7rSH5YkfkLHKvdSr6NzFYE",
  "key12": "4bdDKVRPcuHHqTWaF5gHxfPyS2EKxgYrXVi725o4VGhi3DRP8TmknNStvTABLG5fADXpYb6JdREj4W1urXZXe43o",
  "key13": "4RboKyAshVuC1kXNThXKbCUmSvrezoDcpgAJkpB9g3TxS5yaCfpexLUpV8Hym1Awb9sSkzP2tsK1kTUU9pxCRkWq",
  "key14": "3XUGYzRQ1J4XrcM3tTyopf11NLci5SLPtQJbpJ2MxhFGo4r98EQwZ9MdzY79JUJN7umQLgXNoXbg8EufcPpb9YJi",
  "key15": "2c61B8DEjH4HLcgeAcgyztnXfe4z7Rt3n2SZgteEjpiXVn6CALU7AE9ZNggGn9dHXbuhRafM78vfsZjDjSt4TbwF",
  "key16": "2ZswTLP5ojiayn32yScpKeRedz77temkAfENZuabPjDoDMhah3X8judH14H74fbSBiuuQu6re2NUxBAs97xxbsYH",
  "key17": "3j7AgXFPY27nhyArDk2keHqkKBFAie517qoQotFDZE359BAkee4dqNQg3TiDLm49kpDNBq7RXNX11yaqMLah49xq",
  "key18": "4bAYiDAGhhpjoCRRXN6ZtUzBEByU5iVGHA7mtsBhtMUpJrYnywmJySjm7wR5fR2LzMKV6UjTMBFbARx4WXgroaSc",
  "key19": "4LdHnxAsVpZQCoCjqNiuQ7svjeQxdXmhisU2mhounTMfwrv1RzxeUHaW3FEFPbQfvGfLwnJZpkBcYNonyA2L6f6A",
  "key20": "4PQ8gTFWLrvPDw1nPfVajbGiNGGxYXwQBNGLuebpegXPLKLsWV3zQDRKa9Mf63RHzJdwzsdez8ibXu7e59QJ6aYy",
  "key21": "4841juLAvxHd6uodvhoypCzA73rqm78cpyT7cr44bVKB9aqgZB9KhAJtCcEpKFUDXjVDF6qnMBeS1ejKYmeSEKt8",
  "key22": "Lg7FFPbsLymJpWLVo3kv8HnRk5fGZ9hbdVMi8wegivz3eQ1SdG1KPhD3NWxg9fTddVVeUir7f9vkvkesfUxuPbY",
  "key23": "475uCq3Zm5xAzPXKs96wxUJDUWGoSufZnRQdua3pKsx9nt4Muqas431fo5xmQycF9dV76P94o961RwXqX8Uv6FoN",
  "key24": "KaodbrJuSVuTfRuoi5RUwTKXNZT2eBW4Gvtsq5FjzpSfi5Ra9KxQgND7Dz1ytF9xkk24aTSfvbF6zK1UQ6cGGxG",
  "key25": "5HHt3EetMbAcxuVxizxNTD6ZHJNCgxUFEjq3QBPqDV4d9yRvYHPPv5VYiv4MNL3Po9poF4Vcfd1j6tQJzFA9tn9J",
  "key26": "4qVBB2UPWy4BDn8KJ61PJbcAAQD3t9B3XH29TUaE2bqTuTu99dh4vkS8KmgJMh7c8hLC8aK5PnDrDG4kegLdTpHb",
  "key27": "Npwq3cMvJvh1CBWF9TP8cVGebWaDW3pcaCkwTfRoiG3Spi4Sucj31S9JWua1H2urycejMKdGz5CDUgbTGbTDrV5",
  "key28": "3wZvRJwD4jjpmUwbUAyD6T4BCnfsxEX3hTub9arrz2bFQE4niVwRvUg56yoEpUQcTWcWjb1XZqPW8eZCqr1M2wAm",
  "key29": "5c5rt9b2UWVtCZHyVNjdSEpTAYKuUyevJnRhXsU6yKHkozRZA3ruBxW5Aq4Jff7itpp469QXhebqyKahehGDyT2U",
  "key30": "5RYiSZtxMe7CeX6xfjvgcPKaEdEbZNjx8qbYnnTKcMFBXRMerd3eXuqAw6ndHVVK6uVSjENEPNbEjeRsJ4gFxgU5",
  "key31": "42RUyVtoQ1eweCLLCuEFYoZ7gipH96xcLAwmTSEzVPLHGQyLChnVuEukcGh38Q668Vsb4sA5gen2uBy9ohf1Hs5J",
  "key32": "3eL24hzGNVnd3afrJbT5NaeHh8tutB7F64QZBysdCxbqyPf8z2oMuRj31sRPPN4D8q36yWxCr9a9tYFYrxR9SukG",
  "key33": "2wc4tUY2fJPrRyz78oaiz4xuQMydhcDb9v42wjTreHBB9x1Lk31XoPwjEomEnw62yfRqBjKk36DasaJk9TKY6S8q",
  "key34": "rafdwoULWbAzchCu8omzvsRXDHZdZAMPgQU1XjHTcvaxBoeiFgQu8wH6kMYSK8c1m65KvRi5tCqBSfkhJh6pX3E",
  "key35": "3SstKw7rQANtTgSzoq4qte69uHgnyhwCY3ZEYYMHr6rGBzA1D6U8mUZUVCEsZMzwCbobbobDxHCQBRqWMvaC3qrB",
  "key36": "5Wn9ifgJQks3GfBy9FLMTkJvc8NM31coAHvdSmN2itVjPgcHun2LLKZnNsFPeFc4L2Ut1Dr13y8aGdhjGGWtXGLM",
  "key37": "5oRzUQuY89ZRHwBw4npv56QDNPZwo97Gb9hMpZTktbPGtJ8wDy8nqhief4XoBVGxaxkKg6buGqMmxPogxKgYHQGc",
  "key38": "3SPQ2neD9R1uguQCdRYoZhtjZcV7MptS7P2hxKbCxVXmUEAJurRYVwptkV2FBFMmoAVhVnFBBXHTWQeB1H6TfguQ",
  "key39": "V1WhkxmfgiULbJrwPJYfzUBDFw7nN6Cw7gUf8Qu92WpMMcoFG2TyqMsNAtXtkREqr2PscnKkj2VBuMvippiHCRE",
  "key40": "3THYUakKTrQjkA4pm934StaB4AixcmFGWMGx4gSiEGpRfZ29YwT1HtsiqCJ7DrfQZXGqAQacvC3v5QqsGJyHLjyG",
  "key41": "2ELBUhwwfmfxpypgYCupyrJHUESQawXgg2GiXrrba1jQaXpZ7o687sTkLReunYS1k7pFLwLxYWeMKiGDdExMnHsU",
  "key42": "kJvcckdm8pQo3iRDfg6BC1RjX2ugy3iqmeF3iPs5YtSSZENZSkyqxckBnBBdYsaKaVbzriw6VnbttwXzq891cfX"
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
