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
    "2agzyZVY9RKTV9oTq3kMtRzppYkPAKwXiAM4kFduckP2RhEfpwGsrHqFertcuKpP9drjpVtCJCq7j7QonGLcrARS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGTGXitGJdn834x8RLzN5GYevw4iNyNRpcjYeKjafVEioabbcoLhWUFzRVUbwJNG6hVccYAuh2K5faEC2emwoNq",
  "key1": "6qPUDnmqwTN9vxWBvFuKSrpSmVbYtbqaeuUiM8wdWizpEFppD95qC8LJYLePckeyb84FbfTqjvB5sACpg81Lvs1",
  "key2": "2acfBnX3CetWRGvDeGh2HaJW9q6t39iRt84BJ7HU64Kq9tLMxNnLSHbNzxFn4sZGhCwNWufetRDNPoa9GmptTAiB",
  "key3": "3i34HRbbfHCEJbA4bqSM5cktBUBsemQ4TowXdSbKdG8zUVHPvUetoxMuqdvJs2GETajNmbMZjZhJAhDGdCDRi7gL",
  "key4": "2CRVCuCrSUxDRCTUymfFi3UgDegR4o3tuEKc8A7NVjHs6o8KE4hptVpcs86bCFU3ZrVQF9kgsEUPXoFnnLp2BJBp",
  "key5": "3deqgDRA5E3jXN2BiwEYmcnXhq1yabFKAV2i3zc5fQSNPrQB2MBqB8ijVRxLdWsKFs8EDxkaGzyEQHRF8JzcKicr",
  "key6": "3UeUcvUxLhL4izGRFohdPsjPosckL7mMEovgHiVCcEPqzi2eURhYDFv2zPNb7rn8zneSjua5E2b6W3H3maLWjCFT",
  "key7": "4GnoBc8fkSrwpVyWpEAU2XjKWGpSdQdEokqwqe8y1yNLc9Ncy9f8DXTQ4Lt1rzxWoZ1xGvFNKNTJYeH3ZUQJKJst",
  "key8": "4Cys5dPq9eEr67JSurA1sdJ1Mbr8RvVXCLZN94Ht5hHkfWXS9MYCFQw2QA7G74TdkyS2SqySewHULFzSgGRV1UAa",
  "key9": "2xZd4TP4VoHnPxyT2Xa4BzW2suWjCJLH9PXtDMpgkxi5sV2SqxPtmiQH2FUj7dgem7Qj44buhjoHYwn2fw9XKymx",
  "key10": "5EZCwGPfErs1zpRRHA23TsrmT7YityA4mrkDqSccRpbfu1RCJo3r6amabuur8yVJ2vKCZE1w5eVAVgCDGZVntsg1",
  "key11": "5mUo5Sat9ytrTP7AhXqsmWGahgcDwMbSthaWFXo2sAMxiD4k4NGmdTehipwQgjnb6g5gmVeyNwp7c8bCugxrgHLx",
  "key12": "2WmQU8pamgjxt37tDuSJFkWfD3mwVbEmmoKr1pbnW6DGr7kJzGUEJLkDCUWiuDEgwBNdkGUdAZYWaq9Cx6JDR2ba",
  "key13": "3v7kP79mgTudVTXJRRbHpTv6PeaUbw8YHJGDmn49h7GqUMRSpyxzt5c8y45BgyiSjuYnJBQ4cER5Lb2KSmgxrguU",
  "key14": "539FAgneMMocqheR4PXz68uRgUPndoxx4dpAQXFB8YxjoNUdG7nFcbq8padDCeoSd6xUrqE1RSPmSur3gDkSApyh",
  "key15": "2hsadb5T5L8HNrA9BNfT1rXu1DrG5WTm932AvWk6aQqNdBSp5fCCccFF978qfmEXq3ukCha9KUD23y9CHAaNXmBF",
  "key16": "3Nm4cUxTze8gAgWM9AamRqba86Z44hYFxCdabLKWujes3SgayzESmy7cjD8NPCGpHNLUq6XYD4SJKjrFvzxWGjAe",
  "key17": "4hh5J3X6W3nvjseHVxid6M79BMq3XW7Dxgq4epRkm9KXTfGGYp8N42DX5s3NFf2YYfbVWYuy1usnuC9VLSUK2v2",
  "key18": "n2Ty3WS5nFM8oW1fceTRXhsKxUN4JQRWyYqMZtKunCpEU4mspW5zk7Hsq9wcZJGfBdNZnAeUs6pJgTEPyD1CkVK",
  "key19": "3LNcx8boYdT3JfJCWPHjcN2fYfNCBkBq6bENP43VwsPQQX3dZnMXS4G4mS2zWDuufJXzZEtmjFiLgdW2YFQ38w1n",
  "key20": "5djyYQTmRjFTsqM3CeCyEX1i1CmsNh3B5Y9ZTsXQJe6uCNzwAu4hmGnfkREiUCwjxstGD8e2mzFzxxta9fHUGRdy",
  "key21": "4qMnZFpdutSYggehHka6pRR7rQuJUyE8rUYktc13YTRdxek3huLfmkenYhhCu561qoBu9dqTag6cKY6CS6sbUT8u",
  "key22": "2ijqoyrMHoHV1UzKk34ronWUsRH1BnCLWTSsncMdvzyNcc4RUAtHGRSHdbFVPvjYWfrjUMcBykkGrApgiuM4SkF7",
  "key23": "3bsEJ2qwus4hHsTbVkvZfk59f7J8JjLEjD648L8rMtJN3MziSGfbnSsWa57Fe2ocnE14yfMjSuMfGmcgS6x263iU",
  "key24": "5U1iwRzhAnkZiptGpQRM6NpTDTmHJvzj1zN7db4GcPznMhogW8G59e562t5dUrxUqLtXW4JTEACUBfx9EyFmxvnR",
  "key25": "3PfXpraX1B4QQm6JSRRhz7zPMeu3eAaNr4Aob8hkgUuTTk3DhqZTMPBwF1mtggcagJ3Q2t31Qia98DdC6numJHXR",
  "key26": "3JEaVu4B8HtWtz5cF12UcXJmDbRPcaGdWKY5iQp2NexEJpv471xdTGTCv7JLLosbdgvwtFGuWffTXN3NLXAeB2eY",
  "key27": "2iaejhowMXZHy3ty1NakQtMjuJDU9HSsU8h7C4bJf1sP4RpCcdMuBeVGKzJtLJeNw8yzQigo2pFFPQaz5evpEFs6",
  "key28": "3GgGEHfdHfvWbLJrRh9sqjeHGeb3pPV87RQF85zUbvyx4Vcbvk5cUUvhh9w5PPcmQDqZ8FrvKfCXeEZ3oXdwF1Jv",
  "key29": "4QH8QEfEEeJg7V3BPRoy4KXStEbBxEna8Q5HY3zjjjBY5guahCzdmYdveKc4JVQtRkgW2cNmV2mfEmwNdiDyikTJ",
  "key30": "3Uw3n1YXBk4sDtFjpk1kkTTFXGQb1vcgMZcQEdjSyqYep4zPQPhvK1wsYgmQqr1mqTzJDSCQgXVj19Y4AsW7zAK4",
  "key31": "LatFd3eeGnq6ok9wWWxBGWBw5rVKs6RefAyW7vxuuZ6T7fyVgR2pzeLRBtfQ3cy14tyo91vUt7RnpdaLTXA9af1",
  "key32": "ysJ7KNyoqASocpgR7RWJv6ekug9zMR67zW3qmfpw9LPxmRK31sm6mWBvCMDnPdMcXxtPRyhhnV5SjJuJgjpEuWh",
  "key33": "5hLcYCNekWDCKrc3C3Tk2Dgq3B7yy7nRS4oEDqHHv2UQ6z3XJqrKPkSWJFxsePjrzGYVekzkDRLa1aSdLxE9FoSo",
  "key34": "4nW4snH39iw4BptBziQLW4ukf9K5U2u3YvYB3YB22WqTVzMrBQCFGbehYmMFtgc1WgnTDnTRSrwP5iyXs42zJo3R",
  "key35": "4KvQ4ZQ7S7CSTZWD6saLtxo4uuDijRbYygGStxWYmqC9dNqDuWsD14DrkjEupBTrBPXnfBJdgkz25SmanqT8zhjN",
  "key36": "PdmTPn6gwTYWKzBMy2PEty2k5suwkWqdi8GUeRP9Bi3a7PfnD7Sok45ERhYjhGFV6dHEWpHyjGyqtV197cvb6X4",
  "key37": "3pyRvwfzMWTSJHoeKH1CiZDPbyaAVYsBWLWgQrpJpBcPd8sLrbMvdcJ9KwiXxAGvc1ZuScNRTQZZ3P6ZfFgkj4j3",
  "key38": "2iKQN3Jrc5FxzxN8QN5koyijfpfNwU7oL7kytA63XSDHM3QckEp21WtBYaLDtApyBU9D4rWZigriygkPnFMwaXhy",
  "key39": "xyAX82Qr7wRTeCxSDExyduY5Gw4aHn7DzxwHknmsZeLVC7wgwAZX5TuGqE7QNqqbKFSWEGKe5oEvCMN7VjfZqDe",
  "key40": "4176aJEPCmijo4z7h8RNnaqF1CNGtxkbrGPzAd5aRDvjuznpLaRMLNkR58wUjV67993nXUPg9Zx2XW4e89FuVRUs",
  "key41": "3C9iTRCh1w4G9NoAyHfECUvNGjrnM5qjE4vcVkP22YKhAj6VY2GTjsyY3xq49KbYqGViv4ptPT8Ve2nzsyyJTc3U",
  "key42": "5zERu7X9zCsUcuLZDMXCQ7aQshdNzVNgHM94ms6w2qk7sbJAVBTPyd2Vwku58jyzHfetHefayxxZVh3QS37LjNLe",
  "key43": "3KpbeJtwfioigRqsmBwbRfm6Ei7QQWxYQDNDQYVD48288B5yoU8LbNXrg5xiftEydbQ2FMsNEXaQuJdMw8QHjqXa",
  "key44": "34b16R7GMsVAddzWDYX9ZWnnqrtonKDEYBtZ54wikLH3Dts3CnLGT8DC55316XJZmPdxpaCBh4JSrtajZsL38fUc",
  "key45": "dQaHgijdtaYoaNTQCWSE2oS8K2bVpLDTMYZ7HfzMNk8oWqMwbK5fTu3PukKwkCBytVZJKZzyv68tXpVvXVXSeMX",
  "key46": "2kUqWo1EpwUDK1zv5cFXeNsQgvLRdPohk8DfdG1pSjifbsYdnu3JvV4sQqAWc7PkJxrpH4wm6hqQagiK3DKHza6G",
  "key47": "iuVqUyPDnBDn5vJ5kZnECzTacX3mtdPEQrSZGsKB7bAioDkECuYMXbaGSjSf3cab4gv96yiPKCBwwiHt6RjJTLP"
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
