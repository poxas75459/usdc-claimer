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
    "UD6fw1ZEfFr29wPhwngYWSLUdGx9YDXUVbygu4aUyiBkEg7pn8g8HmmvxRbsCwanxkad4kXoJe9u8bXrHLmS9CL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7sVnsys3Hw6Hpk3xCnS5iE1Hba3r31raohe4c19GRRD6CAVndZy7PiHBMCwzw19nEEoXtbCPwwytMhvYPeUa3w",
  "key1": "21jAfnNr7FJsLFfjpMHvN1NMy2WgYoEV7AeWn7hcF5ikgdp7UEtCLCowyuc7dEVkEdnh8ccTSmxCBgTRjakM7Uno",
  "key2": "4TXx7k56UPpLZhgdpCF9RVQnYVGVLqS3jRuuFGpeM4QXAwRAbhDHZBBzfC1sjDYd4yFDGYnxgoUWUWaZu8Ah13QB",
  "key3": "32ZjqVeAzwdEd5qBG4iRhAKHVfdY36kSbdpihD5viijxx6iz9npnzKuNTEG7mqwqJjswG5CL64XVw9BSWmeBWkTB",
  "key4": "3LqLA4B6FBbfvmdUbLnAD1rS8cud1mEiVEaksJREazHsPeWZ14UGgLCH7qCMdy1UBqkdBE2Z6vQ53U2nBJycGd7E",
  "key5": "2ZaSFXuehD1HjSzDiT5xvAguBPeodu452wKa3s2TjuD5wRvMrwjV7mWxvhyEgmeD43MkhLjTJr2KHeaJb1STT4xu",
  "key6": "3cfYFPSGuXGyvMpdajH3odSzwjtrkypBRKfVs49NT5dWJhELsJLnUqbvfyaAdynRs529SKcBWXVPukXjNVW4YdHn",
  "key7": "Fmfa7jeRZhsmQUsz5bhRxD9wPygg8dqnEMwT3PauuSyJWe4CaZev6uxtWYF7n4iahTrGbyv6xeovWvQw19wFvqw",
  "key8": "42AKiof1ow7qhmsYoa56THjy8N8K6BKxAY3nUJ1r9mXjNZQCyCSqpXJid3MwduQYZv15J9V8NtHcLUuzJBeyvrEb",
  "key9": "66KVsRJpciGnRBhBrTnCcvk2tQLy4tZ7dabV4cKnYRoqPFABAB2GvwYHHLcicP7NAqPhvknyVmYUo7XuYzuwK2DB",
  "key10": "5gd2nQpzstE9NT2ywPXn3tiqAhSx4MSZQ353vn5z9RTnTV344Xmge48rCEUzsL1ZS4CeRb76oRMnBNAVDauLd8yT",
  "key11": "64dKRqeasK1WSpRcY7F22jaFq9xNqYgiKtHvcE2Rg1yQD5JzHA5s8GSURqfdFVWZst7xwtRCinc26LDLQ3sTzxVy",
  "key12": "uqQS27zrysB8qGxVsAgZctH3HYLZWFf7jZ6aMEqeLk4EXPoPAcK2o95j3qqx4NMCa4cocit8Av5vo3AvEbmgVrd",
  "key13": "BEh1mvN7RYcy5n9SYt8WFrMM4PbfzX21CQPkncVKRAZoM2miQotyQbX4VBY83foTcdpcVZbK76hmAaN86AGeoD9",
  "key14": "39b9kz3rYqccG8hpUM7cX6Zge26ZXwTdj7CcpDh3U2pGKfPtjvKaVTXuHfs4DXrp2RiJE7f4VLqiAHB1xCkjp75W",
  "key15": "3pHtz6kfkyk6yWkpHGggJ8ZvGRJ75PysN2tchjyzoys4LWRWewmzuzfZWfntPCXe97E8yiUxAJ34EiYjQ23cPmtD",
  "key16": "3RYbkxtfrzzn8rtSCNdYmYBdKubcUQGqnoGP7JiHggPZrAj1Wq75tpeP7ELCupRRtpLcW4gzGqV2pdXMoih2g8rY",
  "key17": "5ddqWE3oy267FSN5dBxqW9MMpESp7DrSNS8UAt5w2AqNbHLh7VXh2GJjqTBzg3t6ky4AR1r4qHzodL7t1Yezkmjz",
  "key18": "5N1qVNZVsCxrPb9QZm6fkW2WvHgKxxrqhCWF39otpEd2vBdRccv2euBYrhWfHuJSox5H1sNhUKGdaiiz3r76V3SA",
  "key19": "QsiC9K4cttgY1xDgkBPwvnuExqV3uZ4tCwKVREJAxACU5df8kNY5A8MYtthag4yy1LPhp5eVHPExWqT7yoAAeji",
  "key20": "UAbu9XbUDHettKtSuRPwXTvEP5EJ2uHKYJYd3TKw1cHGWNp8R3XdGt2uhaW8LqTVh36JsN62kfhUbai4N7EGgMs",
  "key21": "4M5odXC1Zoo2N1oQH9jNsNnpKc5mciPDfjwg5WPqH1azfWvMcpWPdbTKLkJ3mHR2UwVddWU3a8cS1jgUiyGZmu6u",
  "key22": "4tvg3V23Yeh7GJ7mwkig57V4BygVu1ZWy1HrTTNqo3QVqMeDZ2J1hzdwmPJAwKCcpkovQkTv2E7H6fzdFudQ7dg9",
  "key23": "E9S3nXJn4Pu3Hu7mTWvGFQpXLyJHSod836wWywg2D6gH6xci5W3csLCXDqgb6AyfYXrMiaErZHooCDbEcvgWruc",
  "key24": "3mSDtgjAnsWFjow6ym5Qp2wqrpjRiMS82EkUpJUsQ332eiSD39NkFh41ywiKp56dtiHkChg5EBpabQRpEsxyMAQW",
  "key25": "5gRc4js1LtttU4YLPYh4fyPwKvpNSkuqSrY8FDusJvzvz2twsyT8jxYTeC2gcPwwyFoh174zfccAfXoYcoQ4ouGD",
  "key26": "9TGtU73s1Dz1zhBU3ExVbuzuZ93kPs1emtLvsiRCvbS9ixKoGbuTKLf4dax8wtcrFQ7CG3eJYXWDKHastjsw61H",
  "key27": "DjWs38YCiJa86f99azXaFif2CFasJvrbDsEMZUJ6FY5FYxRDUXwqrs7VmYCzvSNuhefReRMbiXfqQkPs6ftqL8b",
  "key28": "amJyRgCXhXo9Dn34rjYEdkz4Kf2P4XjsfFgaW8GVQbRes1hiHL4gBf9LVTaPKbBhKE9ooVudMfBBcpMxnbzqp7H",
  "key29": "Ai51pKEzKxp6z1YZK5SGEyAYsv9JG8gE4EgxKTJBFsTSM9vjvwPTXdASyrpC3h3GaPAHQb8Wqv8XYFfbU9SBN9m",
  "key30": "2Mz6RYTavMorm5XTu2wJJvWiDwAUUJnNN9Dqsqbq34CysuVqFw79P2WNk3NYtBtSJasPJWUhfu95u3XXpt8WY1xg",
  "key31": "S5EA31HAuamn3cjAcvPekaEDtdjDhW4Tg6pnxLMnZZqRcrr13ug8HxhdhGQTdHML82Cij8TFX9NsX3kySh8Zfbg",
  "key32": "2NJAxAjYPxetVm8Z99qL8h7UrzHuE8zW4UtDDt7knvQhGc1qaVujT5DYuDA3KTkNVuvABbtm3F4FEuc3RWZcRUTX",
  "key33": "dYwxrzJQYqo6NeeoSL9WQAuWooUKEzXPt9wcqNjBXmjJdE2mq9nkZ5z2VyXW4kzFeU5j6hdxbxddyJjBswMuhHp",
  "key34": "5ECz2bhGiW9jUqaE6mysazNkotF72jjr66FLmeBSH5PrKJRyEf7HsPYmHVrFkn2E9MQZDawmWuVyKEmZ8gv3JKqK",
  "key35": "26FbBaB3qeVinwusgWVaAAFNqnTwY5eiXwhkBuFJUybEAZhRapLg38Y5bRt497cQcCHTSsD3pj4keqCM4CoQTSbd",
  "key36": "2xWCSHYr7np9VzTqdkVmMiU5EnHzaWf3FbXtxc4Hmix3XU4sDRLH8o1esFvbjqENajsJsMkrhHDzWKtG82PQTWsV",
  "key37": "2eUdnWGhhyzsCuTeieBSLDLrficzu9nX3hhzKZ7M3HJPYaPp55XJ2vT8nait4829tujMzxGavWJmpBH4S4FBkZNL",
  "key38": "5y5noB3cBRx85a6gmVbVajevQ4yu9md2HPgx5SxazrLvwkRFP3TapoE6951TwNdKGtC489DwFbs386kJFy9Vwy4a"
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
