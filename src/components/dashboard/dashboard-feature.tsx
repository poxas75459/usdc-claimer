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
    "37Zh3ZnSVKX3PG4vmY8xNs6bN9vRKB4HSmbKiRvDJgr2kW3vkTDLFb5jfa8riFRFZytRVcHErdioQZvXy85SDtr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQogjCvGMpqBqFTteZS4jjDx9zPNiPRkTsxAsFMqRCW35sQceaaYij5BDwWLQ7EdqVxRSLoe9FJHVWdHVPtFW4Z",
  "key1": "3gkKqUihGe5SYWuS7UEJutAuKT9o8TTFpcZCgR6vJbHq9QhHdVaX3FMaPHRPCPsnA3mRVh8FwrWYNoCub37Bvaf7",
  "key2": "QbpYmmp7r3eVdUxE4PXFDoaE4gJFmNAACHR8xtMH3zD9ZmhtExJYaQJBSKBZ6f9ciMgLk7nuZHS88PHEHiTstjw",
  "key3": "2bmKwyXJx7DcFzAW1ck3A9aB9i2zGRAYJGKxpLwmFzJcVFPJ7w4UvZaEEBoyjYeZd1GeETd3ShnieeRJ6171nLii",
  "key4": "48fS2Q7Dk2gdwcB3z69uEThv9utTDBSft7y24TVjy1xasMhgwcbcoCFvRXL2qqPBkr4U6RvXnyMo45P9t5VUTeER",
  "key5": "4P8FKsxyTEe9UcccMgo7uWkH3uWo4stgaAJaXadBCw3u2LPP4N1bt441Z9i6AQEV4vzHXYSA6hqA72w8YPtDRVyg",
  "key6": "5JGZ6wxJJp8SrBqCPrQ6ABPvV9r5Q8Jrg2P8q4H3sDZRAPcRDmJkYiCQYg8isr2vbBzkqUQkdFBZhrzRUUNnTxZG",
  "key7": "2dMnwD8QMjgX8xMMA2KqH7u829AajNG1cECKSYNiorqyrByvpKPkhAQR8Xg5oc8tWfDvMkYVey3hrWTLbk6QAjiw",
  "key8": "3LnrDGqVwxRonR4UWDH96Wh4PWfFTjt3j1qH7uEwX7zgbYcTEaR3P2GcpMXH2woNzVw2tRdEkQA9g6TLMv4sp5iy",
  "key9": "5GP4MNctzYExFuBptLFEmaoLw4zfFh6kPJCKmqy3MVseVFgNeqVQTjJw2UxBW7LQpMi863b3iYpnUMEFPDEtQFCd",
  "key10": "3t5xEJybYg6m91y7oJjZhBd8SNeioZi3tL9H91WCYSDWgT8obiFQSLgCybM8zjkreh54UQY7MCqJbwTetX1KWH3T",
  "key11": "5SS2C6mjYVeZYRkwLFrjbgvGpqe3Jo96T3dxvEDa7r8i47cuA4zi34YRwcKeBzUU6jsxRCfJKH9UMmNJvg3DP6Vb",
  "key12": "4QSJZqjy4yvN8cng2KDxBQtiGCow1NLSQa7hJVzhqcC6WuVKjJ9rgQChC1wqRE5yX3AqPRGNwM6CD1Fjcx1wcN4r",
  "key13": "UYxmxc9ps1zNRWRmCxDwAY1yqyZwemgQgNGykPkRBFH678afmvBhx3ePskFUP2pKqQLfmfb86XCaogt5dZs2ayj",
  "key14": "KAPfezCwkgaCua9PMFVF6qg35X8RMy3WHXaHVj4uMPUXtQxYbqZR2sDo3GzFEW1E5jjYreaksj6kgzXWQfN6ezF",
  "key15": "3pqzcTom87naW1mofFss4CiopEQUVkjfeLbtHb47qyf1THYWXrLokb57LjMggTEipK6YviuRXWQNH845CayD5SdV",
  "key16": "2SDVg2NzQcQ5YNVnZmxCHoKbmgNpioCPNLrQ4pD2n2wHCTv7mTxkvbQ4SC6ZSw8HCS1YfmyQH8eZwKDTTng3xd3q",
  "key17": "2eABUHZioGrarJfy74PbXY78hA5RH2MQL15Mc6D4xuH4AvNU5Lk9hA3xM9hxhDUSXuh9avNM8RPRQty9KF98Rbqk",
  "key18": "yyfw8WdYmAijNEZnWiG5febhW5hmgkCmcAY5ghcUX3apBEVZHv9AovfgzkLNCU3peY3v9bxNxzMqqDS674f3aS9",
  "key19": "3ZgmTXEHasUwv15W2GThsh63vmjC4XKjDgngJkacct9Q8opTzc67aLDJiPNHuzh7yv1YMvbrBt9LG85GbrArnFkJ",
  "key20": "2BexbbMsDrBxRN19n1UGs7Ye9eDCB8wLPmWF8FrzaQd6QZTnG7mGjfa7W545YiviPJBfMYkpW56tXjsN9JxxWgyY",
  "key21": "HZq2N2k1kWwpBc1NmXWV7m38yFUgPDFYZdX7QfB49t27KVKctwpX7jutH16Sp1ny7cBJ6xWaGNCx542Xr67XgaX",
  "key22": "3rKQhFQxg4Hs8BPZfRGAyREECTZ58FdpVgeh1fKEQDVFTt6vuuqqYrQoV7mL4hu2aPcCUssdoYPcVLbw5PrYjy9p",
  "key23": "526rrQAFbPxkxASh7Tc1H7G24ugpszVhCDhf5bJ9ELKPEXwizPwLwjBRKioctCUkYxmbk3L24f7j1wPwWpw2TKHD",
  "key24": "3rYQQcRZ1T1PeKYwaUNLcBroCzRE6ni7JD7YHm2feybaUqjqoBnRhzPoNjrTnES4hyuYh8K2sTnpXnRVka76uMKM",
  "key25": "3FcBEa9g9Qy7owyEUUiZkjEJ925cSTL9nwy5PBgLtyXoFcb5he8U3TwndMbBRab4err3N78kypkrZ2aX279o5Pfc",
  "key26": "3ZEvJ84znQzTVfgWxPnWqyZ3Lyn8Y8F6tuhxwZy98CSiYAfSoEqBUDDUqySLyQUPaDZvZr2xnHZ4yKDyoacMGFna",
  "key27": "5DHd4ZfNsggMb72JshAktPsppjy4qg5CuFGwYghfkswN4RnFxMVzrx21aBVdsUzk88MzfKeGD2vYD7m4LKhweWEB",
  "key28": "2p6uzyjFX6vBB2QgxJ5Lqa3WUW3w6LoaMZQRToAbWzVm7Q5aBGUZ4c55WFSEzvy1foxky2gA91LZawQbmW9xKCGC",
  "key29": "YFRoYw7Zk8NoLPYJExS1bmp6oiWdMSo7MGXvi9bL37mwqM13sXLxMxw4ugr5HHRv8A8E2MmHszvVrr11bYWRnPu",
  "key30": "7CtPgN9LxN1yRedj4KnF5HxJWLZDVgKBAPLvM3PxefDqiZgtKCjktnjHTobSy58VTr5RFnzirY52KUh6xZ6HsmU",
  "key31": "4gSA5cSqfHidm8kUCiXA97vfdpouo7XEQoKMhLYeFP1ECVnNRbbJJJ7p9kaExmJhRUBwvVxwhzYaQTnFnaF3CmMB",
  "key32": "5ZYrYuge6iQd2ppGsipooWWG4YcQ9gFBpZvGD3Aea7gUs6Nnc2Gg24TgZjVgm6QVC1s4pRbyyxxUbSgU4USZ3wNL",
  "key33": "2NNNkg11C5by3Eu55gcChAJKSbs28E2yYSLVo9oLHJDC5mGbAE1cFLkzV7iMiaGmwRBn5qhLjhdpSf574z1pjVaV",
  "key34": "3ywwztBSbRAGwzJbuhtUfBmJ8oPMJpPw64DMTg7pN6xgVuB9Adc56YyJSw2KAoBHYTridSBy1HFbNSHuLxLDcxFW",
  "key35": "2K8CpCmGBNRuFzvafxMbq2DU7s5AYghCAMtFyseRgR6jEKdjbMUxpzVCmnGS8Rns68whJ28oPNKp48rZjXLaEFrz",
  "key36": "CUwzRdsKNuuumdgTUQ2nt2iCzRubvvSNyEho6Pf7LNRbxckJRHnUJLfvdMiFGfDggEnZGdAd9i6EfCEbyJrc4gM",
  "key37": "4AdvZd86hkD9AXzTiCNJjN9R3HXU5PNBXLYzaCoD8eAmPqs4deQXdAgYdxPXuXAqC5teJz9SSswzNipQLVs1miEs",
  "key38": "4mkriZsxgHxoQdQDyimoXfyq8ogGab9P5L1mVL3E4E4ajU2rALSRuVwEDrSBSBn7UB7jUd7V1RNtagrbqTxdCnTF",
  "key39": "3Se3x9J5AaJC6hL72VtzW2n1ZpVPCbuBW8qxUWyZLDKAujwhZ9f5zv8694svxmAPxovp433m7NxzeXYKb1WEoq85",
  "key40": "3g2j6Wtq3P8PbiyJsnuboreE1sHFSf5cGbiTNaubJgbtYYX1bY6WCNNRJv3i6s2TuMeeMveKJH6aAJyikjUB87rQ",
  "key41": "4JTDmVH5JpcUaNqpM4iG6Nh9PUYVPn7X3LYG773JApaRuiHQya8aucyZSCub9TkEygUt5KworysW3fR2bCNnZoyu",
  "key42": "64HhdTawGt48p4tqhimSRTtyUYVe3qkAGd2vbG1erjs5DRV2EBV4k63xwm2aDje8bNzSoCVeivPkREpE6qUvULys",
  "key43": "59Kja8NZQTPki5oqvnDDPpkeNc7pZcfUxHs8mCs6Z5mFnkcuEXt3wuxEmEvTxwxxhYkUHrAgKEMt5z4rcJf3cidM",
  "key44": "5KXnh8zHwoWfxVwEtvxbuS1qMHBcRYqfrxR6K6RbxCH9anZMpgki6fjovaehmX4hoPZDSJLrrt9LBG9c9v1Mt6qm",
  "key45": "3KogBsbTzWb5ujFSC37wot7zXwDzbBJM9NR5GE53GA6jqQ7bTRUBYu43msESDw54HYM4rxQvtPvedE7i4rFvZCBy",
  "key46": "4Cex1VCuxyTGjJVEtUXPzix1Eac51yZ3pvW3moJNpE2Gh7H7YuCJA1oHM2bpg5XP3dhdek2s8Pbdjpdc99CHNFBn",
  "key47": "33cnTtemLvjYbhA1tfJAEE5YzzBNJRAS45LFUjzi7KEAStw9GQuGobSAia1ho4kP5qKArpxPF4tQ31AB4Z2sEoYj"
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
