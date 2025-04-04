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
    "2H3NbxThBLF52go3QZPHPNnvhuabfVMe9K9p4SBNYmfNduc1S1pDWh46TbzKT91TWAXNPpHnnpxuR1odFVmFGJsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kWWk9y7b2SaP87a5j2rWrhm6TQVA7jsRvehkbFycFrgg67ZS6FeF323pCsrYtmUzTcMU6Z5Zn5of6qDnkRbdSdq",
  "key1": "4wzAszDCTeu2N7A6isWPTs5gVcMBYas1He6ViEZVM4vAsNuYnp5JzEZ4J9nJjMiDknujdFogBisUUbf1ptyA93JL",
  "key2": "2xorMx7bZu7nZp8ektYtRePiJEhxaqo5KQx98KeqUoQyQj3qAg4XBfd13P5DzeLjnKY1jSivAHtG4Aa3GLeeKZfN",
  "key3": "3vVdp9SwfMB1coafyYZQTb4DJHR5Cy8k1MkkyrYkXqCjBZvXdKwD3DGQHBB1tP2hh11z353DZNoRz2e3NDDXwCnv",
  "key4": "4TwByuFxR9jQ9XdMwip8XBsmUNBNPQDcdsFwNM9Qwo9EH5AWps129dV7Hc4FaYu8NZJY113jpYDw2TQAjkxkQxLC",
  "key5": "2BibsVhoGb6cY1GXKe81nvq6Cbe1N7GF9hhN88HK2JfpsRLkgpbQwjMWJQw7gT7gfwcCyPVoHGiYUiuQB8xKZEZK",
  "key6": "5Q8ZEH8qEKit3fnvmeh7cokPB9DF9njxdiQTQYaWf6w3M7vnpndbCdtpHDjAChCv8CLsyZPhbxZ9DSPbJwfbrbYw",
  "key7": "ex9EVh1iwUDXnTRBKgVz81bMgg4UAbKSYBLGW9zt4udtU4F7aC3ofpfmPhDdsMNCwgV7aB1X42DGAUobJwBWBrb",
  "key8": "5pMnDtfACmWCLSfFAFoWmDTofJMYKRMCFc1VREiUoR5tLfj2W3KabaALLUV8NGMuWMLaBNeT7fZco9fcPXdN74ZS",
  "key9": "6T9BgLx2v8Wp29gibHWzmD24QdCXX9x22Q7WeswHxhqSjWnarPgAvaHCaY813cjY3f6rBay373C4f3mjCnEwsj5",
  "key10": "5ssaeLTB6BPuwhEXduvonNxHrEmP5o4i3EshsTs6Vf7BjAcoiuVuoTgZdMVjzJKAxwqyDFsKxQNfUpucMFZXW6d7",
  "key11": "3o2JhQ3RsCK7rXMT1HMAE3jigVRWQMwZGCaQPVtbLxJSeBLJrh1f7jPh1BCPwM8VkLmdKNipS5mVZdJaLJfHNJRm",
  "key12": "5iTez8DA8NXUGSm7qR3XGUT2HdvfnFWTN9nQdoXN76TePT66kfWGs31KCSdfnpRSPydcryfVB2AKqDFyjGqnnar9",
  "key13": "2FN3NNzegvQ7uXkLsVuNJkpCktMSJDccCLxgpKyPxTXtGTvN36yTtnZLPVTzoAaGjMkKT12SmDTBmMH4mhJhfKdP",
  "key14": "33V81VvpsT2xQWPSLjLFwggpc6kdCetQkDtWLZZkvAmzW7Vam9tmbKbXUU3BrAG43XtVL2TvzpQPENcs3tcKyhdt",
  "key15": "2Ri3uR6LXUbpS7ioJU7sdJ4fSKaHoUZBxLVWukugn3QdBNyf8Bbmc8dYieBmJH2ECuFvNR9Eq4vdnXC2WdnHe9dd",
  "key16": "3XKvybFvZNVX5UKKuBh8Yp6rySdQaoVrnEep3UsLRJN6w4fKSwDBwkPFfgVsBmqSgprHbVvcgaEojCKEAKe5s4C2",
  "key17": "4uUTL5HC7RMb9NKbM2C88qKGXvngVrCFhjm3aXMMFit6B1aKTXGoV9rtQ5r4gSrsWhGKkWwuVNAT1gHQk1Yq6dYn",
  "key18": "2dPQaeUrfFAiuHyapPxYfUEa2J3st9ZLMoWKc7j4SsA9xeqgjfuh33Wob2PZzbUioyGrVtcE9jib42th1qW1ZjFh",
  "key19": "5YDZe73av6broeESYayNqWiHMYnJPg3onPM95Pa3dFEQinTSNt2eAPCZnnwBMetJe9AFguzfKPBkEFK6TzLB6aiJ",
  "key20": "5agqFxu363nVAM7EdaZ4MuLV7y5uhz5rxBWhv9PiQeDKCAauwmHntZy85yB7Qsus43q8xRjJYgxibZ5diLQN6kCR",
  "key21": "2144T1Dc8ZCpPUNdoFhMrcmU8XP4Mnzvy2wubmdwsBGNMdsP6wmQLntVM4JCYg212QRkJ9BJjt2QqNiXGXLqTfz4",
  "key22": "yQofAAcPm7QkR2fvwSvxFXZygwVMeccJDiBgGXACm56TgtWDz7vMEX5JW1rPr3mcGrtbp66M22sSoKHEbLWUyyG",
  "key23": "2xg2m3uXTiVFuqnS7PsiRHqoU5QCKkMRTjLT7s45PwYiy7zzrn4Ah4FEepy9qWtXc7sdmiNkFzHVHDtZYXvtkQht",
  "key24": "5Ya9sBZvBfindfrPGeXpE6CL9nAiPovGBx7LFp2KkDDrKfDTMf8VHqxGv8r46Kp42CF4n9fZRZPbzViYpkB3iBPL",
  "key25": "goiJkTyWkXmVFTdaHGiU4y5UxrWxCae8wSwNmg1kLJz7u9Mr73zMAcQraszHwSvbNzCBre8Tma55ShuwpCSdZdg",
  "key26": "vuaV7r3UhRQNzrRtTAJd45P5xkuRTzvvECNins1KNDzc6LgyHoEzhrDwCf5uLiPr7HExoj6BAmZHUbMcyjtrZKe",
  "key27": "53REyHgewbPm7YPKZMNZ4N6aGS222oGsP7qmSe832To5pNmvAgZWAy9MjW7aK6MTGRgZhLEejco6e3xEojYrnL6Q",
  "key28": "9LX73aRjnX9E2gTcfV9eRoL2Du6PTfkTVcDnFwzZm7vjNqjxFV7i85mn2YyFy6J3bK6ZVZ8SzoBQhgUJDSUyBst",
  "key29": "4Mj4CD1unjHQWJHx9aQTUz4yNUSLXSGYbaWi1YfXtN85Bui8VFSai6BR2S5Et4wg6uHcWJqpizKbmv3vDZp38TuZ",
  "key30": "4a22JEJfQ28d3moVBoC89RvVFJhq83yKQ98peADoAqgr1zRiEHdPkrJ1CK1mx4j7BboZcNf3Vju93WLa4H4UdgDt",
  "key31": "5d7aRV4PP2FScLvGi4ZquigggyJmxh6Mzk6RENJHHAzvByk8VyD2f3EB4KTpCNNAo6SAt5CtZyHPnGjRUyEVgiTZ",
  "key32": "2itp2rJruNzEcCvmJQZ6aJuWDpmiaewRCJzc4tqi2TJymSM8ZU6FyiKT5YjxArVY6b8iQmCdjQai7PBKwZFFmSqb",
  "key33": "VANnNxgckDcFUnoAkAbRpnTqdQ25X7F9nKjTgGtkUSCDDPLE4RAUZzU6P9LjmVrNSgdZBqMwKaHAzYLXdRDys8x",
  "key34": "56e67STZwNYXhfFGeK7ijvHNan76h2RnVgCLZfDeaTg4JZKodutbKDtPw5A3TwYe2MqMSrzDN5Ruu62B3c9cQMc6",
  "key35": "4vDryRbZVru8wbx4GoX8MAmSkVhMrkJo9RNdMATzRUrwiwomn3fBojJzhhgnytv6oheAy3Tsovi643ALHBkDDb2r",
  "key36": "5xY2KT2pyqPZihmcz6AZMfoGhX65Q6Be55mpkTeDZzfDfgBNkiZcatnmL3SGi3FdEEcavJwkddxM7WYSUoiRv552",
  "key37": "5oUbh8YtpPvbz9LpX37mQfVNfRDSmn6fhyBUyZqCGQevckcdb6UCYg26RHZcVisJgDGSsY9JASCSN8RJ1VaCM5wT",
  "key38": "2cuyEPcJx76XkaXHJixLhE97iTJvrEyRn8u74ezmRTAKmANDMhVxLbhmZngVC5jc38ZeSXd26FHwLoMBTkZK7DMM",
  "key39": "5qk7EtjjssQvwyB3a8D8GWhg92VFy8XxkEa7JZmQU1i6SJyV4iRj9ijWJd6mhk653Ued69SHZ6FuRMtnbGw6FshN",
  "key40": "125mfSuTMnSr4rQqZdAFU8pSf42HosMNt8cb7rDtaV8kHLSwsXy5DdqbahJUQqVWn6DHjti2V6bnxwokqVnep69a",
  "key41": "3qYrszfSPKFHRJSKct698URtHEbv7xt4iCuNjX6gK51T7G7p1TXX7Nce1hos2iM3FMJ2Dj3XHSpsGx2nRiUxyopF",
  "key42": "5Ycva6sBuf65WqjbYdLeJ8M7wakAmwEXZP1suJuY83Wxv1gg8trJ3GZT1MpWcyTb7dAUfQQAxirJsE3gnpFBjpeJ"
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
