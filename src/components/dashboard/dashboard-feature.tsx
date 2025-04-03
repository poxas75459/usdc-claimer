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
    "2Ce5Y83ZdGyzriXUoVDx9FXtq3f44aBWtHxEuiJLJBcU1oHXn7stiF8cogjhtriEFT3ekANX8r5jcPfCimvf23SU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yyBD8KQBXrvYJb4VYnVXUGbkErqUK1DFJqXaUB8jznFtM1gmxcPYa5Njw7CfxbTBvkQNzWNpjZVxuwK1arNEd9a",
  "key1": "5Uo8f6pumRRf9pQK2XKyibZ4eCjuoJmB58KvhRyWi7JtDmU7EX5bN4hp23ssWFX29z5sEWx5q7wrWeHT6eH9tA2G",
  "key2": "2wQdKpRBjZyu1XDLKQpXaGKmLV7xECKdGxbJ8zFD2wmkpze2GHwuvrNnoZsWFVSB35PEysFS8qj1uSQRYyw6HXcq",
  "key3": "3ZbuUdSNNH1mBsUBT4RhMeCHvgWSXWNNDuUmXYjKg37WMFcHdR6n2gL9akvifyP1FPiaBc9z3tzVbgMJutwnhpNw",
  "key4": "KaB9nEcqjUyL8PkjrjLoiiSGq5SYRynG3uZzmYwQbDczJutmHCBHv4NnSMEybzdSVM4xa3TEsyF7kKyjqM4haSe",
  "key5": "5iihvvbHUAapKCDhUZj4V2LmPLKKxRiNT4dsyuYhtNZ8qcjRYosLewknrbNS3CwiAksxS8bvvYnPgsociyRyga3z",
  "key6": "3z1w1RXTqj3yRY9uQskhR3rXXD1SGgSE5WrMVcGzwhdFwmPdo6tMNEb2bVJEnv4VTjiEF2JPE8k9EmW3fXsLVULD",
  "key7": "5N54zyJuZ9PWVMkGhsK8Lx2MhMvhmYWohmdVLPmETdMVPmpT4PHQxSzaiuEDvNSAdrJxQGxqYYMhfL3W9XhME54S",
  "key8": "4PhBLo41B6XUXYpwYiKh92BgMkSY4aeXKi9LSToJ3Gn9F1Nv26M5seykBE3b72LFdgtoSF6RLgDxCDKQodWdgvkY",
  "key9": "41VKuUej5G6uuCahDofvyK9WqunMZ4onun6X3ywjSiwuPv7UrZekM2WJYufSno1ZQb1x7VamigV5veSr2P8keXNb",
  "key10": "3qD7R3SQqRExsJRVPjmwa3CUZEeL4zUjGTDH6M1Mz8EXciDK7URb8bB1uSx7oLxMpYnFXN8XhbkvnEBRXHtEUk2j",
  "key11": "ZnSgJjcv7746rpEi8YGxBhZDZJEL2bQwqVkXdQQqL9QLqXWUuUuqcrSvsNssTvDsdZawrLBTxbBfHJKdB8L1Mr5",
  "key12": "3WvQk7jMvzT81KcEsBRZUMNakxoQr6yuwQkxmihDCfQjZ1hEiqi5Z8wH5i8ZM6XjG2kax2sJqrpcbPaSposdGPU3",
  "key13": "3czv5HsznZx4LYuq7fJFsgFXHm1BVvF6VnEKhuh9ZiR7aeBX6qP9Ddh6mKrrEc65wbskfSbcJQ1EZ4C1ktUjgo3J",
  "key14": "2Xj11V21u3B2oFC3t3na9xer47m4ExjPk51GXxbKZ6gZxovsErxMZpFzBP3wMMgmPUgysUKEVcrV2WiQETiyUnDt",
  "key15": "NfQmcFxjUt9biV128tL1Ed3jSJrrLFioQZAdd9dgFe8X2u4jbWWjqaPw3qwfb1SvspAxRvDUNV3hdJZSD1SKSwa",
  "key16": "Hyg1iRGP8Da1FXLbNv6BMVJqKjMNPP7Ki3FCnsq7s2EwMgLwRRvgQ8Pu4zniCbCWmvs7YeBoZBdDQXkXf6JaStQ",
  "key17": "2XcwMRTiXGYctwxW51DA2W4pE4Qo85pgff9hX1KsoHT5xg9s3TFthYBJiYWSHAWcp4DHzfTHvNw8NG3Hn5dwL1Uf",
  "key18": "2zupaNHYarLwvyFCfkDErWLEw6yLcYz3jMHfDFyjodaqmtgRHdP7uqAWQMBFzD8Z5e1hgH8RheU65DvudUzPBwFE",
  "key19": "jsAFr9RLnUrMLqUWFrwVwa8DyJMj7MhBBoQjCqxCxRVeRKMtkAENEx7mkQdEFHz3fkGMbRRmpyJH6CMnaUcBZsr",
  "key20": "4eAsQCBPHboN2AEu6Pt51B9MRFcu5i5Rh8vwsjaY7EVyd9YxjNE5L8yjSx8DeyYmgjhhVUGMT5jJdQmEBUbz4T4p",
  "key21": "33WvnNUj79fVhU7K53vbuR4KaDgeM2drjF7nsHLUjbRra3ZVigGU7WJw6i8a4BzrswXvyLXJQy95rTrdHvSTJ3gs",
  "key22": "5dsKFoSv3CkNxQaFGMYKUZCPtZyMThjWkKKi54mGoJMQHjRphJXuzk5Bmp4buYkCv95Ya8aAM6NQgitBM4mLttTR",
  "key23": "4wVpT8V7MHA6FANnRaA6g3urFAWUT6Pws1KMEmKGD7HEBDtC51eErPMRE4Fq7d73LvNgZ1j6CFAWXTyg8bNWb25M",
  "key24": "2GiEJWMi5k5w9FcQAahhZxiQgvH3W9SkAfNUNyHFRL8y6MWSN8o998PUHs5ijvjt7LUBtcSKwT1jVKNgfU3cJ2CL",
  "key25": "ae42zEvJQJMdq1QnTNy7CRERAcF1CYdxKqBTi2jgeCBmjqDWutFNZ3gZCQ9xg8QLMniBQLG3bdVbXcYWATLhmUa",
  "key26": "3jZ2WqdwrA9YoccYMBHjZcEy5LjPX5d3QUQcsepwopoBKRFDVsz8Yq2dFXHk9z5sr67W55HqN2xWxQDFobcbSVai",
  "key27": "2WQJnSGaR8j5hytc1gsG5urdLJiejDEdXihz4kW5vWHHHoyXe2Jf3Z41yrt1i7G1pkhsWdDHErBENGXLfm7roMZq",
  "key28": "3Ab3KZRRFzSz3dA7HSZPd1GuWRnofQUkt4c3V3pz4WLoUqGKnEEc6f8T9zhUpdvV6gw2mRECqUY6mGfsqmWaWMjD",
  "key29": "2Khw383PkNCmaRMKfp4T9gQmzXB73GTHsJcfyzeXXKxtf8XQihct6Nym5jR714qYLJw8yLSgKj6bT1kMHrbff9FX",
  "key30": "5ikvbZgzBS1wHaPQSWMC6dEYMEH2T7mJGUNuwtA66Y2er74MS2t3PpTBs4eDdioCo1yqMkNYrYr3VGdxddkwqPiV",
  "key31": "uSEGkyCXtHPHDvByPYrgXXQH6BGRmVDq3zf8LyFj6htQcKEiyHwhUvgy5gjLcxie5ppVSWn1DNkGtzsnhHjkvnq",
  "key32": "28WzqgXVu89qNN1q2msDSRdMNNX5peeZsV4Hms11Hv9aaBRAjdSEknoQJ9WsBAuGDu6vaQBEXJRqaMFa5b4Q3RoC",
  "key33": "3tDdb1MNPjKs35mixKqY9cxzAkboMTckeAQdeTRghbUrLZ9gX9DhefBKtxyW19iSdiZ2HTrM8Rt1vxA4gBHQsCDv",
  "key34": "26muupms8FWzKFCtGRprbYXmwdmGM1qz9t2j537TG7P6VguiZU9GhckzJy2rRapajukTzMnaoT54Z9xmJVy1Npjp",
  "key35": "5bni9NCi3wKrM4qA3JEK6MDFn9XZmxQPsimKRk3vMPh7b4ZcQCjYQryrxhpLMS7tAi4MWhG1cCN62GbKR19UfUpE",
  "key36": "zQMbGh2XKdhwZLfV6VjtvWzcDsVAtYQ7qidvf8TbEDJvsVxqaPvNb4w56hESpJrQd15yVZSS1GvL3MHennfRtja",
  "key37": "dYGfKR7TJS3UaWojmoYwky59Yn7DZiCdyZbbjvcZmHpexEFxpkuJyx3Qq1Ue31wYuiriYa2H7gYQk1WjhDcn9Xi",
  "key38": "Ysm22anhAFaPv2dy23oJUPdnL44qu82NX9NSuJhSw3guCDRwHnGjXdhK27am1iVFeznJYUkdvK9FDtgxohxheJu",
  "key39": "JLtkpZvTWZXDxEwX7JqFRSCrT4bewzjgcRjw4DAB9LiaDScU1xRr4fXh8LUvPh1cfMhJRwQMKg8EfiM1Ze8AHda",
  "key40": "4dNxy4WZmMagmPKFPB9kher3d65dAgfj4fsW1kXwx7f9usaae7jq2kEChm1Nw48K9v86F5HoAqW5AUnsoC3ETBpe",
  "key41": "5CTsGNGPrhE8PQMvdqSaS64d4ewgJadf16cG5PdgovmMy5S2ysQkt78QSfi3dLekSWJJVgdxrmtDteb2GnCBRavA",
  "key42": "4MnXteJ5oN6hP4kvavWLtNFv76aVhzw75Ac3eqhWadniN12TUVzdSLynvhmcnhNt97ZfWurGtbTCSKbKwW1TFnkm",
  "key43": "1QYRp6u4hVwtUHLbhJs728JP3zyw61UL9oLjWBa1jWs4kd6Z1HEM85JAaA7RjwGBUpFv1dTjrdTz5PfEeUqPk6y",
  "key44": "4YTzuu7bALqayrVSYdgJUXemr86mbKFR7jbXagxiez5dedN9Q3fkUAbvGPwAqdnTG7SHiG12R8j439QJixvgrB7Y",
  "key45": "2uaXBaCp6KG72bEGhxmyNw7zLGWFNcxx7Mwmrd5y3kVQiW53JFBK6HwZm6QyBQwMLJWqunbaJymFQFwx2RtJsTYa",
  "key46": "5DWDfSVdQ7HdcytdDtRqvwtwBvAKcyahJVW9WrvxqAiNhSKFQVtzLAuWxojUS8adyCy3R6xJsHTqgkuUUKpPWeAf",
  "key47": "vGBGrQT642AT3VnSpgfJLqeSYiMsMF5zBUuRqULk9SZdJJKjUwQuRmtuqHoMYQpkGUaUTzE5ctGt1HAcMAsPTSN",
  "key48": "DD8kA2iMHRfkjJSexNRzM8yBKMdrsN5jZtiKADaJ8jF47sP1JERWdTTGDVx9RrNQe6t4Ax6TpEfakrcKbghPsJ9"
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
