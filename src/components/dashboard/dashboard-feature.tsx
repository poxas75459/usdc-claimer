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
    "foi7E6wAXaVksbaFrpumGKuVEbZPJRzw3U4HRWUQPLf7KMAeQeKTL9fZeF2dRgoRTAdaQJWbun45LMM3t9bpcbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjwLA6vde9kgFhsLQLsmdMoTE6UyBzgU5eEmMRh3Pua5az3XrsZTm8nZQVhyEsxSSxDHwtRwbe3hrmQezsShrNH",
  "key1": "4Knfa81kt1KJst2o2AVpRYFuPUM4Wrj2VjxrvsY8TbH56ukyGPghDqxUitdj7UYtZ1TdDnw7VPLSZG1ocy3fgG9A",
  "key2": "2h2xbRCLnoPb9Khyhb7dxSiUdw6izwe5S5Lp2NLPSpW773KwM3DpyjTg877HN3rMzrXSuT2eUupAk5XemqqjGyfR",
  "key3": "5EaTtx4ovwanLQpcy4UzVdGDJvFiPRwSjqVF5FnvzrM26xtXKNjBVqA1dvmiWsBhNEvz2T56FPFLXLHv7KTsJzpa",
  "key4": "2K2jGV1YLXvNw4Pgt5kDb96z8Vcz9LojcNG3idR3qWid3KVzTVfe6JobaRv3bsDJpJTVYY3K7fqTkrgCuFw4EMRz",
  "key5": "8N5z2tk9aXH4rxP1ttLrgsdvdugukZ6FzLf6a3oG3wfHoNgyX4nZsD1YpQtMH9WuAEQgEbqaqX865gum1EjWE3s",
  "key6": "sf99ugP4N5er9JoQgeuhCxdEw8mfvVXuFL5rSKSA3f6XbFtm4CVziZ2gbnGZSuhHzTuwwtbxSH1U3oZnDta6w1u",
  "key7": "4fYHpxxYtH199muNy9v3a8pUTwr3BpNneTTw9GhLqJhZWeNL3eimQzhGN9969hDryqLKLEqjmgGzBRzxmbDiSe8m",
  "key8": "566SKv6mA5F6QuSJDX7A64azuPVVntmUmBtDnwjKmWrC7T7SXzHPmK6JtsV2p82ENg1YmRFbYwN5kEYXwfRFTWzg",
  "key9": "2GvyuN2f6aPs9GWTf8rDaHAvaopKyvGaaNNLNJjpK71gN6iXX9KX2ycYfT2YDjs8UAsayysPQCogC8dcH7g29WRo",
  "key10": "513Wh71UBY2vhZcusVsWma1emiChpYi3U56pGwdxGWhjDm9FVSJ6bzbWigmjNTbu9UXYtoZc4e4wFgRSh1XRH9jD",
  "key11": "2dthQPb4LhQrC4fuuDXBpYyRnT3AhUPj5CbGrJ96cYqV5FZTtcc5DYxxpNFAjUrayxEF7vFefUGaXQUg4gRXobB4",
  "key12": "4VsNKyEDUKpBE4j71Y8AsKEE7LMQWE75rP9Fgm6UjoVELoXKVFccoMGLo1a2sJLz7NVS6KVvoPqXog6oJKBE51mR",
  "key13": "2iSYsN5WpRgeKU5e3vazjqj345YhXP1zjeSZGjWJQbXNfgWuL49HAi8SNh6YzNpEBSG3Du1RPbdPkHiPkeD4HAQD",
  "key14": "22tanWSHToWn1Xp1bZKRjZ3PKyWnfNH5pEap5s6fx5SiBdup6ZhzMM4Kzzxm9Uv7kFvkmaFRL1HA2nXNUq6CC8cg",
  "key15": "3QPfVdZNL7whdGecNmfpTcW1U5cGxHGBqQur336Nv1jPBJqc4LdsfYpN3Qhrem1uzmmZX8jekPtqpRFCF759HGXn",
  "key16": "5MBYBFeEGyw8PgBqsf8BNowKQyur3VgWS2Feg5X6NwGSdbueDpvWBXzksmcc5CiPiiA4e5C2p7nTdBk8BxgyZSZh",
  "key17": "PGunzBqoGV1CBimgU1AKeoeMPKdjQyJdagKNiM5YeGXWuo2uQ2zgxctM322r9hkH3WTeeQXZjZuqY6LBYcFqXsC",
  "key18": "FPneUY3aptaiGoMaCwvBdnbeYECXyAXrA8bpzLxiqumCXaP2sUXBNqaRNQxQTCoVVpn92siuNv15RQabrFbzebb",
  "key19": "sf396wvxrpi3MN5jaTUkUhnLJKxRbRj3TTADjxBckV4RfDMX58JfyeqiCYMdP1SQmaACm9nRdcpmjC37gCV7KCx",
  "key20": "RHHhmadoXQcJ9KzjyZpjNJEkJZCC54v55XALcvD5AuAurFoMfszQfa95tQEcwxSskTM7w7ah9N1fZvytA2NagQe",
  "key21": "381XYonBp8YqD55TxTRcbvBGv1u8wWu6RtHTGUrXiUdbrHBhzGbS7QF7FdfZnNsn9VRhZGV52dLqyYLVNE3WZvU2",
  "key22": "qCerduyEkc65nhSR5RLv1m3DG3KrD9ZW7fgSqZrqHFZBbTF6Bv1eSkUyzdvey6cMLzJMbHXsZUppuVcUfQiA99x",
  "key23": "5rJmrgU71BZoPTmgobbnpMbyqhmfDDp8Xi3P3hLs9YSkSayLAZrUvCXaX8cQ2SF14dkJktyt1neoxD9okA8vcPHN",
  "key24": "5JJJQLVsoEEobNNc8aupRv6Fvjv66pjv7LXJw2qFBWmnQmGLQzLCeqKs3HDf63jJ9LG3VqDtxvQemhXwKmFYLops",
  "key25": "23hcZU2egVcrQ6gY63zNknTQewyT6TgFVvuhGJKErgHhhqwexsEvncfDGucz21EferHPExjDE3PoUrV1LMSfVGMS",
  "key26": "5aYayvWYEkNDSHPianJkBZeoTgkLjEdJJdrBcCkU4y13UjKG6ex9RyWxT2P6Brq7iTMfYg6iLF7v4kVAFq9RRU2f",
  "key27": "3WEccGanmTbN6obmaMzqGbUU32CH1XDKcrAadKZV8zP54zs24hTsWFjMwZjTPSVdhfTq7a7NkwEK22MHgMqqEngN",
  "key28": "4r2ftdgcrvXwnFXSayQ4rVxQRg4b7cmB4GnoBhQyZatL58oxZzA2BuG6B4Nupc2B6tgYdnNq9VpYrH1rucekGMXV",
  "key29": "n27xAtgswsh4d1mMdFUA8FDX1VU1N1BtQhgzww37HxBsFeC2bGuaHTH8HniQ8A1TQAusR6fAwTy6BGwt33F1ntW",
  "key30": "3KL6vpJVFK5RTZ7UzAf85ZXvYKkiJ1NsA6Y7Npu775pjeMaiaitv2qoSr4k46ARJQQVFmP42eXzycps6ED3g4DSp",
  "key31": "2ejf2gU72hBYBNWu7xiiuL4GLQQsjvXzuPWoC6kq3aWKZiqitsTof2GaN42N1ByfWtwtKRmfbcPr2DkmTjYWnjRY",
  "key32": "4DJSKfXXfym3ZssRo8ygkfvMWs7AZYUB58oeW9BXyPpTNcHrDWhWWgU9wghRyTFsds5TtfTVtmCcxKhEg8V9V9Y",
  "key33": "4jqNgaSCUCwk2UPPtThb3gpygxBsYXXzfksW3vLL5QHfUfRiUEMpXRMj8RymF6kZYatC3FhwnXZ54LoW796oTWSK",
  "key34": "24xYy1UkuFf5UL2spSmwReVRUr2JeFp3uWQ13fD6UoMVpp9ViVv2EgfgDoCjtBPY9o82b2tBuCcMYU3rRw2BSVS5",
  "key35": "3k6kcCvTGv9yn6B6N1CXwjuAmtog6VqzuXqjs8eJ15FsYFCYpFCG3VCBVoH512JV9nsY7GtzCct2WUcwkZrFn9qL",
  "key36": "46SHS1PhrrpjVWYYUNhadnUfnVX79B6fMCpXE9S6aLiRHxmMV6gVrMfpR1gH98WGNPvBe7dvWMoTUyUv6v4YKdQM",
  "key37": "2CJHpSC691o7nEXxRSpwtx4nZVCxBQNAyJvcXRDNoeHmpQntoU7aKXs4YqxpvZDC7ubYPbMDkEcKspx7D1NsRfRr",
  "key38": "59XQUG7LAu5HzoaN5UyHhqfS42CCrsfPekQtTFXrt3f4cfEz73GrpomaaBwfBAkdfbC4NGRbfKxFh7bscU6D7vvp",
  "key39": "25Zh1A6aG1tgPXaNQdqiT9h3k19bL3Sdq6WMh8SiX26LrTRRXPwWsbTJLQyH5Tx7iUWC5g5vdKdrAeP6ZK4pKpkX",
  "key40": "qbjMRymuvUmzedAifXTK9gu6seLKzqKbP4JgxVfob9J4ifZGemHAWJzw1tqzE6RgVmgPhxES1LDBxoPTgX4cZT6",
  "key41": "24gUM1ASbTjpMHBezQAMGfER3n8j4wXyaJRf7EsYo8jp6KQjdHSQ7smVXLQJyqPJHfbAu6Pk8NYveXevzGEThKbZ",
  "key42": "3xA5CezhTAXjEUmXkJKDhoo59yMiYvGuxLYAqTF1TJm2fYgPxL3wQ6nYyADxfSikLFwRUnLMRYzb8vAvMHXb1GbJ",
  "key43": "2FxCL9XXrzf9zZf4bsuXn9fNMiULRBWeGrrQTK7tpDpcHvYvaRqodpG2UUw7jGYvGBEDQ7RJgz4yqZ8XpGKds7nf",
  "key44": "3r1PW6GykKU3TwNLY7xkVobh8fZUxpCC2Vui4qDYhSocvgph9c1h2FH277bJYaxTzvA3EAP7zRD6xs91twH9kiWj",
  "key45": "4ntbLy1QpV9iaCmVrfavMsJ4HFchHuZjcqrps3YXj9hacC8o76bWB8kKwgvd2BTf8HEfCvYZurLFgS8qDBH6h85m",
  "key46": "5QvXX4pukQkU8gB3xdvLMGGLdT1m3xqfKcSPDwdamR9GMDC22HZXHsHHoYC3uKAdZp7K1QJcRtjCzR2Z66wsWJ2p",
  "key47": "3hTsQ7KUMPxcV21ffLuwe222to5zAC2Zfz1LLbYJmJKikBFRS3efmgphmVsEGjCRYjSE8vCYaXKfP2s1wPxm6PTB"
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
