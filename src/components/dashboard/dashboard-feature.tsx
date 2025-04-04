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
    "5FypiiF7aJVsjCcVhF14Yq3iqy9u46GE3y4vcu8cffw3Z8ymnPKg1SST9kAdtASzahPrpksuyUeg5hG3D8K85UK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjhioxiMHoBFEoXpiy3yEUtxDAyTEjaZLZVguziRDyNhdEEtBVHF4d5YhB8wHnmWaFTabqi2uvPk3HPATDj8vRX",
  "key1": "4LndtoxQCX7KCgtd5K7Pe1PhXHkUXtm9KxdrbpU13SjSKrywCCPtwYbS8p8Ua3f2HtZgoEWh1vGqRWWNXVtnpzQ3",
  "key2": "5UgavWwvvEffU7Z94e8iB2DsHw9vmQKf5vhAHJPN4oUN5yg5tkhVRH2EW4jf3dmL5Syw1P2LqLyZ5JaYduyRnBDX",
  "key3": "28RVeMs3YSqwkURi2D3HLvDauhRTTfQJc6XhT3xUWyib5XQg7ezzsnFd9JzkmXJzYCBrHStxQb2LQC9x4dq412fZ",
  "key4": "7UEhpEnh9DmhVVKmyV9h9hZPiqTiC8Ei7w7SFXGMed4TbEjgFg5E49o474jqoyjVejFL4NWdzNBzhmwQ3REt9rB",
  "key5": "9MC2X41KkRqJko4UMzfvjqaq6NYcG9A5NF9kw81wTzHLE1MW1MShGeFkZ2Q2QEUDuzZcwWShto7AGamt42XzGox",
  "key6": "5EzPJFwoXg3pw4QkxMHuxj1wAVQEnA2PzYB8xsfvwiS1YmJUNhUaFxMV6hYioRp1Y2VrE7vgVp3yz9cXoduPBYPd",
  "key7": "3proyScEEQCErXNG8U91E2ZcNbaRdHnpLamsTaA5UpLuKazDeyBnMusF1SHfcz5RDDPo2K64UH4Y2vReGGBgtssv",
  "key8": "4QbgFewCaS27f6TN2HyqEm3bpaMqcasMNxt1jTUPQsV9B87bLb1pStuE8J9yj7kEKVp4LwrbaVg9q7VGU6nvRNK",
  "key9": "5rbNbUA3NpeGbnAUsUSEASzDpowSoWSy37o5q7P6XbLueadGMNggJb9ngpEhL757LL3QfqDJ5wyYe5GZEGxYtgWV",
  "key10": "PADUrCzVdJEra5db8v57hk9WHhftEJuw1xSt8buQMkDhnVGFvmqGHusYa3gTo2ru2RoXQ5yrBtfpkrBDejwru9r",
  "key11": "44Dbmn917wQjrahhEhMFZM9yyi9i3RpGfH4zsCnRvR2WFnEKPmNi2JX77LYXxLciLJiU5LC9jGEffTtL75HteiaT",
  "key12": "xwnmNC94GUtbUZLKH2vBUWUEL4esDX2PjNv9HuPhCymgtBZ3wpQmwEoq8A6PyHM7cHka12mAXaW5NBaAgWJUsh2",
  "key13": "2P65QzKYAZtahfUGSpuHB9kaaEQG7HWKqcxYAgQ779HLqBjMe7xpyf3zZN3CZnEBREGEkKYTLmYXJAPmf5L7cwMM",
  "key14": "3UtVA2K6ASpUN2MkEtftpdXfjxXPoiUTs7iKcvkJa8pAC7w7F1k6qCB2azZU6QDDocYokrDTLL2swMaKt4ddWeez",
  "key15": "4gicfPdtb8maDtAo7MbvqQ8jXwguMd6ro2PiFSXLaKYUoUkwMN8xwKrT3PeW4GeKQvq5c47kT4RBufJJ4fTZvkCE",
  "key16": "2XAtDo5qcEX8caCbBFRPWCJJmVnnMKdffsEKnmJgG8PLUPLTFsdrDhGrR4NF2AyReAa4bB5KbLadhPvMmcPuVT25",
  "key17": "5mbTck7CcW9FXhyo92Cxskv8dDLxyzCJRADpcJeaohiGD7LNARtmMiiwrgsbeCVZMdyZkDV3njfFBHX9ye8n2q7P",
  "key18": "2dyjX4fDzGRGtmV6nyhiXyF5isuyUKKqYrVdGi8nsEzqbTYUB13x7NRLnqgzeLcQ2KtquQf8RuuZTkM1hcvpmSGr",
  "key19": "3g97zWRW6xUARZ4VmPf3R3Gup5PoLZFreM6R2QGQXqs5KZrow48xZ1drkYZEwM5xTfCvmLXgrvihc4SxvNHQtsvu",
  "key20": "3P34WiDwWg1ZSz515a3Kdb466UUGYVb87Vs7QnDYeVLLqofKqN4TdwGpLNNsanNWAcvHzJJTKgAiYydbCmEpZeM3",
  "key21": "MgRCv49xJgEy5ez2oxwkv1yjJ776vDLGK6FVsozDVZMETA5WtSDJCXMiwT76srJ3188kHdRoivkrMUC5ri8EmgC",
  "key22": "5wdSnnq62SLtZuy5RwZsjTuBUfg5igg4V1mXRtKH8b6k3y3WrqfTU2Rp3yzxEyNkn5h8yk3KVxC2v6QPvapk3McE",
  "key23": "4qcvPRxb9JY5RS63qAgt2oSo64hrPNfha4djYGGyNSeEXK6o86mf7ib9fh7wLiQqkMPYN2FfoRRpyq2CZ33YqfpX",
  "key24": "5urY1dGpvKsX3RWKwAyb43CBkiWhFg7RKxC6XFSpy2XN9ng6KXAns9Fy79LjrVvHhH2mauosWYFpKxuXn5vpACCn",
  "key25": "122cjvWTnF2FiQu3XCTqLDR4Nvg7ZCdTfph3YTqK2rgaYRcGSFdD3Y4mMDdsPHcRgzsKPWASKSErmvXUnJgAG7EV",
  "key26": "5nqmSdaJuXswncuQaFCxG8YtqkxB5BxuMLfzSja8znnrMzVXcxaPHxR3GxBH2J2XBUQhkP961wAmEyA4E2Y3ywVg",
  "key27": "6o292DSAmkVSEJ5eWx9xqzPk66MdTmeKBuNLSbXM6qKRxyrfEjzjL8B8mzE572D3c4vHkngkQfUwUAdFGqCJnsr",
  "key28": "2qReiqyejKLeKjjdbrvGLFjme41HBU3gc2N8xoJyJTy3DfrB5273iekUhxX3TWq6F8Fiq3vPQMJecx56BxGDBeZa",
  "key29": "5chcQbNHZaNM2uzn9J5tkiojyKngm1VUnqHjEmu8qnmNhFtXDbdgghp3nEF1zFBqQcQo94hmbDRvCGryFhTL6MDb",
  "key30": "tAkey6wCwzSVzzyctJBqx7Sn8AfnKvzC6xajnMZb4SrQyGeh5N19v8oKGrYp8TdTwGQQCNeRT86CpMc7DWNa7Vk",
  "key31": "5bN4ZanV9Pv1hqo18CACBfoswSZ28JELyJum2ykfuoJBkq9XAbRdcwtMPh5Ufp1W59BV2hyXQLKMGTencNxsAVhb",
  "key32": "3QcbdMbDH4McgnMmtmjLPW6mz5KYCLD5ABnGJYFn7avMvCgCLDfbi5812q5rswJrksJ4vNsRVLMt1PEdQBRufvgW",
  "key33": "4xethJeRVcBAd7Cic7fnBKsZSrxQq7DyWBQkmrYwaTKnDEugxTeDSy5PzvWDQZXb1xBG3fHTTuwtd2BWt8gXM5mf",
  "key34": "4hXWLdAGAq8qvPDinoMN5vtGtszM7Pthx7a2tDEWwxg8q5Ex9ChXWtPxoMcMqLA55iCtALveGfZGoJUrKTyVJs2j",
  "key35": "2crxrbUsuvPF8efmYgXFbnQqxqLfhw2tHp7k86UdagajwLdP12gHqUcbU6J3ndUzeQchHbao7q976kLrSUw1taE9",
  "key36": "5AKKwLfsSCZUm7AiYgskt5fdHh7qfoehgWncgScTfoXomuZY44B74D2MHnkix2unvbzcgX9rT9VHssXuoDPiK9CH"
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
