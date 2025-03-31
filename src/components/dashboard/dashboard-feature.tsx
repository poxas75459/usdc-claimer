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
    "XvtdrAykAhEXucbiYSQx7rcy4EjEHH5pPrR6Ug4Cxp9cdNse225pF72K2fXiJuvecBGtHD94AdHDQrS9hQyzKYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjJ2MJgiEtEioGd97HqNUwnMrMkwb2skr3yXAFKeoeGzc4RF5EYXFacVB2jdmPtWZcqbMJdLQGxGheZEATGKMRE",
  "key1": "4fT11AYyX3MCqeKnJ3bKcgVFzyPf3GLTu4YQt3ExQfPvEZ68Ey7VeXXSpctARyD3ZU2j6R5svahek7dh4UBgw9Lr",
  "key2": "2sDzsq32wWizuRYo31srfTvMDCSDqt65EGGCcMtTTpUGSAZy4Zi7VSpDrJeKbFdRuS1M2Zi7d6eg8BMPVpzdpi6x",
  "key3": "2G1YC4wZ8W1hwXBHNgBmZ2kihxqNmM8ikP55gJtXLcpEeMPRPUCvmVncmptjhtFychiWcCqfjCKC18kjaXuCW2qg",
  "key4": "5wWNicetMSRfe7Df7Ec939yFfreVwbzvZd6ZtaFsbKCqL4xnQASRJq5thPGGkk9VRSjmDv3Qyp8a2H5bSSEBZf2Q",
  "key5": "ZCkoUhHruLztAFGVtDwkDU65YsZJg3DTrkSJ8SzWc9qLbgbdZ1AYJnwLmmn3frDhCMeGRQrBrJrQVNqcn2juW5P",
  "key6": "2MPbJuSKT3ox3pPA8EaKJ4vxHdEwi4shSfBFPc71YzpjAeHCcVptoTY8VsMuAMnXEfEp1bnsZReP43HZmYsDz5Wb",
  "key7": "4kMQu6dfzVvHDbwVhQZhJnjsLr5eYsg8CYohQYhdh3TreFSR4vmtCEf9AEGP5EH5GnvEviHbjqQwHaZ2SeoweUEa",
  "key8": "2WPuaQZdyKgVN5N8M8b3gPcZTrYt6HmUd9smd45kdJfJU1i9gZYuZ34BfvN7QyVSDE5qStV93YRHfKqspnPgN4gn",
  "key9": "3DQEpfkrAgMatTJeCpMrJ468fBaQPYvNVzHZat3FK8b8zeo2ZNT4jjdVxWsY8VMXw1QA4n5363qMcjtWuD9efGMS",
  "key10": "4aLwcbdF53Ppt3oo8TypEksDvEwEbEtbuadRLwgYabSUZuyJQa34JUSEqijhSt884sGwj8zAb8pS5Kr49mrSMRPq",
  "key11": "2sAyttM7JtFg2fqmzWTKtpZeq9g2PuagGipHiWmDchuBVeGcjk2KDnMZ7tZVLWxY6RWBJPQr57PteZLH6RgxocLY",
  "key12": "3BXiXERAVja1HNpkgnRW5qx3gSvekRuv5JxtF5EGCwWUPvNLUb8wZUpV1ZimPG4UanLYb6SircTZhUrX3QepGrm3",
  "key13": "4BhHyUTbrWNZjcdwyq3nnAxzRsHsXYoS2P1Wsyi57BsWLEiB4hdJNPZaGJitYX6m9Y7TziV9efPhttf81cHqQEvZ",
  "key14": "4EZ1YtXX37a7hnSvArqD7WCHJcEs9cnnVKS1ZkhS8D8M1nmyXqbVBST6KMDntU8mEsaoMkidpfaLAzURFxpqjnBV",
  "key15": "5ujjEUeRqwW1yPkw8CjakVZKHhum1DtEMEMycGvRwjhFkZJaLAfZYbMehMaMn4JswQzGzk8kmFwQPSCQGfk9RMtD",
  "key16": "NeRmasxEmXCMK77KCsQHhWecBwWsMXnEYQoggj6LcUqvyRJdTvuqbkyEKYwai1B9MhhR3RssuNuK1b1PLnggB1U",
  "key17": "4HMWhNEWQs7G1pxtFyZ3QgyJZifskmXMYCfdVapwZzjuFAw4H5bpXitJva2gLz5dCxZ6N7UYZ781Liwa8mB4etKW",
  "key18": "4r7QL2LDyLVUBpraUKenH1UauJnk5GnRSFRV672pFDUkhn1oSGYnnkfRZjV3n6wavHgXZuoXBe2AxQow1AVjFR1a",
  "key19": "r31Ave7U8cqm9qd26icpSjYoBgrvoAJt7XrmmjSNZtMj9rpoPP2hMiLeJDyspF29yovgscCg1otF9RtQkWMEsx9",
  "key20": "4YeeM87qiNjVLUqmXSKDXhTP43YADvypxkhGfvY5w7mD68sse3ZDWM2Pck1w2xVVsoZdd4vLtUFwkvcWzh6RTtPg",
  "key21": "5WgdRYYgY8yJmTZTTuGGqWuLzNaDgoaBsrVggjjzikX8gNXtyTR5jAiHFV6vMpDDExaesqgfsmPvDW5qy8wwm2LM",
  "key22": "3XosPq89HCdaTd6bd6jfVNi8aFPfzCHaXsf9pPR8gQGfTatgYSuEYPNtS42NbjcEFKjdvfxR1hebU7mAZdHXZv9v",
  "key23": "5FAxP8utpVJ3W5eoMPWqad6jbdzVxp3ZDaEvWfk5Y9RQZDpJ8vwPAoBA1PKS3kik361X75eTmG3uKFhAkZXdXKd8",
  "key24": "2AQzFe7SChsRHjHx4VuYpSQUj5UGQUTuH7HM7PBgGgeGp8Tgo8QdPUbkhg3k8NFE1WCDMbRW24WfQQHNgEx5VEiu",
  "key25": "28CXMzo8cuyWHc8kYoPFDZMv7wQBmYTyGALU6UB2h7Mcbtcco7Hcan8xxxbmG5BjXgp5v915MwcqbALPmGC2FPfS",
  "key26": "4ACBCk2U7pMXfxXDPeSXtURKz1WLJted8RA9mh2dFKGTxVYB6KeGL2ei8N2FyfARRafDNX2YVS5kndrTeMJuZPnU",
  "key27": "5AbHNitcz3EttP85Mxp2t7KngDtRjFz4EvURwukdyMvCPqTY8WG9GbjAn4tzn3kgMyQ3F9TqvsWmwuhJyKMLSfsX",
  "key28": "42B9smyFm6PhtFDieXHSGTCKkGL6zZuHpLi4MaXywwMwtCRpm5z8midwgqGZmo8iTbNXotfyxQk4b1xK33bMfxYE",
  "key29": "2VEHNSHGuyGckN2vN6kyx7A1u42za7eGgm9zvD2SieXRCUnnUDNAJVBUYdDjcRRRNjbvjXMLMsqQu6XQaGFWx2q7",
  "key30": "551iJfxMz8u8aMwW1zZYTjoxpuiFKSbcZsFBYXxAboGrGak4EUMWgre7djcJZAoFDG9EcUNyKTHCxaaJcpMAWmou",
  "key31": "3fgeNCWtHRnryanNJ1eL2epNYwHrggvkEmFq6PVViQeVU2BbYEhw74puA4iMLq9JKtFos5oh6BH8fTGTpLS66uBc",
  "key32": "3vpcym5HV4ggJRSCpibzXmx46CuWMaHRGA2BegJDqv77eqXSPETar6UNktsTUX47cgY2N6JfZTdRN8R6t5RUEX4j",
  "key33": "z66bHXh7qUXEFsBopYKWsrUnW9mAhikPbw2Gf7sNvdTkS3cGtitVhNGuvzPenAzKXpE4T8bqRK2BJTq6zSqkWNf",
  "key34": "4g8pqyKHjGzEmTaimUXd7Ch22WnjGBZHYnHNq47n4aoKBD5WjijQvj2yNmAm4s9ykJgNEyDztZSeNRYyCePyFEDW",
  "key35": "2s5soUo3XuzKhLn9Hfhhrx7P88D7ZW3y9htau6ts6a9S8NocnSV1E34xvjMiyXtRcmGMRworTrciJSDapBEWLp5r",
  "key36": "4GPW1WTqiS82CVEZANTHEA7Yt3sCk3zpmJfPDP6AkNY2DkDT9jVmVszAYPSnqG6aYwnBjTTrvGpsPj42C2gZcJAB",
  "key37": "5DbjMmJFD6fMHPvDf3wRLzft5GMNgXd2BrobNURj22Uycg8XTAo9GX4X1mm1JeAYDYoX2ZiERkquc3frj3BPCPBr",
  "key38": "4Jfw9kJq86wvEem5r1KaX1iQUteAiSoy67KfuwpXT6hrgTZXsQSBN1nTzyh6t7FNx7Gwbrc6DHhSC4it7UMJa6hE",
  "key39": "45burMoCoPqX6rwCj6d6d8VojamzBm1ajkxjL6HFLY1spfwNesWeJABost4cCkDesL5maAA7KpfcNrMQ8igLKVy7",
  "key40": "5VXLTfNdwTE1yaMSnkzegYo5PaDQpjNoWXRmBXjriy6SEUbXAPqUGGPoADRjNYJvQghHe64hNeVgor9f35oEC27",
  "key41": "2t7eaH6abVnMGE4hSQXRSxFS2gCC8jdCeXwmSe7samhv9GXPvvCc8ep8VUjNDYf14XUgmR2LJgxrtVL3akrQo5ng",
  "key42": "3geLhe2MtSXqKzyPFmi15PJGHRtQt1nnPRAWAanezQTjAST71y4hoWZqmpBcrmMAWhnd2wRWkuc6hBtvyZkTMei8",
  "key43": "3YgW7wwyjLg9smp1wGuKe9bJo5s93kFpCWpFAPwNuVMr3sSTm4bzwADiNDgGM5k9uJfjAB6HShc78d1SE2sS5yNy",
  "key44": "4kyotTKGg4bPgTzUzK6zi3cnckRuMbREi2AAuerPG9hFn5ivkX3S2NFbt8moseRuvmzg8E18AH7TSVUBmJmSG44Z"
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
