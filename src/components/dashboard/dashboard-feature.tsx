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
    "5qtSKq6j1BbjpafSr1VTsaoMjyrbicCR8nCCPkZpoeuncDbiS3hvcrh7Zg1sQcqmrYEfPRFHcv2hXMFdrWQy1vJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E3k3RD5vjHfNun1bSgDGfWR3dkEJp1r1stMBtyBDwomd3BJaDUbhyPRKhTwSGcfF3jTdqZEf6Jspioz1LpJEYa7",
  "key1": "2SVcNrFeL1AoUajx48E7dBNfrxHuDDH5jePPsNdBzmhstG7idtEMLJdrC2YnNa2ppLHRnZrp362R15BZjzCmfco5",
  "key2": "gXEi12vRUgQZDn3Sj61mmVmtaRzW6YhUxsYzzc3dPvrV43XAYQiuHZWrvFEk3QQ4EUpTEaKsGMc5h7rsTJdM3J7",
  "key3": "JJLgAjtVqEaw3Jv9EmhJZxs397Ej2EzhcnbinNxvK6rxjDHCzQvGz4f2yFNQEdqT4L3RPQWtwhFQ31oxjku4zWd",
  "key4": "2vQkuH9SfqgZ28GED7kCwhixc3hmGUwE8ofsQJcUNqT21yBC7m7t2YWJfmn1ofkfjUarQVSXQ9qawf2gMwfSBnNU",
  "key5": "5bhFUihjAaaiZd6U4tSoeuVuExdx4KsEfrEKpb3x9JP23mSYHHFwLujx37YSrysrWPmi2soknkNtZTrvduj1thD3",
  "key6": "2vGjEWZMpQMjyKaetfJhf1RrneV9kvHwGoiFkwbFRRdUuCZWkn6bPBhjnpr9kpd3EzmeAQU2fAbETDWueHPPB9zT",
  "key7": "3uzQhyyGDnGTH6Rk3UGVRSTKQE8C4iCdrrne5ChLCqtnMNn9jXQajpiptQnGKDp44v7eDSu2tczrAKRop9Y6rMcy",
  "key8": "27aP9xhqnZby319CmhTxYkkk82n6bFPo5VWyjSsAa2wcBESGs5jyBBq5JpeceV4Dw7pGpdKpt9cBwjkGtKFYKx9c",
  "key9": "4LncVT9jDWNhkV412Fn4bK53gr7cJrKoWLLBbY7U5iMHdsuhueFoqzzodcQdqJF2FrvqYETCdLdjaCpuwSoWYbA6",
  "key10": "2JbKhTBvtUdsz8dbTUzZz7MmAF5J4ZRq61ixfifsRryH61S88TZFPtj82NbnvVKqZSsTSkY6UjozXDJiiDWBghBp",
  "key11": "7KzMkvfZ9dWQQZGamV6JuTQ7PFXHaP5XMa9QBuMbyWMNe5CyjgfRutd3sr3nW3zpvPdKcMAwwpSN7ae4tuNiHjN",
  "key12": "3WpfuUiVuFSkRtDkfnYy2FEW7L4gnTaaNiZSXY9F8KQhoNVQaPo63PXjFn7gS9GeVamZiBVM7HsWA5mZ5xRqnxoG",
  "key13": "3dM7yMZUMwH2DsvRraKJNR73VremsABNEpMSod6f5U9Nyhdyq6r4u9Ld5pt2pjJKJUkSN82KncXh8L5ccc9gbgM7",
  "key14": "416R7UbFj21eFvYfMANJUK5aDsJmRHik51itLEWT6rH3DHTj9fvgdhaN33GGf8LrUbzdNrfyNFBMjkoc9aahbxVU",
  "key15": "yUG5XQJEp3wzowLdPCmxQJFoxEeMo3BXS8jUABnotNuT4SsCfTUfs95bkN5i6xTS9ARw9C9R32KR1KLtye6uTe9",
  "key16": "43VEti2Ye13dHv2Tpde1zAxhVQrSz2pYMnj8DBtJQtRzcrMHTc4DJW1En277w5gWXA8JiXqRfmebmbphrqdqNomL",
  "key17": "5Yw5hwsHHTJnhQ3AXcTwqDiq4KrFpYTf1ARvuoGW9NkxqLLfBSLvrfNgJ2WMexWhxjWF5urniVdB38kGLpDND9gV",
  "key18": "2ZRUJ2EoFA6tVSbicdsfPZ8gj4ZivKfXFG9AGKHpz35xMisyBRQpRJ47sfm5VjeXRUkKKwTHoXGKWgc6gnDZJH9t",
  "key19": "2UtUhLprLXgxM2S3ue96buv7G63uWXL7kcRBV2i7mfsT6dX9woKfm3BJRfQYaaBeLMoJLm4DcXnomn6kdZwtKiY7",
  "key20": "3xzrnhMge4amfMem1BJbmZLWCDZf4mUU8M5aVM25kUsuyhyty7sxeVFoFhn6jwEXNZUaiDadMc27KkySeFoD2bYk",
  "key21": "3CYzSH3n7wwnjLwvACsyqHa8TrSwAbz5ZZB91YD7p53QxHWA4FYasEEL7vXTXAM3NrJG4fXhTJuAXutZMgdGKuxi",
  "key22": "3FHHFZkWafVsvpMcY5qQgVBWGN8qaT6QZwH9GwLmaVqR7ftwYvTBroKMkmyvybMzDMLFqnj2CsCWHJZrn3TMCnCe",
  "key23": "3xtaEfEVTLfP4jVbrMLQGApuAAexHv9T6gXWxsryJR3FtCVLZ4h7KiJ8zGBU6NS1MufejRzkHG8eehXnbLjXk5Xf",
  "key24": "56yu3mBQdnXBrMfgMRzCdHFiY5JgQveHVJGWoBHTM5F7E6JU2dDQDqm2iBPxapxgPhvwevKDLRowkNx77kRsxhSC",
  "key25": "3dzpN5BzTCLLN57Ss6RtraoHF4DwFb67daJhJR5x9QBCbAhzkGoygdWvjJ1YYM72PhdAonfvXKMFASABoTwepUGe",
  "key26": "46qjcY4H3SmX6CWVGYCQVnNRTKXMCJcHVpSr8FSQPsx9hREPTYBDzr3ytNHqspZo9p5wT7HBtieLLGCL3rgFuGXY",
  "key27": "3eZU4ieLkJzhawSUgR9c1YpJkxpm8K3GQ5mjBjLzvnxmqku7TS45kmWhhQ65acGXsYQJfUBKPCtmP3Yn1Fe4TBSk",
  "key28": "HqYV1udYgA7g6W2hmH8hFQgvrrWsFSiKMuVC2NiGEurFZyXVora8fYUifpkEqhmDD1WLpo5DDoKRCzfPyw9qerA",
  "key29": "53oEMLAxmDFbzDt2t1XUPDQbNi3sjbU6aEYzKx3NyycmvLF1qjE7ZCv6kj5xisaYuwjCcPjTSoeEfWXhVmXkWiiJ",
  "key30": "2pAx9XUJHr4rJZ238dKHtN7QPCAehE7jV9s26ud2dgeLr4ZwVr2SW1Wby7xfMkSYvwVsgKkYqLCPNcfpe3WWHx2U",
  "key31": "3wGttJmamwPpDW7JduPE94zpyyMgWSd1bzDym1ehnC5DwtZASBavQvP4Cji3jGXzgqRM5PDCpVzpGB9woVLuVZkj",
  "key32": "2rTbRvUEXhPcDvtAkQtd3oCEGKyVzTDa1D7YFkiECfrxxr4XmCNZ6xrgSXCgx2urrKYdKsLqgyZ7j4HiYLDxRtsK",
  "key33": "62qDfYA9Kzcm1JRDWLKvhRVZWuA2oDM96jzMNqjk8H11oRMvrxCUWYQ1dvisfqSb9xnWLs7ajzBhU4NBAnzEEXYA",
  "key34": "H9CU6xtZ2ceQ53kfoshXnH9SwPUPwNR3tCdbMnYWgMYJRDtAqeM6FTfzEiK1MCvmBxtQJqaThFgaJfL7s5rgyrg",
  "key35": "4dcqy98zmM7Srv4CGojpzz9n1VnbnRXP7CSfu2GBwiARJ9HFLEoqS7obj5bxNRcvBJDFgtNLHw4sSQBB7y5e3ACt",
  "key36": "2yiJGFJg749CCiJMSfP6hPKeeAZYJwTURzZZ5PpaGg3drMw6Kn4mpLiqz13Zr98Q7Mwz9wteGHNAJBmc8khPDUEF",
  "key37": "27bWhJAAa4P3UJKSXTEXtkYaoviva59fKnj3Sh2vTSmL7WCXpzD8whTHcDKj8FgVEjHiTeBdWw2uAVGybNCyyMyq",
  "key38": "4hMTneYtsZSC7t8yy6UY4TkwBzkFpnQFr3HvrP84rjmsmCh9UA6HGo8WVpziFGW59wnLruLqtsTjqrcwJscRbC7P",
  "key39": "3VRenAxFuf1mH3vVChmbrmaxERyWiiHDws5g7nSVYMhbg1PcZYaKEcSwCpbRqWVi1biRx6KDyngCGQfx9CQnsb8S",
  "key40": "63YRGzQyhTF4u5CayLnwenA4YAiLDpJmrnfBxFD5KERAMWgfx4KQSsbZPZh7fxjZuo8SkYbL2CExSn2xVT2VJB2o",
  "key41": "5uMdXyB6UgVpmvga1ryeSFQ6sQacT5jgBegvfKU6NGmvkVrgtFUaLUx1RdmTRZZXW16E8yGBNe4U2j1vdEpmJGRS",
  "key42": "5QpiYs5pTbR3ugeZauTErhaguTC2eoqoFfxt5s1V9XRkf1yNXjrMas4822oMu2aEj6qaLfoeA8JBrK8HL11oEyGd"
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
