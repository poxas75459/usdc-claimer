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
    "2vZGE9qqqJaD4fhBfjisRaDmPAMTD4zyHHNUBQpEADjf2LeSwYoYfeaXEXEPe2ip2tMuShGZFsbFcFnTSAfC3NRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aSLa1jVWjFxfEUNJKuwpQ42LTpcQNpAzTrAYq4faDN1nCGaApNcQUMnCubo5nftPFn4o6CiGFeB7yQdgpBW6Z4Z",
  "key1": "5PMwFuZHRoS4zXnpR5WXPcdWPGCRgFoaFBM8q8n3NaMgMeQfTDYpyNDov9Dsxr23ngGPeLLrodKxvnob3p3VWaS6",
  "key2": "4As3ByKnYb1g6PJokhfXVjQW8M7UM6psT3QYFvRgzCHD3f6je9sVj7iDbkawE8VprzxWFRVyPHqn1UvTVNbYSVzr",
  "key3": "3TE79ztLxpaeVFFJV4ua7zUe1VwMJLhLWRKuBZdRFK5oB15ZTL2KK1iJf3tuASf8tJLPJLbGmZTLfQVer2oZhXNH",
  "key4": "2V87i1X95Cyyn9RBfrRCn4vHjMEuKyuNXrb3KmCcDsotr8oa9gJSC5537x5JBdvA6jE2j6xMaRGreb17N2PTWrXe",
  "key5": "32e9D7YANaYtxhhJtfDASjg5Nm4rxzrMVQma2vvQtMDSxBbFLGL67k6Dhf1LQStTcCCkogMrnP4iL2eQt1dc3Nzc",
  "key6": "5jvk95ar2ccx3oVuCr3C85BARogmEfjnPabmkttyEr1xxZigHkos3cBRm3P9QpR9ePsdmCZiEAogKnuXKqxPhZCZ",
  "key7": "2MymfaMrc8xHhj9Qtr3NUhv3Wo7xMQyfBF6KGzDjZoasJkTCAjEpsFh2yfFhafVUtMTGhTz3LuGvNyPBcpNmKNqJ",
  "key8": "59enjizbbhdmDHoHKGWvCT3pBFQPZ8wcY2W1Njb7xJ8YWtXeARrsqQ3gfPL2UzeisQxTcpN852V5PRb95vEkvy7L",
  "key9": "4Eowj3W4J1P9Lf5ju2qriGusdqLCsYE44Q2meHPD1NCsaY94dJZp1F5GmiENnk37yt4AXSaW7X5cti8HTsSKCChY",
  "key10": "2ZKVdrA6wtihyvKy8787U9BEB497fPrNbdsFzZQcnhLzzKFnc4ygBFpLqrnCV6WafPNsGejJHFFMBPCoJY8C7tYx",
  "key11": "62m3NjE1DVNakoqnMjgkiGtHZoJhPwvBYz6Khad2m8ntosi3LkwnVsPT4aktBBgRiVo5qvDYMGgW263rAfpmXmf4",
  "key12": "2j9iipps5WzuFtLMZVsx7p1jMkzJZajC25ta6aNpJuM6bULxjT1ANjotZcJJ1cXnZom8qTgzKYqU8o4GXe2WJ4fC",
  "key13": "76mzUGN7Qi2N7s71BoJWq7ed12Yhq44r9qazHWJTYXyz1WS6CtMAJzknvJHxLwPhrRLYXsq5nJpaa8pY1vMDeJD",
  "key14": "d7P5o7QyXu2EYbxrKEetE5SjesCDBXc5Kq2Q5MkGPMqsf6rB922QXjWopJpvQubs2wC7uma4rH3ZBmASxLMRbYu",
  "key15": "AnPpgD3MZVdonkHFCYiMBfXHUA5S1ebazwptgiyjkeTubvwm8oQgubQypcbVAmq2dP2hE1AvXUkKRsxM9kVeo3z",
  "key16": "279uL5GG1ixH5Jnqv1Km2JCFRu6kng4VqkjRP6BXk3Ji5okUoAGej33GwUfoY9VhVYRqVwF1L8MvYha9BGLXt8hX",
  "key17": "3cUqJDEuxbe1gSAbPVDZS9PvyCGopGtkgWN2PchvYy7hBwiN15G9cYJxcwJm93jttyNQ6XXeqVQrwWn1BCMyKhFQ",
  "key18": "2NaHJz1D2S84dT46SPF5HHQgmq3Sf9adpkYaNzWnRLSffGvPehVfLzSczysQeRWzjxbNQRiMK43AkACAaBwRjqTm",
  "key19": "5UL4oWhSbq4fN3h4Rp4M9YmzEWT9WtF5uysaXvsY3qe3VMr5mTRF57rc5iXX2kN19Vz3hqLKbEYpiCAvupXeXoHP",
  "key20": "2xfqqwAhEqXKpnUSfNaCFuvytRcQj98b1y8m9q9UYQLEaTmK2HAX8LMmikgU1zfKfg1pbWT67xNRvP5zcVZbQubF",
  "key21": "3Qy4Jg4YCr5Tx1R2M39BLtCALkxRgfRjMNwL2Gs6HoB37zT19todqciHaSsTcR4WnLyXRy7gDFVZsYRCWAzrXXNt",
  "key22": "4c8vk72kfVjfGbNxLJz1TWLoNj577qVgSGvLtH4N9bNf51naodphz19PFY3qjUxWMbFEnCN7DYFpXHGn9UDUsbmX",
  "key23": "4bXtBywmbapvprRfDRxVPdRMFnD7uuQ9G6DyuvTVkgWMvncu9png9j5DXPC23dyTiWNLxgNepnEBKYoSCCnPsAsZ",
  "key24": "5nVVaPHyoeR1jsPS3UnHNHYjqsyWnoqBhSoedEvLqonExQyPq2axkbcQPbHF1Auj3PB6DBiutyeqe9FoCkgZRkVB",
  "key25": "3FT7bfjKc3PXw7DoD3FotbzbhYGAxhmLFwTMHc27CSdxtw3vnXgajsxGsEJgSdQdUbLRyX2t12shT7v8N4AwBR1L",
  "key26": "Nzvvq3pwk7apUU8gXRP3yDEzWGkv29PJu8RzB79e1eXy33hFjEJ5PSoX8aD2jFTm94VZ3L69t6KX1SFJM6qPD8j",
  "key27": "5HwByjApMKECTjQjPFENmazA5ZmGYM2T6imUu1x6X8bsjEQxAXSBUnp5vEZD3Gf6xjPRpf6C7iMuar7TVeASKiyi",
  "key28": "3itareVWbk9kdhbPshK1C7u8yg36J28UDM1QxbVXa1AWwSrC4B656JnNmBCASkaQvZeZodKQR3rMq5HErHRAsrd7",
  "key29": "3vAampKr3J5k2Ro2VvEsPgYMgxBN3aru77VsJVdHWT3NHoFTYWYjxa18dU8fx6r4ePLkmKxF7nt97F36KXS6y3BP",
  "key30": "2HoG96VdPv2aUKYDPZT1GrwvkDe2U9quRPFg2gY7cJK3tTTF1STT8wSQcQRq1bDX9PQVfGChKRXf6pfddEArWmXW",
  "key31": "5Sjw4GpTB6gZDKeSyvBJcQYLbY1iKQx1e8eKcykGfotVFipG44j82D9r8VvWcEhZFe7A3JZ9vdU2FRd7Gy46SPvz"
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
