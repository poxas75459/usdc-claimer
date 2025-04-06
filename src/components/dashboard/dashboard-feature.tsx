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
    "66YbYhyfDxCuKysGR5Lzwidt5RDzbz59TQLNSZMMBtXKqD9usrruJ4HwWLo2QJ5xW7oA2fjNL5kSSf1Tt6TaXqZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQMDjesuF9f9ZiWCKo9jEpihPUHch9Gw8rDLSh6zFUczC5ynfHpD9HgHT59vFg8dNv9tv4AvYAAM48khqj8Bc6U",
  "key1": "3SzZFLDx8794AGM8HzfA6UNmt4btPhzMCZNCtNsCbT2CpAJ3Aap6C7gJZMCtazCGNLA6FKtGV7ruUs7epgEENZjt",
  "key2": "2sXmNVqhcQFwbjohE9nJbZYgKujx9RhJzLbpGxcTh1zKGuiiCPCvHrUxE6chaEwi7H215en2ywBraWSYnE4JpgRz",
  "key3": "3WVzczWy679TbFxEGY7htUfjqztwaVHsD9QKN8pRB72njMgUJRZz5CRiwpVEgbqVSYKwt7Z9mNrS5kCtNqtw5QQN",
  "key4": "3N95NXTXuf438Z3TE323tbMmqi7bTnWME8Rha5yL3eByW5L7cwbxiC8TssKvwdESWK1fuGJNE7HJykSv23CzTHK4",
  "key5": "5nt94rWkt8DmoAQKCjU3m2fBHRpVDAKXCKg44HsfJNMMXAWKYqEdQdjBXPwiVut7R5s9uiMsYkTuG8jbaQwPr865",
  "key6": "4vpZJFB81rB1vxt4Pkuyg5bLVZfTdPyFEfnvc1J3UqTnWxBAhtkmpViDk5giWTQk5ehumpXTfxeAx61X9cSY7sra",
  "key7": "3YR7iJ9xBFAkBGzmRSrXWkn9unccP1hQgzFQT52tHF25YxNcYYJxV4eCzMJqq5XdPKjnCuH6eE6wSZm7DWSRaHX3",
  "key8": "3UStp91FzampLssTukbeT5dFvecP9zfg7qx5voVoC4zBHcDmUMx8FJxK6Zfr7csQFDxB15sUiwbt3WLADCix7qAY",
  "key9": "32vuvcbUNbc4irCt7EMioKDZaP5nQGZKngiAYwpwngoKT3pZh7PVP6Y8twVenCqjTbSRKKfRbSBZXYaBJFKfLqTr",
  "key10": "53VU5o98VfnvP1aWGbonW1Gwrznxb1ArYUniH6o24u9JbQzoMjyCw5xURukcSZTAbghCCPs5tYFv9BhtuwC63teq",
  "key11": "AkBJmNmdfwas3JmzxxUYdLu81ug7pNRGAgDExRhU2dJnXaeExcVVcMMnUDNjfxpwxht9XWFt2YZxxB9ScT7ufLt",
  "key12": "ftdjeiugGzM5AvqR4p963F9N3N8DZ3WfME3JMSngdU68nTCVFLH7CpkyiVoCorUBqKU1PU6cMqx53LQHbFGqa7N",
  "key13": "qzadgpJNdp89TVkh51hwJTMjAZQLZjiKePZ3vUhm4nrmdxQo7VQEx6CqSBSwiMKXCt5H74Cp3vb4esC5Rp987Bj",
  "key14": "3NDff9WVXR7bD1KZHDwPf4z3byKBtySA5QbSmfdvY5H2dQjEL7qbTYYMF24vfLerpQ8PsqFtHbbAxjYjZ4huUtBo",
  "key15": "MBmhJTMPfoh9gnZcBK2nbbsdDZnowpXbUXqs6TshN44eZokm7aMJxNwDDbFuzbYGxyTdxH8em5M5eeofTxes8Ac",
  "key16": "2m62LNVvoXph4VR668ty6fsVVKEuqQN5TsUhnqhm6V4RBEymGVhv84kgMBNsz4yHDtYdbnyqePTxQBUpzDsrRsJk",
  "key17": "4uZXfT1q2Bh29Sd1ay7dX8kWaGmCEYXM1L3zccnLrnTbsMLVidFyr7BRpkqgc7KPsKSfCyxqbGPZ5sMZdzLbNuFq",
  "key18": "5XmP7t9sQHfHd4CUpwedSHgRTjp3zNBSHA9DQ4o73sgK4HZaVjKTfV2n1fjvTyb8zRnmzJiHGKVsq326HEgbyUZP",
  "key19": "7zeDewP9rrGGgaLP2t6GuSisoo65dmaYPu5tyFfTgzVrv9nqgGNoQM36EWVnz1f5nxF8PDLmXhsgchtZiFEHRwy",
  "key20": "5RmneGZERV5Sm2G7gEZrZgZGX2U4VfMPoZ8Errbh3tG1zapY46pLVwAAxm3q7QNrTJvzwo4yifZitn2WqQfRCUnr",
  "key21": "3KvKhcYQfYzoTRNmHN3fM1ziPS9VLALE7XxVMnYgUVfdAnefZmSFyk9GR8Vk1WBCbUSPbX7GS72cRiqpTURGnRv3",
  "key22": "66REC3FpW85cCquBT93NiTTon8gykXmz4pj7wfGCeH3jP95AVfgvVShLB8LVyVUzEpmyrY4CTjAYB4Sco6TXREXt",
  "key23": "3jFXWCrNSmMjtWhSK2F43Q2fUemjieaUt6BRZyjaih7KiZQsXqYBsHsdSMns3FEu7YdKYqhFKNEEG4s22eyCSjV9",
  "key24": "22iM2jkCZwfUqrQ6iS866FKS3ZyLMJ4utBHTjRxeL2kgmWfuxoJMmRJSZWksWApmBHsiq9yZft9ePaN6nBQofk79",
  "key25": "K1r4a3zdd1Dd7mgn6RWxo92uyUercQTqmFxsKejDPFdo5TaJBq5aNaC5z2dUfsT952J1Egz1auiG5MEeZybbszG",
  "key26": "4AhdkXTZQmjxrcLKEhbyPMEcGnMNyZKjuUXsf7FgX8EVKKf6SMbZVdDj5Ynme7ETx2LkeffMj82dohHoKWThFLFz",
  "key27": "2p9Dn9Ko1AZPJHGJs4ja67W7PNtHdjG1pAcsrkj5xTt3R6SynD2vc5puzm8rtA1GFYKLDYZ6DpH7DpsSzKEymVpR",
  "key28": "385T2334HuqEErS8byG6A17PzdupfqpRjPpFoiFR4Hx68vmcTk7PsvFC8P2x7BUkW9ocyfR9K6zJKDcGWi5Bz9Mk",
  "key29": "3ZTQn8FgqrAz1G6SqLQSQHpe2bq8PzLX7cju5CRKuhTRBJrW1HeeYX1Xg6aGFwAhJpvY8MDwieSqBZdPS7NJxGyw",
  "key30": "35BSNsw46veYSR56snCxEQxUyty4CVWTdLD99LUo43S4BSxKCsX1by9Bg2ZqAZdRa7s58aVpXdnuEY17PoAznKHk",
  "key31": "49nDr3zuKKfdNVKoUtjnnh9zevuAST57wKbVqyoqadWmJpL98qcJKye3voLFGLZeXarpfHXfrkpkmnPSj1u8WVW4",
  "key32": "vowxY6tKDpZoYhcjfUUV993ev8giSDUvPBbBC8aLBUDjtZvD3eRZ8fw2uMpP7ec2skKu9d5ETLT78sGjkanYVxc",
  "key33": "4jyiSm5ba2iydK4rBpxMdZnU6HEU4qrtAp6MbWaLpNTKRfMd9bFwXbnRKNEHdv1n2Gq9TaNMUvRYL7L3cXgq97zU",
  "key34": "4MTh8hEfLgiS5dB9erAqpZnTuqwPngN4JNXupH34TutgAQbz4UjjfXfzEKoxXQTnvqXC1WzkMV529cC7bpSZkpV4",
  "key35": "uzRRy7BvgHbLdKyjUBEywVCf3gyoasr7XdM7L1b7VJoVt4EwoUN2R8B9tNnhfvmFWRPoDCrZLakjfEFwTHqfeUo",
  "key36": "3zawQyoauwDfmDwhYJQYani3eDHumui2ngFu6HJQX1gdVophwCjtfSS7tjbVqZKVAT1YU5bXLqmyft7wsyKkr7EX"
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
