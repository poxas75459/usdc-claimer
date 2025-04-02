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
    "5aS3nidW2ZwXqg6Aii7p2cCyBrBEcrftAmadDVrcc5J3uzEXCSHLRG21EPDscnunB3HTUd8ADqCTYKikKdqXiFvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yeA5YcVfvEbYybkXbaD6JGmqpsKyQU1xi6jXHCuJnFLdwNiUjkji7xW5gAHrkJGzE94xuQZoxaskT3N73Ho8zHr",
  "key1": "64AFSTLR5fMMpeh8u9pyUVdHeg7GxnYdTvqFP2ofuWeqHnrRijQP2UUHcWguX9GPgNHdDXqtajh4Z6R2RhpXfPos",
  "key2": "3BCiBbZ7e9Z9q7hMWqQiLHMaXnNWFiTxzVfKoAsVBPYtUSdP8esRmgUBnypfHzBcS2oUBxEcKyxU1EacWiGNH3s4",
  "key3": "3fQdXwfhYfHzdst4SSS12jvMd4XGre4y9qsttRdbKz3TmwNUJdNFHJZi82exASnJQVMBmMZh2iTTgw81BeZwaePR",
  "key4": "5BHrGBEYnie2RUeAz1ktHqVUrz43NtEKv4JrLboYvLMjSXDsqBiFdMEnfmGaK1FsmhpSeNA2DHMCS4wgLNkCXEJa",
  "key5": "271oa97xf9njDdEGUb5Bk8Kvtm17ccY1wLgGCnjdkaGic2SDJSneu8bVssp48fvnvDT8gJmvXwYmKsYucbLLf3xd",
  "key6": "2Kwz14JTnNGvA3BkAdMgsU7u293jdYrrzMvc3RVbt3DLdLPpjr4FtXDuvti5jsna8UXuyNPVL8b4C1p8fE3JdBjm",
  "key7": "48TYaWXWLPuAWJ6w9KLzLcUnBBfgQHYg3a6FPMCrG9ARNhGcvnFo1JaMq9iKsb5mQ6yn6dv43LK46aH8q4URrjXr",
  "key8": "h712Rp9Xfg2NQAqg188UKRZoAXXaV32xribxPHbQbkJyh8SFz3tfEc4KL27Ev1HDU2kZAhbZTWvGk6mARHHN1ga",
  "key9": "5qQEUNqMr1Lo7DyqimsT8KWoYcNKZFGm3D16R3oVUQkJNPWu3UN3EgebKotAd47qXEqvrAgESCcEuaRgPc3CFjzi",
  "key10": "4LNsiFgPN8TKgXZCsG3KBscTkMK4d1utudHgpYk4m1NU5nGoN5vfSL47bFtymwrnUWx4SKGgu6VcXkAgAbMVkuoa",
  "key11": "5L4DC7V34FZj9vdZjwbqoxJk3fssbfq68gmZ5Zh4q4jXkKYor8Qd3m5QJnV8x7kyq9MPmivmFAJt1BtDw3T9QXpf",
  "key12": "346bBmq8fYveWCyBajRZEU6F1yxuBWAhH84hGSTgpYzVhTDqGEc2Nv9jM1Bagn8v7ovinPSuwsk5qPRXyvk8LgRm",
  "key13": "64ie3nAkQCfZMhknLTEJgDbkUxgAUepyPgCtH63zaDurw2DqLbJ6ZwD93WHyGz5XzdFCVMUHBHWjU7oBjfccMB9K",
  "key14": "2W2QTqwTmNh9tiFFyQ81qVGfpCHZinNFNPTxfVfPTQ7f9ahnXV47mu5oEmZ1ZsL9ARVBfcXhtFSmwQxbhir8NYHS",
  "key15": "2QEjhtia9Rj9DQPKCrXtR4kkNggoAy6yXAZV5oF7JEQYurX6john3wRJZvfhEHq3Tzs26Cd99VrQSpnfxVn5caEa",
  "key16": "3DLe7esQsPnh3f9riW7RdbEJUbhxZ6C4qZfeREvuuY2qkAFmTWs9NqCdQHNdBX2Uum1ESVsNcVSV36mL3x4tnDLD",
  "key17": "418EDR6owBxYondT3jhqw4D6WBiMNZfp2vCSgvNBv3Zr5EonF6zeeeL7tbQhXiUy3AGGgKoJb1eF85GNwc5tWEMX",
  "key18": "3r9zd7R1q6WHVecn2EuNvvtWTHSJFEim7ZcgY875hV3qwcFaFRc4QsWmYtE3Vz2BPkx94rmhUoVUfmXjZDwAKXva",
  "key19": "3xNGrrTh3hjx8xE1YvHPruM4Q9VaFnLcE73MFxh8DdUuRUTcQ2Wvte23HFfKxvqbz7KaWczdnQreGSkSHzHdK1DF",
  "key20": "5AQo1T5Kjq8xWW1UXnMopyC6A6rU3EAQXvt9uUXEdj2vvAMAd1hg3un4N7fGLbK3FwRYz17XfrdbFMuj7LcUBAEy",
  "key21": "4xwj1sgap1UPmZ8hRLm8JW3kpbeJxuxcctokEWS1oBnCuQ5sum6nHxW4VAuCiaseud3rvusXwSHTcEiUnU4cuxWt",
  "key22": "TeJcqPtmCa4ur7hAHRmTYSQGcVaRpwmdF1cZRMM6Codjv7kYSta9sh8sgP9rgxiLAz2fsS8EdmMwABv4iPtZWg5",
  "key23": "2y9rrx9LfvBrVz8Qhowm8TYBSquFNhWNEcsVgHGs8Sr4xRHTqX1LP7cn86BfoVN84p8ic9EAECGCrS1KvqiYzu1A",
  "key24": "3JgmjX5Y3TXaEWkRZNPqb4y7Fk9rH9Q4byDobyY7TBGHMjCqYHoqiMwtzJZA5tAx4GTq8YMvBzCZFH3eYAYcG4Vh",
  "key25": "51pNSbs4UQp6nWDDXBdc7ur82wbSad8aHTxwZ1345HrR3okwr3HFbsA6NSr3VkWGZ62RuVMq5iuoRgdd3bnqawNX",
  "key26": "4KbKrjrTpwv6pzhNQLTDHmze1DNr926krvtQTPFeaKJ52wzQuDEczWySjkT85TYJxx3nVRMTxHmyQpUDtM64DnLi",
  "key27": "B3vxsYpaV4VMjbmKLYXGBEAuLz2cgGoMW97fsCktrBshDUpWcuNfP4W2cdPV9pJKvddQyjGzj5bYd6BCaeBTqH7",
  "key28": "2EwFdWh58oc2NyP5qG4a2KB66RXwGgxyN1NAZaUKggLjEZ8Y9d1QrLS1GuurDYcsKfGqUCFtTEsLZMdyU4niLBZC",
  "key29": "kzUHpjjF6z8MumBbNaxtLf7g1fproBajJkTyFShKJKFrnmTLHwpje29EcXgxipa1eDVW7JpUcMn9HHahcjyfYp5",
  "key30": "5xHwSGZeVCtR1vYCDWrXYcdjmVtpDoftorjLv19tJ9WEsjs6B3LNVeHVtkxATTEMAoCPFwWea4jiEHRtmhbnjbNG",
  "key31": "2Fs99QRLskgsj3E2qBdfH6FD2t5kHpRiFBX2g5JgEStdAeg5D5c6PuSBtf7pPcYKUG6yiQNY7eVhLMsiavGrw9Ke",
  "key32": "5n8MgVi9XJYFiPAGqZXuZD8dLnkymL96jF5d3WcFK45o7RJgX6DvkRxSpVik955AwWRxaxSUzcz1hwsYEgjRoy8e",
  "key33": "3GdhsWzcuNRrpwVcnxxKTRcRLLsvHnt3Y3cffs4GoG3bGB95y3GvW7Atzs4mvvnGmWUg36ks9UdQRXeXnARp9iML",
  "key34": "4aKMzaQqS2YkHVXR736jxADx2U3MgskKZMbzTYBFQEvM9JX9RYx9Fef345ADjCnVq4zUr1cndUi23uyYu3164bj4",
  "key35": "5CGxYUL7VVxhWM7G45zvAneu4JQQp5gAshm4A4zHcemyc6N5Ytfxhr8Lh6vULw4XcaZgfeEKcbV8fkvftKLKMMvF",
  "key36": "iDZhiQpT33oq8FU2rvf1Bd6yN1eJkGpPxX3WjuHApE4yQgNHK3eDJ8N7tPHynrkEDBNu2tkfBZXDU8UUh8jd3j9",
  "key37": "3eE9ntDeDYG6HkN4gWHFtfvZShvTigi8VW56k5w7VG5c33iBaQxuPPjzvJ4Eb4xRPLZxH8MXwiADzjjyqFHUoVXm",
  "key38": "3omD5UWCrY96NfsAsFa5hpHTjUs2Kskx7afweibEncbBiKBSPunwVi4Y4VhvDQDLsBwFqgiRfT6YWqPRyt9tv3P5",
  "key39": "2Zh7cZhznVGkkdaMZNc7wDSwyocMkShzwR1NLgN1BU5DY7uSiPCY62RXDbzJpRsZw7bYZLq9JqLDLoGtbYSMBUPK",
  "key40": "Ltwbvw9khi1rZCLtgpkSELmqhbFz8jDrGUQNQczytXWn3CYjpEqHzshYSXqYPuFKqyPjbm41MjhDW5bckFuM7my",
  "key41": "MoS3pXtcapnoB6W26ivPAoLPcVMbAEZUgWiY9WJqy5VAyTV94Xip5VF4urYWf4gC2UM5juzAZLJdCi4d69VAPRq",
  "key42": "f1YPkPC5wCHBM2d2NcheaozUvg4Q7uXZQSA1h48Y4WiaYLptuP7kA534cHfSzAsuBQfJKCZaAeSX68aJdbcX9cr",
  "key43": "5KP4jnh6PeJQRGJacDeQMB7AVAncjiFU7tRwiqoNXj1VWsEdoULJYnPHXw6ea8jLKAnjLLxQ965MdRZfWyKn3Ygh",
  "key44": "4GFxNpgaAuYyDSdSqJ6ZX9LiGph3sNm2Ct7fn5VcfjJD44aB89bCZb1aNBmxgkJmSzivd1MeNtiTtUp8b2mJUJGp"
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
