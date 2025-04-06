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
    "643uW4Hh9Zh5Q9ktLviAvcpfUhXNgzyrcJrtQoocbb9yYdGsnwinFVdLkB9D376jyR3LwifnK77kyqo9dD9RzDkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QRjg2P8b79NQyxhBVe7TQrRdhwjF2QFvopJirXUyMyJKyuZsjBzTSEAgfumr9xMrMWbC9EkP9tPSvBEnbC6zsgs",
  "key1": "AQA9RvU7rEtRubCDKzXLp28zzoCq2dcVHxNY7jPppYZfZExoNFwjsWbUP43VDgZTpTQV6xGNzZoKeeqYQjkLGgZ",
  "key2": "3H379vv6mAzdtsLUiSurgk7Ty9o242SdjQmov7VFhNaWVXNkbh7rNNayW8R12dE8iC7c571LNXxJzWEKzfp1KZJG",
  "key3": "4g79U3ZZGBj4Uw3KxUgWAmhSdAM9B7Zbzj2JyN5xuNjrPNT7cor1wjJyoZY1R8Edaf5AYsy2uUCnq4mhbd8h5efK",
  "key4": "PsQDkfLj8tE79EvzaXifQqbQZRkhsNnXyeoqAAjg74w4iGFi7sGxYJJCh9dNa5suTyEnRoGxkUSoyrw5ADvTfZz",
  "key5": "2C7phHewmycmWnKYU7nCmXqe1NsoUPPu9o5nt5WrqK2E4HCWe8i8223r7oq92ESdk81e3cweGtvaSVoC9qssnbLb",
  "key6": "3iookeB5z32vNyQyXRAVWsRhbGsUXdyiq6xgidCanYiNRfGqHCj8eeyTDxUVoU8MpEaNzR81qiFPdMKie7wgxRNN",
  "key7": "rXTXNxKPU5PhGkUsxAySjomamPCnaZMJFuUdGHtMSaSqt2PJPDhjBGdvQd4NGHHcXyzUbkXjkhfLg8G9A9Z7v9u",
  "key8": "3D4LwdE7qp2aRLL1Y4xZMTQdMbCnJrxzJ1qua8w3mFfH4AGB8xwr7Mw9uzw91LGH2AUsQXcWwFPbv9bC2pGdfBW2",
  "key9": "2QzQ2Z74CWP3c9XyQYJ5C32LFXPw381h9FfAsynEN45eNKxMMiDn3W2E4Vxd3yWE9gJw6GqX8BNMqVhsTPAgCUTS",
  "key10": "qrsqTaetqgZYAbhPsqsNp9D4DR5nubAY9VPpsFsePk779vHUAHAeUqkFcvd9qfeEqbxUMNBrfZqKxwjs7gsVkYE",
  "key11": "wVqMiDzpX8rieBapZFJfAhzRFpwonYb2Rysg6DwPJCK14DffGbzcEe8yhktRphM4D2Hwf7TbLJdHy1CpWWB8N9F",
  "key12": "5oj8isqMUbopD1iQXyddgEuTfRtEHuJiuErFYFK6EP9WusR5zPzvHUMUL3jEuyoVYg8bMwGhDfUfWQJsaRhMS5XN",
  "key13": "3PHHqr6P2Q9Pyc3AhDtsrXRFkfHXAesDJgPiVC6sziJ5r4hx49vFxavYV43ejqRbz19nUVBAqNXHnST5dbfHYgYN",
  "key14": "2chTZHoar5Ew98JyTG49XJEfm4cazPWMJvTB6X7cns8xGxhWGiwaMEhg5ACy6nqn6vV4o4XEUEgDxD5AFwS9N7UK",
  "key15": "5pTD1qutAXMZAqKg95BzkYULBRdK22iaKt7s5fmh5fqfQcmzidYG5AfYUrSqtytHuo36u7P7pggym53o6YSJXUUZ",
  "key16": "5Sz7FZWwzt6rxGDCd7mrFsH75F3b3TiLqGvgmZ3CuUfpkCWGjYeHb4g3pKJ7eS9ZDP3Vvqa13vXQqag49L3xQ4UT",
  "key17": "61iJV24LHhGNnhcXKvV8Lcbn69pQXoz26rQZCRtMgXAUftEigKpQtuNhdAokEBauupNfzNx2gB4Z4gXnkQjk2HaY",
  "key18": "Rre4Rc1grFnPVhoZyHKyKeeH1uVLxxhBDuEyZU5UXKzbFywcsonrTwvw5moVUpre2sndw3EM7ShpzRWN47mmFCk",
  "key19": "9BkC3rEigMavrDyrHaENuy5nmsA5HLoVkekc3eFszfT61GWCVHejMKyXcG731dfkr5zpU44JTCQaKQjpYrQJF9g",
  "key20": "2n7W6XTKU5FuNopXzJGx3W14u2opA2dquX1Zk8nG3mf7QpETXcB2bJJUjhFWJVTLqrq5cV2UN6FcNENbYiDXKAd4",
  "key21": "GbjoyQZkDp2Q1uxcJEFXE4tRskVuJLWVJfxttKaZBoj34ZiZxLGsrSz52dHjubbbGgkMzW4aTKQTPcQirBJaZsh",
  "key22": "5XPXC4RB7deTaFC8yVs2wNuKmvMysKs6DqdiZNaWTEE9hHSrkgmvhrF3txTURJvW6Zk7KLDJMZpPaYrRWZUHMyn1",
  "key23": "iJX5CBV9Nxz7FUo7nQpjZnpJog7njNHmjHngjYpcYUvNRt72Ft2iRG8qc3ed8GpS75CnnBZSgKGS48Cwr4EGLL5",
  "key24": "mFQKSdQ3Kg1Gmj4xY9BiyXFe3x3n4nzpjngwSCGd4RzruCVbxp9pLZnEouvsBventKHu7a4wJ3RCN98KJECwEuD",
  "key25": "2G55Ltds16tqyJfaK8UXTyTau4mfgwu9mDPcHi3fGBh6fkLT5Rh3JEDFA1ivKfDS5otpBwWQjxEXhWwVC6Zh7Cci",
  "key26": "3YmW8228HCWos4HMLqTsQVsfj8HK7kpEwTGkqy74e63vuiHSiJo1Run8UcXbsBs55PGscAAPs1tPbteboJorax4P",
  "key27": "2cd8xpDJuiAqzJtckvL2LMJbDd4U9J7UvfPUYEV6Z8b47CqnmmqchDkkBiSS9taQ8GUTqhLEQRswhDB3h35pyQxm"
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
