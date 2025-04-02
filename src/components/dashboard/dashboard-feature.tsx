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
    "61SrR5XhZXPYNGzBAE4qPKGPJV7yRBZ2EunNsH1btaVPokmDNTXKAtos4k7SvSqw7JngaVLFqNn7m66jC1tW9k7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hc3bVbbruJBMzBm7FjWMkZVSaEQ27bRyK1spZgzX94vraWQJ8AWsztcsjRN3iVzi9cueQLtHQQYAVyCRYNr7mFF",
  "key1": "2n4SkgkJyrvpGxosVKttu5bkNzvwP2qSNK3kpWpBH5b16vM2LQVXk87eXLhdoSXMZQxnhp7dn5RTfkq83HHeNHgA",
  "key2": "3CgfxHHq1J9UhCzsDo1UztqyyALNj9Aj3Yqqv45vFoWeES2ywUEKtmz9PfpgfJumXeHbwrdotJ5fQ2QXunHMTQsq",
  "key3": "5wCXPCVnWWNcWTXH2kRTgxQWL5XESNbQS9r6CRAnQKf1RHvtDe8CsxoFc4u8TCQoBfLnrBGXgBwZWW21NtnRqzXr",
  "key4": "35fBZUJSZc7k5dRpUZmL5c8nLrdex3vdhZHmRg129yHsb1MJKHEQqPoEQYySbpFjs3f8Lw69qhHukXyotSqHW8fd",
  "key5": "ET6AkSnNHc8iQuonHhiymxR6ekVePoHUCf4NyQW2zkf5Z3wKontw8WC6bF4yPrnmZMJuVDDpt2oxnUF7C2aWiW1",
  "key6": "8HV2W5CWD7SHa2dWD17RquPdbSnkagWBFiQ7adXxES3GrWMwWzdQzD6pkqt921R8PoNndBDQpmweg3gLT6sDp4h",
  "key7": "2TCywH2S8UQQbCQm4ShnsJBbG5aJQcsRneQ9VXxSdLbvdWaxLEUS92Uq5V3rRRixyaBwkPibSCVNvHNkYpkkDwjo",
  "key8": "5dWh37y5v4g3BuTCtFwnEMiKYLFEYGRSfHtyXxeZhecVxzSJyjTWiiuriXM4WxMjqyMPMuDauxBkzoDGHTMtEmx",
  "key9": "25Ut3jdSYi4BLQFr7zHDwPeyPoaT8dgDTT9cpC7YYinGXSEgNpgmThJBphFnNsrPtXFCrn9fGwbJP6eiRRtp84GN",
  "key10": "2mPcSs7w1rpeHCfsuQe8iCw57zG1Vkxe1F2u7dqpw1cdmUHJLWJyMmNL8AkZqddc7tiTqzzFSKTzHKbfW4TKBLd6",
  "key11": "34QAPbHXHuzkEQeduUocq8eQj245Dc11tD53K2of2gAiNNLstUajaMmFPTkYA9KDsYd6ARuxhGUdPAp2yrdJStHk",
  "key12": "3qxeMTv29KcRrSnCXGSEDx8ubduvRQX7NS5KjtHH6TZjjY5x1yKdeet9gW4m3WJfw9Uy6FKNb3P97GByCxXseBb8",
  "key13": "n8se3UcFS5LxWYX9HqKGc1242Yf66uB4j94r7h5eUpLb95yNyTRQjUBvEuAQbg7yArCCZbWFC7zQtvx3g7ffizv",
  "key14": "56MNhJ2dqosvyzp9Wh8ybWYr3EJN5B9gX6oE2GWpVEpwxBV4wTmhdTmfHNwAjjLq9ed8Qve8XkgqfSuTxTvZJcYA",
  "key15": "3j9AqEtMc6Pg2KQW7eFeKig9deKQmMFfjsAn8XQd2pYA6wHGsjJjn3t8EMaG4vbtJuEqDvqrH7EnAZBEsBjNDWnt",
  "key16": "2K4DmXEhMLDCuCWgxrg2MEnvMerUcwCawE38viuDj1Npkge4WVtVoXwgL4RbKNANcXk5MzgPoDSnsNwnaJryu5nQ",
  "key17": "VTt6Q48aGf3xMnjUKJ18uAy1A7fTKNdnaSW5K6SNpfKnWzwet8Fjojsj4C9vZUDxTSVaRqn7PCcEPFQHiqFoSNk",
  "key18": "4R2NEybM6w6gcxBBbf6n5YjJ2t24zm2eFJJBC6dUc1GwnJ9LGgnDrbMzGa2rcjBYTC5z8vuKKNcrzJ6CMcTZPQz7",
  "key19": "2uhjfMzaF41YZjcujwKn2JkiSyCsGX7AZKoBj3J2MevJoA8PEG5ZZZHQ8tyFHUfAajcyRkp8sRR5uvS9DPsEQzkf",
  "key20": "5RsX81AcMjzXD1PWeCZrmYg1r9wyScmXWpR7DU8qyA9ZxPihSuCGzrXNadd8b2Zd3739pe8ftg66HVVmaAEFgEwo",
  "key21": "4c2DErwnmMXqgusHRymjZbEJPV9z6kyvQVumoWTU3pdbAtFkKgT7wU4YTqPV9REFsFiiVh2U2Wy6fVR9eCgLfS5B",
  "key22": "4k3QQotQ5oMSfkQceKxH59zxQsVgSgq3bj4YqHCRMW2C9CHh8yhzw4GYfYt6L6fxjMtc4EGyVx1r4pzXfNYVs9ro",
  "key23": "3AGiPksK8QEPBJbpHr12BGjHaEfiCciR1twwt5MJDAwgdGFyXpyVNewzm3NTA4tqpCgQzjbd2rePNa4XGELhCLPz",
  "key24": "WBxtfuTpBsoq7S4EV19oD2bcezi6uv7Sr8uaXz9jfdvXhERpPvg9ztDG3RWcCqc3EsPu8uRdcggtZ3zHvAc9NQZ",
  "key25": "2L1uCwbMyoquNXV75jAMia1FSm2cYEtyuUt8AKgzRNPmoHrFNPasJKSUEnG9zML5pFWvfgSywiJ1jMSu5xhvySu5",
  "key26": "5G3vqF5qozEApQVujs4E8cYUYHkMG9DCnry96j95TxPs5JMzkiAausq6dT1k5dj6oFhG7JiJ8YQcC6R9ZDiFggQ7",
  "key27": "2753yMitLpwqTKzmU8hvLYLN27hRJxdY9t313bpRg4a5vBSCtvoJAJEdrxaVvARpmZM76oeuc24w32Qqkwq2md9R",
  "key28": "5avjXJ9Cdiz4hcnFPXydpMr7xucbCtnMzk4bG9sGmcbngjywshaAwW7nWB3mMpBUWF5n5ve3RkM8jzkfGo2S8uFk",
  "key29": "5J5uWJ21KfZEzskR9zsA6RebcMPnQCKugXyWeVGaCYqti2fXAJAiG8RSgXDUQGaahiftpqL9pFh3Yovda2teEbpu",
  "key30": "X7VQzn1aiUzaCHynxrVvQf3GPDyYTChaSzQA5G763JmnS6KgsV91i3pmenWiX3M1qG6p6F3Uu32aWPiBrZ78TSV",
  "key31": "34e3pYMJuRzppz3ktvf9Mk85rAyFtMpAHzeP4ppfv2V5FiUKfhw3hsFpCErHdX9UAVEKtHDa34BbyqSEpNbZQG1j",
  "key32": "51YVdpoGonu38B1uErzCNKnjZsMeexHPRNyVsLzKn9FeSgqrReBFjSncj9VbrPFC8bpuZDpaPnYpXpetUD9crnZ6",
  "key33": "375yGGA4U9r9dsvffY2P5AmKPJ9nYqAXuA27qLygDMeqYAo8TASC88gNZczfnL9qB6D6p6QDoq8b9tns52x45kE5",
  "key34": "4whkfPtW7tcMVkXso9xWG9MccjtviLhYuy32hYvADMqiqcMSN4GpuPvmgictTgeS1CqTySWAvX9VL4ZsPgA693Fe",
  "key35": "2czceQeKEhYCQ4EeqWfR9kPdkLBq5ysZCPsBxHqkqyPQW8AyW9AzaborMdgjKVNUJyDxkQsWC7t8jvq2SUH29SHp",
  "key36": "4uxvNiseJz9NghERAMRUrMhaFVGtKAZH3AzFMHnmGzFb783SZ2HYRsRBRwVDqhTeSDFQLM4bZ8C69u6ejuoGoRpn",
  "key37": "5z8EQHXPeovzWvNYaitE4A7iQxMeJH8WLmWevP3rqsRUmK9HaiSG91K7k3xVHGfetHNZ9LwFkeRY3S3NH56ufoXc"
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
