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
    "3hRanLegAAosVzripYssu8qDHi8gEBcExtgnqzNjYJL2CVx2XMKocKgkEgpsYGMCYyaakawb11gb48fYR19m97fH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAscjUUhW7iwFCXoa1BcRLMkeR63pGhjy6VZsahjYDW6bCsUGsG3GM1GcfGFZYx44E4CsLpzfUkrWfVmG3MY6vd",
  "key1": "5oEGdfvBaWSSeETbWi9rJMhFRV9JFdq1fKHtUzrh4QQs15wKooAV8dBatckx9YJRzNzy7q42CLR8c4NZ9zXeEc6q",
  "key2": "3aP3k6wcu6jy7o6HaSZ8pVQU5EZKPTh1yQecAix83mRTALQgySEpmmFFeVZ8MzHtS76qKcLCPrnBmnUGs5SnRqTY",
  "key3": "22REq7mt3Y6dCg6j22vfVwDxFjafjowa1KHMceH84MfJYTjRqRpi64PLop4uwkvfXW8Bhpb9H3xwj5uBqQVASwRX",
  "key4": "2EHKb2U8NRLoWDgmvDJALXcSV84Eaqew2ayyH6XumQTJfB6HmeTfuSoN6o81Z3Puh6ByUtF5nEn8kitHUNXg8VTu",
  "key5": "3Tfp1HNcPsxvyq96SsHxVEXELCevLEg4bxBexsoGPtj4SYnT4QkaFD2cbYtxmGrVhD9EyQJR3Z2QyAjHxwQeHqtg",
  "key6": "iKFmiUKgCktsmvGcyzdDNVQyZtZt4MMKQHtqk2SnGt8Ej2J4uRW2HKRqUGDgVSZJ2xCSP51ZcaYgTDpGVTwC64x",
  "key7": "3o3wz92LZcahWTpGyYxbKGR6ANeKdj9xs5LF3rt9JtH3DPYSdAYnpXGy97SWbhjB6M9Yw8j4UCdsJgGi8HyqTX42",
  "key8": "2173VAwX4jfyBVZw4PED5os1eMabsAccU2xF1Az9PpoPfJTfSkgUicxhG2aGha8QiXfkWAbHfQyQA5mzsqVZH8o9",
  "key9": "6ivBBNTg7T8gSaH255jk2KPT4f6ZTDnsxdLctVtHcv2qWLiiePTqxRwBabYoUh4XkBPpnwZJXhx2M2myFmJRnBx",
  "key10": "4SLKftRkfSVHPrVVFfo6sHYBeE8zLWpYE5crMb5MUsuhotxMte33q7KRn6C1zmpQakHPcdhWAq5JLNU9UQVf9cJY",
  "key11": "2FfQpsP9RR7tz7dHc3YW9hYCaHWXq5ESRoZTciszT7C1UpqP6JrxAktEtrgX4eacNMgswUnWuDmqf4wuFYmvrMJz",
  "key12": "MQckEwkatdMTN6SjCHrPJCThUSdE32FzUSLMWnnuoPh2MbTE5TmZaFrRriENvDBpnND5ZdUvuKqTQeEu2GbVmPS",
  "key13": "E1FDw5ZzAUn1LSVTEow6Nrd3SRiNBB96Yym1NhJrc1NjUAf77LeDhsQbFMGNLJ25KMtdFU2FKfThbv7KLBRXyJ5",
  "key14": "5vqoSXJRZtcsdBkTh8UsNvWbZzt27zEpWBa7nNkkMpp9tDyfQM3DXcAcrickqALUDnM8yuq3uZHD9SJKLpBdDntB",
  "key15": "CUd4mjxRDA1XHxMsNs46gYYzLTHTHscdnFssnyXU58pCGRBD5TTWMMw3xbnM7NFUSp6buBwCe6noC2PXU99EqhX",
  "key16": "288NfTg9cXATh6dJnseQ8VXBvtEESU5Fh4A7rx5KjFJqaZsBgDRqzithgC99t8sPYwUQNQSrXt12jZxtF9QVKCJQ",
  "key17": "2JrqsZ5CXaTR1ps7JWPZJiXmL1ZybJPbzh7Q6oFH3E1bN4xYDM7sRypGZHv8ANsTBiPJuZ1k81WpYvqfWHeHkyQF",
  "key18": "4wpshhVSe4HpThyKE3zuS5WSiemrpw25dchZ7eBNwmuh3UkFgzqbwwZTNEZm6jdXPb4vSV79yvX3BzeBN7sbhXnB",
  "key19": "KWWUp7e87GV3xvwpBLqYyiCuTCnScSefZDbamTJGowkp89G6fmhNSYkfWvFCAnNE8gjBYifZpHdnq2xmSf4UBis",
  "key20": "3tYPhT3AYKRagYdEPQo8EKbZGeKjXK2hhKSwZM9Na32CgWsLqp5tmYfWxo7iyEF3xovpKTPxiVpbRohNdquAFJg3",
  "key21": "3P6iwD1DjwLK2ZLTf4fGyay4HvFoMypAMya2Trr1BNBXnxZhKbV8y6QaUcrimVo1TqV3tvhoEWnitFFEUK81ZxpF",
  "key22": "5G8CZ2u3Lxpngo4WNtrB9mwYrEEiQDJ8vFeLfwPmbxm8dzahK9QF3gNdr9FDxpVbquDKPjdhTQZMRtGsNKkkAzFk",
  "key23": "4mdT1Gyztwdyaqm4g6AvF37TWyUdida2BVvPAvKsQKczRPLyD5HcXS38qAU4oRUWyQQu9cBGUKMEhTArDfARKxtF",
  "key24": "3hyxC6jWqkvvPwAAKuzd6u5uXChqeg4RAEEddWVNnUWQkKD5vaWtXmovo5THEuBJtaYRTiME752W6moJtzR8uwJ8",
  "key25": "2EBFm1okcW5xmXuEruenvRuwNUtCdr6L4tpX4sLbS7EgRx9cMBKxNau3882eRT9BJKaZd29cwHnQG48K2Cwtsd6K",
  "key26": "3fUwQyefw7C5y8mBSren6rTishDaRVMzAgSa1xifAv6dqU6mnUEACZFm5hzBbsXqCQcSziVkyUHrnk14wA9Nz9GJ",
  "key27": "3S5Di4o1QDS7iqKEGZan3sMGL6hMgroqFAELSgXiEMtJmxYBu46RQ5FrrM3hmQb724wiViWjfWmEgxYMrYBxav4z",
  "key28": "4v9MQaphpfddW9ZfNh89uzvQuB4tUfgFrABZjuggsG6KaFCDuYzbgEa8xDkW5GXuWgCxY5TgMEhFtdANMuEafSk3",
  "key29": "7jfQKMzARq9VSLqCeNbuqT6HgPbo7fQrFiyKb84me97kW9r2SiXPZzWuHGzi33tGNPLG3t3ryJgShLyibnj68kE",
  "key30": "67dzzhfujVAznYFdsHo1jKWShVQENeC6PrpW13yYNEp8zdn3ZtxjcxMjNokxw5dJvBNYuWkwaqTTjy2YSF27hA7M",
  "key31": "ctM187PVKYW6L3PrG6Mi341DsKwDeZ84JoRPfJeAGjb25Rr4rvfRAcRr1ye1p4RfuzWoZT221UvBxfgNAWajFCJ",
  "key32": "3WyALcvSYtv2LNsBHUMs7TpgKsppH82XMPXRx411gmFoLVt7pmkEHKKGQ7Uey91Vd1dbVydesdswteixU9yUsV85",
  "key33": "2nxG7Le3GstDBLocLbsaUMe4XZSenp1gtLVF18d5Y71tczVhQfi9wJy1Cd3dn3r8ZWD9dhqqNmKkvWnhELeeps8Q",
  "key34": "3yMbvbEGwF3YR2DebHgZeLSqm4kYdnKhehzhjio9KpgHuHGbfALW6tbjyE2jYXxEzpKnqasFz9DVmmmSMDNfRgHc",
  "key35": "5c82JMWevPiaMegVES4gW5ogTkPp1rksYauhiwTpE4W23qCPx3pA2wXLYKt8kbjLx37WZF2PV3i7gjg4sBkVnt5Z",
  "key36": "JQabNUc7tRDELzA7ATwp9kPHb5Va5Lguqm7peJCXGnfkgw1HDvcvXGMdiK32wmgCu26w2twXdBzW7AytPgvJ3iC",
  "key37": "4krQ4GQWeKojV8B8dR4Yf2WJR6C1wsojcobv5eYJvk3TkuJefRkMFGh5HnqkuGMHzGf9gm7eEbjgWcPX9U4fCUmi",
  "key38": "2XMKdaKw7Ed1qjgRohKFidSGcC2M4AMhcDqdim5iseZFpQYiFK6YmbuEa8A72Q7TcVduF4KRwasKefBjYf87EHG",
  "key39": "BaAJjvVBnb6ZoPSvzXF89Tteu8z69TCp7CFN9ofS8uPpjWmrzPambrcPJXpG8ZKPNBnsyQ7ArL57VzEBnKLr3zb",
  "key40": "qoV73CPBYtn6zU65NEV1xzPej1nVtCKosXFpfNdGRKAzzc1cbG89ygMDPBPvvqvvu6sp6FXnwX2Yk4ogkciT4jH",
  "key41": "3ToqD5Z5sG3rfMXA4f6pDSzBBQeqx7Ss9L2GY93Xqo3aydEM6TSDHCDjBsN7N9ZJrspGr4bUnoeSGvcRRA5sMU5P",
  "key42": "21MWneLGz5DQPo4EVXmDCdqFoPHg9TNq6aAtLipDs7DPYYtZsXbzGfrEicYsyD9RyLSA6qWTTyZn4oGw7RoVjVCt"
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
