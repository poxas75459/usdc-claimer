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
    "3UR5Ny3ppLFVeH1oUgCjPsTJb1ikkJRtAn1ih3yzS5GjLTfgfobXgMn3tgnGdcHFsTBnXNPEbHHKo651pyfACpEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxoWj2yYJG8WrmPMuXaWDpGQNqGfaz5sDYMMqrzKrouLFyH3B4pQwADd9YCDutf27MVPi1Yn3a9iQKu1Hh5Movm",
  "key1": "3iyVethsrvLr7Hsu77CxEzht53UWsed3wjmWTPvZJgBdnZJFKkdmsYFcyJ8kmghuuz7vjNHUniPJQHbsKwBHntg7",
  "key2": "8NVpy8krA97zep5etL7Kf1oknULeK13UmpiuHags7saFr52dzS7TJSa2JkRNZmUw1CciZFEPqityngemTxwHcUp",
  "key3": "2TMis4ccuEhNLyUMkkkxbyHkCgxQjBnU1nhYwsQPqqut6Md2GqRLJVKMdgFEMQp1QLnZ1iheoaNE62gruAXcFsw6",
  "key4": "5oc27914zcTm2uuUncZ3aeroKZjjLoatNbcK4uYWQtGeKAzxSCRJpX6JUs1vwgYnrQgpUabjT2BxeCNqQvW7KUJW",
  "key5": "3naN6WebAESGEb2A5s89TRVCJc4maHrVQSwi6Uhr3RfJ7RL6xAdcirezjWAKtkumc4RjoTvBVx22gAJS8KVaToUU",
  "key6": "3cP9NvXbZQiaAMtRN2mzKkbFGGMLfGLvjoYr8kQxcZfPMqZyhYVHM47HTC9kbHC76kyVYWUMEG9xM1RoaRm8ZbQZ",
  "key7": "4P8B51KEU5W7n438o1pg6SYbRCgKTXx3wNpuyh9xRjNvhkZvwvXwQipMnvr7WBkqYhSsQu49bepUL4oAEeAsiAVT",
  "key8": "5qrnxG45K8WfZn5jFp8CKUUsVVa8tDXzhb1H8mkepQeSz2XsnEZztXYyqyAi1b6kaKv1pNSCXM11NFLebjHCQyT7",
  "key9": "5GxLipokuGcSWBt5VKfLLhpvHGdSZ3M1Bim467Wg4PhbVH17iUNAJwm6N9Bi1YXo7biMmSAyvHaQbUNU7uJatT5K",
  "key10": "4QujNsvFrrhv6Jf3QB53EgBQN19z5UT9VsmiiRjXqwWU4SFYurPDTk8f3kHe5iGnUyLCAQgr12K2qB9ro2zbdVUp",
  "key11": "5hCWccoLS2tkzJq33LKv1nX3MjDc9nVkAhwwo388rni49oubGvYUs5B9ciSNNHG6DKUVaLPpsmxvcfAPHZQXuyEF",
  "key12": "58U8JTZVLh2WK1Cxa27smciWdbC5zjiDMCPZ4RoVWTSUHBwZSZ7Aihrcuwapgo6Z6RZN4FKCA5bLRHXfLw7iGsbn",
  "key13": "3LoycVQz1WhVV6XNVNyNKYCDLHU2oehvCPRqdxwM2aZPKbsMQxCBureh2T5LPgXAGRdA2jhPzg6QzCHAhzwwsRxF",
  "key14": "2Gav55VW4HuwxPuC8eH9zx8UQg5KqjthbTQixG8WoReEmmkuQybRgdmv7LadanEWJF4A4LpC2oUSxT5z5UKcBYfC",
  "key15": "3UcVTTb3Eq4T92wqKPBLdfefJEUBdgkyvBrSdom5HbUg1E4ZkixhGCR2JHxgautXvACBYone4Rgz2xzA3cCvitkF",
  "key16": "2gagByhy3zmUTyEYYE6MivVURGNpwF6v53aS3ig56H6Qbc52SWntnwDx8TACyarM43sNLepbAL1vhyUdPQ6MBUhN",
  "key17": "25JoReR5iRC4dnN7UoRyTTDKc7W9gFBTxPuonpGniY47YuHf8jB52PMFhPgNcY3Di5DvYzkaWH2cC3jx9zNuv1H4",
  "key18": "4SCMvWCiDJoXt9N6bQrk69fd1RfSP2VFnFHc3CLNeN1JuCntFLnxCeE8zRuqptNAvnNneknxsaSKEQ3fGf96ywDX",
  "key19": "5hmXyB7kCEknKhfDb4tKXg2Co3DGBJKHaqGg2UNpb9ESUTes8af5gPc5nzsjDKjQdoo22EEYDkQyDPtZyPXy5bu",
  "key20": "3x2n5Q6qCLYksnZPzHZUtm4N32B6pUTPVbhrLtNcx6GW6c6RXfH7jGjEh6uc4t7JqRAvLuQQ72wUDCVadXVqyPA4",
  "key21": "4TDJ69jBevNYMyB31ZCbavv14CPSvwcqVS4KSoJBEZBwMN8tuKmjWbPHH5jbqa798bisYG8q2XY2bkr8JEyJUWio",
  "key22": "tmRs7Fbhp8cXEVrE1skGxx4xxuXkhZYz9SC21imeUs1mT6yskg8Bq8Cpsx1eGFmEDUiXBWDqiBuefHEz8UsfJXK",
  "key23": "2E9YUSHJmvkyY9wyW5XMco4q94pMYAy2qL4jt6sZSbo8tncSx8d3xrwYPr9aKWeCFd5utpdNdjaHHXr72qft7diF",
  "key24": "4b5QvUeLbn7VMrEufWxgBuGDm1fbRNRNF2jnCfT8wAELySWTSQfBhMMB7CycvAeFFrBhFWAkFaYUNBYtoScKuKdF",
  "key25": "3woFrhX2x77frARqwMcbpyQTMRwRuXEuRFaa2Dc9rRtULBixECUXhjxpzgG7xDAW7PVLPpFdeAmgaoKSS1Suieo7",
  "key26": "4PTTt79TbDYUwtwa9nrwrqRKPr3MsQ79jYBuxzM9Jj1PS7rvriwPPRcLB5Gmpm2pnks4w49ppCt68L7FimAgqRfx",
  "key27": "26f64mWDqcFhxEACYo74RV1H7DX73GtjD9u328mUK8LGckJUwnURCvWpqkoEEygUuZmcUiC8Y1xy5BjWp7L9JqQW",
  "key28": "kH9WRvFTBzJBNYN9eQSPyj7JhwLQzfSPfZot2RAucPc3khStp498CQGbzdQqTjms7pNLtNTrTmMKJthA9uSzYVL",
  "key29": "3zjF7tUZbA9ozAk797gU9UejTSnDqpYwZjfyojz8YbNRpUNG5KfGTjZtaMvcg6Ha8CCj4b3PxTTNgpeXET2r1nCz",
  "key30": "5Zkrj1jwtPaUoB4gQFGaL1Vput1sMNHFDnC21Jeu7neVf7GuSpU8Zii2GKA2yUj9VSovrF4XLjNpQMBriMY7eGzx",
  "key31": "4DnhZmYGjh81g3LEQQuHPzaXtAiZTnindVsQCpCfXrBeB7vpLH5hk2jRBw2h18LympMxD7TSWg9T51ZrLWWtfkkE",
  "key32": "31wYYaP9EoJqDPtBHkCAKe8pt3aJh14wmKwtCXPzBJ4i19CdQvrh6zeVEP9Y7yYUGz5LbwFvCBFGeDD76J7NS4iF",
  "key33": "hbLLZvp54RWm9hzQRWaBSWQhLpNgRDw9CAPijdyyjWtk9K3kigG4pCpJ7aaQt28Bes4cPrjSbfUVqEDJuuXydYZ",
  "key34": "2w4wkcsypSegs2acKfrCjLRXJzp9D4q5Y3V1j1yyVZYx8axD9vV7ZxFUAozsBmUeMrVYWDwsAfZiJAZujHy553bS"
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
