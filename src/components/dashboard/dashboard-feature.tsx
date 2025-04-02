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
    "GDxHNWkLAF8ffsiXeRQkuA6sxxzDrwNTeMWgXjNK6pgtKGu5bhZTph8NgNdtL5LeniQFekpxQsBgV3yhAXTQZVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXnYsFQf5N5RwgnPnjyH57TSKyFvATWfMsT1ZHgE176k5Wo9bxkKJktmaKC3Rpoev6cUbqfj8YjDpH5aaJ9GnsN",
  "key1": "4EzDXESXKaveSpgYjweHbD6B2dCPD7jvi74e4677aMWhKvr8z9pUAAkJZoQovauaSHnPj8RRNmHsJrr2RgvzM1sK",
  "key2": "59eh2ZiHAquboY7StRYAy2SQ7yT8E3Q26BwJmwFAsEu26oagdPcdMb7ni8b4AKwqQF3ohgmDokfFfLob8vR2RASM",
  "key3": "62YXKZoNsVsvvjcxLXL4QG6dvfRZ8dokGM4jdJAgQyBfJRpC1TvPC3sjou6FcW8ogptRqEWZaRcojZKFiVpa4upn",
  "key4": "4Qr6CCoHBopEt49NBHDCeCCmHRcK41bFQsk4B5UgriZ6ip4SgDfj4MCFNzjorzupV9vA7cap2EaewJijoyDRuEPu",
  "key5": "2713q9FNEAjAe7bEPmtCkfJcQPiGU1cXnCnoiQVmz9HWrgrsy27kFahUXxFWsyT68TRkdMpA7XzdqMD9St647aaY",
  "key6": "4SMn36p6USvr6qFHnpFaSAfC3Gawb3VMDEeKAjCQhtimpWKC52bqGoeAbSvkss9fk7oQvPfj2LQ2UaPx2HE6ewoj",
  "key7": "eHQ3KKj2yHQwMgP72dX4VYhnf3xfNKPsXqZewEgU8AuFmyZSiHo2QMUqfR3zfF51eRJATo1kH9z1J8i3NmZHNG4",
  "key8": "39dnCoSL5RzfgX35XmNUU39Xj5FXVMpYCSjPJH49v57GDLZFpRPkTioqJPg9JFPEyRy1zCsacgwwuFzph2MJ6xHY",
  "key9": "54xSaFwEL1rJ6qvyoQMwHHxjEMyqWKQuJ7uQJimdyaWRrr6xVTLbxR6goc3EbqvNYKh6Rqdh7RxcfnKfBtaEKUgb",
  "key10": "5s4SEtveYEPDdrnCtp3xUGSWabu6rksvAaStvGj4sZbrGuSAT756kt3mMphNpdkSZjBEfzmVxqAr86MVkZo9RxZr",
  "key11": "2d1aZzNjLNjuur8pu11rz6czs4fDgTnEAkgE9jBvyG7WaajDnRUjCFUHdA2t9odzkd4Bka6qKpiP8GM6cQf2sUNQ",
  "key12": "4jU2pPXBuTRGSmzZGNq7nh4ZHcrpVbLbbPhCVsiG8GQPNGhZ6qJ3hEoep5nqijhHw8EQXuY88SkK22mXvt2GL3c2",
  "key13": "5EjrhGQ9SBWGXsD17HMRvCZwbECg11sFkut7ge62MS26Djo55pXo4tT5nkcZwbgVACfwYBe2sv9v6Uf9hWz6mUTM",
  "key14": "5ZtuSJmaCnNnXDXYNxPEo9M6MPP8MAXg8JyZLXpVMQ6vv21XHTwWebW5bUxmmimWJAQV4AaVhBMU1dCuMLHL1CDY",
  "key15": "5UuSXdVDnNWUkKHbnVNxKfSixrsGCVMB1Q5NZkzs9dJBQex59epBEBtoCv1ktmtgqJfEBHxcSAegaM9chM5UgL48",
  "key16": "5pRf4esEkKtoz8t37VPFNv5iEkwxJcaRFUXyF9wATDgSba9Fn8H3keAGU4EhUyUdKNLwKUHixgbxtcqgydnFSbMw",
  "key17": "672VETi5zb3b3tgLV2cWULW9gLhgZBidKvfvq4Sp1eJ2GGmrsEu6PnYym1avXYNmeAYxRRNGv9xkcijer6CeVudq",
  "key18": "ALPMeKrkY52YEBHNaeW1eQPQekUcdSyJvPnf8Se1AFPSSC8QxkidJueNs7tzS8BLQ4A2wjvNvGN1R7WrmyPs427",
  "key19": "4pAjptU8upnJnGxDHkDXHuFiBKMB2mjNGSUNs5Ui5xyRXKzW36gfaUfc1UkD9LtrthuRcaCorNh8X7PsyP3HS51x",
  "key20": "2PG4KDjWmpmuiHdz8H6TPc5f4gToatpD287DQCER3QPdtAvfP4QF6SDniTxYzzJuaj96ATW622xx4KZw63KjzmbW",
  "key21": "5EpohTV2kwTjkYzFmaMLc9FneQ5dE6uJk2kHs6zJfaBaJ2U323ci3McXSRvv6Nk7kfadFm1Eju1Yk3zDQ1vmhtWK",
  "key22": "3kvkNoSaKaa1eK5mpyoCftL1kEx6tLGB9nVg52ZR1ZUWXXENmNtQKQ878V5brHa4rj2xJqpFPVMKuDkpvDpihUsY",
  "key23": "5bku9VYLj3xyqY5uFpdBgQUeXbUwHuk86ZVJAt1My56ER3YRM9Pxn7exREkqSiSD88kfzai9drbxnRGXZ6xsGLfL",
  "key24": "g5xHEuR2q7XC2hcG6KSij6B8VpzuS5bScQxYRfpC4h4onkA43hfU6VUgnxMDAqZ9xPwWG8RZp6nkADsPLzyDFGR",
  "key25": "3yy5HZJ92AyfjYqU9z5k8shyDw4FcG6WzE84XTKhXGoJ4cz8b6ZPs62rUmbQwY1BhE1M6PRQGwR78G5TrkBkiELR",
  "key26": "63o8ifTcTFg14ypq5WS362gABYHbST8fjwRJijR5bHva8bpK4jjtn3CnFnTsnLA9DZZ6jB5nJVuEJaUVBv2D9Fky",
  "key27": "2r2sZpAYHXak1WtteC9nDs6P6L2LEGEPWKsXgJcWvAs31hbWjs3S1aQzp4YLqHdm4uX1dWJ6dQcu4fkNTTDpSGFH",
  "key28": "7bpKyEnUp731EEr19jUxM7v8AZZq8wq6bf4bzH1k8voqCDNQRPw2iCGH5A9UFmuGMPRDtzaVmFyjmFn5hxtom6s",
  "key29": "G6cvqRjcc8XJg82kCTz1b4DnxfzEgcFh5gecvfxzG36Sx6TkpjWH21u2DpUWtruxphdt1tzJbUP4adwA79Bytd9",
  "key30": "2xV7oaJsBT4SUbWYp1n9kHUd9itQXZKCQcNkCRE1dbusLGyrq2jn34B8Sken2TW5aT7oGMYxbysDVTgcuc3TJkWX",
  "key31": "4S2XeK1f96ooSvyAUGKdepzEXgPfjwqXXbxm3um1876bcdeRyBanzrcNSu2zCKMzDT4ErhVe5c8qs82K4SjKHAj8",
  "key32": "mr1TPYkdLdVmTRayXQuS7hLWPNk7aaEkfgwmXuDm27YDmUSbMgsFVpMDKFJuEeXeiyrqNg4VhYcuAVqQtYRCFXD",
  "key33": "4se63yAVnkv3MXUDM5CVe5gRChCKigSSPZFAatHj7DA3jFJhTyfwvTrec31nXJSYm3Qmg5Kn8om9KuT9cZZUeBHL"
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
