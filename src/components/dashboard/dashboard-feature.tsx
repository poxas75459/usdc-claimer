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
    "5RprxCWFWU9GB7W4ayhCYYPUAPqzbVfwWjYfixRNtGHkKsg6MTimaj4JD6QJw1sdbrbvuCpGXcqoRAw7a9iBBNKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ttfM1SzfseLcrPrkLdhHwxA3i2connT1bvFp9mB8Bpa6pUbhqAhnceQWQua9JX7Xxq75T5qv4GUJv7h8J8Tp6y",
  "key1": "4XMsy9kXLnx8zYhPqpdVXsQi3kXgFs5Skco5zxwRCiz2XdtCKjuw4Anm8jjS7wbcupzSsQSkC1nC647gjz8LZG3r",
  "key2": "2GQR4NiEConCyS7UktpbD8fQ2iRwTaGePdoVEKrMszoajEcNhrrDVoPjHK4amFUiiAmTynHLR6Sfvnw39Vdn5aQM",
  "key3": "4hgysiNezpDaS9LohSGGDi9gVFyZB8XK6ZRjRuwHf2sGeS2cnwuZkjmBPi6hnBmyZPgWFvavWgXaGaPiiB6zUD9A",
  "key4": "23NarafqcLBBP8DgtChsWus7uKaVWEujovajFKZDoSoRpi8F3FfHfbAKPt5xLcA2ChF3sN5NF4xPkiDK6eohBNRk",
  "key5": "2hsQkxqzcAuobFZdFKCL6tdEdumsNjfv34RqqUn7TguDGBryEqq5dPMPTxdsfPm9dDSBwvRBbqGdJRY4KymsQRC2",
  "key6": "4RUiqm5EdBQKKowLaY1MbUKhw7qG19mBJJihmccVzvXv5dd7EvrMDyn3be1DT21UKvfkQU92zMe2kMxpcbj5D3Yz",
  "key7": "46fqbBtEcXySgQhpzixztRmQc3PTDzqrdMqUJFa2EfbJKpkmVz6ypwh6ieDUyCiGw288x6YtwXcYYGx83Fenkj5k",
  "key8": "5oGDKnSZXjtZ2z5kLWpiD9oZkiw4gts71i6qYBD7MUN9iwXkfjmUFtTRcP3MD2sNDwUkpoiyNtBTpySQfz81yBCY",
  "key9": "2qZgQBYTdnVoUkj531RXtgq9d2SZGLDj2aw6UuoX63kqeyaaGrpVQyP3pDR1RqWCSDRT25817F43v3GFrk7uNcDb",
  "key10": "3dgfwJ2WACy9cZE3BxnXALZMZdXzsAJae9gcvKR3fr67KCdhre4TKLZXd64dwLuHtKLn7neMfQCadGTmcPFYAHiQ",
  "key11": "22DZbazS5fgBGJsBZKi4gX6ag8yLhWNCDBJP81jkYQmaiy7GddXtxWjB96jKVtu7St5qJYKPX4ZGJw5bQ3nkimkr",
  "key12": "4Yd13Uagg2bUR3r1nGeigq6PT8iomNLccagQg1gJaT4iyGXfQGeXiRe3YSzsc2SoutXn1zfE4GitxaNaW1Z9GGgH",
  "key13": "4xdQ22zfqT3BAbVZ42F2ECHcrHQHiXYKLWDN3sTUkgoBymHVxguWg5m3873H7GGM4MBk4VyYoUVfAEWDKEUCTXb2",
  "key14": "dreh1u4AVks9uFp94Y79zNtHEWRfPv1Pe2wSvYuicQKih9WGP7uPH9R3WsBJ2aBMn1GrC53oDWdQycGR4J8zacC",
  "key15": "47w2R3UDBZ6KjrazAeG4mFm7VpT5wzgfXGx311R4H3pEzadJsLCyyGSj78pot8Ah1j3vZU721WoyD8Tqux8p2Ums",
  "key16": "3mn6KcUJS7WygxH5mzJ5eG3MLbvAoS9SX79dWuyc2WTHRGiqAJcuX4bByn4Pb92vu8DCGbuVAcCnce1XH44ToW2Q",
  "key17": "3szT4zwejnU8qRzgL4bYRMsd4gBY4PpcM33zymwcQSYkHeZsi577VpJBa6fU62SkkRJ8YoLqvzNRPK2MTUVX5kD2",
  "key18": "5mFi63usnfH6WsjqGcfnvydCaYn7AMaYk6gSMaPATtGxzESp4dnd3Gxxcj23okzNmz6qTHiime9xfDTBhTyjJYa7",
  "key19": "55TD9wbbuR15sLierUbtPKb7hnBRmuidPnQR1fbgh7Efv5VVX5TjY6QpbrDpXB1PPE8h2Hnc6YfBJPBB7eTwNoSz",
  "key20": "6s1b3v34EdoS2byp9Qm2gHEsb3DSv18Fzk9Qy9VLYgQtggCs1Hd2VwHyf3RDK7VH3cdBffso83ybeYZMoBNi35B",
  "key21": "4H9E3ZXKThz8efUu6qaB7WwaXbZZ9X9UWzH3QdshkzmuujfHir1KACv4jPfPDLDXQm3rZ4mvSx8pQjpL1M4kg6Xo",
  "key22": "5vEa6ig1jHcggJmjCiLFAegeSzXnMepef2cjV78agRXGH8omVbwhnTAzppvQhBZ1pKqMg2iNYqTiycETw1vXeHE5",
  "key23": "2PA8SvkCxLecsHWE836YFhSJJxC3pTeA5tJ1sx9e9NnnRV9JeZYx9mUxwVWmT2irA8kHGBbgd1MaCRC2yHZ6D21Q",
  "key24": "5s6DU6pEYp4E5ZZMtjtR9ZCkU5Rej2RGD3JwWhQLAUAUSSnSVbVsifW3PCi55MWoCMBrDAKVZog6ua59frPtzLAF",
  "key25": "2yNisX2utzg1z93L2X6Xro3a7YhTJKyrUwDh8nr8TiCsrYCM23bGFAvUisaGdVUzpSJBUhH4uCUmf7JmsW94CwTm",
  "key26": "iEbC1CAhBH7wFSLEodrynGpRgutuNhaLXYR7vy3BhU8SUCQDT2APXfAd8Xcopstb7FUL5Azk6MhVFTwFKAYpdua",
  "key27": "52uGk7TQTtjwG8Nk8p78uVbcVEEQiCKucynangKUiUzhE1ndkJ4W48q2bjqd7FjLbwb1HBMraMPrZJZxBmdePVFd",
  "key28": "32R4geQG9rPsQoAUK2mPyxF3yVGVdwEvpmBfZvzY86N2V4aAMr8WYaBPzifyodDGgXHKbBh1syAz26jUPQsY1LZs",
  "key29": "24MaK4GYCeMADvfhbqsHsKNvL5TebSMxUbWQE5ebhM79UcV3z5RL56ccefYjzzX9GpJHybWLfZqZsR4eDfw6Lazk",
  "key30": "4kNNDV872eDmNAcddVjY6uWd1rnPWVtnhnGGWybF8pRM1gxgiuAhmv6Bja4GueorJWLDX1hYkd1vvoxyjz7tgsbg",
  "key31": "xcTprsYywE947vN7CaKprUN3kiTKoyZ7n1CUF7aVGU7v4yDkm6uzKrcitgVqXYQ39KfFqbXTWng9vzQpkNpavKq",
  "key32": "5us1o7tXYdL4rKQSu7T51KaAs3S5JWqnYw1eDbJ5Aapg2CZ3ZeueXdK36xmS8tMNPdpVbp9tXopsw6RSWPS5iESB",
  "key33": "3ssfXe4xfz9LPAjQqvQGSC3XNCes3RLSw7d1gsegnrg33U2aqKhGiX4DvvdWNn6eK11A4PFTbQi8jezQq4UThfwA",
  "key34": "RjnuYLYGHrwa7FobJbxckrqvfr54fVGDRaBFxRxbtqnCS22XKW2m8JMXrPCmetZX4JoZ1bWvEEW7SzYZZ6L4521",
  "key35": "3kMHtJ6ZTcjeRxBJuQsq2hKgKiiJm8geMjLUsJEWzJ9co97Ntc4VDjxAPMpe2Ehs2E2bzX9THC456PVXfLt3AuJ2",
  "key36": "3Ddi1puTyMs7Xn3HP2PKtRogRSM32eJLu1gruGrPMtYFUUoHD25gtW3vDX7tT9uWF6cRnj4F43GKbCzs1zb7qBHk",
  "key37": "2AWmwV67wQLbALG49zfcBjv2fo5UVVx2QRwkEVYJUXRixYKLcCuLWoBVgMRHbkRBNWQ6TDYv4RnC7Pocqkp6JPFr",
  "key38": "5B6mg7BB2WtyPsr9aamNDHPRDAj1EnW1dBjngwGLNnkwY7UShP4DqzjwK4hrAQwLn1EEtWPFQiQzZMRT9bKDQxvY",
  "key39": "vjbN1PbcwH6PRJEVcjdoqzjdExiceZysD8iveUir5yded1p6zxR1wNgY36S6qZeexXxTzHPq9y1RHt8PK3ciCXd",
  "key40": "HWkovNyzzk4X9VoUNBBV57eCjuzbkVc3gMrJMb1CwBn6Y6xCLDwZuruQu4QojqHBkzPLP85DHxUk3zW7HkJUENo",
  "key41": "42FeXgMLHkN3wKG3h87yJ8KJRio7z3QUn1UegzWQ8VR5KSjWZD1ndxzdDj2RYzJecevEtHzFEzabChyaXWEf3rkd",
  "key42": "36u4EdYNLjoBbrDnydF3kqk7ZWExrTBPqvSWvCLFCsHg4oKcsP7WFttQBjLURBQdnQ1dMQohG9Gwd9YXyj2ubGS1",
  "key43": "2o2JBJS82GfEc2zvWPwX41qnLEtqdHWLVzWR59a2W34MtnCkAnwta2vvAkwJYanyXSrCBb3hZt5CdjhGUjr6VSwg",
  "key44": "4dWf37Ptn7sw58zdwV6gdxSBG77KN2YnTnSiy7WGNcbQfRjHfn53g9uNo2Pnr6MoGcUS4R3twth5FRhCH9nBrncM",
  "key45": "4gNpme4b6n5914TfnuP1gXXP2VnWReANimc8TvcPk4rd6emFj9fYz26ugZpKdDmsUD8zE3t8bQjZqxQvWEKwRuw1",
  "key46": "2HFB8FAvQgumQ8XYQm6KBrUX7QtLuA1zUk75eoqN8Tj4AiTy4qv1ia6gVYbVd6z7XnSe9j6pKJsN9y2CZx6pcAzm"
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
