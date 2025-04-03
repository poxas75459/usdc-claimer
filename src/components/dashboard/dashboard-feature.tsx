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
    "3PmM4qfLC6dbj3iRymWDDmteEcaDkTtYKSwSuqobUvQrfPuywnsBKNug1zcc6zXo11LN4pmXnmts7vmSshE8NmTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CsxA3kke8pLwQfw8P9MbQX6YJS5ZLakHLiT6yySVanDm5tDLSs9TkfmW32C2CDZDEnT1vc8T7kHaHvMNhTFabvW",
  "key1": "21jmLWAADFkYszv7jqEDcWcydoKWgxYqF7baVTbJw4TRY1e6Ls3mqEynChDUwTGNmVC6bkPcVnpfJhcarFpnzUrY",
  "key2": "4jpMEHTMYnjrYQDmebEkLzHbjKTgHQ7fUnV3WxG5t1NHy5RwBBFqKUNvHRpLMt4uRv8G11GjSsC4ZSrMziAuUGfx",
  "key3": "2AcetHwXbKC6Mq3NWEqyGPfmaYDJdUf3ntsegvdYnHSVbGN34q37ovozxdtYu1cJdbMNmmARys2RAwQSbj5fhbkN",
  "key4": "2tTdcnqJBWe4rkXpeLzsWJ8Gt6qJHiXRtGgQNXbBpXdLAQGBtZ5p8xH8Sc6vsKtEgFDBQMduCfk1uw22uFL5YRhi",
  "key5": "zW5q8JtUT46NEqSp5o7CvSUboF1hXLygCDVZqosaN8BLmtByJjyN88VWs6pKNCwFeLG8tgTHHTqzM4KYB1LfwKs",
  "key6": "4FtbqdTYpMn8MoLBNHpjCRYLFyoFNutSYmpxKozDvpXG6bEW6aZhYhywi6Ai3tiM1oHqmgPGvgRBtRXcN4vp7hAW",
  "key7": "4WBcbzmCrfRFcji6HaCT3zfmjftXvDxrSugSn7CVWKuf5bQJR1VYJiN99YXaMXGgcecgt4VppFv8nEzVBEoSR6B2",
  "key8": "3uZR5LEVhcdqNMhXKTMbgn4aQrpoaYJSPS2Vj2L4Zhmd7FGTSGSWJ8XyGdY2u6K18U3hUKtuas4mtUGktXVXnYVa",
  "key9": "58ynkakCpc6Pw9dvR21xygNkoYL91YJJXdWKRZSgqYigQSknvkyM3NUeED1s65mBtt1wXbE7dykcWvauWPhvTFC4",
  "key10": "daN3KCtX54ErPcL5r3BNZ9WKyZb3vmSuhkfymmzubcaBeuRZeqEA54oeGMxnLaJG256NQWi1cpcxPZHDVGJp2nW",
  "key11": "3nLutriQwvh9y2yE1rdcpwzbzfrjHNa6zQx2bqsSQNVsVoThoAAptYujLwXaY5MWGUZQQEcUosxm9SqpggLjuEqC",
  "key12": "4YiTHe1t43hYixnVinf9Xyg9Bsa4k41D8fJSkLLDk9JQddBVdjcAbN7MhhnFifdsaeXik9u9PgkBKfj9bvJe9DJ",
  "key13": "32JyTgz7ZNmNHW8X6w5w2yA2iqC5XvQ3g2eqVyMz54gXjM1fD4N1WWCh91uir2XX6M71iDyjXnfhtqfkbeJXmqiW",
  "key14": "2V3URV2Uxv3XTDdK4QviqtV5vb42kBNp8rPJ4mU5uQyZFSGBfMsfDNbYoQ9EjyEVZQKhT7RbGfhC5dM936KLXvy3",
  "key15": "3zNwrrNwMxSK3qct9F5gpNWGa7i3jwEmyufUtAymE3TkNHhdZteV9uX1ZeZBMpfUEzFfWHd7Hri3HVhg3nAgcUn",
  "key16": "3pt5rHgf7kZLMBWCEoWUSjG8Lbo82wfoRhwYLi7mQrr8njobSDPfNwj8kDS7GrhoNUcWhfsksr8KMmNSMtDWK4bN",
  "key17": "CrTsDvMyJ4d3PxaWGR3ry2iVp8Z7xNiTmnGdApyvkStNqnN5kTCyUtfAzrJxJxa4nxMfSCyyBE71F2Yx4m6ocqC",
  "key18": "H2cv6Nsdpjz7BTWkqFL9ejaHSsPCddvv2TFKfM4AUhXMp28tYBGB1dqeGU4a9cecfjCjM1h64nundsY2XQFk4mm",
  "key19": "2spBWVVfpyJ86K7yAkWAmp7MosgajsGRQtPzmZU6PzYMp1GACgUaPgUhYyNYt12GK3YjFyQhqYpTb5uCCb1Kq2FK",
  "key20": "MePgyhpxzARhniicXRoJK3bR8ggC4K58faqGBB53Sz4UmwMtJxY6fs4finQCjLfie4rdh37uHt3Q7tkknXx2GLo",
  "key21": "5FyArBL2V1cHaXEJpt5xXsyYFsrjFcvXowwBgML1yTwCtGacw3xCmt4rTs8AdL94Dhxbgk5yCX3V7ZMvNw19FcLC",
  "key22": "3t98vMSunkw1AytuS7xYWQbFTtJTenDAoT5mHr3C1MrFMxjS8TAakemfLt1urnLGbEcuDAtHn9y5kTPgrN734M9W",
  "key23": "damuS2DH7WTLBNp7EaAvRSVXyUJqDkjo2itrXZaQcMN1mLxxvYpYX9LMbgWAvmK9JNsJRRsjz771c8zWyfjnBJT",
  "key24": "2kfJ2bFZe5Nki3hEy6gt27JtgmpuQ6WDQVhW5LRqhEKahwMGnAQRgHoqTAuzgW9MWQv7ZVVZzKzp9vAzPC7i4VEe",
  "key25": "5M9nKXEPcpoEZ7nFYCuBkzJUitFRq58FbRidL5vWF7ua4ksHcH8PCWrXsjhE3cnhzB5cfnnBiWmvSPegp3oRP4qn",
  "key26": "22YuBH17icQdMVmJqg3fQ6zokWv2VrkAhqR3bJiMfPhvxERDDb8rvM9H3gNRYzDWUqBCcZnc4AKWfSVLTpm7ZXsB",
  "key27": "5iZUb9rggfvVbXYRpURJPA3Yq1n3GTTXCuYqVpiRAuYzVdaziwW6JGz2uTpMF5HUBRuEr5pgap5konZc5QQUHE1w",
  "key28": "Btr96eQwcceGGmX9HjZHrsSCbXKEjhf4AvbXvPhy5f3V9n2QE3gSdBzysvSBsUT5gshptAYc9Urz6Evug3oytF7",
  "key29": "4fwvLXHer34VsVYBPn4YFJn1o8vccfXrRhxExbpxo3Mxy156nc8Ngp4ohTY8Mn41uMhRpi6JVCrcJKVeSoSjF4QY",
  "key30": "3xRRx8KV8adCHbhf82Jh8AYUE7Tq4FPRVoprFgmPsHB14iJRCz6nLkRMfLjfB3L8XfSZ5vkd1cdESghanLd9MbfW",
  "key31": "4PiGwfxecve77nEiEkpwL4PHRnaMyzD1eSWxpbqauDs6rzG9mxLVgNjzRyZeF8eKwTGqj7ZMMmshcWRckC6s7apt",
  "key32": "67e8LsZYhRF3DqrFEnfuhXiTFrmcy2BiS4G4p4S8Mnp5W8RZhu2hUWQKdCHeWfB3DcdGJ9D5wzNiQhBAVhPVcZAa",
  "key33": "Tr8W7rGtNj9gyMSGSFj3Nb2UvKdNCEE89EoxPqNwv7vyw1A6YrTQ3ppzS1uHWKW17hkrpKNcM9Ye4yLp7RoBQEW",
  "key34": "2tdavnJXJMXjJHr3cykyVuuxYKv8x2HLnAsANKj3LUrVg4FRksmAyi7h8foNqMr99BY8X4Mv6TSGSk7nV39romSi",
  "key35": "48S2iranbyMJBZNB2UzKuvYrXoZkQgSghjmEaCZAm42TZmpsEhCczWQNP3Wx7i8ievSFqsz5ayNs7ZxczTa6EqBt",
  "key36": "3gJ6Hc5QYji6EAWBxU4tPK5E2KobjoUoYDeMuR8z47hEMykNwC91GyA6VZiNebT7EEJ6hWei8SWQ73SXXrax41vb",
  "key37": "5U21SsK44ua4bCmh5yyYsQgAaTwGqzB48hKGEXwL8XE8uwG3uZybAR2Pbd5W2P9mMkj2otxML4rMNDWgnwYPSvLP"
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
