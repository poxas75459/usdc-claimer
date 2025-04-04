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
    "4RmrvzLch8gR4Af2f4rXLwrVm6vWTvNe5b3r9w7H2p4YBLUD3HooRdWrHNkhBGrqMNK3zD9kT7zPtGpkcEbJUnxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHiE1BQEE7rQrWHwfZDp6LGYz7qKAD9KVpmmFviSkNoN1sPyN3jChZC8ZwJWaZvbXaN4fnJfGwnAVjh82qiBnz1",
  "key1": "5fksXAgLadUcCbTJwbtadEQmqyTrbkegZVmDiF2jAr1rEMCRGZRSGs4CrfKM1LSPnuCjfepqo249TVbFrGh6MVfY",
  "key2": "2uW2T7TuAoL48aHveYfuPzWK2uDiu7E1j74Y2ZTzBqVpaALUDhSMNirFnZEewsgZFh2wUTi8zFukowAEqtitQ6T5",
  "key3": "5K25E63VXZjesBE3QXZXRQMQ6mP8mocVWcyd69wvjZCFb1Y51ti7DeEkE8zvHGHwSzUMsZvDGDn6ojJGHtvq1uD4",
  "key4": "5KPgzySpam48Sf1dcmjVrHVuhAtXT9N17jEPSX54eewYX1LvBPX4VgLDV5o2FnaumMpmwYX9vj2MWKtJ1t5Apmu9",
  "key5": "v9Av9bzWBAuNDj5jgfEQocrgfYnrRHcX6US69QH1AV4SeVjnnAh4CkjvQ2PqeqNNhQdgDVyeDe6EpQBtTop58wB",
  "key6": "43whUt5TLHrzeJ1eEzoAt2yCprntLqFhLZXByxG5dPC7nmrtZXm1NHwPpCmEczJH29H4ENuQD5iMKbzu9WGrBGty",
  "key7": "SKqtsd4dzkin641Wb6NNRvdez6oBM43RqhjoiQQ15h3zr1FQiLwMrVk4AWQbprrAskn1aaATLsAs7EjASwAmkER",
  "key8": "3WMGj2MEhwh5C5Gb2zQJxzPnHJo3z9p7YoRJY5aBHTarHfr49gS2TLJfqVp3eqN2YkbKJPa6CDMtthSkN9LHkz7j",
  "key9": "3fqfK2XoJbSZwcHjmJCrn6jQnfjBTiLet7r1AxyGwaFMRWudLQTNUvsDYyGrwktwA3EzrG1V4P6KPF8fWFEHzGgm",
  "key10": "3HQdzbpkE9HQgSSWADb7fqHxfCwm1eRWNsK8pNTE1LfCf15eo2pxyz3JriUDydyJ6VK47LZbWk5Cu731N6AuL5bU",
  "key11": "5NptniaFrNPXmJAD69XkkcmygFW98p3rnrGEEPGYpF3zW3UVH5CCabmgVFpv6b1Su3LMKzY258xdPZwpcsNoAseX",
  "key12": "3PMmvBA4ESduTVtCwE5tDmh41Qa8buKv43atcbAa4QE442p6DjK15rCduazfsUmY65gjiZBmpvxDZtAHykVzRSaF",
  "key13": "4seiek4q2PcPeJrBXQxfLJLvsyNktiMubfWT3ow9tGePdBKfBm2e86Ar9zgHRtyNA4bztM6oRvopizANLSsRPkmm",
  "key14": "2uUtKRFfjr2WcBAXwVf9ettwbxfCJwUQe12PmAMXdcuVkk3LiLtDN3CALwwcd3NJt5bkdmTdbf2yHQ2GsCyrABRY",
  "key15": "3NMcWDc6Kxw6f8zWKN6xDa4qQPFRsafom462ohFSjjyeJ5zNXZ9HwSSzehrhcvj7C7oEKFuw7WJgMVT6jDQK2jpz",
  "key16": "SE1kpSjjKBK1eKihAQjJVeG8yWZDHGW51rfSVu4wuNZwcKpMscbU7Kvfx6RGgR8UQkqqByhRhzuFhdEH6bLFZbB",
  "key17": "4X9hPaocP9cteLdj3tuNEaMm3KMW2LUQZvBjpguTxPthf9K2hsFVf2LJkmXFZwa6CuKVMXZTVu7PLHaukxQNkVtM",
  "key18": "5yS6CTEppTjLyAMUbu1KY8B92FuivHeUNjLAHviyboZL9TGaR8CtRSMdYTkWgawJV7yyBveCGoCZND6ZDr3eddNx",
  "key19": "5WhkXJCrNXTXzpVLA3vCpF7vXGsKA953CkNRwx4hJWR8vmip9NPxJpfCf8aLcXWRWng4zsEcvWL8NPcNRTDiD9Mh",
  "key20": "5NcEnmvAhLXzx4CMBsjwJaVetvQGRsbpJ5F49JscSynhpZQQPoX8Xg96S9zyC4rAw4Qv6RDQu4hNGZunUD3n8JUu",
  "key21": "5xauV9298YQqHySiPQS1t7uRMMTMQN5xxsU5rAxfV5xV1THtgrmWAP5EesRZ7JkzyS9ZmE5kU2VrKVRJzYxpKCT8",
  "key22": "3RpsLZtQgfoqd15djZAgu9zuzb4yojtdxvFwW24PVBaSTrFzefuseUPa8Vs5JZG1QLWa7BcDNmd2xFsjCWpg378K",
  "key23": "63vMFH8a3aDVBsGb3Y5EnNXUChVhR2uPc1jemNRnM3dkbVsZWTVaS9t7g4zty98oMgYYSBhs3P99EXh8XTRb7YK8",
  "key24": "4S4SqW9FZibcJyRARRGoTMW6Xi3KqwT3MtQ3d7rm4iw3o151nk4mwStrF4FXFFphnokQW3xnpHWArma3Az5DTGWu",
  "key25": "5EtGvDtt6Ex4JHpMss1oT7kPmttnUYE2KuqWDMhU29Yn8SshK8YtCkVsy6u4GTn7d6TmuZvZ9RFy1qxfinXgPoh1",
  "key26": "43Ueob9zWyhL6vkBseg8xhWmcuAVUctoAvGzf8WEvP2u3vqtQjj8BMhxKPjbAiETAcuezNk83dncQzzAkw1nm3A2",
  "key27": "QiCGvvNMHsbGniY3YYHMLkRCymrFF5WqinCk4K59K16R4W5U1P4cq8iguuYGwp2fo88qTnAEVk76dwvkar7QQvu",
  "key28": "4RctSmjWMuL3ZrTZVE6fJfhZDkfpxqPc4ewMHSvj2PJAfJa6vMtzMRTcbUQdDGR9AWpHkgZafS5UDnoeBepPkrvo",
  "key29": "4KRjeaFKUS7rgVgGYF3gXpjUwchD4eq3oF8gS9i2FfBBunhiR35RQ8DeZWZV6d2NdfcbFuvcA2vBCGGRpWgCQcyf",
  "key30": "gNHv3GUQeC9VTkhg9bre6sYtFHP61gC3vJRZfwFiAx4ksALPVSp6cpA5VfSbwJUTd2onwmhGJd4p7srGbcYbf6D",
  "key31": "5HkatJgowAhqth956b9dkNjwybjEHhwmkxzzkJvHL6swxMEimsVKQ6L6Mdqe8J2huwHoZvqKFiwdU7uvquMRpw8z",
  "key32": "2JeoeKkgdetZd24a35RnLpR8N2ET1VnLNaF493xNEpYyQQrFRxTrVecShEzrrKL9y8G5C4kb5zEQSzhHy7g7pRJj",
  "key33": "446EJvrtGcqn3QhUd1TPE3ckVq874ZZhpQuNeYXes3PJrDHJzV8vZ55wwN13acYFfFVsx6MRDx8kmjQhNWdym68E",
  "key34": "4Nm5smat2zEpg1vbTD2RdqrGmPdwswJdrTG3SNGffoJvBqxaryemK4V7DPC4XqtqoNpcywzuuVY85s4LuBRtuDzk",
  "key35": "27K4Rmuf6SbGR2ETjDB5xXdpJjCG1GjLx5GYL2YfMjoHk5egfcBF9837RkSvLsTwG1AXQ6mRYrccRa56CeF1Go5K",
  "key36": "41vsxtmhB2ELxk9Xw1GVRfgGD4bkrquYXPTmGssytEzZfjscgf67ZvhjThBxqe3sBZz9yWHw78qK84DbrXRjkLpm",
  "key37": "4TwBg36mxVcucn2zaCyX6JGcb44DL39hJvj2BPiU73aX1hiYwBdbseU1QTWTnKMLcHT8Xgj8CHFY13kPea8r9Nhx",
  "key38": "4n8yaDZXN9zHZZMnoBERJPmqdj9H5veX5gHCPdfuc4twnbtbuM6HYdsserEeps1BW2sJ8ERbwx5VcmpEuXbJNqPV",
  "key39": "4nByLTgMR17KZuNYc1tqtumpuWvin3F3H1qfjoFmNRAMNBsWzGcmBtG4T2onowQec62pH2bLPyeCcVpo7rN9V3ot",
  "key40": "66WKJeGGsH5xiVyaAyQpqi32u63ttuH8sp13Nt73pA5ArSnVe5AnRqSDFTWyaJzKJFdjYYYjdm4ECEus9XUFB2xi",
  "key41": "5Lmmvx98p1qQj6cLG9TRSZsR74NpMrsERcTzsR1Smv732GzUzpLP1VhmC7QjGu2RRkDiUCNweRZ1pr1Azrpm59wF",
  "key42": "2aRQanPEqq6GUjMbsE4FzSjaTgBx992searGvVNdhJhAx8htBMHWoZEsXLbwbzsGGaUEoViwMcYcaxudrMhu88HU",
  "key43": "99Xhz7vpDTUjUjEfnewG4Z6ZfevueCwGBqAqkg5Hqu2CbxgPByNtLMYEJBasNkoSGbJxB2wv293ypSerwD8sMso",
  "key44": "2xCTkDRbjHsEwBPXtoS3BhTDuMLrszWXzT56wrPTDkHksAxyk2YsicFX9FiGWSGUQp83656PVj3qUDKjMeiqyfiq"
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
