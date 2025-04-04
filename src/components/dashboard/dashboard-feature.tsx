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
    "568pUGg5VFLrw6aQs2srjdkCMkfyKkK69VadgzzsYRfMC9doMjjJga7hiYXPRV7FRNLz47XhdtXau5pbgAhKEVzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iNHh5QSVyfD7VEGJi1cxDscFnJPtKKontM41ezgWvzbuMjwXZ5Pt6XPqnZWr26s9TYJqHAtQNjw3ReNvYT8qc4T",
  "key1": "4Si3CfSYHhNSQuJ4yqASd44CzfTYS1j9gQh6SfmwTi8cyEsvT8gXivy2UdJ2JaFjwj5b84yKCSSv6oBn3vsh7Wod",
  "key2": "3rfPGgNXPeHf1TvKKtXnwXet37KygexXupKmXFJStiaX7xDWRC7L162AZiJkyHepwVmqKQhFnqS3Hr3B7hkVNttC",
  "key3": "4tbdWNjrK7LFWwcLpPdz5a3kCLuZTgwpmnnM8S4Lwri4t2yPW4DsJJgEFbKkL3hcAcnAUBBZdEeZt7AZcyodWbpe",
  "key4": "4AfJsVnn1grLF4iSxb2qdS21xYuW8MgUPghynWHodpzDLqBaRz87kC7F8DFiEVDQyjqoKcX1RTcjtVaVJ4DZ56H3",
  "key5": "2ZmzkBG2sYNEG4aLXqtZvLtMmTQEomhUpN8SwkAP6YK3Tjq7stmPoqt2kRejrc3vKspHPJCJteSLcV5DUZXPrinb",
  "key6": "3wQyXb2aKtXiCR9pwQ2T78UZkhGnWvcnsY26NHqtMDXCsYs2hWcam7hWTwFxRA8eaQfs4DDvNU97uw2DirEyoU1D",
  "key7": "2BCWKFLy5rRr3NaKtiCyttWPBFmA3uSksRCgLMQwC2LTEcvcSwjALDSvgJCrKmpJnhbcM8ZrprDbVgQHaLxBn4YD",
  "key8": "6pjvA2kU7oCDJ3o7GFN3byWBHM5iXk4hcrhXhXToCbqP1xkPW6RcunoCZXW18PDfvLALPVqKMxaJb3wX9N7RaVY",
  "key9": "38xBq5uCg77PTDgKHW1z7BVXRDdKtaB3UoDpi6JWEFvxMXSoZ5G8r6UFMabySBHS93J4CutPuAasW9vyt2j6M5nZ",
  "key10": "4Aw8MinK8JzeGisgkJAsjSUMVfACQYWFkvjjqZFSpLjcSYvTFsD5g12K2NfaLT2je4KDdMd6qoY1bGicfhyjS7HN",
  "key11": "3oKBgVxGsmJsqugsmjbR2ynLT5unou27K1j8TeT66uyyQk8a4xztQzxd5xvaNbtAwqaH9cC1wkCKWACUH1wVAbhj",
  "key12": "3c2qDdnTMGjpshtSxMJ2D8wxXfNaunoWYcBpE1L55dtupzmS8qQH1PmmiYwxYbBhycUZjHga9nn1xKsQeejD2Jkg",
  "key13": "51RH5wtq4rfDkSAj6MrGu9ufg2eacs5y3Z3VPYuVEdgsgb93crtiwDFxoaabKjQwA93zWjpFLvgZbR2EMfPN8h74",
  "key14": "5kGwApbwZTWHHj2h598Rm5PzTapxQrtxKdQ6bXzA2gBNowobCDiTFHwtrUtj2SgJ2TMdYsGivXo6jgwCT8rsvvey",
  "key15": "2aMmAAXfcdtXc4AF17Wfj3fKCHxuYVpc6QdjpLMNwGgzWMUkbST665U61GPGoK31oUqSadsSxWrK2BG5GhF6vos4",
  "key16": "4nDxkhk7i7FNkSAmukKG6xyXGhVzqwZhb3qtBhDJHGVmX5DEGZY9jq3nX4ErceC29HRDjvPquydx63YYo7ZHPsAF",
  "key17": "4QdQLuwDXnGXJ9PchkTHkQNxsWSCvr2QQm9WzNuff9ds3kSL92Ljvu79QwEHJgFt9mAKGamd56QMXFQR4fo93PVz",
  "key18": "2fyVCmhPd3v6iTyhHvDV1Kkbkk3HVHmdA9kSdLhF7iyNQsUmMhcUwzeuFnTWj65dkMSeYym513XBRkjT3hqx2EPL",
  "key19": "5uLHDHz3y2QcrJt4aJrr3xCYXG7uAed8EwZq1ywMPMxKqr5NFRbjjRtnTLhagNc6NnTRS4ZrvB4S5vWZrAWKgL1m",
  "key20": "jUTwZB8q49agVo6d6av6zGzsGozNs6vofsF8sJhT4QaxNFv2gG7QS1k13w4pdgrUmWrxdty8wuok349VXmFJGRm",
  "key21": "5RXojuAwxtMHD65ZaWMM3LxvunL9mwWtR1gjvctZNYri8dsboMCXiCRadV4UNppYTMi7fUVkCKqVfcANPp7gRss7",
  "key22": "53f2YKBRpwfmQ2CAordsGTMbxh5uMdfS94mhvZAcRXw5QCRr3YR1LWffb9GKtaAxcT7DxUJfQ9c4QEJUhJgy6dYH",
  "key23": "5s87RPU34gRW9KQJcy9KkGawvoKYr5Ms1WeKXVgYRuKa7spsoSC8uLf6ZAjWRJthtGkJCxpz2fCBax6tPuxYRbNp",
  "key24": "5fuzSuEbuC9dGNr9fXupQVu9m7gmMdUn8js9UyQrkCTceQJdPesCGF2V2WDmgKp25sEyZM9C8ZBKxeQUnoaoBrvn",
  "key25": "3PNasiTBVjiCKeeHtHi5xNNjGzYxnbaZANTnqo22C5ked3UjoYkNxLrvLEEkQqz7GmCLFSXQfpSwNhms6FdZfZR9",
  "key26": "3eiLZEKms2Hvmuquw7pff7RvoXgbMg1Pqja4qEiXe9m7PFsNq59nddkQou7kMo2RAaxtWQ4eLB6fq8hJijAdzNEg",
  "key27": "2Mh8PHJGXhJ5Zsd5wuyQEmzF5bEGT5HQbjxfBH6CBND18BgdQxQg3zJm9NuT9FLgBZG17ophHoLftxGfk8d9rFv",
  "key28": "EMkoLDMQuZoVJTFa1GQvJd55jVnhWwt2ngX7P7nLRxkE9SL26Ysp4ZNQUHAoirqok8FetdnZVr2Xy3oULRjWB93",
  "key29": "668zmFknapHurk8ioMG5ANw5EMm3eKZzmkXMR555KjFAB9caKKfanBfK7Hub4ThUPXTonRYFNtqsaZe9dRAT5cje",
  "key30": "4MAqxzwo61QwFZVRvbraVT3ESS6xMwbQev75uq386daCsyWLhTYtFPLX7uSwcyETBh6wygrmYBnNnDnbZepUwxMp",
  "key31": "4DZmyqsBog3R3CaSFqYwk9c5D8rXVGRastnQLsuhYz7usNjw19gWDvUvguaUCAxyYxpzWAPDGmgossC6pfUYLU2m",
  "key32": "BK4VvyZaycP26uwSzwXmBuGzrFGuHWLYLFtryGsPJMoWFtjY5tL9NtU7m13CGhv61dh2y7tdDdASdnz3eMtrcsr",
  "key33": "GFhkc8zbcpj8aDEPGTxXeKk8vg1TyTWKqRz3KyGd3E2TKPm2qf1Gep7ThGGgjanD4jEmueNYnfwwzxBWfCsCtSP",
  "key34": "4Afk9Ph6boWU7ja7shbMXhcYJQot2UvqzH52XHTsTPVb1xEboGkYUUwmZ7H7pPJAen7tRs7SNQ8gSsQxCdWFW5fs",
  "key35": "4uXRPW3p6EWuRSRVVYVJH9N8dMxjHiWVvpU2enrp7sUxUYCmQbqMESoTmP5TMY7ZviBgD24uc2sPHGd1hW5mwuvi",
  "key36": "2AmfuMtaQKJ7bt4twGNr63pXPTBrHBhfVy713TYCVXcmaSmMLXA81Sx2Hy1sQconvTeGQNwZQSMrFCxVNrGXPZGr",
  "key37": "4DauRGSxwfikBcopiUyZNq8Vj2551oDL7RbSZTUQEo3x6mJBhGyNzsKYn2HFnbP3Vqn4ieXNNvC5TTuGkiQNTcLd",
  "key38": "67CQ2N5128gEtUnHigtVsqUepoaQrveFy7157YRXqBzoKmot8Txybxh2CsKLvCVPAkqFBuJ2k3zkg3vsaW9PHr4p",
  "key39": "45dJnAcTpEJfiCEp4UWCJn7HDudM1tk3bNV5B8MBiLrfXTFrdtjNSeGEkizUow98w4wojnwbhcaKpp8xQ1cZXdaj",
  "key40": "2c4HYQxyoeetU4wXgHb6Dha63tT6AmsPSDpFUTDokdmFR9T3ZKu4zfPBEfeXYoCkJ7gJkgW8nt9QtqGSmHEsDkSj",
  "key41": "57Qz2bxsChohvurevmmuzmbuQALHHXrjWgqA6nMu5tNET24EtvHt4LMHVAiQzpveqRFXdjSTfx5qeuyYTE98fcJR"
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
