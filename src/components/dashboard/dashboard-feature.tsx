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
    "3p8XqaFLGdYhw7aw4vxZvyssRWJEnobkSfg48vsnYS3F2A4DdLU4znCvWjH69WKnzUhujKiMdRmLt72VYyknahaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L53DHbqGRAaV6pw5pKmeM1A7kxSpgLSou6rqJysarq1s5eiRNvgugzY4ercwoHZe5ri3VYFqxLjN6PFxQ7V1R7D",
  "key1": "3vgcTvMzf6w7CLH8JwXPnv1pzni88gPrKea8h44qdHPYjXNzzFyLNNZ9pF5UJ7DSTs3hZuHwVoMCYVkyvFDwCLVn",
  "key2": "fwxZv7ViL6iyLaYuLJmnQjcCUPjB7aGXjKX3jWSeJQrkkHiZDu7qgPmxQNJAPNkqpH5sjuSdahaAnNGfgt5CTCC",
  "key3": "3GAgkc1qvzmtFXfT5yJVNRdkPp5zR2QSCHsPJaBEETc6MdEggJaoSNPzbey4EjhCUF9VetTSMFEUzXcD6Ff5X3t2",
  "key4": "3ZmXUmKP4mE43yqyMoknjvD2Dmf3P1dPDzCnszWrAKE6LipCMGM4cTwqFv9kUKpv5WgvQcFuetzPBYmHMytxD4av",
  "key5": "rz97YbsGf7BATK2zXFrTq3NvbUv9f6BGZUqZg1Hm3SXE5Eg2A3UU9nTFo1o38ur7ykfaR2jEw4sQfJcfBt3ewjN",
  "key6": "5Yyj24CEwfjok6wVfyjid5kGa5UfqbhPunA1RBTau6562YWtvspJYuepEt1RK5C9S6G8P627w2ET4qxBUmCPQLtS",
  "key7": "3iBN8PU5msf2Qzx9mpQLsq1ghUBUzFrp6So1K8aAGqFzNnBbNohkMLu12hiYJeAxxaoTZUPhDRqugD1f72dFhRaR",
  "key8": "3Tf5MDkYN5fifJ2cYfE7FGAadAKHsYSv58Eor8imXTpCVi3rV2f62PV4FTCJNfhQKwYDqTWEbvU1WBgT3giDteyM",
  "key9": "2uEC6EpEGYAbe3r2fziawPfhVW5ZGU3aRqd3iLwhHXYxSu4WEyb49qShqfKjEg5EsQHQC3vSEoe3bU7FsseAMrpR",
  "key10": "cjQ8GejuYDzjdA5W9ygj7pEYzKMdLxYSMC8bmt43sFHEcUpRnm52sCFK8gds4SGaGhwYPf5LoTn73DtZUeDZT36",
  "key11": "2Syob7UeNniFNSeiX1cBtGoccfw5uxKnXS94w2Z8a3rezHUuFXymTXf1AyYJ44Sg93PLcJE2haKW1fSTxChFiS6W",
  "key12": "4zSacRP8e3E2MJbHqQjdJ4UrnHCPhGaVjUsjkDyb3DBSr8VvpEbVDsnzmdkayySYhwZZNGuerJNrjtVLf5dEXwC7",
  "key13": "64c6htXfmhWvp8BE9z8vvtKYfdtQpXU9f5AbMhz4Reb8hEEbgf2gnf3WY1TjTUNaHt13Pfi9SDj6pVkzHGWGBVar",
  "key14": "5KkAe7fUDaGcuqaon6Eb5GKRQHnizAGkZzyJB6V5eVQodiBZYYZSqH239eCjmC6PimqFrCPy9st1332vVaZZzuhC",
  "key15": "43PzbpnMAcykULo6NsdYjmg5fxmk76BDjU1FMAJAoLHwVMpt2S9L16gg2jr578mBCbDZ67oAA8K1qtZnu6Ffesqr",
  "key16": "8mRQgknTZREGw6uuh1ye9D6i1GEuRU3NF3XABxu62hK1ur43BbWSimXksAdw7xY9jikgag7oKiw3VVsE5srRpSn",
  "key17": "2Dt1eodiuvrAEDJwkLYqH13gNJfxEHryJZVzjvmVXfvbVCo9Bk7jBqTd3GoCBiPpat7E3Uqd2G9iUN21bt5xWcj6",
  "key18": "2VJTrzjizMApfYoNm4KFsRCGnCXZjfvaA2p9zmHj3USTdQYKw43fN9TZwQHTz88YpyBxiwyJfYvximWoVkwjnebt",
  "key19": "2o2eQo9MmBCArF1A3Maa38GQs1mqJaDhPECRRZuXFm6HGFEYsaB6pVEEtv4Zus9QWavucPrvrPnc3bEehpYS8Cz9",
  "key20": "3wWiZqC8dFFie9rRGvLxyk1KKLA6ByisN6zMoLCjhivMzQoiY7QYg8Z2WwBUNypWbfxk66rZV1H18bDTnfkzqS4Y",
  "key21": "46hFYvSAR46Ks4wXguwGBUcPaHruPWTno3q12yKEaeq4iFbkJByehsrhq7akBdoVgm85r5w4MyRBRF1YgTnswpki",
  "key22": "4gsavW2KSWSckgYznJmTCokvyaFYCitXRMxRUHU7ZBVm7wYaE5ncXqLRg8ixP5TvqQNsmQSk1eJxsG61oHfx8UGc",
  "key23": "2bijeoXqYX7xwLoLUqAe1Ao9E3Sv18DT8TYi5747yhe4nUjzf7aqo83tQwaY6ThRW5h6TYQpsaaC4XJfsMer9qCA",
  "key24": "5oy3N8gHp2ndgVa52dzsUBCgJiDUdEBKiJU8ZcQx6qbVQTa5Lq98WpnA2Mufr8Xs5AytMGXsKZar39e1tBy2Q4Dx",
  "key25": "2E4CmUZJ44dbEhCckgnCoot7KK5njq4f6Y8MfT7gshtRvBP94XXkbkaw9VZadsZevJYcejJ5jQb8xB8XUuoV3yGz",
  "key26": "2cySwvk6EsCvZ9Cx2i3UyXf3ekErzrLABPKKzLzteXAsNhdvHG9mZe5CTvwKrH7wEvBd7TyxcY4wdgGxdanwsZAF",
  "key27": "51ebCFnHf9fBiQTha4GfwmsNvPqArp2ccXgxaLQnpVSrmhMYiJKsFbYz8XwmorNTgG2WLdFpJUagLmNjx9d77Ccx",
  "key28": "214b9XCNqNx6ZHCHcMDzJ9P2zu2zoEqNSp8QNoMKyxy3pwTzx4V26EHVYfybFCd21ScHYCJVuf4T5fnDYo6xNp5F",
  "key29": "52CmqwLC5P2SpACAYKT5uaHX4ZZ6YPftCYGzP2cWWEVympeA6rh7SBbtkdmH6P5BUSoedFnrFfXKyiX5sBEiCUX9",
  "key30": "4SAaThBtbsHEY8ZzRWNoBbV3Cn6TYo33KEaEbCLPn4ZbiHLDTzTrbjCz78soaHvzefrs2tsq7SK1n8ACW6XjWCqN",
  "key31": "4ihXQiXL4mPF3aP7gUjfRzW4DrnquKt8xtcXtweNuv15aftF9qc4iJzJgnBVexi6jygWPFb3X7222GfCzsvXagkF",
  "key32": "2c5jz9Vfv3irrLNp7aJT1utmgbQYhNPRyfuVvWwBxhCiqQbkBBaD1eZiU89bcP4JSN4dKy7W6zprTXxaVZ6zLxM",
  "key33": "3wQ8MvwyMyaopKSyUmG1YFs3rbsgapWrEcHdPGoihBjkCboPSLeBPjUNKHFLYNrJjgkEkFS4F5oAf3ZpjX8Zy8aE",
  "key34": "3dENfdHXJkQp2rs12JRQEcmh9p8jwADp6BKG6W7AzZu5TEPW9SLm1c4cX7R9WwWGnUbwrVZRfgED2XPVbD7Mb5Gm",
  "key35": "5tFyEctJTppiyme37LeN5Qk2YquVfqUsLF51k9w1GcBPey4QN47j8KDewKmTApYPjtqVrxi81XK8dCRwwntiQ67i",
  "key36": "ES4tQEwLzpvkbVvAFKui4WpSB6jwcQ3hWmniU5BXUkYpUGDgknwCBDkYbDY5RoEKAEjg2AzsrNUVobfP3Zc2w5E",
  "key37": "261W579b39gBjgzDpWssp5aJcLwPrEHMfdrv91xbNZpJiNWSiNBHGELs3x2xmLzvtitrfgabQSBFW5AMyZ2itXi6",
  "key38": "5LPPxB6agVots3FwQ43Nn94H76sciCGRsBy9qf8DeJGMxCuBFNxTqZ7ug8TLBMSTuQy9sSRPB1N2ptfg6fgPs3wG",
  "key39": "2oPe18u8xKBNpcLpqMU2cwYn8xNvqqkyzRfV2S7TCKLZ6kbjwHxNbCHhSpYZvatkdSuAkvpXVEpUsdaRebhgFA2L",
  "key40": "59TiiDSD4FU5BggUUSGpExYSAPDP4CVBiPF1dVq8FNw1JWQaeTrWnj2hT6xxttoxyFoaiDFPupreRinWqxEyW1MK",
  "key41": "zUBUhYa58k99FKZPWB4mYBgqchjiVUdhtSdvJ1tjs3DZwtTv7CEWwS6MpYDJYkVNZiZt1QdhY3DPM5W1vHG7JLX",
  "key42": "5Ah5xHMMEADBP2viCFDSjkW95y9K9LhZPgwo5KWsfYAAQQsGhD9ywUsreV4zQ9tq443eaRKy9uLGK1AXxmjadscW",
  "key43": "F785CAGNyRtzDaBjJu3tbmyX3r4AEbGiPk8L7nq5GB3GbDdw1QHVo3ZLuQSeZn9XSKx4zrpwV8MS4ayEgFHytVx",
  "key44": "65qXqAriDKcfsZRr1LAeF9WA31KN5pfsPfvoKBfcMoD8myZKnTQGJUQdPB4Cg53dwK3Wv3LyF1doRfKLzu9u5B1k",
  "key45": "62uKK8y2FsR8JMvmd5ijtAiDABYRAdBrncm1EjrYCPXxq5Hwwo111XzKBD2t4bW8rZL7FR6wQhmgsxN1VEBffT7P",
  "key46": "2RE1ZZ5d4HFYHPd3Wyj5tHdkEJ4GFbwAqZBpJ7ab1nweCoG3EvPVhguRnjxTyHUo7KFh6pg3ACv5RuBr52Egxxfb",
  "key47": "2KRjzkS6CKHbA5QBj3Fz2KoatbwyzaUPsH6PRa22eEHGPDmDQk2ht2QoXJhKMyEpCLNiKYAEwrk4VxvkdrzXnLkn"
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
