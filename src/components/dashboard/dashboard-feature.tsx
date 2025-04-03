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
    "3dja8wQNrp95oArgm5QhRCEErUALG8pD5tqaAkfmUPKcMPNAhGijV1wL9GWQRSGnLE8cvsGSiZiuXia6pTd66ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsddpG5NEumCY7AKEKgGrvkqV5ezFWsC4gMgFeNy4cwu53zfRvsZMRP6m94qKNNyQKAj7ny5dCrayzzMTZu39oX",
  "key1": "NZ78abcPj9uJYQkF8dtEbABbnLBquPH8SfKHkkWCbJDrZcAZJcctPprr1gFpf9DXCjoTQjNdknKaWL1xqxEGUzg",
  "key2": "2rBUoXXzxvP8XeBg4sHYeiKnMRScFgX8Z1amHoqjbvpiKqYvm1taQSbBi3c1x4RK7rQZrFRvksjs3i17WCfZFFtJ",
  "key3": "4mp82iBiZKHETX6H6sbGpdw2Ay8Bs5wFG38gDk7fu3eeTWmjen6XmUrHRDAZ11RbnEDULhF6hE5rMVunXrmNfdjs",
  "key4": "48NSgRTxJ86kfXsgrwppw7BtNuieVQcjT4F5r5fan6oL3KRZX2astDuJ7PNRzJqzzQGMWL6jxReqbo4yjHtCxhtV",
  "key5": "if8zGYPkYnrEND7XPpKXNUBGd5UMCyaXBMX7PWbiZGAqzE4QTSHaxcVZbSzrAPyU9ofhY7M1jsFHHk5StEaS2rr",
  "key6": "4ZMcZdLiZ5VzTAEDrerLm7X11XoijoEqS4s7wdqBSTbY9zG4kT3A7XuMYzoNMRFDjVcLxSttPxDAyWEFGNFDGCVm",
  "key7": "4jRSGniWKWbj4yALP4p2ykHH5Mgeh2csrE5SVQb9FdTqS7Hv2N5mKfMAg85w8LjQAcD4wxFuEJFw8hk4PVY2hF79",
  "key8": "4koGnN3Ttc1v3x6s1VZthBCbK9QqUH7xrHk4hgCfmCpdy5VHmNvDWxuKMij8hAh4QtLotAyziYV3NMbTr9zmCWyh",
  "key9": "DSJicndQ8KTb6Pb9bpr7gJcUMeAZRgoAd315VXJ3UWu8h9W1SD1mQXKAAtNHgx1Ao4AHwriyuKjhtyt1A6BEkju",
  "key10": "rY97mZ7CrNQZvoFion1eaApfkna8ZsEe4V1U6hEhYeiLQEwNddYGrn3mR92JzqLBNKpgjQCNJQqKPbbqNxPpZet",
  "key11": "kU55PMJmiA6e5zeApsMnt9YvcN9hMS7optpFhtoD3quuMw2oJXVEmKvFZ34rJkCBh6Xk5ahBw1n2yNqJjQdFJjZ",
  "key12": "4VwcnqMBPkKpG1S7pRkYcdiuZ668gkVUY2FNH8wg7fmsAUud7WCNKKLPE2dkLhGVpvByG5grjF9uVHKf1xktsyYc",
  "key13": "4dCttpAvRTCs6VZFBDDRXaQKR18FoufojZJA4x4eKABKFAXyo6akvGqHraBFDGZrbBb7V1k9oGWp2eFGveaUkMBB",
  "key14": "5GGHwGEzytzJW3rQn7UQqumJ7YPGeruGKwWUSXycCoVsPxyKyWj7LVtso9TFZbwZJPuMesna5k7fW2qeHToJqy8z",
  "key15": "BhGpZwSTfzs3LuBb6cndSbZh64F7HZPt6iRdG1Y6JQ9kGX4q5HpBqyvpCpyMUCo6ztHZqQdVxw1zHVrSpqtBnUX",
  "key16": "8MQo6xniJMxtw5NBfeQxogyMokJp7Lp1rqR86UBK3yWqviUnd9hQumvkiWrjdC8opFPywFhX5EpShqDCdcdpfYN",
  "key17": "22oXyLTqGKU76L4YoodgUVsCr8nZ8Y6WPdVR2GrTkGqP4v6rCcUbLhqyFkHJbmn5sM6YkuKFTmXvytvnRbQ8kUjU",
  "key18": "G3kg8XqTijSzALjfrLazbBc3PFpmhYCDatwamGsR4rcSnKXdVL1yoyXgiZq4eTvBqxquxAQNtHxwy2nUSnEhko9",
  "key19": "4pWppRVVmwutnQAv82gHLX3kZwd7uGWiq2uYAMboXxfCVFph7TzyNXYD6z44L6D2h2wiFA8FNkcm4UrTqhhqZvwm",
  "key20": "3tWQKAM64WEWw5DbMhyDT4upPvnamzgiA5TyuctjZi75ivoko2SZhJVmpK5tXg834Jzhq9dL7WSjisCnMwCq4bMc",
  "key21": "ZXfpnMBVvDmXPVJxPGTeWBNdZUK65Gh38gBaDapPTWbKQsoAdGCHVqErYM1qy7qHk5rnHm7RK4RANAZQ3nn6Y5A",
  "key22": "k925H86WXuTCUwfrYAk6z6cyRRb34YjnUXTzQy9rh8t9BAsoU5jUZ8yzFzkWacim9KStmVpeYyZNKDHYNYhvmwS",
  "key23": "4FEBLpS9zCvzsVabDzi1z6c1nEyPsZJW9erJEjJ8is4ychn6krNPhRPjzYQ4Z1nX4QbsevKPhQHkQY7npCJA3uHi",
  "key24": "2xQsWwBEPhLCPWFcVAhrMJDkfeKKQkhZtcJMLBj9NpojQ8QsMTwomR7CJtWi6yGbQLqR6dyQe3RMmTgM4nRu9GSY",
  "key25": "2ksqQJrNQpRtyZuoFy77WCtNoTULMvpgninMBkrmtit7cA9T9urqFRiCvaGt6nLFMpdrhr99xG9zhZTXi235X3hu",
  "key26": "59ZpkwgYEqkoyQknHcN281knnLqwxLUWBY64tXvwLZc48dDZSEhBggAGxH3MFoPXrsiwvXRdEcid96FHtipdddUP",
  "key27": "3MnhpyAC1EhopUaqFFTdni5ZEMHEDgxSEGntQecC1gXqmGxd26Vx7s5TLD7JPumrJCZqeiZigMz3MiJx2ocx3Bwq",
  "key28": "xzVHSjAby9wwEuFzdfhV5Z2umBvj4JUGYfEmLr8UnZd8aneVtNMCRQhwwQGyzQUrnw2mfnPpVKQiTHf8HdAjYa3",
  "key29": "2qo8d5w5ythsH3UTqPi5WihWK6qxzycBbdXLyepitPfGSXF22AZdP41WhvFoq4vaBNu8XNPYHNyQSuCbLq3fyrxS",
  "key30": "3aL1y8QL93yatVJLWKsJm6v6VrokyzNy16o2ZRwp4D3eVwrgdiE33jmWQ6Q61K3XJPpd2hin7nNpfVq1Mrisaadx",
  "key31": "59tZ1pN4UTfESyZbVcKxwwZNr2RkqAEcWBbFqw3RDS2bLsS3SFtfcQ9LeM6f5Ttv6X8Bf6wobXxMHN4FPzCN2wf7",
  "key32": "3hbmLHU8RcpxpRbvSfpwZwM8fXWbiR5ohdXCst7ZuSdFfyTmv1d5Ep88Acq98bY1bTDwhFPomexz6m8NAfeS3GuN",
  "key33": "JXCWD7ogUCFk1baJYxM37tAU6fzjFRescGYUFPyk3MciYqbTLVKkWbDWCxU5z1ygsPNbkgNrXoZZ7ZfkgTcQqo2",
  "key34": "3HGzkFtVBNuuWpHxJohSjXgG8mNStYC4YMRQrqLdWQLogrqj2iTWbjvgZ1XtdBKVAfyZCJXB5YW3LDF8mTjWFXTN",
  "key35": "QodUHRzGgUPJ7Mb6sdDj6eZz4JC1jreZUW67rfNBNmrW29zoDGdMqPAaXrBDwaiJ1afwrGY7XcGdsEZGoB5RuDC",
  "key36": "3BpEXSYatJrc9pEdZnhhyxebkLuT6bPkLmSmQFK9HtiDyVmjxq9PHbeBcx4YJaBsVHdMUtdB7Ve2YbeySQtNuhzS",
  "key37": "i9AbTmFCditFfVrsx7DNRyd7LWZTHmfH51byNPGpPnecjTHHHjHpk2kX5E6oF69TZZaN9kASUAGtvUkhMVAUiWn",
  "key38": "jy17nKafBnZykpVrcSLe5E24H5xRFSFnvB5QcAHBftxoE7Mc6b7FBFABsSyUim6a65E8pogMRn6UoNhXKkSLNMB",
  "key39": "4xvJzQQrvRdZk3FxLkkp5X9pfqdJb57Yvr4HEFGKjoEfKV3nfTF7zupWsWdSVxr1nMsZSuGFUHZFX3sVKEjVMcZs",
  "key40": "2DKxs4GikxLwK191NdVSAaXy9ShA1d1xtd52vmx5pCwLf1ALjwtoZzEb9z6GY4oVWpLd3roEgswHFzYH2NWbSGPA",
  "key41": "5QfAiUETnKUkRHuDvSkBFkCSTNBVtco6HjKorjsk7tBQZQdWDSZurQpCVazSZ622CFxCiVcrVxwTuoicdWNyKBgo",
  "key42": "4vwa2uuEKVZb51UBuyAn9AtZv3H4r62uM2sNmZuXVLL38ymt78KLnvd8m8REGUWvfuAfYsiHuQCBwxTPcjQF1qG2",
  "key43": "5yus7L5QMRftAoNWQR4uEBtJY2wAoMFvB2Cjk8g9tvoCA5Kz2EDbqyRGQFPqqxGkRiyHuTxNySR8K1bH7Yg6FeBo",
  "key44": "3Cq6mm9MmtnCPzArDb5AVyUBBu9bAbXQwndvCA6AcSZKigHwe6aGBctxX39q2PprNFPcMW1xkzY3Zn1fyvMiKv67",
  "key45": "66fbNuFLLynaRfK218p4AQML2VuS57bQ2KcqCUCJHGEXxFBtnECp16ek2JHdRft8nnyb78CPD815TuNeFsnEfhn8",
  "key46": "37T59sNbusGdXQtnH2NvoEEUJTDoKftAd7Mt3CyL9iF7tjyYaY7k6GDB8pFZfYK4JhuZnu21s5LpH9Aob7jsRjrJ",
  "key47": "Yyw5ToXLRA23LAQwDzskHtaGyt9DEbG9sLN9cvn7Cz4qLgd2iPn3i5Afb4ix8zxD1LDSoNUVV6V3hUPccNBpxfq",
  "key48": "2Yodo8VfhCweg7m2ye7wYUUMGCFcYW2CXrJgkqDAKBC7rTtwMQyJcy564m4wfQzxxNUo4TBfnrdC2srDd8bNaAVm",
  "key49": "5XcxJ7pGs5vQ5ZumUadaXiwrhY6XjnRvrVVtsh2WvXts3yKdt6ML7fWe6iaUkSneYPxN5n159kDoWAsLuo3bzLVN"
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
