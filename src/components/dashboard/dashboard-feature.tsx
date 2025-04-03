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
    "5aMZbQVwy3jB3DcLR8RTKR7kraKdEfd9fZr4saTLL3syVS3M9ndnzcHi9ZnsRqA2JSQjEaC3L1eeczA8SbwmDwXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26dGzeQoU6oNQBpBbXpcxdaJuckFxdL2Sc5kYbt8wyTEYQnHzJApxhA1g5jDQhkseFwMGfEijUYvaToZhqrM5MDz",
  "key1": "3E34Vgd1bjpHyGG8673jCLp4PtQue3dWs2AJ5eGsesDqb2QaTHmjr1vLWM9cngFqcfpFvY6icyZCqcHetWM9dGs",
  "key2": "2wAdpRMvENi6XRn3MYc3Km1Hz3at8Byyf7wUKGNN2zJnkwkjupKrLoKVteCH52n7ukG946KXTAVXYJmnCf8Uqf1k",
  "key3": "27NSXEQV8Q3cC5g7xbTz75wj4Jm7fGRXeGggp595VUvGP1idHBhHyVrzELGTx7AbUQH7vuZSo7dpW2AivxktLxbY",
  "key4": "2xQM81Gzdu6VSCRoWuXK5g7ror4zmhiyUhSGnYASYLjnAMUGYwAEbKNDy9b5BVRHcFWg9vnkCgwB6MBiSAcca5ox",
  "key5": "3SW3n6mt1PfmuWtNeq4efHsUNKtAWbELqfNPQjanDJfJtk9B9Vgfu48aHJYz7tpHWtHXqKyRox4m7EryR6CZMGDm",
  "key6": "5vtbgwL4cdssRb4fir3tvD6kG3xj5zyJU56zMaeUcVPnvQHXB5BQ2WBxLjuepJjow1csdjfEr8BM9MLaqtBK7USK",
  "key7": "2MkDqqby1QAhf9e4sb8B4jWKnwjKFfLiNTu8n933Qrt19NUTqHrgWXoYUhLEyhe4kok2b45ViPt1LA9q48K6A16m",
  "key8": "4zUDvb1e3mG9tgUCVBxHHKucdgmRLkMWA8iFKp1Py8DEZiTuDbkNCEKvJP4RPDiFAYWDLLfSSc31VDaV27QbkHTq",
  "key9": "3VWvXvziXnqHVPzC9d6Y6hxph9tUR1rRQyEHJQZFfqgykUMJMb7ukbumsv9s1tDRwVo51qpa4xbduyeVRBazDqXd",
  "key10": "rcQSELhXBqZLSQuDDD8aFH8t1ckfxmPjTFguXoDL7ytdgYehb5XUC8K22QmBH5xrNhkm5mZtwJgaHSLMqD8wpBy",
  "key11": "3ff5hUh6NGj7ns8fJhHTGSbn5c4q9TbS8oauFaXR5qw5ERqB14gKFc9CrMyQmQC2ZnTvchjmNRSUTi82BCN8Ujq6",
  "key12": "essor45sjoZ9NjR86DyYnikpzfu13E4XExyCQvmZGhPUYVYe5hc8YhPdfoE9CgRsbbpCD96dHLk6RhLik5cHYBh",
  "key13": "4dujhfHEmUPCRdhDeMdrYGD98nuyDDoa27Y2Ss4VCmDB9LEidAXH4TQiCfP851B4KuQeUFqFLBiZKWYKX3mnZvuy",
  "key14": "3wjeWPUYn4PHBvFKNjfzKp1CJbCP8KMDSBVmmdDPMQe4qqib59J5yQnstikw5ZTunwqce9KJmiZxyYGeYnoUcGeg",
  "key15": "5VTVWASp5Z1ErdXFaTkCqeV6JzNo5BMpsYqVQJtvnrdi4H6f6v4x4knyoiP63UYCcYm2qVKWBvVQMu9dTsdck6Ff",
  "key16": "5xHPAnQKJ6MmncR5oTQsmY3nUenKHsq6Brxhkn4WucxDzXSjfpWtkESpFZkMQvF8xQsE9kNHxcKhWvH79aFPCwuB",
  "key17": "35TMxiiDJETr79GnnF4hBBkttvLtNChWbNGfFc5Udbjs8Qkw6S4ezZMGBuC3QbSfQiP86Zb3yeLbE7g4Uunhu25k",
  "key18": "4J47txR5Jm1pb3YJzjqf66Jufx3nyZWGBNCWyC2Dkm9FG4PTX9KUoZPEDx6AFrUaU6strzf6dJQngX6KWUWEAorg",
  "key19": "29a6VPa8gLBYRXfgUhdKudRiWmNZK1sydMRHD7rWAQrfcd9sygNqxG1ehdxhHEohXGryQqEM6tknU4G8uWWMGJUM",
  "key20": "4VeSB4EHoW4vtwb22yamrsVbyvDophFS7wHknhn7pZtkUrQsCqJEZxBsM18xLpTcCt3z2zkBGqmGCSjiVwXtjv9Y",
  "key21": "4km2bHBJKKDV7Cap6RALKHx7f4TjGV9jyCGioeaC85tDmZ8KghczNBCY64JLLaRnC9WMzvrY9GWLwws7jNckZNSB",
  "key22": "E4tu53LHje2DLc3WEGwowPm2ohT1qZaNUS84yiygTNrzaA2Qh2dPNLsfNxNDVjwGbXGxV1fjSP5iFiuMu1mAuje",
  "key23": "5M5e5j5S5TvMvkGdjyqU8swsjYWkSBGBUZYNrfXNJZ4Wws5XRqVMe7kYYjAu775iqg7F13zFPhq4t5c6XFbNbgqE",
  "key24": "3TP2YRPrdXCuhwvAirfTAUYGstLznoG54S2yKAsm2tY31so8Wopsx7AcAc2ZvVvcqS91jfxQVavcdndHXdTkSpUb",
  "key25": "2cffpGD2b4RmTEtDj24r58xNorwGgEaZWeZkSU8G5GDK9XeJoFK1CZzn29TVqJ9qNwMiiyV8A7gp4dJQ3zGericZ",
  "key26": "3HejGbb4C6qEqGAeebozPRa6Ap3UBRcTmcXwtmFMpG1gH6obJ8h7MDpyaVxFsQe4mi3P15Dntv8GjifHf81pbqLy",
  "key27": "CTDG9naQwJviPsfpYJ1GJTZrtnqLjk6bun7aW1sBzXLSwdd6jqA8eQ9z751w3t1zQneoZo7jhPgN5MAAbE7vk7n",
  "key28": "5Me5z2YP2Pf2GBosEwyz29xaGYkWXuUsLUuaEc9GwBMVKKo4NFkVC7icZTz7fqHaBc149capTPMyKtckecz5enyD",
  "key29": "eYANZzP5hj8siinHAByB43w8J1S83fiYTFJrxdqZ1L8ZWxwjf5FdnQqnPDKuXqjF69v9qYMkTXpP1o88Eou8SVP",
  "key30": "4UCG4z5GLK7gq98SjPvoVnS76V1TpkizdfKzRUNaRYZKcQe5iFQi78Fji1kcjUp9mcDXoZakJXg7n3CYYjTVAsgF",
  "key31": "3APrJovPuy6DS7ANdNXU4ZPxuxvnono7tpxcDtxkAVzyHcKPBAy54Sruz3dv1RoKrmFGx3hzGZ1h8iKznm4NP12W",
  "key32": "5QEuBbCyWcCw9kDECZX7KFQZv44XtYvPhzGZ2UrDBvLJqsA67aHe5fC2neXKLHBsg7kxkgHZgjU3RMERgFpS1FPK",
  "key33": "4J9eiiooY7La7yg9yS8WKq2YbX5KSeGk3JFKxc2NLasNrNE8WJBTxXtKJ7M9CM3h43rzDDFJnuh9km6qS3uPvJX9",
  "key34": "pAKLKacFTBRNU6Eb3fokgnBfT13Pu47n5a1DYKSnvjVqQtnYWwixtNJnVi9jaXDGXyMVBZw2HsBTYCB1t4dZLS5",
  "key35": "4L7iMj1NWBodkXUsSQ8JGJwxMLDpCNKgYynhYYoKSoYBArBfNdCk4EBhfQiRc8vSSfS2AxpeY52w6kGTQFGZbyjz",
  "key36": "eHvXdw8MVKcYSzdr8q6nrMJT1W4Uu1gDe5uDjZVjgjen8svYuwZMUiNWYvH2XYjbKgzpjX33c8n3DQdTn5Sk9Sa",
  "key37": "5yqjDigudwrFoA5F3F72twuoCp5QT59hicAxaL9eKZsp86Rg3ztFEYjjxoauUSZGpYbky4YFPVfGLZsfBppJke7J",
  "key38": "cWa3kCMJnKrGRWLZaBmsUD8XM7buJFWXBDhqGwXAXPEeHUFs68nuvezSA8dhcNVdT51tRqLJ548WsqEgTS446DE",
  "key39": "ipGHn1K3PLGCeXrvnoGw9ZS38yvBL5G7pwZeKPJvMuBEiJVCc5DCNRCvXQJr3RjQv9qtzsZyygKdA8bpT4x2i1J",
  "key40": "49QWkaGvx7c7Shto46FAFHzZkGXMphVDdJjcQAzfoLaQSSCR2fmX2Epit5A2FyyDSZFd6Rm6x79bfxUgmMSYFjzn",
  "key41": "2NpeWAxA9LRQ6Qr2kjxB7Czy6LsTNwx2wzWw1LvKnuxUudUXk9mC6QmHQzAvk7HHmrhDcmBuvqbcxYzgbNFnfCW4",
  "key42": "4gTJLGiQ7mP6zNQKwkq8MQpkVwNfTSXgPg6CmEwgQN2Csm4R678qWLfzbYrraaMRJTNpcvhPxiSzTEqrGrnaeawQ",
  "key43": "4fcytHzu8thYUTCFYsydFm2A3LuL3RfuFDBCSf2u551Vd4WCrZnVFiG9VvyMG1F4TaziXjaT4TpNQ1eGvR1wgwet",
  "key44": "oZMpWvfER9PJYmU17PGMYpPDEz86TSy4ome2UUGNCJwJGS8KCooBpioc5rxQrg1EsdZwCsDHaQzLYKxtUM82Vvn",
  "key45": "2hzQoE4t3hBkgzfkcKZ9mfkgyFsaVS33fJpSR3Vc3GFJsQ4x55PTaN88kUwpv8TsC18CupSZW7n4L2hLjqcttwuv",
  "key46": "2nnhTPP4MCJeKiw4G3GZpXnGKCB4h8j5kXeH7S3jJG32QynXpBcnZiiCvBoDLAiT2FEv5Haou23CJmEyLbz2EdX6",
  "key47": "3eAtoupVrtcy8avTzrLjzqFArZgR2FVRmES5uFHu9og1mmzzvgiSCeDg59HiWV55iUkzwh4s2yEZsGSApPJd814M",
  "key48": "2VvgiZ7J5Eyq6wFakC5mM5XLexffS5QoTMU9Jan5wiwwquMUcQT7AHumdWSvQbBzGnjqbmGN44LsuAbzXfYMWSGx",
  "key49": "26rExiRMmMYyWZkxGdgMV5hqysTwxiMG1z1ZGLLj5Vt4AQS8vkeMwcDTAai2YfYjWAj5uBvHLUTdu9KMR6N8RYB4"
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
