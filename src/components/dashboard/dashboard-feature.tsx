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
    "4g4AUByFMUq99CLgtAH3nT9YMrJcz5NN2nf1nPDo89hUX6e8k6z5evHYaqM5w2vEM76w5kj59QF9hSbybXaWKqsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nX1VpShNnLsUA9YuSqk5W9cckZZFZubFUmnzjmX2mF7RdToWqvVUyuczyPVwqiR9T5DbQA8j2rwSTzPmnzH1nqS",
  "key1": "3nwxP3Rdc49YkiRKT6w8StZ8ApCfWUNh2gbFM5tMYEYLhZ2daN3TxhTP3ksGjEq1j8UdCrykzLJJuhALfCy7dQTV",
  "key2": "3k5NMQ3QMqotGYqJF3qcmjDkn2P6u4NbruspjX9nTnCcxuXpyFgqhBcmre3BD3YNHDpU8oBsJ6oZSmVSozJGG91B",
  "key3": "33EppoGVDPfda6qB6N4x3q2oEgHrPJ3DsntaNSEvmFtogTo2U1esJ5yujSVUz57eVesq4nydRSVUMyQ4fPnrQdPX",
  "key4": "2oxNK7TuMaMji2VUkrJhHxutY6LoXhypEmG3JNFx6eLsFR9RbhcUnsjZUndmMqmQisjem5hFNXy3PSrvS6urTsv6",
  "key5": "UFjM3S6ztwZScU2DEdykms92u69VXaxbLTg3VZY6M9J1ridzQ4Z7pMb42DGJpQMzZkAdMTsdM78oD4mLxeYnZGV",
  "key6": "65rEYMQZUzRHPiLDvgMD7CyQsKDDH5mTJ7naLYJto4gK5nej9CNEY2fLf9rLgPote7ZjWUdR4o1CcoVBerNfhJhb",
  "key7": "2SygnpXppmCQ1UYBmCc61rTDzKxSsBijaUXZDycWGnV28cctcyuWfhzVNLBL1gxRT52UWK2kMixpWYuyG9hJNe9v",
  "key8": "4t5JAnjFGC5E88dDDVSVVA2MGj93E3iUtTTEQsgHb5eJuNwJkwWT64MkWL89zynWHDmZardb4H7yvpyWWHKDAYiE",
  "key9": "34wqkecMC7Ps7r2hM9xGcp3RXak9fqAtnNWrfJog88keP9YhvEzQGdptpHghygpKar1LrEdu1JMTztTwe74ywptX",
  "key10": "3G2wk97QGZwwH7Q865bp1RwexGcZRur5AJA7B2D2oMXPgC8cZZw3p5pGQ9wRP4Fhiy1VTvFi4y5cepnaFXZ9ZoRY",
  "key11": "45N5fDzBQhLdzjegcv8yVTpdE6veTeaodhhWCDFEeJwaJWJRiTLPTLAnm5d8YJx44XJWQt6f2XZrttT2CLkNt3D7",
  "key12": "4i6dVGEUnu9zKFxdDxvNYYxWWZ8ELets5uVJZ2c7o2fNZid5P6QJ6YRKLXjYDnRREScUFvRuAtRNB8ZqPf1YtEid",
  "key13": "47r8CnnPHZeUSRSPcdRXV3rJBUigVZ58XMfTi96rw2j9dNzc4fKUpgHye2GSVo7BV2YKXCRuKEScbyB6UGGC5mR8",
  "key14": "2iRdEYeDqg1Bs1KX2QJp7Mt9f1BDmz1HNhWTFFg1Fbg5Rb65SezkAw5PngfCxkWy8anXkVKNPMqp7Psc2WDheefL",
  "key15": "3UvgZY5zv5NNhc34WFnF5r2tzBDcE3HqaMnoPuW1hBeHtFB3yH2wqZoNKQssL3rtvconRHPxSGzjTFHDnBZhpXU8",
  "key16": "Pbmmfx8qeiU4d7eZuxPdM8rphBrPR7aLdtnpcJPkv6DjjRwd48F1bKNGhgQEw3zjmUWnPXMyxdXhucH2uaKcMiP",
  "key17": "4EKRDbWHcxH2msQrBwD7MYMQLQqEu6A7YiDTk2yAD4CmP5HSmT7iMjmPcTbzPqrd3J2hPZPecVDYsuFFu9aBjKw2",
  "key18": "3VqGfCHHTYsraTyT2fCvR1zcMREdtfFjwaf3aFWMLALnNw3LSnFmMqPW1zAHK6uLXBGQdfGbsnydsU4qGVG97UTa",
  "key19": "PkiqaxXBky7NTKaUXEH52FHHfBFHpj8UrZvqYgJWC5rVSVzpD916tZWtnDnyCbBLFNmjWWgjGxgPe4Ew1o1Yrff",
  "key20": "neN21SkGHu7dSW88YxHfZ1B5dKvt2EANozqV4wp4K7kzs4MKVrGmgHavobGuBndZGEPu1MAp8mgr8VhHMBF8U5t",
  "key21": "2q1GVxw48ndpvRxLE4vH8B8vAqTzBZqKZap7b4y8iBtoNQGiWb7rhfHWKm566WryUQrFZ2c4Rxu7oY7ra1HY9Deo",
  "key22": "4CXzqmif46M8bDjkYywywTFTUeXPb3UMe1PGa6NVZHnYVbxH4LNXWRzUxfjMq3Uxsy1rkEyoHDWcse9xBh2FTDvJ",
  "key23": "1DgQZ8jJjSKcgWB9fA73kwR4fE6VYS6fHq5pcPbGBJrDKyP5FBykBD5NhG6AHoThRqeHcvckdM8T82JSNsTEjE1",
  "key24": "27BwNZrRYTP59kz3Ftw3N7jncpTGdHzAeXhwBWHwxBL2RN6YCmsqwvYsfDLg5RnTnBDDNNb7SBTWiwBcaKJmEBp5",
  "key25": "KnK51kkqjU2h2j7FLEa96NM3poktk88bua4yGbvyNgzLFEvoyLNR27XgZUWZ5ctovmFWcSyTXdAkv2Rxo7KPL9M",
  "key26": "7Mt4K5yH4MsyxWKnrT8VPdN63M6dqqysPtiB3xdiGJ8iKhegVeUSVjjr9jGEydie6X3AAUbnGPhvbnHCdsfWa28",
  "key27": "51bWfArbwz35L1qu5bVSSNjeuM1E4CNHZSLiiqfypXwdE4LdSpoMY6GsQFcUFxVr963x8SZqLVw1yzHoVTzReyvG",
  "key28": "4kqaudwGgzPAa1uXPBa6sXDg1x9Y3rnBXZCX8PYfciZ9BaEmHfoFvyjA3bEQjBjvgNpPpwGdGtsBMEsz86CCxhvf",
  "key29": "2N37gdeBXpioBGr1ifH9pLSyfCqRtMsqYxL5t4aVgsRPujbVowUjhMmGnQRZdwayiqf6pbVhudXXWijPhEKG96E2",
  "key30": "ho4TB6Z58xb94yagB3zmX2ba1gVh2SL17sbnyjjt4dmoY7MwaWCqZvtTNAzau7zaCngz6SU7JPXHEesro8WM6sj",
  "key31": "3CHjhAF2PSXXJ1NiyJ784q9rADBUfQmhQNDKS1WxVFUMGEL5Ljm1fQAqcx2FtVf3HhS3R9k9RPF6f8PiHBwogmSf",
  "key32": "5in5hkAMaJuDduKCu2vnHMLbQt3fJFmPG1UzCxTPM87nhoFiruVmXkSo5pondNexnpSwnzZfUVwVdGrWaRDAZhrP",
  "key33": "4JRms6zPfwaNi8Dhyu1EZrsh59E1bB94LEm6J7Pi6t6TeZ5DUJFQJHZnp7ijZwRJBgVkErALYVUH3wnKyzmxVcL2",
  "key34": "3MpTMKNwrnKw38h1exZzF5BdMu5NgzyBZs4Q5YppDcLXzZ3LNetcZNRBJSvf5fErMxJ7DrTW1Gcnr2jkm7mZwx3J",
  "key35": "Mq5QnExXXCBcc7uizthgd5x4fNiMJmAyuvgwsCWTNGVcvbpmKXfeJXfpRJKCsbBG94BopRQhxDHmkKXNnfXMp9b",
  "key36": "XzPfGBoUEPMxP9oWUbk1QKBrCG3ufGvqWHamvcdSk7StuNeUQY8y91sKJA6LTqMStySfD8AHv7tLfDu3gKNAZ4x",
  "key37": "5BGRUyAfMXdE6gX96tjCfXutVAXGtNYvSWvMj5QgyH2c9jQg3on6Ceq2VxxVeZj2wfEoj9sJQq2D7eDeonEjE7HC",
  "key38": "5vpLNefYuusJ3sFRvugyBz6y7WyazKhg79EML9vNFZCTgDcpNchV686RHBbACBpGNKmGqr7u7iCHvFaCQQJbk7Mj",
  "key39": "2yn4CLUNW1Ni4atJEaKftMXf2TJcveGe79RDBRguSiim6TYAtr1ahW9TvsBhYYq1mAJz4s8W1JwAthyebvonErP9",
  "key40": "4Do1GTr6DHy9rBH51wRCYE91LbAW5Htbcd1yDtShu8rFPRpTrDQDgwB5YLR82s1S2oo39zccg7Tgo1B6QJba3a6U",
  "key41": "kiUVKf5eNRHMzXkt3gDtZ2f1ncQYKfZdwWdY8JcaUF3wzzkYfvSAySsnjbyaaxp98Tb1qCAi82zTeipgDLTyyML",
  "key42": "38eTxKKGpVQSaWViPTukFAD48kzqBdhKBALBA5i9pGXQV8EwJqCFGQyhM9zNhxhY2zLJ9eA1bnoshn28d913V3vE",
  "key43": "22UAu626fC1bTbT62MHeY3XQeh7db4BchhaQm5YHapyB8xUkJYy7vjZyD1YbeJMtaF4TX4QERPmmd3p8FkDtYtBV",
  "key44": "2swFPfyWuUNF76tLvPYM3L4uxvbzKLuE9fFt8hB1WcZwcYPGitrdf2gp5SuAD1HC5UjSSFW9YD5QSQTAdm7nmbh3",
  "key45": "649E42snv5LdUkPA6zqm3bGkXDbYRYZscNjtwY9wXp9m5p3EJ1o4Cjxoa8uMQBWywEQtZGTnniwDsYGBJATNdPq7",
  "key46": "5iBq3nhfzqy2HDMwArHMRmWtR23H7YDCkhecbTeDEmRoRSCCME198oP8RHeqX1jrAXyXpZCRA9unyGw6rWtwKfGw",
  "key47": "5GCpXbFcFbH23h8S6wGMrQM16qax3TTzdt5xrB4FSoTXeRbJdQqzyPGNxafJu9EroJPFuw8WJTh4QydthUaEC5aT"
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
