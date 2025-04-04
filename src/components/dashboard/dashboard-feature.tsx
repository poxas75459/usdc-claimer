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
    "54BgwZu7Mvjia259SFAtw7kt3CyeMbz8UvMth3c4zoPinEX9woQaM5rovKdc4w8Wa85KgLSiniTQSpZgZstfCMKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SM4zTYtTH2oBCiNBncnMdBbWBTXabTDWy1iHbZjEK7oQWAXDSm3LQfA11Jg4bRogHfpKVWK45YJ8VBTuTXqHkBP",
  "key1": "3BqYfwp36s3vw3d4tYVKu71Dk8BvARrwZ7P5xUfqosuhyHJ66KXs7PX31295Zsw9HQ1K8wLcCBAbkK2fwkqj5C4r",
  "key2": "3xsxHSgMqXEmQgWpDCDa7gb4oPBNHtSwj4TBp6nEp5sdez4iX8UiuQ97VxKeMQUH4k8kncakZfjxffULwkcBNmdx",
  "key3": "2zuMrNWZ8ALdSdtXb8MmJrujVLJdAJEwCuLCD7Hd8yqooL7G2tos1KhAUpyhJxH28RFJxNB2JkHsNaXCC1oSxh1A",
  "key4": "5AKhrK9JKtBwYcyoVsyoqG6ADYXvwXyhJxyy59E1Nhnvq3f1CQGkdLoogWPm5dgyHmoB8UpTKSx1MWQDhcotRJZc",
  "key5": "3TLz9EbVHJWeLMQXC4WFunZkRBC1pebnmC5nSyS9yhu3Aqmr1rJXbHbhDjnw4cqXDHNB1QNfr5gEWy6FnEQ4iqCJ",
  "key6": "32rfFEiuxPDQdQLE2Ld4vY819gajEYz3NZs8qzdvg7nCw7Zu6fmGCZfwaJHJgw7XsGCbuBWoxvgH9MsozHzcaiKZ",
  "key7": "5j4C5zxmjJnHH2t5CrqQHMSJ8MGcrZ6inbh5zajDdSBgHnZy9aNkv69jpGFxVj51vBZjJGTuovjq1Z5a8tXZixVn",
  "key8": "kL8HNUtBoky6eGi8mbQ9TGoJNKyih2YUCAKQzoNr1iBZfwgxPy4DDrmMdLFDFTJQXsmoj7GEJ1iRaNxfFhxonz5",
  "key9": "5rWrxuoZoeMY6efo993K96mpX8H4tJEB7geLR66et2n36nAc5TTUUzhps4na3FpiRpQkMxrPaGYCaGV3vgk1nSje",
  "key10": "2WbrsnUSanUyuJDQWutW9CcPNgHv9iPdhUVp6j1ZHRKkokKd3Qoh3cx5pAgXwvzwxqNCyE4zUSaXvobisxiMeSe5",
  "key11": "48ijDNyKm8M9PdtKEMfqCkYRnnQayAUpE7BExr3wgZmWbD52Uyzb9wauuGCd4eo9GLMmX4uejfHHA9Y21YtrRECq",
  "key12": "1EGXSmCdBJfpPcxm1YW8G4biijf12zm2TNuQ2aZnrV7ewZwPvTXDyKrPBC63UvaSeSQ9fjxuh5w3W9bphf2oJH5",
  "key13": "4UzfjT6gppjKYjPKyPBkciV6hcKCJWAK1uF7YNF4yAv282ouiKfqwcZ8L67nFubJmoQsXkjZwmbRjq7qCcm7e4jz",
  "key14": "DfFEbiU6eRDArRiZDBDRVBkyRCbCDgSeKoVbf7B5q2odBFDtWMWBTuHpzUEyZqW5xz2waqLk9Uu83ugHMcUEViR",
  "key15": "2AnvciHbA5ctEV5PnAzhQYY5tXctgWEq58GRH5dEe3Efp2mc6JKKBzDf6vx8JBFEtnrV9aar97qLKwuGrj71tL5j",
  "key16": "4bVjVrJM9JXBvhf6ytLWaEsTn3Epo3pXLEHR4Y4zkggiBct9A3nr3e9dbFtGVp1roHFEnFKm1DQhkJasDs2dYLTo",
  "key17": "5M7PB1V5mSugJzQbCwiYMpcsF3zs2bQwKgyVtQPRsGGLwepjhpwvmhFVHhdWYFLfbDBxcyMsiVLB7CVH8xHsQAMu",
  "key18": "5DxR4CsmNTpDnM6h48Vm1rBh5RKhhTTSgTRjgJH3DGKQrxEFYzacGD6AD6FAFkGDSBscxQLVRP3kfua9oGosdc1h",
  "key19": "3GZFzXLRHnKp9zVV3AnecVd2L11wTNTaeeSFJ1o6Hcaj9XFeyMCdSUkyC816xvB5BMxrK38hWCeoFSgExHmWWSE6",
  "key20": "25hkEhsRECBMM4A4mQLHtQBhN6HogqcsXmGAau1D8wwxSpmECMKvkviS9tUwRSaaZqXmsRynE9mdxijxEbPp84Zv",
  "key21": "2xLxZBYqyFUoFNQwwL4ehwDzTMfR77qH6izBKRW2u7PVrvr1rHBtm2ts9VP8WzDarFk9zCWyyRb2TLZHtSNTVFZN",
  "key22": "2oVPpYeBB3ARzehMMvtRUpjvynqJFzYqSUK3dvZKpuXZysThuKNRNfi2scvLf7GBRxdMZEtwJnAKyw3keg9d8EtZ",
  "key23": "5n53t8bHHYWZxu9s89G1U9aY1u1P2tPFvARv5zyFTzrTKPRcHLMC2eTNaYYKW2ZEEqLFxcLp3a8KtoRmdT2dUbsg",
  "key24": "61bUhSwxCQkZ93TRJKME914gN7e7u5jz4fihSXWi6DsdQm1o1sm4ZpvzGL9rTMJhAmCypL9bZwgWkK71p5Ua3LDd",
  "key25": "2h58pJ8ogGpmDBPKbfHzgVrDDHA2Lk7xKsa1r9NZfCxfMRhkFFhgoJcCXWmc6m4sBBJ9bwDBPsT9G17JbvcisTSF",
  "key26": "2HULCdgWrPc9KRSCW1yVEzSLNwHP9N9pjEfcDqufLFbrdHqJBCZ6XhuQwm9XoTtopvUkYbnBW2D51Kq8gEWo66P2",
  "key27": "5msU3genrxeY5CZEBL6RB4bxBgNZUBeuVdfFRbsWAXDoGXr2uJD97b8iZjmdgpYDNhfRwSN1BPCi247gUDAfbNj9",
  "key28": "WLXYRtiATxPhW5g8WQXfpk1ttBRDtUEWBAgKtYHrBn9L61gNiF9PPURnsZWKQw3oqoLCesMgwyz15VE4j7cBLMh",
  "key29": "2N68HLUDxpkcoWfapAkui7QXdCKtfBdJcMJ5mzh4oAer9rojRh8qr6hREYq71cmyN6MxrmE4456z542LzJsrDsP1",
  "key30": "2QoiQEKYX14gsTS8hPSJuXCsGyhXXY4uEiUvqMRBtFPmEmHp18jwz2Zjq2QKFML9rfwAtkqwDuRDXHu8vAa3cC9W",
  "key31": "nnUfDqquQxMm5D4LAxg8cLuvdZgup6uWqNA4xNLYerzrwvS1zzxjtG2FEzvT397VsiTjfrkrkzSV1N53ndnwpPC",
  "key32": "5EvoDGrqmSnB3UrVxSvb3bearMR3uTXXUzjwArtFbtKzk3XhfA7ZefKbanT7gVJziaJGuSbdWwKhN5Vd9RwCfVum"
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
