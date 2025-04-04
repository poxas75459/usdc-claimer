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
    "2KoArFr9fzbKb26coQsY89AHV49vKtHpwMJim5QDJJ8kcj9jMhoL7hbWX2ocCTKRGjiiaxSQazam6az3ejar5VVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "588SPHwgej96xFUxrfLtT2gzvHREH9oDkKGqtMCEmz4r2TGxnAnxQiTWms4Sua6ExMUGoveT6aRg31kLqLWtLpo1",
  "key1": "2p9NgQCiy1PLKzz47zRdH6T712RjdTVa8swTjYbSMrHMjCDsncwXTXJQsh8AnEk8WQgxro3wWeGR4PXacZEbXxTC",
  "key2": "2J5yQBnyzPC8G7BvmauWvybDssytNa21TMyHvRi8X5ptjdifmkHeLUbuNQBrBuBNAT6bfCAiZQWNXve871Q1Nogb",
  "key3": "3N34Ew4gkrEucBubJx4viKbhvuwfFrXQGVRWJsp4Mj98cGPa25MuQvBGhFTTkrbudX21W1VWRydtH5zksMSVMMJb",
  "key4": "fMhZyEacnWdcD4PS8oMsuwM5Rj5j9x1cweVzzioVucDFdvbgZ4aLAUcAMWt3Nu2UDeRyLg2eqe8mqTa6DdP3zRb",
  "key5": "y2tkGHCFxM97NP2mXo8g6dCzj14Z3Vz2esdfZ9yZHMEFPoJgbV9qAJwJPWXaSiMRfoTdPiPVheSViydpobgZmHA",
  "key6": "3CMvynA15JNxec2qAzDe4nK6YsGSvm742ZRMedJjemdBXwCTELnhdSxMvkviXtuYwSmCbHc7QQ5pGX7FoXAQ4ZNf",
  "key7": "3nk7YLK6dHXRjYv2NaVUpzmiUaGGRDF2bpTjyzVmqQpcxi1GmFpCaesBUvQ8FLaaSfQuqgkQ9devY1rHCgmssxxo",
  "key8": "3oTW34S9nR2STtTirUuXwRn7b9pLrNT7UjvTL5ysCHa6ai6XR9KvKafunH97VAkSWjK3AhUyRynFN1VK9Urg1Ao9",
  "key9": "P249MVPZRPj4xZZpd6GbRtbLzq84BN1vGJkp1F1KxqdULATrTGDoXUguZHYceUEExFiDeFZGEaWuCYjUGFuZj8P",
  "key10": "3drYWndnrpeqC8Lk9qo7XyUmshs1WSjm44JXzqdzudbV2Z66TtFGZDuTGNaTh5q3yg4BvPP24vevCeriNfgSfyyd",
  "key11": "5ACVcmzLBe6j1YtTd432uc1Xu1AKqi12XpZytFyxFe2ebZCtYArg66rCjGKBuyDe1spH2bwDk4XeqAW21yazQ37g",
  "key12": "4GDac2vogfXWSmxv1tAkzMnfqvAWzQosqnHkebZ9fwaumR6KW9XH32rDNqtFUBbRciGHRU7CMgnS1NTzmqBBMGM6",
  "key13": "2Gr9sxM9n4R6wQuvnFipvQs2rej6GAHE38gw1XjTdboCaR9p7qZX94urEeBvmVobroVhf777AY3EEFfpKfAFg5jp",
  "key14": "3UXvxRCNYnT6Bh2bL26m3znAPKMMt43tMHLk64yt8ZFWkvYSwTVTWTZy1351tuVLRYV8FK6mJYetHDMJ7kA4jPNJ",
  "key15": "3rZVmAog8dpQB3crD9LZcctG16ZUajEfXzXUbMsUogniAJKQnVyBQ3covuGpo1JD2qncVA3icDXCe9F5RNUcVvZQ",
  "key16": "3vLyWmEaSp6uq7ksTSnsKcx8ngLzKQ7jDMNAQfTHECFV6ouoWGjbW6wLbRdBHz4QJkSUggrxBAvKMH4h8SXWzdX2",
  "key17": "5KyzNEMwH3zT9wbWyRiQoZVpy7gZLUET7zvbSDeePzTJgkCJTyWZ444zTZAVhfew5foZbv6pc7mbc9dJm1JybDt6",
  "key18": "4UTrZXPkKiXc2VBh5avL7BpnHzKCNfArayKTHe9uvZqzDo2wyxas5XJA9AaZeDeYwoU5AAktaPW6tfHK4MdWkXM7",
  "key19": "64odhyEgrnoaYLNjZzpJ3G3TjygResCHp97Bv1597eHHYtQ4Jr8tZGJnoz4aX7xLexZHRFzZWus8GviK3Fudacan",
  "key20": "3bcMZGpUK6rpir5BeKS754XKxzCUqN87Ri8hVYp27iuVKt3fhxpJSjDqwRjuowDSzGmHoq5RuVxwuYR7W9DpXM6z",
  "key21": "ia6EsD39LL8gXoPZrtKZVwGC3gEbB6xnHJpAmSJhSn5RcGpDnY5pqzyQeYnYTer8h1y5Z4PVMPBefy2thXgTqKX",
  "key22": "Ud7henV8YumGatpc7ZCAe3eByHT8B1ZUxnn48ypeQevRYehPpFTdznvbMMr5oGPtzZYnmtXzYHertLEgiUR4m7x",
  "key23": "5tdNsLi71Lx9UXdRF2eJbPg8vDsYtDZjeDTUH1VoAH1oac8ip2QveKtUVrrqAgiK8LAeEGCcP18e69BbqekH3ubo",
  "key24": "3a2djnpHUxHgPrpfX6VLcbs5tya1b4XkqJDMPf1yWXSVtfroF5x3GiSbXoXeUYdwKkyFkSC58nsEbwucuT8P1P8z",
  "key25": "3uEwhZLR3Btva1tHEYv8tLdzYk5bZ32YYacvNEB2MABDvZuUrxi3euzfd6W4R8hqSvLokecEcH42jsY2vGmVy7hS",
  "key26": "3VkQiZSkk8WWCp5985kvTJX2vrthZERbdWb74p6EhuyL5UHCeFNA8BGeP9Kes63s5NWktmWdCt5pT7bXK1hNsCrt",
  "key27": "654kXTBkQFVqmxYvLuwTdjFQjvTY73tVLMtFaebgGKFCSrYw1s2XmCnhbi2RKhJnmzMHVvNJhmsCHmoHXFHbt9HN",
  "key28": "w2U8JD6hHZyBByr4mwfbjpuHzy91ZmgibGojXCJan7ZSirVEadPNKFqkYNUipEcpsrg5987immoxQgLC89rGn7a",
  "key29": "3A3hdn29JfPTZMkD1KsdyWmtwimFaTk22cMM6qDvD5Sg1YevxHxb5WZurdHVfHA46ozYhVJybdQrkLA5qSxussD8",
  "key30": "2LK8vZtWkdymJtpBzkrQUaKcvt2jroqLgFjBak5RjtKxqVtXjsjGzZvSY3cEoSAKJjPVnm4SSF9LzqeLE9HJ33V7",
  "key31": "GdLzsCXosAHeXK9pyXbyWkgeGNX75e6yCLDuVxkoHeXhXgbWAubia2qAyGYG1VEv5c7RX11ta4PThsRtUcZEP3p",
  "key32": "4mp92nYzKnAawhLqKxvR9ap1Nt9GcSzgA4v1LJ8ghkhxYF4BjSFNNzzW9b1Q5aiHBEKPwTGdFh9y7oHVpcsBGMPr",
  "key33": "41HcrLVWUYHX2DKk48KPhw74UJK5m3mCBKW1qFc948yFqrgXfP8M6i3NCpjmRNezZnBL3mDf3NYE7JAuDpnMCC2J",
  "key34": "W3f7RT11F2PB6uToyPEL4ntMt2Ro1XVCqAERYhchFy5so6uvpxd5AxGSkBzPm4cGNhhi8WCfANKfP6bRpDW2b5K",
  "key35": "26sxtUgzBjqttwhuyCwfZfdExW7oEVrpmxfbTL9CgD2wW9Mt2koNdDW5L1Zn4ePgbFReABFj8YsceFmSWiCe9vKz",
  "key36": "5FL8pR9HPVMLEJb8THzvWeGAoafBjDctMeYd4z84dNWdNrCmFBkSEQLMyVAVHqkqoTfjeHmY7FpRCH2MEfi1b83x",
  "key37": "2K5Ah6fnfjELEpw9fpJqnNWG3LKELYgMBxgKceoUt7BygD2EQqyai3d1kepti1uqXkgoyZP8TDir6fqQ2uz1U9Rf",
  "key38": "2ZwdQeVQDijCoJUKfeWoQtagwMkYyfwCarpZ9sLXscWWW3WGGrEc7nyUoRHrThfeDhVERQtcGS9j9WzxrooxrjN4",
  "key39": "2LJoLJzRxGREruyBULuochSZCdtnpNEvwTjNBjw93JVerJpwD4vHuqAbCP2qm8CAmMRu7AuwGQNJfknpUwh9PFYf",
  "key40": "48xLpGfWH2iiQmCLdEoYRtgA8ScUgU8o4ZzpGUF18e2gNZS5ky6RzsWULC8gcNePqyzSta2HHdcKNuCH1LL6Ddnm",
  "key41": "hzvSQ6hjnaMiUUZWZmSZzXPHCSYGo2mtb1VddYCqmqwDJaKK7yHsRgwQjxjLdh8Mg4deREFb2Q5ppQcK7E8YdBG",
  "key42": "2LNfLmieP9wMpAbrp74kthCizRyZsmqaw88Q3d6SoijHDahZSkt9vDYoeAPUfr24oodUzYh9KSVGNfzfrjLDEg4Z"
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
