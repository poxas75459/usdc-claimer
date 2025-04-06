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
    "2EAfRzrDxNmw5cnQSHEsEfTmvvUmB4JGfjUkStwPtfMffCqXDAq8Y8T6XUXyDFURmdsMQVxCm57XRSrVkeT6r7hW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7fxxmcPVsYbfst4iPyiSsECV2J9YqXM3Gia5HvowpqRcPLJZJJaUtaZ2jHJ3Zor3JA3ZL6kpcKbFFUASrj8AkB",
  "key1": "5gUjpNKHgeNu53jQBLCH1qimyGpebLVSkHUxzPBpDxTdn1Yc1CcMpwdXCScWxyQTw33moS7SY4mkQw7sPqkyYbcp",
  "key2": "5Aa6h9Gj2PkrLgYxXWmtEugDH6NTXqHGqw63yyaUY8pUTNV3jNWY6ZPGmmb8zDDXKvAWkwEBg45ovL83Q9GnC2tq",
  "key3": "29TBGUFF6sjCnmp4Rd9MJBpquaAbkmxoAJtk5o3TyrXEaKvEP1fnEdMSDZG9mpYdr29ViGT8Vn7JmkFFbJhtiaGj",
  "key4": "kGty2ARW3tK1yYhRjMvoYuCZQ2MapW16q86XuxCnhpnigVGNvPqRoUEXCwC79ktLs2GeGG5jadBRtYMrFaoCwN1",
  "key5": "3oMzyqus4g8Ha8m36CTpzFa8xyDh81sUU7r1mpBmYFdy4AveFrS4hVWwL8CN6XM8721jTPp4mJk84qVtmQ8w9a7P",
  "key6": "42D8ackhfUmBWHvE3z3i79UqcXbFkWkHcmkpb7cbwxK9u9vckwufK9spL13xtQWtDj3oUhGpRQpMpQJZwtXr3U2U",
  "key7": "2mHwNn3HWVDPMpsF8DEEK3zbHSntaoY7JBnfTQqgWW3j2vN7qaGgzpHuoEC7UbNGQKMHAwp2tPUnVem9HWe9N37W",
  "key8": "5pvB2Qc6bYYNVkFWgvKCAqv1C7ttVD6NjefnSzpxqueqDPz9qydQ3jsyTK3oNizgXVj5bCwgXwNxAo3wojWbHGQe",
  "key9": "4HJK7n49NSqx9oEX9F3BuHAShiwen7zehPyFA2xQ6TVvezjGGCYNrQ5RsutX9XnrWBxWdXTxY3nzU7a8aMWtDXJy",
  "key10": "3FHLbMWJUnQbCKqegHf2YSXZvZdguLqeKVdzoSwg25XrAZJEL4VXQvPMDS5z3gbyFx29pQDs1scNzWrNN2Bveson",
  "key11": "65XeFdjjPuYK2P3592zCa8PVTj7LGbD295UdSWMaGCegCKFcrsnmbWBT1ppCsomgucPuhBXVaidMvg5EcUsp2vmf",
  "key12": "5Ym4TsvynuvVyyz9RoVC3U6hxxaXW7nnVurqU14crXSKemvrC42H43YsgdnMNziWZp2C1aGU12DfFyHGbda9PnMn",
  "key13": "4aiJk8MXK7kZQwtVy296a1MmKBtN5XqHMJnkHWGY5YRaRoYjMe9wqZ78tNFcXLkZoyUY136Bqe83m1WW75CpqE9u",
  "key14": "5pFmEwEYCjKAHjmc1tA3AgGpjA16ib1HS6QFfvDFufPR8RdcUe9vzQSRxLCoYPHFvfGTWJ2A7P6SmjBYUyLvXaGR",
  "key15": "2HAroacK8BKrXMRWsUPaCvTukVVLLqpeDv7exibuGVa6ziHM7LYnb3F8a7nzLQDEj2qjUqz5HicQYvgAAy1uKmdh",
  "key16": "GcNEGvpi83k1WYhnaFjUJenNMw9NyXDVcGZCi8StsPRpmZpp4zyGkURoK735kPCxgiHqRLuq2tGDutSUAVTAEwF",
  "key17": "V9GZ2dm3R5iCh8SVyz5dyfA6VXKxCcBEBD4D1MFFKB93BHPrvG5Uqo7LyWYd1FpdMeAf82WWRjQJChZ3hCRJ7Di",
  "key18": "3Nkm5JuEUqaeM6i3nfaweL6pNrbJg9KPZ5uJaqiSUPtxthFFmVnK66DcNx4TGjXKyeGasbjugL51E8tuWnECkkHu",
  "key19": "5TRFnVC6J27HiW9djxyMX7WiSk2Lctsk8Q7o4rEVXygJhVPLfeRZbAhdXRS1R8tUtaB5qK8ttSMRurbvsu5wwQC",
  "key20": "4n6FpQ7QLQbgsDzhSV8GbKg9x25oYoWLTLxnG17NgPAGyxUSzZsSVrXJ3HQwoL38mU6yfHnyDCJbxjpkrvZCSPwc",
  "key21": "2THL1qHrDSnZzeEGBUNSFWF8CwdjFscmtUHsRuNLzVjQLUYoTJJuvFQ5GtiiwXkKgiPa9WZH5A4Av18PqAkc81UR",
  "key22": "Xsd16SnbTTG9XrPCxuWyN4eV2qow6kTbo4ygA1XRzu3Uh3UweeHa121uq44wpVJ6whMT4Mf8wv8zrRcK8jm6fzi",
  "key23": "3dy9gssmENZRY33qvtefZRbNy5WZK49FgCiec6TPh9JNkHfBtrYA8AMqHuAs1Dgoz5w7YNxZM234C9BGPFooGToF",
  "key24": "37n2AbWXuDuSCmPbwAMvqipdqLtAtXgGe8RUW7XpFvZsouyVzsEBqoz2fNJcUEQZRC1VpNndJ85gnxtwLQ5s32f",
  "key25": "55fGZfMRgyb1ebfkE5DRhxp4T1g6m3YANPvWyMk3FkBwWPahzpB5HiRvkimL3wtNo1GvoYqU5ALzLEXAejkFCpLW",
  "key26": "2PxujwVBFE6LBVxi2GoMdxXdUTmjMieq5Nj8vrAfBWXcA87n8z665urNR69fajutsE32JLmodVMpJYH23Gmz4oYh",
  "key27": "3U62RaTep9mhwwPrcJC7mrXatQWLGkQuR9teQe7PP7J5i351gdZqDGjA51Pgs5dhwxB2b1hjRg8CmdrSebND68VE",
  "key28": "4tHE9AAvhq2CBDw5M2VktiUvEW1sZvNA9vVHULQYJuWqYCLWi7GkzAuue4XubXL1XpgHJ5pDRhdAMdxwFw1hcgWK",
  "key29": "23L8ZbFm5ZQQDVk9vtgRiNjStcigh1jH9VPZf91eWPNLQ5p5jW6vPGswYbgQvgXzgT7ATMf7n5kmdFHS2QFHePge",
  "key30": "45Z1bvCHDvrYvdXbNPvQmhZXK5c55FTgbCP8cRNFNgHDcXaKc7g5uQ2fwMAYcXuHfUnWD9MmUpNqCzPGpC8LzGu1"
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
