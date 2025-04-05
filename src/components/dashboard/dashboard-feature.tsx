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
    "5Egz3qtSYbNFoid41WuyoBfyUSRnksBAJWMqhow9dtXuyniuoLffTubrffF3Auhu4KtzKtr3U6WqnfoSVuwfSobe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WRbUsQXEZg1bz4DHp8tTY89eWmpK7mqCHEJByx3Va4m8Mxyo2R7f3FoFGZk5BHkEPYUouDa6Qmthf5q5xTLckJu",
  "key1": "3QMzTqEEvXZx2Pgz2JMwwdRYJQNqBZ9NU4SeYMNovMTEks7Wdf1QK1EwSjcJizuhahNwf336RDY5DF4UfUHDPVjK",
  "key2": "3h1S8JEshZNQauSNUjq4pnzZB1s8E4GwemkcrVN9jEzjFJywrqhsRGMndtr3mG5tE4dbjADKRWU2V6L1eqy1duqU",
  "key3": "3WpVmKuedszTnjxkr78762LPhVqzEiYZ7oeaH3wwJ9TyTmdk9aMzxHFYEfa8wSedQp2L6i969Q24eMf8o82bdsHr",
  "key4": "61hV557bk2kpQsJEajYXPf281nnpuxcw6TFZXWYVX4TgM9k4EV7zU9u6tWNbi2JTahEdCp2X6f3BenmujBWRyx4u",
  "key5": "4SdpC8bSKqCxbfnN2GcLZ2C7uWK7MuWgLKuVMoMhSLE7PMQVSAi3ZFyK3RFQkX8nHVBnti9MgCSSCi8A58khQ1eq",
  "key6": "3gkhQK9fy4tbucAYeL8K85VsPox6eaJTr5vRKEhTZE5JLdMbfwoguV9BcAed9SYntrkf6FTuV9CyCEikdrJfNscF",
  "key7": "5dUK8UnWGuiMvwrxcxWRuSGCaPcXZ748cmqCSHCuBbM8TAEAM9LHQVyoLbhruHSrFaRpFsfFz26xmfdtRWYsQFxk",
  "key8": "5fsCGjKwjr55D6k5d7N1jN8gm6ZMBXi53k45evtz6qQWRm8mi4b1myrXSwLmTDVYiXyyzUCoHoVXV5q671S2Kr2M",
  "key9": "2MQJ7dikaWaPk8fpWWRab4LVqt6Jwfa2gsMfor5W8x1aukteAFurjzqmsrgtPjRrHN2LwLbHYcazEui1DYkZdvDP",
  "key10": "3UWYVxyEKbFNQz3pvomTcKAbN9DEa8QAS4a2SCGQTcC3BBq3paVNKPeKfNNRkBaBfR1uhfZFdJ9GdbqmvDG4TJDX",
  "key11": "5yPWKLiJoQbdCtnh5L5vJJFj7Vv21VfrESkCrQTo2WXhMHkUCfgMLJHMcj2aanvPeNkq28AMN2aN3RrsGUGfuY8R",
  "key12": "3g2kfh4hq1jt4vnahyKZXQj1pq5gQjnLZriNCgwkvyBE1c1141cZsfVpoxVUPA8Z9YTfH242JiFGegeZLuuhxqFh",
  "key13": "RsFpSJRguxRcXDj62VcQtyiFSM5ons7mNb9pFGZGC6vK6N7e1oxdcdNfKZeGquTcXxmaBaJPASnrYqTjkt1gsZ5",
  "key14": "4u9DGKR79s8geoP1b3KpLC1bGPNsEkVmsMvLK35RqqL23x45SAbCfuhgRw7cMwZSduXzEXwYykAJRmcUuYiN9bqw",
  "key15": "2ZhjBfjWLcDRkQBaC6NfYmMVeni5furV8aLYxAm2pLzvYvpdVpoyMdrvS1yZrt1dAUipCbFHjfDMUWy8sAC3AGQQ",
  "key16": "4d384uVPPfZzB5ByCfDENw3ocLFjRnN8FV372frFVDQLTPMKcTicGJVe7hoy8eAxpuRU22ZK9BA6ZAgiQZo8UJQH",
  "key17": "3TpAPaWrPfW3JBTmE4dy7cBJx46PUp3mSBYGm3bMszsA6RaAuNWF5yAZ46jAHJ7US3XUhWa7MXPas6dHRJWMkPQi",
  "key18": "2kVJQHnhep3UKW1mEypQyE6FUADtFhvW26MvXeNVNo5GrqY78rhPCaC129AuDowAwLLaErZYZhi4VQSRjBY9F9CY",
  "key19": "3hnubWikBZqQDQ1yHYU1drJqEmBvAYfCFChRA1edWTXfcvbpvy4E1YNYwf9T5mbK7ZVbMytbDkDy3fBE6xD9T4qX",
  "key20": "hdF2JW4ijqRTdsHVoc7kKshomEJcQ9FvMSEHGW5M4Y88LBpQPuv9NqWm2U1i8Gqte7jmGeLNtpuWSFy8e4zACPW",
  "key21": "4XoEYyRPo37yauFJRB1Uc6m9bHEWQm8T3t5ej1qwJtKqVCTNXrDg1xu51QBJ9Tzi32Jdpn37RTKG4dgQbji3t1BP",
  "key22": "RYhRhuwJfvjKCx5LCbSBt2ihxZkkeUss4D7HJecmMcsPVkUhL3oKS4L5kxn4WUcK2Gfue1BXZdeLYCUyHcgdzCB",
  "key23": "3vjctdTrUeuLfGG8c9JPzK3c5kw4X8umYh2Zd9AXcfFLuAdcHjBSPSZBFHdM5jr4W1qKTssL34W8kmJyXGqr7C8d",
  "key24": "zQmTayFsWcctctjv8r4ThFggjy9gJUmY6ZnAVXWUKXcaz5GDgpaBKbACs9hUdjnYxY54hLFwiG4f6mJwH3X8e6i",
  "key25": "57NTnvRHFuyXCeHmUPNJUGziMmk5wWsTW5CapXs6Hx214rcVUMgvKL93fsWwFrWVoVYywpXFpdTsXTMC1FVHJqPH",
  "key26": "4dkCTbG3TLYx7F98Uz8j2t5hZQfxystE1FXE11j37JQbokG27bFidaT5veHLr8NkQwc4YGDC21YKaiRuiMq3sAyp",
  "key27": "2wiSmpZzEdTREjVv7XPevFo4YmvSPvyc1HtkoFdSz3MCJga7D9vYfbkERX4UZ3B1igGL3Gj741r1xNh4vwSMoa21",
  "key28": "yjJJZCTkWFbJAnaqZqUuLviGjLW6uEWkY8sgPgdqpqPWSg7AY6DTiWi46h7gWk6HBeptkopbrBuTacgQ2knoSuB",
  "key29": "59jmoofd9SMKFgrzUQ5VNPQsSDiVEqqMLcyLU57zUqDeCZnqsWaV1FcDLJVDqdViiGj9XSXqNH8dpsGMLSNCGdrt",
  "key30": "5MGhAf6chZZAHSLyr2GQ8mcAU32guQrRqhD6oQddbx1eHTShGBGv5Wec1sKSSZ4GoZ45DYGV73W8pYKCsMKa3oH6",
  "key31": "2JNHU14SfskKjed61ydKEyXSKCcszhzCERRayT4VUDQ4LedJbUPKQKDxs9D2KzTtJSPuE45Geaa3dZurP1Bam8ke",
  "key32": "Dfo5XcHJimwcDWPN2BCfJbQ8JZuvq1639HBC1664HgZervjzH6ydxDJpLqYdixNBAxNjh4ZSxen1BVTJGyqx8mH",
  "key33": "5JqqiBqzVDzhcp2drmQEV8wjRNU9otiLsCgNSvP2XgqpL7CWKueDzQvPL6RUUn7VePbKfuV2GWRM4UKPmyE3awgs",
  "key34": "63dRwtWJnwJHyKgybSprp4nprpcVKuSvhXqbMLe7T4dLNezG1kFP4MDMMWuZNauycksMvbVFMLYhWMdh2wfB3ohW",
  "key35": "LggdtBRCseR8sczgNxGkfmUpymtSwGstVpsimtotNsHE2nFJvgxHAwAWCHbNjSuYmdreA8xeF9Lk3qwFWm5rj5M",
  "key36": "BzbYinVagzZd4TEMFfXB5UtjxcDXHh26BEwTReiXZu9dDVmv6ArRHHKuGkgka79MJozG39pgPsiGQCqiPo49puu",
  "key37": "2yNYFVFD5S8CBQ366uHsAR63now72PoypTp1szk1NZqo35q5hkB7Ph2PP2bS5BukAMKqUjq63JjMBS8YiX5SB2rq",
  "key38": "24L5qNhkJsYHiNAkRMdAM7DZFzzwwsb5aRGPC9egvyKCSRGv7v2GqEbMKF1wZpgYtKhkX7QJBbzv3TXpHhPhj2Do",
  "key39": "4ygwNeSyFK39e5pG1oCdbd6qratASKyPqsAMQmETFHoEfVgwozSe4c94LRGczpMQNzbGviwfh4K9NGU2AzVvt2ts",
  "key40": "4XtsMdywZk2Jw1BkrmSAVoER5VT5PzyNLMX1XdQpkp8GwPG65z9RnD8VJPz59rSnZuauKMW7nK59CPHKadnMhoZ5",
  "key41": "5dj4EzcyY2jJU7PtxGvC9PsDFLShRMFTGbg47m2LDGJ5NCRhLY2JsQd64uiDdQrsbAV8ExgDXQMXRANx9XyPQoS8",
  "key42": "2LpyVQrgTUb36k5E1b7NYRsYGkbaJqbd8w18K9NrZwd5XhtLKAdQBqPT3oFRdtTHDmT3ezFKd7ZM9eef9zTvWDkp",
  "key43": "4WrrJ1DiMEugr3KC3YyMvnNTYSUVLdqzHDFZP9A7YHxj8zSQbjg7Qy8NLtRmXzfWuRnMMP9XiFcXSUv2v9VjmcAB"
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
