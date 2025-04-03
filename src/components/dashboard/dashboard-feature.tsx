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
    "4XBMJxVsdGpjwdeEzM5PVa55WSV6rUimBSprtdv42BM2uHQWTBpaDz2gJwMbjmgi45fW3H4xTsHCEHLZEAfYo9kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXWGi3Xw4z5b1P9i3WnT8TZpnTjLjCf1RZ8KQvixwQLJXXBdEAXD2yBtkihXmThuFYibMG1esfea8MNMK6yL6W6",
  "key1": "2cj9oTgwFcdMvCf6suwyTUniuaT1xVzERZ1X1EwKiL17PLQZ5j8gYMZTeozChQm8o4B98SB1kAEHQxhSwnM9XTJa",
  "key2": "3zR4Y1LyK9gHshV5bhYzf5MwaE1JvsC2c5JacdF2xiWaE993kdmYad4mhYypQkpgV71E2GR54yLHzgb8tusTaiNM",
  "key3": "33qz2K1hjGnj2YPWZACTBvcj1a5qLnfgncMep6wxBxVXvDQFFaNrKmd8g9KtkFqYh4n3zcQzfjFr4qMjEbxYyVqN",
  "key4": "ppoCsbahpxphYXLdhENi2z55CyUx21aAgZGQcjSRpJGgjS1zqNN5FPjCyQDjeDfsoqCcPia8nsaGD9uhNo6kwvS",
  "key5": "4U3CPKDZJjkFsxcXNtCiLRW8BLqAwkTBVtr9qU3S3AXRYj9y1sk547fdAKzrGGSRGKaXsSAJhEEBWvPvKyD1icqC",
  "key6": "4ojNkU7hBd5G9kt1bKA9Ss9n8qLDX8foKB7EuBV6sCTffj3ZADrfsdMirRPxgGArYko8V9xksQaktZ3DybBRWNgh",
  "key7": "2uAw9iQVRPs7xQdUg7cYGW56dPcVGJAYvSiCTU6ibG9T1zu1V9Cps8ATMJYaNJj9MRN91QiT1DJd6yzpuPMsEAQx",
  "key8": "4cS7UjgvLFagDV3fDfU76HSSvoAj4DpyXh7LiMfUjVM6ZEyF7jyTLUQyneE6465EjjdXmX76QpVoetCxMxv2EJUm",
  "key9": "4Lwj949fuTr8z6DtbDXpBK9XTihriyGUZG4WWSuSRhkxhnA5VCcD6ftELqVCekggej9eHQvh5ByU6YPKFgCUcvkJ",
  "key10": "4QfW4kBEVGrnW2zm7C3VXQA1YtUMxqDkbbvCeoTKgGCsoYDP73u4KGSSU5HQ1gAD2Da2WSK1nYxm6qxjR3ds19yv",
  "key11": "5GLJFe1Fyr7BK2cxtTyGZvjZLAB8aUyiKXGpKU2WVJrcLTAq34Z6VgVH1MyvSswchVu33dAzGWfRjvfPmgq1mYnJ",
  "key12": "5hrJZv8aurMyWdHPeQ1i3HyfoYQ6j8F6pxxM1HW4Vjcn7oZAks5q2oPQ75LA1u27WiTJ5gd5T6BWkER62PAgwvMK",
  "key13": "5aLQDX4419ptaL9QrVXwMduRBjnqJktFg9PDPAab3JdxWZPRpg5CXcFRgXvteD4iamnwr2vWBMBiPUb65m1FW7Lz",
  "key14": "kjYHK4TDeBP8QGdrL4aMWd8u8uRSYrScDNjGgtUQBbar5W8LXPXgLvYUK9gePRH6WnbkygoqcRp6iWDCyW5MTFt",
  "key15": "ZtoSktHodB3acJExBQ7Wp6kzquBkqzQ8pq4nzeN46Zjb2u1rJHZZ67joRa56HKz3YCtx8RyjA4tgyACScRLCD3o",
  "key16": "5jEP2qyWLsoGXxGNpWbWXbj4uAfBQcf2ULyj2hr5RoMvUSGURup5VeAQs3hKzwGWPPz9LiMPeQQyFh7euscNnRvB",
  "key17": "2fNA9ByxAivvBTzMyKS3XEoDzqgvYtPPhDh2yZP1wnJjYoKKPjFHkos4gGAtX61VYfFYWbrEiAtaypTYwGDFQZkR",
  "key18": "3Q2cjj6qMrBrodg1Sf7mmaP4CssTdB4Pbf65upNp643gcWPNgC7wPDLZcWvHg2nV4vuTF6pMVruGYToAf6r5Wrmz",
  "key19": "3orXxhnwJqJGgSA7hSPFdqcvz5qmSoYUcL1EH1QZWowv66H6kN1YJcAfM5mUKcQgAgWYeV1vGaACUDypAmrDnJif",
  "key20": "53s69QmafmF6ZCSA9n6UaLKM4Ed4U8yhZLbqxV7uGLeEYwt3PHFBGEMLw95kr76qAZEX3MQnE6HJkgNdAEq11rVW",
  "key21": "43YEJ6UPeurMArn3XxpdZ2Vyoirc2MaacrrtNZGk5X9QXPb4GnT7FSzgCqanD5dRCMGjquyfTWrs9ZA3H7z6SxRM",
  "key22": "saMFKf6qiPsrCRZYrDPBpe8LRr8tscA6RqxpR6ghBzdb9ZC5Z8RxWf8RsmV6N7VA6BUkoSUSGHS5c3eKSAzXGT3",
  "key23": "3oSQnAM9Br2DPxP4datzqpb7aRRBjq152spyszuoYivRBRJeGfWwXzXm7Q1q7NFpMpgD7CQ22S5qnupFX6vaYuU8",
  "key24": "4Ed6Aed3xAqNTQHRSc2z9ufbuG89RPgoVwXVekR7ZwfSNHidbeJwUJ2ui75AYMn7BfkhARoSZrKgNdQLHmodyq7T",
  "key25": "2saHRs8mT35hL3tht8pvPGgSFSpZfEEmLb6a7aFqQAsiAB8qET5opUFntg6UdT2ae7reNrzXTXB8xS35u8t8C6Zs",
  "key26": "3L1XDMzLeo4WfcR7mVM9byhwm74dn9sYeDSqw5UFG8c4gPAPZYgtrVmcVR52dBgTSRGzjzaMM6uyoyrGmpyYrZNk",
  "key27": "3q7YxSF4CdGY3dT19LRgRYEC5BXs968844vCmdMvR6RAiWfRgbwz5cAAmixWvYmvgsQ4gekyeN5po6iMRtyepW8h",
  "key28": "3HYvkscpdEHCbRtBE8X1p4WmSyGBYJ1FBw5tQqFZ7yrkB4BoDX58P8LWsq4cRQqGWa1Lu1KGuUAq196aSeY5V2LJ",
  "key29": "4oxivrZKCPp5ju98g2YULkgKV2cvkMZs2bARR3VxZyAdcwtoxWZ6qw56u28n4QnwBsbfgjXzL5bRWjHB6VbhMXWz",
  "key30": "48TgS4Ja2BcoRpxRtLpm3TJ1ikhWtHoFeAtxAiYLcy1pN1z6su4SaTZCK3iu6fR6vjWXucuNYbM8NmKCfsQdeApF",
  "key31": "3ZJchzFQCQdzNMskwfAa71tRQrHPHqVcj7CXtumKPXQnC1CPWyxfMhDbdoZs5yX744E9JUY7zw12QSDCXRDrnugP",
  "key32": "5t3xCWsCdEhXv7uH6qh79mqQBxEAXCbZuRegujrYPL76KkZL9ZT5pXMSAaJwviE6taRTVAgMJXE6RRySst6eQmcZ",
  "key33": "3vHoW5dVoGoAMoxayKPJUDtVCy1TEQ5GmxCYm6iprfcSdV9BS8r9Gk5WmUZuvjJhiV4KMS5jWJDN3rpPeNhNXMxV",
  "key34": "N3xgpWkiyBTj9uo3cF4bghnnf5YqwpHvXnary3DFH5SPtcRysGkTEdT8pZtJJnR6dhV3QKgdGnFgFLhuqph6Vrk",
  "key35": "4PVvHBRTdHwKEF5unh6RA5WfX5ef9gV4XqAfPWUECuwEmvLj9vD42fRpYDMvzo6bsJARjY4cEemkzAcNuJpypaEc",
  "key36": "48qEd5tH7zRZuHuVbwen3MJUSnXqKe6uy5oDMyKgbTz9PP2FKoMKTLQ6QgxY97CGxQKoQkT6hCfxX9hD7PMUMVK3",
  "key37": "QYqagANe3FweeETGQC5oDaT4qMB74VMJnQVLBHC7boDtJAfmWwRrmwH8yVRwjy5XhCqkNKHyNvFy4d2fzhzdcLt",
  "key38": "YFqGzxayoasxy4Ba9WLTuvn26QbC9z4Jjyu6AFTftWHpe4VsNM3yvA1ihGENu1JZHbBDnRKFG9Xa71hjxQXjTph",
  "key39": "2Q3KidmzAqt1EduMwG66TBkHMGoHGD8H8nu5ZPWvxQD37z3QcXAFbdqa2PpfUYTmg1frxymdwkGQ9fk9t32YdKox",
  "key40": "26i78m6r1KmDoYz5HaEN7wd61KH1Rx5pX3WjmyFuuXxdjkQtthMAnBmQEonF9A8MUMzdwupKsLT19HwapU4MJg5s",
  "key41": "5pB5jaNRruAJkBfURaXHTQYAZqLeB1g2fNgYyFUcoJWqJk5zEuMuwVwYTAJWNVFh7xLdUqQHSTW1hT1hDV6mUfyi",
  "key42": "2ZgzM4gbE7RG7Tg7YS4JQnmTAo1btVoYGnYyL6ZSKwSpGCpbSDFQ3Tc78YKfhQMYUHVAYweAeAbx4u6y4qG9k38j"
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
